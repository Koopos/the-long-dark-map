import { useState } from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

import './index.css'

interface MarkProps {
    images: Array<string>
    position: {x: string, y: string}
}


export function Mark(props: MarkProps) {

    const [isOpen, setIsOpen] = useState(false)

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <>
         <div className="absolute w-[20px] h-[20px] rounded-[20px] mark" onClick={toggleDrawer} style={{top: props.position.y, left: props.position.x,border: '4px solid blue'}}></div>
         <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction='right'
            size="120px"
        >
            <div className="flex flex-col justify-between items-center py-[20px]">
                {props.images.map(v=>(<img src={v} className="w-[100px] h-[100px]" />))}
            </div>
        </Drawer>
        </>
    )
}