import { useState } from "react";
import layers from "../assets/layers";
import MapCanvas from "./Map";
const Home = () => {
  const [selectedLayers, setSelectedLayers] = useState([]) as any;
  const [layerData, setLayerData] = useState(layers) as any;
  const toggleLayer = (e: any) => {
    const newLayer = layerData.map((layer: any) => {
      if (layer.id === e.id) {
        return {
          ...layer,
          isShown: !layer.isShown,
        };
      } else {
        return layer;
      }
    });
    setLayerData(newLayer);
  };
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 0,
  });
  const handleActiveLayers = (e: any) => {
    setPosition({
      ...position,
      latitude: parseFloat(e.latitude),
      longitude: parseFloat(e.longitude),
      zoom: 6,
    });
    setSelectedLayers({
      name: e.name,
    });

    setLayerData((prev: any) => {
      return prev.map((layer: any) => {
        if (layer.id === e.id) {
          return {
            ...layer,
            isShown: !layer.isShown,
          };
        } else {
          return {
            ...layer,
          };
        }
      });
    });
  };
  const activeLayers = layerData.filter((e: any) => e.isShown === true);
  return (
    <div
      style={{
        overflow: "hidden",
      }}
    >
      <div className="card">
        <div className="heading">
          <p>Select a data source</p>
          <p>{layerData.length} data source available</p>
        </div>
        <div className="btn-container">
          {layerData?.map((e: any, index: any) => (
            <div
              key={index}
              style={{
                borderLeft: `${
                  e.name === selectedLayers?.name ? "8px solid green" : "none"
                }`,
                display: "flex",
              }}
            >
              <button onClick={() => handleActiveLayers(e)}>
                <h4>{e.name}</h4>
                <p>{e.layer}</p>
              </button>
              <input
                id="toggle"
                checked={
                  layerData.find((layer: any) => layer.id === e.id).isShown
                }
                onChange={() => toggleLayer(e)}
                type="checkbox"
                style={{
                  marginRight: "10px",
                  width: "20px",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          height: "100vh",
          width: "100vw",
          position: "relative",
        }}
      >
        <MapCanvas position={position} activeLayers={activeLayers} />
      </div>
    </div>
  );
};

export default Home;
