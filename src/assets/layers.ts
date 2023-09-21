import HexagonLayerData from "./json/HexagonLayerData.json";
import FilteredCombinedData2 from "./json/FilteredCombinedData-2.json";
import Hospitals from "./json/Hospitals.json";
import GPPractices from "./json/GPPractices.json";
import NWLondonMTN from "./json/NWLondonMTN.json";

const layers = [
  {
    id:1,
    name: "Hospitals (England) Location Dataset",
    description: "Hospitals across England plotted by longitude + latitude. Hospitals are marked in blue. Data from 2020.",
    source: "https://www.nhs.uk/about-us/nhs-website-datasets/",
    json: Hospitals,
    layer: "scatterplot",
    scatterplotColor: [27, 194, 245],
    longitude: -1.49,
    latitude: 53.5,
    zoom: 5.5,
    isShown: false,
  },
  {
    id: 2,
    name: "GP Practices (England) Location Dataset",
    description: "GP Practices across England plotted by longitude + latitude. GP Practices are marked in green. Data from 2020.",
    source: "https://www.nhs.uk/about-us/nhs-website-datasets/",
    json: GPPractices,
    layer: "scatterplot",
    scatterplotColor: [0, 181, 12],
    longitude: -1.49,
    latitude: 53.5,
    zoom: 5.5,
    isShown: false,
  },
  {
    id: 3,
    name: "North West London Major Trauma Network",
    description: "In regional trauma systems, hospitals receiving trauma patients are designated as either Major Trauma Centres (MTCs) or Trauma Units (TUs). MTCs have resources available 24 hours a day to manage severely injured patients, while trauma units (TU) are responsible for the local management of patients with less severe injuries.",
    source: "https://www.c4ts.qmul.ac.uk/london-trauma-system/trauma-care",
    json: NWLondonMTN,
    layer: "arc",
    width: 2,
    longitude: -0.17432,
    latitude: 51.51747,
    zoom: 11,
    isShown: false,
  },
  {
    id: 4,
    name: "Data set 5",
    description: "",
    json: FilteredCombinedData2,
    layer: "scatterplot",
    longitude: -1.49,
    latitude: 53.5,
    zoom: 5.5,
    isShown: false,
  },
  {
    id: 5,
    name: "Data set 4",
    description: "",
    json: HexagonLayerData,
    layer: "hexagon",
    longitude: -1.49,
    latitude: 53.5,
    zoom: 5.5,
    isShown: false,
  },
];
export default layers;
