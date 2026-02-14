import{e as t}from"./iframe-D1sKzd9f.js";import{R as s}from"./arrayEqualityCheck-CuEsOyc1.js";import{L as m}from"./LineChart-Br6WYzcP.js";import{L as c}from"./Line-BaZkLRn3.js";import{X as d}from"./XAxis-BOA4yCHe.js";import{R as l}from"./RechartsHookInspector-DnaIUpyH.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DP_tbxO-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BpD_sNud.js";import"./hooks-DdtZHK8g.js";import"./axisSelectors-DyIQ7_k2.js";import"./zIndexSlice-LstRJYK0.js";import"./CartesianChart-Biy4tQe4.js";import"./chartDataContext-CRIv2raa.js";import"./CategoricalChart-C6tF-OgQ.js";import"./Layer-WzWTapMZ.js";import"./ReactUtils-CN0W71Xc.js";import"./Label-BUubujAP.js";import"./Text-Cjdiq18G.js";import"./DOMUtils-gW35XdYA.js";import"./ZIndexLayer-C_HSTCV-.js";import"./ActivePoints-2K88Psn3.js";import"./Dot-CvFh2CAB.js";import"./types-EtQqMNLc.js";import"./RegisterGraphicalItemId-1mClqvPm.js";import"./ErrorBarContext-BoOFKdx-.js";import"./GraphicalItemClipPath-D104b0kU.js";import"./SetGraphicalItem-elsOCW9j.js";import"./useAnimationId-CobcEi0h.js";import"./getRadiusAndStrokeWidthFromDot-ChFRxLXf.js";import"./ActiveShapeUtils-fLb35mLW.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CjCqdVKq.js";import"./Trapezoid-CC-7WT-k.js";import"./Sector-BNWuE3Lx.js";import"./Symbols-B6J6F5uc.js";import"./Curve-BmiU29ay.js";import"./CartesianAxis-C9kYKoRG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-BzSbAqoW.js";import"./ChartSizeDimensions-C9qcdOPY.js";import"./OffsetShower-0TFjDlvn.js";import"./PlotAreaShower-D6laSGCk.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
