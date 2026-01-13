import{e}from"./iframe-DIwakdDt.js";import{R as s}from"./arrayEqualityCheck-lRYvQggb.js";import{C as p}from"./ComposedChart-DZdYEtXz.js";import{C as c}from"./CartesianGrid-rKt-n5uW.js";import{X as f}from"./XAxis-BkI1-gXN.js";import{Y as l}from"./YAxis-BVx4kJfi.js";import{R as h}from"./ReferenceArea-BkX1--Mz.js";import{R as d}from"./RechartsHookInspector-CY1ODLVc.js";import{p as x}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DW7u54OO.js";import"./PolarUtils-B3Fap3OI.js";import"./RechartsWrapper-B94VsC0l.js";import"./hooks-DWXVssZN.js";import"./axisSelectors-B4kb62nw.js";import"./zIndexSlice-BsupxljC.js";import"./CartesianChart-DVLAyEBq.js";import"./chartDataContext-DWbSa9NP.js";import"./CategoricalChart-DSVP0XQf.js";import"./CartesianAxis-D7MVicsA.js";import"./Layer-CFi2OPVU.js";import"./Text-D6OkCyx_.js";import"./DOMUtils-B36TL8VT.js";import"./Label-CWjd44lV.js";import"./ZIndexLayer-Cgd7Iecl.js";import"./types-B72H97bN.js";import"./Rectangle-C0jTOdyj.js";import"./useAnimationId-OdOX1ryX.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DvyeDb-a.js";import"./ChartSizeDimensions-Dw8_76VR.js";import"./OffsetShower-CvNNPebB.js";import"./PlotAreaShower-nYxw-fUs.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,V={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
          <ReferenceArea x1="Page B" x2="Page E" y1={1890} y2={-1000} stroke="red" strokeOpacity={0.3} ifOverflow="extendDomain" />
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
     * assert that when ifOverflow="extendDomain" 1900 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1900')).toBeInTheDocument();
    expect(await findByText('-950')).toBeInTheDocument();
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const W=["IfOverflow"];export{t as IfOverflow,W as __namedExportsOrder,V as default};
