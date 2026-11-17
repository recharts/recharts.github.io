import{u as n,j as r}from"./index-BpqOckR_.js";import{M as s,C as p,a}from"./blocks-B_Wc_xpE.js";import{C as l,A as i}from"./ErrorBar.stories-CEvpafFa.js";import"./iframe-CGL4wxKn.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BZoAXlEM.js";import"./index-CB__xCeL.js";import"./index-XB5jojxJ.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CF34EODt.js";import"./Layer-Ch4A95GV.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-J1iMbWnO.js";import"./ErrorBarContext-CSfn8gVg.js";import"./RechartsWrapper-g5knetkm.js";import"./zIndexSlice-099KjRSH.js";import"./throttle-DUUYxzVG.js";import"./axisSelectors-BMd3ki3_.js";import"./polarAxisSelectors-DW8rryyn.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-o5WrViM1.js";import"./index-BG2Ge-ql.js";import"./renderedTicksSlice-CQkNy6Mm.js";import"./index-D3e94DhQ.js";import"./fillDefinitions-Vr_akuqj.js";import"./dataEntryStyles-CVCXFzjz.js";import"./Label-gT4vohqn.js";import"./Text-D29ZLY8y.js";import"./ZIndexLayer-CN_fYC_z.js";import"./CSSTransitionAnimate-CIs4eal6.js";import"./useAnimationId-D89zGJBE.js";import"./util-Dxo8gN5i.js";import"./ScatterChart-Rmffsqs-.js";import"./CartesianChart-Co-UKN43.js";import"./chartDataContext-B0uy7sqw.js";import"./CategoricalChart-rWqih0Ao.js";import"./CartesianGrid-BlMJaVi_.js";import"./CartesianAxis-DY7911f8.js";import"./types-Blkz6f-Q.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-AZzsDYE7.js";import"./XAxis-wodCK_Hv.js";import"./YAxis-EQaJTxBr.js";import"./Scatter-B2d3HrIt.js";import"./activeStyles-BKPzxJKn.js";import"./Curve-CHOREDeS.js";import"./step-GQgXeu2E.js";import"./path-DyVhHtw_.js";import"./tooltipContext-qSO0Oja6.js";import"./Symbols-Bc9bgKwE.js";import"./symbol-VmBVfDDj.js";import"./ActiveShapeUtils-B2rQYcmX.js";import"./SetGraphicalItem-DNJWjlHF.js";import"./useEffectiveDataKey-SnOfofuT.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:l}),`
`,r.jsx(p,{of:i,layout:"padded"}),`
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
`,r.jsx(a,{of:i})]})}function mr(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{mr as default};
