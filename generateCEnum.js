var bacnetEnum = require('./lib/enum');

Object.keys(bacnetEnum).forEach(function(field){
    let fieldObj = bacnetEnum[field];

    if(fieldObj instanceof Object)
    {
        let typeDefStr = "typedef enum BACnet_" + field.toUpperCase() + "\n{\n";
        let max = 0;
        Object.keys(fieldObj).forEach(function(enumName){
            let enumItemStr = "\tBACnet_" + field.toUpperCase() + "_" + enumName + " = " + fieldObj[enumName] + ",\n"
            typeDefStr += enumItemStr;
            if( fieldObj[enumName] > max)
            {
                max = fieldObj[enumName];
            }
        });
        let enumMaxStr = "\tBACnet_" + field.toUpperCase() + "__MAX" + " = " + max;
        typeDefStr += enumMaxStr;
        typeDefStr += "\n}BACnet_"+field.toUpperCase() + ";\n\n";
        console.log(typeDefStr);
    }
});
