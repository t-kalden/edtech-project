'use client'

import React, { useEffect, useState } from 'react';
import { fetchVideos, createVideo, fetchComments, addComment } from './utils/api';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';
import CommentSection from './components/CommentSection';
import Header from './components/Header';
import UploadModal from './components/UploadModal';

const HomePage = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [comments, setComments] = useState([]);
    const [isUploadModalOpen, setUploadModalOpen] = useState(false);
    let uID = 'testUser'

    useEffect(() => {
        const loadVideos = async () => {
            const videoData = await fetchVideos(uID);
            setVideos(videoData);
        };
        loadVideos();
        console.log(videos)
    }, [videos]);

    useEffect(() => {
        if (selectedVideo) {
            const loadComments = async () => {
                const commentsData = await fetchComments(selectedVideo.video_id);
                setComments(commentsData);
            };
            loadComments();
        }
    }, [selectedVideo]);

    const handleCreateVideo = async (videoData) => {
        const newVideo = await createVideo(videoData);
        setVideos([...videos, newVideo]);
        setUploadModalOpen(false);
    };

    const handleAddComment = async (commentText) => {
        const newComment = await addComment(selectedVideo.video_id, { comment: commentText, user_id: 'fake_user' });
        setComments([...comments, newComment]);
    };

    return (
        <div>
            <Header onUploadClick={() => setUploadModalOpen(true)} />
            <div className="p-4">
                <VideoList videos={videos} onSelect={setSelectedVideo} />
                {selectedVideo && (
                    <>
                        <VideoPlayer videoUrl={selectedVideo.video_url} />
                        <CommentSection comments={comments} onAddComment={handleAddComment} />
                    </>
                )}
                <UploadModal open={isUploadModalOpen} handleClose={() => setUploadModalOpen(false)} onCreate={handleCreateVideo} />
            </div>
        </div>
    );
};

export default HomePage
