import{e as t}from"./iframe-DU8eCc54.js";import{R as s}from"./arrayEqualityCheck-Qp-5SSbe.js";import{C as m}from"./ComposedChart-DiPamo-o.js";import{B as e}from"./Bar-aF3R1iXA.js";import{R as l}from"./RechartsHookInspector-BoR36NoE.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DuF4MmFq.js";import"./immer-DU5qWI3u.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C5gztReH.js";import"./index-DQdIN_Xy.js";import"./hooks-BJclsIvf.js";import"./axisSelectors-_6DhXqkc.js";import"./d3-scale-DU3kIA5p.js";import"./zIndexSlice-DTpubRK7.js";import"./renderedTicksSlice-Bn5V3AB5.js";import"./CartesianChart-B9jAZwRS.js";import"./chartDataContext-B3buAU5Y.js";import"./CategoricalChart-NWkiMroK.js";import"./Layer-BvRSrkrt.js";import"./tooltipContext-BTs8o_iT.js";import"./ReactUtils-BqHSyciS.js";import"./Label-DOEvYZv6.js";import"./Text-CoSb7mYB.js";import"./DOMUtils-CJsccqgn.js";import"./ZIndexLayer-yILhEk3Y.js";import"./types-BuwCBhFk.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BG4C0dYN.js";import"./isPlainObject-BxgfEpp7.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-H4hJrl9W.js";import"./useAnimationId-DBo0HAQE.js";import"./Trapezoid-DHbRiH3v.js";import"./Sector-B3eubpfo.js";import"./Symbols-DiLU7ggZ.js";import"./symbol-BOFZ4ILC.js";import"./step-rHtSy8FE.js";import"./Curve-CxvlU3dw.js";import"./RegisterGraphicalItemId-DkNBI1Sa.js";import"./ErrorBarContext-BNplQJsE.js";import"./GraphicalItemClipPath-DikKl46E.js";import"./SetGraphicalItem-EApE1d4j.js";import"./getZIndexFromUnknown-DYvgE3wg.js";import"./graphicalItemSelectors-CG_Gq5pM.js";import"./index-Cm2tec04.js";import"./ChartSizeDimensions-56Hl6M0T.js";import"./OffsetShower-lCaRoXjj.js";import"./PlotAreaShower-Cn7QQOSS.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
