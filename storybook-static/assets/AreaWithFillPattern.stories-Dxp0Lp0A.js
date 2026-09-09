import{a as t}from"./iframe-3mrIZkil.js";import{R as p}from"./zIndexSlice-L3ODJxG9.js";import{C as m}from"./ComposedChart-B1NQbFGd.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-kfbs79PE.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-rESuvk1I.js";import"./index-BXM7Ne4y.js";import"./index-CDwIhtzp.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-i-Y4kJTh.js";import"./isWellBehavedNumber-ZyDhg4rS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DwVI4RN7.js";import"./axisSelectors-DAOLJeWY.js";import"./d3-scale-CguR2U2N.js";import"./index-BtaPmQxv.js";import"./index-BdkN9O5O.js";import"./renderedTicksSlice-DYEa3gne.js";import"./index-pFwFQ5O8.js";import"./CartesianChart-CUvaXipt.js";import"./chartDataContext-FTM0Yeif.js";import"./CategoricalChart-D95OMo3E.js";import"./Layer-DjZWmALl.js";import"./AnimatedItems-DhXJ9Je_.js";import"./Label-BIqKgU55.js";import"./Text-DUYy6Shz.js";import"./DOMUtils-CXxLAhGm.js";import"./useId-Cxwt81yN.js";import"./useBackwardsCompatibleTheme-lR8vi8zs.js";import"./ZIndexLayer-D4cc4mD4.js";import"./useAnimationId-BnnXfXw0.js";import"./ActivePoints-DxgGQQ1D.js";import"./Dot-Sx0Kvb2o.js";import"./types-8JRxRnLp.js";import"./RegisterGraphicalItemId-BDB0ngzS.js";import"./GraphicalItemClipPath-Bb5lUrgq.js";import"./SetGraphicalItem-9-RZ0mcl.js";import"./getRadiusAndStrokeWidthFromDot-DN4z1IWE.js";import"./ActiveShapeUtils-BBpy3JCJ.js";import"./Curve-Bw-gimBr.js";import"./step-DsELI93G.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-BcKg6UBn.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <defs>
            <pattern id="left" width="12" height="4" patternUnits="userSpaceOnUse">
              <rect width="4" height="4" fill="#8884d8" />
            </pattern>
            <pattern id="right" width="8" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="4" height="4" fill="#82ca9d" />
            </pattern>
          </defs>
          <Area type="monotone" dataKey="x" stroke="#8884d8" fillOpacity={1} fill="url(#left)" />
          <Area type="monotone" dataKey="y" stroke="#82ca9d" fillOpacity={1} fill="url(#right)" />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,rt as __namedExportsOrder,et as default};
