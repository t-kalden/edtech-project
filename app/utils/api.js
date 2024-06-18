const API_BASE_URL = 'https://take-home-assessment-423502.uc.r.appspot.com/api';

const handleError = (error) => {
    console.error('API call failed:', error);
    throw error;
};

export const fetchVideos  = async (user_id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/videos?user_id=${user_id}`, {
            method: 'GET',
            headers: {
                'accept': 'application/json'
            },
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        handleError(error);
    }
  };
  
export const createVideo = async (videoData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/videos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(videoData)
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        handleError(error);
    }
};

export const fetchComments = async (videoId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/videos/${videoId}/comments`);
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        handleError(error);
    }
};

export const addComment = async (videoId, commentData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/videos/${videoId}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(commentData)
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        handleError(error);
    }
};
