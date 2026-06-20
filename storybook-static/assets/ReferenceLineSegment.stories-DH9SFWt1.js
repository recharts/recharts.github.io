import{R as e}from"./iframe-DXxYhCFt.js";import{R as i}from"./zIndexSlice-qI1U9rrE.js";import{C as a}from"./ComposedChart-BYcLXDZ1.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-Cc40lTV8.js";import{X as s}from"./XAxis-C9NpqiLb.js";import{Y as c}from"./YAxis-fukBbkBQ.js";import{L as d}from"./Line-Cp4Gdh_1.js";import{R as g}from"./ReferenceLine-Dodt6xfk.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-D7akT6tS.js";import"./index-CK1-JLS2.js";import"./index-B4aunhTl.js";import"./get-DDC6WZq8.js";import"./resolveDefaultProps-Bho5O1tb.js";import"./isWellBehavedNumber-CZeoqkhJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DlzjOLMT.js";import"./index-cTUjJegW.js";import"./index-BxnCQVmB.js";import"./renderedTicksSlice-3Dm4ElKF.js";import"./axisSelectors-CmDHWXKB.js";import"./d3-scale-rcor9ivz.js";import"./CartesianChart-DvdTpmiF.js";import"./chartDataContext-Bh9U9MSr.js";import"./CategoricalChart-DnXiIflv.js";import"./CartesianAxis-DhUSnw0c.js";import"./Layer-BUsxcvuT.js";import"./Text-BFOIQrpY.js";import"./DOMUtils-Bd7kqUhA.js";import"./Label-C324QdBW.js";import"./ZIndexLayer-DA8tUdaM.js";import"./types-AXOViau4.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./Curve-BoZszlOQ.js";import"./step-CUCP3dE9.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-u581L8cQ.js";import"./useAnimationId-B_zUITBn.js";import"./ActivePoints-Br1nV-ho.js";import"./Dot-D-QyW_An.js";import"./RegisterGraphicalItemId-zrXRLiIJ.js";import"./ErrorBarContext-oapAiLxU.js";import"./GraphicalItemClipPath-qvKBcuDL.js";import"./SetGraphicalItem-UU_FN1uP.js";import"./getRadiusAndStrokeWidthFromDot-BS98lfES.js";import"./ActiveShapeUtils-BJbjDOel.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ne=["Segment"];export{t as Segment,ne as __namedExportsOrder,pe as default};
