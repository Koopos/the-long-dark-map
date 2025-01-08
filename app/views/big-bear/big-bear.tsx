import { ConnectName } from "~/components/ConnectName/ConnectName";
import { MapName } from "~/components/MapName/MapName";

/*
 * @Author: 娄松 
 * @Date: 2025-01-07 10:33:18
 * @LastEditors: 娄松 
 * @LastEditTime: 2025-01-08 11:26:52
 * @FilePath: \the-long-dark-map\app\full-view\full-view.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default function BigBear() {
    return (
        <>
            <MapName bg="orange" name="Mystery Lake" path="/mystery-lake" />
            <ConnectName bg="black" name="deep" path="/deep" />
            <MapName bg="green" name="Coastal Highway" path="/coastal-highway" />
            <MapName bg="green" name="Pleasant Valley" path="/pleasant-valley" />
            <MapName bg="green" name="Timber Wolf" path="/timber-wolf" />
            <MapName bg="green" name="Ash Canyon" path="/ash-canyon" />
        </>

    )   
}