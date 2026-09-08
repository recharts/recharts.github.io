import{u as n,j as r}from"./index-Pqo4qun1.js";import{M as p,C as s,a}from"./blocks-C3RNmgOB.js";import{C as m,A as i}from"./ErrorBar.stories-Dz08Lg70.js";import"./iframe-CNkb7Pxq.js";import"./preload-helper-Dp1pzeXC.js";import"./index-hgSNbj3_.js";import"./index-B0O4glZn.js";import"./index-BkiX-XNJ.js";import"./utils-ePvtT4un.js";import"./ErrorBar-H5Ssl3nj.js";import"./Layer-BE_omtYE.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-LXGJzsB2.js";import"./ErrorBarContext-D2ajplsz.js";import"./RechartsWrapper-CE0LDB2v.js";import"./zIndexSlice-wl2-d2L7.js";import"./throttle-D9QF5i1l.js";import"./isWellBehavedNumber-cZPS57La.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-D4hfpt9F.js";import"./d3-scale-hNSavMKY.js";import"./index-nHtRpei8.js";import"./renderedTicksSlice-DjfT86KI.js";import"./index-D8V4aljY.js";import"./RegisterGraphicalItemId-BCZSUoIT.js";import"./useId-C8-4auv_.js";import"./CSSTransitionAnimate-D_BU8YeS.js";import"./useAnimationId-BDE8tpoz.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer-V6Rl9PTE.js";import"./useBackwardsCompatibleTheme-BLuzOGOd.js";import"./ScatterChart-Bou6ttB-.js";import"./CartesianChart-Dvu2owgZ.js";import"./chartDataContext-eHLxlpVB.js";import"./CategoricalChart-D2oZJ6cq.js";import"./CartesianGrid-Ck43GCkE.js";import"./CartesianAxis-UL5z8CfQ.js";import"./Text-DlOSKY9M.js";import"./DOMUtils-BQzfSO_G.js";import"./Label-CgRMMdp1.js";import"./types-CyS4-dLr.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./XAxis-Cy627mpO.js";import"./YAxis-Bv4i31q_.js";import"./Scatter-Bx9zJmOB.js";import"./AnimatedItems-Dtnyeebx.js";import"./Curve-BoDwc6R9.js";import"./step-B7Ifq5jY.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DOQY0hKI.js";import"./Symbols-BQ5awPLZ.js";import"./symbol-CTLfMt-z.js";import"./ActiveShapeUtils-BcbuTBin.js";import"./GraphicalItemClipPath-CWom5q5K.js";import"./SetGraphicalItem-ChHo-vHf.js";import"./graphicalItemIdentity-CdZfZkJ-.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
