/*
 * @Author: 娄松 
 * @Date: 2025-01-07 09:59:21
 * @LastEditors: 娄松 
 * @LastEditTime: 2025-01-07 14:59:40
 * @FilePath: \the-long-dark-map\app\routes.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    route("/","views/big-bear/big-bear.tsx"),
    route('/mystery-lake', "views/mystery-lake/mystery-lake.tsx"),
    route('/coastal-highway', "views/coastal-highway/coastal-highway.tsx"),
] satisfies RouteConfig;
