import{e}from"./iframe-eaOsasXA.js";import{R as n}from"./arrayEqualityCheck-CMs0gYkZ.js";import{C as p}from"./ComposedChart-DAn4V3cy.js";import{C as s}from"./CartesianGrid-XpHpCMJI.js";import{X as c}from"./XAxis-3ftlLggt.js";import{Y as f}from"./YAxis-D0SSpyRh.js";import{L as l}from"./Line-CuhRYagr.js";import{R as d}from"./ReferenceLine-DYKgxadc.js";import{R as h}from"./RechartsHookInspector-CfQxcoqC.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BRN_chMz.js";import"./immer-h0oz4gDz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-kQIwCL0D.js";import"./index-CBq7QNMe.js";import"./hooks-DkQXEwbK.js";import"./axisSelectors-rZ1oBaef.js";import"./d3-scale-fyi29fM7.js";import"./zIndexSlice-CQVRJFSN.js";import"./renderedTicksSlice-HUT3i4LQ.js";import"./CartesianChart-DqLib-3F.js";import"./chartDataContext-BZaY1x-g.js";import"./CategoricalChart-BHzek6ba.js";import"./CartesianAxis-QrZ9YuOP.js";import"./Layer-CEQ15rDn.js";import"./Text-CS5oLB7f.js";import"./DOMUtils-DKDW8odg.js";import"./Label-CM17nvk9.js";import"./ZIndexLayer-4Bmx0L-z.js";import"./types-DVEQRe7O.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-rQN1ow78.js";import"./ActivePoints-_V2GyU66.js";import"./Dot-CL5p6Fms.js";import"./RegisterGraphicalItemId-1T1LHaRb.js";import"./ErrorBarContext-BRJpaXpn.js";import"./GraphicalItemClipPath-DHbALYaQ.js";import"./SetGraphicalItem-CI6Uk2ug.js";import"./useAnimationId-Cipx0nDt.js";import"./getRadiusAndStrokeWidthFromDot-Cifjzjy_.js";import"./ActiveShapeUtils-DuB5RKi8.js";import"./isPlainObject-DOptfpMt.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DCXniG-Q.js";import"./Trapezoid-B7u96FyR.js";import"./Sector-DlrpmWZs.js";import"./Symbols-DwawNnsL.js";import"./symbol-DkR6dB45.js";import"./step-wTrvujLP.js";import"./Curve-BpLwOdP7.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-D4X9rB5g.js";import"./ChartSizeDimensions-DQ43uIY8.js";import"./OffsetShower-Y12_Isjl.js";import"./PlotAreaShower-ND2vevs1.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const Ce=["IfOverflow"];export{t as IfOverflow,Ce as __namedExportsOrder,Re as default};
