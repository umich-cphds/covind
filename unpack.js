function unpack(data, locale, columnName) {
    // extract the specific country
    temp = data.filter(function(row) {
        if (row["place"] == locale)
        {
            return row;
        }
    });

    // return the column of interest
    return temp.map(function(row) {
        return row[columnName]
    });
}