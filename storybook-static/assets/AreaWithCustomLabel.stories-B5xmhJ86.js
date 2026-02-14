import{e as t}from"./iframe-D1sKzd9f.js";import{R as c}from"./arrayEqualityCheck-CuEsOyc1.js";import{C as d}from"./ComposedChart-D7QMmcGv.js";import{A as l}from"./Area-Ad-qQXDy.js";import{R as h}from"./RechartsHookInspector-DnaIUpyH.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DP_tbxO-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BpD_sNud.js";import"./hooks-DdtZHK8g.js";import"./axisSelectors-DyIQ7_k2.js";import"./zIndexSlice-LstRJYK0.js";import"./CartesianChart-Biy4tQe4.js";import"./chartDataContext-CRIv2raa.js";import"./CategoricalChart-C6tF-OgQ.js";import"./Curve-BmiU29ay.js";import"./types-EtQqMNLc.js";import"./Layer-WzWTapMZ.js";import"./ReactUtils-CN0W71Xc.js";import"./Label-BUubujAP.js";import"./Text-Cjdiq18G.js";import"./DOMUtils-gW35XdYA.js";import"./ZIndexLayer-C_HSTCV-.js";import"./ActivePoints-2K88Psn3.js";import"./Dot-CvFh2CAB.js";import"./RegisterGraphicalItemId-1mClqvPm.js";import"./GraphicalItemClipPath-D104b0kU.js";import"./SetGraphicalItem-elsOCW9j.js";import"./useAnimationId-CobcEi0h.js";import"./getRadiusAndStrokeWidthFromDot-ChFRxLXf.js";import"./graphicalItemSelectors-CPJau7EC.js";import"./index-BzSbAqoW.js";import"./ChartSizeDimensions-C9qcdOPY.js";import"./OffsetShower-0TFjDlvn.js";import"./PlotAreaShower-D6laSGCk.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(m=e.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const tt=["CustomizedLabel"];export{e as CustomizedLabel,tt as __namedExportsOrder,Z as default};
