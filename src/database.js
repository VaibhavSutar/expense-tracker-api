import {neon} from "@neondatabase/serverless";
import "dotenv/config";

//create a sql connection
export const sql = neon(process.env.DATABASE_URL);

export async function initDB(){
    try {
        await sql`CREATE TABLE IF NOT EXISTS transactions(
            id SERIAL PRIMARY KEY,
            user_id VARCHAR(255) NOT NULL,
            title VARCHAR(255) NOT NULL,
            amount DECIMAL(10, 2) NOT NULL,
            category VARCHAR(255) NOT NULL,
            created_at DATE NOT NULL DEFAULT CURRENT_DATE
        )`;
        console.log("Table created successfully");
        
    } catch (error) {
        console.log("Erorr intitlaizing database:", error);
        process.exit(1); //Status code 1 indicates an error
    }
}