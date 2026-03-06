import{e as t}from"./iframe-B6PVJaTx.js";import{R as n}from"./arrayEqualityCheck--l5nbOOj.js";import{L as s}from"./LineChart-aanM9NvU.js";import{L as c}from"./Line-D8kksclE.js";import{X as d}from"./XAxis-B6nzW_y2.js";import{R as l}from"./RechartsHookInspector-DAdFhUj3.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-SbZpfCF8.js";import"./immer-C_TrIJMh.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BP-lLfVx.js";import"./index-BYl1MF2O.js";import"./hooks-CMcsnkVg.js";import"./axisSelectors-Bycocccg.js";import"./d3-scale-B9ZoAAf3.js";import"./zIndexSlice-67Af1QFi.js";import"./renderedTicksSlice-BgZ61m11.js";import"./CartesianChart-VouzMpCB.js";import"./chartDataContext-KAdJCeqF.js";import"./CategoricalChart-BKdjoORw.js";import"./Layer-B8Qqjz1b.js";import"./ReactUtils-BX8s_uVv.js";import"./Label-BcLUaBCG.js";import"./Text-C0kuQw6e.js";import"./DOMUtils-C2NDlTFm.js";import"./ZIndexLayer-d-D4FVJh.js";import"./ActivePoints-DKGt-sO1.js";import"./Dot-D4UjwoyQ.js";import"./types-D2EFyeKu.js";import"./RegisterGraphicalItemId-u9lrCCFO.js";import"./ErrorBarContext-CPj1LVBL.js";import"./GraphicalItemClipPath-BvACd4D_.js";import"./SetGraphicalItem-D73Bmw1S.js";import"./useAnimationId-BQkpZnA1.js";import"./getRadiusAndStrokeWidthFromDot-BFZegUjF.js";import"./ActiveShapeUtils-B_lqA0BU.js";import"./isPlainObject-BDf_CSQT.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BTXCPNQZ.js";import"./Trapezoid-B69mIrTK.js";import"./Sector-DBXvXTeF.js";import"./Symbols-D85bhFp3.js";import"./symbol-JouRlcFh.js";import"./step-D3frr3Yw.js";import"./Curve-DFsvHQ10.js";import"./CartesianAxis-DZRbozUC.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-DliOLYsg.js";import"./ChartSizeDimensions-DJ4EsjSA.js";import"./OffsetShower-BD_1fIgB.js";import"./PlotAreaShower-CzP38MFh.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const intervalOptions = ['preserveStart', 'preserveEnd', 'preserveStartEnd', 'equidistantPreserveStart', 0] as const;
    return <ResponsiveContainer>
        <LineChart data={ticks}
      // Margins are necessary to show ticks that extend beyond the chart (i.e. last and first tick).
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 20
      }}>
          <Line dataKey="coordinate" />
          {intervalOptions.map((intervalOption, index) => <XAxis dataKey="value" key={intervalOption} interval={intervalOption} xAxisId={index} label={intervalOption} height={70} />)}
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  }
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const ht=["TickPositioning"];export{r as TickPositioning,ht as __namedExportsOrder,vt as default};
