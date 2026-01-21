import{e}from"./iframe-Kkd8-ubb.js";import{R as i}from"./arrayEqualityCheck-Ielmuttt.js";import{C as a}from"./ComposedChart-Bo7YXCXq.js";import{C as p}from"./CartesianGrid-BxneuM0y.js";import{X as n}from"./XAxis-CbFnoS6J.js";import{Y as s}from"./YAxis-BJyvtpDc.js";import{L as c}from"./Line-CYMWQ0PF.js";import{R as d}from"./ReferenceLine-CdXMyLmq.js";import{R as g}from"./RechartsHookInspector-CcR4oLvT.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-e46786Oc.js";import"./PolarUtils-dpEG3P4_.js";import"./RechartsWrapper-DfR_FMJ_.js";import"./hooks-DpEg8B1p.js";import"./axisSelectors-CQsBMpsc.js";import"./zIndexSlice-oaE3QQvX.js";import"./CartesianChart-yQMyY-ky.js";import"./chartDataContext-Cn2HGoq0.js";import"./CategoricalChart-BHUUzYjw.js";import"./CartesianAxis-CgavSOcU.js";import"./Layer-Cyu_K3I4.js";import"./Text-D0iQ_q13.js";import"./DOMUtils-BRB7Whks.js";import"./Label-Cj_m_2Cw.js";import"./ZIndexLayer-BavQVgOF.js";import"./types-CKa1MlE2.js";import"./ReactUtils-BqeFDjfd.js";import"./ActivePoints-C2lViDCT.js";import"./Dot-Cz1V9H5e.js";import"./RegisterGraphicalItemId-Dq1gRlWd.js";import"./ErrorBarContext-MQ-0FIOF.js";import"./GraphicalItemClipPath-CBxCy0LY.js";import"./SetGraphicalItem-umYxrYzv.js";import"./useAnimationId-BuYZFA9f.js";import"./getRadiusAndStrokeWidthFromDot-D45MSBdu.js";import"./ActiveShapeUtils-D0hO1fBl.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DyJZTmCf.js";import"./Trapezoid-BXOoNxp9.js";import"./Sector-cedV6umc.js";import"./Symbols-Do2U4jAb.js";import"./Curve-bqTY_rZQ.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Cr9WdP25.js";import"./ChartSizeDimensions-DHaCW3zv.js";import"./OffsetShower-4UKMZo9R.js";import"./PlotAreaShower-DaKuRwAM.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine segment={[{
          x: 'Page A',
          y: 0
        }, {
          x: 'Page E',
          y: 1500
        }]} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const se=["Segment"];export{t as Segment,se as __namedExportsOrder,ne as default};
