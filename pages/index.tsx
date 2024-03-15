import React, { useState } from 'react';
import PhotoList from '../components/PhotoList';
import PostList from '../components/PostList';
import SavedItems from '../components/SavedItems';
import SearchBar from '../components/SearchBar';

const Dashboard: React.FC = () => {
  const [photoSearchTerm, setPhotoSearchTerm] = useState<string>('');
  const [postSearchTerm, setPostSearchTerm] = useState<string>('');

  const handlePhotoSearch = (searchTerm: string) => {
    setPhotoSearchTerm(searchTerm);
  };

  const handlePostSearch = (searchTerm: string) => {
    setPostSearchTerm(searchTerm);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <SearchBar onSearch={handlePhotoSearch} placeholder="Search Photos" />
          <PhotoList />
          <SearchBar onSearch={handlePostSearch} placeholder="Search Posts" />
          <PostList />
        </div>
        <div>
          <SavedItems />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
