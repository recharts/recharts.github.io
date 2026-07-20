import{R as t}from"./iframe-CZrGjRVd.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DvRRjJMV.js";import{R as l}from"./zIndexSlice-DVGip-HY.js";import{C as x}from"./ComposedChart-BOBoYmjb.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BWIpsP2a.js";import{L as a}from"./Line-v0oLTd-W.js";import{X as c}from"./XAxis-CseioX8F.js";import{T as g}from"./Tooltip-OX_sIqSh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-Bv2Blqsa.js";import"./Layer-CQqaCNmW.js";import"./resolveDefaultProps-DJ2k4-YE.js";import"./Text-BZ2aXp_V.js";import"./DOMUtils-DGi0GryR.js";import"./isWellBehavedNumber-sGwfAa8m.js";import"./Label-D0FS6r7s.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BIAG6lUs.js";import"./index-DAuCYBcx.js";import"./index-BqYtnYZK.js";import"./types-BqsVHy7N.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-BcK_sHSr.js";import"./throttle-iaCNi1Qj.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-Db3bv7S_.js";import"./index-BNgNXemJ.js";import"./index-DxrI-k1l.js";import"./axisSelectors-DxaBLx_c.js";import"./d3-scale-uXV0YxbH.js";import"./CartesianChart-D-HZeUFd.js";import"./chartDataContext-DtAKwxQ-.js";import"./CategoricalChart-BkyPecya.js";import"./tooltipContext-DkllZ6Kt.js";import"./AnimatedItems-CMzmfQX_.js";import"./useAnimationId-Dfan-wHL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B1vqueAd.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Cxg-zL3x.js";import"./RegisterGraphicalItemId-CHZ0a46K.js";import"./ErrorBarContext-putfb1U3.js";import"./GraphicalItemClipPath-CrMwIhJh.js";import"./SetGraphicalItem-DKI6WvVx.js";import"./getZIndexFromUnknown-gM7mqro_.js";import"./graphicalItemSelectors-BMQ0ncsa.js";import"./Curve-DmlyDZC5.js";import"./step-1n_WS_bQ.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DzdtVF-l.js";import"./Dot-B_n5UQyN.js";import"./getRadiusAndStrokeWidthFromDot-DAppAzWA.js";import"./useElementOffset-DOoW8cLw.js";import"./uniqBy-BSSdRogv.js";import"./iteratee-zsLWQ0iB.js";import"./Cross-W8LAXQo4.js";import"./Sector-B_S4VSs-.js";const Yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const vt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,vt as __namedExportsOrder,Yt as default};
