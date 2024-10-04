import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTracks, deleteTrack } from '../services/trackService';

const TrackList = ({ setCurrentTrack }) => {
  const [tracks, setTracks] = useState([]);

  const handleDelete = async (trackId) => {
    try {
      await deleteTrack(trackId);
      const updatedTracks = tracks.filter(track => track._id !== trackId);
      setTracks(updatedTracks); 
    } catch (error) {
      console.error('Failed to delete track:', error);
    }
  };

  useEffect(() => {
    const getTracks = async () => {
      try {
        const data = await fetchTracks();
        setTracks(data);
      } catch (error) {
        console.error('Failed to fetch tracks:', error);
      }
    };

    getTracks();
  }, []);

  return (
    <div>
      <h2>Track List</h2>
      {tracks.length > 0 ? (
        <ul>
          {tracks.map((track, index) => (
            <li key={index}>
              <h3>{track.title}</h3>
              <p>Artist: {track.artist}</p>
              <div>
                <Link to={`/edit-track/${track._id}`}>
                 <button>Edit</button>
                </Link>
                <button onClick={() => handleDelete(track._id)}>Delete</button>
                <button onClick={() => setCurrentTrack(track)}>Play</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tracks found.</p>
      )}
    </div>
  );
};

export default TrackList;
