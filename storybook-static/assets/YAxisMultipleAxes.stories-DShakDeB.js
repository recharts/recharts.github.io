import{R as t}from"./iframe-_8NIVtea.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-Cq9nELWF.js";import{R as l}from"./zIndexSlice-DHi0zTqt.js";import{C as x}from"./ComposedChart-BQ1MbbEq.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-QbwUo4NR.js";import{L as a}from"./Line-CCJiTV3u.js";import{X as c}from"./XAxis-CXj9NRSO.js";import{T as g}from"./Tooltip-Dikr2jjx.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BPH4xIrS.js";import"./CartesianAxis-BJg7B04w.js";import"./Layer-CvtIbty1.js";import"./resolveDefaultProps-DWak00ij.js";import"./Text-Dn8CYcWJ.js";import"./DOMUtils-DxzVORfb.js";import"./isWellBehavedNumber-C_LYkTy5.js";import"./Label-Bho1wkfx.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D0YIaJsD.js";import"./index-CMd9L2k1.js";import"./index-DP0Hg4Uq.js";import"./types-B89ht9kr.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-BSwSfTVH.js";import"./immer-DtWKh-al.js";import"./RechartsWrapper-Btm1Myi_.js";import"./index-C4r4CwZ3.js";import"./index-DXHSNIUu.js";import"./axisSelectors-B0oXaHqO.js";import"./d3-scale-CJIJLRQO.js";import"./CartesianChart-CyMc8rJv.js";import"./chartDataContext-CURMS4bg.js";import"./CategoricalChart-Cq5j6ts0.js";import"./tooltipContext-h71PSfG3.js";import"./AnimatedItems-BQ9vzcvs.js";import"./useAnimationId-D4zdEFfm.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DNmx5GJU.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CCiDKEDP.js";import"./RegisterGraphicalItemId-IKsKal1D.js";import"./ErrorBarContext--tZY8j9K.js";import"./GraphicalItemClipPath-D7_UBVME.js";import"./SetGraphicalItem-rhq5lQpj.js";import"./getZIndexFromUnknown-AoYqtJuj.js";import"./graphicalItemSelectors-jiUl-4hm.js";import"./Curve-7XStj8oj.js";import"./step-BedGzIKx.js";import"./path-DyVhHtw_.js";import"./ActivePoints-q58bNkUv.js";import"./Dot-BCuViEZD.js";import"./getRadiusAndStrokeWidthFromDot-CVKaSFAr.js";import"./useElementOffset-BZoIycEd.js";import"./uniqBy-Ckq71Btn.js";import"./iteratee-BauMAWQN.js";import"./Cross-BxD1Hd53.js";import"./Sector-twgwZ-Ic.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
