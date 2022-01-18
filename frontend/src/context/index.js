import React, { createContext, useState, useContext } from 'react';
import api from '../services/api';


const UploadContext = createContext();

export const UploadProvider = ({ children }) => {
    const [isUploading, setIsUploading] = useState(false);
    const [validatedData, setValidatedData] = useState(null);
    const [showHome, setShowHome] = useState(true);
    const [showList, setShowList] = useState(false);
    const [totalValid, setTotalValid] = useState(0);

    const dataValidation = async (file) => {
        setIsUploading(true);
        setShowHome(false);
        const formData = new FormData();
        formData.append('file', file.originFileObj);
    
        const response = await api.post('/validation', formData, {
          "Content-Type":  "multipart/form-data"
        });
    
        const { data } = response.data;
        const total = data.filter(el => el.valido)

        setTotalValid(total.length)
        setValidatedData(data);
        setTimeout(() => {
            setIsUploading(false);
            setShowList(true)
        }, 2000);
    }

    const backToStart = async() => {
        setValidatedData(null);
        setShowList(false);
        setIsUploading(false);
        setShowHome(true);
    }

    return (
        <UploadContext.Provider value={{
            isUploading, setIsUploading,
            dataValidation, validatedData, setValidatedData,
            showHome, setShowHome, backToStart,
            showList, setShowList,
            totalValid, setTotalValid
        }}>
            { children }
        </UploadContext.Provider>
    )
} 

export const useUploadContext = () => {
    const context = useContext(UploadContext);
    
    const { isUploading, setIsUploading, dataValidation, validatedData, setValidatedData,
        showHome, setShowHome, backToStart, showList, setShowList,totalValid, setTotalValid
    } = context;
    
    return {
        isUploading, setIsUploading,
        dataValidation,
        validatedData, setValidatedData,
        showHome, setShowHome, backToStart,
        showList, setShowList,totalValid, setTotalValid
    }
}