import{e as t}from"./iframe-DU8eCc54.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwQ9PO5l.js";import{Y as r}from"./YAxis-DVMQwddV.js";import{R as l}from"./arrayEqualityCheck-Qp-5SSbe.js";import{C as x}from"./ComposedChart-DiPamo-o.js";import{B as o}from"./Bar-aF3R1iXA.js";import{L as a}from"./Line-9yXbec6r.js";import{X as c}from"./XAxis-BLh_gYvb.js";import{T as A}from"./Tooltip-K-N_9545.js";import{R as g}from"./RechartsHookInspector-BoR36NoE.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-Cm-albbm.js";import"./Layer-BvRSrkrt.js";import"./resolveDefaultProps-DuF4MmFq.js";import"./Text-CoSb7mYB.js";import"./DOMUtils-CJsccqgn.js";import"./Label-DOEvYZv6.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-yILhEk3Y.js";import"./zIndexSlice-DTpubRK7.js";import"./immer-DU5qWI3u.js";import"./types-BuwCBhFk.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Bn5V3AB5.js";import"./hooks-BJclsIvf.js";import"./axisSelectors-_6DhXqkc.js";import"./d3-scale-DU3kIA5p.js";import"./RechartsWrapper-C5gztReH.js";import"./index-DQdIN_Xy.js";import"./CartesianChart-B9jAZwRS.js";import"./chartDataContext-B3buAU5Y.js";import"./CategoricalChart-NWkiMroK.js";import"./tooltipContext-BTs8o_iT.js";import"./ReactUtils-BqHSyciS.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BG4C0dYN.js";import"./isPlainObject-BxgfEpp7.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-H4hJrl9W.js";import"./useAnimationId-DBo0HAQE.js";import"./Trapezoid-DHbRiH3v.js";import"./Sector-B3eubpfo.js";import"./Symbols-DiLU7ggZ.js";import"./symbol-BOFZ4ILC.js";import"./step-rHtSy8FE.js";import"./Curve-CxvlU3dw.js";import"./RegisterGraphicalItemId-DkNBI1Sa.js";import"./ErrorBarContext-BNplQJsE.js";import"./GraphicalItemClipPath-DikKl46E.js";import"./SetGraphicalItem-EApE1d4j.js";import"./getZIndexFromUnknown-DYvgE3wg.js";import"./graphicalItemSelectors-CG_Gq5pM.js";import"./ActivePoints-DjvL664p.js";import"./Dot-DP4gaPK3.js";import"./getRadiusAndStrokeWidthFromDot-Bhc0P-qN.js";import"./useElementOffset-C0xso2Z-.js";import"./uniqBy-BjwhPhif.js";import"./iteratee-B-u3NDKL.js";import"./Cross-DsTXFGbh.js";import"./index-Cm2tec04.js";import"./ChartSizeDimensions-56Hl6M0T.js";import"./OffsetShower-lCaRoXjj.js";import"./PlotAreaShower-Cn7QQOSS.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
