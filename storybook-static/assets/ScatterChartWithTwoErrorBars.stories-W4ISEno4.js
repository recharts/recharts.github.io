import{e as r}from"./iframe-eaOsasXA.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-BP3V3P5P.js";import{C as d}from"./CartesianGrid-XpHpCMJI.js";import{X as c}from"./XAxis-3ftlLggt.js";import{Y as y}from"./YAxis-D0SSpyRh.js";import{S as h}from"./Scatter-IpfxAzIy.js";import{E as e}from"./ErrorBar-jQFGBBiB.js";import{T as u}from"./Tooltip-BdXqARe_.js";import{R as f}from"./RechartsHookInspector-CfQxcoqC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-kQIwCL0D.js";import"./arrayEqualityCheck-CMs0gYkZ.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BRN_chMz.js";import"./immer-h0oz4gDz.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CBq7QNMe.js";import"./hooks-DkQXEwbK.js";import"./axisSelectors-rZ1oBaef.js";import"./d3-scale-fyi29fM7.js";import"./zIndexSlice-CQVRJFSN.js";import"./renderedTicksSlice-HUT3i4LQ.js";import"./CartesianChart-DqLib-3F.js";import"./chartDataContext-BZaY1x-g.js";import"./CategoricalChart-BHzek6ba.js";import"./CartesianAxis-QrZ9YuOP.js";import"./Layer-CEQ15rDn.js";import"./Text-CS5oLB7f.js";import"./DOMUtils-DKDW8odg.js";import"./Label-CM17nvk9.js";import"./ZIndexLayer-4Bmx0L-z.js";import"./types-DVEQRe7O.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-rQN1ow78.js";import"./Curve-BpLwOdP7.js";import"./step-wTrvujLP.js";import"./tooltipContext-Cj5Ji5q3.js";import"./Symbols-DwawNnsL.js";import"./symbol-DkR6dB45.js";import"./ActiveShapeUtils-DuB5RKi8.js";import"./isPlainObject-DOptfpMt.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DCXniG-Q.js";import"./useAnimationId-Cipx0nDt.js";import"./Trapezoid-B7u96FyR.js";import"./Sector-DlrpmWZs.js";import"./RegisterGraphicalItemId-1T1LHaRb.js";import"./ErrorBarContext-BRJpaXpn.js";import"./GraphicalItemClipPath-DHbALYaQ.js";import"./SetGraphicalItem-CI6Uk2ug.js";import"./CSSTransitionAnimate-BBq15jQ6.js";import"./useElementOffset-CA1reWi7.js";import"./uniqBy-DxeT86xP.js";import"./iteratee-GUobkNTQ.js";import"./Cross-Bm5d82mo.js";import"./index-D4X9rB5g.js";import"./ChartSizeDimensions-DQ43uIY8.js";import"./OffsetShower-Y12_Isjl.js";import"./PlotAreaShower-ND2vevs1.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
