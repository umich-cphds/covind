// set menu id, build national data
window.addEventListener("load", function() {
    document.getElementById("navbar").firstElementChild.setAttribute("id", "national")
    buildNationalSite();
})

// plot building

function buildNationalSite()
{
    buildPlotSite("India")

    // country comp
    e = document.createElement('div');
    e.setAttribute('id', "countryComp");
    e.setAttribute('style', "height:800px");
    document.getElementById("plots").appendChild(e)
    buildNational();
}

function buildNational()
{
    // country comparison
    var countryCompData = "https://raw.githubusercontent.com/umich-cphds/cov-ind-19-data/master/source_data/package-data/processed/case_death_country_comp_cases_and_deaths.csv";
    var countryCompDiv = document.getElementById("countryComp")
    makeCountryCompPlot(countryCompData, countryCompDiv)
}

function buildPlotSite(locale)
{
    plots = ["daily_barplot", "tvr", "tpr", "daily_vax", "perc_vax"];

    for (var i = 0; i < plots.length; i++)
    {
        e = document.createElement('div');
        e.setAttribute('class', "standardPlot");
        e.setAttribute('id', plots[i]);
        document.getElementById("plots").appendChild(e)
    }

    buildPlots(locale);
}

function buildPlots(locale) {
    var data = "https://raw.githubusercontent.com/umich-cphds/cov-ind-19-data/master/source_data/package-data/processed/new_everything.csv";

    var dailyBarplotDiv = document.getElementById("daily_barplot");
    makeDailyBarPlot(data, dailyBarplotDiv, locale);

    var tvrDiv = document.getElementById("tvr");
    makeTVRPlot(data, tvrDiv, locale);

    var tprDiv = document.getElementById("tpr");
    makeTPRPlot(data, tprDiv, locale);

    var vaxDiv = document.getElementById("daily_vax");
    makeDailyVaxPlot(data, vaxDiv, locale)

    var precVaxDiv = document.getElementById("perc_vax");
    makePercVaxPlot(data, precVaxDiv, locale)
}

// plot breakdown

function breakdownPlots()
{
    while (document.getElementById("plots").firstChild)
    {
        document.getElementById("plots").firstChild.remove()
    }
}
