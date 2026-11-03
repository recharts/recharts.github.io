import{R as e}from"./iframe-m3pGEKfa.js";import{R as i}from"./zIndexSlice-CiEd_T_p.js";import{C as n}from"./ComposedChart-CsqQifeL.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-SQ0kUj6g.js";import{X as s}from"./XAxis-BaVE9EFQ.js";import{Y as c}from"./YAxis-swa8vM-B.js";import{L as d}from"./Line-DRnRZKUl.js";import{R as g}from"./ReferenceLine-DsacrvP9.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-1_D7OVbj.js";import"./throttle-C3qsSQmj.js";import"./index-Bk15LyvO.js";import"./index-B2FvYHPH.js";import"./RechartsWrapper-B1DLlNjF.js";import"./axisSelectors-BuHzQOVj.js";import"./polarAxisSelectors-BjeSYPTx.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-COa--qib.js";import"./index-CwIe0M5T.js";import"./index-CVYSO0b0.js";import"./renderedTicksSlice-riwhMnsC.js";import"./index-D_gkyxlq.js";import"./fillDefinitions-gM0_oynF.js";import"./CartesianChart-CVVFQDxq.js";import"./ZIndexPortal-CX0wxjxU.js";import"./CategoricalChart-Cbbud_Be.js";import"./CartesianAxis-4cS3xnQT.js";import"./Layer-CWJJdVGN.js";import"./Text-C8slSLt5.js";import"./DOMUtils-CgNaQgzY.js";import"./ZIndexLayer-dW6YEDVz.js";import"./Label-BWwlrPxZ.js";import"./types-NW0KOpFv.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-C8JVR8tL.js";import"./step-JD5lrPB_.js";import"./path-DyVhHtw_.js";import"./LabelList-DpjRmARQ.js";import"./ActivePoints-BT3v0Z1P.js";import"./Dot-Bo6Iz36c.js";import"./activeStyles-Bu9SIE65.js";import"./useAnimationId-CZ85B9in.js";import"./dataEntryStyles-D1ArbIJ7.js";import"./Symbols-C8vox5bW.js";import"./symbol-QU-hqetJ.js";import"./ErrorBarContext-CKCqOaVD.js";import"./SetGraphicalItem-Cdf126o-.js";import"./getRadiusAndStrokeWidthFromDot-fp1uavHZ.js";import"./ActiveShapeUtils-hQzu6D3o.js";import"./useEffectiveDataKey-DabJGTLc.js";import"./CartesianScaleHelper-C9Oze4oB.js";const fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},he=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,he as __namedExportsOrder,fe as default};
