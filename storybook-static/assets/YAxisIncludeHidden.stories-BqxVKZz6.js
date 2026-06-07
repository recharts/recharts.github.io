import{r as f,R as e}from"./iframe-CIqcR0nr.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-Cp6hJTBs.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BaZcNNNO.js";import{C as k}from"./ComposedChart-bqMlW8-b.js";import{X as K}from"./XAxis-sUTGKqnh.js";import{L as v}from"./Legend-By7FykyZ.js";import{B as s}from"./Bar-BJLp41mc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CuhoYgBd.js";import"./CartesianAxis-wzAvkxKf.js";import"./Layer-Cz--vJfn.js";import"./resolveDefaultProps-X_RPaIii.js";import"./Text-CimnMCMD.js";import"./DOMUtils-DMPXj1nB.js";import"./isWellBehavedNumber-CN_oQGvc.js";import"./Label-CuY-JOss.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B9KPNn2Z.js";import"./index-CI5kewFp.js";import"./index-D3_7IQAj.js";import"./types-3DMlx_O9.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-uyZ8N1qc.js";import"./immer-DOlCD6_E.js";import"./RechartsWrapper-CO7Bj1Ew.js";import"./index-BRQXzpqS.js";import"./index-iWp3ygHn.js";import"./axisSelectors-Dp0MorEj.js";import"./d3-scale-BVoLe-e3.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BiFR7vHR.js";import"./chartDataContext-BkIJbLAm.js";import"./CategoricalChart-OQdWBIBS.js";import"./Symbols-H-5RG3h3.js";import"./symbol-DI1d6Mel.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DG3jpNvQ.js";import"./uniqBy-BGYajFOV.js";import"./iteratee-DoUmNYIo.js";import"./tooltipContext-ORHnKUld.js";import"./AnimatedItems-5cW9jO0l.js";import"./useAnimationId-BJaGTs_s.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BMn1e7Xa.js";import"./ActiveShapeUtils-BLEsVfwW.js";import"./RegisterGraphicalItemId-BxGDByrp.js";import"./ErrorBarContext-D7ZmPrb-.js";import"./GraphicalItemClipPath-CMCMKENx.js";import"./SetGraphicalItem-C8JcvXzc.js";import"./getZIndexFromUnknown-2HE1KQzT.js";import"./graphicalItemSelectors-_qDBExF4.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
