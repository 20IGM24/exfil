
// Data
import mapsInfo from "../../data/maps/maps.json";
import mapPointsData from "../../data/maps/renegade_oil/points.json";

import mapLabelsData from "../../data/maps/renegade_oil/labels.json";
import { MapData} from "../data";
import MapConfig from "../map-config";

// Tag-Selector
import "../tag-selector";


const mapId = "renegade_oil"



// Map

const mapInfo = mapsInfo.filter((map) => map.id === mapId)[0];
const mapData = new MapData(mapInfo, mapPointsData, mapLabelsData);
const mapRootPath = mapData.getRootPath();
const mapPoints = mapData.getPoints();
const mapLabels = mapData.getLabels();
const mapConfig = new MapConfig(mapInfo, mapData.rootPath, mapPoints, mapLabels);
