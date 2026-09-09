import{a as t}from"./iframe-3mrIZkil.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-L6Kj6NBD.js";import{R as l}from"./zIndexSlice-L3ODJxG9.js";import{C as x}from"./ComposedChart-B1NQbFGd.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BMSFcvTO.js";import{L as a}from"./Line-C5JoJcVf.js";import{X as c}from"./XAxis-D6OSWIjP.js";import{T as g}from"./Tooltip-DR2XYmSX.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BIqKgU55.js";import"./Text-DUYy6Shz.js";import"./resolveDefaultProps-i-Y4kJTh.js";import"./DOMUtils-CXxLAhGm.js";import"./isWellBehavedNumber-ZyDhg4rS.js";import"./useId-Cxwt81yN.js";import"./useBackwardsCompatibleTheme-lR8vi8zs.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D4cc4mD4.js";import"./index-BXM7Ne4y.js";import"./index-CDwIhtzp.js";import"./RechartsWrapper-DwVI4RN7.js";import"./axisSelectors-DAOLJeWY.js";import"./throttle-rESuvk1I.js";import"./d3-scale-CguR2U2N.js";import"./index-BtaPmQxv.js";import"./index-BdkN9O5O.js";import"./renderedTicksSlice-DYEa3gne.js";import"./index-pFwFQ5O8.js";import"./CartesianAxis-BlnQQ3GL.js";import"./Layer-DjZWmALl.js";import"./types-8JRxRnLp.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CUvaXipt.js";import"./chartDataContext-FTM0Yeif.js";import"./CategoricalChart-D95OMo3E.js";import"./AnimatedItems-DhXJ9Je_.js";import"./useAnimationId-BnnXfXw0.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BDa16x25.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BBpy3JCJ.js";import"./tooltipContext-DH0INPqo.js";import"./RegisterGraphicalItemId-BDB0ngzS.js";import"./ErrorBarContext-NAHggWz8.js";import"./GraphicalItemClipPath-Bb5lUrgq.js";import"./SetGraphicalItem-9-RZ0mcl.js";import"./getZIndexFromUnknown-BiXUutbq.js";import"./useGraphicalItemIdentity-BcKg6UBn.js";import"./Curve-Bw-gimBr.js";import"./step-DsELI93G.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DxgGQQ1D.js";import"./Dot-Sx0Kvb2o.js";import"./getRadiusAndStrokeWidthFromDot-DN4z1IWE.js";import"./useElementOffset-DGkGm79j.js";import"./uniqBy-CSyaLent.js";import"./iteratee-yW488fbm.js";import"./Cross-DJFcvGJF.js";import"./Sector-CV6xDlC_.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Rt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
