import{e as t}from"./iframe-B6PVJaTx.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck--l5nbOOj.js";import{B as p}from"./BarChart-Bd3PfiPs.js";import{X as l}from"./XAxis-B6nzW_y2.js";import{Y as h}from"./YAxis-D3KHnhFR.js";import{B as c}from"./Brush-B1Qz2SZn.js";import{B as x}from"./Bar-BfGDNjTm.js";import{R as u}from"./RechartsHookInspector-DAdFhUj3.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-SbZpfCF8.js";import"./immer-C_TrIJMh.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BP-lLfVx.js";import"./index-BYl1MF2O.js";import"./hooks-CMcsnkVg.js";import"./axisSelectors-Bycocccg.js";import"./d3-scale-B9ZoAAf3.js";import"./zIndexSlice-67Af1QFi.js";import"./renderedTicksSlice-BgZ61m11.js";import"./CartesianChart-VouzMpCB.js";import"./chartDataContext-KAdJCeqF.js";import"./CategoricalChart-BKdjoORw.js";import"./CartesianAxis-DZRbozUC.js";import"./Layer-B8Qqjz1b.js";import"./Text-C0kuQw6e.js";import"./DOMUtils-C2NDlTFm.js";import"./Label-BcLUaBCG.js";import"./ZIndexLayer-d-D4FVJh.js";import"./types-D2EFyeKu.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-DBaxOlkE.js";import"./ReactUtils-BX8s_uVv.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-B_lqA0BU.js";import"./isPlainObject-BDf_CSQT.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BTXCPNQZ.js";import"./useAnimationId-BQkpZnA1.js";import"./Trapezoid-B69mIrTK.js";import"./Sector-DBXvXTeF.js";import"./Symbols-D85bhFp3.js";import"./symbol-JouRlcFh.js";import"./step-D3frr3Yw.js";import"./Curve-DFsvHQ10.js";import"./RegisterGraphicalItemId-u9lrCCFO.js";import"./ErrorBarContext-CPj1LVBL.js";import"./GraphicalItemClipPath-BvACd4D_.js";import"./SetGraphicalItem-D73Bmw1S.js";import"./getZIndexFromUnknown-MB0JTrop.js";import"./graphicalItemSelectors-A5PqSJ0a.js";import"./index-DliOLYsg.js";import"./ChartSizeDimensions-DJ4EsjSA.js";import"./OffsetShower-BD_1fIgB.js";import"./PlotAreaShower-CzP38MFh.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
