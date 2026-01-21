import{e as t}from"./iframe-BlCBiEbC.js";import{R as c}from"./arrayEqualityCheck-X93wQEqh.js";import{C as d}from"./ComposedChart-kZ-KCn3S.js";import{A as l}from"./Area-TFe8Hnbz.js";import{R as h}from"./RechartsHookInspector-CHVk1qod.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Bzr_YW23.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-DkDok3zQ.js";import"./hooks-BT650JQT.js";import"./axisSelectors-0_eHLV3I.js";import"./zIndexSlice-RKZlw9rR.js";import"./CartesianChart-DgUfEX9r.js";import"./chartDataContext-B-D1_Xyu.js";import"./CategoricalChart-CX-nrdd_.js";import"./Curve-CHEFd7Ta.js";import"./types-DYooLvZu.js";import"./Layer-BoA-MhSr.js";import"./ReactUtils-CVZw63sI.js";import"./Label-yaREi1fu.js";import"./Text-RTBsPD27.js";import"./DOMUtils-Iuyw-z7a.js";import"./ZIndexLayer-jahJ6frp.js";import"./ActivePoints-JZ1NxC6S.js";import"./Dot-D7kgANXO.js";import"./RegisterGraphicalItemId-CF1HBkTr.js";import"./GraphicalItemClipPath-C8x-oaPF.js";import"./SetGraphicalItem-SfTyueuB.js";import"./useAnimationId-DmUtWl3R.js";import"./getRadiusAndStrokeWidthFromDot-BIGLa0yQ.js";import"./graphicalItemSelectors-BBoAQcBZ.js";import"./index-D4FkNtIV.js";import"./ChartSizeDimensions-1GSyPMX1.js";import"./OffsetShower-BzuY3Qm6.js";import"./PlotAreaShower-D5VmZD6S.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
