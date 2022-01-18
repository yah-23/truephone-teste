import { ContentBox } from './styles';

import Home from '../../views/Home';
import List from '../../views/List';
import Loading from '../Loading';
import Confirm from '../../views/Confirm';

import { useUploadContext } from '../../context'

const Content = () => {
    const { isUploading, showHome, showConfirm } = useUploadContext();

    return (
        <ContentBox>
            {showHome ? 
                <Home />
            : 
                <>
                    { isUploading ?
                        <Loading /> : 
                        <>
                            {showConfirm ? <Confirm /> : <List />}
                        </>
                    }    
                </>
            }
        </ContentBox>
    )
}

export default Content;