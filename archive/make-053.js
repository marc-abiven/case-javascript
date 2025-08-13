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
    return add(r,...z)
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
    return and(r,...z)
   return (typeof(r)==="function")?r():r
  }
 }
}
function angle(x)
{
 check(is_str,x)
 return concat("<",x,">")
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
     return replace(file,".","-")
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
       return replace(base,".","-")
      const _=path_file(base)
      {
       const file=_
       return replace(file,".","-")
      }
     }
    }
   }
  }
 }
 else
  stop()
}
function append(x,y)
{
 check(is_arr,x)
 check(is_arr,y)
 for(const v of (typeof(y)==="function")?y():y)
  push(x,v)
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
    return x[y]
   x[y]=z
  }
 }
}
function back(x,y,z)
{
 check(is_vec,x)
 if(is_undef(y))
  return back(x,0)
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
      return at(x,n)
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
  return false
 if(gt(x,z))
  return false
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
           return concat(s,"b")
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
               return concat(s,"Kb")
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
               return concat(s,"Mb")
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
               return concat(s,"Gb")
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
function capture(x,...y)
{
 check(is_fn,x)
 check(is_null,output)
 global.output=""
 x(...y)
 const _=(typeof(output)==="function")?output():output
 {
  const r=_
  {
   global.output=null
   return (typeof(r)==="function")?r():r
  }
 }
}
function check(x,...y)
{
 if(is_true(x))
 {
  if(is_empty(y))
   return
 }
 else if(is_fn(x))
 {
  const _=x(...y)
  {
   const b=_
   {
    if(is_true(b))
     return
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
  return 1
 if(x<y)
  return -1
 return 0
}
function collate(x)
{
 check(is_arr,x)
 function is_delimited(x)
 {
  if(same(x,"_"))
   return false
  if(is_punct(x))
   return true
  if(is_space(x))
   return true
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
  check(is_str,y)
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
        return (typeof(r)==="function")?r():r
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
   return date_str(n)
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
function dbg_backtrace(x)
{
 if(is_undef(x))
 {
  const _=new Error("backtrace")
  {
   const e=_
   return dbg_backtrace(e.stack)
  }
 }
 check(is_str,x)
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
      continue
     const _=json_decode(v)
     {
      const n=_
      {
       if(!(is_uint(n)))
        continue
       push(r,n)
      }
     }
    }
    return (typeof(r)==="function")?r():r
   }
  }
 }
 const _=[]
 {
  const r=_
  {
   const _=trim(x)
   {
    const stack=_
    {
     const _=split(stack)
     {
      const stack=_
      {
       const _=(typeof(dbg_source_map)==="function")?dbg_source_map():dbg_source_map
       {
        const map=_
        {
         for(const k in (typeof(stack)==="function")?stack():stack)
         {
          const _=to_i(k)
          {
           const i=_
           {
            const _=at(stack,i)
            {
             const v=_
             {
              if((typeof(is_node)==="function")?is_node():is_node)
              {
               const _=at(process.argv,1)
               {
                const script=_
                {
                 if(!(contain(v,script)))
                  continue
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
                       shift(a)
                      const _=shift(a)
                      {
                       let fn=_
                       {
                        if(is_empty(fn))
                        {
                         fn="anonymous"
                        }
                        if(!(is_noun(fn)))
                         continue
                        const _=shift(a)
                        {
                         const a=_
                         {
                          const _=scan(a,is_atom)
                          {
                           const a=_
                           {
                            const _=parse_numbers(a)
                            {
                             const a=_
                             {
                              if(!(is_many(a)))
                               continue
                              const _=back(a,1)
                              {
                               const njs=_
                               {
                                const _=dec(njs)
                                {
                                 let index=_
                                 {
                                  if(gte(index,map.source.length))
                                   continue
                                  const _=at(map.source,index)
                                  {
                                   const location=_
                                   {
                                    const _=trim(location.js)
                                    {
                                     const js=_
                                     {
                                      const _=trim(location.cs)
                                      {
                                       const cs=_
                                       {
                                        const _=(typeof(location.path)==="function")?location.path():location.path
                                        {
                                         const path=_
                                         {
                                          const _=(typeof(location.index)==="function")?location.index():location.index
                                          {
                                           const ncs=_
                                           {
                                            const _=inc(location.index)
                                            {
                                             const ncs=_
                                             {
                                              const _={fn,njs,js,path,ncs,cs}
                                              {
                                               const o=_
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
function dbg_callstack(x)
{
 if(is_undef(x))
 {
  const _=new Error("callstack")
  {
   const e=_
   return dbg_callstack(e.stack)
  }
 }
 check(is_str,x)
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
        if(same(fn,"throw"))
        {
        }
        else if(same(fn,"stop"))
        {
        }
        else if(same(fn,"check"))
        {
        }
        else
         break
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
function dbg_origin_cs(x,y)
{
 if(is_undef(x))
 {
  const _=new Error("origin-cs")
  {
   const e=_
   return dbg_origin_cs(e.stack)
  }
 }
 check(is_str,x)
 if(is_undef(y))
  return dbg_origin_cs(x,3)
 check(is_uint,y)
 const _=(typeof(dbg_source_map)==="function")?dbg_source_map():dbg_source_map
 {
  const map=_
  {
   const _=dbg_callstack(x)
   {
    const frames=_
    {
     const _=head(frames,y)
     {
      const frames=_
      {
       for(const k in (typeof(frames)==="function")?frames():frames)
       {
        const _=to_i(k)
        {
         const i=_
         {
          const _=at(frames,i)
          {
           const v=_
           {
            const _=get(map.files,v.path)
            {
             const file=_
             {
              const _=(typeof(v.ncs)==="function")?v.ncs():v.ncs
              {
               const line=_
               {
                const _=dbg_origin(file,line)
                {
                 const t=_
                 {
                  const _=tbl_render(t)
                  {
                   const s=_
                   {
                    const _=txt_prepend(s,"> ")
                    {
                     const s=_
                     {
                      const _=inc(i)
                      {
                       const n=_
                       {
                        const _=concat("#",n)
                        {
                         const s2=_
                         {
                          const _=space("stack frame",s2)
                          {
                           const s2=_
                           {
                            flower(s2)
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
  const _=new Error("origin-js")
  {
   const e=_
   return dbg_origin_js(e.stack)
  }
 }
 check(is_str,x)
 if(is_undef(y))
  return dbg_origin_js(x,3)
 check(is_uint,y)
 const _=(typeof(dbg_source_map)==="function")?dbg_source_map():dbg_source_map
 {
  const map=_
  {
   const _=dbg_callstack(x)
   {
    const frames=_
    {
     const _=head(frames,y)
     {
      const frames=_
      {
       for(const k in (typeof(frames)==="function")?frames():frames)
       {
        const _=to_i(k)
        {
         const i=_
         {
          const _=at(frames,i)
          {
           const v=_
           {
            const _=(typeof(v.njs)==="function")?v.njs():v.njs
            {
             const line=_
             {
              const _=dbg_origin(map.source,line,"js")
              {
               const t=_
               {
                const _=tbl_render(t)
                {
                 const s=_
                 {
                  const _=txt_prepend(s,"> ")
                  {
                   const s=_
                   {
                    const _=inc(i)
                    {
                     const n=_
                     {
                      const _=concat("#",n)
                      {
                       const s2=_
                       {
                        const _=space("javascript frame",s2)
                        {
                         const s2=_
                         {
                          flower(s2)
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
function dbg_origin(source,line,key,depth)
{
 check(is_arr,source)
 check(is_uint,line)
 if(is_undef(key))
  return dbg_origin(source,line,"",depth)
 check(is_str,key)
 if(is_undef(depth))
  return dbg_origin(source,line,key,15)
 check(is_uint,depth)
 function origin(source,line,key,depth)
 {
  check(is_arr,source)
  check(is_uint,line)
  check(is_str,key)
  check(is_uint,depth)
  const _=[]
  {
   const r=_
   {
    const _=[]
    {
     const a=_
     {
      const _=div(depth,2)
      {
       const n=_
       {
        const _=trunc(n)
        {
         const n=_
         {
          const _=sub(line,n)
          {
           let n=_
           {
            const _=min(source.length,depth)
            {
             const length=_
             {
              const _=add(n,length)
              {
               const nup=_
               {
                if(lt(n,1))
                {
                 n=1
                }
                else if(gte(nup,source.length))
                {
                 n=sub(source.length,length)
                 n=inc(n)
                 if(lt(n,1))
                 {
                  n=1
                 }
                }
                for(let i=0;i<((typeof(length)==="function")?length():length);i++)
                {
                 const _=add(n,i)
                 {
                  const n=_
                  {
                   const _=" "
                   {
                    let p=_
                    {
                     if(same(n,line))
                     {
                      p=">"
                     }
                     const _=dec(n)
                     {
                      const index=_
                      {
                       const _=at(source,index)
                       {
                        let code=_
                        {
                         if(is_empty(key))
                          check(is_str,code)
                         else
                         {
                          code=get(code,key)
                          check(is_str,code)
                         }
                         const _={n,p,code}
                         {
                          const o=_
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
                const _=[]
                {
                 const a2=_
                 {
                  for(const v of (typeof(a)==="function")?a():a)
                   push(a2,v.code)
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
                        for(const v of (typeof(a)==="function")?a():a)
                        {
                         if(is_empty(v.code))
                          continue
                         push(r,v)
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
 const _=origin(source,line,key,depth)
 {
  let r=_
  {
   if(gte(r.length,depth))
    return (typeof(r)==="function")?r():r
   const _=inc(depth)
   {
    let n=_
    {
     while(lte(n,source.length))
     {
      r=origin(source,line,key,n)
      if(gte(r.length,depth))
       break
      n=inc(n)
     }
     return (typeof(r)==="function")?r():r
    }
   }
  }
 }
}
function dbg_source_map()
{
 const _=(typeof(dbg_source)==="function")?dbg_source():dbg_source
 {
  const lines_js=_
  {
   const _=split(lines_js)
   {
    const lines_js=_
    {
     const _=[]
     {
      const paths=_
      {
       for(const v of (typeof(relatives)==="function")?relatives():relatives)
       {
        const _=at(pool,v)
        {
         const path=_
         push(paths,path)
        }
       }
       const _={}
       {
        const files=_
        {
         for(const k in (typeof(contents)==="function")?contents():contents)
         {
          const _=get(contents,k)
          {
           const content=_
           {
            const _=to_uint(k)
            {
             const n=_
             {
              const _=at(pool,n)
              {
               const path=_
               {
                const _=[]
                {
                 const lines=_
                 {
                  for(const v of (typeof(content)==="function")?content():content)
                  {
                   const _=at(pool,v)
                   {
                    const s=_
                    push(lines,s)
                   }
                  }
                  put(files,path,lines)
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
          const source=_
          {
           if((typeof(is_node)==="function")?is_node():is_node)
           {
           }
           else if((typeof(is_browser)==="function")?is_browser():is_browser)
           {
            for(let i=0;i<(7);i++)
             push(source,null)
           }
           for(const k in (typeof(paths)==="function")?paths():paths)
           {
            const _=to_i(k)
            {
             const i=_
             {
              const _=(typeof(i)==="function")?i():i
              {
               let n=_
               {
                if(gte(n,paths.length))
                 continue
                const _=at(paths,n)
                {
                 const path=_
                 {
                  const _=at(indices,n)
                  {
                   const index=_
                   {
                    const _=(typeof(n)==="function")?n():n
                    {
                     let js=_
                     {
                      if((typeof(is_node)==="function")?is_node():is_node)
                      {
                      }
                      else if((typeof(is_browser)==="function")?is_browser():is_browser)
                      {
                       js=add(js,5)
                      }
                      const _=at(lines_js,js)
                      {
                       const js=_
                       {
                        const _=get(files,path)
                        {
                         const cs=_
                         {
                          const _=at(cs,index)
                          {
                           const cs=_
                           {
                            const _={path,index,js,cs}
                            {
                             const o=_
                             push(source,o)
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
           return {files,source}
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
function dbg_source(x)
{
 function get_source()
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
      return (typeof(s)==="function")?s():s
     }
    }
   }
  }
  else if((typeof(is_browser)==="function")?is_browser():is_browser)
   return (typeof(html.outerHTML)==="function")?html.outerHTML():html.outerHTML
  else
   stop()
 }
 const _=""
 {
  let r=_
  {
   if(is_undef(x))
   {
    r=(typeof(get_source)==="function")?get_source():get_source
   }
   else
   {
    r=file_read(x)
   }
   const _=trim_r(r)
   {
    const r=_
    {
     const _=split(r)
     {
      const r=_
      {
       while(true)
       {
        const _=pop(r)
        {
         const s=_
         {
          if(match_l(s,"const compile="))
           break
         }
        }
       }
       const _=join(r)
       {
        const r=_
        return (typeof(r)==="function")?r():r
       }
      }
     }
    }
   }
  }
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
     push(r,v)
   }
   return (typeof(r)==="function")?r():r
  }
 }
}
function delimit(x,y)
{
 check(is_str,x)
 if(is_undef(y))
  return delimit(x,is_fragment)
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
           push(r,right)
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
    return div(r,...z)
   return (typeof(r)==="function")?r():r
  }
 }
}
function drop(x,y)
{
 check(is_arr,x)
 if(is_undef(y))
  return drop(x,1)
 pop(x,y)
}
function dump(x)
{
 check(is_def,x)
 function find_arg_name()
 {
  for(const v of (typeof(dbg_callstack)==="function")?dbg_callstack():dbg_callstack)
  {
   const _=(typeof(v.cs)==="function")?v.cs():v.cs
   {
    const cs=_
    {
     if(!(match(cs,"dump *")))
      continue
     const _=split(cs," ")
     {
      const a=_
      return back(a)
     }
    }
   }
  }
  stop()
 }
 const _=(typeof(find_arg_name)==="function")?find_arg_name():find_arg_name
 {
  const name=_
  {
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
                  log(name,s)
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
      log(name,s)
     }
    }
   }
   else if((typeof(is_browser)==="function")?is_browser():is_browser)
   {
    const _=to_dump(x)
    {
     const s=_
     log(name,s)
    }
   }
   else
    stop()
  }
 }
}
function dup(x)
{
 check(is_container,x)
 if(is_arr(x))
  return slice(x,0)
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
  stop()
}
function every(x,y)
{
 check(is_arr,x)
 check(is_fn,y)
 for(const v of (typeof(x)==="function")?x():x)
 {
  if(!(y(v)))
   return false
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
    push(r,v)
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
       push(x,v)
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
 const _=(typeof(y)==="function")?y():y
 {
  const value=_
  {
   function match(x)
   {
    return same(x,value)
   }
   return x.findIndex(match)
  }
 }
}
function flower(x)
{
 const _=(typeof(tty_width)==="function")?tty_width():tty_width
 {
  const n=_
  {
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
     continue
    const _=get(fns,k)
    {
     const v=_
     put(r,k,v)
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
 check(is_vec,x)
 check(is_uint,y)
 if(lt(x.length,y))
 {
  if(is_str(x))
   return (typeof(x)==="function")?x():x
  else if(is_arr(x))
   return dup(x)
  else
   stop()
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
  return indent(x,1)
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
       push(a,s)
      else
      {
       const _=repeat(" ",y)
       {
        const indent=_
        {
         const _=concat(indent,s)
         {
          const s=_
          push(a,s)
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
  return false
 if(is_empty(x))
  return false
 const _=split(x,".")
 {
  const a=_
  {
   if(is_single(a))
    return false
   return every(a,is_identifier)
  }
 }
}
function is_alnum(x)
{
 if(!(is_str(x)))
  return false
 if(is_empty(x))
  return false
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
   return false
 }
 return true
}
function is_alpha(x)
{
 if(!(is_str(x)))
  return false
 if(is_empty(x))
  return false
 for(const v of (typeof(x)==="function")?x():x)
 {
  if(is_lower(v))
  {
  }
  else if(is_upper(v))
  {
  }
  else
   return false
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
  return true
 if(is_access(x))
  return true
 if(is_tuple(x))
  return true
 if(is_numeric(x))
  return true
 if(is_lit(x))
  return true
 if(is_lit_char(x))
  return true
 return false
}
function is_blank(x)
{
 if(!(is_str(x)))
  return false
 if(is_empty(x))
  return true
 if(is_space(x))
  return true
 return false
}
function is_bool(x)
{
 const _=typeof(x)
 {
  const s=_
  return same(s,"boolean")
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
  return false
 return same(x.length,1)
}
function is_comment(x)
{
 if(!(is_ln(x)))
  return false
 return match_l(x,"//")
}
function is_container(x)
{
 if(is_arr(x))
  return true
 if(is_obj(x))
  return true
 return false
}
function is_cool(x)
{
 if(is_num(x))
  return true
 if(is_str(x))
  return true
 return false
}
function is_def(x)
{
 return !(is_undef(x))
}
function is_digit(x)
{
 if(!(is_str(x)))
  return false
 if(is_empty(x))
  return false
 for(const v of (typeof(x)==="function")?x():x)
 {
  if(!(contain(digit,v)))
   return false
 }
 return true
}
function is_empty(x)
{
 if(is_vec(x))
  return same(x.length,0)
 if({x})
 {
  const _=obj_keys(x)
  {
   const keys=_
   return is_empty(keys)
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
    return false
   if(same(x.constructor.name,"GeneratorFunction"))
    return false
   return true
  }
 }
}
function is_fragment(x)
{
 if(!(is_str(x)))
  return true
 if(is_alnum(x))
  return true
 if(is_space(x))
  return true
 return false
}
function is_full(x)
{
 if(is_vec(x))
  return !(is_empty(x))
 return false
}
function is_gn(x)
{
 const _=typeof(x)
 {
  const s=_
  {
   if(different(s,"function"))
    return false
   if(different(x.constructor.name,"GeneratorFunction"))
    return false
   return true
  }
 }
}
function is_identifier(x)
{
 if(!(is_str(x)))
  return false
 if(is_empty(x))
  return false
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
    return false
   for(const v of (typeof(x)==="function")?x():x)
   {
    if(!(is_alnum(v)))
     return false
   }
   return true
  }
 }
}
function is_indented(x)
{
 if(!(is_str(x)))
  return false
 if(is_empty(x))
  return false
 for(const v of split(x))
 {
  if(is_empty(v))
   continue
  const _=front(v)
  {
   const c=_
   {
    if(!(is_space(c)))
     return false
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
  return true
 if(is_ip6(x))
  return true
 return false
}
function is_ip4(x)
{
 if(!(is_str(x)))
  return false
 const _=split(x,".")
 {
  const a=_
  {
   if(different(a.length,4))
    return false
   for(const v of (typeof(a)==="function")?a():a)
   {
    if(!(is_digit(v)))
     return false
    const _=to_uint(v)
    {
     const n=_
     {
      if(gt(n,255))
       return false
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
  return false
 const _=split(x,":")
 {
  const a=_
  {
   if(lt(a.length,3))
    return false
   if(gt(a.length,8))
    return false
   for(const v of (typeof(a)==="function")?a():a)
   {
    if(is_empty(v))
     continue
    if(!(is_alnum(v)))
     return false
    if(contain(v,"_"))
     return false
    if(gt(v.length,4))
     return false
   }
   return true
  }
 }
}
function is_json(x)
{
 if(!(is_str(x)))
  return false
 if(is_empty(x))
  return false
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
  return same(n,y)
 }
}
function is_lisp(x)
{
 if(!(is_str(x)))
  return false
 const _=split(x,"-")
 {
  const a=_
  return every(a,is_alnum)
 }
}
function is_lit_char(x)
{
 if(!(is_str(x)))
  return false
 if(!(match_l(x,"'")))
  return false
 if(!(match_r(x,"'")))
  return false
 const _=strip_l(x,"'")
 {
  const s=_
  {
   const _=strip_r(s,"'")
   {
    const s=_
    {
     if(is_empty(s))
      return false
     const _=concat("\"",s,"\"")
     {
      const s=_
      return is_lit(s)
     }
    }
   }
  }
 }
}
function is_lit(x)
{
 if(!(is_str(x)))
  return false
 if(!(is_json(x)))
  return false
 const _=json_decode(x)
 {
  const v=_
  {
   if(!(is_str(v)))
    return false
   const _=json_encode(v)
   {
    const s=_
    return same(s,x)
   }
  }
 }
}
function is_ln(x)
{
 if(is_str(x))
  return !(is_txt(x))
 return false
}
function is_lower(x)
{
 if(!(is_str(x)))
  return false
 if(is_empty(x))
  return false
 for(const v of (typeof(x)==="function")?x():x)
 {
  if(!(contain(lower,v)))
   return false
 }
 return true
}
function is_many(x)
{
 if(is_vec(x))
  return gt(x.length,1)
 return false
}
function is_name(x)
{
 if(is_identifier(x))
  return true
 if(is_access(x))
  return true
 if(is_tuple(x))
  return true
 return false
}
function is_node()
{
 return !((typeof(is_browser)==="function")?is_browser():is_browser)
}
function is_none(x)
{
 if(is_undef(x))
  return true
 if(is_null(x))
  return true
 return false
}
function is_noun(x)
{
 if(is_identifier(x))
  return true
 if(is_access(x))
  return true
 return false
}
function is_null(x)
{
 return same(x,null)
}
function is_num(x)
{
 if(Number.isNaN(x))
  return false
 if(same(x,Number.NEGATIVE_INFINITY))
  return false
 if(same(x,Number.POSITIVE_INFINITY))
  return false
 const _=typeof(x)
 {
  const s=_
  return same(s,"number")
 }
}
function is_numeric(x)
{
 if(!(is_str(x)))
  return false
 if(!(is_json(x)))
  return false
 const _=json_decode(x)
 {
  const v=_
  {
   if(!(is_num(v)))
    return false
   const _=json_encode(v)
   {
    const s=_
    return same(s,x)
   }
  }
 }
}
function is_obj(x)
{
 if(is_null(x))
  return false
 const _=typeof(x)
 {
  const s=_
  return same(s,"object")
 }
}
function is_pair(x)
{
 if(!(is_vec(x)))
  return false
 return same(x.length,2)
}
function is_punct(x)
{
 if(!(is_str(x)))
  return false
 if(is_empty(x))
  return false
 for(const v of (typeof(x)==="function")?x():x)
 {
  if(!(contain(punct,v)))
   return false
 }
 return true
}
function is_single(x)
{
 if(is_vec(x))
  return same(x.length,1)
 return false
}
function is_space(x)
{
 if(!(is_str(x)))
  return false
 if(is_empty(x))
  return false
 const _=trim(x)
 {
  const s=_
  return is_empty(s)
 }
}
function is_str(x)
{
 const _=typeof(x)
 {
  const s=_
  return same(s,"string")
 }
}
function is_token(x)
{
 if(is_atom(x))
  return true
 if(is_comment(x))
  return true
 return false
}
function is_trivia(x)
{
 if(!(is_str(x)))
  return false
 if(is_space(x))
  return true
 if(is_comment(x))
  return true
 return false
}
function is_true(x)
{
 return same(x,true)
}
function is_tuple(x)
{
 if(!(is_str(x)))
  return false
 if(is_empty(x))
  return false
 const _=split(x,":")
 {
  const a=_
  {
   if(is_single(a))
    return false
   for(const v of (typeof(a)==="function")?a():a)
   {
    if(is_identifier(v))
     continue
    return false
   }
   return true
  }
 }
}
function is_txt(x)
{
 if(is_str(x))
  return contain(x,"\n")
 return false
}
function is_uint(x)
{
 if(is_int(x))
  return gte(x,0)
 return false
}
function is_undef(x)
{
 return same(x,undefined)
}
function is_upper(x)
{
 if(!(is_str(x)))
  return false
 if(is_empty(x))
  return false
 for(const v of (typeof(x)==="function")?x():x)
 {
  if(!(contain(upper,v)))
   return false
 }
 return true
}
function is_url(x)
{
 if(!(is_ln(x)))
  return false
 if(match_l(x,"http://"))
  return true
 if(match_l(x,"https://"))
  return true
 return false
}
function is_vec(x)
{
 if(is_str(x))
  return true
 if(is_arr(x))
  return true
 return false
}
function is_word(x)
{
 if(!(is_str(x)))
  return false
 if(is_empty(x))
  return false
 if(contain(x," "))
  return false
 if(contain(x,"\n"))
  return false
 if(contain(x,"\r"))
  return false
 return true
}
function join(x,y)
{
 check(is_arr,x)
 if(is_undef(y))
  return join(x,"\n")
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
 if(is_null(output))
 {
  console.log(...x)
  return
 }
 const _=map(x,to_str)
 {
  const a=_
  {
   const _=implode(a," ")
   {
    const a=_
    {
     const _=concat(a,"\n")
     {
      const a=_
      {
       const _=concat(output,a)
       {
        const a=_
        {
         global.output=(typeof(a)==="function")?a():a
        }
       }
      }
     }
    }
   }
  }
 }
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
     stop()
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
                continue
               if(!(is_identifier(k)))
                continue
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
                  continue
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
 global.output=null
 if((typeof(is_node)==="function")?is_node():is_node)
  main_node()
 else if((typeof(is_browser)==="function")?is_browser():is_browser)
  main_browser()
 else
  stop()
 global.fns=(typeof(get_fns)==="function")?get_fns():get_fns
 for(const k in (typeof(fns)==="function")?fns():fns)
 {
  if(match(k,"init_*"))
  {
   const _=get(fns,k)
   {
    const v=_
    v()
   }
  }
 }
 const _=time_hn(compile)
 {
  const s=_
  {
   log("compile",s)
   if((typeof(is_node)==="function")?is_node():is_node)
   {
    const _=slice(process.argv,2)
    {
     const args=_
     pump(...args)
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
    stop()
  }
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
  return false
 if(is_empty(y))
  return false
 if(gt(y.length,x.length))
  return false
 const _=slice_l(x,y.length)
 {
  const s=_
  return same(s,y)
 }
}
function match_r(x,y)
{
 check(is_str,x)
 check(is_str,y)
 if(is_empty(x))
  return false
 if(is_empty(y))
  return false
 if(gt(y.length,x.length))
  return false
 const _=slice_r(x,y.length)
 {
  const s=_
  return same(s,y)
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
        return s.test(x)
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
    return mul(r,...z)
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
     continue
    const _=get(x,k)
    {
     const v=_
     put(r,k,v)
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
  return (typeof(keys.length)==="function")?keys.length():keys.length
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
     return
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
    stop()
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
    return or(r,...z)
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
      return pad_l(s,"0",3)
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
      return pad_r(s,"0",3)
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
    return concat(x,"/",y)
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
      return (typeof(s)==="function")?s():s
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
  return (typeof(x)==="function")?x():x
 return concat(x,"/")
}
function pop(x,y)
{
 check(is_arr,x)
 if(is_undef(y))
  return pop(x,1)
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
      return r
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
    unshift(x,v)
  }
 }
}
function pump(...x)
{
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
         log("profile",name,s)
        }
       }
      }
     }
    }
   }
  }
 }
 if((typeof(is_node)==="function")?is_node():is_node)
 {
  global.cwd=(typeof(dir_current)==="function")?dir_current():dir_current
  const _=at(process.argv,1)
  {
   const script=_
   {
    const _=path_dir(script)
    {
     const dir=_
     dir_change(dir)
    }
   }
  }
 }
 else if((typeof(is_browser)==="function")?is_browser():is_browser)
 {
 }
 else
  stop()
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
        dir_change(cwd)
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
  stop()
 set(x,y,z)
}
function random(x)
{
 if(is_undef(x))
  return random(Number.MAX_SAFE_INTEGER)
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
      return trunc(r)
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
     continue
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
  return remove(x,y,1)
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
 check(is_vec,x)
 check(is_str,y)
 check(is_str,z)
 if(is_str(x))
 {
  const _=split(x,y)
  {
   const a=_
   return join(a,z)
  }
 }
 else if(is_arr(x))
 {
  const _=[]
  {
   const r=_
   {
    for(const v of (typeof(x)==="function")?x():x)
    {
     if(same(v,y))
      push(r,z)
     else
      push(r,v)
    }
    return (typeof(r)==="function")?r():r
   }
  }
 }
 else
  stop()
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
  return salt(x,"azertyuiop")
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
          append(a2,a)
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
  return scan(x,is_token)
 check(is_fn,y)
 if(is_undef(z))
  return scan(x,y,is_fragment)
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
        break
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
  return group(a,z)
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
  return shift(x,1)
 check(is_uint,y)
 if(same(y,1))
 {
  const _=front(x)
  {
   const r=_
   {
    remove(x,0,1)
    return r
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
         break
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
  return slice(x,n,y)
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
     return slice(x,y,n)
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
   x.sort()
  else
   x.sort(y)
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
       return (typeof(r)==="function")?r():r
      }
     }
     return (typeof(r)==="function")?r():r
    }
   }
  }
  if(is_undef(y))
   return sort(x,compare)
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
            push(a,o)
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
        put(r,v.key,v.value)
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
  return split(x,"\n")
 if(is_empty(x))
  return []
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
  return 0
 const _=trim_l(x)
 {
  const s=_
  return sub(x.length,s.length)
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
        push(a,s)
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
   return slice_r(x,n)
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
   return slice_l(x,n)
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
    return sub(r,...z)
   return (typeof(r)==="function")?r():r
  }
 }
}
function tail(x,y)
{
 check(is_vec,x)
 check(is_uint,y)
 if(lt(x.length,y))
 {
  if(is_str(x))
   return (typeof(x)==="function")?x():x
  else if(is_arr(x))
   return dup(x)
  else
   stop()
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
     push(r,s)
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
  return obj_keys(first)
 }
}
function tbl_init(x)
{
 return []
}
function tbl_remove_column(x,y)
{
 check(is_arr,x)
 check(is_str,y)
 const _=dup(x)
 {
  const t=_
  {
   clear(x)
   for(const v of (typeof(t)==="function")?t():t)
   {
    const _=obj_delete(v,y)
    {
     const v=_
     push(x,v)
    }
   }
  }
 }
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
           continue
          const _=json_encode(v)
          {
           const s=_
           set(row,k,s)
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
         push(a,s)
        }
       }
       else if(is_str(v))
        push(a,v)
       else
        stop()
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
          push(r,s)
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
             push(columns,column)
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
                 push(header,s)
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
                          push(line,s)
                         }
                        }
                        const _=join(line," ")
                        {
                         const s=_
                         push(a,s)
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
  return div(n,1000)
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
              return concat(n,"s")
             }
            }
            if(lt(x,minute))
            {
             const _=trunc(x)
             {
              const n=_
              return concat(n,"s")
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
                return concat(n,"m")
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
                return concat(n,"h")
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
                return concat(n,"d")
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
                return concat(n,"m")
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
 const _=(typeof(time_get)==="function")?time_get():time_get
 {
  const now=_
  {
   if(same(x,now))
    return "now"
   if(gt(x,now))
   {
    const _=sub(x,now)
    {
     const n=_
     {
      const _=get_unit(n)
      {
       const s=_
       return concat("in ",s)
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
      return concat(s," ago")
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
  return time_interval(x,0)
 check(is_uint,y)
 const _=on(x)
 {
  const fn=_
  {
   const _=mul(y,1000)
   {
    const n=_
    setInterval(fn,n)
   }
  }
 }
}
function time_now()
{
 const _=(typeof(time_get)==="function")?time_get():time_get
 {
  const n=_
  return sub(n,start)
 }
}
function time_str(x)
{
 if(is_undef(x))
 {
  const _=(typeof(time_get)==="function")?time_get():time_get
  {
   const n=_
   return time_str(n)
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
function time_timeout(x,y)
{
 check(is_fn,x)
 if(is_undef(y))
  return time_timeout(x,0)
 check(is_num,y)
 const _=on(x)
 {
  const fn=_
  {
   const _=mul(y,1000)
   {
    const n=_
    setTimeout(fn,n)
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
   return "arr"
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
               push(a,s)
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
   return "obj"
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
             push(a,s)
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
  return to_lit(x)
 else if(is_fn(x))
  return space("fn",x.name)
 else
  return json_encode(x)
}
function to_fixed(x,y)
{
 check(is_num,x)
 if(is_undef(y))
  return to_fixed(x,2)
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
      return (typeof(s)==="function")?s():s
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
               break
              drop(digits)
             }
            }
           }
           if(is_empty(digits))
            return (typeof(integer)==="function")?integer():integer
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
function tty_width()
{
 if((typeof(is_node)==="function")?is_node():is_node)
 {
  const _=(typeof(process.stdout.columns)==="function")?process.stdout.columns():process.stdout.columns
  {
   const r=_
   {
    if(is_undef(r))
     return 144
    return (typeof(r)==="function")?r():r
   }
  }
 }
 else if((typeof(is_browser)==="function")?is_browser():is_browser)
  return 80
 else
  stop()
}
function txt_prepend(x,y)
{
 if(is_str(x))
 {
  const _=split(x)
  {
   const a=_
   {
    const _=txt_prepend(a,y)
    {
     const a=_
     return join(a)
    }
   }
  }
 }
 check(is_arr,x)
 check(is_str,y)
 const _=[]
 {
  const r=_
  {
   for(const v of (typeof(x)==="function")?x():x)
   {
    const _=concat(y,v)
    {
     const s=_
     push(r,s)
    }
   }
   return (typeof(r)==="function")?r():r
  }
 }
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
  return json_decode(x)
 if(is_access(x))
  return split(x,".")
 if(is_tuple(x))
  return split(x,":")
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
    return xor(r,...z)
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
 const _=(typeof(cpl_init)==="function")?cpl_init():cpl_init
 {
  const cpl=_
  {
   const _=to_lit(x)
   {
    const s=_
    {
     log("make",s)
     cpl_include(cpl,x)
     const _=cpl_generate(cpl)
     {
      const r=_
      {
       const _=concat(x,"-tmp.js")
       {
        const tmp=_
        {
         const _=path_concat("tmp",tmp)
         {
          const tmp=_
          {
           const _=path_tmp(tmp)
           {
            const tmp=_
            {
             file_save(tmp,r)
             const _=cpl_check_syntax(cpl,tmp)
             {
              const success=_
              {
               fs_remove(tmp)
               check(success)
               cpl_deinit(cpl)
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
function ast_assign(cpl,parameters,children,source)
{
 check(is_obj,cpl)
 check(is_arr,parameters)
 check(is_arr,children)
 check(is_obj,source)
 check(is_empty,children)
 const _=front(parameters)
 {
  const left=_
  {
   check(is_name,left)
   const _=slice(parameters,1)
   {
    const right=_
    {
     const _=expr_right(...right)
     {
      const right=_
      {
       const _=concat(left,"=",right)
       {
        const code=_
        return {code,source}
       }
      }
     }
    }
   }
  }
 }
}
function ast_begin(cpl,parameters,children,source)
{
 check(is_obj,cpl)
 check(is_arr,parameters)
 check(is_arr,children)
 check(is_obj,source)
 check(is_empty,parameters)
 const _=call_ast_block(cpl,children,source)
 {
  const r=_
  {
   if(cpl_is_leaf(cpl,children))
   {
    check(is_single,r)
    const _=front(r)
    {
     const node=_
     {
      node.code=trim(node.code)
     }
    }
   }
   return (typeof(r)==="function")?r():r
  }
 }
}
function ast_brk(cpl,parameters,children,source)
{
 check(is_obj,cpl)
 check(is_arr,parameters)
 check(is_arr,children)
 check(is_obj,source)
 check(is_empty,parameters)
 check(is_empty,children)
 const _="break"
 {
  const code=_
  return {code,source}
 }
}
function ast_call(cpl,parameters,children,source)
{
 check(is_obj,cpl)
 check(is_arr,parameters)
 check(is_arr,children)
 check(is_obj,source)
 check(is_full,parameters)
 check(is_empty,children)
 const _=expr_call(...parameters)
 {
  const code=_
  return {code,source}
 }
}
function ast_catch(cpl,parameters,children,source)
{
 check(is_obj,cpl)
 check(is_arr,parameters)
 check(is_arr,children)
 check(is_obj,source)
 const _=[]
 {
  const r=_
  {
   const _=call_ast_block_top(cpl,children,source)
   {
    const block=_
    {
     if(is_empty(parameters))
     {
      const _="catch"
      {
       const code=_
       {
        const _={code,source}
        {
         const node=_
         {
          push(r,node)
          append(r,block)
          return (typeof(r)==="function")?r():r
         }
        }
       }
      }
     }
     check(is_single,parameters)
     const _=front(parameters)
     {
      const identifier=_
      {
       check(is_identifier,identifier)
       const _=paren(identifier)
       {
        const code=_
        {
         const _=concat("catch",code)
         {
          const code=_
          {
           const _={code,source}
           {
            const node=_
            {
             push(r,node)
             append(r,block)
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
function ast_check(cpl,parameters,children,source)
{
 check(is_obj,cpl)
 check(is_arr,parameters)
 check(is_arr,children)
 check(is_obj,source)
 check(is_empty,children)
 const _=join(parameters,",")
 {
  const code=_
  {
   const _=paren(code)
   {
    const code=_
    {
     const _=concat("check",code)
     {
      const code=_
      return {code,source}
     }
    }
   }
  }
 }
}
function ast_cont(cpl,parameters,children,source)
{
 check(is_obj,cpl)
 check(is_arr,parameters)
 check(is_arr,children)
 check(is_obj,source)
 check(is_empty,parameters)
 check(is_empty,children)
 const _="continue"
 {
  const code=_
  return {code,source}
 }
}
function ast_else(cpl,parameters,children,source)
{
 check(is_obj,cpl)
 check(is_arr,parameters)
 check(is_arr,children)
 check(is_obj,source)
 check(is_empty,parameters)
 const _=[]
 {
  const r=_
  {
   const _="else"
   {
    const code=_
    {
     const _={code,source}
     {
      const node=_
      {
       const _=call_ast_block(cpl,children,source)
       {
        const block=_
        {
         push(r,node)
         append(r,block)
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
function ast_elseif(cpl,parameters,children,source)
{
 check(is_obj,cpl)
 check(is_arr,parameters)
 check(is_arr,children)
 check(is_obj,source)
 return call_ast_if(cpl,parameters,children,source,"else if")
}
function ast_fn(cpl,parameters,children,source)
{
 check(is_obj,cpl)
 check(is_arr,parameters)
 check(is_arr,children)
 check(is_obj,source)
 return call_ast_xn(cpl,parameters,children,source,"function")
}
function ast_forin(cpl,parameters,children,source)
{
 check(is_obj,cpl)
 check(is_arr,parameters)
 check(is_arr,children)
 check(is_obj,source)
 return call_ast_for(cpl,parameters,children,source,"k in")
}
function ast_fornum(cpl,parameters,children,source)
{
 check(is_obj,cpl)
 check(is_arr,parameters)
 check(is_arr,children)
 check(is_obj,source)
 const _=[]
 {
  const r=_
  {
   const _=expr_right(...parameters)
   {
    const code=_
    {
     const _=paren(code)
     {
      const code=_
      {
       const _=concat("let i=0;i<",code,";i++")
       {
        const code=_
        {
         const _=paren(code)
         {
          const code=_
          {
           const _=concat("for",code)
           {
            const code=_
            {
             const _={code,source}
             {
              const node=_
              {
               const _=call_ast_block(cpl,children,source)
               {
                const block=_
                {
                 push(r,node)
                 append(r,block)
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
function ast_forof(cpl,parameters,children,source)
{
 check(is_obj,cpl)
 check(is_arr,parameters)
 check(is_arr,children)
 check(is_obj,source)
 return call_ast_for(cpl,parameters,children,source,"v of")
}
function ast_gn(cpl,parameters,children,source)
{
 check(is_obj,cpl)
 check(is_arr,parameters)
 check(is_arr,children)
 check(is_obj,source)
 return call_ast_xn(cpl,parameters,children,source,"function*")
}
function ast_if(cpl,parameters,children,source)
{
 check(is_obj,cpl)
 check(is_arr,parameters)
 check(is_arr,children)
 check(is_obj,source)
 return call_ast_if(cpl,parameters,children,source,"if")
}
function ast_include(cpl,parameters,children,source)
{
 check(is_obj,cpl)
 check(is_arr,parameters)
 check(is_arr,children)
 check(is_obj,source)
 check(is_single,parameters)
 check(is_empty,children)
 const _=front(parameters)
 {
  const path=_
  {
   check(is_lit,path)
   const _=unwrap(path)
   {
    const path=_
    stop()
   }
  }
 }
}
function ast_inline(cpl,parameters,children,source)
{
 check(is_obj,cpl)
 check(is_arr,parameters)
 check(is_arr,children)
 check(is_obj,source)
 check(is_single,parameters)
 check(is_empty,children)
 const _=front(parameters)
 {
  const code=_
  {
   check(is_lit,code)
   const _=unwrap(code)
   {
    const code=_
    return {code,source}
   }
  }
 }
}
function ast_let(cpl,parameters,children,source)
{
 check(is_obj,cpl)
 check(is_arr,parameters)
 check(is_arr,children)
 check(is_obj,source)
 check(is_many,parameters)
 check(is_empty,children)
 return call_ast_declare(cpl,parameters,children,source,"const")
}
function ast_ret(cpl,parameters,children,source)
{
 check(is_obj,cpl)
 check(is_arr,parameters)
 check(is_arr,children)
 check(is_obj,source)
 check(is_empty,children)
 const _=""
 {
  let code=_
  {
   if(is_empty(parameters))
   {
    code="return"
   }
   else
   {
    const _=expr_right(...parameters)
    {
     const right=_
     {
      code=space("return",right)
     }
    }
   }
   return {code,source}
  }
 }
}
function ast_run(cpl,parameters,children,source)
{
 check(is_obj,cpl)
 check(is_arr,parameters)
 check(is_arr,children)
 check(is_obj,source)
 check(is_full,parameters)
 check(is_empty,children)
 const _=expr_call(...parameters)
 {
  const code=_
  {
   const _=space("yield*",code)
   {
    const code=_
    return {code,source}
   }
  }
 }
}
function ast_throw(cpl,parameters,children,source)
{
 check(is_obj,cpl)
 check(is_arr,parameters)
 check(is_arr,children)
 check(is_obj,source)
 check(is_empty,children)
 const _=expr_right(...parameters)
 {
  const code=_
  {
   const _=space("throw",code)
   {
    const code=_
    return {code,source}
   }
  }
 }
}
function ast_try(cpl,parameters,children,source)
{
 check(is_obj,cpl)
 check(is_arr,parameters)
 check(is_arr,children)
 check(is_obj,source)
 check(is_empty,parameters)
 const _=[]
 {
  const r=_
  {
   const _="try"
   {
    const code=_
    {
     const _={code,source}
     {
      const node=_
      {
       const _=call_ast_block_top(cpl,children,source)
       {
        const block=_
        {
         push(r,node)
         append(r,block)
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
function ast_var(cpl,parameters,children,source)
{
 check(is_obj,cpl)
 check(is_arr,parameters)
 check(is_arr,children)
 check(is_obj,source)
 check(is_many,parameters)
 check(is_empty,children)
 return call_ast_declare(cpl,parameters,children,source,"let")
}
function ast_while(cpl,parameters,children,source)
{
 check(is_obj,cpl)
 check(is_arr,parameters)
 check(is_arr,children)
 check(is_obj,source)
 const _=[]
 {
  const r=_
  {
   const _=expr_right(...parameters)
   {
    const code=_
    {
     const _=paren(code)
     {
      const code=_
      {
       const _=concat("while",code)
       {
        const code=_
        {
         const _={code,source}
         {
          const node=_
          {
           const _=call_ast_block(cpl,children,source)
           {
            const block=_
            {
             push(r,node)
             append(r,block)
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
function ast_yield(cpl,parameters,children,source)
{
 check(is_obj,cpl)
 check(is_arr,parameters)
 check(is_arr,children)
 check(is_obj,source)
 check(is_empty,children)
 if(is_empty(parameters))
 {
  const _="yield"
  {
   const code=_
   return {code,source}
  }
 }
 const _=expr_right(...parameters)
 {
  const code=_
  {
   const _=space("yield",code)
   {
    const code=_
    return {code,source}
   }
  }
 }
}
function call_ast_block_top(cpl,children,source)
{
 check(is_obj,cpl)
 check(is_arr,children)
 check(is_obj,source)
 const _=[]
 {
  const r=_
  {
   for(const v of cpl_block(cpl,children))
   {
    const _=dup(v)
    {
     const o=_
     {
      o.code=indent(o.code)
      push(r,o)
     }
    }
   }
   const _="{"
   {
    const code=_
    {
     const _={code,source}
     {
      const open=_
      {
       const _="}"
       {
        const code=_
        {
         const _={code,source}
         {
          const close=_
          {
           unshift(r,open)
           push(r,close)
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
function call_ast_block(cpl,children,source)
{
 check(is_obj,cpl)
 check(is_arr,children)
 check(is_obj,source)
 const _=[]
 {
  const r=_
  {
   for(const v of cpl_block(cpl,children))
   {
    const _=dup(v)
    {
     const o=_
     {
      o.code=indent(o.code)
      push(r,o)
     }
    }
   }
   if(!(cpl_is_leaf(cpl,children)))
   {
    const _="{"
    {
     const code=_
     {
      const _={code,source}
      {
       const open=_
       {
        const _="}"
        {
         const code=_
         {
          const _={code,source}
          {
           const close=_
           {
            unshift(r,open)
            push(r,close)
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
function call_ast_declare(cpl,parameters,children,source,keyword)
{
 check(is_obj,cpl)
 check(is_arr,parameters)
 check(is_arr,children)
 check(is_obj,source)
 check(is_str,keyword)
 check(is_empty,children)
 const _=front(parameters)
 {
  const identifier=_
  {
   check(is_identifier,identifier)
   const _=slice(parameters,1)
   {
    const code=_
    {
     const _=expr_right(...code)
     {
      const code=_
      {
       const _=concat(identifier,"=",code)
       {
        const code=_
        {
         const _=space(keyword,code)
         {
          const code=_
          return {code,source}
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
function call_ast_for(cpl,parameters,children,source,keyword)
{
 check(is_obj,cpl)
 check(is_arr,parameters)
 check(is_arr,children)
 check(is_obj,source)
 check(is_str,keyword)
 const _=[]
 {
  const r=_
  {
   const _=expr_right(...parameters)
   {
    const code=_
    {
     const _=space("const",keyword,code)
     {
      const code=_
      {
       const _=paren(code)
       {
        const code=_
        {
         const _=concat("for",code)
         {
          const code=_
          {
           const _={code,source}
           {
            const node=_
            {
             const _=call_ast_block(cpl,children,source)
             {
              const block=_
              {
               push(r,node)
               append(r,block)
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
function call_ast_if(cpl,parameters,children,source,keyword)
{
 check(is_obj,cpl)
 check(is_arr,parameters)
 check(is_arr,children)
 check(is_obj,source)
 check(is_str,keyword)
 const _=[]
 {
  const r=_
  {
   const _=expr_right(...parameters)
   {
    const code=_
    {
     const _=paren(code)
     {
      const code=_
      {
       const _=concat(keyword,code)
       {
        const code=_
        {
         const _={code,source}
         {
          const node=_
          {
           const _=call_ast_block(cpl,children,source)
           {
            const block=_
            {
             push(r,node)
             append(r,block)
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
function call_ast_xn(cpl,parameters,children,source,keyword)
{
 check(is_obj,cpl)
 check(is_arr,parameters)
 check(is_arr,children)
 check(is_obj,source)
 check(is_str,keyword)
 function get_argument(x)
 {
  check(is_str,x)
  if(is_identifier(x))
   return (typeof(x)==="function")?x():x
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
 const _=[]
 {
  const r=_
  {
   const _=front(parameters)
   {
    const name=_
    {
     check(is_name,name)
     const _=slice(parameters,1)
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
              const code=_
              {
               const _=space(keyword,code)
               {
                const code=_
                {
                 const _={code,source}
                 {
                  const node=_
                  {
                   const _=call_ast_block_top(cpl,children,source)
                   {
                    const block=_
                    {
                     push(r,node)
                     append(r,block)
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
function cpl_block(x,y)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_obj,x)
 check(is_arr,y)
 const _=[]
 {
  const r=_
  {
   for(const v of (typeof(y)==="function")?y():y)
   {
    const _=cpl_translate(x,v)
    {
     const a=_
     append(r,a)
    }
   }
   return (typeof(r)==="function")?r():r
  }
 }
}
function cpl_check_syntax(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 const _=(typeof(process.argv0)==="function")?process.argv0():process.argv0
 {
  const node=_
  {
   const _=os_run(node,"--trace-uncaught","--check",y)
   {
    const o=_
    {
     if(same(o.status,0))
      return true
     const _=split(o.out)
     {
      const a=_
      {
       const _=shift(a)
       {
        const line_js=_
        {
         const _=split(line_js,":")
         {
          const line_js=_
          {
           const _=back(line_js)
           {
            const line_js=_
            {
             const _=to_uint(line_js)
             {
              const line_js=_
              {
               shift(a,3)
               const _=shift(a)
               {
                const message=_
                {
                 flower(message)
                 log("line",line_js)
                 const _=to_lit(y)
                 {
                  const s=_
                  {
                   log("path",s)
                   const _=dec(line_js)
                   {
                    const index=_
                    {
                     const _=at(x.out,index)
                     {
                      const o=_
                      {
                       const _=(typeof(o.source)==="function")?o.source():o.source
                       {
                        const source=_
                        {
                         const _=path_concat("src",source.path)
                         {
                          const path=_
                          {
                           const _=file_read(path)
                           {
                            const content=_
                            {
                             const _=cpl_uncomment(x,content)
                             {
                              const content=_
                              {
                               const _=split(content)
                               {
                                const content=_
                                {
                                 const _=inc(source.index)
                                 {
                                  const line_cs=_
                                  {
                                   const _=dbg_origin(content,line_cs,"")
                                   {
                                    const s=_
                                    {
                                     const _=tbl_render(s)
                                     {
                                      const s=_
                                      {
                                       log(s)
                                       const _=dbg_source(y)
                                       {
                                        const content=_
                                        {
                                         const _=split(content)
                                         {
                                          const content=_
                                          {
                                           const _=dbg_origin(content,line_js,"")
                                           {
                                            const s=_
                                            {
                                             const _=tbl_render(s)
                                             {
                                              const s=_
                                              {
                                               log(s)
                                               return false
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
function cpl_compile(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 const _=cpl_load(x,y)
 {
  const nodes=_
  {
   const _=cpl_tokenize(x,nodes)
   {
    const nodes=_
    {
     const _=cpl_fold(x,nodes)
     {
      const nodes=_
      {
       const _=cpl_scope(x,nodes)
       {
        let nodes=_
        {
         try
         {
          nodes=cpl_block(x,nodes)
         }
         catch(e)
         {
          cpl_dump(x)
          throw (typeof(e)==="function")?e():e
         }
         append(x.out,nodes)
        }
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
  file_save(x.path,s)
 }
}
function cpl_dump(x)
{
 check(is_obj,x)
 function dump_ast(x)
 {
  const _=[]
  {
   const r=_
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
              push(a3,s)
             }
            }
            const _=space(...a3)
            {
             const cs=_
             {
              const _=(typeof(x.source)==="function")?x.source():x.source
              {
               const source=_
               {
                const _=(typeof(source.path)==="function")?source.path():source.path
                {
                 const path=_
                 {
                  const _=(typeof(source.index)==="function")?source.index():source.index
                  {
                   const ncs=_
                   {
                    const _=inc(ncs)
                    {
                     const ncs=_
                     {
                      const _={path,ncs,cs}
                      {
                       const o=_
                       {
                        push(r,o)
                        for(const v of (typeof(children)==="function")?children():children)
                        {
                         const _=dump_ast(v)
                         {
                          const t=_
                          {
                           for(const v of (typeof(t)==="function")?t():t)
                           {
                            v.cs=indent(v.cs)
                           }
                           append(r,t)
                          }
                         }
                        }
                        if(is_full(children))
                        {
                         const _="end"
                         {
                          const cs=_
                          {
                           const _={path,ncs,cs}
                           {
                            const o=_
                            push(r,o)
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
          const _=space("compiler frame",frame)
          {
           const title=_
           {
            flower(title)
            const _=dump_ast(v)
            {
             const s=_
             {
              const _=tbl_render(s)
              {
               const s=_
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
function cpl_fold(x,y)
{
 check(is_obj,x)
 check(is_arr,y)
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
            break
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
            push(children,o)
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
              const _=(typeof(parent.source)==="function")?parent.source():parent.source
              {
               const source=_
               return {operator,parameters,children,source}
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
 const _=[]
 {
  const r=_
  {
   const _=dup(y)
   {
    const nodes=_
    {
     while(is_full(nodes))
     {
      const _=visit(nodes)
      {
       const o=_
       push(r,o)
      }
     }
     return (typeof(r)==="function")?r():r
    }
   }
  }
 }
}
function cpl_generate(x)
{
 check(is_obj,x)
 const _=[]
 {
  const pool=_
  {
   function get_index(x)
   {
    check(is_str,x)
    const _=find(pool,x)
    {
     const r=_
     {
      if(gte(r,0))
       return (typeof(r)==="function")?r():r
      const _=(typeof(pool.length)==="function")?pool.length():pool.length
      {
       const r=_
       {
        push(pool,x)
        return (typeof(r)==="function")?r():r
       }
      }
     }
    }
   }
   const _=[]
   {
    const a=_
    {
     for(const v of (typeof(x.out)==="function")?x.out():x.out)
      push(a,v.code)
     const _=[]
     {
      const paths=_
      {
       const _=[]
       {
        const relatives=_
        {
         const _=[]
         {
          const indices=_
          {
           for(const v of (typeof(x.out)==="function")?x.out():x.out)
           {
            const _=(typeof(v.source)==="function")?v.source():v.source
            {
             const source=_
             {
              const _=(typeof(source.path)==="function")?source.path():source.path
              {
               const path=_
               {
                if(!(contain(paths,path)))
                 push(paths,path)
                const _=get_index(path)
                {
                 const n=_
                 {
                  push(relatives,n)
                  push(indices,source.index)
                 }
                }
               }
              }
             }
            }
           }
           const _={}
           {
            const contents=_
            {
             for(const v of (typeof(paths)==="function")?paths():paths)
             {
              const _=get_index(v)
              {
               const key=_
               {
                const _=to_str(key)
                {
                 const key=_
                 {
                  const _=path_concat("src",v)
                  {
                   const path=_
                   {
                    const _=file_read(path)
                    {
                     const content=_
                     {
                      const _=cpl_uncomment(x,content)
                      {
                       const content=_
                       {
                        const _=[]
                        {
                         const value=_
                         {
                          for(const v of split(content))
                          {
                           const _=get_index(v)
                           {
                            const index=_
                            push(value,index)
                           }
                          }
                          put(contents,key,value)
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
              const compile=_
              {
               const _=trunc(compile)
               {
                const compile=_
                {
                 const _=concat("const compile=",compile)
                 {
                  const compile=_
                  {
                   push(a,compile)
                   const _=json_encode(pool)
                   {
                    const pool=_
                    {
                     const _=concat("const pool=",pool)
                     {
                      const pool=_
                      {
                       push(a,pool)
                       const _=json_encode(relatives)
                       {
                        const relatives=_
                        {
                         const _=concat("const relatives=",relatives)
                         {
                          const relatives=_
                          {
                           push(a,relatives)
                           const _=json_encode(indices)
                           {
                            const indices=_
                            {
                             const _=concat("const indices=",indices)
                             {
                              const indices=_
                              {
                               push(a,indices)
                               const _=json_encode(contents)
                               {
                                const contents=_
                                {
                                 const _=concat("const contents=",contents)
                                 {
                                  const contents=_
                                  {
                                   push(a,contents)
                                   push(a,"main()")
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
function cpl_include(x,y)
{
 check(is_obj,x)
 check(is_str,y)
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
      append(r,a)
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
              push(r,s)
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
     return (typeof(r)==="function")?r():r
    const _=concat("src/spa-",x)
    {
     const r=_
     {
      if(is_dir(r))
       return (typeof(r)==="function")?r():r
      stop()
     }
    }
   }
  }
 }
 const _=get_includes(y)
 {
  const includes=_
  {
   for(const v of get_files(includes))
   {
    const _=path_ext(v)
    {
     const ext=_
     {
      if(same(ext,"cs"))
       cpl_compile(x,v)
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
      return json_decode(s)
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
               put(asts,s,v)
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
           const _=[]
           {
            const out=_
            return {asts,stack,out,path,cache}
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
function cpl_is_call(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 if(same(y,"call"))
  return true
 for(const k in (typeof(x.asts)==="function")?x.asts():x.asts)
 {
  if(same(k,y))
   return false
 }
 return true
}
function cpl_is_leaf(x,y)
{
 check(is_obj,x)
 check(is_arr,y)
 if(!(is_single(y)))
  return false
 const _=front(y)
 {
  const node=_
  {
   const _=(typeof(node.operator)==="function")?node.operator():node.operator
   {
    const operator=_
    {
     if(cpl_is_call(x,operator))
      return true
     const _=["brk","check","cont","inline","ret","run","throw","yield"]
     {
      const operators=_
      return contain(operators,operator)
     }
    }
   }
  }
 }
}
function cpl_load(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 const _=[]
 {
  const r=_
  {
   const _=file_read(y)
   {
    const s=_
    {
     const _=cpl_uncomment(x,s)
     {
      const s=_
      {
       const _=(typeof(dir_current)==="function")?dir_current():dir_current
       {
        const path=_
        {
         const _=path_concat(path,"src")
         {
          const path=_
          {
           const _=path_fix(path)
           {
            const path=_
            {
             const _=strip_l(y,path)
             {
              const path=_
              {
               const _=split(s)
               {
                const lines=_
                {
                 for(const k in (typeof(lines)==="function")?lines():lines)
                 {
                  const _=to_i(k)
                  {
                   const i=_
                   {
                    const _=at(lines,i)
                    {
                     const v=_
                     {
                      const _=(typeof(i)==="function")?i():i
                      {
                       const index=_
                       {
                        const _=(typeof(v)==="function")?v():v
                        {
                         const code=_
                         {
                          const _={path,index}
                          {
                           const source=_
                           {
                            const _={code,source}
                            {
                             const o=_
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
function cpl_scan(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 function is_complex(x)
 {
  if(!(is_str(x)))
   return false
  if(contain(x,"//"))
   return true
  if(contain(x,"\""))
   return true
  return false
 }
 const _=trim(y)
 {
  const s=_
  {
   if(is_complex(s))
   {
    if(has(x.cache,s))
    {
     const _=get(x.cache,s)
     {
      const r=_
      {
       const _=dup(r)
       {
        const r=_
        return (typeof(r)==="function")?r():r
       }
      }
     }
    }
    const _=scan(s)
    {
     const r=_
     {
      const _=reject(r,is_trivia)
      {
       const r=_
       {
        const _=dup(r)
        {
         const a=_
         {
          put(x.cache,s,a)
          return (typeof(r)==="function")?r():r
         }
        }
       }
      }
     }
    }
   }
   const _=split(s," ")
   {
    const r=_
    {
     const _=reject(r,is_empty)
     {
      const r=_
      return (typeof(r)==="function")?r():r
     }
    }
   }
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
   return true
  if(same(x,"var"))
   return true
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
            const _=(typeof(node.source)==="function")?node.source():node.source
            {
             const source=_
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
                           const _={operator,parameters,children,source}
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
                                   const _={operator,parameters,children,source}
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
                                           const _={operator,parameters,children,source}
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
                                                   const _={operator,parameters,children,source}
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
                       const _={operator,parameters,children,source}
                       {
                        const node=_
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
     }
     return (typeof(r)==="function")?r():r
    }
   }
  }
 }
}
function cpl_tokenize(x,y)
{
 check(is_obj,x)
 check(is_arr,y)
 const _=[]
 {
  const r=_
  {
   for(const v of (typeof(y)==="function")?y():y)
   {
    const _=(typeof(v.code)==="function")?v.code():v.code
    {
     const code=_
     {
      const _=dup(v.source)
      {
       const source=_
       {
        const _=str_indent(code)
        {
         const indent=_
         {
          const _=cpl_scan(x,code)
          {
           const parameters=_
           {
            if(is_empty(parameters))
             continue
            const _=shift(parameters)
            {
             const operator=_
             {
              if(same(operator,"end"))
              {
               if(is_empty(parameters))
                continue
              }
              const _=[]
              {
               const children=_
               {
                const _={indent,operator,parameters,children,source}
                {
                 const node=_
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
   return (typeof(r)==="function")?r():r
  }
 }
}
function cpl_translate(x,y)
{
 check(is_obj,x)
 check(is_obj,y)
 function translate(cpl,operator,parameters,children,source)
 {
  check(is_obj,cpl)
  check(is_str,operator)
  check(is_arr,parameters)
  check(is_arr,children)
  check(is_obj,source)
  for(const k in (typeof(cpl.asts)==="function")?cpl.asts():cpl.asts)
  {
   if(different(k,operator))
    continue
   const _=get(cpl.asts,k)
   {
    const ast=_
    {
     const _=ast(cpl,parameters,children,source)
     {
      const r=_
      {
       if(is_arr(r))
        return (typeof(r)==="function")?r():r
       check(is_obj,r)
       return [r]
      }
     }
    }
   }
  }
  const _=[operator,...parameters]
  {
   const parameters=_
   {
    const _=ast_call(cpl,parameters,children,source)
    {
     const r=_
     {
      if(is_arr(r))
       return (typeof(r)==="function")?r():r
      check(is_obj,r)
      return [r]
     }
    }
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
       const _=(typeof(y.source)==="function")?y.source():y.source
       {
        const source=_
        {
         try
         {
          return translate(x,operator,parameters,children,source)
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
 }
}
function cpl_uncomment(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 const _=[]
 {
  const r=_
  {
   for(const v of split(y))
   {
    const _=str_indent(v)
    {
     const indent=_
     {
      const _=cpl_scan(x,v)
      {
       const tokens=_
       {
        if(is_empty(tokens))
        {
         push(r,"")
         continue
        }
        const _=repeat(" ",indent)
        {
         const indent=_
         {
          const _=join(tokens," ")
          {
           const line=_
           {
            const _=concat(indent,line)
            {
             const line=_
             push(r,line)
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
   const _=join(r)
   {
    const r=_
    {
     const _=trim_r(r)
     {
      const r=_
      return (typeof(r)==="function")?r():r
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
  return (typeof(x)==="function")?x():x
 if(is_lit(x))
  return (typeof(x)==="function")?x():x
 if(is_identifier(x))
  return (typeof(x)==="function")?x():x
 if(is_access(x))
  return (typeof(x)==="function")?x():x
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
    return bracket(s)
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
      return concat(x,list)
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
  return space("new",rvalue)
 }
}
function expr_obj(...x)
{
 check(every,x,is_identifier)
 const _=join(x,",")
 {
  const s=_
  return brace(s)
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
 return expr_rvalue(x,...y)
}
function expr_run(...x)
{
 const _=expr_call(...x)
 {
  const call=_
  return space("yield*",call)
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
     return (typeof(expr_arr)==="function")?expr_arr():expr_arr
    else if(same(first,"obj"))
     return (typeof(expr_obj)==="function")?expr_obj():expr_obj
    else
     return (typeof(first)==="function")?first():first
   }
   const _=slice(x,1)
   {
    const args=_
    {
     if(same(first,"call"))
      return expr_call(...args)
     else if(same(first,"run"))
      return expr_run(...args)
     else if(same(first,"arr"))
      return expr_arr(...args)
     else if(same(first,"obj"))
      return expr_obj(...args)
     else if(same(first,"value"))
      return expr_value(...args)
     else if(same(first,"new"))
      return expr_new(...args)
     else if(same(first,"in"))
      return expr_in(...args)
     else if(same(first,"instanceof"))
      return expr_instanceof(args)
     else if(same(first,"inline"))
      return expr_inline(...args)
     else if(same(first,"not"))
     {
      const _=expr_right(...args)
      {
       const right=_
       {
        const _=paren(right)
        {
         const right=_
         return concat("!",right)
        }
       }
      }
     }
     else
      return expr_call(...x)
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
function app_list()
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
        const _=shift(a)
        {
         const prefix=_
         {
          if(different(prefix,"app"))
           continue
          const _=join(a,"-")
          {
           const name=_
           push(r,name)
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
        return (typeof(r)==="function")?r():r
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
     push(r,v)
    else if(is_dir(v))
    {
     const _=dir_load(v)
     {
      const a=_
      append(r,a)
     }
    }
    else
     stop()
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
    fs.mkdirSync(x,o)
   }
  }
 }
}
function dir_read(x,y)
{
 check(is_str,x)
 if(is_undef(y))
  return dir_read(x,false)
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
            push(r,s)
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
    fs.rmdirSync(x,o)
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
  return (typeof(o.toString)==="function")?o.toString():o.toString
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
     return
   }
  }
 }
 const _=path_dir(x)
 {
  const dir=_
  {
   if(!(is_dir(dir)))
    dir_make(dir)
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
  return (typeof(v.size)==="function")?v.size():v.size
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
      fs.cpSync(x,y,o)
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
      fs.rmSync(x,o)
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
  return split(s," ")
 }
}
function ip_v4()
{
 for(const v of (typeof(ip_list)==="function")?ip_list():ip_list)
 {
  if(is_ip4(v))
   return (typeof(v)==="function")?v():v
 }
 stop()
}
function ip_v6()
{
 for(const v of (typeof(ip_list)==="function")?ip_list():ip_list)
 {
  if(is_ip6(v))
   return (typeof(v)==="function")?v():v
 }
 stop()
}
function is_dir(x)
{
 if(!(is_str(x)))
  return false
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
        return false
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
  return false
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
        return false
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
  return false
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
      return is_def(o)
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
  return false
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
    dbg_origin_cs(x.stack)
    const _=dbg_backtrace(x.stack)
    {
     const backtrace=_
     {
      tbl_remove_column(backtrace,"njs")
      tbl_remove_column(backtrace,"js")
      const _=tbl_render(backtrace)
      {
       const s=_
       {
        const _=txt_prepend(s,"> ")
        {
         const s=_
         {
          flower("backtrace")
          log(s)
          dbg_origin_js(x.stack)
          dir_change(cwd)
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
  o.unref()
 }
}
function os_execute(...x)
{
 const _=os_run(...x)
 {
  const o=_
  return (typeof(o.out)==="function")?o.out():o.out
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
       return (typeof(r)==="function")?r():r
      }
     }
    }
   }
  }
 }
}
function os_run(x,...y)
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
                    push(a,out)
                   if(is_full(err))
                    push(a,err)
                   const _=join(a)
                   {
                    const out=_
                    {
                     const _=(typeof(streams.status)==="function")?streams.status():streams.status
                     {
                      const status=_
                      return {status,out}
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
        log(" >",v)
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
      return cp.spawn(x,y,o)
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
      return (typeof(o.status)==="function")?o.status():o.status
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
  return (typeof(o.username)==="function")?o.username():o.username
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
  return strip_l(s,".")
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
  return path_tmp("tmp/tmp.txt")
 check(is_str,x)
 const _=path_dir(x)
 {
  const dir=_
  {
   const _=path_file(x)
   {
    const file=_
    {
     const _=path_ext(x)
     {
      const ext=_
      {
       while(true)
       {
        const _=(typeof(random)==="function")?random():random
        {
         const base=_
         {
          const _=to_base36(base)
          {
           const base=_
           {
            const _=concat(file,"-",base,".",ext)
            {
             const base=_
             {
              const _=path_concat(dir,base)
              {
               const r=_
               {
                if(!(is_file(r)))
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
function ssh_execute(...x)
{
 return ssh_pass(...x)
}
function ssh_pass(...x)
{
 const _=dup(x)
 {
  const parameters=_
  {
   const _=shift(parameters)
   {
    const first=_
    {
     if(is_str(first))
      return ssh_pass(os_execute,...x)
     check(is_fn,first)
     return first("sshpass","-p",...parameters)
    }
   }
  }
 }
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
      const _=txt_prepend(a," > ")
      {
       const a=_
       {
        const _=join(a)
        {
         const s=_
         log(s)
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
function init(...x)
{
 function is_app(x)
 {
  if(!(is_str(x)))
   return false
  const _=concat("app-",x)
  {
   const base=_
   {
    const _=path_concat("src",base)
    {
     const path=_
     return is_dir(path)
    }
   }
  }
 }
 const _=dup(x)
 {
  const parameters=_
  {
   const _=(typeof(app_list)==="function")?app_list():app_list
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
         const _=(typeof(cpl_init)==="function")?cpl_init():cpl_init
         {
          const cpl=_
          {
           cpl_include(cpl,app)
           const _=cpl_generate(cpl)
           {
            const code=_
            {
             const _=split(code)
             {
              const sloc=_
              {
               const _=(typeof(sloc.length)==="function")?sloc.length():sloc.length
               {
                const sloc=_
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
                     log("sloc",sloc)
                     if(!(cpl_check_syntax(cpl,out)))
                      return
                     cpl_deinit(cpl)
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
     }
    }
   }
  }
 }
}
const compile=1754964354
const pool=["lib-common/abs.cs","lib-common/add.cs","lib-common/and.cs","lib-common/angle.cs","lib-common/app-name.cs","lib-common/append.cs","lib-common/arr.cs","lib-common/asc.cs","lib-common/at.cs","lib-common/back.cs","lib-common/base36-decode.cs","lib-common/base36-encode.cs","lib-common/between.cs","lib-common/brace.cs","lib-common/bracket.cs","lib-common/byte-size.cs","lib-common/capture.cs","lib-common/check.cs","lib-common/chr.cs","lib-common/clear.cs","lib-common/clone.cs","lib-common/cmp.cs","lib-common/collate.cs","lib-common/concat.cs","lib-common/contain.cs","lib-common/crc.cs","lib-common/date-decode.cs","lib-common/date-str.cs","lib-common/dbg/dbg-backtrace.cs","lib-common/dbg/dbg-callstack.cs","lib-common/dbg/dbg-origin-cs.cs","lib-common/dbg/dbg-origin-js.cs","lib-common/dbg/dbg-origin.cs","lib-common/dbg/dbg-source-map.cs","lib-common/dbg/dbg-source.cs","lib-common/dec.cs","lib-common/dedup.cs","lib-common/delimit.cs","lib-common/different.cs","lib-common/div.cs","lib-common/drop.cs","lib-common/dump.cs","lib-common/dup.cs","lib-common/every.cs","lib-common/explode.cs","lib-common/extract.cs","lib-common/find.cs","lib-common/flower.cs","lib-common/fn-match.cs","lib-common/front.cs","lib-common/get.cs","lib-common/gt.cs","lib-common/gte.cs","lib-common/has.cs","lib-common/head.cs","lib-common/implode.cs","lib-common/inc.cs","lib-common/indent.cs","lib-common/insert.cs","lib-common/is/is-access.cs","lib-common/is/is-alnum.cs","lib-common/is/is-alpha.cs","lib-common/is/is-arr.cs","lib-common/is/is-atom.cs","lib-common/is/is-blank.cs","lib-common/is/is-bool.cs","lib-common/is/is-browser.cs","lib-common/is/is-char.cs","lib-common/is/is-comment.cs","lib-common/is/is-container.cs","lib-common/is/is-cool.cs","lib-common/is/is-def.cs","lib-common/is/is-digit.cs","lib-common/is/is-empty.cs","lib-common/is/is-false.cs","lib-common/is/is-fn.cs","lib-common/is/is-fragment.cs","lib-common/is/is-full.cs","lib-common/is/is-gn.cs","lib-common/is/is-identifier.cs","lib-common/is/is-indented.cs","lib-common/is/is-int.cs","lib-common/is/is-ip.cs","lib-common/is/is-ip4.cs","lib-common/is/is-ip6.cs","lib-common/is/is-json.cs","lib-common/is/is-last.cs","lib-common/is/is-lisp.cs","lib-common/is/is-lit-char.cs","lib-common/is/is-lit.cs","lib-common/is/is-ln.cs","lib-common/is/is-lower.cs","lib-common/is/is-many.cs","lib-common/is/is-name.cs","lib-common/is/is-node.cs","lib-common/is/is-none.cs","lib-common/is/is-noun.cs","lib-common/is/is-null.cs","lib-common/is/is-num.cs","lib-common/is/is-numeric.cs","lib-common/is/is-obj.cs","lib-common/is/is-pair.cs","lib-common/is/is-punct.cs","lib-common/is/is-single.cs","lib-common/is/is-space.cs","lib-common/is/is-str.cs","lib-common/is/is-token.cs","lib-common/is/is-trivia.cs","lib-common/is/is-true.cs","lib-common/is/is-tuple.cs","lib-common/is/is-txt.cs","lib-common/is/is-uint.cs","lib-common/is/is-undef.cs","lib-common/is/is-upper.cs","lib-common/is/is-url.cs","lib-common/is/is-vec.cs","lib-common/is/is-word.cs","lib-common/join.cs","lib-common/json-decode.cs","lib-common/json-encode.cs","lib-common/log.cs","lib-common/lt.cs","lib-common/lte.cs","lib-common/main.cs","lib-common/map.cs","lib-common/match-l.cs","lib-common/match-r.cs","lib-common/match.cs","lib-common/max.cs","lib-common/merge.cs","lib-common/min.cs","lib-common/mul.cs","lib-common/nop.cs","lib-common/obj-delete.cs","lib-common/obj-keys.cs","lib-common/obj-length.cs","lib-common/obj-vals.cs","lib-common/obj.cs","lib-common/on.cs","lib-common/or.cs","lib-common/pad-l.cs","lib-common/pad-r.cs","lib-common/paren.cs","lib-common/path-concat.cs","lib-common/path-file.cs","lib-common/path-fix.cs","lib-common/pop.cs","lib-common/prepend.cs","lib-common/pump.cs","lib-common/push.cs","lib-common/put.cs","lib-common/random.cs","lib-common/reject.cs","lib-common/remove.cs","lib-common/repeat.cs","lib-common/replace-rec.cs","lib-common/replace.cs","lib-common/reverse.cs","lib-common/round.cs","lib-common/salt.cs","lib-common/same.cs","lib-common/scan.cs","lib-common/set.cs","lib-common/shift.cs","lib-common/sleep.cs","lib-common/slice-l.cs","lib-common/slice-r.cs","lib-common/slice.cs","lib-common/sort.cs","lib-common/space.cs","lib-common/split.cs","lib-common/stop.cs","lib-common/str-indent.cs","lib-common/str-unindent.cs","lib-common/strip-l.cs","lib-common/strip-r.cs","lib-common/sub.cs","lib-common/tail.cs","lib-common/tbl/tbl-column.cs","lib-common/tbl/tbl-columns.cs","lib-common/tbl/tbl-init.cs","lib-common/tbl/tbl-remove-column.cs","lib-common/tbl/tbl-render.cs","lib-common/time-get.cs","lib-common/time-hn.cs","lib-common/time-interval.cs","lib-common/time-now.cs","lib-common/time-str.cs","lib-common/time-timeout.cs","lib-common/to/to-base36.cs","lib-common/to/to-dump.cs","lib-common/to/to-fixed.cs","lib-common/to/to-i.cs","lib-common/to/to-int.cs","lib-common/to/to-json.cs","lib-common/to/to-lit.cs","lib-common/to/to-lower.cs","lib-common/to/to-num.cs","lib-common/to/to-str.cs","lib-common/to/to-uint.cs","lib-common/to/to-upper.cs","lib-common/trim-l.cs","lib-common/trim-r.cs","lib-common/trim.cs","lib-common/trunc.cs","lib-common/tty-width.cs","lib-common/txt-prepend.cs","lib-common/unshift.cs","lib-common/unwrap.cs","lib-common/xor.cs","lib-compiler/app-home.cs","lib-compiler/app-make.cs","lib-compiler/ast/ast-assign.cs","lib-compiler/ast/ast-begin.cs","lib-compiler/ast/ast-brk.cs","lib-compiler/ast/ast-call.cs","lib-compiler/ast/ast-catch.cs","lib-compiler/ast/ast-check.cs","lib-compiler/ast/ast-cont.cs","lib-compiler/ast/ast-else.cs","lib-compiler/ast/ast-elseif.cs","lib-compiler/ast/ast-fn.cs","lib-compiler/ast/ast-forin.cs","lib-compiler/ast/ast-fornum.cs","lib-compiler/ast/ast-forof.cs","lib-compiler/ast/ast-gn.cs","lib-compiler/ast/ast-if.cs","lib-compiler/ast/ast-include.cs","lib-compiler/ast/ast-inline.cs","lib-compiler/ast/ast-let.cs","lib-compiler/ast/ast-ret.cs","lib-compiler/ast/ast-run.cs","lib-compiler/ast/ast-throw.cs","lib-compiler/ast/ast-try.cs","lib-compiler/ast/ast-var.cs","lib-compiler/ast/ast-while.cs","lib-compiler/ast/ast-yield.cs","lib-compiler/ast/call-ast-block-top.cs","lib-compiler/ast/call-ast-block.cs","lib-compiler/ast/call-ast-declare.cs","lib-compiler/ast/call-ast-for.cs","lib-compiler/ast/call-ast-if.cs","lib-compiler/ast/call-ast-xn.cs","lib-compiler/cpl-block.cs","lib-compiler/cpl-check-syntax.cs","lib-compiler/cpl-compile.cs","lib-compiler/cpl-deinit.cs","lib-compiler/cpl-dump.cs","lib-compiler/cpl-fold.cs","lib-compiler/cpl-generate.cs","lib-compiler/cpl-include.cs","lib-compiler/cpl-init.cs","lib-compiler/cpl-is-call.cs","lib-compiler/cpl-is-leaf.cs","lib-compiler/cpl-load.cs","lib-compiler/cpl-scan.cs","lib-compiler/cpl-scope.cs","lib-compiler/cpl-tokenize.cs","lib-compiler/cpl-translate.cs","lib-compiler/cpl-uncomment.cs","lib-compiler/expr/expr-arg.cs","lib-compiler/expr/expr-arr.cs","lib-compiler/expr/expr-call.cs","lib-compiler/expr/expr-in.cs","lib-compiler/expr/expr-inline.cs","lib-compiler/expr/expr-instanceof.cs","lib-compiler/expr/expr-new.cs","lib-compiler/expr/expr-obj.cs","lib-compiler/expr/expr-right.cs","lib-compiler/expr/expr-run.cs","lib-compiler/expr/expr-rvalue.cs","lib-compiler/expr/expr-value.cs","lib-node/app-list.cs","lib-node/digest.cs","lib-node/dir/dir-change.cs","lib-node/dir/dir-current.cs","lib-node/dir/dir-load.cs","lib-node/dir/dir-make.cs","lib-node/dir/dir-read.cs","lib-node/dir/dir-remove.cs","lib-node/dir/dir-reset.cs","lib-node/dir/dir-size.cs","lib-node/file/file-read.cs","lib-node/file/file-save.cs","lib-node/file/file-size.cs","lib-node/file/file-write.cs","lib-node/fs-copy.cs","lib-node/fs-remove.cs","lib-node/ip-list.cs","lib-node/ip-v4.cs","lib-node/ip-v6.cs","lib-node/is-dir.cs","lib-node/is-file.cs","lib-node/is-fs.cs","lib-node/is-readable.cs","lib-node/main-node.cs","lib-node/open.cs","lib-node/os/os-detach.cs","lib-node/os/os-execute.cs","lib-node/os/os-home.cs","lib-node/os/os-host.cs","lib-node/os/os-ps.cs","lib-node/os/os-run.cs","lib-node/os/os-shell.cs","lib-node/os/os-spawn.cs","lib-node/os/os-system.cs","lib-node/os/os-user.cs","lib-node/path/path-base.cs","lib-node/path/path-dir.cs","lib-node/path/path-ext.cs","lib-node/path/path-real.cs","lib-node/path/path-tmp.cs","lib-node/ssh-execute.cs","lib-node/ssh-pass.cs","lib-node/ssh-system.cs","app-make/init.cs","fn abs x"," check is_num x",""," ret Math.abs x","end","fn add x y z:etc"," check is_num y"," let r inline \"x+y\""," if is_full z","  ret add r z:etc"," ret r","fn and x y z:etc"," check is_bool x"," check is_bool y"," let r inline \"x&&y\"","  ret and r z:etc","fn angle x"," check is_str x"," ret concat \"<\" x \">\"","fn app_name"," if is_node","  let file at process.argv 1","  let file path_file file","  ret replace file \".\" \"-\""," elseif is_browser","  var file location.hostname","  let base path_base file","  if is_ip base","   ret replace base \".\" \"-\"","  let file path_file base"," else","  stop","fn append x y"," check is_arr x"," check is_arr y"," forof y","  push x v"," end","fn arr x:etc"," ret inline \"[...x]\"","fn asc x"," check is_char x"," ret x.charCodeAt 0","fn at x y z"," check is_vec x"," check is_uint y"," let n dec x.length"," check between y 0 n"," if is_undef z","  ret inline \"x[y]\""," inline \"x[y]=z\"","fn back x y z"," if is_undef y","  ret back x 0"," let n sub x.length y"," let n dec n","  ret at x n"," at x n z","fn base36_decode x"," var r \"\""," let a explode x"," while is_full a","  let a2 slice_l a 4","  shift a 4","  let s implode a2","  let n Number.parseInt s 36","  let range mul 256 256","  check is_uint n","  check lte n range","  let c chr n","  assign r concat r c","fn base36_encode x"," forof x","  let s asc v","  let s to_base36 s","  let s pad_l s \"0\" 4","  assign r concat r s","fn between x y z"," check is_num z"," check gte z y"," if lt x y","  ret false"," if gt x z"," ret true","fn brace x"," ret concat \"{\" x \"}\"","fn bracket x"," ret concat \"[\" x \"]\"","fn byte_size x"," check is_uint x"," check gte x 0"," let kb 1024"," let mb mul 1024 kb"," let gb mul 1024 mb"," let tb mul 1024 gb"," if lt x kb","  let s to_fixed x","  ret concat s \"b\""," if lt x mb","  let s div x kb","  let s trunc s","  let s to_fixed s","  ret concat s \"Kb\""," if lt x gb","  let s div x mb","  ret concat s \"Mb\""," if lt x tb","  let s div x gb","  ret concat s \"Gb\""," let s div x tb"," let s trunc s"," let s to_fixed s"," ret concat s \"Tb\"","fn capture x y:etc"," check is_fn x"," check is_null output"," assign global.output \"\""," x y:etc"," let r output"," assign global.output null","fn check x y:etc"," if is_true x","  if is_empty y","   ret"," elseif is_fn x","  let b x y:etc","  if is_true b"," stop","fn chr x"," ret String.fromCharCode x","fn clear x"," x.splice 0","fn clone x"," check is_def x"," ret structuredClone x","fn cmp x y"," check is_def y"," if inline \"x>y\"","  ret 1"," if inline \"x<y\"","  ret -1"," ret 0","fn collate x"," fn is_delimited x","  if same x \"_\"","   ret false","  if is_punct x","   ret true","  if is_space x"," let a arr","  if is_empty a","   push a v","   cont","  end","  let left back a","  let left back left","  let right front v","  if is_delimited left","  elseif is_delimited right","  else","   push a right","  let s concat left right","  drop a","  push a s"," ret join a \" \"","fn concat x:etc"," ret implode x","fn contain x y"," if is_str x","  check is_str y"," ret x.includes y","fn crc x"," var r 0"," forin a","  let i to_i k","  let s at a i","  forin s","   let i to_i k","   let v at s i","   let n asc v","   assign r add r n","fn date_decode x"," let r new Date x"," let r r.getTime"," let r div r 1000"," let r trunc r","fn date_str x"," if is_undef x","  let n time_get","  ret date_str n"," let n mul x 1000"," let o new Date n"," let y o.getFullYear"," let m o.getMonth"," let m inc m"," let m pad_l m \"0\" 2"," let d o.getDate"," let d pad_l d \"0\" 2"," ret concat y \"/\" m \"/\" d","fn dbg_backtrace x","  let e new Error \"backtrace\"","  ret dbg_backtrace e.stack"," fn parse_numbers x","  check is_arr x","  let r arr","  forof x","   if not is_numeric v","    cont","   let n json_decode v","   if not is_uint n","   push r n","  ret r"," let r arr"," let stack trim x"," let stack split stack"," let map dbg_source_map"," forin stack","  let v at stack i","  if is_node","   let script at process.argv 1","   if not contain v script","  let s trim v","  let s replace s \"@\" \" \"","  let a split s \" \"","  let s front a","  if same s \"at\"","   shift a","  var fn shift a","  if is_empty fn","   assign fn \"anonymous\"","  if not is_noun fn","  let a shift a","  let a scan a is_atom","  let a parse_numbers a","  if not is_many a","  let njs back a 1","  var index dec njs","  if gte index map.source.length","  let location at map.source index","  let js trim location.js","  let cs trim location.cs","  let path location.path","  let ncs location.index","  let ncs inc location.index","  let o obj fn njs js path ncs cs","  push r o","fn dbg_callstack x","  let e new Error \"callstack\"","  ret dbg_callstack e.stack"," let r dbg_backtrace x"," while is_full r","  let frame front r","  let fn frame.fn","  if same fn \"throw\"","  elseif same fn \"stop\"","  elseif same fn \"check\"","   brk","  shift r","fn dbg_origin_cs x y","  let e new Error \"origin-cs\"","  ret dbg_origin_cs e.stack","  ret dbg_origin_cs x 3"," let frames dbg_callstack x"," let frames head frames y"," forin frames","  let v at frames i","  let file get map.files v.path","  let line v.ncs","  let t dbg_origin file line","  let s tbl_render t","  let s txt_prepend s \"> \"","  let n inc i","  let s2 concat \"#\" n","  let s2 space \"stack frame\" s2","  flower s2","  log s","fn dbg_origin_js x y","  let e new Error \"origin-js\"","  ret dbg_origin_js e.stack","  ret dbg_origin_js x 3","  let line v.njs","  let t dbg_origin map.source line \"js\"","  let s2 space \"javascript frame\" s2","fn dbg_origin source line key depth"," check is_arr source"," check is_uint line"," if is_undef key","  ret dbg_origin source line \"\" depth"," check is_str key"," if is_undef depth","  ret dbg_origin source line key 15"," check is_uint depth"," fn origin source line key depth","  check is_arr source","  check is_uint line","  check is_str key","  check is_uint depth","  let a arr","  let n div depth 2","  let n trunc n","  var n sub line n","  let length min source.length depth","  let nup add n length","  if lt n 1","   assign n 1","  elseif gte nup source.length","   assign n sub source.length length","   assign n inc n","   if lt n 1","    assign n 1","  fornum length","   let n add n i","   var p \" \"","   if same n line","    assign p \">\"","   let index dec n","   var code at source index","   if is_empty key","    check is_str code","   else","    assign code get code key","   end","   let o obj n p code","   push a o","  let a2 arr","  forof a","   push a2 v.code","  let s join a2","  let s str_unindent s","  let a3 split s","  forin a3","   let code at a3 i","   let o at a i","   assign o.code code","   if is_empty v.code","   push r v"," var r origin source line key depth"," if gte r.length depth"," var n inc depth"," while lte n source.length","  assign r origin source line key n","  if gte r.length depth","  assign n inc n","fn dbg_source_map"," let lines_js dbg_source"," let lines_js split lines_js"," let paths arr"," forof relatives","  let path at pool v","  push paths path"," let files obj"," forin contents","  let content get contents k","  let n to_uint k","  let path at pool n","  let lines arr","  forof content","   let s at pool v","   push lines s","  put files path lines"," let source arr","  fornum 7","   push source null"," forin paths","  var n i","  if gte n paths.length","  let path at paths n","  let index at indices n","  var js n","  elseif is_browser","   assign js add js 5","  let js at lines_js js","  let cs get files path","  let cs at cs index","  let o obj path index js cs","  push source o"," ret obj files source","fn dbg_source x"," fn get_source","   let path at process.argv 1","   let s file_read path","   ret s","   ret html.outerHTML","   stop","  assign r get_source","  assign r file_read x"," let r trim_r r"," let r split r"," while true","  let s pop r","  if match_l s \"const compile=\""," let r join r","fn dec x"," ret sub x 1","fn dedup x","  if not contain r v","fn delimit x y","  ret delimit x is_fragment"," check is_fn y","  let right v","  if is_empty r","   push r right","  let left back r","  let fragment concat left right","  if is_fragment fragment","   drop r","   push r fragment","fn different x y"," ret inline \"x!==y\"","fn div x y z:etc"," check different y 0"," let r inline \"x/y\"","  ret div r z:etc","fn drop x y","  ret drop x 1"," pop x y","fn dump x"," fn find_arg_name","  forof dbg_callstack","   let cs v.cs","   if not match cs \"dump *\"","   let a split cs \" \"","   ret back a"," let name find_arg_name","  if process.stdout.isTTY","   let showHidden false","   let depth null","   let colors true","   let maxArrayLength null","   let maxStringLength null","   let o obj showHidden depth colors maxArrayLength maxStringLength","   let s util.inspect x o","   log name s","   let s to_dump x","  let s to_dump x","  log name s","fn dup x"," check is_container x"," if is_arr x","  ret slice x 0"," elseif is_obj x","  let r obj","  merge r x","fn every x y","  if not y v","fn explode x","  push r v","fn extract x y"," var r false"," let a dup x"," clear x"," forof a","  if same v y","   assign r true","   push x v","fn find x y"," let value y"," fn match x","  ret same x value"," ret x.findIndex match","fn flower x"," let n tty_width","  let s repeat \"*\" n","  ret"," let s1 repeat \"*\" n"," let s2 repeat \"*\" 2"," let s2 concat s2 \" \""," let s2 concat s2 x"," let s2 concat s2 s1"," let s2 slice_l s2 n"," log s2","fn fn_match x"," let r obj"," forin fns","  if not match k x","  let v get fns k","  put r k v","fn front x"," ret at x 0","fn get x y"," check is_obj x"," check is_str y"," check has x y"," ret inline \"x[y]\"","fn gt x y"," ret inline \"x>y\"","fn gte x y"," ret inline \"x>=y\"","fn has x y"," ret inline \"y in x\"","fn head x y"," if lt x.length y","  if is_str x","   ret x","  elseif is_arr x","   ret dup x"," ret slice_l x y","fn implode x"," ret join x \"\"","fn inc x"," ret add x 1","fn indent x y","  ret indent x 1"," forof split x","  let s trim_r v","  if is_empty s","   push a s","   let indent repeat \" \" y","   let s concat indent s"," ret join a","fn insert x y z:etc"," check between y 0 x.length"," x.splice y 0 z:etc","fn is_access x"," if not is_str x"," if is_empty x"," let a split x \".\""," if is_single a"," ret every a is_identifier","fn is_alnum x","  if same v \"_\"","  elseif is_alpha v","  elseif is_digit v","fn is_alpha x","  if is_lower v","  elseif is_upper v","fn is_arr x"," ret Array.isArray x","fn is_atom x"," if is_alnum x","  ret true"," if is_access x"," if is_tuple x"," if is_numeric x"," if is_lit x"," if is_lit_char x"," ret false","fn is_blank x"," if is_space x","fn is_bool x"," let s typeof x"," ret same s \"boolean\"","fn is_browser"," try","  inline \"window\""," catch","fn is_char x"," ret same x.length 1","fn is_comment x"," if not is_ln x"," ret match_l x \"//\"","fn is_container x"," if is_obj x","fn is_cool x"," if is_num x","fn is_def x"," ret not is_undef x","fn is_digit x","  if not contain digit v","fn is_empty x"," if is_vec x","  ret same x.length 0"," if obj x","  let keys obj_keys x","  ret is_empty keys","fn is_false x"," ret same x false","fn is_fn x"," if different s \"function\""," if same x.constructor.name \"GeneratorFunction\"","fn is_fragment x","fn is_full x","  ret not is_empty x","fn is_gn x"," if different x.constructor.name \"GeneratorFunction\"","fn is_identifier x"," let s front x"," if same s \"_\""," elseif is_alpha s","  if not is_alnum v","fn is_indented x","  if is_empty v","  let c front v","  if not is_space c","fn is_int x"," ret Number.isInteger x","fn is_ip x"," if is_ip4 x"," if is_ip6 x","fn is_ip4 x"," if different a.length 4","  if not is_digit v","  let n to_uint v","  if gt n 255","fn is_ip6 x"," let a split x \":\""," if lt a.length 3"," if gt a.length 8","  if contain v \"_\"","  if gt v.length 4","fn is_json x","  json_decode x","fn is_last x y"," ret same n y","fn is_lisp x"," let a split x \"-\""," ret every a is_alnum","fn is_lit_char x"," if not match_l x \"'\""," if not match_r x \"'\""," let s strip_l x \"'\""," let s strip_r s \"'\""," if is_empty s"," let s concat \"\\\"\" s \"\\\"\""," ret is_lit s","fn is_lit x"," if not is_json x"," let v json_decode x"," if not is_str v"," let s json_encode v"," ret same s x","fn is_ln x","  ret not is_txt x","fn is_lower x","  if not contain lower v","fn is_many x","  ret gt x.length 1","fn is_name x"," if is_identifier x","fn is_node"," ret not is_browser","fn is_none x"," if is_null x","fn is_noun x","fn is_null x"," ret same x null","fn is_num x"," if Number.isNaN x"," if same x Number.NEGATIVE_INFINITY"," if same x Number.POSITIVE_INFINITY"," ret same s \"number\"","fn is_numeric x"," if not is_num v","fn is_obj x"," ret same s \"object\"","fn is_pair x"," if not is_vec x"," ret same x.length 2","fn is_punct x","  if not contain punct v","fn is_single x","  ret same x.length 1","fn is_space x"," let s trim x"," ret is_empty s","fn is_str x"," ret same s \"string\"","fn is_token x"," if is_atom x"," if is_comment x","fn is_trivia x","fn is_true x"," ret same x true","fn is_tuple x","  if is_identifier v","fn is_txt x","  ret contain x \"\\n\"","fn is_uint x"," if is_int x","  ret gte x 0","fn is_undef x"," ret same x undefined","fn is_upper x","  if not contain upper v","fn is_url x"," if match_l x \"http://\""," if match_l x \"https://\"","fn is_vec x","fn is_word x"," if contain x \" \""," if contain x \"\\n\""," if contain x \"\\r\"","fn join x y","  ret join x \"\\n\""," ret x.join y","fn json_decode x"," ret JSON.parse x","fn json_encode x"," ret JSON.stringify x","fn log x:etc"," if is_null output","  console.log x:etc"," let a map x to_str"," let a implode a \" \""," let a concat a \"\\n\""," let a concat output a"," assign global.output a","fn lt x y"," ret inline \"x<y\"","fn lte x y"," ret inline \"x<=y\"","fn main"," fn get_fns","  var content null","   assign content file_read script","   assign content html.innerHTML","  forof punct","   assign content replace content v \" \"","  let words replace content \"\\n\" \" \"","  let words replace_rec content \"  \" \" \"","  let words split content \" \"","  let o obj","  forof words","   let k v","   if has o k","   if not is_identifier k","   var v null","   try","    assign v eval k","   catch","   if not is_fn v","   put o k v","  ret sort o"," if is_browser","  assign window.global window"," assign global.zombie false"," assign global.start time_get"," assign global.punct \"!\\\"#$%&'()*+,-./:;<=>?@[\\\\]^`{|}~\""," assign global.digit \"0123456789\""," assign global.lower \"abcdefghijklmnopqrstuvwxyz\""," assign global.upper to_upper lower","  main_node","  main_browser"," assign global.fns get_fns","  if match k \"init_*\"","   let v get fns k","   v"," let s time_hn compile"," log \"compile\" s","  let args slice process.argv 2","  pump args:etc","  fn on_load","   if same document.readyState \"complete\"","    pump","    assign window.onload null","  assign window.onload on on_load","fn map x y","  let v y v","  check is_def v","fn match_l x y"," if is_empty y"," if gt y.length x.length"," let s slice_l x y.length"," ret same s y","fn match_r x y"," let s slice_r x y.length","fn match x y"," let s replace y \".\" \"\\\\.\""," let s replace s \"*\" \".*\""," let s concat \"^\" s \"$\""," let s new RegExp s"," ret s.test x","fn max x:etc"," ret Math.max x:etc","fn merge x y"," check is_obj y"," Object.assign x y","fn min x:etc"," ret Math.min x:etc","fn mul x y z:etc"," let r inline \"x*y\"","  ret mul r z:etc","fn nop","fn obj_delete x y"," forin x","  if same k y","  let v get x k","fn obj_keys x"," ret Object.keys x","fn obj_length x"," let keys obj_keys x"," ret keys.length","fn obj_vals x"," ret Object.values x","fn obj"," ret inline \"{}\"","fn on x"," let fn value x"," fn on_fn x:etc","  if zombie","  try","   ret fn x:etc","  catch e","   assign zombie true","   throw e"," if zombie"," ret value on_fn","fn or x y z:etc"," let r inline \"x||y\"","  ret or r z:etc","fn pad_l x y z"," check is_cool x"," if is_uint x","  let s to_json x","  if is_undef y","   if is_undef z","    ret pad_l s \"0\" 3","   ret pad_l s \"0\" z","  ret pad_l s y z"," check is_uint z"," ret x.padStart z y","fn pad_r x y z","    ret pad_r s \"0\" 3","   ret pad_r s \"0\" z","  ret pad_r s y z"," ret x.padEnd z y","fn paren x"," ret concat \"(\" x \")\"","fn path_concat x y"," let x strip_r x \"/\""," let y strip_l y \"/\""," ret concat x \"/\" y","fn path_file x"," let s path_base x"," let a split s \".\"","  ret s"," drop a"," ret join a \".\"","fn path_fix x"," if match_r x \"/\"","  ret x"," ret concat x \"/\"","fn pop x y","  ret pop x 1"," if same y 1","  let r back x","  remove x n 1","  ret value r"," remove x n y","fn prepend x y"," let a dup y"," reverse a","  unshift x v","fn pump x:etc"," fn profile","  let n time_now","  let name app_name","  let s to_fixed n","  let s concat s \"s\"","  log \"profile\" name s","  assign global.cwd dir_current","  let script at process.argv 1","  let dir path_dir script","  dir_change dir"," if is_fn init","  init x:etc","  profile"," elseif is_gn init","  let generator init x:etc","  fn on_timer","   let iterator generator.next","   if iterator.done","    profile","    dir_change cwd","    ret","   time_timeout on_timer","  on_timer","fn push x y"," x.push y","fn put x y z"," check is_def z"," if has x y"," set x y z","fn random x","  ret random Number.MAX_SAFE_INTEGER"," let r Math.random"," let r mul r x","  ret trunc r","fn reject x y","  if y v","fn remove x y z","  ret remove x y 1"," let n add y z"," check between n 0 x.length"," x.splice y z","fn repeat x y"," ret x.repeat y","fn replace_rec x y z"," check is_str z"," var r x"," while contain r y","  assign r replace r y z","fn replace x y z","  let a split x y","  ret join a z"," elseif is_arr x","   if same v y","    push r z","    push r v","fn reverse x"," x.reverse","fn round x"," ret Math.round x","fn salt x y","  ret salt x \"azertyuiop\""," let a1 explode x"," let a2 explode y"," while is_full a1","  if is_empty a2","   let a explode y","   append a2 a","  let c1 shift a1","  let c2 shift a2","  let n1 asc c1","  let n2 asc c2","  let n xor n1 n2","fn same x y"," ret inline \"x===y\"","fn scan x y z","  ret scan x is_token","  ret scan x y is_fragment"," check is_fn z"," fn group x y","  check is_fn y","  let fragments dup x","  while is_full fragments","   let a reduce fragments y","   if is_full a","    let s implode a","    push r s","    shift fragments a.length","    let s shift fragments"," fn reduce x","  check is_full x","  let r dup x","  while is_full r","   let s implode r","   if y s","    brk"," let a delimit x z"," ret group a z","fn set x y z","fn shift x y","  ret shift x 1","  let r front x","  remove x 0 1"," remove x 0 y","gn sleep x"," let start time_now","  let elapsed time_now","  let elapsed sub elapsed start","  if gte elapsed x","  yield","fn slice_l x y"," ret slice x 0 y","fn slice_r x y"," ret slice x n y","fn slice x y z"," let n1 inc x.length"," check between y 0 n1","  let n sub x.length y","  ret slice x y n"," check between z 0 n1"," let n2 add y z"," check between n2 0 n1"," ret x.slice y n2","fn sort x y","   x.sort","   x.sort y","  fn compare x y","   check is_obj x","   let r cmp x.key y.key","   if same r 0","    let r cmp x.value y.value","    ret r","   ret r","   ret sort x compare","  forin x","   let key k","   let value get x k","   let o obj key value","  sort a y","   let k v.key","   put r v.key v.value","fn space x:etc"," ret join x \" \"","fn split x y","  ret split x \"\\n\"","  ret arr"," ret x.split y","fn stop"," throw new Error \"stop\"","fn str_indent x"," if is_blank x","  ret 0"," let s trim_l x"," ret sub x.length s.length","fn str_unindent x"," while is_indented r","  forof split r","   if is_empty v","    push a v","   let s slice v 1","  assign r join a","fn strip_l x y"," if match_l x y","  let n sub x.length y.length","  ret slice_r x n"," ret x","fn strip_r x y"," if match_r x y","  ret slice_l x n","fn sub x y z:etc"," let r inline \"x-y\"","  ret sub r z:etc","fn tail x y"," ret slice_r x y","fn tbl_column x y","  let s get v y","  push r s","fn tbl_columns x"," let first front x"," ret obj_keys first","fn tbl_init x"," ret arr","fn tbl_remove_column x y"," let t dup x"," forof t","  let v obj_delete v y","fn tbl_render x"," fn stringify_tbl x","   let row dup v","   forin v","    let v get row k","    if is_str v","     cont","    let s json_encode v","    set row k s","   push r row"," fn pad_column x","   if is_num v","    let s to_str v","    push a s","   elseif is_str v","    stop","  var length 0","   assign length max length v.length","   let s pad_r v \" \" length","   push r s"," let tbl stringify_tbl x"," let titles tbl_columns tbl"," let columns arr"," forof titles","  let title v","  let column tbl_column tbl title","  unshift column title","  let column pad_column column","  push columns column"," var length 0"," forof columns","  let s front v","  assign length add length s.length"," let separator repeat \"-\" length"," push a separator"," let header arr","  let s shift v","  push header s"," let s join header \" \""," push a s"," let first front columns"," forin first","  let line arr","  forof columns","   let s at v i","   push line s","  let s join line \" \"","fn time_get"," let n Date.now"," ret div n 1000","fn time_hn x"," check is_int x"," fn get_unit x","  check is_num x","  let minute 60","  let hour mul 60 minute","  let day mul 24 hour","  let month mul 30 day","  let year mul 12 month","  if lt x 10","   let n to_fixed x","   ret concat n \"s\"","  if lt x minute","   let n trunc x","  if lt x hour","   let n div x minute","   let n trunc n","   ret concat n \"m\"","  if lt x day","   let n div x hour","   ret concat n \"h\"","  if lt x month","   let n div x day","   ret concat n \"d\"","  if lt x year","   let n div x month","  let n div x year","  ret concat n \"y\""," let now time_get"," if same x now","  ret \"now\""," if gt x now","  let n sub x now","  let s get_unit n","  ret concat \"in \" s"," let n sub now x"," let s get_unit n"," ret concat s \" ago\"","fn time_interval x y","  ret time_interval x 0"," let fn on x"," let n mul y 1000"," setInterval fn n","fn time_now"," let n time_get"," ret sub n start","fn time_str x","  ret time_str n"," let h o.getHours"," let h pad_l h \"0\" 2"," let m o.getMinutes"," ret concat h \"h\" m \"m\"","fn time_timeout x y","  ret time_timeout x 0"," setTimeout fn n","fn to_base36 x"," ret x.toString 36","fn to_dump x","  if is_empty x","   ret \"arr\"","  push a \"arr\"","   let v at x i","   let s to_dump v","   let sharp concat \"#\" i","   if is_ln s","    let s space \"\" sharp s","    let s2 space \"\" sharp","    let s indent s 2","    push a s2","  push a \"end\"","  ret join a","   ret \"obj\"","  push a \"obj\"","   let v get x k","   var key k","   if not is_word key","    assign key to_lit key","    let s space \"\" key s","    let s2 space \"\" key","    push a \"end\""," elseif is_word x","  ret to_lit x","  ret space \"fn\" x.name","  ret json_encode x","fn to_fixed x y","  ret to_fixed x 2"," let a x.toFixed y"," let a split a \".\""," let integer front a"," var float back a"," let digits explode float"," while is_full digits","  let c back digits","  if different c \"0\"","  drop digits"," if is_empty digits","  ret integer"," assign float implode digits"," ret concat integer \".\" float","fn to_i x"," ret Number.parseInt x","fn to_int x"," let r to_num x"," check is_int r","fn to_json x"," ret json_encode x","fn to_lit x","fn to_lower x"," ret x.toLowerCase","fn to_num x"," let r json_decode x"," check is_num r","fn to_str x"," ret x.toString","fn to_uint x"," let r to_int x"," check is_uint r","fn to_upper x"," ret x.toUpperCase","fn trim_l x"," ret x.trimStart","fn trim_r x"," ret x.trimEnd","fn trim x"," ret x.trim","fn trunc x"," ret Math.trunc x","fn tty_width","  let r process.stdout.columns","  if is_undef r","   ret 144","  ret 80","fn txt_prepend x y","  let a split x","  let a txt_prepend a y","  let s concat y v","fn unshift x y"," x.unshift y","fn unwrap x","  ret json_decode x","  ret split x \".\"","  ret split x \":\"","fn xor x y z:etc"," let r inline \"x^y\"","  ret xor r z:etc","fn app_home x"," let lines arr"," let js app_make x"," push lines \"<!doctype html>\""," push lines \"<html>\""," push lines \"<head>\""," push lines \"<meta charset=\\\"utf-8\\\">\""," push lines \"</head>\""," push lines \"<body>\""," push lines \"<script>\""," push lines js"," push lines \"</script>\""," push lines \"</body>\""," push lines \"</html>\""," ret join lines","fn app_make x"," let cpl cpl_init"," let s to_lit x"," log \"make\" s"," cpl_include cpl x"," let r cpl_generate cpl"," let tmp concat x \"-tmp.js\""," let tmp path_concat \"tmp\" tmp"," let tmp path_tmp tmp"," file_save tmp r"," let success cpl_check_syntax cpl tmp"," fs_remove tmp"," check success"," cpl_deinit cpl","fn ast_assign cpl parameters children source"," check is_obj cpl"," check is_arr parameters"," check is_arr children"," check is_obj source"," check is_empty children"," let left front parameters"," check is_name left"," let right slice parameters 1"," let right expr_right right:etc"," let code concat left \"=\" right"," ret obj code source","fn ast_begin cpl parameters children source"," check is_empty parameters"," let r call_ast_block cpl children source"," if cpl_is_leaf cpl children","  check is_single r","  let node front r","  assign node.code trim node.code","fn ast_brk cpl parameters children source"," let code \"break\"","fn ast_call cpl parameters children source"," check is_full parameters"," let code expr_call parameters:etc","fn ast_catch cpl parameters children source"," let block call_ast_block_top cpl children source"," if is_empty parameters","  let code \"catch\"","  let node obj code source","  push r node","  append r block"," check is_single parameters"," let identifier front parameters"," check is_identifier identifier"," let code paren identifier"," let code concat \"catch\" code"," let node obj code source"," push r node"," append r block","fn ast_check cpl parameters children source"," let code join parameters \",\""," let code paren code"," let code concat \"check\" code","fn ast_cont cpl parameters children source"," let code \"continue\"","fn ast_else cpl parameters children source"," let code \"else\""," let block call_ast_block cpl children source","fn ast_elseif cpl parameters children source"," ret call_ast_if cpl parameters children source \"else if\"","fn ast_fn cpl parameters children source"," ret call_ast_xn cpl parameters children source \"function\"","fn ast_forin cpl parameters children source"," ret call_ast_for cpl parameters children source \"k in\"","fn ast_fornum cpl parameters children source"," let code expr_right parameters:etc"," let code concat \"let i=0;i<\" code \";i++\""," let code concat \"for\" code","fn ast_forof cpl parameters children source"," ret call_ast_for cpl parameters children source \"v of\"","fn ast_gn cpl parameters children source"," ret call_ast_xn cpl parameters children source \"function*\"","fn ast_if cpl parameters children source"," ret call_ast_if cpl parameters children source \"if\"","fn ast_include cpl parameters children source"," let path front parameters"," check is_lit path"," let path unwrap path","fn ast_inline cpl parameters children source"," let code front parameters"," check is_lit code"," let code unwrap code","fn ast_let cpl parameters children source"," check is_many parameters"," ret call_ast_declare cpl parameters children source \"const\"","fn ast_ret cpl parameters children source"," var code \"\"","  assign code \"return\"","  let right expr_right parameters:etc","  assign code space \"return\" right","fn ast_run cpl parameters children source"," let code space \"yield*\" code","fn ast_throw cpl parameters children source"," let code space \"throw\" code","fn ast_try cpl parameters children source"," let code \"try\"","fn ast_var cpl parameters children source"," ret call_ast_declare cpl parameters children source \"let\"","fn ast_while cpl parameters children source"," let code concat \"while\" code","fn ast_yield cpl parameters children source","  let code \"yield\"","  ret obj code source"," let code space \"yield\" code","fn call_ast_block_top cpl children source"," forof cpl_block cpl children","  let o dup v","  assign o.code indent o.code"," let code \"{\""," let open obj code source"," let code \"}\""," let close obj code source"," unshift r open"," push r close","fn call_ast_block cpl children source"," if not cpl_is_leaf cpl children","  let code \"{\"","  let open obj code source","  let code \"}\"","  let close obj code source","  unshift r open","  push r close","fn call_ast_declare cpl parameters children source keyword"," check is_str keyword"," let code slice parameters 1"," let code expr_right code:etc"," let code concat identifier \"=\" code"," let code space keyword code","fn call_ast_for cpl parameters children source keyword"," let code space \"const\" keyword code","fn call_ast_if cpl parameters children source keyword"," let code concat keyword code","fn call_ast_xn cpl parameters children source keyword"," fn get_argument x","  check is_str x","  if is_identifier x","  if is_tuple x","   let a unwrap x","   check is_pair a","   let name front a","   let etc back a","   check is_identifier name","   check same etc \"etc\"","   ret concat \"...\" name"," let name front parameters"," check is_name name"," let parameters slice parameters 1"," let args map parameters get_argument"," let args join args \",\""," let list paren args"," let code concat name list","fn cpl_block x y","  let a cpl_translate x v","  append r a","fn cpl_check_syntax x y"," let node process.argv0"," let o os_run node \"--trace-uncaught\" \"--check\" y"," if same o.status 0"," let a split o.out"," let line_js shift a"," let line_js split line_js \":\""," let line_js back line_js"," let line_js to_uint line_js"," shift a 3"," let message shift a"," flower message"," log \"line\" line_js"," let s to_lit y"," log \"path\" s"," let index dec line_js"," let o at x.out index"," let source o.source"," let path path_concat \"src\" source.path"," let content file_read path"," let content cpl_uncomment x content"," let content split content"," let line_cs inc source.index"," let s dbg_origin content line_cs \"\""," let s tbl_render s"," log s"," let content dbg_source y"," let s dbg_origin content line_js \"\"","fn cpl_compile x y"," let nodes cpl_load x y"," let nodes cpl_tokenize x nodes"," let nodes cpl_fold x nodes"," var nodes cpl_scope x nodes","  assign nodes cpl_block x nodes"," catch e","  cpl_dump x","  throw e"," append x.out nodes","fn cpl_deinit x"," let s json_encode x.cache"," file_save x.path s","fn cpl_dump x"," fn dump_ast x","  let parameters x.parameters","  let children x.children","  let a3 arr","  push a2 x.operator","  append a2 parameters","  forof a2","   if is_token v","    push a3 v","   let s to_lit v","   push a3 s","  let cs space a3:etc","  let source x.source","  let path source.path","  let ncs source.index","  let ncs inc ncs","  let o obj path ncs cs","  forof children","   let t dump_ast v","   forof t","    assign v.cs indent v.cs","   append r t","  if is_full children","   let cs \"end\"","   let o obj path ncs cs","   push r o"," forin x.stack","  let v at x.stack i","  let frame concat \"#\" n","  let title space \"compiler frame\" frame","  flower title","  let s dump_ast v","  let s tbl_render s","fn cpl_fold x y"," fn visit x","  let parent shift x","  let indent parent.indent","  let descendants arr","  while is_full x","   let o front x","   if gt o.indent indent","    shift x","    push descendants o","  let children arr","  while is_full descendants","   let o visit descendants","   push children o","  let operator parent.operator","  let parameters parent.parameters","  let source parent.source","  ret obj operator parameters children source"," let nodes dup y"," while is_full nodes","  let o visit nodes","fn cpl_generate x"," let pool arr"," fn get_index x","  let r find pool x","  if gte r 0","  let r pool.length","  push pool x"," forof x.out","  push a v.code"," let relatives arr"," let indices arr","  let source v.source","  if not contain paths path","   push paths path","  let n get_index path","  push relatives n","  push indices source.index"," let contents obj"," forof paths","  let key get_index v","  let key to_str key","  let path path_concat \"src\" v","  let content file_read path","  let content cpl_uncomment x content","  let value arr","  forof split content","   let index get_index v","   push value index","  put contents key value"," let compile time_get"," let compile trunc compile"," let compile concat \"const compile=\" compile"," push a compile"," let pool json_encode pool"," let pool concat \"const pool=\" pool"," push a pool"," let relatives json_encode relatives"," let relatives concat \"const relatives=\" relatives"," push a relatives"," let indices json_encode indices"," let indices concat \"const indices=\" indices"," push a indices"," let contents json_encode contents"," let contents concat \"const contents=\" contents"," push a contents"," push a \"main()\"","fn cpl_include x y"," fn get_files x","   let a dir_load v","   append r a"," fn get_includes x","  let dir get_app_dir x","  let a path_concat dir \"include.txt\"","  let a file_read a","  let a trim a","  forof split a","   let s path_concat \"src\" v","  push r dir"," fn get_app_dir x","  let r concat \"src/app-\" x","  if is_dir r","  let r concat \"src/spa-\" x"," let includes get_includes y"," forof get_files includes","  let ext path_ext v","  if same ext \"cs\"","   cpl_compile x v","fn cpl_init"," let path \"cache.txt\""," fn load_cache","  if is_file path","   ret json_decode s","  ret obj"," let cache load_cache"," let fns fn_match \"ast_*\""," let asts arr","  let a split k \"_\"","  shift a","  let s join a \"_\"","  put asts s v"," let stack arr"," let out arr"," ret obj asts stack out path cache","fn cpl_is_call x y"," if same y \"call\""," forin x.asts","fn cpl_is_leaf x y"," if not is_single y"," let node front y"," let operator node.operator"," if cpl_is_call x operator"," let operators arr \"brk\" \"check\" \"cont\" \"inline\" \"ret\" \"run\" \"throw\" \"yield\""," ret contain operators operator","fn cpl_load x y"," let s file_read y"," let s cpl_uncomment x s"," let path dir_current"," let path path_concat path \"src\""," let path path_fix path"," let path strip_l y path"," let lines split s"," forin lines","  let v at lines i","  let index i","  let code v","  let source obj path index","  let o obj code source","fn cpl_scan x y"," fn is_complex x","  if not is_str x","  if contain x \"//\"","  if contain x \"\\\"\""," let s trim y"," if is_complex s","  if has x.cache s","   let r get x.cache s","   let r dup r","  let r scan s","  let r reject r is_trivia","  let a dup r","  put x.cache s a"," let r split s \" \""," let r reject r is_empty","fn cpl_scope x y"," fn is_declare x","  if same x \"let\"","  if same x \"var\"","  let node shift a","  let operator node.operator","  let parameters node.parameters","  let source node.source","  let declare operator","  var name null","  var rvalue null","  if is_full parameters","   assign name front parameters","   assign rvalue slice parameters 1","  if is_declare operator","   check is_str name","   check is_arr rvalue","   let operator \"let\"","   let parameters arr \"_\" rvalue:etc","   let children arr","   let node2 obj operator parameters children source","   push r node2","   let operator \"begin\"","   let parameters arr","   let node3 obj operator parameters children source","   push r node3","   let operator declare","   let parameters arr name \"_\"","   let node4 obj operator parameters children source","   push node3.children node4","   let children cpl_scope x a","   let node5 obj operator parameters children source","   push node3.children node5","   clear a","   let children cpl_scope x node.children","   let node obj operator parameters children source","   push r node","fn cpl_tokenize x y","  let code v.code","  let source dup v.source","  let indent str_indent code","  let parameters cpl_scan x code","  if is_empty parameters","  let operator shift parameters","  if same operator \"end\"","   if is_empty parameters","  let node obj indent operator parameters children source","fn cpl_translate x y"," fn translate cpl operator parameters children source","  check is_obj cpl","  check is_str operator","  check is_arr parameters","  check is_arr children","  check is_obj source","  forin cpl.asts","   if different k operator","   let ast get cpl.asts k","   let r ast cpl parameters children source","   if is_arr r","   check is_obj r","   ret arr r","  let parameters arr operator parameters:etc","  let r ast_call cpl parameters children source","  if is_arr r","  check is_obj r","  ret arr r"," let operator y.operator"," let parameters y.parameters"," let children y.children"," let source y.source","  ret translate x operator parameters children source","  unshift x.stack y","fn cpl_uncomment x y"," forof split y","  let indent str_indent v","  let tokens cpl_scan x v","  if is_empty tokens","   push r \"\"","  let indent repeat \" \" indent","  let line join tokens \" \"","  let line concat indent line","  push r line","fn expr_arg x","  let a unwrap x","  check is_pair a","  let name front a","  let etc back a","  check is_identifier name","  check same etc \"etc\"","  ret concat \"...\" name"," log \"argument\" s","fn expr_arr x:etc"," let args map x expr_arg"," let s join args \",\""," ret bracket s","fn expr_call x y:etc"," check is_name x"," let args map y expr_arg"," ret concat x list","fn expr_in x y z:etc"," check is_identifier x"," check is_identifier y"," check is_empty z"," ret space y \"in\" x","fn expr_inline x"," ret unwrap x","fn expr_instanceof x y z:etc"," ret space x \"instanceof\" y","fn expr_new x:etc"," let rvalue expr_rvalue x:etc"," ret space \"new\" rvalue","fn expr_obj x:etc"," check every x is_identifier"," let s join x \",\""," ret brace s","fn expr_right x y:etc","  if same x \"arr\"","  elseif same x \"obj\"","  elseif same x \"_\"","  elseif same x \"null\"","  elseif same x \"true\"","  elseif same x \"false\"","  elseif is_numeric x","  elseif is_lit x","   let fn to_lit \"function\"","   let condition paren x","   let condition concat \"typeof\" condition \"===\" fn","   let condition paren condition","   let call concat x \"()\"","   ret concat condition \"?\" call \":\" x"," ret expr_rvalue x y:etc","fn expr_run x:etc"," let call expr_call x:etc"," ret space \"yield*\" call","fn expr_rvalue x:etc"," if is_single x","  if same first \"arr\"","   ret expr_arr","  elseif same first \"obj\"","   ret expr_obj","   ret first"," let args slice x 1"," if same first \"call\"","  ret expr_call args:etc"," elseif same first \"run\"","  ret expr_run args:etc"," elseif same first \"arr\"","  ret expr_arr args:etc"," elseif same first \"obj\"","  ret expr_obj args:etc"," elseif same first \"value\"","  ret expr_value args:etc"," elseif same first \"new\"","  ret expr_new args:etc"," elseif same first \"in\"","  ret expr_in args:etc"," elseif same first \"instanceof\"","  ret expr_instanceof args"," elseif same first \"inline\"","  ret expr_inline args:etc"," elseif same first \"not\"","  let right expr_right args:etc","  let right paren right","  ret concat \"!\" right","  ret expr_call x:etc","fn expr_value x y:etc"," check is_empty y","fn app_list"," forof dir_read \"src\" true","  let base path_base v","  let a split base \"-\"","  let prefix shift a","  if different prefix \"app\"","  let name join a \"-\"","  push r name","fn digest x"," let tmp path_tmp"," file_save tmp x"," let r os_execute \"sha256sum\" \"--binary\" tmp"," let r split r \" \""," let r front r","fn dir_change x"," process.chdir x","fn dir_current"," ret process.cwd","fn dir_load x"," forof dir_read x true","  if is_file v","  elseif is_dir v","fn dir_make x"," let recursive true"," let o obj recursive"," fs.mkdirSync x o","fn dir_read x y","  ret dir_read x false"," let dir path_real x"," let a fs.readdirSync dir"," sort a","  let s path_concat dir v","  if is_file s","  if y","   if is_dir s","fn dir_remove x"," fs.rmdirSync x o","fn dir_reset x"," fs_remove x"," dir_make x","fn dir_size x"," forof dir_load x","  let n file_size v","  assign r add r n","fn file_read x"," let o fs.readFileSync x"," ret o.toString","fn file_save x y"," if is_file x","  let s file_read x","  if same s y"," let dir path_dir x"," if not is_dir dir","  dir_make dir"," file_write x y","fn file_size x"," let v fs.statSync x"," ret v.size","fn file_write x y"," fs.writeFileSync x y","fn fs_copy x y","  if is_dir y","   let base path_base x","   let path path_concat y base","   fs_copy x path"," let force true"," let o obj force recursive"," fs.cpSync x y o","fn fs_remove x"," fs.rmSync x o","fn ip_list"," let s os_execute \"hostname\" \"--all-ip-addresses\""," ret split s \" \"","fn ip_v4"," forof ip_list","  if is_ip4 v","   ret v","fn ip_v6","  if is_ip6 v","fn is_dir x"," let throwIfNoEntry false"," let o obj throwIfNoEntry"," let o fs.statSync x o"," if is_undef o"," ret o.isDirectory","fn is_file x"," ret o.isFile","fn is_fs x"," ret is_def o","fn is_readable x","  var fd null","   assign fd fs.openSync x","  catch","  let n file_size x","  if gt n 0","   let buffer Buffer.alloc 1","    fs.readSync fd buffer","    fs.closeSync fd","    ret false","  fs.closeSync fd"," elseif is_dir x","   fs.readdirSync x","fn main_node"," fn on_uncaught_exception x y","  check is_obj x","  let title space x.message \"/\" y","  dbg_origin_cs x.stack","  let backtrace dbg_backtrace x.stack","  tbl_remove_column backtrace \"njs\"","  tbl_remove_column backtrace \"js\"","  let s tbl_render backtrace","  flower \"backtrace\"","  dbg_origin_js x.stack","  dir_change cwd","  process.exit 1"," assign global.cp require \"child_process\""," assign global.crypto require \"crypto\""," assign global.fs require \"fs\""," assign global.http require \"http\""," assign global.os require \"os\""," assign global.path require \"path\""," assign global.util require \"util\""," process.on \"uncaughtExceptionMonitor\" on_uncaught_exception","fn open x"," os_system \"xdg-open\" x","fn os_detach x:etc"," let o os_spawn x:etc"," o.unref","fn os_execute x:etc"," let o os_run x:etc"," ret o.out","fn os_home"," ret os.homedir","fn os_host"," ret os.hostname","fn os_ps"," let s os_execute \"ps\" \"aux\""," let a split s"," shift a","  let s replace_rec v \"  \" \" \"","  let pid at a 1","  let pid to_uint pid","  let path at a 10","  let args slice a 11","  let o obj pid path args","fn os_run x y:etc"," let maxBuffer mul 1 1024 1024 1024"," let encoding \"utf8\""," let o obj maxBuffer encoding"," let streams cp.spawnSync x y o"," let out streams.stdout.toString"," let out trim_r out"," let err streams.stderr.toString"," let err trim_r err"," if is_full out","  push a out"," if is_full err","  push a err"," let out join a"," let status streams.status"," ret obj status out","fn os_shell x:etc"," let result os_execute x:etc"," let command join x \" \""," let command to_lit command"," log \"shell\" command"," forof split result","  log \" >\" v","fn os_spawn x y:etc"," let detached true"," let stdio \"ignore\""," let o obj detached stdio"," ret cp.spawn x y o","fn os_system x y:etc"," let stdio \"inherit\""," let o obj stdio"," let o cp.spawnSync x y o"," ret o.status","fn os_user"," let o os.userInfo"," ret o.username","fn path_base x"," ret path.basename x","fn path_dir x"," ret path.dirname x","fn path_ext x"," let s path.extname x"," ret strip_l s \".\"","fn path_real x"," ret fs.realpathSync x","fn path_tmp x","  ret path_tmp \"tmp/tmp.txt\""," let file path_file x"," let ext path_ext x","  let base random","  let base to_base36 base","  let base concat file \"-\" base \".\" ext","  let r path_concat dir base","  if not is_file r","fn ssh_execute x:etc"," ret ssh_pass x:etc","fn ssh_pass x:etc"," let parameters dup x"," let first shift parameters"," if is_str first","  ret ssh_pass os_execute x:etc"," check is_fn first"," ret first \"sshpass\" \"-p\" parameters:etc","fn ssh_system x y:etc"," let r ssh_pass x y:etc"," let a split r"," if is_full a","  log y:etc","  let a txt_prepend a \" > \"","  let s join a","fn init x:etc"," fn is_app x","  let base concat \"app-\" x","  let path path_concat \"src\" base","  ret is_dir path"," let apps app_list","  dump apps"," let app shift parameters"," if not is_app app"," var run true"," if extract parameters \"--compile\"","  assign run false"," cpl_include cpl app"," let code cpl_generate cpl"," let sloc split code"," let sloc sloc.length"," let out concat \"out-\" app \".js\""," file_save out code"," log \"sloc\" sloc"," if not cpl_check_syntax cpl out"," if run","  dir_reset \"tmp\"","  os_system node \"--trace-uncaught\" out parameters:etc"]
const relatives=[0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,18,18,18,18,18,19,19,19,19,19,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,35,35,35,35,35,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,38,38,38,38,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,40,40,40,40,40,40,40,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,43,43,43,43,43,43,43,43,43,43,43,44,44,44,44,44,44,44,44,44,44,44,44,44,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,49,49,49,49,49,50,50,50,50,50,50,50,51,51,51,51,51,51,52,52,52,52,52,52,53,53,53,53,53,53,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,55,55,55,55,55,56,56,56,56,56,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,58,58,58,58,58,58,58,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,62,62,62,62,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,64,64,64,64,64,64,64,64,64,64,65,65,65,65,65,65,65,65,66,66,66,66,66,66,66,66,66,66,66,66,67,67,67,67,67,67,68,68,68,68,68,68,69,69,69,69,69,69,69,69,70,70,70,70,70,70,70,70,71,71,71,71,72,72,72,72,72,72,72,72,72,72,72,72,72,73,73,73,73,73,73,73,73,73,73,73,73,73,73,74,74,74,74,75,75,75,75,75,75,75,75,75,75,75,75,75,75,76,76,76,76,76,76,76,76,76,76,77,77,77,77,77,77,78,78,78,78,78,78,78,78,78,78,78,78,78,78,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,81,81,81,81,82,82,82,82,82,82,82,82,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,86,86,86,86,86,86,86,86,86,86,87,87,87,87,87,87,87,87,87,87,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,90,90,90,90,90,90,91,91,91,91,91,91,91,91,91,91,91,91,91,92,92,92,92,92,92,93,93,93,93,93,93,93,93,93,93,94,94,94,94,95,95,95,95,95,95,95,95,96,96,96,96,96,96,96,96,97,97,97,97,98,98,98,98,98,98,98,98,98,98,98,98,98,98,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,100,100,100,100,100,100,100,100,100,100,101,101,101,101,101,101,102,102,102,102,102,102,102,102,102,102,102,102,102,103,103,103,103,103,103,104,104,104,104,104,104,104,104,104,104,104,104,105,105,105,105,105,105,105,105,106,106,106,106,106,106,106,106,107,107,107,107,107,107,107,107,107,107,108,108,108,108,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,110,110,110,110,110,110,111,111,111,111,111,111,112,112,112,112,113,113,113,113,113,113,113,113,113,113,113,113,113,114,114,114,114,114,114,114,114,114,114,115,115,115,115,115,115,115,115,116,116,116,116,116,116,116,116,116,116,116,116,116,116,117,117,117,117,117,117,117,117,118,118,118,118,118,119,119,119,119,119,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,121,121,121,121,121,121,122,122,122,122,122,122,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,128,128,128,128,129,129,129,129,129,129,130,130,130,130,131,131,131,131,131,131,131,131,131,131,131,131,131,131,132,132,132,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,134,134,134,134,134,135,135,135,135,135,135,135,135,135,136,136,136,136,136,137,137,137,137,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,139,139,139,139,139,139,139,139,139,139,139,139,139,139,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,142,142,142,142,142,143,143,143,143,143,143,143,143,143,143,143,143,143,143,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,145,145,145,145,145,145,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,147,147,147,147,147,147,147,147,147,147,147,147,147,147,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,149,149,149,149,149,149,150,150,150,150,150,150,150,150,150,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,154,154,154,154,154,154,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,157,157,157,157,157,158,158,158,158,158,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,160,160,160,160,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,162,162,162,162,162,162,162,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,165,165,165,165,165,165,166,166,166,166,166,166,166,166,166,166,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,169,169,169,169,170,170,170,170,170,170,170,170,170,171,171,171,171,172,172,172,172,172,172,172,172,172,172,172,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,174,174,174,174,174,174,174,174,174,174,174,174,174,174,175,175,175,175,175,175,175,175,175,175,175,175,175,175,176,176,176,176,176,176,176,176,176,176,176,176,176,176,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,179,179,179,179,179,179,179,179,179,180,180,180,180,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,183,183,183,183,183,183,183,183,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,186,186,186,186,186,186,186,186,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,189,189,189,189,189,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192,192,192,192,192,193,193,193,193,193,193,193,193,193,193,193,193,194,194,194,194,194,195,195,195,195,195,196,196,196,196,196,197,197,197,197,197,197,197,197,197,197,197,197,198,198,198,198,198,199,199,199,199,199,199,199,199,199,199,199,199,200,200,200,200,200,201,201,201,201,201,202,202,202,202,202,203,203,203,203,203,204,204,204,204,204,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,207,207,207,207,207,207,208,208,208,208,208,208,208,208,208,208,208,209,209,209,209,209,209,209,209,209,209,209,209,209,209,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,214,214,214,214,214,214,214,214,214,214,214,214,214,214,215,215,215,215,215,215,215,215,215,215,215,215,215,215,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,218,218,218,218,218,218,218,218,218,218,218,218,218,218,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,220,220,220,220,220,220,220,220,221,221,221,221,221,221,221,221,222,222,222,222,222,222,222,222,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,224,224,224,224,224,224,224,224,225,225,225,225,225,225,225,225,226,226,226,226,226,226,226,226,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,229,229,229,229,229,229,229,229,229,229,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,234,234,234,234,234,234,234,234,234,234,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,246,246,246,246,246,246,246,246,246,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,252,252,252,252,252,252,252,252,252,252,252,252,252,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,261,261,261,261,261,261,261,261,261,261,261,261,261,261,262,262,262,262,262,262,262,262,262,262,262,262,262,262,262,262,262,262,262,262,262,263,263,263,263,263,263,263,264,264,264,264,264,265,265,265,265,265,265,265,266,266,266,266,266,266,266,266,267,267,267,267,267,267,267,267,267,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,269,269,269,269,269,269,269,269,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,271,271,271,271,271,271,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,274,274,274,274,274,275,275,275,275,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,280,280,280,280,280,280,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,282,282,282,282,282,282,282,282,282,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,284,284,284,284,284,284,284,284,284,285,285,285,285,285,285,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,288,288,288,288,288,288,288,288,289,289,289,289,289,289,289,289,289,290,290,290,290,290,290,290,290,290,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,296,296,296,296,296,297,297,297,297,297,297,297,297,298,298,298,298,298,298,298,298,299,299,299,299,300,300,300,300,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,306,306,306,306,306,306,306,306,307,307,307,307,307,308,308,308,308,308,309,309,309,309,309,309,309,309,309,310,310,310,310,310,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,312,312,312,312,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315]
const indices=[0,0,1,3,0,0,0,1,2,4,4,4,4,6,7,9,4,4,0,0,0,1,2,4,4,4,4,6,7,9,4,4,0,0,0,1,3,0,0,0,1,1,2,2,2,2,3,3,3,5,3,2,2,1,6,6,7,7,7,7,8,8,8,8,10,11,13,13,13,15,13,8,8,7,7,6,16,17,0,0,0,1,2,4,5,0,0,0,1,0,0,0,1,3,0,0,0,1,2,4,4,4,4,6,8,9,11,4,4,0,0,0,1,3,4,6,8,8,8,8,9,9,9,9,11,12,14,9,9,8,8,0,0,0,1,3,3,3,3,4,4,4,4,6,6,7,7,7,7,9,11,11,11,11,12,12,12,12,13,13,13,13,15,16,18,18,18,18,20,18,18,13,13,12,12,11,11,7,7,6,23,4,4,3,3,0,0,0,1,3,3,3,3,5,5,6,6,6,6,7,7,7,7,8,8,8,8,10,8,8,7,7,6,6,5,13,3,3,0,0,0,1,2,3,4,6,7,9,10,12,0,0,0,1,3,0,0,0,1,3,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,9,10,10,10,12,10,9,15,15,16,16,16,16,17,17,17,17,18,18,18,20,18,17,17,16,16,15,23,23,24,24,24,24,25,25,25,25,26,26,26,28,26,25,25,24,24,23,31,31,32,32,32,32,33,33,33,33,34,34,34,36,34,33,33,32,32,31,39,39,39,39,40,40,40,40,41,41,41,43,41,40,40,39,39,7,7,6,6,5,5,4,4,0,0,0,1,2,4,6,8,8,8,8,10,12,8,8,0,0,0,1,1,2,3,1,4,4,5,5,5,5,7,8,5,5,4,11,0,0,0,1,3,0,0,0,1,3,0,0,0,1,3,0,0,0,1,2,4,5,7,8,10,0,0,0,1,3,3,4,5,7,8,10,11,13,3,16,16,16,16,18,18,19,19,20,22,19,25,25,25,25,26,26,26,26,27,27,27,27,29,29,29,30,30,30,31,31,32,34,31,37,37,37,37,39,40,37,37,27,27,26,26,25,25,18,43,16,16,0,0,0,1,0,0,0,1,3,4,6,8,0,0,0,1,3,3,3,3,4,4,4,4,6,6,7,7,7,7,8,8,8,8,10,10,11,11,11,11,12,12,12,12,13,13,13,13,15,13,13,12,12,11,11,10,8,8,7,7,6,19,4,4,3,3,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,8,6,5,5,4,4,3,3,0,0,0,1,1,2,2,2,4,2,1,7,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,18,16,15,15,14,14,13,13,12,12,11,11,10,10,9,9,0,0,0,1,1,2,2,2,4,2,1,7,9,9,10,12,12,12,12,14,14,15,16,18,18,18,18,20,21,23,18,18,14,26,12,12,9,29,29,29,29,30,30,30,30,31,31,31,31,32,32,32,32,34,34,35,35,35,35,36,36,36,36,38,38,39,39,39,39,41,42,39,39,38,45,45,45,45,46,46,46,46,47,47,47,47,48,48,48,48,50,51,53,53,53,53,55,55,56,55,58,59,61,61,61,61,62,62,62,62,63,63,63,63,65,66,68,68,68,68,70,70,70,70,72,73,75,75,75,75,76,76,76,76,77,77,77,77,78,78,78,78,79,79,79,79,80,80,80,80,81,81,81,83,81,80,80,79,79,78,78,77,77,76,76,75,75,70,70,68,68,63,63,62,62,61,61,53,53,48,48,47,47,46,46,45,45,36,36,35,35,34,86,32,32,31,31,30,30,29,29,0,0,0,1,1,2,2,2,4,2,1,7,9,9,9,9,11,11,12,12,12,12,13,13,13,13,15,15,15,16,16,16,17,17,17,18,19,21,13,13,12,12,11,24,9,9,0,0,0,1,1,2,2,2,4,2,1,7,9,10,12,14,14,14,14,15,15,15,15,16,16,16,16,18,18,19,19,19,19,20,20,20,20,21,21,21,21,22,22,22,22,23,23,23,23,24,24,24,24,25,25,25,25,26,26,26,26,27,27,27,27,28,28,28,28,30,31,28,28,27,27,26,26,25,25,24,24,23,23,22,22,21,21,20,20,19,19,18,16,16,15,15,14,14,0,0,0,1,1,2,2,2,4,2,1,7,9,10,12,14,14,14,14,15,15,15,15,16,16,16,16,18,18,19,19,19,19,20,20,20,20,21,21,21,21,22,22,22,22,23,23,23,23,24,24,24,24,25,25,25,25,26,26,26,26,27,27,27,27,29,30,27,27,26,26,25,25,24,24,23,23,22,22,21,21,20,20,19,19,18,16,16,15,15,14,14,0,0,0,1,2,4,5,7,9,10,12,14,14,15,16,17,18,20,20,20,20,21,21,21,21,23,23,23,23,24,24,24,24,25,25,25,25,27,27,27,27,29,29,29,29,31,31,32,31,33,33,34,35,37,37,38,37,33,41,41,42,42,42,42,43,43,43,43,45,45,46,45,48,48,48,48,49,49,49,49,51,52,53,53,54,56,53,59,59,59,61,59,49,49,48,48,43,43,42,42,41,64,64,64,64,66,67,70,70,70,70,72,72,72,72,73,73,73,73,75,75,76,76,76,76,77,77,77,77,78,78,78,78,80,78,78,77,77,76,76,75,83,83,84,85,87,83,90,73,73,72,72,70,70,64,64,29,29,27,27,25,25,24,24,23,23,21,21,20,20,14,93,93,93,93,95,96,98,98,98,98,100,100,101,103,104,106,100,109,98,98,93,93,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,6,6,7,7,7,9,7,6,12,12,12,12,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,20,20,21,21,21,23,21,20,26,18,18,17,17,16,16,15,15,14,29,29,29,29,31,31,31,32,32,33,34,32,38,38,39,39,39,39,40,40,40,40,42,43,45,45,45,45,46,46,46,46,47,47,47,47,49,49,49,50,50,51,50,53,53,53,53,54,54,54,54,55,55,55,55,56,56,56,58,56,55,55,54,54,53,53,47,47,46,46,45,45,40,40,39,39,38,61,29,29,12,12,4,4,2,2,1,1,0,0,0,1,1,2,2,3,3,3,3,4,4,4,6,4,3,3,2,7,8,9,10,1,13,13,13,13,15,15,16,15,17,17,18,17,20,20,20,20,21,21,21,21,23,23,24,24,24,24,26,27,24,24,23,30,30,30,32,30,21,21,20,20,13,13,0,0,0,1,3,0,0,0,1,3,3,3,3,5,5,6,7,5,11,3,3,0,0,0,1,3,4,6,8,8,8,8,10,10,11,11,11,11,13,13,14,16,13,19,19,19,19,20,20,20,20,22,22,23,24,22,25,26,20,20,19,19,11,11,10,29,8,8,0,0,0,1,0,0,0,1,2,3,5,5,5,5,7,8,10,5,5,0,0,0,1,3,4,6,0,0,0,1,3,3,4,4,5,5,5,5,7,8,10,10,10,12,10,5,5,4,15,3,18,18,18,18,20,20,21,21,22,22,22,22,23,23,23,23,24,24,24,24,25,25,25,25,26,26,26,26,27,27,27,27,28,28,28,30,28,27,27,26,26,25,25,24,24,23,23,22,22,21,31,31,32,32,32,34,32,31,20,36,36,37,37,37,39,37,36,40,41,18,18,0,0,0,1,3,4,5,5,6,6,6,6,8,10,6,6,5,11,12,0,0,0,1,2,4,4,5,6,4,9,0,0,0,1,3,3,3,3,5,6,9,3,3,0,0,0,1,2,4,4,4,4,5,5,5,5,7,9,9,10,10,11,10,12,13,9,16,5,5,4,4,0,0,0,1,2,4,4,4,4,6,6,7,6,10,4,4,0,0,0,1,1,1,1,3,3,4,4,4,4,6,8,4,4,3,11,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,21,19,18,18,17,17,16,16,15,15,14,14,13,13,1,1,0,0,0,1,3,3,3,3,5,5,6,7,9,9,9,11,9,5,14,3,3,0,0,0,1,3,0,0,0,1,2,3,5,0,0,0,1,2,4,0,0,0,1,2,4,0,0,0,1,2,4,0,0,0,1,2,4,4,5,6,7,8,9,10,4,13,0,0,0,1,3,0,0,0,1,3,0,0,0,1,3,4,6,6,6,6,8,8,9,9,9,9,11,12,13,13,14,14,14,14,15,15,15,17,15,14,14,13,9,9,8,21,6,6,0,0,0,1,2,3,5,0,0,0,1,2,4,5,7,7,7,7,9,10,12,7,7,0,0,0,1,2,4,5,7,7,8,8,8,9,9,9,10,10,10,11,12,7,15,0,0,0,1,2,4,5,7,7,8,8,8,9,9,9,10,11,7,14,0,0,0,1,0,0,0,1,2,4,5,7,8,10,11,13,14,16,17,19,0,0,0,1,2,4,5,7,8,10,0,0,0,1,1,1,3,1,0,0,0,1,1,2,1,3,3,4,3,7,0,0,0,1,2,4,0,0,0,1,2,4,0,0,0,1,2,4,5,7,0,0,0,1,2,4,5,7,0,0,0,1,0,0,0,1,2,4,5,7,7,8,9,7,12,0,0,0,1,2,4,4,5,5,5,7,5,4,10,0,0,0,1,0,0,0,1,1,1,1,3,4,6,7,9,1,1,0,0,0,1,2,4,5,7,8,10,0,0,0,1,2,4,0,0,0,1,1,1,1,3,4,6,7,9,1,1,0,0,0,1,2,4,5,7,7,7,7,9,9,9,10,10,10,11,12,14,14,15,16,14,19,7,7,0,0,0,1,2,4,5,7,7,8,9,11,11,11,11,13,14,11,11,7,17,0,0,0,1,0,0,0,1,2,4,5,7,0,0,0,1,2,4,4,4,4,6,7,9,9,10,11,13,13,13,13,15,16,13,13,9,19,4,4,0,0,0,1,2,4,4,4,4,6,7,9,10,12,12,13,14,16,17,19,20,22,23,12,26,4,4,0,0,0,1,2,4,5,7,7,8,7,9,9,10,9,13,0,0,0,1,2,4,4,4,6,4,0,0,0,1,2,4,4,4,6,4,0,0,0,1,2,4,5,7,8,10,10,10,10,11,11,11,11,13,14,16,16,16,18,16,11,11,10,10,0,0,0,1,2,4,5,7,7,7,7,9,10,12,12,12,14,12,7,7,0,0,0,1,2,4,0,0,0,1,2,4,5,7,7,8,9,7,12,0,0,0,1,2,4,0,0,0,1,2,4,5,7,8,10,0,0,0,1,0,0,0,1,2,4,5,7,0,0,0,1,2,4,5,7,0,0,0,1,0,0,0,1,2,4,5,7,8,10,10,10,12,10,0,0,0,1,2,4,5,7,7,7,7,9,10,12,12,12,14,12,7,7,0,0,0,1,2,4,4,4,6,4,0,0,0,1,2,4,0,0,0,1,2,4,5,7,7,8,9,7,12,0,0,0,1,2,4,0,0,0,1,2,4,5,7,7,7,9,7,0,0,0,1,1,1,3,1,0,0,0,1,2,4,5,7,0,0,0,1,2,4,5,7,8,10,0,0,0,1,0,0,0,1,2,4,5,7,7,7,7,9,10,12,12,13,14,16,12,19,7,7,0,0,0,1,2,4,0,0,0,1,2,4,0,0,0,1,0,0,0,1,2,4,5,7,7,8,9,7,12,0,0,0,1,2,4,5,7,8,10,0,0,0,1,2,4,5,7,0,0,0,1,2,4,5,7,8,10,11,13,14,16,0,0,0,1,3,4,6,8,0,0,0,1,3,0,0,0,1,3,0,0,0,1,1,2,3,1,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,11,9,9,8,8,7,7,6,6,0,0,0,1,2,4,0,0,0,1,2,4,0,0,0,1,1,2,2,2,2,4,4,5,5,5,5,7,5,5,4,8,8,9,8,10,11,13,13,14,13,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,22,22,23,23,23,23,25,26,28,29,31,31,31,31,33,33,34,33,35,35,35,38,39,41,31,31,23,23,22,44,20,20,19,19,18,18,17,17,2,2,1,47,47,48,47,50,51,52,53,54,55,56,58,59,60,61,62,63,65,67,67,68,68,69,69,69,71,69,68,67,75,75,75,75,77,79,79,80,80,80,82,80,79,83,83,84,84,85,85,86,88,85,84,92,83,93,94,75,75,0,0,0,1,2,4,4,4,4,6,6,7,7,7,7,9,11,7,7,6,14,4,4,0,0,0,1,2,4,5,7,8,10,11,13,13,13,15,13,0,0,0,1,2,4,5,7,8,10,11,13,13,13,15,13,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,9,7,6,6,5,5,4,4,0,0,0,1,0,0,0,1,2,4,0,0,0,1,0,0,0,1,2,4,4,4,4,6,7,9,4,4,0,0,0,0,0,0,1,2,4,4,4,4,6,6,7,8,10,10,10,12,10,6,15,4,4,0,0,0,1,3,0,0,0,1,3,3,3,5,3,0,0,0,1,3,0,0,0,1,0,0,0,1,3,3,3,3,5,5,6,7,9,9,10,9,11,11,12,14,11,5,18,19,21,3,3,0,0,0,1,2,4,4,4,4,6,7,9,4,4,0,0,0,1,3,3,4,4,4,4,6,6,7,8,10,6,13,4,4,3,16,17,18,20,0,0,0,1,3,3,4,4,4,4,6,6,7,8,10,6,13,4,4,3,16,17,18,20,0,0,0,1,3,0,0,0,1,1,1,1,2,2,2,4,2,1,1,0,0,0,1,3,3,3,3,4,4,4,4,6,7,9,11,4,4,3,3,0,0,0,1,2,4,0,0,0,1,3,4,6,8,8,8,8,10,10,11,11,11,11,13,15,11,11,10,18,8,8,0,0,0,1,2,4,4,4,4,6,8,9,4,4,0,0,0,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,7,5,4,4,3,3,2,2,1,10,10,11,13,13,13,13,14,14,14,16,14,13,13,10,17,17,17,18,19,21,21,22,23,21,24,24,25,25,25,25,27,27,28,28,28,28,30,30,31,32,33,30,36,28,28,27,39,25,25,24,0,0,0,1,2,4,0,0,0,1,2,3,5,6,8,0,0,0,1,2,4,5,7,7,7,7,8,8,8,8,10,11,13,8,8,7,7,0,0,0,1,2,4,4,4,4,6,6,7,8,10,6,13,4,4,0,0,0,1,2,4,5,7,8,10,10,10,10,12,14,10,10,0,0,0,1,2,4,0,0,0,1,2,3,5,5,5,5,7,7,8,7,11,5,5,0,0,0,1,2,3,5,5,6,6,6,8,6,5,9,9,10,10,10,10,12,12,13,14,15,16,12,19,10,10,9,20,21,0,0,0,1,3,0,0,0,1,3,0,0,0,1,3,4,6,6,6,6,7,7,7,7,8,8,8,8,10,10,11,11,12,12,12,14,12,11,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,22,22,22,22,24,22,22,21,21,20,20,19,19,18,18,17,17,10,27,8,8,7,7,6,6,0,0,0,1,0,0,0,1,3,4,6,8,9,11,13,13,14,15,17,17,17,17,18,18,18,18,20,20,21,21,21,21,23,23,24,24,24,24,26,27,24,24,23,28,28,29,29,29,31,29,28,21,21,20,35,18,18,17,17,13,38,38,39,40,41,43,43,43,43,45,45,46,46,46,46,48,49,51,46,46,45,54,43,43,38,57,57,57,59,57,0,0,0,1,2,3,5,0,0,0,1,3,4,6,8,8,9,9,9,9,11,13,9,9,8,16,0,0,0,1,2,4,4,4,4,6,6,7,7,7,7,8,8,8,8,10,11,13,8,8,7,7,6,4,4,0,0,0,1,2,4,0,0,0,1,2,4,4,4,6,4,0,0,0,1,3,3,3,3,5,7,7,8,8,8,10,8,7,13,15,15,15,15,17,19,15,15,3,3,0,0,0,1,3,3,4,5,6,7,3,8,8,9,9,10,11,13,13,13,13,15,15,16,16,16,18,16,15,21,13,13,9,24,25,27,27,27,27,28,28,28,28,30,30,31,31,31,31,32,32,32,32,33,33,33,35,33,32,32,31,31,30,38,40,40,41,41,41,43,41,40,46,28,28,27,27,8,0,0,0,1,0,0,0,1,3,4,6,7,9,0,0,0,1,0,0,0,1,3,4,6,6,6,8,6,0,0,0,1,3,3,3,3,5,5,6,6,6,6,8,8,9,9,10,12,9,15,15,15,17,15,8,20,6,6,5,23,3,3,0,0,0,1,2,4,4,5,5,5,7,5,4,10,0,0,0,1,2,4,4,5,5,5,7,5,4,10,0,0,0,1,2,4,4,4,4,6,7,9,4,4,0,0,0,1,2,4,4,5,6,7,8,9,10,4,13,0,0,0,1,2,4,4,4,4,6,6,7,7,7,9,7,6,12,4,4,0,0,0,1,3,3,3,5,3,0,0,0,1,0,0,0,1,2,4,4,4,4,6,8,8,9,9,9,11,9,8,4,4,0,0,0,1,3,3,4,6,6,6,6,8,8,9,9,9,9,11,11,12,12,12,12,14,15,17,17,17,19,17,12,12,11,22,9,9,8,25,6,6,3,28,28,29,31,31,31,31,32,32,32,32,34,34,35,35,36,36,36,38,36,35,39,40,41,42,34,45,45,45,45,47,47,48,47,51,51,52,52,52,54,52,51,57,45,45,32,32,31,31,28,60,60,60,60,61,61,61,61,62,62,62,62,64,64,65,65,65,65,66,66,66,66,68,70,70,70,72,70,66,66,65,65,64,75,75,75,75,77,77,78,78,78,78,80,78,78,77,83,83,83,83,84,84,84,84,86,88,88,88,88,90,90,91,91,91,93,91,90,96,96,96,96,98,99,101,101,101,101,103,103,104,104,104,104,105,105,105,105,107,107,108,108,108,110,108,107,113,113,113,115,113,105,105,104,104,103,118,120,101,101,96,96,88,88,84,84,83,83,75,75,62,62,61,61,60,60,0,0,0,1,1,1,3,1,0,0,0,1,3,3,4,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,12,12,13,13,13,15,13,12,18,18,19,19,19,21,19,18,24,24,25,25,25,25,26,26,26,28,26,25,25,24,31,31,32,32,32,32,33,33,33,35,33,32,32,31,38,38,39,39,39,39,40,40,40,42,40,39,39,38,45,45,46,46,46,46,47,47,47,49,47,46,46,45,52,52,52,52,53,53,53,55,53,52,52,10,10,9,9,8,8,7,7,6,6,3,58,58,58,58,60,61,63,63,64,64,64,64,65,65,65,67,65,64,64,63,70,70,70,70,71,71,71,73,71,70,70,58,58,0,0,0,1,3,4,6,8,8,8,8,9,9,9,11,9,8,8,0,0,0,1,1,1,3,1,0,0,0,1,1,2,2,2,4,2,1,7,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,16,14,13,13,12,12,11,11,10,10,9,9,0,0,0,1,3,4,6,8,8,8,8,9,9,9,11,9,8,8,0,0,0,1,3,0,0,0,1,3,3,4,5,7,7,7,7,9,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,17,17,18,18,18,20,18,17,21,21,22,22,22,22,23,23,23,23,25,26,23,23,22,22,21,15,15,14,14,13,13,12,12,11,30,32,7,7,3,33,33,34,35,37,37,37,37,39,41,41,42,42,42,42,43,43,43,43,44,44,44,44,46,46,47,46,49,49,50,50,50,52,50,49,53,53,54,54,54,54,55,55,55,55,57,58,59,55,55,54,54,53,44,44,43,43,42,42,41,63,65,37,37,33,66,67,68,69,70,71,0,0,0,1,3,4,6,8,8,8,8,9,9,9,9,11,12,14,14,14,14,15,15,15,15,16,16,16,16,18,18,19,19,19,19,21,22,24,19,19,18,27,28,30,32,16,16,15,15,14,14,9,9,8,8,0,0,0,1,3,0,0,0,1,3,3,3,3,5,7,3,3,0,0,0,1,3,0,0,0,1,3,0,0,0,1,3,0,0,0,1,3,3,3,3,5,7,3,3,0,0,0,1,3,0,0,0,1,3,3,3,3,5,7,3,3,0,0,0,1,3,0,0,0,1,3,0,0,0,1,3,0,0,0,1,3,0,0,0,1,3,0,0,0,1,1,2,2,2,2,4,5,7,2,2,1,8,9,10,11,0,0,0,1,1,2,2,2,2,3,3,3,5,3,2,2,1,8,9,11,11,11,11,13,13,14,14,14,16,14,13,19,11,11,0,0,0,1,2,4,0,0,0,1,3,4,6,7,9,10,12,0,0,0,1,2,4,4,4,4,6,7,9,4,4,0,0,0,1,3,3,3,3,4,4,4,4,6,7,8,9,10,11,12,13,14,15,16,18,4,4,3,3,0,0,0,1,3,3,3,3,4,4,4,4,6,8,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,15,17,17,17,17,19,21,23,25,17,17,13,13,12,12,11,11,10,10,4,4,3,3,0,0,0,1,2,3,4,6,8,8,8,8,10,12,12,12,12,13,13,13,13,14,14,14,16,14,13,13,12,12,8,8,0,0,0,1,2,3,4,6,8,8,8,8,10,10,11,13,13,13,13,15,13,13,10,18,8,8,0,0,0,1,2,3,4,6,7,9,9,9,11,9,0,0,0,1,2,3,4,6,7,9,9,9,11,9,0,0,0,1,2,3,4,6,6,6,6,7,7,7,7,9,9,10,10,10,10,11,11,11,11,13,14,16,11,11,10,10,9,19,21,21,21,21,23,25,25,25,25,26,26,26,26,27,27,27,27,29,30,32,27,27,26,26,25,25,21,21,7,7,6,6,0,0,0,1,2,3,4,6,8,8,8,8,9,9,9,9,10,10,10,12,10,9,9,8,8,0,0,0,1,2,3,4,6,7,9,9,9,11,9,0,0,0,1,2,3,4,6,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,13,14,16,11,11,10,10,9,9,8,8,0,0,0,1,2,3,4,6,0,0,0,1,2,3,4,6,0,0,0,1,2,3,4,6,0,0,0,1,2,3,4,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,15,16,18,13,13,12,12,11,11,10,10,9,9,8,8,7,7,6,6,0,0,0,1,2,3,4,6,0,0,0,1,2,3,4,6,0,0,0,1,2,3,4,6,0,0,0,1,2,3,4,6,7,9,9,9,9,11,13,13,13,15,13,9,9,0,0,0,1,2,3,4,6,7,9,9,9,9,11,13,13,13,15,13,9,9,0,0,0,1,2,3,4,6,7,9,0,0,0,1,2,3,4,6,8,8,8,8,10,10,11,10,12,12,13,13,13,13,15,13,13,12,18,8,8,0,0,0,1,2,3,4,6,7,9,9,9,9,10,10,10,12,10,9,9,0,0,0,1,2,3,4,6,8,8,8,8,9,9,9,11,9,8,8,0,0,0,1,2,3,4,6,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,13,14,16,11,11,10,10,9,9,8,8,0,0,0,1,2,3,4,6,7,9,0,0,0,1,2,3,4,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,13,14,16,11,11,10,10,9,9,8,8,7,7,6,6,0,0,0,1,2,3,4,6,8,8,9,9,9,11,9,8,14,14,14,14,15,15,15,17,15,14,14,0,0,0,1,2,3,5,5,5,5,7,7,8,8,8,8,10,12,8,8,7,15,15,15,15,16,16,16,16,18,18,18,18,19,19,19,19,21,22,24,19,19,18,18,16,16,15,15,5,5,0,0,0,1,2,3,5,5,5,5,7,7,8,8,8,8,10,12,8,8,7,15,15,16,16,16,16,17,17,17,17,19,19,19,19,20,20,20,20,22,23,20,20,19,19,17,17,16,16,15,26,5,5,0,0,0,1,2,3,4,5,7,9,9,9,9,11,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,18,16,15,15,14,14,13,13,9,9,0,0,0,1,2,3,4,5,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,15,16,18,13,13,12,12,11,11,10,10,9,9,8,8,7,7,0,0,0,1,2,3,4,5,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,14,15,17,12,12,11,11,10,10,9,9,8,8,7,7,0,0,0,1,2,3,4,5,7,7,8,10,11,13,13,14,14,14,14,16,18,18,18,18,19,19,19,19,21,22,24,19,19,18,18,14,14,13,27,7,30,30,30,30,31,31,31,31,33,35,35,35,35,36,36,36,36,37,37,37,37,38,38,38,38,39,39,39,39,40,40,40,40,41,41,41,41,42,42,42,42,44,45,47,42,42,41,41,40,40,39,39,38,38,37,37,36,36,35,35,31,31,30,30,0,0,0,1,2,4,5,7,7,7,7,9,9,10,10,10,12,10,9,15,7,7,0,0,0,1,2,4,4,4,4,5,5,5,5,7,8,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,16,18,18,18,18,20,22,24,24,24,24,26,28,28,28,28,29,29,29,29,30,30,30,30,31,31,31,31,32,32,32,32,33,33,33,33,34,34,34,34,35,35,35,35,36,36,36,36,37,37,37,37,39,41,41,41,41,42,42,42,42,43,43,43,43,44,44,44,44,46,48,44,44,43,43,42,42,41,41,37,37,36,36,35,35,34,34,33,33,32,32,31,31,30,30,29,29,28,28,24,24,18,18,14,14,13,13,12,12,11,11,10,10,5,5,4,4,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,9,10,9,11,11,12,14,11,17,7,7,6,6,5,5,4,4,0,0,0,1,3,3,3,5,3,0,0,0,1,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,10,11,13,13,14,14,15,17,14,20,20,20,22,20,13,25,25,25,25,26,26,26,26,27,27,27,27,28,28,28,28,29,29,29,29,30,30,30,30,32,34,34,35,35,35,35,37,37,38,37,41,35,35,34,44,44,45,45,45,45,46,46,46,48,46,45,45,44,51,30,30,29,29,28,28,27,27,26,26,25,25,8,8,7,7,6,6,5,5,4,4,3,54,54,55,55,55,55,56,56,56,56,57,57,57,57,58,58,58,58,59,59,59,59,61,63,63,63,63,64,64,64,66,64,63,63,59,59,58,58,57,57,56,56,55,55,54,0,0,0,1,2,4,4,5,7,7,7,7,8,8,8,8,9,9,9,9,11,11,12,12,12,12,14,14,15,16,14,17,18,12,12,11,21,21,21,21,23,23,24,24,24,26,24,23,29,29,29,29,30,30,30,30,31,31,31,33,31,30,30,29,29,21,21,9,9,8,8,7,7,4,36,36,36,36,37,37,37,37,39,39,40,40,40,42,40,39,45,37,37,36,36,0,0,0,1,3,3,3,3,5,5,6,8,8,8,8,10,11,13,13,13,13,15,17,13,13,8,8,5,20,20,20,20,22,23,26,26,26,26,27,27,27,27,28,28,28,28,30,30,31,31,31,31,32,32,32,32,34,35,37,37,37,37,39,40,37,37,32,32,31,31,30,43,43,43,43,45,45,46,46,46,46,47,47,47,47,48,48,48,48,49,49,49,49,50,50,50,50,51,51,51,51,53,53,54,54,54,56,54,53,59,51,51,50,50,49,49,48,48,47,47,46,46,45,62,62,62,62,63,63,63,63,64,64,64,64,66,68,68,68,68,69,69,69,69,71,73,73,73,73,74,74,74,74,76,78,78,78,78,79,79,79,79,81,83,83,83,83,84,84,84,84,86,88,90,84,84,83,83,79,79,78,78,74,74,73,73,69,69,68,68,64,64,63,63,62,62,43,43,28,28,27,27,26,26,20,20,3,3,0,0,0,1,2,4,4,5,7,7,7,7,9,9,10,10,10,12,10,9,15,7,7,4,18,18,19,21,21,21,21,22,22,22,22,23,23,23,23,24,24,24,24,25,25,25,25,27,27,28,28,28,30,28,27,33,35,25,25,24,24,23,23,22,22,21,21,18,38,38,39,39,39,39,41,42,44,44,44,44,46,47,49,44,44,39,39,38,52,52,52,52,54,54,55,55,55,55,57,58,55,55,54,52,52,0,0,0,1,1,1,1,3,3,4,4,5,5,5,7,5,4,10,3,13,13,13,13,14,14,14,14,15,15,15,15,17,17,18,18,18,18,19,19,19,19,21,23,23,23,25,23,19,19,18,18,17,28,28,28,28,29,29,29,31,29,28,28,15,15,14,14,13,13,1,1,0,0,0,1,2,4,5,7,7,8,9,7,12,0,0,0,1,2,4,5,7,7,7,7,8,8,8,8,10,11,13,13,13,15,13,8,8,7,7,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,13,13,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,21,19,18,18,17,17,16,16,15,15,14,14,13,24,11,11,10,10,9,9,8,8,7,7,6,6,5,5,4,4,0,0,0,1,2,4,4,5,6,8,9,11,12,14,4,17,17,17,17,19,19,20,20,21,21,21,21,22,22,22,24,22,21,21,20,27,27,27,27,28,28,28,28,29,29,29,29,31,33,29,29,28,28,27,27,19,36,36,36,36,37,37,37,39,37,36,36,17,17,0,0,0,1,2,4,4,5,6,8,9,11,4,14,14,14,14,15,15,15,15,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,22,22,22,22,24,24,24,24,25,25,25,25,27,27,28,29,27,32,32,33,34,36,36,36,36,37,37,37,37,38,38,38,38,39,39,39,39,41,43,43,43,43,44,44,44,44,45,45,45,45,46,46,46,46,48,50,50,50,50,51,51,51,51,52,52,52,52,53,53,53,53,55,57,57,57,57,58,58,58,58,59,59,59,59,60,60,60,60,62,64,60,60,59,59,58,58,57,57,53,53,52,52,51,51,50,50,46,46,45,45,44,44,43,43,39,39,38,38,37,37,36,36,32,65,65,66,66,66,66,67,67,67,69,67,66,66,65,25,25,24,24,22,22,21,21,20,20,19,19,18,18,17,73,15,15,14,14,0,0,0,1,2,4,4,4,4,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,12,13,15,15,15,15,17,17,18,19,17,22,22,22,22,23,23,23,25,23,22,22,15,15,10,10,9,9,8,8,7,7,6,28,4,4,0,0,0,1,2,4,4,5,6,7,8,9,11,11,12,13,15,15,15,15,16,16,16,16,18,19,21,23,16,16,15,15,11,26,26,26,26,27,27,27,27,29,30,32,34,27,27,26,26,4,37,37,37,37,38,38,38,38,39,39,39,39,40,40,40,40,42,42,43,42,44,44,45,47,44,40,40,39,39,38,38,37,37,0,0,0,1,2,4,4,4,4,6,6,7,7,7,7,8,8,8,8,10,10,11,12,10,15,15,15,15,16,16,16,16,17,17,17,19,17,16,16,15,15,8,8,7,7,6,22,22,22,22,23,23,23,25,23,22,22,4,4,0,0,0,1,3,4,6,7,9,10,12,13,15,15,16,16,16,16,18,20,20,20,20,21,21,21,21,23,24,26,21,21,20,20,16,16,15,29,29,29,29,31,33,29,29,0,0,0,1,1,1,1,2,2,2,4,2,1,1,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,7,5,4,4,3,3,0,0,0,1,2,3,5,0,0,0,1,3,0,0,0,1,2,3,5,0,0,0,5,5,5,7,5,0,0,0,1,3,3,3,5,3,0,0,0,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,18,16,15,15,14,14,13,13,12,12,11,2,22,0,0,0,1,1,1,3,1,0,0,0,1,1,1,1,3,3,4,5,6,7,8,9,3,12,12,12,12,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,32,33,33,33,33,34,34,34,36,34,33,33,32,37,38,12,12,1,1,0,0,0,1,2,4,0,0,0,1,1,1,1,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,11,11,13,11,6,6,5,5,4,4,3,16,1,1,0,0,0,1,3,3,3,3,5,7,7,7,7,9,11,11,11,11,12,12,12,14,12,11,11,7,7,3,3,0,0,0,1,3,0,0,0,1,0,0,0,1,3,3,3,3,5,5,6,7,8,8,9,9,9,11,9,8,12,13,5,16,3,3,0,0,0,1,3,3,3,3,4,4,4,6,4,3,3,0,0,0,1,3,4,6,8,8,8,8,9,9,9,9,10,10,10,10,12,14,14,15,15,15,15,17,17,18,20,17,23,23,24,25,23,15,15,14,28,10,10,9,9,8,8,0,0,0,1,3,3,3,3,4,4,4,6,4,3,3,0,0,0,1,3,4,0,0,0,1,3,3,3,3,5,5,6,6,6,6,8,6,6,5,11,3,3,0,0,0,1,3,3,3,5,3,0,0,0,1,2,4,4,5,5,5,5,7,8,5,5,4,11,11,11,11,13,14,16,11,11,0,0,0,1,3,3,3,5,3,0,0,0,1,2,4,0,0,0,1,2,4,4,5,5,6,6,6,6,7,7,7,7,9,11,7,7,6,6,5,4,15,15,15,15,16,16,16,16,17,17,17,19,17,16,16,15,15,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,7,5,4,4,3,3,0,0,0,1,1,1,3,1,0,0,0,1,1,2,3,1,6,0,0,0,1,1,2,3,1,6,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,4,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,4,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,8,6,5,5,4,4,0,0,0,1,1,2,2,2,2,4,4,5,4,6,6,7,6,10,10,10,10,12,12,13,13,13,13,15,15,16,15,17,17,18,20,17,13,13,12,24,26,10,10,2,2,1,27,27,28,28,29,28,30,30,31,30,34,27,35,36,0,0,0,1,1,2,3,5,5,5,5,7,9,11,11,11,11,13,14,16,16,16,16,17,17,17,17,19,20,22,24,25,17,17,16,16,11,11,5,5,1,28,29,30,31,32,33,34,36,0,0,0,1,3,0,0,0,1,1,1,3,1,0,0,0,1,1,1,3,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,7,7,8,8,8,8,9,9,9,9,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,17,15,14,14,13,13,12,12,11,11,9,9,8,8,7,20,3,3,2,2,1,1,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,13,14,16,17,19,19,19,19,20,20,20,22,20,19,19,11,11,10,10,9,9,8,8,7,7,6,6,5,5,4,4,3,3,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,7,8,3,3,2,2,1,1,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,7,5,4,4,3,3,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,7,5,4,4,3,3,0,0,0,1,1,1,3,1,0,0,0,1,3,0,0,0,1,3,0,0,0,1,3,3,3,5,3,0,0,0,1,3,0,0,0,1,2,4,6,6,6,6,7,7,7,7,8,8,8,8,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,16,17,14,14,13,13,12,12,11,11,10,8,8,7,7,6,6,0,0,0,1,0,0,0,1,1,1,1,2,2,2,2,4,5,7,9,2,2,1,1,0,0,0,1,3,3,3,3,4,4,4,4,6,6,7,9,9,9,9,10,10,10,12,10,9,9,6,15,4,4,3,3,0,0,0,1,1,2,3,5,5,5,5,6,6,6,8,6,5,5,1,11,11,11,11,12,12,12,12,14,14,15,17,14,20,20,20,20,22,22,23,25,22,28,28,28,28,30,30,31,30,33,33,33,33,35,37,37,37,37,38,38,38,38,39,39,39,39,40,40,40,40,41,41,41,41,43,45,47,48,50,52,52,53,54,52,41,41,40,40,39,39,38,38,37,37,33,33,28,28,20,20,12,12,11,11,0]
const contents={"0":[316,317,318,319,320],"1":[321,317,322,318,323,318,324,325,318,326,320],"2":[327,328,329,318,330,318,324,331,318,326,320],"3":[332,333,318,334,320],"4":[335,336,337,338,318,339,340,341,342,318,343,344,318,345,318,339,346,347,320],"5":[348,349,350,318,351,352,353,320],"6":[354,355,320],"7":[356,357,318,358,320],"8":[359,360,361,318,362,318,363,318,364,365,318,366,320],"9":[367,360,318,368,369,318,361,318,370,371,318,364,372,318,373,320],"10":[374,333,318,375,376,318,377,378,318,379,318,380,381,382,318,383,384,318,385,318,386,353,318,326,320],"11":[387,333,318,375,318,388,389,390,391,318,392,353,318,326,320],"12":[393,317,322,394,395,318,396,397,318,398,397,318,399,320],"13":[400,333,318,401,320],"14":[402,333,318,403,320],"15":[404,405,406,318,407,408,409,410,318,411,412,318,413,353,318,414,415,416,417,318,418,353,318,419,420,416,417,318,421,353,318,422,423,416,417,318,424,353,318,425,426,427,318,428,320],"16":[429,430,431,318,432,318,433,318,434,318,435,318,326,320],"17":[436,437,438,439,440,441,318,442,439,353,318,443,320],"18":[444,405,318,445,320],"19":[446,349,318,447,320],"20":[448,449,318,450,320],"21":[451,449,452,318,453,454,318,455,456,318,457,320],"22":[458,349,318,459,460,461,318,462,463,318,464,463,318,397,353,318,465,318,388,466,467,318,468,469,318,470,471,472,318,473,474,475,476,318,468,469,318,477,318,478,479,353,318,480,320],"23":[481,482,320],"24":[483,360,318,484,485,318,452,318,486,320],"25":[487,333,318,488,376,318,489,490,491,318,492,493,494,495,318,496,469,353,318,326,320],"26":[497,333,318,498,499,500,501,318,326,320],"27":[502,503,504,318,505,353,318,317,318,506,507,508,509,510,511,512,513,318,514,320],"28":[515,503,516,318,517,353,318,333,318,518,519,318,520,318,521,522,523,318,524,318,525,523,318,526,469,318,527,353,318,528,529,530,531,318,532,490,533,318,534,535,318,536,523,469,318,537,538,539,540,318,541,542,318,543,318,544,545,318,546,468,318,547,548,549,318,550,468,318,551,318,552,318,553,468,318,554,555,556,557,558,559,560,318,561,353,318,326,320],"29":[562,503,563,318,564,353,318,333,318,565,318,566,567,568,318,569,570,571,475,572,318,573,353,318,326,320],"30":[574,503,575,318,576,353,318,333,318,368,577,318,361,318,531,578,579,318,580,490,581,582,583,584,585,586,587,588,589,318,590,591,353,320],"31":[592,503,593,318,594,353,318,333,318,368,595,318,361,318,531,578,579,318,580,490,581,596,597,585,586,587,588,598,318,590,591,353,320],"32":[599,600,601,318,602,603,318,604,318,605,606,318,607,318,608,609,610,611,612,318,520,613,318,614,615,616,318,617,318,618,318,619,620,621,622,623,318,624,625,469,318,626,627,628,318,629,630,318,631,632,318,633,634,635,636,318,634,637,318,638,318,639,469,318,640,318,641,642,469,318,643,318,644,645,318,646,493,647,648,318,649,469,318,641,650,523,318,651,469,318,527,353,318,652,318,653,527,318,654,318,655,656,318,657,572,318,658,353,318,326,320],"33":[659,660,661,318,662,318,663,664,318,665,353,318,666,318,667,668,669,670,671,318,672,673,318,674,469,318,675,353,318,676,318,336,340,677,678,469,353,318,679,490,680,318,681,468,318,682,683,684,318,534,685,686,318,687,688,689,690,318,691,353,318,692,320],"34":[693,694,534,695,696,318,697,685,698,475,699,353,318,375,318,503,700,346,701,318,702,703,318,704,705,318,706,572,353,318,707,318,326,320],"35":[708,317,318,709,320],"36":[710,349,318,528,318,388,711,651,469,353,318,326,320],"37":[712,333,318,368,713,318,714,318,528,318,388,715,318,716,717,318,468,469,318,718,719,318,720,721,722,475,717,353,318,326,320],"38":[723,724,320],"39":[725,317,322,726,318,727,318,324,728,318,326,320],"40":[729,349,318,368,730,318,731,320],"41":[732,449,318,733,734,735,318,736,523,318,737,318,738,469,318,347,353,318,739,318,336,740,741,742,743,744,745,746,747,318,748,475,749,318,748,469,340,750,318,751,346,347,320],"42":[752,753,318,754,755,756,757,318,758,318,527,346,347,320],"43":[759,349,714,318,388,760,461,353,318,399,320],"44":[761,333,318,528,318,388,762,353,318,326,320],"45":[763,349,452,318,764,765,318,766,318,767,768,769,475,770,353,318,326,320],"46":[771,349,452,318,772,318,773,774,353,318,775,320],"47":[776,777,318,503,778,318,591,318,779,353,318,333,318,780,781,782,783,782,784,785,318,786,320],"48":[787,333,318,788,318,789,790,468,318,791,318,792,353,318,326,320],"49":[793,360,318,794,320],"50":[795,796,797,798,318,799,320],"51":[800,317,322,318,801,320],"52":[802,317,322,318,803,320],"53":[804,796,797,318,805,320],"54":[806,360,361,318,807,808,809,810,811,475,699,353,318,812,320],"55":[813,349,318,814,320],"56":[815,317,318,816,320],"57":[817,333,318,368,818,318,465,318,819,820,318,821,822,475,823,824,318,822,469,353,318,825,320],"58":[826,349,361,827,318,828,320],"59":[829,830,397,318,831,397,318,832,318,833,397,318,834,320],"60":[835,830,397,318,831,397,318,388,836,837,838,475,461,353,318,399,320],"61":[839,830,397,318,831,397,318,388,840,841,475,461,353,318,399,320],"62":[842,843,320],"63":[844,845,846,318,847,846,318,848,846,318,849,846,318,850,846,318,851,846,318,852,320],"64":[853,830,397,318,831,846,318,854,846,318,852,320],"65":[855,856,318,857,320],"66":[858,859,860,861,397,353,318,399,320],"67":[862,830,397,318,863,320],"68":[864,865,397,318,866,320],"69":[867,754,846,318,868,846,318,852,320],"70":[869,870,846,318,484,846,318,852,320],"71":[871,872,320],"72":[873,830,397,318,831,397,318,388,874,461,353,318,399,320],"73":[875,876,877,318,878,879,318,880,353,318,852,320],"74":[881,882,320],"75":[883,856,318,884,397,318,885,397,318,399,320],"76":[886,830,846,318,845,846,318,854,846,318,852,320],"77":[887,876,888,318,852,320],"78":[889,856,318,884,397,318,890,397,318,399,320],"79":[891,830,397,318,831,397,318,892,318,893,894,346,397,318,388,895,461,353,318,399,320],"80":[896,830,397,318,831,397,318,819,897,468,318,898,318,899,461,353,318,399,320],"81":[900,901,320],"82":[902,903,846,318,904,846,318,852,320],"83":[905,830,397,318,832,318,906,397,318,767,907,461,318,908,318,909,461,353,318,399,320],"84":[910,830,397,318,911,318,912,397,318,913,397,318,767,897,468,318,895,461,318,914,461,318,915,461,353,318,399,320],"85":[916,830,397,318,831,397,318,859,917,861,397,353,318,399,320],"86":[918,349,361,318,362,318,919,320],"87":[920,830,397,318,921,318,922,320],"88":[923,830,397,318,924,397,318,925,397,318,926,927,318,928,397,318,929,318,930,320],"89":[931,830,397,318,932,397,318,933,318,934,397,318,935,318,936,320],"90":[937,484,938,318,852,320],"91":[939,830,397,318,831,397,318,388,940,461,353,318,399,320],"92":[941,876,942,318,852,320],"93":[943,944,846,318,847,846,318,848,846,318,852,320],"94":[945,946,320],"95":[947,503,846,318,948,846,318,852,320],"96":[949,944,846,318,847,846,318,852,320],"97":[950,951,320],"98":[952,953,397,318,954,397,318,955,397,318,856,318,956,320],"99":[957,830,397,318,932,397,318,933,318,958,397,318,935,318,936,320],"100":[959,948,397,318,856,318,960,320],"101":[961,962,397,318,963,320],"102":[964,830,397,318,831,397,318,388,965,461,353,318,399,320],"103":[966,876,967,318,852,320],"104":[968,830,397,318,831,397,318,969,318,970,320],"105":[971,856,318,972,320],"106":[973,974,846,318,975,846,318,852,320],"107":[976,830,397,318,854,846,318,975,846,318,852,320],"108":[977,978,320],"109":[979,830,397,318,831,397,318,911,318,833,397,318,767,980,468,318,397,353,318,399,320],"110":[981,484,982,318,852,320],"111":[983,984,985,318,852,320],"112":[986,987,320],"113":[988,830,397,318,831,397,318,388,989,461,353,318,399,320],"114":[990,865,397,318,991,846,318,992,846,318,852,320],"115":[993,484,846,318,754,846,318,852,320],"116":[994,830,397,318,831,397,318,995,397,318,996,397,318,997,397,318,399,320],"117":[998,349,318,368,999,318,797,318,1000,320],"118":[1001,333,318,1002,320],"119":[1003,449,318,1004,320],"120":[1005,1006,1007,779,353,318,1008,1009,1010,1011,318,1012,320],"121":[1013,317,322,318,1014,320],"122":[1015,317,322,318,1016,320],"123":[1017,1018,1019,318,534,535,318,1020,685,1021,475,699,318,1022,1023,469,318,1024,1025,1026,1027,318,1028,1029,318,1030,523,318,1031,523,318,1032,318,1033,1034,1035,637,318,1036,523,318,1037,469,318,1038,353,318,1039,1040,318,1041,1042,1043,1044,1045,1046,435,318,336,1047,340,1048,346,347,318,1049,318,789,1050,1051,318,1052,469,353,318,1053,318,1054,318,336,1055,318,1056,340,1057,1058,1059,318,1060,637,469,318,1061,346,347,320],"124":[1062,349,714,318,528,318,388,1063,318,1064,318,762,353,318,326,320],"125":[1065,333,797,318,831,397,318,1066,397,318,1067,397,318,1068,318,1069,320],"126":[1070,333,797,318,831,397,318,1066,397,318,1067,397,318,1071,318,1069,320],"127":[1072,333,797,318,1073,1074,1075,1076,318,1077,320],"128":[1078,1079,320],"129":[1080,796,1081,318,1082,320],"130":[1083,1084,320],"131":[1085,317,322,318,1086,318,324,1087,318,326,320],"132":[1088,320],"133":[1089,796,797,318,788,318,1090,1091,468,318,1092,318,792,353,318,326,320],"134":[1093,796,318,1094,320],"135":[1095,796,318,1096,318,1097,320],"136":[1098,796,318,1099,320],"137":[1100,1101,320],"138":[1102,430,318,1103,318,1104,1105,439,318,1106,1107,1108,1109,318,1110,469,353,318,1111,347,318,1112,320],"139":[1113,328,329,318,1114,318,324,1115,318,326,320],"140":[1116,1117,318,1118,1119,318,1120,1121,1122,318,1123,469,318,1124,353,318,333,797,1125,318,1126,320],"141":[1127,1117,318,1118,1119,318,1120,1121,1128,318,1129,469,318,1130,353,318,333,797,1125,318,1131,320],"142":[1132,333,318,1133,320],"143":[1134,1135,1136,318,1137,320],"144":[1138,333,318,1139,1140,318,833,1141,318,1142,318,1143,320],"145":[1144,1145,1146,318,1147,320],"146":[1148,349,318,368,1149,318,361,318,370,318,1150,1151,318,1152,318,1153,353,318,1154,320],"147":[1155,349,350,318,1156,318,1157,318,767,1158,353,320],"148":[1159,1160,1161,1162,1163,1164,318,1165,353,318,336,1166,318,1167,1168,318,1169,340,346,347,318,1170,1171,1172,1173,1174,318,1175,1176,318,1177,1178,1179,1180,637,318,1181,469,318,1182,353,320],"149":[1183,349,452,318,1184,320],"150":[1185,796,797,1186,318,1187,347,318,1188,320],"151":[1189,503,1190,318,317,406,318,1191,1192,318,1118,1193,318,326,320],"152":[1194,349,714,318,528,318,388,1195,468,318,762,353,318,326,320],"153":[1196,349,361,318,364,1197,318,1125,827,318,1198,318,1199,318,1200,320],"154":[1201,333,361,318,1202,320],"155":[1203,333,797,1204,318,1205,318,1206,1207,353,318,326,320],"156":[1208,360,797,1204,318,484,1209,318,1210,1211,520,318,521,1212,1213,635,1214,469,318,527,346,347,320],"157":[1215,349,318,1216,320],"158":[1217,317,318,1218,320],"159":[1219,333,318,368,1220,318,375,1221,1222,318,1223,1224,1225,318,1226,469,318,1227,1228,1229,1230,1231,385,318,386,353,318,326,320],"160":[1232,1233,320],"161":[1234,333,318,368,1235,318,714,318,364,1236,318,1237,318,1238,519,1239,318,520,1240,318,1241,1242,318,1243,1244,318,1245,1246,635,1247,318,1245,637,469,318,527,353,318,1248,519,1239,1249,318,1250,318,1251,1252,318,1253,1254,318,721,469,318,527,353,318,1255,318,1256,320],"162":[1257,796,797,1186,318,366,320],"163":[1258,349,318,368,1259,318,361,318,1150,1260,318,1261,318,1153,353,318,1262,320],"164":[1263,317,406,318,1264,318,704,1265,1266,318,1267,572,318,1268,353,320],"165":[1269,360,361,318,1270,320],"166":[1271,360,361,318,370,318,1272,320],"167":[1273,360,318,1274,318,1275,318,364,1276,318,1277,353,318,1278,318,1279,318,1280,318,1281,320],"168":[1282,753,318,754,1120,1283,475,1284,756,1285,1286,1286,318,1287,318,1288,1289,318,1290,637,318,1291,469,318,1120,1292,318,757,613,318,1293,1294,1295,1296,318,639,469,318,1297,318,641,1298,318,1299,469,318,527,353,320],"169":[1300,1301,320],"170":[1302,333,318,368,1303,318,831,1304,318,1305,320],"171":[1306,1307,320],"172":[1308,333,318,1309,1310,318,1311,318,1312,320],"173":[1313,333,318,1205,318,1314,613,318,1315,1316,1317,318,523,637,318,1318,318,822,469,318,1319,353,318,326,320],"174":[1320,333,797,318,1321,1322,318,1323,353,318,1324,320],"175":[1325,333,797,318,1326,1322,318,1327,353,318,1324,320],"176":[1328,317,322,318,1329,318,324,1330,318,326,320],"177":[1331,360,361,318,807,808,809,810,811,475,699,353,318,1332,320],"178":[1333,349,797,318,528,318,388,1334,318,1335,353,318,326,320],"179":[1336,349,318,1337,318,1338,320],"180":[1339,1340,320],"181":[1341,349,797,318,1342,318,766,318,1343,1344,318,352,353,320],"182":[1345,349,318,1346,519,318,520,318,521,1347,318,1348,1349,318,1350,1351,318,1352,318,1353,637,318,1354,469,318,527,353,318,1355,519,318,520,613,318,521,1356,1357,318,1358,1359,1317,635,1360,469,318,1361,318,641,1362,469,318,641,1363,318,1364,469,318,527,353,318,1365,1366,1367,318,1368,1369,1370,318,1371,318,1372,318,1373,353,318,1374,318,1375,1376,318,1377,353,318,465,1378,318,1379,318,1380,318,1375,1381,318,1382,353,318,1383,318,1384,1379,318,1385,318,1386,490,1387,318,1388,1389,318,1390,469,318,1391,318,479,353,318,1379,318,825,320],"183":[1392,1393,318,1394,320],"184":[1395,1396,318,1397,1398,318,1399,1400,1401,1402,1403,318,1404,1405,318,1406,469,318,1407,1408,318,1406,469,318,1409,1410,1411,318,1412,469,318,1413,1414,1411,318,1415,469,318,1416,1417,1411,318,1418,469,318,1419,1420,1411,318,1412,469,318,1421,615,318,1422,353,318,1423,318,1424,1425,318,1426,1427,1428,318,1429,353,318,1430,1431,318,1432,320],"185":[1433,430,318,368,1434,318,361,318,1435,1436,318,1437,320],"186":[1438,1439,318,1440,320],"187":[1441,503,504,318,1442,353,318,317,318,506,507,1443,1444,1445,511,318,1446,320],"188":[1447,430,318,368,1448,318,322,318,1435,1436,318,1449,320],"189":[1450,405,318,1451,320],"190":[1452,449,318,754,1453,1454,318,613,318,1455,318,1293,493,1456,1457,1458,318,1459,1460,318,1358,635,1461,1462,318,1463,1358,637,469,318,1464,318,1465,756,1453,1466,318,613,318,1467,318,1293,1468,1457,1469,318,1470,1471,318,1459,1472,318,1358,635,1473,1462,318,1463,1358,1474,637,469,318,1464,318,1465,1475,1476,440,1477,346,1478,320],"191":[1479,317,318,368,1480,318,361,318,1481,1482,318,833,1141,318,1483,1484,1485,318,1486,1487,318,1488,572,318,1489,353,318,1490,1491,318,1492,318,1493,320],"192":[1494,333,318,1495,320],"193":[1496,333,318,1497,318,1498,318,326,320],"194":[1499,449,318,1500,320],"195":[1501,333,318,1500,320],"196":[1502,333,318,1503,320],"197":[1504,333,318,1505,318,1506,318,326,320],"198":[1507,449,318,1508,320],"199":[1509,333,318,1510,318,1511,318,326,320],"200":[1512,333,318,1513,320],"201":[1514,333,318,1515,320],"202":[1516,333,318,1517,320],"203":[1518,333,318,1519,320],"204":[1520,317,318,1521,320],"205":[1522,336,1523,318,1524,1525,318,527,340,1526,346,347,320],"206":[1527,484,1528,1529,318,1465,353,318,349,797,318,528,318,388,1530,318,1335,353,318,326,320],"207":[1531,349,452,318,1532,320],"208":[1533,333,318,850,1534,318,847,1535,318,848,1536,318,443,320],"209":[1537,317,322,318,1538,318,324,1539,318,326,320],"210":[1540,333,318,1541,1542,318,1543,1544,1545,1546,1547,1548,1549,1550,1551,1552,1553,318,1554,320],"211":[1555,333,318,1556,1557,318,1558,318,1559,318,1560,1561,1562,1563,318,1564,318,1565,318,1566,318,1567,318,1568,318,326,320],"212":[1569,1570,1571,1572,1573,318,1574,318,1575,318,1576,318,1577,1578,1579,318,1580,320],"213":[1581,1570,1571,1572,1573,318,1582,318,1583,318,1584,1585,318,1586,318,1587,353,318,326,320],"214":[1588,1570,1571,1572,1573,318,1582,1574,318,1589,318,1580,320],"215":[1590,1570,1571,1572,1573,318,1591,1574,318,1592,318,1580,320],"216":[1593,1570,1571,1572,1573,318,528,1594,318,1595,1596,1597,318,1598,1599,318,527,353,318,1600,318,1601,318,1602,318,1603,1604,1605,318,1606,1607,318,326,320],"217":[1608,1570,1571,1572,1573,318,1574,318,1609,1610,1611,318,1580,320],"218":[1612,1570,1571,1572,1573,318,1582,1574,318,1613,318,1580,320],"219":[1614,1570,1571,1572,1573,318,1582,318,528,1615,1605,1616,318,1606,1607,318,326,320],"220":[1617,1570,1571,1572,1573,318,1618,320],"221":[1619,1570,1571,1572,1573,318,1620,320],"222":[1621,1570,1571,1572,1573,318,1622,320],"223":[1623,1570,1571,1572,1573,318,528,1624,1610,1625,1610,1626,1605,1616,318,1606,1607,318,326,320],"224":[1627,1570,1571,1572,1573,318,1628,320],"225":[1629,1570,1571,1572,1573,318,1630,320],"226":[1631,1570,1571,1572,1573,318,1632,320],"227":[1633,1570,1571,1572,1573,318,1600,1574,318,1634,318,1635,318,1636,318,443,320],"228":[1637,1570,1571,1572,1573,318,1600,1574,318,1638,318,1639,318,1640,318,1580,320],"229":[1641,1570,1571,1572,1573,318,1642,1574,318,1643,320],"230":[1644,1570,1571,1572,1573,318,1574,318,1645,318,1595,1646,346,1647,318,1648,353,318,1580,320],"231":[1649,1570,1571,1572,1573,318,1591,1574,318,1592,1650,318,1580,320],"232":[1651,1570,1571,1572,1573,318,1574,318,1624,1652,318,1580,320],"233":[1653,1570,1571,1572,1573,318,1582,318,528,1654,1605,1594,318,1606,1607,318,326,320],"234":[1655,1570,1571,1572,1573,318,1642,1574,318,1656,320],"235":[1657,1570,1571,1572,1573,318,528,1624,1610,1658,1605,1616,318,1606,1607,318,326,320],"236":[1659,1570,1571,1572,1573,318,1574,318,1595,1660,318,1661,353,318,1624,1662,318,1580,320],"237":[1663,1570,1572,1573,318,528,318,1664,1665,318,1666,318,561,353,318,1667,1668,318,1669,1670,318,1671,1672,318,326,320],"238":[1673,1570,1572,1573,318,528,318,1664,1665,318,1666,318,561,353,318,1674,1675,1676,318,1677,1678,318,1679,1680,353,318,326,320],"239":[1681,1570,1571,1572,1573,1682,318,1574,318,1601,318,1602,318,1683,1684,1685,1686,318,1580,320],"240":[1687,1570,1571,1572,1573,1682,318,528,1624,1688,1610,1626,1605,1616,318,1606,1607,318,326,320],"241":[1689,1570,1571,1572,1573,1682,318,528,1624,1610,1690,1605,1616,318,1606,1607,318,326,320],"242":[1691,1570,1571,1572,1573,1682,318,1692,1693,318,1694,809,318,1695,1696,318,1697,318,1698,1699,318,1700,1701,318,1702,469,318,347,353,318,528,1703,318,1704,318,1705,1706,1707,1708,1709,1686,1605,1594,318,1606,1607,318,326,320],"243":[1710,796,350,318,796,350,318,528,318,351,1711,318,1712,353,318,326,320],"244":[1713,796,797,318,1714,1715,318,1716,846,318,1717,1718,1719,1720,1721,318,1722,318,1723,318,1724,318,1725,318,1726,318,1727,318,1728,1729,1730,1731,1732,1733,1734,1735,1736,1737,318,1738,318,1739,1734,1740,1737,318,1738,318,852,320],"245":[1741,796,797,318,1742,1743,1744,1745,318,859,1746,1747,1748,318,1749,353,318,1750,320],"246":[1751,796,318,1752,318,1753,320],"247":[1754,796,318,1755,520,1756,1757,640,1758,318,1759,1760,318,1761,1762,1763,318,523,637,318,1764,318,1765,469,318,1766,1767,1768,1769,1770,1771,318,561,318,1772,1773,318,1774,1775,637,318,1776,469,318,1777,1778,1779,318,1780,469,318,527,353,318,1781,490,1782,587,1783,1784,318,1785,318,1786,1787,318,591,353,320],"248":[1788,796,350,318,1789,519,318,1790,1791,1792,318,1793,1794,318,1795,1796,1797,635,1254,469,318,1798,318,1799,1800,318,1801,469,318,1802,1803,1804,318,1805,353,318,528,1806,318,1807,1808,318,561,353,318,326,320],"249":[1809,796,318,1810,318,1811,1693,318,1812,318,1813,1291,318,1814,318,1815,318,527,353,318,465,318,1816,1817,353,318,662,1818,1819,318,1816,1820,1768,318,1821,1822,318,1823,318,1824,1825,353,318,1826,318,1827,1828,1829,1830,1831,1832,1833,318,1834,1835,318,1836,469,318,1837,353,318,1838,1839,1840,318,1841,318,1842,1843,318,1844,318,1845,1846,318,1847,318,1848,1849,318,1850,318,1851,1852,318,1853,318,1854,318,825,320],"250":[1855,796,797,318,1856,519,318,520,318,521,1857,318,1858,469,318,527,353,318,1859,1693,318,520,1860,1861,1862,1863,318,1864,1865,318,1364,469,318,1866,318,527,353,318,1867,1868,318,1869,1291,318,1870,318,1869,1291,318,347,353,318,1871,318,1872,1873,318,1874,1875,353,320],"251":[1876,1877,318,1878,1879,696,318,1880,469,318,1881,353,318,1882,1883,1884,318,789,791,1885,318,1886,318,1887,318,1888,353,318,1889,1890,318,1891,320],"252":[1892,796,797,318,1893,846,318,1894,1091,461,353,318,399,320],"253":[1895,796,350,318,1896,397,318,1897,1898,318,1899,846,318,1900,318,1901,320],"254":[1902,796,797,318,528,1903,1904,1905,1906,1907,1908,1909,318,1910,490,1911,1912,1913,1914,1915,318,561,353,318,326,320],"255":[1916,796,797,318,1917,1918,461,318,1919,463,318,1920,463,318,397,353,318,1921,318,1922,1923,1924,1925,318,1291,469,318,1926,1927,1928,318,1929,318,527,353,318,1930,1931,318,326,320],"256":[1932,796,350,318,1933,1934,463,318,1935,463,318,397,353,318,528,1156,318,377,1936,1937,1938,1939,1940,318,1941,1942,318,1943,1944,1945,469,318,1946,1947,1948,318,1949,1950,1951,1952,318,1953,318,1954,1955,1951,1956,318,1957,318,1958,1959,1951,1960,318,1961,318,1954,1955,1962,1963,318,1964,318,1965,475,1966,1967,318,1968,469,353,318,326,320],"257":[1969,796,350,318,528,318,351,1970,1971,1972,1973,318,1974,468,318,1975,318,1976,1977,523,469,318,1798,1978,318,1598,353,318,326,320],"258":[1979,796,1081,318,1980,1981,1982,1983,1984,1985,318,1986,1987,523,318,1988,1989,318,1990,1290,318,1991,318,1992,469,318,1993,1994,318,1995,1291,318,1996,318,1997,353,318,1998,1999,2000,2001,318,859,2002,1747,2003,318,1749,353,320],"259":[2004,796,797,318,528,318,2005,2006,2007,318,2008,2009,468,469,318,2010,2011,2012,318,2013,353,318,707,702,318,326,320],"260":[2014,333,318,849,1146,318,850,1146,318,944,1146,318,847,1146,318,848,2015,318,2016,318,2017,2018,318,2019,2020,318,2021,353,318,1557,318,2022,318,443,320],"261":[2023,2024,2025,318,2026,320],"262":[2027,2028,318,2029,1707,1708,318,2030,320],"263":[2031,2032,2033,2034,318,2035,320],"264":[2036,333,318,2037,320],"265":[2038,2028,2033,2034,318,2039,320],"266":[2040,318,318,318,318,2041,318,2042,320],"267":[2043,2044,318,2045,318,2046,320],"268":[2047,318,1066,2048,2049,2050,2051,2052,2053,2054,2055,475,2056,2057,2058,2059,2060,318,2061,469,353,318,2062,320],"269":[2063,2064,318,2065,320],"270":[2066,1337,318,2067,2068,2069,2070,2071,475,2072,353,318,2073,318,2074,2075,2076,2077,2078,2079,2080,2081,2082,2083,2084,2085,2086,2087,2088,2089,2090,2091,2092,2093,2094,318,2095,346,2096,320],"271":[2097,333,2098,318,1324,320],"272":[2099,528,318,2100,2101,2102,2103,318,2104,468,318,2105,318,2106,353,318,326,320],"273":[2107,333,318,2108,318,2109,318,2110,318,1566,318,2111,2112,318,326,320],"274":[2113,333,318,2114,320],"275":[2115,2116,320],"276":[2117,333,318,528,318,2118,2119,651,2120,1857,318,1858,475,699,353,318,326,320],"277":[2121,333,318,2122,2123,318,2124,320],"278":[2125,333,318,368,2126,318,329,318,528,2127,2128,318,2129,318,767,2130,318,2131,1364,318,468,469,318,2132,2133,1245,353,318,326,320],"279":[2134,333,318,2122,2123,318,2135,320],"280":[2136,333,318,2137,2138,320],"281":[2139,333,318,488,318,2140,2141,318,2142,353,318,326,320],"282":[2143,333,318,2144,318,2145,320],"283":[2146,333,797,318,2147,2148,318,2149,439,353,318,2150,318,2151,2152,318,2153,320],"284":[2154,333,318,2155,318,2156,320],"285":[2157,333,797,318,2158,320],"286":[2159,333,797,318,2147,2160,2161,2162,318,2163,318,439,469,353,318,2164,2122,2165,318,2166,320],"287":[2167,333,318,2164,2122,2165,318,2168,320],"288":[2169,2170,318,2171,320],"289":[2172,2173,2174,2175,353,318,443,320],"290":[2176,2173,2177,2175,353,318,443,320],"291":[2178,830,397,318,2179,2180,2181,318,2182,397,318,2183,320],"292":[2184,830,397,318,2179,2180,2181,318,2182,397,318,2185,320],"293":[2186,830,397,318,2179,2180,2181,318,2187,320],"294":[2188,2147,2189,318,1106,2190,2191,461,469,318,2192,318,2193,2194,318,1033,2195,1035,2196,318,2197,637,469,318,2198,318,846,2199,1106,2200,2191,461,469,318,846,346,397,320],"295":[2201,2202,2203,485,318,2204,318,1785,318,2205,318,2206,318,2207,2208,318,2209,586,318,2210,591,318,2211,318,2212,2213,353,318,2214,2215,2216,2217,2218,2219,2220,318,2221,320],"296":[2222,333,318,2223,320],"297":[2224,2225,318,2226,320],"298":[2227,2228,318,2229,320],"299":[2230,2231,320],"300":[2232,2233,320],"301":[2234,528,2235,2236,318,2237,318,767,2238,539,318,2239,2240,2241,2242,2243,318,561,353,318,326,320],"302":[2244,333,318,2245,2246,2247,2248,2249,2250,2251,2252,465,318,2253,2254,318,2255,2256,318,2257,2258,318,2259,320],"303":[2260,2261,2262,2263,318,2264,318,2265,2266,353,320],"304":[2267,333,318,2268,2269,2270,318,2271,320],"305":[2272,333,318,2273,2274,2275,318,2276,320],"306":[2277,2278,318,2279,320],"307":[2280,333,318,2281,320],"308":[2282,333,318,2283,320],"309":[2284,333,318,2285,318,2286,320],"310":[2287,333,318,2288,320],"311":[2289,503,2290,318,333,318,2150,2291,2292,318,704,2293,2294,2295,2296,318,2297,1291,353,320],"312":[2298,2299,320],"313":[2300,2301,2302,318,2303,2304,318,2305,318,2306,320],"314":[2307,333,318,2308,2309,318,2310,2311,318,2312,2313,318,591,353,318,326,320],"315":[2314,2315,1918,461,318,2316,2317,318,2318,353,318,2301,2319,318,1595,2320,318,779,353,318,2321,318,2322,2320,318,779,353,318,2323,318,2324,2325,318,1556,318,2326,318,2327,2328,2329,2330,1714,318,2331,318,2332,318,2333,779,318,1568,318,2334,2335,2336,353,320]}
main()