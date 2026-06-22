import{R as t}from"./iframe-Clh6Am28.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-Bbuu0E_L.js";import{R as l}from"./zIndexSlice-C8WH1sbl.js";import{C as x}from"./ComposedChart-BZO5EA81.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C2Wk1-B8.js";import{L as a}from"./Line-DpvpjAPB.js";import{X as c}from"./XAxis-CX5kJZWB.js";import{T as g}from"./Tooltip-DcVhVaK_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-ReXw4Xs6.js";import"./CartesianAxis-EoQ_2pVo.js";import"./Layer-rOqvObKk.js";import"./resolveDefaultProps-Cp4jCd2q.js";import"./Text-X5OcHqR4.js";import"./DOMUtils-CtdcYe6Z.js";import"./isWellBehavedNumber-BTdz8jY9.js";import"./Label-gvCBOhLE.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-4xKONL83.js";import"./index-mbhNu375.js";import"./index-D983Ac__.js";import"./types-Clw2FxQC.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice--OmlTIq-.js";import"./immer-CCKY-2O_.js";import"./RechartsWrapper-kLRmp8Nc.js";import"./index-B67Qu5hK.js";import"./index-81KY_DK_.js";import"./axisSelectors-CtcLf7W7.js";import"./d3-scale-BSnqKxuH.js";import"./CartesianChart-DYzbJdNk.js";import"./chartDataContext-BpoRQBsX.js";import"./CategoricalChart-ISWmGPOG.js";import"./tooltipContext-CXBV-r4I.js";import"./AnimatedItems-B05rhmS4.js";import"./useAnimationId-CWbLQsSM.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CZG00UlM.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BsSwQSYp.js";import"./RegisterGraphicalItemId-C0MecWm_.js";import"./ErrorBarContext-DAn4MkTm.js";import"./GraphicalItemClipPath-Ngq7bur3.js";import"./SetGraphicalItem-BUpAV2uu.js";import"./getZIndexFromUnknown-dRBMa0Q1.js";import"./graphicalItemSelectors-CCzQJwwH.js";import"./Curve-CCuEPsAe.js";import"./step-Dyxzv1f8.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DadMhNWA.js";import"./Dot-CTX7NV8r.js";import"./getRadiusAndStrokeWidthFromDot-BP39ATEv.js";import"./useElementOffset-BidkkjV3.js";import"./uniqBy-BKbVvzyr.js";import"./iteratee-CWb0-VE6.js";import"./Cross-tf1sjMsM.js";import"./Sector-Z4utyPCe.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
