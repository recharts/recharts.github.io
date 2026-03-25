import{j as e}from"./jsx-runtime-B9PkKIwg.js";import{useMDXComponents as n}from"./index-ByO9kSeA.js";import{M as o,C as h}from"./blocks-Ddrru2Qr.js";import{C as d,W as s}from"./dimensions.stories-BKZ-5Dkk.js";import"./iframe-DjpYK-o-.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DPPgUz6W.js";import"./ChartSizeDimensions-B8zKV2n0.js";import"./arrayEqualityCheck-BdSiZsNM.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C42G_ffr.js";import"./immer-D4y8T5a7.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-5wDZbkHU.js";import"./RechartsWrapper-CauuEd3r.js";import"./index-B9U8pH8P.js";import"./hooks-DMOVvbqY.js";import"./axisSelectors-DOtt8rOg.js";import"./d3-scale-BGWrA6kg.js";import"./zIndexSlice-BwAJg9IA.js";import"./renderedTicksSlice-DA_2QpHv.js";import"./CartesianChart-S0vn2j2X.js";import"./chartDataContext-DMhYHlkG.js";import"./CategoricalChart-DEHztz1y.js";import"./Line-BFOWOId7.js";import"./Layer-ClpAj3mi.js";import"./ReactUtils-0Og-Hkqc.js";import"./Label-Df3TKPqw.js";import"./Text-hUj7bTMa.js";import"./DOMUtils-Bertp5OK.js";import"./ZIndexLayer-BYBCo22l.js";import"./ActivePoints-0ZU6F1s-.js";import"./Dot-CRJ16IiO.js";import"./types-e-ZS-U8T.js";import"./RegisterGraphicalItemId-BvqmWFzi.js";import"./ErrorBarContext-DPi1-we4.js";import"./GraphicalItemClipPath-CTrBCXbW.js";import"./SetGraphicalItem-a4oiN2v8.js";import"./useAnimationId-DA-f91a4.js";import"./getRadiusAndStrokeWidthFromDot-DAsawtMn.js";import"./ActiveShapeUtils-Dirt4gFG.js";import"./isPlainObject-Bpjrt-ZA.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B37Ytfod.js";import"./Trapezoid-BWufpwnM.js";import"./Sector-0IwDdBHs.js";import"./Symbols-BYV52fjj.js";import"./symbol-BODo34re.js";import"./step-BxVjdfNs.js";import"./Curve-B8xtuMQr.js";import"./XAxis-Bcdqw-wv.js";import"./CartesianAxis-BU6WfKzj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-BdrmorAZ.js";import"./Legend-CvAMLOJA.js";import"./useElementOffset-DnFMhM4t.js";import"./uniqBy-kirwiohz.js";import"./iteratee-CjKMdjLN.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function xe(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{xe as default};
