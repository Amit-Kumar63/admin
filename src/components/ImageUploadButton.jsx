import React from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';

const { Dragger } = Upload;
const ImageUploadButton = ({ setFiles }) => {
    const props = {
      name: 'file',
      multiple: true,
  
      // Simulate successful upload
      customRequest({ file, onSuccess }) {
        setTimeout(() => {
          onSuccess("ok");
        }, 1000);
      },
  
      onChange(info) {
        const { status } = info.file;
        if (status === 'done') {
          message.success(`${info.file.name} file uploaded locally.`);
          setFiles(info.fileList); // 
        } else if (status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
  
      onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
      },
    };
  
    return (
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text !text-white">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint" style={{ color: '#dadada' }}>
          File will be saved locally. Supports PSD/PNG/JPG/JPEG/VECTOR.
        </p>
      </Dragger>
    );
  };

export default ImageUploadButton