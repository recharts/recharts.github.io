import{R as t}from"./iframe-pl42v7Eu.js";import{R as p}from"./zIndexSlice-D6Ury5DQ.js";import{C as m}from"./ComposedChart-Bj059aV9.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-OttnllGm.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-C_PxOxT8.js";import"./index-Df70QOpj.js";import"./index-ntLeohj2.js";import"./get-Ci1Zslo5.js";import"./resolveDefaultProps-BgT3I9Pa.js";import"./isWellBehavedNumber-B6cHM4DS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ByLHuOcy.js";import"./index-BTDreE9O.js";import"./index-Cmb4UkZ_.js";import"./renderedTicksSlice-nJaW__V7.js";import"./axisSelectors-49otWNoQ.js";import"./d3-scale-EDGtIYyd.js";import"./CartesianChart-CkSibwuY.js";import"./chartDataContext-BUPOQjbb.js";import"./CategoricalChart-BDx0yEeS.js";import"./Layer-DIETCOs-.js";import"./AnimatedItems-wt0_sn45.js";import"./Label-jH0IUTIN.js";import"./Text-DHqN6Wmv.js";import"./DOMUtils-C0435NEl.js";import"./ZIndexLayer-DHOvoudh.js";import"./useAnimationId-bxLMfI7c.js";import"./ActivePoints-sxoM3gYg.js";import"./Dot-BMK0KkKw.js";import"./types-Cax0x9Pi.js";import"./RegisterGraphicalItemId-Rj2Lqe9e.js";import"./GraphicalItemClipPath-CviR7UKP.js";import"./SetGraphicalItem-BX03rWwK.js";import"./getRadiusAndStrokeWidthFromDot-5IlnILBr.js";import"./ActiveShapeUtils-DL8AZGaA.js";import"./Curve-V8Cs5yUz.js";import"./step-BQEtcvlA.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-yDFIsm5P.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
