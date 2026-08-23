import{a as t}from"./iframe-D_Sr4lJG.js";import{R as n}from"./zIndexSlice-D0QIWFDJ.js";import{L as s}from"./LineChart-Dc1iJVAL.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CUH4TpmU.js";import{X as l}from"./XAxis-CiVYw4TJ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DGVbE07Y.js";import"./index-DzVo4Gjf.js";import"./index-Bx0q42bk.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BKaajls5.js";import"./isWellBehavedNumber-Dv4TPBJ2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BTyxoPDx.js";import"./index-CqdW1tHD.js";import"./index-DYQHTRz1.js";import"./axisSelectors-B4F-1YW3.js";import"./d3-scale-DfRtt2DS.js";import"./renderedTicksSlice-DGuDkWT4.js";import"./CartesianChart-JxmHMprN.js";import"./chartDataContext-AwrwRhEc.js";import"./CategoricalChart-DKW5S15G.js";import"./Layer-D9Oc_uBt.js";import"./Curve-5OWOJy9s.js";import"./types-D5gXUhG3.js";import"./step-BEJyHAO7.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DooKJjtX.js";import"./Label-CeC9waPr.js";import"./Text-DkNPAJgx.js";import"./DOMUtils-zvxYmMZo.js";import"./useId-Dl8Yfg4u.js";import"./useBackwardsCompatibleTheme-Kv-Z1TIM.js";import"./ZIndexLayer-Cx1K1yql.js";import"./useAnimationId-KZvr8oE4.js";import"./ActivePoints-BSKOHmnc.js";import"./Dot-yV7k0mxe.js";import"./RegisterGraphicalItemId-DO9NFESU.js";import"./ErrorBarContext-pr_CmNON.js";import"./GraphicalItemClipPath-BKqVnbRS.js";import"./SetGraphicalItem-DDVudLdC.js";import"./getRadiusAndStrokeWidthFromDot-DctFTReD.js";import"./ActiveShapeUtils-CYI-DMZT.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-B-dcY2MJ.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,m)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:m,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const nt=["TickPositioning"];export{r as TickPositioning,nt as __namedExportsOrder,mt as default};
