import{R as t}from"./iframe-waGCAeMO.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-Bp6_7tMg.js";import{R as l}from"./zIndexSlice-Bs9eWJkZ.js";import{C as x}from"./ComposedChart-C-dH4vpB.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BG77Ue60.js";import{L as a}from"./Line-DJadcpEB.js";import{X as c}from"./XAxis-C97Th9HK.js";import{T as g}from"./Tooltip-the880DM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Chhp1CRe.js";import"./Text-C-WU5iwS.js";import"./resolveDefaultProps-Dpi9F_1z.js";import"./ZIndexLayer-B2QwwaI-.js";import"./index-CcRKR-Wz.js";import"./index-DUwJtu9Y.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DtiraoLM.js";import"./throttle-CoYevXVP.js";import"./axisSelectors-BpNK-g3S.js";import"./d3-scale-FqfjaXEu.js";import"./CartesianAxis-BDzG2Gtt.js";import"./Layer-dmB1mICY.js";import"./types-DrCFt1uv.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-ClDU73ld.js";import"./index-kB8F1Br5.js";import"./index-3B7lt2Ve.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DrhKOT3w.js";import"./index-11RgyOoZ.js";import"./fillDefinitions-DkO2tIQI.js";import"./CartesianChart-7iyfeH7l.js";import"./chartDataContext-BbqISvQG.js";import"./CategoricalChart-D2Hb9hNl.js";import"./dataEntryStyles-DwD17VpV.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-W9w0JczW.js";import"./useAnimationId-DGRCx4ie.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BuFZhuT8.js";import"./tooltipContext-DOcO8H8O.js";import"./ErrorBarContext-DLQUfAIY.js";import"./activeStyles-Db3JHrE0.js";import"./SetGraphicalItem-DY5DQdLd.js";import"./getZIndexFromUnknown-Bai-ov13.js";import"./useEffectiveDataKey-DONRPZmA.js";import"./omit-Ddtq8Spp.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-D4lP154T.js";import"./Curve-Cb7BkQkF.js";import"./step-CvjzszA2.js";import"./path-DyVhHtw_.js";import"./ActivePoints-SMrH9LpN.js";import"./Dot-KwlPPybH.js";import"./Symbols-sTKgXRyZ.js";import"./symbol-CRbcfw6A.js";import"./useElementOffset-DFWzqZEl.js";import"./uniqBy-CqnsSxDI.js";import"./iteratee-DPicYX8A.js";import"./Cross-CgvdF31W.js";import"./Sector-C6LMEFyk.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Lt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
