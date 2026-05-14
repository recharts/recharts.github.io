import{e as t}from"./iframe-VKSiBROl.js";import{R as s}from"./arrayEqualityCheck-BB0HA1wg.js";import{C as m}from"./ComposedChart-DRm_ML7n.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as e}from"./Bar-RoOBD0ue.js";import{R as c}from"./RechartsHookInspector-Bk4R2bPq.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-NGq3vz57.js";import"./immer-CPTHWkkH.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BaY8BgmV.js";import"./index-Z1DhqR18.js";import"./hooks-ZL9qLpLY.js";import"./axisSelectors-C7KTOZ5c.js";import"./d3-scale-BjDGrkpd.js";import"./zIndexSlice-DsFodTYX.js";import"./renderedTicksSlice-C68_OdSZ.js";import"./CartesianChart-o8YH5MQb.js";import"./chartDataContext-PCAfxVIZ.js";import"./CategoricalChart-ChVNCGBd.js";import"./Layer-B5Q3HgyD.js";import"./tooltipContext-CMgj9Eu9.js";import"./ReactUtils-DMEWBI26.js";import"./Label-CFO9NE9M.js";import"./Text-DIF9PeK1.js";import"./DOMUtils-BrJ5g_oy.js";import"./ZIndexLayer-VGyT3hqP.js";import"./types-DY717biQ.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Bo5Iqhwn.js";import"./isPlainObject-BPft1dx1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CyZMqhQE.js";import"./useAnimationId-CxCW2e1W.js";import"./Trapezoid-YALS9NHT.js";import"./Sector-B_TUtlds.js";import"./Symbols-BAu9sMjT.js";import"./symbol-BFLJpHsz.js";import"./step-CaHu3Oa5.js";import"./Curve-yzuL5_Sr.js";import"./RegisterGraphicalItemId-0d646qS_.js";import"./ErrorBarContext-DHVubtbe.js";import"./GraphicalItemClipPath-m88eTwMP.js";import"./SetGraphicalItem-B6CVGLUm.js";import"./getZIndexFromUnknown-BY1D_rCU.js";import"./graphicalItemSelectors-BDTb2oUm.js";import"./index-FZYKqp9j.js";import"./ChartSizeDimensions-Ckuhl4O0.js";import"./OffsetShower-DRsWIFHd.js";import"./PlotAreaShower-DlV2zhuR.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(c,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const lt=["Fill"];export{r as Fill,lt as __namedExportsOrder,mt as default};
