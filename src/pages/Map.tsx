/* eslint-disable consistent-return */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import DeckGL, {
  ScatterplotLayer,
  HexagonLayer,
  GreatCircleLayer,
  ArcLayer,
} from 'deck.gl';
import { Map } from 'react-map-gl';
import { useMemo, useState } from 'react';
import Loader from '../components/Loader';

const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json';
const MAPBOX_ACCESS_TOKEN = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

function MapCanvas({ position, activeLayers }: any) {
  const [isLoading, setIsLoading] = useState(true);

  const layers = useMemo(() => {
    if (!activeLayers) return [];

    return activeLayers.map((e: any) => {
      switch (e.layer) {
        case 'scatterplot':
          return new ScatterplotLayer({
            id: e.name,
            data: e.json,
            radiusScale: 10,
            radiusMinPixels: 1,
            getPosition: (d: any) => [d[0], d[1], 0],
            getFillColor: e.scatterplotColor,
            extruded: true,
            pickable: true,
          });

        case 'hexagon':
          return new HexagonLayer({
            id: e.name,
            data: e.json,
            elevationRange: [0, 3000],
            elevationScale: e.json && e.json.length ? 50 : 0,
            extruded: true,
            getColor: [255, 0, 100],
            opacity: e.opacity,
            getElevation: (d: any) => 100,
            getPosition: (d: any) => [d.lng, d.lat],
            pickable: true,
          });

        case 'greatcircle':
          return new GreatCircleLayer({
            id: e.name,
            data: e.json,
            getSourcePosition: (d: any) => d.from.coordinates,
            getTargetPosition: (d: any) => d.to.coordinates,
            getSourceColor: [64, 255, 0],
            getTargetColor: [0, 128, 200],
            widthMinPixels: e.greatCircleWidth,
            extruded: true,
            getElevation: (d: any) => 1000,
            pickable: true,
          });

        case 'arc':
          return new ArcLayer({
            id: e.name,
            data: e.json,
            getSourcePosition: (d: any) => d.from.coordinates,
            getTargetPosition: (d: any) => d.to.coordinates,
            getSourceColor: e.sourceColor,
            getTargetColor: e.targetColor,
            getHeight: e.height,
            getWidth: e.width,
            extruded: true,
            pickable: true,
          });

        default:
          return null;
      }
    });
  }, [activeLayers]);

  const INITIAL_VIEW_STATE = {
    latitude: position.latitude,
    longitude: position.longitude,
    zoom: position.zoom,
    maxZoom: 16,
    pitch: 0,
    bearing: 0,
  };

  return (
    <>
      {isLoading && (
        <div style={{
          position: 'absolute', zIndex: 1000, left: '50%', top: '50%',
        }}
        >
          <Loader />
        </div>
      )}
      <DeckGL
        initialViewState={INITIAL_VIEW_STATE}
        controller
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
}

export default MapCanvas;
