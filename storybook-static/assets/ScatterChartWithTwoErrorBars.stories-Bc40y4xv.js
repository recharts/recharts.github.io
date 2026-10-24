import{a as r}from"./iframe-BPQD5v1C.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-BsLAS-rI.js";import{C as d}from"./CartesianGrid-BjsXEzWG.js";import{X as c}from"./XAxis-Tde5CSPK.js";import{Y as y}from"./YAxis-DB1Rqz7t.js";import{S as h}from"./Scatter-CCIyudZP.js";import{E as e}from"./ErrorBar-BibV7DC2.js";import{T as u}from"./Tooltip-DUW2EXoj.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Cu7qj_jR.js";import"./zIndexSlice-DfAJCemw.js";import"./throttle-DC1LNmjU.js";import"./index-Tuf2nq6s.js";import"./index-CXovuven.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-upxpdF4p.js";import"./isWellBehavedNumber-C9SB8Pzn.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-CGRWr5-t.js";import"./d3-scale-BcAkS-dE.js";import"./index-yHndqaau.js";import"./index-BNGNsbfJ.js";import"./renderedTicksSlice-Bnytbutp.js";import"./index-NpnztBAt.js";import"./CartesianChart-KMtmBeRo.js";import"./chartDataContext-BEETkhZS.js";import"./CategoricalChart-0gTJFCdb.js";import"./CartesianAxis-kXg3v2M0.js";import"./Layer-B7QJBZyG.js";import"./Text-BGkNki-C.js";import"./pageBackground-D3c52TtU.js";import"./useId-BM-r51MU.js";import"./useBackwardsCompatibleTheme-CpAd0K8h.js";import"./Label-ZHQGm3zg.js";import"./ZIndexLayer-CyIARuTz.js";import"./dataEntryStyles-ClqDXIzp.js";import"./types-BZME1xI7.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-BpdD72zS.js";import"./useAnimationId-D3CbYaCo.js";import"./Curve-1sBQTzGW.js";import"./step-DY16rTOH.js";import"./path-DyVhHtw_.js";import"./tooltipContext-89q0ReT3.js";import"./Symbols-ntiaWcY8.js";import"./symbol-DA7s8c0S.js";import"./ActiveShapeUtils-CD8s1oUL.js";import"./RegisterGraphicalItemId-C_N6zcJ6.js";import"./ErrorBarContext-Bd0khpbf.js";import"./SetGraphicalItem-DTtwRFlr.js";import"./useEffectiveDataKey-fbFyI37i.js";import"./CSSTransitionAnimate-NkMBq0vy.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DZ6cu7_x.js";import"./uniqBy-SNVjjllr.js";import"./iteratee-DN6PB4Ph.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CMzu5cot.js";import"./Rectangle-Dvfx4mjp.js";import"./Sector-D1oJu_pB.js";const Dr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Or=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Or as __namedExportsOrder,Dr as default};
