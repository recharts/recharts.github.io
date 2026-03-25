import{e as t}from"./iframe-DU8eCc54.js";import{R as c}from"./arrayEqualityCheck-Qp-5SSbe.js";import{C as d}from"./ComposedChart-DiPamo-o.js";import{A as l}from"./Area--pgnzaM-.js";import{R as h}from"./RechartsHookInspector-BoR36NoE.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DuF4MmFq.js";import"./immer-DU5qWI3u.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C5gztReH.js";import"./index-DQdIN_Xy.js";import"./hooks-BJclsIvf.js";import"./axisSelectors-_6DhXqkc.js";import"./d3-scale-DU3kIA5p.js";import"./zIndexSlice-DTpubRK7.js";import"./renderedTicksSlice-Bn5V3AB5.js";import"./CartesianChart-B9jAZwRS.js";import"./chartDataContext-B3buAU5Y.js";import"./CategoricalChart-NWkiMroK.js";import"./Curve-CxvlU3dw.js";import"./types-BuwCBhFk.js";import"./step-rHtSy8FE.js";import"./Layer-BvRSrkrt.js";import"./ReactUtils-BqHSyciS.js";import"./Label-DOEvYZv6.js";import"./Text-CoSb7mYB.js";import"./DOMUtils-CJsccqgn.js";import"./ZIndexLayer-yILhEk3Y.js";import"./ActivePoints-DjvL664p.js";import"./Dot-DP4gaPK3.js";import"./RegisterGraphicalItemId-DkNBI1Sa.js";import"./GraphicalItemClipPath-DikKl46E.js";import"./SetGraphicalItem-EApE1d4j.js";import"./useAnimationId-DBo0HAQE.js";import"./getRadiusAndStrokeWidthFromDot-Bhc0P-qN.js";import"./graphicalItemSelectors-CG_Gq5pM.js";import"./index-Cm2tec04.js";import"./ChartSizeDimensions-56Hl6M0T.js";import"./OffsetShower-lCaRoXjj.js";import"./PlotAreaShower-Cn7QQOSS.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const mt=["CustomizedLabel"];export{e as CustomizedLabel,mt as __namedExportsOrder,at as default};
