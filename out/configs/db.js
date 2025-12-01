// import {Low}from 'lowdb';
// import {JSONFile}from 'lowdb/node';
//
// interface DbSchema{
// items:{id:number;name:string}[];
// }
// const adapter=new JSONFile<DbSchema>('db.json');
// const db=new Low<DbSchema>(adapter,{
// items:[]
// });
//
// async function initializeDb(){
// await db.read();
// db.data=db.data||{items:[]};
// await db.write();
// }
//
// export{db,initializeDb};
import mongoose, { Schema, Document } from 'mongoose';
// Define the schema for the Item model
const ItemSchema = new Schema({
    name: { type: String, required: true },
    id: { type: String, required: true, unique: true },
});
// Create the model
const ItemSchemaModel = mongoose.model('Item', ItemSchema);
export default ItemSchemaModel;
//# sourceMappingURL=db.js.map