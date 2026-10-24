import{a as r}from"./iframe-CptpVVdK.js";import{R as c}from"./zIndexSlice-CAnxLxZK.js";import{C as d}from"./ComposedChart-Bnlr5v8S.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BvBbydSd.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BVKLcYc0.js";import"./index-BTwylabs.js";import"./index-alo09WMF.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Bdo80tkX.js";import"./isWellBehavedNumber-Cb3PSSsF.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-c3RFdf0m.js";import"./axisSelectors-DPTiSWkh.js";import"./d3-scale-DZZpobVW.js";import"./index-Dqps63Gr.js";import"./index-CniHkqMt.js";import"./renderedTicksSlice-Cw--JOgv.js";import"./index-Bya_Ui15.js";import"./CartesianChart-kEptpjHt.js";import"./chartDataContext-YVUr32e2.js";import"./CategoricalChart-DUkp-alm.js";import"./Layer-DZV5gQWy.js";import"./activeStyles-tsd2tFv6.js";import"./Label-DWXJ-Xrk.js";import"./Text-DTbKMiqG.js";import"./pageBackground-0u46-xLx.js";import"./useId-BHxaLpBq.js";import"./useBackwardsCompatibleTheme-Ck1iBTHP.js";import"./ZIndexLayer-DRWh5tG_.js";import"./dataEntryStyles-pGU1xid_.js";import"./useAnimationId-CHix4qCt.js";import"./ActivePoints-E2x2ttJQ.js";import"./Dot-BPOiKA3s.js";import"./types-LYqggaBA.js";import"./RegisterGraphicalItemId-BgCOPa3U.js";import"./SetGraphicalItem-CBYCujS3.js";import"./getRadiusAndStrokeWidthFromDot-LLnmfsQ1.js";import"./ActiveShapeUtils-D7m_xdxo.js";import"./Curve-DFA3txiV.js";import"./step-BF-v6b5j.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-DVLIQZiI.js";const mt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
