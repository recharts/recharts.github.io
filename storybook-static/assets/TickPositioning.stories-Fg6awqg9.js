import{e as t}from"./iframe-BQCoiva3.js";import{R as s}from"./arrayEqualityCheck-B0366wwk.js";import{L as m}from"./LineChart-CrUA3e61.js";import{L as c}from"./Line-g-X6S1wl.js";import{X as d}from"./XAxis-adUeWkz6.js";import{R as l}from"./RechartsHookInspector-CnEEIRv_.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BkSCP0UE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-vpzrlwOs.js";import"./hooks-6nrvr-mh.js";import"./axisSelectors-BeeHNvPl.js";import"./zIndexSlice-DIQaSorX.js";import"./CartesianChart-3obF7LW0.js";import"./chartDataContext-DynAjYRS.js";import"./CategoricalChart-BUFP8crF.js";import"./Layer-DJ1Ub_Mt.js";import"./ReactUtils-CBZ7FQLf.js";import"./Label-DcE3tZRQ.js";import"./Text-DJjW_aea.js";import"./DOMUtils-CR4mIpeb.js";import"./ZIndexLayer-MNqDcOIF.js";import"./ActivePoints-U4p9mPed.js";import"./Dot-BMcg7DSh.js";import"./types-D3fsuIcd.js";import"./RegisterGraphicalItemId-BshdgZU9.js";import"./ErrorBarContext-Ht_zzjWi.js";import"./GraphicalItemClipPath-Bi8mSekh.js";import"./SetGraphicalItem-DgSBR6IQ.js";import"./useAnimationId-D9Kszw7L.js";import"./getRadiusAndStrokeWidthFromDot-fqGyP-HX.js";import"./ActiveShapeUtils-BR9LCKJd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bkr_shZz.js";import"./Trapezoid-D1e_n1ob.js";import"./Sector-DlkTEg1T.js";import"./Symbols-DO7aFqSH.js";import"./Curve-CIPXZY-U.js";import"./CartesianAxis-DjqIVAOB.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-DKG7AucC.js";import"./ChartSizeDimensions-_A7Mz-FY.js";import"./OffsetShower-D2FIRFNu.js";import"./PlotAreaShower-j01VLlBO.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const nt=["TickPositioning"];export{r as TickPositioning,nt as __namedExportsOrder,at as default};
