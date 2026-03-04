import{r as f,e}from"./iframe-BWK9ES1u.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis--KyRCAkW.js";import{R as A}from"./arrayEqualityCheck-C3hQ_dNx.js";import{C}from"./ComposedChart-Dkw93O4i.js";import{X as K}from"./XAxis-DPIaAqKp.js";import{L as v}from"./Legend-CyefDMxI.js";import{B as a}from"./Bar-BlgHTcej.js";import{R as x}from"./RechartsHookInspector-PHAVE2qS.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DXQ2RzcP.js";import"./Layer-FfNANwFp.js";import"./resolveDefaultProps-UiVGC4WG.js";import"./Text-D_AFYo3_.js";import"./DOMUtils-BiksdwSe.js";import"./Label-CkGBtdJT.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-bCgYEHqC.js";import"./zIndexSlice-D32FYtu3.js";import"./immer-H-Wjh2uu.js";import"./types-BDXHojhp.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DeqeruMc.js";import"./hooks-7NwdUe8t.js";import"./axisSelectors-_XyMcvnR.js";import"./d3-scale-BLK5VF-M.js";import"./RechartsWrapper-BOGHGYF3.js";import"./index-CFdRl6ey.js";import"./CartesianChart-CW6-YABt.js";import"./chartDataContext-cUJ3hXxI.js";import"./CategoricalChart-BCO7gYoN.js";import"./Symbols-CaAoNy9I.js";import"./symbol-CBLdl9lx.js";import"./step-DmOlkDZ0.js";import"./useElementOffset-gbWWMt5M.js";import"./uniqBy-BqXP0SWa.js";import"./iteratee-9NvUXoXE.js";import"./tooltipContext-Dv9lVTn5.js";import"./ReactUtils-CHwdflEM.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-pcY95NPm.js";import"./isPlainObject-CWcMf8n5.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BQknosyX.js";import"./useAnimationId-CpY_S6-T.js";import"./Trapezoid-2vK08j-g.js";import"./Sector-Bmz-EyPe.js";import"./Curve-W2IHKA5j.js";import"./RegisterGraphicalItemId-Dl_9XwyC.js";import"./ErrorBarContext-pBc660wi.js";import"./GraphicalItemClipPath-Cpkp19yU.js";import"./SetGraphicalItem-sg4XQgsj.js";import"./getZIndexFromUnknown-CSIDQUX5.js";import"./graphicalItemSelectors-C-LZ4Oc6.js";import"./index-CIhAteaz.js";import"./ChartSizeDimensions-6JZOYWf1.js";import"./OffsetShower-D5r1e2Xk.js";import"./PlotAreaShower-DQz1z3XL.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
