export const updatePost = async () => {
    const requestGetPosts = await fetch('/post');
    return await requestGetPosts.json();
};