import{j as r}from"./jsx-runtime-C0Q8oyI0.js";import{useMDXComponents as n}from"./index-BBGav_dA.js";import{M as s,C as a,a as p}from"./blocks-D7A1nhuh.js";import{C as l,A as i}from"./ErrorBar.stories-Dv2Md_WL.js";import"./iframe-B_ZhM03Y.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C4JY2suC.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CkuYLbkn.js";import"./Layer-BOxBWqHH.js";import"./resolveDefaultProps-C2hO3de9.js";import"./ErrorBarContext-B6sGO-tf.js";import"./RechartsWrapper-u6yQp6qc.js";import"./arrayEqualityCheck-CloHfm1b.js";import"./PolarUtils-CgPgv3CO.js";import"./hooks-C0kAm8Eo.js";import"./axisSelectors-CpGC88wy.js";import"./zIndexSlice-DOM2ZPVV.js";import"./RegisterGraphicalItemId-DXkXPQtf.js";import"./CSSTransitionAnimate-B0NOkPqR.js";import"./useAnimationId-GdkLb2Sd.js";import"./ZIndexLayer-DQM-WqDQ.js";import"./ScatterChart-CLnTYip5.js";import"./CartesianChart-Re97mOhW.js";import"./chartDataContext-BdXMgBWg.js";import"./CategoricalChart-B5rfhQvt.js";import"./CartesianGrid-BhaeF8ti.js";import"./CartesianAxis-B6B84b8_.js";import"./Text-DQMzR-Rn.js";import"./DOMUtils-DIxanI67.js";import"./Label-G2FvxRoa.js";import"./types-CPNOLsga.js";import"./XAxis-BwiG5zlQ.js";import"./YAxis-MqnRM2TT.js";import"./Scatter-C6p8kbcS.js";import"./ReactUtils-CV9gD_3H.js";import"./Curve-CacS2CA9.js";import"./tooltipContext-DORR-wbc.js";import"./Symbols-B_O8HrI4.js";import"./ActiveShapeUtils-C6bCBIkh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CXZfm4Mc.js";import"./Trapezoid-Bxl0rgJp.js";import"./Sector-zu_K_Cyg.js";import"./GraphicalItemClipPath-ju3MUMLR.js";import"./SetGraphicalItem-DKzya-iG.js";import"./RechartsHookInspector-CedEGYW7.js";import"./ChartSizeDimensions-Bu3QszIW.js";import"./OffsetShower-C0fU06Jz.js";import"./PlotAreaShower-Mptvcbb5.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:l}),`
`,r.jsx(a,{of:i,layout:"padded"}),`
`,r.jsx(e.h2,{id:"description",children:"Description"}),`
`,r.jsx("p",{children:"ErrorBar renders whiskers to represent error margins on a chart."}),`
`,r.jsx("p",{children:"It must be a child of a graphical element."}),`
`,r.jsx("p",{children:"ErrorBar expects data in one of the following forms:"}),`
`,r.jsxs("ul",{children:[r.jsx("li",{children:"Symmetric error bars: a single error value representing both lower and upper bounds."}),r.jsx("li",{children:"Asymmetric error bars: an array of two values representing lower and upper bounds separately. First value is the lower bound, second value is the upper bound."})]}),`
`,r.jsx("p",{children:`The values provided are relative to the main data value.
For example, if the main data value is 10 and the error value is 2,
the error bar will extend from 8 to 12 for symmetric error bars.`}),`
`,r.jsx("p",{children:"In other words, what ErrorBar will render is:"}),`
`,r.jsxs("ul",{children:[r.jsx("li",{children:"For symmetric error bars: [value - errorVal, value + errorVal]"}),r.jsx("li",{children:"For asymmetric error bars: [value - errorVal[0], value + errorVal[1]]"})]}),`
`,r.jsx("p",{children:`In stacked or ranged Bar charts, ErrorBar will use the higher data value
as the reference point for calculating the error bar positions.`}),`
`,r.jsx(e.h2,{id:"parent-component",children:"Parent Component"}),`
`,r.jsx(e.p,{children:"The ErrorBar can be used within the following parent components:"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Bar/>"})}),`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Line/>"})}),`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Scatter/>"})}),`
`]}),`
`,r.jsx(e.h2,{id:"props",children:"Props"}),`
`,r.jsx(p,{of:i})]})}function sr(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{sr as default};
