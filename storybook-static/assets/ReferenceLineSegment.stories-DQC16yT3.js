import{a as e}from"./iframe-SuqF0IOU.js";import{R as i}from"./zIndexSlice-DfamN9Zs.js";import{C as a}from"./ComposedChart-BtkawvAi.js";import{p as n}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-DMiSp8n0.js";import{X as s}from"./XAxis-DR2rtjC5.js";import{Y as c}from"./YAxis-CUvLYKI6.js";import{L as d}from"./Line-BjrkBSD6.js";import{R as g}from"./ReferenceLine-DE_UVzed.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D6-FoWPM.js";import"./index-DY-qAKzO.js";import"./index-iK0jM_n6.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-7DzpjnqO.js";import"./isWellBehavedNumber-DJK-MsfJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bg2tG11C.js";import"./axisSelectors-DbgUQ8Ul.js";import"./d3-scale-DnD8-5rl.js";import"./index-DLroYRR9.js";import"./index-VBcGpDGq.js";import"./renderedTicksSlice-DomOKpq5.js";import"./index-DHZGQ52F.js";import"./CartesianChart-Cji0pvqd.js";import"./chartDataContext-B0QyEg6f.js";import"./CategoricalChart-D2xX8P6u.js";import"./CartesianAxis-Bvk6yXFf.js";import"./Layer-CeZWaGzt.js";import"./Text-UuMUK1_u.js";import"./DOMUtils-DsJOOh9b.js";import"./useId-CsqHk6Y-.js";import"./useBackwardsCompatibleTheme-C6-DbdWl.js";import"./Label-9O6_T9C4.js";import"./ZIndexLayer-BN_mfTvc.js";import"./types-CS_OGYEB.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./Curve-E3qca46q.js";import"./step-Crr8VZH2.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DXL71NvC.js";import"./useAnimationId-ol_mxPID.js";import"./ActivePoints-BPtrfnyz.js";import"./Dot-Bait8-xr.js";import"./RegisterGraphicalItemId-BaNEX7Pr.js";import"./ErrorBarContext-BJEyAykc.js";import"./GraphicalItemClipPath-TmHiHpN1.js";import"./SetGraphicalItem-C7X7ybgb.js";import"./getRadiusAndStrokeWidthFromDot-Di11GS2z.js";import"./ActiveShapeUtils-DYWxkXZ9.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:n,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
