import{e as t}from"./iframe-Ucw_npMd.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-Ny3PLxgr.js";import{R as l}from"./arrayEqualityCheck-C_bl4BTF.js";import{C as x}from"./ComposedChart-ClVu3lO0.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C4h8OPAl.js";import{L as a}from"./Line-xp0DzpuK.js";import{X as A}from"./XAxis-Z-pG1K5-.js";import{T as g}from"./Tooltip-DhN8fm3x.js";import{R as f}from"./RechartsHookInspector-Egzn0asm.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-C30jVrg6.js";import"./Layer-BHKytU3r.js";import"./resolveDefaultProps-BHeHZryb.js";import"./Text-BMbZi_EC.js";import"./DOMUtils-YtDMkslD.js";import"./Label-GC_DUOEN.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D2xlXPPp.js";import"./zIndexSlice-CNerbQ3D.js";import"./immer-Df11CBmE.js";import"./types-_zfRhAxP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DUMTm3uB.js";import"./hooks-D7V2KDBB.js";import"./axisSelectors-BH0WFu65.js";import"./d3-scale-0cZeb6CB.js";import"./RechartsWrapper-CwfOdweJ.js";import"./index-JYzWfHpx.js";import"./CartesianChart-C3CifoRw.js";import"./chartDataContext-C8DSjEnl.js";import"./CategoricalChart-Bvyp3zlR.js";import"./tooltipContext-DFrxW3sM.js";import"./ReactUtils-CjeDc-m7.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DW7P1xTB.js";import"./isPlainObject-DLsDG0Z3.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DdjFgehH.js";import"./useAnimationId-CEijT5wS.js";import"./Trapezoid-DDcYuR4h.js";import"./Sector-SP2qnp6i.js";import"./Symbols-ODbCcosS.js";import"./symbol-C71I-RBu.js";import"./step-CvXihpec.js";import"./Curve-4SPhgVqC.js";import"./RegisterGraphicalItemId-CbJhRY50.js";import"./ErrorBarContext-DyEjoJld.js";import"./GraphicalItemClipPath-B7jjPwrD.js";import"./SetGraphicalItem-BTRvTts6.js";import"./getZIndexFromUnknown-DYc5eYtW.js";import"./graphicalItemSelectors-B4mUjUoF.js";import"./ActivePoints-UksLcW80.js";import"./Dot-B34r2ooF.js";import"./getRadiusAndStrokeWidthFromDot-6YrovPXS.js";import"./useElementOffset-sej1y7uw.js";import"./uniqBy-bXe7YxKg.js";import"./iteratee-B_1kyU97.js";import"./Cross-9WsfiIUp.js";import"./index-BrSV8OVb.js";import"./ChartSizeDimensions-Cz7KN2Sj.js";import"./OffsetShower-BPBpAMRX.js";import"./PlotAreaShower-sLoJpTUh.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
