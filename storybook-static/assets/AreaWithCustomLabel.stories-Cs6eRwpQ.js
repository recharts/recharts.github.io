import{R as e}from"./iframe-Clh6Am28.js";import{R as c}from"./zIndexSlice-C8WH1sbl.js";import{C as d}from"./ComposedChart-BZO5EA81.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DCnF1Vno.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CCKY-2O_.js";import"./index-mbhNu375.js";import"./index-D983Ac__.js";import"./get-ReXw4Xs6.js";import"./resolveDefaultProps-Cp4jCd2q.js";import"./isWellBehavedNumber-BTdz8jY9.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-kLRmp8Nc.js";import"./index-B67Qu5hK.js";import"./index-81KY_DK_.js";import"./renderedTicksSlice--OmlTIq-.js";import"./axisSelectors-CtcLf7W7.js";import"./d3-scale-BSnqKxuH.js";import"./CartesianChart-DYzbJdNk.js";import"./chartDataContext-BpoRQBsX.js";import"./CategoricalChart-ISWmGPOG.js";import"./Layer-rOqvObKk.js";import"./AnimatedItems-B05rhmS4.js";import"./Label-gvCBOhLE.js";import"./Text-X5OcHqR4.js";import"./DOMUtils-CtdcYe6Z.js";import"./ZIndexLayer-4xKONL83.js";import"./useAnimationId-CWbLQsSM.js";import"./ActivePoints-DadMhNWA.js";import"./Dot-CTX7NV8r.js";import"./types-Clw2FxQC.js";import"./RegisterGraphicalItemId-C0MecWm_.js";import"./GraphicalItemClipPath-Ngq7bur3.js";import"./SetGraphicalItem-BUpAV2uu.js";import"./getRadiusAndStrokeWidthFromDot-BP39ATEv.js";import"./ActiveShapeUtils-BsSwQSYp.js";import"./Curve-CCuEPsAe.js";import"./step-Dyxzv1f8.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CCzQJwwH.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const it=["CustomizedLabel"];export{t as CustomizedLabel,it as __namedExportsOrder,ot as default};
