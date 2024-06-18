import React from 'react';

const VideoList = ({ videos, onSelect }) => {
    console.log(videos)
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            { 
                (videos.length > 0) ? 
                (videos.map(video => (
                    <div 
                        key={video.video_id} 
                        onClick={() => onSelect(video)} 
                        className="bg-white shadow-lg rounded-lg p-4 cursor-pointer"
                    >   
                        <h3 className="text-xl font-semibold">{video.title}</h3>
                        <p className="text-gray-600">{video.description}</p>
                    </div>
                ))) : (
                    <div className='text-gray-700'>No Videos available</div>
                )
            }
        </div>
    );
};

export default VideoList;
