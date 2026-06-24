import{u as n,j as e}from"./index-BGNxAyac.js";import{M as o,C as h}from"./blocks-52aU6-__.js";import{C as d,W as s}from"./dimensions.stories-B6hrD8mV.js";import"./iframe-C-fup5Id.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dx7TC_Rp.js";import"./index-DjFdhAan.js";import"./index-BlVQDt2E.js";import"./ChartSizeDimensions-DtgujR68.js";import"./zIndexSlice-NTR0fs-C.js";import"./immer-8TCI2H73.js";import"./get-p2wvzD9I.js";import"./resolveDefaultProps-OK-IJ12C.js";import"./isWellBehavedNumber-DLU1AHVw.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Jz5lk914.js";import"./RechartsWrapper-B95PZmfT.js";import"./index-DNWmVjf2.js";import"./renderedTicksSlice-DiIPZqfD.js";import"./axisSelectors-BO6Bv25T.js";import"./d3-scale-BaBWXdX7.js";import"./CartesianChart-DGFEm_4g.js";import"./chartDataContext-Ci_9Tusi.js";import"./CategoricalChart-2uAqMqKC.js";import"./Page-Cj8EiXz7.js";import"./Line-Bwf9fLP_.js";import"./Layer-BxCAIV-n.js";import"./Curve-BxzrSemv.js";import"./types-BIM6WHXQ.js";import"./step-BjlE7YIb.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BHa_3vog.js";import"./Label-Dx6_KP12.js";import"./Text-DhUd53xM.js";import"./DOMUtils-CRh4TCoN.js";import"./ZIndexLayer-DdUd9A7h.js";import"./useAnimationId-CHZsXmiy.js";import"./ActivePoints-_HKP03c-.js";import"./Dot-Blb5FiAy.js";import"./RegisterGraphicalItemId-mXg0uLQv.js";import"./ErrorBarContext-P4JGsE5W.js";import"./GraphicalItemClipPath-CURGfNfz.js";import"./SetGraphicalItem-KcsUgiZW.js";import"./getRadiusAndStrokeWidthFromDot-BZItNAyz.js";import"./ActiveShapeUtils-BmOgDWMs.js";import"./XAxis-DODICsjR.js";import"./CartesianAxis-DNfda7To.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./YAxis-B46hC9dU.js";import"./Legend-DuXEzb1r.js";import"./Symbols-Dk8hcEz4.js";import"./symbol-DNpitnQR.js";import"./useElementOffset-e7BpmwTH.js";import"./uniqBy-DmJ3MZLP.js";import"./iteratee-C8R--wWy.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
