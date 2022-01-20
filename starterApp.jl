using PlotlyJS
using CSV
using DataFrames
using HTTP

# txt = HTTP.get("https://raw.githubusercontent.com/umich-cphds/cov-ind-19-data/master/source_data/package-data/processed/india_daily_barplot.csv")
# csv = readcsv(txt.body)

data = CSV.read(download("https://raw.githubusercontent.com/umich-cphds/cov-ind-19-data/master/source_data/package-data/processed/india_daily_barplot.csv"), DataFrame)


# p = plot(data, x=:date, y =:count, kind=:"bar")

# colors = c(
#     "Fatalities" = "#ED553B",
#     "New Cases"  = "#f2c82e",
#     "Recovered"  = "#138808"
# )

p = plot(data, x =:date, y =:Count, color =:Type, text =:text,
type =:"bar", colors =:colors, bgcolor=:"White")