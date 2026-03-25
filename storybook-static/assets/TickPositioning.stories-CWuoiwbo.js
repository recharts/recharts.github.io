import{e as t}from"./iframe-B9GGDGS1.js";import{R as n}from"./arrayEqualityCheck-COtCLy3x.js";import{L as s}from"./LineChart-DzU1axQh.js";import{L as c}from"./Line-BRyNeqPY.js";import{X as d}from"./XAxis-BhXpxA_M.js";import{R as l}from"./RechartsHookInspector-BWkI8hZR.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CwlEvTRj.js";import"./immer-D8haotDT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-EHfwRfBb.js";import"./index-D1V-1Kud.js";import"./hooks-C2J7naOZ.js";import"./axisSelectors-8xv55RbV.js";import"./d3-scale-CJw_J5vV.js";import"./zIndexSlice-Dr0l4bHj.js";import"./renderedTicksSlice-q0M83NPg.js";import"./CartesianChart-YXzBIFVQ.js";import"./chartDataContext-Z-R_60d5.js";import"./CategoricalChart-BBfSxrd4.js";import"./Layer-DcWLpeG9.js";import"./ReactUtils-CrjF-zMe.js";import"./Label-DbaG7Uem.js";import"./Text-BfPYOH_N.js";import"./DOMUtils-BTQMQKLS.js";import"./ZIndexLayer-CbIo1jp-.js";import"./ActivePoints-CNPbEPL7.js";import"./Dot-B6uirbug.js";import"./types-88pgmlG4.js";import"./RegisterGraphicalItemId-CE2Hr5pe.js";import"./ErrorBarContext-DMLt-c7m.js";import"./GraphicalItemClipPath-B6fH0RLB.js";import"./SetGraphicalItem-Df3jzsrS.js";import"./useAnimationId-DnjhYXkZ.js";import"./getRadiusAndStrokeWidthFromDot-BxwKgIZR.js";import"./ActiveShapeUtils-DstCBXr6.js";import"./isPlainObject-Drfk2luO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CMlO_C8p.js";import"./Trapezoid-Cz1Qyrxg.js";import"./Sector-CREvb1nt.js";import"./Symbols-Drc7wV6L.js";import"./symbol-qWW-wzEd.js";import"./step-DJMv4gH4.js";import"./Curve-BqOd-kHx.js";import"./CartesianAxis-DyjzRIeL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-DZx9HZGn.js";import"./ChartSizeDimensions-C9x1Brk2.js";import"./OffsetShower-BIWjLM9_.js";import"./PlotAreaShower-Dpy9Dm8W.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
