import{R as t}from"./iframe-Czzk5Bx-.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-DskmDTW_.js";import{R as l}from"./zIndexSlice-CcZCAOP2.js";import{C as x}from"./ComposedChart-BWfmB2id.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CYp4sOkh.js";import{L as a}from"./Line-jtIGshLA.js";import{X as c}from"./XAxis-DWUu3518.js";import{T as g}from"./Tooltip-D_YzDKbO.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CoDIIawi.js";import"./Text-CSorP4yu.js";import"./resolveDefaultProps-Csc694qB.js";import"./ZIndexLayer-DISaA8MD.js";import"./index-CtnBEbb_.js";import"./index-CElqLkJS.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Bgc5VpYB.js";import"./throttle-Dlw7_zhK.js";import"./axisSelectors-BthV4RsX.js";import"./d3-scale-CS0QJ-EZ.js";import"./CartesianAxis-5U6hsfI6.js";import"./Layer-CarPpKFV.js";import"./types-Bykt0Hlw.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-BwJ2p4Mi.js";import"./index-CAks9lDH.js";import"./index-yeT-45bY.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C5Ex_ZCH.js";import"./index-CsxmvEat.js";import"./fillDefinitions-DaR2TDo1.js";import"./CartesianChart-D3FUkn-t.js";import"./chartDataContext--mSdRmgw.js";import"./CategoricalChart-a1Xr9UIu.js";import"./dataEntryStyles-C8IdewjD.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B6IFm27t.js";import"./useAnimationId-BMmeHowj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BDX2WB3N.js";import"./tooltipContext-Ds2DbmQs.js";import"./ErrorBarContext-BTwK65Em.js";import"./activeStyles-Dd2x1Ur1.js";import"./SetGraphicalItem-DZqA_DJ9.js";import"./getZIndexFromUnknown-Do8dm2Cc.js";import"./useEffectiveDataKey-BCok4F6X.js";import"./omit-8N5Y9wKt.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-BOcadJ27.js";import"./Curve-DNAnmcp5.js";import"./step-C5vJ1U24.js";import"./path-DyVhHtw_.js";import"./ActivePoints-7NJ9DiE-.js";import"./Dot-qyx0vbCn.js";import"./Symbols-DOiO9HXo.js";import"./symbol-DOUGW8Ut.js";import"./useElementOffset-zxdJRS0e.js";import"./uniqBy-CjJbYxjU.js";import"./iteratee-CC6hZy84.js";import"./Cross-5c-8ZAhj.js";import"./Sector-D1PeNtRJ.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
