import{e as t}from"./iframe-DIwakdDt.js";import{R as s}from"./arrayEqualityCheck-lRYvQggb.js";import{L as m}from"./LineChart-ClzNmX99.js";import{L as c}from"./Line-Bwc3LNl1.js";import{X as d}from"./XAxis-BkI1-gXN.js";import{R as l}from"./RechartsHookInspector-CY1ODLVc.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DW7u54OO.js";import"./PolarUtils-B3Fap3OI.js";import"./RechartsWrapper-B94VsC0l.js";import"./hooks-DWXVssZN.js";import"./axisSelectors-B4kb62nw.js";import"./zIndexSlice-BsupxljC.js";import"./CartesianChart-DVLAyEBq.js";import"./chartDataContext-DWbSa9NP.js";import"./CategoricalChart-DSVP0XQf.js";import"./Layer-CFi2OPVU.js";import"./ReactUtils-D3B4C902.js";import"./Label-CWjd44lV.js";import"./Text-D6OkCyx_.js";import"./DOMUtils-B36TL8VT.js";import"./ZIndexLayer-Cgd7Iecl.js";import"./ActivePoints-DyDkHbPU.js";import"./Dot-DKxmRIiM.js";import"./types-B72H97bN.js";import"./RegisterGraphicalItemId-mhUZ9dId.js";import"./ErrorBarContext-B4VuOyB0.js";import"./GraphicalItemClipPath-BZiUpPN4.js";import"./SetGraphicalItem-Cri-Qe4J.js";import"./useAnimationId-OdOX1ryX.js";import"./getRadiusAndStrokeWidthFromDot-5N_ef9yY.js";import"./ActiveShapeUtils-Dm9ayMJH.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C0jTOdyj.js";import"./Trapezoid-wlixMr2J.js";import"./Sector-BBGpgSZE.js";import"./Symbols-CAX0rTwl.js";import"./Curve-9VNPy8uR.js";import"./CartesianAxis-D7MVicsA.js";import"./index-DvyeDb-a.js";import"./ChartSizeDimensions-Dw8_76VR.js";import"./OffsetShower-CvNNPebB.js";import"./PlotAreaShower-nYxw-fUs.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const at=["TickPositioning"];export{r as TickPositioning,at as __namedExportsOrder,ot as default};
