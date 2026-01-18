import{e as t}from"./iframe-B_ZhM03Y.js";import{R as s}from"./arrayEqualityCheck-CloHfm1b.js";import{L as m}from"./LineChart-CdxC26Bg.js";import{L as c}from"./Line-C29t8JSR.js";import{X as d}from"./XAxis-BwiG5zlQ.js";import{R as l}from"./RechartsHookInspector-CedEGYW7.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C2hO3de9.js";import"./PolarUtils-CgPgv3CO.js";import"./RechartsWrapper-u6yQp6qc.js";import"./hooks-C0kAm8Eo.js";import"./axisSelectors-CpGC88wy.js";import"./zIndexSlice-DOM2ZPVV.js";import"./CartesianChart-Re97mOhW.js";import"./chartDataContext-BdXMgBWg.js";import"./CategoricalChart-B5rfhQvt.js";import"./Layer-BOxBWqHH.js";import"./ReactUtils-CV9gD_3H.js";import"./Label-G2FvxRoa.js";import"./Text-DQMzR-Rn.js";import"./DOMUtils-DIxanI67.js";import"./ZIndexLayer-DQM-WqDQ.js";import"./ActivePoints-ypNM3A09.js";import"./Dot-CuMCJhAb.js";import"./types-CPNOLsga.js";import"./RegisterGraphicalItemId-DXkXPQtf.js";import"./ErrorBarContext-B6sGO-tf.js";import"./GraphicalItemClipPath-ju3MUMLR.js";import"./SetGraphicalItem-DKzya-iG.js";import"./useAnimationId-GdkLb2Sd.js";import"./getRadiusAndStrokeWidthFromDot-Cx0j_eyy.js";import"./ActiveShapeUtils-C6bCBIkh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CXZfm4Mc.js";import"./Trapezoid-Bxl0rgJp.js";import"./Sector-zu_K_Cyg.js";import"./Symbols-B_O8HrI4.js";import"./Curve-CacS2CA9.js";import"./CartesianAxis-B6B84b8_.js";import"./index-C4JY2suC.js";import"./ChartSizeDimensions-Bu3QszIW.js";import"./OffsetShower-C0fU06Jz.js";import"./PlotAreaShower-Mptvcbb5.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
