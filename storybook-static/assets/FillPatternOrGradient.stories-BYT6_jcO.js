import{R as t}from"./iframe-W15_yS8y.js";import{R as s}from"./zIndexSlice-KjfXmz6K.js";import{C as m}from"./ComposedChart-DruFp6Y2.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-JnvSsJKH.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dvj2OlWT.js";import"./index-DJoXYd_8.js";import"./index-C4zsw-i5.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-PB6tg1uE.js";import"./isWellBehavedNumber-J_RQo-Gx.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B53AJGL_.js";import"./index-Df7Hn4Pb.js";import"./index-CzfOThSk.js";import"./axisSelectors-D1dvC9r7.js";import"./d3-scale-DaTRSSxE.js";import"./renderedTicksSlice--xVLPDDU.js";import"./CartesianChart-CGOzuY2G.js";import"./chartDataContext-CMgd62s5.js";import"./CategoricalChart-DCYct-dD.js";import"./Layer-mEuTxfDi.js";import"./AnimatedItems-CZGuNW2p.js";import"./Label-v2JLpAzt.js";import"./Text-BvMd1KWD.js";import"./DOMUtils-Mq767cy3.js";import"./useBackwardsCompatibleTheme-CVh47B6N.js";import"./ZIndexLayer-DRPG0BG4.js";import"./useAnimationId-B9um5jhW.js";import"./types-DbtskFGe.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BBPyqCCf.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CzKUxwm_.js";import"./tooltipContext-Dhbi8ip2.js";import"./RegisterGraphicalItemId-qtKCK3s0.js";import"./ErrorBarContext-C5-u35E5.js";import"./GraphicalItemClipPath-DHit8l0N.js";import"./SetGraphicalItem-BYTBa9Xv.js";import"./getZIndexFromUnknown-DJTrSOrY.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-E6qKB9xL.js";const tt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const et=["Fill"];export{e as Fill,et as __namedExportsOrder,tt as default};
