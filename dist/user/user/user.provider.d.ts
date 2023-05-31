/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Connection } from 'mongoose';
export declare const UserProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<import("./user.interface").User, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./user.interface").User> & Omit<import("./user.interface").User & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, import("mongoose").Schema<import("./user.interface").User, import("mongoose").Model<import("./user.interface").User, any, any, any, import("mongoose").Document<unknown, any, import("./user.interface").User> & Omit<import("./user.interface").User & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, import("./user.interface").User, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<import("./user.interface").User>> & Omit<import("mongoose").FlatRecord<import("./user.interface").User> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>>;
    inject: string[];
}[];
