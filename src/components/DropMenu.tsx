import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import {closeAllfiles , setOpenedTabs} from "../store/fileTreeSlice"
import { RootState } from "../store"

type Props = {
    positions:{
        x: number,
        y: number
    }
    show: boolean
    setShowMenu: (show:boolean) => void
}

const DropMenu = ({positions , show ,setShowMenu}: Props) => {
  const MenuRef = useRef<HTMLDivElement>(null)
const dispatch = useDispatch()
const {openedTabs , tabIdToRemove} = useSelector((state: RootState) => state.tree)
const HandleCloseFile = () => {
  const filterdTabs = openedTabs.filter(file=> file.Id !== tabIdToRemove)  
  dispatch(setOpenedTabs(filterdTabs))
  setShowMenu(false)

}
  const HandleCloseAll = () => {
    setShowMenu(false)
    dispatch(closeAllfiles())
  }
  useEffect(() => {
    const HandleClickOutside = (e: MouseEvent) => {
      if (MenuRef.current && !MenuRef.current.contains(e.target as Node)) {
        setShowMenu(false)
      }
    }
    window.addEventListener("click", HandleClickOutside)
    setShowMenu(false)
  
    return () => {
      window.removeEventListener("click", HandleClickOutside)
    }
  }, [setShowMenu])
  
  return (
    show &&
    <div ref={MenuRef}>
    <ul className="absolute bg-white border border-gray-300 rounded shadow-lg text-black p-0.5 cursor-pointer w-fit" style={{top: positions.y, left: positions.x}}>
        <li className="hover:bg-gray-300 rounded-md p-1" onClick={HandleCloseFile}>close</li>
        <li className="hover:bg-gray-300 rounded-md p-1" onClick={HandleCloseAll}>close all</li>
    </ul>
    </div>
  )
}

export default DropMenu