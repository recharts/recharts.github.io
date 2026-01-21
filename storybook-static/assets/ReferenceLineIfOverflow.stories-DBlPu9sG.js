import{e}from"./iframe-Kkd8-ubb.js";import{R as n}from"./arrayEqualityCheck-Ielmuttt.js";import{C as p}from"./ComposedChart-Bo7YXCXq.js";import{C as s}from"./CartesianGrid-BxneuM0y.js";import{X as c}from"./XAxis-CbFnoS6J.js";import{Y as f}from"./YAxis-BJyvtpDc.js";import{L as l}from"./Line-CYMWQ0PF.js";import{R as d}from"./ReferenceLine-CdXMyLmq.js";import{R as h}from"./RechartsHookInspector-CcR4oLvT.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-e46786Oc.js";import"./PolarUtils-dpEG3P4_.js";import"./RechartsWrapper-DfR_FMJ_.js";import"./hooks-DpEg8B1p.js";import"./axisSelectors-CQsBMpsc.js";import"./zIndexSlice-oaE3QQvX.js";import"./CartesianChart-yQMyY-ky.js";import"./chartDataContext-Cn2HGoq0.js";import"./CategoricalChart-BHUUzYjw.js";import"./CartesianAxis-CgavSOcU.js";import"./Layer-Cyu_K3I4.js";import"./Text-D0iQ_q13.js";import"./DOMUtils-BRB7Whks.js";import"./Label-Cj_m_2Cw.js";import"./ZIndexLayer-BavQVgOF.js";import"./types-CKa1MlE2.js";import"./ReactUtils-BqeFDjfd.js";import"./ActivePoints-C2lViDCT.js";import"./Dot-Cz1V9H5e.js";import"./RegisterGraphicalItemId-Dq1gRlWd.js";import"./ErrorBarContext-MQ-0FIOF.js";import"./GraphicalItemClipPath-CBxCy0LY.js";import"./SetGraphicalItem-umYxrYzv.js";import"./useAnimationId-BuYZFA9f.js";import"./getRadiusAndStrokeWidthFromDot-D45MSBdu.js";import"./ActiveShapeUtils-D0hO1fBl.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DyJZTmCf.js";import"./Trapezoid-BXOoNxp9.js";import"./Sector-cedV6umc.js";import"./Symbols-Do2U4jAb.js";import"./Curve-bqTY_rZQ.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Cr9WdP25.js";import"./ChartSizeDimensions-DHaCW3zv.js";import"./OffsetShower-4UKMZo9R.js";import"./PlotAreaShower-DaKuRwAM.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <ReferenceLine ifOverflow="extendDomain" y={1700} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const {
      findByText
    } = within(canvasElement);
    /**
     * assert that when ifOverflow="extendDomain" 1800 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const de=["IfOverflow"];export{t as IfOverflow,de as __namedExportsOrder,le as default};
