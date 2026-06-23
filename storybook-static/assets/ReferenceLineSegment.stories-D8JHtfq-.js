import{R as e}from"./iframe-DGZg1BaY.js";import{R as i}from"./zIndexSlice-RSobkBfJ.js";import{C as a}from"./ComposedChart-CYWMV96h.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-Cxo9TLCz.js";import{X as s}from"./XAxis-BkrEDfGE.js";import{Y as c}from"./YAxis-BZtV9zAx.js";import{L as d}from"./Line-BjwcwMYh.js";import{R as g}from"./ReferenceLine-BMUD2-BU.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BT6VGnPe.js";import"./index-Cct5a00b.js";import"./index-clGj1WHq.js";import"./get-DY0OjSK6.js";import"./resolveDefaultProps-BjAvdkCv.js";import"./isWellBehavedNumber-0KuhYisV.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bacgswk5.js";import"./index-CkL0GuEG.js";import"./index-BXki0_jB.js";import"./renderedTicksSlice-Dewx_RJS.js";import"./axisSelectors-CdelNDSz.js";import"./d3-scale-CTB_TOgf.js";import"./CartesianChart-BJ5L6c8p.js";import"./chartDataContext-Cq7x5jLr.js";import"./CategoricalChart-BMzuLFGj.js";import"./CartesianAxis-DDEi9eFQ.js";import"./Layer--_bnQ9Ul.js";import"./Text-BqNTVXko.js";import"./DOMUtils-BzC8w9yF.js";import"./Label-B4XUjnXV.js";import"./ZIndexLayer-5g4pRwMA.js";import"./types-CUzx8cK0.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./Curve-BNlPs19R.js";import"./step-BQdN9BCS.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CAvgFIRj.js";import"./useAnimationId-CGxH7MOe.js";import"./ActivePoints-DJFCrMTb.js";import"./Dot-DiO2Qmm4.js";import"./RegisterGraphicalItemId-BYwdAoF6.js";import"./ErrorBarContext-DCQzTmNl.js";import"./GraphicalItemClipPath-gslOIRLN.js";import"./SetGraphicalItem-BCxyd91k.js";import"./getRadiusAndStrokeWidthFromDot-BOdJyA31.js";import"./ActiveShapeUtils-Dc_2IcP9.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
