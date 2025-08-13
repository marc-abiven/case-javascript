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
    return dbg_backtrace(e.stack)
   }
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
                          const _=scan(a,is_atom)
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
                               const njs=_
                               {
                                const _=dec(njs)
                                {
                                 let index=_
                                 {
                                  if(gte(index,map.source.length))
                                  {
                                   continue
                                  }
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
                    }
                   }
                  }
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
function dbg_origin_cs(x,y)
{
 if(is_undef(x))
 {
  const _=new Error("origin-cs")
  {
   const e=_
   {
    return dbg_origin_cs(e.stack)
   }
  }
 }
 check(is_str,x)
 const _=(typeof(dbg_source_map)==="function")?dbg_source_map():dbg_source_map
 {
  const map=_
  {
   const _=dbg_callstack(x)
   {
    const stack=_
    {
     const _=front(stack)
     {
      const frame=_
      {
       const _=get(map.files,frame.path)
       {
        const file=_
        {
         const _=(typeof(frame.ncs)==="function")?frame.ncs():frame.ncs
         {
          const line=_
          {
           return dbg_origin(file,line)
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function dbg_origin_js(x)
{
 if(is_undef(x))
 {
  const _=new Error("origin-js")
  {
   const e=_
   {
    return dbg_origin_js(e.stack)
   }
  }
 }
 check(is_str,x)
 const _=(typeof(dbg_source_map)==="function")?dbg_source_map():dbg_source_map
 {
  const map=_
  {
   const _=dbg_callstack(x)
   {
    const stack=_
    {
     const _=front(stack)
     {
      const frame=_
      {
       const _=(typeof(frame.njs)==="function")?frame.njs():frame.njs
       {
        const line=_
        {
         return dbg_origin(map.source,line,"js")
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
 {
  return dbg_origin(source,line,"",depth)
 }
 check(is_str,key)
 if(is_undef(depth))
 {
  return dbg_origin(source,line,key,15)
 }
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
                        {
                         check(is_str,code)
                        }
                        else
                        {
                         code=get(code,key)
                         check(is_str,code)
                        }
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
                       for(const v of (typeof(a)==="function")?a():a)
                       {
                        if(is_empty(v.code))
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
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
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
         {
          push(paths,path)
         }
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
                    {
                     push(lines,s)
                    }
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
            {
             push(source,null)
            }
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
                {
                 continue
                }
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
                             {
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
function dbg_source()
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
 const _=(typeof(get_source)==="function")?get_source():get_source
 {
  const r=_
  {
   const _=trim_r(r)
   {
    const r=_
    {
     const _=split(r)
     {
      const r=_
      {
       const _=back(r)
       {
        const main=_
        {
         pop(r,5)
         for(let i=0;i<(4);i++)
         {
          push(r,"")
         }
         push(r,main)
         const _=join(r)
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
 const _=split(x,":")
 {
  const a=_
  {
   if(is_single(a))
   {
    return false
   }
   for(const v of (typeof(a)==="function")?a():a)
   {
    if(is_identifier(v))
    {
     continue
    }
    return false
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
 check(is_vec,x)
 check(is_str,y)
 check(is_str,z)
 if(is_str(x))
 {
  const _=split(x,y)
  {
   const a=_
   {
    return join(a,z)
   }
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
     {
      push(r,z)
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
 else
 {
  stop()
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
     {
      push(x,v)
     }
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
  return time_interval(x,0)
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
  return split(x,":")
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
     for(const v of get_files(includes))
     {
      const _=path_ext(v)
      {
       const ext=_
       {
        if(same(ext,"cs"))
        {
         cpl_compile(cpl,v)
        }
       }
      }
     }
     const _=cpl_generate(cpl)
     {
      const r=_
      {
       cpl_deinit(cpl)
       return (typeof(r)==="function")?r():r
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
        {
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
function ast_begin(cpl,parameters,children,source)
{
 check(is_obj,cpl)
 check(is_arr,parameters)
 check(is_arr,children)
 check(is_obj,source)
 check(is_empty,parameters)
 return call_ast_block(cpl,children,source)
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
  {
   return {code,source}
  }
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
  {
   return {code,source}
  }
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
   const _=call_ast_block(cpl,children,source)
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
      {
       return {code,source}
      }
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
  {
   return {code,source}
  }
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
    {
     stop()
    }
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
    {
     return {code,source}
    }
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
    {
     return {code,source}
    }
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
    {
     return {code,source}
    }
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
   {
    return {code,source}
   }
  }
 }
 const _=expr_right(...parameters)
 {
  const code=_
  {
   const _=space("yield",code)
   {
    const code=_
    {
     return {code,source}
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
          {
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
   }
  }
 }
}
function cpl_block(x,y)
{
 check(is_obj,x)
 check(is_arr,y)
 function translate(x,y)
 {
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
      {
       append(r,a)
      }
     }
    }
    return (typeof(r)==="function")?r():r
   }
  }
 }
 try
 {
  return translate(x,y)
 }
 catch(e)
 {
  cpl_dump(x)
  throw (typeof(e)==="function")?e():e
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
        const nodes=_
        {
         const _=cpl_block(x,nodes)
         {
          const nodes=_
          {
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
              const _=(typeof(parent.source)==="function")?parent.source():parent.source
              {
               const source=_
               {
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
      {
       return (typeof(r)==="function")?r():r
      }
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
     {
      push(a,v.code)
     }
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
                {
                 push(paths,path)
                }
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
                            {
                             push(value,index)
                            }
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
           const _=[]
           {
            const out=_
            {
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
  {
   return false
  }
  if(contain(x,"//"))
  {
   return true
  }
  if(contain(x,"\""))
  {
   return true
  }
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
        {
         return (typeof(r)==="function")?r():r
        }
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
      {
       return (typeof(r)==="function")?r():r
      }
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
                const _={indent,operator,parameters,children,source}
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
   {
    continue
   }
   const _=get(cpl.asts,k)
   {
    const ast=_
    {
     const _=ast(cpl,parameters,children,source)
     {
      const r=_
      {
       if(is_arr(r))
       {
        return (typeof(r)==="function")?r():r
       }
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
      {
       return (typeof(r)==="function")?r():r
      }
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
             {
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
   }
   const _=join(r)
   {
    const r=_
    {
     const _=trim_r(r)
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
    const _=dbg_origin_cs(x.stack)
    {
     const t=_
     {
      const _=tbl_render(t)
      {
       const s=_
       {
        log(s)
        const _=dbg_backtrace(x.stack)
        {
         const t=_
         {
          tbl_remove_column(t,"njs")
          tbl_remove_column(t,"js")
          const _=tbl_render(t)
          {
           const s=_
           {
            log(s)
            const _=dbg_origin_js(x.stack)
            {
             const t=_
             {
              const _=tbl_render(t)
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
setTimeout(main)
const pool=["lib-common/abs.cs","lib-common/add.cs","lib-common/and.cs","lib-common/angle.cs","lib-common/app-name.cs","lib-common/append.cs","lib-common/arr.cs","lib-common/asc.cs","lib-common/at.cs","lib-common/back.cs","lib-common/base36-decode.cs","lib-common/base36-encode.cs","lib-common/between.cs","lib-common/brace.cs","lib-common/bracket.cs","lib-common/byte-size.cs","lib-common/check.cs","lib-common/chr.cs","lib-common/clear.cs","lib-common/clone.cs","lib-common/cmp.cs","lib-common/collate.cs","lib-common/concat.cs","lib-common/contain.cs","lib-common/crc.cs","lib-common/date-decode.cs","lib-common/date-str.cs","lib-common/dbg/dbg-backtrace.cs","lib-common/dbg/dbg-callstack.cs","lib-common/dbg/dbg-origin-cs.cs","lib-common/dbg/dbg-origin-js.cs","lib-common/dbg/dbg-origin.cs","lib-common/dbg/dbg-source-map.cs","lib-common/dbg/dbg-source.cs","lib-common/dec.cs","lib-common/dedup.cs","lib-common/delimit.cs","lib-common/different.cs","lib-common/div.cs","lib-common/drop.cs","lib-common/dump.cs","lib-common/dup.cs","lib-common/every.cs","lib-common/explode.cs","lib-common/extract.cs","lib-common/find.cs","lib-common/flower.cs","lib-common/fn-match.cs","lib-common/front.cs","lib-common/get.cs","lib-common/gt.cs","lib-common/gte.cs","lib-common/has.cs","lib-common/head.cs","lib-common/implode.cs","lib-common/inc.cs","lib-common/indent.cs","lib-common/insert.cs","lib-common/is/is-access.cs","lib-common/is/is-alnum.cs","lib-common/is/is-alpha.cs","lib-common/is/is-arr.cs","lib-common/is/is-atom.cs","lib-common/is/is-blank.cs","lib-common/is/is-bool.cs","lib-common/is/is-browser.cs","lib-common/is/is-char.cs","lib-common/is/is-comment.cs","lib-common/is/is-container.cs","lib-common/is/is-cool.cs","lib-common/is/is-def.cs","lib-common/is/is-digit.cs","lib-common/is/is-empty.cs","lib-common/is/is-false.cs","lib-common/is/is-fn.cs","lib-common/is/is-fragment.cs","lib-common/is/is-full.cs","lib-common/is/is-gn.cs","lib-common/is/is-identifier.cs","lib-common/is/is-indented.cs","lib-common/is/is-int.cs","lib-common/is/is-ip.cs","lib-common/is/is-ip4.cs","lib-common/is/is-ip6.cs","lib-common/is/is-json.cs","lib-common/is/is-last.cs","lib-common/is/is-lisp.cs","lib-common/is/is-lit-char.cs","lib-common/is/is-lit.cs","lib-common/is/is-ln.cs","lib-common/is/is-lower.cs","lib-common/is/is-many.cs","lib-common/is/is-name.cs","lib-common/is/is-node.cs","lib-common/is/is-none.cs","lib-common/is/is-noun.cs","lib-common/is/is-null.cs","lib-common/is/is-num.cs","lib-common/is/is-numeric.cs","lib-common/is/is-obj.cs","lib-common/is/is-pair.cs","lib-common/is/is-punct.cs","lib-common/is/is-single.cs","lib-common/is/is-space.cs","lib-common/is/is-str.cs","lib-common/is/is-token.cs","lib-common/is/is-trivia.cs","lib-common/is/is-true.cs","lib-common/is/is-tuple.cs","lib-common/is/is-txt.cs","lib-common/is/is-uint.cs","lib-common/is/is-undef.cs","lib-common/is/is-upper.cs","lib-common/is/is-url.cs","lib-common/is/is-vec.cs","lib-common/is/is-word.cs","lib-common/join.cs","lib-common/json-decode.cs","lib-common/json-encode.cs","lib-common/log.cs","lib-common/lt.cs","lib-common/lte.cs","lib-common/main.cs","lib-common/map.cs","lib-common/match-l.cs","lib-common/match-r.cs","lib-common/match.cs","lib-common/max.cs","lib-common/merge.cs","lib-common/min.cs","lib-common/mul.cs","lib-common/nop.cs","lib-common/obj-delete.cs","lib-common/obj-keys.cs","lib-common/obj-length.cs","lib-common/obj-vals.cs","lib-common/obj.cs","lib-common/on.cs","lib-common/or.cs","lib-common/pad-l.cs","lib-common/pad-r.cs","lib-common/paren.cs","lib-common/path-concat.cs","lib-common/path-file.cs","lib-common/path-fix.cs","lib-common/pop.cs","lib-common/prepend.cs","lib-common/push.cs","lib-common/put.cs","lib-common/random.cs","lib-common/reject.cs","lib-common/remove.cs","lib-common/repeat.cs","lib-common/replace-rec.cs","lib-common/replace.cs","lib-common/reverse.cs","lib-common/round.cs","lib-common/salt.cs","lib-common/same.cs","lib-common/scan.cs","lib-common/set.cs","lib-common/shift.cs","lib-common/sleep.cs","lib-common/slice-l.cs","lib-common/slice-r.cs","lib-common/slice.cs","lib-common/sort.cs","lib-common/space.cs","lib-common/split.cs","lib-common/stop.cs","lib-common/str-indent.cs","lib-common/str-unindent.cs","lib-common/strip-l.cs","lib-common/strip-r.cs","lib-common/sub.cs","lib-common/tail.cs","lib-common/tbl/tbl-column.cs","lib-common/tbl/tbl-columns.cs","lib-common/tbl/tbl-init.cs","lib-common/tbl/tbl-remove-column.cs","lib-common/tbl/tbl-render.cs","lib-common/time-get.cs","lib-common/time-hn.cs","lib-common/time-interval.cs","lib-common/time-now.cs","lib-common/time-str.cs","lib-common/time-timeout.cs","lib-common/to/to-base36.cs","lib-common/to/to-dump.cs","lib-common/to/to-fixed.cs","lib-common/to/to-i.cs","lib-common/to/to-int.cs","lib-common/to/to-json.cs","lib-common/to/to-lit.cs","lib-common/to/to-lower.cs","lib-common/to/to-num.cs","lib-common/to/to-str.cs","lib-common/to/to-uint.cs","lib-common/to/to-upper.cs","lib-common/trim-l.cs","lib-common/trim-r.cs","lib-common/trim.cs","lib-common/trunc.cs","lib-common/unshift.cs","lib-common/unwrap.cs","lib-common/xor.cs","lib-compiler/app-home.cs","lib-compiler/app-make.cs","lib-compiler/ast/ast-assign.cs","lib-compiler/ast/ast-begin.cs","lib-compiler/ast/ast-brk.cs","lib-compiler/ast/ast-call.cs","lib-compiler/ast/ast-catch.cs","lib-compiler/ast/ast-check.cs","lib-compiler/ast/ast-cont.cs","lib-compiler/ast/ast-else.cs","lib-compiler/ast/ast-elseif.cs","lib-compiler/ast/ast-fn.cs","lib-compiler/ast/ast-forin.cs","lib-compiler/ast/ast-fornum.cs","lib-compiler/ast/ast-forof.cs","lib-compiler/ast/ast-gn.cs","lib-compiler/ast/ast-if.cs","lib-compiler/ast/ast-include.cs","lib-compiler/ast/ast-inline.cs","lib-compiler/ast/ast-let.cs","lib-compiler/ast/ast-ret.cs","lib-compiler/ast/ast-run.cs","lib-compiler/ast/ast-throw.cs","lib-compiler/ast/ast-try.cs","lib-compiler/ast/ast-var.cs","lib-compiler/ast/ast-while.cs","lib-compiler/ast/ast-yield.cs","lib-compiler/ast/call-ast-block.cs","lib-compiler/ast/call-ast-declare.cs","lib-compiler/ast/call-ast-for.cs","lib-compiler/ast/call-ast-if.cs","lib-compiler/ast/call-ast-xn.cs","lib-compiler/cpl-block.cs","lib-compiler/cpl-compile.cs","lib-compiler/cpl-deinit.cs","lib-compiler/cpl-dump.cs","lib-compiler/cpl-fold.cs","lib-compiler/cpl-generate.cs","lib-compiler/cpl-init.cs","lib-compiler/cpl-load.cs","lib-compiler/cpl-scan.cs","lib-compiler/cpl-scope.cs","lib-compiler/cpl-tokenize.cs","lib-compiler/cpl-translate.cs","lib-compiler/cpl-uncomment.cs","lib-compiler/expr/expr-arg.cs","lib-compiler/expr/expr-arr.cs","lib-compiler/expr/expr-call.cs","lib-compiler/expr/expr-in.cs","lib-compiler/expr/expr-inline.cs","lib-compiler/expr/expr-instanceof.cs","lib-compiler/expr/expr-new.cs","lib-compiler/expr/expr-obj.cs","lib-compiler/expr/expr-right.cs","lib-compiler/expr/expr-run.cs","lib-compiler/expr/expr-rvalue.cs","lib-compiler/expr/expr-value.cs","lib-node/digest.cs","lib-node/dir/dir-change.cs","lib-node/dir/dir-current.cs","lib-node/dir/dir-load.cs","lib-node/dir/dir-make.cs","lib-node/dir/dir-read.cs","lib-node/dir/dir-remove.cs","lib-node/dir/dir-reset.cs","lib-node/dir/dir-size.cs","lib-node/file/file-read.cs","lib-node/file/file-save.cs","lib-node/file/file-size.cs","lib-node/file/file-write.cs","lib-node/fs-copy.cs","lib-node/fs-remove.cs","lib-node/ip-list.cs","lib-node/is-dir.cs","lib-node/is-file.cs","lib-node/is-fs.cs","lib-node/is-readable.cs","lib-node/main-node.cs","lib-node/open.cs","lib-node/os/os-detach.cs","lib-node/os/os-execute.cs","lib-node/os/os-home.cs","lib-node/os/os-host.cs","lib-node/os/os-ps.cs","lib-node/os/os-shell.cs","lib-node/os/os-spawn.cs","lib-node/os/os-system.cs","lib-node/os/os-user.cs","lib-node/path/path-base.cs","lib-node/path/path-dir.cs","lib-node/path/path-ext.cs","lib-node/path/path-real.cs","lib-node/path/path-tmp.cs","lib-node/ssh-execute.cs","lib-node/ssh-pass.cs","lib-node/ssh-system.cs","app-make/init.cs","fn abs x"," check is_num x",""," ret Math.abs x","end","fn add x y z:etc"," check is_num y"," let r inline \"x+y\""," if is_full z","  ret add r z:etc"," ret r","fn and x y z:etc"," check is_bool x"," check is_bool y"," let r inline \"x&&y\"","  ret and r z:etc","fn angle x"," check is_str x"," ret concat \"<\" x \">\"","fn app_name"," if is_node","  let file at process.argv 1","  let file path_file file","  ret replace file \".\" \"-\""," elseif is_browser","  var file location.hostname","  let base path_base file","  if is_ip base","   ret replace base \".\" \"-\"","  let file path_file base"," else","  stop","fn append x y"," check is_arr x"," check is_arr y"," forof y","  push x v"," end","fn arr x:etc"," ret inline \"[...x]\"","fn asc x"," check is_char x"," ret x.charCodeAt 0","fn at x y z"," check is_vec x"," check is_uint y"," let n dec x.length"," check between y 0 n"," if is_undef z","  ret inline \"x[y]\""," inline \"x[y]=z\"","fn back x y z"," if is_undef y","  ret back x 0"," let n sub x.length y"," let n dec n","  ret at x n"," at x n z","fn base36_decode x"," var r \"\""," let a explode x"," while is_full a","  let a2 slice_l a 4","  shift a 4","  let s implode a2","  let n Number.parseInt s 36","  let range mul 256 256","  check is_uint n","  check lte n range","  let c chr n","  assign r concat r c","fn base36_encode x"," forof x","  let s asc v","  let s to_base36 s","  let s pad_l s \"0\" 4","  assign r concat r s","fn between x y z"," check is_num z"," check gte z y"," if lt x y","  ret false"," if gt x z"," ret true","fn brace x"," ret concat \"{\" x \"}\"","fn bracket x"," ret concat \"[\" x \"]\"","fn byte_size x"," check is_uint x"," check gte x 0"," let kb 1024"," let mb mul 1024 kb"," let gb mul 1024 mb"," let tb mul 1024 gb"," if lt x kb","  let s to_fixed x","  ret concat s \"b\""," if lt x mb","  let s div x kb","  let s trunc s","  let s to_fixed s","  ret concat s \"Kb\""," if lt x gb","  let s div x mb","  ret concat s \"Mb\""," if lt x tb","  let s div x gb","  ret concat s \"Gb\""," let s div x tb"," let s trunc s"," let s to_fixed s"," ret concat s \"Tb\"","fn check x y:etc"," if is_true x","  if is_empty y","   ret"," elseif is_fn x","  let b x y:etc","  if is_true b"," stop","fn chr x"," ret String.fromCharCode x","fn clear x"," x.splice 0","fn clone x"," check is_def x"," ret structuredClone x","fn cmp x y"," check is_def y"," if inline \"x>y\"","  ret 1"," if inline \"x<y\"","  ret -1"," ret 0","fn collate x"," fn is_delimited x","  if same x \"_\"","   ret false","  if is_punct x","   ret true","  if is_space x"," let a arr","  if is_empty a","   push a v","   cont","  end","  let left back a","  let left back left","  let right front v","  if is_delimited left","  elseif is_delimited right","  else","   push a right","  let s concat left right","  drop a","  push a s"," ret join a \" \"","fn concat x:etc"," ret implode x","fn contain x y"," if is_str x","  check is_str y"," ret x.includes y","fn crc x"," var r 0"," forin a","  let i to_i k","  let s at a i","  forin s","   let i to_i k","   let v at s i","   let n asc v","   assign r add r n","fn date_decode x"," let r new Date x"," let r r.getTime"," let r div r 1000"," let r trunc r","fn date_str x"," if is_undef x","  let n time_get","  ret date_str n"," let n mul x 1000"," let o new Date n"," let y o.getFullYear"," let m o.getMonth"," let m inc m"," let m pad_l m \"0\" 2"," let d o.getDate"," let d pad_l d \"0\" 2"," ret concat y \"/\" m \"/\" d","fn dbg_backtrace x","  let e new Error \"backtrace\"","  ret dbg_backtrace e.stack"," fn parse_numbers x","  check is_arr x","  let r arr","  forof x","   if not is_numeric v","    cont","   let n json_decode v","   if not is_uint n","   push r n","  ret r"," let r arr"," let stack trim x"," let stack split stack"," let map dbg_source_map"," forin stack","  let v at stack i","  if is_node","   let script at process.argv 1","   if not contain v script","  let s trim v","  let s replace s \"@\" \" \"","  let a split s \" \"","  let s front a","  if same s \"at\"","   shift a","  var fn shift a","  if is_empty fn","   assign fn \"anonymous\"","  if not is_noun fn","  let a shift a","  let a scan a is_atom","  let a parse_numbers a","  if not is_many a","  let njs back a 1","  var index dec njs","  if gte index map.source.length","  let location at map.source index","  let js trim location.js","  let cs trim location.cs","  let path location.path","  let ncs location.index","  let ncs inc location.index","  let o obj fn njs js path ncs cs","  push r o","fn dbg_callstack x"," let r dbg_backtrace x"," while is_full r","  let frame front r","  let fn frame.fn","  if contain fn \"throw\"","  elseif contain fn \"stop\"","  elseif contain fn \"check\"","   brk","  shift r","fn dbg_origin_cs x y","  let e new Error \"origin-cs\"","  ret dbg_origin_cs e.stack"," let stack dbg_callstack x"," let frame front stack"," let file get map.files frame.path"," let line frame.ncs"," ret dbg_origin file line","fn dbg_origin_js x","  let e new Error \"origin-js\"","  ret dbg_origin_js e.stack"," let line frame.njs"," ret dbg_origin map.source line \"js\"","fn dbg_origin source line key depth"," check is_arr source"," check is_uint line"," if is_undef key","  ret dbg_origin source line \"\" depth"," check is_str key"," if is_undef depth","  ret dbg_origin source line key 15"," check is_uint depth"," let n div depth 2"," let n trunc n"," var n sub line n"," let length min source.length depth"," let nup add n length"," if lt n 1","  assign n 1"," elseif gte nup source.length","  assign n sub source.length length","  assign n inc n","  if lt n 1","   assign n 1"," fornum length","  let n add n i","  var p \" \"","  if same n line","   assign p \">\"","  let index dec n","  var code at source index","  if is_empty key","   check is_str code","   assign code get code key","  let o obj n p code","  push a o"," let a2 arr"," forof a","  push a2 v.code"," let s join a2"," let s str_unindent s"," let a3 split s"," forin a3","  let code at a3 i","  let o at a i","  assign o.code code","  if is_empty v.code","  push r v","fn dbg_source_map"," let lines_js dbg_source"," let lines_js split lines_js"," let paths arr"," forof relatives","  let path at pool v","  push paths path"," let files obj"," forin contents","  let content get contents k","  let n to_uint k","  let path at pool n","  let lines arr","  forof content","   let s at pool v","   push lines s","  put files path lines"," let source arr","  fornum 7","   push source null"," forin paths","  var n i","  if gte n paths.length","  let path at paths n","  let index at indices n","  var js n","  elseif is_browser","   assign js add js 5","  let js at lines_js js","  let cs get files path","  let cs at cs index","  let o obj path index js cs","  push source o"," ret obj files source","fn dbg_source"," fn get_source","   let path at process.argv 1","   let s file_read path","   ret s","   ret html.outerHTML","   stop"," let r get_source"," let r trim_r r"," let r split r"," let main back r"," pop r 5"," fornum 4","  push r \"\""," push r main"," let r join r","fn dec x"," ret sub x 1","fn dedup x","  if not contain r v","   push r v","fn delimit x y","  ret delimit x is_fragment"," check is_fn y","  let right v","  if is_empty r","   push r right","  let left back r","  let fragment concat left right","  if is_fragment fragment","   drop r","   push r fragment","fn different x y"," ret inline \"x!==y\"","fn div x y z:etc"," check different y 0"," let r inline \"x/y\"","  ret div r z:etc","fn drop x y","  ret drop x 1"," pop x y","fn dump x","  if process.stdout.isTTY","   let showHidden false","   let depth null","   let colors true","   let maxArrayLength null","   let maxStringLength null","   let o obj showHidden depth colors maxArrayLength maxStringLength","   let s util.inspect x o","   log s","   let s to_dump x","  let s to_dump x","  log s","fn dup x"," check is_container x"," if is_arr x","  ret slice x 0"," elseif is_obj x","  let r obj","  merge r x","fn every x y","  if not y v","fn explode x","fn extract x y"," var r false"," let a dup x"," clear x","  if same v y","   assign r true","   push x v","fn find x y"," let value y"," fn match x","  ret same x value"," ret x.findIndex match","fn flower x"," var n null","  assign n process.stdout.columns","  if is_undef n","   assign n 144","  assign n 80","  let s repeat \"*\" n","  ret"," let s1 repeat \"*\" n"," let s2 repeat \"*\" 2"," let s2 concat s2 \" \""," let s2 concat s2 x"," let s2 concat s2 s1"," let s2 slice_l s2 n"," log s2","fn fn_match x"," let r obj"," forin fns","  if not match k x","  let v get fns k","  put r k v","fn front x"," ret at x 0","fn get x y"," check is_obj x"," check is_str y"," check has x y"," ret inline \"x[y]\"","fn gt x y"," ret inline \"x>y\"","fn gte x y"," ret inline \"x>=y\"","fn has x y"," ret inline \"y in x\"","fn head x y"," if lt x.length y","  ret dup x"," ret slice_l x y","fn implode x"," ret join x \"\"","fn inc x"," ret add x 1","fn indent x y","  ret indent x 1"," forof split x","  let s trim_r v","  if is_empty s","   push a s","   let indent repeat \" \" y","   let s concat indent s"," ret join a","fn insert x y z:etc"," check between y 0 x.length"," x.splice y 0 z:etc","fn is_access x"," if not is_str x"," if is_empty x"," let a split x \".\""," if is_single a"," ret every a is_identifier","fn is_alnum x","  if same v \"_\"","  elseif is_alpha v","  elseif is_digit v","fn is_alpha x","  if is_lower v","  elseif is_upper v","fn is_arr x"," ret Array.isArray x","fn is_atom x"," if is_alnum x","  ret true"," if is_access x"," if is_tuple x"," if is_numeric x"," if is_lit x"," if is_lit_char x"," ret false","fn is_blank x"," if is_space x","fn is_bool x"," let s typeof x"," ret same s \"boolean\"","fn is_browser"," try","  inline \"window\""," catch","fn is_char x"," ret same x.length 1","fn is_comment x"," if not is_ln x"," ret match_l x \"//\"","fn is_container x"," if is_obj x","fn is_cool x"," if is_num x","fn is_def x"," ret not is_undef x","fn is_digit x","  if not contain digit v","fn is_empty x"," if is_vec x","  ret same x.length 0"," if obj x","  let keys obj_keys x","  ret is_empty keys","fn is_false x"," ret same x false","fn is_fn x"," if different s \"function\""," if same x.constructor.name \"GeneratorFunction\"","fn is_fragment x","fn is_full x","  ret not is_empty x","fn is_gn x"," if different x.constructor.name \"GeneratorFunction\"","fn is_identifier x"," let s front x"," if same s \"_\""," elseif is_alpha s","  if not is_alnum v","fn is_indented x","  if is_empty v","  let c front v","  if not is_space c","fn is_int x"," ret Number.isInteger x","fn is_ip x"," if is_ip4 x"," if is_ip6 x","fn is_ip4 x"," if different a.length 4","  if not is_digit v","  let n to_uint v","  if gt n 255","fn is_ip6 x"," let a split x \":\""," if lt a.length 3"," if gt a.length 8","  if contain v \"_\"","  if gt v.length 4","fn is_json x","  json_decode x","fn is_last x y"," ret same n y","fn is_lisp x"," let a split x \"-\""," ret every a is_alnum","fn is_lit_char x"," if not match_l x \"'\""," if not match_r x \"'\""," let s strip_l x \"'\""," let s strip_r s \"'\""," if is_empty s"," let s concat \"\\\"\" s \"\\\"\""," ret is_lit s","fn is_lit x"," if not is_json x"," let v json_decode x"," if not is_str v"," let s json_encode v"," ret same s x","fn is_ln x","  ret not is_txt x","fn is_lower x","  if not contain lower v","fn is_many x","  ret gt x.length 1","fn is_name x"," if is_identifier x","fn is_node"," ret not is_browser","fn is_none x"," if is_null x","fn is_noun x","fn is_null x"," ret same x null","fn is_num x"," if Number.isNaN x"," if same x Number.NEGATIVE_INFINITY"," if same x Number.POSITIVE_INFINITY"," ret same s \"number\"","fn is_numeric x"," if not is_num v","fn is_obj x"," ret same s \"object\"","fn is_pair x"," if not is_vec x"," ret same x.length 2","fn is_punct x","  if not contain punct v","fn is_single x","  ret same x.length 1","fn is_space x"," let s trim x"," ret is_empty s","fn is_str x"," ret same s \"string\"","fn is_token x"," if is_atom x"," if is_comment x","fn is_trivia x","fn is_true x"," ret same x true","fn is_tuple x","  if is_identifier v","fn is_txt x","  ret contain x \"\\n\"","fn is_uint x"," if is_int x","  ret gte x 0","fn is_undef x"," ret same x undefined","fn is_upper x","  if not contain upper v","fn is_url x"," if match_l x \"http://\""," if match_l x \"https://\"","fn is_vec x","fn is_word x"," if contain x \" \""," if contain x \"\\n\""," if contain x \"\\r\"","fn join x y","  ret join x \"\\n\""," ret x.join y","fn json_decode x"," ret JSON.parse x","fn json_encode x"," ret JSON.stringify x","fn log x:etc"," console.log x:etc","fn lt x y"," ret inline \"x<y\"","fn lte x y"," ret inline \"x<=y\"","fn main"," fn pump x:etc","  if is_fn init","   init x:etc","   profile","  elseif is_gn init","   let generator init x:etc","   fn on_timer","    let iterator generator.next","    if iterator.done","     profile","     ret","    end","    time_timeout on_timer","   end","   on_timer"," fn profile","  let n time_now","  let name app_name","  let s to_fixed n","  let s concat s \"s\"","  log \"profile\" name s"," fn get_fns","  var content null","   assign content file_read script","   assign content html.innerHTML","  forof punct","   assign content replace content v \" \"","  let words replace content \"\\n\" \" \"","  let words replace_rec content \"  \" \" \"","  let words split content \" \"","  let o obj","  forof words","   let k v","   if has o k","   if not is_identifier k","   var v null","   try","    assign v eval k","   catch","   if not is_fn v","   put o k v","  ret sort o"," if is_browser","  assign window.global window"," assign global.zombie false"," assign global.start time_get"," assign global.punct \"!\\\"#$%&'()*+,-./:;<=>?@[\\\\]^`{|}~\""," assign global.digit \"0123456789\""," assign global.lower \"abcdefghijklmnopqrstuvwxyz\""," assign global.upper to_upper lower","  main_node","  main_browser"," assign global.fns get_fns","  if match k \"init_*\"","   let v get fns k","   v","  let args slice process.argv 2","  pump args:etc","  fn on_load","   if same document.readyState \"complete\"","    pump","    assign window.onload null","  assign window.onload on on_load","fn map x y","  let v y v","  check is_def v","fn match_l x y"," if is_empty y"," if gt y.length x.length"," let s slice_l x y.length"," ret same s y","fn match_r x y"," let s slice_r x y.length","fn match x y"," let s replace y \".\" \"\\\\.\""," let s replace s \"*\" \".*\""," let s concat \"^\" s \"$\""," let s new RegExp s"," ret s.test x","fn max x:etc"," ret Math.max x:etc","fn merge x y"," check is_obj y"," Object.assign x y","fn min x:etc"," ret Math.min x:etc","fn mul x y z:etc"," let r inline \"x*y\"","  ret mul r z:etc","fn nop","fn obj_delete x y"," forin x","  if same k y","  let v get x k","fn obj_keys x"," ret Object.keys x","fn obj_length x"," let keys obj_keys x"," ret keys.length","fn obj_vals x"," ret Object.values x","fn obj"," ret inline \"{}\"","fn on x"," check is_fn x"," let fn value x"," fn on_fn x:etc","  if zombie","  try","   ret fn x:etc","  catch e","   assign zombie true","   throw e"," if zombie"," ret value on_fn","fn or x y z:etc"," let r inline \"x||y\"","  ret or r z:etc","fn pad_l x y z"," check is_cool x"," if is_uint x","  let s to_json x","  if is_undef y","   if is_undef z","    ret pad_l s \"0\" 3","   ret pad_l s \"0\" z","  ret pad_l s y z"," check is_uint z"," ret x.padStart z y","fn pad_r x y z","    ret pad_r s \"0\" 3","   ret pad_r s \"0\" z","  ret pad_r s y z"," ret x.padEnd z y","fn paren x"," ret concat \"(\" x \")\"","fn path_concat x y"," let x strip_r x \"/\""," let y strip_l y \"/\""," ret concat x \"/\" y","fn path_file x"," let s path_base x"," let a split s \".\"","  ret s"," drop a"," ret join a \".\"","fn path_fix x"," if match_r x \"/\"","  ret x"," ret concat x \"/\"","fn pop x y","  ret pop x 1"," if same y 1","  let r back x","  remove x n 1"," remove x n y","fn prepend x y"," let a dup y"," reverse a","  unshift x v","fn push x y"," x.push y","fn put x y z"," check is_def z"," if has x y"," set x y z","fn random x","  ret random Number.MAX_SAFE_INTEGER"," let r Math.random"," let r mul r x","  ret trunc r","fn reject x y","  if y v","fn remove x y z","  ret remove x y 1"," let n add y z"," check between n 0 x.length"," x.splice y z","fn repeat x y"," ret x.repeat y","fn replace_rec x y z"," check is_str z"," var r x"," while contain r y","  assign r replace r y z","fn replace x y z","  let a split x y","  ret join a z"," elseif is_arr x","   if same v y","    push r z","   else","    push r v","fn reverse x"," x.reverse","fn round x"," ret Math.round x","fn salt x y","  ret salt x \"azertyuiop\""," let a1 explode x"," let a2 explode y"," while is_full a1","  if is_empty a2","   let a explode y","   append a2 a","  let c1 shift a1","  let c2 shift a2","  let n1 asc c1","  let n2 asc c2","  let n xor n1 n2","fn same x y"," ret inline \"x===y\"","fn scan x y z","  ret scan x is_token","  ret scan x y is_fragment"," check is_fn z"," fn group x y","  check is_fn y","  let fragments dup x","  while is_full fragments","   let a reduce fragments y","   if is_full a","    let s implode a","    push r s","    shift fragments a.length","    let s shift fragments"," fn reduce x","  check is_full x","  let r dup x","  while is_full r","   let s implode r","   if y s","    brk"," let a delimit x z"," ret group a z","fn set x y z","fn shift x y","  ret shift x 1","  let r front x","  remove x 0 1"," remove x 0 y","gn sleep x"," let start time_now"," while true","  let elapsed time_now","  let elapsed sub elapsed start","  if gte elapsed x","  yield","fn slice_l x y"," ret slice x 0 y","fn slice_r x y"," ret slice x n y","fn slice x y z"," let n1 inc x.length"," check between y 0 n1","  let n sub x.length y","  ret slice x y n"," check between z 0 n1"," let n2 add y z"," check between n2 0 n1"," ret x.slice y n2","fn sort x y","   x.sort","   x.sort y","  fn compare x y","   check is_obj x","   let r cmp x.key y.key","   if same r 0","    let r cmp x.value y.value","    ret r","   ret r","   ret sort x compare","  let a arr","  forin x","   let key k","   let value get x k","   let o obj key value","   push a o","  sort a y","  forof a","   let k v.key","   put r v.key v.value","fn space x:etc"," ret join x \" \"","fn split x y","  ret split x \"\\n\"","  ret arr"," ret x.split y","fn stop"," throw new Error \"stop\"","fn str_indent x"," if is_blank x","  ret 0"," let s trim_l x"," ret sub x.length s.length","fn str_unindent x"," while is_indented r","  forof split r","   if is_empty v","    push a v","   let s slice v 1","  assign r join a","fn strip_l x y"," if match_l x y","  let n sub x.length y.length","  ret slice_r x n"," ret x","fn strip_r x y"," if match_r x y","  ret slice_l x n","fn sub x y z:etc"," let r inline \"x-y\"","  ret sub r z:etc","fn tail x y"," ret slice_r x y","fn tbl_column x y","  let s get v y","  push r s","fn tbl_columns x"," let first front x"," ret obj_keys first","fn tbl_init x"," ret arr","fn tbl_remove_column x y"," let t dup x"," forof t","  let v obj_delete v y","fn tbl_render x"," fn stringify_tbl x","   let row dup v","   forin v","    let v get row k","    if is_str v","     cont","    let s json_encode v","    set row k s","   push r row"," fn pad_column x","   if is_num v","    let s to_str v","    push a s","   elseif is_str v","    stop","  var length 0","   assign length max length v.length","   let s pad_r v \" \" length","   push r s"," let tbl stringify_tbl x"," let titles tbl_columns tbl"," let columns arr"," forof titles","  let title v","  let column tbl_column tbl title","  unshift column title","  let column pad_column column","  push columns column"," var length 0"," forof columns","  let s front v","  assign length add length s.length"," let separator repeat \"-\" length"," push a separator"," let header arr","  let s shift v","  push header s"," let s join header \" \""," push a s"," let first front columns"," forin first","  let line arr","  forof columns","   let s at v i","   push line s","  let s join line \" \"","fn time_get"," let n Date.now"," ret div n 1000","fn time_hn x"," check is_int x"," fn get_unit x","  check is_num x","  let minute 60","  let hour mul 60 minute","  let day mul 24 hour","  let month mul 30 day","  let year mul 12 month","  if lt x 10","   let n to_fixed x","   ret concat n \"s\"","  if lt x minute","   let n trunc x","  if lt x hour","   let n div x minute","   let n trunc n","   ret concat n \"m\"","  if lt x day","   let n div x hour","   ret concat n \"h\"","  if lt x month","   let n div x day","   ret concat n \"d\"","  if lt x year","   let n div x month","  let n div x year","  let n trunc n","  ret concat n \"y\""," let now time_get"," if same x now","  ret \"now\""," if gt x now","  let n sub x now","  let s get_unit n","  ret concat \"in \" s"," let n sub now x"," let s get_unit n"," ret concat s \" ago\"","fn time_interval x y","  ret time_interval x 0"," let fn on x"," let n mul y 1000"," setInterval fn n","fn time_now"," let n time_get"," ret sub n start","fn time_str x","  ret time_str n"," let h o.getHours"," let h pad_l h \"0\" 2"," let m o.getMinutes"," ret concat h \"h\" m \"m\"","fn time_timeout x y","  ret time_timeout x 0"," setTimeout fn n","fn to_base36 x"," ret x.toString 36","fn to_dump x","  if is_empty x","   ret \"arr\"","  push a \"arr\"","   let v at x i","   let s to_dump v","   let sharp concat \"#\" i","   if is_ln s","    let s space \"\" sharp s","    let s2 space \"\" sharp","    let s indent s 2","    push a s2","  push a \"end\"","  ret join a","   ret \"obj\"","  push a \"obj\"","   let v get x k","   var key k","   if not is_word key","    assign key to_lit key","    let s space \"\" key s","    let s2 space \"\" key","    push a \"end\""," elseif is_word x","  ret to_lit x","  ret space \"fn\" x.name","  ret json_encode x","fn to_fixed x y","  ret to_fixed x 2"," let a x.toFixed y"," let a split a \".\""," let integer front a"," var float back a"," let digits explode float"," while is_full digits","  let c back digits","  if different c \"0\"","  drop digits"," if is_empty digits","  ret integer"," assign float implode digits"," ret concat integer \".\" float","fn to_i x"," ret Number.parseInt x","fn to_int x"," let r to_num x"," check is_int r","fn to_json x"," ret json_encode x","fn to_lit x","fn to_lower x"," ret x.toLowerCase","fn to_num x"," let r json_decode x"," check is_num r","fn to_str x"," ret x.toString","fn to_uint x"," let r to_int x"," check is_uint r","fn to_upper x"," ret x.toUpperCase","fn trim_l x"," ret x.trimStart","fn trim_r x"," ret x.trimEnd","fn trim x"," ret x.trim","fn trunc x"," ret Math.trunc x","fn unshift x y"," x.unshift y","fn unwrap x","  ret json_decode x","  ret split x \".\"","  ret split x \":\"","fn xor x y z:etc"," let r inline \"x^y\"","  ret xor r z:etc","fn app_home x"," let lines arr"," let js app_make x"," push lines \"<!doctype html>\""," push lines \"<html>\""," push lines \"<head>\""," push lines \"<meta charset=\\\"utf-8\\\">\""," push lines \"</head>\""," push lines \"<body>\""," push lines \"<script>\""," push lines js"," push lines \"</script>\""," push lines \"</body>\""," push lines \"</html>\""," ret join lines","fn app_make x"," fn get_files x","   let a dir_load v","   append r a"," fn get_includes x","  check is_str x","  let dir get_app_dir x","  let a path_concat dir \"include.txt\"","  let a file_read a","  let a trim a","  forof split a","   let s path_concat \"src\" v","  push r dir"," fn get_app_dir x","  let r concat \"src/app-\" x","  if is_dir r","  let r concat \"src/spa-\" x"," let cpl cpl_init"," let includes get_includes x"," forof get_files includes","  let ext path_ext v","  if same ext \"cs\"","   cpl_compile cpl v"," let r cpl_generate cpl"," cpl_deinit cpl","fn ast_assign cpl parameters children source"," check is_obj cpl"," check is_arr parameters"," check is_arr children"," check is_obj source"," check is_empty children"," let left front parameters"," check is_name left"," let right slice parameters 1"," let right expr_right right:etc"," let code concat left \"=\" right"," ret obj code source","fn ast_begin cpl parameters children source"," check is_empty parameters"," ret call_ast_block cpl children source","fn ast_brk cpl parameters children source"," let code \"break\"","fn ast_call cpl parameters children source"," check is_full parameters"," let code expr_call parameters:etc","fn ast_catch cpl parameters children source"," let block call_ast_block cpl children source"," if is_empty parameters","  let code \"catch\"","  let node obj code source","  push r node","  append r block"," check is_single parameters"," let identifier front parameters"," check is_identifier identifier"," let code paren identifier"," let code concat \"catch\" code"," let node obj code source"," push r node"," append r block","fn ast_check cpl parameters children source"," let code join parameters \",\""," let code paren code"," let code concat \"check\" code","fn ast_cont cpl parameters children source"," let code \"continue\"","fn ast_else cpl parameters children source"," let code \"else\"","fn ast_elseif cpl parameters children source"," ret call_ast_if cpl parameters children source \"else if\"","fn ast_fn cpl parameters children source"," ret call_ast_xn cpl parameters children source \"function\"","fn ast_forin cpl parameters children source"," ret call_ast_for cpl parameters children source \"k in\"","fn ast_fornum cpl parameters children source"," let code expr_right parameters:etc"," let code concat \"let i=0;i<\" code \";i++\""," let code concat \"for\" code","fn ast_forof cpl parameters children source"," ret call_ast_for cpl parameters children source \"v of\"","fn ast_gn cpl parameters children source"," ret call_ast_xn cpl parameters children source \"function*\"","fn ast_if cpl parameters children source"," ret call_ast_if cpl parameters children source \"if\"","fn ast_include cpl parameters children source"," let path front parameters"," check is_lit path"," let path unwrap path","fn ast_inline cpl parameters children source"," let code front parameters"," check is_lit code"," let code unwrap code","fn ast_let cpl parameters children source"," check is_many parameters"," ret call_ast_declare cpl parameters children source \"const\"","fn ast_ret cpl parameters children source"," var code \"\"","  assign code \"return\"","  let right expr_right parameters:etc","  assign code space \"return\" right","fn ast_run cpl parameters children source"," let code space \"yield*\" code","fn ast_throw cpl parameters children source"," let code space \"throw\" code","fn ast_try cpl parameters children source"," let code \"try\"","fn ast_var cpl parameters children source"," ret call_ast_declare cpl parameters children source \"let\"","fn ast_while cpl parameters children source"," let code concat \"while\" code","fn ast_yield cpl parameters children source","  let code \"yield\"","  ret obj code source"," let code space \"yield\" code","fn call_ast_block cpl children source"," forof cpl_block cpl children","  let o dup v","  assign o.code indent o.code"," let code \"{\""," let open obj code source"," let code \"}\""," let close obj code source"," unshift r open"," push r close","fn call_ast_declare cpl parameters children source keyword"," check is_str keyword"," let code slice parameters 1"," let code expr_right code:etc"," let code concat identifier \"=\" code"," let code space keyword code","fn call_ast_for cpl parameters children source keyword"," let code space \"const\" keyword code","fn call_ast_if cpl parameters children source keyword"," let code concat keyword code","fn call_ast_xn cpl parameters children source keyword"," fn get_argument x","  if is_identifier x","   ret x","  if is_tuple x","   let a unwrap x","   check is_pair a","   let name front a","   let etc back a","   check is_identifier name","   check same etc \"etc\"","   ret concat \"...\" name"," let name front parameters"," check is_name name"," let parameters slice parameters 1"," let args map parameters get_argument"," let args join args \",\""," let list paren args"," let code concat name list","fn cpl_block x y"," fn translate x y","  check is_obj x","  check is_arr y","  forof y","   let a cpl_translate x v","  ret translate x y"," catch e","  cpl_dump x","  throw e","fn cpl_compile x y"," let nodes cpl_load x y"," let nodes cpl_tokenize x nodes"," let nodes cpl_fold x nodes"," let nodes cpl_scope x nodes"," let nodes cpl_block x nodes"," append x.out nodes","fn cpl_deinit x"," let s json_encode x.cache"," file_save x.path s","fn cpl_dump x"," fn dump_ast x","  let parameters x.parameters","  let children x.children","  let a2 arr","  let a3 arr","  push a2 x.operator","  append a2 parameters","  forof a2","   if is_token v","    push a3 v","   let s to_lit v","   push a3 s","  let s space a3:etc","  forof children","   let s dump_ast v","   forof split s","    let s concat \" \" v","  if is_full children","   push a \"end\""," forin x.stack","  let v at x.stack i","  let n inc i","  let frame concat \"#\" n","  let title space \"frame\" frame","  flower title","  let s dump_ast v","  forof split s","   log \">\" v","fn cpl_fold x y"," fn visit x","  let parent shift x","  let indent parent.indent","  let descendants arr","  while is_full x","   let o front x","   if gt o.indent indent","    shift x","    push descendants o","  let children arr","  while is_full descendants","   let o visit descendants","   push children o","  let operator parent.operator","  let parameters parent.parameters","  let source parent.source","  ret obj operator parameters children source"," let nodes dup y"," while is_full nodes","  let o visit nodes","fn cpl_generate x"," let pool arr"," fn get_index x","  let r find pool x","  if gte r 0","  let r pool.length","  push pool x"," forof x.out","  push a v.code"," let relatives arr"," let indices arr","  let source v.source","  let path source.path","  if not contain paths path","   push paths path","  let n get_index path","  push relatives n","  push indices source.index"," let contents obj"," forof paths","  let key get_index v","  let key to_str key","  let path path_concat \"src\" v","  let content file_read path","  let content cpl_uncomment x content","  let value arr","  forof split content","   let index get_index v","   push value index","  put contents key value"," let pool json_encode pool"," let pool concat \"const pool=\" pool"," push a pool"," let relatives json_encode relatives"," let relatives concat \"const relatives=\" relatives"," push a relatives"," let indices json_encode indices"," let indices concat \"const indices=\" indices"," push a indices"," let contents json_encode contents"," let contents concat \"const contents=\" contents"," push a contents"," push a \"main()\"","fn cpl_init"," let path \"cache.txt\""," fn load_cache","  if is_file path","   ret json_decode s","  ret obj"," let cache load_cache"," let fns fn_match \"ast_*\""," let asts arr","  let a split k \"_\"","  shift a","  let s join a \"_\"","  put asts s v"," let stack arr"," let out arr"," ret obj asts stack out path cache","fn cpl_load x y"," let s file_read y"," let s cpl_uncomment x s"," let path dir_current"," let path path_concat path \"src\""," let path path_fix path"," let path strip_l y path"," let lines split s"," forin lines","  let v at lines i","  let index i","  let code v","  let source obj path index","  let o obj code source","fn cpl_scan x y"," fn is_complex x","  if not is_str x","  if contain x \"//\"","  if contain x \"\\\"\""," let s trim y"," if is_complex s","  if has x.cache s","   let r get x.cache s","   let r dup r","  let r scan s","  let r reject r is_trivia","  let a dup r","  put x.cache s a"," let r split s \" \""," let r reject r is_empty","fn cpl_scope x y"," fn is_declare x","  if same x \"let\"","  if same x \"var\"","  let node shift a","  let operator node.operator","  let parameters node.parameters","  let source node.source","  let declare operator","  var name null","  var rvalue null","  if is_full parameters","   assign name front parameters","   assign rvalue slice parameters 1","  if is_declare operator","   check is_str name","   check is_arr rvalue","   let operator \"let\"","   let parameters arr \"_\" rvalue:etc","   let children arr","   let node2 obj operator parameters children source","   push r node2","   let operator \"begin\"","   let parameters arr","   let node3 obj operator parameters children source","   push r node3","   let operator declare","   let parameters arr name \"_\"","   let node4 obj operator parameters children source","   push node3.children node4","   let children cpl_scope x a","   let node5 obj operator parameters children source","   push node3.children node5","   clear a","   let children cpl_scope x node.children","   let node obj operator parameters children source","   push r node","fn cpl_tokenize x y","  let code v.code","  let source dup v.source","  let indent str_indent code","  let parameters cpl_scan x code","  if is_empty parameters","  let operator shift parameters","  if same operator \"end\"","   if is_empty parameters","  let node obj indent operator parameters children source","fn cpl_translate x y"," fn translate cpl operator parameters children source","  check is_obj cpl","  check is_str operator","  check is_arr parameters","  check is_arr children","  check is_obj source","  forin cpl.asts","   if different k operator","   let ast get cpl.asts k","   let r ast cpl parameters children source","   if is_arr r","   check is_obj r","   ret arr r","  let parameters arr operator parameters:etc","  let r ast_call cpl parameters children source","  if is_arr r","  check is_obj r","  ret arr r"," let operator y.operator"," let parameters y.parameters"," let children y.children"," let source y.source","  ret translate x operator parameters children source","  unshift x.stack y","fn cpl_uncomment x y"," forof split y","  let indent str_indent v","  let tokens cpl_scan x v","  if is_empty tokens","   push r \"\"","  let indent repeat \" \" indent","  let line join tokens \" \"","  let line concat indent line","  push r line","fn expr_arg x","  let a unwrap x","  check is_pair a","  let name front a","  let etc back a","  check is_identifier name","  check same etc \"etc\"","  ret concat \"...\" name"," let s to_lit x"," log \"argument\" s","fn expr_arr x:etc"," let args map x expr_arg"," let s join args \",\""," ret bracket s","fn expr_call x y:etc"," check is_name x"," let args map y expr_arg"," ret concat x list","fn expr_in x y z:etc"," check is_identifier x"," check is_identifier y"," check is_empty z"," ret space y \"in\" x","fn expr_inline x"," ret unwrap x","fn expr_instanceof x y z:etc"," ret space x \"instanceof\" y","fn expr_new x:etc"," let rvalue expr_rvalue x:etc"," ret space \"new\" rvalue","fn expr_obj x:etc"," check every x is_identifier"," let s join x \",\""," ret brace s","fn expr_right x y:etc","  if same x \"arr\"","  elseif same x \"obj\"","  elseif same x \"_\"","  elseif same x \"null\"","  elseif same x \"true\"","  elseif same x \"false\"","  elseif is_numeric x","  elseif is_lit x","   let fn to_lit \"function\"","   let condition paren x","   let condition concat \"typeof\" condition \"===\" fn","   let condition paren condition","   let call concat x \"()\"","   ret concat condition \"?\" call \":\" x"," ret expr_rvalue x y:etc","fn expr_run x:etc"," let call expr_call x:etc"," ret space \"yield*\" call","fn expr_rvalue x:etc"," if is_single x","  if same first \"arr\"","   ret expr_arr","  elseif same first \"obj\"","   ret expr_obj","   ret first"," let args slice x 1"," if same first \"call\"","  ret expr_call args:etc"," elseif same first \"run\"","  ret expr_run args:etc"," elseif same first \"arr\"","  ret expr_arr args:etc"," elseif same first \"obj\"","  ret expr_obj args:etc"," elseif same first \"value\"","  ret expr_value args:etc"," elseif same first \"new\"","  ret expr_new args:etc"," elseif same first \"in\"","  ret expr_in args:etc"," elseif same first \"instanceof\"","  ret expr_instanceof args"," elseif same first \"inline\"","  ret expr_inline args:etc"," elseif same first \"not\"","  let right expr_right args:etc","  let right paren right","  ret concat \"!\" right","  ret expr_call x:etc","fn expr_value x y:etc"," check is_empty y","fn digest x"," let tmp path_tmp"," file_save tmp x"," let r os_execute \"sha256sum\" \"--binary\" tmp"," fs_remove tmp"," let r split r \" \""," let r front r","fn dir_change x"," process.chdir x","fn dir_current"," ret process.cwd","fn dir_load x"," forof dir_read x true","  if is_file v","  elseif is_dir v","fn dir_make x"," let recursive true"," let o obj recursive"," fs.mkdirSync x o","fn dir_read x y","  ret dir_read x false"," let dir path_real x"," let a fs.readdirSync dir"," sort a","  let s path_concat dir v","  if is_file s","  if y","   if is_dir s","fn dir_remove x"," fs.rmdirSync x o","fn dir_reset x"," fs_remove x"," dir_make x","fn dir_size x"," forof dir_load x","  let n file_size v","  assign r add r n","fn file_read x"," let o fs.readFileSync x"," ret o.toString","fn file_save x y"," if is_file x","  let s file_read x","  if same s y"," let dir path_dir x"," if not is_dir dir","  dir_make dir"," file_write x y","fn file_size x"," let v fs.statSync x"," ret v.size","fn file_write x y"," fs.writeFileSync x y","fn fs_copy x y","  if is_dir y","   let base path_base x","   let path path_concat y base","   fs_copy x path"," let force true"," let o obj force recursive"," fs.cpSync x y o","fn fs_remove x"," fs.rmSync x o","fn ip_list"," let s os_execute \"hostname\" \"--all-ip-addresses\""," ret split s \" \"","fn is_dir x"," let throwIfNoEntry false"," let o obj throwIfNoEntry"," let o fs.statSync x o"," if is_undef o"," ret o.isDirectory","fn is_file x"," ret o.isFile","fn is_fs x"," ret is_def o","fn is_readable x","  var fd null","   assign fd fs.openSync x","  catch","  let n file_size x","  if gt n 0","   let buffer Buffer.alloc 1","    fs.readSync fd buffer","    fs.closeSync fd","    ret false","  fs.closeSync fd"," elseif is_dir x","   fs.readdirSync x","fn main_node"," fn on_uncaught_exception x y","  let title space x.message \"/\" y","  let t dbg_origin_cs x.stack","  let s tbl_render t","  let t dbg_backtrace x.stack","  tbl_remove_column t \"njs\"","  tbl_remove_column t \"js\"","  let t dbg_origin_js x.stack","  process.exit 1"," assign global.cp require \"child_process\""," assign global.crypto require \"crypto\""," assign global.fs require \"fs\""," assign global.http require \"http\""," assign global.os require \"os\""," assign global.path require \"path\""," assign global.util require \"util\""," process.on \"uncaughtExceptionMonitor\" on_uncaught_exception","fn open x"," os_system \"xdg-open\" x","fn os_detach x:etc"," let o os_spawn x:etc"," o.unref","fn os_execute x y:etc"," let maxBuffer mul 1 1024 1024 1024"," let encoding \"utf8\""," let o obj maxBuffer encoding"," let streams cp.spawnSync x y o"," let out streams.stdout.toString"," let out trim_r out"," let err streams.stderr.toString"," let err trim_r err"," if is_full out","  push a out"," if is_full err","  push a err","fn os_home"," ret os.homedir","fn os_host"," ret os.hostname","fn os_ps"," let s os_execute \"ps\" \"aux\""," let a split s"," shift a","  let s replace_rec v \"  \" \" \"","  let pid at a 1","  let pid to_uint pid","  let path at a 10","  let args slice a 11","  let o obj pid path args","fn os_shell x:etc"," let result os_execute x:etc"," let command join x \" \""," let command to_lit command"," log \"shell\" command"," forof split result","  log \" >\" v","fn os_spawn x y:etc"," let detached true"," let stdio \"ignore\""," let o obj detached stdio"," ret cp.spawn x y o","fn os_system x y:etc"," let stdio \"inherit\""," let o obj stdio"," let o cp.spawnSync x y o"," ret o.status","fn os_user"," let o os.userInfo"," ret o.username","fn path_base x"," ret path.basename x","fn path_dir x"," ret path.dirname x","fn path_ext x"," let s path.extname x"," ret strip_l s \".\"","fn path_real x"," ret fs.realpathSync x","fn path_tmp x","  ret path_tmp \"tmp\""," check is_dir x","  let r random","  let r to_base36 r","  let r concat r \".txt\"","  let r path_concat x r","  if not is_file r","fn ssh_execute x:etc"," ret ssh_pass x:etc","fn ssh_pass x y:etc"," ret os_execute \"sshpass\" \"-p\" x y:etc","fn ssh_system x y:etc"," let r ssh_pass x y:etc"," let a split r"," if is_full a","  log y:etc","   log \" >\" v","fn init x:etc"," fn get_apps","  forof dir_read \"src\" true","   let base path_base v","   let a split base \"-\"","   let name join a \"-\"","   push r name"," fn is_app x","  let base concat \"app-\" x","  let path path_concat \"src\" base","  ret is_dir path"," let parameters dup x"," let apps get_apps","  dump apps"," let app shift parameters"," if not is_app app"," var run true"," if extract parameters \"--compile\"","  assign run false"," let code app_make app"," let out concat \"out-\" app \".js\""," let node process.argv0"," file_save out code"," if run","  dir_reset \"tmp\"","  os_system node \"--trace-uncaught\" out parameters:etc"]
const relatives=[0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,6,6,6,6,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,17,17,17,17,17,18,18,18,18,18,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,34,34,34,34,34,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,37,37,37,37,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,39,39,39,39,39,39,39,39,39,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,42,42,42,42,42,42,42,42,42,42,42,42,42,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,48,48,48,48,48,49,49,49,49,49,49,49,50,50,50,50,50,50,51,51,51,51,51,51,52,52,52,52,52,52,53,53,53,53,53,53,53,53,53,53,54,54,54,54,54,55,55,55,55,55,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,57,57,57,57,57,57,57,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,61,61,61,61,62,62,62,62,62,62,62,62,62,62,62,62,62,62,62,62,62,62,62,62,62,62,62,62,62,62,62,62,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,64,64,64,64,64,64,64,64,64,64,65,65,65,65,65,65,65,65,65,65,65,65,66,66,66,66,66,66,66,66,67,67,67,67,67,67,67,67,68,68,68,68,68,68,68,68,68,68,68,68,69,69,69,69,69,69,69,69,69,69,69,69,70,70,70,70,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,73,73,73,73,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,76,76,76,76,76,76,76,76,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,80,80,80,80,81,81,81,81,81,81,81,81,81,81,81,81,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,85,85,85,85,85,85,85,85,85,85,85,85,86,86,86,86,86,86,86,86,86,86,86,86,86,86,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,89,89,89,89,89,89,89,89,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,91,91,91,91,91,91,91,91,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,93,93,93,93,94,94,94,94,94,94,94,94,94,94,94,94,95,95,95,95,95,95,95,95,95,95,95,95,96,96,96,96,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,99,99,99,99,99,99,99,99,99,99,99,99,99,99,100,100,100,100,100,100,100,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,102,102,102,102,102,102,102,102,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,104,104,104,104,104,104,104,104,104,104,105,105,105,105,105,105,105,105,105,105,105,105,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,107,107,107,107,108,108,108,108,108,108,108,108,108,108,108,108,108,108,108,108,108,108,108,108,108,108,108,108,108,108,108,108,108,108,109,109,109,109,109,109,109,109,110,110,110,110,110,110,110,110,111,111,111,111,112,112,112,112,112,112,112,112,112,112,112,112,112,112,112,112,112,112,112,113,113,113,113,113,113,113,113,113,113,113,113,113,113,113,113,114,114,114,114,114,114,114,114,114,114,114,114,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,116,116,116,116,116,116,116,116,116,116,117,117,117,117,117,118,118,118,118,118,119,119,119,119,120,120,120,120,120,120,121,121,121,121,121,121,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,127,127,127,127,128,128,128,128,128,128,129,129,129,129,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,131,131,131,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,133,133,133,133,133,134,134,134,134,134,134,134,134,134,134,134,135,135,135,135,135,136,136,136,136,137,137,137,137,137,137,137,137,137,137,137,137,137,137,137,137,137,137,137,137,137,137,137,137,137,137,137,137,137,137,137,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,139,139,139,139,139,139,139,139,139,139,139,139,139,139,139,139,139,139,139,139,139,139,139,139,139,139,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,141,141,141,141,141,142,142,142,142,142,142,142,142,142,142,142,142,142,142,142,142,143,143,143,143,143,143,143,143,143,143,143,143,143,143,143,143,143,143,143,143,143,143,144,144,144,144,144,144,144,144,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,147,147,147,147,147,147,148,148,148,148,148,148,148,148,148,148,148,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,152,152,152,152,152,152,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,155,155,155,155,155,156,156,156,156,156,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,158,158,158,158,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,160,160,160,160,160,160,160,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,163,163,163,163,163,163,164,164,164,164,164,164,164,164,164,164,164,164,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,167,167,167,167,168,168,168,168,168,168,168,168,168,168,168,168,168,169,169,169,169,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,175,175,175,175,175,175,175,175,175,175,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,177,177,177,177,177,177,177,177,177,177,177,178,178,178,178,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,181,181,181,181,181,181,181,181,181,181,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,184,184,184,184,184,184,184,184,184,184,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,187,187,187,187,187,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,190,190,190,190,190,191,191,191,191,191,191,191,191,191,191,191,191,192,192,192,192,192,193,193,193,193,193,194,194,194,194,194,195,195,195,195,195,195,195,195,195,195,195,195,196,196,196,196,196,197,197,197,197,197,197,197,197,197,197,197,197,198,198,198,198,198,199,199,199,199,199,200,200,200,200,200,201,201,201,201,201,202,202,202,202,202,203,203,203,203,203,203,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,209,209,209,209,209,209,209,209,209,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,216,216,216,216,216,216,216,216,217,217,217,217,217,217,217,217,218,218,218,218,218,218,218,218,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,220,220,220,220,220,220,220,220,221,221,221,221,221,221,221,221,222,222,222,222,222,222,222,222,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,225,225,225,225,225,225,225,225,225,225,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,230,230,230,230,230,230,230,230,230,230,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,240,240,240,240,240,240,240,240,240,240,240,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,254,254,254,254,254,254,254,255,255,255,255,255,256,256,256,256,256,256,256,257,257,257,257,257,257,257,257,257,257,258,258,258,258,258,258,258,258,258,258,258,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,260,260,260,260,260,260,260,260,260,260,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,262,262,262,262,262,262,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,264,264,264,264,264,265,265,265,265,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,270,270,270,270,270,270,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,272,272,272,272,272,272,272,272,272,272,272,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,274,274,274,274,274,274,274,274,274,274,274,275,275,275,275,275,275,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,278,278,278,278,278,278,278,278,278,278,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,284,284,284,284,284,285,285,285,285,285,285,285,285,285,285,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,287,287,287,287,288,288,288,288,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,293,293,293,293,293,293,293,293,293,293,294,294,294,294,294,295,295,295,295,295,296,296,296,296,296,296,296,296,296,296,296,297,297,297,297,297,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,299,299,299,299,300,300,300,300,300,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302]
const indices=[0,0,1,6,0,0,0,1,2,4,4,4,4,6,6,7,6,9,4,4,0,0,0,1,2,4,4,4,4,6,6,7,6,9,4,4,0,0,0,1,3,0,0,0,1,1,2,2,2,2,3,3,3,3,5,3,3,2,2,1,6,6,7,7,7,7,8,8,8,8,10,10,11,10,13,13,13,13,15,13,13,8,8,7,7,6,16,16,17,16,0,0,0,1,2,4,4,5,4,0,0,0,1,0,0,0,1,3,0,0,0,1,2,4,4,4,4,6,8,8,9,8,11,4,4,0,0,0,1,3,3,4,3,6,8,8,8,8,9,9,9,9,11,11,12,11,14,9,9,8,8,0,0,0,1,3,3,3,3,4,4,4,4,6,6,7,7,7,7,9,11,11,11,11,12,12,12,12,13,13,13,13,15,16,18,18,18,18,20,18,18,13,13,12,12,11,11,7,7,6,23,4,4,3,3,0,0,0,1,3,3,3,3,5,5,6,6,6,6,7,7,7,7,8,8,8,8,10,8,8,7,7,6,6,5,13,3,3,0,0,0,1,2,3,4,6,6,7,6,9,9,10,9,12,0,0,0,1,3,0,0,0,1,3,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,9,10,10,10,10,12,10,10,9,15,15,16,16,16,16,17,17,17,17,18,18,18,18,20,18,18,17,17,16,16,15,23,23,24,24,24,24,25,25,25,25,26,26,26,26,28,26,26,25,25,24,24,23,31,31,32,32,32,32,33,33,33,33,34,34,34,34,36,34,34,33,33,32,32,31,39,39,39,39,40,40,40,40,41,41,41,41,43,41,41,40,40,39,39,7,7,6,6,5,5,4,4,0,0,0,1,1,2,2,3,2,1,4,4,5,5,5,5,7,7,8,7,5,5,4,11,0,0,0,1,3,0,0,0,1,3,0,0,0,1,3,0,0,0,1,2,4,4,5,4,7,7,8,7,10,0,0,0,1,3,3,4,4,5,4,7,7,8,7,10,10,11,10,13,3,16,16,16,16,18,18,19,19,20,22,19,25,25,25,25,26,26,26,26,27,27,27,27,29,29,29,30,30,30,31,31,32,34,31,37,37,37,37,39,40,37,37,27,27,26,26,25,25,18,43,16,16,0,0,0,1,0,0,0,1,3,3,4,3,6,8,0,0,0,1,3,3,3,3,4,4,4,4,6,6,7,7,7,7,8,8,8,8,10,10,11,11,11,11,12,12,12,12,13,13,13,13,15,13,13,12,12,11,11,10,8,8,7,7,6,19,4,4,3,3,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,6,6,5,5,4,4,3,3,0,0,0,1,1,2,2,2,2,4,2,2,1,7,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,18,16,16,15,15,14,14,13,13,12,12,11,11,10,10,9,9,0,0,0,1,1,2,2,2,2,4,2,2,1,7,9,9,10,12,12,12,12,14,14,15,15,16,15,18,18,18,18,20,20,21,20,23,18,18,14,26,12,12,9,29,29,29,29,30,30,30,30,31,31,31,31,32,32,32,32,34,34,35,35,35,35,36,36,36,36,38,38,39,39,39,39,41,41,42,41,39,39,38,45,45,45,45,46,46,46,46,47,47,47,47,48,48,48,48,50,50,51,50,53,53,53,53,55,55,56,55,58,58,59,58,61,61,61,61,62,62,62,62,63,63,63,63,65,65,66,65,68,68,68,68,70,70,70,70,72,72,73,72,75,75,75,75,76,76,76,76,77,77,77,77,78,78,78,78,79,79,79,79,80,80,80,80,81,81,81,81,83,81,81,80,80,79,79,78,78,77,77,76,76,75,75,70,70,68,68,63,63,62,62,61,61,53,53,48,48,47,47,46,46,45,45,36,36,35,35,34,86,32,32,31,31,30,30,29,29,0,0,0,1,3,3,3,3,5,5,6,6,6,6,7,7,7,7,9,9,9,10,10,10,11,11,11,12,12,13,12,15,7,7,6,6,5,18,3,3,0,0,0,1,1,2,2,2,2,4,2,2,1,7,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,15,13,13,12,12,11,11,10,10,9,9,0,0,0,1,1,2,2,2,2,4,2,2,1,7,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,14,12,12,11,11,10,10,9,9,0,0,0,1,2,4,4,5,4,7,9,9,10,9,12,14,14,14,14,15,15,15,15,17,17,17,17,18,18,18,18,19,19,19,19,21,21,21,21,23,23,23,23,25,25,26,25,27,27,28,29,31,31,32,31,27,35,35,36,36,36,36,37,37,37,37,39,39,40,39,42,42,42,42,43,43,43,43,45,45,46,45,47,47,48,50,47,53,53,53,53,55,53,53,43,43,42,42,37,37,36,36,35,58,58,58,58,60,60,61,60,64,64,64,64,66,66,66,66,67,67,67,67,69,69,70,70,70,70,71,71,71,71,72,72,72,72,74,72,72,71,71,70,70,69,77,77,78,78,79,78,81,77,84,67,67,66,66,64,64,58,58,23,23,21,21,19,19,18,18,17,17,15,15,14,14,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,6,6,7,7,7,7,9,7,7,6,12,12,12,12,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,20,20,21,21,21,21,23,21,21,20,26,18,18,17,17,16,16,15,15,14,29,29,29,29,31,31,31,32,32,33,33,34,33,32,38,38,39,39,39,39,40,40,40,40,42,42,43,42,45,45,45,45,46,46,46,46,47,47,47,47,49,49,49,50,50,51,50,53,53,53,53,54,54,54,54,55,55,55,55,56,56,56,56,58,56,56,55,55,54,54,53,53,47,47,46,46,45,45,40,40,39,39,38,61,29,29,12,12,4,4,2,2,1,1,0,0,0,1,1,2,2,3,3,3,3,4,4,4,4,6,4,4,3,3,2,7,7,8,7,9,9,10,9,1,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,18,20,20,21,20,24,26,26,26,26,28,26,26,16,16,15,15,14,14,13,13,0,0,0,1,3,0,0,0,1,3,3,3,3,5,5,6,6,7,6,5,11,3,3,0,0,0,1,3,3,4,3,6,8,8,8,8,10,10,11,11,11,11,13,13,14,16,13,19,19,19,19,20,20,20,20,22,22,23,24,22,25,25,26,25,20,20,19,19,11,11,10,29,8,8,0,0,0,1,0,0,0,1,2,3,5,5,5,5,7,7,8,7,10,5,5,0,0,0,1,3,3,4,3,6,0,0,0,1,3,3,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,13,11,11,10,10,9,9,8,8,7,7,6,6,5,5,4,14,14,15,15,15,15,17,15,15,14,3,19,19,20,20,20,20,22,20,20,19,23,23,24,23,0,0,0,1,3,3,4,3,5,5,6,6,6,6,8,10,6,6,5,11,11,12,11,0,0,0,1,2,4,4,5,5,6,5,4,9,0,0,0,1,3,3,3,3,5,5,6,5,9,3,3,0,0,0,1,2,4,4,4,4,5,5,5,5,7,9,9,10,10,11,10,12,12,13,12,9,16,5,5,4,4,0,0,0,1,2,4,4,4,4,6,6,7,6,10,4,4,0,0,0,1,1,1,1,3,3,4,6,6,7,6,3,8,8,9,8,10,10,11,10,13,13,14,14,14,14,16,18,14,14,13,21,23,23,23,23,24,24,24,24,25,25,25,25,26,26,26,26,27,27,27,27,28,28,28,28,29,29,29,29,31,29,29,28,28,27,27,26,26,25,25,24,24,23,23,1,1,0,0,0,1,3,3,3,3,5,5,6,6,7,6,9,9,9,9,11,9,9,5,14,3,3,0,0,0,1,3,0,0,0,1,2,3,5,0,0,0,1,2,4,0,0,0,1,2,4,0,0,0,1,2,4,0,0,0,1,2,4,4,5,4,7,0,0,0,1,3,0,0,0,1,3,0,0,0,1,3,3,4,3,6,6,6,6,8,8,9,9,9,9,11,11,12,11,13,13,14,14,14,14,15,15,15,15,17,15,15,14,14,13,9,9,8,21,6,6,0,0,0,1,2,3,5,0,0,0,1,1,2,1,4,4,5,4,7,7,7,7,9,9,10,9,12,7,7,0,0,0,1,1,2,1,4,4,5,4,7,7,8,8,8,9,9,9,10,10,10,11,11,12,11,7,15,0,0,0,1,1,2,1,4,4,5,4,7,7,8,8,8,9,9,9,10,10,11,10,7,14,0,0,0,1,0,0,0,1,1,2,1,4,4,5,4,7,7,8,7,10,10,11,10,13,13,14,13,16,16,17,16,19,0,0,0,1,1,2,1,4,4,5,4,7,7,8,7,10,0,0,0,1,1,1,1,3,1,1,0,0,0,1,1,2,1,3,3,4,3,7,0,0,0,1,1,2,1,4,0,0,0,1,1,2,1,4,0,0,0,1,1,2,1,4,4,5,4,7,0,0,0,1,1,2,1,4,4,5,4,7,0,0,0,1,0,0,0,1,1,2,1,4,4,5,4,7,7,8,8,9,8,7,12,0,0,0,1,1,2,1,4,4,5,5,5,5,7,5,5,4,10,0,0,0,1,0,0,0,1,1,1,1,3,3,4,3,6,6,7,6,9,1,1,0,0,0,1,1,2,1,4,4,5,4,7,7,8,7,10,0,0,0,1,1,2,1,4,0,0,0,1,1,1,1,3,3,4,3,6,6,7,6,9,1,1,0,0,0,1,1,2,1,4,4,5,4,7,7,7,7,9,9,9,10,10,10,11,11,12,11,14,14,15,15,16,15,14,19,7,7,0,0,0,1,1,2,1,4,4,5,4,7,7,8,8,9,8,11,11,11,11,13,13,14,13,11,11,7,17,0,0,0,1,0,0,0,1,1,2,1,4,4,5,4,7,0,0,0,1,1,2,1,4,4,4,4,6,6,7,6,9,9,10,10,11,10,13,13,13,13,15,15,16,15,13,13,9,19,4,4,0,0,0,1,1,2,1,4,4,4,4,6,6,7,6,9,9,10,9,12,12,13,13,14,13,16,16,17,16,19,19,20,19,22,22,23,22,12,26,4,4,0,0,0,1,1,2,1,4,4,5,4,7,7,8,7,9,9,10,9,13,0,0,0,1,2,4,4,4,4,6,4,4,0,0,0,1,1,2,1,4,4,4,4,6,4,4,0,0,0,1,1,2,1,4,4,5,4,7,7,8,7,10,10,10,10,11,11,11,11,13,13,14,13,16,16,16,16,18,16,16,11,11,10,10,0,0,0,1,1,2,1,4,4,5,4,7,7,7,7,9,9,10,9,12,12,12,12,14,12,12,7,7,0,0,0,1,1,2,1,4,0,0,0,1,1,2,1,4,4,5,4,7,7,8,8,9,8,7,12,0,0,0,1,1,2,1,4,0,0,0,1,1,2,1,4,4,5,4,7,7,8,7,10,0,0,0,1,0,0,0,1,1,2,1,4,4,5,4,7,0,0,0,1,1,2,1,4,4,5,4,7,0,0,0,1,0,0,0,1,1,2,1,4,4,5,4,7,7,8,7,10,10,10,10,12,10,10,0,0,0,1,1,2,1,4,4,5,4,7,7,7,7,9,9,10,9,12,12,12,12,14,12,12,7,7,0,0,0,1,1,2,1,4,4,4,4,6,4,4,0,0,0,1,1,2,1,4,0,0,0,1,1,2,1,4,4,5,4,7,7,8,8,9,8,7,12,0,0,0,1,1,2,1,4,0,0,0,1,1,2,1,4,4,5,4,7,7,7,7,9,7,7,0,0,0,1,1,1,1,3,1,1,0,0,0,1,1,2,1,4,4,5,4,7,0,0,0,1,1,2,1,4,4,5,4,7,7,8,7,10,0,0,0,1,0,0,0,1,1,2,1,4,4,5,4,7,7,7,7,9,9,10,9,12,12,13,13,14,13,16,12,19,7,7,0,0,0,1,1,2,1,4,0,0,0,1,1,2,1,4,0,0,0,1,0,0,0,1,1,2,1,4,4,5,4,7,7,8,8,9,8,7,12,0,0,0,1,1,2,1,4,4,5,4,7,7,8,7,10,0,0,0,1,1,2,1,4,4,5,4,7,0,0,0,1,1,2,1,4,4,5,4,7,7,8,7,10,10,11,10,13,13,14,13,16,0,0,0,1,3,3,4,3,6,8,0,0,0,1,3,0,0,0,1,3,0,0,0,1,0,0,0,1,2,4,0,0,0,1,2,4,0,0,0,1,1,2,2,3,4,2,5,5,6,6,6,6,8,8,9,9,9,9,11,11,12,14,11,17,9,9,8,20,6,6,5,1,24,24,25,25,25,25,26,26,26,26,27,27,27,27,28,28,28,28,30,28,28,27,27,26,26,25,25,24,33,33,34,34,34,34,36,36,37,37,37,37,39,37,37,36,40,40,41,40,42,42,43,42,45,45,46,45,49,49,49,49,50,50,50,50,51,51,51,51,52,52,52,52,54,54,55,55,55,55,57,57,58,57,60,60,61,60,63,63,63,63,65,65,66,65,67,67,67,70,70,71,70,73,63,63,55,55,54,76,52,52,51,51,50,50,49,49,34,34,33,79,79,80,79,82,83,84,85,86,87,89,89,90,89,91,91,92,91,93,93,94,93,96,98,98,99,99,100,100,100,100,102,100,100,99,98,106,106,107,107,107,107,109,107,107,106,110,110,111,111,112,112,113,115,112,111,119,110,120,120,121,120,0,0,0,1,2,4,4,4,4,6,6,7,7,7,7,9,11,7,7,6,14,4,4,0,0,0,1,2,4,4,5,4,7,7,8,7,10,10,11,10,13,13,13,13,15,13,13,0,0,0,1,2,4,4,5,4,7,7,8,7,10,10,11,10,13,13,13,13,15,13,13,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,7,7,6,6,5,5,4,4,0,0,0,1,0,0,0,1,2,4,0,0,0,1,0,0,0,1,2,4,4,4,4,6,6,7,6,9,4,4,0,0,0,0,0,0,1,2,4,4,4,4,6,6,7,7,8,7,10,10,10,10,12,10,10,6,15,4,4,0,0,0,1,3,0,0,0,1,3,3,3,3,5,3,3,0,0,0,1,3,0,0,0,1,0,0,0,1,3,3,3,3,5,5,6,6,7,6,9,9,10,9,11,11,12,14,11,5,18,18,19,18,21,3,3,0,0,0,1,2,4,4,4,4,6,6,7,6,9,4,4,0,0,0,1,3,3,4,4,4,4,6,6,7,7,8,7,10,6,13,4,4,3,16,17,18,20,0,0,0,1,3,3,4,4,4,4,6,6,7,7,8,7,10,6,13,4,4,3,16,17,18,20,0,0,0,1,3,0,0,0,1,1,1,1,2,2,2,2,4,2,2,1,1,0,0,0,1,3,3,3,3,4,4,4,4,6,6,7,6,9,11,4,4,3,3,0,0,0,1,1,2,1,4,0,0,0,1,3,3,4,3,6,8,8,8,8,10,10,11,11,11,11,13,15,11,11,10,18,8,8,0,0,0,1,2,4,4,4,4,6,8,8,9,8,4,4,0,0,0,1,2,4,0,0,0,1,2,3,5,5,6,5,8,0,0,0,1,1,2,1,4,5,7,7,7,7,8,8,8,8,10,10,11,10,13,8,8,7,7,0,0,0,1,2,4,4,4,4,6,6,7,7,8,7,10,6,13,4,4,0,0,0,1,2,4,4,5,4,7,8,10,10,10,10,12,14,10,10,0,0,0,1,2,4,0,0,0,1,2,3,5,5,5,5,7,7,8,7,11,5,5,0,0,0,1,2,3,5,5,6,6,6,6,8,6,6,5,9,9,10,10,10,10,12,12,13,13,14,13,15,15,16,15,12,19,10,10,9,20,20,21,20,0,0,0,1,3,0,0,0,1,3,0,0,0,1,3,3,4,3,6,6,6,6,7,7,7,7,8,8,8,8,10,10,11,11,12,12,12,12,14,12,12,11,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,22,22,22,22,24,22,22,21,21,20,20,19,19,18,18,17,17,10,27,8,8,7,7,6,6,0,0,0,1,0,0,0,1,3,3,4,3,6,8,8,9,8,11,13,13,14,15,17,17,17,17,18,18,18,18,20,20,21,21,21,21,23,23,24,24,24,24,26,27,24,24,23,28,28,29,29,29,29,31,29,29,28,21,21,20,35,18,18,17,17,13,38,38,39,40,41,43,43,43,43,45,45,46,46,46,46,48,48,49,48,51,46,46,45,54,43,43,38,57,57,57,57,59,57,57,0,0,0,1,2,3,5,0,0,0,1,3,3,4,3,6,8,8,9,9,9,9,11,13,9,9,8,16,0,0,0,1,2,4,4,4,4,6,6,7,7,7,7,8,8,8,8,10,10,11,10,13,8,8,7,7,6,4,4,0,0,0,1,2,4,0,0,0,1,2,4,4,4,4,6,4,4,0,0,0,1,3,3,3,3,5,7,7,8,8,8,8,10,8,8,7,13,15,15,15,15,17,19,15,15,3,3,0,0,0,1,3,3,4,4,5,4,6,6,7,6,3,8,8,9,9,10,11,13,13,13,13,15,15,16,16,16,16,18,16,16,15,21,13,13,9,24,24,25,24,27,27,27,27,28,28,28,28,30,30,31,31,31,31,32,32,32,32,33,33,33,33,35,33,33,32,32,31,31,30,38,40,40,41,41,41,41,43,41,41,40,46,28,28,27,27,8,0,0,0,1,0,0,0,1,3,3,4,3,6,6,7,6,9,0,0,0,1,0,0,0,1,3,3,4,3,6,6,6,6,8,6,6,0,0,0,1,3,3,3,3,5,5,6,6,6,6,8,8,9,9,10,12,9,15,15,15,15,17,15,15,8,20,6,6,5,23,3,3,0,0,0,1,2,4,4,5,5,5,5,7,5,5,4,10,0,0,0,1,2,4,4,5,5,5,5,7,5,5,4,10,0,0,0,1,2,4,4,4,4,6,6,7,6,9,4,4,0,0,0,1,2,4,4,5,4,7,0,0,0,1,2,4,4,4,4,6,6,7,7,7,7,9,7,7,6,12,4,4,0,0,0,1,3,3,3,3,5,3,3,0,0,0,1,0,0,0,1,2,4,4,4,4,6,8,8,9,9,9,9,11,9,9,8,4,4,0,0,0,1,3,3,4,6,6,6,6,8,8,9,9,9,9,11,11,12,12,12,12,14,14,15,14,17,17,17,17,19,17,17,12,12,11,22,9,9,8,25,6,6,3,28,28,29,31,31,31,31,32,32,32,32,34,34,35,35,36,36,36,36,38,36,36,35,39,39,40,39,41,41,42,41,34,45,45,45,45,47,47,48,47,51,51,52,52,52,52,54,52,52,51,57,45,45,32,32,31,31,28,60,60,60,60,61,61,61,61,62,62,62,62,64,64,65,65,65,65,66,66,66,66,68,70,70,70,70,72,70,70,66,66,65,65,64,75,75,75,75,77,77,78,78,78,78,80,78,78,77,83,83,83,83,84,84,84,84,86,88,88,88,88,90,90,91,91,91,91,93,91,91,90,96,96,96,96,98,99,101,101,101,101,103,103,104,104,104,104,105,105,105,105,107,107,108,108,108,108,110,108,108,107,113,113,113,113,115,113,113,105,105,104,104,103,118,120,101,101,96,96,88,88,84,84,83,83,75,75,62,62,61,61,60,60,0,0,0,1,1,1,1,3,1,1,0,0,0,1,3,3,4,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,12,12,13,13,13,13,15,13,13,12,18,18,19,19,19,19,21,19,19,18,24,24,25,25,25,25,26,26,26,26,28,26,26,25,25,24,31,31,32,32,32,32,33,33,33,33,35,33,33,32,32,31,38,38,39,39,39,39,40,40,40,40,42,40,40,39,39,38,45,45,46,46,46,46,47,47,47,47,49,47,47,46,46,45,52,52,52,52,53,53,53,53,55,53,53,52,52,10,10,9,9,8,8,7,7,6,6,3,58,58,58,58,60,60,61,60,63,63,64,64,64,64,65,65,65,65,67,65,65,64,64,63,70,70,70,70,71,71,71,71,73,71,71,70,70,58,58,0,0,0,1,3,3,4,3,6,8,8,8,8,9,9,9,9,11,9,9,8,8,0,0,0,1,1,1,1,3,1,1,0,0,0,1,1,2,2,2,2,4,2,2,1,7,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,16,14,14,13,13,12,12,11,11,10,10,9,9,0,0,0,1,3,3,4,3,6,8,8,8,8,9,9,9,9,11,9,9,8,8,0,0,0,1,3,0,0,0,1,3,3,4,4,5,4,7,7,7,7,9,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,17,17,18,18,18,18,20,18,18,17,21,21,22,22,22,22,23,23,23,23,25,26,23,23,22,22,21,15,15,14,14,13,13,12,12,11,30,32,7,7,3,33,33,34,34,35,34,37,37,37,37,39,41,41,42,42,42,42,43,43,43,43,44,44,44,44,46,46,47,46,49,49,50,50,50,50,52,50,50,49,53,53,54,54,54,54,55,55,55,55,57,58,59,55,55,54,54,53,44,44,43,43,42,42,41,63,65,37,37,33,66,66,67,66,68,68,69,68,70,70,71,70,0,0,0,1,3,3,4,3,6,8,8,8,8,9,9,9,9,11,11,12,11,14,14,14,14,15,15,15,15,16,16,16,16,18,18,19,19,19,19,21,21,22,21,24,19,19,18,27,27,28,27,30,32,16,16,15,15,14,14,9,9,8,8,0,0,0,1,3,0,0,0,1,3,3,3,3,5,7,3,3,0,0,0,1,3,0,0,0,1,3,0,0,0,1,3,0,0,0,1,3,3,3,3,5,7,3,3,0,0,0,1,3,0,0,0,1,3,3,3,3,5,7,3,3,0,0,0,1,3,0,0,0,1,3,0,0,0,1,3,0,0,0,1,3,0,0,0,1,3,0,0,0,1,2,4,0,0,0,1,3,3,4,3,6,6,7,6,9,9,10,9,12,0,0,0,1,2,4,4,4,4,6,6,7,6,9,4,4,0,0,0,1,3,3,3,3,4,4,4,4,6,7,8,9,10,11,12,13,14,15,16,18,4,4,3,3,0,0,0,1,3,3,4,6,6,6,6,8,8,9,9,9,9,11,9,9,8,14,6,6,3,17,17,18,20,20,20,20,21,21,21,21,22,22,22,22,23,23,23,23,24,24,24,24,26,26,27,27,27,27,29,27,27,26,32,34,24,24,23,23,22,22,21,21,20,20,17,37,37,38,38,38,38,40,40,41,40,43,43,43,43,45,45,46,45,48,43,43,38,38,37,51,51,51,51,52,52,52,52,54,54,55,55,55,55,57,57,58,57,55,55,54,61,61,61,61,63,65,61,61,52,52,51,51,0,0,0,1,2,3,4,6,8,8,8,8,10,12,12,12,12,13,13,13,13,14,14,14,14,16,14,14,13,13,12,12,8,8,0,0,0,1,2,3,4,6,8,0,0,0,1,2,3,4,6,7,9,9,9,9,11,9,9,0,0,0,1,2,3,4,6,7,9,9,9,9,11,9,9,0,0,0,1,2,3,4,6,6,6,6,7,7,7,7,9,9,10,10,10,10,11,11,11,11,13,14,16,11,11,10,10,9,19,21,21,21,21,23,25,25,25,25,26,26,26,26,27,27,27,27,29,30,32,27,27,26,26,25,25,21,21,7,7,6,6,0,0,0,1,2,3,4,6,8,8,8,8,9,9,9,9,10,10,10,10,12,10,10,9,9,8,8,0,0,0,1,2,3,4,6,7,9,9,9,9,11,9,9,0,0,0,1,2,3,4,6,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,13,14,16,11,11,10,10,9,9,8,8,0,0,0,1,2,3,4,6,0,0,0,1,2,3,4,6,0,0,0,1,2,3,4,6,0,0,0,1,2,3,4,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,15,16,18,13,13,12,12,11,11,10,10,9,9,8,8,7,7,6,6,0,0,0,1,2,3,4,6,0,0,0,1,2,3,4,6,0,0,0,1,2,3,4,6,0,0,0,1,2,3,4,6,7,9,9,9,9,11,13,13,13,13,15,13,13,9,9,0,0,0,1,2,3,4,6,7,9,9,9,9,11,13,13,13,13,15,13,13,9,9,0,0,0,1,2,3,4,6,7,9,0,0,0,1,2,3,4,6,8,8,8,8,10,10,11,10,12,12,13,13,13,13,15,13,13,12,18,8,8,0,0,0,1,2,3,4,6,7,9,9,9,9,10,10,10,10,12,10,10,9,9,0,0,0,1,2,3,4,6,8,8,8,8,9,9,9,9,11,9,9,8,8,0,0,0,1,2,3,4,6,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,13,14,16,11,11,10,10,9,9,8,8,0,0,0,1,2,3,4,6,7,9,0,0,0,1,2,3,4,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,13,14,16,11,11,10,10,9,9,8,8,7,7,6,6,0,0,0,1,2,3,4,6,8,8,9,9,9,9,11,9,9,8,14,14,14,14,15,15,15,15,17,15,15,14,14,0,0,0,1,2,3,5,5,5,5,7,7,8,8,8,8,10,12,8,8,7,15,15,15,15,16,16,16,16,18,18,18,18,19,19,19,19,21,22,24,19,19,18,18,16,16,15,15,5,5,0,0,0,1,2,3,4,5,7,9,9,9,9,11,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,18,16,16,15,15,14,14,13,13,9,9,0,0,0,1,2,3,4,5,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,15,16,18,13,13,12,12,11,11,10,10,9,9,8,8,7,7,0,0,0,1,2,3,4,5,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,14,15,17,12,12,11,11,10,10,9,9,8,8,7,7,0,0,0,1,2,3,4,5,7,7,8,10,10,11,10,13,13,14,14,14,14,16,18,18,18,18,19,19,19,19,21,22,24,19,19,18,18,14,14,13,27,7,30,30,30,30,31,31,31,31,33,35,35,35,35,36,36,36,36,37,37,37,37,38,38,38,38,39,39,39,39,40,40,40,40,41,41,41,41,42,42,42,42,44,45,47,42,42,41,41,40,40,39,39,38,38,37,37,36,36,35,35,31,31,30,30,0,0,0,1,2,4,4,5,6,8,8,8,8,10,10,11,11,11,11,13,11,11,10,16,8,8,4,19,19,20,19,21,21,22,24,21,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,10,8,8,7,7,6,6,5,5,4,4,0,0,0,1,3,3,3,3,5,3,3,0,0,0,1,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,10,11,13,13,14,14,15,17,14,20,20,20,20,22,20,20,13,25,25,25,25,27,29,29,30,30,30,30,32,32,33,33,33,33,35,33,33,32,30,30,29,39,39,40,39,42,25,25,8,8,7,7,6,6,5,5,4,4,3,45,45,46,46,46,46,47,47,47,47,48,48,48,48,49,49,49,49,50,50,50,50,52,54,54,54,54,56,56,57,56,54,54,50,50,49,49,48,48,47,47,46,46,45,0,0,0,1,2,4,4,5,7,7,7,7,8,8,8,8,9,9,9,9,11,11,12,12,12,12,14,14,15,16,14,17,17,18,17,12,12,11,21,21,21,21,23,23,24,24,24,24,26,24,24,23,29,29,29,29,30,30,30,30,31,31,31,31,33,31,31,30,30,29,29,21,21,9,9,8,8,7,7,4,36,36,36,36,37,37,37,37,39,39,40,40,40,40,42,40,40,39,45,37,37,36,36,0,0,0,1,3,3,3,3,5,5,6,8,8,8,8,10,10,11,10,13,13,13,13,15,17,13,13,8,8,5,20,20,20,20,22,22,23,22,26,26,26,26,27,27,27,27,28,28,28,28,30,30,31,31,31,31,32,32,32,32,34,34,35,34,37,37,37,37,39,40,37,37,32,32,31,31,30,43,43,43,43,45,45,46,46,46,46,47,47,47,47,48,48,48,48,49,49,49,49,50,50,50,50,51,51,51,51,53,53,54,54,54,54,56,54,54,53,59,51,51,50,50,49,49,48,48,47,47,46,46,45,62,62,62,62,63,63,63,63,65,67,67,67,67,68,68,68,68,70,72,72,72,72,73,73,73,73,75,77,77,77,77,78,78,78,78,80,82,84,78,78,77,77,73,73,72,72,68,68,67,67,63,63,62,62,43,43,28,28,27,27,26,26,20,20,3,3,0,0,0,1,1,1,1,3,3,4,4,5,5,5,5,7,5,5,4,10,3,13,13,13,13,14,14,14,14,15,15,15,15,17,17,18,18,18,18,19,19,19,19,21,23,23,23,23,25,23,23,19,19,18,18,17,28,28,28,28,29,29,29,29,31,29,29,28,28,15,15,14,14,13,13,1,1,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,13,13,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,21,19,19,18,18,17,17,16,16,15,15,14,14,13,24,11,11,10,10,9,9,8,8,7,7,6,6,5,5,4,4,0,0,0,1,2,4,4,5,5,6,5,8,8,9,8,11,11,12,11,14,4,17,17,17,17,19,19,20,20,21,21,21,21,22,22,22,22,24,22,22,21,21,20,27,27,27,27,28,28,28,28,29,29,29,29,31,33,29,29,28,28,27,27,19,36,36,36,36,37,37,37,37,39,37,37,36,36,17,17,0,0,0,1,2,4,4,5,5,6,5,8,8,9,8,11,4,14,14,14,14,15,15,15,15,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,22,22,22,22,24,24,24,24,25,25,25,25,27,27,28,29,27,32,32,33,34,36,36,36,36,37,37,37,37,38,38,38,38,39,39,39,39,41,43,43,43,43,44,44,44,44,45,45,45,45,46,46,46,46,48,50,50,50,50,51,51,51,51,52,52,52,52,53,53,53,53,55,57,57,57,57,58,58,58,58,59,59,59,59,60,60,60,60,62,64,60,60,59,59,58,58,57,57,53,53,52,52,51,51,50,50,46,46,45,45,44,44,43,43,39,39,38,38,37,37,36,36,32,65,65,66,66,66,66,67,67,67,67,69,67,67,66,66,65,25,25,24,24,22,22,21,21,20,20,19,19,18,18,17,73,15,15,14,14,0,0,0,1,2,4,4,4,4,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,12,12,13,12,15,15,15,15,17,17,18,18,19,18,17,22,22,22,22,23,23,23,23,25,23,23,22,22,15,15,10,10,9,9,8,8,7,7,6,28,4,4,0,0,0,1,2,4,4,5,6,7,8,9,11,11,12,12,13,12,15,15,15,15,16,16,16,16,18,18,19,18,21,23,16,16,15,15,11,26,26,26,26,27,27,27,27,29,29,30,29,32,34,27,27,26,26,4,37,37,37,37,38,38,38,38,39,39,39,39,40,40,40,40,42,42,43,42,44,44,45,47,44,40,40,39,39,38,38,37,37,0,0,0,1,2,4,4,4,4,6,6,7,7,7,7,8,8,8,8,10,10,11,12,10,15,15,15,15,16,16,16,16,17,17,17,17,19,17,17,16,16,15,15,8,8,7,7,6,22,22,22,22,23,23,23,23,25,23,23,22,22,4,4,0,0,0,1,3,3,4,3,6,6,7,6,9,9,10,9,12,12,13,12,15,15,16,16,16,16,18,20,20,20,20,21,21,21,21,23,24,26,21,21,20,20,16,16,15,29,29,29,29,31,33,29,29,0,0,0,1,1,1,1,2,2,2,2,4,2,2,1,1,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,5,7,5,5,4,4,3,3,0,0,0,1,2,3,5,0,0,0,1,3,0,0,0,1,2,3,5,0,0,0,5,5,5,5,7,5,5,0,0,0,1,3,3,3,3,5,3,3,0,0,0,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,18,16,16,15,15,14,14,13,13,12,12,11,2,22,0,0,0,1,1,1,1,3,1,1,0,0,0,1,1,1,1,3,3,4,4,5,4,6,6,7,6,8,8,9,8,3,12,12,12,12,14,14,15,14,16,16,17,16,18,18,19,18,20,20,21,20,22,22,23,22,24,24,25,24,26,26,27,26,28,28,29,28,30,30,31,30,32,32,33,33,33,33,34,34,34,34,36,34,34,33,33,32,37,37,38,37,12,12,1,1,0,0,0,1,2,4,0,0,0,1,3,3,3,3,5,7,7,7,7,9,11,11,11,11,12,12,12,12,14,12,12,11,11,7,7,3,3,0,0,0,1,3,0,0,0,1,0,0,0,1,3,3,3,3,5,5,6,6,7,6,8,8,9,9,9,9,11,9,9,8,12,12,13,12,5,16,3,3,0,0,0,1,3,3,3,3,4,4,4,4,6,4,4,3,3,0,0,0,1,3,3,4,3,6,8,8,8,8,9,9,9,9,10,10,10,10,12,14,14,15,15,15,15,17,17,18,20,17,23,23,24,24,25,24,23,15,15,14,28,10,10,9,9,8,8,0,0,0,1,3,3,3,3,4,4,4,4,6,4,4,3,3,0,0,0,1,3,4,0,0,0,1,3,3,3,3,5,5,6,6,6,6,8,6,6,5,11,3,3,0,0,0,1,3,3,3,3,5,3,3,0,0,0,1,2,4,4,5,5,5,5,7,7,8,7,5,5,4,11,11,11,11,13,13,14,13,16,11,11,0,0,0,1,3,3,3,3,5,3,3,0,0,0,1,2,4,0,0,0,1,2,4,4,5,5,6,6,6,6,7,7,7,7,9,11,7,7,6,6,5,4,15,15,15,15,16,16,16,16,17,17,17,17,19,17,17,16,16,15,15,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,5,7,5,5,4,4,3,3,0,0,0,1,1,1,1,3,1,1,0,0,0,1,1,2,1,4,4,4,4,5,5,5,5,6,6,6,6,8,8,9,8,11,6,6,5,5,4,4,0,0,0,1,1,2,1,4,4,4,4,5,5,5,5,6,6,6,6,8,8,9,8,11,6,6,5,5,4,4,0,0,0,1,1,2,1,4,4,4,4,5,5,5,5,6,6,6,6,8,6,6,5,5,4,4,0,0,0,1,1,2,2,2,2,4,4,5,4,6,6,7,6,10,10,10,10,12,12,13,13,13,13,15,15,16,15,17,17,18,20,17,13,13,12,24,26,10,10,2,2,1,27,27,28,28,29,28,30,30,31,30,34,27,35,35,36,35,0,0,0,1,1,2,3,5,5,5,5,7,9,9,9,9,10,10,10,10,12,14,14,14,14,16,17,19,19,19,19,21,23,23,23,23,24,24,24,24,26,28,24,24,23,23,19,19,14,14,10,10,9,9,5,5,1,31,32,33,34,35,36,37,39,0,0,0,1,3,0,0,0,1,1,1,1,3,1,1,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,13,13,14,13,16,16,17,16,19,11,11,10,10,9,9,8,8,7,7,6,6,5,5,4,4,3,3,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,7,7,8,8,8,8,9,9,9,9,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,17,15,15,14,14,13,13,12,12,11,11,9,9,8,8,7,20,3,3,2,2,1,1,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,7,7,8,7,3,3,2,2,1,1,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,5,7,5,5,4,4,3,3,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,5,7,5,5,4,4,3,3,0,0,0,1,1,1,1,3,1,1,0,0,0,1,3,0,0,0,1,3,0,0,0,1,3,3,3,3,5,3,3,0,0,0,1,3,0,0,0,1,1,2,1,4,5,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,13,13,14,13,11,11,10,10,9,9,8,8,7,0,0,0,1,0,0,0,1,3,0,0,0,1,3,3,3,3,4,4,4,4,6,6,7,9,9,10,9,6,14,4,4,3,3,0,0,0,1,1,2,2,2,2,4,4,5,5,5,5,6,6,6,6,8,10,10,10,10,12,10,10,6,6,5,5,4,15,2,2,1,18,18,19,19,20,19,22,22,22,22,23,23,23,23,25,23,23,22,22,18,28,28,28,28,29,29,29,29,31,31,32,34,31,37,37,37,37,39,39,40,42,39,45,45,45,45,47,47,48,47,50,50,50,50,51,51,51,51,52,52,52,52,54,56,56,57,58,56,52,52,51,51,50,50,45,45,37,37,29,29,28,28,0]
const contents={"0":[303,304,305,305,305,305,306,307],"1":[308,304,309,305,310,305,311,312,305,313,307],"2":[314,315,316,305,317,305,311,318,305,313,307],"3":[319,320,305,321,307],"4":[322,323,324,325,305,326,327,328,329,305,330,331,305,332,305,326,333,334,307],"5":[335,336,337,305,338,339,340,307],"6":[341,342,307],"7":[343,344,305,345,307],"8":[346,347,348,305,349,305,350,305,351,352,305,353,307],"9":[354,347,305,355,356,305,348,305,357,358,305,351,359,305,360,307],"10":[361,320,305,362,363,305,364,365,305,366,305,367,368,369,305,370,371,305,372,305,373,340,305,313,307],"11":[374,320,305,362,305,375,376,377,378,305,379,340,305,313,307],"12":[380,304,309,381,382,305,383,384,305,385,384,305,386,307],"13":[387,320,305,388,307],"14":[389,320,305,390,307],"15":[391,392,393,305,394,395,396,397,305,398,399,305,400,340,305,401,402,403,404,305,405,340,305,406,407,403,404,305,408,340,305,409,410,403,404,305,411,340,305,412,413,414,305,415,307],"16":[416,417,418,419,420,421,305,422,419,340,305,423,307],"17":[424,392,305,425,307],"18":[426,336,305,427,307],"19":[428,429,305,430,307],"20":[431,429,432,305,433,434,305,435,436,305,437,307],"21":[438,336,305,439,440,441,305,442,443,305,444,443,305,384,340,305,445,305,375,446,447,305,448,449,305,450,451,452,305,453,454,455,456,305,448,449,305,457,305,458,459,340,305,460,307],"22":[461,462,307],"23":[463,347,305,464,465,305,432,305,466,307],"24":[467,320,305,468,363,305,469,470,471,305,472,473,474,475,305,476,449,340,305,313,307],"25":[477,320,305,478,479,480,481,305,313,307],"26":[482,483,484,305,485,340,305,304,305,486,487,488,489,490,491,492,493,305,494,307],"27":[495,483,496,305,497,340,305,320,305,498,499,305,500,305,501,502,503,305,504,305,505,503,305,506,449,305,507,340,305,508,509,510,511,305,512,470,513,305,514,515,305,516,503,449,305,517,518,519,520,305,521,522,305,523,305,524,525,305,526,448,305,527,528,529,305,530,448,305,531,305,532,305,533,448,305,534,535,536,537,538,539,540,305,541,340,305,313,307],"28":[542,320,305,543,305,544,545,546,305,547,548,549,455,550,305,551,340,305,313,307],"29":[552,483,553,305,554,340,305,320,305,511,555,556,557,558,305,559,307],"30":[560,483,561,305,562,340,305,320,305,511,555,556,563,305,564,307],"31":[565,566,567,305,568,569,305,570,305,571,572,305,573,305,508,445,305,574,575,576,305,577,305,578,305,579,580,581,582,583,305,584,585,340,305,586,587,588,305,589,590,305,591,592,305,593,594,455,595,305,594,449,305,596,305,597,340,305,598,305,599,600,340,305,601,305,602,603,305,604,470,605,606,305,607,340,305,599,608,448,305,609,340,305,313,307],"32":[610,611,612,305,613,305,614,615,305,616,340,305,617,305,618,619,620,621,622,305,623,624,305,625,449,305,626,340,305,627,305,323,327,628,629,449,340,305,630,470,631,305,632,448,305,633,634,635,305,514,636,637,305,638,639,640,641,305,642,340,305,643,307],"33":[644,645,514,646,647,305,648,636,649,455,650,340,305,651,652,653,654,305,655,305,656,657,340,305,658,305,659,305,313,307],"34":[660,304,305,661,307],"35":[662,336,305,508,305,375,663,664,449,340,305,313,307],"36":[665,320,305,355,666,305,667,305,508,305,375,668,305,669,670,305,448,449,305,671,672,305,673,674,675,455,670,340,305,313,307],"37":[676,677,307],"38":[678,304,309,679,305,680,305,311,681,305,313,307],"39":[682,336,305,355,683,305,684,307],"40":[685,429,305,323,686,687,688,689,690,691,692,693,305,694,455,695,305,694,449,327,696,305,697,333,334,307],"41":[698,699,305,700,701,702,703,305,704,305,507,333,334,307],"42":[705,336,667,305,375,706,441,340,305,386,307],"43":[707,320,305,508,305,375,609,340,305,313,307],"44":[708,336,432,305,709,710,305,711,305,599,712,713,455,714,340,305,313,307],"45":[715,336,432,305,716,305,717,718,340,305,719,307],"46":[720,721,305,323,722,305,723,724,327,725,333,334,305,483,726,305,697,305,727,340,305,320,305,728,729,730,731,730,732,733,305,734,307],"47":[735,320,305,736,305,737,738,448,305,739,305,740,340,305,313,307],"48":[741,347,305,742,307],"49":[743,744,745,746,305,747,307],"50":[748,304,309,305,749,307],"51":[750,304,309,305,751,307],"52":[752,744,745,305,753,307],"53":[754,336,348,305,755,756,305,757,307],"54":[758,336,305,759,307],"55":[760,304,305,761,307],"56":[762,320,305,355,763,305,445,305,764,765,305,766,767,455,768,769,305,767,449,340,305,770,307],"57":[771,336,348,772,305,773,307],"58":[774,775,384,305,776,384,305,777,305,778,384,305,779,307],"59":[780,775,384,305,776,384,305,375,781,782,783,455,441,340,305,386,307],"60":[784,775,384,305,776,384,305,375,785,786,455,441,340,305,386,307],"61":[787,788,307],"62":[789,790,791,305,792,791,305,793,791,305,794,791,305,795,791,305,796,791,305,797,307],"63":[798,775,384,305,776,791,305,799,791,305,797,307],"64":[800,801,305,802,307],"65":[803,804,805,806,384,340,305,386,307],"66":[807,775,384,305,808,307],"67":[809,810,384,305,811,307],"68":[812,700,791,305,813,791,305,797,307],"69":[814,815,791,305,464,791,305,797,307],"70":[816,817,307],"71":[818,775,384,305,776,384,305,375,819,441,340,305,386,307],"72":[820,821,822,305,823,824,305,825,340,305,797,307],"73":[826,827,307],"74":[828,801,305,829,384,305,830,384,305,386,307],"75":[831,775,791,305,790,791,305,799,791,305,797,307],"76":[832,821,833,305,797,307],"77":[834,801,305,829,384,305,835,384,305,386,307],"78":[836,775,384,305,776,384,305,837,305,838,839,333,384,305,375,840,441,340,305,386,307],"79":[841,775,384,305,776,384,305,764,842,448,305,843,305,844,441,340,305,386,307],"80":[845,846,307],"81":[847,848,791,305,849,791,305,797,307],"82":[850,775,384,305,777,305,851,384,305,599,852,441,305,853,305,854,441,340,305,386,307],"83":[855,775,384,305,856,305,857,384,305,858,384,305,599,842,448,305,840,441,305,859,441,305,860,441,340,305,386,307],"84":[861,775,384,305,776,384,305,804,862,806,384,340,305,386,307],"85":[863,336,348,305,349,305,864,307],"86":[865,775,384,305,866,305,867,307],"87":[868,775,384,305,869,384,305,870,384,305,871,872,305,873,384,305,874,305,875,307],"88":[876,775,384,305,877,384,305,878,305,879,384,305,880,305,881,307],"89":[882,464,883,305,797,307],"90":[884,775,384,305,776,384,305,375,885,441,340,305,386,307],"91":[886,821,887,305,797,307],"92":[888,889,791,305,792,791,305,793,791,305,797,307],"93":[890,891,307],"94":[892,483,791,305,893,791,305,797,307],"95":[894,889,791,305,792,791,305,797,307],"96":[895,896,307],"97":[897,898,384,305,899,384,305,900,384,305,801,305,901,307],"98":[902,775,384,305,877,384,305,878,305,903,384,305,880,305,881,307],"99":[904,893,384,305,801,305,905,307],"100":[906,907,384,305,908,307],"101":[909,775,384,305,776,384,305,375,910,441,340,305,386,307],"102":[911,821,912,305,797,307],"103":[913,775,384,305,776,384,305,914,305,915,307],"104":[916,801,305,917,307],"105":[918,919,791,305,920,791,305,797,307],"106":[921,775,384,305,799,791,305,920,791,305,797,307],"107":[922,923,307],"108":[924,775,384,305,776,384,305,856,305,778,384,305,599,925,448,305,384,340,305,386,307],"109":[926,464,927,305,797,307],"110":[928,929,930,305,797,307],"111":[931,932,307],"112":[933,775,384,305,776,384,305,375,934,441,340,305,386,307],"113":[935,810,384,305,936,791,305,937,791,305,797,307],"114":[938,464,791,305,700,791,305,797,307],"115":[939,775,384,305,776,384,305,940,384,305,941,384,305,942,384,305,386,307],"116":[943,336,305,355,944,305,745,305,945,307],"117":[946,320,305,947,307],"118":[948,429,305,949,307],"119":[950,951,307],"120":[952,304,309,305,953,307],"121":[954,304,309,305,955,307],"122":[956,957,958,959,960,961,962,305,963,964,305,965,966,305,967,968,305,969,970,305,971,449,340,305,972,973,974,975,976,305,977,340,305,978,979,305,514,515,305,980,636,981,455,650,305,982,983,449,305,984,985,986,987,305,988,989,305,990,503,305,991,503,305,992,305,993,994,995,970,305,996,503,305,997,449,305,998,340,305,999,1000,305,1001,1002,1003,1004,1005,1006,305,323,1007,327,1008,333,334,305,1009,305,737,1010,1011,305,1012,449,340,305,323,1013,305,1014,327,1015,1016,1017,305,1018,970,449,305,1019,333,334,307],"123":[1020,336,667,305,508,305,375,1021,305,1022,305,609,340,305,313,307],"124":[1023,320,745,305,776,384,305,1024,384,305,1025,384,305,1026,305,1027,307],"125":[1028,320,745,305,776,384,305,1024,384,305,1025,384,305,1029,305,1027,307],"126":[1030,320,745,305,1031,1032,1033,1034,305,1035,307],"127":[1036,1037,307],"128":[1038,744,1039,305,1040,307],"129":[1041,1042,307],"130":[1043,304,309,305,1044,305,311,1045,305,313,307],"131":[1046,307],"132":[1047,744,745,305,736,305,1048,1049,448,305,1050,305,740,340,305,313,307],"133":[1051,744,305,1052,307],"134":[1053,744,305,1054,305,1055,307],"135":[1056,744,305,1057,307],"136":[1058,1059,307],"137":[1060,1061,305,1062,305,1063,1064,419,305,1065,1066,1067,1068,305,1069,449,340,305,1070,334,305,1071,307],"138":[1072,315,316,305,1073,305,311,1074,305,313,307],"139":[1075,1076,305,1077,1078,305,1079,1080,1081,305,1082,449,305,1083,340,305,320,745,1084,305,1085,307],"140":[1086,1076,305,1077,1078,305,1079,1080,1087,305,1088,449,305,1089,340,305,320,745,1084,305,1090,307],"141":[1091,320,305,1092,307],"142":[1093,1094,1095,305,1096,307],"143":[1097,320,305,1098,1099,305,778,1100,305,1101,305,1102,307],"144":[1103,1104,1105,305,1106,307],"145":[1107,336,305,355,1108,305,348,305,357,305,1109,1110,305,1111,305,507,340,305,1112,307],"146":[1113,336,337,305,1114,305,1115,305,599,1116,340,307],"147":[1117,336,432,305,1118,307],"148":[1119,744,745,1120,305,1121,334,305,1122,307],"149":[1123,483,1124,305,304,393,305,1125,1126,305,1077,1127,305,313,307],"150":[1128,336,667,305,508,305,375,1129,448,305,609,340,305,313,307],"151":[1130,336,348,305,351,1131,305,1084,772,305,1132,305,1133,305,1134,307],"152":[1135,320,348,305,1136,307],"153":[1137,320,745,1138,305,1139,305,1140,1141,340,305,313,307],"154":[1142,347,745,1138,305,464,1143,305,1144,1145,500,305,501,1146,1147,1148,1149,449,305,507,333,334,307],"155":[1150,336,305,1151,307],"156":[1152,304,305,1153,307],"157":[1154,320,305,355,1155,305,362,1156,1157,305,1158,1159,1160,305,1161,449,305,1162,1163,1164,1165,1166,372,305,373,340,305,313,307],"158":[1167,1168,307],"159":[1169,320,305,355,1170,305,667,305,351,1171,305,1172,305,1173,499,1174,305,500,1175,305,1176,1177,305,1178,1179,305,1180,1181,1148,1182,305,1180,970,449,305,507,340,305,1183,499,1174,1184,305,1185,305,1186,1187,305,1188,1189,305,674,449,305,507,340,305,1190,305,1191,307],"160":[1192,744,745,1120,305,353,307],"161":[1193,336,305,355,1194,305,348,305,1109,1195,305,1196,305,507,340,305,1197,307],"162":[1198,304,393,305,1199,305,1200,1201,1202,305,1203,550,305,1204,340,307],"163":[1205,347,348,305,1206,307],"164":[1207,347,348,305,357,305,1208,307],"165":[1209,347,305,1210,305,1211,305,351,1212,305,1213,340,305,1214,305,1215,305,1216,305,1217,307],"166":[1218,699,305,700,1079,1219,455,1220,702,1221,1222,1222,305,1223,305,1224,1225,305,1226,970,305,1227,449,305,1079,1228,305,703,1229,305,1230,1231,1232,1233,305,1234,449,305,1235,305,1236,1237,305,1238,449,305,507,340,307],"167":[1239,1240,307],"168":[1241,320,305,355,1242,305,776,1243,305,1244,307],"169":[1245,1246,307],"170":[1247,320,305,1248,1249,305,1250,305,1251,307],"171":[1252,320,305,1139,305,1253,1229,305,1254,1255,1256,305,503,970,305,1257,305,767,449,305,1258,340,305,313,307],"172":[1259,320,745,305,1260,1261,305,1262,340,305,1263,307],"173":[1264,320,745,305,1265,1261,305,1266,340,305,1263,307],"174":[1267,304,309,305,1268,305,311,1269,305,313,307],"175":[1270,336,348,305,755,756,305,1271,307],"176":[1272,336,745,305,508,305,375,1273,305,1274,340,305,313,307],"177":[1275,336,305,1276,305,1277,307],"178":[1278,1279,307],"179":[1280,336,745,305,1281,305,711,305,1282,1283,305,339,340,307],"180":[1284,336,305,1285,499,305,500,305,501,1286,305,1287,1288,305,1289,1290,305,1291,305,1292,970,305,1293,449,305,507,340,305,1294,499,305,500,1229,305,501,1295,1296,305,1297,1298,1256,1148,1299,449,305,1300,305,1236,1301,449,305,1236,1302,305,1303,449,305,507,340,305,1304,1305,1306,305,1307,1308,1309,305,1310,305,1311,305,1312,340,305,1313,305,1314,1315,305,1316,340,305,445,1317,305,1318,305,1319,305,1314,1320,305,1321,340,305,1322,305,1323,1318,305,1324,305,1325,470,1326,305,1327,1328,305,1329,449,305,1330,305,459,340,305,1318,305,770,307],"181":[1331,1332,305,1333,307],"182":[1334,1335,305,1336,1337,305,1338,1339,1340,1341,1342,305,1343,1344,305,1345,449,305,1346,1347,305,1345,449,305,1348,1349,1350,305,1351,449,305,1352,1353,1350,305,1354,449,305,1355,1356,1350,305,1357,449,305,1358,1359,1350,305,1351,449,305,1360,1361,305,1362,340,305,1363,305,1364,1365,305,1366,1367,1368,305,1369,340,305,1370,1371,305,1372,307],"183":[1373,1061,305,355,1374,305,348,305,1375,1376,305,1377,307],"184":[1378,1379,305,1380,307],"185":[1381,483,484,305,1382,340,305,304,305,486,487,1383,1384,1385,491,305,1386,307],"186":[1387,1061,305,355,1388,305,309,305,1375,1376,305,1389,307],"187":[1390,392,305,1391,307],"188":[1392,429,305,700,1393,1394,305,1229,305,1395,305,1230,473,1396,1397,1398,305,1399,1400,305,1297,1148,1401,1402,305,1403,1297,970,449,305,1404,305,1405,702,1393,1406,305,1229,305,1407,305,1230,1408,1397,1409,305,1410,1411,305,1399,1412,305,1297,1148,1413,1402,305,1403,1297,1414,970,449,305,1404,305,1405,1415,1416,420,1417,333,1418,307],"189":[1419,304,305,355,1420,305,348,305,1421,1422,305,778,1100,305,1423,1424,1425,305,1426,1427,305,1428,550,305,1429,340,305,1430,1431,305,1432,305,1433,307],"190":[1434,320,305,1435,307],"191":[1436,320,305,1437,305,1438,305,313,307],"192":[1439,429,305,1440,307],"193":[1441,320,305,1440,307],"194":[1442,320,305,1443,307],"195":[1444,320,305,1445,305,1446,305,313,307],"196":[1447,429,305,1448,307],"197":[1449,320,305,1450,305,1451,305,313,307],"198":[1452,320,305,1453,307],"199":[1454,320,305,1455,307],"200":[1456,320,305,1457,307],"201":[1458,320,305,1459,307],"202":[1460,304,305,1461,307],"203":[1462,336,432,305,1463,307],"204":[1464,320,305,795,1465,305,792,1466,305,793,1467,305,423,307],"205":[1468,304,309,305,1469,305,311,1470,305,313,307],"206":[1471,320,305,1472,1473,305,1474,1475,1476,1477,1478,1479,1480,1481,1482,1483,1484,305,1485,307],"207":[1486,320,305,1487,499,305,500,305,501,1488,305,1489,449,305,507,340,305,1490,1491,305,500,1492,1493,1494,1495,305,1496,1497,305,1303,449,305,1498,305,507,340,305,1499,1500,305,1501,1227,305,1502,305,1501,1227,305,334,340,305,1503,1504,305,1505,1506,305,1507,1508,340,305,1509,305,1510,305,313,307],"208":[1511,1512,1513,1514,1515,305,1516,305,1517,305,1518,305,1519,1520,1521,305,1522,307],"209":[1523,1512,1513,1514,1515,305,1524,305,1525,307],"210":[1526,1512,1513,1514,1515,305,1524,1516,305,1527,305,1522,307],"211":[1528,1512,1513,1514,1515,305,1529,1516,305,1530,305,1522,307],"212":[1531,1512,1513,1514,1515,305,508,1532,305,1533,1534,1535,305,1536,1537,305,507,340,305,1538,305,1539,305,1540,305,1541,1542,1543,305,1544,1545,305,313,307],"213":[1546,1512,1513,1514,1515,305,1516,305,1547,1548,1549,305,1522,307],"214":[1550,1512,1513,1514,1515,305,1524,1516,305,1551,305,1522,307],"215":[1552,1512,1513,1514,1515,305,1524,305,508,1553,1543,1532,305,1544,1545,305,313,307],"216":[1554,1512,1513,1514,1515,305,1555,307],"217":[1556,1512,1513,1514,1515,305,1557,307],"218":[1558,1512,1513,1514,1515,305,1559,307],"219":[1560,1512,1513,1514,1515,305,508,1561,1548,1562,1548,1563,1543,1532,305,1544,1545,305,313,307],"220":[1564,1512,1513,1514,1515,305,1565,307],"221":[1566,1512,1513,1514,1515,305,1567,307],"222":[1568,1512,1513,1514,1515,305,1569,307],"223":[1570,1512,1513,1514,1515,305,1538,1516,305,1571,305,1572,305,1573,305,423,307],"224":[1574,1512,1513,1514,1515,305,1538,1516,305,1575,305,1576,305,1577,305,1522,307],"225":[1578,1512,1513,1514,1515,305,1579,1516,305,1580,307],"226":[1581,1512,1513,1514,1515,305,1516,305,1582,305,1533,1583,333,1584,305,1585,340,305,1522,307],"227":[1586,1512,1513,1514,1515,305,1529,1516,305,1530,1587,305,1522,307],"228":[1588,1512,1513,1514,1515,305,1516,305,1561,1589,305,1522,307],"229":[1590,1512,1513,1514,1515,305,1524,305,508,1591,1543,1532,305,1544,1545,305,313,307],"230":[1592,1512,1513,1514,1515,305,1579,1516,305,1593,307],"231":[1594,1512,1513,1514,1515,305,508,1561,1548,1595,1543,1532,305,1544,1545,305,313,307],"232":[1596,1512,1513,1514,1515,305,1516,305,1533,1597,305,1598,340,305,1561,1599,305,1522,307],"233":[1600,1512,1514,1515,305,508,305,1601,1602,305,1603,305,541,340,305,1604,1605,305,1606,1607,305,1608,1609,305,313,307],"234":[1610,1512,1513,1514,1515,1611,305,1516,305,1539,305,1540,305,1612,1613,1614,1615,305,1522,307],"235":[1616,1512,1513,1514,1515,1611,305,508,1561,1617,1548,1563,1543,1532,305,1544,1545,305,313,307],"236":[1618,1512,1513,1514,1515,1611,305,508,1561,1548,1619,1543,1532,305,1544,1545,305,313,307],"237":[1620,1512,1513,1514,1515,1611,305,1621,1491,305,1622,1623,305,1624,1625,305,1626,305,1627,1628,305,1629,1630,305,1631,449,305,334,340,305,508,1632,305,1633,305,1634,1635,1636,1637,1638,1615,1543,1532,305,1544,1545,305,313,307],"238":[1639,744,337,305,1640,1641,1642,305,500,305,1643,1644,305,1489,449,305,507,340,305,804,1645,1646,1647,305,1648,340,305,307],"239":[1649,744,745,305,1650,1651,1652,1653,1654,305,1655,307],"240":[1656,744,305,1657,305,1658,307],"241":[1659,744,305,1660,1229,1661,1662,1663,1664,305,1665,1666,305,1667,1668,1669,305,503,970,305,1670,305,1671,449,305,1672,305,459,305,1673,1674,305,1675,1676,305,1297,970,449,305,1677,1678,305,1405,340,305,1679,470,1680,1681,1682,1683,305,1684,305,1685,305,1686,1687,449,340,307],"242":[1688,744,337,305,1689,499,305,1690,1691,1692,305,1693,1694,305,1695,1696,1697,1148,1189,449,305,1698,305,1699,1700,305,1701,449,305,1702,1703,1704,305,1705,340,305,508,1706,305,1707,1708,305,541,340,305,313,307],"243":[1709,744,305,1710,305,1711,1491,305,1712,305,1713,1227,305,1714,305,1715,305,507,340,305,445,305,1716,1717,340,305,613,1718,1719,305,1716,1720,1721,305,1722,1723,305,1724,305,1725,1726,340,305,1727,305,1728,1729,1730,1731,1732,1733,1734,305,1735,1736,305,1737,449,305,1738,340,305,1739,1740,305,1741,305,1742,1743,305,1744,305,1745,1746,305,1747,305,1748,1749,305,1750,305,1751,305,770,307],"244":[1752,1753,305,1754,1755,647,305,1756,449,305,1757,340,305,1758,1759,1760,305,737,739,1761,305,1762,305,1763,305,1764,340,305,1765,1766,305,1767,307],"245":[1768,744,745,305,508,1769,1770,1771,1772,1773,1774,1775,305,1776,470,1777,1778,1779,1780,1781,305,541,340,305,313,307],"246":[1782,744,745,305,1783,1784,441,305,1785,443,305,1786,443,305,384,340,305,1787,305,1788,1789,1790,1791,305,1227,449,305,1792,1793,1794,305,1795,305,507,340,305,1796,1797,305,313,307],"247":[1798,744,337,305,1799,1800,443,305,1801,443,305,384,340,305,508,1114,305,364,1802,1803,1804,1805,1806,305,1807,1808,305,1809,1810,1811,449,305,1812,1813,1814,305,1815,1816,1817,1818,305,1819,305,1820,1821,1817,1822,305,1823,305,1824,1825,1817,1826,305,1827,305,1820,1821,1828,1829,305,1830,305,1831,455,1832,1833,305,1834,449,340,305,313,307],"248":[1835,744,337,305,508,305,338,1836,1837,1838,1839,305,1840,448,305,1841,305,1842,1843,503,449,305,1698,1844,305,1536,340,305,313,307],"249":[1845,744,1039,305,1846,1847,1848,1849,1850,1851,305,1852,1853,503,305,1854,1855,305,1856,1226,305,1857,305,1858,449,305,1859,1860,305,1861,1227,305,1862,305,1863,340,305,1864,1865,1866,1867,305,804,1868,1646,1869,305,1648,340,307],"250":[1870,744,745,305,508,305,1871,1872,1873,305,1874,1875,448,449,305,1876,1877,1878,305,1879,340,305,659,652,305,313,307],"251":[1880,320,305,794,1105,305,795,1105,305,889,1105,305,792,1105,305,793,1881,305,1882,305,1883,1884,305,1885,1886,305,1887,340,305,1888,305,1889,305,423,307],"252":[1890,1891,1892,305,1893,307],"253":[1894,1895,305,1896,1636,1637,305,1897,307],"254":[1898,1899,1900,1901,305,1902,307],"255":[1903,320,305,1904,307],"256":[1905,1895,1900,1901,305,1906,307],"257":[1907,305,305,305,305,1908,305,1909,307],"258":[1910,1911,305,1912,305,1913,307],"259":[1914,305,1024,1915,1916,1917,1918,1919,1920,1921,1922,455,1923,1924,1925,1926,1927,305,1928,449,340,305,1929,307],"260":[1930,1931,305,1932,307],"261":[1933,1276,305,1934,1935,1936,1937,1938,455,1939,340,305,1940,305,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,305,1962,333,1963,307],"262":[1964,320,1965,305,1263,307],"263":[1966,320,305,1967,305,1968,305,1969,305,1970,305,1971,1972,305,313,307],"264":[1973,320,305,1974,307],"265":[1975,1976,307],"266":[1977,320,305,508,305,1978,1979,664,1980,1488,305,1489,455,650,340,305,313,307],"267":[1981,320,305,1982,1983,305,1984,307],"268":[1985,320,305,355,1986,305,316,305,508,1987,1988,305,1989,305,599,1990,305,1991,1303,305,448,449,305,1992,1993,1180,340,305,313,307],"269":[1994,320,305,1982,1983,305,1995,307],"270":[1996,320,305,1997,1998,307],"271":[1999,320,305,468,305,2000,2001,305,2002,340,305,313,307],"272":[2003,320,305,2004,305,2005,307],"273":[2006,320,745,305,2007,2008,305,2009,419,340,305,2010,305,2011,2012,305,2013,307],"274":[2014,320,305,2015,305,2016,307],"275":[2017,320,745,305,2018,307],"276":[2019,320,745,305,2007,2020,2021,2022,305,2023,305,419,449,340,305,2024,1982,2025,305,2026,307],"277":[2027,320,305,2024,1982,2025,305,2028,307],"278":[2029,2030,305,2031,307],"279":[2032,775,384,305,2033,2034,2035,305,2036,384,305,2037,307],"280":[2038,775,384,305,2033,2034,2035,305,2036,384,305,2039,307],"281":[2040,775,384,305,2033,2034,2035,305,2041,307],"282":[2042,2007,2043,305,1065,2044,2045,441,449,305,2046,305,2047,2048,305,993,2049,995,2050,305,2051,970,449,305,2052,305,791,2053,1065,2054,2045,441,449,305,791,333,384,307],"283":[2055,2056,1641,465,305,2057,305,1684,305,2058,2059,305,697,305,2060,305,2061,2062,305,2059,305,697,305,2063,2059,305,697,305,2064,340,305,2065,2066,2067,2068,2069,2070,2071,305,2072,307],"284":[2073,320,305,2074,307],"285":[2075,2076,305,2077,307],"286":[2078,320,305,2079,2080,2081,2082,2083,2084,2085,2086,445,305,2087,2088,305,2089,2090,305,770,307],"287":[2091,2092,307],"288":[2093,2094,307],"289":[2095,508,2096,2097,305,2098,305,599,2099,519,305,2100,2101,2102,2103,2104,305,541,340,305,313,307],"290":[2105,2106,2107,2108,305,2109,305,2110,2111,340,307],"291":[2112,320,305,2113,2114,2115,305,2116,307],"292":[2117,320,305,2118,2119,2120,305,2121,307],"293":[2122,2123,305,2124,307],"294":[2125,320,305,2126,307],"295":[2127,320,305,2128,307],"296":[2129,320,305,2130,305,2131,307],"297":[2132,320,305,2133,307],"298":[2134,483,2135,305,320,2136,305,1200,2137,2138,2139,2140,305,2141,1227,340,307],"299":[2142,2143,307],"300":[2144,320,305,2145,307],"301":[2146,320,305,2147,2148,305,2149,2150,305,1236,2151,449,340,305,313,307],"302":[2152,2153,500,305,2154,2155,2156,305,522,305,2157,305,2158,449,305,507,340,305,2159,1784,441,305,2160,2161,305,2162,340,305,2163,2164,305,1533,2165,305,727,340,305,2166,305,2167,2165,305,727,340,305,2168,305,2169,2170,305,2171,2172,2173,305,2174,305,2175,2176,2177,340,307]}