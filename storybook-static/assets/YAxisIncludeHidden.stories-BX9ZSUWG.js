import{r as f,e}from"./iframe-DU8eCc54.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis-DVMQwddV.js";import{R as A}from"./arrayEqualityCheck-Qp-5SSbe.js";import{C}from"./ComposedChart-DiPamo-o.js";import{X as K}from"./XAxis-BLh_gYvb.js";import{L as v}from"./Legend-ByrniZpa.js";import{B as a}from"./Bar-aF3R1iXA.js";import{R as x}from"./RechartsHookInspector-BoR36NoE.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-Cm-albbm.js";import"./Layer-BvRSrkrt.js";import"./resolveDefaultProps-DuF4MmFq.js";import"./Text-CoSb7mYB.js";import"./DOMUtils-CJsccqgn.js";import"./Label-DOEvYZv6.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-yILhEk3Y.js";import"./zIndexSlice-DTpubRK7.js";import"./immer-DU5qWI3u.js";import"./types-BuwCBhFk.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Bn5V3AB5.js";import"./hooks-BJclsIvf.js";import"./axisSelectors-_6DhXqkc.js";import"./d3-scale-DU3kIA5p.js";import"./RechartsWrapper-C5gztReH.js";import"./index-DQdIN_Xy.js";import"./CartesianChart-B9jAZwRS.js";import"./chartDataContext-B3buAU5Y.js";import"./CategoricalChart-NWkiMroK.js";import"./Symbols-DiLU7ggZ.js";import"./symbol-BOFZ4ILC.js";import"./step-rHtSy8FE.js";import"./useElementOffset-C0xso2Z-.js";import"./uniqBy-BjwhPhif.js";import"./iteratee-B-u3NDKL.js";import"./tooltipContext-BTs8o_iT.js";import"./ReactUtils-BqHSyciS.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BG4C0dYN.js";import"./isPlainObject-BxgfEpp7.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-H4hJrl9W.js";import"./useAnimationId-DBo0HAQE.js";import"./Trapezoid-DHbRiH3v.js";import"./Sector-B3eubpfo.js";import"./Curve-CxvlU3dw.js";import"./RegisterGraphicalItemId-DkNBI1Sa.js";import"./ErrorBarContext-BNplQJsE.js";import"./GraphicalItemClipPath-DikKl46E.js";import"./SetGraphicalItem-EApE1d4j.js";import"./getZIndexFromUnknown-DYvgE3wg.js";import"./graphicalItemSelectors-CG_Gq5pM.js";import"./index-Cm2tec04.js";import"./ChartSizeDimensions-56Hl6M0T.js";import"./OffsetShower-lCaRoXjj.js";import"./PlotAreaShower-Cn7QQOSS.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
