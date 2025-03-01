import { IFile } from "../interfaces";

export const fileTree : IFile[] = [
    {

        name : 'vscode Clone' , 
        isFolder : true,
        children : [
            {
                name : 'node_modules',
                isFolder : true,
            },
            {
                name : 'index.html',
                isFolder : false,
            }
        ]
    }
]