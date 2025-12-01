import mongoose, { Schema, Document } from 'mongoose';
// Define the schema for the Item model
const ItemSchema = new Schema({
    name: { type: String, required: true },
    id: { type: String, required: true, unique: true },
});
// Create the model
const ItemSchemaModel = mongoose.model('Item', ItemSchema);
export default ItemSchemaModel;
//# sourceMappingURL=item-model.js.map