import{a as t}from"./iframe-_HfAVjpf.js";import{R as s}from"./zIndexSlice-BBpCjLLT.js";import{C as m}from"./ComposedChart-CDQm-nCO.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-CFQfPVrB.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DIGsG3tn.js";import"./index-Cs9o5rrz.js";import"./index-CIyvwLXB.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D7IrzSl6.js";import"./isWellBehavedNumber-DviO5hHm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B3bcu809.js";import"./axisSelectors-BggHFTDq.js";import"./d3-scale-B5oQCS6M.js";import"./index-ATsp3Ecu.js";import"./index-uZk8L8Al.js";import"./renderedTicksSlice-BNJCO30A.js";import"./index-CIMOmY0A.js";import"./CartesianChart-De3rsgvn.js";import"./chartDataContext-Dyk7Yokq.js";import"./CategoricalChart-a-VUE4A0.js";import"./Layer-CacweoVl.js";import"./activeStyles-BdpGsFup.js";import"./Label-CR54GT5X.js";import"./Text-WmpuDBGa.js";import"./pageBackground-CfQpba4h.js";import"./useId-B3zQHx_-.js";import"./useBackwardsCompatibleTheme-BJsCYBM6.js";import"./ZIndexLayer-BrUuampD.js";import"./useAnimationId-BhBKKO0p.js";import"./dataEntryStyles-Ucx7Hmoa.js";import"./types-BGnPJWtT.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cur1iMCQ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-4DLJyt96.js";import"./tooltipContext-DeJX041B.js";import"./ErrorBarContext-BDsk2xtE.js";import"./GraphicalItemClipPath-C1A7eGe6.js";import"./SetGraphicalItem-Cj-t7_ZW.js";import"./getZIndexFromUnknown-BbWs-CBc.js";import"./useEffectiveDataKey-C_P0BrSn.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},rt=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{e as Fill,rt as __namedExportsOrder,et as default};
