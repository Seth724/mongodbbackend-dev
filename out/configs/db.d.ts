import mongoose, { Document } from 'mongoose';
export interface IItem extends Document {
    name: string;
    id: string;
}
declare const ItemSchemaModel: mongoose.Model<IItem, {}, {}, {}, mongoose.Document<unknown, {}, IItem, {}, mongoose.DefaultSchemaOptions> & IItem & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any, IItem>;
export default ItemSchemaModel;
//# sourceMappingURL=db.d.ts.map