import{R as t}from"./iframe-_8NIVtea.js";import{R as s}from"./zIndexSlice-DHi0zTqt.js";import{C as l}from"./ComposedChart-BQ1MbbEq.js";import{p as m}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-QbwUo4NR.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DtWKh-al.js";import"./index-CMd9L2k1.js";import"./index-DP0Hg4Uq.js";import"./get-BPH4xIrS.js";import"./resolveDefaultProps-DWak00ij.js";import"./isWellBehavedNumber-C_LYkTy5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Btm1Myi_.js";import"./index-C4r4CwZ3.js";import"./index-DXHSNIUu.js";import"./renderedTicksSlice-BSwSfTVH.js";import"./axisSelectors-B0oXaHqO.js";import"./d3-scale-CJIJLRQO.js";import"./CartesianChart-CyMc8rJv.js";import"./chartDataContext-CURMS4bg.js";import"./CategoricalChart-Cq5j6ts0.js";import"./Layer-CvtIbty1.js";import"./tooltipContext-h71PSfG3.js";import"./AnimatedItems-BQ9vzcvs.js";import"./Label-Bho1wkfx.js";import"./Text-Dn8CYcWJ.js";import"./DOMUtils-DxzVORfb.js";import"./ZIndexLayer-D0YIaJsD.js";import"./useAnimationId-D4zdEFfm.js";import"./types-B89ht9kr.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DNmx5GJU.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CCiDKEDP.js";import"./RegisterGraphicalItemId-IKsKal1D.js";import"./ErrorBarContext--tZY8j9K.js";import"./GraphicalItemClipPath-D7_UBVME.js";import"./SetGraphicalItem-rhq5lQpj.js";import"./getZIndexFromUnknown-AoYqtJuj.js";import"./graphicalItemSelectors-jiUl-4hm.js";const Z={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:m},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={pageData}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <pattern id="star" width="10" height="10" patternUnits="userSpaceOnUse">
              <polygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2" />
            </pattern>
            <pattern id="stripe" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="2" height="4" fill="red" />
            </pattern>
          </defs>
          <Bar dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          <Bar dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#stripe)" />
          <Bar dataKey="amt" stroke="#8884d8" fillOpacity={1} fill="url(#star)" />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const $=["Fill"];export{e as Fill,$ as __namedExportsOrder,Z as default};
