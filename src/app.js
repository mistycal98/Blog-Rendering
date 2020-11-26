console.log('Starting Script......');

import { blogs } from "./data.js"
import { blogImage } from "./components/blogImage.js";
import { blogContent } from "./components/blogContent.js";
import { relatedLinks } from "./components/relatedLinks.js";

window.onload = () => {

    const blogDiv = document.getElementById('root');
    
    blogDiv.appendChild(blogImage(blogs[0].imageUrl));

    blogDiv.appendChild(blogContent(blogs[0].title, blogs[0].content));

    const asideDiv = document.getElementById('related-links');

    asideDiv.appendChild(relatedLinks(blogs.links));
}