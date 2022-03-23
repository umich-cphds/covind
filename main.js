buildStateSite("India")

// country comparison
var countryCompData = "https://raw.githubusercontent.com/umich-cphds/cov-ind-19-data/master/source_data/package-data/processed/case_death_country_comp_cases_and_deaths.csv";
var countryCompDiv = document.getElementById("countryComp")
makeCountryCompPlot(countryCompData, countryCompDiv)