import{u as n,j as e}from"./index-FLLCd-TP.js";import{M as o,C as h}from"./blocks-DfsmzmQE.js";import{C as d,W as s}from"./dimensions.stories-DNgGy8Hq.js";import"./iframe-7Yqq7fCu.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BP89nsqC.js";import"./index-Bvs3nnJ3.js";import"./index-CIvsYy-Z.js";import"./ChartSizeDimensions-Dy4qevqE.js";import"./zIndexSlice-Clo6-Yyn.js";import"./throttle-CPS_vYKA.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DPH1JWez.js";import"./isWellBehavedNumber-3XLFrVwb.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CzrLMxQE.js";import"./RechartsWrapper-BmN3AX4B.js";import"./axisSelectors-TNeFeRD0.js";import"./d3-scale-BucieWce.js";import"./index-CMyPnnGY.js";import"./renderedTicksSlice-C7nR0wuC.js";import"./index-BmRJq5r2.js";import"./CartesianChart-B7Vexiif.js";import"./chartDataContext-BDajETE7.js";import"./CategoricalChart-DGs6T5PE.js";import"./Page-Cj8EiXz7.js";import"./Line-y-Q91fXJ.js";import"./Layer-B4eFX6wr.js";import"./Curve-Bx49RMW5.js";import"./types-BLNI4yrZ.js";import"./step-CY_23fua.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BlURIwD6.js";import"./Label-BeKnll5A.js";import"./Text-CBP65qj4.js";import"./DOMUtils-DFLenfZw.js";import"./useId-CQKco8O5.js";import"./useBackwardsCompatibleTheme-DsG9X6Al.js";import"./ZIndexLayer-CY2z0VDd.js";import"./useAnimationId-OFL2L8Zq.js";import"./ActivePoints-Df4Z0MND.js";import"./Dot-B0z70aRe.js";import"./RegisterGraphicalItemId-CBb6S0jv.js";import"./ErrorBarContext-B86Z1RsK.js";import"./GraphicalItemClipPath-ElSd1RxM.js";import"./SetGraphicalItem-DDBsqrXQ.js";import"./getRadiusAndStrokeWidthFromDot-BA9-tDMT.js";import"./ActiveShapeUtils-RlmFljs4.js";import"./useGraphicalItemIdentity-C_cMOVZX.js";import"./XAxis-1FKbFMeO.js";import"./CartesianAxis-Tr4fBNdd.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-Cy7XE4j-.js";import"./Legend-B0A2aPD8.js";import"./Symbols-CRebEb5d.js";import"./symbol-TqHkyfS6.js";import"./useElementOffset-CVlFUWt-.js";import"./uniqBy-CgUI3qsR.js";import"./iteratee-DqkESnyS.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
`,e.jsxs(i.h1,{id:"usechartwidth-usechartheight",children:[e.jsx(i.code,{children:"useChartWidth"}),", ",e.jsx(i.code,{children:"useChartHeight"})]}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"useChartWidth"})," hook returns the width of the chart in pixels. ",e.jsx(i.code,{children:"useChartHeight"})," returns the height of the chart in pixels."]}),`
`,e.jsxs(i.p,{children:["If you are using chart with hardcoded ",e.jsx(i.code,{children:"width"})," and ",e.jsx(i.code,{children:"height"}),` props, then the width returned will be the same
as the `,e.jsx(i.code,{children:"width"})," and ",e.jsx(i.code,{children:"height"})," prop on the main chart element."]}),`
`,e.jsxs(i.p,{children:["If you are using a chart with a ",e.jsx(i.code,{children:"ResponsiveContainer"}),`, the width and height will be the size of the chart
as the ResponsiveContainer has decided it would be.`]}),`
`,e.jsxs(i.p,{children:["If the chart has any axes or legend, the ",e.jsx(i.code,{children:"width"})," and ",e.jsx(i.code,{children:"height"}),` will be the size of the chart
including the axes and legend.`]}),`
`,e.jsx(i.p,{children:`The dimensions do not scale, meaning as user zoom in and out, the width/height number will not change
as the chart gets visually larger or smaller.`}),`
`,e.jsx(h,{of:s,layout:"padded"}),`
`,e.jsx(i.h2,{id:"parent-component",children:"Parent Component"}),`
`,e.jsx(i.p,{children:"The hooks can be used within any chart:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<AreaChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<BarChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<ComposedChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<FunnelChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<LineChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<PieChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<RadarChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<RadialBarChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<Sankey/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<ScatterChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<SunburstChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<Treemap/>"})}),`
`]})]})}function je(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{je as default};
