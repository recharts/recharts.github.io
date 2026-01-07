import{e as r}from"./iframe-DaCZzlB4.js";import{g as d}from"./utils-ePvtT4un.js";import{X as e}from"./XAxisProps-d4szlzro.js";import{a as y}from"./ChartProps-BCGtP1Xa.js";import{S as p}from"./ScatterChart-B7UlpLn-.js";import{C as h}from"./CartesianGrid-DqFR1Dv1.js";import{X as u}from"./XAxis-Xd1zSAtt.js";import{Y as f}from"./YAxis-CjzxMwK0.js";import{S as w}from"./Scatter-LKXiDm0w.js";import{E as a}from"./ErrorBar-BkZWuiKx.js";import{T as g}from"./Tooltip-dVF4BIVJ.js";import{R as x}from"./RechartsHookInspector-C1qZr8kA.js";import"./preload-helper-Dp1pzeXC.js";import"./SharedAxisProps-DKzkaa4t.js";import"./EventHandlers-JVOOzquU.js";import"./RechartsWrapper-CytJWPJg.js";import"./arrayEqualityCheck-xIdjdXyO.js";import"./resolveDefaultProps-CDCOnC3u.js";import"./PolarUtils-CS41bXSK.js";import"./hooks-96RhMqDh.js";import"./axisSelectors-BaN6N1Lo.js";import"./zIndexSlice-B7osVKE5.js";import"./CartesianChart-CmxBhKD5.js";import"./chartDataContext-C2uZEvtu.js";import"./CategoricalChart-BnmCoL2H.js";import"./CartesianAxis-B3Ks68Jf.js";import"./Layer-BKXPn5xD.js";import"./Text-3g0qzZJG.js";import"./DOMUtils-DZpmyTbi.js";import"./Label-D2rMkPMU.js";import"./ZIndexLayer-Deqw7_sa.js";import"./types-CyhQh7_Z.js";import"./ReactUtils-yqeNEccg.js";import"./Curve-BcpAE4Ao.js";import"./tooltipContext-CtRObmAP.js";import"./Symbols-CqwnDYaa.js";import"./ActiveShapeUtils-DeHR3FEj.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-z0Tijc68.js";import"./useAnimationId-DMDiR4YX.js";import"./Trapezoid-OHYhJgzZ.js";import"./Sector-D1uAN8IN.js";import"./RegisterGraphicalItemId-BC9wjUC-.js";import"./ErrorBarContext-D3ibGYOb.js";import"./GraphicalItemClipPath-CLpO-bZw.js";import"./SetGraphicalItem-DKRKp8eM.js";import"./CSSTransitionAnimate-CHm--c9M.js";import"./useElementOffset-CL0kWG2p.js";import"./iteratee-m2fxanZQ.js";import"./Cross-CAbEIlW6.js";import"./index-DqUfe0wd.js";import"./ChartSizeDimensions-Dn5P1TLL.js";import"./OffsetShower-CyCVWv2W.js";import"./PlotAreaShower-DACZviw9.js";const i={...y,layout:{description:"The layout of areas, bars, lines in the chart.",options:["horizontal","vertical"],control:{type:"radio"},table:{type:{summary:"horizontal | vertical"},defaultValue:"horizontal",category:"General"}}},n={layout:{...i.layout,table:{...i.layout.table,category:"ScatterChart props"}},allowDataOverflow:{...e.allowDataOverflow,table:{...e.allowDataOverflow.table,category:"XAxis + YAxis props"}}},Xr={component:p,argTypes:n,docs:{autodocs:!1}},t={render:o=>{const c=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(h,null),r.createElement(u,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(f,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(w,{name:"A school",data:c,fill:"blue"},r.createElement(a,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(a,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(g,{cursor:{strokeDasharray:"3 3"}}),r.createElement(x,null))},args:d(n),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var m,s,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
  args: getStoryArgsFromArgsTypesObject(bespokeArgTypes),
  parameters: {
    controls: {
      include: ['layout', 'allowDataOverflow']
    }
  }
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const Er=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Er as __namedExportsOrder,Xr as default};
