import{R as e}from"./iframe-Clh6Am28.js";import{R as n}from"./zIndexSlice-C8WH1sbl.js";import{C as p}from"./ComposedChart-BZO5EA81.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BYNjs-5G.js";import{X as f}from"./XAxis-CX5kJZWB.js";import{Y as l}from"./YAxis-Bbuu0E_L.js";import{L as d}from"./Line-DpvpjAPB.js";import{R as h}from"./ReferenceLine-Do7BfjaI.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CCKY-2O_.js";import"./index-mbhNu375.js";import"./index-D983Ac__.js";import"./get-ReXw4Xs6.js";import"./resolveDefaultProps-Cp4jCd2q.js";import"./isWellBehavedNumber-BTdz8jY9.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-kLRmp8Nc.js";import"./index-B67Qu5hK.js";import"./index-81KY_DK_.js";import"./renderedTicksSlice--OmlTIq-.js";import"./axisSelectors-CtcLf7W7.js";import"./d3-scale-BSnqKxuH.js";import"./CartesianChart-DYzbJdNk.js";import"./chartDataContext-BpoRQBsX.js";import"./CategoricalChart-ISWmGPOG.js";import"./CartesianAxis-EoQ_2pVo.js";import"./Layer-rOqvObKk.js";import"./Text-X5OcHqR4.js";import"./DOMUtils-CtdcYe6Z.js";import"./Label-gvCBOhLE.js";import"./ZIndexLayer-4xKONL83.js";import"./types-Clw2FxQC.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./Curve-CCuEPsAe.js";import"./step-Dyxzv1f8.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B05rhmS4.js";import"./useAnimationId-CWbLQsSM.js";import"./ActivePoints-DadMhNWA.js";import"./Dot-CTX7NV8r.js";import"./RegisterGraphicalItemId-C0MecWm_.js";import"./ErrorBarContext-DAn4MkTm.js";import"./GraphicalItemClipPath-Ngq7bur3.js";import"./SetGraphicalItem-BUpAV2uu.js";import"./getRadiusAndStrokeWidthFromDot-BP39ATEv.js";import"./ActiveShapeUtils-BsSwQSYp.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const le=["IfOverflow"];export{t as IfOverflow,le as __namedExportsOrder,fe as default};
