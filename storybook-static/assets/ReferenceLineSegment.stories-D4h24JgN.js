import{R as e}from"./iframe-_8NIVtea.js";import{R as i}from"./zIndexSlice-DHi0zTqt.js";import{C as a}from"./ComposedChart-BQ1MbbEq.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-225WjMr5.js";import{X as s}from"./XAxis-CXj9NRSO.js";import{Y as c}from"./YAxis-Cq9nELWF.js";import{L as d}from"./Line-CCJiTV3u.js";import{R as g}from"./ReferenceLine-C72gdWeb.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DtWKh-al.js";import"./index-CMd9L2k1.js";import"./index-DP0Hg4Uq.js";import"./get-BPH4xIrS.js";import"./resolveDefaultProps-DWak00ij.js";import"./isWellBehavedNumber-C_LYkTy5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Btm1Myi_.js";import"./index-C4r4CwZ3.js";import"./index-DXHSNIUu.js";import"./renderedTicksSlice-BSwSfTVH.js";import"./axisSelectors-B0oXaHqO.js";import"./d3-scale-CJIJLRQO.js";import"./CartesianChart-CyMc8rJv.js";import"./chartDataContext-CURMS4bg.js";import"./CategoricalChart-Cq5j6ts0.js";import"./CartesianAxis-BJg7B04w.js";import"./Layer-CvtIbty1.js";import"./Text-Dn8CYcWJ.js";import"./DOMUtils-DxzVORfb.js";import"./Label-Bho1wkfx.js";import"./ZIndexLayer-D0YIaJsD.js";import"./types-B89ht9kr.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./Curve-7XStj8oj.js";import"./step-BedGzIKx.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BQ9vzcvs.js";import"./useAnimationId-D4zdEFfm.js";import"./ActivePoints-q58bNkUv.js";import"./Dot-BCuViEZD.js";import"./RegisterGraphicalItemId-IKsKal1D.js";import"./ErrorBarContext--tZY8j9K.js";import"./GraphicalItemClipPath-D7_UBVME.js";import"./SetGraphicalItem-rhq5lQpj.js";import"./getRadiusAndStrokeWidthFromDot-CVKaSFAr.js";import"./ActiveShapeUtils-CCiDKEDP.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
