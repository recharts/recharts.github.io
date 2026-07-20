import{R as t}from"./iframe-CYE_KjLp.js";import{R as m}from"./zIndexSlice-BJ5AXs-O.js";import{L as s}from"./LineChart-DKUl6LVZ.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-fP0RojnX.js";import{X as l}from"./XAxis-CSEJquda.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CMwKm87I.js";import"./index-Ph9m1nQR.js";import"./index-BT3sj--6.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Bfx-m_zh.js";import"./isWellBehavedNumber-D2iFNJG8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-8_njvAZI.js";import"./index-CwiYvwQ-.js";import"./index-CN526hDZ.js";import"./renderedTicksSlice-Bk_hKtUF.js";import"./axisSelectors-Cz15TeqU.js";import"./d3-scale-BYal7h8i.js";import"./CartesianChart-g8MVdMo8.js";import"./chartDataContext-3J9QrXTl.js";import"./CategoricalChart-DxSK9VeV.js";import"./Layer-BAAO02Y6.js";import"./Curve-DOUq4MA6.js";import"./types-Bh5it62Q.js";import"./step-CrVHI12K.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DDp5Wq7I.js";import"./Label-DungM5aU.js";import"./Text-D9p9m1qq.js";import"./DOMUtils-DNa7oSWn.js";import"./ZIndexLayer-Cs3N_7G3.js";import"./useAnimationId-D2RJw3gt.js";import"./ActivePoints-B2OdHoBR.js";import"./Dot-CNeFMePA.js";import"./RegisterGraphicalItemId-BVUvorB4.js";import"./ErrorBarContext-C6lKsYq3.js";import"./GraphicalItemClipPath-DSlcdUco.js";import"./SetGraphicalItem-DsAOjH_V.js";import"./getRadiusAndStrokeWidthFromDot-eF6yQmlC.js";import"./ActiveShapeUtils-8xIbBFmr.js";import"./CartesianAxis-9Uyc6PiW.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-Crkas5dz.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const at=["TickPositioning"];export{r as TickPositioning,at as __namedExportsOrder,ot as default};
