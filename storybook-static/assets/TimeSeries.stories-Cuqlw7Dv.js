import{e}from"./iframe-oUl0Edsa.js";import{X as s}from"./XAxis-CkmpPqZg.js";import{R as y}from"./arrayEqualityCheck-DO0IznND.js";import{C as g}from"./ComposedChart-BhkpT6ho.js";import{L as x}from"./Line-WQvpZLVg.js";import{R as S}from"./RechartsHookInspector-DzCPY6-s.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-vJidlWzy.js";import{T as V}from"./Tooltip-CTmktQmX.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DHjsb2H9.js";import"./Layer-D8QuYoPE.js";import"./resolveDefaultProps-CAhGbC_6.js";import"./Text-CIurUiqp.js";import"./DOMUtils-QcPDFTXM.js";import"./Label-CQcshbP4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dv9xqvVt.js";import"./zIndexSlice-DaoY5asK.js";import"./immer-B4_TuAzJ.js";import"./types-DJAvwsGW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BwLnTfQZ.js";import"./hooks-BR4mxfYm.js";import"./axisSelectors-oQCI-_oE.js";import"./RechartsWrapper-hGE8ryIc.js";import"./index-BpdNigRW.js";import"./CartesianChart-QkTvUAzL.js";import"./chartDataContext-0PCCbTAT.js";import"./CategoricalChart-D3ZmkNqf.js";import"./ReactUtils-DtRK-XUg.js";import"./ActivePoints-BgKB9eRs.js";import"./Dot-BoytNhYo.js";import"./RegisterGraphicalItemId-D0Ds9Sqy.js";import"./ErrorBarContext-B_Z1VglQ.js";import"./GraphicalItemClipPath-BI0ffFR3.js";import"./SetGraphicalItem-DwmwyDT6.js";import"./useAnimationId-Ce3W7lPK.js";import"./getRadiusAndStrokeWidthFromDot-CThWr5VZ.js";import"./ActiveShapeUtils-CRXMg51J.js";import"./isPlainObject-kds9_JFm.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CWqU2ttX.js";import"./Trapezoid-D_tQTiyy.js";import"./Sector-CpUI0G8W.js";import"./Symbols-Byia_tNj.js";import"./symbol-BAzjQ5Pa.js";import"./step-DDhJKU_a.js";import"./Curve-DW9fdXku.js";import"./index-CrxHXiCq.js";import"./ChartSizeDimensions-BcXpSJ4G.js";import"./OffsetShower-CWs6Hx-m.js";import"./PlotAreaShower-CXnVCFpH.js";import"./useElementOffset-Dmkt4__O.js";import"./uniqBy-qeo26kI_.js";import"./iteratee-a1Bwo6uA.js";import"./Cross-BZQ8mnai.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const zt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,zt as __namedExportsOrder,jt as default};
