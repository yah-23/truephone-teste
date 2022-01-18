import React, { createContext, useState, useContext } from 'react';

const UploadContext = createContext();

export const UploadProvider = ({ children }) => {
    const [isUploading, setIsUploading] = useState(false);

    return (
        <UploadContext.Provider value={{
            isUploading, setIsUploading
        }}>
            { children }
        </UploadContext.Provider>
    )
} 

export const useUploadContext = () => {
    const context = useContext(UploadContext);
    
    const { isUploading, setIsUploading } = context;
    return {
        isUploading, setIsUploading
    }
}