import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, removePost } from '../slices/savedItemsSlice';
import { RootState } from '../store';
import { Post } from '../types';
import { fetchPosts } from '../services/apiService';

const PostList: React.FC = () => {
  const dispatch = useDispatch();
  const savedPosts = useSelector((state: RootState) => state.savedItems.posts);
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetchPosts(page)
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching posts:', error));
  }, [page]);

  const handleSavePost = (post: Post) => {
    dispatch(addPost(post));
  };

  const handleRemovePost = (postId: number) => {
    dispatch(removePost(postId));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Posts</h2>
      <div className="grid grid-cols-1 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="border p-4">
            <h3 className="text-lg font-bold">{post.title}</h3>
            <p>{post.body}</p>
            {savedPosts.some((savedPost) => savedPost.id === post.id) ? (
              <button
                onClick={() => handleRemovePost(post.id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Un-save
              </button>
            ) : (
              <button
                onClick={() => handleSavePost(post)}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4">
        <button
          onClick={() => setPage((prevPage) => prevPage - 1)}
          disabled={page === 1}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded mr-2"
        >
          Previous
        </button>
        <button
          onClick={() => setPage((prevPage) => prevPage + 1)}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PostList;
