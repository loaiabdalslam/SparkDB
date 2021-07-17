const { table } = require('console');
const fs = require('fs')
const HashMap = require('hashmap')
const lodash = require('lodash')
var data = [
    {
        city: 'Amsterdam',
        title: 'This is Amsterdam!'
    },
    {
        city: 'Berlin',
        title: 'This is Berlin!'
    },
    {
        city: 'Budapest',
        title: 'This is Budapest!'
    }
];


function createTable(table_name,data){
    var table_ = new HashMap()
    table_name = table_name
    table_.set(table_name,data)
    var json = JSON.stringify(data);
    saveJson(table_name,json)
    return table_
}

function addRaw(table,obj){
    fs.readFile(`${table}.json`, "utf8", (err, jsonString) => {
        if (err) {
          console.log("File read failed:", err);
          return;
        }
        console.log("File data:", jsonString);
        jsonString = JSON.parse(jsonString)
        jsonString.push(obj)
        saveJson(table,JSON.stringify(jsonString))
      });
            
}

function saveJson(file_name,json){
    fs.writeFile(`${file_name}.json`, json,function(){
        console.log("Json File Wrote Successfully ... ")
    });
}

function readJson(file_name,callback){
    var obj;
    fs.readFile(`${file_name}.json`, 'utf8', function (err, data) {
      if (err) throw err;
      obj = JSON.parse(data);
      callback = obj
    })

}

createTable("cites",data)
console.log(readJson("cites"))
addRaw("cites",{ city: 'alexandria', title: 'This is alexandria!' })

/*

set = (map,key,value)=>{
    map.set(key,value)
}



fs.readFile('/Users/joe/test.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
}) 
*/