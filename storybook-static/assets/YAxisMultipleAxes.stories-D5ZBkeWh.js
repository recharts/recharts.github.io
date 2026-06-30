import{R as t}from"./iframe-CysaVPuT.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-hZ4kGdBq.js";import{R as l}from"./zIndexSlice-CBspyTeT.js";import{C as x}from"./ComposedChart-9ef0ZM8L.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BOeSX_EU.js";import{L as a}from"./Line-ez-HBiNN.js";import{X as c}from"./XAxis-BHTWnpmK.js";import{T as g}from"./Tooltip-DULMtNKm.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Dv3cK-ON.js";import"./CartesianAxis-ACLpIvis.js";import"./Layer-DQgbcZ6W.js";import"./resolveDefaultProps-CB9Bmy8P.js";import"./Text-DqT5jcn2.js";import"./DOMUtils-z1JZhy6H.js";import"./isWellBehavedNumber-CHReb6Hq.js";import"./Label-B_m_1QPA.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C6PjgPWA.js";import"./index-BoQpP3ng.js";import"./index-C8sovufb.js";import"./types-DWuPiLas.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-L6Kj9uMm.js";import"./throttle-BijqxQd6.js";import"./RechartsWrapper-CXNQztOV.js";import"./index-ClhA1x-k.js";import"./index-CIm0M9H5.js";import"./axisSelectors-CybQsixZ.js";import"./d3-scale-BWFUWIRC.js";import"./CartesianChart-Dlco-df9.js";import"./chartDataContext-BsGd8oTW.js";import"./CategoricalChart-B4xuyyeZ.js";import"./tooltipContext-CzV606mp.js";import"./AnimatedItems-HWCD5qdq.js";import"./useAnimationId-XV22nS6k.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-V2sNlqNc.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-HeGPuRiV.js";import"./RegisterGraphicalItemId-BIn5Riid.js";import"./ErrorBarContext-CYyCl8MN.js";import"./GraphicalItemClipPath-DMny06t1.js";import"./SetGraphicalItem-ihbnCYD8.js";import"./getZIndexFromUnknown-DeY8ZrPG.js";import"./graphicalItemSelectors-C4W5Yao6.js";import"./Curve-DVkbv2J8.js";import"./step-vxR68qu5.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CQLYJKIJ.js";import"./Dot-dmuSDw2U.js";import"./getRadiusAndStrokeWidthFromDot-DDSmqaVx.js";import"./useElementOffset-B-396utJ.js";import"./uniqBy-BJRjFRzK.js";import"./iteratee-DuqmaN7B.js";import"./Cross-DqrQduZ1.js";import"./Sector-Dozb6yk1.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Yt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Yt as __namedExportsOrder,Ct as default};
