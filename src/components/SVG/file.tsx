import IconImg from "../IconImg";
import { extensionIconPaths } from "../../constants";
interface FileIconProps {
  filename: string;
  isFolder: boolean;
  isOpen: boolean;
}


function FileIcon({filename , isFolder , isOpen}: FileIconProps) {
  const extension = filename.split('.').pop();
  if (extension && Object.prototype.hasOwnProperty.call(extensionIconPaths, extension)) {
    const iconPath = isFolder ? isOpen ? `${extensionIconPaths[extension]}-open.svg` : `${extensionIconPaths[extension]}.svg` : `${extensionIconPaths[extension]}.svg`;
    return <IconImg src={iconPath} alt={`${extension} icon`} />
  }


  


//   if (!isFolder) {
//   switch(extension){
//     case 'js':
//       return <IconImg src="/icons/javascript.svg" alt="javascript icon" />
//     case 'css':
//       return <IconImg src="/icons/css.svg" alt="css icon" />
//     case 'html':
//       return <IconImg src="/icons/html.svg" alt="html icon" />
//     case 'json':
//       return <IconImg src="/icons/json.svg" alt="json icon" />
//     default:
//       return <IconImg src="/icons/file.svg" alt="file icon" />
//   }
// } else if (isFolder && isOpen) {
//   switch(filename){
//     case 'components':
//       return <IconImg src="/icons/folder-components-open.svg" alt="components open icon" />
//       case 'pages':
//       return <IconImg src="/icons/folder-pages-open.svg" alt="pages open icon" />
//     case 'src':
//       return <IconImg src="/icons/folder-src-open.svg" alt="src open icon" />
//     case 'public':
//       return <IconImg src="/icons/folder-public-open.svg" alt="public open icon" />
//     case 'node_modules':
//       return <IconImg src="/icons/folder-node-open.svg" alt="node icon" />
//     case '.vite':
//       return <IconImg src="/icons/vite.svg" alt="vite icon" />
//     default:
//       return <IconImg src="/icons/folder-default-open.svg" alt="folder open icon" />
//   }
// } else {
//   switch(filename){
//     case 'components':
//       return <IconImg src="/icons/folder-components.svg" alt="components icon" />
//       case 'pages':
//       return <IconImg src="/icons/folder-pages.svg" alt="pages icon" />
//     case 'src':
//       return <IconImg src="/icons/folder-src.svg" alt="src icon" />
//     case 'public':
//       return <IconImg src="/icons/folder-public.svg" alt="public icon" />
//     case 'node_modules':
//       return <IconImg src="/icons/folder-node.svg" alt="node icon" />
//     case '.vite':
//       return <IconImg src="/icons/vite.svg" alt="vite icon" />
//     default:
//       return <IconImg src="/icons/folder-default.svg" alt="folder icon" />
//   }
  
// }

if (isFolder && isOpen) return <IconImg src="/icons/folder-default-open.svg" alt="folder open icon" />
if (isFolder && !isOpen) return <IconImg src="/icons/folder-default.svg" alt="folder open icon" />
return   <svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" fill="#7d8590" width={20} height={20}>
<path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path>
</svg>

}
  export default FileIcon;
  