function abs(x)
{
 check_arg(is_num,x,"x","num")
 check_arity("same",arguments.length,1)
 return Math.abs(x)
}
function add(x,y,...z)
{
 check_arg(is_num,x,"x","num")
 check_arg(is_num,y,"y","num")
 check_arity("gte",arguments.length,2)
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
 check_arg(is_bool,x,"x","bool")
 check_arg(is_bool,y,"y","bool")
 check_arity("gte",arguments.length,2)
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
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 return concat("<",x,">")
}
function append(x,y)
{
 check_arg(is_arr,x,"x","arr")
 check_arg(is_arr,y,"y","arr")
 check_arity("same",arguments.length,2)
 const _=(typeof(y)==="function")?y():y
 {
  for(const v of _)
   push(x,v)
 }
}
function arr(...x)
{
 check_arity("gte",arguments.length,0)
 return [...x]
}
function asc(x)
{
 check_arg(is_char,x,"x","char")
 check_arity("same",arguments.length,1)
 return x.charCodeAt(0)
}
function at(x,y,z)
{
 check_arg(is_vec,x,"x","vec")
 check_arg(is_uint,y,"y","uint")
 check_arity("gte",arguments.length,2)
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
 check_arg(is_vec,x,"x","vec")
 check_arity("gte",arguments.length,1)
 if(is_undef(y))
  return back(x,0)
 check(is_uint,y)
 check(lte,y,x.length)
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
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
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
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 const _=""
 {
  let r=_
  {
   const _=(typeof(x)==="function")?x():x
   {
    for(const v of _)
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
}
function between(x,y,z)
{
 check_arg(is_num,x,"x","num")
 check_arg(is_num,y,"y","num")
 check_arg(is_num,z,"z","num")
 check_arity("same",arguments.length,3)
 check(gte,z,y)
 if(lt(x,y))
  return false
 if(gt(x,z))
  return false
 return true
}
function brace(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 return concat("{",x,"}")
}
function bracket(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 return concat("[",x,"]")
}
function byte_size(x)
{
 check_arg(is_uint,x,"x","uint")
 check_arity("same",arguments.length,1)
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
 check_arg(is_fn,x,"x","fn")
 check_arity("gte",arguments.length,1)
 const _=record(x,...y)
 {
  const o=_
  return (typeof(o.output)==="function")?o.output():o.output
 }
}
function check_arg(is,arg,name,type)
{
 check_arity("gte",arguments.length,0)
 const _=is(arg)
 {
  const test=_
  {
   if(is_true(test))
    return
   const _=to_lit(name)
   {
    const s_name=_
    {
     const _=to_lit(type)
     {
      const s_type=_
      {
       const _=typeof(arg)
       {
        const s_given=_
        {
         const _=to_lit(s_given)
         {
          const s_given=_
          {
           const _=space(s_given,"given")
           {
            const s_given=_
            {
             const _=paren(s_given)
             {
              const s_given=_
              {
               const _=space("Expecting argument",s_name,"to be of type",s_type,s_given)
               {
                const message=_
                stop(message)
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function check_arity(operator,length,arity)
{
 return
 if(operator==="same")
 {
  if(length===arity)
   return
 }

 if(operator==="gte")
 {
  if(length>=arity)
   return
 }

 const message="Expecting "+arity+" argument(s) ("+length+" given)"

 throw new Error(message)
}
function check(x,...y)
{
 check_arity("gte",arguments.length,0)
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
 stop("check")
}
function chr(x)
{
 check_arg(is_uint,x,"x","uint")
 check_arity("same",arguments.length,1)
 check(is_uint,x)
 return String.fromCharCode(x)
}
function clear(x)
{
 check_arg(is_arr,x,"x","arr")
 check_arity("same",arguments.length,1)
 x.splice(0)
}
function clone(x)
{
 check_arity("gte",arguments.length,0)
 if(is_undef(x))
  check(same,arguments.length,1)
 const _=[]
 {
  const history=_
  {
   function process(x)
   {
    check_arity("gte",arguments.length,0)
    if(is_container(x))
     push(history,x)
    if(is_arr(x))
    {
     const _=[]
     {
      const r=_
      {
       const _=(typeof(x)==="function")?x():x
       {
        for(const v of _)
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
    }
    else if(is_obj(x))
    {
     const _={}
     {
      const r=_
      {
       const _=(typeof(x)==="function")?x():x
       {
        for(const k in _)
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
 check_arg(is_def,x,"x","def")
 check_arg(is_def,y,"y","def")
 check_arity("same",arguments.length,2)
 if(x>y)
  return 1
 if(x<y)
  return -1
 return 0
}
function collate(x)
{
 check_arg(is_arr,x,"x","arr")
 check_arity("same",arguments.length,1)
 function is_delimited(x)
 {
  check_arity("gte",arguments.length,0)
  if(!(is_str(x)))
   return false
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
   const _=(typeof(x)==="function")?x():x
   {
    for(const v of _)
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
}
function concat(...x)
{
 check_arity("gte",arguments.length,0)
 return implode(x)
}
function contain(x,y)
{
 check_arg(is_vec,x,"x","vec")
 check_arity("gte",arguments.length,1)
 if(is_undef(y))
  check(same,arguments.length,2)
 if(is_str(x))
  check(is_str,y)
 return x.includes(y)
}
function count(x,y)
{
 check_arg(is_arr,x,"x","arr")
 check_arg(is_def,y,"y","def")
 check_arity("same",arguments.length,2)
 const _=0
 {
  let r=_
  {
   const _=(typeof(x)==="function")?x():x
   {
    for(const v of _)
    {
     if(same(v,y))
     {
      r=inc(r)
     }
    }
    return (typeof(r)==="function")?r():r
   }
  }
 }
}
function crc(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 const _=0
 {
  let r=_
  {
   const _=explode(x)
   {
    const a=_
    {
     const _=(typeof(a)==="function")?a():a
     {
      const _a=_
      {
       const _=(typeof(_a)==="function")?_a():_a
       {
        for(const k in _)
        {
         const _=to_i(k)
         {
          const i=_
          {
           const _=at(_a,i)
           {
            const v=_
            {
             const _=(typeof(s)==="function")?s():s
             {
              const _a=_
              {
               const _=(typeof(_a)==="function")?_a():_a
               {
                for(const k in _)
                {
                 const _=to_i(k)
                 {
                  const i=_
                  {
                   const _=at(_a,i)
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
function cut_l(x,y)
{
 check_arg(is_str,x,"x","str")
 check_arg(is_uint,y,"y","uint")
 check_arity("same",arguments.length,2)
 if(lte(x.length,y))
  return (typeof(x)==="function")?x():x
 const _=sub(y,3)
 {
  const length=_
  {
   const _=slice_r(x,length)
   {
    const s=_
    {
     const _=explode(s)
     {
      const a=_
      {
       while(true)
       {
        const _=front(a)
        {
         const c=_
         {
          if(is_punct(c))
           shift(a)
          else if(is_space(c))
           shift(a)
          else
           break
         }
        }
       }
       const _=implode(a)
       {
        const r=_
        {
         const _=concat("...",r)
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
function cut_r(x,y)
{
 check_arg(is_str,x,"x","str")
 check_arg(is_uint,y,"y","uint")
 check_arity("same",arguments.length,2)
 check(is_str,x)
 check(is_uint,y)
 if(lte(x.length,y))
  return (typeof(x)==="function")?x():x
 const _=sub(y,3)
 {
  const length=_
  {
   const _=slice_l(x,length)
   {
    const s=_
    {
     const _=explode(s)
     {
      const a=_
      {
       while(true)
       {
        const _=back(a)
        {
         const c=_
         {
          if(is_punct(c))
           drop(a)
          else if(is_space(c))
           drop(a)
          else
           break
         }
        }
       }
       const _=implode(a)
       {
        const r=_
        {
         const _=concat(r,"...")
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
function date_decode(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
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
 check_arity("gte",arguments.length,0)
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
function dbg_backtrace(stack,map)
{
 check_arity("gte",arguments.length,0)
 if(is_undef(stack))
 {
  const _=new Error("backtrace")
  {
   const e=_
   return dbg_backtrace(e.stack,map)
  }
 }
 check(is_str,stack)
 if(is_undef(map))
 {
  const _=(typeof(dbg_source_map)==="function")?dbg_source_map():dbg_source_map
  {
   const map=_
   return dbg_backtrace(stack,map)
  }
 }
 check(is_obj,map)
 const _=(typeof(tbl_init)==="function")?tbl_init():tbl_init
 {
  const r=_
  {
   const _=trim(stack)
   {
    const stack=_
    {
     const _=split(stack)
     {
      const stack=_
      {
       const _=(typeof(map.source)==="function")?map.source():map.source
       {
        const source=_
        {
         const _=(typeof(stack)==="function")?stack():stack
         {
          const _a=_
          {
           const _=(typeof(_a)==="function")?_a():_a
           {
            for(const k in _)
            {
             const _=to_i(k)
             {
              const i=_
              {
               const _=at(_a,i)
               {
                const v=_
                {
                 if((typeof(is_node)==="function")?is_node():is_node)
                 {
                  if(!(contain(v,map.script)))
                   continue
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
                             const _=split(a,":")
                             {
                              const a=_
                              {
                               if(!(is_many(a)))
                                continue
                               const _=back(a,1)
                               {
                                const njs=_
                                {
                                 const _=to_uint(njs)
                                 {
                                  const njs=_
                                  {
                                   const _=dec(njs)
                                   {
                                    let index=_
                                    {
                                     if(gte(index,source.length))
                                      continue
                                     const _=at(source,index)
                                     {
                                      const location=_
                                      {
                                       if(is_null(location))
                                        continue
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
  }
 }
}
function dbg_callstack(stack,map)
{
 check_arity("gte",arguments.length,0)
 if(is_undef(stack))
 {
  const _=new Error("callstack")
  {
   const e=_
   return dbg_callstack(e.stack)
  }
 }
 check(is_str,stack)
 if(is_undef(map))
 {
  const _=(typeof(dbg_source_map)==="function")?dbg_source_map():dbg_source_map
  {
   const map=_
   return dbg_backtrace(stack,map)
  }
 }
 check(is_obj,map)
 const _=dbg_backtrace(stack,map)
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
        else if(same(fn,"check_arg"))
        {
        }
        else if(same(fn,"check_arity"))
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
 check_arity("same",arguments.length,0)
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
function dbg_origin_xs(stack,code_type,map)
{
 check_arity("gte",arguments.length,0)
 if(is_undef(stack))
 {
  const _=new Error("origin-xs")
  {
   const e=_
   return dbg_origin_xs(e.stack)
  }
 }
 check(is_str,stack)
 check(is_str,code_type)
 if(is_undef(map))
 {
  const _=(typeof(dbg_source_map)==="function")?dbg_source_map():dbg_source_map
  {
   const map=_
   return dbg_origin_xs(stack,code_type,map)
  }
 }
 check(is_obj,map)
 const _=dbg_callstack(stack,map)
 {
  const frames=_
  {
   const _=head(frames,4)
   {
    const frames=_
    {
     const _=(typeof(frames)==="function")?frames():frames
     {
      const _a=_
      {
       const _=(typeof(_a)==="function")?_a():_a
       {
        for(const k in _)
        {
         const _=to_i(k)
         {
          const i=_
          {
           const _=at(_a,i)
           {
            const v=_
            {
             const _=null
             {
              let t=_
              {
               const _=null
               {
                let label=_
                {
                 if(same(code_type,"cs"))
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
                      label="stack"
                     }
                    }
                   }
                  }
                 }
                 else if(same(code_type,"js"))
                 {
                  const _=(typeof(v.njs)==="function")?v.njs():v.njs
                  {
                   const line=_
                   {
                    t=dbg_origin(map.source,line,"js")
                    label="javacript"
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
                        const title=_
                        {
                         const _=space(label,"frame",title,"/",v.fn)
                         {
                          const title=_
                          {
                           flower(title)
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
function dbg_origin(source,line,key,depth)
{
 check_arg(is_arr,source,"source","arr")
 check_arg(is_uint,line,"line","uint")
 check_arity("gte",arguments.length,2)
 if(is_undef(key))
  return dbg_origin(source,line,"",depth)
 check(is_str,key)
 if(is_undef(depth))
  return dbg_origin(source,line,key,15)
 check(is_uint,depth)
 function find_origin(fn,source,line,key,depth)
 {
  check_arg(is_fn,fn,"fn","fn")
  check_arg(is_arr,source,"source","arr")
  check_arg(is_uint,line,"line","uint")
  check_arg(is_str,key,"key","str")
  check_arg(is_uint,depth,"depth","uint")
  check_arity("same",arguments.length,5)
  const _=(typeof(depth)==="function")?depth():depth
  {
   let n=_
   {
    const _=fn(source,line,key,n)
    {
     let r=_
     {
      while(lte(n,source.length))
      {
       if(gte(r.length,depth))
        break
       n=inc(n)
       r=fn(source,line,key,n)
       const _=add(line,r.length)
       {
        const end=_
        {
         if(gte(end,source.length))
          break
        }
       }
      }
      return (typeof(r)==="function")?r():r
     }
    }
   }
  }
 }
 function origin(source,line,key,depth)
 {
  check_arg(is_arr,source,"source","arr")
  check_arg(is_uint,line,"line","uint")
  check_arg(is_str,key,"key","str")
  check_arg(is_uint,depth,"depth","uint")
  check_arity("same",arguments.length,4)
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
                const _=(typeof(length)==="function")?length():length
                {
                 for(let i=0;i<(_);i++)
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
                 {
                  const _=[]
                  {
                   const a2=_
                   {
                    const _=(typeof(a)==="function")?a():a
                    {
                     for(const v of _)
                      push(a2,v.code)
                     {
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
                            const _=(typeof(a3)==="function")?a3():a3
                            {
                             const _a=_
                             {
                              const _=(typeof(_a)==="function")?_a():_a
                              {
                               for(const k in _)
                               {
                                const _=to_i(k)
                                {
                                 const i=_
                                 {
                                  const _=at(_a,i)
                                  {
                                   const v=_
                                   {
                                    const _=at(a,i)
                                    {
                                     const o=_
                                     {
                                      o.code=(typeof(v)==="function")?v():v
                                     }
                                    }
                                   }
                                  }
                                 }
                                }
                               }
                               {
                                const _=(typeof(a)==="function")?a():a
                                {
                                 for(const v of _)
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
         }
        }
       }
      }
     }
    }
   }
  }
 }
 function origin_center(source,line,key,depth)
 {
  check_arg(is_arr,source,"source","arr")
  check_arg(is_uint,line,"line","uint")
  check_arg(is_str,key,"key","str")
  check_arg(is_uint,depth,"depth","uint")
  check_arity("same",arguments.length,4)
  const _=origin(source,line,key,depth)
  {
   const a=_
   return center(a)
  }
 }
 function center(x)
 {
  check_arg(is_arr,x,"x","arr")
  check_arity("same",arguments.length,1)
  const _=get_position(x)
  {
   let middle=_
   {
    const _=(typeof(middle)==="function")?middle():middle
    {
     let range=_
     {
      const _=mul(range,2)
      {
       const length=_
       {
        const _=inc(length)
        {
         const length=_
         {
          if(gt(length,x.length))
          {
           range=sub(x.length,middle)
           range=dec(range)
          }
          const _=sub(middle,range)
          {
           const ybefore=_
           {
            const _=inc(middle)
            {
             const yafter=_
             {
              const _=slice(x,ybefore,range)
              {
               const before=_
               {
                const _=at(x,middle)
                {
                 const center=_
                 {
                  const _=slice(x,yafter,range)
                  {
                   const after=_
                   {
                    const _=[...before,center,...after]
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
      }
     }
    }
   }
  }
 }
 function get_position(x)
 {
  check_arg(is_arr,x,"x","arr")
  check_arity("same",arguments.length,1)
  const _=(typeof(x)==="function")?x():x
  {
   const _a=_
   {
    const _=(typeof(_a)==="function")?_a():_a
    {
     for(const k in _)
     {
      const _=to_i(k)
      {
       const i=_
       {
        const _=at(_a,i)
        {
         const v=_
         {
          if(same(v.p,">"))
           return (typeof(i)==="function")?i():i
         }
        }
       }
      }
     }
     stop()
    }
   }
  }
 }
 const _=find_origin(origin_center,source,line,key,depth)
 {
  const centered=_
  {
   if(same(centered.length,depth))
    return (typeof(centered)==="function")?centered():centered
   return find_origin(origin,source,line,key,depth)
  }
 }
}
function dbg_source_map()
{
 check_arity("same",arguments.length,0)
 const _=null
 {
  let script=_
  {
   if((typeof(is_node)==="function")?is_node():is_node)
   {
    script=at(process.argv,1)
    script=path_real(script)
   }
   const _=split(source)
   {
    const lines_js=_
    {
     const _=[]
     {
      const paths=_
      {
       const _=(typeof(relatives)==="function")?relatives():relatives
       {
        for(const v of _)
        {
         const _=at(pool,v)
         {
          const path=_
          push(paths,path)
         }
        }
        {
         const _={}
         {
          const files=_
          {
           const _=(typeof(contents)==="function")?contents():contents
           {
            for(const k in _)
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
                     const _=(typeof(content)==="function")?content():content
                     {
                      for(const v of _)
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
            }
            {
             const _=[]
             {
              const source=_
              {
               if((typeof(is_node)==="function")?is_node():is_node)
               {
               }
               else if((typeof(is_browser)==="function")?is_browser():is_browser)
               {
                const _=7
                {
                 for(let i=0;i<(_);i++)
                  push(source,null)
                }
               }
               const _=(typeof(paths)==="function")?paths():paths
               {
                for(const k in _)
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
                return {script,files,source}
               }
              }
             }
            }
           }
          }
         }
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
 check_arity("gte",arguments.length,0)
 function get_source()
 {
  check_arity("same",arguments.length,0)
  if((typeof(is_node)==="function")?is_node():is_node)
  {
   const _=at(process.argv,1)
   {
    const path=_
    {
     const _=file_load(path)
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
    r=file_load(x)
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
 check_arg(is_num,x,"x","num")
 check_arity("same",arguments.length,1)
 return sub(x,1)
}
function dedup(x)
{
 check_arg(is_arr,x,"x","arr")
 check_arity("same",arguments.length,1)
 const _=[]
 {
  const r=_
  {
   const _=(typeof(x)==="function")?x():x
   {
    for(const v of _)
    {
     if(!(contain(r,v)))
      push(r,v)
    }
    return (typeof(r)==="function")?r():r
   }
  }
 }
}
function deinit_common()
{
 check_arity("same",arguments.length,0)
 if((typeof(is_node)==="function")?is_node():is_node)
  deinit_node()
 if(gte(verbose,0))
 {
  const _=(typeof(time_now)==="function")?time_now():time_now
  {
   const profile=_
   {
    const _=time_delay(profile)
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
  }
 }
}
function delimit(x,y)
{
 check_arg(is_str,x,"x","str")
 check_arity("gte",arguments.length,1)
 if(is_undef(y))
  return delimit(x,is_fragment)
 check(is_fn,y)
 const _=[]
 {
  const r=_
  {
   const _=(typeof(x)==="function")?x():x
   {
    for(const v of _)
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
}
function different(x,y)
{
 check_arity("gte",arguments.length,0)
 return x!==y
}
function div(x,y,...z)
{
 check_arg(is_num,x,"x","num")
 check_arg(is_num,y,"y","num")
 check_arity("gte",arguments.length,2)
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
function dom_entities()
{
 check_arity("same",arguments.length,0)
 const _={}
 {
  const r=_
  {
   const _={}
   {
    const o=_
    {
     put(o,"nbsp"," ")
     put(o,"#160"," ")
     put(o,"amp","&")
     put(o,"#38","&")
     put(o,"lt","<")
     put(o,"gt",">")
     put(o,"quot","\"")
     put(o,"#8220","\"")
     put(o,"#8221","\"")
     put(o,"«","\"")
     put(o,"»","\"")
     put(o,"apos","'")
     put(o,"rsquo","'")
     put(o,"#39","'")
     put(o,"#8217","'")
     put(o,"#8211","-")
     put(o,"#8212","-")
     put(o,"#8230","...")
     put(o,"#124","|")
     put(o,"#215","x")
     put(o,"eacute","é")
     put(o,"#233","é")
     const _=(typeof(o)==="function")?o():o
     {
      for(const k in _)
      {
       const _=get(o,k)
       {
        const v=_
        {
         if(is_identifier(k))
         {
          const _=concat("&",k,";")
          {
           const key=_
           {
            put(r,key,v)
            continue
           }
          }
         }
         if(match_l(k,"#"))
         {
          const _=strip_l(k,"#")
          {
           const digit=_
           {
            if(same(digit.length,2))
            {
             const _=concat("&#0",digit,";")
             {
              const key=_
              put(r,key,v)
             }
            }
            const _=concat("&",k,";")
            {
             const key=_
             {
              put(r,key,v)
              const _=to_uint(digit)
              {
               const c=_
               {
                const _=chr(c)
                {
                 const c=_
                 {
                  if(different(c,v))
                   put(r,c,v)
                  continue
                 }
                }
               }
              }
             }
            }
           }
          }
         }
         if(has(r,k))
          continue
         put(r,k,v)
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
function dom_escape(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 const _=(typeof(x)==="function")?x():x
 {
  let r=_
  {
   const _=(typeof(entities)==="function")?entities():entities
   {
    for(const k in _)
    {
     const _=get(entities,k)
     {
      const v=_
      {
       r=replace(r,v,k)
      }
     }
    }
    return (typeof(r)==="function")?r():r
   }
  }
 }
}
function dom_unescape(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 const _=(typeof(x)==="function")?x():x
 {
  let r=_
  {
   const _=(typeof(entities)==="function")?entities():entities
   {
    for(const k in _)
    {
     const _=get(entities,k)
     {
      const v=_
      {
       r=replace(r,k,v)
      }
     }
    }
    return (typeof(r)==="function")?r():r
   }
  }
 }
}
function drop(x,y)
{
 check_arg(is_arr,x,"x","arr")
 check_arity("gte",arguments.length,1)
 if(is_undef(y))
  return drop(x,1)
 check(is_uint,y)
 check(lte,y,x.length)
 pop(x,y)
}
function dump(x)
{
 check_arity("gte",arguments.length,0)
 if(is_undef(x))
  check(same,arguments.length,1)
 const _=fn_args("dump")
 {
  const name=_
  {
   check(is_single,name)
   const _=front(name)
   {
    const name=_
    {
     if(is_str(x))
     {
      const _=to_lit(x)
      {
       const s=_
       log(name,s)
      }
     }
     else
      log(name,x)
    }
   }
  }
 }
}
function dup(x)
{
 check_arg(is_container,x,"x","container")
 check_arity("same",arguments.length,1)
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
 check_arg(is_def,x,"x","def")
 check_arg(is_def,y,"y","def")
 check_arity("same",arguments.length,2)
 if(same(x,y))
  return true
 if(is_arr(x))
 {
  if(is_arr(y))
  {
   const _=min(x.length,y.length)
   {
    for(let i=0;i<(_);i++)
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
           const _=min(xkeys.length,ykeys.length)
           {
            for(let i=0;i<(_);i++)
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
 }
 const _=cmp(x,y)
 {
  const n=_
  return same(n,0)
 }
}
function every(x,y)
{
 check_arg(is_arr,x,"x","arr")
 check_arg(is_fn,y,"y","fn")
 check_arity("same",arguments.length,2)
 const _=(typeof(x)==="function")?x():x
 {
  for(const v of _)
  {
   if(!(y(v)))
    return false
  }
  return true
 }
}
function explode(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 const _=[]
 {
  const r=_
  {
   const _=(typeof(x)==="function")?x():x
   {
    for(const v of _)
     push(r,v)
    return (typeof(r)==="function")?r():r
   }
  }
 }
}
function extract(x,y)
{
 check_arg(is_arr,x,"x","arr")
 check_arg(is_def,y,"y","def")
 check_arity("same",arguments.length,2)
 const _=false
 {
  let r=_
  {
   const _=dup(x)
   {
    const a=_
    {
     clear(x)
     const _=(typeof(a)==="function")?a():a
     {
      for(const v of _)
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
}
function fallback_error(x,y,z)
{
 check_arg(is_str,x,"x","str")
 check_arg(is_obj,y,"y","obj")
 check_arity("gte",arguments.length,2)
 const _=space("Fallback",x)
 {
  const title=_
  {
   flower(title)
   const _=to_str(y.stack)
   {
    const s=_
    {
     const _=trim_r(s)
     {
      const s=_
      {
       const _=txt_prepend(s,"error-in-error> ")
       {
        const s=_
        {
         console.log(s)
         if(is_undef(z))
          return
         check(is_obj,z)
         const _=to_str(z.stack)
         {
          const s=_
          {
           const _=trim_r(s)
           {
            const s=_
            {
             const _=txt_prepend(s,"original-error> ")
             {
              const s=_
              console.log(s)
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function filter(x,y)
{
 check_arg(is_arr,x,"x","arr")
 check_arg(is_fn,y,"y","fn")
 check_arity("same",arguments.length,2)
 return x.filter(y)
}
function find(x,y)
{
 check_arg(is_arr,x,"x","arr")
 check_arg(is_def,y,"y","def")
 check_arity("same",arguments.length,2)
 const _=(typeof(y)==="function")?y():y
 {
  const value=_
  {
   function match(x)
   {
    check_arity("gte",arguments.length,0)
    return same(x,value)
   }
   return x.findIndex(match)
  }
 }
}
function flower(x)
{
 check_arity("gte",arguments.length,0)
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
function fn_args(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 const _=(typeof(dbg_callstack)==="function")?dbg_callstack():dbg_callstack
 {
  for(const v of _)
  {
   const _=split(v.cs," ")
   {
    const a=_
    {
     const _=find(a,x)
     {
      const n=_
      {
       if(lt(n,0))
        continue
       const _=inc(n)
       {
        const index=_
        return slice(a,index)
       }
      }
     }
    }
   }
  }
  stop()
 }
}
function fn_match(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 const _={}
 {
  const r=_
  {
   const _=(typeof(fns)==="function")?fns():fns
   {
    for(const k in _)
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
}
function fn_select(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
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
       const _=(typeof(fns)==="function")?fns():fns
       {
        for(const k in _)
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
}
function front(x)
{
 check_arg(is_vec,x,"x","vec")
 check_arity("same",arguments.length,1)
 check(is_full,x)
 return at(x,0)
}
function get(x,y,z)
{
 check_arg(is_obj,x,"x","obj")
 check_arg(is_str,y,"y","str")
 check_arity("gte",arguments.length,2)
 if(has(x,y))
  return x[y]
 if(is_def(z))
  return (typeof(z)==="function")?z():z
 stop()
}
function gn_run(x,...y)
{
 check_arg(is_gn,x,"x","gn")
 check_arity("gte",arguments.length,1)
 const _=x(...y)
 {
  const generator=_
  {
   function on_timer()
   {
    check_arity("same",arguments.length,0)
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
 check_arg(is_num,x,"x","num")
 check_arg(is_num,y,"y","num")
 check_arity("same",arguments.length,2)
 return x>y
}
function gte(x,y)
{
 check_arg(is_num,x,"x","num")
 check_arg(is_num,y,"y","num")
 check_arity("same",arguments.length,2)
 return x>=y
}
function has(x,y)
{
 check_arg(is_obj,x,"x","obj")
 check_arg(is_str,y,"y","str")
 check_arity("same",arguments.length,2)
 check(is_obj,x)
 check(is_str,y)
 return y in x
}
function head(x,y)
{
 check_arg(is_vec,x,"x","vec")
 check_arg(is_uint,y,"y","uint")
 check_arity("same",arguments.length,2)
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
function iif(x,y,z)
{
 check_arg(is_bool,x,"x","bool")
 check_arg(is_def,y,"y","def")
 check_arg(is_def,z,"z","def")
 check_arity("same",arguments.length,3)
 if((typeof(x)==="function")?x():x)
  return (typeof(y)==="function")?y():y
 return (typeof(z)==="function")?z():z
}
function implode(x)
{
 check_arg(is_arr,x,"x","arr")
 check_arity("same",arguments.length,1)
 return join(x,"")
}
function inc(x)
{
 check_arg(is_num,x,"x","num")
 check_arity("same",arguments.length,1)
 return add(x,1)
}
function indent(x,y)
{
 check_arg(is_str,x,"x","str")
 check_arity("gte",arguments.length,1)
 if(is_undef(y))
  return indent(x,1)
 check(is_uint,y)
 const _=[]
 {
  const a=_
  {
   const _=split(x)
   {
    for(const v of _)
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
}
function init_common(...x)
{
 check_arity("gte",arguments.length,0)
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
  deinit_common()
 }
 else if(is_gn(init))
 {
  const _=init(...x)
  {
   const generator=_
   {
    function on_timer()
    {
     check_arity("same",arguments.length,0)
     const _=(typeof(generator.next)==="function")?generator.next():generator.next
     {
      const iterator=_
      {
       if((typeof(iterator.done)==="function")?iterator.done():iterator.done)
       {
        deinit_common()
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
 check_arg(is_arr,x,"x","arr")
 check_arg(is_uint,y,"y","uint")
 check_arity("gte",arguments.length,2)
 check(lte,y,x.length)
 x.splice(y,0,...z)
}
function is_access(x)
{
 check_arity("gte",arguments.length,0)
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
 check_arity("gte",arguments.length,0)
 if(!(is_str(x)))
  return false
 if(is_empty(x))
  return false
 const _=(typeof(x)==="function")?x():x
 {
  for(const v of _)
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
}
function is_alpha(x)
{
 check_arity("gte",arguments.length,0)
 if(!(is_str(x)))
  return false
 if(is_empty(x))
  return false
 const _=(typeof(x)==="function")?x():x
 {
  for(const v of _)
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
}
function is_arr(x)
{
 check_arity("gte",arguments.length,0)
 return Array.isArray(x)
}
function is_atom(x)
{
 check_arity("gte",arguments.length,0)
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
 check_arity("gte",arguments.length,0)
 if(is_empty(x))
  return true
 if(is_space(x))
  return true
 return false
}
function is_bool(x)
{
 check_arity("gte",arguments.length,0)
 const _=typeof(x)
 {
  const s=_
  return same(s,"boolean")
 }
}
function is_browser()
{
 check_arity("same",arguments.length,0)
 return (typeof(has_window)==="function")?has_window():has_window
}
function is_char(x)
{
 check_arity("gte",arguments.length,0)
 if(!(is_str(x)))
  return false
 return same(x.length,1)
}
function is_comment(x)
{
 check_arity("gte",arguments.length,0)
 if(!(is_ln(x)))
  return false
 return match_l(x,"//")
}
function is_container(x)
{
 check_arity("gte",arguments.length,0)
 if(is_arr(x))
  return true
 if(is_obj(x))
  return true
 return false
}
function is_cool(x)
{
 check_arity("gte",arguments.length,0)
 if(is_num(x))
  return true
 if(is_str(x))
  return true
 return false
}
function is_def(x)
{
 check_arity("gte",arguments.length,0)
 return !(is_undef(x))
}
function is_digit(x)
{
 check_arity("gte",arguments.length,0)
 if(!(is_str(x)))
  return false
 if(is_empty(x))
  return false
 const _=(typeof(x)==="function")?x():x
 {
  for(const v of _)
  {
   if(!(contain(digit,v)))
    return false
  }
  return true
 }
}
function is_empty(x)
{
 check_arity("gte",arguments.length,0)
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
 check_arity("gte",arguments.length,0)
 return same(x,false)
}
function is_fn(x)
{
 check_arity("gte",arguments.length,0)
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
 check_arity("gte",arguments.length,0)
 if(is_alnum(x))
  return true
 if(is_space(x))
  return true
 return false
}
function is_full(x)
{
 check_arity("gte",arguments.length,0)
 if(!(is_vec(x)))
  return false
 return !(is_empty(x))
}
function is_gn(x)
{
 check_arity("gte",arguments.length,0)
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
 check_arity("gte",arguments.length,0)
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
   const _=(typeof(x)==="function")?x():x
   {
    for(const v of _)
    {
     if(!(is_alnum(v)))
      return false
    }
    return true
   }
  }
 }
}
function is_indented(x)
{
 check_arity("gte",arguments.length,0)
 if(!(is_str(x)))
  return false
 if(is_empty(x))
  return false
 const _=split(x)
 {
  for(const v of _)
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
}
function is_int(x)
{
 check_arity("gte",arguments.length,0)
 return Number.isInteger(x)
}
function is_ip(x)
{
 check_arity("gte",arguments.length,0)
 if(is_ip4(x))
  return true
 if(is_ip6(x))
  return true
 return false
}
function is_ip4(x)
{
 check_arity("gte",arguments.length,0)
 if(!(is_str(x)))
  return false
 const _=split(x,".")
 {
  const a=_
  {
   if(different(a.length,4))
    return false
   const _=(typeof(a)==="function")?a():a
   {
    for(const v of _)
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
}
function is_ip6(x)
{
 check_arity("gte",arguments.length,0)
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
   const _=(typeof(a)==="function")?a():a
   {
    for(const v of _)
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
}
function is_json(x)
{
 check_arity("gte",arguments.length,0)
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
 check_arg(is_vec,x,"x","vec")
 check_arg(is_uint,y,"y","uint")
 check_arity("same",arguments.length,2)
 const _=dec(x.length)
 {
  const n=_
  return same(n,y)
 }
}
function is_lisp(x)
{
 check_arity("gte",arguments.length,0)
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
 check_arity("gte",arguments.length,0)
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
 check_arity("gte",arguments.length,0)
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
 check_arity("gte",arguments.length,0)
 if(!(is_str(x)))
  return false
 return !(is_txt(x))
}
function is_lower(x)
{
 check_arity("gte",arguments.length,0)
 if(!(is_str(x)))
  return false
 if(is_empty(x))
  return false
 const _=(typeof(x)==="function")?x():x
 {
  for(const v of _)
  {
   if(!(contain(lower,v)))
    return false
  }
  return true
 }
}
function is_many(x)
{
 check_arity("gte",arguments.length,0)
 if(!(is_vec(x)))
  return false
 return gt(x.length,1)
}
function is_name(x)
{
 check_arity("gte",arguments.length,0)
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
 check_arity("same",arguments.length,0)
 return !((typeof(is_browser)==="function")?is_browser():is_browser)
}
function is_none(x)
{
 check_arity("gte",arguments.length,0)
 if(is_undef(x))
  return true
 if(is_null(x))
  return true
 return false
}
function is_noun(x)
{
 check_arity("gte",arguments.length,0)
 if(is_identifier(x))
  return true
 if(is_access(x))
  return true
 return false
}
function is_null(x)
{
 check_arity("gte",arguments.length,0)
 return same(x,null)
}
function is_num(x)
{
 check_arity("gte",arguments.length,0)
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
 check_arity("gte",arguments.length,0)
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
 check_arity("gte",arguments.length,0)
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
 check_arity("gte",arguments.length,0)
 if(!(is_vec(x)))
  return false
 return same(x.length,2)
}
function is_punct(x)
{
 check_arity("gte",arguments.length,0)
 if(!(is_str(x)))
  return false
 if(is_empty(x))
  return false
 const _=(typeof(x)==="function")?x():x
 {
  for(const v of _)
  {
   if(!(contain(punct,v)))
    return false
  }
  return true
 }
}
function is_single(x)
{
 check_arity("gte",arguments.length,0)
 if(!(is_vec(x)))
  return false
 return same(x.length,1)
}
function is_space(x)
{
 check_arity("gte",arguments.length,0)
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
 check_arity("gte",arguments.length,0)
 const _=typeof(x)
 {
  const s=_
  return same(s,"string")
 }
}
function is_token(x)
{
 check_arity("gte",arguments.length,0)
 if(is_atom(x))
  return true
 if(is_comment(x))
  return true
 return false
}
function is_trivia(x)
{
 check_arity("gte",arguments.length,0)
 if(is_space(x))
  return true
 if(is_comment(x))
  return true
 return false
}
function is_true(x)
{
 check_arity("gte",arguments.length,0)
 return same(x,true)
}
function is_tuple(x)
{
 check_arity("gte",arguments.length,0)
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
   const _=(typeof(a)==="function")?a():a
   {
    for(const v of _)
    {
     if(is_identifier(v))
      continue
     return false
    }
    return true
   }
  }
 }
}
function is_txt(x)
{
 check_arity("gte",arguments.length,0)
 if(!(is_str(x)))
  return (typeof(fals)==="function")?fals():fals
 return contain(x,"\n")
}
function is_uint(x)
{
 check_arity("gte",arguments.length,0)
 if(!(is_int(x)))
  return false
 return gte(x,0)
}
function is_undef(x)
{
 check_arity("gte",arguments.length,0)
 return same(x,undefined)
}
function is_upper(x)
{
 check_arity("gte",arguments.length,0)
 if(!(is_str(x)))
  return false
 if(is_empty(x))
  return false
 const _=(typeof(x)==="function")?x():x
 {
  for(const v of _)
  {
   if(!(contain(upper,v)))
    return false
  }
  return true
 }
}
function is_url(x)
{
 check_arity("gte",arguments.length,0)
 if(!(is_ln(x)))
  return false
 const _=to_lower(x)
 {
  const s=_
  {
   if(match_l(s,"http://"))
   {
   }
   else if(match_l(s,"https://"))
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
 }
}
function is_vec(x)
{
 check_arity("gte",arguments.length,0)
 if(is_str(x))
  return true
 if(is_arr(x))
  return true
 return false
}
function is_word(x)
{
 check_arity("gte",arguments.length,0)
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
 check_arity("gte",arguments.length,0)
 if(is_fn(x))
  return true
 if(is_gn(x))
  return true
 return false
}
function join(x,y)
{
 check_arg(is_arr,x,"x","arr")
 check_arity("gte",arguments.length,1)
 if(is_undef(y))
  return join(x,"\n")
 check(is_str,y)
 return x.join(y)
}
function json_decode(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 return JSON.parse(x)
}
function json_dump(x)
{
 check_arg(is_def,x,"x","def")
 check_arity("same",arguments.length,1)
 return JSON.stringify(x,null,1)
}
function json_encode(x)
{
 check_arity("gte",arguments.length,0)
 if(is_undef(x))
 {
  check(same,arguments.length,1)
  return "undefined"
 }
 return JSON.stringify(x)
}
function log(...x)
{
 check_arity("gte",arguments.length,0)
 function node_log(...x)
 {
  check_arity("gte",arguments.length,0)
  const _=(typeof(x)==="function")?x():x
  {
   const _a=_
   {
    const _=(typeof(_a)==="function")?_a():_a
    {
     for(const k in _)
     {
      const _=to_i(k)
      {
       const i=_
       {
        const _=at(_a,i)
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
     {
      write("\n")
      const _=[]
      {
       const parts=_
       {
        const _=(typeof(x)==="function")?x():x
        {
         const _a=_
         {
          const _=(typeof(_a)==="function")?_a():_a
          {
           for(const k in _)
           {
            const _=to_i(k)
            {
             const i=_
             {
              const _=at(_a,i)
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
                   s=inspect(v,false)
                  }
                  push(parts,s)
                 }
                }
               }
              }
             }
            }
           }
           {
            const _=pad_l(process.pid," ",6)
            {
             const pid=_
             {
              const _=(typeof(time_get)==="function")?time_get():time_get
              {
               const time=_
               {
                const _=date_str(time)
                {
                 const date=_
                 {
                  const _=time_str(time,true)
                  {
                   const time=_
                   {
                    const _=join(parts," ")
                    {
                     const content=_
                     {
                      const _=split(content)
                      {
                       const a=_
                       {
                        const _=[]
                        {
                         const lines=_
                         {
                          if(is_empty(a))
                          {
                           const _=space(pid,date,time)
                           {
                            const s=_
                            push(lines,s)
                           }
                          }
                          else
                          {
                           const _=(typeof(a)==="function")?a():a
                           {
                            for(const v of _)
                            {
                             const _=space(pid,date,time,v)
                             {
                              const s=_
                              push(lines,s)
                             }
                            }
                           }
                          }
                          const _=join(lines)
                          {
                           const content=_
                           {
                            const _=concat(content,"\n")
                            {
                             const content=_
                             {
                              const _=concat(app,".txt")
                              {
                               const base=_
                               {
                                const _="log"
                                {
                                 const dir=_
                                 {
                                  const _=path_concat(dir,base)
                                  {
                                   const path=_
                                   {
                                    if(!(is_file(path)))
                                    {
                                     dir_make(dir)
                                     file_write(path,content)
                                     return
                                    }
                                    const _=file_size(path)
                                    {
                                     const size=_
                                     {
                                      const _=mul(16,1024,1024)
                                      {
                                       const limit=_
                                       {
                                        if(lt(size,limit))
                                        {
                                         file_append(path,content)
                                         return
                                        }
                                        const _=file_load(path)
                                        {
                                         const a=_
                                         {
                                          const _=split(a)
                                          {
                                           const a=_
                                           {
                                            const _=div(a.length,2)
                                            {
                                             const half=_
                                             {
                                              const _=trunc(half)
                                              {
                                               const half=_
                                               {
                                                shift(a,half)
                                                append(a,lines)
                                                const _=join(a)
                                                {
                                                 const content=_
                                                 {
                                                  const _=concat(content,"\n")
                                                  {
                                                   const content=_
                                                   file_write(path,content)
                                                  }
                                                 }
                                                }
                                               }
                                              }
                                             }
                                            }
                                           }
                                          }
                                         }
                                        }
                                       }
                                      }
                                     }
                                    }
                                   }
                                  }
                                 }
                                }
                               }
                              }
                             }
                            }
                           }
                          }
                         }
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
 if(is_str(output))
 {
  const _=[]
  {
   const a=_
   {
    const _=(typeof(x)==="function")?x():x
    {
     for(const v of _)
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
     {
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
  }
 }
 if((typeof(is_node)==="function")?is_node():is_node)
  node_log(...x)
 else if((typeof(is_browser)==="function")?is_browser():is_browser)
  console.log(...x)
 else
  stop()
}
function lt(x,y)
{
 check_arg(is_num,x,"x","num")
 check_arg(is_num,y,"y","num")
 check_arity("same",arguments.length,2)
 return x<y
}
function lte(x,y)
{
 check_arg(is_num,x,"x","num")
 check_arg(is_num,y,"y","num")
 check_arity("same",arguments.length,2)
 return x<=y
}
function main()
{
 check_arity("same",arguments.length,0)
 function log_compile()
 {
  check_arity("same",arguments.length,0)
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
        const _=split(source)
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
   global.entities=(typeof(dom_entities)==="function")?dom_entities():dom_entities
   if((typeof(is_node)==="function")?is_node():is_node)
    init_node()
   else if((typeof(is_browser)==="function")?is_browser():is_browser)
    init_browser()
   else
    stop()
   global.source=(typeof(dbg_source)==="function")?dbg_source():dbg_source
   const _=["init_common","init_node","init_browser"]
   {
    const skip=_
    {
     const _=(typeof(fns)==="function")?fns():fns
     {
      for(const k in _)
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
      {
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
        function on_load(x)
        {
         check_arg(is_obj,x,"x","obj")
         check_arity("same",arguments.length,1)
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
 }
}
function map(x,y)
{
 check_arg(is_arr,x,"x","arr")
 check_arg(is_fn,y,"y","fn")
 check_arity("same",arguments.length,2)
 const _=[]
 {
  const r=_
  {
   const _=(typeof(x)==="function")?x():x
   {
    for(const v of _)
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
}
function match_l(x,y)
{
 check_arg(is_str,x,"x","str")
 check_arg(is_str,y,"y","str")
 check_arity("same",arguments.length,2)
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
 check_arg(is_str,x,"x","str")
 check_arg(is_str,y,"y","str")
 check_arity("same",arguments.length,2)
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
 check_arg(is_str,x,"x","str")
 check_arg(is_str,y,"y","str")
 check_arity("same",arguments.length,2)
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
 check_arity("gte",arguments.length,0)
 return Math.max(...x)
}
function merge(x,y)
{
 check_arg(is_obj,x,"x","obj")
 check_arg(is_obj,y,"y","obj")
 check_arity("same",arguments.length,2)
 Object.assign(x,y)
}
function min(...x)
{
 check_arity("gte",arguments.length,0)
 return Math.min(...x)
}
function mod(x,y,...z)
{
 check_arg(is_num,x,"x","num")
 check_arg(is_num,y,"y","num")
 check_arity("gte",arguments.length,2)
 check(different,y,0)
 const _=x%y
 {
  const r=_
  {
   if(is_full(z))
    return mod(r,...z)
   return (typeof(r)==="function")?r():r
  }
 }
}
function mul(x,y,...z)
{
 check_arg(is_num,x,"x","num")
 check_arg(is_num,y,"y","num")
 check_arity("gte",arguments.length,2)
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
 check_arg(is_fn,x,"x","fn")
 check_arity("gte",arguments.length,1)
 const _=record(x,...y)
 {
  const o=_
  return (typeof(o.result)==="function")?o.result():o.result
 }
}
function neq(x,y)
{
 check_arg(is_def,x,"x","def")
 check_arg(is_def,y,"y","def")
 check_arity("same",arguments.length,2)
 return !(eq(x,y))
}
function nop()
{
 check_arity("same",arguments.length,0)
}
function obj_keys(x)
{
 check_arg(is_obj,x,"x","obj")
 check_arity("same",arguments.length,1)
 return Object.keys(x)
}
function obj_length(x)
{
 check_arg(is_obj,x,"x","obj")
 check_arity("same",arguments.length,1)
 const _=obj_keys(x)
 {
  const keys=_
  return (typeof(keys.length)==="function")?keys.length():keys.length
 }
}
function obj_push(x,y,z)
{
 check_arg(is_obj,x,"x","obj")
 check_arg(is_str,y,"y","str")
 check_arg(is_def,z,"z","def")
 check_arity("same",arguments.length,3)
 const _={}
 {
  const r=_
  {
   const _=(typeof(x)==="function")?x():x
   {
    for(const k in _)
    {
     if(same(k,y))
      continue
     const _=get(x,k)
     {
      const v=_
      put(r,k,v)
     }
    }
    {
     put(r,y,z)
     return (typeof(r)==="function")?r():r
    }
   }
  }
 }
}
function obj_remove(x,y)
{
 check_arg(is_obj,x,"x","obj")
 check_arg(is_str,y,"y","str")
 check_arity("same",arguments.length,2)
 const _={}
 {
  const r=_
  {
   const _=(typeof(x)==="function")?x():x
   {
    for(const k in _)
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
}
function obj_unshift(x,y,z)
{
 check_arg(is_obj,x,"x","obj")
 check_arg(is_str,y,"y","str")
 check_arg(is_def,z,"z","def")
 check_arity("same",arguments.length,3)
 const _={}
 {
  const r=_
  {
   put(r,y,z)
   const _=(typeof(x)==="function")?x():x
   {
    for(const k in _)
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
}
function obj_vals(x)
{
 check_arg(is_obj,x,"x","obj")
 check_arity("same",arguments.length,1)
 return Object.values(x)
}
function obj()
{
 check_arity("same",arguments.length,0)
 return {}
}
function on(x,...y)
{
 check_arg(is_fn,x,"x","fn")
 check_arity("gte",arguments.length,1)
 const _=x
 {
  const fn=_
  {
   const _=(typeof(y)==="function")?y():y
   {
    const args=_
    {
     function on_fn(...x)
     {
      check_arity("gte",arguments.length,0)
      if((typeof(zombie)==="function")?zombie():zombie)
       return
      return fn(...args,...x)
     }
     if((typeof(zombie)==="function")?zombie():zombie)
      stop()
     return on_fn
    }
   }
  }
 }
}
function or(x,y,...z)
{
 check_arg(is_bool,x,"x","bool")
 check_arg(is_bool,y,"y","bool")
 check_arity("gte",arguments.length,2)
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
 check_arg(is_cool,x,"x","cool")
 check_arity("gte",arguments.length,1)
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
 check_arg(is_cool,x,"x","cool")
 check_arity("gte",arguments.length,1)
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
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 return concat("(",x,")")
}
function partial(x,...y)
{
 check_arg(is_fn,x,"x","fn")
 check_arity("gte",arguments.length,1)
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
      check_arity("gte",arguments.length,0)
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
 check_arg(is_str,x,"x","str")
 check_arg(is_str,y,"y","str")
 check_arity("gte",arguments.length,2)
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
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
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
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 if(match_r(x,"/"))
  return (typeof(x)==="function")?x():x
 return concat(x,"/")
}
function path_join(x)
{
 check_arg(is_arr,x,"x","arr")
 check_arity("same",arguments.length,1)
 return join(x,"/")
}
function path_split(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 return split(x,"/")
}
function path_strip(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 return strip_r(x,"/")
}
function path_unfix(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 return strip_r(x,"/")
}
function path_up(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
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
 check_arg(is_arr,x,"x","arr")
 check_arity("gte",arguments.length,1)
 if(is_undef(y))
  return pop(x,1)
 check(is_uint,y)
 check(lte,y,x.length)
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
 check_arg(is_arr,x,"x","arr")
 check_arg(is_arr,y,"y","arr")
 check_arity("same",arguments.length,2)
 const _=dup(y)
 {
  const a=_
  {
   reverse(a)
   const _=(typeof(a)==="function")?a():a
   {
    for(const v of _)
     unshift(x,v)
   }
  }
 }
}
function profile(x,...y)
{
 check_arg(is_xn,x,"x","xn")
 check_arity("gte",arguments.length,1)
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
 check_arg(is_arr,x,"x","arr")
 check_arity("gte",arguments.length,1)
 if(is_undef(y))
  check(same,arguments.length,2)
 x.push(y)
}
function put(x,y,z)
{
 check_arg(is_obj,x,"x","obj")
 check_arg(is_str,y,"y","str")
 check_arity("gte",arguments.length,2)
 if(is_undef(z))
  check(same,arguments.length,3)
 if(has(x,y))
  stop()
 set(x,y,z)
}
function random(x)
{
 check_arity("gte",arguments.length,0)
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
 check_arg(is_fn,x,"x","fn")
 check_arity("gte",arguments.length,1)
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
 check_arg(is_arr,x,"x","arr")
 check_arg(is_fn,y,"y","fn")
 check_arity("same",arguments.length,2)
 check(is_arr,x)
 check(is_fn,y)
 const _=[]
 {
  const r=_
  {
   const _=(typeof(x)==="function")?x():x
   {
    for(const v of _)
    {
     if(y(v))
      continue
     push(r,v)
    }
    return (typeof(r)==="function")?r():r
   }
  }
 }
}
function remove(x,y,z)
{
 check_arg(is_arr,x,"x","arr")
 check_arg(is_uint,y,"y","uint")
 check_arity("gte",arguments.length,2)
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
 check_arg(is_str,x,"x","str")
 check_arg(is_uint,y,"y","uint")
 check_arity("same",arguments.length,2)
 return x.repeat(y)
}
function replace_rec(x,y,z)
{
 check_arg(is_str,x,"x","str")
 check_arg(is_str,y,"y","str")
 check_arg(is_str,z,"z","str")
 check_arity("same",arguments.length,3)
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
 check_arg(is_vec,x,"x","vec")
 check_arg(is_str,y,"y","str")
 check_arg(is_str,z,"z","str")
 check_arity("same",arguments.length,3)
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
    const _=(typeof(x)==="function")?x():x
    {
     for(const v of _)
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
 }
 else
  stop()
}
function report_html(report,length)
{
 check_arg(is_obj,report,"report","obj")
 check_arity("gte",arguments.length,1)
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
function report_init(error,query,map)
{
 check_arity("gte",arguments.length,0)
 if(is_str(error))
 {
  const _=(typeof(error)==="function")?error():error
  {
   const stack=_
   {
    const _=split(error)
    {
     const lines=_
     {
      const _=front(lines)
      {
       const message=_
       {
        const _=null
        {
         const errno=_
         {
          const _={stack,message,errno}
          {
           const error=_
           return report_init(error,query,map)
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
 check(is_obj,error)
 if(is_def(query))
  check(is_obj,query)
 if(is_undef(map))
 {
  const _=(typeof(dbg_source_map)==="function")?dbg_source_map():dbg_source_map
  {
   const map=_
   return report_init(error,query,map)
  }
 }
 check(is_obj,map)
 function log_browser()
 {
  check_arity("same",arguments.length,0)
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
          const _=(typeof(time_now)==="function")?time_now():time_now
          {
           const uptime=_
           {
            const _=time_delay(uptime)
            {
             const uptime=_
             {
              const _={location,referrer,browser,agent,uptime}
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
    }
   }
  }
 }
 function log_server()
 {
  check_arity("same",arguments.length,0)
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
          const _=(typeof(time_now)==="function")?time_now():time_now
          {
           const uptime=_
           {
            const _=time_delay(uptime)
            {
             const uptime=_
             {
              const _={url,referrer,remote,uptime}
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
    }
   }
  }
 }
 function log_trace()
 {
  check_arity("same",arguments.length,0)
  if(is_empty(traces))
   return
  flower("trace")
  const _=(typeof(traces)==="function")?traces():traces
  {
   for(const v of _)
    log(">",v)
  }
 }
 function log_backtrace(stack,map)
 {
  check_arg(is_str,stack,"stack","str")
  check_arg(is_obj,map,"map","obj")
  check_arity("same",arguments.length,2)
  const _=dbg_backtrace(stack,map)
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
     const _=(typeof(error.constructor.name)==="function")?error.constructor.name():error.constructor.name
     {
      const type=_
      {
       const _=to_lower(type)
       {
        const type=_
        {
         const _=[app]
         {
          const title=_
          {
           if(same(type,"error"))
           {
           }
           if(same(type,"object"))
           {
           }
           else
            push(title,type)
           push(title,message)
           if((typeof(is_browser)==="function")?is_browser():is_browser)
            push(title,location.hostname)
           else if((typeof(is_node)==="function")?is_node():is_node)
           {
            const _=(typeof(error.errno)==="function")?error.errno():error.errno
            {
             const errno=_
             {
              if(is_undef(errno))
              {
              }
              else if(is_null(errno))
              {
              }
              else if(same(errno,0))
              {
              }
              else
              {
               const _=concat("errno=",errno)
               {
                const errno=_
                push(title,errno)
               }
              }
              const _=(typeof(os_host)==="function")?os_host():os_host
              {
               const host=_
               push(title,host)
              }
             }
            }
           }
           else
            stop()
           const _=join(title," / ")
           {
            const title=_
            {
             const _=""
             {
              let browser=_
              {
               const _=""
               {
                let server=_
                {
                 const _=capture(dbg_origin_xs,stack,"cs",map)
                 {
                  const cs=_
                  {
                   const _=capture(log_backtrace,stack,map)
                   {
                    const backtrace=_
                    {
                     const _=capture(dbg_origin_xs,stack,"js",map)
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
     }
    }
   }
  }
 }
}
function report_log(report)
{
 check_arg(is_obj,report,"report","obj")
 check_arity("same",arguments.length,1)
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
 const _=space("end-report",report.app,"/",report.message)
 {
  const end=_
  flower(end)
 }
}
function report_render(report)
{
 check_arg(is_obj,report,"report","obj")
 check_arity("same",arguments.length,1)
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
         if(is_full(report.browser))
         {
          push(a,"")
          push(a,report.browser)
         }
         if(is_full(report.server))
         {
          push(a,"")
          push(a,report.server)
         }
         if(is_full(report.trace))
         {
          push(a,"")
          push(a,report.trace)
         }
         if(is_full(report.cs))
         {
          push(a,"")
          push(a,report.cs)
         }
         if(is_full(report.backtrace))
         {
          push(a,"")
          push(a,report.backtrace)
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
function* resolve(x)
{
 check_arg(is_obj,x,"x","obj")
 check_arity("same",arguments.length,1)
 check(is_obj,x)
 const _=false
 {
  let done=_
  {
   const _=null
   {
    let result=_
    {
     const _=null
     {
      let error=_
      {
       function on_then(x)
       {
        check_arg(is_def,x,"x","def")
        check_arity("same",arguments.length,1)
        result=(typeof(x)==="function")?x():x
        done=true
       }
       function on_catch(x)
       {
        check_arity("gte",arguments.length,0)
        check(is_obj,x)
        error=(typeof(x)==="function")?x():x
        done=true
       }
       const _=x.then(on_then)
       {
        const promise=_
        {
         promise.catch(on_catch)
         while(!((typeof(done)==="function")?done():done))
          yield
         if(is_obj(error))
          throw (typeof(error)==="function")?error():error
         return (typeof(result)==="function")?result():result
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
 check_arg(is_vec,x,"x","vec")
 check_arity("same",arguments.length,1)
 if(is_str(x))
 {
  const _=explode(x)
  {
   const r=_
   {
    reverse(r)
    const _=implode(r)
    {
     const r=_
     return (typeof(r)==="function")?r():r
    }
   }
  }
 }
 else if(is_arr(x))
  x.reverse()
 else
  stop()
}
function round(x)
{
 check_arg(is_num,x,"x","num")
 check_arity("same",arguments.length,1)
 return Math.round(x)
}
function salt(x,y)
{
 check_arg(is_str,x,"x","str")
 check_arity("gte",arguments.length,1)
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
 check_arity("gte",arguments.length,0)
 return x===y
}
function scan(x,reducer,delimiter)
{
 check_arg(is_str,x,"x","str")
 check_arity("gte",arguments.length,1)
 if(is_undef(reducer))
  return scan(x,is_token)
 check(is_fn,reducer)
 if(is_undef(delimiter))
  return scan(x,reducer,is_fragment)
 check(is_fn,delimiter)
 function group(x,reducer)
 {
  check_arg(is_arr,x,"x","arr")
  check_arg(is_fn,reducer,"reducer","fn")
  check_arity("same",arguments.length,2)
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
       const _=reduce(fragments,reducer)
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
 function reduce(x,reducer)
 {
  check_arg(is_arr,x,"x","arr")
  check_arg(is_fn,reducer,"reducer","fn")
  check_arity("same",arguments.length,2)
  check(is_fn,reducer)
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
       if(reducer(s))
        break
       drop(r)
      }
     }
    }
    return (typeof(r)==="function")?r():r
   }
  }
 }
 const _=delimit(x,delimiter)
 {
  const a=_
  return group(a,reducer)
 }
}
function set(x,y,z)
{
 check_arg(is_obj,x,"x","obj")
 check_arg(is_str,y,"y","str")
 check_arity("gte",arguments.length,2)
 if(is_undef(z))
  check(same,arguments.length,3)
 x[y]=z
}
function shift(x,y)
{
 check_arg(is_arr,x,"x","arr")
 check_arity("gte",arguments.length,1)
 if(is_undef(y))
  return shift(x,1)
 check(is_uint,y)
 check(lte,y,x.length)
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
 check_arg(is_arr,x,"x","arr")
 check_arity("same",arguments.length,1)
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
function silent(x,...y)
{
 check_arg(is_fn,x,"x","fn")
 check_arity("gte",arguments.length,1)
 const _=(typeof(verbose)==="function")?verbose():verbose
 {
  const previous=_
  {
   verbose=sub(verbose,2)
   const _=null
   {
    let r=_
    {
     try
     {
      r=x(...y)
     }
     catch(e)
     {
      verbose=(typeof(previous)==="function")?previous():previous
      throw (typeof(e)==="function")?e():e
     }
     verbose=(typeof(previous)==="function")?previous():previous
     return (typeof(r)==="function")?r():r
    }
   }
  }
 }
}
function* sleep(x)
{
 check_arg(is_num,x,"x","num")
 check_arity("same",arguments.length,1)
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
 check_arg(is_vec,x,"x","vec")
 check_arg(is_uint,y,"y","uint")
 check_arity("same",arguments.length,2)
 return slice(x,0,y)
}
function slice_r(x,y)
{
 check_arg(is_vec,x,"x","vec")
 check_arg(is_uint,y,"y","uint")
 check_arity("same",arguments.length,2)
 const _=sub(x.length,y)
 {
  const n=_
  return slice(x,n,y)
 }
}
function slice(x,index,length)
{
 check_arg(is_vec,x,"x","vec")
 check_arg(is_uint,index,"index","uint")
 check_arity("gte",arguments.length,2)
 check(lte,index,x.length)
 if(is_undef(length))
 {
  const _=sub(x.length,index)
  {
   const n=_
   return slice(x,index,n)
  }
 }
 check(is_uint,length)
 check(lte,length,x.length)
 check(lte,index,x.length)
 const _=add(index,length)
 {
  const n=_
  {
   check(lte,n,x.length)
   const _=x.slice(index,n)
   {
    const r=_
    {
     check(same,r.length,length)
     return (typeof(r)==="function")?r():r
    }
   }
  }
 }
}
function sort(x,y)
{
 check_arg(is_container,x,"x","container")
 check_arity("gte",arguments.length,1)
 if(is_arr(x))
 {
  if(is_undef(y))
   x.sort()
  else
  {
   check(is_fn,y)
   x.sort(y)
  }
 }
 else if(is_obj(x))
 {
  function compare(x,y)
  {
   check_arg(is_obj,x,"x","obj")
   check_arg(is_obj,y,"y","obj")
   check_arity("same",arguments.length,2)
   return cmp(x.key,y.key)
  }
  if(is_undef(y))
   return sort(x,compare)
  check(is_fn,y)
  const _={}
  {
   const r=_
   {
    const _=[]
    {
     const a=_
     {
      const _=(typeof(x)==="function")?x():x
      {
       for(const k in _)
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
       {
        sort(a,y)
        const _=(typeof(a)==="function")?a():a
        {
         for(const v of _)
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
  }
 }
}
function space(...x)
{
 check_arity("gte",arguments.length,0)
 return join(x," ")
}
function split(x,y)
{
 check_arg(is_str,x,"x","str")
 check_arity("gte",arguments.length,1)
 if(is_undef(y))
  return split(x,"\n")
 if(is_empty(x))
  return []
 return x.split(y)
}
function stop(x)
{
 check_arity("gte",arguments.length,0)
 if(is_undef(x))
  return stop("stop")
 throw new Error(x)
}
function str_indent(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
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
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
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
      const _=split(r)
      {
       for(const v of _)
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
       {
        r=join(a)
       }
      }
     }
    }
   }
   return (typeof(r)==="function")?r():r
  }
 }
}
function strip_l(x,y)
{
 check_arg(is_str,x,"x","str")
 check_arg(is_str,y,"y","str")
 check_arity("same",arguments.length,2)
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
 check_arg(is_str,x,"x","str")
 check_arg(is_str,y,"y","str")
 check_arity("same",arguments.length,2)
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
 check_arg(is_num,x,"x","num")
 check_arg(is_num,y,"y","num")
 check_arity("gte",arguments.length,2)
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
 check_arg(is_vec,x,"x","vec")
 check_arg(is_uint,y,"y","uint")
 check_arity("same",arguments.length,2)
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
 check_arg(is_arr,x,"x","arr")
 check_arg(is_str,y,"y","str")
 check_arity("same",arguments.length,2)
 check(is_arr,x)
 check(is_str,y)
 const _=[]
 {
  const r=_
  {
   const _=(typeof(x)==="function")?x():x
   {
    for(const v of _)
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
}
function tbl_columns(x)
{
 check_arg(is_arr,x,"x","arr")
 check_arity("same",arguments.length,1)
 const _=front(x)
 {
  const first=_
  return obj_keys(first)
 }
}
function tbl_index(x)
{
 check_arg(is_arr,x,"x","arr")
 check_arity("same",arguments.length,1)
 const _=dup(x)
 {
  const a=_
  {
   clear(x)
   const _=(typeof(a)==="function")?a():a
   {
    const _a=_
    {
     const _=(typeof(_a)==="function")?_a():_a
     {
      for(const k in _)
      {
       const _=to_i(k)
       {
        const i=_
        {
         const _=at(_a,i)
         {
          const v=_
          {
           const _=inc(i)
           {
            const n=_
            {
             const _=obj_unshift(v,"#",n)
             {
              const v=_
              push(x,v)
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function tbl_init(x)
{
 check_arity("gte",arguments.length,0)
 return []
}
function tbl_pad_l(x,y,z)
{
 check_arg(is_arr,x,"x","arr")
 check_arg(is_str,y,"y","str")
 check_arity("gte",arguments.length,2)
 if(is_undef(z))
 {
  const _=0
  {
   let length=_
   {
    const _=(typeof(x)==="function")?x():x
    {
     for(const v of _)
     {
      const _=get(v,y)
      {
       let cell=_
       {
        if(!(is_str(cell)))
        {
         cell=json_encode(cell)
        }
        length=max(length,cell.length)
       }
      }
     }
     return tbl_pad_l(x,y,length)
    }
   }
  }
 }
 const _=(typeof(x)==="function")?x():x
 {
  for(const v of _)
  {
   const _=get(v,y)
   {
    const cell=_
    {
     const _=pad_l(cell," ",z)
     {
      const cell=_
      {
       log(y)
       dump(cell)
       set(v,y,cell)
      }
     }
    }
   }
  }
 }
}
function tbl_remove_column(x,y)
{
 check_arg(is_arr,x,"x","arr")
 check_arg(is_str,y,"y","str")
 check_arity("same",arguments.length,2)
 const _=dup(x)
 {
  const t=_
  {
   clear(x)
   const _=(typeof(t)==="function")?t():t
   {
    for(const v of _)
    {
     const _=obj_remove(v,y)
     {
      const v=_
      push(x,v)
     }
    }
   }
  }
 }
}
function tbl_rename_column(x,y,z)
{
 check_arg(is_arr,x,"x","arr")
 check_arg(is_str,y,"y","str")
 check_arg(is_str,z,"z","str")
 check_arity("same",arguments.length,3)
 const _=dup(x)
 {
  const t=_
  {
   clear(x)
   const _=(typeof(t)==="function")?t():t
   {
    for(const v of _)
    {
     const _=(typeof(v)==="function")?v():v
     {
      const row=_
      {
       const _={}
       {
        const o=_
        {
         const _=(typeof(row)==="function")?row():row
         {
          for(const k in _)
          {
           const _=get(row,k)
           {
            const v=_
            {
             if(same(k,y))
             {
              put(o,z,v)
              continue
             }
             put(o,k,v)
            }
           }
          }
          push(x,o)
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function tbl_render(x)
{
 check_arg(is_arr,x,"x","arr")
 check_arity("same",arguments.length,1)
 function stringify_tbl(x)
 {
  check_arg(is_arr,x,"x","arr")
  check_arity("same",arguments.length,1)
  const _=[]
  {
   const r=_
   {
    const _=(typeof(x)==="function")?x():x
    {
     for(const v of _)
     {
      const _=dup(v)
      {
       const row=_
       {
        const _=(typeof(v)==="function")?v():v
        {
         for(const k in _)
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
     }
     return (typeof(r)==="function")?r():r
    }
   }
  }
 }
 function pad_column(x)
 {
  check_arg(is_arr,x,"x","arr")
  check_arity("same",arguments.length,1)
  const _=[]
  {
   const r=_
   {
    const _=[]
    {
     const a=_
     {
      const _=(typeof(x)==="function")?x():x
      {
       for(const v of _)
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
       {
        const _=0
        {
         let length=_
         {
          const _=(typeof(a)==="function")?a():a
          {
           for(const v of _)
           {
            length=max(length,v.length)
           }
           {
            const _=(typeof(a)==="function")?a():a
            {
             for(const v of _)
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
       const _=(typeof(titles)==="function")?titles():titles
       {
        for(const v of _)
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
        {
         const _=0
         {
          let length=_
          {
           const _=(typeof(columns)==="function")?columns():columns
           {
            for(const v of _)
            {
             const _=(typeof(v)==="function")?v():v
             {
              const column=_
              {
               const _=0
               {
                let n=_
                {
                 const _=(typeof(column)==="function")?column():column
                 {
                  for(const v of _)
                  {
                   n=max(n,v.length)
                  }
                  {
                   length=add(length,n)
                  }
                 }
                }
               }
              }
             }
            }
            {
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
                   const _=(typeof(columns)==="function")?columns():columns
                   {
                    for(const v of _)
                    {
                     const _=shift(v)
                     {
                      const s=_
                      push(header,s)
                     }
                    }
                    {
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
                         const _=(typeof(first)==="function")?first():first
                         {
                          const _a=_
                          {
                           const _=(typeof(_a)==="function")?_a():_a
                           {
                            for(const k in _)
                            {
                             const _=to_i(k)
                             {
                              const i=_
                              {
                               const _=at(_a,i)
                               {
                                const v=_
                                {
                                 const _=[]
                                 {
                                  const line=_
                                  {
                                   const _=(typeof(columns)==="function")?columns():columns
                                   {
                                    for(const v of _)
                                    {
                                     const _=at(v,i)
                                     {
                                      const s=_
                                      push(line,s)
                                     }
                                    }
                                    {
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
                               }
                              }
                             }
                            }
                            {
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
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function time_delay(x)
{
 check_arg(is_num,x,"x","num")
 check_arity("same",arguments.length,1)
 check(gte,x,0)
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
function time_get()
{
 check_arity("same",arguments.length,0)
 const _=(typeof(Date.now)==="function")?Date.now():Date.now
 {
  const n=_
  return div(n,1000)
 }
}
function time_hn(x)
{
 check_arg(is_num,x,"x","num")
 check_arity("same",arguments.length,1)
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
      const _=time_delay(n)
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
     const _=time_delay(n)
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
 check_arg(is_fn,x,"x","fn")
 check_arity("gte",arguments.length,1)
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
 check_arity("same",arguments.length,0)
 const _=(typeof(time_get)==="function")?time_get():time_get
 {
  const n=_
  return sub(n,start)
 }
}
function time_str(x,second)
{
 check_arity("gte",arguments.length,0)
 if(is_undef(x))
 {
  const _=(typeof(time_get)==="function")?time_get():time_get
  {
   const n=_
   return time_str(n,second)
  }
 }
 if(is_undef(second))
  return time_str(x,false)
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
             const _=concat(h,"h",m,"m")
             {
              const r=_
              {
               if(!((typeof(second)==="function")?second():second))
                return (typeof(r)==="function")?r():r
               const _=(typeof(o.getSeconds)==="function")?o.getSeconds():o.getSeconds
               {
                const s=_
                {
                 const _=pad_l(s,"0",2)
                 {
                  const s=_
                  return concat(r,s,"s")
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function time_timeout(x,y,...z)
{
 check_arg(is_fn,x,"x","fn")
 check_arity("gte",arguments.length,1)
 if(is_undef(y))
  return time_timeout(x,0.01,...z)
 check(is_num,y)
 const _=on(x,...z)
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
 check_arg(is_uint,x,"x","uint")
 check_arity("same",arguments.length,1)
 return x.toString(36)
}
function to_dump(x)
{
 check_arity("gte",arguments.length,0)
 if(is_undef(x))
  check(same,arguments.length,1)
 const _=clone(x)
 {
  const val=_
  {
   if(is_arr(val))
   {
    if(is_empty(val))
     return "arr"
    const _=[]
    {
     const a=_
     {
      push(a,"arr")
      const _=(typeof(val)==="function")?val():val
      {
       const _a=_
       {
        const _=(typeof(_a)==="function")?_a():_a
        {
         for(const k in _)
         {
          const _=to_i(k)
          {
           const i=_
           {
            const _=at(_a,i)
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
         {
          push(a,"end")
          return join(a)
         }
        }
       }
      }
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
      const _=(typeof(val)==="function")?val():val
      {
       for(const k in _)
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
       {
        push(a,"end")
        return join(a)
       }
      }
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
 }
}
function to_fixed(x,y)
{
 check_arg(is_num,x,"x","num")
 check_arity("gte",arguments.length,1)
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
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 return Number.parseInt(x)
}
function to_int(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
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
 check_arg(is_def,x,"x","def")
 check_arity("same",arguments.length,1)
 return json_encode(x)
}
function to_lit(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 return json_encode(x)
}
function to_lower(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 return (typeof(x.toLowerCase)==="function")?x.toLowerCase():x.toLowerCase
}
function to_num(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
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
 check_arg(is_def,x,"x","def")
 check_arity("same",arguments.length,1)
 return (typeof(x.toString)==="function")?x.toString():x.toString
}
function to_tbl(x)
{
 check_arg(is_obj,x,"x","obj")
 check_arity("same",arguments.length,1)
 const _=[]
 {
  const r=_
  {
   const _=(typeof(x)==="function")?x():x
   {
    for(const k in _)
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
}
function to_uint(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
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
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 return (typeof(x.toUpperCase)==="function")?x.toUpperCase():x.toUpperCase
}
function trace(...x)
{
 check_arity("gte",arguments.length,0)
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
        const _=(typeof(a)==="function")?a():a
        {
         for(const v of _)
          trace(v)
         return
        }
       }
      }
     }
    }
   }
  }
 }
 if(gt(verbose,0))
  log("trace>",...x)
 else if(same(verbose,0))
 {
  const _=[]
  {
   const a=_
   {
    const _=(typeof(x)==="function")?x():x
    {
     for(const v of _)
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
     {
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
  }
 }
}
function trim_l(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 return (typeof(x.trimStart)==="function")?x.trimStart():x.trimStart
}
function trim_r(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 return (typeof(x.trimEnd)==="function")?x.trimEnd():x.trimEnd
}
function trim(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 return (typeof(x.trim)==="function")?x.trim():x.trim
}
function trunc(x)
{
 check_arg(is_num,x,"x","num")
 check_arity("same",arguments.length,1)
 return Math.trunc(x)
}
function tty_width()
{
 check_arity("same",arguments.length,0)
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
 check_arity("gte",arguments.length,0)
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
         const _=(typeof(a)==="function")?a():a
         {
          for(const v of _)
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
}
function txt_cut(x,y)
{
 check_arity("gte",arguments.length,0)
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
   const _=(typeof(x)==="function")?x():x
   {
    for(const v of _)
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
}
function txt_indent(x)
{
 check_arity("gte",arguments.length,0)
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
   const _=(typeof(x)==="function")?x():x
   {
    for(const v of _)
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
}
function txt_prepend(x,y)
{
 check_arity("gte",arguments.length,0)
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
   const _=(typeof(x)==="function")?x():x
   {
    for(const v of _)
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
}
function unaccent(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 const _=replace(x,"à","a")
 {
  const r=_
  {
   const _=replace(r,"â","a")
   {
    const r=_
    {
     const _=replace(r,"ä","a")
     {
      const r=_
      {
       const _=replace(r,"æ","ae")
       {
        const r=_
        {
         const _=replace(r,"ç","c")
         {
          const r=_
          {
           const _=replace(r,"é","e")
           {
            const r=_
            {
             const _=replace(r,"è","e")
             {
              const r=_
              {
               const _=replace(r,"ê","e")
               {
                const r=_
                {
                 const _=replace(r,"ë","e")
                 {
                  const r=_
                  {
                   const _=replace(r,"î","i")
                   {
                    const r=_
                    {
                     const _=replace(r,"ï","i")
                     {
                      const r=_
                      {
                       const _=replace(r,"ô","o")
                       {
                        const r=_
                        {
                         const _=replace(r,"ö","o")
                         {
                          const r=_
                          {
                           const _=replace(r,"œ","oe")
                           {
                            const r=_
                            {
                             const _=replace(r,"ù","u")
                             {
                              const r=_
                              {
                               const _=replace(r,"û","u")
                               {
                                const r=_
                                {
                                 const _=replace(r,"ü","u")
                                 {
                                  const r=_
                                  {
                                   const _=replace(r,"ÿ","y")
                                   {
                                    const r=_
                                    {
                                     const _=replace(r,"À","A")
                                     {
                                      const r=_
                                      {
                                       const _=replace(r,"Â","A")
                                       {
                                        const r=_
                                        {
                                         const _=replace(r,"Ä","A")
                                         {
                                          const r=_
                                          {
                                           const _=replace(r,"Æ","AE")
                                           {
                                            const r=_
                                            {
                                             const _=replace(r,"Ç","C")
                                             {
                                              const r=_
                                              {
                                               const _=replace(r,"É","E")
                                               {
                                                const r=_
                                                {
                                                 const _=replace(r,"È","E")
                                                 {
                                                  const r=_
                                                  {
                                                   const _=replace(r,"Ê","E")
                                                   {
                                                    const r=_
                                                    {
                                                     const _=replace(r,"Ë","E")
                                                     {
                                                      const r=_
                                                      {
                                                       const _=replace(r,"Î","I")
                                                       {
                                                        const r=_
                                                        {
                                                         const _=replace(r,"Ï","I")
                                                         {
                                                          const r=_
                                                          {
                                                           const _=replace(r,"Ô","O")
                                                           {
                                                            const r=_
                                                            {
                                                             const _=replace(r,"Ö","O")
                                                             {
                                                              const r=_
                                                              {
                                                               const _=replace(r,"Œ","OE")
                                                               {
                                                                const r=_
                                                                {
                                                                 const _=replace(r,"Ù","U")
                                                                 {
                                                                  const r=_
                                                                  {
                                                                   const _=replace(r,"Û","U")
                                                                   {
                                                                    const r=_
                                                                    {
                                                                     const _=replace(r,"Ü","U")
                                                                     {
                                                                      const r=_
                                                                      {
                                                                       const _=replace(r,"Ÿ","Y")
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
                                                         }
                                                        }
                                                       }
                                                      }
                                                     }
                                                    }
                                                   }
                                                  }
                                                 }
                                                }
                                               }
                                              }
                                             }
                                            }
                                           }
                                          }
                                         }
                                        }
                                       }
                                      }
                                     }
                                    }
                                   }
                                  }
                                 }
                                }
                               }
                              }
                             }
                            }
                           }
                          }
                         }
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function unshift(x,y)
{
 check_arg(is_arr,x,"x","arr")
 check_arity("gte",arguments.length,1)
 if(is_undef(y))
  check(same,arguments.length,2)
 x.unshift(y)
}
function unwrap(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 if(is_lit(x))
  return json_decode(x)
 if(is_access(x))
  return split(x,".")
 if(is_tuple(x))
  return split(x,":")
 stop()
}
function url_beautify(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 const _=strip_l(x,"http://")
 {
  const r=_
  {
   const _=strip_l(r,"https://")
   {
    const r=_
    {
     const _=path_unfix(r)
     {
      const r=_
      return (typeof(r)==="function")?r():r
     }
    }
   }
  }
 }
}
function url_get(...x)
{
 check_arity("gte",arguments.length,0)
 if((typeof(is_node)==="function")?is_node():is_node)
  return http_get(...x)
 else if((typeof(is_browser)==="function")?is_browser():is_browser)
  return xhr_get(...x)
 else
  stop()
}
function url_parse(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
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
                    const args=_
                    {
                     const _=(typeof(url.searchParams.keys)==="function")?url.searchParams.keys():url.searchParams.keys
                     {
                      for(const v of _)
                      {
                       const _=url.searchParams.get(v)
                       {
                        let value=_
                        {
                         if(is_json(value))
                         {
                          value=json_decode(value)
                         }
                         put(args,v,value)
                        }
                       }
                      }
                      return {href,protocol,user,password,host,port,path,args,hash}
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
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
 check_arity("same",arguments.length,0)
 while(true)
  yield
}
function xor(x,y,...z)
{
 check_arg(is_num,x,"x","num")
 check_arg(is_num,y,"y","num")
 check_arity("gte",arguments.length,2)
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
 check_arity("same",arguments.length,0)
 const _=[]
 {
  const r=_
  {
   const _=dir_read("src",true)
   {
    for(const v of _)
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
}
function beep()
{
 check_arity("same",arguments.length,0)
 os_detach("play","-n","synth",0.1,"sine",880,"vol",0.5)
}
function deinit_node()
{
 check_arity("same",arguments.length,0)
 function dir_empty(x)
 {
  check_arg(is_str,x,"x","str")
  check_arity("same",arguments.length,1)
  const _=dir_read(x,true)
  {
   const paths=_
   return is_empty(paths)
  }
 }
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
       if(dir_empty(app))
        fs_remove(app)
       const _=mul(7,24,60,60)
       {
        const week=_
        {
         const _=dir_load("tmp",true)
         {
          for(const v of _)
          {
           const _=fs_modified(v)
           {
            const modified=_
            {
             const _=(typeof(time_get)==="function")?time_get():time_get
             {
              const now=_
              {
               const _=sub(now,modified)
               {
                const age=_
                {
                 if(lt(age,week))
                  continue
                 const _=(typeof(dir_current)==="function")?dir_current():dir_current
                 {
                  const dir=_
                  {
                   const _=path_fix(dir)
                   {
                    const dir=_
                    {
                     const _=strip_l(v,dir)
                     {
                      const path=_
                      {
                       const _=to_lit(path)
                       {
                        const path=_
                        {
                         const _=concat("path=",path)
                         {
                          const path=_
                          {
                           const _=time_delay(age)
                           {
                            const age=_
                            {
                             const _=to_lit(age)
                             {
                              const age=_
                              {
                               const _=concat("age=",age)
                               {
                                const age=_
                                {
                                 if(is_dir(v))
                                 {
                                  if(dir_empty(v))
                                   fs_remove(v)
                                 }
                                 else if(is_file(v))
                                  fs_remove(v)
                                 else
                                  stop()
                                 log("remove",path,age)
                                }
                               }
                              }
                             }
                            }
                           }
                          }
                         }
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
          dir_change(cwd)
         }
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
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
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
function dir_call(x,y,...z)
{
 check_arg(is_str,x,"x","str")
 check_arg(is_fn,y,"y","fn")
 check_arity("gte",arguments.length,2)
 const _=null
 {
  let r=_
  {
   const _=(typeof(dir_current)==="function")?dir_current():dir_current
   {
    const dir=_
    {
     dir_change(x)
     try
     {
      r=y(...z)
     }
     catch(e)
     {
      dir_change(dir)
      throw (typeof(e)==="function")?e():e
     }
     dir_change(dir)
     return (typeof(r)==="function")?r():r
    }
   }
  }
 }
}
function dir_change(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 process.chdir(x)
}
function dir_current()
{
 check_arity("same",arguments.length,0)
 return (typeof(process.cwd)==="function")?process.cwd():process.cwd
}
function dir_find(x,y)
{
 check_arg(is_str,x,"x","str")
 check_arg(is_str,y,"y","str")
 check_arity("same",arguments.length,2)
 const _=[]
 {
  const r=_
  {
   const _=dir_load(x)
   {
    for(const v of _)
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
}
function dir_load(x,with_dirs)
{
 check_arg(is_str,x,"x","str")
 check_arity("gte",arguments.length,1)
 if(is_undef(with_dirs))
  return dir_load(x,false)
 check(is_bool,with_dirs)
 const _=[]
 {
  const r=_
  {
   const _=dir_read(x,true)
   {
    for(const v of _)
    {
     if(is_file(v))
      push(r,v)
     else if(is_dir(v))
     {
      if((typeof(with_dirs)==="function")?with_dirs():with_dirs)
       push(r,v)
      const _=dir_load(v,with_dirs)
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
}
function dir_make(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
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
function dir_read(x,with_dirs)
{
 check_arg(is_str,x,"x","str")
 check_arity("gte",arguments.length,1)
 if(is_undef(with_dirs))
  return dir_read(x,false)
 check(is_bool,with_dirs)
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
       const _=(typeof(a)==="function")?a():a
       {
        for(const v of _)
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
           if((typeof(with_dirs)==="function")?with_dirs():with_dirs)
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
}
function dir_reset(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 fs_remove(x)
 dir_make(x)
}
function dir_size(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 const _=0
 {
  let r=_
  {
   const _=dir_load(x)
   {
    for(const v of _)
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
}
function file_append(x,y)
{
 check_arg(is_str,x,"x","str")
 check_arg(is_str,y,"y","str")
 check_arity("same",arguments.length,2)
 fs.appendFileSync(x,y)
}
function file_load(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 check(is_str,x)
 const _=file_read(x)
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
function file_read(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 const _=fs.readFileSync(x)
 {
  const o=_
  return (typeof(o.toString)==="function")?o.toString():o.toString
 }
}
function file_save(x,y)
{
 check_arg(is_str,x,"x","str")
 check_arg(is_str,y,"y","str")
 check_arity("same",arguments.length,2)
 if(is_file(x))
 {
  const _=file_load(x)
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
   const _=trim_r(y)
   {
    const content=_
    file_write(x,content)
   }
  }
 }
}
function file_size(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 const _=fs.statSync(x)
 {
  const v=_
  return (typeof(v.size)==="function")?v.size():v.size
 }
}
function file_write(x,y)
{
 check_arg(is_str,x,"x","str")
 check_arg(is_str,y,"y","str")
 check_arity("same",arguments.length,2)
 fs.writeFileSync(x,y)
}
function fs_copy(x,y)
{
 check_arg(is_str,x,"x","str")
 check_arg(is_str,y,"y","str")
 check_arity("same",arguments.length,2)
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
function fs_modified(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 const _=fs.statSync(x)
 {
  const r=_
  {
   const _=div(r.mtimeMs,1000)
   {
    const r=_
    return (typeof(r)==="function")?r():r
   }
  }
 }
}
function fs_remove(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
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
function* http_get(url,with_headers)
{
 check_arg(is_str,url,"url","str")
 check_arity("gte",arguments.length,1)
 if(is_undef(with_headers))
  return yield* http_get(url,false)
 const _=""
 {
  let result=_
  {
   const _={}
   {
    let headers=_
    {
     const _=null
     {
      let error=_
      {
       const _=false
       {
        let done=_
        {
         function get_module(url)
         {
          check_arg(is_str,url,"url","str")
          check_arity("same",arguments.length,1)
          const _=to_lower(url)
          {
           const s=_
           {
            if(match_l(s,"http:"))
             return (typeof(http)==="function")?http():http
            else if(match_l(s,"https:"))
             return (typeof(https)==="function")?https():https
            else
             stop()
           }
          }
         }
         function on_request(response)
         {
          check_arg(is_obj,response,"response","obj")
          check_arity("same",arguments.length,1)
          const _=(typeof(response.headers)==="function")?response.headers():response.headers
          {
           for(const k in _)
           {
            const _=get(response.headers,k)
            {
             let v=_
             {
              if(is_numeric(v))
              {
               v=to_num(v)
              }
              put(headers,k,v)
             }
            }
           }
           {
            const _=on(on_data)
            {
             const on_data=_
             {
              const _=on(on_end)
              {
               const on_end=_
               {
                response.on("data",on_data)
                response.on("end",on_end)
               }
              }
             }
            }
           }
          }
         }
         function on_data(x)
         {
          check_arg(is_obj,x,"x","obj")
          check_arity("same",arguments.length,1)
          const _=to_str(x)
          {
           const s=_
           {
            result=concat(result,s)
           }
          }
         }
         function on_end()
         {
          check_arity("same",arguments.length,0)
          done=true
         }
         function on_error(x)
         {
          check_arg(is_obj,x,"x","obj")
          check_arity("same",arguments.length,1)
          error=(typeof(x)==="function")?x():x
         }
         const _=get_module(url)
         {
          const module=_
          {
           const _=module.get(url,on_request)
           {
            const request=_
            {
             const _=on(on_error)
             {
              const on_error=_
              {
               request.on("error",on_error)
               while(true)
               {
                if((typeof(done)==="function")?done():done)
                 break
                if(is_obj(error))
                 throw (typeof(error)==="function")?error():error
                yield
               }
               if(is_json(result))
               {
                result=json_decode(result)
               }
               if((typeof(with_headers)==="function")?with_headers():with_headers)
                return {result,headers}
               return (typeof(result)==="function")?result():result
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function init_node()
{
 check_arity("same",arguments.length,0)
 function on_uncaught_exception(error,message)
 {
  check_arg(is_obj,error,"error","obj")
  check_arg(is_str,message,"message","str")
  check_arity("same",arguments.length,2)
  try
  {
   const _=report_init(error)
   {
    const report=_
    {
     report.title=space(report.title,"/",message)
     report_log(report)
     if((typeof(is_remote)==="function")?is_remote():is_remote)
      report_mail(report)
     deinit_common()
    }
   }
  }
  catch(e)
  {
   fallback_error("on-uncaught-exception",e,error)
  }
  zombie=true
  process.exit(1)
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
function inspect(x,color)
{
 check_arity("gte",arguments.length,0)
 if(is_undef(x))
  check(same,arguments.length,1)
 if(is_undef(color))
 {
  const _=(typeof(is_color)==="function")?is_color():is_color
  {
   const color=_
   return inspect(x,color)
  }
 }
 check(is_bool,color)
 const _=false
 {
  const showHidden=_
  {
   const _=null
   {
    const depth=_
    {
     const _=(typeof(color)==="function")?color():color
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
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 const _=silent(os_execute,"host",x)
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
 check_arity("same",arguments.length,0)
 const _=os_execute("hostname","--all-ip-addresses")
 {
  const s=_
  return split(s," ")
 }
}
function ip_v4()
{
 check_arity("same",arguments.length,0)
 const _=(typeof(ip_list)==="function")?ip_list():ip_list
 {
  for(const v of _)
  {
   if(is_ip4(v))
    return (typeof(v)==="function")?v():v
  }
  stop()
 }
}
function ip_v6()
{
 check_arity("same",arguments.length,0)
 const _=(typeof(ip_list)==="function")?ip_list():ip_list
 {
  for(const v of _)
  {
   if(is_ip6(v))
    return (typeof(v)==="function")?v():v
  }
  stop()
 }
}
function is_batch()
{
 check_arity("same",arguments.length,0)
 if(!((typeof(is_node)==="function")?is_node():is_node))
  return false
 return !((typeof(is_interactive)==="function")?is_interactive():is_interactive)
}
function is_color()
{
 check_arity("same",arguments.length,0)
 if((typeof(color)==="function")?color():color)
  return true
 if((typeof(is_interactive)==="function")?is_interactive():is_interactive)
  return true
 return false
}
function is_dir(x)
{
 check_arity("gte",arguments.length,0)
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
 check_arity("gte",arguments.length,0)
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
 check_arity("gte",arguments.length,0)
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
 check_arity("same",arguments.length,0)
 if(!((typeof(is_node)==="function")?is_node():is_node))
  return false
 return (typeof(process.stdout.isTTY)==="function")?process.stdout.isTTY():process.stdout.isTTY
}
function is_readable(x)
{
 check_arity("gte",arguments.length,0)
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
 check_arg(is_str,to,"to","str")
 check_arg(is_str,subject,"subject","str")
 check_arg(is_str,body,"body","str")
 check_arity("gte",arguments.length,3)
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
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 os_system("xdg-open",x)
}
function* os_capture(x,...y)
{
 check_arity("gte",arguments.length,0)
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
          check_arg(is_obj,x,"x","obj")
          check_arity("same",arguments.length,1)
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
          check_arg(is_obj,x,"x","obj")
          check_arity("same",arguments.length,1)
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
          check_arity("gte",arguments.length,0)
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
            check_arg(is_str,x,"x","str")
            check_arity("same",arguments.length,1)
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
 check_arg(is_str,x,"x","str")
 check_arity("gte",arguments.length,1)
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
 check_arity("gte",arguments.length,0)
 const _=os_run(...x)
 {
  const o=_
  {
   const _=(typeof(o.status)==="function")?o.status():o.status
   {
    const status=_
    {
     const _=(typeof(o.out)==="function")?o.out():o.out
     {
      const out=_
      {
       const _=(typeof(o.err)==="function")?o.err():o.err
       {
        const err=_
        {
         const _=false
         {
          let display=_
          {
           if(is_full(err))
           {
            if(same(status,0))
            {
             const _=slice_l(x,2)
             {
              const a=_
              trace(...a)
             }
            }
            const _=txt_prepend(err," err> ")
            {
             const s=_
             trace(s)
            }
           }
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
              const s=_
              return trim_r(s)
             }
            }
           }
          }
         }
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
 check_arity("same",arguments.length,0)
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
 check_arity("same",arguments.length,0)
 return (typeof(os.hostname)==="function")?os.hostname():os.hostname
}
function os_log(call,status,...args)
{
 check_arg(is_xn,call,"call","xn")
 check_arg(is_int,status,"status","int")
 check_arity("gte",arguments.length,2)
 if(same(status,0))
  return
 const _=front(args)
 {
  let command=_
  {
   const _=false
   {
    let subcommand=_
    {
     if(is_many(args))
     {
      if(same(command,"sudo"))
      {
       subcommand=true
      }
      else if(same(command,"time"))
      {
       subcommand=true
      }
     }
     if((typeof(subcommand)==="function")?subcommand():subcommand)
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
 }
}
function* os_prompt(x,...y)
{
 check_arg(is_str,x,"x","str")
 check_arity("gte",arguments.length,1)
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
       const _=""
       {
        let out=_
        {
         const _=""
         {
          const err=_
          {
           const _={out,err}
           {
            const buffer=_
            {
             function print(key,str)
             {
              check_arg(is_str,key,"key","str")
              check_arg(is_str,str,"str","str")
              check_arity("same",arguments.length,2)
              const _=(typeof(tty_width)==="function")?tty_width():tty_width
              {
               const n=_
               {
                const _=get(buffer,key)
                {
                 let s=_
                 {
                  s=concat(s,str)
                  set(buffer,key,s)
                  if(!(match_r(s,"\n")))
                   return
                  const _=strip_r(s,"\n")
                  {
                   const s=_
                   {
                    const _=txt_prepend(s,"> ")
                    {
                     const s=_
                     {
                      const _=txt_prepend(s,key)
                      {
                       const s=_
                       {
                        const _=txt_cut(s,n)
                        {
                         const s=_
                         {
                          log(s)
                          set(buffer,key,"")
                         }
                        }
                       }
                      }
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
              check_arg(is_obj,x,"x","obj")
              check_arity("same",arguments.length,1)
              const _=to_str(x)
              {
               const s=_
               print("out",s)
              }
             }
             function on_err(x)
             {
              check_arg(is_obj,x,"x","obj")
              check_arity("same",arguments.length,1)
              const _=to_str(x)
              {
               const s=_
               print("err",s)
              }
             }
             function on_close(x)
             {
              check_arity("gte",arguments.length,0)
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
                check_arg(is_str,x,"x","str")
                check_arity("same",arguments.length,1)
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
                         if(is_full(buffer,out))
                          print("out","\n")
                         if(is_full(buffer,err))
                          print("err","\n")
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
     }
    }
   }
  }
 }
}
function os_ps()
{
 check_arity("same",arguments.length,0)
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
       const _=(typeof(a)==="function")?a():a
       {
        for(const v of _)
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
}
function os_run(x,...y)
{
 check_arg(is_str,x,"x","str")
 check_arity("gte",arguments.length,1)
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
 check_arity("gte",arguments.length,0)
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
 check_arg(is_str,x,"x","str")
 check_arity("gte",arguments.length,1)
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
 check_arity("same",arguments.length,0)
 const _=(typeof(os.userInfo)==="function")?os.userInfo():os.userInfo
 {
  const o=_
  return (typeof(o.username)==="function")?o.username():o.username
 }
}
function path_base(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 return path.basename(x)
}
function path_dir(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 return path.dirname(x)
}
function path_ext(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 const _=path.extname(x)
 {
  const s=_
  return strip_l(s,".")
 }
}
function path_real(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 return fs.realpathSync(x)
}
function path_tmp(x)
{
 check_arity("gte",arguments.length,0)
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
                      const _=concat(file,"-",id)
                      {
                       let base=_
                       {
                        if(is_full(ext))
                        {
                         base=concat(base,".",ext)
                        }
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
 check_arg(is_obj,report,"report","obj")
 check_arity("same",arguments.length,1)
 const _=report_html(report,73)
 {
  const html=_
  mail(author,report.title,html)
 }
}
function sigint(x)
{
 check_arg(is_fn,x,"x","fn")
 check_arity("same",arguments.length,1)
 const _=x
 {
  const callback=_
  {
   function on_sigint(x,n)
   {
    check_arg(is_str,x,"x","str")
    check_arg(is_uint,n,"n","uint")
    check_arity("same",arguments.length,2)
    const _=concat("pid=",process.pid)
    {
     const pid=_
     {
      const _=concat("signal=",x)
      {
       const signal=_
       {
        const _=concat("n=",n)
        {
         const n=_
         {
          log(app,pid,signal,n)
          callback(x)
         }
        }
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
 check_arity("gte",arguments.length,0)
 return yield* ssh_pass(...x)
}
function* ssh_pass(...x)
{
 check_arity("gte",arguments.length,0)
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
 check_arg(is_str,x,"x","str")
 check_arity("gte",arguments.length,1)
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
 check_arg(is_str,path,"path","str")
 check_arg(is_str,data,"data","str")
 check_arity("same",arguments.length,2)
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
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 process.stdout.write(x)
}
function app_token(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
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
       const _=file_load(r)
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
function init_server()
{
 check_arity("same",arguments.length,0)
 global.login_vps="debian@mabynogy.org"
 global.author="marc@abiven.eu"
}
function is_local()
{
 check_arity("same",arguments.length,0)
 const _=(typeof(os_host)==="function")?os_host():os_host
 {
  const host=_
  return same(host,"castle")
 }
}
function is_remote()
{
 check_arity("same",arguments.length,0)
 return !((typeof(is_local)==="function")?is_local():is_local)
}
function is_root()
{
 check_arity("same",arguments.length,0)
 const _=(typeof(os_user)==="function")?os_user():os_user
 {
  const s=_
  return same(s,"root")
 }
}
function mnt_clean(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
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
 check_arity("gte",arguments.length,0)
 return os_execute("fusermount","-u",x)
}
function app_home(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
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
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
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
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_arr,args,"args","arr")
 check_arg(is_arr,children,"children","arr")
 check_arg(is_obj,source,"source","obj")
 check_arity("same",arguments.length,4)
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
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_arr,args,"args","arr")
 check_arg(is_arr,children,"children","arr")
 check_arg(is_obj,source,"source","obj")
 check_arity("same",arguments.length,4)
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
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_arr,args,"args","arr")
 check_arg(is_arr,children,"children","arr")
 check_arg(is_obj,source,"source","obj")
 check_arity("same",arguments.length,4)
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
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_arr,args,"args","arr")
 check_arg(is_arr,children,"children","arr")
 check_arg(is_obj,source,"source","obj")
 check_arity("same",arguments.length,4)
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
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_arr,args,"args","arr")
 check_arg(is_arr,children,"children","arr")
 check_arg(is_obj,source,"source","obj")
 check_arity("same",arguments.length,4)
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
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_arr,args,"args","arr")
 check_arg(is_arr,children,"children","arr")
 check_arg(is_obj,source,"source","obj")
 check_arity("same",arguments.length,4)
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
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_arr,args,"args","arr")
 check_arg(is_arr,children,"children","arr")
 check_arg(is_obj,source,"source","obj")
 check_arity("same",arguments.length,4)
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
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_arr,args,"args","arr")
 check_arg(is_arr,children,"children","arr")
 check_arg(is_obj,source,"source","obj")
 check_arity("same",arguments.length,4)
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
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_arr,args,"args","arr")
 check_arg(is_arr,children,"children","arr")
 check_arg(is_obj,source,"source","obj")
 check_arity("same",arguments.length,4)
 return call_ast_if(cpl,args,children,source,"else if")
}
function ast_fn(cpl,args,children,source)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_arr,args,"args","arr")
 check_arg(is_arr,children,"children","arr")
 check_arg(is_obj,source,"source","obj")
 check_arity("same",arguments.length,4)
 return call_ast_xn(cpl,args,children,source,"function")
}
function ast_forin(cpl,args,children,source)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_arr,args,"args","arr")
 check_arg(is_arr,children,"children","arr")
 check_arg(is_obj,source,"source","obj")
 check_arity("same",arguments.length,4)
 return call_ast_for(cpl,args,children,source,"k in")
}
function ast_fornum(cpl,args,children,source)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_arr,args,"args","arr")
 check_arg(is_arr,children,"children","arr")
 check_arg(is_obj,source,"source","obj")
 check_arity("same",arguments.length,4)
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
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_arr,args,"args","arr")
 check_arg(is_arr,children,"children","arr")
 check_arg(is_obj,source,"source","obj")
 check_arity("same",arguments.length,4)
 return call_ast_for(cpl,args,children,source,"v of")
}
function ast_gn(cpl,args,children,source)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_arr,args,"args","arr")
 check_arg(is_arr,children,"children","arr")
 check_arg(is_obj,source,"source","obj")
 check_arity("same",arguments.length,4)
 return call_ast_xn(cpl,args,children,source,"function*")
}
function ast_if(cpl,args,children,source)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_arr,args,"args","arr")
 check_arg(is_arr,children,"children","arr")
 check_arg(is_obj,source,"source","obj")
 check_arity("same",arguments.length,4)
 return call_ast_if(cpl,args,children,source,"if")
}
function ast_include(cpl,args,children,source)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_arr,args,"args","arr")
 check_arg(is_arr,children,"children","arr")
 check_arg(is_obj,source,"source","obj")
 check_arity("same",arguments.length,4)
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
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_arr,args,"args","arr")
 check_arg(is_arr,children,"children","arr")
 check_arg(is_obj,source,"source","obj")
 check_arity("same",arguments.length,4)
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
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_arr,args,"args","arr")
 check_arg(is_arr,children,"children","arr")
 check_arg(is_obj,source,"source","obj")
 check_arity("same",arguments.length,4)
 check(is_many,args)
 check(is_empty,children)
 return call_ast_declare(cpl,args,children,source,"const")
}
function ast_ret(cpl,args,children,source)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_arr,args,"args","arr")
 check_arg(is_arr,children,"children","arr")
 check_arg(is_obj,source,"source","obj")
 check_arity("same",arguments.length,4)
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
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_arr,args,"args","arr")
 check_arg(is_arr,children,"children","arr")
 check_arg(is_obj,source,"source","obj")
 check_arity("same",arguments.length,4)
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
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_arr,args,"args","arr")
 check_arg(is_arr,children,"children","arr")
 check_arg(is_obj,source,"source","obj")
 check_arity("same",arguments.length,4)
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
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_arr,args,"args","arr")
 check_arg(is_arr,children,"children","arr")
 check_arg(is_obj,source,"source","obj")
 check_arity("same",arguments.length,4)
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
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_arr,args,"args","arr")
 check_arg(is_arr,children,"children","arr")
 check_arg(is_obj,source,"source","obj")
 check_arity("same",arguments.length,4)
 check(is_many,args)
 check(is_empty,children)
 return call_ast_declare(cpl,args,children,source,"let")
}
function ast_while(cpl,args,children,source)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_arr,args,"args","arr")
 check_arg(is_arr,children,"children","arr")
 check_arg(is_obj,source,"source","obj")
 check_arity("same",arguments.length,4)
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
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_arr,args,"args","arr")
 check_arg(is_arr,children,"children","arr")
 check_arg(is_obj,source,"source","obj")
 check_arity("same",arguments.length,4)
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
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_arr,children,"children","arr")
 check_arg(is_obj,source,"source","obj")
 check_arity("same",arguments.length,3)
 const _=[]
 {
  const r=_
  {
   const _=cpl_block(cpl,children)
   {
    for(const v of _)
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
function call_ast_block(cpl,children,source)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_arr,children,"children","arr")
 check_arg(is_obj,source,"source","obj")
 check_arity("same",arguments.length,3)
 const _=[]
 {
  const r=_
  {
   const _=cpl_block(cpl,children)
   {
    for(const v of _)
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
    {
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
 }
}
function call_ast_declare(cpl,args,children,source,keyword)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_arr,args,"args","arr")
 check_arg(is_arr,children,"children","arr")
 check_arg(is_obj,source,"source","obj")
 check_arg(is_str,keyword,"keyword","str")
 check_arity("same",arguments.length,5)
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
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_arr,args,"args","arr")
 check_arg(is_arr,children,"children","arr")
 check_arg(is_obj,source,"source","obj")
 check_arg(is_str,keyword,"keyword","str")
 check_arity("same",arguments.length,5)
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
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_arr,args,"args","arr")
 check_arg(is_arr,children,"children","arr")
 check_arg(is_obj,source,"source","obj")
 check_arg(is_str,keyword,"keyword","str")
 check_arity("same",arguments.length,5)
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
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_arr,args,"args","arr")
 check_arg(is_arr,children,"children","arr")
 check_arg(is_obj,source,"source","obj")
 check_arg(is_str,keyword,"keyword","str")
 check_arity("same",arguments.length,5)
 function get_argument(x)
 {
  check_arg(is_str,x,"x","str")
  check_arity("same",arguments.length,1)
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
         const _=(typeof(parameters)==="function")?parameters():parameters
         {
          for(const v of _)
          {
           const _=count(parameters,v)
           {
            const n=_
            {
             if(same(n,1))
              continue
             const _=to_lit(v)
             {
              const arg=_
              {
               const _=space("Argument",arg,"defined",n,"times")
               {
                const message=_
                stop(message)
               }
              }
             }
            }
           }
          }
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
 }
}
function cpl_block(x,y)
{
 check_arg(is_obj,x,"x","obj")
 check_arg(is_arr,y,"y","arr")
 check_arity("same",arguments.length,2)
 const _=[]
 {
  const r=_
  {
   const _=(typeof(y)==="function")?y():y
   {
    for(const v of _)
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
}
function cpl_check_syntax(cpl,path)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arity("gte",arguments.length,1)
 if(is_undef(path))
  return cpl_check_syntax(cpl,cpl.target)
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
   check(cpl_log_error,cpl,o.err,path)
   return false
  }
 }
}
function cpl_check(x,y)
{
 check_arg(is_obj,x,"x","obj")
 check_arg(is_arr,y,"y","arr")
 check_arity("same",arguments.length,2)
 function visit(nodes)
 {
  check_arg(is_arr,nodes,"nodes","arr")
  check_arity("same",arguments.length,1)
  const _=[]
  {
   const r=_
   {
    const _=(typeof(nodes)==="function")?nodes():nodes
    {
     for(const v of _)
     {
      if(!(is_xn(v.operator)))
      {
       const _=dup(v)
       {
        const node=_
        {
         node.children=visit(node.children)
         push(r,node)
         continue
        }
       }
      }
      const _=instrument(v)
      {
       const node=_
       push(r,node)
      }
     }
     return (typeof(r)==="function")?r():r
    }
   }
  }
 }
 function instrument(node)
 {
  check_arg(is_obj,node,"node","obj")
  check_arity("same",arguments.length,1)
  const _=dup(node)
  {
   const r=_
   {
    const _=front(r.args)
    {
     const name=_
     {
      const _=slice(r.args,1)
      {
       const parameters=_
       {
        const _=get_arity(parameters)
        {
         const arity=_
         {
          const _="check_arity"
          {
           const operator=_
           {
            const _=to_str(arity.count)
            {
             const count=_
             {
              const _=to_lit(arity.operator)
              {
               const s_operator=_
               {
                const _=[s_operator,"arguments.length",count]
                {
                 const args=_
                 {
                  const _=[]
                  {
                   const children=_
                   {
                    const _=dup(r.source)
                    {
                     const source=_
                     {
                      const _={operator,args,children,source}
                      {
                       const node=_
                       {
                        unshift(r.children,node)
                        reverse(parameters)
                        clear(r.args)
                        const _=(typeof(parameters)==="function")?parameters():parameters
                        {
                         for(const v of _)
                         {
                          if(is_identifier(v))
                          {
                           unshift(r.args,v)
                           continue
                          }
                          check(is_tuple,v)
                          const _=unwrap(v)
                          {
                           const a=_
                           {
                            check(is_pair,a)
                            const _=at(a,0)
                            {
                             const identifier=_
                             {
                              const _=at(a,1)
                              {
                               const type=_
                               {
                                if(same(type,"etc"))
                                {
                                 unshift(r.args,v)
                                 continue
                                }
                                unshift(r.args,identifier)
                                const _=to_lit(identifier)
                                {
                                 const s_identifier=_
                                 {
                                  const _=to_lit(type)
                                  {
                                   const s_type=_
                                   {
                                    const _=concat("is_",type)
                                    {
                                     const is=_
                                     {
                                      const _="check_arg"
                                      {
                                       const operator=_
                                       {
                                        const _=[is,identifier,s_identifier,s_type]
                                        {
                                         const args=_
                                         {
                                          const _=[]
                                          {
                                           const children=_
                                           {
                                            const _=dup(r.source)
                                            {
                                             const source=_
                                             {
                                              const _={operator,args,children,source}
                                              {
                                               const node=_
                                               unshift(r.children,node)
                                              }
                                             }
                                            }
                                           }
                                          }
                                         }
                                        }
                                       }
                                      }
                                     }
                                    }
                                   }
                                  }
                                 }
                                }
                               }
                              }
                             }
                            }
                           }
                          }
                         }
                         {
                          unshift(r.args,name)
                          r.children=visit(r.children)
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
 function get_arity(args)
 {
  check_arg(is_arr,args,"args","arr")
  check_arity("same",arguments.length,1)
  const _="same"
  {
   let operator=_
   {
    const _=0
    {
     let count=_
     {
      const _=(typeof(args)==="function")?args():args
      {
       for(const v of _)
       {
        if(is_tuple(v))
        {
         const _=unwrap(v)
         {
          const a=_
          {
           const _=at(a,1)
           {
            const type=_
            {
             if(same(type,"etc"))
             {
              operator="gte"
              continue
             }
            }
           }
          }
         }
        }
        else if(is_identifier(v))
        {
         operator="gte"
         continue
        }
        count=inc(count)
       }
       return {operator,count}
      }
     }
    }
   }
  }
 }
 function is_xn(x)
 {
  check_arity("gte",arguments.length,0)
  if(same(x,"fn"))
   return true
  if(same(x,"gn"))
   return true
  return false
 }
 return visit(y)
}
function cpl_compile(x,y)
{
 check_arg(is_obj,x,"x","obj")
 check_arg(is_str,y,"y","str")
 check_arity("same",arguments.length,2)
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
       const _=(typeof(nodes)==="function")?nodes():nodes
       {
        let nodes=_
        {
         try
         {
          nodes=cpl_check(x,nodes)
          nodes=cpl_for(x,nodes)
          nodes=cpl_scope(x,nodes)
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
 check_arg(is_obj,x,"x","obj")
 check_arity("same",arguments.length,1)
 const _=json_dump(x.cache)
 {
  const s=_
  file_save(x.path,s)
 }
}
function cpl_dump(x)
{
 check_arg(is_obj,x,"x","obj")
 check_arity("same",arguments.length,1)
 check(is_obj,x)
 function dump_ast(x)
 {
  check_arg(is_obj,x,"x","obj")
  check_arity("same",arguments.length,1)
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
            const _=(typeof(a2)==="function")?a2():a2
            {
             for(const v of _)
             {
              if(is_token(v))
              {
               push(a3,v)
               continue
              }
              else if(is_str(v))
              {
               const _=to_lit(v)
               {
                const s=_
                push(a3,s)
               }
              }
              else
               stop()
             }
             {
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
                          const _=(typeof(children)==="function")?children():children
                          {
                           for(const v of _)
                           {
                            const _=dump_ast(v)
                            {
                             const t=_
                             {
                              const _=(typeof(t)==="function")?t():t
                              {
                               for(const v of _)
                               {
                                v.cs=indent(v.cs)
                               }
                               append(r,t)
                              }
                             }
                            }
                           }
                           {
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
    }
   }
  }
 }
 const _=(typeof(x.stack)==="function")?x.stack():x.stack
 {
  const _a=_
  {
   const _=(typeof(_a)==="function")?_a():_a
   {
    for(const k in _)
    {
     const _=to_i(k)
     {
      const i=_
      {
       const _=at(_a,i)
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
  }
 }
}
function cpl_fold(x,y)
{
 check_arg(is_obj,x,"x","obj")
 check_arg(is_arr,y,"y","arr")
 check_arity("same",arguments.length,2)
 function visit(x)
 {
  check_arg(is_arr,x,"x","arr")
  check_arity("same",arguments.length,1)
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
function cpl_for(x,nodes)
{
 check_arg(is_obj,x,"x","obj")
 check_arg(is_arr,nodes,"nodes","arr")
 check_arity("same",arguments.length,2)
 function visit(nodes)
 {
  check_arg(is_arr,nodes,"nodes","arr")
  check_arity("same",arguments.length,1)
  const _=[]
  {
   const r=_
   {
    const _=(typeof(nodes)==="function")?nodes():nodes
    {
     for(const v of _)
     {
      if(different(v.operator,"for"))
      {
       const _=dup(v)
       {
        const node=_
        {
         node.children=visit(node.children)
         push(r,node)
         continue
        }
       }
      }
      const _=generate(v)
      {
       const nodes=_
       append(r,nodes)
      }
     }
     return (typeof(r)==="function")?r():r
    }
   }
  }
 }
 function generate(node)
 {
  check_arg(is_obj,node,"node","obj")
  check_arity("same",arguments.length,1)
  const _=[]
  {
   const r=_
   {
    const _=(typeof(node.args)==="function")?node.args():node.args
    {
     const args=_
     {
      const _="let"
      {
       const operator=_
       {
        const _=["_a",...args]
        {
         const args=_
         {
          const _=[]
          {
           const children=_
           {
            const _=dup(node.source)
            {
             const source=_
             {
              const _={operator,args,children,source}
              {
               const node2=_
               {
                push(r,node2)
                const _="forin"
                {
                 const operator=_
                 {
                  const _=["_a"]
                  {
                   const args=_
                   {
                    const _=visit(node.children)
                    {
                     const children=_
                     {
                      const _=dup(node.source)
                      {
                       const source=_
                       {
                        const _={operator,args,children,source}
                        {
                         const node3=_
                         {
                          push(r,node3)
                          const _="let"
                          {
                           const operator=_
                           {
                            const _=["v","at","_a","i"]
                            {
                             const args=_
                             {
                              const _=[]
                              {
                               const children=_
                               {
                                const _=dup(node.source)
                                {
                                 const source=_
                                 {
                                  const _={operator,args,children,source}
                                  {
                                   const node4=_
                                   {
                                    unshift(node3.children,node4)
                                    const _="let"
                                    {
                                     const operator=_
                                     {
                                      const _=["i","to_i","k"]
                                      {
                                       const args=_
                                       {
                                        const _=[]
                                        {
                                         const children=_
                                         {
                                          const _=dup(node.source)
                                          {
                                           const source=_
                                           {
                                            const _={operator,args,children,source}
                                            {
                                             const node5=_
                                             {
                                              unshift(node3.children,node5)
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
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
 return visit(nodes)
}
function cpl_generate(x)
{
 check_arg(is_obj,x,"x","obj")
 check_arity("same",arguments.length,1)
 const _=[]
 {
  const pool=_
  {
   function get_index(x)
   {
    check_arg(is_str,x,"x","str")
    check_arity("same",arguments.length,1)
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
     const _=(typeof(x.out)==="function")?x.out():x.out
     {
      for(const v of _)
       push(a,v.code)
      {
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
             const _=(typeof(x.out)==="function")?x.out():x.out
             {
              for(const v of _)
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
              {
               const _={}
               {
                const contents=_
                {
                 const _=(typeof(paths)==="function")?paths():paths
                 {
                  for(const v of _)
                  {
                   const _=get_index(v)
                   {
                    const key=_
                    {
                     const _=to_str(key)
                     {
                      const key=_
                      {
                       const _=cpl_uncomment(x,v)
                       {
                        const content=_
                        {
                         const _=[]
                         {
                          const value=_
                          {
                           const _=split(content)
                           {
                            for(const v of _)
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
                  {
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
     }
    }
   }
  }
 }
}
function cpl_include(x)
{
 check_arg(is_obj,x,"x","obj")
 check_arity("same",arguments.length,1)
 function get_files(x)
 {
  check_arg(is_arr,x,"x","arr")
  check_arity("same",arguments.length,1)
  const _=[]
  {
   const r=_
   {
    const _=(typeof(x)==="function")?x():x
    {
     for(const v of _)
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
 }
 function get_includes(x)
 {
  check_arg(is_str,x,"x","str")
  check_arity("same",arguments.length,1)
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
        const _=file_load(a)
        {
         const a=_
         {
          const _=split(a)
          {
           for(const v of _)
           {
            const _=path_concat("src",v)
            {
             const s=_
             push(r,s)
            }
           }
           {
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
  check_arity("gte",arguments.length,0)
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
     const _=(typeof(files)==="function")?files():files
     {
      for(const v of _)
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
}
function cpl_init(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 const _="cache.txt"
 {
  const path=_
  {
   function load_cache()
   {
    check_arity("same",arguments.length,0)
    if(is_file(path))
    {
     const _=file_load(path)
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
           const _={}
           {
            const files=_
            {
             const _=[]
             {
              const stack=_
              {
               const _=[]
               {
                const out=_
                {
                 const _=concat("out-",app,".js")
                 {
                  const target=_
                  return {app,asts,fns,files,stack,out,target,path,cache}
                 }
                }
               }
              }
             }
            }
           }
          }
         }
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
 check_arg(is_obj,x,"x","obj")
 check_arg(is_str,y,"y","str")
 check_arity("same",arguments.length,2)
 if(same(y,"call"))
  return true
 const _=(typeof(x.asts)==="function")?x.asts():x.asts
 {
  for(const k in _)
  {
   if(same(k,y))
    return false
  }
  return true
 }
}
function cpl_is_leaf(x,y)
{
 check_arg(is_obj,x,"x","obj")
 check_arg(is_arr,y,"y","arr")
 check_arity("same",arguments.length,2)
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
 check_arg(is_obj,x,"x","obj")
 check_arg(is_str,y,"y","str")
 check_arity("same",arguments.length,2)
 const _=[]
 {
  const r=_
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
           const _=cpl_uncomment(x,path)
           {
            const lines=_
            {
             const _=split(lines)
             {
              const lines=_
              {
               const _=(typeof(lines)==="function")?lines():lines
               {
                const _a=_
                {
                 const _=(typeof(_a)==="function")?_a():_a
                 {
                  for(const k in _)
                  {
                   const _=to_i(k)
                   {
                    const i=_
                    {
                     const _=at(_a,i)
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
}
function cpl_log_error(cpl,err,path)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_str,err,"err","str")
 check_arity("gte",arguments.length,2)
 if(is_undef(path))
  return cpl_log_error(cpl,err,cpl.target)
 check(is_str,path)
 function parse_error(cpl,path,err)
 {
  check_arg(is_obj,cpl,"cpl","obj")
  check_arg(is_str,path,"path","str")
  check_arg(is_str,err,"err","str")
  check_arity("same",arguments.length,3)
  const _=txt_compact(err)
  {
   const s=_
   {
    const _=split(s)
    {
     const lines=_
     {
      const _=shift(lines)
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
              shift(lines,3)
              const _=front(lines)
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
                              const _=cpl_uncomment(cpl,source.path)
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
                                                const _=[]
                                                {
                                                 const stack=_
                                                 {
                                                  const _=shift(lines)
                                                  {
                                                   const s=_
                                                   {
                                                    push(stack,s)
                                                    while(is_full(lines))
                                                    {
                                                     const _=shift(lines)
                                                     {
                                                      const s=_
                                                      {
                                                       const _=trim(s)
                                                       {
                                                        const s=_
                                                        {
                                                         if(!(match_l(s,"at")))
                                                          break
                                                         push(stack,s)
                                                        }
                                                       }
                                                      }
                                                     }
                                                    }
                                                    const _=join(stack)
                                                    {
                                                     const stack=_
                                                     {
                                                      const _=cpl_source_map(cpl)
                                                      {
                                                       const map=_
                                                       {
                                                        const _=report_init(stack,undefined,map)
                                                        {
                                                         const report=_
                                                         {
                                                          report_log(report)
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
      }
     }
    }
   }
  }
 }
 try
 {
  return parse_error(cpl,path,err)
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
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_str,str,"str","str")
 check_arity("same",arguments.length,2)
 function is_complex(x)
 {
  check_arity("gte",arguments.length,0)
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
 check_arg(is_obj,x,"x","obj")
 check_arg(is_arr,y,"y","arr")
 check_arity("same",arguments.length,2)
 function visit(nodes)
 {
  check_arg(is_arr,nodes,"nodes","arr")
  check_arity("same",arguments.length,1)
  const _=[]
  {
   const r=_
   {
    const _=dup(nodes)
    {
     const nodes=_
     {
      while(is_full(nodes))
      {
       const _=shift(nodes)
       {
        const node=_
        {
         const _=null
         {
          let a=_
          {
           try
           {
            a=resolve(node,nodes)
           }
           catch(e)
           {
            unshift(x.stack,node)
            throw (typeof(e)==="function")?e():e
           }
           append(r,a)
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
 function resolve(node,rest)
 {
  check_arg(is_obj,node,"node","obj")
  check_arg(is_arr,rest,"rest","arr")
  check_arity("same",arguments.length,2)
  const _=[]
  {
   const r=_
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
            if(is_declare(operator))
            {
             const _=front(args)
             {
              const name=_
              {
               const _=slice(args,1)
               {
                const rvalue=_
                {
                 check(is_str,name)
                 check(is_arr,rvalue)
                 check(is_full,rvalue)
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
                                         if(is_full(rest))
                                         {
                                          const _="begin"
                                          {
                                           const operator=_
                                           {
                                            const _=[]
                                            {
                                             const args=_
                                             {
                                              const _=visit(rest)
                                              {
                                               const children=_
                                               {
                                                const _={operator,args,children,source}
                                                {
                                                 const node5=_
                                                 {
                                                  push(node3.children,node5)
                                                  clear(rest)
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
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
            else if(is_for(operator))
            {
             const _="let"
             {
              const operator=_
              {
               const _=["_",...args]
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
                               const _=["_"]
                               {
                                const args=_
                                {
                                 const _=visit(node.children)
                                 {
                                  const children=_
                                  {
                                   const _={operator,args,children,source}
                                   {
                                    const node4=_
                                    {
                                     push(node3.children,node4)
                                     if(is_full(rest))
                                     {
                                      const _="begin"
                                      {
                                       const operator=_
                                       {
                                        const _=[]
                                        {
                                         const args=_
                                         {
                                          const _=visit(rest)
                                          {
                                           const children=_
                                           {
                                            const _={operator,args,children,source}
                                            {
                                             const node5=_
                                             {
                                              push(node3.children,node5)
                                              clear(rest)
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
                   }
                  }
                 }
                }
               }
              }
             }
            }
            const _=visit(node.children)
            {
             const children=_
             {
              const _={operator,args,children,source}
              {
               const node=_
               {
                push(r,node)
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
 function is_declare(operator)
 {
  check_arity("gte",arguments.length,0)
  if(same(operator,"let"))
   return true
  if(same(operator,"var"))
   return true
  return false
 }
 function is_for(operator)
 {
  check_arity("gte",arguments.length,0)
  if(same(operator,"forof"))
   return true
  if(same(operator,"forin"))
   return true
  if(same(operator,"fornum"))
   return true
  return false
 }
 return visit(y)
}
function cpl_source_map(cpl)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arity("same",arguments.length,1)
 const _=path_real(cpl.target)
 {
  const script=_
  {
   const _={}
   {
    const files=_
    {
     const _=(typeof(cpl.files)==="function")?cpl.files():cpl.files
     {
      for(const k in _)
      {
       const _=get(cpl.files,k)
       {
        const v=_
        {
         const _=split(v)
         {
          const a=_
          put(files,k,a)
         }
        }
       }
      }
      {
       const _=[]
       {
        const source=_
        {
         const _=(typeof(cpl.out)==="function")?cpl.out():cpl.out
         {
          for(const v of _)
          {
           const _=(typeof(v.source.path)==="function")?v.source.path():v.source.path
           {
            const path=_
            {
             const _=(typeof(v.source.index)==="function")?v.source.index():v.source.index
             {
              const index=_
              {
               const _=(typeof(v.code)==="function")?v.code():v.code
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
          {
           const _={script,files,source}
           {
            const o=_
            return dup(o)
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function cpl_tokenize(x,y)
{
 check_arg(is_obj,x,"x","obj")
 check_arg(is_arr,y,"y","arr")
 check_arity("same",arguments.length,2)
 const _=[]
 {
  const r=_
  {
   const _=(typeof(y)==="function")?y():y
   {
    for(const v of _)
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
}
function cpl_translate(x,y)
{
 check_arg(is_obj,x,"x","obj")
 check_arg(is_obj,y,"y","obj")
 check_arity("same",arguments.length,2)
 function translate(cpl,operator,args,children,source)
 {
  check_arg(is_obj,cpl,"cpl","obj")
  check_arg(is_str,operator,"operator","str")
  check_arg(is_arr,args,"args","arr")
  check_arg(is_arr,children,"children","arr")
  check_arg(is_obj,source,"source","obj")
  check_arity("same",arguments.length,5)
  const _=(typeof(cpl.asts)==="function")?cpl.asts():cpl.asts
  {
   for(const k in _)
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
   {
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
 check_arg(is_obj,x,"x","obj")
 check_arg(is_str,y,"y","str")
 check_arity("same",arguments.length,2)
 if(has(x.files,y))
  return get(x.files,y)
 const _=path_concat("src",y)
 {
  const path=_
  {
   const _=file_load(path)
   {
    const content=_
    {
     const _=[]
     {
      const r=_
      {
       const _=split(content)
       {
        for(const v of _)
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
        {
         const _=join(r)
         {
          const r=_
          {
           const _=trim_r(r)
           {
            const r=_
            {
             put(x.files,y,r)
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
function expr_arg(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
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
 check_arity("gte",arguments.length,0)
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
 check_arg(is_name,x,"x","name")
 check_arity("gte",arguments.length,1)
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
 check_arg(is_identifier,x,"x","identifier")
 check_arg(is_identifier,y,"y","identifier")
 check_arity("gte",arguments.length,2)
 check(is_empty,z)
 return space(y,"in",x)
}
function expr_inline(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 return unwrap(x)
}
function expr_instanceof(x,y,...z)
{
 check_arg(is_name,x,"x","name")
 check_arg(is_identifier,y,"y","identifier")
 check_arity("gte",arguments.length,2)
 check(is_empty,z)
 return space(x,"instanceof",y)
}
function expr_new(...x)
{
 check_arity("gte",arguments.length,0)
 const _=expr_rvalue(...x)
 {
  const rvalue=_
  return space("new",rvalue)
 }
}
function expr_obj(...x)
{
 check_arity("gte",arguments.length,0)
 check(every,x,is_identifier)
 const _=join(x,",")
 {
  const s=_
  return brace(s)
 }
}
function expr_right(x,...y)
{
 check_arity("gte",arguments.length,0)
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
 check_arity("gte",arguments.length,0)
 const _=expr_call(...x)
 {
  const call=_
  return space("yield*",call)
 }
}
function expr_rvalue(...x)
{
 check_arity("gte",arguments.length,0)
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
      return expr_instanceof(...args)
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
 check_arg(is_str,x,"x","str")
 check_arity("gte",arguments.length,1)
 check(is_empty,y)
 return (typeof(x)==="function")?x():x
}
function* init(...x)
{
 check_arity("gte",arguments.length,0)
 function is_app(x)
 {
  check_arity("gte",arguments.length,0)
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
             file_save(cpl.target,code)
             if(!(cpl_check_syntax(cpl)))
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
                     const _=[...time,binary,"--trace-uncaught","--trace-deprecation",cpl.target,...args]
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
                              if(!(cpl_log_error(cpl,err)))
                              {
                               const _=txt_prepend(err,"make-error> ")
                               {
                                const s=_
                                log(s)
                               }
                              }
                             }
                             const _=file_load(usage_path)
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
const app="make"
const compile=1757608862
const pool=["lib-common/abs.cs","lib-common/add.cs","lib-common/and.cs","lib-common/angle.cs","lib-common/append.cs","lib-common/arr.cs","lib-common/asc.cs","lib-common/at.cs","lib-common/back.cs","lib-common/base36-decode.cs","lib-common/base36-encode.cs","lib-common/between.cs","lib-common/brace.cs","lib-common/bracket.cs","lib-common/byte-size.cs","lib-common/capture.cs","lib-common/check-arg.cs","lib-common/check-arity.cs","lib-common/check.cs","lib-common/chr.cs","lib-common/clear.cs","lib-common/clone.cs","lib-common/cmp.cs","lib-common/collate.cs","lib-common/concat.cs","lib-common/contain.cs","lib-common/count.cs","lib-common/crc.cs","lib-common/cut-l.cs","lib-common/cut-r.cs","lib-common/date-decode.cs","lib-common/date-str.cs","lib-common/dbg/dbg-backtrace.cs","lib-common/dbg/dbg-callstack.cs","lib-common/dbg/dbg-here.cs","lib-common/dbg/dbg-origin-xs.cs","lib-common/dbg/dbg-origin.cs","lib-common/dbg/dbg-source-map.cs","lib-common/dbg/dbg-source.cs","lib-common/dec.cs","lib-common/dedup.cs","lib-common/deinit-common.cs","lib-common/delimit.cs","lib-common/different.cs","lib-common/div.cs","lib-common/dom/dom-entities.cs","lib-common/dom/dom-escape.cs","lib-common/dom/dom-unescape.cs","lib-common/drop.cs","lib-common/dump.cs","lib-common/dup.cs","lib-common/eq.cs","lib-common/every.cs","lib-common/explode.cs","lib-common/extract.cs","lib-common/fallback-error.cs","lib-common/filter.cs","lib-common/find.cs","lib-common/flower.cs","lib-common/fn-args.cs","lib-common/fn-match.cs","lib-common/fn-select.cs","lib-common/front.cs","lib-common/get.cs","lib-common/gn-run.cs","lib-common/gt.cs","lib-common/gte.cs","lib-common/has.cs","lib-common/head.cs","lib-common/iif.cs","lib-common/implode.cs","lib-common/inc.cs","lib-common/indent.cs","lib-common/init-common.cs","lib-common/insert.cs","lib-common/is/is-access.cs","lib-common/is/is-alnum.cs","lib-common/is/is-alpha.cs","lib-common/is/is-arr.cs","lib-common/is/is-atom.cs","lib-common/is/is-blank.cs","lib-common/is/is-bool.cs","lib-common/is/is-browser.cs","lib-common/is/is-char.cs","lib-common/is/is-comment.cs","lib-common/is/is-container.cs","lib-common/is/is-cool.cs","lib-common/is/is-def.cs","lib-common/is/is-digit.cs","lib-common/is/is-empty.cs","lib-common/is/is-false.cs","lib-common/is/is-fn.cs","lib-common/is/is-fragment.cs","lib-common/is/is-full.cs","lib-common/is/is-gn.cs","lib-common/is/is-identifier.cs","lib-common/is/is-indented.cs","lib-common/is/is-int.cs","lib-common/is/is-ip.cs","lib-common/is/is-ip4.cs","lib-common/is/is-ip6.cs","lib-common/is/is-json.cs","lib-common/is/is-last.cs","lib-common/is/is-lisp.cs","lib-common/is/is-lit-char.cs","lib-common/is/is-lit.cs","lib-common/is/is-ln.cs","lib-common/is/is-lower.cs","lib-common/is/is-many.cs","lib-common/is/is-name.cs","lib-common/is/is-node.cs","lib-common/is/is-none.cs","lib-common/is/is-noun.cs","lib-common/is/is-null.cs","lib-common/is/is-num.cs","lib-common/is/is-numeric.cs","lib-common/is/is-obj.cs","lib-common/is/is-pair.cs","lib-common/is/is-punct.cs","lib-common/is/is-single.cs","lib-common/is/is-space.cs","lib-common/is/is-str.cs","lib-common/is/is-token.cs","lib-common/is/is-trivia.cs","lib-common/is/is-true.cs","lib-common/is/is-tuple.cs","lib-common/is/is-txt.cs","lib-common/is/is-uint.cs","lib-common/is/is-undef.cs","lib-common/is/is-upper.cs","lib-common/is/is-url.cs","lib-common/is/is-vec.cs","lib-common/is/is-word.cs","lib-common/is/is-xn.cs","lib-common/join.cs","lib-common/json-decode.cs","lib-common/json-dump.cs","lib-common/json-encode.cs","lib-common/log.cs","lib-common/lt.cs","lib-common/lte.cs","lib-common/main.cs","lib-common/map.cs","lib-common/match-l.cs","lib-common/match-r.cs","lib-common/match.cs","lib-common/max.cs","lib-common/merge.cs","lib-common/min.cs","lib-common/mod.cs","lib-common/mul.cs","lib-common/mute.cs","lib-common/neq.cs","lib-common/nop.cs","lib-common/obj/obj-keys.cs","lib-common/obj/obj-length.cs","lib-common/obj/obj-push.cs","lib-common/obj/obj-remove.cs","lib-common/obj/obj-unshift.cs","lib-common/obj/obj-vals.cs","lib-common/obj.cs","lib-common/on.cs","lib-common/or.cs","lib-common/pad-l.cs","lib-common/pad-r.cs","lib-common/paren.cs","lib-common/partial.cs","lib-common/path/path-concat.cs","lib-common/path/path-file.cs","lib-common/path/path-fix.cs","lib-common/path/path-join.cs","lib-common/path/path-split.cs","lib-common/path/path-strip.cs","lib-common/path/path-unfix.cs","lib-common/path/path-up.cs","lib-common/pop.cs","lib-common/prepend.cs","lib-common/profile.cs","lib-common/push.cs","lib-common/put.cs","lib-common/random.cs","lib-common/record.cs","lib-common/reject.cs","lib-common/remove.cs","lib-common/repeat.cs","lib-common/replace-rec.cs","lib-common/replace.cs","lib-common/report/report-html.cs","lib-common/report/report-init.cs","lib-common/report/report-log.cs","lib-common/report/report-render.cs","lib-common/resolve.cs","lib-common/reverse.cs","lib-common/round.cs","lib-common/salt.cs","lib-common/same.cs","lib-common/scan.cs","lib-common/set.cs","lib-common/shift.cs","lib-common/shuffle.cs","lib-common/silent.cs","lib-common/sleep.cs","lib-common/slice-l.cs","lib-common/slice-r.cs","lib-common/slice.cs","lib-common/sort.cs","lib-common/space.cs","lib-common/split.cs","lib-common/stop.cs","lib-common/str-indent.cs","lib-common/str-unindent.cs","lib-common/strip-l.cs","lib-common/strip-r.cs","lib-common/sub.cs","lib-common/tail.cs","lib-common/tbl/tbl-column.cs","lib-common/tbl/tbl-columns.cs","lib-common/tbl/tbl-index.cs","lib-common/tbl/tbl-init.cs","lib-common/tbl/tbl-pad-l.cs","lib-common/tbl/tbl-remove-column.cs","lib-common/tbl/tbl-rename-column.cs","lib-common/tbl/tbl-render.cs","lib-common/time/time-delay.cs","lib-common/time/time-get.cs","lib-common/time/time-hn.cs","lib-common/time/time-interval.cs","lib-common/time/time-now.cs","lib-common/time/time-str.cs","lib-common/time/time-timeout.cs","lib-common/to/to-base36.cs","lib-common/to/to-dump.cs","lib-common/to/to-fixed.cs","lib-common/to/to-i.cs","lib-common/to/to-int.cs","lib-common/to/to-json.cs","lib-common/to/to-lit.cs","lib-common/to/to-lower.cs","lib-common/to/to-num.cs","lib-common/to/to-str.cs","lib-common/to/to-tbl.cs","lib-common/to/to-uint.cs","lib-common/to/to-upper.cs","lib-common/trace.cs","lib-common/trim-l.cs","lib-common/trim-r.cs","lib-common/trim.cs","lib-common/trunc.cs","lib-common/tty-width.cs","lib-common/txt/txt-compact.cs","lib-common/txt/txt-cut.cs","lib-common/txt/txt-indent.cs","lib-common/txt/txt-prepend.cs","lib-common/unaccent.cs","lib-common/unshift.cs","lib-common/unwrap.cs","lib-common/url-beautify.cs","lib-common/url-get.cs","lib-common/url-parse.cs","lib-common/wait.cs","lib-common/xor.cs","lib-node/app-list.cs","lib-node/beep.cs","lib-node/deinit-node.cs","lib-node/digest.cs","lib-node/dir/dir-call.cs","lib-node/dir/dir-change.cs","lib-node/dir/dir-current.cs","lib-node/dir/dir-find.cs","lib-node/dir/dir-load.cs","lib-node/dir/dir-make.cs","lib-node/dir/dir-read.cs","lib-node/dir/dir-reset.cs","lib-node/dir/dir-size.cs","lib-node/file/file-append.cs","lib-node/file/file-load.cs","lib-node/file/file-read.cs","lib-node/file/file-save.cs","lib-node/file/file-size.cs","lib-node/file/file-write.cs","lib-node/fs-copy.cs","lib-node/fs-modified.cs","lib-node/fs-remove.cs","lib-node/http-get.cs","lib-node/init-node.cs","lib-node/inspect.cs","lib-node/ip/ip-host.cs","lib-node/ip/ip-list.cs","lib-node/ip/ip-v4.cs","lib-node/ip/ip-v6.cs","lib-node/is/is-batch.cs","lib-node/is/is-color.cs","lib-node/is/is-dir.cs","lib-node/is/is-file.cs","lib-node/is/is-fs.cs","lib-node/is/is-interactive.cs","lib-node/is/is-readable.cs","lib-node/mail.cs","lib-node/open.cs","lib-node/os/os-capture.cs","lib-node/os/os-detach.cs","lib-node/os/os-execute.cs","lib-node/os/os-home.cs","lib-node/os/os-host.cs","lib-node/os/os-log.cs","lib-node/os/os-prompt.cs","lib-node/os/os-ps.cs","lib-node/os/os-run.cs","lib-node/os/os-shell.cs","lib-node/os/os-system.cs","lib-node/os/os-user.cs","lib-node/path/path-base.cs","lib-node/path/path-dir.cs","lib-node/path/path-ext.cs","lib-node/path/path-real.cs","lib-node/path/path-tmp.cs","lib-node/report-mail.cs","lib-node/sigint.cs","lib-node/ssh/ssh-execute.cs","lib-node/ssh/ssh-pass.cs","lib-node/ssh/ssh-system.cs","lib-node/sudo-save.cs","lib-node/write.cs","lib-server/app-token.cs","lib-server/init-server.cs","lib-server/is-local.cs","lib-server/is-remote.cs","lib-server/is-root.cs","lib-server/mnt-clean.cs","lib-server/mnt-unmount.cs","lib-compiler/app-home.cs","lib-compiler/app-make.cs","lib-compiler/ast/ast-assign.cs","lib-compiler/ast/ast-begin.cs","lib-compiler/ast/ast-brk.cs","lib-compiler/ast/ast-call.cs","lib-compiler/ast/ast-catch.cs","lib-compiler/ast/ast-check.cs","lib-compiler/ast/ast-cont.cs","lib-compiler/ast/ast-else.cs","lib-compiler/ast/ast-elseif.cs","lib-compiler/ast/ast-fn.cs","lib-compiler/ast/ast-forin.cs","lib-compiler/ast/ast-fornum.cs","lib-compiler/ast/ast-forof.cs","lib-compiler/ast/ast-gn.cs","lib-compiler/ast/ast-if.cs","lib-compiler/ast/ast-include.cs","lib-compiler/ast/ast-inline.cs","lib-compiler/ast/ast-let.cs","lib-compiler/ast/ast-ret.cs","lib-compiler/ast/ast-run.cs","lib-compiler/ast/ast-throw.cs","lib-compiler/ast/ast-try.cs","lib-compiler/ast/ast-var.cs","lib-compiler/ast/ast-while.cs","lib-compiler/ast/ast-yield.cs","lib-compiler/ast/call-ast-block-top.cs","lib-compiler/ast/call-ast-block.cs","lib-compiler/ast/call-ast-declare.cs","lib-compiler/ast/call-ast-for.cs","lib-compiler/ast/call-ast-if.cs","lib-compiler/ast/call-ast-xn.cs","lib-compiler/cpl-block.cs","lib-compiler/cpl-check-syntax.cs","lib-compiler/cpl-check.cs","lib-compiler/cpl-compile.cs","lib-compiler/cpl-deinit.cs","lib-compiler/cpl-dump.cs","lib-compiler/cpl-fold.cs","lib-compiler/cpl-for.cs","lib-compiler/cpl-generate.cs","lib-compiler/cpl-include.cs","lib-compiler/cpl-init.cs","lib-compiler/cpl-is-call.cs","lib-compiler/cpl-is-leaf.cs","lib-compiler/cpl-load.cs","lib-compiler/cpl-log-error.cs","lib-compiler/cpl-scan.cs","lib-compiler/cpl-scope.cs","lib-compiler/cpl-source-map.cs","lib-compiler/cpl-tokenize.cs","lib-compiler/cpl-translate.cs","lib-compiler/cpl-uncomment.cs","lib-compiler/expr/expr-arg.cs","lib-compiler/expr/expr-arr.cs","lib-compiler/expr/expr-call.cs","lib-compiler/expr/expr-in.cs","lib-compiler/expr/expr-inline.cs","lib-compiler/expr/expr-instanceof.cs","lib-compiler/expr/expr-new.cs","lib-compiler/expr/expr-obj.cs","lib-compiler/expr/expr-right.cs","lib-compiler/expr/expr-run.cs","lib-compiler/expr/expr-rvalue.cs","lib-compiler/expr/expr-value.cs","app-make/init.cs","fn abs x:num"," ret Math.abs x","end","fn add x:num y:num z:etc",""," let r inline \"x+y\""," if is_full z","  ret add r z:etc"," ret r","fn and x:bool y:bool z:etc"," let r inline \"x&&y\"","  ret and r z:etc","fn angle x:str"," ret concat \"<\" x \">\"","fn append x:arr y:arr"," forof y","  push x v"," end","fn arr x:etc"," ret inline \"[...x]\"","fn asc x:char"," ret x.charCodeAt 0","fn at x:vec y:uint z"," let n dec x.length"," check between y 0 n"," if is_undef z","  ret inline \"x[y]\""," inline \"x[y]=z\"","fn back x:vec y z"," if is_undef y","  ret back x 0"," check is_uint y"," check lte y x.length"," let n sub x.length y"," let n dec n","  ret at x n"," at x n z","fn base36_decode x:str"," var r \"\""," let a explode x"," while is_full a","  let a2 slice_l a 4","  shift a 4","  let s implode a2","  let n Number.parseInt s 36","  let range mul 256 256","  check is_uint n","  check lte n range","  let c chr n","  assign r concat r c","fn base36_encode x:str"," forof x","  let s asc v","  let s to_base36 s","  let s pad_l s \"0\" 4","  assign r concat r s","fn between x:num y:num z:num"," check gte z y"," if lt x y","  ret false"," if gt x z"," ret true","fn brace x:str"," ret concat \"{\" x \"}\"","fn bracket x:str"," ret concat \"[\" x \"]\"","fn byte_size x:uint"," let kb 1024"," let mb mul kb 1024"," let gb mul mb 1024"," let tb mul gb 1024"," if lt x kb","  let s to_fixed x","  ret concat s \"b\""," if lt x mb","  let s div x kb","  let s trunc s","  let s to_fixed s","  ret concat s \"Kb\""," if lt x gb","  let s div x mb","  ret concat s \"Mb\""," if lt x tb","  let s div x gb","  ret concat s \"Gb\""," let s div x tb"," let s trunc s"," let s to_fixed s"," ret concat s \"Tb\"","fn capture x:fn y:etc"," let o record x y:etc"," ret o.output","fn check_arg is arg name type"," let test is arg"," if is_true test","  ret"," let s_name to_lit name"," let s_type to_lit type"," let s_given typeof arg"," let s_given to_lit s_given"," let s_given space s_given \"given\""," let s_given paren s_given"," let message space \"Expecting argument\" s_name \"to be of type\" s_type s_given"," stop message","inline \"function check_arity(operator,length,arity)\"","inline \"{\"","inline \" return\"","inline \" if(operator===\\\"same\\\")\"","inline \" {\"","inline \"  if(length===arity)\"","inline \"   return\"","inline \" }\"","inline \"\"","inline \" if(operator===\\\"gte\\\")\"","inline \"  if(length>=arity)\"","inline \" const message=\\\"Expecting \\\"+arity+\\\" argument(s) (\\\"+length+\\\" given)\\\"\"","inline \" throw new Error(message)\"","inline \"}\"","fn check x y:etc"," if is_true x","  if is_empty y","   ret"," elseif is_fn x","  let b x y:etc","  if is_true b"," stop \"check\"","fn chr x:uint"," check is_uint x"," ret String.fromCharCode x","fn clear x:arr"," x.splice 0","fn clone x"," if is_undef x","  check same arguments.length 1"," let history arr"," fn process x","  if is_container x","   push history x","  if is_arr x","   let r arr","   forof x","    if contain history v","     push r null","     cont","    end","    let v process v","    push r v","   end","   ret r","  elseif is_obj x","   let r obj","   forin x","    let v get x k","     put r k null","    put r k v","  else","   ret value x"," ret process x","fn cmp x:def y:def"," if inline \"x>y\"","  ret 1"," if inline \"x<y\"","  ret -1"," ret 0","fn collate x:arr"," fn is_delimited x","  if not is_str x","   ret false","  if same x \"_\"","  if is_punct x","   ret true","  if is_space x"," let a arr","  if is_empty a","   push a v","   cont","  end","  let left back a","  let left back left","  let right front v","  if is_delimited left","  elseif is_delimited right","   push a right","  let s concat left right","  drop a","  push a s"," ret join a \" \"","fn concat x:etc"," ret implode x","fn contain x:vec y","  check same arguments.length 2"," if is_str x","  check is_str y"," ret x.includes y","fn count x:arr y:def"," var r 0","  if same v y","   assign r inc r","fn crc x:str"," for a","  for s","   let n asc v","   assign r add r n","fn cut_l x:str y:uint"," if lte x.length y","  ret x"," let length sub y 3"," let s slice_r x length"," let a explode s"," while true","  let c front a","  if is_punct c","   shift a","  elseif is_space c","   brk"," let r implode a"," let r concat \"...\" r","fn cut_r x:str y:uint"," check is_str x"," let s slice_l x length","  let c back a","   drop a"," let r concat r \"...\"","fn date_decode x:str"," let r new Date x"," let r r.getTime"," let r div r 1000"," let r trunc r","fn date_str x","  let n time_get","  ret date_str n"," check is_num x"," let n mul x 1000"," let o new Date n"," let y o.getFullYear"," let m o.getMonth"," let m inc m"," let m pad_l m \"0\" 2"," let d o.getDate"," let d pad_l d \"0\" 2"," ret concat y \"/\" m \"/\" d","fn dbg_backtrace stack map"," if is_undef stack","  let e new Error \"backtrace\"","  ret dbg_backtrace e.stack map"," check is_str stack"," if is_undef map","  let map dbg_source_map","  ret dbg_backtrace stack map"," check is_obj map"," let r tbl_init"," let stack trim stack"," let stack split stack"," let source map.source"," for stack","  if is_node","   if not contain v map.script","    cont","  let s trim v","  let s replace s \"@\" \" \"","  let a split s \" \"","  let s front a","  if same s \"at\"","  var fn shift a","  if is_empty fn","   assign fn \"anonymous\"","  if not is_noun fn","  let a back a","  let a split a \":\"","  if not is_many a","  let njs back a 1","  let njs to_uint njs","  var index dec njs","  if gte index source.length","  let location at source index","  if is_null location","  let js trim location.js","  let cs trim location.cs","  let path location.path","  let ncs location.index","  let ncs inc location.index","  let o obj fn njs js path ncs cs","  push r o","fn dbg_callstack stack map","  let e new Error \"callstack\"","  ret dbg_callstack e.stack"," let r dbg_backtrace stack map"," while is_full r","  let frame front r","  let fn frame.fn","  if same fn \"throw\"","  elseif same fn \"stop\"","  elseif same fn \"check\"","  elseif same fn \"check_arg\"","  elseif same fn \"check_arity\"","  shift r","fn dbg_here"," let t dbg_callstack"," tbl_remove_column t \"njs\""," tbl_remove_column t \"js\""," let t tbl_render t"," log t","fn dbg_origin_xs stack code_type map","  let e new Error \"origin-xs\"","  ret dbg_origin_xs e.stack"," check is_str code_type","  ret dbg_origin_xs stack code_type map"," let frames dbg_callstack stack map"," let frames head frames 4"," for frames","  var t null","  var label null","  if same code_type \"cs\"","   let file get map.files v.path","   let line v.ncs","   assign t dbg_origin file line","   assign label \"stack\"","  elseif same code_type \"js\"","   let line v.njs","   assign t dbg_origin map.source line \"js\"","   assign label \"javacript\"","   stop","  let s tbl_render t","  let s txt_prepend s \"> \"","  let n inc i","  let title concat \"#\" n","  let title space label \"frame\" title \"/\" v.fn","  flower title","  log s","fn dbg_origin source:arr line:uint key depth"," if is_undef key","  ret dbg_origin source line \"\" depth"," check is_str key"," if is_undef depth","  ret dbg_origin source line key 15"," check is_uint depth"," fn find_origin fn:fn source:arr line:uint key:str depth:uint","  var n depth","  var r fn source line key n","  while lte n source.length","   if gte r.length depth","    brk","   assign n inc n","   assign r fn source line key n","   let end add line r.length","   if gte end source.length","  ret r"," fn origin source:arr line:uint key:str depth:uint","  let r arr","  let a arr","  let n div depth 2","  let n trunc n","  var n sub line n","  let length min source.length depth","  let nup add n length","  if lt n 1","   assign n 1","  elseif gte nup source.length","   assign n sub source.length length","   if lt n 1","    assign n 1","  fornum length","   let n add n i","   var p \" \"","   if same n line","    assign p \">\"","   let index dec n","   var code at source index","   if is_empty key","    check is_str code","   else","    assign code get code key","   let o obj n p code","   push a o","  let a2 arr","  forof a","   push a2 v.code","  let s join a2","  let s str_unindent s","  let a3 split s","  for a3","   let o at a i","   assign o.code v","   if is_empty v.code","   push r v"," fn origin_center source:arr line:uint key:str depth:uint","  let a origin source line key depth","  ret center a"," fn center x:arr","  var middle get_position x","  var range middle","  let length mul range 2","  let length inc length","  if gt length x.length","   assign range sub x.length middle","   assign range dec range","  let ybefore sub middle range","  let yafter inc middle","  let before slice x ybefore range","  let center at x middle","  let after slice x yafter range","  let r arr before:etc center after:etc"," fn get_position x:arr","  for x","   if same v.p \">\"","    ret i","  stop"," let centered find_origin origin_center source line key depth"," if same centered.length depth","  ret centered"," ret find_origin origin source line key depth","fn dbg_source_map"," var script null"," if is_node","  assign script at process.argv 1","  assign script path_real script"," let lines_js split source"," let paths arr"," forof relatives","  let path at pool v","  push paths path"," let files obj"," forin contents","  let content get contents k","  let n to_uint k","  let path at pool n","  let lines arr","  forof content","   let s at pool v","   push lines s","  put files path lines"," let source arr"," elseif is_browser","  fornum 7","   push source null"," forin paths","  let i to_i k","  var n i","  if gte n paths.length","  let path at paths n","  let index at indices n","  var line_js n","  elseif is_browser","   assign line_js add line_js 5","  let js at lines_js line_js","  let cs get files path","  let cs at cs index","  let o obj path index js cs","  push source o"," ret obj script files source","fn dbg_source x"," fn get_source","   let path at process.argv 1","   let s file_load path","   ret s","   ret html.outerHTML","  assign r get_source"," else","  assign r file_load x"," let r trim_r r"," let r split r","  let s pop r","  if match_l s \"const app=\""," let r join r","fn dec x:num"," ret sub x 1","fn dedup x:arr"," let r arr","  if not contain r v","fn deinit_common","  deinit_node"," if gte verbose 0","  let profile time_now","  let profile time_delay profile","  let profile to_lit profile","  let profile concat \"profile=\" profile","  log app profile","fn delimit x:str y","  ret delimit x is_fragment"," check is_fn y","  let right v","  if is_empty r","   push r right","  let left back r","  let fragment concat left right","  if is_fragment fragment","   drop r","   push r fragment","fn different x y"," ret inline \"x!==y\"","fn div x:num y:num z:etc"," check different y 0"," let r inline \"x/y\"","  ret div r z:etc","fn dom_entities"," let r obj"," let o obj"," put o \"nbsp\" \" \""," put o \"#160\" \" \""," put o \"amp\" \"&\""," put o \"#38\" \"&\""," put o \"lt\" \"<\""," put o \"gt\" \">\""," put o \"quot\" \"\\\"\""," put o \"#8220\" \"\\\"\""," put o \"#8221\" \"\\\"\""," put o \"«\" \"\\\"\""," put o \"»\" \"\\\"\""," put o \"apos\" \"'\""," put o \"rsquo\" \"'\""," put o \"#39\" \"'\""," put o \"#8217\" \"'\""," put o \"#8211\" \"-\""," put o \"#8212\" \"-\""," put o \"#8230\" \"...\""," put o \"#124\" \"|\""," put o \"#215\" \"x\""," put o \"eacute\" \"é\""," put o \"#233\" \"é\""," forin o","  let v get o k","  if is_identifier k","   let key concat \"&\" k \";\"","   put r key v","  if match_l k \"#\"","   let digit strip_l k \"#\"","   if same digit.length 2","    let key concat \"&#0\" digit \";\"","    put r key v","   let c to_uint digit","   let c chr c","   if different c v","    put r c v","  if has r k","  put r k v","fn dom_escape x:str"," var r x"," forin entities","  let v get entities k","  assign r replace r v k","fn dom_unescape x:str","  assign r replace r k v","fn drop x:arr y","  ret drop x 1"," pop x y","fn dump x"," let name fn_args \"dump\""," check is_single name"," let name front name","  let s to_lit x","  log name s","  log name x","fn dup x:container"," if is_arr x","  ret slice x 0"," elseif is_obj x","  let r obj","  merge r x","fn eq x:def y:def"," if same x y","  ret true","  if is_arr y","   fornum min x.length y.length","    let xval at x i","    let yval at y i","    if neq xval yval","     ret false","   ret eq x.length y.length"," if is_obj x","  if is_obj y","   let xkeys obj_keys x","   let ykeys obj_keys y","   let xvals obj_vals x","   let yvals obj_vals y","   fornum min xkeys.length ykeys.length","    let xkey at xkeys i","    let ykey at ykeys i","    if neq xkey ykey","    let xval at xvals i","    let yval at yvals i","   ret eq xkeys.length ykeys.length"," let n cmp x y"," ret same n 0","fn every x:arr y:fn","  if not y v","fn explode x:str","  push r v","fn extract x:arr y:def"," var r false"," let a dup x"," clear x"," forof a","   assign r true","   push x v","fn fallback_error x:str y:obj z"," let title space \"Fallback\" x"," flower title"," let s to_str y.stack"," let s trim_r s"," let s txt_prepend s \"error-in-error> \""," console.log s"," check is_obj z"," let s to_str z.stack"," let s txt_prepend s \"original-error> \"","fn filter x:arr y:fn"," ret x.filter y","fn find x:arr y:def"," let value y"," fn match x","  ret same x value"," ret x.findIndex match","fn flower x"," let n tty_width","  let s repeat \"*\" n"," let s1 repeat \"*\" n"," let s2 repeat \"*\" 2"," let s2 concat s2 \" \""," let s2 concat s2 x"," let s2 concat s2 s1"," let s2 slice_l s2 n"," log s2","fn fn_args x:str"," forof dbg_callstack","  let a split v.cs \" \"","  let n find a x","  if lt n 0","  let index inc n","  ret slice a index"," stop","fn fn_match x:str"," forin fns","  if not match k x","  let v get fns k","fn fn_select x:str"," let pattern concat x \"*\""," let fns fn_match pattern","  let name strip_l k x","  put r name v","fn front x:vec"," check is_full x"," ret at x 0","fn get x:obj y:str z"," if has x y"," if is_def z","  ret z","fn gn_run x:gn y:etc"," let generator x y:etc"," fn on_timer","  let iterator generator.next","  if iterator.done","  time_timeout on_timer"," on_timer","fn gt x:num y:num"," ret inline \"x>y\"","fn gte x:num y:num"," ret inline \"x>=y\"","fn has x:obj y:str"," check is_obj x"," check is_str y"," ret inline \"y in x\"","fn head x:vec y:uint"," if lt x.length y","  if is_str x","   ret x","  elseif is_arr x","   ret dup x"," ret slice_l x y","fn iif x:bool y:def z:def"," if x","  ret y"," ret z","fn implode x:arr"," ret join x \"\"","fn inc x:num"," ret add x 1","fn indent x:str y","  ret indent x 1"," forof split x","  let s trim_r v","  if is_empty s","   push a s","   let indent repeat \" \" y","   let s concat indent s"," ret join a","fn init_common x:etc","  assign global.cwd dir_current","  let script at process.argv 1","  let dir path_dir script","  dir_change dir"," if is_fn init","  init x:etc","  deinit_common"," elseif is_gn init","  let generator init x:etc","  fn on_timer","   let iterator generator.next","   if iterator.done","    deinit_common","    ret","   time_timeout on_timer","  on_timer","fn insert x:arr y:uint z:etc"," x.splice y 0 z:etc","fn is_access x"," if not is_str x"," if is_empty x"," let a split x \".\""," if is_single a"," ret every a is_identifier","fn is_alnum x","  if same v \"_\"","  elseif is_alpha v","  elseif is_digit v","fn is_alpha x","  if is_lower v","  elseif is_upper v","fn is_arr x"," ret Array.isArray x","fn is_atom x"," if is_alnum x"," if is_access x"," if is_tuple x"," if is_numeric x"," if is_lit x"," if is_lit_char x"," ret false","fn is_blank x"," if is_space x","fn is_bool x"," let s typeof x"," ret same s \"boolean\"","fn is_browser"," ret has_window","fn is_char x"," ret same x.length 1","fn is_comment x"," if not is_ln x"," ret match_l x \"//\"","fn is_container x","fn is_cool x"," if is_num x","fn is_def x"," ret not is_undef x","fn is_digit x","  if not contain digit v","fn is_empty x"," if is_vec x","  ret same x.length 0"," if obj x","  let keys obj_keys x","  ret is_empty keys","fn is_false x"," ret same x false","fn is_fn x"," if different s \"function\""," if same x.constructor.name \"GeneratorFunction\"","fn is_fragment x","fn is_full x"," if not is_vec x"," ret not is_empty x","fn is_gn x"," if different x.constructor.name \"GeneratorFunction\"","fn is_identifier x"," let s front x"," if same s \"_\""," elseif is_alpha s","  if not is_alnum v","fn is_indented x","  if is_empty v","  let c front v","  if not is_space c","fn is_int x"," ret Number.isInteger x","fn is_ip x"," if is_ip4 x"," if is_ip6 x","fn is_ip4 x"," if different a.length 4","  if not is_digit v","  let n to_uint v","  if gt n 255","fn is_ip6 x"," let a split x \":\""," if lt a.length 3"," if gt a.length 8","  if contain v \"_\"","  if gt v.length 4","fn is_json x"," try","  json_decode x"," catch","fn is_last x:vec y:uint"," ret same n y","fn is_lisp x"," let a split x \"-\""," ret every a is_alnum","fn is_lit_char x"," if not match_l x \"'\""," if not match_r x \"'\""," let s strip_l x \"'\""," let s strip_r s \"'\""," if is_empty s"," let s concat \"\\\"\" s \"\\\"\""," ret is_lit s","fn is_lit x"," if not is_json x"," let v json_decode x"," if not is_str v"," let s json_encode v"," ret same s x","fn is_ln x"," ret not is_txt x","fn is_lower x","  if not contain lower v","fn is_many x"," ret gt x.length 1","fn is_name x"," if is_identifier x","fn is_node"," ret not is_browser","fn is_none x"," if is_null x","fn is_noun x","fn is_null x"," ret same x null","fn is_num x"," if Number.isNaN x"," if same x Number.NEGATIVE_INFINITY"," if same x Number.POSITIVE_INFINITY"," ret same s \"number\"","fn is_numeric x"," if not is_num v","fn is_obj x"," ret same s \"object\"","fn is_pair x"," ret same x.length 2","fn is_punct x","  if not contain punct v","fn is_single x","fn is_space x"," let s trim x"," ret is_empty s","fn is_str x"," ret same s \"string\"","fn is_token x"," if is_atom x"," if is_comment x","fn is_trivia x","fn is_true x"," ret same x true","fn is_tuple x","  if is_identifier v","fn is_txt x","  ret fals"," ret contain x \"\\n\"","fn is_uint x"," if not is_int x"," ret gte x 0","fn is_undef x"," ret same x undefined","fn is_upper x","  if not contain upper v","fn is_url x"," let s to_lower x"," if match_l s \"http://\""," elseif match_l s \"https://\"","  url_parse x","fn is_vec x","fn is_word x"," if contain x \" \""," if contain x \"\\n\""," if contain x \"\\r\"","fn is_xn x"," if is_fn x"," if is_gn x","fn join x:arr y","  ret join x \"\\n\""," ret x.join y","fn json_decode x:str"," ret JSON.parse x","fn json_dump x:def"," ret JSON.stringify x null 1","fn json_encode x","  ret \"undefined\""," ret JSON.stringify x","fn log x:etc"," fn node_log x:etc","   var s null","   if is_str v","    assign s v","    assign s inspect v","   write s","   let last dec x.length","   if different i last","    write \" \"","  write \"\\n\"","  let parts arr","    assign s inspect v false","   push parts s","  let pid pad_l process.pid \" \" 6","  let time time_get","  let date date_str time","  let time time_str time true","  let content join parts \" \"","  let a split content","   let s space pid date time","   forof a","    let s space pid date time v","    push lines s","  let content join lines","  let content concat content \"\\n\"","  let base concat app \".txt\"","  let dir \"log\"","  let path path_concat dir base","  if not is_file path","   dir_make dir","   file_write path content","  let size file_size path","  let limit mul 16 1024 1024","  if lt size limit","   file_append path content","  let a file_load path","  let a split a","  let half div a.length 2","  let half trunc half","  shift a half","  append a lines","  let content join a","  file_write path content"," if is_str output","  forof x","    push a v","   let s to_dump v","  let s join a \" \"","  let s concat s \"\\n\"","  let s concat output s","  assign global.output s","  node_log x:etc","  console.log x:etc","fn lt x:num y:num"," ret inline \"x<y\"","fn lte x:num y:num"," ret inline \"x<=y\"","fn main"," fn log_compile","  let compile time_hn compile","  let compile to_lit compile","  let compile concat \"compile=\" compile","  let sloc split source","  let sloc sloc.length","  let sloc concat \"sloc=\" sloc","  log app compile sloc"," var has_window true","  inline \"window\"","  assign has_window false"," if has_window","  assign window.global window","  assign global.has_window true","  assign global.has_window false"," assign global.zombie false"," assign global.start time_get"," assign global.punct \"!\\\"#$%&'()*+,-./:;<=>?@[\\\\]^`{|}~\""," assign global.digit \"0123456789\""," assign global.lower \"abcdefghijklmnopqrstuvwxyz\""," assign global.upper to_upper lower"," assign global.output null"," assign global.verbose 0"," assign global.color false"," assign global.minute 60"," assign global.hour mul 60 minute"," assign global.day mul 24 hour"," assign global.month mul 30 day"," assign global.year mul 12 month"," assign global.traces arr"," assign global.entities dom_entities","  init_node","  init_browser"," assign global.source dbg_source"," let skip arr \"init_common\" \"init_node\" \"init_browser\"","  if contain skip k","  if match k \"init_*\"","   let v get fns k","   v","  let args slice process.argv 2","  if extract args \"--verbose\"","   assign verbose inc verbose","  if extract args \"--quiet\"","   assign verbose dec verbose","  if extract args \"--color\"","   assign color true","  if gte verbose 0","   log_compile","  init_common args:etc","  fn on_load x:obj","   if same document.readyState \"complete\"","    log_compile","    init_common","    assign window.onload null","  assign window.onload on on_load","fn map x:arr y:fn","  let v y v","  check is_def v","fn match_l x:str y:str"," if is_empty y"," if gt y.length x.length"," let s slice_l x y.length"," ret same s y","fn match_r x:str y:str"," let s slice_r x y.length","fn match x:str y:str"," let s replace y \".\" \"\\\\.\""," let s replace s \"*\" \".*\""," let s concat \"^\" s \"$\""," let s new RegExp s"," ret s.test x","fn max x:etc"," ret Math.max x:etc","fn merge x:obj y:obj"," Object.assign x y","fn min x:etc"," ret Math.min x:etc","fn mod x:num y:num z:etc"," let r inline \"x%y\"","  ret mod r z:etc","fn mul x:num y:num z:etc"," let r inline \"x*y\"","  ret mul r z:etc","fn mute x:fn y:etc"," ret o.result","fn neq x:def y:def"," ret not eq x y","fn nop","fn obj_keys x:obj"," ret Object.keys x","fn obj_length x:obj"," let keys obj_keys x"," ret keys.length","fn obj_push x:obj y:str z:def"," forin x","  if same k y","  let v get x k"," put r y z","fn obj_remove x:obj y:str","fn obj_unshift x:obj y:str z:def","fn obj_vals x:obj"," ret Object.values x","fn obj"," ret inline \"{}\"","fn on x:fn y:etc"," let fn value x"," let args y"," fn on_fn x:etc","  if zombie","  ret fn args:etc x:etc"," if zombie"," ret value on_fn","fn or x:bool y:bool z:etc"," let r inline \"x||y\"","  ret or r z:etc","fn pad_l x:cool y z"," if is_uint x","  let s to_json x","  if is_undef y","   if is_undef z","    ret pad_l s \"0\" 3","   ret pad_l s \"0\" z","  ret pad_l s y z"," check is_uint z"," ret x.padStart z y","fn pad_r x:cool y z","    ret pad_r s \"0\" 3","   ret pad_r s \"0\" z","  ret pad_r s y z"," ret x.padEnd z y","fn paren x:str"," ret concat \"(\" x \")\"","fn partial x:fn y:etc"," fn result x:etc"," ret value result","fn path_concat x:str y:str z:etc"," let x strip_r x \"/\""," let y strip_l y \"/\""," let r concat x \"/\" y","  ret path_concat r z:etc","fn path_file x:str"," let s path_base x"," let a split s \".\"","  ret s"," drop a"," ret join a \".\"","fn path_fix x:str"," if match_r x \"/\""," ret concat x \"/\"","fn path_join x:arr"," ret join x \"/\"","fn path_split x:str"," ret split x \"/\"","fn path_strip x:str"," ret strip_r x \"/\"","fn path_unfix x:str","fn path_up x:str"," let a path_split x"," pop a"," ret path_join a","fn pop x:arr y","  ret pop x 1"," if same y 1","  let r back x","  remove x n 1","  ret value r"," remove x n y","fn prepend x:arr y:arr"," let a dup y"," reverse a","  unshift x v","fn profile x:xn y:etc"," var n null"," let before time_now","  assign r x y:etc"," elseif is_gn x","  let generator x y:etc","  while true","    assign r iterator.value"," let after time_now"," let time sub after before"," let time to_fixed time"," let time concat time \"s\""," let time to_lit time"," let time concat \"profile=\" time"," log x.name time","fn push x:arr y"," x.push y","fn put x:obj y:str z","  check same arguments.length 3"," set x y z","fn random x","  ret random Number.MAX_SAFE_INTEGER"," check gte x 0"," let r Math.random"," let r mul r x","  ret trunc r","fn record x:fn y:etc"," check is_null output"," assign global.output \"\""," var result null","  assign result x y:etc"," catch e","  assign global.output null","  throw e"," let s trim_r output"," assign r.result result"," assign r.output s","fn reject x:arr y:fn"," check is_arr x","  if y v","fn remove x:arr y:uint z","  ret remove x y 1"," check between y 0 x.length"," let n add y z"," check between n 0 x.length"," x.splice y z","fn repeat x:str y:uint"," ret x.repeat y","fn replace_rec x:str y:str z:str"," while contain r y","  assign r replace r y z","fn replace x:vec y:str z:str","  let a split x y","  ret join a z"," elseif is_arr x","   if same v y","    push r z","fn report_html report:obj length"," if is_def length","  check is_uint length"," var pre report_render report","  assign pre txt_cut pre length"," let style \"font-family:monospace;font-size:1.1vw\""," let style to_lit style"," let body_open concat \"<body style=\" style \">\""," let pre concat \"<pre>\" pre \"</pre>\""," let title concat \"<title>\" report.title \"</title>\""," let html arr"," push html \"<!doctype html>\""," push html \"<html>\""," push html \"<head>\""," push html title"," push html \"</head>\""," push html body_open"," push html pre"," push html \"</body>\""," push html \"</html>\""," ret join html","fn report_init error query map"," if is_str error","  let stack error","  let lines split error","  let message front lines","  let errno null","  let error obj stack message errno","  ret report_init error query map"," check is_obj error"," if is_def query","  check is_obj query"," fn log_browser","  let location to_str location","  var referrer null","  if is_full document.referrer","   let url_referer url_parse document.referrer","   let url_location url_parse location","   if different url_referer.host url_location.host","    assign referrer document.referrer","  let browser browser_get","  let agent navigator.userAgent","  let uptime time_now","  let uptime time_delay uptime","  let o obj location referrer browser agent uptime","  let t to_tbl o"," fn log_server","  let url query.url.href","  let headers query.request.headers","  if has headers \"referrer\"","   assign referrer get headers \"referrer\"","  elseif has headers \"referer\"","   assign referrer get headers \"referer\"","  let remote query.remote","  let o obj url referrer remote uptime"," fn log_trace","  if is_empty traces","  flower \"trace\"","  forof traces","   log \">\" v"," fn log_backtrace stack:str map:obj","  let backtrace dbg_backtrace stack map","  if is_empty backtrace","  tbl_remove_column backtrace \"njs\"","  tbl_remove_column backtrace \"js\"","  let backtrace tbl_render backtrace","  let backtrace txt_prepend backtrace \"> \"","  flower \"backtrace\"","  log backtrace"," let stack error.stack"," let message error.message"," let type error.constructor.name"," let type to_lower type"," let title arr app"," if same type \"error\""," if same type \"object\"","  push title type"," push title message"," if is_browser","  push title location.hostname"," elseif is_node","  let errno error.errno","  if is_undef errno","  elseif is_null errno","  elseif same errno 0","   let errno concat \"errno=\" errno","   push title errno","  let host os_host","  push title host"," let title join title \" / \""," var browser \"\""," var server \"\""," let cs capture dbg_origin_xs stack \"cs\" map"," let backtrace capture log_backtrace stack map"," let js capture dbg_origin_xs stack \"js\" map"," var empty true","  assign browser capture log_browser","  assign empty false"," if is_obj query","  assign server capture log_server"," if is_full trace"," if is_full cs"," if is_full backtrace"," if gt verbose 0","  if is_full js","   assign empty false"," if empty","  trace \"No error stack.\""," let trace capture log_trace"," ret obj title app message browser server trace cs backtrace js","fn report_log report:obj"," flower report.title"," if is_full report.browser","  log report.browser"," if is_full report.server","  log report.server"," if is_full report.trace","  log report.trace"," if is_full report.cs","  log report.cs"," if is_full report.backtrace","  log report.backtrace","  if is_full report.js","   log report.js"," let end space \"end-report\" report.app \"/\" report.message"," flower end","fn report_render report:obj"," let s paren report.title"," let s space \"An error has occured\" s"," let s concat s \".\""," push a s","  push a \"\"","  push a report.browser","  push a report.server","  push a report.trace","  push a report.cs","  push a report.backtrace"," if is_full report.js","  push a report.js","gn resolve x:obj"," var done false"," var error null"," fn on_then x:def","  assign result x","  assign done true"," fn on_catch x","  check is_obj x","  assign error x"," let promise x.then on_then"," promise.catch on_catch"," while not done","  yield"," if is_obj error","  throw error"," ret result","fn reverse x:vec","  let r explode x","  reverse r","  let r implode r","  x.reverse","fn round x:num"," ret Math.round x","fn salt x:str y","  ret salt x \"azertyuiop\""," let a1 explode x"," let a2 explode y"," while is_full a1","  if is_empty a2","   let a explode y","   append a2 a","  let c1 shift a1","  let c2 shift a2","  let n1 asc c1","  let n2 asc c2","  let n xor n1 n2","fn same x y"," ret inline \"x===y\"","fn scan x:str reducer delimiter"," if is_undef reducer","  ret scan x is_token"," check is_fn reducer"," if is_undef delimiter","  ret scan x reducer is_fragment"," check is_fn delimiter"," fn group x:arr reducer:fn","  let fragments dup x","  while is_full fragments","   let a reduce fragments reducer","   if is_full a","    let s implode a","    push r s","    shift fragments a.length","    let s shift fragments"," fn reduce x:arr reducer:fn","  check is_fn reducer","  check is_full x","  let r dup x","  while is_full r","   let s implode r","   if reducer s"," let a delimit x delimiter"," ret group a reducer","fn set x:obj y:str z","fn shift x:arr y","  ret shift x 1","  let r front x","  remove x 0 1"," remove x 0 y","fn shuffle x:arr","  let n random a.length","  let v at a n","  remove a n","fn silent x:fn y:etc"," let previous verbose"," assign verbose sub verbose 2"," var r null","  assign verbose previous"," assign verbose previous","gn sleep x:num"," let start time_now","  let elapsed time_now","  let elapsed sub elapsed start","  if gte elapsed x","fn slice_l x:vec y:uint"," ret slice x 0 y","fn slice_r x:vec y:uint"," ret slice x n y","fn slice x:vec index:uint length"," check lte index x.length"," if is_undef length","  let n sub x.length index","  ret slice x index n"," check is_uint length"," check lte length x.length"," let n add index length"," check lte n x.length"," let r x.slice index n"," check same r.length length","fn sort x:container y","   x.sort","   check is_fn y","   x.sort y","  fn compare x:obj y:obj","   ret cmp x.key y.key","   ret sort x compare","  check is_fn y","  forin x","   let key k","   let value get x k","   let o obj key value","  sort a y","   let k v.key","   put r v.key v.value","fn space x:etc"," ret join x \" \"","fn split x:str y","  ret split x \"\\n\"","  ret arr"," ret x.split y","fn stop x","  ret stop \"stop\""," throw new Error x","fn str_indent x:str"," if is_blank x","  ret 0"," let s trim_l x"," ret sub x.length s.length","fn str_unindent x:str"," while is_indented r","  forof split r","   if is_empty v","   let s slice v 1","  assign r join a","fn strip_l x:str y:str"," if match_l x y","  let n sub x.length y.length","  ret slice_r x n"," ret x","fn strip_r x:str y:str"," if match_r x y","  ret slice_l x n","fn sub x:num y:num z:etc"," let r inline \"x-y\"","  ret sub r z:etc","fn tail x:vec y:uint"," ret slice_r x y","fn tbl_column x:arr y:str","  let s get v y","  push r s","fn tbl_columns x:arr"," let first front x"," ret obj_keys first","fn tbl_index x:arr","  let v obj_unshift v \"#\" n","fn tbl_init x"," ret arr","fn tbl_pad_l x:arr y:str z","  var length 0","   var cell get v y","   if not is_str cell","    assign cell json_encode cell","   assign length max length cell.length","  ret tbl_pad_l x y length","  let cell get v y","  let cell pad_l cell \" \" z","  log y","  dump cell","  set v y cell","fn tbl_remove_column x:arr y:str"," let t dup x"," forof t","  let v obj_remove v y","fn tbl_rename_column x:arr y:str z:str","  let row v","  let o obj","  forin row","   let v get row k","   if same k y","    put o z v","   put o k v","  push x o","fn tbl_render x:arr"," fn stringify_tbl x:arr","   let row dup v","   forin v","    let v get row k","    if is_str v","    let s json_encode v","    set row k s","   push r row"," fn pad_column x:arr","   if is_num v","    let s to_fixed v","    push a s","   elseif is_str v","    stop","   assign length max length v.length","   if is_numeric v","    let s pad_l v \" \" length","    let s pad_r v \" \" length"," let tbl stringify_tbl x"," let titles tbl_columns tbl"," let columns arr"," forof titles","  let title v","  let column tbl_column tbl title","  unshift column title","  let column pad_column column","  push columns column"," var length 0"," forof columns","  let column v","  var n 0","  forof column","   assign n max n v.length","  assign length add length n"," assign length add length columns.length"," assign length dec length"," let separator repeat \"-\" length"," push a separator"," let header arr","  let s shift v","  push header s"," let s join header \" \""," let first front columns"," for first","  let line arr","  forof columns","   let s at v i","   push line s","  let s join line \" \"","fn time_delay x:num"," if lt x 10","  let n to_fixed x","  ret concat n \"s\""," if lt x minute","  let n trunc x"," if lt x hour","  let n div x minute","  ret concat n \"m\""," if lt x day","  let n div x hour","  ret concat n \"h\""," if lt x month","  let n div x day","  ret concat n \"d\""," if lt x year","  let n div x month"," let n div x year"," let n trunc n"," ret concat n \"y\"","fn time_get"," let n Date.now"," ret div n 1000","fn time_hn x:num"," let now time_get"," if same x now","  ret \"now\""," if gt x now","  let n sub x now","  let s time_delay n","  ret concat \"in \" s"," let n sub now x"," let s time_delay n"," ret concat s \" ago\"","fn time_interval x:fn y","  ret time_interval x 0"," let fn on x"," let n mul y 1000"," setInterval fn n","fn time_now"," let n time_get"," ret sub n start","fn time_str x second","  ret time_str n second"," if is_undef second","  ret time_str x false"," let h o.getHours"," let h pad_l h \"0\" 2"," let m o.getMinutes"," let r concat h \"h\" m \"m\""," if not second"," let s o.getSeconds"," let s pad_l s \"0\" 2"," ret concat r s \"s\"","fn time_timeout x:fn y z:etc","  ret time_timeout x 0.01 z:etc"," check is_num y"," let fn on x z:etc"," setTimeout fn n","fn to_base36 x:uint"," ret x.toString 36","fn to_dump x"," let val clone x"," if is_arr val","  if is_empty val","   ret \"arr\"","  push a \"arr\"","  for val","   let sharp concat \"#\" i","   if is_ln s","    let s space \"\" sharp s","    let s2 space \"\" sharp","    let s indent s 2","    push a s2","  push a \"end\"","  ret join a"," elseif is_obj val","   ret \"obj\"","  push a \"obj\"","  forin val","   let v get val k","   var key k","   if not is_word key","    assign key to_lit key","    let s space \"\" key s","    let s2 space \"\" key"," elseif is_word val","  ret to_lit val"," elseif is_fn val","  ret space \"fn\" val.name","  ret json_encode val","fn to_fixed x:num y","  ret to_fixed x 2"," let a x.toFixed y"," let a split a \".\""," let integer front a"," var float back a"," let digits explode float"," while is_full digits","  let c back digits","  if different c \"0\"","  drop digits"," if is_empty digits","  ret integer"," assign float implode digits"," ret concat integer \".\" float","fn to_i x:str"," ret Number.parseInt x","fn to_int x:str"," let r to_num x"," check is_int r","fn to_json x:def"," ret json_encode x","fn to_lit x:str","fn to_lower x:str"," ret x.toLowerCase","fn to_num x:str"," let r json_decode x"," check is_num r","fn to_str x:def"," ret x.toString","fn to_tbl x:obj","  let key k","  let value get x k","  let o obj key value","fn to_uint x:str"," let r to_int x"," check is_uint r","fn to_upper x:str"," ret x.toUpperCase","fn trace x:etc"," if is_single x","  let first front x","  if is_str first","   let a split first","   if is_many a","    forof a","     trace v","  log \"trace>\" x:etc"," elseif same verbose 0","   if not is_str v","  push traces s","  if gt traces.length 64","   shift traces","fn trim_l x:str"," ret x.trimStart","fn trim_r x:str"," ret x.trimEnd","fn trim x:str"," ret x.trim","fn trunc x:num"," ret Math.trunc x","fn tty_width","  if is_batch","   ret 140","  ret process.stdout.columns","  ret 80","fn txt_compact x","  let a split x","  let a txt_compact a"," let s join x"," let a split s","  let first front a","  let first trim_r first","  if is_empty first","  if not is_empty v","  let last back r","  if is_empty last","fn txt_cut x y","  check is_uint y","  let a txt_cut a y","  let s head v y","fn txt_indent x","  let a txt_indent a","   push r s","   let s concat \" \" s","fn txt_prepend x y","  let a txt_prepend a y","  let s concat y v","fn unaccent x:str"," let r replace x \"à\" \"a\""," let r replace r \"â\" \"a\""," let r replace r \"ä\" \"a\""," let r replace r \"æ\" \"ae\""," let r replace r \"ç\" \"c\""," let r replace r \"é\" \"e\""," let r replace r \"è\" \"e\""," let r replace r \"ê\" \"e\""," let r replace r \"ë\" \"e\""," let r replace r \"î\" \"i\""," let r replace r \"ï\" \"i\""," let r replace r \"ô\" \"o\""," let r replace r \"ö\" \"o\""," let r replace r \"œ\" \"oe\""," let r replace r \"ù\" \"u\""," let r replace r \"û\" \"u\""," let r replace r \"ü\" \"u\""," let r replace r \"ÿ\" \"y\""," let r replace r \"À\" \"A\""," let r replace r \"Â\" \"A\""," let r replace r \"Ä\" \"A\""," let r replace r \"Æ\" \"AE\""," let r replace r \"Ç\" \"C\""," let r replace r \"É\" \"E\""," let r replace r \"È\" \"E\""," let r replace r \"Ê\" \"E\""," let r replace r \"Ë\" \"E\""," let r replace r \"Î\" \"I\""," let r replace r \"Ï\" \"I\""," let r replace r \"Ô\" \"O\""," let r replace r \"Ö\" \"O\""," let r replace r \"Œ\" \"OE\""," let r replace r \"Ù\" \"U\""," let r replace r \"Û\" \"U\""," let r replace r \"Ü\" \"U\""," let r replace r \"Ÿ\" \"Y\"","fn unshift x:arr y"," x.unshift y","fn unwrap x:str","  ret json_decode x","  ret split x \".\"","  ret split x \":\"","fn url_beautify x:str"," let r strip_l x \"http://\""," let r strip_l r \"https://\""," let r path_unfix r","fn url_get x:etc","  ret http_get x:etc","  ret xhr_get x:etc","fn url_parse x:str"," let url new URL x"," let href url.href"," let protocol strip_r url.protocol \":\""," let user url.username"," let password url.password"," let host url.hostname"," let port url.port"," let path url.pathname"," let hash url.hash"," let args obj"," forof url.searchParams.keys","  var value url.searchParams.get v","  if is_json value","   assign value json_decode value","  put args v value"," ret obj href protocol user password host port path args hash","gn wait","fn xor x:num y:num z:etc"," let r inline \"x^y\"","  ret xor r z:etc","fn app_list"," forof dir_read \"src\" true","  let base path_base v","  let a split base \"-\"","  let prefix shift a","  if different prefix \"app\"","  let name join a \"-\"","  push r name","fn beep"," os_detach \"play\" \"-n\" \"synth\" 0.1 \"sine\" 880 \"vol\" 0.5","fn deinit_node"," fn dir_empty x:str","  let paths dir_read x true","  ret is_empty paths"," let tmp path_tmp"," let tmp path_dir tmp"," fs_remove tmp"," let app path_up tmp"," if dir_empty app","  fs_remove app"," let week mul 7 24 60 60"," forof dir_load \"tmp\" true","  let modified fs_modified v","  let now time_get","  let age sub now modified","  if lt age week","  let dir dir_current","  let dir path_fix dir","  let path strip_l v dir","  let path to_lit path","  let path concat \"path=\" path","  let age time_delay age","  let age to_lit age","  let age concat \"age=\" age","  if is_dir v","   if dir_empty v","    fs_remove v","  elseif is_file v","   fs_remove v","  log \"remove\" path age"," dir_change cwd","fn digest x:str"," file_save tmp x"," let r os_execute \"sha256sum\" \"--binary\" tmp"," let r split r \" \""," let r front r","fn dir_call x:str y:fn z:etc"," let dir dir_current"," dir_change x","  assign r y z:etc"," dir_change dir","fn dir_change x:str"," process.chdir x","fn dir_current"," ret process.cwd","fn dir_find x:str y:str"," forof dir_load x","  if match base y","fn dir_load x:str with_dirs"," if is_undef with_dirs","  ret dir_load x false"," check is_bool with_dirs"," forof dir_read x true","  if is_file v","  elseif is_dir v","   if with_dirs","   let a dir_load v with_dirs","   append r a","fn dir_make x:str"," let recursive true"," let option obj recursive"," fs.mkdirSync x option","fn dir_read x:str with_dirs","  ret dir_read x false"," let dir path_real x"," let a fs.readdirSync dir"," sort a","  let s path_concat dir v","  if is_file s","  if with_dirs","   if is_dir s","fn dir_reset x:str"," fs_remove x"," dir_make x","fn dir_size x:str","  let n file_size v","  assign r add r n","fn file_append x:str y:str"," fs.appendFileSync x y","fn file_load x:str"," let r file_read x","fn file_read x:str"," let o fs.readFileSync x"," ret o.toString","fn file_save x:str y:str"," if is_file x","  let s file_load x","  if same s y"," let dir path_dir x"," if not is_dir dir","  dir_make dir"," let content trim_r y"," file_write x content","fn file_size x:str"," let v fs.statSync x"," ret v.size","fn file_write x:str y:str"," fs.writeFileSync x y","fn fs_copy x:str y:str","  if is_dir y","   let base path_base x","   let path path_concat y base","   fs_copy x path"," let force true"," let o obj force recursive"," fs.cpSync x y o","fn fs_modified x:str"," let r fs.statSync x"," let r div r.mtimeMs 1000","fn fs_remove x:str"," fs.rmSync x o","gn http_get url:str with_headers"," if is_undef with_headers","  ret run http_get url false"," var result \"\""," var headers obj"," fn get_module url:str","  let s to_lower url","  if match_l s \"http:\"","   ret http","  elseif match_l s \"https:\"","   ret https"," fn on_request response:obj","  forin response.headers","   var v get response.headers k","    assign v to_num v","   put headers k v","  let on_data on on_data","  let on_end on on_end","  response.on \"data\" on_data","  response.on \"end\" on_end"," fn on_data x:obj","  let s to_str x","  assign result concat result s"," fn on_end"," fn on_error x:obj"," let module get_module url"," let request module.get url on_request"," let on_error on on_error"," request.on \"error\" on_error","  if done","  if is_obj error","   throw error"," if is_json result","  assign result json_decode result"," if with_headers","  ret obj result headers","fn init_node"," fn on_uncaught_exception error:obj message:str","  try","   let report report_init error","   assign report.title space report.title \"/\" message","   report_log report","   if is_remote","    report_mail report","   deinit_common","  catch e","   fallback_error \"on-uncaught-exception\" e error","  assign zombie true","  process.exit 1"," assign global.binary process.execPath"," assign global.cp require \"child_process\""," assign global.crypto require \"crypto\""," assign global.fs require \"fs\""," assign global.http require \"http\""," assign global.https require \"https\""," assign global.os require \"os\""," assign global.path require \"path\""," assign global.tls require \"tls\""," assign global.tty require \"tty\""," assign global.util require \"util\""," process.on \"uncaughtExceptionMonitor\" on_uncaught_exception"," dir_make tmp","fn inspect x color"," if is_undef color","  let color is_color","  ret inspect x color"," check is_bool color"," let showHidden false"," let depth null"," let colors color"," let maxArrayLength null"," let maxStringLength null"," let o obj showHidden depth colors maxArrayLength maxStringLength"," ret util.inspect x o","fn ip_host x:str"," let r silent os_execute \"host\" x"," let r back r"," if contain r \"not found\"","  ret null"," let r strip_r r \".\"","fn ip_list"," let s os_execute \"hostname\" \"--all-ip-addresses\""," ret split s \" \"","fn ip_v4"," forof ip_list","  if is_ip4 v","   ret v","fn ip_v6","  if is_ip6 v","fn is_batch"," if not is_node"," ret not is_interactive","fn is_color"," if color"," if is_interactive","fn is_dir x"," let throwIfNoEntry false"," let o obj throwIfNoEntry"," let o fs.statSync x o"," if is_undef o"," ret o.isDirectory","fn is_file x"," ret o.isFile","fn is_fs x"," ret is_def o","fn is_interactive"," ret process.stdout.isTTY","fn is_readable x","  var fd null","   assign fd fs.openSync x","  catch","  let n file_size x","  if gt n 0","   let buffer Buffer.alloc 1","   try","    fs.readSync fd buffer","   catch","    fs.closeSync fd","    ret false","  fs.closeSync fd"," elseif is_dir x","   fs.readdirSync x","fn mail to:str subject:str body:str from"," check is_str to"," check is_str subject"," check is_str body"," if is_undef from","  ret mail to subject body \"mabynogy@gmail.com\""," let token app_token \"mabynogy\""," let cfg arr"," push cfg \"account gmail\""," push cfg \"host smtp.gmail.com\""," push cfg \"port 587\""," push cfg \"protocol smtp\""," push cfg \"auth on\""," let s space \"from\" from"," push cfg s"," let s space \"user\" from"," let s space \"password\" token"," push cfg \"tls on\""," push cfg \"tls_starttls on\""," push cfg \"tls_trust_file /etc/ssl/certs/ca-certificates.crt\""," push cfg \"account default: gmail\""," let body2 arr"," let s concat \"from:\" from"," push body2 s"," let s concat \"to:\" to"," let s concat \"subject:\" subject"," push body2 \"mime-version:1.0\""," push body2 \"content-type:text/html;charset=utf-8\""," push body2 \"\""," push body2 body"," let cfg join cfg"," let body join body2"," let cfg_path path_tmp \"msmtp.txt\""," let body_path path_tmp \"body.txt\""," file_save cfg_path cfg"," file_save body_path body"," let option_file concat \"--file=\" cfg_path"," os_system \"chmod\" 600 cfg_path"," let s os_shell \"msmtp\" \"--debug\" option_file \"--read-recipients\" \"<\" body_path"," let s txt_prepend s \" > \""," fs_remove cfg_path"," fs_remove body_path","fn open x:str"," os_system \"xdg-open\" x","gn os_capture x y:etc"," var closed false"," var status null"," var out \"\""," var err \"\""," fn on_out x:obj","  write s","  assign out concat out s"," fn on_err x:obj","  assign err concat err s"," fn on_close x","  if is_null x","  elseif is_uint x","  assign status x","  assign closed true"," let child cp.spawn x y"," fn on_sigint x:str","  child.kill x"," sigint on_sigint"," let on_out on on_out"," let on_err on on_err"," let on_close on on_close"," let stdout child.stdout"," let stderr child.stderr"," stdout.on \"data\" on_out"," stderr.on \"data\" on_err"," child.on \"close\" on_close"," while not closed"," let out trim_r out"," let err trim_r err"," os_log os_capture status x y:etc"," ret obj status out err","fn os_detach x:str y:etc"," let detached true"," let stdio \"ignore\""," let o obj detached stdio"," let r cp.spawn x y o"," r.unref","fn os_execute x:etc"," let o os_run x:etc"," let status o.status"," let out o.out"," let err o.err"," var display false"," if is_full err","  if same status 0","   let a slice_l x 2","   trace a:etc","  let s txt_prepend err \" err> \"","  trace s"," if is_full out","  push a out","  push a err"," let s join a"," ret trim_r s","fn os_home"," if is_root","  let name os_execute \"logname\"","  if contain name \" \"","  ret path_concat \"/home\" name"," ret os.homedir","fn os_host"," ret os.hostname","fn os_log call:xn status:int args:etc"," if same status 0"," var command front args"," var subcommand false"," if is_many args","  if same command \"sudo\"","   assign subcommand true","  elseif same command \"time\""," if subcommand","  let s at args 1","  assign command space command s"," let call replace call.name \"_\" \"-\""," let command to_lit command"," let status concat \"status=\" status"," trace call command status","gn os_prompt x:str y:etc"," let name x"," let err \"\""," let buffer obj out err"," fn print key:str str:str","  let n tty_width","  var s get buffer key","  assign s concat s str","  set buffer key s","  if not match_r s \"\\n\"","  let s strip_r s \"\\n\"","  let s txt_prepend s key","  let s txt_cut s n","  set buffer key \"\"","  print \"out\" s","  print \"err\" s"," if is_full buffer out","  print \"out\" \"\\n\""," if is_full buffer err","  print \"err\" \"\\n\""," os_log os_prompt status x y:etc"," ret status","fn os_ps"," let s os_execute \"ps\" \"aux\""," shift a","  let s replace_rec v \"  \" \" \"","  let pid at a 1","  let pid to_uint pid","  let path at a 10","  let args slice a 11","  let o obj pid path args","fn os_run x:str y:etc"," let maxBuffer mul 1 1024 1024 1024"," let encoding \"utf8\""," let option obj maxBuffer encoding"," let process cp.spawnSync x y option"," let out to_str process.stdout"," let err to_str process.stderr"," let status process.status"," os_log os_run status x y:etc","fn os_shell x:etc"," let command join x \" \""," ret cp.execSync command option","fn os_system x:str y:etc"," let stdio \"inherit\""," let o obj stdio"," let o cp.spawnSync x y o"," let r o.status"," os_log os_system r x y:etc","fn os_user"," let o os.userInfo"," ret o.username","fn path_base x:str"," ret path.basename x","fn path_dir x:str"," ret path.dirname x","fn path_ext x:str"," let s path.extname x"," ret strip_l s \".\"","fn path_real x:str"," ret fs.realpathSync x","fn path_tmp x","  ret path_tmp \"tmp.txt\""," let pid to_str process.pid"," let dir path_split x"," pop dir"," let dir path_join dir"," let dir path_concat \"tmp\" app pid dir"," let dir path_strip dir"," let file path_file x"," let ext path_ext x","  let id random","  let id to_base36 id","  let id head id 6","  var base concat file \"-\" id","  if is_full ext","   assign base concat base \".\" ext","  let r path_concat dir base","  if not is_file r","fn report_mail report:obj"," let html report_html report 73"," mail author report.title html","fn sigint x:fn"," let callback value x"," fn on_sigint x:str n:uint","  let pid concat \"pid=\" process.pid","  let signal concat \"signal=\" x","  let n concat \"n=\" n","  log app pid signal n","  callback x"," let on_sigint on on_sigint"," process.once \"SIGINT\" on_sigint","gn ssh_execute x:etc"," ret run ssh_pass x:etc","gn ssh_pass x:etc"," let args dup x"," let first shift args"," if is_str first","  ret run ssh_pass os_execute x:etc"," let arguments arr \"sshpass\" \"-p\" args:etc"," if is_fn first","  ret first arguments:etc"," elseif is_gn first","  ret run first arguments:etc","gn ssh_system x:str y:etc"," let r run ssh_pass x y:etc"," let a split r"," if is_full a","  log y:etc","  let a txt_prepend a \" > \"","  let s join a","fn sudo_save path:str data:str"," let base path_base path"," let tmp path_tmp base"," file_save tmp data"," os_system \"sudo\" \"mv\" \"--force\" tmp path","fn write x:str"," process.stdout.write x","fn app_token x:str"," let home os_home"," let path concat \".\" x"," let r path_concat home path"," let r file_load r"," let r base36_decode r"," let r salt r","fn init_server"," assign global.login_vps \"debian@mabynogy.org\""," assign global.author \"marc@abiven.eu\"","fn is_local"," let host os_host"," ret same host \"castle\"","fn is_remote"," ret not is_local","fn is_root"," let s os_user"," ret same s \"root\"","fn mnt_clean x:str"," if is_readable x","  mnt_unmount x","  fs_remove x","fn mnt_unmount x"," ret os_execute \"fusermount\" \"-u\" x","fn app_home x:str"," let lines arr"," let js app_make x"," let js replace js \"</script>\" \"<\\\\/script>\""," push lines \"<!doctype html>\""," push lines \"<html>\""," push lines \"<head>\""," push lines \"<meta charset=\\\"utf-8\\\">\""," push lines \"</head>\""," push lines \"<body>\""," push lines \"<script>\""," push lines js"," push lines \"</script>\""," push lines \"</body>\""," push lines \"</html>\""," ret join lines","fn app_make x:str"," let cpl cpl_init x"," let s to_lit x"," log \"make\" s"," cpl_include cpl"," let r cpl_generate cpl"," let tmp concat x \"-tmp.js\""," let tmp path_tmp tmp"," file_save tmp r"," let success cpl_check_syntax cpl tmp"," check success"," cpl_deinit cpl","fn ast_assign cpl:obj args:arr children:arr source:obj"," check is_empty children"," let left front args"," check is_name left"," let right slice args 1"," let right expr_right right:etc"," let code concat left \"=\" right"," ret obj code source","fn ast_begin cpl:obj args:arr children:arr source:obj"," check is_empty args"," let r call_ast_block cpl children source"," if cpl_is_leaf cpl children","  check is_single r","  let node front r","  assign node.code trim node.code","fn ast_brk cpl:obj args:arr children:arr source:obj"," let code \"break\"","fn ast_call cpl:obj args:arr children:arr source:obj"," check is_full args"," let code expr_call args:etc","fn ast_catch cpl:obj args:arr children:arr source:obj"," let block call_ast_block_top cpl children source"," if is_empty args","  let code \"catch\"","  let node obj code source","  push r node","  append r block"," check is_single args"," let identifier front args"," check is_identifier identifier"," let code paren identifier"," let code concat \"catch\" code"," let node obj code source"," push r node"," append r block","fn ast_check cpl:obj args:arr children:arr source:obj"," let code join args \",\""," let code paren code"," let code concat \"check\" code","fn ast_cont cpl:obj args:arr children:arr source:obj"," let code \"continue\"","fn ast_else cpl:obj args:arr children:arr source:obj"," let code \"else\""," let block call_ast_block cpl children source","fn ast_elseif cpl:obj args:arr children:arr source:obj"," ret call_ast_if cpl args children source \"else if\"","fn ast_fn cpl:obj args:arr children:arr source:obj"," ret call_ast_xn cpl args children source \"function\"","fn ast_forin cpl:obj args:arr children:arr source:obj"," ret call_ast_for cpl args children source \"k in\"","fn ast_fornum cpl:obj args:arr children:arr source:obj"," let code expr_right args:etc"," let code concat \"let i=0;i<\" code \";i++\""," let code concat \"for\" code","fn ast_forof cpl:obj args:arr children:arr source:obj"," ret call_ast_for cpl args children source \"v of\"","fn ast_gn cpl:obj args:arr children:arr source:obj"," ret call_ast_xn cpl args children source \"function*\"","fn ast_if cpl:obj args:arr children:arr source:obj"," ret call_ast_if cpl args children source \"if\"","fn ast_include cpl:obj args:arr children:arr source:obj"," let path front args"," check is_lit path"," let path unwrap path","fn ast_inline cpl:obj args:arr children:arr source:obj"," let code front args"," check is_lit code"," let code unwrap code","fn ast_let cpl:obj args:arr children:arr source:obj"," check is_many args"," ret call_ast_declare cpl args children source \"const\"","fn ast_ret cpl:obj args:arr children:arr source:obj"," var code \"\"","  assign code \"return\"","  let right expr_right args:etc","  assign code space \"return\" right","fn ast_run cpl:obj args:arr children:arr source:obj"," let code space \"yield*\" code","fn ast_throw cpl:obj args:arr children:arr source:obj"," let code space \"throw\" code","fn ast_try cpl:obj args:arr children:arr source:obj"," let code \"try\"","fn ast_var cpl:obj args:arr children:arr source:obj"," ret call_ast_declare cpl args children source \"let\"","fn ast_while cpl:obj args:arr children:arr source:obj"," let code concat \"while\" code","fn ast_yield cpl:obj args:arr children:arr source:obj","  let code \"yield\"","  ret obj code source"," let code space \"yield\" code","fn call_ast_block_top cpl:obj children:arr source:obj"," forof cpl_block cpl children","  let o dup v","  assign o.code indent o.code"," let code \"{\""," let open obj code source"," let code \"}\""," let close obj code source"," unshift r open"," push r close","fn call_ast_block cpl:obj children:arr source:obj"," if not cpl_is_leaf cpl children","  let code \"{\"","  let open obj code source","  let code \"}\"","  let close obj code source","  unshift r open","  push r close","fn call_ast_declare cpl:obj args:arr children:arr source:obj keyword:str"," let code slice args 1"," let code expr_right code:etc"," let code concat identifier \"=\" code"," let code space keyword code","fn call_ast_for cpl:obj args:arr children:arr source:obj keyword:str"," let code space \"const\" keyword code","fn call_ast_if cpl:obj args:arr children:arr source:obj keyword:str"," let code concat keyword code","fn call_ast_xn cpl:obj args:arr children:arr source:obj keyword:str"," fn get_argument x:str","  if is_identifier x","  if is_tuple x","   let a unwrap x","   check is_pair a","   let name front a","   let etc back a","   check is_identifier name","   check same etc \"etc\"","   ret concat \"...\" name"," let name front args"," check is_name name"," let args slice args 1"," let parameters map args get_argument"," forof parameters","  let n count parameters v","  if same n 1","  let arg to_lit v","  let message space \"Argument\" arg \"defined\" n \"times\"","  stop message"," let parameters join parameters \",\""," let list paren parameters"," let code concat name list","fn cpl_block x:obj y:arr","  let a cpl_translate x v","  append r a","fn cpl_check_syntax cpl:obj path"," if is_undef path","  ret cpl_check_syntax cpl cpl.target"," check is_str path"," let o os_run binary \"--trace-uncaught\" \"--trace-deprecation\" \"--check\" path"," check is_empty o.out"," if same o.status 0","  check is_empty o.err"," check cpl_log_error cpl o.err path","fn cpl_check x:obj y:arr"," fn visit nodes:arr","  forof nodes","   if not is_xn v.operator","    let node dup v","    assign node.children visit node.children","    push r node","   let node instrument v","   push r node"," fn instrument node:obj","  let r dup node","  let name front r.args","  let parameters slice r.args 1","  let arity get_arity parameters","  let operator \"check_arity\"","  let count to_str arity.count","  let s_operator to_lit arity.operator","  let args arr s_operator \"arguments.length\" count","  let children arr","  let source dup r.source","  let node obj operator args children source","  unshift r.children node","  reverse parameters","  clear r.args","  forof parameters","   if is_identifier v","    unshift r.args v","   check is_tuple v","   let a unwrap v","   let identifier at a 0","   let type at a 1","   if same type \"etc\"","   unshift r.args identifier","   let s_identifier to_lit identifier","   let s_type to_lit type","   let is concat \"is_\" type","   let operator \"check_arg\"","   let args arr is identifier s_identifier s_type","   let children arr","   let source dup r.source","   let node obj operator args children source","   unshift r.children node","  unshift r.args name","  assign r.children visit r.children"," fn get_arity args:arr","  var operator \"same\"","  var count 0","  forof args","   if is_tuple v","    let a unwrap v","    let type at a 1","    if same type \"etc\"","     assign operator \"gte\"","   elseif is_identifier v","    assign operator \"gte\"","   assign count inc count","  ret obj operator count"," fn is_xn x","  if same x \"fn\"","  if same x \"gn\""," ret visit y","fn cpl_compile x:obj y:str"," let nodes cpl_load x y"," if is_full nodes","  let fn path_file y","  let fn replace fn \"-\" \"_\"","  push x.fns fn"," let nodes cpl_tokenize x nodes"," let nodes cpl_fold x nodes"," var nodes nodes","  assign nodes cpl_check x nodes","  assign nodes cpl_for x nodes","  assign nodes cpl_scope x nodes","  assign nodes cpl_block x nodes","  cpl_dump x"," append x.out nodes","fn cpl_deinit x:obj"," let s json_dump x.cache"," file_save x.path s","fn cpl_dump x:obj"," fn dump_ast x:obj","  let args x.args","  let children x.children","  let a3 arr","  push a2 x.operator","  append a2 args","  forof a2","   if is_token v","    push a3 v","    let s to_lit v","    push a3 s","  let cs space a3:etc","  let source x.source","  let path source.path","  let ncs source.index","  let ncs inc ncs","  let o obj path ncs cs","  forof children","   let t dump_ast v","   forof t","    assign v.cs indent v.cs","   append r t","  if is_full children","   let cs \"end\"","   let o obj path ncs cs","   push r o"," for x.stack","  let frame concat \"#\" n","  let title space \"compiler frame\" frame","  let s dump_ast v","  let s tbl_render s","fn cpl_fold x:obj y:arr"," fn visit x:arr","  let parent shift x","  let indent parent.indent","  let descendants arr","  while is_full x","   let o front x","   if gt o.indent indent","    shift x","    push descendants o","  while is_full descendants","   let o visit descendants","   push children o","  let operator parent.operator","  let args parent.args","  let source parent.source","  ret obj operator args children source"," let nodes dup y"," while is_full nodes","  let o visit nodes","fn cpl_for x:obj nodes:arr","   if different v.operator \"for\"","   let nodes generate v","   append r nodes"," fn generate node:obj","  let args node.args","  let operator \"let\"","  let args arr \"_a\" args:etc","  let source dup node.source","  let node2 obj operator args children source","  push r node2","  let operator \"forin\"","  let args arr \"_a\"","  let children visit node.children","  let node3 obj operator args children source","  push r node3","  let args arr \"v\" \"at\" \"_a\" \"i\"","  let node4 obj operator args children source","  unshift node3.children node4","  let args arr \"i\" \"to_i\" \"k\"","  let node5 obj operator args children source","  unshift node3.children node5"," ret visit nodes","fn cpl_generate x:obj"," let pool arr"," fn get_index x:str","  let r find pool x","  if gte r 0","  let r pool.length","  push pool x"," forof x.out","  push a v.code"," let relatives arr"," let indices arr","  let source v.source","  if not contain paths path","   push paths path","  let n get_index path","  push relatives n","  push indices source.index"," let contents obj"," forof paths","  let key get_index v","  let key to_str key","  let content cpl_uncomment x v","  let value arr","  forof split content","   let index get_index v","   push value index","  put contents key value"," let app to_lit x.app"," let app concat \"const app=\" app"," push a app"," let compile time_get"," let compile trunc compile"," let compile concat \"const compile=\" compile"," push a compile"," let pool json_encode pool"," let pool concat \"const pool=\" pool"," push a pool"," let relatives json_encode relatives"," let relatives concat \"const relatives=\" relatives"," push a relatives"," let indices json_encode indices"," let indices concat \"const indices=\" indices"," push a indices"," let contents json_encode contents"," let contents concat \"const contents=\" contents"," push a contents"," let fns join x.fns \",\""," let fns brace fns"," let fns concat \"const fns=\" fns"," push a fns"," push a \"main()\"","fn cpl_include x:obj"," fn get_files x:arr","   let a dir_load v"," fn get_includes x:str","  let dir get_app_dir x","  let a path_concat dir \"include.txt\"","  let a file_load a","  forof split a","   let s path_concat \"src\" v","  push r dir"," fn get_app_dir x","  let r concat \"src/app-\" x","  if is_dir r","  let r concat \"src/spa-\" x"," let includes get_includes x.app"," let files get_files includes"," forof files","  let ext path_ext v","  if different ext \"cs\"","  cpl_compile x v","fn cpl_init x:str"," let path \"cache.txt\""," fn load_cache","  if is_file path","   ret json_decode s","  ret obj"," let cache load_cache"," let asts fn_select \"ast_\""," let app x"," let fns arr"," let stack arr"," let out arr"," let target concat \"out-\" app \".js\""," ret obj app asts fns files stack out target path cache","fn cpl_is_call x:obj y:str"," if same y \"call\""," forin x.asts","fn cpl_is_leaf x:obj y:arr"," if not is_single y"," let node front y"," let operator node.operator"," if cpl_is_call x operator"," let operators arr \"brk\" \"check\" \"cont\" \"inline\" \"ret\" \"run\" \"throw\" \"yield\""," ret contain operators operator","fn cpl_load x:obj y:str"," let path dir_current"," let path path_concat path \"src\""," let path path_fix path"," let path strip_l y path"," let lines cpl_uncomment x path"," let lines split lines"," for lines","  let index i","  let code v","  let source obj path index","  let o obj code source","fn cpl_log_error cpl:obj err:str path","  ret cpl_log_error cpl err cpl.target"," fn parse_error cpl:obj path:str err:str","  let s txt_compact err","  let lines split s","  let line_js shift lines","  let line_js split line_js \":\"","  let line_js back line_js","  let line_js to_uint line_js","  shift lines 3","  flower message","  let line line_js","  let o obj line path","  if gt line_js cpl.out.length","  let index dec line_js","  let o at cpl.out index","  let source o.source","  let content cpl_uncomment cpl source.path","  let content split content","  let line_cs inc source.index","  let s dbg_origin content line_cs \"\"","  let content dbg_source path","  let s dbg_origin content line_js \"\"","  let stack arr","  let s shift lines","  push stack s","  while is_full lines","   let s shift lines","   let s trim s","   if not match_l s \"at\"","   push stack s","  let stack join stack","  let map cpl_source_map cpl","  let report report_init stack undefined map","  report_log report","  ret parse_error cpl path err","  let report report_init e","  flower report.title","fn cpl_scan cpl:obj str:str"," fn is_complex x","  if contain x \"//\"","  if contain x \"\\\"\""," let s trim str"," if is_complex s","  if has cpl.cache s","   let r get cpl.cache s","   let r dup r","  let r scan s","  let r reject r is_trivia","  let a dup r","  put cpl.cache s a"," let r split s \" \""," let r reject r is_empty","fn cpl_scope x:obj y:arr","  let nodes dup nodes","  while is_full nodes","   let node shift nodes","   var a null","    assign a resolve node nodes","   catch e","    unshift x.stack node","    throw e"," fn resolve node:obj rest:arr","  let operator node.operator","  let source node.source","  let declare operator","  if is_declare operator","   let name front args","   let rvalue slice args 1","   check is_str name","   check is_arr rvalue","   check is_full rvalue","   let operator \"let\"","   let args arr \"_\" rvalue:etc","   let node2 obj operator args children source","   push r node2","   let operator \"begin\"","   let args arr","   let node3 obj operator args children source","   push r node3","   let operator declare","   let args arr name \"_\"","   let node4 obj operator args children source","   push node3.children node4","   if is_full rest","    let operator \"begin\"","    let args arr","    let children visit rest","    let node5 obj operator args children source","    push node3.children node5","    clear rest","  elseif is_for operator","   let args arr \"_\" args:etc","   let args arr \"_\"","   let children visit node.children"," fn is_declare operator","  if same operator \"let\"","  if same operator \"var\""," fn is_for operator","  if same operator \"forof\"","  if same operator \"forin\"","  if same operator \"fornum\"","fn cpl_source_map cpl:obj"," let script path_real cpl.target"," forin cpl.files","  let v get cpl.files k","  let a split v","  put files k a"," forof cpl.out","  let path v.source.path","  let index v.source.index","  let js v.code"," let o obj script files source"," ret dup o","fn cpl_tokenize x:obj y:arr","  let code v.code","  let source dup v.source","  let indent str_indent code","  let args cpl_scan x code","  if is_empty args","  let operator shift args","  if same operator \"end\"","   if is_empty args","  let node obj indent operator args children source","fn cpl_translate x:obj y:obj"," fn translate cpl:obj operator:str args:arr children:arr source:obj","  forin cpl.asts","   if different k operator","   let ast get cpl.asts k","   let r ast cpl args children source","   if is_arr r","    ret r","   check is_obj r","   ret arr r","  let args arr operator args:etc","  let r ast_call cpl args children source","  if is_arr r","  check is_obj r","  ret arr r"," let operator y.operator"," let args y.args"," let children y.children"," let source y.source","  ret translate x operator args children source","  unshift x.stack y","fn cpl_uncomment x:obj y:str"," if has x.files y","  ret get x.files y"," let path path_concat \"src\" y"," let content file_load path"," forof split content","  let indent str_indent v","  let tokens cpl_scan x v","  if is_empty tokens","   push r \"\"","  let indent repeat \" \" indent","  let line join tokens \" \"","  let line concat indent line","  push r line"," put x.files y r","fn expr_arg x:str","  let a unwrap x","  check is_pair a","  let name front a","  let etc back a","  check is_identifier name","  check same etc \"etc\"","  ret concat \"...\" name"," log \"argument\" s","fn expr_arr x:etc"," let args map x expr_arg"," let s join args \",\""," ret bracket s","fn expr_call x:name y:etc"," let args map y expr_arg"," let args join args \",\""," let list paren args"," ret concat x list","fn expr_in x:identifier y:identifier z:etc"," check is_empty z"," ret space y \"in\" x","fn expr_inline x:str"," ret unwrap x","fn expr_instanceof x:name y:identifier z:etc"," ret space x \"instanceof\" y","fn expr_new x:etc"," let rvalue expr_rvalue x:etc"," ret space \"new\" rvalue","fn expr_obj x:etc"," check every x is_identifier"," let s join x \",\""," ret brace s","fn expr_right x y:etc","  if same x \"arr\"","  elseif same x \"obj\"","  elseif same x \"_\"","  elseif same x \"null\"","  elseif same x \"true\"","  elseif same x \"false\"","  elseif is_numeric x","  elseif is_lit x","   let fn to_lit \"function\"","   let condition paren x","   let condition concat \"typeof\" condition \"===\" fn","   let condition paren condition","   let call concat x \"()\"","   ret concat condition \"?\" call \":\" x"," ret expr_rvalue x y:etc","fn expr_run x:etc"," let call expr_call x:etc"," ret space \"yield*\" call","fn expr_rvalue x:etc","  if same first \"arr\"","   ret expr_arr","  elseif same first \"obj\"","   ret expr_obj","   ret first"," let args slice x 1"," if same first \"call\"","  ret expr_call args:etc"," elseif same first \"run\"","  ret expr_run args:etc"," elseif same first \"arr\"","  ret expr_arr args:etc"," elseif same first \"obj\"","  ret expr_obj args:etc"," elseif same first \"value\"","  ret expr_value args:etc"," elseif same first \"new\"","  ret expr_new args:etc"," elseif same first \"in\"","  ret expr_in args:etc"," elseif same first \"instanceof\"","  ret expr_instanceof args:etc"," elseif same first \"inline\"","  ret expr_inline args:etc"," elseif same first \"not\"","  let right paren right","  ret concat \"!\" right","  ret expr_call x:etc","fn expr_value x:str y:etc"," check is_empty y","gn init x:etc"," fn is_app x","  let base concat \"app-\" x","  let path path_concat \"src\" base","  ret is_dir path"," let apps app_list","  dump apps"," let app shift args"," if not is_app app"," var run true"," if extract args \"--compile\"","  assign run false"," let cpl cpl_init app"," let code cpl_generate cpl"," file_save cpl.target code"," if not cpl_check_syntax cpl"," if not run"," let usage_path concat \"usage-\" process.pid \".txt\""," let usage_path path_tmp \"usage.txt\""," let output concat \"--output=\" usage_path"," let time arr \"time\" \"--format=%M\" output"," let arguments arr time:etc binary \"--trace-uncaught\" \"--trace-deprecation\" cpl.target args:etc","  push arguments \"--verbose\""," elseif lt verbose 0","  push arguments \"--quiet\""," if is_color","  push arguments \"--color\""," let o run os_capture arguments:etc"," if different status 0","  let s concat \"status=\" status","  log app s","  if not cpl_log_error cpl err","   let s txt_prepend err \"make-error> \"","   log s"," let usage file_load usage_path"," fs_remove usage_path","  let usage split usage","  let usage back usage","  let usage to_uint usage","  let usage mul usage 1024","  let usage byte_size usage","  let usage to_lit usage","  let usage concat \"usage=\" usage","  log app usage"]
const relatives=[0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,39,39,39,39,39,39,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,43,43,43,43,43,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,48,48,48,48,48,48,48,48,48,48,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,56,56,56,56,56,56,56,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,62,62,62,62,62,62,62,63,63,63,63,63,63,63,63,63,63,63,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,65,65,65,65,65,65,65,66,66,66,66,66,66,66,67,67,67,67,67,67,67,67,67,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,69,69,69,69,69,69,69,69,69,69,70,70,70,70,70,70,71,71,71,71,71,71,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,74,74,74,74,74,74,74,74,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,78,78,78,78,78,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,80,80,80,80,80,80,80,80,80,81,81,81,81,81,81,81,81,81,82,82,82,82,82,83,83,83,83,83,83,83,84,84,84,84,84,84,84,85,85,85,85,85,85,85,85,85,86,86,86,86,86,86,86,86,86,87,87,87,87,87,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,90,90,90,90,90,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,92,92,92,92,92,92,92,92,92,93,93,93,93,93,93,93,94,94,94,94,94,94,94,94,94,94,94,94,94,94,94,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,97,97,97,97,97,98,98,98,98,98,98,98,98,98,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,102,102,102,102,102,102,102,102,102,102,102,103,103,103,103,103,103,103,103,103,103,103,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,106,106,106,106,106,106,106,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,108,108,108,108,108,108,108,109,109,109,109,109,109,109,109,109,109,109,110,110,110,110,110,111,111,111,111,111,111,111,111,111,112,112,112,112,112,112,112,112,112,113,113,113,113,113,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,116,116,116,116,116,116,116,116,116,116,116,117,117,117,117,117,117,117,118,118,118,118,118,118,118,118,118,118,118,118,118,118,118,118,118,119,119,119,119,119,119,119,120,120,120,120,120,120,120,120,120,120,120,120,120,121,121,121,121,121,121,121,121,121,122,122,122,122,122,122,122,122,122,123,123,123,123,123,123,123,123,123,124,124,124,124,124,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,126,126,126,126,126,126,126,127,127,127,127,127,127,127,128,128,128,128,128,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,131,131,131,131,131,131,131,131,131,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,133,133,133,133,133,133,133,133,133,134,134,134,134,134,134,134,134,134,135,135,135,135,135,135,136,136,136,136,136,136,137,137,137,137,137,137,137,137,137,137,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,139,139,139,139,139,139,139,140,140,140,140,140,140,140,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,142,142,142,142,142,142,142,142,142,142,142,142,142,142,142,142,142,142,142,142,142,142,142,142,142,142,142,143,143,143,143,143,143,143,143,143,143,143,143,143,143,143,143,143,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,146,146,146,146,146,147,147,147,147,147,147,147,148,148,148,148,148,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,151,151,151,151,151,151,151,151,151,151,152,152,152,152,152,152,152,153,153,153,153,154,154,154,154,154,154,155,155,155,155,155,155,155,155,155,155,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,158,158,158,158,158,158,158,158,158,158,158,158,158,158,158,158,158,158,158,158,158,158,158,158,158,158,158,158,159,159,159,159,159,159,160,160,160,160,160,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,165,165,165,165,165,165,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,169,169,169,169,169,169,169,169,170,170,170,170,170,170,171,171,171,171,171,171,172,172,172,172,172,172,173,173,173,173,173,173,174,174,174,174,174,174,174,174,174,174,174,174,174,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,178,178,178,178,178,178,178,178,179,179,179,179,179,179,179,179,179,179,179,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,184,184,184,184,184,184,184,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,188,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,193,193,193,193,193,193,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,195,195,195,195,195,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,197,197,197,197,197,197,197,197,197,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,202,202,202,202,202,202,202,203,203,203,203,203,203,203,203,203,203,203,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,206,206,206,206,206,207,207,207,207,207,207,207,207,207,207,208,208,208,208,208,208,208,209,209,209,209,209,209,209,209,209,209,209,209,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,216,216,216,216,216,216,216,216,216,216,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,218,218,218,218,218,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,224,224,224,224,224,224,224,224,224,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,227,227,227,227,227,227,227,227,227,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,230,230,230,230,230,230,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,233,233,233,233,233,233,234,234,234,234,234,234,234,234,234,234,234,234,234,235,235,235,235,235,235,236,236,236,236,236,236,237,237,237,237,237,237,238,238,238,238,238,238,238,238,238,238,238,238,238,239,239,239,239,239,239,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,241,241,241,241,241,241,241,241,241,241,241,241,241,242,242,242,242,242,242,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,244,244,244,244,244,244,245,245,245,245,245,245,246,246,246,246,246,246,247,247,247,247,247,247,248,248,248,248,248,248,248,248,248,248,248,248,248,248,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,254,254,254,254,254,254,254,254,255,255,255,255,255,255,255,255,255,255,255,255,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,257,257,257,257,257,257,257,257,257,257,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,259,259,259,259,259,259,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,262,262,262,262,262,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,266,266,266,266,266,266,267,267,267,267,267,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,272,272,272,272,272,272,272,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,274,274,274,274,274,274,274,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,276,276,276,276,276,276,276,276,276,276,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,278,278,278,278,278,278,278,278,278,278,279,279,279,279,279,279,279,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,287,287,287,287,287,287,287,287,287,288,288,288,288,288,288,288,288,288,288,288,288,288,289,289,289,289,289,289,289,289,289,289,289,289,289,290,290,290,290,290,290,290,291,291,291,291,291,291,291,291,291,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,295,295,295,295,295,295,295,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,298,298,298,298,298,298,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,303,303,303,303,303,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,310,310,310,310,310,310,310,310,310,311,311,311,311,311,311,312,312,312,312,312,312,313,313,313,313,313,313,313,313,313,313,314,314,314,314,314,314,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,316,316,316,316,316,316,316,316,316,316,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,318,318,318,318,318,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,322,322,322,322,322,322,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,324,324,324,324,324,324,325,325,325,325,325,325,325,325,325,326,326,326,326,326,327,327,327,327,327,327,327,327,327,328,328,328,328,328,328,328,328,328,328,328,328,329,329,329,329,329,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,340,340,340,340,340,340,340,340,340,341,341,341,341,341,341,341,341,341,342,342,342,342,342,342,342,342,342,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,344,344,344,344,344,344,344,344,344,345,345,345,345,345,345,345,345,345,346,346,346,346,346,346,346,346,346,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,349,349,349,349,349,349,349,349,349,349,349,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,354,354,354,354,354,354,354,354,354,354,354,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,367,367,367,367,367,367,367,367,367,367,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,387,387,387,387,387,387,387,387,388,388,388,388,388,388,389,389,389,389,389,389,389,389,390,390,390,390,390,390,390,390,390,391,391,391,391,391,391,391,391,391,391,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,393,393,393,393,393,393,393,393,393,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,395,395,395,395,395,395,395,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396]
const indices=[0,0,0,0,1,0,0,0,0,0,0,4,4,4,4,6,7,9,4,4,0,0,0,0,0,0,4,4,4,4,6,7,9,4,4,0,0,0,0,0,3,0,0,0,0,0,0,4,4,4,5,4,0,0,0,0,1,0,0,0,0,0,3,0,0,0,0,0,0,4,4,4,4,6,8,9,11,4,4,0,0,0,0,0,3,4,6,7,9,9,9,9,10,10,10,10,12,13,15,10,10,9,9,0,0,0,0,0,3,3,3,3,4,4,4,4,6,6,7,7,7,7,9,11,11,11,11,12,12,12,12,13,13,13,13,15,16,18,18,18,18,20,18,18,13,13,12,12,11,11,7,7,6,23,4,4,3,3,0,0,0,0,0,3,3,3,3,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,10,8,8,7,7,6,6,5,13,5,3,3,0,0,0,0,0,0,0,4,6,7,9,10,12,0,0,0,0,0,3,0,0,0,0,0,3,0,0,0,0,0,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,9,10,10,10,12,10,9,15,15,16,16,16,16,17,17,17,17,18,18,18,20,18,17,17,16,16,15,23,23,24,24,24,24,25,25,25,25,26,26,26,28,26,25,25,24,24,23,31,31,32,32,32,32,33,33,33,33,34,34,34,36,34,33,33,32,32,31,39,39,39,39,40,40,40,40,41,41,41,43,41,40,40,39,39,7,7,6,6,5,5,4,4,0,0,0,0,0,3,3,3,5,3,0,0,0,0,13,13,13,13,18,19,21,21,21,21,22,22,22,22,23,23,23,23,24,24,24,24,25,25,25,25,26,26,26,26,27,27,27,29,27,26,26,25,25,24,24,23,23,22,22,21,21,13,13,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,0,0,0,1,1,2,3,1,4,4,5,5,5,5,7,8,5,5,4,11,0,0,0,0,0,1,3,0,0,0,0,0,3,0,0,0,0,1,2,4,4,4,4,6,6,6,7,8,10,10,11,11,11,11,13,13,13,13,14,14,15,16,14,19,19,19,21,19,13,24,13,11,11,10,25,25,26,26,26,26,28,28,28,28,29,29,29,29,31,31,32,33,31,36,36,36,38,36,29,29,28,41,28,26,26,25,42,43,6,46,4,4,0,0,0,0,0,0,4,5,7,8,10,0,0,0,0,0,3,3,3,4,5,7,8,10,11,13,14,16,3,19,19,19,19,21,21,21,21,22,22,23,25,22,28,28,28,28,29,29,29,29,30,30,30,30,32,32,32,33,33,33,34,34,35,37,34,40,40,40,40,42,43,40,40,30,30,29,29,28,28,21,46,21,19,19,0,0,0,0,1,0,0,0,0,0,2,3,5,6,8,0,0,0,0,0,0,1,1,1,1,3,3,3,3,4,4,5,4,3,8,3,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,8,6,6,5,5,5,5,5,5,5,5,4,4,4,4,4,25,4,4,4,2,2,1,1,0,0,0,0,0,0,4,5,7,7,7,7,8,8,8,8,9,9,9,9,11,11,12,12,12,12,14,15,16,17,18,19,12,12,11,22,22,22,22,23,23,23,25,23,22,22,9,9,8,8,7,7,0,0,0,0,0,0,1,2,4,5,7,7,7,7,8,8,8,8,9,9,9,9,11,11,12,12,12,12,14,15,16,17,18,19,12,12,11,22,22,22,22,23,23,23,25,23,22,22,9,9,8,8,7,7,0,0,0,0,0,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,8,6,5,5,4,4,3,3,0,0,0,0,1,1,2,2,2,4,2,1,7,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,18,16,15,15,14,14,13,13,12,12,11,11,10,10,9,9,0,0,0,0,1,1,2,2,2,4,2,1,7,9,9,10,10,10,12,10,9,15,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,27,27,28,29,27,32,32,32,32,33,33,33,33,34,34,34,34,35,35,35,35,37,38,40,40,40,40,42,42,43,42,45,46,48,48,48,48,49,49,49,49,51,52,54,54,54,54,55,55,55,55,56,56,56,56,58,59,61,61,61,61,63,64,66,66,66,66,67,67,67,67,68,68,68,68,69,69,69,69,70,70,70,70,71,71,71,73,71,70,70,69,69,68,68,67,67,66,66,61,61,56,56,55,55,54,54,49,49,48,48,40,40,35,35,34,34,33,33,32,32,22,22,22,22,22,76,22,22,22,20,20,19,19,18,18,17,17,0,0,0,0,1,1,2,2,2,4,2,1,7,9,9,10,10,10,12,10,9,15,17,17,17,17,19,19,20,20,20,20,21,21,21,21,23,23,23,24,24,24,25,25,25,26,26,26,27,27,27,28,29,31,21,21,20,20,19,34,17,17,0,0,0,0,1,1,1,1,3,4,6,6,6,8,6,1,1,0,0,0,0,1,1,2,2,2,4,2,1,7,8,10,10,11,11,11,13,11,10,16,18,18,18,18,19,19,19,19,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,25,25,25,25,26,26,26,26,28,28,29,29,29,29,30,30,30,30,32,33,30,30,29,29,28,35,35,36,36,36,36,38,39,36,36,35,40,41,43,43,43,43,44,44,44,44,45,45,45,45,46,46,46,46,47,47,47,47,49,50,47,47,46,46,45,45,44,44,43,43,26,26,25,25,21,21,21,21,21,21,21,21,19,19,18,18,0,0,0,0,0,0,4,5,7,9,10,12,14,14,14,14,14,14,14,14,21,21,21,21,22,22,22,22,24,24,25,26,28,29,31,31,31,31,33,34,31,31,24,37,22,22,21,21,14,40,40,40,40,40,40,40,46,46,46,46,47,47,47,47,49,49,49,49,50,50,50,50,51,51,51,51,53,53,53,53,55,55,55,55,57,57,58,57,59,59,60,61,63,63,64,63,59,67,67,67,67,68,68,68,68,69,69,69,69,71,71,72,71,74,74,74,74,75,75,75,75,77,78,79,79,80,82,79,85,85,85,87,85,75,75,74,74,69,69,68,68,67,67,90,90,90,90,92,92,92,93,92,96,96,96,96,98,98,98,98,99,99,99,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,102,102,102,102,104,102,102,101,101,101,101,101,101,114,114,114,114,115,116,118,114,121,114,101,101,101,101,99,99,98,98,96,96,92,92,90,90,67,67,55,55,53,53,51,51,50,50,49,49,47,47,46,46,40,124,124,124,124,124,124,124,130,130,130,132,130,124,135,135,135,135,138,138,138,138,140,140,140,140,142,142,142,142,143,143,143,143,145,145,146,147,145,149,149,149,149,150,150,150,150,152,152,152,152,153,153,153,153,154,154,154,154,155,155,155,157,155,154,154,153,153,152,152,150,150,149,149,143,143,142,142,140,140,138,138,135,160,160,160,160,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,168,169,163,163,163,163,163,172,163,163,163,160,175,175,175,175,177,178,180,175,175,0,0,0,0,1,1,1,1,3,3,4,5,3,8,8,8,8,9,9,9,9,11,11,11,11,12,12,12,14,12,11,11,17,17,17,17,19,19,19,19,20,20,20,20,21,21,21,21,22,22,22,22,23,23,23,23,25,25,25,25,26,26,26,28,26,25,31,25,23,23,22,22,21,21,20,20,19,19,34,34,34,34,36,36,36,37,37,38,38,38,39,38,37,60,60,60,60,61,61,61,61,62,62,62,62,64,65,67,67,67,67,68,68,68,68,69,69,69,69,71,71,71,72,72,73,72,75,75,75,75,76,76,76,76,77,77,77,77,78,78,78,80,78,77,77,76,76,75,75,69,69,68,68,67,67,62,62,61,61,60,83,60,34,34,19,19,17,17,11,11,9,9,8,8,1,1,0,0,0,0,1,1,1,2,2,3,3,3,3,4,4,4,6,4,3,3,2,7,8,9,10,1,13,13,13,13,15,15,16,15,17,17,18,17,20,20,20,20,21,21,21,21,23,23,24,24,24,24,26,27,24,24,23,30,30,30,32,30,21,21,20,20,13,13,0,0,0,0,0,3,0,0,0,0,0,1,1,1,1,3,3,3,3,4,5,3,9,3,1,1,0,0,0,0,1,2,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,10,8,7,7,6,6,5,5,4,0,0,0,0,0,1,2,4,6,6,6,6,8,8,8,8,9,9,9,9,11,11,12,14,11,17,17,17,17,18,18,18,18,20,20,21,22,20,23,24,18,18,17,17,9,9,8,27,8,6,6,0,0,0,0,1,0,0,0,0,0,0,1,3,3,3,3,5,6,8,3,3,0,0,0,0,1,1,1,1,2,2,2,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,27,27,27,27,28,28,28,28,30,30,31,31,31,31,33,35,31,31,30,38,38,39,39,39,39,41,41,42,42,42,44,42,41,47,47,47,47,49,51,51,51,51,52,52,52,52,54,55,57,52,52,51,51,47,47,39,39,38,60,61,63,28,28,27,66,27,2,2,1,1,0,0,0,0,0,3,3,3,3,5,5,5,5,6,6,6,6,8,6,6,5,11,5,3,3,0,0,0,0,0,3,3,3,3,5,5,5,5,6,6,6,6,8,6,6,5,11,5,3,3,0,0,0,0,0,3,4,6,7,9,0,0,0,0,1,2,4,4,4,4,6,8,8,8,8,10,10,11,11,11,13,11,10,14,15,8,8,4,4,0,0,0,0,0,1,2,3,3,4,4,4,4,6,8,4,4,3,9,10,0,0,0,0,0,0,1,2,4,4,5,5,6,6,6,6,7,7,7,7,8,8,8,8,10,11,8,8,7,7,6,14,6,5,4,18,18,19,19,20,20,20,20,21,21,21,21,23,23,23,23,24,24,24,24,26,26,26,26,27,27,27,27,28,28,28,28,30,31,33,33,33,33,34,34,34,34,36,37,34,34,33,33,28,28,27,27,26,40,26,24,24,23,23,21,21,20,20,19,18,44,44,44,46,44,0,0,0,0,0,0,4,4,4,4,5,6,4,9,4,0,0,0,0,0,3,3,3,3,5,5,5,6,9,5,3,3,0,0,0,0,0,0,4,4,4,4,5,5,5,5,7,9,9,9,9,10,10,11,10,12,13,9,16,9,5,5,4,4,0,0,0,0,0,0,1,1,1,1,3,5,5,5,5,6,6,6,6,7,7,7,7,9,11,12,14,16,16,16,16,17,17,17,17,18,18,18,20,18,17,17,16,16,7,7,6,6,5,5,1,1,0,0,0,0,0,0,4,0,0,0,0,0,0,4,4,4,4,6,6,6,7,6,10,4,4,0,0,0,0,1,1,1,1,3,3,4,4,4,4,6,8,4,4,3,11,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,21,19,18,18,17,17,16,16,15,15,14,14,13,13,1,1,0,0,0,0,0,3,3,3,3,4,4,4,4,5,5,5,5,7,8,10,10,10,12,10,5,5,4,4,3,15,3,0,0,0,0,0,1,1,1,1,3,3,3,3,4,5,7,7,7,9,7,3,12,3,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,5,5,5,6,6,6,6,7,7,7,9,7,6,6,5,12,5,3,3,2,2,1,1,0,0,0,0,0,1,3,0,0,0,0,0,0,1,2,4,5,7,0,0,0,0,0,3,3,3,3,5,5,5,6,6,6,6,8,9,11,6,6,5,14,3,3,0,0,0,0,0,0,4,0,0,0,0,0,0,4,0,0,0,0,0,0,1,2,4,0,0,0,0,0,0,4,4,5,6,7,8,9,10,4,13,0,0,0,0,0,0,0,5,6,8,0,0,0,0,0,3,0,0,0,0,0,3,0,0,0,0,0,3,4,6,8,8,8,8,10,10,10,10,11,11,11,11,13,14,15,15,16,16,16,16,17,17,17,19,17,16,16,15,11,11,10,23,10,8,8,0,0,0,0,1,1,2,4,4,4,4,5,5,5,7,5,4,4,1,8,8,8,9,10,12,12,13,14,12,15,15,16,16,16,16,18,18,18,19,19,19,19,21,21,22,23,21,26,19,19,18,29,16,16,15,0,0,0,0,0,0,4,6,0,0,0,0,1,2,4,5,7,7,7,7,9,10,12,7,7,0,0,0,0,1,2,4,5,7,7,7,7,8,8,8,9,9,9,10,10,10,11,12,7,15,7,0,0,0,0,1,2,4,5,7,7,7,7,8,8,8,9,9,9,10,11,7,14,7,0,0,0,0,1,0,0,0,0,1,2,4,5,7,8,10,11,13,14,16,17,19,0,0,0,0,1,2,4,5,7,0,0,0,0,1,1,1,3,1,0,0,0,0,1,0,0,0,0,1,2,4,0,0,0,0,1,2,4,0,0,0,0,1,2,4,5,7,0,0,0,0,1,2,4,5,7,0,0,0,0,1,0,0,0,0,1,2,4,5,7,7,7,7,8,9,7,12,7,0,0,0,0,1,2,4,4,5,5,5,7,5,4,10,0,0,0,0,1,0,0,0,0,1,1,1,1,3,4,6,7,9,1,1,0,0,0,0,1,2,4,5,7,0,0,0,0,1,2,4,0,0,0,0,1,1,1,1,3,4,6,7,9,1,1,0,0,0,0,1,2,4,5,7,7,7,7,9,9,9,10,10,10,11,12,14,14,14,14,15,16,14,19,14,7,7,0,0,0,0,1,2,4,5,7,7,7,7,8,9,11,11,11,11,13,14,11,11,7,17,7,0,0,0,0,1,0,0,0,0,1,2,4,5,7,0,0,0,0,1,2,4,4,4,4,6,7,9,9,9,9,10,11,13,13,13,13,15,16,13,13,9,19,9,4,4,0,0,0,0,1,2,4,4,4,4,6,7,9,10,12,12,12,12,13,14,16,17,19,20,22,23,12,26,12,4,4,0,0,0,0,1,2,4,5,7,7,8,7,9,9,10,9,13,0,0,0,0,0,0,4,4,4,6,4,0,0,0,0,1,2,4,4,4,6,4,0,0,0,0,1,2,4,5,7,8,10,10,10,10,11,11,11,11,13,14,16,16,16,18,16,11,11,10,10,0,0,0,0,1,2,4,5,7,7,7,7,9,10,12,12,12,14,12,7,7,0,0,0,0,1,2,4,0,0,0,0,1,2,4,5,7,7,7,7,8,9,7,12,7,0,0,0,0,1,2,4,0,0,0,0,1,2,4,5,7,8,10,0,0,0,0,1,0,0,0,0,1,2,4,5,7,0,0,0,0,1,2,4,5,7,0,0,0,0,1,0,0,0,0,1,2,4,5,7,8,10,10,10,12,10,0,0,0,0,1,2,4,5,7,7,7,7,9,10,12,12,12,14,12,7,7,0,0,0,0,1,2,4,4,4,6,4,0,0,0,0,1,2,4,0,0,0,0,1,2,4,5,7,7,7,7,8,9,7,12,7,0,0,0,0,1,2,4,0,0,0,0,1,2,4,5,7,7,7,9,7,0,0,0,0,1,1,1,3,1,0,0,0,0,1,2,4,5,7,0,0,0,0,1,2,4,5,7,0,0,0,0,1,0,0,0,0,1,2,4,5,7,7,7,7,9,10,12,12,12,12,13,14,16,12,19,12,7,7,0,0,0,0,1,2,4,0,0,0,0,1,2,4,0,0,0,0,1,0,0,0,0,1,2,4,5,7,7,7,7,8,9,7,12,7,0,0,0,0,1,2,4,4,4,4,6,6,6,7,7,7,8,9,11,11,12,11,13,13,14,13,17,4,4,0,0,0,0,1,2,4,5,7,0,0,0,0,1,2,4,5,7,8,10,11,13,14,16,0,0,0,0,1,2,4,5,7,0,0,0,0,0,3,4,6,8,0,0,0,0,0,3,0,0,0,0,0,2,0,0,0,0,1,1,2,4,1,7,0,0,0,0,1,1,1,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,8,8,8,8,10,10,11,10,12,12,13,12,15,17,17,17,17,19,20,17,17,8,8,4,4,4,4,4,4,23,27,27,27,27,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,33,33,33,33,35,35,36,35,37,37,38,37,40,33,33,29,29,29,29,29,29,43,43,43,43,44,44,44,44,45,45,45,45,46,46,46,46,47,47,47,47,48,48,48,48,49,49,49,49,51,51,52,52,52,54,52,51,55,55,56,56,56,56,57,57,57,59,57,56,56,55,65,65,65,65,66,66,66,66,67,67,67,67,68,68,68,68,69,69,69,69,71,71,72,73,74,71,77,77,77,77,78,78,78,78,80,80,81,82,80,87,87,87,87,88,88,88,88,89,89,89,89,90,90,90,90,92,93,95,95,95,95,96,96,96,98,96,95,95,90,90,89,89,88,88,87,87,78,78,77,77,69,69,68,68,67,67,66,66,65,65,49,49,48,48,47,47,46,46,45,45,44,44,43,43,29,29,29,29,27,27,4,4,4,4,1,103,103,104,104,104,104,106,106,106,106,107,107,108,109,107,112,112,112,114,112,106,106,117,117,117,117,118,118,118,118,119,119,119,119,121,123,119,119,118,118,117,117,106,106,104,104,103,126,127,128,129,130,131,0,0,0,0,0,0,4,0,0,0,0,0,0,4,0,0,0,0,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,6,6,6,6,7,7,7,7,8,8,8,10,8,7,7,6,6,4,4,3,3,2,2,1,13,13,13,13,15,15,16,15,17,17,18,17,21,21,22,23,21,24,24,25,24,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,44,45,46,47,48,49,51,53,53,53,53,55,55,55,55,56,57,59,59,60,60,60,62,60,59,55,55,66,66,67,67,67,67,69,69,70,69,72,72,73,72,75,75,76,75,78,79,81,67,67,66,82,82,83,83,83,83,84,84,85,86,88,84,83,92,82,93,94,55,55,53,53,13,13,0,0,0,0,0,0,4,4,4,4,6,6,6,6,7,7,7,7,9,11,7,7,6,14,6,4,4,0,0,0,0,0,0,2,3,5,6,8,9,11,11,11,13,11,0,0,0,0,0,0,2,3,5,6,8,9,11,11,11,13,11,0,0,0,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,9,7,6,6,5,5,4,4,0,0,0,0,1,0,0,0,0,0,0,2,0,0,0,0,1,0,0,0,0,0,0,3,5,5,5,5,7,8,10,5,5,0,0,0,0,0,0,4,4,4,4,6,7,9,4,4,0,0,0,0,0,3,3,3,5,3,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,3,3,3,5,3,0,0,0,0,0,0,0,5,5,5,5,7,7,7,7,8,9,11,11,11,13,11,7,7,16,18,7,7,5,5,0,0,0,0,0,0,4,4,4,4,6,6,6,6,7,8,10,10,10,12,10,6,15,6,4,4,0,0,0,0,0,0,0,5,5,5,5,7,9,9,9,9,10,11,13,13,13,15,13,9,18,9,5,5,0,0,0,0,0,3,0,0,0,0,1,0,0,0,0,0,3,3,3,3,4,4,4,4,6,6,6,7,8,10,6,13,14,16,4,4,3,3,0,0,0,0,0,0,4,4,4,4,6,7,9,4,4,0,0,0,0,0,3,3,4,4,4,4,6,6,7,8,10,6,13,4,4,3,16,17,18,20,0,0,0,0,0,3,3,4,4,4,4,6,6,7,8,10,6,13,4,4,3,16,17,18,20,0,0,0,0,0,2,0,0,0,0,0,2,2,2,2,3,3,3,3,5,5,5,6,5,9,3,3,2,2,0,0,0,0,0,0,4,4,4,4,5,5,5,5,7,7,7,7,9,10,12,7,7,5,5,4,4,0,0,0,0,0,3,3,3,3,4,4,4,4,6,7,9,11,4,4,3,3,0,0,0,0,0,3,4,6,0,0,0,0,0,3,0,0,0,0,0,3,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,3,3,3,3,5,7,3,3,0,0,0,0,0,3,4,6,7,9,9,9,9,11,11,12,12,12,12,14,16,12,12,11,19,9,9,0,0,0,0,0,0,4,4,4,4,6,8,8,8,9,8,4,4,0,0,0,0,0,3,3,3,3,4,4,4,4,6,6,7,6,8,8,9,9,9,9,11,11,12,12,12,12,14,14,15,16,14,12,12,11,9,9,8,19,20,22,22,22,22,23,23,23,23,24,24,24,24,25,25,25,25,26,26,26,26,27,27,27,27,29,31,27,27,26,26,25,25,24,24,23,23,22,22,4,4,3,3,0,0,0,0,0,3,4,6,0,0,0,0,0,0,4,5,7,8,10,0,0,0,0,1,2,4,5,7,7,7,7,8,8,8,8,10,11,13,8,8,7,7,0,0,0,0,0,2,4,6,6,6,6,8,8,9,8,10,10,11,13,10,16,16,16,16,18,20,20,20,20,22,23,25,20,20,16,16,6,6,0,0,0,0,0,0,1,2,4,4,4,4,6,6,6,6,7,8,10,6,13,6,4,4,0,0,0,0,0,0,4,5,7,8,10,10,10,10,12,14,10,10,0,0,0,0,0,0,4,0,0,0,0,0,0,0,5,5,5,5,7,7,8,7,11,5,5,0,0,0,0,0,0,0,5,5,6,6,6,8,6,5,9,9,10,10,10,10,12,12,12,12,13,14,15,16,12,19,12,10,10,9,20,21,0,0,0,0,0,3,4,6,6,6,6,8,8,9,8,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,18,19,20,21,22,23,24,25,26,28,16,16,15,15,14,14,13,13,12,12,11,11,6,6,0,0,0,0,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,9,7,6,6,5,5,4,4,3,3,2,12,14,15,17,17,18,18,18,20,18,17,23,25,25,25,26,26,26,26,27,27,27,27,29,29,30,30,30,30,31,31,31,31,33,33,34,33,31,31,30,30,29,37,37,37,37,38,38,38,38,39,39,39,39,40,40,40,40,41,41,41,41,42,42,42,42,43,43,43,45,43,42,42,41,41,40,40,39,39,38,38,37,37,27,27,26,26,25,48,48,48,49,49,49,49,50,50,50,50,51,51,51,51,53,53,54,53,55,55,56,55,58,58,58,58,59,59,59,59,60,60,60,60,61,61,61,61,62,62,62,62,63,63,63,65,63,62,62,61,61,60,60,59,59,58,58,51,51,50,50,49,49,48,68,68,68,69,70,72,74,74,74,75,74,68,79,79,79,79,79,83,83,83,83,85,86,88,89,91,91,91,91,92,92,92,92,94,95,92,92,91,91,83,83,79,98,98,98,98,99,99,99,99,100,100,100,100,101,101,101,101,102,102,102,102,104,104,104,105,105,105,106,107,109,111,112,113,113,114,114,114,114,116,116,116,117,117,117,118,118,118,119,119,120,120,120,122,120,119,125,125,125,127,125,114,114,113,128,129,131,131,131,131,132,132,132,132,133,133,133,133,134,134,134,134,135,135,135,135,136,136,136,136,138,138,138,138,140,140,141,143,140,146,146,147,149,146,152,152,153,152,155,155,156,155,158,158,159,158,161,161,162,162,163,162,161,165,166,168,168,168,170,168,138,138,136,136,135,135,134,134,133,133,132,132,131,131,102,102,101,101,100,100,99,99,98,98,0,0,0,0,0,3,5,6,8,9,11,12,14,15,17,18,20,20,21,22,20,25,25,25,27,25,0,0,0,0,0,2,2,2,2,4,4,4,4,5,5,5,5,6,6,6,6,8,10,10,11,12,10,15,15,16,17,15,20,20,21,22,20,25,25,26,27,25,30,30,31,32,30,35,36,38,6,6,5,5,4,4,2,2,0,0,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,5,7,7,7,7,10,11,7,14,14,14,15,17,18,14,21,21,21,21,23,25,26,29,30,32,21,21,5,5,4,4,3,3,0,0,0,0,0,3,3,4,4,4,4,6,8,8,8,10,8,4,4,3,11,12,13,14,0,0,0,0,0,1,0,0,0,0,0,3,4,6,6,6,6,7,7,7,7,8,8,8,8,10,10,11,11,12,12,12,14,12,11,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,22,22,22,22,24,22,22,21,21,20,20,19,19,18,18,17,17,10,27,8,8,7,7,6,6,0,0,0,0,1,0,0,0,0,0,1,2,4,6,7,9,11,11,11,11,11,12,12,12,12,13,13,13,13,15,15,16,16,16,16,18,18,19,19,19,19,21,22,19,19,18,23,23,24,24,24,26,24,23,16,16,15,30,13,13,12,12,11,33,33,33,33,33,34,35,37,37,37,37,39,39,40,40,40,40,42,43,45,40,40,39,48,37,37,33,51,51,51,53,51,0,0,0,0,0,0,4,5,7,0,0,0,0,0,3,4,6,7,9,9,10,10,10,10,12,14,10,10,9,17,0,0,0,0,0,3,3,3,3,4,4,4,4,6,6,7,7,7,7,8,8,8,8,10,11,8,8,7,7,6,14,4,4,3,3,0,0,0,0,0,3,3,3,3,5,7,7,7,7,9,9,10,9,11,11,12,14,11,17,19,7,7,3,3,0,0,0,0,0,2,4,4,4,4,6,6,7,7,7,7,8,8,8,8,10,11,13,8,8,7,7,6,4,4,0,0,0,0,0,0,2,0,0,0,0,0,0,4,4,4,6,4,0,0,0,0,0,0,3,5,5,6,6,6,8,6,5,11,12,13,15,15,15,15,17,19,19,19,19,21,23,19,19,15,15,0,0,0,0,0,3,3,4,5,6,6,7,9,6,3,11,11,12,12,12,12,12,16,12,19,20,22,24,24,24,24,25,25,25,25,27,27,27,27,28,28,28,28,29,29,29,29,30,30,30,32,30,29,29,28,28,27,27,35,37,37,37,37,38,38,38,40,38,37,43,37,27,27,25,25,24,24,11,0,0,0,0,1,0,0,0,0,0,2,3,5,6,8,0,0,0,0,1,2,4,0,0,0,0,0,3,4,6,6,6,8,6,0,0,0,0,0,3,3,3,3,5,5,6,6,6,6,8,8,8,8,9,9,10,12,9,15,15,15,17,15,8,8,20,8,8,6,6,5,23,3,3,0,0,0,0,0,0,2,2,3,3,3,5,3,2,8,0,0,0,0,0,0,4,4,5,5,5,7,5,4,10,0,0,0,0,0,0,4,4,4,4,6,7,9,4,4,0,0,0,0,0,0,4,4,5,6,7,8,9,10,4,13,0,0,0,0,0,0,1,2,4,4,4,4,6,6,6,6,7,7,7,9,7,6,12,6,4,4,0,0,0,0,0,3,3,3,5,3,0,0,0,0,0,3,3,3,3,5,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,11,11,11,11,12,12,12,14,12,11,11,7,7,7,7,7,7,7,7,3,3,0,0,0,0,1,0,0,0,0,0,0,4,4,5,5,5,5,7,7,7,7,8,8,8,8,10,10,11,10,13,8,8,7,16,7,5,5,4,19,19,19,19,20,20,20,20,21,21,21,21,23,24,26,21,21,20,20,19,19,0,0,0,0,0,0,4,4,4,4,6,8,8,8,8,9,9,9,11,9,8,8,4,4,0,0,0,0,0,0,0,5,5,5,5,7,9,9,9,9,10,10,10,10,11,11,11,11,13,13,13,13,14,14,14,14,16,16,17,18,16,21,14,14,13,24,13,11,11,10,10,9,9,5,5,0,0,0,0,0,3,3,3,3,6,6,6,6,8,8,8,8,9,9,9,9,11,11,11,11,12,12,12,12,14,15,17,17,17,19,17,12,12,11,22,11,9,9,8,25,8,6,6,3,28,28,28,28,31,31,31,31,32,32,32,32,34,34,34,34,35,35,36,36,36,38,36,35,39,40,41,42,34,34,45,45,45,45,47,47,47,47,48,47,47,51,51,51,51,52,52,53,53,53,53,55,56,53,53,52,57,57,58,58,58,60,58,57,61,62,51,65,51,47,47,45,45,34,34,32,32,31,31,28,68,68,68,68,69,69,69,69,70,70,70,70,72,72,72,72,73,73,73,73,74,74,74,74,76,78,78,78,80,78,74,74,73,73,72,72,83,83,83,83,85,85,85,85,86,86,86,86,87,87,87,87,89,89,89,89,90,89,89,93,89,89,87,87,86,86,85,85,96,97,99,99,99,99,100,100,100,100,102,104,104,104,104,106,106,106,106,107,107,107,109,107,106,106,112,112,112,112,114,115,117,117,117,117,119,119,119,119,119,119,119,119,119,119,119,119,119,119,119,119,122,122,122,122,124,124,124,124,125,125,125,127,125,124,124,130,130,130,132,130,124,124,122,122,119,119,119,119,119,119,135,137,119,119,119,119,117,117,112,112,106,106,104,104,100,100,99,99,85,85,83,83,72,72,70,70,69,69,68,68,0,0,0,0,0,2,4,4,5,5,5,7,5,4,10,10,11,11,11,13,11,10,16,16,17,17,17,17,18,18,18,20,18,17,17,16,23,23,24,24,24,24,25,25,25,27,25,24,24,23,30,30,31,31,31,31,32,32,32,34,32,31,31,30,37,37,38,38,38,38,39,39,39,41,39,38,38,37,44,44,44,44,45,45,45,47,45,44,44,0,0,0,0,1,1,1,3,1,0,0,0,0,0,3,3,3,3,5,6,8,8,9,9,9,9,10,10,10,12,10,9,9,8,15,15,15,15,16,16,16,18,16,15,15,3,3,0,0,0,0,0,3,4,6,8,8,8,8,9,9,9,11,9,8,8,0,0,0,0,1,1,1,3,1,0,0,0,0,1,1,2,2,2,4,2,1,7,8,10,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,20,21,23,23,23,23,24,24,24,26,24,23,23,18,18,17,17,16,16,15,15,14,14,13,13,12,12,0,0,0,0,0,2,3,5,7,7,7,7,8,8,8,10,8,7,7,0,0,0,0,0,3,0,0,0,0,1,2,4,4,4,4,6,6,7,8,10,10,10,10,12,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,18,18,18,18,19,19,19,19,21,21,22,22,22,24,22,21,25,25,26,26,26,26,27,27,27,27,29,30,27,27,26,26,25,19,19,18,18,14,14,14,14,14,14,34,36,14,14,14,14,10,10,6,37,37,38,39,41,41,41,41,43,45,45,45,45,46,46,46,46,47,47,47,47,48,48,48,48,50,50,51,50,53,53,54,54,54,56,54,53,57,57,58,58,58,58,59,59,59,59,61,62,59,59,58,58,57,48,48,47,47,46,46,45,45,66,68,45,45,41,41,37,69,70,71,72,73,74,4,4,0,0,0,0,0,3,4,6,8,8,8,8,9,9,9,9,11,12,14,14,14,14,15,15,15,15,16,16,16,16,18,18,19,19,19,19,21,22,24,19,19,18,27,28,30,32,16,16,15,15,14,14,9,9,8,8,0,0,0,0,0,3,0,0,0,0,0,3,3,3,3,5,7,3,3,0,0,0,0,0,3,0,0,0,0,0,3,0,0,0,0,0,3,0,0,0,0,0,3,3,3,3,5,7,3,3,0,0,0,0,0,3,0,0,0,0,0,3,3,3,3,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,10,8,7,7,6,6,5,13,5,3,3,0,0,0,0,0,3,3,3,3,5,7,3,3,0,0,0,0,0,3,0,0,0,0,1,1,2,2,2,2,4,4,5,5,5,5,7,7,8,8,8,9,12,8,7,5,5,4,2,2,1,17,18,19,19,20,20,20,20,22,22,22,22,23,23,24,24,24,26,24,23,27,28,22,22,31,31,31,31,33,35,36,31,31,22,22,20,20,19,0,0,0,0,0,3,0,0,0,0,0,3,0,0,0,0,0,3,0,0,0,0,0,3,0,0,0,0,1,1,2,3,5,1,6,7,8,9,0,0,0,0,1,1,2,2,2,2,3,3,3,5,3,2,2,1,8,10,10,10,10,11,11,11,11,12,12,12,12,14,14,15,15,15,15,16,16,16,16,18,19,20,21,16,16,15,15,14,24,24,24,24,26,26,26,26,27,27,28,29,27,32,32,33,34,32,37,37,37,37,39,40,42,37,37,26,45,26,24,24,12,12,11,11,10,10,0,0,0,0,1,1,2,4,4,4,4,5,5,5,7,5,4,4,1,10,11,13,13,13,13,15,15,15,15,16,16,16,18,16,15,21,15,13,13,0,0,0,0,1,1,2,2,2,2,3,3,3,5,3,2,2,1,8,10,10,10,10,12,12,12,12,13,13,13,13,15,16,17,17,18,18,18,20,18,17,13,13,12,24,12,10,10,0,0,0,0,1,1,2,4,4,4,4,5,5,5,7,5,4,4,1,10,11,13,13,13,13,15,15,15,15,16,16,16,18,16,15,21,15,13,13,0,0,0,0,0,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,22,22,22,22,23,23,23,23,24,24,24,24,25,25,25,25,26,26,26,26,27,27,27,27,28,28,28,28,29,29,29,29,30,30,30,30,31,31,31,31,32,32,32,32,33,33,33,33,34,34,34,34,35,35,35,35,36,36,36,36,37,37,37,37,38,38,38,40,38,37,37,36,36,35,35,34,34,33,33,32,32,31,31,30,30,29,29,28,28,27,27,26,26,25,25,24,24,23,23,22,22,21,21,20,20,19,19,18,18,17,17,16,16,15,15,14,14,13,13,12,12,11,11,10,10,9,9,8,8,7,7,6,6,5,5,4,4,3,3,0,0,0,0,0,3,4,6,0,0,0,0,0,3,4,6,7,9,10,12,0,0,0,0,0,3,3,3,3,4,4,4,4,5,5,5,7,5,4,4,3,3,0,0,0,0,1,2,3,4,5,6,0,0,0,0,0,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,14,14,14,14,15,15,15,15,17,17,18,17,20,15,15,14,23,14,12,12,11,11,10,10,9,9,8,8,7,7,6,6,5,5,4,4,3,3,0,0,0,0,1,2,0,0,0,0,0,0,4,4,4,4,6,7,9,4,4,0,0,0,0,1,1,1,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,11,11,13,11,6,6,5,5,4,4,3,16,3,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,4,4,4,6,4,1,11,11,11,11,12,12,12,12,14,16,16,16,16,18,19,23,23,23,23,25,25,25,25,26,26,26,26,27,27,27,27,28,28,28,28,30,31,33,33,33,33,34,34,34,34,35,35,35,35,36,36,36,36,37,37,37,37,38,38,38,38,39,39,39,39,40,40,40,40,42,42,43,44,42,45,46,47,48,50,40,40,39,39,38,38,37,37,36,36,35,35,34,34,33,33,28,28,27,27,26,26,25,55,25,23,23,16,16,12,12,11,11,0,0,0,0,0,3,3,3,3,5,7,7,7,7,9,11,11,11,11,12,12,12,14,12,11,11,7,7,3,3,0,0,0,0,0,0,4,4,4,4,5,5,5,5,7,9,9,10,9,11,11,12,13,11,16,18,5,5,4,4,0,0,0,0,0,3,0,0,0,0,1,0,0,0,0,0,0,4,4,4,4,6,6,6,6,7,7,7,7,9,10,7,7,6,13,6,4,4,0,0,0,0,0,3,4,6,8,8,8,8,10,10,10,10,11,12,13,13,14,15,17,17,17,19,17,13,20,21,10,24,10,8,8,0,0,0,0,0,3,3,3,3,4,4,4,6,4,3,3,0,0,0,0,0,3,4,6,8,8,8,8,9,9,9,9,10,10,10,10,12,14,14,14,14,15,15,15,15,17,17,18,20,17,23,23,24,25,23,15,15,14,29,14,10,10,9,9,8,8,0,0,0,0,0,3,4,0,0,0,0,0,3,3,3,3,5,5,5,5,6,6,6,6,8,6,6,5,11,5,3,3,0,0,0,0,0,0,4,0,0,0,0,0,1,3,3,3,3,4,4,4,6,4,3,3,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,1,2,2,2,2,4,5,2,2,1,8,8,8,8,10,11,13,13,13,15,13,8,8,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,0,0,0,0,0,0,4,4,5,5,6,6,6,6,7,7,7,7,9,11,7,7,6,6,5,4,15,15,15,15,16,16,16,16,17,17,17,19,17,16,16,15,15,0,0,0,0,0,3,3,3,3,4,4,4,6,4,3,3,0,0,0,0,0,3,3,3,3,4,4,4,4,5,5,5,7,5,4,4,3,3,0,0,0,0,0,3,4,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,11,11,11,11,14,14,14,14,16,17,18,19,20,21,14,14,11,24,24,24,24,27,27,27,27,28,28,28,28,30,30,31,30,33,28,28,27,27,36,36,36,36,37,37,37,37,39,40,37,37,36,36,27,27,24,43,43,43,43,46,46,46,46,48,46,46,43,51,51,51,52,51,55,55,55,55,58,55,61,61,61,61,62,62,62,62,63,63,63,63,65,67,67,68,69,71,72,74,67,77,77,78,77,80,81,83,63,63,62,62,61,61,9,9,8,8,7,7,6,6,0,0,0,0,1,1,1,1,1,5,5,6,6,6,6,8,10,12,13,15,6,6,5,16,16,17,16,20,22,1,25,27,28,29,30,31,32,33,34,35,36,38,40,40,40,40,41,41,41,43,41,40,40,0,0,0,0,1,2,4,4,5,5,5,7,5,4,10,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,19,17,16,16,15,15,14,14,13,13,12,12,0,0,0,0,0,3,3,3,3,4,4,4,4,5,5,5,5,7,8,10,10,10,10,11,11,11,11,12,12,12,14,12,11,11,10,10,5,5,4,4,3,3,0,0,0,0,1,1,1,3,1,0,0,0,0,1,1,1,1,2,3,1,6,1,0,0,0,0,1,1,1,1,2,3,1,6,1,0,0,0,0,1,2,4,0,0,0,0,1,2,4,5,7,0,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,4,0,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,4,0,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,8,6,5,5,4,4,0,0,0,0,1,2,4,0,0,0,0,1,1,2,2,2,2,4,4,5,4,6,6,7,6,10,10,10,10,12,12,13,13,13,13,15,15,16,15,17,17,18,20,17,13,13,12,24,26,10,10,2,2,1,27,27,28,28,29,28,30,30,31,30,34,27,35,36,0,0,0,0,0,0,0,1,2,3,5,6,8,8,8,8,10,10,10,10,12,13,14,15,16,18,18,18,18,20,22,22,22,22,24,26,26,26,26,28,30,31,32,33,35,35,35,35,37,37,37,37,39,41,41,41,41,43,45,45,45,45,47,48,49,50,51,53,53,53,53,54,54,54,54,56,56,56,56,57,57,57,57,59,60,62,62,62,62,64,66,66,66,66,67,67,67,67,72,73,67,67,66,66,62,62,57,57,56,56,54,54,53,53,45,45,41,41,37,37,35,35,26,26,22,22,18,18,10,10,8,8,0,0,0,0,0,3,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,6,6,6,6,9,9,9,9,11,13,9,9,6,16,16,16,16,19,19,19,19,21,19,19,16,24,24,24,25,25,25,26,26,26,27,28,30,31,24,34,34,34,34,36,36,36,36,37,36,40,42,42,42,42,43,43,43,43,44,44,44,44,46,46,46,46,47,47,47,47,49,50,51,53,54,57,57,57,57,58,58,58,58,60,62,58,58,57,57,47,47,46,46,44,44,43,43,42,42,34,34,4,4,3,3,2,2,1,1,0,0,0,0,0,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,10,6,6,5,5,4,4,3,3,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,6,6,6,6,8,8,9,9,10,10,10,12,10,9,15,15,15,17,15,8,20,20,20,20,22,23,25,26,28,28,28,30,28,20,20,6,6,4,4,3,3,2,2,1,1,0,0,0,0,1,1,2,2,2,2,4,5,7,2,2,1,10,0,0,0,0,1,0,0,0,0,0,0,4,5,7,7,7,7,8,8,8,8,10,10,11,11,12,11,13,13,14,13,10,17,17,18,18,18,18,20,18,18,17,23,23,23,23,24,24,24,24,25,25,25,27,25,24,24,23,23,8,8,7,7,0,0,0,0,0,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,10,10,10,10,10,14,14,14,14,15,15,15,15,17,18,20,21,23,23,23,23,24,24,24,24,25,25,25,25,26,26,26,26,28,30,26,26,25,25,24,24,23,23,15,15,14,14,10,33,33,33,33,36,36,36,38,36,33,41,41,41,41,44,44,44,46,44,41,49,49,49,50,50,50,51,51,51,52,53,55,56,49,59,59,59,59,61,61,61,61,62,61,65,67,67,67,67,68,68,68,68,69,69,69,69,71,71,71,71,72,72,72,72,74,75,76,78,79,82,83,85,86,88,90,72,72,71,71,69,69,68,68,67,67,59,59,8,8,7,7,6,6,5,5,4,4,3,3,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,7,7,7,7,8,8,8,8,9,9,9,9,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,17,15,14,14,13,13,12,12,11,11,9,9,8,8,7,20,7,3,3,2,2,1,1,0,0,0,0,0,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,13,15,11,11,10,10,9,9,8,8,7,7,6,6,5,5,4,4,3,3,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,6,4,3,3,2,2,1,1,0,0,0,0,0,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,10,6,6,5,5,4,4,3,3,0,0,0,0,1,1,1,3,1,0,0,0,0,0,3,0,0,0,0,0,3,0,0,0,0,0,3,3,3,5,3,0,0,0,0,0,3,0,0,0,0,1,2,4,6,6,6,6,7,7,7,7,9,11,11,11,11,12,12,12,12,13,13,13,13,15,16,18,18,18,18,19,19,19,19,21,21,22,22,22,22,23,23,23,23,24,24,24,24,25,25,25,25,27,27,28,27,30,30,30,30,32,33,30,30,25,25,24,24,23,23,22,22,21,19,19,18,18,13,13,12,12,11,11,7,7,6,6,0,0,0,0,0,3,3,3,5,3,0,0,0,0,0,1,1,1,1,3,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,10,6,6,5,5,4,4,3,13,13,13,15,13,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,2,2,2,2,4,5,7,7,7,7,9,10,11,12,13,14,7,7,2,2,1,1,0,0,0,0,0,3,3,3,3,4,4,4,4,6,6,7,9,9,9,9,10,10,10,12,10,9,9,6,15,4,4,3,3,0,0,0,0,0,0,4,4,4,4,5,5,5,5,7,8,5,5,4,4,0,0,0,0,0,3,0,0,0,0,0,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,10,8,7,7,6,6,5,5,4,4,3,3,0,0,0,0,1,2,0,0,0,0,1,1,1,3,1,0,0,0,0,1,0,0,0,0,1,1,1,3,1,0,0,0,0,0,3,3,4,5,3,6,7,0,0,0,0,3,0,0,0,0,0,3,3,3,3,4,4,4,4,5,5,5,5,7,8,9,10,11,12,13,14,15,16,17,19,5,5,4,4,3,3,0,0,0,0,0,3,3,3,3,4,4,4,4,6,8,10,10,10,10,11,11,11,11,12,12,12,12,14,16,16,16,16,18,20,22,24,16,16,12,12,11,11,10,10,4,4,3,3,0,0,0,0,0,0,0,0,6,8,8,8,8,10,12,12,12,12,13,13,13,13,14,14,14,16,14,13,13,12,12,8,8,0,0,0,0,0,0,0,0,6,8,8,8,8,10,10,11,13,13,13,13,15,13,13,10,18,8,8,0,0,0,0,0,0,0,0,6,7,9,9,9,11,9,0,0,0,0,0,0,0,0,5,6,8,8,8,10,8,0,0,0,0,0,0,0,0,2,2,2,2,3,3,3,3,5,5,6,6,6,6,7,7,7,7,9,10,12,7,7,6,6,5,15,17,17,17,17,19,21,21,21,21,22,22,22,22,23,23,23,23,25,26,28,23,23,22,22,21,21,17,17,3,3,2,2,0,0,0,0,0,0,0,0,6,8,8,8,8,9,9,9,9,10,10,10,12,10,9,9,8,8,0,0,0,0,0,0,0,0,6,7,9,9,9,11,9,0,0,0,0,0,0,0,0,6,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,13,14,16,11,11,10,10,9,9,8,8,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,15,16,18,13,13,12,12,11,11,10,10,9,9,8,8,7,7,6,6,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,6,7,9,9,9,9,11,13,13,13,15,13,9,9,0,0,0,0,0,0,0,0,6,7,9,9,9,9,11,13,13,13,15,13,9,9,0,0,0,0,0,0,0,0,6,7,9,0,0,0,0,0,0,0,0,6,8,8,8,8,10,10,11,10,12,12,13,13,13,13,15,13,13,12,18,8,8,0,0,0,0,0,0,0,0,6,7,9,9,9,9,10,10,10,12,10,9,9,0,0,0,0,0,0,0,0,6,8,8,8,8,9,9,9,11,9,8,8,0,0,0,0,0,0,0,0,6,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,13,14,16,11,11,10,10,9,9,8,8,0,0,0,0,0,0,0,0,6,7,9,0,0,0,0,0,0,0,0,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,13,14,16,11,11,10,10,9,9,8,8,7,7,6,6,0,0,0,0,0,0,0,0,6,8,8,9,9,9,11,9,8,14,14,14,14,15,15,15,17,15,14,14,0,0,0,0,0,0,0,5,5,5,5,7,7,7,7,8,8,8,8,10,12,8,8,7,7,15,15,15,15,16,16,16,16,18,18,18,18,19,19,19,19,21,22,24,19,19,18,18,16,16,15,15,7,7,5,5,0,0,0,0,0,0,0,5,5,5,5,7,7,7,7,8,8,8,8,10,12,8,8,7,7,15,15,16,16,16,16,17,17,17,17,19,19,19,19,20,20,20,20,22,23,20,20,19,19,17,17,16,16,15,26,7,7,5,5,0,0,0,0,0,0,0,0,0,7,9,9,9,9,11,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,18,16,15,15,14,14,13,13,9,9,0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,10,12,7,7,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,0,0,0,0,0,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,14,15,17,12,12,11,11,10,10,9,9,8,8,7,7,0,0,0,0,0,0,0,0,0,1,1,1,1,2,3,5,5,6,6,6,6,8,10,10,10,10,11,11,11,11,13,14,16,11,11,10,10,6,6,5,19,1,22,22,22,22,23,23,23,23,25,27,27,27,27,28,28,28,28,30,30,30,30,31,31,31,31,33,34,36,36,36,36,37,37,37,39,37,36,36,31,31,30,30,42,42,42,42,43,43,43,43,44,44,44,44,45,45,45,45,46,46,46,46,47,47,47,47,49,50,52,47,47,46,46,45,45,44,44,43,43,42,42,30,30,28,28,27,27,23,23,22,22,0,0,0,0,0,0,2,2,2,2,4,4,4,4,5,5,5,7,5,4,10,4,2,2,0,0,0,0,0,3,4,6,8,8,8,8,10,12,12,13,14,12,17,19,8,8,0,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,5,5,6,6,6,6,8,9,11,6,6,5,14,14,14,16,14,4,19,4,2,2,1,22,22,22,22,23,23,23,23,24,24,24,24,25,25,25,25,27,27,27,27,28,28,28,28,29,29,29,29,30,30,30,30,31,31,31,31,32,32,32,32,33,33,33,33,34,34,34,34,36,38,39,41,41,41,41,42,42,43,45,42,48,50,50,50,50,52,54,54,54,54,55,55,55,55,57,57,58,60,57,63,65,65,65,65,66,66,66,66,67,67,67,67,69,69,69,69,70,70,70,70,71,71,71,71,72,72,72,72,73,73,73,75,73,72,72,71,71,70,70,69,69,67,67,66,66,65,65,55,55,54,54,50,50,41,41,78,80,82,41,41,34,34,33,33,32,32,31,31,30,30,29,29,28,28,27,27,25,25,24,24,23,23,22,85,85,85,85,86,86,86,86,87,87,87,87,89,89,89,89,90,90,91,91,91,91,92,92,92,92,94,94,95,97,94,92,92,91,91,90,99,99,100,102,99,105,89,108,89,87,87,86,86,85,111,111,111,112,113,115,116,118,111,121,0,0,0,0,0,0,1,1,1,1,3,3,4,4,4,4,5,5,5,7,5,4,4,3,10,10,10,10,11,11,11,11,12,12,12,12,14,14,15,16,17,18,14,19,19,20,22,19,25,12,12,11,11,10,10,1,1,0,0,0,0,0,3,3,3,5,3,0,0,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,10,11,13,13,13,13,14,14,15,17,14,22,22,23,23,23,25,23,22,26,27,13,13,30,30,30,30,31,31,31,31,32,32,32,32,33,33,33,33,34,34,34,34,35,35,35,35,37,39,39,39,39,40,40,40,40,42,42,42,42,43,42,46,42,40,40,39,39,49,49,50,50,50,50,51,51,51,53,51,50,50,49,56,39,39,35,35,34,34,33,33,32,32,31,31,30,30,13,13,8,8,7,7,6,6,5,5,4,4,3,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,63,63,63,63,64,64,64,64,65,65,65,65,67,69,69,69,69,70,70,70,70,71,71,71,73,71,70,70,69,69,65,65,64,64,63,63,59,59,59,59,59,59,59,59,0,0,0,0,0,0,4,4,4,4,7,7,7,7,8,8,8,8,9,9,9,9,11,11,12,12,12,12,14,14,15,16,14,17,18,12,12,11,21,21,21,21,23,23,24,24,24,26,24,23,29,29,29,29,30,30,30,30,31,31,31,33,31,30,30,29,29,21,21,9,9,8,8,7,7,4,36,36,36,36,37,37,37,37,39,39,40,40,40,42,40,39,45,37,37,36,36,0,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,5,5,6,6,6,6,8,9,11,6,6,5,14,14,14,16,14,4,19,4,2,2,1,22,22,22,22,23,23,23,23,24,24,24,24,26,26,26,26,27,27,27,27,28,28,28,28,29,29,29,29,30,30,30,30,32,34,34,34,34,35,35,35,35,36,36,36,36,37,37,37,37,38,38,38,38,40,42,42,42,42,43,43,43,43,44,44,44,44,45,45,45,45,46,46,46,46,48,50,50,50,50,51,51,51,51,52,52,52,52,53,53,53,53,54,54,54,54,56,58,54,54,53,53,52,52,51,51,50,50,46,46,45,45,44,44,43,43,42,42,38,38,37,37,36,36,35,35,34,34,30,30,29,29,28,28,27,27,26,26,24,24,23,23,22,61,0,0,0,0,0,3,3,3,3,5,5,5,5,8,8,8,8,10,11,13,13,13,13,15,17,13,13,8,8,5,20,20,20,20,22,22,22,23,22,26,26,26,26,27,27,27,27,28,28,28,28,30,30,30,30,31,31,31,31,32,32,32,32,34,35,37,37,37,37,39,40,37,37,32,32,31,31,30,30,43,43,43,43,45,45,45,45,46,46,46,46,47,47,47,47,48,48,48,48,49,49,49,49,51,51,51,51,52,52,52,54,52,51,57,51,49,49,48,48,47,47,46,46,45,45,60,60,60,60,61,61,61,61,63,65,65,65,65,66,66,66,66,67,67,67,67,69,71,71,71,71,72,72,72,72,74,76,76,76,76,77,77,77,77,79,81,81,81,81,82,82,82,82,84,86,86,86,86,87,87,87,87,89,91,91,91,91,92,92,92,92,93,93,93,93,95,97,99,93,93,92,92,91,91,87,87,86,86,82,82,81,81,77,77,76,76,72,72,71,71,67,67,66,66,65,65,61,61,60,60,45,45,43,43,30,30,28,28,27,27,26,26,22,22,20,20,3,3,0,0,0,0,0,2,2,2,2,3,3,3,3,5,5,5,5,6,6,6,8,6,5,11,5,3,3,2,14,14,14,14,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,22,22,22,22,23,23,23,25,23,22,22,28,30,22,22,20,20,19,19,18,18,17,17,14,33,33,33,34,34,34,34,36,37,39,39,39,39,41,42,44,39,39,34,34,33,47,47,47,47,48,48,48,48,50,50,50,50,51,51,51,51,53,54,56,51,51,50,50,48,48,47,47,0,0,0,0,0,3,3,3,3,5,5,5,6,6,7,7,7,9,7,6,12,5,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,22,22,22,24,22,21,21,20,20,19,19,18,18,17,17,16,16,15,15,3,3,0,0,0,0,0,0,1,2,4,4,4,4,5,6,4,9,4,0,0,0,0,0,0,4,5,7,7,7,7,8,8,8,8,10,11,13,13,13,15,13,8,8,7,7,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,18,16,15,15,14,14,13,13,9,9,9,9,9,21,9,9,9,7,7,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,0,0,4,5,7,9,9,9,9,9,9,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,23,25,25,25,25,27,29,29,29,29,30,30,30,30,31,31,31,31,32,32,32,32,34,36,37,39,39,39,39,40,40,40,40,41,41,41,41,42,42,42,42,43,43,43,43,44,44,44,44,45,45,45,45,46,46,46,46,48,50,50,50,50,51,51,51,51,52,52,52,52,53,53,53,53,55,59,59,59,59,60,60,60,60,62,64,64,65,65,65,65,66,66,66,66,68,69,71,66,66,65,65,64,74,74,74,74,75,75,75,75,76,76,76,76,78,80,76,76,75,75,74,74,60,60,59,59,53,53,52,52,51,51,50,50,46,46,45,45,44,44,43,43,42,42,41,41,40,40,39,39,32,32,31,31,30,30,29,29,25,25,21,21,20,20,19,19,18,18,17,17,16,16,9,83,83,84,83,85,85,86,86,86,86,88,90,92,86,86,85,0,0,0,0,0,0,2,2,2,3,4,6,7,9,10,12,2,15,15,15,15,17,17,18,18,19,19,19,19,20,20,20,22,20,19,19,18,25,25,25,25,27,27,27,27,28,28,28,28,30,32,28,28,27,27,25,25,17,35,35,35,35,36,36,36,38,36,35,35,15,15,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,5,6,6,6,6,7,7,7,7,9,9,10,9,11,11,12,14,11,17,7,7,6,6,5,20,3,3,2,2,1,23,23,23,23,23,24,24,24,24,25,25,25,25,26,26,26,26,27,27,27,27,28,28,28,28,30,30,31,31,31,31,32,32,32,32,34,35,36,38,38,38,38,39,39,39,39,40,40,40,40,41,41,41,41,43,45,45,45,45,46,46,46,46,47,47,47,47,48,48,48,48,50,52,52,52,52,53,53,53,53,54,54,54,54,55,55,55,55,57,59,59,60,60,60,60,61,61,61,61,62,62,62,62,63,63,63,63,65,67,63,63,62,62,61,61,60,60,59,70,55,55,54,54,53,53,52,52,48,48,47,47,46,46,45,45,41,41,40,40,39,39,38,38,32,32,31,31,30,71,71,72,72,72,72,73,73,73,73,74,74,74,74,75,75,75,75,77,79,79,79,79,80,80,80,80,81,81,81,81,82,82,82,82,84,86,86,86,86,87,87,87,87,88,88,88,88,89,89,89,89,91,93,93,94,94,94,94,95,95,95,95,96,96,96,96,97,97,97,97,99,101,97,97,96,96,95,95,94,94,93,104,89,89,88,88,87,87,86,86,82,82,81,81,80,80,79,79,75,75,74,74,73,73,72,72,71,107,107,107,107,108,108,108,108,110,112,108,108,107,107,28,28,27,27,26,26,25,25,24,24,23,115,115,115,116,117,119,120,122,115,125,125,125,126,127,129,130,132,133,135,125,138,0,0,0,0,0,3,3,3,3,4,4,4,4,6,6,6,6,7,7,7,7,8,8,8,10,8,7,7,6,6,13,13,13,13,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,23,21,20,20,19,19,18,18,17,17,16,16,15,15,26,26,26,28,26,15,15,13,13,6,6,4,4,3,3,0,0,0,0,0,0,4,4,4,4,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,12,13,15,15,15,15,17,17,18,19,17,22,22,22,22,23,23,23,25,23,22,22,15,15,10,10,9,9,8,8,7,7,6,28,6,4,4,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,3,4,6,6,6,6,7,7,7,7,9,10,12,14,7,7,6,6,2,2,17,17,17,17,18,18,18,18,20,21,23,25,18,18,17,17,2,2,1,28,28,28,28,29,29,29,29,30,30,30,30,31,31,31,31,33,33,34,33,35,35,36,38,35,31,31,30,30,29,29,28,28,0,0,0,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,8,8,8,8,9,9,9,9,10,10,10,10,12,12,13,14,12,17,17,17,17,18,18,18,18,19,19,19,21,19,18,18,17,17,10,10,9,9,8,8,24,24,24,24,25,25,25,25,27,29,25,25,24,24,8,8,6,6,5,5,4,4,0,0,0,0,0,1,2,4,5,7,8,10,11,13,13,14,14,14,14,16,18,18,18,18,19,19,19,19,21,22,24,19,19,18,18,14,14,13,27,27,27,27,29,31,27,27,0,0,0,0,1,1,1,1,2,2,2,4,2,1,1,0,0,0,0,0,3,3,3,3,4,4,4,4,5,5,5,7,5,4,4,3,3,0,0,0,0,0,0,3,5,0,0,0,0,0,3,0,0,0,0,0,0,1,3,0,0,0,0,1,1,1,3,1,0,0,0,0,1,3,3,3,5,3,0,0,0,0,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,18,16,15,15,14,14,13,13,12,12,11,2,22,0,0,0,0,1,1,1,3,1,0,0,0,0,1,1,1,1,3,3,4,5,6,7,8,9,3,12,12,12,12,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,32,33,33,33,33,34,34,34,36,34,33,33,32,37,38,12,12,1,1,0,0,0,0,0,2,4,0,0,0,0,1,1,1,2,3,5,5,5,5,6,6,6,8,6,5,5,1,11,11,11,11,12,12,12,12,14,14,15,16,14,19,19,19,19,21,21,22,23,21,26,26,26,26,28,28,29,28,31,31,31,31,33,35,35,35,35,37,39,40,42,44,45,47,47,47,47,48,48,48,48,49,49,49,49,50,50,50,50,51,51,51,51,53,54,55,56,58,59,61,61,61,61,63,63,63,63,64,64,64,64,66,66,67,67,67,69,67,66,72,72,73,73,74,74,74,76,74,73,72,80,80,80,80,82,84,84,85,85,85,85,86,86,86,86,87,87,87,87,88,88,88,88,89,89,89,89,90,90,90,90,91,91,91,93,91,90,90,89,89,88,88,87,87,86,86,85,85,84,80,80,64,64,63,63,61,61,51,51,50,50,49,49,48,48,47,47,35,35,31,31,26,26,19,19,12,12,11,11,0]
const contents={"0":[397,398,399],"1":[400,401,401,401,402,401,403,404,401,405,399],"2":[406,401,401,401,407,401,403,408,401,405,399],"3":[409,401,401,410,399],"4":[411,401,401,401,412,413,414,399],"5":[415,416,399],"6":[417,401,401,418,399],"7":[419,401,401,401,420,401,421,401,422,423,401,424,399],"8":[425,401,401,426,427,401,428,429,401,430,431,401,422,432,401,433,399],"9":[434,401,401,435,436,401,437,438,401,439,401,440,441,442,401,443,444,401,445,401,446,414,401,405,399],"10":[447,401,401,435,401,448,449,450,451,401,452,414,401,405,399],"11":[453,401,401,401,454,401,455,456,401,457,456,401,458,399],"12":[459,401,401,460,399],"13":[461,401,401,462,399],"14":[463,401,401,401,464,465,466,467,401,468,469,401,470,414,401,471,472,473,474,401,475,414,401,476,477,473,474,401,478,414,401,479,480,473,474,401,481,414,401,482,483,484,401,485,399],"15":[486,401,401,487,401,488,399],"16":[489,401,401,401,401,401,401,401,401,401,401,401,401,490,401,401,401,401,491,492,401,493,494,495,496,497,498,499,401,500,399],"17":[501,502,503,504,505,506,507,508,509,510,505,511,507,508,509,512,509,513,514],"18":[515,516,517,518,519,520,401,521,518,414,401,522,399],"19":[523,524,401,525,399],"20":[526,401,401,527,399],"21":[528,529,530,401,531,401,532,533,534,401,535,536,401,537,538,539,540,541,401,542,401,543,544,401,545,546,547,401,548,549,401,538,550,540,541,401,542,401,551,544,401,545,552,553,414,401,554,399],"22":[555,401,401,401,556,557,401,558,559,401,560,399],"23":[561,401,401,562,563,564,401,565,564,401,566,567,401,568,567,401,456,414,401,569,401,448,570,571,401,572,573,401,574,575,576,401,577,578,552,579,401,572,573,401,580,401,581,582,414,401,583,399],"24":[584,585,399],"25":[586,401,426,587,401,588,589,401,590,399],"26":[591,592,401,448,593,594,414,401,405,399],"27":[595,592,436,401,596,597,598,401,599,573,414,401,401,401,401,401,401,401,401,401,401,401,401,401,401,405,399],"28":[600,401,401,401,601,602,401,603,604,605,401,606,607,401,608,609,610,609,552,611,414,401,612,613,401,405,399],"29":[614,615,428,401,601,602,401,603,616,605,401,606,617,401,608,618,610,618,552,611,414,401,612,619,401,405,399],"30":[620,401,401,621,622,623,624,401,405,399],"31":[625,529,626,401,627,414,401,628,401,629,630,631,632,633,634,635,636,401,637,399],"32":[638,639,640,401,641,414,401,642,401,643,644,401,645,414,401,646,401,647,648,649,650,401,651,401,401,401,401,652,653,654,573,401,655,656,657,658,401,659,609,401,660,401,661,662,401,663,572,401,664,665,401,666,572,401,667,668,669,401,670,572,401,671,401,672,572,401,673,674,675,676,677,678,401,679,414,401,405,399],"33":[680,639,681,401,682,414,401,642,401,643,644,401,645,414,401,646,401,683,401,684,685,686,401,687,688,689,690,691,552,611,401,692,414,401,405,399],"34":[693,694,401,695,696,401,697,401,698,399],"35":[699,639,700,401,701,414,401,642,702,401,643,644,401,703,414,401,646,401,704,705,401,706,401,401,401,707,708,401,709,710,711,401,712,713,401,714,715,401,716,717,552,718,401,719,720,721,722,723,401,724,725,414,399],"36":[726,401,401,401,727,728,401,729,401,730,731,401,732,401,733,401,401,401,401,401,401,734,735,401,736,737,738,401,739,740,401,741,401,742,738,573,401,743,414,401,744,401,401,401,401,401,745,746,401,747,748,749,401,750,401,751,401,752,753,754,755,739,401,756,757,573,401,758,759,760,401,761,762,401,763,764,401,765,766,767,768,401,766,544,401,769,401,770,573,401,771,401,772,773,573,401,774,401,775,776,401,777,778,401,779,401,401,401,401,401,401,401,573,401,772,780,654,401,781,573,401,743,414,401,782,401,401,401,401,401,783,401,784,414,401,785,401,401,786,401,787,401,788,789,401,790,791,792,401,793,794,401,795,796,797,798,401,743,414,401,799,401,401,800,401,401,401,401,801,802,573,401,803,414,401,804,401,805,806,401,807,399],"37":[808,809,401,810,811,812,414,401,813,814,401,815,816,401,817,414,401,818,401,819,820,821,822,823,401,824,825,401,826,573,401,827,414,401,828,401,810,829,830,831,573,414,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,832,833,834,401,835,572,401,836,837,838,401,652,839,840,401,841,842,843,844,401,845,414,401,846,399],"38":[847,848,652,849,850,401,851,839,852,552,718,414,401,435,401,529,853,854,855,401,856,857,401,606,858,401,859,611,414,401,860,401,405,399],"39":[861,401,401,862,399],"40":[863,864,401,448,865,781,573,414,401,405,399],"41":[866,810,867,401,868,869,870,871,872,401,873,414,399],"42":[874,426,875,401,876,401,864,401,448,877,401,878,879,401,572,573,401,880,881,401,882,883,884,552,879,414,401,405,399],"43":[885,886,399],"44":[887,888,401,889,401,403,890,401,405,399],"45":[891,892,893,401,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,401,916,917,401,918,919,401,920,401,572,573,401,921,922,401,923,924,401,925,544,401,919,401,920,401,926,927,401,928,929,401,572,573,401,930,572,401,931,414,401,405,399],"46":[932,401,401,933,401,934,935,401,936,414,401,405,399],"47":[937,401,401,933,401,934,935,401,938,414,401,405,399],"48":[939,401,401,426,940,401,428,429,401,941,399],"49":[942,529,530,401,943,401,944,401,945,401,588,946,401,947,854,948,399],"50":[949,950,951,952,953,401,954,401,743,854,803,399],"51":[955,956,957,401,950,958,959,960,961,401,962,963,544,401,964,573,414,401,965,966,967,968,401,969,970,401,971,972,973,401,974,963,401,975,976,401,962,963,544,401,977,573,414,401,978,401,979,399],"52":[980,401,401,401,448,981,564,414,401,458,399],"53":[982,401,401,864,401,448,983,414,401,405,399],"54":[984,401,401,401,985,986,401,987,401,988,593,989,552,990,414,401,405,399],"55":[991,992,401,993,401,994,995,996,401,997,401,422,492,401,998,401,999,995,1000,401,997,399],"56":[1001,401,401,401,1002,399],"57":[1003,401,401,401,1004,401,1005,1006,414,401,1007,399],"58":[1008,1009,401,529,1010,401,725,401,492,414,401,615,401,1011,1012,1013,1014,1013,1015,1016,401,1017,399],"59":[1018,401,401,1019,1020,1021,401,1022,572,401,1023,401,1024,414,401,1025,399],"60":[1026,892,401,1027,1028,572,401,1029,401,931,414,401,405,399],"61":[1030,892,1031,1032,401,1027,1029,1033,401,1034,414,401,405,399],"62":[1035,1036,401,1037,399],"63":[1038,1039,423,401,1040,1041,401,1025,399],"64":[1042,401,401,1043,401,1044,1045,401,1046,518,401,1047,414,401,1048,399],"65":[1049,401,401,401,1050,399],"66":[1051,401,401,401,1052,399],"67":[1053,1054,1055,401,1056,399],"68":[1057,401,401,401,1058,1059,1060,1061,1062,552,718,414,401,1063,399],"69":[1064,401,401,401,401,1065,1066,401,1067,399],"70":[1068,401,401,1069,399],"71":[1070,401,401,1071,399],"72":[1072,401,401,426,1073,401,428,401,569,401,1074,1075,401,1076,1077,552,1078,1079,401,1077,573,414,401,1080,399],"73":[1081,810,1082,401,1083,1084,401,1085,829,854,803,401,1086,1087,1088,1089,1090,401,1091,1092,401,1093,1094,1095,544,401,1096,573,401,1097,414,399],"74":[1098,401,401,401,429,401,1099,399],"75":[1100,1101,456,401,1102,456,401,1103,401,1104,456,401,1105,399],"76":[1106,1101,456,401,1102,456,401,448,1107,1108,1109,552,564,414,401,458,399],"77":[1110,1101,456,401,1102,456,401,448,1111,1112,552,564,414,401,458,399],"78":[1113,1114,399],"79":[1115,1116,957,401,1117,957,401,1118,957,401,1119,957,401,1120,957,401,1121,957,401,1122,399],"80":[1123,1102,957,401,1124,957,401,1122,399],"81":[1125,1126,401,1127,399],"82":[1128,1129,399],"83":[1130,1101,456,401,1131,399],"84":[1132,1133,456,401,1134,399],"85":[1135,950,957,401,965,957,401,1122,399],"86":[1136,1137,957,401,588,957,401,1122,399],"87":[1138,1139,399],"88":[1140,1101,456,401,1102,456,401,448,1141,564,414,401,458,399],"89":[1142,1143,1144,401,1145,1146,401,1147,414,401,1122,399],"90":[1148,1149,399],"91":[1150,1126,401,1151,456,401,1152,456,401,458,399],"92":[1153,1116,957,401,1124,957,401,1122,399],"93":[1154,1155,456,401,1156,399],"94":[1157,1126,401,1151,456,401,1158,456,401,458,399],"95":[1159,1101,456,401,1102,456,401,1160,401,1161,1162,854,456,401,448,1163,564,414,401,458,399],"96":[1164,1101,456,401,1102,456,401,1074,1165,572,401,1166,401,1167,564,414,401,458,399],"97":[1168,1169,399],"98":[1170,1171,957,401,1172,957,401,1122,399],"99":[1173,1101,456,401,1103,401,1174,456,401,988,1175,564,401,1176,401,1177,564,414,401,458,399],"100":[1178,1101,456,401,1179,401,1180,456,401,1181,456,401,988,1165,572,401,1163,564,401,1182,564,401,1183,564,414,401,458,399],"101":[1184,1101,456,401,1102,456,401,1185,1186,1187,456,414,401,458,399],"102":[1188,401,401,401,420,401,1189,399],"103":[1190,1101,456,401,1191,401,1192,399],"104":[1193,1101,456,401,1194,456,401,1195,456,401,1196,1197,401,1198,456,401,1199,401,1200,399],"105":[1201,1101,456,401,1202,456,401,1203,401,1204,456,401,1205,401,1206,399],"106":[1207,1101,456,401,1208,399],"107":[1209,1101,456,401,1102,456,401,448,1210,564,414,401,458,399],"108":[1211,1155,456,401,1212,399],"109":[1213,1214,957,401,1117,957,401,1118,957,401,1122,399],"110":[1215,1216,399],"111":[1217,529,957,401,1218,957,401,1122,399],"112":[1219,1214,957,401,1117,957,401,1122,399],"113":[1220,1221,399],"114":[1222,1223,456,401,1224,456,401,1225,456,401,1126,401,1226,399],"115":[1227,1101,456,401,1202,456,401,1203,401,1228,456,401,1205,401,1206,399],"116":[1229,1218,456,401,1126,401,1230,399],"117":[1231,1155,456,401,1232,399],"118":[1233,1101,456,401,1102,456,401,448,1234,564,414,401,458,399],"119":[1235,1155,456,401,1131,399],"120":[1236,1101,456,401,1102,456,401,1237,401,1238,399],"121":[1239,1126,401,1240,399],"122":[1241,1242,957,401,1243,957,401,1122,399],"123":[1244,1124,957,401,1243,957,401,1122,399],"124":[1245,1246,399],"125":[1247,1101,456,401,1102,456,401,1179,401,1104,456,401,988,1248,572,401,456,414,401,458,399],"126":[1249,1101,1250,401,1251,399],"127":[1252,1253,456,401,1254,399],"128":[1255,1256,399],"129":[1257,1101,456,401,1102,456,401,448,1258,564,414,401,458,399],"130":[1259,1133,456,401,1260,401,1261,1262,854,456,401,1185,1263,1187,456,414,401,458,399],"131":[1264,588,957,401,950,957,401,1122,399],"132":[1265,1101,456,401,1102,456,401,1266,456,401,1267,456,401,1268,456,401,458,399],"133":[1269,1270,957,401,1271,957,401,1122,399],"134":[1272,401,401,426,1273,401,1055,401,1274,399],"135":[1275,401,401,1276,399],"136":[1277,401,1278,399],"137":[1279,529,530,401,1280,414,401,1281,399],"138":[1282,1283,401,401,800,401,401,401,1284,401,1285,1286,767,1287,401,1288,401,1289,401,1290,1291,573,401,1292,401,401,401,1293,401,800,401,401,401,1284,401,1285,1286,767,1294,401,1295,573,401,1296,1297,1298,1299,1300,1301,823,401,570,1302,401,826,552,1303,1304,401,1305,544,573,401,401,401,1306,1307,1308,1309,1310,401,1311,1312,1313,518,573,401,1314,1315,401,1316,1317,518,573,401,401,401,1318,1319,1320,1321,401,1322,1323,401,1324,1307,401,1325,414,401,401,401,1326,746,401,1327,1285,1328,654,544,401,1329,401,1077,573,401,1330,1331,1332,401,1333,401,492,414,401,810,1334,829,1335,854,803,399],"139":[1336,401,401,401,1337,399],"140":[1338,401,401,401,1339,399],"141":[1340,1341,1342,1343,1344,401,1345,1346,1347,401,1348,414,401,1349,401,1185,1350,1187,1351,414,401,1352,1353,1354,854,1355,401,1356,1357,1358,1359,1360,1361,1362,1363,1364,1365,1366,1367,1368,1369,1370,1371,401,810,1372,829,1373,854,803,401,1374,401,1375,401,1027,1376,572,401,1377,1378,401,1379,573,414,401,810,1380,401,1381,1382,401,1383,1384,401,1385,1386,401,1387,1388,401,1389,829,1390,1391,1392,1393,401,1394,544,573,401,1395,854,803,399],"142":[1396,401,401,401,864,401,448,1397,401,1398,401,983,414,401,405,399],"143":[1399,401,1102,456,401,1400,456,401,1401,456,401,1402,401,1403,399],"144":[1404,401,1102,456,401,1400,456,401,1401,456,401,1405,401,1403,399],"145":[1406,615,1055,401,1407,1408,1409,1410,401,1411,399],"146":[1412,1413,399],"147":[1414,401,1415,399],"148":[1416,1417,399],"149":[1418,401,401,888,401,1419,401,403,1420,401,405,399],"150":[1421,401,401,401,1422,401,403,1423,401,405,399],"151":[1424,401,401,487,401,1425,399],"152":[1426,401,401,401,1427,399],"153":[1428,399],"154":[1429,401,401,1430,399],"155":[1431,401,401,1432,401,1433,399],"156":[1434,401,401,401,401,892,401,1435,1436,572,401,1437,401,931,414,401,1438,401,405,399],"157":[1439,401,401,401,892,401,1435,1436,572,401,1437,401,931,414,401,405,399],"158":[1440,401,401,401,401,892,401,1438,401,1435,1436,572,401,1437,401,931,414,401,405,399],"159":[1441,401,401,1442,399],"160":[1443,1444,399],"161":[1445,401,401,1446,1447,401,1448,1449,518,401,1450,414,401,1451,803,401,1452,399],"162":[1453,401,401,401,1454,401,403,1455,401,405,399],"163":[1456,401,401,1457,1458,401,1459,1460,1461,401,1462,573,401,1463,414,401,615,1055,1464,401,1465,399],"164":[1466,401,401,1457,1458,401,1459,1460,1467,401,1468,573,401,1469,414,401,615,1055,1464,401,1470,399],"165":[1471,401,1472,399],"166":[1473,401,1446,1447,401,1474,1450,414,401,1475,399],"167":[1476,401,401,401,1477,1478,401,1479,401,403,1480,401,405,399],"168":[1481,401,401,1482,1483,401,1104,1484,401,1485,401,1486,399],"169":[1487,401,401,1488,602,401,1489,399],"170":[1490,401,401,1491,399],"171":[1492,401,401,1493,399],"172":[1494,1495,399],"173":[1496,1495,399],"174":[1497,401,401,1498,401,1499,401,1500,399],"175":[1501,401,401,426,1502,401,428,429,401,430,401,1503,1504,401,1505,401,1506,414,401,1507,399],"176":[1508,401,401,401,1509,401,1510,401,988,1511,414,399],"177":[1512,401,401,1513,1514,401,1270,1515,1516,1517,401,1518,1092,401,1093,1519,738,544,573,854,803,401,1520,1521,1522,1523,1524,1525,401,1526,401,405,399],"178":[1527,401,401,426,587,401,1528,399],"179":[1529,401,401,401,422,1530,401,1039,803,401,1531,399],"180":[1532,529,1533,401,628,1534,401,1535,1536,401,1457,1537,401,405,399],"181":[1538,401,1539,401,1540,401,1541,401,1185,1542,1543,1544,401,1545,414,401,1546,401,1362,401,892,401,1547,1548,401,405,399],"182":[1549,1550,876,401,864,401,448,1551,572,401,983,414,401,405,399],"183":[1552,401,401,401,422,1553,401,1464,1554,401,1555,401,1556,401,1557,399],"184":[1558,401,401,401,1559,399],"185":[1560,401,401,401,401,933,401,1561,1562,414,401,405,399],"186":[1563,401,401,401,401,588,1564,401,1565,1566,745,401,1327,1567,1568,767,543,573,401,743,854,803,399],"187":[1569,401,401,1570,1571,401,1572,401,1570,1573,401,1574,1575,1576,1577,1578,1579,401,1580,1581,1582,1583,1584,1585,1586,1587,1588,401,1589,399],"188":[1590,401,1591,1592,1593,1594,1595,1596,401,1597,414,401,1598,401,1599,1600,401,643,644,401,1597,414,401,646,401,1601,1602,1603,401,1604,1605,1606,401,1607,1608,573,401,1609,1610,1611,1612,1613,1614,719,401,725,414,401,1615,1616,1617,1603,401,1618,1619,1620,1621,401,1622,1611,1612,1623,1614,719,401,725,414,401,1624,1625,518,401,1626,401,1627,1628,573,414,401,1629,401,401,401,1630,401,1631,518,401,1632,1633,401,1634,1635,401,1636,1637,414,401,1638,1639,1640,1641,1642,401,1643,1644,854,1645,401,1646,401,1647,1648,1649,1650,401,1651,1652,1653,552,1654,401,1655,573,401,1656,401,1657,854,803,401,1658,1659,1660,1661,1662,1663,401,1664,401,1647,1665,401,1666,414,401,1667,1668,401,1666,414,401,1669,1666,401,1670,1666,401,1671,1666,401,1672,1673,1674,401,1675,1676,401,1677,401,1678,399],"189":[1679,401,401,1680,401,1681,1682,401,1683,1684,401,1685,1686,401,1687,1688,401,1689,1690,401,1672,1691,1692,414,401,1693,401,1694,399],"190":[1695,401,569,401,1696,1697,1698,401,1699,401,1681,1700,1701,414,401,1683,1700,1702,414,401,1685,1700,1703,414,401,1687,1700,1704,414,401,1689,1700,1705,414,401,1706,1707,401,1080,399],"191":[1708,1054,401,1709,1541,1710,401,1711,401,401,1712,1713,414,401,1714,1715,401,1716,1713,414,401,1717,401,1718,401,1719,1720,414,401,1721,1722,401,1723,399],"192":[1724,401,401,588,1725,401,1726,401,1727,401,743,1566,1728,854,803,399],"193":[1729,1730,399],"194":[1731,401,401,426,1732,401,435,1733,1734,401,1735,1736,1737,401,1738,573,401,1739,1740,1741,1742,1743,445,401,446,414,401,405,399],"195":[1744,1745,399],"196":[1746,1747,1748,401,1749,401,1750,1751,401,1752,401,1753,745,1754,401,1755,1756,401,1757,1758,401,1759,1760,767,1761,401,1759,544,573,401,743,414,401,1762,1763,1764,401,1765,401,1766,1767,401,1768,738,401,883,573,401,743,414,401,1769,401,1770,399],"197":[1771,401,401,401,422,1530,401,424,399],"198":[1772,401,401,426,1773,401,428,429,401,1503,1774,401,1775,401,1506,414,401,1776,399],"199":[1777,401,401,864,986,401,437,1778,1779,401,1780,983,414,401,405,399],"200":[1781,401,401,1782,401,1783,401,1784,401,1185,1515,1543,1785,401,1545,414,401,1786,401,405,399],"201":[1787,401,1534,401,1788,401,606,1789,1790,401,1791,611,401,1720,414,399],"202":[1792,401,1793,399],"203":[1794,401,401,401,430,401,1795,399],"204":[1796,401,401,1797,401,1798,1799,401,1800,414,401,1801,1802,1797,401,1803,401,1804,401,1805,401,1806,401,405,399],"205":[1807,401,401,950,1459,1808,552,1809,401,1810,573,952,1811,401,401,401,1812,573,401,1459,1813,401,1814,401,953,746,401,1815,1816,1817,1818,401,770,573,401,1819,401,772,1820,401,1821,573,401,743,414,399],"206":[1822,1823,399],"207":[1824,401,426,1825,401,1102,1826,401,1827,399],"208":[1828,529,1829,401,1830,399],"209":[1831,401,401,1832,1833,401,1834,401,1835,399],"210":[1836,401,401,933,401,1837,746,401,1838,1839,1328,401,654,544,401,1840,401,1077,573,401,1841,414,401,405,399],"211":[1842,401,1843,1844,401,1845,414,401,1846,399],"212":[1847,401,401,401,1848,1844,401,1849,414,401,1846,399],"213":[1850,401,401,401,1851,401,403,1852,401,405,399],"214":[1853,401,401,401,1058,1059,1060,1061,1062,552,718,414,401,1854,399],"215":[1855,1550,1055,401,864,401,448,1856,401,1857,414,401,405,399],"216":[1858,401,401,1859,401,1860,399],"217":[1861,401,401,986,401,987,401,596,401,401,401,721,1862,401,413,414,399],"218":[1863,1864,399],"219":[1865,401,401,401,422,1866,401,1327,1867,401,1868,1869,401,1870,573,401,1871,414,401,448,1872,1873,401,1874,1875,401,1876,414,399],"220":[1877,401,401,401,1878,401,987,401,1879,1880,401,413,414,399],"221":[1881,401,401,401,401,1878,401,987,401,1879,1882,1883,401,1884,1885,401,1886,1887,654,544,401,1888,573,401,1889,414,399],"222":[1890,401,401,1891,401,401,745,401,1327,1892,401,1893,1894,401,1895,540,401,1896,401,1897,544,401,1898,573,401,743,414,401,1899,401,401,745,746,401,1327,1900,1901,401,1902,1903,1328,767,1904,573,401,1866,401,772,1905,573,401,772,1906,1907,401,1759,654,1903,1908,401,1759,767,1904,573,401,743,414,401,1909,1910,1911,401,1912,1913,1914,401,1915,401,1916,401,1917,414,401,1918,401,1919,1920,1921,401,1922,1923,573,401,1924,414,401,1925,1926,401,569,1927,401,1928,401,1929,401,1919,1930,401,1931,414,401,1932,401,1699,1928,401,1933,401,1934,401,401,1935,401,1936,1937,401,1938,573,401,1939,401,582,414,401,1928,401,1080,399],"223":[1940,401,1534,401,1941,1942,401,1943,414,401,1944,1945,401,1943,414,401,1946,1947,748,401,1948,414,401,1949,1950,748,401,1951,414,401,1952,1953,748,401,1954,414,401,1955,1956,748,401,1948,414,401,1957,1958,401,1959,399],"224":[1960,1961,401,1962,399],"225":[1963,401,401,1964,401,1965,1966,401,1967,1968,1969,401,1970,414,401,1971,1972,401,1973,399],"226":[1974,401,401,426,1975,401,428,401,1976,1977,401,1978,399],"227":[1979,1980,401,1981,399],"228":[1982,529,626,401,1983,414,401,1984,1985,401,628,401,629,630,1986,1987,1988,634,1989,401,1990,743,401,1991,1992,401,1993,399],"229":[1994,401,426,1995,401,1996,401,1997,1977,401,1998,399],"230":[1999,401,401,2000,399],"231":[2001,529,530,401,2002,401,2003,2004,2005,401,746,401,2006,401,2007,401,401,401,1329,2008,401,2009,2010,401,1902,767,2011,2012,401,2013,1902,544,573,401,2014,401,2015,2016,2004,2017,401,746,401,2018,401,2019,2020,1329,2021,401,2022,2023,401,2009,2024,401,1902,767,2025,2012,401,2013,1902,544,573,401,2014,401,2015,2026,2027,2028,2029,854,2030,399],"232":[2031,401,401,426,2032,401,428,401,2033,2034,401,1104,1484,401,2035,2036,2037,401,2038,2039,401,2040,611,401,2041,414,401,2042,2043,401,2044,401,2045,399],"233":[2046,401,401,2047,399],"234":[2048,401,401,2049,401,2050,401,405,399],"235":[2051,401,401,2052,399],"236":[2053,401,401,2052,399],"237":[2054,401,401,2055,399],"238":[2056,401,401,2057,401,2058,401,405,399],"239":[2059,401,401,2060,399],"240":[2061,401,401,864,401,1435,2062,2063,2064,401,679,414,401,405,399],"241":[2065,401,401,2066,401,2067,401,405,399],"242":[2068,401,401,2069,399],"243":[2070,2071,2072,401,2073,2074,401,2075,2076,2077,541,401,1095,544,573,414,401,1672,2078,2079,746,401,1327,2080,1896,401,1902,767,1328,573,401,1330,401,2081,401,2082,2083,414,399],"244":[2084,401,401,2085,399],"245":[2086,401,401,2087,399],"246":[2088,401,401,2089,399],"247":[2090,401,401,2091,399],"248":[2092,810,2093,2094,401,2095,829,2096,854,803,399],"249":[2097,588,2098,2099,401,2015,414,401,1550,401,2100,995,2101,401,437,2102,2103,401,2104,609,552,611,414,401,864,401,988,2105,781,572,573,401,878,781,572,573,401,2106,401,2107,572,401,983,414,401,405,399],"250":[2108,588,2109,401,2098,2110,401,2015,414,401,1550,428,401,864,401,448,2111,401,1857,414,401,405,399],"251":[2112,588,2098,2113,401,2015,414,401,1550,401,864,401,448,1075,401,1076,2114,552,2115,401,2114,573,414,401,405,399],"252":[2116,588,589,401,2098,2117,401,2015,414,401,1550,1055,401,864,401,448,2118,401,1857,414,401,405,399],"253":[2119,401,401,2120,2121,2122,2123,2124,2125,2126,2127,2128,2129,2130,2131,2132,2133,2134,2135,2136,2137,2138,2139,2140,2141,2142,2143,2144,2145,2146,2147,2148,2149,2150,2151,2152,2153,2154,2155,401,405,399],"254":[2156,401,401,426,587,401,2157,399],"255":[2158,401,401,1120,2159,401,1117,2160,401,1118,2161,401,1025,399],"256":[2162,401,401,2163,2164,2165,401,405,399],"257":[2166,810,2167,829,2168,854,803,399],"258":[2169,401,401,2170,2171,2172,2173,2174,2175,2176,2177,2178,2179,401,2180,2181,401,2182,2183,401,2184,414,401,2185,399],"259":[2186,606,1720,414,399],"260":[2187,401,401,401,2188,401,403,2189,401,405,399],"261":[2190,864,401,2191,2192,2193,2194,401,2195,572,401,2196,401,2197,414,401,405,399],"262":[2198,2199,399],"263":[2200,2201,401,401,2202,401,2203,414,401,401,401,2204,2205,401,2206,401,2207,401,2208,2209,401,401,401,2210,401,2211,2212,2213,2214,401,2215,572,401,2216,2217,2218,2219,2220,2221,2222,2223,401,2224,2225,2226,2227,2228,552,718,401,2229,414,401,401,401,2230,399],"264":[2231,401,401,2204,401,2232,401,2233,401,2206,401,2234,2235,401,405,399],"265":[2236,401,401,401,1784,2237,401,2238,401,1185,2239,1543,1085,1545,414,401,2240,401,405,399],"266":[2241,401,401,2242,399],"267":[2243,2244,399],"268":[2245,401,401,401,864,401,2246,2192,401,2247,781,414,401,405,399],"269":[2248,401,401,2249,2250,401,2251,401,864,401,2252,2253,781,2254,2255,543,401,2256,401,2257,552,718,414,401,405,399],"270":[2258,401,401,2259,2260,401,2261,399],"271":[2262,401,401,2249,2263,401,2251,401,864,2264,2265,401,2266,401,988,2267,401,2268,2114,401,572,573,401,2269,2270,1759,573,414,401,405,399],"272":[2271,401,401,2272,2273,399],"273":[2274,401,401,592,401,2246,2275,401,2276,414,401,405,399],"274":[2277,401,401,401,2278,399],"275":[2279,615,401,2280,856,401,405,399],"276":[2281,2282,401,2283,399],"277":[2284,2285,2286,401,2287,518,414,401,2288,401,2289,2290,401,2291,401,2292,399],"278":[2293,2294,401,2295,399],"279":[2296,2297,399],"280":[2298,401,401,401,2285,2299,2300,2301,401,2302,401,518,573,414,401,2303,2259,2304,401,2305,399],"281":[2306,401,401,2307,2308,401,405,399],"282":[2309,401,401,2303,2259,2304,401,2310,399],"283":[2311,401,401,2312,2313,401,2314,2315,1710,1709,401,2316,401,401,2317,401,2318,2319,2320,2321,552,718,414,401,2322,401,401,2323,2324,401,1906,2325,401,2326,573,401,2327,2328,401,2329,2330,414,401,2331,401,401,2332,401,2333,414,401,2334,1713,414,401,2335,401,401,1716,414,401,2336,2337,2338,401,2339,401,606,2340,611,401,2341,2342,401,1720,414,401,2343,2344,401,2345,2346,401,1723,399],"284":[2347,2348,401,401,401,2349,2350,401,2351,401,2352,401,2353,2354,401,2355,2356,2357,573,401,2358,401,2359,414,401,2360,401,2361,2362,2363,2364,2365,2366,2367,2368,2369,2370,401,2371,401,2204,2205,401,2372,399],"285":[2373,529,530,401,2374,2375,401,2376,414,401,2377,401,2378,2379,2380,2381,2382,2383,401,2384,399],"286":[2385,401,401,2386,857,2387,401,2388,2389,401,2234,2387,2390,401,405,399],"287":[2391,2392,401,2393,399],"288":[2394,2395,2396,2397,414,401,1025,399],"289":[2398,2395,2399,2397,414,401,1025,399],"290":[2400,2401,456,401,2402,399],"291":[2403,2404,957,401,2405,957,401,1122,399],"292":[2406,1101,456,401,2407,2408,2409,401,2410,456,401,2411,399],"293":[2412,1101,456,401,2407,2408,2409,401,2410,456,401,2413,399],"294":[2414,1101,456,401,2407,2408,2409,401,2415,399],"295":[2416,2401,456,401,2417,399],"296":[2418,2285,2419,401,2349,2420,2421,564,573,401,2422,401,2423,2424,401,2425,2426,2427,2428,401,2429,544,573,401,2430,401,957,2431,2349,2432,2421,564,573,401,957,854,456,399],"297":[2433,2434,2435,2436,401,2437,2438,401,2439,401,2440,401,2441,2442,2443,2444,2445,401,2446,401,2447,401,2448,401,2447,401,2449,401,2447,401,2450,2451,2452,2453,401,2454,401,2455,401,2456,401,2457,401,2456,401,2458,401,2456,2459,2460,2461,2462,401,2463,2464,401,2465,2466,401,2467,2468,401,2469,401,2470,401,2471,2472,401,401,401,401,2473,2474,399],"298":[2475,401,401,2476,399],"299":[2477,2478,2479,2480,2481,401,2482,401,401,2332,401,2483,401,2484,414,401,2485,401,401,2332,401,2486,414,401,2487,2488,2489,552,718,401,2490,2491,414,401,2492,401,2493,2494,414,401,2495,401,2496,2497,2498,401,2499,2500,401,2501,2502,2503,401,2504,1720,414,401,2505,2506,401,2507,401,2508,399],"300":[2509,401,401,2510,2511,2512,2513,401,2514,401,405,399],"301":[2515,2516,2517,2518,2519,401,2520,401,2521,2522,2523,401,2524,573,401,2525,401,2526,414,401,569,401,2527,2528,401,2521,2529,401,2530,401,2531,399],"302":[2532,2533,2534,401,2535,718,401,2536,414,401,2537,399],"303":[2538,2539,399],"304":[2540,401,401,401,2541,492,401,2542,2543,401,2544,2545,2546,2547,2546,414,401,2548,2549,401,2550,414,401,2551,2552,2553,401,2554,399],"305":[2555,401,401,2556,2478,2479,2480,2557,2558,401,2559,401,401,401,2560,2561,401,2562,2563,401,2564,518,401,2565,720,2566,2567,401,725,401,2568,414,401,2482,401,401,2332,401,2569,414,401,2485,401,401,2332,401,2570,414,401,2487,2488,2489,552,718,401,2490,2491,414,401,2492,401,2493,2494,414,401,2495,401,2496,2497,2498,401,2499,2500,401,2501,2502,2503,401,2504,1720,414,401,2571,2572,401,2573,2574,401,2575,401,2576,399],"306":[2577,864,2578,2101,401,2579,401,988,2580,657,401,2581,2582,2583,2584,2585,401,679,414,401,405,399],"307":[2586,401,401,2587,2588,2589,2590,2591,2505,2592,2506,2593,401,2594,401,2508,399],"308":[2595,2587,2588,2589,2596,401,2597,399],"309":[2598,401,401,2599,2600,2601,2602,401,2603,401,405,399],"310":[2604,2605,401,2606,399],"311":[2607,401,401,2608,399],"312":[2609,401,401,2610,399],"313":[2611,401,401,2612,401,2613,399],"314":[2614,401,401,2615,399],"315":[2616,529,2617,401,615,401,2618,2619,401,2620,401,2621,2622,2623,401,2289,2290,401,2624,2625,401,606,2626,2627,2628,2629,401,2630,2631,401,2632,401,2633,545,414,399],"316":[2634,401,401,2635,401,2636,399],"317":[2637,2638,401,2639,2640,2641,2642,401,2643,401,2644,414,401,2645,401,2646,399],"318":[2647,2648,399],"319":[2649,2650,2651,401,2652,2653,401,2654,401,2655,2656,2657,2658,854,803,399],"320":[2659,401,401,2660,2661,401,2662,2663,401,2664,2665,401,725,414,401,405,399],"321":[2666,401,401,401,2667,2668,401,2669,2670,399],"322":[2671,401,401,2672,399],"323":[2673,401,401,2674,2675,2676,2677,2678,2679,401,405,399],"324":[2680,2681,2682,399],"325":[2683,2684,401,2685,399],"326":[2686,2687,399],"327":[2688,2689,401,2690,399],"328":[2691,401,401,2692,2693,2694,854,2693,399],"329":[2695,401,401,2696,399],"330":[2697,401,401,2698,2699,2700,401,2701,2702,2703,2704,2705,2706,2707,2708,2709,2710,2711,401,2712,399],"331":[2713,401,401,2714,2715,401,2716,401,2717,401,2718,2719,2720,401,2721,401,2722,401,2206,401,2723,401,2724,401,405,399],"332":[2725,401,401,401,401,401,2726,401,2727,401,2728,401,2729,2730,2731,401,2732,399],"333":[2733,401,401,401,401,401,2734,401,2735,401,2736,2737,401,2738,401,2739,414,401,405,399],"334":[2740,401,401,401,401,401,2734,2726,401,2741,401,2732,399],"335":[2742,401,401,401,401,2743,2726,401,2744,401,2732,399],"336":[2745,401,864,2746,401,2747,2748,2749,401,2750,2751,401,743,414,401,2752,401,2753,401,2754,401,2755,2756,2757,401,2758,2759,401,405,399],"337":[2760,401,401,401,401,401,2726,401,2761,2762,2763,401,2732,399],"338":[2764,401,401,401,401,401,2734,2726,401,2765,401,2732,399],"339":[2766,401,401,401,401,401,2734,401,864,2767,2757,2768,401,2758,2759,401,405,399],"340":[2769,401,401,401,401,401,2770,399],"341":[2771,2772,399],"342":[2773,2774,399],"343":[2775,401,401,401,401,401,864,2776,2762,2777,2762,2778,2757,2768,401,2758,2759,401,405,399],"344":[2779,2780,399],"345":[2781,401,401,401,401,401,2782,399],"346":[2783,401,401,401,401,401,2784,399],"347":[2785,401,401,401,401,401,2752,2726,401,2786,401,2787,401,2788,401,1025,399],"348":[2789,401,401,401,401,401,2752,2726,401,2790,401,2791,401,2792,401,2732,399],"349":[2793,401,401,401,401,401,2794,2726,401,2795,399],"350":[2796,401,401,401,401,401,2726,401,2797,401,2747,2798,854,2799,401,2800,414,401,2732,399],"351":[2801,401,401,401,401,401,2743,2726,401,2744,2802,401,2732,399],"352":[2803,401,401,401,401,401,2726,401,2776,2804,401,2732,399],"353":[2805,401,401,401,401,401,2734,401,864,2806,2757,2746,401,2758,2759,401,405,399],"354":[2807,401,401,401,401,401,2794,2726,401,2808,399],"355":[2809,401,401,401,401,401,864,2776,2762,2810,2757,2768,401,2758,2759,401,405,399],"356":[2811,401,401,401,401,401,2726,401,2747,2812,401,2813,414,401,2776,2814,401,2732,399],"357":[2815,401,401,401,401,864,401,2816,2817,401,2818,401,679,414,401,2819,2820,401,2821,2822,401,2823,2824,401,405,399],"358":[2825,401,401,401,401,864,401,2816,2817,401,2818,401,679,414,401,2826,2827,2828,401,2829,2830,401,2831,2832,414,401,405,399],"359":[2833,401,401,401,401,401,401,2726,401,2753,401,2754,401,2834,2835,2836,2837,401,2732,399],"360":[2838,864,2776,2839,2762,2778,2757,2768,401,2758,2759,401,405,399],"361":[2840,401,401,401,401,401,401,864,2776,2762,2841,2757,2768,401,2758,2759,401,405,399],"362":[2842,2843,2844,1060,401,2845,2846,401,2847,401,2848,2849,401,2850,2851,401,2852,573,401,803,414,401,864,2853,401,2854,401,2855,2856,401,2857,2858,401,2859,572,401,2860,2861,401,2862,414,401,2863,2864,2865,2837,2757,2746,401,2758,2759,401,405,399],"363":[2866,401,864,401,412,2867,401,2868,414,401,405,399],"364":[2869,401,401,2870,2871,401,2872,401,2873,401,2874,401,2875,2876,957,414,401,2877,401,1122,399],"365":[2878,2879,745,401,2880,2881,2882,401,2883,2884,401,654,544,401,2885,401,2886,573,401,743,414,401,2887,2888,2889,2890,401,2891,2892,2893,2894,2895,2896,2897,2898,401,2899,401,2900,2901,401,2902,2903,2904,401,654,544,401,2905,401,2906,401,2847,401,2907,2908,401,2909,2904,401,654,544,401,2910,401,2911,2912,2913,401,2914,2915,2916,2917,2918,401,2919,573,401,2920,401,2921,401,743,414,401,2922,2923,2924,401,2925,2926,2927,2928,401,2929,2930,401,540,541,2931,2932,401,654,544,401,2933,573,401,2934,414,401,2935,2936,567,401,2937,567,401,456,414,401,2938,399],"366":[2939,2940,401,2941,2942,2943,401,2944,414,401,2945,2946,2947,401,1185,2948,2949,2950,2951,1543,2952,401,1545,414,401,2953,399],"367":[2954,401,401,2955,401,2956,399],"368":[2957,1054,401,2958,745,2959,2960,771,2961,401,2962,2963,401,2964,2965,2966,401,654,401,401,401,401,1903,2967,401,2968,767,1904,573,401,2969,2970,2971,2972,2973,2974,401,679,401,2975,2976,401,2977,2978,544,401,2979,573,401,2980,2981,2982,401,2983,573,401,743,414,401,2984,401,401,401,721,2985,2986,401,724,401,2987,2988,720,401,725,414,399],"369":[2989,401,401,401,2990,401,401,2991,2992,2993,401,2994,2995,401,2996,2997,2998,767,738,573,401,2896,401,2999,3000,401,3001,573,401,3002,3003,3004,401,3005,414,401,864,3006,401,3007,3008,401,679,414,401,405,399],"370":[3009,2879,745,401,2880,3010,2882,401,2883,2884,401,654,544,401,3011,401,3012,573,401,743,414,401,3013,745,3014,401,3015,3016,2896,3017,3018,401,3019,401,3020,3021,3022,3017,3023,401,3024,401,3015,3025,2896,3017,3026,401,3027,401,3015,3028,2896,3017,3029,401,3030,401,743,414,401,3031,399],"371":[3032,401,401,3033,401,3034,401,401,3035,401,3036,545,401,3037,401,3038,401,743,414,401,569,401,3039,3040,414,401,814,3041,3042,401,3039,3043,2971,401,3044,3045,401,3046,401,3047,3048,414,401,3049,401,3050,3051,3052,3053,3054,401,3055,3056,401,3057,573,401,3058,414,401,3059,3060,401,3061,401,3062,3063,3064,401,3065,401,3066,3067,401,3068,401,3069,3070,401,3071,401,3072,3073,401,3074,401,3075,3076,401,3077,401,3078,3079,3080,401,3081,401,3082,401,1080,399],"372":[3083,401,3084,745,401,1327,3085,401,2257,573,401,743,414,401,3086,401,401,745,3087,3088,3089,401,3090,3091,401,2114,573,401,3092,401,743,414,401,3093,3094,401,3095,545,401,3096,401,3095,545,401,803,414,401,3097,3098,401,3099,3100,401,3101,572,401,3102,414,399],"373":[3103,401,401,3104,401,3105,3106,850,401,3107,573,401,3108,414,401,3109,3110,3111,3112,818,3113,3114,3115,401,3116,399],"374":[3117,3118,957,401,3119,1436,564,414,401,458,399],"375":[3120,401,401,401,3121,456,401,3122,3123,401,3124,957,401,3125,401,3126,399],"376":[3127,864,3128,3129,3130,3131,3132,3133,401,3134,401,401,401,3135,3136,3137,3138,401,679,414,401,405,399],"377":[3139,401,401,401,2870,3140,401,2872,401,3141,401,401,401,401,401,401,3142,3143,3144,3145,3146,3147,401,3148,401,1594,401,3149,401,3150,3151,1614,719,401,725,401,3152,567,401,3153,3154,3155,3156,3157,3158,3159,2988,401,725,401,3160,3157,3161,2988,401,725,401,401,401,3162,3163,401,3164,401,3165,3166,3167,401,3168,738,401,3169,573,401,3170,3171,3172,401,3173,401,957,414,401,1185,3174,1543,3175,401,3176,401,1690,401,456,414,399],"378":[3177,401,3178,563,564,401,3179,567,401,3180,567,401,456,414,401,3181,401,3182,3183,3184,3185,401,545,573,401,3186,401,3187,3188,401,3189,401,743,414,401,3190,3191,401,405,399],"379":[3192,2879,745,3193,401,3194,3195,3196,401,2425,3197,3198,3199,401,3200,544,401,2257,573,401,743,414,401,3201,745,3202,3014,3203,3204,401,3205,3206,3207,401,3208,3209,3210,401,3211,3212,2916,3213,401,3214,401,3215,3216,2916,3217,401,3218,401,3219,3220,2916,3221,401,3222,401,3223,3224,3225,3226,3227,401,3228,401,3229,544,401,545,3230,3211,3231,2916,3213,401,3214,401,3215,3216,2916,3217,401,3218,401,3219,3232,3233,3221,401,3222,401,3223,3224,3225,3226,3227,401,3228,401,3229,544,401,545,573,401,3022,2898,401,2750,401,743,414,401,3234,3235,567,401,3236,567,401,456,414,401,3237,3238,567,401,3239,567,401,3240,567,401,456,414,401,2938,399],"380":[3241,401,401,3242,818,401,3243,3244,3245,401,3246,414,401,828,401,3247,3248,3249,3250,842,843,844,401,845,414,401,3251,401,3252,399],"381":[3253,401,401,401,864,401,412,3254,3255,3256,3257,401,3258,572,401,3259,401,3260,3261,654,573,401,2896,3262,401,2750,414,401,405,399],"382":[3263,3264,3265,3266,654,401,3267,3268,401,3269,3270,401,3271,401,3272,573,401,3273,3274,401,3275,545,401,3276,401,3277,414,401,3278,3279,3280,3281,401,1185,3282,1543,3283,401,1545,414,399],"383":[3284,3285,3286,401,3287,3288,864,401,3289,3290,3291,401,3292,3293,572,573,401,3294,3295,3296,401,3297,414,401,860,856,401,3298,401,405,399],"384":[3299,1119,602,401,1120,602,401,1214,602,401,1117,602,401,1118,3300,401,3301,401,3302,3303,401,3304,3305,401,3306,414,401,2715,401,3307,401,1025,399],"385":[3308,3309,3310,401,3311,399],"386":[3312,401,401,3313,3314,3315,401,3316,399],"387":[3317,401,401,3318,401,3319,399],"388":[3320,401,401,3321,399],"389":[3322,3318,401,3323,399],"390":[3324,3325,401,3326,399],"391":[3327,3328,401,3329,401,3330,399],"392":[3331,401,1400,3332,3333,3334,3335,3336,3337,3338,3339,552,3340,3341,3342,3343,3344,401,3345,573,414,401,3346,399],"393":[3347,3348,401,3349,399],"394":[3350,1859,401,2071,3351,3352,3353,3354,552,3355,414,401,3356,401,3357,3358,3359,3360,3361,3362,3363,3364,3365,3366,3367,3368,3369,3370,3371,3372,3373,3374,3375,2799,3376,401,3377,854,3378,399],"395":[3379,401,3380,401,1846,399],"396":[3381,3382,563,564,401,3383,3384,401,3385,414,401,2650,3386,401,2747,3387,492,414,401,3388,401,3389,3387,492,414,401,3390,401,3391,3392,401,3393,401,2717,401,3394,401,3395,401,3396,492,401,2724,401,3397,492,401,3398,3399,3400,3401,3402,401,1672,3403,3404,3405,401,3406,3407,401,3408,401,2517,2519,401,3409,3410,401,3411,414,401,2521,3412,3413,401,3414,573,414,401,3415,401,3416,401,868,3417,3418,3419,3420,3421,3422,3423,401,3424,414,399]}
const fns={abs,add,and,angle,append,arr,asc,at,back,base36_decode,base36_encode,between,brace,bracket,byte_size,capture,check_arg,check_arity,check,chr,clear,clone,cmp,collate,concat,contain,count,crc,cut_l,cut_r,date_decode,date_str,dbg_backtrace,dbg_callstack,dbg_here,dbg_origin_xs,dbg_origin,dbg_source_map,dbg_source,dec,dedup,deinit_common,delimit,different,div,dom_entities,dom_escape,dom_unescape,drop,dump,dup,eq,every,explode,extract,fallback_error,filter,find,flower,fn_args,fn_match,fn_select,front,get,gn_run,gt,gte,has,head,iif,implode,inc,indent,init_common,insert,is_access,is_alnum,is_alpha,is_arr,is_atom,is_blank,is_bool,is_browser,is_char,is_comment,is_container,is_cool,is_def,is_digit,is_empty,is_false,is_fn,is_fragment,is_full,is_gn,is_identifier,is_indented,is_int,is_ip,is_ip4,is_ip6,is_json,is_last,is_lisp,is_lit_char,is_lit,is_ln,is_lower,is_many,is_name,is_node,is_none,is_noun,is_null,is_num,is_numeric,is_obj,is_pair,is_punct,is_single,is_space,is_str,is_token,is_trivia,is_true,is_tuple,is_txt,is_uint,is_undef,is_upper,is_url,is_vec,is_word,is_xn,join,json_decode,json_dump,json_encode,log,lt,lte,main,map,match_l,match_r,match,max,merge,min,mod,mul,mute,neq,nop,obj_keys,obj_length,obj_push,obj_remove,obj_unshift,obj_vals,obj,on,or,pad_l,pad_r,paren,partial,path_concat,path_file,path_fix,path_join,path_split,path_strip,path_unfix,path_up,pop,prepend,profile,push,put,random,record,reject,remove,repeat,replace_rec,replace,report_html,report_init,report_log,report_render,resolve,reverse,round,salt,same,scan,set,shift,shuffle,silent,sleep,slice_l,slice_r,slice,sort,space,split,stop,str_indent,str_unindent,strip_l,strip_r,sub,tail,tbl_column,tbl_columns,tbl_index,tbl_init,tbl_pad_l,tbl_remove_column,tbl_rename_column,tbl_render,time_delay,time_get,time_hn,time_interval,time_now,time_str,time_timeout,to_base36,to_dump,to_fixed,to_i,to_int,to_json,to_lit,to_lower,to_num,to_str,to_tbl,to_uint,to_upper,trace,trim_l,trim_r,trim,trunc,tty_width,txt_compact,txt_cut,txt_indent,txt_prepend,unaccent,unshift,unwrap,url_beautify,url_get,url_parse,wait,xor,app_list,beep,deinit_node,digest,dir_call,dir_change,dir_current,dir_find,dir_load,dir_make,dir_read,dir_reset,dir_size,file_append,file_load,file_read,file_save,file_size,file_write,fs_copy,fs_modified,fs_remove,http_get,init_node,inspect,ip_host,ip_list,ip_v4,ip_v6,is_batch,is_color,is_dir,is_file,is_fs,is_interactive,is_readable,mail,open,os_capture,os_detach,os_execute,os_home,os_host,os_log,os_prompt,os_ps,os_run,os_shell,os_system,os_user,path_base,path_dir,path_ext,path_real,path_tmp,report_mail,sigint,ssh_execute,ssh_pass,ssh_system,sudo_save,write,app_token,init_server,is_local,is_remote,is_root,mnt_clean,mnt_unmount,app_home,app_make,ast_assign,ast_begin,ast_brk,ast_call,ast_catch,ast_check,ast_cont,ast_else,ast_elseif,ast_fn,ast_forin,ast_fornum,ast_forof,ast_gn,ast_if,ast_include,ast_inline,ast_let,ast_ret,ast_run,ast_throw,ast_try,ast_var,ast_while,ast_yield,call_ast_block_top,call_ast_block,call_ast_declare,call_ast_for,call_ast_if,call_ast_xn,cpl_block,cpl_check_syntax,cpl_check,cpl_compile,cpl_deinit,cpl_dump,cpl_fold,cpl_for,cpl_generate,cpl_include,cpl_init,cpl_is_call,cpl_is_leaf,cpl_load,cpl_log_error,cpl_scan,cpl_scope,cpl_source_map,cpl_tokenize,cpl_translate,cpl_uncomment,expr_arg,expr_arr,expr_call,expr_in,expr_inline,expr_instanceof,expr_new,expr_obj,expr_right,expr_run,expr_rvalue,expr_value,init}
main()