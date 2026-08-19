import{R as t}from"./iframe-W15_yS8y.js";import{R as m}from"./zIndexSlice-KjfXmz6K.js";import{L as s}from"./LineChart-BVjJSYSf.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DKuxCNpr.js";import{X as l}from"./XAxis-8Au-a6fB.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dvj2OlWT.js";import"./index-DJoXYd_8.js";import"./index-C4zsw-i5.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-PB6tg1uE.js";import"./isWellBehavedNumber-J_RQo-Gx.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B53AJGL_.js";import"./index-Df7Hn4Pb.js";import"./index-CzfOThSk.js";import"./axisSelectors-D1dvC9r7.js";import"./d3-scale-DaTRSSxE.js";import"./renderedTicksSlice--xVLPDDU.js";import"./CartesianChart-CGOzuY2G.js";import"./chartDataContext-CMgd62s5.js";import"./CategoricalChart-DCYct-dD.js";import"./Layer-mEuTxfDi.js";import"./Curve-CZbGXK3M.js";import"./types-DbtskFGe.js";import"./step-DFacBfaf.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CZGuNW2p.js";import"./Label-v2JLpAzt.js";import"./Text-BvMd1KWD.js";import"./DOMUtils-Mq767cy3.js";import"./useBackwardsCompatibleTheme-CVh47B6N.js";import"./ZIndexLayer-DRPG0BG4.js";import"./useAnimationId-B9um5jhW.js";import"./ActivePoints-CPoOsFOl.js";import"./Dot-BO0lFYaH.js";import"./RegisterGraphicalItemId-qtKCK3s0.js";import"./ErrorBarContext-C5-u35E5.js";import"./GraphicalItemClipPath-DHit8l0N.js";import"./SetGraphicalItem-BYTBa9Xv.js";import"./getRadiusAndStrokeWidthFromDot-DeK9DJP1.js";import"./ActiveShapeUtils-CzKUxwm_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-lMcf7VGx.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,n)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:n,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const nt=["TickPositioning"];export{r as TickPositioning,nt as __namedExportsOrder,pt as default};
