import{R as e}from"./iframe-C-fup5Id.js";import{R as n}from"./zIndexSlice-NTR0fs-C.js";import{C as s}from"./ComposedChart-Jz5lk914.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DnMjpwq0.js";import{X as f}from"./XAxis-DODICsjR.js";import{Y as l}from"./YAxis-B46hC9dU.js";import{R as d}from"./ReferenceDot-ma6d7SDs.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-8TCI2H73.js";import"./index-Dx7TC_Rp.js";import"./index-DjFdhAan.js";import"./get-p2wvzD9I.js";import"./resolveDefaultProps-OK-IJ12C.js";import"./isWellBehavedNumber-DLU1AHVw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B95PZmfT.js";import"./index-DNWmVjf2.js";import"./index-BlVQDt2E.js";import"./renderedTicksSlice-DiIPZqfD.js";import"./axisSelectors-BO6Bv25T.js";import"./d3-scale-BaBWXdX7.js";import"./CartesianChart-DGFEm_4g.js";import"./chartDataContext-Ci_9Tusi.js";import"./CategoricalChart-2uAqMqKC.js";import"./CartesianAxis-DNfda7To.js";import"./Layer-BxCAIV-n.js";import"./Text-DhUd53xM.js";import"./DOMUtils-CRh4TCoN.js";import"./Label-Dx6_KP12.js";import"./ZIndexLayer-DdUd9A7h.js";import"./types-BIM6WHXQ.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./Dot-Blb5FiAy.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <ReferenceDot ifOverflow="extendDomain" x="Page E" y={1700} r={100} />
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
     * assert that when ifOverflow="extendDomain" 1900 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const Z=["IfOverflow"];export{t as IfOverflow,Z as __namedExportsOrder,W as default};
