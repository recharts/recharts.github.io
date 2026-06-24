import{R as e}from"./iframe-GMBZ_Ugx.js";import{R as c}from"./zIndexSlice-CaGWsk0_.js";import{C as d}from"./ComposedChart-DtzDaUqm.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-C23sWy8t.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-8AAf0mWE.js";import"./index-CWyz9jhc.js";import"./index-BJeMs6TD.js";import"./get-Gz1PRcGr.js";import"./resolveDefaultProps-CaBwGHvy.js";import"./isWellBehavedNumber-CHbHfbVW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B0SxcSOH.js";import"./index-B_gRMuPi.js";import"./index-Gz1Qo9An.js";import"./renderedTicksSlice-CW6yCQrF.js";import"./axisSelectors-CTNvdk-R.js";import"./d3-scale-DrE5OPOC.js";import"./CartesianChart-rtXvtu0b.js";import"./chartDataContext-CUGtjOSs.js";import"./CategoricalChart-CElM-v-_.js";import"./Layer-BXGTwaUB.js";import"./AnimatedItems-NvoGhX2w.js";import"./Label-BaqULLaE.js";import"./Text-xcPGheUs.js";import"./DOMUtils-BjtWwWtu.js";import"./ZIndexLayer-DxP6hcPK.js";import"./useAnimationId-DgxmZKXq.js";import"./ActivePoints-PmkOapvV.js";import"./Dot-DN0s5ohL.js";import"./types-M4hw7OKT.js";import"./RegisterGraphicalItemId-Dh_QLlB5.js";import"./GraphicalItemClipPath-DlEa2W6_.js";import"./SetGraphicalItem-CZxAdJP0.js";import"./getRadiusAndStrokeWidthFromDot-Bfj8OsGQ.js";import"./ActiveShapeUtils-CK3PQT9Y.js";import"./Curve-DWsbrokm.js";import"./step-D2IVGUQU.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-D3zVZ2eQ.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
