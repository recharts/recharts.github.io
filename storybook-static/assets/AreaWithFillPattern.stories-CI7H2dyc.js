import{e as t}from"./iframe-VKSiBROl.js";import{R as p}from"./arrayEqualityCheck-BB0HA1wg.js";import{C as m}from"./ComposedChart-DRm_ML7n.js";import{c as s}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BhWDMOqH.js";import{R as l}from"./RechartsHookInspector-Bk4R2bPq.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-NGq3vz57.js";import"./immer-CPTHWkkH.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BaY8BgmV.js";import"./index-Z1DhqR18.js";import"./hooks-ZL9qLpLY.js";import"./axisSelectors-C7KTOZ5c.js";import"./d3-scale-BjDGrkpd.js";import"./zIndexSlice-DsFodTYX.js";import"./renderedTicksSlice-C68_OdSZ.js";import"./CartesianChart-o8YH5MQb.js";import"./chartDataContext-PCAfxVIZ.js";import"./CategoricalChart-ChVNCGBd.js";import"./Curve-yzuL5_Sr.js";import"./types-DY717biQ.js";import"./step-CaHu3Oa5.js";import"./Layer-B5Q3HgyD.js";import"./ReactUtils-DMEWBI26.js";import"./Label-CFO9NE9M.js";import"./Text-DIF9PeK1.js";import"./DOMUtils-BrJ5g_oy.js";import"./ZIndexLayer-VGyT3hqP.js";import"./ActivePoints-RNYfiJHn.js";import"./Dot-CcGx7WmK.js";import"./RegisterGraphicalItemId-0d646qS_.js";import"./GraphicalItemClipPath-m88eTwMP.js";import"./SetGraphicalItem-B6CVGLUm.js";import"./useAnimationId-CxCW2e1W.js";import"./getRadiusAndStrokeWidthFromDot-BF1XYufC.js";import"./graphicalItemSelectors-BDTb2oUm.js";import"./index-FZYKqp9j.js";import"./ChartSizeDimensions-Ckuhl4O0.js";import"./OffsetShower-DRsWIFHd.js";import"./PlotAreaShower-DlV2zhuR.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:s},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(l,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
