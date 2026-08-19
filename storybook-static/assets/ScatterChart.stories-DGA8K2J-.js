import{R as t}from"./iframe-W15_yS8y.js";import{g as p}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as m}from"./ScatterChart-B7qkcauQ.js";import{R as g}from"./zIndexSlice-KjfXmz6K.js";import{X as S}from"./XAxis-8Au-a6fB.js";import{Y as l}from"./YAxis-CxEXFC67.js";import{S as f}from"./Scatter-BfycTJbA.js";const h={argTypes:s,component:m},e={name:"Simple",render:n=>{const{data:i,...c}=n;return t.createElement(g,{width:"100%",height:400},t.createElement(m,{...c},t.createElement(S,{dataKey:"x"}),t.createElement(l,{dataKey:"y"}),t.createElement(f,{data:i})))},args:{...p(s),data:d,margin:{top:0,right:0,bottom:0,left:0}}};var r,a,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const A=["API"],j=Object.freeze(Object.defineProperty({__proto__:null,API:e,__namedExportsOrder:A,default:h},Symbol.toStringTag,{value:"Module"}));export{e as A,j as C};
