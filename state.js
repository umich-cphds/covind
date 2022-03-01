// document.getElementById("test").addEventListener("click", myFunction);

function buildStateSite(id) {
    // state daily barplot
    var dailyBarplotData = "https://raw.githubusercontent.com/umich-cphds/cov-ind-19-data/master/source_data/package-data/raw/everything.csv";
    var dailyBarplotDiv = document.getElementById("cases_fatalities_recovered");
    var locale = id;
    makeCFRBarPlot(dailyBarplotData, dailyBarplotDiv, locale);
}

