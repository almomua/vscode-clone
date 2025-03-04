import { RecursiveComponent } from "./components/RecursiveComponent"
import { fileTree } from "./data/fileTree"


const App = () => {
  return (
  <div className="m-2">
    <RecursiveComponent fileTree={fileTree} />
  </div>
  )
}

export default App
