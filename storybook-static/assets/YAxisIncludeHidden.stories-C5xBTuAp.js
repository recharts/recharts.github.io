import{r as f,a as e}from"./iframe-CNkb7Pxq.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Bv4i31q_.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-wl2-d2L7.js";import{C as k}from"./ComposedChart-C_D-eBru.js";import{X as K}from"./XAxis-Cy627mpO.js";import{L as v}from"./Legend-DTeqwQyH.js";import{B as a}from"./Bar-CPB1gSZi.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CgRMMdp1.js";import"./Text-DlOSKY9M.js";import"./resolveDefaultProps-LXGJzsB2.js";import"./DOMUtils-BQzfSO_G.js";import"./isWellBehavedNumber-cZPS57La.js";import"./useId-C8-4auv_.js";import"./useBackwardsCompatibleTheme-BLuzOGOd.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-V6Rl9PTE.js";import"./index-hgSNbj3_.js";import"./index-B0O4glZn.js";import"./RechartsWrapper-CE0LDB2v.js";import"./axisSelectors-D4hfpt9F.js";import"./throttle-D9QF5i1l.js";import"./d3-scale-hNSavMKY.js";import"./index-nHtRpei8.js";import"./index-BkiX-XNJ.js";import"./renderedTicksSlice-DjfT86KI.js";import"./index-D8V4aljY.js";import"./CartesianAxis-UL5z8CfQ.js";import"./Layer-BE_omtYE.js";import"./types-CyS4-dLr.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Dvu2owgZ.js";import"./chartDataContext-eHLxlpVB.js";import"./CategoricalChart-D2oZJ6cq.js";import"./Symbols-BQ5awPLZ.js";import"./symbol-CTLfMt-z.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BfGkUEya.js";import"./uniqBy-DrBmN39C.js";import"./iteratee-C4UAKD1z.js";import"./AnimatedItems-Dtnyeebx.js";import"./useAnimationId-BDE8tpoz.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-ByMG9fnn.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BcbuTBin.js";import"./tooltipContext-DOQY0hKI.js";import"./RegisterGraphicalItemId-BCZSUoIT.js";import"./ErrorBarContext-D2ajplsz.js";import"./GraphicalItemClipPath-CWom5q5K.js";import"./SetGraphicalItem-ChHo-vHf.js";import"./getZIndexFromUnknown-DZwDvBwe.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DaSL7yW8.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
