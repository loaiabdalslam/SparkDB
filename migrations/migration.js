SparkDb = require('../SparkDB');

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


data_2 = [{ name: 'ahmed', age: '25' }, { name: "mohamed", age: 36 }]

SparkDb.createTable("cites", data)
SparkDb.createTable("students", data_2)


//addRaw("cites", { city: 'alexandria', title: 'This is alexandria!' })


SparkDb.addRaw("students", { name: 'mohamed', age: '17' })
//SparkDb.removeRaw("students",`raw.name ==='ahmed'`)


console.log(SparkDb.where("students",`raw.age == 36`))