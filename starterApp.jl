using PlotlyJS
using CSV, DataFrames

data = CSV.read(download("https://raw.githubusercontent.com/umich-cphds/cov-ind-19-data/master/source_data/package-data/processed/india_daily_barplot.csv"), DataFrame)

## to do: hover text, plot colors, move legend below, bar borders

p = plot(
        data, 
        x =:date, 
        y =:Count, 
        color =:Type, 
        text =:text,
        type =:"bar",
        Layout(
            title="Daily number of new COVID-19 cases, fatalities and recovered in India", 
            barmode="stack", 
            bargap = 0,
            plot_bgcolor="#ffffff", 
            xaxis_tickangle=-45,
            xaxis_nticks = 8,
            marker_width = 0, ## not working
            marker_color=["#ED553B", "#f2c82e", "#138808"] ## not working
        )
    )
# sets bar colors correctly
# restyle!(p, 1, marker_color="rgba(237, 85, 59, 1)")
# restyle!(p, 2, marker_color="rgba(242, 200, 46, 1)")
# restyle!(p, 3, marker_color="rgba(19, 136, 8, 1)")

# for testing
restyle!(p, 1, marker_color="rgba(256, 6, 34, 1)")
restyle!(p, 2, marker_color="rgba(256, 6, 34, 1)")
restyle!(p, 3, marker_color="rgba(256, 6, 34, 1)")

p