using Stipple
using StippleUI
using StippleCharts

using CSV, DataFrames, Dates

using Revise


# configuration
const data_opts = DataTableOptions(columns = [Column("Good_Rating"), Column("Amount", align = :right),
                                              Column("Age", align = :right), Column("Duration", align = :right)])


# reading data from CSV file and contrucing data frame 
data = CSV.File("data/german_credit.csv") |> DataFrame

# Defining a Stipple ReactiveModel of type observable 
Base.@kwdef mutable struct Dashboard <: ReactiveModel
  credit_data::R{DataTable} = DataTable()
  credit_data_pagination::DataTablePagination = DataTablePagination(rows_per_page=100)
  credit_data_loading::R{Bool} = false
end

model = Dashboard()
model.credit_data[] = DataTable(data, DataTableOptions(columns = [Column("Good_Rating"), Column("Amount", align = :right),
Column("Age", align = :right), Column("Duration", align = :right)]))

### UI
model = Stipple.init(model)

# function ui(model)
#     layout (
#         page(root(model)), [
#             heading("German Credits by Age")

#             row([
#                 cell(class="st-module",) [
#                     h4("Credit data")

#                     table(@data(:credit_data);
#                         pagination =: credit_data_pagination,
#                         loading =: credit_data_loading
#                     )
#                 ])
#             ])
#         ])
#     , title="German Credits by Age") |> html    
#     )
# end

# function ui(model)

#       heading("German Credits by Age")
  
#       row([
#         cell(class="st-module", [
#           row([
#             cell(class="st-br", [
#               bignumber("Bad credits",
#                         :big_numbers_count_bad_credits,
#                         icon="format_list_numbered",
#                         color="negative")
#             ])
  
#             cell(class="st-br", [
#               bignumber("Good credits",
#                         :big_numbers_count_good_credits,
#                         icon="format_list_numbered",
#                         color="positive")
#             ])
  
#             cell(class="st-br", [
#               bignumber("Bad credits total amount",
#                         R"big_numbers_amount_bad_credits | numberformat",
#                         icon="euro_symbol",
#                         color="negative")
#             ])
  
#             cell(class="st-br", [
#               bignumber("Good credits total amount",
#                         R"big_numbers_amount_good_credits | numberformat",
#                         icon="euro_symbol",
#                         color="positive")
#             ])
#           ])
#         ])
#       ])
  
#       row([
#         cell([
#           h4("Age interval filter")
  
#           range(18:1:90,
#                 :range_data;
#                 label=true,
#                 labelalways=true,
#                 labelvalueleft=Symbol("'Min age: ' + range_data.min"),
#                 labelvalueright=Symbol("'Max age: ' + range_data.max"))
#         ])
#       ])
  
#       row([
#         cell(class="st-module", [
#           h4("Credits data")
  
#           table(:credit_data;
#                 style="height: 400px;",
#                 pagination=:credit_data_pagination,
#                 loading=:credit_data_loading
#           )
#         ])
#         cell(class="st-module", [
#           h4("Credits by age")
#           plot(:bar_plot_data; options=:bar_plot_options)
#         ])
#       ])
  
#       row([
#         cell(class="st-module", [
#           h4("Credits by age, amount and duration")
#           plot(:bubble_plot_data; options=:bubble_plot_options)
#         ])
#       ])
  
#       footer(class="st-footer q-pa-md", [
#         cell([
#           span("Stipple &copy; $(year(now()))")
#         ])
#       ])
#     ])
#     ]
#   end

# serving on localhost
route("/") do
  ui(gc_model) |> html
end

up(rand((8000:9000)), open_browser=true)