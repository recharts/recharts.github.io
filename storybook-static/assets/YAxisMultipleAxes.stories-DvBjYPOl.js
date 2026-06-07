import{R as t}from"./iframe-CIqcR0nr.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-Cp6hJTBs.js";import{R as l}from"./zIndexSlice-BaZcNNNO.js";import{C as x}from"./ComposedChart-bqMlW8-b.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BJLp41mc.js";import{L as a}from"./Line-BX67Nlm1.js";import{X as c}from"./XAxis-sUTGKqnh.js";import{T as g}from"./Tooltip-CAkkWeYW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CuhoYgBd.js";import"./CartesianAxis-wzAvkxKf.js";import"./Layer-Cz--vJfn.js";import"./resolveDefaultProps-X_RPaIii.js";import"./Text-CimnMCMD.js";import"./DOMUtils-DMPXj1nB.js";import"./isWellBehavedNumber-CN_oQGvc.js";import"./Label-CuY-JOss.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B9KPNn2Z.js";import"./index-CI5kewFp.js";import"./index-D3_7IQAj.js";import"./types-3DMlx_O9.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-uyZ8N1qc.js";import"./immer-DOlCD6_E.js";import"./RechartsWrapper-CO7Bj1Ew.js";import"./index-BRQXzpqS.js";import"./index-iWp3ygHn.js";import"./axisSelectors-Dp0MorEj.js";import"./d3-scale-BVoLe-e3.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BiFR7vHR.js";import"./chartDataContext-BkIJbLAm.js";import"./CategoricalChart-OQdWBIBS.js";import"./tooltipContext-ORHnKUld.js";import"./AnimatedItems-5cW9jO0l.js";import"./useAnimationId-BJaGTs_s.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BMn1e7Xa.js";import"./ActiveShapeUtils-BLEsVfwW.js";import"./RegisterGraphicalItemId-BxGDByrp.js";import"./ErrorBarContext-D7ZmPrb-.js";import"./GraphicalItemClipPath-CMCMKENx.js";import"./SetGraphicalItem-C8JcvXzc.js";import"./getZIndexFromUnknown-2HE1KQzT.js";import"./graphicalItemSelectors-_qDBExF4.js";import"./Curve-DrcpD24k.js";import"./step-DBJepXtz.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B5L26l-l.js";import"./Dot-C6Y9kE6a.js";import"./getRadiusAndStrokeWidthFromDot-D2ZfklZg.js";import"./useElementOffset-DG3jpNvQ.js";import"./uniqBy-BGYajFOV.js";import"./iteratee-DoUmNYIo.js";import"./Cross-CEVyxNrn.js";import"./Sector-ILL068cZ.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
