import{e}from"./iframe-B6PVJaTx.js";import{R as n}from"./arrayEqualityCheck--l5nbOOj.js";import{C as p}from"./ComposedChart-BmpGplUO.js";import{C as s}from"./CartesianGrid-mAYc4o0w.js";import{X as c}from"./XAxis-B6nzW_y2.js";import{Y as f}from"./YAxis-D3KHnhFR.js";import{L as l}from"./Line-D8kksclE.js";import{R as d}from"./ReferenceLine-CgB9qwmU.js";import{R as h}from"./RechartsHookInspector-DAdFhUj3.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-SbZpfCF8.js";import"./immer-C_TrIJMh.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BP-lLfVx.js";import"./index-BYl1MF2O.js";import"./hooks-CMcsnkVg.js";import"./axisSelectors-Bycocccg.js";import"./d3-scale-B9ZoAAf3.js";import"./zIndexSlice-67Af1QFi.js";import"./renderedTicksSlice-BgZ61m11.js";import"./CartesianChart-VouzMpCB.js";import"./chartDataContext-KAdJCeqF.js";import"./CategoricalChart-BKdjoORw.js";import"./CartesianAxis-DZRbozUC.js";import"./Layer-B8Qqjz1b.js";import"./Text-C0kuQw6e.js";import"./DOMUtils-C2NDlTFm.js";import"./Label-BcLUaBCG.js";import"./ZIndexLayer-d-D4FVJh.js";import"./types-D2EFyeKu.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BX8s_uVv.js";import"./ActivePoints-DKGt-sO1.js";import"./Dot-D4UjwoyQ.js";import"./RegisterGraphicalItemId-u9lrCCFO.js";import"./ErrorBarContext-CPj1LVBL.js";import"./GraphicalItemClipPath-BvACd4D_.js";import"./SetGraphicalItem-D73Bmw1S.js";import"./useAnimationId-BQkpZnA1.js";import"./getRadiusAndStrokeWidthFromDot-BFZegUjF.js";import"./ActiveShapeUtils-B_lqA0BU.js";import"./isPlainObject-BDf_CSQT.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BTXCPNQZ.js";import"./Trapezoid-B69mIrTK.js";import"./Sector-DBXvXTeF.js";import"./Symbols-D85bhFp3.js";import"./symbol-JouRlcFh.js";import"./step-D3frr3Yw.js";import"./Curve-DFsvHQ10.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DliOLYsg.js";import"./ChartSizeDimensions-DJ4EsjSA.js";import"./OffsetShower-BD_1fIgB.js";import"./PlotAreaShower-CzP38MFh.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
