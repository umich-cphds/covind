function makeVaxPlot(externalData, plotDiv) {
    Plotly.d3.csv(externalData, function(data)
        { 
            processVaxData(data, plotDiv) 
        } 
    );
};
   
function processVaxData(allRows, plotDiv) {
    console.log(allRows);
    dates = [], dailyDoses = [], hoverText = [];

    for (var i = 0; i < allRows.length; i++) {
        row = allRows[i];
        dates.push(row['Day']);
        dailyDoses.push(row['daily_doses']);
        hoverText.push(row['text']);
    }
    console.log('Dates', dates, 'Daily Doses', dailyDoses, 'Hover Text', hoverText);
    makeVaxPlotly(dailyDoses, dates, plotDiv, hoverText);
};

function makeVaxPlotly(dailyDoses, dates, plotDiv, hoverText){    
    var trace = {
        x: dates,
        y: dailyDoses,
        text: hoverText,
        type: 'bar',
        marker: {
            color: '#138808',
        },
        hoverinfo: 'text',
    };

    var layout = {
        title: 'Daily number of COVID-19 vaccines in India',
        yaxis: {
            title: {
                text: 'Number of Vaccines'
            },
        },
        showlegend: false,
        hovermode: 'closest',
    };

    var data = [trace];

    var config = {responsive: true};

    Plotly.newPlot(
        plotDiv, 
        data, 
        layout,
        config
    );
};

