import{u as n,j as e}from"./index-BMVfEb7n.js";import{M as o,C as h}from"./blocks-ha2jADCQ.js";import{C as d,W as s}from"./dimensions.stories-CfAnoLa6.js";import"./iframe-W15_yS8y.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DJoXYd_8.js";import"./index-C4zsw-i5.js";import"./index-CzfOThSk.js";import"./ChartSizeDimensions-BABhig-d.js";import"./zIndexSlice-KjfXmz6K.js";import"./throttle-Dvj2OlWT.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-PB6tg1uE.js";import"./isWellBehavedNumber-J_RQo-Gx.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DruFp6Y2.js";import"./RechartsWrapper-B53AJGL_.js";import"./index-Df7Hn4Pb.js";import"./axisSelectors-D1dvC9r7.js";import"./d3-scale-DaTRSSxE.js";import"./renderedTicksSlice--xVLPDDU.js";import"./CartesianChart-CGOzuY2G.js";import"./chartDataContext-CMgd62s5.js";import"./CategoricalChart-DCYct-dD.js";import"./Page-Cj8EiXz7.js";import"./Line-DKuxCNpr.js";import"./Layer-mEuTxfDi.js";import"./Curve-CZbGXK3M.js";import"./types-DbtskFGe.js";import"./step-DFacBfaf.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CZGuNW2p.js";import"./Label-v2JLpAzt.js";import"./Text-BvMd1KWD.js";import"./DOMUtils-Mq767cy3.js";import"./useBackwardsCompatibleTheme-CVh47B6N.js";import"./ZIndexLayer-DRPG0BG4.js";import"./useAnimationId-B9um5jhW.js";import"./ActivePoints-CPoOsFOl.js";import"./Dot-BO0lFYaH.js";import"./RegisterGraphicalItemId-qtKCK3s0.js";import"./ErrorBarContext-C5-u35E5.js";import"./GraphicalItemClipPath-DHit8l0N.js";import"./SetGraphicalItem-BYTBa9Xv.js";import"./getRadiusAndStrokeWidthFromDot-DeK9DJP1.js";import"./ActiveShapeUtils-CzKUxwm_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-8Au-a6fB.js";import"./CartesianAxis-lMcf7VGx.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-CxEXFC67.js";import"./Legend-B-cKma5Y.js";import"./Symbols-By7z1KVb.js";import"./symbol-DiB428ur.js";import"./useElementOffset-D060Lqzv.js";import"./uniqBy-CHYStU7Q.js";import"./iteratee-3tM74Wvb.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
