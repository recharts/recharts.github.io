import{R as r}from"./iframe-Czzk5Bx-.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-BCAvLL5d.js";import{C as d}from"./CartesianGrid-DwzIWQpU.js";import{X as c}from"./XAxis-DWUu3518.js";import{Y as y}from"./YAxis-DskmDTW_.js";import{S as h}from"./Scatter-Ce6-oo2_.js";import{E as e}from"./ErrorBar-DgZGfs9P.js";import{T as u}from"./Tooltip-D_YzDKbO.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C5Ex_ZCH.js";import"./zIndexSlice-CcZCAOP2.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Csc694qB.js";import"./throttle-Dlw7_zhK.js";import"./index-CtnBEbb_.js";import"./index-CElqLkJS.js";import"./axisSelectors-BthV4RsX.js";import"./polarAxisSelectors-Bgc5VpYB.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CS0QJ-EZ.js";import"./index-CAks9lDH.js";import"./index-yeT-45bY.js";import"./renderedTicksSlice-BwJ2p4Mi.js";import"./index-CsxmvEat.js";import"./fillDefinitions-DaR2TDo1.js";import"./CartesianChart-D3FUkn-t.js";import"./chartDataContext--mSdRmgw.js";import"./CategoricalChart-a1Xr9UIu.js";import"./CartesianAxis-5U6hsfI6.js";import"./Layer-CarPpKFV.js";import"./Text-CSorP4yu.js";import"./ZIndexLayer-DISaA8MD.js";import"./Label-CoDIIawi.js";import"./types-Bykt0Hlw.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-C8IdewjD.js";import"./activeStyles-Dd2x1Ur1.js";import"./useAnimationId-BMmeHowj.js";import"./Curve-DNAnmcp5.js";import"./step-C5vJ1U24.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Ds2DbmQs.js";import"./Symbols-DOiO9HXo.js";import"./symbol-DOUGW8Ut.js";import"./ActiveShapeUtils-BDX2WB3N.js";import"./ErrorBarContext-BTwK65Em.js";import"./SetGraphicalItem-DZqA_DJ9.js";import"./useEffectiveDataKey-BCok4F6X.js";import"./CSSTransitionAnimate-CKb0XC3d.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-zxdJRS0e.js";import"./uniqBy-CjJbYxjU.js";import"./iteratee-CC6hZy84.js";import"./isArguments-yB-y1yaH.js";import"./Cross-5c-8ZAhj.js";import"./Rectangle-B6IFm27t.js";import"./Sector-D1PeNtRJ.js";const Yr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Ar=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
