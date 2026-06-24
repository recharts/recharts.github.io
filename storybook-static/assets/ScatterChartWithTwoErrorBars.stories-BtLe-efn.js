import{R as r}from"./iframe-C-fup5Id.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-DI2CyJTH.js";import{C as d}from"./CartesianGrid-DnMjpwq0.js";import{X as c}from"./XAxis-DODICsjR.js";import{Y as y}from"./YAxis-B46hC9dU.js";import{S as h}from"./Scatter-MbO7ISL0.js";import{E as e}from"./ErrorBar-U0CbDbMK.js";import{T as u}from"./Tooltip-ghccvaKJ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B95PZmfT.js";import"./zIndexSlice-NTR0fs-C.js";import"./immer-8TCI2H73.js";import"./index-Dx7TC_Rp.js";import"./index-DjFdhAan.js";import"./get-p2wvzD9I.js";import"./resolveDefaultProps-OK-IJ12C.js";import"./isWellBehavedNumber-DLU1AHVw.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DNWmVjf2.js";import"./index-BlVQDt2E.js";import"./renderedTicksSlice-DiIPZqfD.js";import"./axisSelectors-BO6Bv25T.js";import"./d3-scale-BaBWXdX7.js";import"./CartesianChart-DGFEm_4g.js";import"./chartDataContext-Ci_9Tusi.js";import"./CategoricalChart-2uAqMqKC.js";import"./CartesianAxis-DNfda7To.js";import"./Layer-BxCAIV-n.js";import"./Text-DhUd53xM.js";import"./DOMUtils-CRh4TCoN.js";import"./Label-Dx6_KP12.js";import"./ZIndexLayer-DdUd9A7h.js";import"./types-BIM6WHXQ.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./AnimatedItems-BHa_3vog.js";import"./useAnimationId-CHZsXmiy.js";import"./Curve-BxzrSemv.js";import"./step-BjlE7YIb.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DBZ8XCai.js";import"./Symbols-Dk8hcEz4.js";import"./symbol-DNpitnQR.js";import"./ActiveShapeUtils-BmOgDWMs.js";import"./RegisterGraphicalItemId-mXg0uLQv.js";import"./ErrorBarContext-P4JGsE5W.js";import"./GraphicalItemClipPath-CURGfNfz.js";import"./SetGraphicalItem-KcsUgiZW.js";import"./CSSTransitionAnimate-D_RF_PTo.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-e7BpmwTH.js";import"./uniqBy-DmJ3MZLP.js";import"./iteratee-C8R--wWy.js";import"./Cross-B8v49sfh.js";import"./Rectangle-MYtIjh59.js";import"./Sector-CMpapL9a.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
