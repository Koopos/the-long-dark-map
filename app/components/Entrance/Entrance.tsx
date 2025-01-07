/*
 * @Author: 娄松 
 * @Date: 2025-01-07 13:53:04
 * @LastEditors: 娄松 
 * @LastEditTime: 2025-01-07 16:19:10
 * @FilePath: \the-long-dark\the-long-dark-map\app\components\Entrance\Entrance.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useNavigate } from "react-router";

interface EntranceProps {
    position: {x: string, y: string}
    path: string
}

import './index.css'

export function Entrance(props: EntranceProps) {
    const navigate = useNavigate()

    const jumpToPath = () => {
        navigate(props.path)
    }

    return (
        <div className="absolute w-[60px] h-[60px] bg-[red] dot rounded-[20px]" style={{top: props.position.y, left: props.position.x}} onClick={jumpToPath}></div>
    )
}