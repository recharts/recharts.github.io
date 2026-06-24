import{R as e}from"./iframe-C-fup5Id.js";import{R as c}from"./zIndexSlice-NTR0fs-C.js";import{C as d}from"./ComposedChart-Jz5lk914.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-B5D0OAz3.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-8TCI2H73.js";import"./index-Dx7TC_Rp.js";import"./index-DjFdhAan.js";import"./get-p2wvzD9I.js";import"./resolveDefaultProps-OK-IJ12C.js";import"./isWellBehavedNumber-DLU1AHVw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B95PZmfT.js";import"./index-DNWmVjf2.js";import"./index-BlVQDt2E.js";import"./renderedTicksSlice-DiIPZqfD.js";import"./axisSelectors-BO6Bv25T.js";import"./d3-scale-BaBWXdX7.js";import"./CartesianChart-DGFEm_4g.js";import"./chartDataContext-Ci_9Tusi.js";import"./CategoricalChart-2uAqMqKC.js";import"./Layer-BxCAIV-n.js";import"./AnimatedItems-BHa_3vog.js";import"./Label-Dx6_KP12.js";import"./Text-DhUd53xM.js";import"./DOMUtils-CRh4TCoN.js";import"./ZIndexLayer-DdUd9A7h.js";import"./useAnimationId-CHZsXmiy.js";import"./ActivePoints-_HKP03c-.js";import"./Dot-Blb5FiAy.js";import"./types-BIM6WHXQ.js";import"./RegisterGraphicalItemId-mXg0uLQv.js";import"./GraphicalItemClipPath-CURGfNfz.js";import"./SetGraphicalItem-KcsUgiZW.js";import"./getRadiusAndStrokeWidthFromDot-BZItNAyz.js";import"./ActiveShapeUtils-BmOgDWMs.js";import"./Curve-BxzrSemv.js";import"./step-BjlE7YIb.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DMr6zMpw.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
