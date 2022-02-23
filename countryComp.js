function makeCumulPercVaxPlot(externalData, plotDiv) {
    Plotly.d3.csv(externalData, function(data)
        { 
            processCumulPercVaxData(data, plotDiv) 
        }
    );
};