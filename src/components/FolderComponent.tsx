import FolderIcon from './SVG/folder';
import RightArrowIcon from './SVG/Right';

interface Props {
    foldername: string;
}

export const FolderComponent = ({ foldername }: Props) => {
    return (
        <div className="flex items-center">
            <RightArrowIcon />

            <span className='mr-2'>
                <FolderIcon />
            </span>
            <span>
                {foldername}
            </span>
        </div>
    )
}
