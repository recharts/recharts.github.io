import{r as f,e}from"./iframe-BQCoiva3.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-BQIKrjqI.js";import{Y as c}from"./YAxis-Cm9krEUT.js";import{R as A}from"./arrayEqualityCheck-B0366wwk.js";import{C}from"./ComposedChart-BYVrpyQ6.js";import{X as K}from"./XAxis-adUeWkz6.js";import{L as v}from"./Legend-JcLzm1j5.js";import{B as a}from"./Bar-BaE5f4z2.js";import{R as x}from"./RechartsHookInspector-CnEEIRv_.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BkSCP0UE.js";import"./CartesianAxis-DjqIVAOB.js";import"./Layer-DJ1Ub_Mt.js";import"./Text-DJjW_aea.js";import"./DOMUtils-CR4mIpeb.js";import"./Label-DcE3tZRQ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-MNqDcOIF.js";import"./zIndexSlice-DIQaSorX.js";import"./types-D3fsuIcd.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-6nrvr-mh.js";import"./axisSelectors-BeeHNvPl.js";import"./RechartsWrapper-vpzrlwOs.js";import"./CartesianChart-3obF7LW0.js";import"./chartDataContext-DynAjYRS.js";import"./CategoricalChart-BUFP8crF.js";import"./Symbols-DO7aFqSH.js";import"./Curve-CIPXZY-U.js";import"./useElementOffset-SeIeaPKh.js";import"./iteratee-BfMs3-Wx.js";import"./tooltipContext-B7Gcn_PF.js";import"./ReactUtils-CBZ7FQLf.js";import"./ActiveShapeUtils-BR9LCKJd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bkr_shZz.js";import"./useAnimationId-D9Kszw7L.js";import"./Trapezoid-D1e_n1ob.js";import"./Sector-DlkTEg1T.js";import"./RegisterGraphicalItemId-BshdgZU9.js";import"./ErrorBarContext-Ht_zzjWi.js";import"./GraphicalItemClipPath-Bi8mSekh.js";import"./SetGraphicalItem-DgSBR6IQ.js";import"./getZIndexFromUnknown-dNQMhXcK.js";import"./graphicalItemSelectors-4UHVuMlx.js";import"./index-DKG7AucC.js";import"./ChartSizeDimensions-_A7Mz-FY.js";import"./OffsetShower-D2FIRFNu.js";import"./PlotAreaShower-j01VLlBO.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
            <RechartsHookInspector />
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ve=["WithIncludeHidden"];export{t as WithIncludeHidden,ve as __namedExportsOrder,Ke as default};
