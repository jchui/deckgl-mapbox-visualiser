// @ts-ignore
import DeckGL, {
  ScatterplotLayer,
  HexagonLayer,
  GreatCircleLayer,
  //   @ts-ignore
} from "deck.gl";
import { Map } from "react-map-gl";
import { useMemo, useState } from "react";
import Loader from "../components/Loader";
const MALE_COLOR = [0, 128, 255];
const FEMALE_COLOR = [255, 0, 128];
const MAP_STYLE =
  "https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json";
// @ts-ignore

const MAPBOX_ACCESS_TOKEN = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
const MapCanvas = ({ position, activeLayers }: any) => {
  const layers = useMemo(() => {
    if (!activeLayers) return [];
    return activeLayers.map((e: any) => {
      if (e.layer === "scatterplot") {
        const scatterlayer = new ScatterplotLayer({
          id: e.name,
          data: e.json,
          radiusScale: 10,
          radiusMinPixels: 1,
          getPosition: (d: any) => [d[0], d[1], 0],
          getFillColor: (d: any) => (d[2] === 1 ? MALE_COLOR : FEMALE_COLOR),
          extruded: true, // Enable extrusion
          pickable: true,
        });
        return scatterlayer;
      }
      if (e.layer === "hexagon") {
        const hexagonLayer = new HexagonLayer({
          id: e.name,
          data: e.json,
          elevationRange: [0, 3000],
          elevationScale: e.json && e.json.length ? 50 : 0,
          extruded: true, // Enable extrusion
          getColor: [255, 0, 100],
          getElevation: (d: any) => 100,
          getPosition: (d: any) => [d.lng, d.lat],
          pickable: true,
        });
        return hexagonLayer;
      } else if (e.layer === "greatcircle") {
        const greatCircleLayer = new GreatCircleLayer({
          id: e.name,
          data: e.json,
          getSourcePosition: (d: any) => d.from.coordinates,
          getTargetPosition: (d: any) => d.to.coordinates,
          getSourceColor: [64, 255, 0],
          getTargetColor: [0, 128, 200],
          widthMinPixels: 5,
          extruded: true, // Enable extrusion
          getElevation: (d: any) => 1000,
          pickable: true,
        });
        return greatCircleLayer;
      }
    });
  }, [activeLayers]);

  const INITIAL_VIEW_STATE = {
    latitude: position.latitude,
    longitude: position.longitude,
    zoom: position.zoom,
    maxZoom: 16,
  };
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      {isLoading && (
        <div
          style={{
            position: "absolute",
            zIndex: 1000,
            left: "50%",
            top: "50%",
          }}
        >
          <Loader />
        </div>
      )}
      <DeckGL
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
        layers={layers || []}
        onWebGLInitialized={() => setIsLoading(false)}
        getTooltip={(object: any) => {
          if (object.layer && object.coordinate) {
            return {
              html: `
            <div>
              <h2>${object?.layer?.id}</h2>
              <p>X: ${object?.coordinate[0]}</p>
              <p>Y: ${object?.coordinate[1]}</p>
            </div>
            `,
            };
          }
        }}
      >
        {!isLoading && (
          <Map
            optimizeForTerrain
            mapStyle={MAP_STYLE}
            mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
            antialias
          />
        )}
      </DeckGL>
    </>
  );
};

export default MapCanvas;
