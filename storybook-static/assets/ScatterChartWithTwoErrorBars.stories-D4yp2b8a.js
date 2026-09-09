import{a as r}from"./iframe-3mrIZkil.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-DsxWppF1.js";import{C as d}from"./CartesianGrid-C4bUFIHm.js";import{X as c}from"./XAxis-D6OSWIjP.js";import{Y as y}from"./YAxis-L6Kj6NBD.js";import{S as h}from"./Scatter-ce27HUAX.js";import{E as e}from"./ErrorBar-B-bOSfDR.js";import{T as u}from"./Tooltip-DR2XYmSX.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DwVI4RN7.js";import"./zIndexSlice-L3ODJxG9.js";import"./throttle-rESuvk1I.js";import"./index-BXM7Ne4y.js";import"./index-CDwIhtzp.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-i-Y4kJTh.js";import"./isWellBehavedNumber-ZyDhg4rS.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-DAOLJeWY.js";import"./d3-scale-CguR2U2N.js";import"./index-BtaPmQxv.js";import"./index-BdkN9O5O.js";import"./renderedTicksSlice-DYEa3gne.js";import"./index-pFwFQ5O8.js";import"./CartesianChart-CUvaXipt.js";import"./chartDataContext-FTM0Yeif.js";import"./CategoricalChart-D95OMo3E.js";import"./CartesianAxis-BlnQQ3GL.js";import"./Layer-DjZWmALl.js";import"./Text-DUYy6Shz.js";import"./DOMUtils-CXxLAhGm.js";import"./useId-Cxwt81yN.js";import"./useBackwardsCompatibleTheme-lR8vi8zs.js";import"./Label-BIqKgU55.js";import"./ZIndexLayer-D4cc4mD4.js";import"./types-8JRxRnLp.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DhXJ9Je_.js";import"./useAnimationId-BnnXfXw0.js";import"./Curve-Bw-gimBr.js";import"./step-DsELI93G.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DH0INPqo.js";import"./Symbols-B-x4p4sy.js";import"./symbol-Dr6L5N19.js";import"./ActiveShapeUtils-BBpy3JCJ.js";import"./RegisterGraphicalItemId-BDB0ngzS.js";import"./ErrorBarContext-NAHggWz8.js";import"./GraphicalItemClipPath-Bb5lUrgq.js";import"./SetGraphicalItem-9-RZ0mcl.js";import"./useGraphicalItemIdentity-BcKg6UBn.js";import"./CSSTransitionAnimate-Dy8sIWSD.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DGkGm79j.js";import"./uniqBy-CSyaLent.js";import"./iteratee-yW488fbm.js";import"./Cross-DJFcvGJF.js";import"./Rectangle-BDa16x25.js";import"./Sector-CV6xDlC_.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Dr as __namedExportsOrder,Sr as default};
