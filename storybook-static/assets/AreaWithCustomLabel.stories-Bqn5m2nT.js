import{R as r}from"./iframe-CGL4wxKn.js";import{R as c}from"./zIndexSlice-099KjRSH.js";import{C as d}from"./ComposedChart-B3F4nto3.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BZ_-xiYU.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-J1iMbWnO.js";import"./throttle-DUUYxzVG.js";import"./index-BZoAXlEM.js";import"./index-CB__xCeL.js";import"./RechartsWrapper-g5knetkm.js";import"./axisSelectors-BMd3ki3_.js";import"./polarAxisSelectors-DW8rryyn.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-o5WrViM1.js";import"./index-BG2Ge-ql.js";import"./index-XB5jojxJ.js";import"./renderedTicksSlice-CQkNy6Mm.js";import"./index-D3e94DhQ.js";import"./fillDefinitions-Vr_akuqj.js";import"./CartesianChart-Co-UKN43.js";import"./chartDataContext-B0uy7sqw.js";import"./CategoricalChart-rWqih0Ao.js";import"./Layer-Ch4A95GV.js";import"./dataEntryStyles-CVCXFzjz.js";import"./Label-gT4vohqn.js";import"./Text-D29ZLY8y.js";import"./ZIndexLayer-CN_fYC_z.js";import"./ActivePoints-zAqYXl3v.js";import"./Dot-Dqevxc0i.js";import"./types-Blkz6f-Q.js";import"./activeStyles-BKPzxJKn.js";import"./useAnimationId-D89zGJBE.js";import"./Symbols-Bc9bgKwE.js";import"./symbol-VmBVfDDj.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-DNJWjlHF.js";import"./getRadiusAndStrokeWidthFromDot-CxKHEBK2.js";import"./ActiveShapeUtils-B2rQYcmX.js";import"./Curve-CHOREDeS.js";import"./step-GQgXeu2E.js";import"./useEffectiveDataKey-SnOfofuT.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,mt as __namedExportsOrder,at as default};
