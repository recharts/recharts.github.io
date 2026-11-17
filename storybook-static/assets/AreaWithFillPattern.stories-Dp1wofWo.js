import{R as t}from"./iframe-Czzk5Bx-.js";import{R as p}from"./zIndexSlice-CcZCAOP2.js";import{C as m}from"./ComposedChart-BWfmB2id.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-ob6ZTxOp.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Csc694qB.js";import"./throttle-Dlw7_zhK.js";import"./index-CtnBEbb_.js";import"./index-CElqLkJS.js";import"./RechartsWrapper-C5Ex_ZCH.js";import"./axisSelectors-BthV4RsX.js";import"./polarAxisSelectors-Bgc5VpYB.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CS0QJ-EZ.js";import"./index-CAks9lDH.js";import"./index-yeT-45bY.js";import"./renderedTicksSlice-BwJ2p4Mi.js";import"./index-CsxmvEat.js";import"./fillDefinitions-DaR2TDo1.js";import"./CartesianChart-D3FUkn-t.js";import"./chartDataContext--mSdRmgw.js";import"./CategoricalChart-a1Xr9UIu.js";import"./getRadiusAndStrokeWidthFromDot-BOcadJ27.js";import"./Layer-CarPpKFV.js";import"./dataEntryStyles-C8IdewjD.js";import"./Label-CoDIIawi.js";import"./Text-CSorP4yu.js";import"./ZIndexLayer-DISaA8MD.js";import"./ActivePoints-7NJ9DiE-.js";import"./Dot-qyx0vbCn.js";import"./types-Bykt0Hlw.js";import"./activeStyles-Dd2x1Ur1.js";import"./useAnimationId-BMmeHowj.js";import"./Symbols-DOiO9HXo.js";import"./symbol-DOUGW8Ut.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-DZqA_DJ9.js";import"./ActiveShapeUtils-BDX2WB3N.js";import"./Curve-DNAnmcp5.js";import"./step-C5vJ1U24.js";import"./useEffectiveDataKey-BCok4F6X.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,et as __namedExportsOrder,tt as default};
