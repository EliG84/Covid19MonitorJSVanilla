import { loadGraph, graph_ar } from "./graphMngr.js"
import { country_ar, renderCountries } from "./countryMngr.js";

let flag = 0;

export const getEvents = () => {
    $('input').each(function() {
        $(this).click(function (){
            if(this.checked){
                loadGraph(graph_ar,$(this).data('graph'));
            }
        });
    });
    let btn = document.querySelector('#reset');
    btn.addEventListener('click', () => {
        flag = 0;
        graph_ar.splice(0,graph_ar.length);
        loadGraph(graph_ar,'cases');
        renderCountries(country_ar);
        let radio = document.querySelector('#first');
        radio.checked = true;
        $('#parent div').removeClass('divBack');
    });

    $('#filter').click(function(){
        if(!flag){
            let temp_ar = country_ar.filter(item => Number(item.cases) >= 10000 );
            graph_ar.splice(0,graph_ar.length);
            loadGraph(graph_ar,'cases');
            renderCountries(_.sortBy(temp_ar, 'country'));
        }
        flag = 1;
    })
}