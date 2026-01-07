import{r as l,e as t}from"./iframe-DaCZzlB4.js";import{R as h}from"./arrayEqualityCheck-xIdjdXyO.js";import{C as u}from"./ComposedChart-qrh-EwWj.js";import{B as g}from"./Bar-BP5Xpgoo.js";import{C as f}from"./tooltipContext-CtRObmAP.js";import{R as C}from"./RechartsHookInspector-C1qZr8kA.js";import{p as a}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CDCOnC3u.js";import"./PolarUtils-CS41bXSK.js";import"./RechartsWrapper-CytJWPJg.js";import"./hooks-96RhMqDh.js";import"./axisSelectors-BaN6N1Lo.js";import"./zIndexSlice-B7osVKE5.js";import"./CartesianChart-CmxBhKD5.js";import"./chartDataContext-C2uZEvtu.js";import"./CategoricalChart-BnmCoL2H.js";import"./Layer-BKXPn5xD.js";import"./ReactUtils-yqeNEccg.js";import"./Label-D2rMkPMU.js";import"./Text-3g0qzZJG.js";import"./DOMUtils-DZpmyTbi.js";import"./ZIndexLayer-Deqw7_sa.js";import"./types-CyhQh7_Z.js";import"./ActiveShapeUtils-DeHR3FEj.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-z0Tijc68.js";import"./useAnimationId-DMDiR4YX.js";import"./Trapezoid-OHYhJgzZ.js";import"./Sector-D1uAN8IN.js";import"./Symbols-CqwnDYaa.js";import"./Curve-BcpAE4Ao.js";import"./RegisterGraphicalItemId-BC9wjUC-.js";import"./ErrorBarContext-D3ibGYOb.js";import"./GraphicalItemClipPath-CLpO-bZw.js";import"./SetGraphicalItem-DKRKp8eM.js";import"./getZIndexFromUnknown-D_uz6Rbn.js";import"./graphicalItemSelectors-kdl34reE.js";import"./index-DqUfe0wd.js";import"./ChartSizeDimensions-Dn5P1TLL.js";import"./OffsetShower-CyCVWv2W.js";import"./PlotAreaShower-DACZviw9.js";const mt={title:"Examples/cartesian/Bar/Customised Event"},e={render:()=>{const[n,c]=l.useState(1),[d,i]=[600,300];return t.createElement(t.Fragment,null,t.createElement("h2",null,"Clicking a Bar triggers the event"),t.createElement(h,{width:"100%",height:i},t.createElement(u,{width:d,height:i,margin:{top:20,right:20,bottom:20,left:20},data:a},t.createElement(g,{onClick:(o,r)=>c(r),dataKey:"uv",isAnimationActive:!1},a.map(({name:o},r)=>t.createElement(f,{cursor:"pointer",fill:r===n?"#82ca9d":"#8884d8",key:`cell-${o}`}))),t.createElement(C,null))))}};var m,p,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return <>
        <h2>Clicking a Bar triggers the event</h2>
        <ResponsiveContainer width="100%" height={surfaceHeight}>
          <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20
        }} data={pageData}>
            <Bar onClick={(_data, index) => setActiveIndex(index)} dataKey="uv" isAnimationActive={false}>
              {pageData.map(({
              name
            }, index: number) => <Cell cursor="pointer" fill={index === activeIndex ? '#82ca9d' : '#8884d8'} key={\`cell-\${name}\`} />)}
            </Bar>
            <RechartsHookInspector />
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(s=(p=e.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const pt=["CustomizedEvent"];export{e as CustomizedEvent,pt as __namedExportsOrder,mt as default};
