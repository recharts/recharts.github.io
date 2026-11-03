import{r as f,R as e}from"./iframe-m3pGEKfa.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-swa8vM-B.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CiEd_T_p.js";import{C as k}from"./ComposedChart-CsqQifeL.js";import{X as K}from"./XAxis-BaVE9EFQ.js";import{L as v}from"./Legend-CjIsYFiG.js";import{B as a}from"./Bar-B3S3Rk3l.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BWwlrPxZ.js";import"./Text-C8slSLt5.js";import"./resolveDefaultProps-1_D7OVbj.js";import"./DOMUtils-CgNaQgzY.js";import"./ZIndexLayer-dW6YEDVz.js";import"./index-Bk15LyvO.js";import"./index-B2FvYHPH.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BjeSYPTx.js";import"./throttle-C3qsSQmj.js";import"./axisSelectors-BuHzQOVj.js";import"./d3-scale-COa--qib.js";import"./CartesianAxis-4cS3xnQT.js";import"./Layer-CWJJdVGN.js";import"./types-NW0KOpFv.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-riwhMnsC.js";import"./index-CwIe0M5T.js";import"./index-CVYSO0b0.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-B1DLlNjF.js";import"./index-D_gkyxlq.js";import"./fillDefinitions-gM0_oynF.js";import"./CartesianChart-CVVFQDxq.js";import"./ZIndexPortal-CX0wxjxU.js";import"./CategoricalChart-Cbbud_Be.js";import"./Symbols-C8vox5bW.js";import"./symbol-QU-hqetJ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-ON2NhW56.js";import"./uniqBy-D3YFn-Gt.js";import"./iteratee-CrOyoWYC.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-DpjRmARQ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BcfuQLVE.js";import"./useAnimationId-CZ85B9in.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-hQzu6D3o.js";import"./tooltipContext-Bo8ESMO_.js";import"./dataEntryStyles-D1ArbIJ7.js";import"./ErrorBarContext-CKCqOaVD.js";import"./activeStyles-Bu9SIE65.js";import"./SetGraphicalItem-Cdf126o-.js";import"./getZIndexFromUnknown-BA4WQAi5.js";import"./useEffectiveDataKey-DabJGTLc.js";import"./omit-pPEclRFt.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
