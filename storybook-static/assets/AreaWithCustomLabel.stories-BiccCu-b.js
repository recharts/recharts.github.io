import{e as t}from"./iframe-VKSiBROl.js";import{R as c}from"./arrayEqualityCheck-BB0HA1wg.js";import{C as d}from"./ComposedChart-DRm_ML7n.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BhWDMOqH.js";import{R as u}from"./RechartsHookInspector-Bk4R2bPq.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-NGq3vz57.js";import"./immer-CPTHWkkH.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BaY8BgmV.js";import"./index-Z1DhqR18.js";import"./hooks-ZL9qLpLY.js";import"./axisSelectors-C7KTOZ5c.js";import"./d3-scale-BjDGrkpd.js";import"./zIndexSlice-DsFodTYX.js";import"./renderedTicksSlice-C68_OdSZ.js";import"./CartesianChart-o8YH5MQb.js";import"./chartDataContext-PCAfxVIZ.js";import"./CategoricalChart-ChVNCGBd.js";import"./Curve-yzuL5_Sr.js";import"./types-DY717biQ.js";import"./step-CaHu3Oa5.js";import"./Layer-B5Q3HgyD.js";import"./ReactUtils-DMEWBI26.js";import"./Label-CFO9NE9M.js";import"./Text-DIF9PeK1.js";import"./DOMUtils-BrJ5g_oy.js";import"./ZIndexLayer-VGyT3hqP.js";import"./ActivePoints-RNYfiJHn.js";import"./Dot-CcGx7WmK.js";import"./RegisterGraphicalItemId-0d646qS_.js";import"./GraphicalItemClipPath-m88eTwMP.js";import"./SetGraphicalItem-B6CVGLUm.js";import"./useAnimationId-CxCW2e1W.js";import"./getRadiusAndStrokeWidthFromDot-BF1XYufC.js";import"./graphicalItemSelectors-BDTb2oUm.js";import"./index-FZYKqp9j.js";import"./ChartSizeDimensions-Ckuhl4O0.js";import"./OffsetShower-DRsWIFHd.js";import"./PlotAreaShower-DlV2zhuR.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
