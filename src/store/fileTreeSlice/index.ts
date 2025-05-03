import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";

interface FileTreeState {
    openedTabs: IFile[],
    clickedFile: ClickedFile,
    tabIdToRemove: string | null
}
interface ClickedFile {
    activeTabId: string,
    filename: string,
    fileContent: string | undefined
}


const initialState: FileTreeState = {
    openedTabs: [],
    clickedFile: {
        activeTabId: "",
        filename: "",
        fileContent: "",
    },
    tabIdToRemove: null
}

const fileTreeSlice = createSlice({
    name: "fileTree",
    initialState,
    reducers: {
        setOpenFiles: (state, action: PayloadAction<IFile[]>) => {
            action.payload.forEach(file => {
                if (state.openedTabs.length === 0 && !file.isFolder) {
                    state.openedTabs.push(file)
                }
                if (!state.openedTabs.some(openedFile => openedFile.Id === file.Id) && !file.isFolder) {
                    state.openedTabs.push(file)
                }
            })
        },
        closeFile: (state, action: PayloadAction<string>) => {
            state.openedTabs = state.openedTabs.filter(file => file.Id !== action.payload)
        },
        setClickedFile: (state, action: PayloadAction<ClickedFile>) => {
            state.clickedFile.fileContent = action.payload.fileContent
            state.clickedFile.filename = action.payload.filename
            state.clickedFile.activeTabId = action.payload.activeTabId
        },
        closeAllfiles: (state) => {
            state.openedTabs = []
            state.clickedFile.fileContent = undefined
            state.clickedFile.filename = ""
            state.clickedFile.activeTabId = ""
        },
        setTabIdToRemove: (state, action: PayloadAction<string | null>) => {
            state.tabIdToRemove = action.payload
        },
        setOpenedTabs: (state, action: PayloadAction<IFile[]>) => {
            state.openedTabs = action.payload
        }

    }

}
)

export const { setOpenFiles, closeFile, setClickedFile, closeAllfiles , setTabIdToRemove , setOpenedTabs } = fileTreeSlice.actions;
export default fileTreeSlice.reducer;