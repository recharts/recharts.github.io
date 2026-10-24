import{u as n,j as r}from"./index-00Q5_y7V.js";import{M as p,C as s,a}from"./blocks-BLQp5KUc.js";import{C as m,A as i}from"./ErrorBar.stories-Bd6JLvdb.js";import"./iframe-BPQD5v1C.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Tuf2nq6s.js";import"./index-CXovuven.js";import"./index-BNGNsbfJ.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BibV7DC2.js";import"./Layer-B7QJBZyG.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-upxpdF4p.js";import"./ErrorBarContext-Bd0khpbf.js";import"./RechartsWrapper-Cu7qj_jR.js";import"./zIndexSlice-DfAJCemw.js";import"./throttle-DC1LNmjU.js";import"./isWellBehavedNumber-C9SB8Pzn.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-CGRWr5-t.js";import"./d3-scale-BcAkS-dE.js";import"./index-yHndqaau.js";import"./renderedTicksSlice-Bnytbutp.js";import"./index-NpnztBAt.js";import"./RegisterGraphicalItemId-C_N6zcJ6.js";import"./useId-BM-r51MU.js";import"./CSSTransitionAnimate-NkMBq0vy.js";import"./useAnimationId-D3CbYaCo.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer-CyIARuTz.js";import"./useBackwardsCompatibleTheme-CpAd0K8h.js";import"./ScatterChart-BsLAS-rI.js";import"./CartesianChart-KMtmBeRo.js";import"./chartDataContext-BEETkhZS.js";import"./CategoricalChart-0gTJFCdb.js";import"./CartesianGrid-BjsXEzWG.js";import"./CartesianAxis-kXg3v2M0.js";import"./Text-BGkNki-C.js";import"./pageBackground-D3c52TtU.js";import"./Label-ZHQGm3zg.js";import"./dataEntryStyles-ClqDXIzp.js";import"./types-BZME1xI7.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-AZzsDYE7.js";import"./XAxis-Tde5CSPK.js";import"./YAxis-DB1Rqz7t.js";import"./Scatter-CCIyudZP.js";import"./activeStyles-BpdD72zS.js";import"./Curve-1sBQTzGW.js";import"./step-DY16rTOH.js";import"./path-DyVhHtw_.js";import"./tooltipContext-89q0ReT3.js";import"./Symbols-ntiaWcY8.js";import"./symbol-DA7s8c0S.js";import"./ActiveShapeUtils-CD8s1oUL.js";import"./SetGraphicalItem-DTtwRFlr.js";import"./useEffectiveDataKey-fbFyI37i.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
`,r.jsx(a,{of:i})]})}function hr(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{hr as default};
