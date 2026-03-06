import{e as t}from"./iframe-oUl0Edsa.js";import{R as p}from"./arrayEqualityCheck-DO0IznND.js";import{C as m}from"./ComposedChart-BhkpT6ho.js";import{A as r}from"./Area-DzUg9X9x.js";import{R as s}from"./RechartsHookInspector-DzCPY6-s.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CAhGbC_6.js";import"./immer-B4_TuAzJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-hGE8ryIc.js";import"./index-BpdNigRW.js";import"./hooks-BR4mxfYm.js";import"./axisSelectors-oQCI-_oE.js";import"./d3-scale-vJidlWzy.js";import"./zIndexSlice-DaoY5asK.js";import"./renderedTicksSlice-BwLnTfQZ.js";import"./CartesianChart-QkTvUAzL.js";import"./chartDataContext-0PCCbTAT.js";import"./CategoricalChart-D3ZmkNqf.js";import"./Curve-DW9fdXku.js";import"./types-DJAvwsGW.js";import"./step-DDhJKU_a.js";import"./Layer-D8QuYoPE.js";import"./ReactUtils-DtRK-XUg.js";import"./Label-CQcshbP4.js";import"./Text-CIurUiqp.js";import"./DOMUtils-QcPDFTXM.js";import"./ZIndexLayer-Dv9xqvVt.js";import"./ActivePoints-BgKB9eRs.js";import"./Dot-BoytNhYo.js";import"./RegisterGraphicalItemId-D0Ds9Sqy.js";import"./GraphicalItemClipPath-BI0ffFR3.js";import"./SetGraphicalItem-DwmwyDT6.js";import"./useAnimationId-Ce3W7lPK.js";import"./getRadiusAndStrokeWidthFromDot-CThWr5VZ.js";import"./graphicalItemSelectors-iqdDBaQ3.js";import"./index-CrxHXiCq.js";import"./ChartSizeDimensions-BcXpSJ4G.js";import"./OffsetShower-CWs6Hx-m.js";import"./PlotAreaShower-CXnVCFpH.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <defs>
            <pattern id="left" width="12" height="4" patternUnits="userSpaceOnUse">
              <rect width="4" height="4" fill="#8884d8" />
            </pattern>
            <pattern id="right" width="8" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="4" height="4" fill="#82ca9d" />
            </pattern>
          </defs>
          <Area type="monotone" dataKey="x" stroke="#8884d8" fillOpacity={1} fill="url(#left)" />
          <Area type="monotone" dataKey="y" stroke="#82ca9d" fillOpacity={1} fill="url(#right)" />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const et=["FillPattern"];export{e as FillPattern,et as __namedExportsOrder,tt as default};
