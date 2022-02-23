function makeTVRPlot(externalData, tvrDiv) {
    Plotly.d3.csv(externalData, function(data)
        { 
            processTVRData(data, tvrDiv) 
        } 
    );
};

function processTVRData(allRows, tvrDiv) {
    console.log(allRows);
    dates = [], r = [], lower = [], upper = [], hoverText = []

    for (var i = 0; i < allRows.length; i++) {
        row = allRows[i];
        dates.push(row['date']);
        r.push(row['r']);
        lower.push(row['lower']);
        upper.push(row['upper']);
        hoverText.push(row['text']);

    }
    console.log('Dates', dates, 'R(t)', r, "Lower", lower, "Upper", upper, "Text", hoverText);
    makeTVRPlotly(r, dates, tvrDiv, lower, upper, hoverText);
};

function makeTVRPlotly(r, dates, tvrDiv, lower, upper, hoverText){    
    var trace = {
        x: dates,
        y: r,
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

    var upper = {
        x: dates,
        y: upper,
        type: 'scatter',
        line: {
            color: '#36a30b',
            width: 0,
            opacity: 0.2,
        },  
        hoverinfo: 'skip', 
    }

    var lower = {
        x: dates,
        y: lower,
        type: 'scatter',
        fill: 'tonexty',
        line: {
            color: '#36a30b',
            width: 0,
            opacity: 0.2,
        },
        hoverinfo: 'skip',
    }

    var layout = {
        title: 'Time-varying R',
        yaxis: {
            title: {
                text: 'R(t)'
            },
        },
        hovermode:'closest',
        shapes: [{
            type: 'line',
            xref: 'paper',
            x0: 0,
            y0: 1,
            x1: 1,
            y1: 1,
            opacity: .5,
            line: {
              color: 'ff9933',
            }
        }],
        showlegend: false,
    };

    var data = [upper, lower, trace]

    var config = {responsive: true};

    Plotly.newPlot(
        tvrDiv, 
        data,
        layout,
        config,
    );
};