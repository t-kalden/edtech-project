import React, { useState } from 'react';

const CreateVideoForm = ({ onCreate }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate({ title, description, video_url: url, user_id: 'testUser' });
        setTitle('');
        setDescription('');
        setUrl('');
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input 
                type="text" 
                placeholder="Title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                required 
                className="p-2 border border-gray-300 rounded text-gray-700"
            />
            <input 
                type="text" 
                placeholder="Description" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                required 
                className="p-2 border border-gray-300 rounded text-gray-700"
            />
            <input 
                type="url" 
                placeholder="Video URL" 
                value={url} 
                onChange={(e) => setUrl(e.target.value)} 
                required 
                className="p-2 border border-gray-300 rounded text-gray-700"
            />
            <div className="flex justify-between">
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Upload</button>
                <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded" onClick={() => setTitle('') && setDescription('') && setUrl('')}>Cancel</button>
            </div>
        </form>
    );
};

export default CreateVideoForm;
