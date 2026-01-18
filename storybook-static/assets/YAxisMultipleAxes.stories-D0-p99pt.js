import{e as t}from"./iframe-B_ZhM03Y.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CtpClMsJ.js";import{Y as r}from"./YAxis-MqnRM2TT.js";import{R as l}from"./arrayEqualityCheck-CloHfm1b.js";import{C as x}from"./ComposedChart-QL3NRICu.js";import{B as o}from"./Bar-BftbFXKA.js";import{L as a}from"./Line-C29t8JSR.js";import{X as c}from"./XAxis-BwiG5zlQ.js";import{T as A}from"./Tooltip-DYgfdLdw.js";import{R as g}from"./RechartsHookInspector-CedEGYW7.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C2hO3de9.js";import"./CartesianAxis-B6B84b8_.js";import"./Layer-BOxBWqHH.js";import"./Text-DQMzR-Rn.js";import"./DOMUtils-DIxanI67.js";import"./Label-G2FvxRoa.js";import"./PolarUtils-CgPgv3CO.js";import"./ZIndexLayer-DQM-WqDQ.js";import"./zIndexSlice-DOM2ZPVV.js";import"./types-CPNOLsga.js";import"./hooks-C0kAm8Eo.js";import"./axisSelectors-CpGC88wy.js";import"./RechartsWrapper-u6yQp6qc.js";import"./CartesianChart-Re97mOhW.js";import"./chartDataContext-BdXMgBWg.js";import"./CategoricalChart-B5rfhQvt.js";import"./tooltipContext-DORR-wbc.js";import"./ReactUtils-CV9gD_3H.js";import"./ActiveShapeUtils-C6bCBIkh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CXZfm4Mc.js";import"./useAnimationId-GdkLb2Sd.js";import"./Trapezoid-Bxl0rgJp.js";import"./Sector-zu_K_Cyg.js";import"./Symbols-B_O8HrI4.js";import"./Curve-CacS2CA9.js";import"./RegisterGraphicalItemId-DXkXPQtf.js";import"./ErrorBarContext-B6sGO-tf.js";import"./GraphicalItemClipPath-ju3MUMLR.js";import"./SetGraphicalItem-DKzya-iG.js";import"./getZIndexFromUnknown-B68E1O6P.js";import"./graphicalItemSelectors-Cx0Ncgg-.js";import"./ActivePoints-ypNM3A09.js";import"./Dot-CuMCJhAb.js";import"./getRadiusAndStrokeWidthFromDot-Cx0j_eyy.js";import"./useElementOffset-ArqjKzWR.js";import"./iteratee-Cb2JYpEF.js";import"./Cross-DBCc1P9s.js";import"./index-C4JY2suC.js";import"./ChartSizeDimensions-Bu3QszIW.js";import"./OffsetShower-C0fU06Jz.js";import"./PlotAreaShower-Mptvcbb5.js";const yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const ut=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,ut as __namedExportsOrder,yt as default};
