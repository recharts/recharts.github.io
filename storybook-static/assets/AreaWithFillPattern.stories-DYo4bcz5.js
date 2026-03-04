import{e as t}from"./iframe-BWK9ES1u.js";import{R as p}from"./arrayEqualityCheck-C3hQ_dNx.js";import{C as m}from"./ComposedChart-Dkw93O4i.js";import{A as r}from"./Area-kNkGHTKM.js";import{R as s}from"./RechartsHookInspector-PHAVE2qS.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-UiVGC4WG.js";import"./immer-H-Wjh2uu.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BOGHGYF3.js";import"./index-CFdRl6ey.js";import"./hooks-7NwdUe8t.js";import"./axisSelectors-_XyMcvnR.js";import"./d3-scale-BLK5VF-M.js";import"./zIndexSlice-D32FYtu3.js";import"./renderedTicksSlice-DeqeruMc.js";import"./CartesianChart-CW6-YABt.js";import"./chartDataContext-cUJ3hXxI.js";import"./CategoricalChart-BCO7gYoN.js";import"./Curve-W2IHKA5j.js";import"./types-BDXHojhp.js";import"./step-DmOlkDZ0.js";import"./Layer-FfNANwFp.js";import"./ReactUtils-CHwdflEM.js";import"./Label-CkGBtdJT.js";import"./Text-D_AFYo3_.js";import"./DOMUtils-BiksdwSe.js";import"./ZIndexLayer-bCgYEHqC.js";import"./ActivePoints-BYRAlD7T.js";import"./Dot-WO8tOduR.js";import"./RegisterGraphicalItemId-Dl_9XwyC.js";import"./GraphicalItemClipPath-Cpkp19yU.js";import"./SetGraphicalItem-sg4XQgsj.js";import"./useAnimationId-CpY_S6-T.js";import"./getRadiusAndStrokeWidthFromDot-DGvf84G4.js";import"./graphicalItemSelectors-C-LZ4Oc6.js";import"./index-CIhAteaz.js";import"./ChartSizeDimensions-6JZOYWf1.js";import"./OffsetShower-D5r1e2Xk.js";import"./PlotAreaShower-DQz1z3XL.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
