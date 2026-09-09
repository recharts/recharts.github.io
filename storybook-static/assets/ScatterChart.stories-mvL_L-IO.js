import{a as t}from"./iframe-3mrIZkil.js";import{g as p}from"./utils-ePvtT4un.js";import{S as n}from"./ScatterChartArgs-DVckGNEz.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as s}from"./ScatterChart-DsxWppF1.js";import{R as g}from"./zIndexSlice-L3ODJxG9.js";import{X as S}from"./XAxis-D6OSWIjP.js";import{Y as l}from"./YAxis-L6Kj6NBD.js";import{S as f}from"./Scatter-ce27HUAX.js";const h={argTypes:n,component:s},e={name:"Simple",render:m=>{const{data:i,...c}=m;return t.createElement(g,{width:"100%",height:400},t.createElement(s,{...c},t.createElement(S,{dataKey:"x"}),t.createElement(l,{dataKey:"y"}),t.createElement(f,{data:i})))},args:{...p(n),data:d,margin:{top:0,right:0,bottom:0,left:0}}},A=["API"];var r,a,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'Simple',
  render: (args: Args) => {
    const {
      data,
      ...rest
    } = args;
    return <ResponsiveContainer width="100%" height={400}>
        <ScatterChart {...rest}>
          <XAxis dataKey="x" />
          <YAxis dataKey="y" />
          <Scatter data={data} />
        </ScatterChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(ScatterChartArgs),
    data: coordinateData,
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  }
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const j=Object.freeze(Object.defineProperty({__proto__:null,API:e,__namedExportsOrder:A,default:h},Symbol.toStringTag,{value:"Module"}));export{e as A,j as C};
