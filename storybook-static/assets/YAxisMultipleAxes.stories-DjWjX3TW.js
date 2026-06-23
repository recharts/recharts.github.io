import{R as t}from"./iframe-pl42v7Eu.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-CTEyBNt3.js";import{R as l}from"./zIndexSlice-D6Ury5DQ.js";import{C as x}from"./ComposedChart-Bj059aV9.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-gxMR1ANn.js";import{L as a}from"./Line-BLy4f1Fi.js";import{X as c}from"./XAxis-0siPSpiK.js";import{T as g}from"./Tooltip-DSTzYmHX.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Ci1Zslo5.js";import"./CartesianAxis-Dyaa3QOt.js";import"./Layer-DIETCOs-.js";import"./resolveDefaultProps-BgT3I9Pa.js";import"./Text-DHqN6Wmv.js";import"./DOMUtils-C0435NEl.js";import"./isWellBehavedNumber-B6cHM4DS.js";import"./Label-jH0IUTIN.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DHOvoudh.js";import"./index-Df70QOpj.js";import"./index-ntLeohj2.js";import"./types-Cax0x9Pi.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-nJaW__V7.js";import"./immer-C_PxOxT8.js";import"./RechartsWrapper-ByLHuOcy.js";import"./index-BTDreE9O.js";import"./index-Cmb4UkZ_.js";import"./axisSelectors-49otWNoQ.js";import"./d3-scale-EDGtIYyd.js";import"./CartesianChart-CkSibwuY.js";import"./chartDataContext-BUPOQjbb.js";import"./CategoricalChart-BDx0yEeS.js";import"./tooltipContext-DiL1jzmy.js";import"./AnimatedItems-wt0_sn45.js";import"./useAnimationId-bxLMfI7c.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dhsi5AWp.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DL8AZGaA.js";import"./RegisterGraphicalItemId-Rj2Lqe9e.js";import"./ErrorBarContext-BQo0CyvO.js";import"./GraphicalItemClipPath-CviR7UKP.js";import"./SetGraphicalItem-BX03rWwK.js";import"./getZIndexFromUnknown-JdepF8ak.js";import"./graphicalItemSelectors-yDFIsm5P.js";import"./Curve-V8Cs5yUz.js";import"./step-BQEtcvlA.js";import"./path-DyVhHtw_.js";import"./ActivePoints-sxoM3gYg.js";import"./Dot-BMK0KkKw.js";import"./getRadiusAndStrokeWidthFromDot-5IlnILBr.js";import"./useElementOffset-Btpwl7wC.js";import"./uniqBy-DtZ7esPP.js";import"./iteratee-OzssNQ-a.js";import"./Cross-CJ4qchKv.js";import"./Sector-BMZf45Ok.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
