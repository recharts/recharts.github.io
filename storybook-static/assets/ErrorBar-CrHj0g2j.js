import{j as r}from"./jsx-runtime-Czj6uYSK.js";import{useMDXComponents as n}from"./index-BpEY8w9a.js";import{M as p,C as s,a}from"./blocks-DZ5HE_kp.js";import{C as m,A as i}from"./ErrorBar.stories-jw4kVlyy.js";import"./iframe-Ucw_npMd.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BrSV8OVb.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CM91tSfy.js";import"./Layer-BHKytU3r.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BHeHZryb.js";import"./ErrorBarContext-DyEjoJld.js";import"./RechartsWrapper-CwfOdweJ.js";import"./arrayEqualityCheck-C_bl4BTF.js";import"./immer-Df11CBmE.js";import"./PolarUtils-CTnnDHZv.js";import"./index-JYzWfHpx.js";import"./hooks-D7V2KDBB.js";import"./axisSelectors-BH0WFu65.js";import"./d3-scale-0cZeb6CB.js";import"./zIndexSlice-CNerbQ3D.js";import"./renderedTicksSlice-DUMTm3uB.js";import"./RegisterGraphicalItemId-CbJhRY50.js";import"./CSSTransitionAnimate-BOtXJu7a.js";import"./useAnimationId-CEijT5wS.js";import"./ZIndexLayer-D2xlXPPp.js";import"./ScatterChart-DFfqrzl6.js";import"./CartesianChart-C3CifoRw.js";import"./chartDataContext-C8DSjEnl.js";import"./CategoricalChart-Bvyp3zlR.js";import"./CartesianGrid-BJDjwPUI.js";import"./CartesianAxis-C30jVrg6.js";import"./Text-BMbZi_EC.js";import"./DOMUtils-YtDMkslD.js";import"./Label-GC_DUOEN.js";import"./types-_zfRhAxP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-Z-pG1K5-.js";import"./YAxis-Ny3PLxgr.js";import"./Scatter-CxDYHbDZ.js";import"./ReactUtils-CjeDc-m7.js";import"./Curve-4SPhgVqC.js";import"./step-CvXihpec.js";import"./tooltipContext-DFrxW3sM.js";import"./Symbols-ODbCcosS.js";import"./symbol-C71I-RBu.js";import"./ActiveShapeUtils-DW7P1xTB.js";import"./isPlainObject-DLsDG0Z3.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DdjFgehH.js";import"./Trapezoid-DDcYuR4h.js";import"./Sector-SP2qnp6i.js";import"./GraphicalItemClipPath-B7jjPwrD.js";import"./SetGraphicalItem-BTRvTts6.js";import"./RechartsHookInspector-Egzn0asm.js";import"./ChartSizeDimensions-Cz7KN2Sj.js";import"./OffsetShower-BPBpAMRX.js";import"./PlotAreaShower-sLoJpTUh.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
`,r.jsx(a,{of:i})]})}function ur(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{ur as default};
