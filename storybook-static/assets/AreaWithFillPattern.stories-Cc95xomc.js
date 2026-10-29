import{R as t}from"./iframe-jkWlGRao.js";import{R as p}from"./zIndexSlice-BJ_azL3V.js";import{C as m}from"./ComposedChart-B8s0ij_q.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-Dy0juIgx.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BJCkAT-c.js";import"./throttle-BclcIM3t.js";import"./index-CafydseE.js";import"./index-l6IDK4X2.js";import"./RechartsWrapper-CYIxj0Xh.js";import"./axisSelectors-B57c623a.js";import"./polarAxisSelectors-vXDHLkfy.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B7YXqmgC.js";import"./index-CT6JOO-H.js";import"./index-lkQeFUlC.js";import"./renderedTicksSlice-MrcmxqRq.js";import"./index-BIDLCapd.js";import"./CartesianChart-DNa8wuZh.js";import"./ZIndexPortal-PvuD5_Md.js";import"./CategoricalChart-BIz6y0X4.js";import"./Layer-DGNDN2U_.js";import"./LabelList-BN7i6-QW.js";import"./Label-C3QhHNfQ.js";import"./Text-CsCVaUmy.js";import"./pageBackground-B7N8_bCe.js";import"./ZIndexLayer-Cz3uOrDa.js";import"./ActivePoints-DFqnjh3O.js";import"./Dot-xzrAS9lw.js";import"./types-BwHsgyny.js";import"./activeStyles-EBU2roz0.js";import"./useAnimationId-CAUjhf76.js";import"./dataEntryStyles-ZVub37-6.js";import"./Symbols-wGnZNd4F.js";import"./symbol-BOEnk89t.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-BoktD6a2.js";import"./getRadiusAndStrokeWidthFromDot-Shmwq5gJ.js";import"./ActiveShapeUtils-KQXKVatm.js";import"./Curve-Ch6LAljQ.js";import"./step-CscB7pF3.js";import"./useEffectiveDataKey-CJQQkbyt.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,rt as __namedExportsOrder,et as default};
