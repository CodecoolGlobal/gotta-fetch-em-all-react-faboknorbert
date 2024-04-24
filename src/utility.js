import fs from "fs";

const DATA_PATH = './data.json';

export async function fetchJsonData(url){
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export async function getData(){
    const fileContent = fs.readFile(DATA_PATH, 'utf-8');
    return JSON.parse(fileContent);
}

export async function saveData(data){
    const fileContentToSave = JSON.stringify(data, null, 2);
    fs.writeFile(DATA_PATH, fileContentToSave);
}