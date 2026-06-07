import{R as t}from"./iframe-CIqcR0nr.js";import{R as p}from"./zIndexSlice-BaZcNNNO.js";import{C as m}from"./ComposedChart-bqMlW8-b.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BYWQt4Ke.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DOlCD6_E.js";import"./index-CI5kewFp.js";import"./index-D3_7IQAj.js";import"./get-CuhoYgBd.js";import"./resolveDefaultProps-X_RPaIii.js";import"./isWellBehavedNumber-CN_oQGvc.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CO7Bj1Ew.js";import"./index-BRQXzpqS.js";import"./index-iWp3ygHn.js";import"./renderedTicksSlice-uyZ8N1qc.js";import"./axisSelectors-Dp0MorEj.js";import"./d3-scale-BVoLe-e3.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BiFR7vHR.js";import"./chartDataContext-BkIJbLAm.js";import"./CategoricalChart-OQdWBIBS.js";import"./Layer-Cz--vJfn.js";import"./AnimatedItems-5cW9jO0l.js";import"./Label-CuY-JOss.js";import"./Text-CimnMCMD.js";import"./DOMUtils-DMPXj1nB.js";import"./ZIndexLayer-B9KPNn2Z.js";import"./useAnimationId-BJaGTs_s.js";import"./ActivePoints-B5L26l-l.js";import"./Dot-C6Y9kE6a.js";import"./types-3DMlx_O9.js";import"./RegisterGraphicalItemId-BxGDByrp.js";import"./GraphicalItemClipPath-CMCMKENx.js";import"./SetGraphicalItem-C8JcvXzc.js";import"./getRadiusAndStrokeWidthFromDot-D2ZfklZg.js";import"./ActiveShapeUtils-BLEsVfwW.js";import"./Curve-DrcpD24k.js";import"./step-DBJepXtz.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-_qDBExF4.js";const $={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const tt=["FillPattern"];export{e as FillPattern,tt as __namedExportsOrder,$ as default};
