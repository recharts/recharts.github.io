import{R as t}from"./iframe-Clh6Am28.js";import{R as m}from"./zIndexSlice-C8WH1sbl.js";import{L as s}from"./LineChart-CKx9vK2l.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DpvpjAPB.js";import{X as l}from"./XAxis-CX5kJZWB.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CCKY-2O_.js";import"./index-mbhNu375.js";import"./index-D983Ac__.js";import"./get-ReXw4Xs6.js";import"./resolveDefaultProps-Cp4jCd2q.js";import"./isWellBehavedNumber-BTdz8jY9.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-kLRmp8Nc.js";import"./index-B67Qu5hK.js";import"./index-81KY_DK_.js";import"./renderedTicksSlice--OmlTIq-.js";import"./axisSelectors-CtcLf7W7.js";import"./d3-scale-BSnqKxuH.js";import"./CartesianChart-DYzbJdNk.js";import"./chartDataContext-BpoRQBsX.js";import"./CategoricalChart-ISWmGPOG.js";import"./Layer-rOqvObKk.js";import"./Curve-CCuEPsAe.js";import"./types-Clw2FxQC.js";import"./step-Dyxzv1f8.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B05rhmS4.js";import"./Label-gvCBOhLE.js";import"./Text-X5OcHqR4.js";import"./DOMUtils-CtdcYe6Z.js";import"./ZIndexLayer-4xKONL83.js";import"./useAnimationId-CWbLQsSM.js";import"./ActivePoints-DadMhNWA.js";import"./Dot-CTX7NV8r.js";import"./RegisterGraphicalItemId-C0MecWm_.js";import"./ErrorBarContext-DAn4MkTm.js";import"./GraphicalItemClipPath-Ngq7bur3.js";import"./SetGraphicalItem-BUpAV2uu.js";import"./getRadiusAndStrokeWidthFromDot-BP39ATEv.js";import"./ActiveShapeUtils-BsSwQSYp.js";import"./CartesianAxis-EoQ_2pVo.js";import"./getClassNameFromUnknown-vPJFmTf3.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const ot=["TickPositioning"];export{r as TickPositioning,ot as __namedExportsOrder,it as default};
