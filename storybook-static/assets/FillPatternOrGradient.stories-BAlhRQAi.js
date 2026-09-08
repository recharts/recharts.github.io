import{a as t}from"./iframe-CNkb7Pxq.js";import{R as s}from"./zIndexSlice-wl2-d2L7.js";import{C as m}from"./ComposedChart-C_D-eBru.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-CPB1gSZi.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D9QF5i1l.js";import"./index-hgSNbj3_.js";import"./index-B0O4glZn.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-LXGJzsB2.js";import"./isWellBehavedNumber-cZPS57La.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CE0LDB2v.js";import"./axisSelectors-D4hfpt9F.js";import"./d3-scale-hNSavMKY.js";import"./index-nHtRpei8.js";import"./index-BkiX-XNJ.js";import"./renderedTicksSlice-DjfT86KI.js";import"./index-D8V4aljY.js";import"./CartesianChart-Dvu2owgZ.js";import"./chartDataContext-eHLxlpVB.js";import"./CategoricalChart-D2oZJ6cq.js";import"./Layer-BE_omtYE.js";import"./AnimatedItems-Dtnyeebx.js";import"./Label-CgRMMdp1.js";import"./Text-DlOSKY9M.js";import"./DOMUtils-BQzfSO_G.js";import"./useId-C8-4auv_.js";import"./useBackwardsCompatibleTheme-BLuzOGOd.js";import"./ZIndexLayer-V6Rl9PTE.js";import"./useAnimationId-BDE8tpoz.js";import"./types-CyS4-dLr.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-ByMG9fnn.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BcbuTBin.js";import"./tooltipContext-DOQY0hKI.js";import"./RegisterGraphicalItemId-BCZSUoIT.js";import"./ErrorBarContext-D2ajplsz.js";import"./GraphicalItemClipPath-CWom5q5K.js";import"./SetGraphicalItem-ChHo-vHf.js";import"./getZIndexFromUnknown-DZwDvBwe.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DaSL7yW8.js";const rt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},it=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{e as Fill,it as __namedExportsOrder,rt as default};
