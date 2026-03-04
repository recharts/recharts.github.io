import{e}from"./iframe-BWK9ES1u.js";import{R as n}from"./arrayEqualityCheck-C3hQ_dNx.js";import{C as p}from"./ComposedChart-Dkw93O4i.js";import{C as s}from"./CartesianGrid-DD0voXW7.js";import{X as c}from"./XAxis-DPIaAqKp.js";import{Y as f}from"./YAxis--KyRCAkW.js";import{L as l}from"./Line-WEZT4w3U.js";import{R as d}from"./ReferenceLine-BUMevbUN.js";import{R as h}from"./RechartsHookInspector-PHAVE2qS.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-UiVGC4WG.js";import"./immer-H-Wjh2uu.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BOGHGYF3.js";import"./index-CFdRl6ey.js";import"./hooks-7NwdUe8t.js";import"./axisSelectors-_XyMcvnR.js";import"./d3-scale-BLK5VF-M.js";import"./zIndexSlice-D32FYtu3.js";import"./renderedTicksSlice-DeqeruMc.js";import"./CartesianChart-CW6-YABt.js";import"./chartDataContext-cUJ3hXxI.js";import"./CategoricalChart-BCO7gYoN.js";import"./CartesianAxis-DXQ2RzcP.js";import"./Layer-FfNANwFp.js";import"./Text-D_AFYo3_.js";import"./DOMUtils-BiksdwSe.js";import"./Label-CkGBtdJT.js";import"./ZIndexLayer-bCgYEHqC.js";import"./types-BDXHojhp.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CHwdflEM.js";import"./ActivePoints-BYRAlD7T.js";import"./Dot-WO8tOduR.js";import"./RegisterGraphicalItemId-Dl_9XwyC.js";import"./ErrorBarContext-pBc660wi.js";import"./GraphicalItemClipPath-Cpkp19yU.js";import"./SetGraphicalItem-sg4XQgsj.js";import"./useAnimationId-CpY_S6-T.js";import"./getRadiusAndStrokeWidthFromDot-DGvf84G4.js";import"./ActiveShapeUtils-pcY95NPm.js";import"./isPlainObject-CWcMf8n5.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BQknosyX.js";import"./Trapezoid-2vK08j-g.js";import"./Sector-Bmz-EyPe.js";import"./Symbols-CaAoNy9I.js";import"./symbol-CBLdl9lx.js";import"./step-DmOlkDZ0.js";import"./Curve-W2IHKA5j.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CIhAteaz.js";import"./ChartSizeDimensions-6JZOYWf1.js";import"./OffsetShower-D5r1e2Xk.js";import"./PlotAreaShower-DQz1z3XL.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const Ce=["IfOverflow"];export{t as IfOverflow,Ce as __namedExportsOrder,Re as default};
