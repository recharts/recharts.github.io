import{a as t}from"./iframe-_HfAVjpf.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BoV0AlEf.js";import{R as l}from"./zIndexSlice-BBpCjLLT.js";import{C as x}from"./ComposedChart-CDQm-nCO.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CFQfPVrB.js";import{L as a}from"./Line-Ds-1cdF_.js";import{X as c}from"./XAxis-BPfOL0q9.js";import{T as g}from"./Tooltip-CLDh_MwF.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CR54GT5X.js";import"./Text-WmpuDBGa.js";import"./resolveDefaultProps-D7IrzSl6.js";import"./pageBackground-CfQpba4h.js";import"./isWellBehavedNumber-DviO5hHm.js";import"./useId-B3zQHx_-.js";import"./useBackwardsCompatibleTheme-BJsCYBM6.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BrUuampD.js";import"./index-Cs9o5rrz.js";import"./index-CIyvwLXB.js";import"./axisSelectors-BggHFTDq.js";import"./throttle-DIGsG3tn.js";import"./d3-scale-B5oQCS6M.js";import"./CartesianAxis-Chrpiu6A.js";import"./Layer-CacweoVl.js";import"./types-BGnPJWtT.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-BNJCO30A.js";import"./index-ATsp3Ecu.js";import"./index-uZk8L8Al.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-B3bcu809.js";import"./index-CIMOmY0A.js";import"./CartesianChart-De3rsgvn.js";import"./chartDataContext-Dyk7Yokq.js";import"./CategoricalChart-a-VUE4A0.js";import"./activeStyles-BdpGsFup.js";import"./useAnimationId-BhBKKO0p.js";import"./dataEntryStyles-Ucx7Hmoa.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cur1iMCQ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-4DLJyt96.js";import"./tooltipContext-DeJX041B.js";import"./ErrorBarContext-BDsk2xtE.js";import"./GraphicalItemClipPath-C1A7eGe6.js";import"./SetGraphicalItem-Cj-t7_ZW.js";import"./getZIndexFromUnknown-BbWs-CBc.js";import"./useEffectiveDataKey-C_P0BrSn.js";import"./Curve-DpQ41Ei2.js";import"./step-Max-Kn08.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BDWzEukD.js";import"./Dot-fMnVn2BH.js";import"./getRadiusAndStrokeWidthFromDot-BqM4XHNM.js";import"./useElementOffset-B927Oy_l.js";import"./uniqBy-TLIumvzr.js";import"./iteratee-CTU_33At.js";import"./Cross-BzOjiYoL.js";import"./Sector-BC_dkoX6.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Rt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
