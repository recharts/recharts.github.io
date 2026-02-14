import{j as r}from"./jsx-runtime-C4rA_fjj.js";import{useMDXComponents as n}from"./index-D9f5UJry.js";import{M as s,C as a,a as p}from"./blocks-Dz4pPR8f.js";import{C as l,A as i}from"./ErrorBar.stories-cvWPTwse.js";import"./iframe-D1sKzd9f.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BzSbAqoW.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DQ8D85hn.js";import"./Layer-WzWTapMZ.js";import"./resolveDefaultProps-DP_tbxO-.js";import"./ErrorBarContext-BoOFKdx-.js";import"./RechartsWrapper-BpD_sNud.js";import"./arrayEqualityCheck-CuEsOyc1.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-DdtZHK8g.js";import"./axisSelectors-DyIQ7_k2.js";import"./zIndexSlice-LstRJYK0.js";import"./RegisterGraphicalItemId-1mClqvPm.js";import"./CSSTransitionAnimate-Cp0AHX7G.js";import"./useAnimationId-CobcEi0h.js";import"./ZIndexLayer-C_HSTCV-.js";import"./ScatterChart-B-D9eDPp.js";import"./CartesianChart-Biy4tQe4.js";import"./chartDataContext-CRIv2raa.js";import"./CategoricalChart-C6tF-OgQ.js";import"./CartesianGrid-W01p8so4.js";import"./CartesianAxis-C9kYKoRG.js";import"./Text-Cjdiq18G.js";import"./DOMUtils-gW35XdYA.js";import"./Label-BUubujAP.js";import"./types-EtQqMNLc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-BOA4yCHe.js";import"./YAxis-BOXDE0eJ.js";import"./Scatter-Dz0RexyZ.js";import"./ReactUtils-CN0W71Xc.js";import"./Curve-BmiU29ay.js";import"./tooltipContext-CrfAdeah.js";import"./Symbols-B6J6F5uc.js";import"./ActiveShapeUtils-fLb35mLW.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CjCqdVKq.js";import"./Trapezoid-CC-7WT-k.js";import"./Sector-BNWuE3Lx.js";import"./GraphicalItemClipPath-D104b0kU.js";import"./SetGraphicalItem-elsOCW9j.js";import"./RechartsHookInspector-DnaIUpyH.js";import"./ChartSizeDimensions-C9qcdOPY.js";import"./OffsetShower-0TFjDlvn.js";import"./PlotAreaShower-D6laSGCk.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
`,r.jsx(p,{of:i})]})}function ar(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{ar as default};
