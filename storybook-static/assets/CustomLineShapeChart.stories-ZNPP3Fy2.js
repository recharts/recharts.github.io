import{R as t}from"./iframe-DQXFH2fN.js";import{R as D,l as p}from"./zIndexSlice-Dfa7PPo3.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-XIGUxCWL.js";import{C as M}from"./CartesianGrid-CvQm-C4w.js";import{X as $}from"./XAxis-DeVff73G.js";import{Y as I}from"./YAxis-DxKBEaoV.js";import{L as O}from"./Legend-CQCF_VZ5.js";import{T as W}from"./Tooltip-INA8wN3X.js";import{L as f}from"./Line-CSVCJdJ6.js";import{C as X}from"./Curve-Dawv8-Of.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-lSPh-jGh.js";import"./throttle-CBXVztye.js";import"./index-LVwk1DdF.js";import"./index-BledrYYe.js";import"./RechartsWrapper-FcCSE1mG.js";import"./axisSelectors-DJbzZfhu.js";import"./polarAxisSelectors-D125t7LL.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-XeOVwhgh.js";import"./index-CIcJU2zj.js";import"./index-Bra-aG0C.js";import"./renderedTicksSlice-CbHdjAK6.js";import"./index-BsheJTgc.js";import"./fillDefinitions-KRhWslMp.js";import"./CartesianChart-DQGbpwTu.js";import"./chartDataContext-DJ78QJpQ.js";import"./CategoricalChart-t_6GcrEg.js";import"./CartesianAxis-FqFP5ld6.js";import"./Layer-B0dm1oba.js";import"./Text-DcdnatC4.js";import"./ZIndexLayer-D9yot1xi.js";import"./Label-CZ1SHjxx.js";import"./types-CN3-AGJF.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-D7I-QI86.js";import"./symbol-8Qaz948q.js";import"./path-DyVhHtw_.js";import"./useElementOffset-jipf_0Cu.js";import"./uniqBy-Dc0JsRTv.js";import"./iteratee-DsTi5lqZ.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-BlZ_idpE.js";import"./Cross-BsiALtxc.js";import"./Rectangle-bqWLnmmt.js";import"./util-Dxo8gN5i.js";import"./Sector-D4nbjpRD.js";import"./dataEntryStyles-CDXKXbSY.js";import"./ActivePoints-CfjMsAgl.js";import"./Dot-CC2Uce3B.js";import"./activeStyles-DgOGJt0j.js";import"./ErrorBarContext-CbK3TAVw.js";import"./SetGraphicalItem-CRYZ3Qzj.js";import"./getRadiusAndStrokeWidthFromDot-CxI0qt08.js";import"./ActiveShapeUtils-CbcAbfiK.js";import"./useEffectiveDataKey-FX7cYr8p.js";import"./step-Bu-hwkdA.js";const zt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Ht=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <LineChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Tooltip cursor={{
          stroke: 'gold',
          strokeWidth: 2
        }} defaultIndex={3} />
          <Line type="linear" dataKey="pv" stroke="#8884d8" activeDot={{
          r: 8
        }} shape={(payload: CurveProps) => <CustomLineShapeProps {...payload} tick={<circle r={5} fill="currentColor" />} />} />
          <Line type="linear" dataKey="uv" stroke="#82ca9d" shape={(payload: CurveProps) => <CustomLineShapeProps {...payload} tick={<rect x={-5} y={-5} width={10} height={10} fill="currentColor" />} />} />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LineChartArgs),
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }
  }
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Ht as __namedExportsOrder,zt as default};
