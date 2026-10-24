import{r as f,a as e}from"./iframe-BPQD5v1C.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DB1Rqz7t.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DfAJCemw.js";import{C as k}from"./ComposedChart-X06hY2YO.js";import{X as K}from"./XAxis-Tde5CSPK.js";import{L as v}from"./Legend-Cr3itvfN.js";import{B as a}from"./Bar-D8PVLJDr.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-ZHQGm3zg.js";import"./Text-BGkNki-C.js";import"./resolveDefaultProps-upxpdF4p.js";import"./pageBackground-D3c52TtU.js";import"./isWellBehavedNumber-C9SB8Pzn.js";import"./useId-BM-r51MU.js";import"./useBackwardsCompatibleTheme-CpAd0K8h.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CyIARuTz.js";import"./index-Tuf2nq6s.js";import"./index-CXovuven.js";import"./dataEntryStyles-ClqDXIzp.js";import"./axisSelectors-CGRWr5-t.js";import"./throttle-DC1LNmjU.js";import"./d3-scale-BcAkS-dE.js";import"./CartesianAxis-kXg3v2M0.js";import"./Layer-B7QJBZyG.js";import"./types-BZME1xI7.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-Bnytbutp.js";import"./index-yHndqaau.js";import"./index-BNGNsbfJ.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Cu7qj_jR.js";import"./index-NpnztBAt.js";import"./CartesianChart-KMtmBeRo.js";import"./chartDataContext-BEETkhZS.js";import"./CategoricalChart-0gTJFCdb.js";import"./Symbols-ntiaWcY8.js";import"./symbol-DA7s8c0S.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DZ6cu7_x.js";import"./uniqBy-SNVjjllr.js";import"./iteratee-DN6PB4Ph.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-BpdD72zS.js";import"./useAnimationId-D3CbYaCo.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dvfx4mjp.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CD8s1oUL.js";import"./tooltipContext-89q0ReT3.js";import"./RegisterGraphicalItemId-C_N6zcJ6.js";import"./ErrorBarContext-Bd0khpbf.js";import"./SetGraphicalItem-DTtwRFlr.js";import"./getZIndexFromUnknown-CRPi8KYR.js";import"./useEffectiveDataKey-fbFyI37i.js";import"./omit-Ci_YbqS7.js";const we={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Oe=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Oe as __namedExportsOrder,we as default};
