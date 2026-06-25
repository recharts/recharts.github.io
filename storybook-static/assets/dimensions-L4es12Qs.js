import{u as n,j as e}from"./index-B_SMvLKW.js";import{M as o,C as h}from"./blocks-D56T0G6U.js";import{C as d,W as s}from"./dimensions.stories-CqIEV1nL.js";import"./iframe-_8NIVtea.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CMd9L2k1.js";import"./index-DP0Hg4Uq.js";import"./index-DXHSNIUu.js";import"./ChartSizeDimensions-DSbYJhxF.js";import"./zIndexSlice-DHi0zTqt.js";import"./immer-DtWKh-al.js";import"./get-BPH4xIrS.js";import"./resolveDefaultProps-DWak00ij.js";import"./isWellBehavedNumber-C_LYkTy5.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BQ1MbbEq.js";import"./RechartsWrapper-Btm1Myi_.js";import"./index-C4r4CwZ3.js";import"./renderedTicksSlice-BSwSfTVH.js";import"./axisSelectors-B0oXaHqO.js";import"./d3-scale-CJIJLRQO.js";import"./CartesianChart-CyMc8rJv.js";import"./chartDataContext-CURMS4bg.js";import"./CategoricalChart-Cq5j6ts0.js";import"./Page-Cj8EiXz7.js";import"./Line-CCJiTV3u.js";import"./Layer-CvtIbty1.js";import"./Curve-7XStj8oj.js";import"./types-B89ht9kr.js";import"./step-BedGzIKx.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BQ9vzcvs.js";import"./Label-Bho1wkfx.js";import"./Text-Dn8CYcWJ.js";import"./DOMUtils-DxzVORfb.js";import"./ZIndexLayer-D0YIaJsD.js";import"./useAnimationId-D4zdEFfm.js";import"./ActivePoints-q58bNkUv.js";import"./Dot-BCuViEZD.js";import"./RegisterGraphicalItemId-IKsKal1D.js";import"./ErrorBarContext--tZY8j9K.js";import"./GraphicalItemClipPath-D7_UBVME.js";import"./SetGraphicalItem-rhq5lQpj.js";import"./getRadiusAndStrokeWidthFromDot-CVKaSFAr.js";import"./ActiveShapeUtils-CCiDKEDP.js";import"./XAxis-CXj9NRSO.js";import"./CartesianAxis-BJg7B04w.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./YAxis-Cq9nELWF.js";import"./Legend-ClfQGzY5.js";import"./Symbols-DuOYoSda.js";import"./symbol-CNSzdyHw.js";import"./useElementOffset-BZoIycEd.js";import"./uniqBy-Ckq71Btn.js";import"./iteratee-BauMAWQN.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
