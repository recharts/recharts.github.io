import{e}from"./iframe-CnfUedcN.js";import{R as s}from"./arrayEqualityCheck-rY7iVDz-.js";import{C as p}from"./ComposedChart-BAo7iPrY.js";import{C as c}from"./CartesianGrid-B1kAbEgK.js";import{X as f}from"./XAxis-veq9g2__.js";import{Y as l}from"./YAxis-CRL5LUi9.js";import{R as h}from"./ReferenceArea-t7g8BVS5.js";import{R as d}from"./RechartsHookInspector-r5irvpzN.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CVejQHWD.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-UZgszUQZ.js";import"./hooks-dlNhbOk4.js";import"./axisSelectors-vytjTI39.js";import"./zIndexSlice-Dvx1lbqL.js";import"./CartesianChart-CxN-AX8e.js";import"./chartDataContext-DVPFzTpf.js";import"./CategoricalChart-Bvh-Z6kO.js";import"./CartesianAxis-CDEvUzTG.js";import"./Layer-D-nKIsW1.js";import"./Text-Bxj3u51B.js";import"./DOMUtils-BXcCCvqt.js";import"./Label-YyARJRE4.js";import"./ZIndexLayer-DbY_9wcH.js";import"./types-D8riT1ui.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-DD8FGW0K.js";import"./useAnimationId-34yVtl_d.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BUn4aue4.js";import"./ChartSizeDimensions-BN5VWsPC.js";import"./OffsetShower-Bj6jxFEA.js";import"./PlotAreaShower-fzrOqZm1.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Z=["IfOverflow"];export{t as IfOverflow,Z as __namedExportsOrder,W as default};
