import{u as n,j as r}from"./index-I_XfylHF.js";import{M as s,C as p,a}from"./blocks-DvGH-2Bg.js";import{C as l,A as i}from"./ErrorBar.stories-CiqcUloy.js";import"./iframe-CYE_KjLp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Ph9m1nQR.js";import"./index-BT3sj--6.js";import"./index-CN526hDZ.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BryYHeiA.js";import"./Layer-BAAO02Y6.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Bfx-m_zh.js";import"./ErrorBarContext-C6lKsYq3.js";import"./RechartsWrapper-8_njvAZI.js";import"./zIndexSlice-BJ5AXs-O.js";import"./throttle-CMwKm87I.js";import"./isWellBehavedNumber-D2iFNJG8.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CwiYvwQ-.js";import"./renderedTicksSlice-Bk_hKtUF.js";import"./axisSelectors-Cz15TeqU.js";import"./d3-scale-BYal7h8i.js";import"./RegisterGraphicalItemId-BVUvorB4.js";import"./CategoricalChart-DxSK9VeV.js";import"./CSSTransitionAnimate-Cxz4m1hs.js";import"./useAnimationId-D2RJw3gt.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer-Cs3N_7G3.js";import"./ScatterChart-C0deeAdJ.js";import"./CartesianChart-g8MVdMo8.js";import"./chartDataContext-3J9QrXTl.js";import"./CartesianGrid-B1GeT-Va.js";import"./CartesianAxis-9Uyc6PiW.js";import"./Text-D9p9m1qq.js";import"./DOMUtils-DNa7oSWn.js";import"./Label-DungM5aU.js";import"./types-Bh5it62Q.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-Crkas5dz.js";import"./XAxis-CSEJquda.js";import"./YAxis-DWbbwN0w.js";import"./Scatter-CeBUlHFV.js";import"./AnimatedItems-DDp5Wq7I.js";import"./Curve-DOUq4MA6.js";import"./step-CrVHI12K.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Bs0EcAMz.js";import"./Symbols-DAWow7kL.js";import"./symbol-FiS9WCjp.js";import"./ActiveShapeUtils-8xIbBFmr.js";import"./GraphicalItemClipPath-DSlcdUco.js";import"./SetGraphicalItem-DsAOjH_V.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
