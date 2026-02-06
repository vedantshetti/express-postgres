import pool from "../config/db.js";

const createUserTable = async () => {
    const queryText = `CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURR   ENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`;

    try {
        pool.query(queryText);
        console.log("User table created successfully");
    }
    catch (err) {
        console.log(err);
    }
};

export default createUserTable;
// createUserTable();
// 


