import{e as t}from"./iframe-oUl0Edsa.js";import{R as c}from"./arrayEqualityCheck-DO0IznND.js";import{C as d}from"./ComposedChart-BhkpT6ho.js";import{A as l}from"./Area-DzUg9X9x.js";import{R as h}from"./RechartsHookInspector-DzCPY6-s.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CAhGbC_6.js";import"./immer-B4_TuAzJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-hGE8ryIc.js";import"./index-BpdNigRW.js";import"./hooks-BR4mxfYm.js";import"./axisSelectors-oQCI-_oE.js";import"./d3-scale-vJidlWzy.js";import"./zIndexSlice-DaoY5asK.js";import"./renderedTicksSlice-BwLnTfQZ.js";import"./CartesianChart-QkTvUAzL.js";import"./chartDataContext-0PCCbTAT.js";import"./CategoricalChart-D3ZmkNqf.js";import"./Curve-DW9fdXku.js";import"./types-DJAvwsGW.js";import"./step-DDhJKU_a.js";import"./Layer-D8QuYoPE.js";import"./ReactUtils-DtRK-XUg.js";import"./Label-CQcshbP4.js";import"./Text-CIurUiqp.js";import"./DOMUtils-QcPDFTXM.js";import"./ZIndexLayer-Dv9xqvVt.js";import"./ActivePoints-BgKB9eRs.js";import"./Dot-BoytNhYo.js";import"./RegisterGraphicalItemId-D0Ds9Sqy.js";import"./GraphicalItemClipPath-BI0ffFR3.js";import"./SetGraphicalItem-DwmwyDT6.js";import"./useAnimationId-Ce3W7lPK.js";import"./getRadiusAndStrokeWidthFromDot-CThWr5VZ.js";import"./graphicalItemSelectors-iqdDBaQ3.js";import"./index-CrxHXiCq.js";import"./ChartSizeDimensions-BcXpSJ4G.js";import"./OffsetShower-CWs6Hx-m.js";import"./PlotAreaShower-CXnVCFpH.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const mt=["CustomizedLabel"];export{e as CustomizedLabel,mt as __namedExportsOrder,at as default};
