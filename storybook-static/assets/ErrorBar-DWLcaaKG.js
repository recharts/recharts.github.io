import{u as n,j as r}from"./index-B5s_bytW.js";import{M as s,C as p,a}from"./blocks-C9HYACH4.js";import{C as m,A as i}from"./ErrorBar.stories-olKLDB2o.js";import"./iframe-D_Sr4lJG.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DzVo4Gjf.js";import"./index-Bx0q42bk.js";import"./index-DYQHTRz1.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DQ1Eaar6.js";import"./Layer-D9Oc_uBt.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BKaajls5.js";import"./ErrorBarContext-pr_CmNON.js";import"./RechartsWrapper-BTyxoPDx.js";import"./zIndexSlice-D0QIWFDJ.js";import"./throttle-DGVbE07Y.js";import"./isWellBehavedNumber-Dv4TPBJ2.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CqdW1tHD.js";import"./axisSelectors-B4F-1YW3.js";import"./d3-scale-DfRtt2DS.js";import"./renderedTicksSlice-DGuDkWT4.js";import"./RegisterGraphicalItemId-DO9NFESU.js";import"./useId-Dl8Yfg4u.js";import"./CategoricalChart-DKW5S15G.js";import"./CSSTransitionAnimate-tv2lh-yz.js";import"./useAnimationId-KZvr8oE4.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer-Cx1K1yql.js";import"./useBackwardsCompatibleTheme-Kv-Z1TIM.js";import"./ScatterChart-mNdzn7_x.js";import"./CartesianChart-JxmHMprN.js";import"./chartDataContext-AwrwRhEc.js";import"./CartesianGrid-B3y5rILo.js";import"./CartesianAxis-B-dcY2MJ.js";import"./Text-DkNPAJgx.js";import"./DOMUtils-zvxYmMZo.js";import"./Label-CeC9waPr.js";import"./types-D5gXUhG3.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./XAxis-CiVYw4TJ.js";import"./YAxis-CK9b0jPJ.js";import"./Scatter-BS3g0UCg.js";import"./AnimatedItems-DooKJjtX.js";import"./Curve-5OWOJy9s.js";import"./step-BEJyHAO7.js";import"./path-DyVhHtw_.js";import"./tooltipContext-RZhMVhIV.js";import"./Symbols-CxVleFr4.js";import"./symbol-DWmT4zeF.js";import"./ActiveShapeUtils-CYI-DMZT.js";import"./GraphicalItemClipPath-BKqVnbRS.js";import"./SetGraphicalItem-DDVudLdC.js";import"./graphicalItemIdentity-CdZfZkJ-.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:m}),`
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
`,r.jsx(a,{of:i})]})}function cr(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{cr as default};
