import{a as r}from"./iframe-3mrIZkil.js";import{R as c}from"./zIndexSlice-L3ODJxG9.js";import{C as d}from"./ComposedChart-B1NQbFGd.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-kfbs79PE.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-rESuvk1I.js";import"./index-BXM7Ne4y.js";import"./index-CDwIhtzp.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-i-Y4kJTh.js";import"./isWellBehavedNumber-ZyDhg4rS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DwVI4RN7.js";import"./axisSelectors-DAOLJeWY.js";import"./d3-scale-CguR2U2N.js";import"./index-BtaPmQxv.js";import"./index-BdkN9O5O.js";import"./renderedTicksSlice-DYEa3gne.js";import"./index-pFwFQ5O8.js";import"./CartesianChart-CUvaXipt.js";import"./chartDataContext-FTM0Yeif.js";import"./CategoricalChart-D95OMo3E.js";import"./Layer-DjZWmALl.js";import"./AnimatedItems-DhXJ9Je_.js";import"./Label-BIqKgU55.js";import"./Text-DUYy6Shz.js";import"./DOMUtils-CXxLAhGm.js";import"./useId-Cxwt81yN.js";import"./useBackwardsCompatibleTheme-lR8vi8zs.js";import"./ZIndexLayer-D4cc4mD4.js";import"./useAnimationId-BnnXfXw0.js";import"./ActivePoints-DxgGQQ1D.js";import"./Dot-Sx0Kvb2o.js";import"./types-8JRxRnLp.js";import"./RegisterGraphicalItemId-BDB0ngzS.js";import"./GraphicalItemClipPath-Bb5lUrgq.js";import"./SetGraphicalItem-9-RZ0mcl.js";import"./getRadiusAndStrokeWidthFromDot-DN4z1IWE.js";import"./ActiveShapeUtils-BBpy3JCJ.js";import"./Curve-Bw-gimBr.js";import"./step-DsELI93G.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-BcKg6UBn.js";const mt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
