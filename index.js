import { readFile } from 'fs/promises';
import wordCount from "word-count";
//we will use the path library to join and get the correct path from the config json file.
import path from 'path';

import configPath from './config.json' assert{type:"json"};
const files=configPath.files;
//console.log(filePaths);



async function ProccessFile(filePath) {
    try {
        //read the file,uft8 to read it as a text.
      const data = await readFile(filePath,'utf8');
      console.log(data);
      //call wordcount to count words, i edited the method pattern to accept Special Characters.
      const wordCountResult = wordCount(data);
      //handel if file is empty
      if(!wordCountResult==0){
      console.log(`${filePath}: ${wordCountResult} words`);
      }
      else{
        console.log(`${filePath} is Empty`);
      }
      //here if the file is not existed.
    } catch (error) {
      console.error(`Got an error trying to read the file${filePath}: ${error.message}`);
   }
  }
   //iterate the config.json file and process each file in it.
   files.forEach(file => {
    ProccessFile(file);
    
   });
   

