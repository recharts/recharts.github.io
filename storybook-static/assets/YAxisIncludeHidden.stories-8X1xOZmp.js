import{r as f,e}from"./iframe-Ucw_npMd.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-Ny3PLxgr.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-C_bl4BTF.js";import{C}from"./ComposedChart-ClVu3lO0.js";import{X as K}from"./XAxis-Z-pG1K5-.js";import{L as v}from"./Legend-pjRhjC8Y.js";import{B as s}from"./Bar-C4h8OPAl.js";import{R as x}from"./RechartsHookInspector-Egzn0asm.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-C30jVrg6.js";import"./Layer-BHKytU3r.js";import"./resolveDefaultProps-BHeHZryb.js";import"./Text-BMbZi_EC.js";import"./DOMUtils-YtDMkslD.js";import"./Label-GC_DUOEN.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D2xlXPPp.js";import"./zIndexSlice-CNerbQ3D.js";import"./immer-Df11CBmE.js";import"./types-_zfRhAxP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DUMTm3uB.js";import"./hooks-D7V2KDBB.js";import"./axisSelectors-BH0WFu65.js";import"./d3-scale-0cZeb6CB.js";import"./RechartsWrapper-CwfOdweJ.js";import"./index-JYzWfHpx.js";import"./CartesianChart-C3CifoRw.js";import"./chartDataContext-C8DSjEnl.js";import"./CategoricalChart-Bvyp3zlR.js";import"./Symbols-ODbCcosS.js";import"./symbol-C71I-RBu.js";import"./step-CvXihpec.js";import"./useElementOffset-sej1y7uw.js";import"./uniqBy-bXe7YxKg.js";import"./iteratee-B_1kyU97.js";import"./tooltipContext-DFrxW3sM.js";import"./ReactUtils-CjeDc-m7.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DW7P1xTB.js";import"./isPlainObject-DLsDG0Z3.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DdjFgehH.js";import"./useAnimationId-CEijT5wS.js";import"./Trapezoid-DDcYuR4h.js";import"./Sector-SP2qnp6i.js";import"./Curve-4SPhgVqC.js";import"./RegisterGraphicalItemId-CbJhRY50.js";import"./ErrorBarContext-DyEjoJld.js";import"./GraphicalItemClipPath-B7jjPwrD.js";import"./SetGraphicalItem-BTRvTts6.js";import"./getZIndexFromUnknown-DYc5eYtW.js";import"./graphicalItemSelectors-B4mUjUoF.js";import"./index-BrSV8OVb.js";import"./ChartSizeDimensions-Cz7KN2Sj.js";import"./OffsetShower-BPBpAMRX.js";import"./PlotAreaShower-sLoJpTUh.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
