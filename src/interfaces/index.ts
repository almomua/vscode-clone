export interface IFile{
    Id: string;
    name : string;
    isFolder : boolean;
    children ?: IFile[];
    content?: string;
}