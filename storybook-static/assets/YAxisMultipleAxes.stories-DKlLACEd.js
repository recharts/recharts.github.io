import{e as t}from"./iframe-BWK9ES1u.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwQ9PO5l.js";import{Y as r}from"./YAxis--KyRCAkW.js";import{R as l}from"./arrayEqualityCheck-C3hQ_dNx.js";import{C as x}from"./ComposedChart-Dkw93O4i.js";import{B as o}from"./Bar-BlgHTcej.js";import{L as a}from"./Line-WEZT4w3U.js";import{X as c}from"./XAxis-DPIaAqKp.js";import{T as A}from"./Tooltip-BPgkSb2x.js";import{R as g}from"./RechartsHookInspector-PHAVE2qS.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DXQ2RzcP.js";import"./Layer-FfNANwFp.js";import"./resolveDefaultProps-UiVGC4WG.js";import"./Text-D_AFYo3_.js";import"./DOMUtils-BiksdwSe.js";import"./Label-CkGBtdJT.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-bCgYEHqC.js";import"./zIndexSlice-D32FYtu3.js";import"./immer-H-Wjh2uu.js";import"./types-BDXHojhp.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DeqeruMc.js";import"./hooks-7NwdUe8t.js";import"./axisSelectors-_XyMcvnR.js";import"./d3-scale-BLK5VF-M.js";import"./RechartsWrapper-BOGHGYF3.js";import"./index-CFdRl6ey.js";import"./CartesianChart-CW6-YABt.js";import"./chartDataContext-cUJ3hXxI.js";import"./CategoricalChart-BCO7gYoN.js";import"./tooltipContext-Dv9lVTn5.js";import"./ReactUtils-CHwdflEM.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-pcY95NPm.js";import"./isPlainObject-CWcMf8n5.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BQknosyX.js";import"./useAnimationId-CpY_S6-T.js";import"./Trapezoid-2vK08j-g.js";import"./Sector-Bmz-EyPe.js";import"./Symbols-CaAoNy9I.js";import"./symbol-CBLdl9lx.js";import"./step-DmOlkDZ0.js";import"./Curve-W2IHKA5j.js";import"./RegisterGraphicalItemId-Dl_9XwyC.js";import"./ErrorBarContext-pBc660wi.js";import"./GraphicalItemClipPath-Cpkp19yU.js";import"./SetGraphicalItem-sg4XQgsj.js";import"./getZIndexFromUnknown-CSIDQUX5.js";import"./graphicalItemSelectors-C-LZ4Oc6.js";import"./ActivePoints-BYRAlD7T.js";import"./Dot-WO8tOduR.js";import"./getRadiusAndStrokeWidthFromDot-DGvf84G4.js";import"./useElementOffset-gbWWMt5M.js";import"./uniqBy-BqXP0SWa.js";import"./iteratee-9NvUXoXE.js";import"./Cross-DQJGi_Jg.js";import"./index-CIhAteaz.js";import"./ChartSizeDimensions-6JZOYWf1.js";import"./OffsetShower-D5r1e2Xk.js";import"./PlotAreaShower-DQz1z3XL.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
