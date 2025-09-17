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
 check(lt,y,x.length)
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
 if(is_undef(x))
  check(same,arguments.length,1)
 const _=[]
 {
  const history=_
  {
   function process(x)
   {
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
 return implode(x)
}
function contain(x,y)
{
 check_arg(is_composite,x,"x","composite")
 check_arity("gte",arguments.length,1)
 if(is_undef(y))
  check(same,arguments.length,2)
 if(is_str(x))
 {
  check(is_str,y)
  return x.includes(y)
 }
 else if(is_arr(x))
  return x.includes(y)
 else if(is_obj(x))
 {
  const _=(typeof(x)==="function")?x():x
  {
   for(const k in _)
   {
    const _=get(x,k)
    {
     const v=_
     {
      if(same(v,y))
       return true
     }
    }
   }
   return false
  }
 }
 else
  stop()
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
 const _="..."
 {
  const ellipsis=_
  {
   const _=sub(y,ellipsis.length)
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
           const _=concat(r,ellipsis)
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
                     if(gte(i,paths.length))
                      continue
                     const _=at(paths,i)
                     {
                      const path=_
                      {
                       const _=at(indices,i)
                       {
                        const index=_
                        {
                         const _=(typeof(i)==="function")?i():i
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
                {
                 const _=null
                 {
                  let script=_
                  {
                   if((typeof(is_node)==="function")?is_node():is_node)
                   {
                    script=(typeof(global.script)==="function")?global.script():global.script
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
  }
 }
}
function dbg_source(x)
{
 function get_source()
 {
  check_arity("same",arguments.length,0)
  if((typeof(is_node)==="function")?is_node():is_node)
  {
   const _=file_load(script)
   {
    const s=_
    return (typeof(s)==="function")?s():s
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
 if((typeof(is_node)==="function")?is_node():is_node)
  deinit_node()
 else if((typeof(is_browser)==="function")?is_browser():is_browser)
  deinit_browser()
 else
  stop()
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
     put(o,"« ","\"")
     put(o," »","\"")
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
function init_common()
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
 const _=[]
 {
  const args=_
  {
   if((typeof(is_node)==="function")?is_node():is_node)
   {
    global.log_file=true
    const _=slice(process.argv,2)
    {
     const a=_
     {
      if(extract(a,"--verbose"))
      {
       verbose=inc(verbose)
      }
      if(extract(a,"--quiet"))
      {
       verbose=dec(verbose)
      }
      if(extract(a,"--color"))
      {
       color=true
      }
      if(extract(a,"--no-log"))
      {
       log_file=false
      }
      append(args,a)
      init_node()
     }
    }
   }
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
       if(gte(verbose,0))
        log_compile()
       if(is_fn(init))
       {
        init(...args)
        deinit_common()
       }
       else if(is_gn(init))
       {
        const _=init(...args)
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
     }
    }
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
function is_arg(x)
{
 if(is_identifier(x))
  return true
 if(is_access(x))
  return (typeof(x)==="function")?x():x
 if(is_numeric(x))
  return true
 if(is_lit(x))
  return true
 if(is_lit_char(x))
  return true
 return false
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
 check_arity("same",arguments.length,0)
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
function is_composite(x)
{
 if(is_str(x))
  return true
 if(is_arr(x))
  return true
 if(is_obj(x))
  return true
 return false
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
 if(is_alnum(x))
  return true
 if(is_space(x))
  return true
 return false
}
function is_full(x)
{
 if(!(is_vec(x)))
  return false
 return !(is_empty(x))
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
     const _=concat(quote,s)
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
 if(!(is_str(x)))
  return false
 return !(is_txt(x))
}
function is_lower(x)
{
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
 if(!(is_vec(x)))
  return false
 return gt(x.length,1)
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
 check_arity("same",arguments.length,0)
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
 if(!(is_vec(x)))
  return false
 return same(x.length,1)
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
 if(!(is_str(x)))
  return (typeof(fals)==="function")?fals():fals
 return contain(x,"\n")
}
function is_uint(x)
{
 if(!(is_int(x)))
  return false
 return gte(x,0)
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
 if(is_undef(x))
 {
  check(same,arguments.length,1)
  return "undefined"
 }
 return JSON.stringify(x)
}
function log_append(...x)
{
 function escape(x)
 {
  check_arg(is_str,x,"x","str")
  check_arity("same",arguments.length,1)
  const _=[]
  {
   const a=_
   {
    const _=(typeof(x)==="function")?x():x
    {
     for(const v of _)
     {
      if(is_alnum(v))
      {
       push(a,v)
       continue
      }
      if(is_punct(v))
      {
       push(a,v)
       continue
      }
      const _=json_encode(v)
      {
       const s=_
       {
        const _=strip_l(s,"\"")
        {
         const s=_
         {
          const _=strip_r(s,"\"")
          {
           const s=_
           push(a,s)
          }
         }
        }
       }
      }
     }
     return implode(a)
    }
   }
  }
 }
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
           if(is_str(v))
           {
            push(parts,v)
            continue
           }
           const _=inspect(v,false)
           {
            const s=_
            push(parts,s)
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
                const inputs=_
                {
                 const _=split(inputs)
                 {
                  const inputs=_
                  {
                   const _=map(inputs,escape)
                   {
                    const inputs=_
                    {
                     const _=[]
                     {
                      const lines=_
                      {
                       if(is_empty(inputs))
                       {
                        const _=space(pid,date,time)
                        {
                         const s=_
                         push(lines,s)
                        }
                       }
                       else
                       {
                        const _=(typeof(inputs)==="function")?inputs():inputs
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
function log(...x)
{
 function node_log(...x)
 {
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
            if(is_str(v))
            {
             push(parts,v)
             continue
            }
            const _=inspect(v)
            {
             const s=_
             push(parts,s)
            }
           }
          }
         }
        }
       }
       {
        const _=join(parts," ")
        {
         const content=_
         {
          const _=split(content)
          {
           for(const v of _)
           {
            const _=(typeof(tty_width)==="function")?tty_width():tty_width
            {
             const n=_
             {
              const _=head(v,n)
              {
               const line=_
               console.log(line)
              }
             }
            }
           }
           {
            if((typeof(log_file)==="function")?log_file():log_file)
             log_append(...x)
           }
          }
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
   global.minute=60
   global.hour=mul(60,minute)
   global.day=mul(24,hour)
   global.month=mul(30,day)
   global.year=mul(12,month)
   global.traces=[]
   global.entities=(typeof(dom_entities)==="function")?dom_entities():dom_entities
   if((typeof(is_node)==="function")?is_node():is_node)
    init_common()
   else if((typeof(is_browser)==="function")?is_browser():is_browser)
   {
    function on_load(x)
    {
     check_arg(is_obj,x,"x","obj")
     check_arity("same",arguments.length,1)
     if(same(document.readyState,"complete"))
     {
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
function obj_push(x,key,val)
{
 check_arg(is_obj,x,"x","obj")
 check_arg(is_str,key,"key","str")
 check_arg(is_def,val,"val","def")
 check_arity("same",arguments.length,3)
 const _={}
 {
  const r=_
  {
   const _=(typeof(x)==="function")?x():x
   {
    for(const k in _)
    {
     if(same(k,key))
      continue
     const _=get(x,k)
     {
      const v=_
      put(r,k,v)
     }
    }
    {
     put(r,key,val)
     return (typeof(r)==="function")?r():r
    }
   }
  }
 }
}
function obj_remove(x,key)
{
 check_arg(is_obj,x,"x","obj")
 check_arg(is_str,key,"key","str")
 check_arity("same",arguments.length,2)
 const _={}
 {
  const r=_
  {
   const _=(typeof(x)==="function")?x():x
   {
    for(const k in _)
    {
     if(same(k,key))
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
function obj_unshift(x,key,val)
{
 check_arg(is_obj,x,"x","obj")
 check_arg(is_str,key,"key","str")
 check_arg(is_def,val,"val","def")
 check_arity("same",arguments.length,3)
 const _={}
 {
  const r=_
  {
   put(r,key,val)
   const _=(typeof(x)==="function")?x():x
   {
    for(const k in _)
    {
     if(same(k,key))
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
function pad_l(x,padding,length)
{
 check_arg(is_cool,x,"x","cool")
 check_arity("gte",arguments.length,1)
 if(is_uint(x))
 {
  const _=to_json(x)
  {
   const s=_
   {
    if(is_undef(padding))
    {
     if(is_undef(length))
      return pad_l(s,"0",3)
     return pad_l(s,"0",length)
    }
    return pad_l(s,padding,length)
   }
  }
 }
 check(is_str,x)
 check(is_str,padding)
 check(is_uint,length)
 return x.padStart(length,padding)
}
function pad_r(x,padding,length)
{
 check_arg(is_cool,x,"x","cool")
 check_arity("gte",arguments.length,1)
 if(is_uint(x))
 {
  const _=to_json(x)
  {
   const s=_
   {
    if(is_undef(padding))
    {
     if(is_undef(length))
      return pad_r(s,"0",3)
     return pad_r(s,"0",length)
    }
    return pad_r(s,padding,length)
   }
  }
 }
 check(is_str,x)
 check(is_str,padding)
 check(is_uint,length)
 return x.padEnd(length,padding)
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
function quote(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 return concat("\"",x,"\"")
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
function squote(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 return concat("'",x,"'")
}
function stop(x)
{
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
 return []
}
function tbl_pad_l(x,column,length)
{
 check_arg(is_arr,x,"x","arr")
 check_arg(is_str,column,"column","str")
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
      const _=get(v,column)
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
   const _=get(v,column)
   {
    const cell=_
    {
     const _=pad_l(cell," ",length)
     {
      const cell=_
      set(v,y,cell)
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
  const _=(typeof(process.stdout.columns)==="function")?process.stdout.columns():process.stdout.columns
  {
   const r=_
   {
    check(is_uint,r)
    return (typeof(r)==="function")?r():r
   }
  }
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
function argv_context()
{
 check_arity("same",arguments.length,0)
 const _=[]
 {
  const r=_
  {
   if(gt(verbose,0))
    push(r,"--verbose")
   else if(lt(verbose,0))
    push(r,"--quiet")
   if((typeof(is_color)==="function")?is_color():is_color)
    push(r,"--color")
   if(!((typeof(log_file)==="function")?log_file():log_file))
    push(r,"--no-log")
   return (typeof(r)==="function")?r():r
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
                                 trace("remove",path,age)
                                }
                               }
                              }
                             }
                            }
                           }
                          }
                         }
                        }
                       }
                      }
                     }
                    }
                   }
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
 global.binary=(typeof(process.execPath)==="function")?process.execPath():process.execPath
 global.color=false
 global.cwd=(typeof(dir_current)==="function")?dir_current():dir_current
 global.script=at(process.argv,1)
 global.script=path_real(script)
 process.on("uncaughtExceptionMonitor",on_uncaught_exception)
 const _=path_dir(script)
 {
  const dir=_
  {
   dir_change(dir)
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
 }
}
function inspect(x,color)
{
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
 check_arity("same",arguments.length,0)
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
         const _=""
         {
          let buffer=_
          {
           function print(x)
           {
            check_arg(is_str,x,"x","str")
            check_arity("same",arguments.length,1)
            buffer=concat(buffer,x)
            if(!(match_r(buffer,"\n")))
             return
            const _=strip_r(buffer,"\n")
            {
             const s=_
             {
              log(s)
              out=concat(out,buffer)
              buffer=""
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
             print(s)
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
           const _=["inherit","pipe","pipe"]
           {
            const stdio=_
            {
             const _={stdio}
             {
              const option=_
              {
               const _=cp.spawn(x,y,option)
               {
                const child=_
                {
                 check(is_obj,child)
                 function on_sigint(x)
                 {
                  check_arg(is_str,x,"x","str")
                  check_arity("same",arguments.length,1)
                  child.kill(x)
                 }
                 const _=sigint(on_sigint)
                 {
                  const on_sigint=_
                  {
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
                             if(is_full(buffer.out))
                              print("\n")
                             const _=trim_r(out)
                             {
                              const out=_
                              {
                               const _=trim_r(err)
                               {
                                const err=_
                                {
                                 process.removeListener("SIGINT",on_sigint)
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
        const out=_
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
              const _=get(buffer,key)
              {
               const s=_
               {
                const _=concat(s,str)
                {
                 const s=_
                 {
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
               const _=sigint(on_sigint)
               {
                const on_sigint=_
                {
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
                           if(is_full(buffer.out))
                            print("out","\n")
                           if(is_full(buffer.err))
                            print("err","\n")
                           process.removeListener("SIGINT",on_sigint)
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
    const option=_
    {
     const _=cp.spawnSync(x,y,option)
     {
      const result=_
      {
       const _=(typeof(result.status)==="function")?result.status():result.status
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
function sigint(callback)
{
 check_arg(is_fn,callback,"callback","fn")
 check_arity("same",arguments.length,1)
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
  {
   process.once("SIGINT",on_sigint)
   return on_sigint
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
function init_shell()
{
 check_arity("same",arguments.length,0)
 global.login_merlin="debian@mabynogy.org"
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
 return os_execute("fusermount","-u",x)
}
function sudo_append(path,data)
{
 check_arg(is_str,path,"path","str")
 check_arg(is_str,data,"data","str")
 check_arity("same",arguments.length,2)
 const _=file_read(path)
 {
  const content=_
  {
   const _=concat(content,data)
   {
    const content=_
    sudo_save(path,content)
   }
  }
 }
}
function sudo_read(path)
{
 check_arg(is_str,path,"path","str")
 check_arity("same",arguments.length,1)
 const _=os_run("sudo","cat",path)
 {
  const result=_
  {
   check(same,result.status,0)
   check(is_empty,result.err)
   return (typeof(result.out)==="function")?result.out():result.out
  }
 }
}
function sudo_remove(path)
{
 check_arg(is_str,path,"path","str")
 check_arity("same",arguments.length,1)
 os_system("sudo","rm","--recursive","--force",path)
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
     const _=call_expr_right(cpl,...right)
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
 const _=expr_call(cpl,...args)
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
   const _=call_expr_right(cpl,...args)
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
    const _=call_expr_right(cpl,...args)
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
 const _=expr_call(cpl,...args)
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
 const _=call_expr_right(cpl,...args)
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
   const _=call_expr_right(cpl,...args)
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
 const _=call_expr_right(cpl,...args)
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
     const _=call_expr_right(cpl,...code)
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
   const _=call_expr_right(cpl,...args)
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
   const _=call_expr_right(cpl,...args)
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
function cpl_check_fn(x,nodes,path)
{
 check_arg(is_obj,x,"x","obj")
 check_arg(is_arr,nodes,"nodes","arr")
 check_arg(is_str,path,"path","str")
 check_arity("same",arguments.length,3)
 const _=path_file(path)
 {
  const file=_
  {
   const _=replace(file,"-","_")
   {
    const name=_
    {
     if(same(name,"check_arity"))
      return
     const _=(typeof(nodes)==="function")?nodes():nodes
     {
      for(const v of _)
      {
       if(same(v.operator,"fn"))
       {
       }
       else if(same(v.operator,"gn"))
       {
       }
       else
        continue
       const _=front(v.args)
       {
        const xn=_
        {
         if(same(xn,name))
          return
        }
       }
      }
      {
       const _=to_lit(file)
       {
        const s_file=_
        {
         const _=to_lit(name)
         {
          const s_name=_
          {
           const _=space("The file",s_file,"must define a function or a generator nammed",s_name)
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
          if(same(arity.operator,"gte"))
          {
           if(same(arity.count,0))
           {
            r.children=visit(r.children)
            return (typeof(r)==="function")?r():r
           }
          }
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
  if(same(x,"fn"))
   return true
  if(same(x,"gn"))
   return true
  return false
 }
 return visit(y)
}
function cpl_compile(x,path)
{
 check_arg(is_obj,x,"x","obj")
 check_arg(is_str,path,"path","str")
 check_arity("same",arguments.length,2)
 const _=cpl_load(x,path)
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
       cpl_check_fn(x,nodes,path)
       const _=cpl_check(x,nodes)
       {
        const nodes=_
        {
         const _=cpl_for(x,nodes)
         {
          let nodes=_
          {
           try
           {
            nodes=cpl_scope(x,nodes)
           }
           catch(e)
           {
            cpl_dump(x)
            throw (typeof(e)==="function")?e():e
           }
           const _=cpl_block(x,nodes)
           {
            const nodes=_
            return (typeof(nodes)==="function")?nodes():nodes
           }
          }
         }
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
               push(a3,v)
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
function cpl_include(cpl)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arity("same",arguments.length,1)
 function compile_cache(path)
 {
  check_arg(is_str,path,"path","str")
  check_arity("same",arguments.length,1)
  const _=path_real("src")
  {
   const relative=_
   {
    const _=path_fix(relative)
    {
     const relative=_
     {
      const _=strip_l(path,relative)
      {
       const relative=_
       {
        const _=(typeof(cpl.cache.files)==="function")?cpl.cache.files():cpl.cache.files
        {
         const cache=_
         {
          const _=fs_modified(path)
          {
           const modified=_
           {
            const _=false
            {
             let recompile=_
             {
              if(has(cache,relative))
              {
               const _=get(cache,relative)
               {
                const entry=_
                {
                 if(different(entry.modified,modified))
                 {
                  recompile=true
                 }
                }
               }
              }
              else
              {
               recompile=true
              }
              if(!((typeof(recompile)==="function")?recompile():recompile))
              {
               const _=get(cache,relative)
               {
                const entry=_
                {
                 const _=(typeof(entry.nodes)==="function")?entry.nodes():entry.nodes
                 {
                  const nodes=_
                  {
                   declare_fn(path,nodes)
                   return (typeof(nodes)==="function")?nodes():nodes
                  }
                 }
                }
               }
              }
              const _=to_lit(relative)
              {
               const s_relative=_
               {
                const _=concat("path=",s_relative)
                {
                 const s_relative=_
                 {
                  const _=time_hn(modified)
                  {
                   const s_modified=_
                   {
                    const _=to_lit(s_modified)
                    {
                     const s_modified=_
                     {
                      const _=concat("modified=",s_modified)
                      {
                       const s_modified=_
                       {
                        trace("compile",s_relative,s_modified)
                        const _=cpl_compile(cpl,path)
                        {
                         const nodes=_
                         {
                          declare_fn(path,nodes)
                          const _={modified,nodes}
                          {
                           const entry=_
                           {
                            set(cache,relative,entry)
                            return (typeof(nodes)==="function")?nodes():nodes
                           }
                          }
                         }
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
 function declare_fn(path,nodes)
 {
  check_arg(is_str,path,"path","str")
  check_arg(is_arr,nodes,"nodes","arr")
  check_arity("same",arguments.length,2)
  if(is_empty(nodes))
   return
  const _=path_file(path)
  {
   const fn=_
   {
    const _=replace(fn,"-","_")
    {
     const fn=_
     push(cpl.fns,fn)
    }
   }
  }
 }
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
 const _=get_includes(cpl.app)
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
         const _=compile_cache(v)
         {
          const nodes=_
          append(cpl.out,nodes)
         }
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
    const _={}
    {
     const scans=_
     {
      const _={}
      {
       const files=_
       return {scans,files}
      }
     }
    }
   }
   const _=(typeof(x)==="function")?x():x
   {
    const app=_
    {
     const _=fn_select("ast_")
     {
      const asts=_
      {
       const _=fn_select("expr_")
       {
        const exprs=_
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
                  {
                   const _=(typeof(load_cache)==="function")?load_cache():load_cache
                   {
                    const cache=_
                    return {app,asts,exprs,fns,files,stack,out,target,path,cache}
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
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
function cpl_load(x,path)
{
 check_arg(is_obj,x,"x","obj")
 check_arg(is_str,path,"path","str")
 check_arity("same",arguments.length,2)
 const _=[]
 {
  const r=_
  {
   const _=(typeof(dir_current)==="function")?dir_current():dir_current
   {
    const path2=_
    {
     const _=path_concat(path2,"src")
     {
      const path2=_
      {
       const _=path_fix(path2)
       {
        const path2=_
        {
         const _=strip_l(path,path2)
         {
          const path2=_
          {
           const _=cpl_uncomment(x,path2)
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
                       const _=(typeof(path2)==="function")?path2():path2
                       {
                        const path=_
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
                         return
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
                                              }
                                             }
                                            }
                                           }
                                          }
                                         }
                                        }
                                       }
                                      }
                                     }
                                    }
                                   }
                                  }
                                 }
                                }
                               }
                              }
                             }
                            }
                           }
                          }
                         }
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
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
  parse_error(cpl,path,err)
 }
 catch(e)
 {
  return false
 }
 return true
}
function cpl_scan(cpl,str)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_str,str,"str","str")
 check_arity("same",arguments.length,2)
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
    const _=(typeof(cpl.cache.scans)==="function")?cpl.cache.scans():cpl.cache.scans
    {
     const cache=_
     {
      if(has(cache,s))
      {
       const _=get(cache,s)
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
            put(cache,s,a)
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
function cpl_scope(x,nodes)
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
  if(same(operator,"let"))
   return true
  if(same(operator,"var"))
   return true
  return false
 }
 function is_for(operator)
 {
  if(same(operator,"forof"))
   return true
  if(same(operator,"forin"))
   return true
  if(same(operator,"fornum"))
   return true
  return false
 }
 return visit(nodes)
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
function cpl_tokenize(x,nodes)
{
 check_arg(is_obj,x,"x","obj")
 check_arg(is_arr,nodes,"nodes","arr")
 check_arity("same",arguments.length,2)
 const _=[]
 {
  const r=_
  {
   const _=(typeof(nodes)==="function")?nodes():nodes
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
function call_expr_arg(cpl,x)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,2)
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
   const _=space("Invalid argument",s)
   {
    const message=_
    stop(message)
   }
  }
 }
}
function call_expr_right(cpl,x,...y)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arity("gte",arguments.length,1)
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
 return call_expr_rvalue(cpl,x,...y)
}
function call_expr_rvalue(cpl,...x)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arity("gte",arguments.length,1)
 const _=front(x)
 {
  const first=_
  {
   if(is_single(x))
   {
    if(same(first,"arr"))
     return expr_arr(cpl)
    else if(same(first,"obj"))
     return expr_obj(cpl)
    else
     return (typeof(first)==="function")?first():first
   }
   const _=slice(x,1)
   {
    const args=_
    {
     if(has(cpl.exprs,first))
     {
      const _=get(cpl.exprs,first)
      {
       const fn=_
       return fn(cpl,...args)
      }
     }
     return expr_call(cpl,...x)
    }
   }
  }
 }
}
function expr_arr(cpl,...x)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arity("gte",arguments.length,1)
 const _=partial(call_expr_arg,cpl)
 {
  const fn=_
  {
   const _=map(x,fn)
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
 }
}
function expr_call(cpl,x,...y)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_name,x,"x","name")
 check_arity("gte",arguments.length,2)
 const _=partial(call_expr_arg,cpl)
 {
  const fn=_
  {
   const _=map(y,fn)
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
 }
}
function expr_iif(cpl,x,y,z,...a)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_arg,x,"x","arg")
 check_arg(is_arg,y,"y","arg")
 check_arg(is_arg,z,"z","arg")
 check_arity("gte",arguments.length,4)
 check(is_empty,a)
 return concat(x,"?",y,":",z)
}
function expr_in(cpl,x,y,...z)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_identifier,x,"x","identifier")
 check_arg(is_identifier,y,"y","identifier")
 check_arity("gte",arguments.length,3)
 check(is_empty,z)
 return space(y,"in",x)
}
function expr_inline(cpl,x)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,2)
 return unwrap(x)
}
function expr_instanceof(cpl,x,y,...z)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_name,x,"x","name")
 check_arg(is_identifier,y,"y","identifier")
 check_arity("gte",arguments.length,3)
 check(is_empty,z)
 return space(x,"instanceof",y)
}
function expr_new(cpl,...x)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arity("gte",arguments.length,1)
 const _=call_expr_rvalue(cpl,...x)
 {
  const rvalue=_
  return space("new",rvalue)
 }
}
function expr_not(cpl,...x)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arity("gte",arguments.length,1)
 const _=call_expr_right(cpl,...x)
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
function expr_obj(cpl,...x)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arity("gte",arguments.length,1)
 check(every,x,is_identifier)
 const _=join(x,",")
 {
  const s=_
  return brace(s)
 }
}
function expr_run(cpl,...x)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arity("gte",arguments.length,1)
 const _=expr_call(cpl,...x)
 {
  const call=_
  return space("yield*",call)
 }
}
function expr_value(cpl,x,...y)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_str,x,"x","str")
 check_arity("gte",arguments.length,2)
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
                     const _=(typeof(argv_context)==="function")?argv_context():argv_context
                     {
                      const context=_
                      {
                       const _=[...time,binary,"--trace-uncaught","--trace-deprecation",cpl.target,...context,...args]
                       {
                        const args=_
                        {
                         const _=dedup(args)
                         {
                          const args=_
                          {
                           const _=yield* os_capture(...args)
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
   }
  }
 }
}
const app="make"
const compile=1757929730
const pool=["lib-common/abs.cs","lib-common/add.cs","lib-common/and.cs","lib-common/angle.cs","lib-common/append.cs","lib-common/arr.cs","lib-common/asc.cs","lib-common/at.cs","lib-common/back.cs","lib-common/base36-decode.cs","lib-common/base36-encode.cs","lib-common/between.cs","lib-common/brace.cs","lib-common/bracket.cs","lib-common/byte-size.cs","lib-common/capture.cs","lib-common/check-arg.cs","lib-common/check-arity.cs","lib-common/check.cs","lib-common/chr.cs","lib-common/clear.cs","lib-common/clone.cs","lib-common/cmp.cs","lib-common/collate.cs","lib-common/concat.cs","lib-common/contain.cs","lib-common/count.cs","lib-common/crc.cs","lib-common/cut-l.cs","lib-common/cut-r.cs","lib-common/date-decode.cs","lib-common/date-str.cs","lib-common/dbg/dbg-backtrace.cs","lib-common/dbg/dbg-callstack.cs","lib-common/dbg/dbg-here.cs","lib-common/dbg/dbg-origin-xs.cs","lib-common/dbg/dbg-origin.cs","lib-common/dbg/dbg-source-map.cs","lib-common/dbg/dbg-source.cs","lib-common/dec.cs","lib-common/dedup.cs","lib-common/deinit-common.cs","lib-common/delimit.cs","lib-common/different.cs","lib-common/div.cs","lib-common/dom/dom-entities.cs","lib-common/dom/dom-escape.cs","lib-common/dom/dom-unescape.cs","lib-common/drop.cs","lib-common/dump.cs","lib-common/dup.cs","lib-common/eq.cs","lib-common/every.cs","lib-common/explode.cs","lib-common/extract.cs","lib-common/fallback-error.cs","lib-common/filter.cs","lib-common/find.cs","lib-common/flower.cs","lib-common/fn-args.cs","lib-common/fn-match.cs","lib-common/fn-select.cs","lib-common/front.cs","lib-common/get.cs","lib-common/gn-run.cs","lib-common/gt.cs","lib-common/gte.cs","lib-common/has.cs","lib-common/head.cs","lib-common/iif.cs","lib-common/implode.cs","lib-common/inc.cs","lib-common/indent.cs","lib-common/init-common.cs","lib-common/insert.cs","lib-common/is/is-access.cs","lib-common/is/is-alnum.cs","lib-common/is/is-alpha.cs","lib-common/is/is-arg.cs","lib-common/is/is-arr.cs","lib-common/is/is-atom.cs","lib-common/is/is-blank.cs","lib-common/is/is-bool.cs","lib-common/is/is-browser.cs","lib-common/is/is-char.cs","lib-common/is/is-comment.cs","lib-common/is/is-composite.cs","lib-common/is/is-container.cs","lib-common/is/is-cool.cs","lib-common/is/is-def.cs","lib-common/is/is-digit.cs","lib-common/is/is-empty.cs","lib-common/is/is-false.cs","lib-common/is/is-fn.cs","lib-common/is/is-fragment.cs","lib-common/is/is-full.cs","lib-common/is/is-gn.cs","lib-common/is/is-identifier.cs","lib-common/is/is-indented.cs","lib-common/is/is-int.cs","lib-common/is/is-ip.cs","lib-common/is/is-ip4.cs","lib-common/is/is-ip6.cs","lib-common/is/is-json.cs","lib-common/is/is-last.cs","lib-common/is/is-lisp.cs","lib-common/is/is-lit-char.cs","lib-common/is/is-lit.cs","lib-common/is/is-ln.cs","lib-common/is/is-lower.cs","lib-common/is/is-many.cs","lib-common/is/is-name.cs","lib-common/is/is-node.cs","lib-common/is/is-none.cs","lib-common/is/is-noun.cs","lib-common/is/is-null.cs","lib-common/is/is-num.cs","lib-common/is/is-numeric.cs","lib-common/is/is-obj.cs","lib-common/is/is-pair.cs","lib-common/is/is-punct.cs","lib-common/is/is-single.cs","lib-common/is/is-space.cs","lib-common/is/is-str.cs","lib-common/is/is-token.cs","lib-common/is/is-trivia.cs","lib-common/is/is-true.cs","lib-common/is/is-tuple.cs","lib-common/is/is-txt.cs","lib-common/is/is-uint.cs","lib-common/is/is-undef.cs","lib-common/is/is-upper.cs","lib-common/is/is-url.cs","lib-common/is/is-vec.cs","lib-common/is/is-word.cs","lib-common/is/is-xn.cs","lib-common/join.cs","lib-common/json-decode.cs","lib-common/json-dump.cs","lib-common/json-encode.cs","lib-common/log-append.cs","lib-common/log.cs","lib-common/lt.cs","lib-common/lte.cs","lib-common/main.cs","lib-common/map.cs","lib-common/match-l.cs","lib-common/match-r.cs","lib-common/match.cs","lib-common/max.cs","lib-common/merge.cs","lib-common/min.cs","lib-common/mod.cs","lib-common/mul.cs","lib-common/mute.cs","lib-common/neq.cs","lib-common/nop.cs","lib-common/obj/obj-keys.cs","lib-common/obj/obj-length.cs","lib-common/obj/obj-push.cs","lib-common/obj/obj-remove.cs","lib-common/obj/obj-unshift.cs","lib-common/obj/obj-vals.cs","lib-common/obj.cs","lib-common/on.cs","lib-common/or.cs","lib-common/pad-l.cs","lib-common/pad-r.cs","lib-common/paren.cs","lib-common/partial.cs","lib-common/path/path-concat.cs","lib-common/path/path-file.cs","lib-common/path/path-fix.cs","lib-common/path/path-join.cs","lib-common/path/path-split.cs","lib-common/path/path-strip.cs","lib-common/path/path-unfix.cs","lib-common/path/path-up.cs","lib-common/pop.cs","lib-common/prepend.cs","lib-common/profile.cs","lib-common/push.cs","lib-common/put.cs","lib-common/quote.cs","lib-common/random.cs","lib-common/record.cs","lib-common/reject.cs","lib-common/remove.cs","lib-common/repeat.cs","lib-common/replace-rec.cs","lib-common/replace.cs","lib-common/report/report-html.cs","lib-common/report/report-init.cs","lib-common/report/report-log.cs","lib-common/report/report-render.cs","lib-common/resolve.cs","lib-common/reverse.cs","lib-common/round.cs","lib-common/salt.cs","lib-common/same.cs","lib-common/scan.cs","lib-common/set.cs","lib-common/shift.cs","lib-common/shuffle.cs","lib-common/silent.cs","lib-common/sleep.cs","lib-common/slice-l.cs","lib-common/slice-r.cs","lib-common/slice.cs","lib-common/sort.cs","lib-common/space.cs","lib-common/split.cs","lib-common/squote.cs","lib-common/stop.cs","lib-common/str-indent.cs","lib-common/str-unindent.cs","lib-common/strip-l.cs","lib-common/strip-r.cs","lib-common/sub.cs","lib-common/tail.cs","lib-common/tbl/tbl-column.cs","lib-common/tbl/tbl-columns.cs","lib-common/tbl/tbl-index.cs","lib-common/tbl/tbl-init.cs","lib-common/tbl/tbl-pad-l.cs","lib-common/tbl/tbl-remove-column.cs","lib-common/tbl/tbl-rename-column.cs","lib-common/tbl/tbl-render.cs","lib-common/time/time-delay.cs","lib-common/time/time-get.cs","lib-common/time/time-hn.cs","lib-common/time/time-interval.cs","lib-common/time/time-now.cs","lib-common/time/time-str.cs","lib-common/time/time-timeout.cs","lib-common/to/to-base36.cs","lib-common/to/to-dump.cs","lib-common/to/to-fixed.cs","lib-common/to/to-i.cs","lib-common/to/to-int.cs","lib-common/to/to-json.cs","lib-common/to/to-lit.cs","lib-common/to/to-lower.cs","lib-common/to/to-num.cs","lib-common/to/to-str.cs","lib-common/to/to-tbl.cs","lib-common/to/to-uint.cs","lib-common/to/to-upper.cs","lib-common/trace.cs","lib-common/trim-l.cs","lib-common/trim-r.cs","lib-common/trim.cs","lib-common/trunc.cs","lib-common/tty-width.cs","lib-common/txt/txt-compact.cs","lib-common/txt/txt-cut.cs","lib-common/txt/txt-indent.cs","lib-common/txt/txt-prepend.cs","lib-common/unaccent.cs","lib-common/unshift.cs","lib-common/unwrap.cs","lib-common/url-beautify.cs","lib-common/url-get.cs","lib-common/url-parse.cs","lib-common/wait.cs","lib-common/xor.cs","lib-node/app-list.cs","lib-node/argv-context.cs","lib-node/beep.cs","lib-node/deinit-node.cs","lib-node/digest.cs","lib-node/dir/dir-call.cs","lib-node/dir/dir-change.cs","lib-node/dir/dir-current.cs","lib-node/dir/dir-find.cs","lib-node/dir/dir-load.cs","lib-node/dir/dir-make.cs","lib-node/dir/dir-read.cs","lib-node/dir/dir-reset.cs","lib-node/dir/dir-size.cs","lib-node/file/file-append.cs","lib-node/file/file-load.cs","lib-node/file/file-read.cs","lib-node/file/file-save.cs","lib-node/file/file-size.cs","lib-node/file/file-write.cs","lib-node/fs-copy.cs","lib-node/fs-modified.cs","lib-node/fs-remove.cs","lib-node/http-get.cs","lib-node/init-node.cs","lib-node/inspect.cs","lib-node/ip/ip-host.cs","lib-node/ip/ip-list.cs","lib-node/ip/ip-v4.cs","lib-node/ip/ip-v6.cs","lib-node/is/is-batch.cs","lib-node/is/is-color.cs","lib-node/is/is-dir.cs","lib-node/is/is-file.cs","lib-node/is/is-fs.cs","lib-node/is/is-interactive.cs","lib-node/is/is-readable.cs","lib-node/mail.cs","lib-node/open.cs","lib-node/os/os-capture.cs","lib-node/os/os-detach.cs","lib-node/os/os-execute.cs","lib-node/os/os-home.cs","lib-node/os/os-host.cs","lib-node/os/os-log.cs","lib-node/os/os-prompt.cs","lib-node/os/os-ps.cs","lib-node/os/os-run.cs","lib-node/os/os-shell.cs","lib-node/os/os-system.cs","lib-node/os/os-user.cs","lib-node/path/path-base.cs","lib-node/path/path-dir.cs","lib-node/path/path-ext.cs","lib-node/path/path-real.cs","lib-node/path/path-tmp.cs","lib-node/report-mail.cs","lib-node/sigint.cs","lib-node/ssh/ssh-execute.cs","lib-node/ssh/ssh-pass.cs","lib-node/ssh/ssh-system.cs","lib-shell/app-token.cs","lib-shell/init-shell.cs","lib-shell/is-local.cs","lib-shell/is-remote.cs","lib-shell/is-root.cs","lib-shell/mnt-clean.cs","lib-shell/mnt-unmount.cs","lib-shell/sudo/sudo-append.cs","lib-shell/sudo/sudo-read.cs","lib-shell/sudo/sudo-remove.cs","lib-shell/sudo/sudo-save.cs","lib-compiler/app-home.cs","lib-compiler/app-make.cs","lib-compiler/ast/ast-assign.cs","lib-compiler/ast/ast-begin.cs","lib-compiler/ast/ast-brk.cs","lib-compiler/ast/ast-call.cs","lib-compiler/ast/ast-catch.cs","lib-compiler/ast/ast-check.cs","lib-compiler/ast/ast-cont.cs","lib-compiler/ast/ast-else.cs","lib-compiler/ast/ast-elseif.cs","lib-compiler/ast/ast-fn.cs","lib-compiler/ast/ast-forin.cs","lib-compiler/ast/ast-fornum.cs","lib-compiler/ast/ast-forof.cs","lib-compiler/ast/ast-gn.cs","lib-compiler/ast/ast-if.cs","lib-compiler/ast/ast-include.cs","lib-compiler/ast/ast-inline.cs","lib-compiler/ast/ast-let.cs","lib-compiler/ast/ast-ret.cs","lib-compiler/ast/ast-run.cs","lib-compiler/ast/ast-throw.cs","lib-compiler/ast/ast-try.cs","lib-compiler/ast/ast-var.cs","lib-compiler/ast/ast-while.cs","lib-compiler/ast/ast-yield.cs","lib-compiler/ast/call-ast-block-top.cs","lib-compiler/ast/call-ast-block.cs","lib-compiler/ast/call-ast-declare.cs","lib-compiler/ast/call-ast-for.cs","lib-compiler/ast/call-ast-if.cs","lib-compiler/ast/call-ast-xn.cs","lib-compiler/cpl-block.cs","lib-compiler/cpl-check-fn.cs","lib-compiler/cpl-check-syntax.cs","lib-compiler/cpl-check.cs","lib-compiler/cpl-compile.cs","lib-compiler/cpl-deinit.cs","lib-compiler/cpl-dump.cs","lib-compiler/cpl-fold.cs","lib-compiler/cpl-for.cs","lib-compiler/cpl-generate.cs","lib-compiler/cpl-include.cs","lib-compiler/cpl-init.cs","lib-compiler/cpl-is-call.cs","lib-compiler/cpl-is-leaf.cs","lib-compiler/cpl-load.cs","lib-compiler/cpl-log-error.cs","lib-compiler/cpl-scan.cs","lib-compiler/cpl-scope.cs","lib-compiler/cpl-source-map.cs","lib-compiler/cpl-tokenize.cs","lib-compiler/cpl-translate.cs","lib-compiler/cpl-uncomment.cs","lib-compiler/expr/call-expr-arg.cs","lib-compiler/expr/call-expr-right.cs","lib-compiler/expr/call-expr-rvalue.cs","lib-compiler/expr/expr-arr.cs","lib-compiler/expr/expr-call.cs","lib-compiler/expr/expr-iif.cs","lib-compiler/expr/expr-in.cs","lib-compiler/expr/expr-inline.cs","lib-compiler/expr/expr-instanceof.cs","lib-compiler/expr/expr-new.cs","lib-compiler/expr/expr-not.cs","lib-compiler/expr/expr-obj.cs","lib-compiler/expr/expr-run.cs","lib-compiler/expr/expr-value.cs","app-make/init.cs","fn abs x:num"," ret Math.abs x","end","fn add x:num y:num z:etc"," let r inline \"x+y\"",""," if is_full z","  ret add r z:etc"," ret r","fn and x:bool y:bool z:etc"," let r inline \"x&&y\"","  ret and r z:etc","fn angle x:str"," ret concat \"<\" x \">\"","fn append x:arr y:arr"," forof y","  push x v"," end","fn arr x:etc"," ret inline \"[...x]\"","fn asc x:char"," ret x.charCodeAt 0","fn at x:vec y:uint z"," let n dec x.length"," check between y 0 n"," if is_undef z","  ret inline \"x[y]\""," inline \"x[y]=z\"","fn back x:vec y z"," if is_undef y","  ret back x 0"," check is_uint y"," check lt y x.length"," let n sub x.length y"," let n dec n","  ret at x n"," at x n z","fn base36_decode x:str"," var r \"\""," let a explode x"," while is_full a","  let a2 slice_l a 4","  shift a 4","  let s implode a2","  let n Number.parseInt s 36","  let range mul 256 256","  check is_uint n","  check lte n range","  let c chr n","  assign r concat r c","fn base36_encode x:str"," forof x","  let s asc v","  let s to_base36 s","  let s pad_l s \"0\" 4","  assign r concat r s","fn between x:num y:num z:num"," check gte z y"," if lt x y","  ret false"," if gt x z"," ret true","fn brace x:str"," ret concat \"{\" x \"}\"","fn bracket x:str"," ret concat \"[\" x \"]\"","fn byte_size x:uint"," let kb 1024"," let mb mul kb 1024"," let gb mul mb 1024"," let tb mul gb 1024"," if lt x kb","  let s to_fixed x","  ret concat s \"b\""," if lt x mb","  let s div x kb","  let s trunc s","  let s to_fixed s","  ret concat s \"Kb\""," if lt x gb","  let s div x mb","  ret concat s \"Mb\""," if lt x tb","  let s div x gb","  ret concat s \"Gb\""," let s div x tb"," let s trunc s"," let s to_fixed s"," ret concat s \"Tb\"","fn capture x:fn y:etc"," let o record x y:etc"," ret o.output","fn check_arg is arg name type"," let test is arg"," if is_true test","  ret"," let s_name to_lit name"," let s_type to_lit type"," let s_given typeof arg"," let s_given to_lit s_given"," let s_given space s_given \"given\""," let s_given paren s_given"," let message space \"Expecting argument\" s_name \"to be of type\" s_type s_given"," stop message","inline \"function check_arity(operator,length,arity)\"","inline \"{\"","inline \" return\"","inline \" if(operator===\\\"same\\\")\"","inline \" {\"","inline \"  if(length===arity)\"","inline \"   return\"","inline \" }\"","inline \"\"","inline \" if(operator===\\\"gte\\\")\"","inline \"  if(length>=arity)\"","inline \" const message=\\\"Expecting \\\"+arity+\\\" argument(s) (\\\"+length+\\\" given)\\\"\"","inline \" throw new Error(message)\"","inline \"}\"","fn check x y:etc"," if is_true x","  if is_empty y","   ret"," elseif is_fn x","  let b x y:etc","  if is_true b"," stop \"check\"","fn chr x:uint"," check is_uint x"," ret String.fromCharCode x","fn clear x:arr"," x.splice 0","fn clone x"," if is_undef x","  check same arguments.length 1"," let history arr"," fn process x","  if is_container x","   push history x","  if is_arr x","   let r arr","   forof x","    if contain history v","     push r null","     cont","    end","    let v process v","    push r v","   end","   ret r","  elseif is_obj x","   let r obj","   forin x","    let v get x k","     put r k null","    put r k v","  else","   ret value x"," ret process x","fn cmp x:def y:def"," if inline \"x>y\"","  ret 1"," if inline \"x<y\"","  ret -1"," ret 0","fn collate x:arr"," fn is_delimited x","  if not is_str x","   ret false","  if same x \"_\"","  if is_punct x","   ret true","  if is_space x"," let a arr","  if is_empty a","   push a v","   cont","  end","  let left back a","  let left back left","  let right front v","  if is_delimited left","  elseif is_delimited right","   push a right","  let s concat left right","  drop a","  push a s"," ret join a \" \"","fn concat x:etc"," ret implode x","fn contain x:composite y","  check same arguments.length 2"," if is_str x","  check is_str y","  ret x.includes y"," elseif is_arr x"," elseif is_obj x","  forin x","   let v get x k","   if same v y","    ret true"," else","  stop","fn count x:arr y:def"," var r 0","  if same v y","   assign r inc r","fn crc x:str"," for a","  for s","   let n asc v","   assign r add r n","fn cut_l x:str y:uint"," if lte x.length y","  ret x"," let length sub y 3"," let s slice_r x length"," let a explode s"," while true","  let c front a","  if is_punct c","   shift a","  elseif is_space c","   brk"," let r implode a"," let r concat \"...\" r","fn cut_r x:str y:uint"," check is_str x"," let ellipsis \"...\""," let length sub y ellipsis.length"," let s slice_l x length","  let c back a","   drop a"," let r concat r ellipsis","fn date_decode x:str"," let r new Date x"," let r r.getTime"," let r div r 1000"," let r trunc r","fn date_str x","  let n time_get","  ret date_str n"," check is_num x"," let n mul x 1000"," let o new Date n"," let y o.getFullYear"," let m o.getMonth"," let m inc m"," let m pad_l m \"0\" 2"," let d o.getDate"," let d pad_l d \"0\" 2"," ret concat y \"/\" m \"/\" d","fn dbg_backtrace stack map"," if is_undef stack","  let e new Error \"backtrace\"","  ret dbg_backtrace e.stack map"," check is_str stack"," if is_undef map","  let map dbg_source_map","  ret dbg_backtrace stack map"," check is_obj map"," let r tbl_init"," let stack trim stack"," let stack split stack"," let source map.source"," for stack","  if is_node","   if not contain v map.script","    cont","  let s trim v","  let s replace s \"@\" \" \"","  let a split s \" \"","  let s front a","  if same s \"at\"","  var fn shift a","  if is_empty fn","   assign fn \"anonymous\"","  if not is_noun fn","  let a back a","  let a split a \":\"","  if not is_many a","  let njs back a 1","  let njs to_uint njs","  var index dec njs","  if gte index source.length","  let location at source index","  if is_null location","  let js trim location.js","  let cs trim location.cs","  let path location.path","  let ncs location.index","  let ncs inc location.index","  let o obj fn njs js path ncs cs","  push r o","fn dbg_callstack stack map","  let e new Error \"callstack\"","  ret dbg_callstack e.stack"," let r dbg_backtrace stack map"," while is_full r","  let frame front r","  let fn frame.fn","  if same fn \"throw\"","  elseif same fn \"stop\"","  elseif same fn \"check\"","  elseif same fn \"check_arg\"","  elseif same fn \"check_arity\"","  shift r","fn dbg_here"," let t dbg_callstack"," tbl_remove_column t \"njs\""," tbl_remove_column t \"js\""," let t tbl_render t"," log t","fn dbg_origin_xs stack code_type map","  let e new Error \"origin-xs\"","  ret dbg_origin_xs e.stack"," check is_str code_type","  ret dbg_origin_xs stack code_type map"," let frames dbg_callstack stack map"," let frames head frames 4"," for frames","  var t null","  var label null","  if same code_type \"cs\"","   let file get map.files v.path","   let line v.ncs","   assign t dbg_origin file line","   assign label \"stack\"","  elseif same code_type \"js\"","   let line v.njs","   assign t dbg_origin map.source line \"js\"","   assign label \"javacript\"","   stop","  let s tbl_render t","  let s txt_prepend s \"> \"","  let n inc i","  let title concat \"#\" n","  let title space label \"frame\" title \"/\" v.fn","  flower title","  log s","fn dbg_origin source:arr line:uint key depth"," if is_undef key","  ret dbg_origin source line \"\" depth"," check is_str key"," if is_undef depth","  ret dbg_origin source line key 15"," check is_uint depth"," fn find_origin fn:fn source:arr line:uint key:str depth:uint","  var n depth","  var r fn source line key n","  while lte n source.length","   if gte r.length depth","    brk","   assign n inc n","   assign r fn source line key n","   let end add line r.length","   if gte end source.length","  ret r"," fn origin source:arr line:uint key:str depth:uint","  let r arr","  let a arr","  let n div depth 2","  let n trunc n","  var n sub line n","  let length min source.length depth","  let nup add n length","  if lt n 1","   assign n 1","  elseif gte nup source.length","   assign n sub source.length length","   if lt n 1","    assign n 1","  fornum length","   let n add n i","   var p \" \"","   if same n line","    assign p \">\"","   let index dec n","   var code at source index","   if is_empty key","    check is_str code","   else","    assign code get code key","   let o obj n p code","   push a o","  let a2 arr","  forof a","   push a2 v.code","  let s join a2","  let s str_unindent s","  let a3 split s","  for a3","   let o at a i","   assign o.code v","   if is_empty v.code","   push r v"," fn origin_center source:arr line:uint key:str depth:uint","  let a origin source line key depth","  ret center a"," fn center x:arr","  var middle get_position x","  var range middle","  let length mul range 2","  let length inc length","  if gt length x.length","   assign range sub x.length middle","   assign range dec range","  let ybefore sub middle range","  let yafter inc middle","  let before slice x ybefore range","  let center at x middle","  let after slice x yafter range","  let r arr before:etc center after:etc"," fn get_position x:arr","  for x","   if same v.p \">\"","    ret i"," let centered find_origin origin_center source line key depth"," if same centered.length depth","  ret centered"," ret find_origin origin source line key depth","fn dbg_source_map"," let lines_js split source"," let paths arr"," forof relatives","  let path at pool v","  push paths path"," let files obj"," forin contents","  let content get contents k","  let n to_uint k","  let path at pool n","  let lines arr","  forof content","   let s at pool v","   push lines s","  put files path lines"," let source arr"," if is_node"," elseif is_browser","  fornum 7","   push source null"," for paths","  if gte i paths.length","  let path at paths i","  let index at indices i","  var line_js i","  elseif is_browser","   assign line_js add line_js 5","  let js at lines_js line_js","  let cs get files path","  let cs at cs index","  let o obj path index js cs","  push source o"," var script null","  assign script global.script"," ret obj script files source","fn dbg_source x"," fn get_source","   let s file_load script","   ret s","   ret html.outerHTML","  assign r get_source","  assign r file_load x"," let r trim_r r"," let r split r","  let s pop r","  if match_l s \"const app=\""," let r join r","fn dec x:num"," ret sub x 1","fn dedup x:arr"," let r arr","  if not contain r v","fn deinit_common"," if gte verbose 0","  let profile time_now","  let profile time_delay profile","  let profile to_lit profile","  let profile concat \"profile=\" profile","  log app profile","  deinit_node","  deinit_browser","fn delimit x:str y","  ret delimit x is_fragment"," check is_fn y","  let right v","  if is_empty r","   push r right","  let left back r","  let fragment concat left right","  if is_fragment fragment","   drop r","   push r fragment","fn different x y"," ret inline \"x!==y\"","fn div x:num y:num z:etc"," check different y 0"," let r inline \"x/y\"","  ret div r z:etc","fn dom_entities"," let r obj"," let o obj"," put o \"nbsp\" \" \""," put o \"#160\" \" \""," put o \"amp\" \"&\""," put o \"#38\" \"&\""," put o \"lt\" \"<\""," put o \"gt\" \">\""," put o \"quot\" \"\\\"\""," put o \"#8220\" \"\\\"\""," put o \"#8221\" \"\\\"\""," put o \"« \" \"\\\"\""," put o \" »\" \"\\\"\""," put o \"«\" \"\\\"\""," put o \"»\" \"\\\"\""," put o \"apos\" \"'\""," put o \"rsquo\" \"'\""," put o \"#39\" \"'\""," put o \"#8217\" \"'\""," put o \"#8211\" \"-\""," put o \"#8212\" \"-\""," put o \"#8230\" \"...\""," put o \"#124\" \"|\""," put o \"#215\" \"x\""," put o \"eacute\" \"é\""," put o \"#233\" \"é\""," forin o","  let v get o k","  if is_identifier k","   let key concat \"&\" k \";\"","   put r key v","  if match_l k \"#\"","   let digit strip_l k \"#\"","   if same digit.length 2","    let key concat \"&#0\" digit \";\"","    put r key v","   let c to_uint digit","   let c chr c","   if different c v","    put r c v","  if has r k","  put r k v","fn dom_escape x:str"," var r x"," forin entities","  let v get entities k","  assign r replace r v k","fn dom_unescape x:str","  assign r replace r k v","fn drop x:arr y","  ret drop x 1"," check lte y x.length"," pop x y","fn dump x"," let name fn_args \"dump\""," check is_single name"," let name front name","  let s to_lit x","  log name s","  log name x","fn dup x:container"," if is_arr x","  ret slice x 0","  let r obj","  merge r x","fn eq x:def y:def"," if same x y","  ret true","  if is_arr y","   fornum min x.length y.length","    let xval at x i","    let yval at y i","    if neq xval yval","     ret false","   ret eq x.length y.length"," if is_obj x","  if is_obj y","   let xkeys obj_keys x","   let ykeys obj_keys y","   let xvals obj_vals x","   let yvals obj_vals y","   fornum min xkeys.length ykeys.length","    let xkey at xkeys i","    let ykey at ykeys i","    if neq xkey ykey","    let xval at xvals i","    let yval at yvals i","   ret eq xkeys.length ykeys.length"," let n cmp x y"," ret same n 0","fn every x:arr y:fn","  if not y v","fn explode x:str","  push r v","fn extract x:arr y:def"," var r false"," let a dup x"," clear x"," forof a","   assign r true","   push x v","fn fallback_error x:str y:obj z"," let title space \"Fallback\" x"," flower title"," let s to_str y.stack"," let s trim_r s"," let s txt_prepend s \"error-in-error> \""," console.log s"," check is_obj z"," let s to_str z.stack"," let s txt_prepend s \"original-error> \"","fn filter x:arr y:fn"," ret x.filter y","fn find x:arr y:def"," let value y"," fn match x","  ret same x value"," ret x.findIndex match","fn flower x"," let n tty_width","  let s repeat \"*\" n"," let s1 repeat \"*\" n"," let s2 repeat \"*\" 2"," let s2 concat s2 \" \""," let s2 concat s2 x"," let s2 concat s2 s1"," let s2 slice_l s2 n"," log s2","fn fn_args x:str"," forof dbg_callstack","  let a split v.cs \" \"","  let n find a x","  if lt n 0","  let index inc n","  ret slice a index"," stop","fn fn_match x:str"," forin fns","  if not match k x","  let v get fns k","fn fn_select x:str"," let pattern concat x \"*\""," let fns fn_match pattern","  let name strip_l k x","  put r name v","fn front x:vec"," check is_full x"," ret at x 0","fn get x:obj y:str z"," if has x y"," if is_def z","  ret z","fn gn_run x:gn y:etc"," let generator x y:etc"," fn on_timer","  let iterator generator.next","  if iterator.done","  time_timeout on_timer"," on_timer","fn gt x:num y:num"," ret inline \"x>y\"","fn gte x:num y:num"," ret inline \"x>=y\"","fn has x:obj y:str"," check is_obj x"," check is_str y"," ret inline \"y in x\"","fn head x:vec y:uint"," if lt x.length y","  if is_str x","   ret x","  elseif is_arr x","   ret dup x"," ret slice_l x y","fn iif x:bool y:def z:def"," if x","  ret y"," ret z","fn implode x:arr"," ret join x \"\"","fn inc x:num"," ret add x 1","fn indent x:str y","  ret indent x 1"," forof split x","  let s trim_r v","  if is_empty s","   push a s","   let indent repeat \" \" y","   let s concat indent s"," ret join a","fn init_common"," fn log_compile","  let compile time_hn compile","  let compile to_lit compile","  let compile concat \"compile=\" compile","  let sloc split source","  let sloc sloc.length","  let sloc concat \"sloc=\" sloc","  log app compile sloc"," let args arr","  assign global.log_file true","  let a slice process.argv 2","  if extract a \"--verbose\"","   assign verbose inc verbose","  if extract a \"--quiet\"","   assign verbose dec verbose","  if extract a \"--color\"","   assign color true","  if extract a \"--no-log\"","   assign log_file false","  append args a","  init_node","  init_browser"," assign global.source dbg_source"," let skip arr \"init_common\" \"init_node\" \"init_browser\"","  if contain skip k","  if match k \"init_*\"","   let v get fns k","   v","  log_compile"," if is_fn init","  init args:etc","  deinit_common"," elseif is_gn init","  let generator init args:etc","  fn on_timer","   let iterator generator.next","   if iterator.done","    deinit_common","    ret","   time_timeout on_timer","  on_timer","fn insert x:arr y:uint z:etc"," x.splice y 0 z:etc","fn is_access x"," if not is_str x"," if is_empty x"," let a split x \".\""," if is_single a"," ret every a is_identifier","fn is_alnum x","  if same v \"_\"","  elseif is_alpha v","  elseif is_digit v","fn is_alpha x","  if is_lower v","  elseif is_upper v","fn is_arg x"," if is_identifier x"," if is_access x"," if is_numeric x"," if is_lit x"," if is_lit_char x"," ret false","fn is_arr x"," ret Array.isArray x","fn is_atom x"," if is_alnum x"," if is_tuple x","fn is_blank x"," if is_space x","fn is_bool x"," let s typeof x"," ret same s \"boolean\"","fn is_browser"," ret has_window","fn is_char x"," ret same x.length 1","fn is_comment x"," if not is_ln x"," ret match_l x \"//\"","fn is_composite x","fn is_container x","fn is_cool x"," if is_num x","fn is_def x"," ret not is_undef x","fn is_digit x","  if not contain digit v","fn is_empty x"," if is_vec x","  ret same x.length 0"," if obj x","  let keys obj_keys x","  ret is_empty keys","fn is_false x"," ret same x false","fn is_fn x"," if different s \"function\""," if same x.constructor.name \"GeneratorFunction\"","fn is_fragment x","fn is_full x"," if not is_vec x"," ret not is_empty x","fn is_gn x"," if different x.constructor.name \"GeneratorFunction\"","fn is_identifier x"," let s front x"," if same s \"_\""," elseif is_alpha s","  if not is_alnum v","fn is_indented x","  if is_empty v","  let c front v","  if not is_space c","fn is_int x"," ret Number.isInteger x","fn is_ip x"," if is_ip4 x"," if is_ip6 x","fn is_ip4 x"," if different a.length 4","  if not is_digit v","  let n to_uint v","  if gt n 255","fn is_ip6 x"," let a split x \":\""," if lt a.length 3"," if gt a.length 8","  if contain v \"_\"","  if gt v.length 4","fn is_json x"," try","  json_decode x"," catch","fn is_last x:vec y:uint"," ret same n y","fn is_lisp x"," let a split x \"-\""," ret every a is_alnum","fn is_lit_char x"," if not match_l x \"'\""," if not match_r x \"'\""," let s strip_l x \"'\""," let s strip_r s \"'\""," if is_empty s"," let s concat quote s"," ret is_lit s","fn is_lit x"," if not is_json x"," let v json_decode x"," if not is_str v"," let s json_encode v"," ret same s x","fn is_ln x"," ret not is_txt x","fn is_lower x","  if not contain lower v","fn is_many x"," ret gt x.length 1","fn is_name x","fn is_node"," ret not is_browser","fn is_none x"," if is_null x","fn is_noun x","fn is_null x"," ret same x null","fn is_num x"," if Number.isNaN x"," if same x Number.NEGATIVE_INFINITY"," if same x Number.POSITIVE_INFINITY"," ret same s \"number\"","fn is_numeric x"," if not is_num v","fn is_obj x"," ret same s \"object\"","fn is_pair x"," ret same x.length 2","fn is_punct x","  if not contain punct v","fn is_single x","fn is_space x"," let s trim x"," ret is_empty s","fn is_str x"," ret same s \"string\"","fn is_token x"," if is_atom x"," if is_comment x","fn is_trivia x","fn is_true x"," ret same x true","fn is_tuple x","  if is_identifier v","fn is_txt x","  ret fals"," ret contain x \"\\n\"","fn is_uint x"," if not is_int x"," ret gte x 0","fn is_undef x"," ret same x undefined","fn is_upper x","  if not contain upper v","fn is_url x"," let s to_lower x"," if match_l s \"http://\""," elseif match_l s \"https://\"","  url_parse x","fn is_vec x","fn is_word x"," if contain x \" \""," if contain x \"\\n\""," if contain x \"\\r\"","fn is_xn x"," if is_fn x"," if is_gn x","fn join x:arr y","  ret join x \"\\n\""," ret x.join y","fn json_decode x:str"," ret JSON.parse x","fn json_dump x:def"," ret JSON.stringify x null 1","fn json_encode x","  ret \"undefined\""," ret JSON.stringify x","fn log_append x:etc"," fn escape x:str","  forof x","   if is_alnum v","    push a v","   if is_punct v","   let s json_encode v","   let s strip_l s \"\\\"\"","   let s strip_r s \"\\\"\"","  ret implode a"," let parts arr"," for x","  if is_str v","   push parts v","  let s inspect v false","  push parts s"," let pid pad_l process.pid \" \" 6"," let time time_get"," let date date_str time"," let time time_str time true"," let inputs join parts \" \""," let inputs split inputs"," let inputs map inputs escape"," let lines arr"," if is_empty inputs","  let s space pid date time","  push lines s","  forof inputs","   let s space pid date time v"," let content join lines"," let content concat content \"\\n\""," let base concat app \".txt\""," let dir \"log\""," let path path_concat dir base"," if not is_file path","  dir_make dir","  file_write path content"," let size file_size path"," let limit mul 16 1024 1024"," if lt size limit","  file_append path content"," let a file_load path"," let a split a"," let half div a.length 2"," let half trunc half"," shift a half"," append a lines"," let content join a"," file_write path content","fn log x:etc"," fn node_log x:etc","  let parts arr","   if is_str v","    push parts v","   let s inspect v","   push parts s","  let content join parts \" \"","  forof split content","   let n tty_width","   let line head v n","   console.log line","  if log_file","   log_append x:etc"," if is_str output","   let s to_dump v","  let s join a \" \"","  let s concat s \"\\n\"","  let s concat output s","  assign global.output s","  node_log x:etc","  console.log x:etc","fn lt x:num y:num"," ret inline \"x<y\"","fn lte x:num y:num"," ret inline \"x<=y\"","fn main"," var has_window true","  inline \"window\"","  assign has_window false"," if has_window","  assign window.global window","  assign global.has_window true","  assign global.has_window false"," assign global.zombie false"," assign global.start time_get"," assign global.punct \"!\\\"#$%&'()*+,-./:;<=>?@[\\\\]^`{|}~\""," assign global.digit \"0123456789\""," assign global.lower \"abcdefghijklmnopqrstuvwxyz\""," assign global.upper to_upper lower"," assign global.output null"," assign global.verbose 0"," assign global.minute 60"," assign global.hour mul 60 minute"," assign global.day mul 24 hour"," assign global.month mul 30 day"," assign global.year mul 12 month"," assign global.traces arr"," assign global.entities dom_entities","  init_common","  fn on_load x:obj","   if same document.readyState \"complete\"","    init_common","    assign window.onload null","  assign window.onload on on_load","fn map x:arr y:fn","  let v y v","  check is_def v","fn match_l x:str y:str"," if is_empty y"," if gt y.length x.length"," let s slice_l x y.length"," ret same s y","fn match_r x:str y:str"," let s slice_r x y.length","fn match x:str y:str"," let s replace y \".\" \"\\\\.\""," let s replace s \"*\" \".*\""," let s concat \"^\" s \"$\""," let s new RegExp s"," ret s.test x","fn max x:etc"," ret Math.max x:etc","fn merge x:obj y:obj"," Object.assign x y","fn min x:etc"," ret Math.min x:etc","fn mod x:num y:num z:etc"," let r inline \"x%y\"","  ret mod r z:etc","fn mul x:num y:num z:etc"," let r inline \"x*y\"","  ret mul r z:etc","fn mute x:fn y:etc"," ret o.result","fn neq x:def y:def"," ret not eq x y","fn nop","fn obj_keys x:obj"," ret Object.keys x","fn obj_length x:obj"," let keys obj_keys x"," ret keys.length","fn obj_push x:obj key:str val:def"," forin x","  if same k key","  let v get x k"," put r key val","fn obj_remove x:obj key:str","fn obj_unshift x:obj key:str val:def","fn obj_vals x:obj"," ret Object.values x","fn obj"," ret inline \"{}\"","fn on x:fn y:etc"," let fn value x"," let args y"," fn on_fn x:etc","  if zombie","  ret fn args:etc x:etc"," if zombie"," ret value on_fn","fn or x:bool y:bool z:etc"," let r inline \"x||y\"","  ret or r z:etc","fn pad_l x:cool padding length"," if is_uint x","  let s to_json x","  if is_undef padding","   if is_undef length","    ret pad_l s \"0\" 3","   ret pad_l s \"0\" length","  ret pad_l s padding length"," check is_str padding"," check is_uint length"," ret x.padStart length padding","fn pad_r x:cool padding length","    ret pad_r s \"0\" 3","   ret pad_r s \"0\" length","  ret pad_r s padding length"," ret x.padEnd length padding","fn paren x:str"," ret concat \"(\" x \")\"","fn partial x:fn y:etc"," fn result x:etc"," ret value result","fn path_concat x:str y:str z:etc"," let x strip_r x \"/\""," let y strip_l y \"/\""," let r concat x \"/\" y","  ret path_concat r z:etc","fn path_file x:str"," let s path_base x"," let a split s \".\"","  ret s"," drop a"," ret join a \".\"","fn path_fix x:str"," if match_r x \"/\""," ret concat x \"/\"","fn path_join x:arr"," ret join x \"/\"","fn path_split x:str"," ret split x \"/\"","fn path_strip x:str"," ret strip_r x \"/\"","fn path_unfix x:str","fn path_up x:str"," let a path_split x"," pop a"," ret path_join a","fn pop x:arr y","  ret pop x 1"," if same y 1","  let r back x","  remove x n 1","  ret value r"," remove x n y","fn prepend x:arr y:arr"," let a dup y"," reverse a","  unshift x v","fn profile x:xn y:etc"," var n null"," let before time_now","  assign r x y:etc"," elseif is_gn x","  let generator x y:etc","  while true","    assign r iterator.value"," let after time_now"," let time sub after before"," let time to_fixed time"," let time concat time \"s\""," let time to_lit time"," let time concat \"profile=\" time"," log x.name time","fn push x:arr y"," x.push y","fn put x:obj y:str z","  check same arguments.length 3"," set x y z","fn quote x:str"," ret concat \"\\\"\" x \"\\\"\"","fn random x","  ret random Number.MAX_SAFE_INTEGER"," check gte x 0"," let r Math.random"," let r mul r x","  ret trunc r","fn record x:fn y:etc"," check is_null output"," assign global.output \"\""," var result null","  assign result x y:etc"," catch e","  assign global.output null","  throw e"," let s trim_r output"," assign r.result result"," assign r.output s","fn reject x:arr y:fn"," check is_arr x","  if y v","fn remove x:arr y:uint z","  ret remove x y 1"," check is_uint z"," check between y 0 x.length"," let n add y z"," check between n 0 x.length"," x.splice y z","fn repeat x:str y:uint"," ret x.repeat y","fn replace_rec x:str y:str z:str"," while contain r y","  assign r replace r y z","fn replace x:vec y:str z:str","  let a split x y","  ret join a z","    push r z","fn report_html report:obj length"," if is_def length","  check is_uint length"," var pre report_render report","  assign pre txt_cut pre length"," let style \"font-family:monospace;font-size:1.1vw\""," let style to_lit style"," let body_open concat \"<body style=\" style \">\""," let pre concat \"<pre>\" pre \"</pre>\""," let title concat \"<title>\" report.title \"</title>\""," let html arr"," push html \"<!doctype html>\""," push html \"<html>\""," push html \"<head>\""," push html title"," push html \"</head>\""," push html body_open"," push html pre"," push html \"</body>\""," push html \"</html>\""," ret join html","fn report_init error query map"," if is_str error","  let stack error","  let lines split error","  let message front lines","  let errno null","  let error obj stack message errno","  ret report_init error query map"," check is_obj error"," if is_def query","  check is_obj query"," fn log_browser","  let location to_str location","  var referrer null","  if is_full document.referrer","   let url_referer url_parse document.referrer","   let url_location url_parse location","   if different url_referer.host url_location.host","    assign referrer document.referrer","  let browser browser_get","  let agent navigator.userAgent","  let uptime time_now","  let uptime time_delay uptime","  let o obj location referrer browser agent uptime","  let t to_tbl o"," fn log_server","  let url query.url.href","  let headers query.request.headers","  if has headers \"referrer\"","   assign referrer get headers \"referrer\"","  elseif has headers \"referer\"","   assign referrer get headers \"referer\"","  let remote query.remote","  let o obj url referrer remote uptime"," fn log_trace","  if is_empty traces","  flower \"trace\"","  forof traces","   log \">\" v"," fn log_backtrace stack:str map:obj","  let backtrace dbg_backtrace stack map","  if is_empty backtrace","  tbl_remove_column backtrace \"njs\"","  tbl_remove_column backtrace \"js\"","  let backtrace tbl_render backtrace","  let backtrace txt_prepend backtrace \"> \"","  flower \"backtrace\"","  log backtrace"," let stack error.stack"," let message error.message"," let type error.constructor.name"," let type to_lower type"," let title arr app"," if same type \"error\""," if same type \"object\"","  push title type"," push title message"," if is_browser","  push title location.hostname"," elseif is_node","  let errno error.errno","  if is_undef errno","  elseif is_null errno","  elseif same errno 0","   let errno concat \"errno=\" errno","   push title errno","  let host os_host","  push title host"," let title join title \" / \""," var browser \"\""," var server \"\""," let cs capture dbg_origin_xs stack \"cs\" map"," let backtrace capture log_backtrace stack map"," let js capture dbg_origin_xs stack \"js\" map"," var empty true","  assign browser capture log_browser","  assign empty false"," if is_obj query","  assign server capture log_server"," if is_full trace"," if is_full cs"," if is_full backtrace"," if gt verbose 0","  if is_full js","   assign empty false"," if empty","  trace \"No error stack.\""," let trace capture log_trace"," ret obj title app message browser server trace cs backtrace js","fn report_log report:obj"," flower report.title"," if is_full report.browser","  log report.browser"," if is_full report.server","  log report.server"," if is_full report.trace","  log report.trace"," if is_full report.cs","  log report.cs"," if is_full report.backtrace","  log report.backtrace","  if is_full report.js","   log report.js"," let end space \"end-report\" report.app \"/\" report.message"," flower end","fn report_render report:obj"," let s paren report.title"," let s space \"An error has occured\" s"," let s concat s \".\""," push a s","  push a \"\"","  push a report.browser","  push a report.server","  push a report.trace","  push a report.cs","  push a report.backtrace"," if is_full report.js","  push a report.js","gn resolve x:obj"," var done false"," var error null"," fn on_then x:def","  assign result x","  assign done true"," fn on_catch x","  check is_obj x","  assign error x"," let promise x.then on_then"," promise.catch on_catch"," while not done","  yield"," if is_obj error","  throw error"," ret result","fn reverse x:vec","  let r explode x","  reverse r","  let r implode r","  x.reverse","fn round x:num"," ret Math.round x","fn salt x:str y","  ret salt x \"azertyuiop\""," let a1 explode x"," let a2 explode y"," while is_full a1","  if is_empty a2","   let a explode y","   append a2 a","  let c1 shift a1","  let c2 shift a2","  let n1 asc c1","  let n2 asc c2","  let n xor n1 n2","fn same x y"," ret inline \"x===y\"","fn scan x:str reducer delimiter"," if is_undef reducer","  ret scan x is_token"," check is_fn reducer"," if is_undef delimiter","  ret scan x reducer is_fragment"," check is_fn delimiter"," fn group x:arr reducer:fn","  let fragments dup x","  while is_full fragments","   let a reduce fragments reducer","   if is_full a","    let s implode a","    push r s","    shift fragments a.length","    let s shift fragments"," fn reduce x:arr reducer:fn","  check is_fn reducer","  check is_full x","  let r dup x","  while is_full r","   let s implode r","   if reducer s"," let a delimit x delimiter"," ret group a reducer","fn set x:obj y:str z","fn shift x:arr y","  ret shift x 1","  let r front x","  remove x 0 1"," remove x 0 y","fn shuffle x:arr","  let n random a.length","  let v at a n","  remove a n","fn silent x:fn y:etc"," let previous verbose"," assign verbose sub verbose 2"," var r null","  assign verbose previous"," assign verbose previous","gn sleep x:num"," let start time_now","  let elapsed time_now","  let elapsed sub elapsed start","  if gte elapsed x","fn slice_l x:vec y:uint"," ret slice x 0 y","fn slice_r x:vec y:uint"," ret slice x n y","fn slice x:vec index:uint length"," check lte index x.length"," if is_undef length","  let n sub x.length index","  ret slice x index n"," check lte length x.length"," let n add index length"," check lte n x.length"," let r x.slice index n"," check same r.length length","fn sort x:container y","  if is_undef y","   x.sort","   check is_fn y","   x.sort y","  fn compare x:obj y:obj","   ret cmp x.key y.key","   ret sort x compare","  check is_fn y","   let key k","   let value get x k","   let o obj key value","  sort a y","   let k v.key","   put r v.key v.value","fn space x:etc"," ret join x \" \"","fn split x:str y","  ret split x \"\\n\"","  ret arr"," ret x.split y","fn squote x:str"," ret concat \"'\" x \"'\"","fn stop x","  ret stop \"stop\""," throw new Error x","fn str_indent x:str"," if is_blank x","  ret 0"," let s trim_l x"," ret sub x.length s.length","fn str_unindent x:str"," while is_indented r","  forof split r","   if is_empty v","   let s slice v 1","  assign r join a","fn strip_l x:str y:str"," if match_l x y","  let n sub x.length y.length","  ret slice_r x n"," ret x","fn strip_r x:str y:str"," if match_r x y","  ret slice_l x n","fn sub x:num y:num z:etc"," let r inline \"x-y\"","  ret sub r z:etc","fn tail x:vec y:uint"," ret slice_r x y","fn tbl_column x:arr y:str","  let s get v y","  push r s","fn tbl_columns x:arr"," let first front x"," ret obj_keys first","fn tbl_index x:arr","  let v obj_unshift v \"#\" n","fn tbl_init x"," ret arr","fn tbl_pad_l x:arr column:str length","  var length 0","   var cell get v column","   if not is_str cell","    assign cell json_encode cell","   assign length max length cell.length","  ret tbl_pad_l x y length","  let cell get v column","  let cell pad_l cell \" \" length","  set v y cell","fn tbl_remove_column x:arr y:str"," let t dup x"," forof t","  let v obj_remove v y","fn tbl_rename_column x:arr y:str z:str","  let row v","  let o obj","  forin row","   let v get row k","   if same k y","    put o z v","   put o k v","  push x o","fn tbl_render x:arr"," fn stringify_tbl x:arr","   let row dup v","   forin v","    let v get row k","    if is_str v","    let s json_encode v","    set row k s","   push r row"," fn pad_column x:arr","   if is_num v","    let s to_fixed v","    push a s","   elseif is_str v","    stop","   assign length max length v.length","   if is_numeric v","    let s pad_l v \" \" length","    let s pad_r v \" \" length"," let tbl stringify_tbl x"," let titles tbl_columns tbl"," let columns arr"," forof titles","  let title v","  let column tbl_column tbl title","  unshift column title","  let column pad_column column","  push columns column"," var length 0"," forof columns","  let column v","  var n 0","  forof column","   assign n max n v.length","  assign length add length n"," assign length add length columns.length"," assign length dec length"," let separator repeat \"-\" length"," push a separator"," let header arr","  let s shift v","  push header s"," let s join header \" \""," let first front columns"," for first","  let line arr","  forof columns","   let s at v i","   push line s","  let s join line \" \"","fn time_delay x:num"," if lt x 10","  let n to_fixed x","  ret concat n \"s\""," if lt x minute","  let n trunc x"," if lt x hour","  let n div x minute","  ret concat n \"m\""," if lt x day","  let n div x hour","  ret concat n \"h\""," if lt x month","  let n div x day","  ret concat n \"d\""," if lt x year","  let n div x month"," let n div x year"," let n trunc n"," ret concat n \"y\"","fn time_get"," let n Date.now"," ret div n 1000","fn time_hn x:num"," let now time_get"," if same x now","  ret \"now\""," if gt x now","  let n sub x now","  let s time_delay n","  ret concat \"in \" s"," let n sub now x"," let s time_delay n"," ret concat s \" ago\"","fn time_interval x:fn y","  ret time_interval x 0"," let fn on x"," let n mul y 1000"," setInterval fn n","fn time_now"," let n time_get"," ret sub n start","fn time_str x second","  ret time_str n second"," if is_undef second","  ret time_str x false"," let h o.getHours"," let h pad_l h \"0\" 2"," let m o.getMinutes"," let r concat h \"h\" m \"m\""," if not second"," let s o.getSeconds"," let s pad_l s \"0\" 2"," ret concat r s \"s\"","fn time_timeout x:fn y z:etc","  ret time_timeout x 0.01 z:etc"," check is_num y"," let fn on x z:etc"," setTimeout fn n","fn to_base36 x:uint"," ret x.toString 36","fn to_dump x"," let val clone x"," if is_arr val","  if is_empty val","   ret \"arr\"","  push a \"arr\"","  for val","   let sharp concat \"#\" i","   if is_ln s","    let s space \"\" sharp s","    let s2 space \"\" sharp","    let s indent s 2","    push a s2","  push a \"end\"","  ret join a"," elseif is_obj val","   ret \"obj\"","  push a \"obj\"","  forin val","   let v get val k","   var key k","   if not is_word key","    assign key to_lit key","    let s space \"\" key s","    let s2 space \"\" key"," elseif is_word val","  ret to_lit val"," elseif is_fn val","  ret space \"fn\" val.name","  ret json_encode val","fn to_fixed x:num y","  ret to_fixed x 2"," let a x.toFixed y"," let a split a \".\""," let integer front a"," var float back a"," let digits explode float"," while is_full digits","  let c back digits","  if different c \"0\"","  drop digits"," if is_empty digits","  ret integer"," assign float implode digits"," ret concat integer \".\" float","fn to_i x:str"," ret Number.parseInt x","fn to_int x:str"," let r to_num x"," check is_int r","fn to_json x:def"," ret json_encode x","fn to_lit x:str","fn to_lower x:str"," ret x.toLowerCase","fn to_num x:str"," let r json_decode x"," check is_num r","fn to_str x:def"," ret x.toString","fn to_tbl x:obj","  let key k","  let value get x k","  let o obj key value","fn to_uint x:str"," let r to_int x"," check is_uint r","fn to_upper x:str"," ret x.toUpperCase","fn trace x:etc"," if is_single x","  let first front x","  if is_str first","   let a split first","   if is_many a","    forof a","     trace v","  log \"trace>\" x:etc"," elseif same verbose 0","   if not is_str v","  push traces s","  if gt traces.length 64","   shift traces","fn trim_l x:str"," ret x.trimStart","fn trim_r x:str"," ret x.trimEnd","fn trim x:str"," ret x.trim","fn trunc x:num"," ret Math.trunc x","fn tty_width","  if is_batch","   ret 140","  let r process.stdout.columns","  check is_uint r","  ret 80","fn txt_compact x","  let a split x","  let a txt_compact a"," let s join x"," let a split s","  let first front a","  let first trim_r first","  if is_empty first","  if not is_empty v","  let last back r","  if is_empty last","fn txt_cut x y","  check is_uint y","  let a txt_cut a y","  let s head v y","fn txt_indent x","  let a txt_indent a","   push r s","   let s concat \" \" s","fn txt_prepend x y","  let a txt_prepend a y","  let s concat y v","fn unaccent x:str"," let r replace x \"à\" \"a\""," let r replace r \"â\" \"a\""," let r replace r \"ä\" \"a\""," let r replace r \"æ\" \"ae\""," let r replace r \"ç\" \"c\""," let r replace r \"é\" \"e\""," let r replace r \"è\" \"e\""," let r replace r \"ê\" \"e\""," let r replace r \"ë\" \"e\""," let r replace r \"î\" \"i\""," let r replace r \"ï\" \"i\""," let r replace r \"ô\" \"o\""," let r replace r \"ö\" \"o\""," let r replace r \"œ\" \"oe\""," let r replace r \"ù\" \"u\""," let r replace r \"û\" \"u\""," let r replace r \"ü\" \"u\""," let r replace r \"ÿ\" \"y\""," let r replace r \"À\" \"A\""," let r replace r \"Â\" \"A\""," let r replace r \"Ä\" \"A\""," let r replace r \"Æ\" \"AE\""," let r replace r \"Ç\" \"C\""," let r replace r \"É\" \"E\""," let r replace r \"È\" \"E\""," let r replace r \"Ê\" \"E\""," let r replace r \"Ë\" \"E\""," let r replace r \"Î\" \"I\""," let r replace r \"Ï\" \"I\""," let r replace r \"Ô\" \"O\""," let r replace r \"Ö\" \"O\""," let r replace r \"Œ\" \"OE\""," let r replace r \"Ù\" \"U\""," let r replace r \"Û\" \"U\""," let r replace r \"Ü\" \"U\""," let r replace r \"Ÿ\" \"Y\"","fn unshift x:arr y"," x.unshift y","fn unwrap x:str","  ret json_decode x","  ret split x \".\"","  ret split x \":\"","fn url_beautify x:str"," let r strip_l x \"http://\""," let r strip_l r \"https://\""," let r path_unfix r","fn url_get x:etc","  ret http_get x:etc","  ret xhr_get x:etc","fn url_parse x:str"," let url new URL x"," let href url.href"," let protocol strip_r url.protocol \":\""," let user url.username"," let password url.password"," let host url.hostname"," let port url.port"," let path url.pathname"," let hash url.hash"," let args obj"," forof url.searchParams.keys","  var value url.searchParams.get v","  if is_json value","   assign value json_decode value","  put args v value"," ret obj href protocol user password host port path args hash","gn wait","fn xor x:num y:num z:etc"," let r inline \"x^y\"","  ret xor r z:etc","fn app_list"," forof dir_read \"src\" true","  let base path_base v","  let a split base \"-\"","  let prefix shift a","  if different prefix \"app\"","  let name join a \"-\"","  push r name","fn argv_context","  push r \"--verbose\""," elseif lt verbose 0","  push r \"--quiet\""," if is_color","  push r \"--color\""," if not log_file","  push r \"--no-log\"","fn beep"," os_detach \"play\" \"-n\" \"synth\" 0.1 \"sine\" 880 \"vol\" 0.5","fn deinit_node"," fn dir_empty x:str","  let paths dir_read x true","  ret is_empty paths"," let tmp path_tmp"," let tmp path_dir tmp"," fs_remove tmp"," let app path_up tmp"," if dir_empty app","  fs_remove app"," let week mul 7 24 60 60"," forof dir_load \"tmp\" true","  let modified fs_modified v","  let now time_get","  let age sub now modified","  if lt age week","  let dir dir_current","  let dir path_fix dir","  let path strip_l v dir","  let path to_lit path","  let path concat \"path=\" path","  let age time_delay age","  let age to_lit age","  let age concat \"age=\" age","  if is_dir v","   if dir_empty v","    fs_remove v","  elseif is_file v","   fs_remove v","  trace \"remove\" path age"," dir_change cwd","fn digest x:str"," file_save tmp x"," let r os_execute \"sha256sum\" \"--binary\" tmp"," let r split r \" \""," let r front r","fn dir_call x:str y:fn z:etc"," let dir dir_current"," dir_change x","  assign r y z:etc","  dir_change dir"," dir_change dir","fn dir_change x:str"," process.chdir x","fn dir_current"," ret process.cwd","fn dir_find x:str y:str"," forof dir_load x","  if match base y","fn dir_load x:str with_dirs"," if is_undef with_dirs","  ret dir_load x false"," check is_bool with_dirs"," forof dir_read x true","  if is_file v","  elseif is_dir v","   if with_dirs","   let a dir_load v with_dirs","   append r a","fn dir_make x:str"," let recursive true"," let option obj recursive"," fs.mkdirSync x option","fn dir_read x:str with_dirs","  ret dir_read x false"," let dir path_real x"," let a fs.readdirSync dir"," sort a","  let s path_concat dir v","  if is_file s","  if with_dirs","   if is_dir s","fn dir_reset x:str"," fs_remove x"," dir_make x","fn dir_size x:str","  let n file_size v","  assign r add r n","fn file_append x:str y:str"," fs.appendFileSync x y","fn file_load x:str"," let r file_read x","fn file_read x:str"," let o fs.readFileSync x"," ret o.toString","fn file_save x:str y:str"," if is_file x","  let s file_load x","  if same s y"," let dir path_dir x"," if not is_dir dir"," let content trim_r y"," file_write x content","fn file_size x:str"," let v fs.statSync x"," ret v.size","fn file_write x:str y:str"," fs.writeFileSync x y","fn fs_copy x:str y:str","  if is_dir y","   let base path_base x","   let path path_concat y base","   fs_copy x path"," let force true"," let o obj force recursive"," fs.cpSync x y o","fn fs_modified x:str"," let r fs.statSync x"," let r div r.mtimeMs 1000","fn fs_remove x:str"," fs.rmSync x o","gn http_get url:str with_headers"," if is_undef with_headers","  ret run http_get url false"," var result \"\""," var headers obj"," fn get_module url:str","  let s to_lower url","  if match_l s \"http:\"","   ret http","  elseif match_l s \"https:\"","   ret https"," fn on_request response:obj","  forin response.headers","   var v get response.headers k","    assign v to_num v","   put headers k v","  let on_data on on_data","  let on_end on on_end","  response.on \"data\" on_data","  response.on \"end\" on_end"," fn on_data x:obj","  let s to_str x","  assign result concat result s"," fn on_end"," fn on_error x:obj"," let module get_module url"," let request module.get url on_request"," let on_error on on_error"," request.on \"error\" on_error","  if done","  if is_obj error","   throw error"," if is_json result","  assign result json_decode result"," if with_headers","  ret obj result headers","fn init_node"," fn on_uncaught_exception error:obj message:str","  try","   let report report_init error","   assign report.title space report.title \"/\" message","   report_log report","   if is_remote","    report_mail report","   deinit_common","  catch e","   fallback_error \"on-uncaught-exception\" e error","  assign zombie true","  process.exit 1"," assign global.cp require \"child_process\""," assign global.crypto require \"crypto\""," assign global.fs require \"fs\""," assign global.http require \"http\""," assign global.https require \"https\""," assign global.os require \"os\""," assign global.path require \"path\""," assign global.tls require \"tls\""," assign global.tty require \"tty\""," assign global.util require \"util\""," assign global.binary process.execPath"," assign global.color false"," assign global.cwd dir_current"," assign global.script at process.argv 1"," assign global.script path_real script"," process.on \"uncaughtExceptionMonitor\" on_uncaught_exception"," let dir path_dir script"," dir_make tmp","fn inspect x color"," if is_undef color","  let color is_color","  ret inspect x color"," check is_bool color"," let showHidden false"," let depth null"," let colors color"," let maxArrayLength null"," let maxStringLength null"," let o obj showHidden depth colors maxArrayLength maxStringLength"," ret util.inspect x o","fn ip_host x:str"," let r silent os_execute \"host\" x"," let r back r"," if contain r \"not found\"","  ret null"," let r strip_r r \".\"","fn ip_list"," let s os_execute \"hostname\" \"--all-ip-addresses\""," ret split s \" \"","fn ip_v4"," forof ip_list","  if is_ip4 v","   ret v","fn ip_v6","  if is_ip6 v","fn is_batch"," if not is_node"," ret not is_interactive","fn is_color"," if color"," if is_interactive","fn is_dir x"," let throwIfNoEntry false"," let o obj throwIfNoEntry"," let o fs.statSync x o"," if is_undef o"," ret o.isDirectory","fn is_file x"," ret o.isFile","fn is_fs x"," ret is_def o","fn is_interactive"," ret process.stdout.isTTY","fn is_readable x","  var fd null","   assign fd fs.openSync x","  catch","  let n file_size x","  if gt n 0","   let buffer Buffer.alloc 1","   try","    fs.readSync fd buffer","   catch","    fs.closeSync fd","    ret false","  fs.closeSync fd"," elseif is_dir x","   fs.readdirSync x","fn mail to:str subject:str body:str from"," check is_str to"," check is_str subject"," check is_str body"," if is_undef from","  ret mail to subject body \"mabynogy@gmail.com\""," let token app_token \"mabynogy\""," let cfg arr"," push cfg \"account gmail\""," push cfg \"host smtp.gmail.com\""," push cfg \"port 587\""," push cfg \"protocol smtp\""," push cfg \"auth on\""," let s space \"from\" from"," push cfg s"," let s space \"user\" from"," let s space \"password\" token"," push cfg \"tls on\""," push cfg \"tls_starttls on\""," push cfg \"tls_trust_file /etc/ssl/certs/ca-certificates.crt\""," push cfg \"account default: gmail\""," let body2 arr"," let s concat \"from:\" from"," push body2 s"," let s concat \"to:\" to"," let s concat \"subject:\" subject"," push body2 \"mime-version:1.0\""," push body2 \"content-type:text/html;charset=utf-8\""," push body2 \"\""," push body2 body"," let cfg join cfg"," let body join body2"," let cfg_path path_tmp \"msmtp.txt\""," let body_path path_tmp \"body.txt\""," file_save cfg_path cfg"," file_save body_path body"," let option_file concat \"--file=\" cfg_path"," os_system \"chmod\" 600 cfg_path"," let s os_shell \"msmtp\" \"--debug\" option_file \"--read-recipients\" \"<\" body_path"," let s txt_prepend s \" > \""," fs_remove cfg_path"," fs_remove body_path","fn open x:str"," os_system \"xdg-open\" x","gn os_capture x y:etc"," var closed false"," var status null"," var out \"\""," var err \"\""," var buffer \"\""," fn print x:str","  assign buffer concat buffer x","  if not match_r buffer \"\\n\"","  let s strip_r buffer \"\\n\"","  assign out concat out buffer","  assign buffer \"\""," fn on_out x:obj","  print s"," fn on_err x:obj","  assign err concat err s"," fn on_close x","  if is_null x","  elseif is_uint x","  assign status x","  assign closed true"," let stdio arr \"inherit\" \"pipe\" \"pipe\""," let option obj stdio"," let child cp.spawn x y option"," check is_obj child"," fn on_sigint x:str","  child.kill x"," let on_sigint sigint on_sigint"," let on_out on on_out"," let on_err on on_err"," let on_close on on_close"," let stdout child.stdout"," let stderr child.stderr"," stdout.on \"data\" on_out"," stderr.on \"data\" on_err"," child.on \"close\" on_close"," while not closed"," if is_full buffer.out","  print \"\\n\""," let out trim_r out"," let err trim_r err"," process.removeListener \"SIGINT\" on_sigint"," os_log os_capture status x y:etc"," ret obj status out err","fn os_detach x:str y:etc"," let detached true"," let stdio \"ignore\""," let o obj detached stdio"," let r cp.spawn x y o"," r.unref","fn os_execute x:etc"," let o os_run x:etc"," let status o.status"," let out o.out"," let err o.err"," var display false"," if is_full err","  if same status 0","   let a slice_l x 2","   trace a:etc","  let s txt_prepend err \" err> \"","  trace s"," if is_full out","  push a out","  push a err"," let s join a"," ret trim_r s","fn os_home"," if is_root","  let name os_execute \"logname\"","  if contain name \" \"","  ret path_concat \"/home\" name"," ret os.homedir","fn os_host"," ret os.hostname","fn os_log call:xn status:int args:etc"," if same status 0"," var command front args"," var subcommand false"," if is_many args","  if same command \"sudo\"","   assign subcommand true","  elseif same command \"time\""," if subcommand","  let s at args 1","  assign command space command s"," let call replace call.name \"_\" \"-\""," let command to_lit command"," let status concat \"status=\" status"," trace call command status","gn os_prompt x:str y:etc"," let name x"," let out \"\""," let err \"\""," let buffer obj out err"," fn print key:str str:str","  let s get buffer key","  let s concat s str","  set buffer key s","  if not match_r s \"\\n\"","  let s strip_r s \"\\n\"","  let s txt_prepend s key","  set buffer key \"\"","  print \"out\" s","  print \"err\" s"," let child cp.spawn x y","  print \"out\" \"\\n\""," if is_full buffer.err","  print \"err\" \"\\n\""," os_log os_prompt status x y:etc"," ret status","fn os_ps"," let s os_execute \"ps\" \"aux\""," shift a","  let s replace_rec v \"  \" \" \"","  let pid at a 1","  let pid to_uint pid","  let path at a 10","  let args slice a 11","  let o obj pid path args","fn os_run x:str y:etc"," let maxBuffer mul 1 1024 1024 1024"," let encoding \"utf8\""," let option obj maxBuffer encoding"," let process cp.spawnSync x y option"," let out to_str process.stdout"," let err to_str process.stderr"," let status process.status"," os_log os_run status x y:etc","fn os_shell x:etc"," let command join x \" \""," ret cp.execSync command option","fn os_system x:str y:etc"," let stdio \"inherit\""," let result cp.spawnSync x y option"," let r result.status"," os_log os_system r x y:etc","fn os_user"," let o os.userInfo"," ret o.username","fn path_base x:str"," ret path.basename x","fn path_dir x:str"," ret path.dirname x","fn path_ext x:str"," let s path.extname x"," ret strip_l s \".\"","fn path_real x:str"," ret fs.realpathSync x","fn path_tmp x","  ret path_tmp \"tmp.txt\""," let pid to_str process.pid"," let dir path_split x"," pop dir"," let dir path_join dir"," let dir path_concat \"tmp\" app pid dir"," let dir path_strip dir"," let file path_file x"," let ext path_ext x","  let id random","  let id to_base36 id","  let id head id 6","  var base concat file \"-\" id","  if is_full ext","   assign base concat base \".\" ext","  let r path_concat dir base","  if not is_file r","fn report_mail report:obj"," let html report_html report 73"," mail author report.title html","fn sigint callback:fn"," fn on_sigint x:str n:uint","  let pid concat \"pid=\" process.pid","  let signal concat \"signal=\" x","  let n concat \"n=\" n","  log app pid signal n","  callback x"," let on_sigint on on_sigint"," process.once \"SIGINT\" on_sigint"," ret value on_sigint","gn ssh_execute x:etc"," ret run ssh_pass x:etc","gn ssh_pass x:etc"," let args dup x"," let first shift args"," if is_str first","  ret run ssh_pass os_execute x:etc"," let arguments arr \"sshpass\" \"-p\" args:etc"," if is_fn first","  ret first arguments:etc"," elseif is_gn first","  ret run first arguments:etc","gn ssh_system x:str y:etc"," let r run ssh_pass x y:etc"," let a split r"," if is_full a","  log y:etc","  let a txt_prepend a \" > \"","  let s join a","fn app_token x:str"," let home os_home"," let path concat \".\" x"," let r path_concat home path"," let r file_load r"," let r base36_decode r"," let r salt r","fn init_shell"," assign global.login_merlin \"debian@mabynogy.org\""," assign global.author \"marc@abiven.eu\"","fn is_local"," let host os_host"," ret same host \"castle\"","fn is_remote"," ret not is_local","fn is_root"," let s os_user"," ret same s \"root\"","fn mnt_clean x:str"," if is_readable x","  mnt_unmount x","  fs_remove x","fn mnt_unmount x"," ret os_execute \"fusermount\" \"-u\" x","fn sudo_append path:str data:str"," let content file_read path"," let content concat content data"," sudo_save path content","fn sudo_read path:str"," let result os_run \"sudo\" \"cat\" path"," check same result.status 0"," check is_empty result.err"," ret result.out","fn sudo_remove path:str"," os_system \"sudo\" \"rm\" \"--recursive\" \"--force\" path","fn sudo_save path:str data:str"," let base path_base path"," let tmp path_tmp base"," file_save tmp data"," os_system \"sudo\" \"mv\" \"--force\" tmp path","fn app_home x:str"," let js app_make x"," let js replace js \"</script>\" \"<\\\\/script>\""," push lines \"<!doctype html>\""," push lines \"<html>\""," push lines \"<head>\""," push lines \"<meta charset=\\\"utf-8\\\">\""," push lines \"</head>\""," push lines \"<body>\""," push lines \"<script>\""," push lines js"," push lines \"</script>\""," push lines \"</body>\""," push lines \"</html>\""," ret join lines","fn app_make x:str"," let cpl cpl_init x"," let s to_lit x"," log \"make\" s"," cpl_include cpl"," let r cpl_generate cpl"," let tmp concat x \"-tmp.js\""," let tmp path_tmp tmp"," file_save tmp r"," let success cpl_check_syntax cpl tmp"," check success"," cpl_deinit cpl","fn ast_assign cpl:obj args:arr children:arr source:obj"," check is_empty children"," let left front args"," check is_name left"," let right slice args 1"," let right call_expr_right cpl right:etc"," let code concat left \"=\" right"," ret obj code source","fn ast_begin cpl:obj args:arr children:arr source:obj"," check is_empty args"," let r call_ast_block cpl children source"," if cpl_is_leaf cpl children","  check is_single r","  let node front r","  assign node.code trim node.code","fn ast_brk cpl:obj args:arr children:arr source:obj"," let code \"break\"","fn ast_call cpl:obj args:arr children:arr source:obj"," check is_full args"," let code expr_call cpl args:etc","fn ast_catch cpl:obj args:arr children:arr source:obj"," let block call_ast_block_top cpl children source"," if is_empty args","  let code \"catch\"","  let node obj code source","  push r node","  append r block"," check is_single args"," let identifier front args"," check is_identifier identifier"," let code paren identifier"," let code concat \"catch\" code"," let node obj code source"," push r node"," append r block","fn ast_check cpl:obj args:arr children:arr source:obj"," let code join args \",\""," let code paren code"," let code concat \"check\" code","fn ast_cont cpl:obj args:arr children:arr source:obj"," let code \"continue\"","fn ast_else cpl:obj args:arr children:arr source:obj"," let code \"else\""," let block call_ast_block cpl children source","fn ast_elseif cpl:obj args:arr children:arr source:obj"," ret call_ast_if cpl args children source \"else if\"","fn ast_fn cpl:obj args:arr children:arr source:obj"," ret call_ast_xn cpl args children source \"function\"","fn ast_forin cpl:obj args:arr children:arr source:obj"," ret call_ast_for cpl args children source \"k in\"","fn ast_fornum cpl:obj args:arr children:arr source:obj"," let code call_expr_right cpl args:etc"," let code concat \"let i=0;i<\" code \";i++\""," let code concat \"for\" code","fn ast_forof cpl:obj args:arr children:arr source:obj"," ret call_ast_for cpl args children source \"v of\"","fn ast_gn cpl:obj args:arr children:arr source:obj"," ret call_ast_xn cpl args children source \"function*\"","fn ast_if cpl:obj args:arr children:arr source:obj"," ret call_ast_if cpl args children source \"if\"","fn ast_include cpl:obj args:arr children:arr source:obj"," let path front args"," check is_lit path"," let path unwrap path","fn ast_inline cpl:obj args:arr children:arr source:obj"," let code front args"," check is_lit code"," let code unwrap code","fn ast_let cpl:obj args:arr children:arr source:obj"," check is_many args"," ret call_ast_declare cpl args children source \"const\"","fn ast_ret cpl:obj args:arr children:arr source:obj"," var code \"\"","  assign code \"return\"","  let right call_expr_right cpl args:etc","  assign code space \"return\" right","fn ast_run cpl:obj args:arr children:arr source:obj"," let code space \"yield*\" code","fn ast_throw cpl:obj args:arr children:arr source:obj"," let code space \"throw\" code","fn ast_try cpl:obj args:arr children:arr source:obj"," let code \"try\"","fn ast_var cpl:obj args:arr children:arr source:obj"," ret call_ast_declare cpl args children source \"let\"","fn ast_while cpl:obj args:arr children:arr source:obj"," let code concat \"while\" code","fn ast_yield cpl:obj args:arr children:arr source:obj","  let code \"yield\"","  ret obj code source"," let code space \"yield\" code","fn call_ast_block_top cpl:obj children:arr source:obj"," forof cpl_block cpl children","  let o dup v","  assign o.code indent o.code"," let code \"{\""," let open obj code source"," let code \"}\""," let close obj code source"," unshift r open"," push r close","fn call_ast_block cpl:obj children:arr source:obj"," if not cpl_is_leaf cpl children","  let code \"{\"","  let open obj code source","  let code \"}\"","  let close obj code source","  unshift r open","  push r close","fn call_ast_declare cpl:obj args:arr children:arr source:obj keyword:str"," let code slice args 1"," let code call_expr_right cpl code:etc"," let code concat identifier \"=\" code"," let code space keyword code","fn call_ast_for cpl:obj args:arr children:arr source:obj keyword:str"," let code space \"const\" keyword code","fn call_ast_if cpl:obj args:arr children:arr source:obj keyword:str"," let code concat keyword code","fn call_ast_xn cpl:obj args:arr children:arr source:obj keyword:str"," fn get_argument x:str","  if is_identifier x","  if is_tuple x","   let a unwrap x","   check is_pair a","   let name front a","   let etc back a","   check is_identifier name","   check same etc \"etc\"","   ret concat \"...\" name"," let name front args"," check is_name name"," let args slice args 1"," let parameters map args get_argument"," forof parameters","  let n count parameters v","  if same n 1","  let arg to_lit v","  let message space \"Argument\" arg \"defined\" n \"times\"","  stop message"," let parameters join parameters \",\""," let list paren parameters"," let code concat name list","fn cpl_block x:obj y:arr","  let a cpl_translate x v","  append r a","fn cpl_check_fn x:obj nodes:arr path:str"," let file path_file path"," let name replace file \"-\" \"_\""," if same name \"check_arity\""," forof nodes","  if same v.operator \"fn\"","  elseif same v.operator \"gn\"","  let xn front v.args","  if same xn name"," let s_file to_lit file"," let message space \"The file\" s_file \"must define a function or a generator nammed\" s_name","fn cpl_check_syntax cpl:obj path"," if is_undef path","  ret cpl_check_syntax cpl cpl.target"," check is_str path"," let o os_run binary \"--trace-uncaught\" \"--trace-deprecation\" \"--check\" path"," check is_empty o.out"," if same o.status 0","  check is_empty o.err"," check cpl_log_error cpl o.err path","fn cpl_check x:obj y:arr"," fn visit nodes:arr","  forof nodes","   if not is_xn v.operator","    let node dup v","    assign node.children visit node.children","    push r node","   let node instrument v","   push r node"," fn instrument node:obj","  let r dup node","  let name front r.args","  let parameters slice r.args 1","  let arity get_arity parameters","  if same arity.operator \"gte\"","   if same arity.count 0","    assign r.children visit r.children","    ret r","  let operator \"check_arity\"","  let count to_str arity.count","  let s_operator to_lit arity.operator","  let args arr s_operator \"arguments.length\" count","  let children arr","  let source dup r.source","  let node obj operator args children source","  unshift r.children node","  reverse parameters","  clear r.args","  forof parameters","   if is_identifier v","    unshift r.args v","   check is_tuple v","   let a unwrap v","   let identifier at a 0","   let type at a 1","   if same type \"etc\"","   unshift r.args identifier","   let s_identifier to_lit identifier","   let s_type to_lit type","   let is concat \"is_\" type","   let operator \"check_arg\"","   let args arr is identifier s_identifier s_type","   let children arr","   let source dup r.source","   let node obj operator args children source","   unshift r.children node","  unshift r.args name","  assign r.children visit r.children"," fn get_arity args:arr","  var operator \"same\"","  var count 0","  forof args","   if is_tuple v","    let a unwrap v","    let type at a 1","    if same type \"etc\"","     assign operator \"gte\"","   elseif is_identifier v","    assign operator \"gte\"","   assign count inc count","  ret obj operator count"," fn is_xn x","  if same x \"fn\"","  if same x \"gn\""," ret visit y","fn cpl_compile x:obj path:str"," let nodes cpl_load x path"," let nodes cpl_tokenize x nodes"," let nodes cpl_fold x nodes"," cpl_check_fn x nodes path"," let nodes cpl_check x nodes"," var nodes cpl_for x nodes","  assign nodes cpl_scope x nodes","  cpl_dump x"," let nodes cpl_block x nodes"," ret nodes","fn cpl_deinit x:obj"," let s json_dump x.cache"," file_save x.path s","fn cpl_dump x:obj"," fn dump_ast x:obj","  let args x.args","  let children x.children","  let a3 arr","  push a2 x.operator","  append a2 args","  forof a2","   if is_token v","    push a3 v","    let s to_lit v","    push a3 s","  let cs space a3:etc","  let source x.source","  let path source.path","  let ncs source.index","  let ncs inc ncs","  let o obj path ncs cs","  forof children","   let t dump_ast v","   forof t","    assign v.cs indent v.cs","   append r t","  if is_full children","   let cs \"end\"","   let o obj path ncs cs","   push r o"," for x.stack","  let frame concat \"#\" n","  let title space \"compiler frame\" frame","  let s dump_ast v","  let s tbl_render s","fn cpl_fold x:obj y:arr"," fn visit x:arr","  let parent shift x","  let indent parent.indent","  let descendants arr","  while is_full x","   let o front x","   if gt o.indent indent","    shift x","    push descendants o","  while is_full descendants","   let o visit descendants","   push children o","  let operator parent.operator","  let args parent.args","  let source parent.source","  ret obj operator args children source"," let nodes dup y"," while is_full nodes","  let o visit nodes","fn cpl_for x:obj nodes:arr","   if different v.operator \"for\"","   let nodes generate v","   append r nodes"," fn generate node:obj","  let args node.args","  let operator \"let\"","  let args arr \"_a\" args:etc","  let source dup node.source","  let node2 obj operator args children source","  push r node2","  let operator \"forin\"","  let args arr \"_a\"","  let children visit node.children","  let node3 obj operator args children source","  push r node3","  let args arr \"v\" \"at\" \"_a\" \"i\"","  let node4 obj operator args children source","  unshift node3.children node4","  let args arr \"i\" \"to_i\" \"k\"","  let node5 obj operator args children source","  unshift node3.children node5"," ret visit nodes","fn cpl_generate x:obj"," let pool arr"," fn get_index x:str","  let r find pool x","  if gte r 0","  let r pool.length","  push pool x"," forof x.out","  push a v.code"," let relatives arr"," let indices arr","  let source v.source","  if not contain paths path","   push paths path","  let n get_index path","  push relatives n","  push indices source.index"," let contents obj"," forof paths","  let key get_index v","  let key to_str key","  let content cpl_uncomment x v","  let value arr","   let index get_index v","   push value index","  put contents key value"," let app to_lit x.app"," let app concat \"const app=\" app"," push a app"," let compile time_get"," let compile trunc compile"," let compile concat \"const compile=\" compile"," push a compile"," let pool json_encode pool"," let pool concat \"const pool=\" pool"," push a pool"," let relatives json_encode relatives"," let relatives concat \"const relatives=\" relatives"," push a relatives"," let indices json_encode indices"," let indices concat \"const indices=\" indices"," push a indices"," let contents json_encode contents"," let contents concat \"const contents=\" contents"," push a contents"," let fns join x.fns \",\""," let fns brace fns"," let fns concat \"const fns=\" fns"," push a fns"," push a \"main()\"","fn cpl_include cpl:obj"," fn compile_cache path:str","  let relative path_real \"src\"","  let relative path_fix relative","  let relative strip_l path relative","  let cache cpl.cache.files","  let modified fs_modified path","  var recompile false","  if has cache relative","   let entry get cache relative","   if different entry.modified modified","    assign recompile true","   assign recompile true","  if not recompile","   let nodes entry.nodes","   declare_fn path nodes","   ret nodes","  let s_relative to_lit relative","  let s_relative concat \"path=\" s_relative","  let s_modified time_hn modified","  let s_modified to_lit s_modified","  let s_modified concat \"modified=\" s_modified","  trace \"compile\" s_relative s_modified","  let nodes cpl_compile cpl path","  declare_fn path nodes","  let entry obj modified nodes","  set cache relative entry","  ret nodes"," fn declare_fn path:str nodes:arr","  if is_empty nodes","  let fn path_file path","  let fn replace fn \"-\" \"_\"","  push cpl.fns fn"," fn get_files x:arr","   let a dir_load v"," fn get_includes x:str","  let dir get_app_dir x","  let a path_concat dir \"include.txt\"","  let a file_load a","  forof split a","   let s path_concat \"src\" v","  push r dir"," fn get_app_dir x","  let r concat \"src/app-\" x","  if is_dir r","  let r concat \"src/spa-\" x"," let includes get_includes cpl.app"," let files get_files includes"," forof files","  let ext path_ext v","  if different ext \"cs\"","  let nodes compile_cache v","  append cpl.out nodes","fn cpl_init x:str"," let path \"cache.txt\""," fn load_cache","  if is_file path","   let s file_load path","   ret json_decode s","  let scans obj","  let files obj","  ret obj scans files"," let app x"," let asts fn_select \"ast_\""," let exprs fn_select \"expr_\""," let fns arr"," let stack arr"," let out arr"," let target concat \"out-\" app \".js\""," let cache load_cache"," ret obj app asts exprs fns files stack out target path cache","fn cpl_is_call x:obj y:str"," if same y \"call\""," forin x.asts","  if same k y","fn cpl_is_leaf x:obj y:arr"," if not is_single y"," let node front y"," let operator node.operator"," if cpl_is_call x operator"," let operators arr \"brk\" \"check\" \"cont\" \"inline\" \"ret\" \"run\" \"throw\" \"yield\""," ret contain operators operator","fn cpl_load x:obj path:str"," let path2 dir_current"," let path2 path_concat path2 \"src\""," let path2 path_fix path2"," let path2 strip_l path path2"," let lines cpl_uncomment x path2"," let lines split lines"," for lines","  let path path2","  let index i","  let code v","  let source obj path index","  let o obj code source","fn cpl_log_error cpl:obj err:str path","  ret cpl_log_error cpl err cpl.target"," fn parse_error cpl:obj path:str err:str","  let s txt_compact err","  let lines split s","  let line_js shift lines","  let line_js split line_js \":\"","  let line_js back line_js","  let line_js to_uint line_js","  shift lines 3","  flower message","  let line line_js","  let o obj line path","  if gt line_js cpl.out.length","  let index dec line_js","  let o at cpl.out index","  let source o.source","  let content cpl_uncomment cpl source.path","  let content split content","  let line_cs inc source.index","  let s dbg_origin content line_cs \"\"","  let content dbg_source path","  let s dbg_origin content line_js \"\"","  let stack arr","  let s shift lines","  push stack s","  while is_full lines","   let s shift lines","   let s trim s","   if not match_l s \"at\"","   push stack s","  let stack join stack","  let map cpl_source_map cpl","  let report report_init stack undefined map","  report_log report","  parse_error cpl path err","fn cpl_scan cpl:obj str:str"," fn is_complex x","  if contain x \"//\"","  if contain x \"\\\"\""," let s trim str"," if is_complex s","  let cache cpl.cache.scans","  if has cache s","   let r get cache s","   let r dup r","  let r scan s","  let r reject r is_trivia","  let a dup r","  put cache s a"," let r split s \" \""," let r reject r is_empty","fn cpl_scope x:obj nodes:arr","  let nodes dup nodes","  while is_full nodes","   let node shift nodes","   var a null","    assign a resolve node nodes","   catch e","    unshift x.stack node","    throw e"," fn resolve node:obj rest:arr","  let operator node.operator","  let source node.source","  let declare operator","  if is_declare operator","   let name front args","   let rvalue slice args 1","   check is_str name","   check is_arr rvalue","   check is_full rvalue","   let operator \"let\"","   let args arr \"_\" rvalue:etc","   let node2 obj operator args children source","   push r node2","   let operator \"begin\"","   let args arr","   let node3 obj operator args children source","   push r node3","   let operator declare","   let args arr name \"_\"","   let node4 obj operator args children source","   push node3.children node4","   if is_full rest","    let operator \"begin\"","    let args arr","    let children visit rest","    let node5 obj operator args children source","    push node3.children node5","    clear rest","  elseif is_for operator","   let args arr \"_\" args:etc","   let args arr \"_\"","   let children visit node.children"," fn is_declare operator","  if same operator \"let\"","  if same operator \"var\""," fn is_for operator","  if same operator \"forof\"","  if same operator \"forin\"","  if same operator \"fornum\"","fn cpl_source_map cpl:obj"," let script path_real cpl.target"," forin cpl.files","  let v get cpl.files k","  let a split v","  put files k a"," forof cpl.out","  let path v.source.path","  let index v.source.index","  let js v.code"," let o obj script files source"," ret dup o","fn cpl_tokenize x:obj nodes:arr","  let code v.code","  let source dup v.source","  let indent str_indent code","  let args cpl_scan x code","  if is_empty args","  let operator shift args","  if same operator \"end\"","   if is_empty args","  let node obj indent operator args children source","fn cpl_translate x:obj y:obj"," fn translate cpl:obj operator:str args:arr children:arr source:obj","  forin cpl.asts","   if different k operator","   let ast get cpl.asts k","   let r ast cpl args children source","   if is_arr r","   check is_obj r","   ret arr r","  let args arr operator args:etc","  let r ast_call cpl args children source","  if is_arr r","  check is_obj r","  ret arr r"," let operator y.operator"," let args y.args"," let children y.children"," let source y.source","  ret translate x operator args children source","  unshift x.stack y","fn cpl_uncomment x:obj y:str"," if has x.files y","  ret get x.files y"," let path path_concat \"src\" y"," let content file_load path"," forof split content","  let indent str_indent v","  let tokens cpl_scan x v","  if is_empty tokens","   push r \"\"","  let indent repeat \" \" indent","  let line join tokens \" \"","  let line concat indent line","  push r line"," put x.files y r","fn call_expr_arg cpl:obj x:str","  let a unwrap x","  check is_pair a","  let name front a","  let etc back a","  check is_identifier name","  check same etc \"etc\"","  ret concat \"...\" name"," let message space \"Invalid argument\" s","fn call_expr_right cpl:obj x y:etc","  if same x \"arr\"","  elseif same x \"obj\"","  elseif same x \"_\"","  elseif same x \"null\"","  elseif same x \"true\"","  elseif same x \"false\"","  elseif is_numeric x","  elseif is_lit x","   let fn to_lit \"function\"","   let condition paren x","   let condition concat \"typeof\" condition \"===\" fn","   let condition paren condition","   let call concat x \"()\"","   ret concat condition \"?\" call \":\" x"," ret call_expr_rvalue cpl x y:etc","fn call_expr_rvalue cpl:obj x:etc","  if same first \"arr\"","   ret expr_arr cpl","  elseif same first \"obj\"","   ret expr_obj cpl","   ret first"," let args slice x 1"," if has cpl.exprs first","  let fn get cpl.exprs first","  ret fn cpl args:etc"," ret expr_call cpl x:etc","fn expr_arr cpl:obj x:etc"," let fn partial call_expr_arg cpl"," let args map x fn"," let s join args \",\""," ret bracket s","fn expr_call cpl:obj x:name y:etc"," let args map y fn"," let args join args \",\""," let list paren args"," ret concat x list","fn expr_iif cpl:obj x:arg y:arg z:arg a:etc"," check is_empty a"," ret concat x \"?\" y \":\" z","fn expr_in cpl:obj x:identifier y:identifier z:etc"," check is_empty z"," ret space y \"in\" x","fn expr_inline cpl:obj x:str"," ret unwrap x","fn expr_instanceof cpl:obj x:name y:identifier z:etc"," ret space x \"instanceof\" y","fn expr_new cpl:obj x:etc"," let rvalue call_expr_rvalue cpl x:etc"," ret space \"new\" rvalue","fn expr_not cpl:obj x:etc"," let right call_expr_right cpl x:etc"," let right paren right"," ret concat \"!\" right","fn expr_obj cpl:obj x:etc"," check every x is_identifier"," let s join x \",\""," ret brace s","fn expr_run cpl:obj x:etc"," let call expr_call cpl x:etc"," ret space \"yield*\" call","fn expr_value cpl:obj x:str y:etc"," check is_empty y","gn init x:etc"," fn is_app x","  let base concat \"app-\" x","  let path path_concat \"src\" base","  ret is_dir path"," let apps app_list","  dump apps"," let app shift args"," if not is_app app"," var run true"," if extract args \"--compile\"","  assign run false"," let cpl cpl_init app"," let code cpl_generate cpl"," file_save cpl.target code"," if not cpl_check_syntax cpl"," if not run"," let usage_path concat \"usage-\" process.pid \".txt\""," let usage_path path_tmp \"usage.txt\""," let output concat \"--output=\" usage_path"," let time arr \"time\" \"--format=%M\" output"," let context argv_context"," let args arr time:etc binary \"--trace-uncaught\" \"--trace-deprecation\" cpl.target context:etc args:etc"," let args dedup args"," let o run os_capture args:etc"," if different status 0","  let s concat \"status=\" status","  log app s","  if not cpl_log_error cpl err","   let s txt_prepend err \"make-error> \"","   log s"," let usage file_load usage_path"," fs_remove usage_path","  let usage split usage","  let usage back usage","  let usage to_uint usage","  let usage mul usage 1024","  let usage byte_size usage","  let usage to_lit usage","  let usage concat \"usage=\" usage","  log app usage"]
const relatives=[0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,39,39,39,39,39,39,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,43,43,43,43,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,48,48,48,48,48,48,48,48,48,48,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,56,56,56,56,56,56,56,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,62,62,62,62,62,62,62,63,63,63,63,63,63,63,63,63,63,63,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,65,65,65,65,65,65,65,66,66,66,66,66,66,66,67,67,67,67,67,67,67,67,67,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,69,69,69,69,69,69,69,69,69,69,70,70,70,70,70,70,71,71,71,71,71,71,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,74,74,74,74,74,74,74,74,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,78,78,78,78,78,78,78,78,78,78,78,78,78,78,79,79,79,79,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,81,81,81,81,81,81,81,81,82,82,82,82,82,82,82,82,83,83,83,83,83,84,84,84,84,84,84,85,85,85,85,85,85,86,86,86,86,86,86,86,86,86,86,87,87,87,87,87,87,87,87,88,88,88,88,88,88,88,88,89,89,89,89,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,91,91,91,91,91,91,91,91,91,91,91,91,91,91,92,92,92,92,93,93,93,93,93,93,93,93,93,93,93,93,93,93,94,94,94,94,94,94,94,94,95,95,95,95,95,95,96,96,96,96,96,96,96,96,96,96,96,96,96,96,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,99,99,99,99,100,100,100,100,100,100,100,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,104,104,104,104,104,104,104,104,104,104,104,105,105,105,105,105,105,105,105,105,105,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,108,108,108,108,108,108,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,110,110,110,110,110,110,111,111,111,111,111,111,111,111,111,111,112,112,112,112,112,113,113,113,113,113,113,113,113,114,114,114,114,114,114,114,114,115,115,115,115,116,116,116,116,116,116,116,116,116,116,116,116,116,116,117,117,117,117,117,117,117,117,117,117,117,117,117,117,117,117,117,117,117,117,118,118,118,118,118,118,118,118,118,118,119,119,119,119,119,119,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,121,121,121,121,121,121,122,122,122,122,122,122,122,122,122,122,122,122,123,123,123,123,123,123,123,123,124,124,124,124,124,124,124,124,125,125,125,125,125,125,125,125,126,126,126,126,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,128,128,128,128,128,128,129,129,129,129,129,129,130,130,130,130,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,133,133,133,133,133,133,133,133,134,134,134,134,134,134,134,134,134,134,134,134,134,134,135,135,135,135,135,135,135,135,136,136,136,136,136,136,136,136,136,137,137,137,137,137,137,138,138,138,138,138,138,139,139,139,139,139,139,139,139,139,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,142,142,142,142,142,142,142,143,143,143,143,143,143,143,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,149,149,149,149,150,150,150,150,150,150,150,151,151,151,151,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,154,154,154,154,154,154,154,154,154,154,155,155,155,155,155,155,155,156,156,156,156,157,157,157,157,157,157,158,158,158,158,158,158,158,158,158,158,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,162,162,162,162,162,162,163,163,163,163,163,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,168,168,168,168,168,168,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,172,172,172,172,172,172,172,172,173,173,173,173,173,173,174,174,174,174,174,174,175,175,175,175,175,175,176,176,176,176,176,176,177,177,177,177,177,177,177,177,177,177,177,177,177,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,181,181,181,181,181,181,181,181,182,182,182,182,182,182,182,182,182,182,182,183,183,183,183,183,183,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,188,188,188,188,188,188,188,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,197,197,197,197,197,197,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,199,199,199,199,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,201,201,201,201,201,201,201,201,201,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,206,206,206,206,206,206,206,207,207,207,207,207,207,207,207,207,207,207,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,210,210,210,210,211,211,211,211,211,211,211,211,211,211,212,212,212,212,212,212,213,213,213,213,213,213,214,214,214,214,214,214,214,214,214,214,214,214,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,221,221,221,221,221,221,221,221,221,221,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,223,223,223,223,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,229,229,229,229,229,229,229,229,229,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,232,232,232,232,232,232,232,232,232,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,235,235,235,235,235,235,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,238,238,238,238,238,238,239,239,239,239,239,239,239,239,239,239,239,239,239,240,240,240,240,240,240,241,241,241,241,241,241,242,242,242,242,242,242,243,243,243,243,243,243,243,243,243,243,243,243,243,244,244,244,244,244,244,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,246,246,246,246,246,246,246,246,246,246,246,246,246,247,247,247,247,247,247,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,249,249,249,249,249,249,250,250,250,250,250,250,251,251,251,251,251,251,252,252,252,252,252,252,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,259,259,259,259,259,259,259,259,260,260,260,260,260,260,260,260,260,260,260,260,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,262,262,262,262,262,262,262,262,262,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,264,264,264,264,264,264,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,268,268,268,268,268,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,272,272,272,272,272,272,273,273,273,273,273,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,278,278,278,278,278,278,278,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,280,280,280,280,280,280,280,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,282,282,282,282,282,282,282,282,282,282,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,284,284,284,284,284,284,284,284,284,284,285,285,285,285,285,285,285,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,293,293,293,293,293,293,293,293,293,294,294,294,294,294,294,294,294,294,294,294,294,294,295,295,295,295,295,295,295,295,295,295,295,295,295,296,296,296,296,296,296,296,297,297,297,297,297,297,297,297,297,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,301,301,301,301,301,301,301,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,304,304,304,304,304,304,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,309,309,309,309,309,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,316,316,316,316,316,316,316,316,316,317,317,317,317,317,317,318,318,318,318,318,318,319,319,319,319,319,319,319,319,319,319,320,320,320,320,320,320,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,322,322,322,322,322,322,322,322,322,322,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,324,324,324,324,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,328,328,328,328,328,328,329,329,329,329,329,329,329,329,329,330,330,330,330,330,331,331,331,331,331,331,331,331,331,332,332,332,332,332,332,332,332,332,332,332,332,333,333,333,333,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,335,335,335,335,335,335,335,335,335,335,335,335,335,335,336,336,336,336,336,336,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,348,348,348,348,348,348,348,348,348,349,349,349,349,349,349,349,349,349,350,350,350,350,350,350,350,350,350,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,352,352,352,352,352,352,352,352,352,353,353,353,353,353,353,353,353,353,354,354,354,354,354,354,354,354,354,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,357,357,357,357,357,357,357,357,357,357,357,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,362,362,362,362,362,362,362,362,362,362,362,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,376,376,376,376,376,376,376,376,376,376,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,395,395,395,395,395,395,395,395,395,395,395,395,395,395,395,395,395,395,395,395,395,395,395,395,395,395,395,395,395,395,395,395,395,395,395,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,397,397,397,397,397,397,397,397,397,397,397,397,397,397,397,397,397,397,397,397,397,397,397,397,397,397,397,397,397,398,398,398,398,398,398,398,398,398,398,399,399,399,399,399,399,399,399,399,400,400,400,400,400,400,400,401,401,401,401,401,401,401,401,401,402,402,402,402,402,402,402,402,402,402,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,404,404,404,404,404,404,404,404,404,404,404,405,405,405,405,405,405,405,405,405,405,406,406,406,406,406,406,406,406,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407]
const indices=[0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,2,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,3,5,6,8,1,1,0,0,0,0,0,1,2,4,5,7,7,7,7,8,8,8,8,10,11,13,8,8,7,7,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,5,5,5,5,7,9,9,9,9,10,10,10,10,11,11,11,11,13,14,16,16,16,16,18,16,16,11,11,10,10,9,9,5,5,4,21,2,2,1,1,0,0,0,0,0,1,1,1,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,6,6,5,5,4,4,3,11,3,1,1,0,0,0,0,0,0,0,1,3,4,6,7,9,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,6,6,7,7,7,9,7,6,12,12,13,13,13,13,14,14,14,14,15,15,15,17,15,14,14,13,13,12,20,20,21,21,21,21,22,22,22,22,23,23,23,25,23,22,22,21,21,20,28,28,29,29,29,29,30,30,30,30,31,31,31,33,31,30,30,29,29,28,36,36,36,36,37,37,37,37,38,38,38,40,38,37,37,36,36,4,4,3,3,2,2,1,1,0,0,0,0,0,1,1,1,3,1,0,0,0,13,13,13,13,18,19,21,21,21,21,22,22,22,22,23,23,23,23,24,24,24,24,25,25,25,25,26,26,26,26,27,27,27,29,27,26,26,25,25,24,24,23,23,22,22,21,21,13,13,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,0,0,1,1,2,3,1,4,4,5,5,5,5,7,8,5,5,4,11,0,0,0,0,0,1,3,0,0,0,0,0,1,0,0,0,1,2,4,4,4,4,6,6,7,8,10,10,11,11,11,11,13,13,13,13,14,14,15,16,14,19,19,19,21,19,13,24,13,11,11,10,25,25,26,26,26,26,28,28,28,28,29,29,29,29,31,31,32,33,31,36,36,36,38,36,29,29,28,41,28,26,26,25,42,43,6,46,4,4,0,0,0,0,0,0,1,2,4,5,7,0,0,0,0,0,1,1,2,3,5,6,8,9,11,12,14,1,17,17,17,17,19,19,19,19,20,20,21,23,20,26,26,26,26,27,27,27,27,28,28,28,28,30,30,30,31,31,31,32,32,33,35,32,38,38,38,38,40,41,38,38,28,28,27,27,26,26,19,44,19,17,17,0,0,0,1,0,0,0,0,0,1,2,4,4,5,7,4,8,9,10,10,11,11,11,11,12,12,12,12,14,15,12,12,11,18,11,10,19,20,0,0,0,0,0,0,1,1,1,1,3,3,3,3,4,4,5,4,3,8,3,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,8,6,6,5,5,5,5,5,5,5,5,4,4,4,4,4,12,4,4,4,2,2,1,1,0,0,0,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,8,8,9,9,9,9,11,12,13,14,15,16,9,9,8,19,19,19,19,20,20,20,22,20,19,19,6,6,5,5,4,4,0,0,0,0,0,0,1,2,4,5,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,12,12,13,13,13,13,15,16,17,18,19,20,13,13,12,23,23,23,23,24,24,24,26,24,23,23,10,10,9,9,8,8,7,7,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,6,4,3,3,2,2,1,1,0,0,0,1,1,2,2,2,4,2,1,7,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,18,16,15,15,14,14,13,13,12,12,11,11,10,10,9,9,0,0,0,1,1,2,2,2,4,2,1,7,9,9,10,10,10,12,10,9,15,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,24,25,23,28,28,28,28,29,29,29,29,30,30,30,30,31,31,31,31,33,34,36,36,36,36,38,38,39,38,41,42,44,44,44,44,45,45,45,45,47,48,50,50,50,50,51,51,51,51,52,52,52,52,54,55,57,57,57,57,59,60,62,62,62,62,63,63,63,63,64,64,64,64,65,65,65,65,66,66,66,66,67,67,67,69,67,66,66,65,65,64,64,63,63,62,62,57,57,52,52,51,51,50,50,45,45,44,44,36,36,31,31,30,30,29,29,28,28,22,22,22,22,22,72,22,22,22,20,20,19,19,18,18,17,17,0,0,0,1,1,2,2,2,4,2,1,7,9,9,10,10,10,12,10,9,15,17,17,17,17,19,19,20,20,20,20,21,21,21,21,23,23,23,24,24,24,25,25,25,26,26,26,27,27,27,28,29,31,21,21,20,20,19,34,17,17,0,0,0,0,1,1,1,1,3,4,6,6,6,8,6,1,1,0,0,0,1,1,2,2,2,4,2,1,7,8,10,10,11,11,11,13,11,10,16,18,18,18,18,19,19,19,19,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,23,23,23,23,25,25,26,26,26,26,27,27,27,27,29,30,27,27,26,26,25,32,32,33,33,33,33,35,36,33,33,32,37,38,40,40,40,40,41,41,41,41,42,42,42,42,43,43,43,43,44,44,44,44,46,47,44,44,43,43,42,42,41,41,40,40,23,23,22,22,21,21,21,21,21,21,21,21,19,19,18,18,0,0,0,0,0,0,1,2,4,6,7,9,11,11,11,11,11,11,11,11,12,12,12,12,13,13,13,13,15,15,16,17,19,20,22,22,22,22,24,25,22,22,15,28,13,13,12,12,11,31,31,31,31,31,31,31,32,32,32,32,33,33,33,33,35,35,35,35,36,36,36,36,37,37,37,37,39,39,39,39,41,41,41,41,43,43,44,43,45,45,46,47,49,49,50,49,45,53,53,53,53,54,54,54,54,55,55,55,55,57,57,58,57,60,60,60,60,61,61,61,61,63,64,65,65,66,68,65,71,71,71,73,71,61,61,60,60,55,55,54,54,53,53,76,76,76,76,78,78,78,79,78,82,82,82,82,84,84,84,84,85,85,85,85,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,88,88,88,88,90,88,88,87,87,87,87,87,87,93,93,93,93,94,95,97,93,100,93,87,87,87,87,85,85,84,84,82,82,78,78,76,76,53,53,41,41,39,39,37,37,36,36,35,35,33,33,32,32,31,103,103,103,103,103,103,103,104,104,104,106,104,103,109,109,109,109,110,110,110,110,112,112,112,112,114,114,114,114,115,115,115,115,117,117,118,119,117,121,121,121,121,122,122,122,122,124,124,124,124,125,125,125,125,126,126,126,126,127,127,127,129,127,126,126,125,125,124,124,122,122,121,121,115,115,114,114,112,112,110,110,109,132,132,132,132,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,134,135,133,133,133,133,133,138,133,133,133,132,141,141,141,141,143,144,146,141,141,0,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,5,5,5,7,5,4,4,10,10,10,10,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,18,18,18,18,19,19,19,21,19,18,24,18,16,16,15,15,14,14,13,13,12,12,27,27,27,27,29,29,29,30,30,31,31,31,32,31,30,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,37,38,40,40,40,40,41,41,41,41,42,42,42,42,44,44,44,45,45,46,45,48,48,48,48,49,49,49,49,50,50,50,50,51,51,51,53,51,50,50,49,49,48,48,42,42,41,41,40,40,36,36,36,36,36,36,56,56,56,56,58,58,59,58,61,56,56,36,36,36,36,27,27,12,12,10,10,4,4,2,2,1,1,0,0,0,1,1,1,2,2,6,6,6,8,6,2,9,10,11,12,1,15,15,15,15,17,17,18,17,19,19,20,19,22,22,22,22,23,23,23,23,25,25,26,26,26,26,28,29,26,26,25,32,32,32,34,32,23,23,22,22,15,15,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,3,3,3,3,4,5,3,9,3,1,1,0,0,0,0,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,7,5,4,4,3,3,2,2,1,10,11,12,13,14,15,0,0,0,0,0,1,2,4,6,6,6,6,8,8,8,8,9,9,9,9,11,11,12,14,11,17,17,17,17,18,18,18,18,20,20,21,22,20,23,24,18,18,17,17,9,9,8,27,8,6,6,0,0,0,1,0,0,0,0,0,0,1,3,3,3,3,5,6,8,3,3,0,0,0,0,1,1,1,1,2,2,2,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,29,29,29,29,30,30,30,30,32,32,33,33,33,33,35,37,33,33,32,40,40,41,41,41,41,43,43,44,44,44,46,44,43,49,49,49,49,51,53,53,53,53,54,54,54,54,56,57,59,54,54,53,53,49,49,41,41,40,62,63,65,30,30,29,68,29,2,2,1,1,0,0,0,0,0,1,1,1,1,3,3,3,3,4,4,4,4,6,4,4,3,9,3,1,1,0,0,0,0,0,1,1,1,1,3,3,3,3,4,4,4,4,6,4,4,3,9,3,1,1,0,0,0,0,0,1,2,4,5,7,0,0,0,1,2,4,4,4,4,6,8,8,8,8,10,10,11,11,11,13,11,10,14,15,8,8,4,4,0,0,0,0,0,1,2,3,3,4,4,4,4,6,8,4,4,3,9,10,0,0,0,0,0,0,1,2,4,4,5,5,6,6,6,6,7,7,7,7,8,8,8,8,10,11,8,8,7,7,6,14,6,5,4,18,18,19,19,20,20,20,20,21,21,21,21,23,23,23,23,24,24,24,24,26,26,26,26,27,27,27,27,28,28,28,28,30,31,33,33,33,33,34,34,34,34,36,37,34,34,33,33,28,28,27,27,26,40,26,24,24,23,23,21,21,20,20,19,18,44,44,44,46,44,0,0,0,0,0,0,1,1,1,1,2,3,1,6,1,0,0,0,0,0,1,1,1,1,3,3,3,4,7,3,1,1,0,0,0,0,0,0,1,1,1,1,2,2,2,2,4,6,6,6,6,7,7,8,7,9,10,6,13,6,2,2,1,1,0,0,0,0,0,0,1,1,1,1,3,5,5,5,5,6,6,6,6,7,7,7,7,9,11,12,14,16,16,16,16,17,17,17,17,18,18,18,20,18,17,17,16,16,7,7,6,6,5,5,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,3,3,4,3,7,1,1,0,0,0,1,1,1,1,3,3,4,4,4,4,6,8,4,4,3,11,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,21,19,18,18,17,17,16,16,15,15,14,14,13,13,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,6,8,8,8,10,8,3,3,2,2,1,13,1,0,0,0,0,0,1,1,1,1,3,3,3,3,4,5,7,7,7,9,7,3,12,3,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,5,5,5,6,6,6,6,7,7,7,9,7,6,6,5,12,5,3,3,2,2,1,1,0,0,0,0,0,1,3,0,0,0,0,0,0,1,2,4,5,7,0,0,0,0,0,1,1,1,1,3,3,3,4,4,4,4,6,7,9,4,4,3,12,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,2,4,0,0,0,0,0,0,1,1,2,3,4,5,6,7,1,10,0,0,0,0,0,0,0,1,2,4,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,2,4,6,6,6,6,8,8,8,8,9,9,9,9,11,12,13,13,14,14,14,14,15,15,15,17,15,14,14,13,9,9,8,21,8,6,6,0,0,0,0,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,6,6,6,6,7,7,7,7,8,8,8,10,8,7,7,6,6,4,4,3,3,2,2,1,13,13,13,13,15,15,16,18,18,18,18,20,20,21,20,23,23,24,23,26,26,27,26,29,29,30,29,32,34,18,18,15,35,36,37,38,40,42,42,42,42,44,44,44,44,45,46,48,48,49,49,49,51,49,48,44,44,55,56,58,58,59,60,58,61,61,62,62,62,62,64,64,64,65,65,65,65,67,67,68,69,67,72,65,65,64,75,62,62,61,44,44,42,42,13,13,0,0,0,0,0,0,1,3,0,0,0,1,2,4,5,7,7,7,7,9,10,12,7,7,0,0,0,1,2,4,5,7,7,7,7,8,8,8,9,9,9,10,10,10,11,12,7,15,7,0,0,0,1,2,4,5,7,7,7,7,8,8,8,9,9,9,10,11,7,14,7,0,0,0,1,2,4,5,7,8,10,11,13,14,16,0,0,0,1,0,0,0,1,2,4,5,7,8,10,11,13,14,16,17,19,0,0,0,1,2,4,5,7,0,0,0,1,1,1,3,1,0,0,0,0,1,0,0,0,1,2,4,0,0,0,1,2,4,0,0,0,1,2,4,5,7,8,10,0,0,0,1,2,4,5,7,0,0,0,1,2,4,5,7,0,0,0,1,0,0,0,1,2,4,5,7,7,7,7,8,9,7,12,7,0,0,0,1,2,4,4,5,5,5,7,5,4,10,0,0,0,1,0,0,0,1,1,1,1,3,4,6,7,9,1,1,0,0,0,1,2,4,5,7,0,0,0,1,2,4,0,0,0,1,1,1,1,3,4,6,7,9,1,1,0,0,0,1,2,4,5,7,7,7,7,9,9,9,10,10,10,11,12,14,14,14,14,15,16,14,19,14,7,7,0,0,0,1,2,4,5,7,7,7,7,8,9,11,11,11,11,13,14,11,11,7,17,7,0,0,0,1,0,0,0,1,2,4,5,7,0,0,0,1,2,4,4,4,4,6,7,9,9,9,9,10,11,13,13,13,13,15,16,13,13,9,19,9,4,4,0,0,0,1,2,4,4,4,4,6,7,9,10,12,12,12,12,13,14,16,17,19,20,22,23,12,26,12,4,4,0,0,0,1,2,4,5,7,7,8,7,9,9,10,9,13,0,0,0,0,0,0,1,1,1,3,1,0,0,0,1,2,4,4,4,6,4,0,0,0,1,2,4,5,7,8,10,10,10,10,11,11,11,11,13,14,17,17,17,19,17,11,11,10,10,0,0,0,1,2,4,5,7,7,7,7,9,10,12,12,12,14,12,7,7,0,0,0,1,2,4,0,0,0,1,2,4,5,7,7,7,7,8,9,7,12,7,0,0,0,1,2,4,0,0,0,1,2,4,5,7,8,10,0,0,0,0,1,0,0,0,1,2,4,5,7,0,0,0,1,2,4,5,7,0,0,0,1,0,0,0,1,2,4,5,7,8,10,10,10,12,10,0,0,0,1,2,4,5,7,7,7,7,9,10,12,12,12,14,12,7,7,0,0,0,1,2,4,4,4,6,4,0,0,0,1,2,4,0,0,0,1,2,4,5,7,7,7,7,8,9,7,12,7,0,0,0,1,2,4,0,0,0,1,2,4,5,7,7,7,9,7,0,0,0,1,1,1,3,1,0,0,0,1,2,4,5,7,0,0,0,1,2,4,5,7,0,0,0,1,0,0,0,1,2,4,5,7,7,7,7,9,10,12,12,12,12,13,14,16,12,19,12,7,7,0,0,0,1,2,4,0,0,0,1,2,4,0,0,0,1,0,0,0,1,2,4,5,7,7,7,7,8,9,7,12,7,0,0,0,1,2,4,4,4,4,6,6,6,7,7,7,8,9,11,11,12,11,13,13,14,13,17,4,4,0,0,0,1,2,4,5,7,0,0,0,1,2,4,5,7,8,10,11,13,14,16,0,0,0,1,2,4,5,7,0,0,0,0,0,1,2,4,6,0,0,0,0,0,1,0,0,0,0,0,2,0,0,0,1,1,2,4,1,7,0,0,0,3,3,3,3,4,4,4,4,6,6,6,6,7,7,8,10,7,13,13,14,16,13,19,19,19,19,20,20,20,20,21,21,21,23,21,20,20,19,19,6,26,6,4,4,3,31,31,31,31,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,34,34,35,37,34,40,40,40,42,40,33,33,33,33,33,33,45,45,45,45,46,46,46,46,47,47,47,47,48,48,48,48,49,49,49,49,50,50,50,50,51,51,51,51,52,52,52,52,54,54,55,55,55,57,55,54,58,58,59,59,59,59,60,60,60,62,60,59,59,58,68,68,68,68,69,69,69,69,70,70,70,70,71,71,71,71,72,72,72,72,74,74,75,76,77,74,80,80,80,80,81,81,81,81,83,83,84,85,83,90,90,90,90,91,91,91,91,92,92,92,92,93,93,93,93,95,96,98,98,98,98,99,99,99,101,99,98,98,93,93,92,92,91,91,90,90,81,81,80,80,72,72,71,71,70,70,69,69,68,68,52,52,51,51,50,50,49,49,48,48,47,47,46,46,45,45,33,33,33,33,31,31,0,0,0,1,1,4,4,4,4,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,8,10,7,13,13,13,15,13,6,6,6,6,6,6,18,18,18,18,20,20,20,20,21,21,21,21,22,22,22,24,22,21,21,20,20,27,28,20,20,18,18,6,6,6,6,4,4,1,33,33,34,34,34,34,36,36,36,36,37,37,38,39,37,42,42,42,44,42,36,36,47,47,47,47,48,48,48,48,49,49,49,49,51,53,49,49,48,48,47,47,36,36,34,34,33,56,57,58,59,60,61,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,3,3,4,3,5,5,6,5,9,9,10,11,9,12,12,13,12,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,31,32,33,33,34,34,34,34,35,35,36,38,35,34,42,33,43,44,1,1,0,0,0,0,0,0,1,1,1,1,3,3,3,3,4,4,4,4,6,8,4,4,3,11,3,1,1,0,0,0,0,0,0,2,3,5,6,8,9,11,11,11,13,11,0,0,0,0,0,0,2,3,5,6,8,9,11,11,11,13,11,0,0,0,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,9,7,6,6,5,5,4,4,0,0,0,1,0,0,0,0,0,0,2,0,0,0,1,0,0,0,0,0,0,1,3,3,3,3,5,6,8,3,3,0,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,0,1,1,1,1,3,3,3,3,4,5,7,7,7,9,7,3,3,12,14,3,3,1,1,0,0,0,0,0,0,1,1,1,1,3,3,3,3,4,5,7,7,7,9,7,3,12,3,1,1,0,0,0,0,0,0,0,1,1,1,1,3,5,5,5,5,6,7,9,9,9,11,9,5,14,5,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,5,6,8,4,11,12,14,2,2,1,1,0,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,1,1,2,2,2,2,4,4,5,6,8,4,11,2,2,1,14,15,16,18,0,0,0,0,0,1,1,2,2,2,2,4,4,5,6,8,4,11,2,2,1,14,15,16,18,0,0,0,0,0,2,0,0,0,0,0,2,2,2,2,3,3,3,3,5,5,6,5,9,3,3,2,2,0,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,6,7,9,4,4,2,2,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,4,5,7,9,2,2,1,1,0,0,0,0,0,1,2,4,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,3,5,1,1,0,0,0,0,0,1,2,4,5,7,7,7,7,9,9,10,10,10,10,12,14,10,10,9,17,7,7,0,0,0,0,0,0,1,1,1,1,3,5,5,5,6,5,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,5,4,6,6,7,7,7,7,9,9,10,10,10,10,12,12,13,14,12,10,10,9,7,7,6,17,18,20,20,20,20,21,21,21,21,22,22,22,22,23,23,23,23,24,24,24,24,25,25,25,25,27,29,25,25,24,24,23,23,22,22,21,21,20,20,2,2,1,1,0,0,0,0,0,1,2,4,0,0,0,0,0,0,1,2,4,5,7,0,0,0,0,0,1,0,0,0,1,2,4,5,7,7,7,7,8,8,8,8,10,11,13,8,8,7,7,0,0,0,0,0,1,3,5,5,5,5,7,7,8,7,9,9,10,12,9,15,15,15,15,17,19,19,19,19,21,22,24,19,19,15,15,5,5,0,0,0,0,0,0,1,2,4,4,4,4,6,6,6,6,7,8,10,6,13,6,4,4,0,0,0,0,0,0,1,2,4,5,7,7,7,7,9,11,7,7,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,3,3,4,3,7,1,1,0,0,0,0,0,0,0,1,1,2,2,2,4,2,1,5,5,6,6,6,6,8,8,8,8,9,10,11,12,8,15,8,6,6,5,16,17,0,0,0,0,0,1,2,4,4,4,4,6,6,7,6,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,16,17,18,19,20,21,22,23,24,26,14,14,13,13,12,12,11,11,10,10,9,9,4,4,0,0,0,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,9,7,6,6,5,5,4,4,3,3,2,12,14,15,17,17,18,18,18,20,18,17,23,25,25,25,26,26,26,26,27,27,27,27,29,29,30,30,30,30,31,31,31,31,33,33,34,33,31,31,30,30,29,37,37,37,37,38,38,38,38,39,39,39,39,40,40,40,40,41,41,41,41,42,42,42,42,43,43,43,45,43,42,42,41,41,40,40,39,39,38,38,37,37,27,27,26,26,25,48,48,48,49,49,49,49,50,50,50,50,51,51,51,51,53,53,54,53,55,55,56,55,58,58,58,58,59,59,59,59,60,60,60,60,61,61,61,61,62,62,62,62,63,63,63,65,63,62,62,61,61,60,60,59,59,58,58,51,51,50,50,49,49,48,68,68,68,69,70,72,74,74,74,75,74,68,79,79,79,79,79,80,80,80,80,82,83,85,86,88,88,88,88,89,89,89,89,91,92,89,89,88,88,80,80,79,95,95,95,95,96,96,96,96,97,97,97,97,98,98,98,98,99,99,99,99,101,101,101,102,102,102,103,104,106,108,109,110,110,111,111,111,111,113,113,113,114,114,114,115,115,115,116,116,117,117,117,119,117,116,122,122,122,124,122,111,111,110,125,126,128,128,128,128,129,129,129,129,130,130,130,130,131,131,131,131,132,132,132,132,133,133,133,133,135,135,135,135,137,137,138,140,137,143,143,144,146,143,149,149,150,149,152,152,153,152,155,155,156,155,158,158,159,159,160,159,158,162,163,165,165,165,167,165,135,135,133,133,132,132,131,131,130,130,129,129,128,128,99,99,98,98,97,97,96,96,95,95,0,0,0,0,0,1,3,4,6,7,9,10,12,13,15,16,18,18,19,20,18,23,23,23,25,23,0,0,0,0,0,2,2,2,2,4,4,4,4,5,5,5,5,6,6,6,6,8,10,10,11,12,10,15,15,16,17,15,20,20,21,22,20,25,25,26,27,25,30,30,31,32,30,35,36,38,6,6,5,5,4,4,2,2,0,0,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,5,7,7,7,7,8,9,7,12,12,13,15,16,12,19,19,19,19,21,23,24,27,28,30,19,19,5,5,4,4,3,3,0,0,0,0,0,1,1,2,2,2,2,4,6,6,6,8,6,2,2,1,9,10,11,12,0,0,0,0,0,1,0,0,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,8,8,9,9,10,10,10,12,10,9,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,22,20,20,19,19,18,18,17,17,16,16,15,15,8,25,6,6,5,5,4,4,0,0,0,1,0,0,0,0,0,1,2,4,6,7,9,11,11,11,11,11,12,12,12,12,13,13,13,13,15,15,16,16,16,16,18,18,19,19,19,19,21,22,19,19,18,23,23,24,24,24,26,24,23,16,16,15,30,13,13,12,12,11,33,33,33,33,33,34,35,37,37,37,37,39,39,40,40,40,40,42,43,45,40,40,39,48,37,37,33,51,51,51,53,51,0,0,0,0,0,0,1,2,4,0,0,0,0,0,1,2,4,5,7,7,8,8,8,8,10,12,8,8,7,15,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,5,5,5,5,6,6,6,6,8,9,6,6,5,5,4,12,2,2,1,1,0,0,0,0,0,1,1,1,1,3,5,5,5,5,7,7,8,7,9,9,10,12,9,15,17,5,5,1,1,0,0,0,0,0,1,3,3,3,3,5,5,6,6,6,6,7,7,7,7,9,10,12,7,7,6,6,5,3,3,0,0,0,0,0,0,2,0,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,3,3,4,4,4,6,4,3,9,10,11,13,13,13,13,15,17,17,17,17,19,21,17,17,13,13,0,0,0,0,0,1,1,2,3,4,4,5,7,4,1,9,9,10,10,10,10,10,11,10,14,15,17,19,19,19,19,20,20,20,20,22,22,22,22,23,23,23,23,24,24,24,24,25,25,25,27,25,24,24,23,23,22,22,30,32,32,32,32,33,33,33,35,33,32,38,32,22,22,20,20,19,19,9,0,0,0,1,0,0,0,0,0,2,3,5,6,8,0,0,0,0,0,1,0,0,0,1,2,4,0,0,0,0,0,1,2,4,4,4,6,4,0,0,0,0,0,1,1,1,1,3,3,4,4,4,4,6,6,6,6,7,7,8,10,7,13,13,13,15,13,6,6,18,6,6,4,4,3,21,1,1,0,0,0,0,0,0,2,2,3,3,3,5,3,2,8,0,0,0,0,0,0,1,1,2,2,2,4,2,1,7,0,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,0,1,1,2,3,4,5,6,7,1,10,0,0,0,0,0,0,1,2,4,4,4,4,6,6,6,6,7,7,7,9,7,6,12,6,4,4,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,1,1,1,3,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,7,7,7,9,7,6,6,5,5,5,5,5,5,5,5,1,1,0,0,0,1,0,0,0,0,0,0,1,1,2,2,2,2,4,4,4,4,5,5,5,5,7,7,8,7,10,5,5,4,13,4,2,2,1,16,16,16,16,17,17,17,17,18,18,18,20,18,17,17,16,16,0,0,0,0,0,0,1,1,1,1,3,5,5,5,5,6,6,6,8,6,5,5,1,1,0,0,0,0,0,0,0,1,1,1,1,3,5,5,5,5,6,6,6,6,7,7,7,7,9,9,9,9,10,10,10,10,12,12,13,14,12,17,10,10,9,20,9,7,7,6,6,5,5,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,5,5,5,5,7,7,7,7,8,8,8,8,10,11,13,13,13,15,13,8,8,7,18,7,5,5,4,21,4,2,2,1,24,24,24,24,25,25,25,25,26,26,26,26,28,28,28,28,29,29,30,30,30,32,30,29,33,34,35,36,28,28,39,39,39,39,41,41,41,41,42,41,41,45,45,45,45,46,46,47,47,47,47,49,50,47,47,46,51,51,52,52,52,54,52,51,55,56,45,59,45,41,41,39,39,28,28,26,26,25,25,24,62,62,62,62,63,63,63,63,64,64,64,64,66,66,66,66,67,67,67,67,68,68,68,68,70,72,72,72,74,72,68,68,67,67,66,66,77,77,77,77,79,79,79,79,80,80,80,80,81,81,81,81,83,83,83,83,84,83,83,87,83,83,81,81,80,80,79,79,90,91,93,93,93,93,94,94,94,94,96,98,98,98,98,100,100,100,100,101,101,101,103,101,100,100,106,106,106,106,108,109,111,111,111,111,113,113,113,113,113,113,113,113,113,113,113,113,113,113,113,113,114,114,114,114,116,116,116,116,117,117,117,119,117,116,116,122,122,122,124,122,116,116,114,114,113,113,113,113,113,113,127,129,113,113,113,113,111,111,106,106,100,100,98,98,94,94,93,93,79,79,77,77,66,66,64,64,63,63,62,62,0,0,0,0,0,1,3,3,4,4,4,6,4,3,9,9,10,10,10,12,10,9,15,15,16,16,16,16,17,17,17,19,17,16,16,15,22,22,23,23,23,23,24,24,24,26,24,23,23,22,29,29,30,30,30,30,31,31,31,33,31,30,30,29,36,36,37,37,37,37,38,38,38,40,38,37,37,36,43,43,43,43,44,44,44,46,44,43,43,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,1,1,1,3,4,6,6,7,7,7,7,8,8,8,10,8,7,7,6,13,13,13,13,14,14,14,16,14,13,13,1,1,0,0,0,0,0,1,2,4,6,6,6,6,7,7,7,9,7,6,6,0,0,0,0,1,1,1,3,1,0,0,0,1,1,2,2,2,4,2,1,7,8,10,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,20,21,23,23,23,23,24,24,24,26,24,23,23,18,18,17,17,16,16,15,15,14,14,13,13,12,12,0,0,0,0,0,1,2,4,6,6,6,6,7,7,7,9,7,6,6,0,0,0,0,0,1,0,0,0,1,2,4,4,4,4,6,6,7,8,10,10,10,10,12,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,16,16,16,16,18,18,19,19,19,21,19,18,22,22,23,23,23,23,24,24,24,24,26,27,24,24,23,23,22,16,16,15,15,14,14,14,14,14,14,31,33,14,14,14,14,10,10,6,34,34,35,36,38,38,38,38,40,42,42,42,42,43,43,43,43,44,44,44,44,45,45,45,45,47,47,48,47,50,50,51,51,51,53,51,50,54,54,55,55,55,55,56,56,56,56,58,59,56,56,55,55,54,45,45,44,44,43,43,42,42,63,65,42,42,38,38,34,66,67,68,69,70,71,4,4,0,0,0,0,0,1,2,4,6,6,6,6,7,7,7,7,9,10,12,12,12,12,13,13,13,13,14,14,14,14,16,16,17,17,17,17,19,20,22,17,17,16,25,26,28,30,14,14,13,13,12,12,7,7,6,6,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,3,5,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,3,5,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,8,6,5,5,4,4,3,11,3,1,1,0,0,0,0,0,1,1,1,1,3,5,1,1,0,0,0,0,0,1,0,0,0,1,1,2,2,2,2,4,4,5,5,5,5,7,7,8,8,8,9,12,8,7,5,5,4,2,2,1,17,18,19,19,20,20,20,20,22,22,22,22,23,23,24,24,24,26,24,23,27,28,22,22,31,31,31,31,33,35,36,31,31,22,22,20,20,19,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,2,3,5,5,5,5,7,9,5,5,1,10,11,12,13,0,0,0,1,1,2,2,2,2,3,3,3,5,3,2,2,1,8,10,10,10,10,11,11,11,11,12,12,12,12,14,14,15,15,15,15,16,16,16,16,18,19,20,21,16,16,15,15,14,24,24,24,24,26,26,26,26,27,27,28,29,27,32,32,33,34,32,37,37,37,37,39,40,42,37,37,26,45,26,24,24,12,12,11,11,10,10,0,0,0,1,1,2,4,4,4,4,5,5,5,7,5,4,4,1,10,11,13,13,13,13,15,15,15,15,16,16,16,18,16,15,21,15,13,13,0,0,0,1,1,2,2,2,2,3,3,3,5,3,2,2,1,8,10,10,10,10,12,12,12,12,13,13,13,13,15,16,17,17,18,18,18,20,18,17,13,13,12,24,12,10,10,0,0,0,1,1,2,4,4,4,4,5,5,5,7,5,4,4,1,10,11,13,13,13,13,15,15,15,15,16,16,16,18,16,15,21,15,13,13,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,22,22,22,22,23,23,23,23,24,24,24,24,25,25,25,25,26,26,26,26,27,27,27,27,28,28,28,28,29,29,29,29,30,30,30,30,31,31,31,31,32,32,32,32,33,33,33,33,34,34,34,34,35,35,35,35,36,36,36,38,36,35,35,34,34,33,33,32,32,31,31,30,30,29,29,28,28,27,27,26,26,25,25,24,24,23,23,22,22,21,21,20,20,19,19,18,18,17,17,16,16,15,15,14,14,13,13,12,12,11,11,10,10,9,9,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,0,1,2,4,0,0,0,0,0,1,2,4,5,7,8,10,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,5,3,2,2,1,1,0,0,0,1,2,3,4,5,6,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,12,12,12,12,13,13,13,13,15,15,16,15,18,13,13,12,21,12,10,10,9,9,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,1,2,0,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,1,1,1,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,11,11,13,11,6,6,5,5,4,4,3,16,3,1,1,0,0,0,0,1,1,1,1,3,4,5,6,8,9,11,12,14,1,1,0,0,0,0,1,0,0,0,0,3,3,3,3,4,4,4,6,4,3,11,11,11,11,12,12,12,12,14,16,16,16,16,18,19,23,23,23,23,25,25,25,25,26,26,26,26,27,27,27,27,28,28,28,28,30,31,33,33,33,33,34,34,34,34,35,35,35,35,36,36,36,36,37,37,37,37,38,38,38,38,39,39,39,39,40,40,40,40,42,42,43,44,42,45,46,47,48,50,40,40,39,39,38,38,37,37,36,36,35,35,34,34,33,33,28,28,27,27,26,26,25,55,25,23,23,16,16,12,12,11,11,0,0,0,0,0,1,1,1,1,3,5,5,5,5,7,9,9,9,9,10,10,10,12,10,9,9,5,5,1,1,0,0,0,0,0,0,1,1,1,1,2,2,2,2,4,6,6,7,6,8,8,9,10,8,13,15,2,2,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,3,3,3,3,4,4,4,4,6,7,4,4,3,10,3,1,1,0,0,0,0,0,1,2,4,6,6,6,6,8,8,8,8,9,10,11,11,12,13,15,15,15,17,15,11,18,19,8,22,8,6,6,0,0,0,0,0,1,1,1,1,2,2,2,4,2,1,1,0,0,0,0,0,1,2,4,6,6,6,6,7,7,7,7,8,8,8,8,10,12,12,12,12,13,13,13,13,15,15,16,18,15,21,21,22,23,21,13,13,12,27,12,8,8,7,7,6,6,0,0,0,0,0,1,2,0,0,0,0,0,1,1,1,1,3,3,3,3,4,4,4,4,6,4,4,3,9,3,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,3,3,3,3,4,4,4,6,4,3,3,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,1,2,2,2,2,4,5,2,2,1,8,8,8,8,10,11,13,13,13,15,13,8,8,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,2,2,3,3,3,3,4,4,4,4,6,8,4,4,3,3,2,1,12,12,12,12,13,13,13,13,14,14,14,16,14,13,13,12,12,0,0,0,0,0,1,1,1,1,2,2,2,4,2,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,5,3,2,2,1,1,0,0,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,9,9,9,10,10,10,10,12,13,14,15,16,17,10,10,9,20,20,20,20,21,21,21,21,22,22,22,22,24,24,25,24,27,22,22,21,21,30,30,30,30,31,31,31,31,33,34,31,31,30,30,21,21,20,37,37,37,37,38,38,38,38,40,38,38,37,43,43,43,44,43,47,47,47,47,48,47,51,51,51,51,52,52,52,52,53,53,53,53,55,57,57,58,59,61,62,64,57,67,67,68,67,70,71,73,53,53,52,52,51,51,7,7,6,6,5,5,4,4,0,0,0,0,1,1,1,1,1,2,2,3,3,3,3,5,7,9,10,12,3,3,2,13,13,14,13,17,19,1,22,23,24,25,26,27,28,29,30,31,33,34,35,36,37,39,43,43,43,43,45,49,49,49,49,50,50,50,52,50,49,49,43,43,0,0,0,1,1,2,2,2,4,2,1,7,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,16,14,13,13,12,12,11,11,10,10,9,9,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,6,8,8,8,8,9,9,9,9,10,10,10,12,10,9,9,8,8,3,3,2,2,1,1,0,0,0,0,1,1,1,3,1,0,0,0,0,1,1,1,1,2,3,1,6,1,0,0,0,0,1,1,1,1,2,3,1,6,1,0,0,0,0,1,2,4,0,0,0,0,1,2,4,5,7,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,4,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,4,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,8,6,5,5,4,4,0,0,0,0,1,2,4,0,0,0,1,1,2,2,2,2,4,4,5,4,6,6,7,6,10,10,10,10,12,12,13,13,13,13,15,15,16,15,17,17,18,20,17,13,13,12,24,26,10,10,2,2,1,27,27,28,28,29,28,30,30,31,30,34,27,35,36,0,0,0,0,0,0,0,1,2,3,5,6,8,8,8,8,10,10,10,10,12,13,14,15,16,18,18,18,18,20,22,22,22,22,24,26,26,26,26,28,30,31,32,33,35,35,35,35,37,37,37,37,39,41,41,41,41,43,45,45,45,45,47,48,49,50,51,53,53,53,53,54,54,54,54,56,56,56,56,57,57,57,57,59,60,62,62,62,62,64,66,66,66,66,67,67,67,67,72,73,67,67,66,66,62,62,57,57,56,56,54,54,53,53,45,45,41,41,37,37,35,35,26,26,22,22,18,18,10,10,8,8,0,0,0,0,0,1,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,7,7,7,7,8,10,11,13,13,13,13,15,17,18,13,13,7,21,21,21,21,22,22,22,24,22,21,27,27,27,27,28,28,28,28,30,28,28,27,33,33,34,34,34,35,35,35,36,37,39,40,33,43,43,43,43,44,44,44,44,45,45,45,45,47,49,49,49,49,50,49,53,53,53,53,55,55,55,55,56,56,56,56,57,57,57,57,59,59,59,59,60,60,60,60,62,63,64,66,67,70,71,73,73,73,73,74,74,74,74,76,78,80,74,74,73,73,60,60,59,59,57,57,56,56,55,55,53,53,45,45,44,44,43,43,5,5,4,4,3,3,2,2,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,6,8,4,4,3,3,2,2,1,1,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,6,6,6,6,8,8,9,9,10,10,10,12,10,9,15,15,15,17,15,8,20,20,20,20,22,23,25,26,28,28,28,30,28,20,20,6,6,4,4,3,3,2,2,1,1,0,0,0,0,1,1,2,2,2,2,4,5,7,2,2,1,10,0,0,0,0,1,0,0,0,0,0,0,1,2,4,4,4,4,5,5,5,5,7,7,8,8,9,8,10,10,11,10,7,14,14,15,15,15,15,17,15,15,14,20,20,20,20,21,21,21,21,22,22,22,24,22,21,21,20,20,5,5,4,4,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,8,8,8,8,9,9,9,9,10,10,10,10,12,14,15,17,17,17,17,18,18,18,18,19,19,19,19,21,23,19,19,18,18,17,17,10,10,9,9,8,26,26,26,26,27,27,27,29,27,26,32,32,32,32,33,33,33,35,33,32,38,38,39,39,39,40,40,40,41,42,44,45,38,48,48,48,48,50,50,50,50,51,50,54,54,54,54,56,56,56,56,57,57,57,57,58,58,58,58,60,60,60,60,61,61,61,61,63,64,65,67,68,71,72,74,75,77,79,81,61,61,60,60,58,58,57,57,56,56,54,54,48,48,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,7,7,7,7,8,8,8,8,9,9,9,9,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,17,15,14,14,13,13,12,12,11,11,9,9,8,8,7,20,7,3,3,2,2,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,11,13,9,9,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,6,4,3,3,2,2,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,6,8,4,4,3,3,2,2,1,1,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,0,0,0,1,2,4,6,6,6,6,7,7,7,7,9,11,11,11,11,12,12,12,12,13,13,13,13,15,16,18,18,18,18,19,19,19,19,21,21,22,22,22,22,23,23,23,23,24,24,24,24,25,25,25,25,27,27,28,27,30,30,30,30,32,33,30,30,25,25,24,24,23,23,22,22,21,19,19,18,18,13,13,12,12,11,11,7,7,6,6,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,6,8,4,4,3,3,2,2,1,11,11,11,11,13,15,11,11,0,0,0,1,0,0,0,1,1,1,1,2,2,2,2,4,5,7,7,7,7,9,10,11,12,13,14,7,7,2,2,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,5,7,7,7,7,8,8,8,10,8,7,7,4,13,2,2,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,8,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,1,2,0,0,0,0,1,1,1,3,1,0,0,0,0,1,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,1,2,3,1,4,5,0,0,0,1,0,0,0,0,0,0,1,1,1,1,2,2,2,4,2,1,1,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,2,2,2,2,4,5,2,2,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,6,7,8,9,10,11,12,13,14,15,17,3,3,2,2,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,4,6,8,8,8,8,9,9,9,9,10,10,10,10,12,14,14,14,14,16,18,20,22,14,14,10,10,9,9,8,8,2,2,1,1,0,0,0,0,0,0,0,0,1,3,3,3,3,5,7,7,7,7,8,8,8,8,9,9,9,11,9,8,8,7,7,3,3,0,0,0,0,0,0,0,0,1,3,3,3,3,5,5,6,8,8,8,8,10,8,8,5,13,3,3,0,0,0,0,0,0,0,0,1,2,4,4,4,6,4,0,0,0,0,0,0,0,0,1,2,4,4,4,6,4,0,0,0,0,0,0,0,0,2,2,2,2,3,3,3,3,5,5,6,6,6,6,7,7,7,7,9,10,12,7,7,6,6,5,15,17,17,17,17,19,21,21,21,21,22,22,22,22,23,23,23,23,25,26,28,23,23,22,22,21,21,17,17,3,3,2,2,0,0,0,0,0,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,7,5,4,4,3,3,0,0,0,0,0,0,0,0,1,2,4,4,4,6,4,0,0,0,0,0,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,4,3,3,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,10,11,13,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,2,4,4,4,4,6,8,8,8,10,8,4,4,0,0,0,0,0,0,0,0,1,2,4,4,4,4,6,8,8,8,10,8,4,4,0,0,0,0,0,0,0,0,1,2,4,0,0,0,0,0,0,0,0,1,3,3,3,3,5,5,6,5,7,7,8,8,8,8,10,8,8,7,13,3,3,0,0,0,0,0,0,0,0,1,2,4,4,4,4,5,5,5,7,5,4,4,0,0,0,0,0,0,0,0,1,3,3,3,3,4,4,4,6,4,3,3,0,0,0,0,0,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,4,3,3,0,0,0,0,0,0,0,0,1,2,4,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,0,0,0,0,1,3,3,4,4,4,6,4,3,9,9,9,9,10,10,10,12,10,9,9,0,0,0,0,0,0,0,1,1,1,1,3,3,3,3,4,4,4,4,6,8,4,4,3,3,11,11,11,11,12,12,12,12,14,14,14,14,15,15,15,15,17,18,20,15,15,14,14,12,12,11,11,3,3,1,1,0,0,0,0,0,0,0,1,1,1,1,3,3,3,3,4,4,4,4,6,8,4,4,3,3,11,11,12,12,12,12,13,13,13,13,15,15,15,15,16,16,16,16,18,19,16,16,15,15,13,13,12,12,11,22,3,3,1,1,0,0,0,0,0,0,0,0,0,1,3,3,3,3,5,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,12,10,9,9,8,8,7,7,3,3,0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,10,12,7,7,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,2,3,5,5,6,6,6,6,8,10,10,10,10,11,11,11,11,13,14,16,11,11,10,10,6,6,5,19,1,22,22,22,22,23,23,23,23,25,27,27,27,27,28,28,28,28,30,30,30,30,31,31,31,31,33,34,36,36,36,36,37,37,37,39,37,36,36,31,31,30,30,42,42,42,42,43,43,43,43,44,44,44,44,45,45,45,45,46,46,46,46,47,47,47,47,49,50,52,47,47,46,46,45,45,44,44,43,43,42,42,30,30,28,28,27,27,23,23,22,22,0,0,0,0,0,0,1,1,1,1,3,3,3,3,4,4,4,6,4,3,9,3,1,1,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,4,5,7,7,7,7,8,8,8,9,9,9,10,11,13,13,13,13,15,16,13,13,7,7,19,19,19,19,20,20,20,20,21,21,21,23,21,20,20,19,19,7,7,2,2,1,1,0,0,0,0,0,1,2,4,6,6,6,6,8,10,10,11,12,10,15,17,6,6,0,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,5,5,6,6,6,6,8,9,11,6,6,5,14,14,14,16,14,4,19,4,2,2,1,22,22,22,22,23,23,23,23,24,24,24,24,25,25,25,25,27,27,27,27,29,29,30,30,31,33,30,29,37,37,37,37,38,38,38,38,39,39,39,39,40,40,40,40,41,41,41,41,42,42,42,42,43,43,43,43,45,47,48,50,50,50,50,51,51,52,54,51,57,59,59,59,59,61,63,63,63,63,64,64,64,64,66,66,67,69,66,72,74,74,74,74,75,75,75,75,76,76,76,76,78,78,78,78,79,79,79,79,80,80,80,80,81,81,81,81,82,82,82,84,82,81,81,80,80,79,79,78,78,76,76,75,75,74,74,64,64,63,63,59,59,50,50,87,89,91,50,50,43,43,42,42,41,41,40,40,39,39,38,38,37,37,27,27,25,25,24,24,23,23,22,94,94,94,94,95,95,95,95,96,96,96,96,98,98,98,98,99,99,100,100,100,100,101,101,101,101,103,103,104,106,103,101,101,100,100,99,108,108,109,111,108,114,98,117,98,96,96,95,95,94,120,120,121,122,124,125,127,120,130,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,7,7,7,7,8,8,8,8,10,10,11,10,12,12,13,15,12,18,18,18,20,18,8,8,7,7,3,3,2,2,1,1,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,10,11,13,13,13,13,14,15,16,16,17,17,17,19,17,16,20,21,13,13,24,24,24,24,25,25,25,25,26,26,26,26,27,27,27,27,28,28,28,28,29,29,29,29,31,33,33,33,33,34,34,34,34,36,36,36,36,37,36,40,36,34,34,33,33,43,43,44,44,44,44,45,45,45,47,45,44,44,43,50,33,33,29,29,28,28,27,27,26,26,25,25,24,24,13,13,8,8,7,7,6,6,5,5,4,4,3,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,54,54,54,54,55,55,55,55,56,56,56,56,58,60,60,60,60,61,61,61,61,62,62,62,64,62,61,61,60,60,56,56,55,55,54,54,53,53,53,53,53,53,53,53,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,6,6,7,7,7,7,9,9,10,11,9,12,13,7,7,6,16,16,16,16,18,18,19,19,19,21,19,18,24,24,24,24,25,25,25,25,26,26,26,28,26,25,25,24,24,16,16,4,4,3,3,2,2,1,31,31,31,31,32,32,32,32,34,34,35,35,35,37,35,34,40,32,32,31,31,0,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,5,5,6,6,6,6,8,9,11,6,6,5,14,14,14,16,14,4,19,4,2,2,1,22,22,22,22,23,23,23,23,24,24,24,24,26,26,26,26,27,27,27,27,28,28,28,28,29,29,29,29,30,30,30,30,32,34,34,34,34,35,35,35,35,36,36,36,36,37,37,37,37,38,38,38,38,40,42,42,42,42,43,43,43,43,44,44,44,44,45,45,45,45,46,46,46,46,48,50,50,50,50,51,51,51,51,52,52,52,52,53,53,53,53,54,54,54,54,56,58,54,54,53,53,52,52,51,51,50,50,46,46,45,45,44,44,43,43,42,42,38,38,37,37,36,36,35,35,34,34,30,30,29,29,28,28,27,27,26,26,24,24,23,23,22,61,0,0,0,0,0,1,1,1,1,3,3,3,3,4,4,4,4,6,7,9,9,9,9,11,13,9,9,4,4,3,16,16,16,16,18,18,18,19,18,22,22,22,22,23,23,23,23,24,24,24,24,26,26,26,26,27,27,27,27,28,28,28,28,30,31,33,33,33,33,35,36,33,33,28,28,27,27,26,26,39,39,39,39,41,41,41,41,42,42,42,42,43,43,43,43,44,44,44,44,45,45,45,45,47,47,47,47,48,48,48,50,48,47,53,47,45,45,44,44,43,43,42,42,41,41,56,56,56,56,57,57,57,57,59,61,61,61,61,62,62,62,62,63,63,63,63,65,67,67,67,67,68,68,68,68,70,72,72,72,72,73,73,73,73,75,77,77,77,77,78,78,78,78,80,82,82,82,82,83,83,83,83,85,87,87,87,87,88,88,88,88,89,89,89,89,91,93,95,89,89,88,88,87,87,83,83,82,82,78,78,77,77,73,73,72,72,68,68,67,67,63,63,62,62,61,61,57,57,56,56,41,41,39,39,26,26,24,24,23,23,22,22,18,18,16,16,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,9,10,10,10,10,12,12,13,12,10,10,9,14,14,15,14,17,17,18,18,18,18,19,19,19,19,21,23,19,19,18,18,17,26,26,26,26,27,27,27,27,28,28,28,28,29,29,29,29,30,30,30,30,32,34,34,34,34,36,38,38,38,38,40,42,38,38,34,34,30,30,29,29,28,28,27,27,26,26,7,7,6,6,5,5,4,4,3,3,2,2,1,45,45,45,45,45,46,47,49,49,49,49,50,50,50,52,50,49,49,45,55,55,55,55,56,56,56,56,58,58,58,58,59,59,59,61,59,58,64,58,56,56,55,67,67,67,67,68,68,68,68,69,69,69,69,70,70,70,70,71,71,71,71,73,73,73,73,74,74,74,76,74,73,73,79,81,73,73,71,71,70,70,69,69,68,68,67,84,84,85,85,85,85,87,88,90,90,90,90,92,93,95,90,90,85,85,84,98,98,98,98,99,99,99,99,101,101,101,101,102,102,102,102,104,105,107,107,107,109,107,102,102,101,101,99,99,98,98,0,0,0,0,0,1,1,1,1,3,3,3,4,4,5,5,5,7,5,4,10,10,10,10,11,11,11,13,11,10,10,3,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,22,22,22,22,23,23,23,23,24,24,24,26,24,23,23,22,22,21,21,20,20,19,19,18,18,17,17,16,16,1,1,0,0,0,0,0,0,1,2,4,4,4,4,5,6,4,9,4,0,0,0,0,0,0,1,2,4,4,4,4,5,5,5,5,7,8,10,10,10,12,10,5,5,4,4,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,16,14,13,13,12,12,11,11,10,10,9,9,9,9,9,19,9,9,9,7,7,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,0,0,1,2,4,6,6,6,6,6,6,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,16,18,18,18,18,20,22,22,22,22,23,23,23,23,24,24,24,24,25,25,25,25,27,29,30,32,32,32,32,33,33,33,33,34,34,34,34,35,35,35,35,36,36,36,36,37,37,37,37,38,38,38,38,39,39,39,39,41,43,43,43,43,44,44,44,44,45,45,45,45,46,46,46,46,48,52,52,52,52,53,53,53,53,55,57,57,58,58,58,58,59,59,59,59,61,62,64,59,59,58,58,57,67,67,67,67,68,68,68,68,69,69,69,69,71,73,69,69,68,68,67,67,53,53,52,52,46,46,45,45,44,44,43,43,39,39,38,38,37,37,36,36,35,35,34,34,33,33,32,32,25,25,24,24,23,23,22,22,18,18,14,14,13,13,12,12,11,11,10,10,9,9,6,76,76,77,76,78,78,79,78,82,0,0,0,0,0,0,2,2,3,4,6,7,9,10,12,2,15,15,15,15,17,17,18,18,18,18,20,20,21,21,21,21,22,22,22,24,22,21,21,20,27,27,27,27,29,29,29,29,30,30,30,30,32,34,30,30,29,29,27,27,18,18,17,37,37,37,37,38,38,38,40,38,37,37,15,15,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,5,6,6,6,6,7,7,7,7,9,9,10,9,11,11,12,14,11,17,7,7,6,6,5,20,3,3,2,2,1,23,23,23,23,23,24,24,24,24,25,25,25,25,26,26,26,26,27,27,27,27,28,28,28,28,30,30,31,31,31,31,32,32,32,32,34,35,36,38,38,38,38,39,39,39,39,40,40,40,40,41,41,41,41,43,45,45,45,45,46,46,46,46,47,47,47,47,48,48,48,48,50,52,52,52,52,53,53,53,53,54,54,54,54,55,55,55,55,57,59,59,60,60,60,60,61,61,61,61,62,62,62,62,63,63,63,63,65,67,63,63,62,62,61,61,60,60,59,70,55,55,54,54,53,53,52,52,48,48,47,47,46,46,45,45,41,41,40,40,39,39,38,38,32,32,31,31,30,71,71,72,72,72,72,73,73,73,73,74,74,74,74,75,75,75,75,77,79,79,79,79,80,80,80,80,81,81,81,81,82,82,82,82,84,86,86,86,86,87,87,87,87,88,88,88,88,89,89,89,89,91,93,93,94,94,94,94,95,95,95,95,96,96,96,96,97,97,97,97,99,101,97,97,96,96,95,95,94,94,93,104,89,89,88,88,87,87,86,86,82,82,81,81,80,80,79,79,75,75,74,74,73,73,72,72,71,107,107,107,107,108,108,108,108,110,112,108,108,107,107,28,28,27,27,26,26,25,25,24,24,23,115,115,116,117,119,120,122,115,125,125,126,127,129,130,132,133,135,125,138,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,5,5,5,5,6,6,6,8,6,5,5,4,4,11,11,11,11,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,21,19,18,18,17,17,16,16,15,15,14,14,13,13,24,24,24,26,24,13,13,11,11,4,4,2,2,1,1,0,0,0,0,0,0,1,1,1,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,10,14,14,14,14,16,16,17,18,16,21,21,21,21,22,22,22,24,22,21,21,14,14,7,7,6,6,5,5,4,4,3,27,3,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,3,4,6,6,6,6,7,7,7,7,9,10,12,14,7,7,6,6,2,2,17,17,17,17,18,18,18,18,20,21,23,25,18,18,17,17,2,2,1,28,28,28,28,29,29,29,29,30,30,30,30,31,31,31,31,33,33,34,33,35,35,36,38,35,31,31,30,30,29,29,28,28,0,0,0,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,8,8,8,8,9,9,9,9,10,10,10,10,12,12,13,14,12,17,17,17,17,18,18,18,18,19,19,19,21,19,18,18,17,17,10,10,9,9,8,8,24,24,24,24,25,25,25,25,27,29,25,25,24,24,8,8,6,6,5,5,4,4,0,0,0,0,0,0,1,2,4,5,7,8,10,11,13,13,14,14,14,14,16,18,18,18,18,19,19,19,19,21,22,24,19,19,18,18,14,14,13,27,27,27,27,28,28,28,30,28,27,27,0,0,0,0,0,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,17,15,14,14,13,13,12,12,11,11,10,1,21,0,0,0,0,0,1,1,1,1,3,3,4,5,6,7,8,9,3,12,12,12,12,14,14,15,15,15,17,15,14,20,12,12,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,5,3,2,2,1,1,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,6,4,3,3,2,2,1,1,0,0,0,0,0,0,0,0,1,3,0,0,0,0,0,0,0,1,3,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,3,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,1,1,1,2,2,2,4,2,1,1,0,0,0,0,0,1,3,3,3,5,3,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,3,0,0,0,1,1,2,3,5,5,5,5,6,6,6,8,6,5,5,1,11,11,11,11,12,12,12,12,14,14,15,16,14,19,19,19,19,21,21,22,23,21,26,26,26,26,28,28,29,28,31,31,31,31,33,35,35,35,35,37,39,40,42,44,45,47,47,47,47,48,48,48,48,49,49,49,49,50,50,50,50,51,51,51,51,52,52,52,52,53,53,53,53,55,55,55,55,56,56,56,56,57,57,57,57,59,59,60,60,60,62,60,59,65,65,66,66,67,67,67,69,67,66,65,73,73,73,73,75,77,77,78,78,78,78,79,79,79,79,80,80,80,80,81,81,81,81,82,82,82,82,83,83,83,83,84,84,84,86,84,83,83,82,82,81,81,80,80,79,79,78,78,77,73,73,57,57,56,56,55,55,53,53,52,52,51,51,50,50,49,49,48,48,47,47,35,35,31,31,26,26,19,19,12,12,11,11,0]
const contents={"0":[408,409,410],"1":[411,412,413,414,415,413,416,410],"2":[417,418,413,414,419,413,416,410],"3":[420,421,410],"4":[422,423,424,425,410],"5":[426,427,410],"6":[428,429,410],"7":[430,431,413,432,413,433,434,413,435,410],"8":[436,437,438,413,439,440,413,441,442,413,433,443,413,444,410],"9":[445,446,447,413,448,449,413,450,413,451,452,453,413,454,455,413,456,413,457,425,413,416,410],"10":[458,446,413,459,460,461,462,413,463,425,413,416,410],"11":[464,465,413,466,467,413,468,467,413,469,410],"12":[470,471,410],"13":[472,473,410],"14":[474,475,476,477,478,413,479,480,413,481,425,413,482,483,484,485,413,486,425,413,487,488,484,485,413,489,425,413,490,491,484,485,413,492,425,413,493,494,495,413,496,410],"15":[497,498,413,499,410],"16":[500,413,413,413,413,413,413,413,413,413,413,413,413,501,413,413,413,413,502,503,413,504,505,506,507,508,509,510,413,511,410],"17":[512,513,514,515,516,517,518,519,520,521,516,522,518,519,520,523,520,524,525],"18":[526,527,528,529,530,531,413,532,529,425,413,533,410],"19":[534,535,413,536,410],"20":[537,538,410],"21":[539,540,541,413,542,413,543,544,545,413,546,547,413,548,549,550,551,552,413,553,413,554,555,413,556,557,558,413,559,560,413,549,561,551,552,413,553,413,562,555,413,556,563,564,425,413,565,410],"22":[566,567,568,413,569,570,413,571,410],"23":[572,573,574,575,413,576,575,413,577,578,413,579,578,413,467,425,413,580,413,459,581,582,413,583,584,413,585,586,587,413,588,589,563,590,413,583,584,413,591,413,592,593,425,413,594,410],"24":[595,596,410],"25":[597,437,598,413,599,600,413,601,602,601,603,604,605,413,606,607,584,413,467,608,609,410],"26":[610,611,413,459,612,613,425,413,416,410],"27":[614,611,447,413,615,616,617,413,618,584,425,413,416,410],"28":[619,620,621,413,622,623,624,413,625,626,413,627,628,629,628,563,630,425,413,631,632,413,416,410],"29":[633,634,439,413,620,621,413,635,636,637,624,413,625,638,413,627,639,629,639,563,630,425,413,631,640,413,416,410],"30":[641,642,643,644,645,413,416,410],"31":[646,540,647,413,648,425,413,649,413,650,651,652,653,654,655,656,657,413,658,410],"32":[659,660,661,413,662,425,413,663,413,664,665,413,666,425,413,667,413,668,669,670,671,413,672,673,674,675,584,413,676,677,678,679,413,680,628,413,681,413,682,683,413,684,583,413,685,686,413,687,583,413,688,689,690,413,691,583,413,692,413,693,583,413,694,695,696,697,698,699,413,700,425,413,416,410],"33":[701,660,702,413,703,425,413,663,413,664,665,413,666,425,413,667,413,704,413,705,706,707,413,708,709,710,711,712,563,630,413,713,425,413,416,410],"34":[714,715,413,716,717,413,718,413,719,410],"35":[720,660,721,413,722,425,413,663,723,413,664,665,413,724,425,413,667,413,725,726,413,727,728,729,413,730,731,732,413,733,734,413,735,736,413,737,738,563,739,413,740,741,742,743,744,413,745,746,425,410],"36":[747,748,749,413,750,413,751,752,413,753,413,754,755,756,413,757,758,759,413,760,761,413,762,413,763,759,584,413,764,425,413,765,766,767,413,768,769,770,413,771,413,772,413,773,774,775,776,760,413,777,778,584,413,779,780,781,413,782,783,413,784,785,413,786,787,788,789,413,787,555,413,790,413,791,584,413,792,413,793,794,584,413,795,413,796,797,413,798,799,413,800,584,413,793,801,675,413,802,584,413,764,425,413,803,804,413,805,425,413,806,807,413,808,413,809,810,413,811,812,813,413,814,815,413,816,817,818,819,413,764,425,413,820,821,822,823,584,413,609,425,413,824,413,825,826,413,827,410],"37":[828,829,830,413,831,832,413,833,425,413,834,413,835,836,837,838,839,413,840,841,413,842,584,413,843,425,413,844,413,845,846,847,848,584,425,413,849,850,583,413,851,852,853,413,673,854,855,413,856,857,858,859,413,860,425,413,861,413,845,862,413,863,410],"38":[864,865,673,413,413,413,866,413,867,854,868,563,739,425,413,446,413,540,869,608,870,413,871,872,413,625,873,413,874,630,425,413,875,413,416,410],"39":[876,877,410],"40":[878,879,413,459,880,802,584,425,413,416,410],"41":[881,882,883,884,885,886,413,887,425,413,845,888,846,889,608,609,410],"42":[890,437,891,413,892,413,879,413,459,893,413,894,895,413,583,584,413,896,897,413,898,899,900,563,895,425,413,416,410],"43":[901,902,410],"44":[903,904,413,905,413,414,906,413,416,410],"45":[907,908,909,413,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,930,931,932,933,413,934,935,413,936,937,413,938,413,583,584,413,939,940,413,941,942,413,943,555,413,937,413,938,413,944,945,413,946,947,413,583,584,413,948,583,413,949,425,413,416,410],"46":[950,951,413,952,953,413,954,425,413,416,410],"47":[955,951,413,952,953,413,956,425,413,416,410],"48":[957,437,958,413,439,959,413,960,410],"49":[961,540,541,413,962,413,963,413,964,413,599,965,413,966,608,967,410],"50":[968,969,970,603,971,413,972,413,764,608,609,410],"51":[973,974,975,413,969,976,977,978,979,413,980,981,555,413,982,584,425,413,983,984,985,986,413,987,988,413,989,990,991,413,992,981,413,993,994,413,980,981,555,413,995,584,425,413,996,413,997,410],"52":[998,459,999,575,425,413,469,410],"53":[1000,879,413,459,1001,425,413,416,410],"54":[1002,1003,1004,413,1005,413,1006,612,1007,563,1008,425,413,416,410],"55":[1009,1010,413,1011,413,1012,1013,1014,413,1015,413,433,503,413,1016,413,1017,1013,1018,413,1015,410],"56":[1019,1020,410],"57":[1021,1022,413,1023,1024,425,413,1025,410],"58":[1026,1027,413,540,1028,413,746,413,503,425,413,634,413,1029,1030,1031,1032,1031,1033,1034,413,1035,410],"59":[1036,1037,1038,1039,413,1040,583,413,1041,413,1042,425,413,1043,410],"60":[1044,908,413,1045,1046,583,413,1047,413,949,425,413,416,410],"61":[1048,908,1049,1050,413,1045,1047,1051,413,1052,425,413,416,410],"62":[1053,1054,413,1055,410],"63":[1056,1057,434,413,1058,1059,413,1043,410],"64":[1060,1061,413,1062,1063,413,1064,529,413,1065,425,413,1066,410],"65":[1067,1068,410],"66":[1069,1070,410],"67":[1071,1072,1073,413,1074,410],"68":[1075,1076,1077,1078,1079,1080,563,739,425,413,1081,410],"69":[1082,1083,1084,413,1085,410],"70":[1086,1087,410],"71":[1088,1089,410],"72":[1090,437,1091,413,439,413,580,413,1092,1093,413,1094,1095,563,1096,1097,413,1095,584,425,413,1098,410],"73":[1099,1100,1101,1102,1103,413,1104,1105,1106,413,1107,425,413,1108,413,845,1109,413,1110,413,1111,1112,413,1113,1114,413,1115,1116,413,1117,1118,413,1119,413,1120,846,1121,608,609,413,1122,413,1123,413,1045,1124,583,413,1125,1126,413,1127,584,425,413,882,1128,413,1129,1130,1131,1132,1133,413,1134,1135,413,1136,1137,1138,555,413,1139,584,413,1140,425,410],"74":[1141,959,413,1142,410],"75":[1143,1144,467,413,1145,467,413,1146,413,1147,467,413,1148,410],"76":[1149,1144,467,413,1145,467,413,459,1150,1151,1152,563,575,425,413,469,410],"77":[1153,1144,467,413,1145,467,413,459,1154,1155,563,575,425,413,469,410],"78":[1156,1157,975,413,1158,621,413,1159,975,413,1160,975,413,1161,975,413,1162,410],"79":[1163,1164,410],"80":[1165,1166,975,413,1158,975,413,1167,975,413,1159,975,413,1160,975,413,1161,975,413,1162,410],"81":[1168,1145,975,413,1169,975,413,1162,410],"82":[1170,1171,413,1172,410],"83":[1173,1174,410],"84":[1175,1144,467,413,1176,410],"85":[1177,1178,467,413,1179,410],"86":[1180,599,975,413,969,975,413,983,975,413,1162,410],"87":[1181,969,975,413,983,975,413,1162,410],"88":[1182,1183,975,413,599,975,413,1162,410],"89":[1184,1185,410],"90":[1186,1144,467,413,1145,467,413,459,1187,575,425,413,469,410],"91":[1188,1189,1190,413,1191,1192,413,1193,425,413,1162,410],"92":[1194,1195,410],"93":[1196,1171,413,1197,467,413,1198,467,413,469,410],"94":[1199,1166,975,413,1169,975,413,1162,410],"95":[1200,1201,467,413,1202,410],"96":[1203,1171,413,1197,467,413,1204,467,413,469,410],"97":[1205,1144,467,413,1145,467,413,1206,413,1207,1208,608,467,413,459,1209,575,425,413,469,410],"98":[1210,1144,467,413,1145,467,413,1092,1211,583,413,1212,413,1213,575,425,413,469,410],"99":[1214,1215,410],"100":[1216,1217,975,413,1218,975,413,1162,410],"101":[1219,1144,467,413,1146,413,1220,467,413,1006,1221,575,413,1222,413,1223,575,425,413,469,410],"102":[1224,1144,467,413,1225,413,1226,467,413,1227,467,413,1006,1211,583,413,1209,575,413,1228,575,413,1229,575,425,413,469,410],"103":[1230,1144,467,413,1145,467,413,1231,1232,1233,467,425,413,469,410],"104":[1234,431,413,1235,410],"105":[1236,1144,467,413,1237,413,1238,410],"106":[1239,1144,467,413,1240,467,413,1241,467,413,1242,1243,413,1244,467,413,413,1245,413,1246,410],"107":[1247,1144,467,413,1248,467,413,1249,413,1250,467,413,1251,413,1252,410],"108":[1253,1144,467,413,1254,410],"109":[1255,1144,467,413,1145,467,413,459,1256,575,425,413,469,410],"110":[1257,1201,467,413,1258,410],"111":[1259,1157,975,413,1158,975,413,1167,975,413,1162,410],"112":[1260,1261,410],"113":[1262,540,975,413,1263,975,413,1162,410],"114":[1264,1157,975,413,1158,975,413,1162,410],"115":[1265,1266,410],"116":[1267,1268,467,413,1269,467,413,1270,467,413,1171,413,1271,410],"117":[1272,1144,467,413,1248,467,413,1249,413,1273,467,413,1251,413,1252,410],"118":[1274,1263,467,413,1171,413,1275,410],"119":[1276,1201,467,413,1277,410],"120":[1278,1144,467,413,1145,467,413,459,1279,575,425,413,469,410],"121":[1280,1201,467,413,1176,410],"122":[1281,1144,467,413,1145,467,413,1282,413,1283,410],"123":[1284,1171,413,1285,410],"124":[1286,1287,975,413,1288,975,413,1162,410],"125":[1289,1169,975,413,1288,975,413,1162,410],"126":[1290,1291,410],"127":[1292,1144,467,413,1145,467,413,1225,413,1147,467,413,1006,1293,583,413,467,425,413,469,410],"128":[1294,1144,1295,413,1296,410],"129":[1297,1298,467,413,1299,410],"130":[1300,1301,410],"131":[1302,1144,467,413,1145,467,413,459,1303,575,425,413,469,410],"132":[1304,1178,467,413,1305,413,1306,1307,608,467,413,1231,1308,1233,467,425,413,469,410],"133":[1309,599,975,413,969,975,413,1162,410],"134":[1310,1144,467,413,1145,467,413,1311,467,413,1312,467,413,1313,467,413,469,410],"135":[1314,1315,975,413,1316,975,413,1162,410],"136":[1317,437,1318,413,1073,413,1319,410],"137":[1320,1321,410],"138":[1322,413,1323,410],"139":[1324,540,541,413,1325,425,413,1326,410],"140":[1327,413,413,1328,767,413,1329,1330,1331,413,675,555,413,1332,1331,413,675,555,413,1333,1334,1335,413,1095,584,413,1336,425,413,413,413,1337,413,1338,1339,1340,413,583,584,413,1341,413,1342,425,413,1343,1344,1345,1346,1347,1348,1349,1350,413,1351,1352,413,1353,608,1354,1355,413,842,584,425,413,413,413,1356,1357,1358,1359,1360,413,1361,1362,1363,503,425,413,1364,1365,413,1366,1367,503,425,413,413,413,1368,1369,1370,1371,413,1372,1373,413,1374,1357,413,1375,410],"141":[1376,1377,413,413,1378,413,821,1379,1380,413,675,555,413,1381,413,1382,584,413,1383,413,1384,1385,1386,413,1387,584,413,1388,1389,425,413,413,413,1390,767,413,1329,1379,1331,675,555,413,1391,413,1095,584,413,1392,1393,1394,413,1395,413,503,425,413,845,1396,846,1397,608,609,410],"142":[1398,1399,410],"143":[1400,1401,410],"144":[1402,1403,413,1231,1404,1233,1405,425,413,1406,1407,1408,608,1409,413,1410,1411,1412,1413,1414,1415,1416,1417,1418,1419,1420,1421,1422,1423,1424,413,845,1425,846,1426,1427,1428,413,1429,555,584,413,1430,608,609,410],"145":[1431,879,413,459,1432,413,1433,413,1001,425,413,416,410],"146":[1434,413,1145,467,413,1435,467,413,1436,467,413,1437,413,1438,410],"147":[1439,413,1145,467,413,1435,467,413,1436,467,413,1440,413,1438,410],"148":[1441,634,1073,413,1442,1443,1444,1445,413,1446,410],"149":[1447,1448,410],"150":[1449,413,1450,410],"151":[1451,1452,410],"152":[1453,904,413,1454,413,414,1455,413,416,410],"153":[1456,1457,413,414,1458,413,416,410],"154":[1459,498,413,1460,410],"155":[1461,1462,410],"156":[1463,410],"157":[1464,1465,410],"158":[1466,1467,413,1468,410],"159":[1469,908,413,1470,1471,583,413,1472,413,949,425,413,1473,413,416,410],"160":[1474,908,413,1470,1471,583,413,1472,413,949,425,413,416,410],"161":[1475,908,413,1473,413,1470,1471,583,413,1472,413,949,425,413,416,410],"162":[1476,1477,410],"163":[1478,1479,410],"164":[1480,1481,1482,413,1483,1484,529,413,1485,425,413,1486,609,413,1487,410],"165":[1488,1489,413,414,1490,413,416,410],"166":[1491,1492,1493,413,1494,1495,1496,413,1497,584,413,1498,425,413,634,1499,1500,413,1501,410],"167":[1502,1492,1493,413,1494,1495,1503,413,1504,584,413,1505,425,413,634,1499,1500,413,1506,410],"168":[1507,413,1508,410],"169":[1509,413,1481,1482,413,1510,1485,425,413,1511,410],"170":[1512,1513,1514,413,1515,413,414,1516,413,416,410],"171":[1517,1518,1519,413,1147,1520,413,1521,413,1522,410],"172":[1523,1524,621,413,1525,410],"173":[1526,1527,410],"174":[1528,1529,410],"175":[1530,1531,410],"176":[1532,1531,410],"177":[1533,1534,413,1535,413,1536,410],"178":[1537,437,1538,413,439,959,413,441,413,1539,1540,413,1541,413,1542,425,413,1543,410],"179":[1544,1545,413,1546,413,1006,1547,425,410],"180":[1548,1549,1550,413,1315,1551,1552,1553,413,1554,1135,413,1136,1555,759,555,584,608,609,413,1556,1557,1558,1559,1560,1561,413,1562,413,416,410],"181":[1563,437,598,413,1564,410],"182":[1565,433,1566,413,1057,609,413,1567,410],"183":[1568,1569,410],"184":[1570,540,1571,413,649,1572,413,1573,1574,413,1492,1575,413,416,410],"185":[1576,1577,413,1578,413,1579,413,1231,1580,1581,1582,413,1583,425,413,1584,413,1416,413,908,413,1585,1586,413,416,410],"186":[1587,1588,892,413,879,413,459,1589,583,413,1001,425,413,416,410],"187":[1590,433,1591,413,1592,1593,413,1594,413,1595,413,1596,410],"188":[1597,1598,410],"189":[1599,951,413,1600,1601,425,413,416,410],"190":[1602,599,1603,413,1604,602,766,413,1329,606,1605,788,554,584,413,764,608,609,410],"191":[1606,1607,1608,413,1609,413,1607,1610,413,1611,1612,1613,1614,1615,1616,413,1617,1618,1619,1620,1621,1622,1623,1624,1625,413,1626,410],"192":[1627,413,1628,1629,1630,1631,1632,1633,413,1634,425,413,1635,413,1636,1637,413,664,665,413,1634,425,413,667,413,1638,1639,1640,413,1641,1642,1643,413,1644,1645,584,413,1646,1647,1648,1649,1650,1651,740,413,746,425,413,1652,1653,1654,1640,413,1655,1656,1657,1658,413,1659,1648,1649,1660,1651,740,413,746,425,413,1661,1662,529,413,1663,413,1664,1665,584,425,413,1666,1667,413,1668,529,413,1669,1670,413,1671,1672,413,1673,1674,425,413,1675,1676,1677,1678,1679,413,1680,1681,608,1682,413,1683,413,1684,1685,1686,1687,413,1688,1689,1690,563,1691,413,1692,584,413,1693,413,1694,608,609,413,1695,1696,1697,1698,1699,1700,413,1701,413,1684,1702,413,1703,425,413,1704,1705,413,1703,425,413,1706,1703,413,1707,1703,413,1708,1703,413,1709,1710,1711,413,1712,1713,413,1714,413,1715,410],"193":[1716,1717,413,1718,1719,413,1720,1721,413,1722,1723,413,1724,1725,413,1726,1727,413,1709,1728,1729,425,413,1730,413,1731,410],"194":[1732,413,580,413,1733,1734,1735,413,1736,413,1718,1737,1738,425,413,1720,1737,1739,425,413,1722,1737,1740,425,413,1724,1737,1741,425,413,1726,1737,1742,425,413,1743,1744,413,1098,410],"195":[1745,1072,413,1746,1579,1747,413,1748,1749,1750,425,413,1751,1752,413,1753,1750,425,413,1754,413,1755,413,1756,1757,425,413,1758,1759,413,1760,410],"196":[1761,599,1762,413,1763,413,1764,413,764,602,1765,608,609,410],"197":[1766,1767,410],"198":[1768,437,1769,413,446,1770,1771,413,1772,1773,1774,413,1775,584,413,1776,1777,1778,1779,1780,456,413,457,425,413,416,410],"199":[1781,1782,410],"200":[1783,1784,1785,413,1786,413,1787,1788,413,1789,413,1790,766,1791,413,1792,1793,413,1794,1795,413,1796,1797,788,1798,413,1796,555,584,413,764,425,413,1799,1800,1801,413,1802,413,1803,1804,413,1805,759,413,899,584,413,764,425,413,1806,413,1807,410],"201":[1808,433,1566,413,435,410],"202":[1809,437,1810,413,439,959,413,1539,1811,413,1812,413,1542,425,413,1813,410],"203":[1814,879,1004,413,448,1815,1816,413,1817,1001,425,413,416,410],"204":[1818,1819,413,1820,413,1821,413,1231,1551,1581,1822,413,1583,425,413,1823,413,416,410],"205":[1824,1572,413,1825,413,625,1826,1827,413,1828,630,413,1757,425,410],"206":[1829,413,1830,410],"207":[1831,441,413,1832,410],"208":[1833,1834,413,1835,1836,413,1837,425,413,1500,1838,1834,413,1839,413,1840,413,1841,413,1842,413,416,410],"209":[1843,969,1844,1845,563,1846,413,1847,584,603,1848,1849,584,413,1844,1850,413,1851,413,971,767,413,604,1852,1853,1854,413,791,584,413,1855,413,793,1856,413,1857,584,413,764,425,410],"210":[1858,1859,410],"211":[1860,413,437,1861,413,1145,1862,413,1863,410],"212":[1864,1865,410],"213":[1866,540,1867,413,1868,410],"214":[1869,1870,1871,413,1872,413,1873,410],"215":[1874,951,413,1875,767,413,1876,1877,1331,413,675,555,413,1878,413,1095,584,413,1879,425,413,416,410],"216":[1880,413,1881,1882,413,1883,425,413,1884,410],"217":[1885,1886,1882,413,1887,425,413,1884,410],"218":[1888,1889,413,414,1890,413,416,410],"219":[1891,1076,1077,1078,1079,1080,563,739,425,413,1892,410],"220":[1893,1588,1073,413,879,413,459,1894,413,1895,425,413,416,410],"221":[1896,1897,413,1898,410],"222":[1899,1004,413,1005,413,615,742,1900,413,424,425,410],"223":[1901,1902,410],"224":[1903,433,1904,413,1329,1905,413,1906,1907,413,1908,584,413,1909,425,413,459,1910,1911,413,1912,425,410],"225":[1913,1914,413,1005,413,1915,1916,413,424,425,410],"226":[1917,1914,413,1005,413,1915,1918,1919,413,1920,1921,413,1922,1923,675,555,413,1924,584,413,1925,425,410],"227":[1926,1927,766,413,1329,1928,413,1929,1930,413,1931,551,413,1932,413,1933,555,413,1934,584,413,764,425,413,1935,766,767,413,1329,1936,1937,413,1938,1939,1331,788,1940,584,413,1904,413,793,1941,584,413,793,1942,1943,413,1796,675,1939,1944,413,1796,788,1940,584,413,764,425,413,1945,1946,1947,413,1948,1949,1950,413,1951,413,1952,413,1953,425,413,1954,413,1955,1956,1957,413,1958,1959,584,413,1960,425,413,1961,1962,413,580,1963,413,1964,413,1965,413,1955,1966,413,1967,425,413,1968,413,1736,1964,413,1969,413,1970,1971,413,1972,1973,413,1974,584,413,1975,413,593,425,413,1964,413,1098,410],"228":[1976,1572,413,1977,1978,413,1979,425,413,1980,1981,413,1979,425,413,1982,1983,769,413,1984,425,413,1985,1986,769,413,1987,425,413,1988,1989,769,413,1990,425,413,1991,1992,769,413,1984,425,413,1993,1994,413,1995,410],"229":[1996,1997,413,1998,410],"230":[1999,2000,413,2001,2002,413,2003,2004,2005,413,2006,425,413,2007,2008,413,2009,410],"231":[2010,437,2011,413,439,413,2012,2013,413,2014,410],"232":[2015,2016,413,2017,410],"233":[2018,540,647,413,2019,425,413,2020,2021,413,649,413,650,651,2022,2023,2024,655,2025,413,2026,764,413,2027,2028,413,2029,410],"234":[2030,437,2031,413,2032,413,2033,2013,413,2034,410],"235":[2035,2036,410],"236":[2037,540,541,413,2038,413,2039,2040,2041,413,767,413,2042,413,2043,1391,2044,413,2045,2046,413,1938,788,2047,2048,413,2049,1938,555,584,413,2050,413,2051,2052,2040,2053,413,767,413,2054,413,2055,2056,1391,2057,413,2058,2059,413,2045,2060,413,1938,788,2061,2048,413,2049,1938,555,584,413,2050,413,2051,2062,2063,2064,2065,608,2066,410],"237":[2067,437,2068,413,439,413,2069,2070,413,1147,1520,413,2071,2072,2073,413,2074,2075,413,2076,630,413,2077,425,413,2078,2079,413,2080,413,2081,410],"238":[2082,2083,410],"239":[2084,2085,413,2086,413,416,410],"240":[2087,2088,410],"241":[2089,2088,410],"242":[2090,2091,410],"243":[2092,2093,413,2094,413,416,410],"244":[2095,2096,410],"245":[2097,879,413,1470,2098,2099,2100,413,700,425,413,416,410],"246":[2101,2102,413,2103,413,416,410],"247":[2104,2105,410],"248":[2106,2107,2108,413,2109,2110,413,2111,2112,2113,552,413,1138,555,584,425,413,1709,2114,2115,767,413,1329,2116,1932,413,1938,788,1331,584,413,1392,413,2117,413,2118,2119,425,410],"249":[2120,2121,410],"250":[2122,2123,410],"251":[2124,2125,410],"252":[2126,2127,410],"253":[2128,845,2129,2130,413,2131,413,2132,413,764,846,2133,608,609,410],"254":[2134,599,2135,2136,413,2051,425,413,1588,413,2137,1013,2138,413,448,2139,2140,413,2141,628,563,630,425,413,879,413,1006,2142,802,583,584,413,894,802,583,584,413,2143,413,2144,583,413,1001,425,413,416,410],"255":[2145,599,2146,413,2135,2147,413,2051,425,413,1588,439,413,879,413,459,2148,413,1895,425,413,416,410],"256":[2149,599,2135,2150,413,2051,425,413,1588,413,879,413,459,1093,413,1094,2151,563,2152,413,2151,584,425,413,416,410],"257":[2153,599,600,413,2135,2154,413,2051,425,413,1588,1073,413,879,413,459,2155,413,1895,425,413,416,410],"258":[2156,2157,2158,2159,2160,2161,2162,2163,2164,2165,2166,2167,2168,2169,2170,2171,2172,2173,2174,2175,2176,2177,2178,2179,2180,2181,2182,2183,2184,2185,2186,2187,2188,2189,2190,2191,2192,413,416,410],"259":[2193,437,598,413,2194,410],"260":[2195,1160,2196,413,1158,2197,413,1167,2198,413,1043,410],"261":[2199,2200,2201,2202,413,416,410],"262":[2203,845,2204,846,2205,608,609,410],"263":[2206,2207,2208,2209,2210,2211,2212,2213,2214,2215,2216,413,2217,2218,413,2219,2220,413,2221,425,413,2222,410],"264":[2223,625,1757,425,410],"265":[2224,2225,413,414,2226,413,416,410],"266":[2227,879,413,2228,2229,2230,2231,413,2232,583,413,2233,413,2234,425,413,416,410],"267":[2235,879,413,1709,2236,2237,2238,413,2239,2240,413,2241,2242,413,416,410],"268":[2243,2244,410],"269":[2245,413,413,2246,2247,413,2248,425,413,413,413,2249,2250,413,2251,413,2252,413,2253,2254,413,413,413,2255,413,2256,2257,2258,2259,413,2260,583,413,2261,2262,2263,2264,2265,2266,2267,2268,413,2269,2270,2271,2272,2273,563,739,413,2274,425,413,413,413,2275,410],"270":[2276,2249,413,2277,413,2278,413,2251,413,2279,2280,413,416,410],"271":[2281,1821,2282,413,2283,413,1231,2284,1581,2285,1583,425,413,2286,413,416,410],"272":[2287,2288,410],"273":[2289,2290,410],"274":[2291,879,413,2292,2229,413,2293,802,425,413,416,410],"275":[2294,2295,2296,413,2297,413,879,413,2298,2299,802,2300,2301,554,413,2302,413,2303,563,739,425,413,416,410],"276":[2304,2305,2306,413,2307,410],"277":[2308,2295,2309,413,2297,413,879,2310,2311,413,2312,413,1006,2313,413,2314,2151,413,583,584,413,2315,2316,1796,584,425,413,416,410],"278":[2317,2318,2319,410],"279":[2320,611,413,2292,2321,413,2322,425,413,416,410],"280":[2323,2324,410],"281":[2325,634,413,2326,871,413,416,410],"282":[2327,2328,413,2329,410],"283":[2330,2331,2332,413,2333,529,425,413,2334,413,2335,1362,413,2336,413,2337,410],"284":[2338,2339,413,2340,410],"285":[2341,2342,410],"286":[2343,2331,2344,2345,2346,413,2347,413,529,584,425,413,2348,2305,2349,413,2350,410],"287":[2351,2352,2353,413,416,410],"288":[2354,2348,2305,2349,413,2355,410],"289":[2356,2357,2358,413,2359,2360,1747,1746,413,2361,2362,413,2363,2364,2365,2366,563,739,425,413,2367,2368,2369,413,1942,2370,413,2371,584,413,2372,2373,413,2374,2375,425,413,2376,2377,413,2378,425,413,2379,1750,425,413,2380,1753,425,413,2381,2382,2383,413,2384,413,625,2385,630,413,2386,2387,413,1757,425,413,2388,2389,413,2390,2391,413,1760,410],"290":[2392,2393,2394,2395,413,2396,413,2397,413,2398,2399,413,2400,2401,2402,584,413,2403,413,2404,425,413,2405,2406,2407,2408,2409,2410,2411,2412,2413,2414,413,2415,2416,2417,2418,2419,413,2420,413,413,413,2421,413,2286,413,413,413,2249,2250,413,2422,410],"291":[2423,2424,2425,413,2426,425,413,2427,413,2428,2429,2430,2431,2432,2433,413,2434,410],"292":[2435,2436,872,2437,413,2438,2439,413,2279,2437,2440,413,416,410],"293":[2441,2442,413,2443,410],"294":[2444,2445,2446,2447,425,413,1043,410],"295":[2448,2445,2449,2447,425,413,1043,410],"296":[2450,2451,467,413,2452,410],"297":[2453,2454,975,413,2455,975,413,1162,410],"298":[2456,1144,467,413,2457,2458,2459,413,2460,467,413,2461,410],"299":[2462,1144,467,413,2457,2458,2459,413,2460,467,413,2463,410],"300":[2464,1144,467,413,2457,2458,2459,413,2465,410],"301":[2466,2451,467,413,2467,410],"302":[2468,2331,2469,413,2394,2470,2471,575,584,413,2472,413,2473,2474,413,2475,2476,2477,2478,413,2479,555,584,413,2480,413,975,2481,2394,2482,2471,575,584,413,975,608,467,410],"303":[2483,2484,2485,2486,413,2487,2488,413,2489,413,2490,413,2491,2492,2493,2494,2495,413,2496,413,2497,413,2498,413,2497,413,2499,413,2497,413,2500,2501,2502,2503,413,2504,413,2505,413,2506,413,2507,413,2506,413,2508,413,2506,2509,2510,2511,2512,413,2513,2514,413,2515,2516,413,2517,2518,413,2519,413,2520,413,2521,2522,413,413,413,413,2523,2524,410],"304":[2525,2526,410],"305":[2527,2528,2529,2530,2531,2532,413,2533,2534,413,2535,529,413,2536,413,746,413,2537,2538,425,413,2539,2377,413,2540,425,413,2541,2377,413,2542,425,413,2543,2544,2545,563,739,413,2546,2547,425,413,2548,2549,2550,413,2551,413,2552,2553,425,413,2554,413,2555,2556,2557,413,2558,2559,413,2560,2561,2562,413,2563,1757,425,413,2564,2565,413,2566,2567,413,2568,413,2569,413,2570,410],"306":[2571,2572,2573,2574,2575,413,2576,413,416,410],"307":[2577,2578,2579,2580,2581,413,2582,413,2583,2584,2585,413,2586,584,413,2587,413,2588,425,413,580,413,2589,2590,413,2583,2591,413,2592,413,2593,410],"308":[2594,2595,2596,413,2597,739,413,2598,425,413,2599,410],"309":[2600,2601,410],"310":[2602,2603,503,413,2604,2605,413,2606,2607,2608,2609,2608,425,413,2610,2611,413,2612,425,413,2613,2614,2615,413,2616,410],"311":[2617,2618,2528,2529,2619,2620,2621,413,2622,2623,2624,413,2625,413,2626,529,413,2627,741,2628,413,746,413,2629,425,413,2539,2377,413,2630,425,413,2541,2377,413,2631,425,413,2543,2544,2545,563,739,413,2546,2547,425,413,2632,413,2552,2553,425,413,2554,413,2555,2556,2557,413,2558,2559,413,2560,2561,2562,413,2563,1757,425,413,2564,2633,413,2634,2635,413,2568,413,2636,413,2637,410],"312":[2638,879,2639,2138,413,2640,413,1006,2641,678,413,2642,2643,2644,2645,2646,413,700,425,413,416,410],"313":[2647,2648,2649,2650,2651,2652,2566,2653,2567,2654,413,2655,413,2570,410],"314":[2656,2648,2649,2650,2657,413,2658,410],"315":[2659,2660,2549,2661,2662,413,2663,413,416,410],"316":[2664,2665,413,2666,410],"317":[2667,2668,410],"318":[2669,2670,410],"319":[2671,2672,413,2673,410],"320":[2674,2675,410],"321":[2676,540,2677,413,634,413,2678,2679,413,2680,413,2681,2682,2683,413,2335,1362,413,2684,2685,413,625,2686,2687,2688,2689,413,2690,2691,413,2692,413,2693,556,425,410],"322":[2694,2695,413,2696,410],"323":[2697,2698,2699,2700,2701,413,2702,413,2703,425,413,2704,413,2705,413,2706,410],"324":[2707,2708,410],"325":[2709,2710,2711,413,2712,2713,413,2714,413,2715,2716,2717,2718,608,609,410],"326":[2719,2720,2721,413,2722,2723,413,2724,2725,413,746,425,413,416,410],"327":[2726,2727,2728,2729,2730,2731,2732,413,416,410],"328":[2733,2734,2735,410],"329":[2736,2737,413,2738,410],"330":[2739,2740,410],"331":[2741,2742,413,2743,410],"332":[2744,2745,2746,2747,608,2746,410],"333":[2748,2749,410],"334":[2750,2751,2752,413,2753,410],"335":[2754,2755,413,2756,2757,413,2758,410],"336":[2759,2760,410],"337":[2761,2762,2763,413,2764,2765,410],"338":[2766,1350,2767,2768,413,2769,2770,2771,2772,2773,2774,2775,2776,2777,2778,2779,413,2780,410],"339":[2781,2782,2783,413,2784,413,2785,413,2786,2787,2788,413,2789,413,2790,413,2251,413,2791,413,2792,413,416,410],"340":[2793,2794,413,2795,413,2796,413,2797,2798,2799,413,2800,410],"341":[2801,2802,413,2803,413,2804,2805,413,2806,413,2807,425,413,416,410],"342":[2808,2802,2794,413,2809,413,2800,410],"343":[2810,2811,2794,413,2812,413,2800,410],"344":[2813,413,879,2814,413,2815,2816,2817,413,2818,2819,413,764,425,413,2820,413,2821,413,2822,413,2823,2824,2825,413,2826,2827,413,416,410],"345":[2828,2794,413,2829,2830,2831,413,2800,410],"346":[2832,2802,2794,413,2833,413,2800,410],"347":[2834,2802,413,879,2835,2825,2836,413,2826,2827,413,416,410],"348":[2837,2838,410],"349":[2839,2840,410],"350":[2841,2842,410],"351":[2843,879,2844,2830,2845,2830,2846,2825,2836,413,2826,2827,413,416,410],"352":[2847,2848,410],"353":[2849,2850,410],"354":[2851,2852,410],"355":[2853,2820,2794,413,2854,413,2855,413,2856,413,1043,410],"356":[2857,2820,2794,413,2858,413,2859,413,2860,413,2800,410],"357":[2861,2862,2794,413,2863,410],"358":[2864,2794,413,2865,413,2815,2866,608,2867,413,2868,425,413,2800,410],"359":[2869,2811,2794,413,2812,2870,413,2800,410],"360":[2871,2794,413,2844,2872,413,2800,410],"361":[2873,2802,413,879,2874,2825,2814,413,2826,2827,413,416,410],"362":[2875,2862,2794,413,2876,410],"363":[2877,879,2844,2830,2878,2825,2836,413,2826,2827,413,416,410],"364":[2879,2794,413,2815,2880,413,2881,425,413,2844,2882,413,2800,410],"365":[2883,879,413,2884,2885,413,2886,413,700,425,413,2887,2888,413,2889,2890,413,2891,2892,413,416,410],"366":[2893,879,413,2884,2885,413,2886,413,700,425,413,2894,2895,2896,413,2897,2898,413,2899,2900,425,413,416,410],"367":[2901,2794,413,2821,413,2822,413,2902,2903,2904,2905,413,2800,410],"368":[2906,879,2844,2907,2830,2846,2825,2836,413,2826,2827,413,416,410],"369":[2908,879,2844,2830,2909,2825,2836,413,2826,2827,413,416,410],"370":[2910,2911,2912,1078,413,2913,2914,413,2915,413,2916,2917,413,2918,2919,413,2920,584,413,609,425,413,879,2921,413,2922,413,2923,2924,413,2925,2926,413,2927,583,413,2928,2929,413,2930,425,413,2931,2932,2933,2905,2825,2814,413,2826,2827,413,416,410],"371":[2934,879,413,423,2935,413,2936,425,413,416,410],"372":[2937,2938,2939,413,2940,503,413,2941,2942,2943,563,583,413,2944,413,2945,529,425,413,2946,504,2947,413,511,410],"373":[2948,2949,2950,413,2951,413,2952,413,2953,413,2954,2955,975,425,413,2956,413,1162,410],"374":[2957,2958,766,413,2959,2960,2961,413,2962,2963,413,675,555,413,2964,413,2965,584,413,764,425,413,2966,2967,2968,2969,413,2970,413,2971,2972,2973,413,2974,555,584,413,2975,2976,2977,2978,2979,2980,2981,413,2982,413,2983,2984,413,2985,2986,2987,413,675,555,413,2988,413,2989,413,2915,413,2990,2991,413,2992,2987,413,675,555,413,2993,413,2994,2995,2996,413,2997,2998,2999,3000,3001,413,3002,584,413,3003,413,3004,413,764,425,413,3005,3006,3007,413,3008,3009,3010,3011,413,3012,3013,413,551,552,3014,3015,413,675,555,413,3016,584,413,3017,425,413,3018,3019,578,413,3020,578,413,467,425,413,3021,410],"375":[3022,3023,3024,3025,413,3026,413,3027,3028,413,1231,3029,1581,3030,413,1583,425,413,3031,413,3032,410],"376":[3033,3034,413,3035,410],"377":[3036,1072,413,3037,766,3038,3039,792,3040,413,3041,3042,413,3043,3044,3045,1939,3046,413,3047,788,1940,584,413,3048,3049,3050,3051,3052,3053,413,700,413,3054,3055,413,3056,3057,555,413,3058,584,413,3059,3060,3061,413,3062,584,413,764,425,413,3063,742,3064,3065,413,745,413,3066,3067,741,413,746,425,410],"378":[3068,3069,3070,3071,3072,413,3073,3074,413,3075,3076,3077,788,759,584,413,2979,413,3078,3079,413,3080,584,413,3081,3082,3083,413,3084,425,413,879,3085,413,3086,3087,413,700,425,413,416,410],"379":[3088,2958,766,413,2959,3089,2961,413,2962,2963,413,675,555,413,3090,413,3091,584,413,764,425,413,3092,766,3093,413,3094,3095,2979,3096,3097,413,3098,413,3099,3100,3101,3096,3102,413,3103,413,3094,3104,2979,3096,3105,413,3106,413,3094,3107,2979,3096,3108,413,3109,413,764,425,413,3110,410],"380":[3111,3112,413,3113,3114,413,3115,556,413,3116,413,3117,413,764,425,413,580,413,3118,3119,425,413,830,3120,3121,413,3118,3122,3050,413,3123,3124,413,3125,413,3126,3127,425,413,3128,413,3129,3130,3131,3132,3133,413,1384,3134,413,3135,584,413,3136,425,413,3137,3138,413,3139,413,3140,3141,3142,413,3143,413,3144,3145,413,3146,413,3147,3148,413,3149,413,3150,3151,413,3152,413,3153,3154,413,3155,413,3156,3157,3158,413,3159,413,3160,413,1098,410],"381":[3161,3162,3163,3164,3165,3166,3167,3168,413,3169,3170,413,3171,3172,563,3173,413,3174,3170,3175,413,3176,413,3177,584,413,3178,3179,3180,3181,3182,413,3183,413,3184,413,3185,413,3186,413,3187,413,3188,425,413,3189,3190,529,413,3191,3192,413,3193,425,413,3194,766,413,1329,3195,413,2303,584,413,764,425,413,3196,766,3197,3198,3199,413,3200,3201,413,2151,584,413,3202,413,764,425,413,3203,3204,413,3205,556,413,3206,413,3205,556,413,609,425,413,3207,3208,413,3209,3210,413,3211,583,413,3212,413,3213,425,410],"382":[3214,3215,413,3216,3217,3218,413,3219,584,413,3220,3221,413,3222,425,413,3223,3224,3225,3226,834,3227,3228,3229,3230,413,3231,410],"383":[3232,3233,975,413,3234,3235,575,425,413,469,410],"384":[3236,3237,467,413,3238,3239,413,3240,975,413,3241,413,3242,410],"385":[3243,879,3244,3245,3246,3247,3248,3249,413,3250,3251,3252,3253,3254,3255,413,700,425,413,416,410],"386":[3256,2949,3257,413,2951,413,3258,413,413,3259,3260,3261,3262,3263,3264,413,3265,413,1631,413,3266,413,3267,3268,1651,740,413,746,413,3269,529,413,3270,3271,3272,3273,3274,3275,3276,3067,413,746,413,3277,3274,3278,3067,413,746,413,413,413,3279,3280,413,3281,413,3282,3283,3284,413,3285,759,413,3286,584,413,3287,3288,3289,413,3290,413,503,425,413,1231,3291,1581,467,425,413,469,410],"387":[3292,413,3293,574,575,413,3294,578,413,3295,578,413,467,425,413,3296,413,3297,3298,413,3299,3300,3301,413,556,584,413,3302,413,3303,3304,413,3305,413,764,425,413,3306,3307,413,416,410],"388":[3308,2958,766,3309,413,3310,3311,3312,413,2475,3313,3314,3315,413,3316,555,413,2303,584,413,764,425,413,3317,766,3318,3093,3319,3320,413,3321,3322,3323,413,3324,3325,3326,413,3327,3328,2999,3329,413,3330,413,3331,3332,2999,3333,413,3334,413,3335,3336,2999,3337,413,3338,413,3339,3340,3341,3342,3343,413,3344,413,3345,555,413,556,3346,3327,3347,2999,3329,413,3330,413,3331,3332,2999,3333,413,3334,413,3335,3348,3349,3337,413,3338,413,3339,3340,3341,3342,3343,413,3344,413,3345,555,413,556,584,413,3101,2981,413,2818,413,764,425,413,3350,3351,578,413,3352,578,413,467,425,413,3353,3354,578,413,3355,578,413,3356,578,413,467,425,413,3110,410],"389":[3357,3358,834,413,3359,3360,3361,413,3362,425,413,844,413,3363,3364,3365,3366,857,858,859,413,860,425,413,3367,413,3368,410],"390":[3369,879,413,2941,3370,3371,3372,3373,413,3374,583,413,413,413,3375,413,3376,3377,675,584,413,2979,3378,413,2818,425,413,416,410],"391":[3379,3380,3381,3382,675,413,3383,3384,413,3385,2974,413,3386,413,3387,584,413,3388,3389,413,3390,556,413,3391,413,3392,425,413,3393,3394,3395,3396,413,1231,3397,1581,3398,413,1583,425,410],"392":[3399,3400,3401,413,3402,3403,879,413,3404,3405,3406,413,3407,3408,583,584,413,3409,3410,3411,413,3412,425,413,875,871,413,3413,413,416,410],"393":[3414,1159,621,413,1160,621,413,1157,621,413,1158,621,413,1167,3415,413,3416,413,3417,3418,413,3419,3420,413,3421,425,413,2783,3422,413,511,410],"394":[3423,1435,3424,3425,3426,3427,3428,3429,3430,3431,563,3432,3433,3434,3435,3436,413,3437,584,425,413,3438,410],"395":[3439,1897,413,2107,3440,3441,3442,3443,563,3444,425,413,3445,413,3446,3447,413,3448,425,413,3449,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,410],"396":[3450,3451,3452,3453,413,3454,410],"397":[3455,3451,3456,3457,3458,413,3459,410],"398":[3460,3461,413,3462,410],"399":[3463,3464,413,3465,410],"400":[3466,3467,410],"401":[3468,3464,413,3469,410],"402":[3470,3471,413,3472,410],"403":[3473,3474,3475,413,3476,410],"404":[3477,3478,413,3479,413,3480,410],"405":[3481,3482,413,3483,410],"406":[3484,3485,413,1884,410],"407":[3486,3487,574,575,413,3488,3489,413,3490,425,413,2710,3491,413,2815,3492,503,425,413,3493,413,3494,3492,503,425,413,3495,413,3496,3497,413,3498,413,2785,413,3499,413,3500,413,3501,503,413,2792,413,3502,503,413,3503,3504,3505,3506,3507,3508,3509,413,3510,2579,2581,413,3511,3512,413,3513,425,413,2583,3514,3515,413,3516,584,425,413,3517,413,3518,413,882,3519,3520,3521,3522,3523,3524,3525,413,3526,425,410]}
const fns={abs,add,and,angle,append,arr,asc,at,back,base36_decode,base36_encode,between,brace,bracket,byte_size,capture,check_arg,check_arity,check,chr,clear,clone,cmp,collate,concat,contain,count,crc,cut_l,cut_r,date_decode,date_str,dbg_backtrace,dbg_callstack,dbg_here,dbg_origin_xs,dbg_origin,dbg_source_map,dbg_source,dec,dedup,deinit_common,delimit,different,div,dom_entities,dom_escape,dom_unescape,drop,dump,dup,eq,every,explode,extract,fallback_error,filter,find,flower,fn_args,fn_match,fn_select,front,get,gn_run,gt,gte,has,head,iif,implode,inc,indent,init_common,insert,is_access,is_alnum,is_alpha,is_arg,is_arr,is_atom,is_blank,is_bool,is_browser,is_char,is_comment,is_composite,is_container,is_cool,is_def,is_digit,is_empty,is_false,is_fn,is_fragment,is_full,is_gn,is_identifier,is_indented,is_int,is_ip,is_ip4,is_ip6,is_json,is_last,is_lisp,is_lit_char,is_lit,is_ln,is_lower,is_many,is_name,is_node,is_none,is_noun,is_null,is_num,is_numeric,is_obj,is_pair,is_punct,is_single,is_space,is_str,is_token,is_trivia,is_true,is_tuple,is_txt,is_uint,is_undef,is_upper,is_url,is_vec,is_word,is_xn,join,json_decode,json_dump,json_encode,log_append,log,lt,lte,main,map,match_l,match_r,match,max,merge,min,mod,mul,mute,neq,nop,obj_keys,obj_length,obj_push,obj_remove,obj_unshift,obj_vals,obj,on,or,pad_l,pad_r,paren,partial,path_concat,path_file,path_fix,path_join,path_split,path_strip,path_unfix,path_up,pop,prepend,profile,push,put,quote,random,record,reject,remove,repeat,replace_rec,replace,report_html,report_init,report_log,report_render,resolve,reverse,round,salt,same,scan,set,shift,shuffle,silent,sleep,slice_l,slice_r,slice,sort,space,split,squote,stop,str_indent,str_unindent,strip_l,strip_r,sub,tail,tbl_column,tbl_columns,tbl_index,tbl_init,tbl_pad_l,tbl_remove_column,tbl_rename_column,tbl_render,time_delay,time_get,time_hn,time_interval,time_now,time_str,time_timeout,to_base36,to_dump,to_fixed,to_i,to_int,to_json,to_lit,to_lower,to_num,to_str,to_tbl,to_uint,to_upper,trace,trim_l,trim_r,trim,trunc,tty_width,txt_compact,txt_cut,txt_indent,txt_prepend,unaccent,unshift,unwrap,url_beautify,url_get,url_parse,wait,xor,app_list,argv_context,beep,deinit_node,digest,dir_call,dir_change,dir_current,dir_find,dir_load,dir_make,dir_read,dir_reset,dir_size,file_append,file_load,file_read,file_save,file_size,file_write,fs_copy,fs_modified,fs_remove,http_get,init_node,inspect,ip_host,ip_list,ip_v4,ip_v6,is_batch,is_color,is_dir,is_file,is_fs,is_interactive,is_readable,mail,open,os_capture,os_detach,os_execute,os_home,os_host,os_log,os_prompt,os_ps,os_run,os_shell,os_system,os_user,path_base,path_dir,path_ext,path_real,path_tmp,report_mail,sigint,ssh_execute,ssh_pass,ssh_system,app_token,init_shell,is_local,is_remote,is_root,mnt_clean,mnt_unmount,sudo_append,sudo_read,sudo_remove,sudo_save,app_home,app_make,ast_assign,ast_begin,ast_brk,ast_call,ast_catch,ast_check,ast_cont,ast_else,ast_elseif,ast_fn,ast_forin,ast_fornum,ast_forof,ast_gn,ast_if,ast_include,ast_inline,ast_let,ast_ret,ast_run,ast_throw,ast_try,ast_var,ast_while,ast_yield,call_ast_block_top,call_ast_block,call_ast_declare,call_ast_for,call_ast_if,call_ast_xn,cpl_block,cpl_check_fn,cpl_check_syntax,cpl_check,cpl_compile,cpl_deinit,cpl_dump,cpl_fold,cpl_for,cpl_generate,cpl_include,cpl_init,cpl_is_call,cpl_is_leaf,cpl_load,cpl_log_error,cpl_scan,cpl_scope,cpl_source_map,cpl_tokenize,cpl_translate,cpl_uncomment,call_expr_arg,call_expr_right,call_expr_rvalue,expr_arr,expr_call,expr_iif,expr_in,expr_inline,expr_instanceof,expr_new,expr_not,expr_obj,expr_run,expr_value,init}
main()