import fs from 'fs';
import path from 'path';
import { Sequelize, DataTypes } from 'sequelize';
import sequelize from 'sequelize-typescript';
import type { ModelsObject as models } from './index.types';

const basename = path.basename(__filename);

const db: Record<string, any> = {
    sequelize,
    Sequelize,
};

fs.readdirSync(__dirname)
    .filter(
        (file) =>
            file.indexOf('.') !== 0 &&
            file !== basename &&
            file.slice(-8) !== '.spec.js' &&
            (file.slice(-3) === '.js' || file.slice(-3) === '.ts') &&
            !file.includes('.types.js') &&
            !file.includes('.types.ts'),
    )
    .forEach((file) => {
        const modelFile = require(path.join(__dirname, file));
        const model = modelFile.default
            ? modelFile.default(sequelize, DataTypes)
            : modelFile(sequelize, DataTypes);

        db[model.name] = model;
    });

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

export default db as models;