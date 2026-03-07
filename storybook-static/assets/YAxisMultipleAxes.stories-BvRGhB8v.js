import{e as t}from"./iframe-BRu_qZg1.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwQ9PO5l.js";import{Y as r}from"./YAxis-BW9q8bD-.js";import{R as l}from"./arrayEqualityCheck-BgwbYKtC.js";import{C as x}from"./ComposedChart-BejM8Hgg.js";import{B as o}from"./Bar-1dCBYxG2.js";import{L as a}from"./Line-BQ93j6Ys.js";import{X as c}from"./XAxis-CkACgIfp.js";import{T as A}from"./Tooltip-CmHJro1j.js";import{R as g}from"./RechartsHookInspector-CJy-wMRv.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-D1FaLS9g.js";import"./Layer-BK1KTr5e.js";import"./resolveDefaultProps-ClDGSYA8.js";import"./Text-CZ6mhO2l.js";import"./DOMUtils-Np4d91u5.js";import"./Label-PVHJRfQa.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C8D4smXi.js";import"./zIndexSlice-CjcwtRul.js";import"./immer-CiIZXnz-.js";import"./types-CV4LMBiy.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-XQiDw47v.js";import"./hooks-cMPGG-ti.js";import"./axisSelectors-WgiG_2zA.js";import"./d3-scale-DgD4kZyM.js";import"./RechartsWrapper-B9gb15RL.js";import"./index-DYVbWT0W.js";import"./CartesianChart-DNVXg1S9.js";import"./chartDataContext-BYCMtEPQ.js";import"./CategoricalChart-CRbty2Pg.js";import"./tooltipContext-CX0tBQ1W.js";import"./ReactUtils-gnwCD4Om.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-jyCby69N.js";import"./isPlainObject-Dl8lI7a1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C99z7Ziu.js";import"./useAnimationId-D8a-5J-X.js";import"./Trapezoid-CJsPOYXY.js";import"./Sector-7rMGIqOV.js";import"./Symbols-DM4rdUCn.js";import"./symbol-D-gvh6cA.js";import"./step-XF9-athh.js";import"./Curve-CSGMMXpz.js";import"./RegisterGraphicalItemId-KDJ0wyU8.js";import"./ErrorBarContext-CfL1_1JT.js";import"./GraphicalItemClipPath-rMExk2wU.js";import"./SetGraphicalItem-DZJju-u_.js";import"./getZIndexFromUnknown-CP3QIbNe.js";import"./graphicalItemSelectors-C1DBQX2m.js";import"./ActivePoints-lX6lnj3q.js";import"./Dot-DbWS2m0E.js";import"./getRadiusAndStrokeWidthFromDot-CXiKui9m.js";import"./useElementOffset-DDNpUSNQ.js";import"./uniqBy-L6IG3ASA.js";import"./iteratee-CIdgG0p2.js";import"./Cross-DvVkkamE.js";import"./index-CUWwfEzD.js";import"./ChartSizeDimensions-DNlI3sC4.js";import"./OffsetShower-Cm8zLz0R.js";import"./PlotAreaShower-Bj1zpgLw.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
              <RechartsHookInspector />
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
}`,...(p=(s=i.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Tt=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,Tt as __namedExportsOrder,kt as default};
