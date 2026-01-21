import{e as t}from"./iframe-BlCBiEbC.js";import{R as s}from"./arrayEqualityCheck-X93wQEqh.js";import{C as l}from"./ComposedChart-kZ-KCn3S.js";import{B as r}from"./Bar-DLAVhNBA.js";import{R as m}from"./RechartsHookInspector-CHVk1qod.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Bzr_YW23.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-DkDok3zQ.js";import"./hooks-BT650JQT.js";import"./axisSelectors-0_eHLV3I.js";import"./zIndexSlice-RKZlw9rR.js";import"./CartesianChart-DgUfEX9r.js";import"./chartDataContext-B-D1_Xyu.js";import"./CategoricalChart-CX-nrdd_.js";import"./Layer-BoA-MhSr.js";import"./tooltipContext-CdjW7zH-.js";import"./ReactUtils-CVZw63sI.js";import"./Label-yaREi1fu.js";import"./Text-RTBsPD27.js";import"./DOMUtils-Iuyw-z7a.js";import"./ZIndexLayer-jahJ6frp.js";import"./types-DYooLvZu.js";import"./ActiveShapeUtils-DglLsZWb.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B8Cog5YP.js";import"./useAnimationId-DmUtWl3R.js";import"./Trapezoid-DBjSOHQz.js";import"./Sector-DXYt-lKs.js";import"./Symbols-KFHdQ1ay.js";import"./Curve-CHEFd7Ta.js";import"./RegisterGraphicalItemId-CF1HBkTr.js";import"./ErrorBarContext-CmWkVzrA.js";import"./GraphicalItemClipPath-C8x-oaPF.js";import"./SetGraphicalItem-SfTyueuB.js";import"./getZIndexFromUnknown-yHW4b60R.js";import"./graphicalItemSelectors-BBoAQcBZ.js";import"./index-D4FkNtIV.js";import"./ChartSizeDimensions-1GSyPMX1.js";import"./OffsetShower-BzuY3Qm6.js";import"./PlotAreaShower-D5VmZD6S.js";const tt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(m,null)))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const et=["Fill"];export{e as Fill,et as __namedExportsOrder,tt as default};
