// document.getElementById("test").addEventListener("click", myFunction);

function buildStateSite(id) {
    console.log("here")

    // state daily barplot
    var dailyBarplotData = "https://raw.githubusercontent.com/umich-cphds/cov-ind-19-data/master/source_data/package-data/raw/everything.csv";
    var dailyBarplotDiv = document.getElementById("daily_barplot");
    var locale = id;
    makeCFRBarPlot(dailyBarplotData, dailyBarplotDiv, locale);
}

