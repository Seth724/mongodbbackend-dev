
import { db } from '../configs/db.js';
import type { Request, Response } from 'express';

export class ItemController {
    public static async createItem(req: Request, res: Response) {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ error: 'Name is required' });
        }
        try {
            db.data.items.push({ id: db.data.items.length + 1, name });
            await db.write();
            res.status(201).json({ message: 'Item added successfully', item: { id: db.data.items.length, name } });
        } catch (error) {
            res.status(500).json({ error: 'Failed to add item' });
        }
    }

    public static async getItems(req: Request, res: Response) {
        try {
            await db.read();
            res.status(200).json({ items: db.data.items });
        } catch (error) {
            res.status(500).json({ error: 'Failed to retrieve items' });
        }
    }

    public static async updateItem(req: Request, res: Response) {
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
            const item = db.data.items.find((item: { id: number; name: string }) => item.id === id);
            if (!item) {
                return res.status(404).json({ error: 'Item not found' });
            }
            item.name = name;
            await db.write();
            res.status(200).json({ message: 'Item updated successfully', item });
        } catch (error) {
            res.status(500).json({ error: 'Failed to update item' });
        }
    }

    public static async deleteItem(req: Request, res: Response) {
        const idParam = req.params.id;
        if (!idParam) {
            return res.status(400).json({ error: 'Id is required' });
        }

        const id = parseInt(idParam);

        try {
            const itemIndex = db.data.items.findIndex((item: { id: number; name: string }) => item.id === id);
            if (itemIndex === -1) {
                return res.status(404).json({ error: 'Item not found' });
            }
            db.data.items.splice(itemIndex, 1);
            await db.write();
            res.status(200).json({ message: 'Item deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete item' });
        }
    }
}