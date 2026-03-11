import{r as f,e}from"./iframe-eaOsasXA.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis-D0SSpyRh.js";import{R as A}from"./arrayEqualityCheck-CMs0gYkZ.js";import{C}from"./ComposedChart-DAn4V3cy.js";import{X as K}from"./XAxis-3ftlLggt.js";import{L as v}from"./Legend-Zi18hU_C.js";import{B as a}from"./Bar-DagNaEL4.js";import{R as x}from"./RechartsHookInspector-CfQxcoqC.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-QrZ9YuOP.js";import"./Layer-CEQ15rDn.js";import"./resolveDefaultProps-BRN_chMz.js";import"./Text-CS5oLB7f.js";import"./DOMUtils-DKDW8odg.js";import"./Label-CM17nvk9.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-4Bmx0L-z.js";import"./zIndexSlice-CQVRJFSN.js";import"./immer-h0oz4gDz.js";import"./types-DVEQRe7O.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-HUT3i4LQ.js";import"./hooks-DkQXEwbK.js";import"./axisSelectors-rZ1oBaef.js";import"./d3-scale-fyi29fM7.js";import"./RechartsWrapper-kQIwCL0D.js";import"./index-CBq7QNMe.js";import"./CartesianChart-DqLib-3F.js";import"./chartDataContext-BZaY1x-g.js";import"./CategoricalChart-BHzek6ba.js";import"./Symbols-DwawNnsL.js";import"./symbol-DkR6dB45.js";import"./step-wTrvujLP.js";import"./useElementOffset-CA1reWi7.js";import"./uniqBy-DxeT86xP.js";import"./iteratee-GUobkNTQ.js";import"./tooltipContext-Cj5Ji5q3.js";import"./ReactUtils-rQN1ow78.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DuB5RKi8.js";import"./isPlainObject-DOptfpMt.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DCXniG-Q.js";import"./useAnimationId-Cipx0nDt.js";import"./Trapezoid-B7u96FyR.js";import"./Sector-DlrpmWZs.js";import"./Curve-BpLwOdP7.js";import"./RegisterGraphicalItemId-1T1LHaRb.js";import"./ErrorBarContext-BRJpaXpn.js";import"./GraphicalItemClipPath-DHbALYaQ.js";import"./SetGraphicalItem-CI6Uk2ug.js";import"./getZIndexFromUnknown-BdCPIBaq.js";import"./graphicalItemSelectors-PhT4ox6_.js";import"./index-D4X9rB5g.js";import"./ChartSizeDimensions-DQ43uIY8.js";import"./OffsetShower-Y12_Isjl.js";import"./PlotAreaShower-ND2vevs1.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
