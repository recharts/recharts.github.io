import{e as t}from"./iframe-CwQqlQJt.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-BajvuZUd.js";import{B as p}from"./BarChart-D1V-sqe2.js";import{X as l}from"./XAxis-WQ1W94Oc.js";import{Y as h}from"./YAxis-DZx2Qb_9.js";import{B as c}from"./Brush-CLTwRWXG.js";import{B as x}from"./Bar-ey-9-uKS.js";import{R as u}from"./RechartsHookInspector-DE9uvm11.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BwAiebew.js";import"./immer-Bw_kturo.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-mfnwaW4T.js";import"./index-_RolKYTX.js";import"./hooks-CEEbPwwQ.js";import"./axisSelectors-CiLIxTM1.js";import"./d3-scale-MvDvfgbn.js";import"./zIndexSlice-C8qpENF4.js";import"./renderedTicksSlice-DD88ZL81.js";import"./CartesianChart-CB-rBxO3.js";import"./chartDataContext-DhwkPQ9I.js";import"./CategoricalChart-D6AbF0nJ.js";import"./CartesianAxis--UFkxmwi.js";import"./Layer-BfeVm7hl.js";import"./Text-DEfSdBAV.js";import"./DOMUtils-Dk-0Y4qu.js";import"./Label-L2ClqQk9.js";import"./ZIndexLayer-BhfIIgcP.js";import"./types-iTXorHjM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-G5wINDfz.js";import"./ReactUtils-3SZUbpqz.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Cc01wXEA.js";import"./isPlainObject-BdAdFHxg.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BfTwe_Uy.js";import"./useAnimationId-BkdqwMyM.js";import"./Trapezoid-DuD6k8aH.js";import"./Sector-DlF65nWv.js";import"./Symbols-B_0LQQd8.js";import"./symbol-BrIbO22w.js";import"./step-CzpXmVwk.js";import"./Curve-DVUJSzGy.js";import"./RegisterGraphicalItemId-j64FPojn.js";import"./ErrorBarContext-CnIL0nCY.js";import"./GraphicalItemClipPath-CGVVVryc.js";import"./SetGraphicalItem-B838l6ba.js";import"./getZIndexFromUnknown-DYNkhrl1.js";import"./graphicalItemSelectors-Bu_18yHe.js";import"./index-D_-HOL7T.js";import"./ChartSizeDimensions-B33reZ_o.js";import"./OffsetShower-CD2wvvOr.js";import"./PlotAreaShower-CwvzOICJ.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
