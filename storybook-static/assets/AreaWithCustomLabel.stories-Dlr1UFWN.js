import{R as e}from"./iframe-CZrGjRVd.js";import{R as c}from"./zIndexSlice-DVGip-HY.js";import{C as d}from"./ComposedChart-BOBoYmjb.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BAmVLPm7.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-iaCNi1Qj.js";import"./index-DAuCYBcx.js";import"./index-BqYtnYZK.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DJ2k4-YE.js";import"./isWellBehavedNumber-sGwfAa8m.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Db3bv7S_.js";import"./index-BNgNXemJ.js";import"./index-DxrI-k1l.js";import"./renderedTicksSlice-BcK_sHSr.js";import"./axisSelectors-DxaBLx_c.js";import"./d3-scale-uXV0YxbH.js";import"./CartesianChart-D-HZeUFd.js";import"./chartDataContext-DtAKwxQ-.js";import"./CategoricalChart-BkyPecya.js";import"./Layer-CQqaCNmW.js";import"./AnimatedItems-CMzmfQX_.js";import"./Label-D0FS6r7s.js";import"./Text-BZ2aXp_V.js";import"./DOMUtils-DGi0GryR.js";import"./ZIndexLayer-BIAG6lUs.js";import"./useAnimationId-Dfan-wHL.js";import"./ActivePoints-DzdtVF-l.js";import"./Dot-B_n5UQyN.js";import"./types-BqsVHy7N.js";import"./RegisterGraphicalItemId-CHZ0a46K.js";import"./GraphicalItemClipPath-CrMwIhJh.js";import"./SetGraphicalItem-DKI6WvVx.js";import"./getRadiusAndStrokeWidthFromDot-DAppAzWA.js";import"./ActiveShapeUtils-Cxg-zL3x.js";import"./Curve-DmlyDZC5.js";import"./step-1n_WS_bQ.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-BMQ0ncsa.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
