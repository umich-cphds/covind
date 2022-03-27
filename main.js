// set menu id, build national data
window.addEventListener("load", function() {
    document.getElementById("navbar").firstElementChild.setAttribute("id", "national")
    
    document.getElementById("National").classList.add("active")
    document.getElementById("States").classList.add("inactive")
    document.getElementById("Metrics").classList.add("inactive")
    document.getElementById("References").classList.add("inactive")

    buildNationalSite();
})

// plot building

function buildNationalSite()
{
    buildPlotSite("India")

    // country comp
    t = document.createElement('h2');
    t.innerHTML = 'Daily number of COVID-19 cases and deaths'
    document.getElementById("content").appendChild(t);

    s = document.createElement('p');
    s.innerHTML = 'The first figure represents COVID-19 case counts where the x-axis starts on the day when each country passed 100 cases. The second figure represents COVID-19 fatalities where the x-axis starts on the day when each country exceeded 3 fatalities. These axes allow comparison of counts at similar stages of the outbreak. You can click on countries in the legend to add or remove them and you can hover your cursor over the lines to see the exact numerical counts.'
    document.getElementById("content").appendChild(s);

    e = document.createElement('div');
    e.setAttribute('id', "countryComp");
    e.setAttribute('style', "height:800px");
    document.getElementById("content").appendChild(e)
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
        t = document.createElement('h2');
        t.setAttribute('id', plots[i] + ' title');
        document.getElementById("content").appendChild(t);

        s = document.createElement('p');
        s.setAttribute('id', plots[i] + ' subtitle');
        document.getElementById("content").appendChild(s);

        p = document.createElement('div');
        p.setAttribute('class', "standardPlot");
        p.setAttribute('id', plots[i]);
        document.getElementById("content").appendChild(p)
    }

    buildPlots(locale);
}

function buildPlots(locale) {
    var data = "https://raw.githubusercontent.com/umich-cphds/cov-ind-19-data/master/source_data/package-data/processed/new_everything.csv";

    document.getElementById('daily_barplot title').innerHTML = 
        'Daily number of new COVID-19 cases, fatalities and recovered in ' + locale;
    document.getElementById('daily_barplot subtitle').innerHTML = 
            'This figure provides the number of COVID-19 new cases (yellow), fatalities (red), and recovered cases (green) in ' + locale + ' You can hover your cursor over the bar to see the exact numerical counts.';
    var dailyBarplotDiv = document.getElementById("daily_barplot");
    makeDailyBarPlot(data, dailyBarplotDiv, locale);

    document.getElementById('tvr title').innerHTML = 
        'Time-varying R';
    var tvrDiv = document.getElementById("tvr");
    makeTVRPlot(data, tvrDiv, locale);

    document.getElementById('tpr title').innerHTML = 
        'Test positive rate';
    var tprDiv = document.getElementById("tpr");
    makeTPRPlot(data, tprDiv, locale);

    document.getElementById('daily_vax title').innerHTML = 
        'Daily number of COVID-19 vaccines in ' + locale;
    document.getElementById('daily_vax subtitle').innerHTML = 
        'This figure provides the daily number of COVID-19 vaccines (green) in ' + locale + ' since March 15, 2021. You can hover your cursor over the bar to see the exact numerical counts.'
    var vaxDiv = document.getElementById("daily_vax");
    makeDailyVaxPlot(data, vaxDiv, locale)

    document.getElementById('perc_vax title').innerHTML = 
        'Percent of population with one or two doses of COVID-19 vaccine in ' + locale;
    document.getElementById('perc_vax subtitle').innerHTML = 
        'This figure provides the percentage of the population with one dose of the COVID-19 vaccine (grey) or two doses of the COVID-19 vaccine (green) in ' + locale + 'since March 15, 2021. You can hover your cursor over the lines to see the exact numerical counts.'
    var precVaxDiv = document.getElementById("perc_vax");
    makePercVaxPlot(data, precVaxDiv, locale)
}

// plot breakdown

function breakdownPlots()
{
    while (document.getElementById("content").firstChild)
    {
        document.getElementById("content").firstChild.remove()
    }
}
