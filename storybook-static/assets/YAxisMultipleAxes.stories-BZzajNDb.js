import{a as t}from"./iframe-BPQD5v1C.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DB1Rqz7t.js";import{R as l}from"./zIndexSlice-DfAJCemw.js";import{C as x}from"./ComposedChart-X06hY2YO.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D8PVLJDr.js";import{L as a}from"./Line-COu1GzzV.js";import{X as c}from"./XAxis-Tde5CSPK.js";import{T as g}from"./Tooltip-DUW2EXoj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-ZHQGm3zg.js";import"./Text-BGkNki-C.js";import"./resolveDefaultProps-upxpdF4p.js";import"./pageBackground-D3c52TtU.js";import"./isWellBehavedNumber-C9SB8Pzn.js";import"./useId-BM-r51MU.js";import"./useBackwardsCompatibleTheme-CpAd0K8h.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CyIARuTz.js";import"./index-Tuf2nq6s.js";import"./index-CXovuven.js";import"./dataEntryStyles-ClqDXIzp.js";import"./axisSelectors-CGRWr5-t.js";import"./throttle-DC1LNmjU.js";import"./d3-scale-BcAkS-dE.js";import"./CartesianAxis-kXg3v2M0.js";import"./Layer-B7QJBZyG.js";import"./types-BZME1xI7.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-Bnytbutp.js";import"./index-yHndqaau.js";import"./index-BNGNsbfJ.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Cu7qj_jR.js";import"./index-NpnztBAt.js";import"./CartesianChart-KMtmBeRo.js";import"./chartDataContext-BEETkhZS.js";import"./CategoricalChart-0gTJFCdb.js";import"./activeStyles-BpdD72zS.js";import"./useAnimationId-D3CbYaCo.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dvfx4mjp.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CD8s1oUL.js";import"./tooltipContext-89q0ReT3.js";import"./RegisterGraphicalItemId-C_N6zcJ6.js";import"./ErrorBarContext-Bd0khpbf.js";import"./SetGraphicalItem-DTtwRFlr.js";import"./getZIndexFromUnknown-CRPi8KYR.js";import"./useEffectiveDataKey-fbFyI37i.js";import"./omit-Ci_YbqS7.js";import"./isArguments-yB-y1yaH.js";import"./Curve-1sBQTzGW.js";import"./step-DY16rTOH.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DRTN0ggX.js";import"./Dot-BcjnvPbe.js";import"./getRadiusAndStrokeWidthFromDot-DE7pHRh0.js";import"./useElementOffset-DZ6cu7_x.js";import"./uniqBy-SNVjjllr.js";import"./iteratee-DN6PB4Ph.js";import"./Cross-CMzu5cot.js";import"./Sector-D1oJu_pB.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
