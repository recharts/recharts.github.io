import{e as t}from"./iframe-BRu_qZg1.js";import{R as p}from"./arrayEqualityCheck-BgwbYKtC.js";import{C as m}from"./ComposedChart-BejM8Hgg.js";import{A as r}from"./Area-Gk-NLr9b.js";import{R as s}from"./RechartsHookInspector-CJy-wMRv.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-ClDGSYA8.js";import"./immer-CiIZXnz-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B9gb15RL.js";import"./index-DYVbWT0W.js";import"./hooks-cMPGG-ti.js";import"./axisSelectors-WgiG_2zA.js";import"./d3-scale-DgD4kZyM.js";import"./zIndexSlice-CjcwtRul.js";import"./renderedTicksSlice-XQiDw47v.js";import"./CartesianChart-DNVXg1S9.js";import"./chartDataContext-BYCMtEPQ.js";import"./CategoricalChart-CRbty2Pg.js";import"./Curve-CSGMMXpz.js";import"./types-CV4LMBiy.js";import"./step-XF9-athh.js";import"./Layer-BK1KTr5e.js";import"./ReactUtils-gnwCD4Om.js";import"./Label-PVHJRfQa.js";import"./Text-CZ6mhO2l.js";import"./DOMUtils-Np4d91u5.js";import"./ZIndexLayer-C8D4smXi.js";import"./ActivePoints-lX6lnj3q.js";import"./Dot-DbWS2m0E.js";import"./RegisterGraphicalItemId-KDJ0wyU8.js";import"./GraphicalItemClipPath-rMExk2wU.js";import"./SetGraphicalItem-DZJju-u_.js";import"./useAnimationId-D8a-5J-X.js";import"./getRadiusAndStrokeWidthFromDot-CXiKui9m.js";import"./graphicalItemSelectors-C1DBQX2m.js";import"./index-CUWwfEzD.js";import"./ChartSizeDimensions-DNlI3sC4.js";import"./OffsetShower-Cm8zLz0R.js";import"./PlotAreaShower-Bj1zpgLw.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <defs>
            <pattern id="left" width="12" height="4" patternUnits="userSpaceOnUse">
              <rect width="4" height="4" fill="#8884d8" />
            </pattern>
            <pattern id="right" width="8" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="4" height="4" fill="#82ca9d" />
            </pattern>
          </defs>
          <Area type="monotone" dataKey="x" stroke="#8884d8" fillOpacity={1} fill="url(#left)" />
          <Area type="monotone" dataKey="y" stroke="#82ca9d" fillOpacity={1} fill="url(#right)" />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const et=["FillPattern"];export{e as FillPattern,et as __namedExportsOrder,tt as default};
