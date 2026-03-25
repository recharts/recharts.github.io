import{e as t}from"./iframe-DjpYK-o-.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-BdSiZsNM.js";import{B as p}from"./BarChart-SRve4g1y.js";import{X as l}from"./XAxis-Bcdqw-wv.js";import{Y as h}from"./YAxis-BdrmorAZ.js";import{B as c}from"./Brush-BVSpBcid.js";import{B as x}from"./Bar-C5k8OHgR.js";import{R as u}from"./RechartsHookInspector-D54qOyzT.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C42G_ffr.js";import"./immer-D4y8T5a7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CauuEd3r.js";import"./index-B9U8pH8P.js";import"./hooks-DMOVvbqY.js";import"./axisSelectors-DOtt8rOg.js";import"./d3-scale-BGWrA6kg.js";import"./zIndexSlice-BwAJg9IA.js";import"./renderedTicksSlice-DA_2QpHv.js";import"./CartesianChart-S0vn2j2X.js";import"./chartDataContext-DMhYHlkG.js";import"./CategoricalChart-DEHztz1y.js";import"./CartesianAxis-BU6WfKzj.js";import"./Layer-ClpAj3mi.js";import"./Text-hUj7bTMa.js";import"./DOMUtils-Bertp5OK.js";import"./Label-Df3TKPqw.js";import"./ZIndexLayer-BYBCo22l.js";import"./types-e-ZS-U8T.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-B9R-p_Gz.js";import"./ReactUtils-0Og-Hkqc.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Dirt4gFG.js";import"./isPlainObject-Bpjrt-ZA.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B37Ytfod.js";import"./useAnimationId-DA-f91a4.js";import"./Trapezoid-BWufpwnM.js";import"./Sector-0IwDdBHs.js";import"./Symbols-BYV52fjj.js";import"./symbol-BODo34re.js";import"./step-BxVjdfNs.js";import"./Curve-B8xtuMQr.js";import"./RegisterGraphicalItemId-BvqmWFzi.js";import"./ErrorBarContext-DPi1-we4.js";import"./GraphicalItemClipPath-CTrBCXbW.js";import"./SetGraphicalItem-a4oiN2v8.js";import"./getZIndexFromUnknown-uz_fzXUu.js";import"./graphicalItemSelectors-flsEnbXY.js";import"./index-DPPgUz6W.js";import"./ChartSizeDimensions-B8zKV2n0.js";import"./OffsetShower-DWnJVUQp.js";import"./PlotAreaShower-B2Ag3HsK.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const [dragIndexes, setDragIndexes] = React.useState<BrushStartEndIndex>({
      startIndex: 0,
      endIndex: dateWithValueData.length - 1
    });
    return (
      // Calc compensates for the text above the chart
      <div style={{
        width: '100%',
        height: 'calc(100% - 84px)'
      }}>
        <div>
          Start index:
          {dragIndexes.startIndex}
        </div>
        <div>
          End index:
          {dragIndexes.endIndex}
        </div>
        <ResponsiveContainer>
          <BarChart data={dateWithValueData}>
            <XAxis dataKey="value" />
            <YAxis />
            <Brush dataKey="name" height={30} onDragEnd={indexes => {
              setDragIndexes(indexes as BrushStartEndIndex);
            }} />
            <Bar dataKey="value" />
            <RechartsHookInspector />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const vt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,vt as __namedExportsOrder,It as default};
