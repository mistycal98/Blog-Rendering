//  <div class="blog-image">
// <img src="" alt="" srcset="">
// </div>

import { blogs } from "../data.js";

export const blogImage = (imageUrl) => {

    const div = document.createElement('div');
    div.classList.add('blog-image');

    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = 'Some Alternate Description';

    div.appendChild(img);

    return div;

}