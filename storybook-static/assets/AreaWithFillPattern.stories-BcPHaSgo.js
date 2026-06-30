import{R as t}from"./iframe-CysaVPuT.js";import{R as p}from"./zIndexSlice-CBspyTeT.js";import{C as m}from"./ComposedChart-9ef0ZM8L.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BiGNKIDy.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BijqxQd6.js";import"./index-BoQpP3ng.js";import"./index-C8sovufb.js";import"./get-Dv3cK-ON.js";import"./resolveDefaultProps-CB9Bmy8P.js";import"./isWellBehavedNumber-CHReb6Hq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CXNQztOV.js";import"./index-ClhA1x-k.js";import"./index-CIm0M9H5.js";import"./renderedTicksSlice-L6Kj9uMm.js";import"./axisSelectors-CybQsixZ.js";import"./d3-scale-BWFUWIRC.js";import"./CartesianChart-Dlco-df9.js";import"./chartDataContext-BsGd8oTW.js";import"./CategoricalChart-B4xuyyeZ.js";import"./Layer-DQgbcZ6W.js";import"./AnimatedItems-HWCD5qdq.js";import"./Label-B_m_1QPA.js";import"./Text-DqT5jcn2.js";import"./DOMUtils-z1JZhy6H.js";import"./ZIndexLayer-C6PjgPWA.js";import"./useAnimationId-XV22nS6k.js";import"./ActivePoints-CQLYJKIJ.js";import"./Dot-dmuSDw2U.js";import"./types-DWuPiLas.js";import"./RegisterGraphicalItemId-BIn5Riid.js";import"./GraphicalItemClipPath-DMny06t1.js";import"./SetGraphicalItem-ihbnCYD8.js";import"./getRadiusAndStrokeWidthFromDot-DDSmqaVx.js";import"./ActiveShapeUtils-HeGPuRiV.js";import"./Curve-DVkbv2J8.js";import"./step-vxR68qu5.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-C4W5Yao6.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const $=["FillPattern"];export{e as FillPattern,$ as __namedExportsOrder,Z as default};
