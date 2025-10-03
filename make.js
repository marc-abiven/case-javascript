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
      else if(same(name,"not"))
      {
       const _=front(args)
       {
        const is=_
        {
         const _=strip_l(is.name,"is_")
         {
          const name=_
          {
           const _=space("not",name)
           {
            const s_name=_
            {
             const _=to_lit(s_name)
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
 check_arg(is_ushort,x,"x","ushort")
 check_arity("same",arguments.length,1)
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
   function visit(x)
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
         const _=visit(v)
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
           const _=visit(v)
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
   return visit(x)
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
  if(is_empty(y))
   return false
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
              const _=8
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
  check(is_browser)
  const _=to_str(html.outerHTML)
  {
   const s=_
   {
    const _=split(s)
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
              const _=trim(v)
              {
               const s=_
               {
                if(!(match_l(s,"<")))
                 break
                at(lines,i,"")
               }
              }
             }
            }
           }
          }
         }
         {
          while(is_full(lines))
          {
           const _=back(lines)
           {
            const s=_
            {
             const _=trim(s)
             {
              const s=_
              {
               if(is_empty(s))
               {
               }
               else if(match_l(s,"<"))
               {
               }
               else
                break
               drop(lines)
              }
             }
            }
           }
          }
          const _=txt_unindent(lines)
          {
           const lines=_
           return join(lines)
          }
         }
        }
       }
      }
     }
    }
   }
  }
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
           if(!(contain(r,v)))
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
          push(r,v)
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
 const _=log
 {
  let print=_
  {
   const _=space("Fallback",x)
   {
    const title=_
    {
     try
     {
      flower(title)
     }
     catch
     {
      print=console.log
     }
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
           print(s)
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
                print(s)
               }
              }
             }
            }
           }
          }
         }
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
 check_arg(is_composite,x,"x","composite")
 check_arg(is_def,y,"y","def")
 check_arity("same",arguments.length,2)
 if(is_str(x))
  check(is_str,y)
 if(is_vec(x))
  return x.indexOf(y)
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
       return is_fn(k)?k():k
     }
    }
   }
   return -1
  }
 }
 else
  stop()
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
       }
      }
     }
    }
    stop()
   }
  }
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
 global.unit="1.3vw"
 global.padding="0.3vw"
 global.border="0.1vw"
 global.font_family="monospace"
 global.font_size=is_fn(unit)?unit():unit
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
   const _=pop(a)
   {
    const tld=_
    {
     if(!(is_alnum(tld)))
      return false
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
             if(is_alnum(v))
             {
             }
             else if(is_lisp(v))
             {
             }
             else
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
    }
   }
  }
 }
}
function is_empty(x)
{
 if(is_vec(x))
  return same(x.length,0)
 if(is_obj(x))
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
 if(!(is_composite(x)))
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
           if(is_identifier(v))
            continue
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
function is_ushort(x)
{
 if(!(is_uint(x)))
  return false
 const _=mul(256,256)
 {
  const n=_
  return lt(x,n)
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
                           if(!(is_file(config_log)))
                           {
                            const _=path_dir(config_log)
                            {
                             const dir=_
                             {
                              dir_make(dir)
                              file_write(config_log,content)
                              return
                             }
                            }
                           }
                           const _=file_size(config_log)
                           {
                            const size=_
                            {
                             const _=mul(16,1024,1024)
                             {
                              const limit=_
                              {
                               if(lt(size,limit))
                               {
                                file_append(config_log,content)
                                return
                               }
                               const _=file_load(config_log)
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
                                          file_write(config_log,content)
                                         }
                                        }
                                       }
                                      }
                                     }
                                    }
                                   }
                                  }
                                 }
                                }
                               }
                              }
                             }
                            }
                           }
                          }
                         }
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
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
function not(x,...y)
{
 if(is_bool(x))
  return !(is_fn(x)?x():x)
 else if(is_fn(x))
 {
  const _=x(...y)
  {
   const v=_
   return !(is_fn(v)?v():v)
  }
 }
 else
  stop()
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
function report_html(report,length,human)
{
 check_arg(is_obj,report,"report","obj")
 check_arity("gte",arguments.length,1)
 if(is_def(length))
  check(is_uint,length)
 const _=report_render(report,human)
 {
  let txt=_
  {
   if(is_def(length))
   {
    txt=txt_cut(txt,length)
   }
   const _=is_fn(h_html)?h_html():h_html
   {
    const html=_
    {
     const _=is_fn(h_head)?h_head():h_head
     {
      const head=_
      {
       const _=h_title(report.title)
       {
        const title=_
        {
         const _=is_fn(h_body)?h_body():h_body
         {
          const body=_
          {
           h_font_family(body,font_family)
           h_font_size(body,font_size)
           const _=h_pre(txt)
           {
            const pre=_
            {
             h_push(body,pre)
             h_push(head,title)
             h_push(html,head)
             h_push(html,body)
             const _=h_render(html)
             {
              const s=_
              return is_fn(s)?s():s
             }
            }
           }
          }
         }
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
    let message=_
    {
     const _=is_fn(error.constructor.name)?error.constructor.name():error.constructor.name
     {
      const type=_
      {
       const _=to_lower(type)
       {
        const type=_
        {
         const _=""
         {
          let title=_
          {
           const _=[]
           {
            const tags=_
            {
             if(is_word(message))
             {
              title="An error has occured"
             }
             else
             {
              const _=strip_r(message,".")
              {
               const message=_
               {
                title=is_fn(message)?message():message
               }
              }
             }
             push(tags,app)
             if(same(type,"error"))
             {
             }
             if(same(type,"object"))
             {
             }
             else
              push(tags,type)
             if(is_fn(is_browser)?is_browser():is_browser)
              push(tags,location.hostname)
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
                  push(tags,errno)
                 }
                }
                const _=is_fn(os_host)?os_host():os_host
                {
                 const host=_
                 push(tags,host)
                }
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
                          return {title,tags,app,message,browser,server,trace,cs,backtrace,js}
                         }
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
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
 const _=report_title(report)
 {
  const title=_
  {
   flower_box(title)
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
 }
}
function report_render(report,human)
{
 check_arg(is_obj,report,"report","obj")
 check_arity("gte",arguments.length,1)
 if(is_undef(human))
  return report_render(report,true)
 function log_title()
 {
  check_arity("same",arguments.length,0)
  const _=report_title(report)
  {
   const title=_
   flower_box(title)
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
     {
      push(a,"")
      push(a,report.js)
     }
     if(is_fn(human)?human():human)
     {
      push(a,"")
      push(a,"Refresh the page or go to another URL to continue.")
     }
     return join(a)
    }
   }
  }
 }
}
function report_title(report)
{
 check_arg(is_obj,report,"report","obj")
 check_arity("same",arguments.length,1)
 function format_tag(x)
 {
  check_arg(is_str,x,"x","str")
  check_arity("same",arguments.length,1)
  if(is_word(x))
   return is_fn(x)?x():x
  return to_lit(x)
 }
 const _=map(report.tags,format_tag)
 {
  const tags=_
  {
   const _=join(tags," / ")
   {
    const tags=_
    {
     const _=paren(tags)
     {
      const tags=_
      return space(report.title,tags)
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
                const _=is_fn(v.key)?v.key():v.key
                {
                 const k=_
                 put(r,v.key,v.value)
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
           const _=get(v,y)
           {
            const s=_
            push(r,s)
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
                     const _=txt_indent(s,2)
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
                 const _=txt_indent(s,2)
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
function to_hex(x)
{
 check_arg(is_uint,x,"x","uint")
 check_arity("same",arguments.length,1)
 return x.toString(16)
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
function txt_indent(x,y)
{
 if(is_undef(y))
  return txt_indent(x,1)
 check(is_uint,y)
 if(is_str(x))
 {
  const _=split(x)
  {
   const a=_
   {
    const _=txt_indent(a,y)
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
        const _=repeat(" ",y)
        {
         const indent=_
         {
          const _=concat(indent,s)
          {
           const s=_
           push(r,s)
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
function txt_inline(x)
{
 if(is_str(x))
 {
  const _=replace(x,"\n"," ")
  {
   const r=_
   {
    const _=replace(r,"\r","")
    {
     const r=_
     {
      const _=replace_rec(r,"  "," ")
      {
       const r=_
       {
        const _=trim(r)
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
 check(is_arr,x)
 const _=join(x)
 {
  const s=_
  {
   const _=txt_inline(s)
   {
    const s=_
    return split(s)
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
function beep()
{
 check_arity("same",arguments.length,0)
 os_detach("play","-n","synth",0.1,"sine",880,"vol",0.5)
}
function deinit_node()
{
 check_arity("same",arguments.length,0)
 function remove_old_files(path)
 {
  check_arg(is_str,path,"path","str")
  check_arity("same",arguments.length,1)
  const _=dir_load(path,true)
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
                                const _=false
                                {
                                 let remove=_
                                 {
                                  if(is_dir(v))
                                  {
                                   if(dir_empty(v))
                                   {
                                    remove=true
                                   }
                                  }
                                  else if(is_file(v))
                                  {
                                   remove=true
                                  }
                                  else
                                   stop()
                                  if(is_fn(remove)?remove():remove)
                                  {
                                   fs_remove(v)
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
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
 if(dir_empty(config_tmp))
  fs_remove(config_tmp)
 const _=path_up(config_tmp)
 {
  const app=_
  {
   if(dir_empty(app))
    fs_remove(app)
   const _=path_up(app)
   {
    const dir_tmp=_
    {
     const _=path_up(config_log)
     {
      const dir_log=_
      {
       remove_old_files(dir_tmp)
       remove_old_files(dir_log)
       dir_change(cwd)
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
    no_umask(fs.mkdirSync,x,option)
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
 no_umask(fs.appendFileSync,x,y)
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
  const stat=_
  return is_fn(stat.size)?stat.size():stat.size
 }
}
function file_write(x,y)
{
 check_arg(is_str,x,"x","str")
 check_arg(is_str,y,"y","str")
 check_arity("same",arguments.length,2)
 no_umask(fs.writeFileSync,x,y)
}
function fs_change_mode(x,y)
{
 check_arg(is_str,x,"x","str")
 check_arg(is_uint,y,"y","uint")
 check_arity("same",arguments.length,2)
 fs.chmodSync(x,y)
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
  const stat=_
  return div(stat.ctimeMs,1000)
 }
}
function fs_mode(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 const _=fs.statSync(x)
 {
  const stat=_
  return is_fn(stat.mode)?stat.mode():stat.mode
 }
}
function fs_modified(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 const _=fs.statSync(x)
 {
  const stat=_
  return div(stat.mtimeMs,1000)
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
     if(!(contain(report.tags,message)))
      unshift(report.tags,message)
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
 const _=is_fn(os_home)?os_home():os_home
 {
  const home=_
  {
   const _=to_str(process.pid)
   {
    const pid=_
    {
     const _=pad_l(pid,"0",6)
     {
      const pid=_
      {
       global.config_tmp=path_concat(home,".config","mabynogy","tmp",app,pid)
       dir_make(config_tmp)
       const _=concat(app,".txt")
       {
        const base=_
        {
         global.config_log=path_concat(home,".config","mabynogy","log",base)
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
            {
             const _=util.inspect(x,o)
             {
              const s=_
              {
               const _=[]
               {
                const a=_
                {
                 const _=split(s)
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
                         const _=str_indent(v)
                         {
                          const indent=_
                          {
                           const _=div(indent,2)
                           {
                            const indent=_
                            {
                             const _=repeat(" ",indent)
                             {
                              const indent=_
                              {
                               const _=trim_l(v)
                               {
                                const line=_
                                {
                                 const _=concat(indent,line)
                                 {
                                  const line=_
                                  push(a,line)
                                 }
                                }
                               }
                              }
                             }
                            }
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
                }
               }
              }
             }
            }
           }
          }
         }
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
function is_symbolic_link(x)
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
     const _=fs.lstatSync(x,o)
     {
      const o=_
      {
       if(is_undef(o))
        return false
       return is_fn(o.isSymbolicLink)?o.isSymbolicLink():o.isSymbolicLink
      }
     }
    }
   }
  }
 }
}
function no_umask(x,...y)
{
 check_arg(is_fn,x,"x","fn")
 check_arity("gte",arguments.length,1)
 const _=null
 {
  let r=_
  {
   const _=process.umask(0)
   {
    const mask=_
    {
     try
     {
      r=x(...y)
     }
     catch(e)
     {
      process.umask(mask)
      throw is_fn(e)?e():e
     }
     process.umask(mask)
     return is_fn(r)?r():r
    }
   }
  }
 }
}
function node_argv()
{
 check_arity("same",arguments.length,0)
 return [binary,"--trace-uncaught","--trace-deprecation","--expose-gc"]
}
function node_context()
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
function os_home(x)
{
 if(is_undef(x))
 {
  const _=is_fn(os_user)?os_user():os_user
  {
   const user=_
   return os_home(user)
  }
 }
 check(is_str,x)
 const _=path_concat("/home",x)
 {
  const r=_
  {
   check(is_dir,r)
   return is_fn(r)?r():r
  }
 }
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
 if(is_fn(is_root)?is_root():is_root)
 {
  const _=os_execute("logname")
  {
   const r=_
   {
    check(is_alnum,r)
    return is_fn(r)?r():r
   }
  }
 }
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
 const _=path_split(x)
 {
  const dir=_
  {
   pop(dir)
   const _=path_join(dir)
   {
    const dir=_
    {
     const _=path_concat(config_tmp,dir)
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
function path_writable(x)
{
 check_arg(is_fs,x,"x","fs")
 check_arity("same",arguments.length,1)
 const _=path_real(x)
 {
  const path=_
  {
   const _=path_split(path)
   {
    const components=_
    {
     while(is_full(components))
     {
      const _=path_join(components)
      {
       const path=_
       {
        if(lte(path.length,2))
         break
        const _=438
        {
         const a_rw=_
         {
          const _=511
          {
           const a_rwx=_
           {
            const _=fs_mode(path)
            {
             const mode=_
             {
              if(is_file(path))
              {
               const _=mode & a_rw
               {
                const bits=_
                {
                 if(same(bits,a_rw))
                 {
                 }
                 else
                  fs_change_mode(path,a_rw)
                }
               }
              }
              else if(is_dir(path))
              {
               const _=mode & a_rwx
               {
                const bits=_
                {
                 if(same(bits,a_rwx))
                 {
                 }
                 else
                  fs_change_mode(path,a_rwx)
                }
               }
              }
              else
               stop()
              drop(components)
             }
            }
           }
          }
         }
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
 const _=report_html(report,65,false)
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
     push(list,"default 39 49")
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
 return util.stripVTControlCharacters(x)
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
    const base=_
    {
     const _=is_fn(base)?base():base
     {
      const path_cwd=_
      {
       const _=path_concat(home,base)
       {
        const path_home=_
        {
         const _=path_concat(common,base)
         {
          const path_common=_
          {
           const _=null
           {
            let path=_
            {
             if(is_file(path_cwd))
             {
              path=is_fn(path_cwd)?path_cwd():path_cwd
             }
             else if(is_file(path_home))
             {
              path=is_fn(path_home)?path_home():path_home
             }
             else if(is_file(path_common))
             {
              path=is_fn(path_common)?path_common():path_common
             }
             else
              stop()
             const _=file_load(path)
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
 const _=is_fn(os.userInfo)?os.userInfo():os.userInfo
 {
  const o=_
  return same(o.username,"root")
 }
}
function mail_debug(subject,data)
{
 check_arg(is_str,subject,"subject","str")
 check_arg(is_obj,data,"data","obj")
 check_arity("same",arguments.length,2)
 const _=to_tbl(data)
 {
  const data=_
  {
   const _=is_fn(h_html)?h_html():h_html
   {
    const html=_
    {
     const _=is_fn(h_head)?h_head():h_head
     {
      const head=_
      {
       const _=is_fn(h_body)?h_body():h_body
       {
        const body=_
        {
         h_font_family(body,font_family)
         h_font_size(body,font_size)
         const _=h_tbl(data)
         {
          const table=_
          {
           h_push(body,table)
           h_push(html,head)
           h_push(html,body)
           const _=h_render(html)
           {
            const html=_
            mail(author,subject,html)
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function mail(to,subject,body,from,...paths)
{
 check_arg(is_str,to,"to","str")
 check_arg(is_str,subject,"subject","str")
 check_arg(is_str,body,"body","str")
 check_arity("gte",arguments.length,3)
 if(is_undef(from))
  return mail(to,subject,body,admin,...paths)
 function single_part(to,subject,body,from)
 {
  check_arg(is_str,to,"to","str")
  check_arg(is_str,subject,"subject","str")
  check_arg(is_str,body,"body","str")
  check_arg(is_str,from,"from","str")
  check_arity("same",arguments.length,4)
  const _=[]
  {
   const a=_
   {
    const _=quoted_printable(body)
    {
     const body=_
     {
      const _=concat("from:",from)
      {
       const s=_
       {
        push(a,s)
        const _=concat("to:",to)
        {
         const s=_
         {
          push(a,s)
          const _=concat("subject:",subject)
          {
           const s=_
           {
            push(a,s)
            push(a,"mime-version: 1.0")
            push(a,"content-type: text/html;charset=utf-8")
            push(a,"content-transfer-encoding: quoted-printable")
            push(a,"")
            push(a,body)
            return join(a,crlf)
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
 function multi_part(to,subject,body,from,...paths)
 {
  check_arg(is_str,to,"to","str")
  check_arg(is_str,subject,"subject","str")
  check_arg(is_str,body,"body","str")
  check_arg(is_str,from,"from","str")
  check_arity("gte",arguments.length,4)
  const _=[]
  {
   const a=_
   {
    const _=get_boundary(body)
    {
     const boundary=_
     {
      const _=concat("--",boundary)
      {
       const dash_boundary=_
       {
        const _=concat(dash_boundary,"--")
        {
         const end_boundary=_
         {
          const _=quoted_printable(body)
          {
           const body=_
           {
            const _=concat("from:",from)
            {
             const s=_
             {
              push(a,s)
              const _=concat("to:",to)
              {
               const s=_
               {
                push(a,s)
                const _=concat("subject:",subject)
                {
                 const s=_
                 {
                  push(a,s)
                  push(a,"mime-version: 1.0")
                  const _=quote(boundary)
                  {
                   const s=_
                   {
                    const _=concat("content-type: multipart/related; boundary=",s)
                    {
                     const s=_
                     {
                      push(a,s)
                      push(a,"")
                      push(a,dash_boundary)
                      push(a,"content-type: text/html; charset=utf-8")
                      push(a,"content-transfer-encoding: quoted-printable")
                      push(a,"")
                      push(a,body)
                      push(a,"")
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
                              const _=path_base(v)
                              {
                               const base=_
                               {
                                const _=path_file(v)
                                {
                                 const file=_
                                 {
                                  const _=mime_type(v)
                                  {
                                   const mime=_
                                   {
                                    const _=file_read(v,"base64")
                                    {
                                     const content=_
                                     {
                                      const _=chunk_76(content)
                                      {
                                       const content=_
                                       {
                                        push(a,dash_boundary)
                                        const _=space("content-type:",mime)
                                        {
                                         const s=_
                                         {
                                          push(a,s)
                                          push(a,"content-transfer-encoding: base64")
                                          const _=angle(file)
                                          {
                                           const s2=_
                                           {
                                            const _=concat("content-id: ",s2)
                                            {
                                             const s=_
                                             {
                                              push(a,s)
                                              const _=quote(base)
                                              {
                                               const s2=_
                                               {
                                                const _=concat("content-disposition: inline; filename=",s2)
                                                {
                                                 const s=_
                                                 {
                                                  push(a,s)
                                                  push(a,"")
                                                  push(a,content)
                                                 }
                                                }
                                               }
                                              }
                                             }
                                            }
                                           }
                                          }
                                         }
                                        }
                                       }
                                      }
                                     }
                                    }
                                   }
                                  }
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
                          push(a,end_boundary)
                          return join(a,crlf)
                         }
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
 function config()
 {
  check_arity("same",arguments.length,0)
  const _=app_token("mabynogy")
  {
   const token=_
   {
    const _=[]
    {
     const a=_
     {
      push(a,"account gmail")
      push(a,"host smtp.gmail.com")
      push(a,"port 587")
      push(a,"protocol smtp")
      push(a,"auth on")
      const _=space("from",mailer)
      {
       const s=_
       {
        push(a,s)
        const _=space("user",mailer)
        {
         const s=_
         {
          push(a,s)
          const _=space("password",token)
          {
           const s=_
           {
            push(a,s)
            push(a,"tls on")
            push(a,"tls_starttls on")
            push(a,"tls_trust_file /etc/ssl/certs/ca-certificates.crt")
            push(a,"account default: gmail")
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
 function quoted_printable(x)
 {
  check_arg(is_str,x,"x","str")
  check_arity("same",arguments.length,1)
  const _=path_tmp("qp.txt")
  {
   const path=_
   {
    file_save(path,x)
    const _=os_execute("python3","-m","quopri",path)
    {
     const r=_
     {
      fs_remove(path)
      return is_fn(r)?r():r
     }
    }
   }
  }
 }
 function chunk_76(x)
 {
  check_arg(is_str,x,"x","str")
  check_arity("same",arguments.length,1)
  const _=is_fn(x)?x():x
  {
   let input=_
   {
    const _=[]
    {
     const output=_
     {
      while(is_full(input))
      {
       const _=head(input,76)
       {
        const s=_
        {
         input=slice(input,s.length)
         push(output,s)
        }
       }
      }
      return join(output,crlf)
     }
    }
   }
  }
 }
 function get_boundary(body)
 {
  check_arg(is_str,body,"body","str")
  check_arity("same",arguments.length,1)
  while(true)
  {
   const _=random_str(8)
   {
    const r=_
    {
     if(!(contain(body,r)))
      return is_fn(r)?r():r
    }
   }
  }
 }
 const _=is_fn(config)?config():config
 {
  const config_content=_
  {
   const _=null
   {
    let body_content=_
    {
     if(is_full(paths))
     {
      body_content=multi_part(to,subject,body,from,...paths)
     }
     else
     {
      body_content=single_part(to,subject,body,from)
     }
     const _=path_tmp("msmtp.txt")
     {
      const config_path=_
      {
       const _=path_tmp("body.txt")
       {
        const body_path=_
        {
         file_save(config_path,config_content)
         file_save(body_path,body_content)
         const _=concat("--file=",config_path)
         {
          const option_file=_
          {
           fs_change_mode(config_path,384)
           const _=os_shell("msmtp","--debug",option_file,"--read-recipients","<",body_path)
           {
            const s=_
            {
             const _=txt_prepend(s," > ")
             {
              const s=_
              {
               trace("msmtp")
               trace(s)
               fs_remove(config_path)
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
function sudo_dir_make(path)
{
 check_arg(is_str,path,"path","str")
 check_arity("same",arguments.length,1)
 check(not,is_dir,path)
 sudo("mkdir","--parents",path)
 sudo_path_writable(path)
}
function sudo_file_append(path,data)
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
    sudo_file_save(path,content)
   }
  }
 }
}
function sudo_file_read(path)
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
function sudo_file_save(path,data)
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
       if(!(is_dir(dir)))
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
function sudo_file_write(path,data)
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
       if(!(is_dir(dir)))
        sudo_dir_make(dir)
       file_write(tmp,data)
       sudo("mv","--force",tmp,path)
      }
     }
    }
   }
  }
 }
}
function sudo_fs_change_mode(path,pattern)
{
 check_arg(is_str,path,"path","str")
 check_arg(is_str,pattern,"pattern","str")
 check_arity("same",arguments.length,2)
 check(is_fs,path)
 sudo("chmod",pattern,path)
}
function sudo_fs_remove(path)
{
 check_arg(is_str,path,"path","str")
 check_arity("same",arguments.length,1)
 sudo("rm","--recursive","--force",path)
}
function sudo_is_dir(x)
{
 if(!(is_str(x)))
  return false
 const _=os_run("sudo","stat","--terse","--format=%F",x)
 {
  const result=_
  {
   if(same(result.status,1))
    return false
   return contain(result.out,"directory")
  }
 }
}
function sudo_is_file(x)
{
 if(!(is_str(x)))
  return false
 const _=os_run("sudo","stat","--terse","--format=%F",x)
 {
  const result=_
  {
   if(same(result.status,1))
    return false
   return contain(result.out,"file")
  }
 }
}
function sudo_path_writable(path)
{
 check_arg(is_str,path,"path","str")
 check_arity("same",arguments.length,1)
 const _=path_split(path)
 {
  const components=_
  {
   while(is_full(components))
   {
    const _=path_join(components)
    {
     const path=_
     {
      if(lte(path.length,2))
       break
      if(is_file(path))
       sudo_fs_change_mode(path,"a+rw")
      else if(is_dir(path))
       sudo_fs_change_mode(path,"a+rwx")
      else
       stop()
      drop(components)
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
            const _=slice_l(parts,5)
            {
             const parts=_
             {
              const _=join(parts," ")
              {
               const line=_
               return date_decode(line)
              }
             }
            }
           }
          }
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
function app_home(app)
{
 check_arg(is_str,app,"app","str")
 check_arity("same",arguments.length,1)
 const _=[]
 {
  const lines=_
  {
   const _=app_make(app)
   {
    const js=_
    {
     const _=is_fn(h_html)?h_html():h_html
     {
      const html=_
      {
       const _=is_fn(h_head)?h_head():h_head
       {
        const head=_
        {
         const _=h_title(app)
         {
          const title=_
          {
           const _=is_fn(h_body)?h_body():h_body
           {
            const body=_
            {
             const _=h_script(js)
             {
              const script=_
              {
               h_push(body,script)
               h_push(head,title)
               h_push(html,head)
               h_push(html,body)
               return h_render(html)
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function app_make(app)
{
 check_arg(is_str,app,"app","str")
 check_arity("same",arguments.length,1)
 const _=cpl_init(app)
 {
  const cpl=_
  {
   const _=to_lit(app)
   {
    const s=_
    {
     log("make",s)
     cpl_include(cpl)
     const _=cpl_generate(cpl)
     {
      const r=_
      {
       const _=concat(app,"-tmp.js")
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
           const _=dup(v)
           {
            const o=_
            {
             o.code=txt_indent(o.code)
             push(r,o)
            }
           }
          }
         }
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
           const _=dup(v)
           {
            const o=_
            {
             o.code=txt_indent(o.code)
             push(r,o)
            }
           }
          }
         }
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
           }
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
 }
}
function cpl_check_syntax(cpl,path)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arity("gte",arguments.length,1)
 if(is_undef(path))
  return cpl_check_syntax(cpl,cpl.target)
 check(is_str,path)
 const _=is_fn(node_argv)?node_argv():node_argv
 {
  const argv=_
  {
   const _=os_run(...argv,"--check",path)
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
                                v.cs=txt_indent(v.cs)
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
                     const _=is_fn(node_context)?node_context():node_context
                     {
                      const context=_
                      {
                       const _=is_fn(node_argv)?node_argv():node_argv
                       {
                        const argv=_
                        {
                         const _=[...time,...argv,cpl.target,...context,...args]
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
 }
}
const app="make"
const compile=1759306929
const pool=["lib-common/abs.cs","lib-common/add.cs","lib-common/and.cs","lib-common/angle.cs","lib-common/append.cs","lib-common/arr.cs","lib-common/asc.cs","lib-common/at.cs","lib-common/back.cs","lib-common/base36-decode.cs","lib-common/base36-encode.cs","lib-common/between.cs","lib-common/brace.cs","lib-common/bracket.cs","lib-common/byte-size.cs","lib-common/capture.cs","lib-common/char-escape.cs","lib-common/check-arg.cs","lib-common/check-arity.cs","lib-common/check.cs","lib-common/chr.cs","lib-common/clear.cs","lib-common/clone.cs","lib-common/cmp.cs","lib-common/collate.cs","lib-common/concat.cs","lib-common/contain.cs","lib-common/count.cs","lib-common/crc.cs","lib-common/cut-l.cs","lib-common/cut-r.cs","lib-common/date-decode.cs","lib-common/date-str.cs","lib-common/dbg/dbg-backtrace.cs","lib-common/dbg/dbg-callstack.cs","lib-common/dbg/dbg-here.cs","lib-common/dbg/dbg-origin-xs.cs","lib-common/dbg/dbg-origin.cs","lib-common/dbg/dbg-source-map.cs","lib-common/dbg/dbg-source.cs","lib-common/dec.cs","lib-common/dedup.cs","lib-common/deinit-common.cs","lib-common/delimit.cs","lib-common/different.cs","lib-common/div.cs","lib-common/drop.cs","lib-common/dump.cs","lib-common/dup.cs","lib-common/eq.cs","lib-common/every.cs","lib-common/explode.cs","lib-common/extract.cs","lib-common/fallback-error.cs","lib-common/filter.cs","lib-common/find.cs","lib-common/flower-box.cs","lib-common/flower.cs","lib-common/fn-args.cs","lib-common/fn-match.cs","lib-common/fn-select.cs","lib-common/front.cs","lib-common/get-type.cs","lib-common/get.cs","lib-common/gn-run.cs","lib-common/gt.cs","lib-common/gte.cs","lib-common/has.cs","lib-common/head.cs","lib-common/iif.cs","lib-common/implode.cs","lib-common/inc.cs","lib-common/init-common.cs","lib-common/insert.cs","lib-common/is/is-access.cs","lib-common/is/is-alnum.cs","lib-common/is/is-alpha.cs","lib-common/is/is-arg.cs","lib-common/is/is-arr.cs","lib-common/is/is-atom.cs","lib-common/is/is-blank.cs","lib-common/is/is-bool.cs","lib-common/is/is-browser.cs","lib-common/is/is-char.cs","lib-common/is/is-comment.cs","lib-common/is/is-composite.cs","lib-common/is/is-container.cs","lib-common/is/is-cool.cs","lib-common/is/is-def.cs","lib-common/is/is-digit.cs","lib-common/is/is-domain.cs","lib-common/is/is-empty.cs","lib-common/is/is-false.cs","lib-common/is/is-fn.cs","lib-common/is/is-fragment.cs","lib-common/is/is-full.cs","lib-common/is/is-gn.cs","lib-common/is/is-identifier.cs","lib-common/is/is-indented.cs","lib-common/is/is-int.cs","lib-common/is/is-ip.cs","lib-common/is/is-ip4.cs","lib-common/is/is-ip6.cs","lib-common/is/is-json.cs","lib-common/is/is-last.cs","lib-common/is/is-lisp.cs","lib-common/is/is-lit-char.cs","lib-common/is/is-lit.cs","lib-common/is/is-ln.cs","lib-common/is/is-lower.cs","lib-common/is/is-mail.cs","lib-common/is/is-many.cs","lib-common/is/is-name.cs","lib-common/is/is-node.cs","lib-common/is/is-none.cs","lib-common/is/is-noun.cs","lib-common/is/is-null.cs","lib-common/is/is-num.cs","lib-common/is/is-numeric.cs","lib-common/is/is-obj.cs","lib-common/is/is-pair.cs","lib-common/is/is-punct.cs","lib-common/is/is-single.cs","lib-common/is/is-space.cs","lib-common/is/is-str.cs","lib-common/is/is-token.cs","lib-common/is/is-trivia.cs","lib-common/is/is-true.cs","lib-common/is/is-tuple.cs","lib-common/is/is-txt.cs","lib-common/is/is-uint.cs","lib-common/is/is-undef.cs","lib-common/is/is-upper.cs","lib-common/is/is-url.cs","lib-common/is/is-user.cs","lib-common/is/is-ushort.cs","lib-common/is/is-vec.cs","lib-common/is/is-word.cs","lib-common/is/is-xn.cs","lib-common/is-rgb.cs","lib-common/join.cs","lib-common/json-decode.cs","lib-common/json-dump.cs","lib-common/json-encode.cs","lib-common/log-append.cs","lib-common/log.cs","lib-common/lt.cs","lib-common/lte.cs","lib-common/main.cs","lib-common/map.cs","lib-common/match-l.cs","lib-common/match-r.cs","lib-common/match.cs","lib-common/max.cs","lib-common/min.cs","lib-common/mod.cs","lib-common/mul.cs","lib-common/mute.cs","lib-common/neq.cs","lib-common/nop.cs","lib-common/not.cs","lib-common/obj/obj-keys.cs","lib-common/obj/obj-length.cs","lib-common/obj/obj-merge.cs","lib-common/obj/obj-order.cs","lib-common/obj/obj-push.cs","lib-common/obj/obj-remove.cs","lib-common/obj/obj-unshift.cs","lib-common/obj/obj-vals.cs","lib-common/obj.cs","lib-common/on.cs","lib-common/or.cs","lib-common/pad-l.cs","lib-common/pad-r.cs","lib-common/paren.cs","lib-common/partial.cs","lib-common/path/path-concat.cs","lib-common/path/path-file.cs","lib-common/path/path-fix.cs","lib-common/path/path-join.cs","lib-common/path/path-split.cs","lib-common/path/path-strip.cs","lib-common/path/path-unfix.cs","lib-common/path/path-up.cs","lib-common/pop.cs","lib-common/prepend.cs","lib-common/profile.cs","lib-common/push.cs","lib-common/put.cs","lib-common/quote.cs","lib-common/random-str.cs","lib-common/random.cs","lib-common/record.cs","lib-common/reject.cs","lib-common/remove.cs","lib-common/repeat.cs","lib-common/replace-rec.cs","lib-common/replace.cs","lib-common/report/report-html.cs","lib-common/report/report-init.cs","lib-common/report/report-log.cs","lib-common/report/report-render.cs","lib-common/report/report-title.cs","lib-common/resolve.cs","lib-common/reverse.cs","lib-common/rgb-init.cs","lib-common/round.cs","lib-common/salt.cs","lib-common/same.cs","lib-common/scan.cs","lib-common/set.cs","lib-common/shift.cs","lib-common/shuffle.cs","lib-common/silent.cs","lib-common/sleep.cs","lib-common/slice-l.cs","lib-common/slice-r.cs","lib-common/slice.cs","lib-common/sort.cs","lib-common/space.cs","lib-common/split.cs","lib-common/squote.cs","lib-common/stop.cs","lib-common/str-indent.cs","lib-common/strip-l.cs","lib-common/strip-r.cs","lib-common/sub.cs","lib-common/tail.cs","lib-common/tbl/tbl-column.cs","lib-common/tbl/tbl-columns.cs","lib-common/tbl/tbl-index.cs","lib-common/tbl/tbl-init.cs","lib-common/tbl/tbl-pad-l.cs","lib-common/tbl/tbl-remove-column.cs","lib-common/tbl/tbl-rename-column.cs","lib-common/tbl/tbl-render.cs","lib-common/tbl/tbl-sort.cs","lib-common/time/time-delay.cs","lib-common/time/time-get.cs","lib-common/time/time-hn.cs","lib-common/time/time-interval.cs","lib-common/time/time-now.cs","lib-common/time/time-str.cs","lib-common/time/time-timeout.cs","lib-common/to/to-base36.cs","lib-common/to/to-dump.cs","lib-common/to/to-fixed.cs","lib-common/to/to-hex.cs","lib-common/to/to-i.cs","lib-common/to/to-int.cs","lib-common/to/to-json.cs","lib-common/to/to-lit.cs","lib-common/to/to-lower.cs","lib-common/to/to-num.cs","lib-common/to/to-str.cs","lib-common/to/to-tbl.cs","lib-common/to/to-uint.cs","lib-common/to/to-upper.cs","lib-common/trace.cs","lib-common/trim-l.cs","lib-common/trim-r.cs","lib-common/trim.cs","lib-common/trunc.cs","lib-common/tty-width.cs","lib-common/txt/txt-compact.cs","lib-common/txt/txt-cut.cs","lib-common/txt/txt-indent.cs","lib-common/txt/txt-inline.cs","lib-common/txt/txt-prepend.cs","lib-common/txt/txt-unindent.cs","lib-common/unaccent.cs","lib-common/unshift.cs","lib-common/unwrap.cs","lib-common/url-beautify.cs","lib-common/url-get.cs","lib-common/url-parse.cs","lib-common/wait.cs","lib-common/xor.cs","lib-node/app-list.cs","lib-node/beep.cs","lib-node/deinit-node.cs","lib-node/digest.cs","lib-node/dir/dir-call.cs","lib-node/dir/dir-change.cs","lib-node/dir/dir-current.cs","lib-node/dir/dir-empty.cs","lib-node/dir/dir-find.cs","lib-node/dir/dir-load.cs","lib-node/dir/dir-make.cs","lib-node/dir/dir-read.cs","lib-node/dir/dir-reset.cs","lib-node/dir/dir-size.cs","lib-node/file/file-append.cs","lib-node/file/file-load.cs","lib-node/file/file-read.cs","lib-node/file/file-save.cs","lib-node/file/file-size.cs","lib-node/file/file-write.cs","lib-node/fs/fs-change-mode.cs","lib-node/fs/fs-copy.cs","lib-node/fs/fs-created.cs","lib-node/fs/fs-mode.cs","lib-node/fs/fs-modified.cs","lib-node/fs/fs-remove.cs","lib-node/http-get.cs","lib-node/init-node.cs","lib-node/inspect.cs","lib-node/ip/ip-host.cs","lib-node/ip/ip-list.cs","lib-node/ip/ip-v4.cs","lib-node/ip/ip-v6.cs","lib-node/is/is-batch.cs","lib-node/is/is-color.cs","lib-node/is/is-dir.cs","lib-node/is/is-file.cs","lib-node/is/is-fs.cs","lib-node/is/is-interactive.cs","lib-node/is/is-readable.cs","lib-node/is/is-symbolic-link.cs","lib-node/no-umask.cs","lib-node/node-argv.cs","lib-node/node-context.cs","lib-node/open.cs","lib-node/os/os-capture.cs","lib-node/os/os-detach.cs","lib-node/os/os-execute.cs","lib-node/os/os-home.cs","lib-node/os/os-host.cs","lib-node/os/os-log.cs","lib-node/os/os-prompt.cs","lib-node/os/os-ps.cs","lib-node/os/os-run.cs","lib-node/os/os-shell.cs","lib-node/os/os-system.cs","lib-node/os/os-user.cs","lib-node/path/path-base.cs","lib-node/path/path-dir.cs","lib-node/path/path-ext.cs","lib-node/path/path-real.cs","lib-node/path/path-tmp.cs","lib-node/path-writable.cs","lib-node/report-mail.cs","lib-node/sigint.cs","lib-node/to-base64.cs","lib-shell/ansi/ansi-encode.cs","lib-shell/ansi/ansi-get-attrs.cs","lib-shell/ansi/ansi-get-colors.cs","lib-shell/ansi/ansi-head.cs","lib-shell/ansi/ansi-init.cs","lib-shell/ansi/ansi-rgb.cs","lib-shell/ansi/ansi-strip.cs","lib-shell/app-token.cs","lib-shell/archive-find.cs","lib-shell/group-list.cs","lib-shell/init-shell.cs","lib-shell/is-local.cs","lib-shell/is-remote.cs","lib-shell/is-root.cs","lib-shell/mail-debug.cs","lib-shell/mail.cs","lib-shell/mime-type.cs","lib-shell/mnt-clean.cs","lib-shell/mnt-unmount.cs","lib-shell/password.cs","lib-shell/ssh/ssh-execute.cs","lib-shell/ssh/ssh-pass.cs","lib-shell/ssh/ssh-system.cs","lib-shell/sudo/sudo-dir-make.cs","lib-shell/sudo/sudo-file-append.cs","lib-shell/sudo/sudo-file-read.cs","lib-shell/sudo/sudo-file-save.cs","lib-shell/sudo/sudo-file-write.cs","lib-shell/sudo/sudo-fs-change-mode.cs","lib-shell/sudo/sudo-fs-remove.cs","lib-shell/sudo/sudo-is-dir.cs","lib-shell/sudo/sudo-is-file.cs","lib-shell/sudo/sudo-path-writable.cs","lib-shell/sudo/sudo.cs","lib-shell/user-created.cs","lib-shell/user-list.cs","lib-compiler/app-home.cs","lib-compiler/app-make.cs","lib-compiler/ast/ast-assign.cs","lib-compiler/ast/ast-begin.cs","lib-compiler/ast/ast-brk.cs","lib-compiler/ast/ast-call.cs","lib-compiler/ast/ast-catch.cs","lib-compiler/ast/ast-check.cs","lib-compiler/ast/ast-cont.cs","lib-compiler/ast/ast-else.cs","lib-compiler/ast/ast-elseif.cs","lib-compiler/ast/ast-fn.cs","lib-compiler/ast/ast-forin.cs","lib-compiler/ast/ast-fornum.cs","lib-compiler/ast/ast-forof.cs","lib-compiler/ast/ast-gn.cs","lib-compiler/ast/ast-if.cs","lib-compiler/ast/ast-include.cs","lib-compiler/ast/ast-inline.cs","lib-compiler/ast/ast-let.cs","lib-compiler/ast/ast-ret.cs","lib-compiler/ast/ast-run.cs","lib-compiler/ast/ast-throw.cs","lib-compiler/ast/ast-try.cs","lib-compiler/ast/ast-var.cs","lib-compiler/ast/ast-while.cs","lib-compiler/ast/ast-yield.cs","lib-compiler/ast/call-ast-block-top.cs","lib-compiler/ast/call-ast-block.cs","lib-compiler/ast/call-ast-declare.cs","lib-compiler/ast/call-ast-for.cs","lib-compiler/ast/call-ast-if.cs","lib-compiler/ast/call-ast-xn.cs","lib-compiler/cpl-block.cs","lib-compiler/cpl-check-fn.cs","lib-compiler/cpl-check-syntax.cs","lib-compiler/cpl-check.cs","lib-compiler/cpl-compile.cs","lib-compiler/cpl-deinit.cs","lib-compiler/cpl-dump.cs","lib-compiler/cpl-fold.cs","lib-compiler/cpl-for.cs","lib-compiler/cpl-generate.cs","lib-compiler/cpl-include.cs","lib-compiler/cpl-init.cs","lib-compiler/cpl-is-call.cs","lib-compiler/cpl-is-leaf.cs","lib-compiler/cpl-load.cs","lib-compiler/cpl-log-error.cs","lib-compiler/cpl-scan.cs","lib-compiler/cpl-scope.cs","lib-compiler/cpl-source-map.cs","lib-compiler/cpl-tokenize.cs","lib-compiler/cpl-translate.cs","lib-compiler/cpl-uncomment.cs","lib-compiler/expr/call-expr-arg.cs","lib-compiler/expr/call-expr-right.cs","lib-compiler/expr/call-expr-rvalue.cs","lib-compiler/expr/expr-arr.cs","lib-compiler/expr/expr-call.cs","lib-compiler/expr/expr-iif.cs","lib-compiler/expr/expr-in.cs","lib-compiler/expr/expr-inline.cs","lib-compiler/expr/expr-instanceof.cs","lib-compiler/expr/expr-new.cs","lib-compiler/expr/expr-not.cs","lib-compiler/expr/expr-obj.cs","lib-compiler/expr/expr-run.cs","lib-compiler/expr/expr-value.cs","app-make/init.cs","fn abs x:num"," ret Math.abs x","end","fn add x:num y:num z:etc"," let r inline \"x+y\"",""," if is_full z","  ret add r z:etc"," ret r","fn and x:bool y:bool z:etc"," let r inline \"x&&y\"","  ret and r z:etc","fn angle x:str"," ret concat \"<\" x \">\"","fn append x:arr y:arr"," for y","  push x v"," end","fn arr x:etc"," ret inline \"[...x]\"","fn asc x:char"," ret x.charCodeAt 0","fn at x:vec y:uint z"," let n dec x.length"," check between y 0 n"," if is_undef z","  ret inline \"x[y]\""," inline \"x[y]=z\"","fn back x:vec y z"," if is_undef y","  ret back x 0"," check is_uint y"," check lt y x.length"," let n sub x.length y"," let n dec n","  ret at x n"," at x n z","fn base36_decode x:str"," var r \"\""," let a explode x"," while is_full a","  let a2 slice_l a 4","  shift a 4","  let s implode a2","  let n Number.parseInt s 36","  let range mul 256 256","  check is_uint n","  check lte n range","  let c chr n","  assign r concat r c","fn base36_encode x:str"," forof x","  let s asc v","  let s to_base36 s","  let s pad_l s \"0\" 4","  assign r concat r s","fn between x:num y:num z:num"," check gte z y"," if lt x y","  ret false"," if gt x z"," ret true","fn brace x:str"," ret concat \"{\" x \"}\"","fn bracket x:str"," ret concat \"[\" x \"]\"","fn byte_size x:uint"," let kb 1024"," let mb mul kb 1024"," let gb mul mb 1024"," let tb mul gb 1024"," if lt x kb","  let s to_fixed x","  ret concat s \"b\""," if lt x mb","  let s div x kb","  let s trunc s","  let s to_fixed s","  ret concat s \"Kb\""," if lt x gb","  let s div x mb","  ret concat s \"Mb\""," if lt x tb","  let s div x gb","  ret concat s \"Gb\""," let s div x tb"," let s trunc s"," let s to_fixed s"," ret concat s \"Tb\"","fn capture x:fn y:etc"," let o record x y:etc"," ret o.output","fn char_escape x:char"," let r json_encode x"," let r strip_l r \"\\\"\""," let r strip_r r \"\\\"\"","fn check_arg is arg name type"," let test is arg"," if is_true test","  ret"," let s_name to_lit name"," let s_type to_lit type"," let s_given get_type arg"," let s_given to_lit s_given"," let s_given space s_given \"given\""," let s_given paren s_given"," let message space \"Expecting argument\" s_name \"to be of type\" s_type s_given"," let message concat message \".\""," stop message","inline \"function check_arity(operator,length,arity)\"","inline \"{\"","inline \" return\"","inline \" if(operator===\\\"same\\\")\"","inline \" {\"","inline \"  if(length===arity)\"","inline \"   return\"","inline \" }\"","inline \"\"","inline \" if(operator===\\\"gte\\\")\"","inline \"  if(length>=arity)\"","inline \" const message=\\\"Expecting \\\"+arity+\\\" argument(s) (\\\"+length+\\\" given)\\\"\"","inline \" throw new Error(message)\"","inline \"}\"","fn check is args:etc"," if is_true is","  if is_empty args","   ret"," elseif is_fn is","  let b is args:etc","  if is_true b","  let name is.name","  if match_l name \"is_\"","   let arg front args","   let name strip_l name \"is_\"","   let s_name to_lit name","   let s_given get_type arg","   let s_given to_lit s_given","   let s_given space s_given \"given\"","   let s_given paren s_given","   let message space \"Expecting a value of type\" s_name s_given","   let message concat message \".\"","   stop message","  elseif same name \"not\"","   let is front args","   let name strip_l is.name \"is_\"","   let s_name space \"not\" name","   let s_name to_lit s_name","   let message space \"Check failed calling\" s_name","  else","  end"," stop \"check\"","fn chr x:ushort"," ret String.fromCharCode x","fn clear x:arr"," x.splice 0","fn clone x"," if is_undef x","  check same arguments.length 1"," let history arr"," fn visit x","  if is_container x","   push history x","  if is_arr x","   let r arr","   forof x","    if contain history v","     push r null","     cont","    end","    let v visit v","    push r v","   end","   ret r","  elseif is_obj x","   let r obj","   forin x","    let v get x k","     put r k null","    put r k v","   ret value x"," ret visit x","fn cmp x:def y:def"," if same x y","  ret 0"," if is_arr x","  if is_arr y","   fornum min x.length y.length","    let xval at x i","    let yval at y i","    let n cmp xval yval","    if different n 0","     ret n","   ret cmp x.length y.length"," if is_obj x","  if is_obj y","   let xkeys obj_keys x","   let ykeys obj_keys y","   let xvals obj_vals x","   let yvals obj_vals y","   fornum min xkeys.length ykeys.length","    let xkey at xkeys i","    let ykey at ykeys i","    let n cmp xkey ykey","    let xval at xvals i","    let yval at yvals i","   ret cmp xkeys.length ykeys.length"," if inline \"x>y\"","  ret 1"," if inline \"x<y\"","  ret -1"," ret 0","fn collate x:arr"," fn is_delimited x","  if not is_str x","   ret false","  if same x \"_\"","  if is_punct x","   ret true","  if is_space x"," let a arr","  if is_empty a","   push a v","   cont","  let left back a","  let left back left","  let right front v","  if is_delimited left","  elseif is_delimited right","   push a right","  let s concat left right","  drop a","  push a s"," ret join a \" \"","fn concat x:etc"," ret implode x","fn contain x:composite y","  check same arguments.length 2"," if is_str x","  check is_str y","  if is_empty y","  ret x.includes y"," elseif is_arr x"," elseif is_obj x","  forin x","   let v get x k","   if same v y","    ret true"," else","  stop","fn count x:arr y:def"," var r 0","  if same v y","   assign r inc r","fn crc x:str"," for a","  for s","   let n asc v","   assign r add r n","fn cut_l x:str y:uint"," if lte x.length y","  ret x"," let length sub y 3"," let s slice_r x length"," let a explode s"," while true","  let c front a","  if is_punct c","   shift a","  elseif is_space c","   brk"," let r implode a"," let r concat \"...\" r","fn cut_r x:str y:uint"," check is_str x"," let ellipsis \"...\""," let length sub y ellipsis.length"," let s slice_l x length","  let c back a","   drop a"," let r concat r ellipsis","fn date_decode x:str"," let r new Date x"," let r r.getTime"," let r div r 1000"," let r trunc r","fn date_str x","  let n time_get","  ret date_str n"," check is_num x"," let n mul x 1000"," let o new Date n"," let y o.getFullYear"," let m o.getMonth"," let m inc m"," let m pad_l m \"0\" 2"," let d o.getDate"," let d pad_l d \"0\" 2"," ret concat y \"/\" m \"/\" d","fn dbg_backtrace stack map"," if is_undef stack","  let e new Error \"backtrace\"","  ret dbg_backtrace e.stack map"," check is_str stack"," if is_undef map","  let map dbg_source_map","  ret dbg_backtrace stack map"," check is_obj map"," let r tbl_init"," let stack trim stack"," let stack split stack"," let source map.source"," for stack","  if is_node","   if not contain v map.script","    cont","  let s trim v","  let s replace s \"@\" \" \"","  let a split s \" \"","  let s front a","  if same s \"at\"","  var fn shift a","  if is_empty fn","   assign fn \"anonymous\"","  if not is_noun fn","  let a back a","  let a split a \":\"","  if not is_many a","  let njs back a 1","  let njs to_uint njs","  var index dec njs","  if gte index source.length","  let location at source index","  if is_null location","  let js trim location.js","  let cs trim location.cs","  let path location.path","  let ncs location.index","  let ncs inc location.index","  let o obj fn njs js path ncs cs","  push r o","fn dbg_callstack stack map","  let e new Error \"callstack\"","  ret dbg_callstack e.stack"," let r dbg_backtrace stack map"," while is_full r","  let frame front r","  let fn frame.fn","  if same fn \"throw\"","  elseif same fn \"stop\"","  elseif same fn \"check\"","  elseif same fn \"check_arg\"","  elseif same fn \"check_arity\"","  shift r","fn dbg_here"," let t dbg_callstack"," tbl_remove_column t \"njs\""," tbl_remove_column t \"js\""," let t tbl_render t"," log t","fn dbg_origin_xs stack code_type map","  let e new Error \"origin-xs\"","  ret dbg_origin_xs e.stack"," check is_str code_type","  ret dbg_origin_xs stack code_type map"," let frames dbg_callstack stack map"," let frames head frames 5"," for frames","  var t null","  var label null","  if same code_type \"cs\"","   let file get map.files v.path","   let line v.ncs","   assign t dbg_origin file line","   assign label \"stack\"","  elseif same code_type \"js\"","   let line v.njs","   assign t dbg_origin map.source line \"js\"","   assign label \"javacript\"","   stop","  let s tbl_render t","  let s txt_prepend s \"> \"","  let n inc i","  let title concat \"#\" n","  let title space label \"frame\" title \"/\" v.fn","  flower title","  log s","fn dbg_origin source:arr line:uint key depth"," if is_undef key","  ret dbg_origin source line \"\" depth"," check is_str key"," if is_undef depth","  ret dbg_origin source line key 15"," check is_uint depth"," fn find_origin fn:fn source:arr line:uint key:str depth:uint","  var n depth","  var r fn source line key n","  while lte n source.length","   if gte r.length depth","    brk","   assign n inc n","   assign r fn source line key n","   let end add line r.length","   if gte end source.length","  ret r"," fn origin source:arr line:uint key:str depth:uint","  let r arr","  let a arr","  let n div depth 2","  let n trunc n","  var n sub line n","  let length min source.length depth","  let nup add n length","  if lt n 1","   assign n 1","  elseif gte nup source.length","   assign n sub source.length length","   if lt n 1","    assign n 1","  fornum length","   let n add n i","   var p \" \"","   if same n line","    assign p \">\"","   let index dec n","   var code at source index","   if is_empty key","    check is_str code","   else","    assign code get code key","   let o obj n p code","   push a o","  let a2 arr","  forof a","   push a2 v.code","  let s join a2","  let s txt_unindent s","  let a3 split s","  for a3","   let o at a i","   assign o.code v","   if is_empty v.code","   push r v"," fn origin_center source:arr line:uint key:str depth:uint","  let a origin source line key depth","  ret center a"," fn center x:arr","  var middle get_position x","  var range middle","  let length mul range 2","  let length inc length","  if gt length x.length","   assign range sub x.length middle","   assign range dec range","  let ybefore sub middle range","  let yafter inc middle","  let before slice x ybefore range","  let center at x middle","  let after slice x yafter range","  let r arr before:etc center after:etc"," fn get_position x:arr","  for x","   if same v.p \">\"","    ret i"," let centered find_origin origin_center source line key depth"," if same centered.length depth","  ret centered"," ret find_origin origin source line key depth","fn dbg_source_map"," let lines_js split source"," let paths arr"," forof relatives","  let path at pool v","  push paths path"," let files obj"," forin contents","  let content get contents k","  let n to_uint k","  let path at pool n","  let lines arr","  forof content","   let s at pool v","   push lines s","  put files path lines"," let source arr"," if is_node"," elseif is_browser","  fornum 8","   push source null"," for paths","  if gte i paths.length","  let path at paths i","  let index at indices i","  var line_js i","  elseif is_browser","   assign line_js add line_js 5","  let js at lines_js line_js","  let cs get files path","  let cs at cs index","  let o obj path index js cs","  push source o"," var script null","  assign script global.script"," ret obj script files source","fn dbg_source x"," fn get_source","   ret file_load script","  check is_browser","  let s to_str html.outerHTML","  let lines split s","  for lines","   let s trim v","   if not match_l s \"<\"","   at lines i \"\"","  while is_full lines","   let s back lines","   let s trim s","   if is_empty s","   elseif match_l s \"<\"","   drop lines","  let lines txt_unindent lines","  ret join lines","  assign r get_source","  assign r file_load x"," let r trim_r r"," let r split r","  let s pop r","  if match_l s \"const app=\""," let r join r","fn dec x:num"," ret sub x 1","fn dedup x:arr"," let r arr"," for x","  if not contain r v","fn deinit_common"," if gte verbose 0","  let profile time_now","  let profile time_delay profile","  let profile to_lit profile","  let profile concat \"profile=\" profile","  log app profile","  deinit_node","  deinit_browser","fn delimit x:str y","  ret delimit x is_fragment"," check is_fn y","  let right v","  if is_empty r","   push r right","  let left back r","  let fragment concat left right","  if is_fragment fragment","   drop r","   push r fragment","fn different x y"," ret inline \"x!==y\"","fn div x:num y:num z:etc"," check different y 0"," let r inline \"x/y\"","  ret div r z:etc","fn drop x:arr y","  ret drop x 1"," check lte y x.length"," pop x y","fn dump x"," let name fn_args \"dump\""," check is_single name"," let name front name","  let s to_lit x","  log name s","  log name x","fn dup x:container","  ret slice x 0","  let r obj","  obj_merge r x","fn eq x:def y:def"," let n cmp x y"," ret inline \"n===0\"","fn every x:arr y:fn","  if not y v","fn explode x:str","  push r v","fn extract x:arr y:def"," var r false"," let a dup x"," clear x"," forof a","   assign r true","   push x v","fn fallback_error x:str y:obj z"," var print value log"," let title space \"Fallback\" x"," try"," catch","  assign print value console.log"," let s to_str y.stack"," let s trim_r s"," let s txt_prepend s \"error-in-error> \""," print s"," check is_obj z"," let s to_str z.stack"," let s txt_prepend s \"original-error> \"","fn filter x:arr y:fn"," ret x.filter y","fn find x:composite y:def"," if is_vec x","  ret x.indexOf y","    ret k","fn flower_box x:str"," let n tty_width"," let s repeat \"*\" n"," log s"," flower x","fn flower x","  let s repeat \"*\" n"," let s1 repeat \"*\" n"," let s2 repeat \"*\" 2"," let s2 concat s2 \" \""," let s2 concat s2 x"," let s2 concat s2 s1"," let s2 slice_l s2 n"," log s2","fn fn_args x:str"," for dbg_callstack","  let a split v.cs \" \"","  let n find a x","  if lt n 0","  let index inc n","  ret slice a index"," stop","fn fn_match x:str"," let r obj"," forin fns","  if not match k x","  let v get fns k","  put r k v","fn fn_select x:str"," let pattern concat x \"*\""," let fns fn_match pattern","  let name strip_l k x","  put r name v","fn front x:vec"," check is_full x"," ret at x 0","fn get_type x"," if is_null x","  ret \"null\""," ret typeof x","fn get x:obj y:str z"," if has x y"," if is_def z","  ret z","fn gn_run x:gn y:etc"," let generator x y:etc"," fn on_timer","  let iterator generator.next","  if iterator.done","  time_timeout on_timer"," on_timer","fn gt x:def y:def"," ret inline \"n>0\"","fn gte x:def y:def"," ret inline \"n>=0\"","fn has x:obj y:str"," ret inline \"y in x\"","fn head x:vec y:uint"," if lt x.length y","  if is_str x","   ret x","  elseif is_arr x","   ret dup x"," ret slice_l x y","fn iif x:bool y:def z:def"," if x","  ret y"," ret z","fn implode x:arr"," ret join x \"\"","fn inc x:num"," ret add x 1","fn init_common"," fn log_compile","  let compile time_hn compile","  let compile to_lit compile","  let compile concat \"compile=\" compile","  let sloc split source","  let sloc sloc.length","  let sloc concat \"sloc=\" sloc","  log app compile sloc"," assign global.unit \"1.3vw\""," assign global.padding \"0.3vw\""," assign global.border \"0.1vw\""," assign global.font_family \"monospace\""," assign global.font_size unit"," var args arr","  assign args init_node","  init_browser"," assign global.source dbg_source"," let skip arr \"init_common\" \"init_node\" \"init_browser\"","  if contain skip k","  if match k \"init_*\"","   let v get fns k","   v","  log_compile"," if is_fn init","  init args:etc","  deinit_common"," elseif is_gn init","  let generator init args:etc","  fn on_timer","   let iterator generator.next","   if iterator.done","    deinit_common","    ret","   time_timeout on_timer","  on_timer","fn insert x:arr y:uint z:etc"," x.splice y 0 z:etc","fn is_access x"," if not is_str x"," if is_empty x"," let a split x \".\""," if is_single a"," ret every a is_identifier","fn is_alnum x","  if same v \"_\"","  elseif is_alpha v","  elseif is_digit v","fn is_alpha x","  if is_lower v","  elseif is_upper v","fn is_arg x"," if is_identifier x","  ret true"," if is_access x"," if is_numeric x"," if is_lit x"," if is_lit_char x"," ret false","fn is_arr x"," ret Array.isArray x","fn is_atom x"," if is_alnum x"," if is_tuple x","fn is_blank x"," if is_space x","fn is_bool x"," let s get_type x"," ret same s \"boolean\"","fn is_browser"," ret has_window","fn is_char x"," ret same x.length 1","fn is_comment x"," if not is_ln x"," ret match_l x \"//\"","fn is_composite x","fn is_container x","fn is_cool x"," if is_num x","fn is_def x"," ret not is_undef x","fn is_digit x","  if not contain digit v","fn is_domain x"," if not is_user x"," let tld pop a"," if not is_alnum tld","  if is_alnum v","  elseif is_lisp v","fn is_empty x","  ret same x.length 0","  let keys obj_keys x","  ret is_empty keys","fn is_false x"," ret same x false","fn is_fn x"," if different s \"function\""," if same x.constructor.name \"GeneratorFunction\"","fn is_fragment x","fn is_full x"," if not is_composite x"," ret not is_empty x","fn is_gn x"," if different x.constructor.name \"GeneratorFunction\"","fn is_identifier x"," let s front x"," if same s \"_\""," elseif is_alpha s","  if not is_alnum v","fn is_indented x"," forof split x","  if is_empty v","  let c front v","  if not is_space c","fn is_int x"," ret Number.isInteger x","fn is_ip x"," if is_ip4 x"," if is_ip6 x","fn is_ip4 x"," if different a.length 4","  if not is_digit v","  let n to_uint v","  if gt n 255","fn is_ip6 x"," let a split x \":\""," if lt a.length 3"," if gt a.length 8","  if contain v \"_\"","  if gt v.length 4","fn is_json x","  json_decode x","fn is_last x:vec y:uint"," ret same n y","fn is_lisp x"," let a split x \"-\""," ret every a is_alnum","fn is_lit_char x"," if not match_l x \"'\""," if not match_r x \"'\""," let s strip_l x \"'\""," let s strip_r s \"'\""," if is_empty s"," let s concat quote s"," ret is_lit s","fn is_lit x"," if not is_json x"," let v json_decode x"," if not is_str v"," let s json_encode v"," ret same s x","fn is_ln x"," ret not is_txt x","fn is_lower x","  if not contain lower v","fn is_mail x"," let a split x \"@\""," if not is_pair a"," let user shift a"," let domain shift a"," if not is_user user"," if not is_domain domain","fn is_many x"," if not is_vec x"," ret gt x.length 1","fn is_name x","fn is_node"," ret not is_browser","fn is_none x","fn is_noun x","fn is_null x"," ret same x null","fn is_num x"," if Number.isNaN x"," if same x Number.NEGATIVE_INFINITY"," if same x Number.POSITIVE_INFINITY"," ret same s \"number\"","fn is_numeric x"," if not is_num v","fn is_obj x"," ret same s \"object\"","fn is_pair x"," ret same x.length 2","fn is_punct x","  if not contain punct v","fn is_single x","fn is_space x"," let s trim x"," ret is_empty s","fn is_str x"," ret same s \"string\"","fn is_token x"," if is_atom x"," if is_comment x","fn is_trivia x","fn is_true x"," ret same x true","fn is_tuple x","  if is_identifier v","fn is_txt x","  ret fals"," ret contain x lf","fn is_uint x"," if not is_int x"," ret gte x 0","fn is_undef x"," ret same x undefined","fn is_upper x","  if not contain upper v","fn is_url x"," let s to_lower x"," if match_l s \"http://\""," elseif match_l s \"https://\"","  url_parse x","fn is_user x"," for split x \"-\"","  for split v \".\"","   if not is_alnum v","    ret false","fn is_ushort x"," if not is_uint x"," let n mul 256 256"," ret lt x n","fn is_vec x","fn is_word x"," if contain x \" \""," if contain x lf"," if contain x cr","fn is_xn x"," if is_fn x"," if is_gn x","fn is_rgb x"," if not is_uint x.r"," if not is_uint x.g"," if not is_uint x.b","fn join x:arr y","  ret join x lf"," check is_str y"," ret x.join y","fn json_decode x:str"," ret JSON.parse x","fn json_dump x:def"," ret JSON.stringify x null 1","fn json_encode x","  ret \"undefined\""," ret JSON.stringify x","fn log_append x:etc"," fn escape x:str","  forof x","   if is_alnum v","    push a v","   if is_punct v","   let s char_escape v","   push a s","  ret implode a"," let parts arr","  if is_str v","   let s ansi_strip v","   push parts s","  let s inspect v false","  push parts s"," let pid pad_l process.pid \" \" 6"," let time time_get"," let date date_str time"," let time time_str time true"," let inputs join parts \" \""," let inputs split inputs"," let inputs map inputs escape"," let lines arr"," if is_empty inputs","  let s space pid date time","  push lines s","  forof inputs","   let s space pid date time v"," let content join lines"," let content concat content lf"," if not is_file config_log","  let dir path_dir config_log","  dir_make dir","  file_write config_log content"," let size file_size config_log"," let limit mul 16 1024 1024"," if lt size limit","  file_append config_log content"," let a file_load config_log"," let a split a"," let half div a.length 2"," let half trunc half"," shift a half"," append a lines"," let content join a"," file_write config_log content","fn log x:etc"," fn node_log x:etc","  let parts arr","   if is_str v","    push parts v","   let s inspect v","  let content join parts \" \"","  if is_empty content","   console.log \" \"","   forof split content","    let n tty_width","    let line ansi_head v n","    console.log line","  if log_file","   log_append x:etc"," if is_str output","   let s to_dump v","  let s join a \" \"","  let s concat s lf","  let s concat output s","  assign global.output s","  node_log x:etc","  if is_empty x","   console.log x:etc","fn lt x:def y:def"," ret inline \"n<0\"","fn lte x:def y:def"," ret inline \"n<=0\"","fn main"," var has_window true","  inline \"window\"","  assign has_window false"," if has_window","  assign window.global window","  assign global.has_window true","  assign global.has_window false"," assign global.zombie false"," assign global.start time_get"," assign global.lf \"\\n\""," assign global.cr \"\\r\""," assign global.crlf concat cr lf"," assign global.punct \"!\\\"#$%&'()*+,-./:;<=>?@[\\\\]^`{|}~\""," assign global.digit \"0123456789\""," assign global.lower \"abcdefghijklmnopqrstuvwxyz\""," assign global.upper to_upper lower"," assign global.output null"," assign global.verbose 0"," assign global.minute 60"," assign global.hour mul 60 minute"," assign global.day mul 24 hour"," assign global.week mul 7 day"," assign global.month mul 30 day"," assign global.year mul 12 month"," assign global.traces arr","  init_common","  fn on_load x:obj","   if same document.readyState \"complete\"","    init_common","    assign window.onload null","  assign window.onload on on_load","fn map x:arr y:fn","  let v y v","  check is_def v","fn match_l x:str y:str"," if is_empty y"," if gt y.length x.length"," let s slice_l x y.length"," ret same s y","fn match_r x:str y:str"," let s slice_r x y.length","fn match x:str y:str"," let s replace y \".\" \"\\\\.\""," let s replace s \"*\" \".*\""," let s concat \"^\" s \"$\""," let s new RegExp s"," ret s.test x","fn max x:etc"," ret Math.max x:etc","fn min x:etc"," ret Math.min x:etc","fn mod x:num y:num z:etc"," let r inline \"x%y\"","  ret mod r z:etc","fn mul x:num y:num z:etc"," let r inline \"x*y\"","  ret mul r z:etc","fn mute x:fn y:etc"," ret o.result","fn neq x:def y:def"," ret not eq x y","fn nop","fn not x y:etc"," if is_bool x","  ret not x"," elseif is_fn x","  let v x y:etc","  ret not v","fn obj_keys x:obj"," ret Object.keys x","fn obj_length x:obj"," let keys obj_keys x"," ret keys.length","fn obj_merge x:obj y:obj"," Object.assign x y","fn obj_order x:obj keys:etc"," for keys","  let value get x v","  put r v value"," forin x","  let v get x k","  if has r k","fn obj_push x:obj key:str val:def","  if same k key"," put r key val","fn obj_remove x:obj key:str","fn obj_unshift x:obj key:str val:def","fn obj_vals x:obj"," ret Object.values x","fn obj"," ret inline \"{}\"","fn on x:fn y:etc"," let fn value x"," let args y"," fn on_fn x:etc","  if zombie","  ret fn args:etc x:etc"," if zombie"," ret value on_fn","fn or x:bool y:bool z:etc"," let r inline \"x||y\"","  ret or r z:etc","fn pad_l x:cool padding length"," if is_uint x","  let s to_json x","  if is_undef padding","   if is_undef length","    ret pad_l s \"0\" 3","   ret pad_l s \"0\" length","  ret pad_l s padding length"," check is_str padding"," check is_uint length"," ret x.padStart length padding","fn pad_r x:cool padding length","    ret pad_r s \"0\" 3","   ret pad_r s \"0\" length","  ret pad_r s padding length"," ret x.padEnd length padding","fn paren x:str"," ret concat \"(\" x \")\"","fn partial x:fn y:etc"," fn result x:etc"," ret value result","fn path_concat x:str y:str z:etc"," let x strip_r x \"/\""," let y strip_l y \"/\""," let r concat x \"/\" y","  ret path_concat r z:etc","fn path_file x:str"," let s path_base x"," let a split s \".\"","  ret s"," drop a"," ret join a \".\"","fn path_fix x:str"," if match_r x \"/\""," ret concat x \"/\"","fn path_join x:arr"," ret join x \"/\"","fn path_split x:str"," ret split x \"/\"","fn path_strip x:str"," ret strip_r x \"/\"","fn path_unfix x:str","fn path_up x:str"," let a path_split x"," pop a"," ret path_join a","fn pop x:arr y","  ret pop x 1"," if same y 1","  let r back x","  remove x n 1","  ret value r"," remove x n y","fn prepend x:arr y:arr"," let a dup y"," reverse a","  unshift x v","fn profile x:xn y:etc"," var n null"," let before time_now","  assign r x y:etc"," elseif is_gn x","  let generator x y:etc","  while true","    assign r iterator.value"," let after time_now"," let time sub after before"," let time to_fixed time"," let time concat time \"s\""," let time to_lit time"," let time concat \"profile=\" time"," log x.name time","fn push x:arr y"," x.push y","fn put x:obj y:str z","  check same arguments.length 3"," set x y z","fn quote x:str"," ret concat \"\\\"\" x \"\\\"\"","fn random_str x:uint alnum"," if is_undef alnum","  ret random_str x true"," check is_bool alnum"," let range mul 26 256"," while lt a.length x","  let n random range","  if alnum","   if is_alnum c","    push a c","   push a c"," ret implode a","fn random x","  ret random Number.MAX_SAFE_INTEGER"," check gte x 0"," let r Math.random"," let r mul r x","  ret trunc r","fn record x:fn y:etc"," check is_null output"," assign global.output \"\""," var result null","  assign result x y:etc"," catch e","  assign global.output null","  throw e"," let s trim_r output"," assign r.result result"," assign r.output s","fn reject x:arr y:fn"," check is_arr x","  if y v","fn remove x:arr y:uint z","  ret remove x y 1"," check is_uint z"," check between y 0 x.length"," let n add y z"," check between n 0 x.length"," x.splice y z","fn repeat x:str y:uint"," ret x.repeat y","fn replace_rec x:str y:str z:str"," var r x"," while contain r y","  assign r replace r y z","fn replace x:vec y:str z:str","  let a split x y","  ret join a z","    push r z","fn report_html report:obj length human"," if is_def length","  check is_uint length"," var txt report_render report human","  assign txt txt_cut txt length"," let html h_html"," let head h_head"," let title h_title report.title"," let body h_body"," h_font_family body font_family"," h_font_size body font_size"," let pre h_pre txt"," h_push body pre"," h_push head title"," h_push html head"," h_push html body"," let s h_render html"," ret s","fn report_init error query map"," if is_str error","  let stack error","  let lines split error","  let message front lines","  let errno null","  let error obj stack message errno","  ret report_init error query map"," check is_obj error"," if is_def query","  check is_obj query"," fn log_browser","  let location to_str location","  var referrer null","  if is_full document.referrer","   let url_referer url_parse document.referrer","   let url_location url_parse location","   if different url_referer.host url_location.host","    assign referrer document.referrer","  let browser browser_get","  let agent navigator.userAgent","  let uptime time_now","  let uptime time_delay uptime","  let o obj location referrer browser agent uptime","  let t to_tbl o"," fn log_server","  let url query.url.href","  let headers query.request.headers","  if has headers \"referrer\"","   assign referrer get headers \"referrer\"","  elseif has headers \"referer\"","   assign referrer get headers \"referer\"","  let remote query.remote","  let o obj url referrer remote uptime"," fn log_trace","  if is_empty traces","  flower \"trace\"","  forof traces","   log \">\" v"," fn log_backtrace stack:str map:obj","  let backtrace dbg_backtrace stack map","  if is_empty backtrace","  tbl_remove_column backtrace \"njs\"","  tbl_remove_column backtrace \"js\"","  let backtrace tbl_render backtrace","  let backtrace txt_prepend backtrace \"> \"","  flower \"backtrace\"","  log backtrace"," let stack error.stack"," var message error.message"," let type error.constructor.name"," let type to_lower type"," var title \"\""," let tags arr"," if is_word message","  assign title \"An error has occured\"","  let message strip_r message \".\"","  assign title message"," push tags app"," if same type \"error\""," if same type \"object\"","  push tags type"," if is_browser","  push tags location.hostname"," elseif is_node","  let errno error.errno","  if is_undef errno","  elseif is_null errno","  elseif same errno 0","   let errno concat \"errno=\" errno","   push tags errno","  let host os_host","  push tags host"," var browser \"\""," var server \"\""," let cs capture dbg_origin_xs stack \"cs\" map"," let backtrace capture log_backtrace stack map"," let js capture dbg_origin_xs stack \"js\" map"," var empty true","  assign browser capture log_browser","  assign empty false"," if is_obj query","  assign server capture log_server"," if is_full trace"," if is_full cs"," if is_full backtrace"," if gt verbose 0","  if is_full js","   assign empty false"," if empty","  trace \"No error stack.\""," let trace capture log_trace"," ret obj title tags app message browser server trace cs backtrace js","fn report_log report:obj"," let title report_title report"," flower_box title"," if is_full report.browser","  log report.browser"," if is_full report.server","  log report.server"," if is_full report.trace","  log report.trace"," if is_full report.cs","  log report.cs"," if is_full report.backtrace","  log report.backtrace","  if is_full report.js","   log report.js"," let end space \"end-report\" report.app \"/\" report.message"," flower end","fn report_render report:obj human"," if is_undef human","  ret report_render report true"," fn log_title","  let title report_title report","  flower_box title"," let title capture log_title"," push a title","  push a \"\"","  push a report.browser","  push a report.server","  push a report.trace","  push a report.cs","  push a report.backtrace"," if is_full report.js","  push a report.js"," if human","  push a \"Refresh the page or go to another URL to continue.\""," ret join a","fn report_title report:obj"," fn format_tag x:str","  if is_word x","  ret to_lit x"," let tags map report.tags format_tag"," let tags join tags \" / \""," let tags paren tags"," ret space report.title tags","gn resolve x:obj"," check is_obj x"," var done false"," var error null"," fn on_then x:def","  assign result x","  assign done true"," fn on_catch x","  check is_obj x","  assign error x"," let promise x.then on_then"," promise.catch on_catch"," while not done","  yield"," if is_obj error","  throw error"," ret result","fn reverse x:vec","  let r explode x","  reverse r","  let r implode r","  x.reverse","fn rgb_init r:uint g:uint b:uint"," ret obj r g b","fn round x:num"," ret Math.round x","fn salt x:str y","  ret salt x \"azertyuiop\""," let a1 explode x"," let a2 explode y"," while is_full a1","  if is_empty a2","   let a explode y","   append a2 a","  let c1 shift a1","  let c2 shift a2","  let n1 asc c1","  let n2 asc c2","  let n xor n1 n2","fn same x y"," ret inline \"x===y\"","fn scan x:str reducer delimiter"," if is_undef reducer","  ret scan x is_token"," check is_fn reducer"," if is_undef delimiter","  ret scan x reducer is_fragment"," check is_fn delimiter"," fn group x:arr reducer:fn","  let fragments dup x","  while is_full fragments","   let a reduce fragments reducer","   if is_full a","    let s implode a","    push r s","    shift fragments a.length","    let s shift fragments"," fn reduce x:arr reducer:fn","  check is_fn reducer","  check is_full x","  let r dup x","  while is_full r","   let s implode r","   if reducer s"," let a delimit x delimiter"," ret group a reducer","fn set x:obj y:str z","fn shift x:arr y","  ret shift x 1","  let r front x","  remove x 0 1"," remove x 0 y","fn shuffle x:arr","  let n random a.length","  let v at a n","  remove a n","fn silent x:fn y:etc"," let previous verbose"," assign verbose sub verbose 2"," var r null","  assign verbose previous"," assign verbose previous","gn sleep x:num"," let start time_now","  let elapsed time_now","  let elapsed sub elapsed start","  if gte elapsed x","fn slice_l x:vec y:uint"," ret slice x 0 y","fn slice_r x:vec y:uint"," ret slice x n y","fn slice x:vec index:uint length"," check lte index x.length"," if is_undef length","  let n sub x.length index","  ret slice x index n"," check lte length x.length"," let n add index length"," check lte n x.length"," let r x.slice index n"," check same r.length length","fn sort x:container y","  if is_undef y","   x.sort","   check is_fn y","   x.sort y","  fn compare x:obj y:obj","   ret cmp x.key y.key","   ret sort x compare","  check is_fn y","   let key k","   let value get x k","   let o obj key value","  sort a y","  for a","   let k v.key","   put r v.key v.value","fn space x:etc"," ret join x \" \"","fn split x:str y","  ret split x lf","  ret arr"," ret x.split y","fn squote x:str"," ret concat \"'\" x \"'\"","fn stop x","  ret stop \"stop\""," throw new Error x","fn str_indent x:str"," if is_blank x"," let s trim_l x"," ret sub x.length s.length","fn strip_l x:str y:str"," if match_l x y","  let n sub x.length y.length","  ret slice_r x n"," ret x","fn strip_r x:str y:str"," if match_r x y","  ret slice_l x n","fn sub x:num y:num z:etc"," let r inline \"x-y\"","  ret sub r z:etc","fn tail x:vec y:uint"," ret slice_r x y","fn tbl_column x:arr y:str","  let s get v y","  push r s","fn tbl_columns x:arr"," let first front x"," ret obj_keys first","fn tbl_index x:arr","  let v obj_unshift v \"#\" n","fn tbl_init x"," ret arr","fn tbl_pad_l x:arr column:str length","  var length 0","   var cell get v column","   if not is_str cell","    assign cell json_encode cell","   assign length max length cell.length","  ret tbl_pad_l x y length","  let cell get v column","  let cell pad_l cell \" \" length","  set v y cell","fn tbl_remove_column x:arr y:str"," let t dup x"," forof t","  let v obj_remove v y","fn tbl_rename_column x:arr y:str z:str","  let row v","  let o obj","  forin row","   let v get row k","   if same k y","    put o z v","   put o k v","  push x o","fn tbl_render x:arr"," fn stringify_tbl x:arr","   let row dup v","   forin v","    let v get row k","    if is_str v","    let s json_encode v","    set row k s","   push r row"," fn pad_column x:arr","   if is_num v","    let s to_fixed v","    push a s","   elseif is_str v","    stop","   assign length max length v.length","   if is_numeric v","    let s pad_l v \" \" length","    let s pad_r v \" \" length"," let tbl stringify_tbl x"," let titles tbl_columns tbl"," let columns arr"," forof titles","  let title v","  let column tbl_column tbl title","  unshift column title","  let column pad_column column","  push columns column"," var length 0"," forof columns","  let column v","  var n 0","  forof column","   assign n max n v.length","  assign length add length n"," assign length add length columns.length"," assign length dec length"," let separator repeat \"-\" length"," push a separator"," let header arr","  let s shift v","  push header s"," let s join header \" \""," push a s"," let first front columns"," for first","  let line arr","  forof columns","   let s at v i","   push line s","  let s join line \" \"","fn tbl_sort x:arr column:str"," fn compare x:obj y:obj","  let left get x column","  let right get y column","  ret cmp left right"," sort x compare","fn time_delay x:num"," let minute3 mul minute 3"," let hour3 mul hour 3"," let day3 mul day 3"," let month3 mul month 3"," let year3 mul year 3"," if lt x 10","  let n to_fixed x","  ret concat n \"s\""," if lt x minute3","  let n trunc x"," if lt x hour3","  let n div x minute","  ret concat n \"m\""," if lt x day3","  let n div x hour","  ret concat n \"h\""," if lt x month3","  let n div x day","  ret concat n \"d\""," if lt x year3","  let n div x month","  ret concat n \"mo\""," let n div x year"," let n trunc n"," ret concat n \"y\"","fn time_get"," let n Date.now"," ret div n 1000","fn time_hn x:num"," let now time_get"," if same x now","  ret \"now\""," if gt x now","  let n sub x now","  let s time_delay n","  ret concat \"in \" s"," let n sub now x"," let s time_delay n"," ret concat s \" ago\"","fn time_interval x:fn y","  ret time_interval x 0"," let fn on x"," let n mul y 1000"," setInterval fn n","fn time_now"," let n time_get"," ret sub n start","fn time_str x second","  ret time_str n second"," if is_undef second","  ret time_str x false"," let h o.getHours"," let h pad_l h \"0\" 2"," let m o.getMinutes"," let r concat h \"h\" m \"m\""," if not second"," let s o.getSeconds"," let s pad_l s \"0\" 2"," ret concat r s \"s\"","fn time_timeout x:fn y z:etc","  ret time_timeout x 0.01 z:etc"," check is_num y"," let fn on x z:etc"," setTimeout fn n","fn to_base36 x:uint"," ret x.toString 36","fn to_dump x"," let val clone x"," if is_arr val","  if is_empty val","   ret \"arr\"","  push a \"arr\"","  for val","   let sharp concat \"#\" i","   if is_ln s","    let s space \"\" sharp s","    let s2 space \"\" sharp","    let s txt_indent s 2","    push a s2","  push a \"end\"","  ret join a"," elseif is_obj val","   ret \"obj\"","  push a \"obj\"","  forin val","   let v get val k","   var key k","   if not is_word key","    assign key to_lit key","    let s space \"\" key s","    let s2 space \"\" key"," elseif is_word val","  ret to_lit val"," elseif is_fn val","  ret space \"fn\" val.name","  ret json_encode val","fn to_fixed x:num y","  ret to_fixed x 2"," let a x.toFixed y"," let a split a \".\""," let integer front a"," var float back a"," let digits explode float"," while is_full digits","  let c back digits","  if different c \"0\"","  drop digits"," if is_empty digits","  ret integer"," assign float implode digits"," ret concat integer \".\" float","fn to_hex x:uint"," ret x.toString 16","fn to_i x:str"," ret Number.parseInt x","fn to_int x:str"," let r to_num x"," check is_int r","fn to_json x:def"," ret json_encode x","fn to_lit x:str","fn to_lower x:str"," ret x.toLowerCase","fn to_num x:str"," let r json_decode x"," check is_num r","fn to_str x:def"," ret x.toString","fn to_tbl x:obj","  let key k","  let value get x k","  let o obj key value","fn to_uint x:str"," let r to_int x"," check is_uint r","fn to_upper x:str"," ret x.toUpperCase","fn trace x:etc"," if is_single x","  let first front x","  if is_str first","   let a split first","   if is_many a","    forof a","     trace v","  log \"trace>\" x:etc"," elseif same verbose 0","   if not is_str v","  push traces s","  if gt traces.length 64","   shift traces","fn trim_l x:str"," ret x.trimStart","fn trim_r x:str"," ret x.trimEnd","fn trim x:str"," ret x.trim","fn trunc x:num"," ret Math.trunc x","fn tty_width","  if is_batch","   ret 140","  let r process.stdout.columns","  check is_uint r","  ret 80","fn txt_compact x","  let a split x","  let a txt_compact a"," let s join x"," let a split s","  let first front a","  let first trim_r first","  if is_empty first","  if not is_empty v","  let last back r","  if is_empty last","fn txt_cut x y","  check is_uint y","  let a txt_cut a y","  let s head v y","fn txt_indent x y","  ret txt_indent x 1","  let a txt_indent a y","  let s trim_r v","  if is_empty s","   push r s","   let indent repeat \" \" y","   let s concat indent s","fn txt_inline x","  let r replace x \"\\n\" \" \"","  let r replace r \"\\r\" \"\"","  let r replace_rec r \"  \" \" \"","  let r trim r"," let s txt_inline s"," ret split s","fn txt_prepend x y","  let a txt_prepend a y","  let s concat y v","fn txt_unindent x","  let a txt_unindent a"," var s join x"," while is_indented s","  forof split s","   if is_empty v","   let s slice v 1","  assign s join a","fn unaccent x:str"," let r replace x \"à\" \"a\""," let r replace r \"â\" \"a\""," let r replace r \"ä\" \"a\""," let r replace r \"æ\" \"ae\""," let r replace r \"ç\" \"c\""," let r replace r \"é\" \"e\""," let r replace r \"è\" \"e\""," let r replace r \"ê\" \"e\""," let r replace r \"ë\" \"e\""," let r replace r \"î\" \"i\""," let r replace r \"ï\" \"i\""," let r replace r \"ô\" \"o\""," let r replace r \"ö\" \"o\""," let r replace r \"œ\" \"oe\""," let r replace r \"ù\" \"u\""," let r replace r \"û\" \"u\""," let r replace r \"ü\" \"u\""," let r replace r \"ÿ\" \"y\""," let r replace r \"À\" \"A\""," let r replace r \"Â\" \"A\""," let r replace r \"Ä\" \"A\""," let r replace r \"Æ\" \"AE\""," let r replace r \"Ç\" \"C\""," let r replace r \"É\" \"E\""," let r replace r \"È\" \"E\""," let r replace r \"Ê\" \"E\""," let r replace r \"Ë\" \"E\""," let r replace r \"Î\" \"I\""," let r replace r \"Ï\" \"I\""," let r replace r \"Ô\" \"O\""," let r replace r \"Ö\" \"O\""," let r replace r \"Œ\" \"OE\""," let r replace r \"Ù\" \"U\""," let r replace r \"Û\" \"U\""," let r replace r \"Ü\" \"U\""," let r replace r \"Ÿ\" \"Y\"","fn unshift x:arr y"," x.unshift y","fn unwrap x:str","  ret json_decode x","  ret split x \".\"","  ret split x \":\"","fn url_beautify x:str"," let r strip_l x \"http://\""," let r strip_l r \"https://\""," let r path_unfix r","fn url_get x:etc","  ret http_get x:etc","  ret xhr_get x:etc","fn url_parse x:str"," let url new URL x"," let href url.href"," let protocol strip_r url.protocol \":\""," let user url.username"," let password url.password"," let host url.hostname"," let port url.port"," let path url.pathname"," let hash url.hash"," let args obj"," forof url.searchParams.keys","  var value url.searchParams.get v","  if is_json value","   assign value json_decode value","  put args v value"," ret obj href protocol user password host port path args hash","gn wait","fn xor x:num y:num z:etc"," let r inline \"x^y\"","  ret xor r z:etc","fn app_list"," forof dir_read \"src\" true","  let base path_base v","  let a split base \"-\"","  let prefix shift a","  if different prefix \"app\"","  let name join a \"-\"","  push r name","fn beep"," os_detach \"play\" \"-n\" \"synth\" 0.1 \"sine\" 880 \"vol\" 0.5","fn deinit_node"," fn remove_old_files path:str","  for dir_load path true","   let modified fs_modified v","   let now time_get","   let age sub now modified","   if lt age week","   let dir dir_current","   let dir path_fix dir","   let path strip_l v dir","   let path to_lit path","   let path concat \"path=\" path","   let age time_delay age","   let age to_lit age","   let age concat \"age=\" age","   var remove false","   if is_dir v","    if dir_empty v","     assign remove true","   elseif is_file v","    assign remove true","   if remove","    fs_remove v","    trace \"remove\" path age"," if dir_empty config_tmp","  fs_remove config_tmp"," let app path_up config_tmp"," if dir_empty app","  fs_remove app"," let dir_tmp path_up app"," let dir_log path_up config_log"," remove_old_files dir_tmp"," remove_old_files dir_log"," dir_change cwd","fn digest x:str"," let tmp path_tmp"," file_save tmp x"," let r os_execute \"sha256sum\" \"--binary\" tmp"," fs_remove tmp"," let r split r \" \""," let r front r","fn dir_call x:str y:fn z:etc"," let dir dir_current"," dir_change x","  assign r y z:etc","  dir_change dir"," dir_change dir","fn dir_change x:str"," process.chdir x","fn dir_current"," ret process.cwd","fn dir_empty x:str"," let paths dir_read x true"," ret is_empty paths","fn dir_find x:str y:str"," forof dir_load x","  if match base y","fn dir_load x:str with_dirs"," if is_undef with_dirs","  ret dir_load x false"," check is_bool with_dirs"," forof dir_read x true","  if is_file v","  elseif is_dir v","   if with_dirs","   let a dir_load v with_dirs","   append r a","fn dir_make x:str"," let recursive true"," let option obj recursive"," no_umask fs.mkdirSync x option","fn dir_read x:str with_dirs","  ret dir_read x false"," let dir path_real x"," let a fs.readdirSync dir"," sort a","  let s path_concat dir v","  if is_file s","  if with_dirs","   if is_dir s","fn dir_reset x:str"," fs_remove x"," dir_make x","fn dir_size x:str","  let n file_size v","  assign r add r n","fn file_append x:str y:str"," no_umask fs.appendFileSync x y","fn file_load x:str"," let r file_read x","fn file_read x:str y","  ret file_read x \"utf8\""," let buffer fs.readFileSync x"," ret buffer.toString y","fn file_save x:str y:str"," if is_file x","  let s file_load x","  if same s y"," let dir path_dir x"," if not is_dir dir"," let content trim_r y"," file_write x content","fn file_size x:str"," let stat fs.statSync x"," ret stat.size","fn file_write x:str y:str"," no_umask fs.writeFileSync x y","fn fs_change_mode x:str y:uint"," fs.chmodSync x y","fn fs_copy x:str y:str","  if is_dir y","   let base path_base x","   let path path_concat y base","   fs_copy x path"," let force true"," let o obj force recursive"," fs.cpSync x y o","fn fs_created x:str"," ret div stat.ctimeMs 1000","fn fs_mode x:str"," ret stat.mode","fn fs_modified x:str"," ret div stat.mtimeMs 1000","fn fs_remove x:str"," fs.rmSync x o","gn http_get url:str with_headers"," if is_undef with_headers","  ret run http_get url false"," var result \"\""," var headers obj"," fn get_module url:str","  let s to_lower url","  if match_l s \"http:\"","   ret http","  elseif match_l s \"https:\"","   ret https"," fn on_request response:obj","  forin response.headers","   var v get response.headers k","    assign v to_num v","   put headers k v","  let on_data on on_data","  let on_end on on_end","  response.on \"data\" on_data","  response.on \"end\" on_end"," fn on_data x:obj","  let s to_str x","  assign result concat result s"," fn on_end"," fn on_error x:obj"," let module get_module url"," let request module.get url on_request"," let on_error on on_error"," request.on \"error\" on_error","  if done","  if is_obj error","   throw error"," if is_json result","  assign result json_decode result"," if with_headers","  ret obj result headers","fn init_node"," fn on_uncaught_exception error:obj message:str","  try","   let report report_init error","   if not contain report.tags message","    unshift report.tags message","   report_log report","   if is_remote","    report_mail report","   deinit_common","  catch e","   fallback_error \"on-uncaught-exception\" e error","  assign zombie true","  process.exit 1"," assign global.cp require \"child_process\""," assign global.crypto require \"crypto\""," assign global.fs require \"fs\""," assign global.http require \"http\""," assign global.https require \"https\""," assign global.os require \"os\""," assign global.path require \"path\""," assign global.tls require \"tls\""," assign global.tty require \"tty\""," assign global.util require \"util\""," assign global.color false"," assign global.log_file true"," assign global.binary process.execPath"," assign global.cwd dir_current"," assign global.script at process.argv 1"," assign global.script path_real script"," let home os_home"," let pid to_str process.pid"," let pid pad_l pid \"0\" 6"," assign global.config_tmp path_concat home \".config\" \"mabynogy\" \"tmp\" app pid"," dir_make config_tmp"," let base concat app \".txt\""," assign global.config_log path_concat home \".config\" \"mabynogy\" \"log\" base"," process.on \"uncaughtExceptionMonitor\" on_uncaught_exception"," let r slice process.argv 2"," if extract r \"--verbose\"","  assign verbose inc verbose"," if extract r \"--quiet\"","  assign verbose dec verbose"," if extract r \"--color\"","  assign color true"," if extract r \"--no-log\"","  assign log_file false"," let dir path_dir script","fn inspect x color"," if is_undef color","  let color is_color","  ret inspect x color"," check is_bool color"," let showHidden false"," let depth null"," let colors color"," let maxArrayLength null"," let maxStringLength null"," let o obj showHidden depth colors maxArrayLength maxStringLength"," let s util.inspect x o"," for split s","  let indent str_indent v","  let indent div indent 2","  let indent repeat \" \" indent","  let line trim_l v","  let line concat indent line","  push a line","fn ip_host x:str"," let r silent os_execute \"host\" x"," let r back r"," if contain r \"not found\"","  ret null"," let r strip_r r \".\"","fn ip_list"," let s os_execute \"hostname\" \"--all-ip-addresses\""," ret split s \" \"","fn ip_v4"," forof ip_list","  if is_ip4 v","   ret v","fn ip_v6","  if is_ip6 v","fn is_batch"," if not is_node"," ret not is_interactive","fn is_color"," if color"," if is_interactive","fn is_dir x"," let throwIfNoEntry false"," let o obj throwIfNoEntry"," let o fs.statSync x o"," if is_undef o"," ret o.isDirectory","fn is_file x"," ret o.isFile","fn is_fs x"," ret is_def o","fn is_interactive"," ret process.stdout.isTTY","fn is_readable x","  var fd null","   assign fd fs.openSync x","  catch","  let n file_size x","  if gt n 0","   let buffer Buffer.alloc 1","   try","    fs.readSync fd buffer","   catch","    fs.closeSync fd","  fs.closeSync fd"," elseif is_dir x","   fs.readdirSync x","fn is_symbolic_link x"," let o fs.lstatSync x o"," ret o.isSymbolicLink","fn no_umask x:fn y:etc"," let mask process.umask 0","  process.umask mask"," process.umask mask","fn node_argv"," ret arr binary \"--trace-uncaught\" \"--trace-deprecation\" \"--expose-gc\"","fn node_context","  push r \"--verbose\""," elseif lt verbose 0","  push r \"--quiet\""," if is_color","  push r \"--color\""," if not log_file","  push r \"--no-log\"","fn open x:str"," os_system \"xdg-open\" x","gn os_capture x y:etc"," var closed false"," var status null"," var out \"\""," var err \"\""," var buffer \"\""," fn print x:str","  assign buffer concat buffer x","  if not match_r buffer lf","  let line strip_r buffer lf","  log line","  let s ansi_strip buffer","  assign out concat out s","  assign buffer \"\""," fn on_out x:obj","  print s"," fn on_err x:obj","  let s ansi_strip s","  assign err concat err s"," fn on_close x","  if is_null x","  elseif is_uint x","  assign status x","  assign closed true"," let stdio arr \"inherit\" \"pipe\" \"pipe\""," let option obj stdio"," let child cp.spawn x y option"," check is_obj child"," fn on_sigint x:str","  child.kill x"," let on_sigint sigint on_sigint"," let on_out on on_out"," let on_err on on_err"," let on_close on on_close"," let stdout child.stdout"," let stderr child.stderr"," stdout.on \"data\" on_out"," stderr.on \"data\" on_err"," child.on \"close\" on_close"," while not closed"," if is_full buffer.out","  print lf"," let out trim_r out"," let err trim_r err"," process.removeListener \"SIGINT\" on_sigint"," os_log os_capture status x y:etc"," ret obj status out err","fn os_detach x:str y:etc"," let detached true"," let stdio \"ignore\""," let o obj detached stdio"," let r cp.spawn x y o"," r.unref","fn os_execute x:etc"," let o os_run x:etc"," let status o.status"," let out o.out"," let err o.err"," var display false"," if is_full err","  if same status 0","   let a slice_l x 2","   trace a:etc","  let s txt_prepend err \" err> \"","  trace s"," if is_full out","  push a out","  push a err"," let s join a"," ret trim_r s","fn os_home x","  let user os_user","  ret os_home user"," let r path_concat \"/home\" x"," check is_dir r","fn os_host"," ret os.hostname","fn os_log call:xn status:int args:etc"," if same status 0"," var command front args"," var subcommand false"," if is_many args","  if same command \"sudo\"","   assign subcommand true","  elseif same command \"time\""," if subcommand","  let s at args 1","  assign command space command s"," let call replace call.name \"_\" \"-\""," let command to_lit command"," let status concat \"status=\" status"," trace call command status","gn os_prompt x:str y:etc"," let name x"," let out \"\""," let err \"\""," let buffer obj out err"," fn print key:str str:str","  let s get buffer key","  let s concat s str","  set buffer key s","  if not match_r s lf","  let s strip_r s lf","  let s txt_prepend s key","  set buffer key \"\"","  print \"out\" s","  print \"err\" s"," let child cp.spawn x y","  print \"out\" lf"," if is_full buffer.err","  print \"err\" lf"," os_log os_prompt status x y:etc"," ret status","fn os_ps"," let s os_execute \"ps\" \"aux\""," shift a","  let s replace_rec v \"  \" \" \"","  let pid at a 1","  let pid to_uint pid","  let path at a 10","  let args slice a 11","  let o obj pid path args","fn os_run x:str y:etc"," let maxBuffer mul 1 1024 1024 1024"," let encoding \"utf8\""," let option obj maxBuffer encoding"," let process cp.spawnSync x y option"," let out to_str process.stdout"," let err to_str process.stderr"," let status process.status"," os_log os_run status x y:etc","fn os_shell x:etc"," let command join x \" \""," ret cp.execSync command option","fn os_system x:str y:etc"," let stdio \"inherit\""," let result cp.spawnSync x y option"," let r result.status"," os_log os_system r x y:etc","fn os_user"," if is_root","  let r os_execute \"logname\"","  check is_alnum r"," let o os.userInfo"," ret o.username","fn path_base x:str"," ret path.basename x","fn path_dir x:str"," ret path.dirname x","fn path_ext x:str"," let s path.extname x"," ret strip_l s \".\"","fn path_real x:str"," ret fs.realpathSync x","fn path_tmp x","  ret path_tmp \"tmp.txt\""," let dir path_split x"," pop dir"," let dir path_join dir"," let dir path_concat config_tmp dir"," let dir path_strip dir"," let file path_file x"," let ext path_ext x","  let id random","  let id to_base36 id","  let id head id 6","  var base concat file \"-\" id","  if is_full ext","   assign base concat base \".\" ext","  let r path_concat dir base","  if not is_file r","fn path_writable x:fs"," let path path_real x"," let components path_split path"," while is_full components","  let path path_join components","  if lte path.length 2","  let a_rw 438","  let a_rwx 511","  let mode fs_mode path","  if is_file path","   let bits inline \"mode & a_rw\"","   if same bits a_rw","    fs_change_mode path a_rw","  elseif is_dir path","   let bits inline \"mode & a_rwx\"","   if same bits a_rwx","    fs_change_mode path a_rwx","  drop components","fn report_mail report:obj"," let html report_html report 65 false"," mail author report.title html","fn sigint callback:fn"," fn on_sigint x:str n:uint","  let pid concat \"pid=\" process.pid","  let signal concat \"signal=\" x","  let n concat \"n=\" n","  log app pid signal n","  callback x"," let on_sigint on on_sigint"," process.once \"SIGINT\" on_sigint"," ret value on_sigint","fn to_base64 x:str"," let buffer Buffer.from x"," let r buffer.toString \"base64\"","fn ansi_encode str:str args:etc"," let ansi ansi_init args:etc"," ret concat ansi.escape \"[\" ansi.attr \";\" ansi.fore \";\" ansi.back \"m\" str ansi.escape \"[0m\"","fn ansi_get_attrs"," assign r.normal 0"," assign r.bold 1"," assign r.dim 2"," assign r.underline 4"," assign r.blink 5"," assign r.reverse 7","fn ansi_get_colors"," let list arr"," push list \"default 39 49\""," push list \"black 30 40\""," push list \"red 31 41\""," push list \"green 32 42\""," push list \"yellow 33 43\""," push list \"blue 34 44\""," push list \"magenta 35 45\""," push list \"cyan 36 46\""," push list \"gray 37 47\""," push list \"white 97 107\""," for list","  let a split v \" \"","  let color shift a","  let fore shift a","  let fore to_uint fore","  let back shift a","  let back to_uint back","  let entry obj fore back","  put r color entry","fn ansi_head x:str length:uint"," let escape chr 27"," let at asc \"@\""," let tilde asc \"~\""," var visible 0"," var control 0","  if gte visible length","  let c1 shift a","  if different c1 escape","   assign buffer concat buffer c1","   assign visible inc visible","   let s char_escape c1","   assign buffer concat buffer s","   assign visible add visible s.length","  let c2 shift a","  var malformed false","  if different c2 \"[\"","   assign malformed true","  if malformed","   assign buffer concat buffer c2","   assign visible add visible s.length 1","  var body \"\"","  var closed false","  while is_full a","   let c3 shift a","   let n asc c3","   assign body concat body c3","   if between n at tilde","    assign closed true","  if not closed","   assign buffer concat buffer body","   assign visible add visible s.length 1 body.length","  assign buffer concat buffer c1 c2 body","  assign control add control 2 body.length"," let length min visible length"," let length add length control"," let r slice_l buffer length"," if gt control 0","  ret concat r escape \"[0m\"","fn ansi_init fore back attr"," if is_undef fore","  ret ansi_init \"black\" back attr"," if is_undef back","  ret ansi_init fore \"white\" attr"," if is_undef attr","  ret ansi_init fore back \"normal\""," fn get_fore x:def","   let colors ansi_get_colors","   let n get colors x","   let n n.fore","   ret to_str n","  elseif is_rgb x","   let n ansi_rgb x","   ret concat \"38;5;\" n"," fn get_back x:def","   let n n.back","   ret concat \"48;5;\" n"," fn get_attr x","  check is_str x","  let attrs ansi_get_attrs","  ret get attrs x"," let fore get_fore fore"," let back get_back back"," let attr get_attr attr"," ret obj escape fore back attr","fn ansi_rgb x:obj"," let r mul x.r 36"," let g mul x.g 6"," let b x.b"," ret add 16 r g b","fn ansi_strip x:str"," ret util.stripVTControlCharacters x","fn app_token x:str"," let base concat \".\" x"," let path_cwd base"," let path_home path_concat home base"," let path_common path_concat common base"," var path null"," if is_file path_cwd","  assign path path_cwd"," elseif is_file path_home","  assign path path_home"," elseif is_file path_common","  assign path path_common"," let r file_load path"," let r base36_decode r"," let r salt r","fn archive_find x:str"," let date date_str"," let date replace date \"/\" \"-\""," let base concat file \"-\" date \".\" ext"," let path path_concat dir base"," if not is_file path","  ret path"," var n 1","  let digit pad_l n","  let base concat file \"-\" date \"-\" digit \".\" ext","  let path path_concat dir base","fn group_list"," let users user_list false"," fn find_users gid:uint","  forin users","   let v get users k","   if same v.gid gid","    push r v.name"," let lines file_load \"/etc/group\""," let lines split lines"," for lines","  let fields split v \":\"","  let name shift fields","  let password shift fields","  let gid shift fields","  let gid to_uint gid","  let users shift fields","  let users split users \",\"","  check is_empty fields","  let a find_users gid","  append users a","  let users dedup users","  sort users","  let o obj gid name users","  put r name o","fn init_shell","fn is_local"," let host os_host"," ret same host \"castle\"","fn is_remote"," ret not is_local","fn is_root"," ret same o.username \"root\"","fn mail_debug subject:str data:obj"," let data to_tbl data"," let table h_tbl data"," h_push body table"," let html h_render html"," mail author subject html","fn mail to:str subject:str body:str from paths:etc"," if is_undef from","  ret mail to subject body admin paths:etc"," fn single_part to:str subject:str body:str from:str","  let body quoted_printable body","  let s concat \"from:\" from","  let s concat \"to:\" to","  let s concat \"subject:\" subject","  push a \"mime-version: 1.0\"","  push a \"content-type: text/html;charset=utf-8\"","  push a \"content-transfer-encoding: quoted-printable\"","  push a body","  ret join a crlf"," fn multi_part to:str subject:str body:str from:str paths:etc","  let boundary get_boundary body","  let dash_boundary concat \"--\" boundary","  let end_boundary concat dash_boundary \"--\"","  let s quote boundary","  let s concat \"content-type: multipart/related; boundary=\" s","  push a dash_boundary","  push a \"content-type: text/html; charset=utf-8\"","  for paths","   let base path_base v","   let file path_file v","   let mime mime_type v","   let content file_read v \"base64\"","   let content chunk_76 content","   push a dash_boundary","   let s space \"content-type:\" mime","   push a \"content-transfer-encoding: base64\"","   let s2 angle file","   let s concat \"content-id: \" s2","   let s2 quote base","   let s concat \"content-disposition: inline; filename=\" s2","   push a \"\"","   push a content","  push a end_boundary"," fn config","  let token app_token \"mabynogy\"","  push a \"account gmail\"","  push a \"host smtp.gmail.com\"","  push a \"port 587\"","  push a \"protocol smtp\"","  push a \"auth on\"","  let s space \"from\" mailer","  let s space \"user\" mailer","  let s space \"password\" token","  push a \"tls on\"","  push a \"tls_starttls on\"","  push a \"tls_trust_file /etc/ssl/certs/ca-certificates.crt\"","  push a \"account default: gmail\""," fn quoted_printable x:str","  let path path_tmp \"qp.txt\"","  file_save path x","  let r os_execute \"python3\" \"-m\" \"quopri\" path","  fs_remove path"," fn chunk_76 x:str","  var input x","  let output arr","  while is_full input","   let s head input 76","   assign input slice input s.length","   push output s","  ret join output crlf"," fn get_boundary body:str","   let r random_str 8","   if not contain body r","    ret r"," let config_content config"," var body_content null"," if is_full paths","  assign body_content multi_part to subject body from paths:etc","  assign body_content single_part to subject body from"," let config_path path_tmp \"msmtp.txt\""," let body_path path_tmp \"body.txt\""," file_save config_path config_content"," file_save body_path body_content"," let option_file concat \"--file=\" config_path"," fs_change_mode config_path 384"," let s os_shell \"msmtp\" \"--debug\" option_file \"--read-recipients\" \"<\" body_path"," let s txt_prepend s \" > \""," trace \"msmtp\""," trace s"," fs_remove config_path"," fs_remove body_path","fn mime_type path:file"," let r os_execute \"file\" \"--mime\" \"--brief\" path"," let r strip_r r \";\"","fn mnt_clean x:str"," if is_readable x","  mnt_unmount x","  fs_remove x","fn mnt_unmount x"," ret os_execute \"fusermount\" \"-u\" x","fn password alnum","  ret password false"," fn make_password","  fornum 10","   let s random_char"," let special \"_-?\""," fn random_char","  let chars arr","   let a1 explode digit","   let a2 explode lower","   append chars a1","   append chars a2","   let a1 explode special","   let a2 explode digit","   let a3 explode lower","   let a4 explode upper","   append chars a3","   append chars a4","  let n random chars.length","  ret at chars n"," fn is_valid x","   ret is_alnum x","  var special false","  var alpha false","  var digit false","  var upper false","  var lower false","   if is_special v","    assign special true","   if is_alpha v","    assign alpha true","   if is_digit v","    assign digit true","   if is_upper v","    assign upper true","   if is_lower v","    assign lower true","  if not special","  if not alpha","  if not digit","  if not upper","  if not lower"," fn is_special x","   if not contain special v","  let r make_password","  if is_valid r","gn ssh_execute x:etc"," ret run ssh_pass x:etc","gn ssh_pass x:etc"," let args dup x"," let first shift args"," if is_str first","  ret run ssh_pass os_execute x:etc"," let arguments arr \"sshpass\" \"-p\" args:etc"," if is_fn first","  ret first arguments:etc"," elseif is_gn first","  ret run first arguments:etc","gn ssh_system x:str y:etc"," let r run ssh_pass x y:etc"," let a split r"," if is_full a","  log y:etc","  let a txt_prepend a \" > \"","  let s join a","fn sudo_dir_make path:str"," check not is_dir path"," sudo \"mkdir\" \"--parents\" path"," sudo_path_writable path","fn sudo_file_append path:str data:str"," let content file_read path"," let content concat content data"," sudo_file_save path content","fn sudo_file_read path:str"," let result os_run \"sudo\" \"cat\" path"," check same result.status 0"," check is_empty result.err"," ret result.out","fn sudo_file_save path:str data:str"," let dir path_dir path"," let base path_base path"," let tmp path_tmp base","  sudo_dir_make dir"," file_save tmp data"," sudo \"mv\" \"--force\" tmp path","fn sudo_file_write path:str data:str"," file_write tmp data","fn sudo_fs_change_mode path:str pattern:str"," check is_fs path"," sudo \"chmod\" pattern path","fn sudo_fs_remove path:str"," sudo \"rm\" \"--recursive\" \"--force\" path","fn sudo_is_dir x"," let result os_run \"sudo\" \"stat\" \"--terse\" \"--format=%F\" x"," if same result.status 1"," ret contain result.out \"directory\"","fn sudo_is_file x"," ret contain result.out \"file\"","fn sudo_path_writable path:str","   sudo_fs_change_mode path \"a+rw\"","   sudo_fs_change_mode path \"a+rwx\"","fn sudo x:etc"," ret os_system \"sudo\" x:etc","fn user_created x:obj"," var r x.created"," let home x.home"," let last_log x.last_log"," if is_str home","  let n fs_created home","  if is_null r","   assign r n","   assign r min r n"," if is_num last_log","   assign r last_log","   assign r min r last_log","fn user_list with_group"," if is_undef with_group","  ret user_list true"," check is_bool with_group"," fn last_log user:str","  let lines os_execute \"last\" \"--fulltimes\" \"-R\" user","  let lines split lines","  let line front lines","  if is_empty line","   ret null","  let line replace_rec line \"  \" \" \"","  let parts split line \" \"","  shift parts 2","  let parts slice_l parts 5","  let line join parts \" \"","  ret date_decode line"," var groups null"," fn find_group gid:uint","  forin groups","   let v get groups k","    ret v.name"," fn find_groups name:str","   if contain v.users name"," let lines file_load \"/etc/passwd\""," if with_group","  assign groups group_list","  let uid shift fields","  let uid to_uint uid","  let comment shift fields","  let home shift fields","  let shell shift fields","  let human match_l home \"/home/\"","  var created null","  let last_log last_log name","  let o obj uid gid name comment home shell human created last_log","  if with_group","   let group find_group gid","   let groups find_groups name","   unshift groups group","   let groups dedup groups","   sort groups","   assign o.groups groups","   obj_order o \"uid\" \"gid\" \"name\" \"groups\"","fn app_home app:str"," let js app_make app"," let title h_title app"," let script h_script js"," h_push body script"," ret h_render html","fn app_make app:str"," let cpl cpl_init app"," let s to_lit app"," log \"make\" s"," cpl_include cpl"," let r cpl_generate cpl"," let tmp concat app \"-tmp.js\""," let tmp path_tmp tmp"," file_save tmp r"," let success cpl_check_syntax cpl tmp"," check success"," cpl_deinit cpl","fn ast_assign cpl:obj args:arr children:arr source:obj"," check is_empty children"," let left front args"," check is_name left"," let right slice args 1"," let right call_expr_right cpl right:etc"," let code concat left \"=\" right"," ret obj code source","fn ast_begin cpl:obj args:arr children:arr source:obj"," check is_empty args"," let r call_ast_block cpl children source"," if cpl_is_leaf cpl children","  check is_single r","  let node front r","  assign node.code trim node.code","fn ast_brk cpl:obj args:arr children:arr source:obj"," let code \"break\"","fn ast_call cpl:obj args:arr children:arr source:obj"," check is_full args"," let code expr_call cpl args:etc","fn ast_catch cpl:obj args:arr children:arr source:obj"," let block call_ast_block_top cpl children source"," if is_empty args","  let code \"catch\"","  let node obj code source","  push r node","  append r block"," check is_single args"," let identifier front args"," check is_identifier identifier"," let code paren identifier"," let code concat \"catch\" code"," let node obj code source"," push r node"," append r block","fn ast_check cpl:obj args:arr children:arr source:obj"," let code join args \",\""," let code paren code"," let code concat \"check\" code","fn ast_cont cpl:obj args:arr children:arr source:obj"," let code \"continue\"","fn ast_else cpl:obj args:arr children:arr source:obj"," let code \"else\""," let block call_ast_block cpl children source","fn ast_elseif cpl:obj args:arr children:arr source:obj"," ret call_ast_if cpl args children source \"else if\"","fn ast_fn cpl:obj args:arr children:arr source:obj"," ret call_ast_xn cpl args children source \"function\"","fn ast_forin cpl:obj args:arr children:arr source:obj"," ret call_ast_for cpl args children source \"k in\"","fn ast_fornum cpl:obj args:arr children:arr source:obj"," let code call_expr_right cpl args:etc"," let code concat \"let i=0;i<\" code \";i++\""," let code concat \"for\" code","fn ast_forof cpl:obj args:arr children:arr source:obj"," ret call_ast_for cpl args children source \"v of\"","fn ast_gn cpl:obj args:arr children:arr source:obj"," ret call_ast_xn cpl args children source \"function*\"","fn ast_if cpl:obj args:arr children:arr source:obj"," ret call_ast_if cpl args children source \"if\"","fn ast_include cpl:obj args:arr children:arr source:obj"," let path front args"," check is_lit path"," let path unwrap path","fn ast_inline cpl:obj args:arr children:arr source:obj"," let code front args"," check is_lit code"," let code unwrap code","fn ast_let cpl:obj args:arr children:arr source:obj"," check is_many args"," ret call_ast_declare cpl args children source \"const\"","fn ast_ret cpl:obj args:arr children:arr source:obj"," var code \"\"","  assign code \"return\"","  let right call_expr_right cpl args:etc","  assign code space \"return\" right","fn ast_run cpl:obj args:arr children:arr source:obj"," let code space \"yield*\" code","fn ast_throw cpl:obj args:arr children:arr source:obj"," let code space \"throw\" code","fn ast_try cpl:obj args:arr children:arr source:obj"," let code \"try\"","fn ast_var cpl:obj args:arr children:arr source:obj"," ret call_ast_declare cpl args children source \"let\"","fn ast_while cpl:obj args:arr children:arr source:obj"," let code concat \"while\" code","fn ast_yield cpl:obj args:arr children:arr source:obj","  let code \"yield\"","  ret obj code source"," let code space \"yield\" code","fn call_ast_block_top cpl:obj children:arr source:obj"," for cpl_block cpl children","  let o dup v","  assign o.code txt_indent o.code"," let code \"{\""," let open obj code source"," let code \"}\""," let close obj code source"," unshift r open"," push r close","fn call_ast_block cpl:obj children:arr source:obj"," if not cpl_is_leaf cpl children","  let code \"{\"","  let open obj code source","  let code \"}\"","  let close obj code source","  unshift r open","  push r close","fn call_ast_declare cpl:obj args:arr children:arr source:obj keyword:str"," let code slice args 1"," let code call_expr_right cpl code:etc"," let code concat identifier \"=\" code"," let code space keyword code","fn call_ast_for cpl:obj args:arr children:arr source:obj keyword:str"," let code space \"const\" keyword code","fn call_ast_if cpl:obj args:arr children:arr source:obj keyword:str"," let code concat keyword code","fn call_ast_xn cpl:obj args:arr children:arr source:obj keyword:str"," fn get_argument x:str","  if is_identifier x","  if is_tuple x","   let a unwrap x","   check is_pair a","   let name front a","   let etc back a","   check is_identifier name","   check same etc \"etc\"","   ret concat \"...\" name"," let name front args"," check is_name name"," let args slice args 1"," let parameters map args get_argument"," for parameters","  let n count parameters v","  if same n 1","  let arg to_lit v","  let message space \"Argument\" arg \"defined\" n \"times\"","  stop message"," let parameters join parameters \",\""," let list paren parameters"," let code concat name list","fn cpl_block cpl:obj nodes:arr"," forof nodes","  let a cpl_translate cpl v","  append r a","fn cpl_check_fn cpl:obj nodes:arr path:str"," let file path_file path"," let name replace file \"-\" \"_\""," if same name \"check_arity\""," for nodes","  if same v.operator \"fn\"","  elseif same v.operator \"gn\"","  let xn front v.args","  if same xn name"," let s_file to_lit file"," let message space \"The file\" s_file \"must define a function or a generator nammed\" s_name","fn cpl_check_syntax cpl:obj path"," if is_undef path","  ret cpl_check_syntax cpl cpl.target"," check is_str path"," let argv node_argv"," let o os_run argv:etc \"--check\" path"," check is_empty o.out"," if same o.status 0","  check is_empty o.err"," check cpl_log_error cpl o.err path","fn cpl_check cpl:obj nodes:arr"," fn visit nodes:arr","  forof nodes","   if not is_xn v.operator","    let node dup v","    assign node.children visit node.children","    push r node","   let node instrument v","   push r node"," fn instrument node:obj","  let r dup node","  let name front r.args","  let parameters slice r.args 1","  let arity get_arity parameters","  if same arity.operator \"gte\"","   if same arity.count 0","    assign r.children visit r.children","  let operator \"check_arity\"","  let count to_str arity.count","  let s_operator to_lit arity.operator","  let args arr s_operator \"arguments.length\" count","  let children arr","  let source dup r.source","  let node obj operator args children source","  unshift r.children node","  reverse parameters","  clear r.args","  forof parameters","   if is_identifier v","    unshift r.args v","   check is_tuple v","   let a unwrap v","   let identifier at a 0","   let type at a 1","   if same type \"etc\"","   unshift r.args identifier","   let s_identifier to_lit identifier","   let s_type to_lit type","   let is concat \"is_\" type","   let operator \"check_arg\"","   let args arr is identifier s_identifier s_type","   let children arr","   let source dup r.source","   let node obj operator args children source","   unshift r.children node","  unshift r.args name","  assign r.children visit r.children"," fn get_arity args:arr","  var operator \"same\"","  var count 0","  forof args","   if is_tuple v","    let a unwrap v","    let type at a 1","    if same type \"etc\"","     assign operator \"gte\"","   elseif is_identifier v","    assign operator \"gte\"","   assign count inc count","  ret obj operator count"," fn is_xn x","  if same x \"fn\"","  if same x \"gn\""," ret visit nodes","fn cpl_compile cpl:obj path:str"," let nodes cpl_load cpl path"," let nodes cpl_tokenize cpl nodes"," let nodes cpl_fold cpl nodes"," cpl_check_fn cpl nodes path"," let nodes cpl_check cpl nodes"," var nodes cpl_for cpl nodes","  assign nodes cpl_scope cpl nodes","  assign nodes cpl_block cpl nodes","  cpl_dump cpl"," ret nodes","fn cpl_deinit cpl:obj"," let s json_dump cpl.cache"," file_save cpl.path s","fn cpl_dump cpl:obj"," check is_obj cpl"," fn dump_ast node:obj","  let args node.args","  let children node.children","  let a3 arr","  push a2 node.operator","  append a2 args","  forof a2","   if is_token v","    push a3 v","    let s to_lit v","    push a3 s","  let cs space a3:etc","  let source node.source","  let path source.path","  let ncs source.index","  let ncs inc ncs","  let o obj path ncs cs","  forof children","   let t dump_ast v","   forof t","    assign v.cs txt_indent v.cs","   append r t","  if is_full children","   let cs \"end\"","   let o obj path ncs cs","   push r o"," for cpl.stack","  let frame concat \"#\" n","  let title space \"compiler frame\" frame","  let s dump_ast v","  let s tbl_render s","fn cpl_fold cpl:obj nodes:arr","  let parent shift nodes","  let indent parent.indent","  let descendants arr","  while is_full nodes","   let o front nodes","   if gt o.indent indent","    shift nodes","    push descendants o","  while is_full descendants","   let o visit descendants","   push children o","  let operator parent.operator","  let args parent.args","  let source parent.source","  ret obj operator args children source"," let nodes dup nodes"," while is_full nodes","  let o visit nodes","fn cpl_for cpl:obj nodes:arr","   if different v.operator \"for\"","   let nodes generate v","   append r nodes"," fn generate node:obj","  let operator \"let\"","  let args arr \"_a\" args:etc","  let source dup node.source","  let node2 obj operator args children source","  push r node2","  let operator \"forin\"","  let args arr \"_a\"","  let children visit node.children","  let node3 obj operator args children source","  push r node3","  let args arr \"v\" \"at\" \"_a\" \"i\"","  let node4 obj operator args children source","  unshift node3.children node4","  let args arr \"i\" \"to_i\" \"k\"","  let node5 obj operator args children source","  unshift node3.children node5","fn cpl_generate cpl:obj"," let pool arr"," fn get_index x:str","  let r find pool x","  if gte r 0","  let r pool.length","  push pool x"," forof cpl.out","  push a v.code"," let relatives arr"," let indices arr"," for cpl.out","  let source v.source","  if not contain paths path","   push paths path","  let n get_index path","  push relatives n","  push indices source.index"," let contents obj","  let key get_index v","  let key to_str key","  let content cpl_uncomment cpl v","  let value arr","  forof split content","   let index get_index v","   push value index","  put contents key value"," let app to_lit cpl.app"," let app concat \"const app=\" app"," push a app"," let compile time_get"," let compile trunc compile"," let compile concat \"const compile=\" compile"," push a compile"," let pool json_encode pool"," let pool concat \"const pool=\" pool"," push a pool"," let relatives json_encode relatives"," let relatives concat \"const relatives=\" relatives"," push a relatives"," let indices json_encode indices"," let indices concat \"const indices=\" indices"," push a indices"," let contents json_encode contents"," let contents concat \"const contents=\" contents"," push a contents"," let fns join cpl.fns \",\""," let fns brace fns"," let fns concat \"const fns=\" fns"," push a fns"," push a \"main()\"","fn cpl_include cpl:obj"," fn compile_cache path:str","  let relative path_real \"src\"","  let relative path_fix relative","  let relative strip_l path relative","  let cache cpl.cache.files","  let modified fs_modified path","  var recompile false","  if has cache relative","   let entry get cache relative","   if different entry.modified modified","    assign recompile true","   assign recompile true","  if not recompile","   let nodes entry.nodes","   declare_fn path nodes","   ret nodes","  let s_relative to_lit relative","  let s_relative concat \"path=\" s_relative","  let s_modified time_hn modified","  let s_modified to_lit s_modified","  let s_modified concat \"modified=\" s_modified","  trace \"compile\" s_relative s_modified","  let nodes cpl_compile cpl path","  declare_fn path nodes","  let entry obj modified nodes","  set cache relative entry","  ret nodes"," fn declare_fn path:str nodes:arr","  if is_empty nodes","  let fn path_file path","  let fn replace fn \"-\" \"_\"","  push cpl.fns fn"," fn get_files x:arr","   let a dir_load v"," fn get_includes x:str","  let dir get_app_dir x","  let a path_concat dir \"include.txt\"","  let a file_load a","  forof split a","   let s path_concat \"src\" v","  push r dir"," fn get_app_dir x","  let r concat \"src/app-\" x","  if is_dir r","  let r concat \"src/spa-\" x"," let includes get_includes cpl.app"," let files get_files includes"," forof files","  let ext path_ext v","  if different ext \"cs\"","  let nodes compile_cache v","  append cpl.out nodes","fn cpl_init app:str"," let path \"cache.txt\""," fn load_cache","   let s file_load path","   ret json_decode s","  let scans obj","  let files obj","  ret obj scans files"," let asts fn_select \"ast_\""," let exprs fn_select \"expr_\""," let fns arr"," let stack arr"," let out arr"," let target concat \"out-\" app \".js\""," let cache load_cache"," ret obj app asts exprs fns files stack out target path cache","fn cpl_is_call cpl:obj token:str"," if same token \"call\""," forin cpl.asts","  if same k token","fn cpl_is_leaf cpl:obj nodes:arr"," if not is_single nodes"," let node front nodes"," let operator node.operator"," if cpl_is_call cpl operator"," let operators arr \"brk\" \"check\" \"cont\" \"inline\" \"ret\" \"run\" \"throw\" \"yield\""," ret contain operators operator","fn cpl_load cpl:obj path:str"," let path2 dir_current"," let path2 path_concat path2 \"src\""," let path2 path_fix path2"," let path2 strip_l path path2"," let lines cpl_uncomment cpl path2","  let path path2","  let index i","  let code v","  let source obj path index","  let o obj code source","fn cpl_log_error cpl:obj err:str path","  ret cpl_log_error cpl err cpl.target"," fn parse_error cpl:obj path:str err:str","  let s txt_compact err","  let line_js shift lines","  let line_js split line_js \":\"","  let line_js back line_js","  let line_js to_uint line_js","  shift lines 3","  flower message","  let line line_js","  let o obj line path","  if gt line_js cpl.out.length","  let index dec line_js","  let o at cpl.out index","  let source o.source","  let content cpl_uncomment cpl source.path","  let content split content","  let line_cs inc source.index","  let s dbg_origin content line_cs \"\"","  let content dbg_source path","  let s dbg_origin content line_js \"\"","  let stack arr","  let s shift lines","  push stack s","   let s shift lines","   if not match_l s \"at\"","   push stack s","  let stack join stack","  let map cpl_source_map cpl","  let report report_init stack undefined map","  report_log report","  parse_error cpl path err","fn cpl_scan cpl:obj str:str"," fn is_complex x","  if contain x \"//\"","  if contain x \"\\\"\""," let s trim str"," if is_complex s","  let cache cpl.cache.scans","  if has cache s","   let r get cache s","   let r dup r","  let r scan s","  let r reject r is_trivia","  let a dup r","  put cache s a"," let r split s \" \""," let r reject r is_empty","fn cpl_scope cpl:obj nodes:arr","  let nodes dup nodes","   let node shift nodes","   var a null","    assign a resolve node nodes","   catch e","    unshift cpl.stack node","    throw e"," fn resolve node:obj rest:arr","  let operator node.operator","  let declare operator","  if is_declare operator","   let name front args","   let rvalue slice args 1","   check is_str name","   check is_arr rvalue","   check is_full rvalue","   let operator \"let\"","   let args arr \"_\" rvalue:etc","   let node2 obj operator args children source","   push r node2","   let operator \"begin\"","   let args arr","   let node3 obj operator args children source","   push r node3","   let operator declare","   let args arr name \"_\"","   let node4 obj operator args children source","   push node3.children node4","   if is_full rest","    let operator \"begin\"","    let args arr","    let children visit rest","    let node5 obj operator args children source","    push node3.children node5","    clear rest","  elseif is_for operator","   let args arr \"_\" args:etc","   let args arr \"_\"","   let children visit node.children"," fn is_declare operator","  if same operator \"let\"","  if same operator \"var\""," fn is_for operator","  if same operator \"forof\"","  if same operator \"forin\"","  if same operator \"fornum\"","fn cpl_source_map cpl:obj"," let script path_real cpl.target"," forin cpl.files","  let v get cpl.files k","  let a split v","  put files k a","  let path v.source.path","  let index v.source.index","  let js v.code"," let o obj script files source"," ret dup o","fn cpl_tokenize cpl:obj nodes:arr","  let code v.code","  let source dup v.source","  let indent str_indent code","  let args cpl_scan cpl code","  let operator shift args","  if same operator \"end\"","   if is_empty args","  let node obj indent operator args children source","fn cpl_translate cpl:obj node:obj"," fn translate cpl:obj operator:str args:arr children:arr source:obj","  forin cpl.asts","   if different k operator","   let ast get cpl.asts k","   let r ast cpl args children source","   if is_arr r","   check is_obj r","   ret arr r","  let args arr operator args:etc","  let r ast_call cpl args children source","  if is_arr r","  check is_obj r","  ret arr r"," let args node.args"," let children node.children"," let source node.source","  ret translate cpl operator args children source","  unshift cpl.stack node","fn cpl_uncomment cpl:obj path:str"," if has cpl.files path","  ret get cpl.files path"," let path_real path_concat \"src\" path"," let content file_load path_real"," for split content","  let tokens cpl_scan cpl v","  if is_empty tokens","   push r \"\"","  let line join tokens \" \"","  push r line"," put cpl.files path r","fn call_expr_arg cpl:obj x:str","  let a unwrap x","  check is_pair a","  let name front a","  let etc back a","  check is_identifier name","  check same etc \"etc\"","  ret concat \"...\" name"," let s to_lit x"," let message space \"Invalid argument\" s","fn call_expr_right cpl:obj x y:etc","  if same x \"arr\"","  elseif same x \"obj\"","  elseif same x \"_\"","  elseif same x \"null\"","  elseif same x \"true\"","  elseif same x \"false\"","  elseif is_numeric x","  elseif is_lit x","   let condition paren x","   let condition concat \"is_fn\" condition","   let call concat x \"()\"","   ret concat condition \"?\" call \":\" x"," ret call_expr_rvalue cpl x y:etc","fn call_expr_rvalue cpl:obj x:etc","  if same first \"arr\"","   ret expr_arr cpl","  elseif same first \"obj\"","   ret expr_obj cpl","   ret first"," let args slice x 1"," if has cpl.exprs first","  let fn get cpl.exprs first","  ret fn cpl args:etc"," ret expr_call cpl x:etc","fn expr_arr cpl:obj x:etc"," let fn partial call_expr_arg cpl"," let args map x fn"," let s join args \",\""," ret bracket s","fn expr_call cpl:obj x:name y:etc"," let args map y fn"," let args join args \",\""," let list paren args"," ret concat x list","fn expr_iif cpl:obj x:arg y:arg z:arg a:etc"," check is_empty a"," ret concat x \"?\" y \":\" z","fn expr_in cpl:obj x:identifier y:identifier z:etc"," check is_empty z"," ret space y \"in\" x","fn expr_inline cpl:obj x:str"," ret unwrap x","fn expr_instanceof cpl:obj x:name y:identifier z:etc"," ret space x \"instanceof\" y","fn expr_new cpl:obj x:etc"," let rvalue call_expr_rvalue cpl x:etc"," ret space \"new\" rvalue","fn expr_not cpl:obj x:etc"," let right call_expr_right cpl x:etc"," let right paren right"," ret concat \"!\" right","fn expr_obj cpl:obj x:etc"," check every x is_identifier"," let s join x \",\""," ret brace s","fn expr_run cpl:obj x:etc"," let call expr_call cpl x:etc"," ret space \"yield*\" call","fn expr_value cpl:obj x:str y:etc"," check is_empty y","gn init x:etc"," fn is_app x","  let base concat \"app-\" x","  let path path_concat \"src\" base","  ret is_dir path"," let apps app_list","  dump apps"," let app shift args"," if not is_app app"," var run true"," if extract args \"--compile\"","  assign run false"," let code cpl_generate cpl"," file_save cpl.target code"," if not cpl_check_syntax cpl"," if not run"," let usage_path concat \"usage-\" process.pid \".txt\""," let usage_path path_tmp \"usage.txt\""," let output concat \"--output=\" usage_path"," let time arr \"time\" \"--format=%M\" output"," let context node_context"," let args arr time:etc argv:etc cpl.target context:etc args:etc"," let args dedup args"," let o run os_capture args:etc"," if different status 0","  let s concat \"status=\" status","  log app s","  if not cpl_log_error cpl err","   let s txt_prepend err \"make-error> \"","   log s"," let usage file_load usage_path"," fs_remove usage_path","  let usage split usage","  let usage back usage","  let usage to_uint usage","  let usage mul usage 1024","  let usage byte_size usage","  let usage to_lit usage","  let usage concat \"usage=\" usage","  log app usage"]
const relatives=[0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,40,40,40,40,40,40,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,44,44,44,44,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,46,46,46,46,46,46,46,46,46,46,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,49,49,49,49,49,49,49,49,49,49,49,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,54,54,54,54,54,54,54,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,61,61,61,61,61,61,61,62,62,62,62,62,62,63,63,63,63,63,63,63,63,63,63,63,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,65,65,65,65,65,65,65,65,65,65,65,66,66,66,66,66,66,66,66,66,66,66,67,67,67,67,67,67,67,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,69,69,69,69,69,69,69,69,69,69,70,70,70,70,70,70,71,71,71,71,71,71,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,73,73,73,73,73,73,73,73,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,77,77,77,77,77,77,77,77,77,77,77,77,77,77,78,78,78,78,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,80,80,80,80,80,80,80,80,81,81,81,81,81,81,81,81,82,82,82,82,82,83,83,83,83,83,83,84,84,84,84,84,84,85,85,85,85,85,85,85,85,85,85,86,86,86,86,86,86,86,86,87,87,87,87,87,87,87,87,88,88,88,88,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,91,91,91,91,91,91,91,91,91,91,91,91,91,91,92,92,92,92,93,93,93,93,93,93,93,93,93,93,93,93,93,93,94,94,94,94,94,94,94,94,95,95,95,95,95,95,96,96,96,96,96,96,96,96,96,96,96,96,96,96,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,99,99,99,99,100,100,100,100,100,100,100,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,104,104,104,104,104,104,104,104,104,104,104,105,105,105,105,105,105,105,105,105,105,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,108,108,108,108,108,108,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,111,111,111,111,111,111,112,112,112,112,112,112,112,112,112,112,113,113,113,113,113,114,114,114,114,114,114,114,114,115,115,115,115,115,115,115,115,116,116,116,116,117,117,117,117,117,117,117,117,117,117,117,117,117,117,118,118,118,118,118,118,118,118,118,118,118,118,118,118,118,118,118,118,118,118,119,119,119,119,119,119,119,119,119,119,120,120,120,120,120,120,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,122,122,122,122,122,122,123,123,123,123,123,123,123,123,123,123,123,123,124,124,124,124,124,124,124,124,125,125,125,125,125,125,125,125,126,126,126,126,126,126,126,126,127,127,127,127,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,129,129,129,129,129,129,130,130,130,130,130,130,131,131,131,131,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,135,135,135,135,135,135,135,135,135,135,136,136,136,136,136,136,136,136,137,137,137,137,137,137,137,137,137,137,137,137,137,137,138,138,138,138,138,138,138,138,139,139,139,139,139,139,139,139,139,139,140,140,140,140,140,140,140,140,140,141,141,141,141,141,141,142,142,142,142,142,142,143,143,143,143,143,143,143,143,143,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,146,146,146,146,146,146,146,146,146,146,146,147,147,147,147,147,147,147,147,147,147,147,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,153,153,153,153,154,154,154,154,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,157,157,157,157,157,157,157,157,157,157,158,158,158,158,158,158,158,159,159,159,159,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,161,161,161,161,161,161,162,162,162,162,162,162,162,162,162,162,163,163,163,163,163,163,163,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,168,168,168,168,168,168,169,169,169,169,169,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,171,171,171,171,171,171,171,171,171,171,171,171,171,171,171,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,174,174,174,174,174,174,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,178,178,178,178,178,178,178,178,179,179,179,179,179,179,180,180,180,180,180,180,181,181,181,181,181,181,182,182,182,182,182,182,183,183,183,183,183,183,183,183,183,183,183,183,183,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,187,187,187,187,187,187,187,187,188,188,188,188,188,188,188,188,188,188,188,189,189,189,189,189,189,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,195,195,195,195,195,195,195,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,205,205,205,205,205,205,205,205,206,206,206,206,206,206,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,208,208,208,208,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,210,210,210,210,210,210,210,210,210,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,215,215,215,215,215,215,215,216,216,216,216,216,216,216,216,216,216,216,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,219,219,219,219,220,220,220,220,220,220,220,220,220,220,221,221,221,221,221,221,222,222,222,222,222,222,223,223,223,223,223,223,223,223,223,223,223,223,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,229,229,229,229,229,229,229,229,229,229,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,231,231,231,231,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,238,238,238,238,238,238,238,238,238,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,241,241,241,241,241,241,241,241,241,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,244,244,244,244,244,244,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,247,247,247,247,247,247,248,248,248,248,248,248,249,249,249,249,249,249,249,249,249,249,249,249,249,250,250,250,250,250,250,251,251,251,251,251,251,252,252,252,252,252,252,253,253,253,253,253,253,253,253,253,253,253,253,253,254,254,254,254,254,254,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,256,256,256,256,256,256,256,256,256,256,256,256,256,257,257,257,257,257,257,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,259,259,259,259,259,259,260,260,260,260,260,260,261,261,261,261,261,261,262,262,262,262,262,262,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,265,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,271,271,271,271,271,271,271,271,272,272,272,272,272,272,272,272,272,272,272,272,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,274,274,274,274,274,274,274,274,274,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,275,276,276,276,276,276,276,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,279,279,279,279,279,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,283,283,283,283,283,283,284,284,284,284,284,285,285,285,285,285,285,285,285,285,285,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,290,290,290,290,290,290,290,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,292,292,292,292,292,292,292,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,294,294,294,294,294,294,294,294,294,294,294,294,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,296,296,296,296,296,296,296,296,296,296,297,297,297,297,297,297,297,298,298,298,298,298,298,298,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,300,300,300,300,300,300,300,300,300,300,301,301,301,301,301,301,301,301,301,301,302,302,302,302,302,302,302,302,302,302,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,303,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,308,308,308,308,308,308,308,308,308,309,309,309,309,309,309,309,309,309,309,309,309,309,310,310,310,310,310,310,310,310,310,310,310,310,310,311,311,311,311,311,311,311,312,312,312,312,312,312,312,312,312,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,314,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,315,316,316,316,316,316,316,316,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,319,320,320,320,320,320,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,322,322,322,322,322,322,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,323,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,327,327,327,327,327,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,335,335,335,335,335,335,336,336,336,336,336,336,337,337,337,337,337,337,337,337,337,337,338,338,338,338,338,338,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,339,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,340,341,341,341,341,341,341,341,341,341,341,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,344,344,344,344,344,344,344,344,344,344,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,350,350,350,350,350,350,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,354,354,354,354,355,355,355,355,355,355,355,355,355,356,356,356,356,356,357,357,357,357,357,357,357,357,357,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,361,361,361,361,361,361,361,361,361,361,361,361,362,362,362,362,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,364,364,364,364,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,367,367,367,367,367,367,367,367,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,369,369,369,369,369,369,369,369,369,369,369,369,369,369,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,372,372,372,372,372,372,372,372,373,373,373,373,373,373,374,374,374,374,374,374,374,374,374,374,374,374,374,374,375,375,375,375,375,375,375,375,375,375,375,375,375,375,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,377,377,377,377,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,378,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,390,390,390,390,390,390,390,390,390,391,391,391,391,391,391,391,391,391,392,392,392,392,392,392,392,392,392,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,394,394,394,394,394,394,394,394,394,395,395,395,395,395,395,395,395,395,396,396,396,396,396,396,396,396,396,397,397,397,397,397,397,397,397,397,397,397,397,397,397,397,397,397,397,397,397,397,397,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,398,399,399,399,399,399,399,399,399,399,399,399,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,404,404,404,404,404,404,404,404,404,404,404,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,415,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,418,418,418,418,418,418,418,418,418,418,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,419,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,422,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,426,426,426,426,426,426,426,426,426,426,426,426,426,426,426,426,426,426,426,426,426,426,426,426,426,426,426,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,440,440,440,440,440,440,440,440,440,440,441,441,441,441,441,441,441,441,441,442,442,442,442,442,442,442,443,443,443,443,443,443,443,443,443,444,444,444,444,444,444,444,444,444,444,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,446,446,446,446,446,446,446,446,446,446,446,447,447,447,447,447,447,447,447,447,447,448,448,448,448,448,448,448,448,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449]
const indices=[0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,3,5,6,8,1,1,0,0,0,0,0,1,2,4,5,7,7,7,7,8,8,8,8,10,11,13,8,8,7,7,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,5,5,5,5,7,9,9,9,9,10,10,10,10,11,11,11,11,13,14,16,16,16,16,18,16,16,11,11,10,10,9,9,5,5,4,21,2,2,1,1,0,0,0,0,0,1,1,1,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,6,6,5,5,4,4,3,11,3,1,1,0,0,0,0,0,0,0,1,3,4,6,7,9,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,6,6,7,7,7,9,7,6,12,12,13,13,13,13,14,14,14,14,15,15,15,17,15,14,14,13,13,12,20,20,21,21,21,21,22,22,22,22,23,23,23,25,23,22,22,21,21,20,28,28,29,29,29,29,30,30,30,30,31,31,31,33,31,30,30,29,29,28,36,36,36,36,37,37,37,37,38,38,38,40,38,37,37,36,36,4,4,3,3,2,2,1,1,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,5,3,2,2,1,1,0,0,0,1,1,1,1,3,4,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,15,13,12,12,11,11,10,10,9,9,8,8,7,7,6,6,1,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,0,0,1,1,2,3,1,4,4,5,5,5,5,7,8,10,10,10,10,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,23,21,20,20,19,19,18,18,17,17,16,16,15,15,14,14,13,13,12,24,24,25,25,25,25,26,26,26,26,27,27,27,27,28,28,28,28,29,29,29,29,30,30,30,32,30,29,29,28,28,27,27,26,26,25,25,24,33,33,34,34,34,34,35,35,35,35,36,36,36,38,36,35,35,34,34,33,10,10,5,5,4,42,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,2,6,6,6,6,8,8,9,10,12,12,13,13,13,13,15,15,15,15,16,16,17,19,16,22,22,22,24,22,15,27,15,13,13,12,28,28,29,29,29,29,31,31,31,31,32,32,32,32,34,34,35,37,34,40,40,40,42,40,32,32,31,45,31,29,29,28,46,47,8,52,6,6,0,0,0,0,0,0,1,2,4,4,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,11,12,9,9,8,8,7,7,6,15,6,5,4,19,19,20,20,21,21,21,21,22,22,22,22,24,24,24,24,25,25,25,25,27,27,27,27,28,28,28,28,29,29,29,29,30,30,30,30,32,33,35,35,35,35,36,36,36,36,37,37,37,37,39,40,37,37,36,36,35,35,30,30,29,29,28,28,27,43,27,25,25,24,24,22,22,21,21,20,19,47,48,50,51,53,0,0,0,0,0,3,3,4,5,7,8,10,11,13,14,16,3,21,21,21,21,23,23,23,23,24,24,25,27,24,30,30,30,30,31,31,31,31,32,32,32,32,34,34,34,35,35,35,36,36,37,39,36,42,42,42,42,44,45,42,42,32,32,31,31,30,30,23,48,23,21,21,0,0,0,1,0,0,0,0,0,1,2,4,4,5,7,8,10,4,11,12,13,13,14,14,14,14,15,15,15,15,17,18,15,15,14,21,14,13,22,23,0,0,0,0,0,0,1,1,1,1,3,3,3,3,4,4,5,4,3,8,3,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,8,6,6,5,5,5,5,5,5,5,5,4,4,4,4,4,12,4,4,4,2,2,1,1,0,0,0,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,8,8,9,9,9,9,11,12,13,14,15,16,9,9,8,19,19,19,19,20,20,20,22,20,19,19,6,6,5,5,4,4,0,0,0,0,0,0,1,2,4,5,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,12,12,13,13,13,13,15,16,17,18,19,20,13,13,12,23,23,23,23,24,24,24,26,24,23,23,10,10,9,9,8,8,7,7,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,6,4,3,3,2,2,1,1,0,0,0,1,1,2,2,2,4,2,1,7,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,18,16,15,15,14,14,13,13,12,12,11,11,10,10,9,9,0,0,0,1,1,2,2,2,4,2,1,7,9,9,10,10,10,12,10,9,15,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,24,25,23,28,28,28,28,29,29,29,29,30,30,30,30,31,31,31,31,33,34,36,36,36,36,38,38,39,38,41,42,44,44,44,44,45,45,45,45,47,48,50,50,50,50,51,51,51,51,52,52,52,52,54,55,57,57,57,57,59,60,62,62,62,62,63,63,63,63,64,64,64,64,65,65,65,65,66,66,66,66,67,67,67,69,67,66,66,65,65,64,64,63,63,62,62,57,57,52,52,51,51,50,50,45,45,44,44,36,36,31,31,30,30,29,29,28,28,22,22,22,22,22,72,22,22,22,20,20,19,19,18,18,17,17,0,0,0,1,1,2,2,2,4,2,1,7,9,9,10,10,10,12,10,9,15,17,17,17,17,19,19,20,20,20,20,21,21,21,21,23,23,23,24,24,24,25,25,25,26,26,26,27,27,27,28,29,31,21,21,20,20,19,34,17,17,0,0,0,0,1,1,1,1,3,4,6,6,6,8,6,1,1,0,0,0,1,1,2,2,2,4,2,1,7,8,10,10,11,11,11,13,11,10,16,18,18,18,18,19,19,19,19,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,23,23,23,23,25,25,26,26,26,26,27,27,27,27,29,30,27,27,26,26,25,32,32,33,33,33,33,35,36,33,33,32,37,38,40,40,40,40,41,41,41,41,42,42,42,42,43,43,43,43,44,44,44,44,46,47,44,44,43,43,42,42,41,41,40,40,23,23,22,22,21,21,21,21,21,21,21,21,19,19,18,18,0,0,0,0,0,0,1,2,4,6,7,9,13,13,13,13,13,13,13,13,14,14,14,14,15,15,15,15,17,17,18,19,21,22,24,24,24,24,26,27,24,24,17,30,15,15,14,14,13,35,35,35,35,35,35,35,36,36,36,36,37,37,37,37,39,39,39,39,40,40,40,40,41,41,41,41,43,43,43,43,45,45,45,45,47,47,48,47,49,49,50,51,53,53,54,53,49,57,57,57,57,58,58,58,58,59,59,59,59,61,61,62,61,64,64,64,64,65,65,65,65,67,68,69,69,70,72,69,75,75,75,77,75,65,65,64,64,59,59,58,58,57,57,80,80,80,80,82,82,82,83,82,86,86,86,86,88,88,88,88,89,89,89,89,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,92,92,92,92,94,92,92,91,91,91,91,91,91,97,97,97,97,98,99,101,97,104,97,91,91,91,91,89,89,88,88,86,86,82,82,80,80,57,57,45,45,43,43,41,41,40,40,39,39,37,37,36,36,35,109,109,109,109,109,109,109,110,110,110,112,110,109,117,117,117,117,118,118,118,118,120,120,120,120,122,122,122,122,123,123,123,123,125,125,126,127,125,129,129,129,129,130,130,130,130,132,132,132,132,133,133,133,133,134,134,134,134,135,135,135,137,135,134,134,133,133,132,132,130,130,129,129,123,123,122,122,120,120,118,118,117,142,142,142,142,143,143,143,143,143,143,143,143,143,143,143,143,143,143,143,143,144,145,143,143,143,143,143,148,143,143,143,142,153,153,153,153,155,156,158,153,153,0,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,5,5,5,7,5,4,4,10,10,10,10,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,18,18,18,18,19,19,19,21,19,18,24,18,16,16,15,15,14,14,13,13,12,12,27,27,27,27,29,29,29,30,30,31,31,31,32,31,30,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,37,38,40,40,40,40,41,41,41,41,42,42,42,42,44,44,44,45,45,46,45,48,48,48,48,49,49,49,49,50,50,50,50,51,51,51,53,51,50,50,49,49,48,48,42,42,41,41,40,40,36,36,36,36,36,36,56,56,56,56,58,58,59,58,61,56,56,36,36,36,36,27,27,12,12,10,10,4,4,2,2,1,1,0,0,0,3,3,3,4,5,8,10,10,10,10,14,14,14,14,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,17,17,17,17,19,20,22,17,17,16,16,16,16,16,16,27,27,28,28,28,28,29,29,29,29,31,31,31,32,32,32,33,34,36,29,29,28,28,27,41,41,41,43,41,16,16,16,16,14,14,10,10,3,48,48,48,48,50,50,51,50,52,52,53,52,55,55,55,55,56,56,56,56,60,60,61,61,61,61,63,64,61,61,60,67,67,67,69,67,56,56,55,55,48,48,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,5,3,3,3,3,3,9,3,3,3,1,1,0,0,0,0,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,7,5,4,4,3,3,2,2,1,10,11,12,13,14,15,0,0,0,0,0,1,2,4,6,6,6,6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,11,11,12,14,11,17,17,17,17,18,18,18,18,20,20,21,22,20,23,24,18,18,17,17,9,9,8,8,8,8,8,27,8,8,8,6,6,0,0,0,1,0,0,0,0,0,0,1,3,3,3,3,5,6,8,3,3,0,0,0,0,0,1,2,4,5,7,0,0,0,1,2,4,4,4,4,6,8,8,8,8,10,10,11,11,11,13,11,10,14,15,8,8,4,4,0,0,0,0,0,1,2,3,3,4,4,4,4,6,8,4,4,3,9,10,0,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,1,1,1,2,3,1,6,1,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,3,3,3,3,7,3,3,3,1,1,0,0,0,0,0,0,1,1,1,1,2,2,2,2,4,6,6,6,6,7,7,8,7,9,10,6,13,6,2,2,1,1,0,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,5,4,6,6,7,6,10,10,10,10,11,11,11,11,12,12,12,12,14,16,17,19,21,21,21,21,22,22,22,22,23,23,23,25,23,22,22,21,21,12,12,11,11,10,10,2,2,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,2,4,5,6,6,7,7,7,7,8,8,8,8,10,11,8,8,7,14,7,6,15,16,0,0,0,0,0,1,1,1,1,2,2,2,2,4,5,6,2,2,1,1,0,0,0,1,1,1,1,3,3,4,4,4,4,6,8,4,4,3,11,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,21,19,18,18,17,17,16,16,15,15,14,14,13,13,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,3,3,3,3,5,6,8,8,8,10,8,3,3,2,2,1,1,1,1,1,13,1,1,1,0,0,0,0,0,1,1,1,1,3,3,3,3,4,5,7,7,7,9,7,3,12,3,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,5,5,5,6,6,6,6,7,7,7,9,7,6,6,5,12,5,3,3,2,2,1,1,0,0,0,0,0,1,3,0,0,0,1,2,4,0,0,0,0,0,0,1,2,4,5,7,0,0,0,0,0,1,1,1,1,3,3,3,4,4,4,4,6,7,9,4,4,3,12,1,1,0,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,2,3,4,5,6,7,1,10,0,0,0,0,0,0,0,1,2,4,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,8,8,8,9,9,9,9,10,10,10,12,10,9,9,8,8,6,6,5,5,4,4,3,17,18,19,20,21,23,23,23,23,25,25,26,25,27,28,29,30,32,34,34,34,34,36,36,36,36,37,38,40,40,41,41,41,43,41,40,36,36,47,48,50,50,51,52,50,53,53,54,54,54,54,56,56,56,57,57,57,57,59,59,60,61,59,64,57,57,56,67,54,54,53,36,36,34,34,23,23,0,0,0,0,0,0,1,3,0,0,0,1,2,4,5,7,7,7,7,9,10,12,7,7,0,0,0,1,2,4,5,7,7,7,7,8,8,8,9,9,9,10,10,10,11,12,7,15,7,0,0,0,1,2,4,5,7,7,7,7,8,8,8,9,9,9,10,11,7,14,7,0,0,0,1,2,4,5,7,8,10,11,13,14,16,0,0,0,1,0,0,0,1,2,4,5,7,8,10,11,13,14,16,17,19,0,0,0,1,2,4,5,7,0,0,0,1,1,1,3,1,0,0,0,0,1,0,0,0,1,2,4,0,0,0,1,2,4,0,0,0,1,2,4,5,7,8,10,0,0,0,1,2,4,5,7,0,0,0,1,2,4,5,7,0,0,0,1,0,0,0,1,2,4,5,7,7,7,7,8,9,7,12,7,0,0,0,1,2,4,5,7,7,7,7,9,10,14,14,14,14,16,17,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,23,23,23,24,25,21,21,21,21,21,28,21,21,21,14,14,7,7,0,0,0,1,2,4,4,5,5,5,7,5,4,10,0,0,0,1,0,0,0,1,1,1,1,3,4,6,7,9,1,1,0,0,0,1,2,4,5,7,0,0,0,1,2,4,0,0,0,1,1,1,1,3,4,6,7,9,1,1,0,0,0,1,2,4,5,7,7,7,7,9,9,9,10,10,10,11,12,14,14,14,14,15,16,14,19,14,7,7,0,0,0,1,2,4,5,7,7,7,7,8,9,11,11,11,11,13,14,11,11,7,17,7,0,0,0,1,0,0,0,1,2,4,5,7,0,0,0,1,2,4,4,4,4,6,7,9,9,9,9,10,11,13,13,13,13,15,16,13,13,9,19,9,4,4,0,0,0,1,2,4,4,4,4,6,7,9,10,12,12,12,12,13,14,16,17,19,20,22,23,12,26,12,4,4,0,0,0,1,2,4,5,7,7,8,7,9,9,10,9,13,0,0,0,0,0,0,1,1,1,3,1,0,0,0,1,2,4,4,4,6,4,0,0,0,1,2,4,5,7,8,10,10,10,10,11,11,11,11,13,14,17,17,17,19,17,11,11,10,10,0,0,0,1,2,4,5,7,7,7,7,9,10,12,12,12,14,12,7,7,0,0,0,1,2,4,0,0,0,1,2,4,5,7,7,7,7,8,9,7,12,7,0,0,0,1,2,4,4,4,4,6,7,9,9,9,9,10,10,10,10,12,13,15,16,18,10,10,9,9,4,4,0,0,0,1,2,4,0,0,0,1,2,4,5,7,8,10,0,0,0,0,1,0,0,0,1,2,4,5,7,0,0,0,1,2,4,5,7,0,0,0,1,0,0,0,1,2,4,5,7,8,10,10,10,12,10,0,0,0,1,2,4,5,7,7,7,7,9,10,12,12,12,14,12,7,7,0,0,0,1,2,4,4,4,6,4,0,0,0,1,2,4,0,0,0,1,2,4,5,7,7,7,7,8,9,7,12,7,0,0,0,1,2,4,0,0,0,1,2,4,5,7,7,7,9,7,0,0,0,1,1,1,3,1,0,0,0,1,2,4,5,7,0,0,0,1,2,4,5,7,0,0,0,1,0,0,0,1,2,4,5,7,7,7,7,9,10,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,14,16,12,12,12,12,12,19,12,12,12,7,7,0,0,0,1,2,4,0,0,0,1,2,4,0,0,0,1,0,0,0,1,2,4,5,7,7,7,7,8,9,7,12,7,0,0,0,1,2,4,4,4,4,6,6,6,7,7,7,8,9,11,11,12,11,13,13,14,13,17,4,4,0,0,0,1,2,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,9,7,7,7,7,7,7,7,7,6,6,6,6,6,13,6,6,6,0,0,0,1,2,4,4,4,6,4,0,0,0,1,2,4,5,7,0,0,0,1,2,4,5,7,8,10,11,13,14,16,0,0,0,1,2,4,5,7,0,0,0,1,2,4,5,7,8,10,0,0,0,0,0,1,2,4,6,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,2,4,1,7,0,0,0,3,3,3,3,4,4,4,4,6,6,6,6,7,7,8,10,7,13,13,14,16,13,21,21,21,23,21,6,26,6,4,4,3,33,33,33,33,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,36,36,37,37,37,37,39,41,37,37,36,44,44,44,46,44,35,35,35,35,35,35,49,49,49,49,50,50,50,50,51,51,51,51,52,52,52,52,53,53,53,53,54,54,54,54,55,55,55,55,56,56,56,56,58,58,59,59,59,61,59,58,62,62,63,63,63,63,64,64,64,66,64,63,63,62,72,72,72,72,73,73,73,73,75,75,76,76,76,76,78,79,81,76,76,75,84,84,84,84,85,85,85,85,87,87,88,90,87,95,95,95,95,96,96,96,96,97,97,97,97,98,98,98,98,100,101,103,103,103,103,104,104,104,106,104,103,103,98,98,97,97,96,96,95,95,85,85,84,84,73,73,72,72,56,56,55,55,54,54,53,53,52,52,51,51,50,50,49,49,35,35,35,35,33,33,0,0,0,3,3,6,6,6,6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,10,12,9,15,15,15,17,15,8,8,8,8,8,8,20,20,20,20,22,23,24,24,25,25,25,25,26,26,26,26,27,27,27,29,27,26,26,25,25,24,33,34,20,20,8,8,8,8,6,6,3,39,39,40,40,40,40,42,42,42,42,43,43,44,45,43,48,48,48,50,48,42,42,53,53,53,53,54,54,54,54,55,55,55,55,57,59,55,55,54,54,53,53,42,42,40,40,39,64,65,66,66,67,68,69,70,66,71,72,0,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,1,1,3,1,0,0,0,0,1,1,1,1,3,3,4,3,5,5,6,5,9,9,10,11,9,12,12,13,12,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,34,35,36,36,37,37,37,37,38,38,39,41,38,37,45,36,46,47,1,1,0,0,0,0,0,0,1,1,1,1,3,3,3,3,4,4,4,4,6,8,4,4,3,11,3,1,1,0,0,0,0,0,0,1,2,4,5,7,8,10,10,10,12,10,0,0,0,0,0,0,1,2,4,5,7,8,10,10,10,12,10,0,0,0,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,9,7,6,6,5,5,4,4,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,3,3,3,3,5,6,8,3,3,0,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,2,3,3,4,4,4,6,4,3,7,8,0,0,0,0,0,1,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,6,4,3,3,3,3,3,3,9,9,9,9,10,10,10,10,12,13,15,10,10,9,18,9,3,3,3,3,1,1,0,0,0,0,0,0,0,1,1,1,1,3,3,3,3,4,5,7,7,7,9,7,3,3,12,14,3,3,1,1,0,0,0,0,0,0,1,1,1,1,3,3,3,3,4,5,7,7,7,9,7,3,12,3,1,1,0,0,0,0,0,0,0,1,1,1,1,3,5,5,5,5,6,7,9,9,9,11,9,5,14,5,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,5,6,8,4,11,12,14,2,2,1,1,0,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,1,1,2,2,2,2,4,4,5,6,8,4,11,2,2,1,14,15,16,18,0,0,0,0,0,1,1,2,2,2,2,4,4,5,6,8,4,11,2,2,1,14,15,16,18,0,0,0,0,0,1,0,0,0,0,0,2,2,2,2,3,3,3,3,5,5,6,5,9,3,3,2,2,0,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,6,7,9,4,4,2,2,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,4,5,7,9,2,2,1,1,0,0,0,0,0,1,2,4,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,3,5,1,1,0,0,0,0,0,1,2,4,5,7,7,7,7,9,9,10,10,10,10,12,14,10,10,9,17,7,7,0,0,0,0,0,0,1,1,1,1,3,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,5,5,5,5,5,5,5,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,5,4,6,6,7,7,7,7,9,9,10,10,10,10,12,12,13,14,12,10,10,9,7,7,6,17,18,20,20,20,20,21,21,21,21,22,22,22,22,23,23,23,23,24,24,24,24,25,25,25,25,27,29,25,25,24,24,23,23,22,22,21,21,20,20,2,2,1,1,0,0,0,0,0,1,2,4,0,0,0,0,0,0,1,2,4,5,7,0,0,0,0,0,1,0,0,0,0,0,1,2,4,6,6,6,6,7,7,7,7,9,9,10,10,10,10,11,11,11,11,13,13,14,15,13,16,17,11,11,10,10,9,20,7,7,6,6,0,0,0,1,2,4,5,7,7,7,7,8,8,8,8,10,11,13,8,8,7,7,0,0,0,0,0,1,3,5,5,5,5,7,7,8,7,9,9,10,12,9,15,15,15,15,17,19,19,19,19,21,22,24,19,19,15,15,5,5,0,0,0,0,0,0,1,2,4,4,4,4,6,6,6,6,7,8,10,6,13,6,4,4,0,0,0,0,0,0,1,2,4,5,7,7,7,7,9,11,7,7,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,3,3,4,3,7,1,1,0,0,0,0,0,0,0,1,1,2,2,2,4,2,1,5,5,6,6,6,6,8,8,8,8,9,10,11,12,8,15,8,6,6,5,16,17,0,0,0,0,0,1,2,4,4,4,4,6,6,7,6,9,9,9,9,10,10,10,10,12,12,12,12,14,14,14,14,16,17,19,19,19,19,21,22,23,24,26,26,26,28,26,19,19,14,14,12,12,10,10,9,9,4,4,0,0,0,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,8,6,5,5,4,4,3,3,2,2,1,11,13,14,16,16,17,17,17,19,17,16,22,26,26,26,27,27,27,27,28,28,28,28,30,30,31,31,31,31,32,32,32,32,34,34,35,34,32,32,31,31,30,38,38,38,38,39,39,39,39,40,40,40,40,41,41,41,41,42,42,42,42,43,43,43,43,44,44,44,46,44,43,43,42,42,41,41,40,40,39,39,38,38,28,28,27,27,26,51,51,51,52,52,52,52,53,53,53,53,54,54,54,54,56,56,57,56,58,58,59,58,61,61,61,61,62,62,62,62,63,63,63,63,64,64,64,64,65,65,65,65,66,66,66,68,66,65,65,64,64,63,63,62,62,61,61,54,54,53,53,52,52,51,73,73,73,74,75,77,79,79,79,80,79,73,86,86,86,86,86,87,87,87,87,89,90,92,93,95,95,95,95,96,96,96,96,98,99,96,96,95,95,87,87,86,104,104,104,104,105,105,105,105,106,106,106,106,107,107,107,107,108,108,108,108,109,109,109,109,111,111,112,111,113,113,114,114,114,114,116,114,114,113,119,121,121,121,122,122,122,123,124,126,127,128,128,129,129,129,129,131,131,131,132,132,132,133,133,133,134,134,135,135,135,137,135,134,140,140,140,142,140,129,129,128,143,144,146,146,146,146,147,147,147,147,148,148,148,148,149,149,149,149,150,150,150,150,152,152,152,152,154,154,155,157,154,160,160,161,163,160,166,166,167,166,169,169,170,169,172,172,173,172,175,175,176,176,177,176,175,179,180,182,182,182,184,182,152,152,150,150,149,149,148,148,147,147,146,146,109,109,108,108,107,107,106,106,105,105,104,104,0,0,0,0,0,1,1,1,1,3,5,6,8,9,11,12,14,15,17,18,20,20,21,22,20,25,25,25,27,25,1,1,0,0,0,0,0,1,2,6,6,6,7,7,7,9,7,6,14,14,14,14,15,15,15,15,17,19,19,20,21,19,24,24,25,26,24,29,29,30,31,29,34,34,35,36,34,39,39,40,41,39,44,44,45,46,44,49,49,50,51,49,54,15,15,14,14,0,0,0,0,0,3,3,3,3,4,5,7,3,12,12,12,12,13,13,13,13,14,14,14,16,14,13,13,12,12,0,0,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,5,7,7,7,7,8,9,7,12,12,13,15,16,12,19,19,19,19,21,23,24,27,28,30,19,19,5,5,4,4,3,3,0,0,0,0,0,1,1,2,2,2,2,4,6,6,6,8,6,2,2,1,9,10,11,12,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,8,8,9,9,10,10,10,12,10,9,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,22,20,20,19,19,18,18,17,17,16,16,15,15,8,25,6,6,5,5,4,4,0,0,0,1,0,0,0,0,0,1,2,4,6,7,9,13,13,13,13,13,14,14,14,14,15,15,15,15,17,17,18,18,18,18,20,20,21,21,21,21,23,24,21,21,20,25,25,26,26,26,28,26,25,18,18,17,32,15,15,14,14,13,37,37,37,37,37,38,39,41,41,41,41,43,43,44,44,44,44,46,47,49,44,44,43,52,41,41,37,57,57,57,59,57,0,0,0,0,0,0,1,2,4,0,0,0,0,0,1,2,4,5,7,7,8,8,8,8,10,12,8,8,7,15,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,5,5,5,5,6,6,6,6,8,9,6,6,5,5,4,12,2,2,1,1,0,0,0,0,0,1,1,1,1,3,5,5,5,5,7,7,8,7,9,9,10,12,9,15,17,5,5,1,1,0,0,0,0,0,1,3,3,3,3,5,5,6,6,6,6,7,7,7,7,9,10,12,7,7,6,6,5,3,3,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,3,3,4,4,4,6,4,3,9,10,11,13,13,13,13,15,17,17,17,17,19,21,17,17,13,13,0,0,0,0,0,1,1,2,3,4,4,5,7,4,1,9,9,10,10,10,10,10,11,10,14,15,17,19,19,19,19,20,20,20,20,22,22,22,22,23,23,23,23,24,24,24,24,25,25,25,27,25,24,24,23,23,22,22,30,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,33,33,33,35,33,32,32,32,32,32,38,32,32,32,22,22,20,20,19,19,9,0,0,0,1,0,0,0,0,0,2,3,5,6,8,0,0,0,0,0,1,0,0,0,1,2,4,0,0,0,0,0,1,2,4,4,4,6,4,0,0,0,0,0,0,2,2,3,3,3,5,3,2,8,0,0,0,0,0,0,1,1,2,2,2,4,2,1,7,0,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,0,1,1,2,3,4,5,6,7,1,10,0,0,0,0,0,0,1,2,4,4,4,4,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,9,7,6,6,6,6,6,12,6,6,6,4,4,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,1,1,1,3,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,7,7,7,9,7,6,6,5,5,5,5,5,5,5,5,1,1,0,0,0,1,0,0,0,0,0,0,1,1,2,2,2,2,4,4,4,4,5,5,5,5,7,7,8,7,10,5,5,4,13,4,2,2,1,16,16,16,16,17,17,17,17,18,18,18,20,18,17,17,16,16,0,0,0,0,0,0,1,1,1,1,3,5,5,5,5,6,6,6,8,6,5,5,1,1,0,0,0,0,0,0,0,1,1,1,1,3,5,5,5,5,6,6,6,6,7,7,7,7,9,9,9,9,10,10,10,10,12,12,13,14,12,17,10,10,9,20,9,7,7,6,6,5,5,1,1,0,0,0,0,0,3,3,3,3,4,4,4,4,6,6,6,6,7,7,7,7,9,9,9,9,10,10,10,10,12,13,15,15,15,17,15,10,10,9,20,9,7,7,6,23,6,4,4,3,28,28,28,28,29,29,29,29,30,30,30,30,32,32,32,32,33,33,34,34,34,36,34,33,37,38,39,40,32,32,43,43,43,43,45,45,45,45,46,45,45,49,49,49,49,50,50,51,51,51,51,53,54,51,51,50,55,55,56,56,56,58,56,55,59,60,49,63,49,45,45,43,43,32,32,30,30,29,29,28,68,68,68,68,69,69,69,69,70,70,70,70,72,72,72,72,73,73,73,73,74,74,74,74,76,78,78,78,80,78,74,74,73,73,72,72,83,83,83,83,85,85,85,85,86,86,86,86,87,87,87,87,89,89,89,89,90,89,89,93,89,89,87,87,86,86,85,85,96,97,99,99,99,99,100,100,100,100,102,104,104,104,104,106,106,106,106,107,107,107,109,107,106,106,112,112,112,112,114,115,117,117,117,117,119,119,119,119,119,119,119,119,119,119,119,119,119,119,119,119,120,120,120,120,122,122,122,122,123,123,123,125,123,122,122,128,128,128,130,128,122,122,120,120,119,119,119,119,119,119,133,135,119,119,119,119,117,117,112,112,106,106,104,104,100,100,99,99,85,85,83,83,72,72,70,70,69,69,68,68,0,0,0,0,0,0,3,3,3,3,3,4,4,4,4,5,5,5,7,5,4,4,3,12,0,0,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,9,10,10,10,12,10,9,15,15,16,16,16,18,16,15,21,21,22,22,22,22,23,23,23,25,23,22,22,21,28,28,29,29,29,29,30,30,30,32,30,29,29,28,35,35,36,36,36,36,37,37,37,39,37,36,36,35,42,42,43,43,43,43,44,44,44,46,44,43,43,42,49,49,49,49,50,50,50,52,50,49,49,7,7,6,6,5,5,4,4,3,3,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,1,1,1,3,4,6,6,7,7,7,7,8,8,8,10,8,7,7,6,13,13,13,13,14,14,14,16,14,13,13,1,1,0,0,0,0,0,1,2,4,6,6,6,6,7,7,7,9,7,6,6,0,0,0,0,1,1,1,3,1,0,0,0,1,1,2,2,2,4,2,1,7,8,10,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,20,21,23,23,23,23,24,24,24,26,24,23,23,18,18,17,17,16,16,15,15,14,14,13,13,12,12,0,0,0,0,0,1,2,4,6,6,6,6,7,7,7,9,7,6,6,0,0,0,0,0,1,0,0,0,1,2,4,4,4,4,6,6,7,8,10,10,10,10,12,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,16,16,16,16,18,18,19,19,19,21,19,18,22,22,23,23,23,23,24,24,24,24,26,27,24,24,23,23,22,16,16,15,15,14,14,14,14,14,14,31,33,14,14,14,14,10,10,6,34,34,35,36,38,38,38,38,40,42,42,42,42,43,43,43,43,44,44,44,44,45,45,45,45,47,47,48,47,50,50,51,51,51,53,51,50,54,54,55,55,55,55,56,56,56,56,58,59,56,56,55,55,54,45,45,44,44,43,43,42,42,63,65,42,42,38,38,34,66,67,68,69,70,71,4,4,0,0,0,0,0,1,2,4,6,6,6,6,7,7,7,7,9,10,12,12,12,12,13,13,13,13,14,14,14,14,16,16,17,17,17,17,19,20,22,17,17,16,25,26,28,30,14,14,13,13,12,12,7,7,6,6,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,3,5,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,3,5,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,8,6,5,5,4,4,3,11,3,1,1,0,0,0,0,0,1,1,1,1,3,5,1,1,0,0,0,0,0,1,0,0,0,1,1,2,2,2,2,4,4,5,5,5,5,7,7,8,8,8,9,12,8,7,5,5,4,2,2,1,17,18,19,19,20,20,20,20,22,22,22,22,23,23,24,24,24,26,24,23,27,28,22,22,31,31,31,31,33,35,36,31,31,22,22,20,20,19,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,2,3,5,5,5,5,7,9,5,5,1,10,11,12,13,0,0,0,1,1,2,2,2,2,3,3,3,5,3,2,2,1,8,10,10,10,10,11,11,11,11,12,12,12,12,14,14,15,15,15,15,16,16,16,16,18,19,20,21,16,16,15,15,14,24,24,24,24,26,26,26,26,27,27,28,29,27,32,32,33,34,32,37,37,37,37,39,40,42,37,37,26,45,26,24,24,12,12,11,11,10,10,0,0,0,1,1,2,4,4,4,4,5,5,5,7,5,4,4,1,10,11,13,13,13,13,15,15,15,15,16,16,16,18,16,15,21,15,13,13,0,0,0,1,2,4,6,6,7,7,7,7,8,8,8,10,8,7,7,6,13,15,15,15,15,17,17,17,17,18,18,18,18,20,21,22,22,23,23,23,23,24,24,24,26,24,23,23,22,18,18,17,30,17,15,15,0,0,0,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,7,5,4,4,3,3,2,2,1,10,12,12,12,12,13,13,13,15,13,12,12,0,0,0,1,1,2,4,4,4,4,5,5,5,7,5,4,4,1,10,11,13,13,13,13,15,15,15,15,16,16,16,18,16,15,21,15,13,13,0,0,0,1,1,2,2,2,2,3,3,3,5,3,2,2,1,8,10,10,10,10,12,12,13,13,13,13,15,15,15,15,16,16,17,19,16,22,22,22,24,22,15,15,27,15,15,13,13,12,30,10,10,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,22,22,22,22,23,23,23,23,24,24,24,24,25,25,25,25,26,26,26,26,27,27,27,27,28,28,28,28,29,29,29,29,30,30,30,30,31,31,31,31,32,32,32,32,33,33,33,33,34,34,34,34,35,35,35,35,36,36,36,38,36,35,35,34,34,33,33,32,32,31,31,30,30,29,29,28,28,27,27,26,26,25,25,24,24,23,23,22,22,21,21,20,20,19,19,18,18,17,17,16,16,15,15,14,14,13,13,12,12,11,11,10,10,9,9,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,0,1,2,4,0,0,0,0,0,1,2,4,5,7,8,10,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,5,3,2,2,1,1,0,0,0,1,2,3,4,5,6,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,12,12,12,12,13,13,13,13,15,15,16,15,18,13,13,12,21,12,10,10,9,9,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,1,2,0,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,1,1,1,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,11,11,13,11,6,6,5,5,4,4,3,16,3,1,1,0,0,0,0,1,0,0,0,0,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,12,13,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,22,22,22,22,24,24,24,24,26,26,27,27,28,27,26,29,29,30,29,31,32,34,34,35,37,34,24,24,22,22,21,21,20,20,19,19,18,18,17,17,16,16,15,15,7,7,6,6,5,5,4,4,4,4,4,4,4,4,3,44,45,47,47,47,47,49,50,54,54,54,54,55,55,55,55,57,58,62,55,55,54,54,47,47,0,0,0,0,0,1,1,1,1,3,5,5,5,5,7,9,9,9,9,10,10,10,12,10,9,9,5,5,1,1,0,0,0,0,0,0,1,1,1,1,2,2,2,2,4,6,6,7,6,8,8,9,11,8,14,16,2,2,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,1,1,1,3,3,3,3,4,4,4,4,6,7,4,4,3,10,3,1,1,0,0,0,0,0,1,2,4,6,6,6,6,8,8,8,8,9,10,11,11,12,13,15,15,15,17,15,11,18,19,8,22,8,6,6,0,0,0,0,0,1,1,1,1,2,2,2,4,2,1,1,0,0,0,0,0,1,2,4,6,6,6,6,7,7,7,7,8,8,8,8,10,12,12,12,12,13,13,13,13,15,15,16,18,15,21,21,22,23,21,13,13,12,27,12,8,8,7,7,6,6,0,0,0,0,0,1,2,0,0,0,0,0,1,1,1,1,3,3,3,3,4,4,4,4,6,4,4,3,9,3,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,3,3,3,3,4,4,4,6,4,3,3,0,0,0,0,0,1,2,4,4,4,6,4,0,0,0,0,0,0,1,1,2,2,2,2,4,5,2,2,1,8,8,8,8,10,11,13,13,13,15,13,8,8,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,2,2,3,3,3,3,4,4,4,4,6,8,4,4,3,3,2,1,12,12,12,12,13,13,13,13,14,14,14,16,14,13,13,12,12,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,5,3,2,2,1,1,0,0,0,0,0,1,2,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,11,11,11,11,12,12,12,12,14,15,16,17,18,19,12,12,11,24,24,24,24,25,25,25,25,26,26,26,26,28,28,29,28,31,26,26,25,25,34,34,34,34,35,35,35,35,37,38,35,35,34,34,25,25,24,43,43,43,43,44,44,44,44,46,44,44,43,51,51,51,52,51,57,57,57,57,58,57,63,63,63,63,64,64,64,64,65,65,65,65,67,69,69,70,71,73,74,76,69,79,79,80,79,82,83,85,65,65,64,64,63,63,9,9,8,8,7,7,6,6,0,0,0,0,3,3,3,3,3,4,4,5,5,5,5,7,8,10,12,13,15,5,5,4,16,16,17,16,20,22,3,27,28,29,30,31,32,33,34,35,36,38,39,40,41,42,43,47,47,47,47,48,48,48,48,49,49,49,49,51,53,57,57,57,57,59,63,67,67,67,67,69,69,70,69,72,72,73,72,75,75,76,75,78,78,79,78,83,83,83,83,85,87,83,83,67,67,57,57,49,49,48,48,47,47,0,0,0,1,1,2,2,2,4,2,1,7,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,22,22,22,22,23,23,23,25,23,22,22,21,21,20,20,19,19,18,18,18,18,18,28,18,18,18,16,16,15,15,14,14,13,13,12,12,11,11,10,10,9,9,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,6,8,8,8,8,9,9,9,9,10,10,10,12,10,9,9,8,8,3,3,2,2,1,1,0,0,0,0,1,1,1,3,1,0,0,0,0,1,1,1,1,2,3,1,6,1,0,0,0,0,1,1,1,1,2,3,1,6,1,0,0,0,0,1,2,4,0,0,0,0,1,2,4,5,7,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,4,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,4,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,8,6,5,5,4,4,0,0,0,0,1,2,4,0,0,0,1,1,2,2,2,2,4,4,5,4,6,6,7,6,10,10,10,10,12,12,13,13,13,13,15,15,16,15,17,17,18,20,17,13,13,12,24,26,10,10,2,2,1,27,27,28,28,29,28,30,30,31,30,34,27,35,36,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,4,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,5,4,6,6,7,9,6,12,14,2,2,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,3,4,5,6,8,9,11,12,14,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,7,7,7,7,8,10,11,13,13,13,13,15,17,17,17,17,19,20,17,17,13,13,7,23,23,23,23,24,24,24,26,24,23,29,29,29,29,30,30,30,30,31,31,31,31,33,31,31,30,30,29,36,36,37,37,37,38,38,38,39,40,42,43,36,46,46,46,46,47,47,47,47,48,48,48,48,50,52,52,52,52,53,52,56,56,56,56,58,58,58,58,59,59,59,59,60,60,60,60,62,62,62,62,63,63,63,63,65,66,67,69,70,73,74,76,76,76,76,77,77,77,77,79,81,83,77,77,76,76,63,63,62,62,60,60,59,59,58,58,56,56,48,48,47,47,46,46,5,5,4,4,3,3,2,2,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,6,8,4,4,3,3,2,2,1,1,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,6,6,6,6,8,8,9,9,10,10,10,12,10,9,15,15,15,17,15,8,20,20,20,20,22,23,25,26,28,28,28,30,28,20,20,6,6,4,4,3,3,2,2,1,1,0,0,0,1,1,2,2,2,4,2,1,7,9,9,9,9,11,13,9,9,0,0,0,0,1,0,0,0,0,0,0,1,2,4,4,4,4,5,5,5,5,7,7,8,8,9,8,10,10,11,10,7,14,14,15,15,15,15,17,15,15,14,20,20,20,20,21,21,21,21,22,22,22,24,22,21,21,20,20,5,5,4,4,0,0,0,0,0,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,10,10,10,10,10,11,11,11,11,12,12,12,12,14,16,17,19,19,19,19,20,20,20,20,21,21,21,21,23,25,21,21,20,20,19,19,12,12,11,11,10,30,30,30,30,31,31,31,33,31,30,38,38,38,38,39,39,39,41,39,38,46,46,47,47,47,48,48,48,49,50,52,53,46,58,58,58,58,60,60,60,60,61,60,66,66,66,66,68,68,68,68,69,69,69,69,70,70,70,70,72,72,72,72,73,73,73,73,75,76,77,79,80,83,84,86,87,89,91,93,73,73,72,72,70,70,69,69,68,68,66,66,58,58,8,8,7,7,6,6,5,5,4,4,3,3,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,9,9,9,9,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,17,15,14,14,13,13,12,12,11,11,9,9,8,8,7,7,7,7,7,20,7,7,7,3,3,2,2,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,11,13,9,9,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,6,4,3,3,2,2,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,6,8,4,4,3,3,2,2,1,1,0,0,0,0,1,1,2,2,2,2,4,6,2,2,1,9,9,9,11,9,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,0,0,0,1,2,4,6,6,6,6,8,10,10,10,10,11,11,11,11,12,12,12,12,14,15,17,17,17,17,18,18,18,18,20,20,21,21,21,21,22,22,22,22,23,23,23,23,24,24,24,24,26,26,27,26,29,29,29,29,31,32,29,29,24,24,23,23,22,22,21,21,20,18,18,17,17,12,12,11,11,10,10,6,6,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,5,5,5,5,9,10,14,14,14,14,15,15,15,15,17,17,17,17,19,19,20,20,20,20,22,22,22,23,24,20,20,19,25,25,26,26,26,26,28,28,28,29,30,26,26,25,31,32,36,17,17,15,15,14,14,5,5,4,2,2,1,1,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,3,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,10,6,6,5,5,4,4,3,15,15,15,15,17,19,15,15,0,0,0,0,0,1,1,1,1,2,2,2,4,2,1,1,0,0,0,0,0,1,1,1,3,1,0,0,0,0,1,1,1,1,3,4,5,6,7,8,10,1,1,0,0,0,0,1,1,1,1,2,2,2,2,4,5,6,7,8,9,10,11,12,13,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,22,22,22,24,22,21,21,20,20,19,19,18,18,17,17,16,16,15,15,15,15,15,27,15,15,15,2,2,1,1,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,9,10,11,15,15,15,15,17,17,18,19,21,17,26,26,27,27,27,27,29,30,32,27,27,26,37,37,37,37,38,38,38,38,40,40,41,40,43,43,44,43,48,48,49,49,49,49,51,52,53,55,49,49,48,60,60,60,60,61,61,61,61,63,63,64,64,64,64,65,65,65,65,67,69,69,70,72,69,65,65,64,64,63,78,78,79,79,79,79,81,82,83,84,86,79,79,78,89,90,61,61,60,60,38,38,37,37,15,15,9,93,93,93,93,94,94,94,94,95,95,95,95,97,98,100,95,95,94,94,93,93,7,7,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,1,2,4,5,7,8,12,12,12,12,13,13,14,14,14,14,16,16,16,16,17,17,17,19,17,16,16,14,14,13,20,20,21,21,21,23,21,20,24,25,12,30,30,30,30,31,31,32,32,32,32,34,34,34,34,35,35,35,37,35,34,34,32,32,31,38,38,39,39,39,41,39,38,42,43,30,48,48,49,51,51,51,53,51,48,58,58,58,58,59,59,59,59,60,60,60,60,61,61,61,63,61,60,60,59,59,58,58,0,0,0,0,0,3,3,3,3,4,4,4,4,5,5,5,7,5,4,4,3,3,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,5,5,5,5,6,6,6,6,8,8,8,8,10,10,11,10,12,12,13,12,14,14,15,14,16,17,19,19,19,19,20,20,20,20,21,21,21,23,21,20,20,19,19,8,8,6,6,5,5,4,4,2,2,1,1,0,0,0,0,0,1,1,1,1,3,4,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,11,11,11,11,12,12,12,12,14,15,17,17,17,17,19,19,20,20,20,20,21,21,21,21,22,22,22,22,24,24,25,26,24,29,22,22,21,21,20,20,19,17,17,12,12,11,11,9,9,8,8,7,7,6,6,1,1,0,0,0,0,3,3,3,3,5,5,5,5,6,6,6,6,8,8,8,8,9,9,9,9,11,12,9,9,8,15,8,6,6,5,20,20,20,20,21,21,21,21,22,22,22,22,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,26,26,26,26,27,27,27,27,28,28,28,28,29,29,29,29,30,30,30,30,31,31,31,31,33,35,35,35,35,37,39,39,39,39,41,43,43,43,45,43,39,39,35,35,31,31,30,30,29,29,28,28,27,27,26,26,25,25,24,24,24,24,24,48,24,24,24,22,22,21,21,20,20,3,3,0,0,0,0,0,0,0,0,1,1,1,3,1,0,0,0,0,1,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,1,1,1,5,5,5,5,6,6,6,6,7,7,7,7,9,10,12,12,12,12,14,15,16,18,18,18,24,18,12,12,7,7,6,6,5,5,1,1,0,0,0,0,0,0,0,1,2,6,6,6,6,6,6,6,7,7,7,7,8,8,8,8,10,10,10,10,12,14,14,14,14,16,18,18,18,18,20,21,22,23,24,25,27,18,18,14,14,10,10,8,8,7,7,6,32,32,32,32,32,32,32,33,33,33,33,34,34,34,34,35,35,35,35,36,36,36,36,37,37,37,37,41,41,41,41,43,45,45,45,45,47,49,49,49,49,51,52,54,54,54,54,55,55,55,55,57,58,62,63,64,65,66,67,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,72,72,72,72,73,73,73,73,74,74,74,74,75,75,75,75,76,76,76,76,78,80,80,80,80,82,83,85,85,85,85,86,86,86,86,88,90,90,90,90,91,91,91,91,93,95,96,91,91,90,90,86,86,85,85,80,80,76,76,75,75,74,74,73,73,72,72,71,71,71,71,71,71,99,101,71,71,71,71,55,55,54,54,49,49,45,45,41,41,37,37,36,36,35,35,34,34,33,33,32,106,106,106,107,107,107,107,108,108,108,108,110,111,112,113,114,116,116,116,116,118,120,120,120,120,122,124,124,124,124,126,128,129,130,131,133,124,124,120,120,116,116,108,108,107,107,106,138,138,138,138,139,139,139,139,141,143,143,143,143,145,147,143,143,139,139,138,152,152,152,152,153,153,153,153,154,154,154,154,156,156,157,157,157,157,159,161,157,157,156,164,154,154,153,153,152,169,169,169,169,170,170,171,171,171,171,173,174,171,171,170,169,180,180,180,180,181,181,181,181,183,183,184,183,185,185,186,185,188,188,188,188,189,189,189,189,191,192,194,194,194,194,198,200,200,200,200,201,201,201,201,203,204,206,207,201,201,200,200,194,194,189,189,188,188,181,181,180,180,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,6,4,3,3,2,2,1,1,0,0,0,0,0,1,1,2,3,1,4,5,0,0,0,1,0,0,0,1,2,4,8,8,8,9,9,9,9,11,11,11,11,12,12,12,14,12,11,17,11,9,9,8,22,22,22,22,24,24,24,25,25,25,25,27,27,28,28,28,28,29,29,29,29,31,32,29,29,28,28,27,33,33,34,34,34,34,35,35,35,35,36,36,36,36,37,37,37,37,39,40,41,42,37,37,36,36,35,35,34,34,33,45,45,45,47,45,25,25,24,52,52,53,54,56,57,59,59,59,59,60,60,60,60,61,61,61,61,62,62,62,62,63,63,63,63,65,65,65,65,66,66,67,66,69,69,70,69,72,72,73,72,75,75,76,75,78,78,79,78,65,65,82,83,85,86,88,89,91,92,94,95,97,65,65,63,63,62,62,61,61,60,60,59,59,52,102,102,103,104,106,107,109,109,109,109,110,111,109,114,109,102,119,119,120,120,120,120,122,123,120,120,119,22,22,0,0,0,1,0,0,0,1,1,1,1,2,2,2,2,4,5,7,7,7,7,9,10,11,12,13,14,7,7,2,2,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,5,7,7,7,7,8,8,8,10,8,7,7,4,13,2,2,1,1,0,0,0,0,0,1,3,4,0,0,0,0,0,0,1,1,1,1,2,2,2,4,2,1,1,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,6,8,9,3,3,2,2,1,1,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,6,8,9,3,3,2,2,1,1,0,0,0,0,0,0,1,3,0,0,0,0,0,1,0,0,0,1,2,4,4,4,4,6,7,9,4,4,0,0,0,1,2,4,4,4,4,6,7,9,4,4,0,0,0,0,0,1,1,1,1,3,3,4,4,4,4,8,9,13,14,15,16,17,18,22,4,4,3,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,5,6,6,6,6,8,8,9,8,10,10,11,10,6,6,5,14,14,15,15,16,15,17,17,18,17,14,21,3,3,2,2,1,1,0,0,0,1,2,4,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,13,14,16,16,16,16,17,17,17,17,19,21,21,21,21,22,22,22,24,22,21,21,17,17,16,16,11,11,10,10,9,9,8,29,29,29,29,31,31,31,31,32,32,32,32,33,33,33,33,35,36,33,33,32,39,32,31,44,44,44,44,45,45,45,45,47,47,47,47,48,48,48,48,50,51,48,48,47,54,47,45,45,44,59,59,59,59,60,60,60,60,61,61,61,61,63,63,64,63,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,67,67,67,67,68,68,68,68,69,69,69,69,70,70,70,70,71,71,71,71,72,72,72,72,73,73,73,73,74,74,74,74,75,75,75,75,76,76,76,76,77,77,77,77,78,78,78,78,79,79,79,79,81,83,83,83,83,85,85,86,86,86,86,87,87,87,87,89,91,91,91,91,93,95,97,91,91,87,87,86,86,85,100,83,83,79,79,78,78,77,77,76,76,75,75,74,74,73,73,72,72,71,71,70,70,69,69,68,68,67,67,66,66,66,66,66,103,66,66,66,61,61,60,60,59,59,29,29,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,9,9,9,11,12,13,14,16,9,9,7,7,6,6,5,5,4,4,2,2,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,4,6,8,8,8,8,9,9,9,9,10,10,10,10,12,14,14,14,14,16,18,20,22,14,14,10,10,9,9,8,8,2,2,1,1,0,0,0,0,0,0,0,0,1,3,3,3,3,5,7,7,7,7,8,8,8,8,9,9,9,11,9,8,8,7,7,3,3,0,0,0,0,0,0,0,0,1,3,3,3,3,5,5,6,8,8,8,8,10,8,8,5,13,3,3,0,0,0,0,0,0,0,0,1,2,4,4,4,6,4,0,0,0,0,0,0,0,0,1,2,4,4,4,6,4,0,0,0,0,0,0,0,0,2,2,2,2,3,3,3,3,5,5,6,6,6,6,7,7,7,7,9,10,12,7,7,6,6,5,15,17,17,17,17,19,21,21,21,21,22,22,22,22,23,23,23,23,25,26,28,23,23,22,22,21,21,17,17,3,3,2,2,0,0,0,0,0,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,7,5,4,4,3,3,0,0,0,0,0,0,0,0,1,2,4,4,4,6,4,0,0,0,0,0,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,4,3,3,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,10,11,13,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,2,4,4,4,4,6,8,8,8,10,8,4,4,0,0,0,0,0,0,0,0,1,2,4,4,4,4,6,8,8,8,10,8,4,4,0,0,0,0,0,0,0,0,1,2,4,0,0,0,0,0,0,0,0,1,3,3,3,3,5,5,6,5,7,7,8,8,8,8,10,8,8,7,13,3,3,0,0,0,0,0,0,0,0,1,2,4,4,4,4,5,5,5,7,5,4,4,0,0,0,0,0,0,0,0,1,3,3,3,3,4,4,4,6,4,3,3,0,0,0,0,0,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,4,3,3,0,0,0,0,0,0,0,0,1,2,4,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,0,0,0,0,1,3,3,4,4,4,6,4,3,9,9,9,9,10,10,10,12,10,9,9,0,0,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,6,8,4,4,3,3,3,3,3,3,11,11,11,11,12,12,12,12,14,14,14,14,15,15,15,15,17,18,20,15,15,14,14,12,12,11,11,3,3,3,3,1,1,0,0,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,6,8,4,4,3,3,3,3,3,3,11,11,12,12,12,12,13,13,13,13,15,15,15,15,16,16,16,16,18,19,16,16,15,15,13,13,12,12,11,22,3,3,3,3,1,1,0,0,0,0,0,0,0,0,0,1,3,3,3,3,5,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,12,10,9,9,8,8,7,7,3,3,0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,10,12,7,7,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,0,0,0,0,0,3,3,3,3,4,5,7,7,8,8,8,8,10,12,12,12,12,13,13,13,13,15,16,18,13,13,12,12,8,8,7,21,3,26,26,26,26,27,27,27,27,29,31,31,31,31,32,32,32,32,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,35,35,35,35,37,38,40,40,40,40,41,41,41,43,41,40,40,35,35,34,34,34,34,34,34,46,46,46,46,47,47,47,47,48,48,48,48,49,49,49,49,50,50,50,50,51,51,51,51,53,54,56,51,51,50,50,49,49,48,48,47,47,46,46,34,34,34,34,32,32,31,31,27,27,26,26,0,0,0,0,0,0,1,1,1,1,3,3,3,3,4,4,4,6,4,3,9,3,1,1,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,4,5,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,9,9,9,10,11,13,13,13,13,15,16,13,13,7,7,7,7,7,7,19,19,19,19,20,20,20,20,21,21,21,23,21,20,20,19,19,7,7,7,7,2,2,1,1,0,0,0,0,0,1,2,4,6,6,6,6,8,8,8,8,10,12,12,13,14,12,17,19,8,8,6,6,0,0,0,0,0,0,3,3,3,3,4,4,4,4,6,6,6,6,7,7,8,8,8,8,10,11,13,8,8,7,16,16,16,18,16,6,21,6,4,4,3,26,26,26,26,27,27,27,27,28,28,28,28,29,29,29,29,31,31,31,31,33,33,34,34,35,37,34,33,41,41,41,41,42,42,42,42,43,43,43,43,44,44,44,44,45,45,45,45,46,46,46,46,47,47,47,47,49,51,52,54,54,54,54,55,55,56,58,55,61,63,63,63,63,65,67,67,67,67,68,68,68,68,70,70,71,73,70,76,78,78,78,78,79,79,79,79,80,80,80,80,82,82,82,82,83,83,83,83,84,84,84,84,85,85,85,85,86,86,86,88,86,85,85,84,84,83,83,82,82,80,80,79,79,78,78,68,68,67,67,63,63,54,54,91,93,95,54,54,47,47,46,46,45,45,44,44,43,43,42,42,41,41,31,31,29,29,28,28,27,27,26,100,100,100,100,101,101,101,101,102,102,102,102,104,104,104,104,105,105,106,106,106,106,107,107,107,107,109,109,110,112,109,107,107,106,106,105,114,114,115,117,114,120,104,123,104,102,102,101,101,100,128,128,129,130,132,133,135,128,140,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,7,7,7,7,8,8,8,8,10,10,11,12,10,13,13,14,16,13,19,8,8,7,7,3,3,2,2,1,1,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,12,13,15,15,15,15,16,17,18,18,19,19,19,21,19,18,22,23,15,15,26,26,26,26,27,27,27,27,28,28,28,28,29,29,29,29,30,30,30,30,31,31,31,31,33,35,35,35,35,36,36,36,36,38,38,38,38,39,38,43,38,36,36,35,35,46,46,47,47,47,47,48,48,48,50,48,47,47,46,53,35,35,31,31,30,30,29,29,28,28,27,27,26,26,15,15,10,10,9,9,8,8,7,7,6,6,5,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,59,59,59,59,60,60,60,60,61,61,61,61,63,65,65,65,65,66,66,66,66,67,67,67,69,67,66,66,65,65,61,61,60,60,59,59,58,58,58,58,58,58,58,58,0,0,0,0,0,0,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,8,9,9,9,9,11,11,12,13,11,14,15,9,9,8,18,18,18,18,20,20,21,21,21,23,21,20,26,26,26,26,27,27,27,27,28,28,28,30,28,27,27,26,26,18,18,6,6,5,5,4,4,3,35,35,35,35,36,36,36,36,38,38,39,39,39,41,39,38,44,36,36,35,35,0,0,0,0,0,0,3,3,3,3,4,4,4,4,6,6,6,6,7,7,8,8,8,8,10,11,13,8,8,7,16,16,16,18,16,6,21,6,4,4,3,26,26,26,26,27,27,27,27,28,28,28,28,30,30,30,30,31,31,31,31,32,32,32,32,33,33,33,33,34,34,34,34,36,38,38,38,38,39,39,39,39,40,40,40,40,41,41,41,41,42,42,42,42,44,46,46,46,46,47,47,47,47,48,48,48,48,49,49,49,49,50,50,50,50,52,54,54,54,54,55,55,55,55,56,56,56,56,57,57,57,57,58,58,58,58,60,62,58,58,57,57,56,56,55,55,54,54,50,50,49,49,48,48,47,47,46,46,42,42,41,41,40,40,39,39,38,38,34,34,33,33,32,32,31,31,30,30,28,28,27,27,26,67,0,0,0,0,0,3,3,3,3,5,5,5,5,6,6,6,6,8,9,11,11,11,11,13,15,11,11,6,6,5,20,20,20,20,22,22,22,23,22,26,26,26,26,27,27,27,27,28,28,28,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,31,31,31,31,32,32,32,32,34,35,37,37,37,37,39,40,37,37,32,32,31,31,30,30,30,30,30,30,43,43,43,43,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,46,46,46,46,47,47,47,47,48,48,48,48,49,49,49,49,51,51,51,51,52,52,52,54,52,51,57,51,49,49,48,48,47,47,46,46,45,45,45,45,45,45,60,60,60,60,61,61,61,61,63,65,65,65,65,66,66,66,66,67,67,67,67,69,71,71,71,71,72,72,72,72,74,76,76,76,76,77,77,77,77,79,81,81,81,81,82,82,82,82,84,86,86,86,86,87,87,87,87,89,91,91,91,91,92,92,92,92,93,93,93,93,95,97,99,93,93,92,92,91,91,87,87,86,86,82,82,81,81,77,77,76,76,72,72,71,71,67,67,66,66,65,65,61,61,60,60,45,45,45,45,43,43,30,30,30,30,28,28,27,27,26,26,22,22,20,20,3,3,0,0,0,0,0,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,11,11,12,12,12,12,14,14,15,14,12,12,11,16,16,17,16,19,19,20,20,20,20,21,21,21,21,23,25,21,21,20,20,19,28,28,28,28,29,29,29,29,30,30,30,30,31,31,31,31,32,32,32,32,34,36,36,36,36,38,40,40,40,40,42,44,40,40,36,36,32,32,31,31,30,30,29,29,28,28,9,9,8,8,7,7,6,6,5,5,4,4,3,49,49,49,49,49,50,51,53,53,53,53,54,54,54,56,54,53,53,49,59,59,59,59,60,60,60,60,62,62,62,62,63,63,63,65,63,62,68,62,60,60,59,73,73,73,73,74,74,74,74,75,75,75,75,76,76,76,76,77,77,77,77,79,79,79,79,80,80,80,82,80,79,79,85,87,79,79,77,77,76,76,75,75,74,74,73,92,92,93,93,93,93,95,96,98,98,98,98,100,101,103,98,98,93,93,92,108,108,108,108,109,109,109,109,111,111,111,111,112,112,112,112,114,115,117,117,117,119,117,112,112,111,111,109,109,108,108,0,0,0,0,0,1,1,1,1,3,3,3,4,4,5,5,5,7,5,4,10,10,10,10,11,11,11,13,11,10,10,3,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,22,22,22,22,23,23,23,25,23,22,22,21,21,20,20,19,19,18,18,17,17,16,16,1,1,0,0,0,0,0,0,1,2,4,4,4,4,5,6,4,9,4,0,0,0,0,0,0,1,2,4,4,4,4,5,5,5,5,7,8,10,10,10,12,10,5,5,4,4,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,16,14,13,13,12,12,11,11,10,10,9,9,9,9,9,19,9,9,9,7,7,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,0,0,1,2,4,8,8,8,8,8,8,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,18,20,20,20,20,22,24,24,24,24,25,25,25,25,26,26,26,26,27,27,27,27,29,31,32,34,34,34,34,35,35,35,35,36,36,36,36,37,37,37,37,38,38,38,38,39,39,39,39,40,40,40,40,41,41,41,41,43,45,45,45,45,46,46,46,46,47,47,47,47,48,48,48,48,50,54,54,54,54,55,55,55,55,57,59,59,60,60,60,60,61,61,61,61,63,64,66,61,61,60,60,59,69,69,69,69,70,70,70,70,71,71,71,71,73,75,71,71,70,70,69,69,55,55,54,54,48,48,47,47,46,46,45,45,41,41,40,40,39,39,38,38,37,37,36,36,35,35,34,34,27,27,26,26,25,25,24,24,20,20,16,16,15,15,14,14,13,13,12,12,11,11,8,80,80,81,80,82,82,83,82,86,0,0,0,0,0,0,3,3,4,5,7,8,10,11,13,3,18,18,18,18,20,20,21,21,21,21,23,23,24,24,24,24,25,25,25,27,25,24,24,23,30,30,30,30,32,32,32,32,33,33,33,33,35,37,33,33,32,32,30,30,21,21,20,40,40,40,40,41,41,41,43,41,40,40,18,18,0,0,0,0,0,0,3,3,3,3,4,4,4,4,5,5,5,5,7,7,8,8,8,8,9,9,9,9,11,11,12,11,13,13,14,16,13,19,9,9,8,8,7,22,5,5,4,4,3,27,27,27,27,27,28,28,28,28,29,29,29,29,30,30,30,30,31,31,31,31,32,32,32,32,34,34,35,35,35,35,36,36,36,36,38,39,40,42,42,42,42,43,43,43,43,44,44,44,44,45,45,45,45,47,49,49,49,49,50,50,50,50,51,51,51,51,52,52,52,52,54,56,56,56,56,57,57,57,57,58,58,58,58,59,59,59,59,61,63,63,64,64,64,64,65,65,65,65,66,66,66,66,67,67,67,67,69,71,67,67,66,66,65,65,64,64,63,74,59,59,58,58,57,57,56,56,52,52,51,51,50,50,49,49,45,45,44,44,43,43,42,42,36,36,35,35,34,75,75,76,76,76,76,77,77,77,77,78,78,78,78,79,79,79,79,81,83,83,83,83,84,84,84,84,85,85,85,85,86,86,86,86,88,90,90,90,90,91,91,91,91,92,92,92,92,93,93,93,93,95,97,97,98,98,98,98,99,99,99,99,100,100,100,100,101,101,101,101,103,105,101,101,100,100,99,99,98,98,97,108,93,93,92,92,91,91,90,90,86,86,85,85,84,84,83,83,79,79,78,78,77,77,76,76,75,111,111,111,111,112,112,112,112,114,116,112,112,111,111,32,32,31,31,30,30,29,29,28,28,27,121,121,122,123,125,126,128,121,133,133,134,135,137,138,140,141,143,133,148,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,5,5,5,5,6,6,6,8,6,5,5,4,4,11,11,11,11,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,21,19,18,18,17,17,16,16,15,15,14,14,13,13,24,24,24,26,24,13,13,11,11,4,4,2,2,1,1,0,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,10,14,14,14,14,16,16,17,18,16,21,21,21,21,22,22,22,24,22,21,21,14,14,7,7,6,6,5,5,4,4,3,3,3,3,3,27,3,3,3,1,1,0,0,0,0,0,0,3,3,3,3,3,3,3,3,4,4,4,4,5,6,8,8,8,8,9,9,9,9,11,12,14,16,9,9,8,8,4,4,19,19,19,19,20,20,20,20,22,23,25,27,20,20,19,19,4,4,3,32,32,32,32,33,33,33,33,34,34,34,34,35,35,35,35,37,37,38,37,39,39,40,42,39,35,35,34,34,33,33,32,32,0,0,0,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,10,10,10,10,12,12,13,14,12,17,17,17,17,18,18,18,18,19,19,19,21,19,18,18,17,17,10,10,9,9,8,8,8,8,8,8,24,24,24,24,25,25,25,25,27,29,25,25,24,24,8,8,8,8,6,6,5,5,4,4,0,0,0,0,0,0,1,2,4,5,7,8,10,11,13,13,14,14,14,14,16,18,18,18,18,19,19,19,19,21,22,24,19,19,18,18,14,14,13,27,27,27,27,28,28,28,30,28,27,27,0,0,0,0,0,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,11,11,11,11,12,12,12,12,13,13,13,15,13,12,12,11,11,10,1,19,0,0,0,0,0,1,1,1,1,3,3,4,5,6,7,8,9,3,12,12,12,12,14,14,15,15,15,17,15,14,20,12,12,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,5,3,2,2,1,1,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,6,4,3,3,2,2,1,1,0,0,0,0,0,0,0,0,1,3,0,0,0,0,0,0,0,1,3,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,3,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,1,1,1,2,2,2,4,2,1,1,0,0,0,0,0,1,3,3,3,5,3,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,3,0,0,0,3,3,4,5,7,7,7,7,8,8,8,10,8,7,7,3,15,15,15,15,16,16,16,16,18,18,19,20,18,23,23,23,23,25,25,26,27,25,30,30,30,30,32,32,33,32,35,35,35,35,37,39,39,39,39,41,43,44,46,48,49,51,51,51,51,52,52,52,52,53,53,53,53,54,54,54,54,55,55,55,55,56,56,56,56,57,57,57,57,58,58,58,58,60,60,60,60,61,61,61,61,62,62,62,62,64,64,65,65,65,67,65,64,70,70,71,71,72,72,72,74,72,71,70,78,78,78,78,80,82,82,83,83,83,83,84,84,84,84,85,85,85,85,86,86,86,86,87,87,87,87,88,88,88,88,89,89,89,91,89,88,88,87,87,86,86,85,85,84,84,83,83,82,78,78,62,62,61,61,60,60,58,58,57,57,56,56,55,55,54,54,53,53,52,52,51,51,39,39,35,35,30,30,23,23,16,16,15,15,0]
const contents={"0":[450,451,452],"1":[453,454,455,456,457,455,458,452],"2":[459,460,455,456,461,455,458,452],"3":[462,463,452],"4":[464,465,466,467,452],"5":[468,469,452],"6":[470,471,452],"7":[472,473,455,474,455,475,476,455,477,452],"8":[478,479,480,455,481,482,455,483,484,455,475,485,455,486,452],"9":[487,488,489,455,490,491,455,492,455,493,494,495,455,496,497,455,498,455,499,467,455,458,452],"10":[500,488,455,501,502,503,504,455,505,467,455,458,452],"11":[506,507,455,508,509,455,510,509,455,511,452],"12":[512,513,452],"13":[514,515,452],"14":[516,517,518,519,520,455,521,522,455,523,467,455,524,525,526,527,455,528,467,455,529,530,526,527,455,531,467,455,532,533,526,527,455,534,467,455,535,536,537,455,538,452],"15":[539,540,455,541,452],"16":[542,543,544,545,455,458,452],"17":[546,547,455,548,549,455,550,551,552,553,554,555,556,557,455,558,452],"18":[559,560,561,562,563,564,565,566,567,568,563,569,565,566,567,570,567,571,572],"19":[573,574,575,576,577,578,455,579,576,455,580,455,581,582,583,584,585,586,587,588,589,590,455,591,592,593,594,595,596,597,590,455,591,598,584,597,590,455,591,599,467,455,600,455,452],"20":[601,602,452],"21":[603,604,452],"22":[605,606,607,455,455,455,608,455,609,610,611,455,612,613,455,614,615,616,455,617,618,455,619,455,620,621,455,622,623,624,455,625,626,455,615,627,455,617,618,455,619,455,628,621,455,622,598,629,467,455,455,455,630,452],"23":[631,632,633,455,634,635,636,637,638,639,455,640,641,621,455,642,599,467,455,643,644,645,646,455,647,648,455,649,650,651,652,455,640,641,455,653,654,639,455,640,641,621,455,655,599,467,455,656,657,455,658,659,455,660,452],"24":[661,455,455,662,663,664,455,665,664,455,666,667,455,668,667,455,509,467,455,455,455,669,455,501,670,671,455,672,599,455,673,674,675,455,676,677,598,678,455,672,599,455,679,455,680,681,467,455,682,452],"25":[683,684,452],"26":[685,479,686,455,687,688,455,689,664,455,690,691,690,692,693,694,455,695,696,599,455,509,697,698,452],"27":[699,700,455,501,701,702,467,455,458,452],"28":[703,700,489,455,704,705,706,455,707,599,467,455,458,452],"29":[708,709,710,455,711,712,713,455,714,715,455,716,717,718,717,598,719,467,455,720,721,455,458,452],"30":[722,723,481,455,709,710,455,724,725,726,713,455,714,727,455,716,728,718,728,598,719,467,455,720,729,455,458,452],"31":[730,731,732,733,734,455,458,452],"32":[735,606,736,455,737,467,455,738,455,739,740,741,742,743,744,745,746,455,747,452],"33":[748,749,750,455,751,467,455,752,455,753,754,455,755,467,455,756,455,757,758,759,760,455,761,762,763,764,599,455,765,766,767,768,455,769,717,455,770,455,771,772,455,773,672,455,774,775,455,776,672,455,777,778,779,455,780,672,455,781,455,782,672,455,783,784,785,786,787,788,455,789,467,455,458,452],"34":[790,749,791,455,792,467,455,752,455,753,754,455,755,467,455,756,455,793,455,794,795,796,455,797,798,799,800,801,598,719,455,802,467,455,458,452],"35":[803,804,455,805,806,455,807,455,808,452],"36":[809,749,810,455,811,467,455,752,812,455,753,754,455,813,467,455,756,455,814,815,455,816,817,818,455,819,820,821,455,822,823,455,824,825,455,826,827,598,828,455,829,830,831,832,833,455,834,835,467,452],"37":[836,837,838,455,839,455,840,841,455,842,455,455,455,843,844,845,455,846,847,848,455,849,850,455,851,455,852,848,599,455,853,467,455,455,455,854,855,856,455,857,858,859,455,860,455,861,455,862,863,864,865,849,455,866,867,599,455,868,869,870,455,871,872,455,873,874,455,875,876,877,878,455,876,621,455,879,455,880,599,455,881,455,882,883,599,455,884,455,885,886,455,887,888,455,889,599,455,882,890,764,455,891,599,455,853,467,455,455,455,892,893,455,894,467,455,455,455,895,896,455,897,455,898,899,455,900,901,902,455,903,904,455,905,906,907,908,455,853,467,455,455,455,909,910,911,912,599,455,698,467,455,455,455,913,455,914,915,455,916,452],"38":[917,918,919,455,920,921,455,922,467,455,923,455,924,925,926,927,928,455,929,930,455,931,599,455,932,467,455,933,455,934,935,936,937,599,467,455,938,939,672,455,940,941,942,455,762,943,944,455,945,946,947,948,455,949,467,455,950,455,934,951,455,952,452],"39":[953,455,455,954,762,955,599,455,956,455,957,455,455,455,958,455,959,960,455,961,848,455,962,599,455,455,455,963,964,965,455,966,967,877,848,455,968,599,455,455,455,969,455,970,467,455,455,455,488,455,606,971,697,972,455,973,974,455,455,455,714,975,455,976,719,467,455,977,455,458,452],"40":[978,979,452],"41":[980,981,455,982,983,891,599,467,455,458,452],"42":[984,985,986,987,988,989,455,990,467,455,934,991,935,992,697,698,452],"43":[993,479,994,455,995,455,981,455,982,996,455,997,998,455,672,599,455,999,1000,455,1001,1002,1003,598,998,467,455,458,452],"44":[1004,1005,452],"45":[1006,1007,455,1008,455,456,1009,455,458,452],"46":[1010,479,1011,455,481,1012,455,1013,452],"47":[1014,606,607,455,1015,455,1016,455,1017,455,687,1018,455,1019,697,1020,452],"48":[1021,634,1022,692,1023,455,1024,455,853,697,698,452],"49":[1025,1026,455,1027,452],"50":[1028,501,1029,664,467,455,511,452],"51":[1030,981,455,982,1031,467,455,458,452],"52":[1032,1033,1034,455,1035,455,1036,701,1037,598,1038,467,455,458,452],"53":[1039,1040,1041,455,1042,834,1043,1044,467,455,1045,1046,1047,455,1048,455,475,549,455,1049,455,1050,1046,1051,455,1048,452],"54":[1052,1053,452],"55":[1054,687,688,455,1055,1056,692,693,694,455,695,1057,599,455,659,697,698,452],"56":[1058,1059,1060,455,1061,1062,1061,452],"57":[1063,1059,455,606,1064,455,835,455,549,467,455,723,455,1065,1066,1067,1068,1067,1069,1070,455,1071,452],"58":[1072,1073,1074,1075,455,1076,672,455,1077,455,1078,467,455,1079,452],"59":[1080,1081,455,1082,1083,672,455,1084,455,1085,467,455,458,452],"60":[1086,1081,1087,1088,455,1082,1084,1089,455,1090,467,455,458,452],"61":[1091,1092,455,1093,452],"62":[1094,1095,1096,455,1097,452],"63":[1098,1099,476,455,1100,1101,455,1079,452],"64":[1102,1103,455,1104,1105,455,1106,576,455,1107,467,455,1108,452],"65":[1109,1026,455,1110,452],"66":[1111,1026,455,1112,452],"67":[1113,1114,452],"68":[1115,1116,1117,1118,1119,1120,598,828,467,455,1121,452],"69":[1122,1123,1124,455,1125,452],"70":[1126,1127,452],"71":[1128,1129,452],"72":[1130,455,455,1131,1132,1133,1134,455,1135,1136,1137,455,1138,467,455,455,455,1139,1140,1141,1142,1143,455,1144,455,934,1145,935,1146,697,698,455,1147,455,1148,455,1082,1149,672,455,1150,1151,455,1152,599,467,455,985,1153,455,1154,1155,1156,1157,1158,455,1159,1160,455,1161,1162,1163,621,455,1164,599,455,1165,467,452],"73":[1166,1012,455,1167,452],"74":[1168,1169,509,455,1170,509,455,1171,455,1172,509,455,1173,452],"75":[1174,1169,509,455,1170,509,455,501,1175,1176,1177,598,664,467,455,511,452],"76":[1178,1169,509,455,1170,509,455,501,1179,1180,598,664,467,455,511,452],"77":[1181,1182,1183,455,1184,710,455,1185,1183,455,1186,1183,455,1187,1183,455,1188,452],"78":[1189,1190,452],"79":[1191,1192,1183,455,1184,1183,455,1193,1183,455,1185,1183,455,1186,1183,455,1187,1183,455,1188,452],"80":[1194,1170,1183,455,1195,1183,455,1188,452],"81":[1196,1197,455,1198,452],"82":[1199,1200,452],"83":[1201,1169,509,455,1202,452],"84":[1203,1204,509,455,1205,452],"85":[1206,687,1183,455,634,1183,455,643,1183,455,1188,452],"86":[1207,634,1183,455,643,1183,455,1188,452],"87":[1208,1209,1183,455,687,1183,455,1188,452],"88":[1210,1211,452],"89":[1212,1169,509,455,1170,509,455,501,1213,664,467,455,511,452],"90":[1214,1169,509,455,1215,509,455,1171,455,1172,509,455,455,455,1216,455,1217,509,455,455,455,704,1218,1219,598,664,467,455,511,452],"91":[1220,1055,1221,455,643,1222,455,1223,467,455,1188,452],"92":[1224,1225,452],"93":[1226,1197,455,1227,509,455,1228,509,455,511,452],"94":[1229,1192,1183,455,1195,1183,455,1188,452],"95":[1230,1231,509,455,1232,452],"96":[1233,1197,455,1227,509,455,1234,509,455,511,452],"97":[1235,1169,509,455,1170,509,455,1236,455,1237,1238,697,509,455,501,1239,664,467,455,511,452],"98":[1240,1169,509,455,1170,509,455,1241,1242,672,455,1243,455,1244,664,467,455,511,452],"99":[1245,1246,452],"100":[1247,1248,1183,455,1249,1183,455,1188,452],"101":[1250,1169,509,455,1171,455,1251,509,455,1036,1252,664,455,1253,455,1254,664,467,455,511,452],"102":[1255,1169,509,455,1256,455,1257,509,455,1258,509,455,1036,1242,672,455,1239,664,455,1259,664,455,1260,664,467,455,511,452],"103":[1261,1169,509,455,1170,509,455,1042,1262,1043,509,467,455,511,452],"104":[1263,473,455,1264,452],"105":[1265,1169,509,455,1266,455,1267,452],"106":[1268,1169,509,455,1269,509,455,1270,509,455,1271,1272,455,1273,509,455,455,1274,455,1275,452],"107":[1276,1169,509,455,1277,509,455,1278,455,1279,509,455,1280,455,1281,452],"108":[1282,1169,509,455,1283,452],"109":[1284,1169,509,455,1170,509,455,501,1285,664,467,455,511,452],"110":[1286,1169,509,455,1287,455,1288,509,455,1289,1290,455,1291,509,455,1292,509,455,511,452],"111":[1293,1294,509,455,1295,452],"112":[1296,1182,1183,455,1184,1183,455,1193,1183,455,1188,452],"113":[1297,1298,452],"114":[1299,606,1183,455,1095,1183,455,1188,452],"115":[1300,1182,1183,455,1184,1183,455,1188,452],"116":[1301,1302,452],"117":[1303,1304,509,455,1305,509,455,1306,509,455,1197,455,1307,452],"118":[1308,1169,509,455,1277,509,455,1278,455,1309,509,455,1280,455,1281,452],"119":[1310,1095,509,455,1197,455,1311,452],"120":[1312,1294,509,455,1313,452],"121":[1314,1169,509,455,1170,509,455,501,1315,664,467,455,511,452],"122":[1316,1294,509,455,1202,452],"123":[1317,1169,509,455,1170,509,455,1318,455,1319,452],"124":[1320,1197,455,1321,452],"125":[1322,1323,1183,455,1324,1183,455,1188,452],"126":[1325,1195,1183,455,1324,1183,455,1188,452],"127":[1326,1327,452],"128":[1328,1169,509,455,1170,509,455,1256,455,1172,509,455,704,1329,672,455,509,467,455,511,452],"129":[1330,1169,1331,455,1332,452],"130":[1333,1334,509,455,1335,452],"131":[1336,1337,452],"132":[1338,1169,509,455,1170,509,455,501,1339,664,467,455,511,452],"133":[1340,1204,509,455,1341,455,1342,1343,697,509,455,1042,1344,1043,509,467,455,511,452],"134":[1345,1169,509,455,455,455,1346,1347,1348,1349,599,467,455,511,452],"135":[1350,1351,509,455,1352,455,1353,452],"136":[1354,687,1183,455,634,1183,455,1188,452],"137":[1355,1169,509,455,1170,509,455,1356,509,455,1357,509,455,1358,509,455,511,452],"138":[1359,1360,1183,455,1361,1183,455,1188,452],"139":[1362,1363,509,455,1364,509,455,1365,509,455,511,452],"140":[1366,479,1367,455,1368,455,1369,452],"141":[1370,1371,452],"142":[1372,1373,452],"143":[1374,606,607,455,1375,467,455,1376,452],"144":[1377,455,455,1378,856,455,1379,1380,1381,455,764,621,455,1382,1381,455,764,621,455,455,455,1383,455,1384,599,455,1385,467,455,455,455,455,455,1386,455,982,1387,1388,455,1389,455,672,599,455,1390,455,1391,467,455,1392,1393,1394,1395,1396,1397,1398,1399,455,1400,1401,455,1402,697,1403,1404,455,931,599,467,455,455,455,1405,1406,455,1407,1408,455,1409,1410,455,549,467,455,1411,1412,455,1413,1414,455,549,467,455,455,455,1415,1416,1417,1418,455,1419,1420,455,1421,1406,455,1422,452],"145":[1423,455,455,1424,455,455,1425,455,910,1426,1427,455,764,621,455,1428,455,1389,599,455,1429,455,1430,1431,598,1432,1433,1434,455,1435,621,599,455,1436,1437,467,455,455,455,1438,856,455,1379,1426,1381,764,621,455,1439,455,1384,599,455,1440,1441,1442,455,1443,455,549,467,455,455,455,934,1444,935,1445,1431,598,1446,697,698,452],"146":[1447,1026,455,1448,452],"147":[1449,1026,455,1450,452],"148":[1451,1452,455,1042,1453,1043,1454,467,455,1455,1456,1457,697,1458,455,1459,1460,1461,1462,1463,1464,1465,1466,1467,1468,1469,1470,1471,1472,1473,1474,1475,1476,455,934,1477,935,1478,1479,1480,455,1481,621,599,455,1482,697,698,452],"149":[1483,981,455,501,1484,455,1485,455,1031,467,455,458,452],"150":[1486,1170,509,455,1487,509,455,1488,509,455,1489,455,1490,452],"151":[1491,1170,509,455,1487,509,455,1488,509,455,1492,455,1490,452],"152":[1493,723,1368,455,1494,1495,1496,1497,455,1498,452],"153":[1499,1500,452],"154":[1501,1502,452],"155":[1503,1007,455,1504,455,456,1505,455,458,452],"156":[1506,1507,455,456,1508,455,458,452],"157":[1509,540,455,1510,452],"158":[1511,1512,452],"159":[1513,452],"160":[1514,1515,1516,1517,1518,455,1519,697,698,452],"161":[1520,1521,452],"162":[1522,1523,455,1524,452],"163":[1525,1526,452],"164":[1527,1081,455,1528,1529,455,1530,467,455,1531,1532,455,1533,672,455,1085,467,455,458,452],"165":[1534,1081,455,1531,1535,672,455,1532,455,1085,467,455,1536,455,458,452],"166":[1537,1081,455,1531,1535,672,455,1532,455,1085,467,455,458,452],"167":[1538,1081,455,1536,455,1531,1535,672,455,1532,455,1085,467,455,458,452],"168":[1539,1540,452],"169":[1541,1542,452],"170":[1543,1544,1545,455,1546,1547,576,455,1548,467,455,1549,698,455,1550,452],"171":[1551,1552,455,456,1553,455,458,452],"172":[1554,1555,1556,455,1557,1558,1559,455,1560,599,455,1561,467,455,723,1562,1563,455,1564,452],"173":[1565,1555,1556,455,1557,1558,1566,455,1567,599,455,1568,467,455,723,1562,1563,455,1569,452],"174":[1570,1571,452],"175":[1572,455,1544,1545,455,1573,1548,467,455,1574,452],"176":[1575,1576,1577,455,1578,455,456,1579,455,458,452],"177":[1580,1581,1582,455,1172,1583,455,1584,455,1585,452],"178":[1586,1587,710,455,1588,452],"179":[1589,1590,452],"180":[1591,1592,452],"181":[1593,1594,452],"182":[1595,1594,452],"183":[1596,1597,455,1598,455,1599,452],"184":[1600,479,1601,455,481,1012,455,483,455,1602,1603,455,1604,455,1605,467,455,1606,452],"185":[1607,1608,455,1609,455,704,1610,467,452],"186":[1611,1612,1613,455,1360,1614,1615,1616,455,1617,1160,455,1161,1618,848,621,599,697,698,455,1619,1620,1621,1622,1623,1624,455,1625,455,458,452],"187":[1626,479,686,455,1627,452],"188":[1628,475,1629,455,1099,698,455,1630,452],"189":[1631,1632,452],"190":[1633,1634,1635,455,1636,455,669,1637,455,1638,1639,498,455,1640,1641,1642,598,1643,467,455,1644,452],"191":[1645,606,1646,455,738,1647,455,1648,1649,455,1555,1650,455,458,452],"192":[1651,1652,455,1653,455,1654,455,1042,1655,1656,1657,455,1658,467,455,1659,455,1468,455,1081,455,1660,1661,455,458,452],"193":[1662,1663,995,455,981,455,501,1664,672,455,1031,467,455,458,452],"194":[1665,475,1666,455,1667,1668,455,1669,455,1670,455,1671,452],"195":[1672,1673,452],"196":[1674,1675,455,1676,1677,467,455,458,452],"197":[1678,687,1679,455,1680,691,855,455,1379,695,1681,877,620,599,455,853,697,698,452],"198":[1682,1683,1684,455,1685,455,1683,1686,455,1687,1688,455,1689,455,1690,455,1691,1692,455,1693,455,1694,1695,1696,1697,455,1698,455,1699,452],"199":[1700,1701,1702,1703,1704,1705,1706,455,1707,467,455,1708,455,1709,1710,455,753,754,455,1707,467,455,756,455,455,455,1711,1712,1713,455,1714,1715,1716,455,1717,1718,599,455,1719,1720,1721,1722,1723,1724,829,455,835,467,455,455,455,1725,1726,1727,1713,455,1728,1729,1730,1731,455,1732,1721,1722,1733,1724,829,455,835,467,455,455,455,1734,1735,576,455,1736,455,1737,1738,599,467,455,455,455,1739,1740,455,1741,576,455,1742,1743,455,1744,1745,455,1746,1747,467,455,455,455,1748,1749,1750,1751,1752,1753,455,1754,1755,697,1756,455,1757,467,455,1758,455,1759,1760,697,1761,455,1762,1763,1764,1765,455,1766,1767,1768,598,1769,455,1770,599,455,1771,455,1772,697,698,455,1773,1774,1775,1776,1777,455,1778,455,1762,1779,455,1780,467,455,1781,1782,455,1780,467,455,1783,1780,455,1784,1780,455,1785,1780,455,1786,1787,1788,455,1789,1790,455,1791,455,1792,452],"200":[1793,1794,455,1795,455,1796,1797,455,1798,1799,455,1800,1801,455,1802,1803,455,1804,1805,455,1786,1806,1807,467,455,1808,455,1809,452],"201":[1810,1811,1812,455,455,455,1813,1814,455,1815,467,455,455,455,669,1816,455,1817,455,1796,1818,1819,467,455,1798,1818,1820,467,455,1800,1818,1821,467,455,1802,1818,1822,467,455,1804,1818,1823,467,455,1824,1818,1825,467,455,1826,1818,1827,467,455,1828,452],"202":[1829,455,455,1830,1831,1118,455,1832,467,455,455,455,1833,1834,1835,455,1836,452],"203":[1837,1838,455,1839,1654,1840,455,1841,1842,1843,467,455,1844,1845,455,1846,1843,467,455,1847,455,1848,455,1849,1850,467,455,1851,1852,455,1853,452],"204":[1854,687,1855,455,1856,455,1857,455,853,691,1858,697,698,452],"205":[1859,1860,452],"206":[1861,1862,452],"207":[1863,479,1864,455,488,1865,1866,455,1867,1868,1869,455,1870,599,455,1871,1872,1873,1874,1875,498,455,499,467,455,458,452],"208":[1876,1877,452],"209":[1878,1879,1880,455,1881,455,1882,1883,455,1884,455,455,455,1885,855,1886,455,1887,1888,455,1889,1890,455,1891,1892,877,1893,455,1891,621,599,455,853,467,455,455,455,1894,1895,1896,455,1897,455,1898,1899,455,1900,848,455,1002,599,455,853,467,455,455,455,1901,455,1902,452],"210":[1903,475,1629,455,477,452],"211":[1904,479,1905,455,481,1012,455,1602,1906,455,1907,455,1605,467,455,1908,452],"212":[1909,981,1034,455,490,1910,1911,455,1912,1031,467,455,458,452],"213":[1913,1914,455,1915,455,1916,455,1042,1614,1656,1917,455,1658,467,455,1918,455,458,452],"214":[1919,1647,455,1920,455,714,1921,1922,455,1923,719,455,1850,467,452],"215":[1924,1925,452],"216":[1926,483,455,1927,452],"217":[1928,1929,455,1930,1931,455,1932,467,455,1563,1933,1929,455,1934,455,1935,455,1936,455,1937,455,458,452],"218":[1938,634,1939,1940,598,1941,455,1942,599,692,1943,1944,599,455,1939,1945,455,1946,455,1023,856,455,693,1947,1948,1949,455,880,599,455,1950,455,1951,1952,455,1953,599,455,853,467,452],"219":[1954,1955,452],"220":[1956,455,479,1957,455,1170,1958,455,1959,452],"221":[1960,1961,452],"222":[1962,606,1963,455,1964,452],"223":[1965,1966,633,455,1967,455,1968,452],"224":[1969,455,1970,1971,455,1972,467,455,1973,452],"225":[1974,1975,1971,455,1976,467,455,1973,452],"226":[1977,1978,455,456,1979,455,458,452],"227":[1980,1116,1117,1118,1119,1120,598,828,467,455,1981,452],"228":[1982,1663,1368,455,981,455,982,1983,455,1984,467,455,458,452],"229":[1985,1986,455,1987,452],"230":[1988,1034,455,1035,455,704,831,1989,455,466,467,452],"231":[1990,1991,452],"232":[1992,475,1993,455,1379,1994,455,1995,1996,455,1997,599,455,1998,467,455,501,1999,2000,455,2001,467,452],"233":[2002,2003,455,1035,455,2004,2005,455,466,467,452],"234":[2006,2003,455,1035,455,2004,2007,2008,455,2009,2010,455,2011,2012,764,621,455,2013,599,455,2014,467,452],"235":[2015,455,455,2016,855,455,1379,2017,455,2018,2019,455,2020,617,455,2021,455,2022,621,455,2023,599,455,853,467,455,455,455,2024,855,856,455,1379,2025,2026,455,2027,2028,1381,877,2029,599,455,1993,455,882,2030,599,455,882,2031,2032,455,1891,764,2028,2033,455,1891,877,2029,599,455,853,467,455,455,455,2034,2035,2036,455,2037,2038,2039,455,2040,455,2041,455,2042,467,455,2043,455,2044,2045,2046,455,2047,2048,599,455,2049,467,455,2050,2051,455,669,2052,455,2053,455,2054,455,2044,2055,455,2056,467,455,2057,455,2058,2053,455,2059,455,2060,2061,455,2062,2063,455,2064,599,455,2065,455,681,467,455,2053,455,1828,452],"236":[2066,455,455,2067,2068,2069,455,2070,467,455,455,455,2071,452],"237":[2072,1647,455,2073,2074,2075,2076,2077,455,2078,2079,455,2080,467,455,2081,2082,455,2080,467,455,2083,2084,858,455,2085,467,455,2086,2087,858,455,2088,467,455,2089,2090,858,455,2091,467,455,2092,2093,858,455,2094,467,455,2095,2096,455,2097,452],"238":[2098,2099,455,2100,452],"239":[2101,2102,455,2103,2104,455,2105,2106,2107,455,2108,467,455,2109,2110,455,2111,452],"240":[2112,479,2113,455,481,455,2114,2115,455,2116,452],"241":[2117,2118,455,2119,452],"242":[2120,606,736,455,2121,467,455,2122,2123,455,738,455,739,740,2124,2125,2126,744,2127,455,2128,853,455,2129,2130,455,2131,452],"243":[2132,479,2133,455,2134,455,2135,2115,455,2136,452],"244":[2137,2138,452],"245":[2139,606,607,455,2140,455,2141,2142,2143,455,856,455,2144,455,2145,1439,2146,455,2147,2148,455,2027,877,2149,2150,455,2151,2027,621,599,455,2152,455,2153,2154,2142,2155,455,856,455,2156,455,2157,2158,1439,2159,455,2160,2161,455,2147,2162,455,2027,877,2163,2150,455,2151,2027,621,599,455,2152,455,2153,2164,2165,2166,2167,697,2168,452],"246":[2169,479,2170,455,481,455,2171,2172,455,1172,1583,455,2173,2174,2175,455,2176,2177,455,2178,719,455,2179,467,455,2180,2181,455,2182,455,2183,452],"247":[2184,2185,452],"248":[2186,2187,452],"249":[2188,2189,455,2190,455,458,452],"250":[2191,2192,452],"251":[2193,2192,452],"252":[2194,2195,452],"253":[2196,2197,455,2198,455,458,452],"254":[2199,2200,452],"255":[2201,981,455,1531,2202,2203,2204,455,789,467,455,458,452],"256":[2205,2206,455,2207,455,458,452],"257":[2208,2209,452],"258":[2210,2211,2212,455,2213,2214,455,2215,2216,2217,618,455,1163,621,599,467,455,1786,2218,2219,856,455,1379,2220,2021,455,2027,877,1381,599,455,1440,455,2221,455,2222,2223,467,452],"259":[2224,2225,452],"260":[2226,2227,452],"261":[2228,2229,452],"262":[2230,2231,452],"263":[2232,934,2233,2234,455,2235,455,2236,455,853,935,2237,697,698,452],"264":[2238,687,2239,2240,455,2153,467,455,1663,455,2241,1046,2242,455,490,2243,2244,455,2245,717,598,719,467,455,981,455,1036,2246,891,672,599,455,997,891,672,599,455,2247,455,2248,672,455,1031,467,455,458,452],"265":[2249,687,2250,455,2239,2251,455,2153,467,455,1663,481,455,981,455,501,2252,455,1984,467,455,458,452],"266":[2253,479,2254,455,481,455,687,2239,2255,455,2153,467,455,1663,455,981,455,501,2256,455,2257,2258,598,2259,2260,455,2258,599,467,455,458,452],"267":[2261,687,2262,2263,2264,2265,455,853,467,455,1663,455,2241,2266,455,2267,452],"268":[2268,687,688,455,2239,2269,455,2153,467,455,1663,1368,455,981,455,501,2270,455,1984,467,455,458,452],"269":[2271,687,2239,2272,455,2153,467,455,1663,455,2273,455,2274,856,455,2275,2276,1381,455,764,621,455,2277,455,1384,599,455,2278,467,455,2267,452],"270":[2279,2280,2281,2282,2283,2284,2285,2286,2287,2288,2289,2290,2291,2292,2293,2294,2295,2296,2297,2298,2299,2300,2301,2302,2303,2304,2305,2306,2307,2308,2309,2310,2311,2312,2313,2314,2315,455,458,452],"271":[2316,479,686,455,2317,452],"272":[2318,1186,2319,455,1184,2320,455,1193,2321,455,1079,452],"273":[2322,2323,2324,2325,455,458,452],"274":[2326,934,2327,935,2328,697,698,452],"275":[2329,2330,2331,2332,2333,2334,2335,2336,2337,2338,2339,455,2340,2341,455,2342,2343,455,2344,467,455,2345,452],"276":[2346,714,1850,467,452],"277":[2347,2348,455,456,2349,455,458,452],"278":[2350,981,455,2351,2352,2353,2354,455,2355,672,455,2356,455,2357,467,455,458,452],"279":[2358,2359,452],"280":[2360,455,455,2361,2362,2363,2364,2365,455,455,455,455,2366,764,455,2367,2368,2369,2370,2371,2372,2373,2374,455,2375,455,2376,2377,2378,2379,2380,877,2029,455,2381,2382,455,2383,621,599,467,455,455,455,2384,2385,455,2386,455,2387,2388,455,455,455,2389,2390,455,2391,2392,455,455,455,2393,452],"281":[2394,2395,455,2396,455,2397,455,2398,455,2399,2400,455,458,452],"282":[2401,1916,2402,455,2403,455,1042,2404,1656,2405,455,1658,467,455,2406,455,458,452],"283":[2407,2408,452],"284":[2409,2410,452],"285":[2411,2412,455,2413,452],"286":[2414,981,455,2415,2352,455,2416,891,467,455,458,452],"287":[2417,2418,2419,455,2420,455,981,455,2421,2422,891,2423,2424,620,455,2425,455,2426,598,828,467,455,458,452],"288":[2427,2428,2429,455,2430,452],"289":[2431,2418,2432,455,2420,455,981,2433,2434,455,2435,455,1036,2436,455,2437,2258,455,672,599,455,2438,2439,1891,599,467,455,458,452],"290":[2440,2441,2442,452],"291":[2443,700,455,2415,2444,455,2445,467,455,458,452],"292":[2446,2447,452],"293":[2448,723,455,2449,973,455,458,452],"294":[2450,479,2451,455,2452,455,2453,452],"295":[2454,2455,2456,455,2457,576,467,455,2458,455,2459,1409,455,2460,455,2461,452],"296":[2462,2463,455,2464,452],"297":[2465,2466,452],"298":[2467,2468,452],"299":[2469,2455,2470,2471,2472,455,2473,455,576,599,467,455,2474,2428,2475,455,2476,452],"300":[2477,2463,455,2478,452],"301":[2479,2463,455,2480,452],"302":[2481,2463,455,2482,452],"303":[2483,2474,2428,2475,455,2484,452],"304":[2485,2486,2487,455,455,455,2488,2489,1840,1839,455,2490,2491,455,2492,2493,2494,2495,598,828,467,455,455,455,2496,2497,2498,455,2031,2499,455,2500,599,455,2501,2502,455,2503,2504,467,455,455,455,2505,2506,455,2507,467,455,455,455,2508,1843,467,455,455,455,2509,1846,467,455,455,455,2510,2511,2512,455,2513,455,714,2514,719,455,2515,2516,455,1850,467,455,2517,2518,455,2519,2520,455,1853,452],"305":[2521,455,455,2522,2523,2524,455,2525,2526,455,2527,455,2528,2529,455,2530,2531,2532,599,455,2533,455,2534,467,455,455,455,2535,2536,2537,2538,2539,2540,2541,2542,2543,2544,455,2545,2546,2547,2548,2549,2550,455,455,455,2551,2552,2553,455,2554,455,2555,455,455,455,2556,455,2557,455,455,455,2558,455,455,455,2559,455,2560,2561,455,2562,2563,455,2564,2565,455,2566,2567,455,455,455,2568,455,2406,455,458,452],"306":[2569,2570,2571,455,2572,467,455,2573,455,2574,2575,2576,2577,2578,2579,2580,669,455,2581,2582,2583,2584,2585,2586,455,2587,467,455,1828,452],"307":[2588,2589,974,2590,455,2591,2592,455,2399,2590,2593,455,458,452],"308":[2594,2595,455,2596,452],"309":[2597,2598,2599,2600,467,455,1079,452],"310":[2601,2598,2602,2600,467,455,1079,452],"311":[2603,2604,509,455,2605,452],"312":[2606,2607,1183,455,2608,1183,455,1188,452],"313":[2609,1169,509,455,2610,2611,2612,455,2613,509,455,2614,452],"314":[2615,1169,509,455,2610,2611,2612,455,2613,509,455,2616,452],"315":[2617,1169,509,455,2610,2611,2612,455,2618,452],"316":[2619,2604,509,455,2620,452],"317":[2621,2455,2622,455,2523,2623,2624,664,599,455,2625,455,2626,2627,455,2628,2629,2630,2631,455,1349,621,599,455,2632,455,1183,2633,2523,2634,2624,664,599,455,1183,697,509,452],"318":[2635,1169,509,455,2610,2611,2636,455,2613,509,455,2637,452],"319":[2638,1916,2639,455,1042,1614,1656,2640,455,1658,467,455,2641,455,458,452],"320":[2642,2643,452],"321":[2644,981,455,1786,2645,2646,2647,455,2648,2649,455,2650,2651,455,458,452],"322":[2652,2653,452],"323":[2654,2655,2656,2657,2658,2659,455,2660,2661,455,2662,576,455,2663,455,2664,455,2665,455,2666,2667,467,455,2668,2506,455,2669,467,455,2670,2506,2671,455,2672,467,455,2673,2674,2675,598,828,455,2676,2677,467,455,2678,2679,2680,455,2681,455,2682,2683,467,455,2684,455,2685,2686,2687,455,2688,2689,455,2690,2691,2692,455,2693,1850,467,455,2694,2695,455,2696,2697,455,2698,455,2699,455,2700,452],"324":[2701,2702,2703,2704,2705,455,2706,455,458,452],"325":[2707,2708,2709,2710,2711,455,2712,455,2713,2714,2715,455,2716,599,455,2717,455,2718,467,455,669,455,2719,2720,455,2713,2721,455,2722,455,2723,452],"326":[2724,606,2725,455,2726,467,455,723,455,2727,455,2728,455,458,455,455,455,455,455,455,455,455,455,455,455,455,455,455,455,455,455,455,455,455,455,452],"327":[2729,2730,452],"328":[2731,2732,549,455,2733,2734,455,2735,2736,2737,2738,2737,467,455,2739,2740,455,2741,467,455,2742,2743,2744,455,2745,452],"329":[2746,455,455,2747,2655,2656,2748,2749,2750,455,2751,2752,2753,455,2754,455,2755,576,455,2756,830,2757,455,835,455,2758,467,455,455,455,2668,2506,455,2759,467,455,455,455,2670,2506,455,2760,467,455,455,455,2673,2674,2675,598,828,455,2676,2677,467,455,455,455,2761,455,2682,2683,467,455,455,455,2684,455,2685,2686,2687,455,2688,2689,455,2690,2691,2692,455,2693,1850,467,455,2694,2762,455,2763,2764,455,2698,455,2765,455,2766,452],"330":[2767,981,2768,2242,455,2769,455,704,2770,767,455,2771,2772,2773,2774,2775,455,789,467,455,458,452],"331":[2776,2777,2778,2779,2780,2781,2696,2782,2697,2783,455,2784,455,2700,452],"332":[2785,2777,2778,2779,2786,455,2787,452],"333":[2788,2789,2679,2790,2791,455,2792,455,458,452],"334":[2793,2794,2795,455,2796,455,853,467,455,2797,455,2798,452],"335":[2799,2800,452],"336":[2801,2802,452],"337":[2803,2804,455,2805,452],"338":[2806,2807,452],"339":[2808,606,2809,455,723,455,2810,455,2811,455,2812,2813,2814,455,2459,1409,455,2815,2816,455,714,2817,2818,2819,2820,455,2821,2822,455,2823,455,2824,622,467,452],"340":[2825,2826,2827,455,2828,2829,455,455,455,2830,719,455,455,455,2831,2832,455,2833,455,2834,2835,455,2836,877,2837,2838,2839,455,2840,877,2841,598,828,455,455,455,2842,467,452],"341":[2843,2844,455,2845,452],"342":[2846,455,455,2847,2848,2849,2850,455,2851,455,2852,467,455,455,455,2853,455,2854,455,2855,452],"343":[2856,2857,2858,455,458,452],"344":[2859,2860,455,2861,452],"345":[2862,1081,455,2863,2864,2865,2866,2867,2868,455,458,452],"346":[2869,1081,2870,455,2871,2872,2873,2874,2875,2876,2877,2878,2879,2880,455,2881,2882,2883,2884,2885,2886,2887,2888,455,2889,467,455,458,452],"347":[2890,489,2891,2892,2893,2659,2894,2895,455,490,2896,719,455,455,455,2897,455,2898,2899,2900,455,672,599,455,455,455,670,2901,455,2902,2903,455,672,599,455,455,455,2904,2905,455,2906,2907,455,670,2907,455,455,455,2908,2901,455,2902,2909,2910,455,672,599,455,455,455,2911,2912,455,2913,2914,2915,455,2916,455,2917,2918,455,848,621,599,455,455,455,2919,2901,455,2902,2909,2920,2921,455,672,599,455,2922,2923,467,455,2924,2925,2926,455,2927,2928,455,458,452],"348":[2929,2930,2931,455,2932,2933,455,2934,2935,455,455,455,2936,1117,2937,455,2938,2939,455,2940,2941,2942,455,2943,598,828,467,455,455,455,2944,1117,2937,455,2938,2945,455,2940,2941,2942,455,2946,598,828,467,455,455,455,2947,2948,455,2949,455,2950,467,455,455,455,2891,2951,2952,2953,455,2954,452],"349":[2955,455,455,2956,2957,2958,455,2959,452],"350":[2960,2961,452],"351":[2962,2551,2963,455,2964,2965,2966,455,2967,455,2968,2969,2970,2971,2972,2973,697,698,455,2974,2975,2976,455,458,452],"352":[2977,2458,455,2459,1409,455,2815,2816,2978,2979,455,2980,2981,455,2982,2983,455,2984,455,714,2985,2986,2987,455,2834,849,672,599,455,2983,467,452],"353":[2988,455,455,2989,455,2990,855,455,2991,2992,455,2993,2994,599,455,853,467,455,455,455,1081,2995,2996,455,2997,2998,2999,3000,3001,3002,3003,3004,455,3005,455,3006,455,3007,455,3008,455,3009,455,3010,455,3011,467,455,458,452],"354":[3012,452],"355":[3013,3014,455,3015,452],"356":[3016,3017,452],"357":[3018,2797,455,3019,455,455,455,455,452],"358":[3020,3021,455,455,455,1687,1688,1690,455,1691,1692,455,3022,455,3023,1696,1697,455,3024,455,455,455,455,455,3025,452],"359":[3026,3027,3028,455,455,455,3029,856,3030,455,3031,455,681,455,3032,455,681,455,3033,455,681,3034,3035,3036,1818,3037,455,3038,467,455,455,455,3039,856,3040,3041,3042,3030,455,455,455,3031,455,681,455,3032,455,681,455,3033,455,681,3034,455,3043,3044,455,681,1818,455,455,455,3045,3046,3036,1818,3037,1818,455,455,455,3047,3048,3049,3050,3051,3052,455,3053,455,3054,455,1384,3055,455,3056,3057,455,1384,455,3058,3059,455,1384,455,3060,3061,599,455,3062,455,3038,467,455,455,455,3063,3064,856,455,3065,3066,3067,3068,3069,455,3070,455,681,455,3071,455,681,455,3072,455,681,455,3073,3074,3075,3076,455,2153,467,455,455,455,3077,3078,455,3079,455,3080,455,3081,455,853,467,455,455,455,3082,3083,3084,455,3085,3086,455,3087,455,3088,599,455,3089,467,455,455,455,3090,1617,3091,455,3092,3093,599,467,455,455,455,3094,3095,455,3096,3097,697,3098,455,3099,3100,455,3101,3102,455,3103,455,455,455,3104,455,3105,3106,455,3107,3108,455,3109,3110,452],"360":[3111,3112,2399,2400,3113,455,458,452],"361":[3114,3115,3116,3117,697,3116,452],"362":[3118,3119,452],"363":[3120,1634,3121,455,1636,455,455,455,3122,856,455,3123,3124,455,1384,599,455,1385,467,455,455,455,3125,455,3126,3127,455,1640,3128,3129,455,3130,3131,598,3132,3133,3134,3135,455,3130,3131,3136,3137,599,455,3138,455,3139,467,455,455,455,3140,663,664,455,1640,3141,455,3142,3143,3144,3145,3146,455,1379,3147,3148,455,3149,3150,455,3151,3152,455,3153,3154,455,3155,3156,599,455,3157,664,455,3158,664,455,3159,664,455,3160,664,455,3161,664,455,1183,467,455,455,455,3162,663,664,455,1445,664,455,1379,3163,1349,599,455,1183,467,455,455,455,714,3164,455,3165,622,599,467,452],"364":[3166,3167,452],"365":[3168,3169,3170,455,3171,3172,455,3173,455,3174,3175,3176,3177,697,698,452],"366":[3178,3179,3180,455,3181,3182,455,3183,3184,455,835,467,455,458,452],"367":[3185,3186,455,3187,3188,452],"368":[3189,3190,3191,455,3192,452],"369":[3193,3194,455,3195,3196,455,3197,452],"370":[3198,3199,3200,3201,455,2459,3202,455,3203,3204,452],"371":[3205,3199,3200,3201,455,2459,3202,455,3206,3204,452],"372":[3207,3208,455,3209,452],"373":[3210,3211,452],"374":[3212,1169,509,455,3213,455,3214,509,455,3215,452],"375":[3216,1169,509,455,3213,455,3214,509,455,3217,452],"376":[3218,2827,455,2828,2829,455,455,455,2830,719,455,455,455,2834,3219,2838,3220,598,828,455,455,455,2842,467,452],"377":[3221,3222,452],"378":[3223,3224,3225,3226,455,3227,3228,455,3229,3230,598,3231,467,455,3232,3229,3233,598,3234,467,455,458,452],"379":[3235,3236,3237,455,3238,455,455,455,3239,3240,3241,3242,455,3243,3244,455,3245,3246,455,3247,455,3248,3249,455,3250,467,455,455,455,3251,455,3252,3253,3254,455,2993,3255,599,455,698,467,455,455,455,3256,855,455,3253,3254,455,3257,2994,599,455,853,467,455,455,455,1081,3258,2996,455,3259,3260,455,2997,2998,2999,3000,3261,3262,3001,3002,3263,3264,3265,3266,3267,3268,455,3005,455,3269,455,3270,3271,3272,455,3273,455,3274,455,3275,455,3276,455,3277,599,455,3011,467,455,458,452],"380":[3278,1399,3279,455,1687,1688,3280,1690,455,3281,455,3282,1695,1696,1697,455,3283,452],"381":[3284,3285,3286,455,3287,455,3288,455,3289,3290,3291,455,3292,455,3293,455,2398,455,3294,455,3295,455,458,452],"382":[3296,3297,455,3298,455,3299,455,3300,3301,3302,455,3303,452],"383":[3304,3305,455,3306,455,3307,3308,455,3309,455,3310,467,455,458,452],"384":[3311,3305,3297,455,3312,455,3303,452],"385":[3313,3314,3297,455,3315,455,3303,452],"386":[3316,455,981,3317,455,3318,3319,3320,455,3321,3322,455,853,467,455,3323,455,3324,455,3325,455,3326,3327,3328,455,3329,3330,455,458,452],"387":[3331,3297,455,3332,3333,3334,455,3303,452],"388":[3335,3305,3297,455,3336,455,3303,452],"389":[3337,3305,455,981,3338,3328,3339,455,3329,3330,455,458,452],"390":[3340,3341,452],"391":[3342,3343,452],"392":[3344,3345,452],"393":[3346,981,3347,3333,3348,3333,3349,3328,3339,455,3329,3330,455,458,452],"394":[3350,3351,452],"395":[3352,3353,452],"396":[3354,3355,452],"397":[3356,3323,3297,455,3357,455,3358,455,3359,455,1079,452],"398":[3360,3323,3297,455,3361,455,3362,455,3363,455,3303,452],"399":[3364,3365,3297,455,3366,452],"400":[3367,3297,455,3368,455,3318,3369,697,3370,455,3371,467,455,3303,452],"401":[3372,3314,3297,455,3315,3373,455,3303,452],"402":[3374,3297,455,3347,3375,455,3303,452],"403":[3376,3305,455,981,3377,3328,3317,455,3329,3330,455,458,452],"404":[3378,3365,3297,455,3379,452],"405":[3380,981,3347,3333,3381,3328,3339,455,3329,3330,455,458,452],"406":[3382,3297,455,3318,3383,455,3384,467,455,3347,3385,455,3303,452],"407":[3386,981,455,3387,3388,455,3389,455,789,467,455,3390,3391,455,3392,3393,455,3394,3395,455,458,452],"408":[3396,981,455,3387,3388,455,3389,455,789,467,455,3397,3398,3399,455,3400,3401,455,3402,3403,467,455,458,452],"409":[3404,3297,455,3324,455,3325,455,3405,3406,3407,3408,455,3303,452],"410":[3409,981,3347,3410,3333,3349,3328,3339,455,3329,3330,455,458,452],"411":[3411,981,3347,3333,3412,3328,3339,455,3329,3330,455,458,452],"412":[3413,455,455,3414,3415,1118,455,3416,3417,455,3418,455,3419,3420,455,3421,3422,455,3423,599,455,698,467,455,455,455,981,3424,455,3425,455,3426,3427,455,3428,3429,455,3430,672,455,3431,3432,455,3433,467,455,3434,3435,3436,3408,3328,3317,455,3329,3330,455,458,452],"413":[3437,981,455,3438,3439,455,3440,467,455,458,452],"414":[3441,3442,3443,455,3444,549,455,3445,3446,3447,598,672,455,3448,455,3449,576,467,455,3450,550,3451,455,558,452],"415":[3452,3453,3454,455,3455,455,3456,455,3457,455,3458,455,3459,3460,1183,467,455,3461,455,1188,452],"416":[3462,455,455,3463,855,455,3464,3465,3466,455,3467,3468,455,764,621,455,3469,455,3470,599,455,853,467,455,455,455,3471,3472,3473,3474,455,3475,455,3476,3477,3478,455,3093,621,599,455,3479,3480,3481,3482,3483,3484,3485,455,3486,455,3487,3488,455,3489,3490,3491,455,764,621,455,3492,455,3493,455,3418,455,3494,3495,455,3496,3491,455,764,621,455,3497,455,3498,3499,3500,455,3501,3502,3503,3504,3505,455,3506,599,455,3507,455,3508,455,853,467,455,455,455,3509,3510,3511,455,3512,3513,3514,3515,455,3516,3517,455,617,618,3518,3519,455,764,621,455,3520,599,455,3521,467,455,455,455,3522,3523,667,455,3524,667,455,509,467,455,455,455,3525,452],"417":[3526,3527,3528,3529,455,3530,455,3531,3532,455,1042,3533,3534,1656,3535,455,1658,467,455,3536,452],"418":[3537,3538,455,3539,452],"419":[3540,3541,455,455,455,3542,855,3543,3544,881,3545,455,3546,3547,455,3548,3549,3550,2028,3551,455,3552,877,2029,599,455,3553,3554,3555,3556,3557,3558,455,789,455,3559,3560,455,3561,3562,455,621,455,3563,599,455,3564,3565,3566,455,3567,599,455,853,467,455,455,455,3568,831,3569,3570,455,834,455,3571,3572,830,455,835,467,452],"420":[3573,455,455,3463,3574,3575,3576,455,3577,3578,455,3579,3580,3581,877,848,599,455,3483,455,3582,3583,455,3584,599,455,3585,3586,3587,455,3588,467,455,455,455,981,3589,455,3590,3591,455,789,467,455,458,452],"421":[3592,455,455,3463,855,455,3464,3593,3466,455,3467,3468,455,764,621,455,3594,455,3595,599,455,853,467,455,455,455,3596,855,3543,455,3597,3598,3483,3599,3600,455,3601,455,3602,3603,3604,3599,3605,455,3606,455,3597,3607,3483,3599,3608,455,3609,455,3597,3610,3483,3599,3611,455,3612,455,853,467,455,455,455,3525,452],"422":[3613,455,455,3614,455,3615,3616,455,3617,622,455,3618,455,3619,455,853,467,455,455,455,669,455,3620,3621,467,455,919,3622,3623,455,3624,3625,3555,455,3626,3627,455,3628,455,3629,3630,467,455,3631,455,938,3632,3633,3634,3635,455,3636,3637,455,3638,599,455,3639,467,455,3640,3641,455,3642,455,3643,3644,3645,455,3646,455,3647,3648,455,3649,455,3650,3651,455,3652,455,3653,3654,455,3655,455,3656,3657,455,3658,455,3659,3660,3661,455,3662,455,3663,455,1828,452],"423":[3664,455,455,3665,3666,3667,3668,3669,3670,3671,455,3672,3673,455,3674,3675,598,3676,455,3677,3673,3678,455,3679,455,3680,599,455,3681,3682,3683,3684,3685,455,3686,455,3687,455,3688,455,3689,455,3690,455,3691,467,455,455,455,3692,3693,576,455,3694,3695,455,3696,467,455,3697,855,455,1379,3698,455,2426,599,455,853,467,455,455,455,3699,855,3700,3701,3702,455,3703,3704,455,2258,599,455,3705,455,853,467,455,455,455,3706,3707,455,3708,622,455,3709,455,3708,622,455,698,467,455,455,455,3710,3711,455,3712,3713,455,3714,672,455,3715,455,3716,467,452],"424":[3717,3718,455,3719,2834,3720,455,3721,599,455,3722,3723,455,3724,467,455,3725,3726,3727,923,3728,3729,3730,3731,455,3732,452],"425":[3733,3734,1183,455,3735,3736,664,467,455,511,452],"426":[3737,3738,509,455,3739,3740,455,3741,1183,455,3742,455,3743,452],"427":[3744,981,3745,3746,3747,3748,3749,2996,455,2997,3750,3751,3752,3753,3754,455,789,467,455,458,452],"428":[3755,3453,3756,455,3455,455,455,455,3757,455,455,3758,958,3759,3760,3761,3762,455,3763,455,1704,455,3764,455,3765,3766,1724,829,455,835,455,3767,576,455,3768,3769,3770,3771,3772,3773,3774,3572,455,835,455,3775,3772,3776,3572,455,835,455,455,455,3777,3778,455,3779,455,963,3780,965,455,3781,848,455,3782,599,455,3783,3784,3785,455,3786,455,549,467,455,455,455,1042,3787,1656,509,467,455,511,452],"429":[3788,455,455,3789,663,664,455,3790,667,455,3791,667,455,509,467,455,455,455,3792,455,3793,3794,455,3795,3796,3797,455,622,599,455,3798,455,3799,3800,455,3801,455,853,467,455,3802,3803,455,458,452],"430":[3804,455,455,3463,855,3805,455,3577,3806,3807,455,2628,3808,3809,3810,455,3811,621,455,2426,599,455,853,467,455,455,455,3812,855,3813,3543,3554,3814,455,3815,3816,3817,455,3818,3819,3820,455,3821,3822,3503,3823,455,3824,455,3825,3826,3503,3827,455,3828,455,3829,3830,3503,3831,455,3832,455,3833,3834,3835,3836,3837,455,3838,455,3839,621,455,622,3840,3821,3841,3503,3823,455,3824,455,3825,3826,3503,3827,455,3828,455,3829,3842,3843,3831,455,3832,455,3833,3834,3835,3836,3837,455,3838,455,3839,621,455,622,599,455,3604,3485,455,3321,455,853,467,455,455,455,3844,3845,667,455,3846,667,455,509,467,455,455,455,3847,3848,667,455,3849,667,455,3850,667,455,509,467,455,455,455,3525,452],"431":[3851,3852,923,455,3853,3854,3855,455,3856,467,455,933,455,3620,3857,3858,3859,946,947,948,455,949,467,455,3860,455,3861,452],"432":[3862,981,455,3445,3863,3864,3865,3866,455,575,672,455,455,455,3867,455,3868,3869,764,599,455,3483,3870,455,3321,467,455,458,452],"433":[3871,455,455,3872,3873,3874,764,455,3875,3876,455,3877,3093,455,3878,455,3879,599,455,3880,3881,455,3882,622,455,3883,455,3884,467,455,455,455,3740,3885,3886,3887,455,1042,3888,1656,3889,455,1658,467,452],"434":[3890,3891,3892,455,3893,3894,981,455,3895,2582,3896,455,3897,3898,672,599,455,2584,3899,2586,455,3900,467,455,977,973,455,3901,455,458,452],"435":[3902,1185,710,455,1186,710,455,1182,710,455,1184,710,455,1193,3903,455,3904,455,3905,3906,455,3907,3908,455,3909,467,455,3910,3911,455,558,452],"436":[3912,1487,3913,3914,3915,3916,3917,3918,3919,3920,598,3921,3922,3923,455,3924,599,467,455,3925,452],"437":[3926,1986,455,2211,3927,3928,3929,3930,598,3931,467,455,3932,455,3933,3934,455,3935,467,455,3936,452],"438":[3937,3938,3939,3940,455,3941,452],"439":[3942,3938,3943,3944,3945,455,3946,452],"440":[3947,3948,455,3949,452],"441":[3950,3951,455,3952,452],"442":[3953,3954,452],"443":[3955,3951,455,3956,452],"444":[3957,3958,455,3959,452],"445":[3960,3961,3962,455,3963,452],"446":[3964,3965,455,3966,455,3967,452],"447":[3968,3969,455,3970,452],"448":[3971,3972,455,1973,452],"449":[3973,455,455,3974,663,664,455,3975,3976,455,3977,467,455,455,455,3169,3978,455,3318,3979,549,467,455,3980,455,3981,3979,549,467,455,3982,455,3983,3984,455,3285,455,3288,455,3985,455,3986,455,3987,549,455,3295,455,3988,549,455,3989,3990,3991,3992,3993,3456,3994,3995,455,3996,2709,2711,455,3997,3998,455,3999,467,455,2713,4000,4001,455,4002,599,467,455,4003,455,4004,455,985,4005,4006,4007,4008,4009,4010,4011,455,4012,467,452]}
const fns={abs,add,and,angle,append,arr,asc,at,back,base36_decode,base36_encode,between,brace,bracket,byte_size,capture,char_escape,check_arg,check_arity,check,chr,clear,clone,cmp,collate,concat,contain,count,crc,cut_l,cut_r,date_decode,date_str,dbg_backtrace,dbg_callstack,dbg_here,dbg_origin_xs,dbg_origin,dbg_source_map,dbg_source,dec,dedup,deinit_common,delimit,different,div,drop,dump,dup,eq,every,explode,extract,fallback_error,filter,find,flower_box,flower,fn_args,fn_match,fn_select,front,get_type,get,gn_run,gt,gte,has,head,iif,implode,inc,init_common,insert,is_access,is_alnum,is_alpha,is_arg,is_arr,is_atom,is_blank,is_bool,is_browser,is_char,is_comment,is_composite,is_container,is_cool,is_def,is_digit,is_domain,is_empty,is_false,is_fn,is_fragment,is_full,is_gn,is_identifier,is_indented,is_int,is_ip,is_ip4,is_ip6,is_json,is_last,is_lisp,is_lit_char,is_lit,is_ln,is_lower,is_mail,is_many,is_name,is_node,is_none,is_noun,is_null,is_num,is_numeric,is_obj,is_pair,is_punct,is_single,is_space,is_str,is_token,is_trivia,is_true,is_tuple,is_txt,is_uint,is_undef,is_upper,is_url,is_user,is_ushort,is_vec,is_word,is_xn,is_rgb,join,json_decode,json_dump,json_encode,log_append,log,lt,lte,main,map,match_l,match_r,match,max,min,mod,mul,mute,neq,nop,not,obj_keys,obj_length,obj_merge,obj_order,obj_push,obj_remove,obj_unshift,obj_vals,obj,on,or,pad_l,pad_r,paren,partial,path_concat,path_file,path_fix,path_join,path_split,path_strip,path_unfix,path_up,pop,prepend,profile,push,put,quote,random_str,random,record,reject,remove,repeat,replace_rec,replace,report_html,report_init,report_log,report_render,report_title,resolve,reverse,rgb_init,round,salt,same,scan,set,shift,shuffle,silent,sleep,slice_l,slice_r,slice,sort,space,split,squote,stop,str_indent,strip_l,strip_r,sub,tail,tbl_column,tbl_columns,tbl_index,tbl_init,tbl_pad_l,tbl_remove_column,tbl_rename_column,tbl_render,tbl_sort,time_delay,time_get,time_hn,time_interval,time_now,time_str,time_timeout,to_base36,to_dump,to_fixed,to_hex,to_i,to_int,to_json,to_lit,to_lower,to_num,to_str,to_tbl,to_uint,to_upper,trace,trim_l,trim_r,trim,trunc,tty_width,txt_compact,txt_cut,txt_indent,txt_inline,txt_prepend,txt_unindent,unaccent,unshift,unwrap,url_beautify,url_get,url_parse,wait,xor,app_list,beep,deinit_node,digest,dir_call,dir_change,dir_current,dir_empty,dir_find,dir_load,dir_make,dir_read,dir_reset,dir_size,file_append,file_load,file_read,file_save,file_size,file_write,fs_change_mode,fs_copy,fs_created,fs_mode,fs_modified,fs_remove,http_get,init_node,inspect,ip_host,ip_list,ip_v4,ip_v6,is_batch,is_color,is_dir,is_file,is_fs,is_interactive,is_readable,is_symbolic_link,no_umask,node_argv,node_context,open,os_capture,os_detach,os_execute,os_home,os_host,os_log,os_prompt,os_ps,os_run,os_shell,os_system,os_user,path_base,path_dir,path_ext,path_real,path_tmp,path_writable,report_mail,sigint,to_base64,ansi_encode,ansi_get_attrs,ansi_get_colors,ansi_head,ansi_init,ansi_rgb,ansi_strip,app_token,archive_find,group_list,init_shell,is_local,is_remote,is_root,mail_debug,mail,mime_type,mnt_clean,mnt_unmount,password,ssh_execute,ssh_pass,ssh_system,sudo_dir_make,sudo_file_append,sudo_file_read,sudo_file_save,sudo_file_write,sudo_fs_change_mode,sudo_fs_remove,sudo_is_dir,sudo_is_file,sudo_path_writable,sudo,user_created,user_list,app_home,app_make,ast_assign,ast_begin,ast_brk,ast_call,ast_catch,ast_check,ast_cont,ast_else,ast_elseif,ast_fn,ast_forin,ast_fornum,ast_forof,ast_gn,ast_if,ast_include,ast_inline,ast_let,ast_ret,ast_run,ast_throw,ast_try,ast_var,ast_while,ast_yield,call_ast_block_top,call_ast_block,call_ast_declare,call_ast_for,call_ast_if,call_ast_xn,cpl_block,cpl_check_fn,cpl_check_syntax,cpl_check,cpl_compile,cpl_deinit,cpl_dump,cpl_fold,cpl_for,cpl_generate,cpl_include,cpl_init,cpl_is_call,cpl_is_leaf,cpl_load,cpl_log_error,cpl_scan,cpl_scope,cpl_source_map,cpl_tokenize,cpl_translate,cpl_uncomment,call_expr_arg,call_expr_right,call_expr_rvalue,expr_arr,expr_call,expr_iif,expr_in,expr_inline,expr_instanceof,expr_new,expr_not,expr_obj,expr_run,expr_value,init}
main()