"use strict";

import fs from "fs";
import path from "path";
import process from "process";
import Sequelize from "sequelize";
import { fileURLToPath, pathToFileURL } from "url";

// Fix __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";

// ✅ Read config.json safely (No import assertion needed)
const configPath = path.join(__dirname, "..", "config", "config.json");
const configFile = JSON.parse(fs.readFileSync(configPath, "utf-8"));
const config = configFile[env];

const db = {};
let sequelize;

// ✅ Initialize Sequelize
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
  );
}

// ✅ Read all model files
const files = fs.readdirSync(__dirname).filter((file) => {
  return (
    file.indexOf(".") !== 0 &&
    file !== basename &&
    file.slice(-3) === ".js" &&
    file.indexOf(".test.js") === -1
  );
});

// ✅ Proper ESM dynamic import (Windows safe)
for (const file of files) {
  const filePath = path.join(__dirname, file);
  const module = await import(pathToFileURL(filePath).href);
  const model = module.default(sequelize, Sequelize.DataTypes);
  db[model.name] = model;
}

// ✅ Run associations
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

await sequelize.authenticate();
console.log("Database connected successfully");

export default db;
