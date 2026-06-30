import{u as n,j as r}from"./index-CkkklKJi.js";import{M as s,C as a,a as p}from"./blocks-D-9werzD.js";import{C as l,A as i}from"./ErrorBar.stories-CLF_bgYZ.js";import"./iframe-CysaVPuT.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BoQpP3ng.js";import"./index-C8sovufb.js";import"./index-CIm0M9H5.js";import"./utils-ePvtT4un.js";import"./ErrorBar-bqxcUkie.js";import"./Layer-DQgbcZ6W.js";import"./get-Dv3cK-ON.js";import"./resolveDefaultProps-CB9Bmy8P.js";import"./ErrorBarContext-CYyCl8MN.js";import"./RechartsWrapper-CXNQztOV.js";import"./zIndexSlice-CBspyTeT.js";import"./throttle-BijqxQd6.js";import"./isWellBehavedNumber-CHReb6Hq.js";import"./PolarUtils-CTnnDHZv.js";import"./index-ClhA1x-k.js";import"./renderedTicksSlice-L6Kj9uMm.js";import"./axisSelectors-CybQsixZ.js";import"./d3-scale-BWFUWIRC.js";import"./RegisterGraphicalItemId-BIn5Riid.js";import"./CategoricalChart-B4xuyyeZ.js";import"./CSSTransitionAnimate-BPKkb7rL.js";import"./useAnimationId-XV22nS6k.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer-C6PjgPWA.js";import"./ScatterChart-DSBbw5vi.js";import"./CartesianChart-Dlco-df9.js";import"./chartDataContext-BsGd8oTW.js";import"./CartesianGrid-BVNtE_L6.js";import"./CartesianAxis-ACLpIvis.js";import"./Text-DqT5jcn2.js";import"./DOMUtils-z1JZhy6H.js";import"./Label-B_m_1QPA.js";import"./types-DWuPiLas.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./XAxis-BHTWnpmK.js";import"./YAxis-hZ4kGdBq.js";import"./Scatter-BdStmBZg.js";import"./AnimatedItems-HWCD5qdq.js";import"./Curve-DVkbv2J8.js";import"./step-vxR68qu5.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CzV606mp.js";import"./Symbols-eew_Q_1o.js";import"./symbol-CNPuKnzX.js";import"./ActiveShapeUtils-HeGPuRiV.js";import"./GraphicalItemClipPath-DMny06t1.js";import"./SetGraphicalItem-ihbnCYD8.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
