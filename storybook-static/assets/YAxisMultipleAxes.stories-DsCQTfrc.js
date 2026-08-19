import{R as t}from"./iframe-W15_yS8y.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CxEXFC67.js";import{R as l}from"./zIndexSlice-KjfXmz6K.js";import{C as x}from"./ComposedChart-DruFp6Y2.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-JnvSsJKH.js";import{L as a}from"./Line-DKuxCNpr.js";import{X as c}from"./XAxis-8Au-a6fB.js";import{T as g}from"./Tooltip-C7MXsF6u.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-v2JLpAzt.js";import"./Text-BvMd1KWD.js";import"./resolveDefaultProps-PB6tg1uE.js";import"./DOMUtils-Mq767cy3.js";import"./isWellBehavedNumber-J_RQo-Gx.js";import"./useBackwardsCompatibleTheme-CVh47B6N.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DRPG0BG4.js";import"./index-DJoXYd_8.js";import"./index-C4zsw-i5.js";import"./RechartsWrapper-B53AJGL_.js";import"./index-Df7Hn4Pb.js";import"./index-CzfOThSk.js";import"./throttle-Dvj2OlWT.js";import"./axisSelectors-D1dvC9r7.js";import"./d3-scale-DaTRSSxE.js";import"./renderedTicksSlice--xVLPDDU.js";import"./CartesianAxis-lMcf7VGx.js";import"./Layer-mEuTxfDi.js";import"./types-DbtskFGe.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CGOzuY2G.js";import"./chartDataContext-CMgd62s5.js";import"./CategoricalChart-DCYct-dD.js";import"./AnimatedItems-CZGuNW2p.js";import"./useAnimationId-B9um5jhW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BBPyqCCf.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CzKUxwm_.js";import"./tooltipContext-Dhbi8ip2.js";import"./RegisterGraphicalItemId-qtKCK3s0.js";import"./ErrorBarContext-C5-u35E5.js";import"./GraphicalItemClipPath-DHit8l0N.js";import"./SetGraphicalItem-BYTBa9Xv.js";import"./getZIndexFromUnknown-DJTrSOrY.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-E6qKB9xL.js";import"./Curve-CZbGXK3M.js";import"./step-DFacBfaf.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CPoOsFOl.js";import"./Dot-BO0lFYaH.js";import"./getRadiusAndStrokeWidthFromDot-DeK9DJP1.js";import"./useElementOffset-D060Lqzv.js";import"./uniqBy-CHYStU7Q.js";import"./iteratee-3tM74Wvb.js";import"./Cross-BQtTAWBJ.js";import"./Sector-CknlVr-L.js";const Kt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Mt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Mt as __namedExportsOrder,Kt as default};
