/*
 * @Author: 娄松 
 * @Date: 2025-01-07 14:55:14
 * @LastEditors: 娄松 
 * @LastEditTime: 2025-01-07 15:02:01
 * @FilePath: \the-long-dark-map\app\views\coastal-highway\coastal-highway.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { BigMap } from '~/components/BigMap/BigMap'
import CoastalHighwayMapPng from './image/map/coastal-highway.png'
import { Entrance } from '~/components/Entrance/Entrance'

export default function CoastalHighway() {
    return (
        <BigMap image={CoastalHighwayMapPng}>
            <Entrance position={{x: '10%',y: '90%'}} path="/mystery-lake" />
        </BigMap>
    )
}