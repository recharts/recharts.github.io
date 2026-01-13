import{e}from"./iframe-DIwakdDt.js";import{R as n}from"./arrayEqualityCheck-lRYvQggb.js";import{C as p}from"./ComposedChart-DZdYEtXz.js";import{C as s}from"./CartesianGrid-rKt-n5uW.js";import{X as c}from"./XAxis-BkI1-gXN.js";import{Y as f}from"./YAxis-BVx4kJfi.js";import{L as l}from"./Line-Bwc3LNl1.js";import{R as d}from"./ReferenceLine-CGeMsb7K.js";import{R as h}from"./RechartsHookInspector-CY1ODLVc.js";import{p as w}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DW7u54OO.js";import"./PolarUtils-B3Fap3OI.js";import"./RechartsWrapper-B94VsC0l.js";import"./hooks-DWXVssZN.js";import"./axisSelectors-B4kb62nw.js";import"./zIndexSlice-BsupxljC.js";import"./CartesianChart-DVLAyEBq.js";import"./chartDataContext-DWbSa9NP.js";import"./CategoricalChart-DSVP0XQf.js";import"./CartesianAxis-D7MVicsA.js";import"./Layer-CFi2OPVU.js";import"./Text-D6OkCyx_.js";import"./DOMUtils-B36TL8VT.js";import"./Label-CWjd44lV.js";import"./ZIndexLayer-Cgd7Iecl.js";import"./types-B72H97bN.js";import"./ReactUtils-D3B4C902.js";import"./ActivePoints-DyDkHbPU.js";import"./Dot-DKxmRIiM.js";import"./RegisterGraphicalItemId-mhUZ9dId.js";import"./ErrorBarContext-B4VuOyB0.js";import"./GraphicalItemClipPath-BZiUpPN4.js";import"./SetGraphicalItem-Cri-Qe4J.js";import"./useAnimationId-OdOX1ryX.js";import"./getRadiusAndStrokeWidthFromDot-5N_ef9yY.js";import"./ActiveShapeUtils-Dm9ayMJH.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C0jTOdyj.js";import"./Trapezoid-wlixMr2J.js";import"./Sector-BBGpgSZE.js";import"./Symbols-CAX0rTwl.js";import"./Curve-9VNPy8uR.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DvyeDb-a.js";import"./ChartSizeDimensions-Dw8_76VR.js";import"./OffsetShower-CvNNPebB.js";import"./PlotAreaShower-nYxw-fUs.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
     * assert that when ifOverflow="extendDomain" 1800 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const de=["IfOverflow"];export{t as IfOverflow,de as __namedExportsOrder,le as default};
