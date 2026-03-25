import{e}from"./iframe-B9GGDGS1.js";import{R as n}from"./arrayEqualityCheck-COtCLy3x.js";import{C as p}from"./ComposedChart-CIiFVJBI.js";import{C as s}from"./CartesianGrid-ZKhKpmPf.js";import{X as c}from"./XAxis-BhXpxA_M.js";import{Y as f}from"./YAxis-CQFlmWqm.js";import{L as l}from"./Line-BRyNeqPY.js";import{R as d}from"./ReferenceLine-Dv7M-kDy.js";import{R as h}from"./RechartsHookInspector-BWkI8hZR.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CwlEvTRj.js";import"./immer-D8haotDT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-EHfwRfBb.js";import"./index-D1V-1Kud.js";import"./hooks-C2J7naOZ.js";import"./axisSelectors-8xv55RbV.js";import"./d3-scale-CJw_J5vV.js";import"./zIndexSlice-Dr0l4bHj.js";import"./renderedTicksSlice-q0M83NPg.js";import"./CartesianChart-YXzBIFVQ.js";import"./chartDataContext-Z-R_60d5.js";import"./CategoricalChart-BBfSxrd4.js";import"./CartesianAxis-DyjzRIeL.js";import"./Layer-DcWLpeG9.js";import"./Text-BfPYOH_N.js";import"./DOMUtils-BTQMQKLS.js";import"./Label-DbaG7Uem.js";import"./ZIndexLayer-CbIo1jp-.js";import"./types-88pgmlG4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CrjF-zMe.js";import"./ActivePoints-CNPbEPL7.js";import"./Dot-B6uirbug.js";import"./RegisterGraphicalItemId-CE2Hr5pe.js";import"./ErrorBarContext-DMLt-c7m.js";import"./GraphicalItemClipPath-B6fH0RLB.js";import"./SetGraphicalItem-Df3jzsrS.js";import"./useAnimationId-DnjhYXkZ.js";import"./getRadiusAndStrokeWidthFromDot-BxwKgIZR.js";import"./ActiveShapeUtils-DstCBXr6.js";import"./isPlainObject-Drfk2luO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CMlO_C8p.js";import"./Trapezoid-Cz1Qyrxg.js";import"./Sector-CREvb1nt.js";import"./Symbols-Drc7wV6L.js";import"./symbol-qWW-wzEd.js";import"./step-DJMv4gH4.js";import"./Curve-BqOd-kHx.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DZx9HZGn.js";import"./ChartSizeDimensions-C9x1Brk2.js";import"./OffsetShower-BIWjLM9_.js";import"./PlotAreaShower-Dpy9Dm8W.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
