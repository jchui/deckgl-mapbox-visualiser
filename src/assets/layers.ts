import ScatterplotData1 from "./json/ScatterplotData.json";
import GreatCircleData1 from "./json/GreatCircleData.json";
import HexagonLayerData from "./json/HexagonLayerData.json";
import FilteredCombinedData2 from "./json/FilteredCombinedData-2.json";

const layers = [
  {
    id:1,
    name: "Data set 2",
    description: "",
    json: GreatCircleData1,
    layer: "greatcircle",
    longitude: -1.4157,
    latitude: 52.2324,
    isShown: false,
  },
  {
    id: 2,
    name: "Data set 3",
    description: "",
    json: HexagonLayerData,
    layer: "hexagon",
    longitude: -1.4157,
    latitude: 52.2324,
    isShown: false,
  },
  {
    id: 3,
    name: "Data set 5",
    description: "",
    json: FilteredCombinedData2,
    layer: "scatterplot",
    longitude: -1.4157,
    latitude: 52.2324,
    isShown: false,
  },
];
export default layers;
