import React, { useState } from 'react';

const CommentSection = ({ comments, onAddComment }) => {
    const [commentText, setCommentText] = useState('');

    const handleAddComment = (e) => {
        e.preventDefault();
        onAddComment(commentText);
        setCommentText('');
    };

    return (
        <div className="mt-4">
            <h4 className="text-lg font-semibold">Comments</h4>
            {comments.map(comment => (
                <div key={comment.comment_id} className="mb-4">
                    <p className="text-gray-800">{comment.comment}</p>
                </div>
            ))}
            <form onSubmit={handleAddComment} className="flex gap-4">
                <input
                    type="text"
                    placeholder="Add a comment"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    required
                    className="p-2 border border-gray-300 rounded flex-grow text-gray-500"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Comment</button>
            </form>
        </div>
    );
};

export default CommentSection;
