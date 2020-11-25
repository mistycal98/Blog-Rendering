import { blogs } from "../data.js";

export const findBlogById = (blogId) => {
    return blogs.find((blog) => {
        return blog.id == blogId;
    });
};