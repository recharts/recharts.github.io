import{R as e}from"./iframe-B06eq_mz.js";import{R as s}from"./zIndexSlice-DZ0Q8BZb.js";import{C as p}from"./ComposedChart-5JCLGpBO.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-Cw3uAQ6C.js";import{X as d}from"./XAxis-D6J_FGoO.js";import{Y as l}from"./YAxis-CIZVFNfM.js";import{R as h}from"./ReferenceArea-CrkAoa_U.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DWlJTWeN.js";import"./index-CYBZJJ0c.js";import"./index-CdiP4uoA.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DtTSgpqn.js";import"./isWellBehavedNumber-DNvLaw60.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B5NLQSdK.js";import"./index-C5xxdLaM.js";import"./index-tCsMn5v1.js";import"./renderedTicksSlice-Hn5vD_Co.js";import"./axisSelectors-B1LI97QB.js";import"./d3-scale-AtM_X8t9.js";import"./CartesianChart-W-yd_mhO.js";import"./chartDataContext-Sk-D_ye3.js";import"./CategoricalChart-OHkYYYd7.js";import"./CartesianAxis-Ctfj6_7f.js";import"./Layer-XBL4Rxwk.js";import"./Text-C48XOo8y.js";import"./DOMUtils-CKORyHt8.js";import"./Label-DB6uwHR-.js";import"./ZIndexLayer-fQY0BiB2.js";import"./types-CeAaMoTr.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-Crkas5dz.js";import"./Rectangle-D_tYzf8y.js";import"./useAnimationId-Dv1roAA4.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,ee={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const te=["IfOverflow"];export{t as IfOverflow,te as __namedExportsOrder,ee as default};
