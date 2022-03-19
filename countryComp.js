function makeCountryCompPlot(countryCompData, plotDiv) {
	Plotly.d3.csv(countryCompData, function(data)
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

		// alphabetize, case-insensitive)
		countryList.sort((a, b) => a.localeCompare(b, undefined, {sensitivity: 'base'}));

		// remove india from our list
		countryList = countryList.filter(e => e != "India");

		colors = ["#0D0887FF", "#2B0594FF", "#42049EFF", 
				  "#5601A4FF", "#6A00A8FF", "#7E03A8FF", 
				  "#900DA4FF", "#A11B9BFF", "#B12A90FF", 
				  "#BF3984FF", "#CC4678FF", "#D6556DFF", 
				  "#E16462FF", "#EA7457FF", "#F1844BFF", 
				  "#F89441FF", "#FCA636FF", "#138808"  ]

		myData = []

		// create traces and add them to the data array
		for (var i = 0; i < countryList.length; i++)
		{
			var caseTrace = {
				x: unpack(data, countryList[i], 'Cases_day'),
				y: unpack(data, countryList[i], 'loess_cases'),
				type: 'scatter',
				text: unpack(data, countryList[i], 'Cases_text'),
				hoverinfo: 'text',
				name: countryList[i],
				showlegend: false,
				legendgroup: countryList[i],
				xaxis: 'x1',
        		yaxis: 'y1',
				visible: "legendonly",
				marker: {
					color: colors[i],
				},
			}

			var deathTrace = {
				x: unpack(data, countryList[i], 'Deaths_day'),
				y: unpack(data, countryList[i], 'loess_deaths'),
				type: 'scatter',
				text: unpack(data, countryList[i], 'Deaths_text'),
				hoverinfo: 'text',
				name: countryList[i],
				legendgroup: countryList[i],
				xaxis: 'x2',
        		yaxis: 'y2',
				visible: "legendonly",
				marker: {
					color: colors[i],
				},
			}

			myData.push(deathTrace);
			myData.push(caseTrace);
		}

		var indiaCaseTrace = {
			x: unpack(data, "India", 'Cases_day'),
			y: unpack(data, "India", 'loess_cases'),
			type: 'scatter',
			text: unpack(data, "India", 'Cases_text'),
			hoverinfo: 'text',
			name: "India",
			showlegend: false,
			legendgroup: "India",
			xaxis: 'x1',
			yaxis: 'y1',
			marker: {
				color: colors[colors.length-1],
			},
		}

		var indiaDeathTrace = {
			x: unpack(data, "India", 'Deaths_day'),
			y: unpack(data, "India", 'loess_deaths'),
			type: 'scatter',
			text: unpack(data, "India", 'Deaths_text'),
			hoverinfo: 'text',
			name: "India",
			legendgroup: "India",
			xaxis: 'x2',
			yaxis: 'y2',
			marker: {
				color: colors[colors.length-1],
			},
		}

		myData.push(indiaCaseTrace);
		myData.push(indiaDeathTrace);

		var layout = {
			title: 'Daily number of COVID-19 cases and deaths',
			grid: {
				rows: 2,
				columns: 1,
			},
			hovermode: 'closest',
			xaxis1: {
				anchor: 'y1', 
				title: 'Days since cumulative cases passed 100',
			},
			xaxis2: {
				anchor: 'y2', 
				title: 'Days since cumulative deaths passed 3',
			},
		};
	
		var config = {responsive: true};
	
		Plotly.newPlot(
			plotDiv, 
			myData,
			layout,
			config,
		);
	});
};