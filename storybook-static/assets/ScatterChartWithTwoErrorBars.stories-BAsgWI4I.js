import{e as r}from"./iframe-B6PVJaTx.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-CXt9TZJo.js";import{C as d}from"./CartesianGrid-mAYc4o0w.js";import{X as c}from"./XAxis-B6nzW_y2.js";import{Y as y}from"./YAxis-D3KHnhFR.js";import{S as h}from"./Scatter-DF6G9b0w.js";import{E as e}from"./ErrorBar-DOYcsJwV.js";import{T as u}from"./Tooltip-DPR5Vxgj.js";import{R as f}from"./RechartsHookInspector-DAdFhUj3.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BP-lLfVx.js";import"./arrayEqualityCheck--l5nbOOj.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-SbZpfCF8.js";import"./immer-C_TrIJMh.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BYl1MF2O.js";import"./hooks-CMcsnkVg.js";import"./axisSelectors-Bycocccg.js";import"./d3-scale-B9ZoAAf3.js";import"./zIndexSlice-67Af1QFi.js";import"./renderedTicksSlice-BgZ61m11.js";import"./CartesianChart-VouzMpCB.js";import"./chartDataContext-KAdJCeqF.js";import"./CategoricalChart-BKdjoORw.js";import"./CartesianAxis-DZRbozUC.js";import"./Layer-B8Qqjz1b.js";import"./Text-C0kuQw6e.js";import"./DOMUtils-C2NDlTFm.js";import"./Label-BcLUaBCG.js";import"./ZIndexLayer-d-D4FVJh.js";import"./types-D2EFyeKu.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BX8s_uVv.js";import"./Curve-DFsvHQ10.js";import"./step-D3frr3Yw.js";import"./tooltipContext-DBaxOlkE.js";import"./Symbols-D85bhFp3.js";import"./symbol-JouRlcFh.js";import"./ActiveShapeUtils-B_lqA0BU.js";import"./isPlainObject-BDf_CSQT.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BTXCPNQZ.js";import"./useAnimationId-BQkpZnA1.js";import"./Trapezoid-B69mIrTK.js";import"./Sector-DBXvXTeF.js";import"./RegisterGraphicalItemId-u9lrCCFO.js";import"./ErrorBarContext-CPj1LVBL.js";import"./GraphicalItemClipPath-BvACd4D_.js";import"./SetGraphicalItem-D73Bmw1S.js";import"./CSSTransitionAnimate-B9CcKlsB.js";import"./useElementOffset-DEktGNVm.js";import"./uniqBy-BfHwhh8s.js";import"./iteratee-CmfJSOYg.js";import"./Cross-BYRz6Hta.js";import"./index-DliOLYsg.js";import"./ChartSizeDimensions-DJ4EsjSA.js";import"./OffsetShower-BD_1fIgB.js";import"./PlotAreaShower-CzP38MFh.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
