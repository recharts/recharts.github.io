import{j as e}from"./jsx-runtime-DQLxkGzk.js";import{useMDXComponents as i}from"./index-5n_AOkOy.js";import{M as o,C as s}from"./blocks-DzLEkFRk.js";import{C as h,U as d}from"./useOffset.stories-DGP-yXlK.js";import"./iframe-DIwakdDt.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DvyeDb-a.js";import"./OffsetShower-CvNNPebB.js";import"./ChartSizeDimensions-Dw8_76VR.js";import"./arrayEqualityCheck-lRYvQggb.js";import"./resolveDefaultProps-DW7u54OO.js";import"./PolarUtils-B3Fap3OI.js";import"./hooks-DWXVssZN.js";import"./axisSelectors-B4kb62nw.js";import"./ComposedChart-DZdYEtXz.js";import"./RechartsWrapper-B94VsC0l.js";import"./zIndexSlice-BsupxljC.js";import"./CartesianChart-DVLAyEBq.js";import"./chartDataContext-DWbSa9NP.js";import"./CategoricalChart-DSVP0XQf.js";import"./Line-Bwc3LNl1.js";import"./Layer-CFi2OPVU.js";import"./ReactUtils-D3B4C902.js";import"./Label-CWjd44lV.js";import"./Text-D6OkCyx_.js";import"./DOMUtils-B36TL8VT.js";import"./ZIndexLayer-Cgd7Iecl.js";import"./ActivePoints-DyDkHbPU.js";import"./Dot-DKxmRIiM.js";import"./types-B72H97bN.js";import"./RegisterGraphicalItemId-mhUZ9dId.js";import"./ErrorBarContext-B4VuOyB0.js";import"./GraphicalItemClipPath-BZiUpPN4.js";import"./SetGraphicalItem-Cri-Qe4J.js";import"./useAnimationId-OdOX1ryX.js";import"./getRadiusAndStrokeWidthFromDot-5N_ef9yY.js";import"./ActiveShapeUtils-Dm9ayMJH.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C0jTOdyj.js";import"./Trapezoid-wlixMr2J.js";import"./Sector-BBGpgSZE.js";import"./Symbols-CAX0rTwl.js";import"./Curve-9VNPy8uR.js";import"./XAxis-BkI1-gXN.js";import"./CartesianAxis-D7MVicsA.js";import"./YAxis-BVx4kJfi.js";import"./Legend-CjGNw3nJ.js";import"./useElementOffset-BkezN8gQ.js";import"./iteratee-CHcqC_Hc.js";import"./Page-DPte-9pC.js";function t(r){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:h}),`
`,e.jsx(n.h1,{id:"useoffset",children:e.jsx(n.code,{children:"useOffset"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { useOffset } from 'recharts';

function MyChart() {
  const offset = useOffset();
  return; // ...
}
`})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useOffset"})," hook returns the offset of the chart in pixels."]}),`
`,e.jsx(n.p,{children:"The offset is the distance from the edges of the chart to the edges of the plot area."}),`
`,e.jsx(n.p,{children:"Plot area is the area where the data is rendered, and shows the actual data points, bars, lines, etc."}),`
`,e.jsx(n.p,{children:"The space between the plot area and the edges of the chart is used for axes, legends, and other supporting elements."}),`
`,e.jsx(n.p,{children:"The offset includes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Margins"}),`
`,e.jsx(n.li,{children:"Width and height of the axes"}),`
`,e.jsx(n.li,{children:"Width and height of the legend"}),`
`,e.jsx(n.li,{children:"Brush height"}),`
`]}),`
`,e.jsxs(n.p,{children:["(If you are only interested in the margins, use the ",e.jsx(n.code,{children:"useMargin"})," hook instead.)"]}),`
`,e.jsx(n.p,{children:"The offset is independent of charts position on the page, meaning it does not change as the chart is scrolled or resized."}),`
`,e.jsx(n.p,{children:`It is also independent of the scale and zoom, meaning that as the user zooms in and out,
the numbers will not change as the chart gets visually larger or smaller.`}),`
`,e.jsx(s,{of:d,layout:"padded"}),`
`,e.jsx(n.h2,{id:"parent-component",children:"Parent Component"}),`
`,e.jsx(n.p,{children:"This hook can be used within any chart:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<AreaChart/>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<BarChart/>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<ComposedChart/>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<FunnelChart/>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<LineChart/>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<PieChart/>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<RadarChart/>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<RadialBarChart/>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<Sankey/>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<ScatterChart/>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<SunburstChart/>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<Treemap/>"})}),`
`]})]})}function oe(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{oe as default};
