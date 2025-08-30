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
   const _=mul(kb,1024)
   {
    const mb=_
    {
     const _=mul(mb,1024)
     {
      const gb=_
      {
       const _=mul(gb,1024)
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
 const _=record(x,...y)
 {
  const o=_
  return (typeof(o.output)==="function")?o.output():o.output
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
 if(is_undef(x))
  check(same,arguments.length,1)
 const _=[]
 {
  const history=_
  {
   function process(x)
   {
    push(history,x)
    if(is_arr(x))
    {
     const _=[]
     {
      const r=_
      {
       for(const v of (typeof(x)==="function")?x():x)
       {
        if(contain(history,v))
        {
         push(r,null)
         continue
        }
        const _=process(v)
        {
         const v=_
         push(r,v)
        }
       }
       return (typeof(r)==="function")?r():r
      }
     }
    }
    else if(is_obj(x))
    {
     const _={}
     {
      const r=_
      {
       for(const k in (typeof(x)==="function")?x():x)
       {
        const _=get(x,k)
        {
         const v=_
         {
          if(contain(history,v))
          {
           put(r,k,null)
           continue
          }
          const _=process(v)
          {
           const v=_
           put(r,k,v)
          }
         }
        }
       }
       return (typeof(r)==="function")?r():r
      }
     }
    }
    else
     return x
   }
   return process(x)
  }
 }
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
 if(is_undef(y))
  check(same,arguments.length,2)
 if(is_str(x))
  check(is_str,y)
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
 const _=(typeof(tbl_init)==="function")?tbl_init():tbl_init
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
                        const _=back(a)
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
function dbg_here()
{
 const _=(typeof(dbg_callstack)==="function")?dbg_callstack():dbg_callstack
 {
  const t=_
  {
   tbl_remove_column(t,"njs")
   tbl_remove_column(t,"js")
   const _=tbl_render(t)
   {
    const t=_
    log(t)
   }
  }
 }
}
function dbg_origin_xs(x,y)
{
 if(is_undef(x))
 {
  const _=new Error("origin-xs")
  {
   const e=_
   return dbg_origin_xs(e.stack)
  }
 }
 check(is_str,x)
 check(is_str,y)
 const _=(typeof(dbg_source_map)==="function")?dbg_source_map():dbg_source_map
 {
  const map=_
  {
   const _=dbg_callstack(x)
   {
    const frames=_
    {
     const _=head(frames,4)
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
            const _=null
            {
             let t=_
             {
              if(same(y,"cs"))
              {
               const _=get(map.files,v.path)
               {
                const file=_
                {
                 const _=(typeof(v.ncs)==="function")?v.ncs():v.ncs
                 {
                  const line=_
                  {
                   t=dbg_origin(file,line)
                   stack="stack"
                  }
                 }
                }
               }
              }
              else if(same(y,"js"))
              {
               const _=(typeof(v.njs)==="function")?v.njs():v.njs
               {
                const line=_
                {
                 t=dbg_origin(map.source,line,"js")
                 stack="javacript"
                }
               }
              }
              else
               stop()
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
                      const _=space(stack,"frame",s2,"/",v.fn)
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
                     let line_js=_
                     {
                      if((typeof(is_node)==="function")?is_node():is_node)
                      {
                      }
                      else if((typeof(is_browser)==="function")?is_browser():is_browser)
                      {
                       line_js=add(line_js,5)
                      }
                      const _=at(lines_js,line_js)
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
          if(match_l(s,"const app="))
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
 if(is_undef(x))
  check(same,arguments.length,1)
 const _=(typeof(fn_args)==="function")?fn_args():fn_args
 {
  const name=_
  {
   check(is_single,name)
   const _=front(name)
   {
    const name=_
    log(name,x)
   }
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
function eq(x,y)
{
 check(is_def,x)
 check(is_def,y)
 if(same(x,y))
  return true
 if(is_arr(x))
 {
  if(is_arr(y))
  {
   for(let i=0;i<(min(x.length,y.length));i++)
   {
    const _=at(x,i)
    {
     const xval=_
     {
      const _=at(y,i)
      {
       const yval=_
       {
        if(neq(xval,yval))
         return false
       }
      }
     }
    }
   }
   return eq(x.length,y.length)
  }
 }
 if(is_obj(x))
 {
  if(is_obj(y))
  {
   const _=obj_keys(x)
   {
    const xkeys=_
    {
     const _=obj_keys(y)
     {
      const ykeys=_
      {
       const _=obj_vals(x)
       {
        const xvals=_
        {
         const _=obj_vals(y)
         {
          const yvals=_
          {
           for(let i=0;i<(min(xkeys.length,ykeys.length));i++)
           {
            const _=at(xkeys,i)
            {
             const xkey=_
             {
              const _=at(ykeys,i)
              {
               const ykey=_
               {
                if(neq(xkey,ykey))
                 return false
                const _=at(xvals,i)
                {
                 const xval=_
                 {
                  const _=at(yvals,i)
                  {
                   const yval=_
                   {
                    if(neq(xval,yval))
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
           return eq(xkeys.length,ykeys.length)
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
 const _=cmp(x,y)
 {
  const n=_
  return same(n,0)
 }
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
function fn_args()
{
 const _=(typeof(dbg_callstack)==="function")?dbg_callstack():dbg_callstack
 {
  const stack=_
  {
   const _=at(stack,3)
   {
    const frame=_
    {
     const _=split(frame.cs," ")
     {
      const r=_
      {
       shift(r)
       return (typeof(r)==="function")?r():r
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
function fn_select(x)
{
 check(is_str,x)
 const _={}
 {
  const r=_
  {
   const _=concat(x,"*")
   {
    const pattern=_
    {
     const _=fn_match(pattern)
     {
      const fns=_
      {
       for(const k in (typeof(fns)==="function")?fns():fns)
       {
        const _=get(fns,k)
        {
         const v=_
         {
          const _=strip_l(k,x)
          {
           const name=_
           put(r,name,v)
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
function gn_run(x,...y)
{
 check(is_gn,x)
 const _=x(...y)
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
       return
      time_timeout(on_timer)
     }
    }
   }
   on_timer()
  }
 }
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
function init_common(...x)
{
 function deinit()
 {
  if((typeof(is_node)==="function")?is_node():is_node)
   deinit_node()
  if(gte(verbose,0))
   log_profile()
 }
 function log_profile()
 {
  const _=time_hn(start,false)
  {
   const profile=_
   {
    const _=to_lit(profile)
    {
     const profile=_
     {
      const _=concat("profile=",profile)
      {
       const profile=_
       log(app,profile)
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
  deinit()
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
        deinit()
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
 return (typeof(has_window)==="function")?has_window():has_window
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
 {
 }
 else if(match_l(x,"https://"))
 {
 }
 else
  return false
 try
 {
  url_parse(x)
 }
 catch
 {
  return false
 }
 return true
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
function is_xn(x)
{
 if(is_fn(x))
  return true
 if(is_gn(x))
  return true
 return false
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
function json_dump(x)
{
 check(is_def,x)
 return JSON.stringify(x,null,1)
}
function json_encode(x)
{
 if(is_undef(x))
 {
  check(same,arguments.length,1)
  return "undefined"
 }
 return JSON.stringify(x)
}
function log(...x)
{
 if(is_str(output))
 {
  const _=[]
  {
   const a=_
   {
    for(const v of (typeof(x)==="function")?x():x)
    {
     if(is_str(v))
     {
      push(a,v)
      continue
     }
     const _=to_dump(v)
     {
      const s=_
      push(a,s)
     }
    }
    const _=join(a," ")
    {
     const s=_
     {
      const _=concat(s,"\n")
      {
       const s=_
       {
        const _=concat(output,s)
        {
         const s=_
         {
          global.output=(typeof(s)==="function")?s():s
          return
         }
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
  if((typeof(is_color)==="function")?is_color():is_color)
  {
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
        const _=null
        {
         let s=_
         {
          if(is_str(v))
          {
           s=(typeof(v)==="function")?v():v
          }
          else
          {
           s=inspect(v)
          }
          write(s)
          const _=dec(x.length)
          {
           const last=_
           {
            if(different(i,last))
             write(" ")
           }
          }
         }
        }
       }
      }
     }
    }
   }
   write("\n")
   return
  }
 }
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
 function log_compile()
 {
  const _=time_hn(compile)
  {
   const compile=_
   {
    const _=to_lit(compile)
    {
     const compile=_
     {
      const _=concat("compile=",compile)
      {
       const compile=_
       {
        const _=(typeof(dbg_source)==="function")?dbg_source():dbg_source
        {
         const sloc=_
         {
          const _=split(sloc)
          {
           const sloc=_
           {
            const _=(typeof(sloc.length)==="function")?sloc.length():sloc.length
            {
             const sloc=_
             {
              const _=concat("sloc=",sloc)
              {
               const sloc=_
               log(app,compile,sloc)
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
 const _=true
 {
  let has_window=_
  {
   try
   {
    window
   }
   catch
   {
    has_window=false
   }
   if((typeof(has_window)==="function")?has_window():has_window)
   {
    window.global=(typeof(window)==="function")?window():window
    global.has_window=true
   }
   else
   {
    global.has_window=false
   }
   global.zombie=false
   global.start=(typeof(time_get)==="function")?time_get():time_get
   global.punct="!\"#$%&'()*+,-./:;<=>?@[\\]^`{|}~"
   global.digit="0123456789"
   global.lower="abcdefghijklmnopqrstuvwxyz"
   global.upper=to_upper(lower)
   global.output=null
   global.verbose=0
   global.color=false
   global.minute=60
   global.hour=mul(60,minute)
   global.day=mul(24,hour)
   global.month=mul(30,day)
   global.year=mul(12,month)
   global.traces=[]
   if((typeof(is_node)==="function")?is_node():is_node)
    init_node()
   else if((typeof(is_browser)==="function")?is_browser():is_browser)
    init_browser()
   else
    stop()
   const _=["init_common","init_node","init_browser"]
   {
    const skip=_
    {
     for(const k in (typeof(fns)==="function")?fns():fns)
     {
      if(contain(skip,k))
       continue
      if(match(k,"init_*"))
      {
       const _=get(fns,k)
       {
        const v=_
        v()
       }
      }
     }
     if((typeof(is_node)==="function")?is_node():is_node)
     {
      const _=slice(process.argv,2)
      {
       const args=_
       {
        if(extract(args,"--verbose"))
        {
         verbose=inc(verbose)
        }
        if(extract(args,"--quiet"))
        {
         verbose=dec(verbose)
        }
        if(extract(args,"--color"))
        {
         color=true
        }
        if(gte(verbose,0))
         log_compile()
        init_common(...args)
       }
      }
     }
     else if((typeof(is_browser)==="function")?is_browser():is_browser)
     {
      function on_load()
      {
       if(same(document.readyState,"complete"))
       {
        log_compile()
        init_common()
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
function mute(x,...y)
{
 check(is_fn,x)
 const _=record(x,...y)
 {
  const o=_
  return (typeof(o.result)==="function")?o.result():o.result
 }
}
function neq(x,y)
{
 check(is_def,x)
 check(is_def,y)
 return !(eq(x,y))
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
    return fn(...x)
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
function partial(x,...y)
{
 check(is_fn,x)
 const _=x
 {
  const fn=_
  {
   const _=(typeof(y)==="function")?y():y
   {
    const args=_
    {
     function result(...x)
     {
      return fn(...args,...x)
     }
     return result
    }
   }
  }
 }
}
function path_concat(x,y,...z)
{
 check(is_str,x)
 check(is_str,y)
 const _=strip_r(x,"/")
 {
  const x=_
  {
   const _=strip_l(y,"/")
   {
    const y=_
    {
     const _=concat(x,"/",y)
     {
      const r=_
      {
       if(is_full(z))
        return path_concat(r,...z)
       return (typeof(r)==="function")?r():r
      }
     }
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
 check(is_str,x)
 if(match_r(x,"/"))
  return (typeof(x)==="function")?x():x
 return concat(x,"/")
}
function path_join(x)
{
 check(is_arr,x)
 return join(x,"/")
}
function path_split(x)
{
 check(is_str,x)
 return split(x,"/")
}
function path_strip(x)
{
 check(is_str,x)
 return strip_r(x,"/")
}
function path_up(x)
{
 check(is_str,x)
 const _=path_split(x)
 {
  const a=_
  {
   pop(a)
   return path_join(a)
  }
 }
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
function profile(x,...y)
{
 check(is_xn,x)
 const _=null
 {
  let n=_
  {
   const _=(typeof(time_now)==="function")?time_now():time_now
   {
    const before=_
    {
     if(is_fn(x))
     {
      r=x(...y)
     }
     else if(is_gn(x))
     {
      const _=x(...y)
      {
       const generator=_
       {
        while(true)
        {
         const _=(typeof(generator.next)==="function")?generator.next():generator.next
         {
          const iterator=_
          {
           if((typeof(iterator.done)==="function")?iterator.done():iterator.done)
           {
            r=(typeof(iterator.value)==="function")?iterator.value():iterator.value
            break
           }
          }
         }
        }
       }
      }
     }
     else
      stop()
     const _=(typeof(time_now)==="function")?time_now():time_now
     {
      const after=_
      {
       const _=sub(after,before)
       {
        const time=_
        {
         const _=to_fixed(time)
         {
          const time=_
          {
           const _=concat(time,"s")
           {
            const time=_
            {
             const _=to_lit(time)
             {
              const time=_
              {
               const _=concat("profile=",time)
               {
                const time=_
                {
                 log(x.name,time)
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
function push(x,y)
{
 check(is_arr,x)
 if(is_undef(y))
  check(same,arguments.length,2)
 x.push(y)
}
function put(x,y,z)
{
 check(is_obj,x)
 check(is_str,y)
 if(is_undef(z))
  check(same,arguments.length,3)
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
function record(x,...y)
{
 check(is_fn,x)
 check(is_null,output)
 global.output=""
 const _=null
 {
  let result=_
  {
   try
   {
    result=x(...y)
   }
   catch(e)
   {
    global.output=null
    throw (typeof(e)==="function")?e():e
   }
   const _=trim_r(output)
   {
    const s=_
    {
     global.output=null
     const _={}
     {
      const r=_
      {
       r.result=(typeof(result)==="function")?result():result
       r.output=(typeof(s)==="function")?s():s
       return (typeof(r)==="function")?r():r
      }
     }
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
function report_html(report,length)
{
 check(is_obj,report)
 if(is_def(length))
  check(is_uint,length)
 const _=report_render(report)
 {
  let pre=_
  {
   if(is_def(length))
   {
    pre=txt_cut(pre,length)
   }
   const _="font-family:monospace;font-size:1.1vw"
   {
    const style=_
    {
     const _=to_lit(style)
     {
      const style=_
      {
       const _=concat("<body style=",style,">")
       {
        const body_open=_
        {
         const _=concat("<pre>",pre,"</pre>")
         {
          const pre=_
          {
           const _=concat("<title>",report.title,"</title>")
           {
            const title=_
            {
             const _=[]
             {
              const html=_
              {
               push(html,"<!doctype html>")
               push(html,"<html>")
               push(html,"<head>")
               push(html,title)
               push(html,"</head>")
               push(html,body_open)
               push(html,pre)
               push(html,"</body>")
               push(html,"</html>")
               return join(html)
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function report_init(error,query)
{
 check(is_obj,error)
 if(is_def(query))
  check(is_obj,query)
 function log_browser()
 {
  const _=to_str(location)
  {
   const location=_
   {
    const _=null
    {
     let referrer=_
     {
      if(is_full(document.referrer))
      {
       const _=url_parse(document.referrer)
       {
        const url_referer=_
        {
         const _=url_parse(location)
         {
          const url_location=_
          {
           if(different(url_referer.host,url_location.host))
           {
            referrer=(typeof(document.referrer)==="function")?document.referrer():document.referrer
           }
          }
         }
        }
       }
      }
      const _=(typeof(browser_get)==="function")?browser_get():browser_get
      {
       const browser=_
       {
        const _=(typeof(navigator.userAgent)==="function")?navigator.userAgent():navigator.userAgent
        {
         const agent=_
         {
          const _={location,referrer,browser,agent}
          {
           const o=_
           {
            const _=to_tbl(o)
            {
             const t=_
             {
              const _=tbl_render(t)
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
 function log_server()
 {
  const _=(typeof(query.url.href)==="function")?query.url.href():query.url.href
  {
   const url=_
   {
    const _=(typeof(query.request.headers)==="function")?query.request.headers():query.request.headers
    {
     const headers=_
     {
      const _=null
      {
       let referrer=_
       {
        if(has(headers,"referrer"))
        {
         referrer=get(headers,"referrer")
        }
        else if(has(headers,"referer"))
        {
         referrer=get(headers,"referer")
        }
        const _=(typeof(query.remote)==="function")?query.remote():query.remote
        {
         const remote=_
         {
          const _={url,referrer,remote}
          {
           const o=_
           {
            const _=to_tbl(o)
            {
             const t=_
             {
              const _=tbl_render(t)
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
 function log_trace()
 {
  if(is_empty(traces))
   return
  flower("trace")
  for(const v of (typeof(traces)==="function")?traces():traces)
   log(">",v)
 }
 function log_backtrace(x)
 {
  check(is_str,x)
  const _=dbg_backtrace(x)
  {
   const backtrace=_
   {
    if(is_empty(backtrace))
     return
    tbl_remove_column(backtrace,"njs")
    tbl_remove_column(backtrace,"js")
    const _=tbl_render(backtrace)
    {
     const backtrace=_
     {
      const _=txt_prepend(backtrace,"> ")
      {
       const backtrace=_
       {
        flower("backtrace")
        log(backtrace)
       }
      }
     }
    }
   }
  }
 }
 const _=(typeof(error.stack)==="function")?error.stack():error.stack
 {
  const stack=_
  {
   const _=(typeof(error.message)==="function")?error.message():error.message
   {
    const message=_
    {
     const _=space(app,"/",error.constructor.name,"/",message)
     {
      let title=_
      {
       if((typeof(is_browser)==="function")?is_browser():is_browser)
       {
        title=space(title,"/",location.hostname)
       }
       else if((typeof(is_node)==="function")?is_node():is_node)
       {
        const _=(typeof(os_host)==="function")?os_host():os_host
        {
         const host=_
         {
          title=space(title,"/",host)
         }
        }
       }
       else
        stop()
       const _=""
       {
        let browser=_
        {
         const _=""
         {
          let server=_
          {
           const _=capture(dbg_origin_xs,stack,"cs")
           {
            const cs=_
            {
             const _=capture(log_backtrace,stack)
             {
              const backtrace=_
              {
               const _=capture(dbg_origin_xs,stack,"js")
               {
                const js=_
                {
                 const _=true
                 {
                  let empty=_
                  {
                   if((typeof(is_browser)==="function")?is_browser():is_browser)
                   {
                    browser=capture(log_browser)
                    empty=false
                   }
                   if(is_obj(query))
                   {
                    server=capture(log_server)
                    empty=false
                   }
                   if(is_full(trace))
                   {
                    empty=false
                   }
                   if(is_full(cs))
                   {
                    empty=false
                   }
                   if(is_full(backtrace))
                   {
                    empty=false
                   }
                   if(gt(verbose,0))
                   {
                    if(is_full(js))
                    {
                     empty=false
                    }
                   }
                   if((typeof(empty)==="function")?empty():empty)
                    trace("No error stack.")
                   const _=capture(log_trace)
                   {
                    const trace=_
                    return {title,app,message,browser,server,trace,cs,backtrace,js}
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function report_log(report)
{
 check(is_obj,report)
 flower(report.title)
 if(is_full(report.browser))
  log(report.browser)
 if(is_full(report.server))
  log(report.server)
 if(is_full(report.trace))
  log(report.trace)
 if(is_full(report.cs))
  log(report.cs)
 if(is_full(report.backtrace))
  log(report.backtrace)
 if(gt(verbose,0))
 {
  if(is_full(report.js))
   log(report.js)
 }
 const _=to_lit(report.message)
 {
  const message=_
  {
   const _=space("end-report",report.app,"/",message)
   {
    const end=_
    flower(end)
   }
  }
 }
}
function report_render(report)
{
 check(is_obj,report)
 const _=[]
 {
  const a=_
  {
   const _=paren(report.title)
   {
    const s=_
    {
     const _=space("An error has occured",s)
     {
      const s=_
      {
       const _=concat(s,".")
       {
        const s=_
        {
         push(a,s)
         push(a,"")
         if(is_full(report.browser))
         {
          push(a,report.browser)
          push(a,"")
         }
         if(is_full(report.server))
         {
          push(a,report.server)
          push(a,"")
         }
         if(is_full(report.trace))
         {
          push(a,report.trace)
          push(a,"")
         }
         if(is_full(report.cs))
         {
          push(a,report.cs)
          push(a,"")
         }
         if(is_full(report.backtrace))
         {
          push(a,report.backtrace)
          push(a,"")
         }
         if(is_full(report.js))
          push(a,report.js)
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
 if(is_undef(z))
  check(same,arguments.length,3)
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
function shuffle(x)
{
 check(is_arr,x)
 const _=[]
 {
  const r=_
  {
   const _=dup(x)
   {
    const a=_
    {
     while(is_full(a))
     {
      const _=random(a.length)
      {
       const n=_
       {
        const _=at(a,n)
        {
         const v=_
         {
          remove(a,n)
          push(r,v)
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
   return cmp(x.key,y.key)
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
        const _=to_fixed(v)
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
         if(is_numeric(v))
         {
          const _=pad_l(v," ",length)
          {
           const s=_
           {
            push(r,s)
            continue
           }
          }
         }
         else if(is_str(v))
         {
          const _=pad_r(v," ",length)
          {
           const s=_
           push(r,s)
          }
         }
         else
          stop()
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
          const _=(typeof(v)==="function")?v():v
          {
           const column=_
           {
            const _=0
            {
             let n=_
             {
              for(const v of (typeof(column)==="function")?column():column)
              {
               n=max(n,v.length)
              }
              length=add(length,n)
             }
            }
           }
          }
         }
         length=add(length,columns.length)
         length=dec(length)
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
function time_hn(x,y)
{
 check(is_num,x)
 if(is_undef(y))
  return time_hn(x,true)
 check(is_bool,y)
 function get_unit(x)
 {
  check(is_num,x)
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
       {
        if((typeof(y)==="function")?y():y)
         return concat("in ",s)
        return (typeof(s)==="function")?s():s
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
       if((typeof(y)==="function")?y():y)
        return concat(s," ago")
       return (typeof(s)==="function")?s():s
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
  return time_timeout(x,0.01)
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
function to_dump(val)
{
 if(is_undef(val))
  check(same,arguments.length,1)
 val=clone(val)
 if(is_arr(val))
 {
  if(is_empty(val))
   return "arr"
  const _=[]
  {
   const a=_
   {
    push(a,"arr")
    for(const k in (typeof(val)==="function")?val():val)
    {
     const _=to_i(k)
     {
      const i=_
      {
       const _=at(val,i)
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
 else if(is_obj(val))
 {
  if(is_empty(val))
   return "obj"
  const _=[]
  {
   const a=_
   {
    push(a,"obj")
    for(const k in (typeof(val)==="function")?val():val)
    {
     const _=get(val,k)
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
               }
              }
             }
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
 else if(is_word(val))
  return to_lit(val)
 else if(is_fn(val))
  return space("fn",val.name)
 else
  return json_encode(val)
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
function to_tbl(x)
{
 check(is_obj,x)
 const _=[]
 {
  const r=_
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
         push(r,o)
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
function trace(...x)
{
 if(is_single(x))
 {
  const _=front(x)
  {
   const first=_
   {
    if(is_str(first))
    {
     const _=split(first)
     {
      const a=_
      {
       if(is_many(a))
       {
        for(const v of (typeof(a)==="function")?a():a)
         trace(v)
        return
       }
      }
     }
    }
   }
  }
 }
 if(gt(verbose,0))
 {
  log("trace>",...x)
  return
 }
 const _=[]
 {
  const a=_
  {
   for(const v of (typeof(x)==="function")?x():x)
   {
    if(!(is_str(v)))
    {
     const _=json_encode(v)
     {
      const s=_
      push(a,s)
     }
    }
    else
     push(a,v)
   }
   const _=join(a," ")
   {
    const s=_
    {
     push(traces,s)
     if(gt(traces.length,64))
      shift(traces)
    }
   }
  }
 }
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
  if((typeof(is_batch)==="function")?is_batch():is_batch)
   return 140
  return (typeof(process.stdout.columns)==="function")?process.stdout.columns():process.stdout.columns
 }
 else if((typeof(is_browser)==="function")?is_browser():is_browser)
  return 80
 else
  stop()
}
function txt_compact(x)
{
 if(is_str(x))
 {
  const _=split(x)
  {
   const a=_
   {
    const _=txt_compact(a)
    {
     const a=_
     return join(a)
    }
   }
  }
 }
 check(is_arr,x)
 const _=join(x)
 {
  const s=_
  {
   const _=trim_r(s)
   {
    const s=_
    {
     const _=split(s)
     {
      const a=_
      {
       while(is_full(a))
       {
        const _=front(a)
        {
         const first=_
         {
          const _=trim_r(first)
          {
           const first=_
           {
            if(is_empty(first))
             shift(a)
            else
             break
           }
          }
         }
        }
       }
       const _=[]
       {
        const r=_
        {
         for(const v of (typeof(a)==="function")?a():a)
         {
          if(!(is_empty(v)))
          {
           push(r,v)
           continue
          }
          if(is_empty(r))
          {
           push(r,v)
           continue
          }
          const _=back(r)
          {
           const last=_
           {
            if(is_empty(last))
             continue
            push(r,v)
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
function txt_cut(x,y)
{
 if(is_str(x))
 {
  check(is_uint,y)
  const _=split(x)
  {
   const a=_
   {
    const _=txt_cut(a,y)
    {
     const a=_
     return join(a)
    }
   }
  }
 }
 check(is_arr,x)
 check(is_uint,y)
 const _=[]
 {
  const r=_
  {
   for(const v of (typeof(x)==="function")?x():x)
   {
    const _=head(v,y)
    {
     const s=_
     push(r,s)
    }
   }
   return (typeof(r)==="function")?r():r
  }
 }
}
function txt_indent(x)
{
 if(is_str(x))
 {
  const _=split(x)
  {
   const a=_
   {
    const _=txt_indent(a)
    {
     const a=_
     return join(a)
    }
   }
  }
 }
 check(is_arr,x)
 const _=[]
 {
  const r=_
  {
   for(const v of (typeof(x)==="function")?x():x)
   {
    const _=trim_r(v)
    {
     const s=_
     {
      if(is_empty(s))
       push(r,s)
      else
      {
       const _=concat(" ",s)
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
function txt_prepend(x,y)
{
 if(is_str(x))
 {
  check(is_str,y)
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
 if(is_undef(y))
  check(same,arguments.length,2)
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
function url_parse(x)
{
 check(is_str,x)
 const _=new URL(x)
 {
  const url=_
  {
   const _=(typeof(url.href)==="function")?url.href():url.href
   {
    const href=_
    {
     const _=strip_r(url.protocol,":")
     {
      const protocol=_
      {
       const _=(typeof(url.username)==="function")?url.username():url.username
       {
        const user=_
        {
         const _=(typeof(url.password)==="function")?url.password():url.password
         {
          const password=_
          {
           const _=(typeof(url.hostname)==="function")?url.hostname():url.hostname
           {
            const host=_
            {
             const _=(typeof(url.port)==="function")?url.port():url.port
             {
              const port=_
              {
               const _=(typeof(url.pathname)==="function")?url.pathname():url.pathname
               {
                const path=_
                {
                 const _=(typeof(url.hash)==="function")?url.hash():url.hash
                 {
                  const hash=_
                  {
                   const _={}
                   {
                    const params=_
                    {
                     for(const v of (typeof(url.searchParams.keys)==="function")?url.searchParams.keys():url.searchParams.keys)
                     {
                      const _=url.searchParams.get(v)
                      {
                       const value=_
                       put(params,v,value)
                      }
                     }
                     return {href,protocol,user,password,host,port,path,params,hash}
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function* wait()
{
 while(true)
  yield
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
function beep()
{
 os_detach("play","-n","synth",0.1,"sine",880,"vol",0.5)
}
function deinit_node()
{
 dir_change(cwd)
 const _=(typeof(path_tmp)==="function")?path_tmp():path_tmp
 {
  const tmp=_
  {
   const _=path_dir(tmp)
   {
    const tmp=_
    {
     fs_remove(tmp)
     const _=path_up(tmp)
     {
      const app=_
      {
       const _=dir_read(app,true)
       {
        const paths=_
        {
         if(is_empty(paths))
          fs_remove(app)
        }
       }
      }
     }
    }
   }
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
function dir_find(x,y)
{
 check(is_str,x)
 check(is_str,y)
 const _=[]
 {
  const r=_
  {
   for(const v of dir_load(x))
   {
    const _=path_base(v)
    {
     const base=_
     {
      if(match(base,y))
       push(r,v)
     }
    }
   }
   return (typeof(r)==="function")?r():r
  }
 }
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
    const option=_
    fs.mkdirSync(x,option)
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
function init_node()
{
 function deinit()
 {
  deinit_node()
  zombie=true
  process.exit(1)
 }
 function on_uncaught_exception(error,message)
 {
  check(is_obj,error)
  check(is_str,message)
  const _=report_init(error)
  {
   const report=_
   {
    report.title=space(report.title,"/",message)
    report_log(report)
    if((typeof(is_remote)==="function")?is_remote():is_remote)
     report_mail(report)
    deinit()
   }
  }
 }
 global.binary=(typeof(process.execPath)==="function")?process.execPath():process.execPath
 global.cp=require("child_process")
 global.crypto=require("crypto")
 global.fs=require("fs")
 global.http=require("http")
 global.https=require("https")
 global.os=require("os")
 global.path=require("path")
 global.tls=require("tls")
 global.tty=require("tty")
 global.util=require("util")
 process.on("uncaughtExceptionMonitor",on_uncaught_exception)
 const _=(typeof(path_tmp)==="function")?path_tmp():path_tmp
 {
  const tmp=_
  {
   const _=path_dir(tmp)
   {
    const tmp=_
    dir_make(tmp)
   }
  }
 }
}
function inspect(x)
{
 if(is_undef(x))
  check(same,arguments.length,1)
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
            return util.inspect(x,o)
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function ip_host(x)
{
 check(is_str,x)
 const _=os_execute("host",x)
 {
  const r=_
  {
   const _=split(r)
   {
    const r=_
    {
     const _=back(r)
     {
      const r=_
      {
       if(contain(r,"not found"))
        return null
       const _=split(r," ")
       {
        const r=_
        {
         const _=back(r)
         {
          const r=_
          {
           const _=strip_r(r,".")
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
function is_batch()
{
 if(!((typeof(is_node)==="function")?is_node():is_node))
  return false
 return !((typeof(is_interactive)==="function")?is_interactive():is_interactive)
}
function is_color()
{
 if((typeof(color)==="function")?color():color)
  return true
 if((typeof(is_interactive)==="function")?is_interactive():is_interactive)
  return true
 return false
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
function is_interactive()
{
 if(!((typeof(is_node)==="function")?is_node():is_node))
  return false
 return (typeof(process.stdout.isTTY)==="function")?process.stdout.isTTY():process.stdout.isTTY
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
function mail(to,subject,body,from)
{
 check(is_str,to)
 check(is_str,subject)
 check(is_str,body)
 if(is_undef(from))
  return mail(to,subject,body,"mabynogy@gmail.com")
 const _=app_token("mabynogy")
 {
  const token=_
  {
   const _=[]
   {
    const cfg=_
    {
     push(cfg,"account gmail")
     push(cfg,"host smtp.gmail.com")
     push(cfg,"port 587")
     push(cfg,"protocol smtp")
     push(cfg,"auth on")
     const _=space("from",from)
     {
      const s=_
      {
       push(cfg,s)
       const _=space("user",from)
       {
        const s=_
        {
         push(cfg,s)
         const _=space("password",token)
         {
          const s=_
          {
           push(cfg,s)
           push(cfg,"tls on")
           push(cfg,"tls_starttls on")
           push(cfg,"tls_trust_file /etc/ssl/certs/ca-certificates.crt")
           push(cfg,"account default: gmail")
           const _=[]
           {
            const body2=_
            {
             const _=concat("from:",from)
             {
              const s=_
              {
               push(body2,s)
               const _=concat("to:",to)
               {
                const s=_
                {
                 push(body2,s)
                 const _=concat("subject:",subject)
                 {
                  const s=_
                  {
                   push(body2,s)
                   push(body2,"mime-version:1.0")
                   push(body2,"content-type:text/html;charset=utf-8")
                   push(body2,"")
                   push(body2,body)
                   const _=join(cfg)
                   {
                    const cfg=_
                    {
                     const _=join(body2)
                     {
                      const body=_
                      {
                       const _=path_tmp("msmtp.txt")
                       {
                        const cfg_path=_
                        {
                         const _=path_tmp("body.txt")
                         {
                          const body_path=_
                          {
                           file_save(cfg_path,cfg)
                           file_save(body_path,body)
                           const _=concat("--file=",cfg_path)
                           {
                            const option_file=_
                            {
                             os_system("chmod",600,cfg_path)
                             const _=os_shell("msmtp","--debug",option_file,"--read-recipients","<",body_path)
                             {
                              const s=_
                              {
                               const _=txt_prepend(s," > ")
                               {
                                const s=_
                                {
                                 fs_remove(cfg_path)
                                 fs_remove(body_path)
                                }
                               }
                              }
                             }
                            }
                           }
                          }
                         }
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function open(x)
{
 check(is_str,x)
 os_system("xdg-open",x)
}
function* os_capture(x,...y)
{
 const _=false
 {
  let closed=_
  {
   const _=null
   {
    let status=_
    {
     const _=""
     {
      let out=_
      {
       const _=""
       {
        let err=_
        {
         function on_out(x)
         {
          check(is_obj,x)
          const _=to_str(x)
          {
           const s=_
           {
            write(s)
            out=concat(out,s)
           }
          }
         }
         function on_err(x)
         {
          check(is_obj,x)
          const _=to_str(x)
          {
           const s=_
           {
            err=concat(err,s)
           }
          }
         }
         function on_close(x)
         {
          if(is_null(x))
          {
          }
          else if(is_uint(x))
          {
          }
          else
           stop()
          status=(typeof(x)==="function")?x():x
          closed=true
         }
         const _=cp.spawn(x,y)
         {
          const child=_
          {
           function on_sigint(x)
           {
            check(is_str,x)
            child.kill(x)
           }
           sigint(on_sigint)
           const _=on(on_out)
           {
            const on_out=_
            {
             const _=on(on_err)
             {
              const on_err=_
              {
               const _=on(on_close)
               {
                const on_close=_
                {
                 const _=(typeof(child.stdout)==="function")?child.stdout():child.stdout
                 {
                  const stdout=_
                  {
                   const _=(typeof(child.stderr)==="function")?child.stderr():child.stderr
                   {
                    const stderr=_
                    {
                     stdout.on("data",on_out)
                     stderr.on("data",on_err)
                     child.on("close",on_close)
                     while(!((typeof(closed)==="function")?closed():closed))
                      yield
                     const _=trim_r(out)
                     {
                      const out=_
                      {
                       const _=trim_r(err)
                       {
                        const err=_
                        {
                         os_log(os_capture,status,x,...y)
                         return {status,out,err}
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function os_detach(x,...y)
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
       const _=cp.spawn(x,y,o)
       {
        const r=_
        {
         r.unref()
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
function os_execute(...x)
{
 const _=os_run(...x)
 {
  const o=_
  {
   const _=[]
   {
    const a=_
    {
     if(is_full(o.out))
      push(a,o.out)
     if(is_full(o.err))
      push(a,o.err)
     const _=join(a)
     {
      const s=_
      return trim_r(s)
     }
    }
   }
  }
 }
}
function os_home()
{
 if((typeof(is_root)==="function")?is_root():is_root)
 {
  const _=os_execute("logname")
  {
   const name=_
   {
    if(contain(name," "))
     stop()
    return path_concat("/home",name)
   }
  }
 }
 return (typeof(os.homedir)==="function")?os.homedir():os.homedir
}
function os_host()
{
 return (typeof(os.hostname)==="function")?os.hostname():os.hostname
}
function os_log(call,status,...args)
{
 check(is_xn,call)
 check(is_int,status)
 if(same(status,0))
  return
 const _=front(args)
 {
  let command=_
  {
   if(same(command,"sudo"))
   {
    const _=at(args,1)
    {
     const s=_
     {
      command=space(command,s)
     }
    }
   }
   const _=replace(call.name,"_","-")
   {
    const call=_
    {
     const _=to_lit(command)
     {
      const command=_
      {
       const _=concat("status=",status)
       {
        const status=_
        trace(call,command,status)
       }
      }
     }
    }
   }
  }
 }
}
function* os_prompt(x,...y)
{
 check(is_str,x)
 const _=(typeof(x)==="function")?x():x
 {
  const name=_
  {
   const _=false
   {
    let closed=_
    {
     const _=null
     {
      let status=_
      {
       function print(x,y)
       {
        check(is_obj,x)
        check(is_str,y)
        const _=(typeof(tty_width)==="function")?tty_width():tty_width
        {
         const n=_
         {
          const _=to_str(x)
          {
           const s=_
           {
            const _=strip_r(s,"\n")
            {
             const s=_
             {
              const _=txt_prepend(s,"> ")
              {
               const s=_
               {
                const _=txt_prepend(s,y)
                {
                 const s=_
                 {
                  const _=txt_cut(s,n)
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
       function on_out(x)
       {
        check(is_obj,x)
        print(x,"out")
       }
       function on_err(x)
       {
        check(is_obj,x)
        print(x,"err")
       }
       function on_close(x)
       {
        if(is_null(x))
        {
        }
        else if(is_uint(x))
        {
        }
        else
         stop()
        status=(typeof(x)==="function")?x():x
        closed=true
       }
       const _=cp.spawn(x,y)
       {
        const child=_
        {
         function on_sigint(x)
         {
          check(is_str,x)
          child.kill(x)
         }
         sigint(on_sigint)
         const _=on(on_out)
         {
          const on_out=_
          {
           const _=on(on_err)
           {
            const on_err=_
            {
             const _=on(on_close)
             {
              const on_close=_
              {
               const _=(typeof(child.stdout)==="function")?child.stdout():child.stdout
               {
                const stdout=_
                {
                 const _=(typeof(child.stderr)==="function")?child.stderr():child.stderr
                 {
                  const stderr=_
                  {
                   stdout.on("data",on_out)
                   stderr.on("data",on_err)
                   child.on("close",on_close)
                   while(!((typeof(closed)==="function")?closed():closed))
                    yield
                   os_log(os_prompt,status,x,...y)
                   return (typeof(status)==="function")?status():status
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
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
      const option=_
      {
       const _=cp.spawnSync(x,y,option)
       {
        const process=_
        {
         const _=to_str(process.stdout)
         {
          const out=_
          {
           const _=trim_r(out)
           {
            const out=_
            {
             const _=to_str(process.stderr)
             {
              const err=_
              {
               const _=trim_r(err)
               {
                const err=_
                {
                 const _=(typeof(process.status)==="function")?process.status():process.status
                 {
                  const status=_
                  {
                   os_log(os_run,status,x,...y)
                   return {status,out,err}
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
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
      const option=_
      {
       const _=join(x," ")
       {
        const command=_
        return cp.execSync(command,option)
       }
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
       const _=(typeof(o.status)==="function")?o.status():o.status
       {
        const r=_
        {
         os_log(os_system,r,x,...y)
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
  return path_tmp("tmp.txt")
 check(is_str,x)
 const _=to_str(process.pid)
 {
  const pid=_
  {
   const _=path_split(x)
   {
    const dir=_
    {
     pop(dir)
     const _=path_join(dir)
     {
      const dir=_
      {
       const _=path_concat("tmp",app,pid,dir)
       {
        const dir=_
        {
         const _=path_strip(dir)
         {
          const dir=_
          {
           if(!(is_dir(dir)))
            dir_make(dir)
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
                 const id=_
                 {
                  const _=to_base36(id)
                  {
                   const id=_
                   {
                    const _=head(id,6)
                    {
                     const id=_
                     {
                      const _=concat(file,"-",id,".",ext)
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
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function report_mail(report)
{
 check(is_obj,report)
 const _=report_html(report,73)
 {
  const html=_
  mail(author,report.title,html)
 }
}
function sigint(x)
{
 check(is_fn,x)
 const _=x
 {
  const callback=_
  {
   function on_sigint(x)
   {
    check(is_str,x)
    const _=concat("pid=",process.pid)
    {
     const pid=_
     {
      const _=concat("signal=",x)
      {
       const signal=_
       {
        log(app,pid,signal)
        callback(x)
       }
      }
     }
    }
   }
   const _=on(on_sigint)
   {
    const on_sigint=_
    process.once("SIGINT",on_sigint)
   }
  }
 }
}
function* ssh_execute(...x)
{
 return yield* ssh_pass(...x)
}
function* ssh_pass(...x)
{
 const _=dup(x)
 {
  const args=_
  {
   const _=shift(args)
   {
    const first=_
    {
     if(is_str(first))
      return yield* ssh_pass(os_execute,...x)
     const _=["sshpass","-p",...args]
     {
      const arguments=_
      {
       if(is_fn(first))
        return first(...arguments)
       else if(is_gn(first))
        return yield* first(...arguments)
       else
        stop()
      }
     }
    }
   }
  }
 }
}
function* ssh_system(x,...y)
{
 check(is_str,x)
 const _=yield* ssh_pass(x,...y)
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
function sudo_save(path,data)
{
 check(is_str,path)
 check(is_str,data)
 const _=path_base(path)
 {
  const base=_
  {
   const _=path_tmp(base)
   {
    const tmp=_
    {
     file_save(tmp,data)
     os_system("sudo","mv","--force",tmp,path)
    }
   }
  }
 }
}
function write(x)
{
 check(is_str,x)
 process.stdout.write(x)
}
function app_token(x)
{
 check(is_str,x)
 const _=(typeof(os_home)==="function")?os_home():os_home
 {
  const home=_
  {
   const _=concat(".",x)
   {
    const path=_
    {
     const _=path_concat(home,path)
     {
      const r=_
      {
       const _=file_read(r)
       {
        const r=_
        {
         const _=trim(r)
         {
          const r=_
          {
           const _=base36_decode(r)
           {
            const r=_
            {
             const _=salt(r)
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
     }
    }
   }
  }
 }
}
function init_server()
{
 global.login_vps="debian@mabynogy.org"
 global.author="marc@abiven.eu"
}
function is_local()
{
 const _=(typeof(os_host)==="function")?os_host():os_host
 {
  const host=_
  return same(host,"castle")
 }
}
function is_remote()
{
 return !((typeof(is_local)==="function")?is_local():is_local)
}
function is_root()
{
 const _=(typeof(os_user)==="function")?os_user():os_user
 {
  const s=_
  return same(s,"root")
 }
}
function mnt_clean(x)
{
 check(is_str,x)
 if(is_readable(x))
 {
  mnt_unmount(x)
  fs_remove(x)
 }
 else
  mnt_unmount(x)
}
function mnt_unmount(x)
{
 check(is_str,x)
 return os_execute("fusermount","-u",x)
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
     const _=replace(js,"</script>","<\\/script>")
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
 }
}
function app_make(x)
{
 check(is_str,x)
 const _=cpl_init(x)
 {
  const cpl=_
  {
   const _=to_lit(x)
   {
    const s=_
    {
     log("make",s)
     cpl_include(cpl)
     const _=cpl_generate(cpl)
     {
      const r=_
      {
       const _=concat(x,"-tmp.js")
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
function ast_assign(cpl,args,children,source)
{
 check(is_obj,cpl)
 check(is_arr,args)
 check(is_arr,children)
 check(is_obj,source)
 check(is_empty,children)
 const _=front(args)
 {
  const left=_
  {
   check(is_name,left)
   const _=slice(args,1)
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
function ast_begin(cpl,args,children,source)
{
 check(is_obj,cpl)
 check(is_arr,args)
 check(is_arr,children)
 check(is_obj,source)
 check(is_empty,args)
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
function ast_brk(cpl,args,children,source)
{
 check(is_obj,cpl)
 check(is_arr,args)
 check(is_arr,children)
 check(is_obj,source)
 check(is_empty,args)
 check(is_empty,children)
 const _="break"
 {
  const code=_
  return {code,source}
 }
}
function ast_call(cpl,args,children,source)
{
 check(is_obj,cpl)
 check(is_arr,args)
 check(is_arr,children)
 check(is_obj,source)
 check(is_full,args)
 check(is_empty,children)
 const _=expr_call(...args)
 {
  const code=_
  return {code,source}
 }
}
function ast_catch(cpl,args,children,source)
{
 check(is_obj,cpl)
 check(is_arr,args)
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
     if(is_empty(args))
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
     check(is_single,args)
     const _=front(args)
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
function ast_check(cpl,args,children,source)
{
 check(is_obj,cpl)
 check(is_arr,args)
 check(is_arr,children)
 check(is_obj,source)
 check(is_empty,children)
 const _=join(args,",")
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
function ast_cont(cpl,args,children,source)
{
 check(is_obj,cpl)
 check(is_arr,args)
 check(is_arr,children)
 check(is_obj,source)
 check(is_empty,args)
 check(is_empty,children)
 const _="continue"
 {
  const code=_
  return {code,source}
 }
}
function ast_else(cpl,args,children,source)
{
 check(is_obj,cpl)
 check(is_arr,args)
 check(is_arr,children)
 check(is_obj,source)
 check(is_empty,args)
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
function ast_elseif(cpl,args,children,source)
{
 check(is_obj,cpl)
 check(is_arr,args)
 check(is_arr,children)
 check(is_obj,source)
 return call_ast_if(cpl,args,children,source,"else if")
}
function ast_fn(cpl,args,children,source)
{
 check(is_obj,cpl)
 check(is_arr,args)
 check(is_arr,children)
 check(is_obj,source)
 return call_ast_xn(cpl,args,children,source,"function")
}
function ast_forin(cpl,args,children,source)
{
 check(is_obj,cpl)
 check(is_arr,args)
 check(is_arr,children)
 check(is_obj,source)
 return call_ast_for(cpl,args,children,source,"k in")
}
function ast_fornum(cpl,args,children,source)
{
 check(is_obj,cpl)
 check(is_arr,args)
 check(is_arr,children)
 check(is_obj,source)
 const _=[]
 {
  const r=_
  {
   const _=expr_right(...args)
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
function ast_forof(cpl,args,children,source)
{
 check(is_obj,cpl)
 check(is_arr,args)
 check(is_arr,children)
 check(is_obj,source)
 return call_ast_for(cpl,args,children,source,"v of")
}
function ast_gn(cpl,args,children,source)
{
 check(is_obj,cpl)
 check(is_arr,args)
 check(is_arr,children)
 check(is_obj,source)
 return call_ast_xn(cpl,args,children,source,"function*")
}
function ast_if(cpl,args,children,source)
{
 check(is_obj,cpl)
 check(is_arr,args)
 check(is_arr,children)
 check(is_obj,source)
 return call_ast_if(cpl,args,children,source,"if")
}
function ast_include(cpl,args,children,source)
{
 check(is_obj,cpl)
 check(is_arr,args)
 check(is_arr,children)
 check(is_obj,source)
 check(is_single,args)
 check(is_empty,children)
 const _=front(args)
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
function ast_inline(cpl,args,children,source)
{
 check(is_obj,cpl)
 check(is_arr,args)
 check(is_arr,children)
 check(is_obj,source)
 check(is_single,args)
 check(is_empty,children)
 const _=front(args)
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
function ast_let(cpl,args,children,source)
{
 check(is_obj,cpl)
 check(is_arr,args)
 check(is_arr,children)
 check(is_obj,source)
 check(is_many,args)
 check(is_empty,children)
 return call_ast_declare(cpl,args,children,source,"const")
}
function ast_ret(cpl,args,children,source)
{
 check(is_obj,cpl)
 check(is_arr,args)
 check(is_arr,children)
 check(is_obj,source)
 check(is_empty,children)
 const _=""
 {
  let code=_
  {
   if(is_empty(args))
   {
    code="return"
   }
   else
   {
    const _=expr_right(...args)
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
function ast_run(cpl,args,children,source)
{
 check(is_obj,cpl)
 check(is_arr,args)
 check(is_arr,children)
 check(is_obj,source)
 check(is_full,args)
 check(is_empty,children)
 const _=expr_call(...args)
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
function ast_throw(cpl,args,children,source)
{
 check(is_obj,cpl)
 check(is_arr,args)
 check(is_arr,children)
 check(is_obj,source)
 check(is_empty,children)
 const _=expr_right(...args)
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
function ast_try(cpl,args,children,source)
{
 check(is_obj,cpl)
 check(is_arr,args)
 check(is_arr,children)
 check(is_obj,source)
 check(is_empty,args)
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
function ast_var(cpl,args,children,source)
{
 check(is_obj,cpl)
 check(is_arr,args)
 check(is_arr,children)
 check(is_obj,source)
 check(is_many,args)
 check(is_empty,children)
 return call_ast_declare(cpl,args,children,source,"let")
}
function ast_while(cpl,args,children,source)
{
 check(is_obj,cpl)
 check(is_arr,args)
 check(is_arr,children)
 check(is_obj,source)
 const _=[]
 {
  const r=_
  {
   const _=expr_right(...args)
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
function ast_yield(cpl,args,children,source)
{
 check(is_obj,cpl)
 check(is_arr,args)
 check(is_arr,children)
 check(is_obj,source)
 check(is_empty,children)
 if(is_empty(args))
 {
  const _="yield"
  {
   const code=_
   return {code,source}
  }
 }
 const _=expr_right(...args)
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
function call_ast_declare(cpl,args,children,source,keyword)
{
 check(is_obj,cpl)
 check(is_arr,args)
 check(is_arr,children)
 check(is_obj,source)
 check(is_str,keyword)
 check(is_empty,children)
 const _=front(args)
 {
  const identifier=_
  {
   check(is_identifier,identifier)
   const _=slice(args,1)
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
function call_ast_for(cpl,args,children,source,keyword)
{
 check(is_obj,cpl)
 check(is_arr,args)
 check(is_arr,children)
 check(is_obj,source)
 check(is_str,keyword)
 const _=[]
 {
  const r=_
  {
   const _=expr_right(...args)
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
function call_ast_if(cpl,args,children,source,keyword)
{
 check(is_obj,cpl)
 check(is_arr,args)
 check(is_arr,children)
 check(is_obj,source)
 check(is_str,keyword)
 const _=[]
 {
  const r=_
  {
   const _=expr_right(...args)
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
function call_ast_xn(cpl,args,children,source,keyword)
{
 check(is_obj,cpl)
 check(is_arr,args)
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
   const _=front(args)
   {
    const name=_
    {
     check(is_name,name)
     const _=slice(args,1)
     {
      const args=_
      {
       const _=map(args,get_argument)
       {
        const parameters=_
        {
         const _=join(parameters,",")
         {
          const parameters=_
          {
           const _=paren(parameters)
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
function cpl_check_syntax(cpl,path)
{
 check(is_obj,cpl)
 check(is_str,path)
 const _=os_run(binary,"--trace-uncaught","--trace-deprecation","--check",path)
 {
  const o=_
  {
   check(is_empty,o.out)
   if(same(o.status,0))
   {
    check(is_empty,o.err)
    return true
   }
   check(cpl_log_error,cpl,path,o.err)
   return false
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
   if(is_full(nodes))
   {
    const _=path_file(y)
    {
     const fn=_
     {
      const _=replace(fn,"-","_")
      {
       const fn=_
       push(x.fns,fn)
      }
     }
    }
   }
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
 const _=json_dump(x.cache)
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
    const _=(typeof(x.args)==="function")?x.args():x.args
    {
     const args=_
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
            append(a2,args)
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
               {
                const _=txt_prepend(s,"> ")
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
            const _=(typeof(parent.args)==="function")?parent.args():parent.args
            {
             const args=_
             {
              const _=(typeof(parent.source)==="function")?parent.source():parent.source
              {
               const source=_
               return {operator,args,children,source}
              }
             }
            }
           }
          }
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
             const _=to_lit(x.app)
             {
              const app=_
              {
               const _=concat("const app=",app)
               {
                const app=_
                {
                 push(a,app)
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
                                       const _=join(x.fns,",")
                                       {
                                        const fns=_
                                        {
                                         const _=brace(fns)
                                         {
                                          const fns=_
                                          {
                                           const _=concat("const fns=",fns)
                                           {
                                            const fns=_
                                            {
                                             push(a,fns)
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
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function cpl_include(x)
{
 check(is_obj,x)
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
 const _=get_includes(x.app)
 {
  const includes=_
  {
   const _=get_files(includes)
   {
    const files=_
    {
     for(const v of (typeof(files)==="function")?files():files)
     {
      const _=path_ext(v)
      {
       const ext=_
       {
        if(different(ext,"cs"))
         continue
        cpl_compile(x,v)
       }
      }
     }
    }
   }
  }
 }
}
function cpl_init(x)
{
 check(is_str,x)
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
     const _=fn_select("ast_")
     {
      const asts=_
      {
       const _=(typeof(x)==="function")?x():x
       {
        const app=_
        {
         const _=[]
         {
          const fns=_
          {
           const _=[]
           {
            const stack=_
            {
             const _=[]
             {
              const out=_
              return {app,asts,fns,stack,out,path,cache}
             }
            }
           }
          }
         }
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
function cpl_log_error(cpl,path,err)
{
 check(is_obj,cpl)
 check(is_str,path)
 check(is_str,err)
 function process(cpl,path,err)
 {
  check(is_obj,cpl)
  check(is_str,path)
  check(is_str,err)
  const _=txt_compact(err)
  {
   const s=_
   {
    const _=split(s)
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
                const _=(typeof(line_js)==="function")?line_js():line_js
                {
                 const line=_
                 {
                  const _={line,path}
                  {
                   const o=_
                   {
                    const _=to_tbl(o)
                    {
                     const t=_
                     {
                      const _=tbl_render(t)
                      {
                       const s=_
                       {
                        log(s)
                        if(gt(line_js,cpl.out.length))
                         return true
                        const _=dec(line_js)
                        {
                         const index=_
                         {
                          const _=at(cpl.out,index)
                          {
                           const o=_
                           {
                            const _=(typeof(o.source)==="function")?o.source():o.source
                            {
                             const source=_
                             {
                              const _=path_concat("src",source.path)
                              {
                               const src=_
                               {
                                const _=file_read(src)
                                {
                                 const content=_
                                 {
                                  const _=cpl_uncomment(cpl,content)
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
                                            const _=dbg_source(path)
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
                                        }
                                       }
                                      }
                                     }
                                    }
                                   }
                                  }
                                 }
                                }
                               }
                              }
                             }
                            }
                           }
                          }
                         }
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
 try
 {
  return process(cpl,path,err)
 }
 catch(e)
 {
  const _=report_init(e)
  {
   const report=_
   {
    flower(report.title)
    log(report.backtrace)
    return false
   }
  }
 }
}
function cpl_scan(cpl,str)
{
 check(is_obj,cpl)
 check(is_str,str)
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
 const _=trim(str)
 {
  const s=_
  {
   if(is_complex(s))
   {
    if(has(cpl.cache,s))
    {
     const _=get(cpl.cache,s)
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
          put(cpl.cache,s,a)
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
          const _=(typeof(node.args)==="function")?node.args():node.args
          {
           const args=_
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
                    if(is_full(args))
                    {
                     name=front(args)
                     rvalue=slice(args,1)
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
                        const args=_
                        {
                         const _=[]
                         {
                          const children=_
                          {
                           const _={operator,args,children,source}
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
                                const args=_
                                {
                                 const _=[]
                                 {
                                  const children=_
                                  {
                                   const _={operator,args,children,source}
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
                                        const args=_
                                        {
                                         const _=[]
                                         {
                                          const children=_
                                          {
                                           const _={operator,args,children,source}
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
                                                const args=_
                                                {
                                                 const _=cpl_scope(x,a)
                                                 {
                                                  const children=_
                                                  {
                                                   const _={operator,args,children,source}
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
                       const _={operator,args,children,source}
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
           const args=_
           {
            if(is_empty(args))
             continue
            const _=shift(args)
            {
             const operator=_
             {
              if(same(operator,"end"))
              {
               if(is_empty(args))
                continue
              }
              const _=[]
              {
               const children=_
               {
                const _={indent,operator,args,children,source}
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
 function translate(cpl,operator,args,children,source)
 {
  check(is_obj,cpl)
  check(is_str,operator)
  check(is_arr,args)
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
     const _=ast(cpl,args,children,source)
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
  const _=[operator,...args]
  {
   const args=_
   {
    const _=ast_call(cpl,args,children,source)
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
   const _=(typeof(y.args)==="function")?y.args():y.args
   {
    const args=_
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
          return translate(x,operator,args,children,source)
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
function* init(...x)
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
  const args=_
  {
   const _=(typeof(app_list)==="function")?app_list():app_list
   {
    const apps=_
    {
     if(is_empty(args))
     {
      dump(apps)
      return
     }
     const _=shift(args)
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
         if(extract(args,"--compile"))
         {
          run=false
         }
         const _=cpl_init(app)
         {
          const cpl=_
          {
           cpl_include(cpl)
           const _=cpl_generate(cpl)
           {
            const code=_
            {
             const _=concat("out-",app,".js")
             {
              const out=_
              {
               file_save(out,code)
               if(!(cpl_check_syntax(cpl,out)))
                return
               cpl_deinit(cpl)
               if(!((typeof(run)==="function")?run():run))
                return
               const _=concat("usage-",process.pid,".txt")
               {
                const usage_path=_
                {
                 const _=path_tmp("usage.txt")
                 {
                  const usage_path=_
                  {
                   const _=concat("--output=",usage_path)
                   {
                    const output=_
                    {
                     const _=["time","--format=%M",output]
                     {
                      const time=_
                      {
                       const _=[...time,binary,"--trace-uncaught","--trace-deprecation",out,...args]
                       {
                        const arguments=_
                        {
                         if(gt(verbose,0))
                          push(arguments,"--verbose")
                         else if(lt(verbose,0))
                          push(arguments,"--quiet")
                         if((typeof(is_color)==="function")?is_color():is_color)
                          push(arguments,"--color")
                         const _=yield* os_capture(...arguments)
                         {
                          const o=_
                          {
                           const _=(typeof(o.status)==="function")?o.status():o.status
                           {
                            const status=_
                            {
                             const _=(typeof(o.err)==="function")?o.err():o.err
                             {
                              const err=_
                              {
                               if(different(status,0))
                               {
                                const _=concat("status=",status)
                                {
                                 const s=_
                                 log(app,s)
                                }
                               }
                               if(is_full(err))
                               {
                                if(!(cpl_log_error(cpl,out,err)))
                                {
                                 const _=txt_prepend(err,"make-error> ")
                                 {
                                  const s=_
                                  log(s)
                                 }
                                }
                               }
                               const _=file_read(usage_path)
                               {
                                const usage=_
                                {
                                 const _=trim(usage)
                                 {
                                  const usage=_
                                  {
                                   fs_remove(usage_path)
                                   if(gte(verbose,0))
                                   {
                                    const _=split(usage)
                                    {
                                     const usage=_
                                     {
                                      const _=back(usage)
                                      {
                                       const usage=_
                                       {
                                        const _=to_uint(usage)
                                        {
                                         const usage=_
                                         {
                                          const _=mul(usage,1024)
                                          {
                                           const usage=_
                                           {
                                            const _=byte_size(usage)
                                            {
                                             const usage=_
                                             {
                                              const _=to_lit(usage)
                                              {
                                               const usage=_
                                               {
                                                const _=concat("usage=",usage)
                                                {
                                                 const usage=_
                                                 log(app,usage)
                                                }
                                               }
                                              }
                                             }
                                            }
                                           }
                                          }
                                         }
                                        }
                                       }
                                      }
                                     }
                                    }
                                   }
                                  }
                                 }
                                }
                               }
                              }
                             }
                            }
                           }
                          }
                         }
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
const app="make"
const compile=1756458760
const pool=["lib-common/abs.cs","lib-common/add.cs","lib-common/and.cs","lib-common/angle.cs","lib-common/append.cs","lib-common/arr.cs","lib-common/asc.cs","lib-common/at.cs","lib-common/back.cs","lib-common/base36-decode.cs","lib-common/base36-encode.cs","lib-common/between.cs","lib-common/brace.cs","lib-common/bracket.cs","lib-common/byte-size.cs","lib-common/capture.cs","lib-common/check.cs","lib-common/chr.cs","lib-common/clear.cs","lib-common/clone.cs","lib-common/cmp.cs","lib-common/collate.cs","lib-common/concat.cs","lib-common/contain.cs","lib-common/crc.cs","lib-common/date-decode.cs","lib-common/date-str.cs","lib-common/dbg/dbg-backtrace.cs","lib-common/dbg/dbg-callstack.cs","lib-common/dbg/dbg-here.cs","lib-common/dbg/dbg-origin-xs.cs","lib-common/dbg/dbg-origin.cs","lib-common/dbg/dbg-source-map.cs","lib-common/dbg/dbg-source.cs","lib-common/dec.cs","lib-common/dedup.cs","lib-common/delimit.cs","lib-common/different.cs","lib-common/div.cs","lib-common/drop.cs","lib-common/dump.cs","lib-common/dup.cs","lib-common/eq.cs","lib-common/every.cs","lib-common/explode.cs","lib-common/extract.cs","lib-common/find.cs","lib-common/flower.cs","lib-common/fn-args.cs","lib-common/fn-match.cs","lib-common/fn-select.cs","lib-common/front.cs","lib-common/get.cs","lib-common/gn-run.cs","lib-common/gt.cs","lib-common/gte.cs","lib-common/has.cs","lib-common/head.cs","lib-common/implode.cs","lib-common/inc.cs","lib-common/indent.cs","lib-common/init-common.cs","lib-common/insert.cs","lib-common/is/is-access.cs","lib-common/is/is-alnum.cs","lib-common/is/is-alpha.cs","lib-common/is/is-arr.cs","lib-common/is/is-atom.cs","lib-common/is/is-blank.cs","lib-common/is/is-bool.cs","lib-common/is/is-browser.cs","lib-common/is/is-char.cs","lib-common/is/is-comment.cs","lib-common/is/is-container.cs","lib-common/is/is-cool.cs","lib-common/is/is-def.cs","lib-common/is/is-digit.cs","lib-common/is/is-empty.cs","lib-common/is/is-false.cs","lib-common/is/is-fn.cs","lib-common/is/is-fragment.cs","lib-common/is/is-full.cs","lib-common/is/is-gn.cs","lib-common/is/is-identifier.cs","lib-common/is/is-indented.cs","lib-common/is/is-int.cs","lib-common/is/is-ip.cs","lib-common/is/is-ip4.cs","lib-common/is/is-ip6.cs","lib-common/is/is-json.cs","lib-common/is/is-last.cs","lib-common/is/is-lisp.cs","lib-common/is/is-lit-char.cs","lib-common/is/is-lit.cs","lib-common/is/is-ln.cs","lib-common/is/is-lower.cs","lib-common/is/is-many.cs","lib-common/is/is-name.cs","lib-common/is/is-node.cs","lib-common/is/is-none.cs","lib-common/is/is-noun.cs","lib-common/is/is-null.cs","lib-common/is/is-num.cs","lib-common/is/is-numeric.cs","lib-common/is/is-obj.cs","lib-common/is/is-pair.cs","lib-common/is/is-punct.cs","lib-common/is/is-single.cs","lib-common/is/is-space.cs","lib-common/is/is-str.cs","lib-common/is/is-token.cs","lib-common/is/is-trivia.cs","lib-common/is/is-true.cs","lib-common/is/is-tuple.cs","lib-common/is/is-txt.cs","lib-common/is/is-uint.cs","lib-common/is/is-undef.cs","lib-common/is/is-upper.cs","lib-common/is/is-url.cs","lib-common/is/is-vec.cs","lib-common/is/is-word.cs","lib-common/is/is-xn.cs","lib-common/join.cs","lib-common/json-decode.cs","lib-common/json-dump.cs","lib-common/json-encode.cs","lib-common/log.cs","lib-common/lt.cs","lib-common/lte.cs","lib-common/main.cs","lib-common/map.cs","lib-common/match-l.cs","lib-common/match-r.cs","lib-common/match.cs","lib-common/max.cs","lib-common/merge.cs","lib-common/min.cs","lib-common/mul.cs","lib-common/mute.cs","lib-common/neq.cs","lib-common/nop.cs","lib-common/obj-delete.cs","lib-common/obj-keys.cs","lib-common/obj-length.cs","lib-common/obj-vals.cs","lib-common/obj.cs","lib-common/on.cs","lib-common/or.cs","lib-common/pad-l.cs","lib-common/pad-r.cs","lib-common/paren.cs","lib-common/partial.cs","lib-common/path/path-concat.cs","lib-common/path/path-file.cs","lib-common/path/path-fix.cs","lib-common/path/path-join.cs","lib-common/path/path-split.cs","lib-common/path/path-strip.cs","lib-common/path/path-up.cs","lib-common/pop.cs","lib-common/prepend.cs","lib-common/profile.cs","lib-common/push.cs","lib-common/put.cs","lib-common/random.cs","lib-common/record.cs","lib-common/reject.cs","lib-common/remove.cs","lib-common/repeat.cs","lib-common/replace-rec.cs","lib-common/replace.cs","lib-common/report/report-html.cs","lib-common/report/report-init.cs","lib-common/report/report-log.cs","lib-common/report/report-render.cs","lib-common/reverse.cs","lib-common/round.cs","lib-common/salt.cs","lib-common/same.cs","lib-common/scan.cs","lib-common/set.cs","lib-common/shift.cs","lib-common/shuffle.cs","lib-common/sleep.cs","lib-common/slice-l.cs","lib-common/slice-r.cs","lib-common/slice.cs","lib-common/sort.cs","lib-common/space.cs","lib-common/split.cs","lib-common/stop.cs","lib-common/str-indent.cs","lib-common/str-unindent.cs","lib-common/strip-l.cs","lib-common/strip-r.cs","lib-common/sub.cs","lib-common/tail.cs","lib-common/tbl/tbl-column.cs","lib-common/tbl/tbl-columns.cs","lib-common/tbl/tbl-init.cs","lib-common/tbl/tbl-remove-column.cs","lib-common/tbl/tbl-render.cs","lib-common/time/time-get.cs","lib-common/time/time-hn.cs","lib-common/time/time-interval.cs","lib-common/time/time-now.cs","lib-common/time/time-str.cs","lib-common/time/time-timeout.cs","lib-common/to/to-base36.cs","lib-common/to/to-dump.cs","lib-common/to/to-fixed.cs","lib-common/to/to-i.cs","lib-common/to/to-int.cs","lib-common/to/to-json.cs","lib-common/to/to-lit.cs","lib-common/to/to-lower.cs","lib-common/to/to-num.cs","lib-common/to/to-str.cs","lib-common/to/to-tbl.cs","lib-common/to/to-uint.cs","lib-common/to/to-upper.cs","lib-common/trace.cs","lib-common/trim-l.cs","lib-common/trim-r.cs","lib-common/trim.cs","lib-common/trunc.cs","lib-common/tty-width.cs","lib-common/txt/txt-compact.cs","lib-common/txt/txt-cut.cs","lib-common/txt/txt-indent.cs","lib-common/txt/txt-prepend.cs","lib-common/unshift.cs","lib-common/unwrap.cs","lib-common/url-parse.cs","lib-common/wait.cs","lib-common/xor.cs","lib-node/app-list.cs","lib-node/beep.cs","lib-node/deinit-node.cs","lib-node/digest.cs","lib-node/dir/dir-change.cs","lib-node/dir/dir-current.cs","lib-node/dir/dir-find.cs","lib-node/dir/dir-load.cs","lib-node/dir/dir-make.cs","lib-node/dir/dir-read.cs","lib-node/dir/dir-reset.cs","lib-node/dir/dir-size.cs","lib-node/file/file-read.cs","lib-node/file/file-save.cs","lib-node/file/file-size.cs","lib-node/file/file-write.cs","lib-node/fs-copy.cs","lib-node/fs-remove.cs","lib-node/init-node.cs","lib-node/inspect.cs","lib-node/ip/ip-host.cs","lib-node/ip/ip-list.cs","lib-node/ip/ip-v4.cs","lib-node/ip/ip-v6.cs","lib-node/is/is-batch.cs","lib-node/is/is-color.cs","lib-node/is/is-dir.cs","lib-node/is/is-file.cs","lib-node/is/is-fs.cs","lib-node/is/is-interactive.cs","lib-node/is/is-readable.cs","lib-node/mail.cs","lib-node/open.cs","lib-node/os/os-capture.cs","lib-node/os/os-detach.cs","lib-node/os/os-execute.cs","lib-node/os/os-home.cs","lib-node/os/os-host.cs","lib-node/os/os-log.cs","lib-node/os/os-prompt.cs","lib-node/os/os-ps.cs","lib-node/os/os-run.cs","lib-node/os/os-shell.cs","lib-node/os/os-system.cs","lib-node/os/os-user.cs","lib-node/path/path-base.cs","lib-node/path/path-dir.cs","lib-node/path/path-ext.cs","lib-node/path/path-real.cs","lib-node/path/path-tmp.cs","lib-node/report-mail.cs","lib-node/sigint.cs","lib-node/ssh/ssh-execute.cs","lib-node/ssh/ssh-pass.cs","lib-node/ssh/ssh-system.cs","lib-node/sudo-save.cs","lib-node/write.cs","lib-server/app-token.cs","lib-server/init-server.cs","lib-server/is-local.cs","lib-server/is-remote.cs","lib-server/is-root.cs","lib-server/mnt-clean.cs","lib-server/mnt-unmount.cs","lib-compiler/app-home.cs","lib-compiler/app-make.cs","lib-compiler/ast/ast-assign.cs","lib-compiler/ast/ast-begin.cs","lib-compiler/ast/ast-brk.cs","lib-compiler/ast/ast-call.cs","lib-compiler/ast/ast-catch.cs","lib-compiler/ast/ast-check.cs","lib-compiler/ast/ast-cont.cs","lib-compiler/ast/ast-else.cs","lib-compiler/ast/ast-elseif.cs","lib-compiler/ast/ast-fn.cs","lib-compiler/ast/ast-forin.cs","lib-compiler/ast/ast-fornum.cs","lib-compiler/ast/ast-forof.cs","lib-compiler/ast/ast-gn.cs","lib-compiler/ast/ast-if.cs","lib-compiler/ast/ast-include.cs","lib-compiler/ast/ast-inline.cs","lib-compiler/ast/ast-let.cs","lib-compiler/ast/ast-ret.cs","lib-compiler/ast/ast-run.cs","lib-compiler/ast/ast-throw.cs","lib-compiler/ast/ast-try.cs","lib-compiler/ast/ast-var.cs","lib-compiler/ast/ast-while.cs","lib-compiler/ast/ast-yield.cs","lib-compiler/ast/call-ast-block-top.cs","lib-compiler/ast/call-ast-block.cs","lib-compiler/ast/call-ast-declare.cs","lib-compiler/ast/call-ast-for.cs","lib-compiler/ast/call-ast-if.cs","lib-compiler/ast/call-ast-xn.cs","lib-compiler/cpl-block.cs","lib-compiler/cpl-check-syntax.cs","lib-compiler/cpl-compile.cs","lib-compiler/cpl-deinit.cs","lib-compiler/cpl-dump.cs","lib-compiler/cpl-fold.cs","lib-compiler/cpl-generate.cs","lib-compiler/cpl-include.cs","lib-compiler/cpl-init.cs","lib-compiler/cpl-is-call.cs","lib-compiler/cpl-is-leaf.cs","lib-compiler/cpl-load.cs","lib-compiler/cpl-log-error.cs","lib-compiler/cpl-scan.cs","lib-compiler/cpl-scope.cs","lib-compiler/cpl-tokenize.cs","lib-compiler/cpl-translate.cs","lib-compiler/cpl-uncomment.cs","lib-compiler/expr/expr-arg.cs","lib-compiler/expr/expr-arr.cs","lib-compiler/expr/expr-call.cs","lib-compiler/expr/expr-in.cs","lib-compiler/expr/expr-inline.cs","lib-compiler/expr/expr-instanceof.cs","lib-compiler/expr/expr-new.cs","lib-compiler/expr/expr-obj.cs","lib-compiler/expr/expr-right.cs","lib-compiler/expr/expr-run.cs","lib-compiler/expr/expr-rvalue.cs","lib-compiler/expr/expr-value.cs","app-make/init.cs","fn abs x"," check is_num x",""," ret Math.abs x","end","fn add x y z:etc"," check is_num y"," let r inline \"x+y\""," if is_full z","  ret add r z:etc"," ret r","fn and x y z:etc"," check is_bool x"," check is_bool y"," let r inline \"x&&y\"","  ret and r z:etc","fn angle x"," check is_str x"," ret concat \"<\" x \">\"","fn append x y"," check is_arr x"," check is_arr y"," forof y","  push x v"," end","fn arr x:etc"," ret inline \"[...x]\"","fn asc x"," check is_char x"," ret x.charCodeAt 0","fn at x y z"," check is_vec x"," check is_uint y"," let n dec x.length"," check between y 0 n"," if is_undef z","  ret inline \"x[y]\""," inline \"x[y]=z\"","fn back x y z"," if is_undef y","  ret back x 0"," let n sub x.length y"," let n dec n","  ret at x n"," at x n z","fn base36_decode x"," var r \"\""," let a explode x"," while is_full a","  let a2 slice_l a 4","  shift a 4","  let s implode a2","  let n Number.parseInt s 36","  let range mul 256 256","  check is_uint n","  check lte n range","  let c chr n","  assign r concat r c","fn base36_encode x"," forof x","  let s asc v","  let s to_base36 s","  let s pad_l s \"0\" 4","  assign r concat r s","fn between x y z"," check is_num z"," check gte z y"," if lt x y","  ret false"," if gt x z"," ret true","fn brace x"," ret concat \"{\" x \"}\"","fn bracket x"," ret concat \"[\" x \"]\"","fn byte_size x"," check is_uint x"," check gte x 0"," let kb 1024"," let mb mul kb 1024"," let gb mul mb 1024"," let tb mul gb 1024"," if lt x kb","  let s to_fixed x","  ret concat s \"b\""," if lt x mb","  let s div x kb","  let s trunc s","  let s to_fixed s","  ret concat s \"Kb\""," if lt x gb","  let s div x mb","  ret concat s \"Mb\""," if lt x tb","  let s div x gb","  ret concat s \"Gb\""," let s div x tb"," let s trunc s"," let s to_fixed s"," ret concat s \"Tb\"","fn capture x y:etc"," check is_fn x"," let o record x y:etc"," ret o.output","fn check x y:etc"," if is_true x","  if is_empty y","   ret"," elseif is_fn x","  let b x y:etc","  if is_true b"," stop","fn chr x"," ret String.fromCharCode x","fn clear x"," x.splice 0","fn clone x"," if is_undef x","  check same arguments.length 1"," let history arr"," fn process x","  push history x","  if is_arr x","   let r arr","   forof x","    if contain history v","     push r null","     cont","    end","    let v process v","    push r v","   end","   ret r","  elseif is_obj x","   let r obj","   forin x","    let v get x k","     put r k null","    put r k v","  else","   ret value x"," ret process x","fn cmp x y"," check is_def x"," check is_def y"," if inline \"x>y\"","  ret 1"," if inline \"x<y\"","  ret -1"," ret 0","fn collate x"," fn is_delimited x","  if same x \"_\"","   ret false","  if is_punct x","   ret true","  if is_space x"," let a arr","  if is_empty a","   push a v","   cont","  end","  let left back a","  let left back left","  let right front v","  if is_delimited left","  elseif is_delimited right","   push a right","  let s concat left right","  drop a","  push a s"," ret join a \" \"","fn concat x:etc"," ret implode x","fn contain x y","  check same arguments.length 2"," if is_str x","  check is_str y"," ret x.includes y","fn crc x"," var r 0"," forin a","  let i to_i k","  let s at a i","  forin s","   let i to_i k","   let v at s i","   let n asc v","   assign r add r n","fn date_decode x"," let r new Date x"," let r r.getTime"," let r div r 1000"," let r trunc r","fn date_str x","  let n time_get","  ret date_str n"," let n mul x 1000"," let o new Date n"," let y o.getFullYear"," let m o.getMonth"," let m inc m"," let m pad_l m \"0\" 2"," let d o.getDate"," let d pad_l d \"0\" 2"," ret concat y \"/\" m \"/\" d","fn dbg_backtrace x","  let e new Error \"backtrace\"","  ret dbg_backtrace e.stack"," fn parse_numbers x","  check is_arr x","  let r arr","  forof x","   if not is_numeric v","    cont","   let n json_decode v","   if not is_uint n","   push r n","  ret r"," let r tbl_init"," let stack trim x"," let stack split stack"," let map dbg_source_map"," forin stack","  let v at stack i","  if is_node","   let script at process.argv 1","   if not contain v script","  let s trim v","  let s replace s \"@\" \" \"","  let a split s \" \"","  let s front a","  if same s \"at\"","   shift a","  var fn shift a","  if is_empty fn","   assign fn \"anonymous\"","  if not is_noun fn","  let a back a","  let a scan a is_atom","  let a parse_numbers a","  if not is_many a","  let njs back a 1","  var index dec njs","  if gte index map.source.length","  let location at map.source index","  let js trim location.js","  let cs trim location.cs","  let path location.path","  let ncs location.index","  let ncs inc location.index","  let o obj fn njs js path ncs cs","  push r o","fn dbg_callstack x","  let e new Error \"callstack\"","  ret dbg_callstack e.stack"," let r dbg_backtrace x"," while is_full r","  let frame front r","  let fn frame.fn","  if same fn \"throw\"","  elseif same fn \"stop\"","  elseif same fn \"check\"","   brk","  shift r","fn dbg_here"," let t dbg_callstack"," tbl_remove_column t \"njs\""," tbl_remove_column t \"js\""," let t tbl_render t"," log t","fn dbg_origin_xs x y","  let e new Error \"origin-xs\"","  ret dbg_origin_xs e.stack"," check is_str y"," let frames dbg_callstack x"," let frames head frames 4"," forin frames","  let v at frames i","  var t null","  if same y \"cs\"","   let file get map.files v.path","   let line v.ncs","   assign t dbg_origin file line","   assign stack \"stack\"","  elseif same y \"js\"","   let line v.njs","   assign t dbg_origin map.source line \"js\"","   assign stack \"javacript\"","   stop","  let s tbl_render t","  let s txt_prepend s \"> \"","  let n inc i","  let s2 concat \"#\" n","  let s2 space stack \"frame\" s2 \"/\" v.fn","  flower s2","  log s","fn dbg_origin source line key depth"," check is_arr source"," check is_uint line"," if is_undef key","  ret dbg_origin source line \"\" depth"," check is_str key"," if is_undef depth","  ret dbg_origin source line key 15"," check is_uint depth"," fn origin source line key depth","  check is_arr source","  check is_uint line","  check is_str key","  check is_uint depth","  let a arr","  let n div depth 2","  let n trunc n","  var n sub line n","  let length min source.length depth","  let nup add n length","  if lt n 1","   assign n 1","  elseif gte nup source.length","   assign n sub source.length length","   assign n inc n","   if lt n 1","    assign n 1","  fornum length","   let n add n i","   var p \" \"","   if same n line","    assign p \">\"","   let index dec n","   var code at source index","   if is_empty key","    check is_str code","   else","    assign code get code key","   let o obj n p code","   push a o","  let a2 arr","  forof a","   push a2 v.code","  let s join a2","  let s str_unindent s","  let a3 split s","  forin a3","   let code at a3 i","   let o at a i","   assign o.code code","   if is_empty v.code","   push r v"," var r origin source line key depth"," if gte r.length depth"," var n inc depth"," while lte n source.length","  assign r origin source line key n","  if gte r.length depth","  assign n inc n","fn dbg_source_map"," let lines_js dbg_source"," let lines_js split lines_js"," let paths arr"," forof relatives","  let path at pool v","  push paths path"," let files obj"," forin contents","  let content get contents k","  let n to_uint k","  let path at pool n","  let lines arr","  forof content","   let s at pool v","   push lines s","  put files path lines"," let source arr"," if is_node"," elseif is_browser","  fornum 7","   push source null"," forin paths","  var n i","  if gte n paths.length","  let path at paths n","  let index at indices n","  var line_js n","  elseif is_browser","   assign line_js add line_js 5","  let js at lines_js line_js","  let cs get files path","  let cs at cs index","  let o obj path index js cs","  push source o"," ret obj files source","fn dbg_source x"," fn get_source","   let path at process.argv 1","   let s file_read path","   ret s","   ret html.outerHTML","  assign r get_source"," else","  assign r file_read x"," let r trim_r r"," let r split r"," while true","  let s pop r","  if match_l s \"const app=\""," let r join r","fn dec x"," ret sub x 1","fn dedup x"," let r arr","  if not contain r v","fn delimit x y","  ret delimit x is_fragment"," check is_fn y","  let right v","  if is_empty r","   push r right","  let left back r","  let fragment concat left right","  if is_fragment fragment","   drop r","   push r fragment","fn different x y"," ret inline \"x!==y\"","fn div x y z:etc"," check different y 0"," let r inline \"x/y\"","  ret div r z:etc","fn drop x y","  ret drop x 1"," pop x y","fn dump x"," let name fn_args"," check is_single name"," let name front name"," log name x","fn dup x"," check is_container x"," if is_arr x","  ret slice x 0"," elseif is_obj x","  let r obj","  merge r x","  stop","fn eq x y"," if same x y","  ret true","  if is_arr y","   fornum min x.length y.length","    let xval at x i","    let yval at y i","    if neq xval yval","     ret false","   ret eq x.length y.length"," if is_obj x","  if is_obj y","   let xkeys obj_keys x","   let ykeys obj_keys y","   let xvals obj_vals x","   let yvals obj_vals y","   fornum min xkeys.length ykeys.length","    let xkey at xkeys i","    let ykey at ykeys i","    if neq xkey ykey","    let xval at xvals i","    let yval at yvals i","   ret eq xkeys.length ykeys.length"," let n cmp x y"," ret same n 0","fn every x y","  if not y v","fn explode x","  push r v","fn extract x y"," var r false"," let a dup x"," clear x"," forof a","  if same v y","   assign r true","   push x v","fn find x y"," let value y"," fn match x","  ret same x value"," ret x.findIndex match","fn flower x"," let n tty_width","  let s repeat \"*\" n","  ret"," let s1 repeat \"*\" n"," let s2 repeat \"*\" 2"," let s2 concat s2 \" \""," let s2 concat s2 x"," let s2 concat s2 s1"," let s2 slice_l s2 n"," log s2","fn fn_args"," let stack dbg_callstack"," let frame at stack 3"," let r split frame.cs \" \""," shift r","fn fn_match x"," let r obj"," forin fns","  if not match k x","  let v get fns k","  put r k v","fn fn_select x"," let pattern concat x \"*\""," let fns fn_match pattern","  let name strip_l k x","  put r name v","fn front x"," ret at x 0","fn get x y"," check is_obj x"," check has x y"," ret inline \"x[y]\"","fn gn_run x y:etc"," check is_gn x"," let generator x y:etc"," fn on_timer","  let iterator generator.next","  if iterator.done","  time_timeout on_timer"," on_timer","fn gt x y"," ret inline \"x>y\"","fn gte x y"," ret inline \"x>=y\"","fn has x y"," ret inline \"y in x\"","fn head x y"," if lt x.length y","  if is_str x","   ret x","  elseif is_arr x","   ret dup x"," ret slice_l x y","fn implode x"," ret join x \"\"","fn inc x"," ret add x 1","fn indent x y","  ret indent x 1"," forof split x","  let s trim_r v","  if is_empty s","   push a s","   let indent repeat \" \" y","   let s concat indent s"," ret join a","fn init_common x:etc"," fn deinit","   deinit_node","  if gte verbose 0","   log_profile"," fn log_profile","  let profile time_hn start false","  let profile to_lit profile","  let profile concat \"profile=\" profile","  log app profile","  assign global.cwd dir_current","  let script at process.argv 1","  let dir path_dir script","  dir_change dir"," if is_fn init","  init x:etc","  deinit"," elseif is_gn init","  let generator init x:etc","  fn on_timer","   let iterator generator.next","   if iterator.done","    deinit","    ret","   time_timeout on_timer","  on_timer","fn insert x y z:etc"," check between y 0 x.length"," x.splice y 0 z:etc","fn is_access x"," if not is_str x"," if is_empty x"," let a split x \".\""," if is_single a"," ret every a is_identifier","fn is_alnum x","  if same v \"_\"","  elseif is_alpha v","  elseif is_digit v","fn is_alpha x","  if is_lower v","  elseif is_upper v","fn is_arr x"," ret Array.isArray x","fn is_atom x"," if is_alnum x"," if is_access x"," if is_tuple x"," if is_numeric x"," if is_lit x"," if is_lit_char x"," ret false","fn is_blank x"," if is_space x","fn is_bool x"," let s typeof x"," ret same s \"boolean\"","fn is_browser"," ret has_window","fn is_char x"," ret same x.length 1","fn is_comment x"," if not is_ln x"," ret match_l x \"//\"","fn is_container x","fn is_cool x"," if is_num x","fn is_def x"," ret not is_undef x","fn is_digit x","  if not contain digit v","fn is_empty x"," if is_vec x","  ret same x.length 0"," if obj x","  let keys obj_keys x","  ret is_empty keys","fn is_false x"," ret same x false","fn is_fn x"," if different s \"function\""," if same x.constructor.name \"GeneratorFunction\"","fn is_fragment x","fn is_full x","  ret not is_empty x","fn is_gn x"," if different x.constructor.name \"GeneratorFunction\"","fn is_identifier x"," let s front x"," if same s \"_\""," elseif is_alpha s","  if not is_alnum v","fn is_indented x","  if is_empty v","  let c front v","  if not is_space c","fn is_int x"," ret Number.isInteger x","fn is_ip x"," if is_ip4 x"," if is_ip6 x","fn is_ip4 x"," if different a.length 4","  if not is_digit v","  let n to_uint v","  if gt n 255","fn is_ip6 x"," let a split x \":\""," if lt a.length 3"," if gt a.length 8","  if contain v \"_\"","  if gt v.length 4","fn is_json x"," try","  json_decode x"," catch","fn is_last x y"," ret same n y","fn is_lisp x"," let a split x \"-\""," ret every a is_alnum","fn is_lit_char x"," if not match_l x \"'\""," if not match_r x \"'\""," let s strip_l x \"'\""," let s strip_r s \"'\""," if is_empty s"," let s concat \"\\\"\" s \"\\\"\""," ret is_lit s","fn is_lit x"," if not is_json x"," let v json_decode x"," if not is_str v"," let s json_encode v"," ret same s x","fn is_ln x","  ret not is_txt x","fn is_lower x","  if not contain lower v","fn is_many x","  ret gt x.length 1","fn is_name x"," if is_identifier x","fn is_node"," ret not is_browser","fn is_none x"," if is_null x","fn is_noun x","fn is_null x"," ret same x null","fn is_num x"," if Number.isNaN x"," if same x Number.NEGATIVE_INFINITY"," if same x Number.POSITIVE_INFINITY"," ret same s \"number\"","fn is_numeric x"," if not is_num v","fn is_obj x"," ret same s \"object\"","fn is_pair x"," if not is_vec x"," ret same x.length 2","fn is_punct x","  if not contain punct v","fn is_single x","  ret same x.length 1","fn is_space x"," let s trim x"," ret is_empty s","fn is_str x"," ret same s \"string\"","fn is_token x"," if is_atom x"," if is_comment x","fn is_trivia x","fn is_true x"," ret same x true","fn is_tuple x","  if is_identifier v","fn is_txt x","  ret contain x \"\\n\"","fn is_uint x"," if is_int x","  ret gte x 0","fn is_undef x"," ret same x undefined","fn is_upper x","  if not contain upper v","fn is_url x"," if match_l x \"http://\""," elseif match_l x \"https://\"","  url_parse x","fn is_vec x","fn is_word x"," if contain x \" \""," if contain x \"\\n\""," if contain x \"\\r\"","fn is_xn x"," if is_fn x"," if is_gn x","fn join x y","  ret join x \"\\n\""," ret x.join y","fn json_decode x"," ret JSON.parse x","fn json_dump x"," ret JSON.stringify x null 1","fn json_encode x","  ret \"undefined\""," ret JSON.stringify x","fn log x:etc"," if is_str output","   if is_str v","    push a v","   let s to_dump v","  let s join a \" \"","  let s concat s \"\\n\"","  let s concat output s","  assign global.output s","  if is_color","    let i to_i k","    let v at x i","    var s null","    if is_str v","     assign s v","    else","     assign s inspect v","    write s","    let last dec x.length","    if different i last","     write \" \"","   write \"\\n\""," console.log x:etc","fn lt x y"," ret inline \"x<y\"","fn lte x y"," ret inline \"x<=y\"","fn main"," fn log_compile","  let compile time_hn compile","  let compile to_lit compile","  let compile concat \"compile=\" compile","  let sloc dbg_source","  let sloc split sloc","  let sloc sloc.length","  let sloc concat \"sloc=\" sloc","  log app compile sloc"," var has_window true","  inline \"window\"","  assign has_window false"," if has_window","  assign window.global window","  assign global.has_window true","  assign global.has_window false"," assign global.zombie false"," assign global.start time_get"," assign global.punct \"!\\\"#$%&'()*+,-./:;<=>?@[\\\\]^`{|}~\""," assign global.digit \"0123456789\""," assign global.lower \"abcdefghijklmnopqrstuvwxyz\""," assign global.upper to_upper lower"," assign global.output null"," assign global.verbose 0"," assign global.color false"," assign global.minute 60"," assign global.hour mul 60 minute"," assign global.day mul 24 hour"," assign global.month mul 30 day"," assign global.year mul 12 month"," assign global.traces arr","  init_node","  init_browser"," let skip arr \"init_common\" \"init_node\" \"init_browser\"","  if contain skip k","  if match k \"init_*\"","   let v get fns k","   v","  let args slice process.argv 2","  if extract args \"--verbose\"","   assign verbose inc verbose","  if extract args \"--quiet\"","   assign verbose dec verbose","  if extract args \"--color\"","   assign color true","   log_compile","  init_common args:etc","  fn on_load","   if same document.readyState \"complete\"","    log_compile","    init_common","    assign window.onload null","  assign window.onload on on_load","fn map x y","  let v y v","  check is_def v","fn match_l x y"," if is_empty y"," if gt y.length x.length"," let s slice_l x y.length"," ret same s y","fn match_r x y"," let s slice_r x y.length","fn match x y"," let s replace y \".\" \"\\\\.\""," let s replace s \"*\" \".*\""," let s concat \"^\" s \"$\""," let s new RegExp s"," ret s.test x","fn max x:etc"," ret Math.max x:etc","fn merge x y"," check is_obj y"," Object.assign x y","fn min x:etc"," ret Math.min x:etc","fn mul x y z:etc"," let r inline \"x*y\"","  ret mul r z:etc","fn mute x y:etc"," ret o.result","fn neq x y"," ret not eq x y","fn nop","fn obj_delete x y"," forin x","  if same k y","  let v get x k","fn obj_keys x"," ret Object.keys x","fn obj_length x"," let keys obj_keys x"," ret keys.length","fn obj_vals x"," ret Object.values x","fn obj"," ret inline \"{}\"","fn on x"," let fn value x"," fn on_fn x:etc","  if zombie","  ret fn x:etc"," if zombie"," ret value on_fn","fn or x y z:etc"," let r inline \"x||y\"","  ret or r z:etc","fn pad_l x y z"," check is_cool x"," if is_uint x","  let s to_json x","  if is_undef y","   if is_undef z","    ret pad_l s \"0\" 3","   ret pad_l s \"0\" z","  ret pad_l s y z"," check is_uint z"," ret x.padStart z y","fn pad_r x y z","    ret pad_r s \"0\" 3","   ret pad_r s \"0\" z","  ret pad_r s y z"," ret x.padEnd z y","fn paren x"," ret concat \"(\" x \")\"","fn partial x y:etc"," let args y"," fn result x:etc","  ret fn args:etc x:etc"," ret value result","fn path_concat x y z:etc"," let x strip_r x \"/\""," let y strip_l y \"/\""," let r concat x \"/\" y","  ret path_concat r z:etc","fn path_file x"," let s path_base x"," let a split s \".\"","  ret s"," drop a"," ret join a \".\"","fn path_fix x"," if match_r x \"/\"","  ret x"," ret concat x \"/\"","fn path_join x"," ret join x \"/\"","fn path_split x"," ret split x \"/\"","fn path_strip x"," ret strip_r x \"/\"","fn path_up x"," let a path_split x"," pop a"," ret path_join a","fn pop x y","  ret pop x 1"," if same y 1","  let r back x","  remove x n 1","  ret value r"," remove x n y","fn prepend x y"," let a dup y"," reverse a","  unshift x v","fn profile x y:etc"," check is_xn x"," var n null"," let before time_now","  assign r x y:etc"," elseif is_gn x","  let generator x y:etc","  while true","    assign r iterator.value","    brk"," let after time_now"," let time sub after before"," let time to_fixed time"," let time concat time \"s\""," let time to_lit time"," let time concat \"profile=\" time"," log x.name time","fn push x y"," x.push y","fn put x y z","  check same arguments.length 3"," if has x y"," set x y z","fn random x","  ret random Number.MAX_SAFE_INTEGER"," let r Math.random"," let r mul r x","  ret trunc r","fn record x y:etc"," check is_null output"," assign global.output \"\""," var result null","  assign result x y:etc"," catch e","  assign global.output null","  throw e"," let s trim_r output"," assign r.result result"," assign r.output s","fn reject x y","  if y v","fn remove x y z","  ret remove x y 1"," let n add y z"," check between n 0 x.length"," x.splice y z","fn repeat x y"," ret x.repeat y","fn replace_rec x y z"," check is_str z"," var r x"," while contain r y","  assign r replace r y z","fn replace x y z","  let a split x y","  ret join a z"," elseif is_arr x","   if same v y","    push r z","fn report_html report length"," check is_obj report"," if is_def length","  check is_uint length"," var pre report_render report","  assign pre txt_cut pre length"," let style \"font-family:monospace;font-size:1.1vw\""," let style to_lit style"," let body_open concat \"<body style=\" style \">\""," let pre concat \"<pre>\" pre \"</pre>\""," let title concat \"<title>\" report.title \"</title>\""," let html arr"," push html \"<!doctype html>\""," push html \"<html>\""," push html \"<head>\""," push html title"," push html \"</head>\""," push html body_open"," push html pre"," push html \"</body>\""," push html \"</html>\""," ret join html","fn report_init error query"," check is_obj error"," if is_def query","  check is_obj query"," fn log_browser","  let location to_str location","  var referrer null","  if is_full document.referrer","   let url_referer url_parse document.referrer","   let url_location url_parse location","   if different url_referer.host url_location.host","    assign referrer document.referrer","  let browser browser_get","  let agent navigator.userAgent","  let o obj location referrer browser agent","  let t to_tbl o"," fn log_server","  let url query.url.href","  let headers query.request.headers","  if has headers \"referrer\"","   assign referrer get headers \"referrer\"","  elseif has headers \"referer\"","   assign referrer get headers \"referer\"","  let remote query.remote","  let o obj url referrer remote"," fn log_trace","  if is_empty traces","  flower \"trace\"","  forof traces","   log \">\" v"," fn log_backtrace x","  check is_str x","  let backtrace dbg_backtrace x","  if is_empty backtrace","  tbl_remove_column backtrace \"njs\"","  tbl_remove_column backtrace \"js\"","  let backtrace tbl_render backtrace","  let backtrace txt_prepend backtrace \"> \"","  flower \"backtrace\"","  log backtrace"," let stack error.stack"," let message error.message"," var title space app \"/\" error.constructor.name \"/\" message"," if is_browser","  assign title space title \"/\" location.hostname"," elseif is_node","  let host os_host","  assign title space title \"/\" host"," var browser \"\""," var server \"\""," let cs capture dbg_origin_xs stack \"cs\""," let backtrace capture log_backtrace stack"," let js capture dbg_origin_xs stack \"js\""," var empty true","  assign browser capture log_browser","  assign empty false"," if is_obj query","  assign server capture log_server"," if is_full trace"," if is_full cs"," if is_full backtrace"," if gt verbose 0","  if is_full js","   assign empty false"," if empty","  trace \"No error stack.\""," let trace capture log_trace"," ret obj title app message browser server trace cs backtrace js","fn report_log report"," flower report.title"," if is_full report.browser","  log report.browser"," if is_full report.server","  log report.server"," if is_full report.trace","  log report.trace"," if is_full report.cs","  log report.cs"," if is_full report.backtrace","  log report.backtrace","  if is_full report.js","   log report.js"," let message to_lit report.message"," let end space \"end-report\" report.app \"/\" message"," flower end","fn report_render report"," let s paren report.title"," let s space \"An error has occured\" s"," let s concat s \".\""," push a s"," push a \"\"","  push a report.browser","  push a \"\"","  push a report.server","  push a report.trace","  push a report.cs","  push a report.backtrace"," if is_full report.js","  push a report.js","fn reverse x"," x.reverse","fn round x"," ret Math.round x","fn salt x y","  ret salt x \"azertyuiop\""," let a1 explode x"," let a2 explode y"," while is_full a1","  if is_empty a2","   let a explode y","   append a2 a","  let c1 shift a1","  let c2 shift a2","  let n1 asc c1","  let n2 asc c2","  let n xor n1 n2","fn same x y"," ret inline \"x===y\"","fn scan x y z","  ret scan x is_token","  ret scan x y is_fragment"," check is_fn z"," fn group x y","  check is_fn y","  let fragments dup x","  while is_full fragments","   let a reduce fragments y","   if is_full a","    let s implode a","    push r s","    shift fragments a.length","    let s shift fragments"," fn reduce x","  check is_full x","  let r dup x","  while is_full r","   let s implode r","   if y s"," let a delimit x z"," ret group a z","fn set x y z","fn shift x y","  ret shift x 1","  let r front x","  remove x 0 1"," remove x 0 y","fn shuffle x","  let n random a.length","  let v at a n","  remove a n","gn sleep x"," let start time_now","  let elapsed time_now","  let elapsed sub elapsed start","  if gte elapsed x","  yield","fn slice_l x y"," ret slice x 0 y","fn slice_r x y"," ret slice x n y","fn slice x y z"," let n1 inc x.length"," check between y 0 n1","  let n sub x.length y","  ret slice x y n"," check between z 0 n1"," let n2 add y z"," check between n2 0 n1"," ret x.slice y n2","fn sort x y","   x.sort","   x.sort y","  fn compare x y","   check is_obj x","   ret cmp x.key y.key","   ret sort x compare","  forin x","   let key k","   let value get x k","   let o obj key value","  sort a y","   let k v.key","   put r v.key v.value","fn space x:etc"," ret join x \" \"","fn split x y","  ret split x \"\\n\"","  ret arr"," ret x.split y","fn stop"," throw new Error \"stop\"","fn str_indent x"," if is_blank x","  ret 0"," let s trim_l x"," ret sub x.length s.length","fn str_unindent x"," while is_indented r","  forof split r","   if is_empty v","   let s slice v 1","  assign r join a","fn strip_l x y"," if match_l x y","  let n sub x.length y.length","  ret slice_r x n"," ret x","fn strip_r x y"," if match_r x y","  ret slice_l x n","fn sub x y z:etc"," let r inline \"x-y\"","  ret sub r z:etc","fn tail x y"," ret slice_r x y","fn tbl_column x y","  let s get v y","  push r s","fn tbl_columns x"," let first front x"," ret obj_keys first","fn tbl_init x"," ret arr","fn tbl_remove_column x y"," let t dup x"," forof t","  let v obj_delete v y","fn tbl_render x"," fn stringify_tbl x","   let row dup v","   forin v","    let v get row k","    let s json_encode v","    set row k s","   push r row"," fn pad_column x","   if is_num v","    let s to_fixed v","    push a s","   elseif is_str v","    stop","  var length 0","   assign length max length v.length","   if is_numeric v","    let s pad_l v \" \" length","    let s pad_r v \" \" length"," let tbl stringify_tbl x"," let titles tbl_columns tbl"," let columns arr"," forof titles","  let title v","  let column tbl_column tbl title","  unshift column title","  let column pad_column column","  push columns column"," var length 0"," forof columns","  let column v","  var n 0","  forof column","   assign n max n v.length","  assign length add length n"," assign length add length columns.length"," assign length dec length"," let separator repeat \"-\" length"," push a separator"," let header arr","  let s shift v","  push header s"," let s join header \" \""," let first front columns"," forin first","  let line arr","  forof columns","   let s at v i","   push line s","  let s join line \" \"","fn time_get"," let n Date.now"," ret div n 1000","fn time_hn x y","  ret time_hn x true"," fn get_unit x","  check is_num x","  if lt x 10","   let n to_fixed x","   ret concat n \"s\"","  if lt x minute","   let n trunc x","  if lt x hour","   let n div x minute","   let n trunc n","   ret concat n \"m\"","  if lt x day","   let n div x hour","   ret concat n \"h\"","  if lt x month","   let n div x day","   ret concat n \"d\"","  if lt x year","   let n div x month","  let n div x year","  ret concat n \"y\""," let now time_get"," if same x now","  ret \"now\""," if gt x now","  let n sub x now","  let s get_unit n","  if y","   ret concat \"in \" s"," let n sub now x"," let s get_unit n"," if y","  ret concat s \" ago\""," ret s","fn time_interval x y","  ret time_interval x 0"," let fn on x"," let n mul y 1000"," setInterval fn n","fn time_now"," let n time_get"," ret sub n start","fn time_str x","  ret time_str n"," let h o.getHours"," let h pad_l h \"0\" 2"," let m o.getMinutes"," ret concat h \"h\" m \"m\"","fn time_timeout x y","  ret time_timeout x 0.01"," setTimeout fn n","fn to_base36 x"," ret x.toString 36","fn to_dump val"," if is_undef val"," assign val clone val"," if is_arr val","  if is_empty val","   ret \"arr\"","  push a \"arr\"","  forin val","   let v at val i","   let sharp concat \"#\" i","   if is_ln s","    let s space \"\" sharp s","    let s2 space \"\" sharp","    let s indent s 2","    push a s2","  push a \"end\"","  ret join a"," elseif is_obj val","   ret \"obj\"","  push a \"obj\"","   let v get val k","   var key k","   if not is_word key","    assign key to_lit key","    let s space \"\" key s","    let s2 space \"\" key"," elseif is_word val","  ret to_lit val"," elseif is_fn val","  ret space \"fn\" val.name","  ret json_encode val","fn to_fixed x y","  ret to_fixed x 2"," let a x.toFixed y"," let a split a \".\""," let integer front a"," var float back a"," let digits explode float"," while is_full digits","  let c back digits","  if different c \"0\"","  drop digits"," if is_empty digits","  ret integer"," assign float implode digits"," ret concat integer \".\" float","fn to_i x"," ret Number.parseInt x","fn to_int x"," let r to_num x"," check is_int r","fn to_json x"," ret json_encode x","fn to_lit x","fn to_lower x"," ret x.toLowerCase","fn to_num x"," let r json_decode x"," check is_num r","fn to_str x"," ret x.toString","fn to_tbl x","  let key k","  let value get x k","  let o obj key value","fn to_uint x"," let r to_int x"," check is_uint r","fn to_upper x"," ret x.toUpperCase","fn trace x:etc"," if is_single x","  let first front x","  if is_str first","   let a split first","   if is_many a","    forof a","     trace v","  log \"trace>\" x:etc","  if not is_str v","   let s json_encode v"," let s join a \" \""," push traces s"," if gt traces.length 64","  shift traces","fn trim_l x"," ret x.trimStart","fn trim_r x"," ret x.trimEnd","fn trim x"," ret x.trim","fn trunc x"," ret Math.trunc x","fn tty_width","  if is_batch","   ret 140","  ret process.stdout.columns","  ret 80","fn txt_compact x","  let a split x","  let a txt_compact a"," let s join x"," let s trim_r s"," let a split s","  let first front a","  let first trim_r first","  if is_empty first","  if not is_empty v","  let last back r","  if is_empty last","fn txt_cut x y","  check is_uint y","  let a txt_cut a y","  let s head v y","fn txt_indent x","  let a txt_indent a","   push r s","   let s concat \" \" s","fn txt_prepend x y","  let a txt_prepend a y","  let s concat y v","fn unshift x y"," x.unshift y","fn unwrap x","  ret json_decode x","  ret split x \".\"","  ret split x \":\"","fn url_parse x"," let url new URL x"," let href url.href"," let protocol strip_r url.protocol \":\""," let user url.username"," let password url.password"," let host url.hostname"," let port url.port"," let path url.pathname"," let hash url.hash"," let params obj"," forof url.searchParams.keys","  let value url.searchParams.get v","  put params v value"," ret obj href protocol user password host port path params hash","gn wait","fn xor x y z:etc"," let r inline \"x^y\"","  ret xor r z:etc","fn app_list"," forof dir_read \"src\" true","  let base path_base v","  let a split base \"-\"","  let prefix shift a","  if different prefix \"app\"","  let name join a \"-\"","  push r name","fn beep"," os_detach \"play\" \"-n\" \"synth\" 0.1 \"sine\" 880 \"vol\" 0.5","fn deinit_node"," dir_change cwd"," let tmp path_tmp"," let tmp path_dir tmp"," fs_remove tmp"," let app path_up tmp"," let paths dir_read app true"," if is_empty paths","  fs_remove app","fn digest x"," file_save tmp x"," let r os_execute \"sha256sum\" \"--binary\" tmp"," let r split r \" \""," let r front r","fn dir_change x"," process.chdir x","fn dir_current"," ret process.cwd","fn dir_find x y"," forof dir_load x","  if match base y","fn dir_load x"," forof dir_read x true","  if is_file v","  elseif is_dir v","   let a dir_load v","   append r a","fn dir_make x"," let recursive true"," let option obj recursive"," fs.mkdirSync x option","fn dir_read x y","  ret dir_read x false"," let dir path_real x"," let a fs.readdirSync dir"," sort a","  let s path_concat dir v","  if is_file s","   if is_dir s","fn dir_reset x"," fs_remove x"," dir_make x","fn dir_size x","  let n file_size v","  assign r add r n","fn file_read x"," let o fs.readFileSync x"," ret o.toString","fn file_save x y"," if is_file x","  let s file_read x","  if same s y"," let dir path_dir x"," if not is_dir dir","  dir_make dir"," file_write x y","fn file_size x"," let v fs.statSync x"," ret v.size","fn file_write x y"," fs.writeFileSync x y","fn fs_copy x y","  if is_dir y","   let base path_base x","   let path path_concat y base","   fs_copy x path"," let force true"," let o obj force recursive"," fs.cpSync x y o","fn fs_remove x"," fs.rmSync x o","fn init_node","  deinit_node","  assign zombie true","  process.exit 1"," fn on_uncaught_exception error message","  check is_obj error","  check is_str message","  let report report_init error","  assign report.title space report.title \"/\" message","  report_log report","  if is_remote","   report_mail report"," assign global.binary process.execPath"," assign global.cp require \"child_process\""," assign global.crypto require \"crypto\""," assign global.fs require \"fs\""," assign global.http require \"http\""," assign global.https require \"https\""," assign global.os require \"os\""," assign global.path require \"path\""," assign global.tls require \"tls\""," assign global.tty require \"tty\""," assign global.util require \"util\""," process.on \"uncaughtExceptionMonitor\" on_uncaught_exception"," dir_make tmp","fn inspect x"," let showHidden false"," let depth null"," let colors true"," let maxArrayLength null"," let maxStringLength null"," let o obj showHidden depth colors maxArrayLength maxStringLength"," ret util.inspect x o","fn ip_host x"," let r os_execute \"host\" x"," let r back r"," if contain r \"not found\"","  ret null"," let r strip_r r \".\"","fn ip_list"," let s os_execute \"hostname\" \"--all-ip-addresses\""," ret split s \" \"","fn ip_v4"," forof ip_list","  if is_ip4 v","   ret v","fn ip_v6","  if is_ip6 v","fn is_batch"," if not is_node"," ret not is_interactive","fn is_color"," if color"," if is_interactive","fn is_dir x"," let throwIfNoEntry false"," let o obj throwIfNoEntry"," let o fs.statSync x o"," if is_undef o"," ret o.isDirectory","fn is_file x"," ret o.isFile","fn is_fs x"," ret is_def o","fn is_interactive"," ret process.stdout.isTTY","fn is_readable x","  var fd null","  try","   assign fd fs.openSync x","  catch","  let n file_size x","  if gt n 0","   let buffer Buffer.alloc 1","   try","    fs.readSync fd buffer","   catch","    fs.closeSync fd","    ret false","  fs.closeSync fd"," elseif is_dir x","   fs.readdirSync x","fn mail to subject body from"," check is_str to"," check is_str subject"," check is_str body"," if is_undef from","  ret mail to subject body \"mabynogy@gmail.com\""," let token app_token \"mabynogy\""," let cfg arr"," push cfg \"account gmail\""," push cfg \"host smtp.gmail.com\""," push cfg \"port 587\""," push cfg \"protocol smtp\""," push cfg \"auth on\""," let s space \"from\" from"," push cfg s"," let s space \"user\" from"," let s space \"password\" token"," push cfg \"tls on\""," push cfg \"tls_starttls on\""," push cfg \"tls_trust_file /etc/ssl/certs/ca-certificates.crt\""," push cfg \"account default: gmail\""," let body2 arr"," let s concat \"from:\" from"," push body2 s"," let s concat \"to:\" to"," let s concat \"subject:\" subject"," push body2 \"mime-version:1.0\""," push body2 \"content-type:text/html;charset=utf-8\""," push body2 \"\""," push body2 body"," let cfg join cfg"," let body join body2"," let cfg_path path_tmp \"msmtp.txt\""," let body_path path_tmp \"body.txt\""," file_save cfg_path cfg"," file_save body_path body"," let option_file concat \"--file=\" cfg_path"," os_system \"chmod\" 600 cfg_path"," let s os_shell \"msmtp\" \"--debug\" option_file \"--read-recipients\" \"<\" body_path"," let s txt_prepend s \" > \""," fs_remove cfg_path"," fs_remove body_path","fn open x"," os_system \"xdg-open\" x","gn os_capture x y:etc"," var closed false"," var status null"," var out \"\""," var err \"\""," fn on_out x","  check is_obj x","  let s to_str x","  write s","  assign out concat out s"," fn on_err x","  assign err concat err s"," fn on_close x","  if is_null x","  elseif is_uint x","  assign status x","  assign closed true"," let child cp.spawn x y"," fn on_sigint x","  child.kill x"," sigint on_sigint"," let on_out on on_out"," let on_err on on_err"," let on_close on on_close"," let stdout child.stdout"," let stderr child.stderr"," stdout.on \"data\" on_out"," stderr.on \"data\" on_err"," child.on \"close\" on_close"," while not closed"," let out trim_r out"," let err trim_r err"," os_log os_capture status x y:etc"," ret obj status out err","fn os_detach x y:etc"," let detached true"," let stdio \"ignore\""," let o obj detached stdio"," let r cp.spawn x y o"," r.unref","fn os_execute x:etc"," let o os_run x:etc"," if is_full o.out","  push a o.out"," if is_full o.err","  push a o.err"," let s join a"," ret trim_r s","fn os_home"," if is_root","  let name os_execute \"logname\"","  if contain name \" \"","  ret path_concat \"/home\" name"," ret os.homedir","fn os_host"," ret os.hostname","fn os_log call status args:etc"," check is_xn call"," check is_int status"," if same status 0"," var command front args"," if same command \"sudo\"","  let s at args 1","  assign command space command s"," let call replace call.name \"_\" \"-\""," let command to_lit command"," let status concat \"status=\" status"," trace call command status","gn os_prompt x y:etc"," let name x"," fn print x y","  let n tty_width","  let s strip_r s \"\\n\"","  let s txt_prepend s y","  let s txt_cut s n","  print x \"out\"","  print x \"err\""," os_log os_prompt status x y:etc"," ret status","fn os_ps"," let s os_execute \"ps\" \"aux\""," shift a","  let s replace_rec v \"  \" \" \"","  let pid at a 1","  let pid to_uint pid","  let path at a 10","  let args slice a 11","  let o obj pid path args","fn os_run x y:etc"," let maxBuffer mul 1 1024 1024 1024"," let encoding \"utf8\""," let option obj maxBuffer encoding"," let process cp.spawnSync x y option"," let out to_str process.stdout"," let err to_str process.stderr"," let status process.status"," os_log os_run status x y:etc","fn os_shell x:etc"," let command join x \" \""," ret cp.execSync command option","fn os_system x y:etc"," let stdio \"inherit\""," let o obj stdio"," let o cp.spawnSync x y o"," let r o.status"," os_log os_system r x y:etc","fn os_user"," let o os.userInfo"," ret o.username","fn path_base x"," ret path.basename x","fn path_dir x"," ret path.dirname x","fn path_ext x"," let s path.extname x"," ret strip_l s \".\"","fn path_real x"," ret fs.realpathSync x","fn path_tmp x","  ret path_tmp \"tmp.txt\""," let pid to_str process.pid"," let dir path_split x"," pop dir"," let dir path_join dir"," let dir path_concat \"tmp\" app pid dir"," let dir path_strip dir"," let file path_file x"," let ext path_ext x","  let id random","  let id to_base36 id","  let id head id 6","  let base concat file \"-\" id \".\" ext","  let r path_concat dir base","  if not is_file r","fn report_mail report"," let html report_html report 73"," mail author report.title html","fn sigint x"," let callback value x","  let pid concat \"pid=\" process.pid","  let signal concat \"signal=\" x","  log app pid signal","  callback x"," let on_sigint on on_sigint"," process.once \"SIGINT\" on_sigint","gn ssh_execute x:etc"," ret run ssh_pass x:etc","gn ssh_pass x:etc"," let args dup x"," let first shift args"," if is_str first","  ret run ssh_pass os_execute x:etc"," let arguments arr \"sshpass\" \"-p\" args:etc"," if is_fn first","  ret first arguments:etc"," elseif is_gn first","  ret run first arguments:etc","gn ssh_system x y:etc"," let r run ssh_pass x y:etc"," let a split r"," if is_full a","  log y:etc","  let a txt_prepend a \" > \"","  let s join a","fn sudo_save path data"," check is_str path"," check is_str data"," let base path_base path"," let tmp path_tmp base"," file_save tmp data"," os_system \"sudo\" \"mv\" \"--force\" tmp path","fn write x"," process.stdout.write x","fn app_token x"," let home os_home"," let path concat \".\" x"," let r path_concat home path"," let r file_read r"," let r trim r"," let r base36_decode r"," let r salt r","fn init_server"," assign global.login_vps \"debian@mabynogy.org\""," assign global.author \"marc@abiven.eu\"","fn is_local"," let host os_host"," ret same host \"castle\"","fn is_remote"," ret not is_local","fn is_root"," let s os_user"," ret same s \"root\"","fn mnt_clean x"," if is_readable x","  mnt_unmount x","  fs_remove x","fn mnt_unmount x"," ret os_execute \"fusermount\" \"-u\" x","fn app_home x"," let lines arr"," let js app_make x"," let js replace js \"</script>\" \"<\\\\/script>\""," push lines \"<!doctype html>\""," push lines \"<html>\""," push lines \"<head>\""," push lines \"<meta charset=\\\"utf-8\\\">\""," push lines \"</head>\""," push lines \"<body>\""," push lines \"<script>\""," push lines js"," push lines \"</script>\""," push lines \"</body>\""," push lines \"</html>\""," ret join lines","fn app_make x"," let cpl cpl_init x"," let s to_lit x"," log \"make\" s"," cpl_include cpl"," let r cpl_generate cpl"," let tmp concat x \"-tmp.js\""," let tmp path_tmp tmp"," file_save tmp r"," let success cpl_check_syntax cpl tmp"," check success"," cpl_deinit cpl","fn ast_assign cpl args children source"," check is_obj cpl"," check is_arr args"," check is_arr children"," check is_obj source"," check is_empty children"," let left front args"," check is_name left"," let right slice args 1"," let right expr_right right:etc"," let code concat left \"=\" right"," ret obj code source","fn ast_begin cpl args children source"," check is_empty args"," let r call_ast_block cpl children source"," if cpl_is_leaf cpl children","  check is_single r","  let node front r","  assign node.code trim node.code","fn ast_brk cpl args children source"," let code \"break\"","fn ast_call cpl args children source"," check is_full args"," let code expr_call args:etc","fn ast_catch cpl args children source"," let block call_ast_block_top cpl children source"," if is_empty args","  let code \"catch\"","  let node obj code source","  push r node","  append r block"," check is_single args"," let identifier front args"," check is_identifier identifier"," let code paren identifier"," let code concat \"catch\" code"," let node obj code source"," push r node"," append r block","fn ast_check cpl args children source"," let code join args \",\""," let code paren code"," let code concat \"check\" code","fn ast_cont cpl args children source"," let code \"continue\"","fn ast_else cpl args children source"," let code \"else\""," let block call_ast_block cpl children source","fn ast_elseif cpl args children source"," ret call_ast_if cpl args children source \"else if\"","fn ast_fn cpl args children source"," ret call_ast_xn cpl args children source \"function\"","fn ast_forin cpl args children source"," ret call_ast_for cpl args children source \"k in\"","fn ast_fornum cpl args children source"," let code expr_right args:etc"," let code concat \"let i=0;i<\" code \";i++\""," let code concat \"for\" code","fn ast_forof cpl args children source"," ret call_ast_for cpl args children source \"v of\"","fn ast_gn cpl args children source"," ret call_ast_xn cpl args children source \"function*\"","fn ast_if cpl args children source"," ret call_ast_if cpl args children source \"if\"","fn ast_include cpl args children source"," let path front args"," check is_lit path"," let path unwrap path","fn ast_inline cpl args children source"," let code front args"," check is_lit code"," let code unwrap code","fn ast_let cpl args children source"," check is_many args"," ret call_ast_declare cpl args children source \"const\"","fn ast_ret cpl args children source"," var code \"\"","  assign code \"return\"","  let right expr_right args:etc","  assign code space \"return\" right","fn ast_run cpl args children source"," let code space \"yield*\" code","fn ast_throw cpl args children source"," let code space \"throw\" code","fn ast_try cpl args children source"," let code \"try\"","fn ast_var cpl args children source"," ret call_ast_declare cpl args children source \"let\"","fn ast_while cpl args children source"," let code concat \"while\" code","fn ast_yield cpl args children source","  let code \"yield\"","  ret obj code source"," let code space \"yield\" code","fn call_ast_block_top cpl children source"," forof cpl_block cpl children","  let o dup v","  assign o.code indent o.code"," let code \"{\""," let open obj code source"," let code \"}\""," let close obj code source"," unshift r open"," push r close","fn call_ast_block cpl children source"," if not cpl_is_leaf cpl children","  let code \"{\"","  let open obj code source","  let code \"}\"","  let close obj code source","  unshift r open","  push r close","fn call_ast_declare cpl args children source keyword"," check is_str keyword"," let code slice args 1"," let code expr_right code:etc"," let code concat identifier \"=\" code"," let code space keyword code","fn call_ast_for cpl args children source keyword"," let code space \"const\" keyword code","fn call_ast_if cpl args children source keyword"," let code concat keyword code","fn call_ast_xn cpl args children source keyword"," fn get_argument x","  if is_identifier x","  if is_tuple x","   let a unwrap x","   check is_pair a","   let name front a","   let etc back a","   check is_identifier name","   check same etc \"etc\"","   ret concat \"...\" name"," let name front args"," check is_name name"," let args slice args 1"," let parameters map args get_argument"," let parameters join parameters \",\""," let list paren parameters"," let code concat name list","fn cpl_block x y","  let a cpl_translate x v","  append r a","fn cpl_check_syntax cpl path"," let o os_run binary \"--trace-uncaught\" \"--trace-deprecation\" \"--check\" path"," check is_empty o.out"," if same o.status 0","  check is_empty o.err"," check cpl_log_error cpl path o.err","fn cpl_compile x y"," let nodes cpl_load x y"," if is_full nodes","  let fn path_file y","  let fn replace fn \"-\" \"_\"","  push x.fns fn"," let nodes cpl_tokenize x nodes"," let nodes cpl_fold x nodes"," var nodes cpl_scope x nodes","  assign nodes cpl_block x nodes","  cpl_dump x"," append x.out nodes","fn cpl_deinit x"," let s json_dump x.cache"," file_save x.path s","fn cpl_dump x"," fn dump_ast x","  let args x.args","  let children x.children","  let a3 arr","  push a2 x.operator","  append a2 args","  forof a2","   if is_token v","    push a3 v","   let s to_lit v","   push a3 s","  let cs space a3:etc","  let source x.source","  let path source.path","  let ncs source.index","  let ncs inc ncs","  let o obj path ncs cs","  forof children","   let t dump_ast v","   forof t","    assign v.cs indent v.cs","   append r t","  if is_full children","   let cs \"end\"","   let o obj path ncs cs","   push r o"," forin x.stack","  let v at x.stack i","  let frame concat \"#\" n","  let title space \"compiler frame\" frame","  flower title","  let s dump_ast v","  let s tbl_render s","fn cpl_fold x y"," fn visit x","  let parent shift x","  let indent parent.indent","  let descendants arr","  while is_full x","   let o front x","   if gt o.indent indent","    shift x","    push descendants o","  let children arr","  while is_full descendants","   let o visit descendants","   push children o","  let operator parent.operator","  let args parent.args","  let source parent.source","  ret obj operator args children source"," let nodes dup y"," while is_full nodes","  let o visit nodes","fn cpl_generate x"," let pool arr"," fn get_index x","  let r find pool x","  if gte r 0","  let r pool.length","  push pool x"," forof x.out","  push a v.code"," let relatives arr"," let indices arr","  let source v.source","  if not contain paths path","   push paths path","  let n get_index path","  push relatives n","  push indices source.index"," let contents obj"," forof paths","  let key get_index v","  let key to_str key","  let path path_concat \"src\" v","  let content file_read path","  let content cpl_uncomment x content","  let value arr","  forof split content","   let index get_index v","   push value index","  put contents key value"," let app to_lit x.app"," let app concat \"const app=\" app"," push a app"," let compile time_get"," let compile trunc compile"," let compile concat \"const compile=\" compile"," push a compile"," let pool json_encode pool"," let pool concat \"const pool=\" pool"," push a pool"," let relatives json_encode relatives"," let relatives concat \"const relatives=\" relatives"," push a relatives"," let indices json_encode indices"," let indices concat \"const indices=\" indices"," push a indices"," let contents json_encode contents"," let contents concat \"const contents=\" contents"," push a contents"," let fns join x.fns \",\""," let fns brace fns"," let fns concat \"const fns=\" fns"," push a fns"," push a \"main()\"","fn cpl_include x"," fn get_files x"," fn get_includes x","  let dir get_app_dir x","  let a path_concat dir \"include.txt\"","  let a file_read a","  let a trim a","  forof split a","   let s path_concat \"src\" v","  push r dir"," fn get_app_dir x","  let r concat \"src/app-\" x","  if is_dir r","  let r concat \"src/spa-\" x"," let includes get_includes x.app"," let files get_files includes"," forof files","  let ext path_ext v","  if different ext \"cs\"","  cpl_compile x v","fn cpl_init x"," let path \"cache.txt\""," fn load_cache","  if is_file path","   ret json_decode s","  ret obj"," let cache load_cache"," let asts fn_select \"ast_\""," let app x"," let fns arr"," let stack arr"," let out arr"," ret obj app asts fns stack out path cache","fn cpl_is_call x y"," if same y \"call\""," forin x.asts","fn cpl_is_leaf x y"," if not is_single y"," let node front y"," let operator node.operator"," if cpl_is_call x operator"," let operators arr \"brk\" \"check\" \"cont\" \"inline\" \"ret\" \"run\" \"throw\" \"yield\""," ret contain operators operator","fn cpl_load x y"," let s file_read y"," let s cpl_uncomment x s"," let path dir_current"," let path path_concat path \"src\""," let path path_fix path"," let path strip_l y path"," let lines split s"," forin lines","  let v at lines i","  let index i","  let code v","  let source obj path index","  let o obj code source","fn cpl_log_error cpl path err"," check is_str err"," fn process cpl path err","  check is_obj cpl","  check is_str path","  check is_str err","  let s txt_compact err","  let a split s","  let line_js shift a","  let line_js split line_js \":\"","  let line_js back line_js","  let line_js to_uint line_js","  shift a 3","  let message shift a","  flower message","  let line line_js","  let o obj line path","  if gt line_js cpl.out.length","  let index dec line_js","  let o at cpl.out index","  let source o.source","  let src path_concat \"src\" source.path","  let content file_read src","  let content cpl_uncomment cpl content","  let content split content","  let line_cs inc source.index","  let s dbg_origin content line_cs \"\"","  let content dbg_source path","  let s dbg_origin content line_js \"\"","  ret process cpl path err","  let report report_init e","  flower report.title","fn cpl_scan cpl str"," check is_str str"," fn is_complex x","  if not is_str x","  if contain x \"//\"","  if contain x \"\\\"\""," let s trim str"," if is_complex s","  if has cpl.cache s","   let r get cpl.cache s","   let r dup r","  let r scan s","  let r reject r is_trivia","  let a dup r","  put cpl.cache s a"," let r split s \" \""," let r reject r is_empty","fn cpl_scope x y"," fn is_declare x","  if same x \"let\"","  if same x \"var\"","  let node shift a","  let operator node.operator","  let args node.args","  let source node.source","  let declare operator","  var name null","  var rvalue null","  if is_full args","   assign name front args","   assign rvalue slice args 1","  if is_declare operator","   check is_str name","   check is_arr rvalue","   let operator \"let\"","   let args arr \"_\" rvalue:etc","   let children arr","   let node2 obj operator args children source","   push r node2","   let operator \"begin\"","   let args arr","   let node3 obj operator args children source","   push r node3","   let operator declare","   let args arr name \"_\"","   let node4 obj operator args children source","   push node3.children node4","   let children cpl_scope x a","   let node5 obj operator args children source","   push node3.children node5","   clear a","   let children cpl_scope x node.children","   let node obj operator args children source","   push r node","fn cpl_tokenize x y","  let code v.code","  let source dup v.source","  let indent str_indent code","  let args cpl_scan x code","  if is_empty args","  let operator shift args","  if same operator \"end\"","   if is_empty args","  let node obj indent operator args children source","fn cpl_translate x y"," fn translate cpl operator args children source","  check is_str operator","  check is_arr args","  check is_arr children","  check is_obj source","  forin cpl.asts","   if different k operator","   let ast get cpl.asts k","   let r ast cpl args children source","   if is_arr r","    ret r","   check is_obj r","   ret arr r","  let args arr operator args:etc","  let r ast_call cpl args children source","  if is_arr r","  check is_obj r","  ret arr r"," let operator y.operator"," let args y.args"," let children y.children"," let source y.source","  ret translate x operator args children source","  unshift x.stack y","fn cpl_uncomment x y"," forof split y","  let indent str_indent v","  let tokens cpl_scan x v","  if is_empty tokens","   push r \"\"","  let indent repeat \" \" indent","  let line join tokens \" \"","  let line concat indent line","  push r line","fn expr_arg x","  let a unwrap x","  check is_pair a","  let name front a","  let etc back a","  check is_identifier name","  check same etc \"etc\"","  ret concat \"...\" name"," log \"argument\" s","fn expr_arr x:etc"," let args map x expr_arg"," let s join args \",\""," ret bracket s","fn expr_call x y:etc"," check is_name x"," let args map y expr_arg"," let args join args \",\""," let list paren args"," ret concat x list","fn expr_in x y z:etc"," check is_identifier x"," check is_identifier y"," check is_empty z"," ret space y \"in\" x","fn expr_inline x"," ret unwrap x","fn expr_instanceof x y z:etc"," ret space x \"instanceof\" y","fn expr_new x:etc"," let rvalue expr_rvalue x:etc"," ret space \"new\" rvalue","fn expr_obj x:etc"," check every x is_identifier"," let s join x \",\""," ret brace s","fn expr_right x y:etc","  if same x \"arr\"","  elseif same x \"obj\"","  elseif same x \"_\"","  elseif same x \"null\"","  elseif same x \"true\"","  elseif same x \"false\"","  elseif is_numeric x","  elseif is_lit x","   let fn to_lit \"function\"","   let condition paren x","   let condition concat \"typeof\" condition \"===\" fn","   let condition paren condition","   let call concat x \"()\"","   ret concat condition \"?\" call \":\" x"," ret expr_rvalue x y:etc","fn expr_run x:etc"," let call expr_call x:etc"," ret space \"yield*\" call","fn expr_rvalue x:etc","  if same first \"arr\"","   ret expr_arr","  elseif same first \"obj\"","   ret expr_obj","   ret first"," let args slice x 1"," if same first \"call\"","  ret expr_call args:etc"," elseif same first \"run\"","  ret expr_run args:etc"," elseif same first \"arr\"","  ret expr_arr args:etc"," elseif same first \"obj\"","  ret expr_obj args:etc"," elseif same first \"value\"","  ret expr_value args:etc"," elseif same first \"new\"","  ret expr_new args:etc"," elseif same first \"in\"","  ret expr_in args:etc"," elseif same first \"instanceof\"","  ret expr_instanceof args"," elseif same first \"inline\"","  ret expr_inline args:etc"," elseif same first \"not\"","  let right paren right","  ret concat \"!\" right","  ret expr_call x:etc","fn expr_value x y:etc"," check is_empty y","gn init x:etc"," fn is_app x","  let base concat \"app-\" x","  let path path_concat \"src\" base","  ret is_dir path"," let apps app_list","  dump apps"," let app shift args"," if not is_app app"," var run true"," if extract args \"--compile\"","  assign run false"," let cpl cpl_init app"," let code cpl_generate cpl"," let out concat \"out-\" app \".js\""," file_save out code"," if not cpl_check_syntax cpl out"," if not run"," let usage_path concat \"usage-\" process.pid \".txt\""," let usage_path path_tmp \"usage.txt\""," let output concat \"--output=\" usage_path"," let time arr \"time\" \"--format=%M\" output"," let arguments arr time:etc binary \"--trace-uncaught\" \"--trace-deprecation\" out args:etc","  push arguments \"--verbose\""," elseif lt verbose 0","  push arguments \"--quiet\""," if is_color","  push arguments \"--color\""," let o run os_capture arguments:etc"," let status o.status"," let err o.err"," if different status 0","  let s concat \"status=\" status","  log app s"," if is_full err","  if not cpl_log_error cpl out err","   let s txt_prepend err \"make-error> \"","   log s"," let usage file_read usage_path"," let usage trim usage"," fs_remove usage_path"," if gte verbose 0","  let usage split usage","  let usage back usage","  let usage to_uint usage","  let usage mul usage 1024","  let usage byte_size usage","  let usage to_lit usage","  let usage concat \"usage=\" usage","  log app usage"]
const relatives=[0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,17,17,17,17,17,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,34,34,34,34,34,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,37,37,37,37,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,39,39,39,39,39,39,39,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,43,43,43,43,43,43,43,43,43,43,43,44,44,44,44,44,44,44,44,44,44,44,44,44,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,51,51,51,51,51,52,52,52,52,52,52,52,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,54,54,54,54,54,54,55,55,55,55,55,55,56,56,56,56,56,56,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,58,58,58,58,58,59,59,59,59,59,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,62,62,62,62,62,62,62,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,66,66,66,66,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,68,68,68,68,68,68,68,68,68,68,69,69,69,69,69,69,69,69,70,70,70,70,71,71,71,71,71,71,72,72,72,72,72,72,73,73,73,73,73,73,73,73,74,74,74,74,74,74,74,74,75,75,75,75,76,76,76,76,76,76,76,76,76,76,76,76,76,77,77,77,77,77,77,77,77,77,77,77,77,77,77,78,78,78,78,79,79,79,79,79,79,79,79,79,79,79,79,79,79,80,80,80,80,80,80,80,80,80,80,81,81,81,81,81,81,82,82,82,82,82,82,82,82,82,82,82,82,82,82,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,85,85,85,85,86,86,86,86,86,86,86,86,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,90,90,90,90,90,90,90,90,90,90,91,91,91,91,91,91,91,91,91,91,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,94,94,94,94,94,94,95,95,95,95,95,95,95,95,95,95,95,95,95,96,96,96,96,96,96,97,97,97,97,97,97,97,97,97,97,98,98,98,98,99,99,99,99,99,99,99,99,100,100,100,100,100,100,100,100,101,101,101,101,102,102,102,102,102,102,102,102,102,102,102,102,102,102,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,104,104,104,104,104,104,104,104,104,104,105,105,105,105,105,105,106,106,106,106,106,106,106,106,106,106,106,106,106,107,107,107,107,107,107,108,108,108,108,108,108,108,108,108,108,108,108,109,109,109,109,109,109,109,109,110,110,110,110,110,110,110,110,111,111,111,111,111,111,111,111,111,111,112,112,112,112,113,113,113,113,113,113,113,113,113,113,113,113,113,113,113,113,113,113,113,113,113,113,114,114,114,114,114,114,115,115,115,115,115,115,116,116,116,116,117,117,117,117,117,117,117,117,117,117,117,117,117,118,118,118,118,118,118,118,118,118,118,118,118,118,118,118,118,118,118,118,118,118,118,119,119,119,119,119,119,119,119,120,120,120,120,120,120,120,120,120,120,120,120,120,120,121,121,121,121,121,121,121,121,122,122,122,122,122,122,122,122,123,123,123,123,123,124,124,124,124,124,125,125,125,125,125,125,125,125,125,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,127,127,127,127,127,127,128,128,128,128,128,128,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,134,134,134,134,135,135,135,135,135,135,136,136,136,136,137,137,137,137,137,137,137,137,137,137,137,137,137,137,138,138,138,138,138,138,138,138,138,139,139,139,139,139,139,140,140,140,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,142,142,142,142,142,143,143,143,143,143,143,143,143,143,144,144,144,144,144,145,145,145,145,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,147,147,147,147,147,147,147,147,147,147,147,147,147,147,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,150,150,150,150,150,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,154,154,154,154,154,154,154,155,155,155,155,155,156,156,156,156,156,157,157,157,157,157,158,158,158,158,158,158,158,158,158,158,158,158,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,160,160,160,160,160,160,160,160,160,160,160,160,160,160,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,162,162,162,162,162,162,162,163,163,163,163,163,163,163,163,163,163,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,168,168,168,168,168,168,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,175,175,175,175,175,176,176,176,176,176,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,178,178,178,178,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,180,180,180,180,180,180,180,180,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,184,184,184,184,184,184,185,185,185,185,185,185,185,185,185,185,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,188,188,188,188,189,189,189,189,189,189,189,189,189,190,190,190,190,191,191,191,191,191,191,191,191,191,191,191,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,193,193,193,193,193,193,193,193,193,193,193,193,193,193,194,194,194,194,194,194,194,194,194,194,194,194,194,194,195,195,195,195,195,195,195,195,195,195,195,195,195,195,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,198,198,198,198,198,198,198,198,198,199,199,199,199,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,202,202,202,202,202,202,202,202,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,205,205,205,205,205,205,205,205,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,208,208,208,208,208,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,211,211,211,211,211,212,212,212,212,212,212,212,212,212,212,212,212,213,213,213,213,213,214,214,214,214,214,215,215,215,215,215,216,216,216,216,216,216,216,216,216,216,216,216,217,217,217,217,217,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,219,219,219,219,219,219,219,219,219,219,219,219,220,220,220,220,220,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,222,222,222,222,222,223,223,223,223,223,224,224,224,224,224,225,225,225,225,225,226,226,226,226,226,226,226,226,226,226,226,226,226,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,231,231,231,231,231,231,231,232,232,232,232,232,232,232,232,232,232,232,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,234,234,234,234,234,235,235,235,235,235,235,235,235,235,235,235,235,235,235,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,237,237,237,237,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,240,240,240,240,240,241,241,241,241,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,246,246,246,246,246,246,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,248,248,248,248,248,248,248,248,248,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,250,250,250,250,250,250,250,250,250,251,251,251,251,251,251,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,257,257,257,257,257,257,257,257,258,258,258,258,258,258,258,258,258,259,259,259,259,259,259,259,259,259,260,260,260,260,260,260,261,261,261,261,261,261,261,261,262,262,262,262,262,262,262,262,262,262,262,262,262,262,262,262,262,262,262,262,262,262,262,262,262,262,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,265,265,265,265,265,265,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,268,268,268,268,268,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,273,273,273,273,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,280,280,280,280,280,280,280,280,281,281,281,281,281,282,282,282,282,282,283,283,283,283,283,283,283,283,283,284,284,284,284,284,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,286,286,286,286,286,286,286,286,286,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,288,288,288,288,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,292,292,292,292,292,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,294,294,294,294,294,295,295,295,295,295,295,295,295,296,296,296,296,297,297,297,297,297,297,297,297,298,298,298,298,298,298,298,298,298,298,298,299,299,299,299,299,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,304,304,304,304,304,304,304,304,304,304,304,304,304,304,305,305,305,305,305,305,305,305,305,305,305,305,305,305,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,308,308,308,308,308,308,308,308,308,308,308,308,308,308,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,310,310,310,310,310,310,310,310,311,311,311,311,311,311,311,311,312,312,312,312,312,312,312,312,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,314,314,314,314,314,314,314,314,315,315,315,315,315,315,315,315,316,316,316,316,316,316,316,316,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,319,319,319,319,319,319,319,319,319,319,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,324,324,324,324,324,324,324,324,324,324,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,336,336,336,336,336,336,336,336,336,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,342,342,342,342,342,342,342,342,342,342,342,342,342,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,352,352,352,352,352,352,352,352,352,352,352,352,352,352,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,354,354,354,354,354,354,354,355,355,355,355,355,356,356,356,356,356,356,356,357,357,357,357,357,357,357,357,358,358,358,358,358,358,358,358,358,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,360,360,360,360,360,360,360,360,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,362,362,362,362,362,362,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363]
const indices=[0,0,1,3,0,0,0,1,2,4,4,4,4,6,7,9,4,4,0,0,0,1,2,4,4,4,4,6,7,9,4,4,0,0,0,1,3,0,0,0,1,2,4,5,0,0,0,1,0,0,0,1,3,0,0,0,1,2,4,4,4,4,6,8,9,11,4,4,0,0,0,1,3,4,6,8,8,8,8,9,9,9,9,11,12,14,9,9,8,8,0,0,0,1,3,3,3,3,4,4,4,4,6,6,7,7,7,7,9,11,11,11,11,12,12,12,12,13,13,13,13,15,16,18,18,18,18,20,18,18,13,13,12,12,11,11,7,7,6,23,4,4,3,3,0,0,0,1,3,3,3,3,5,5,6,6,6,6,7,7,7,7,8,8,8,8,10,8,8,7,7,6,6,5,13,3,3,0,0,0,1,2,3,4,6,7,9,10,12,0,0,0,1,3,0,0,0,1,3,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,9,10,10,10,12,10,9,15,15,16,16,16,16,17,17,17,17,18,18,18,20,18,17,17,16,16,15,23,23,24,24,24,24,25,25,25,25,26,26,26,28,26,25,25,24,24,23,31,31,32,32,32,32,33,33,33,33,34,34,34,36,34,33,33,32,32,31,39,39,39,39,40,40,40,40,41,41,41,43,41,40,40,39,39,7,7,6,6,5,5,4,4,0,0,0,1,3,3,3,5,3,0,0,0,1,1,2,3,1,4,4,5,5,5,5,7,8,5,5,4,11,0,0,0,1,3,0,0,0,1,3,0,0,0,1,2,4,4,4,4,6,6,7,9,9,10,10,10,10,12,12,13,13,14,15,13,18,18,18,20,18,12,23,10,10,9,24,24,25,25,25,25,27,27,28,28,28,28,30,30,31,32,30,35,35,35,37,35,28,28,27,40,25,25,24,41,42,6,45,4,4,0,0,0,1,2,4,5,7,8,10,0,0,0,1,3,3,4,5,7,8,10,11,13,3,16,16,16,16,18,18,19,19,20,22,19,25,25,25,25,26,26,26,26,27,27,27,27,29,29,29,30,30,30,31,31,32,34,31,37,37,37,37,39,40,37,37,27,27,26,26,25,25,18,43,16,16,0,0,0,1,0,0,0,1,3,4,6,7,9,0,0,0,1,3,3,3,3,4,4,4,4,6,6,7,7,7,7,8,8,8,8,10,10,11,11,11,11,12,12,12,12,13,13,13,13,15,13,13,12,12,11,11,10,8,8,7,7,6,19,4,4,3,3,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,8,6,5,5,4,4,3,3,0,0,0,1,1,2,2,2,4,2,1,7,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,18,16,15,15,14,14,13,13,12,12,11,11,10,10,9,9,0,0,0,1,1,2,2,2,4,2,1,7,9,9,10,12,12,12,12,14,14,15,16,18,18,18,18,20,21,23,18,18,14,26,12,12,9,29,29,29,29,30,30,30,30,31,31,31,31,32,32,32,32,34,34,35,35,35,35,36,36,36,36,38,38,39,39,39,39,41,42,39,39,38,45,45,45,45,46,46,46,46,47,47,47,47,48,48,48,48,50,51,53,53,53,53,55,55,56,55,58,59,61,61,61,61,62,62,62,62,63,63,63,63,65,66,68,68,68,68,69,69,69,69,71,72,74,74,74,74,75,75,75,75,76,76,76,76,77,77,77,77,78,78,78,78,79,79,79,79,80,80,80,82,80,79,79,78,78,77,77,76,76,75,75,74,74,69,69,68,68,63,63,62,62,61,61,53,53,48,48,47,47,46,46,45,45,36,36,35,35,34,85,32,32,31,31,30,30,29,29,0,0,0,1,1,2,2,2,4,2,1,7,9,9,9,9,11,11,12,12,12,12,13,13,13,13,15,15,15,16,16,16,17,17,17,18,19,21,13,13,12,12,11,24,9,9,0,0,0,1,1,1,1,3,4,6,6,6,8,6,1,1,0,0,0,1,1,2,2,2,4,2,1,7,8,10,10,10,10,11,11,11,11,12,12,12,12,14,14,15,15,15,15,16,16,16,16,17,17,17,17,19,19,20,20,20,20,21,21,21,21,23,24,21,21,20,20,19,25,25,26,26,26,26,28,29,26,26,25,30,31,33,33,33,33,34,34,34,34,35,35,35,35,36,36,36,36,37,37,37,37,39,40,37,37,36,36,35,35,34,34,33,33,17,17,16,16,15,15,14,12,12,11,11,10,10,0,0,0,1,2,4,5,7,9,10,12,14,14,15,16,17,18,20,20,20,20,21,21,21,21,23,23,23,23,24,24,24,24,25,25,25,25,27,27,27,27,29,29,29,29,31,31,32,31,33,33,34,35,37,37,38,37,33,41,41,42,42,42,42,43,43,43,43,45,45,46,45,48,48,48,48,49,49,49,49,51,52,53,53,54,56,53,59,59,59,61,59,49,49,48,48,43,43,42,42,41,64,64,64,64,66,67,70,70,70,70,72,72,72,72,73,73,73,73,75,75,76,76,76,76,77,77,77,77,78,78,78,78,80,78,78,77,77,76,76,75,83,83,84,85,87,83,90,73,73,72,72,70,70,64,64,29,29,27,27,25,25,24,24,23,23,21,21,20,20,14,93,93,93,93,95,96,98,98,98,98,100,100,101,103,104,106,100,109,98,98,93,93,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,6,6,7,7,7,9,7,6,12,12,12,12,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,20,20,21,21,21,23,21,20,26,18,18,17,17,16,16,15,15,14,29,29,29,29,31,31,31,32,32,33,34,32,38,38,39,39,39,39,40,40,40,40,42,43,45,45,45,45,46,46,46,46,47,47,47,47,49,49,49,50,50,51,50,53,53,53,53,54,54,54,54,55,55,55,55,56,56,56,58,56,55,55,54,54,53,53,47,47,46,46,45,45,40,40,39,39,38,61,29,29,12,12,4,4,2,2,1,1,0,0,0,1,1,2,2,3,3,3,3,4,4,4,6,4,3,3,2,7,8,9,10,1,13,13,13,13,15,15,16,15,17,17,18,17,20,20,20,20,21,21,21,21,23,23,24,24,24,24,26,27,24,24,23,30,30,30,32,30,21,21,20,20,13,13,0,0,0,1,3,0,0,0,1,3,3,3,3,5,5,6,7,5,11,3,3,0,0,0,1,3,4,6,8,8,8,8,10,10,11,11,11,11,13,13,14,16,13,19,19,19,19,20,20,20,20,22,22,23,24,22,25,26,20,20,19,19,11,11,10,29,8,8,0,0,0,1,0,0,0,1,2,3,5,5,5,5,7,8,10,5,5,0,0,0,1,3,4,6,0,0,0,1,2,4,4,4,4,6,8,8,8,10,8,4,4,0,0,0,1,3,4,5,5,6,6,6,6,8,10,6,6,5,11,12,0,0,0,1,2,4,5,7,7,8,8,9,9,10,10,10,10,11,11,11,11,13,14,11,11,10,10,9,17,8,7,21,21,22,22,23,23,23,23,24,24,24,24,26,26,26,26,27,27,27,27,29,29,30,30,30,30,31,31,31,31,33,34,36,36,36,36,37,37,37,37,39,40,37,37,36,36,31,31,30,30,29,43,27,27,26,26,24,24,23,23,22,21,47,47,47,49,47,0,0,0,1,2,4,4,5,6,4,9,0,0,0,1,3,3,3,3,5,6,9,3,3,0,0,0,1,2,4,4,4,4,5,5,5,5,7,9,9,10,10,11,10,12,13,9,16,5,5,4,4,0,0,0,1,2,4,4,4,4,6,6,7,6,10,4,4,0,0,0,1,1,1,1,3,3,4,4,4,4,6,8,4,4,3,11,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,21,19,18,18,17,17,16,16,15,15,14,14,13,13,1,1,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,7,3,3,2,2,1,1,0,0,0,1,3,3,3,3,5,5,6,7,9,9,9,11,9,5,14,3,3,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,5,7,7,8,8,8,8,9,9,9,11,9,8,8,7,14,5,5,4,4,3,3,0,0,0,1,3,0,0,0,1,2,3,5,0,0,0,1,3,3,3,3,5,5,6,6,6,6,8,9,11,6,6,5,14,3,3,0,0,0,1,2,4,0,0,0,1,2,4,0,0,0,1,2,4,0,0,0,1,2,4,4,5,6,7,8,9,10,4,13,0,0,0,1,3,0,0,0,1,3,0,0,0,1,3,4,6,6,6,6,8,8,9,9,9,9,11,12,13,13,14,14,14,14,15,15,15,17,15,14,14,13,9,9,8,21,6,6,0,0,0,1,1,2,3,5,6,1,9,9,10,10,10,10,11,11,11,11,12,12,12,14,12,11,11,10,10,9,17,17,18,20,20,20,20,21,21,21,23,21,20,20,17,24,24,24,25,26,28,28,29,30,28,31,31,32,32,32,32,34,34,35,35,35,35,37,37,38,39,37,42,35,35,34,45,32,32,31,0,0,0,1,2,3,5,0,0,0,1,2,4,5,7,7,7,7,9,10,12,7,7,0,0,0,1,2,4,5,7,7,8,8,8,9,9,9,10,10,10,11,12,7,15,0,0,0,1,2,4,5,7,7,8,8,8,9,9,9,10,11,7,14,0,0,0,1,0,0,0,1,2,4,5,7,8,10,11,13,14,16,17,19,0,0,0,1,2,4,5,7,8,10,0,0,0,1,1,1,3,1,0,0,0,1,0,0,0,1,2,4,0,0,0,1,2,4,0,0,0,1,2,4,5,7,0,0,0,1,2,4,5,7,0,0,0,1,0,0,0,1,2,4,5,7,7,8,9,7,12,0,0,0,1,2,4,4,5,5,5,7,5,4,10,0,0,0,1,0,0,0,1,1,1,1,3,4,6,7,9,1,1,0,0,0,1,2,4,5,7,8,10,0,0,0,1,2,4,0,0,0,1,1,1,1,3,4,6,7,9,1,1,0,0,0,1,2,4,5,7,7,7,7,9,9,9,10,10,10,11,12,14,14,15,16,14,19,7,7,0,0,0,1,2,4,5,7,7,8,9,11,11,11,11,13,14,11,11,7,17,0,0,0,1,0,0,0,1,2,4,5,7,0,0,0,1,2,4,4,4,4,6,7,9,9,10,11,13,13,13,13,15,16,13,13,9,19,4,4,0,0,0,1,2,4,4,4,4,6,7,9,10,12,12,13,14,16,17,19,20,22,23,12,26,4,4,0,0,0,1,2,4,5,7,7,8,7,9,9,10,9,13,0,0,0,1,2,4,4,4,6,4,0,0,0,1,2,4,4,4,6,4,0,0,0,1,2,4,5,7,8,10,10,10,10,11,11,11,11,13,14,16,16,16,18,16,11,11,10,10,0,0,0,1,2,4,5,7,7,7,7,9,10,12,12,12,14,12,7,7,0,0,0,1,2,4,0,0,0,1,2,4,5,7,7,8,9,7,12,0,0,0,1,2,4,0,0,0,1,2,4,5,7,8,10,0,0,0,1,0,0,0,1,2,4,5,7,0,0,0,1,2,4,5,7,0,0,0,1,0,0,0,1,2,4,5,7,8,10,10,10,12,10,0,0,0,1,2,4,5,7,7,7,7,9,10,12,12,12,14,12,7,7,0,0,0,1,2,4,4,4,6,4,0,0,0,1,2,4,0,0,0,1,2,4,5,7,7,8,9,7,12,0,0,0,1,2,4,0,0,0,1,2,4,5,7,7,7,9,7,0,0,0,1,1,1,3,1,0,0,0,1,2,4,5,7,0,0,0,1,2,4,5,7,8,10,0,0,0,1,0,0,0,1,2,4,5,7,7,7,7,9,10,12,12,13,14,16,12,19,7,7,0,0,0,1,2,4,0,0,0,1,2,4,0,0,0,1,0,0,0,1,2,4,5,7,7,8,9,7,12,0,0,0,1,2,4,4,4,5,5,5,6,7,9,9,10,9,11,11,12,11,15,0,0,0,1,2,4,5,7,0,0,0,1,2,4,5,7,8,10,11,13,14,16,0,0,0,1,2,4,5,7,0,0,0,1,3,4,6,8,0,0,0,1,3,0,0,0,1,3,0,0,0,1,1,2,4,1,7,0,0,0,1,1,2,2,2,2,4,4,5,5,6,7,5,10,10,10,12,10,4,15,15,15,15,16,16,16,16,17,17,17,17,19,21,17,17,16,16,15,15,2,2,1,24,24,25,25,26,26,27,27,27,27,28,28,28,28,29,29,29,29,31,31,32,31,33,33,34,33,36,38,38,38,38,40,41,38,38,29,29,28,28,27,27,26,44,46,25,24,50,0,0,0,1,2,4,0,0,0,1,2,4,0,0,0,1,1,2,2,2,2,3,3,3,3,4,4,4,4,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,11,9,8,8,7,7,6,6,4,4,3,3,2,2,1,14,14,14,14,16,16,17,16,18,18,19,18,22,22,23,24,22,25,25,26,25,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,44,45,46,47,48,49,51,51,51,51,53,53,54,55,57,57,58,58,58,60,58,57,53,64,64,65,65,65,65,67,67,68,67,70,70,71,70,73,73,74,73,76,77,79,65,65,64,80,80,81,81,82,82,83,84,86,82,81,90,80,91,92,51,51,14,14,0,0,0,1,2,4,4,4,4,6,6,7,7,7,7,9,11,7,7,6,14,4,4,0,0,0,1,2,4,5,7,8,10,11,13,13,13,15,13,0,0,0,1,2,4,5,7,8,10,11,13,13,13,15,13,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,9,7,6,6,5,5,4,4,0,0,0,1,0,0,0,1,2,4,0,0,0,1,0,0,0,1,2,4,4,4,4,6,7,9,4,4,0,0,0,1,3,3,3,5,3,0,0,0,1,2,4,0,0,0,0,0,0,1,2,4,4,4,4,6,6,7,8,10,10,10,12,10,6,15,4,4,0,0,0,1,3,0,0,0,1,3,3,3,5,3,0,0,0,1,3,0,0,0,1,0,0,0,1,3,3,3,3,5,5,6,7,9,5,12,13,15,3,3,0,0,0,1,2,4,4,4,4,6,7,9,4,4,0,0,0,1,3,3,4,4,4,4,6,6,7,8,10,6,13,4,4,3,16,17,18,20,0,0,0,1,3,3,4,4,4,4,6,6,7,8,10,6,13,4,4,3,16,17,18,20,0,0,0,1,3,0,0,0,1,3,3,3,3,4,4,4,4,6,6,7,6,10,4,4,3,3,0,0,0,1,2,4,4,4,4,5,5,5,5,7,7,7,7,9,10,12,7,7,5,5,4,4,0,0,0,1,3,3,3,3,4,4,4,4,6,7,9,11,4,4,3,3,0,0,0,1,3,4,6,0,0,0,1,3,0,0,0,1,3,0,0,0,1,3,0,0,0,1,3,3,3,3,5,7,3,3,0,0,0,1,3,4,6,8,8,8,8,10,10,11,11,11,11,13,15,11,11,10,18,8,8,0,0,0,1,2,4,4,4,4,6,8,9,4,4,0,0,0,1,3,3,3,3,4,4,4,4,6,6,7,6,8,8,9,9,9,9,11,11,12,12,12,12,14,14,15,16,14,12,12,11,9,9,8,19,20,22,22,22,22,23,23,23,23,24,24,24,24,25,25,25,25,26,26,26,26,27,27,27,27,29,31,27,27,26,26,25,25,24,24,23,23,22,22,4,4,3,3,0,0,0,1,3,4,6,0,0,0,1,2,4,5,7,8,10,0,0,0,1,2,4,5,7,7,7,7,8,8,8,8,10,11,13,8,8,7,7,0,0,0,1,2,4,6,6,6,6,8,8,9,8,10,10,11,13,10,16,16,16,16,18,20,20,20,20,22,23,25,20,20,16,16,6,6,0,0,0,1,2,4,4,4,4,6,6,7,8,10,6,13,4,4,0,0,0,1,2,4,5,7,8,10,10,10,10,12,14,10,10,0,0,0,1,2,4,0,0,0,1,2,3,5,5,5,5,7,7,8,7,11,5,5,0,0,0,1,2,3,5,5,6,6,6,8,6,5,9,9,10,10,10,10,12,12,13,14,15,16,12,19,10,10,9,20,21,0,0,0,1,3,4,6,6,6,6,8,8,9,8,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,18,19,20,21,22,23,24,25,26,28,16,16,15,15,14,14,13,13,12,12,11,11,6,6,0,0,0,1,3,4,6,6,7,7,7,7,8,8,8,8,10,10,11,11,11,11,12,12,12,12,14,14,15,14,12,12,11,11,10,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,22,22,22,24,22,21,21,20,20,19,19,18,18,8,8,7,7,6,27,27,28,28,28,28,29,29,29,29,30,30,30,30,32,32,33,32,34,34,35,34,37,37,37,37,38,38,38,38,39,39,39,39,40,40,40,42,40,39,39,38,38,37,37,30,30,29,29,28,28,27,45,45,46,47,49,51,52,45,56,56,57,59,59,59,59,61,62,64,65,67,67,67,67,68,68,68,68,70,71,68,68,67,67,59,59,56,74,74,74,74,75,75,75,75,76,76,76,76,78,78,79,78,80,80,81,81,81,81,83,81,81,80,84,85,87,87,87,87,88,88,88,88,89,89,89,89,90,90,90,90,91,91,91,91,93,93,93,93,95,95,96,98,95,101,101,102,104,101,107,107,108,107,110,110,111,110,113,113,114,113,116,116,117,117,118,117,116,120,121,123,123,123,125,123,93,93,91,91,90,90,89,89,88,88,87,87,76,76,75,75,74,74,0,0,0,1,3,5,6,8,9,11,12,14,15,17,18,20,20,21,22,20,25,25,25,25,26,26,26,28,26,25,25,0,0,0,1,3,3,3,3,5,5,5,5,6,6,6,6,7,7,7,7,9,10,12,12,13,14,12,17,17,18,19,17,22,22,23,24,22,27,27,28,29,27,32,32,33,34,32,37,38,40,7,7,6,6,5,5,3,3,0,0,0,1,3,0,0,0,1,3,0,0,0,1,3,4,6,6,6,6,7,7,7,7,8,8,8,8,10,10,11,11,12,12,12,14,12,11,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,22,22,22,22,24,22,22,21,21,20,20,19,19,18,18,17,17,10,27,8,8,7,7,6,6,0,0,0,1,0,0,0,1,3,4,6,8,9,11,13,13,14,15,17,17,17,17,18,18,18,18,20,20,21,21,21,21,23,23,24,24,24,24,26,27,24,24,23,28,28,29,29,29,31,29,28,21,21,20,35,18,18,17,17,13,38,38,39,40,41,43,43,43,43,45,45,46,46,46,46,48,49,51,46,46,45,54,43,43,38,57,57,57,59,57,0,0,0,1,2,4,5,7,0,0,0,1,3,4,6,8,8,9,9,9,9,11,13,9,9,8,16,0,0,0,1,3,3,3,3,4,4,4,4,6,6,7,7,7,7,8,8,8,8,10,11,8,8,7,7,6,14,4,4,3,3,0,0,0,1,2,4,4,4,4,6,6,7,7,7,7,8,8,8,8,10,11,13,8,8,7,7,6,4,4,0,0,0,1,2,4,0,0,0,1,2,4,4,4,6,4,0,0,0,1,3,3,3,3,5,7,7,8,8,8,10,8,7,13,15,15,15,15,17,19,15,15,3,3,0,0,0,1,3,3,4,5,6,7,3,8,8,9,9,10,11,13,9,16,17,19,19,19,19,20,20,20,20,22,22,23,23,23,23,24,24,24,24,25,25,25,27,25,24,24,23,23,22,30,32,32,33,33,33,35,33,32,38,20,20,19,19,8,0,0,0,1,0,0,0,1,3,4,6,7,9,0,0,0,1,0,0,0,1,3,4,6,6,6,8,6,0,0,0,1,3,3,3,3,5,5,6,6,6,6,8,8,9,9,10,12,9,15,15,15,17,15,8,20,6,6,5,23,3,3,0,0,0,1,2,4,4,5,5,5,7,5,4,10,0,0,0,1,2,4,4,5,5,5,7,5,4,10,0,0,0,1,2,4,4,4,4,6,7,9,4,4,0,0,0,1,2,4,4,5,6,7,8,9,10,4,13,0,0,0,1,2,4,4,4,4,6,6,7,7,7,9,7,6,12,4,4,0,0,0,1,3,3,3,5,3,0,0,0,1,0,0,0,1,2,4,4,4,4,6,8,8,9,9,9,11,9,8,4,4,0,0,0,1,3,3,4,6,6,6,6,8,8,9,9,9,9,11,11,12,12,12,12,14,15,17,17,17,19,17,12,12,11,22,9,9,8,25,6,6,3,28,28,29,31,31,31,31,32,32,32,32,34,34,35,35,36,36,36,38,36,35,39,40,41,42,34,45,45,45,45,47,47,48,47,51,51,52,52,53,53,53,53,55,56,53,53,52,57,57,58,58,58,60,58,57,61,62,51,65,45,45,32,32,31,31,28,68,68,68,68,69,69,69,69,70,70,70,70,72,72,73,73,73,73,74,74,74,74,76,78,78,78,80,78,74,74,73,73,72,83,83,83,83,85,85,86,86,86,86,87,87,87,87,89,89,90,89,93,87,87,86,86,85,96,97,99,99,99,99,100,100,100,100,102,104,104,104,104,106,106,107,107,107,109,107,106,112,112,112,112,114,115,117,117,117,117,119,119,120,120,120,120,121,121,121,121,123,123,124,124,124,126,124,123,129,129,129,131,129,121,121,120,120,119,134,136,117,117,112,112,104,104,100,100,99,99,83,83,70,70,69,69,68,68,0,0,0,1,1,1,3,1,0,0,0,1,3,4,6,8,8,9,11,11,12,12,12,14,12,11,17,17,18,18,18,20,18,17,23,23,24,24,24,24,25,25,25,27,25,24,24,23,30,30,31,31,31,31,32,32,32,34,32,31,31,30,37,37,38,38,38,38,39,39,39,41,39,38,38,37,44,44,45,45,45,45,46,46,46,48,46,45,45,44,51,51,51,51,52,52,52,54,52,51,51,8,57,57,57,57,59,60,62,62,63,63,63,63,64,64,64,64,66,67,69,64,64,63,63,62,72,72,72,72,73,73,73,73,75,76,78,73,73,72,72,57,57,0,0,0,1,3,4,6,8,8,8,8,9,9,9,11,9,8,8,0,0,0,1,1,1,3,1,0,0,0,1,1,2,2,2,4,2,1,7,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,16,14,13,13,12,12,11,11,10,10,9,9,0,0,0,1,3,4,6,8,8,8,8,9,9,9,11,9,8,8,0,0,0,1,3,0,0,0,1,2,4,6,6,7,8,10,10,10,10,12,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,20,20,21,21,21,23,21,20,24,24,25,25,25,25,26,26,26,26,28,29,26,26,25,25,24,18,18,17,17,16,16,15,15,14,33,35,10,10,6,36,36,37,38,40,40,40,40,42,44,44,45,45,45,45,46,46,46,46,47,47,47,47,49,49,50,49,52,52,53,53,53,55,53,52,56,56,57,57,57,57,58,58,58,58,60,61,58,58,57,57,56,47,47,46,46,45,45,44,65,67,40,40,36,68,69,70,71,72,73,0,0,0,1,3,4,6,8,8,8,8,9,9,9,9,11,12,14,14,14,14,15,15,15,15,16,16,16,16,18,18,19,19,19,19,21,22,24,19,19,18,27,28,30,32,16,16,15,15,14,14,9,9,8,8,0,0,0,1,3,0,0,0,1,3,3,3,3,5,7,3,3,0,0,0,1,3,0,0,0,1,3,0,0,0,1,3,0,0,0,1,3,3,3,3,5,7,3,3,0,0,0,1,3,0,0,0,1,3,3,3,3,5,5,6,6,6,6,7,7,7,7,8,8,8,10,8,7,7,6,6,5,13,3,3,0,0,0,1,3,3,3,3,5,7,3,3,0,0,0,1,3,0,0,0,1,1,2,2,2,2,4,4,5,5,5,5,7,7,8,9,12,7,5,5,4,2,2,1,17,17,18,19,17,22,22,22,22,24,24,25,25,26,26,26,28,26,25,29,30,24,33,33,33,33,35,37,38,33,33,22,22,0,0,0,1,3,0,0,0,1,3,0,0,0,1,3,0,0,0,1,3,0,0,0,1,1,2,3,5,1,6,7,8,9,0,0,0,1,1,2,2,2,2,3,3,3,5,3,2,2,1,8,10,10,10,10,11,11,11,11,12,12,12,12,14,14,15,15,15,15,16,16,16,16,18,19,20,21,16,16,15,15,14,24,24,24,24,26,26,27,27,28,29,27,32,32,33,34,32,37,37,37,37,39,40,42,37,37,26,45,24,24,12,12,11,11,10,10,0,0,0,1,1,2,4,4,4,4,5,5,5,7,5,4,4,1,10,11,13,13,13,13,15,15,16,16,16,18,16,15,21,13,13,0,0,0,1,1,2,2,2,2,3,3,3,5,3,2,2,1,8,10,10,10,10,12,12,13,13,13,13,15,16,17,17,18,18,18,20,18,17,13,13,12,24,10,10,0,0,0,1,1,2,4,4,4,4,5,5,5,7,5,4,4,1,10,11,13,13,13,13,15,15,16,16,16,18,16,15,21,13,13,0,0,0,1,3,4,6,0,0,0,1,3,4,6,7,9,10,12,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,14,14,15,15,15,17,15,14,20,12,12,11,11,10,10,9,9,8,8,7,7,6,6,5,5,4,4,3,3,0,0,0,1,2,0,0,0,1,2,4,4,4,4,6,7,9,4,4,0,0,0,1,1,1,1,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,11,11,13,11,6,6,5,5,4,4,3,16,1,1,0,0,0,1,0,0,0,1,3,3,3,3,4,4,4,4,6,8,8,8,8,9,9,9,9,11,12,9,9,8,8,4,4,3,3,0,0,0,1,3,3,3,3,5,7,7,7,7,9,11,11,11,11,12,12,12,14,12,11,11,7,7,3,3,0,0,0,1,3,0,0,0,1,0,0,0,1,2,4,4,4,4,6,6,7,7,7,7,9,10,7,7,6,13,4,4,0,0,0,1,3,3,3,3,5,5,6,7,8,8,9,9,9,11,9,8,12,13,5,16,3,3,0,0,0,1,3,3,3,3,4,4,4,6,4,3,3,0,0,0,1,3,4,6,8,8,8,8,9,9,9,9,10,10,10,10,12,14,14,15,15,15,15,17,17,18,20,17,23,23,24,25,23,15,15,14,28,10,10,9,9,8,8,0,0,0,1,3,4,0,0,0,1,3,3,3,3,5,5,6,6,6,6,8,6,6,5,11,3,3,0,0,0,1,3,3,3,5,3,0,0,0,1,2,4,4,5,5,5,5,7,8,5,5,4,11,11,11,11,13,14,16,11,11,0,0,0,1,3,3,3,5,3,0,0,0,1,2,4,0,0,0,1,2,4,4,5,5,6,6,6,6,7,7,7,7,9,11,7,7,6,6,5,4,15,15,15,15,16,16,16,16,17,17,17,19,17,16,16,15,15,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,7,5,4,4,3,3,0,0,0,1,1,2,4,6,1,9,9,10,11,13,13,13,13,15,17,19,20,22,13,13,9,25,27,28,29,30,31,32,33,34,35,36,38,40,40,40,40,41,41,41,43,41,40,40,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,11,9,8,8,7,7,6,6,5,5,4,4,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,5,7,8,10,10,10,10,11,11,11,11,12,12,12,14,12,11,11,10,10,5,5,4,4,3,3,0,0,0,1,1,1,3,1,0,0,0,1,1,2,3,1,6,0,0,0,1,1,2,3,1,6,0,0,0,1,2,4,0,0,0,1,2,4,5,7,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,4,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,4,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,8,6,5,5,4,4,0,0,0,1,2,4,0,0,0,1,1,2,2,2,2,4,4,5,4,6,6,7,6,10,10,10,10,12,12,13,13,13,13,15,15,16,15,17,17,18,20,17,13,13,12,24,26,10,10,2,2,1,27,27,28,28,29,28,30,30,31,30,34,27,35,36,0,0,0,1,2,3,5,6,8,8,8,8,10,10,10,10,12,13,14,15,16,18,18,18,18,20,22,22,22,22,24,26,26,26,26,28,30,31,32,33,35,35,35,35,37,37,37,37,39,41,41,41,41,43,45,45,45,45,47,48,49,50,51,53,53,53,53,54,54,54,54,56,56,56,56,57,57,57,57,59,60,62,62,62,62,64,66,66,66,66,67,67,67,67,72,73,67,67,66,66,62,62,57,57,56,56,54,54,53,53,45,45,41,41,37,37,35,35,26,26,22,22,18,18,10,10,8,8,0,0,0,1,3,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,6,6,7,9,9,9,9,11,13,9,9,6,16,16,17,19,19,19,19,21,19,19,16,24,24,25,25,25,26,26,26,27,28,30,31,24,34,34,34,34,36,36,37,39,36,42,44,44,44,44,45,45,45,45,46,46,46,46,48,48,48,48,49,49,49,49,51,52,53,55,56,59,59,59,59,60,60,60,60,62,64,60,60,59,59,49,49,48,48,46,46,45,45,44,44,34,34,4,4,3,3,2,2,1,1,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,10,6,6,5,5,4,4,3,3,0,0,0,1,1,1,1,2,2,2,2,4,5,7,8,10,10,10,12,10,2,2,1,1,0,0,0,1,1,2,2,2,2,4,5,7,2,2,1,10,0,0,0,1,0,0,0,1,2,4,5,7,7,7,7,9,9,10,10,10,10,12,10,10,9,15,15,15,15,16,16,16,16,17,17,17,19,17,16,16,15,15,7,7,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,5,7,7,8,9,11,11,11,11,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,19,17,16,16,15,15,14,14,13,13,11,11,7,22,22,23,25,22,28,28,29,31,28,34,34,35,35,35,36,36,36,37,38,40,41,34,44,44,44,44,46,46,47,49,46,52,54,54,54,54,55,55,55,55,56,56,56,56,58,58,58,58,59,59,59,59,61,62,63,65,66,69,71,59,59,58,58,56,56,55,55,54,54,44,44,5,5,4,4,3,3,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,7,7,8,8,8,8,9,9,9,9,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,17,15,14,14,13,13,12,12,11,11,9,9,8,8,7,20,3,3,2,2,1,1,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,13,15,11,11,10,10,9,9,8,8,7,7,6,6,5,5,4,4,3,3,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,6,4,3,3,2,2,1,1,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,10,6,6,5,5,4,4,3,3,0,0,0,1,1,1,3,1,0,0,0,1,3,0,0,0,1,3,0,0,0,1,3,3,3,5,3,0,0,0,1,3,0,0,0,1,2,4,6,6,6,6,7,7,7,7,9,11,11,11,11,12,12,12,12,13,13,13,13,15,16,18,18,18,18,19,19,19,19,21,21,22,22,22,22,23,23,23,23,24,24,24,24,25,25,25,25,26,26,26,26,28,29,26,26,25,25,24,24,23,23,22,22,21,19,19,18,18,13,13,12,12,11,11,7,7,6,6,0,0,0,1,3,3,3,5,3,0,0,0,1,3,3,3,3,5,5,6,8,8,8,8,9,9,9,9,11,13,9,9,8,8,5,16,16,16,18,16,3,3,0,0,0,1,0,0,0,1,1,1,1,2,2,2,2,4,5,7,7,7,7,9,10,11,12,13,14,7,7,2,2,1,1,0,0,0,1,3,3,3,3,4,4,4,4,6,6,7,9,9,9,9,10,10,10,12,10,9,9,6,15,4,4,3,3,0,0,0,1,2,4,4,4,4,5,5,5,5,7,8,5,5,4,4,0,0,0,1,3,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,11,9,8,8,7,7,6,6,5,5,4,4,3,3,0,0,0,1,2,0,0,0,1,1,1,3,1,0,0,0,1,0,0,0,1,1,1,3,1,0,0,0,1,3,3,4,5,3,6,7,0,0,0,1,3,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,5,7,8,9,10,11,12,13,14,15,16,17,19,5,5,4,4,3,3,0,0,0,1,3,3,3,3,4,4,4,4,6,8,10,10,10,10,11,11,11,11,12,12,12,12,14,16,16,16,16,18,20,22,24,16,16,12,12,11,11,10,10,4,4,3,3,0,0,0,1,2,3,4,6,8,8,8,8,10,12,12,12,12,13,13,13,13,14,14,14,16,14,13,13,12,12,8,8,0,0,0,1,2,3,4,6,8,8,8,8,10,10,11,13,13,13,13,15,13,13,10,18,8,8,0,0,0,1,2,3,4,6,7,9,9,9,11,9,0,0,0,1,2,3,4,6,7,9,9,9,11,9,0,0,0,1,2,3,4,6,6,6,6,7,7,7,7,9,9,10,10,10,10,11,11,11,11,13,14,16,11,11,10,10,9,19,21,21,21,21,23,25,25,25,25,26,26,26,26,27,27,27,27,29,30,32,27,27,26,26,25,25,21,21,7,7,6,6,0,0,0,1,2,3,4,6,8,8,8,8,9,9,9,9,10,10,10,12,10,9,9,8,8,0,0,0,1,2,3,4,6,7,9,9,9,11,9,0,0,0,1,2,3,4,6,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,13,14,16,11,11,10,10,9,9,8,8,0,0,0,1,2,3,4,6,0,0,0,1,2,3,4,6,0,0,0,1,2,3,4,6,0,0,0,1,2,3,4,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,15,16,18,13,13,12,12,11,11,10,10,9,9,8,8,7,7,6,6,0,0,0,1,2,3,4,6,0,0,0,1,2,3,4,6,0,0,0,1,2,3,4,6,0,0,0,1,2,3,4,6,7,9,9,9,9,11,13,13,13,15,13,9,9,0,0,0,1,2,3,4,6,7,9,9,9,9,11,13,13,13,15,13,9,9,0,0,0,1,2,3,4,6,7,9,0,0,0,1,2,3,4,6,8,8,8,8,10,10,11,10,12,12,13,13,13,13,15,13,13,12,18,8,8,0,0,0,1,2,3,4,6,7,9,9,9,9,10,10,10,12,10,9,9,0,0,0,1,2,3,4,6,8,8,8,8,9,9,9,11,9,8,8,0,0,0,1,2,3,4,6,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,13,14,16,11,11,10,10,9,9,8,8,0,0,0,1,2,3,4,6,7,9,0,0,0,1,2,3,4,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,13,14,16,11,11,10,10,9,9,8,8,7,7,6,6,0,0,0,1,2,3,4,6,8,8,9,9,9,11,9,8,14,14,14,14,15,15,15,17,15,14,14,0,0,0,1,2,3,5,5,5,5,7,7,8,8,8,8,10,12,8,8,7,15,15,15,15,16,16,16,16,18,18,18,18,19,19,19,19,21,22,24,19,19,18,18,16,16,15,15,5,5,0,0,0,1,2,3,5,5,5,5,7,7,8,8,8,8,10,12,8,8,7,15,15,16,16,16,16,17,17,17,17,19,19,19,19,20,20,20,20,22,23,20,20,19,19,17,17,16,16,15,26,5,5,0,0,0,1,2,3,4,5,7,9,9,9,9,11,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,18,16,15,15,14,14,13,13,9,9,0,0,0,1,2,3,4,5,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,15,16,18,13,13,12,12,11,11,10,10,9,9,8,8,7,7,0,0,0,1,2,3,4,5,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,14,15,17,12,12,11,11,10,10,9,9,8,8,7,7,0,0,0,1,2,3,4,5,7,7,8,10,11,13,13,14,14,14,14,16,18,18,18,18,19,19,19,19,21,22,24,19,19,18,18,14,14,13,27,7,30,30,30,30,31,31,31,31,33,35,35,35,35,36,36,36,36,37,37,37,37,38,38,38,38,39,39,39,39,40,40,40,40,41,41,41,41,42,42,42,42,44,45,47,42,42,41,41,40,40,39,39,38,38,37,37,36,36,35,35,31,31,30,30,0,0,0,1,2,4,5,7,7,7,7,9,9,10,10,10,12,10,9,15,7,7,0,0,0,1,2,4,4,4,4,6,8,8,9,10,8,13,15,4,4,0,0,0,1,2,4,4,4,4,6,6,7,7,7,7,8,8,8,10,8,7,7,6,13,13,13,13,14,14,14,14,15,15,15,15,17,17,18,17,19,19,20,22,19,25,15,15,14,14,13,13,4,4,0,0,0,1,3,3,3,5,3,0,0,0,1,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,10,11,13,13,14,14,15,17,14,20,20,20,22,20,13,25,25,25,25,26,26,26,26,27,27,27,27,28,28,28,28,29,29,29,29,30,30,30,30,32,34,34,35,35,35,35,37,37,38,37,41,35,35,34,44,44,45,45,45,45,46,46,46,48,46,45,45,44,51,30,30,29,29,28,28,27,27,26,26,25,25,8,8,7,7,6,6,5,5,4,4,3,54,54,55,55,55,55,56,56,56,56,57,57,57,57,58,58,58,58,59,59,59,59,61,63,63,63,63,64,64,64,64,65,65,65,67,65,64,64,63,63,59,59,58,58,57,57,56,56,55,55,54,0,0,0,1,2,4,4,5,7,7,7,7,8,8,8,8,9,9,9,9,11,11,12,12,12,12,14,14,15,16,14,17,18,12,12,11,21,21,21,21,23,23,24,24,24,26,24,23,29,29,29,29,30,30,30,30,31,31,31,33,31,30,30,29,29,21,21,9,9,8,8,7,7,4,36,36,36,36,37,37,37,37,39,39,40,40,40,42,40,39,45,37,37,36,36,0,0,0,1,3,3,3,3,5,5,6,8,8,8,8,10,11,13,13,13,13,15,17,13,13,8,8,5,20,20,20,20,22,23,26,26,26,26,27,27,27,27,28,28,28,28,30,30,31,31,31,31,32,32,32,32,34,35,37,37,37,37,39,40,37,37,32,32,31,31,30,43,43,43,43,45,45,46,46,46,46,47,47,47,47,48,48,48,48,49,49,49,49,50,50,50,50,51,51,51,51,53,53,54,54,54,56,54,53,59,51,51,50,50,49,49,48,48,47,47,46,46,45,62,62,62,62,63,63,63,63,65,67,67,67,67,68,68,68,68,69,69,69,69,71,73,73,73,73,74,74,74,74,76,78,78,78,78,79,79,79,79,81,83,83,83,83,84,84,84,84,86,88,88,88,88,89,89,89,89,91,93,93,93,93,94,94,94,94,95,95,95,95,97,99,101,95,95,94,94,93,93,89,89,88,88,84,84,83,83,79,79,78,78,74,74,73,73,69,69,68,68,67,67,63,63,62,62,43,43,28,28,27,27,26,26,20,20,3,3,0,0,0,1,3,3,4,6,6,6,6,8,8,9,9,9,11,9,8,14,6,6,3,17,17,18,20,20,20,20,21,21,21,21,22,22,22,22,23,23,23,23,24,24,24,24,26,26,27,27,27,29,27,26,32,34,24,24,23,23,22,22,21,21,20,20,17,37,37,38,38,38,38,40,41,43,43,43,43,45,46,48,43,43,38,38,37,51,51,51,51,52,52,52,52,54,54,55,55,55,55,57,58,60,55,55,54,52,52,51,51,0,0,0,1,3,3,3,3,5,5,6,6,7,7,7,9,7,6,12,5,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,22,20,19,19,18,18,17,17,16,16,15,15,3,3,0,0,0,1,2,4,5,7,7,8,9,7,12,0,0,0,1,2,4,5,7,7,7,7,8,8,8,8,10,11,13,13,13,15,13,8,8,7,7,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,13,13,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,21,19,18,18,17,17,16,16,15,15,14,14,13,24,11,11,10,10,9,9,8,8,7,7,6,6,5,5,4,4,0,0,0,1,2,3,5,5,6,7,8,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,17,19,19,19,19,21,23,23,23,23,24,24,24,24,25,25,25,25,26,26,26,26,28,30,31,33,33,33,33,34,34,34,34,35,35,35,35,36,36,36,36,37,37,37,37,38,38,38,38,39,39,39,39,40,40,40,40,41,41,41,41,42,42,42,42,44,46,46,46,46,47,47,47,47,48,48,48,48,49,49,49,49,51,53,49,49,48,48,47,47,46,46,42,42,41,41,40,40,39,39,38,38,37,37,36,36,35,35,34,34,33,33,26,26,25,25,24,24,23,23,19,19,15,15,14,14,13,13,12,12,11,11,10,10,5,56,56,57,56,58,58,59,59,59,59,61,63,65,59,59,58,0,0,0,1,2,4,4,5,6,8,9,11,12,14,4,17,17,17,17,19,19,20,20,21,21,21,21,22,22,22,24,22,21,21,20,27,27,27,27,29,29,29,29,30,30,30,30,32,34,30,30,29,29,27,27,19,37,37,37,37,38,38,38,40,38,37,37,17,17,0,0,0,1,2,4,4,5,6,8,9,11,4,14,14,14,14,15,15,15,15,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,22,22,22,22,24,24,24,24,25,25,25,25,27,27,28,29,27,32,32,33,34,36,36,36,36,37,37,37,37,38,38,38,38,39,39,39,39,41,43,43,43,43,44,44,44,44,45,45,45,45,46,46,46,46,48,50,50,50,50,51,51,51,51,52,52,52,52,53,53,53,53,55,57,57,57,57,58,58,58,58,59,59,59,59,60,60,60,60,62,64,60,60,59,59,58,58,57,57,53,53,52,52,51,51,50,50,46,46,45,45,44,44,43,43,39,39,38,38,37,37,36,36,32,65,65,66,66,66,66,67,67,67,69,67,66,66,65,25,25,24,24,22,22,21,21,20,20,19,19,18,18,17,73,15,15,14,14,0,0,0,1,2,4,4,4,4,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,12,13,15,15,15,15,17,17,18,19,17,22,22,22,22,23,23,23,25,23,22,22,15,15,10,10,9,9,8,8,7,7,6,28,4,4,0,0,0,1,2,4,4,5,6,7,8,9,11,11,12,13,15,15,15,15,16,16,16,16,18,19,21,23,16,16,15,15,11,26,26,26,26,27,27,27,27,29,30,32,34,27,27,26,26,4,37,37,37,37,38,38,38,38,39,39,39,39,40,40,40,40,42,42,43,42,44,44,45,47,44,40,40,39,39,38,38,37,37,0,0,0,1,2,4,4,4,4,6,6,7,7,7,7,8,8,8,8,10,10,11,12,10,15,15,15,15,16,16,16,16,17,17,17,19,17,16,16,15,15,8,8,7,7,6,22,22,22,22,23,23,23,25,23,22,22,4,4,0,0,0,1,3,4,6,7,9,10,12,13,15,15,16,16,16,16,18,20,20,20,20,21,21,21,21,23,24,26,21,21,20,20,16,16,15,29,29,29,29,31,33,29,29,0,0,0,1,1,1,1,2,2,2,4,2,1,1,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,7,5,4,4,3,3,0,0,0,1,2,3,5,0,0,0,1,3,0,0,0,1,2,3,5,0,0,0,1,1,1,3,1,0,0,0,1,3,3,3,5,3,0,0,0,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,18,16,15,15,14,14,13,13,12,12,11,2,22,0,0,0,1,1,1,3,1,0,0,0,1,1,1,1,3,3,4,5,6,7,8,9,3,12,12,12,12,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,32,33,33,33,33,34,34,34,36,34,33,33,32,37,38,12,12,1,1,0,0,0,1,2,4,0,0,0,1,1,2,3,5,5,5,5,6,6,6,8,6,5,5,1,11,11,11,11,12,12,12,12,14,14,15,16,14,19,19,19,19,21,21,22,23,21,26,26,26,26,28,28,29,28,31,31,31,31,33,35,35,35,35,36,36,36,36,38,40,41,43,45,46,48,48,48,48,49,49,49,49,50,50,50,50,51,51,51,51,52,52,52,52,54,55,56,57,59,60,62,62,62,62,63,63,63,63,64,64,64,64,66,66,67,67,67,69,67,66,72,72,73,73,74,74,74,76,74,73,72,80,80,80,80,81,81,81,81,83,85,85,86,86,86,86,87,87,87,87,88,88,88,88,89,89,89,89,90,90,90,90,91,91,91,91,92,92,92,94,92,91,91,90,90,89,89,88,88,87,87,86,86,85,81,81,80,80,64,64,63,63,62,62,52,52,51,51,50,50,49,49,48,48,36,36,35,35,31,31,26,26,19,19,12,12,11,11,0]
const contents={"0":[364,365,366,367,368],"1":[369,365,370,366,371,366,372,373,366,374,368],"2":[375,376,377,366,378,366,372,379,366,374,368],"3":[380,381,366,382,368],"4":[383,384,385,366,386,387,388,368],"5":[389,390,368],"6":[391,392,366,393,368],"7":[394,395,396,366,397,366,398,366,399,400,366,401,368],"8":[402,395,366,403,404,366,396,366,405,406,366,399,407,366,408,368],"9":[409,381,366,410,411,366,412,413,366,414,366,415,416,417,366,418,419,366,420,366,421,388,366,374,368],"10":[422,381,366,410,366,423,424,425,426,366,427,388,366,374,368],"11":[428,365,370,429,430,366,431,432,366,433,432,366,434,368],"12":[435,381,366,436,368],"13":[437,381,366,438,368],"14":[439,440,441,366,442,443,444,445,366,446,447,366,448,388,366,449,450,451,452,366,453,388,366,454,455,451,452,366,456,388,366,457,458,451,452,366,459,388,366,460,461,462,366,463,368],"15":[464,465,366,466,366,467,368],"16":[468,469,470,471,472,473,366,474,471,388,366,475,368],"17":[476,440,366,477,368],"18":[478,384,366,479,368],"19":[480,481,482,366,483,366,484,485,366,486,487,366,488,489,490,491,492,366,493,366,494,495,366,496,497,498,366,499,500,366,489,501,491,492,366,493,366,502,495,366,496,503,504,388,366,505,368],"20":[506,507,508,366,509,510,366,511,512,366,513,368],"21":[514,384,366,515,516,517,366,518,519,366,520,519,366,432,388,366,521,366,423,522,523,366,524,525,366,526,527,528,366,529,530,503,531,366,524,525,366,532,366,533,534,388,366,535,368],"22":[536,537,368],"23":[538,395,366,403,539,366,540,541,366,542,368],"24":[543,381,366,544,411,366,545,546,547,366,548,549,550,551,366,552,525,388,366,374,368],"25":[553,381,366,554,555,556,557,366,374,368],"26":[558,481,559,366,560,388,366,365,366,561,562,563,564,565,566,567,568,366,569,368],"27":[570,481,571,366,572,388,366,381,366,573,574,366,575,366,576,577,578,366,579,366,580,578,366,581,525,366,582,388,366,583,584,585,586,366,587,546,588,366,589,590,366,591,578,525,366,592,593,594,595,366,596,597,366,598,366,599,600,366,601,524,366,602,603,604,366,605,524,366,606,607,366,608,524,366,609,610,611,612,613,614,615,366,616,388,366,374,368],"28":[617,481,618,366,619,388,366,381,366,620,366,621,622,623,366,624,625,626,503,627,366,628,388,366,374,368],"29":[629,630,366,631,632,366,633,366,634,368],"30":[635,481,636,366,637,388,366,381,638,366,586,639,640,366,641,546,642,643,366,644,645,646,366,647,648,649,650,366,651,652,503,653,366,654,655,656,657,658,366,659,660,388,368],"31":[661,662,663,366,664,665,366,666,366,667,668,366,669,366,670,671,672,673,674,366,575,675,366,676,677,678,366,679,366,680,366,681,682,683,684,685,366,686,687,525,366,688,689,690,366,691,692,366,693,694,366,695,696,697,698,366,696,495,366,699,366,700,525,366,701,366,702,703,525,366,704,366,705,706,366,707,549,708,709,366,710,525,366,702,711,578,366,712,525,366,582,388,366,713,366,714,582,366,715,366,716,717,366,718,627,366,719,388,366,374,368],"32":[720,721,722,366,723,366,724,725,366,726,388,366,727,366,728,729,730,731,732,366,733,734,366,735,525,366,736,388,366,737,366,738,739,740,741,525,388,366,742,546,743,366,744,524,366,745,746,747,366,589,748,749,366,750,751,752,753,366,754,388,366,755,368],"33":[756,757,589,758,759,366,760,748,761,503,653,388,366,410,366,481,762,763,764,366,765,766,366,767,768,366,769,627,388,366,770,366,374,368],"34":[771,365,366,772,368],"35":[773,384,366,774,366,423,775,712,525,388,366,374,368],"36":[776,381,366,403,777,366,778,366,774,366,423,779,366,780,781,366,524,525,366,782,783,366,784,785,786,503,781,388,366,374,368],"37":[787,788,368],"38":[789,365,370,790,366,791,366,372,792,366,374,368],"39":[793,384,366,403,794,366,795,368],"40":[796,481,482,366,797,366,798,366,799,366,800,368],"41":[801,802,366,803,804,805,806,366,807,366,582,763,808,368],"42":[809,507,508,366,810,811,366,803,812,813,814,815,366,816,817,495,366,818,525,388,366,819,820,821,822,366,823,824,366,825,826,827,366,828,817,366,829,830,366,816,817,495,366,831,525,388,366,832,366,833,368],"43":[834,384,778,366,423,835,517,388,366,434,368],"44":[836,381,366,774,366,423,837,388,366,374,368],"45":[838,384,508,366,839,840,366,841,366,842,843,844,503,845,388,366,374,368],"46":[846,384,508,366,847,366,848,849,388,366,850,368],"47":[851,852,366,481,853,366,660,366,854,388,366,381,366,855,856,857,858,857,859,860,366,861,368],"48":[862,863,864,865,366,866,366,374,368],"49":[867,381,366,868,366,869,870,524,366,871,366,872,388,366,374,368],"50":[873,381,366,868,874,875,366,869,871,876,366,877,388,366,374,368],"51":[878,395,366,879,368],"52":[880,881,638,882,366,883,368],"53":[884,885,366,886,366,887,888,366,889,471,366,890,388,366,891,368],"54":[892,365,370,366,893,368],"55":[894,365,370,366,895,368],"56":[896,881,638,366,897,368],"57":[898,395,396,366,899,900,901,902,903,503,653,388,366,904,368],"58":[905,384,366,906,368],"59":[907,365,366,908,368],"60":[909,381,366,403,910,366,521,366,911,912,366,913,914,503,915,916,366,914,525,388,366,917,368],"61":[918,919,589,920,366,921,922,388,366,923,924,925,926,366,927,388,366,738,928,366,929,930,366,931,739,763,808,366,932,933,934,935,936,366,937,938,366,939,940,941,495,366,942,525,366,943,388,368],"62":[944,384,396,945,366,946,368],"63":[947,948,432,366,949,432,366,950,366,951,432,366,952,368],"64":[953,948,432,366,949,432,366,423,954,955,956,503,517,388,366,434,368],"65":[957,948,432,366,949,432,366,423,958,959,503,517,388,366,434,368],"66":[960,961,368],"67":[962,963,811,366,964,811,366,965,811,366,966,811,366,967,811,366,968,811,366,969,368],"68":[970,948,432,366,949,811,366,971,811,366,969,368],"69":[972,973,366,974,368],"70":[975,976,368],"71":[977,948,432,366,978,368],"72":[979,980,432,366,981,368],"73":[982,803,811,366,819,811,366,969,368],"74":[983,984,811,366,540,811,366,969,368],"75":[985,986,368],"76":[987,948,432,366,949,432,366,423,988,517,388,366,434,368],"77":[989,990,991,366,992,993,366,994,388,366,969,368],"78":[995,996,368],"79":[997,973,366,998,432,366,999,432,366,434,368],"80":[1000,948,811,366,963,811,366,971,811,366,969,368],"81":[1001,990,1002,366,969,368],"82":[1003,973,366,998,432,366,1004,432,366,434,368],"83":[1005,948,432,366,949,432,366,1006,366,1007,1008,763,432,366,423,1009,517,388,366,434,368],"84":[1010,948,432,366,949,432,366,911,1011,524,366,1012,366,1013,517,388,366,434,368],"85":[1014,1015,368],"86":[1016,1017,811,366,1018,811,366,969,368],"87":[1019,948,432,366,950,366,1020,432,366,842,1021,517,366,1022,366,1023,517,388,366,434,368],"88":[1024,948,432,366,1025,366,1026,432,366,1027,432,366,842,1011,524,366,1009,517,366,1028,517,366,1029,517,388,366,434,368],"89":[1030,948,432,366,949,432,366,1031,1032,1033,432,388,366,434,368],"90":[1034,384,396,366,397,366,1035,368],"91":[1036,948,432,366,1037,366,1038,368],"92":[1039,948,432,366,1040,432,366,1041,432,366,1042,1043,366,1044,432,366,1045,366,1046,368],"93":[1047,948,432,366,1048,432,366,1049,366,1050,432,366,1051,366,1052,368],"94":[1053,540,1054,366,969,368],"95":[1055,948,432,366,949,432,366,423,1056,517,388,366,434,368],"96":[1057,990,1058,366,969,368],"97":[1059,1060,811,366,964,811,366,965,811,366,969,368],"98":[1061,1062,368],"99":[1063,481,811,366,1064,811,366,969,368],"100":[1065,1060,811,366,964,811,366,969,368],"101":[1066,1067,368],"102":[1068,1069,432,366,1070,432,366,1071,432,366,973,366,1072,368],"103":[1073,948,432,366,1048,432,366,1049,366,1074,432,366,1051,366,1052,368],"104":[1075,1064,432,366,973,366,1076,368],"105":[1077,1078,432,366,1079,368],"106":[1080,948,432,366,949,432,366,423,1081,517,388,366,434,368],"107":[1082,990,1083,366,969,368],"108":[1084,948,432,366,949,432,366,1085,366,1086,368],"109":[1087,973,366,1088,368],"110":[1089,1090,811,366,1091,811,366,969,368],"111":[1092,948,432,366,971,811,366,1091,811,366,969,368],"112":[1093,1094,368],"113":[1095,948,432,366,949,432,366,1025,366,951,432,366,842,1096,524,366,432,388,366,434,368],"114":[1097,540,1098,366,969,368],"115":[1099,1100,1101,366,969,368],"116":[1102,1103,368],"117":[1104,948,432,366,949,432,366,423,1105,517,388,366,434,368],"118":[1106,980,432,366,1107,1108,763,432,366,1031,1109,1033,432,388,366,434,368],"119":[1110,540,811,366,803,811,366,969,368],"120":[1111,948,432,366,949,432,366,1112,432,366,1113,432,366,1114,432,366,434,368],"121":[1115,1116,811,366,1117,811,366,969,368],"122":[1118,384,366,403,1119,366,638,366,1120,368],"123":[1121,381,366,1122,368],"124":[1123,507,366,1124,368],"125":[1125,481,482,366,1126,388,366,1127,368],"126":[1128,1129,675,366,576,1130,1131,578,495,366,1132,366,914,525,366,1133,1134,1135,366,1136,366,854,388,366,738,1137,499,1138,1139,1140,366,1141,1142,1143,1144,366,1145,366,1146,366,1147,1148,495,366,1149,366,471,525,388,366,1150,368],"127":[1151,365,370,366,1152,368],"128":[1153,365,370,366,1154,368],"129":[1155,1156,1157,1158,1159,366,1160,1161,1162,1163,366,1164,388,366,1165,366,1031,1166,1033,1167,388,366,1168,1169,1170,763,1171,366,1172,1173,1174,1175,1176,1177,1178,1179,1180,1181,1182,1183,1184,1185,1186,366,738,1187,739,1188,763,808,366,1189,366,869,1190,524,366,1191,1192,366,1193,525,388,366,738,1194,366,1195,1196,366,1197,1198,366,1199,1200,366,921,1201,366,1202,739,1203,1204,1205,1206,366,1207,495,525,366,1208,763,808,368],"130":[1209,384,778,366,774,366,423,1210,366,1211,366,837,388,366,374,368],"131":[1212,381,638,366,949,432,366,1213,432,366,1214,432,366,1215,366,1216,368],"132":[1217,381,638,366,949,432,366,1213,432,366,1214,432,366,1218,366,1216,368],"133":[1219,381,638,366,1220,1221,1222,1223,366,1224,368],"134":[1225,1226,368],"135":[1227,881,1228,366,1229,368],"136":[1230,1231,368],"137":[1232,365,370,366,1233,366,372,1234,366,374,368],"138":[1235,465,366,466,366,1236,368],"139":[1237,507,508,366,1238,368],"140":[1239,368],"141":[1240,881,638,366,868,366,1241,1242,524,366,1243,366,872,388,366,374,368],"142":[1244,881,366,1245,368],"143":[1246,881,366,1247,366,1248,368],"144":[1249,881,366,1250,368],"145":[1251,1252,368],"146":[1253,465,366,1254,366,1255,1256,471,366,1257,388,366,1258,808,366,1259,368],"147":[1260,376,377,366,1261,366,372,1262,366,374,368],"148":[1263,1264,366,1265,1266,366,1267,1268,1269,366,1270,525,366,1271,388,366,381,638,1272,366,1273,368],"149":[1274,1264,366,1265,1266,366,1267,1268,1275,366,1276,525,366,1277,388,366,381,638,1272,366,1278,368],"150":[1279,381,366,1280,368],"151":[1281,465,366,1254,1282,366,1283,1284,388,366,1285,368],"152":[1286,381,638,366,1287,1288,366,1289,366,372,1290,366,374,368],"153":[1291,381,366,1292,1293,366,951,1294,366,1295,366,1296,368],"154":[1297,381,366,1298,1299,366,1300,368],"155":[1301,384,366,1302,368],"156":[1303,381,366,1304,368],"157":[1305,381,366,1306,368],"158":[1307,381,366,1308,366,1309,366,1310,368],"159":[1311,384,366,403,1312,366,396,366,405,366,1313,1314,366,1315,366,1316,388,366,1317,368],"160":[1318,384,385,366,1319,366,1320,366,842,1321,388,368],"161":[1322,1323,366,1324,1325,366,1116,1326,1327,1328,366,1329,938,366,939,1330,1331,495,525,763,808,366,1332,1333,1334,1335,1336,1337,366,1338,366,374,368],"162":[1339,384,366,403,539,366,1340,368],"163":[1341,881,638,366,399,1342,366,1343,808,366,1344,368],"164":[1345,481,1346,366,365,441,366,1347,1348,366,1265,1349,366,374,368],"165":[1350,465,1351,366,1352,366,1353,366,1031,1354,1355,1356,366,1357,388,366,1358,366,1178,366,868,366,1359,1360,366,374,368],"166":[1361,384,778,366,774,366,423,1362,524,366,837,388,366,374,368],"167":[1363,384,396,366,399,1364,366,1272,945,366,1365,366,1366,366,1367,368],"168":[1368,381,396,366,1369,368],"169":[1370,381,638,1371,366,1372,366,1373,1374,388,366,374,368],"170":[1375,395,638,1371,366,540,1376,366,1377,1378,575,366,576,1379,1380,697,494,525,366,582,763,808,368],"171":[1381,1382,366,1383,1384,366,1385,366,1383,1386,366,1387,1388,1389,1390,1391,1392,366,1393,1394,1395,1396,1397,1398,1399,1400,1401,366,1402,368],"172":[1403,1404,366,1405,1406,366,1407,1408,1409,366,1410,1411,1412,366,1413,1414,525,366,1415,1416,1417,1418,654,366,660,388,366,1419,1420,1421,1409,366,1422,1423,1424,1425,366,1426,1427,1418,654,366,660,388,366,1428,1429,471,366,1430,366,1431,1432,525,388,366,1433,1434,366,1435,366,1436,471,366,1437,1438,366,1439,1440,366,1441,1442,388,366,1443,1444,1445,366,1446,1447,1448,1449,366,1450,763,808,366,1451,1452,1453,1454,1455,366,1456,366,1446,1457,366,1458,388,366,1459,1460,366,1458,388,366,1461,1458,366,1462,1458,366,1463,1458,366,1464,1465,1466,366,1467,1468,366,1469,366,1470,368],"173":[1471,1382,366,1472,366,1473,1474,366,1475,1476,366,1477,1478,366,1479,1480,366,1481,1482,366,1464,1483,1484,388,366,1485,1486,366,1487,368],"174":[1488,1382,366,521,366,1489,1490,1491,366,1492,1493,366,1473,1494,1495,388,366,1475,1496,1495,388,366,1477,1497,1495,388,366,1479,1498,1495,388,366,1481,1499,1495,388,366,1500,1501,366,917,368],"175":[1502,384,366,1503,368],"176":[1504,365,366,1505,368],"177":[1506,381,366,403,1507,366,410,1508,1509,366,1510,1511,1512,366,1513,525,366,1514,1515,1516,1517,1518,420,366,421,388,366,374,368],"178":[1519,1520,368],"179":[1521,381,366,403,1522,366,778,366,399,1523,366,1524,366,1525,574,1526,366,575,1527,366,1528,1529,366,1530,1531,366,1532,1533,697,1534,366,1532,495,525,366,582,388,366,1535,574,1526,1536,366,1537,366,1538,1539,366,1540,1331,366,785,525,366,582,388,366,1541,366,1542,368],"180":[1543,881,638,366,399,1342,366,401,368],"181":[1544,384,366,403,1545,366,396,366,1313,1546,366,1547,366,1316,388,366,1548,368],"182":[1549,384,366,774,840,366,412,1550,1551,366,1552,837,388,366,374,368],"183":[1553,365,441,366,1554,366,767,1555,1556,366,1557,627,366,1558,388,368],"184":[1559,395,396,366,1560,368],"185":[1561,395,396,366,405,366,1562,368],"186":[1563,395,366,1564,366,1565,366,399,1566,366,1567,388,366,1568,366,1569,366,1570,366,1571,368],"187":[1572,802,366,803,1267,1573,503,1574,805,1575,1576,1576,366,1577,525,366,1267,1578,366,806,675,366,1579,1580,1581,1582,366,700,525,366,1583,366,702,1584,366,1585,525,366,582,388,368],"188":[1586,1587,368],"189":[1588,381,366,403,1589,366,949,1590,366,1591,368],"190":[1592,1593,368],"191":[1594,381,366,1595,1596,366,1597,366,1598,368],"192":[1599,381,366,1372,366,1600,675,366,1601,1602,1131,366,578,495,366,1603,366,914,525,366,1604,388,366,374,368],"193":[1605,381,638,366,1606,1607,366,1608,388,366,1609,368],"194":[1610,381,638,366,1611,1607,366,1612,388,366,1609,368],"195":[1613,365,370,366,1614,366,372,1615,366,374,368],"196":[1616,395,396,366,899,900,901,902,903,503,653,388,366,1617,368],"197":[1618,384,638,366,774,366,423,1619,366,1620,388,366,374,368],"198":[1621,384,366,1622,366,1623,368],"199":[1624,1625,368],"200":[1626,384,638,366,1627,366,841,366,1628,1629,366,387,388,368],"201":[1630,384,366,1631,574,366,575,366,576,1632,366,1633,1634,366,1141,491,366,1635,366,1636,495,366,1637,525,366,582,388,366,1638,574,366,575,675,366,576,1639,1640,366,1641,1642,1131,697,1643,525,366,1644,366,702,1645,525,366,702,1646,1647,366,1532,578,1642,1648,366,1532,697,1643,525,366,582,388,366,1649,1650,1651,366,1652,1653,1654,366,1655,366,1656,366,1657,388,366,1658,366,1659,1660,1661,366,1662,1663,525,366,1664,388,366,1665,1666,366,521,1667,366,1668,366,1669,366,1659,1670,366,1671,388,366,1672,366,1492,1668,366,1673,366,1674,546,1675,366,1676,1677,366,1678,525,366,1679,366,534,388,366,1668,366,917,368],"202":[1680,1681,366,1682,368],"203":[1683,365,366,403,1684,366,377,366,1685,1686,366,1687,1688,366,1689,525,366,1690,1691,366,1689,525,366,1692,1693,1694,366,1695,525,366,1696,1697,1694,366,1698,525,366,1699,1700,1694,366,1701,525,366,1702,1703,1694,366,1695,525,366,1704,677,366,1705,388,366,1706,366,1707,1708,366,1709,1710,1711,366,1712,1713,366,1294,388,366,1714,1715,366,1716,1717,366,1718,368],"204":[1719,465,366,403,1720,366,396,366,1721,1722,366,1723,368],"205":[1724,1725,366,1726,368],"206":[1727,481,559,366,1728,388,366,365,366,561,562,1729,1730,1731,566,366,1732,368],"207":[1733,465,366,403,1734,366,370,366,1721,1722,366,1735,368],"208":[1736,440,366,1737,368],"209":[1738,1739,482,366,1740,366,1741,1742,1743,366,675,366,1744,366,1745,549,1746,1132,1747,366,1748,1749,366,1641,697,1750,1751,366,1752,1641,495,525,366,1753,366,1754,1755,1742,1756,366,675,366,1757,366,1745,1758,1132,1759,366,1760,1761,366,1748,1762,366,1641,697,1763,1751,366,1752,1641,495,525,366,1753,366,1754,1764,1765,1766,1767,763,1768,368],"210":[1769,365,366,403,1770,366,396,366,1771,1772,366,951,1294,366,1773,1774,1775,366,1776,1777,366,1778,627,366,1779,388,366,1780,1781,366,1782,366,1783,368],"211":[1784,381,366,1785,368],"212":[1786,381,366,1787,366,1788,366,374,368],"213":[1789,507,366,1790,368],"214":[1791,381,366,1790,368],"215":[1792,381,366,1793,368],"216":[1794,381,366,1795,366,1796,366,374,368],"217":[1797,507,366,1798,368],"218":[1799,881,366,774,366,1241,1800,1801,1802,366,616,388,366,374,368],"219":[1803,381,366,1804,366,1805,366,374,368],"220":[1806,381,366,1807,368],"221":[1808,1809,1810,366,1811,1812,366,1813,1814,1815,492,366,941,495,525,388,366,1464,1816,854,388,366,521,366,423,1817,1818,366,914,503,523,388,366,1819,366,1820,366,1821,1822,368],"222":[1823,381,366,1824,368],"223":[1825,381,366,1826,368],"224":[1827,381,366,1828,368],"225":[1829,365,366,1830,368],"226":[1831,738,1832,1833,366,1834,739,1835,763,808,368],"227":[1836,540,1837,1838,366,1754,388,366,384,366,1839,1840,1841,366,412,1842,1843,366,1844,597,503,627,388,366,774,366,842,1845,712,524,525,366,780,712,524,525,366,1846,366,1847,524,366,837,388,366,374,368],"228":[1848,540,1849,366,1837,1850,366,1754,388,366,384,396,366,774,366,423,1851,366,1620,388,366,374,368],"229":[1852,540,1837,1853,366,1754,388,366,384,366,774,366,423,912,366,913,1854,503,1855,366,1854,525,388,366,374,368],"230":[1856,540,541,366,1837,1857,366,1754,388,366,384,638,366,774,366,423,1858,366,1620,388,366,374,368],"231":[1859,384,366,403,539,366,1860,368],"232":[1861,381,366,967,1862,366,964,1863,366,965,1864,366,475,368],"233":[1865,381,366,1866,1867,1868,1869,1870,1871,1872,1873,1874,1875,366,1876,1877,366,1878,388,366,1879,368],"234":[1880,767,1558,388,368],"235":[1881,365,370,366,1882,366,372,1883,366,374,368],"236":[1884,774,366,1885,1886,1887,1888,366,1889,524,366,1890,366,1891,388,366,374,368],"237":[1892,1893,368],"238":[1894,1895,366,1896,1897,366,1898,366,1899,1900,366,1901,1902,368],"239":[1903,381,366,1896,366,1904,366,1905,366,1898,366,1906,1907,366,374,368],"240":[1908,381,366,1909,368],"241":[1910,1911,368],"242":[1912,381,638,366,774,366,1913,1886,366,1914,712,388,366,374,368],"243":[1915,381,366,774,366,1916,1917,712,1918,1919,366,1920,503,653,388,366,374,368],"244":[1921,381,366,1922,1923,366,1924,368],"245":[1925,381,366,403,1926,366,377,366,774,1927,1928,366,1929,366,842,1930,366,1931,1854,366,524,525,366,1712,1932,1532,388,366,374,368],"246":[1933,381,366,1934,1935,368],"247":[1936,381,366,544,366,1913,1937,366,1938,388,366,374,368],"248":[1939,381,366,1940,366,1941,368],"249":[1942,381,638,366,1943,1944,366,1945,471,388,366,1946,366,1947,1948,366,1949,368],"250":[1950,381,366,1951,366,1952,368],"251":[1953,381,638,366,1954,368],"252":[1955,381,638,366,1943,1956,1957,1958,366,1959,366,471,525,388,366,1960,1922,1961,366,1962,368],"253":[1963,381,366,1960,1922,1961,366,1964,368],"254":[1965,919,1966,366,1967,366,1968,388,366,1969,1970,1971,366,1972,366,1973,366,1974,366,1975,1976,366,934,388,366,1977,366,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,366,1988,366,1896,1897,366,1989,368],"255":[1990,481,482,366,1991,1992,1993,1994,1995,1996,366,1997,368],"256":[1998,381,366,1999,766,2000,366,2001,2002,366,1906,2000,2003,366,374,368],"257":[2004,2005,366,2006,368],"258":[2007,2008,2009,2010,388,366,475,368],"259":[2011,2008,2012,2010,388,366,475,368],"260":[2013,2014,432,366,2015,368],"261":[2016,2017,811,366,2018,811,366,969,368],"262":[2019,948,432,366,2020,2021,2022,366,2023,432,366,2024,368],"263":[2025,948,432,366,2020,2021,2022,366,2023,432,366,2026,368],"264":[2027,948,432,366,2020,2021,2022,366,2028,368],"265":[2029,2014,432,366,2030,368],"266":[2031,1943,2032,366,2033,2034,2035,517,525,366,2036,366,2037,2038,366,2039,2040,2041,2042,366,2043,495,525,366,2044,366,811,2045,2033,2046,2035,517,525,366,811,763,432,368],"267":[2047,2048,2049,2050,366,2051,2052,366,2053,366,2054,366,2055,2056,2057,2058,2059,366,2060,366,2061,366,2062,366,2061,366,2063,366,2061,366,2064,2065,2066,2067,366,2068,366,2069,366,2070,366,2071,366,2070,366,2072,366,2070,2073,2074,2075,2076,366,2077,2078,366,2079,2080,366,2081,2082,366,2083,366,2084,366,2085,2086,366,366,366,366,2087,2088,368],"268":[2089,381,366,2090,368],"269":[2091,2092,2093,2094,2095,366,2096,2097,366,2098,366,2099,366,2100,388,366,2101,2097,366,2098,366,2102,388,366,2103,2104,2105,503,653,366,2106,2107,388,366,2108,366,2109,1434,366,2110,388,366,2111,366,2112,2113,2114,366,2115,2116,366,2117,2118,2119,366,2120,1558,388,366,2121,2122,366,2123,366,2124,368],"270":[2125,381,366,2126,2127,2128,2129,366,2130,366,374,368],"271":[2131,2132,521,366,2133,2134,366,2135,2136,366,2137,366,2138,368],"272":[2139,2140,2141,366,2142,653,366,2143,388,366,2144,368],"273":[2145,2146,368],"274":[2147,2148,2149,366,2150,854,366,2151,366,2152,2153,366,2154,388,366,2155,2156,2157,366,2158,368],"275":[2159,381,366,2160,2092,2093,366,2161,2097,541,366,2162,366,2098,2163,655,2164,2165,366,660,388,366,2096,2097,366,2166,388,366,2101,2097,366,2167,388,366,2103,2104,2105,503,653,366,2106,2107,388,366,2108,366,2109,1434,366,2110,388,366,2111,366,2112,2113,2114,366,2115,2116,366,2117,2118,2119,366,2120,1558,388,366,2168,366,2169,368],"276":[2170,774,2171,1841,366,2172,366,842,2173,594,366,2174,2175,2176,2177,2178,366,616,388,366,374,368],"277":[2179,381,366,2180,2181,2182,2183,2184,2121,2185,2122,2186,366,2187,366,2124,368],"278":[2188,2180,2181,2182,2189,366,2190,368],"279":[2191,381,366,2192,2193,2194,2195,366,2196,366,374,368],"280":[2197,2198,366,2199,368],"281":[2200,381,366,2201,368],"282":[2202,381,366,2203,368],"283":[2204,381,366,2205,366,2206,368],"284":[2207,381,366,2208,368],"285":[2209,481,2210,366,381,366,2211,2212,366,2213,366,2214,2215,2216,366,1947,1948,366,2217,2218,366,767,2219,2220,2221,2222,2223,366,2224,496,388,368],"286":[2225,1382,366,2226,366,2227,368],"287":[2228,465,366,2229,366,2109,1434,366,2230,2231,366,2232,366,2233,388,366,2234,366,2235,368],"288":[2236,2237,368],"289":[2238,2239,2240,366,2241,2242,366,2243,366,2244,2245,2246,2247,763,808,368],"290":[2248,381,366,2249,2250,366,2251,2252,366,2253,2254,366,660,388,366,374,368],"291":[2255,2256,2257,366,2258,2259,366,2260,2261,368],"292":[2262,381,366,2263,368],"293":[2264,381,366,2265,2266,2267,2268,2269,2270,2271,366,374,368],"294":[2272,2273,2274,368],"295":[2275,2276,366,2277,368],"296":[2278,2279,368],"297":[2280,2281,366,2282,368],"298":[2283,381,366,2284,2285,2286,763,2285,368],"299":[2287,381,366,2288,368],"300":[2289,381,366,2290,2291,2292,366,2293,2294,2295,2296,2297,2298,2299,2300,2301,2302,2303,366,2304,368],"301":[2305,381,366,2306,2307,366,2308,366,2309,366,2310,2311,2312,366,2313,366,2314,366,1898,366,2315,366,2316,366,374,368],"302":[2317,2318,2319,2320,2321,366,2322,366,2323,366,2324,366,2325,2326,2327,366,2328,368],"303":[2329,2318,2319,2320,2321,366,2330,366,2331,366,2332,2333,366,2334,366,2335,388,366,374,368],"304":[2336,2318,2319,2320,2321,366,2330,2322,366,2337,366,2328,368],"305":[2338,2318,2319,2320,2321,366,2339,2322,366,2340,366,2328,368],"306":[2341,2318,2319,2320,2321,366,774,2342,366,2343,2344,2345,366,2346,2347,366,582,388,366,2348,366,2349,366,2350,366,2351,2352,2353,366,2354,2355,366,374,368],"307":[2356,2318,2319,2320,2321,366,2322,366,2357,2358,2359,366,2328,368],"308":[2360,2318,2319,2320,2321,366,2330,2322,366,2361,366,2328,368],"309":[2362,2318,2319,2320,2321,366,2330,366,774,2363,2353,2364,366,2354,2355,366,374,368],"310":[2365,2318,2319,2320,2321,366,2366,368],"311":[2367,2318,2319,2320,2321,366,2368,368],"312":[2369,2318,2319,2320,2321,366,2370,368],"313":[2371,2318,2319,2320,2321,366,774,2372,2358,2373,2358,2374,2353,2364,366,2354,2355,366,374,368],"314":[2375,2318,2319,2320,2321,366,2376,368],"315":[2377,2318,2319,2320,2321,366,2378,368],"316":[2379,2318,2319,2320,2321,366,2380,368],"317":[2381,2318,2319,2320,2321,366,2348,2322,366,2382,366,2383,366,2384,366,475,368],"318":[2385,2318,2319,2320,2321,366,2348,2322,366,2386,366,2387,366,2388,366,2328,368],"319":[2389,2318,2319,2320,2321,366,2390,2322,366,2391,368],"320":[2392,2318,2319,2320,2321,366,2322,366,2393,366,2343,2394,763,2395,366,2396,388,366,2328,368],"321":[2397,2318,2319,2320,2321,366,2339,2322,366,2340,2398,366,2328,368],"322":[2399,2318,2319,2320,2321,366,2322,366,2372,2400,366,2328,368],"323":[2401,2318,2319,2320,2321,366,2330,366,774,2402,2353,2342,366,2354,2355,366,374,368],"324":[2403,2318,2319,2320,2321,366,2390,2322,366,2404,368],"325":[2405,2318,2319,2320,2321,366,774,2372,2358,2406,2353,2364,366,2354,2355,366,374,368],"326":[2407,2318,2319,2320,2321,366,2322,366,2343,2408,366,2409,388,366,2372,2410,366,2328,368],"327":[2411,2318,2320,2321,366,774,366,2412,2413,366,2414,366,616,388,366,2415,2416,366,2417,2418,366,2419,2420,366,374,368],"328":[2421,2318,2320,2321,366,774,366,2412,2413,366,2414,366,616,388,366,2422,2423,2424,366,2425,2426,366,2427,2428,388,366,374,368],"329":[2429,2318,2319,2320,2321,2430,366,2322,366,2349,366,2350,366,2431,2432,2433,2434,366,2328,368],"330":[2435,2318,2319,2320,2321,2430,366,774,2372,2436,2358,2374,2353,2364,366,2354,2355,366,374,368],"331":[2437,2318,2319,2320,2321,2430,366,774,2372,2358,2438,2353,2364,366,2354,2355,366,374,368],"332":[2439,2318,2319,2320,2321,2430,366,2440,1434,366,2441,901,366,2442,2443,366,2444,366,2445,2446,366,2447,2448,366,2449,525,366,808,388,366,774,2450,366,2451,366,2452,2453,2454,2455,2456,2434,2353,2342,366,2354,2355,366,374,368],"333":[2457,881,385,366,881,385,366,774,366,386,2458,366,2459,388,366,374,368],"334":[2460,2318,2256,366,2461,366,2462,366,2463,2464,811,388,366,2465,366,969,368],"335":[2466,881,638,366,2467,366,2468,2469,2470,366,2471,388,366,2472,2473,2474,366,1031,2475,1355,2476,366,1357,388,366,2477,368],"336":[2478,881,366,2479,366,2480,368],"337":[2481,881,366,2482,575,2483,2484,701,2485,366,2486,2487,366,2488,2489,2490,366,578,495,366,2491,366,2492,525,366,2493,2494,2495,2496,2497,2498,366,616,366,2499,2500,366,2501,2502,495,366,2503,525,366,2504,2505,2506,366,2507,525,366,582,388,366,2508,546,2509,656,2510,2511,366,2512,366,2513,2514,655,366,660,388,368],"338":[2515,881,385,366,2516,574,366,2517,2518,2519,366,2520,2521,366,2522,2523,2524,697,1331,525,366,2525,366,2526,2527,366,2528,525,366,2529,2530,2531,366,2532,388,366,774,2533,366,2534,2535,366,616,388,366,374,368],"339":[2536,881,366,2537,366,2538,1434,366,2539,366,2540,496,366,2541,366,2542,366,582,388,366,521,366,2543,2544,388,366,723,2545,2546,366,2543,2547,2495,366,2548,2549,366,2550,366,2551,2552,388,366,2553,366,2554,2555,2556,2557,2558,2559,2560,366,2561,2562,366,2563,525,366,2564,388,366,2565,2566,366,2567,366,2568,2569,2570,366,2571,366,2572,2573,366,2574,366,2575,2576,366,2577,366,2578,2579,366,2580,366,2581,2582,366,2583,366,2584,2585,2586,366,2587,366,2588,366,917,368],"340":[2589,881,366,2590,574,366,575,366,576,1919,366,1920,525,366,582,388,366,2591,1434,366,575,2592,2593,2594,2595,366,2596,2597,366,1854,525,366,2598,366,582,388,366,2599,2600,366,2601,496,366,2602,366,2601,496,366,808,388,366,2603,2604,366,2605,2606,366,2607,524,366,2608,388,368],"341":[2609,381,366,2610,366,2611,2612,759,366,2613,525,366,2614,388,366,2615,2616,2617,2618,2619,2620,366,2621,368],"342":[2622,881,638,366,2623,811,366,2624,1242,517,388,366,434,368],"343":[2625,881,385,366,2626,432,366,2627,2628,366,2629,811,366,2630,366,2631,368],"344":[2632,881,638,366,774,2633,2634,2635,2636,2637,2638,2639,366,2640,546,2641,2642,2643,2644,2645,366,616,388,366,374,368],"345":[2646,2318,2256,2647,366,2648,2649,2650,2651,366,2652,2653,2654,2655,2656,2657,366,2658,366,2659,366,2660,366,2661,2662,1418,654,366,660,366,2663,519,366,2664,2665,2666,2667,2668,2669,2670,2671,2672,2514,366,660,366,2673,2670,2674,2514,366,660,366,811,388,366,1031,2675,1355,2676,366,2677,366,1482,366,432,388,368],"346":[2678,2318,2679,366,2680,2681,517,366,2682,519,366,2683,519,366,432,388,366,2684,366,2685,2686,2687,2688,366,496,525,366,2689,366,2690,2691,366,2692,366,582,388,366,2693,2694,366,374,368],"347":[2695,881,385,366,2696,2697,519,366,2698,519,366,432,388,366,774,1319,366,412,2699,2700,2701,2702,2703,366,2704,2705,366,2706,2707,2708,525,366,2709,2710,2711,366,2712,2713,2714,2715,366,2716,366,2717,2718,2714,2719,366,2720,366,2721,2722,2714,2723,366,2724,366,2717,2718,2725,2726,366,2727,366,2728,503,2729,2730,366,2731,525,388,366,374,368],"348":[2732,881,385,366,774,366,386,2733,2734,2735,2736,366,2737,524,366,2738,366,2739,2740,578,525,366,2525,2741,366,2346,388,366,374,368],"349":[2742,881,1228,366,2743,2649,2744,2745,2746,2747,366,2748,2749,578,366,2750,2751,366,2752,2753,366,2754,366,2755,525,366,2756,2757,366,2758,496,366,2759,366,2760,388,366,2761,2762,2763,2764,366,1031,2765,1355,2766,366,1357,388,368],"350":[2767,881,638,366,774,366,2768,2769,2770,366,2771,2772,524,525,366,2773,2774,2775,366,2776,388,366,770,765,366,374,368],"351":[2777,381,366,966,1299,366,967,1299,366,1060,1299,366,964,1299,366,965,2778,366,2779,366,2780,2781,366,2782,2783,366,2784,388,366,2307,366,2785,366,475,368],"352":[2786,2787,2788,366,2789,368],"353":[2790,2791,366,2792,2793,2794,366,2795,368],"354":[2796,2797,2798,2799,366,2800,368],"355":[2801,381,366,2802,368],"356":[2803,2791,2798,2799,366,2804,368],"357":[2805,2806,366,2807,368],"358":[2808,2809,366,2810,366,2811,368],"359":[2812,366,1213,2813,2814,2815,2816,2817,2818,2819,2820,503,2821,2822,2823,2824,2825,366,2826,525,388,366,2827,368],"360":[2828,2829,366,2830,368],"361":[2831,1622,366,1809,2832,2833,2834,2835,503,2836,388,366,2837,366,2838,2839,2840,2841,2842,2843,2844,2845,2846,2847,2848,2849,2850,2851,2852,2853,2854,2855,2856,2395,2857,366,2858,763,2859,368],"362":[2860,381,2861,366,1609,368],"363":[2862,2863,2681,517,366,2864,2865,366,2866,388,366,2239,2867,366,2343,2868,854,388,366,2869,366,2870,2868,854,388,366,2871,366,2872,2873,366,2874,366,2309,366,2875,2876,366,2877,366,2878,854,366,2316,366,2879,854,366,2880,2881,2882,2883,2884,366,1464,2885,2886,2887,366,2888,2889,366,2890,2891,2892,366,2893,2894,366,2895,388,366,2896,2897,2898,366,2899,525,388,366,2900,2901,366,2902,366,2903,2904,2905,2906,2907,2908,2909,2910,366,2911,388,368]}
const fns={abs,add,and,angle,append,arr,asc,at,back,base36_decode,base36_encode,between,brace,bracket,byte_size,capture,check,chr,clear,clone,cmp,collate,concat,contain,crc,date_decode,date_str,dbg_backtrace,dbg_callstack,dbg_here,dbg_origin_xs,dbg_origin,dbg_source_map,dbg_source,dec,dedup,delimit,different,div,drop,dump,dup,eq,every,explode,extract,find,flower,fn_args,fn_match,fn_select,front,get,gn_run,gt,gte,has,head,implode,inc,indent,init_common,insert,is_access,is_alnum,is_alpha,is_arr,is_atom,is_blank,is_bool,is_browser,is_char,is_comment,is_container,is_cool,is_def,is_digit,is_empty,is_false,is_fn,is_fragment,is_full,is_gn,is_identifier,is_indented,is_int,is_ip,is_ip4,is_ip6,is_json,is_last,is_lisp,is_lit_char,is_lit,is_ln,is_lower,is_many,is_name,is_node,is_none,is_noun,is_null,is_num,is_numeric,is_obj,is_pair,is_punct,is_single,is_space,is_str,is_token,is_trivia,is_true,is_tuple,is_txt,is_uint,is_undef,is_upper,is_url,is_vec,is_word,is_xn,join,json_decode,json_dump,json_encode,log,lt,lte,main,map,match_l,match_r,match,max,merge,min,mul,mute,neq,nop,obj_delete,obj_keys,obj_length,obj_vals,obj,on,or,pad_l,pad_r,paren,partial,path_concat,path_file,path_fix,path_join,path_split,path_strip,path_up,pop,prepend,profile,push,put,random,record,reject,remove,repeat,replace_rec,replace,report_html,report_init,report_log,report_render,reverse,round,salt,same,scan,set,shift,shuffle,sleep,slice_l,slice_r,slice,sort,space,split,stop,str_indent,str_unindent,strip_l,strip_r,sub,tail,tbl_column,tbl_columns,tbl_init,tbl_remove_column,tbl_render,time_get,time_hn,time_interval,time_now,time_str,time_timeout,to_base36,to_dump,to_fixed,to_i,to_int,to_json,to_lit,to_lower,to_num,to_str,to_tbl,to_uint,to_upper,trace,trim_l,trim_r,trim,trunc,tty_width,txt_compact,txt_cut,txt_indent,txt_prepend,unshift,unwrap,url_parse,wait,xor,app_list,beep,deinit_node,digest,dir_change,dir_current,dir_find,dir_load,dir_make,dir_read,dir_reset,dir_size,file_read,file_save,file_size,file_write,fs_copy,fs_remove,init_node,inspect,ip_host,ip_list,ip_v4,ip_v6,is_batch,is_color,is_dir,is_file,is_fs,is_interactive,is_readable,mail,open,os_capture,os_detach,os_execute,os_home,os_host,os_log,os_prompt,os_ps,os_run,os_shell,os_system,os_user,path_base,path_dir,path_ext,path_real,path_tmp,report_mail,sigint,ssh_execute,ssh_pass,ssh_system,sudo_save,write,app_token,init_server,is_local,is_remote,is_root,mnt_clean,mnt_unmount,app_home,app_make,ast_assign,ast_begin,ast_brk,ast_call,ast_catch,ast_check,ast_cont,ast_else,ast_elseif,ast_fn,ast_forin,ast_fornum,ast_forof,ast_gn,ast_if,ast_include,ast_inline,ast_let,ast_ret,ast_run,ast_throw,ast_try,ast_var,ast_while,ast_yield,call_ast_block_top,call_ast_block,call_ast_declare,call_ast_for,call_ast_if,call_ast_xn,cpl_block,cpl_check_syntax,cpl_compile,cpl_deinit,cpl_dump,cpl_fold,cpl_generate,cpl_include,cpl_init,cpl_is_call,cpl_is_leaf,cpl_load,cpl_log_error,cpl_scan,cpl_scope,cpl_tokenize,cpl_translate,cpl_uncomment,expr_arg,expr_arr,expr_call,expr_in,expr_inline,expr_instanceof,expr_new,expr_obj,expr_right,expr_run,expr_rvalue,expr_value,init}
main()