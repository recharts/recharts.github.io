import{u as n,j as r}from"./index-B9D28BY6.js";import{M as p,C as s,a}from"./blocks-BUAfRx2a.js";import{C as m,A as i}from"./ErrorBar.stories-YiZrzhmY.js";import"./iframe-_HfAVjpf.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cs9o5rrz.js";import"./index-CIyvwLXB.js";import"./index-uZk8L8Al.js";import"./utils-ePvtT4un.js";import"./ErrorBar-Dr1rHvED.js";import"./Layer-CacweoVl.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D7IrzSl6.js";import"./ErrorBarContext-BDsk2xtE.js";import"./RechartsWrapper-B3bcu809.js";import"./zIndexSlice-BBpCjLLT.js";import"./throttle-DIGsG3tn.js";import"./isWellBehavedNumber-DviO5hHm.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-BggHFTDq.js";import"./d3-scale-B5oQCS6M.js";import"./index-ATsp3Ecu.js";import"./renderedTicksSlice-BNJCO30A.js";import"./index-CIMOmY0A.js";import"./dataEntryStyles-Ucx7Hmoa.js";import"./useId-B3zQHx_-.js";import"./CSSTransitionAnimate-CJTytGnM.js";import"./useAnimationId-BhBKKO0p.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer-BrUuampD.js";import"./useBackwardsCompatibleTheme-BJsCYBM6.js";import"./ScatterChart-BWP3BWkk.js";import"./CartesianChart-De3rsgvn.js";import"./chartDataContext-Dyk7Yokq.js";import"./CategoricalChart-a-VUE4A0.js";import"./CartesianGrid-CWYHd3Ws.js";import"./CartesianAxis-Chrpiu6A.js";import"./Text-WmpuDBGa.js";import"./pageBackground-CfQpba4h.js";import"./Label-CR54GT5X.js";import"./types-BGnPJWtT.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./XAxis-BPfOL0q9.js";import"./YAxis-BoV0AlEf.js";import"./Scatter-BryEM8Rf.js";import"./activeStyles-BdpGsFup.js";import"./Curve-DpQ41Ei2.js";import"./step-Max-Kn08.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DeJX041B.js";import"./Symbols-ytZN-S27.js";import"./symbol-r9QtLlV8.js";import"./ActiveShapeUtils-4DLJyt96.js";import"./GraphicalItemClipPath-C1A7eGe6.js";import"./SetGraphicalItem-Cj-t7_ZW.js";import"./useEffectiveDataKey-C_P0BrSn.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
