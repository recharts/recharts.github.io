import{R as t}from"./iframe-CGL4wxKn.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-EQaJTxBr.js";import{R as l}from"./zIndexSlice-099KjRSH.js";import{C as x}from"./ComposedChart-B3F4nto3.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-roKbAEHR.js";import{L as a}from"./Line-rl6ls2qQ.js";import{X as c}from"./XAxis-wodCK_Hv.js";import{T as g}from"./Tooltip-D0wqI5a7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-gT4vohqn.js";import"./Text-D29ZLY8y.js";import"./resolveDefaultProps-J1iMbWnO.js";import"./ZIndexLayer-CN_fYC_z.js";import"./index-BZoAXlEM.js";import"./index-CB__xCeL.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DW8rryyn.js";import"./throttle-DUUYxzVG.js";import"./axisSelectors-BMd3ki3_.js";import"./d3-scale-o5WrViM1.js";import"./CartesianAxis-DY7911f8.js";import"./Layer-Ch4A95GV.js";import"./types-Blkz6f-Q.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-CQkNy6Mm.js";import"./index-BG2Ge-ql.js";import"./index-XB5jojxJ.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-g5knetkm.js";import"./index-D3e94DhQ.js";import"./fillDefinitions-Vr_akuqj.js";import"./CartesianChart-Co-UKN43.js";import"./chartDataContext-B0uy7sqw.js";import"./CategoricalChart-rWqih0Ao.js";import"./dataEntryStyles-CVCXFzjz.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BTmZooah.js";import"./useAnimationId-D89zGJBE.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B2rQYcmX.js";import"./tooltipContext-qSO0Oja6.js";import"./ErrorBarContext-CSfn8gVg.js";import"./activeStyles-BKPzxJKn.js";import"./SetGraphicalItem-DNJWjlHF.js";import"./getZIndexFromUnknown-BiUm8eGn.js";import"./useEffectiveDataKey-SnOfofuT.js";import"./omit-DgyzUTqO.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CHOREDeS.js";import"./step-GQgXeu2E.js";import"./path-DyVhHtw_.js";import"./ActivePoints-zAqYXl3v.js";import"./Dot-Dqevxc0i.js";import"./Symbols-Bc9bgKwE.js";import"./symbol-VmBVfDDj.js";import"./getRadiusAndStrokeWidthFromDot-CxKHEBK2.js";import"./useElementOffset-mRlZC86j.js";import"./uniqBy-DDFgRhke.js";import"./iteratee-CuFGotjJ.js";import"./Cross-C2vRpyhq.js";import"./Sector-BeiTqu4h.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
