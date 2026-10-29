import{r as f,R as e}from"./iframe-jkWlGRao.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Df9BpDFL.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BJ_azL3V.js";import{C as k}from"./ComposedChart-B8s0ij_q.js";import{X as K}from"./XAxis-B6q08DjL.js";import{L as v}from"./Legend-DYuoz8s7.js";import{B as a}from"./Bar-B0aSYe8E.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-C3QhHNfQ.js";import"./Text-CsCVaUmy.js";import"./resolveDefaultProps-BJCkAT-c.js";import"./pageBackground-B7N8_bCe.js";import"./ZIndexLayer-Cz3uOrDa.js";import"./index-CafydseE.js";import"./index-l6IDK4X2.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-vXDHLkfy.js";import"./throttle-BclcIM3t.js";import"./axisSelectors-B57c623a.js";import"./d3-scale-B7YXqmgC.js";import"./CartesianAxis-vLbE4lIP.js";import"./Layer-DGNDN2U_.js";import"./types-BwHsgyny.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-MrcmxqRq.js";import"./index-CT6JOO-H.js";import"./index-lkQeFUlC.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CYIxj0Xh.js";import"./index-BIDLCapd.js";import"./CartesianChart-DNa8wuZh.js";import"./ZIndexPortal-PvuD5_Md.js";import"./CategoricalChart-BIz6y0X4.js";import"./Symbols-wGnZNd4F.js";import"./symbol-BOEnk89t.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CZ3cyGKX.js";import"./uniqBy-C6LXGOxF.js";import"./iteratee-kDWc3wPx.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-BN7i6-QW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CTBIyY9m.js";import"./useAnimationId-CAUjhf76.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-KQXKVatm.js";import"./tooltipContext-Coe7V1ij.js";import"./dataEntryStyles-ZVub37-6.js";import"./ErrorBarContext-CbF4zTiN.js";import"./activeStyles-EBU2roz0.js";import"./SetGraphicalItem-BoktD6a2.js";import"./getZIndexFromUnknown-hyD2UNCX.js";import"./useEffectiveDataKey-CJQQkbyt.js";import"./omit-V3INHSAr.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
