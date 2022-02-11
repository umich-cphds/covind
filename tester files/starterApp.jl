using PlotlyJS
using CSV, DataFrames

data = CSV.read(download("https://raw.githubusercontent.com/umich-cphds/cov-ind-19-data/master/source_data/package-data/processed/india_daily_barplot.csv"), DataFrame)

## to do: hover text, legend formatting, axis formatting fatalities being wonky
## fatalities showing up at very bottom (good thing???)
## plot cases then fatalities then recovered
## maybe pipe plot into layout


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
            xaxis_nticks = 8, # number of x-axis labels
            legend_title_text="nothing",
            legend=attr(
                y=-0.2,
                yanchor="bottom",
                xanchor="left",
                orientation="h",
            ) 
        )
    )

# sets bar colors and bar borders
restyle!(p, 1, marker_color="#ed553b", marker_line_width = 0, textposition ="none")
restyle!(p, 2, marker_color="#f2c82e", marker_line_width = 0, textposition ="none")
restyle!(p, 3, marker_color="#138808", marker_line_width = 0, textposition ="none")

# for testing
# restyle!(p, 1, marker_color="rgba(256, 6, 34, 1)", marker_line_width = 0)
# restyle!(p, 2, marker_color="rgba(256, 6, 34, 1)", marker_line_width = 0)
# restyle!(p, 3, marker_color="rgba(256, 6, 34, 1)", marker_line_width = 0)

p