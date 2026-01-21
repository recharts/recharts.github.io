import{e as r}from"./iframe-CnfUedcN.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-BJpmjn08.js";import{S as p}from"./ScatterChart-CrSzpW0G.js";import{C as d}from"./CartesianGrid-B1kAbEgK.js";import{X as c}from"./XAxis-veq9g2__.js";import{Y as y}from"./YAxis-CRL5LUi9.js";import{S as h}from"./Scatter-BzxurqdC.js";import{E as e}from"./ErrorBar-Cag_lCa8.js";import{T as u}from"./Tooltip-DNXpKUzG.js";import{R as f}from"./RechartsHookInspector-r5irvpzN.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-UZgszUQZ.js";import"./arrayEqualityCheck-rY7iVDz-.js";import"./resolveDefaultProps-CVejQHWD.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-dlNhbOk4.js";import"./axisSelectors-vytjTI39.js";import"./zIndexSlice-Dvx1lbqL.js";import"./CartesianChart-CxN-AX8e.js";import"./chartDataContext-DVPFzTpf.js";import"./CategoricalChart-Bvh-Z6kO.js";import"./CartesianAxis-CDEvUzTG.js";import"./Layer-D-nKIsW1.js";import"./Text-Bxj3u51B.js";import"./DOMUtils-BXcCCvqt.js";import"./Label-YyARJRE4.js";import"./ZIndexLayer-DbY_9wcH.js";import"./types-D8riT1ui.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BJDXxPy8.js";import"./Curve-Cyx3ROtR.js";import"./tooltipContext-B3rjCElX.js";import"./Symbols-cggM9Iun.js";import"./ActiveShapeUtils-BJYqXFPt.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DD8FGW0K.js";import"./useAnimationId-34yVtl_d.js";import"./Trapezoid-BFp34q_q.js";import"./Sector-CKxLHTaG.js";import"./RegisterGraphicalItemId-B0F4aXR1.js";import"./ErrorBarContext-DNwwyg_J.js";import"./GraphicalItemClipPath-Dl9XvTzN.js";import"./SetGraphicalItem-CDc4e0JF.js";import"./CSSTransitionAnimate-Di1XXhFY.js";import"./useElementOffset-B72OBasZ.js";import"./iteratee-Cd2H1Txl.js";import"./Cross-Y6lhzYYK.js";import"./index-BUn4aue4.js";import"./ChartSizeDimensions-BN5VWsPC.js";import"./OffsetShower-Bj6jxFEA.js";import"./PlotAreaShower-fzrOqZm1.js";const ur={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: Args) => {
    const data = [{
      x: 100,
      y: 200,
      errorY: 30,
      errorX: 30
    }, {
      x: 120,
      y: 100,
      errorY: [500, 30],
      errorX: [200, 30]
    }, {
      x: 170,
      y: 300,
      errorY: [10, 20],
      errorX: 20
    }, {
      x: 140,
      y: 250,
      errorY: 30,
      errorX: 20
    }, {
      x: 150,
      y: 400,
      errorY: [20, 300],
      errorX: 30
    }, {
      x: 110,
      y: 280,
      errorY: 40,
      errorX: 40
    }];
    return <ScatterChart width={400} height={400} margin={{
      top: 20,
      right: 20,
      bottom: 20,
      left: 20
    }} layout={args.layout}>
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="stature" unit="cm" allowDataOverflow={args.allowDataOverflow} />
        <YAxis type="number" dataKey="y" name="weight" unit="kg" allowDataOverflow={args.allowDataOverflow} />
        <Scatter name="A school" data={data} fill="blue">
          {/* This ErrorBar does render, but it does not extend the domain of XAxis unfortunately */}
          <ErrorBar dataKey="errorX" width={2} strokeWidth={3} stroke="green" direction="x" />
          <ErrorBar dataKey="errorY" width={4} strokeWidth={2} stroke="red" direction="y" />
        </Scatter>
        <Tooltip cursor={{
        strokeDasharray: '3 3'
      }} />
        <RechartsHookInspector />
      </ScatterChart>;
  },
  args: getStoryArgsFromArgsTypesObject(ScatterChartArgs),
  parameters: {
    controls: {
      include: ['layout', 'allowDataOverflow']
    }
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const fr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,fr as __namedExportsOrder,ur as default};
