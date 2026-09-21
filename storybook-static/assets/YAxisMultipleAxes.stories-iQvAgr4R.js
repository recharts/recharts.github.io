import{a as t}from"./iframe-Br90fEj5.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DdYWFMJf.js";import{R as l}from"./zIndexSlice-DrwH1jfn.js";import{C as x}from"./ComposedChart-CHD1wSbm.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-GfmQW5NV.js";import{L as a}from"./Line-J4GxzHaN.js";import{X as c}from"./XAxis-DGeDsLv7.js";import{T as g}from"./Tooltip-C3K0gvKc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BXLkvKad.js";import"./Text-CYmtT5C7.js";import"./resolveDefaultProps-CJrJLZqi.js";import"./DOMUtils-DQ9aPFfp.js";import"./isWellBehavedNumber-Cp5K1yLZ.js";import"./useId-BR1QS50g.js";import"./useBackwardsCompatibleTheme-plzmt3ou.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-1J001_po.js";import"./index-xBkJObNc.js";import"./index-CFRdOJzL.js";import"./RechartsWrapper-CvaMq-_r.js";import"./axisSelectors-DfYTYXSn.js";import"./throttle-BtlLZFJi.js";import"./d3-scale-BG2Gp8e0.js";import"./index-DZZQKCIH.js";import"./index-DCsT-Kwq.js";import"./renderedTicksSlice-BJ1ZC3VH.js";import"./index-Ux_jSD8J.js";import"./CartesianAxis-De1AZe26.js";import"./Layer-vC2iAjl-.js";import"./types-BSZ9BCSJ.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DhQLJKy3.js";import"./chartDataContext-BJ8faAsD.js";import"./CategoricalChart-CWTSAfNd.js";import"./AnimatedItems-BDiDUfRj.js";import"./useAnimationId-CxK571sH.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BZ-ww0Nu.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DUSmPc-T.js";import"./tooltipContext-DlIzl-Vq.js";import"./RegisterGraphicalItemId-nSf1Px3R.js";import"./ErrorBarContext-DkLC3v4H.js";import"./GraphicalItemClipPath-BqifZnDC.js";import"./SetGraphicalItem-jDsg55aJ.js";import"./getZIndexFromUnknown-DInIr0St.js";import"./useGraphicalItemIdentity-BFkPxhIu.js";import"./Curve-ce5L2urE.js";import"./step-a76R8hck.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CjeI93YB.js";import"./Dot-CzsTOlQY.js";import"./getRadiusAndStrokeWidthFromDot-Bq3tql2n.js";import"./useElementOffset-DmwgRP6o.js";import"./uniqBy-IvYMjdnd.js";import"./iteratee-CwMz1arw.js";import"./Cross-ctkwK30O.js";import"./Sector-Cl71ey6c.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
