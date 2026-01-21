import{e as t}from"./iframe-Kkd8-ubb.js";import{R as p}from"./arrayEqualityCheck-Ielmuttt.js";import{C as m}from"./ComposedChart-Bo7YXCXq.js";import{A as r}from"./Area-B_uUmvtO.js";import{R as s}from"./RechartsHookInspector-CcR4oLvT.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-e46786Oc.js";import"./PolarUtils-dpEG3P4_.js";import"./RechartsWrapper-DfR_FMJ_.js";import"./hooks-DpEg8B1p.js";import"./axisSelectors-CQsBMpsc.js";import"./zIndexSlice-oaE3QQvX.js";import"./CartesianChart-yQMyY-ky.js";import"./chartDataContext-Cn2HGoq0.js";import"./CategoricalChart-BHUUzYjw.js";import"./Curve-bqTY_rZQ.js";import"./types-CKa1MlE2.js";import"./Layer-Cyu_K3I4.js";import"./ReactUtils-BqeFDjfd.js";import"./Label-Cj_m_2Cw.js";import"./Text-D0iQ_q13.js";import"./DOMUtils-BRB7Whks.js";import"./ZIndexLayer-BavQVgOF.js";import"./ActivePoints-C2lViDCT.js";import"./Dot-Cz1V9H5e.js";import"./RegisterGraphicalItemId-Dq1gRlWd.js";import"./GraphicalItemClipPath-CBxCy0LY.js";import"./SetGraphicalItem-umYxrYzv.js";import"./useAnimationId-BuYZFA9f.js";import"./getRadiusAndStrokeWidthFromDot-D45MSBdu.js";import"./graphicalItemSelectors-DoZkDUOJ.js";import"./index-Cr9WdP25.js";import"./ChartSizeDimensions-DHaCW3zv.js";import"./OffsetShower-4UKMZo9R.js";import"./PlotAreaShower-DaKuRwAM.js";const N={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <defs>
            <pattern id="left" width="12" height="4" patternUnits="userSpaceOnUse">
              <rect width="4" height="4" fill="#8884d8" />
            </pattern>
            <pattern id="right" width="8" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="4" height="4" fill="#82ca9d" />
            </pattern>
          </defs>
          <Area type="monotone" dataKey="x" stroke="#8884d8" fillOpacity={1} fill="url(#left)" />
          <Area type="monotone" dataKey="y" stroke="#82ca9d" fillOpacity={1} fill="url(#right)" />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const Q=["FillPattern"];export{e as FillPattern,Q as __namedExportsOrder,N as default};
