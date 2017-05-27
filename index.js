let Forecast = require("./Forecast")
let HoltLinear = require("./HoltLinear")

let data = [
    {value:739},
    {value:742},
    {value:738},
    {value:747},
    {value:751},
    {value:752},
    {value:756},
    {value:768},
    {value:766}
]
let result = {};
result.forecast = new Forecast().process(data,2)
result.holt_linear = new HoltLinear().process(data,0.9)

console.log(result);
