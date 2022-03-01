var locale = "tt"

// daily barplot
var dailyBarplotData = "https://raw.githubusercontent.com/umich-cphds/cov-ind-19-data/master/source_data/package-data/raw/everything.csv";
var dailyBarplotDiv = document.getElementById("daily_barplot");
makeCFRBarPlot(dailyBarplotData, dailyBarplotDiv, locale);

// time varying r
var tvrData = "https://raw.githubusercontent.com/umich-cphds/cov-ind-19-data/master/source_data/package-data/processed/tvr_national.csv";
var tvrDiv = document.getElementById("time_varying_r")
makeTVRPlot(tvrData, tvrDiv, locale)

// test positive rate
var tprData = "https://raw.githubusercontent.com/umich-cphds/cov-ind-19-data/master/source_data/package-data/processed/tpr_national.csv";
var tprDiv = document.getElementById("test_positive_rate")
makeTPRPlot(tprData, tprDiv, locale)

// daily vax
var dailyVaxData = "https://raw.githubusercontent.com/umich-cphds/cov-ind-19-data/master/source_data/package-data/processed/india_daily_vax.csv";
var dailyVaxDiv = document.getElementById("daily_vax_india")
makeVaxPlot(dailyVaxData, dailyVaxDiv)

// daily cumul perc vax
var cumulPercVaxData = "https://raw.githubusercontent.com/umich-cphds/cov-ind-19-data/master/source_data/package-data/processed/india_cumul_perc_vax.csv";
var cumulPercVaxDiv = document.getElementById("india_cumul_perc_vax")
makeCumulPercVaxPlot(cumulPercVaxData, cumulPercVaxDiv)


// // case, death country comparison
// var caseCountryCompData = "https://raw.githubusercontent.com/umich-cphds/cov-ind-19-data/master/source_data/package-data/processed/case_death_country_comp_cases.csv";
// var deathCountryCompData = "https://raw.githubusercontent.com/umich-cphds/cov-ind-19-data/master/source_data/package-data/processed/case_death_country_comp_deaths.csv";
// var countryCompDiv = document.getElementById("countryComp")
// makeCountryCompPlot(caseCountryCompData, countryCompDiv)

// SEIR forecast
var SEIRforecastData = "https://raw.githubusercontent.com/umich-cphds/cov-ind-19-data/master/source_data/package-data/processed/india_seir.csv";
var SEIRforecastDiv = document.getElementById("SEIRforecast")
makeSEIRforecastPlot(SEIRforecastData, SEIRforecastDiv)