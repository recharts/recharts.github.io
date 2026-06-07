import{R as e}from"./iframe-CIqcR0nr.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-sUTGKqnh.js";import{R as h}from"./zIndexSlice-BaZcNNNO.js";import{C as g}from"./ComposedChart-bqMlW8-b.js";import{L as x}from"./Line-BX67Nlm1.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BVoLe-e3.js";import{T as V}from"./Tooltip-CAkkWeYW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CuhoYgBd.js";import"./CartesianAxis-wzAvkxKf.js";import"./Layer-Cz--vJfn.js";import"./resolveDefaultProps-X_RPaIii.js";import"./Text-CimnMCMD.js";import"./DOMUtils-DMPXj1nB.js";import"./isWellBehavedNumber-CN_oQGvc.js";import"./Label-CuY-JOss.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B9KPNn2Z.js";import"./index-CI5kewFp.js";import"./index-D3_7IQAj.js";import"./types-3DMlx_O9.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-uyZ8N1qc.js";import"./immer-DOlCD6_E.js";import"./RechartsWrapper-CO7Bj1Ew.js";import"./index-BRQXzpqS.js";import"./index-iWp3ygHn.js";import"./axisSelectors-Dp0MorEj.js";import"./CartesianChart-BiFR7vHR.js";import"./chartDataContext-BkIJbLAm.js";import"./CategoricalChart-OQdWBIBS.js";import"./Curve-DrcpD24k.js";import"./step-DBJepXtz.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-5cW9jO0l.js";import"./useAnimationId-BJaGTs_s.js";import"./string-B6fdYHAA.js";import"./ActivePoints-B5L26l-l.js";import"./Dot-C6Y9kE6a.js";import"./RegisterGraphicalItemId-BxGDByrp.js";import"./ErrorBarContext-D7ZmPrb-.js";import"./GraphicalItemClipPath-CMCMKENx.js";import"./SetGraphicalItem-C8JcvXzc.js";import"./getRadiusAndStrokeWidthFromDot-D2ZfklZg.js";import"./ActiveShapeUtils-BLEsVfwW.js";import"./useElementOffset-DG3jpNvQ.js";import"./uniqBy-BGYajFOV.js";import"./iteratee-DoUmNYIo.js";import"./Cross-CEVyxNrn.js";import"./Rectangle-BMn1e7Xa.js";import"./Sector-ILL068cZ.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Yt=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Yt as __namedExportsOrder,Bt as default};
