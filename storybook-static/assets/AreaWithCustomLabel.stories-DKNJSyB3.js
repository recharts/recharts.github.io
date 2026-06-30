import{R as e}from"./iframe-CysaVPuT.js";import{R as c}from"./zIndexSlice-CBspyTeT.js";import{C as d}from"./ComposedChart-9ef0ZM8L.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BiGNKIDy.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BijqxQd6.js";import"./index-BoQpP3ng.js";import"./index-C8sovufb.js";import"./get-Dv3cK-ON.js";import"./resolveDefaultProps-CB9Bmy8P.js";import"./isWellBehavedNumber-CHReb6Hq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CXNQztOV.js";import"./index-ClhA1x-k.js";import"./index-CIm0M9H5.js";import"./renderedTicksSlice-L6Kj9uMm.js";import"./axisSelectors-CybQsixZ.js";import"./d3-scale-BWFUWIRC.js";import"./CartesianChart-Dlco-df9.js";import"./chartDataContext-BsGd8oTW.js";import"./CategoricalChart-B4xuyyeZ.js";import"./Layer-DQgbcZ6W.js";import"./AnimatedItems-HWCD5qdq.js";import"./Label-B_m_1QPA.js";import"./Text-DqT5jcn2.js";import"./DOMUtils-z1JZhy6H.js";import"./ZIndexLayer-C6PjgPWA.js";import"./useAnimationId-XV22nS6k.js";import"./ActivePoints-CQLYJKIJ.js";import"./Dot-dmuSDw2U.js";import"./types-DWuPiLas.js";import"./RegisterGraphicalItemId-BIn5Riid.js";import"./GraphicalItemClipPath-DMny06t1.js";import"./SetGraphicalItem-ihbnCYD8.js";import"./getRadiusAndStrokeWidthFromDot-DDSmqaVx.js";import"./ActiveShapeUtils-HeGPuRiV.js";import"./Curve-DVkbv2J8.js";import"./step-vxR68qu5.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-C4W5Yao6.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
