import{R as e}from"./iframe-CYE_KjLp.js";import{R as i}from"./zIndexSlice-BJ5AXs-O.js";import{C as a}from"./ComposedChart-FkotVeZi.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-B1GeT-Va.js";import{X as s}from"./XAxis-CSEJquda.js";import{Y as c}from"./YAxis-DWbbwN0w.js";import{L as d}from"./Line-fP0RojnX.js";import{R as g}from"./ReferenceLine-DHQ_9LNN.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CMwKm87I.js";import"./index-Ph9m1nQR.js";import"./index-BT3sj--6.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Bfx-m_zh.js";import"./isWellBehavedNumber-D2iFNJG8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-8_njvAZI.js";import"./index-CwiYvwQ-.js";import"./index-CN526hDZ.js";import"./renderedTicksSlice-Bk_hKtUF.js";import"./axisSelectors-Cz15TeqU.js";import"./d3-scale-BYal7h8i.js";import"./CartesianChart-g8MVdMo8.js";import"./chartDataContext-3J9QrXTl.js";import"./CategoricalChart-DxSK9VeV.js";import"./CartesianAxis-9Uyc6PiW.js";import"./Layer-BAAO02Y6.js";import"./Text-D9p9m1qq.js";import"./DOMUtils-DNa7oSWn.js";import"./Label-DungM5aU.js";import"./ZIndexLayer-Cs3N_7G3.js";import"./types-Bh5it62Q.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-Crkas5dz.js";import"./Curve-DOUq4MA6.js";import"./step-CrVHI12K.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DDp5Wq7I.js";import"./useAnimationId-D2RJw3gt.js";import"./ActivePoints-B2OdHoBR.js";import"./Dot-CNeFMePA.js";import"./RegisterGraphicalItemId-BVUvorB4.js";import"./ErrorBarContext-C6lKsYq3.js";import"./GraphicalItemClipPath-DSlcdUco.js";import"./SetGraphicalItem-DsAOjH_V.js";import"./getRadiusAndStrokeWidthFromDot-eF6yQmlC.js";import"./ActiveShapeUtils-8xIbBFmr.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const se=["Segment"];export{t as Segment,se as __namedExportsOrder,ne as default};
