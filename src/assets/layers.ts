import GreatCircleData1 from "./json/GreatCircleData.json";
import HexagonLayerData from "./json/HexagonLayerData.json";
import FilteredCombinedData2 from "./json/FilteredCombinedData-2.json";
import Hospitals from "./json/Hospitals.json";
import GPPractices from "./json/GPPractices.json";

const layers = [
  {
    id:1,
    name: "Hospitals (England) Location Dataset",
    description: "Hospitals across England plotted by longitude + latitude. Hospitals are marked in blue.",
    source: "https://www.nhs.uk/about-us/nhs-website-datasets/",
    json: Hospitals,
    layer: "scatterplot",
    scatterplotColor: [27, 194, 245],
    longitude: -1.49,
    latitude: 53.5,
    isShown: false,
  },
  {
    id: 2,
    name: "GP Practices (England) Location Dataset",
    description: "GP Practices across England plotted by longitude + latitude. GP Practices are marked in pink.",
    source: "https://www.nhs.uk/about-us/nhs-website-datasets/",
    json: GPPractices,
    layer: "scatterplot",
    scatterplotColor: [0, 181, 12],
    longitude: -1.49,
    latitude: 53.5,
    isShown: false,
  },
  {
    id: 3,
    name: "Data set 3",
    description: "",
    json: FilteredCombinedData2,
    layer: "scatterplot",
    longitude: -1.49,
    latitude: 53.5,
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
    isShown: false,
  },
  {
    id: 6,
    name: "Data set 5",
    description: "",
    json: GreatCircleData1,
    layer: "greatcircle",
    longitude: -1.49,
    latitude: 53.5,
    isShown: false,
  },
];
export default layers;
