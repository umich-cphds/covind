function makeVaxPlot2(externalData, plotDiv, locale) {
    Plotly.d3.csv(externalData, function(data)
        { 
            var trace = {
                x: unpack(data, locale, "date"),
                y: unpack(data, locale, "daily_doses"),
                // text: hoverText,
                type: 'bar',
                marker: {
                    color: '#138808',
                },
                // hoverinfo: 'text',
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
        } 
    );
};
