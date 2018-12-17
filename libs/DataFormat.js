function pad(number, length) {

    var str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }

    return str;
}

const dataFormat = {
    dateToSave: (date) => {
        var yyyy = date.getFullYear().toString();
        var MM = pad(date.getMonth() + 1, 2);
        var dd = pad(date.getDate(), 2);
        var hh = pad(date.getHours(), 2);
        var mm = pad(date.getMinutes(), 2)
        var ss = pad(date.getSeconds(), 2)

        return yyyy + MM + dd + hh + mm + ss;
    },
    dateToRender: (type, date) => {
        if(type === 'yyyy-mm-dd'){
            const year = date.substring(0, 4);
            const month = date.substring(4, 6);
            const day = date.substring(6, 8);

            return year+'-'+month+'-'+day
        } else if(type === 'usd'){
            return '';
        } else if(type === 'yyyy-mm-dd hh:mm'){
            return '';
        } else if(type ==='yyyy/mm/dd'){
            const year = date.substring(0, 4);
            const month = date.substring(4, 6);
            const day = date.substring(6, 8);

            return year+'/'+month+'/'+day
        } else {
            throw new Error('it is not support format');
        }
    },
    //sequelize format
    arrayToList: (arr) => {
        for(let i = 0; arr.length < i; i++){
            const data = arr[i].dataValues;

            const row = {
                ...data,
                date: dataFormat.dateToRender('yyyy-mm-dd', data.create_dt)
            }
        }
    }
}

module.exports = dataFormat;