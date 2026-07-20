import{R as e}from"./iframe-CYE_KjLp.js";import{R as n}from"./zIndexSlice-BJ5AXs-O.js";import{C as p}from"./ComposedChart-FkotVeZi.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-B1GeT-Va.js";import{X as f}from"./XAxis-CSEJquda.js";import{Y as l}from"./YAxis-DWbbwN0w.js";import{L as d}from"./Line-fP0RojnX.js";import{R as h}from"./ReferenceLine-DHQ_9LNN.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CMwKm87I.js";import"./index-Ph9m1nQR.js";import"./index-BT3sj--6.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Bfx-m_zh.js";import"./isWellBehavedNumber-D2iFNJG8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-8_njvAZI.js";import"./index-CwiYvwQ-.js";import"./index-CN526hDZ.js";import"./renderedTicksSlice-Bk_hKtUF.js";import"./axisSelectors-Cz15TeqU.js";import"./d3-scale-BYal7h8i.js";import"./CartesianChart-g8MVdMo8.js";import"./chartDataContext-3J9QrXTl.js";import"./CategoricalChart-DxSK9VeV.js";import"./CartesianAxis-9Uyc6PiW.js";import"./Layer-BAAO02Y6.js";import"./Text-D9p9m1qq.js";import"./DOMUtils-DNa7oSWn.js";import"./Label-DungM5aU.js";import"./ZIndexLayer-Cs3N_7G3.js";import"./types-Bh5it62Q.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-Crkas5dz.js";import"./Curve-DOUq4MA6.js";import"./step-CrVHI12K.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DDp5Wq7I.js";import"./useAnimationId-D2RJw3gt.js";import"./ActivePoints-B2OdHoBR.js";import"./Dot-CNeFMePA.js";import"./RegisterGraphicalItemId-BVUvorB4.js";import"./ErrorBarContext-C6lKsYq3.js";import"./GraphicalItemClipPath-DSlcdUco.js";import"./SetGraphicalItem-DsAOjH_V.js";import"./getRadiusAndStrokeWidthFromDot-eF6yQmlC.js";import"./ActiveShapeUtils-8xIbBFmr.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const de=["IfOverflow"];export{t as IfOverflow,de as __namedExportsOrder,le as default};
