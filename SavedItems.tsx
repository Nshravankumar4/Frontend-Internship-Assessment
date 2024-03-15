import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removePhoto, removePost } from '../slices/savedItemsSlice';
import { RootState } from '../store';
import { Photo, Post } from '../types';

const SavedItems: React.FC = () => {
  const dispatch = useDispatch();
  const savedPhotos = useSelector((state: RootState) => state.savedItems.photos);
  const savedPosts = useSelector((state: RootState) => state.savedItems.posts);

  const handleRemovePhoto = (photoId: number) => {
    dispatch(removePhoto(photoId));
  };

  const handleRemovePost = (postId: number) => {
    dispatch(removePost(postId));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Saved Items</h2>
      <div>
        <h3 className="text-lg font-bold mb-2">Saved Photos</h3>
        <div className="grid grid-cols-4 gap-4">
          {savedPhotos.map((photo) => (
            <div key={photo.id} className="border p-4">
              <img src={photo.thumbnailUrl} alt={photo.title} className="mb-2" />
              <h4 className="text-md font-bold">{photo.title}</h4>
              <button
                onClick={() => handleRemovePhoto(photo.id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Un-save
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold mb-2">Saved Posts</h3>
        <div className="grid grid-cols-1 gap-4">
          {savedPosts.map((post) => (
            <div key={post.id} className="border p-4">
              <h4 className="text-md font-bold">{post.title}</h4>
              <p>{post.body}</p>
              <button
                onClick={() => handleRemovePost(post.id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Un-save
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SavedItems;
