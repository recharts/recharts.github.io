import{u as n,j as e}from"./index-B5s_bytW.js";import{M as o,C as h}from"./blocks-C9HYACH4.js";import{C as d,W as s}from"./dimensions.stories-gN0y69XC.js";import"./iframe-D_Sr4lJG.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DzVo4Gjf.js";import"./index-Bx0q42bk.js";import"./index-DYQHTRz1.js";import"./ChartSizeDimensions-CIBxtYo_.js";import"./zIndexSlice-D0QIWFDJ.js";import"./throttle-DGVbE07Y.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BKaajls5.js";import"./isWellBehavedNumber-Dv4TPBJ2.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-ZURsynXK.js";import"./RechartsWrapper-BTyxoPDx.js";import"./index-CqdW1tHD.js";import"./axisSelectors-B4F-1YW3.js";import"./d3-scale-DfRtt2DS.js";import"./renderedTicksSlice-DGuDkWT4.js";import"./CartesianChart-JxmHMprN.js";import"./chartDataContext-AwrwRhEc.js";import"./CategoricalChart-DKW5S15G.js";import"./Page-Cj8EiXz7.js";import"./Line-CUH4TpmU.js";import"./Layer-D9Oc_uBt.js";import"./Curve-5OWOJy9s.js";import"./types-D5gXUhG3.js";import"./step-BEJyHAO7.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DooKJjtX.js";import"./Label-CeC9waPr.js";import"./Text-DkNPAJgx.js";import"./DOMUtils-zvxYmMZo.js";import"./useId-Dl8Yfg4u.js";import"./useBackwardsCompatibleTheme-Kv-Z1TIM.js";import"./ZIndexLayer-Cx1K1yql.js";import"./useAnimationId-KZvr8oE4.js";import"./ActivePoints-BSKOHmnc.js";import"./Dot-yV7k0mxe.js";import"./RegisterGraphicalItemId-DO9NFESU.js";import"./ErrorBarContext-pr_CmNON.js";import"./GraphicalItemClipPath-BKqVnbRS.js";import"./SetGraphicalItem-DDVudLdC.js";import"./getRadiusAndStrokeWidthFromDot-DctFTReD.js";import"./ActiveShapeUtils-CYI-DMZT.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-CiVYw4TJ.js";import"./CartesianAxis-B-dcY2MJ.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-CK9b0jPJ.js";import"./Legend-6Kaq28I2.js";import"./Symbols-CxVleFr4.js";import"./symbol-DWmT4zeF.js";import"./useElementOffset-CuHOZIfT.js";import"./uniqBy-SCEa_4Mg.js";import"./iteratee-DHY7e-mB.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
