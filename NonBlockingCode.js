//Including inbuilt filesystem module of Node Js 'fs'
const fs = require('fs')

/**
 * Author : Martand Singh
 * Date : 08 July 2018
 * Scope : This function reads the Sample.txt file
 */
function readSampleFile(callback){

    //Reading file and defining encoding type. If you will not define this
    // then it will print the byte array.
    // so here we can see we are calling a callback function
    fs.readFile('Sample.txt', 'utf8', function(err, data){
        if(err){ //if there are any error
           // console.log(err);
            return callback(err)
        }
        else{
            //console.log(data)
            return callback(data)
        }
    })
}

module.exports.readSampleFile = readSampleFile;