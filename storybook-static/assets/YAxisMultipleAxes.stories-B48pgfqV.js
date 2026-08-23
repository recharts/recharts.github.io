import{a as t}from"./iframe-D_Sr4lJG.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CK9b0jPJ.js";import{R as l}from"./zIndexSlice-D0QIWFDJ.js";import{C as x}from"./ComposedChart-ZURsynXK.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CCLdWIC_.js";import{L as a}from"./Line-CUH4TpmU.js";import{X as c}from"./XAxis-CiVYw4TJ.js";import{T as g}from"./Tooltip-D6jlTmCI.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CeC9waPr.js";import"./Text-DkNPAJgx.js";import"./resolveDefaultProps-BKaajls5.js";import"./DOMUtils-zvxYmMZo.js";import"./isWellBehavedNumber-Dv4TPBJ2.js";import"./useId-Dl8Yfg4u.js";import"./useBackwardsCompatibleTheme-Kv-Z1TIM.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cx1K1yql.js";import"./index-DzVo4Gjf.js";import"./index-Bx0q42bk.js";import"./RechartsWrapper-BTyxoPDx.js";import"./index-CqdW1tHD.js";import"./index-DYQHTRz1.js";import"./throttle-DGVbE07Y.js";import"./axisSelectors-B4F-1YW3.js";import"./d3-scale-DfRtt2DS.js";import"./renderedTicksSlice-DGuDkWT4.js";import"./CartesianAxis-B-dcY2MJ.js";import"./Layer-D9Oc_uBt.js";import"./types-D5gXUhG3.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-JxmHMprN.js";import"./chartDataContext-AwrwRhEc.js";import"./CategoricalChart-DKW5S15G.js";import"./AnimatedItems-DooKJjtX.js";import"./useAnimationId-KZvr8oE4.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CNEw1Bzs.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CYI-DMZT.js";import"./tooltipContext-RZhMVhIV.js";import"./RegisterGraphicalItemId-DO9NFESU.js";import"./ErrorBarContext-pr_CmNON.js";import"./GraphicalItemClipPath-BKqVnbRS.js";import"./SetGraphicalItem-DDVudLdC.js";import"./getZIndexFromUnknown-DFzjspXH.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CpcZwHhR.js";import"./Curve-5OWOJy9s.js";import"./step-BEJyHAO7.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BSKOHmnc.js";import"./Dot-yV7k0mxe.js";import"./getRadiusAndStrokeWidthFromDot-DctFTReD.js";import"./useElementOffset-CuHOZIfT.js";import"./uniqBy-SCEa_4Mg.js";import"./iteratee-DHY7e-mB.js";import"./Cross-C0Kswt5F.js";import"./Sector-CpQIQdBs.js";const Mt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Rt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
