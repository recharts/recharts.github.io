import{u as n,j as e}from"./index-Ba0d660e.js";import{M as o,C as h}from"./blocks-bT6X65vy.js";import{C as d,W as s}from"./dimensions.stories-DwkqbfIc.js";import"./iframe-DGZg1BaY.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cct5a00b.js";import"./index-clGj1WHq.js";import"./index-BXki0_jB.js";import"./ChartSizeDimensions-DVBLLZtv.js";import"./zIndexSlice-RSobkBfJ.js";import"./immer-BT6VGnPe.js";import"./get-DY0OjSK6.js";import"./resolveDefaultProps-BjAvdkCv.js";import"./isWellBehavedNumber-0KuhYisV.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CYWMV96h.js";import"./RechartsWrapper-Bacgswk5.js";import"./index-CkL0GuEG.js";import"./renderedTicksSlice-Dewx_RJS.js";import"./axisSelectors-CdelNDSz.js";import"./d3-scale-CTB_TOgf.js";import"./CartesianChart-BJ5L6c8p.js";import"./chartDataContext-Cq7x5jLr.js";import"./CategoricalChart-BMzuLFGj.js";import"./Page-Cj8EiXz7.js";import"./Line-BjwcwMYh.js";import"./Layer--_bnQ9Ul.js";import"./Curve-BNlPs19R.js";import"./types-CUzx8cK0.js";import"./step-BQdN9BCS.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CAvgFIRj.js";import"./Label-B4XUjnXV.js";import"./Text-BqNTVXko.js";import"./DOMUtils-BzC8w9yF.js";import"./ZIndexLayer-5g4pRwMA.js";import"./useAnimationId-CGxH7MOe.js";import"./ActivePoints-DJFCrMTb.js";import"./Dot-DiO2Qmm4.js";import"./RegisterGraphicalItemId-BYwdAoF6.js";import"./ErrorBarContext-DCQzTmNl.js";import"./GraphicalItemClipPath-gslOIRLN.js";import"./SetGraphicalItem-BCxyd91k.js";import"./getRadiusAndStrokeWidthFromDot-BOdJyA31.js";import"./ActiveShapeUtils-Dc_2IcP9.js";import"./XAxis-BkrEDfGE.js";import"./CartesianAxis-DDEi9eFQ.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./YAxis-BZtV9zAx.js";import"./Legend-Bucg_Anc.js";import"./Symbols-dDjIREJ5.js";import"./symbol-CR9QZI-y.js";import"./useElementOffset-FCVSXiSc.js";import"./uniqBy-Dd2sidz2.js";import"./iteratee-6x__QjEC.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
