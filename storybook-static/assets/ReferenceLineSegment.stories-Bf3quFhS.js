import{e}from"./iframe-BRu_qZg1.js";import{R as i}from"./arrayEqualityCheck-BgwbYKtC.js";import{C as p}from"./ComposedChart-BejM8Hgg.js";import{C as a}from"./CartesianGrid-fEnEi-FK.js";import{X as n}from"./XAxis-CkACgIfp.js";import{Y as s}from"./YAxis-BW9q8bD-.js";import{L as c}from"./Line-BQ93j6Ys.js";import{R as d}from"./ReferenceLine-BaTwax57.js";import{R as g}from"./RechartsHookInspector-CJy-wMRv.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-ClDGSYA8.js";import"./immer-CiIZXnz-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B9gb15RL.js";import"./index-DYVbWT0W.js";import"./hooks-cMPGG-ti.js";import"./axisSelectors-WgiG_2zA.js";import"./d3-scale-DgD4kZyM.js";import"./zIndexSlice-CjcwtRul.js";import"./renderedTicksSlice-XQiDw47v.js";import"./CartesianChart-DNVXg1S9.js";import"./chartDataContext-BYCMtEPQ.js";import"./CategoricalChart-CRbty2Pg.js";import"./CartesianAxis-D1FaLS9g.js";import"./Layer-BK1KTr5e.js";import"./Text-CZ6mhO2l.js";import"./DOMUtils-Np4d91u5.js";import"./Label-PVHJRfQa.js";import"./ZIndexLayer-C8D4smXi.js";import"./types-CV4LMBiy.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-gnwCD4Om.js";import"./ActivePoints-lX6lnj3q.js";import"./Dot-DbWS2m0E.js";import"./RegisterGraphicalItemId-KDJ0wyU8.js";import"./ErrorBarContext-CfL1_1JT.js";import"./GraphicalItemClipPath-rMExk2wU.js";import"./SetGraphicalItem-DZJju-u_.js";import"./useAnimationId-D8a-5J-X.js";import"./getRadiusAndStrokeWidthFromDot-CXiKui9m.js";import"./ActiveShapeUtils-jyCby69N.js";import"./isPlainObject-Dl8lI7a1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C99z7Ziu.js";import"./Trapezoid-CJsPOYXY.js";import"./Sector-7rMGIqOV.js";import"./Symbols-DM4rdUCn.js";import"./symbol-D-gvh6cA.js";import"./step-XF9-athh.js";import"./Curve-CSGMMXpz.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CUWwfEzD.js";import"./ChartSizeDimensions-DNlI3sC4.js";import"./OffsetShower-Cm8zLz0R.js";import"./PlotAreaShower-Bj1zpgLw.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ye=["Segment"];export{t as Segment,ye as __namedExportsOrder,Re as default};
