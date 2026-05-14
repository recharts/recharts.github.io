import{e as t}from"./iframe-VKSiBROl.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-D4wJ7AYM.js";import{R as l}from"./arrayEqualityCheck-BB0HA1wg.js";import{C as x}from"./ComposedChart-DRm_ML7n.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-RoOBD0ue.js";import{L as a}from"./Line-BVKPMqu3.js";import{X as A}from"./XAxis-c6QFLIoy.js";import{T as g}from"./Tooltip-Bwd3S6gV.js";import{R as f}from"./RechartsHookInspector-Bk4R2bPq.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CQXTkaRJ.js";import"./Layer-B5Q3HgyD.js";import"./resolveDefaultProps-NGq3vz57.js";import"./Text-DIF9PeK1.js";import"./DOMUtils-BrJ5g_oy.js";import"./Label-CFO9NE9M.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-VGyT3hqP.js";import"./zIndexSlice-DsFodTYX.js";import"./immer-CPTHWkkH.js";import"./types-DY717biQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-C68_OdSZ.js";import"./hooks-ZL9qLpLY.js";import"./axisSelectors-C7KTOZ5c.js";import"./d3-scale-BjDGrkpd.js";import"./RechartsWrapper-BaY8BgmV.js";import"./index-Z1DhqR18.js";import"./CartesianChart-o8YH5MQb.js";import"./chartDataContext-PCAfxVIZ.js";import"./CategoricalChart-ChVNCGBd.js";import"./tooltipContext-CMgj9Eu9.js";import"./ReactUtils-DMEWBI26.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Bo5Iqhwn.js";import"./isPlainObject-BPft1dx1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CyZMqhQE.js";import"./useAnimationId-CxCW2e1W.js";import"./Trapezoid-YALS9NHT.js";import"./Sector-B_TUtlds.js";import"./Symbols-BAu9sMjT.js";import"./symbol-BFLJpHsz.js";import"./step-CaHu3Oa5.js";import"./Curve-yzuL5_Sr.js";import"./RegisterGraphicalItemId-0d646qS_.js";import"./ErrorBarContext-DHVubtbe.js";import"./GraphicalItemClipPath-m88eTwMP.js";import"./SetGraphicalItem-B6CVGLUm.js";import"./getZIndexFromUnknown-BY1D_rCU.js";import"./graphicalItemSelectors-BDTb2oUm.js";import"./ActivePoints-RNYfiJHn.js";import"./Dot-CcGx7WmK.js";import"./getRadiusAndStrokeWidthFromDot-BF1XYufC.js";import"./useElementOffset-BAyi_0M5.js";import"./uniqBy-Mxm0Of_y.js";import"./iteratee-B8-MiZGG.js";import"./Cross-DPT3fQtp.js";import"./index-FZYKqp9j.js";import"./ChartSizeDimensions-Ckuhl4O0.js";import"./OffsetShower-DRsWIFHd.js";import"./PlotAreaShower-DlV2zhuR.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <article style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
        <div style={{
        width: '100%'
      }}>
          <ResponsiveContainer width="100%" height={500}>
            <ComposedChart data={pageData}>
              <Bar dataKey="pv" fill="red" yAxisId="right" />
              <Bar dataKey="uv" fill="red" yAxisId="right-mirror" />
              <Line dataKey="amt" fill="green" yAxisId="left" />
              <Line dataKey="amt" fill="green" yAxisId="left-mirror" />

              <XAxis padding={{
              left: 50,
              right: 50
            }} dataKey="name" scale="band" />
              <YAxis {...args} yAxisId="left" orientation="left" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="left-mirror" orientation="left" mirror tickCount={8} />
              <YAxis {...args} yAxisId="right" orientation="right" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="right-mirror" orientation="right" mirror tickCount={20} />

              <Tooltip />
              <RechartsHookInspector />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <h4>
          {\`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element\`}
        </h4>
      </article>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(s=i.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Tt=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,Tt as __namedExportsOrder,kt as default};
