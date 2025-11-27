import { Low } from 'lowdb';
interface DbSchema {
    items: {
        id: number;
        name: string;
    }[];
}
declare const db: Low<DbSchema>;
declare function initializeDb(): Promise<void>;
export { db, initializeDb };
//# sourceMappingURL=db.d.ts.map