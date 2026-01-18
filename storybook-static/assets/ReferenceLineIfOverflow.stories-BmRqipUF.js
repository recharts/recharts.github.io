import{e}from"./iframe-B_ZhM03Y.js";import{R as n}from"./arrayEqualityCheck-CloHfm1b.js";import{C as p}from"./ComposedChart-QL3NRICu.js";import{C as s}from"./CartesianGrid-BhaeF8ti.js";import{X as c}from"./XAxis-BwiG5zlQ.js";import{Y as f}from"./YAxis-MqnRM2TT.js";import{L as l}from"./Line-C29t8JSR.js";import{R as d}from"./ReferenceLine-D5qNMTme.js";import{R as h}from"./RechartsHookInspector-CedEGYW7.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C2hO3de9.js";import"./PolarUtils-CgPgv3CO.js";import"./RechartsWrapper-u6yQp6qc.js";import"./hooks-C0kAm8Eo.js";import"./axisSelectors-CpGC88wy.js";import"./zIndexSlice-DOM2ZPVV.js";import"./CartesianChart-Re97mOhW.js";import"./chartDataContext-BdXMgBWg.js";import"./CategoricalChart-B5rfhQvt.js";import"./CartesianAxis-B6B84b8_.js";import"./Layer-BOxBWqHH.js";import"./Text-DQMzR-Rn.js";import"./DOMUtils-DIxanI67.js";import"./Label-G2FvxRoa.js";import"./ZIndexLayer-DQM-WqDQ.js";import"./types-CPNOLsga.js";import"./ReactUtils-CV9gD_3H.js";import"./ActivePoints-ypNM3A09.js";import"./Dot-CuMCJhAb.js";import"./RegisterGraphicalItemId-DXkXPQtf.js";import"./ErrorBarContext-B6sGO-tf.js";import"./GraphicalItemClipPath-ju3MUMLR.js";import"./SetGraphicalItem-DKzya-iG.js";import"./useAnimationId-GdkLb2Sd.js";import"./getRadiusAndStrokeWidthFromDot-Cx0j_eyy.js";import"./ActiveShapeUtils-C6bCBIkh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CXZfm4Mc.js";import"./Trapezoid-Bxl0rgJp.js";import"./Sector-zu_K_Cyg.js";import"./Symbols-B_O8HrI4.js";import"./Curve-CacS2CA9.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-C4JY2suC.js";import"./ChartSizeDimensions-Bu3QszIW.js";import"./OffsetShower-C0fU06Jz.js";import"./PlotAreaShower-Mptvcbb5.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
