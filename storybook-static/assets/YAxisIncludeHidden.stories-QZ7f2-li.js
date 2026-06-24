import{r as f,R as e}from"./iframe-GMBZ_Ugx.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-B3CJ0t9T.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CaGWsk0_.js";import{C as k}from"./ComposedChart-DtzDaUqm.js";import{X as K}from"./XAxis-CWBxARwY.js";import{L as v}from"./Legend-L5x1DYLc.js";import{B as s}from"./Bar-DW33fKra.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Gz1PRcGr.js";import"./CartesianAxis-DMU5FiQJ.js";import"./Layer-BXGTwaUB.js";import"./resolveDefaultProps-CaBwGHvy.js";import"./Text-xcPGheUs.js";import"./DOMUtils-BjtWwWtu.js";import"./isWellBehavedNumber-CHbHfbVW.js";import"./Label-BaqULLaE.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DxP6hcPK.js";import"./index-CWyz9jhc.js";import"./index-BJeMs6TD.js";import"./types-M4hw7OKT.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-CW6yCQrF.js";import"./immer-8AAf0mWE.js";import"./RechartsWrapper-B0SxcSOH.js";import"./index-B_gRMuPi.js";import"./index-Gz1Qo9An.js";import"./axisSelectors-CTNvdk-R.js";import"./d3-scale-DrE5OPOC.js";import"./CartesianChart-rtXvtu0b.js";import"./chartDataContext-CUGtjOSs.js";import"./CategoricalChart-CElM-v-_.js";import"./Symbols-DeSiMhF3.js";import"./symbol-Ds44gbWS.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CI5bYttM.js";import"./uniqBy-RjHfO3JH.js";import"./iteratee-CA-p00eZ.js";import"./tooltipContext-BN4wceTB.js";import"./AnimatedItems-NvoGhX2w.js";import"./useAnimationId-DgxmZKXq.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CaFvPD3t.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CK3PQT9Y.js";import"./RegisterGraphicalItemId-Dh_QLlB5.js";import"./ErrorBarContext-C1t_9iin.js";import"./GraphicalItemClipPath-DlEa2W6_.js";import"./SetGraphicalItem-CZxAdJP0.js";import"./getZIndexFromUnknown-DC9MddM9.js";import"./graphicalItemSelectors-D3zVZ2eQ.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
