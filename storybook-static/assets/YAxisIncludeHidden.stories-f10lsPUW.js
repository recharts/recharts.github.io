import{r as f,R as e}from"./iframe-CZrGjRVd.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DvRRjJMV.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DVGip-HY.js";import{C as k}from"./ComposedChart-BOBoYmjb.js";import{X as K}from"./XAxis-CseioX8F.js";import{L as v}from"./Legend-DamiN0od.js";import{B as s}from"./Bar-BWIpsP2a.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-Bv2Blqsa.js";import"./Layer-CQqaCNmW.js";import"./resolveDefaultProps-DJ2k4-YE.js";import"./Text-BZ2aXp_V.js";import"./DOMUtils-DGi0GryR.js";import"./isWellBehavedNumber-sGwfAa8m.js";import"./Label-D0FS6r7s.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BIAG6lUs.js";import"./index-DAuCYBcx.js";import"./index-BqYtnYZK.js";import"./types-BqsVHy7N.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-BcK_sHSr.js";import"./throttle-iaCNi1Qj.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-Db3bv7S_.js";import"./index-BNgNXemJ.js";import"./index-DxrI-k1l.js";import"./axisSelectors-DxaBLx_c.js";import"./d3-scale-uXV0YxbH.js";import"./CartesianChart-D-HZeUFd.js";import"./chartDataContext-DtAKwxQ-.js";import"./CategoricalChart-BkyPecya.js";import"./Symbols-DfJNg9cL.js";import"./symbol-r9RnqTaM.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DOoW8cLw.js";import"./uniqBy-BSSdRogv.js";import"./iteratee-zsLWQ0iB.js";import"./tooltipContext-DkllZ6Kt.js";import"./AnimatedItems-CMzmfQX_.js";import"./useAnimationId-Dfan-wHL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B1vqueAd.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Cxg-zL3x.js";import"./RegisterGraphicalItemId-CHZ0a46K.js";import"./ErrorBarContext-putfb1U3.js";import"./GraphicalItemClipPath-CrMwIhJh.js";import"./SetGraphicalItem-DKI6WvVx.js";import"./getZIndexFromUnknown-gM7mqro_.js";import"./graphicalItemSelectors-BMQ0ncsa.js";const Ee={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const be=["WithIncludeHidden"];export{t as WithIncludeHidden,be as __namedExportsOrder,Ee as default};
