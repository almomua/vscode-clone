import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";

interface FileTreeState {
    openedTabs:IFile[],
    clickedFile:ClickedFile
}
interface ClickedFile {
    activeTabId:string,
    filename:string,
    fileContent:string |undefined
}


const initialState : FileTreeState = {
    openedTabs: [],
    clickedFile:{
        activeTabId:"",
        filename:"",
        fileContent:"",
    },
}

const fileTreeSlice = createSlice({
    name:"fileTree",
    initialState,
    reducers:{
        setOpenFiles : (state , action : PayloadAction<IFile[]>) =>{
                action.payload.forEach(file=>{
                    if(state.openedTabs.length === 0 && !file.isFolder){
                        state.openedTabs.push(file)
                    }
                    if(!state.openedTabs.some(openedFile => openedFile.Id === file.Id) && !file.isFolder){
                        state.openedTabs.push(file)
                    }
                })
            }, 
            closeFile : (state , action : PayloadAction<string>) =>{
                state.openedTabs = state.openedTabs.filter(file => file.Id !== action.payload)
            },
            setClickedFile : (state , action : PayloadAction<ClickedFile>) =>{
            state.clickedFile.fileContent = action.payload.fileContent
            state.clickedFile.filename = action.payload.filename
            state.clickedFile.activeTabId = action.payload.activeTabId
                    },
          
        }

    }
)

export const {setOpenFiles , closeFile , setClickedFile } = fileTreeSlice.actions;
export default fileTreeSlice.reducer;