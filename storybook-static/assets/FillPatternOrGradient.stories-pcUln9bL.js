import{a as t}from"./iframe-SuqF0IOU.js";import{R as s}from"./zIndexSlice-DfamN9Zs.js";import{C as m}from"./ComposedChart-BtkawvAi.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-Dx1JhkKq.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D6-FoWPM.js";import"./index-DY-qAKzO.js";import"./index-iK0jM_n6.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-7DzpjnqO.js";import"./isWellBehavedNumber-DJK-MsfJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bg2tG11C.js";import"./axisSelectors-DbgUQ8Ul.js";import"./d3-scale-DnD8-5rl.js";import"./index-DLroYRR9.js";import"./index-VBcGpDGq.js";import"./renderedTicksSlice-DomOKpq5.js";import"./index-DHZGQ52F.js";import"./CartesianChart-Cji0pvqd.js";import"./chartDataContext-B0QyEg6f.js";import"./CategoricalChart-D2xX8P6u.js";import"./Layer-CeZWaGzt.js";import"./AnimatedItems-DXL71NvC.js";import"./Label-9O6_T9C4.js";import"./Text-UuMUK1_u.js";import"./DOMUtils-DsJOOh9b.js";import"./useId-CsqHk6Y-.js";import"./useBackwardsCompatibleTheme-C6-DbdWl.js";import"./ZIndexLayer-BN_mfTvc.js";import"./useAnimationId-ol_mxPID.js";import"./types-CS_OGYEB.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BY0JMHo5.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DYWxkXZ9.js";import"./tooltipContext-C3LWRUAx.js";import"./RegisterGraphicalItemId-BaNEX7Pr.js";import"./ErrorBarContext-BJEyAykc.js";import"./GraphicalItemClipPath-TmHiHpN1.js";import"./SetGraphicalItem-C7X7ybgb.js";import"./getZIndexFromUnknown-B5NA7H4K.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BUySm8JS.js";const rt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},it=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
