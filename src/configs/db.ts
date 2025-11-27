import {Low}from 'lowdb';
import {JSONFile}from 'lowdb/node';

interface DbSchema{
items:{id:number;name:string}[];
}
const adapter=new JSONFile<DbSchema>('db.json');
const db=new Low<DbSchema>(adapter,{
items:[]
});

async function initializeDb(){
await db.read();
db.data=db.data||{items:[]};
await db.write();
}

export{db,initializeDb};