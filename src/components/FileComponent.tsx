import FileIcon from './SVG/file';
import RightArrowIcon from './SVG/Right';

interface Props {
    filename:string;
}

export const FileComponent = ({filename}: Props) => {
    return (
    <div className="flex items-center">
        <RightArrowIcon />
      <span className='mr-2'>
        <FileIcon />
      </span>
      <span>
      {filename}
      </span>
    </div>
    )
}
