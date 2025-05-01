import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import FileIcon from "./SVG/file"
import CloseIcon from "./SVG/CloseIcon"
import { closeFile, setClickedFile, setOpenFiles } from "../store/fileTreeSlice"
import { IFile } from "../interfaces"

const OpenedFileBar = () => {
  const {openedTabs , clickedFile:{activeTabId}} = useSelector((state: RootState) => state.tree)
  const dispatch = useDispatch()
  
  if(openedTabs.length === 0) return null

  const handleClose = ( e:React.MouseEvent<HTMLSpanElement, MouseEvent> ,Id:string) => {
    e.stopPropagation()
    dispatch(closeFile(Id))
    const filteredTabs = openedTabs.filter(file => file.Id !== Id)
    const newActiveTab= filteredTabs[filteredTabs.length - 1]
    // if there is no new active tab, set the clicked file to empty
    // if there is a new active tab, set the clicked file to the new active tab
    // and set the opened tabs to the new active tab
    // and set the clicked file to the new active tab
    
    if(newActiveTab) {
      dispatch(setClickedFile({filename:newActiveTab.name , fileContent:newActiveTab.content , activeTabId:newActiveTab.Id}))
      console.log("newActiveTab", newActiveTab);
      
    }
    else {
      dispatch(setOpenFiles([]))
      dispatch(setClickedFile({filename:"" , fileContent:undefined , activeTabId:""}))
    }
  }
  const handleClickedFile = (file:IFile) => {
    dispatch(setClickedFile({filename:file.name , fileContent:file.content , activeTabId:file.Id}))
  }
  return (
    <ul className="decoration-none flex flex-row  gap-2 h-fit items-center border-b-2 border-white overflow-auto">
      {
        openedTabs.map((file)=>{
          return (
          <li className={`flex gap-2 p-2 border-t ${file.Id === activeTabId ? "2px solid border-[#cf6ccf]" : "2px solid border-transparent"}`} key={file.Id} onClick={()=>handleClickedFile(file)}>
            <FileIcon filename={file.name}/>
            <span className="cursor-pointer">

            {file.name}
            </span>
            <span className="cursor-pointer hover:bg-gray-600 rounded-sm items-center h-fit p-1" onClick={(e)=>handleClose( e ,file.Id)} >
            <CloseIcon  />
            </span>
            </li>
        )
        })

      }
    </ul>
  )
}

export default OpenedFileBar
