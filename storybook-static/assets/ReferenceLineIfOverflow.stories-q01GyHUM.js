import{R as e}from"./iframe-jkWlGRao.js";import{R as a}from"./zIndexSlice-BJ_azL3V.js";import{C as p}from"./ComposedChart-B8s0ij_q.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CsqRH0Ym.js";import{X as f}from"./XAxis-B6q08DjL.js";import{Y as l}from"./YAxis-Df9BpDFL.js";import{L as d}from"./Line-DGiR6I26.js";import{R as h}from"./ReferenceLine-B-mL-wWl.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BJCkAT-c.js";import"./throttle-BclcIM3t.js";import"./index-CafydseE.js";import"./index-l6IDK4X2.js";import"./RechartsWrapper-CYIxj0Xh.js";import"./axisSelectors-B57c623a.js";import"./polarAxisSelectors-vXDHLkfy.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B7YXqmgC.js";import"./index-CT6JOO-H.js";import"./index-lkQeFUlC.js";import"./renderedTicksSlice-MrcmxqRq.js";import"./index-BIDLCapd.js";import"./CartesianChart-DNa8wuZh.js";import"./ZIndexPortal-PvuD5_Md.js";import"./CategoricalChart-BIz6y0X4.js";import"./CartesianAxis-vLbE4lIP.js";import"./Layer-DGNDN2U_.js";import"./Text-CsCVaUmy.js";import"./pageBackground-B7N8_bCe.js";import"./ZIndexLayer-Cz3uOrDa.js";import"./Label-C3QhHNfQ.js";import"./types-BwHsgyny.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-Ch6LAljQ.js";import"./step-CscB7pF3.js";import"./path-DyVhHtw_.js";import"./LabelList-BN7i6-QW.js";import"./ActivePoints-DFqnjh3O.js";import"./Dot-xzrAS9lw.js";import"./activeStyles-EBU2roz0.js";import"./useAnimationId-CAUjhf76.js";import"./dataEntryStyles-ZVub37-6.js";import"./Symbols-wGnZNd4F.js";import"./symbol-BOEnk89t.js";import"./ErrorBarContext-CbF4zTiN.js";import"./SetGraphicalItem-BoktD6a2.js";import"./getRadiusAndStrokeWidthFromDot-Shmwq5gJ.js";import"./ActiveShapeUtils-KQXKVatm.js";import"./useEffectiveDataKey-CJQQkbyt.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <Line dataKey="uv" />
          <ReferenceLine ifOverflow="extendDomain" y={1700} />
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
     * assert that when ifOverflow="extendDomain" 1800 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,ye as __namedExportsOrder,ve as default};
