// set menu id, build national data
window.addEventListener("load", function() {
    document.getElementById("navbar").firstElementChild.setAttribute("id", "national")
    buildNational();
})

function buildNational()
{
    buildPlots("India")
    // country comparison
    var countryCompData = "https://raw.githubusercontent.com/umich-cphds/cov-ind-19-data/master/source_data/package-data/processed/case_death_country_comp_cases_and_deaths.csv";
    var countryCompDiv = document.getElementById("countryComp")
    makeCountryCompPlot(countryCompData, countryCompDiv)
}

function buildPlots(id) {
    var data = "https://raw.githubusercontent.com/umich-cphds/cov-ind-19-data/master/source_data/package-data/processed/new_everything.csv";
    var locale = id;

    var dailyBarplotDiv = document.getElementById("daily_barplot");
    makeDailyBarPlot(data, dailyBarplotDiv, locale);

    var tvrDiv = document.getElementById("time_varying_r");
    makeTVRPlot(data, tvrDiv, locale);

    var tprDiv = document.getElementById("test_positive_rate");
    makeTPRPlot(data, tprDiv, locale);

    var vaxDiv = document.getElementById("daily_vax_india");
    makeDailyVaxPlot(data, vaxDiv, id)

    var precVaxDiv = document.getElementById("india_cumul_perc_vax");
    makePercVaxPlot(data, precVaxDiv, id)
}
