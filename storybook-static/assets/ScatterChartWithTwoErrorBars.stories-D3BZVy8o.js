import{e as r}from"./iframe-Kkd8-ubb.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-BJpmjn08.js";import{S as p}from"./ScatterChart-CnXrAL67.js";import{C as d}from"./CartesianGrid-BxneuM0y.js";import{X as c}from"./XAxis-CbFnoS6J.js";import{Y as y}from"./YAxis-BJyvtpDc.js";import{S as h}from"./Scatter-SWlFt2zw.js";import{E as e}from"./ErrorBar-BWDnnL_b.js";import{T as u}from"./Tooltip-BNbvwB7J.js";import{R as f}from"./RechartsHookInspector-CcR4oLvT.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DfR_FMJ_.js";import"./arrayEqualityCheck-Ielmuttt.js";import"./resolveDefaultProps-e46786Oc.js";import"./PolarUtils-dpEG3P4_.js";import"./hooks-DpEg8B1p.js";import"./axisSelectors-CQsBMpsc.js";import"./zIndexSlice-oaE3QQvX.js";import"./CartesianChart-yQMyY-ky.js";import"./chartDataContext-Cn2HGoq0.js";import"./CategoricalChart-BHUUzYjw.js";import"./CartesianAxis-CgavSOcU.js";import"./Layer-Cyu_K3I4.js";import"./Text-D0iQ_q13.js";import"./DOMUtils-BRB7Whks.js";import"./Label-Cj_m_2Cw.js";import"./ZIndexLayer-BavQVgOF.js";import"./types-CKa1MlE2.js";import"./ReactUtils-BqeFDjfd.js";import"./Curve-bqTY_rZQ.js";import"./tooltipContext-CgoruTht.js";import"./Symbols-Do2U4jAb.js";import"./ActiveShapeUtils-D0hO1fBl.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DyJZTmCf.js";import"./useAnimationId-BuYZFA9f.js";import"./Trapezoid-BXOoNxp9.js";import"./Sector-cedV6umc.js";import"./RegisterGraphicalItemId-Dq1gRlWd.js";import"./ErrorBarContext-MQ-0FIOF.js";import"./GraphicalItemClipPath-CBxCy0LY.js";import"./SetGraphicalItem-umYxrYzv.js";import"./CSSTransitionAnimate-BuWQnGzG.js";import"./useElementOffset-Bmnuk-bQ.js";import"./iteratee-B1LaAQ2a.js";import"./Cross-Df3Rz39u.js";import"./index-Cr9WdP25.js";import"./ChartSizeDimensions-DHaCW3zv.js";import"./OffsetShower-4UKMZo9R.js";import"./PlotAreaShower-DaKuRwAM.js";const hr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ur=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,ur as __namedExportsOrder,hr as default};
