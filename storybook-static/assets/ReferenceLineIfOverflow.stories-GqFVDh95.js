import{R as e}from"./iframe-DGZg1BaY.js";import{R as n}from"./zIndexSlice-RSobkBfJ.js";import{C as p}from"./ComposedChart-CYWMV96h.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Cxo9TLCz.js";import{X as f}from"./XAxis-BkrEDfGE.js";import{Y as l}from"./YAxis-BZtV9zAx.js";import{L as d}from"./Line-BjwcwMYh.js";import{R as h}from"./ReferenceLine-BMUD2-BU.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BT6VGnPe.js";import"./index-Cct5a00b.js";import"./index-clGj1WHq.js";import"./get-DY0OjSK6.js";import"./resolveDefaultProps-BjAvdkCv.js";import"./isWellBehavedNumber-0KuhYisV.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bacgswk5.js";import"./index-CkL0GuEG.js";import"./index-BXki0_jB.js";import"./renderedTicksSlice-Dewx_RJS.js";import"./axisSelectors-CdelNDSz.js";import"./d3-scale-CTB_TOgf.js";import"./CartesianChart-BJ5L6c8p.js";import"./chartDataContext-Cq7x5jLr.js";import"./CategoricalChart-BMzuLFGj.js";import"./CartesianAxis-DDEi9eFQ.js";import"./Layer--_bnQ9Ul.js";import"./Text-BqNTVXko.js";import"./DOMUtils-BzC8w9yF.js";import"./Label-B4XUjnXV.js";import"./ZIndexLayer-5g4pRwMA.js";import"./types-CUzx8cK0.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./Curve-BNlPs19R.js";import"./step-BQdN9BCS.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CAvgFIRj.js";import"./useAnimationId-CGxH7MOe.js";import"./ActivePoints-DJFCrMTb.js";import"./Dot-DiO2Qmm4.js";import"./RegisterGraphicalItemId-BYwdAoF6.js";import"./ErrorBarContext-DCQzTmNl.js";import"./GraphicalItemClipPath-gslOIRLN.js";import"./SetGraphicalItem-BCxyd91k.js";import"./getRadiusAndStrokeWidthFromDot-BOdJyA31.js";import"./ActiveShapeUtils-Dc_2IcP9.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
