const syncCode = require('./BlockingCode')
const asyncCode = require('./NonBlockingCode')


//Blocking Code---
var output  = syncCode.getSampleFileContent()
console.log(output)


// Non blocking Code
var asyncOutput = '';
 asyncCode.readSampleFile(function(response){
     //written here.. will always get executed after our readSampleFile
     asyncOutput = response;
     console.log(asyncOutput)
 })
