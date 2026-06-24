import{R as e}from"./iframe-GMBZ_Ugx.js";import{R as n}from"./zIndexSlice-CaGWsk0_.js";import{C as s}from"./ComposedChart-DtzDaUqm.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Bfv7sfJd.js";import{X as f}from"./XAxis-CWBxARwY.js";import{Y as l}from"./YAxis-B3CJ0t9T.js";import{R as d}from"./ReferenceDot-E_0RL68f.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-8AAf0mWE.js";import"./index-CWyz9jhc.js";import"./index-BJeMs6TD.js";import"./get-Gz1PRcGr.js";import"./resolveDefaultProps-CaBwGHvy.js";import"./isWellBehavedNumber-CHbHfbVW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B0SxcSOH.js";import"./index-B_gRMuPi.js";import"./index-Gz1Qo9An.js";import"./renderedTicksSlice-CW6yCQrF.js";import"./axisSelectors-CTNvdk-R.js";import"./d3-scale-DrE5OPOC.js";import"./CartesianChart-rtXvtu0b.js";import"./chartDataContext-CUGtjOSs.js";import"./CategoricalChart-CElM-v-_.js";import"./CartesianAxis-DMU5FiQJ.js";import"./Layer-BXGTwaUB.js";import"./Text-xcPGheUs.js";import"./DOMUtils-BjtWwWtu.js";import"./Label-BaqULLaE.js";import"./ZIndexLayer-DxP6hcPK.js";import"./types-M4hw7OKT.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./Dot-DN0s5ohL.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
