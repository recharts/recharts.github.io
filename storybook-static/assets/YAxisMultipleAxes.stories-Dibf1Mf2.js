import{a as t}from"./iframe-SuqF0IOU.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CUvLYKI6.js";import{R as l}from"./zIndexSlice-DfamN9Zs.js";import{C as x}from"./ComposedChart-BtkawvAi.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Dx1JhkKq.js";import{L as a}from"./Line-BjrkBSD6.js";import{X as c}from"./XAxis-DR2rtjC5.js";import{T as g}from"./Tooltip-CA2lSlIq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-9O6_T9C4.js";import"./Text-UuMUK1_u.js";import"./resolveDefaultProps-7DzpjnqO.js";import"./DOMUtils-DsJOOh9b.js";import"./isWellBehavedNumber-DJK-MsfJ.js";import"./useId-CsqHk6Y-.js";import"./useBackwardsCompatibleTheme-C6-DbdWl.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BN_mfTvc.js";import"./index-DY-qAKzO.js";import"./index-iK0jM_n6.js";import"./RechartsWrapper-Bg2tG11C.js";import"./axisSelectors-DbgUQ8Ul.js";import"./throttle-D6-FoWPM.js";import"./d3-scale-DnD8-5rl.js";import"./index-DLroYRR9.js";import"./index-VBcGpDGq.js";import"./renderedTicksSlice-DomOKpq5.js";import"./index-DHZGQ52F.js";import"./CartesianAxis-Bvk6yXFf.js";import"./Layer-CeZWaGzt.js";import"./types-CS_OGYEB.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Cji0pvqd.js";import"./chartDataContext-B0QyEg6f.js";import"./CategoricalChart-D2xX8P6u.js";import"./AnimatedItems-DXL71NvC.js";import"./useAnimationId-ol_mxPID.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BY0JMHo5.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DYWxkXZ9.js";import"./tooltipContext-C3LWRUAx.js";import"./RegisterGraphicalItemId-BaNEX7Pr.js";import"./ErrorBarContext-BJEyAykc.js";import"./GraphicalItemClipPath-TmHiHpN1.js";import"./SetGraphicalItem-C7X7ybgb.js";import"./getZIndexFromUnknown-B5NA7H4K.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BUySm8JS.js";import"./Curve-E3qca46q.js";import"./step-Crr8VZH2.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BPtrfnyz.js";import"./Dot-Bait8-xr.js";import"./getRadiusAndStrokeWidthFromDot-Di11GS2z.js";import"./useElementOffset-C83rORx-.js";import"./uniqBy-BLInEi1g.js";import"./iteratee-DO-aH00D.js";import"./Cross-Du3GMiU6.js";import"./Sector-BRdwZ5XO.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
