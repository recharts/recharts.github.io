import{e}from"./iframe-CnfUedcN.js";import{P as p,a as m}from"./PieChart-B71HIexQ.js";import{R as s}from"./arrayEqualityCheck-rY7iVDz-.js";import{C as l}from"./tooltipContext-B3rjCElX.js";import{R as c}from"./RechartsHookInspector-r5irvpzN.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CVejQHWD.js";import"./Layer-D-nKIsW1.js";import"./Curve-Cyx3ROtR.js";import"./types-D8riT1ui.js";import"./Text-Bxj3u51B.js";import"./DOMUtils-BXcCCvqt.js";import"./ReactUtils-BJDXxPy8.js";import"./Label-YyARJRE4.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-DbY_9wcH.js";import"./zIndexSlice-Dvx1lbqL.js";import"./RechartsWrapper-UZgszUQZ.js";import"./hooks-dlNhbOk4.js";import"./axisSelectors-vytjTI39.js";import"./ActiveShapeUtils-BJYqXFPt.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DD8FGW0K.js";import"./useAnimationId-34yVtl_d.js";import"./Trapezoid-BFp34q_q.js";import"./Sector-CKxLHTaG.js";import"./Symbols-cggM9Iun.js";import"./RegisterGraphicalItemId-B0F4aXR1.js";import"./SetGraphicalItem-CDc4e0JF.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./polarSelectors-DNqWuBVq.js";import"./PolarChart-CjnTC3aR.js";import"./chartDataContext-DVPFzTpf.js";import"./CategoricalChart-Bvh-Z6kO.js";import"./index-BUn4aue4.js";import"./ChartSizeDimensions-BN5VWsPC.js";import"./OffsetShower-Bj6jxFEA.js";import"./PlotAreaShower-fzrOqZm1.js";const V={component:p},t={render:r=>e.createElement(s,{width:"100%",height:500},e.createElement(m,null,e.createElement("defs",null,e.createElement("pattern",{id:"pattern-A",width:"10",height:"10",patternUnits:"userSpaceOnUse"},e.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2",fill:"#f00"})),e.createElement("pattern",{id:"pattern-B",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},e.createElement("rect",{width:"2",height:"4",fill:"#0f0"})),e.createElement("pattern",{id:"pattern-C",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(135)"},e.createElement("rect",{width:"2",height:"4",fill:"#00f"}))),e.createElement(p,{dataKey:"value",...r},r.data.map(a=>e.createElement(l,{key:`cell-${a.name}`,fill:`url(#pattern-${a.name})`}))),e.createElement(c,null))),args:{cx:150,cy:200,data:[{name:"A",value:80,color:"#ff0000"},{name:"B",value:45,color:"#00ff00"},{name:"C",value:25,color:"#0000ff"}],dataKey:"value",fill:"#8884d8",innerRadius:50,outerRadius:100,stroke:"none"}};var i,n,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
