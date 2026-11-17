import{R as t}from"./iframe-waGCAeMO.js";import{R as m}from"./zIndexSlice-Bs9eWJkZ.js";import{L as s}from"./LineChart-DmlHMtRG.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DJadcpEB.js";import{X as l}from"./XAxis-C97Th9HK.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Dpi9F_1z.js";import"./throttle-CoYevXVP.js";import"./index-CcRKR-Wz.js";import"./index-DUwJtu9Y.js";import"./RechartsWrapper-DrhKOT3w.js";import"./axisSelectors-BpNK-g3S.js";import"./polarAxisSelectors-DtiraoLM.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-FqfjaXEu.js";import"./index-kB8F1Br5.js";import"./index-3B7lt2Ve.js";import"./renderedTicksSlice-ClDU73ld.js";import"./index-11RgyOoZ.js";import"./fillDefinitions-DkO2tIQI.js";import"./CartesianChart-7iyfeH7l.js";import"./chartDataContext-BbqISvQG.js";import"./CategoricalChart-D2Hb9hNl.js";import"./getRadiusAndStrokeWidthFromDot-D4lP154T.js";import"./Layer-dmB1mICY.js";import"./Curve-Cb7BkQkF.js";import"./types-DrCFt1uv.js";import"./step-CvjzszA2.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-DwD17VpV.js";import"./Label-Chhp1CRe.js";import"./Text-C-WU5iwS.js";import"./ZIndexLayer-B2QwwaI-.js";import"./ActivePoints-SMrH9LpN.js";import"./Dot-KwlPPybH.js";import"./activeStyles-Db3JHrE0.js";import"./useAnimationId-DGRCx4ie.js";import"./Symbols-sTKgXRyZ.js";import"./symbol-CRbcfw6A.js";import"./ErrorBarContext-DLQUfAIY.js";import"./SetGraphicalItem-DY5DQdLd.js";import"./ActiveShapeUtils-BuFZhuT8.js";import"./useEffectiveDataKey-DONRPZmA.js";import"./CartesianAxis-BDzG2Gtt.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-AZzsDYE7.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},mt=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
        </LineChart>
      </ResponsiveContainer>;
  }
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{r as TickPositioning,mt as __namedExportsOrder,pt as default};
