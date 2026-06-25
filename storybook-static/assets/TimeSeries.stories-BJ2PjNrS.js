import{R as e}from"./iframe-_8NIVtea.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CXj9NRSO.js";import{R as h}from"./zIndexSlice-DHi0zTqt.js";import{C as g}from"./ComposedChart-BQ1MbbEq.js";import{L as x}from"./Line-CCJiTV3u.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CJIJLRQO.js";import{T as V}from"./Tooltip-Dikr2jjx.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BPH4xIrS.js";import"./CartesianAxis-BJg7B04w.js";import"./Layer-CvtIbty1.js";import"./resolveDefaultProps-DWak00ij.js";import"./Text-Dn8CYcWJ.js";import"./DOMUtils-DxzVORfb.js";import"./isWellBehavedNumber-C_LYkTy5.js";import"./Label-Bho1wkfx.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D0YIaJsD.js";import"./index-CMd9L2k1.js";import"./index-DP0Hg4Uq.js";import"./types-B89ht9kr.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-BSwSfTVH.js";import"./immer-DtWKh-al.js";import"./RechartsWrapper-Btm1Myi_.js";import"./index-C4r4CwZ3.js";import"./index-DXHSNIUu.js";import"./axisSelectors-B0oXaHqO.js";import"./CartesianChart-CyMc8rJv.js";import"./chartDataContext-CURMS4bg.js";import"./CategoricalChart-Cq5j6ts0.js";import"./Curve-7XStj8oj.js";import"./step-BedGzIKx.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BQ9vzcvs.js";import"./useAnimationId-D4zdEFfm.js";import"./ActivePoints-q58bNkUv.js";import"./Dot-BCuViEZD.js";import"./RegisterGraphicalItemId-IKsKal1D.js";import"./ErrorBarContext--tZY8j9K.js";import"./GraphicalItemClipPath-D7_UBVME.js";import"./SetGraphicalItem-rhq5lQpj.js";import"./getRadiusAndStrokeWidthFromDot-CVKaSFAr.js";import"./ActiveShapeUtils-CCiDKEDP.js";import"./useElementOffset-BZoIycEd.js";import"./uniqBy-Ckq71Btn.js";import"./iteratee-BauMAWQN.js";import"./Cross-BxD1Hd53.js";import"./Rectangle-DNmx5GJU.js";import"./util-Dxo8gN5i.js";import"./Sector-twgwZ-Ic.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
