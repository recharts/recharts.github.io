import{a as e}from"./iframe-CptpVVdK.js";import{R as i}from"./zIndexSlice-CAnxLxZK.js";import{C as a}from"./ComposedChart-Bnlr5v8S.js";import{p as n}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-jU27Ye3i.js";import{X as s}from"./XAxis-r2oUn28C.js";import{Y as c}from"./YAxis-DNukS_kg.js";import{L as d}from"./Line-TfJoKlI6.js";import{R as g}from"./ReferenceLine-BUbVivqL.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BVKLcYc0.js";import"./index-BTwylabs.js";import"./index-alo09WMF.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Bdo80tkX.js";import"./isWellBehavedNumber-Cb3PSSsF.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-c3RFdf0m.js";import"./axisSelectors-DPTiSWkh.js";import"./d3-scale-DZZpobVW.js";import"./index-Dqps63Gr.js";import"./index-CniHkqMt.js";import"./renderedTicksSlice-Cw--JOgv.js";import"./index-Bya_Ui15.js";import"./CartesianChart-kEptpjHt.js";import"./chartDataContext-YVUr32e2.js";import"./CategoricalChart-DUkp-alm.js";import"./CartesianAxis-CgAlW-mI.js";import"./Layer-DZV5gQWy.js";import"./Text-DTbKMiqG.js";import"./pageBackground-0u46-xLx.js";import"./useId-BHxaLpBq.js";import"./useBackwardsCompatibleTheme-Ck1iBTHP.js";import"./Label-DWXJ-Xrk.js";import"./ZIndexLayer-DRWh5tG_.js";import"./dataEntryStyles-pGU1xid_.js";import"./types-LYqggaBA.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-DFA3txiV.js";import"./step-BF-v6b5j.js";import"./path-DyVhHtw_.js";import"./activeStyles-tsd2tFv6.js";import"./useAnimationId-CHix4qCt.js";import"./ActivePoints-E2x2ttJQ.js";import"./Dot-BPOiKA3s.js";import"./RegisterGraphicalItemId-BgCOPa3U.js";import"./ErrorBarContext-BZkeDBub.js";import"./SetGraphicalItem-CBYCujS3.js";import"./getRadiusAndStrokeWidthFromDot-LLnmfsQ1.js";import"./ActiveShapeUtils-D7m_xdxo.js";import"./useEffectiveDataKey-DVLIQZiI.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:n,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,fe as __namedExportsOrder,ge as default};
