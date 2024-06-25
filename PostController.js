import Post from "./Post.js";
import PostService from "./PostService.js";
import postService from "./PostService.js";

class PostController{
    async create(req,res){
        try {
            console.log(req.files)
            const post = await postService.create(req.body, req.files.picture)
            res.json(post);
        }catch (e){
            res.status(500).json(e);
        }
    }
    async getAll(req,res){
        try {
            const posts = await postService.getAll();
            res.json(posts)
        }catch (e){
            res.status(500).json(e);
        }
    }
    async getOne(req,res){
        try {
            const post = await postService.getOne(req.params.id);
            return res.json(post)
        }catch (e){
            res.status(500).json(e.message);
        }
    }
    async update(req,res){
        try {
            const updatedPost = await postService.update(req.body)
            return res.json(updatedPost)
        }catch (e){
            res.status(500).json(e.message);
        }
    }
    async delete(req,res){
        try {
            const post = await postService.delete(req.params.id)
            return res.json(post)
        }catch (e){
            res.status(500).json(e.message);
        }
    }
}

export default new PostController()