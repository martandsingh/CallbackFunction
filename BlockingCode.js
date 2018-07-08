/**
 * Author : Martand Singh
 * Date : 08 july 2018
 * Scope : Here we will write blocking code to understand how it does work.
 */


 //Including inbuilt filesystem module of Node Js 'fs'
const fs = require('fs')

/**
 * This function basically reading and returning content of 
 * Sample file and printing finish comment.
 */
 function getSampleFileContent(){
     var output = ''

    fs.readFile('Sample.txt', 'utf8', function(err, data){
        if(err){ //if there are any error
           
            output = err;
            //console.log('error block');
             console.log(err);
        }
        else{
           
            output = data;
            console.log('data block');
             console.log(data)
        }
        console.log('File read completed...')
        return output;
    })
 }
 module.exports.getSampleFileContent = getSampleFileContent;