import{R as t}from"./iframe-m3pGEKfa.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-swa8vM-B.js";import{R as l}from"./zIndexSlice-CiEd_T_p.js";import{C as x}from"./ComposedChart-CsqQifeL.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-B3S3Rk3l.js";import{L as a}from"./Line-DRnRZKUl.js";import{X as c}from"./XAxis-BaVE9EFQ.js";import{T as g}from"./Tooltip-BD7v7yEF.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BWwlrPxZ.js";import"./Text-C8slSLt5.js";import"./resolveDefaultProps-1_D7OVbj.js";import"./DOMUtils-CgNaQgzY.js";import"./ZIndexLayer-dW6YEDVz.js";import"./index-Bk15LyvO.js";import"./index-B2FvYHPH.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BjeSYPTx.js";import"./throttle-C3qsSQmj.js";import"./axisSelectors-BuHzQOVj.js";import"./d3-scale-COa--qib.js";import"./CartesianAxis-4cS3xnQT.js";import"./Layer-CWJJdVGN.js";import"./types-NW0KOpFv.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-riwhMnsC.js";import"./index-CwIe0M5T.js";import"./index-CVYSO0b0.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-B1DLlNjF.js";import"./index-D_gkyxlq.js";import"./fillDefinitions-gM0_oynF.js";import"./CartesianChart-CVVFQDxq.js";import"./ZIndexPortal-CX0wxjxU.js";import"./CategoricalChart-Cbbud_Be.js";import"./LabelList-DpjRmARQ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BcfuQLVE.js";import"./useAnimationId-CZ85B9in.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-hQzu6D3o.js";import"./tooltipContext-Bo8ESMO_.js";import"./dataEntryStyles-D1ArbIJ7.js";import"./ErrorBarContext-CKCqOaVD.js";import"./activeStyles-Bu9SIE65.js";import"./SetGraphicalItem-Cdf126o-.js";import"./getZIndexFromUnknown-BA4WQAi5.js";import"./useEffectiveDataKey-DabJGTLc.js";import"./omit-pPEclRFt.js";import"./isArguments-yB-y1yaH.js";import"./Curve-C8JVR8tL.js";import"./step-JD5lrPB_.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BT3v0Z1P.js";import"./Dot-Bo6Iz36c.js";import"./Symbols-C8vox5bW.js";import"./symbol-QU-hqetJ.js";import"./getRadiusAndStrokeWidthFromDot-fp1uavHZ.js";import"./useElementOffset-ON2NhW56.js";import"./uniqBy-D3YFn-Gt.js";import"./iteratee-CrOyoWYC.js";import"./Cross-BW0Pnu8r.js";import"./Sector-BXQzfWqs.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Wt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Wt as __namedExportsOrder,Tt as default};
