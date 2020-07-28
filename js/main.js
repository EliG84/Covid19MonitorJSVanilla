import { getRestApi } from "./apiServ.js";
import { loadGraph } from "./graphMngr.js";
import { getEvents } from "./eventsFromView.js";

window.onload = () => {
    let radio = document.querySelector('#first');
    radio.checked = true;
    loadGraph();
    init();
    getEvents();
}

const init = () => {
    let url = 'https://coronavirus-19-api.herokuapp.com/countries';
    getRestApi(url);
}