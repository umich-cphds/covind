function makeplot() {
    Plotly.d3.csv("https://raw.githubusercontent.com/umich-cphds/cov-ind-19-data/master/source_data/package-data/processed/india_daily_barplot.csv", function(data){ processData(data) } );
};
   
function processData(allRows) {
    console.log(allRows);
    dates = [], newCases = [], fatalities = [], recovered = [];

    for (var i = 0; i < allRows.length; i++) {
        row = allRows[i];
        if (row['Type'] == 'New Cases')
        {
            newCases.push(row['Count']);
        }
        else if (row['Type'] == 'Fatalities')
        {
            fatalities.push(row['Count']);
        }
        else if (row['Type'] == 'Recovered')
        {
            recovered.push(row['Count']);
        }
        dates.push(row['date']);
    }
    console.log('Dates', dates, 'New Cases', newCases, "Fatalities", fatalities, "Recovered", recovered);
    makePlotly(newCases, fatalities, recovered, dates);
};

function makePlotly(newCases, fatalities, recovered, dates){
    var plotDiv = document.getElementById("tester");
    
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
        hovermode: 'closest',
    };

    var config = {responsive: true};

    Plotly.newPlot(
        plotDiv, 
        data, 
        layout,
        config
    );
};

makeplot();