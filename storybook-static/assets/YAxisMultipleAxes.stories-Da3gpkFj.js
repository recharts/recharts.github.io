import{e as t}from"./iframe-CKoXL-7H.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CNrfi_Sb.js";import{Y as r}from"./YAxis-RWI4s0em.js";import{R as l}from"./arrayEqualityCheck-GexdJw_D.js";import{C as x}from"./ComposedChart-C7tysGI7.js";import{B as o}from"./Bar-wsZ6Ro1r.js";import{L as a}from"./Line-B6AqF2pF.js";import{X as c}from"./XAxis-rLQI09xS.js";import{T as A}from"./Tooltip-xGWrVpZA.js";import{R as g}from"./RechartsHookInspector-CMD5YE2l.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BaEbAQrQ.js";import"./CartesianAxis-DXu08t8h.js";import"./Layer-CVCSBl5u.js";import"./Text-BUTkcAxm.js";import"./DOMUtils-BXsvg6Zu.js";import"./Label-Cl7hxCC5.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-0nKnHyxR.js";import"./zIndexSlice-muSoLd76.js";import"./types-CIdldEzr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-Wghpb3Lr.js";import"./axisSelectors-DPsIzSXr.js";import"./RechartsWrapper-CSLBjixG.js";import"./CartesianChart-BnHhxgzL.js";import"./chartDataContext-Bkp8uQCT.js";import"./CategoricalChart-Nf_fZ3uc.js";import"./tooltipContext-COHTcDE8.js";import"./ReactUtils-DZNkeyHe.js";import"./ActiveShapeUtils-CJx1zFrR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BLY94iSC.js";import"./useAnimationId-2NBy4alx.js";import"./Trapezoid-NNoDFDG-.js";import"./Sector-D9S-bODI.js";import"./Symbols-D2digf2k.js";import"./Curve-CYqbtLFF.js";import"./RegisterGraphicalItemId-Dd6TmGbZ.js";import"./ErrorBarContext-CfkXyv19.js";import"./GraphicalItemClipPath-CoiOEHHo.js";import"./SetGraphicalItem-B8zEjMN_.js";import"./getZIndexFromUnknown-D7m_SwVP.js";import"./graphicalItemSelectors--EjS1ncZ.js";import"./ActivePoints-0vYfh0ZR.js";import"./Dot-D5rSU5PW.js";import"./getRadiusAndStrokeWidthFromDot-Dh2Py107.js";import"./useElementOffset-B4fkln4G.js";import"./iteratee-DT9v8GkJ.js";import"./Cross-BFexLb6d.js";import"./index-DasXKjzD.js";import"./ChartSizeDimensions-CbnBpjpJ.js";import"./OffsetShower-BeXAkU7y.js";import"./PlotAreaShower-otv1tPFG.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const It=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,It as __namedExportsOrder,ut as default};
