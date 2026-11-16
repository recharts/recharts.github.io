import{u as n,j as e}from"./index-Cg2vDpjV.js";import{M as o,C as h}from"./blocks-D3HH9OAf.js";import{C as d,W as s}from"./dimensions.stories-pwTpz0eh.js";import"./iframe-DQXFH2fN.js";import"./preload-helper-Dp1pzeXC.js";import"./index-LVwk1DdF.js";import"./index-BledrYYe.js";import"./index-Bra-aG0C.js";import"./ChartSizeDimensions-ov9xgZvs.js";import"./zIndexSlice-Dfa7PPo3.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-lSPh-jGh.js";import"./throttle-CBXVztye.js";import"./ComposedChart-BBGwgebC.js";import"./RechartsWrapper-FcCSE1mG.js";import"./axisSelectors-DJbzZfhu.js";import"./polarAxisSelectors-D125t7LL.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-XeOVwhgh.js";import"./index-CIcJU2zj.js";import"./renderedTicksSlice-CbHdjAK6.js";import"./index-BsheJTgc.js";import"./fillDefinitions-KRhWslMp.js";import"./CartesianChart-DQGbpwTu.js";import"./chartDataContext-DJ78QJpQ.js";import"./CategoricalChart-t_6GcrEg.js";import"./Page-Cj8EiXz7.js";import"./Line-CSVCJdJ6.js";import"./Layer-B0dm1oba.js";import"./Curve-Dawv8-Of.js";import"./types-CN3-AGJF.js";import"./step-Bu-hwkdA.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CDXKXbSY.js";import"./Label-CZ1SHjxx.js";import"./Text-DcdnatC4.js";import"./ZIndexLayer-D9yot1xi.js";import"./ActivePoints-CfjMsAgl.js";import"./Dot-CC2Uce3B.js";import"./activeStyles-DgOGJt0j.js";import"./useAnimationId-BlZ_idpE.js";import"./Symbols-D7I-QI86.js";import"./symbol-8Qaz948q.js";import"./ErrorBarContext-CbK3TAVw.js";import"./SetGraphicalItem-CRYZ3Qzj.js";import"./getRadiusAndStrokeWidthFromDot-CxI0qt08.js";import"./ActiveShapeUtils-CbcAbfiK.js";import"./useEffectiveDataKey-FX7cYr8p.js";import"./XAxis-DeVff73G.js";import"./CartesianAxis-FqFP5ld6.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-DxKBEaoV.js";import"./Legend-CQCF_VZ5.js";import"./useElementOffset-jipf_0Cu.js";import"./uniqBy-Dc0JsRTv.js";import"./iteratee-DsTi5lqZ.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function me(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{me as default};
