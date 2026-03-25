import{e as r}from"./iframe-B9GGDGS1.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-DdgnVz9B.js";import{C as d}from"./CartesianGrid-ZKhKpmPf.js";import{X as c}from"./XAxis-BhXpxA_M.js";import{Y as y}from"./YAxis-CQFlmWqm.js";import{S as h}from"./Scatter-DiJFMUIo.js";import{E as e}from"./ErrorBar-jpLv_y6I.js";import{T as u}from"./Tooltip-qjJxg-q0.js";import{R as f}from"./RechartsHookInspector-BWkI8hZR.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-EHfwRfBb.js";import"./arrayEqualityCheck-COtCLy3x.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CwlEvTRj.js";import"./immer-D8haotDT.js";import"./PolarUtils-CTnnDHZv.js";import"./index-D1V-1Kud.js";import"./hooks-C2J7naOZ.js";import"./axisSelectors-8xv55RbV.js";import"./d3-scale-CJw_J5vV.js";import"./zIndexSlice-Dr0l4bHj.js";import"./renderedTicksSlice-q0M83NPg.js";import"./CartesianChart-YXzBIFVQ.js";import"./chartDataContext-Z-R_60d5.js";import"./CategoricalChart-BBfSxrd4.js";import"./CartesianAxis-DyjzRIeL.js";import"./Layer-DcWLpeG9.js";import"./Text-BfPYOH_N.js";import"./DOMUtils-BTQMQKLS.js";import"./Label-DbaG7Uem.js";import"./ZIndexLayer-CbIo1jp-.js";import"./types-88pgmlG4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CrjF-zMe.js";import"./Curve-BqOd-kHx.js";import"./step-DJMv4gH4.js";import"./tooltipContext-ClpJvol4.js";import"./Symbols-Drc7wV6L.js";import"./symbol-qWW-wzEd.js";import"./ActiveShapeUtils-DstCBXr6.js";import"./isPlainObject-Drfk2luO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CMlO_C8p.js";import"./useAnimationId-DnjhYXkZ.js";import"./Trapezoid-Cz1Qyrxg.js";import"./Sector-CREvb1nt.js";import"./RegisterGraphicalItemId-CE2Hr5pe.js";import"./ErrorBarContext-DMLt-c7m.js";import"./GraphicalItemClipPath-B6fH0RLB.js";import"./SetGraphicalItem-Df3jzsrS.js";import"./CSSTransitionAnimate-SR_Q58UU.js";import"./useElementOffset-BftyTVso.js";import"./uniqBy-D0TRTuXO.js";import"./iteratee-ou_oC-Sl.js";import"./Cross-DLmPD2Pq.js";import"./index-DZx9HZGn.js";import"./ChartSizeDimensions-C9x1Brk2.js";import"./OffsetShower-BIWjLM9_.js";import"./PlotAreaShower-Dpy9Dm8W.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
