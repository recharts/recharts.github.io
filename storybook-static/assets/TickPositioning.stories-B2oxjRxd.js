import{e as t}from"./iframe-CnfUedcN.js";import{R as s}from"./arrayEqualityCheck-rY7iVDz-.js";import{L as m}from"./LineChart-DOCtgf2v.js";import{L as c}from"./Line-D7rsWj_x.js";import{X as d}from"./XAxis-veq9g2__.js";import{R as l}from"./RechartsHookInspector-r5irvpzN.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CVejQHWD.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-UZgszUQZ.js";import"./hooks-dlNhbOk4.js";import"./axisSelectors-vytjTI39.js";import"./zIndexSlice-Dvx1lbqL.js";import"./CartesianChart-CxN-AX8e.js";import"./chartDataContext-DVPFzTpf.js";import"./CategoricalChart-Bvh-Z6kO.js";import"./Layer-D-nKIsW1.js";import"./ReactUtils-BJDXxPy8.js";import"./Label-YyARJRE4.js";import"./Text-Bxj3u51B.js";import"./DOMUtils-BXcCCvqt.js";import"./ZIndexLayer-DbY_9wcH.js";import"./ActivePoints-CG05ZKoG.js";import"./Dot-CcDNwPnJ.js";import"./types-D8riT1ui.js";import"./RegisterGraphicalItemId-B0F4aXR1.js";import"./ErrorBarContext-DNwwyg_J.js";import"./GraphicalItemClipPath-Dl9XvTzN.js";import"./SetGraphicalItem-CDc4e0JF.js";import"./useAnimationId-34yVtl_d.js";import"./getRadiusAndStrokeWidthFromDot-BmWkqN6P.js";import"./ActiveShapeUtils-BJYqXFPt.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DD8FGW0K.js";import"./Trapezoid-BFp34q_q.js";import"./Sector-CKxLHTaG.js";import"./Symbols-cggM9Iun.js";import"./Curve-Cyx3ROtR.js";import"./CartesianAxis-CDEvUzTG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-BUn4aue4.js";import"./ChartSizeDimensions-BN5VWsPC.js";import"./OffsetShower-Bj6jxFEA.js";import"./PlotAreaShower-fzrOqZm1.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
