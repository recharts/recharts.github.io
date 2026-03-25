import{e as r}from"./iframe-DU8eCc54.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-mjyuiYlX.js";import{C as d}from"./CartesianGrid-DYSU-Spr.js";import{X as c}from"./XAxis-BLh_gYvb.js";import{Y as y}from"./YAxis-DVMQwddV.js";import{S as h}from"./Scatter-BvR4d6-5.js";import{E as e}from"./ErrorBar-C5sZO7EF.js";import{T as u}from"./Tooltip-K-N_9545.js";import{R as f}from"./RechartsHookInspector-BoR36NoE.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C5gztReH.js";import"./arrayEqualityCheck-Qp-5SSbe.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DuF4MmFq.js";import"./immer-DU5qWI3u.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DQdIN_Xy.js";import"./hooks-BJclsIvf.js";import"./axisSelectors-_6DhXqkc.js";import"./d3-scale-DU3kIA5p.js";import"./zIndexSlice-DTpubRK7.js";import"./renderedTicksSlice-Bn5V3AB5.js";import"./CartesianChart-B9jAZwRS.js";import"./chartDataContext-B3buAU5Y.js";import"./CategoricalChart-NWkiMroK.js";import"./CartesianAxis-Cm-albbm.js";import"./Layer-BvRSrkrt.js";import"./Text-CoSb7mYB.js";import"./DOMUtils-CJsccqgn.js";import"./Label-DOEvYZv6.js";import"./ZIndexLayer-yILhEk3Y.js";import"./types-BuwCBhFk.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BqHSyciS.js";import"./Curve-CxvlU3dw.js";import"./step-rHtSy8FE.js";import"./tooltipContext-BTs8o_iT.js";import"./Symbols-DiLU7ggZ.js";import"./symbol-BOFZ4ILC.js";import"./ActiveShapeUtils-BG4C0dYN.js";import"./isPlainObject-BxgfEpp7.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-H4hJrl9W.js";import"./useAnimationId-DBo0HAQE.js";import"./Trapezoid-DHbRiH3v.js";import"./Sector-B3eubpfo.js";import"./RegisterGraphicalItemId-DkNBI1Sa.js";import"./ErrorBarContext-BNplQJsE.js";import"./GraphicalItemClipPath-DikKl46E.js";import"./SetGraphicalItem-EApE1d4j.js";import"./CSSTransitionAnimate-D1vvytT6.js";import"./useElementOffset-C0xso2Z-.js";import"./uniqBy-BjwhPhif.js";import"./iteratee-B-u3NDKL.js";import"./Cross-DsTXFGbh.js";import"./index-Cm2tec04.js";import"./ChartSizeDimensions-56Hl6M0T.js";import"./OffsetShower-lCaRoXjj.js";import"./PlotAreaShower-Cn7QQOSS.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
