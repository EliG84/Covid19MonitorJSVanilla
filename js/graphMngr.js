export const graph_ar = [];

export const gOptions = {
    animationEnabled: true,
	title: {
		text: "Corona Graph"
	},
	axisY: {
		title: "",
		// suffix: "%",
		includeZero: false
	},
	axisX: {
		title: "Countries"
	},
	data: [{
		type: "column",
		yValueFormatString: "#,##0.0#"%"",
		dataPoints: [
			// { label: "Iraq", y: 10.09 },	
			// { label: "Turks & Caicos Islands", y: 9.40 },	
			// { label: "Nauru", y: 8.50 },
			// { label: "Ethiopia", y: 7.96 },	
			// { label: "Uzbekistan", y: 7.80 },
			// { label: "Nepal", y: 7.56 },
			// { label: "Iceland", y: 7.20 },
			// { label: "India", y: 7.1 }
			
		]
	}]
}

export const addRemoveData = (obj) => {
    if(graph_ar.includes(obj)){
        let temp_ar = graph_ar.filter(item => item.country !== obj.country);
        graph_ar.splice(0,graph_ar.length);
        graph_ar.push(...temp_ar);
    }else {
        graph_ar.push(obj);
    }
    let title;
    $('input').each(function(){
        if(this.checked){
            title = $(this).data('graph');
        }
    });
    loadGraph(graph_ar,title);
}

export const loadGraph = (_ar = graph_ar,title = 'cases') => {
    gOptions.data[0].dataPoints = [];
    _ar.map(item => {
        gOptions.data[0].dataPoints.push({label: item.country, y: item[`${title}`]});
    })
    gOptions.title.text = title;
    $("#chartContainer").CanvasJSChart(gOptions);
}