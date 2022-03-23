// add state options to menu
dataURL = "https://raw.githubusercontent.com/umich-cphds/cov-ind-19-data/master/source_data/package-data/processed/new_everything.csv"
statesList = [];
Plotly.d3.csv(dataURL, function(data) {

    for (var i = 0; i < data.length; i++) {
        if (!statesList.includes(data[i]["place"]))
        {
            statesList.push(data[i]["place"]);
        }
    }

    statesList.sort()

    for (var i = 0; i < statesList.length; i++)
    {
        state = document.createElement("a");
        state.innerHTML = statesList[i];
        state.setAttribute("id", statesList[i]);
        document.getElementById("dropdown-content").appendChild(state);
    }
})

//----------------------------------------------------------------------------------------------------//

// page changer
document.addEventListener("click", function(e) {
    console.log(e.target.id)
    console.log(e.target.parentNode.parentNode.tagName)

    // toggle state nav bar appearance
    if (e.target.id == "States")
    {
        toggleMenu();
    }
    // if non-active menu button (besides states) is pressed ***NEED TO IMPLEMENT NON_ACTIVE PART
    else if (e.target.parentNode.parentNode.tagName == "MENU")
    {
        siteBreakdown();
        siteBuildUp(e.target.id);
    }




    // specific state pressed
    else if (e.target.parentNode.id == "dropdown-content")
    {
        siteBreakdown();
        siteBuildUp();

        
        buildPlotSite()
        document.getElementById("navbar").firstElementChild.setAttribute("id", "states");
        buildPlots(e.target.id)

        toggleMenu();

    }
    // if open and anywhere is clicked
    else if (document.getElementById("dropdown-content").classList.contains("dropdown-active")) {
        toggleMenu();
    }
})

function toggleMenu() {
    document.getElementById("dropdown-content").classList.toggle("dropdown-active");
    document.getElementById("States").classList.toggle("States-active");
}

function siteBuildUp(siteName) {
    if (siteName == 'National')
    {
        console.log("here")
        buildNationalSite();
    }

}
function siteBreakdown()
{
    if (document.getElementById("navbar").firstElementChild.id == "national")       
    {
        breakdownPlots()
    }
    else if (document.getElementById("navbar").firstElementChild.id == "states")
    {
        breakdownPlots()
    }
}

function breakdownPlots()
{
    while (document.getElementById("plots").firstChild)
    {
        document.getElementById("plots").firstChild.remove()
    }
}

function buildNationalSite()
{
    buildPlotSite()
    e = document.createElement('div');
    e.setAttribute('id', "countryComp");
    e.setAttribute('style', "height:800px");
    document.getElementById("plots").appendChild(e)
}

function buildPlotSite()
{
    plots = ["daily_barplot", "tvr", "tpr", "daily_vax", "perc_vax"];

    for (var i = 0; i < plots.length; i++)
    {
        e = document.createElement('div');
        e.setAttribute('class', "standardPlot");
        e.setAttribute('id', plots[i]);
        document.getElementById("plots").appendChild(e)
    }
}