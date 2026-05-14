import{r as f,e}from"./iframe-VKSiBROl.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-D4wJ7AYM.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-BB0HA1wg.js";import{C}from"./ComposedChart-DRm_ML7n.js";import{X as K}from"./XAxis-c6QFLIoy.js";import{L as v}from"./Legend-BQN-DIkP.js";import{B as s}from"./Bar-RoOBD0ue.js";import{R as x}from"./RechartsHookInspector-Bk4R2bPq.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CQXTkaRJ.js";import"./Layer-B5Q3HgyD.js";import"./resolveDefaultProps-NGq3vz57.js";import"./Text-DIF9PeK1.js";import"./DOMUtils-BrJ5g_oy.js";import"./Label-CFO9NE9M.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-VGyT3hqP.js";import"./zIndexSlice-DsFodTYX.js";import"./immer-CPTHWkkH.js";import"./types-DY717biQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-C68_OdSZ.js";import"./hooks-ZL9qLpLY.js";import"./axisSelectors-C7KTOZ5c.js";import"./d3-scale-BjDGrkpd.js";import"./RechartsWrapper-BaY8BgmV.js";import"./index-Z1DhqR18.js";import"./CartesianChart-o8YH5MQb.js";import"./chartDataContext-PCAfxVIZ.js";import"./CategoricalChart-ChVNCGBd.js";import"./Symbols-BAu9sMjT.js";import"./symbol-BFLJpHsz.js";import"./step-CaHu3Oa5.js";import"./useElementOffset-BAyi_0M5.js";import"./uniqBy-Mxm0Of_y.js";import"./iteratee-B8-MiZGG.js";import"./tooltipContext-CMgj9Eu9.js";import"./ReactUtils-DMEWBI26.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Bo5Iqhwn.js";import"./isPlainObject-BPft1dx1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CyZMqhQE.js";import"./useAnimationId-CxCW2e1W.js";import"./Trapezoid-YALS9NHT.js";import"./Sector-B_TUtlds.js";import"./Curve-yzuL5_Sr.js";import"./RegisterGraphicalItemId-0d646qS_.js";import"./ErrorBarContext-DHVubtbe.js";import"./GraphicalItemClipPath-m88eTwMP.js";import"./SetGraphicalItem-B6CVGLUm.js";import"./getZIndexFromUnknown-BY1D_rCU.js";import"./graphicalItemSelectors-BDTb2oUm.js";import"./index-FZYKqp9j.js";import"./ChartSizeDimensions-Ckuhl4O0.js";import"./OffsetShower-DRsWIFHd.js";import"./PlotAreaShower-DlV2zhuR.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
