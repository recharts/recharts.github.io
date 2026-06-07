import{u as n,j as e}from"./index-j0dT2syp.js";import{M as o,C as h}from"./blocks-CVXSzIEZ.js";import{C as d,W as s}from"./dimensions.stories-DD6b1y3I.js";import"./iframe-CIqcR0nr.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CI5kewFp.js";import"./index-D3_7IQAj.js";import"./index-iWp3ygHn.js";import"./ChartSizeDimensions-CBP2seBS.js";import"./zIndexSlice-BaZcNNNO.js";import"./immer-DOlCD6_E.js";import"./get-CuhoYgBd.js";import"./resolveDefaultProps-X_RPaIii.js";import"./isWellBehavedNumber-CN_oQGvc.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-bqMlW8-b.js";import"./RechartsWrapper-CO7Bj1Ew.js";import"./index-BRQXzpqS.js";import"./renderedTicksSlice-uyZ8N1qc.js";import"./axisSelectors-Dp0MorEj.js";import"./d3-scale-BVoLe-e3.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BiFR7vHR.js";import"./chartDataContext-BkIJbLAm.js";import"./CategoricalChart-OQdWBIBS.js";import"./Page-Cj8EiXz7.js";import"./Line-BX67Nlm1.js";import"./Layer-Cz--vJfn.js";import"./Curve-DrcpD24k.js";import"./types-3DMlx_O9.js";import"./step-DBJepXtz.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-5cW9jO0l.js";import"./Label-CuY-JOss.js";import"./Text-CimnMCMD.js";import"./DOMUtils-DMPXj1nB.js";import"./ZIndexLayer-B9KPNn2Z.js";import"./useAnimationId-BJaGTs_s.js";import"./ActivePoints-B5L26l-l.js";import"./Dot-C6Y9kE6a.js";import"./RegisterGraphicalItemId-BxGDByrp.js";import"./ErrorBarContext-D7ZmPrb-.js";import"./GraphicalItemClipPath-CMCMKENx.js";import"./SetGraphicalItem-C8JcvXzc.js";import"./getRadiusAndStrokeWidthFromDot-D2ZfklZg.js";import"./ActiveShapeUtils-BLEsVfwW.js";import"./XAxis-sUTGKqnh.js";import"./CartesianAxis-wzAvkxKf.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./YAxis-Cp6hJTBs.js";import"./Legend-By7FykyZ.js";import"./Symbols-H-5RG3h3.js";import"./symbol-DI1d6Mel.js";import"./useElementOffset-DG3jpNvQ.js";import"./uniqBy-BGYajFOV.js";import"./iteratee-DoUmNYIo.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function ae(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{ae as default};
