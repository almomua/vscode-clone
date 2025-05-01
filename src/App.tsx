import { useSelector } from "react-redux"
import OpenedFileBar from "./components/OpenedFileBar"
import { RecursiveComponent } from "./components/RecursiveComponent"
import { fileTree } from "./data/fileTree"
import { RootState } from "./store"
import SyntaxHighlight from "./components/SyntaxHighlight"
import ResizablePanel from "./components/ResizablePanel"
import IconImg from "./components/IconImg"


const App = () => {
  const {clickedFile:{fileContent} , openedTabs} = useSelector((state:RootState) => state.tree)
  return (
  <div className="flex">
    <ResizablePanel leftPanel = {
        <div className="h-lvh pr-4">
        <RecursiveComponent fileTree={fileTree} />
        </div>
    } rightPanel ={
      <div className="w-full">
        { openedTabs.length > 0 ?(
          <>
          <OpenedFileBar />
          
          {
            fileContent && 
            <SyntaxHighlight content={fileContent} />
          }
          </>
        ):(
          <div className="flex items-center justify-center">
            <IconImg src="./icons/vscode.svg" alt="vscode Icon" className="h-screen w-2xl" />
          </div>
        )
        }
      </div>
    }>

    </ResizablePanel>
  
   
  </div>
  )
}

export default App
