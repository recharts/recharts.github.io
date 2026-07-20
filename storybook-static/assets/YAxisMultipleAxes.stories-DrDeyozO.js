import{R as t}from"./iframe-CYE_KjLp.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DWbbwN0w.js";import{R as l}from"./zIndexSlice-BJ5AXs-O.js";import{C as x}from"./ComposedChart-FkotVeZi.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-47vseenK.js";import{L as a}from"./Line-fP0RojnX.js";import{X as c}from"./XAxis-CSEJquda.js";import{T as g}from"./Tooltip-CA-9nIiI.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-9Uyc6PiW.js";import"./Layer-BAAO02Y6.js";import"./resolveDefaultProps-Bfx-m_zh.js";import"./Text-D9p9m1qq.js";import"./DOMUtils-DNa7oSWn.js";import"./isWellBehavedNumber-D2iFNJG8.js";import"./Label-DungM5aU.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cs3N_7G3.js";import"./index-Ph9m1nQR.js";import"./index-BT3sj--6.js";import"./types-Bh5it62Q.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-Bk_hKtUF.js";import"./throttle-CMwKm87I.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-8_njvAZI.js";import"./index-CwiYvwQ-.js";import"./index-CN526hDZ.js";import"./axisSelectors-Cz15TeqU.js";import"./d3-scale-BYal7h8i.js";import"./CartesianChart-g8MVdMo8.js";import"./chartDataContext-3J9QrXTl.js";import"./CategoricalChart-DxSK9VeV.js";import"./tooltipContext-Bs0EcAMz.js";import"./AnimatedItems-DDp5Wq7I.js";import"./useAnimationId-D2RJw3gt.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B6bKXxl8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-8xIbBFmr.js";import"./RegisterGraphicalItemId-BVUvorB4.js";import"./ErrorBarContext-C6lKsYq3.js";import"./GraphicalItemClipPath-DSlcdUco.js";import"./SetGraphicalItem-DsAOjH_V.js";import"./getZIndexFromUnknown-BsuskYxw.js";import"./graphicalItemSelectors-FraeXnF0.js";import"./Curve-DOUq4MA6.js";import"./step-CrVHI12K.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B2OdHoBR.js";import"./Dot-CNeFMePA.js";import"./getRadiusAndStrokeWidthFromDot-eF6yQmlC.js";import"./useElementOffset-Bd-GUmxf.js";import"./uniqBy-Dvg3CN9x.js";import"./iteratee-olANGOHV.js";import"./Cross-9R2MLVqE.js";import"./Sector-Dtn8lnsy.js";const Yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
