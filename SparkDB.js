const fs = require('fs')
const HashMap = require('hashmap')
const _ = require('lodash')

module.exports = {


    createTable: (table_name, data) => {
        var table_ = new HashMap()
        table_name = table_name
        table_.set(table_name, data)
        var json = JSON.stringify(data);
        module.exports.saveJson(table_name, json)
        return table_
    },

    addRaw: (table, obj) => {
        fs.readFile(`${table}.json`, "utf8", (err, jsonString) => {
            if (err) {
                console.log("File read failed:", err);
                return;
            }
            //console.log("File data:", jsonString);
            jsonString = JSON.parse(jsonString)
            jsonString.push(obj)
            module.exports.saveJson(table, JSON.stringify(jsonString))
        });

    },

    removeRaw: (table,condtion) => {
        fs.readFile(`${table}.json`, "utf8", (err, jsonString) => {
            if (err) {
                console.error("File read failed:", err);
                return;
            }
            //console.log("File data:", jsonString);
            
            jsonString = JSON.parse(jsonString)
            _.remove(jsonString,function(raw){
                return eval(condtion)
              })
              module.exports.saveJson(table,JSON.stringify(jsonString))
        });

    },

    where:(table,condtion)=>{

     const jsonString =  JSON.parse(fs.readFileSync(`${table}.json`, "utf8"));
     data = _.filter(jsonString,function(raw){
        return eval(condtion)
      })
      return data;
    },

    saveJson: (file_name, json) => {
        fs.writeFile(`${file_name}.json`, json, function () {
            console.log(`${file_name}.json table Wrote Successfully ... `)
        });
    }


}