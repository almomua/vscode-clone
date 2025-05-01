import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

type Props = {
    content: string
}

const SyntaxHighlight = ({content}: Props) => {
  return (
    <SyntaxHighlighter language="javascript" style={atomOneDark} customStyle={{
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