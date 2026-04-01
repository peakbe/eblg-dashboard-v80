import { initMap } from "./js/map.js";
import { initUI } from "./js/ui.js";
import { loadMetar } from "./js/metar.js";
import { loadTaf } from "./js/taf.js";
import { loadFids } from "./js/fids.js";
import { initHeatmapToggle } from "./js/ui.js";
import { initHeatmapToggle, initHeatmapHistory, initClusterToggle, initDebugPanel } from "./js/ui.js";

window.onload = () => {
    window.map = initMap();
    initUI();
    initHeatmapToggle(window.map);
    initHeatmapHistory(window.map);
    initClusterToggle(window.map);
    initDebugPanel();
    loadMetar();
    loadTaf();
    loadFids();
