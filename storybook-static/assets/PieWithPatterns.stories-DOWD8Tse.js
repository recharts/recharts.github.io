import{e}from"./iframe-CKoXL-7H.js";import{P as p,a as m}from"./PieChart-CvD7GwYH.js";import{R as s}from"./arrayEqualityCheck-GexdJw_D.js";import{C as l}from"./tooltipContext-COHTcDE8.js";import{R as c}from"./RechartsHookInspector-CMD5YE2l.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BaEbAQrQ.js";import"./Layer-CVCSBl5u.js";import"./Curve-CYqbtLFF.js";import"./types-CIdldEzr.js";import"./Text-BUTkcAxm.js";import"./DOMUtils-BXsvg6Zu.js";import"./ReactUtils-DZNkeyHe.js";import"./Label-Cl7hxCC5.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-0nKnHyxR.js";import"./zIndexSlice-muSoLd76.js";import"./RechartsWrapper-CSLBjixG.js";import"./hooks-Wghpb3Lr.js";import"./axisSelectors-DPsIzSXr.js";import"./ActiveShapeUtils-CJx1zFrR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BLY94iSC.js";import"./useAnimationId-2NBy4alx.js";import"./Trapezoid-NNoDFDG-.js";import"./Sector-D9S-bODI.js";import"./Symbols-D2digf2k.js";import"./RegisterGraphicalItemId-Dd6TmGbZ.js";import"./SetGraphicalItem-B8zEjMN_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./polarSelectors-BlqS0ySg.js";import"./PolarChart-DMKtEywm.js";import"./chartDataContext-Bkp8uQCT.js";import"./CategoricalChart-Nf_fZ3uc.js";import"./index-DasXKjzD.js";import"./ChartSizeDimensions-CbnBpjpJ.js";import"./OffsetShower-BeXAkU7y.js";import"./PlotAreaShower-otv1tPFG.js";const V={component:p},t={render:r=>e.createElement(s,{width:"100%",height:500},e.createElement(m,null,e.createElement("defs",null,e.createElement("pattern",{id:"pattern-A",width:"10",height:"10",patternUnits:"userSpaceOnUse"},e.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2",fill:"#f00"})),e.createElement("pattern",{id:"pattern-B",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},e.createElement("rect",{width:"2",height:"4",fill:"#0f0"})),e.createElement("pattern",{id:"pattern-C",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(135)"},e.createElement("rect",{width:"2",height:"4",fill:"#00f"}))),e.createElement(p,{dataKey:"value",...r},r.data.map(a=>e.createElement(l,{key:`cell-${a.name}`,fill:`url(#pattern-${a.name})`}))),e.createElement(c,null))),args:{cx:150,cy:200,data:[{name:"A",value:80,color:"#ff0000"},{name:"B",value:45,color:"#00ff00"},{name:"C",value:25,color:"#0000ff"}],dataKey:"value",fill:"#8884d8",innerRadius:50,outerRadius:100,stroke:"none"}};var i,n,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={500}>
        <PieChart>
          <defs>
            <pattern id="pattern-A" width="10" height="10" patternUnits="userSpaceOnUse">
              <polygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2" fill="#f00" />
            </pattern>
            <pattern id="pattern-B" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="2" height="4" fill="#0f0" />
            </pattern>
            <pattern id="pattern-C" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(135)">
              <rect width="2" height="4" fill="#00f" />
            </pattern>
          </defs>
          <Pie dataKey="value" {...args}>
            {/* @ts-expect-error our storybooks need types */}
            {args.data.map(entry => <Cell key={\`cell-\${entry.name}\`} fill={\`url(#pattern-\${entry.name})\`} />)}
          </Pie>
          <RechartsHookInspector />
        </PieChart>
      </ResponsiveContainer>;
  },
  args: {
    cx: 150,
    cy: 200,
    data: [{
      name: 'A',
      value: 80,
      color: '#ff0000'
    }, {
      name: 'B',
      value: 45,
      color: '#00ff00'
    }, {
      name: 'C',
      value: 25,
      color: '#0000ff'
    }],
    dataKey: 'value',
    fill: '#8884d8',
    innerRadius: 50,
    outerRadius: 100,
    stroke: 'none'
  }
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const X=["PieWithPatterns"];export{t as PieWithPatterns,X as __namedExportsOrder,V as default};
