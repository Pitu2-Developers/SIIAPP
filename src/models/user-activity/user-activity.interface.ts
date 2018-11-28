import { Document } from "mongoose";
import { ID } from "../../types";

export interface IUserActivityModel {
    author: ID,
    action: string
}

export interface IUserActivityDocument extends IUserActivityModel, Document {
    createdAt: Date,
    updateAt: Date
}