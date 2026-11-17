import{r as f,R as e}from"./iframe-waGCAeMO.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-Bp6_7tMg.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Bs9eWJkZ.js";import{C as k}from"./ComposedChart-C-dH4vpB.js";import{X as K}from"./XAxis-C97Th9HK.js";import{L as v}from"./Legend-Bgc8srvp.js";import{B as a}from"./Bar-BG77Ue60.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Chhp1CRe.js";import"./Text-C-WU5iwS.js";import"./resolveDefaultProps-Dpi9F_1z.js";import"./ZIndexLayer-B2QwwaI-.js";import"./index-CcRKR-Wz.js";import"./index-DUwJtu9Y.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DtiraoLM.js";import"./throttle-CoYevXVP.js";import"./axisSelectors-BpNK-g3S.js";import"./d3-scale-FqfjaXEu.js";import"./CartesianAxis-BDzG2Gtt.js";import"./Layer-dmB1mICY.js";import"./types-DrCFt1uv.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-ClDU73ld.js";import"./index-kB8F1Br5.js";import"./index-3B7lt2Ve.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DrhKOT3w.js";import"./index-11RgyOoZ.js";import"./fillDefinitions-DkO2tIQI.js";import"./CartesianChart-7iyfeH7l.js";import"./chartDataContext-BbqISvQG.js";import"./CategoricalChart-D2Hb9hNl.js";import"./Symbols-sTKgXRyZ.js";import"./symbol-CRbcfw6A.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DFWzqZEl.js";import"./uniqBy-CqnsSxDI.js";import"./iteratee-DPicYX8A.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-DwD17VpV.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-W9w0JczW.js";import"./useAnimationId-DGRCx4ie.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BuFZhuT8.js";import"./tooltipContext-DOcO8H8O.js";import"./ErrorBarContext-DLQUfAIY.js";import"./activeStyles-Db3JHrE0.js";import"./SetGraphicalItem-DY5DQdLd.js";import"./getZIndexFromUnknown-Bai-ov13.js";import"./useEffectiveDataKey-DONRPZmA.js";import"./omit-Ddtq8Spp.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    const allKeys = Object.keys(pageData[0]);
    const [activeKeys, setActiveKeys] = useState(allKeys);

    /*
     * Toggles displayed bars when clicking on a legend item
     */
    const handleLegendClick: ComponentProps<typeof Legend>['onClick'] = (e: any) => {
      const key: string = e.dataKey;
      setActiveKeys(prev => prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]);
    };
    return <>
        <h4>
          Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if
          \`includeHidden\`
        </h4>
        <ResponsiveContainer width="100%" height={500}>
          <ComposedChart data={pageData}>
            <XAxis dataKey="name" scale="band" />
            <YAxis includeHidden />
            <Legend onClick={handleLegendClick} />
            <Bar dataKey="pv" fill="blue" hide={!activeKeys.includes('pv')} />
            <Bar dataKey="amt" fill="green" hide={!activeKeys.includes('amt')} />
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
