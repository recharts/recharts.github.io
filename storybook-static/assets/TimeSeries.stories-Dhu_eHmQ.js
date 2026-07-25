import{R as e}from"./iframe-B06eq_mz.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-D6J_FGoO.js";import{R as h}from"./zIndexSlice-DZ0Q8BZb.js";import{C as g}from"./ComposedChart-5JCLGpBO.js";import{L as x}from"./Line-C0wSPNkw.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-AtM_X8t9.js";import{T as V}from"./Tooltip-JRW53VRw.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-Ctfj6_7f.js";import"./Layer-XBL4Rxwk.js";import"./resolveDefaultProps-DtTSgpqn.js";import"./Text-C48XOo8y.js";import"./DOMUtils-CKORyHt8.js";import"./isWellBehavedNumber-DNvLaw60.js";import"./Label-DB6uwHR-.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-fQY0BiB2.js";import"./index-CYBZJJ0c.js";import"./index-CdiP4uoA.js";import"./types-CeAaMoTr.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-Hn5vD_Co.js";import"./throttle-DWlJTWeN.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-B5NLQSdK.js";import"./index-C5xxdLaM.js";import"./index-tCsMn5v1.js";import"./axisSelectors-B1LI97QB.js";import"./CartesianChart-W-yd_mhO.js";import"./chartDataContext-Sk-D_ye3.js";import"./CategoricalChart-OHkYYYd7.js";import"./Curve-Di_KaZv8.js";import"./step-Baald1Gr.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C0zIpN2y.js";import"./useAnimationId-Dv1roAA4.js";import"./ActivePoints-DN8GaRZ0.js";import"./Dot-DHSjX4gV.js";import"./RegisterGraphicalItemId-DDWl-fOV.js";import"./ErrorBarContext-BroTLh2z.js";import"./GraphicalItemClipPath-DtkF5P7U.js";import"./SetGraphicalItem-C5vdnQC6.js";import"./getRadiusAndStrokeWidthFromDot-YCuK-otx.js";import"./ActiveShapeUtils-B667TR48.js";import"./useElementOffset-BWoSWIsM.js";import"./uniqBy-CAuwwug3.js";import"./iteratee-CQFk0lUx.js";import"./Cross-XqcFIe7m.js";import"./Rectangle-D_tYzf8y.js";import"./util-Dxo8gN5i.js";import"./Sector-lZm3UC2o.js";const Yt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
