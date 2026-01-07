import{e}from"./iframe-DaCZzlB4.js";import{R as s}from"./arrayEqualityCheck-xIdjdXyO.js";import{C as p}from"./ComposedChart-qrh-EwWj.js";import{C as c}from"./CartesianGrid-DqFR1Dv1.js";import{X as f}from"./XAxis-Xd1zSAtt.js";import{Y as l}from"./YAxis-CjzxMwK0.js";import{R as h}from"./ReferenceArea-BPdbOLRy.js";import{R as d}from"./RechartsHookInspector-C1qZr8kA.js";import{p as x}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CDCOnC3u.js";import"./PolarUtils-CS41bXSK.js";import"./RechartsWrapper-CytJWPJg.js";import"./hooks-96RhMqDh.js";import"./axisSelectors-BaN6N1Lo.js";import"./zIndexSlice-B7osVKE5.js";import"./CartesianChart-CmxBhKD5.js";import"./chartDataContext-C2uZEvtu.js";import"./CategoricalChart-BnmCoL2H.js";import"./CartesianAxis-B3Ks68Jf.js";import"./Layer-BKXPn5xD.js";import"./Text-3g0qzZJG.js";import"./DOMUtils-DZpmyTbi.js";import"./Label-D2rMkPMU.js";import"./ZIndexLayer-Deqw7_sa.js";import"./types-CyhQh7_Z.js";import"./Rectangle-z0Tijc68.js";import"./useAnimationId-DMDiR4YX.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DqUfe0wd.js";import"./ChartSizeDimensions-Dn5P1TLL.js";import"./OffsetShower-CyCVWv2W.js";import"./PlotAreaShower-DACZviw9.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,V={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
