import{r as f,e}from"./iframe-BlCBiEbC.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CNrfi_Sb.js";import{Y as c}from"./YAxis-HRoag-1v.js";import{R as A}from"./arrayEqualityCheck-X93wQEqh.js";import{C}from"./ComposedChart-kZ-KCn3S.js";import{X as K}from"./XAxis-DLSC__Q9.js";import{L as v}from"./Legend-Cy5DFzGZ.js";import{B as a}from"./Bar-DLAVhNBA.js";import{R as x}from"./RechartsHookInspector-CHVk1qod.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Bzr_YW23.js";import"./CartesianAxis-DPYmPxl5.js";import"./Layer-BoA-MhSr.js";import"./Text-RTBsPD27.js";import"./DOMUtils-Iuyw-z7a.js";import"./Label-yaREi1fu.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-jahJ6frp.js";import"./zIndexSlice-RKZlw9rR.js";import"./types-DYooLvZu.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-BT650JQT.js";import"./axisSelectors-0_eHLV3I.js";import"./RechartsWrapper-DkDok3zQ.js";import"./CartesianChart-DgUfEX9r.js";import"./chartDataContext-B-D1_Xyu.js";import"./CategoricalChart-CX-nrdd_.js";import"./Symbols-KFHdQ1ay.js";import"./Curve-CHEFd7Ta.js";import"./useElementOffset-COtcTsvw.js";import"./iteratee-DeqlCdre.js";import"./tooltipContext-CdjW7zH-.js";import"./ReactUtils-CVZw63sI.js";import"./ActiveShapeUtils-DglLsZWb.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B8Cog5YP.js";import"./useAnimationId-DmUtWl3R.js";import"./Trapezoid-DBjSOHQz.js";import"./Sector-DXYt-lKs.js";import"./RegisterGraphicalItemId-CF1HBkTr.js";import"./ErrorBarContext-CmWkVzrA.js";import"./GraphicalItemClipPath-C8x-oaPF.js";import"./SetGraphicalItem-SfTyueuB.js";import"./getZIndexFromUnknown-yHW4b60R.js";import"./graphicalItemSelectors-BBoAQcBZ.js";import"./index-D4FkNtIV.js";import"./ChartSizeDimensions-1GSyPMX1.js";import"./OffsetShower-BzuY3Qm6.js";import"./PlotAreaShower-D5VmZD6S.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
