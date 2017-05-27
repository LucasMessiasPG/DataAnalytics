'use strict';

let Utils = require("./Utils");

class HoltLinear extends Utils{

    process(data,percentagem_absorve_error){

        this.eb = percentagem_absorve_error;
        let errorAvarege = [];
        let accuracyAvarege = [];

        for(var i = 0; i < data.length; i++){
            data[i].focus = this.getFocus(data,i)
            data[i].error = Math.abs(data[i].value - data[i].focus);
            data[i].accuracy = (data[i].error / data[i].value)*100;
            errorAvarege.push({value: data[i].error});
            accuracyAvarege.push({value: data[i].accuracy})
        }

        let _errorAvagere = this.avarege(errorAvarege);
        let _accuracyAvagere = this.avarege(accuracyAvarege);
        return {
            value: this.getFocus(data,data.length),
            MAE: _errorAvagere, // Mean Absolute Error ( média absoluta de erro )
            MAPE: _accuracyAvagere // Mean Absolute Percent Error ( média absoluta porcentagem de erro )
        }

    }

    getFocus(data,index,debug){
        if(index == 0) return data[0].value;
        return data[index - 1].value+(this.eb*data[index - 1].error);
    }
}

module.exports = HoltLinear