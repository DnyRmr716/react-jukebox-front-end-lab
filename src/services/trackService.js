const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;


export const fetchTracks = async () => {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
};

export const createTrack = async (track) => {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(track)
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
};


export const fetchTrackById = async (trackId) => {
    const response = await fetch(`${BASE_URL}/${trackId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch track');
    }
    return response.json();
};


export const updateTrack = async (trackId, track) => {
    const response = await fetch(`${BASE_URL}/${trackId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(track)
    });
    if (!response.ok) {
      throw new Error('Failed to update track');
    }
    return response.json();
};
  
  
export const deleteTrack = async (trackId) => {
    const response = await fetch(`${BASE_URL}/${trackId}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Failed to delete track');
    }
    return response.json(); 
};
  
