import {neon} from "@neondatabase/serverless";
import "dotenv/config";

//create a sql connection
export const sql = neon(process.env.DATABSE_URL);