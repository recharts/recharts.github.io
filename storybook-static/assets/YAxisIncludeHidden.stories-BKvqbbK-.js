import{r as f,a as e}from"./iframe-3mrIZkil.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-L6Kj6NBD.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-L3ODJxG9.js";import{C as k}from"./ComposedChart-B1NQbFGd.js";import{X as K}from"./XAxis-D6OSWIjP.js";import{L as v}from"./Legend-7PHxIgr_.js";import{B as a}from"./Bar-BMSFcvTO.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BIqKgU55.js";import"./Text-DUYy6Shz.js";import"./resolveDefaultProps-i-Y4kJTh.js";import"./DOMUtils-CXxLAhGm.js";import"./isWellBehavedNumber-ZyDhg4rS.js";import"./useId-Cxwt81yN.js";import"./useBackwardsCompatibleTheme-lR8vi8zs.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D4cc4mD4.js";import"./index-BXM7Ne4y.js";import"./index-CDwIhtzp.js";import"./RechartsWrapper-DwVI4RN7.js";import"./axisSelectors-DAOLJeWY.js";import"./throttle-rESuvk1I.js";import"./d3-scale-CguR2U2N.js";import"./index-BtaPmQxv.js";import"./index-BdkN9O5O.js";import"./renderedTicksSlice-DYEa3gne.js";import"./index-pFwFQ5O8.js";import"./CartesianAxis-BlnQQ3GL.js";import"./Layer-DjZWmALl.js";import"./types-8JRxRnLp.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CUvaXipt.js";import"./chartDataContext-FTM0Yeif.js";import"./CategoricalChart-D95OMo3E.js";import"./Symbols-B-x4p4sy.js";import"./symbol-Dr6L5N19.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DGkGm79j.js";import"./uniqBy-CSyaLent.js";import"./iteratee-yW488fbm.js";import"./AnimatedItems-DhXJ9Je_.js";import"./useAnimationId-BnnXfXw0.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BDa16x25.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BBpy3JCJ.js";import"./tooltipContext-DH0INPqo.js";import"./RegisterGraphicalItemId-BDB0ngzS.js";import"./ErrorBarContext-NAHggWz8.js";import"./GraphicalItemClipPath-Bb5lUrgq.js";import"./SetGraphicalItem-9-RZ0mcl.js";import"./getZIndexFromUnknown-BiXUutbq.js";import"./useGraphicalItemIdentity-BcKg6UBn.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
