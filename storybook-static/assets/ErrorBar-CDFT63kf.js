import{j as r}from"./jsx-runtime-BrQIdyrm.js";import{useMDXComponents as n}from"./index-BEP0K9LG.js";import{M as p,C as s,a}from"./blocks-DQL7-fUL.js";import{C as m,A as i}from"./ErrorBar.stories-CfduAjST.js";import"./iframe-VKSiBROl.js";import"./preload-helper-Dp1pzeXC.js";import"./index-FZYKqp9j.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DXxTTyT0.js";import"./Layer-B5Q3HgyD.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-NGq3vz57.js";import"./ErrorBarContext-DHVubtbe.js";import"./RechartsWrapper-BaY8BgmV.js";import"./arrayEqualityCheck-BB0HA1wg.js";import"./immer-CPTHWkkH.js";import"./PolarUtils-CTnnDHZv.js";import"./index-Z1DhqR18.js";import"./hooks-ZL9qLpLY.js";import"./axisSelectors-C7KTOZ5c.js";import"./d3-scale-BjDGrkpd.js";import"./zIndexSlice-DsFodTYX.js";import"./renderedTicksSlice-C68_OdSZ.js";import"./RegisterGraphicalItemId-0d646qS_.js";import"./CSSTransitionAnimate-2UcRzsZi.js";import"./useAnimationId-CxCW2e1W.js";import"./ZIndexLayer-VGyT3hqP.js";import"./ScatterChart-BMPYn2Lx.js";import"./CartesianChart-o8YH5MQb.js";import"./chartDataContext-PCAfxVIZ.js";import"./CategoricalChart-ChVNCGBd.js";import"./CartesianGrid-CInZlG75.js";import"./CartesianAxis-CQXTkaRJ.js";import"./Text-DIF9PeK1.js";import"./DOMUtils-BrJ5g_oy.js";import"./Label-CFO9NE9M.js";import"./types-DY717biQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-c6QFLIoy.js";import"./YAxis-D4wJ7AYM.js";import"./Scatter-D7FWzSo7.js";import"./ReactUtils-DMEWBI26.js";import"./Curve-yzuL5_Sr.js";import"./step-CaHu3Oa5.js";import"./tooltipContext-CMgj9Eu9.js";import"./Symbols-BAu9sMjT.js";import"./symbol-BFLJpHsz.js";import"./ActiveShapeUtils-Bo5Iqhwn.js";import"./isPlainObject-BPft1dx1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CyZMqhQE.js";import"./Trapezoid-YALS9NHT.js";import"./Sector-B_TUtlds.js";import"./GraphicalItemClipPath-m88eTwMP.js";import"./SetGraphicalItem-B6CVGLUm.js";import"./RechartsHookInspector-Bk4R2bPq.js";import"./ChartSizeDimensions-Ckuhl4O0.js";import"./OffsetShower-DRsWIFHd.js";import"./PlotAreaShower-DlV2zhuR.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(p,{of:m}),`
`,r.jsx(s,{of:i,layout:"padded"}),`
`,r.jsx(e.h2,{id:"description",children:"Description"}),`
`,r.jsx("p",{children:"ErrorBar renders whiskers to represent error margins on a chart."}),`
`,r.jsx("p",{children:"It must be a child of a graphical element."}),`
`,r.jsx("p",{children:"ErrorBar expects data in one of the following forms:"}),`
`,r.jsxs("ul",{children:[r.jsx("li",{children:"Symmetric error bars: a single error value representing both lower and upper bounds."}),r.jsx("li",{children:r.jsx(e.p,{children:`Asymmetric error bars: an array of two values representing lower and upper bounds separately. First value is the
lower bound, second value is the upper bound.`})})]}),`
`,r.jsx("p",{children:r.jsx(e.p,{children:`The values provided are relative to the main data value. For example, if the main data value is 10 and the error value
is 2, the error bar will extend from 8 to 12 for symmetric error bars.`})}),`
`,r.jsx("p",{children:"In other words, what ErrorBar will render is:"}),`
`,r.jsxs("ul",{children:[r.jsx("li",{children:"For symmetric error bars: [value - errorVal, value + errorVal]"}),r.jsx("li",{children:"For asymmetric error bars: [value - errorVal[0], value + errorVal[1]]"})]}),`
`,r.jsx("p",{children:r.jsx(e.p,{children:`In stacked or ranged Bar charts, ErrorBar will use the higher data value as the reference point for calculating the
error bar positions.`})}),`
`,r.jsx(e.h2,{id:"parent-component",children:"Parent Component"}),`
`,r.jsx(e.p,{children:"The ErrorBar can be used within the following parent components:"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Bar/>"})}),`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Line/>"})}),`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Scatter/>"})}),`
`]}),`
`,r.jsx(e.h2,{id:"props",children:"Props"}),`
`,r.jsx(a,{of:i})]})}function ur(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{ur as default};
