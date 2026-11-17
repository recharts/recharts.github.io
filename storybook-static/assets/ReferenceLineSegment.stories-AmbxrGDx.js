import{R as e}from"./iframe-waGCAeMO.js";import{R as i}from"./zIndexSlice-Bs9eWJkZ.js";import{C as n}from"./ComposedChart-C-dH4vpB.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-K2byEmuF.js";import{X as s}from"./XAxis-C97Th9HK.js";import{Y as c}from"./YAxis-Bp6_7tMg.js";import{L as d}from"./Line-DJadcpEB.js";import{R as g}from"./ReferenceLine-C2_kuWjR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Dpi9F_1z.js";import"./throttle-CoYevXVP.js";import"./index-CcRKR-Wz.js";import"./index-DUwJtu9Y.js";import"./RechartsWrapper-DrhKOT3w.js";import"./axisSelectors-BpNK-g3S.js";import"./polarAxisSelectors-DtiraoLM.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-FqfjaXEu.js";import"./index-kB8F1Br5.js";import"./index-3B7lt2Ve.js";import"./renderedTicksSlice-ClDU73ld.js";import"./index-11RgyOoZ.js";import"./fillDefinitions-DkO2tIQI.js";import"./CartesianChart-7iyfeH7l.js";import"./chartDataContext-BbqISvQG.js";import"./CategoricalChart-D2Hb9hNl.js";import"./CartesianAxis-BDzG2Gtt.js";import"./Layer-dmB1mICY.js";import"./Text-C-WU5iwS.js";import"./ZIndexLayer-B2QwwaI-.js";import"./Label-Chhp1CRe.js";import"./types-DrCFt1uv.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-D4lP154T.js";import"./Curve-Cb7BkQkF.js";import"./step-CvjzszA2.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-DwD17VpV.js";import"./ActivePoints-SMrH9LpN.js";import"./Dot-KwlPPybH.js";import"./activeStyles-Db3JHrE0.js";import"./useAnimationId-DGRCx4ie.js";import"./Symbols-sTKgXRyZ.js";import"./symbol-CRbcfw6A.js";import"./ErrorBarContext-DLQUfAIY.js";import"./SetGraphicalItem-DY5DQdLd.js";import"./ActiveShapeUtils-BuFZhuT8.js";import"./useEffectiveDataKey-DONRPZmA.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,ge as __namedExportsOrder,de as default};
