import { ReactNode } from 'react';
import {Panel , PanelGroup , PanelResizeHandle} from 'react-resizable-panels';

type Props = {
    defaultLayout?: number[] | undefined
    leftPanel:ReactNode
    rightPanel:ReactNode
}

const ResizablePanel = ({ defaultLayout=[10 , 70],rightPanel , leftPanel}: Props) => {
    const onLayout = (sizes: number[]) => {
        document.cookie= `react-resizable-panels-layout=${JSON.stringify(sizes)}`
    }
  return (
      <PanelGroup direction="horizontal" onLayout={onLayout} autoSaveId="condition">
   <Panel collapsible={true} defaultSize={defaultLayout[0] } >
    {leftPanel}
   </Panel>
        <PanelResizeHandle className='border-r border-[#ffffff1f]'/>
   <Panel defaultSize={defaultLayout[1]} >
{rightPanel}  
 </Panel>
 </PanelGroup>
  )
}

export default ResizablePanel