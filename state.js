// document.getElementById("test").addEventListener("click", myFunction);

function buildStateSite(id) {
    // state daily barplot
    var data = "https://raw.githubusercontent.com/umich-cphds/cov-ind-19-data/master/source_data/package-data/processed/new_everything.csv";
    var locale = id;

    var dailyBarplotDiv = document.getElementById("daily_barplot");
    makeCFRBarPlot2(data, dailyBarplotDiv, locale);

    var tvrDiv = document.getElementById("time_varying_r");
    makeTVRPlot2(data, tvrDiv, locale);

    var tprDiv = document.getElementById("test_positive_rate");
    makeTPRPlot2(data, tprDiv, locale);

    var vaxDiv = document.getElementById("daily_vax_india");
    makeVaxPlot2(data, vaxDiv, id)

    var precVaxDiv = document.getElementById("india_cumul_perc_vax");
    makeCumulPercVaxPlot2(data, precVaxDiv, id)
}