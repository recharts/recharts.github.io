import{R as e}from"./iframe-CysaVPuT.js";import{R as n}from"./zIndexSlice-CBspyTeT.js";import{C as p}from"./ComposedChart-9ef0ZM8L.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BVNtE_L6.js";import{X as f}from"./XAxis-BHTWnpmK.js";import{Y as l}from"./YAxis-hZ4kGdBq.js";import{L as d}from"./Line-ez-HBiNN.js";import{R as h}from"./ReferenceLine-CxaJccSz.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BijqxQd6.js";import"./index-BoQpP3ng.js";import"./index-C8sovufb.js";import"./get-Dv3cK-ON.js";import"./resolveDefaultProps-CB9Bmy8P.js";import"./isWellBehavedNumber-CHReb6Hq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CXNQztOV.js";import"./index-ClhA1x-k.js";import"./index-CIm0M9H5.js";import"./renderedTicksSlice-L6Kj9uMm.js";import"./axisSelectors-CybQsixZ.js";import"./d3-scale-BWFUWIRC.js";import"./CartesianChart-Dlco-df9.js";import"./chartDataContext-BsGd8oTW.js";import"./CategoricalChart-B4xuyyeZ.js";import"./CartesianAxis-ACLpIvis.js";import"./Layer-DQgbcZ6W.js";import"./Text-DqT5jcn2.js";import"./DOMUtils-z1JZhy6H.js";import"./Label-B_m_1QPA.js";import"./ZIndexLayer-C6PjgPWA.js";import"./types-DWuPiLas.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./Curve-DVkbv2J8.js";import"./step-vxR68qu5.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-HWCD5qdq.js";import"./useAnimationId-XV22nS6k.js";import"./ActivePoints-CQLYJKIJ.js";import"./Dot-dmuSDw2U.js";import"./RegisterGraphicalItemId-BIn5Riid.js";import"./ErrorBarContext-CYyCl8MN.js";import"./GraphicalItemClipPath-DMny06t1.js";import"./SetGraphicalItem-ihbnCYD8.js";import"./getRadiusAndStrokeWidthFromDot-DDSmqaVx.js";import"./ActiveShapeUtils-HeGPuRiV.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
