import{u as n,j as e}from"./index-CQ8yx-Wl.js";import{M as o,C as h}from"./blocks-DacPCQaj.js";import{C as d,W as s}from"./dimensions.stories-2YE3KhKw.js";import"./iframe-SuqF0IOU.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DY-qAKzO.js";import"./index-iK0jM_n6.js";import"./index-VBcGpDGq.js";import"./ChartSizeDimensions-DKj8fhbc.js";import"./zIndexSlice-DfamN9Zs.js";import"./throttle-D6-FoWPM.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-7DzpjnqO.js";import"./isWellBehavedNumber-DJK-MsfJ.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BtkawvAi.js";import"./RechartsWrapper-Bg2tG11C.js";import"./axisSelectors-DbgUQ8Ul.js";import"./d3-scale-DnD8-5rl.js";import"./index-DLroYRR9.js";import"./renderedTicksSlice-DomOKpq5.js";import"./index-DHZGQ52F.js";import"./CartesianChart-Cji0pvqd.js";import"./chartDataContext-B0QyEg6f.js";import"./CategoricalChart-D2xX8P6u.js";import"./Page-Cj8EiXz7.js";import"./Line-BjrkBSD6.js";import"./Layer-CeZWaGzt.js";import"./Curve-E3qca46q.js";import"./types-CS_OGYEB.js";import"./step-Crr8VZH2.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DXL71NvC.js";import"./Label-9O6_T9C4.js";import"./Text-UuMUK1_u.js";import"./DOMUtils-DsJOOh9b.js";import"./useId-CsqHk6Y-.js";import"./useBackwardsCompatibleTheme-C6-DbdWl.js";import"./ZIndexLayer-BN_mfTvc.js";import"./useAnimationId-ol_mxPID.js";import"./ActivePoints-BPtrfnyz.js";import"./Dot-Bait8-xr.js";import"./RegisterGraphicalItemId-BaNEX7Pr.js";import"./ErrorBarContext-BJEyAykc.js";import"./GraphicalItemClipPath-TmHiHpN1.js";import"./SetGraphicalItem-C7X7ybgb.js";import"./getRadiusAndStrokeWidthFromDot-Di11GS2z.js";import"./ActiveShapeUtils-DYWxkXZ9.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-DR2rtjC5.js";import"./CartesianAxis-Bvk6yXFf.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-CUvLYKI6.js";import"./Legend-BFabakbB.js";import"./Symbols-D-3Eog6Z.js";import"./symbol-B7wzKwMw.js";import"./useElementOffset-C83rORx-.js";import"./uniqBy-BLInEi1g.js";import"./iteratee-DO-aH00D.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
