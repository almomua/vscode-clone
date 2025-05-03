import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {Prism, SyntaxHighlighterProps} from 'react-syntax-highlighter';
const SyntaxHighlighter = (Prism as any) as React.FC<SyntaxHighlighterProps>;
type Props = {
    content: string
}

const SyntaxHighlight = ({content}: Props) => {
  return (
    <SyntaxHighlighter language="javascript" style={atomDark} customStyle={{
        borderRadius:"10px" ,
        backgroundColor:'transparent',
        width:"100%",
        maxHeight:"100vh",
        overflow:"auto",
        fontSize:"1.5 rem",}}
        showLineNumbers={true} lineNumberStyle={{color:"#7a7a7a"}}>
      {content}
    </SyntaxHighlighter>
  )
}
export default SyntaxHighlight