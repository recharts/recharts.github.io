import{r as n,R as e}from"./iframe-Ds1J5XKD.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as h}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as s}from"./LineChart-m26wqSLq.js";import{R as C}from"./zIndexSlice-UCyaaMGS.js";import{L as i}from"./Line-DuxS_s48.js";import{X as c}from"./XAxis-DoWvPRbH.js";import{T as d}from"./Tooltip-Db1eaiSZ.js";const E={argTypes:m,component:s},t={name:"Simple",render:a=>{const[f,r]=n.useState(!1),k=n.useCallback(()=>{r(!0)},[r]),L=n.useCallback(()=>{r(!1)},[r]);return e.createElement(C,{width:"100%",height:400},e.createElement(s,{...a},e.createElement(i,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...h(m),data:A}},o={render:a=>e.createElement("div",null,e.createElement(s,{...a,id:"BookOne",className:"BookOne"},e.createElement(i,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(c,{dataKey:"name"}),e.createElement(d,{active:!0})),e.createElement(s,{...a,id:"BookTwo",className:"BookTwo"},e.createElement(i,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(c,{dataKey:"name"}),e.createElement(d,null))),args:{...h(m),data:A,syncId:"example-syncId",width:400,height:400}};var l,p,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,v,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(v=o.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const T=["API","SynchronizedTooltip"],x=Object.freeze(Object.defineProperty({__proto__:null,API:t,SynchronizedTooltip:o,__namedExportsOrder:T,default:E},Symbol.toStringTag,{value:"Module"}));export{t as A,x as C};
