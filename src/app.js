console.log('Starting Script......');

import { blogs } from "./data.js"
import { blogImage } from "./components/blogImage.js";
import { blogContent } from "./components/blogContent.js";

window.onload = () => {

    const blogDiv = document.getElementById('root');
    
    blogDiv.appendChild(blogImage(blogs[0].imageUrl));

    blogDiv.appendChild(blogContent(blogs[0].title, blogs[0].content));

}