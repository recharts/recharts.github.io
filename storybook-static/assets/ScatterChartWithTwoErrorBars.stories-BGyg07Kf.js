import{R as r}from"./iframe-DXxYhCFt.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-VnmCv5dL.js";import{C as d}from"./CartesianGrid-Cc40lTV8.js";import{X as c}from"./XAxis-C9NpqiLb.js";import{Y as y}from"./YAxis-fukBbkBQ.js";import{S as h}from"./Scatter-CeoAX3Ld.js";import{E as e}from"./ErrorBar-CcTnsJL2.js";import{T as u}from"./Tooltip-CQgnAVgk.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DlzjOLMT.js";import"./zIndexSlice-qI1U9rrE.js";import"./immer-D7akT6tS.js";import"./index-CK1-JLS2.js";import"./index-B4aunhTl.js";import"./get-DDC6WZq8.js";import"./resolveDefaultProps-Bho5O1tb.js";import"./isWellBehavedNumber-CZeoqkhJ.js";import"./PolarUtils-CTnnDHZv.js";import"./index-cTUjJegW.js";import"./index-BxnCQVmB.js";import"./renderedTicksSlice-3Dm4ElKF.js";import"./axisSelectors-CmDHWXKB.js";import"./d3-scale-rcor9ivz.js";import"./CartesianChart-DvdTpmiF.js";import"./chartDataContext-Bh9U9MSr.js";import"./CategoricalChart-DnXiIflv.js";import"./CartesianAxis-DhUSnw0c.js";import"./Layer-BUsxcvuT.js";import"./Text-BFOIQrpY.js";import"./DOMUtils-Bd7kqUhA.js";import"./Label-C324QdBW.js";import"./ZIndexLayer-DA8tUdaM.js";import"./types-AXOViau4.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./AnimatedItems-u581L8cQ.js";import"./useAnimationId-B_zUITBn.js";import"./Curve-BoZszlOQ.js";import"./step-CUCP3dE9.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Dvz-E8_R.js";import"./Symbols-p6tzUQrv.js";import"./symbol-BLNVVXJX.js";import"./ActiveShapeUtils-BJbjDOel.js";import"./RegisterGraphicalItemId-zrXRLiIJ.js";import"./ErrorBarContext-oapAiLxU.js";import"./GraphicalItemClipPath-qvKBcuDL.js";import"./SetGraphicalItem-UU_FN1uP.js";import"./CSSTransitionAnimate-C8QSEyKR.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DvUrxQBN.js";import"./uniqBy-B4OTk4uG.js";import"./iteratee-B4Viaby6.js";import"./Cross-BpQQmoe6.js";import"./Rectangle-Cjbse2NQ.js";import"./Sector-DaxcHb1i.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
      </ScatterChart>;
  },
  args: getStoryArgsFromArgsTypesObject(ScatterChartArgs),
  parameters: {
    controls: {
      include: ['layout', 'allowDataOverflow']
    }
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Er=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Er as __namedExportsOrder,xr as default};
