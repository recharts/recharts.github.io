import{r as f,a as e}from"./iframe-CptpVVdK.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DNukS_kg.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CAnxLxZK.js";import{C as k}from"./ComposedChart-Bnlr5v8S.js";import{X as K}from"./XAxis-r2oUn28C.js";import{L as v}from"./Legend-B0PIbuxJ.js";import{B as a}from"./Bar-gWpIpaCE.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DWXJ-Xrk.js";import"./Text-DTbKMiqG.js";import"./resolveDefaultProps-Bdo80tkX.js";import"./pageBackground-0u46-xLx.js";import"./isWellBehavedNumber-Cb3PSSsF.js";import"./useId-BHxaLpBq.js";import"./useBackwardsCompatibleTheme-Ck1iBTHP.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DRWh5tG_.js";import"./index-BTwylabs.js";import"./index-alo09WMF.js";import"./dataEntryStyles-pGU1xid_.js";import"./axisSelectors-DPTiSWkh.js";import"./throttle-BVKLcYc0.js";import"./d3-scale-DZZpobVW.js";import"./CartesianAxis-CgAlW-mI.js";import"./Layer-DZV5gQWy.js";import"./types-LYqggaBA.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-Cw--JOgv.js";import"./index-Dqps63Gr.js";import"./index-CniHkqMt.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-c3RFdf0m.js";import"./index-Bya_Ui15.js";import"./CartesianChart-kEptpjHt.js";import"./chartDataContext-YVUr32e2.js";import"./CategoricalChart-DUkp-alm.js";import"./Symbols-L3kNcT1G.js";import"./symbol-B8SgR90p.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B_-dcokC.js";import"./uniqBy-CvITKWaF.js";import"./iteratee-OHPjqRYA.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-tsd2tFv6.js";import"./useAnimationId-CHix4qCt.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DZ_c966o.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D7m_xdxo.js";import"./tooltipContext-Bus5sfrw.js";import"./RegisterGraphicalItemId-BgCOPa3U.js";import"./ErrorBarContext-BZkeDBub.js";import"./SetGraphicalItem-CBYCujS3.js";import"./getZIndexFromUnknown-Bl6LMIVg.js";import"./useEffectiveDataKey-DVLIQZiI.js";import"./omit-BFRaw1mi.js";const we={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Oe=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Oe as __namedExportsOrder,we as default};
