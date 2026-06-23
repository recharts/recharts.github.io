import{R as e}from"./iframe-pl42v7Eu.js";import{R as i}from"./zIndexSlice-D6Ury5DQ.js";import{C as a}from"./ComposedChart-Bj059aV9.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-COBbHqLx.js";import{X as s}from"./XAxis-0siPSpiK.js";import{Y as c}from"./YAxis-CTEyBNt3.js";import{L as d}from"./Line-BLy4f1Fi.js";import{R as g}from"./ReferenceLine-BmYBVWmQ.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-C_PxOxT8.js";import"./index-Df70QOpj.js";import"./index-ntLeohj2.js";import"./get-Ci1Zslo5.js";import"./resolveDefaultProps-BgT3I9Pa.js";import"./isWellBehavedNumber-B6cHM4DS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ByLHuOcy.js";import"./index-BTDreE9O.js";import"./index-Cmb4UkZ_.js";import"./renderedTicksSlice-nJaW__V7.js";import"./axisSelectors-49otWNoQ.js";import"./d3-scale-EDGtIYyd.js";import"./CartesianChart-CkSibwuY.js";import"./chartDataContext-BUPOQjbb.js";import"./CategoricalChart-BDx0yEeS.js";import"./CartesianAxis-Dyaa3QOt.js";import"./Layer-DIETCOs-.js";import"./Text-DHqN6Wmv.js";import"./DOMUtils-C0435NEl.js";import"./Label-jH0IUTIN.js";import"./ZIndexLayer-DHOvoudh.js";import"./types-Cax0x9Pi.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./Curve-V8Cs5yUz.js";import"./step-BQEtcvlA.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-wt0_sn45.js";import"./useAnimationId-bxLMfI7c.js";import"./ActivePoints-sxoM3gYg.js";import"./Dot-BMK0KkKw.js";import"./RegisterGraphicalItemId-Rj2Lqe9e.js";import"./ErrorBarContext-BQo0CyvO.js";import"./GraphicalItemClipPath-CviR7UKP.js";import"./SetGraphicalItem-BX03rWwK.js";import"./getRadiusAndStrokeWidthFromDot-5IlnILBr.js";import"./ActiveShapeUtils-DL8AZGaA.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
