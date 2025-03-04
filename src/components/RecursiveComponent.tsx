import { useState } from 'react';
import { IFile } from '../interfaces';
import FileIcon from './SVG/file';
import RightArrowIcon from './SVG/Right';
import BottomArrowIcon from './SVG/Bottom';

interface Props {
    fileTree: IFile;
}



export const RecursiveComponent = ({fileTree}: Props) => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(prev=>!prev);
  };

    return (
    <div className="ml-4 cursor-pointer">
       <div className="flex items-center" onClick={handleOpen}>
        {
          fileTree.isFolder && (  isOpen ? <BottomArrowIcon /> : <RightArrowIcon />
          )
        }
      <span className='mr-2'>
      <FileIcon filename={fileTree.name} isFolder={fileTree.isFolder} isOpen={isOpen}/>
      </span>
      <span>
      {fileTree.name}
      </span>
       </div>

      {isOpen && fileTree.children?.map((file ,idx)=>{
        return <RecursiveComponent key={idx} fileTree={file}/>
      })}
          </div>
    )
}
