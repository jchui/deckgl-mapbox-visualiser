import GreatCircleData1 from "./json/GreatCircleData.json";
import HexagonLayerData from "./json/HexagonLayerData.json";
import FilteredCombinedData2 from "./json/FilteredCombinedData-2.json";

const layers = [
  {
    id:1,
    name: "Hospitals (England) Location Dataset",
    description: "Hospitals across England plotted by longitude + latitude.",
    source: "https://www.nhs.uk/about-us/nhs-website-datasets/",
    json: GreatCircleData1,
    layer: "greatcircle",
    longitude: -1.49,
    latitude: 53.5,
    isShown: false,
  },
  {
    id: 2,
    name: "GP Practices (England) Location Dataset",
    description: "GP Practices across England plotted by longitude + latitude.",
    source: "https://www.nhs.uk/about-us/nhs-website-datasets/",
    json: HexagonLayerData,
    layer: "hexagon",
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
    json: FilteredCombinedData2,
    layer: "scatterplot",
    longitude: -1.49,
    latitude: 53.5,
    isShown: false,
  },
  {
    id: 6,
    name: "Data set 5",
    description: "",
    json: FilteredCombinedData2,
    layer: "scatterplot",
    longitude: -1.49,
    latitude: 53.5,
    isShown: false,
  },
];
export default layers;
