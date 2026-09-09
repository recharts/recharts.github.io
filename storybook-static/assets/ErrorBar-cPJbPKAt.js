import{u as n,j as r}from"./index-vjfQJ-qU.js";import{M as p,C as s,a}from"./blocks-C5RauoOC.js";import{C as m,A as i}from"./ErrorBar.stories-DU-SWGnd.js";import"./iframe-3mrIZkil.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BXM7Ne4y.js";import"./index-CDwIhtzp.js";import"./index-BdkN9O5O.js";import"./utils-ePvtT4un.js";import"./ErrorBar-B-bOSfDR.js";import"./Layer-DjZWmALl.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-i-Y4kJTh.js";import"./ErrorBarContext-NAHggWz8.js";import"./RechartsWrapper-DwVI4RN7.js";import"./zIndexSlice-L3ODJxG9.js";import"./throttle-rESuvk1I.js";import"./isWellBehavedNumber-ZyDhg4rS.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-DAOLJeWY.js";import"./d3-scale-CguR2U2N.js";import"./index-BtaPmQxv.js";import"./renderedTicksSlice-DYEa3gne.js";import"./index-pFwFQ5O8.js";import"./RegisterGraphicalItemId-BDB0ngzS.js";import"./useId-Cxwt81yN.js";import"./CSSTransitionAnimate-Dy8sIWSD.js";import"./useAnimationId-BnnXfXw0.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer-D4cc4mD4.js";import"./useBackwardsCompatibleTheme-lR8vi8zs.js";import"./ScatterChart-DsxWppF1.js";import"./CartesianChart-CUvaXipt.js";import"./chartDataContext-FTM0Yeif.js";import"./CategoricalChart-D95OMo3E.js";import"./CartesianGrid-C4bUFIHm.js";import"./CartesianAxis-BlnQQ3GL.js";import"./Text-DUYy6Shz.js";import"./DOMUtils-CXxLAhGm.js";import"./Label-BIqKgU55.js";import"./types-8JRxRnLp.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./XAxis-D6OSWIjP.js";import"./YAxis-L6Kj6NBD.js";import"./Scatter-ce27HUAX.js";import"./AnimatedItems-DhXJ9Je_.js";import"./Curve-Bw-gimBr.js";import"./step-DsELI93G.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DH0INPqo.js";import"./Symbols-B-x4p4sy.js";import"./symbol-Dr6L5N19.js";import"./ActiveShapeUtils-BBpy3JCJ.js";import"./GraphicalItemClipPath-Bb5lUrgq.js";import"./SetGraphicalItem-9-RZ0mcl.js";import"./useGraphicalItemIdentity-BcKg6UBn.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
