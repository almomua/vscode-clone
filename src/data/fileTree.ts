import { IFile } from "../interfaces";
import {v4 as uuid} from 'uuid';
export const fileTree: IFile= 
  {
    Id : uuid(),
    name: "vscode Clone",
    isFolder: true,
    children: [
      {
        Id : uuid(),
        name: "node_modules",
        isFolder: true,
        children: [
          {
            Id : uuid(),
            name: "vite",
            isFolder: true,
            children: [
              { Id: uuid() , name: "react.js", isFolder: false  , content: 
`import react from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
const root = createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
) `
 },]
          },
        ],
      },
      {
        Id : uuid(),
        name: "public",
        isFolder: true,
        children: [
          { Id : uuid(), name: "index.html", isFolder: false , content:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>
</html>` },
        ]
      },
      {
        Id : uuid(),
        name : 'index.txt',
        isFolder: false,
        content: "This is a text file",
      }
    ],
  }
;
