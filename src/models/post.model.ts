import { Schema, model } from "mongoose";
import Joi from "joi";

interface IPosts {
  title: string;
  body: string;
  author: string;
  imageUrl: string;
  date: string;
  category: string;
  tags: string[];
}

export const PostschemaValidate = Joi.object({
  title: Joi.string().required(),
  body: Joi.string().required(),
  author: Joi.string().required(),
  category: Joi.string().required(),
  date: Joi.string().required(),
  imageUrl: Joi.string().required(),
  tags: Joi.array().items(Joi.string()),
});

const postSchema = new Schema<IPosts>({
  title: {
    type: String,
    required: true,
  },

  body: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
    default: new Date().toISOString(),
  },

  imageUrl: {
    type: String,
    required: true,
  },

  tags: {
    type: [String],
    required: true,
  },
});

export const Post = model<IPosts>("Post", postSchema);
