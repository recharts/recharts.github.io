import{R as t}from"./iframe-GMBZ_Ugx.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-B3CJ0t9T.js";import{R as l}from"./zIndexSlice-CaGWsk0_.js";import{C as x}from"./ComposedChart-DtzDaUqm.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DW33fKra.js";import{L as a}from"./Line-DW-frjCE.js";import{X as c}from"./XAxis-CWBxARwY.js";import{T as g}from"./Tooltip-DqLYQ53s.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Gz1PRcGr.js";import"./CartesianAxis-DMU5FiQJ.js";import"./Layer-BXGTwaUB.js";import"./resolveDefaultProps-CaBwGHvy.js";import"./Text-xcPGheUs.js";import"./DOMUtils-BjtWwWtu.js";import"./isWellBehavedNumber-CHbHfbVW.js";import"./Label-BaqULLaE.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DxP6hcPK.js";import"./index-CWyz9jhc.js";import"./index-BJeMs6TD.js";import"./types-M4hw7OKT.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-CW6yCQrF.js";import"./immer-8AAf0mWE.js";import"./RechartsWrapper-B0SxcSOH.js";import"./index-B_gRMuPi.js";import"./index-Gz1Qo9An.js";import"./axisSelectors-CTNvdk-R.js";import"./d3-scale-DrE5OPOC.js";import"./CartesianChart-rtXvtu0b.js";import"./chartDataContext-CUGtjOSs.js";import"./CategoricalChart-CElM-v-_.js";import"./tooltipContext-BN4wceTB.js";import"./AnimatedItems-NvoGhX2w.js";import"./useAnimationId-DgxmZKXq.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CaFvPD3t.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CK3PQT9Y.js";import"./RegisterGraphicalItemId-Dh_QLlB5.js";import"./ErrorBarContext-C1t_9iin.js";import"./GraphicalItemClipPath-DlEa2W6_.js";import"./SetGraphicalItem-CZxAdJP0.js";import"./getZIndexFromUnknown-DC9MddM9.js";import"./graphicalItemSelectors-D3zVZ2eQ.js";import"./Curve-DWsbrokm.js";import"./step-D2IVGUQU.js";import"./path-DyVhHtw_.js";import"./ActivePoints-PmkOapvV.js";import"./Dot-DN0s5ohL.js";import"./getRadiusAndStrokeWidthFromDot-Bfj8OsGQ.js";import"./useElementOffset-CI5bYttM.js";import"./uniqBy-RjHfO3JH.js";import"./iteratee-CA-p00eZ.js";import"./Cross-Xi6mjM4Q.js";import"./Sector-9EfWoqS9.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
