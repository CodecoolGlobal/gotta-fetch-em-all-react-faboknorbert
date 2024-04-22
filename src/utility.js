import { readFile, writeFile } from "node:fs/promises";

const DATA_PATH = './data.json';

async function fetchJsonData(url){
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function getData(){
    const fileContent = await readFile(DATA_PATH, 'utf-8');
    return JSON.parse(fileContent);
}

async function saveData(data){
    const fileContentToSave = JSON.stringify(data, null, 2);
    writeFile(DATA_PATH, fileContentToSave);
}

export default {fetchJsonData, getData, saveData}