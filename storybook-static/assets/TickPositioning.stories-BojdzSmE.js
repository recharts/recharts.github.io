import{R as t}from"./iframe-C-fup5Id.js";import{R as m}from"./zIndexSlice-NTR0fs-C.js";import{L as s}from"./LineChart-DEUCtJll.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-Bwf9fLP_.js";import{X as l}from"./XAxis-DODICsjR.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-8TCI2H73.js";import"./index-Dx7TC_Rp.js";import"./index-DjFdhAan.js";import"./get-p2wvzD9I.js";import"./resolveDefaultProps-OK-IJ12C.js";import"./isWellBehavedNumber-DLU1AHVw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B95PZmfT.js";import"./index-DNWmVjf2.js";import"./index-BlVQDt2E.js";import"./renderedTicksSlice-DiIPZqfD.js";import"./axisSelectors-BO6Bv25T.js";import"./d3-scale-BaBWXdX7.js";import"./CartesianChart-DGFEm_4g.js";import"./chartDataContext-Ci_9Tusi.js";import"./CategoricalChart-2uAqMqKC.js";import"./Layer-BxCAIV-n.js";import"./Curve-BxzrSemv.js";import"./types-BIM6WHXQ.js";import"./step-BjlE7YIb.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BHa_3vog.js";import"./Label-Dx6_KP12.js";import"./Text-DhUd53xM.js";import"./DOMUtils-CRh4TCoN.js";import"./ZIndexLayer-DdUd9A7h.js";import"./useAnimationId-CHZsXmiy.js";import"./ActivePoints-_HKP03c-.js";import"./Dot-Blb5FiAy.js";import"./RegisterGraphicalItemId-mXg0uLQv.js";import"./ErrorBarContext-P4JGsE5W.js";import"./GraphicalItemClipPath-CURGfNfz.js";import"./SetGraphicalItem-KcsUgiZW.js";import"./getRadiusAndStrokeWidthFromDot-BZItNAyz.js";import"./ActiveShapeUtils-BmOgDWMs.js";import"./CartesianAxis-DNfda7To.js";import"./getClassNameFromUnknown-vPJFmTf3.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
