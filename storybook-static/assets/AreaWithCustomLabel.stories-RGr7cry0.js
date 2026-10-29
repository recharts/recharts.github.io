import{R as r}from"./iframe-jkWlGRao.js";import{R as c}from"./zIndexSlice-BJ_azL3V.js";import{C as d}from"./ComposedChart-B8s0ij_q.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Dy0juIgx.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BJCkAT-c.js";import"./throttle-BclcIM3t.js";import"./index-CafydseE.js";import"./index-l6IDK4X2.js";import"./RechartsWrapper-CYIxj0Xh.js";import"./axisSelectors-B57c623a.js";import"./polarAxisSelectors-vXDHLkfy.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B7YXqmgC.js";import"./index-CT6JOO-H.js";import"./index-lkQeFUlC.js";import"./renderedTicksSlice-MrcmxqRq.js";import"./index-BIDLCapd.js";import"./CartesianChart-DNa8wuZh.js";import"./ZIndexPortal-PvuD5_Md.js";import"./CategoricalChart-BIz6y0X4.js";import"./Layer-DGNDN2U_.js";import"./LabelList-BN7i6-QW.js";import"./Label-C3QhHNfQ.js";import"./Text-CsCVaUmy.js";import"./pageBackground-B7N8_bCe.js";import"./ZIndexLayer-Cz3uOrDa.js";import"./ActivePoints-DFqnjh3O.js";import"./Dot-xzrAS9lw.js";import"./types-BwHsgyny.js";import"./activeStyles-EBU2roz0.js";import"./useAnimationId-CAUjhf76.js";import"./dataEntryStyles-ZVub37-6.js";import"./Symbols-wGnZNd4F.js";import"./symbol-BOEnk89t.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-BoktD6a2.js";import"./getRadiusAndStrokeWidthFromDot-Shmwq5gJ.js";import"./ActiveShapeUtils-KQXKVatm.js";import"./Curve-Ch6LAljQ.js";import"./step-CscB7pF3.js";import"./useEffectiveDataKey-CJQQkbyt.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,pt as __namedExportsOrder,at as default};
