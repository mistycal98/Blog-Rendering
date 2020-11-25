/* <ul>
    <li>Related Links</li>
    <li>Related Links</li>
    <li>Related Links</li>
    <li>Related Links</li>
</ul> */

import { findBlogById } from "../helper/findBlogById.js";
import { renderNewBlog } from "./renderNewBlog.js";

export const relatedLinks = (links) => {
  return links.map((link) => {
      
    const div = document.createElement("div");
    div.classList.add("related-link");
    div.setAttribute("id", link.id);

    const p = document.createElement("p");
    p.classList.add("link-title");

    const a = document.createElement("a");
    a.textContent = link.title;
    a.href = "#";

    p.appendChild(a);

    div.appendChild(img);
    div.appendChild(p);

    // this is done using Event Delegation
    // div.addEventListener("click", () => {
    //   renderNewBlog(link.id);
    // });

    return div;
  });
};