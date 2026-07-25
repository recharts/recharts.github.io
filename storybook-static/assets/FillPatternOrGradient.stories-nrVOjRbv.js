import{R as t}from"./iframe-B06eq_mz.js";import{R as s}from"./zIndexSlice-DZ0Q8BZb.js";import{C as l}from"./ComposedChart-5JCLGpBO.js";import{p as m}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-COjpy02_.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DWlJTWeN.js";import"./index-CYBZJJ0c.js";import"./index-CdiP4uoA.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DtTSgpqn.js";import"./isWellBehavedNumber-DNvLaw60.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B5NLQSdK.js";import"./index-C5xxdLaM.js";import"./index-tCsMn5v1.js";import"./renderedTicksSlice-Hn5vD_Co.js";import"./axisSelectors-B1LI97QB.js";import"./d3-scale-AtM_X8t9.js";import"./CartesianChart-W-yd_mhO.js";import"./chartDataContext-Sk-D_ye3.js";import"./CategoricalChart-OHkYYYd7.js";import"./Layer-XBL4Rxwk.js";import"./tooltipContext-wRzVS-RS.js";import"./AnimatedItems-C0zIpN2y.js";import"./Label-DB6uwHR-.js";import"./Text-C48XOo8y.js";import"./DOMUtils-CKORyHt8.js";import"./ZIndexLayer-fQY0BiB2.js";import"./useAnimationId-Dv1roAA4.js";import"./types-CeAaMoTr.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D_tYzf8y.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B667TR48.js";import"./RegisterGraphicalItemId-DDWl-fOV.js";import"./ErrorBarContext-BroTLh2z.js";import"./GraphicalItemClipPath-DtkF5P7U.js";import"./SetGraphicalItem-C5vdnQC6.js";import"./getZIndexFromUnknown-DmMzeTz5.js";import"./graphicalItemSelectors-DuBEe48Q.js";const Z={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:m},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
