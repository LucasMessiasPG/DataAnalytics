"use strict";

class Utils{

    avarege(data){
        if(!data.length) return 0;
        let totalValue = 0;
        let countValue = 0;

        data.forEach((item) => {
            countValue++;
            totalValue += item.value;
        })
        if(totalValue == 0) return 0;
        return totalValue/countValue;
    }

    medium(data){

        let _data = data.sort(this.sort);

        if(_data.length % 2 == 0){

            let data1 = _data[(_data.length / 2) -1];
            let data2 = _data[_data.length / 2];

            return {value: this.avarege([data1,data2])};
        }

        return _data[Math.round(_data.length / 2)]

    }

    sort(a, b){
        return a.value - b.value;
    }

    getFocus(){}

}

module.exports = Utils;