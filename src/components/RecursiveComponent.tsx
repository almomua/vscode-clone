import { useState } from 'react';
import { IFile } from '../interfaces';
import FileIcon from './SVG/file';
import RightArrowIcon from './SVG/Right';
import BottomArrowIcon from './SVG/Bottom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setClickedFile, setOpenFiles } from '../store/fileTreeSlice';

interface Props {
    fileTree: IFile;
}



export const RecursiveComponent = ({fileTree}: Props) => {

  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleOpen = () => {
    setIsOpen(prev=>!prev);
  };
const dispatch = useDispatch();
const {openedTabs} = useSelector((state:RootState) => state.tree)
const handleClick = (file:IFile) => {
  dispatch(setOpenFiles([...openedTabs , file]))
  dispatch(setClickedFile({filename:file.name , fileContent:file.content , activeTabId:file.Id}))
}
    return (
    <div className="ml-4">
       <div className="flex items-center cursor-pointer"  onClick={handleOpen}>
        <span>

        {
          fileTree.isFolder && (  isOpen ? <BottomArrowIcon /> : <RightArrowIcon />
          )
        }
        </span>
      <span className='mr-2'>
      <FileIcon filename={fileTree.name} isFolder={fileTree.isFolder} isOpen={isOpen}/>
      </span>
      <div onClick={()=>handleClick(fileTree)} >
      {fileTree.name}
      </div>
       </div>

      {isOpen && fileTree.children?.map((file ,idx)=>{
        return <RecursiveComponent key={idx} fileTree={file}/>
      })}
          </div>
    )
}
