import{e as t}from"./iframe-Ucw_npMd.js";import{R as n}from"./arrayEqualityCheck-C_bl4BTF.js";import{L as s}from"./LineChart-B3xLzriQ.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-xp0DzpuK.js";import{X as l}from"./XAxis-Z-pG1K5-.js";import{R as v}from"./RechartsHookInspector-Egzn0asm.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BHeHZryb.js";import"./immer-Df11CBmE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CwfOdweJ.js";import"./index-JYzWfHpx.js";import"./hooks-D7V2KDBB.js";import"./axisSelectors-BH0WFu65.js";import"./d3-scale-0cZeb6CB.js";import"./zIndexSlice-CNerbQ3D.js";import"./renderedTicksSlice-DUMTm3uB.js";import"./CartesianChart-C3CifoRw.js";import"./chartDataContext-C8DSjEnl.js";import"./CategoricalChart-Bvyp3zlR.js";import"./Layer-BHKytU3r.js";import"./ReactUtils-CjeDc-m7.js";import"./Label-GC_DUOEN.js";import"./Text-BMbZi_EC.js";import"./DOMUtils-YtDMkslD.js";import"./ZIndexLayer-D2xlXPPp.js";import"./ActivePoints-UksLcW80.js";import"./Dot-B34r2ooF.js";import"./types-_zfRhAxP.js";import"./RegisterGraphicalItemId-CbJhRY50.js";import"./ErrorBarContext-DyEjoJld.js";import"./GraphicalItemClipPath-B7jjPwrD.js";import"./SetGraphicalItem-BTRvTts6.js";import"./useAnimationId-CEijT5wS.js";import"./getRadiusAndStrokeWidthFromDot-6YrovPXS.js";import"./ActiveShapeUtils-DW7P1xTB.js";import"./isPlainObject-DLsDG0Z3.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DdjFgehH.js";import"./Trapezoid-DDcYuR4h.js";import"./Sector-SP2qnp6i.js";import"./Symbols-ODbCcosS.js";import"./symbol-C71I-RBu.js";import"./step-CvXihpec.js";import"./Curve-4SPhgVqC.js";import"./CartesianAxis-C30jVrg6.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-BrSV8OVb.js";import"./ChartSizeDimensions-Cz7KN2Sj.js";import"./OffsetShower-BPBpAMRX.js";import"./PlotAreaShower-sLoJpTUh.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
