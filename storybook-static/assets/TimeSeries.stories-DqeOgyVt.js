import{a as e}from"./iframe-SuqF0IOU.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DR2rtjC5.js";import{R as h}from"./zIndexSlice-DfamN9Zs.js";import{C as g}from"./ComposedChart-BtkawvAi.js";import{L as x}from"./Line-BjrkBSD6.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DnD8-5rl.js";import{T as V}from"./Tooltip-CA2lSlIq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-Bvk6yXFf.js";import"./Layer-CeZWaGzt.js";import"./resolveDefaultProps-7DzpjnqO.js";import"./Text-UuMUK1_u.js";import"./DOMUtils-DsJOOh9b.js";import"./isWellBehavedNumber-DJK-MsfJ.js";import"./useId-CsqHk6Y-.js";import"./useBackwardsCompatibleTheme-C6-DbdWl.js";import"./Label-9O6_T9C4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BN_mfTvc.js";import"./index-DY-qAKzO.js";import"./index-iK0jM_n6.js";import"./types-CS_OGYEB.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-DomOKpq5.js";import"./throttle-D6-FoWPM.js";import"./index-DLroYRR9.js";import"./index-VBcGpDGq.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-Bg2tG11C.js";import"./axisSelectors-DbgUQ8Ul.js";import"./index-DHZGQ52F.js";import"./CartesianChart-Cji0pvqd.js";import"./chartDataContext-B0QyEg6f.js";import"./CategoricalChart-D2xX8P6u.js";import"./Curve-E3qca46q.js";import"./step-Crr8VZH2.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DXL71NvC.js";import"./useAnimationId-ol_mxPID.js";import"./ActivePoints-BPtrfnyz.js";import"./Dot-Bait8-xr.js";import"./RegisterGraphicalItemId-BaNEX7Pr.js";import"./ErrorBarContext-BJEyAykc.js";import"./GraphicalItemClipPath-TmHiHpN1.js";import"./SetGraphicalItem-C7X7ybgb.js";import"./getRadiusAndStrokeWidthFromDot-Di11GS2z.js";import"./ActiveShapeUtils-DYWxkXZ9.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-C83rORx-.js";import"./uniqBy-BLInEi1g.js";import"./iteratee-DO-aH00D.js";import"./Cross-Du3GMiU6.js";import"./Rectangle-BY0JMHo5.js";import"./util-Dxo8gN5i.js";import"./Sector-BRdwZ5XO.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),F=r("%I %p"),R=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?F(t):b(t)<t?w(t)<t?R(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
