import{e as t}from"./iframe-BRu_qZg1.js";import{R as n}from"./arrayEqualityCheck-BgwbYKtC.js";import{L as s}from"./LineChart-DNmDi6TE.js";import{L as c}from"./Line-BQ93j6Ys.js";import{X as d}from"./XAxis-CkACgIfp.js";import{R as l}from"./RechartsHookInspector-CJy-wMRv.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-ClDGSYA8.js";import"./immer-CiIZXnz-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B9gb15RL.js";import"./index-DYVbWT0W.js";import"./hooks-cMPGG-ti.js";import"./axisSelectors-WgiG_2zA.js";import"./d3-scale-DgD4kZyM.js";import"./zIndexSlice-CjcwtRul.js";import"./renderedTicksSlice-XQiDw47v.js";import"./CartesianChart-DNVXg1S9.js";import"./chartDataContext-BYCMtEPQ.js";import"./CategoricalChart-CRbty2Pg.js";import"./Layer-BK1KTr5e.js";import"./ReactUtils-gnwCD4Om.js";import"./Label-PVHJRfQa.js";import"./Text-CZ6mhO2l.js";import"./DOMUtils-Np4d91u5.js";import"./ZIndexLayer-C8D4smXi.js";import"./ActivePoints-lX6lnj3q.js";import"./Dot-DbWS2m0E.js";import"./types-CV4LMBiy.js";import"./RegisterGraphicalItemId-KDJ0wyU8.js";import"./ErrorBarContext-CfL1_1JT.js";import"./GraphicalItemClipPath-rMExk2wU.js";import"./SetGraphicalItem-DZJju-u_.js";import"./useAnimationId-D8a-5J-X.js";import"./getRadiusAndStrokeWidthFromDot-CXiKui9m.js";import"./ActiveShapeUtils-jyCby69N.js";import"./isPlainObject-Dl8lI7a1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C99z7Ziu.js";import"./Trapezoid-CJsPOYXY.js";import"./Sector-7rMGIqOV.js";import"./Symbols-DM4rdUCn.js";import"./symbol-D-gvh6cA.js";import"./step-XF9-athh.js";import"./Curve-CSGMMXpz.js";import"./CartesianAxis-D1FaLS9g.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-CUWwfEzD.js";import"./ChartSizeDimensions-DNlI3sC4.js";import"./OffsetShower-Cm8zLz0R.js";import"./PlotAreaShower-Bj1zpgLw.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
