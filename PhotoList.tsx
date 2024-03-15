import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoto, removePhoto } from '../slices/savedItemsSlice';
import { RootState } from '../store';
import { Photo } from '../types';
import { fetchPhotos } from '../services/apiService';

const PhotoList: React.FC = () => {
  const dispatch = useDispatch();
  const savedPhotos = useSelector((state: RootState) => state.savedItems.photos);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetchPhotos(page)
      .then((data) => setPhotos(data))
      .catch((error) => console.error('Error fetching photos:', error));
  }, [page]);

  const handleSavePhoto = (photo: Photo) => {
    dispatch(addPhoto(photo));
  };

  const handleRemovePhoto = (photoId: number) => {
    dispatch(removePhoto(photoId));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Photos</h2>
      <div className="grid grid-cols-4 gap-4">
        {photos.map((photo) => (
          <div key={photo.id} className="border p-4">
            <img src={photo.thumbnailUrl} alt={photo.title} className="mb-2" />
            <h3 className="text-lg font-bold">{photo.title}</h3>
            {savedPhotos.some((savedPhoto) => savedPhoto.id === photo.id) ? (
              <button
                onClick={() => handleRemovePhoto(photo.id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Un-save
              </button>
            ) : (
              <button
                onClick={() => handleSavePhoto(photo)}
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

export default PhotoList;
