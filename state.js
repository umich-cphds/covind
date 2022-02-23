// document.getElementById("test").addEventListener("click", myFunction);

function myFunction(id) {
    // state daily barplot
    var dailyBarplotData = "https://raw.githubusercontent.com/umich-cphds/cov-ind-19-data/master/source_data/package-data/raw/everything.csv";
    var dailyBarplotDiv = document.getElementById("cases_fatalities_recovered");
    var locale = id;
    makeStateBarPlot(dailyBarplotData, dailyBarplotDiv, locale);
}

