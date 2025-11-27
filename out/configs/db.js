import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
const adapter = new JSONFile('db.json');
const db = new Low(adapter, {
    items: []
});
async function initializeDb() {
    await db.read();
    db.data = db.data || { items: [] };
    await db.write();
}
export { db, initializeDb };
//# sourceMappingURL=db.js.map