/*
 * @Author: 娄松 
 * @Date: 2025-01-07 11:06:13
 * @LastEditors: 娄松 
 * @LastEditTime: 2025-01-07 15:00:45
 * @FilePath: \the-long-dark\the-long-dark-map\app\mystery-lake\myster-lake.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { BigMap } from "~/components/BigMap/BigMap";
import { Mark } from "~/components/Mark/Mark";
import MysteryMapPng from './image/map/mystery-lake-map.png'

import officeMark from './image/mark/office.png'
import { Entrance } from "~/components/Entrance/Entrance";

export default function MysteryLake() {
    return (
        <BigMap image={MysteryMapPng}>
            <Mark images={[officeMark]} position={{x: '20%', y:'30%'}} />
            <Entrance position={{x: '10%',y: '90%'}} path="/coastal-highway" />
        </BigMap>
    )
}