function makeTVRPlot(externalData, tvrDiv) {
    Plotly.d3.csv(externalData, function(data)
        { 
            processTVRData(data, tvrDiv) 
        } 
    );
};

function processTVRData(allRows, tvrDiv) {
    console.log(allRows);
    dates = [], r = [], lower = [], upper = [];

    for (var i = 0; i < allRows.length; i++) {
        row = allRows[i];
        dates.push(row['date']);
        r.push(row['r']);
        lower.push(row['lower']);
        upper.push(row['upper']);

    }
    console.log('Dates', dates, 'R(t)', r, "Lower", lower, "Upper", upper);
    makeTVRPlotly(r, dates, tvrDiv, lower, upper);
};

function makeTVRPlotly(r, dates, tvrDiv, lower, upper){    
    var trace = {
        x: dates,
        y: r,
        name: 'New Cases',
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
    };

    var layout = {
        title: 'Time-varying R',
        legend: {
            "orientation": "h",
            y: -.2,
        },
        yaxis: {
            title: {
                text: 'R(t)'
            },
        },
    };

    var data = [trace]

    Plotly.newPlot(
        tvrDiv, 
        data,
        layout,
    );
};