import{r as f,a as e}from"./iframe-_HfAVjpf.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BoV0AlEf.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BBpCjLLT.js";import{C as k}from"./ComposedChart-CDQm-nCO.js";import{X as K}from"./XAxis-BPfOL0q9.js";import{L as v}from"./Legend-W5IYhstw.js";import{B as a}from"./Bar-CFQfPVrB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CR54GT5X.js";import"./Text-WmpuDBGa.js";import"./resolveDefaultProps-D7IrzSl6.js";import"./pageBackground-CfQpba4h.js";import"./isWellBehavedNumber-DviO5hHm.js";import"./useId-B3zQHx_-.js";import"./useBackwardsCompatibleTheme-BJsCYBM6.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BrUuampD.js";import"./index-Cs9o5rrz.js";import"./index-CIyvwLXB.js";import"./axisSelectors-BggHFTDq.js";import"./throttle-DIGsG3tn.js";import"./d3-scale-B5oQCS6M.js";import"./CartesianAxis-Chrpiu6A.js";import"./Layer-CacweoVl.js";import"./types-BGnPJWtT.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-BNJCO30A.js";import"./index-ATsp3Ecu.js";import"./index-uZk8L8Al.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-B3bcu809.js";import"./index-CIMOmY0A.js";import"./CartesianChart-De3rsgvn.js";import"./chartDataContext-Dyk7Yokq.js";import"./CategoricalChart-a-VUE4A0.js";import"./Symbols-ytZN-S27.js";import"./symbol-r9QtLlV8.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B927Oy_l.js";import"./uniqBy-TLIumvzr.js";import"./iteratee-CTU_33At.js";import"./activeStyles-BdpGsFup.js";import"./useAnimationId-BhBKKO0p.js";import"./dataEntryStyles-Ucx7Hmoa.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cur1iMCQ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-4DLJyt96.js";import"./tooltipContext-DeJX041B.js";import"./ErrorBarContext-BDsk2xtE.js";import"./GraphicalItemClipPath-C1A7eGe6.js";import"./SetGraphicalItem-Cj-t7_ZW.js";import"./getZIndexFromUnknown-BbWs-CBc.js";import"./useEffectiveDataKey-C_P0BrSn.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
