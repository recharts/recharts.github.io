import{u as n,j as e}from"./index-Cas0CVcw.js";import{M as o,C as h}from"./blocks-DZcKKv47.js";import{C as d,W as s}from"./dimensions.stories-B3HDS-8W.js";import"./iframe-Ds1J5XKD.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Co2IbVNM.js";import"./index-CzrGLoIQ.js";import"./index-BzzxIcBT.js";import"./ChartSizeDimensions-Cg7J6IZY.js";import"./zIndexSlice-UCyaaMGS.js";import"./throttle-BH_VG--i.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Do401MpT.js";import"./isWellBehavedNumber-Dz72kwHe.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CRkbKJM2.js";import"./RechartsWrapper-BAOT1HW_.js";import"./index-D20-MSnL.js";import"./renderedTicksSlice-kb1cJng-.js";import"./axisSelectors-Tr36h9al.js";import"./d3-scale-C3U5gPbW.js";import"./CartesianChart-DOdhq5wJ.js";import"./chartDataContext-BhVZbVOm.js";import"./CategoricalChart-wjwwJKX3.js";import"./Page-Cj8EiXz7.js";import"./Line-DuxS_s48.js";import"./Layer-nVED5kUO.js";import"./Curve-C9kHMz3L.js";import"./types-BQazP4PY.js";import"./step-7tBtg14U.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D70ai7P5.js";import"./Label-CNOb6BUs.js";import"./Text-jdQ0MfG2.js";import"./DOMUtils-DsCGVJ9c.js";import"./ZIndexLayer-DZsY-UK0.js";import"./useAnimationId-CHjE-uiV.js";import"./ActivePoints-Bhs7RZpf.js";import"./Dot-C6VoQzSz.js";import"./RegisterGraphicalItemId-i_epzSee.js";import"./ErrorBarContext-aJ-QmRys.js";import"./GraphicalItemClipPath-BO5z_Dot.js";import"./SetGraphicalItem-qVzcGAlb.js";import"./getRadiusAndStrokeWidthFromDot-BOSN6lTY.js";import"./ActiveShapeUtils-CcQaIRSL.js";import"./XAxis-DoWvPRbH.js";import"./CartesianAxis-CDp_ZXfj.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./YAxis-eP85-8SJ.js";import"./Legend-Dv1icE5q.js";import"./Symbols-DTqalTwC.js";import"./symbol-IDnm7d1z.js";import"./useElementOffset-D0hlMEgK.js";import"./uniqBy-Cb9ErWqE.js";import"./iteratee-DkjsJILk.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function le(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{le as default};
