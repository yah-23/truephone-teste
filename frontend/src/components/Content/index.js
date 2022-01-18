import { ContentBox } from './styles';

import Home from '../../views/Home';
import Loading from '../Loading';

import { useUploadContext } from '../../context'

const Content = () => {
    const { isUploading } = useUploadContext();

    return (
        <ContentBox>
            {isUploading ? 
                <Loading />
            : 
                <Home />
            }
        </ContentBox>
    )
}

export default Content;