import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";

interface FileTreeState {
    openedTabs:IFile[],
    clickedFile:{
        filename:string,
        fileContent:string
    }
}


const initialState : FileTreeState = {
    openedTabs: [],
    clickedFile:{
        filename:"",
        fileContent:"",
    }
}

const fileTreeSlice = createSlice({
    name:"fileTree",
    initialState,
    reducers:{
        setOpenFiles : (state , action : PayloadAction<IFile[]>) =>{
            if(state.openedTabs.length === 0){
                state.openedTabs = action.payload
            }
            else{
                action.payload.forEach(file=>{
                    if(!state.openedTabs.some(openedFile => openedFile.name === file.name)){
                        state.openedTabs.push(file)
                    }
                })
            }

        }

    }
})

export const {setOpenFiles} = fileTreeSlice.actions;
export default fileTreeSlice.reducer;