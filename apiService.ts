import axios from 'axios';
import { Photo, Post } from '../types';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPhotos = async (page: number): Promise<Photo[]> => {
  const response = await axios.get(`${API_BASE_URL}/photos?_start=${(page - 1) * 20}&_limit=20`);
  return response.data;
};

export const fetchPosts = async (page: number): Promise<Post[]> => {
  const response = await axios.get(`${API_BASE_URL}/posts?_start=${(page - 1) * 20}&_limit=20`);
  return response.data;
};
