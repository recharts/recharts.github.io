import{a as r}from"./iframe-_HfAVjpf.js";import{R as c}from"./zIndexSlice-BBpCjLLT.js";import{C as d}from"./ComposedChart-CDQm-nCO.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CMToonfJ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DIGsG3tn.js";import"./index-Cs9o5rrz.js";import"./index-CIyvwLXB.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D7IrzSl6.js";import"./isWellBehavedNumber-DviO5hHm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B3bcu809.js";import"./axisSelectors-BggHFTDq.js";import"./d3-scale-B5oQCS6M.js";import"./index-ATsp3Ecu.js";import"./index-uZk8L8Al.js";import"./renderedTicksSlice-BNJCO30A.js";import"./index-CIMOmY0A.js";import"./CartesianChart-De3rsgvn.js";import"./chartDataContext-Dyk7Yokq.js";import"./CategoricalChart-a-VUE4A0.js";import"./Layer-CacweoVl.js";import"./activeStyles-BdpGsFup.js";import"./Label-CR54GT5X.js";import"./Text-WmpuDBGa.js";import"./pageBackground-CfQpba4h.js";import"./useId-B3zQHx_-.js";import"./useBackwardsCompatibleTheme-BJsCYBM6.js";import"./ZIndexLayer-BrUuampD.js";import"./useAnimationId-BhBKKO0p.js";import"./dataEntryStyles-Ucx7Hmoa.js";import"./ActivePoints-BDWzEukD.js";import"./Dot-fMnVn2BH.js";import"./types-BGnPJWtT.js";import"./GraphicalItemClipPath-C1A7eGe6.js";import"./SetGraphicalItem-Cj-t7_ZW.js";import"./getRadiusAndStrokeWidthFromDot-BqM4XHNM.js";import"./ActiveShapeUtils-4DLJyt96.js";import"./Curve-DpQ41Ei2.js";import"./step-Max-Kn08.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-C_P0BrSn.js";const mt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,pt as __namedExportsOrder,mt as default};
