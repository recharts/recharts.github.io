import{r as f,e}from"./iframe-CwQqlQJt.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis-DZx2Qb_9.js";import{R as A}from"./arrayEqualityCheck-BajvuZUd.js";import{C}from"./ComposedChart-8yH4t5Gs.js";import{X as K}from"./XAxis-WQ1W94Oc.js";import{L as v}from"./Legend-D6ctV7Iy.js";import{B as a}from"./Bar-ey-9-uKS.js";import{R as x}from"./RechartsHookInspector-DE9uvm11.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis--UFkxmwi.js";import"./Layer-BfeVm7hl.js";import"./resolveDefaultProps-BwAiebew.js";import"./Text-DEfSdBAV.js";import"./DOMUtils-Dk-0Y4qu.js";import"./Label-L2ClqQk9.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BhfIIgcP.js";import"./zIndexSlice-C8qpENF4.js";import"./immer-Bw_kturo.js";import"./types-iTXorHjM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DD88ZL81.js";import"./hooks-CEEbPwwQ.js";import"./axisSelectors-CiLIxTM1.js";import"./d3-scale-MvDvfgbn.js";import"./RechartsWrapper-mfnwaW4T.js";import"./index-_RolKYTX.js";import"./CartesianChart-CB-rBxO3.js";import"./chartDataContext-DhwkPQ9I.js";import"./CategoricalChart-D6AbF0nJ.js";import"./Symbols-B_0LQQd8.js";import"./symbol-BrIbO22w.js";import"./step-CzpXmVwk.js";import"./useElementOffset-XAjKA6pX.js";import"./uniqBy-HUwiZ0iN.js";import"./iteratee-DxQhEFlx.js";import"./tooltipContext-G5wINDfz.js";import"./ReactUtils-3SZUbpqz.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Cc01wXEA.js";import"./isPlainObject-BdAdFHxg.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BfTwe_Uy.js";import"./useAnimationId-BkdqwMyM.js";import"./Trapezoid-DuD6k8aH.js";import"./Sector-DlF65nWv.js";import"./Curve-DVUJSzGy.js";import"./RegisterGraphicalItemId-j64FPojn.js";import"./ErrorBarContext-CnIL0nCY.js";import"./GraphicalItemClipPath-CGVVVryc.js";import"./SetGraphicalItem-B838l6ba.js";import"./getZIndexFromUnknown-DYNkhrl1.js";import"./graphicalItemSelectors-Bu_18yHe.js";import"./index-D_-HOL7T.js";import"./ChartSizeDimensions-B33reZ_o.js";import"./OffsetShower-CD2wvvOr.js";import"./PlotAreaShower-CwvzOICJ.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Oe=["WithIncludeHidden"];export{t as WithIncludeHidden,Oe as __namedExportsOrder,we as default};
