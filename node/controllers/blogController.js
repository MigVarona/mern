import BlogModel from '../models/blogModel.js';

export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.json({message: error.message});
    }
}

export const getBlog = async (req, res) => {
    try {
        const id = req.params.id;
        const blog = await BlogModel.findById(id);
        res.status(200).json(blog);
    } catch (error) {
        res.json({ message: error.message });
    }     
}

export const createBlog = async (req, res) => {
    try {
        await BlogModel.create(req.body);
        res.json({ message: "Blog created successfully" });
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const updateBlog = async (req, res) => {
    try {
        await BlogModel.updateOne(
            { _id: req.params.id },
            { $set: req.body }
        );
        res.json({ message: "Blog updated successfully" });
    } catch (error) {
        res.json({ message: error.message });
    }      
}


export const deleteBlog = async (req, res) => {
    try {
        await BlogModel.deleteOne({ _id: req.params.id });
        res.json({ message: "Blog deleted successfully" });
    } catch (error) {
        res.json({ message: error.message });
    }
}
