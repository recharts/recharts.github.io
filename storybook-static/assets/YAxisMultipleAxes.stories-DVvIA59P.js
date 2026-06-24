import{R as t}from"./iframe-C-fup5Id.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-B46hC9dU.js";import{R as l}from"./zIndexSlice-NTR0fs-C.js";import{C as x}from"./ComposedChart-Jz5lk914.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DTR1hdUL.js";import{L as a}from"./Line-Bwf9fLP_.js";import{X as c}from"./XAxis-DODICsjR.js";import{T as g}from"./Tooltip-ghccvaKJ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-p2wvzD9I.js";import"./CartesianAxis-DNfda7To.js";import"./Layer-BxCAIV-n.js";import"./resolveDefaultProps-OK-IJ12C.js";import"./Text-DhUd53xM.js";import"./DOMUtils-CRh4TCoN.js";import"./isWellBehavedNumber-DLU1AHVw.js";import"./Label-Dx6_KP12.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DdUd9A7h.js";import"./index-Dx7TC_Rp.js";import"./index-DjFdhAan.js";import"./types-BIM6WHXQ.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-DiIPZqfD.js";import"./immer-8TCI2H73.js";import"./RechartsWrapper-B95PZmfT.js";import"./index-DNWmVjf2.js";import"./index-BlVQDt2E.js";import"./axisSelectors-BO6Bv25T.js";import"./d3-scale-BaBWXdX7.js";import"./CartesianChart-DGFEm_4g.js";import"./chartDataContext-Ci_9Tusi.js";import"./CategoricalChart-2uAqMqKC.js";import"./tooltipContext-DBZ8XCai.js";import"./AnimatedItems-BHa_3vog.js";import"./useAnimationId-CHZsXmiy.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-MYtIjh59.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BmOgDWMs.js";import"./RegisterGraphicalItemId-mXg0uLQv.js";import"./ErrorBarContext-P4JGsE5W.js";import"./GraphicalItemClipPath-CURGfNfz.js";import"./SetGraphicalItem-KcsUgiZW.js";import"./getZIndexFromUnknown-Duif59Mg.js";import"./graphicalItemSelectors-DMr6zMpw.js";import"./Curve-BxzrSemv.js";import"./step-BjlE7YIb.js";import"./path-DyVhHtw_.js";import"./ActivePoints-_HKP03c-.js";import"./Dot-Blb5FiAy.js";import"./getRadiusAndStrokeWidthFromDot-BZItNAyz.js";import"./useElementOffset-e7BpmwTH.js";import"./uniqBy-DmJ3MZLP.js";import"./iteratee-C8R--wWy.js";import"./Cross-B8v49sfh.js";import"./Sector-CMpapL9a.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
