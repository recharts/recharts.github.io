import{u as n,j as r}from"./index-BN1CgeEV.js";import{M as s,C as p,a}from"./blocks-B-YuVQz6.js";import{C as l,A as i}from"./ErrorBar.stories-yXnxAZZW.js";import"./iframe-B06eq_mz.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CYBZJJ0c.js";import"./index-CdiP4uoA.js";import"./index-tCsMn5v1.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CE7sd1r4.js";import"./Layer-XBL4Rxwk.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DtTSgpqn.js";import"./ErrorBarContext-BroTLh2z.js";import"./RechartsWrapper-B5NLQSdK.js";import"./zIndexSlice-DZ0Q8BZb.js";import"./throttle-DWlJTWeN.js";import"./isWellBehavedNumber-DNvLaw60.js";import"./PolarUtils-CTnnDHZv.js";import"./index-C5xxdLaM.js";import"./renderedTicksSlice-Hn5vD_Co.js";import"./axisSelectors-B1LI97QB.js";import"./d3-scale-AtM_X8t9.js";import"./RegisterGraphicalItemId-DDWl-fOV.js";import"./CategoricalChart-OHkYYYd7.js";import"./CSSTransitionAnimate-YRJqPpz4.js";import"./useAnimationId-Dv1roAA4.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer-fQY0BiB2.js";import"./ScatterChart-BRZ_eG-U.js";import"./CartesianChart-W-yd_mhO.js";import"./chartDataContext-Sk-D_ye3.js";import"./CartesianGrid-Cw3uAQ6C.js";import"./CartesianAxis-Ctfj6_7f.js";import"./Text-C48XOo8y.js";import"./DOMUtils-CKORyHt8.js";import"./Label-DB6uwHR-.js";import"./types-CeAaMoTr.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-Crkas5dz.js";import"./XAxis-D6J_FGoO.js";import"./YAxis-CIZVFNfM.js";import"./Scatter-BEi2Wz3n.js";import"./AnimatedItems-C0zIpN2y.js";import"./Curve-Di_KaZv8.js";import"./step-Baald1Gr.js";import"./path-DyVhHtw_.js";import"./tooltipContext-wRzVS-RS.js";import"./Symbols-CaqXhdeL.js";import"./symbol-D6tYqKs9.js";import"./ActiveShapeUtils-B667TR48.js";import"./GraphicalItemClipPath-DtkF5P7U.js";import"./SetGraphicalItem-C5vdnQC6.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
