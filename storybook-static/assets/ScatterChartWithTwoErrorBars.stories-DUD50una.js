import{e as r}from"./iframe-VKSiBROl.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DWgqGcPH.js";import{S as p}from"./ScatterChart-BMPYn2Lx.js";import{C as d}from"./CartesianGrid-CInZlG75.js";import{X as c}from"./XAxis-c6QFLIoy.js";import{Y as y}from"./YAxis-D4wJ7AYM.js";import{S as h}from"./Scatter-D7FWzSo7.js";import{E as e}from"./ErrorBar-DXxTTyT0.js";import{T as u}from"./Tooltip-Bwd3S6gV.js";import{R as f}from"./RechartsHookInspector-Bk4R2bPq.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BaY8BgmV.js";import"./arrayEqualityCheck-BB0HA1wg.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-NGq3vz57.js";import"./immer-CPTHWkkH.js";import"./PolarUtils-CTnnDHZv.js";import"./index-Z1DhqR18.js";import"./hooks-ZL9qLpLY.js";import"./axisSelectors-C7KTOZ5c.js";import"./d3-scale-BjDGrkpd.js";import"./zIndexSlice-DsFodTYX.js";import"./renderedTicksSlice-C68_OdSZ.js";import"./CartesianChart-o8YH5MQb.js";import"./chartDataContext-PCAfxVIZ.js";import"./CategoricalChart-ChVNCGBd.js";import"./CartesianAxis-CQXTkaRJ.js";import"./Layer-B5Q3HgyD.js";import"./Text-DIF9PeK1.js";import"./DOMUtils-BrJ5g_oy.js";import"./Label-CFO9NE9M.js";import"./ZIndexLayer-VGyT3hqP.js";import"./types-DY717biQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DMEWBI26.js";import"./Curve-yzuL5_Sr.js";import"./step-CaHu3Oa5.js";import"./tooltipContext-CMgj9Eu9.js";import"./Symbols-BAu9sMjT.js";import"./symbol-BFLJpHsz.js";import"./ActiveShapeUtils-Bo5Iqhwn.js";import"./isPlainObject-BPft1dx1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CyZMqhQE.js";import"./useAnimationId-CxCW2e1W.js";import"./Trapezoid-YALS9NHT.js";import"./Sector-B_TUtlds.js";import"./RegisterGraphicalItemId-0d646qS_.js";import"./ErrorBarContext-DHVubtbe.js";import"./GraphicalItemClipPath-m88eTwMP.js";import"./SetGraphicalItem-B6CVGLUm.js";import"./CSSTransitionAnimate-2UcRzsZi.js";import"./useElementOffset-BAyi_0M5.js";import"./uniqBy-Mxm0Of_y.js";import"./iteratee-B8-MiZGG.js";import"./Cross-DPT3fQtp.js";import"./index-FZYKqp9j.js";import"./ChartSizeDimensions-Ckuhl4O0.js";import"./OffsetShower-DRsWIFHd.js";import"./PlotAreaShower-DlV2zhuR.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
