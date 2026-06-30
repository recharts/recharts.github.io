import{u as n,j as e}from"./index-CkkklKJi.js";import{M as o,C as h}from"./blocks-D-9werzD.js";import{C as d,W as s}from"./dimensions.stories-BKvmA8v7.js";import"./iframe-CysaVPuT.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BoQpP3ng.js";import"./index-C8sovufb.js";import"./index-CIm0M9H5.js";import"./ChartSizeDimensions-4410Tyxq.js";import"./zIndexSlice-CBspyTeT.js";import"./throttle-BijqxQd6.js";import"./get-Dv3cK-ON.js";import"./resolveDefaultProps-CB9Bmy8P.js";import"./isWellBehavedNumber-CHReb6Hq.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-9ef0ZM8L.js";import"./RechartsWrapper-CXNQztOV.js";import"./index-ClhA1x-k.js";import"./renderedTicksSlice-L6Kj9uMm.js";import"./axisSelectors-CybQsixZ.js";import"./d3-scale-BWFUWIRC.js";import"./CartesianChart-Dlco-df9.js";import"./chartDataContext-BsGd8oTW.js";import"./CategoricalChart-B4xuyyeZ.js";import"./Page-Cj8EiXz7.js";import"./Line-ez-HBiNN.js";import"./Layer-DQgbcZ6W.js";import"./Curve-DVkbv2J8.js";import"./types-DWuPiLas.js";import"./step-vxR68qu5.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-HWCD5qdq.js";import"./Label-B_m_1QPA.js";import"./Text-DqT5jcn2.js";import"./DOMUtils-z1JZhy6H.js";import"./ZIndexLayer-C6PjgPWA.js";import"./useAnimationId-XV22nS6k.js";import"./ActivePoints-CQLYJKIJ.js";import"./Dot-dmuSDw2U.js";import"./RegisterGraphicalItemId-BIn5Riid.js";import"./ErrorBarContext-CYyCl8MN.js";import"./GraphicalItemClipPath-DMny06t1.js";import"./SetGraphicalItem-ihbnCYD8.js";import"./getRadiusAndStrokeWidthFromDot-DDSmqaVx.js";import"./ActiveShapeUtils-HeGPuRiV.js";import"./XAxis-BHTWnpmK.js";import"./CartesianAxis-ACLpIvis.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./YAxis-hZ4kGdBq.js";import"./Legend-CzfoJSHE.js";import"./Symbols-eew_Q_1o.js";import"./symbol-CNPuKnzX.js";import"./useElementOffset-B-396utJ.js";import"./uniqBy-BJRjFRzK.js";import"./iteratee-DuqmaN7B.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
