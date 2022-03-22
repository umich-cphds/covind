function makeCumulPercVaxPlot2(externalData, plotDiv, locale) {
    Plotly.d3.csv(externalData, function(data)
        {
            var start = getStart(data, locale, "pct_one_dose")

            var oneDoseTrace = {
                x: unpack(data, locale, "date", start),
                y: unpack(data, locale, "pct_one_dose", start),
                text: unpack(data, locale, "pct_one_dose_text", start),
                type: 'scatter',
                mode: 'lines',
                line: {
                    color: '#ff9933',
                    width: 4,
                },
                hoverinfo: 'text',
            };
        
            var twoDoseTrace = {
                x: unpack(data, locale, "date", start),
                y: unpack(data, locale, "pct_two_doses", start),
                text: unpack(data, locale, "pct_two_doses_text", start),
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
        } 
    );
};