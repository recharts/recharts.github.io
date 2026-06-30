import{R as r}from"./iframe-CysaVPuT.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-DSBbw5vi.js";import{C as d}from"./CartesianGrid-BVNtE_L6.js";import{X as c}from"./XAxis-BHTWnpmK.js";import{Y as y}from"./YAxis-hZ4kGdBq.js";import{S as h}from"./Scatter-BdStmBZg.js";import{E as e}from"./ErrorBar-bqxcUkie.js";import{T as u}from"./Tooltip-DULMtNKm.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CXNQztOV.js";import"./zIndexSlice-CBspyTeT.js";import"./throttle-BijqxQd6.js";import"./index-BoQpP3ng.js";import"./index-C8sovufb.js";import"./get-Dv3cK-ON.js";import"./resolveDefaultProps-CB9Bmy8P.js";import"./isWellBehavedNumber-CHReb6Hq.js";import"./PolarUtils-CTnnDHZv.js";import"./index-ClhA1x-k.js";import"./index-CIm0M9H5.js";import"./renderedTicksSlice-L6Kj9uMm.js";import"./axisSelectors-CybQsixZ.js";import"./d3-scale-BWFUWIRC.js";import"./CartesianChart-Dlco-df9.js";import"./chartDataContext-BsGd8oTW.js";import"./CategoricalChart-B4xuyyeZ.js";import"./CartesianAxis-ACLpIvis.js";import"./Layer-DQgbcZ6W.js";import"./Text-DqT5jcn2.js";import"./DOMUtils-z1JZhy6H.js";import"./Label-B_m_1QPA.js";import"./ZIndexLayer-C6PjgPWA.js";import"./types-DWuPiLas.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./AnimatedItems-HWCD5qdq.js";import"./useAnimationId-XV22nS6k.js";import"./Curve-DVkbv2J8.js";import"./step-vxR68qu5.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CzV606mp.js";import"./Symbols-eew_Q_1o.js";import"./symbol-CNPuKnzX.js";import"./ActiveShapeUtils-HeGPuRiV.js";import"./RegisterGraphicalItemId-BIn5Riid.js";import"./ErrorBarContext-CYyCl8MN.js";import"./GraphicalItemClipPath-DMny06t1.js";import"./SetGraphicalItem-ihbnCYD8.js";import"./CSSTransitionAnimate-BPKkb7rL.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-B-396utJ.js";import"./uniqBy-BJRjFRzK.js";import"./iteratee-DuqmaN7B.js";import"./Cross-DqrQduZ1.js";import"./Rectangle-V2sNlqNc.js";import"./Sector-Dozb6yk1.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
