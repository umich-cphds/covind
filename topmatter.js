function makeTopMatter() {
    topmatter = document.createElement('div')
    topmatter.setAttribute('class', 'topmatter')

    topmatter.innerHTML = 
    `
        <h3 class = "title">COV-IND-19 Study Group</h3>
        <div class="sidebar-image">
            <img src="https://raw.githubusercontent.com/umich-cphds/cov-ind-19/master/app/www/group_logo.png" height="200" width="200"/>
        </div>
        <div class="main">
            <p class="first-text">
                Welcome to the COV-IND-19 web app. We aim to provide a resource to
                describe the COVID-19 outbreak in India to date as well as prediction
                models under various hypothetical scenarios. The figure and forecasting
                models update as new data becomes available (i.e., at least daily). You
                may download PNG files of each figure by clicking on the camera icon
                when you are hovering within each plot. Please cite our medium article
                and this website in any publication that you use this resource for.
            </p>
            <p>
                The COV-IND-19 study group is comprised of: Maxwell Salvatore,
                Alexander Rix, Michael Kleinsasser, Daniel Barker, Lili Wang, Rupam
                Bhattacharyya, Soumik Purkayastha, Debashree Ray, Shariq Mohammed,
                Aritra Halder, Debraj Bose, Peter Song, Mousumi Banerjee, Veera
                Baladandayuthapani, and Parikshit Ghosh. Led by PI <a href="http://www-personal.umich.edu/~bhramar/">Bhramar Mukherjee</a>.
            </p>
            <p>
                Please direct inquiries to <a href="mailto:mmsalva@umich.edu">Maxwell Salvatore</a>, <a href="mailto:alexrix@umich.edu">Alexander Rix</a>, <a href="mailto:mkleinsa@umich.edu">Michael Kleinsasser</a>, and <a href="mailto:bhramar@umich.edu">Bhramar Mukherjee</a>
            </p>
        </div>
            
        <div class="main-sub1">
            <h4>Sources</h4>
            <p>
                Non-India country-level data source: <a href="https://github.com/CSSEGISandData/COVID-19">JHU CSSE COVID-19 GitHub</a></p>
            <p>
                India National and State / Union Territory data sources:
                    Through October 17, 2021 - <a href="https://www.covid19india.org">covid19india.org</a></p>
            <p>
                After October 17, 2021 - Count data: <a href="https://www.mohfw.gov.in/">Ministry of Health and Family Welfare (MoHFW)</a> Vaccine data: <a href="https://www.cowin.gov.in/">CoWIN</a></p>
            <p>
                R modeling package: <a href="https://github.com/lilywang1988/eSIR">eSIR R package</a></p>
        </div>

        <div class="main-sub2">
            <h4>How to cite COVIND19.org:</h4>
            <p>
                Ray, D., Salvatore, M., Bhattacharyya, R., Wang, L., Du, J., Mohammed, S., … Mukherjee, B. (2020). Predictions, Role of Interventions and Effects of a Historic National Lockdown in India's Response to the the COVID-19 Pandemic: Data Science Call to Arms. <em>Harvard Data Science Review</em>. <a href="https://doi.org/10.1162/99608f92.60e08ed5">https://doi.org/10.1162/99608f92.60e08ed5</a></p>
        </div>
    `
    document.getElementById('content').appendChild(topmatter)
}