/* <div class="blog-content">
    <h1>Title</h1>
    <p> content</p>
</div>  */

export const blogContent= (title, content)=>{
    const div = document.createElement('div');
    div.classList.add('blog-content');

    const h1 = document.createElement('h1');
    h1.innerHTML = title;

    const p = document.createElement('p');
    p.innerHTML = content;

    div.appendChild(h1);
    div.appendChild(p);

    return div;
}

