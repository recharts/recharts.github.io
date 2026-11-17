import{R as r}from"./iframe-waGCAeMO.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-BWMampZN.js";import{C as d}from"./CartesianGrid-K2byEmuF.js";import{X as c}from"./XAxis-C97Th9HK.js";import{Y as y}from"./YAxis-Bp6_7tMg.js";import{S as h}from"./Scatter-Dqc_2CL6.js";import{E as e}from"./ErrorBar-DLJUCWvz.js";import{T as u}from"./Tooltip-the880DM.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DrhKOT3w.js";import"./zIndexSlice-Bs9eWJkZ.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Dpi9F_1z.js";import"./throttle-CoYevXVP.js";import"./index-CcRKR-Wz.js";import"./index-DUwJtu9Y.js";import"./axisSelectors-BpNK-g3S.js";import"./polarAxisSelectors-DtiraoLM.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-FqfjaXEu.js";import"./index-kB8F1Br5.js";import"./index-3B7lt2Ve.js";import"./renderedTicksSlice-ClDU73ld.js";import"./index-11RgyOoZ.js";import"./fillDefinitions-DkO2tIQI.js";import"./CartesianChart-7iyfeH7l.js";import"./chartDataContext-BbqISvQG.js";import"./CategoricalChart-D2Hb9hNl.js";import"./CartesianAxis-BDzG2Gtt.js";import"./Layer-dmB1mICY.js";import"./Text-C-WU5iwS.js";import"./ZIndexLayer-B2QwwaI-.js";import"./Label-Chhp1CRe.js";import"./types-DrCFt1uv.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-DwD17VpV.js";import"./activeStyles-Db3JHrE0.js";import"./useAnimationId-DGRCx4ie.js";import"./Curve-Cb7BkQkF.js";import"./step-CvjzszA2.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DOcO8H8O.js";import"./Symbols-sTKgXRyZ.js";import"./symbol-CRbcfw6A.js";import"./ActiveShapeUtils-BuFZhuT8.js";import"./ErrorBarContext-DLQUfAIY.js";import"./SetGraphicalItem-DY5DQdLd.js";import"./useEffectiveDataKey-DONRPZmA.js";import"./CSSTransitionAnimate-DWtSEJ0O.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DFWzqZEl.js";import"./uniqBy-CqnsSxDI.js";import"./iteratee-DPicYX8A.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CgvdF31W.js";import"./Rectangle-W9w0JczW.js";import"./Sector-C6LMEFyk.js";const Yr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Ar=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
