import{r as f,R as e}from"./iframe-Ds1J5XKD.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-eP85-8SJ.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-UCyaaMGS.js";import{C as k}from"./ComposedChart-CRkbKJM2.js";import{X as K}from"./XAxis-DoWvPRbH.js";import{L as v}from"./Legend-Dv1icE5q.js";import{B as s}from"./Bar-ofABc7QD.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-CDp_ZXfj.js";import"./Layer-nVED5kUO.js";import"./resolveDefaultProps-Do401MpT.js";import"./Text-jdQ0MfG2.js";import"./DOMUtils-DsCGVJ9c.js";import"./isWellBehavedNumber-Dz72kwHe.js";import"./Label-CNOb6BUs.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DZsY-UK0.js";import"./index-Co2IbVNM.js";import"./index-CzrGLoIQ.js";import"./types-BQazP4PY.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-kb1cJng-.js";import"./throttle-BH_VG--i.js";import"./RechartsWrapper-BAOT1HW_.js";import"./index-D20-MSnL.js";import"./index-BzzxIcBT.js";import"./axisSelectors-Tr36h9al.js";import"./d3-scale-C3U5gPbW.js";import"./CartesianChart-DOdhq5wJ.js";import"./chartDataContext-BhVZbVOm.js";import"./CategoricalChart-wjwwJKX3.js";import"./Symbols-DTqalTwC.js";import"./symbol-IDnm7d1z.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D0hlMEgK.js";import"./uniqBy-Cb9ErWqE.js";import"./iteratee-DkjsJILk.js";import"./tooltipContext-Ch7iJ--E.js";import"./AnimatedItems-D70ai7P5.js";import"./useAnimationId-CHjE-uiV.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DDz0k9b7.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CcQaIRSL.js";import"./RegisterGraphicalItemId-i_epzSee.js";import"./ErrorBarContext-aJ-QmRys.js";import"./GraphicalItemClipPath-BO5z_Dot.js";import"./SetGraphicalItem-qVzcGAlb.js";import"./getZIndexFromUnknown---P8p7Wt.js";import"./graphicalItemSelectors-DJy1cWpY.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ee=["WithIncludeHidden"];export{t as WithIncludeHidden,Ee as __namedExportsOrder,xe as default};
