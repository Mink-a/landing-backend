import { postServices } from "../services/post.service";
import { Request, Response } from "express";
import { PostschemaValidate } from "../models/post.model";

class postController {
  //add post controller
  addpost = async (req: Request, res: Response) => {
    //data to be saved in database
    const data = {
      title: req.body.title,
      author: req.body.author,
      body: req.body.body,
      date: req.body.date,
      imageUrl: req.body.imageUrl,
      category: req.body.category,
      tags: req.body.tags,
    };
    //validating the request
    const { error, value } = PostschemaValidate.validate(data);

    if (error) {
      res.send(error.message);
    } else {
      //call the create post function in the service and pass the data from the request
      const post = await postServices.createPost(value);
      res.status(201).send(post);
    }
  };

  //get all posts with pagination
  getPosts = async (req: Request, res: Response) => {
    const page = req.query.page ? parseInt(req.query.page as string) : 1; // Use a default value of 1 if 'page' is not provided
    const perPage = req.query.perPage
      ? parseInt(req.query.perPage as string)
      : 10; // Use a default value of 10 if 'perPage' is not provided

    const posts = await postServices.getPosts(page, perPage);
    res.send(posts);
  };

  //get a single post
  getAPost = async (req: Request, res: Response) => {
    //get id from the parameter
    const id = req.params.id;
    const post = await postServices.getPost(id);
    res.send(post);
  };

  //update post
  updatePost = async (req: Request, res: Response) => {
    const id = req.params.id;
    const post = await postServices.updatePost(id, req.body);
    res.send(post);
  };

  //delete a post
  deletePost = async (req: Request, res: Response) => {
    const id = req.params.id;
    await postServices.deletePost(id);
    res.send("post deleted");
  };
}

//export class
export const PostController = new postController();
