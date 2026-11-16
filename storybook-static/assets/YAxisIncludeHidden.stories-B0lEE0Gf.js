import{r as f,R as e}from"./iframe-DQXFH2fN.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-DxKBEaoV.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Dfa7PPo3.js";import{C as k}from"./ComposedChart-BBGwgebC.js";import{X as K}from"./XAxis-DeVff73G.js";import{L as v}from"./Legend-CQCF_VZ5.js";import{B as a}from"./Bar-BJN_27NM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CZ1SHjxx.js";import"./Text-DcdnatC4.js";import"./resolveDefaultProps-lSPh-jGh.js";import"./ZIndexLayer-D9yot1xi.js";import"./index-LVwk1DdF.js";import"./index-BledrYYe.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D125t7LL.js";import"./throttle-CBXVztye.js";import"./axisSelectors-DJbzZfhu.js";import"./d3-scale-XeOVwhgh.js";import"./CartesianAxis-FqFP5ld6.js";import"./Layer-B0dm1oba.js";import"./types-CN3-AGJF.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-CbHdjAK6.js";import"./index-CIcJU2zj.js";import"./index-Bra-aG0C.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-FcCSE1mG.js";import"./index-BsheJTgc.js";import"./fillDefinitions-KRhWslMp.js";import"./CartesianChart-DQGbpwTu.js";import"./chartDataContext-DJ78QJpQ.js";import"./CategoricalChart-t_6GcrEg.js";import"./Symbols-D7I-QI86.js";import"./symbol-8Qaz948q.js";import"./path-DyVhHtw_.js";import"./useElementOffset-jipf_0Cu.js";import"./uniqBy-Dc0JsRTv.js";import"./iteratee-DsTi5lqZ.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-CDXKXbSY.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-bqWLnmmt.js";import"./useAnimationId-BlZ_idpE.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CbcAbfiK.js";import"./tooltipContext-OBuBQcD_.js";import"./ErrorBarContext-CbK3TAVw.js";import"./activeStyles-DgOGJt0j.js";import"./SetGraphicalItem-CRYZ3Qzj.js";import"./getZIndexFromUnknown-GlkUZQS5.js";import"./useEffectiveDataKey-FX7cYr8p.js";import"./omit-C6Pq5iQk.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
