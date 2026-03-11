import{e as t}from"./iframe-eaOsasXA.js";import{R as c}from"./arrayEqualityCheck-CMs0gYkZ.js";import{C as d}from"./ComposedChart-DAn4V3cy.js";import{A as l}from"./Area-BCDEWQF-.js";import{R as h}from"./RechartsHookInspector-CfQxcoqC.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BRN_chMz.js";import"./immer-h0oz4gDz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-kQIwCL0D.js";import"./index-CBq7QNMe.js";import"./hooks-DkQXEwbK.js";import"./axisSelectors-rZ1oBaef.js";import"./d3-scale-fyi29fM7.js";import"./zIndexSlice-CQVRJFSN.js";import"./renderedTicksSlice-HUT3i4LQ.js";import"./CartesianChart-DqLib-3F.js";import"./chartDataContext-BZaY1x-g.js";import"./CategoricalChart-BHzek6ba.js";import"./Curve-BpLwOdP7.js";import"./types-DVEQRe7O.js";import"./step-wTrvujLP.js";import"./Layer-CEQ15rDn.js";import"./ReactUtils-rQN1ow78.js";import"./Label-CM17nvk9.js";import"./Text-CS5oLB7f.js";import"./DOMUtils-DKDW8odg.js";import"./ZIndexLayer-4Bmx0L-z.js";import"./ActivePoints-_V2GyU66.js";import"./Dot-CL5p6Fms.js";import"./RegisterGraphicalItemId-1T1LHaRb.js";import"./GraphicalItemClipPath-DHbALYaQ.js";import"./SetGraphicalItem-CI6Uk2ug.js";import"./useAnimationId-Cipx0nDt.js";import"./getRadiusAndStrokeWidthFromDot-Cifjzjy_.js";import"./graphicalItemSelectors-PhT4ox6_.js";import"./index-D4X9rB5g.js";import"./ChartSizeDimensions-DQ43uIY8.js";import"./OffsetShower-Y12_Isjl.js";import"./PlotAreaShower-ND2vevs1.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
