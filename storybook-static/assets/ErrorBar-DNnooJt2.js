import{j as r}from"./jsx-runtime-4AjUOki2.js";import{useMDXComponents as n}from"./index--tH0UNJX.js";import{M as p,C as s,a}from"./blocks-DQw9FhaG.js";import{C as m,A as i}from"./ErrorBar.stories-CehjNS7t.js";import"./iframe-BRu_qZg1.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CUWwfEzD.js";import"./utils-ePvtT4un.js";import"./ErrorBar-5SvDTAas.js";import"./Layer-BK1KTr5e.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-ClDGSYA8.js";import"./ErrorBarContext-CfL1_1JT.js";import"./RechartsWrapper-B9gb15RL.js";import"./arrayEqualityCheck-BgwbYKtC.js";import"./immer-CiIZXnz-.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DYVbWT0W.js";import"./hooks-cMPGG-ti.js";import"./axisSelectors-WgiG_2zA.js";import"./d3-scale-DgD4kZyM.js";import"./zIndexSlice-CjcwtRul.js";import"./renderedTicksSlice-XQiDw47v.js";import"./RegisterGraphicalItemId-KDJ0wyU8.js";import"./CSSTransitionAnimate-Fb5Cp2En.js";import"./useAnimationId-D8a-5J-X.js";import"./ZIndexLayer-C8D4smXi.js";import"./ScatterChart-COqoAD4M.js";import"./CartesianChart-DNVXg1S9.js";import"./chartDataContext-BYCMtEPQ.js";import"./CategoricalChart-CRbty2Pg.js";import"./CartesianGrid-fEnEi-FK.js";import"./CartesianAxis-D1FaLS9g.js";import"./Text-CZ6mhO2l.js";import"./DOMUtils-Np4d91u5.js";import"./Label-PVHJRfQa.js";import"./types-CV4LMBiy.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-CkACgIfp.js";import"./YAxis-BW9q8bD-.js";import"./Scatter-Byi_bQOW.js";import"./ReactUtils-gnwCD4Om.js";import"./Curve-CSGMMXpz.js";import"./step-XF9-athh.js";import"./tooltipContext-CX0tBQ1W.js";import"./Symbols-DM4rdUCn.js";import"./symbol-D-gvh6cA.js";import"./ActiveShapeUtils-jyCby69N.js";import"./isPlainObject-Dl8lI7a1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C99z7Ziu.js";import"./Trapezoid-CJsPOYXY.js";import"./Sector-7rMGIqOV.js";import"./GraphicalItemClipPath-rMExk2wU.js";import"./SetGraphicalItem-DZJju-u_.js";import"./RechartsHookInspector-CJy-wMRv.js";import"./ChartSizeDimensions-DNlI3sC4.js";import"./OffsetShower-Cm8zLz0R.js";import"./PlotAreaShower-Bj1zpgLw.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
