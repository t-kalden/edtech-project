import React from 'react';
import { Modal } from '@mui/material';
import CreateVideoForm from './CreateVideoForm';

const UploadModal = ({ open, handleClose, onCreate }) => {
    return (
        <Modal open={open} onClose={handleClose}>
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded shadow-lg">
                <h2 className="text-2xl mb-4">Upload a video</h2>
                <CreateVideoForm onCreate={onCreate} />
            </div>
        </Modal>
    );
};

export default UploadModal;
