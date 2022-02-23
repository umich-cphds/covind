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