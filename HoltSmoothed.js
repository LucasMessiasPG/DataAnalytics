'use strict';

let Utils = require("./Utils");

class HoltSmoothed extends Utils{

    process(data,percentagem_absorve_error,percentagem_smoothed){

        this.eb = percentagem_absorve_error;
        this.smoothed = percentagem_smoothed;

    }

    getFocus(data,index,debug){
        if(index == 0) return data[0].value;

    }
}

module.exports = HoltSmoothed