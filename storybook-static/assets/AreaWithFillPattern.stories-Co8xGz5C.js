import{R as t}from"./iframe-waGCAeMO.js";import{R as p}from"./zIndexSlice-Bs9eWJkZ.js";import{C as m}from"./ComposedChart-C-dH4vpB.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-h9xEr8rn.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Dpi9F_1z.js";import"./throttle-CoYevXVP.js";import"./index-CcRKR-Wz.js";import"./index-DUwJtu9Y.js";import"./RechartsWrapper-DrhKOT3w.js";import"./axisSelectors-BpNK-g3S.js";import"./polarAxisSelectors-DtiraoLM.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-FqfjaXEu.js";import"./index-kB8F1Br5.js";import"./index-3B7lt2Ve.js";import"./renderedTicksSlice-ClDU73ld.js";import"./index-11RgyOoZ.js";import"./fillDefinitions-DkO2tIQI.js";import"./CartesianChart-7iyfeH7l.js";import"./chartDataContext-BbqISvQG.js";import"./CategoricalChart-D2Hb9hNl.js";import"./getRadiusAndStrokeWidthFromDot-D4lP154T.js";import"./Layer-dmB1mICY.js";import"./dataEntryStyles-DwD17VpV.js";import"./Label-Chhp1CRe.js";import"./Text-C-WU5iwS.js";import"./ZIndexLayer-B2QwwaI-.js";import"./ActivePoints-SMrH9LpN.js";import"./Dot-KwlPPybH.js";import"./types-DrCFt1uv.js";import"./activeStyles-Db3JHrE0.js";import"./useAnimationId-DGRCx4ie.js";import"./Symbols-sTKgXRyZ.js";import"./symbol-CRbcfw6A.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-DY5DQdLd.js";import"./ActiveShapeUtils-BuFZhuT8.js";import"./Curve-Cb7BkQkF.js";import"./step-CvjzszA2.js";import"./useEffectiveDataKey-DONRPZmA.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,et as __namedExportsOrder,tt as default};
