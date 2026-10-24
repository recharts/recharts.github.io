import{a as t}from"./iframe-CptpVVdK.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DNukS_kg.js";import{R as l}from"./zIndexSlice-CAnxLxZK.js";import{C as x}from"./ComposedChart-Bnlr5v8S.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-gWpIpaCE.js";import{L as a}from"./Line-TfJoKlI6.js";import{X as c}from"./XAxis-r2oUn28C.js";import{T as g}from"./Tooltip-BGwmOjgF.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DWXJ-Xrk.js";import"./Text-DTbKMiqG.js";import"./resolveDefaultProps-Bdo80tkX.js";import"./pageBackground-0u46-xLx.js";import"./isWellBehavedNumber-Cb3PSSsF.js";import"./useId-BHxaLpBq.js";import"./useBackwardsCompatibleTheme-Ck1iBTHP.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DRWh5tG_.js";import"./index-BTwylabs.js";import"./index-alo09WMF.js";import"./dataEntryStyles-pGU1xid_.js";import"./axisSelectors-DPTiSWkh.js";import"./throttle-BVKLcYc0.js";import"./d3-scale-DZZpobVW.js";import"./CartesianAxis-CgAlW-mI.js";import"./Layer-DZV5gQWy.js";import"./types-LYqggaBA.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-Cw--JOgv.js";import"./index-Dqps63Gr.js";import"./index-CniHkqMt.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-c3RFdf0m.js";import"./index-Bya_Ui15.js";import"./CartesianChart-kEptpjHt.js";import"./chartDataContext-YVUr32e2.js";import"./CategoricalChart-DUkp-alm.js";import"./activeStyles-tsd2tFv6.js";import"./useAnimationId-CHix4qCt.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DZ_c966o.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D7m_xdxo.js";import"./tooltipContext-Bus5sfrw.js";import"./RegisterGraphicalItemId-BgCOPa3U.js";import"./ErrorBarContext-BZkeDBub.js";import"./SetGraphicalItem-CBYCujS3.js";import"./getZIndexFromUnknown-Bl6LMIVg.js";import"./useEffectiveDataKey-DVLIQZiI.js";import"./omit-BFRaw1mi.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DFA3txiV.js";import"./step-BF-v6b5j.js";import"./path-DyVhHtw_.js";import"./ActivePoints-E2x2ttJQ.js";import"./Dot-BPOiKA3s.js";import"./getRadiusAndStrokeWidthFromDot-LLnmfsQ1.js";import"./useElementOffset-B_-dcokC.js";import"./uniqBy-CvITKWaF.js";import"./iteratee-OHPjqRYA.js";import"./Cross-vdYesahO.js";import"./Sector-DOX8-R8o.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Tt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Tt as __namedExportsOrder,Lt as default};
