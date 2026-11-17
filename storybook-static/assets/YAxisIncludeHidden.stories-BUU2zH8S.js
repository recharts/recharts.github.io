import{r as f,R as e}from"./iframe-CGL4wxKn.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-EQaJTxBr.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-099KjRSH.js";import{C as k}from"./ComposedChart-B3F4nto3.js";import{X as K}from"./XAxis-wodCK_Hv.js";import{L as v}from"./Legend-A616B0nC.js";import{B as a}from"./Bar-roKbAEHR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-gT4vohqn.js";import"./Text-D29ZLY8y.js";import"./resolveDefaultProps-J1iMbWnO.js";import"./ZIndexLayer-CN_fYC_z.js";import"./index-BZoAXlEM.js";import"./index-CB__xCeL.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DW8rryyn.js";import"./throttle-DUUYxzVG.js";import"./axisSelectors-BMd3ki3_.js";import"./d3-scale-o5WrViM1.js";import"./CartesianAxis-DY7911f8.js";import"./Layer-Ch4A95GV.js";import"./types-Blkz6f-Q.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-CQkNy6Mm.js";import"./index-BG2Ge-ql.js";import"./index-XB5jojxJ.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-g5knetkm.js";import"./index-D3e94DhQ.js";import"./fillDefinitions-Vr_akuqj.js";import"./CartesianChart-Co-UKN43.js";import"./chartDataContext-B0uy7sqw.js";import"./CategoricalChart-rWqih0Ao.js";import"./Symbols-Bc9bgKwE.js";import"./symbol-VmBVfDDj.js";import"./path-DyVhHtw_.js";import"./useElementOffset-mRlZC86j.js";import"./uniqBy-DDFgRhke.js";import"./iteratee-CuFGotjJ.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-CVCXFzjz.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BTmZooah.js";import"./useAnimationId-D89zGJBE.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B2rQYcmX.js";import"./tooltipContext-qSO0Oja6.js";import"./ErrorBarContext-CSfn8gVg.js";import"./activeStyles-BKPzxJKn.js";import"./SetGraphicalItem-DNJWjlHF.js";import"./getZIndexFromUnknown-BiUm8eGn.js";import"./useEffectiveDataKey-SnOfofuT.js";import"./omit-DgyzUTqO.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
