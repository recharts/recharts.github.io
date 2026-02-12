import{e as t}from"./iframe-BQCoiva3.js";import{R as c}from"./arrayEqualityCheck-B0366wwk.js";import{C as d}from"./ComposedChart-BYVrpyQ6.js";import{A as l}from"./Area-BJqdyPTs.js";import{R as h}from"./RechartsHookInspector-CnEEIRv_.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BkSCP0UE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-vpzrlwOs.js";import"./hooks-6nrvr-mh.js";import"./axisSelectors-BeeHNvPl.js";import"./zIndexSlice-DIQaSorX.js";import"./CartesianChart-3obF7LW0.js";import"./chartDataContext-DynAjYRS.js";import"./CategoricalChart-BUFP8crF.js";import"./Curve-CIPXZY-U.js";import"./types-D3fsuIcd.js";import"./Layer-DJ1Ub_Mt.js";import"./ReactUtils-CBZ7FQLf.js";import"./Label-DcE3tZRQ.js";import"./Text-DJjW_aea.js";import"./DOMUtils-CR4mIpeb.js";import"./ZIndexLayer-MNqDcOIF.js";import"./ActivePoints-U4p9mPed.js";import"./Dot-BMcg7DSh.js";import"./RegisterGraphicalItemId-BshdgZU9.js";import"./GraphicalItemClipPath-Bi8mSekh.js";import"./SetGraphicalItem-DgSBR6IQ.js";import"./useAnimationId-D9Kszw7L.js";import"./getRadiusAndStrokeWidthFromDot-fqGyP-HX.js";import"./graphicalItemSelectors-4UHVuMlx.js";import"./index-DKG7AucC.js";import"./ChartSizeDimensions-_A7Mz-FY.js";import"./OffsetShower-D2FIRFNu.js";import"./PlotAreaShower-j01VLlBO.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
