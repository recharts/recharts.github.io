import{R as e}from"./iframe-pl42v7Eu.js";import{R as s}from"./zIndexSlice-D6Ury5DQ.js";import{C as p}from"./ComposedChart-Bj059aV9.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-COBbHqLx.js";import{X as d}from"./XAxis-0siPSpiK.js";import{Y as l}from"./YAxis-CTEyBNt3.js";import{R as h}from"./ReferenceArea-DV1aO9ER.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-C_PxOxT8.js";import"./index-Df70QOpj.js";import"./index-ntLeohj2.js";import"./get-Ci1Zslo5.js";import"./resolveDefaultProps-BgT3I9Pa.js";import"./isWellBehavedNumber-B6cHM4DS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ByLHuOcy.js";import"./index-BTDreE9O.js";import"./index-Cmb4UkZ_.js";import"./renderedTicksSlice-nJaW__V7.js";import"./axisSelectors-49otWNoQ.js";import"./d3-scale-EDGtIYyd.js";import"./CartesianChart-CkSibwuY.js";import"./chartDataContext-BUPOQjbb.js";import"./CategoricalChart-BDx0yEeS.js";import"./CartesianAxis-Dyaa3QOt.js";import"./Layer-DIETCOs-.js";import"./Text-DHqN6Wmv.js";import"./DOMUtils-C0435NEl.js";import"./Label-jH0IUTIN.js";import"./ZIndexLayer-DHOvoudh.js";import"./types-Cax0x9Pi.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./Rectangle-Dhsi5AWp.js";import"./useAnimationId-bxLMfI7c.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
