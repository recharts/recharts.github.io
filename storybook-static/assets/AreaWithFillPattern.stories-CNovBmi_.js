import{R as t}from"./iframe-CZrGjRVd.js";import{R as p}from"./zIndexSlice-DVGip-HY.js";import{C as m}from"./ComposedChart-BOBoYmjb.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BAmVLPm7.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-iaCNi1Qj.js";import"./index-DAuCYBcx.js";import"./index-BqYtnYZK.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DJ2k4-YE.js";import"./isWellBehavedNumber-sGwfAa8m.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Db3bv7S_.js";import"./index-BNgNXemJ.js";import"./index-DxrI-k1l.js";import"./renderedTicksSlice-BcK_sHSr.js";import"./axisSelectors-DxaBLx_c.js";import"./d3-scale-uXV0YxbH.js";import"./CartesianChart-D-HZeUFd.js";import"./chartDataContext-DtAKwxQ-.js";import"./CategoricalChart-BkyPecya.js";import"./Layer-CQqaCNmW.js";import"./AnimatedItems-CMzmfQX_.js";import"./Label-D0FS6r7s.js";import"./Text-BZ2aXp_V.js";import"./DOMUtils-DGi0GryR.js";import"./ZIndexLayer-BIAG6lUs.js";import"./useAnimationId-Dfan-wHL.js";import"./ActivePoints-DzdtVF-l.js";import"./Dot-B_n5UQyN.js";import"./types-BqsVHy7N.js";import"./RegisterGraphicalItemId-CHZ0a46K.js";import"./GraphicalItemClipPath-CrMwIhJh.js";import"./SetGraphicalItem-DKI6WvVx.js";import"./getRadiusAndStrokeWidthFromDot-DAppAzWA.js";import"./ActiveShapeUtils-Cxg-zL3x.js";import"./Curve-DmlyDZC5.js";import"./step-1n_WS_bQ.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-BMQ0ncsa.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const $=["FillPattern"];export{e as FillPattern,$ as __namedExportsOrder,Z as default};
