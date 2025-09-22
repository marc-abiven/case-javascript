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
   return is_fn(r)?r():r
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
   return is_fn(r)?r():r
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
 const _=is_fn(y)?y():y
 {
  const _a=_
  {
   const _=is_fn(_a)?_a():_a
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
        push(x,v)
       }
      }
     }
    }
   }
  }
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
     return is_fn(r)?r():r
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
   const _=is_fn(x)?x():x
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
    return is_fn(r)?r():r
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
  return is_fn(o.output)?o.output():o.output
 }
}
function char_escape(x)
{
 check_arg(is_char,x,"x","char")
 check_arity("same",arguments.length,1)
 const _=json_encode(x)
 {
  const r=_
  {
   const _=strip_l(r,"\"")
   {
    const r=_
    {
     const _=strip_r(r,"\"")
     {
      const r=_
      return is_fn(r)?r():r
     }
    }
   }
  }
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
       const _=get_type(arg)
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
                {
                 const _=concat(message,".")
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
function check(is,...args)
{
 if(is_true(is))
 {
  if(is_empty(args))
   return
 }
 else if(is_fn(is))
 {
  const _=is(...args)
  {
   const b=_
   {
    if(is_true(b))
     return
    const _=is_fn(is.name)?is.name():is.name
    {
     const name=_
     {
      if(match_l(name,"is_"))
      {
       const _=front(args)
       {
        const arg=_
        {
         const _=strip_l(name,"is_")
         {
          const name=_
          {
           const _=to_lit(name)
           {
            const s_name=_
            {
             const _=get_type(arg)
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
                     const _=space("Expecting a value of type",s_name,s_given)
                     {
                      const message=_
                      {
                       const _=concat(message,".")
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
       }
      }
      else
      {
       const _=to_lit(name)
       {
        const s_name=_
        {
         const _=space("Check failed calling",s_name)
         {
          const message=_
          {
           const _=concat(message,".")
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
       const _=is_fn(x)?x():x
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
        return is_fn(r)?r():r
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
       const _=is_fn(x)?x():x
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
        return is_fn(r)?r():r
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
 if(same(x,y))
  return 0
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
         const _=cmp(xval,yval)
         {
          const n=_
          {
           if(different(n,0))
            return is_fn(n)?n():n
          }
         }
        }
       }
      }
     }
    }
    return cmp(x.length,y.length)
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
                 const _=cmp(xkey,ykey)
                 {
                  const n=_
                  {
                   if(different(n,0))
                    return is_fn(n)?n():n
                   const _=at(xvals,i)
                   {
                    const xval=_
                    {
                     const _=at(yvals,i)
                     {
                      const yval=_
                      {
                       const _=cmp(xval,yval)
                       {
                        const n=_
                        {
                         if(different(n,0))
                          return is_fn(n)?n():n
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
            return cmp(xkeys.length,ykeys.length)
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
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
   const _=is_fn(x)?x():x
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
  const _=is_fn(x)?x():x
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
   const _=is_fn(x)?x():x
   {
    for(const v of _)
    {
     if(same(v,y))
     {
      r=inc(r)
     }
    }
    return is_fn(r)?r():r
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
     const _=is_fn(a)?a():a
     {
      const _a=_
      {
       const _=is_fn(_a)?_a():_a
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
             const _=is_fn(s)?s():s
             {
              const _a=_
              {
               const _=is_fn(_a)?_a():_a
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
        return is_fn(r)?r():r
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
  return is_fn(x)?x():x
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
          return is_fn(r)?r():r
         }
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
  return is_fn(x)?x():x
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
            return is_fn(r)?r():r
           }
          }
         }
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
   const _=is_fn(r.getTime)?r.getTime():r.getTime
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
        return is_fn(r)?r():r
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
  const _=is_fn(time_get)?time_get():time_get
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
     const _=is_fn(o.getFullYear)?o.getFullYear():o.getFullYear
     {
      const y=_
      {
       const _=is_fn(o.getMonth)?o.getMonth():o.getMonth
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
             const _=is_fn(o.getDate)?o.getDate():o.getDate
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
  const _=is_fn(dbg_source_map)?dbg_source_map():dbg_source_map
  {
   const map=_
   return dbg_backtrace(stack,map)
  }
 }
 check(is_obj,map)
 const _=is_fn(tbl_init)?tbl_init():tbl_init
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
       const _=is_fn(map.source)?map.source():map.source
       {
        const source=_
        {
         const _=is_fn(stack)?stack():stack
         {
          const _a=_
          {
           const _=is_fn(_a)?_a():_a
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
                 if(is_fn(is_node)?is_node():is_node)
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
                                           const _=is_fn(location.path)?location.path():location.path
                                           {
                                            const path=_
                                            {
                                             const _=is_fn(location.index)?location.index():location.index
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
            return is_fn(r)?r():r
           }
          }
         }
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
  const _=is_fn(dbg_source_map)?dbg_source_map():dbg_source_map
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
      const _=is_fn(frame.fn)?frame.fn():frame.fn
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
   return is_fn(r)?r():r
  }
 }
}
function dbg_here()
{
 check_arity("same",arguments.length,0)
 const _=is_fn(dbg_callstack)?dbg_callstack():dbg_callstack
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
  const _=is_fn(dbg_source_map)?dbg_source_map():dbg_source_map
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
   const _=head(frames,5)
   {
    const frames=_
    {
     const _=is_fn(frames)?frames():frames
     {
      const _a=_
      {
       const _=is_fn(_a)?_a():_a
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
                    const _=is_fn(v.ncs)?v.ncs():v.ncs
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
                  const _=is_fn(v.njs)?v.njs():v.njs
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
  const _=is_fn(depth)?depth():depth
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
      return is_fn(r)?r():r
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
                const _=is_fn(length)?length():length
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
                    const _=is_fn(a)?a():a
                    {
                     for(const v of _)
                      push(a2,v.code)
                     {
                      const _=join(a2)
                      {
                       const s=_
                       {
                        const _=txt_unindent(s)
                        {
                         const s=_
                         {
                          const _=split(s)
                          {
                           const a3=_
                           {
                            const _=is_fn(a3)?a3():a3
                            {
                             const _a=_
                             {
                              const _=is_fn(_a)?_a():_a
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
                                      o.code=is_fn(v)?v():v
                                     }
                                    }
                                   }
                                  }
                                 }
                                }
                               }
                               {
                                const _=is_fn(a)?a():a
                                {
                                 for(const v of _)
                                 {
                                  if(is_empty(v.code))
                                   continue
                                  push(r,v)
                                 }
                                 return is_fn(r)?r():r
                                }
                               }
                              }
                             }
                            }
                           }
                          }
                         }
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
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
    const _=is_fn(middle)?middle():middle
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
                     return is_fn(r)?r():r
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
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
  const _=is_fn(x)?x():x
  {
   const _a=_
   {
    const _=is_fn(_a)?_a():_a
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
           return is_fn(i)?i():i
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
    return is_fn(centered)?centered():centered
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
     const _=is_fn(relatives)?relatives():relatives
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
         const _=is_fn(contents)?contents():contents
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
                   const _=is_fn(content)?content():content
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
             if(is_fn(is_node)?is_node():is_node)
             {
             }
             else if(is_fn(is_browser)?is_browser():is_browser)
             {
              const _=7
              {
               for(let i=0;i<(_);i++)
                push(source,null)
              }
             }
             const _=is_fn(paths)?paths():paths
             {
              const _a=_
              {
               const _=is_fn(_a)?_a():_a
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
                         const _=is_fn(i)?i():i
                         {
                          let line_js=_
                          {
                           if(is_fn(is_node)?is_node():is_node)
                           {
                           }
                           else if(is_fn(is_browser)?is_browser():is_browser)
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
                   if(is_fn(is_node)?is_node():is_node)
                   {
                    script=is_fn(global.script)?global.script():global.script
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
  if(is_fn(is_node)?is_node():is_node)
   return file_load(script)
  else if(is_fn(is_browser)?is_browser():is_browser)
   return is_fn(html.outerHTML)?html.outerHTML():html.outerHTML
  else
   stop()
 }
 const _=""
 {
  let r=_
  {
   if(is_undef(x))
   {
    r=is_fn(get_source)?get_source():get_source
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
        return is_fn(r)?r():r
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
   const _=is_fn(x)?x():x
   {
    for(const v of _)
    {
     if(!(contain(r,v)))
      push(r,v)
    }
    return is_fn(r)?r():r
   }
  }
 }
}
function deinit_common()
{
 check_arity("same",arguments.length,0)
 if(gte(verbose,0))
 {
  const _=is_fn(time_now)?time_now():time_now
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
 if(is_fn(is_node)?is_node():is_node)
  deinit_node()
 else if(is_fn(is_browser)?is_browser():is_browser)
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
   const _=is_fn(x)?x():x
   {
    for(const v of _)
    {
     const _=is_fn(v)?v():v
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
    return is_fn(r)?r():r
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
   return is_fn(r)?r():r
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
    obj_merge(r,x)
    return is_fn(r)?r():r
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
 const _=cmp(x,y)
 {
  const n=_
  return n===0
 }
}
function every(x,y)
{
 check_arg(is_arr,x,"x","arr")
 check_arg(is_fn,y,"y","fn")
 check_arity("same",arguments.length,2)
 const _=is_fn(x)?x():x
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
   const _=is_fn(x)?x():x
   {
    for(const v of _)
     push(r,v)
    return is_fn(r)?r():r
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
     const _=is_fn(a)?a():a
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
      return is_fn(r)?r():r
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
 check_arg(is_vec,x,"x","vec")
 check_arg(is_def,y,"y","def")
 check_arity("same",arguments.length,2)
 if(is_str(x))
  check(is_str,y)
 return x.indexOf(y)
}
function flower_box(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 const _=is_fn(tty_width)?tty_width():tty_width
 {
  const n=_
  {
   const _=repeat("*",n)
   {
    const s=_
    {
     log(s)
     flower(x)
     log(s)
    }
   }
  }
 }
}
function flower(x)
{
 const _=is_fn(tty_width)?tty_width():tty_width
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
 const _=is_fn(dbg_callstack)?dbg_callstack():dbg_callstack
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
   const _=is_fn(fns)?fns():fns
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
    return is_fn(r)?r():r
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
       const _=is_fn(fns)?fns():fns
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
        return is_fn(r)?r():r
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
function get_type(x)
{
 if(is_null(x))
  return "null"
 return typeof(x)
}
function get(x,y,z)
{
 check_arg(is_obj,x,"x","obj")
 check_arg(is_str,y,"y","str")
 check_arity("gte",arguments.length,2)
 if(has(x,y))
  return x[y]
 if(is_def(z))
  return is_fn(z)?z():z
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
    const _=is_fn(generator.next)?generator.next():generator.next
    {
     const iterator=_
     {
      if(is_fn(iterator.done)?iterator.done():iterator.done)
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
 check_arg(is_def,x,"x","def")
 check_arg(is_def,y,"y","def")
 check_arity("same",arguments.length,2)
 const _=cmp(x,y)
 {
  const n=_
  return n>0
 }
}
function gte(x,y)
{
 check_arg(is_def,x,"x","def")
 check_arg(is_def,y,"y","def")
 check_arity("same",arguments.length,2)
 const _=cmp(x,y)
 {
  const n=_
  return n>=0
 }
}
function has(x,y)
{
 check_arg(is_obj,x,"x","obj")
 check_arg(is_str,y,"y","str")
 check_arity("same",arguments.length,2)
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
   return is_fn(x)?x():x
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
 if(is_fn(x)?x():x)
  return is_fn(y)?y():y
 return is_fn(z)?z():z
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
          const _=is_fn(sloc.length)?sloc.length():sloc.length
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
  let args=_
  {
   if(is_fn(is_node)?is_node():is_node)
   {
    args=is_fn(init_node)?init_node():init_node
   }
   else if(is_fn(is_browser)?is_browser():is_browser)
    init_browser()
   else
    stop()
   global.source=is_fn(dbg_source)?dbg_source():dbg_source
   global.font_family="monospace"
   global.font_size="1.3vw"
   const _=["init_common","init_node","init_browser"]
   {
    const skip=_
    {
     const _=is_fn(fns)?fns():fns
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
           const _=is_fn(generator.next)?generator.next():generator.next
           {
            const iterator=_
            {
             if(is_fn(iterator.done)?iterator.done():iterator.done)
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
 const _=is_fn(x)?x():x
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
 const _=is_fn(x)?x():x
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
  return is_fn(x)?x():x
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
 const _=get_type(x)
 {
  const s=_
  return same(s,"boolean")
 }
}
function is_browser()
{
 check_arity("same",arguments.length,0)
 return is_fn(has_window)?has_window():has_window
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
 const _=is_fn(x)?x():x
 {
  for(const v of _)
  {
   if(!(contain(digit,v)))
    return false
  }
  return true
 }
}
function is_domain(x)
{
 if(!(is_str(x)))
  return false
 if(!(is_user(x)))
  return false
 const _=split(x,".")
 {
  const a=_
  {
   if(is_single(a))
    return false
   const _=back(a)
   {
    const tld=_
    {
     if(!(is_alnum(tld)))
      return false
     return true
    }
   }
  }
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
 const _=get_type(x)
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
 const _=get_type(x)
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
   const _=is_fn(x)?x():x
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
   const _=is_fn(a)?a():a
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
   const _=is_fn(a)?a():a
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
 const _=is_fn(x)?x():x
 {
  for(const v of _)
  {
   if(!(contain(lower,v)))
    return false
  }
  return true
 }
}
function is_mail(x)
{
 if(!(is_str(x)))
  return false
 const _=split(x,"@")
 {
  const a=_
  {
   if(!(is_pair(a)))
    return false
   const _=shift(a)
   {
    const user=_
    {
     const _=shift(a)
     {
      const domain=_
      {
       if(!(is_user(user)))
        return false
       if(!(is_domain(domain)))
        return false
       return true
      }
     }
    }
   }
  }
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
 return !(is_fn(is_browser)?is_browser():is_browser)
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
 const _=get_type(x)
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
 const _=get_type(x)
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
 const _=is_fn(x)?x():x
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
 const _=get_type(x)
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
   const _=is_fn(a)?a():a
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
  return is_fn(fals)?fals():fals
 return contain(x,lf)
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
 const _=is_fn(x)?x():x
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
function is_user(x)
{
 if(!(is_str(x)))
  return false
 const _=split(x,"-")
 {
  const _a=_
  {
   const _=is_fn(_a)?_a():_a
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
         const _=split(v,".")
         {
          const _a=_
          {
           const _=is_fn(_a)?_a():_a
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
                 if(!(is_alnum(v)))
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
    return true
   }
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
 if(contain(x,lf))
  return false
 if(contain(x,cr))
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
function is_rgb(x)
{
 if(!(is_uint(x.r)))
  return false
 if(!(is_uint(x.g)))
  return false
 if(!(is_uint(x.b)))
  return false
 return true
}
function join(x,y)
{
 check_arg(is_arr,x,"x","arr")
 check_arity("gte",arguments.length,1)
 if(is_undef(y))
  return join(x,lf)
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
    const _=is_fn(x)?x():x
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
      const _=char_escape(v)
      {
       const s=_
       push(a,s)
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
   const _=is_fn(x)?x():x
   {
    const _a=_
    {
     const _=is_fn(_a)?_a():_a
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
            const _=ansi_strip(v)
            {
             const s=_
             {
              push(parts,s)
              continue
             }
            }
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
         const _=is_fn(time_get)?time_get():time_get
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
                        const _=is_fn(inputs)?inputs():inputs
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
                         const _=concat(content,lf)
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
                                               const _=concat(content,lf)
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
    const _=is_fn(x)?x():x
    {
     const _a=_
     {
      const _=is_fn(_a)?_a():_a
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
          if(is_empty(content))
           console.log(" ")
          else
          {
           const _=split(content)
           {
            for(const v of _)
            {
             const _=is_fn(tty_width)?tty_width():tty_width
             {
              const n=_
              {
               const _=ansi_head(v,n)
               {
                const line=_
                console.log(line)
               }
              }
             }
            }
           }
          }
          if(is_fn(log_file)?log_file():log_file)
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
 if(is_str(output))
 {
  const _=[]
  {
   const a=_
   {
    const _=is_fn(x)?x():x
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
        const _=concat(s,lf)
        {
         const s=_
         {
          const _=concat(output,s)
          {
           const s=_
           {
            global.output=is_fn(s)?s():s
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
 if(is_fn(is_node)?is_node():is_node)
  node_log(...x)
 else if(is_fn(is_browser)?is_browser():is_browser)
 {
  if(is_empty(x))
   console.log(" ")
  else
   console.log(...x)
 }
 else
  stop()
}
function lt(x,y)
{
 check_arg(is_def,x,"x","def")
 check_arg(is_def,y,"y","def")
 check_arity("same",arguments.length,2)
 const _=cmp(x,y)
 {
  const n=_
  return n<0
 }
}
function lte(x,y)
{
 check_arg(is_def,x,"x","def")
 check_arg(is_def,y,"y","def")
 check_arity("same",arguments.length,2)
 const _=cmp(x,y)
 {
  const n=_
  return n<=0
 }
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
   if(is_fn(has_window)?has_window():has_window)
   {
    window.global=is_fn(window)?window():window
    global.has_window=true
   }
   else
   {
    global.has_window=false
   }
   global.zombie=false
   global.start=is_fn(time_get)?time_get():time_get
   global.lf="\n"
   global.cr="\r"
   global.crlf=concat(cr,lf)
   global.punct="!\"#$%&'()*+,-./:;<=>?@[\\]^`{|}~"
   global.digit="0123456789"
   global.lower="abcdefghijklmnopqrstuvwxyz"
   global.upper=to_upper(lower)
   global.output=null
   global.verbose=0
   global.minute=60
   global.hour=mul(60,minute)
   global.day=mul(24,hour)
   global.week=mul(7,day)
   global.month=mul(30,day)
   global.year=mul(12,month)
   global.traces=[]
   if(is_fn(is_node)?is_node():is_node)
    init_common()
   else if(is_fn(is_browser)?is_browser():is_browser)
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
   const _=is_fn(x)?x():x
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
    return is_fn(r)?r():r
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
   return is_fn(r)?r():r
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
   return is_fn(r)?r():r
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
  return is_fn(o.result)?o.result():o.result
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
  return is_fn(keys.length)?keys.length():keys.length
 }
}
function obj_merge(x,y)
{
 check_arg(is_obj,x,"x","obj")
 check_arg(is_obj,y,"y","obj")
 check_arity("same",arguments.length,2)
 Object.assign(x,y)
}
function obj_order(x,...keys)
{
 check_arg(is_obj,x,"x","obj")
 check_arity("gte",arguments.length,1)
 const _={}
 {
  const r=_
  {
   const _=is_fn(keys)?keys():keys
   {
    const _a=_
    {
     const _=is_fn(_a)?_a():_a
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
           const _=get(x,v)
           {
            const value=_
            put(r,v,value)
           }
          }
         }
        }
       }
      }
      {
       const _=is_fn(x)?x():x
       {
        for(const k in _)
        {
         const _=get(x,k)
         {
          const v=_
          {
           if(has(r,k))
            continue
           put(r,k,v)
          }
         }
        }
        return is_fn(r)?r():r
       }
      }
     }
    }
   }
  }
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
   const _=is_fn(x)?x():x
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
     return is_fn(r)?r():r
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
   const _=is_fn(x)?x():x
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
    return is_fn(r)?r():r
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
   const _=is_fn(x)?x():x
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
    return is_fn(r)?r():r
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
   const _=is_fn(y)?y():y
   {
    const args=_
    {
     function on_fn(...x)
     {
      if(is_fn(zombie)?zombie():zombie)
       return
      return fn(...args,...x)
     }
     if(is_fn(zombie)?zombie():zombie)
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
   return is_fn(r)?r():r
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
   const _=is_fn(y)?y():y
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
       return is_fn(r)?r():r
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
      return is_fn(s)?s():s
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
  return is_fn(x)?x():x
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
   const _=is_fn(a)?a():a
   {
    const _a=_
    {
     const _=is_fn(_a)?_a():_a
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
          unshift(x,v)
         }
        }
       }
      }
     }
    }
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
   const _=is_fn(time_now)?time_now():time_now
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
         const _=is_fn(generator.next)?generator.next():generator.next
         {
          const iterator=_
          {
           if(is_fn(iterator.done)?iterator.done():iterator.done)
           {
            r=is_fn(iterator.value)?iterator.value():iterator.value
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
     const _=is_fn(time_now)?time_now():time_now
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
                 return is_fn(r)?r():r
                }
               }
              }
             }
            }
           }
          }
         }
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
function random_str(x,alnum)
{
 check_arg(is_uint,x,"x","uint")
 check_arity("gte",arguments.length,1)
 if(is_undef(alnum))
  return random_str(x,true)
 check(is_bool,alnum)
 const _=[]
 {
  const a=_
  {
   const _=mul(26,256)
   {
    const range=_
    {
     while(lt(a.length,x))
     {
      const _=random(range)
      {
       const n=_
       {
        const _=chr(n)
        {
         const c=_
         {
          if(is_fn(alnum)?alnum():alnum)
          {
           if(is_alnum(c))
            push(a,c)
          }
          else
           push(a,c)
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
}
function random(x)
{
 if(is_undef(x))
  return random(Number.MAX_SAFE_INTEGER)
 check(is_num,x)
 check(gte,x,0)
 const _=is_fn(Math.random)?Math.random():Math.random
 {
  const r=_
  {
   const _=mul(r,x)
   {
    const r=_
    {
     if(is_uint(x))
      return trunc(r)
     return is_fn(r)?r():r
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
    throw is_fn(e)?e():e
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
       r.result=is_fn(result)?result():result
       r.output=is_fn(s)?s():s
       return is_fn(r)?r():r
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
   const _=is_fn(x)?x():x
   {
    for(const v of _)
    {
     if(y(v))
      continue
     push(r,v)
    }
    return is_fn(r)?r():r
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
 const _=is_fn(x)?x():x
 {
  let r=_
  {
   while(contain(r,y))
   {
    r=replace(r,y,z)
   }
   return is_fn(r)?r():r
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
    const _=is_fn(x)?x():x
    {
     for(const v of _)
     {
      if(same(v,y))
       push(r,z)
      else
       push(r,v)
     }
     return is_fn(r)?r():r
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
   const _=concat("font-family:",font_family,";font-size:",font_size)
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
  const _=is_fn(error)?error():error
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
  const _=is_fn(dbg_source_map)?dbg_source_map():dbg_source_map
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
            referrer=is_fn(document.referrer)?document.referrer():document.referrer
           }
          }
         }
        }
       }
      }
      const _=is_fn(browser_get)?browser_get():browser_get
      {
       const browser=_
       {
        const _=is_fn(navigator.userAgent)?navigator.userAgent():navigator.userAgent
        {
         const agent=_
         {
          const _=is_fn(time_now)?time_now():time_now
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
  const _=is_fn(query.url.href)?query.url.href():query.url.href
  {
   const url=_
   {
    const _=is_fn(query.request.headers)?query.request.headers():query.request.headers
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
        const _=is_fn(query.remote)?query.remote():query.remote
        {
         const remote=_
         {
          const _=is_fn(time_now)?time_now():time_now
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
  const _=is_fn(traces)?traces():traces
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
 const _=is_fn(error.stack)?error.stack():error.stack
 {
  const stack=_
  {
   const _=is_fn(error.message)?error.message():error.message
   {
    const message=_
    {
     const _=is_fn(error.constructor.name)?error.constructor.name():error.constructor.name
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
           if(is_fn(is_browser)?is_browser():is_browser)
            push(title,location.hostname)
           else if(is_fn(is_node)?is_node():is_node)
           {
            const _=is_fn(error.errno)?error.errno():error.errno
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
              const _=is_fn(os_host)?os_host():os_host
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
                         if(is_fn(is_browser)?is_browser():is_browser)
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
                         if(is_fn(empty)?empty():empty)
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
 flower_box(report.title)
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
 function log_title()
 {
  check_arity("same",arguments.length,0)
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
       flower_box(s)
      }
     }
    }
   }
  }
 }
 const _=[]
 {
  const a=_
  {
   const _=capture(log_title)
   {
    const title=_
    {
     push(a,title)
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
        result=is_fn(x)?x():x
        done=true
       }
       function on_catch(x)
       {
        check(is_obj,x)
        error=is_fn(x)?x():x
        done=true
       }
       const _=x.then(on_then)
       {
        const promise=_
        {
         promise.catch(on_catch)
         while(!(is_fn(done)?done():done))
          yield
         if(is_obj(error))
          throw is_fn(error)?error():error
         return is_fn(result)?result():result
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
     return is_fn(r)?r():r
    }
   }
  }
 }
 else if(is_arr(x))
  x.reverse()
 else
  stop()
}
function rgb_init(r,g,b)
{
 check_arg(is_uint,r,"r","uint")
 check_arg(is_uint,g,"g","uint")
 check_arg(is_uint,b,"b","uint")
 check_arity("same",arguments.length,3)
 return {r,g,b}
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
       return is_fn(r)?r():r
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
      return is_fn(r)?r():r
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
    return is_fn(r)?r():r
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
     return is_fn(r)?r():r
    }
   }
  }
 }
}
function silent(x,...y)
{
 check_arg(is_fn,x,"x","fn")
 check_arity("gte",arguments.length,1)
 const _=is_fn(verbose)?verbose():verbose
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
      verbose=is_fn(previous)?previous():previous
      throw is_fn(e)?e():e
     }
     verbose=is_fn(previous)?previous():previous
     return is_fn(r)?r():r
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
 const _=is_fn(time_now)?time_now():time_now
 {
  const start=_
  {
   while(true)
   {
    const _=is_fn(time_now)?time_now():time_now
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
     return is_fn(r)?r():r
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
      const _=is_fn(x)?x():x
      {
       for(const k in _)
       {
        const _=is_fn(k)?k():k
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
        const _=is_fn(a)?a():a
        {
         for(const v of _)
         {
          const _=is_fn(v.key)?v.key():v.key
          {
           const k=_
           put(r,v.key,v.value)
          }
         }
         return is_fn(r)?r():r
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
  return split(x,lf)
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
 return is_fn(x)?x():x
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
 return is_fn(x)?x():x
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
   return is_fn(r)?r():r
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
   return is_fn(x)?x():x
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
   const _=is_fn(x)?x():x
   {
    for(const v of _)
    {
     const _=get(v,y)
     {
      const s=_
      push(r,s)
     }
    }
    return is_fn(r)?r():r
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
   const _=is_fn(a)?a():a
   {
    const _a=_
    {
     const _=is_fn(_a)?_a():_a
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
    const _=is_fn(x)?x():x
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
 const _=is_fn(x)?x():x
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
   const _=is_fn(t)?t():t
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
   const _=is_fn(t)?t():t
   {
    for(const v of _)
    {
     const _=is_fn(v)?v():v
     {
      const row=_
      {
       const _={}
       {
        const o=_
        {
         const _=is_fn(row)?row():row
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
    const _=is_fn(x)?x():x
    {
     for(const v of _)
     {
      const _=dup(v)
      {
       const row=_
       {
        const _=is_fn(v)?v():v
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
     return is_fn(r)?r():r
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
      const _=is_fn(x)?x():x
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
          const _=is_fn(a)?a():a
          {
           for(const v of _)
           {
            length=max(length,v.length)
           }
           {
            const _=is_fn(a)?a():a
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
             return is_fn(r)?r():r
            }
           }
          }
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
       const _=is_fn(titles)?titles():titles
       {
        for(const v of _)
        {
         const _=is_fn(v)?v():v
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
           const _=is_fn(columns)?columns():columns
           {
            for(const v of _)
            {
             const _=is_fn(v)?v():v
             {
              const column=_
              {
               const _=0
               {
                let n=_
                {
                 const _=is_fn(column)?column():column
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
                   const _=is_fn(columns)?columns():columns
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
                         const _=is_fn(first)?first():first
                         {
                          const _a=_
                          {
                           const _=is_fn(_a)?_a():_a
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
                                   const _=is_fn(columns)?columns():columns
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
function tbl_sort(x,column)
{
 check_arg(is_arr,x,"x","arr")
 check_arg(is_str,column,"column","str")
 check_arity("same",arguments.length,2)
 function compare(x,y)
 {
  check_arg(is_obj,x,"x","obj")
  check_arg(is_obj,y,"y","obj")
  check_arity("same",arguments.length,2)
  const _=get(x,column)
  {
   const left=_
   {
    const _=get(y,column)
    {
     const right=_
     return cmp(left,right)
    }
   }
  }
 }
 sort(x,compare)
}
function time_delay(x)
{
 check_arg(is_num,x,"x","num")
 check_arity("same",arguments.length,1)
 check(gte,x,0)
 const _=mul(minute,3)
 {
  const minute3=_
  {
   const _=mul(hour,3)
   {
    const hour3=_
    {
     const _=mul(day,3)
     {
      const day3=_
      {
       const _=mul(month,3)
       {
        const month3=_
        {
         const _=mul(year,3)
         {
          const year3=_
          {
           if(lt(x,10))
           {
            const _=to_fixed(x)
            {
             const n=_
             return concat(n,"s")
            }
           }
           if(lt(x,minute3))
           {
            const _=trunc(x)
            {
             const n=_
             return concat(n,"s")
            }
           }
           if(lt(x,hour3))
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
           if(lt(x,day3))
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
           if(lt(x,month3))
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
           if(lt(x,year3))
           {
            const _=div(x,month)
            {
             const n=_
             {
              const _=trunc(n)
              {
               const n=_
               return concat(n,"mo")
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
function time_get()
{
 check_arity("same",arguments.length,0)
 const _=is_fn(Date.now)?Date.now():Date.now
 {
  const n=_
  return div(n,1000)
 }
}
function time_hn(x)
{
 check_arg(is_num,x,"x","num")
 check_arity("same",arguments.length,1)
 const _=is_fn(time_get)?time_get():time_get
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
 const _=is_fn(time_get)?time_get():time_get
 {
  const n=_
  return sub(n,start)
 }
}
function time_str(x,second)
{
 if(is_undef(x))
 {
  const _=is_fn(time_get)?time_get():time_get
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
     const _=is_fn(o.getHours)?o.getHours():o.getHours
     {
      const h=_
      {
       const _=pad_l(h,"0",2)
       {
        const h=_
        {
         const _=is_fn(o.getMinutes)?o.getMinutes():o.getMinutes
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
               if(!(is_fn(second)?second():second))
                return is_fn(r)?r():r
               const _=is_fn(o.getSeconds)?o.getSeconds():o.getSeconds
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
      const _=is_fn(val)?val():val
      {
       const _a=_
       {
        const _=is_fn(_a)?_a():_a
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
      const _=is_fn(val)?val():val
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
            const _=is_fn(k)?k():k
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
      return is_fn(s)?s():s
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
            return is_fn(integer)?integer():integer
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
   return is_fn(r)?r():r
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
 return is_fn(x.toLowerCase)?x.toLowerCase():x.toLowerCase
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
   return is_fn(r)?r():r
  }
 }
}
function to_str(x)
{
 check_arg(is_def,x,"x","def")
 check_arity("same",arguments.length,1)
 return is_fn(x.toString)?x.toString():x.toString
}
function to_tbl(x)
{
 check_arg(is_obj,x,"x","obj")
 check_arity("same",arguments.length,1)
 const _=[]
 {
  const r=_
  {
   const _=is_fn(x)?x():x
   {
    for(const k in _)
    {
     const _=is_fn(k)?k():k
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
    return is_fn(r)?r():r
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
   return is_fn(r)?r():r
  }
 }
}
function to_upper(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 return is_fn(x.toUpperCase)?x.toUpperCase():x.toUpperCase
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
        const _=is_fn(a)?a():a
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
    const _=is_fn(x)?x():x
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
 return is_fn(x.trimStart)?x.trimStart():x.trimStart
}
function trim_r(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 return is_fn(x.trimEnd)?x.trimEnd():x.trimEnd
}
function trim(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 return is_fn(x.trim)?x.trim():x.trim
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
 if(is_fn(is_node)?is_node():is_node)
 {
  if(is_fn(is_batch)?is_batch():is_batch)
   return 140
  const _=is_fn(process.stdout.columns)?process.stdout.columns():process.stdout.columns
  {
   const r=_
   {
    check(is_uint,r)
    return is_fn(r)?r():r
   }
  }
 }
 else if(is_fn(is_browser)?is_browser():is_browser)
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
         const _=is_fn(a)?a():a
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
          return is_fn(r)?r():r
         }
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
   const _=is_fn(x)?x():x
   {
    for(const v of _)
    {
     const _=head(v,y)
     {
      const s=_
      push(r,s)
     }
    }
    return is_fn(r)?r():r
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
   const _=is_fn(x)?x():x
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
    return is_fn(r)?r():r
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
   const _=is_fn(x)?x():x
   {
    for(const v of _)
    {
     const _=concat(y,v)
     {
      const s=_
      push(r,s)
     }
    }
    return is_fn(r)?r():r
   }
  }
 }
}
function txt_unindent(x)
{
 if(is_str(x))
 {
  const _=split(x)
  {
   const a=_
   {
    const _=txt_unindent(a)
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
  let s=_
  {
   while(is_indented(s))
   {
    const _=[]
    {
     const a=_
     {
      const _=split(s)
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
        s=join(a)
       }
      }
     }
    }
   }
   return split(s)
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
                                                                        return is_fn(r)?r():r
                                                                       }
                                                                      }
                                                                     }
                                                                    }
                                                                   }
                                                                  }
                                                                 }
                                                                }
                                                               }
                                                              }
                                                             }
                                                            }
                                                           }
                                                          }
                                                         }
                                                        }
                                                       }
                                                      }
                                                     }
                                                    }
                                                   }
                                                  }
                                                 }
                                                }
                                               }
                                              }
                                             }
                                            }
                                           }
                                          }
                                         }
                                        }
                                       }
                                      }
                                     }
                                    }
                                   }
                                  }
                                 }
                                }
                               }
                              }
                             }
                            }
                           }
                          }
                         }
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
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
      return is_fn(r)?r():r
     }
    }
   }
  }
 }
}
function url_get(...x)
{
 if(is_fn(is_node)?is_node():is_node)
  return http_get(...x)
 else if(is_fn(is_browser)?is_browser():is_browser)
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
   const _=is_fn(url.href)?url.href():url.href
   {
    const href=_
    {
     const _=strip_r(url.protocol,":")
     {
      const protocol=_
      {
       const _=is_fn(url.username)?url.username():url.username
       {
        const user=_
        {
         const _=is_fn(url.password)?url.password():url.password
         {
          const password=_
          {
           const _=is_fn(url.hostname)?url.hostname():url.hostname
           {
            const host=_
            {
             const _=is_fn(url.port)?url.port():url.port
             {
              const port=_
              {
               const _=is_fn(url.pathname)?url.pathname():url.pathname
               {
                const path=_
                {
                 const _=is_fn(url.hash)?url.hash():url.hash
                 {
                  const hash=_
                  {
                   const _={}
                   {
                    const args=_
                    {
                     const _=is_fn(url.searchParams.keys)?url.searchParams.keys():url.searchParams.keys
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
   return is_fn(r)?r():r
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
    return is_fn(r)?r():r
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
   if(is_fn(is_color)?is_color():is_color)
    push(r,"--color")
   if(!(is_fn(log_file)?log_file():log_file))
    push(r,"--no-log")
   return is_fn(r)?r():r
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
 const _=is_fn(path_tmp)?path_tmp():path_tmp
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
       const _=dir_load("tmp",true)
       {
        for(const v of _)
        {
         const _=fs_modified(v)
         {
          const modified=_
          {
           const _=is_fn(time_get)?time_get():time_get
           {
            const now=_
            {
             const _=sub(now,modified)
             {
              const age=_
              {
               if(lt(age,week))
                continue
               const _=is_fn(dir_current)?dir_current():dir_current
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
function digest(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 const _=is_fn(path_tmp)?path_tmp():path_tmp
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
        return is_fn(r)?r():r
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
   const _=is_fn(dir_current)?dir_current():dir_current
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
      throw is_fn(e)?e():e
     }
     dir_change(dir)
     return is_fn(r)?r():r
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
 return is_fn(process.cwd)?process.cwd():process.cwd
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
    return is_fn(r)?r():r
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
      if(is_fn(with_dirs)?with_dirs():with_dirs)
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
    return is_fn(r)?r():r
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
       const _=is_fn(a)?a():a
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
           if(is_fn(with_dirs)?with_dirs():with_dirs)
           {
            if(is_dir(s))
             push(r,s)
           }
          }
         }
        }
        return is_fn(r)?r():r
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
    return is_fn(r)?r():r
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
    return is_fn(r)?r():r
   }
  }
 }
}
function file_read(x,y)
{
 check_arg(is_str,x,"x","str")
 check_arity("gte",arguments.length,1)
 if(is_undef(y))
  return file_read(x,"utf8")
 const _=fs.readFileSync(x)
 {
  const buffer=_
  return buffer.toString(y)
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
  return is_fn(v.size)?v.size():v.size
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
function fs_created(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 const _=fs.statSync(x)
 {
  const r=_
  {
   const _=div(r.ctimeMs,1000)
   {
    const r=_
    return is_fn(r)?r():r
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
    return is_fn(r)?r():r
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
             return is_fn(http)?http():http
            else if(match_l(s,"https:"))
             return is_fn(https)?https():https
            else
             stop()
           }
          }
         }
         function on_request(response)
         {
          check_arg(is_obj,response,"response","obj")
          check_arity("same",arguments.length,1)
          const _=is_fn(response.headers)?response.headers():response.headers
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
          error=is_fn(x)?x():x
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
                if(is_fn(done)?done():done)
                 break
                if(is_obj(error))
                 throw is_fn(error)?error():error
                yield
               }
               if(is_json(result))
               {
                result=json_decode(result)
               }
               if(is_fn(with_headers)?with_headers():with_headers)
                return {result,headers}
               return is_fn(result)?result():result
              }
             }
            }
           }
          }
         }
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
     if(is_fn(is_remote)?is_remote():is_remote)
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
 global.color=false
 global.log_file=true
 global.binary=is_fn(process.execPath)?process.execPath():process.execPath
 global.cwd=is_fn(dir_current)?dir_current():dir_current
 global.script=at(process.argv,1)
 global.script=path_real(script)
 process.on("uncaughtExceptionMonitor",on_uncaught_exception)
 const _=slice(process.argv,2)
 {
  const r=_
  {
   if(extract(r,"--verbose"))
   {
    verbose=inc(verbose)
   }
   if(extract(r,"--quiet"))
   {
    verbose=dec(verbose)
   }
   if(extract(r,"--color"))
   {
    color=true
   }
   if(extract(r,"--no-log"))
   {
    log_file=false
   }
   const _=path_dir(script)
   {
    const dir=_
    {
     dir_change(dir)
     const _=is_fn(path_tmp)?path_tmp():path_tmp
     {
      const tmp=_
      {
       const _=path_dir(tmp)
       {
        const tmp=_
        {
         dir_make(tmp)
         return is_fn(r)?r():r
        }
       }
      }
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
  const _=is_fn(is_color)?is_color():is_color
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
     const _=is_fn(color)?color():color
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
            return is_fn(r)?r():r
           }
          }
         }
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
 const _=is_fn(ip_list)?ip_list():ip_list
 {
  for(const v of _)
  {
   if(is_ip4(v))
    return is_fn(v)?v():v
  }
  stop()
 }
}
function ip_v6()
{
 check_arity("same",arguments.length,0)
 const _=is_fn(ip_list)?ip_list():ip_list
 {
  for(const v of _)
  {
   if(is_ip6(v))
    return is_fn(v)?v():v
  }
  stop()
 }
}
function is_batch()
{
 check_arity("same",arguments.length,0)
 if(!(is_fn(is_node)?is_node():is_node))
  return false
 return !(is_fn(is_interactive)?is_interactive():is_interactive)
}
function is_color()
{
 check_arity("same",arguments.length,0)
 if(is_fn(color)?color():color)
  return true
 if(is_fn(is_interactive)?is_interactive():is_interactive)
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
       return is_fn(o.isDirectory)?o.isDirectory():o.isDirectory
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
       return is_fn(o.isFile)?o.isFile():o.isFile
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
 if(!(is_fn(is_node)?is_node():is_node))
  return false
 return is_fn(process.stdout.isTTY)?process.stdout.isTTY():process.stdout.isTTY
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
            if(!(match_r(buffer,lf)))
             return
            const _=strip_r(buffer,lf)
            {
             const line=_
             {
              log(line)
              const _=ansi_strip(buffer)
              {
               const s=_
               {
                out=concat(out,s)
                buffer=""
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
              const _=ansi_strip(s)
              {
               const s=_
               {
                err=concat(err,s)
               }
              }
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
            status=is_fn(x)?x():x
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
                         const _=is_fn(child.stdout)?child.stdout():child.stdout
                         {
                          const stdout=_
                          {
                           const _=is_fn(child.stderr)?child.stderr():child.stderr
                           {
                            const stderr=_
                            {
                             stdout.on("data",on_out)
                             stderr.on("data",on_err)
                             child.on("close",on_close)
                             while(!(is_fn(closed)?closed():closed))
                              yield
                             if(is_full(buffer.out))
                              print(lf)
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
         return is_fn(r)?r():r
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
   const _=is_fn(o.status)?o.status():o.status
   {
    const status=_
    {
     const _=is_fn(o.out)?o.out():o.out
     {
      const out=_
      {
       const _=is_fn(o.err)?o.err():o.err
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
 if(is_fn(is_root)?is_root():is_root)
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
 return is_fn(os.homedir)?os.homedir():os.homedir
}
function os_host()
{
 check_arity("same",arguments.length,0)
 return is_fn(os.hostname)?os.hostname():os.hostname
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
     if(is_fn(subcommand)?subcommand():subcommand)
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
 const _=is_fn(x)?x():x
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
                  if(!(match_r(s,lf)))
                   return
                  const _=strip_r(s,lf)
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
              status=is_fn(x)?x():x
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
                       const _=is_fn(child.stdout)?child.stdout():child.stdout
                       {
                        const stdout=_
                        {
                         const _=is_fn(child.stderr)?child.stderr():child.stderr
                         {
                          const stderr=_
                          {
                           stdout.on("data",on_out)
                           stderr.on("data",on_err)
                           child.on("close",on_close)
                           while(!(is_fn(closed)?closed():closed))
                            yield
                           if(is_full(buffer.out))
                            print("out",lf)
                           if(is_full(buffer.err))
                            print("err",lf)
                           process.removeListener("SIGINT",on_sigint)
                           os_log(os_prompt,status,x,...y)
                           return is_fn(status)?status():status
                          }
                         }
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
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
       const _=is_fn(a)?a():a
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
        return is_fn(r)?r():r
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
                 const _=is_fn(process.status)?process.status():process.status
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
       const _=is_fn(result.status)?result.status():result.status
       {
        const r=_
        {
         os_log(os_system,r,x,...y)
         return is_fn(r)?r():r
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
 const _=is_fn(os.userInfo)?os.userInfo():os.userInfo
 {
  const o=_
  return is_fn(o.username)?o.username():o.username
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
                const _=is_fn(random)?random():random
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
                           return is_fn(r)?r():r
                         }
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
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
 const _=report_html(report,65)
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
function to_base64(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 const _=Buffer.from(x)
 {
  const buffer=_
  {
   const _=buffer.toString("base64")
   {
    const r=_
    return is_fn(r)?r():r
   }
  }
 }
}
function ansi_encode(str,...args)
{
 check_arg(is_str,str,"str","str")
 check_arity("gte",arguments.length,1)
 const _=ansi_init(...args)
 {
  const ansi=_
  return concat(ansi.escape,"[",ansi.attr,";",ansi.fore,";",ansi.back,"m",str,ansi.escape,"[0m")
 }
}
function ansi_get_attrs()
{
 check_arity("same",arguments.length,0)
 const _={}
 {
  const r=_
  {
   r.normal=0
   r.bold=1
   r.dim=2
   r.underline=4
   r.blink=5
   r.reverse=7
   return is_fn(r)?r():r
  }
 }
}
function ansi_get_colors()
{
 check_arity("same",arguments.length,0)
 const _={}
 {
  const r=_
  {
   const _=[]
   {
    const list=_
    {
     push(list,"black 30 40")
     push(list,"red 31 41")
     push(list,"green 32 42")
     push(list,"yellow 33 43")
     push(list,"blue 34 44")
     push(list,"magenta 35 45")
     push(list,"cyan 36 46")
     push(list,"gray 37 47")
     push(list,"white 97 107")
     const _=is_fn(list)?list():list
     {
      for(const v of _)
      {
       const _=split(v," ")
       {
        const a=_
        {
         const _=shift(a)
         {
          const color=_
          {
           const _=shift(a)
           {
            const fore=_
            {
             const _=to_uint(fore)
             {
              const fore=_
              {
               const _=shift(a)
               {
                const back=_
                {
                 const _=to_uint(back)
                 {
                  const back=_
                  {
                   const _={fore,back}
                   {
                    const entry=_
                    put(r,color,entry)
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
      return is_fn(r)?r():r
     }
    }
   }
  }
 }
}
function ansi_head(x,length)
{
 check_arg(is_str,x,"x","str")
 check_arg(is_uint,length,"length","uint")
 check_arity("same",arguments.length,2)
 const _=explode(x)
 {
  const a=_
  {
   const _=chr(27)
   {
    const escape=_
    {
     const _=asc("@")
     {
      const at=_
      {
       const _=asc("~")
       {
        const tilde=_
        {
         const _=""
         {
          let buffer=_
          {
           const _=0
           {
            let visible=_
            {
             const _=0
             {
              let control=_
              {
               while(is_full(a))
               {
                if(gte(visible,length))
                 break
                const _=shift(a)
                {
                 const c1=_
                 {
                  if(different(c1,escape))
                  {
                   buffer=concat(buffer,c1)
                   visible=inc(visible)
                   continue
                  }
                  if(is_empty(a))
                  {
                   const _=char_escape(c1)
                   {
                    const s=_
                    {
                     buffer=concat(buffer,s)
                     visible=add(visible,s.length)
                     continue
                    }
                   }
                  }
                  const _=shift(a)
                  {
                   const c2=_
                   {
                    const _=false
                    {
                     let malformed=_
                     {
                      if(different(c2,"["))
                      {
                       malformed=true
                      }
                      if(is_empty(a))
                      {
                       malformed=true
                      }
                      if(is_fn(malformed)?malformed():malformed)
                      {
                       const _=char_escape(c1)
                       {
                        const s=_
                        {
                         buffer=concat(buffer,s)
                         buffer=concat(buffer,c2)
                         visible=add(visible,s.length,1)
                         continue
                        }
                       }
                      }
                      const _=""
                      {
                       let body=_
                       {
                        const _=false
                        {
                         let closed=_
                         {
                          while(is_full(a))
                          {
                           const _=shift(a)
                           {
                            const c3=_
                            {
                             const _=asc(c3)
                             {
                              const n=_
                              {
                               body=concat(body,c3)
                               if(between(n,at,tilde))
                               {
                                closed=true
                                break
                               }
                              }
                             }
                            }
                           }
                          }
                          if(!(is_fn(closed)?closed():closed))
                          {
                           const _=char_escape(c1)
                           {
                            const s=_
                            {
                             buffer=concat(buffer,s)
                             buffer=concat(buffer,c2)
                             buffer=concat(buffer,body)
                             visible=add(visible,s.length,1,body.length)
                             continue
                            }
                           }
                          }
                          buffer=concat(buffer,c1,c2,body)
                          control=add(control,2,body.length)
                         }
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
               const _=min(visible,length)
               {
                const length=_
                {
                 const _=add(length,control)
                 {
                  const length=_
                  {
                   const _=slice_l(buffer,length)
                   {
                    const r=_
                    {
                     if(gt(control,0))
                      return concat(r,escape,"[0m")
                     return is_fn(r)?r():r
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function ansi_init(fore,back,attr)
{
 if(is_undef(fore))
  return ansi_init("black",back,attr)
 if(is_undef(back))
  return ansi_init(fore,"white",attr)
 if(is_undef(attr))
  return ansi_init(fore,back,"normal")
 function get_fore(x)
 {
  check_arg(is_def,x,"x","def")
  check_arity("same",arguments.length,1)
  if(is_str(x))
  {
   const _=is_fn(ansi_get_colors)?ansi_get_colors():ansi_get_colors
   {
    const colors=_
    {
     const _=get(colors,x)
     {
      const n=_
      {
       const _=is_fn(n.fore)?n.fore():n.fore
       {
        const n=_
        return to_str(n)
       }
      }
     }
    }
   }
  }
  else if(is_rgb(x))
  {
   const _=ansi_rgb(x)
   {
    const n=_
    return concat("38;5;",n)
   }
  }
  else
   stop()
 }
 function get_back(x)
 {
  check_arg(is_def,x,"x","def")
  check_arity("same",arguments.length,1)
  if(is_str(x))
  {
   const _=is_fn(ansi_get_colors)?ansi_get_colors():ansi_get_colors
   {
    const colors=_
    {
     const _=get(colors,x)
     {
      const n=_
      {
       const _=is_fn(n.back)?n.back():n.back
       {
        const n=_
        return to_str(n)
       }
      }
     }
    }
   }
  }
  else if(is_rgb(x))
  {
   const _=ansi_rgb(x)
   {
    const n=_
    return concat("48;5;",n)
   }
  }
  else
   stop()
 }
 function get_attr(x)
 {
  check(is_str,x)
  const _=is_fn(ansi_get_attrs)?ansi_get_attrs():ansi_get_attrs
  {
   const attrs=_
   return get(attrs,x)
  }
 }
 const _=chr(27)
 {
  const escape=_
  {
   const _=get_fore(fore)
   {
    const fore=_
    {
     const _=get_back(back)
     {
      const back=_
      {
       const _=get_attr(attr)
       {
        const attr=_
        return {escape,fore,back,attr}
       }
      }
     }
    }
   }
  }
 }
}
function ansi_rgb(x)
{
 check_arg(is_obj,x,"x","obj")
 check_arity("same",arguments.length,1)
 const _=mul(x.r,36)
 {
  const r=_
  {
   const _=mul(x.g,6)
   {
    const g=_
    {
     const _=is_fn(x.b)?x.b():x.b
     {
      const b=_
      return add(16,r,g,b)
     }
    }
   }
  }
 }
}
function ansi_strip(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 const _=is_fn(x)?x():x
 {
  let input=_
  {
   const _=""
   {
    let output=_
    {
     const _=chr(27)
     {
      const escape=_
      {
       const _=concat(escape,"[")
       {
        const open=_
        {
         const _=asc("@")
         {
          const at=_
          {
           const _=asc("~")
           {
            const tilde=_
            {
             while(is_full(input))
             {
              const _=find(input,open)
              {
               const n1=_
               {
                if(lt(n1,0))
                {
                 output=concat(output,input)
                 break
                }
                const _=add(n1,open.length)
                {
                 const n2=_
                 {
                  const _=slice_l(input,n1)
                  {
                   const before=_
                   {
                    input=slice(input,n2)
                    output=concat(output,before)
                    while(is_full(input))
                    {
                     const _=front(input)
                     {
                      const c=_
                      {
                       input=slice(input,1)
                       const _=asc(c)
                       {
                        const n=_
                        {
                         if(between(n,at,tilde))
                          break
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
             return is_fn(output)?output():output
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function app_token(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 const _=is_fn(os_home)?os_home():os_home
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
            return is_fn(r)?r():r
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function archive_find(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 const _=path_dir(x)
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
       const _=is_fn(date_str)?date_str():date_str
       {
        const date=_
        {
         const _=replace(date,"/","-")
         {
          const date=_
          {
           const _=concat(file,"-",date,".",ext)
           {
            const base=_
            {
             const _=path_concat(dir,base)
             {
              const path=_
              {
               if(!(is_file(path)))
                return is_fn(path)?path():path
               const _=1
               {
                let n=_
                {
                 while(true)
                 {
                  const _=pad_l(n)
                  {
                   const digit=_
                   {
                    const _=concat(file,"-",date,"-",digit,".",ext)
                    {
                     const base=_
                     {
                      const _=path_concat(dir,base)
                      {
                       const path=_
                       {
                        if(is_file(path))
                        {
                         n=inc(n)
                         continue
                        }
                        return is_fn(path)?path():path
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function group_list()
{
 check_arity("same",arguments.length,0)
 const _=user_list(false)
 {
  const users=_
  {
   function find_users(gid)
   {
    check_arg(is_uint,gid,"gid","uint")
    check_arity("same",arguments.length,1)
    const _=[]
    {
     const r=_
     {
      const _=is_fn(users)?users():users
      {
       for(const k in _)
       {
        const _=get(users,k)
        {
         const v=_
         {
          if(same(v.gid,gid))
           push(r,v.name)
         }
        }
       }
       return is_fn(r)?r():r
      }
     }
    }
   }
   const _={}
   {
    const r=_
    {
     const _=file_load("/etc/group")
     {
      const lines=_
      {
       const _=split(lines)
       {
        const lines=_
        {
         const _=is_fn(lines)?lines():lines
         {
          const _a=_
          {
           const _=is_fn(_a)?_a():_a
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
                 const _=split(v,":")
                 {
                  const fields=_
                  {
                   const _=shift(fields)
                   {
                    const name=_
                    {
                     const _=shift(fields)
                     {
                      const password=_
                      {
                       const _=shift(fields)
                       {
                        const gid=_
                        {
                         const _=to_uint(gid)
                         {
                          const gid=_
                          {
                           const _=shift(fields)
                           {
                            const users=_
                            {
                             const _=split(users,",")
                             {
                              const users=_
                              {
                               check(is_empty,fields)
                               const _=find_users(gid)
                               {
                                const a=_
                                {
                                 append(users,a)
                                 const _=dedup(users)
                                 {
                                  const users=_
                                  {
                                   sort(users)
                                   const _={gid,name,users}
                                   {
                                    const o=_
                                    put(r,name,o)
                                   }
                                  }
                                 }
                                }
                               }
                              }
                             }
                            }
                           }
                          }
                         }
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
            return is_fn(r)?r():r
           }
          }
         }
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
 const _=is_fn(os_host)?os_host():os_host
 {
  const host=_
  return same(host,"castle")
 }
}
function is_remote()
{
 check_arity("same",arguments.length,0)
 return !(is_fn(is_local)?is_local():is_local)
}
function is_root()
{
 check_arity("same",arguments.length,0)
 const _=is_fn(os_user)?os_user():os_user
 {
  const s=_
  return same(s,"root")
 }
}
function mime_type(path)
{
 check_arg(is_file,path,"path","file")
 check_arity("same",arguments.length,1)
 const _=os_execute("file","--mime","--brief",path)
 {
  const r=_
  {
   const _=split(r," ")
   {
    const r=_
    {
     const _=front(r)
     {
      const r=_
      {
       const _=strip_r(r,";")
       {
        const r=_
        return is_fn(r)?r():r
       }
      }
     }
    }
   }
  }
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
function password(alnum)
{
 if(is_undef(alnum))
  return password(false)
 check(is_bool,alnum)
 function make_password()
 {
  check_arity("same",arguments.length,0)
  const _=[]
  {
   const a=_
   {
    const _=10
    {
     for(let i=0;i<(_);i++)
     {
      const _=is_fn(random_char)?random_char():random_char
      {
       const s=_
       push(a,s)
      }
     }
     return implode(a)
    }
   }
  }
 }
 const _="_-?"
 {
  const special=_
  {
   function random_char()
   {
    check_arity("same",arguments.length,0)
    const _=[]
    {
     const chars=_
     {
      if(is_fn(alnum)?alnum():alnum)
      {
       const _=explode(digit)
       {
        const a1=_
        {
         const _=explode(lower)
         {
          const a2=_
          {
           append(chars,a1)
           append(chars,a2)
          }
         }
        }
       }
      }
      else
      {
       const _=explode(special)
       {
        const a1=_
        {
         const _=explode(digit)
         {
          const a2=_
          {
           const _=explode(lower)
           {
            const a3=_
            {
             const _=explode(upper)
             {
              const a4=_
              {
               append(chars,a1)
               append(chars,a2)
               append(chars,a3)
               append(chars,a4)
              }
             }
            }
           }
          }
         }
        }
       }
      }
      const _=random(chars.length)
      {
       const n=_
       return at(chars,n)
      }
     }
    }
   }
   function is_valid(x)
   {
    if(!(is_str(x)))
     return false
    if(is_fn(alnum)?alnum():alnum)
     return is_alnum(x)
    const _=false
    {
     let special=_
     {
      const _=false
      {
       let alpha=_
       {
        const _=false
        {
         let digit=_
         {
          const _=false
          {
           let upper=_
           {
            const _=false
            {
             let lower=_
             {
              const _=is_fn(x)?x():x
              {
               for(const v of _)
               {
                if(is_special(v))
                {
                 special=true
                }
                if(is_alpha(v))
                {
                 alpha=true
                }
                if(is_digit(v))
                {
                 digit=true
                }
                if(is_upper(v))
                {
                 upper=true
                }
                if(is_lower(v))
                {
                 lower=true
                }
               }
               {
                if(!(is_fn(special)?special():special))
                 return false
                if(!(is_fn(alpha)?alpha():alpha))
                 return false
                if(!(is_fn(digit)?digit():digit))
                 return false
                if(!(is_fn(upper)?upper():upper))
                 return false
                if(!(is_fn(lower)?lower():lower))
                 return false
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
   function is_special(x)
   {
    if(!(is_str(x)))
     return false
    if(is_empty(x))
     return false
    const _=is_fn(x)?x():x
    {
     for(const v of _)
     {
      if(!(contain(special,v)))
       return false
     }
     return true
    }
   }
   while(true)
   {
    const _=is_fn(make_password)?make_password():make_password
    {
     const r=_
     {
      if(is_valid(r))
       return is_fn(r)?r():r
     }
    }
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
     return is_fn(r)?r():r
    }
   }
  }
 }
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
function sudo_dir_make(path)
{
 check_arg(is_str,path,"path","str")
 check_arity("same",arguments.length,1)
 if(is_dir(path))
  return
 sudo("mkdir","--parents",path)
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
   return is_fn(result.out)?result.out():result.out
  }
 }
}
function sudo_remove(path)
{
 check_arg(is_str,path,"path","str")
 check_arity("same",arguments.length,1)
 sudo("rm","--recursive","--force",path)
}
function sudo_save(path,data)
{
 check_arg(is_str,path,"path","str")
 check_arg(is_str,data,"data","str")
 check_arity("same",arguments.length,2)
 const _=path_dir(path)
 {
  const dir=_
  {
   const _=path_base(path)
   {
    const base=_
    {
     const _=path_tmp(base)
     {
      const tmp=_
      {
       sudo_dir_make(dir)
       file_save(tmp,data)
       sudo("mv","--force",tmp,path)
      }
     }
    }
   }
  }
 }
}
function sudo(...x)
{
 return os_system("sudo",...x)
}
function user_created(x)
{
 check_arg(is_obj,x,"x","obj")
 check_arity("same",arguments.length,1)
 const _=is_fn(x.created)?x.created():x.created
 {
  let r=_
  {
   const _=is_fn(x.home)?x.home():x.home
   {
    const home=_
    {
     const _=is_fn(x.last_log)?x.last_log():x.last_log
     {
      const last_log=_
      {
       if(is_str(home))
       {
        const _=fs_created(home)
        {
         const n=_
         {
          if(is_null(r))
          {
           r=is_fn(n)?n():n
          }
          else
          {
           r=min(r,n)
          }
         }
        }
       }
       if(is_num(last_log))
       {
        if(is_null(r))
        {
         r=is_fn(last_log)?last_log():last_log
        }
        else
        {
         r=min(r,last_log)
        }
       }
       return is_fn(r)?r():r
      }
     }
    }
   }
  }
 }
}
function user_list(with_group)
{
 if(is_undef(with_group))
  return user_list(true)
 check(is_bool,with_group)
 function last_log(user)
 {
  check_arg(is_str,user,"user","str")
  check_arity("same",arguments.length,1)
  const _=os_execute("last","--fulltimes","-R",user)
  {
   const lines=_
   {
    const _=split(lines)
    {
     const lines=_
     {
      const _=front(lines)
      {
       const line=_
       {
        if(is_empty(line))
         return null
        const _=replace_rec(line,"  "," ")
        {
         const line=_
         {
          const _=split(line," ")
          {
           const parts=_
           {
            shift(parts,2)
            const _=join(parts," ")
            {
             const line=_
             {
              const _=split(line,"-")
              {
               const parts=_
               {
                const _=shift(parts)
                {
                 const line=_
                 {
                  const _=trim(line)
                  {
                   const line=_
                   {
                    const _=date_decode(line)
                    {
                     const r=_
                     return is_fn(r)?r():r
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
 const _=null
 {
  let groups=_
  {
   function find_group(gid)
   {
    check_arg(is_uint,gid,"gid","uint")
    check_arity("same",arguments.length,1)
    const _=is_fn(groups)?groups():groups
    {
     for(const k in _)
     {
      const _=get(groups,k)
      {
       const v=_
       {
        if(same(v.gid,gid))
         return is_fn(v.name)?v.name():v.name
       }
      }
     }
     stop()
    }
   }
   function find_groups(name)
   {
    check_arg(is_str,name,"name","str")
    check_arity("same",arguments.length,1)
    const _=[]
    {
     const r=_
     {
      const _=is_fn(groups)?groups():groups
      {
       for(const k in _)
       {
        const _=get(groups,k)
        {
         const v=_
         {
          if(contain(v.users,name))
           push(r,v.name)
         }
        }
       }
       return is_fn(r)?r():r
      }
     }
    }
   }
   const _={}
   {
    const r=_
    {
     const _=file_load("/etc/passwd")
     {
      const lines=_
      {
       const _=split(lines)
       {
        const lines=_
        {
         if(is_fn(with_group)?with_group():with_group)
         {
          groups=is_fn(group_list)?group_list():group_list
         }
         const _=is_fn(lines)?lines():lines
         {
          const _a=_
          {
           const _=is_fn(_a)?_a():_a
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
                 const _=split(v,":")
                 {
                  const fields=_
                  {
                   const _=shift(fields)
                   {
                    const name=_
                    {
                     const _=shift(fields)
                     {
                      const password=_
                      {
                       const _=shift(fields)
                       {
                        const uid=_
                        {
                         const _=to_uint(uid)
                         {
                          const uid=_
                          {
                           const _=shift(fields)
                           {
                            const gid=_
                            {
                             const _=to_uint(gid)
                             {
                              const gid=_
                              {
                               const _=shift(fields)
                               {
                                const comment=_
                                {
                                 const _=shift(fields)
                                 {
                                  const home=_
                                  {
                                   const _=shift(fields)
                                   {
                                    const shell=_
                                    {
                                     const _=match_l(home,"/home/")
                                     {
                                      const human=_
                                      {
                                       const _=null
                                       {
                                        let created=_
                                        {
                                         const _=last_log(name)
                                         {
                                          const last_log=_
                                          {
                                           check(is_empty,fields)
                                           const _={uid,gid,name,comment,home,shell,human,created,last_log}
                                           {
                                            const o=_
                                            {
                                             if(is_fn(with_group)?with_group():with_group)
                                             {
                                              const _=find_group(gid)
                                              {
                                               const group=_
                                               {
                                                const _=find_groups(name)
                                                {
                                                 const groups=_
                                                 {
                                                  unshift(groups,group)
                                                  const _=dedup(groups)
                                                  {
                                                   const groups=_
                                                   {
                                                    sort(groups)
                                                    o.groups=is_fn(groups)?groups():groups
                                                    obj_order(o,"uid","gid","name","groups")
                                                   }
                                                  }
                                                 }
                                                }
                                               }
                                              }
                                             }
                                             put(r,name,o)
                                            }
                                           }
                                          }
                                         }
                                        }
                                       }
                                      }
                                     }
                                    }
                                   }
                                  }
                                 }
                                }
                               }
                              }
                             }
                            }
                           }
                          }
                         }
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
            return is_fn(r)?r():r
           }
          }
         }
        }
       }
      }
     }
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
             return is_fn(r)?r():r
            }
           }
          }
         }
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
   return is_fn(r)?r():r
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
          return is_fn(r)?r():r
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
             return is_fn(r)?r():r
            }
           }
          }
         }
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
         return is_fn(r)?r():r
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
                 return is_fn(r)?r():r
                }
               }
              }
             }
            }
           }
          }
         }
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
         return is_fn(r)?r():r
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
             return is_fn(r)?r():r
            }
           }
          }
         }
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
             return is_fn(r)?r():r
            }
           }
          }
         }
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
     return is_fn(r)?r():r
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
               return is_fn(r)?r():r
              }
             }
            }
           }
          }
         }
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
             return is_fn(r)?r():r
            }
           }
          }
         }
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
   return is_fn(x)?x():x
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
         const _=is_fn(parameters)?parameters():parameters
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
                       return is_fn(r)?r():r
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function cpl_block(cpl,nodes)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_arr,nodes,"nodes","arr")
 check_arity("same",arguments.length,2)
 const _=[]
 {
  const r=_
  {
   const _=is_fn(nodes)?nodes():nodes
   {
    for(const v of _)
    {
     const _=cpl_translate(cpl,v)
     {
      const a=_
      append(r,a)
     }
    }
    return is_fn(r)?r():r
   }
  }
 }
}
function cpl_check_fn(cpl,nodes,path)
{
 check_arg(is_obj,cpl,"cpl","obj")
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
     const _=is_fn(nodes)?nodes():nodes
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
function cpl_check(cpl,nodes)
{
 check_arg(is_obj,cpl,"cpl","obj")
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
    const _=is_fn(nodes)?nodes():nodes
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
     return is_fn(r)?r():r
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
            return is_fn(r)?r():r
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
                        const _=is_fn(parameters)?parameters():parameters
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
                          return is_fn(r)?r():r
                         }
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
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
      const _=is_fn(args)?args():args
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
 return visit(nodes)
}
function cpl_compile(cpl,path)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_str,path,"path","str")
 check_arity("same",arguments.length,2)
 const _=cpl_load(cpl,path)
 {
  const nodes=_
  {
   const _=cpl_tokenize(cpl,nodes)
   {
    const nodes=_
    {
     const _=cpl_fold(cpl,nodes)
     {
      const nodes=_
      {
       cpl_check_fn(cpl,nodes,path)
       const _=cpl_check(cpl,nodes)
       {
        const nodes=_
        {
         const _=cpl_for(cpl,nodes)
         {
          let nodes=_
          {
           try
           {
            nodes=cpl_scope(cpl,nodes)
            nodes=cpl_block(cpl,nodes)
           }
           catch(e)
           {
            cpl_dump(cpl)
            throw is_fn(e)?e():e
           }
           return is_fn(nodes)?nodes():nodes
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function cpl_deinit(cpl)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arity("same",arguments.length,1)
 const _=json_dump(cpl.cache)
 {
  const s=_
  file_save(cpl.path,s)
 }
}
function cpl_dump(cpl)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arity("same",arguments.length,1)
 check(is_obj,cpl)
 function dump_ast(node)
 {
  check_arg(is_obj,node,"node","obj")
  check_arity("same",arguments.length,1)
  const _=[]
  {
   const r=_
   {
    const _=is_fn(node.args)?node.args():node.args
    {
     const args=_
     {
      const _=is_fn(node.children)?node.children():node.children
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
            push(a2,node.operator)
            append(a2,args)
            const _=is_fn(a2)?a2():a2
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
                const _=is_fn(node.source)?node.source():node.source
                {
                 const source=_
                 {
                  const _=is_fn(source.path)?source.path():source.path
                  {
                   const path=_
                   {
                    const _=is_fn(source.index)?source.index():source.index
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
                          const _=is_fn(children)?children():children
                          {
                           for(const v of _)
                           {
                            const _=dump_ast(v)
                            {
                             const t=_
                             {
                              const _=is_fn(t)?t():t
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
                            return is_fn(r)?r():r
                           }
                          }
                         }
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
 const _=is_fn(cpl.stack)?cpl.stack():cpl.stack
 {
  const _a=_
  {
   const _=is_fn(_a)?_a():_a
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
function cpl_fold(cpl,nodes)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_arr,nodes,"nodes","arr")
 check_arity("same",arguments.length,2)
 function visit(nodes)
 {
  check_arg(is_arr,nodes,"nodes","arr")
  check_arity("same",arguments.length,1)
  const _=shift(nodes)
  {
   const parent=_
   {
    const _=is_fn(parent.indent)?parent.indent():parent.indent
    {
     const indent=_
     {
      const _=[]
      {
       const descendants=_
       {
        while(is_full(nodes))
        {
         const _=front(nodes)
         {
          const o=_
          {
           if(gt(o.indent,indent))
           {
            shift(nodes)
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
          const _=is_fn(parent.operator)?parent.operator():parent.operator
          {
           const operator=_
           {
            const _=is_fn(parent.args)?parent.args():parent.args
            {
             const args=_
             {
              const _=is_fn(parent.source)?parent.source():parent.source
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
   const _=dup(nodes)
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
     return is_fn(r)?r():r
    }
   }
  }
 }
}
function cpl_for(cpl,nodes)
{
 check_arg(is_obj,cpl,"cpl","obj")
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
    const _=is_fn(nodes)?nodes():nodes
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
     return is_fn(r)?r():r
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
    const _=is_fn(node.args)?node.args():node.args
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
                                              return is_fn(r)?r():r
                                             }
                                            }
                                           }
                                          }
                                         }
                                        }
                                       }
                                      }
                                     }
                                    }
                                   }
                                  }
                                 }
                                }
                               }
                              }
                             }
                            }
                           }
                          }
                         }
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
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
function cpl_generate(cpl)
{
 check_arg(is_obj,cpl,"cpl","obj")
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
       return is_fn(r)?r():r
      const _=is_fn(pool.length)?pool.length():pool.length
      {
       const r=_
       {
        push(pool,x)
        return is_fn(r)?r():r
       }
      }
     }
    }
   }
   const _=[]
   {
    const a=_
    {
     const _=is_fn(cpl.out)?cpl.out():cpl.out
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
             const _=is_fn(cpl.out)?cpl.out():cpl.out
             {
              for(const v of _)
              {
               const _=is_fn(v.source)?v.source():v.source
               {
                const source=_
                {
                 const _=is_fn(source.path)?source.path():source.path
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
                 const _=is_fn(paths)?paths():paths
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
                       const _=cpl_uncomment(cpl,v)
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
                   const _=to_lit(cpl.app)
                   {
                    const app=_
                    {
                     const _=concat("const app=",app)
                     {
                      const app=_
                      {
                       push(a,app)
                       const _=is_fn(time_get)?time_get():time_get
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
                                             const _=join(cpl.fns,",")
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
        const _=is_fn(cpl.cache.files)?cpl.cache.files():cpl.cache.files
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
              if(!(is_fn(recompile)?recompile():recompile))
              {
               const _=get(cache,relative)
               {
                const entry=_
                {
                 const _=is_fn(entry.nodes)?entry.nodes():entry.nodes
                 {
                  const nodes=_
                  {
                   declare_fn(path,nodes)
                   return is_fn(nodes)?nodes():nodes
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
                            return is_fn(nodes)?nodes():nodes
                           }
                          }
                         }
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
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
    const _=is_fn(x)?x():x
    {
     for(const v of _)
     {
      const _=dir_load(v)
      {
       const a=_
       append(r,a)
      }
     }
     return is_fn(r)?r():r
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
            return is_fn(r)?r():r
           }
          }
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
     return is_fn(r)?r():r
    const _=concat("src/spa-",x)
    {
     const r=_
     {
      if(is_dir(r))
       return is_fn(r)?r():r
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
     const _=is_fn(files)?files():files
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
function cpl_init(app)
{
 check_arg(is_str,app,"app","str")
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
                 const _=is_fn(load_cache)?load_cache():load_cache
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
function cpl_is_call(cpl,token)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_str,token,"token","str")
 check_arity("same",arguments.length,2)
 if(same(token,"call"))
  return true
 const _=is_fn(cpl.asts)?cpl.asts():cpl.asts
 {
  for(const k in _)
  {
   if(same(k,token))
    return false
  }
  return true
 }
}
function cpl_is_leaf(cpl,nodes)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_arr,nodes,"nodes","arr")
 check_arity("same",arguments.length,2)
 if(!(is_single(nodes)))
  return false
 const _=front(nodes)
 {
  const node=_
  {
   const _=is_fn(node.operator)?node.operator():node.operator
   {
    const operator=_
    {
     if(cpl_is_call(cpl,operator))
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
function cpl_load(cpl,path)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_str,path,"path","str")
 check_arity("same",arguments.length,2)
 const _=[]
 {
  const r=_
  {
   const _=is_fn(dir_current)?dir_current():dir_current
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
           const _=cpl_uncomment(cpl,path2)
           {
            const lines=_
            {
             const _=split(lines)
             {
              const lines=_
              {
               const _=is_fn(lines)?lines():lines
               {
                const _a=_
                {
                 const _=is_fn(_a)?_a():_a
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
                       const _=is_fn(path2)?path2():path2
                       {
                        const path=_
                        {
                         const _=is_fn(i)?i():i
                         {
                          const index=_
                          {
                           const _=is_fn(v)?v():v
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
                  return is_fn(r)?r():r
                 }
                }
               }
              }
             }
            }
           }
          }
         }
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
                const _=is_fn(line_js)?line_js():line_js
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
                            const _=is_fn(o.source)?o.source():o.source
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
    const _=is_fn(cpl.cache.scans)?cpl.cache.scans():cpl.cache.scans
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
          return is_fn(r)?r():r
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
            return is_fn(r)?r():r
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
      return is_fn(r)?r():r
     }
    }
   }
  }
 }
}
function cpl_scope(cpl,nodes)
{
 check_arg(is_obj,cpl,"cpl","obj")
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
            unshift(cpl.stack,node)
            throw is_fn(e)?e():e
           }
           append(r,a)
          }
         }
        }
       }
      }
      return is_fn(r)?r():r
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
    const _=is_fn(node.operator)?node.operator():node.operator
    {
     const operator=_
     {
      const _=is_fn(node.args)?node.args():node.args
      {
       const args=_
       {
        const _=is_fn(node.source)?node.source():node.source
        {
         const source=_
         {
          const _=is_fn(operator)?operator():operator
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
                                 const _=is_fn(declare)?declare():declare
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
                                         return is_fn(r)?r():r
                                        }
                                       }
                                      }
                                     }
                                    }
                                   }
                                  }
                                 }
                                }
                               }
                              }
                             }
                            }
                           }
                          }
                         }
                        }
                       }
                      }
                     }
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
                             const _=is_fn(declare)?declare():declare
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
                                     return is_fn(r)?r():r
                                    }
                                   }
                                  }
                                 }
                                }
                               }
                              }
                             }
                            }
                           }
                          }
                         }
                        }
                       }
                      }
                     }
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
                return is_fn(r)?r():r
               }
              }
             }
            }
           }
          }
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
     const _=is_fn(cpl.files)?cpl.files():cpl.files
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
         const _=is_fn(cpl.out)?cpl.out():cpl.out
         {
          for(const v of _)
          {
           const _=is_fn(v.source.path)?v.source.path():v.source.path
           {
            const path=_
            {
             const _=is_fn(v.source.index)?v.source.index():v.source.index
             {
              const index=_
              {
               const _=is_fn(v.code)?v.code():v.code
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
function cpl_tokenize(cpl,nodes)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_arr,nodes,"nodes","arr")
 check_arity("same",arguments.length,2)
 const _=[]
 {
  const r=_
  {
   const _=is_fn(nodes)?nodes():nodes
   {
    for(const v of _)
    {
     const _=is_fn(v.code)?v.code():v.code
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
           const _=cpl_scan(cpl,code)
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
    return is_fn(r)?r():r
   }
  }
 }
}
function cpl_translate(cpl,node)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_obj,node,"node","obj")
 check_arity("same",arguments.length,2)
 function translate(cpl,operator,args,children,source)
 {
  check_arg(is_obj,cpl,"cpl","obj")
  check_arg(is_str,operator,"operator","str")
  check_arg(is_arr,args,"args","arr")
  check_arg(is_arr,children,"children","arr")
  check_arg(is_obj,source,"source","obj")
  check_arity("same",arguments.length,5)
  const _=is_fn(cpl.asts)?cpl.asts():cpl.asts
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
         return is_fn(r)?r():r
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
         return is_fn(r)?r():r
        check(is_obj,r)
        return [r]
       }
      }
     }
    }
   }
  }
 }
 const _=is_fn(node.operator)?node.operator():node.operator
 {
  const operator=_
  {
   const _=is_fn(node.args)?node.args():node.args
   {
    const args=_
    {
     const _=is_fn(node.children)?node.children():node.children
     {
      const children=_
      {
       const _=is_fn(node.source)?node.source():node.source
       {
        const source=_
        {
         try
         {
          return translate(cpl,operator,args,children,source)
         }
         catch(e)
         {
          unshift(cpl.stack,node)
          throw is_fn(e)?e():e
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function cpl_uncomment(cpl,path)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_str,path,"path","str")
 check_arity("same",arguments.length,2)
 if(has(cpl.files,path))
  return get(cpl.files,path)
 const _=path_concat("src",path)
 {
  const path_real=_
  {
   const _=file_load(path_real)
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
           const _=cpl_scan(cpl,v)
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
             put(cpl.files,path,r)
             return is_fn(r)?r():r
            }
           }
          }
         }
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
  return is_fn(x)?x():x
 if(is_lit(x))
  return is_fn(x)?x():x
 if(is_identifier(x))
  return is_fn(x)?x():x
 if(is_access(x))
  return is_fn(x)?x():x
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
   const _=paren(x)
   {
    const condition=_
    {
     const _=concat("is_fn",condition)
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
     return is_fn(first)?first():first
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
 return is_fn(x)?x():x
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
   const _=is_fn(app_list)?app_list():app_list
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
             if(!(is_fn(run)?run():run))
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
                     const _=is_fn(argv_context)?argv_context():argv_context
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
                             const _=is_fn(o.status)?o.status():o.status
                             {
                              const status=_
                              {
                               const _=is_fn(o.err)?o.err():o.err
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
const compile=1758459503
const pool=["lib-common/abs.cs","lib-common/add.cs","lib-common/and.cs","lib-common/angle.cs","lib-common/append.cs","lib-common/arr.cs","lib-common/asc.cs","lib-common/at.cs","lib-common/back.cs","lib-common/base36-decode.cs","lib-common/base36-encode.cs","lib-common/between.cs","lib-common/brace.cs","lib-common/bracket.cs","lib-common/byte-size.cs","lib-common/capture.cs","lib-common/char-escape.cs","lib-common/check-arg.cs","lib-common/check-arity.cs","lib-common/check.cs","lib-common/chr.cs","lib-common/clear.cs","lib-common/clone.cs","lib-common/cmp.cs","lib-common/collate.cs","lib-common/concat.cs","lib-common/contain.cs","lib-common/count.cs","lib-common/crc.cs","lib-common/cut-l.cs","lib-common/cut-r.cs","lib-common/date-decode.cs","lib-common/date-str.cs","lib-common/dbg/dbg-backtrace.cs","lib-common/dbg/dbg-callstack.cs","lib-common/dbg/dbg-here.cs","lib-common/dbg/dbg-origin-xs.cs","lib-common/dbg/dbg-origin.cs","lib-common/dbg/dbg-source-map.cs","lib-common/dbg/dbg-source.cs","lib-common/dec.cs","lib-common/dedup.cs","lib-common/deinit-common.cs","lib-common/delimit.cs","lib-common/different.cs","lib-common/div.cs","lib-common/drop.cs","lib-common/dump.cs","lib-common/dup.cs","lib-common/eq.cs","lib-common/every.cs","lib-common/explode.cs","lib-common/extract.cs","lib-common/fallback-error.cs","lib-common/filter.cs","lib-common/find.cs","lib-common/flower-box.cs","lib-common/flower.cs","lib-common/fn-args.cs","lib-common/fn-match.cs","lib-common/fn-select.cs","lib-common/front.cs","lib-common/get-type.cs","lib-common/get.cs","lib-common/gn-run.cs","lib-common/gt.cs","lib-common/gte.cs","lib-common/has.cs","lib-common/head.cs","lib-common/iif.cs","lib-common/implode.cs","lib-common/inc.cs","lib-common/indent.cs","lib-common/init-common.cs","lib-common/insert.cs","lib-common/is/is-access.cs","lib-common/is/is-alnum.cs","lib-common/is/is-alpha.cs","lib-common/is/is-arg.cs","lib-common/is/is-arr.cs","lib-common/is/is-atom.cs","lib-common/is/is-blank.cs","lib-common/is/is-bool.cs","lib-common/is/is-browser.cs","lib-common/is/is-char.cs","lib-common/is/is-comment.cs","lib-common/is/is-composite.cs","lib-common/is/is-container.cs","lib-common/is/is-cool.cs","lib-common/is/is-def.cs","lib-common/is/is-digit.cs","lib-common/is/is-domain.cs","lib-common/is/is-empty.cs","lib-common/is/is-false.cs","lib-common/is/is-fn.cs","lib-common/is/is-fragment.cs","lib-common/is/is-full.cs","lib-common/is/is-gn.cs","lib-common/is/is-identifier.cs","lib-common/is/is-indented.cs","lib-common/is/is-int.cs","lib-common/is/is-ip.cs","lib-common/is/is-ip4.cs","lib-common/is/is-ip6.cs","lib-common/is/is-json.cs","lib-common/is/is-last.cs","lib-common/is/is-lisp.cs","lib-common/is/is-lit-char.cs","lib-common/is/is-lit.cs","lib-common/is/is-ln.cs","lib-common/is/is-lower.cs","lib-common/is/is-mail.cs","lib-common/is/is-many.cs","lib-common/is/is-name.cs","lib-common/is/is-node.cs","lib-common/is/is-none.cs","lib-common/is/is-noun.cs","lib-common/is/is-null.cs","lib-common/is/is-num.cs","lib-common/is/is-numeric.cs","lib-common/is/is-obj.cs","lib-common/is/is-pair.cs","lib-common/is/is-punct.cs","lib-common/is/is-single.cs","lib-common/is/is-space.cs","lib-common/is/is-str.cs","lib-common/is/is-token.cs","lib-common/is/is-trivia.cs","lib-common/is/is-true.cs","lib-common/is/is-tuple.cs","lib-common/is/is-txt.cs","lib-common/is/is-uint.cs","lib-common/is/is-undef.cs","lib-common/is/is-upper.cs","lib-common/is/is-url.cs","lib-common/is/is-user.cs","lib-common/is/is-vec.cs","lib-common/is/is-word.cs","lib-common/is/is-xn.cs","lib-common/is-rgb.cs","lib-common/join.cs","lib-common/json-decode.cs","lib-common/json-dump.cs","lib-common/json-encode.cs","lib-common/log-append.cs","lib-common/log.cs","lib-common/lt.cs","lib-common/lte.cs","lib-common/main.cs","lib-common/map.cs","lib-common/match-l.cs","lib-common/match-r.cs","lib-common/match.cs","lib-common/max.cs","lib-common/min.cs","lib-common/mod.cs","lib-common/mul.cs","lib-common/mute.cs","lib-common/neq.cs","lib-common/nop.cs","lib-common/obj/obj-keys.cs","lib-common/obj/obj-length.cs","lib-common/obj/obj-merge.cs","lib-common/obj/obj-order.cs","lib-common/obj/obj-push.cs","lib-common/obj/obj-remove.cs","lib-common/obj/obj-unshift.cs","lib-common/obj/obj-vals.cs","lib-common/obj.cs","lib-common/on.cs","lib-common/or.cs","lib-common/pad-l.cs","lib-common/pad-r.cs","lib-common/paren.cs","lib-common/partial.cs","lib-common/path/path-concat.cs","lib-common/path/path-file.cs","lib-common/path/path-fix.cs","lib-common/path/path-join.cs","lib-common/path/path-split.cs","lib-common/path/path-strip.cs","lib-common/path/path-unfix.cs","lib-common/path/path-up.cs","lib-common/pop.cs","lib-common/prepend.cs","lib-common/profile.cs","lib-common/push.cs","lib-common/put.cs","lib-common/quote.cs","lib-common/random-str.cs","lib-common/random.cs","lib-common/record.cs","lib-common/reject.cs","lib-common/remove.cs","lib-common/repeat.cs","lib-common/replace-rec.cs","lib-common/replace.cs","lib-common/report/report-html.cs","lib-common/report/report-init.cs","lib-common/report/report-log.cs","lib-common/report/report-render.cs","lib-common/resolve.cs","lib-common/reverse.cs","lib-common/rgb-init.cs","lib-common/round.cs","lib-common/salt.cs","lib-common/same.cs","lib-common/scan.cs","lib-common/set.cs","lib-common/shift.cs","lib-common/shuffle.cs","lib-common/silent.cs","lib-common/sleep.cs","lib-common/slice-l.cs","lib-common/slice-r.cs","lib-common/slice.cs","lib-common/sort.cs","lib-common/space.cs","lib-common/split.cs","lib-common/squote.cs","lib-common/stop.cs","lib-common/str-indent.cs","lib-common/strip-l.cs","lib-common/strip-r.cs","lib-common/sub.cs","lib-common/tail.cs","lib-common/tbl/tbl-column.cs","lib-common/tbl/tbl-columns.cs","lib-common/tbl/tbl-index.cs","lib-common/tbl/tbl-init.cs","lib-common/tbl/tbl-pad-l.cs","lib-common/tbl/tbl-remove-column.cs","lib-common/tbl/tbl-rename-column.cs","lib-common/tbl/tbl-render.cs","lib-common/tbl/tbl-sort.cs","lib-common/time/time-delay.cs","lib-common/time/time-get.cs","lib-common/time/time-hn.cs","lib-common/time/time-interval.cs","lib-common/time/time-now.cs","lib-common/time/time-str.cs","lib-common/time/time-timeout.cs","lib-common/to/to-base36.cs","lib-common/to/to-dump.cs","lib-common/to/to-fixed.cs","lib-common/to/to-i.cs","lib-common/to/to-int.cs","lib-common/to/to-json.cs","lib-common/to/to-lit.cs","lib-common/to/to-lower.cs","lib-common/to/to-num.cs","lib-common/to/to-str.cs","lib-common/to/to-tbl.cs","lib-common/to/to-uint.cs","lib-common/to/to-upper.cs","lib-common/trace.cs","lib-common/trim-l.cs","lib-common/trim-r.cs","lib-common/trim.cs","lib-common/trunc.cs","lib-common/tty-width.cs","lib-common/txt/txt-compact.cs","lib-common/txt/txt-cut.cs","lib-common/txt/txt-indent.cs","lib-common/txt/txt-prepend.cs","lib-common/txt/txt-unindent.cs","lib-common/unaccent.cs","lib-common/unshift.cs","lib-common/unwrap.cs","lib-common/url-beautify.cs","lib-common/url-get.cs","lib-common/url-parse.cs","lib-common/wait.cs","lib-common/xor.cs","lib-node/app-list.cs","lib-node/argv-context.cs","lib-node/beep.cs","lib-node/deinit-node.cs","lib-node/digest.cs","lib-node/dir/dir-call.cs","lib-node/dir/dir-change.cs","lib-node/dir/dir-current.cs","lib-node/dir/dir-find.cs","lib-node/dir/dir-load.cs","lib-node/dir/dir-make.cs","lib-node/dir/dir-read.cs","lib-node/dir/dir-reset.cs","lib-node/dir/dir-size.cs","lib-node/file/file-append.cs","lib-node/file/file-load.cs","lib-node/file/file-read.cs","lib-node/file/file-save.cs","lib-node/file/file-size.cs","lib-node/file/file-write.cs","lib-node/fs/fs-copy.cs","lib-node/fs/fs-created.cs","lib-node/fs/fs-modified.cs","lib-node/fs/fs-remove.cs","lib-node/http-get.cs","lib-node/init-node.cs","lib-node/inspect.cs","lib-node/ip/ip-host.cs","lib-node/ip/ip-list.cs","lib-node/ip/ip-v4.cs","lib-node/ip/ip-v6.cs","lib-node/is/is-batch.cs","lib-node/is/is-color.cs","lib-node/is/is-dir.cs","lib-node/is/is-file.cs","lib-node/is/is-fs.cs","lib-node/is/is-interactive.cs","lib-node/is/is-readable.cs","lib-node/open.cs","lib-node/os/os-capture.cs","lib-node/os/os-detach.cs","lib-node/os/os-execute.cs","lib-node/os/os-home.cs","lib-node/os/os-host.cs","lib-node/os/os-log.cs","lib-node/os/os-prompt.cs","lib-node/os/os-ps.cs","lib-node/os/os-run.cs","lib-node/os/os-shell.cs","lib-node/os/os-system.cs","lib-node/os/os-user.cs","lib-node/path/path-base.cs","lib-node/path/path-dir.cs","lib-node/path/path-ext.cs","lib-node/path/path-real.cs","lib-node/path/path-tmp.cs","lib-node/report-mail.cs","lib-node/sigint.cs","lib-node/to-base64.cs","lib-shell/ansi/ansi-encode.cs","lib-shell/ansi/ansi-get-attrs.cs","lib-shell/ansi/ansi-get-colors.cs","lib-shell/ansi/ansi-head.cs","lib-shell/ansi/ansi-init.cs","lib-shell/ansi/ansi-rgb.cs","lib-shell/ansi/ansi-strip.cs","lib-shell/app-token.cs","lib-shell/archive-find.cs","lib-shell/group-list.cs","lib-shell/init-shell.cs","lib-shell/is-local.cs","lib-shell/is-remote.cs","lib-shell/is-root.cs","lib-shell/mime-type.cs","lib-shell/mnt-clean.cs","lib-shell/mnt-unmount.cs","lib-shell/password.cs","lib-shell/ssh/ssh-execute.cs","lib-shell/ssh/ssh-pass.cs","lib-shell/ssh/ssh-system.cs","lib-shell/sudo/sudo-append.cs","lib-shell/sudo/sudo-dir-make.cs","lib-shell/sudo/sudo-read.cs","lib-shell/sudo/sudo-remove.cs","lib-shell/sudo/sudo-save.cs","lib-shell/sudo/sudo.cs","lib-shell/user-created.cs","lib-shell/user-list.cs","lib-compiler/app-home.cs","lib-compiler/app-make.cs","lib-compiler/ast/ast-assign.cs","lib-compiler/ast/ast-begin.cs","lib-compiler/ast/ast-brk.cs","lib-compiler/ast/ast-call.cs","lib-compiler/ast/ast-catch.cs","lib-compiler/ast/ast-check.cs","lib-compiler/ast/ast-cont.cs","lib-compiler/ast/ast-else.cs","lib-compiler/ast/ast-elseif.cs","lib-compiler/ast/ast-fn.cs","lib-compiler/ast/ast-forin.cs","lib-compiler/ast/ast-fornum.cs","lib-compiler/ast/ast-forof.cs","lib-compiler/ast/ast-gn.cs","lib-compiler/ast/ast-if.cs","lib-compiler/ast/ast-include.cs","lib-compiler/ast/ast-inline.cs","lib-compiler/ast/ast-let.cs","lib-compiler/ast/ast-ret.cs","lib-compiler/ast/ast-run.cs","lib-compiler/ast/ast-throw.cs","lib-compiler/ast/ast-try.cs","lib-compiler/ast/ast-var.cs","lib-compiler/ast/ast-while.cs","lib-compiler/ast/ast-yield.cs","lib-compiler/ast/call-ast-block-top.cs","lib-compiler/ast/call-ast-block.cs","lib-compiler/ast/call-ast-declare.cs","lib-compiler/ast/call-ast-for.cs","lib-compiler/ast/call-ast-if.cs","lib-compiler/ast/call-ast-xn.cs","lib-compiler/cpl-block.cs","lib-compiler/cpl-check-fn.cs","lib-compiler/cpl-check-syntax.cs","lib-compiler/cpl-check.cs","lib-compiler/cpl-compile.cs","lib-compiler/cpl-deinit.cs","lib-compiler/cpl-dump.cs","lib-compiler/cpl-fold.cs","lib-compiler/cpl-for.cs","lib-compiler/cpl-generate.cs","lib-compiler/cpl-include.cs","lib-compiler/cpl-init.cs","lib-compiler/cpl-is-call.cs","lib-compiler/cpl-is-leaf.cs","lib-compiler/cpl-load.cs","lib-compiler/cpl-log-error.cs","lib-compiler/cpl-scan.cs","lib-compiler/cpl-scope.cs","lib-compiler/cpl-source-map.cs","lib-compiler/cpl-tokenize.cs","lib-compiler/cpl-translate.cs","lib-compiler/cpl-uncomment.cs","lib-compiler/expr/call-expr-arg.cs","lib-compiler/expr/call-expr-right.cs","lib-compiler/expr/call-expr-rvalue.cs","lib-compiler/expr/expr-arr.cs","lib-compiler/expr/expr-call.cs","lib-compiler/expr/expr-iif.cs","lib-compiler/expr/expr-in.cs","lib-compiler/expr/expr-inline.cs","lib-compiler/expr/expr-instanceof.cs","lib-compiler/expr/expr-new.cs","lib-compiler/expr/expr-not.cs","lib-compiler/expr/expr-obj.cs","lib-compiler/expr/expr-run.cs","lib-compiler/expr/expr-value.cs","app-make/init.cs","fn abs x:num"," ret Math.abs x","end","fn add x:num y:num z:etc"," let r inline \"x+y\"",""," if is_full z","  ret add r z:etc"," ret r","fn and x:bool y:bool z:etc"," let r inline \"x&&y\"","  ret and r z:etc","fn angle x:str"," ret concat \"<\" x \">\"","fn append x:arr y:arr"," for y","  push x v"," end","fn arr x:etc"," ret inline \"[...x]\"","fn asc x:char"," ret x.charCodeAt 0","fn at x:vec y:uint z"," let n dec x.length"," check between y 0 n"," if is_undef z","  ret inline \"x[y]\""," inline \"x[y]=z\"","fn back x:vec y z"," if is_undef y","  ret back x 0"," check is_uint y"," check lt y x.length"," let n sub x.length y"," let n dec n","  ret at x n"," at x n z","fn base36_decode x:str"," var r \"\""," let a explode x"," while is_full a","  let a2 slice_l a 4","  shift a 4","  let s implode a2","  let n Number.parseInt s 36","  let range mul 256 256","  check is_uint n","  check lte n range","  let c chr n","  assign r concat r c","fn base36_encode x:str"," forof x","  let s asc v","  let s to_base36 s","  let s pad_l s \"0\" 4","  assign r concat r s","fn between x:num y:num z:num"," check gte z y"," if lt x y","  ret false"," if gt x z"," ret true","fn brace x:str"," ret concat \"{\" x \"}\"","fn bracket x:str"," ret concat \"[\" x \"]\"","fn byte_size x:uint"," let kb 1024"," let mb mul kb 1024"," let gb mul mb 1024"," let tb mul gb 1024"," if lt x kb","  let s to_fixed x","  ret concat s \"b\""," if lt x mb","  let s div x kb","  let s trunc s","  let s to_fixed s","  ret concat s \"Kb\""," if lt x gb","  let s div x mb","  ret concat s \"Mb\""," if lt x tb","  let s div x gb","  ret concat s \"Gb\""," let s div x tb"," let s trunc s"," let s to_fixed s"," ret concat s \"Tb\"","fn capture x:fn y:etc"," let o record x y:etc"," ret o.output","fn char_escape x:char"," let r json_encode x"," let r strip_l r \"\\\"\""," let r strip_r r \"\\\"\"","fn check_arg is arg name type"," let test is arg"," if is_true test","  ret"," let s_name to_lit name"," let s_type to_lit type"," let s_given get_type arg"," let s_given to_lit s_given"," let s_given space s_given \"given\""," let s_given paren s_given"," let message space \"Expecting argument\" s_name \"to be of type\" s_type s_given"," let message concat message \".\""," stop message","inline \"function check_arity(operator,length,arity)\"","inline \"{\"","inline \" return\"","inline \" if(operator===\\\"same\\\")\"","inline \" {\"","inline \"  if(length===arity)\"","inline \"   return\"","inline \" }\"","inline \"\"","inline \" if(operator===\\\"gte\\\")\"","inline \"  if(length>=arity)\"","inline \" const message=\\\"Expecting \\\"+arity+\\\" argument(s) (\\\"+length+\\\" given)\\\"\"","inline \" throw new Error(message)\"","inline \"}\"","fn check is args:etc"," if is_true is","  if is_empty args","   ret"," elseif is_fn is","  let b is args:etc","  if is_true b","  let name is.name","  if match_l name \"is_\"","   let arg front args","   let name strip_l name \"is_\"","   let s_name to_lit name","   let s_given get_type arg","   let s_given to_lit s_given","   let s_given space s_given \"given\"","   let s_given paren s_given","   let message space \"Expecting a value of type\" s_name s_given","   let message concat message \".\"","   stop message","  else","   let message space \"Check failed calling\" s_name","  end"," stop \"check\"","fn chr x:uint"," check is_uint x"," ret String.fromCharCode x","fn clear x:arr"," x.splice 0","fn clone x"," if is_undef x","  check same arguments.length 1"," let history arr"," fn process x","  if is_container x","   push history x","  if is_arr x","   let r arr","   forof x","    if contain history v","     push r null","     cont","    end","    let v process v","    push r v","   end","   ret r","  elseif is_obj x","   let r obj","   forin x","    let v get x k","     put r k null","    put r k v","   ret value x"," ret process x","fn cmp x:def y:def"," if same x y","  ret 0"," if is_arr x","  if is_arr y","   fornum min x.length y.length","    let xval at x i","    let yval at y i","    let n cmp xval yval","    if different n 0","     ret n","   ret cmp x.length y.length"," if is_obj x","  if is_obj y","   let xkeys obj_keys x","   let ykeys obj_keys y","   let xvals obj_vals x","   let yvals obj_vals y","   fornum min xkeys.length ykeys.length","    let xkey at xkeys i","    let ykey at ykeys i","    let n cmp xkey ykey","    let xval at xvals i","    let yval at yvals i","   ret cmp xkeys.length ykeys.length"," if inline \"x>y\"","  ret 1"," if inline \"x<y\"","  ret -1"," ret 0","fn collate x:arr"," fn is_delimited x","  if not is_str x","   ret false","  if same x \"_\"","  if is_punct x","   ret true","  if is_space x"," let a arr","  if is_empty a","   push a v","   cont","  let left back a","  let left back left","  let right front v","  if is_delimited left","  elseif is_delimited right","   push a right","  let s concat left right","  drop a","  push a s"," ret join a \" \"","fn concat x:etc"," ret implode x","fn contain x:composite y","  check same arguments.length 2"," if is_str x","  check is_str y","  ret x.includes y"," elseif is_arr x"," elseif is_obj x","  forin x","   let v get x k","   if same v y","    ret true"," else","  stop","fn count x:arr y:def"," var r 0","  if same v y","   assign r inc r","fn crc x:str"," for a","  for s","   let n asc v","   assign r add r n","fn cut_l x:str y:uint"," if lte x.length y","  ret x"," let length sub y 3"," let s slice_r x length"," let a explode s"," while true","  let c front a","  if is_punct c","   shift a","  elseif is_space c","   brk"," let r implode a"," let r concat \"...\" r","fn cut_r x:str y:uint"," check is_str x"," let ellipsis \"...\""," let length sub y ellipsis.length"," let s slice_l x length","  let c back a","   drop a"," let r concat r ellipsis","fn date_decode x:str"," let r new Date x"," let r r.getTime"," let r div r 1000"," let r trunc r","fn date_str x","  let n time_get","  ret date_str n"," check is_num x"," let n mul x 1000"," let o new Date n"," let y o.getFullYear"," let m o.getMonth"," let m inc m"," let m pad_l m \"0\" 2"," let d o.getDate"," let d pad_l d \"0\" 2"," ret concat y \"/\" m \"/\" d","fn dbg_backtrace stack map"," if is_undef stack","  let e new Error \"backtrace\"","  ret dbg_backtrace e.stack map"," check is_str stack"," if is_undef map","  let map dbg_source_map","  ret dbg_backtrace stack map"," check is_obj map"," let r tbl_init"," let stack trim stack"," let stack split stack"," let source map.source"," for stack","  if is_node","   if not contain v map.script","    cont","  let s trim v","  let s replace s \"@\" \" \"","  let a split s \" \"","  let s front a","  if same s \"at\"","  var fn shift a","  if is_empty fn","   assign fn \"anonymous\"","  if not is_noun fn","  let a back a","  let a split a \":\"","  if not is_many a","  let njs back a 1","  let njs to_uint njs","  var index dec njs","  if gte index source.length","  let location at source index","  if is_null location","  let js trim location.js","  let cs trim location.cs","  let path location.path","  let ncs location.index","  let ncs inc location.index","  let o obj fn njs js path ncs cs","  push r o","fn dbg_callstack stack map","  let e new Error \"callstack\"","  ret dbg_callstack e.stack"," let r dbg_backtrace stack map"," while is_full r","  let frame front r","  let fn frame.fn","  if same fn \"throw\"","  elseif same fn \"stop\"","  elseif same fn \"check\"","  elseif same fn \"check_arg\"","  elseif same fn \"check_arity\"","  shift r","fn dbg_here"," let t dbg_callstack"," tbl_remove_column t \"njs\""," tbl_remove_column t \"js\""," let t tbl_render t"," log t","fn dbg_origin_xs stack code_type map","  let e new Error \"origin-xs\"","  ret dbg_origin_xs e.stack"," check is_str code_type","  ret dbg_origin_xs stack code_type map"," let frames dbg_callstack stack map"," let frames head frames 5"," for frames","  var t null","  var label null","  if same code_type \"cs\"","   let file get map.files v.path","   let line v.ncs","   assign t dbg_origin file line","   assign label \"stack\"","  elseif same code_type \"js\"","   let line v.njs","   assign t dbg_origin map.source line \"js\"","   assign label \"javacript\"","   stop","  let s tbl_render t","  let s txt_prepend s \"> \"","  let n inc i","  let title concat \"#\" n","  let title space label \"frame\" title \"/\" v.fn","  flower title","  log s","fn dbg_origin source:arr line:uint key depth"," if is_undef key","  ret dbg_origin source line \"\" depth"," check is_str key"," if is_undef depth","  ret dbg_origin source line key 15"," check is_uint depth"," fn find_origin fn:fn source:arr line:uint key:str depth:uint","  var n depth","  var r fn source line key n","  while lte n source.length","   if gte r.length depth","    brk","   assign n inc n","   assign r fn source line key n","   let end add line r.length","   if gte end source.length","  ret r"," fn origin source:arr line:uint key:str depth:uint","  let r arr","  let a arr","  let n div depth 2","  let n trunc n","  var n sub line n","  let length min source.length depth","  let nup add n length","  if lt n 1","   assign n 1","  elseif gte nup source.length","   assign n sub source.length length","   if lt n 1","    assign n 1","  fornum length","   let n add n i","   var p \" \"","   if same n line","    assign p \">\"","   let index dec n","   var code at source index","   if is_empty key","    check is_str code","   else","    assign code get code key","   let o obj n p code","   push a o","  let a2 arr","  forof a","   push a2 v.code","  let s join a2","  let s txt_unindent s","  let a3 split s","  for a3","   let o at a i","   assign o.code v","   if is_empty v.code","   push r v"," fn origin_center source:arr line:uint key:str depth:uint","  let a origin source line key depth","  ret center a"," fn center x:arr","  var middle get_position x","  var range middle","  let length mul range 2","  let length inc length","  if gt length x.length","   assign range sub x.length middle","   assign range dec range","  let ybefore sub middle range","  let yafter inc middle","  let before slice x ybefore range","  let center at x middle","  let after slice x yafter range","  let r arr before:etc center after:etc"," fn get_position x:arr","  for x","   if same v.p \">\"","    ret i"," let centered find_origin origin_center source line key depth"," if same centered.length depth","  ret centered"," ret find_origin origin source line key depth","fn dbg_source_map"," let lines_js split source"," let paths arr"," forof relatives","  let path at pool v","  push paths path"," let files obj"," forin contents","  let content get contents k","  let n to_uint k","  let path at pool n","  let lines arr","  forof content","   let s at pool v","   push lines s","  put files path lines"," let source arr"," if is_node"," elseif is_browser","  fornum 7","   push source null"," for paths","  if gte i paths.length","  let path at paths i","  let index at indices i","  var line_js i","  elseif is_browser","   assign line_js add line_js 5","  let js at lines_js line_js","  let cs get files path","  let cs at cs index","  let o obj path index js cs","  push source o"," var script null","  assign script global.script"," ret obj script files source","fn dbg_source x"," fn get_source","   ret file_load script","   ret html.outerHTML","  assign r get_source","  assign r file_load x"," let r trim_r r"," let r split r","  let s pop r","  if match_l s \"const app=\""," let r join r","fn dec x:num"," ret sub x 1","fn dedup x:arr"," let r arr","  if not contain r v","fn deinit_common"," if gte verbose 0","  let profile time_now","  let profile time_delay profile","  let profile to_lit profile","  let profile concat \"profile=\" profile","  log app profile","  deinit_node","  deinit_browser","fn delimit x:str y","  ret delimit x is_fragment"," check is_fn y","  let right v","  if is_empty r","   push r right","  let left back r","  let fragment concat left right","  if is_fragment fragment","   drop r","   push r fragment","fn different x y"," ret inline \"x!==y\"","fn div x:num y:num z:etc"," check different y 0"," let r inline \"x/y\"","  ret div r z:etc","fn drop x:arr y","  ret drop x 1"," check lte y x.length"," pop x y","fn dump x"," let name fn_args \"dump\""," check is_single name"," let name front name","  let s to_lit x","  log name s","  log name x","fn dup x:container","  ret slice x 0","  let r obj","  obj_merge r x","fn eq x:def y:def"," let n cmp x y"," ret inline \"n===0\"","fn every x:arr y:fn","  if not y v","fn explode x:str","  push r v","fn extract x:arr y:def"," var r false"," let a dup x"," clear x"," forof a","   assign r true","   push x v","fn fallback_error x:str y:obj z"," let title space \"Fallback\" x"," flower title"," let s to_str y.stack"," let s trim_r s"," let s txt_prepend s \"error-in-error> \""," console.log s"," check is_obj z"," let s to_str z.stack"," let s txt_prepend s \"original-error> \"","fn filter x:arr y:fn"," ret x.filter y","fn find x:vec y:def"," ret x.indexOf y","fn flower_box x:str"," let n tty_width"," let s repeat \"*\" n"," log s"," flower x","fn flower x","  let s repeat \"*\" n"," let s1 repeat \"*\" n"," let s2 repeat \"*\" 2"," let s2 concat s2 \" \""," let s2 concat s2 x"," let s2 concat s2 s1"," let s2 slice_l s2 n"," log s2","fn fn_args x:str"," forof dbg_callstack","  let a split v.cs \" \"","  let n find a x","  if lt n 0","  let index inc n","  ret slice a index"," stop","fn fn_match x:str"," let r obj"," forin fns","  if not match k x","  let v get fns k","  put r k v","fn fn_select x:str"," let pattern concat x \"*\""," let fns fn_match pattern","  let name strip_l k x","  put r name v","fn front x:vec"," check is_full x"," ret at x 0","fn get_type x"," if is_null x","  ret \"null\""," ret typeof x","fn get x:obj y:str z"," if has x y"," if is_def z","  ret z","fn gn_run x:gn y:etc"," let generator x y:etc"," fn on_timer","  let iterator generator.next","  if iterator.done","  time_timeout on_timer"," on_timer","fn gt x:def y:def"," ret inline \"n>0\"","fn gte x:def y:def"," ret inline \"n>=0\"","fn has x:obj y:str"," ret inline \"y in x\"","fn head x:vec y:uint"," if lt x.length y","  if is_str x","   ret x","  elseif is_arr x","   ret dup x"," ret slice_l x y","fn iif x:bool y:def z:def"," if x","  ret y"," ret z","fn implode x:arr"," ret join x \"\"","fn inc x:num"," ret add x 1","fn indent x:str y","  ret indent x 1"," forof split x","  let s trim_r v","  if is_empty s","   push a s","   let indent repeat \" \" y","   let s concat indent s"," ret join a","fn init_common"," fn log_compile","  let compile time_hn compile","  let compile to_lit compile","  let compile concat \"compile=\" compile","  let sloc split source","  let sloc sloc.length","  let sloc concat \"sloc=\" sloc","  log app compile sloc"," var args arr","  assign args init_node","  init_browser"," assign global.source dbg_source"," assign global.font_family \"monospace\""," assign global.font_size \"1.3vw\""," let skip arr \"init_common\" \"init_node\" \"init_browser\"","  if contain skip k","  if match k \"init_*\"","   let v get fns k","   v","  log_compile"," if is_fn init","  init args:etc","  deinit_common"," elseif is_gn init","  let generator init args:etc","  fn on_timer","   let iterator generator.next","   if iterator.done","    deinit_common","    ret","   time_timeout on_timer","  on_timer","fn insert x:arr y:uint z:etc"," x.splice y 0 z:etc","fn is_access x"," if not is_str x"," if is_empty x"," let a split x \".\""," if is_single a"," ret every a is_identifier","fn is_alnum x","  if same v \"_\"","  elseif is_alpha v","  elseif is_digit v","fn is_alpha x","  if is_lower v","  elseif is_upper v","fn is_arg x"," if is_identifier x","  ret true"," if is_access x"," if is_numeric x"," if is_lit x"," if is_lit_char x"," ret false","fn is_arr x"," ret Array.isArray x","fn is_atom x"," if is_alnum x"," if is_tuple x","fn is_blank x"," if is_space x","fn is_bool x"," let s get_type x"," ret same s \"boolean\"","fn is_browser"," ret has_window","fn is_char x"," ret same x.length 1","fn is_comment x"," if not is_ln x"," ret match_l x \"//\"","fn is_composite x","fn is_container x","fn is_cool x"," if is_num x","fn is_def x"," ret not is_undef x","fn is_digit x","  if not contain digit v","fn is_domain x"," if not is_user x"," let tld back a"," if not is_alnum tld","fn is_empty x"," if is_vec x","  ret same x.length 0"," if obj x","  let keys obj_keys x","  ret is_empty keys","fn is_false x"," ret same x false","fn is_fn x"," if different s \"function\""," if same x.constructor.name \"GeneratorFunction\"","fn is_fragment x","fn is_full x"," if not is_vec x"," ret not is_empty x","fn is_gn x"," if different x.constructor.name \"GeneratorFunction\"","fn is_identifier x"," let s front x"," if same s \"_\""," elseif is_alpha s","  if not is_alnum v","fn is_indented x","  if is_empty v","  let c front v","  if not is_space c","fn is_int x"," ret Number.isInteger x","fn is_ip x"," if is_ip4 x"," if is_ip6 x","fn is_ip4 x"," if different a.length 4","  if not is_digit v","  let n to_uint v","  if gt n 255","fn is_ip6 x"," let a split x \":\""," if lt a.length 3"," if gt a.length 8","  if contain v \"_\"","  if gt v.length 4","fn is_json x"," try","  json_decode x"," catch","fn is_last x:vec y:uint"," ret same n y","fn is_lisp x"," let a split x \"-\""," ret every a is_alnum","fn is_lit_char x"," if not match_l x \"'\""," if not match_r x \"'\""," let s strip_l x \"'\""," let s strip_r s \"'\""," if is_empty s"," let s concat quote s"," ret is_lit s","fn is_lit x"," if not is_json x"," let v json_decode x"," if not is_str v"," let s json_encode v"," ret same s x","fn is_ln x"," ret not is_txt x","fn is_lower x","  if not contain lower v","fn is_mail x"," let a split x \"@\""," if not is_pair a"," let user shift a"," let domain shift a"," if not is_user user"," if not is_domain domain","fn is_many x"," ret gt x.length 1","fn is_name x","fn is_node"," ret not is_browser","fn is_none x","fn is_noun x","fn is_null x"," ret same x null","fn is_num x"," if Number.isNaN x"," if same x Number.NEGATIVE_INFINITY"," if same x Number.POSITIVE_INFINITY"," ret same s \"number\"","fn is_numeric x"," if not is_num v","fn is_obj x"," ret same s \"object\"","fn is_pair x"," ret same x.length 2","fn is_punct x","  if not contain punct v","fn is_single x","fn is_space x"," let s trim x"," ret is_empty s","fn is_str x"," ret same s \"string\"","fn is_token x"," if is_atom x"," if is_comment x","fn is_trivia x","fn is_true x"," ret same x true","fn is_tuple x","  if is_identifier v","fn is_txt x","  ret fals"," ret contain x lf","fn is_uint x"," if not is_int x"," ret gte x 0","fn is_undef x"," ret same x undefined","fn is_upper x","  if not contain upper v","fn is_url x"," let s to_lower x"," if match_l s \"http://\""," elseif match_l s \"https://\"","  url_parse x","fn is_user x"," for split x \"-\"","  for split v \".\"","   if not is_alnum v","    ret false","fn is_vec x","fn is_word x"," if contain x \" \""," if contain x lf"," if contain x cr","fn is_xn x"," if is_fn x"," if is_gn x","fn is_rgb x"," if not is_uint x.r"," if not is_uint x.g"," if not is_uint x.b","fn join x:arr y","  ret join x lf"," check is_str y"," ret x.join y","fn json_decode x:str"," ret JSON.parse x","fn json_dump x:def"," ret JSON.stringify x null 1","fn json_encode x","  ret \"undefined\""," ret JSON.stringify x","fn log_append x:etc"," fn escape x:str","  forof x","   if is_alnum v","    push a v","   if is_punct v","   let s char_escape v","  ret implode a"," let parts arr"," for x","  if is_str v","   let s ansi_strip v","   push parts s","  let s inspect v false","  push parts s"," let pid pad_l process.pid \" \" 6"," let time time_get"," let date date_str time"," let time time_str time true"," let inputs join parts \" \""," let inputs split inputs"," let inputs map inputs escape"," let lines arr"," if is_empty inputs","  let s space pid date time","  push lines s","  forof inputs","   let s space pid date time v"," let content join lines"," let content concat content lf"," let base concat app \".txt\""," let dir \"log\""," let path path_concat dir base"," if not is_file path","  dir_make dir","  file_write path content"," let size file_size path"," let limit mul 16 1024 1024"," if lt size limit","  file_append path content"," let a file_load path"," let a split a"," let half div a.length 2"," let half trunc half"," shift a half"," append a lines"," let content join a"," file_write path content","fn log x:etc"," fn node_log x:etc","  let parts arr","   if is_str v","    push parts v","   let s inspect v","  let content join parts \" \"","  if is_empty content","   console.log \" \"","   forof split content","    let n tty_width","    let line ansi_head v n","    console.log line","  if log_file","   log_append x:etc"," if is_str output","   let s to_dump v","  let s join a \" \"","  let s concat s lf","  let s concat output s","  assign global.output s","  node_log x:etc","  if is_empty x","   console.log x:etc","fn lt x:def y:def"," ret inline \"n<0\"","fn lte x:def y:def"," ret inline \"n<=0\"","fn main"," var has_window true","  inline \"window\"","  assign has_window false"," if has_window","  assign window.global window","  assign global.has_window true","  assign global.has_window false"," assign global.zombie false"," assign global.start time_get"," assign global.lf \"\\n\""," assign global.cr \"\\r\""," assign global.crlf concat cr lf"," assign global.punct \"!\\\"#$%&'()*+,-./:;<=>?@[\\\\]^`{|}~\""," assign global.digit \"0123456789\""," assign global.lower \"abcdefghijklmnopqrstuvwxyz\""," assign global.upper to_upper lower"," assign global.output null"," assign global.verbose 0"," assign global.minute 60"," assign global.hour mul 60 minute"," assign global.day mul 24 hour"," assign global.week mul 7 day"," assign global.month mul 30 day"," assign global.year mul 12 month"," assign global.traces arr","  init_common","  fn on_load x:obj","   if same document.readyState \"complete\"","    init_common","    assign window.onload null","  assign window.onload on on_load","fn map x:arr y:fn","  let v y v","  check is_def v","fn match_l x:str y:str"," if is_empty y"," if gt y.length x.length"," let s slice_l x y.length"," ret same s y","fn match_r x:str y:str"," let s slice_r x y.length","fn match x:str y:str"," let s replace y \".\" \"\\\\.\""," let s replace s \"*\" \".*\""," let s concat \"^\" s \"$\""," let s new RegExp s"," ret s.test x","fn max x:etc"," ret Math.max x:etc","fn min x:etc"," ret Math.min x:etc","fn mod x:num y:num z:etc"," let r inline \"x%y\"","  ret mod r z:etc","fn mul x:num y:num z:etc"," let r inline \"x*y\"","  ret mul r z:etc","fn mute x:fn y:etc"," ret o.result","fn neq x:def y:def"," ret not eq x y","fn nop","fn obj_keys x:obj"," ret Object.keys x","fn obj_length x:obj"," let keys obj_keys x"," ret keys.length","fn obj_merge x:obj y:obj"," Object.assign x y","fn obj_order x:obj keys:etc"," for keys","  let value get x v","  put r v value"," forin x","  let v get x k","  if has r k","fn obj_push x:obj key:str val:def","  if same k key"," put r key val","fn obj_remove x:obj key:str","fn obj_unshift x:obj key:str val:def","fn obj_vals x:obj"," ret Object.values x","fn obj"," ret inline \"{}\"","fn on x:fn y:etc"," let fn value x"," let args y"," fn on_fn x:etc","  if zombie","  ret fn args:etc x:etc"," if zombie"," ret value on_fn","fn or x:bool y:bool z:etc"," let r inline \"x||y\"","  ret or r z:etc","fn pad_l x:cool padding length"," if is_uint x","  let s to_json x","  if is_undef padding","   if is_undef length","    ret pad_l s \"0\" 3","   ret pad_l s \"0\" length","  ret pad_l s padding length"," check is_str padding"," check is_uint length"," ret x.padStart length padding","fn pad_r x:cool padding length","    ret pad_r s \"0\" 3","   ret pad_r s \"0\" length","  ret pad_r s padding length"," ret x.padEnd length padding","fn paren x:str"," ret concat \"(\" x \")\"","fn partial x:fn y:etc"," fn result x:etc"," ret value result","fn path_concat x:str y:str z:etc"," let x strip_r x \"/\""," let y strip_l y \"/\""," let r concat x \"/\" y","  ret path_concat r z:etc","fn path_file x:str"," let s path_base x"," let a split s \".\"","  ret s"," drop a"," ret join a \".\"","fn path_fix x:str"," if match_r x \"/\""," ret concat x \"/\"","fn path_join x:arr"," ret join x \"/\"","fn path_split x:str"," ret split x \"/\"","fn path_strip x:str"," ret strip_r x \"/\"","fn path_unfix x:str","fn path_up x:str"," let a path_split x"," pop a"," ret path_join a","fn pop x:arr y","  ret pop x 1"," if same y 1","  let r back x","  remove x n 1","  ret value r"," remove x n y","fn prepend x:arr y:arr"," let a dup y"," reverse a","  unshift x v","fn profile x:xn y:etc"," var n null"," let before time_now","  assign r x y:etc"," elseif is_gn x","  let generator x y:etc","  while true","    assign r iterator.value"," let after time_now"," let time sub after before"," let time to_fixed time"," let time concat time \"s\""," let time to_lit time"," let time concat \"profile=\" time"," log x.name time","fn push x:arr y"," x.push y","fn put x:obj y:str z","  check same arguments.length 3"," set x y z","fn quote x:str"," ret concat \"\\\"\" x \"\\\"\"","fn random_str x:uint alnum"," if is_undef alnum","  ret random_str x true"," check is_bool alnum"," let range mul 26 256"," while lt a.length x","  let n random range","  if alnum","   if is_alnum c","    push a c","   push a c"," ret implode a","fn random x","  ret random Number.MAX_SAFE_INTEGER"," check gte x 0"," let r Math.random"," let r mul r x","  ret trunc r","fn record x:fn y:etc"," check is_null output"," assign global.output \"\""," var result null","  assign result x y:etc"," catch e","  assign global.output null","  throw e"," let s trim_r output"," assign r.result result"," assign r.output s","fn reject x:arr y:fn"," check is_arr x","  if y v","fn remove x:arr y:uint z","  ret remove x y 1"," check is_uint z"," check between y 0 x.length"," let n add y z"," check between n 0 x.length"," x.splice y z","fn repeat x:str y:uint"," ret x.repeat y","fn replace_rec x:str y:str z:str"," var r x"," while contain r y","  assign r replace r y z","fn replace x:vec y:str z:str","  let a split x y","  ret join a z","    push r z","fn report_html report:obj length"," if is_def length","  check is_uint length"," var pre report_render report","  assign pre txt_cut pre length"," let style concat \"font-family:\" font_family \";font-size:\" font_size"," let style to_lit style"," let body_open concat \"<body style=\" style \">\""," let pre concat \"<pre>\" pre \"</pre>\""," let title concat \"<title>\" report.title \"</title>\""," let html arr"," push html \"<!doctype html>\""," push html \"<html>\""," push html \"<head>\""," push html title"," push html \"</head>\""," push html body_open"," push html pre"," push html \"</body>\""," push html \"</html>\""," ret join html","fn report_init error query map"," if is_str error","  let stack error","  let lines split error","  let message front lines","  let errno null","  let error obj stack message errno","  ret report_init error query map"," check is_obj error"," if is_def query","  check is_obj query"," fn log_browser","  let location to_str location","  var referrer null","  if is_full document.referrer","   let url_referer url_parse document.referrer","   let url_location url_parse location","   if different url_referer.host url_location.host","    assign referrer document.referrer","  let browser browser_get","  let agent navigator.userAgent","  let uptime time_now","  let uptime time_delay uptime","  let o obj location referrer browser agent uptime","  let t to_tbl o"," fn log_server","  let url query.url.href","  let headers query.request.headers","  if has headers \"referrer\"","   assign referrer get headers \"referrer\"","  elseif has headers \"referer\"","   assign referrer get headers \"referer\"","  let remote query.remote","  let o obj url referrer remote uptime"," fn log_trace","  if is_empty traces","  flower \"trace\"","  forof traces","   log \">\" v"," fn log_backtrace stack:str map:obj","  let backtrace dbg_backtrace stack map","  if is_empty backtrace","  tbl_remove_column backtrace \"njs\"","  tbl_remove_column backtrace \"js\"","  let backtrace tbl_render backtrace","  let backtrace txt_prepend backtrace \"> \"","  flower \"backtrace\"","  log backtrace"," let stack error.stack"," let message error.message"," let type error.constructor.name"," let type to_lower type"," let title arr app"," if same type \"error\""," if same type \"object\"","  push title type"," push title message"," if is_browser","  push title location.hostname"," elseif is_node","  let errno error.errno","  if is_undef errno","  elseif is_null errno","  elseif same errno 0","   let errno concat \"errno=\" errno","   push title errno","  let host os_host","  push title host"," let title join title \" / \""," var browser \"\""," var server \"\""," let cs capture dbg_origin_xs stack \"cs\" map"," let backtrace capture log_backtrace stack map"," let js capture dbg_origin_xs stack \"js\" map"," var empty true","  assign browser capture log_browser","  assign empty false"," if is_obj query","  assign server capture log_server"," if is_full trace"," if is_full cs"," if is_full backtrace"," if gt verbose 0","  if is_full js","   assign empty false"," if empty","  trace \"No error stack.\""," let trace capture log_trace"," ret obj title app message browser server trace cs backtrace js","fn report_log report:obj"," flower_box report.title"," if is_full report.browser","  log report.browser"," if is_full report.server","  log report.server"," if is_full report.trace","  log report.trace"," if is_full report.cs","  log report.cs"," if is_full report.backtrace","  log report.backtrace","  if is_full report.js","   log report.js"," let end space \"end-report\" report.app \"/\" report.message"," flower end","fn report_render report:obj"," fn log_title","  let s paren report.title","  let s space \"An error has occured\" s","  let s concat s \".\"","  flower_box s"," let title capture log_title"," push a title","  push a \"\"","  push a report.browser","  push a report.server","  push a report.trace","  push a report.cs","  push a report.backtrace"," if is_full report.js","  push a report.js","gn resolve x:obj"," check is_obj x"," var done false"," var error null"," fn on_then x:def","  assign result x","  assign done true"," fn on_catch x","  check is_obj x","  assign error x"," let promise x.then on_then"," promise.catch on_catch"," while not done","  yield"," if is_obj error","  throw error"," ret result","fn reverse x:vec","  let r explode x","  reverse r","  let r implode r","  x.reverse","fn rgb_init r:uint g:uint b:uint"," ret obj r g b","fn round x:num"," ret Math.round x","fn salt x:str y","  ret salt x \"azertyuiop\""," let a1 explode x"," let a2 explode y"," while is_full a1","  if is_empty a2","   let a explode y","   append a2 a","  let c1 shift a1","  let c2 shift a2","  let n1 asc c1","  let n2 asc c2","  let n xor n1 n2","fn same x y"," ret inline \"x===y\"","fn scan x:str reducer delimiter"," if is_undef reducer","  ret scan x is_token"," check is_fn reducer"," if is_undef delimiter","  ret scan x reducer is_fragment"," check is_fn delimiter"," fn group x:arr reducer:fn","  let fragments dup x","  while is_full fragments","   let a reduce fragments reducer","   if is_full a","    let s implode a","    push r s","    shift fragments a.length","    let s shift fragments"," fn reduce x:arr reducer:fn","  check is_fn reducer","  check is_full x","  let r dup x","  while is_full r","   let s implode r","   if reducer s"," let a delimit x delimiter"," ret group a reducer","fn set x:obj y:str z","fn shift x:arr y","  ret shift x 1","  let r front x","  remove x 0 1"," remove x 0 y","fn shuffle x:arr","  let n random a.length","  let v at a n","  remove a n","fn silent x:fn y:etc"," let previous verbose"," assign verbose sub verbose 2"," var r null","  assign verbose previous"," assign verbose previous","gn sleep x:num"," let start time_now","  let elapsed time_now","  let elapsed sub elapsed start","  if gte elapsed x","fn slice_l x:vec y:uint"," ret slice x 0 y","fn slice_r x:vec y:uint"," ret slice x n y","fn slice x:vec index:uint length"," check lte index x.length"," if is_undef length","  let n sub x.length index","  ret slice x index n"," check lte length x.length"," let n add index length"," check lte n x.length"," let r x.slice index n"," check same r.length length","fn sort x:container y","  if is_undef y","   x.sort","   check is_fn y","   x.sort y","  fn compare x:obj y:obj","   ret cmp x.key y.key","   ret sort x compare","  check is_fn y","   let key k","   let value get x k","   let o obj key value","  sort a y","   let k v.key","   put r v.key v.value","fn space x:etc"," ret join x \" \"","fn split x:str y","  ret split x lf","  ret arr"," ret x.split y","fn squote x:str"," ret concat \"'\" x \"'\"","fn stop x","  ret stop \"stop\""," throw new Error x","fn str_indent x:str"," if is_blank x"," let s trim_l x"," ret sub x.length s.length","fn strip_l x:str y:str"," if match_l x y","  let n sub x.length y.length","  ret slice_r x n"," ret x","fn strip_r x:str y:str"," if match_r x y","  ret slice_l x n","fn sub x:num y:num z:etc"," let r inline \"x-y\"","  ret sub r z:etc","fn tail x:vec y:uint"," ret slice_r x y","fn tbl_column x:arr y:str","  let s get v y","  push r s","fn tbl_columns x:arr"," let first front x"," ret obj_keys first","fn tbl_index x:arr","  let v obj_unshift v \"#\" n","fn tbl_init x"," ret arr","fn tbl_pad_l x:arr column:str length","  var length 0","   var cell get v column","   if not is_str cell","    assign cell json_encode cell","   assign length max length cell.length","  ret tbl_pad_l x y length","  let cell get v column","  let cell pad_l cell \" \" length","  set v y cell","fn tbl_remove_column x:arr y:str"," let t dup x"," forof t","  let v obj_remove v y","fn tbl_rename_column x:arr y:str z:str","  let row v","  let o obj","  forin row","   let v get row k","   if same k y","    put o z v","   put o k v","  push x o","fn tbl_render x:arr"," fn stringify_tbl x:arr","   let row dup v","   forin v","    let v get row k","    if is_str v","    let s json_encode v","    set row k s","   push r row"," fn pad_column x:arr","   if is_num v","    let s to_fixed v","    push a s","   elseif is_str v","    stop","   assign length max length v.length","   if is_numeric v","    let s pad_l v \" \" length","    let s pad_r v \" \" length"," let tbl stringify_tbl x"," let titles tbl_columns tbl"," let columns arr"," forof titles","  let title v","  let column tbl_column tbl title","  unshift column title","  let column pad_column column","  push columns column"," var length 0"," forof columns","  let column v","  var n 0","  forof column","   assign n max n v.length","  assign length add length n"," assign length add length columns.length"," assign length dec length"," let separator repeat \"-\" length"," push a separator"," let header arr","  let s shift v","  push header s"," let s join header \" \""," push a s"," let first front columns"," for first","  let line arr","  forof columns","   let s at v i","   push line s","  let s join line \" \"","fn tbl_sort x:arr column:str"," fn compare x:obj y:obj","  let left get x column","  let right get y column","  ret cmp left right"," sort x compare","fn time_delay x:num"," let minute3 mul minute 3"," let hour3 mul hour 3"," let day3 mul day 3"," let month3 mul month 3"," let year3 mul year 3"," if lt x 10","  let n to_fixed x","  ret concat n \"s\""," if lt x minute3","  let n trunc x"," if lt x hour3","  let n div x minute","  ret concat n \"m\""," if lt x day3","  let n div x hour","  ret concat n \"h\""," if lt x month3","  let n div x day","  ret concat n \"d\""," if lt x year3","  let n div x month","  ret concat n \"mo\""," let n div x year"," let n trunc n"," ret concat n \"y\"","fn time_get"," let n Date.now"," ret div n 1000","fn time_hn x:num"," let now time_get"," if same x now","  ret \"now\""," if gt x now","  let n sub x now","  let s time_delay n","  ret concat \"in \" s"," let n sub now x"," let s time_delay n"," ret concat s \" ago\"","fn time_interval x:fn y","  ret time_interval x 0"," let fn on x"," let n mul y 1000"," setInterval fn n","fn time_now"," let n time_get"," ret sub n start","fn time_str x second","  ret time_str n second"," if is_undef second","  ret time_str x false"," let h o.getHours"," let h pad_l h \"0\" 2"," let m o.getMinutes"," let r concat h \"h\" m \"m\""," if not second"," let s o.getSeconds"," let s pad_l s \"0\" 2"," ret concat r s \"s\"","fn time_timeout x:fn y z:etc","  ret time_timeout x 0.01 z:etc"," check is_num y"," let fn on x z:etc"," setTimeout fn n","fn to_base36 x:uint"," ret x.toString 36","fn to_dump x"," let val clone x"," if is_arr val","  if is_empty val","   ret \"arr\"","  push a \"arr\"","  for val","   let sharp concat \"#\" i","   if is_ln s","    let s space \"\" sharp s","    let s2 space \"\" sharp","    let s indent s 2","    push a s2","  push a \"end\"","  ret join a"," elseif is_obj val","   ret \"obj\"","  push a \"obj\"","  forin val","   let v get val k","   var key k","   if not is_word key","    assign key to_lit key","    let s space \"\" key s","    let s2 space \"\" key"," elseif is_word val","  ret to_lit val"," elseif is_fn val","  ret space \"fn\" val.name","  ret json_encode val","fn to_fixed x:num y","  ret to_fixed x 2"," let a x.toFixed y"," let a split a \".\""," let integer front a"," var float back a"," let digits explode float"," while is_full digits","  let c back digits","  if different c \"0\"","  drop digits"," if is_empty digits","  ret integer"," assign float implode digits"," ret concat integer \".\" float","fn to_i x:str"," ret Number.parseInt x","fn to_int x:str"," let r to_num x"," check is_int r","fn to_json x:def"," ret json_encode x","fn to_lit x:str","fn to_lower x:str"," ret x.toLowerCase","fn to_num x:str"," let r json_decode x"," check is_num r","fn to_str x:def"," ret x.toString","fn to_tbl x:obj","  let key k","  let value get x k","  let o obj key value","fn to_uint x:str"," let r to_int x"," check is_uint r","fn to_upper x:str"," ret x.toUpperCase","fn trace x:etc"," if is_single x","  let first front x","  if is_str first","   let a split first","   if is_many a","    forof a","     trace v","  log \"trace>\" x:etc"," elseif same verbose 0","   if not is_str v","  push traces s","  if gt traces.length 64","   shift traces","fn trim_l x:str"," ret x.trimStart","fn trim_r x:str"," ret x.trimEnd","fn trim x:str"," ret x.trim","fn trunc x:num"," ret Math.trunc x","fn tty_width","  if is_batch","   ret 140","  let r process.stdout.columns","  check is_uint r","  ret 80","fn txt_compact x","  let a split x","  let a txt_compact a"," let s join x"," let a split s","  let first front a","  let first trim_r first","  if is_empty first","  if not is_empty v","  let last back r","  if is_empty last","fn txt_cut x y","  check is_uint y","  let a txt_cut a y","  let s head v y","fn txt_indent x","  let a txt_indent a","   push r s","   let s concat \" \" s","fn txt_prepend x y","  let a txt_prepend a y","  let s concat y v","fn txt_unindent x","  let a txt_unindent a"," var s join x"," while is_indented s","  forof split s","   if is_empty v","   let s slice v 1","  assign s join a"," ret split s","fn unaccent x:str"," let r replace x \"à\" \"a\""," let r replace r \"â\" \"a\""," let r replace r \"ä\" \"a\""," let r replace r \"æ\" \"ae\""," let r replace r \"ç\" \"c\""," let r replace r \"é\" \"e\""," let r replace r \"è\" \"e\""," let r replace r \"ê\" \"e\""," let r replace r \"ë\" \"e\""," let r replace r \"î\" \"i\""," let r replace r \"ï\" \"i\""," let r replace r \"ô\" \"o\""," let r replace r \"ö\" \"o\""," let r replace r \"œ\" \"oe\""," let r replace r \"ù\" \"u\""," let r replace r \"û\" \"u\""," let r replace r \"ü\" \"u\""," let r replace r \"ÿ\" \"y\""," let r replace r \"À\" \"A\""," let r replace r \"Â\" \"A\""," let r replace r \"Ä\" \"A\""," let r replace r \"Æ\" \"AE\""," let r replace r \"Ç\" \"C\""," let r replace r \"É\" \"E\""," let r replace r \"È\" \"E\""," let r replace r \"Ê\" \"E\""," let r replace r \"Ë\" \"E\""," let r replace r \"Î\" \"I\""," let r replace r \"Ï\" \"I\""," let r replace r \"Ô\" \"O\""," let r replace r \"Ö\" \"O\""," let r replace r \"Œ\" \"OE\""," let r replace r \"Ù\" \"U\""," let r replace r \"Û\" \"U\""," let r replace r \"Ü\" \"U\""," let r replace r \"Ÿ\" \"Y\"","fn unshift x:arr y"," x.unshift y","fn unwrap x:str","  ret json_decode x","  ret split x \".\"","  ret split x \":\"","fn url_beautify x:str"," let r strip_l x \"http://\""," let r strip_l r \"https://\""," let r path_unfix r","fn url_get x:etc","  ret http_get x:etc","  ret xhr_get x:etc","fn url_parse x:str"," let url new URL x"," let href url.href"," let protocol strip_r url.protocol \":\""," let user url.username"," let password url.password"," let host url.hostname"," let port url.port"," let path url.pathname"," let hash url.hash"," let args obj"," forof url.searchParams.keys","  var value url.searchParams.get v","  if is_json value","   assign value json_decode value","  put args v value"," ret obj href protocol user password host port path args hash","gn wait","fn xor x:num y:num z:etc"," let r inline \"x^y\"","  ret xor r z:etc","fn app_list"," forof dir_read \"src\" true","  let base path_base v","  let a split base \"-\"","  let prefix shift a","  if different prefix \"app\"","  let name join a \"-\"","  push r name","fn argv_context","  push r \"--verbose\""," elseif lt verbose 0","  push r \"--quiet\""," if is_color","  push r \"--color\""," if not log_file","  push r \"--no-log\"","fn beep"," os_detach \"play\" \"-n\" \"synth\" 0.1 \"sine\" 880 \"vol\" 0.5","fn deinit_node"," fn dir_empty x:str","  let paths dir_read x true","  ret is_empty paths"," let tmp path_tmp"," let tmp path_dir tmp"," fs_remove tmp"," let app path_up tmp"," if dir_empty app","  fs_remove app"," forof dir_load \"tmp\" true","  let modified fs_modified v","  let now time_get","  let age sub now modified","  if lt age week","  let dir dir_current","  let dir path_fix dir","  let path strip_l v dir","  let path to_lit path","  let path concat \"path=\" path","  let age time_delay age","  let age to_lit age","  let age concat \"age=\" age","  if is_dir v","   if dir_empty v","    fs_remove v","  elseif is_file v","   fs_remove v","  trace \"remove\" path age"," dir_change cwd","fn digest x:str"," file_save tmp x"," let r os_execute \"sha256sum\" \"--binary\" tmp"," let r split r \" \""," let r front r","fn dir_call x:str y:fn z:etc"," let dir dir_current"," dir_change x","  assign r y z:etc","  dir_change dir"," dir_change dir","fn dir_change x:str"," process.chdir x","fn dir_current"," ret process.cwd","fn dir_find x:str y:str"," forof dir_load x","  if match base y","fn dir_load x:str with_dirs"," if is_undef with_dirs","  ret dir_load x false"," check is_bool with_dirs"," forof dir_read x true","  if is_file v","  elseif is_dir v","   if with_dirs","   let a dir_load v with_dirs","   append r a","fn dir_make x:str"," let recursive true"," let option obj recursive"," fs.mkdirSync x option","fn dir_read x:str with_dirs","  ret dir_read x false"," let dir path_real x"," let a fs.readdirSync dir"," sort a","  let s path_concat dir v","  if is_file s","  if with_dirs","   if is_dir s","fn dir_reset x:str"," fs_remove x"," dir_make x","fn dir_size x:str","  let n file_size v","  assign r add r n","fn file_append x:str y:str"," fs.appendFileSync x y","fn file_load x:str"," let r file_read x","fn file_read x:str y","  ret file_read x \"utf8\""," let buffer fs.readFileSync x"," ret buffer.toString y","fn file_save x:str y:str"," if is_file x","  let s file_load x","  if same s y"," let dir path_dir x"," if not is_dir dir"," let content trim_r y"," file_write x content","fn file_size x:str"," let v fs.statSync x"," ret v.size","fn file_write x:str y:str"," fs.writeFileSync x y","fn fs_copy x:str y:str","  if is_dir y","   let base path_base x","   let path path_concat y base","   fs_copy x path"," let force true"," let o obj force recursive"," fs.cpSync x y o","fn fs_created x:str"," let r fs.statSync x"," let r div r.ctimeMs 1000","fn fs_modified x:str"," let r div r.mtimeMs 1000","fn fs_remove x:str"," fs.rmSync x o","gn http_get url:str with_headers"," if is_undef with_headers","  ret run http_get url false"," var result \"\""," var headers obj"," fn get_module url:str","  let s to_lower url","  if match_l s \"http:\"","   ret http","  elseif match_l s \"https:\"","   ret https"," fn on_request response:obj","  forin response.headers","   var v get response.headers k","    assign v to_num v","   put headers k v","  let on_data on on_data","  let on_end on on_end","  response.on \"data\" on_data","  response.on \"end\" on_end"," fn on_data x:obj","  let s to_str x","  assign result concat result s"," fn on_end"," fn on_error x:obj"," let module get_module url"," let request module.get url on_request"," let on_error on on_error"," request.on \"error\" on_error","  if done","  if is_obj error","   throw error"," if is_json result","  assign result json_decode result"," if with_headers","  ret obj result headers","fn init_node"," fn on_uncaught_exception error:obj message:str","  try","   let report report_init error","   assign report.title space report.title \"/\" message","   report_log report","   if is_remote","    report_mail report","   deinit_common","  catch e","   fallback_error \"on-uncaught-exception\" e error","  assign zombie true","  process.exit 1"," assign global.cp require \"child_process\""," assign global.crypto require \"crypto\""," assign global.fs require \"fs\""," assign global.http require \"http\""," assign global.https require \"https\""," assign global.os require \"os\""," assign global.path require \"path\""," assign global.tls require \"tls\""," assign global.tty require \"tty\""," assign global.util require \"util\""," assign global.color false"," assign global.log_file true"," assign global.binary process.execPath"," assign global.cwd dir_current"," assign global.script at process.argv 1"," assign global.script path_real script"," process.on \"uncaughtExceptionMonitor\" on_uncaught_exception"," let r slice process.argv 2"," if extract r \"--verbose\"","  assign verbose inc verbose"," if extract r \"--quiet\"","  assign verbose dec verbose"," if extract r \"--color\"","  assign color true"," if extract r \"--no-log\"","  assign log_file false"," let dir path_dir script"," dir_make tmp","fn inspect x color"," if is_undef color","  let color is_color","  ret inspect x color"," check is_bool color"," let showHidden false"," let depth null"," let colors color"," let maxArrayLength null"," let maxStringLength null"," let o obj showHidden depth colors maxArrayLength maxStringLength"," ret util.inspect x o","fn ip_host x:str"," let r silent os_execute \"host\" x"," let r back r"," if contain r \"not found\"","  ret null"," let r strip_r r \".\"","fn ip_list"," let s os_execute \"hostname\" \"--all-ip-addresses\""," ret split s \" \"","fn ip_v4"," forof ip_list","  if is_ip4 v","   ret v","fn ip_v6","  if is_ip6 v","fn is_batch"," if not is_node"," ret not is_interactive","fn is_color"," if color"," if is_interactive","fn is_dir x"," let throwIfNoEntry false"," let o obj throwIfNoEntry"," let o fs.statSync x o"," if is_undef o"," ret o.isDirectory","fn is_file x"," ret o.isFile","fn is_fs x"," ret is_def o","fn is_interactive"," ret process.stdout.isTTY","fn is_readable x","  var fd null","   assign fd fs.openSync x","  catch","  let n file_size x","  if gt n 0","   let buffer Buffer.alloc 1","   try","    fs.readSync fd buffer","   catch","    fs.closeSync fd","  fs.closeSync fd"," elseif is_dir x","   fs.readdirSync x","fn open x:str"," os_system \"xdg-open\" x","gn os_capture x y:etc"," var closed false"," var status null"," var out \"\""," var err \"\""," var buffer \"\""," fn print x:str","  assign buffer concat buffer x","  if not match_r buffer lf","  let line strip_r buffer lf","  log line","  let s ansi_strip buffer","  assign out concat out s","  assign buffer \"\""," fn on_out x:obj","  print s"," fn on_err x:obj","  let s ansi_strip s","  assign err concat err s"," fn on_close x","  if is_null x","  elseif is_uint x","  assign status x","  assign closed true"," let stdio arr \"inherit\" \"pipe\" \"pipe\""," let option obj stdio"," let child cp.spawn x y option"," check is_obj child"," fn on_sigint x:str","  child.kill x"," let on_sigint sigint on_sigint"," let on_out on on_out"," let on_err on on_err"," let on_close on on_close"," let stdout child.stdout"," let stderr child.stderr"," stdout.on \"data\" on_out"," stderr.on \"data\" on_err"," child.on \"close\" on_close"," while not closed"," if is_full buffer.out","  print lf"," let out trim_r out"," let err trim_r err"," process.removeListener \"SIGINT\" on_sigint"," os_log os_capture status x y:etc"," ret obj status out err","fn os_detach x:str y:etc"," let detached true"," let stdio \"ignore\""," let o obj detached stdio"," let r cp.spawn x y o"," r.unref","fn os_execute x:etc"," let o os_run x:etc"," let status o.status"," let out o.out"," let err o.err"," var display false"," if is_full err","  if same status 0","   let a slice_l x 2","   trace a:etc","  let s txt_prepend err \" err> \"","  trace s"," if is_full out","  push a out","  push a err"," let s join a"," ret trim_r s","fn os_home"," if is_root","  let name os_execute \"logname\"","  if contain name \" \"","  ret path_concat \"/home\" name"," ret os.homedir","fn os_host"," ret os.hostname","fn os_log call:xn status:int args:etc"," if same status 0"," var command front args"," var subcommand false"," if is_many args","  if same command \"sudo\"","   assign subcommand true","  elseif same command \"time\""," if subcommand","  let s at args 1","  assign command space command s"," let call replace call.name \"_\" \"-\""," let command to_lit command"," let status concat \"status=\" status"," trace call command status","gn os_prompt x:str y:etc"," let name x"," let out \"\""," let err \"\""," let buffer obj out err"," fn print key:str str:str","  let s get buffer key","  let s concat s str","  set buffer key s","  if not match_r s lf","  let s strip_r s lf","  let s txt_prepend s key","  set buffer key \"\"","  print \"out\" s","  print \"err\" s"," let child cp.spawn x y","  print \"out\" lf"," if is_full buffer.err","  print \"err\" lf"," os_log os_prompt status x y:etc"," ret status","fn os_ps"," let s os_execute \"ps\" \"aux\""," shift a","  let s replace_rec v \"  \" \" \"","  let pid at a 1","  let pid to_uint pid","  let path at a 10","  let args slice a 11","  let o obj pid path args","fn os_run x:str y:etc"," let maxBuffer mul 1 1024 1024 1024"," let encoding \"utf8\""," let option obj maxBuffer encoding"," let process cp.spawnSync x y option"," let out to_str process.stdout"," let err to_str process.stderr"," let status process.status"," os_log os_run status x y:etc","fn os_shell x:etc"," let command join x \" \""," ret cp.execSync command option","fn os_system x:str y:etc"," let stdio \"inherit\""," let result cp.spawnSync x y option"," let r result.status"," os_log os_system r x y:etc","fn os_user"," let o os.userInfo"," ret o.username","fn path_base x:str"," ret path.basename x","fn path_dir x:str"," ret path.dirname x","fn path_ext x:str"," let s path.extname x"," ret strip_l s \".\"","fn path_real x:str"," ret fs.realpathSync x","fn path_tmp x","  ret path_tmp \"tmp.txt\""," let pid to_str process.pid"," let dir path_split x"," pop dir"," let dir path_join dir"," let dir path_concat \"tmp\" app pid dir"," let dir path_strip dir"," let file path_file x"," let ext path_ext x","  let id random","  let id to_base36 id","  let id head id 6","  var base concat file \"-\" id","  if is_full ext","   assign base concat base \".\" ext","  let r path_concat dir base","  if not is_file r","fn report_mail report:obj"," let html report_html report 65"," mail author report.title html","fn sigint callback:fn"," fn on_sigint x:str n:uint","  let pid concat \"pid=\" process.pid","  let signal concat \"signal=\" x","  let n concat \"n=\" n","  log app pid signal n","  callback x"," let on_sigint on on_sigint"," process.once \"SIGINT\" on_sigint"," ret value on_sigint","fn to_base64 x:str"," let buffer Buffer.from x"," let r buffer.toString \"base64\"","fn ansi_encode str:str args:etc"," let ansi ansi_init args:etc"," ret concat ansi.escape \"[\" ansi.attr \";\" ansi.fore \";\" ansi.back \"m\" str ansi.escape \"[0m\"","fn ansi_get_attrs"," assign r.normal 0"," assign r.bold 1"," assign r.dim 2"," assign r.underline 4"," assign r.blink 5"," assign r.reverse 7","fn ansi_get_colors"," let list arr"," push list \"black 30 40\""," push list \"red 31 41\""," push list \"green 32 42\""," push list \"yellow 33 43\""," push list \"blue 34 44\""," push list \"magenta 35 45\""," push list \"cyan 36 46\""," push list \"gray 37 47\""," push list \"white 97 107\""," forof list","  let a split v \" \"","  let color shift a","  let fore shift a","  let fore to_uint fore","  let back shift a","  let back to_uint back","  let entry obj fore back","  put r color entry","fn ansi_head x:str length:uint"," let escape chr 27"," let at asc \"@\""," let tilde asc \"~\""," var visible 0"," var control 0","  if gte visible length","  let c1 shift a","  if different c1 escape","   assign buffer concat buffer c1","   assign visible inc visible","   let s char_escape c1","   assign buffer concat buffer s","   assign visible add visible s.length","  let c2 shift a","  var malformed false","  if different c2 \"[\"","   assign malformed true","  if malformed","   assign buffer concat buffer c2","   assign visible add visible s.length 1","  var body \"\"","  var closed false","  while is_full a","   let c3 shift a","   let n asc c3","   assign body concat body c3","   if between n at tilde","    assign closed true","  if not closed","   assign buffer concat buffer body","   assign visible add visible s.length 1 body.length","  assign buffer concat buffer c1 c2 body","  assign control add control 2 body.length"," let length min visible length"," let length add length control"," let r slice_l buffer length"," if gt control 0","  ret concat r escape \"[0m\"","fn ansi_init fore back attr"," if is_undef fore","  ret ansi_init \"black\" back attr"," if is_undef back","  ret ansi_init fore \"white\" attr"," if is_undef attr","  ret ansi_init fore back \"normal\""," fn get_fore x:def","   let colors ansi_get_colors","   let n get colors x","   let n n.fore","   ret to_str n","  elseif is_rgb x","   let n ansi_rgb x","   ret concat \"38;5;\" n"," fn get_back x:def","   let n n.back","   ret concat \"48;5;\" n"," fn get_attr x","  check is_str x","  let attrs ansi_get_attrs","  ret get attrs x"," let fore get_fore fore"," let back get_back back"," let attr get_attr attr"," ret obj escape fore back attr","fn ansi_rgb x:obj"," let r mul x.r 36"," let g mul x.g 6"," let b x.b"," ret add 16 r g b","fn ansi_strip x:str"," var input x"," var output \"\""," let open concat escape \"[\""," while is_full input","  let n1 find input open","  if lt n1 0","   assign output concat output input","  let n2 add n1 open.length","  let before slice_l input n1","  assign input slice input n2","  assign output concat output before","  while is_full input","   let c front input","   assign input slice input 1","   let n asc c"," ret output","fn app_token x:str"," let home os_home"," let path concat \".\" x"," let r path_concat home path"," let r file_load r"," let r base36_decode r"," let r salt r","fn archive_find x:str"," let date date_str"," let date replace date \"/\" \"-\""," let base concat file \"-\" date \".\" ext","  ret path"," var n 1","  let digit pad_l n","  let base concat file \"-\" date \"-\" digit \".\" ext","  let path path_concat dir base","  if is_file path","fn group_list"," let users user_list false"," fn find_users gid:uint","  forin users","   let v get users k","   if same v.gid gid","    push r v.name"," let lines file_load \"/etc/group\""," let lines split lines"," for lines","  let fields split v \":\"","  let name shift fields","  let password shift fields","  let gid shift fields","  let gid to_uint gid","  let users shift fields","  let users split users \",\"","  check is_empty fields","  let a find_users gid","  append users a","  let users dedup users","  sort users","  let o obj gid name users","  put r name o","fn init_shell"," assign global.login_merlin \"debian@mabynogy.org\""," assign global.author \"marc@abiven.eu\"","fn is_local"," let host os_host"," ret same host \"castle\"","fn is_remote"," ret not is_local","fn is_root"," let s os_user"," ret same s \"root\"","fn mime_type path:file"," let r os_execute \"file\" \"--mime\" \"--brief\" path"," let r strip_r r \";\"","fn mnt_clean x:str"," if is_readable x","  mnt_unmount x","  fs_remove x","fn mnt_unmount x"," ret os_execute \"fusermount\" \"-u\" x","fn password alnum","  ret password false"," fn make_password","  fornum 10","   let s random_char"," let special \"_-?\""," fn random_char","  let chars arr","   let a1 explode digit","   let a2 explode lower","   append chars a1","   append chars a2","   let a1 explode special","   let a2 explode digit","   let a3 explode lower","   let a4 explode upper","   append chars a3","   append chars a4","  let n random chars.length","  ret at chars n"," fn is_valid x","   ret is_alnum x","  var special false","  var alpha false","  var digit false","  var upper false","  var lower false","   if is_special v","    assign special true","   if is_alpha v","    assign alpha true","   if is_digit v","    assign digit true","   if is_upper v","    assign upper true","   if is_lower v","    assign lower true","  if not special","  if not alpha","  if not digit","  if not upper","  if not lower"," fn is_special x","   if not contain special v","  let r make_password","  if is_valid r","gn ssh_execute x:etc"," ret run ssh_pass x:etc","gn ssh_pass x:etc"," let args dup x"," let first shift args"," if is_str first","  ret run ssh_pass os_execute x:etc"," let arguments arr \"sshpass\" \"-p\" args:etc"," if is_fn first","  ret first arguments:etc"," elseif is_gn first","  ret run first arguments:etc","gn ssh_system x:str y:etc"," let r run ssh_pass x y:etc"," let a split r"," if is_full a","  log y:etc","  let a txt_prepend a \" > \"","  let s join a","fn sudo_append path:str data:str"," let content file_read path"," let content concat content data"," sudo_save path content","fn sudo_dir_make path:str"," if is_dir path"," sudo \"mkdir\" \"--parents\" path","fn sudo_read path:str"," let result os_run \"sudo\" \"cat\" path"," check same result.status 0"," check is_empty result.err"," ret result.out","fn sudo_remove path:str"," sudo \"rm\" \"--recursive\" \"--force\" path","fn sudo_save path:str data:str"," let dir path_dir path"," let base path_base path"," let tmp path_tmp base"," sudo_dir_make dir"," file_save tmp data"," sudo \"mv\" \"--force\" tmp path","fn sudo x:etc"," ret os_system \"sudo\" x:etc","fn user_created x:obj"," var r x.created"," let home x.home"," let last_log x.last_log"," if is_str home","  let n fs_created home","  if is_null r","   assign r n","   assign r min r n"," if is_num last_log","   assign r last_log","   assign r min r last_log","fn user_list with_group"," if is_undef with_group","  ret user_list true"," check is_bool with_group"," fn last_log user:str","  let lines os_execute \"last\" \"--fulltimes\" \"-R\" user","  let lines split lines","  let line front lines","  if is_empty line","   ret null","  let line replace_rec line \"  \" \" \"","  let parts split line \" \"","  shift parts 2","  let line join parts \" \"","  let parts split line \"-\"","  let line shift parts","  let line trim line","  let r date_decode line"," var groups null"," fn find_group gid:uint","  forin groups","   let v get groups k","    ret v.name"," fn find_groups name:str","   if contain v.users name"," let lines file_load \"/etc/passwd\""," if with_group","  assign groups group_list","  let uid shift fields","  let uid to_uint uid","  let comment shift fields","  let home shift fields","  let shell shift fields","  let human match_l home \"/home/\"","  var created null","  let last_log last_log name","  let o obj uid gid name comment home shell human created last_log","  if with_group","   let group find_group gid","   let groups find_groups name","   unshift groups group","   let groups dedup groups","   sort groups","   assign o.groups groups","   obj_order o \"uid\" \"gid\" \"name\" \"groups\"","fn app_home x:str"," let js app_make x"," let js replace js \"</script>\" \"<\\\\/script>\""," push lines \"<!doctype html>\""," push lines \"<html>\""," push lines \"<head>\""," push lines \"<meta charset=\\\"utf-8\\\">\""," push lines \"</head>\""," push lines \"<body>\""," push lines \"<script>\""," push lines js"," push lines \"</script>\""," push lines \"</body>\""," push lines \"</html>\""," ret join lines","fn app_make x:str"," let cpl cpl_init x"," let s to_lit x"," log \"make\" s"," cpl_include cpl"," let r cpl_generate cpl"," let tmp concat x \"-tmp.js\""," let tmp path_tmp tmp"," file_save tmp r"," let success cpl_check_syntax cpl tmp"," check success"," cpl_deinit cpl","fn ast_assign cpl:obj args:arr children:arr source:obj"," check is_empty children"," let left front args"," check is_name left"," let right slice args 1"," let right call_expr_right cpl right:etc"," let code concat left \"=\" right"," ret obj code source","fn ast_begin cpl:obj args:arr children:arr source:obj"," check is_empty args"," let r call_ast_block cpl children source"," if cpl_is_leaf cpl children","  check is_single r","  let node front r","  assign node.code trim node.code","fn ast_brk cpl:obj args:arr children:arr source:obj"," let code \"break\"","fn ast_call cpl:obj args:arr children:arr source:obj"," check is_full args"," let code expr_call cpl args:etc","fn ast_catch cpl:obj args:arr children:arr source:obj"," let block call_ast_block_top cpl children source"," if is_empty args","  let code \"catch\"","  let node obj code source","  push r node","  append r block"," check is_single args"," let identifier front args"," check is_identifier identifier"," let code paren identifier"," let code concat \"catch\" code"," let node obj code source"," push r node"," append r block","fn ast_check cpl:obj args:arr children:arr source:obj"," let code join args \",\""," let code paren code"," let code concat \"check\" code","fn ast_cont cpl:obj args:arr children:arr source:obj"," let code \"continue\"","fn ast_else cpl:obj args:arr children:arr source:obj"," let code \"else\""," let block call_ast_block cpl children source","fn ast_elseif cpl:obj args:arr children:arr source:obj"," ret call_ast_if cpl args children source \"else if\"","fn ast_fn cpl:obj args:arr children:arr source:obj"," ret call_ast_xn cpl args children source \"function\"","fn ast_forin cpl:obj args:arr children:arr source:obj"," ret call_ast_for cpl args children source \"k in\"","fn ast_fornum cpl:obj args:arr children:arr source:obj"," let code call_expr_right cpl args:etc"," let code concat \"let i=0;i<\" code \";i++\""," let code concat \"for\" code","fn ast_forof cpl:obj args:arr children:arr source:obj"," ret call_ast_for cpl args children source \"v of\"","fn ast_gn cpl:obj args:arr children:arr source:obj"," ret call_ast_xn cpl args children source \"function*\"","fn ast_if cpl:obj args:arr children:arr source:obj"," ret call_ast_if cpl args children source \"if\"","fn ast_include cpl:obj args:arr children:arr source:obj"," let path front args"," check is_lit path"," let path unwrap path","fn ast_inline cpl:obj args:arr children:arr source:obj"," let code front args"," check is_lit code"," let code unwrap code","fn ast_let cpl:obj args:arr children:arr source:obj"," check is_many args"," ret call_ast_declare cpl args children source \"const\"","fn ast_ret cpl:obj args:arr children:arr source:obj"," var code \"\"","  assign code \"return\"","  let right call_expr_right cpl args:etc","  assign code space \"return\" right","fn ast_run cpl:obj args:arr children:arr source:obj"," let code space \"yield*\" code","fn ast_throw cpl:obj args:arr children:arr source:obj"," let code space \"throw\" code","fn ast_try cpl:obj args:arr children:arr source:obj"," let code \"try\"","fn ast_var cpl:obj args:arr children:arr source:obj"," ret call_ast_declare cpl args children source \"let\"","fn ast_while cpl:obj args:arr children:arr source:obj"," let code concat \"while\" code","fn ast_yield cpl:obj args:arr children:arr source:obj","  let code \"yield\"","  ret obj code source"," let code space \"yield\" code","fn call_ast_block_top cpl:obj children:arr source:obj"," forof cpl_block cpl children","  let o dup v","  assign o.code indent o.code"," let code \"{\""," let open obj code source"," let code \"}\""," let close obj code source"," unshift r open"," push r close","fn call_ast_block cpl:obj children:arr source:obj"," if not cpl_is_leaf cpl children","  let code \"{\"","  let open obj code source","  let code \"}\"","  let close obj code source","  unshift r open","  push r close","fn call_ast_declare cpl:obj args:arr children:arr source:obj keyword:str"," let code slice args 1"," let code call_expr_right cpl code:etc"," let code concat identifier \"=\" code"," let code space keyword code","fn call_ast_for cpl:obj args:arr children:arr source:obj keyword:str"," let code space \"const\" keyword code","fn call_ast_if cpl:obj args:arr children:arr source:obj keyword:str"," let code concat keyword code","fn call_ast_xn cpl:obj args:arr children:arr source:obj keyword:str"," fn get_argument x:str","  if is_identifier x","  if is_tuple x","   let a unwrap x","   check is_pair a","   let name front a","   let etc back a","   check is_identifier name","   check same etc \"etc\"","   ret concat \"...\" name"," let name front args"," check is_name name"," let args slice args 1"," let parameters map args get_argument"," forof parameters","  let n count parameters v","  if same n 1","  let arg to_lit v","  let message space \"Argument\" arg \"defined\" n \"times\"","  stop message"," let parameters join parameters \",\""," let list paren parameters"," let code concat name list","fn cpl_block cpl:obj nodes:arr"," forof nodes","  let a cpl_translate cpl v","  append r a","fn cpl_check_fn cpl:obj nodes:arr path:str"," let file path_file path"," let name replace file \"-\" \"_\""," if same name \"check_arity\"","  if same v.operator \"fn\"","  elseif same v.operator \"gn\"","  let xn front v.args","  if same xn name"," let s_file to_lit file"," let message space \"The file\" s_file \"must define a function or a generator nammed\" s_name","fn cpl_check_syntax cpl:obj path"," if is_undef path","  ret cpl_check_syntax cpl cpl.target"," check is_str path"," let o os_run binary \"--trace-uncaught\" \"--trace-deprecation\" \"--check\" path"," check is_empty o.out"," if same o.status 0","  check is_empty o.err"," check cpl_log_error cpl o.err path","fn cpl_check cpl:obj nodes:arr"," fn visit nodes:arr","  forof nodes","   if not is_xn v.operator","    let node dup v","    assign node.children visit node.children","    push r node","   let node instrument v","   push r node"," fn instrument node:obj","  let r dup node","  let name front r.args","  let parameters slice r.args 1","  let arity get_arity parameters","  if same arity.operator \"gte\"","   if same arity.count 0","    assign r.children visit r.children","    ret r","  let operator \"check_arity\"","  let count to_str arity.count","  let s_operator to_lit arity.operator","  let args arr s_operator \"arguments.length\" count","  let children arr","  let source dup r.source","  let node obj operator args children source","  unshift r.children node","  reverse parameters","  clear r.args","  forof parameters","   if is_identifier v","    unshift r.args v","   check is_tuple v","   let a unwrap v","   let identifier at a 0","   let type at a 1","   if same type \"etc\"","   unshift r.args identifier","   let s_identifier to_lit identifier","   let s_type to_lit type","   let is concat \"is_\" type","   let operator \"check_arg\"","   let args arr is identifier s_identifier s_type","   let children arr","   let source dup r.source","   let node obj operator args children source","   unshift r.children node","  unshift r.args name","  assign r.children visit r.children"," fn get_arity args:arr","  var operator \"same\"","  var count 0","  forof args","   if is_tuple v","    let a unwrap v","    let type at a 1","    if same type \"etc\"","     assign operator \"gte\"","   elseif is_identifier v","    assign operator \"gte\"","   assign count inc count","  ret obj operator count"," fn is_xn x","  if same x \"fn\"","  if same x \"gn\""," ret visit nodes","fn cpl_compile cpl:obj path:str"," let nodes cpl_load cpl path"," let nodes cpl_tokenize cpl nodes"," let nodes cpl_fold cpl nodes"," cpl_check_fn cpl nodes path"," let nodes cpl_check cpl nodes"," var nodes cpl_for cpl nodes","  assign nodes cpl_scope cpl nodes","  assign nodes cpl_block cpl nodes","  cpl_dump cpl"," ret nodes","fn cpl_deinit cpl:obj"," let s json_dump cpl.cache"," file_save cpl.path s","fn cpl_dump cpl:obj"," check is_obj cpl"," fn dump_ast node:obj","  let args node.args","  let children node.children","  let a3 arr","  push a2 node.operator","  append a2 args","  forof a2","   if is_token v","    push a3 v","    let s to_lit v","    push a3 s","  let cs space a3:etc","  let source node.source","  let path source.path","  let ncs source.index","  let ncs inc ncs","  let o obj path ncs cs","  forof children","   let t dump_ast v","   forof t","    assign v.cs indent v.cs","   append r t","  if is_full children","   let cs \"end\"","   let o obj path ncs cs","   push r o"," for cpl.stack","  let frame concat \"#\" n","  let title space \"compiler frame\" frame","  let s dump_ast v","  let s tbl_render s","fn cpl_fold cpl:obj nodes:arr","  let parent shift nodes","  let indent parent.indent","  let descendants arr","  while is_full nodes","   let o front nodes","   if gt o.indent indent","    shift nodes","    push descendants o","  while is_full descendants","   let o visit descendants","   push children o","  let operator parent.operator","  let args parent.args","  let source parent.source","  ret obj operator args children source"," let nodes dup nodes"," while is_full nodes","  let o visit nodes","fn cpl_for cpl:obj nodes:arr","   if different v.operator \"for\"","   let nodes generate v","   append r nodes"," fn generate node:obj","  let operator \"let\"","  let args arr \"_a\" args:etc","  let source dup node.source","  let node2 obj operator args children source","  push r node2","  let operator \"forin\"","  let args arr \"_a\"","  let children visit node.children","  let node3 obj operator args children source","  push r node3","  let args arr \"v\" \"at\" \"_a\" \"i\"","  let node4 obj operator args children source","  unshift node3.children node4","  let args arr \"i\" \"to_i\" \"k\"","  let node5 obj operator args children source","  unshift node3.children node5","fn cpl_generate cpl:obj"," let pool arr"," fn get_index x:str","  let r find pool x","  if gte r 0","  let r pool.length","  push pool x"," forof cpl.out","  push a v.code"," let relatives arr"," let indices arr","  let source v.source","  if not contain paths path","   push paths path","  let n get_index path","  push relatives n","  push indices source.index"," let contents obj"," forof paths","  let key get_index v","  let key to_str key","  let content cpl_uncomment cpl v","  let value arr","  forof split content","   let index get_index v","   push value index","  put contents key value"," let app to_lit cpl.app"," let app concat \"const app=\" app"," push a app"," let compile time_get"," let compile trunc compile"," let compile concat \"const compile=\" compile"," push a compile"," let pool json_encode pool"," let pool concat \"const pool=\" pool"," push a pool"," let relatives json_encode relatives"," let relatives concat \"const relatives=\" relatives"," push a relatives"," let indices json_encode indices"," let indices concat \"const indices=\" indices"," push a indices"," let contents json_encode contents"," let contents concat \"const contents=\" contents"," push a contents"," let fns join cpl.fns \",\""," let fns brace fns"," let fns concat \"const fns=\" fns"," push a fns"," push a \"main()\"","fn cpl_include cpl:obj"," fn compile_cache path:str","  let relative path_real \"src\"","  let relative path_fix relative","  let relative strip_l path relative","  let cache cpl.cache.files","  let modified fs_modified path","  var recompile false","  if has cache relative","   let entry get cache relative","   if different entry.modified modified","    assign recompile true","   assign recompile true","  if not recompile","   let nodes entry.nodes","   declare_fn path nodes","   ret nodes","  let s_relative to_lit relative","  let s_relative concat \"path=\" s_relative","  let s_modified time_hn modified","  let s_modified to_lit s_modified","  let s_modified concat \"modified=\" s_modified","  trace \"compile\" s_relative s_modified","  let nodes cpl_compile cpl path","  declare_fn path nodes","  let entry obj modified nodes","  set cache relative entry","  ret nodes"," fn declare_fn path:str nodes:arr","  if is_empty nodes","  let fn path_file path","  let fn replace fn \"-\" \"_\"","  push cpl.fns fn"," fn get_files x:arr","   let a dir_load v"," fn get_includes x:str","  let dir get_app_dir x","  let a path_concat dir \"include.txt\"","  let a file_load a","  forof split a","   let s path_concat \"src\" v","  push r dir"," fn get_app_dir x","  let r concat \"src/app-\" x","  if is_dir r","  let r concat \"src/spa-\" x"," let includes get_includes cpl.app"," let files get_files includes"," forof files","  let ext path_ext v","  if different ext \"cs\"","  let nodes compile_cache v","  append cpl.out nodes","fn cpl_init app:str"," let path \"cache.txt\""," fn load_cache","   let s file_load path","   ret json_decode s","  let scans obj","  let files obj","  ret obj scans files"," let asts fn_select \"ast_\""," let exprs fn_select \"expr_\""," let fns arr"," let stack arr"," let out arr"," let target concat \"out-\" app \".js\""," let cache load_cache"," ret obj app asts exprs fns files stack out target path cache","fn cpl_is_call cpl:obj token:str"," if same token \"call\""," forin cpl.asts","  if same k token","fn cpl_is_leaf cpl:obj nodes:arr"," if not is_single nodes"," let node front nodes"," let operator node.operator"," if cpl_is_call cpl operator"," let operators arr \"brk\" \"check\" \"cont\" \"inline\" \"ret\" \"run\" \"throw\" \"yield\""," ret contain operators operator","fn cpl_load cpl:obj path:str"," let path2 dir_current"," let path2 path_concat path2 \"src\""," let path2 path_fix path2"," let path2 strip_l path path2"," let lines cpl_uncomment cpl path2","  let path path2","  let index i","  let code v","  let source obj path index","  let o obj code source","fn cpl_log_error cpl:obj err:str path","  ret cpl_log_error cpl err cpl.target"," fn parse_error cpl:obj path:str err:str","  let s txt_compact err","  let lines split s","  let line_js shift lines","  let line_js split line_js \":\"","  let line_js back line_js","  let line_js to_uint line_js","  shift lines 3","  flower message","  let line line_js","  let o obj line path","  if gt line_js cpl.out.length","  let index dec line_js","  let o at cpl.out index","  let source o.source","  let content cpl_uncomment cpl source.path","  let content split content","  let line_cs inc source.index","  let s dbg_origin content line_cs \"\"","  let content dbg_source path","  let s dbg_origin content line_js \"\"","  let stack arr","  let s shift lines","  push stack s","  while is_full lines","   let s shift lines","   let s trim s","   if not match_l s \"at\"","   push stack s","  let stack join stack","  let map cpl_source_map cpl","  let report report_init stack undefined map","  report_log report","  parse_error cpl path err","fn cpl_scan cpl:obj str:str"," fn is_complex x","  if contain x \"//\"","  if contain x \"\\\"\""," let s trim str"," if is_complex s","  let cache cpl.cache.scans","  if has cache s","   let r get cache s","   let r dup r","  let r scan s","  let r reject r is_trivia","  let a dup r","  put cache s a"," let r split s \" \""," let r reject r is_empty","fn cpl_scope cpl:obj nodes:arr","  let nodes dup nodes","   let node shift nodes","   var a null","    assign a resolve node nodes","   catch e","    unshift cpl.stack node","    throw e"," fn resolve node:obj rest:arr","  let operator node.operator","  let declare operator","  if is_declare operator","   let name front args","   let rvalue slice args 1","   check is_str name","   check is_arr rvalue","   check is_full rvalue","   let operator \"let\"","   let args arr \"_\" rvalue:etc","   let node2 obj operator args children source","   push r node2","   let operator \"begin\"","   let args arr","   let node3 obj operator args children source","   push r node3","   let operator declare","   let args arr name \"_\"","   let node4 obj operator args children source","   push node3.children node4","   if is_full rest","    let operator \"begin\"","    let args arr","    let children visit rest","    let node5 obj operator args children source","    push node3.children node5","    clear rest","  elseif is_for operator","   let args arr \"_\" args:etc","   let args arr \"_\"","   let children visit node.children"," fn is_declare operator","  if same operator \"let\"","  if same operator \"var\""," fn is_for operator","  if same operator \"forof\"","  if same operator \"forin\"","  if same operator \"fornum\"","fn cpl_source_map cpl:obj"," let script path_real cpl.target"," forin cpl.files","  let v get cpl.files k","  let a split v","  put files k a","  let path v.source.path","  let index v.source.index","  let js v.code"," let o obj script files source"," ret dup o","fn cpl_tokenize cpl:obj nodes:arr","  let code v.code","  let source dup v.source","  let indent str_indent code","  let args cpl_scan cpl code","  let operator shift args","  if same operator \"end\"","   if is_empty args","  let node obj indent operator args children source","fn cpl_translate cpl:obj node:obj"," fn translate cpl:obj operator:str args:arr children:arr source:obj","  forin cpl.asts","   if different k operator","   let ast get cpl.asts k","   let r ast cpl args children source","   if is_arr r","   check is_obj r","   ret arr r","  let args arr operator args:etc","  let r ast_call cpl args children source","  if is_arr r","  check is_obj r","  ret arr r"," let args node.args"," let children node.children"," let source node.source","  ret translate cpl operator args children source","  unshift cpl.stack node","fn cpl_uncomment cpl:obj path:str"," if has cpl.files path","  ret get cpl.files path"," let path_real path_concat \"src\" path"," let content file_load path_real"," forof split content","  let indent str_indent v","  let tokens cpl_scan cpl v","  if is_empty tokens","   push r \"\"","  let indent repeat \" \" indent","  let line join tokens \" \"","  let line concat indent line","  push r line"," put cpl.files path r","fn call_expr_arg cpl:obj x:str","  let a unwrap x","  check is_pair a","  let name front a","  let etc back a","  check is_identifier name","  check same etc \"etc\"","  ret concat \"...\" name"," let message space \"Invalid argument\" s","fn call_expr_right cpl:obj x y:etc","  if same x \"arr\"","  elseif same x \"obj\"","  elseif same x \"_\"","  elseif same x \"null\"","  elseif same x \"true\"","  elseif same x \"false\"","  elseif is_numeric x","  elseif is_lit x","   let condition paren x","   let condition concat \"is_fn\" condition","   let call concat x \"()\"","   ret concat condition \"?\" call \":\" x"," ret call_expr_rvalue cpl x y:etc","fn call_expr_rvalue cpl:obj x:etc","  if same first \"arr\"","   ret expr_arr cpl","  elseif same first \"obj\"","   ret expr_obj cpl","   ret first"," let args slice x 1"," if has cpl.exprs first","  let fn get cpl.exprs first","  ret fn cpl args:etc"," ret expr_call cpl x:etc","fn expr_arr cpl:obj x:etc"," let fn partial call_expr_arg cpl"," let args map x fn"," let s join args \",\""," ret bracket s","fn expr_call cpl:obj x:name y:etc"," let args map y fn"," let args join args \",\""," let list paren args"," ret concat x list","fn expr_iif cpl:obj x:arg y:arg z:arg a:etc"," check is_empty a"," ret concat x \"?\" y \":\" z","fn expr_in cpl:obj x:identifier y:identifier z:etc"," check is_empty z"," ret space y \"in\" x","fn expr_inline cpl:obj x:str"," ret unwrap x","fn expr_instanceof cpl:obj x:name y:identifier z:etc"," ret space x \"instanceof\" y","fn expr_new cpl:obj x:etc"," let rvalue call_expr_rvalue cpl x:etc"," ret space \"new\" rvalue","fn expr_not cpl:obj x:etc"," let right call_expr_right cpl x:etc"," let right paren right"," ret concat \"!\" right","fn expr_obj cpl:obj x:etc"," check every x is_identifier"," let s join x \",\""," ret brace s","fn expr_run cpl:obj x:etc"," let call expr_call cpl x:etc"," ret space \"yield*\" call","fn expr_value cpl:obj x:str y:etc"," check is_empty y","gn init x:etc"," fn is_app x","  let base concat \"app-\" x","  let path path_concat \"src\" base","  ret is_dir path"," let apps app_list","  dump apps"," let app shift args"," if not is_app app"," var run true"," if extract args \"--compile\"","  assign run false"," let cpl cpl_init app"," let code cpl_generate cpl"," file_save cpl.target code"," if not cpl_check_syntax cpl"," if not run"," let usage_path concat \"usage-\" process.pid \".txt\""," let usage_path path_tmp \"usage.txt\""," let output concat \"--output=\" usage_path"," let time arr \"time\" \"--format=%M\" output"," let context argv_context"," let args arr time:etc binary \"--trace-uncaught\" \"--trace-deprecation\" cpl.target context:etc args:etc"," let args dedup args"," let o run os_capture args:etc"," if different status 0","  let s concat \"status=\" status","  log app s","  if not cpl_log_error cpl err","   let s txt_prepend err \"make-error> \"","   log s"," let usage file_load usage_path"," fs_remove usage_path","  let usage split usage","  let usage back usage","  let usage to_uint usage","  let usage mul usage 1024","  let usage byte_size usage","  let usage to_lit usage","  let usage concat \"usage=\" usage","  log app usage"]
const relatives=[0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,40,40,40,40,40,40,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,44,44,44,44,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,46,46,46,46,46,46,46,46,46,46,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,49,49,49,49,49,49,49,49,49,49,49,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,54,54,54,54,54,54,54,55,55,55,55,55,55,55,55,55,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,61,61,61,61,61,61,61,62,62,62,62,62,62,63,63,63,63,63,63,63,63,63,63,63,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,65,65,65,65,65,65,65,65,65,65,65,66,66,66,66,66,66,66,66,66,66,66,67,67,67,67,67,67,67,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,69,69,69,69,69,69,69,69,69,69,70,70,70,70,70,70,71,71,71,71,71,71,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,74,74,74,74,74,74,74,74,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,78,78,78,78,78,78,78,78,78,78,78,78,78,78,79,79,79,79,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,81,81,81,81,81,81,81,81,82,82,82,82,82,82,82,82,83,83,83,83,83,84,84,84,84,84,84,85,85,85,85,85,85,86,86,86,86,86,86,86,86,86,86,87,87,87,87,87,87,87,87,88,88,88,88,88,88,88,88,89,89,89,89,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,92,92,92,92,92,92,92,92,92,92,92,92,92,92,93,93,93,93,94,94,94,94,94,94,94,94,94,94,94,94,94,94,95,95,95,95,95,95,95,95,96,96,96,96,96,96,97,97,97,97,97,97,97,97,97,97,97,97,97,97,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,100,100,100,100,101,101,101,101,101,101,101,101,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,105,105,105,105,105,105,105,105,105,105,105,106,106,106,106,106,106,106,106,106,106,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,108,108,108,108,108,108,108,108,108,108,108,108,108,108,108,108,108,108,108,108,109,109,109,109,109,109,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,112,112,112,112,112,112,113,113,113,113,113,113,113,113,113,113,114,114,114,114,114,115,115,115,115,115,115,115,115,116,116,116,116,116,116,116,116,117,117,117,117,118,118,118,118,118,118,118,118,118,118,118,118,118,118,119,119,119,119,119,119,119,119,119,119,119,119,119,119,119,119,119,119,119,119,120,120,120,120,120,120,120,120,120,120,121,121,121,121,121,121,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,123,123,123,123,123,123,124,124,124,124,124,124,124,124,124,124,124,124,125,125,125,125,125,125,125,125,126,126,126,126,126,126,126,126,127,127,127,127,127,127,127,127,128,128,128,128,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,130,130,130,130,130,130,131,131,131,131,131,131,132,132,132,132,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,135,135,135,135,135,135,135,135,135,135,135,135,135,135,135,135,135,135,135,135,135,135,135,135,135,135,135,135,135,135,135,135,135,135,135,135,135,135,135,135,135,135,135,135,135,135,135,135,135,135,135,135,135,135,135,135,136,136,136,136,136,136,136,136,137,137,137,137,137,137,137,137,137,137,137,137,137,137,138,138,138,138,138,138,138,138,139,139,139,139,139,139,139,139,139,139,140,140,140,140,140,140,140,140,140,141,141,141,141,141,141,142,142,142,142,142,142,143,143,143,143,143,143,143,143,143,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,146,146,146,146,146,146,146,146,146,146,146,147,147,147,147,147,147,147,147,147,147,147,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,153,153,153,153,154,154,154,154,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,157,157,157,157,157,157,157,157,157,157,158,158,158,158,158,158,158,159,159,159,159,160,160,160,160,160,160,161,161,161,161,161,161,161,161,161,161,162,162,162,162,162,162,162,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,167,167,167,167,167,167,168,168,168,168,168,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,173,173,173,173,173,173,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,177,177,177,177,177,177,177,177,178,178,178,178,178,178,179,179,179,179,179,179,180,180,180,180,180,180,181,181,181,181,181,181,182,182,182,182,182,182,182,182,182,182,182,182,182,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,183,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,186,186,186,186,186,186,186,186,187,187,187,187,187,187,187,187,187,187,187,188,188,188,188,188,188,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,194,194,194,194,194,194,194,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,203,203,203,203,203,203,203,203,204,204,204,204,204,204,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,206,206,206,206,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,208,208,208,208,208,208,208,208,208,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,213,213,213,213,213,213,213,214,214,214,214,214,214,214,214,214,214,214,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,217,217,217,217,218,218,218,218,218,218,218,218,218,218,219,219,219,219,219,219,220,220,220,220,220,220,221,221,221,221,221,221,221,221,221,221,221,221,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,223,223,223,223,223,223,223,223,223,223,223,223,223,223,223,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,227,227,227,227,227,227,227,227,227,227,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,229,229,229,229,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,236,236,236,236,236,236,236,236,236,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,239,239,239,239,239,239,239,239,239,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,242,242,242,242,242,242,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,245,245,245,245,245,245,246,246,246,246,246,246,246,246,246,246,246,246,246,247,247,247,247,247,247,248,248,248,248,248,248,249,249,249,249,249,249,250,250,250,250,250,250,250,250,250,250,250,250,250,251,251,251,251,251,251,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,253,253,253,253,253,253,253,253,253,253,253,253,253,254,254,254,254,254,254,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,256,256,256,256,256,256,257,257,257,257,257,257,258,258,258,258,258,258,259,259,259,259,259,259,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,262,262,262,262,262,262,262,262,262,262,262,262,262,262,262,262,262,262,262,262,262,262,262,262,262,262,262,262,262,262,262,262,262,262,262,262,262,262,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,267,267,267,267,267,267,267,267,268,268,268,268,268,268,268,268,268,268,268,268,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,270,270,270,270,270,270,270,270,270,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,272,272,272,272,272,272,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,276,276,276,276,276,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,280,280,280,280,280,280,281,281,281,281,281,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,286,286,286,286,286,286,286,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,288,288,288,288,288,288,288,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,290,290,290,290,290,290,290,290,290,290,290,290,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,292,292,292,292,292,292,292,292,292,292,293,293,293,293,293,293,293,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,297,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,302,302,302,302,302,302,302,302,302,303,303,303,303,303,303,303,303,303,303,303,303,303,304,304,304,304,304,304,304,304,304,304,304,304,304,305,305,305,305,305,305,305,306,306,306,306,306,306,306,306,306,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,310,310,310,310,310,310,310,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,312,312,312,312,312,312,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,316,316,316,316,316,316,316,316,316,316,316,316,316,316,316,316,316,317,317,317,317,317,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,324,324,324,324,324,324,324,324,324,325,325,325,325,325,325,326,326,326,326,326,326,327,327,327,327,327,327,327,327,327,327,328,328,328,328,328,328,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,330,330,330,330,330,330,330,330,330,330,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,333,333,333,333,333,333,333,333,333,333,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,341,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,343,343,343,343,343,343,344,344,344,344,344,344,344,344,344,345,345,345,345,345,346,346,346,346,346,346,346,346,346,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,348,348,348,348,348,348,348,348,348,348,348,348,349,349,349,349,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,351,351,351,351,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,355,355,355,355,355,355,355,355,356,356,356,356,356,356,356,356,356,356,356,356,356,356,357,357,357,357,357,357,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,359,359,359,359,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,372,372,372,372,372,372,372,372,372,373,373,373,373,373,373,373,373,373,374,374,374,374,374,374,374,374,374,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,376,376,376,376,376,376,376,376,376,377,377,377,377,377,377,377,377,377,378,378,378,378,378,378,378,378,378,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,381,381,381,381,381,381,381,381,381,381,381,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,386,386,386,386,386,386,386,386,386,386,386,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,395,395,395,395,395,395,395,395,395,395,395,395,395,395,395,395,395,395,395,395,395,395,395,395,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,397,397,397,397,397,397,397,397,397,397,397,397,397,397,397,397,397,397,397,397,397,397,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,400,400,400,400,400,400,400,400,400,400,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,422,422,422,422,422,422,422,422,422,422,423,423,423,423,423,423,423,423,423,424,424,424,424,424,424,424,425,425,425,425,425,425,425,425,425,426,426,426,426,426,426,426,426,426,426,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,428,428,428,428,428,428,428,428,428,428,428,429,429,429,429,429,429,429,429,429,429,430,430,430,430,430,430,430,430,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431]
const indices=[0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,3,5,6,8,1,1,0,0,0,0,0,1,2,4,5,7,7,7,7,8,8,8,8,10,11,13,8,8,7,7,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,5,5,5,5,7,9,9,9,9,10,10,10,10,11,11,11,11,13,14,16,16,16,16,18,16,16,11,11,10,10,9,9,5,5,4,21,2,2,1,1,0,0,0,0,0,1,1,1,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,6,6,5,5,4,4,3,11,3,1,1,0,0,0,0,0,0,0,1,3,4,6,7,9,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,6,6,7,7,7,9,7,6,12,12,13,13,13,13,14,14,14,14,15,15,15,17,15,14,14,13,13,12,20,20,21,21,21,21,22,22,22,22,23,23,23,25,23,22,22,21,21,20,28,28,29,29,29,29,30,30,30,30,31,31,31,33,31,30,30,29,29,28,36,36,36,36,37,37,37,37,38,38,38,40,38,37,37,36,36,4,4,3,3,2,2,1,1,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,5,3,2,2,1,1,0,0,0,1,1,1,1,3,4,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,15,13,12,12,11,11,10,10,9,9,8,8,7,7,6,6,1,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,0,0,1,1,2,3,1,4,4,5,5,5,5,7,8,10,10,10,10,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,23,21,20,20,19,19,18,18,17,17,16,16,15,15,14,14,13,13,12,24,24,25,25,25,25,26,26,26,26,27,27,27,29,27,26,26,25,25,24,10,10,5,5,4,33,0,0,0,0,0,1,3,0,0,0,0,0,1,0,0,0,1,2,4,4,4,4,6,6,7,8,10,10,11,11,11,11,13,13,13,13,14,14,15,16,14,19,19,19,21,19,13,24,13,11,11,10,25,25,26,26,26,26,28,28,28,28,29,29,29,29,31,31,32,33,31,36,36,36,38,36,29,29,28,41,28,26,26,25,42,43,6,46,4,4,0,0,0,0,0,0,1,2,4,4,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,11,12,9,9,8,8,7,7,6,15,6,5,4,19,19,20,20,21,21,21,21,22,22,22,22,24,24,24,24,25,25,25,25,27,27,27,27,28,28,28,28,29,29,29,29,30,30,30,30,32,33,35,35,35,35,36,36,36,36,37,37,37,37,39,40,37,37,36,36,35,35,30,30,29,29,28,28,27,43,27,25,25,24,24,22,22,21,21,20,19,47,48,50,51,53,0,0,0,0,0,1,1,2,3,5,6,8,9,11,12,14,1,17,17,17,17,19,19,19,19,20,20,21,23,20,26,26,26,26,27,27,27,27,28,28,28,28,30,30,30,31,31,31,32,32,33,35,32,38,38,38,38,40,41,38,38,28,28,27,27,26,26,19,44,19,17,17,0,0,0,1,0,0,0,0,0,1,2,4,4,5,7,4,8,9,10,10,11,11,11,11,12,12,12,12,14,15,12,12,11,18,11,10,19,20,0,0,0,0,0,0,1,1,1,1,3,3,3,3,4,4,5,4,3,8,3,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,8,6,6,5,5,5,5,5,5,5,5,4,4,4,4,4,12,4,4,4,2,2,1,1,0,0,0,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,8,8,9,9,9,9,11,12,13,14,15,16,9,9,8,19,19,19,19,20,20,20,22,20,19,19,6,6,5,5,4,4,0,0,0,0,0,0,1,2,4,5,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,12,12,13,13,13,13,15,16,17,18,19,20,13,13,12,23,23,23,23,24,24,24,26,24,23,23,10,10,9,9,8,8,7,7,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,5,5,5,7,5,4,4,2,2,1,1,0,0,0,1,1,2,2,2,4,2,1,7,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,18,16,15,15,14,14,13,13,12,12,11,11,10,10,9,9,0,0,0,1,1,2,2,2,4,2,1,7,9,9,10,10,10,12,10,9,15,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,24,25,23,28,28,28,28,29,29,29,29,30,30,30,30,31,31,31,31,33,34,36,36,36,36,38,38,39,38,41,42,44,44,44,44,45,45,45,45,47,48,50,50,50,50,51,51,51,51,52,52,52,52,54,55,57,57,57,57,59,60,62,62,62,62,63,63,63,63,64,64,64,64,65,65,65,65,66,66,66,66,67,67,67,69,67,66,66,65,65,64,64,63,63,62,62,57,57,52,52,51,51,50,50,45,45,44,44,36,36,31,31,30,30,29,29,28,28,22,22,22,22,22,72,22,22,22,20,20,19,19,18,18,17,17,0,0,0,1,1,2,2,2,4,2,1,7,9,9,10,10,10,12,10,9,15,17,17,17,17,19,19,20,20,20,20,21,21,21,21,23,23,23,24,24,24,25,25,25,26,26,26,27,27,27,28,29,31,21,21,20,20,19,34,17,17,0,0,0,0,1,1,1,1,3,4,6,6,6,8,6,1,1,0,0,0,1,1,2,2,2,4,2,1,7,8,10,10,11,11,11,13,11,10,16,18,18,18,18,19,19,19,19,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,23,23,23,23,25,25,26,26,26,26,27,27,27,27,29,30,27,27,26,26,25,32,32,33,33,33,33,35,36,33,33,32,37,38,40,40,40,40,41,41,41,41,42,42,42,42,43,43,43,43,44,44,44,44,46,47,44,44,43,43,42,42,41,41,40,40,23,23,22,22,21,21,21,21,21,21,21,21,19,19,18,18,0,0,0,0,0,0,1,2,4,6,7,9,11,11,11,11,11,11,11,11,12,12,12,12,13,13,13,13,15,15,16,17,19,20,22,22,22,22,24,25,22,22,15,28,13,13,12,12,11,31,31,31,31,31,31,31,32,32,32,32,33,33,33,33,35,35,35,35,36,36,36,36,37,37,37,37,39,39,39,39,41,41,41,41,43,43,44,43,45,45,46,47,49,49,50,49,45,53,53,53,53,54,54,54,54,55,55,55,55,57,57,58,57,60,60,60,60,61,61,61,61,63,64,65,65,66,68,65,71,71,71,73,71,61,61,60,60,55,55,54,54,53,53,76,76,76,76,78,78,78,79,78,82,82,82,82,84,84,84,84,85,85,85,85,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,88,88,88,88,90,88,88,87,87,87,87,87,87,93,93,93,93,94,95,97,93,100,93,87,87,87,87,85,85,84,84,82,82,78,78,76,76,53,53,41,41,39,39,37,37,36,36,35,35,33,33,32,32,31,103,103,103,103,103,103,103,104,104,104,106,104,103,109,109,109,109,110,110,110,110,112,112,112,112,114,114,114,114,115,115,115,115,117,117,118,119,117,121,121,121,121,122,122,122,122,124,124,124,124,125,125,125,125,126,126,126,126,127,127,127,129,127,126,126,125,125,124,124,122,122,121,121,115,115,114,114,112,112,110,110,109,132,132,132,132,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,134,135,133,133,133,133,133,138,133,133,133,132,141,141,141,141,143,144,146,141,141,0,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,5,5,5,7,5,4,4,10,10,10,10,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,18,18,18,18,19,19,19,21,19,18,24,18,16,16,15,15,14,14,13,13,12,12,27,27,27,27,29,29,29,30,30,31,31,31,32,31,30,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,37,38,40,40,40,40,41,41,41,41,42,42,42,42,44,44,44,45,45,46,45,48,48,48,48,49,49,49,49,50,50,50,50,51,51,51,53,51,50,50,49,49,48,48,42,42,41,41,40,40,36,36,36,36,36,36,56,56,56,56,58,58,59,58,61,56,56,36,36,36,36,27,27,12,12,10,10,4,4,2,2,1,1,0,0,0,1,1,1,2,3,4,5,6,7,1,10,10,10,10,12,12,13,12,14,14,15,14,17,17,17,17,18,18,18,18,20,20,21,21,21,21,23,24,21,21,20,27,27,27,29,27,18,18,17,17,10,10,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,3,3,3,3,4,5,3,9,3,1,1,0,0,0,0,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,7,5,4,4,3,3,2,2,1,10,11,12,13,14,15,0,0,0,0,0,1,2,4,6,6,6,6,8,8,8,8,9,9,9,9,11,11,12,14,11,17,17,17,17,18,18,18,18,20,20,21,22,20,23,24,18,18,17,17,9,9,8,27,8,6,6,0,0,0,1,0,0,0,0,0,0,1,3,3,3,3,5,6,8,3,3,0,0,0,0,0,1,2,4,5,7,0,0,0,1,2,4,4,4,4,6,8,8,8,8,10,10,11,11,11,13,11,10,14,15,8,8,4,4,0,0,0,0,0,1,2,3,3,4,4,4,4,6,8,4,4,3,9,10,0,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,1,1,1,2,3,1,6,1,0,0,0,0,0,1,1,1,1,3,3,3,4,7,3,1,1,0,0,0,0,0,0,1,1,1,1,2,2,2,2,4,6,6,6,6,7,7,8,7,9,10,6,13,6,2,2,1,1,0,0,0,0,0,0,1,1,1,1,3,5,5,5,5,6,6,6,6,7,7,7,7,9,11,12,14,16,16,16,16,17,17,17,17,18,18,18,20,18,17,17,16,16,7,7,6,6,5,5,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,2,4,0,0,0,0,0,1,1,1,1,3,3,3,3,5,6,7,3,3,1,1,0,0,0,1,1,1,1,3,3,4,4,4,4,6,8,4,4,3,11,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,21,19,18,18,17,17,16,16,15,15,14,14,13,13,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,6,8,8,8,10,8,3,3,2,2,1,13,1,0,0,0,0,0,1,1,1,1,3,3,3,3,4,5,7,7,7,9,7,3,12,3,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,5,5,5,6,6,6,6,7,7,7,9,7,6,6,5,12,5,3,3,2,2,1,1,0,0,0,0,0,1,3,0,0,0,1,2,4,0,0,0,0,0,0,1,2,4,5,7,0,0,0,0,0,1,1,1,1,3,3,3,4,4,4,4,6,7,9,4,4,3,12,1,1,0,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,2,3,4,5,6,7,1,10,0,0,0,0,0,0,0,1,2,4,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,2,4,6,6,6,6,8,8,8,8,9,9,9,9,11,12,13,13,14,14,14,14,15,15,15,17,15,14,14,13,9,9,8,21,8,6,6,0,0,0,0,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,8,8,8,9,9,9,9,10,10,10,12,10,9,9,8,8,6,6,5,5,4,4,3,17,17,17,17,19,19,20,19,21,22,23,24,26,27,28,30,30,30,30,32,32,32,32,33,34,36,36,37,37,37,39,37,36,32,32,43,44,46,46,47,48,46,49,49,50,50,50,50,52,52,52,53,53,53,53,55,55,56,57,55,60,53,53,52,63,50,50,49,32,32,30,30,17,17,0,0,0,0,0,0,1,3,0,0,0,1,2,4,5,7,7,7,7,9,10,12,7,7,0,0,0,1,2,4,5,7,7,7,7,8,8,8,9,9,9,10,10,10,11,12,7,15,7,0,0,0,1,2,4,5,7,7,7,7,8,8,8,9,9,9,10,11,7,14,7,0,0,0,1,2,4,5,7,8,10,11,13,14,16,0,0,0,1,0,0,0,1,2,4,5,7,8,10,11,13,14,16,17,19,0,0,0,1,2,4,5,7,0,0,0,1,1,1,3,1,0,0,0,0,1,0,0,0,1,2,4,0,0,0,1,2,4,0,0,0,1,2,4,5,7,8,10,0,0,0,1,2,4,5,7,0,0,0,1,2,4,5,7,0,0,0,1,0,0,0,1,2,4,5,7,7,7,7,8,9,7,12,7,0,0,0,1,2,4,5,9,9,9,9,11,12,14,14,14,14,16,17,19,14,14,9,9,0,0,0,1,2,4,4,5,5,5,7,5,4,10,0,0,0,1,0,0,0,1,1,1,1,3,4,6,7,9,1,1,0,0,0,1,2,4,5,7,0,0,0,1,2,4,0,0,0,1,1,1,1,3,4,6,7,9,1,1,0,0,0,1,2,4,5,7,7,7,7,9,9,9,10,10,10,11,12,14,14,14,14,15,16,14,19,14,7,7,0,0,0,1,2,4,5,7,7,7,7,8,9,11,11,11,11,13,14,11,11,7,17,7,0,0,0,1,0,0,0,1,2,4,5,7,0,0,0,1,2,4,4,4,4,6,7,9,9,9,9,10,11,13,13,13,13,15,16,13,13,9,19,9,4,4,0,0,0,1,2,4,4,4,4,6,7,9,10,12,12,12,12,13,14,16,17,19,20,22,23,12,26,12,4,4,0,0,0,1,2,4,5,7,7,8,7,9,9,10,9,13,0,0,0,0,0,0,1,1,1,3,1,0,0,0,1,2,4,4,4,6,4,0,0,0,1,2,4,5,7,8,10,10,10,10,11,11,11,11,13,14,17,17,17,19,17,11,11,10,10,0,0,0,1,2,4,5,7,7,7,7,9,10,12,12,12,14,12,7,7,0,0,0,1,2,4,0,0,0,1,2,4,5,7,7,7,7,8,9,7,12,7,0,0,0,1,2,4,4,4,4,6,7,9,9,9,9,10,10,10,10,12,13,15,16,18,10,10,9,9,4,4,0,0,0,1,2,4,0,0,0,1,2,4,5,7,8,10,0,0,0,0,1,0,0,0,1,2,4,5,7,0,0,0,1,2,4,5,7,0,0,0,1,0,0,0,1,2,4,5,7,8,10,10,10,12,10,0,0,0,1,2,4,5,7,7,7,7,9,10,12,12,12,14,12,7,7,0,0,0,1,2,4,4,4,6,4,0,0,0,1,2,4,0,0,0,1,2,4,5,7,7,7,7,8,9,7,12,7,0,0,0,1,2,4,0,0,0,1,2,4,5,7,7,7,9,7,0,0,0,1,1,1,3,1,0,0,0,1,2,4,5,7,0,0,0,1,2,4,5,7,0,0,0,1,0,0,0,1,2,4,5,7,7,7,7,9,10,12,12,12,12,13,14,16,12,19,12,7,7,0,0,0,1,2,4,0,0,0,1,2,4,0,0,0,1,0,0,0,1,2,4,5,7,7,7,7,8,9,7,12,7,0,0,0,1,2,4,4,4,4,6,6,6,7,7,7,8,9,11,11,12,11,13,13,14,13,17,4,4,0,0,0,1,2,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,9,7,7,7,7,7,7,7,7,6,6,6,6,6,13,6,6,6,0,0,0,1,2,4,5,7,0,0,0,1,2,4,5,7,8,10,11,13,14,16,0,0,0,1,2,4,5,7,0,0,0,1,2,4,5,7,8,10,0,0,0,0,0,1,2,4,6,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,2,4,1,7,0,0,0,3,3,3,3,4,4,4,4,6,6,6,6,7,7,8,10,7,13,13,14,16,13,21,21,21,23,21,6,26,6,4,4,3,33,33,33,33,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,36,36,37,37,37,37,39,41,37,37,36,44,44,44,46,44,35,35,35,35,35,35,49,49,49,49,50,50,50,50,51,51,51,51,52,52,52,52,53,53,53,53,54,54,54,54,55,55,55,55,56,56,56,56,58,58,59,59,59,61,59,58,62,62,63,63,63,63,64,64,64,66,64,63,63,62,72,72,72,72,73,73,73,73,74,74,74,74,75,75,75,75,76,76,76,76,78,78,79,80,81,78,84,84,84,84,85,85,85,85,87,87,88,89,87,94,94,94,94,95,95,95,95,96,96,96,96,97,97,97,97,99,100,102,102,102,102,103,103,103,105,103,102,102,97,97,96,96,95,95,94,94,85,85,84,84,76,76,75,75,74,74,73,73,72,72,56,56,55,55,54,54,53,53,52,52,51,51,50,50,49,49,35,35,35,35,33,33,0,0,0,3,3,6,6,6,6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,10,12,9,15,15,15,17,15,8,8,8,8,8,8,20,20,20,20,22,23,24,24,25,25,25,25,26,26,26,26,27,27,27,29,27,26,26,25,25,24,33,34,20,20,8,8,8,8,6,6,3,39,39,40,40,40,40,42,42,42,42,43,43,44,45,43,48,48,48,50,48,42,42,53,53,53,53,54,54,54,54,55,55,55,55,57,59,55,55,54,54,53,53,42,42,40,40,39,64,65,66,66,67,68,69,70,66,71,72,0,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,1,1,3,1,0,0,0,0,1,1,1,1,3,3,4,3,5,5,6,5,9,9,10,11,9,12,12,13,12,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,34,35,36,36,37,37,37,37,38,38,39,41,38,37,45,36,46,47,1,1,0,0,0,0,0,0,1,1,1,1,3,3,3,3,4,4,4,4,6,8,4,4,3,11,3,1,1,0,0,0,0,0,0,2,3,5,6,8,9,11,11,11,13,11,0,0,0,0,0,0,1,2,4,5,7,8,10,10,10,12,10,0,0,0,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,9,7,6,6,5,5,4,4,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,3,3,3,3,5,6,8,3,3,0,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,6,4,3,3,3,3,3,3,9,9,9,9,10,10,10,10,12,13,15,10,10,9,18,9,3,3,3,3,1,1,0,0,0,0,0,0,0,1,1,1,1,3,3,3,3,4,5,7,7,7,9,7,3,3,12,14,3,3,1,1,0,0,0,0,0,0,1,1,1,1,3,3,3,3,4,5,7,7,7,9,7,3,12,3,1,1,0,0,0,0,0,0,0,1,1,1,1,3,5,5,5,5,6,7,9,9,9,11,9,5,14,5,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,5,6,8,4,11,12,14,2,2,1,1,0,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,1,1,2,2,2,2,4,4,5,6,8,4,11,2,2,1,14,15,16,18,0,0,0,0,0,1,1,2,2,2,2,4,4,5,6,8,4,11,2,2,1,14,15,16,18,0,0,0,0,0,1,0,0,0,0,0,2,2,2,2,3,3,3,3,5,5,6,5,9,3,3,2,2,0,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,6,7,9,4,4,2,2,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,4,5,7,9,2,2,1,1,0,0,0,0,0,1,2,4,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,3,5,1,1,0,0,0,0,0,1,2,4,5,7,7,7,7,9,9,10,10,10,10,12,14,10,10,9,17,7,7,0,0,0,0,0,0,1,1,1,1,3,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,5,5,5,5,5,5,5,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,5,4,6,6,7,7,7,7,9,9,10,10,10,10,12,12,13,14,12,10,10,9,7,7,6,17,18,20,20,20,20,21,21,21,21,22,22,22,22,23,23,23,23,24,24,24,24,25,25,25,25,27,29,25,25,24,24,23,23,22,22,21,21,20,20,2,2,1,1,0,0,0,0,0,1,2,4,0,0,0,0,0,0,1,2,4,5,7,0,0,0,0,0,1,0,0,0,0,0,1,2,4,6,6,6,6,7,7,7,7,9,9,10,10,10,10,11,11,11,11,13,13,14,15,13,16,17,11,11,10,10,9,20,7,7,6,6,0,0,0,1,2,4,5,7,7,7,7,8,8,8,8,10,11,13,8,8,7,7,0,0,0,0,0,1,3,5,5,5,5,7,7,8,7,9,9,10,12,9,15,15,15,15,17,19,19,19,19,21,22,24,19,19,15,15,5,5,0,0,0,0,0,0,1,2,4,4,4,4,6,6,6,6,7,8,10,6,13,6,4,4,0,0,0,0,0,0,1,2,4,5,7,7,7,7,9,11,7,7,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,3,3,4,3,7,1,1,0,0,0,0,0,0,0,1,1,2,2,2,4,2,1,5,5,6,6,6,6,8,8,8,8,9,10,11,12,8,15,8,6,6,5,16,17,0,0,0,0,0,1,2,4,4,4,4,6,6,7,6,9,9,9,9,10,10,10,10,11,11,11,11,13,13,13,13,15,15,15,15,17,17,17,17,19,20,21,22,23,24,25,26,27,29,17,17,15,15,13,13,11,11,10,10,9,9,4,4,0,0,0,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,8,6,5,5,4,4,3,3,2,2,1,11,13,14,16,16,17,17,17,19,17,16,22,26,26,26,27,27,27,27,28,28,28,28,30,30,31,31,31,31,32,32,32,32,34,34,35,34,32,32,31,31,30,38,38,38,38,39,39,39,39,40,40,40,40,41,41,41,41,42,42,42,42,43,43,43,43,44,44,44,46,44,43,43,42,42,41,41,40,40,39,39,38,38,28,28,27,27,26,51,51,51,52,52,52,52,53,53,53,53,54,54,54,54,56,56,57,56,58,58,59,58,61,61,61,61,62,62,62,62,63,63,63,63,64,64,64,64,65,65,65,65,66,66,66,68,66,65,65,64,64,63,63,62,62,61,61,54,54,53,53,52,52,51,73,73,73,74,75,77,79,79,79,80,79,73,86,86,86,86,86,87,87,87,87,89,90,92,93,95,95,95,95,96,96,96,96,98,99,96,96,95,95,87,87,86,104,104,104,104,105,105,105,105,106,106,106,106,107,107,107,107,108,108,108,108,110,110,110,111,111,111,112,113,115,117,118,119,119,120,120,120,120,122,122,122,123,123,123,124,124,124,125,125,126,126,126,128,126,125,131,131,131,133,131,120,120,119,134,135,137,137,137,137,138,138,138,138,139,139,139,139,140,140,140,140,141,141,141,141,142,142,142,142,144,144,144,144,146,146,147,149,146,152,152,153,155,152,158,158,159,158,161,161,162,161,164,164,165,164,167,167,168,168,169,168,167,171,172,174,174,174,176,174,144,144,142,142,141,141,140,140,139,139,138,138,137,137,108,108,107,107,106,106,105,105,104,104,0,0,0,0,0,1,3,4,6,7,9,10,12,13,15,16,18,18,19,20,18,23,23,23,25,23,0,0,0,0,0,3,3,3,4,4,4,4,5,5,5,5,6,6,6,8,6,5,5,4,4,3,13,13,13,13,14,14,14,14,16,18,18,19,20,18,23,23,24,25,23,28,28,29,30,28,33,33,34,35,33,38,38,39,40,38,43,44,46,14,14,13,13,0,0,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,5,7,7,7,7,8,9,7,12,12,13,15,16,12,19,19,19,19,21,23,24,27,28,30,19,19,5,5,4,4,3,3,0,0,0,0,0,1,1,2,2,2,2,4,6,6,6,8,6,2,2,1,9,10,11,12,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,8,8,9,9,10,10,10,12,10,9,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,22,20,20,19,19,18,18,17,17,16,16,15,15,8,25,6,6,5,5,4,4,0,0,0,1,0,0,0,0,0,1,2,4,6,7,9,11,11,11,11,11,12,12,12,12,13,13,13,13,15,15,16,16,16,16,18,18,19,19,19,19,21,22,19,19,18,23,23,24,24,24,26,24,23,16,16,15,30,13,13,12,12,11,33,33,33,33,33,34,35,37,37,37,37,39,39,40,40,40,40,42,43,45,40,40,39,48,37,37,33,51,51,51,53,51,0,0,0,0,0,0,1,2,4,0,0,0,0,0,1,2,4,5,7,7,8,8,8,8,10,12,8,8,7,15,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,5,5,5,5,6,6,6,6,8,9,6,6,5,5,4,12,2,2,1,1,0,0,0,0,0,1,1,1,1,3,5,5,5,5,7,7,8,7,9,9,10,12,9,15,17,5,5,1,1,0,0,0,0,0,1,3,3,3,3,5,5,6,6,6,6,7,7,7,7,9,10,12,7,7,6,6,5,3,3,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,3,3,4,4,4,6,4,3,9,10,11,13,13,13,13,15,17,17,17,17,19,21,17,17,13,13,0,0,0,0,0,1,1,2,3,4,4,5,7,4,1,9,9,10,10,10,10,10,11,10,14,15,17,19,19,19,19,20,20,20,20,22,22,22,22,23,23,23,23,24,24,24,24,25,25,25,27,25,24,24,23,23,22,22,30,32,32,32,32,33,33,33,35,33,32,38,32,22,22,20,20,19,19,9,0,0,0,1,0,0,0,0,0,2,3,5,6,8,0,0,0,0,0,1,0,0,0,1,2,4,0,0,0,0,0,1,2,4,4,4,6,4,0,0,0,0,0,0,2,2,3,3,3,5,3,2,8,0,0,0,0,0,0,1,1,2,2,2,4,2,1,7,0,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,0,1,1,2,3,4,5,6,7,1,10,0,0,0,0,0,0,1,2,4,4,4,4,6,6,6,6,7,7,7,9,7,6,12,6,4,4,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,1,1,1,3,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,7,7,7,9,7,6,6,5,5,5,5,5,5,5,5,1,1,0,0,0,1,0,0,0,0,0,0,1,1,2,2,2,2,4,4,4,4,5,5,5,5,7,7,8,7,10,5,5,4,13,4,2,2,1,16,16,16,16,17,17,17,17,18,18,18,20,18,17,17,16,16,0,0,0,0,0,0,1,1,1,1,3,5,5,5,5,6,6,6,8,6,5,5,1,1,0,0,0,0,0,0,0,1,1,1,1,3,5,5,5,5,6,6,6,6,7,7,7,7,9,9,9,9,10,10,10,10,12,12,13,14,12,17,10,10,9,20,9,7,7,6,6,5,5,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,5,5,5,5,7,7,7,7,8,8,8,8,10,11,13,13,13,15,13,8,8,7,18,7,5,5,4,21,4,2,2,1,24,24,24,24,25,25,25,25,26,26,26,26,28,28,28,28,29,29,30,30,30,32,30,29,33,34,35,36,28,28,39,39,39,39,41,41,41,41,42,41,41,45,45,45,45,46,46,47,47,47,47,49,50,47,47,46,51,51,52,52,52,54,52,51,55,56,45,59,45,41,41,39,39,28,28,26,26,25,25,24,62,62,62,62,63,63,63,63,64,64,64,64,66,66,66,66,67,67,67,67,68,68,68,68,70,72,72,72,74,72,68,68,67,67,66,66,77,77,77,77,79,79,79,79,80,80,80,80,81,81,81,81,83,83,83,83,84,83,83,87,83,83,81,81,80,80,79,79,90,91,93,93,93,93,94,94,94,94,96,98,98,98,98,100,100,100,100,101,101,101,103,101,100,100,106,106,106,106,108,109,111,111,111,111,113,113,113,113,113,113,113,113,113,113,113,113,113,113,113,113,114,114,114,114,116,116,116,116,117,117,117,119,117,116,116,122,122,122,124,122,116,116,114,114,113,113,113,113,113,113,127,129,113,113,113,113,111,111,106,106,100,100,98,98,94,94,93,93,79,79,77,77,66,66,64,64,63,63,62,62,0,0,0,0,0,0,1,1,1,1,1,2,2,2,2,3,3,3,5,3,2,2,1,8,0,0,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,9,10,10,10,12,10,9,15,15,16,16,16,18,16,15,21,21,22,22,22,22,23,23,23,25,23,22,22,21,28,28,29,29,29,29,30,30,30,32,30,29,29,28,35,35,36,36,36,36,37,37,37,39,37,36,36,35,42,42,43,43,43,43,44,44,44,46,44,43,43,42,49,49,49,49,50,50,50,52,50,49,49,7,7,6,6,5,5,4,4,3,3,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,1,1,1,3,4,6,6,7,7,7,7,8,8,8,10,8,7,7,6,13,13,13,13,14,14,14,16,14,13,13,1,1,0,0,0,0,0,1,2,4,6,6,6,6,7,7,7,9,7,6,6,0,0,0,0,1,1,1,3,1,0,0,0,1,1,2,2,2,4,2,1,7,8,10,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,20,21,23,23,23,23,24,24,24,26,24,23,23,18,18,17,17,16,16,15,15,14,14,13,13,12,12,0,0,0,0,0,1,2,4,6,6,6,6,7,7,7,9,7,6,6,0,0,0,0,0,1,0,0,0,1,2,4,4,4,4,6,6,7,8,10,10,10,10,12,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,16,16,16,16,18,18,19,19,19,21,19,18,22,22,23,23,23,23,24,24,24,24,26,27,24,24,23,23,22,16,16,15,15,14,14,14,14,14,14,31,33,14,14,14,14,10,10,6,34,34,35,36,38,38,38,38,40,42,42,42,42,43,43,43,43,44,44,44,44,45,45,45,45,47,47,48,47,50,50,51,51,51,53,51,50,54,54,55,55,55,55,56,56,56,56,58,59,56,56,55,55,54,45,45,44,44,43,43,42,42,63,65,42,42,38,38,34,66,67,68,69,70,71,4,4,0,0,0,0,0,1,2,4,6,6,6,6,7,7,7,7,9,10,12,12,12,12,13,13,13,13,14,14,14,14,16,16,17,17,17,17,19,20,22,17,17,16,25,26,28,30,14,14,13,13,12,12,7,7,6,6,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,3,5,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,3,5,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,8,6,5,5,4,4,3,11,3,1,1,0,0,0,0,0,1,1,1,1,3,5,1,1,0,0,0,0,0,1,0,0,0,1,1,2,2,2,2,4,4,5,5,5,5,7,7,8,8,8,9,12,8,7,5,5,4,2,2,1,17,18,19,19,20,20,20,20,22,22,22,22,23,23,24,24,24,26,24,23,27,28,22,22,31,31,31,31,33,35,36,31,31,22,22,20,20,19,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,2,3,5,5,5,5,7,9,5,5,1,10,11,12,13,0,0,0,1,1,2,2,2,2,3,3,3,5,3,2,2,1,8,10,10,10,10,11,11,11,11,12,12,12,12,14,14,15,15,15,15,16,16,16,16,18,19,20,21,16,16,15,15,14,24,24,24,24,26,26,26,26,27,27,28,29,27,32,32,33,34,32,37,37,37,37,39,40,42,37,37,26,45,26,24,24,12,12,11,11,10,10,0,0,0,1,1,2,4,4,4,4,5,5,5,7,5,4,4,1,10,11,13,13,13,13,15,15,15,15,16,16,16,18,16,15,21,15,13,13,0,0,0,1,1,2,2,2,2,3,3,3,5,3,2,2,1,8,10,10,10,10,12,12,12,12,13,13,13,13,15,16,17,17,18,18,18,20,18,17,13,13,12,24,12,10,10,0,0,0,1,1,2,4,4,4,4,5,5,5,7,5,4,4,1,10,11,13,13,13,13,15,15,15,15,16,16,16,18,16,15,21,15,13,13,0,0,0,1,1,2,2,2,2,3,3,3,5,3,2,2,1,8,10,10,10,10,12,12,13,13,13,13,15,15,15,15,16,16,17,19,16,22,22,22,24,22,15,15,27,15,15,13,13,12,30,10,10,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,22,22,22,22,23,23,23,23,24,24,24,24,25,25,25,25,26,26,26,26,27,27,27,27,28,28,28,28,29,29,29,29,30,30,30,30,31,31,31,31,32,32,32,32,33,33,33,33,34,34,34,34,35,35,35,35,36,36,36,38,36,35,35,34,34,33,33,32,32,31,31,30,30,29,29,28,28,27,27,26,26,25,25,24,24,23,23,22,22,21,21,20,20,19,19,18,18,17,17,16,16,15,15,14,14,13,13,12,12,11,11,10,10,9,9,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,0,1,2,4,0,0,0,0,0,1,2,4,5,7,8,10,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,5,3,2,2,1,1,0,0,0,1,2,3,4,5,6,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,12,12,12,12,13,13,13,13,15,15,16,15,18,13,13,12,21,12,10,10,9,9,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,1,2,0,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,1,1,1,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,11,11,13,11,6,6,5,5,4,4,3,16,3,1,1,0,0,0,0,1,1,1,1,3,4,5,6,8,9,11,12,14,1,1,0,0,0,0,1,0,0,0,0,3,3,3,3,4,4,4,6,4,3,11,11,11,11,12,12,12,12,14,16,16,16,16,18,19,23,23,23,23,24,24,24,24,25,25,25,25,26,26,26,26,28,29,31,31,31,31,32,32,32,32,33,33,33,33,34,34,34,34,35,35,35,35,36,36,36,36,37,37,37,37,38,38,38,38,40,40,41,42,40,43,44,45,46,48,38,38,37,37,36,36,35,35,34,34,33,33,32,32,31,31,26,26,25,25,24,24,23,53,23,16,16,12,12,11,11,0,0,0,0,0,1,1,1,1,3,5,5,5,5,7,9,9,9,9,10,10,10,12,10,9,9,5,5,1,1,0,0,0,0,0,0,1,1,1,1,2,2,2,2,4,6,6,7,6,8,8,9,11,8,14,16,2,2,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,3,3,3,3,4,4,4,4,6,7,4,4,3,10,3,1,1,0,0,0,0,0,1,2,4,6,6,6,6,8,8,8,8,9,10,11,11,12,13,15,15,15,17,15,11,18,19,8,22,8,6,6,0,0,0,0,0,1,1,1,1,2,2,2,4,2,1,1,0,0,0,0,0,1,2,4,6,6,6,6,7,7,7,7,8,8,8,8,10,12,12,12,12,13,13,13,13,15,15,16,18,15,21,21,22,23,21,13,13,12,27,12,8,8,7,7,6,6,0,0,0,0,0,1,2,0,0,0,0,0,1,1,1,1,3,3,3,3,4,4,4,4,6,4,4,3,9,3,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,3,3,3,3,4,4,4,6,4,3,3,0,0,0,0,0,1,2,4,4,4,6,4,0,0,0,0,0,0,1,1,2,2,2,2,4,5,2,2,1,8,8,8,8,10,11,13,13,13,15,13,8,8,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,2,2,3,3,3,3,4,4,4,4,6,8,4,4,3,3,2,1,12,12,12,12,13,13,13,13,14,14,14,16,14,13,13,12,12,0,0,0,0,0,1,1,1,1,2,2,2,4,2,1,1,0,0,0,0,0,1,1,1,1,2,2,2,4,2,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,5,3,2,2,1,1,0,0,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,9,9,9,10,10,10,10,12,13,14,15,16,17,10,10,9,20,20,20,20,21,21,21,21,22,22,22,22,24,24,25,24,27,22,22,21,21,30,30,30,30,31,31,31,31,33,34,31,31,30,30,21,21,20,37,37,37,37,38,38,38,38,40,38,38,37,43,43,43,44,43,47,47,47,47,48,47,51,51,51,51,52,52,52,52,53,53,53,53,55,57,57,58,59,61,62,64,57,67,67,68,67,70,71,73,53,53,52,52,51,51,7,7,6,6,5,5,4,4,0,0,0,0,1,1,1,1,1,2,2,3,3,3,3,5,7,9,10,12,3,3,2,13,13,14,13,17,19,1,22,23,24,25,26,27,28,29,30,31,33,34,35,36,37,38,40,42,42,42,42,44,44,45,44,47,47,48,47,50,50,51,50,53,53,54,53,58,58,58,58,60,64,64,64,64,65,65,65,65,67,69,65,65,64,64,58,58,42,42,0,0,0,1,1,2,2,2,4,2,1,7,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,16,14,13,13,12,12,11,11,10,10,9,9,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,6,8,8,8,8,9,9,9,9,10,10,10,12,10,9,9,8,8,3,3,2,2,1,1,0,0,0,0,1,1,1,3,1,0,0,0,0,1,1,1,1,2,3,1,6,1,0,0,0,0,1,1,1,1,2,3,1,6,1,0,0,0,0,1,2,4,0,0,0,0,1,2,4,5,7,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,4,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,4,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,8,6,5,5,4,4,0,0,0,0,1,2,4,0,0,0,1,1,2,2,2,2,4,4,5,4,6,6,7,6,10,10,10,10,12,12,13,13,13,13,15,15,16,15,17,17,18,20,17,13,13,12,24,26,10,10,2,2,1,27,27,28,28,29,28,30,30,31,30,34,27,35,36,0,0,0,0,0,1,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,7,7,7,7,8,10,11,13,13,13,13,15,17,17,17,17,19,20,17,17,13,13,7,23,23,23,23,24,24,24,26,24,23,29,29,29,29,30,30,30,30,31,31,31,31,33,31,31,30,30,29,36,36,37,37,37,38,38,38,39,40,42,43,36,46,46,46,46,47,47,47,47,48,48,48,48,50,52,52,52,52,53,52,56,56,56,56,58,58,58,58,59,59,59,59,60,60,60,60,62,62,62,62,63,63,63,63,65,66,67,69,70,73,74,76,76,76,76,77,77,77,77,79,81,83,77,77,76,76,63,63,62,62,60,60,59,59,58,58,56,56,48,48,47,47,46,46,5,5,4,4,3,3,2,2,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,6,8,4,4,3,3,2,2,1,1,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,6,6,6,6,8,8,9,9,10,10,10,12,10,9,15,15,15,17,15,8,20,20,20,20,22,23,25,26,28,28,28,30,28,20,20,6,6,4,4,3,3,2,2,1,1,0,0,0,0,1,1,2,2,2,2,4,5,7,2,2,1,10,0,0,0,0,1,0,0,0,0,0,0,1,2,4,4,4,4,5,5,5,5,7,7,8,8,9,8,10,10,11,10,7,14,14,15,15,15,15,17,15,15,14,20,20,20,20,21,21,21,21,22,22,22,24,22,21,21,20,20,5,5,4,4,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,8,8,8,8,9,9,9,9,10,10,10,10,12,14,15,17,17,17,17,18,18,18,18,19,19,19,19,21,23,19,19,18,18,17,17,10,10,9,9,8,26,26,26,26,27,27,27,29,27,26,32,32,32,32,33,33,33,35,33,32,38,38,39,39,39,40,40,40,41,42,44,45,38,48,48,48,48,50,50,50,50,51,50,54,54,54,54,56,56,56,56,57,57,57,57,58,58,58,58,60,60,60,60,61,61,61,61,63,64,65,67,68,71,72,74,75,77,79,81,61,61,60,60,58,58,57,57,56,56,54,54,48,48,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,7,7,7,7,8,8,8,8,9,9,9,9,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,17,15,14,14,13,13,12,12,11,11,9,9,8,8,7,20,7,3,3,2,2,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,11,13,9,9,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,6,4,3,3,2,2,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,6,8,4,4,3,3,2,2,1,1,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,0,0,0,1,2,4,6,6,6,6,7,7,7,7,9,11,11,11,11,12,12,12,12,13,13,13,13,15,16,18,18,18,18,19,19,19,19,21,21,22,22,22,22,23,23,23,23,24,24,24,24,25,25,25,25,27,27,28,27,30,30,30,30,32,33,30,30,25,25,24,24,23,23,22,22,21,19,19,18,18,13,13,12,12,11,11,7,7,6,6,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,6,8,4,4,3,3,2,2,1,11,11,11,11,13,15,11,11,0,0,0,0,0,1,1,1,1,2,2,2,4,2,1,1,0,0,0,0,0,1,1,1,3,1,0,0,0,0,1,1,1,1,3,4,5,6,7,8,10,1,1,0,0,0,0,1,1,1,1,2,2,2,2,4,5,6,7,8,9,10,11,12,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,23,21,20,20,19,19,18,18,17,17,16,16,15,15,14,26,14,2,2,1,1,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,9,10,11,15,15,15,15,17,17,18,19,21,17,26,26,27,27,27,27,29,30,32,27,27,26,37,37,37,37,38,38,38,38,40,40,41,40,43,43,44,43,48,48,49,49,49,49,51,52,53,55,49,49,48,60,60,60,60,61,61,61,61,63,63,64,64,64,64,65,65,65,65,67,69,69,70,72,69,65,65,64,64,63,78,78,79,79,79,79,81,82,83,84,86,79,79,78,89,90,61,61,60,60,38,38,37,37,15,15,9,93,93,93,93,94,94,94,94,95,95,95,95,97,98,100,95,95,94,94,93,93,7,7,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,1,2,4,5,7,8,10,10,10,10,11,11,12,12,12,12,14,14,14,14,15,15,15,17,15,14,14,12,12,11,18,18,19,19,19,21,19,18,22,23,10,26,26,26,26,27,27,28,28,28,28,30,30,30,30,31,31,31,33,31,30,30,28,28,27,34,34,35,35,35,37,35,34,38,39,26,42,42,43,45,45,45,47,45,42,50,50,50,50,51,51,51,51,52,52,52,52,53,53,53,55,53,52,52,51,51,50,50,0,0,0,0,0,3,3,3,3,4,4,4,4,5,5,5,7,5,4,4,3,3,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,8,9,9,9,9,11,11,12,14,11,17,17,17,17,18,18,18,18,20,21,23,23,24,24,24,24,26,28,28,28,28,30,31,28,28,24,24,23,18,18,17,17,9,9,8,35,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,8,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,0,1,1,1,1,3,4,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,11,11,11,11,12,12,12,12,14,15,17,17,17,17,19,19,20,20,20,20,21,21,21,21,22,22,22,22,24,24,25,26,24,29,22,22,21,21,20,20,19,17,17,12,12,11,11,9,9,8,8,7,7,6,6,1,1,0,0,0,0,3,3,3,3,5,5,5,5,6,6,6,6,8,8,8,8,9,9,9,9,11,12,9,9,8,15,8,6,6,5,20,20,20,20,21,21,21,21,22,22,22,22,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,26,26,26,26,27,27,27,27,28,28,28,28,29,29,29,29,30,30,30,30,31,31,31,31,33,35,35,35,35,37,39,39,39,39,41,43,43,43,45,43,39,39,35,35,31,31,30,30,29,29,28,28,27,27,26,26,25,25,24,24,24,24,24,48,24,24,24,22,22,21,21,20,20,3,3,0,0,0,0,1,2,0,0,0,0,1,1,1,3,1,0,0,0,0,1,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,6,4,3,3,2,2,1,1,0,0,0,0,0,1,1,2,3,1,4,5,0,0,0,1,0,0,0,1,2,4,8,8,8,9,9,9,9,11,11,11,11,12,12,12,14,12,11,17,11,9,9,8,22,22,22,22,24,24,24,25,25,25,25,27,27,28,28,28,28,29,29,29,29,31,32,29,29,28,28,27,33,33,34,34,34,34,35,35,35,35,36,36,36,36,37,37,37,37,39,40,41,42,37,37,36,36,35,35,34,34,33,45,45,45,47,45,25,25,24,52,52,53,54,56,57,59,59,59,59,60,60,60,60,61,61,61,61,62,62,62,62,63,63,63,63,65,65,65,65,66,66,67,66,69,69,70,69,72,72,73,72,75,75,76,75,78,78,79,78,65,65,82,83,85,86,88,89,91,92,94,95,97,65,65,63,63,62,62,61,61,60,60,59,59,52,102,102,103,104,106,107,109,109,109,109,110,111,109,114,109,102,119,119,120,120,120,120,122,123,120,120,119,22,22,0,0,0,1,0,0,0,1,1,1,1,2,2,2,2,4,5,7,7,7,7,9,10,11,12,13,14,7,7,2,2,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,5,7,7,7,7,8,8,8,10,8,7,7,4,13,2,2,1,1,0,0,0,0,0,0,1,1,1,1,2,2,2,4,2,1,1,0,0,0,0,0,1,2,4,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,7,8,3,3,2,2,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,5,6,6,6,6,8,8,9,8,10,10,11,10,6,6,5,14,14,15,15,16,15,17,17,18,17,14,21,3,3,2,2,1,1,0,0,0,1,2,4,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,13,14,16,16,16,16,17,17,17,17,19,21,21,21,21,22,22,22,22,23,23,23,23,24,24,24,24,25,25,25,27,25,24,24,23,23,22,22,21,21,17,17,16,16,11,11,10,10,9,9,8,32,32,32,32,34,34,34,34,35,35,35,35,36,36,36,36,38,39,36,36,35,42,35,34,47,47,47,47,48,48,48,48,50,50,50,50,51,51,51,51,53,54,51,51,50,57,50,48,48,47,62,62,62,62,63,63,63,63,64,64,64,64,66,66,67,66,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,70,70,70,70,71,71,71,71,72,72,72,72,73,73,73,73,74,74,74,74,75,75,75,75,76,76,76,76,77,77,77,77,78,78,78,78,79,79,79,79,80,80,80,80,81,81,81,81,82,82,82,82,84,86,86,86,86,88,88,89,89,89,89,90,90,90,90,92,94,94,94,94,96,98,100,94,94,90,90,89,89,88,103,86,86,82,82,81,81,80,80,79,79,78,78,77,77,76,76,75,75,74,74,73,73,72,72,71,71,70,70,69,69,69,69,69,106,69,69,69,64,64,63,63,62,62,32,32,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,6,7,8,9,10,11,12,13,14,15,17,3,3,2,2,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,4,6,8,8,8,8,9,9,9,9,10,10,10,10,12,14,14,14,14,16,18,20,22,14,14,10,10,9,9,8,8,2,2,1,1,0,0,0,0,0,0,0,0,1,3,3,3,3,5,7,7,7,7,8,8,8,8,9,9,9,11,9,8,8,7,7,3,3,0,0,0,0,0,0,0,0,1,3,3,3,3,5,5,6,8,8,8,8,10,8,8,5,13,3,3,0,0,0,0,0,0,0,0,1,2,4,4,4,6,4,0,0,0,0,0,0,0,0,1,2,4,4,4,6,4,0,0,0,0,0,0,0,0,2,2,2,2,3,3,3,3,5,5,6,6,6,6,7,7,7,7,9,10,12,7,7,6,6,5,15,17,17,17,17,19,21,21,21,21,22,22,22,22,23,23,23,23,25,26,28,23,23,22,22,21,21,17,17,3,3,2,2,0,0,0,0,0,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,7,5,4,4,3,3,0,0,0,0,0,0,0,0,1,2,4,4,4,6,4,0,0,0,0,0,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,4,3,3,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,10,11,13,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,2,4,4,4,4,6,8,8,8,10,8,4,4,0,0,0,0,0,0,0,0,1,2,4,4,4,4,6,8,8,8,10,8,4,4,0,0,0,0,0,0,0,0,1,2,4,0,0,0,0,0,0,0,0,1,3,3,3,3,5,5,6,5,7,7,8,8,8,8,10,8,8,7,13,3,3,0,0,0,0,0,0,0,0,1,2,4,4,4,4,5,5,5,7,5,4,4,0,0,0,0,0,0,0,0,1,3,3,3,3,4,4,4,6,4,3,3,0,0,0,0,0,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,4,3,3,0,0,0,0,0,0,0,0,1,2,4,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,0,0,0,0,1,3,3,4,4,4,6,4,3,9,9,9,9,10,10,10,12,10,9,9,0,0,0,0,0,0,0,1,1,1,1,3,3,3,3,4,4,4,4,6,8,4,4,3,3,11,11,11,11,12,12,12,12,14,14,14,14,15,15,15,15,17,18,20,15,15,14,14,12,12,11,11,3,3,1,1,0,0,0,0,0,0,0,1,1,1,1,3,3,3,3,4,4,4,4,6,8,4,4,3,3,11,11,12,12,12,12,13,13,13,13,15,15,15,15,16,16,16,16,18,19,16,16,15,15,13,13,12,12,11,22,3,3,1,1,0,0,0,0,0,0,0,0,0,1,3,3,3,3,5,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,12,10,9,9,8,8,7,7,3,3,0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,10,12,7,7,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,2,3,5,5,6,6,6,6,8,10,10,10,10,11,11,11,11,13,14,16,11,11,10,10,6,6,5,19,1,22,22,22,22,23,23,23,23,25,27,27,27,27,28,28,28,28,30,30,30,30,31,31,31,31,33,34,36,36,36,36,37,37,37,39,37,36,36,31,31,30,30,42,42,42,42,43,43,43,43,44,44,44,44,45,45,45,45,46,46,46,46,47,47,47,47,49,50,52,47,47,46,46,45,45,44,44,43,43,42,42,30,30,28,28,27,27,23,23,22,22,0,0,0,0,0,0,1,1,1,1,3,3,3,3,4,4,4,6,4,3,9,3,1,1,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,4,5,7,7,7,7,8,8,8,9,9,9,10,11,13,13,13,13,15,16,13,13,7,7,19,19,19,19,20,20,20,20,21,21,21,23,21,20,20,19,19,7,7,2,2,1,1,0,0,0,0,0,1,2,4,6,6,6,6,8,10,10,11,12,10,15,17,6,6,0,0,0,0,0,0,3,3,3,3,4,4,4,4,6,6,6,6,7,7,8,8,8,8,10,11,13,8,8,7,16,16,16,18,16,6,21,6,4,4,3,26,26,26,26,27,27,27,27,28,28,28,28,29,29,29,29,31,31,31,31,33,33,34,34,35,37,34,33,41,41,41,41,42,42,42,42,43,43,43,43,44,44,44,44,45,45,45,45,46,46,46,46,47,47,47,47,49,51,52,54,54,54,54,55,55,56,58,55,61,63,63,63,63,65,67,67,67,67,68,68,68,68,70,70,71,73,70,76,78,78,78,78,79,79,79,79,80,80,80,80,82,82,82,82,83,83,83,83,84,84,84,84,85,85,85,85,86,86,86,88,86,85,85,84,84,83,83,82,82,80,80,79,79,78,78,68,68,67,67,63,63,54,54,91,93,95,54,54,47,47,46,46,45,45,44,44,43,43,42,42,41,41,31,31,29,29,28,28,27,27,26,100,100,100,100,101,101,101,101,102,102,102,102,104,104,104,104,105,105,106,106,106,106,107,107,107,107,109,109,110,112,109,107,107,106,106,105,114,114,115,117,114,120,104,123,104,102,102,101,101,100,128,128,129,130,132,133,135,128,140,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,7,7,7,7,8,8,8,8,10,10,11,12,10,13,13,14,16,13,19,8,8,7,7,3,3,2,2,1,1,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,12,13,15,15,15,15,16,17,18,18,19,19,19,21,19,18,22,23,15,15,26,26,26,26,27,27,27,27,28,28,28,28,29,29,29,29,30,30,30,30,31,31,31,31,33,35,35,35,35,36,36,36,36,38,38,38,38,39,38,42,38,36,36,35,35,45,45,46,46,46,46,47,47,47,49,47,46,46,45,52,35,35,31,31,30,30,29,29,28,28,27,27,26,26,15,15,10,10,9,9,8,8,7,7,6,6,5,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,58,58,58,58,59,59,59,59,60,60,60,60,62,64,64,64,64,65,65,65,65,66,66,66,68,66,65,65,64,64,60,60,59,59,58,58,57,57,57,57,57,57,57,57,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,6,6,7,7,7,7,9,9,10,11,9,12,13,7,7,6,16,16,16,16,18,18,19,19,19,21,19,18,24,24,24,24,25,25,25,25,26,26,26,28,26,25,25,24,24,16,16,4,4,3,3,2,2,1,31,31,31,31,32,32,32,32,34,34,35,35,35,37,35,34,40,32,32,31,31,0,0,0,0,0,0,3,3,3,3,4,4,4,4,6,6,6,6,7,7,8,8,8,8,10,11,13,8,8,7,16,16,16,18,16,6,21,6,4,4,3,26,26,26,26,27,27,27,27,28,28,28,28,30,30,30,30,31,31,31,31,32,32,32,32,33,33,33,33,34,34,34,34,36,38,38,38,38,39,39,39,39,40,40,40,40,41,41,41,41,42,42,42,42,44,46,46,46,46,47,47,47,47,48,48,48,48,49,49,49,49,50,50,50,50,52,54,54,54,54,55,55,55,55,56,56,56,56,57,57,57,57,58,58,58,58,60,62,58,58,57,57,56,56,55,55,54,54,50,50,49,49,48,48,47,47,46,46,42,42,41,41,40,40,39,39,38,38,34,34,33,33,32,32,31,31,30,30,28,28,27,27,26,67,0,0,0,0,0,1,1,1,1,3,3,3,3,4,4,4,4,6,7,9,9,9,9,11,13,9,9,4,4,3,16,16,16,16,18,18,18,19,18,22,22,22,22,23,23,23,23,24,24,24,24,26,26,26,26,27,27,27,27,28,28,28,28,30,31,33,33,33,33,35,36,33,33,28,28,27,27,26,26,39,39,39,39,41,41,41,41,42,42,42,42,43,43,43,43,44,44,44,44,45,45,45,45,47,47,47,47,48,48,48,50,48,47,53,47,45,45,44,44,43,43,42,42,41,41,56,56,56,56,57,57,57,57,59,61,61,61,61,62,62,62,62,63,63,63,63,65,67,67,67,67,68,68,68,68,70,72,72,72,72,73,73,73,73,75,77,77,77,77,78,78,78,78,80,82,82,82,82,83,83,83,83,85,87,87,87,87,88,88,88,88,89,89,89,89,91,93,95,89,89,88,88,87,87,83,83,82,82,78,78,77,77,73,73,72,72,68,68,67,67,63,63,62,62,61,61,57,57,56,56,41,41,39,39,26,26,24,24,23,23,22,22,18,18,16,16,1,1,0,0,0,0,0,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,11,11,12,12,12,12,14,14,15,14,12,12,11,16,16,17,16,19,19,20,20,20,20,21,21,21,21,23,25,21,21,20,20,19,28,28,28,28,29,29,29,29,30,30,30,30,31,31,31,31,32,32,32,32,34,36,36,36,36,38,40,40,40,40,42,44,40,40,36,36,32,32,31,31,30,30,29,29,28,28,9,9,8,8,7,7,6,6,5,5,4,4,3,49,49,49,49,49,50,51,53,53,53,53,54,54,54,56,54,53,53,49,59,59,59,59,60,60,60,60,62,62,62,62,63,63,63,65,63,62,68,62,60,60,59,73,73,73,73,74,74,74,74,75,75,75,75,76,76,76,76,77,77,77,77,79,79,79,79,80,80,80,82,80,79,79,85,87,79,79,77,77,76,76,75,75,74,74,73,92,92,93,93,93,93,95,96,98,98,98,98,100,101,103,98,98,93,93,92,108,108,108,108,109,109,109,109,111,111,111,111,112,112,112,112,114,115,117,117,117,119,117,112,112,111,111,109,109,108,108,0,0,0,0,0,1,1,1,1,3,3,3,4,4,5,5,5,7,5,4,10,10,10,10,11,11,11,13,11,10,10,3,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,22,22,22,22,23,23,23,25,23,22,22,21,21,20,20,19,19,18,18,17,17,16,16,1,1,0,0,0,0,0,0,1,2,4,4,4,4,5,6,4,9,4,0,0,0,0,0,0,1,2,4,4,4,4,5,5,5,5,7,8,10,10,10,12,10,5,5,4,4,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,16,14,13,13,12,12,11,11,10,10,9,9,9,9,9,19,9,9,9,7,7,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,0,0,1,2,4,6,6,6,6,6,6,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,16,18,18,18,18,20,22,22,22,22,23,23,23,23,24,24,24,24,25,25,25,25,27,29,30,32,32,32,32,33,33,33,33,34,34,34,34,35,35,35,35,36,36,36,36,37,37,37,37,38,38,38,38,39,39,39,39,41,43,43,43,43,44,44,44,44,45,45,45,45,46,46,46,46,48,52,52,52,52,53,53,53,53,55,57,57,58,58,58,58,59,59,59,59,61,62,64,59,59,58,58,57,67,67,67,67,68,68,68,68,69,69,69,69,71,73,69,69,68,68,67,67,53,53,52,52,46,46,45,45,44,44,43,43,39,39,38,38,37,37,36,36,35,35,34,34,33,33,32,32,25,25,24,24,23,23,22,22,18,18,14,14,13,13,12,12,11,11,10,10,9,9,6,76,76,77,76,78,78,79,78,82,0,0,0,0,0,0,2,2,3,4,6,7,9,10,12,2,15,15,15,15,17,17,18,18,18,18,20,20,21,21,21,21,22,22,22,24,22,21,21,20,27,27,27,27,29,29,29,29,30,30,30,30,32,34,30,30,29,29,27,27,18,18,17,37,37,37,37,38,38,38,40,38,37,37,15,15,0,0,0,0,0,0,3,3,3,3,4,4,4,4,5,5,5,5,7,7,8,8,8,8,9,9,9,9,11,11,12,11,13,13,14,16,13,19,9,9,8,8,7,22,5,5,4,4,3,27,27,27,27,27,28,28,28,28,29,29,29,29,30,30,30,30,31,31,31,31,32,32,32,32,34,34,35,35,35,35,36,36,36,36,38,39,40,42,42,42,42,43,43,43,43,44,44,44,44,45,45,45,45,47,49,49,49,49,50,50,50,50,51,51,51,51,52,52,52,52,54,56,56,56,56,57,57,57,57,58,58,58,58,59,59,59,59,61,63,63,64,64,64,64,65,65,65,65,66,66,66,66,67,67,67,67,69,71,67,67,66,66,65,65,64,64,63,74,59,59,58,58,57,57,56,56,52,52,51,51,50,50,49,49,45,45,44,44,43,43,42,42,36,36,35,35,34,75,75,76,76,76,76,77,77,77,77,78,78,78,78,79,79,79,79,81,83,83,83,83,84,84,84,84,85,85,85,85,86,86,86,86,88,90,90,90,90,91,91,91,91,92,92,92,92,93,93,93,93,95,97,97,98,98,98,98,99,99,99,99,100,100,100,100,101,101,101,101,103,105,101,101,100,100,99,99,98,98,97,108,93,93,92,92,91,91,90,90,86,86,85,85,84,84,83,83,79,79,78,78,77,77,76,76,75,111,111,111,111,112,112,112,112,114,116,112,112,111,111,32,32,31,31,30,30,29,29,28,28,27,121,121,122,123,125,126,128,121,133,133,134,135,137,138,140,141,143,133,148,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,5,5,5,5,6,6,6,8,6,5,5,4,4,11,11,11,11,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,21,19,18,18,17,17,16,16,15,15,14,14,13,13,24,24,24,26,24,13,13,11,11,4,4,2,2,1,1,0,0,0,0,0,0,1,1,1,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,10,14,14,14,14,16,16,17,18,16,21,21,21,21,22,22,22,24,22,21,21,14,14,7,7,6,6,5,5,4,4,3,27,3,1,1,0,0,0,0,0,0,3,3,3,3,3,3,3,3,4,4,4,4,5,6,8,8,8,8,9,9,9,9,11,12,14,16,9,9,8,8,4,4,19,19,19,19,20,20,20,20,22,23,25,27,20,20,19,19,4,4,3,32,32,32,32,33,33,33,33,34,34,34,34,35,35,35,35,37,37,38,37,39,39,40,42,39,35,35,34,34,33,33,32,32,0,0,0,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,8,8,8,8,9,9,9,9,10,10,10,10,12,12,13,14,12,17,17,17,17,18,18,18,18,19,19,19,21,19,18,18,17,17,10,10,9,9,8,8,24,24,24,24,25,25,25,25,27,29,25,25,24,24,8,8,6,6,5,5,4,4,0,0,0,0,0,0,1,2,4,5,7,8,10,11,13,13,14,14,14,14,16,18,18,18,18,19,19,19,19,21,22,24,19,19,18,18,14,14,13,27,27,27,27,28,28,28,30,28,27,27,0,0,0,0,0,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,11,11,11,11,12,12,12,12,13,13,13,15,13,12,12,11,11,10,1,19,0,0,0,0,0,1,1,1,1,3,3,4,5,6,7,8,9,3,12,12,12,12,14,14,15,15,15,17,15,14,20,12,12,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,5,3,2,2,1,1,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,6,4,3,3,2,2,1,1,0,0,0,0,0,0,0,0,1,3,0,0,0,0,0,0,0,1,3,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,3,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,1,1,1,2,2,2,4,2,1,1,0,0,0,0,0,1,3,3,3,5,3,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,3,0,0,0,1,1,2,3,5,5,5,5,6,6,6,8,6,5,5,1,11,11,11,11,12,12,12,12,14,14,15,16,14,19,19,19,19,21,21,22,23,21,26,26,26,26,28,28,29,28,31,31,31,31,33,35,35,35,35,37,39,40,42,44,45,47,47,47,47,48,48,48,48,49,49,49,49,50,50,50,50,51,51,51,51,52,52,52,52,53,53,53,53,55,55,55,55,56,56,56,56,57,57,57,57,59,59,60,60,60,62,60,59,65,65,66,66,67,67,67,69,67,66,65,73,73,73,73,75,77,77,78,78,78,78,79,79,79,79,80,80,80,80,81,81,81,81,82,82,82,82,83,83,83,83,84,84,84,86,84,83,83,82,82,81,81,80,80,79,79,78,78,77,73,73,57,57,56,56,55,55,53,53,52,52,51,51,50,50,49,49,48,48,47,47,35,35,31,31,26,26,19,19,12,12,11,11,0]
const contents={"0":[432,433,434],"1":[435,436,437,438,439,437,440,434],"2":[441,442,437,438,443,437,440,434],"3":[444,445,434],"4":[446,447,448,449,434],"5":[450,451,434],"6":[452,453,434],"7":[454,455,437,456,437,457,458,437,459,434],"8":[460,461,462,437,463,464,437,465,466,437,457,467,437,468,434],"9":[469,470,471,437,472,473,437,474,437,475,476,477,437,478,479,437,480,437,481,449,437,440,434],"10":[482,470,437,483,484,485,486,437,487,449,437,440,434],"11":[488,489,437,490,491,437,492,491,437,493,434],"12":[494,495,434],"13":[496,497,434],"14":[498,499,500,501,502,437,503,504,437,505,449,437,506,507,508,509,437,510,449,437,511,512,508,509,437,513,449,437,514,515,508,509,437,516,449,437,517,518,519,437,520,434],"15":[521,522,437,523,434],"16":[524,525,526,527,437,440,434],"17":[528,529,437,530,531,437,532,533,534,535,536,537,538,539,437,540,434],"18":[541,542,543,544,545,546,547,548,549,550,545,551,547,548,549,552,549,553,554],"19":[555,556,557,558,559,560,437,561,558,437,562,437,563,564,565,566,567,568,569,570,571,572,437,573,574,566,575,572,437,573,576,449,437,577,437,434],"20":[578,579,437,580,434],"21":[581,582,434],"22":[583,584,585,437,586,437,587,588,589,437,590,591,437,592,593,594,595,596,437,597,437,598,599,437,600,601,602,437,603,604,437,593,605,595,596,437,597,437,606,599,437,600,574,607,449,437,608,434],"23":[609,610,611,437,612,613,614,615,616,617,437,618,619,599,437,620,576,449,437,621,622,623,624,437,625,626,437,627,628,629,630,437,618,619,437,631,632,617,437,618,619,599,437,633,576,449,437,634,635,437,636,637,437,638,434],"24":[639,640,641,642,437,643,642,437,644,645,437,646,645,437,491,449,437,647,437,483,648,649,437,650,576,437,651,652,653,437,654,655,574,656,437,650,576,437,657,437,658,659,449,437,660,434],"25":[661,662,434],"26":[663,461,664,437,665,666,437,667,668,667,669,670,671,437,672,673,576,437,491,674,675,434],"27":[676,677,437,483,678,679,449,437,440,434],"28":[680,677,471,437,681,682,683,437,684,576,449,437,440,434],"29":[685,686,687,437,688,689,690,437,691,692,437,693,694,695,694,574,696,449,437,697,698,437,440,434],"30":[699,700,463,437,686,687,437,701,702,703,690,437,691,704,437,693,705,695,705,574,696,449,437,697,706,437,440,434],"31":[707,708,709,437,710,711,437,440,434],"32":[712,584,713,437,714,449,437,715,437,716,717,718,719,720,721,722,723,437,724,434],"33":[725,726,727,437,728,449,437,729,437,730,731,437,732,449,437,733,437,734,735,736,737,437,738,739,740,741,576,437,742,743,744,745,437,746,694,437,747,437,748,749,437,750,650,437,751,752,437,753,650,437,754,755,756,437,757,650,437,758,437,759,650,437,760,761,762,763,764,765,437,766,449,437,440,434],"34":[767,726,768,437,769,449,437,729,437,730,731,437,732,449,437,733,437,770,437,771,772,773,437,774,775,776,777,778,574,696,437,779,449,437,440,434],"35":[780,781,437,782,783,437,784,437,785,434],"36":[786,726,787,437,788,449,437,729,789,437,730,731,437,790,449,437,733,437,791,792,437,793,794,795,437,796,797,798,437,799,800,437,801,802,437,803,804,574,805,437,806,807,808,809,810,437,811,812,449,434],"37":[813,814,815,437,816,437,817,818,437,819,437,820,821,822,437,823,824,825,437,826,827,437,828,437,829,825,576,437,830,449,437,831,832,833,437,834,835,836,437,837,437,838,437,839,840,841,842,826,437,843,844,576,437,845,846,847,437,848,849,437,850,851,437,852,853,854,855,437,853,599,437,856,437,857,576,437,858,437,859,860,576,437,861,437,862,863,437,864,865,437,866,576,437,859,867,741,437,868,576,437,830,449,437,869,870,437,871,449,437,872,873,437,874,437,875,876,437,877,878,879,437,880,881,437,882,883,884,885,437,830,449,437,886,887,888,889,576,437,675,449,437,890,437,891,892,437,893,434],"38":[894,895,896,437,897,898,437,899,449,437,900,437,901,902,903,904,905,437,906,907,437,908,576,437,909,449,437,910,437,911,912,913,914,576,449,437,915,916,650,437,917,918,919,437,739,920,921,437,922,923,924,925,437,926,449,437,927,437,911,928,437,929,434],"39":[930,931,739,932,920,933,574,805,449,437,470,437,584,934,674,935,437,936,937,437,691,938,437,939,696,449,437,940,437,440,434],"40":[941,942,434],"41":[943,944,437,483,945,868,576,449,437,440,434],"42":[946,947,948,949,950,951,437,952,449,437,911,953,912,954,674,675,434],"43":[955,461,956,437,957,437,944,437,483,958,437,959,960,437,650,576,437,961,962,437,963,964,965,574,960,449,437,440,434],"44":[966,967,434],"45":[968,969,437,970,437,438,971,437,440,434],"46":[972,461,973,437,463,974,437,975,434],"47":[976,584,585,437,977,437,978,437,979,437,665,980,437,981,674,982,434],"48":[983,612,984,669,985,437,986,437,830,674,675,434],"49":[987,988,437,989,434],"50":[990,483,991,642,449,437,493,434],"51":[992,944,437,483,993,449,437,440,434],"52":[994,995,996,437,997,437,998,678,999,574,1000,449,437,440,434],"53":[1001,1002,437,1003,437,1004,1005,1006,437,1007,437,457,531,437,1008,437,1009,1005,1010,437,1007,434],"54":[1011,1012,434],"55":[1013,665,666,437,1014,434],"56":[1015,1016,437,1017,437,1018,1019,1018,434],"57":[1020,1016,437,584,1021,437,812,437,531,449,437,700,437,1022,1023,1024,1025,1024,1026,1027,437,1028,434],"58":[1029,1030,1031,1032,437,1033,650,437,1034,437,1035,449,437,1036,434],"59":[1037,1038,437,1039,1040,650,437,1041,437,1042,449,437,440,434],"60":[1043,1038,1044,1045,437,1039,1041,1046,437,1047,449,437,440,434],"61":[1048,1049,437,1050,434],"62":[1051,1052,1053,437,1054,434],"63":[1055,1056,458,437,1057,1058,437,1036,434],"64":[1059,1060,437,1061,1062,437,1063,558,437,1064,449,437,1065,434],"65":[1066,988,437,1067,437,434],"66":[1068,988,437,1069,434],"67":[1070,1071,434],"68":[1072,1073,1074,1075,1076,1077,574,805,449,437,1078,434],"69":[1079,1080,1081,437,1082,434],"70":[1083,1084,434],"71":[1085,1086,434],"72":[1087,461,1088,437,463,437,647,437,1089,1090,437,1091,1092,574,1093,1094,437,1092,576,449,437,1095,434],"73":[1096,437,437,1097,1098,1099,1100,437,1101,1102,1103,437,1104,449,437,437,437,1105,437,911,1106,912,1107,674,675,437,1108,1109,1110,437,1111,437,1039,1112,650,437,1113,1114,437,1115,576,449,437,947,1116,437,1117,1118,1119,1120,1121,437,1122,1123,437,1124,1125,1126,599,437,1127,576,437,1128,449,434],"74":[1129,974,437,1130,434],"75":[1131,1132,491,437,1133,491,437,1134,437,1135,491,437,1136,434],"76":[1137,1132,491,437,1133,491,437,483,1138,1139,1140,574,642,449,437,493,434],"77":[1141,1132,491,437,1133,491,437,483,1142,1143,574,642,449,437,493,434],"78":[1144,1145,1146,437,1147,687,437,1148,1146,437,1149,1146,437,1150,1146,437,1151,434],"79":[1152,1153,434],"80":[1154,1155,1146,437,1147,1146,437,1156,1146,437,1148,1146,437,1149,1146,437,1150,1146,437,1151,434],"81":[1157,1133,1146,437,1158,1146,437,1151,434],"82":[1159,1160,437,1161,434],"83":[1162,1163,434],"84":[1164,1132,491,437,1165,434],"85":[1166,1167,491,437,1168,434],"86":[1169,665,1146,437,612,1146,437,621,1146,437,1151,434],"87":[1170,612,1146,437,621,1146,437,1151,434],"88":[1171,1172,1146,437,665,1146,437,1151,434],"89":[1173,1174,434],"90":[1175,1132,491,437,1133,491,437,483,1176,642,449,437,493,434],"91":[1177,1132,491,437,1178,491,437,437,437,1134,437,1135,491,437,1179,437,1180,491,437,493,434],"92":[1181,1182,1183,437,1184,1185,437,1186,449,437,1151,434],"93":[1187,1188,434],"94":[1189,1160,437,1190,491,437,1191,491,437,493,434],"95":[1192,1155,1146,437,1158,1146,437,1151,434],"96":[1193,1194,491,437,1195,434],"97":[1196,1160,437,1190,491,437,1197,491,437,493,434],"98":[1198,1132,491,437,1133,491,437,1199,437,1200,1201,674,491,437,483,1202,642,449,437,493,434],"99":[1203,1132,491,437,1133,491,437,1089,1204,650,437,1205,437,1206,642,449,437,493,434],"100":[1207,1208,434],"101":[1209,1210,1146,437,1211,1146,437,1151,434],"102":[1212,1132,491,437,1134,437,1213,491,437,998,1214,642,437,1215,437,1216,642,449,437,493,434],"103":[1217,1132,491,437,1218,437,1219,491,437,1220,491,437,998,1204,650,437,1202,642,437,1221,642,437,1222,642,449,437,493,434],"104":[1223,1132,491,437,1133,491,437,1224,1225,1226,491,449,437,493,434],"105":[1227,455,437,1228,434],"106":[1229,1132,491,437,1230,437,1231,434],"107":[1232,1132,491,437,1233,491,437,1234,491,437,1235,1236,437,1237,491,437,437,1238,437,1239,434],"108":[1240,1132,491,437,1241,491,437,1242,437,1243,491,437,1244,437,1245,434],"109":[1246,1132,491,437,1247,434],"110":[1248,1132,491,437,1133,491,437,483,1249,642,449,437,493,434],"111":[1250,1132,491,437,1251,437,1252,491,437,1253,1254,437,1255,491,437,1256,491,437,493,434],"112":[1257,1194,491,437,1258,434],"113":[1259,1145,1146,437,1147,1146,437,1156,1146,437,1151,434],"114":[1260,1261,434],"115":[1262,584,1146,437,1052,1146,437,1151,434],"116":[1263,1145,1146,437,1147,1146,437,1151,434],"117":[1264,1265,434],"118":[1266,1267,491,437,1268,491,437,1269,491,437,1160,437,1270,434],"119":[1271,1132,491,437,1241,491,437,1242,437,1272,491,437,1244,437,1245,434],"120":[1273,1052,491,437,1160,437,1274,434],"121":[1275,1194,491,437,1276,434],"122":[1277,1132,491,437,1133,491,437,483,1278,642,449,437,493,434],"123":[1279,1194,491,437,1165,434],"124":[1280,1132,491,437,1133,491,437,1281,437,1282,434],"125":[1283,1160,437,1284,434],"126":[1285,1286,1146,437,1287,1146,437,1151,434],"127":[1288,1158,1146,437,1287,1146,437,1151,434],"128":[1289,1290,434],"129":[1291,1132,491,437,1133,491,437,1218,437,1135,491,437,998,1292,650,437,491,449,437,493,434],"130":[1293,1132,1294,437,1295,434],"131":[1296,1297,491,437,1298,434],"132":[1299,1300,434],"133":[1301,1132,491,437,1133,491,437,483,1302,642,449,437,493,434],"134":[1303,1167,491,437,1304,437,1305,1306,674,491,437,1224,1307,1226,491,449,437,493,434],"135":[1308,1132,491,437,437,437,1309,1310,1311,1312,576,449,437,493,434],"136":[1313,665,1146,437,612,1146,437,1151,434],"137":[1314,1132,491,437,1133,491,437,1315,491,437,1316,491,437,1317,491,437,493,434],"138":[1318,1319,1146,437,1320,1146,437,1151,434],"139":[1321,1322,491,437,1323,491,437,1324,491,437,493,434],"140":[1325,461,1326,437,1327,437,1328,434],"141":[1329,1330,434],"142":[1331,1332,434],"143":[1333,584,585,437,1334,449,437,1335,434],"144":[1336,437,437,1337,833,437,1338,1339,1340,437,741,599,437,1341,1340,437,741,599,437,437,437,1342,437,1092,576,437,1343,449,437,437,437,437,437,1344,437,1345,1346,1347,437,1348,437,650,576,437,1349,437,1350,449,437,1351,1352,1353,1354,1355,1356,1357,1358,437,1359,1360,437,1361,674,1362,1363,437,908,576,449,437,437,437,1364,1365,1366,1367,1368,437,1369,1370,1371,531,449,437,1372,1373,437,1374,1375,531,449,437,437,437,1376,1377,1378,1379,437,1380,1381,437,1382,1365,437,1383,434],"145":[1384,437,437,1385,437,437,1386,437,887,1387,1388,437,741,599,437,1389,437,1348,576,437,1390,437,1391,1392,574,1393,1394,1395,437,1396,599,576,437,1397,1398,449,437,437,437,1399,833,437,1338,1387,1340,741,599,437,1400,437,1092,576,437,1401,1402,1403,437,1404,437,531,449,437,437,437,911,1405,912,1406,1392,574,1407,674,675,434],"146":[1408,988,437,1409,434],"147":[1410,988,437,1411,437,434],"148":[1412,1413,437,1224,1414,1226,1415,449,437,1416,1417,1418,674,1419,437,1420,1421,1422,1423,1424,1425,1426,1427,1428,1429,1430,1431,1432,1433,1434,1435,1436,1437,437,911,1438,912,1439,1440,1441,437,1442,599,576,437,1443,674,675,434],"149":[1444,944,437,483,1445,437,1446,437,993,449,437,440,434],"150":[1447,437,1133,491,437,1448,491,437,1449,491,437,1450,437,1451,434],"151":[1452,1133,491,437,1448,491,437,1449,491,437,1453,437,1451,434],"152":[1454,700,1327,437,1455,1456,1457,1458,437,1459,434],"153":[1460,1461,434],"154":[1462,1463,434],"155":[1464,969,437,1465,437,438,1466,437,440,434],"156":[1467,1468,437,438,1469,437,440,434],"157":[1470,522,437,1471,434],"158":[1472,1473,434],"159":[1474,434],"160":[1475,1476,434],"161":[1477,1478,437,1479,434],"162":[1480,1481,434],"163":[1482,1038,437,1483,1484,437,1485,449,437,1486,1487,437,1488,650,437,1042,449,437,440,434],"164":[1489,1038,437,1486,1490,650,437,1487,437,1042,449,437,1491,437,440,434],"165":[1492,1038,437,1486,1490,650,437,1487,437,1042,449,437,440,434],"166":[1493,1038,437,1491,437,1486,1490,650,437,1487,437,1042,449,437,440,434],"167":[1494,1495,434],"168":[1496,1497,434],"169":[1498,1499,1500,437,1501,1502,558,437,1503,449,437,1504,675,437,1505,434],"170":[1506,1507,437,438,1508,437,440,434],"171":[1509,1510,1511,437,1512,1513,1514,437,1515,576,437,1516,449,437,700,1517,1518,437,1519,434],"172":[1520,1510,1511,437,1512,1513,1521,437,1522,576,437,1523,449,437,700,1517,1518,437,1524,434],"173":[1525,1526,434],"174":[1527,437,1499,1500,437,1528,1503,449,437,1529,434],"175":[1530,1531,1532,437,1533,437,438,1534,437,440,434],"176":[1535,1536,1537,437,1135,1538,437,1539,437,1540,434],"177":[1541,1542,687,437,1543,434],"178":[1544,1545,434],"179":[1546,1547,434],"180":[1548,1549,434],"181":[1550,1549,434],"182":[1551,1552,437,1553,437,1554,434],"183":[1555,461,1556,437,463,974,437,465,437,1557,1558,437,1559,437,1560,449,437,1561,434],"184":[1562,1563,437,1564,437,681,1565,449,434],"185":[1566,1567,1568,437,1319,1569,1570,1571,437,1572,1123,437,1124,1573,825,599,576,674,675,437,1574,1575,1576,1577,1578,1579,437,1580,437,440,434],"186":[1581,461,664,437,1582,434],"187":[1583,457,1584,437,1056,675,437,1585,434],"188":[1586,1587,434],"189":[1588,1589,1590,437,1591,437,647,1592,437,1593,1594,480,437,1595,1596,1597,574,1598,449,437,1599,434],"190":[1600,584,1601,437,715,1602,437,1603,1604,437,1510,1605,437,440,434],"191":[1606,1607,437,1608,437,1609,437,1224,1610,1611,1612,437,1613,449,437,1614,437,1429,437,1038,437,1615,1616,437,440,434],"192":[1617,1618,957,437,944,437,483,1619,650,437,993,449,437,440,434],"193":[1620,457,1621,437,1622,1623,437,1624,437,1625,437,1626,434],"194":[1627,1628,434],"195":[1629,1630,437,1631,1632,449,437,440,434],"196":[1633,665,1634,437,1635,668,832,437,1338,672,1636,854,598,576,437,830,674,675,434],"197":[1637,1638,1639,437,1640,437,1638,1641,437,1642,1643,1644,437,1645,437,1646,437,1647,437,1648,1649,1650,1651,1652,1653,1654,1655,1656,437,1657,434],"198":[1658,1659,1660,1661,1662,1663,1664,437,1665,449,437,1666,437,1667,1668,437,730,731,437,1665,449,437,733,437,437,437,1669,1670,1671,437,1672,1673,1674,437,1675,1676,576,437,1677,1678,1679,1680,1681,1682,806,437,812,449,437,437,437,1683,1684,1685,1671,437,1686,1687,1688,1689,437,1690,1679,1680,1691,1682,806,437,812,449,437,437,437,1692,1693,558,437,1694,437,1695,1696,576,449,437,437,437,1697,1698,437,1699,558,437,1700,1701,437,1702,1703,437,1704,1705,449,437,437,437,1706,1707,1708,1709,1710,437,1711,1712,674,1713,437,1714,437,1715,1716,1717,1718,437,1719,1720,1721,574,1722,437,1723,576,437,1724,437,1725,674,675,437,1726,1727,1728,1729,1730,1731,437,1732,437,1715,1733,437,1734,449,437,1735,1736,437,1734,449,437,1737,1734,437,1738,1734,437,1739,1734,437,1740,1741,1742,437,1743,1744,437,1745,437,1746,434],"199":[1747,1748,437,1749,1750,437,1751,1752,437,1753,1754,437,1755,1756,437,1757,1758,437,1740,1759,1760,449,437,1761,437,1762,434],"200":[1763,437,437,1764,1765,1766,1767,437,1768,449,437,437,437,647,1769,437,1770,437,1749,1771,1772,449,437,1751,1771,1773,449,437,1753,1771,1774,449,437,1755,1771,1775,449,437,1757,1771,1776,449,437,1777,1778,437,1095,434],"201":[1779,1780,437,1781,1609,1782,437,1783,1784,1785,449,437,1786,1787,437,1788,1785,449,437,1789,437,1790,437,1791,1792,449,437,1793,1794,437,1795,434],"202":[1796,665,1797,437,1798,437,1799,437,830,668,1800,674,675,434],"203":[1801,1802,434],"204":[1803,1804,434],"205":[1805,461,1806,437,470,1807,1808,437,1809,1810,1811,437,1812,576,437,1813,1814,1815,1816,1817,480,437,481,449,437,440,434],"206":[1818,1819,434],"207":[1820,1821,1822,437,1823,437,1824,1825,437,1826,437,1827,832,1828,437,1829,1830,437,1831,1832,437,1833,1834,854,1835,437,1833,599,576,437,830,449,437,1836,1837,1838,437,1839,437,1840,1841,437,1842,825,437,964,576,437,830,449,437,1843,437,1844,434],"208":[1845,457,1584,437,459,434],"209":[1846,461,1847,437,463,974,437,1557,1848,437,1849,437,1560,449,437,1850,434],"210":[1851,944,996,437,472,1852,1853,437,1854,993,449,437,440,434],"211":[1855,1856,437,1857,437,1858,437,1224,1569,1611,1859,437,1613,449,437,1860,437,440,434],"212":[1861,1602,437,1862,437,691,1863,1864,437,1865,696,437,1792,449,434],"213":[1866,1867,434],"214":[1868,465,437,1869,434],"215":[1870,1871,437,1872,1873,437,1874,449,437,1518,1875,1871,437,1876,437,1877,437,1878,437,1879,437,440,434],"216":[1880,612,1881,1882,574,1883,437,1884,576,669,1885,1886,576,437,1881,1887,437,1888,437,985,833,437,670,1889,1890,1891,437,857,576,437,1892,437,859,1893,437,1894,576,437,830,449,434],"217":[1895,1896,434],"218":[1897,437,461,1898,437,1133,1899,437,1900,434],"219":[1901,1902,434],"220":[1903,584,1904,437,1905,434],"221":[1906,1907,611,437,1908,437,1909,434],"222":[1910,437,1911,1912,437,1913,449,437,1914,434],"223":[1915,1916,1912,437,1917,449,437,1914,434],"224":[1918,1919,437,438,1920,437,440,434],"225":[1921,1073,1074,1075,1076,1077,574,805,449,437,1922,434],"226":[1923,1618,1327,437,944,437,483,1924,437,1925,449,437,440,434],"227":[1926,1927,437,1928,434],"228":[1929,996,437,997,437,681,808,1930,437,448,449,434],"229":[1931,1932,434],"230":[1933,457,1934,437,1338,1935,437,1936,1937,437,1938,576,437,1939,449,437,483,1940,1941,437,1942,449,434],"231":[1943,1944,437,997,437,1945,1946,437,448,449,434],"232":[1947,1944,437,997,437,1945,1948,1949,437,1950,1951,437,1952,1953,741,599,437,1954,576,437,1955,449,434],"233":[1956,1957,832,437,1338,1958,437,1959,1960,437,1961,595,437,1962,437,1963,599,437,1964,576,437,830,449,437,1965,832,833,437,1338,1966,1967,437,1968,1969,1340,854,1970,576,437,1934,437,859,1971,576,437,859,1972,1973,437,1833,741,1969,1974,437,1833,854,1970,576,437,830,449,437,1975,1976,1977,437,1978,1979,1980,437,1981,437,1982,437,1983,449,437,1984,437,1985,1986,1987,437,1988,1989,576,437,1990,449,437,1991,1992,437,647,1993,437,1994,437,1995,437,1985,1996,437,1997,449,437,1998,437,1999,1994,437,2000,437,2001,2002,437,2003,2004,437,2005,576,437,2006,437,659,449,437,1994,437,1095,434],"234":[2007,2008,2009,2010,437,2011,449,437,2012,434],"235":[2013,1602,437,2014,2015,2016,2017,2018,437,2019,2020,437,2021,449,437,2022,2023,437,2021,449,437,2024,2025,835,437,2026,449,437,2027,2028,835,437,2029,449,437,2030,2031,835,437,2032,449,437,2033,2034,835,437,2035,449,437,2036,2037,437,2038,434],"236":[2039,2040,437,2041,434],"237":[2042,2043,437,2044,2045,437,2046,2047,2048,437,2049,449,437,2050,2051,437,2052,434],"238":[2053,461,2054,437,463,437,2055,2056,437,2057,434],"239":[2058,2059,437,2060,434],"240":[2061,584,713,437,2062,449,437,2063,2064,437,715,437,716,717,2065,2066,2067,721,2068,437,2069,830,437,2070,2071,437,2072,434],"241":[2073,461,2074,437,2075,437,2076,2056,437,2077,434],"242":[2078,2079,434],"243":[2080,584,585,437,2081,437,2082,2083,2084,437,833,437,2085,437,2086,1400,2087,437,2088,2089,437,1968,854,2090,2091,437,2092,1968,599,576,437,2093,437,2094,2095,2083,2096,437,833,437,2097,437,2098,2099,1400,2100,437,2101,2102,437,2088,2103,437,1968,854,2104,2091,437,2092,1968,599,576,437,2093,437,2094,2105,2106,2107,2108,674,2109,434],"244":[2110,461,2111,437,463,437,2112,2113,437,1135,1538,437,2114,2115,2116,437,2117,2118,437,2119,696,437,2120,449,437,2121,2122,437,2123,437,2124,434],"245":[2125,2126,434],"246":[2127,2128,437,2129,437,440,434],"247":[2130,2131,434],"248":[2132,2131,434],"249":[2133,2134,434],"250":[2135,2136,437,2137,437,440,434],"251":[2138,2139,434],"252":[2140,944,437,1486,2141,2142,2143,437,766,449,437,440,434],"253":[2144,2145,437,2146,437,440,434],"254":[2147,2148,434],"255":[2149,2150,2151,437,2152,2153,437,2154,2155,2156,596,437,1126,599,576,449,437,1740,2157,2158,833,437,1338,2159,1962,437,1968,854,1340,576,437,1401,437,2160,437,2161,2162,449,434],"256":[2163,2164,434],"257":[2165,2166,434],"258":[2167,2168,434],"259":[2169,2170,434],"260":[2171,911,2172,2173,437,2174,437,2175,437,830,912,2176,674,675,434],"261":[2177,665,2178,2179,437,2094,449,437,1618,437,2180,1005,2181,437,472,2182,2183,437,2184,694,574,696,449,437,944,437,998,2185,868,650,576,437,959,868,650,576,437,2186,437,2187,650,437,993,449,437,440,434],"262":[2188,665,2189,437,2178,2190,437,2094,449,437,1618,463,437,944,437,483,2191,437,1925,449,437,440,434],"263":[2192,665,2178,2193,437,2094,449,437,1618,437,944,437,483,1090,437,1091,2194,574,2195,437,2194,576,449,437,440,434],"264":[2196,665,666,437,2178,2197,437,2094,449,437,1618,1327,437,944,437,483,2198,437,1925,449,437,440,434],"265":[2199,665,2178,2200,437,2094,449,437,1618,437,2201,437,2202,833,437,2203,2204,1340,437,741,599,437,2205,437,1092,576,437,2206,449,437,2207,434],"266":[2208,2209,2210,2211,2212,2213,2214,2215,2216,2217,2218,2219,2220,2221,2222,2223,2224,2225,2226,2227,2228,2229,2230,2231,2232,2233,2234,2235,2236,2237,2238,2239,2240,2241,2242,2243,2244,437,440,434],"267":[2245,461,664,437,2246,434],"268":[2247,1149,2248,437,1147,2249,437,1156,2250,437,1036,434],"269":[2251,2252,2253,2254,437,440,434],"270":[2255,911,2256,912,2257,674,675,434],"271":[2258,2259,2260,2261,2262,2263,2264,2265,2266,2267,2268,437,2269,2270,437,2271,2272,437,2273,449,437,2274,434],"272":[2275,691,1792,449,434],"273":[2276,2277,437,438,2278,437,440,434],"274":[2279,944,437,2280,2281,2282,2283,437,2284,650,437,2285,437,2286,449,437,440,434],"275":[2287,944,437,1740,2288,2289,2290,437,2291,2292,437,2293,2294,437,440,434],"276":[2295,2296,434],"277":[2297,437,437,2298,2299,437,2300,449,437,437,437,2301,2302,437,2303,437,2304,437,2305,2306,437,437,437,2307,2308,2309,2310,437,2311,650,437,2312,2313,2314,2315,2316,2317,2318,2319,437,2320,2321,2322,2323,2324,574,805,437,2325,449,437,437,437,2326,434],"278":[2327,2301,437,2328,437,2329,437,2303,437,2330,2331,437,440,434],"279":[2332,1858,2333,437,2334,437,1224,2335,1611,2336,437,1613,449,437,2337,437,440,434],"280":[2338,2339,434],"281":[2340,2341,434],"282":[2342,944,437,2343,2281,437,2344,868,449,437,440,434],"283":[2345,2346,2347,437,2348,437,944,437,2349,2350,868,2351,2352,598,437,2353,437,2354,574,805,449,437,440,434],"284":[2355,2356,2357,437,2358,434],"285":[2359,2346,2360,437,2348,437,944,2361,2362,437,2363,437,998,2364,437,2365,2194,437,650,576,437,2366,2367,1833,576,449,437,440,434],"286":[2368,2369,2370,434],"287":[2371,677,437,2343,2372,437,2373,449,437,440,434],"288":[2374,2375,434],"289":[2376,700,437,2377,936,437,440,434],"290":[2378,461,2379,437,2380,437,2381,434],"291":[2382,2383,2384,437,2385,558,449,437,2386,437,2387,1370,437,2388,437,2389,434],"292":[2390,2391,437,2392,434],"293":[2393,2394,434],"294":[2395,2383,2396,2397,2398,437,2399,437,558,576,449,437,2400,2356,2401,437,2402,434],"295":[2403,2404,2405,437,440,434],"296":[2406,2404,2407,437,440,434],"297":[2408,2400,2356,2401,437,2409,434],"298":[2410,2411,2412,437,2413,2414,1782,1781,437,2415,2416,437,2417,2418,2419,2420,574,805,449,437,2421,2422,2423,437,1972,2424,437,2425,576,437,2426,2427,437,2428,2429,449,437,2430,2431,437,2432,449,437,2433,1785,449,437,2434,1788,449,437,2435,2436,2437,437,2438,437,691,2439,696,437,2440,2441,437,1792,449,437,2442,2443,437,2444,2445,437,1795,434],"299":[2446,2447,2448,2449,437,2450,437,2451,437,2452,2453,437,2454,2455,2456,576,437,2457,437,2458,449,437,2459,2460,2461,2462,2463,2464,2465,2466,2467,2468,437,2469,2470,2471,2472,2473,2474,437,2475,437,2476,437,2477,2478,437,2479,2480,437,2481,2482,437,2483,2484,437,437,437,2485,437,2337,437,437,437,2301,2302,437,2486,437,440,434],"300":[2487,2488,2489,437,2490,449,437,2491,437,2492,2493,2494,2495,2496,2497,437,2498,434],"301":[2499,2500,937,2501,437,2502,2503,437,2330,2501,2504,437,440,434],"302":[2505,2506,437,2507,434],"303":[2508,2509,2510,2511,449,437,1036,434],"304":[2512,2509,2513,2511,449,437,1036,434],"305":[2514,2515,491,437,2516,434],"306":[2517,2518,1146,437,2519,1146,437,1151,434],"307":[2520,1132,491,437,2521,2522,2523,437,2524,491,437,2525,434],"308":[2526,1132,491,437,2521,2522,2523,437,2524,491,437,2527,434],"309":[2528,1132,491,437,2521,2522,2523,437,2529,434],"310":[2530,2515,491,437,2531,434],"311":[2532,2383,2533,437,2448,2534,2535,642,576,437,2536,437,2537,2538,437,2539,2540,2541,2542,437,1312,599,576,437,2543,437,1146,2544,2448,2545,2535,642,576,437,1146,674,491,434],"312":[2546,2547,434],"313":[2548,2549,2550,2551,2552,2553,437,2554,2555,437,2556,558,437,2557,437,2558,437,2559,437,2560,2561,449,437,2562,2431,437,2563,449,437,2564,2431,2565,437,2566,449,437,2567,2568,2569,574,805,437,2570,2571,449,437,2572,2573,2574,437,2575,437,2576,2577,449,437,2578,437,2579,2580,2581,437,2582,2583,437,2584,2585,2586,437,2587,1792,449,437,2588,2589,437,2590,2591,437,2592,437,2593,437,2594,434],"314":[2595,2596,2597,2598,2599,437,2600,437,440,434],"315":[2601,2602,2603,2604,2605,437,2606,437,2607,2608,2609,437,2610,576,437,2611,437,2612,449,437,647,437,2613,2614,437,2607,2615,437,2616,437,2617,434],"316":[2618,2619,2620,437,2621,805,437,2622,449,437,2623,434],"317":[2624,2625,434],"318":[2626,2627,531,437,2628,2629,437,2630,2631,2632,2633,2632,449,437,2634,2635,437,2636,449,437,2637,2638,2639,437,2640,434],"319":[2641,2642,2549,2550,2643,2644,2645,437,2646,2647,2648,437,2649,437,2650,558,437,2651,807,2652,437,812,437,2653,449,437,2562,2431,437,2654,449,437,2564,2431,437,2655,449,437,2567,2568,2569,574,805,437,2570,2571,449,437,2656,437,2576,2577,449,437,2578,437,2579,2580,2581,437,2582,2583,437,2584,2585,2586,437,2587,1792,449,437,2588,2657,437,2658,2659,437,2592,437,2660,437,2661,434],"320":[2662,944,2663,2181,437,2664,437,998,2665,744,437,2666,2667,2668,2669,2670,437,766,449,437,440,434],"321":[2671,2672,2673,2674,2675,2676,2590,2677,2591,2678,437,2679,437,2594,434],"322":[2680,2672,2673,2674,2681,437,2682,434],"323":[2683,2684,2573,2685,2686,437,2687,437,440,434],"324":[2688,2689,437,2690,434],"325":[2691,2692,434],"326":[2693,2694,434],"327":[2695,2696,437,2697,434],"328":[2698,2699,434],"329":[2700,584,2701,437,700,437,2702,2703,437,2704,437,2705,2706,2707,437,2387,1370,437,2708,2709,437,691,2710,2711,2712,2713,437,2714,2715,437,2716,437,2717,600,449,434],"330":[2718,2719,437,2720,434],"331":[2721,2722,2723,2724,2725,437,2726,437,2727,449,437,2728,437,2729,437,2730,434],"332":[2731,2732,2733,437,440,434],"333":[2734,2735,437,2736,434],"334":[2737,1038,437,2738,2739,2740,2741,2742,2743,437,440,434],"335":[2744,1038,2745,437,2746,2747,2748,2749,2750,2751,2752,2753,2754,437,2755,2756,2757,2758,2759,2760,2761,2762,437,2763,449,437,440,434],"336":[2764,471,2765,2766,2767,2553,2768,2769,437,472,2770,696,437,437,437,2771,437,2772,2773,2774,437,650,576,437,437,437,648,2775,437,2776,2777,437,650,576,437,437,437,2778,2779,437,2780,2781,437,648,2781,437,437,437,2782,2775,437,2776,2783,2784,437,650,576,437,437,437,2785,2786,437,2787,2788,2789,437,2790,437,2791,2792,437,825,599,576,437,437,437,2793,2775,437,2776,2783,2794,2795,437,650,576,437,2796,2797,449,437,2798,2799,2800,437,2801,2802,437,440,434],"337":[2803,2804,2805,437,2806,2807,437,2808,2809,437,2810,1074,2811,437,2812,2813,437,2814,2815,2816,437,2817,574,805,449,437,2818,1074,2811,437,2812,2819,437,2814,2815,2816,437,2820,574,805,449,437,2821,2822,437,2823,437,2824,449,437,2765,2825,2826,2827,437,2828,434],"338":[2829,437,437,2830,2831,2832,437,2833,434],"339":[2834,2835,2836,2765,2837,2766,2767,437,2838,2839,437,2840,2841,437,696,576,437,2842,2843,437,2844,2845,437,2846,2847,437,2848,437,2849,437,2791,825,576,449,437,2850,434],"340":[2851,2852,2853,2854,2855,2856,2857,437,440,434],"341":[2858,2386,437,2387,1370,437,2708,2709,2859,2860,437,2861,1368,437,1369,2862,437,2863,437,691,2864,2865,2866,437,2867,826,650,576,437,2862,449,434],"342":[2868,437,437,2869,437,2870,832,437,2871,2872,437,2873,2874,576,437,830,449,437,437,437,1038,2875,2876,437,2877,2878,2879,2880,2881,2882,2883,2884,437,2885,437,2886,437,2887,437,2888,437,2889,437,2890,437,2891,449,437,440,434],"343":[2892,2893,2894,434],"344":[2895,2896,437,2897,434],"345":[2898,2899,434],"346":[2900,2901,437,2902,434],"347":[2903,2904,2330,2331,2905,437,440,434],"348":[2906,2907,2908,2909,674,2908,434],"349":[2910,2911,434],"350":[2912,1589,2913,437,1591,437,437,437,2914,833,437,2915,2916,437,1092,576,437,1343,449,437,437,437,2917,437,2918,2919,437,1595,2920,2921,437,2922,2923,574,2924,2925,2926,2927,437,2922,2923,2928,2929,576,437,2930,437,2931,449,437,437,437,2932,641,642,437,1595,2933,437,2934,2935,2936,2937,2938,437,1338,2939,2940,437,2941,2942,437,2943,2944,437,2945,2946,437,2947,2948,576,437,2949,642,437,2950,642,437,2951,642,437,2952,642,437,2953,642,437,1146,449,437,437,437,2954,641,642,437,1406,642,437,1338,2955,1312,576,437,1146,449,437,437,437,691,2956,437,2957,600,576,449,434],"351":[2958,2959,434],"352":[2960,2961,2962,437,2963,2964,437,2965,437,2966,2967,2968,2969,674,675,434],"353":[2970,2971,2972,437,2973,2974,437,2975,2976,437,812,449,437,440,434],"354":[2977,2978,2979,437,2980,434],"355":[2981,2982,531,437,2983,434],"356":[2984,2985,437,2986,2987,437,2988,434],"357":[2989,2990,434],"358":[2991,2992,2993,2994,437,2995,437,2996,2997,434],"359":[2998,2999,434],"360":[3000,3001,3002,3003,437,3004,3005,437,3006,3007,574,3008,449,437,3009,3006,3010,574,3011,449,437,440,434],"361":[3012,3013,3014,437,3015,437,437,437,3016,3017,3018,3019,437,3020,3021,437,3022,3023,437,3024,437,3025,3026,3027,3028,3029,437,830,449,437,437,437,3030,437,3031,3032,3033,437,2873,3034,576,437,675,449,437,437,437,3035,832,437,3032,3033,437,3036,2874,576,437,830,449,437,437,437,1038,3037,2876,437,3038,3039,437,2877,2878,2879,2880,3040,3041,2881,2882,3042,3043,3044,3045,3046,3047,437,2885,437,3048,437,3049,3050,3051,437,3052,437,3053,437,3054,437,3055,437,3056,576,437,2891,449,437,440,434],"362":[3057,1358,3058,3059,437,3060,3061,3062,3063,3064,3065,3066,3067,3068,3069,3070,437,3071,434],"363":[3072,3073,3074,437,3075,437,3076,437,3077,3078,3079,437,3080,437,3081,437,2303,437,3082,437,3083,437,440,434],"364":[3084,3085,437,3086,437,3087,437,3088,3089,3090,437,3091,434],"365":[3092,3093,437,3094,437,3095,3096,437,3097,437,3098,449,437,440,434],"366":[3099,3093,3085,437,3100,437,3091,434],"367":[3101,3102,3085,437,3103,437,3091,434],"368":[3104,437,944,3105,437,3106,3107,3108,437,3109,3110,437,830,449,437,3111,437,3112,437,3113,437,3114,3115,3116,437,3117,3118,437,440,434],"369":[3119,3085,437,3120,3121,3122,437,3091,434],"370":[3123,3093,3085,437,3124,437,3091,434],"371":[3125,3093,437,944,3126,3116,3127,437,3117,3118,437,440,434],"372":[3128,3129,434],"373":[3130,3131,434],"374":[3132,3133,434],"375":[3134,944,3135,3121,3136,3121,3137,3116,3127,437,3117,3118,437,440,434],"376":[3138,3139,434],"377":[3140,3141,434],"378":[3142,3143,434],"379":[3144,3111,3085,437,3145,437,3146,437,3147,437,1036,434],"380":[3148,3111,3085,437,3149,437,3150,437,3151,437,3091,434],"381":[3152,3153,3085,437,3154,434],"382":[3155,3085,437,3156,437,3106,3157,674,3158,437,3159,449,437,3091,434],"383":[3160,3102,3085,437,3103,3161,437,3091,434],"384":[3162,3085,437,3135,3163,437,3091,434],"385":[3164,3093,437,944,3165,3116,3105,437,3117,3118,437,440,434],"386":[3166,3153,3085,437,3167,434],"387":[3168,944,3135,3121,3169,3116,3127,437,3117,3118,437,440,434],"388":[3170,3085,437,3106,3171,437,3172,449,437,3135,3173,437,3091,434],"389":[3174,944,437,3175,3176,437,3177,437,766,449,437,3178,3179,437,3180,3181,437,3182,3183,437,440,434],"390":[3184,944,437,3175,3176,437,3177,437,766,449,437,3185,3186,3187,437,3188,3189,437,3190,3191,449,437,440,434],"391":[3192,3085,437,3112,437,3113,437,3193,3194,3195,3196,437,3091,434],"392":[3197,944,3135,3198,3121,3137,3116,3127,437,3117,3118,437,440,434],"393":[3199,944,3135,3121,3200,3116,3127,437,3117,3118,437,440,434],"394":[3201,3202,3203,1075,437,3204,3205,437,3206,437,3207,3208,437,3209,3210,437,3211,576,437,675,449,437,944,3212,437,3213,437,3214,3215,437,3216,3217,437,3218,650,437,3219,3220,437,3221,449,437,3222,3223,3224,3196,3116,3105,437,3117,3118,437,440,434],"395":[3225,944,437,3226,3227,437,3228,449,437,440,434],"396":[3229,3230,3231,437,3232,531,437,3226,3233,3234,574,650,437,3235,437,3236,558,449,437,3237,532,3238,437,540,434],"397":[3239,3240,3241,437,3242,437,3243,437,3244,437,3245,3246,1146,449,437,3247,437,1151,434],"398":[3248,437,437,3249,832,437,3250,3251,3252,437,3253,3254,437,741,599,437,3255,437,3256,576,437,830,449,437,437,437,3257,3258,3259,3260,437,3261,437,3262,3263,3264,437,3265,599,576,437,3266,3267,3268,3269,3270,3271,3272,437,3273,437,3274,3275,437,3276,3277,3278,437,741,599,437,3279,437,3280,437,3206,437,3281,3282,437,3283,3278,437,741,599,437,3284,437,3285,3286,3287,437,3288,3289,3290,3291,3292,437,3293,576,437,3294,437,3295,437,830,449,437,437,437,3296,3297,3298,437,3299,3300,3301,3302,437,3303,3304,437,595,596,3305,3306,437,741,599,437,3307,576,437,3308,449,437,437,437,3309,3310,645,437,3311,645,437,491,449,437,437,437,3312,434],"399":[3313,3314,3315,3316,437,3317,437,3318,3319,437,1224,3320,3321,1611,3322,437,1613,449,437,3323,434],"400":[3324,3325,437,3326,434],"401":[3327,3328,437,437,437,3329,832,3330,3331,858,3332,437,3333,3334,437,3335,3336,3337,1969,3338,437,3339,854,1970,576,437,3340,3341,3342,3343,3344,3345,437,766,437,3346,3347,437,3348,3349,599,437,3350,576,437,3351,3352,3353,437,3354,576,437,830,449,437,437,437,3355,808,3356,3357,437,811,437,3358,3359,807,437,812,449,434],"402":[3360,3249,3361,3362,3363,437,3364,3365,437,3366,3367,3368,854,825,576,437,3270,437,3369,3370,437,3371,576,437,3372,3373,3374,437,3375,449,437,944,3376,437,3377,3378,437,766,449,437,440,434],"403":[3379,437,437,3249,832,437,3250,3380,3252,437,3253,3254,437,741,599,437,3381,437,3382,576,437,830,449,437,437,437,3383,832,3330,437,3384,3385,3270,3386,3387,437,3388,437,3389,3390,3391,3386,3392,437,3393,437,3384,3394,3270,3386,3395,437,3396,437,3384,3397,3270,3386,3398,437,3399,437,830,449,437,437,437,3312,434],"404":[3400,3401,437,3402,3403,437,3404,600,437,3405,437,3406,437,830,449,437,647,437,3407,3408,449,437,896,3409,3410,437,3407,3411,3342,437,3412,3413,437,3414,437,3415,3416,449,437,3417,437,3418,3419,3420,3421,3422,437,3423,3424,437,3425,576,437,3426,449,437,3427,3428,437,3429,437,3430,3431,3432,437,3433,437,3434,3435,437,3436,437,3437,3438,437,3439,437,3440,3441,437,3442,437,3443,3444,437,3445,437,3446,3447,3448,437,3449,437,3450,437,1095,434],"405":[3451,437,437,3452,3453,3454,3455,3456,3457,3458,437,3459,3460,437,3461,3462,574,3463,437,3464,3460,3465,437,3466,437,3467,576,437,3468,3469,3470,3471,3472,437,3473,437,3474,437,3475,437,3476,437,3477,437,3478,449,437,437,437,3479,3480,558,437,3481,3482,437,3483,449,437,3484,832,437,1338,3485,437,2354,576,437,830,449,437,437,437,3486,832,3487,3488,3489,437,3490,3491,437,2194,576,437,3492,437,830,449,437,437,437,3493,3494,437,3495,600,437,3496,437,3495,600,437,675,449,437,437,437,3497,3498,437,3499,3500,437,3501,650,437,3502,437,3503,449,434],"406":[3504,3505,437,3506,2867,3507,437,3508,576,437,3509,3510,437,3511,449,437,3512,3513,3514,900,3515,3516,3517,3518,437,3519,434],"407":[3520,3521,1146,437,3522,3523,642,449,437,493,434],"408":[3524,3525,491,437,3526,3527,437,3528,1146,437,3529,437,3530,434],"409":[3531,944,3532,3533,3534,3535,3536,2876,437,2877,3537,3538,3539,3540,3541,437,766,449,437,440,434],"410":[3542,3240,3543,437,3242,437,3544,437,437,3545,3546,3547,3548,3549,3550,437,3551,437,1662,437,3552,437,3553,3554,1682,806,437,812,437,3555,558,437,3556,3557,3558,3559,3560,3561,3562,3359,437,812,437,3563,3560,3564,3359,437,812,437,437,437,3565,3566,437,3567,437,3568,3569,3570,437,3571,825,437,3572,576,437,3573,3574,3575,437,3576,437,531,449,437,1224,3577,1611,491,449,437,493,434],"411":[3578,437,3579,641,642,437,3580,645,437,3581,645,437,491,449,437,3582,437,3583,3584,437,3585,3586,3587,437,600,576,437,3588,437,3589,3590,437,3591,437,830,449,437,3592,3593,437,440,434],"412":[3594,437,437,3249,832,3595,437,3364,3596,3597,437,2539,3598,3599,3600,437,3601,599,437,2354,576,437,830,449,437,437,437,3602,832,3603,3330,3341,3604,437,3605,3606,3607,437,3608,3609,3610,437,3611,3612,3290,3613,437,3614,437,3615,3616,3290,3617,437,3618,437,3619,3620,3290,3621,437,3622,437,3623,3624,3625,3626,3627,437,3628,437,3629,599,437,600,3630,3611,3631,3290,3613,437,3614,437,3615,3616,3290,3617,437,3618,437,3619,3632,3633,3621,437,3622,437,3623,3624,3625,3626,3627,437,3628,437,3629,599,437,600,576,437,3391,3272,437,3109,437,830,449,437,437,437,3634,3635,645,437,3636,645,437,491,449,437,437,437,3637,3638,645,437,3639,645,437,3640,645,437,491,449,437,437,437,3312,434],"413":[3641,3642,900,437,3643,3644,3645,437,3646,449,437,910,437,3407,3647,3648,3649,923,924,925,437,926,449,437,3650,437,3651,434],"414":[3652,944,437,3226,3653,3654,3655,3656,437,557,650,437,437,437,3657,437,3658,3659,741,576,437,3270,3660,437,3109,449,437,440,434],"415":[3661,437,437,3662,3663,3664,741,437,3665,3666,437,3667,3265,437,3668,437,3669,576,437,3670,3671,437,3672,600,437,3673,437,3674,449,437,437,437,3527,3675,3676,3677,437,1224,3678,1611,3679,437,1613,449,434],"416":[3680,3681,3682,437,3683,3684,944,437,3685,3686,3687,437,3688,3689,650,576,437,3690,3691,3692,437,3693,449,437,940,936,437,3694,437,440,434],"417":[3695,1148,687,437,1149,687,437,1145,687,437,1147,687,437,1156,3696,437,3697,437,3698,3699,437,3700,3701,437,3702,449,437,3074,3703,437,540,434],"418":[3704,1448,3705,3706,3707,3708,3709,3710,3711,3712,574,3713,3714,3715,437,3716,576,449,437,3717,434],"419":[3718,1927,437,2150,3719,3720,3721,3722,574,3723,449,437,3724,437,3725,3726,437,3727,449,437,3728,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,434],"420":[3729,3730,3731,3732,437,3733,434],"421":[3734,3730,3735,3736,3737,437,3738,434],"422":[3739,3740,437,3741,434],"423":[3742,3743,437,3744,434],"424":[3745,3746,434],"425":[3747,3743,437,3748,434],"426":[3749,3750,437,3751,434],"427":[3752,3753,3754,437,3755,434],"428":[3756,3757,437,3758,437,3759,434],"429":[3760,3761,437,3762,434],"430":[3763,3764,437,1914,434],"431":[3765,3766,641,642,437,3767,3768,437,3769,449,437,2961,3770,437,3106,3771,531,449,437,3772,437,3773,3771,531,449,437,3774,437,3775,3776,437,3777,437,3076,437,3778,437,3779,437,3780,531,437,3083,437,3781,531,437,3782,3783,3784,3785,3786,3787,3788,437,3789,2603,2605,437,3790,3791,437,3792,449,437,2607,3793,3794,437,3795,576,449,437,3796,437,3797,437,947,3798,3799,3800,3801,3802,3803,3804,437,3805,449,434]}
const fns={abs,add,and,angle,append,arr,asc,at,back,base36_decode,base36_encode,between,brace,bracket,byte_size,capture,char_escape,check_arg,check_arity,check,chr,clear,clone,cmp,collate,concat,contain,count,crc,cut_l,cut_r,date_decode,date_str,dbg_backtrace,dbg_callstack,dbg_here,dbg_origin_xs,dbg_origin,dbg_source_map,dbg_source,dec,dedup,deinit_common,delimit,different,div,drop,dump,dup,eq,every,explode,extract,fallback_error,filter,find,flower_box,flower,fn_args,fn_match,fn_select,front,get_type,get,gn_run,gt,gte,has,head,iif,implode,inc,indent,init_common,insert,is_access,is_alnum,is_alpha,is_arg,is_arr,is_atom,is_blank,is_bool,is_browser,is_char,is_comment,is_composite,is_container,is_cool,is_def,is_digit,is_domain,is_empty,is_false,is_fn,is_fragment,is_full,is_gn,is_identifier,is_indented,is_int,is_ip,is_ip4,is_ip6,is_json,is_last,is_lisp,is_lit_char,is_lit,is_ln,is_lower,is_mail,is_many,is_name,is_node,is_none,is_noun,is_null,is_num,is_numeric,is_obj,is_pair,is_punct,is_single,is_space,is_str,is_token,is_trivia,is_true,is_tuple,is_txt,is_uint,is_undef,is_upper,is_url,is_user,is_vec,is_word,is_xn,is_rgb,join,json_decode,json_dump,json_encode,log_append,log,lt,lte,main,map,match_l,match_r,match,max,min,mod,mul,mute,neq,nop,obj_keys,obj_length,obj_merge,obj_order,obj_push,obj_remove,obj_unshift,obj_vals,obj,on,or,pad_l,pad_r,paren,partial,path_concat,path_file,path_fix,path_join,path_split,path_strip,path_unfix,path_up,pop,prepend,profile,push,put,quote,random_str,random,record,reject,remove,repeat,replace_rec,replace,report_html,report_init,report_log,report_render,resolve,reverse,rgb_init,round,salt,same,scan,set,shift,shuffle,silent,sleep,slice_l,slice_r,slice,sort,space,split,squote,stop,str_indent,strip_l,strip_r,sub,tail,tbl_column,tbl_columns,tbl_index,tbl_init,tbl_pad_l,tbl_remove_column,tbl_rename_column,tbl_render,tbl_sort,time_delay,time_get,time_hn,time_interval,time_now,time_str,time_timeout,to_base36,to_dump,to_fixed,to_i,to_int,to_json,to_lit,to_lower,to_num,to_str,to_tbl,to_uint,to_upper,trace,trim_l,trim_r,trim,trunc,tty_width,txt_compact,txt_cut,txt_indent,txt_prepend,txt_unindent,unaccent,unshift,unwrap,url_beautify,url_get,url_parse,wait,xor,app_list,argv_context,beep,deinit_node,digest,dir_call,dir_change,dir_current,dir_find,dir_load,dir_make,dir_read,dir_reset,dir_size,file_append,file_load,file_read,file_save,file_size,file_write,fs_copy,fs_created,fs_modified,fs_remove,http_get,init_node,inspect,ip_host,ip_list,ip_v4,ip_v6,is_batch,is_color,is_dir,is_file,is_fs,is_interactive,is_readable,open,os_capture,os_detach,os_execute,os_home,os_host,os_log,os_prompt,os_ps,os_run,os_shell,os_system,os_user,path_base,path_dir,path_ext,path_real,path_tmp,report_mail,sigint,to_base64,ansi_encode,ansi_get_attrs,ansi_get_colors,ansi_head,ansi_init,ansi_rgb,ansi_strip,app_token,archive_find,group_list,init_shell,is_local,is_remote,is_root,mime_type,mnt_clean,mnt_unmount,password,ssh_execute,ssh_pass,ssh_system,sudo_append,sudo_dir_make,sudo_read,sudo_remove,sudo_save,sudo,user_created,user_list,app_home,app_make,ast_assign,ast_begin,ast_brk,ast_call,ast_catch,ast_check,ast_cont,ast_else,ast_elseif,ast_fn,ast_forin,ast_fornum,ast_forof,ast_gn,ast_if,ast_include,ast_inline,ast_let,ast_ret,ast_run,ast_throw,ast_try,ast_var,ast_while,ast_yield,call_ast_block_top,call_ast_block,call_ast_declare,call_ast_for,call_ast_if,call_ast_xn,cpl_block,cpl_check_fn,cpl_check_syntax,cpl_check,cpl_compile,cpl_deinit,cpl_dump,cpl_fold,cpl_for,cpl_generate,cpl_include,cpl_init,cpl_is_call,cpl_is_leaf,cpl_load,cpl_log_error,cpl_scan,cpl_scope,cpl_source_map,cpl_tokenize,cpl_translate,cpl_uncomment,call_expr_arg,call_expr_right,call_expr_rvalue,expr_arr,expr_call,expr_iif,expr_in,expr_inline,expr_instanceof,expr_new,expr_not,expr_obj,expr_run,expr_value,init}
main()