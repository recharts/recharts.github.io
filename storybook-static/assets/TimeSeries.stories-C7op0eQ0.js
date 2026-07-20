import{R as e}from"./iframe-CZrGjRVd.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CseioX8F.js";import{R as h}from"./zIndexSlice-DVGip-HY.js";import{C as g}from"./ComposedChart-BOBoYmjb.js";import{L as x}from"./Line-v0oLTd-W.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-uXV0YxbH.js";import{T as V}from"./Tooltip-OX_sIqSh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-Bv2Blqsa.js";import"./Layer-CQqaCNmW.js";import"./resolveDefaultProps-DJ2k4-YE.js";import"./Text-BZ2aXp_V.js";import"./DOMUtils-DGi0GryR.js";import"./isWellBehavedNumber-sGwfAa8m.js";import"./Label-D0FS6r7s.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BIAG6lUs.js";import"./index-DAuCYBcx.js";import"./index-BqYtnYZK.js";import"./types-BqsVHy7N.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-BcK_sHSr.js";import"./throttle-iaCNi1Qj.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-Db3bv7S_.js";import"./index-BNgNXemJ.js";import"./index-DxrI-k1l.js";import"./axisSelectors-DxaBLx_c.js";import"./CartesianChart-D-HZeUFd.js";import"./chartDataContext-DtAKwxQ-.js";import"./CategoricalChart-BkyPecya.js";import"./Curve-DmlyDZC5.js";import"./step-1n_WS_bQ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CMzmfQX_.js";import"./useAnimationId-Dfan-wHL.js";import"./ActivePoints-DzdtVF-l.js";import"./Dot-B_n5UQyN.js";import"./RegisterGraphicalItemId-CHZ0a46K.js";import"./ErrorBarContext-putfb1U3.js";import"./GraphicalItemClipPath-CrMwIhJh.js";import"./SetGraphicalItem-DKI6WvVx.js";import"./getRadiusAndStrokeWidthFromDot-DAppAzWA.js";import"./ActiveShapeUtils-Cxg-zL3x.js";import"./useElementOffset-DOoW8cLw.js";import"./uniqBy-BSSdRogv.js";import"./iteratee-zsLWQ0iB.js";import"./Cross-W8LAXQo4.js";import"./Rectangle-B1vqueAd.js";import"./util-Dxo8gN5i.js";import"./Sector-B_S4VSs-.js";const Yt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const _t=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,_t as __namedExportsOrder,Yt as default};
