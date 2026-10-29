import{R as e}from"./iframe-jkWlGRao.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-B6q08DjL.js";import{R as h}from"./zIndexSlice-BJ_azL3V.js";import{C as g}from"./ComposedChart-B8s0ij_q.js";import{L as x}from"./Line-DGiR6I26.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-B7YXqmgC.js";import{T as V}from"./Tooltip-DbtTA0dS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-vLbE4lIP.js";import"./Layer-DGNDN2U_.js";import"./resolveDefaultProps-BJCkAT-c.js";import"./Text-CsCVaUmy.js";import"./pageBackground-B7N8_bCe.js";import"./ZIndexLayer-Cz3uOrDa.js";import"./index-CafydseE.js";import"./index-l6IDK4X2.js";import"./Label-C3QhHNfQ.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-vXDHLkfy.js";import"./throttle-BclcIM3t.js";import"./types-BwHsgyny.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-MrcmxqRq.js";import"./index-CT6JOO-H.js";import"./index-lkQeFUlC.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-B57c623a.js";import"./RechartsWrapper-CYIxj0Xh.js";import"./index-BIDLCapd.js";import"./CartesianChart-DNa8wuZh.js";import"./ZIndexPortal-PvuD5_Md.js";import"./CategoricalChart-BIz6y0X4.js";import"./Curve-Ch6LAljQ.js";import"./step-CscB7pF3.js";import"./path-DyVhHtw_.js";import"./LabelList-BN7i6-QW.js";import"./ActivePoints-DFqnjh3O.js";import"./Dot-xzrAS9lw.js";import"./activeStyles-EBU2roz0.js";import"./useAnimationId-CAUjhf76.js";import"./dataEntryStyles-ZVub37-6.js";import"./Symbols-wGnZNd4F.js";import"./symbol-BOEnk89t.js";import"./ErrorBarContext-CbF4zTiN.js";import"./SetGraphicalItem-BoktD6a2.js";import"./getRadiusAndStrokeWidthFromDot-Shmwq5gJ.js";import"./ActiveShapeUtils-KQXKVatm.js";import"./useEffectiveDataKey-CJQQkbyt.js";import"./useElementOffset-CZ3cyGKX.js";import"./uniqBy-C6LXGOxF.js";import"./iteratee-kDWc3wPx.js";import"./isArguments-yB-y1yaH.js";import"./Cross-ol7G7syJ.js";import"./Rectangle-CTBIyY9m.js";import"./util-Dxo8gN5i.js";import"./Sector-Mnux8RH-.js";const Pt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},jt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
