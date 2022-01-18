import React, { createContext, useState, useContext } from 'react';
import api from '../services/api';


const UploadContext = createContext();

export const UploadProvider = ({ children }) => {
    const [isUploading, setIsUploading] = useState(false);
    const [validatedData, setValidatedData] = useState(null);

    const dataValidation = async (file) => {
        setIsUploading(true);
        const formData = new FormData();
        formData.append('file', file.originFileObj);
    
        const response = await api.post('/validation', formData, {
          "Content-Type":  "multipart/form-data"
        });
    
        const { data } = response.data;
        
        setValidatedData(data);
        setTimeout(() => {
            setIsUploading(false);
        }, 2000);
    }

    return (
        <UploadContext.Provider value={{
            isUploading, setIsUploading,
            dataValidation, validatedData, setValidatedData
        }}>
            { children }
        </UploadContext.Provider>
    )
} 

export const useUploadContext = () => {
    const context = useContext(UploadContext);
    
    const { isUploading, setIsUploading, dataValidation, validatedData, setValidatedData } = context;
    
    return {
        isUploading, setIsUploading,
        dataValidation,
        validatedData, setValidatedData
    }
}