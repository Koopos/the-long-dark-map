/*
 * @Author: 娄松 
 * @Date: 2025-01-08 10:52:23
 * @LastEditors: 娄松 
 * @LastEditTime: 2025-01-08 10:55:24
 * @FilePath: \the-long-dark-map\app\views\pleasant-valley\pleasant-valley.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { BigMap } from "~/components/BigMap/BigMap";
import AshCanyonMapPng from './image/map/ash-canyon-map.png'

export default function MysteryLake() {
    return (
        <BigMap image={AshCanyonMapPng}>
            <div />
        </BigMap>
    )
}