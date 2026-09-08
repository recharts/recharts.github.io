import{a as t}from"./iframe-CNkb7Pxq.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Bv4i31q_.js";import{R as l}from"./zIndexSlice-wl2-d2L7.js";import{C as x}from"./ComposedChart-C_D-eBru.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CPB1gSZi.js";import{L as a}from"./Line-gVhmKqSC.js";import{X as c}from"./XAxis-Cy627mpO.js";import{T as g}from"./Tooltip-1bb6gcko.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CgRMMdp1.js";import"./Text-DlOSKY9M.js";import"./resolveDefaultProps-LXGJzsB2.js";import"./DOMUtils-BQzfSO_G.js";import"./isWellBehavedNumber-cZPS57La.js";import"./useId-C8-4auv_.js";import"./useBackwardsCompatibleTheme-BLuzOGOd.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-V6Rl9PTE.js";import"./index-hgSNbj3_.js";import"./index-B0O4glZn.js";import"./RechartsWrapper-CE0LDB2v.js";import"./axisSelectors-D4hfpt9F.js";import"./throttle-D9QF5i1l.js";import"./d3-scale-hNSavMKY.js";import"./index-nHtRpei8.js";import"./index-BkiX-XNJ.js";import"./renderedTicksSlice-DjfT86KI.js";import"./index-D8V4aljY.js";import"./CartesianAxis-UL5z8CfQ.js";import"./Layer-BE_omtYE.js";import"./types-CyS4-dLr.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Dvu2owgZ.js";import"./chartDataContext-eHLxlpVB.js";import"./CategoricalChart-D2oZJ6cq.js";import"./AnimatedItems-Dtnyeebx.js";import"./useAnimationId-BDE8tpoz.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-ByMG9fnn.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BcbuTBin.js";import"./tooltipContext-DOQY0hKI.js";import"./RegisterGraphicalItemId-BCZSUoIT.js";import"./ErrorBarContext-D2ajplsz.js";import"./GraphicalItemClipPath-CWom5q5K.js";import"./SetGraphicalItem-ChHo-vHf.js";import"./getZIndexFromUnknown-DZwDvBwe.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DaSL7yW8.js";import"./Curve-BoDwc6R9.js";import"./step-B7Ifq5jY.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Bj-iwanM.js";import"./Dot-BOo7AQIZ.js";import"./getRadiusAndStrokeWidthFromDot-Dwt09wXZ.js";import"./useElementOffset-BfGkUEya.js";import"./uniqBy-DrBmN39C.js";import"./iteratee-C4UAKD1z.js";import"./Cross-CL_xgF11.js";import"./Sector-Bc34-crJ.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
