// daily barplot
var dailyBarplotData = "https://raw.githubusercontent.com/umich-cphds/cov-ind-19-data/master/source_data/package-data/processed/india_daily_barplot.csv";
var dailyBarplotDiv = document.getElementById("daily_barplot");
makeBarPlot(dailyBarplotData, dailyBarplotDiv);

// time varying r
var tvrData = "https://raw.githubusercontent.com/umich-cphds/cov-ind-19-data/master/source_data/package-data/processed/tvr_national.csv";
var tvrDiv = document.getElementById("time_varying_r")
makeTVRPlot(tvrData, tvrDiv)

// test positive rate
var tprData = "https://raw.githubusercontent.com/umich-cphds/cov-ind-19-data/master/source_data/package-data/processed/tpr_national.csv";
var tprDiv = document.getElementById("test_positive_rate")
makeTPRPlot(tprData, tprDiv)

// daily vax
var dailyVaxData = "https://raw.githubusercontent.com/umich-cphds/cov-ind-19-data/master/source_data/package-data/processed/india_daily_vax.csv";
var dailyVaxDiv = document.getElementById("daily_vax_india")
makeVaxPlot(dailyVaxData, dailyVaxDiv)
