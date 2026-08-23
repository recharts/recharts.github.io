import{a as e}from"./iframe-D_Sr4lJG.js";import{R as i}from"./zIndexSlice-D0QIWFDJ.js";import{C as a}from"./ComposedChart-ZURsynXK.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-B3y5rILo.js";import{X as s}from"./XAxis-CiVYw4TJ.js";import{Y as c}from"./YAxis-CK9b0jPJ.js";import{L as d}from"./Line-CUH4TpmU.js";import{R as g}from"./ReferenceLine-oGPD4QZ0.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DGVbE07Y.js";import"./index-DzVo4Gjf.js";import"./index-Bx0q42bk.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BKaajls5.js";import"./isWellBehavedNumber-Dv4TPBJ2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BTyxoPDx.js";import"./index-CqdW1tHD.js";import"./index-DYQHTRz1.js";import"./axisSelectors-B4F-1YW3.js";import"./d3-scale-DfRtt2DS.js";import"./renderedTicksSlice-DGuDkWT4.js";import"./CartesianChart-JxmHMprN.js";import"./chartDataContext-AwrwRhEc.js";import"./CategoricalChart-DKW5S15G.js";import"./CartesianAxis-B-dcY2MJ.js";import"./Layer-D9Oc_uBt.js";import"./Text-DkNPAJgx.js";import"./DOMUtils-zvxYmMZo.js";import"./useId-Dl8Yfg4u.js";import"./useBackwardsCompatibleTheme-Kv-Z1TIM.js";import"./Label-CeC9waPr.js";import"./ZIndexLayer-Cx1K1yql.js";import"./types-D5gXUhG3.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./Curve-5OWOJy9s.js";import"./step-BEJyHAO7.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DooKJjtX.js";import"./useAnimationId-KZvr8oE4.js";import"./ActivePoints-BSKOHmnc.js";import"./Dot-yV7k0mxe.js";import"./RegisterGraphicalItemId-DO9NFESU.js";import"./ErrorBarContext-pr_CmNON.js";import"./GraphicalItemClipPath-BKqVnbRS.js";import"./SetGraphicalItem-DDVudLdC.js";import"./getRadiusAndStrokeWidthFromDot-DctFTReD.js";import"./ActiveShapeUtils-CYI-DMZT.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ge=["Segment"];export{t as Segment,ge as __namedExportsOrder,de as default};
