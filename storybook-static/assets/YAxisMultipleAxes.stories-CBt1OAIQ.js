import{e as t}from"./iframe-BQCoiva3.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-BQIKrjqI.js";import{Y as r}from"./YAxis-Cm9krEUT.js";import{R as l}from"./arrayEqualityCheck-B0366wwk.js";import{C as x}from"./ComposedChart-BYVrpyQ6.js";import{B as o}from"./Bar-BaE5f4z2.js";import{L as a}from"./Line-g-X6S1wl.js";import{X as c}from"./XAxis-adUeWkz6.js";import{T as A}from"./Tooltip-3p7gFyQV.js";import{R as g}from"./RechartsHookInspector-CnEEIRv_.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BkSCP0UE.js";import"./CartesianAxis-DjqIVAOB.js";import"./Layer-DJ1Ub_Mt.js";import"./Text-DJjW_aea.js";import"./DOMUtils-CR4mIpeb.js";import"./Label-DcE3tZRQ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-MNqDcOIF.js";import"./zIndexSlice-DIQaSorX.js";import"./types-D3fsuIcd.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-6nrvr-mh.js";import"./axisSelectors-BeeHNvPl.js";import"./RechartsWrapper-vpzrlwOs.js";import"./CartesianChart-3obF7LW0.js";import"./chartDataContext-DynAjYRS.js";import"./CategoricalChart-BUFP8crF.js";import"./tooltipContext-B7Gcn_PF.js";import"./ReactUtils-CBZ7FQLf.js";import"./ActiveShapeUtils-BR9LCKJd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bkr_shZz.js";import"./useAnimationId-D9Kszw7L.js";import"./Trapezoid-D1e_n1ob.js";import"./Sector-DlkTEg1T.js";import"./Symbols-DO7aFqSH.js";import"./Curve-CIPXZY-U.js";import"./RegisterGraphicalItemId-BshdgZU9.js";import"./ErrorBarContext-Ht_zzjWi.js";import"./GraphicalItemClipPath-Bi8mSekh.js";import"./SetGraphicalItem-DgSBR6IQ.js";import"./getZIndexFromUnknown-dNQMhXcK.js";import"./graphicalItemSelectors-4UHVuMlx.js";import"./ActivePoints-U4p9mPed.js";import"./Dot-BMcg7DSh.js";import"./getRadiusAndStrokeWidthFromDot-fqGyP-HX.js";import"./useElementOffset-SeIeaPKh.js";import"./iteratee-BfMs3-Wx.js";import"./Cross-C_dELTIE.js";import"./index-DKG7AucC.js";import"./ChartSizeDimensions-_A7Mz-FY.js";import"./OffsetShower-D2FIRFNu.js";import"./PlotAreaShower-j01VLlBO.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const It=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,It as __namedExportsOrder,ut as default};
