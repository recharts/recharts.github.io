import{R as t}from"./iframe-DQXFH2fN.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-DxKBEaoV.js";import{R as l}from"./zIndexSlice-Dfa7PPo3.js";import{C as x}from"./ComposedChart-BBGwgebC.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BJN_27NM.js";import{L as a}from"./Line-CSVCJdJ6.js";import{X as c}from"./XAxis-DeVff73G.js";import{T as g}from"./Tooltip-INA8wN3X.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CZ1SHjxx.js";import"./Text-DcdnatC4.js";import"./resolveDefaultProps-lSPh-jGh.js";import"./ZIndexLayer-D9yot1xi.js";import"./index-LVwk1DdF.js";import"./index-BledrYYe.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D125t7LL.js";import"./throttle-CBXVztye.js";import"./axisSelectors-DJbzZfhu.js";import"./d3-scale-XeOVwhgh.js";import"./CartesianAxis-FqFP5ld6.js";import"./Layer-B0dm1oba.js";import"./types-CN3-AGJF.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-CbHdjAK6.js";import"./index-CIcJU2zj.js";import"./index-Bra-aG0C.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-FcCSE1mG.js";import"./index-BsheJTgc.js";import"./fillDefinitions-KRhWslMp.js";import"./CartesianChart-DQGbpwTu.js";import"./chartDataContext-DJ78QJpQ.js";import"./CategoricalChart-t_6GcrEg.js";import"./dataEntryStyles-CDXKXbSY.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-bqWLnmmt.js";import"./useAnimationId-BlZ_idpE.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CbcAbfiK.js";import"./tooltipContext-OBuBQcD_.js";import"./ErrorBarContext-CbK3TAVw.js";import"./activeStyles-DgOGJt0j.js";import"./SetGraphicalItem-CRYZ3Qzj.js";import"./getZIndexFromUnknown-GlkUZQS5.js";import"./useEffectiveDataKey-FX7cYr8p.js";import"./omit-C6Pq5iQk.js";import"./isArguments-yB-y1yaH.js";import"./Curve-Dawv8-Of.js";import"./step-Bu-hwkdA.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CfjMsAgl.js";import"./Dot-CC2Uce3B.js";import"./Symbols-D7I-QI86.js";import"./symbol-8Qaz948q.js";import"./getRadiusAndStrokeWidthFromDot-CxI0qt08.js";import"./useElementOffset-jipf_0Cu.js";import"./uniqBy-Dc0JsRTv.js";import"./iteratee-DsTi5lqZ.js";import"./Cross-BsiALtxc.js";import"./Sector-D4nbjpRD.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Lt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
