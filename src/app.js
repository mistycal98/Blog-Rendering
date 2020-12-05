import { blogs } from "./data.js"
import { blogImage } from "./components/blogImage.js";
import { blogContent } from "./components/blogContent.js";
import { relatedLinks } from "./components/relatedLinks.js";
import { findBlogById } from "./helper/findBlogById.js";

window.onload = () => {
    // loadBlog(blogs[0].id);
    blogs.then((blog) => {
        // console.log(blog);
        loadBlog(blog[0].id);
    }).catch(e => console.warn(e));
}

export const loadBlog = async (id) => {
    const blog = await findBlogById(id);
    
    const blogDiv = document.getElementById('root');

    if (blogDiv.hasChildNodes()) {
        blogDiv.querySelectorAll('*').forEach((node) => {
            node.remove();
        });
    }

    blogDiv.appendChild(blogImage(blog.imageUrl));
    blogDiv.appendChild(blogContent(blog.title, blog.content));

    const asideDiv = document.getElementById('related-links');
    if (asideDiv.hasChildNodes()) {
        asideDiv.querySelectorAll('*').forEach((node) => {
            node.remove();
        });
    };
    asideDiv.appendChild(relatedLinks(blog.links));
}