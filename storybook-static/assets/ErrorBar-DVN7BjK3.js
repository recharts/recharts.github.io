import{u as n,j as r}from"./index-dhzYaQqj.js";import{M as p,C as s,a}from"./blocks-COK0fgRY.js";import{C as m,A as i}from"./ErrorBar.stories-Cgqr93lq.js";import"./iframe-Br90fEj5.js";import"./preload-helper-Dp1pzeXC.js";import"./index-xBkJObNc.js";import"./index-CFRdOJzL.js";import"./index-DCsT-Kwq.js";import"./utils-ePvtT4un.js";import"./ErrorBar-ZVY9_PE7.js";import"./Layer-vC2iAjl-.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CJrJLZqi.js";import"./ErrorBarContext-DkLC3v4H.js";import"./RechartsWrapper-CvaMq-_r.js";import"./zIndexSlice-DrwH1jfn.js";import"./throttle-BtlLZFJi.js";import"./isWellBehavedNumber-Cp5K1yLZ.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-DfYTYXSn.js";import"./d3-scale-BG2Gp8e0.js";import"./index-DZZQKCIH.js";import"./renderedTicksSlice-BJ1ZC3VH.js";import"./index-Ux_jSD8J.js";import"./RegisterGraphicalItemId-nSf1Px3R.js";import"./useId-BR1QS50g.js";import"./CSSTransitionAnimate-B_hSE_-x.js";import"./useAnimationId-CxK571sH.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer-1J001_po.js";import"./useBackwardsCompatibleTheme-plzmt3ou.js";import"./ScatterChart-BOX-yetW.js";import"./CartesianChart-DhQLJKy3.js";import"./chartDataContext-BJ8faAsD.js";import"./CategoricalChart-CWTSAfNd.js";import"./CartesianGrid-x83Z4uNt.js";import"./CartesianAxis-De1AZe26.js";import"./Text-CYmtT5C7.js";import"./DOMUtils-DQ9aPFfp.js";import"./Label-BXLkvKad.js";import"./types-BSZ9BCSJ.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./XAxis-DGeDsLv7.js";import"./YAxis-DdYWFMJf.js";import"./Scatter-xF_KNNjR.js";import"./AnimatedItems-BDiDUfRj.js";import"./Curve-ce5L2urE.js";import"./step-a76R8hck.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DlIzl-Vq.js";import"./Symbols-hfwrgc-L.js";import"./symbol-CopPs-zj.js";import"./ActiveShapeUtils-DUSmPc-T.js";import"./GraphicalItemClipPath-BqifZnDC.js";import"./SetGraphicalItem-jDsg55aJ.js";import"./useGraphicalItemIdentity-BFkPxhIu.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
