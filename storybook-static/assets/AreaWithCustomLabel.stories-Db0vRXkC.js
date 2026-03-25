import{e as t}from"./iframe-DjpYK-o-.js";import{R as c}from"./arrayEqualityCheck-BdSiZsNM.js";import{C as d}from"./ComposedChart-5wDZbkHU.js";import{A as l}from"./Area-CtXCKQp3.js";import{R as h}from"./RechartsHookInspector-D54qOyzT.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C42G_ffr.js";import"./immer-D4y8T5a7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CauuEd3r.js";import"./index-B9U8pH8P.js";import"./hooks-DMOVvbqY.js";import"./axisSelectors-DOtt8rOg.js";import"./d3-scale-BGWrA6kg.js";import"./zIndexSlice-BwAJg9IA.js";import"./renderedTicksSlice-DA_2QpHv.js";import"./CartesianChart-S0vn2j2X.js";import"./chartDataContext-DMhYHlkG.js";import"./CategoricalChart-DEHztz1y.js";import"./Curve-B8xtuMQr.js";import"./types-e-ZS-U8T.js";import"./step-BxVjdfNs.js";import"./Layer-ClpAj3mi.js";import"./ReactUtils-0Og-Hkqc.js";import"./Label-Df3TKPqw.js";import"./Text-hUj7bTMa.js";import"./DOMUtils-Bertp5OK.js";import"./ZIndexLayer-BYBCo22l.js";import"./ActivePoints-0ZU6F1s-.js";import"./Dot-CRJ16IiO.js";import"./RegisterGraphicalItemId-BvqmWFzi.js";import"./GraphicalItemClipPath-CTrBCXbW.js";import"./SetGraphicalItem-a4oiN2v8.js";import"./useAnimationId-DA-f91a4.js";import"./getRadiusAndStrokeWidthFromDot-DAsawtMn.js";import"./graphicalItemSelectors-flsEnbXY.js";import"./index-DPPgUz6W.js";import"./ChartSizeDimensions-B8zKV2n0.js";import"./OffsetShower-DWnJVUQp.js";import"./PlotAreaShower-B2Ag3HsK.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
