import{a as e}from"./iframe-3mrIZkil.js";import{R as p}from"./zIndexSlice-L3ODJxG9.js";import{C as s}from"./ComposedChart-B1NQbFGd.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-C4bUFIHm.js";import{X as d}from"./XAxis-D6OSWIjP.js";import{Y as l}from"./YAxis-L6Kj6NBD.js";import{R as h}from"./ReferenceArea-CxYRNFWS.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-rESuvk1I.js";import"./index-BXM7Ne4y.js";import"./index-CDwIhtzp.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-i-Y4kJTh.js";import"./isWellBehavedNumber-ZyDhg4rS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DwVI4RN7.js";import"./axisSelectors-DAOLJeWY.js";import"./d3-scale-CguR2U2N.js";import"./index-BtaPmQxv.js";import"./index-BdkN9O5O.js";import"./renderedTicksSlice-DYEa3gne.js";import"./index-pFwFQ5O8.js";import"./CartesianChart-CUvaXipt.js";import"./chartDataContext-FTM0Yeif.js";import"./CategoricalChart-D95OMo3E.js";import"./CartesianAxis-BlnQQ3GL.js";import"./Layer-DjZWmALl.js";import"./Text-DUYy6Shz.js";import"./DOMUtils-CXxLAhGm.js";import"./useId-Cxwt81yN.js";import"./useBackwardsCompatibleTheme-lR8vi8zs.js";import"./Label-BIqKgU55.js";import"./ZIndexLayer-D4cc4mD4.js";import"./types-8JRxRnLp.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-BDa16x25.js";import"./useAnimationId-BnnXfXw0.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{t as IfOverflow,ne as __namedExportsOrder,oe as default};
