import{e}from"./iframe-oUl0Edsa.js";import{R as n}from"./arrayEqualityCheck-DO0IznND.js";import{C as p}from"./ComposedChart-BhkpT6ho.js";import{C as s}from"./CartesianGrid-Di7JZSsJ.js";import{X as c}from"./XAxis-CkmpPqZg.js";import{Y as f}from"./YAxis-B5DZSFg9.js";import{L as l}from"./Line-WQvpZLVg.js";import{R as d}from"./ReferenceLine-C9dchkri.js";import{R as h}from"./RechartsHookInspector-DzCPY6-s.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CAhGbC_6.js";import"./immer-B4_TuAzJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-hGE8ryIc.js";import"./index-BpdNigRW.js";import"./hooks-BR4mxfYm.js";import"./axisSelectors-oQCI-_oE.js";import"./d3-scale-vJidlWzy.js";import"./zIndexSlice-DaoY5asK.js";import"./renderedTicksSlice-BwLnTfQZ.js";import"./CartesianChart-QkTvUAzL.js";import"./chartDataContext-0PCCbTAT.js";import"./CategoricalChart-D3ZmkNqf.js";import"./CartesianAxis-DHjsb2H9.js";import"./Layer-D8QuYoPE.js";import"./Text-CIurUiqp.js";import"./DOMUtils-QcPDFTXM.js";import"./Label-CQcshbP4.js";import"./ZIndexLayer-Dv9xqvVt.js";import"./types-DJAvwsGW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DtRK-XUg.js";import"./ActivePoints-BgKB9eRs.js";import"./Dot-BoytNhYo.js";import"./RegisterGraphicalItemId-D0Ds9Sqy.js";import"./ErrorBarContext-B_Z1VglQ.js";import"./GraphicalItemClipPath-BI0ffFR3.js";import"./SetGraphicalItem-DwmwyDT6.js";import"./useAnimationId-Ce3W7lPK.js";import"./getRadiusAndStrokeWidthFromDot-CThWr5VZ.js";import"./ActiveShapeUtils-CRXMg51J.js";import"./isPlainObject-kds9_JFm.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CWqU2ttX.js";import"./Trapezoid-D_tQTiyy.js";import"./Sector-CpUI0G8W.js";import"./Symbols-Byia_tNj.js";import"./symbol-BAzjQ5Pa.js";import"./step-DDhJKU_a.js";import"./Curve-DW9fdXku.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CrxHXiCq.js";import"./ChartSizeDimensions-BcXpSJ4G.js";import"./OffsetShower-CWs6Hx-m.js";import"./PlotAreaShower-CXnVCFpH.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
