import Hospitals from './json/Hospitals.json';
import GPPractices from './json/GPPractices.json';
import LondonMTN from './json/LondonMTN.json';
import UKPopulation from './json/UKPopulation.json';

const commonCoordinates = {
  longitude: -1.49,
  latitude: 53.5,
  zoom: 5.5,
};

const layers = [
  {
    id: 1,
    name: 'Hospital (England) Locations',
    description: 'Hospitals across England plotted by longitude + latitude. Hospitals are marked in blue. Data from 2020.',
    source: 'https://www.nhs.uk/about-us/nhs-website-datasets/',
    json: Hospitals,
    layer: 'scatterplot',
    scatterplotColor: [27, 194, 245],
    radius: 50,
    isShown: false,
    ...commonCoordinates,
  },
  {
    id: 2,
    name: 'GP Practice (England) Locations',
    description: 'GP Practices across England plotted by longitude + latitude. GP Practices are marked in green. Data from 2020.',
    source: 'https://www.nhs.uk/about-us/nhs-website-datasets/',
    json: GPPractices,
    layer: 'scatterplot',
    scatterplotColor: [0, 181, 12],
    radius: 50,
    isShown: false,
    ...commonCoordinates,
  },
  {
    id: 3,
    name: 'London Major Trauma Network',
    description: 'In regional trauma systems, hospitals receiving trauma patients are designated as either Major Trauma Centres (MTCs) or Trauma Units (TUs). MTCs have resources available 24 hours a day to manage severely injured patients, while trauma units (TU) are responsible for the local management of patients with less severe injuries.',
    source: 'https://www.c4ts.qmul.ac.uk/london-trauma-system/trauma-care',
    json: LondonMTN,
    layer: 'arc',
    height: 0.5,
    width: 2,
    sourceColor: [223, 7, 7],
    targetColor: [175, 90, 5],
    longitude: -0.17432,
    latitude: 51.51747,
    zoom: 11,
    isShown: false,
  },
  {
    id: 4,
    name: 'UK Population Density Map',
    description: 'UK Population Density Heatmap with 3D visualisation. Obtained from Deck.gl github examples.',
    json: UKPopulation,
    opacity: 0.5,
    layer: 'hexagon',
    isShown: false,
    ...commonCoordinates,
  },
];

export default layers;
