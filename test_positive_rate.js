function makeTPRPlot(externalData, tprDiv) {
    Plotly.d3.csv(externalData, function(data)
        { 
            processTPRData(data, tprDiv) 
        } 
    );
};

function processTPRData(allRows, tprDiv) {
    console.log(allRows);
    dates = [], rate = [], hoverText = []

    for (var i = 0; i < allRows.length; i++) {
        row = allRows[i];
        dates.push(row['date']);
        rate.push(row['tpr']);
        hoverText.push(row['text']);

    }
    console.log('Dates', dates, 'Rate', rate, "Text", hoverText);
    makeTPRPlotly(rate, dates, tprDiv, hoverText);
};

function makeTPRPlotly(rate, dates, tprDiv, hoverText){    
    var trace = {
        x: dates,
        y: rate,
        text: hoverText,
        type: 'scatter',
        mode: 'lines+markers',
        marker: {
            color: '#262626',
            size: 4,
            symbol: 3,
        },
        line: {
            color: '#36a30b',
            width: 5,
        },
        hoverinfo: 'text',
    };


    var layout = {
        title: 'Test positive rate',
        yaxis: {
            title: {
                text: 'Test positive rate'
            },
        },
        hovermode:'closest',
        showlegend: false,
    };

    var data = [trace]

    Plotly.newPlot(
        tprDiv, 
        data,
        layout,
    );
};