import{R as t}from"./iframe-GMBZ_Ugx.js";import{R as m}from"./zIndexSlice-CaGWsk0_.js";import{L as s}from"./LineChart-DKQ-hGYc.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DW-frjCE.js";import{X as l}from"./XAxis-CWBxARwY.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-8AAf0mWE.js";import"./index-CWyz9jhc.js";import"./index-BJeMs6TD.js";import"./get-Gz1PRcGr.js";import"./resolveDefaultProps-CaBwGHvy.js";import"./isWellBehavedNumber-CHbHfbVW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B0SxcSOH.js";import"./index-B_gRMuPi.js";import"./index-Gz1Qo9An.js";import"./renderedTicksSlice-CW6yCQrF.js";import"./axisSelectors-CTNvdk-R.js";import"./d3-scale-DrE5OPOC.js";import"./CartesianChart-rtXvtu0b.js";import"./chartDataContext-CUGtjOSs.js";import"./CategoricalChart-CElM-v-_.js";import"./Layer-BXGTwaUB.js";import"./Curve-DWsbrokm.js";import"./types-M4hw7OKT.js";import"./step-D2IVGUQU.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-NvoGhX2w.js";import"./Label-BaqULLaE.js";import"./Text-xcPGheUs.js";import"./DOMUtils-BjtWwWtu.js";import"./ZIndexLayer-DxP6hcPK.js";import"./useAnimationId-DgxmZKXq.js";import"./ActivePoints-PmkOapvV.js";import"./Dot-DN0s5ohL.js";import"./RegisterGraphicalItemId-Dh_QLlB5.js";import"./ErrorBarContext-C1t_9iin.js";import"./GraphicalItemClipPath-DlEa2W6_.js";import"./SetGraphicalItem-CZxAdJP0.js";import"./getRadiusAndStrokeWidthFromDot-Bfj8OsGQ.js";import"./ActiveShapeUtils-CK3PQT9Y.js";import"./CartesianAxis-DMU5FiQJ.js";import"./getClassNameFromUnknown-vPJFmTf3.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
