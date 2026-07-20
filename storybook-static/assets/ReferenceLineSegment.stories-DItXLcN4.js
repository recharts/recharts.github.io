import{R as e}from"./iframe-CZrGjRVd.js";import{R as i}from"./zIndexSlice-DVGip-HY.js";import{C as a}from"./ComposedChart-BOBoYmjb.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-GyzhCgPJ.js";import{X as s}from"./XAxis-CseioX8F.js";import{Y as c}from"./YAxis-DvRRjJMV.js";import{L as d}from"./Line-v0oLTd-W.js";import{R as g}from"./ReferenceLine-x3fmMMW8.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-iaCNi1Qj.js";import"./index-DAuCYBcx.js";import"./index-BqYtnYZK.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DJ2k4-YE.js";import"./isWellBehavedNumber-sGwfAa8m.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Db3bv7S_.js";import"./index-BNgNXemJ.js";import"./index-DxrI-k1l.js";import"./renderedTicksSlice-BcK_sHSr.js";import"./axisSelectors-DxaBLx_c.js";import"./d3-scale-uXV0YxbH.js";import"./CartesianChart-D-HZeUFd.js";import"./chartDataContext-DtAKwxQ-.js";import"./CategoricalChart-BkyPecya.js";import"./CartesianAxis-Bv2Blqsa.js";import"./Layer-CQqaCNmW.js";import"./Text-BZ2aXp_V.js";import"./DOMUtils-DGi0GryR.js";import"./Label-D0FS6r7s.js";import"./ZIndexLayer-BIAG6lUs.js";import"./types-BqsVHy7N.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-Crkas5dz.js";import"./Curve-DmlyDZC5.js";import"./step-1n_WS_bQ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CMzmfQX_.js";import"./useAnimationId-Dfan-wHL.js";import"./ActivePoints-DzdtVF-l.js";import"./Dot-B_n5UQyN.js";import"./RegisterGraphicalItemId-CHZ0a46K.js";import"./ErrorBarContext-putfb1U3.js";import"./GraphicalItemClipPath-CrMwIhJh.js";import"./SetGraphicalItem-DKI6WvVx.js";import"./getRadiusAndStrokeWidthFromDot-DAppAzWA.js";import"./ActiveShapeUtils-Cxg-zL3x.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
