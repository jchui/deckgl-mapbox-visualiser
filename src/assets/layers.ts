import Hospitals from './json/Hospitals.json';
import GPPractices from './json/GPPractices.json';
import LondonMTN from './json/LondonMTN.json';
import FilteredCombinedData2 from './json/FilteredCombinedData-2.json';
import HexagonLayerData from './json/HexagonLayerData.json';

const commonCoordinates = {
  longitude: -1.49,
  latitude: 53.5,
  zoom: 5.5,
};

const layers = [
  {
    id: 1,
    name: 'Hospitals (England) Location Dataset',
    description: 'Hospitals across England plotted by longitude + latitude. Hospitals are marked in blue. Data from 2020.',
    source: 'https://www.nhs.uk/about-us/nhs-website-datasets/',
    json: Hospitals,
    layer: 'scatterplot',
    scatterplotColor: [27, 194, 245],
    isShown: false,
    ...commonCoordinates,
  },
  {
    id: 2,
    name: 'GP Practices (England) Location Dataset',
    description: 'GP Practices across England plotted by longitude + latitude. GP Practices are marked in green. Data from 2020.',
    source: 'https://www.nhs.uk/about-us/nhs-website-datasets/',
    json: GPPractices,
    layer: 'scatterplot',
    scatterplotColor: [0, 181, 12],
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
    name: 'Data set 5',
    description: '',
    json: FilteredCombinedData2,
    layer: 'scatterplot',
    isShown: false,
    ...commonCoordinates,
  },
  {
    id: 5,
    name: 'Data set 4',
    description: '',
    json: HexagonLayerData,
    layer: 'hexagon',
    isShown: false,
    ...commonCoordinates,
  },
];

export default layers;
