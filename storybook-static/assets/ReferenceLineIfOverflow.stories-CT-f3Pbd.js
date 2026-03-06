import{e}from"./iframe-CwQqlQJt.js";import{R as n}from"./arrayEqualityCheck-BajvuZUd.js";import{C as p}from"./ComposedChart-8yH4t5Gs.js";import{C as s}from"./CartesianGrid-DF56C0NO.js";import{X as c}from"./XAxis-WQ1W94Oc.js";import{Y as f}from"./YAxis-DZx2Qb_9.js";import{L as l}from"./Line-D-d04PHZ.js";import{R as d}from"./ReferenceLine-DyB2GWyF.js";import{R as h}from"./RechartsHookInspector-DE9uvm11.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BwAiebew.js";import"./immer-Bw_kturo.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-mfnwaW4T.js";import"./index-_RolKYTX.js";import"./hooks-CEEbPwwQ.js";import"./axisSelectors-CiLIxTM1.js";import"./d3-scale-MvDvfgbn.js";import"./zIndexSlice-C8qpENF4.js";import"./renderedTicksSlice-DD88ZL81.js";import"./CartesianChart-CB-rBxO3.js";import"./chartDataContext-DhwkPQ9I.js";import"./CategoricalChart-D6AbF0nJ.js";import"./CartesianAxis--UFkxmwi.js";import"./Layer-BfeVm7hl.js";import"./Text-DEfSdBAV.js";import"./DOMUtils-Dk-0Y4qu.js";import"./Label-L2ClqQk9.js";import"./ZIndexLayer-BhfIIgcP.js";import"./types-iTXorHjM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-3SZUbpqz.js";import"./ActivePoints-DZhXgF4L.js";import"./Dot-C5aKWjVV.js";import"./RegisterGraphicalItemId-j64FPojn.js";import"./ErrorBarContext-CnIL0nCY.js";import"./GraphicalItemClipPath-CGVVVryc.js";import"./SetGraphicalItem-B838l6ba.js";import"./useAnimationId-BkdqwMyM.js";import"./getRadiusAndStrokeWidthFromDot-DbN4thuv.js";import"./ActiveShapeUtils-Cc01wXEA.js";import"./isPlainObject-BdAdFHxg.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BfTwe_Uy.js";import"./Trapezoid-DuD6k8aH.js";import"./Sector-DlF65nWv.js";import"./Symbols-B_0LQQd8.js";import"./symbol-BrIbO22w.js";import"./step-CzpXmVwk.js";import"./Curve-DVUJSzGy.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-D_-HOL7T.js";import"./ChartSizeDimensions-B33reZ_o.js";import"./OffsetShower-CD2wvvOr.js";import"./PlotAreaShower-CwvzOICJ.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
