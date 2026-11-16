import{R as r}from"./iframe-DQXFH2fN.js";import{R as c}from"./zIndexSlice-Dfa7PPo3.js";import{C as d}from"./ComposedChart-BBGwgebC.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BLzUV1Is.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-lSPh-jGh.js";import"./throttle-CBXVztye.js";import"./index-LVwk1DdF.js";import"./index-BledrYYe.js";import"./RechartsWrapper-FcCSE1mG.js";import"./axisSelectors-DJbzZfhu.js";import"./polarAxisSelectors-D125t7LL.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-XeOVwhgh.js";import"./index-CIcJU2zj.js";import"./index-Bra-aG0C.js";import"./renderedTicksSlice-CbHdjAK6.js";import"./index-BsheJTgc.js";import"./fillDefinitions-KRhWslMp.js";import"./CartesianChart-DQGbpwTu.js";import"./chartDataContext-DJ78QJpQ.js";import"./CategoricalChart-t_6GcrEg.js";import"./Layer-B0dm1oba.js";import"./dataEntryStyles-CDXKXbSY.js";import"./Label-CZ1SHjxx.js";import"./Text-DcdnatC4.js";import"./ZIndexLayer-D9yot1xi.js";import"./ActivePoints-CfjMsAgl.js";import"./Dot-CC2Uce3B.js";import"./types-CN3-AGJF.js";import"./activeStyles-DgOGJt0j.js";import"./useAnimationId-BlZ_idpE.js";import"./Symbols-D7I-QI86.js";import"./symbol-8Qaz948q.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-CRYZ3Qzj.js";import"./getRadiusAndStrokeWidthFromDot-CxI0qt08.js";import"./ActiveShapeUtils-CbcAbfiK.js";import"./Curve-Dawv8-Of.js";import"./step-Bu-hwkdA.js";import"./useEffectiveDataKey-FX7cYr8p.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
