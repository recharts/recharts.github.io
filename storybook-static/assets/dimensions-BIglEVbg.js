import{u as n,j as e}from"./index-BrQ4PZJi.js";import{M as o,C as h}from"./blocks-Dxe0U5HB.js";import{C as d,W as s}from"./dimensions.stories-Cm5moJ3x.js";import"./iframe-Czzk5Bx-.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CtnBEbb_.js";import"./index-CElqLkJS.js";import"./index-yeT-45bY.js";import"./ChartSizeDimensions-BcwOVMMZ.js";import"./zIndexSlice-CcZCAOP2.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Csc694qB.js";import"./throttle-Dlw7_zhK.js";import"./ComposedChart-BWfmB2id.js";import"./RechartsWrapper-C5Ex_ZCH.js";import"./axisSelectors-BthV4RsX.js";import"./polarAxisSelectors-Bgc5VpYB.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CS0QJ-EZ.js";import"./index-CAks9lDH.js";import"./renderedTicksSlice-BwJ2p4Mi.js";import"./index-CsxmvEat.js";import"./fillDefinitions-DaR2TDo1.js";import"./CartesianChart-D3FUkn-t.js";import"./chartDataContext--mSdRmgw.js";import"./CategoricalChart-a1Xr9UIu.js";import"./Page-Cj8EiXz7.js";import"./Line-jtIGshLA.js";import"./getRadiusAndStrokeWidthFromDot-BOcadJ27.js";import"./Layer-CarPpKFV.js";import"./Curve-DNAnmcp5.js";import"./types-Bykt0Hlw.js";import"./step-C5vJ1U24.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-C8IdewjD.js";import"./Label-CoDIIawi.js";import"./Text-CSorP4yu.js";import"./ZIndexLayer-DISaA8MD.js";import"./ActivePoints-7NJ9DiE-.js";import"./Dot-qyx0vbCn.js";import"./activeStyles-Dd2x1Ur1.js";import"./useAnimationId-BMmeHowj.js";import"./Symbols-DOiO9HXo.js";import"./symbol-DOUGW8Ut.js";import"./ErrorBarContext-BTwK65Em.js";import"./SetGraphicalItem-DZqA_DJ9.js";import"./ActiveShapeUtils-BDX2WB3N.js";import"./useEffectiveDataKey-BCok4F6X.js";import"./XAxis-DWUu3518.js";import"./CartesianAxis-5U6hsfI6.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-DskmDTW_.js";import"./Legend-CtEKVYW6.js";import"./useElementOffset-zxdJRS0e.js";import"./uniqBy-CjJbYxjU.js";import"./iteratee-CC6hZy84.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
