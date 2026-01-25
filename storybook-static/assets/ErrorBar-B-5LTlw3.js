import{j as r}from"./jsx-runtime-CIKJipE6.js";import{useMDXComponents as n}from"./index-DjvW_dtl.js";import{M as s,C as a,a as p}from"./blocks-B4xYfF2i.js";import{C as m,A as i}from"./ErrorBar.stories-7SW8uULS.js";import"./iframe-CKoXL-7H.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DasXKjzD.js";import"./utils-ePvtT4un.js";import"./ErrorBar-TjZgwwRQ.js";import"./Layer-CVCSBl5u.js";import"./resolveDefaultProps-BaEbAQrQ.js";import"./ErrorBarContext-CfkXyv19.js";import"./RechartsWrapper-CSLBjixG.js";import"./arrayEqualityCheck-GexdJw_D.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-Wghpb3Lr.js";import"./axisSelectors-DPsIzSXr.js";import"./zIndexSlice-muSoLd76.js";import"./RegisterGraphicalItemId-Dd6TmGbZ.js";import"./CSSTransitionAnimate-QrNmF6k9.js";import"./useAnimationId-2NBy4alx.js";import"./ZIndexLayer-0nKnHyxR.js";import"./ScatterChart-DsazLSST.js";import"./CartesianChart-BnHhxgzL.js";import"./chartDataContext-Bkp8uQCT.js";import"./CategoricalChart-Nf_fZ3uc.js";import"./CartesianGrid-NqBSLHxo.js";import"./CartesianAxis-DXu08t8h.js";import"./Text-BUTkcAxm.js";import"./DOMUtils-BXsvg6Zu.js";import"./Label-Cl7hxCC5.js";import"./types-CIdldEzr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-rLQI09xS.js";import"./YAxis-RWI4s0em.js";import"./Scatter-gLhxbWp6.js";import"./ReactUtils-DZNkeyHe.js";import"./Curve-CYqbtLFF.js";import"./tooltipContext-COHTcDE8.js";import"./Symbols-D2digf2k.js";import"./ActiveShapeUtils-CJx1zFrR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BLY94iSC.js";import"./Trapezoid-NNoDFDG-.js";import"./Sector-D9S-bODI.js";import"./GraphicalItemClipPath-CoiOEHHo.js";import"./SetGraphicalItem-B8zEjMN_.js";import"./RechartsHookInspector-CMD5YE2l.js";import"./ChartSizeDimensions-CbnBpjpJ.js";import"./OffsetShower-BeXAkU7y.js";import"./PlotAreaShower-otv1tPFG.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:m}),`
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
`,r.jsx(p,{of:i})]})}function ar(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{ar as default};
