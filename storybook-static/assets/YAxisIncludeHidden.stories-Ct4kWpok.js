import{r as f,R as e}from"./iframe-B06eq_mz.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CIZVFNfM.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DZ0Q8BZb.js";import{C as k}from"./ComposedChart-5JCLGpBO.js";import{X as K}from"./XAxis-D6J_FGoO.js";import{L as v}from"./Legend-i3AyAOa9.js";import{B as s}from"./Bar-COjpy02_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-Ctfj6_7f.js";import"./Layer-XBL4Rxwk.js";import"./resolveDefaultProps-DtTSgpqn.js";import"./Text-C48XOo8y.js";import"./DOMUtils-CKORyHt8.js";import"./isWellBehavedNumber-DNvLaw60.js";import"./Label-DB6uwHR-.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-fQY0BiB2.js";import"./index-CYBZJJ0c.js";import"./index-CdiP4uoA.js";import"./types-CeAaMoTr.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-Hn5vD_Co.js";import"./throttle-DWlJTWeN.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-B5NLQSdK.js";import"./index-C5xxdLaM.js";import"./index-tCsMn5v1.js";import"./axisSelectors-B1LI97QB.js";import"./d3-scale-AtM_X8t9.js";import"./CartesianChart-W-yd_mhO.js";import"./chartDataContext-Sk-D_ye3.js";import"./CategoricalChart-OHkYYYd7.js";import"./Symbols-CaqXhdeL.js";import"./symbol-D6tYqKs9.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BWoSWIsM.js";import"./uniqBy-CAuwwug3.js";import"./iteratee-CQFk0lUx.js";import"./tooltipContext-wRzVS-RS.js";import"./AnimatedItems-C0zIpN2y.js";import"./useAnimationId-Dv1roAA4.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D_tYzf8y.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B667TR48.js";import"./RegisterGraphicalItemId-DDWl-fOV.js";import"./ErrorBarContext-BroTLh2z.js";import"./GraphicalItemClipPath-DtkF5P7U.js";import"./SetGraphicalItem-C5vdnQC6.js";import"./getZIndexFromUnknown-DmMzeTz5.js";import"./graphicalItemSelectors-DuBEe48Q.js";const Ee={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
