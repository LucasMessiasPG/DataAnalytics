'use strict';

let Utils = require("./Utils");

class Forecast extends Utils{

    process(data, focus){

        let errorAvarege = [];
        let accuracyAvarege = [];
        let count_focus = focus;

        for(var i = 0; i < data.length; i++){
            if(i < focus) continue;

            data[i].focus = this.getFocus(data,focus,count_focus);
            focus++;
        }

        for(var j = 0; j < data.length; j++) {
            if(data[j].focus) {
                let _data = data[j];
                if(_data) {
                    _data.error = Math.abs(_data.value - _data.focus)
                    errorAvarege.push({value: _data.error})
                }
            }

        }

        for(var j = 0; j < data.length; j++) {
            if(data[j].focus) {
                let _data = data[j];
                if(_data) {
                    _data.accuracy = Math.abs(_data.error /  _data.value) * 100
                    accuracyAvarege.push({value: _data.accuracy});
                }
            }

        }

        let _errorAvagere = this.avarege(errorAvarege);
        let _accuracyAvagere = this.avarege(accuracyAvarege);
        return {
            value: this.getFocus(data,data.length,count_focus),
            MAE: _errorAvagere, // Mean Absolute Error ( média absoluta de erro )
            MAPE: _accuracyAvagere // Mean Absolute Percent Error ( média absoluta porcentagem de erro )
        }

    }

    getFocus(data,focus,count_focus){

        count_focus = count_focus || 0;
        let setup = [];

        while(focus != 0 && count_focus != 0){

            setup.push(data[focus - 1]);

            focus--;
            count_focus--;
        }
        return this.avarege(setup);
    }

}

module.exports = Forecast