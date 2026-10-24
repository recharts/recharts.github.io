import{a as e}from"./iframe-CptpVVdK.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-r2oUn28C.js";import{R as h}from"./zIndexSlice-CAnxLxZK.js";import{C as g}from"./ComposedChart-Bnlr5v8S.js";import{L as x}from"./Line-TfJoKlI6.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DZZpobVW.js";import{T as V}from"./Tooltip-BGwmOjgF.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-CgAlW-mI.js";import"./Layer-DZV5gQWy.js";import"./resolveDefaultProps-Bdo80tkX.js";import"./Text-DTbKMiqG.js";import"./pageBackground-0u46-xLx.js";import"./isWellBehavedNumber-Cb3PSSsF.js";import"./useId-BHxaLpBq.js";import"./useBackwardsCompatibleTheme-Ck1iBTHP.js";import"./Label-DWXJ-Xrk.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DRWh5tG_.js";import"./index-BTwylabs.js";import"./index-alo09WMF.js";import"./dataEntryStyles-pGU1xid_.js";import"./types-LYqggaBA.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-Cw--JOgv.js";import"./throttle-BVKLcYc0.js";import"./index-Dqps63Gr.js";import"./index-CniHkqMt.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-DPTiSWkh.js";import"./RechartsWrapper-c3RFdf0m.js";import"./index-Bya_Ui15.js";import"./CartesianChart-kEptpjHt.js";import"./chartDataContext-YVUr32e2.js";import"./CategoricalChart-DUkp-alm.js";import"./Curve-DFA3txiV.js";import"./step-BF-v6b5j.js";import"./path-DyVhHtw_.js";import"./activeStyles-tsd2tFv6.js";import"./useAnimationId-CHix4qCt.js";import"./ActivePoints-E2x2ttJQ.js";import"./Dot-BPOiKA3s.js";import"./RegisterGraphicalItemId-BgCOPa3U.js";import"./ErrorBarContext-BZkeDBub.js";import"./SetGraphicalItem-CBYCujS3.js";import"./getRadiusAndStrokeWidthFromDot-LLnmfsQ1.js";import"./ActiveShapeUtils-D7m_xdxo.js";import"./useEffectiveDataKey-DVLIQZiI.js";import"./useElementOffset-B_-dcokC.js";import"./uniqBy-CvITKWaF.js";import"./iteratee-OHPjqRYA.js";import"./isArguments-yB-y1yaH.js";import"./Cross-vdYesahO.js";import"./Rectangle-DZ_c966o.js";import"./util-Dxo8gN5i.js";import"./Sector-DOX8-R8o.js";const Pt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),F=r("%I %p"),R=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?F(t):b(t)<t?w(t)<t?R(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},jt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,jt as __namedExportsOrder,Pt as default};
