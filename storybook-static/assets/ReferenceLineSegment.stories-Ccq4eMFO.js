import{e}from"./iframe-CKoXL-7H.js";import{R as i}from"./arrayEqualityCheck-GexdJw_D.js";import{C as a}from"./ComposedChart-C7tysGI7.js";import{C as p}from"./CartesianGrid-NqBSLHxo.js";import{X as n}from"./XAxis-rLQI09xS.js";import{Y as s}from"./YAxis-RWI4s0em.js";import{L as c}from"./Line-B6AqF2pF.js";import{R as d}from"./ReferenceLine-B-BG4gkt.js";import{R as g}from"./RechartsHookInspector-CMD5YE2l.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BaEbAQrQ.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-CSLBjixG.js";import"./hooks-Wghpb3Lr.js";import"./axisSelectors-DPsIzSXr.js";import"./zIndexSlice-muSoLd76.js";import"./CartesianChart-BnHhxgzL.js";import"./chartDataContext-Bkp8uQCT.js";import"./CategoricalChart-Nf_fZ3uc.js";import"./CartesianAxis-DXu08t8h.js";import"./Layer-CVCSBl5u.js";import"./Text-BUTkcAxm.js";import"./DOMUtils-BXsvg6Zu.js";import"./Label-Cl7hxCC5.js";import"./ZIndexLayer-0nKnHyxR.js";import"./types-CIdldEzr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DZNkeyHe.js";import"./ActivePoints-0vYfh0ZR.js";import"./Dot-D5rSU5PW.js";import"./RegisterGraphicalItemId-Dd6TmGbZ.js";import"./ErrorBarContext-CfkXyv19.js";import"./GraphicalItemClipPath-CoiOEHHo.js";import"./SetGraphicalItem-B8zEjMN_.js";import"./useAnimationId-2NBy4alx.js";import"./getRadiusAndStrokeWidthFromDot-Dh2Py107.js";import"./ActiveShapeUtils-CJx1zFrR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BLY94iSC.js";import"./Trapezoid-NNoDFDG-.js";import"./Sector-D9S-bODI.js";import"./Symbols-D2digf2k.js";import"./Curve-CYqbtLFF.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DasXKjzD.js";import"./ChartSizeDimensions-CbnBpjpJ.js";import"./OffsetShower-BeXAkU7y.js";import"./PlotAreaShower-otv1tPFG.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <ReferenceLine segment={[{
          x: 'Page A',
          y: 0
        }, {
          x: 'Page E',
          y: 1500
        }]} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ce=["Segment"];export{t as Segment,ce as __namedExportsOrder,se as default};
