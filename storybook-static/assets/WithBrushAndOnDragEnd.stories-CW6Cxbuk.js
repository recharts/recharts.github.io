import{e as t}from"./iframe-B9GGDGS1.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-COtCLy3x.js";import{B as p}from"./BarChart-DAjhWKso.js";import{X as l}from"./XAxis-BhXpxA_M.js";import{Y as h}from"./YAxis-CQFlmWqm.js";import{B as c}from"./Brush-CdQJumtX.js";import{B as x}from"./Bar-DkJ5y87b.js";import{R as u}from"./RechartsHookInspector-BWkI8hZR.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CwlEvTRj.js";import"./immer-D8haotDT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-EHfwRfBb.js";import"./index-D1V-1Kud.js";import"./hooks-C2J7naOZ.js";import"./axisSelectors-8xv55RbV.js";import"./d3-scale-CJw_J5vV.js";import"./zIndexSlice-Dr0l4bHj.js";import"./renderedTicksSlice-q0M83NPg.js";import"./CartesianChart-YXzBIFVQ.js";import"./chartDataContext-Z-R_60d5.js";import"./CategoricalChart-BBfSxrd4.js";import"./CartesianAxis-DyjzRIeL.js";import"./Layer-DcWLpeG9.js";import"./Text-BfPYOH_N.js";import"./DOMUtils-BTQMQKLS.js";import"./Label-DbaG7Uem.js";import"./ZIndexLayer-CbIo1jp-.js";import"./types-88pgmlG4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-ClpJvol4.js";import"./ReactUtils-CrjF-zMe.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DstCBXr6.js";import"./isPlainObject-Drfk2luO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CMlO_C8p.js";import"./useAnimationId-DnjhYXkZ.js";import"./Trapezoid-Cz1Qyrxg.js";import"./Sector-CREvb1nt.js";import"./Symbols-Drc7wV6L.js";import"./symbol-qWW-wzEd.js";import"./step-DJMv4gH4.js";import"./Curve-BqOd-kHx.js";import"./RegisterGraphicalItemId-CE2Hr5pe.js";import"./ErrorBarContext-DMLt-c7m.js";import"./GraphicalItemClipPath-B6fH0RLB.js";import"./SetGraphicalItem-Df3jzsrS.js";import"./getZIndexFromUnknown-x4P0Tw7J.js";import"./graphicalItemSelectors-ltn8b0AC.js";import"./index-DZx9HZGn.js";import"./ChartSizeDimensions-C9x1Brk2.js";import"./OffsetShower-BIWjLM9_.js";import"./PlotAreaShower-Dpy9Dm8W.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
