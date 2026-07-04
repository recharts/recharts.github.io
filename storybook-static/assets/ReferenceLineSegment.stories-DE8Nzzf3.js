import{R as e}from"./iframe-Ds1J5XKD.js";import{R as i}from"./zIndexSlice-UCyaaMGS.js";import{C as a}from"./ComposedChart-CRkbKJM2.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-BJ2avNT5.js";import{X as s}from"./XAxis-DoWvPRbH.js";import{Y as c}from"./YAxis-eP85-8SJ.js";import{L as d}from"./Line-DuxS_s48.js";import{R as g}from"./ReferenceLine-CHP_NKzm.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BH_VG--i.js";import"./index-Co2IbVNM.js";import"./index-CzrGLoIQ.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Do401MpT.js";import"./isWellBehavedNumber-Dz72kwHe.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BAOT1HW_.js";import"./index-D20-MSnL.js";import"./index-BzzxIcBT.js";import"./renderedTicksSlice-kb1cJng-.js";import"./axisSelectors-Tr36h9al.js";import"./d3-scale-C3U5gPbW.js";import"./CartesianChart-DOdhq5wJ.js";import"./chartDataContext-BhVZbVOm.js";import"./CategoricalChart-wjwwJKX3.js";import"./CartesianAxis-CDp_ZXfj.js";import"./Layer-nVED5kUO.js";import"./Text-jdQ0MfG2.js";import"./DOMUtils-DsCGVJ9c.js";import"./Label-CNOb6BUs.js";import"./ZIndexLayer-DZsY-UK0.js";import"./types-BQazP4PY.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./Curve-C9kHMz3L.js";import"./step-7tBtg14U.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D70ai7P5.js";import"./useAnimationId-CHjE-uiV.js";import"./ActivePoints-Bhs7RZpf.js";import"./Dot-C6VoQzSz.js";import"./RegisterGraphicalItemId-i_epzSee.js";import"./ErrorBarContext-aJ-QmRys.js";import"./GraphicalItemClipPath-BO5z_Dot.js";import"./SetGraphicalItem-qVzcGAlb.js";import"./getRadiusAndStrokeWidthFromDot-BOSN6lTY.js";import"./ActiveShapeUtils-CcQaIRSL.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
