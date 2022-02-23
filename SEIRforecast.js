function makeSEIRforecastPlot(externalData, plotDiv) {
    Plotly.d3.csv(externalData, function(data)
        { 
            processSEIRforecastData(data, plotDiv) 
        } 
    );
};

function processSEIRforecastData(allRows, plotDiv) {
    console.log(allRows);
    dates = [], caseDaily = [], deathDaily = [], caseHoverText = [], deathHoverText = [];

    for (var i = 0; i < allRows.length; i++) {
        row = allRows[i];
        dates.push(row['date']);
        if (row['variable'] == 'case_daily_reported')
        {
            caseDaily.push(row['value'])
            caseHoverText.push(row['text'])
        }
        else if (row['variable'] == 'death_daily_reported')
        {
            deathDaily.push(row['value'])
            deathHoverText.push(row['text'])
        }

    }
    console.log('Dates', dates, 'Case daily', caseDaily, "Death daily", deathDaily);
    makeSEIRforecastPlotly(dates, caseDaily, deathDaily, plotDiv, caseHoverText, deathHoverText);
};

function makeSEIRforecastPlotly(dates, caseDaily, deathDaily, plotDiv, caseHoverText, deathHoverText){    
    var caseTrace = {
        x: dates,
        y: caseDaily,
        text: caseHoverText,
        type: 'bar',
        marker: {
            color: '#FF9933',
        },
        hoverinfo: 'text',
    };

    var deathTrace = {
        x: dates,
        y: deathDaily,
        text: deathHoverText,
        type: 'bar',
        marker: {
            color: '#138808',
        },
        hoverinfo: 'text',
    };

    var layout = {
        // title: 'SEIR forecast to 30 days',
        // showlegend: false,
        // hovermode: 'closest',
        grid: {
            rows: 2,
            columns: 1,
            pattern: 'independent',
            roworder: 'bottom to top'
        }
    };

    var data = [caseTrace, deathTrace];

    var config = {responsive: true};

    Plotly.newPlot(
        plotDiv, 
        data, 
        layout,
        config
    );
};