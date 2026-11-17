import{R as t}from"./iframe-CGL4wxKn.js";import{R as m}from"./zIndexSlice-099KjRSH.js";import{L as s}from"./LineChart-BiRcKk-g.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-rl6ls2qQ.js";import{X as l}from"./XAxis-wodCK_Hv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-J1iMbWnO.js";import"./throttle-DUUYxzVG.js";import"./index-BZoAXlEM.js";import"./index-CB__xCeL.js";import"./RechartsWrapper-g5knetkm.js";import"./axisSelectors-BMd3ki3_.js";import"./polarAxisSelectors-DW8rryyn.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-o5WrViM1.js";import"./index-BG2Ge-ql.js";import"./index-XB5jojxJ.js";import"./renderedTicksSlice-CQkNy6Mm.js";import"./index-D3e94DhQ.js";import"./fillDefinitions-Vr_akuqj.js";import"./CartesianChart-Co-UKN43.js";import"./chartDataContext-B0uy7sqw.js";import"./CategoricalChart-rWqih0Ao.js";import"./Layer-Ch4A95GV.js";import"./Curve-CHOREDeS.js";import"./types-Blkz6f-Q.js";import"./step-GQgXeu2E.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CVCXFzjz.js";import"./Label-gT4vohqn.js";import"./Text-D29ZLY8y.js";import"./ZIndexLayer-CN_fYC_z.js";import"./ActivePoints-zAqYXl3v.js";import"./Dot-Dqevxc0i.js";import"./activeStyles-BKPzxJKn.js";import"./useAnimationId-D89zGJBE.js";import"./Symbols-Bc9bgKwE.js";import"./symbol-VmBVfDDj.js";import"./ErrorBarContext-CSfn8gVg.js";import"./SetGraphicalItem-DNJWjlHF.js";import"./getRadiusAndStrokeWidthFromDot-CxKHEBK2.js";import"./ActiveShapeUtils-B2rQYcmX.js";import"./useEffectiveDataKey-SnOfofuT.js";import"./CartesianAxis-DY7911f8.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-AZzsDYE7.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},mt=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
