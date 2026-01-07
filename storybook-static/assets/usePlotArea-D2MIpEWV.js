import{j as e}from"./jsx-runtime-CNrc1MSZ.js";import{useMDXComponents as o}from"./index-dyDilRky.js";import{M as i,C as s}from"./blocks-CeP2ZZIJ.js";import{C as a,U as h}from"./usePlotArea.stories-C1-f_3la.js";import"./iframe-DaCZzlB4.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DqUfe0wd.js";import"./PlotAreaShower-DACZviw9.js";import"./ChartSizeDimensions-Dn5P1TLL.js";import"./arrayEqualityCheck-xIdjdXyO.js";import"./resolveDefaultProps-CDCOnC3u.js";import"./PolarUtils-CS41bXSK.js";import"./hooks-96RhMqDh.js";import"./axisSelectors-BaN6N1Lo.js";import"./ComposedChart-qrh-EwWj.js";import"./RechartsWrapper-CytJWPJg.js";import"./zIndexSlice-B7osVKE5.js";import"./CartesianChart-CmxBhKD5.js";import"./chartDataContext-C2uZEvtu.js";import"./CategoricalChart-BnmCoL2H.js";import"./Line-BPiuYduO.js";import"./Layer-BKXPn5xD.js";import"./ReactUtils-yqeNEccg.js";import"./Label-D2rMkPMU.js";import"./Text-3g0qzZJG.js";import"./DOMUtils-DZpmyTbi.js";import"./ZIndexLayer-Deqw7_sa.js";import"./ActivePoints-ChVP_ShR.js";import"./Dot-BPHEuoNZ.js";import"./types-CyhQh7_Z.js";import"./RegisterGraphicalItemId-BC9wjUC-.js";import"./ErrorBarContext-D3ibGYOb.js";import"./GraphicalItemClipPath-CLpO-bZw.js";import"./SetGraphicalItem-DKRKp8eM.js";import"./useAnimationId-DMDiR4YX.js";import"./getRadiusAndStrokeWidthFromDot-7uzclWAv.js";import"./ActiveShapeUtils-DeHR3FEj.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-z0Tijc68.js";import"./Trapezoid-OHYhJgzZ.js";import"./Sector-D1uAN8IN.js";import"./Symbols-CqwnDYaa.js";import"./Curve-BcpAE4Ao.js";import"./XAxis-Xd1zSAtt.js";import"./CartesianAxis-B3Ks68Jf.js";import"./YAxis-CjzxMwK0.js";import"./Legend-LNiW__wh.js";import"./useElementOffset-CL0kWG2p.js";import"./iteratee-m2fxanZQ.js";import"./Page-DPte-9pC.js";function n(t){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
`,e.jsx(r.h1,{id:"useplotarea",children:e.jsx(r.code,{children:"usePlotArea"})}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`import { usePlotArea } from 'recharts';

function MyChart() {
  const plotArea = usePlotArea();
  return; // ...
}
`})}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"usePlotArea"})," hook returns the dimensions of the plot area in pixels."]}),`
`,e.jsx(r.p,{children:"The plot area is the area where the data is rendered, and shows the actual data points, bars, lines, etc."}),`
`,e.jsxs(r.p,{children:["Plot area ",e.jsx(r.code,{children:"width"})," and ",e.jsx(r.code,{children:"height"}),` are the dimensions in pixels;
`,e.jsx(r.code,{children:"x"})," and ",e.jsx(r.code,{children:"y"})," are the coordinates of the top-left corner of the plot area relative to the chart container."]}),`
`,e.jsx(r.p,{children:"All of these values are independent of the chart's position on the page, meaning they do not change as the chart is scrolled or resized."}),`
`,e.jsx(r.p,{children:`They are also independent of the scale and zoom, meaning that as the user zooms in and out,
the plot area dimensions will not change as the chart gets visually larger or smaller.`}),`
`,e.jsx(s,{of:h,layout:"padded"}),`
`,e.jsx(r.h2,{id:"parent-component",children:"Parent Component"}),`
`,e.jsx(r.p,{children:"This hook can be used within any chart:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"<AreaChart/>"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"<BarChart/>"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"<ComposedChart/>"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"<FunnelChart/>"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"<LineChart/>"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"<PieChart/>"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"<RadarChart/>"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"<RadialBarChart/>"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"<Sankey/>"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"<ScatterChart/>"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"<SunburstChart/>"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"<Treemap/>"})}),`
`]})]})}function ie(t={}){const{wrapper:r}={...o(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(n,{...t})}):n(t)}export{ie as default};
