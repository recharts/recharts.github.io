import{R as t}from"./iframe-jkWlGRao.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Df9BpDFL.js";import{R as l}from"./zIndexSlice-BJ_azL3V.js";import{C as x}from"./ComposedChart-B8s0ij_q.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-B0aSYe8E.js";import{L as a}from"./Line-DGiR6I26.js";import{X as c}from"./XAxis-B6q08DjL.js";import{T as g}from"./Tooltip-DbtTA0dS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-C3QhHNfQ.js";import"./Text-CsCVaUmy.js";import"./resolveDefaultProps-BJCkAT-c.js";import"./pageBackground-B7N8_bCe.js";import"./ZIndexLayer-Cz3uOrDa.js";import"./index-CafydseE.js";import"./index-l6IDK4X2.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-vXDHLkfy.js";import"./throttle-BclcIM3t.js";import"./axisSelectors-B57c623a.js";import"./d3-scale-B7YXqmgC.js";import"./CartesianAxis-vLbE4lIP.js";import"./Layer-DGNDN2U_.js";import"./types-BwHsgyny.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-MrcmxqRq.js";import"./index-CT6JOO-H.js";import"./index-lkQeFUlC.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CYIxj0Xh.js";import"./index-BIDLCapd.js";import"./CartesianChart-DNa8wuZh.js";import"./ZIndexPortal-PvuD5_Md.js";import"./CategoricalChart-BIz6y0X4.js";import"./LabelList-BN7i6-QW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CTBIyY9m.js";import"./useAnimationId-CAUjhf76.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-KQXKVatm.js";import"./tooltipContext-Coe7V1ij.js";import"./dataEntryStyles-ZVub37-6.js";import"./ErrorBarContext-CbF4zTiN.js";import"./activeStyles-EBU2roz0.js";import"./SetGraphicalItem-BoktD6a2.js";import"./getZIndexFromUnknown-hyD2UNCX.js";import"./useEffectiveDataKey-CJQQkbyt.js";import"./omit-V3INHSAr.js";import"./isArguments-yB-y1yaH.js";import"./Curve-Ch6LAljQ.js";import"./step-CscB7pF3.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DFqnjh3O.js";import"./Dot-xzrAS9lw.js";import"./Symbols-wGnZNd4F.js";import"./symbol-BOEnk89t.js";import"./getRadiusAndStrokeWidthFromDot-Shmwq5gJ.js";import"./useElementOffset-CZ3cyGKX.js";import"./uniqBy-C6LXGOxF.js";import"./iteratee-kDWc3wPx.js";import"./Cross-ol7G7syJ.js";import"./Sector-Mnux8RH-.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
