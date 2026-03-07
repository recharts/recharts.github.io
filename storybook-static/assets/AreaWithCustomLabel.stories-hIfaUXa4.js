import{e as t}from"./iframe-BRu_qZg1.js";import{R as c}from"./arrayEqualityCheck-BgwbYKtC.js";import{C as d}from"./ComposedChart-BejM8Hgg.js";import{A as l}from"./Area-Gk-NLr9b.js";import{R as h}from"./RechartsHookInspector-CJy-wMRv.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-ClDGSYA8.js";import"./immer-CiIZXnz-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B9gb15RL.js";import"./index-DYVbWT0W.js";import"./hooks-cMPGG-ti.js";import"./axisSelectors-WgiG_2zA.js";import"./d3-scale-DgD4kZyM.js";import"./zIndexSlice-CjcwtRul.js";import"./renderedTicksSlice-XQiDw47v.js";import"./CartesianChart-DNVXg1S9.js";import"./chartDataContext-BYCMtEPQ.js";import"./CategoricalChart-CRbty2Pg.js";import"./Curve-CSGMMXpz.js";import"./types-CV4LMBiy.js";import"./step-XF9-athh.js";import"./Layer-BK1KTr5e.js";import"./ReactUtils-gnwCD4Om.js";import"./Label-PVHJRfQa.js";import"./Text-CZ6mhO2l.js";import"./DOMUtils-Np4d91u5.js";import"./ZIndexLayer-C8D4smXi.js";import"./ActivePoints-lX6lnj3q.js";import"./Dot-DbWS2m0E.js";import"./RegisterGraphicalItemId-KDJ0wyU8.js";import"./GraphicalItemClipPath-rMExk2wU.js";import"./SetGraphicalItem-DZJju-u_.js";import"./useAnimationId-D8a-5J-X.js";import"./getRadiusAndStrokeWidthFromDot-CXiKui9m.js";import"./graphicalItemSelectors-C1DBQX2m.js";import"./index-CUWwfEzD.js";import"./ChartSizeDimensions-DNlI3sC4.js";import"./OffsetShower-Cm8zLz0R.js";import"./PlotAreaShower-Bj1zpgLw.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
