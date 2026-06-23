import{u as n,j as r}from"./index-D1CBQ0qA.js";import{M as s,C as a,a as p}from"./blocks-B6UDlJg_.js";import{C as l,A as i}from"./ErrorBar.stories-50YLdgTl.js";import"./iframe-pl42v7Eu.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Df70QOpj.js";import"./index-ntLeohj2.js";import"./index-Cmb4UkZ_.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CXIvLzqU.js";import"./Layer-DIETCOs-.js";import"./get-Ci1Zslo5.js";import"./resolveDefaultProps-BgT3I9Pa.js";import"./ErrorBarContext-BQo0CyvO.js";import"./RechartsWrapper-ByLHuOcy.js";import"./zIndexSlice-D6Ury5DQ.js";import"./immer-C_PxOxT8.js";import"./isWellBehavedNumber-B6cHM4DS.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BTDreE9O.js";import"./renderedTicksSlice-nJaW__V7.js";import"./axisSelectors-49otWNoQ.js";import"./d3-scale-EDGtIYyd.js";import"./RegisterGraphicalItemId-Rj2Lqe9e.js";import"./CategoricalChart-BDx0yEeS.js";import"./CSSTransitionAnimate-DLjEUn0f.js";import"./useAnimationId-bxLMfI7c.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer-DHOvoudh.js";import"./ScatterChart-va7GC_ZC.js";import"./CartesianChart-CkSibwuY.js";import"./chartDataContext-BUPOQjbb.js";import"./CartesianGrid-COBbHqLx.js";import"./CartesianAxis-Dyaa3QOt.js";import"./Text-DHqN6Wmv.js";import"./DOMUtils-C0435NEl.js";import"./Label-jH0IUTIN.js";import"./types-Cax0x9Pi.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./XAxis-0siPSpiK.js";import"./YAxis-CTEyBNt3.js";import"./Scatter-CfcjKC_z.js";import"./AnimatedItems-wt0_sn45.js";import"./Curve-V8Cs5yUz.js";import"./step-BQEtcvlA.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DiL1jzmy.js";import"./Symbols-8zp00i_z.js";import"./symbol-Dq8p-R2M.js";import"./ActiveShapeUtils-DL8AZGaA.js";import"./GraphicalItemClipPath-CviR7UKP.js";import"./SetGraphicalItem-BX03rWwK.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:l}),`
`,r.jsx(a,{of:i,layout:"padded"}),`
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
`,r.jsx(p,{of:i})]})}function pr(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{pr as default};
