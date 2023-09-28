/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useState } from 'react';
import { AiFillDatabase } from 'react-icons/ai';
import layers from '../assets/layers';
import MapCanvas from './Map';

function Home() {
  // eslint-disable-next-line no-unused-vars
  const [selectedLayers, setSelectedLayers] = useState<any>([]);
  const [layerData, setLayerData] = useState<any>(layers);
  const [position, setPosition] = useState({
    longitude: -1.49,
    latitude: 53.5,
    zoom: 5.5,
  });

  const toggleLayer = (e: any) => {
    const newLayer = layerData.map((layer: any) => {
      if (layer.id === e.id) {
        return { ...layer, isShown: !layer.isShown };
      }
      return layer;
    });
    setLayerData(newLayer);
  };

  const handleActiveLayers = (e: any) => {
    setPosition({
      ...position,
      latitude: parseFloat(e.latitude),
      longitude: parseFloat(e.longitude),
      zoom: parseFloat(e.zoom),
    });

    setSelectedLayers({ name: e.name });

    setLayerData((prev: any) => prev.map((layer: any) => {
      if (layer.id === e.id) {
        return { ...layer, isShown: !layer.isShown };
      }
      return layer;
    }));
  };

  const activeLayers = layerData.filter((e: any) => e.isShown);

  return (
    <div style={{ overflow: 'hidden' }}>
      <div className="logo">
        <h1>Healthcare Data Visualisation</h1>
        <p>Description goes here</p>
      </div>

      <div className="menu">
        <div className="menu-header">
          <p className="title">Healthcare Datasets</p>
          <p className="description">
            Visualize and explore UK healthcare data on an interactive map.
          </p>
          <p className="description">
            {layerData.length}
            {' '}
            datasets ready for visualisation.
          </p>
        </div>

        <div className="datasets-list">
          {layerData?.map((e: any, index: number) => (
            <div key={index} className="dataset">
              <a onClick={() => handleActiveLayers(e)}>
                <div className="icon">
                  <AiFillDatabase />
                </div>
                <h4>{e.name}</h4>
              </a>
              <input
                id="toggle"
                checked={layerData.find((layer: any) => layer.id === e.id).isShown}
                onChange={() => toggleLayer(e)}
                type="checkbox"
              />
              <span className="checkbox-select-toggle">
                <p className="description">{e.description}</p>
                <p className="source">{e.source}</p>
                <span className="active">Active</span>
                <span className="layer-type">
                  Type:&nbsp;
                  {e.layer}
                </span>
              </span>
            </div>
          ))}
        </div>

        <div className="menu-footer">
          <p>
            Hold Ctrl or Right-Click and drag to rotate the map.
          </p>
        </div>
      </div>

      <div className="footer">
        <p>
          Built in ReactJS with DeckGL and MapBox. Copyright &copy; 2023.
        </p>
      </div>

      <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
        <MapCanvas position={position} activeLayers={activeLayers} />
      </div>
    </div>
  );
}

export default Home;
