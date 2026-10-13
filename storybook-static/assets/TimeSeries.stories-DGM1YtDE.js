import{a as e}from"./iframe-_HfAVjpf.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BPfOL0q9.js";import{R as h}from"./zIndexSlice-BBpCjLLT.js";import{C as g}from"./ComposedChart-CDQm-nCO.js";import{L as x}from"./Line-Ds-1cdF_.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-B5oQCS6M.js";import{T as V}from"./Tooltip-CLDh_MwF.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-Chrpiu6A.js";import"./Layer-CacweoVl.js";import"./resolveDefaultProps-D7IrzSl6.js";import"./Text-WmpuDBGa.js";import"./pageBackground-CfQpba4h.js";import"./isWellBehavedNumber-DviO5hHm.js";import"./useId-B3zQHx_-.js";import"./useBackwardsCompatibleTheme-BJsCYBM6.js";import"./Label-CR54GT5X.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BrUuampD.js";import"./index-Cs9o5rrz.js";import"./index-CIyvwLXB.js";import"./types-BGnPJWtT.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-BNJCO30A.js";import"./throttle-DIGsG3tn.js";import"./index-ATsp3Ecu.js";import"./index-uZk8L8Al.js";import"./isBuffer-BG75eWKN.js";import"./axisSelectors-BggHFTDq.js";import"./RechartsWrapper-B3bcu809.js";import"./index-CIMOmY0A.js";import"./CartesianChart-De3rsgvn.js";import"./chartDataContext-Dyk7Yokq.js";import"./CategoricalChart-a-VUE4A0.js";import"./Curve-DpQ41Ei2.js";import"./step-Max-Kn08.js";import"./path-DyVhHtw_.js";import"./activeStyles-BdpGsFup.js";import"./useAnimationId-BhBKKO0p.js";import"./dataEntryStyles-Ucx7Hmoa.js";import"./ActivePoints-BDWzEukD.js";import"./Dot-fMnVn2BH.js";import"./ErrorBarContext-BDsk2xtE.js";import"./GraphicalItemClipPath-C1A7eGe6.js";import"./SetGraphicalItem-Cj-t7_ZW.js";import"./getRadiusAndStrokeWidthFromDot-BqM4XHNM.js";import"./ActiveShapeUtils-4DLJyt96.js";import"./useEffectiveDataKey-C_P0BrSn.js";import"./useElementOffset-B927Oy_l.js";import"./uniqBy-TLIumvzr.js";import"./iteratee-CTU_33At.js";import"./Cross-BzOjiYoL.js";import"./Rectangle-Cur1iMCQ.js";import"./util-Dxo8gN5i.js";import"./Sector-BC_dkoX6.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),F=r("%I %p"),R=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?F(t):b(t)<t?w(t)<t?R(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...StoryTemplate,
  parameters: {
    controls: {
      include: ['type', 'scale', 'domain', 'data']
    }
  },
  argTypes: {
    scale: {
      options: [undefined, 'auto', 'ordinal', 'time', 'point', 'linear'],
      control: {
        type: 'radio'
      }
    },
    type: {
      options: [undefined, 'category', 'number'],
      control: {
        type: 'radio'
      }
    }
  }
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...StoryTemplate,
  render: (args: Args) => {
    const timeValues = args.data.map(row => row.x);
    // The d3 scaleTime domain requires numeric values
    const numericValues = timeValues.map(time => time.valueOf());
    // With .nice() we extend the domain nicely.
    const timeScale = scaleTime().domain([Math.min(...numericValues), Math.max(...numericValues)]).nice();
    const xAxisArgs: XAxisProps = {
      domain: timeScale.domain().map(date => date.valueOf()),
      // @ts-expect-error we need to wrap the d3 scales in unified interface
      scale: timeScale,
      type: 'number',
      ticks: timeScale.ticks(5).map(date => date.valueOf()),
      tickFormatter: multiFormat
    };
    return <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={timeData} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}>
          <XAxis dataKey="x" {...args} {...xAxisArgs} />
          <Line dataKey="y" />
          <Tooltip />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
