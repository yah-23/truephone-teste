import { ContentBox } from './styles';

import Home from '../../views/Home';
import List from '../../views/List';
import Loading from '../Loading';

import { useUploadContext } from '../../context'

const Content = () => {
    const { isUploading, showHome } = useUploadContext();

    return (
        <ContentBox>
            {showHome ? 
                <Home />
            : 
                <>
                    { isUploading ?
                        <Loading /> : <List />
                    }    
                </>
            }
        </ContentBox>
    )
}

export default Content;