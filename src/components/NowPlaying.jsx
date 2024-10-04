import React from 'react';

const NowPlaying = ({ track }) => {
  if (!track) {
    return null;
  }

  return (
    <div>
      <h3>Now Playing</h3>
      <p>Title: {track.title}</p>
      <p>Artist: {track.artist}</p>
    </div>
  );
};

export default NowPlaying;
