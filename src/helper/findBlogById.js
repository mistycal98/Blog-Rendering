import { blogs } from "../data.js";

// export const findBlogById = (blogId) => {
//     return blogs.find((blog) => {
//         return blog.id == blogId;
//     });
// };

export const findBlogById = (blogId) => {
    return blogs.then((blog) => {
        return blog.find(blog => {
            return blog.id == blogId;
        });
    })
};

// export const findBlogById = async (blogId) => {
//     let id = await 
// }
