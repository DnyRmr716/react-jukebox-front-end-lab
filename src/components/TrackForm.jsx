import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createTrack, updateTrack, fetchTrackById } from '../services/trackService';

const TrackForm = () => {
  const [track, setTrack] = useState({ title: '', artist: '' });
  const navigate = useNavigate();
  const { trackId } = useParams();

  useEffect(() => {
    if (trackId) {
      fetchTrackById(trackId).then(trackData => setTrack(trackData));
    }
  }, [trackId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (trackId) {
        await updateTrack(trackId, track);
      } else {
        await createTrack(track);
      }
      navigate('/');
    } catch (error) {
      console.error('Failed to submit track:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTrack(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Track Title:
        <input
          type="text"
          name="title"
          value={track.title}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Artist:
        <input
          type="text"
          name="artist"
          value={track.artist}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">{trackId ? 'Update Track' : 'Add Track'}</button>
    </form>
  );
};

export default TrackForm;
