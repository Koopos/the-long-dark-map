/*
 * @Author: 娄松 
 * @Date: 2025-01-07 10:36:55
 * @LastEditors: 娄松 
 * @LastEditTime: 2025-01-07 15:08:19
 * @FilePath: \the-long-dark-map\app\components\ConnectName\ConnectName.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useNavigate } from "react-router";

export function ConnectName(props: {name: string, path: string, bg: string}) {
    const navigate = useNavigate()

    const jumpToPath = () => {
        navigate(props.path)
    }
    return <div onClick={jumpToPath} className="w-[100px] rounded-[16px] h-[60px] flex justify-center items-center text-[#fff]" style={{background: props.bg}}>
        {props.name}
    </div>
}