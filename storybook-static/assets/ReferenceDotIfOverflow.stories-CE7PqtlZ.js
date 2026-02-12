import{e}from"./iframe-BQCoiva3.js";import{R as n}from"./arrayEqualityCheck-B0366wwk.js";import{C as s}from"./ComposedChart-BYVrpyQ6.js";import{C as p}from"./CartesianGrid-CVS13FWE.js";import{X as c}from"./XAxis-adUeWkz6.js";import{Y as f}from"./YAxis-Cm9krEUT.js";import{R as l}from"./ReferenceDot-BeOXjLnJ.js";import{R as h}from"./RechartsHookInspector-CnEEIRv_.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BkSCP0UE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-vpzrlwOs.js";import"./hooks-6nrvr-mh.js";import"./axisSelectors-BeeHNvPl.js";import"./zIndexSlice-DIQaSorX.js";import"./CartesianChart-3obF7LW0.js";import"./chartDataContext-DynAjYRS.js";import"./CategoricalChart-BUFP8crF.js";import"./CartesianAxis-DjqIVAOB.js";import"./Layer-DJ1Ub_Mt.js";import"./Text-DJjW_aea.js";import"./DOMUtils-CR4mIpeb.js";import"./Label-DcE3tZRQ.js";import"./ZIndexLayer-MNqDcOIF.js";import"./types-D3fsuIcd.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-BMcg7DSh.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DKG7AucC.js";import"./ChartSizeDimensions-_A7Mz-FY.js";import"./OffsetShower-D2FIRFNu.js";import"./PlotAreaShower-j01VLlBO.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,V={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const W=["IfOverflow"];export{t as IfOverflow,W as __namedExportsOrder,V as default};
