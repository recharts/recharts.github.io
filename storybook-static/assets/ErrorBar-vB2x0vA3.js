import{u as n,j as r}from"./index-B_McDpto.js";import{M as s,C as p,a}from"./blocks-U88uyD8u.js";import{C as l,A as i}from"./ErrorBar.stories-BO_xTLy_.js";import"./iframe-CZrGjRVd.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DAuCYBcx.js";import"./index-BqYtnYZK.js";import"./index-DxrI-k1l.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CK3sfEfs.js";import"./Layer-CQqaCNmW.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DJ2k4-YE.js";import"./ErrorBarContext-putfb1U3.js";import"./RechartsWrapper-Db3bv7S_.js";import"./zIndexSlice-DVGip-HY.js";import"./throttle-iaCNi1Qj.js";import"./isWellBehavedNumber-sGwfAa8m.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BNgNXemJ.js";import"./renderedTicksSlice-BcK_sHSr.js";import"./axisSelectors-DxaBLx_c.js";import"./d3-scale-uXV0YxbH.js";import"./RegisterGraphicalItemId-CHZ0a46K.js";import"./CategoricalChart-BkyPecya.js";import"./CSSTransitionAnimate-D83z-GuM.js";import"./useAnimationId-Dfan-wHL.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer-BIAG6lUs.js";import"./ScatterChart-DSU2kMg5.js";import"./CartesianChart-D-HZeUFd.js";import"./chartDataContext-DtAKwxQ-.js";import"./CartesianGrid-GyzhCgPJ.js";import"./CartesianAxis-Bv2Blqsa.js";import"./Text-BZ2aXp_V.js";import"./DOMUtils-DGi0GryR.js";import"./Label-D0FS6r7s.js";import"./types-BqsVHy7N.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-Crkas5dz.js";import"./XAxis-CseioX8F.js";import"./YAxis-DvRRjJMV.js";import"./Scatter-DP8MA9dk.js";import"./AnimatedItems-CMzmfQX_.js";import"./Curve-DmlyDZC5.js";import"./step-1n_WS_bQ.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DkllZ6Kt.js";import"./Symbols-DfJNg9cL.js";import"./symbol-r9RnqTaM.js";import"./ActiveShapeUtils-Cxg-zL3x.js";import"./GraphicalItemClipPath-CrMwIhJh.js";import"./SetGraphicalItem-DKI6WvVx.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
`,r.jsx(a,{of:i})]})}function lr(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{lr as default};
