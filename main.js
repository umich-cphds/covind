// daily barplot
var dailyBarplotData = "https://raw.githubusercontent.com/umich-cphds/cov-ind-19-data/master/source_data/package-data/processed/india_daily_barplot.csv";
var dailyBarplotDiv = document.getElementById("daily_barplot");
makeBarPlot(dailyBarplotData, dailyBarplotDiv);

// time varying r
var tvrData = "https://raw.githubusercontent.com/umich-cphds/cov-ind-19-data/master/source_data/package-data/processed/tvr_national.csv";
var tvrDiv = document.getElementById("time_varying_r")
makeTVRPlot(tvrData, tvrDiv)