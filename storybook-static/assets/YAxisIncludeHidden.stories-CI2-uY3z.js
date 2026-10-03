import{r as f,a as e}from"./iframe-7Yqq7fCu.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Cy7XE4j-.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Clo6-Yyn.js";import{C as k}from"./ComposedChart-CzrLMxQE.js";import{X as K}from"./XAxis-1FKbFMeO.js";import{L as v}from"./Legend-B0A2aPD8.js";import{B as a}from"./Bar-B1AQH7L8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BeKnll5A.js";import"./Text-CBP65qj4.js";import"./resolveDefaultProps-DPH1JWez.js";import"./DOMUtils-DFLenfZw.js";import"./isWellBehavedNumber-3XLFrVwb.js";import"./useId-CQKco8O5.js";import"./useBackwardsCompatibleTheme-DsG9X6Al.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CY2z0VDd.js";import"./index-BP89nsqC.js";import"./index-Bvs3nnJ3.js";import"./RechartsWrapper-BmN3AX4B.js";import"./axisSelectors-TNeFeRD0.js";import"./throttle-CPS_vYKA.js";import"./d3-scale-BucieWce.js";import"./index-CMyPnnGY.js";import"./index-CIvsYy-Z.js";import"./renderedTicksSlice-C7nR0wuC.js";import"./index-BmRJq5r2.js";import"./CartesianAxis-Tr4fBNdd.js";import"./Layer-B4eFX6wr.js";import"./types-BLNI4yrZ.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-B7Vexiif.js";import"./chartDataContext-BDajETE7.js";import"./CategoricalChart-DGs6T5PE.js";import"./Symbols-CRebEb5d.js";import"./symbol-TqHkyfS6.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CVlFUWt-.js";import"./uniqBy-CgUI3qsR.js";import"./iteratee-DqkESnyS.js";import"./AnimatedItems-BlURIwD6.js";import"./useAnimationId-OFL2L8Zq.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D0MukTZZ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-RlmFljs4.js";import"./tooltipContext-D4MbV6nY.js";import"./RegisterGraphicalItemId-CBb6S0jv.js";import"./ErrorBarContext-B86Z1RsK.js";import"./GraphicalItemClipPath-ElSd1RxM.js";import"./SetGraphicalItem-DDBsqrXQ.js";import"./getZIndexFromUnknown-Cc1EfWmP.js";import"./useGraphicalItemIdentity-C_cMOVZX.js";import"./dataEntryStyles-BozVJHiq.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,we as __namedExportsOrder,Le as default};
