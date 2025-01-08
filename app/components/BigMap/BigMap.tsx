/*
 * @Author: 娄松 
 * @Date: 2025-01-07 10:38:39
 * @LastEditors: 娄松 
 * @LastEditTime: 2025-01-08 11:31:09
 * @FilePath: \the-long-dark-map\app\components\BigMap\BigMap.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

interface BigMapProps {
    image: string
    children?: any
}

export function BigMap(props: BigMapProps) {

    const printCursorPosition = (e: any) => {
        console.log(`x: ${e.pageX}, y:${e.pageY}`)
    }

    return (
        <div onClick={printCursorPosition} className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden" style={{backgroundImage:`url(${props.image})`, backgroundSize: 'cover', backgroundPosition: 'center center'}}>
            {props.children}
        </div>
    )
}