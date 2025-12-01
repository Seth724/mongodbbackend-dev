import mongoose, { Schema, Document } from 'mongoose';

// Define the interface for the Item document
export interface IItem extends Document {
  name: string;
  id: string;
}

// Define the schema for the Item model
const ItemSchema: Schema = new Schema({
  name: { type: String, required: true },
  id: { type: String, required: true, unique: true },
});

// Create the model
const ItemSchemaModel = mongoose.model<IItem>('Item', ItemSchema);

export default ItemSchemaModel;