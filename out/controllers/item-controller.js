import { db } from '../configs/db.js';
export class ItemController {
    static async createItem(req, res) {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ error: 'Name is required' });
        }
        try {
            db.data.items.push({ id: db.data.items.length + 1, name });
            await db.write();
            res.status(201).json({ message: 'Item added successfully', item: { id: db.data.items.length, name } });
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to add item' });
        }
    }
    static async getItems(req, res) {
        try {
            await db.read();
            res.status(200).json({ items: db.data.items });
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to retrieve items' });
        }
    }
    static async updateItem(req, res) {
        const idParam = req.params.id;
        if (!idParam) {
            return res.status(400).json({ error: 'Id is required' });
        }
        const id = parseInt(idParam);
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ error: 'Name is required' });
        }
        try {
            const item = db.data.items.find((item) => item.id === id);
            if (!item) {
                return res.status(404).json({ error: 'Item not found' });
            }
            item.name = name;
            await db.write();
            res.status(200).json({ message: 'Item updated successfully', item });
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to update item' });
        }
    }
    static async deleteItem(req, res) {
        const idParam = req.params.id;
        if (!idParam) {
            return res.status(400).json({ error: 'Id is required' });
        }
        const id = parseInt(idParam);
        try {
            const itemIndex = db.data.items.findIndex((item) => item.id === id);
            if (itemIndex === -1) {
                return res.status(404).json({ error: 'Item not found' });
            }
            db.data.items.splice(itemIndex, 1);
            await db.write();
            res.status(200).json({ message: 'Item deleted successfully' });
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to delete item' });
        }
    }
}
//# sourceMappingURL=item-controller.js.map