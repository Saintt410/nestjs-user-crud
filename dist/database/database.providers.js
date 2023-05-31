"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const mongoose = require("mongoose");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: () => mongoose.connect('mongodb+srv://test:rootz491@cluster0.3usnk.mongodb.net/interview?retryWrites=true&w=majority'),
    },
];
//# sourceMappingURL=database.providers.js.map