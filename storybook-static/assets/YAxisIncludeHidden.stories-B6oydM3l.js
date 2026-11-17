import{r as f,R as e}from"./iframe-Czzk5Bx-.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-DskmDTW_.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CcZCAOP2.js";import{C as k}from"./ComposedChart-BWfmB2id.js";import{X as K}from"./XAxis-DWUu3518.js";import{L as v}from"./Legend-CtEKVYW6.js";import{B as a}from"./Bar-CYp4sOkh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CoDIIawi.js";import"./Text-CSorP4yu.js";import"./resolveDefaultProps-Csc694qB.js";import"./ZIndexLayer-DISaA8MD.js";import"./index-CtnBEbb_.js";import"./index-CElqLkJS.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Bgc5VpYB.js";import"./throttle-Dlw7_zhK.js";import"./axisSelectors-BthV4RsX.js";import"./d3-scale-CS0QJ-EZ.js";import"./CartesianAxis-5U6hsfI6.js";import"./Layer-CarPpKFV.js";import"./types-Bykt0Hlw.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-BwJ2p4Mi.js";import"./index-CAks9lDH.js";import"./index-yeT-45bY.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C5Ex_ZCH.js";import"./index-CsxmvEat.js";import"./fillDefinitions-DaR2TDo1.js";import"./CartesianChart-D3FUkn-t.js";import"./chartDataContext--mSdRmgw.js";import"./CategoricalChart-a1Xr9UIu.js";import"./Symbols-DOiO9HXo.js";import"./symbol-DOUGW8Ut.js";import"./path-DyVhHtw_.js";import"./useElementOffset-zxdJRS0e.js";import"./uniqBy-CjJbYxjU.js";import"./iteratee-CC6hZy84.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-C8IdewjD.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B6IFm27t.js";import"./useAnimationId-BMmeHowj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BDX2WB3N.js";import"./tooltipContext-Ds2DbmQs.js";import"./ErrorBarContext-BTwK65Em.js";import"./activeStyles-Dd2x1Ur1.js";import"./SetGraphicalItem-DZqA_DJ9.js";import"./getZIndexFromUnknown-Do8dm2Cc.js";import"./useEffectiveDataKey-BCok4F6X.js";import"./omit-8N5Y9wKt.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
