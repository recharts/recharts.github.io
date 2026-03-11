import{e as t}from"./iframe-eaOsasXA.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwQ9PO5l.js";import{Y as r}from"./YAxis-D0SSpyRh.js";import{R as l}from"./arrayEqualityCheck-CMs0gYkZ.js";import{C as x}from"./ComposedChart-DAn4V3cy.js";import{B as o}from"./Bar-DagNaEL4.js";import{L as a}from"./Line-CuhRYagr.js";import{X as c}from"./XAxis-3ftlLggt.js";import{T as A}from"./Tooltip-BdXqARe_.js";import{R as g}from"./RechartsHookInspector-CfQxcoqC.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-QrZ9YuOP.js";import"./Layer-CEQ15rDn.js";import"./resolveDefaultProps-BRN_chMz.js";import"./Text-CS5oLB7f.js";import"./DOMUtils-DKDW8odg.js";import"./Label-CM17nvk9.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-4Bmx0L-z.js";import"./zIndexSlice-CQVRJFSN.js";import"./immer-h0oz4gDz.js";import"./types-DVEQRe7O.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-HUT3i4LQ.js";import"./hooks-DkQXEwbK.js";import"./axisSelectors-rZ1oBaef.js";import"./d3-scale-fyi29fM7.js";import"./RechartsWrapper-kQIwCL0D.js";import"./index-CBq7QNMe.js";import"./CartesianChart-DqLib-3F.js";import"./chartDataContext-BZaY1x-g.js";import"./CategoricalChart-BHzek6ba.js";import"./tooltipContext-Cj5Ji5q3.js";import"./ReactUtils-rQN1ow78.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DuB5RKi8.js";import"./isPlainObject-DOptfpMt.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DCXniG-Q.js";import"./useAnimationId-Cipx0nDt.js";import"./Trapezoid-B7u96FyR.js";import"./Sector-DlrpmWZs.js";import"./Symbols-DwawNnsL.js";import"./symbol-DkR6dB45.js";import"./step-wTrvujLP.js";import"./Curve-BpLwOdP7.js";import"./RegisterGraphicalItemId-1T1LHaRb.js";import"./ErrorBarContext-BRJpaXpn.js";import"./GraphicalItemClipPath-DHbALYaQ.js";import"./SetGraphicalItem-CI6Uk2ug.js";import"./getZIndexFromUnknown-BdCPIBaq.js";import"./graphicalItemSelectors-PhT4ox6_.js";import"./ActivePoints-_V2GyU66.js";import"./Dot-CL5p6Fms.js";import"./getRadiusAndStrokeWidthFromDot-Cifjzjy_.js";import"./useElementOffset-CA1reWi7.js";import"./uniqBy-DxeT86xP.js";import"./iteratee-GUobkNTQ.js";import"./Cross-Bm5d82mo.js";import"./index-D4X9rB5g.js";import"./ChartSizeDimensions-DQ43uIY8.js";import"./OffsetShower-Y12_Isjl.js";import"./PlotAreaShower-ND2vevs1.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
