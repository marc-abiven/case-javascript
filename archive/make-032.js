function abs(x)
{
 check(is_num,x)
 return Math.abs(x)
}
function add(x,y,...z)
{
 check(is_num,x)
 check(is_num,y)
 const _=x+y
 {
  const r=_
  {
   if(is_full(z))
   {
    return add(r,...z)
   }
   return (typeof(r)==="function")?r():r
  }
 }
}
function and(x,y,...z)
{
 check(is_bool,x)
 check(is_bool,y)
 const _=x&&y
 {
  const r=_
  {
   if(is_full(z))
   {
    return and(r,...z)
   }
   return (typeof(r)==="function")?r():r
  }
 }
}
function angle(x)
{
 check(is_str,x)
 return concat("<",x,">")
}
function app_decompile(x)
{
 check(is_str,x)
 function filter(x)
 {
  check(is_arr,x)
  const _=[]
  {
   const r=_
   {
    const _="{[]()=:,"
    {
     const exclude=_
     {
      for(const v of (typeof(x)==="function")?x():x)
      {
       if(is_trivia(v))
       {
        continue
       }
       if(contain(exclude,v))
       {
        continue
       }
       if(same(v,"..."))
       {
        continue
       }
       push(r,v)
      }
      return (typeof(r)==="function")?r():r
     }
    }
   }
  }
 }
 function rewrite_gn(x)
 {
  check(is_arr,x)
  if(!(is_many(x)))
  {
   return (typeof(x)==="function")?x():x
  }
  const _=front(x)
  {
   const s=_
   {
    if(same(s,"function"))
    {
     const _=at(x,1)
     {
      const s=_
      {
       if(same(s,"*"))
       {
        const _=slice(x,2)
        {
         const r=_
         {
          unshift(r,"gn")
          return (typeof(r)==="function")?r():r
         }
        }
       }
      }
     }
    }
    else if(same(s,"yield"))
    {
     const _=at(x,1)
     {
      const s=_
      {
       if(same(s,"*"))
       {
        const _=slice(x,2)
        {
         const r=_
         {
          unshift(r,"run")
          return (typeof(r)==="function")?r():r
         }
        }
       }
      }
     }
    }
    else if(gt(x.length,4))
    {
     const _=at(x,2)
     {
      const s=_
      {
       if(same(s,"yield"))
       {
        const _=at(x,3)
        {
         const s=_
         {
          if(same(s,"*"))
          {
           const _=dup(x)
           {
            const r=_
            {
             remove(r,2,2)
             insert(r,2,"run")
             return (typeof(r)==="function")?r():r
            }
           }
          }
         }
        }
       }
      }
     }
    }
    return (typeof(x)==="function")?x():x
   }
  }
 }
 function rewrite_end(x)
 {
  check(is_arr,x)
  if(is_empty(x))
  {
   return (typeof(x)==="function")?x():x
  }
  if(is_many(x))
  {
   return (typeof(x)==="function")?x():x
  }
  const _=[]
  {
   const r=_
   {
    const _=front(x)
    {
     const s=_
     {
      if(different(s,"}"))
      {
       return (typeof(x)==="function")?x():x
      }
      push(r,"end")
      return (typeof(r)==="function")?r():r
     }
    }
   }
  }
 }
 function rewrite_keyword(x)
 {
  check(is_arr,x)
  const _=[]
  {
   const r=_
   {
    for(const v of (typeof(x)==="function")?x():x)
    {
     if(same(v,"function"))
     {
      push(r,"fn")
     }
     else if(same(v,"const"))
     {
      push(r,"let")
     }
     else if(same(v,"let"))
     {
      push(r,"var")
     }
     else if(same(v,"return"))
     {
      push(r,"ret")
     }
     else
     {
      push(r,v)
     }
    }
    return (typeof(r)==="function")?r():r
   }
  }
 }
 function rewrite_call(x)
 {
  if(lt(x.length,2))
  {
   return (typeof(x)==="function")?x():x
  }
  if(!(contain(x,"?")))
  {
   return (typeof(x)==="function")?x():x
  }
  const _=front(x)
  {
   const s=_
   {
    if(same(s,"let"))
    {
     const _=slice_l(x,2)
     {
      const r=_
      {
       const _=back(x)
       {
        const s=_
        {
         push(r,s)
         return (typeof(r)==="function")?r():r
        }
       }
      }
     }
    }
    else
    {
     const _=slice_l(x,1)
     {
      const r=_
      {
       const _=back(x)
       {
        const s=_
        {
         push(r,s)
         return (typeof(r)==="function")?r():r
        }
       }
      }
     }
    }
    return (typeof(x)==="function")?x():x
   }
  }
 }
 function is_lexem(x)
 {
  if(!(is_str(x)))
  {
   return false
  }
  if(is_token(x))
  {
   return true
  }
  if(same(x,"..."))
  {
   return true
  }
  return false
 }
 const _=str_indent(x)
 {
  const indent=_
  {
   const _=repeat(" ",indent)
   {
    const indent=_
    {
     const _=scan(x,is_lexem)
     {
      const a=_
      {
       const _=filter(a)
       {
        const a=_
        {
         const _=reject(a,is_empty)
         {
          const a=_
          {
           const _=rewrite_gn(a)
           {
            const a=_
            {
             const _=rewrite_end(a)
             {
              const a=_
              {
               const _=rewrite_keyword(a)
               {
                const a=_
                {
                 const _=rewrite_call(a)
                 {
                  const a=_
                  {
                   const _=join(a," ")
                   {
                    const s=_
                    {
                     if(is_empty(s))
                     {
                      return (typeof(s)==="function")?s():s
                     }
                     return concat(indent,s)
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function app_name()
{
 if((typeof(is_node)==="function")?is_node():is_node)
 {
  const _=at(process.argv,1)
  {
   const file=_
   {
    const _=path_file(file)
    {
     const file=_
     {
      return replace(file,".","-")
     }
    }
   }
  }
 }
 else if((typeof(is_browser)==="function")?is_browser():is_browser)
 {
  const _=(typeof(location.hostname)==="function")?location.hostname():location.hostname
  {
   let file=_
   {
    const _=path_base(file)
    {
     const base=_
     {
      if(is_ip(base))
      {
       return replace(base,".","-")
      }
      const _=path_file(base)
      {
       const file=_
       {
        return replace(file,".","-")
       }
      }
     }
    }
   }
  }
 }
 else
 {
  stop()
 }
}
function app_parse(x,y)
{
 check(is_str,x)
 if(is_undef(y))
 {
  return parse(x,scan)
 }
 check(is_fn,y)
 function tokenize(x,y)
 {
  check(is_str,x)
  check(is_fn,y)
  const _=[]
  {
   const r=_
   {
    for(const v of split(x))
    {
     const _=str_indent(v)
     {
      const indent=_
      {
       const _=y(v)
       {
        const parameters=_
        {
         const _=reject(parameters,is_trivia)
         {
          const parameters=_
          {
           if(is_empty(parameters))
           {
            continue
           }
           const _=shift(parameters)
           {
            const operator=_
            {
             if(same(operator,"end"))
             {
              if(is_empty(parameters))
              {
               continue
              }
             }
             const _=[]
             {
              const children=_
              {
               const _={indent,operator,parameters,children}
               {
                const node=_
                {
                 push(r,node)
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
    return (typeof(r)==="function")?r():r
   }
  }
 }
 function fold(x)
 {
  check(is_arr,x)
  const _=[]
  {
   const r=_
   {
    const _=dup(x)
    {
     const lines=_
     {
      while(is_full(lines))
      {
       const _=visit(lines)
       {
        const o=_
        {
         push(r,o)
        }
       }
      }
      return (typeof(r)==="function")?r():r
     }
    }
   }
  }
 }
 function visit(x)
 {
  check(is_arr,x)
  const _=shift(x)
  {
   const parent=_
   {
    const _=(typeof(parent.indent)==="function")?parent.indent():parent.indent
    {
     const indent=_
     {
      const _=[]
      {
       const descendants=_
       {
        while(is_full(x))
        {
         const _=front(x)
         {
          const o=_
          {
           if(gt(o.indent,indent))
           {
            shift(x)
            push(descendants,o)
           }
           else
           {
            break
           }
          }
         }
        }
        const _=[]
        {
         const children=_
         {
          while(is_full(descendants))
          {
           const _=visit(descendants)
           {
            const o=_
            {
             push(children,o)
            }
           }
          }
          const _=(typeof(parent.operator)==="function")?parent.operator():parent.operator
          {
           const operator=_
           {
            const _=(typeof(parent.parameters)==="function")?parent.parameters():parent.parameters
            {
             const parameters=_
             {
              return {operator,parameters,children}
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
 const _=tokenize(x,y)
 {
  const r=_
  {
   const _=fold(r)
   {
    const r=_
    {
     return (typeof(r)==="function")?r():r
    }
   }
  }
 }
}
function append(x,y)
{
 check(is_arr,x)
 check(is_arr,y)
 for(const v of (typeof(y)==="function")?y():y)
 {
  push(x,v)
 }
}
function arr(...x)
{
 return [...x]
}
function asc(x)
{
 check(is_char,x)
 return x.charCodeAt(0)
}
function at(x,y,z)
{
 check(is_vec,x)
 check(is_uint,y)
 const _=dec(x.length)
 {
  const n=_
  {
   check(between,y,0,n)
   if(is_undef(z))
   {
    return x[y]
   }
   x[y]=z
  }
 }
}
function back(x,y,z)
{
 check(is_vec,x)
 if(is_undef(y))
 {
  return back(x,0)
 }
 check(is_uint,y)
 const _=sub(x.length,y)
 {
  const n=_
  {
   const _=dec(n)
   {
    const n=_
    {
     if(is_undef(z))
     {
      return at(x,n)
     }
     at(x,n,z)
    }
   }
  }
 }
}
function base36_decode(x)
{
 check(is_str,x)
 const _=""
 {
  let r=_
  {
   const _=explode(x)
   {
    const a=_
    {
     while(is_full(a))
     {
      const _=slice_l(a,4)
      {
       const a2=_
       {
        shift(a,4)
        const _=implode(a2)
        {
         const s=_
         {
          const _=Number.parseInt(s,36)
          {
           const n=_
           {
            const _=mul(256,256)
            {
             const range=_
             {
              check(is_uint,n)
              check(lte,n,range)
              const _=chr(n)
              {
               const c=_
               {
                r=concat(r,c)
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
     return (typeof(r)==="function")?r():r
    }
   }
  }
 }
}
function base36_encode(x)
{
 check(is_str,x)
 const _=""
 {
  let r=_
  {
   for(const v of (typeof(x)==="function")?x():x)
   {
    const _=asc(v)
    {
     const s=_
     {
      const _=to_base36(s)
      {
       const s=_
       {
        const _=pad_l(s,"0",4)
        {
         const s=_
         {
          r=concat(r,s)
         }
        }
       }
      }
     }
    }
   }
   return (typeof(r)==="function")?r():r
  }
 }
}
function between(x,y,z)
{
 check(is_num,x)
 check(is_num,y)
 check(is_num,z)
 check(gte,z,y)
 if(lt(x,y))
 {
  return false
 }
 if(gt(x,z))
 {
  return false
 }
 return true
}
function brace(x)
{
 check(is_str,x)
 return concat("{",x,"}")
}
function bracket(x)
{
 check(is_str,x)
 return concat("[",x,"]")
}
function byte_size(x)
{
 check(is_uint,x)
 check(gte,x,0)
 const _=1024
 {
  const kb=_
  {
   const _=mul(1024,kb)
   {
    const mb=_
    {
     const _=mul(1024,mb)
     {
      const gb=_
      {
       const _=mul(1024,gb)
       {
        const tb=_
        {
         if(lt(x,kb))
         {
          const _=to_fixed(x)
          {
           const s=_
           {
            return concat(s,"b")
           }
          }
         }
         if(lt(x,mb))
         {
          const _=div(x,kb)
          {
           const s=_
           {
            const _=trunc(s)
            {
             const s=_
             {
              const _=to_fixed(s)
              {
               const s=_
               {
                return concat(s,"Kb")
               }
              }
             }
            }
           }
          }
         }
         if(lt(x,gb))
         {
          const _=div(x,mb)
          {
           const s=_
           {
            const _=trunc(s)
            {
             const s=_
             {
              const _=to_fixed(s)
              {
               const s=_
               {
                return concat(s,"Mb")
               }
              }
             }
            }
           }
          }
         }
         if(lt(x,tb))
         {
          const _=div(x,gb)
          {
           const s=_
           {
            const _=trunc(s)
            {
             const s=_
             {
              const _=to_fixed(s)
              {
               const s=_
               {
                return concat(s,"Gb")
               }
              }
             }
            }
           }
          }
         }
         const _=div(x,tb)
         {
          const s=_
          {
           const _=trunc(s)
           {
            const s=_
            {
             const _=to_fixed(s)
             {
              const s=_
              {
               return concat(s,"Tb")
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function check(x,...y)
{
 if(is_true(x))
 {
  if(is_empty(y))
  {
   return
  }
 }
 else if(is_fn(x))
 {
  const _=x(...y)
  {
   const b=_
   {
    if(is_true(b))
    {
     return
    }
   }
  }
 }
 stop()
}
function chr(x)
{
 check(is_uint,x)
 return String.fromCharCode(x)
}
function clear(x)
{
 check(is_arr,x)
 x.splice(0)
}
function clone(x)
{
 check(is_def,x)
 return structuredClone(x)
}
function cmp(x,y)
{
 check(is_def,x)
 check(is_def,y)
 if(x>y)
 {
  return 1
 }
 if(x<y)
 {
  return -1
 }
 return 0
}
function collate(x)
{
 check(is_arr,x)
 function is_delimited(x)
 {
  if(same(x,"_"))
  {
   return false
  }
  if(is_punct(x))
  {
   return true
  }
  if(is_space(x))
  {
   return true
  }
  return false
 }
 const _=[]
 {
  const a=_
  {
   for(const v of (typeof(x)==="function")?x():x)
   {
    if(is_empty(a))
    {
     push(a,v)
     continue
    }
    const _=back(a)
    {
     const left=_
     {
      const _=back(left)
      {
       const left=_
       {
        const _=front(v)
        {
         const right=_
         {
          if(is_delimited(left))
          {
          }
          else if(is_delimited(right))
          {
          }
          else
          {
           push(a,right)
           continue
          }
          const _=concat(left,right)
          {
           const s=_
           {
            drop(a)
            push(a,s)
           }
          }
         }
        }
       }
      }
     }
    }
   }
   return join(a," ")
  }
 }
}
function concat(...x)
{
 return implode(x)
}
function contain(x,y)
{
 check(is_vec,x)
 if(is_str(x))
 {
  check(is_str,y)
 }
 check(is_def,y)
 return x.includes(y)
}
function crc(x)
{
 check(is_str,x)
 const _=0
 {
  let r=_
  {
   const _=explode(x)
   {
    const a=_
    {
     for(const k in (typeof(a)==="function")?a():a)
     {
      const _=to_i(k)
      {
       const i=_
       {
        const _=at(a,i)
        {
         const s=_
         {
          for(const k in (typeof(s)==="function")?s():s)
          {
           const _=to_i(k)
           {
            const i=_
            {
             const _=at(s,i)
             {
              const v=_
              {
               const _=asc(v)
               {
                const n=_
                {
                 r=add(r,n)
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
     return (typeof(r)==="function")?r():r
    }
   }
  }
 }
}
function date_decode(x)
{
 check(is_str,x)
 const _=new Date(x)
 {
  const r=_
  {
   const _=(typeof(r.getTime)==="function")?r.getTime():r.getTime
   {
    const r=_
    {
     const _=div(r,1000)
     {
      const r=_
      {
       const _=trunc(r)
       {
        const r=_
        {
         return (typeof(r)==="function")?r():r
        }
       }
      }
     }
    }
   }
  }
 }
}
function date_str(x)
{
 if(is_undef(x))
 {
  const _=(typeof(time_get)==="function")?time_get():time_get
  {
   const n=_
   {
    return date_str(n)
   }
  }
 }
 check(is_num,x)
 const _=mul(x,1000)
 {
  const n=_
  {
   const _=new Date(n)
   {
    const o=_
    {
     const _=(typeof(o.getFullYear)==="function")?o.getFullYear():o.getFullYear
     {
      const y=_
      {
       const _=(typeof(o.getMonth)==="function")?o.getMonth():o.getMonth
       {
        const m=_
        {
         const _=inc(m)
         {
          const m=_
          {
           const _=pad_l(m,"0",2)
           {
            const m=_
            {
             const _=(typeof(o.getDate)==="function")?o.getDate():o.getDate
             {
              const d=_
              {
               const _=pad_l(d,"0",2)
               {
                const d=_
                {
                 return concat(y,"/",m,"/",d)
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function dbg_backtrace(x)
{
 if(is_undef(x))
 {
  const _=new Error("backtrace")
  {
   const e=_
   {
    return dbg_backtrace(e)
   }
  }
 }
 check(is_obj,x)
 function parse_numbers(x)
 {
  check(is_arr,x)
  const _=[]
  {
   const r=_
   {
    for(const v of (typeof(x)==="function")?x():x)
    {
     if(!(is_numeric(v)))
     {
      continue
     }
     const _=json_decode(v)
     {
      const n=_
      {
       if(!(is_uint(n)))
       {
        continue
       }
       push(r,n)
      }
     }
    }
    return (typeof(r)==="function")?r():r
   }
  }
 }
 function is_fast(x)
 {
  if(is_alnum(x))
  {
   return true
  }
  if(is_access(x))
  {
   return true
  }
  if(is_numeric(x))
  {
   return true
  }
  if(is_lit(x))
  {
   return true
  }
  if(is_lit_char(x))
  {
   return true
  }
  return false
 }
 const _=[]
 {
  const r=_
  {
   const _=(typeof(x.stack)==="function")?x.stack():x.stack
   {
    const stack=_
    {
     const _=trim(stack)
     {
      const stack=_
      {
       const _=split(stack)
       {
        const stack=_
        {
         const _=(typeof(dbg_source)==="function")?dbg_source():dbg_source
         {
          const source=_
          {
           const _=split(source)
           {
            const lines=_
            {
             for(const v of (typeof(stack)==="function")?stack():stack)
             {
              if((typeof(is_node)==="function")?is_node():is_node)
              {
               const _=at(process.argv,1)
               {
                const script=_
                {
                 if(!(contain(v,script)))
                 {
                  continue
                 }
                }
               }
              }
              const _=trim(v)
              {
               const s=_
               {
                const _=replace(s,"@"," ")
                {
                 const s=_
                 {
                  const _=split(s," ")
                  {
                   const a=_
                   {
                    const _=front(a)
                    {
                     const s=_
                     {
                      if(same(s,"at"))
                      {
                       shift(a)
                      }
                      const _=shift(a)
                      {
                       let fn=_
                       {
                        if(is_empty(fn))
                        {
                         fn="anonymous"
                        }
                        if(!(is_noun(fn)))
                        {
                         continue
                        }
                        const _=shift(a)
                        {
                         const a=_
                         {
                          const _=scan(a,is_fast)
                          {
                           const a=_
                           {
                            const _=parse_numbers(a)
                            {
                             const a=_
                             {
                              if(!(is_many(a)))
                              {
                               continue
                              }
                              const _=back(a,1)
                              {
                               const line=_
                               {
                                const _=dec(line)
                                {
                                 let index=_
                                 {
                                  if((typeof(is_node)==="function")?is_node():is_node)
                                  {
                                  }
                                  else if((typeof(is_browser)==="function")?is_browser():is_browser)
                                  {
                                   index=sub(line,3)
                                  }
                                  const _=at(lines,index)
                                  {
                                   const code=_
                                   {
                                    const _=trim(code)
                                    {
                                     const code=_
                                     {
                                      const _={fn,line,code}
                                      {
                                       const o=_
                                       {
                                        push(r,o)
                                       }
                                      }
                                     }
                                    }
                                   }
                                  }
                                 }
                                }
                               }
                              }
                             }
                            }
                           }
                          }
                         }
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
             return (typeof(r)==="function")?r():r
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function dbg_callstack(x)
{
 check(is_obj,x)
 const _=dbg_backtrace(x)
 {
  const r=_
  {
   while(is_full(r))
   {
    const _=front(r)
    {
     const frame=_
     {
      const _=(typeof(frame.fn)==="function")?frame.fn():frame.fn
      {
       const fn=_
       {
        if(contain(fn,"throw"))
        {
        }
        else if(contain(fn,"stop"))
        {
        }
        else if(contain(fn,"check"))
        {
        }
        else
        {
         break
        }
        shift(r)
       }
      }
     }
    }
   }
   return (typeof(r)==="function")?r():r
  }
 }
}
function dbg_origin_cs(x)
{
 if(is_undef(x))
 {
  const _=new Error("origin")
  {
   const e=_
   {
    return dbg_origin_cs(e)
   }
  }
 }
 check(is_obj,x)
 function fold_blocks(x)
 {
  check(is_arr,x)
  const _=scan_blocks(x)
  {
   const a1=_
   {
    const _=[]
    {
     const a2=_
     {
      while(is_full(a1))
      {
       const _=shift(a1)
       {
        const o=_
        {
         if(is_empty(a1))
         {
          push(a2,o)
          continue
         }
         const _=front(a1)
         {
          const next=_
          {
           if(!(match_underscore(o,next)))
           {
            push(a2,o)
            continue
           }
           pop(next.tokens)
           const _=slice(o.tokens,2)
           {
            const a=_
            {
             append(next.tokens,a)
             next.indent=dec(next.indent)
             push(a2,next)
             shift(a1)
             const _=null
             {
              let last=_
              {
               for(const k in (typeof(a1)==="function")?a1():a1)
               {
                const _=to_i(k)
                {
                 const i=_
                 {
                  const _=at(a1,i)
                  {
                   const v=_
                   {
                    const _=add(next.indent,2)
                    {
                     const n=_
                     {
                      if(lt(v.indent,n))
                      {
                       last=(typeof(i)==="function")?i():i
                       break
                      }
                      v.indent=sub(v.indent,2)
                     }
                    }
                   }
                  }
                 }
                }
               }
               if(is_null(last))
               {
                continue
               }
               remove(a1,last)
               if(gte(last,a1.length))
               {
                continue
               }
               const _=at(a1,last)
               {
                const o=_
                {
                 if(is_many(different,o.tokens))
                 {
                  continue
                 }
                 const _=front(o.tokens)
                 {
                  const s=_
                  {
                   if(different(s,"end"))
                   {
                    continue
                   }
                   remove(a1,last)
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
      return stringify_blocks(a2)
     }
    }
   }
  }
 }
 function match_underscore(x,y)
 {
  check(is_obj,x)
  check(is_obj,y)
  if(lt(x.tokens.length,3))
  {
   return false
  }
  const _=front(x.tokens)
  {
   const s=_
   {
    if(different(s,"let"))
    {
     return false
    }
    const _=at(x.tokens,1)
    {
     const s=_
     {
      if(different(s,"_"))
      {
       return false
      }
      const _=inc(x.indent)
      {
       const n=_
       {
        if(different(y.indent,n))
        {
         return false
        }
        if(different(y.tokens.length,3))
        {
         return false
        }
        const _=front(y.tokens)
        {
         const s=_
         {
          if(different(s,"let"))
          {
           return false
          }
          const _=at(y.tokens,2)
          {
           const s=_
           {
            if(different(s,"_"))
            {
             return false
            }
            return true
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
 function scan_blocks(x)
 {
  check(is_arr,x)
  const _=[]
  {
   const r=_
   {
    for(const v of (typeof(x)==="function")?x():x)
    {
     const _=dup(v)
     {
      const o=_
      {
       const _=scan(o.code)
       {
        const tokens=_
        {
         const _=reject(tokens,is_trivia)
         {
          const tokens=_
          {
           o.indent=str_indent(o.code)
           o.tokens=(typeof(tokens)==="function")?tokens():tokens
           const _=obj_delete(o,"code")
           {
            const o=_
            {
             push(r,o)
            }
           }
          }
         }
        }
       }
      }
     }
    }
    return (typeof(r)==="function")?r():r
   }
  }
 }
 function stringify_blocks(x)
 {
  check(is_arr,x)
  const _=[]
  {
   const r=_
   {
    for(const v of (typeof(x)==="function")?x():x)
    {
     const _=(typeof(v)==="function")?v():v
     {
      const o=_
      {
       const _=repeat(" ",o.indent)
       {
        const indent=_
        {
         const _=join(o.tokens," ")
         {
          const code=_
          {
           o.code=concat(indent,code)
           const _=obj_delete(o,"indent")
           {
            const o=_
            {
             const _=obj_delete(o,"tokens")
             {
              const o=_
              {
               push(r,o)
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
    return (typeof(r)==="function")?r():r
   }
  }
 }
 function get_line(x)
 {
  check(is_arr,x)
  for(const v of (typeof(x)==="function")?x():x)
  {
   if(same(v.p,">"))
   {
    return (typeof(v.n)==="function")?v.n():v.n
   }
  }
  stop()
 }
 const _=[]
 {
  const r=_
  {
   const _=15
   {
    const range=_
    {
     const _=mul(range,3)
     {
      const sample=_
      {
       const _=[]
       {
        const a=_
        {
         for(const v of dbg_origin_js(x,sample))
         {
          const _=app_decompile(v.code)
          {
           const code=_
           {
            if(is_empty(code))
            {
             continue
            }
            const _=dup(v)
            {
             const o=_
             {
              o.code=(typeof(code)==="function")?code():code
              push(a,o)
             }
            }
           }
          }
         }
         const _=fold_blocks(a)
         {
          const a=_
          {
           const _=get_line(a)
           {
            const line=_
            {
             const _=[]
             {
              const before=_
              {
               const _=div(range,2)
               {
                const half=_
                {
                 const _=trunc(half)
                 {
                  const half=_
                  {
                   const _=add(half,2)
                   {
                    const n=_
                    {
                     while(is_full(a))
                     {
                      const _=shift(a)
                      {
                       const o=_
                       {
                        push(before,o)
                        if(gte(before.length,n))
                        {
                         shift(before)
                        }
                        if(same(o.n,line))
                        {
                         break
                        }
                       }
                      }
                     }
                     const _=[]
                     {
                      const after=_
                      {
                       while(is_full(a))
                       {
                        if(same(after.length,half))
                        {
                         break
                        }
                        const _=shift(a)
                        {
                         const o=_
                         {
                          push(after,o)
                         }
                        }
                       }
                       append(r,before)
                       append(r,after)
                       return (typeof(r)==="function")?r():r
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function dbg_origin_js(x,y)
{
 if(is_undef(x))
 {
  const _=new Error("origin")
  {
   const e=_
   {
    return dbg_origin_js(e)
   }
  }
 }
 check(is_obj,x)
 if(is_undef(y))
 {
  return dbg_origin_js(x,15)
 }
 const _=dbg_callstack(x)
 {
  const stack=_
  {
   const _=front(stack)
   {
    const frame=_
    {
     const _=(typeof(dbg_source)==="function")?dbg_source():dbg_source
     {
      const source=_
      {
       const _=split(source)
       {
        const lines=_
        {
         const _=[]
         {
          const a=_
          {
           const _=div(y,2)
           {
            const n=_
            {
             const _=trunc(n)
             {
              const n=_
              {
               const _=sub(frame.line,n)
               {
                let n=_
                {
                 if(lt(n,0))
                 {
                  n=0
                 }
                 else if(gte(n,lines.length))
                 {
                  n=sub(lines.length,y)
                 }
                 for(let i=0;i<((typeof(y)==="function")?y():y);i++)
                 {
                  const _=add(n,i)
                  {
                   const n=_
                   {
                    const _=" "
                    {
                     let p=_
                     {
                      if(same(n,frame.line))
                      {
                       p=">"
                      }
                      const _=dec(n)
                      {
                       let index=_
                       {
                        if((typeof(is_browser)==="function")?is_browser():is_browser)
                        {
                         index=sub(index,2)
                        }
                        const _=at(lines,index)
                        {
                         const code=_
                         {
                          const _={n,p,code}
                          {
                           const o=_
                           {
                            push(a,o)
                           }
                          }
                         }
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                 const _=[]
                 {
                  const a2=_
                  {
                   for(const v of (typeof(a)==="function")?a():a)
                   {
                    push(a2,v.code)
                   }
                   const _=join(a2)
                   {
                    const s=_
                    {
                     const _=str_unindent(s)
                     {
                      const s=_
                      {
                       const _=split(s)
                       {
                        const a3=_
                        {
                         for(const k in (typeof(a3)==="function")?a3():a3)
                         {
                          const _=to_i(k)
                          {
                           const i=_
                           {
                            const _=at(a3,i)
                            {
                             const code=_
                             {
                              const _=at(a,i)
                              {
                               const o=_
                               {
                                o.code=(typeof(code)==="function")?code():code
                               }
                              }
                             }
                            }
                           }
                          }
                         }
                         return (typeof(a)==="function")?a():a
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function dbg_source()
{
 if((typeof(is_node)==="function")?is_node():is_node)
 {
  const _=at(process.argv,1)
  {
   const path=_
   {
    const _=file_read(path)
    {
     const s=_
     {
      return (typeof(s)==="function")?s():s
     }
    }
   }
  }
 }
 else if((typeof(is_browser)==="function")?is_browser():is_browser)
 {
  return (typeof(html.outerHTML)==="function")?html.outerHTML():html.outerHTML
 }
 else
 {
  stop()
 }
}
function dec(x)
{
 check(is_num,x)
 return sub(x,1)
}
function dedup(x)
{
 check(is_arr,x)
 const _=[]
 {
  const r=_
  {
   for(const v of (typeof(x)==="function")?x():x)
   {
    if(!(contain(r,v)))
    {
     push(r,v)
    }
   }
   return (typeof(r)==="function")?r():r
  }
 }
}
function delimit(x,y)
{
 check(is_str,x)
 if(is_undef(y))
 {
  return delimit(x,is_fragment)
 }
 check(is_fn,y)
 const _=[]
 {
  const r=_
  {
   for(const v of (typeof(x)==="function")?x():x)
   {
    const _=(typeof(v)==="function")?v():v
    {
     const right=_
     {
      if(is_empty(r))
      {
       push(r,right)
       continue
      }
      const _=back(r)
      {
       const left=_
       {
        const _=concat(left,right)
        {
         const fragment=_
         {
          if(is_fragment(fragment))
          {
           drop(r)
           push(r,fragment)
          }
          else
          {
           push(r,right)
          }
         }
        }
       }
      }
     }
    }
   }
   return (typeof(r)==="function")?r():r
  }
 }
}
function different(x,y)
{
 return x!==y
}
function div(x,y,...z)
{
 check(is_num,x)
 check(is_num,y)
 check(different,y,0)
 const _=x/y
 {
  const r=_
  {
   if(is_full(z))
   {
    return div(r,...z)
   }
   return (typeof(r)==="function")?r():r
  }
 }
}
function drop(x,y)
{
 check(is_arr,x)
 if(is_undef(y))
 {
  return drop(x,1)
 }
 pop(x,y)
}
function dump(x)
{
 check(is_def,x)
 if((typeof(is_node)==="function")?is_node():is_node)
 {
  if((typeof(process.stdout.isTTY)==="function")?process.stdout.isTTY():process.stdout.isTTY)
  {
   const _=false
   {
    const showHidden=_
    {
     const _=null
     {
      const depth=_
      {
       const _=true
       {
        const colors=_
        {
         const _=null
         {
          const maxArrayLength=_
          {
           const _=null
           {
            const maxStringLength=_
            {
             const _={showHidden,depth,colors,maxArrayLength,maxStringLength}
             {
              const o=_
              {
               const _=util.inspect(x,o)
               {
                const s=_
                {
                 log(s)
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
  else
  {
   const _=to_dump(x)
   {
    const s=_
    {
     log(s)
    }
   }
  }
 }
 else if((typeof(is_browser)==="function")?is_browser():is_browser)
 {
  const _=to_dump(x)
  {
   const s=_
   {
    log(s)
   }
  }
 }
 else
 {
  stop()
 }
}
function dup(x)
{
 check(is_container,x)
 if(is_arr(x))
 {
  return slice(x,0)
 }
 else if(is_obj(x))
 {
  const _={}
  {
   const r=_
   {
    merge(r,x)
    return (typeof(r)==="function")?r():r
   }
  }
 }
 else
 {
  stop()
 }
}
function every(x,y)
{
 check(is_arr,x)
 check(is_fn,y)
 for(const v of (typeof(x)==="function")?x():x)
 {
  if(!(y(v)))
  {
   return false
  }
 }
 return true
}
function explode(x)
{
 check(is_str,x)
 const _=[]
 {
  const r=_
  {
   for(const v of (typeof(x)==="function")?x():x)
   {
    push(r,v)
   }
   return (typeof(r)==="function")?r():r
  }
 }
}
function extract(x,y)
{
 check(is_arr,x)
 check(is_def,y)
 const _=false
 {
  let r=_
  {
   const _=dup(x)
   {
    const a=_
    {
     clear(x)
     for(const v of (typeof(a)==="function")?a():a)
     {
      if(same(v,y))
      {
       r=true
      }
      else
      {
       push(x,v)
      }
     }
     return (typeof(r)==="function")?r():r
    }
   }
  }
 }
}
function find(x,y)
{
 check(is_arr,x)
 check(is_def,y)
 for(const k in (typeof(x)==="function")?x():x)
 {
  const _=to_i(k)
  {
   const i=_
   {
    const _=at(x,i)
    {
     const v=_
     {
      if(same(v,y))
      {
       return (typeof(i)==="function")?i():i
      }
     }
    }
   }
  }
 }
 return -1
}
function flower(x)
{
 const _=null
 {
  let n=_
  {
   if((typeof(is_node)==="function")?is_node():is_node)
   {
    n=(typeof(process.stdout.columns)==="function")?process.stdout.columns():process.stdout.columns
    if(is_undef(n))
    {
     n=144
    }
   }
   else if((typeof(is_browser)==="function")?is_browser():is_browser)
   {
    n=80
   }
   else
   {
    stop()
   }
   if(is_undef(x))
   {
    const _=repeat("*",n)
    {
     const s=_
     {
      log(s)
      return
     }
    }
   }
   check(is_str,x)
   const _=repeat("*",n)
   {
    const s1=_
    {
     const _=repeat("*",2)
     {
      const s2=_
      {
       const _=concat(s2," ")
       {
        const s2=_
        {
         const _=concat(s2,x)
         {
          const s2=_
          {
           const _=concat(s2," ")
           {
            const s2=_
            {
             const _=concat(s2,s1)
             {
              const s2=_
              {
               const _=slice_l(s2,n)
               {
                const s2=_
                {
                 log(s2)
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function fn_match(x)
{
 check(is_str,x)
 const _={}
 {
  const r=_
  {
   for(const k in (typeof(fns)==="function")?fns():fns)
   {
    if(!(match(k,x)))
    {
     continue
    }
    const _=get(fns,k)
    {
     const v=_
     {
      put(r,k,v)
     }
    }
   }
   return (typeof(r)==="function")?r():r
  }
 }
}
function front(x)
{
 check(is_vec,x)
 return at(x,0)
}
function get(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 check(has,x,y)
 return x[y]
}
function gt(x,y)
{
 check(is_num,x)
 check(is_num,y)
 return x>y
}
function gte(x,y)
{
 check(is_num,x)
 check(is_num,y)
 return x>=y
}
function has(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 return y in x
}
function head(x,y)
{
 check(is_arr,x)
 check(is_uint,y)
 if(lt(x.length,y))
 {
  return dup(x)
 }
 return slice_l(x,y)
}
function implode(x)
{
 check(is_arr,x)
 return join(x,"")
}
function inc(x)
{
 check(is_num,x)
 return add(x,1)
}
function indent(x,y)
{
 check(is_str,x)
 if(is_undef(y))
 {
  return indent(x,1)
 }
 const _=[]
 {
  const a=_
  {
   for(const v of split(x))
   {
    const _=trim_r(v)
    {
     const s=_
     {
      if(is_empty(s))
      {
       push(a,s)
      }
      else
      {
       const _=repeat(" ",y)
       {
        const indent=_
        {
         const _=concat(indent,s)
         {
          const s=_
          {
           push(a,s)
          }
         }
        }
       }
      }
     }
    }
   }
   return join(a)
  }
 }
}
function insert(x,y,...z)
{
 check(is_arr,x)
 check(is_uint,y)
 check(between,y,0,x.length)
 x.splice(y,0,...z)
}
function is_access(x)
{
 if(!(is_str(x)))
 {
  return false
 }
 if(is_empty(x))
 {
  return false
 }
 const _=split(x,".")
 {
  const a=_
  {
   if(is_single(a))
   {
    return false
   }
   return every(a,is_identifier)
  }
 }
}
function is_alnum(x)
{
 if(!(is_str(x)))
 {
  return false
 }
 if(is_empty(x))
 {
  return false
 }
 for(const v of (typeof(x)==="function")?x():x)
 {
  if(same(v,"_"))
  {
  }
  else if(is_alpha(v))
  {
  }
  else if(is_digit(v))
  {
  }
  else
  {
   return false
  }
 }
 return true
}
function is_alpha(x)
{
 if(!(is_str(x)))
 {
  return false
 }
 if(is_empty(x))
 {
  return false
 }
 for(const v of (typeof(x)==="function")?x():x)
 {
  if(is_lower(v))
  {
  }
  else if(is_upper(v))
  {
  }
  else
  {
   return false
  }
 }
 return true
}
function is_arr(x)
{
 return Array.isArray(x)
}
function is_atom(x)
{
 if(is_alnum(x))
 {
  return true
 }
 if(is_access(x))
 {
  return true
 }
 if(is_tuple(x))
 {
  return true
 }
 if(is_numeric(x))
 {
  return true
 }
 if(is_lit(x))
 {
  return true
 }
 if(is_lit_char(x))
 {
  return true
 }
 return false
}
function is_blank(x)
{
 if(!(is_str(x)))
 {
  return false
 }
 if(is_empty(x))
 {
  return true
 }
 if(is_space(x))
 {
  return true
 }
 return false
}
function is_bool(x)
{
 const _=typeof(x)
 {
  const s=_
  {
   return same(s,"boolean")
  }
 }
}
function is_browser()
{
 try
 {
  window
 }
 catch
 {
  return false
 }
 return true
}
function is_char(x)
{
 if(!(is_str(x)))
 {
  return false
 }
 return same(x.length,1)
}
function is_comment(x)
{
 if(!(is_ln(x)))
 {
  return false
 }
 return match_l(x,"//")
}
function is_container(x)
{
 if(is_arr(x))
 {
  return true
 }
 if(is_obj(x))
 {
  return true
 }
 return false
}
function is_cool(x)
{
 if(is_num(x))
 {
  return true
 }
 if(is_str(x))
 {
  return true
 }
 return false
}
function is_def(x)
{
 return !(is_undef(x))
}
function is_digit(x)
{
 if(!(is_str(x)))
 {
  return false
 }
 if(is_empty(x))
 {
  return false
 }
 for(const v of (typeof(x)==="function")?x():x)
 {
  if(!(contain(digit,v)))
  {
   return false
  }
 }
 return true
}
function is_empty(x)
{
 if(is_vec(x))
 {
  return same(x.length,0)
 }
 if({x})
 {
  const _=obj_keys(x)
  {
   const keys=_
   {
    return is_empty(keys)
   }
  }
 }
 return false
}
function is_false(x)
{
 return same(x,false)
}
function is_fn(x)
{
 const _=typeof(x)
 {
  const s=_
  {
   if(different(s,"function"))
   {
    return false
   }
   if(same(x.constructor.name,"GeneratorFunction"))
   {
    return false
   }
   return true
  }
 }
}
function is_fragment(x)
{
 if(!(is_str(x)))
 {
  return true
 }
 if(is_alnum(x))
 {
  return true
 }
 if(is_space(x))
 {
  return true
 }
 return false
}
function is_full(x)
{
 if(is_vec(x))
 {
  return !(is_empty(x))
 }
 return false
}
function is_gn(x)
{
 const _=typeof(x)
 {
  const s=_
  {
   if(different(s,"function"))
   {
    return false
   }
   if(different(x.constructor.name,"GeneratorFunction"))
   {
    return false
   }
   return true
  }
 }
}
function is_identifier(x)
{
 if(!(is_str(x)))
 {
  return false
 }
 if(is_empty(x))
 {
  return false
 }
 const _=front(x)
 {
  const s=_
  {
   if(same(s,"_"))
   {
   }
   else if(is_alpha(s))
   {
   }
   else
   {
    return false
   }
   for(const v of (typeof(x)==="function")?x():x)
   {
    if(!(is_alnum(v)))
    {
     return false
    }
   }
   return true
  }
 }
}
function is_indented(x)
{
 if(!(is_str(x)))
 {
  return false
 }
 if(is_empty(x))
 {
  return false
 }
 for(const v of split(x))
 {
  if(is_empty(v))
  {
   continue
  }
  const _=front(v)
  {
   const c=_
   {
    if(!(is_space(c)))
    {
     return false
    }
   }
  }
 }
 return true
}
function is_int(x)
{
 return Number.isInteger(x)
}
function is_ip(x)
{
 if(is_ip4(x))
 {
  return true
 }
 if(is_ip6(x))
 {
  return true
 }
 return false
}
function is_ip4(x)
{
 if(!(is_str(x)))
 {
  return false
 }
 const _=split(x,".")
 {
  const a=_
  {
   if(different(a.length,4))
   {
    return false
   }
   for(const v of (typeof(a)==="function")?a():a)
   {
    if(!(is_digit(v)))
    {
     return false
    }
    const _=to_uint(v)
    {
     const n=_
     {
      if(gt(n,255))
      {
       return false
      }
     }
    }
   }
   return true
  }
 }
}
function is_ip6(x)
{
 if(!(is_str(x)))
 {
  return false
 }
 const _=split(x,":")
 {
  const a=_
  {
   if(lt(a.length,3))
   {
    return false
   }
   if(gt(a.length,8))
   {
    return false
   }
   for(const v of (typeof(a)==="function")?a():a)
   {
    if(is_empty(v))
    {
     continue
    }
    if(!(is_alnum(v)))
    {
     return false
    }
    if(contain(v,"_"))
    {
     return false
    }
    if(gt(v.length,4))
    {
     return false
    }
   }
   return true
  }
 }
}
function is_json(x)
{
 if(!(is_str(x)))
 {
  return false
 }
 if(is_empty(x))
 {
  return false
 }
 try
 {
  json_decode(x)
 }
 catch
 {
  return false
 }
 return true
}
function is_last(x,y)
{
 check(is_arr,x)
 check(is_uint,y)
 const _=dec(x.length)
 {
  const n=_
  {
   return same(n,y)
  }
 }
}
function is_lisp(x)
{
 if(!(is_str(x)))
 {
  return false
 }
 const _=split(x,"-")
 {
  const a=_
  {
   return every(a,is_alnum)
  }
 }
}
function is_lit_char(x)
{
 if(!(is_str(x)))
 {
  return false
 }
 if(!(match_l(x,"'")))
 {
  return false
 }
 if(!(match_r(x,"'")))
 {
  return false
 }
 const _=strip_l(x,"'")
 {
  const s=_
  {
   const _=strip_r(s,"'")
   {
    const s=_
    {
     if(is_empty(s))
     {
      return false
     }
     const _=concat("\"",s,"\"")
     {
      const s=_
      {
       return is_lit(s)
      }
     }
    }
   }
  }
 }
}
function is_lit(x)
{
 if(!(is_str(x)))
 {
  return false
 }
 if(!(is_json(x)))
 {
  return false
 }
 const _=json_decode(x)
 {
  const v=_
  {
   if(!(is_str(v)))
   {
    return false
   }
   const _=json_encode(v)
   {
    const s=_
    {
     return same(s,x)
    }
   }
  }
 }
}
function is_ln(x)
{
 if(is_str(x))
 {
  return !(is_txt(x))
 }
 return false
}
function is_lower(x)
{
 if(!(is_str(x)))
 {
  return false
 }
 if(is_empty(x))
 {
  return false
 }
 for(const v of (typeof(x)==="function")?x():x)
 {
  if(!(contain(lower,v)))
  {
   return false
  }
 }
 return true
}
function is_many(x)
{
 if(is_vec(x))
 {
  return gt(x.length,1)
 }
 return false
}
function is_member(x)
{
 if(!(is_str(x)))
 {
  return false
 }
 if(is_empty(x))
 {
  return false
 }
 if(is_identifier(x))
 {
  return true
 }
 if(is_lit(x))
 {
  return true
 }
 return false
}
function is_name(x)
{
 if(is_identifier(x))
 {
  return true
 }
 if(is_access(x))
 {
  return true
 }
 if(is_tuple(x))
 {
  return true
 }
 return false
}
function is_node()
{
 return !((typeof(is_browser)==="function")?is_browser():is_browser)
}
function is_none(x)
{
 if(is_undef(x))
 {
  return true
 }
 if(is_null(x))
 {
  return true
 }
 return false
}
function is_noun(x)
{
 if(is_identifier(x))
 {
  return true
 }
 if(is_access(x))
 {
  return true
 }
 return false
}
function is_null(x)
{
 return same(x,null)
}
function is_num(x)
{
 if(Number.isNaN(x))
 {
  return false
 }
 if(same(x,Number.NEGATIVE_INFINITY))
 {
  return false
 }
 if(same(x,Number.POSITIVE_INFINITY))
 {
  return false
 }
 const _=typeof(x)
 {
  const s=_
  {
   return same(s,"number")
  }
 }
}
function is_numeric(x)
{
 if(!(is_str(x)))
 {
  return false
 }
 if(!(is_json(x)))
 {
  return false
 }
 const _=json_decode(x)
 {
  const v=_
  {
   if(!(is_num(v)))
   {
    return false
   }
   const _=json_encode(v)
   {
    const s=_
    {
     return same(s,x)
    }
   }
  }
 }
}
function is_obj(x)
{
 if(is_null(x))
 {
  return false
 }
 const _=typeof(x)
 {
  const s=_
  {
   return same(s,"object")
  }
 }
}
function is_pair(x)
{
 if(!(is_vec(x)))
 {
  return false
 }
 return same(x.length,2)
}
function is_punct(x)
{
 if(!(is_str(x)))
 {
  return false
 }
 if(is_empty(x))
 {
  return false
 }
 for(const v of (typeof(x)==="function")?x():x)
 {
  if(!(contain(punct,v)))
  {
   return false
  }
 }
 return true
}
function is_single(x)
{
 if(is_vec(x))
 {
  return same(x.length,1)
 }
 return false
}
function is_space(x)
{
 if(!(is_str(x)))
 {
  return false
 }
 if(is_empty(x))
 {
  return false
 }
 const _=trim(x)
 {
  const s=_
  {
   return is_empty(s)
  }
 }
}
function is_str(x)
{
 const _=typeof(x)
 {
  const s=_
  {
   return same(s,"string")
  }
 }
}
function is_token(x)
{
 if(is_atom(x))
 {
  return true
 }
 if(is_comment(x))
 {
  return true
 }
 return false
}
function is_trivia(x)
{
 if(!(is_str(x)))
 {
  return false
 }
 if(is_space(x))
 {
  return true
 }
 if(is_comment(x))
 {
  return true
 }
 return false
}
function is_true(x)
{
 return same(x,true)
}
function is_tuple(x)
{
 if(!(is_str(x)))
 {
  return false
 }
 if(is_empty(x))
 {
  return false
 }
 const _=scan(x,is_member,is_word)
 {
  const a=_
  {
   if(is_single(a))
   {
    return false
   }
   for(const k in (typeof(a)==="function")?a():a)
   {
    const _=to_i(k)
    {
     const i=_
     {
      const _=at(a,i)
      {
       const v=_
       {
        if(is_member(v))
        {
         continue
        }
        if(same(v,":"))
        {
         const _=inc(i)
         {
          const next=_
          {
           if(same(next,a.length))
           {
            return false
           }
           continue
          }
         }
        }
        return false
       }
      }
     }
    }
   }
   return true
  }
 }
}
function is_txt(x)
{
 if(is_str(x))
 {
  return contain(x,"\n")
 }
 return false
}
function is_uint(x)
{
 if(is_int(x))
 {
  return gte(x,0)
 }
 return false
}
function is_undef(x)
{
 return same(x,undefined)
}
function is_upper(x)
{
 if(!(is_str(x)))
 {
  return false
 }
 if(is_empty(x))
 {
  return false
 }
 for(const v of (typeof(x)==="function")?x():x)
 {
  if(!(contain(upper,v)))
  {
   return false
  }
 }
 return true
}
function is_url(x)
{
 if(!(is_ln(x)))
 {
  return false
 }
 if(match_l(x,"http://"))
 {
  return true
 }
 if(match_l(x,"https://"))
 {
  return true
 }
 return false
}
function is_vec(x)
{
 if(is_str(x))
 {
  return true
 }
 if(is_arr(x))
 {
  return true
 }
 return false
}
function is_word(x)
{
 if(!(is_str(x)))
 {
  return false
 }
 if(is_empty(x))
 {
  return false
 }
 if(contain(x," "))
 {
  return false
 }
 if(contain(x,"\n"))
 {
  return false
 }
 if(contain(x,"\r"))
 {
  return false
 }
 return true
}
function join(x,y)
{
 check(is_arr,x)
 if(is_undef(y))
 {
  return join(x,"\n")
 }
 check(is_str,y)
 return x.join(y)
}
function json_decode(x)
{
 check(is_str,x)
 return JSON.parse(x)
}
function json_encode(x)
{
 check(is_def,x)
 return JSON.stringify(x)
}
function log(...x)
{
 console.log(...x)
}
function lt(x,y)
{
 check(is_num,x)
 check(is_num,y)
 return x<y
}
function lte(x,y)
{
 check(is_num,x)
 check(is_num,y)
 return x<=y
}
function main()
{
 function pump(...x)
 {
  if(is_fn(init))
  {
   init(...x)
   profile()
  }
  else if(is_gn(init))
  {
   const _=init(...x)
   {
    const generator=_
    {
     function on_timer()
     {
      const _=(typeof(generator.next)==="function")?generator.next():generator.next
      {
       const iterator=_
       {
        if((typeof(iterator.done)==="function")?iterator.done():iterator.done)
        {
         profile()
         return
        }
        time_timeout(on_timer)
       }
      }
     }
     on_timer()
    }
   }
  }
 }
 function profile()
 {
  const _=(typeof(time_now)==="function")?time_now():time_now
  {
   const n=_
   {
    const _=(typeof(app_name)==="function")?app_name():app_name
    {
     const name=_
     {
      const _=to_fixed(n)
      {
       const s=_
       {
        const _=concat(s,"s")
        {
         const s=_
         {
          log("profile",name,s)
         }
        }
       }
      }
     }
    }
   }
  }
 }
 function get_fns()
 {
  const _=null
  {
   let content=_
   {
    if((typeof(is_node)==="function")?is_node():is_node)
    {
     const _=at(process.argv,1)
     {
      const script=_
      {
       content=file_read(script)
      }
     }
    }
    else if((typeof(is_browser)==="function")?is_browser():is_browser)
    {
     content=(typeof(html.innerHTML)==="function")?html.innerHTML():html.innerHTML
    }
    else
    {
     stop()
    }
    for(const v of (typeof(punct)==="function")?punct():punct)
    {
     content=replace(content,v," ")
    }
    const _=replace(content,"\n"," ")
    {
     const words=_
     {
      const _=replace_rec(content,"  "," ")
      {
       const words=_
       {
        const _=split(content," ")
        {
         const words=_
         {
          const _={}
          {
           const o=_
           {
            for(const v of (typeof(words)==="function")?words():words)
            {
             const _=(typeof(v)==="function")?v():v
             {
              const k=_
              {
               if(has(o,k))
               {
                continue
               }
               if(!(is_identifier(k)))
               {
                continue
               }
               const _=null
               {
                let v=_
                {
                 try
                 {
                  v=eval(k)
                 }
                 catch
                 {
                 }
                 if(!(is_fn(v)))
                 {
                  continue
                 }
                 put(o,k,v)
                }
               }
              }
             }
            }
            return sort(o)
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
 if((typeof(is_browser)==="function")?is_browser():is_browser)
 {
  window.global=(typeof(window)==="function")?window():window
 }
 global.zombie=false
 global.start=(typeof(time_get)==="function")?time_get():time_get
 global.punct="!\"#$%&'()*+,-./:;<=>?@[\\]^`{|}~"
 global.digit="0123456789"
 global.lower="abcdefghijklmnopqrstuvwxyz"
 global.upper=to_upper(lower)
 if((typeof(is_node)==="function")?is_node():is_node)
 {
  main_node()
 }
 else if((typeof(is_browser)==="function")?is_browser():is_browser)
 {
  main_browser()
 }
 else
 {
  stop()
 }
 global.fns=(typeof(get_fns)==="function")?get_fns():get_fns
 for(const k in (typeof(fns)==="function")?fns():fns)
 {
  if(match(k,"init_*"))
  {
   const _=get(fns,k)
   {
    const v=_
    {
     v()
    }
   }
  }
 }
 if((typeof(is_node)==="function")?is_node():is_node)
 {
  const _=slice(process.argv,2)
  {
   const args=_
   {
    pump(...args)
   }
  }
 }
 else if((typeof(is_browser)==="function")?is_browser():is_browser)
 {
  function on_load()
  {
   if(same(document.readyState,"complete"))
   {
    pump()
    window.onload=null
   }
  }
  window.onload=on(on_load)
 }
 else
 {
  stop()
 }
}
function map(x,y)
{
 check(is_arr,x)
 check(is_fn,y)
 const _=[]
 {
  const r=_
  {
   for(const v of (typeof(x)==="function")?x():x)
   {
    const _=y(v)
    {
     const v=_
     {
      check(is_def,v)
      push(r,v)
     }
    }
   }
   return (typeof(r)==="function")?r():r
  }
 }
}
function match_l(x,y)
{
 check(is_str,x)
 check(is_str,y)
 if(is_empty(x))
 {
  return false
 }
 if(is_empty(y))
 {
  return false
 }
 if(gt(y.length,x.length))
 {
  return false
 }
 const _=slice_l(x,y.length)
 {
  const s=_
  {
   return same(s,y)
  }
 }
}
function match_r(x,y)
{
 check(is_str,x)
 check(is_str,y)
 if(is_empty(x))
 {
  return false
 }
 if(is_empty(y))
 {
  return false
 }
 if(gt(y.length,x.length))
 {
  return false
 }
 const _=slice_r(x,y.length)
 {
  const s=_
  {
   return same(s,y)
  }
 }
}
function match(x,y)
{
 check(is_str,x)
 check(is_str,y)
 const _=replace(y,".","\\.")
 {
  const s=_
  {
   const _=replace(s,"*",".*")
   {
    const s=_
    {
     const _=concat("^",s,"$")
     {
      const s=_
      {
       const _=new RegExp(s)
       {
        const s=_
        {
         return s.test(x)
        }
       }
      }
     }
    }
   }
  }
 }
}
function max(...x)
{
 return Math.max(...x)
}
function merge(x,y)
{
 check(is_obj,x)
 check(is_obj,y)
 Object.assign(x,y)
}
function min(...x)
{
 return Math.min(...x)
}
function mul(x,y,...z)
{
 check(is_num,x)
 check(is_num,y)
 const _=x*y
 {
  const r=_
  {
   if(is_full(z))
   {
    return mul(r,...z)
   }
   return (typeof(r)==="function")?r():r
  }
 }
}
function nop()
{
}
function obj_delete(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 const _={}
 {
  const r=_
  {
   for(const k in (typeof(x)==="function")?x():x)
   {
    if(same(k,y))
    {
     continue
    }
    const _=get(x,k)
    {
     const v=_
     {
      put(r,k,v)
     }
    }
   }
   return (typeof(r)==="function")?r():r
  }
 }
}
function obj_keys(x)
{
 check(is_obj,x)
 return Object.keys(x)
}
function obj_length(x)
{
 check(is_obj,x)
 const _=obj_keys(x)
 {
  const keys=_
  {
   return (typeof(keys.length)==="function")?keys.length():keys.length
  }
 }
}
function obj_vals(x)
{
 check(is_obj,x)
 return Object.values(x)
}
function obj()
{
 return {}
}
function on(x)
{
 check(is_fn,x)
 const _=x
 {
  const fn=_
  {
   function on_fn(...x)
   {
    if((typeof(zombie)==="function")?zombie():zombie)
    {
     return
    }
    try
    {
     return fn(...x)
    }
    catch(e)
    {
     zombie=true
     throw (typeof(e)==="function")?e():e
    }
   }
   if((typeof(zombie)==="function")?zombie():zombie)
   {
    stop()
   }
   return on_fn
  }
 }
}
function or(x,y,...z)
{
 check(is_bool,x)
 check(is_bool,y)
 const _=x||y
 {
  const r=_
  {
   if(is_full(z))
   {
    return or(r,...z)
   }
   return (typeof(r)==="function")?r():r
  }
 }
}
function pad_l(x,y,z)
{
 check(is_cool,x)
 if(is_uint(x))
 {
  const _=to_json(x)
  {
   const s=_
   {
    if(is_undef(y))
    {
     if(is_undef(z))
     {
      return pad_l(s,"0",3)
     }
     return pad_l(s,"0",z)
    }
    return pad_l(s,y,z)
   }
  }
 }
 check(is_str,x)
 check(is_str,y)
 check(is_uint,z)
 return x.padStart(z,y)
}
function pad_r(x,y,z)
{
 check(is_cool,x)
 if(is_uint(x))
 {
  const _=to_json(x)
  {
   const s=_
   {
    if(is_undef(y))
    {
     if(is_undef(z))
     {
      return pad_r(s,"0",3)
     }
     return pad_r(s,"0",z)
    }
    return pad_r(s,y,z)
   }
  }
 }
 check(is_str,x)
 check(is_str,y)
 check(is_uint,z)
 return x.padEnd(z,y)
}
function paren(x)
{
 check(is_str,x)
 return concat("(",x,")")
}
function path_concat(x,y)
{
 const _=strip_r(x,"/")
 {
  const x=_
  {
   const _=strip_l(y,"/")
   {
    const y=_
    {
     return concat(x,"/",y)
    }
   }
  }
 }
}
function path_file(x)
{
 check(is_str,x)
 const _=path_base(x)
 {
  const s=_
  {
   const _=split(s,".")
   {
    const a=_
    {
     if(is_single(a))
     {
      return (typeof(s)==="function")?s():s
     }
     drop(a)
     return join(a,".")
    }
   }
  }
 }
}
function path_fix(x)
{
 if(match_r(x,"/"))
 {
  return (typeof(x)==="function")?x():x
 }
 return concat(x,"/")
}
function pop(x,y)
{
 check(is_arr,x)
 if(is_undef(y))
 {
  return pop(x,1)
 }
 check(is_uint,y)
 const _=sub(x.length,y)
 {
  const n=_
  {
   if(same(y,1))
   {
    const _=back(x)
    {
     const r=_
     {
      remove(x,n,1)
      return (typeof(r)==="function")?r():r
     }
    }
   }
   remove(x,n,y)
  }
 }
}
function prepend(x,y)
{
 check(is_arr,x)
 check(is_arr,y)
 const _=dup(y)
 {
  const a=_
  {
   reverse(a)
   for(const v of (typeof(a)==="function")?a():a)
   {
    unshift(x,v)
   }
  }
 }
}
function push(x,y)
{
 check(is_arr,x)
 check(is_def,y)
 x.push(y)
}
function put(x,y,z)
{
 check(is_obj,x)
 check(is_str,y)
 check(is_def,z)
 if(has(x,y))
 {
  stop()
 }
 set(x,y,z)
}
function random(x)
{
 if(is_undef(x))
 {
  return random(Number.MAX_SAFE_INTEGER)
 }
 check(is_num,x)
 check(gte,x,0)
 const _=(typeof(Math.random)==="function")?Math.random():Math.random
 {
  const r=_
  {
   const _=mul(r,x)
   {
    const r=_
    {
     if(is_uint(x))
     {
      return trunc(r)
     }
     return (typeof(r)==="function")?r():r
    }
   }
  }
 }
}
function reject(x,y)
{
 check(is_arr,x)
 check(is_fn,y)
 const _=[]
 {
  const r=_
  {
   for(const v of (typeof(x)==="function")?x():x)
   {
    if(y(v))
    {
     continue
    }
    push(r,v)
   }
   return (typeof(r)==="function")?r():r
  }
 }
}
function remove(x,y,z)
{
 check(is_arr,x)
 check(is_uint,y)
 if(is_undef(z))
 {
  return remove(x,y,1)
 }
 check(is_uint,z)
 check(between,y,0,x.length)
 const _=add(y,z)
 {
  const n=_
  {
   check(between,n,0,x.length)
   x.splice(y,z)
  }
 }
}
function repeat(x,y)
{
 check(is_str,x)
 check(is_uint,y)
 return x.repeat(y)
}
function replace_rec(x,y,z)
{
 check(is_str,x)
 check(is_str,y)
 check(is_str,z)
 const _=(typeof(x)==="function")?x():x
 {
  let r=_
  {
   while(contain(r,y))
   {
    r=replace(r,y,z)
   }
   return (typeof(r)==="function")?r():r
  }
 }
}
function replace(x,y,z)
{
 check(is_str,x)
 check(is_str,y)
 check(is_str,z)
 const _=split(x,y)
 {
  const a=_
  {
   return join(a,z)
  }
 }
}
function reverse(x)
{
 check(is_arr,x)
 x.reverse()
}
function round(x)
{
 check(is_num,x)
 return Math.round(x)
}
function salt(x,y)
{
 check(is_str,x)
 if(is_undef(y))
 {
  return salt(x,"azertyuiop")
 }
 const _=""
 {
  let r=_
  {
   const _=explode(x)
   {
    const a1=_
    {
     const _=explode(y)
     {
      const a2=_
      {
       while(is_full(a1))
       {
        if(is_empty(a2))
        {
         const _=explode(y)
         {
          const a=_
          {
           append(a2,a)
          }
         }
        }
        const _=shift(a1)
        {
         const c1=_
         {
          const _=shift(a2)
          {
           const c2=_
           {
            const _=asc(c1)
            {
             const n1=_
             {
              const _=asc(c2)
              {
               const n2=_
               {
                const _=xor(n1,n2)
                {
                 const n=_
                 {
                  const _=chr(n)
                  {
                   const c=_
                   {
                    r=concat(r,c)
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
       return (typeof(r)==="function")?r():r
      }
     }
    }
   }
  }
 }
}
function same(x,y)
{
 return x===y
}
function scan(x,y,z)
{
 check(is_str,x)
 if(is_undef(y))
 {
  return scan(x,is_token)
 }
 check(is_fn,y)
 if(is_undef(z))
 {
  return scan(x,y,is_fragment)
 }
 check(is_fn,z)
 function group(x,y)
 {
  check(is_arr,x)
  check(is_fn,y)
  const _=[]
  {
   const r=_
   {
    const _=dup(x)
    {
     const fragments=_
     {
      while(is_full(fragments))
      {
       const _=reduce(fragments,y)
       {
        const a=_
        {
         if(is_full(a))
         {
          const _=implode(a)
          {
           const s=_
           {
            push(r,s)
            shift(fragments,a.length)
           }
          }
         }
         else
         {
          const _=shift(fragments)
          {
           const s=_
           {
            push(r,s)
           }
          }
         }
        }
       }
      }
      return (typeof(r)==="function")?r():r
     }
    }
   }
  }
 }
 function reduce(x)
 {
  check(is_arr,x)
  check(is_fn,y)
  check(is_full,x)
  const _=dup(x)
  {
   const r=_
   {
    while(is_full(r))
    {
     const _=implode(r)
     {
      const s=_
      {
       if(y(s))
       {
        break
       }
       drop(r)
      }
     }
    }
    return (typeof(r)==="function")?r():r
   }
  }
 }
 const _=delimit(x,z)
 {
  const a=_
  {
   return group(a,z)
  }
 }
}
function set(x,y,z)
{
 check(is_obj,x)
 check(is_str,y)
 check(is_def,z)
 x[y]=z
}
function shift(x,y)
{
 check(is_arr,x)
 if(is_undef(y))
 {
  return shift(x,1)
 }
 check(is_uint,y)
 if(same(y,1))
 {
  const _=front(x)
  {
   const r=_
   {
    remove(x,0,1)
    return (typeof(r)==="function")?r():r
   }
  }
 }
 remove(x,0,y)
}
function* sleep(x)
{
 check(is_num,x)
 check(gte,x,0)
 const _=(typeof(time_now)==="function")?time_now():time_now
 {
  const start=_
  {
   while(true)
   {
    const _=(typeof(time_now)==="function")?time_now():time_now
    {
     const elapsed=_
     {
      const _=sub(elapsed,start)
      {
       const elapsed=_
       {
        if(gte(elapsed,x))
        {
         break
        }
        yield
       }
      }
     }
    }
   }
  }
 }
}
function slice_l(x,y)
{
 check(is_vec,x)
 check(is_uint,y)
 return slice(x,0,y)
}
function slice_r(x,y)
{
 check(is_vec,x)
 check(is_uint,y)
 const _=sub(x.length,y)
 {
  const n=_
  {
   return slice(x,n,y)
  }
 }
}
function slice(x,y,z)
{
 check(is_vec,x)
 const _=inc(x.length)
 {
  const n1=_
  {
   check(between,y,0,n1)
   if(is_undef(z))
   {
    const _=sub(x.length,y)
    {
     const n=_
     {
      return slice(x,y,n)
     }
    }
   }
   check(between,z,0,n1)
   const _=add(y,z)
   {
    const n2=_
    {
     check(between,n2,0,n1)
     return x.slice(y,n2)
    }
   }
  }
 }
}
function sort(x,y)
{
 check(is_container,x)
 if(is_arr(x))
 {
  if(is_undef(y))
  {
   x.sort()
  }
  else
  {
   x.sort(y)
  }
 }
 else if(is_obj(x))
 {
  function compare(x,y)
  {
   check(is_obj,x)
   check(is_obj,x)
   const _=cmp(x.key,y.key)
   {
    const r=_
    {
     if(same(r,0))
     {
      const _=cmp(x.value,y.value)
      {
       const r=_
       {
        return (typeof(r)==="function")?r():r
       }
      }
     }
     return (typeof(r)==="function")?r():r
    }
   }
  }
  if(is_undef(y))
  {
   return sort(x,compare)
  }
  const _={}
  {
   const r=_
   {
    const _=[]
    {
     const a=_
     {
      for(const k in (typeof(x)==="function")?x():x)
      {
       const _=(typeof(k)==="function")?k():k
       {
        const key=_
        {
         const _=get(x,k)
         {
          const value=_
          {
           const _={key,value}
           {
            const o=_
            {
             push(a,o)
            }
           }
          }
         }
        }
       }
      }
      sort(a,y)
      for(const v of (typeof(a)==="function")?a():a)
      {
       const _=(typeof(v.key)==="function")?v.key():v.key
       {
        const k=_
        {
         put(r,v.key,v.value)
        }
       }
      }
      return (typeof(r)==="function")?r():r
     }
    }
   }
  }
 }
}
function space(...x)
{
 return join(x," ")
}
function split(x,y)
{
 check(is_str,x)
 if(is_undef(y))
 {
  return split(x,"\n")
 }
 if(is_empty(x))
 {
  return []
 }
 return x.split(y)
}
function stop()
{
 throw new Error("stop")
}
function str_indent(x)
{
 check(is_str,x)
 if(is_blank(x))
 {
  return 0
 }
 const _=trim_l(x)
 {
  const s=_
  {
   return sub(x.length,s.length)
  }
 }
}
function str_unindent(x)
{
 check(is_str,x)
 const _=(typeof(x)==="function")?x():x
 {
  let r=_
  {
   while(is_indented(r))
   {
    const _=[]
    {
     const a=_
     {
      for(const v of split(r))
      {
       if(is_empty(v))
       {
        push(a,v)
        continue
       }
       const _=slice(v,1)
       {
        const s=_
        {
         push(a,s)
        }
       }
      }
      r=join(a)
     }
    }
   }
   return (typeof(r)==="function")?r():r
  }
 }
}
function strip_l(x,y)
{
 check(is_str,x)
 check(is_str,y)
 if(match_l(x,y))
 {
  const _=sub(x.length,y.length)
  {
   const n=_
   {
    return slice_r(x,n)
   }
  }
 }
 return (typeof(x)==="function")?x():x
}
function strip_r(x,y)
{
 check(is_str,x)
 check(is_str,y)
 if(match_r(x,y))
 {
  const _=sub(x.length,y.length)
  {
   const n=_
   {
    return slice_l(x,n)
   }
  }
 }
 return (typeof(x)==="function")?x():x
}
function sub(x,y,...z)
{
 check(is_num,x)
 check(is_num,y)
 const _=x-y
 {
  const r=_
  {
   if(is_full(z))
   {
    return sub(r,...z)
   }
   return (typeof(r)==="function")?r():r
  }
 }
}
function tail(x,y)
{
 check(is_arr,x)
 check(is_uint,y)
 if(lt(x.length,y))
 {
  return dup(x)
 }
 return slice_r(x,y)
}
function tbl_column(x,y)
{
 check(is_arr,x)
 check(is_str,y)
 const _=[]
 {
  const r=_
  {
   for(const v of (typeof(x)==="function")?x():x)
   {
    const _=get(v,y)
    {
     const s=_
     {
      push(r,s)
     }
    }
   }
   return (typeof(r)==="function")?r():r
  }
 }
}
function tbl_columns(x)
{
 check(is_arr,x)
 const _=front(x)
 {
  const first=_
  {
   return obj_keys(first)
  }
 }
}
function tbl_init(x)
{
 return []
}
function tbl_render(x)
{
 check(is_arr,x)
 function stringify_tbl(x)
 {
  check(is_arr,x)
  const _=[]
  {
   const r=_
   {
    for(const v of (typeof(x)==="function")?x():x)
    {
     const _=dup(v)
     {
      const row=_
      {
       for(const k in (typeof(v)==="function")?v():v)
       {
        const _=get(row,k)
        {
         const v=_
         {
          if(is_str(v))
          {
           continue
          }
          const _=json_encode(v)
          {
           const s=_
           {
            set(row,k,s)
           }
          }
         }
        }
       }
       push(r,row)
      }
     }
    }
    return (typeof(r)==="function")?r():r
   }
  }
 }
 function pad_column(x)
 {
  check(is_arr,x)
  const _=[]
  {
   const r=_
   {
    const _=[]
    {
     const a=_
     {
      for(const v of (typeof(x)==="function")?x():x)
      {
       if(is_num(v))
       {
        const _=to_str(v)
        {
         const s=_
         {
          push(a,s)
         }
        }
       }
       else if(is_str(v))
       {
        push(a,v)
       }
       else
       {
        stop()
       }
      }
      const _=0
      {
       let length=_
       {
        for(const v of (typeof(a)==="function")?a():a)
        {
         length=max(length,v.length)
        }
        for(const v of (typeof(a)==="function")?a():a)
        {
         const _=pad_r(v," ",length)
         {
          const s=_
          {
           push(r,s)
          }
         }
        }
        return (typeof(r)==="function")?r():r
       }
      }
     }
    }
   }
  }
 }
 const _=stringify_tbl(x)
 {
  const tbl=_
  {
   const _=tbl_columns(tbl)
   {
    const titles=_
    {
     const _=[]
     {
      const columns=_
      {
       for(const v of (typeof(titles)==="function")?titles():titles)
       {
        const _=(typeof(v)==="function")?v():v
        {
         const title=_
         {
          const _=tbl_column(tbl,title)
          {
           const column=_
           {
            unshift(column,title)
            const _=pad_column(column)
            {
             const column=_
             {
              push(columns,column)
             }
            }
           }
          }
         }
        }
       }
       const _=0
       {
        let length=_
        {
         for(const v of (typeof(columns)==="function")?columns():columns)
         {
          const _=front(v)
          {
           const s=_
           {
            length=add(length,s.length)
           }
          }
         }
         const _=[]
         {
          const a=_
          {
           const _=repeat("-",length)
           {
            const separator=_
            {
             push(a,separator)
             const _=[]
             {
              const header=_
              {
               for(const v of (typeof(columns)==="function")?columns():columns)
               {
                const _=shift(v)
                {
                 const s=_
                 {
                  push(header,s)
                 }
                }
               }
               const _=join(header," ")
               {
                const s=_
                {
                 push(a,s)
                 push(a,separator)
                 const _=front(columns)
                 {
                  const first=_
                  {
                   for(const k in (typeof(first)==="function")?first():first)
                   {
                    const _=to_i(k)
                    {
                     const i=_
                     {
                      const _=[]
                      {
                       const line=_
                       {
                        for(const v of (typeof(columns)==="function")?columns():columns)
                        {
                         const _=at(v,i)
                         {
                          const s=_
                          {
                           push(line,s)
                          }
                         }
                        }
                        const _=join(line," ")
                        {
                         const s=_
                         {
                          push(a,s)
                         }
                        }
                       }
                      }
                     }
                    }
                   }
                   push(a,separator)
                   return join(a)
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function time_get()
{
 const _=(typeof(Date.now)==="function")?Date.now():Date.now
 {
  const n=_
  {
   return div(n,1000)
  }
 }
}
function time_hn(x)
{
 check(is_int,x)
 function get_unit(x)
 {
  check(is_num,x)
  const _=60
  {
   const minute=_
   {
    const _=mul(60,minute)
    {
     const hour=_
     {
      const _=mul(24,hour)
      {
       const day=_
       {
        const _=mul(30,day)
        {
         const month=_
         {
          const _=mul(12,month)
          {
           const year=_
           {
            if(lt(x,10))
            {
             const _=to_fixed(x)
             {
              const n=_
              {
               return concat(n,"s")
              }
             }
            }
            if(lt(x,minute))
            {
             const _=trunc(x)
             {
              const n=_
              {
               return concat(n,"s")
              }
             }
            }
            if(lt(x,hour))
            {
             const _=div(x,minute)
             {
              const n=_
              {
               const _=trunc(n)
               {
                const n=_
                {
                 return concat(n,"m")
                }
               }
              }
             }
            }
            if(lt(x,day))
            {
             const _=div(x,hour)
             {
              const n=_
              {
               const _=trunc(n)
               {
                const n=_
                {
                 return concat(n,"h")
                }
               }
              }
             }
            }
            if(lt(x,month))
            {
             const _=div(x,day)
             {
              const n=_
              {
               const _=trunc(n)
               {
                const n=_
                {
                 return concat(n,"d")
                }
               }
              }
             }
            }
            if(lt(x,year))
            {
             const _=div(x,month)
             {
              const n=_
              {
               const _=trunc(n)
               {
                const n=_
                {
                 return concat(n,"m")
                }
               }
              }
             }
            }
            const _=div(x,year)
            {
             const n=_
             {
              const _=trunc(n)
              {
               const n=_
               {
                return concat(n,"y")
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
 const _=(typeof(time_get)==="function")?time_get():time_get
 {
  const now=_
  {
   if(same(x,now))
   {
    return "now"
   }
   if(gt(x,now))
   {
    const _=sub(x,now)
    {
     const n=_
     {
      const _=get_unit(n)
      {
       const s=_
       {
        return concat("in ",s)
       }
      }
     }
    }
   }
   const _=sub(now,x)
   {
    const n=_
    {
     const _=get_unit(n)
     {
      const s=_
      {
       return concat(s," ago")
      }
     }
    }
   }
  }
 }
}
function time_interval(x,y)
{
 check(is_fn,x)
 if(is_undef(y))
 {
  return time_timeout(x,0)
 }
 check(is_uint,y)
 const _=on(x)
 {
  const fn=_
  {
   const _=mul(y,1000)
   {
    const n=_
    {
     setInterval(fn,n)
    }
   }
  }
 }
}
function time_now()
{
 const _=(typeof(time_get)==="function")?time_get():time_get
 {
  const n=_
  {
   return sub(n,start)
  }
 }
}
function time_str(x)
{
 if(is_undef(x))
 {
  const _=(typeof(time_get)==="function")?time_get():time_get
  {
   const n=_
   {
    return time_str(n)
   }
  }
 }
 check(is_num,x)
 const _=mul(x,1000)
 {
  const n=_
  {
   const _=new Date(n)
   {
    const o=_
    {
     const _=(typeof(o.getHours)==="function")?o.getHours():o.getHours
     {
      const h=_
      {
       const _=pad_l(h,"0",2)
       {
        const h=_
        {
         const _=(typeof(o.getMinutes)==="function")?o.getMinutes():o.getMinutes
         {
          const m=_
          {
           const _=pad_l(m,"0",2)
           {
            const m=_
            {
             return concat(h,"h",m,"m")
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function time_timeout(x,y)
{
 check(is_fn,x)
 if(is_undef(y))
 {
  return time_timeout(x,0)
 }
 check(is_num,y)
 const _=on(x)
 {
  const fn=_
  {
   const _=mul(y,1000)
   {
    const n=_
    {
     setTimeout(fn,n)
    }
   }
  }
 }
}
function to_base36(x)
{
 check(is_uint,x)
 return x.toString(36)
}
function to_dump(x)
{
 check(is_def,x)
 if(is_arr(x))
 {
  if(is_empty(x))
  {
   return "arr"
  }
  const _=[]
  {
   const a=_
   {
    push(a,"arr")
    for(const k in (typeof(x)==="function")?x():x)
    {
     const _=to_i(k)
     {
      const i=_
      {
       const _=at(x,i)
       {
        const v=_
        {
         const _=to_dump(v)
         {
          const s=_
          {
           const _=concat("#",i)
           {
            const sharp=_
            {
             if(is_ln(s))
             {
              const _=space("",sharp,s)
              {
               const s=_
               {
                push(a,s)
               }
              }
             }
             else
             {
              const _=space("",sharp)
              {
               const s2=_
               {
                const _=indent(s,2)
                {
                 const s=_
                 {
                  push(a,s2)
                  push(a,s)
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
    push(a,"end")
    return join(a)
   }
  }
 }
 else if(is_obj(x))
 {
  if(is_empty(x))
  {
   return "obj"
  }
  const _=[]
  {
   const a=_
   {
    push(a,"obj")
    for(const k in (typeof(x)==="function")?x():x)
    {
     const _=get(x,k)
     {
      const v=_
      {
       const _=to_dump(v)
       {
        const s=_
        {
         const _=(typeof(k)==="function")?k():k
         {
          let key=_
          {
           if(!(is_word(key)))
           {
            key=to_lit(key)
           }
           if(is_ln(s))
           {
            const _=space("",key,s)
            {
             const s=_
             {
              push(a,s)
             }
            }
           }
           else
           {
            const _=space("",key)
            {
             const s2=_
             {
              const _=indent(s,2)
              {
               const s=_
               {
                push(a,s2)
                push(a,s)
                push(a,"end")
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
    push(a,"end")
    return join(a)
   }
  }
 }
 else if(is_word(x))
 {
  return to_lit(x)
 }
 else if(is_fn(x))
 {
  return space("fn",x.name)
 }
 else
 {
  return json_encode(x)
 }
}
function to_fixed(x,y)
{
 check(is_num,x)
 if(is_undef(y))
 {
  return to_fixed(x,2)
 }
 check(is_uint,y)
 const _=x.toFixed(y)
 {
  const a=_
  {
   const _=split(a,".")
   {
    const a=_
    {
     if(is_single(a))
     {
      return (typeof(s)==="function")?s():s
     }
     const _=front(a)
     {
      const integer=_
      {
       const _=back(a)
       {
        let float=_
        {
         const _=explode(float)
         {
          const digits=_
          {
           while(is_full(digits))
           {
            const _=back(digits)
            {
             const c=_
             {
              if(different(c,"0"))
              {
               break
              }
              drop(digits)
             }
            }
           }
           if(is_empty(digits))
           {
            return (typeof(integer)==="function")?integer():integer
           }
           float=implode(digits)
           return concat(integer,".",float)
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function to_i(x)
{
 check(is_str,x)
 return Number.parseInt(x)
}
function to_int(x)
{
 check(is_str,x)
 const _=to_num(x)
 {
  const r=_
  {
   check(is_int,r)
   return (typeof(r)==="function")?r():r
  }
 }
}
function to_json(x)
{
 check(is_def,x)
 return json_encode(x)
}
function to_lit(x)
{
 check(is_str,x)
 return json_encode(x)
}
function to_lower(x)
{
 check(is_str,x)
 return (typeof(x.toLowerCase)==="function")?x.toLowerCase():x.toLowerCase
}
function to_num(x)
{
 check(is_str,x)
 const _=json_decode(x)
 {
  const r=_
  {
   check(is_num,r)
   return (typeof(r)==="function")?r():r
  }
 }
}
function to_str(x)
{
 check(is_def,x)
 return (typeof(x.toString)==="function")?x.toString():x.toString
}
function to_uint(x)
{
 check(is_str,x)
 const _=to_int(x)
 {
  const r=_
  {
   check(is_uint,r)
   return (typeof(r)==="function")?r():r
  }
 }
}
function to_upper(x)
{
 check(is_str,x)
 return (typeof(x.toUpperCase)==="function")?x.toUpperCase():x.toUpperCase
}
function trim_l(x)
{
 check(is_str,x)
 return (typeof(x.trimStart)==="function")?x.trimStart():x.trimStart
}
function trim_r(x)
{
 check(is_str,x)
 return (typeof(x.trimEnd)==="function")?x.trimEnd():x.trimEnd
}
function trim(x)
{
 check(is_str,x)
 return (typeof(x.trim)==="function")?x.trim():x.trim
}
function trunc(x)
{
 check(is_num,x)
 return Math.trunc(x)
}
function unshift(x,y)
{
 check(is_arr,x)
 check(is_def,y)
 x.unshift(y)
}
function unwrap(x)
{
 check(is_str,x)
 if(is_lit(x))
 {
  return json_decode(x)
 }
 if(is_access(x))
 {
  return split(x,".")
 }
 if(is_tuple(x))
 {
  const _=[]
  {
   const r=_
   {
    for(const v of scan(x,is_member,is_word))
    {
     if(is_member(v))
     {
      push(r,v)
     }
     else if(same(v,":"))
     {
     }
     else
     {
      stop()
     }
    }
    return (typeof(r)==="function")?r():r
   }
  }
 }
 stop()
}
function xor(x,y,...z)
{
 check(is_num,x)
 check(is_num,y)
 const _=x^y
 {
  const r=_
  {
   if(is_full(z))
   {
    return xor(r,...z)
   }
   return (typeof(r)==="function")?r():r
  }
 }
}
function app_home(x)
{
 check(is_str,x)
 const _=[]
 {
  const lines=_
  {
   const _=app_make(x)
   {
    const js=_
    {
     push(lines,"<!doctype html>")
     push(lines,"<html>")
     push(lines,"<head>")
     push(lines,"<meta charset=\"utf-8\">")
     push(lines,"</head>")
     push(lines,"<body>")
     push(lines,"<script>")
     push(lines,js)
     push(lines,"</script>")
     push(lines,"</body>")
     push(lines,"</html>")
     return join(lines)
    }
   }
  }
 }
}
function app_make(x)
{
 check(is_str,x)
 function get_js(x)
 {
  check(is_str,x)
  const _=[]
  {
   const r=_
   {
    const _=file_read(x)
    {
     const s=_
     {
      for(const v of split(s))
      {
       const _=trim_r(v)
       {
        const s=_
        {
         if(is_empty(s))
         {
          continue
         }
         push(r,s)
        }
       }
      }
      return (typeof(r)==="function")?r():r
     }
    }
   }
  }
 }
 function get_files(x)
 {
  check(is_arr,x)
  const _=[]
  {
   const r=_
   {
    for(const v of (typeof(x)==="function")?x():x)
    {
     const _=dir_load(v)
     {
      const a=_
      {
       append(r,a)
      }
     }
    }
    return (typeof(r)==="function")?r():r
   }
  }
 }
 function get_includes(x)
 {
  check(is_str,x)
  const _=[]
  {
   const r=_
   {
    const _=get_app_dir(x)
    {
     const dir=_
     {
      const _=path_concat(dir,"include.txt")
      {
       const a=_
       {
        const _=file_read(a)
        {
         const a=_
         {
          const _=trim(a)
          {
           const a=_
           {
            for(const v of split(a))
            {
             const _=path_concat("src",v)
             {
              const s=_
              {
               push(r,s)
              }
             }
            }
            push(r,dir)
            return (typeof(r)==="function")?r():r
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
 function get_app_dir(x)
 {
  const _=concat("src/app-",x)
  {
   const r=_
   {
    if(is_dir(r))
    {
     return (typeof(r)==="function")?r():r
    }
    const _=concat("src/spa-",x)
    {
     const r=_
     {
      if(is_dir(r))
      {
       return (typeof(r)==="function")?r():r
      }
      stop()
     }
    }
   }
  }
 }
 const _=(typeof(cpl_init)==="function")?cpl_init():cpl_init
 {
  const cpl=_
  {
   const _=get_includes(x)
   {
    const includes=_
    {
     const _=[]
     {
      const lines=_
      {
       for(const v of get_files(includes))
       {
        const _=path_ext(v)
        {
         const ext=_
         {
          if(same(ext,"js"))
          {
           const _=get_js(v)
           {
            const a=_
            {
             append(lines,a)
            }
           }
          }
          else if(same(ext,"cs"))
          {
           const _=file_read(v)
           {
            const s=_
            {
             const _=cpl_compile(cpl,s)
             {
              const js=_
              {
               const _=split(js)
               {
                const a=_
                {
                 append(lines,a)
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
       push(lines,"main()")
       cpl_deinit(cpl)
       return join(lines)
      }
     }
    }
   }
  }
 }
}
function ast_assign(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 check(is_empty,z)
 const _=front(y)
 {
  const left=_
  {
   check(is_name,left)
   const _=slice(y,1)
   {
    const right=_
    {
     const _=expr_right(...right)
     {
      const right=_
      {
       return concat(left,"=",right)
      }
     }
    }
   }
  }
 }
}
function ast_begin(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 check(is_empty,y)
 return ast_block(x,z)
}
function ast_block(x,y)
{
 check(is_obj,x)
 check(is_arr,y)
 const _=cpl_block(x,y)
 {
  const s=_
  {
   const _=indent(s)
   {
    const s=_
    {
     if(is_empty(s))
     {
      return "{\n}"
     }
     return concat("{\n",s,"\n}")
    }
   }
  }
 }
}
function ast_brk(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 check(is_empty,y)
 check(is_empty,z)
 return "break"
}
function ast_call(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 check(is_full,y)
 check(is_empty,z)
 return expr_call(...y)
}
function ast_catch(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 const _=ast_block(x,z)
 {
  const block=_
  {
   if(is_empty(y))
   {
    return concat("catch\n",block)
   }
   check(is_single,y)
   const _=front(y)
   {
    const identifier=_
    {
     check(is_identifier,identifier)
     const _=paren(identifier)
     {
      const list=_
      {
       return concat("catch",list,"\n",block)
      }
     }
    }
   }
  }
 }
}
function ast_check(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 check(is_empty,z)
 const _=join(y,",")
 {
  const r=_
  {
   const _=paren(r)
   {
    const r=_
    {
     const _=concat("check",r)
     {
      const r=_
      {
       return (typeof(r)==="function")?r():r
      }
     }
    }
   }
  }
 }
}
function ast_cont(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 check(is_empty,y)
 check(is_empty,z)
 return "continue"
}
function ast_else(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 check(is_empty,y)
 const _=ast_block(x,z)
 {
  const block=_
  {
   return concat("else\n",block)
  }
 }
}
function ast_elseif(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 const _=expr_right(...y)
 {
  const right=_
  {
   const _=paren(right)
   {
    const list=_
    {
     const _=ast_block(x,z)
     {
      const block=_
      {
       return concat("else if",list,"\n",block)
      }
     }
    }
   }
  }
 }
}
function ast_fn(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 return call_ast_xn(x,y,z,"function")
}
function ast_forin(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 const _=expr_right(...y)
 {
  const right=_
  {
   const _=space("const k in",right)
   {
    const right=_
    {
     const _=paren(right)
     {
      const list=_
      {
       const _=ast_block(x,z)
       {
        const block=_
        {
         return concat("for",list,"\n",block)
        }
       }
      }
     }
    }
   }
  }
 }
}
function ast_fornum(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 const _=expr_right(...y)
 {
  const right=_
  {
   const _=paren(right)
   {
    const right=_
    {
     const _=concat("let i=0;i<",right,";i++")
     {
      const right=_
      {
       const _=paren(right)
       {
        const list=_
        {
         const _=ast_block(x,z)
         {
          const block=_
          {
           return concat("for",list,"\n",block)
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function ast_forof(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 const _=expr_right(...y)
 {
  const right=_
  {
   const _=space("const v of",right)
   {
    const right=_
    {
     const _=paren(right)
     {
      const list=_
      {
       const _=ast_block(x,z)
       {
        const block=_
        {
         return concat("for",list,"\n",block)
        }
       }
      }
     }
    }
   }
  }
 }
}
function ast_gn(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 return call_ast_xn(x,y,z,"function*")
}
function ast_if(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 const _=expr_right(...y)
 {
  const right=_
  {
   const _=paren(right)
   {
    const list=_
    {
     const _=ast_block(x,z)
     {
      const block=_
      {
       return concat("if",list,"\n",block)
      }
     }
    }
   }
  }
 }
}
function ast_include(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 const _=(typeof(y.parameters)==="function")?y.parameters():y.parameters
 {
  const parameters=_
  {
   const _=(typeof(y.children)==="function")?y.children():y.children
   {
    const children=_
    {
     check(is_single,parameters)
     check(is_empty,children)
     const _=front(parameters)
     {
      const s=_
      {
       check(is_lit,s)
       const _=unwrap(s)
       {
        const include=_
        {
         stop()
         if(match_l(include,"/"))
         {
          return cpl_parse(x,include)
         }
         const _=path_concat(y,include)
         {
          const path=_
          {
           return cpl_parse(x,path)
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function ast_inline(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 check(is_single,y)
 check(is_empty,z)
 const _=front(y)
 {
  const first=_
  {
   check(is_lit,first)
   return unwrap(first)
  }
 }
}
function ast_let(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 check(is_many,y)
 check(is_empty,z)
 const _=call_ast_declare(x,y,z)
 {
  const s=_
  {
   return space("const",s)
  }
 }
}
function ast_ret(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 check(is_empty,z)
 if(is_empty(y))
 {
  return "return"
 }
 const _=expr_right(...y)
 {
  const right=_
  {
   return space("return",right)
  }
 }
}
function ast_run(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 check(is_full,y)
 check(is_empty,z)
 const _=expr_call(...y)
 {
  const call=_
  {
   return space("yield*",call)
  }
 }
}
function ast_throw(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 check(is_empty,z)
 const _=expr_right(...y)
 {
  const right=_
  {
   return space("throw",right)
  }
 }
}
function ast_try(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 check(is_empty,y)
 const _=ast_block(x,z)
 {
  const block=_
  {
   return concat("try\n",block)
  }
 }
}
function ast_var(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 check(is_many,y)
 check(is_empty,z)
 const _=call_ast_declare(x,y,z)
 {
  const s=_
  {
   return space("let",s)
  }
 }
}
function ast_while(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 const _=expr_right(...y)
 {
  const right=_
  {
   const _=paren(right)
   {
    const list=_
    {
     const _=ast_block(x,z)
     {
      const block=_
      {
       return concat("while",list,"\n",block)
      }
     }
    }
   }
  }
 }
}
function ast_yield(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 check(is_empty,z)
 if(is_empty(y))
 {
  return "yield"
 }
 const _=expr_right(...y)
 {
  const right=_
  {
   return space("yield",right)
  }
 }
}
function call_ast_declare(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 check(is_empty,z)
 const _=front(y)
 {
  const left=_
  {
   const _=slice(y,1)
   {
    const right=_
    {
     const _=expr_right(...right)
     {
      const right=_
      {
       return concat(left,"=",right)
      }
     }
    }
   }
  }
 }
}
function call_ast_xn(x,y,z,a)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 check(is_str,a)
 function get_argument(x)
 {
  check(is_str,x)
  if(is_identifier(x))
  {
   return (typeof(x)==="function")?x():x
  }
  if(is_tuple(x))
  {
   const _=unwrap(x)
   {
    const a=_
    {
     check(is_pair,a)
     const _=front(a)
     {
      const name=_
      {
       const _=back(a)
       {
        const etc=_
        {
         check(is_identifier,name)
         check(same,etc,"etc")
         return concat("...",name)
        }
       }
      }
     }
    }
   }
  }
  stop()
 }
 const _=front(y)
 {
  const name=_
  {
   check(is_name,name)
   const _=slice(y,1)
   {
    const parameters=_
    {
     const _=map(parameters,get_argument)
     {
      const args=_
      {
       const _=join(args,",")
       {
        const args=_
        {
         const _=paren(args)
         {
          const list=_
          {
           const _=concat(name,list)
           {
            const call=_
            {
             const _=space(a,call)
             {
              const xn=_
              {
               const _=ast_block(x,z)
               {
                const block=_
                {
                 return concat(xn,"\n",block)
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function cpl_block(x,y)
{
 check(is_obj,x)
 check(is_arr,y)
 const _=[]
 {
  const a=_
  {
   for(const v of (typeof(y)==="function")?y():y)
   {
    const _=cpl_translate(x,v)
    {
     const s=_
     {
      push(a,s)
     }
    }
   }
   return join(a)
  }
 }
}
function cpl_compile(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 const _=(typeof(x)==="function")?x():x
 {
  const cpl=_
  {
   function scan(x)
   {
    check(is_str,x)
    return cpl_scan(cpl,x)
   }
   const _=app_parse(y,scan)
   {
    const nodes=_
    {
     const _=cpl_scope(x,nodes)
     {
      const nodes=_
      {
       try
       {
        return cpl_block(x,nodes)
       }
       catch(e)
       {
        cpl_dump(x)
        throw (typeof(e)==="function")?e():e
       }
      }
     }
    }
   }
  }
 }
}
function cpl_deinit(x)
{
 check(is_obj,x)
 const _=json_encode(x.cache)
 {
  const s=_
  {
   file_save(x.path,s)
  }
 }
}
function cpl_dump(x)
{
 check(is_obj,x)
 function dump_ast(x)
 {
  const _=[]
  {
   const a=_
   {
    const _=(typeof(x.parameters)==="function")?x.parameters():x.parameters
    {
     const parameters=_
     {
      const _=(typeof(x.children)==="function")?x.children():x.children
      {
       const children=_
       {
        const _=[]
        {
         const a2=_
         {
          const _=[]
          {
           const a3=_
           {
            push(a2,x.operator)
            append(a2,parameters)
            for(const v of (typeof(a2)==="function")?a2():a2)
            {
             if(is_token(v))
             {
              push(a3,v)
              continue
             }
             const _=to_lit(v)
             {
              const s=_
              {
               push(a3,s)
              }
             }
            }
            const _=space(...a3)
            {
             const s=_
             {
              push(a,s)
              for(const v of (typeof(children)==="function")?children():children)
              {
               const _=dump_ast(v)
               {
                const s=_
                {
                 for(const v of split(s))
                 {
                  const _=concat(" ",v)
                  {
                   const s=_
                   {
                    push(a,s)
                   }
                  }
                 }
                }
               }
              }
              if(is_full(children))
              {
               push(a,"end")
              }
              return join(a)
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
 for(const k in (typeof(x.stack)==="function")?x.stack():x.stack)
 {
  const _=to_i(k)
  {
   const i=_
   {
    const _=at(x.stack,i)
    {
     const v=_
     {
      const _=inc(i)
      {
       const n=_
       {
        const _=concat("#",n)
        {
         const frame=_
         {
          const _=space("frame",frame)
          {
           const title=_
           {
            flower(title)
            const _=dump_ast(v)
            {
             const s=_
             {
              for(const v of split(s))
              {
               log(">",v)
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function cpl_init()
{
 const _="cache.txt"
 {
  const path=_
  {
   function load_cache()
   {
    if(is_file(path))
    {
     const _=file_read(path)
     {
      const s=_
      {
       return json_decode(s)
      }
     }
    }
    return {}
   }
   const _=(typeof(load_cache)==="function")?load_cache():load_cache
   {
    const cache=_
    {
     const _=fn_match("ast_*")
     {
      const fns=_
      {
       const _=[]
       {
        const asts=_
        {
         for(const k in (typeof(fns)==="function")?fns():fns)
         {
          const _=get(fns,k)
          {
           const v=_
           {
            const _=split(k,"_")
            {
             const a=_
             {
              shift(a)
              const _=join(a,"_")
              {
               const s=_
               {
                put(asts,s,v)
               }
              }
             }
            }
           }
          }
         }
         const _=[]
         {
          const stack=_
          {
           return {asts,stack,path,cache}
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function cpl_scan(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 if(has(x.cache,y))
 {
  return get(x.cache,y)
 }
 const _=scan(y)
 {
  const r=_
  {
   put(x.cache,y,r)
   return (typeof(r)==="function")?r():r
  }
 }
}
function cpl_scope(x,y)
{
 check(is_obj,x)
 check(is_arr,y)
 function is_declare(x)
 {
  if(same(x,"let"))
  {
   return true
  }
  if(same(x,"var"))
  {
   return true
  }
  return false
 }
 const _=[]
 {
  const r=_
  {
   const _=dup(y)
   {
    const a=_
    {
     while(is_full(a))
     {
      const _=shift(a)
      {
       const node=_
       {
        const _=(typeof(node.operator)==="function")?node.operator():node.operator
        {
         const operator=_
         {
          const _=(typeof(node.parameters)==="function")?node.parameters():node.parameters
          {
           const parameters=_
           {
            const _=(typeof(operator)==="function")?operator():operator
            {
             const declare=_
             {
              const _=null
              {
               let name=_
               {
                const _=null
                {
                 let rvalue=_
                 {
                  if(is_full(parameters))
                  {
                   name=front(parameters)
                   rvalue=slice(parameters,1)
                  }
                  if(is_declare(operator))
                  {
                   check(is_str,name)
                   check(is_arr,rvalue)
                   const _="let"
                   {
                    const operator=_
                    {
                     const _=["_",...rvalue]
                     {
                      const parameters=_
                      {
                       const _=[]
                       {
                        const children=_
                        {
                         const _={operator,parameters,children}
                         {
                          const node2=_
                          {
                           push(r,node2)
                           const _="begin"
                           {
                            const operator=_
                            {
                             const _=[]
                             {
                              const parameters=_
                              {
                               const _=[]
                               {
                                const children=_
                                {
                                 const _={operator,parameters,children}
                                 {
                                  const node3=_
                                  {
                                   push(r,node3)
                                   const _=(typeof(declare)==="function")?declare():declare
                                   {
                                    const operator=_
                                    {
                                     const _=[name,"_"]
                                     {
                                      const parameters=_
                                      {
                                       const _=[]
                                       {
                                        const children=_
                                        {
                                         const _={operator,parameters,children}
                                         {
                                          const node4=_
                                          {
                                           push(node3.children,node4)
                                           const _="begin"
                                           {
                                            const operator=_
                                            {
                                             const _=[]
                                             {
                                              const parameters=_
                                              {
                                               const _=cpl_scope(x,a)
                                               {
                                                const children=_
                                                {
                                                 const _={operator,parameters,children}
                                                 {
                                                  const node5=_
                                                  {
                                                   push(node3.children,node5)
                                                   clear(a)
                                                  }
                                                 }
                                                }
                                               }
                                              }
                                             }
                                            }
                                           }
                                          }
                                         }
                                        }
                                       }
                                      }
                                     }
                                    }
                                   }
                                  }
                                 }
                                }
                               }
                              }
                             }
                            }
                           }
                          }
                         }
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                  else
                  {
                   const _=cpl_scope(x,node.children)
                   {
                    const children=_
                    {
                     const _={operator,parameters,children}
                     {
                      const node=_
                      {
                       push(r,node)
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
     return (typeof(r)==="function")?r():r
    }
   }
  }
 }
}
function cpl_translate(x,y)
{
 check(is_obj,x)
 check(is_obj,y)
 function translate(x,y,z,a)
 {
  check(is_obj,x)
  check(is_str,y)
  check(is_arr,z)
  check(is_arr,a)
  for(const k in (typeof(x.asts)==="function")?x.asts():x.asts)
  {
   if(different(k,y))
   {
    continue
   }
   const _=get(x.asts,k)
   {
    const v=_
    {
     return v(x,z,a)
    }
   }
  }
  const _=[y,...z]
  {
   const call=_
   {
    return ast_call(x,call,a)
   }
  }
 }
 const _=(typeof(y.operator)==="function")?y.operator():y.operator
 {
  const operator=_
  {
   const _=(typeof(y.parameters)==="function")?y.parameters():y.parameters
   {
    const parameters=_
    {
     const _=(typeof(y.children)==="function")?y.children():y.children
     {
      const children=_
      {
       try
       {
        return translate(x,operator,parameters,children)
       }
       catch(e)
       {
        unshift(x.stack,y)
        throw (typeof(e)==="function")?e():e
       }
      }
     }
    }
   }
  }
 }
}
function expr_arg(x)
{
 check(is_str,x)
 if(is_numeric(x))
 {
  return (typeof(x)==="function")?x():x
 }
 if(is_lit(x))
 {
  return (typeof(x)==="function")?x():x
 }
 if(is_identifier(x))
 {
  return (typeof(x)==="function")?x():x
 }
 if(is_access(x))
 {
  return (typeof(x)==="function")?x():x
 }
 if(is_tuple(x))
 {
  const _=unwrap(x)
  {
   const a=_
   {
    check(is_pair,a)
    const _=front(a)
    {
     const name=_
     {
      const _=back(a)
      {
       const etc=_
       {
        check(is_identifier,name)
        check(same,etc,"etc")
        return concat("...",name)
       }
      }
     }
    }
   }
  }
 }
 const _=to_lit(x)
 {
  const s=_
  {
   log("argument",s)
   stop()
  }
 }
}
function expr_arr(...x)
{
 const _=map(x,expr_arg)
 {
  const args=_
  {
   const _=join(args,",")
   {
    const s=_
    {
     return bracket(s)
    }
   }
  }
 }
}
function expr_call(x,...y)
{
 check(is_name,x)
 const _=map(y,expr_arg)
 {
  const args=_
  {
   const _=join(args,",")
   {
    const args=_
    {
     const _=paren(args)
     {
      const list=_
      {
       return concat(x,list)
      }
     }
    }
   }
  }
 }
}
function expr_in(x,y,...z)
{
 check(is_identifier,x)
 check(is_identifier,y)
 check(is_empty,z)
 return space(y,"in",x)
}
function expr_inline(x)
{
 check(is_str,x)
 return unwrap(x)
}
function expr_instanceof(x,y,...z)
{
 check(is_name,x)
 check(is_identifier,y)
 check(is_empty,z)
 return space(x,"instanceof",y)
}
function expr_new(...x)
{
 const _=expr_rvalue(...x)
 {
  const rvalue=_
  {
   return space("new",rvalue)
  }
 }
}
function expr_obj(...x)
{
 check(every,x,is_identifier)
 const _=join(x,",")
 {
  const s=_
  {
   return brace(s)
  }
 }
}
function expr_right(x,...y)
{
 if(is_empty(y))
 {
  if(same(x,"arr"))
  {
  }
  else if(same(x,"obj"))
  {
  }
  else if(same(x,"_"))
  {
  }
  else if(same(x,"null"))
  {
  }
  else if(same(x,"true"))
  {
  }
  else if(same(x,"false"))
  {
  }
  else if(is_numeric(x))
  {
  }
  else if(is_lit(x))
  {
  }
  else
  {
   const _=to_lit("function")
   {
    const fn=_
    {
     const _=paren(x)
     {
      const condition=_
      {
       const _=concat("typeof",condition,"===",fn)
       {
        const condition=_
        {
         const _=paren(condition)
         {
          const condition=_
          {
           const _=concat(x,"()")
           {
            const call=_
            {
             return concat(condition,"?",call,":",x)
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
 return expr_rvalue(x,...y)
}
function expr_run(...x)
{
 const _=expr_call(...x)
 {
  const call=_
  {
   return space("yield*",call)
  }
 }
}
function expr_rvalue(...x)
{
 const _=front(x)
 {
  const first=_
  {
   if(is_single(x))
   {
    if(same(first,"arr"))
    {
     return (typeof(expr_arr)==="function")?expr_arr():expr_arr
    }
    else if(same(first,"obj"))
    {
     return (typeof(expr_obj)==="function")?expr_obj():expr_obj
    }
    else
    {
     return (typeof(first)==="function")?first():first
    }
   }
   const _=slice(x,1)
   {
    const args=_
    {
     if(same(first,"call"))
     {
      return expr_call(...args)
     }
     else if(same(first,"run"))
     {
      return expr_run(...args)
     }
     else if(same(first,"arr"))
     {
      return expr_arr(...args)
     }
     else if(same(first,"obj"))
     {
      return expr_obj(...args)
     }
     else if(same(first,"value"))
     {
      return expr_value(...args)
     }
     else if(same(first,"new"))
     {
      return expr_new(...args)
     }
     else if(same(first,"in"))
     {
      return expr_in(...args)
     }
     else if(same(first,"instanceof"))
     {
      return expr_instanceof(args)
     }
     else if(same(first,"inline"))
     {
      return expr_inline(...args)
     }
     else if(same(first,"not"))
     {
      const _=expr_right(...args)
      {
       const right=_
       {
        const _=paren(right)
        {
         const right=_
         {
          return concat("!",right)
         }
        }
       }
      }
     }
     else
     {
      return expr_call(...x)
     }
    }
   }
  }
 }
}
function expr_value(x,...y)
{
 check(is_str,x)
 check(is_empty,y)
 return (typeof(x)==="function")?x():x
}
function digest(x)
{
 check(is_str,x)
 const _=(typeof(path_tmp)==="function")?path_tmp():path_tmp
 {
  const tmp=_
  {
   file_save(tmp,x)
   const _=os_execute("sha256sum","--binary",tmp)
   {
    const r=_
    {
     fs_remove(tmp)
     const _=split(r," ")
     {
      const r=_
      {
       const _=front(r)
       {
        const r=_
        {
         return (typeof(r)==="function")?r():r
        }
       }
      }
     }
    }
   }
  }
 }
}
function dir_change(x)
{
 check(is_str,x)
 process.chdir(x)
}
function dir_current()
{
 return (typeof(process.cwd)==="function")?process.cwd():process.cwd
}
function dir_load(x)
{
 check(is_str,x)
 const _=[]
 {
  const r=_
  {
   for(const v of dir_read(x,true))
   {
    if(is_file(v))
    {
     push(r,v)
    }
    else if(is_dir(v))
    {
     const _=dir_load(v)
     {
      const a=_
      {
       append(r,a)
      }
     }
    }
    else
    {
     stop()
    }
   }
   return (typeof(r)==="function")?r():r
  }
 }
}
function dir_make(x)
{
 check(is_str,x)
 const _=true
 {
  const recursive=_
  {
   const _={recursive}
   {
    const o=_
    {
     fs.mkdirSync(x,o)
    }
   }
  }
 }
}
function dir_read(x,y)
{
 check(is_str,x)
 if(is_undef(y))
 {
  return dir_read(x,false)
 }
 check(is_bool,y)
 const _=[]
 {
  const r=_
  {
   const _=path_real(x)
   {
    const dir=_
    {
     const _=fs.readdirSync(dir)
     {
      const a=_
      {
       sort(a)
       for(const v of (typeof(a)==="function")?a():a)
       {
        const _=path_concat(dir,v)
        {
         const s=_
         {
          if(is_file(s))
          {
           push(r,s)
           continue
          }
          if((typeof(y)==="function")?y():y)
          {
           if(is_dir(s))
           {
            push(r,s)
           }
          }
         }
        }
       }
       return (typeof(r)==="function")?r():r
      }
     }
    }
   }
  }
 }
}
function dir_remove(x)
{
 check(is_str,x)
 const _=true
 {
  const recursive=_
  {
   const _={recursive}
   {
    const o=_
    {
     fs.rmdirSync(x,o)
    }
   }
  }
 }
}
function dir_reset(x)
{
 check(is_str,x)
 fs_remove(x)
 dir_make(x)
}
function dir_size(x)
{
 check(is_str,x)
 const _=0
 {
  let r=_
  {
   for(const v of dir_load(x))
   {
    const _=file_size(v)
    {
     const n=_
     {
      r=add(r,n)
     }
    }
   }
   return (typeof(r)==="function")?r():r
  }
 }
}
function file_read(x)
{
 check(is_str,x)
 const _=fs.readFileSync(x)
 {
  const o=_
  {
   return (typeof(o.toString)==="function")?o.toString():o.toString
  }
 }
}
function file_save(x,y)
{
 check(is_str,x)
 check(is_str,y)
 if(is_file(x))
 {
  const _=file_read(x)
  {
   const s=_
   {
    if(same(s,y))
    {
     return
    }
   }
  }
 }
 const _=path_dir(x)
 {
  const dir=_
  {
   if(!(is_dir(dir)))
   {
    dir_make(dir)
   }
   file_write(x,y)
  }
 }
}
function file_size(x)
{
 check(is_str,x)
 const _=fs.statSync(x)
 {
  const v=_
  {
   return (typeof(v.size)==="function")?v.size():v.size
  }
 }
}
function file_write(x,y)
{
 check(is_str,x)
 check(is_str,y)
 fs.writeFileSync(x,y)
}
function fs_copy(x,y)
{
 check(is_str,x)
 check(is_str,y)
 if(is_file(x))
 {
  if(is_dir(y))
  {
   const _=path_base(x)
   {
    const base=_
    {
     const _=path_concat(y,base)
     {
      const path=_
      {
       fs_copy(x,path)
       return
      }
     }
    }
   }
  }
 }
 const _=true
 {
  const force=_
  {
   const _=true
   {
    const recursive=_
    {
     const _={force,recursive}
     {
      const o=_
      {
       fs.cpSync(x,y,o)
      }
     }
    }
   }
  }
 }
}
function fs_remove(x)
{
 check(is_str,x)
 const _=true
 {
  const force=_
  {
   const _=true
   {
    const recursive=_
    {
     const _={force,recursive}
     {
      const o=_
      {
       fs.rmSync(x,o)
      }
     }
    }
   }
  }
 }
}
function ip_list()
{
 const _=os_execute("hostname","--all-ip-addresses")
 {
  const s=_
  {
   return split(s," ")
  }
 }
}
function is_dir(x)
{
 if(!(is_str(x)))
 {
  return false
 }
 const _=false
 {
  const throwIfNoEntry=_
  {
   const _={throwIfNoEntry}
   {
    const o=_
    {
     const _=fs.statSync(x,o)
     {
      const o=_
      {
       if(is_undef(o))
       {
        return false
       }
       return (typeof(o.isDirectory)==="function")?o.isDirectory():o.isDirectory
      }
     }
    }
   }
  }
 }
}
function is_file(x)
{
 if(!(is_str(x)))
 {
  return false
 }
 const _=false
 {
  const throwIfNoEntry=_
  {
   const _={throwIfNoEntry}
   {
    const o=_
    {
     const _=fs.statSync(x,o)
     {
      const o=_
      {
       if(is_undef(o))
       {
        return false
       }
       return (typeof(o.isFile)==="function")?o.isFile():o.isFile
      }
     }
    }
   }
  }
 }
}
function is_fs(x)
{
 if(!(is_str(x)))
 {
  return false
 }
 const _=false
 {
  const throwIfNoEntry=_
  {
   const _={throwIfNoEntry}
   {
    const o=_
    {
     const _=fs.statSync(x,o)
     {
      const o=_
      {
       return is_def(o)
      }
     }
    }
   }
  }
 }
}
function is_readable(x)
{
 if(is_file(x))
 {
  const _=null
  {
   let fd=_
   {
    try
    {
     fd=fs.openSync(x)
    }
    catch
    {
     return false
    }
    const _=file_size(x)
    {
     const n=_
     {
      if(gt(n,0))
      {
       const _=Buffer.alloc(1)
       {
        const buffer=_
        {
         try
         {
          fs.readSync(fd,buffer)
         }
         catch
         {
          fs.closeSync(fd)
          return false
         }
        }
       }
      }
      fs.closeSync(fd)
      return true
     }
    }
   }
  }
 }
 else if(is_dir(x))
 {
  try
  {
   fs.readdirSync(x)
  }
  catch
  {
   return false
  }
  return true
 }
 else
 {
  return false
 }
}
function main_node()
{
 function on_uncaught_exception(x,y)
 {
  check(is_obj,x)
  check(is_str,y)
  const _=space(x.message,"/",y)
  {
   const title=_
   {
    flower(title)
    const _=dbg_origin_cs(x)
    {
     const s=_
     {
      const _=tbl_render(s)
      {
       const s=_
       {
        log(s)
        const _=dbg_backtrace(x)
        {
         const s=_
         {
          const _=tbl_render(s)
          {
           const s=_
           {
            log(s)
            const _=dbg_origin_js(x)
            {
             const s=_
             {
              const _=tbl_render(s)
              {
               const s=_
               {
                log(s)
                process.exit(1)
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
 global.cp=require("child_process")
 global.crypto=require("crypto")
 global.fs=require("fs")
 global.http=require("http")
 global.os=require("os")
 global.path=require("path")
 global.util=require("util")
 process.on("uncaughtExceptionMonitor",on_uncaught_exception)
}
function open(x)
{
 check(is_str,x)
 os_system("xdg-open",x)
}
function os_detach(...x)
{
 const _=os_spawn(...x)
 {
  const o=_
  {
   o.unref()
  }
 }
}
function os_execute(x,...y)
{
 check(is_str,x)
 const _=mul(1,1024,1024,1024)
 {
  const maxBuffer=_
  {
   const _="utf8"
   {
    const encoding=_
    {
     const _={maxBuffer,encoding}
     {
      const o=_
      {
       const _=cp.spawnSync(x,y,o)
       {
        const streams=_
        {
         const _=(typeof(streams.stdout.toString)==="function")?streams.stdout.toString():streams.stdout.toString
         {
          const out=_
          {
           const _=trim_r(out)
           {
            const out=_
            {
             const _=(typeof(streams.stderr.toString)==="function")?streams.stderr.toString():streams.stderr.toString
             {
              const err=_
              {
               const _=trim_r(err)
               {
                const err=_
                {
                 const _=[]
                 {
                  const a=_
                  {
                   if(is_full(out))
                   {
                    push(a,out)
                   }
                   if(is_full(err))
                   {
                    push(a,err)
                   }
                   return join(a)
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function os_home()
{
 return (typeof(os.homedir)==="function")?os.homedir():os.homedir
}
function os_host()
{
 return (typeof(os.hostname)==="function")?os.hostname():os.hostname
}
function os_ps()
{
 const _=[]
 {
  const r=_
  {
   const _=os_execute("ps","aux")
   {
    const s=_
    {
     const _=split(s)
     {
      const a=_
      {
       shift(a)
       for(const v of (typeof(a)==="function")?a():a)
       {
        const _=replace_rec(v,"  "," ")
        {
         const s=_
         {
          const _=split(s," ")
          {
           const a=_
           {
            const _=at(a,1)
            {
             const pid=_
             {
              const _=to_uint(pid)
              {
               const pid=_
               {
                const _=at(a,10)
                {
                 const path=_
                 {
                  const _=slice(a,11)
                  {
                   const args=_
                   {
                    const _={pid,path,args}
                    {
                     const o=_
                     {
                      push(r,o)
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
       return (typeof(r)==="function")?r():r
      }
     }
    }
   }
  }
 }
}
function os_shell(...x)
{
 const _=os_execute(...x)
 {
  const result=_
  {
   const _=join(x," ")
   {
    const command=_
    {
     const _=to_lit(command)
     {
      const command=_
      {
       log("shell",command)
       for(const v of split(result))
       {
        log(" >",v)
       }
      }
     }
    }
   }
  }
 }
}
function os_spawn(x,...y)
{
 check(is_str,x)
 const _=true
 {
  const detached=_
  {
   const _="ignore"
   {
    const stdio=_
    {
     const _={detached,stdio}
     {
      const o=_
      {
       return cp.spawn(x,y,o)
      }
     }
    }
   }
  }
 }
}
function os_system(x,...y)
{
 check(is_str,x)
 const _="inherit"
 {
  const stdio=_
  {
   const _={stdio}
   {
    const o=_
    {
     const _=cp.spawnSync(x,y,o)
     {
      const o=_
      {
       return (typeof(o.status)==="function")?o.status():o.status
      }
     }
    }
   }
  }
 }
}
function os_user()
{
 const _=(typeof(os.userInfo)==="function")?os.userInfo():os.userInfo
 {
  const o=_
  {
   return (typeof(o.username)==="function")?o.username():o.username
  }
 }
}
function path_base(x)
{
 check(is_str,x)
 return path.basename(x)
}
function path_dir(x)
{
 check(is_str,x)
 return path.dirname(x)
}
function path_ext(x)
{
 check(is_str,x)
 const _=path.extname(x)
 {
  const s=_
  {
   return strip_l(s,".")
  }
 }
}
function path_real(x)
{
 check(is_str,x)
 return fs.realpathSync(x)
}
function path_tmp(x)
{
 if(is_undef(x))
 {
  return path_tmp("tmp")
 }
 check(is_str,x)
 check(is_dir,x)
 while(true)
 {
  const _=(typeof(random)==="function")?random():random
  {
   const r=_
   {
    const _=to_base36(r)
    {
     const r=_
     {
      const _=concat(r,".txt")
      {
       const r=_
       {
        const _=path_concat(x,r)
        {
         const r=_
         {
          if(!(is_file(r)))
          {
           return (typeof(r)==="function")?r():r
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function ssh_execute(...x)
{
 return ssh_pass(...x)
}
function ssh_pass(x,...y)
{
 check(is_str,x)
 return os_execute("sshpass","-p",x,...y)
}
function ssh_system(x,...y)
{
 check(is_str,x)
 const _=ssh_pass(x,...y)
 {
  const r=_
  {
   const _=split(r)
   {
    const a=_
    {
     if(is_full(a))
     {
      log(...y)
      for(const v of (typeof(a)==="function")?a():a)
      {
       log(" >",v)
      }
     }
     return (typeof(r)==="function")?r():r
    }
   }
  }
 }
}
function init(...x)
{
 function get_apps()
 {
  const _=[]
  {
   const r=_
   {
    for(const v of dir_read("src",true))
    {
     const _=path_base(v)
     {
      const base=_
      {
       const _=split(base,"-")
       {
        const a=_
        {
         shift(a)
         const _=join(a,"-")
         {
          const name=_
          {
           push(r,name)
          }
         }
        }
       }
      }
     }
    }
    return (typeof(r)==="function")?r():r
   }
  }
 }
 function is_app(x)
 {
  if(!(is_str(x)))
  {
   return false
  }
  const _=concat("app-",x)
  {
   const base=_
   {
    const _=path_concat("src",base)
    {
     const path=_
     {
      return is_dir(path)
     }
    }
   }
  }
 }
 const _=dup(x)
 {
  const parameters=_
  {
   const _=(typeof(get_apps)==="function")?get_apps():get_apps
   {
    const apps=_
    {
     if(is_empty(parameters))
     {
      dump(apps)
      return
     }
     const _=shift(parameters)
     {
      const app=_
      {
       if(!(is_app(app)))
       {
        dump(apps)
        return
       }
       const _=true
       {
        let run=_
        {
         if(extract(parameters,"--compile"))
         {
          run=false
         }
         const _=app_make(app)
         {
          const code=_
          {
           const _=concat("out-",app,".js")
           {
            const out=_
            {
             const _=(typeof(process.argv0)==="function")?process.argv0():process.argv0
             {
              const node=_
              {
               file_save(out,code)
               if((typeof(run)==="function")?run():run)
               {
                dir_reset("tmp")
                os_system(node,"--trace-uncaught",out,...parameters)
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
main()