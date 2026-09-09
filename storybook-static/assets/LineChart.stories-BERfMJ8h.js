import{r as s,a as e}from"./iframe-3mrIZkil.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as h}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as r}from"./LineChart-B-ElDAMV.js";import{R as C}from"./zIndexSlice-L3ODJxG9.js";import{L as i}from"./Line-C5JoJcVf.js";import{X as c}from"./XAxis-D6OSWIjP.js";import{T as d}from"./Tooltip-DR2XYmSX.js";const E={argTypes:m,component:r},t={name:"Simple",render:a=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(r,{...a},e.createElement(i,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...h(m),data:A}},n={render:a=>e.createElement("div",null,e.createElement(r,{...a,id:"BookOne",className:"BookOne"},e.createElement(i,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(c,{dataKey:"name"}),e.createElement(d,{active:!0})),e.createElement(r,{...a,id:"BookTwo",className:"BookTwo"},e.createElement(i,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(c,{dataKey:"name"}),e.createElement(d,null))),args:{...h(m),data:A,syncId:"example-syncId",width:400,height:400}},T=["API","SynchronizedTooltip"];var l,p,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Simple',
  render: (args: Args) => {
    const [isHovered, setIsHovered] = useState(false);
    const onMouseEnter = useCallback(() => {
      setIsHovered(true);
    }, [setIsHovered]);
    const onMouseLeave = useCallback(() => {
      setIsHovered(false);
    }, [setIsHovered]);
    return <ResponsiveContainer width="100%" height={400}>
        <LineChart {...args}>
          <Line onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} dataKey="uv" strokeWidth={isHovered ? 8 : 4} animationDuration={5000} />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LineChartArgs),
    data: pageData
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,v,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <div>
        <LineChart {...args} id="BookOne" className="BookOne">
          <Line isAnimationActive={false} name="BookOne" type="monotone" dataKey="uv" stroke="#111" />
          <XAxis dataKey="name" />
          <Tooltip active />
        </LineChart>
        <LineChart {...args} id="BookTwo" className="BookTwo">
          <Line isAnimationActive={false} name="BookTwo" type="monotone" dataKey="uv" stroke="#ff7300" />
          <XAxis dataKey="name" />
          <Tooltip />
        </LineChart>
      </div>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LineChartArgs),
    data: pageData,
    syncId: 'example-syncId',
    width: 400,
    height: 400
  }
}`,...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const x=Object.freeze(Object.defineProperty({__proto__:null,API:t,SynchronizedTooltip:n,__namedExportsOrder:T,default:E},Symbol.toStringTag,{value:"Module"}));export{t as A,x as C};
