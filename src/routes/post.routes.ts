import express from "express";
import { PostController } from "../controllers/post.controller";

export const router = express.Router();

//add post route
router.post("/", PostController.addpost);

//get posts
router.get("/", PostController.getPosts);

//get single post
router.get("/:id", PostController.getAPost);

//update a post
router.put("/:id", PostController.updatePost);

//delete a post
router.delete("/:id", PostController.deletePost);
