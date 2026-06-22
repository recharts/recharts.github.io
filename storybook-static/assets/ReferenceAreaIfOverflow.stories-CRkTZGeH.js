import{R as e}from"./iframe-Clh6Am28.js";import{R as s}from"./zIndexSlice-C8WH1sbl.js";import{C as p}from"./ComposedChart-BZO5EA81.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-BYNjs-5G.js";import{X as d}from"./XAxis-CX5kJZWB.js";import{Y as l}from"./YAxis-Bbuu0E_L.js";import{R as h}from"./ReferenceArea-D2870tKa.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CCKY-2O_.js";import"./index-mbhNu375.js";import"./index-D983Ac__.js";import"./get-ReXw4Xs6.js";import"./resolveDefaultProps-Cp4jCd2q.js";import"./isWellBehavedNumber-BTdz8jY9.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-kLRmp8Nc.js";import"./index-B67Qu5hK.js";import"./index-81KY_DK_.js";import"./renderedTicksSlice--OmlTIq-.js";import"./axisSelectors-CtcLf7W7.js";import"./d3-scale-BSnqKxuH.js";import"./CartesianChart-DYzbJdNk.js";import"./chartDataContext-BpoRQBsX.js";import"./CategoricalChart-ISWmGPOG.js";import"./CartesianAxis-EoQ_2pVo.js";import"./Layer-rOqvObKk.js";import"./Text-X5OcHqR4.js";import"./DOMUtils-CtdcYe6Z.js";import"./Label-gvCBOhLE.js";import"./ZIndexLayer-4xKONL83.js";import"./types-Clw2FxQC.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./Rectangle-CZG00UlM.js";import"./useAnimationId-CWbLQsSM.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ee=["IfOverflow"];export{t as IfOverflow,ee as __namedExportsOrder,$ as default};
