import{e as t}from"./iframe-DaCZzlB4.js";import{R as c}from"./arrayEqualityCheck-xIdjdXyO.js";import{C as d}from"./ComposedChart-qrh-EwWj.js";import{A as l}from"./Area-DtYSoDx5.js";import{R as h}from"./RechartsHookInspector-C1qZr8kA.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CDCOnC3u.js";import"./PolarUtils-CS41bXSK.js";import"./RechartsWrapper-CytJWPJg.js";import"./hooks-96RhMqDh.js";import"./axisSelectors-BaN6N1Lo.js";import"./zIndexSlice-B7osVKE5.js";import"./CartesianChart-CmxBhKD5.js";import"./chartDataContext-C2uZEvtu.js";import"./CategoricalChart-BnmCoL2H.js";import"./Curve-BcpAE4Ao.js";import"./types-CyhQh7_Z.js";import"./Layer-BKXPn5xD.js";import"./ReactUtils-yqeNEccg.js";import"./Label-D2rMkPMU.js";import"./Text-3g0qzZJG.js";import"./DOMUtils-DZpmyTbi.js";import"./ZIndexLayer-Deqw7_sa.js";import"./ActivePoints-ChVP_ShR.js";import"./Dot-BPHEuoNZ.js";import"./RegisterGraphicalItemId-BC9wjUC-.js";import"./GraphicalItemClipPath-CLpO-bZw.js";import"./SetGraphicalItem-DKRKp8eM.js";import"./useAnimationId-DMDiR4YX.js";import"./getRadiusAndStrokeWidthFromDot-7uzclWAv.js";import"./graphicalItemSelectors-kdl34reE.js";import"./index-DqUfe0wd.js";import"./ChartSizeDimensions-Dn5P1TLL.js";import"./OffsetShower-CyCVWv2W.js";import"./PlotAreaShower-DACZviw9.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
