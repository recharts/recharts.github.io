import{j as e}from"./jsx-runtime-CIKJipE6.js";import{useMDXComponents as o}from"./index-DjvW_dtl.js";import{M as r,C as s,a as p}from"./blocks-B4xYfF2i.js";import{C as h}from"./useOffset.stories-8vGsch_b.js";import"./iframe-CKoXL-7H.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DasXKjzD.js";import"./OffsetShower-BeXAkU7y.js";import"./ChartSizeDimensions-CbnBpjpJ.js";import"./arrayEqualityCheck-GexdJw_D.js";import"./resolveDefaultProps-BaEbAQrQ.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-Wghpb3Lr.js";import"./axisSelectors-DPsIzSXr.js";import"./ComposedChart-C7tysGI7.js";import"./RechartsWrapper-CSLBjixG.js";import"./zIndexSlice-muSoLd76.js";import"./CartesianChart-BnHhxgzL.js";import"./chartDataContext-Bkp8uQCT.js";import"./CategoricalChart-Nf_fZ3uc.js";import"./Line-B6AqF2pF.js";import"./Layer-CVCSBl5u.js";import"./ReactUtils-DZNkeyHe.js";import"./Label-Cl7hxCC5.js";import"./Text-BUTkcAxm.js";import"./DOMUtils-BXsvg6Zu.js";import"./ZIndexLayer-0nKnHyxR.js";import"./ActivePoints-0vYfh0ZR.js";import"./Dot-D5rSU5PW.js";import"./types-CIdldEzr.js";import"./RegisterGraphicalItemId-Dd6TmGbZ.js";import"./ErrorBarContext-CfkXyv19.js";import"./GraphicalItemClipPath-CoiOEHHo.js";import"./SetGraphicalItem-B8zEjMN_.js";import"./useAnimationId-2NBy4alx.js";import"./getRadiusAndStrokeWidthFromDot-Dh2Py107.js";import"./ActiveShapeUtils-CJx1zFrR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BLY94iSC.js";import"./Trapezoid-NNoDFDG-.js";import"./Sector-D9S-bODI.js";import"./Symbols-D2digf2k.js";import"./Curve-CYqbtLFF.js";import"./XAxis-rLQI09xS.js";import"./CartesianAxis-DXu08t8h.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-RWI4s0em.js";import"./Legend-lNiWfytJ.js";import"./useElementOffset-B4fkln4G.js";import"./iteratee-DT9v8GkJ.js";import"./Page-Cj8EiXz7.js";function n(t){const i={h1:"h1",h2:"h2",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.h1,{id:"useoffset",children:"useOffset"}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(s,{of:void 0,layout:"padded"}),`
`,e.jsx(i.h2,{id:"description",children:"Description"}),`
`,e.jsx("p",{children:"Returns the offset of the chart in pixels."}),`
`,e.jsx("p",{children:`Offset defines the blank space between the chart and the plot area.
This blank space is occupied by supporting elements like axes, legends, and brushes.`}),`
`,e.jsx("p",{children:"The offset includes:"}),`
`,e.jsxs("ul",{children:[e.jsx("li",{children:"Margins"}),e.jsx("li",{children:"Width and height of the axes"}),e.jsx("li",{children:"Width and height of the legend"}),e.jsx("li",{children:"Brush height"})]}),`
`,e.jsx("p",{children:"If you are interested in the margin alone, use useMargin instead."}),`
`,e.jsx("p",{children:"The offset is independent of charts position on the page, meaning it does not change as the chart is scrolled or resized."}),`
`,e.jsx("p",{children:`It is also independent of the scale and zoom, meaning that as the user zooms in and out,
the numbers will not change as the chart gets visually larger or smaller.`}),`
`,e.jsxs("p",{children:["This hook must be used within a chart context (inside a ",e.jsx("code",{children:"<LineChart>"}),", ",e.jsx("code",{children:"<BarChart>"}),`, etc.).
This hook returns `,e.jsx("code",{children:"undefined"})," if used outside a chart context."]}),`
`,e.jsx("p",{children:"Available since Recharts 3.1"}),`
`,e.jsx(i.h2,{id:"props",children:"Props"}),`
`,e.jsx(p,{of:void 0})]})}function se(t={}){const{wrapper:i}={...o(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(n,{...t})}):n(t)}export{se as default};
