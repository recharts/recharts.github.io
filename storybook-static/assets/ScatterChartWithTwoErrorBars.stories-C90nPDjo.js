import{R as r}from"./iframe-DQXFH2fN.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-D4jNruMH.js";import{C as d}from"./CartesianGrid-CvQm-C4w.js";import{X as c}from"./XAxis-DeVff73G.js";import{Y as y}from"./YAxis-DxKBEaoV.js";import{S as h}from"./Scatter-D6dY_iHu.js";import{E as e}from"./ErrorBar-BnqnsKKW.js";import{T as u}from"./Tooltip-INA8wN3X.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-FcCSE1mG.js";import"./zIndexSlice-Dfa7PPo3.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-lSPh-jGh.js";import"./throttle-CBXVztye.js";import"./index-LVwk1DdF.js";import"./index-BledrYYe.js";import"./axisSelectors-DJbzZfhu.js";import"./polarAxisSelectors-D125t7LL.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-XeOVwhgh.js";import"./index-CIcJU2zj.js";import"./index-Bra-aG0C.js";import"./renderedTicksSlice-CbHdjAK6.js";import"./index-BsheJTgc.js";import"./fillDefinitions-KRhWslMp.js";import"./CartesianChart-DQGbpwTu.js";import"./chartDataContext-DJ78QJpQ.js";import"./CategoricalChart-t_6GcrEg.js";import"./CartesianAxis-FqFP5ld6.js";import"./Layer-B0dm1oba.js";import"./Text-DcdnatC4.js";import"./ZIndexLayer-D9yot1xi.js";import"./Label-CZ1SHjxx.js";import"./types-CN3-AGJF.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-CDXKXbSY.js";import"./activeStyles-DgOGJt0j.js";import"./useAnimationId-BlZ_idpE.js";import"./Curve-Dawv8-Of.js";import"./step-Bu-hwkdA.js";import"./path-DyVhHtw_.js";import"./tooltipContext-OBuBQcD_.js";import"./Symbols-D7I-QI86.js";import"./symbol-8Qaz948q.js";import"./ActiveShapeUtils-CbcAbfiK.js";import"./ErrorBarContext-CbK3TAVw.js";import"./SetGraphicalItem-CRYZ3Qzj.js";import"./useEffectiveDataKey-FX7cYr8p.js";import"./CSSTransitionAnimate-CzzzkyIc.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-jipf_0Cu.js";import"./uniqBy-Dc0JsRTv.js";import"./iteratee-DsTi5lqZ.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BsiALtxc.js";import"./Rectangle-bqWLnmmt.js";import"./Sector-D4nbjpRD.js";const Yr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Ar=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Ar as __namedExportsOrder,Yr as default};
