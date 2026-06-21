import { getDBConnection } from "../db";
import categories from '@/lib/data/categories.json'

async function seedCategories() {
    const db = await getDBConnection()

    await db.exec(`
        CREATE TABLE IF NOT EXISTS categories(
        slug TEXT PRIMARY KEY,
        name TEXT NOT NULL
        )
        `);
    
    const insertCategories = await db.prepare(
        `INSERT INTO categories(
            slug,
            name
        ) VALUES (?,?) `
    )

    for (const category of categories) {
        await insertCategories.run(
            category.slug,
            category.name
        )
    }
    await insertCategories.finalize()
    await db.close()

    console.log("Categories table seeded")
}

seedCategories().catch( error => {
    console.error("Seeding categories error", error)
})