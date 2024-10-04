import React, { useState } from 'react'; 
import TrackList from './TrackList';
import NowPlaying from './NowPlaying';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentTrack, setCurrentTrack] = useState(null);

  return (
    <div>
      <h1>Welcome to the Track List</h1>
      <Link to="/add-track">
        <button>Add New Track</button>
      </Link>
      <TrackList setCurrentTrack={setCurrentTrack} />
      <NowPlaying track={currentTrack} />
    </div>

  );
};

export default Home;
