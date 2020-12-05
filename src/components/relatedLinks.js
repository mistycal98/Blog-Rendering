import { loadBlog } from "../app.js";
/* <ul>
    <li>Related Links</li>
    <li>Related Links</li>
    <li>Related Links</li>
    <li>Related Links</li>
</ul> */
export const relatedLinks = (links) => {

  let ul = document.createElement('ul');
  ul.classList.add('related-links');

  links.forEach((link) => {

    let li = document.createElement('li');
    li.classList.add('realted-link');
    li.innerHTML = link.title;
    li.id = link.id;

    li.addEventListener('click', (event) => {
      loadBlog(event.target.id);
    });
    // console.log(li);
    ul.appendChild(li);
  });

  return ul;

}