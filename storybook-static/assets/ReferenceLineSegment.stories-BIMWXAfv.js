import{e}from"./iframe-DjpYK-o-.js";import{R as i}from"./arrayEqualityCheck-BdSiZsNM.js";import{C as p}from"./ComposedChart-5wDZbkHU.js";import{C as a}from"./CartesianGrid-JR9nO7Fn.js";import{X as n}from"./XAxis-Bcdqw-wv.js";import{Y as s}from"./YAxis-BdrmorAZ.js";import{L as c}from"./Line-BFOWOId7.js";import{R as d}from"./ReferenceLine-CeD36VO6.js";import{R as g}from"./RechartsHookInspector-D54qOyzT.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C42G_ffr.js";import"./immer-D4y8T5a7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CauuEd3r.js";import"./index-B9U8pH8P.js";import"./hooks-DMOVvbqY.js";import"./axisSelectors-DOtt8rOg.js";import"./d3-scale-BGWrA6kg.js";import"./zIndexSlice-BwAJg9IA.js";import"./renderedTicksSlice-DA_2QpHv.js";import"./CartesianChart-S0vn2j2X.js";import"./chartDataContext-DMhYHlkG.js";import"./CategoricalChart-DEHztz1y.js";import"./CartesianAxis-BU6WfKzj.js";import"./Layer-ClpAj3mi.js";import"./Text-hUj7bTMa.js";import"./DOMUtils-Bertp5OK.js";import"./Label-Df3TKPqw.js";import"./ZIndexLayer-BYBCo22l.js";import"./types-e-ZS-U8T.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-0Og-Hkqc.js";import"./ActivePoints-0ZU6F1s-.js";import"./Dot-CRJ16IiO.js";import"./RegisterGraphicalItemId-BvqmWFzi.js";import"./ErrorBarContext-DPi1-we4.js";import"./GraphicalItemClipPath-CTrBCXbW.js";import"./SetGraphicalItem-a4oiN2v8.js";import"./useAnimationId-DA-f91a4.js";import"./getRadiusAndStrokeWidthFromDot-DAsawtMn.js";import"./ActiveShapeUtils-Dirt4gFG.js";import"./isPlainObject-Bpjrt-ZA.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B37Ytfod.js";import"./Trapezoid-BWufpwnM.js";import"./Sector-0IwDdBHs.js";import"./Symbols-BYV52fjj.js";import"./symbol-BODo34re.js";import"./step-BxVjdfNs.js";import"./Curve-B8xtuMQr.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DPPgUz6W.js";import"./ChartSizeDimensions-B8zKV2n0.js";import"./OffsetShower-DWnJVUQp.js";import"./PlotAreaShower-B2Ag3HsK.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ye=["Segment"];export{t as Segment,ye as __namedExportsOrder,Re as default};
