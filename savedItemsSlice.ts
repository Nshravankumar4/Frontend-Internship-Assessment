import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Photo, Post } from '../types';

interface SavedItemsState {
  photos: Photo[];
  posts: Post[];
}

const initialState: SavedItemsState = {
  photos: [],
  posts: [],
};

const savedItemsSlice = createSlice({
  name: 'savedItems',
  initialState,
  reducers: {
    addPhoto: (state, action: PayloadAction<Photo>) => {
      state.photos.push(action.payload);
    },
    removePhoto: (state, action: PayloadAction<number>) => {
      state.photos = state.photos.filter((photo) => photo.id !== action.payload);
    },
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.push(action.payload);
    },
    removePost: (state, action: PayloadAction<number>) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
});

export const { addPhoto, removePhoto, addPost, removePost } = savedItemsSlice.actions;
export default savedItemsSlice.reducer;
