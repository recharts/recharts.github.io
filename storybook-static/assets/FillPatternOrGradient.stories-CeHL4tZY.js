import{a as t}from"./iframe-CptpVVdK.js";import{R as s}from"./zIndexSlice-CAnxLxZK.js";import{C as m}from"./ComposedChart-Bnlr5v8S.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as e}from"./Bar-gWpIpaCE.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BVKLcYc0.js";import"./index-BTwylabs.js";import"./index-alo09WMF.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Bdo80tkX.js";import"./isWellBehavedNumber-Cb3PSSsF.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-c3RFdf0m.js";import"./axisSelectors-DPTiSWkh.js";import"./d3-scale-DZZpobVW.js";import"./index-Dqps63Gr.js";import"./index-CniHkqMt.js";import"./renderedTicksSlice-Cw--JOgv.js";import"./index-Bya_Ui15.js";import"./CartesianChart-kEptpjHt.js";import"./chartDataContext-YVUr32e2.js";import"./CategoricalChart-DUkp-alm.js";import"./Layer-DZV5gQWy.js";import"./activeStyles-tsd2tFv6.js";import"./Label-DWXJ-Xrk.js";import"./Text-DTbKMiqG.js";import"./pageBackground-0u46-xLx.js";import"./useId-BHxaLpBq.js";import"./useBackwardsCompatibleTheme-Ck1iBTHP.js";import"./ZIndexLayer-DRWh5tG_.js";import"./dataEntryStyles-pGU1xid_.js";import"./useAnimationId-CHix4qCt.js";import"./types-LYqggaBA.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DZ_c966o.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D7m_xdxo.js";import"./tooltipContext-Bus5sfrw.js";import"./RegisterGraphicalItemId-BgCOPa3U.js";import"./ErrorBarContext-BZkeDBub.js";import"./SetGraphicalItem-CBYCujS3.js";import"./getZIndexFromUnknown-Bl6LMIVg.js";import"./useEffectiveDataKey-DVLIQZiI.js";import"./omit-BFRaw1mi.js";import"./isArguments-yB-y1yaH.js";import"./isBuffer-AZzsDYE7.js";const ot={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},at=["Fill"];var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{r as Fill,at as __namedExportsOrder,ot as default};
