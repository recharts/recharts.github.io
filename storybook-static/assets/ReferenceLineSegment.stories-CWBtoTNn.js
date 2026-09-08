import{a as e}from"./iframe-CNkb7Pxq.js";import{R as i}from"./zIndexSlice-wl2-d2L7.js";import{C as a}from"./ComposedChart-C_D-eBru.js";import{p as n}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-Ck43GCkE.js";import{X as s}from"./XAxis-Cy627mpO.js";import{Y as c}from"./YAxis-Bv4i31q_.js";import{L as d}from"./Line-gVhmKqSC.js";import{R as g}from"./ReferenceLine-wGlmVdew.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D9QF5i1l.js";import"./index-hgSNbj3_.js";import"./index-B0O4glZn.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-LXGJzsB2.js";import"./isWellBehavedNumber-cZPS57La.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CE0LDB2v.js";import"./axisSelectors-D4hfpt9F.js";import"./d3-scale-hNSavMKY.js";import"./index-nHtRpei8.js";import"./index-BkiX-XNJ.js";import"./renderedTicksSlice-DjfT86KI.js";import"./index-D8V4aljY.js";import"./CartesianChart-Dvu2owgZ.js";import"./chartDataContext-eHLxlpVB.js";import"./CategoricalChart-D2oZJ6cq.js";import"./CartesianAxis-UL5z8CfQ.js";import"./Layer-BE_omtYE.js";import"./Text-DlOSKY9M.js";import"./DOMUtils-BQzfSO_G.js";import"./useId-C8-4auv_.js";import"./useBackwardsCompatibleTheme-BLuzOGOd.js";import"./Label-CgRMMdp1.js";import"./ZIndexLayer-V6Rl9PTE.js";import"./types-CyS4-dLr.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BoDwc6R9.js";import"./step-B7Ifq5jY.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Dtnyeebx.js";import"./useAnimationId-BDE8tpoz.js";import"./ActivePoints-Bj-iwanM.js";import"./Dot-BOo7AQIZ.js";import"./RegisterGraphicalItemId-BCZSUoIT.js";import"./ErrorBarContext-D2ajplsz.js";import"./GraphicalItemClipPath-CWom5q5K.js";import"./SetGraphicalItem-ChHo-vHf.js";import"./getRadiusAndStrokeWidthFromDot-Dwt09wXZ.js";import"./ActiveShapeUtils-BcbuTBin.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:n,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
