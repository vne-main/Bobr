import { request } from './function';

export const getPosts = () => {
  return request('get', '/posts');
};

export const getPost = () => {
  const urlArray = document.location.href.split('/');
  const idPost = urlArray[urlArray.length - 1];
  return request('get', `/post/${idPost}`);
};

export const publishPost = (title, text, tagsData) => {
  const data = {
    title: title,
    text: text,
    tagsData: tagsData,
    author_name: 'User',
    author_img: 'https://storage.googleapis.com/vasenking/user_icon/user_0.jpg'
  };
  return request('post', '/post', data);
};

export const addComment = (id, text) => {
  const data = {
    _id: id,
    text: text,
    author_name: 'User'
  };
  return request('post', '/post/comment', data);
};
