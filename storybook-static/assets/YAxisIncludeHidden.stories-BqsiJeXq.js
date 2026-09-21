import{r as f,a as e}from"./iframe-Br90fEj5.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DdYWFMJf.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DrwH1jfn.js";import{C as k}from"./ComposedChart-CHD1wSbm.js";import{X as K}from"./XAxis-DGeDsLv7.js";import{L as v}from"./Legend-CmqZY_Dx.js";import{B as a}from"./Bar-GfmQW5NV.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BXLkvKad.js";import"./Text-CYmtT5C7.js";import"./resolveDefaultProps-CJrJLZqi.js";import"./DOMUtils-DQ9aPFfp.js";import"./isWellBehavedNumber-Cp5K1yLZ.js";import"./useId-BR1QS50g.js";import"./useBackwardsCompatibleTheme-plzmt3ou.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-1J001_po.js";import"./index-xBkJObNc.js";import"./index-CFRdOJzL.js";import"./RechartsWrapper-CvaMq-_r.js";import"./axisSelectors-DfYTYXSn.js";import"./throttle-BtlLZFJi.js";import"./d3-scale-BG2Gp8e0.js";import"./index-DZZQKCIH.js";import"./index-DCsT-Kwq.js";import"./renderedTicksSlice-BJ1ZC3VH.js";import"./index-Ux_jSD8J.js";import"./CartesianAxis-De1AZe26.js";import"./Layer-vC2iAjl-.js";import"./types-BSZ9BCSJ.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DhQLJKy3.js";import"./chartDataContext-BJ8faAsD.js";import"./CategoricalChart-CWTSAfNd.js";import"./Symbols-hfwrgc-L.js";import"./symbol-CopPs-zj.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DmwgRP6o.js";import"./uniqBy-IvYMjdnd.js";import"./iteratee-CwMz1arw.js";import"./AnimatedItems-BDiDUfRj.js";import"./useAnimationId-CxK571sH.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BZ-ww0Nu.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DUSmPc-T.js";import"./tooltipContext-DlIzl-Vq.js";import"./RegisterGraphicalItemId-nSf1Px3R.js";import"./ErrorBarContext-DkLC3v4H.js";import"./GraphicalItemClipPath-BqifZnDC.js";import"./SetGraphicalItem-jDsg55aJ.js";import"./getZIndexFromUnknown-DInIr0St.js";import"./useGraphicalItemIdentity-BFkPxhIu.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
