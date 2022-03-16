function makeCountryCompPlot(deathData, caseData, plotDiv) {
	Plotly.d3.csv(deathData, function(data)
	{ 
		function unpack(data, country, header) {
			temp = data.filter(function(row) {
				if (row["Country"] == country)
				{
					return row;
				}

			});

			return temp.map(function(row) {
				return row[header]
			});
		}

		countryList = [];
		for (var i = 0; i < data.length; i++) {
			if (!countryList.includes(data[i]["Country"]))
			{
				countryList.push(data[i]["Country"]);
			}
		}

		// create india trace first and remove from country list
		// then forloop add to mydata
		// then add india to mydata

		myData = []

		for (var i = 0; i < countryList.length; i++)
		{
			var trace = {
				x: unpack(data, countryList[i], 'Day'),
				y: unpack(data, countryList[i], 'loess_deaths'),
				type: 'scatter',
				text: unpack(data, countryList[i], 'text'),
				hoverinfo: 'text',
				name: countryList[i],
				legendgroup: countryList[i],
				xaxis: 'x1',
        		yaxis: 'y1',
				visible: "legendonly",
				marker: {
					color: "red",
				},
			}

			var trace1 = {
				x: unpack(data, countryList[i], 'Day'),
				y: unpack(data, countryList[i], 'loess_deaths'),
				type: 'scatter',
				text: unpack(data, countryList[i], 'text'),
				hoverinfo: 'text',
				name: countryList[i],
				showlegend: false,
				legendgroup: countryList[i],
				xaxis: 'x2',
        		yaxis: 'y2',
				marker: {
					color: "red",
				},
			}

			myData.push(trace);
			myData.push(trace1);

		}

		var layout = {
			title: 'Daily number of COVID-19 cases and deaths',
			grid: {
			rows: 2,
			columns: 1,
			},
			hovermode: 'closest',
		};
	
		var config = {responsive: true};
	

		Plotly.newPlot(
			plotDiv, 
			myData,
			layout,
			config,
		);

		

    	// processCountryCompData(data, plotDiv) 
	} 
);
};

function processCountryCompData(allRows, plotDiv) {
	dates = [], deathData = [], country = [], hoverText = [];

	for (var i = 0; i < allRows.length; i++)
	{
		row = allRows[i];
		dates.push(row['Day']);
		deathData.push(row['loess_deaths']);
		country.push(row['Country']);
		hoverText.push(row['text']);
	}

	makeCountryCompPlotly(deathData, dates, country, hoverText, plotDiv);
}

function makeCountryCompPlotly(deathData, dates, country, hoverText, plotDiv)
{
	var trace1 = {
        x: dates,
        y: deathData,
        type: 'scatter',
        text: hoverText,
        hoverinfo: 'text',
        transforms: [{
            type: 'groupby',
            groups: country,
            nameformat: "%{group}",
        }],
        xaxis: 'x1',
        yaxis: 'y1',
	}

	var trace2 = {
        x: dates,
        y: deathData,
        type: 'scatter',
        text: hoverText,
        hoverinfo: 'text',
        transforms: [{
            type: 'groupby',
            groups: country,
        }],
        xaxis: 'x2',
        yaxis: 'y2',
        showlegend: false,
	}

	var data = [trace1, trace2];

	var layout = {
		title: 'Daily number of COVID-19 cases and deaths',
		grid: {
		rows: 2,
		columns: 1,
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