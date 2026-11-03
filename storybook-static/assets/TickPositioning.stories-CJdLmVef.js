import{R as t}from"./iframe-m3pGEKfa.js";import{R as m}from"./zIndexSlice-CiEd_T_p.js";import{L as s}from"./LineChart-x4yLBDfG.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DRnRZKUl.js";import{X as l}from"./XAxis-BaVE9EFQ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-1_D7OVbj.js";import"./throttle-C3qsSQmj.js";import"./index-Bk15LyvO.js";import"./index-B2FvYHPH.js";import"./RechartsWrapper-B1DLlNjF.js";import"./axisSelectors-BuHzQOVj.js";import"./polarAxisSelectors-BjeSYPTx.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-COa--qib.js";import"./index-CwIe0M5T.js";import"./index-CVYSO0b0.js";import"./renderedTicksSlice-riwhMnsC.js";import"./index-D_gkyxlq.js";import"./fillDefinitions-gM0_oynF.js";import"./CartesianChart-CVVFQDxq.js";import"./ZIndexPortal-CX0wxjxU.js";import"./CategoricalChart-Cbbud_Be.js";import"./Layer-CWJJdVGN.js";import"./Curve-C8JVR8tL.js";import"./types-NW0KOpFv.js";import"./step-JD5lrPB_.js";import"./path-DyVhHtw_.js";import"./LabelList-DpjRmARQ.js";import"./Label-BWwlrPxZ.js";import"./Text-C8slSLt5.js";import"./DOMUtils-CgNaQgzY.js";import"./ZIndexLayer-dW6YEDVz.js";import"./ActivePoints-BT3v0Z1P.js";import"./Dot-Bo6Iz36c.js";import"./activeStyles-Bu9SIE65.js";import"./useAnimationId-CZ85B9in.js";import"./dataEntryStyles-D1ArbIJ7.js";import"./Symbols-C8vox5bW.js";import"./symbol-QU-hqetJ.js";import"./ErrorBarContext-CKCqOaVD.js";import"./SetGraphicalItem-Cdf126o-.js";import"./getRadiusAndStrokeWidthFromDot-fp1uavHZ.js";import"./ActiveShapeUtils-hQzu6D3o.js";import"./useEffectiveDataKey-DabJGTLc.js";import"./CartesianAxis-4cS3xnQT.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-AZzsDYE7.js";const st={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},ct=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{r as TickPositioning,ct as __namedExportsOrder,st as default};
