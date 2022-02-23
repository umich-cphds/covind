function makeCumulPercVaxPlot(externalData, plotDiv) {
    Plotly.d3.csv(externalData, function(data)
        { 
            processCumulPercVaxData(data, plotDiv) 
        } 
    );
};

function processCumulPercVaxData(allRows, plotDiv) {
    console.log(allRows);
    dates = [], oneDose = [], twoDoses = [], oneDosehoverText = [], twoDosehoverText = [];

    for (var i = 0; i < allRows.length; i++) {
        row = allRows[i];
        dates.push(row['Day']);
        if (row['variable'] == 'pct_one_dose')
        {
            oneDose.push(row['value'])
            oneDosehoverText.push(row['text'])
        }
        else if (row['variable'] == 'pct_two_doses')
        {
            twoDoses.push(row['value'])
            twoDosehoverText.push(row['text'])
        }

    }
    console.log('Dates', dates, 'One Dose', oneDose, "Two Doses", twoDoses);
    makeCumulPercVaxPlotly(oneDose, twoDoses, dates, plotDiv, oneDosehoverText, twoDosehoverText);
};

function makeCumulPercVaxPlotly(oneDose, twoDoses, dates, plotDiv, oneDosehoverText, twoDosehoverText){    
    var oneDoseTrace = {
        x: dates,
        y: oneDose,
        text: oneDosehoverText,
        type: 'scatter',
        mode: 'lines',
        line: {
            color: '#ff9933',
            width: 4,
        },
        hoverinfo: 'text',
    };

    var twoDoseTrace = {
        x: dates,
        y: twoDoses,
        text: twoDosehoverText,
        type: 'scatter',
        mode: 'lines',
        line: {
            color: '#138808',
            width: 4,
        },
        hoverinfo: 'text',
    };


    var layout = {
        title: 'Percent of population with one or two doses of COVID-19 vaccine in India',
        yaxis: {
            title: {
                text: 'Percent of population vaccinated'
            },
        },
        hovermode: 'closest',
        showlegend: false,
    };

    var data = [oneDoseTrace, twoDoseTrace]

    var config = {responsive: true};

    Plotly.newPlot(
        plotDiv, 
        data,
        layout,
        config,
    );
};