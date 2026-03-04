import{j as r}from"./jsx-runtime-CbOlOZ8W.js";import{useMDXComponents as n}from"./index-BndMVOoW.js";import{M as p,C as s,a}from"./blocks-vbGkqrZl.js";import{C as m,A as i}from"./ErrorBar.stories-B9VhoBUL.js";import"./iframe-BWK9ES1u.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CIhAteaz.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BqS5LuDx.js";import"./Layer-FfNANwFp.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-UiVGC4WG.js";import"./ErrorBarContext-pBc660wi.js";import"./RechartsWrapper-BOGHGYF3.js";import"./arrayEqualityCheck-C3hQ_dNx.js";import"./immer-H-Wjh2uu.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CFdRl6ey.js";import"./hooks-7NwdUe8t.js";import"./axisSelectors-_XyMcvnR.js";import"./d3-scale-BLK5VF-M.js";import"./zIndexSlice-D32FYtu3.js";import"./renderedTicksSlice-DeqeruMc.js";import"./RegisterGraphicalItemId-Dl_9XwyC.js";import"./CSSTransitionAnimate-Bkz2sC1m.js";import"./useAnimationId-CpY_S6-T.js";import"./ZIndexLayer-bCgYEHqC.js";import"./ScatterChart-CeZpNamA.js";import"./CartesianChart-CW6-YABt.js";import"./chartDataContext-cUJ3hXxI.js";import"./CategoricalChart-BCO7gYoN.js";import"./CartesianGrid-DD0voXW7.js";import"./CartesianAxis-DXQ2RzcP.js";import"./Text-D_AFYo3_.js";import"./DOMUtils-BiksdwSe.js";import"./Label-CkGBtdJT.js";import"./types-BDXHojhp.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DPIaAqKp.js";import"./YAxis--KyRCAkW.js";import"./Scatter-wtmS5lf4.js";import"./ReactUtils-CHwdflEM.js";import"./Curve-W2IHKA5j.js";import"./step-DmOlkDZ0.js";import"./tooltipContext-Dv9lVTn5.js";import"./Symbols-CaAoNy9I.js";import"./symbol-CBLdl9lx.js";import"./ActiveShapeUtils-pcY95NPm.js";import"./isPlainObject-CWcMf8n5.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BQknosyX.js";import"./Trapezoid-2vK08j-g.js";import"./Sector-Bmz-EyPe.js";import"./GraphicalItemClipPath-Cpkp19yU.js";import"./SetGraphicalItem-sg4XQgsj.js";import"./RechartsHookInspector-PHAVE2qS.js";import"./ChartSizeDimensions-6JZOYWf1.js";import"./OffsetShower-D5r1e2Xk.js";import"./PlotAreaShower-DQz1z3XL.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
