import { getDBConnection } from "./db";

export async function getModels(search?: string, sort?: string) {
  const db = await getDBConnection();
  let sql = "SELECT * FROM models";
  const placeholders = [];
  if (search) {
    sql += ` WHERE name LIKE ? OR description LIKE ?`;
    placeholders.push(`%${search}%`, `%${search}%`);
  }
  if (sort === "alpha") {
    sql += ` ORDER BY name ASC`;
  }
  if (sort === "popular") {
    sql += ` ORDER BY likes DESC`;
  }
  if (sort === "recent") {
    sql += ` ORDER BY dateAdded DESC`;
  }

  try {
    return await db.all(sql, placeholders);
  } finally {
    await db.close();
  }
}

export async function getModelsByCategorySlug(
  categorySlug: string,
  sort?: string,
) {
  const db = await getDBConnection();
  let sql = "SELECT * FROM models WHERE category=?";
  const placeholders = [categorySlug];
  if (sort === "alpha") {
    sql += ` ORDER BY name ASC`;
  }
  if (sort === "popular") {
    sql += ` ORDER BY likes DESC`;
  }
  if (sort === "recent") {
    sql += ` ORDER BY dateAdded DESC`;
  }
  try {
    return await db.all(sql, placeholders);
  } finally {
    await db.close();
  }
}

export async function getModelById(id: string) {
  const db = await getDBConnection();
  try {
    return await db.get(`SELECT * FROM models WHERE id=?`, [id]);
  } finally {
    await db.close();
  }
}
