import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ videoUrl }) => {
    return (
        <div className="w-full h-auto p-4">
            <ReactPlayer url={videoUrl} controls width="100%" height="100%" />
        </div>
    );
};

export default VideoPlayer;
