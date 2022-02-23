function makeStateBarPlot(externalData, plotDiv, locale) {
    Plotly.d3.csv(externalData, function(data)
        { 
            processStateBarData(data, plotDiv, locale) 
        } 
    );
};

function processStateBarData(allRows, plotDiv, locale) {
    console.log(allRows);
    dates = [], newCases = [], fatalities = [], recovered = [];

    for (var i = 0; i < allRows.length; i++) {
        row = allRows[i];
        if (row['abbrev'] == locale)
        {
            newCases.push(row['daily_cases']);
            fatalities.push(row['daily_deaths']);
            recovered.push(row['daily_recovered']);
            dates.push(row['date']);
        }
    }
    console.log('Dates', dates, 'New Cases', newCases, "Fatalities", fatalities, "Recovered", recovered);
    makeBarPlotly(newCases, fatalities, recovered, dates, plotDiv);
};

function makeBarPlotly(newCases, fatalities, recovered, dates, plotDiv){    
    var trace1 = {
        x: dates,
        y: newCases,
        name: 'New Cases',
        type: 'bar',
        marker: {
            color: '#f2c82e',
        }
    };

    var trace2 = {
        x: dates,
        y: fatalities,
        name: 'Fatalities',
        type: 'bar',
        marker: {
            color: '#ed553b',
        }
    };
    
    var trace3 = {
        x: dates,
        y: recovered,
        name: 'Recovered',
        type: 'bar',
        marker: {
            color: '#138808',
        }
    };

    var data = [trace1, trace2, trace3];

    var layout = {
        title: 'Daily number of new COVID-19 cases, fatalities and recovered in India',
        barmode: 'stack', 
        xaxis: 
            {
                tickangle: -45
            },
        legend: {
            "orientation": "h",
            y: -.2,
        },
        yaxis:
        {
            title: 
            {
                text: 'Daily counts'
            }
        },
    };

    var config = {responsive: true};

    Plotly.newPlot(
        plotDiv, 
        data, 
        layout,
        config
    );
};