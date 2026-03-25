import{e as r}from"./iframe-DjpYK-o-.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-CHA5kBht.js";import{C as d}from"./CartesianGrid-JR9nO7Fn.js";import{X as c}from"./XAxis-Bcdqw-wv.js";import{Y as y}from"./YAxis-BdrmorAZ.js";import{S as h}from"./Scatter-DfCQfqL_.js";import{E as e}from"./ErrorBar-mCpaSAB_.js";import{T as u}from"./Tooltip-CU6I7B3D.js";import{R as f}from"./RechartsHookInspector-D54qOyzT.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CauuEd3r.js";import"./arrayEqualityCheck-BdSiZsNM.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C42G_ffr.js";import"./immer-D4y8T5a7.js";import"./PolarUtils-CTnnDHZv.js";import"./index-B9U8pH8P.js";import"./hooks-DMOVvbqY.js";import"./axisSelectors-DOtt8rOg.js";import"./d3-scale-BGWrA6kg.js";import"./zIndexSlice-BwAJg9IA.js";import"./renderedTicksSlice-DA_2QpHv.js";import"./CartesianChart-S0vn2j2X.js";import"./chartDataContext-DMhYHlkG.js";import"./CategoricalChart-DEHztz1y.js";import"./CartesianAxis-BU6WfKzj.js";import"./Layer-ClpAj3mi.js";import"./Text-hUj7bTMa.js";import"./DOMUtils-Bertp5OK.js";import"./Label-Df3TKPqw.js";import"./ZIndexLayer-BYBCo22l.js";import"./types-e-ZS-U8T.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-0Og-Hkqc.js";import"./Curve-B8xtuMQr.js";import"./step-BxVjdfNs.js";import"./tooltipContext-B9R-p_Gz.js";import"./Symbols-BYV52fjj.js";import"./symbol-BODo34re.js";import"./ActiveShapeUtils-Dirt4gFG.js";import"./isPlainObject-Bpjrt-ZA.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B37Ytfod.js";import"./useAnimationId-DA-f91a4.js";import"./Trapezoid-BWufpwnM.js";import"./Sector-0IwDdBHs.js";import"./RegisterGraphicalItemId-BvqmWFzi.js";import"./ErrorBarContext-DPi1-we4.js";import"./GraphicalItemClipPath-CTrBCXbW.js";import"./SetGraphicalItem-a4oiN2v8.js";import"./CSSTransitionAnimate-uLpwa_UG.js";import"./useElementOffset-DnFMhM4t.js";import"./uniqBy-kirwiohz.js";import"./iteratee-CjKMdjLN.js";import"./Cross-CL7uGiLa.js";import"./index-DPPgUz6W.js";import"./ChartSizeDimensions-B8zKV2n0.js";import"./OffsetShower-DWnJVUQp.js";import"./PlotAreaShower-B2Ag3HsK.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const kr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,kr as __namedExportsOrder,Sr as default};
