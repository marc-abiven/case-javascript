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
 return x.codePointAt(0)
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
            check(is_uint,n)
            check(lte,n,ushort_max)
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
function between(n,low,high)
{
 check_arg(is_num,n,"n","num")
 check_arg(is_num,low,"low","num")
 check_arg(is_num,high,"high","num")
 check_arity("same",arguments.length,3)
 check(gte,high,low)
 if(lt(n,low))
  return false
 if(gt(n,high))
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
 const _=asc(x)
 {
  const r=_
  {
   const _=to_hex(r)
   {
    const r=_
    {
     const _=pad_l(r,"0",4)
     {
      const r=_
      {
       const _=concat("\\u",r)
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
    const name=_
    {
     const _=to_lit(type)
     {
      const type=_
      {
       const _=get_type(arg)
       {
        const given=_
        {
         const _=to_lit(given)
         {
          const given=_
          {
           const _=space(given,"given")
           {
            const given=_
            {
             const _=paren(given)
             {
              const given=_
              {
               const _=space("Expecting argument",name,"to be of type",type,given)
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
            const name=_
            {
             const _=to_lit(name)
             {
              const name=_
              {
               const _=space("Check failed calling",name)
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
        const name=_
        {
         const _=space("Check failed calling",name)
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
 check_arg(is_uint32,x,"x","uint32")
 check_arity("same",arguments.length,1)
 return String.fromCodePoint(x)
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
function cmp_i18n(x,y)
{
 check_arg(is_def,x,"x","def")
 check_arg(is_def,y,"y","def")
 check_arity("same",arguments.length,2)
 if(is_str(x))
 {
  if(is_str(y))
  {
   const _=unaccent(x)
   {
    const x=_
    {
     const _=to_lower(x)
     {
      const x=_
      {
       const _=unaccent(y)
       {
        const y=_
        {
         const _=to_lower(y)
         {
          const y=_
          return cmp(x,y)
         }
        }
       }
      }
     }
    }
   }
  }
 }
 return cmp(x,y)
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
         }
        }
       }
      }
      return join(a," ")
     }
    }
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
function copy(x)
{
 check_arg(is_def,x,"x","def")
 check_arity("same",arguments.length,1)
 return structuredClone(x)
}
function count(x,y)
{
 check_arg(is_vec,x,"x","vec")
 check_arg(is_def,y,"y","def")
 check_arity("same",arguments.length,2)
 if(is_str(x))
 {
  check(is_str,y)
  const _=split(x,y)
  {
   const a=_
   return dec(a.length)
  }
 }
 else if(is_arr(x))
 {
  const _=0
  {
   let r=_
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
            if(same(v,y))
            {
             r=inc(r)
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
 else
  stop()
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
   const _=head(frames,8)
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
                           push(a2,v.code)
                          }
                         }
                        }
                       }
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
                                          if(is_empty(v.code))
                                           continue
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
                              }
                             }
                            }
                           }
                          }
                         }
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
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
             const _=at(pool,v)
             {
              const path=_
              push(paths,path)
             }
            }
           }
          }
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
                             const _=at(pool,v)
                             {
                              const s=_
                              push(lines,s)
                             }
                            }
                           }
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
 const _=is_fn(tasks)?tasks():tasks
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
         const _=is_fn(v.name)?v.name():v.name
         {
          const name=_
          {
           const _={name}
           {
            const o=_
            {
             const _=obj_option(o)
             {
              const s=_
              {
               log("abort",s)
               v.iterator.return()
              }
             }
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
     clear(tasks)
     const _=is_fn(time_now)?time_now():time_now
     {
      const profile=_
      {
       const _=time_delay(profile)
       {
        const profile=_
        {
         const _={profile}
         {
          const o=_
          {
           const _=obj_option(o)
           {
            const s=_
            {
             log2(app,s)
             if(is_fn(is_node)?is_node():is_node)
              deinit_node()
             else if(is_fn(is_browser)?is_browser():is_browser)
              deinit_browser()
             else
              stop()
             zombie=true
            }
           }
          }
         }
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
                 if(y(fragment))
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
function dequote(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 const _=strip_l(x,"\"")
 {
  const s=_
  return strip_r(s,"\"")
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
         if(!(y(v)))
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
             if(same(v,y))
             {
              r=true
             }
             else
              push(x,v)
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
 const _=repeat("*",tty_column)
 {
  const s=_
  {
   log(s)
   flower(x)
   log(s)
  }
 }
}
function flower(x)
{
 if(is_undef(x))
 {
  const _=repeat("*",tty_column)
  {
   const s=_
   {
    log(s)
    return
   }
  }
 }
 check(is_str,x)
 const _=repeat("*",tty_column)
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
             const _=slice_l(s2,tty_column)
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
 function on_tick()
 {
  check_arity("same",arguments.length,0)
  const _=shift(tasks)
  {
   const task=_
   {
    const _=is_fn(task.iterator.next)?task.iterator.next():task.iterator.next
    {
     const result=_
     {
      if(!(is_fn(result.done)?result.done():result.done))
       push(tasks,task)
      if(is_empty(tasks))
      {
       deinit_common()
       return
      }
      time_timeout(on_tick)
     }
    }
   }
  }
 }
 function log_compile()
 {
  check_arity("same",arguments.length,0)
  const _=time_hn(compile)
  {
   const compile=_
   {
    const _=0
    {
     let cs=_
     {
      const _=is_fn(dbg_source_map)?dbg_source_map():dbg_source_map
      {
       const map=_
       {
        const _=is_fn(map.files)?map.files():map.files
        {
         const map=_
         {
          const _=is_fn(map)?map():map
          {
           for(const k in _)
           {
            const _=get(map,k)
            {
             const v=_
             {
              const _=is_fn(v)?v():v
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
                      if(is_empty(v))
                       continue
                      cs=inc(cs)
                     }
                    }
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
            const _=split(source)
            {
             const js=_
             {
              const _=is_fn(js.length)?js.length():js.length
              {
               const js=_
               {
                const _={compile,cs,js}
                {
                 const o=_
                 {
                  const _=obj_option(o)
                  {
                   const s=_
                   log2(app,s)
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
 global.tasks=[]
 global.ushort_max=mul(256,256)
 global.uint32_max=mul(256,256,256,256)
 global.unit="1.3vw"
 global.padding="0.3vw"
 global.border="0.1vw"
 global.font_family="monospace"
 global.font_size=is_fn(unit)?unit():unit
 global.log_secret=null
 global.log_volatile=null
 global.mabynogy="mabynogy"
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
       log_compile()
       if(is_fn(init))
       {
        init(...args)
        if(is_empty(tasks))
        {
         deinit_common()
         return
        }
       }
       else if(is_gn(init))
        task_run(init,...args)
       on_tick()
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
       }
      }
     }
    }
    return true
   }
  }
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
         if(is_lower(v))
         {
         }
         else if(is_upper(v))
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
 if(is_lisp(x))
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
function is_boolish(x)
{
 if(same(x,"true"))
  return true
 if(same(x,"false"))
  return true
 return false
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
         if(!(contain(digit,v)))
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
      return true
     }
    }
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
       }
      }
     }
    }
    return true
   }
  }
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
           if(is_empty(v))
            continue
           if(!(is_alnum(v)))
            return false
           if(contain(v,"_"))
            return false
           if(gt(v.length,4))
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
function is_key(x)
{
 if(is_null(x))
  return true
 if(is_bool(x))
  return true
 if(is_num(x))
  return true
 if(is_alnum(x))
  return true
 if(is_access(x))
  return true
 if(is_tuple(x))
  return true
 if(is_numeric(x))
  return true
 if(is_ip(x))
  return true
 if(is_lit(x))
  return true
 if(is_lit_char(x))
  return true
 return false
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
  {
   if(is_single(a))
    return false
   return every(a,is_alnum)
  }
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
         if(!(contain(lower,v)))
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
function is_nullish(x)
{
 return same(x,"null")
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
 if(is_vec(x))
  return same(x.length,2)
 if(is_obj(x))
 {
  const _=obj_keys(x)
  {
   const keys=_
   return same(keys.length,2)
  }
 }
 return false
}
function is_printable(x)
{
 if(!(is_str(x)))
  return false
 if(is_empty(x))
  return false
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
         if(is_space(v))
         {
         }
         else if(is_alnum(v))
         {
         }
         else if(is_punct(v))
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
function is_punct(x)
{
 if(!(is_str(x)))
  return false
 if(is_empty(x))
  return false
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
         if(!(contain(punct,v)))
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
function is_single(x)
{
 if(!(is_vec(x)))
  return false
 return same(x.length,1)
}
function is_something(x)
{
 return !(is_none(x))
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
function is_uint32(x)
{
 if(!(is_uint(x)))
  return false
 return lt(x,uint32_max)
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
         if(!(contain(upper,v)))
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
 return lt(x,ushort_max)
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
function js_encode(x)
{
 check_arg(is_def,x,"x","def")
 check_arity("same",arguments.length,1)
 if(is_null(x))
  return to_str(x)
 else if(is_bool(x))
  return to_str(x)
 else if(is_num(x))
  return to_str(x)
 else if(is_str(x))
  return to_lit(x)
 else if(is_arr(x))
 {
  const _=[]
  {
   const a=_
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
            const _=js_encode(v)
            {
             const value=_
             push(a,value)
            }
           }
          }
         }
        }
       }
       {
        const _=join(a,",")
        {
         const s=_
         {
          const _=bracket(s)
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
 else if(is_obj(x))
 {
  const _=[]
  {
   const a=_
   {
    const _=is_fn(x)?x():x
    {
     for(const k in _)
     {
      const _=get(x,k)
      {
       const v=_
       {
        const _=is_fn(k)?k():k
        {
         let key=_
         {
          if(is_numeric(key))
          {
          }
          else
          {
           key=to_lit(key)
          }
          const _=js_encode(v)
          {
           const value=_
           {
            const _=concat(key,":",value)
            {
             const pair=_
             push(a,pair)
            }
           }
          }
         }
        }
       }
      }
     }
     {
      const _=join(a,",")
      {
       const s=_
       {
        const _=brace(s)
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
 else
  stop()
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
function json_load(path)
{
 check_arg(is_str,path,"path","str")
 check_arity("same",arguments.length,1)
 const _=file_load(path)
 {
  const s=_
  return json_decode(s)
 }
}
function json_save(path,x)
{
 check_arg(is_str,path,"path","str")
 check_arg(is_def,x,"x","def")
 check_arity("same",arguments.length,2)
 const _=json_encode(x)
 {
  const s=_
  file_save(path,s)
 }
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
            if(is_printable(v))
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
       const _=pad_l(process.pid," ",7)
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
               const _=mul(10,kb)
               {
                const max_line_length=_
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
                       const _=map(inputs,head,max_line_length)
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
                                    const _=space(pid,date,time,v)
                                    {
                                     const s=_
                                     push(lines,s)
                                    }
                                   }
                                  }
                                 }
                                }
                               }
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
                                 const _=mul(16,mb)
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
   }
  }
 }
}
function log(...x)
{
 function censor(x,secret)
 {
  check_arg(is_str,secret,"secret","str")
  check_arity("gte",arguments.length,1)
  if(is_arr(x))
  {
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
             const _=censor(v,secret)
             {
              const v=_
              push(r,v)
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
         const _=censor(v,secret)
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
  else if(is_str(x))
  {
   const _=repeat("x",secret.length)
   {
    const s=_
    return replace(x,secret,s)
   }
  }
  else
   return is_fn(x)?x():x
 }
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
        const _=is_fn(parts)?parts():parts
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
                const _=patch_c1(v)
                {
                 const s=_
                 at(parts,i,s)
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
               writeln("")
              else
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
                       const _=ansi_head(v,tty_column)
                       {
                        const line=_
                        writeln(line)
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
              if(is_fn(log_volatile)?log_volatile():log_volatile)
               return
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
    }
   }
  }
 }
 function writeln(x)
 {
  check_arg(is_str,x,"x","str")
  check_arity("same",arguments.length,1)
  const _=concat(x,"\n")
  {
   const s=_
   stdout_write(s)
  }
 }
 if(lte(verbose,-2))
  return
 const _=[]
 {
  const args=_
  {
   if(is_null(log_secret))
    append(args,x)
   else
   {
    const _=censor(x,log_secret)
    {
     const a=_
     append(args,a)
    }
   }
   if(is_str(log_output))
   {
    const _=[]
    {
     const a=_
     {
      const _=is_fn(args)?args():args
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
               push(a,v)
               continue
              }
              const _=to_dump(v)
              {
               const s=_
               push(a,s)
              }
             }
            }
           }
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
              const _=concat(log_output,s)
              {
               const s=_
               {
                log_output=is_fn(s)?s():s
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
   else if(is_fn(is_node)?is_node():is_node)
    node_log(...args)
   else if(is_fn(is_browser)?is_browser():is_browser)
   {
    if(is_empty(x))
     console.log()
    else
     console.log(...args)
   }
   else
    stop()
  }
 }
}
function log2(...x)
{
 if(gte(verbose,0))
  log(...x)
}
function log3(...x)
{
 if(gte(verbose,1))
  log(...x)
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
   global.log_output=null
   global.verbose=0
   global.minute=60
   global.hour=mul(60,minute)
   global.day=mul(24,hour)
   global.week=mul(7,day)
   global.month=mul(30,day)
   global.year=mul(12,month)
   global.kb=1024
   global.mb=mul(kb,1024)
   global.gb=mul(mb,1024)
   global.tb=mul(gb,1024)
   global.traces=[]
   if(is_fn(is_node)?is_node():is_node)
    init_common()
   else if(is_fn(is_browser)?is_browser():is_browser)
   {
    window.onload=on(on_load)
   }
   else
    stop()
  }
 }
}
function map(x,y,...z)
{
 check_arg(is_arr,x,"x","arr")
 check_arg(is_fn,y,"y","fn")
 check_arity("gte",arguments.length,2)
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
           const _=y(v,...z)
           {
            const v=_
            {
             check(is_def,v)
             push(r,v)
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
function obj_merge(x,y,overload)
{
 check_arg(is_obj,x,"x","obj")
 check_arg(is_obj,y,"y","obj")
 check_arity("gte",arguments.length,2)
 if(is_undef(overload))
  return obj_merge(x,y,true)
 if(is_fn(overload)?overload():overload)
  Object.assign(x,y)
 else
 {
  const _=dup(x)
  {
   const r=_
   {
    const _=is_fn(y)?y():y
    {
     for(const k in _)
     {
      const _=get(y,k)
      {
       const v=_
       {
        if(!(has(r,k)))
         put(r,k,v)
       }
      }
     }
    }
   }
  }
 }
}
function obj_option(x)
{
 check_arg(is_obj,x,"x","obj")
 check_arity("same",arguments.length,1)
 const _=[]
 {
  const a=_
  {
   const _=is_fn(x)?x():x
   {
    for(const k in _)
    {
     const _=get(x,k)
     {
      const v=_
      {
       const _=strip_r(k,"_")
       {
        const key=_
        {
         const _=to_lisp(key)
         {
          const key=_
          {
           const _=is_fn(v)?v():v
           {
            let value=_
            {
             if(is_xn(value))
             {
              value=is_fn(value.name)?value.name():value.name
             }
             if(is_key(value))
             {
              if(!(is_str(value)))
              {
               value=to_str(value)
              }
             }
             else
             {
              if(!(is_str(value)))
              {
               value=to_str(value)
              }
              value=to_lit(value)
             }
             const _=concat(key,"=",value)
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
    return join(a," ")
   }
  }
 }
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
function on(fn,...args)
{
 check_arg(is_fn,fn,"fn","fn")
 check_arity("gte",arguments.length,1)
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
function partial(fn,...args)
{
 check_arg(is_fn,fn,"fn","fn")
 check_arity("gte",arguments.length,1)
 function result(...x)
 {
  return fn(...args,...x)
 }
 return result
}
function patch_c1(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 function is_c1(x)
 {
  check_arg(is_str,x,"x","str")
  check_arity("same",arguments.length,1)
  const _=asc(x)
  {
   const n=_
   return between(n,128,159)
  }
 }
 const _=[]
 {
  const a=_
  {
   const _=null
   {
    let previous=_
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
             if(is_null(previous))
              push(a,v)
             else if(same(previous,escape))
              push(a,v)
             else if(is_c1(v))
             {
              const _=char_escape(v)
              {
               const s=_
               push(a,s)
              }
             }
             else
              push(a,v)
             previous=is_fn(v)?v():v
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
  }
 }
}
function path_compact(path,relative)
{
 check_arg(is_str,path,"path","str")
 check_arity("gte",arguments.length,1)
 function is_absolute(x)
 {
  check_arg(is_str,x,"x","str")
  check_arity("same",arguments.length,1)
  if(!(match_l(x,"/")))
   return false
  const _=path_split(x)
  {
   const components=_
   {
    if(contain(components,"."))
     return false
    if(contain(components,".."))
     return false
    return true
   }
  }
 }
 if(is_undef(relative))
 {
  const _=is_fn(dir_current)?dir_current():dir_current
  {
   const relative=_
   return path_compact(path,relative)
  }
 }
 check(is_absolute,path)
 check(is_absolute,relative)
 if(same(path,relative))
  return is_fn(path)?path():path
 const _=path_split(path)
 {
  const path=_
  {
   const _=path_split(relative)
   {
    const relative=_
    {
     check(gte,path.length,relative.length)
     while(true)
     {
      if(is_empty(path))
       break
      if(is_empty(relative))
       break
      const _=front(path)
      {
       const path_component=_
       {
        const _=front(relative)
        {
         const relative_component=_
         {
          if(different(path_component,relative_component))
           break
          shift(path)
          shift(relative)
         }
        }
       }
      }
     }
     return path_join(path)
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
   if(is_empty(s))
    return ""
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
 check_arg(is_fn,x,"x","fn")
 check_arity("gte",arguments.length,1)
 const _=is_fn(time_now)?time_now():time_now
 {
  const before=_
  {
   const _=x(...y)
   {
    const r=_
    {
     const _=is_fn(time_now)?time_now():time_now
     {
      const after=_
      {
       const _=sub(after,before)
       {
        const profile=_
        {
         const _=to_fixed(profile)
         {
          const profile=_
          {
           const _=concat(profile,"s")
           {
            const profile=_
            {
             const _={profile}
             {
              const o=_
              {
               const _=obj_option(o)
               {
                const s=_
                {
                 log(x.name,s)
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
   while(lt(a.length,x))
   {
    const _=random(ushort_max)
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
 check(is_null,log_output)
 log_output=""
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
    log_output=null
    throw is_fn(e)?e():e
   }
   const _=trim_r(log_output)
   {
    const output=_
    {
     log_output=null
     return {result,output}
    }
   }
  }
 }
}
function* redact(secret,callable,...args)
{
 check_arg(is_str,secret,"secret","str")
 check_arg(is_xn,callable,"callable","xn")
 check_arity("gte",arguments.length,2)
 check(is_null,log_secret)
 log_secret=is_fn(secret)?secret():secret
 const _=null
 {
  let r=_
  {
   try
   {
    if(is_fn(callable))
    {
     r=callable(...args)
    }
    else if(is_gn(callable))
    {
     r=yield* callable(...args)
    }
    else
     stop()
   }
   catch(e)
   {
    log_secret=null
    throw is_fn(e)?e():e
   }
   log_secret=null
   return is_fn(r)?r():r
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
           if(y(v))
            continue
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
            if(same(v,y))
             push(r,z)
            else
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
       const _=h_title(report.message)
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
        const _={stack,message}
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
 function log_trace()
 {
  check_arity("same",arguments.length,0)
  if(is_empty(traces))
   return
  flower("trace")
  const _=is_fn(traces)?traces():traces
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
         log(">",v)
        }
       }
      }
     }
    }
   }
  }
 }
 function log_stack(stack)
 {
  check_arg(is_str,stack,"stack","str")
  check_arity("same",arguments.length,1)
  dbg_origin_xs(stack,"cs",map)
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
 function log_js(stack)
 {
  check_arg(is_str,stack,"stack","str")
  check_arity("same",arguments.length,1)
  dbg_origin_xs(stack,"js",map)
 }
 const _={}
 {
  const context=_
  {
   const _=is_fn(error.message)?error.message():error.message
   {
    let message=_
    {
     if(is_word(message))
     {
      put(context,"reason",message)
      message="An error has occured"
     }
     else
     {
      message=strip_r(message,".")
      message=txt_inline(message)
     }
     put(context,"app",app)
     const _=is_fn(error.constructor.name)?error.constructor.name():error.constructor.name
     {
      const type=_
      {
       const _=to_lower(type)
       {
        const type=_
        {
         if(same(type,"error"))
         {
         }
         if(same(type,"object"))
         {
         }
         else
          put(context,"type",type)
         const _=is_fn(time_now)?time_now():time_now
         {
          const uptime=_
          {
           const _=time_delay(uptime)
           {
            const uptime=_
            {
             put(context,"uptime",uptime)
             if(is_fn(is_browser)?is_browser():is_browser)
             {
              put(context,"host",location.hostname)
              const _=to_str(location)
              {
               const location=_
               {
                put(context,"location",location)
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
                     const _=url_parse(context.location)
                     {
                      const url_location=_
                      {
                       if(different(url_referer.host,url_location.host))
                        put(context,"referrer",document.referrer)
                      }
                     }
                    }
                   }
                  }
                  const _=is_fn(browser_get)?browser_get():browser_get
                  {
                   const browser=_
                   {
                    put(context,"browser",browser)
                    put(context,"agent",navigator.userAgent)
                    check(is_undef,query)
                   }
                  }
                 }
                }
               }
              }
             }
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
                 put(context,"errno",errno)
                const _=is_fn(os_host)?os_host():os_host
                {
                 const host=_
                 {
                  put(context,"host",host)
                  if(is_obj(query))
                  {
                   put(context,"url",query.url.href)
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
                       if(is_str(referrer))
                        put(context,"referrer",referrer)
                       put(context,"remote",query.remote)
                      }
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
              stop()
             const _=is_fn(error)?error():error
             {
              for(const k in _)
              {
               const _=get(error,k)
               {
                const v=_
                {
                 const _=["message","stack","errno"]
                 {
                  const skip=_
                  {
                   if(contain(skip,k))
                    continue
                   if(is_null(v))
                    continue
                   if(is_empty(v))
                    continue
                   put(context,k,v)
                  }
                 }
                }
               }
              }
              {
               const _=capture(flower_box,message)
               {
                const title=_
                {
                 const _=to_tbl(context)
                 {
                  const context=_
                  {
                   const _=tbl_render(context)
                   {
                    const context=_
                    {
                     const _=capture(log_trace)
                     {
                      const trace=_
                      {
                       const _=capture(log_stack,error.stack)
                       {
                        const stack=_
                        {
                         const _=capture(log_backtrace,error.stack,map)
                         {
                          const backtrace=_
                          {
                           const _=capture(log_js,error.stack)
                           {
                            const js=_
                            return {message,title,context,trace,stack,backtrace,js}
                           }
                          }
                         }
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
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
 const _=is_fn(report)?report():report
 {
  for(const k in _)
  {
   if(same(k,"message"))
    continue
   const _=get(report,k)
   {
    const v=_
    {
     if(is_empty(v))
      continue
     if(same(k,"js"))
      log3(v)
     else
      log(v)
    }
   }
  }
  {
   const _=space("end-report",app,"/",report.message)
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
 const _=[]
 {
  const a=_
  {
   const _=is_fn(report)?report():report
   {
    for(const k in _)
    {
     const _=get(report,k)
     {
      const v=_
      {
       if(is_full(a))
        push(a,"")
       if(is_full(v))
        push(a,v)
      }
     }
    }
    {
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
 else
  stop()
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
 const _=new Error(x)
 {
  const e=_
  throw is_fn(e)?e():e
 }
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
function task_dump()
{
 check_arity("same",arguments.length,0)
 const _=is_fn(tasks)?tasks():tasks
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
         const _=is_fn(v.name)?v.name():v.name
         {
          const name=_
          {
           const _={name}
           {
            const o=_
            {
             const _=obj_option(o)
             {
              const s=_
              log("task",s)
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function task_run(x,...y)
{
 check_arg(is_gn,x,"x","gn")
 check_arity("gte",arguments.length,1)
 const _=is_fn(x.name)?x.name():x.name
 {
  const name=_
  {
   const _=x(...y)
   {
    const iterator=_
    {
     const _={name,iterator}
     {
      const task=_
      push(tasks,task)
     }
    }
   }
  }
 }
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
          }
         }
        }
       }
       return tbl_pad_l(x,y,length)
      }
     }
    }
   }
  }
 }
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
                  {
                   const _=trim_r(v)
                   {
                    const s=_
                    {
                     if(is_txt(s))
                     {
                      const _=json_encode(s)
                      {
                       const s=_
                       {
                        const _=dequote(s)
                        {
                         const s=_
                         set(row,k,s)
                        }
                       }
                      }
                     }
                     else
                      set(row,k,s)
                     continue
                    }
                   }
                  }
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
 function pad_column(x)
 {
  check_arg(is_arr,x,"x","arr")
  check_arity("same",arguments.length,1)
  const _=[]
  {
   const r=_
   {
    const _=0
    {
     let length=_
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
              length=max(length,v.length)
             }
            }
           }
          }
         }
         {
          if(is_numeric_column(x))
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
                   const _=pad_l(v," ",length)
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
            }
           }
          }
          else
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
                   const _=pad_r(v," ",length)
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
 function is_numeric_column(x)
 {
  if(!(is_arr(x)))
   return false
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
          if(same(i,0))
           continue
          if(!(is_numeric(v)))
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
                      const column=_
                      {
                       const _=0
                       {
                        let n=_
                        {
                         const _=is_fn(column)?column():column
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
                                 n=max(n,v.length)
                                }
                               }
                              }
                             }
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
                               const _=shift(v)
                               {
                                const s=_
                                push(header,s)
                               }
                              }
                             }
                            }
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
                                       const _=is_fn(i)?i():i
                                       {
                                        const index=_
                                        {
                                         const _=[]
                                         {
                                          const line=_
                                          {
                                           const _=is_fn(columns)?columns():columns
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
                                                   const _=at(v,index)
                                                   {
                                                    const s=_
                                                    push(line,s)
                                                   }
                                                  }
                                                 }
                                                }
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
   const x=_
   {
    const _=get(y,column)
    {
     const y=_
     return cmp_i18n(x,y)
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
 {
 }
 if(is_undef(y))
 {
  const _=div(1,30)
  {
   const t=_
   return time_timeout(x,t,...z)
  }
 }
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
function to_c(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 return replace(x,"-","_")
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
              if(!(is_key(key)))
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
   else if(is_fn(val))
    return space("fn",val.name)
   else if(is_gn(val))
    return space("gn",val.name)
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
function to_lisp(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 return replace(x,"_","-")
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
               trace(v)
              }
             }
            }
           }
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
 if(gte(verbose,1))
  log("trace>",...x)
 else
 {
  const _=[]
  {
   const a=_
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
          }
         }
        }
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
  if(is_fn(is_ssh)?is_ssh():is_ssh)
  {
   const _=""
   {
    const code=_
    {
     const _=concat(code,"open(TTY,'<','/dev/tty');")
     {
      const code=_
      {
       const _=concat(code,"ioctl(TTY,0x5413,my $b=\"\\0\"x8);")
       {
        const code=_
        {
         const _=concat(code,"print((unpack('S*',$b))[1]);")
         {
          const code=_
          {
           const _=os_execute("perl","-e",code)
           {
            const s=_
            return to_uint(s)
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
  else if(is_fn(is_batch)?is_batch():is_batch)
   return 140
  else
  {
   const _=is_fn(process.stdout.columns)?process.stdout.columns():process.stdout.columns
   {
    const r=_
    {
     check(is_uint,r)
     return is_fn(r)?r():r
    }
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
           const _=head(v,y)
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
function txt_head(x,y)
{
 check_arg(is_uint,y,"y","uint")
 check_arity("gte",arguments.length,1)
 if(is_str(x))
 {
  const _=split(x)
  {
   const a=_
   {
    const _=txt_head(a,y)
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
           const _=head(v,y)
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
           const _=concat(y,v)
           {
            const s=_
            {
             if(is_blank(s))
              push(r,"")
             else
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
            }
           }
          }
         }
         {
          s=join(a)
         }
        }
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
function volatile(...x)
{
 log_volatile=true
 try
 {
  log(...x)
 }
 catch(e)
 {
  log_volatile=false
  throw is_fn(e)?e():e
 }
 log_volatile=false
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
function dom_entities()
{
 check_arity("same",arguments.length,0)
 const _={}
 {
  const result=_
  {
   function entity(x,y)
   {
    check_arg(is_cool,x,"x","cool")
    check_arity("gte",arguments.length,1)
    if(is_char(x))
    {
     const _=asc(x)
     {
      const n=_
      return entity(n,y)
     }
    }
    check(is_ushort,x)
    if(is_ushort(y))
    {
     variant(x,y)
     return
    }
    check(is_str,y)
    const _=format(y)
    {
     const key=_
     {
      const _=chr(x)
      {
       const c=_
       {
        put(result,key,c)
        variant(x)
       }
      }
     }
    }
   }
   function variant(x,y)
   {
    check_arg(is_ushort,x,"x","ushort")
    check_arity("gte",arguments.length,1)
    if(is_undef(y))
     return variant(x,x)
    check(is_ushort,y)
    const _=chr(x)
    {
     const c=_
     {
      const _=pad_l(y,"0",3)
      {
       const numeric1=_
       {
        const _=concat("#",numeric1)
        {
         const numeric1=_
         {
          const _=format(numeric1)
          {
           const numeric1=_
           {
            if(!(has(result,numeric1)))
             put(result,numeric1,c)
            const _=pad_l(y,"0",4)
            {
             const numeric2=_
             {
              const _=concat("#",numeric2)
              {
               const numeric2=_
               {
                const _=format(numeric2)
                {
                 const numeric2=_
                 {
                  if(!(has(result,numeric2)))
                   put(result,numeric2,c)
                  const _=to_hex(y)
                  {
                   const hex=_
                   {
                    const _=concat("#x",hex)
                    {
                     const hex=_
                     {
                      const _=format(hex)
                      {
                       const hex=_
                       {
                        if(!(has(result,hex)))
                         put(result,hex,c)
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
   function format(x)
   {
    check_arg(is_str,x,"x","str")
    check_arity("same",arguments.length,1)
    return concat("&",x,";")
   }
   entity(33,"excl")
   entity("'","quot")
   entity(35,"num")
   entity(36,"dollar")
   entity(37,"percnt")
   entity(38,"amp")
   entity(39,"apos")
   entity(40,"lparen")
   entity(41,"rparen")
   entity(42,"ast")
   entity(43,"plus")
   entity(44,"comma")
   entity(46,"period")
   entity(47,"sol")
   entity(58,"colon")
   entity(59,"semi")
   entity(60,"lt")
   entity(61,"equals")
   entity(62,"gt")
   entity(63,"quest")
   entity(64,"commat")
   entity(91,"lsqb")
   entity(92,"bsol")
   entity(93,"rsqb")
   entity(94,"Hat")
   entity(95,"lowbar")
   entity(96,"grave")
   entity(123,"lcub")
   entity(124,"verbar")
   entity(125,"rcub")
   entity(126,"tilde")
   entity(8364,"euro")
   entity(",","sbquo")
   entity(131,"fnof")
   entity("\"","bdquo")
   entity(133,"hellip")
   entity(134,"dagger")
   entity(135,"Dagger")
   entity(136,"circ")
   entity(137,"permil")
   entity(138,"Scaron")
   entity("'","lsaquo")
   entity(140,"OElig")
   entity(142,"Zcaron")
   entity("'","lsquo")
   entity("'","rsquo")
   entity("\"","ldquo")
   entity("\"","rdquo")
   entity(149,"bull")
   entity(150,"ndash")
   entity(151,"mdash")
   entity(152,732)
   entity(153,"trade")
   entity(154,"scaron")
   entity("'","rsaquo")
   entity(156,"oelig")
   entity(158,"zcaron")
   entity(159,"Yuml")
   entity(160,"nbsp")
   entity(161,"iexcl")
   entity(162,"cent")
   entity(163,"pound")
   entity(164,"curren")
   entity(165,"yen")
   entity(166,"brvbar")
   entity(167,"sect")
   entity(168,"uml")
   entity(169,"copy")
   entity(170,"ordf")
   entity("\"","laquo")
   entity(172,"not")
   entity(173,"shy")
   entity(174,"reg")
   entity(175,"macr")
   entity(176,"deg")
   entity(177,"plusmn")
   entity(178,"sup2")
   entity(179,"sup3")
   entity(180,"acute")
   entity(181,"micro")
   entity(182,"para")
   entity(183,"middot")
   entity(184,"cedil")
   entity(185,"sup1")
   entity(186,"ordm")
   entity("\"","raquo")
   entity(188,"frac14")
   entity(189,"frac12")
   entity(190,"frac34")
   entity(191,"iquest")
   entity(192,"Agrave")
   entity(193,"Aacute")
   entity(194,"Acirc")
   entity(195,"Atilde")
   entity(196,"Auml")
   entity(197,"Aring")
   entity(198,"AElig")
   entity(199,"Ccedil")
   entity(200,"Egrave")
   entity(201,"Eacute")
   entity(202,"Ecirc")
   entity(203,"Euml")
   entity(204,"Igrave")
   entity(205,"Iacute")
   entity(206,"Icirc")
   entity(207,"Iuml")
   entity(208,"ETH")
   entity(209,"Ntilde")
   entity(210,"Ograve")
   entity(211,"Oacute")
   entity(212,"Ocirc")
   entity(213,"Otilde")
   entity(214,"Ouml")
   entity("x","times")
   entity(216,"Oslash")
   entity(217,"Ugrave")
   entity(218,"Uacute")
   entity(219,"Ucirc")
   entity(220,"Uuml")
   entity(221,"Yacute")
   entity(222,"THORN")
   entity(223,"szlig")
   entity(224,"agrave")
   entity(225,"aacute")
   entity(226,"acirc")
   entity(227,"atilde")
   entity(228,"auml")
   entity(229,"aring")
   entity(230,"aelig")
   entity(231,"ccedil")
   entity(232,"egrave")
   entity(233,"eacute")
   entity(234,"ecirc")
   entity(235,"euml")
   entity(236,"igrave")
   entity(237,"iacute")
   entity(238,"icirc")
   entity(239,"iuml")
   entity(240,"eth")
   entity(241,"ntilde")
   entity(242,"ograve")
   entity(243,"oacute")
   entity(244,"ocirc")
   entity(245,"otilde")
   entity(246,"ouml")
   entity(247,"divide")
   entity(248,"oslash")
   entity(249,"ugrave")
   entity(250,"uacute")
   entity(251,"ucirc")
   entity(252,"uuml")
   entity(253,"yacute")
   entity(254,"thorn")
   entity(255,"yuml")
   return is_fn(result)?result():result
  }
 }
}
function dom_escape(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 const _=[]
 {
  const a=_
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
           const _=find(entities,v)
           {
            const entity=_
            {
             if(same(entity,-1))
              push(a,v)
             else
              push(a,entity)
            }
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
 }
}
function dom_special_chars(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 const _=replace(x,nbsp,"&nbsp;")
 {
  const r=_
  {
   const _=replace(r,"\"","&quot;")
   {
    const r=_
    {
     const _=replace(r,"'","&apos;")
     {
      const r=_
      {
       const _=replace(r,"<","&lt;")
       {
        const r=_
        {
         const _=replace(r,">","&gt;")
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
function dom_unescape(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 const _=is_fn(x)?x():x
 {
  let r=_
  {
   const _=is_fn(entities)?entities():entities
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
    return is_fn(r)?r():r
   }
  }
 }
}
function h_a(x)
{
 const _=h_init("a",x)
 {
  const r=_
  {
   r.inline=true
   return is_fn(r)?r():r
  }
 }
}
function h_attr(x,y,z)
{
 check_arg(is_obj,x,"x","obj")
 check_arg(is_str,y,"y","str")
 check_arg(is_cool,z,"z","cool")
 check_arity("same",arguments.length,3)
 put(x.attr,y,z)
}
function h_b(x)
{
 const _=h_init("b",x)
 {
  const r=_
  {
   r.inline=true
   return is_fn(r)?r():r
  }
 }
}
function h_back_color(x,y)
{
 check_arg(is_obj,x,"x","obj")
 check_arg(is_str,y,"y","str")
 check_arity("same",arguments.length,2)
 h_style(x,"background-color",y)
}
function h_body()
{
 check_arity("same",arguments.length,0)
 return h_init("body")
}
function h_bold(x)
{
 check_arg(is_obj,x,"x","obj")
 check_arity("same",arguments.length,1)
 h_style(x,"font-weight","bold")
}
function h_border(x,y)
{
 check_arg(is_obj,x,"x","obj")
 check_arity("gte",arguments.length,1)
 if(is_undef(y))
 {
  const _=space(border,"solid gainsboro")
  {
   const style=_
   return h_border(x,style)
  }
 }
 check(is_str,y)
 h_style(x,"border",y)
}
function h_br()
{
 check_arity("same",arguments.length,0)
 const _=h_init("br")
 {
  const r=_
  {
   r.short=true
   r.inline=true
   return is_fn(r)?r():r
  }
 }
}
function h_color(x,y)
{
 check_arg(is_obj,x,"x","obj")
 check_arg(is_str,y,"y","str")
 check_arity("same",arguments.length,2)
 h_style(x,"color",y)
}
function h_decoration(x,y)
{
 check_arg(is_obj,x,"x","obj")
 check_arg(is_str,y,"y","str")
 check_arity("same",arguments.length,2)
 h_style(x,"text-decoration",y)
}
function h_div(x)
{
 return h_init("div",x)
}
function h_float(x,y)
{
 check_arg(is_obj,x,"x","obj")
 check_arg(is_str,y,"y","str")
 check_arity("same",arguments.length,2)
 h_style(x,"float",y)
}
function h_font_family(x,y)
{
 check_arg(is_obj,x,"x","obj")
 check_arg(is_str,y,"y","str")
 check_arity("same",arguments.length,2)
 h_style(x,"font-family",y)
}
function h_font_size(x,y)
{
 check_arg(is_obj,x,"x","obj")
 check_arg(is_str,y,"y","str")
 check_arity("same",arguments.length,2)
 h_style(x,"font-size",y)
}
function h_head()
{
 check_arity("same",arguments.length,0)
 const _=h_init("head")
 {
  const r=_
  {
   const _=is_fn(h_meta)?h_meta():h_meta
   {
    const meta=_
    {
     h_attr(meta,"charset","utf-8")
     h_push(r,meta)
     return is_fn(r)?r():r
    }
   }
  }
 }
}
function h_href(x,y)
{
 check_arg(is_obj,x,"x","obj")
 check_arg(is_str,y,"y","str")
 check_arity("same",arguments.length,2)
 h_attr(x,"href",y)
}
function h_html()
{
 check_arity("same",arguments.length,0)
 return h_init("html")
}
function h_img()
{
 check_arity("same",arguments.length,0)
 const _=h_init("img")
 {
  const r=_
  {
   r.short=true
   r.inline=true
   return is_fn(r)?r():r
  }
 }
}
function h_init(name,text)
{
 check_arg(is_str,name,"name","str")
 check_arity("gte",arguments.length,1)
 if(is_undef(text))
  return h_init(name,"")
 check(is_str,text)
 const _=false
 {
  const short=_
  {
   const _=false
   {
    const inline=_
    {
     const _={}
     {
      const attr=_
      {
       const _={}
       {
        const style=_
        {
         const _=[]
         {
          const children=_
          return {name,short,inline,attr,style,text,children}
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function h_meta()
{
 check_arity("same",arguments.length,0)
 const _=h_init("meta")
 {
  const r=_
  {
   r.short=true
   return is_fn(r)?r():r
  }
 }
}
function h_padding_bottom(x,y)
{
 check_arg(is_obj,x,"x","obj")
 check_arg(is_cool,y,"y","cool")
 check_arity("same",arguments.length,2)
 h_style(x,"padding-bottom",y)
}
function h_padding_left(x,y)
{
 check_arg(is_obj,x,"x","obj")
 check_arg(is_cool,y,"y","cool")
 check_arity("same",arguments.length,2)
 h_style(x,"padding-left",y)
}
function h_padding_right(x,y)
{
 check_arg(is_obj,x,"x","obj")
 check_arg(is_cool,y,"y","cool")
 check_arity("same",arguments.length,2)
 h_style(x,"padding-right",y)
}
function h_padding_top(x,y)
{
 check_arg(is_obj,x,"x","obj")
 check_arg(is_cool,y,"y","cool")
 check_arity("same",arguments.length,2)
 h_style(x,"padding-top",y)
}
function h_padding(x,y)
{
 check_arg(is_obj,x,"x","obj")
 check_arg(is_cool,y,"y","cool")
 check_arity("same",arguments.length,2)
 h_style(x,"padding",y)
}
function h_pre(x)
{
 return h_init("pre",x)
}
function h_push(x,y)
{
 check_arg(is_obj,x,"x","obj")
 check_arg(is_obj,y,"y","obj")
 check_arity("same",arguments.length,2)
 push(x.children,y)
}
function h_render(x)
{
 check_arg(is_obj,x,"x","obj")
 check_arity("same",arguments.length,1)
 function inline_text(x)
 {
  check_arg(is_str,x,"x","str")
  check_arity("same",arguments.length,1)
  if(is_empty(x))
   return is_fn(x)?x():x
  const _=front(x)
  {
   const begin=_
   {
    const _=is_space(begin)
    {
     const begin=_
     {
      const _=back(x)
      {
       const end=_
       {
        const _=is_space(end)
        {
         const end=_
         {
          const _=txt_inline(x)
          {
           let r=_
           {
            if(is_empty(r))
            {
             if(is_fn(begin)?begin():begin)
              return " "
             if(is_fn(end)?end():end)
              return " "
            }
            if(is_fn(begin)?begin():begin)
            {
             r=concat(" ",r)
            }
            if(is_fn(end)?end():end)
            {
             r=concat(r," ")
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
 function indent_child(x)
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
       const _=shift(a)
       {
        const s=_
        {
         if(!(pre_begin(s)))
         {
          const _=txt_indent(s)
          {
           const s=_
           {
            push(r,s)
            continue
           }
          }
         }
         const _=txt_indent(s)
         {
          const s=_
          {
           push(r,s)
           if(pre_end(s))
            continue
           while(is_full(a))
           {
            const _=shift(a)
            {
             const s=_
             {
              push(r,s)
              if(pre_end(s))
               break
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
 function pre_begin(x)
 {
  check_arg(is_str,x,"x","str")
  check_arity("same",arguments.length,1)
  const _=trim(x)
  {
   const s=_
   return match_l(s,"<pre>")
  }
 }
 function pre_end(x)
 {
  check_arg(is_str,x,"x","str")
  check_arity("same",arguments.length,1)
  const _=trim(x)
  {
   const s=_
   return match_r(s,"</pre>")
  }
 }
 const _=[]
 {
  const lines=_
  {
   if(same(x.name,"html"))
    push(lines,"<!doctype html>")
   const _=dup(x.attr)
   {
    const attr=_
    {
     if(is_full(x.style))
     {
      const _=[]
      {
       let style=_
       {
        const _=is_fn(x.style)?x.style():x.style
        {
         for(const k in _)
         {
          const _=get(x.style,k)
          {
           const v=_
           {
            const _=concat(k,": ",v,";")
            {
             const s=_
             push(style,s)
            }
           }
          }
         }
         {
          const _=join(style," ")
          {
           const style=_
           put(attr,"style",style)
          }
         }
        }
       }
      }
     }
     const _=[]
     {
      const attributes=_
      {
       const _=is_fn(attr)?attr():attr
       {
        for(const k in _)
        {
         const _=get(attr,k)
         {
          const v=_
          {
           const _=dom_special_chars(v)
           {
            const s=_
            {
             const _=quote(s)
             {
              const s=_
              {
               const _=concat(k,"=",s)
               {
                const s=_
                push(attributes,s)
               }
              }
             }
            }
           }
          }
         }
        }
        {
         const _=join(attributes," ")
         {
          const attributes=_
          {
           const _=[x.name]
           {
            const open=_
            {
             if(is_full(attributes))
              push(open,attributes)
             const _=join(open," ")
             {
              const open=_
              {
               const _=angle(open)
               {
                const open=_
                {
                 const _=concat("/",x.name)
                 {
                  const close=_
                  {
                   const _=angle(close)
                   {
                    const close=_
                    {
                     const _=is_fn(x.name)?x.name():x.name
                     {
                      const name=_
                      {
                       const _=is_fn(x.text)?x.text():x.text
                       {
                        const text=_
                        {
                         const _=is_fn(x.children)?x.children():x.children
                         {
                          const children=_
                          {
                           if(same(name,"pre"))
                           {
                            check(is_empty,children)
                            const _=dom_special_chars(text)
                            {
                             const text=_
                             {
                              const _=concat(open,text,close)
                              {
                               const line=_
                               push(lines,line)
                              }
                             }
                            }
                           }
                           else if(same(name,"script"))
                           {
                            check(is_empty,children)
                            const _=replace(text,"</script>","<\\/script>")
                            {
                             const text=_
                             {
                              const _=txt_indent(text)
                              {
                               const text=_
                               {
                                const _=split(text)
                                {
                                 const text=_
                                 {
                                  push(lines,open)
                                  append(lines,text)
                                  push(lines,close)
                                 }
                                }
                               }
                              }
                             }
                            }
                           }
                           else if(is_fn(x.short)?x.short():x.short)
                           {
                            check(is_empty,text)
                            check(is_empty,children)
                            push(lines,open)
                           }
                           else if(is_fn(x.inline)?x.inline():x.inline)
                           {
                            const _=is_fn(open)?open():open
                            {
                             let line=_
                             {
                              const _=dom_special_chars(text)
                              {
                               const text=_
                               {
                                const _=inline_text(text)
                                {
                                 const text=_
                                 {
                                  line=concat(line,text)
                                  const _=is_fn(children)?children():children
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
                                          const _=h_render(v)
                                          {
                                           const s=_
                                           {
                                            line=concat(line,s)
                                           }
                                          }
                                         }
                                        }
                                       }
                                      }
                                     }
                                     {
                                      line=concat(line,close)
                                      push(lines,line)
                                     }
                                    }
                                   }
                                  }
                                 }
                                }
                               }
                              }
                             }
                            }
                           }
                           else if(is_empty(children))
                           {
                            const _=dom_special_chars(text)
                            {
                             const text=_
                             {
                              const _=inline_text(text)
                              {
                               const text=_
                               {
                                const _=concat(open,text,close)
                                {
                                 const line=_
                                 push(lines,line)
                                }
                               }
                              }
                             }
                            }
                           }
                           else
                           {
                            push(lines,open)
                            const _=dom_special_chars(text)
                            {
                             const text=_
                             {
                              const _=txt_inline(text)
                              {
                               const text=_
                               {
                                const _=txt_indent(text)
                                {
                                 const text=_
                                 {
                                  if(is_full(text))
                                   push(lines,text)
                                  const _=is_fn(children)?children():children
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
                                          const _=h_render(v)
                                          {
                                           const s=_
                                           {
                                            const _=split(s)
                                            {
                                             const a=_
                                             {
                                              const _=indent_child(a)
                                              {
                                               const a=_
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
                                     push(lines,close)
                                    }
                                   }
                                  }
                                 }
                                }
                               }
                              }
                             }
                            }
                           }
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
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function h_script(x)
{
 return h_init("script",x)
}
function h_spacer()
{
 check_arity("same",arguments.length,0)
 const _=is_fn(h_div)?h_div():h_div
 {
  const r=_
  {
   h_text(r,nbsp)
   return is_fn(r)?r():r
  }
 }
}
function h_span(x)
{
 const _=h_init("span",x)
 {
  const r=_
  {
   r.inline=true
   return is_fn(r)?r():r
  }
 }
}
function h_src(x,y)
{
 check_arg(is_obj,x,"x","obj")
 check_arg(is_str,y,"y","str")
 check_arity("same",arguments.length,2)
 h_attr(x,"src",y)
}
function h_style(x,y,z)
{
 check_arg(is_obj,x,"x","obj")
 check_arg(is_str,y,"y","str")
 check_arg(is_cool,z,"z","cool")
 check_arity("same",arguments.length,3)
 put(x.style,y,z)
}
function h_table()
{
 check_arity("same",arguments.length,0)
 const _=h_init("table")
 {
  const r=_
  {
   h_style(r,"border-collapse","collapse")
   return is_fn(r)?r():r
  }
 }
}
function h_tbl(tbl)
{
 check_arg(is_arr,tbl,"tbl","arr")
 check_arity("same",arguments.length,1)
 const _=is_fn(h_table)?h_table():h_table
 {
  const table=_
  {
   h_border(table)
   const _=is_fn(h_tr)?h_tr():h_tr
   {
    const tr=_
    {
     const _=tbl_columns(tbl)
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
             const _=is_fn(h_th)?h_th():h_th
             {
              const th=_
              {
               h_text(th,v)
               h_padding(th,padding)
               h_border(th)
               h_push(tr,th)
              }
             }
            }
           }
          }
         }
        }
        {
         h_push(table,tr)
         const _=is_fn(tbl)?tbl():tbl
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
                 const _=is_fn(h_tr)?h_tr():h_tr
                 {
                  const tr=_
                  {
                   const _=is_fn(v)?v():v
                   {
                    const row=_
                    {
                     const _=mod(i,2)
                     {
                      const even=_
                      {
                       const _=same(even,0)
                       {
                        const even=_
                        {
                         if(is_fn(even)?even():even)
                          h_back_color(tr,"whitesmoke")
                         else
                          h_back_color(tr,"white")
                         const _=is_fn(row)?row():row
                         {
                          for(const k in _)
                          {
                           const _=get(row,k)
                           {
                            const v=_
                            {
                             const _=is_fn(h_td)?h_td():h_td
                             {
                              const td=_
                              {
                               if(is_cool(v))
                                h_text(td,v)
                               else if(is_link(v))
                               {
                                const _=link_h(v)
                                {
                                 const a=_
                                 h_push(td,a)
                                }
                               }
                               else
                                stop()
                               h_padding(td,padding)
                               h_push(tr,td)
                              }
                             }
                            }
                           }
                          }
                          h_push(table,tr)
                         }
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
            return is_fn(table)?table():table
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function h_td()
{
 check_arity("same",arguments.length,0)
 return h_init("td")
}
function h_text(x,y)
{
 check_arg(is_obj,x,"x","obj")
 check_arity("gte",arguments.length,1)
 if(is_undef(y))
  return is_fn(x.text)?x.text():x.text
 x.text=is_fn(y)?y():y
}
function h_th()
{
 check_arity("same",arguments.length,0)
 return h_init("th")
}
function h_title(x)
{
 const _=h_init("title",x)
 {
  const r=_
  {
   r.inline=true
   return is_fn(r)?r():r
  }
 }
}
function h_tr()
{
 check_arity("same",arguments.length,0)
 return h_init("tr")
}
function h_wbr()
{
 check_arity("same",arguments.length,0)
 const _=h_init("wbr")
 {
  const r=_
  {
   r.short=true
   r.inline=true
   return is_fn(r)?r():r
  }
 }
}
function h_width(x,y)
{
 check_arg(is_obj,x,"x","obj")
 check_arg(is_cool,y,"y","cool")
 check_arity("same",arguments.length,2)
 h_style(x,"width",y)
}
function init_www()
{
 check_arity("same",arguments.length,0)
 global.escape=chr(27)
 global.nbsp=chr(160)
 global.entities=is_fn(dom_entities)?dom_entities():dom_entities
 global.mailer="mabynogy@gmail.com"
 global.admin="mabynogy@freeserver.sh"
 global.author="marc@abiven.eu"
}
function is_link(x)
{
 if(!(is_obj(x)))
  return false
 if(!(is_str(x.url)))
  return false
 if(!(is_str(x.title)))
  return false
 return true
}
function link_dom(x)
{
 check_arg(is_obj,x,"x","obj")
 check_arity("same",arguments.length,1)
 const _=is_fn(dom_a)?dom_a():dom_a
 {
  const r=_
  {
   dom_href(r,x.url)
   dom_text(r,x.title)
   return is_fn(r)?r():r
  }
 }
}
function link_h(x)
{
 check_arg(is_obj,x,"x","obj")
 check_arity("same",arguments.length,1)
 const _=is_fn(h_a)?h_a():h_a
 {
  const r=_
  {
   h_href(r,x.url)
   h_text(r,x.title)
   return is_fn(r)?r():r
  }
 }
}
function link_init(url,title)
{
 check_arg(is_str,url,"url","str")
 check_arity("gte",arguments.length,1)
 if(is_undef(title))
 {
  const _=url_beautify(url)
  {
   const title=_
   return link_init(url,title)
  }
 }
 check(is_str,title)
 return {url,title}
}
function app_list()
{
 check_arity("same",arguments.length,0)
 const _={}
 {
  const r=_
  {
   const _=is_fn(pkg_init)?pkg_init():pkg_init
   {
    const include=_
    {
     const _=is_fn(include)?include():include
     {
      for(const k in _)
      {
       const _=pkg_resolve(include,k)
       {
        const paths=_
        {
         const _=back(paths)
         {
          const path=_
          {
           const _=path_base(path)
           {
            const base=_
            {
             if(match_l(base,"app-"))
              put(r,k,path)
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
function beep()
{
 check_arity("same",arguments.length,0)
 const _=0.1
 {
  const duration=_
  task_run(os_detach,"play","-n","synth",duration,"sine",880,"vol",0.5)
 }
}
function deinit_node()
{
 check_arity("same",arguments.length,0)
 function clean_tmp()
 {
  check_arity("same",arguments.length,0)
  fs_remove(config_tmp)
  const _=path_up(config_tmp)
  {
   const app=_
   {
    if(dir_empty(app))
     fs_remove(app)
    const _=random(16)
    {
     const n=_
     {
      if(same(n,0))
      {
       const _=path_up(app)
       {
        const dir_tmp=_
        {
         const _=path_up(config_log)
         {
          const dir_log=_
          {
           const _=is_fn(time_now)?time_now():time_now
           {
            const before=_
            {
             const _=remove_old_files(dir_tmp)
             {
              const old_tmp=_
              {
               const _=remove_old_files(dir_log)
               {
                const old_log=_
                {
                 const _=is_fn(time_now)?time_now():time_now
                 {
                  const after=_
                  {
                   const _=sub(after,before)
                   {
                    const profile=_
                    {
                     const _=add(old_tmp,old_log)
                     {
                      const old_file=_
                      {
                       const _=false
                       {
                        let message=_
                        {
                         if(gt(old_file,0))
                         {
                          message=true
                         }
                         else if(gt(profile,2))
                         {
                          message=true
                         }
                         if(is_fn(message)?message():message)
                         {
                          const _=to_fixed(profile)
                          {
                           const profile=_
                           {
                            const _=concat(profile,"s")
                            {
                             const profile=_
                             {
                              const _=null
                              {
                               let o=_
                               {
                                if(gt(old_file,0))
                                {
                                 o={old_file,profile}
                                }
                                else
                                {
                                 o={profile}
                                }
                                const _=obj_option(o)
                                {
                                 const s=_
                                 log("clean-tmp",s)
                                }
                               }
                              }
                             }
                            }
                           }
                          }
                         }
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
 function remove_old_files(dir)
 {
  check_arg(is_str,dir,"dir","str")
  check_arity("same",arguments.length,1)
  const _=0
  {
   let r=_
   {
    const _=is_fn(time_now)?time_now():time_now
    {
     const begin=_
     {
      const _=dir_load(dir,true)
      {
       const paths=_
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
                const _=is_fn(time_now)?time_now():time_now
                {
                 const now=_
                 {
                  const _=sub(now,begin)
                  {
                   const delay=_
                   {
                    if(gt(delay,1))
                     break
                    if(!(is_fs(v)))
                     continue
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
                          const _=false
                          {
                           let remove=_
                           {
                            if(is_skeleton(v))
                            {
                             remove=true
                            }
                            else if(is_dir(v))
                             nop()
                            else if(is_file(v))
                            {
                             remove=true
                            }
                            else
                             stop()
                            if(is_fn(remove)?remove():remove)
                            {
                             fs_remove(v)
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
                                   const _=time_delay(age)
                                   {
                                    const age=_
                                    {
                                     const _={path,age}
                                     {
                                      const o=_
                                      {
                                       const _=obj_option(o)
                                       {
                                        const s=_
                                        {
                                         r=inc(r)
                                        }
                                       }
                                      }
                                     }
                                    }
                                   }
                                  }
                                 }
                                }
                               }
                              }
                             }
                            }
                           }
                          }
                         }
                        }
                       }
                      }
                     }
                    }
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
 function is_skeleton(x)
 {
  check_arg(is_str,x,"x","str")
  check_arity("same",arguments.length,1)
  if(is_file(x))
   return false
  const _=dir_load(x,true)
  {
   const paths=_
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
            if(is_dir(v))
            {
             if(!(is_skeleton(v)))
              return false
            }
            else if(is_file(v))
             return false
            else
             stop()
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
 try
 {
  clean_tmp()
 }
 catch
 {
 }
 dir_change(cwd)
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
             if(match(base,y))
              push(r,v)
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
           else if(is_symbolic_link(v))
           {
           }
           else
            stop()
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
               const _=path_concat(dir,v)
               {
                const s=_
                {
                 if(is_file(s))
                  push(r,s)
                 else if(is_dir(s))
                 {
                  if(is_fn(with_dirs)?with_dirs():with_dirs)
                   push(r,s)
                 }
                 else if(is_symbolic_link(s))
                 {
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
           const _=file_size(v)
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
      return is_fn(r)?r():r
     }
    }
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
function file_write(path,data)
{
 check_arg(is_str,path,"path","str")
 check_arg(is_str,data,"data","str")
 check_arity("same",arguments.length,2)
 const _=path_unique(path)
 {
  const tmp=_
  {
   no_umask(fs.writeFileSync,tmp,data)
   try
   {
    fs_rename(tmp,path)
   }
   catch(e)
   {
    fs_remove(tmp)
    throw is_fn(e)?e():e
   }
  }
 }
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
function fs_find(dir,pattern)
{
 check_arg(is_str,dir,"dir","str")
 check_arg(is_str,pattern,"pattern","str")
 check_arity("same",arguments.length,2)
 const _=dir_load(dir,true)
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
         if(match(v,pattern))
          return is_fn(v)?v():v
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
function fs_locate(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 const _=is_fn(dir_current)?dir_current():dir_current
 {
  const current=_
  {
   const _=path_split(current)
   {
    const parts=_
    {
     while(is_full(parts))
     {
      const _=dup(parts)
      {
       const a=_
       {
        push(a,x)
        const _=path_join(a)
        {
         const path=_
         {
          if(is_fs(path))
           return is_fn(path)?path():path
          drop(parts)
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
function fs_rename(source,target)
{
 check_arg(is_str,source,"source","str")
 check_arg(is_str,target,"target","str")
 check_arity("same",arguments.length,2)
 fs.renameSync(source,target)
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
 function on_uncaught_exception(error,kind)
 {
  check_arg(is_obj,error,"error","obj")
  check_arg(is_str,kind,"kind","str")
  check_arity("same",arguments.length,2)
  try
  {
   const _={}
   {
    const _error=_
    {
     const _=Object.getOwnPropertyNames(error)
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
             const _=get(error,v)
             {
              const v2=_
              put(_error,v,v2)
             }
            }
           }
          }
         }
        }
        {
         put(_error,"kind",kind)
         const _=report_init(_error)
         {
          const report=_
          {
           report_log(report)
           if(is_fn(is_remote)?is_remote():is_remote)
            report_mail(report)
           deinit_common()
          }
         }
        }
       }
      }
     }
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
 function on_warning(warning)
 {
  check_arg(is_obj,warning,"warning","obj")
  check_arity("same",arguments.length,1)
  try
  {
   const _=split(warning.stack)
   {
    const stack=_
    {
     shift(stack)
     unshift(stack,warning.message)
     const _=join(stack)
     {
      const stack=_
      {
       const _=report_init(stack)
       {
        const report=_
        {
         report_log(report)
         if(is_fn(is_remote)?is_remote():is_remote)
          report_mail(report)
         deinit_common()
        }
       }
      }
     }
    }
   }
  }
  catch(e)
  {
   fallback_error("on-warning",e,warning)
  }
  zombie=true
  process.exit(2)
 }
 process.setMaxListeners(1024)
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
 global.tty_column=is_fn(tty_width)?tty_width():tty_width
 global.color=false
 global.log_file=true
 global.binary=is_fn(process.execPath)?process.execPath():process.execPath
 global.cwd=is_fn(dir_current)?dir_current():dir_current
 global.script=at(process.argv,1)
 global.script=path_real(script)
 global.cpu_time=null
 const _=is_fn(os_home)?os_home():os_home
 {
  const home=_
  {
   global.config_mabynogy=path_concat(home,".config",mabynogy)
   const _=to_str(process.pid)
   {
    const pid=_
    {
     const _=pad_l(pid,"0",6)
     {
      const pid=_
      {
       global.config_tmp=path_concat(config_mabynogy,"tmp",app,pid)
       dir_make(config_tmp)
       const _=concat(app,".txt")
       {
        const base=_
        {
         global.config_log=path_concat(config_mabynogy,"log",base)
         process.on("uncaughtExceptionMonitor",on_uncaught_exception)
         process.on("warning",on_warning)
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
                             const _=trunc(indent)
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
 check_arg(is_ip,x,"x","ip")
 check_arity("same",arguments.length,1)
 const _=2
 {
  const timeout=_
  {
   const _=silent(os_execute,"host","-W",timeout,x)
   {
    const a=_
    {
     const _=split(a)
     {
      const a=_
      {
       const _=front(a)
       {
        const first=_
        {
         const _=to_lower(first)
         {
          const first=_
          {
           const _=back(a)
           {
            const last=_
            {
             const _=to_lower(last)
             {
              const last=_
              {
               if(contain(first,"timed out"))
                return null
               if(contain(last,"not found"))
                return null
               if(contain(last,"has no ptr record"))
                return null
               const _=split(last," ")
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
                    {
                     if(!(is_domain(r)))
                      return null
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
         if(is_ip4(v))
          return is_fn(v)?v():v
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
function ip_v6()
{
 check_arity("same",arguments.length,0)
 const _=is_fn(ip_list)?ip_list():ip_list
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
         if(is_ip6(v))
          return is_fn(v)?v():v
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
function is_ssh()
{
 check_arity("same",arguments.length,0)
 return has(process.env,"SSH_CLIENT")
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
 return [binary,"--trace-uncaught","--trace-deprecation","--trace-warnings","--expose-gc"]
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
function* os_batch(commands)
{
 check_arg(is_arr,commands,"commands","arr")
 check_arity("same",arguments.length,1)
 const _=dup(commands)
 {
  const commands=_
  {
   const _=[]
   {
    const contexts=_
    {
     const _=is_fn(os.availableParallelism)?os.availableParallelism():os.availableParallelism
     {
      const cpu=_
      {
       const _=dec(cpu)
       {
        const cpu=_
        {
         try
         {
          while(true)
          {
           if(is_empty(commands))
           {
            if(is_empty(contexts))
             break
           }
           const _=[]
           {
            const alives=_
            {
             while(is_full(contexts))
             {
              const _=shift(contexts)
              {
               const context=_
               {
                const _=false
                {
                 let closed=_
                 {
                  if(is_fn(context.closed)?context.closed():context.closed)
                   os_end(context)
                  else
                  {
                   push(alives,context)
                   yield* sleep(0.1)
                  }
                 }
                }
               }
              }
             }
             clear(contexts)
             append(contexts,alives)
             while(is_full(commands))
             {
              if(gte(contexts.length,cpu))
               break
              const _=shift(commands)
              {
               const command=_
               {
                const _=os_parallel(...command)
                {
                 const context=_
                 push(contexts,context)
                }
               }
              }
             }
            }
           }
          }
         }
         catch(e)
         {
          const _=is_fn(contexts)?contexts():contexts
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
                 v.child.kill()
                }
               }
              }
             }
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
  }
 }
}
function* os_capture(x,...y)
{
 check_arg(is_str,x,"x","str")
 check_arity("gte",arguments.length,1)
 const _=[x,...y]
 {
  const command=_
  {
   const _=false
   {
    let closed=_
    {
     const _=false
     {
      let logged=_
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
                    if(!(is_fn(logged)?logged():logged))
                    {
                     os_log(os_capture,status,"","",...command)
                     logged=true
                    }
                    const _=strip_r(s,lf)
                    {
                     const s=_
                     {
                      if(same(key,"out"))
                       log(s)
                      else if(same(key,"err"))
                      {
                       const _=concat(" ",app," err> ")
                       {
                        const prompt=_
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
                                   const _=concat(prompt,v)
                                   {
                                    const s=_
                                    {
                                     const _=head(s,tty_column)
                                     {
                                      const s=_
                                      {
                                       if(lt(s.length,tty_column))
                                       {
                                        const _=concat(s,"\r\n")
                                        {
                                         const s=_
                                         push(a,s)
                                        }
                                       }
                                       else
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
                              {
                               const _=implode(a)
                               {
                                const s=_
                                stdout_write(s)
                               }
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
                       stop()
                      set(buffer,key,"")
                     }
                    }
                   }
                  }
                 }
                }
               }
               function on_out(data)
               {
                check_arg(is_obj,data,"data","obj")
                check_arity("same",arguments.length,1)
                const _=to_str(data)
                {
                 const s=_
                 {
                  print("out",s)
                  out=concat(out,s)
                 }
                }
               }
               function on_err(data)
               {
                check_arg(is_obj,data,"data","obj")
                check_arity("same",arguments.length,1)
                const _=to_str(data)
                {
                 const s=_
                 {
                  const _=ansi_strip(s)
                  {
                   const s=_
                   {
                    print("err",s)
                    err=concat(err,s)
                   }
                  }
                 }
                }
               }
               function on_close(x,y)
               {
                if(is_null(x))
                {
                }
                else if(is_int(x))
                {
                }
                else
                 stop()
                status=is_fn(x)?x():x
                closed=true
               }
               function on_error(error)
               {
                check_arg(is_obj,error,"error","obj")
                check_arity("same",arguments.length,1)
                flower("on-error")
                throw is_fn(error)?error():error
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
                             const _=on(on_error)
                             {
                              const on_error=_
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
                                   child.on("error",on_error)
                                   while(!(is_fn(closed)?closed():closed))
                                    yield
                                   if(is_full(buffer.out))
                                    print("out",lf)
                                   if(is_full(buffer.err))
                                    print("err",lf)
                                   process.removeListener("SIGINT",on_sigint)
                                   const _=trim_r(out)
                                   {
                                    const out=_
                                    {
                                     const _=trim_r(err)
                                     {
                                      const err=_
                                      {
                                       if(!(is_fn(logged)?logged():logged))
                                        os_log(os_capture,status,"","",...command)
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
     }
    }
   }
  }
 }
}
function os_cpu_count()
{
 check_arity("same",arguments.length,0)
 const _=is_fn(os.cpus)?os.cpus():os.cpus
 {
  const cpus=_
  return is_fn(cpus.length)?cpus.length():cpus.length
 }
}
function os_cpu_load()
{
 check_arity("same",arguments.length,0)
 const _=is_fn(os.cpus)?os.cpus():os.cpus
 {
  const cpus=_
  {
   const _=0
   {
    let time=_
    {
     const _=0
     {
      let idle=_
      {
       const _=is_fn(cpus)?cpus():cpus
       {
        for(const v of _)
        {
         const _=is_fn(v.times)?v.times():v.times
         {
          const times=_
          {
           const _=is_fn(times)?times():times
           {
            for(const k in _)
            {
             const _=get(times,k)
             {
              const v=_
              {
               time=add(time,v)
              }
             }
            }
            {
             idle=add(idle,times.idle)
            }
           }
          }
         }
        }
        {
         if(is_null(cpu_time))
         {
          cpu_time={time,idle}
          return 0
         }
         const _=sub(time,cpu_time.time)
         {
          const delta_time=_
          {
           const _=sub(idle,cpu_time.idle)
           {
            const delta_idle=_
            {
             if(same(delta_time,0))
              return 100
             cpu_time.time=is_fn(time)?time():time
             cpu_time.idle=is_fn(idle)?idle():idle
             const _=div(delta_idle,delta_time)
             {
              const r=_
              {
               const _=sub(1,r)
               {
                const r=_
                {
                 const _=mul(r,100)
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
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function* os_detach(x,...y)
{
 check_arg(is_str,x,"x","str")
 check_arity("gte",arguments.length,1)
 function on_error(error)
 {
  check_arg(is_obj,error,"error","obj")
  check_arity("same",arguments.length,1)
  flower("on-error")
  throw is_fn(error)?error():error
 }
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
         const _=on(on_error)
         {
          const on_error=_
          {
           r.on("error",on_error)
           r.unref()
           yield* sleep(0.1)
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
function os_end(context)
{
 check_arg(is_obj,context,"context","obj")
 check_arity("same",arguments.length,1)
 check(context.closed)
 const _=is_fn(context.status)?context.status():context.status
 {
  const status=_
  {
   const _=is_fn(context.command)?context.command():context.command
   {
    const command=_
    {
     const _=is_fn(context.out)?context.out():context.out
     {
      const out=_
      {
       const _=is_fn(context.err)?context.err():context.err
       {
        const err=_
        {
         const _=false
         {
          let report=_
          {
           if(is_null(status))
           {
           }
           else if(is_int(status))
           {
            if(different(status,0))
            {
             report=true
            }
           }
           else
            stop()
           if(is_full(out))
           {
            report=true
           }
           if(is_full(err))
           {
            report=true
           }
           if(is_fn(report)?report():report)
            os_report(os_parallel,status,out,err,...command)
           const _=front(command)
           {
            const command=_
            {
             const _=to_lit(command)
             {
              const command=_
              {
               if(is_null(status))
               {
                const _=space("Command",command,"failed")
                {
                 const message=_
                 stop(message)
                }
               }
               else if(different(status,0))
               {
                const _={status}
                {
                 const o=_
                 {
                  const _=obj_option(s)
                  {
                   const s=_
                   {
                    const _=paren(s)
                    {
                     const s=_
                     {
                      const _=space("Command",command,"failed",s)
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
    }
   }
  }
 }
}
function os_execute(...x)
{
 const _=os_run(false,...x)
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
function os_log(call,status,out,err,...args)
{
 check_arg(is_xn,call,"call","xn")
 check_arg(is_str,out,"out","str")
 check_arg(is_str,err,"err","str")
 check_arity("gte",arguments.length,3)
 const _=false
 {
  let report=_
  {
   if(is_null(status))
   {
    report=true
   }
   else if(is_int(status))
   {
    if(different(status,0))
    {
     report=true
    }
   }
   else
    stop()
   if(is_full(err))
   {
    report=true
   }
   if(is_fn(report)?report():report)
    os_report(call,status,out,err,...args)
  }
 }
}
function os_parallel(x,...y)
{
 check_arg(is_str,x,"x","str")
 check_arity("gte",arguments.length,1)
 const _=[x,...y]
 {
  const command=_
  {
   const _=false
   {
    const closed=_
    {
     const _=null
     {
      const status=_
      {
       const _=""
       {
        const out=_
        {
         const _=""
         {
          const err=_
          {
           const _=null
           {
            const child=_
            {
             const _={command,closed,status,out,err,child}
             {
              const context=_
              {
               function on_out(data)
               {
                check_arg(is_obj,data,"data","obj")
                check_arity("same",arguments.length,1)
                const _=to_str(data)
                {
                 const s=_
                 {
                  const _=ansi_strip(s)
                  {
                   const s=_
                   {
                    context.out=concat(context.out,s)
                   }
                  }
                 }
                }
               }
               function on_err(data)
               {
                check_arg(is_obj,data,"data","obj")
                check_arity("same",arguments.length,1)
                const _=to_str(data)
                {
                 const s=_
                 {
                  const _=ansi_strip(s)
                  {
                   const s=_
                   {
                    context.err=concat(context.err,s)
                   }
                  }
                 }
                }
               }
               function on_close(x,y)
               {
                if(is_null(x))
                {
                }
                else if(is_int(x))
                {
                 context.status=is_fn(x)?x():x
                }
                else
                 stop()
                context.closed=true
                context.out=trim_r(context.out)
                context.err=trim_r(context.err)
                process.removeListener("SIGINT",context.on_sigint)
               }
               function on_error(error)
               {
                check_arg(is_obj,error,"error","obj")
                check_arity("same",arguments.length,1)
                flower("on-error")
                throw is_fn(error)?error():error
               }
               context.child=cp.spawn(x,y)
               function on_sigint(x)
               {
                check_arg(is_str,x,"x","str")
                check_arity("same",arguments.length,1)
                context.child.kill(x)
               }
               context.on_sigint=sigint(on_sigint)
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
                     const _=on(on_error)
                     {
                      const on_error=_
                      {
                       const _=is_fn(context.child.stdout)?context.child.stdout():context.child.stdout
                       {
                        const stdout=_
                        {
                         const _=is_fn(context.child.stderr)?context.child.stderr():context.child.stderr
                         {
                          const stderr=_
                          {
                           stdout.on("data",on_out)
                           stderr.on("data",on_err)
                           context.child.on("close",on_close)
                           context.child.on("error",on_error)
                           return is_fn(context)?context():context
                          }
                         }
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
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
 const _=[x,...y]
 {
  const command=_
  {
   const _=false
   {
    let closed=_
    {
     const _=false
     {
      let logged=_
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
                    if(!(is_fn(logged)?logged():logged))
                    {
                     os_log(os_prompt,status,"","",...command)
                     logged=true
                    }
                    const _=concat(" ",app," ",key,"> ")
                    {
                     const prompt=_
                     {
                      const _=strip_r(s,lf)
                      {
                       const s=_
                       {
                        const _=txt_prepend(s,prompt)
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
               function on_out(data)
               {
                check_arg(is_obj,data,"data","obj")
                check_arity("same",arguments.length,1)
                const _=to_str(data)
                {
                 const s=_
                 print("out",s)
                }
               }
               function on_err(data)
               {
                check_arg(is_obj,data,"data","obj")
                check_arity("same",arguments.length,1)
                const _=to_str(data)
                {
                 const s=_
                 print("err",s)
                }
               }
               function on_close(x,y)
               {
                if(is_null(x))
                {
                }
                else if(is_int(x))
                {
                }
                else
                 stop()
                status=is_fn(x)?x():x
                closed=true
               }
               function on_error(error)
               {
                check_arg(is_obj,error,"error","obj")
                check_arity("same",arguments.length,1)
                flower("on-error")
                throw is_fn(error)?error():error
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
                         const _=on(on_error)
                         {
                          const on_error=_
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
                               child.on("error",on_error)
                               while(!(is_fn(closed)?closed():closed))
                                yield
                               if(is_full(buffer.out))
                                print("out",lf)
                               if(is_full(buffer.err))
                                print("err",lf)
                               process.removeListener("SIGINT",on_sigint)
                               if(!(is_fn(logged)?logged():logged))
                                os_log(os_prompt,status,"","",...command)
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
function os_report(call,status,out,err,...args)
{
 check_arg(is_xn,call,"call","xn")
 check_arg(is_str,out,"out","str")
 check_arg(is_str,err,"err","str")
 check_arity("gte",arguments.length,3)
 const _=strip_l(call.name,"os_")
 {
  const call=_
  {
   const _=to_lisp(call)
   {
    const call=_
    {
     const _=join(args," ")
     {
      const command=_
      {
       const _={command}
       {
        let o=_
        {
         if(is_int(status))
         {
          if(different(status,0))
          {
           o=obj_unshift(o,"status",status)
          }
         }
         const _=obj_option(o)
         {
          const s=_
          {
           log(call,s)
           if(is_full(out))
           {
            const _=txt_compact(out)
            {
             const out=_
             {
              const _=split(out)
              {
               const out=_
               {
                const _=tail(out,512)
                {
                 const out=_
                 {
                  const _=concat(" ",app," out> ")
                  {
                   const prompt=_
                   {
                    const _=txt_prepend(out,prompt)
                    {
                     const s=_
                     {
                      const _=join(s)
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
           if(is_full(err))
           {
            const _=txt_compact(err)
            {
             const err=_
             {
              const _=split(err)
              {
               const err=_
               {
                const _=tail(err,512)
                {
                 const err=_
                 {
                  const _=concat(" ",app," err> ")
                  {
                   const prompt=_
                   {
                    const _=txt_prepend(err,prompt)
                    {
                     const s=_
                     {
                      const _=join(s)
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
  }
 }
}
function os_run(binary,x,...y)
{
 check_arg(is_bool,binary,"binary","bool")
 check_arg(is_str,x,"x","str")
 check_arity("gte",arguments.length,2)
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
        const child=_
        {
         if(has(child,"error"))
          throw is_fn(child.error)?child.error():child.error
         const _=""
         {
          let out=_
          {
           if(is_null(child.stdout))
           {
           }
           else if(is_str(child.stdout))
           {
            out=to_str(child.stdout)
            if(!(is_fn(binary)?binary():binary))
            {
             out=ansi_strip(out)
            }
            out=trim_r(out)
           }
           else
            stop()
           const _=""
           {
            let err=_
            {
             if(is_null(child.stderr))
             {
             }
             else if(is_str(child.stderr))
             {
              err=to_str(child.stderr)
              if(!(is_fn(binary)?binary():binary))
              {
               err=ansi_strip(err)
              }
              err=trim_r(err)
             }
             else
              stop()
             const _=is_fn(child.status)?child.status():child.status
             {
              const status=_
              {
               os_log(os_run,status,out,err,x,...y)
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
function os_sleep(x)
{
 check_arg(is_num,x,"x","num")
 check_arity("same",arguments.length,1)
 check(gte,x,0)
 os_execute("sleep",x)
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
      const child=_
      {
       if(has(child,"error"))
        throw is_fn(child.error)?child.error():child.error
       const _=is_fn(child.status)?child.status():child.status
       {
        const r=_
        {
         os_log(os_system,r,"","",x,...y)
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
function* os_wait(contexts)
{
 check_arg(is_arr,contexts,"contexts","arr")
 check_arity("same",arguments.length,1)
 const _=dup(contexts)
 {
  const contexts=_
  {
   try
   {
    while(is_full(contexts))
    {
     const _=shift(contexts)
     {
      const context=_
      {
       if(is_fn(context.closed)?context.closed():context.closed)
        os_end(context)
       else
       {
        push(contexts,context)
        yield* sleep(0.1)
       }
      }
     }
    }
   }
   catch(e)
   {
    const _=is_fn(contexts)?contexts():contexts
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
           v.child.kill()
          }
         }
        }
       }
       throw is_fn(e)?e():e
      }
     }
    }
   }
  }
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
         const _=path_base(x)
         {
          const base=_
          {
           const _=path_concat(dir,base)
           {
            const path=_
            return path_unique(path)
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function path_unique(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
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
        const _=is_fn(random)?random():random
        {
         const id=_
         {
          const _=to_base36(id)
          {
           const id=_
           {
            const _=head(id,7)
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
  mail(author,report.message,html)
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
  const _=is_fn(process.pid)?process.pid():process.pid
  {
   const pid=_
   {
    const _=is_fn(x)?x():x
    {
     const signal=_
     {
      const _={pid,signal,n}
      {
       const o=_
       {
        const _=obj_option(o)
        {
         const s=_
         {
          log(app,s)
          callback(x)
         }
        }
       }
      }
     }
    }
   }
  }
 }
 const _=on(on_sigint)
 {
  const r=_
  {
   process.once("SIGINT",r)
   return r
  }
 }
}
function stdout_write(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 const _=Buffer.from(x)
 {
  const buffer=_
  {
   const _=0
   {
    let offset=_
    {
     while(lt(offset,buffer.length))
     {
      const _=sub(buffer.length,offset)
      {
       const rest=_
       {
        const _=0
        {
         let n=_
         {
          try
          {
           n=fs.writeSync(process.stdout.fd,buffer,offset,rest)
          }
          catch(e)
          {
           if(same(e.code,"EAGAIN"))
           {
            os_sleep(0.1)
            continue
           }
           throw is_fn(e)?e():e
          }
          offset=add(offset,n)
         }
        }
       }
      }
     }
    }
   }
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
  return buffer.toString("base64")
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
 const _=concat(".",x)
 {
  let r=_
  {
   try
   {
    r=fs_locate(r)
   }
   catch
   {
    r=path_concat(common,r)
   }
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
 global.ssh_timeout=2
 global.common=fs_locate("common")
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
  const _=app_token(mabynogy)
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
                    }
                   }
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
            if(!(contain(special,v)))
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
function* rsync(token,...args)
{
 check_arg(is_str,token,"token","str")
 check_arity("gte",arguments.length,1)
 const _=[]
 {
  const a=_
  {
   const _=concat("ssh -4 -o ConnectTimeout=",ssh_timeout," -o ConnectionAttempts=1")
   {
    const timeout=_
    {
     const _=concat("--rsh=",timeout)
     {
      const timeout=_
      {
       push(a,"rsync")
       push(a,timeout)
       push(a,"--recursive")
       push(a,"--perms")
       push(a,"--delete")
       push(a,"--compress-level=9")
       append(a,args)
       return yield* ssh_pass(token,...a)
      }
     }
    }
   }
  }
 }
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
     check(is_xn,first)
     const _=shift(args)
     {
      const token=_
      {
       check(is_str,token)
       const _=["sshpass","-p",token,...args]
       {
        const arguments=_
        return yield* redact(token,first,...arguments)
       }
      }
     }
    }
   }
  }
 }
}
function* ssh(token,...args)
{
 check_arg(is_str,token,"token","str")
 check_arity("gte",arguments.length,1)
 const _=[]
 {
  const a=_
  {
   const _=concat("ConnectTimeout=",ssh_timeout)
   {
    const timeout=_
    {
     push(a,"ssh")
     push(a,"-4")
     push(a,"-o")
     push(a,timeout)
     push(a,"-o")
     push(a,"ConnectionAttempts=1")
     push(a,"-o")
     push(a,"Compression=yes")
     append(a,args)
     return yield* ssh_pass(token,...a)
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
function sudo_dir_reset(path)
{
 check_arg(is_str,path,"path","str")
 check_arity("same",arguments.length,1)
 sudo_fs_remove(path)
 sudo_dir_make(path)
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
 const _=sudo(os_run,true,"cat",path)
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
 const _=sudo(os_run,false,"stat","--terse","--format=%F",x)
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
 const _=sudo(os_run,false,"stat","--terse","--format=%F",x)
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
function sudo(x,...y)
{
 if(!(is_fn(x)))
  return sudo(os_system,x,...y)
 if(same(x,os_run))
 {
  const _=dup(y)
  {
   const y=_
   {
    const _=shift(y)
    {
     const binary=_
     {
      check(is_bool,binary)
      return x(binary,"sudo",...y)
     }
    }
   }
  }
 }
 return x("sudo",...y)
}
function unzip(x,...y)
{
 if(!(is_fn(x)))
  return unzip(os_system,x,...y)
 return x("unzip",...y)
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
function zip(x,...y)
{
 if(!(is_fn(x)))
  return zip(os_system,x,...y)
 return x("zip","--recurse-paths","-9",...y)
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
   const _={app}
   {
    const o=_
    {
     const _=obj_option(o)
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
           const _=copy(v)
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
           const _=copy(v)
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
 if(is_full(children))
 {
  const _=is_fn(args)?args():args
  {
   const _args=_
   {
    const _=at(args,1)
    {
     const operator=_
     {
      const _=[]
      {
       const args=_
       {
        const _={operator,args,children,source}
        {
         const node=_
         {
          const _=cpl_cson(cpl,node)
          {
           const r=_
           {
            const _=front(_args)
            {
             const name=_
             {
              const _=concat(keyword," ",name,"=")
              {
               const code=_
               {
                const _={code,source}
                {
                 const o=_
                 {
                  unshift(r,o)
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
     check(is_identifier,name)
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
           const _=cpl_translate(cpl,v)
           {
            const a=_
            append(r,a)
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
   const _=to_c(file)
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
          const file=_
          {
           const _=to_lit(name)
           {
            const name=_
            {
             const _=space("The file",file,"must define a function or a generator nammed",name)
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
   const _=os_run(false,...argv,"--check",path)
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
            try
            {
             if(!(is_callable(v.operator)))
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
            catch(e)
            {
             unshift(cpl.stack,v)
             throw is_fn(e)?e():e
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
            }
           }
          }
         }
         return {operator,count}
        }
       }
      }
     }
    }
   }
  }
 }
 function is_callable(operator)
 {
  check_arg(is_str,operator,"operator","str")
  check_arity("same",arguments.length,1)
  if(same(operator,"fn"))
   return true
  if(same(operator,"gn"))
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
 const _=cpl_parse(cpl,path)
 {
  let nodes=_
  {
   cpl_check_fn(cpl,nodes,path)
   try
   {
    nodes=cpl_check(cpl,nodes)
    nodes=cpl_for(cpl,nodes)
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
function cpl_concat(cpl)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arity("same",arguments.length,1)
 const _=[]
 {
  const r=_
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
          push(r,v.code)
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
function cpl_cson(cpl,node)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_obj,node,"node","obj")
 check_arity("same",arguments.length,2)
 check(is_empty,node.args)
 function compile(node)
 {
  check_arg(is_obj,node,"node","obj")
  check_arity("same",arguments.length,1)
  const _=[]
  {
   const r=_
   {
    const _=is_fn(node.operator)?node.operator():node.operator
    {
     const operator=_
     {
      const _=is_fn(node.children)?node.children():node.children
      {
       const children=_
       {
        const _=is_fn(node.source)?node.source():node.source
        {
         const source=_
         {
          if(is_tree(operator))
          {
           if(is_empty(children))
           {
            const _=""
            {
             let code=_
             {
              if(same(operator,"arr"))
              {
               code="[]"
              }
              else if(same(operator,"obj"))
              {
               code="{}"
              }
              else
               stop()
              const _=dup(source)
              {
               const source=_
               {
                const _={code,source}
                {
                 const o=_
                 {
                  push(r,o)
                  return is_fn(r)?r():r
                 }
                }
               }
              }
             }
            }
           }
          }
          if(same(operator,"arr"))
          {
           const _="["
           {
            const code=_
            {
             const _=dup(source)
             {
              const source=_
              {
               const _={code,source}
               {
                const o=_
                {
                 push(r,o)
                 const _=is_fn(children)?children():children
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
                         check(is_empty,v.args)
                         const _=is_fn(v.operator)?v.operator():v.operator
                         {
                          const operator=_
                          {
                           if(is_tree(operator))
                           {
                            const _=cpl_cson(cpl,v)
                            {
                             const a=_
                             {
                              const _=indent_nodes(a)
                              {
                               const a=_
                               append(r,a)
                              }
                             }
                            }
                           }
                           else if(is_data(operator))
                           {
                            const _=concat(" ",operator)
                            {
                             const code=_
                             {
                              const _=dup(v.source)
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
                           else
                            stop()
                           if(!(is_last(children,i)))
                           {
                            const _=back(r)
                            {
                             const o=_
                             {
                              o.code=concat(o.code,",")
                             }
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
                     const _="]"
                     {
                      const code=_
                      {
                       const _=dup(source)
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
           }
          }
          else if(same(operator,"obj"))
          {
           const _="{"
           {
            const code=_
            {
             const _=dup(source)
             {
              const source=_
              {
               const _={code,source}
               {
                const o=_
                {
                 push(r,o)
                 const _=[]
                 {
                  const keys=_
                  {
                   const _=is_fn(children)?children():children
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
                           const _=is_fn(v.args)?v.args():v.args
                           {
                            const args=_
                            {
                             check(is_single,args)
                             const _=is_fn(v.operator)?v.operator():v.operator
                             {
                              const key=_
                              {
                               check(is_key_str,key)
                               const _=is_fn(key)?key():key
                               {
                                let key_content=_
                                {
                                 if(is_lit(key_content))
                                 {
                                  const _=unwrap(key_content)
                                  {
                                   const s=_
                                   {
                                    if(is_name(s))
                                    {
                                     key_content=is_fn(s)?s():s
                                    }
                                   }
                                  }
                                 }
                                 if(contain(keys,key_content))
                                 {
                                  const _=to_lit(key_content)
                                  {
                                   const key=_
                                   {
                                    const _=space("The key",key,"is duplicated")
                                    {
                                     const message=_
                                     stop(message)
                                    }
                                   }
                                  }
                                 }
                                 push(keys,key_content)
                                 const _=front(args)
                                 {
                                  const value=_
                                  {
                                   if(is_tree(value))
                                   {
                                    const _=dup(v)
                                    {
                                     const o=_
                                     {
                                      const _=front(args)
                                      {
                                       const s=_
                                       {
                                        o.operator=is_fn(s)?s():s
                                        clear(o.args)
                                        const _=cpl_cson(cpl,o)
                                        {
                                         const a=_
                                         {
                                          const _=indent_nodes(a)
                                          {
                                           const a=_
                                           {
                                            const _=concat(" ",key,":")
                                            {
                                             const code=_
                                             {
                                              const _=dup(source)
                                              {
                                               const source=_
                                               {
                                                const _={code,source}
                                                {
                                                 const o=_
                                                 {
                                                  push(r,o)
                                                  append(r,a)
                                                 }
                                                }
                                               }
                                              }
                                             }
                                            }
                                           }
                                          }
                                         }
                                        }
                                       }
                                      }
                                     }
                                    }
                                   }
                                   else if(is_data(value))
                                   {
                                    const _=concat(" ",key,":",value)
                                    {
                                     const code=_
                                     {
                                      const _=dup(v.source)
                                      {
                                       const source=_
                                       {
                                        const _={code,source}
                                        {
                                         const node=_
                                         push(r,node)
                                        }
                                       }
                                      }
                                     }
                                    }
                                   }
                                   else
                                    stop()
                                   if(!(is_last(children,i)))
                                   {
                                    const _=back(r)
                                    {
                                     const node=_
                                     {
                                      node.code=concat(node.code,",")
                                     }
                                    }
                                   }
                                  }
                                 }
                                }
                               }
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
                       const _="}"
                       {
                        const code=_
                        {
                         const _=dup(source)
                         {
                          const source=_
                          {
                           const _={code,source}
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
          else
           stop()
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
 function indent_nodes(x)
 {
  check_arg(is_arr,x,"x","arr")
  check_arity("same",arguments.length,1)
  const _=dup(x)
  {
   const r=_
   {
    const _=is_fn(r)?r():r
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
            v.code=concat(" ",v.code)
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
 function is_key_str(x)
 {
  if(!(is_str(x)))
   return false
  if(is_identifier(x))
   return true
  if(is_numeric(x))
   return true
  if(is_lit(x))
   return true
  return false
 }
 try
 {
  return compile(node)
 }
 catch(e)
 {
  unshift(cpl.stack,node)
  throw is_fn(e)?e():e
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
                  }
                 }
                }
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
                     let path=_
                     {
                      if(!(is_null(path)))
                      {
                       path=path_compact(source.path)
                      }
                      const _=is_fn(source.index)?source.index():source.index
                      {
                       const ncs=_
                       {
                        const _=inc(ncs)
                        {
                         const ncs=_
                         {
                          const _={ncs,cs}
                          {
                           let o=_
                           {
                            if(!(is_null(path)))
                            {
                             o=obj_unshift(o,"path",path)
                            }
                            push(r,o)
                            const _=is_fn(children)?children():children
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
                                    const _=dump_ast(v)
                                    {
                                     const t=_
                                     {
                                      const _=is_fn(t)?t():t
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
                                              v.cs=txt_indent(v.cs)
                                             }
                                            }
                                           }
                                          }
                                         }
                                         append(r,t)
                                        }
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
function cpl_escape_lisp(cpl,nodes)
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
           const _=copy(v)
           {
            const node=_
            {
             const _=is_fn(node.operator)?node.operator():node.operator
             {
              const operator=_
              {
               if(is_lisp(operator))
               {
                node.operator=to_lit(operator)
               }
               const _=is_fn(node.args)?node.args():node.args
               {
                const args=_
                {
                 const _=is_fn(args)?args():args
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
                         if(is_lisp(v))
                         {
                          const _=to_lit(v)
                          {
                           const s=_
                           at(args,i,s)
                          }
                         }
                        }
                       }
                      }
                     }
                    }
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
   const _=cpl_concat(cpl)
   {
    const a=_
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
                     const _=path_compact(source.path)
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
                                          const index=_
                                          push(value,index)
                                         }
                                        }
                                       }
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
                                           const _=js_encode(contents)
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
function cpl_include(cpl)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arity("same",arguments.length,1)
 function compile_cache(path)
 {
  check_arg(is_str,path,"path","str")
  check_arity("same",arguments.length,1)
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
        if(has(cache,path))
        {
         const _=get(cache,path)
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
         const _=get(cache,path)
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
        const _=time_hn(modified)
        {
         const modified_=_
         {
          const _={path,modified_}
          {
           const o=_
           {
            const _=obj_option(o)
            {
             const s=_
             {
              trace("compile",s)
              const _=cpl_compile(cpl,path)
              {
               const nodes=_
               {
                declare_fn(path,nodes)
                const _={modified,nodes}
                {
                 const entry=_
                 {
                  set(cache,path,entry)
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
    const _=to_c(fn)
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
            const _=dir_load(v)
            {
             const a=_
             append(r,a)
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
 const _=is_fn(pkg_init)?pkg_init():pkg_init
 {
  const include=_
  {
   const _=pkg_resolve(include,cpl.app)
   {
    const paths=_
    {
     const _=get_files(paths)
     {
      const files=_
      {
       const _=is_fn(files)?files():files
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
     return json_load(path)
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
function cpl_load_str(cpl,str)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_str,str,"str","str")
 check_arity("same",arguments.length,2)
 const _=[]
 {
  const r=_
  {
   const _=cpl_uncomment_str(cpl,str)
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
               const _=null
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
function cpl_load(cpl,path)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_str,path,"path","str")
 check_arity("same",arguments.length,2)
 const _=[]
 {
  const r=_
  {
   const _=cpl_uncomment(cpl,path)
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
       const script=_
       {
        const _=split(script,":")
        {
         const script=_
         {
          const _=pop(script)
          {
           const line_js=_
           {
            const _=to_uint(line_js)
            {
             const line_js=_
             {
              const _=join(script,":")
              {
               const script=_
               {
                shift(lines,3)
                const _=front(lines)
                {
                 const message=_
                 {
                  flower_box(message)
                  const _=is_fn(line_js)?line_js():line_js
                  {
                   const line=_
                   {
                    const _={line,script}
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
                          if(!(contain(script,path)))
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
                                                           report_log(report)
                                                          }
                                                         }
                                                        }
                                                       }
                                                      }
                                                     }
                                                    }
                                                   }
                                                  }
                                                 }
                                                }
                                               }
                                              }
                                             }
                                            }
                                           }
                                          }
                                         }
                                        }
                                       }
                                      }
                                     }
                                    }
                                   }
                                  }
                                 }
                                }
                               }
                              }
                             }
                            }
                           }
                          }
                         }
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
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
function cpl_parse(cpl,path)
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
     const _=cpl_escape_lisp(cpl,nodes)
     {
      const nodes=_
      {
       const _=cpl_fold(cpl,nodes)
       {
        const nodes=_
        return is_fn(nodes)?nodes():nodes
       }
      }
     }
    }
   }
  }
 }
}
function cpl_scan(cpl,str)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_str,str,"str","str")
 check_arity("same",arguments.length,2)
 function parse_lit(result,str)
 {
  check_arg(is_obj,result,"result","obj")
  check_arg(is_str,str,"str","str")
  check_arity("same",arguments.length,2)
  const _=find(str,"\"")
  {
   const begin=_
   {
    if(lt(begin,0))
     return false
    const _=back(str)
    {
     const end=_
     {
      if(different(end,"\""))
       return false
      const _=slice(str,begin)
      {
       const right=_
       {
        if(!(is_lit(right)))
         return false
        const _=slice_l(str,begin)
        {
         const left=_
         {
          result.tokens=scan(left)
          push(result.tokens,right)
          result.tokens=reject(result.tokens,is_blank)
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
 function parse_complex(result,str)
 {
  check_arg(is_obj,result,"result","obj")
  check_arg(is_str,str,"str","str")
  check_arity("same",arguments.length,2)
  const _=false
  {
   let complex=_
   {
    if(contain(str,"//"))
    {
     complex=true
    }
    else if(contain(str,"\""))
    {
     complex=true
    }
    if(!(is_fn(complex)?complex():complex))
     return false
    result.tokens=scan(str)
    result.tokens=reject(result.tokens,is_trivia)
    return true
   }
  }
 }
 function parse_split(result,str)
 {
  check_arg(is_obj,result,"result","obj")
  check_arg(is_str,str,"str","str")
  check_arity("same",arguments.length,2)
  result.tokens=split(str," ")
  result.tokens=reject(result.tokens,is_blank)
  return true
 }
 const _=trim(str)
 {
  const str=_
  {
   const _=is_fn(cpl.cache.scans)?cpl.cache.scans():cpl.cache.scans
   {
    const scans=_
    {
     if(has(scans,str))
     {
      const _=get(scans,str)
      {
       const tokens=_
       return dup(tokens)
      }
     }
     const _={}
     {
      const result=_
      {
       const _=false
       {
        let cache=_
        {
         if(parse_lit(result,str))
         {
          cache=true
         }
         else if(parse_complex(result,str))
         {
          cache=true
         }
         else if(parse_split(result,str))
         {
         }
         else
          stop()
         if(is_fn(cache)?cache():cache)
         {
          const _=dup(result.tokens)
          {
           const tokens=_
           put(scans,str,tokens)
          }
         }
         return is_fn(result.tokens)?result.tokens():result.tokens
        }
       }
      }
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
            if(is_cson(operator,args,node.children))
            {
             const _=[]
             {
              const _children=_
              {
               const _=front(args)
               {
                const name=_
                {
                 const _=at(args,1)
                 {
                  const construct=_
                  {
                   const _=is_fn(declare)?declare():declare
                   {
                    const operator=_
                    {
                     const _=[name,construct]
                     {
                      const args=_
                      {
                       const _=dup(node.children)
                       {
                        const children=_
                        {
                         const _={operator,args,children,source}
                         {
                          const node2=_
                          {
                           push(_children,node2)
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
                                   const node3=_
                                   {
                                    push(_children,node3)
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
                           const _="begin"
                           {
                            const operator=_
                            {
                             const _=[]
                             {
                              const args=_
                              {
                               const _=is_fn(_children)?_children():_children
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
                   }
                  }
                 }
                }
               }
              }
             }
            }
            else if(is_declare(operator))
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
 function is_cson(operator,args,children)
 {
  check_arg(is_str,operator,"operator","str")
  check_arg(is_arr,args,"args","arr")
  check_arg(is_arr,children,"children","arr")
  check_arity("same",arguments.length,3)
  if(!(is_declare(operator)))
   return false
  if(different(args.length,2))
   return false
  const _=at(args,1)
  {
   const construct=_
   {
    if(same(construct,"arr"))
    {
    }
    else if(same(construct,"obj"))
    {
    }
    else
     return false
    if(is_empty(children))
     return false
    return true
   }
  }
 }
 function is_declare(operator)
 {
  check_arg(is_str,operator,"operator","str")
  check_arity("same",arguments.length,1)
  if(same(operator,"let"))
   return true
  if(same(operator,"var"))
   return true
  return false
 }
 function is_for(operator)
 {
  check_arg(is_str,operator,"operator","str")
  check_arity("same",arguments.length,1)
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
function cpl_uncomment_str(cpl,str)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_str,str,"str","str")
 check_arity("same",arguments.length,2)
 const _=[]
 {
  const a=_
  {
   const _=split(str)
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
                push(a,"")
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
      {
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
function cpl_uncomment(cpl,path)
{
 check_arg(is_obj,cpl,"cpl","obj")
 check_arg(is_str,path,"path","str")
 check_arity("same",arguments.length,2)
 if(has(cpl.files,path))
  return get(cpl.files,path)
 const _=file_load(path)
 {
  const s=_
  {
   const _=cpl_uncomment_str(cpl,s)
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
function cson_decode(cson,path)
{
 check_arg(is_str,cson,"cson","str")
 check_arity("gte",arguments.length,1)
 if(is_def(path))
  check(is_str,path)
 function decode(cpl,node)
 {
  check_arg(is_obj,cpl,"cpl","obj")
  check_arg(is_obj,node,"node","obj")
  check_arity("same",arguments.length,2)
  try
  {
   check(is_empty,node.args)
   const _=is_fn(node.operator)?node.operator():node.operator
   {
    const operator=_
    {
     const _=is_fn(node.children)?node.children():node.children
     {
      const children=_
      {
       check(is_empty,node.args)
       if(same(operator,"arr"))
       {
        const _=[]
        {
         const r=_
         {
          const _=is_fn(children)?children():children
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
                  const _=is_fn(v.operator)?v.operator():v.operator
                  {
                   const operator=_
                   {
                    const _=is_fn(v.args)?v.args():v.args
                    {
                     const args=_
                     {
                      check(is_empty,args)
                      if(is_tree(operator))
                      {
                       const _=decode(cpl,v)
                       {
                        const node=_
                        push(r,node)
                       }
                      }
                      else if(is_data(operator))
                      {
                       const _=decode_value(operator)
                       {
                        const value=_
                        push(r,value)
                       }
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
              }
             }
             return is_fn(r)?r():r
            }
           }
          }
         }
        }
       }
       else if(same(operator,"obj"))
       {
        const _={}
        {
         const r=_
         {
          const _=is_fn(children)?children():children
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
                  const _=is_fn(v.operator)?v.operator():v.operator
                  {
                   let key=_
                   {
                    const _=is_fn(v.args)?v.args():v.args
                    {
                     const args=_
                     {
                      if(is_lit(key))
                      {
                       key=unwrap(key)
                      }
                      const _=null
                      {
                       let value=_
                       {
                        if(is_empty(args))
                        {
                         value="arr"
                        }
                        else if(is_single(args))
                        {
                         value=front(args)
                        }
                        else
                         stop()
                        if(is_tree(value))
                        {
                         const _=copy(v)
                         {
                          const node=_
                          {
                           node.operator=is_fn(value)?value():value
                           clear(node.args)
                           const _=decode(cpl,node)
                           {
                            const t=_
                            put(r,key,t)
                           }
                          }
                         }
                        }
                        else if(is_data(value))
                        {
                         const _=decode_value(value)
                         {
                          const value=_
                          put(r,key,value)
                         }
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
       else
        return decode_value(operator)
      }
     }
    }
   }
  }
  catch(e)
  {
   unshift(cpl.stack,node)
   throw is_fn(e)?e():e
  }
 }
 function decode_value(x)
 {
  check_arg(is_str,x,"x","str")
  check_arity("same",arguments.length,1)
  if(is_nullish(x))
   return null
  if(is_boolish(x))
   return json_decode(x)
  if(is_numeric(x))
   return json_decode(x)
  if(is_lit(x))
   return unwrap(x)
  if(is_name(x))
   return is_fn(x)?x():x
  stop()
 }
 const _=cpl_init("cson")
 {
  const cpl=_
  {
   const _=null
   {
    let nodes=_
    {
     if(is_str(path))
     {
      nodes=cpl_load(cpl,path)
     }
     else
     {
      nodes=cpl_load_str(cpl,cson)
     }
     const _=cpl_tokenize(cpl,nodes)
     {
      const nodes=_
      {
       const _=cpl_escape_lisp(cpl,nodes)
       {
        const nodes=_
        {
         const _=cpl_fold(cpl,nodes)
         {
          const nodes=_
          {
           check(is_single,nodes)
           const _=front(nodes)
           {
            const node=_
            {
             try
             {
              return decode(cpl,node)
             }
             catch(e)
             {
              cpl_dump(cpl)
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
   }
  }
 }
}
function cson_encode(x)
{
 check_arg(is_def,x,"x","def")
 check_arity("same",arguments.length,1)
 function stringify_key(x)
 {
  check_arg(is_str,x,"x","str")
  check_arity("same",arguments.length,1)
  if(is_numeric(x))
   return is_fn(x)?x():x
  if(is_name(x))
   return is_fn(x)?x():x
  if(is_lisp(x))
   return is_fn(x)?x():x
  return to_lit(x)
 }
 function stringify_value(x)
 {
  check_arg(is_def,x,"x","def")
  check_arity("same",arguments.length,1)
  if(is_container(x))
   return cson_encode(x)
  if(is_value(x))
   return to_json(x)
  if(is_name(x))
   return is_fn(x)?x():x
  if(is_lisp(x))
   return is_fn(x)?x():x
  if(is_str(x))
   return to_lit(x)
  stop()
 }
 function is_value(x)
 {
  if(is_null(x))
   return true
  if(is_bool(x))
   return true
  if(is_num(x))
   return true
  return false
 }
 const _=[]
 {
  const a=_
  {
   if(is_arr(x))
   {
    push(a,"arr")
    if(is_full(x))
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
             const _=stringify_value(v)
             {
              const s=_
              {
               const _=txt_indent(s)
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
        push(a,"end")
       }
      }
     }
    }
   }
   else if(is_obj(x))
   {
    push(a,"obj")
    if(is_full(x))
    {
     const _=is_fn(x)?x():x
     {
      for(const k in _)
      {
       const _=get(x,k)
       {
        const v=_
        {
         const _=stringify_key(k)
         {
          const key=_
          {
           const _=stringify_value(v)
           {
            const value=_
            {
             const _=concat(key," ",value)
             {
              const pair=_
              {
               const _=txt_indent(pair)
               {
                const pair=_
                push(a,pair)
               }
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
     }
    }
   }
   else
   {
    const _=stringify_value(x)
    {
     const s=_
     push(a,s)
    }
   }
   return join(a)
  }
 }
}
function cson_load(path)
{
 check_arg(is_str,path,"path","str")
 check_arity("same",arguments.length,1)
 const _=file_load(path)
 {
  const s=_
  return cson_decode(s,path)
 }
}
function cson_save(path,x)
{
 check_arg(is_str,path,"path","str")
 check_arg(is_def,x,"x","def")
 check_arity("same",arguments.length,2)
 const _=cson_encode(x)
 {
  const s=_
  file_save(path,s)
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
function is_cson(x)
{
 if(!(is_str(x)))
  return false
 if(is_empty(x))
  return false
 try
 {
  cson_decode(x)
 }
 catch
 {
  return false
 }
 return true
}
function is_data(x)
{
 if(!(is_str(x)))
  return false
 if(is_identifier(x))
  return true
 if(is_access(x))
  return true
 if(is_numeric(x))
  return true
 if(is_lit(x))
  return true
 return false
}
function is_name(x)
{
 if(!(is_str(x)))
  return false
 if(is_identifier(x))
  return true
 if(is_access(x))
  return true
 return false
}
function is_tree(x)
{
 if(!(is_str(x)))
  return false
 if(same(x,"arr"))
  return true
 if(same(x,"obj"))
  return true
 return false
}
function pkg_init(base)
{
 if(is_undef(base))
  return pkg_init("include.cson")
 check(is_str,base)
 const _={}
 {
  const r=_
  {
   const _=dir_read("src",true)
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
           check(is_dir,v)
           const _=path_concat(v,base)
           {
            const path=_
            {
             if(!(is_file(path)))
              continue
             const _=cson_load(path)
             {
              const o=_
              {
               const _=is_fn(o)?o():o
               {
                for(const k in _)
                {
                 const _=get(o,k)
                 {
                  const v=_
                  put(r,k,v)
                 }
                }
               }
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
function pkg_resolve(include,package)
{
 check_arg(is_obj,include,"include","obj")
 check_arg(is_str,package,"package","str")
 check_arity("same",arguments.length,2)
 function resolve(include,package)
 {
  check_arg(is_obj,include,"include","obj")
  check_arg(is_str,package,"package","str")
  check_arity("same",arguments.length,2)
  const _=[]
  {
   const packages=_
   {
    if(has(include,package))
    {
     const _=get(include,package)
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
             const _=resolve(include,v)
             {
              const a=_
              append(packages,a)
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
    push(packages,package)
    return dedup(packages)
   }
  }
 }
 function get_path(package,prefix)
 {
  check_arg(is_str,package,"package","str")
  check_arg(is_str,prefix,"prefix","str")
  check_arity("same",arguments.length,2)
  const _=dir_read("src",true)
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
          const _=concat(prefix,"-",package)
          {
           const base=_
           {
            const _=path_concat(v,base)
            {
             const path=_
             {
              if(is_dir(path))
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
     return null
    }
   }
  }
 }
 const _=[]
 {
  const r=_
  {
   const _=resolve(include,package)
   {
    const packages=_
    {
     const _=dedup(packages)
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
             const _=get_path(v,"lib")
             {
              const path=_
              {
               if(is_str(path))
               {
                push(r,path)
                continue
               }
               const _=get_path(v,"app")
               {
                const path=_
                {
                 if(is_str(path))
                 {
                  push(r,path)
                  continue
                 }
                 const _=get_path(v,"spa")
                 {
                  const path=_
                  {
                   if(is_str(path))
                   {
                    push(r,path)
                    continue
                   }
                   stop()
                  }
                 }
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
function uncomment(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 const _=path_tmp("source.c")
 {
  const source=_
  {
   const _=path_tmp("target.c")
   {
    const target=_
    {
     file_save(source,x)
     os_system("gcc","-E","-P","-fpreprocessed","--language=c",source,"-o",target)
     const _=file_load(target)
     {
      const r=_
      {
       fs_remove(source)
       fs_remove(target)
       return is_fn(r)?r():r
      }
     }
    }
   }
  }
 }
}
function config_append(path,line)
{
 check_arg(is_str,path,"path","str")
 check_arg(is_str,line,"line","str")
 check_arity("same",arguments.length,2)
 check(is_ln,line)
 const _=sudo_file_read(path)
 {
  const content=_
  {
   const _=[]
   {
    const parts=_
    {
     if(!(match_r(content,lf)))
      push(parts,lf)
     const _=pad_r(line," ",config_padding)
     {
      const line=_
      {
       push(parts,line)
       push(parts,"#")
       push(parts,config_tag)
       push(parts,lf)
       const _=implode(parts)
       {
        const line=_
        {
         const _=concat(content,line)
         {
          const content=_
          sudo_file_save(path,content)
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function config_clean(path)
{
 check_arg(is_str,path,"path","str")
 check_arity("same",arguments.length,1)
 const _=sudo_file_read(path)
 {
  const inputs=_
  {
   const _=split(inputs)
   {
    const inputs=_
    {
     const _=[]
     {
      const outputs=_
      {
       const _=is_fn(inputs)?inputs():inputs
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
               const _=split(v,"#")
               {
                const parts=_
                {
                 if(is_empty(parts))
                 {
                  push(outputs,v)
                  continue
                 }
                 const _=back(parts)
                 {
                  const tag=_
                  {
                   if(different(tag,config_tag))
                   {
                    push(outputs,v)
                    continue
                   }
                   trace("config>",v)
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
           const _=join(outputs)
           {
            const content=_
            sudo_file_save(path,content)
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function init_org()
{
 check_arity("same",arguments.length,0)
 global.login_merlin="mabynogy@mabynogy.org"
 global.org_user_path=path_concat(common,"users.cson")
 global.config_padding=128
 global.config_tag=is_fn(mabynogy)?mabynogy():mabynogy
}
function org_group_create_users()
{
 check_arity("same",arguments.length,0)
 function get_humans()
 {
  check_arity("same",arguments.length,0)
  const _={}
  {
   const r=_
   {
    const _=is_fn(user_list)?user_list():user_list
    {
     const users=_
     {
      const _=is_fn(users)?users():users
      {
       for(const k in _)
       {
        const _=get(users,k)
        {
         const v=_
         {
          if(!(is_fn(v.human)?v.human():v.human))
           continue
          put(r,v.name,v)
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
 const _=is_fn(group_list)?group_list():group_list
 {
  let groups=_
  {
   const _="users"
   {
    const group=_
    {
     if(!(has(groups,group)))
     {
      sudo("groupadd",group)
      const _={group}
      {
       const o=_
       {
        const _=obj_option(o)
        {
         const s=_
         {
          log("create",s)
          groups=is_fn(group_list)?group_list():group_list
         }
        }
       }
      }
     }
     const _=is_fn(groups.users)?groups.users():groups.users
     {
      const users=_
      {
       const _=is_fn(get_humans)?get_humans():get_humans
       {
        const humans=_
        {
         const _=is_fn(humans)?humans():humans
         {
          for(const k in _)
          {
           if(contain(users.users,k))
            continue
           sudo("usermod","--append","--groups",users.name,k)
           const _=is_fn(k)?k():k
           {
            const user=_
            {
             const _={user,group}
             {
              const o=_
              {
               const _=obj_option(o)
               {
                const s=_
                log("add",s)
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function org_user_install(user)
{
 check_arg(is_str,user,"user","str")
 check_arity("same",arguments.length,1)
 function install_prompt(path)
 {
  check_arg(is_str,path,"path","str")
  check_arity("same",arguments.length,1)
  const _=is_fn(get_prompt)?get_prompt():get_prompt
  {
   const prompt=_
   {
    const _=quote(prompt)
    {
     const prompt=_
     {
      const _=concat("PS1=",prompt)
      {
       const prompt=_
       {
        config_clean(path)
        config_append(path,prompt)
        config_append(path,"export PS1")
       }
      }
     }
    }
   }
  }
 }
 function get_prompt()
 {
  check_arity("same",arguments.length,0)
  const _=rgb_init(5,0,0)
  {
   const red=_
   {
    const _=rgb_init(5,5,0)
    {
     const yellow=_
     {
      const _=ps1_encode("\\t",yellow,"black")
      {
       const time=_
       {
        const _=null
        {
         let user=_
         {
          if(is_fn(is_root)?is_root():is_root)
          {
           user=ps1_encode("\\u",red,"default","bold")
          }
          else
          {
           user=ps1_encode("\\u","green","default","bold")
          }
          const _=ps1_encode("\\h","blue","default","bold")
          {
           const host=_
           {
            const _=concat(user,"@",host)
            {
             const login=_
             {
              const _=ps1_encode("\\w","cyan","default","bold")
              {
               const path=_
               {
                const _=concat(path," $ ")
                {
                 const path=_
                 return space(time,login,path)
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
 install_prompt("/root/.bashrc")
 const _=os_home(user)
 {
  const home=_
  {
   const _=path_concat(home,".bashrc")
   {
    const bashrc=_
    {
     check(sudo_is_file,bashrc)
     install_prompt(bashrc)
    }
   }
  }
 }
}
function org_user_load()
{
 check_arity("same",arguments.length,0)
 const _=is_fn(user_list)?user_list():user_list
 {
  const r=_
  {
   if(is_file(org_user_path))
   {
    const _=cson_load(org_user_path)
    {
     const users=_
     {
      const _=is_fn(users)?users():users
      {
       for(const k in _)
       {
        const _=get(users,k)
        {
         const v=_
         {
          if(!(has(r,k)))
           continue
          const _=get(r,k)
          {
           const user=_
           {
            user.mail=is_fn(v.mail)?v.mail():v.mail
            user.created=is_fn(v.created)?v.created():v.created
            user.created=user_created(user)
           }
          }
         }
        }
       }
      }
     }
    }
   }
   const _=is_fn(r)?r():r
   {
    for(const k in _)
    {
     const _=get(r,k)
     {
      const v=_
      {
       if(!(has(v,"mail")))
       {
        v.mail=null
       }
      }
     }
    }
    return is_fn(r)?r():r
   }
  }
 }
}
function org_user_remove_unused()
{
 check_arity("same",arguments.length,0)
 const _=is_fn(org_user_load)?org_user_load():org_user_load
 {
  const users=_
  {
   const _={}
   {
    const removes=_
    {
     const _=is_fn(users)?users():users
     {
      for(const k in _)
      {
       const _=get(users,k)
       {
        const v=_
        {
         const _=is_fn(v.name)?v.name():v.name
         {
          const name=_
          {
           const _=is_fn(v.last_log)?v.last_log():v.last_log
           {
            const last_log=_
            {
             if(!(is_fn(v.human)?v.human():v.human))
              continue
             if(!(is_null(last_log)))
              continue
             const _=is_fn(time_get)?time_get():time_get
             {
              const delay=_
              {
               const _=sub(delay,v.created)
               {
                const delay=_
                {
                 if(lt(delay,week))
                  continue
                 org_user_remove(name)
                 const _={user}
                 {
                  const o=_
                  {
                   const _=obj_option(o)
                   {
                    const s=_
                    {
                     log("remove",s)
                     put(removes,name,v.mail)
                    }
                   }
                  }
                 }
                }
               }
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
       if(is_full(removes))
        mail_debug("user-remove-unused",removes)
      }
     }
    }
   }
  }
 }
}
function org_user_remove(x)
{
 check_arg(is_str,x,"x","str")
 check_arity("same",arguments.length,1)
 check(different,x,mabynogy)
 const _=is_fn(user_list)?user_list():user_list
 {
  const users=_
  {
   const _=get(users,x)
   {
    const user=_
    {
     const _=concat(x,".zip")
     {
      const file=_
      {
       const _=path_concat(common,"archive")
       {
        const archive=_
        {
         if(!(is_dir(archive)))
          sudo_dir_make(archive)
         const _=path_concat(archive,file)
         {
          const r=_
          {
           const _=archive_find(r)
           {
            const r=_
            {
             zip(sudo,r,user.home)
             const _=to_lit(r)
             {
              const archive=_
              {
               log("archive",r)
               const _=is_fn(os_user)?os_user():os_user
               {
                const admin=_
                {
                 const _=concat(admin,":",admin)
                 {
                  const pair=_
                  {
                   sudo("chown",pair,r)
                   sudo("deluser","--remove-home",x)
                   org_user_update()
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
function org_user_save(x)
{
 check_arg(is_obj,x,"x","obj")
 check_arity("same",arguments.length,1)
 const _={}
 {
  const users=_
  {
   const _=is_fn(x)?x():x
   {
    for(const k in _)
    {
     const _=get(x,k)
     {
      const v=_
      {
       if(!(is_fn(v.human)?v.human():v.human))
        continue
       const _=is_fn(v.mail)?v.mail():v.mail
       {
        const mail=_
        {
         const _=is_fn(v.created)?v.created():v.created
         {
          const created=_
          {
           check(is_def,mail)
           check(is_def,created)
           const _={mail,created}
           {
            const user=_
            put(users,k,user)
           }
          }
         }
        }
       }
      }
     }
    }
    {
     const _=cson_encode(users)
     {
      const users=_
      sudo_file_save(org_user_path,users)
     }
    }
   }
  }
 }
}
function org_user_uninstall(user)
{
 check_arg(is_str,user,"user","str")
 check_arity("same",arguments.length,1)
 const _=os_home(user)
 {
  const home=_
  {
   const _=path_concat(home,".bashrc")
   {
    const bashrc=_
    {
     check(sudo_is_file,bashrc)
     config_clean(bashrc)
    }
   }
  }
 }
}
function org_user_update()
{
 check_arity("same",arguments.length,0)
 const _=is_fn(org_user_load)?org_user_load():org_user_load
 {
  const users=_
  org_user_save(users)
 }
}
function ps1_encode(str,...args)
{
 check_arg(is_str,str,"str","str")
 check_arity("gte",arguments.length,1)
 const _=ansi_init(...args)
 {
  const ansi=_
  {
   const _="\\["
   {
    const open=_
    {
     const _="\\]"
     {
      const close=_
      {
       const _=concat(open,ansi.escape,"[",ansi.attr,";",ansi.fore,";",ansi.back,"m",close,str,open,ansi.escape,"[0m",close)
       {
        const r=_
        {
         const _=replace(r,escape,"\\e")
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
function* init(...x)
{
 const _=dup(x)
 {
  const args=_
  {
   const _=is_fn(app_list)?app_list():app_list
   {
    const apps=_
    {
     const _=obj_keys(apps)
     {
      const names=_
      {
       if(is_empty(args))
       {
        dump(names)
        return
       }
       const _=shift(args)
       {
        const app=_
        {
         if(!(has(apps,app)))
         {
          dump(names)
          process.exitCode=5
          return
         }
         const _=pkg_init("depend.cson")
         {
          const include=_
          {
           const _=pkg_resolve(include,app)
           {
            const paths=_
            {
             drop(paths)
             const _=[]
             {
              const commands=_
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
                       const _=path_base(v)
                       {
                        const base=_
                        {
                         const _=strip_l(base,"app-")
                         {
                          const app=_
                          {
                           const _=["./make",app,"--compile","--quiet"]
                           {
                            const command=_
                            push(commands,command)
                           }
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
                   yield* os_batch(commands)
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
                         const _=silent(os_execute,"which","time")
                         {
                          const time_path=_
                          {
                           const _=path_tmp("usage.txt")
                           {
                            const usage_path=_
                            {
                             const _=[]
                             {
                              const time=_
                              {
                               if(is_full(time_path))
                               {
                                const _=concat("--output=",usage_path)
                                {
                                 const output=_
                                 {
                                  push(time,time_path)
                                  push(time,"--format=%M")
                                  push(time,output)
                                 }
                                }
                               }
                               const _=is_fn(node_context)?node_context():node_context
                               {
                                const context=_
                                {
                                 const _=is_fn(node_argv)?node_argv():node_argv
                                 {
                                  const argv=_
                                  {
                                   const _=[...context,...args]
                                   {
                                    const parameters=_
                                    {
                                     const _=dedup(parameters)
                                     {
                                      const parameters=_
                                      {
                                       const _=[...time,...argv,cpl.target,...parameters]
                                       {
                                        const args=_
                                        {
                                         const _=yield* os_capture(...args)
                                         {
                                          const o=_
                                          {
                                           process.exitCode=is_fn(o.status)?o.status():o.status
                                           cpl_log_error(cpl,o.err)
                                           if(is_full(time_path))
                                           {
                                            const _=file_load(usage_path)
                                            {
                                             const usage=_
                                             {
                                              fs_remove(usage_path)
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
                                                        const _={usage}
                                                        {
                                                         const o=_
                                                         {
                                                          const _=obj_option(o)
                                                          {
                                                           const s=_
                                                           log2(app,s)
                                                          }
                                                         }
                                                        }
                                                       }
                                                      }
                                                     }
                                                    }
                                                   }
                                                  }
                                                 }
                                                }
                                               }
                                              }
                                             }
                                            }
                                           }
                                          }
                                         }
                                        }
                                       }
                                      }
                                     }
                                    }
                                   }
                                  }
                                 }
                                }
                               }
                              }
                             }
                            }
                           }
                          }
                         }
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
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
const compile=1780738927
const pool=["src/prj-core/lib-common/abs.cs","src/prj-core/lib-common/add.cs","src/prj-core/lib-common/and.cs","src/prj-core/lib-common/angle.cs","src/prj-core/lib-common/append.cs","src/prj-core/lib-common/arr.cs","src/prj-core/lib-common/asc.cs","src/prj-core/lib-common/at.cs","src/prj-core/lib-common/back.cs","src/prj-core/lib-common/base36-decode.cs","src/prj-core/lib-common/base36-encode.cs","src/prj-core/lib-common/between.cs","src/prj-core/lib-common/brace.cs","src/prj-core/lib-common/bracket.cs","src/prj-core/lib-common/byte-size.cs","src/prj-core/lib-common/capture.cs","src/prj-core/lib-common/char-escape.cs","src/prj-core/lib-common/check-arg.cs","src/prj-core/lib-common/check-arity.cs","src/prj-core/lib-common/check.cs","src/prj-core/lib-common/chr.cs","src/prj-core/lib-common/clear.cs","src/prj-core/lib-common/clone.cs","src/prj-core/lib-common/cmp-i18n.cs","src/prj-core/lib-common/cmp.cs","src/prj-core/lib-common/collate.cs","src/prj-core/lib-common/concat.cs","src/prj-core/lib-common/contain.cs","src/prj-core/lib-common/copy.cs","src/prj-core/lib-common/count.cs","src/prj-core/lib-common/crc.cs","src/prj-core/lib-common/cut-l.cs","src/prj-core/lib-common/cut-r.cs","src/prj-core/lib-common/date-decode.cs","src/prj-core/lib-common/date-str.cs","src/prj-core/lib-common/dbg/dbg-backtrace.cs","src/prj-core/lib-common/dbg/dbg-callstack.cs","src/prj-core/lib-common/dbg/dbg-here.cs","src/prj-core/lib-common/dbg/dbg-origin-xs.cs","src/prj-core/lib-common/dbg/dbg-origin.cs","src/prj-core/lib-common/dbg/dbg-source-map.cs","src/prj-core/lib-common/dbg/dbg-source.cs","src/prj-core/lib-common/dec.cs","src/prj-core/lib-common/dedup.cs","src/prj-core/lib-common/deinit-common.cs","src/prj-core/lib-common/delimit.cs","src/prj-core/lib-common/dequote.cs","src/prj-core/lib-common/different.cs","src/prj-core/lib-common/div.cs","src/prj-core/lib-common/drop.cs","src/prj-core/lib-common/dump.cs","src/prj-core/lib-common/dup.cs","src/prj-core/lib-common/eq.cs","src/prj-core/lib-common/every.cs","src/prj-core/lib-common/explode.cs","src/prj-core/lib-common/extract.cs","src/prj-core/lib-common/fallback-error.cs","src/prj-core/lib-common/filter.cs","src/prj-core/lib-common/find.cs","src/prj-core/lib-common/flower-box.cs","src/prj-core/lib-common/flower.cs","src/prj-core/lib-common/fn-args.cs","src/prj-core/lib-common/fn-match.cs","src/prj-core/lib-common/fn-select.cs","src/prj-core/lib-common/front.cs","src/prj-core/lib-common/get-type.cs","src/prj-core/lib-common/get.cs","src/prj-core/lib-common/gt.cs","src/prj-core/lib-common/gte.cs","src/prj-core/lib-common/has.cs","src/prj-core/lib-common/head.cs","src/prj-core/lib-common/iif.cs","src/prj-core/lib-common/implode.cs","src/prj-core/lib-common/inc.cs","src/prj-core/lib-common/init-common.cs","src/prj-core/lib-common/insert.cs","src/prj-core/lib-common/is/is-access.cs","src/prj-core/lib-common/is/is-alnum.cs","src/prj-core/lib-common/is/is-alpha.cs","src/prj-core/lib-common/is/is-arg.cs","src/prj-core/lib-common/is/is-arr.cs","src/prj-core/lib-common/is/is-atom.cs","src/prj-core/lib-common/is/is-blank.cs","src/prj-core/lib-common/is/is-bool.cs","src/prj-core/lib-common/is/is-boolish.cs","src/prj-core/lib-common/is/is-browser.cs","src/prj-core/lib-common/is/is-char.cs","src/prj-core/lib-common/is/is-comment.cs","src/prj-core/lib-common/is/is-composite.cs","src/prj-core/lib-common/is/is-container.cs","src/prj-core/lib-common/is/is-cool.cs","src/prj-core/lib-common/is/is-def.cs","src/prj-core/lib-common/is/is-digit.cs","src/prj-core/lib-common/is/is-domain.cs","src/prj-core/lib-common/is/is-empty.cs","src/prj-core/lib-common/is/is-false.cs","src/prj-core/lib-common/is/is-fn.cs","src/prj-core/lib-common/is/is-fragment.cs","src/prj-core/lib-common/is/is-full.cs","src/prj-core/lib-common/is/is-gn.cs","src/prj-core/lib-common/is/is-identifier.cs","src/prj-core/lib-common/is/is-indented.cs","src/prj-core/lib-common/is/is-int.cs","src/prj-core/lib-common/is/is-ip.cs","src/prj-core/lib-common/is/is-ip4.cs","src/prj-core/lib-common/is/is-ip6.cs","src/prj-core/lib-common/is/is-json.cs","src/prj-core/lib-common/is/is-key.cs","src/prj-core/lib-common/is/is-last.cs","src/prj-core/lib-common/is/is-lisp.cs","src/prj-core/lib-common/is/is-lit-char.cs","src/prj-core/lib-common/is/is-lit.cs","src/prj-core/lib-common/is/is-ln.cs","src/prj-core/lib-common/is/is-lower.cs","src/prj-core/lib-common/is/is-mail.cs","src/prj-core/lib-common/is/is-many.cs","src/prj-core/lib-common/is/is-node.cs","src/prj-core/lib-common/is/is-none.cs","src/prj-core/lib-common/is/is-noun.cs","src/prj-core/lib-common/is/is-null.cs","src/prj-core/lib-common/is/is-nullish.cs","src/prj-core/lib-common/is/is-num.cs","src/prj-core/lib-common/is/is-numeric.cs","src/prj-core/lib-common/is/is-obj.cs","src/prj-core/lib-common/is/is-pair.cs","src/prj-core/lib-common/is/is-printable.cs","src/prj-core/lib-common/is/is-punct.cs","src/prj-core/lib-common/is/is-single.cs","src/prj-core/lib-common/is/is-something.cs","src/prj-core/lib-common/is/is-space.cs","src/prj-core/lib-common/is/is-str.cs","src/prj-core/lib-common/is/is-token.cs","src/prj-core/lib-common/is/is-trivia.cs","src/prj-core/lib-common/is/is-true.cs","src/prj-core/lib-common/is/is-tuple.cs","src/prj-core/lib-common/is/is-txt.cs","src/prj-core/lib-common/is/is-uint.cs","src/prj-core/lib-common/is/is-uint32.cs","src/prj-core/lib-common/is/is-undef.cs","src/prj-core/lib-common/is/is-upper.cs","src/prj-core/lib-common/is/is-url.cs","src/prj-core/lib-common/is/is-user.cs","src/prj-core/lib-common/is/is-ushort.cs","src/prj-core/lib-common/is/is-vec.cs","src/prj-core/lib-common/is/is-word.cs","src/prj-core/lib-common/is/is-xn.cs","src/prj-core/lib-common/is-rgb.cs","src/prj-core/lib-common/join.cs","src/prj-core/lib-common/js-encode.cs","src/prj-core/lib-common/json/json-decode.cs","src/prj-core/lib-common/json/json-dump.cs","src/prj-core/lib-common/json/json-encode.cs","src/prj-core/lib-common/json/json-load.cs","src/prj-core/lib-common/json/json-save.cs","src/prj-core/lib-common/log-append.cs","src/prj-core/lib-common/log.cs","src/prj-core/lib-common/log2.cs","src/prj-core/lib-common/log3.cs","src/prj-core/lib-common/lt.cs","src/prj-core/lib-common/lte.cs","src/prj-core/lib-common/main.cs","src/prj-core/lib-common/map.cs","src/prj-core/lib-common/match-l.cs","src/prj-core/lib-common/match-r.cs","src/prj-core/lib-common/match.cs","src/prj-core/lib-common/max.cs","src/prj-core/lib-common/min.cs","src/prj-core/lib-common/mod.cs","src/prj-core/lib-common/mul.cs","src/prj-core/lib-common/mute.cs","src/prj-core/lib-common/neq.cs","src/prj-core/lib-common/nop.cs","src/prj-core/lib-common/not.cs","src/prj-core/lib-common/obj/obj-keys.cs","src/prj-core/lib-common/obj/obj-length.cs","src/prj-core/lib-common/obj/obj-merge.cs","src/prj-core/lib-common/obj/obj-option.cs","src/prj-core/lib-common/obj/obj-order.cs","src/prj-core/lib-common/obj/obj-push.cs","src/prj-core/lib-common/obj/obj-remove.cs","src/prj-core/lib-common/obj/obj-unshift.cs","src/prj-core/lib-common/obj/obj-vals.cs","src/prj-core/lib-common/obj.cs","src/prj-core/lib-common/on.cs","src/prj-core/lib-common/or.cs","src/prj-core/lib-common/pad-l.cs","src/prj-core/lib-common/pad-r.cs","src/prj-core/lib-common/paren.cs","src/prj-core/lib-common/partial.cs","src/prj-core/lib-common/patch-c1.cs","src/prj-core/lib-common/path/path-compact.cs","src/prj-core/lib-common/path/path-concat.cs","src/prj-core/lib-common/path/path-file.cs","src/prj-core/lib-common/path/path-fix.cs","src/prj-core/lib-common/path/path-join.cs","src/prj-core/lib-common/path/path-split.cs","src/prj-core/lib-common/path/path-strip.cs","src/prj-core/lib-common/path/path-unfix.cs","src/prj-core/lib-common/path/path-up.cs","src/prj-core/lib-common/pop.cs","src/prj-core/lib-common/prepend.cs","src/prj-core/lib-common/profile.cs","src/prj-core/lib-common/push.cs","src/prj-core/lib-common/put.cs","src/prj-core/lib-common/quote.cs","src/prj-core/lib-common/random-str.cs","src/prj-core/lib-common/random.cs","src/prj-core/lib-common/record.cs","src/prj-core/lib-common/redact.cs","src/prj-core/lib-common/reject.cs","src/prj-core/lib-common/remove.cs","src/prj-core/lib-common/repeat.cs","src/prj-core/lib-common/replace-rec.cs","src/prj-core/lib-common/replace.cs","src/prj-core/lib-common/report/report-html.cs","src/prj-core/lib-common/report/report-init.cs","src/prj-core/lib-common/report/report-log.cs","src/prj-core/lib-common/report/report-render.cs","src/prj-core/lib-common/resolve.cs","src/prj-core/lib-common/reverse.cs","src/prj-core/lib-common/rgb-init.cs","src/prj-core/lib-common/round.cs","src/prj-core/lib-common/salt.cs","src/prj-core/lib-common/same.cs","src/prj-core/lib-common/scan.cs","src/prj-core/lib-common/set.cs","src/prj-core/lib-common/shift.cs","src/prj-core/lib-common/shuffle.cs","src/prj-core/lib-common/silent.cs","src/prj-core/lib-common/sleep.cs","src/prj-core/lib-common/slice-l.cs","src/prj-core/lib-common/slice-r.cs","src/prj-core/lib-common/slice.cs","src/prj-core/lib-common/sort.cs","src/prj-core/lib-common/space.cs","src/prj-core/lib-common/split.cs","src/prj-core/lib-common/squote.cs","src/prj-core/lib-common/stop.cs","src/prj-core/lib-common/str-indent.cs","src/prj-core/lib-common/strip-l.cs","src/prj-core/lib-common/strip-r.cs","src/prj-core/lib-common/sub.cs","src/prj-core/lib-common/tail.cs","src/prj-core/lib-common/task-dump.cs","src/prj-core/lib-common/task-run.cs","src/prj-core/lib-common/tbl/tbl-column.cs","src/prj-core/lib-common/tbl/tbl-columns.cs","src/prj-core/lib-common/tbl/tbl-index.cs","src/prj-core/lib-common/tbl/tbl-init.cs","src/prj-core/lib-common/tbl/tbl-pad-l.cs","src/prj-core/lib-common/tbl/tbl-remove-column.cs","src/prj-core/lib-common/tbl/tbl-rename-column.cs","src/prj-core/lib-common/tbl/tbl-render.cs","src/prj-core/lib-common/tbl/tbl-sort.cs","src/prj-core/lib-common/time/time-delay.cs","src/prj-core/lib-common/time/time-get.cs","src/prj-core/lib-common/time/time-hn.cs","src/prj-core/lib-common/time/time-interval.cs","src/prj-core/lib-common/time/time-now.cs","src/prj-core/lib-common/time/time-str.cs","src/prj-core/lib-common/time/time-timeout.cs","src/prj-core/lib-common/to/to-base36.cs","src/prj-core/lib-common/to/to-c.cs","src/prj-core/lib-common/to/to-dump.cs","src/prj-core/lib-common/to/to-fixed.cs","src/prj-core/lib-common/to/to-hex.cs","src/prj-core/lib-common/to/to-i.cs","src/prj-core/lib-common/to/to-int.cs","src/prj-core/lib-common/to/to-json.cs","src/prj-core/lib-common/to/to-lisp.cs","src/prj-core/lib-common/to/to-lit.cs","src/prj-core/lib-common/to/to-lower.cs","src/prj-core/lib-common/to/to-num.cs","src/prj-core/lib-common/to/to-str.cs","src/prj-core/lib-common/to/to-tbl.cs","src/prj-core/lib-common/to/to-uint.cs","src/prj-core/lib-common/to/to-upper.cs","src/prj-core/lib-common/trace.cs","src/prj-core/lib-common/trim-l.cs","src/prj-core/lib-common/trim-r.cs","src/prj-core/lib-common/trim.cs","src/prj-core/lib-common/trunc.cs","src/prj-core/lib-common/tty-width.cs","src/prj-core/lib-common/txt/txt-compact.cs","src/prj-core/lib-common/txt/txt-cut.cs","src/prj-core/lib-common/txt/txt-head.cs","src/prj-core/lib-common/txt/txt-indent.cs","src/prj-core/lib-common/txt/txt-inline.cs","src/prj-core/lib-common/txt/txt-prepend.cs","src/prj-core/lib-common/txt/txt-unindent.cs","src/prj-core/lib-common/unaccent.cs","src/prj-core/lib-common/unshift.cs","src/prj-core/lib-common/unwrap.cs","src/prj-core/lib-common/url-beautify.cs","src/prj-core/lib-common/url-get.cs","src/prj-core/lib-common/url-parse.cs","src/prj-core/lib-common/volatile.cs","src/prj-core/lib-common/wait.cs","src/prj-core/lib-common/xor.cs","src/prj-core/lib-www/dom/dom-entities.cs","src/prj-core/lib-www/dom/dom-escape.cs","src/prj-core/lib-www/dom/dom-special-chars.cs","src/prj-core/lib-www/dom/dom-unescape.cs","src/prj-core/lib-www/h/h-a.cs","src/prj-core/lib-www/h/h-attr.cs","src/prj-core/lib-www/h/h-b.cs","src/prj-core/lib-www/h/h-back-color.cs","src/prj-core/lib-www/h/h-body.cs","src/prj-core/lib-www/h/h-bold.cs","src/prj-core/lib-www/h/h-border.cs","src/prj-core/lib-www/h/h-br.cs","src/prj-core/lib-www/h/h-color.cs","src/prj-core/lib-www/h/h-decoration.cs","src/prj-core/lib-www/h/h-div.cs","src/prj-core/lib-www/h/h-float.cs","src/prj-core/lib-www/h/h-font-family.cs","src/prj-core/lib-www/h/h-font-size.cs","src/prj-core/lib-www/h/h-head.cs","src/prj-core/lib-www/h/h-href.cs","src/prj-core/lib-www/h/h-html.cs","src/prj-core/lib-www/h/h-img.cs","src/prj-core/lib-www/h/h-init.cs","src/prj-core/lib-www/h/h-meta.cs","src/prj-core/lib-www/h/h-padding-bottom.cs","src/prj-core/lib-www/h/h-padding-left.cs","src/prj-core/lib-www/h/h-padding-right.cs","src/prj-core/lib-www/h/h-padding-top.cs","src/prj-core/lib-www/h/h-padding.cs","src/prj-core/lib-www/h/h-pre.cs","src/prj-core/lib-www/h/h-push.cs","src/prj-core/lib-www/h/h-render.cs","src/prj-core/lib-www/h/h-script.cs","src/prj-core/lib-www/h/h-spacer.cs","src/prj-core/lib-www/h/h-span.cs","src/prj-core/lib-www/h/h-src.cs","src/prj-core/lib-www/h/h-style.cs","src/prj-core/lib-www/h/h-table.cs","src/prj-core/lib-www/h/h-tbl.cs","src/prj-core/lib-www/h/h-td.cs","src/prj-core/lib-www/h/h-text.cs","src/prj-core/lib-www/h/h-th.cs","src/prj-core/lib-www/h/h-title.cs","src/prj-core/lib-www/h/h-tr.cs","src/prj-core/lib-www/h/h-wbr.cs","src/prj-core/lib-www/h/h-width.cs","src/prj-core/lib-www/init-www.cs","src/prj-core/lib-www/is-link.cs","src/prj-core/lib-www/link-dom.cs","src/prj-core/lib-www/link-h.cs","src/prj-core/lib-www/link-init.cs","src/prj-core/lib-node/app-list.cs","src/prj-core/lib-node/beep.cs","src/prj-core/lib-node/deinit-node.cs","src/prj-core/lib-node/digest.cs","src/prj-core/lib-node/dir/dir-call.cs","src/prj-core/lib-node/dir/dir-change.cs","src/prj-core/lib-node/dir/dir-current.cs","src/prj-core/lib-node/dir/dir-empty.cs","src/prj-core/lib-node/dir/dir-find.cs","src/prj-core/lib-node/dir/dir-load.cs","src/prj-core/lib-node/dir/dir-make.cs","src/prj-core/lib-node/dir/dir-read.cs","src/prj-core/lib-node/dir/dir-reset.cs","src/prj-core/lib-node/dir/dir-size.cs","src/prj-core/lib-node/file/file-append.cs","src/prj-core/lib-node/file/file-load.cs","src/prj-core/lib-node/file/file-read.cs","src/prj-core/lib-node/file/file-save.cs","src/prj-core/lib-node/file/file-size.cs","src/prj-core/lib-node/file/file-write.cs","src/prj-core/lib-node/fs/fs-change-mode.cs","src/prj-core/lib-node/fs/fs-copy.cs","src/prj-core/lib-node/fs/fs-created.cs","src/prj-core/lib-node/fs/fs-find.cs","src/prj-core/lib-node/fs/fs-locate.cs","src/prj-core/lib-node/fs/fs-mode.cs","src/prj-core/lib-node/fs/fs-modified.cs","src/prj-core/lib-node/fs/fs-remove.cs","src/prj-core/lib-node/fs/fs-rename.cs","src/prj-core/lib-node/http-get.cs","src/prj-core/lib-node/init-node.cs","src/prj-core/lib-node/inspect.cs","src/prj-core/lib-node/ip/ip-host.cs","src/prj-core/lib-node/ip/ip-list.cs","src/prj-core/lib-node/ip/ip-v4.cs","src/prj-core/lib-node/ip/ip-v6.cs","src/prj-core/lib-node/is/is-batch.cs","src/prj-core/lib-node/is/is-color.cs","src/prj-core/lib-node/is/is-dir.cs","src/prj-core/lib-node/is/is-file.cs","src/prj-core/lib-node/is/is-fs.cs","src/prj-core/lib-node/is/is-interactive.cs","src/prj-core/lib-node/is/is-readable.cs","src/prj-core/lib-node/is/is-ssh.cs","src/prj-core/lib-node/is/is-symbolic-link.cs","src/prj-core/lib-node/no-umask.cs","src/prj-core/lib-node/node-argv.cs","src/prj-core/lib-node/node-context.cs","src/prj-core/lib-node/open.cs","src/prj-core/lib-node/os/os-batch.cs","src/prj-core/lib-node/os/os-capture.cs","src/prj-core/lib-node/os/os-cpu-count.cs","src/prj-core/lib-node/os/os-cpu-load.cs","src/prj-core/lib-node/os/os-detach.cs","src/prj-core/lib-node/os/os-end.cs","src/prj-core/lib-node/os/os-execute.cs","src/prj-core/lib-node/os/os-home.cs","src/prj-core/lib-node/os/os-host.cs","src/prj-core/lib-node/os/os-log.cs","src/prj-core/lib-node/os/os-parallel.cs","src/prj-core/lib-node/os/os-prompt.cs","src/prj-core/lib-node/os/os-ps.cs","src/prj-core/lib-node/os/os-report.cs","src/prj-core/lib-node/os/os-run.cs","src/prj-core/lib-node/os/os-shell.cs","src/prj-core/lib-node/os/os-sleep.cs","src/prj-core/lib-node/os/os-system.cs","src/prj-core/lib-node/os/os-user.cs","src/prj-core/lib-node/os/os-wait.cs","src/prj-core/lib-node/path/path-base.cs","src/prj-core/lib-node/path/path-dir.cs","src/prj-core/lib-node/path/path-ext.cs","src/prj-core/lib-node/path/path-real.cs","src/prj-core/lib-node/path/path-tmp.cs","src/prj-core/lib-node/path/path-unique.cs","src/prj-core/lib-node/path-writable.cs","src/prj-core/lib-node/report-mail.cs","src/prj-core/lib-node/sigint.cs","src/prj-core/lib-node/stdout-write.cs","src/prj-core/lib-node/to-base64.cs","src/prj-core/lib-shell/ansi/ansi-encode.cs","src/prj-core/lib-shell/ansi/ansi-get-attrs.cs","src/prj-core/lib-shell/ansi/ansi-get-colors.cs","src/prj-core/lib-shell/ansi/ansi-head.cs","src/prj-core/lib-shell/ansi/ansi-init.cs","src/prj-core/lib-shell/ansi/ansi-rgb.cs","src/prj-core/lib-shell/ansi/ansi-strip.cs","src/prj-core/lib-shell/app-token.cs","src/prj-core/lib-shell/archive-find.cs","src/prj-core/lib-shell/group-list.cs","src/prj-core/lib-shell/init-shell.cs","src/prj-core/lib-shell/is-local.cs","src/prj-core/lib-shell/is-remote.cs","src/prj-core/lib-shell/is-root.cs","src/prj-core/lib-shell/mail-debug.cs","src/prj-core/lib-shell/mail.cs","src/prj-core/lib-shell/mime-type.cs","src/prj-core/lib-shell/mnt-clean.cs","src/prj-core/lib-shell/mnt-unmount.cs","src/prj-core/lib-shell/password.cs","src/prj-core/lib-shell/rsync.cs","src/prj-core/lib-shell/ssh/ssh-pass.cs","src/prj-core/lib-shell/ssh/ssh.cs","src/prj-core/lib-shell/sudo/sudo-dir-make.cs","src/prj-core/lib-shell/sudo/sudo-dir-reset.cs","src/prj-core/lib-shell/sudo/sudo-file-append.cs","src/prj-core/lib-shell/sudo/sudo-file-read.cs","src/prj-core/lib-shell/sudo/sudo-file-save.cs","src/prj-core/lib-shell/sudo/sudo-file-write.cs","src/prj-core/lib-shell/sudo/sudo-fs-change-mode.cs","src/prj-core/lib-shell/sudo/sudo-fs-remove.cs","src/prj-core/lib-shell/sudo/sudo-is-dir.cs","src/prj-core/lib-shell/sudo/sudo-is-file.cs","src/prj-core/lib-shell/sudo/sudo-path-writable.cs","src/prj-core/lib-shell/sudo/sudo.cs","src/prj-core/lib-shell/unzip.cs","src/prj-core/lib-shell/user-created.cs","src/prj-core/lib-shell/user-list.cs","src/prj-core/lib-shell/zip.cs","src/prj-core/lib-compiler/app-home.cs","src/prj-core/lib-compiler/app-make.cs","src/prj-core/lib-compiler/ast/ast-assign.cs","src/prj-core/lib-compiler/ast/ast-begin.cs","src/prj-core/lib-compiler/ast/ast-brk.cs","src/prj-core/lib-compiler/ast/ast-call.cs","src/prj-core/lib-compiler/ast/ast-catch.cs","src/prj-core/lib-compiler/ast/ast-check.cs","src/prj-core/lib-compiler/ast/ast-cont.cs","src/prj-core/lib-compiler/ast/ast-else.cs","src/prj-core/lib-compiler/ast/ast-elseif.cs","src/prj-core/lib-compiler/ast/ast-fn.cs","src/prj-core/lib-compiler/ast/ast-forin.cs","src/prj-core/lib-compiler/ast/ast-fornum.cs","src/prj-core/lib-compiler/ast/ast-forof.cs","src/prj-core/lib-compiler/ast/ast-gn.cs","src/prj-core/lib-compiler/ast/ast-if.cs","src/prj-core/lib-compiler/ast/ast-include.cs","src/prj-core/lib-compiler/ast/ast-inline.cs","src/prj-core/lib-compiler/ast/ast-let.cs","src/prj-core/lib-compiler/ast/ast-ret.cs","src/prj-core/lib-compiler/ast/ast-run.cs","src/prj-core/lib-compiler/ast/ast-throw.cs","src/prj-core/lib-compiler/ast/ast-try.cs","src/prj-core/lib-compiler/ast/ast-var.cs","src/prj-core/lib-compiler/ast/ast-while.cs","src/prj-core/lib-compiler/ast/ast-yield.cs","src/prj-core/lib-compiler/ast/call-ast-block-top.cs","src/prj-core/lib-compiler/ast/call-ast-block.cs","src/prj-core/lib-compiler/ast/call-ast-declare.cs","src/prj-core/lib-compiler/ast/call-ast-for.cs","src/prj-core/lib-compiler/ast/call-ast-if.cs","src/prj-core/lib-compiler/ast/call-ast-xn.cs","src/prj-core/lib-compiler/cpl/cpl-block.cs","src/prj-core/lib-compiler/cpl/cpl-check-fn.cs","src/prj-core/lib-compiler/cpl/cpl-check-syntax.cs","src/prj-core/lib-compiler/cpl/cpl-check.cs","src/prj-core/lib-compiler/cpl/cpl-compile.cs","src/prj-core/lib-compiler/cpl/cpl-concat.cs","src/prj-core/lib-compiler/cpl/cpl-cson.cs","src/prj-core/lib-compiler/cpl/cpl-deinit.cs","src/prj-core/lib-compiler/cpl/cpl-dump.cs","src/prj-core/lib-compiler/cpl/cpl-escape-lisp.cs","src/prj-core/lib-compiler/cpl/cpl-fold.cs","src/prj-core/lib-compiler/cpl/cpl-for.cs","src/prj-core/lib-compiler/cpl/cpl-generate.cs","src/prj-core/lib-compiler/cpl/cpl-include.cs","src/prj-core/lib-compiler/cpl/cpl-init.cs","src/prj-core/lib-compiler/cpl/cpl-is-call.cs","src/prj-core/lib-compiler/cpl/cpl-is-leaf.cs","src/prj-core/lib-compiler/cpl/cpl-load-str.cs","src/prj-core/lib-compiler/cpl/cpl-load.cs","src/prj-core/lib-compiler/cpl/cpl-log-error.cs","src/prj-core/lib-compiler/cpl/cpl-parse.cs","src/prj-core/lib-compiler/cpl/cpl-scan.cs","src/prj-core/lib-compiler/cpl/cpl-scope.cs","src/prj-core/lib-compiler/cpl/cpl-source-map.cs","src/prj-core/lib-compiler/cpl/cpl-tokenize.cs","src/prj-core/lib-compiler/cpl/cpl-translate.cs","src/prj-core/lib-compiler/cpl/cpl-uncomment-str.cs","src/prj-core/lib-compiler/cpl/cpl-uncomment.cs","src/prj-core/lib-compiler/cson/cson-decode.cs","src/prj-core/lib-compiler/cson/cson-encode.cs","src/prj-core/lib-compiler/cson/cson-load.cs","src/prj-core/lib-compiler/cson/cson-save.cs","src/prj-core/lib-compiler/expr/call-expr-arg.cs","src/prj-core/lib-compiler/expr/call-expr-right.cs","src/prj-core/lib-compiler/expr/call-expr-rvalue.cs","src/prj-core/lib-compiler/expr/expr-arr.cs","src/prj-core/lib-compiler/expr/expr-call.cs","src/prj-core/lib-compiler/expr/expr-iif.cs","src/prj-core/lib-compiler/expr/expr-in.cs","src/prj-core/lib-compiler/expr/expr-inline.cs","src/prj-core/lib-compiler/expr/expr-instanceof.cs","src/prj-core/lib-compiler/expr/expr-new.cs","src/prj-core/lib-compiler/expr/expr-not.cs","src/prj-core/lib-compiler/expr/expr-obj.cs","src/prj-core/lib-compiler/expr/expr-run.cs","src/prj-core/lib-compiler/expr/expr-value.cs","src/prj-core/lib-compiler/is/is-cson.cs","src/prj-core/lib-compiler/is/is-data.cs","src/prj-core/lib-compiler/is/is-name.cs","src/prj-core/lib-compiler/is/is-tree.cs","src/prj-core/lib-compiler/pkg-init.cs","src/prj-core/lib-compiler/pkg-resolve.cs","src/prj-core/lib-compiler/uncomment.cs","src/prj-org/lib-org/config-append.cs","src/prj-org/lib-org/config-clean.cs","src/prj-org/lib-org/init-org.cs","src/prj-org/lib-org/org/org-group-create-users.cs","src/prj-org/lib-org/org/org-user-install.cs","src/prj-org/lib-org/org/org-user-load.cs","src/prj-org/lib-org/org/org-user-remove-unused.cs","src/prj-org/lib-org/org/org-user-remove.cs","src/prj-org/lib-org/org/org-user-save.cs","src/prj-org/lib-org/org/org-user-uninstall.cs","src/prj-org/lib-org/org/org-user-update.cs","src/prj-org/lib-org/ps1-encode.cs","src/prj-core/app-make/init.cs","fn abs x:num"," ret Math.abs x","end","fn add x:num y:num z:etc"," let r inline \"x+y\"",""," if is_full z","  ret add r z:etc"," ret r","fn and x:bool y:bool z:etc"," let r inline \"x&&y\"","  ret and r z:etc","fn angle x:str"," ret concat \"<\" x \">\"","fn append x:arr y:arr"," for y","  push x v"," end","fn arr x:etc"," ret inline \"[...x]\"","fn asc x:char"," ret x.codePointAt 0","fn at x:vec y:uint z"," let n dec x.length"," check between y 0 n"," if is_undef z","  ret inline \"x[y]\""," inline \"x[y]=z\"","fn back x:vec y z"," if is_undef y","  ret back x 0"," check is_uint y"," check lt y x.length"," let n sub x.length y"," let n dec n","  ret at x n"," at x n z","fn base36_decode x:str"," var r \"\""," let a explode x"," while is_full a","  let a2 slice_l a 4","  shift a 4","  let s implode a2","  let n Number.parseInt s 36","  check is_uint n","  check lte n ushort_max","  let c chr n","  assign r concat r c","fn base36_encode x:str"," for x","  let s asc v","  let s to_base36 s","  let s pad_l s \"0\" 4","  assign r concat r s","fn between n:num low:num high:num"," check gte high low"," if lt n low","  ret false"," if gt n high"," ret true","fn brace x:str"," ret concat \"{\" x \"}\"","fn bracket x:str"," ret concat \"[\" x \"]\"","fn byte_size x:uint"," if lt x kb","  let s to_fixed x","  ret concat s \"b\""," if lt x mb","  let s div x kb","  let s trunc s","  let s to_fixed s","  ret concat s \"Kb\""," if lt x gb","  let s div x mb","  ret concat s \"Mb\""," if lt x tb","  let s div x gb","  ret concat s \"Gb\""," let s div x tb"," let s trunc s"," let s to_fixed s"," ret concat s \"Tb\"","fn capture x:fn y:etc"," let o record x y:etc"," ret o.output","fn char_escape x:char"," let r asc x"," let r to_hex r"," let r pad_l r \"0\" 4"," let r concat \"\\\\u\" r","fn check_arg is arg name type"," let test is arg"," if is_true test","  ret"," let name to_lit name"," let type to_lit type"," let given get_type arg"," let given to_lit given"," let given space given \"given\""," let given paren given"," let message space \"Expecting argument\" name \"to be of type\" type given"," let message concat message \".\""," stop message","inline \"function check_arity(operator,length,arity)\"","inline \"{\"","inline \" if(operator===\\\"same\\\")\"","inline \" {\"","inline \"  if(length===arity)\"","inline \"   return\"","inline \" }\"","inline \"\"","inline \" if(operator===\\\"gte\\\")\"","inline \"  if(length>=arity)\"","inline \" const message=\\\"Expecting \\\"+arity+\\\" argument(s) (\\\"+length+\\\" given)\\\"\"","inline \" throw new Error(message)\"","inline \"}\"","fn check is args:etc"," if is_true is","  if is_empty args","   ret"," elseif is_fn is","  let b is args:etc","  if is_true b","  let name is.name","  if match_l name \"is_\"","   let arg front args","   let name strip_l name \"is_\"","   let s_name to_lit name","   let s_given get_type arg","   let s_given to_lit s_given","   let s_given space s_given \"given\"","   let s_given paren s_given","   let message space \"Expecting a value of type\" s_name s_given","   let message concat message \".\"","   stop message","  elseif same name \"not\"","   let is front args","   let name strip_l is.name \"is_\"","   let name space \"not\" name","   let name to_lit name","   let message space \"Check failed calling\" name","  else","  end"," stop \"check\"","fn chr x:uint32"," ret String.fromCodePoint x","fn clear x:arr"," x.splice 0","fn clone x"," if is_undef x","  check same arguments.length 1"," let history arr"," fn visit x","  if is_container x","   push history x","  if is_arr x","   let r arr","   for x","    if contain history v","     push r null","     cont","    end","    let v visit v","    push r v","   end","   ret r","  elseif is_obj x","   let r obj","   forin x","    let v get x k","     put r k null","    put r k v","   ret value x"," ret visit x","fn cmp_i18n x:def y:def"," if is_str x","  if is_str y","   let x unaccent x","   let x to_lower x","   let y unaccent y","   let y to_lower y","   ret cmp x y"," ret cmp x y","fn cmp x:def y:def"," if same x y","  ret 0"," if is_arr x","  if is_arr y","   fornum min x.length y.length","    let xval at x i","    let yval at y i","    let n cmp xval yval","    if different n 0","     ret n","   ret cmp x.length y.length"," if is_obj x","  if is_obj y","   let xkeys obj_keys x","   let ykeys obj_keys y","   let xvals obj_vals x","   let yvals obj_vals y","   fornum min xkeys.length ykeys.length","    let xkey at xkeys i","    let ykey at ykeys i","    let n cmp xkey ykey","    let xval at xvals i","    let yval at yvals i","   ret cmp xkeys.length ykeys.length"," if inline \"x>y\"","  ret 1"," if inline \"x<y\"","  ret -1"," ret 0","fn collate x:arr"," fn is_delimited x","  if not is_str x","   ret false","  if same x \"_\"","  if is_punct x","   ret true","  if is_space x"," let a arr","  if is_empty a","   push a v","   cont","  let left back a","  let left back left","  let right front v","  if is_delimited left","  elseif is_delimited right","   push a right","  let s concat left right","  drop a","  push a s"," ret join a \" \"","fn concat x:etc"," ret implode x","fn contain x:composite y","  check same arguments.length 2","  check is_str y","  if is_empty y","  ret x.includes y"," elseif is_arr x"," elseif is_obj x","  forin x","   let v get x k","   if same v y","    ret true"," else","  stop","fn copy x:def"," ret structuredClone x","fn count x:vec y:def","  let a split x y","  ret dec a.length","  var r 0","  for x","    assign r inc r","  ret r","fn crc x:str"," var r 0"," for a","  for s","   let n asc v","   assign r add r n","fn cut_l x:str y:uint"," if lte x.length y","  ret x"," let length sub y 3"," let s slice_r x length"," let a explode s"," while true","  let c front a","  if is_punct c","   shift a","  elseif is_space c","   brk"," let r implode a"," let r concat \"...\" r","fn cut_r x:str y:uint"," check is_str x"," let ellipsis \"...\""," let length sub y ellipsis.length"," let s slice_l x length","  let c back a","   drop a"," let r concat r ellipsis","fn date_decode x:str"," let r new Date x"," let r r.getTime"," let r div r 1000"," let r trunc r","fn date_str x","  let n time_get","  ret date_str n"," check is_num x"," let n mul x 1000"," let o new Date n"," let y o.getFullYear"," let m o.getMonth"," let m inc m"," let m pad_l m \"0\" 2"," let d o.getDate"," let d pad_l d \"0\" 2"," ret concat y \"/\" m \"/\" d","fn dbg_backtrace stack map"," if is_undef stack","  let e new Error \"backtrace\"","  ret dbg_backtrace e.stack map"," check is_str stack"," if is_undef map","  let map dbg_source_map","  ret dbg_backtrace stack map"," check is_obj map"," let r tbl_init"," let stack trim stack"," let stack split stack"," let source map.source"," for stack","  if is_node","   if not contain v map.script","    cont","  let s trim v","  let s replace s \"@\" \" \"","  let a split s \" \"","  let s front a","  if same s \"at\"","  var fn shift a","  if is_empty fn","   assign fn \"anonymous\"","  if not is_noun fn","  let a back a","  let a split a \":\"","  if not is_many a","  let njs back a 1","  let njs to_uint njs","  var index dec njs","  if gte index source.length","  let location at source index","  if is_null location","  let js trim location.js","  let cs trim location.cs","  let path location.path","  let ncs location.index","  let ncs inc location.index","  let o obj fn njs js path ncs cs","  push r o","fn dbg_callstack stack map","  let e new Error \"callstack\"","  ret dbg_callstack e.stack"," let r dbg_backtrace stack map"," while is_full r","  let frame front r","  let fn frame.fn","  if same fn \"throw\"","  elseif same fn \"stop\"","  elseif same fn \"check\"","  elseif same fn \"check_arg\"","  elseif same fn \"check_arity\"","  shift r","fn dbg_here"," let t dbg_callstack"," tbl_remove_column t \"njs\""," tbl_remove_column t \"js\""," let t tbl_render t"," log t","fn dbg_origin_xs stack code_type map","  let e new Error \"origin-xs\"","  ret dbg_origin_xs e.stack"," check is_str code_type","  ret dbg_origin_xs stack code_type map"," let frames dbg_callstack stack map"," let frames head frames 8"," for frames","  var t null","  var label null","  if same code_type \"cs\"","   let file get map.files v.path","   let line v.ncs","   assign t dbg_origin file line","   assign label \"stack\"","  elseif same code_type \"js\"","   let line v.njs","   assign t dbg_origin map.source line \"js\"","   assign label \"javacript\"","   stop","  let s tbl_render t","  let s txt_prepend s \"> \"","  let n inc i","  let title concat \"#\" n","  let title space label \"frame\" title \"/\" v.fn","  flower title","  log s","fn dbg_origin source:arr line:uint key depth"," if is_undef key","  ret dbg_origin source line \"\" depth"," check is_str key"," if is_undef depth","  ret dbg_origin source line key 15"," check is_uint depth"," fn find_origin fn:fn source:arr line:uint key:str depth:uint","  var n depth","  var r fn source line key n","  while lte n source.length","   if gte r.length depth","    brk","   assign n inc n","   assign r fn source line key n","   let end add line r.length","   if gte end source.length"," fn origin source:arr line:uint key:str depth:uint","  let r arr","  let a arr","  let n div depth 2","  let n trunc n","  var n sub line n","  let length min source.length depth","  let nup add n length","  if lt n 1","   assign n 1","  elseif gte nup source.length","   assign n sub source.length length","   if lt n 1","    assign n 1","  fornum length","   let n add n i","   var p \" \"","   if same n line","    assign p \">\"","   let index dec n","   var code at source index","   if is_empty key","    check is_str code","   else","    assign code get code key","   let o obj n p code","   push a o","  let a2 arr","  for a","   push a2 v.code","  let s join a2","  let s txt_unindent s","  let a3 split s","  for a3","   let o at a i","   assign o.code v","   if is_empty v.code","   push r v"," fn origin_center source:arr line:uint key:str depth:uint","  let a origin source line key depth","  ret center a"," fn center x:arr","  var middle get_position x","  var range middle","  let length mul range 2","  let length inc length","  if gt length x.length","   assign range sub x.length middle","   assign range dec range","  let ybefore sub middle range","  let yafter inc middle","  let before slice x ybefore range","  let center at x middle","  let after slice x yafter range","  let r arr before:etc center after:etc"," fn get_position x:arr","   if same v.p \">\"","    ret i"," let centered find_origin origin_center source line key depth"," if same centered.length depth","  ret centered"," ret find_origin origin source line key depth","fn dbg_source_map"," let lines_js split source"," let paths arr"," for relatives","  let path at pool v","  push paths path"," let files obj"," forin contents","  let content get contents k","  let n to_uint k","  let path at pool n","  let lines arr","  for content","   let s at pool v","   push lines s","  put files path lines"," let source arr"," if is_node"," elseif is_browser","  fornum 8","   push source null"," for paths","  if gte i paths.length","  let path at paths i","  let index at indices i","  var line_js i","  elseif is_browser","   assign line_js add line_js 5","  let js at lines_js line_js","  let cs get files path","  let cs at cs index","  let o obj path index js cs","  push source o"," var script null","  assign script global.script"," ret obj script files source","fn dbg_source x"," fn get_source","   ret file_load script","  check is_browser","  let s to_str html.outerHTML","  let lines split s","  for lines","   let s trim v","   if not match_l s \"<\"","   at lines i \"\"","  while is_full lines","   let s back lines","   let s trim s","   if is_empty s","   elseif match_l s \"<\"","   drop lines","  let lines txt_unindent lines","  ret join lines","  assign r get_source","  assign r file_load x"," let r trim_r r"," let r split r","  let s pop r","  if match_l s \"const app=\""," let r join r","fn dec x:num"," ret sub x 1","fn dedup x:arr"," let r arr","  if not contain r v","fn deinit_common"," for tasks","  let name v.name","  let o obj name","  let s obj_option o","  log \"abort\" s","  v.iterator.return"," clear tasks"," let profile time_now"," let profile time_delay profile"," let o obj profile"," let s obj_option o"," log2 app s","  deinit_node","  deinit_browser"," assign zombie true","fn delimit x:str y","  ret delimit x is_fragment"," check is_fn y","  let right v","  if is_empty r","   push r right","  let left back r","  let fragment concat left right","  if y fragment","   drop r","   push r fragment","fn dequote x:str"," let s strip_l x \"\\\"\""," ret strip_r s \"\\\"\"","fn different x y"," ret inline \"x!==y\"","fn div x:num y:num z:etc"," check different y 0"," let r inline \"x/y\"","  ret div r z:etc","fn drop x:arr y","  ret drop x 1"," check lte y x.length"," pop x y","fn dump x"," let name fn_args \"dump\""," check is_single name"," let name front name","  let s to_lit x","  log name s","  log name x","fn dup x:container","  ret slice x 0","  let r obj","  obj_merge r x","fn eq x:def y:def"," let n cmp x y"," ret inline \"n===0\"","fn every x:arr y:fn","  if not y v","fn explode x:str","  push r v","fn extract x:arr y:def"," var r false"," let a dup x"," clear x","  if same v y","   assign r true","   push x v","fn fallback_error x:str y:obj z"," var print value log"," let title space \"Fallback\" x"," try"," catch","  assign print value console.log"," let s to_str y.stack"," let s trim_r s"," let s txt_prepend s \"error-in-error> \""," print s"," check is_obj z"," let s to_str z.stack"," let s txt_prepend s \"original-error> \"","fn filter x:arr y:fn"," ret x.filter y","fn find x:composite y:def"," if is_vec x","  ret x.indexOf y","    ret k","fn flower_box x:str"," let s repeat \"*\" tty_column"," log s"," flower x","fn flower x","  let s repeat \"*\" tty_column"," let s1 repeat \"*\" tty_column"," let s2 repeat \"*\" 2"," let s2 concat s2 \" \""," let s2 concat s2 x"," let s2 concat s2 s1"," let s2 slice_l s2 tty_column"," log s2","fn fn_args x:str"," for dbg_callstack","  let a split v.cs \" \"","  let n find a x","  if lt n 0","  let index inc n","  ret slice a index"," stop","fn fn_match x:str"," let r obj"," forin fns","  if not match k x","  let v get fns k","  put r k v","fn fn_select x:str"," let pattern concat x \"*\""," let fns fn_match pattern","  let name strip_l k x","  put r name v","fn front x:vec"," check is_full x"," ret at x 0","fn get_type x"," if is_null x","  ret \"null\""," ret typeof x","fn get x:obj y:str z"," if has x y"," if is_def z","  ret z","fn gt x:def y:def"," ret inline \"n>0\"","fn gte x:def y:def"," ret inline \"n>=0\"","fn has x:obj y:str"," ret inline \"y in x\"","fn head x:vec y:uint"," if lt x.length y","  if is_str x","   ret x","  elseif is_arr x","   ret dup x"," ret slice_l x y","fn iif x:bool y:def z:def"," if x","  ret y"," ret z","fn implode x:arr"," ret join x \"\"","fn inc x:num"," ret add x 1","fn init_common"," fn on_tick","  let task shift tasks","  let result task.iterator.next","  if not result.done","   push tasks task","  if is_empty tasks","   deinit_common","  time_timeout on_tick"," fn log_compile","  let compile time_hn compile","  var cs 0","  let map map.files","  forin map","   let v get map k","   for v","    if is_empty v","    assign cs inc cs","  let js split source","  let js js.length","  let o obj compile cs js","  log2 app s"," assign global.tasks arr"," assign global.ushort_max mul 256 256"," assign global.uint32_max mul 256 256 256 256"," assign global.unit \"1.3vw\""," assign global.padding \"0.3vw\""," assign global.border \"0.1vw\""," assign global.font_family \"monospace\""," assign global.font_size unit"," assign global.log_secret null"," assign global.log_volatile null"," assign global.mabynogy \"mabynogy\""," var args arr","  assign args init_node","  init_browser"," assign global.source dbg_source"," let skip arr \"init_common\" \"init_node\" \"init_browser\"","  if contain skip k","  if match k \"init_*\"","   let v get fns k","   v"," log_compile"," if is_fn init","  init args:etc"," elseif is_gn init","  task_run init args:etc"," on_tick","fn insert x:arr y:uint z:etc"," x.splice y 0 z:etc","fn is_access x"," if not is_str x"," if is_empty x"," let a split x \".\""," if is_single a"," ret every a is_identifier","fn is_alnum x","  if same v \"_\"","  elseif is_alpha v","  elseif is_digit v","fn is_alpha x","  if is_lower v","  elseif is_upper v","fn is_arg x"," if is_identifier x","  ret true"," if is_access x"," if is_numeric x"," if is_lit x"," if is_lit_char x"," ret false","fn is_arr x"," ret Array.isArray x","fn is_atom x"," if is_alnum x"," if is_tuple x"," if is_lisp x","fn is_blank x"," if is_space x","fn is_bool x"," let s get_type x"," ret same s \"boolean\"","fn is_boolish x"," if same x \"true\""," if same x \"false\"","fn is_browser"," ret has_window","fn is_char x"," ret same x.length 1","fn is_comment x"," if not is_ln x"," ret match_l x \"//\"","fn is_composite x","fn is_container x","fn is_cool x"," if is_num x","fn is_def x"," ret not is_undef x","fn is_digit x","  if not contain digit v","fn is_domain x"," if not is_user x"," let tld pop a"," if not is_alnum tld","  if is_alnum v","  elseif is_lisp v","fn is_empty x","  ret same x.length 0","  let keys obj_keys x","  ret is_empty keys","fn is_false x"," ret same x false","fn is_fn x"," if different s \"function\""," if same x.constructor.name \"GeneratorFunction\"","fn is_fragment x","fn is_full x"," if not is_composite x"," ret not is_empty x","fn is_gn x"," if different x.constructor.name \"GeneratorFunction\"","fn is_identifier x"," let s front x"," if same s \"_\""," elseif is_alpha s","  if not is_alnum v","fn is_indented x"," for split x","  if is_empty v","  let c front v","  if not is_space c","fn is_int x"," ret Number.isInteger x","fn is_ip x"," if is_ip4 x"," if is_ip6 x","fn is_ip4 x"," if different a.length 4","  if not is_digit v","  let n to_uint v","  if gt n 255","fn is_ip6 x"," let a split x \":\""," if lt a.length 3"," if gt a.length 8","  if contain v \"_\"","  if gt v.length 4","fn is_json x","  json_decode x","fn is_key x"," if is_bool x"," if is_ip x","fn is_last x:vec y:uint"," ret same n y","fn is_lisp x"," let a split x \"-\""," ret every a is_alnum","fn is_lit_char x"," if not match_l x \"'\""," if not match_r x \"'\""," let s strip_l x \"'\""," let s strip_r s \"'\""," if is_empty s"," let s concat quote s"," ret is_lit s","fn is_lit x"," if not is_json x"," let v json_decode x"," if not is_str v"," let s json_encode v"," ret same s x","fn is_ln x"," ret not is_txt x","fn is_lower x","  if not contain lower v","fn is_mail x"," let a split x \"@\""," if not is_pair a"," let user shift a"," let domain shift a"," if not is_user user"," if not is_domain domain","fn is_many x"," if not is_vec x"," ret gt x.length 1","fn is_node"," ret not is_browser","fn is_none x","fn is_noun x","fn is_null x"," ret same x null","fn is_nullish x"," ret same x \"null\"","fn is_num x"," if Number.isNaN x"," if same x Number.NEGATIVE_INFINITY"," if same x Number.POSITIVE_INFINITY"," ret same s \"number\"","fn is_numeric x"," if not is_num v","fn is_obj x"," ret same s \"object\"","fn is_pair x","  ret same x.length 2","  ret same keys.length 2","fn is_printable x","  if is_space v","  elseif is_alnum v","  elseif is_punct v","fn is_punct x","  if not contain punct v","fn is_single x","fn is_something x"," ret not is_none x","fn is_space x"," let s trim x"," ret is_empty s","fn is_str x"," ret same s \"string\"","fn is_token x"," if is_atom x"," if is_comment x","fn is_trivia x","fn is_true x"," ret same x true","fn is_tuple x","  if is_identifier v","fn is_txt x","  ret fals"," ret contain x lf","fn is_uint x"," if not is_int x"," ret gte x 0","fn is_uint32 x"," if not is_uint x"," ret lt x uint32_max","fn is_undef x"," ret same x undefined","fn is_upper x","  if not contain upper v","fn is_url x"," let s to_lower x"," if match_l s \"http://\""," elseif match_l s \"https://\"","  url_parse x","fn is_user x"," for split x \"-\"","  for split v \".\"","   if not is_alnum v","    ret false","fn is_ushort x"," ret lt x ushort_max","fn is_vec x","fn is_word x"," if contain x \" \""," if contain x lf"," if contain x cr","fn is_xn x"," if is_fn x"," if is_gn x","fn is_rgb x"," if not is_uint x.r"," if not is_uint x.g"," if not is_uint x.b","fn join x:arr y","  ret join x lf"," check is_str y"," ret x.join y","fn js_encode x:def","  ret to_str x"," elseif is_bool x"," elseif is_num x"," elseif is_str x","  ret to_lit x","   let value js_encode v","   push a value","  let s join a \",\"","  let s bracket s","  ret s","   var key k","   if is_numeric key","    assign key to_lit key","   let pair concat key \":\" value","   push a pair","  let s brace s","fn json_decode x:str"," ret JSON.parse x","fn json_dump x:def"," ret JSON.stringify x null 1","fn json_encode x","  ret \"undefined\""," ret JSON.stringify x","fn json_load path:str"," let s file_load path"," ret json_decode s","fn json_save path:str x:def"," let s json_encode x"," file_save path s","fn log_append x:etc"," fn escape x:str","   if is_printable v","    push a v","   let s char_escape v","   push a s","  ret implode a"," let parts arr","  if is_str v","   let s ansi_strip v","   push parts s","  let s inspect v false","  push parts s"," let pid pad_l process.pid \" \" 7"," let time time_get"," let date date_str time"," let time time_str time true"," let max_line_length mul 10 kb"," let inputs join parts \" \""," let inputs split inputs"," let inputs map inputs escape"," let inputs map inputs head max_line_length"," let lines arr"," if is_empty inputs","  let s space pid date time","  push lines s","  for inputs","   let s space pid date time v"," let content join lines"," let content concat content lf"," if not is_file config_log","  let dir path_dir config_log","  dir_make dir","  file_write config_log content"," let size file_size config_log"," let limit mul 16 mb"," if lt size limit","  file_append config_log content"," let a file_load config_log"," let a split a"," let half div a.length 2"," let half trunc half"," shift a half"," append a lines"," let content join a"," file_write config_log content","fn log x:etc"," fn censor x secret:str","    let v censor v secret","  elseif is_str x","   let s repeat \"x\" secret.length","   ret replace x secret s"," fn node_log x:etc","  let parts arr","   if is_str v","    push parts v","   let s inspect v","  for parts","   let s patch_c1 v","   at parts i s","  let content join parts \" \"","  if is_empty content","   writeln \"\"","   for split content","    let line ansi_head v tty_column","    writeln line","  if log_volatile","  if log_file","   log_append x:etc"," fn writeln x:str","  let s concat x \"\\n\"","  stdout_write s"," if lte verbose -2"," let args arr"," if is_null log_secret","  append args x","  let a censor x log_secret","  append args a"," if is_str log_output","  for args","   let s to_dump v","  let s join a \" \"","  let s concat s lf","  let s concat log_output s","  assign log_output s"," elseif is_node","  node_log args:etc","  if is_empty x","   console.log","   console.log args:etc","fn log2 x:etc"," if gte verbose 0","  log x:etc","fn log3 x:etc"," if gte verbose 1","fn lt x:def y:def"," ret inline \"n<0\"","fn lte x:def y:def"," ret inline \"n<=0\"","fn main"," fn on_load x:obj","  if same document.readyState \"complete\"","   init_common","   assign window.onload null"," var has_window true","  inline \"window\"","  assign has_window false"," if has_window","  assign window.global window","  assign global.has_window true","  assign global.has_window false"," assign global.zombie false"," assign global.start time_get"," assign global.lf \"\\n\""," assign global.cr \"\\r\""," assign global.crlf concat cr lf"," assign global.punct \"!\\\"#$%&'()*+,-./:;<=>?@[\\\\]^`{|}~\""," assign global.digit \"0123456789\""," assign global.lower \"abcdefghijklmnopqrstuvwxyz\""," assign global.upper to_upper lower"," assign global.log_output null"," assign global.verbose 0"," assign global.minute 60"," assign global.hour mul 60 minute"," assign global.day mul 24 hour"," assign global.week mul 7 day"," assign global.month mul 30 day"," assign global.year mul 12 month"," assign global.kb 1024"," assign global.mb mul kb 1024"," assign global.gb mul mb 1024"," assign global.tb mul gb 1024"," assign global.traces arr","  init_common","  assign window.onload on on_load","fn map x:arr y:fn z:etc","  let v y v z:etc","  check is_def v","fn match_l x:str y:str"," if is_empty y"," if gt y.length x.length"," let s slice_l x y.length"," ret same s y","fn match_r x:str y:str"," let s slice_r x y.length","fn match x:str y:str"," let s replace y \".\" \"\\\\.\""," let s replace s \"*\" \".*\""," let s concat \"^\" s \"$\""," let s new RegExp s"," ret s.test x","fn max x:etc"," ret Math.max x:etc","fn min x:etc"," ret Math.min x:etc","fn mod x:num y:num z:etc"," let r inline \"x%y\"","  ret mod r z:etc","fn mul x:num y:num z:etc"," let r inline \"x*y\"","  ret mul r z:etc","fn mute x:fn y:etc"," ret o.result","fn neq x:def y:def"," ret not eq x y","fn nop","fn not x y:etc","  ret not x"," elseif is_fn x","  let v x y:etc","  ret not v","fn obj_keys x:obj"," ret Object.keys x","fn obj_length x:obj"," let keys obj_keys x"," ret keys.length","fn obj_merge x:obj y:obj overload"," if is_undef overload","  ret obj_merge x y true"," if overload","  Object.assign x y","  let r dup x","  forin y","   let v get y k","   if not has r k","fn obj_option x:obj"," forin x","  let v get x k","  let key strip_r k \"_\"","  let key to_lisp key","  var value v","  if is_xn value","   assign value value.name","  if is_key value","   if not is_str value","    assign value to_str value","   assign value to_lit value","  let s concat key \"=\" value","fn obj_order x:obj keys:etc"," for keys","  let value get x v","  put r v value","  if has r k","fn obj_push x:obj key:str val:def","  if same k key"," put r key val","fn obj_remove x:obj key:str","fn obj_unshift x:obj key:str val:def","fn obj_vals x:obj"," ret Object.values x","fn obj"," ret inline \"{}\"","fn on fn:fn args:etc"," fn on_fn x:etc","  if zombie","  ret fn args:etc x:etc"," if zombie"," ret value on_fn","fn or x:bool y:bool z:etc"," let r inline \"x||y\"","  ret or r z:etc","fn pad_l x:cool padding length"," if is_uint x","  let s to_json x","  if is_undef padding","   if is_undef length","    ret pad_l s \"0\" 3","   ret pad_l s \"0\" length","  ret pad_l s padding length"," check is_str padding"," check is_uint length"," ret x.padStart length padding","fn pad_r x:cool padding length","    ret pad_r s \"0\" 3","   ret pad_r s \"0\" length","  ret pad_r s padding length"," ret x.padEnd length padding","fn paren x:str"," ret concat \"(\" x \")\"","fn partial fn:fn args:etc"," fn result x:etc"," ret value result","fn patch_c1 x:str"," fn is_c1 x:str","  let n asc x","  ret between n 128 159"," var previous null","  if is_null previous","  elseif same previous escape","  elseif is_c1 v","  assign previous v"," ret implode a","fn path_compact path:str relative"," fn is_absolute x:str","  if not match_l x \"/\"","  let components path_split x","  if contain components \".\"","  if contain components \"..\""," if is_undef relative","  let relative dir_current","  ret path_compact path relative"," check is_absolute path"," check is_absolute relative"," if same path relative","  ret path"," let path path_split path"," let relative path_split relative"," check gte path.length relative.length","  if is_empty path","  if is_empty relative","  let path_component front path","  let relative_component front relative","  if different path_component relative_component","  shift path","  shift relative"," ret path_join path","fn path_concat x:str y:str z:etc"," let x strip_r x \"/\""," let y strip_l y \"/\""," let r concat x \"/\" y","  ret path_concat r z:etc","fn path_file x:str"," let s path_base x","  ret \"\""," let a split s \".\""," drop a"," ret join a \".\"","fn path_fix x:str"," if match_r x \"/\""," ret concat x \"/\"","fn path_join x:arr"," ret join x \"/\"","fn path_split x:str"," ret split x \"/\"","fn path_strip x:str"," ret strip_r x \"/\"","fn path_unfix x:str","fn path_up x:str"," let a path_split x"," pop a"," ret path_join a","fn pop x:arr y","  ret pop x 1"," if same y 1","  let r back x","  remove x n 1","  ret value r"," remove x n y","fn prepend x:arr y:arr"," let a dup y"," reverse a","  unshift x v","fn profile x:fn y:etc"," let before time_now"," let r x y:etc"," let after time_now"," let profile sub after before"," let profile to_fixed profile"," let profile concat profile \"s\""," log x.name s","fn push x:arr y"," x.push y","fn put x:obj y:str z","  check same arguments.length 3"," set x y z","fn quote x:str"," ret concat \"\\\"\" x \"\\\"\"","fn random_str x:uint alnum"," if is_undef alnum","  ret random_str x true"," check is_bool alnum"," while lt a.length x","  let n random ushort_max","  if alnum","   if is_alnum c","    push a c","   push a c","fn random x","  ret random Number.MAX_SAFE_INTEGER"," check gte x 0"," let r Math.random"," let r mul r x","  ret trunc r","fn record x:fn y:etc"," check is_null log_output"," assign log_output \"\""," var result null","  assign result x y:etc"," catch e","  assign log_output null","  throw e"," let output trim_r log_output"," assign log_output null"," ret obj result output","gn redact secret:str callable:xn args:etc"," check is_null log_secret"," assign log_secret secret"," var r null","  if is_fn callable","   assign r callable args:etc","  elseif is_gn callable","   assign r run callable args:etc","  assign log_secret null"," assign log_secret null","fn reject x:arr y:fn"," check is_arr x","  if y v","fn remove x:arr y:uint z","  ret remove x y 1"," check is_uint z"," check between y 0 x.length"," let n add y z"," check between n 0 x.length"," x.splice y z","fn repeat x:str y:uint"," ret x.repeat y","fn replace_rec x:str y:str z:str"," var r x"," while contain r y","  assign r replace r y z","fn replace x:vec y:str z:str","  ret join a z","    push r z","fn report_html report:obj length human"," if is_def length","  check is_uint length"," var txt report_render report human","  assign txt txt_cut txt length"," let html h_html"," let head h_head"," let title h_title report.message"," let body h_body"," h_font_family body font_family"," h_font_size body font_size"," let pre h_pre txt"," h_push body pre"," h_push head title"," h_push html head"," h_push html body"," let s h_render html"," ret s","fn report_init error query map"," if is_str error","  let stack error","  let lines split error","  let message front lines","  let error obj stack message","  ret report_init error query map"," check is_obj error"," if is_def query","  check is_obj query"," fn log_trace","  if is_empty traces","  flower \"trace\"","  for traces","   log \">\" v"," fn log_stack stack:str","  dbg_origin_xs stack \"cs\" map"," fn log_backtrace stack:str map:obj","  let backtrace dbg_backtrace stack map","  if is_empty backtrace","  tbl_remove_column backtrace \"njs\"","  tbl_remove_column backtrace \"js\"","  let backtrace tbl_render backtrace","  let backtrace txt_prepend backtrace \"> \"","  flower \"backtrace\"","  log backtrace"," fn log_js stack:str","  dbg_origin_xs stack \"js\" map"," let context obj"," var message error.message"," if is_word message","  put context \"reason\" message","  assign message \"An error has occured\"","  assign message strip_r message \".\"","  assign message txt_inline message"," put context \"app\" app"," let type error.constructor.name"," let type to_lower type"," if same type \"error\""," if same type \"object\"","  put context \"type\" type"," let uptime time_now"," let uptime time_delay uptime"," put context \"uptime\" uptime"," if is_browser","  put context \"host\" location.hostname","  let location to_str location","  put context \"location\" location","  var referrer null","  if is_full document.referrer","   let url_referer url_parse document.referrer","   let url_location url_parse context.location","   if different url_referer.host url_location.host","    put context \"referrer\" document.referrer","  let browser browser_get","  put context \"browser\" browser","  put context \"agent\" navigator.userAgent","  check is_undef query","  let errno error.errno","  if is_undef errno","  elseif is_null errno","  elseif same errno 0","   put context \"errno\" errno","  let host os_host","  put context \"host\" host","  if is_obj query","   put context \"url\" query.url.href","   let headers query.request.headers","   var referrer null","   if has headers \"referrer\"","    assign referrer get headers \"referrer\"","   elseif has headers \"referer\"","    assign referrer get headers \"referer\"","   if is_str referrer","    put context \"referrer\" referrer","   put context \"remote\" query.remote"," forin error","  let v get error k","  let skip arr \"message\" \"stack\" \"errno\"","  if is_null v","  put context k v"," let title capture flower_box message"," let context to_tbl context"," let context tbl_render context"," let trace capture log_trace"," let stack capture log_stack error.stack"," let backtrace capture log_backtrace error.stack map"," let js capture log_js error.stack"," ret obj message title context trace stack backtrace js","fn report_log report:obj"," forin report","  if same k \"message\"","  let v get report k","  if same k \"js\"","   log3 v","   log v"," let end space \"end-report\" app \"/\" report.message"," flower end","fn report_render report:obj human"," if is_undef human","  ret report_render report true","  if is_full a","   push a \"\"","  if is_full v"," if human","  push a \"\"","  push a \"Refresh the page or go to another URL to continue.\""," ret join a","gn resolve x:obj"," check is_obj x"," var done false"," var error null"," fn on_then x:def","  assign result x","  assign done true"," fn on_catch x","  check is_obj x","  assign error x"," let promise x.then on_then"," promise.catch on_catch"," while not done","  yield"," if is_obj error","  throw error"," ret result","fn reverse x:vec","  let r explode x","  reverse r","  let r implode r","  x.reverse","fn rgb_init r:uint g:uint b:uint"," ret obj r g b","fn round x:num"," ret Math.round x","fn salt x:str y","  ret salt x \"azertyuiop\""," let a1 explode x"," let a2 explode y"," while is_full a1","  if is_empty a2","   let a explode y","   append a2 a","  let c1 shift a1","  let c2 shift a2","  let n1 asc c1","  let n2 asc c2","  let n xor n1 n2","fn same x y"," ret inline \"x===y\"","fn scan x:str reducer delimiter"," if is_undef reducer","  ret scan x is_token"," check is_fn reducer"," if is_undef delimiter","  ret scan x reducer is_fragment"," check is_fn delimiter"," fn group x:arr reducer:fn","  let fragments dup x","  while is_full fragments","   let a reduce fragments reducer","   if is_full a","    let s implode a","    push r s","    shift fragments a.length","    let s shift fragments"," fn reduce x:arr reducer:fn","  check is_fn reducer","  check is_full x","  while is_full r","   let s implode r","   if reducer s"," let a delimit x delimiter"," ret group a reducer","fn set x:obj y:str z","fn shift x:arr y","  ret shift x 1","  let r front x","  remove x 0 1"," remove x 0 y","fn shuffle x:arr","  let n random a.length","  let v at a n","  remove a n","fn silent x:fn y:etc"," let previous verbose"," assign verbose sub verbose 2","  assign r x y:etc","  assign verbose previous"," assign verbose previous","gn sleep x:num"," let start time_now","  let elapsed time_now","  let elapsed sub elapsed start","  if gte elapsed x","fn slice_l x:vec y:uint"," ret slice x 0 y","fn slice_r x:vec y:uint"," ret slice x n y","fn slice x:vec index:uint length"," check lte index x.length"," if is_undef length","  let n sub x.length index","  ret slice x index n"," check lte length x.length"," let n add index length"," check lte n x.length"," let r x.slice index n"," check same r.length length","fn sort x:container y","  if is_undef y","   x.sort","   check is_fn y","   x.sort y","  fn compare x:obj y:obj","   ret cmp x.key y.key","   ret sort x compare","  check is_fn y","   let key k","   let value get x k","   let o obj key value","  sort a y","   let k v.key","   put r v.key v.value","fn space x:etc"," ret join x \" \"","fn split x:str y","  ret split x lf","  ret arr"," ret x.split y","fn squote x:str"," ret concat \"'\" x \"'\"","fn stop x","  ret stop \"stop\""," let e new Error x"," throw e","fn str_indent x:str"," if is_blank x"," let s trim_l x"," ret sub x.length s.length","fn strip_l x:str y:str"," if match_l x y","  let n sub x.length y.length","  ret slice_r x n"," ret x","fn strip_r x:str y:str"," if match_r x y","  ret slice_l x n","fn sub x:num y:num z:etc"," let r inline \"x-y\"","  ret sub r z:etc","fn tail x:vec y:uint"," ret slice_r x y","fn task_dump","  log \"task\" s","fn task_run x:gn y:etc"," let name x.name"," let iterator x y:etc"," let task obj name iterator"," push tasks task","fn tbl_column x:arr y:str","  let s get v y","  push r s","fn tbl_columns x:arr"," let first front x"," ret obj_keys first","fn tbl_index x:arr","  let v obj_unshift v \"#\" n","fn tbl_init x"," ret arr","fn tbl_pad_l x:arr column:str length","  var length 0","   var cell get v column","   if not is_str cell","    assign cell json_encode cell","   assign length max length cell.length","  ret tbl_pad_l x y length","  let cell get v column","  let cell pad_l cell \" \" length","  set v y cell","fn tbl_remove_column x:arr y:str"," let t dup x"," for t","  let v obj_remove v y","fn tbl_rename_column x:arr y:str z:str","  let row v","  let o obj","  forin row","   let v get row k","   if same k y","    put o z v","   put o k v","  push x o","fn tbl_render x:arr"," fn stringify_tbl x:arr","   let row dup v","   forin v","    let v get row k","    if is_str v","     let s trim_r v","     if is_txt s","      let s json_encode s","      let s dequote s","      set row k s","     else","    let s json_encode v","    set row k s","   push r row"," fn pad_column x:arr","   assign length max length v.length","  if is_numeric_column x","    let s pad_l v \" \" length","    let s pad_r v \" \" length"," fn is_numeric_column x","  if not is_arr x","   if same i 0","   if not is_numeric v"," let tbl stringify_tbl x"," let titles tbl_columns tbl"," let columns arr"," for titles","  let title v","  let column tbl_column tbl title","  unshift column title","  let column pad_column column","  push columns column"," var length 0"," for columns","  let column v","  var n 0","  for column","   assign n max n v.length","  assign length add length n"," assign length add length columns.length"," assign length dec length"," let separator repeat \"-\" length"," push a separator"," let header arr","  let s shift v","  push header s"," let s join header \" \""," push a s"," let first front columns"," for first","  let index i","  let line arr","  for columns","   let s at v index","   push line s","  let s join line \" \"","fn tbl_sort x:arr column:str"," fn compare x:obj y:obj","  let x get x column","  let y get y column","  ret cmp_i18n x y"," sort x compare","fn time_delay x:num"," let minute3 mul minute 3"," let hour3 mul hour 3"," let day3 mul day 3"," let month3 mul month 3"," let year3 mul year 3"," if lt x 10","  let n to_fixed x","  ret concat n \"s\""," if lt x minute3","  let n trunc x"," if lt x hour3","  let n div x minute","  ret concat n \"m\""," if lt x day3","  let n div x hour","  ret concat n \"h\""," if lt x month3","  let n div x day","  ret concat n \"d\""," if lt x year3","  let n div x month","  ret concat n \"mo\""," let n div x year"," let n trunc n"," ret concat n \"y\"","fn time_get"," let n Date.now"," ret div n 1000","fn time_hn x:num"," let now time_get"," if same x now","  ret \"now\""," if gt x now","  let n sub x now","  let s time_delay n","  ret concat \"in \" s"," let n sub now x"," let s time_delay n"," ret concat s \" ago\"","fn time_interval x:fn y","  ret time_interval x 0"," let fn on x"," let n mul y 1000"," setInterval fn n","fn time_now"," let n time_get"," ret sub n start","fn time_str x second","  ret time_str n second"," if is_undef second","  ret time_str x false"," let h o.getHours"," let h pad_l h \"0\" 2"," let m o.getMinutes"," let r concat h \"h\" m \"m\""," if not second"," let s o.getSeconds"," let s pad_l s \"0\" 2"," ret concat r s \"s\"","fn time_timeout x:fn y z:etc","  let t div 1 30","  ret time_timeout x t z:etc"," check is_num y"," let fn on x z:etc"," setTimeout fn n","fn to_base36 x:uint"," ret x.toString 36","fn to_c x:str"," ret replace x \"-\" \"_\"","fn to_dump x"," let val clone x"," if is_arr val","  if is_empty val","   ret \"arr\"","  push a \"arr\"","  for val","   let sharp concat \"#\" i","   if is_ln s","    let s space \"\" sharp s","    push a s","    let s2 space \"\" sharp","    let s txt_indent s 2","    push a s2","  push a \"end\"","  ret join a"," elseif is_obj val","   ret \"obj\"","  push a \"obj\"","  forin val","   let v get val k","   if not is_key key","    let s space \"\" key s","    let s2 space \"\" key"," elseif is_fn val","  ret space \"fn\" val.name"," elseif is_gn val","  ret space \"gn\" val.name","  ret json_encode val","fn to_fixed x:num y","  ret to_fixed x 2"," let a x.toFixed y"," let a split a \".\""," let integer front a"," var float back a"," let digits explode float"," while is_full digits","  let c back digits","  if different c \"0\"","  drop digits"," if is_empty digits","  ret integer"," assign float implode digits"," ret concat integer \".\" float","fn to_hex x:uint"," ret x.toString 16","fn to_i x:str"," ret Number.parseInt x","fn to_int x:str"," let r to_num x"," check is_int r","fn to_json x:def"," ret json_encode x","fn to_lisp x:str"," ret replace x \"_\" \"-\"","fn to_lit x:str","fn to_lower x:str"," ret x.toLowerCase","fn to_num x:str"," let r json_decode x"," check is_num r","fn to_str x:def"," ret x.toString","fn to_tbl x:obj","  let key k","  let value get x k","  let o obj key value","fn to_uint x:str"," let r to_int x"," check is_uint r","fn to_upper x:str"," ret x.toUpperCase","fn trace x:etc"," if is_single x","  let first front x","  if is_str first","   let a split first","   if is_many a","    for a","     trace v","    ret","  log \"trace>\" x:etc","   if not is_str v","  push traces s","  if gt traces.length 64","   shift traces","fn trim_l x:str"," ret x.trimStart","fn trim_r x:str"," ret x.trimEnd","fn trim x:str"," ret x.trim","fn trunc x:num"," ret Math.trunc x","fn tty_width","  if is_ssh","   let code \"\"","   let code concat code \"open(TTY,'<','/dev/tty');\"","   let code concat code \"ioctl(TTY,0x5413,my $b=\\\"\\\\0\\\"x8);\"","   let code concat code \"print((unpack('S*',$b))[1]);\"","   let s os_execute \"perl\" \"-e\" code","   ret to_uint s","  elseif is_batch","   ret 140","   let r process.stdout.columns","   check is_uint r","  ret 80","fn txt_compact x","  let a split x","  let a txt_compact a"," let s join x"," let a split s","  let first front a","  let first trim_r first","  if is_empty first","  if not is_empty v","  let last back r","  if is_empty last","fn txt_cut x y","  check is_uint y","  let a txt_cut a y","  let s head v y","fn txt_head x y:uint","  let a txt_head a y","fn txt_indent x y","  ret txt_indent x 1","  let a txt_indent a y","  let s trim_r v","  if is_empty s","   push r s","   let indent repeat \" \" y","   let s concat indent s","fn txt_inline x","  let r replace x \"\\n\" \" \"","  let r replace r \"\\r\" \"\"","  let r replace_rec r \"  \" \" \"","  let r trim r"," let s txt_inline s"," ret split s","fn txt_prepend x y","  let a txt_prepend a y","  let s concat y v","  if is_blank s","   push r \"\"","fn txt_unindent x","  let a txt_unindent a"," var s join x"," while is_indented s","  for split s","   if is_empty v","   let s slice v 1","  assign s join a","fn unaccent x:str"," let r replace x \"à\" \"a\""," let r replace r \"â\" \"a\""," let r replace r \"ä\" \"a\""," let r replace r \"æ\" \"ae\""," let r replace r \"ç\" \"c\""," let r replace r \"é\" \"e\""," let r replace r \"è\" \"e\""," let r replace r \"ê\" \"e\""," let r replace r \"ë\" \"e\""," let r replace r \"î\" \"i\""," let r replace r \"ï\" \"i\""," let r replace r \"ô\" \"o\""," let r replace r \"ö\" \"o\""," let r replace r \"œ\" \"oe\""," let r replace r \"ù\" \"u\""," let r replace r \"û\" \"u\""," let r replace r \"ü\" \"u\""," let r replace r \"ÿ\" \"y\""," let r replace r \"À\" \"A\""," let r replace r \"Â\" \"A\""," let r replace r \"Ä\" \"A\""," let r replace r \"Æ\" \"AE\""," let r replace r \"Ç\" \"C\""," let r replace r \"É\" \"E\""," let r replace r \"È\" \"E\""," let r replace r \"Ê\" \"E\""," let r replace r \"Ë\" \"E\""," let r replace r \"Î\" \"I\""," let r replace r \"Ï\" \"I\""," let r replace r \"Ô\" \"O\""," let r replace r \"Ö\" \"O\""," let r replace r \"Œ\" \"OE\""," let r replace r \"Ù\" \"U\""," let r replace r \"Û\" \"U\""," let r replace r \"Ü\" \"U\""," let r replace r \"Ÿ\" \"Y\"","fn unshift x:arr y"," x.unshift y","fn unwrap x:str","  ret json_decode x","  ret split x \".\"","  ret split x \":\"","fn url_beautify x:str"," let r strip_l x \"http://\""," let r strip_l r \"https://\""," let r path_unfix r","fn url_get x:etc","  ret http_get x:etc","  ret xhr_get x:etc","fn url_parse x:str"," let url new URL x"," let href url.href"," let protocol strip_r url.protocol \":\""," let user url.username"," let password url.password"," let host url.hostname"," let port url.port"," let path url.pathname"," let hash url.hash"," let args obj"," forof url.searchParams.keys","  var value url.searchParams.get v","  if is_json value","   assign value json_decode value","  put args v value"," ret obj href protocol user password host port path args hash","fn volatile x:etc"," assign log_volatile true","  assign log_volatile false"," assign log_volatile false","gn wait","fn xor x:num y:num z:etc"," let r inline \"x^y\"","  ret xor r z:etc","fn dom_entities"," let result obj"," fn entity x:cool y","  if is_char x","   let n asc x","   ret entity n y","  check is_ushort x","  if is_ushort y","   variant x y","  let key format y","  let c chr x","  put result key c","  variant x"," fn variant x:ushort y","   ret variant x x","  check is_ushort y","  let numeric1 pad_l y \"0\" 3","  let numeric1 concat \"#\" numeric1","  let numeric1 format numeric1","  if not has result numeric1","   put result numeric1 c","  let numeric2 pad_l y \"0\" 4","  let numeric2 concat \"#\" numeric2","  let numeric2 format numeric2","  if not has result numeric2","   put result numeric2 c","  let hex to_hex y","  let hex concat \"#x\" hex","  let hex format hex","  if not has result hex","   put result hex c"," fn format x:str","  ret concat \"&\" x \";\""," entity 33 \"excl\""," entity \"'\" \"quot\""," entity 35 \"num\""," entity 36 \"dollar\""," entity 37 \"percnt\""," entity 38 \"amp\""," entity 39 \"apos\""," entity 40 \"lparen\""," entity 41 \"rparen\""," entity 42 \"ast\""," entity 43 \"plus\""," entity 44 \"comma\""," entity 46 \"period\""," entity 47 \"sol\""," entity 58 \"colon\""," entity 59 \"semi\""," entity 60 \"lt\""," entity 61 \"equals\""," entity 62 \"gt\""," entity 63 \"quest\""," entity 64 \"commat\""," entity 91 \"lsqb\""," entity 92 \"bsol\""," entity 93 \"rsqb\""," entity 94 \"Hat\""," entity 95 \"lowbar\""," entity 96 \"grave\""," entity 123 \"lcub\""," entity 124 \"verbar\""," entity 125 \"rcub\""," entity 126 \"tilde\""," entity 8364 \"euro\""," entity \",\" \"sbquo\""," entity 131 \"fnof\""," entity \"\\\"\" \"bdquo\""," entity 133 \"hellip\""," entity 134 \"dagger\""," entity 135 \"Dagger\""," entity 136 \"circ\""," entity 137 \"permil\""," entity 138 \"Scaron\""," entity \"'\" \"lsaquo\""," entity 140 \"OElig\""," entity 142 \"Zcaron\""," entity \"'\" \"lsquo\""," entity \"'\" \"rsquo\""," entity \"\\\"\" \"ldquo\""," entity \"\\\"\" \"rdquo\""," entity 149 \"bull\""," entity 150 \"ndash\""," entity 151 \"mdash\""," entity 152 732"," entity 153 \"trade\""," entity 154 \"scaron\""," entity \"'\" \"rsaquo\""," entity 156 \"oelig\""," entity 158 \"zcaron\""," entity 159 \"Yuml\""," entity 160 \"nbsp\""," entity 161 \"iexcl\""," entity 162 \"cent\""," entity 163 \"pound\""," entity 164 \"curren\""," entity 165 \"yen\""," entity 166 \"brvbar\""," entity 167 \"sect\""," entity 168 \"uml\""," entity 169 \"copy\""," entity 170 \"ordf\""," entity \"\\\"\" \"laquo\""," entity 172 \"not\""," entity 173 \"shy\""," entity 174 \"reg\""," entity 175 \"macr\""," entity 176 \"deg\""," entity 177 \"plusmn\""," entity 178 \"sup2\""," entity 179 \"sup3\""," entity 180 \"acute\""," entity 181 \"micro\""," entity 182 \"para\""," entity 183 \"middot\""," entity 184 \"cedil\""," entity 185 \"sup1\""," entity 186 \"ordm\""," entity \"\\\"\" \"raquo\""," entity 188 \"frac14\""," entity 189 \"frac12\""," entity 190 \"frac34\""," entity 191 \"iquest\""," entity 192 \"Agrave\""," entity 193 \"Aacute\""," entity 194 \"Acirc\""," entity 195 \"Atilde\""," entity 196 \"Auml\""," entity 197 \"Aring\""," entity 198 \"AElig\""," entity 199 \"Ccedil\""," entity 200 \"Egrave\""," entity 201 \"Eacute\""," entity 202 \"Ecirc\""," entity 203 \"Euml\""," entity 204 \"Igrave\""," entity 205 \"Iacute\""," entity 206 \"Icirc\""," entity 207 \"Iuml\""," entity 208 \"ETH\""," entity 209 \"Ntilde\""," entity 210 \"Ograve\""," entity 211 \"Oacute\""," entity 212 \"Ocirc\""," entity 213 \"Otilde\""," entity 214 \"Ouml\""," entity \"x\" \"times\""," entity 216 \"Oslash\""," entity 217 \"Ugrave\""," entity 218 \"Uacute\""," entity 219 \"Ucirc\""," entity 220 \"Uuml\""," entity 221 \"Yacute\""," entity 222 \"THORN\""," entity 223 \"szlig\""," entity 224 \"agrave\""," entity 225 \"aacute\""," entity 226 \"acirc\""," entity 227 \"atilde\""," entity 228 \"auml\""," entity 229 \"aring\""," entity 230 \"aelig\""," entity 231 \"ccedil\""," entity 232 \"egrave\""," entity 233 \"eacute\""," entity 234 \"ecirc\""," entity 235 \"euml\""," entity 236 \"igrave\""," entity 237 \"iacute\""," entity 238 \"icirc\""," entity 239 \"iuml\""," entity 240 \"eth\""," entity 241 \"ntilde\""," entity 242 \"ograve\""," entity 243 \"oacute\""," entity 244 \"ocirc\""," entity 245 \"otilde\""," entity 246 \"ouml\""," entity 247 \"divide\""," entity 248 \"oslash\""," entity 249 \"ugrave\""," entity 250 \"uacute\""," entity 251 \"ucirc\""," entity 252 \"uuml\""," entity 253 \"yacute\""," entity 254 \"thorn\""," entity 255 \"yuml\"","fn dom_escape x:str","  let entity find entities v","  if same entity -1","   push a entity","fn dom_special_chars x:str"," let r replace x nbsp \"&nbsp;\""," let r replace r \"\\\"\" \"&quot;\""," let r replace r \"'\" \"&apos;\""," let r replace r \"<\" \"&lt;\""," let r replace r \">\" \"&gt;\"","fn dom_unescape x:str"," forin entities","  let v get entities k","  assign r replace r k v","fn h_a x"," let r h_init \"a\" x"," assign r.inline true","fn h_attr x:obj y:str z:cool"," put x.attr y z","fn h_b x"," let r h_init \"b\" x","fn h_back_color x:obj y:str"," h_style x \"background-color\" y","fn h_body"," ret h_init \"body\"","fn h_bold x:obj"," h_style x \"font-weight\" \"bold\"","fn h_border x:obj y","  let style space border \"solid gainsboro\"","  ret h_border x style"," h_style x \"border\" y","fn h_br"," let r h_init \"br\""," assign r.short true","fn h_color x:obj y:str"," h_style x \"color\" y","fn h_decoration x:obj y:str"," h_style x \"text-decoration\" y","fn h_div x"," ret h_init \"div\" x","fn h_float x:obj y:str"," h_style x \"float\" y","fn h_font_family x:obj y:str"," h_style x \"font-family\" y","fn h_font_size x:obj y:str"," h_style x \"font-size\" y","fn h_head"," let r h_init \"head\""," let meta h_meta"," h_attr meta \"charset\" \"utf-8\""," h_push r meta","fn h_href x:obj y:str"," h_attr x \"href\" y","fn h_html"," ret h_init \"html\"","fn h_img"," let r h_init \"img\"","fn h_init name:str text"," if is_undef text","  ret h_init name \"\""," check is_str text"," let short false"," let inline false"," let attr obj"," let style obj"," let children arr"," ret obj name short inline attr style text children","fn h_meta"," let r h_init \"meta\"","fn h_padding_bottom x:obj y:cool"," h_style x \"padding-bottom\" y","fn h_padding_left x:obj y:cool"," h_style x \"padding-left\" y","fn h_padding_right x:obj y:cool"," h_style x \"padding-right\" y","fn h_padding_top x:obj y:cool"," h_style x \"padding-top\" y","fn h_padding x:obj y:cool"," h_style x \"padding\" y","fn h_pre x"," ret h_init \"pre\" x","fn h_push x:obj y:obj"," push x.children y","fn h_render x:obj"," fn inline_text x:str","  let begin front x","  let begin is_space begin","  let end back x","  let end is_space end","  var r txt_inline x","   if begin","    ret \" \"","   if end","  if begin","   assign r concat \" \" r","  if end","   assign r concat r \" \""," fn indent_child x:arr","  let a dup x","  while is_full a","   let s shift a","   if not pre_begin s","    let s txt_indent s","   let s txt_indent s","   if pre_end s","   while is_full a","    let s shift a","    if pre_end s","     brk"," fn pre_begin x:str","  let s trim x","  ret match_l s \"<pre>\""," fn pre_end x:str","  ret match_r s \"</pre>\""," if same x.name \"html\"","  push lines \"<!doctype html>\""," let attr dup x.attr"," if is_full x.style","  var style arr","  forin x.style","   let v get x.style k","   let s concat k \": \" v \";\"","   push style s","  let style join style \" \"","  put attr \"style\" style"," let attributes arr"," forin attr","  let v get attr k","  let s dom_special_chars v","  let s quote s","  let s concat k \"=\" s","  push attributes s"," let attributes join attributes \" \""," let open arr x.name"," if is_full attributes","  push open attributes"," let open join open \" \""," let open angle open"," let close concat \"/\" x.name"," let close angle close"," let text x.text"," let children x.children"," if same name \"pre\"","  check is_empty children","  let text dom_special_chars text","  let line concat open text close","  push lines line"," elseif same name \"script\"","  let text replace text \"</script>\" \"<\\\\/script>\"","  let text txt_indent text","  let text split text","  push lines open","  append lines text","  push lines close"," elseif x.short","  check is_empty text"," elseif x.inline","  var line open","  let text inline_text text","  assign line concat line text","  for children","   let s h_render v","   assign line concat line s","  assign line concat line close"," elseif is_empty children","  let text txt_inline text","  if is_full text","   push lines text","   let a split s","   let a indent_child a","   append lines a"," ret join lines","fn h_script x"," ret h_init \"script\" x","fn h_spacer"," let r h_div"," h_text r nbsp","fn h_span x"," let r h_init \"span\" x","fn h_src x:obj y:str"," h_attr x \"src\" y","fn h_style x:obj y:str z:cool"," put x.style y z","fn h_table"," let r h_init \"table\""," h_style r \"border-collapse\" \"collapse\"","fn h_tbl tbl:arr"," let table h_table"," h_border table"," let tr h_tr"," for tbl_columns tbl","  let th h_th","  h_text th v","  h_padding th padding","  h_border th","  h_push tr th"," h_push table tr"," for tbl","  let tr h_tr","  let even mod i 2","  let even same even 0","  if even","   h_back_color tr \"whitesmoke\"","   h_back_color tr \"white\"","   let td h_td","   if is_cool v","    h_text td v","   elseif is_link v","    let a link_h v","    h_push td a","    stop","   h_padding td padding","   h_push tr td","  h_push table tr"," ret table","fn h_td"," ret h_init \"td\"","fn h_text x:obj y","  ret x.text"," assign x.text y","fn h_th"," ret h_init \"th\"","fn h_title x"," let r h_init \"title\" x","fn h_tr"," ret h_init \"tr\"","fn h_wbr"," let r h_init \"wbr\"","fn h_width x:obj y:cool"," h_style x \"width\" y","fn init_www"," assign global.escape chr 27"," assign global.nbsp chr 160"," assign global.entities dom_entities"," assign global.mailer \"mabynogy@gmail.com\""," assign global.admin \"mabynogy@freeserver.sh\""," assign global.author \"marc@abiven.eu\"","fn is_link x"," if not is_obj x"," if not is_str x.url"," if not is_str x.title","fn link_dom x:obj"," let r dom_a"," dom_href r x.url"," dom_text r x.title","fn link_h x:obj"," let r h_a"," h_href r x.url"," h_text r x.title","fn link_init url:str title"," if is_undef title","  let title url_beautify url","  ret link_init url title"," check is_str title"," ret obj url title","fn app_list"," let include pkg_init"," forin include","  let paths pkg_resolve include k","  let path back paths","  let base path_base path","  if match_l base \"app-\"","   put r k path","fn beep"," let duration 0.1"," task_run os_detach \"play\" \"-n\" \"synth\" duration \"sine\" 880 \"vol\" 0.5","fn deinit_node"," fn clean_tmp","  fs_remove config_tmp","  let app path_up config_tmp","  if dir_empty app","   fs_remove app","  let n random 16","  if same n 0","   let dir_tmp path_up app","   let dir_log path_up config_log","   let before time_now","   let old_tmp remove_old_files dir_tmp","   let old_log remove_old_files dir_log","   let after time_now","   let profile sub after before","   let old_file add old_tmp old_log","   var message false","   if gt old_file 0","    assign message true","   elseif gt profile 2","   if message","    let profile to_fixed profile","    let profile concat profile \"s\"","    var o null","    if gt old_file 0","     assign o obj old_file profile","    else","     assign o obj profile","    let s obj_option o","    log \"clean-tmp\" s"," fn remove_old_files dir:str","  let begin time_now","  let paths dir_load dir true","  for paths","   let now time_now","   let delay sub now begin","   if gt delay 1","   if not is_fs v","   let modified fs_modified v","   let now time_get","   let age sub now modified","   if lt age week","   var remove false","   if is_skeleton v","    assign remove true","   elseif is_dir v","    nop","   elseif is_file v","   if remove","    fs_remove v","    let dir dir_current","    let dir path_fix dir","    let path strip_l v dir","    let age time_delay age","    let o obj path age"," fn is_skeleton x:str","  if is_file x","  let paths dir_load x true","   if is_dir v","    if not is_skeleton v","     ret false","  clean_tmp"," dir_change cwd","fn digest x:str"," let tmp path_tmp"," file_save tmp x"," let r os_execute \"sha256sum\" \"--binary\" tmp"," fs_remove tmp"," let r split r \" \""," let r front r","fn dir_call x:str y:fn z:etc"," let dir dir_current"," dir_change x","  assign r y z:etc","  dir_change dir"," dir_change dir","fn dir_change x:str"," process.chdir x","fn dir_current"," ret process.cwd","fn dir_empty x:str"," let paths dir_read x true"," ret is_empty paths","fn dir_find x:str y:str"," for dir_load x","  let base path_base v","  if match base y","fn dir_load x:str with_dirs"," if is_undef with_dirs","  ret dir_load x false"," check is_bool with_dirs"," for dir_read x true","  if is_file v","  elseif is_dir v","   if with_dirs","   let a dir_load v with_dirs","   append r a","  elseif is_symbolic_link v","fn dir_make x:str"," let recursive true"," let option obj recursive"," no_umask fs.mkdirSync x option","fn dir_read x:str with_dirs","  ret dir_read x false"," let dir path_real x"," let a fs.readdirSync dir"," sort a","  let s path_concat dir v","  if is_file s","  elseif is_dir s","  elseif is_symbolic_link s","fn dir_reset x:str"," fs_remove x"," dir_make x","fn dir_size x:str","  let n file_size v","  assign r add r n","fn file_append x:str y:str"," no_umask fs.appendFileSync x y","fn file_load x:str"," let r file_read x","fn file_read x:str y","  ret file_read x \"utf8\""," let buffer fs.readFileSync x"," ret buffer.toString y","fn file_save x:str y:str"," if is_file x","  let s file_load x","  if same s y"," let dir path_dir x"," if not is_dir dir"," let content trim_r y"," file_write x content","fn file_size x:str"," let stat fs.statSync x"," ret stat.size","fn file_write path:str data:str"," let tmp path_unique path"," no_umask fs.writeFileSync tmp data","  fs_rename tmp path","  fs_remove tmp","fn fs_change_mode x:str y:uint"," fs.chmodSync x y","fn fs_copy x:str y:str","  if is_dir y","   let base path_base x","   let path path_concat y base","   fs_copy x path"," let force true"," let o obj force recursive"," fs.cpSync x y o","fn fs_created x:str"," ret div stat.ctimeMs 1000","fn fs_find dir:str pattern:str"," for dir_load dir true","  if match v pattern","   ret v","fn fs_locate x:str"," let current dir_current"," let parts path_split current"," while is_full parts","  let a dup parts","  push a x","  let path path_join a","  if is_fs path","   ret path","  drop parts","fn fs_mode x:str"," ret stat.mode","fn fs_modified x:str"," ret div stat.mtimeMs 1000","fn fs_remove x:str"," fs.rmSync x o","fn fs_rename source:str target:str"," fs.renameSync source target","gn http_get url:str with_headers"," if is_undef with_headers","  ret run http_get url false"," var result \"\""," var headers obj"," fn get_module url:str","  let s to_lower url","  if match_l s \"http:\"","   ret http","  elseif match_l s \"https:\"","   ret https"," fn on_request response:obj","  forin response.headers","   var v get response.headers k","   if is_numeric v","    assign v to_num v","   put headers k v","  let on_data on on_data","  let on_end on on_end","  response.on \"data\" on_data","  response.on \"end\" on_end"," fn on_data x:obj","  let s to_str x","  assign result concat result s"," fn on_end"," fn on_error x:obj"," let module get_module url"," let request module.get url on_request"," let on_error on on_error"," request.on \"error\" on_error","  if done","  if is_obj error","   throw error"," if is_json result","  assign result json_decode result"," if with_headers","  ret obj result headers","fn init_node"," fn on_uncaught_exception error:obj kind:str","  try","   let _error obj","   for Object.getOwnPropertyNames error","    let v2 get error v","    put _error v v2","   put _error \"kind\" kind","   let report report_init _error","   report_log report","   if is_remote","    report_mail report","  catch e","   fallback_error \"on-uncaught-exception\" e error","  assign zombie true","  process.exit 1"," fn on_warning warning:obj","   let stack split warning.stack","   shift stack","   unshift stack warning.message","   let stack join stack","   let report report_init stack","   fallback_error \"on-warning\" e warning","  process.exit 2"," process.setMaxListeners 1024"," assign global.cp require \"child_process\""," assign global.crypto require \"crypto\""," assign global.fs require \"fs\""," assign global.http require \"http\""," assign global.https require \"https\""," assign global.os require \"os\""," assign global.path require \"path\""," assign global.tls require \"tls\""," assign global.tty require \"tty\""," assign global.util require \"util\""," assign global.tty_column tty_width"," assign global.color false"," assign global.log_file true"," assign global.binary process.execPath"," assign global.cwd dir_current"," assign global.script at process.argv 1"," assign global.script path_real script"," assign global.cpu_time null"," let home os_home"," assign global.config_mabynogy path_concat home \".config\" mabynogy"," let pid to_str process.pid"," let pid pad_l pid \"0\" 6"," assign global.config_tmp path_concat config_mabynogy \"tmp\" app pid"," dir_make config_tmp"," let base concat app \".txt\""," assign global.config_log path_concat config_mabynogy \"log\" base"," process.on \"uncaughtExceptionMonitor\" on_uncaught_exception"," process.on \"warning\" on_warning"," let r slice process.argv 2"," if extract r \"--verbose\"","  assign verbose inc verbose"," if extract r \"--quiet\"","  assign verbose dec verbose"," if extract r \"--color\"","  assign color true"," if extract r \"--no-log\"","  assign log_file false"," let dir path_dir script","fn inspect x color"," if is_undef color","  let color is_color","  ret inspect x color"," check is_bool color"," let showHidden false"," let depth null"," let colors color"," let maxArrayLength null"," let maxStringLength null"," let o obj showHidden depth colors maxArrayLength maxStringLength"," let s util.inspect x o"," for split s","  let indent str_indent v","  let indent div indent 2","  let indent trunc indent","  let indent repeat \" \" indent","  let line trim_l v","  let line concat indent line","  push a line","fn ip_host x:ip"," let timeout 2"," let a silent os_execute \"host\" \"-W\" timeout x"," let first front a"," let first to_lower first"," let last back a"," let last to_lower last"," if contain first \"timed out\"","  ret null"," if contain last \"not found\""," if contain last \"has no ptr record\""," let r split last \" \""," let r back r"," let r strip_r r \".\""," if not is_domain r","fn ip_list"," let s os_execute \"hostname\" \"--all-ip-addresses\""," ret split s \" \"","fn ip_v4"," for ip_list","  if is_ip4 v","fn ip_v6","  if is_ip6 v","fn is_batch"," if not is_node"," ret not is_interactive","fn is_color"," if color"," if is_interactive","fn is_dir x"," let throwIfNoEntry false"," let o obj throwIfNoEntry"," let o fs.statSync x o"," if is_undef o"," ret o.isDirectory","fn is_file x"," ret o.isFile","fn is_fs x"," ret is_def o","fn is_interactive"," ret process.stdout.isTTY","fn is_readable x","  var fd null","   assign fd fs.openSync x","  catch","  let n file_size x","  if gt n 0","   let buffer Buffer.alloc 1","   try","    fs.readSync fd buffer","   catch","    fs.closeSync fd","  fs.closeSync fd"," elseif is_dir x","   fs.readdirSync x","fn is_ssh"," ret has process.env \"SSH_CLIENT\"","fn is_symbolic_link x"," let o fs.lstatSync x o"," ret o.isSymbolicLink","fn no_umask x:fn y:etc"," let mask process.umask 0","  process.umask mask"," process.umask mask","fn node_argv"," ret arr binary \"--trace-uncaught\" \"--trace-deprecation\" \"--trace-warnings\" \"--expose-gc\"","fn node_context"," if gt verbose 0","  push r \"--verbose\""," elseif lt verbose 0","  push r \"--quiet\""," if is_color","  push r \"--color\""," if not log_file","  push r \"--no-log\"","fn open x:str"," os_system \"xdg-open\" x","gn os_batch commands:arr"," let commands dup commands"," let contexts arr"," let cpu os.availableParallelism"," let cpu dec cpu","  while true","   if is_empty commands","    if is_empty contexts","   let alives arr","   while is_full contexts","    let context shift contexts","    var closed false","    if context.closed","     os_end context","     push alives context","     run sleep 0.1","   clear contexts","   append contexts alives","   while is_full commands","    if gte contexts.length cpu","    let command shift commands","    let context os_parallel command:etc","    push contexts context","  for contexts","   v.child.kill","gn os_capture x:str y:etc"," let command arr x y:etc"," var closed false"," var logged false"," var status null"," var out \"\""," var err \"\""," let buffer obj out err"," fn print key:str str:str","  let s get buffer key","  let s concat s str","  set buffer key s","  if not match_r s lf","  if not logged","   os_log os_capture status \"\" \"\" command:etc","   assign logged true","  let s strip_r s lf","  if same key \"out\"","   log s","  elseif same key \"err\"","   let prompt concat \" \" app \" err> \"","   let a arr","   for split s","    let s concat prompt v","    let s head s tty_column","    if lt s.length tty_column","     let s concat s \"\\r\\n\"","     push a s","   let s implode a","   stdout_write s","  set buffer key \"\""," fn on_out data:obj","  let s to_str data","  print \"out\" s","  assign out concat out s"," fn on_err data:obj","  let s ansi_strip s","  print \"err\" s","  assign err concat err s"," fn on_close x y","  if is_null x","  elseif is_int x","  assign status x","  assign closed true"," fn on_error error:obj","  flower \"on-error\""," let stdio arr \"inherit\" \"pipe\" \"pipe\""," let option obj stdio"," let child cp.spawn x y option"," check is_obj child"," fn on_sigint x:str","  child.kill x"," let on_sigint sigint on_sigint"," let on_out on on_out"," let on_err on on_err"," let on_close on on_close"," let stdout child.stdout"," let stderr child.stderr"," stdout.on \"data\" on_out"," stderr.on \"data\" on_err"," child.on \"close\" on_close"," child.on \"error\" on_error"," while not closed"," if is_full buffer.out","  print \"out\" lf"," if is_full buffer.err","  print \"err\" lf"," process.removeListener \"SIGINT\" on_sigint"," let out trim_r out"," let err trim_r err"," if not logged","  os_log os_capture status \"\" \"\" command:etc"," ret obj status out err","fn os_cpu_count"," let cpus os.cpus"," ret cpus.length","fn os_cpu_load"," var time 0"," var idle 0"," forof cpus","  let times v.times","  forin times","   let v get times k","   assign time add time v","  assign idle add idle times.idle"," if is_null cpu_time","  assign cpu_time obj time idle"," let delta_time sub time cpu_time.time"," let delta_idle sub idle cpu_time.idle"," if same delta_time 0","  ret 100"," assign cpu_time.time time"," assign cpu_time.idle idle"," let r div delta_idle delta_time"," let r sub 1 r"," let r mul r 100","gn os_detach x:str y:etc"," let detached true"," let stdio \"ignore\""," let o obj detached stdio"," let r cp.spawn x y o"," r.on \"error\" on_error"," r.unref"," run sleep 0.1","fn os_end context:obj"," check context.closed"," let status context.status"," let command context.command"," let out context.out"," let err context.err"," var report false"," if is_null status"," elseif is_int status","  if different status 0","   assign report true"," if is_full out","  assign report true"," if is_full err"," if report","  os_report os_parallel status out err command:etc"," let command front command"," let command to_lit command","  let message space \"Command\" command \"failed\"","  stop message"," elseif different status 0","  let o obj status","  let s obj_option s","  let s paren s","  let message space \"Command\" command \"failed\" s","fn os_execute x:etc"," let o os_run false x:etc"," let status o.status"," let out o.out"," let err o.err","  push a out","  push a err"," let s join a"," ret trim_r s","fn os_home x","  let user os_user","  ret os_home user"," let r path_concat \"/home\" x"," check is_dir r","fn os_host"," ret os.hostname","fn os_log call:xn status out:str err:str args:etc","  os_report call status out err args:etc","fn os_parallel x:str y:etc"," let closed false"," let status null"," let out \"\""," let err \"\""," let child null"," let context obj command closed status out err child","  assign context.out concat context.out s","  assign context.err concat context.err s","   assign context.status x","  assign context.closed true","  assign context.out trim_r context.out","  assign context.err trim_r context.err","  process.removeListener \"SIGINT\" context.on_sigint"," assign context.child cp.spawn x y","  context.child.kill x"," assign context.on_sigint sigint on_sigint"," let stdout context.child.stdout"," let stderr context.child.stderr"," context.child.on \"close\" on_close"," context.child.on \"error\" on_error"," ret context","gn os_prompt x:str y:etc","   os_log os_prompt status \"\" \"\" command:etc","  let prompt concat \" \" app \" \" key \"> \"","  let s txt_prepend s prompt"," let child cp.spawn x y","  os_log os_prompt status \"\" \"\" command:etc"," ret status","fn os_ps"," let s os_execute \"ps\" \"aux\""," shift a","  let s replace_rec v \"  \" \" \"","  let pid at a 1","  let pid to_uint pid","  let path at a 10","  let args slice a 11","  let o obj pid path args","fn os_report call:xn status out:str err:str args:etc"," let call strip_l call.name \"os_\""," let call to_lisp call"," let command join args \" \""," var o obj command"," if is_int status","   assign o obj_unshift o \"status\" status"," log call s","  let out txt_compact out","  let out split out","  let out tail out 512","  let prompt concat \" \" app \" out> \"","  let s txt_prepend out prompt","  let s join s","  let err txt_compact err","  let err split err","  let err tail err 512","  let prompt concat \" \" app \" err> \"","  let s txt_prepend err prompt","fn os_run binary:bool x:str y:etc"," let maxBuffer mul 1 1024 1024 1024"," let encoding \"utf8\""," let option obj maxBuffer encoding"," let child cp.spawnSync x y option"," if has child \"error\"","  throw child.error"," if is_null child.stdout"," elseif is_str child.stdout","  assign out to_str child.stdout","  if not binary","   assign out ansi_strip out","  assign out trim_r out"," if is_null child.stderr"," elseif is_str child.stderr","  assign err to_str child.stderr","   assign err ansi_strip err","  assign err trim_r err"," let status child.status"," os_log os_run status out err x y:etc","fn os_shell x:etc"," let command join x \" \""," ret cp.execSync command option","fn os_sleep x:num"," os_execute \"sleep\" x","fn os_system x:str y:etc"," let stdio \"inherit\""," let r child.status"," os_log os_system r \"\" \"\" x y:etc","fn os_user"," if is_root","  let r os_execute \"logname\"","  check is_alnum r"," let o os.userInfo"," ret o.username","gn os_wait contexts:arr"," let contexts dup contexts","  while is_full contexts","   let context shift contexts","   if context.closed","    os_end context","    run sleep 0.1","fn path_base x:str"," ret path.basename x","fn path_dir x:str"," ret path.dirname x","fn path_ext x:str"," let s path.extname x"," ret strip_l s \".\"","fn path_real x:str"," ret fs.realpathSync x","fn path_tmp x","  ret path_tmp \"tmp.txt\""," let dir path_split x"," pop dir"," let dir path_join dir"," let dir path_concat config_tmp dir"," let dir path_strip dir"," let base path_base x"," let path path_concat dir base"," ret path_unique path","fn path_unique x:str"," let file path_file x"," let ext path_ext x","  let id random","  let id to_base36 id","  let id head id 7","  var base concat file \"-\" id","  if is_full ext","   assign base concat base \".\" ext","  let r path_concat dir base","  if not is_file r","fn path_writable x:fs"," let path path_real x"," let components path_split path"," while is_full components","  let path path_join components","  if lte path.length 2","  let a_rw 438","  let a_rwx 511","  let mode fs_mode path","  if is_file path","   let bits inline \"mode & a_rw\"","   if same bits a_rw","    fs_change_mode path a_rw","  elseif is_dir path","   let bits inline \"mode & a_rwx\"","   if same bits a_rwx","    fs_change_mode path a_rwx","  drop components","fn report_mail report:obj"," let html report_html report 65 false"," mail author report.message html","fn sigint callback:fn"," fn on_sigint x:str n:uint","  let pid process.pid","  let signal x","  let o obj pid signal n","  log app s","  callback x"," let r on on_sigint"," process.once \"SIGINT\" r"," ret value r","fn stdout_write x:str"," let buffer Buffer.from x"," var offset 0"," while lt offset buffer.length","  let rest sub buffer.length offset","   assign n fs.writeSync process.stdout.fd buffer offset rest","   if same e.code \"EAGAIN\"","    os_sleep 0.1","   throw e","  assign offset add offset n","fn to_base64 x:str"," ret buffer.toString \"base64\"","fn ansi_encode str:str args:etc"," let ansi ansi_init args:etc"," ret concat ansi.escape \"[\" ansi.attr \";\" ansi.fore \";\" ansi.back \"m\" str ansi.escape \"[0m\"","fn ansi_get_attrs"," assign r.normal 0"," assign r.bold 1"," assign r.dim 2"," assign r.underline 4"," assign r.blink 5"," assign r.reverse 7","fn ansi_get_colors"," let list arr"," push list \"default 39 49\""," push list \"black 30 40\""," push list \"red 31 41\""," push list \"green 32 42\""," push list \"yellow 33 43\""," push list \"blue 34 44\""," push list \"magenta 35 45\""," push list \"cyan 36 46\""," push list \"gray 37 47\""," push list \"white 97 107\""," for list","  let a split v \" \"","  let color shift a","  let fore shift a","  let fore to_uint fore","  let back shift a","  let back to_uint back","  let entry obj fore back","  put r color entry","fn ansi_head x:str length:uint"," let at asc \"@\""," let tilde asc \"~\""," var buffer \"\""," var visible 0"," var control 0","  if gte visible length","  let c1 shift a","  if different c1 escape","   assign buffer concat buffer c1","   assign visible inc visible","   let s char_escape c1","   assign buffer concat buffer s","   assign visible add visible s.length","  let c2 shift a","  var malformed false","  if different c2 \"[\"","   assign malformed true","  if malformed","   assign buffer concat buffer c2","   assign visible add visible s.length 1","  var body \"\"","  var closed false","   let c3 shift a","   let n asc c3","   assign body concat body c3","   if between n at tilde","    assign closed true","  if not closed","   assign buffer concat buffer body","   assign visible add visible s.length 1 body.length","  assign buffer concat buffer c1 c2 body","  assign control add control 2 body.length"," let length min visible length"," let length add length control"," let r slice_l buffer length"," if gt control 0","  ret concat r escape \"[0m\"","fn ansi_init fore back attr"," if is_undef fore","  ret ansi_init \"black\" back attr"," if is_undef back","  ret ansi_init fore \"white\" attr"," if is_undef attr","  ret ansi_init fore back \"normal\""," fn get_fore x:def","   let colors ansi_get_colors","   let n get colors x","   let n n.fore","   ret to_str n","  elseif is_rgb x","   let n ansi_rgb x","   ret concat \"38;5;\" n"," fn get_back x:def","   let n n.back","   ret concat \"48;5;\" n"," fn get_attr x","  check is_str x","  let attrs ansi_get_attrs","  ret get attrs x"," let fore get_fore fore"," let back get_back back"," let attr get_attr attr"," ret obj escape fore back attr","fn ansi_rgb x:obj"," let r mul x.r 36"," let g mul x.g 6"," let b x.b"," ret add 16 r g b","fn ansi_strip x:str"," ret util.stripVTControlCharacters x","fn app_token x:str"," var r concat \".\" x","  assign r fs_locate r","  assign r path_concat common r"," let r file_load r"," let r base36_decode r"," let r salt r","fn archive_find x:str"," let date date_str"," let date replace date \"/\" \"-\""," let base concat file \"-\" date \".\" ext"," if not is_file path"," var n 1","  let digit pad_l n","  let base concat file \"-\" date \"-\" digit \".\" ext","  let path path_concat dir base","fn group_list"," let users user_list false"," fn find_users gid:uint","  forin users","   let v get users k","   if same v.gid gid","    push r v.name"," let lines file_load \"/etc/group\""," let lines split lines"," for lines","  let fields split v \":\"","  let name shift fields","  let password shift fields","  let gid shift fields","  let gid to_uint gid","  let users shift fields","  let users split users \",\"","  check is_empty fields","  let a find_users gid","  append users a","  let users dedup users","  sort users","  let o obj gid name users","  put r name o","fn init_shell"," assign global.ssh_timeout 2"," assign global.common fs_locate \"common\"","fn is_local"," let host os_host"," ret same host \"castle\"","fn is_remote"," ret not is_local","fn is_root"," ret same o.username \"root\"","fn mail_debug subject:str data:obj"," let data to_tbl data"," let table h_tbl data"," h_push body table"," let html h_render html"," mail author subject html","fn mail to:str subject:str body:str from paths:etc"," if is_undef from","  ret mail to subject body admin paths:etc"," fn single_part to:str subject:str body:str from:str","  let body quoted_printable body","  let s concat \"from:\" from","  let s concat \"to:\" to","  let s concat \"subject:\" subject","  push a \"mime-version: 1.0\"","  push a \"content-type: text/html;charset=utf-8\"","  push a \"content-transfer-encoding: quoted-printable\"","  push a body","  ret join a crlf"," fn multi_part to:str subject:str body:str from:str paths:etc","  let boundary get_boundary body","  let dash_boundary concat \"--\" boundary","  let end_boundary concat dash_boundary \"--\"","  let s quote boundary","  let s concat \"content-type: multipart/related; boundary=\" s","  push a dash_boundary","  push a \"content-type: text/html; charset=utf-8\"","   let base path_base v","   let file path_file v","   let mime mime_type v","   let content file_read v \"base64\"","   let content chunk_76 content","   push a dash_boundary","   let s space \"content-type:\" mime","   push a \"content-transfer-encoding: base64\"","   let s2 angle file","   let s concat \"content-id: \" s2","   let s2 quote base","   let s concat \"content-disposition: inline; filename=\" s2","   push a content","  push a end_boundary"," fn config","  let token app_token mabynogy","  push a \"account gmail\"","  push a \"host smtp.gmail.com\"","  push a \"port 587\"","  push a \"protocol smtp\"","  push a \"auth on\"","  let s space \"from\" mailer","  let s space \"user\" mailer","  let s space \"password\" token","  push a \"tls on\"","  push a \"tls_starttls on\"","  push a \"tls_trust_file /etc/ssl/certs/ca-certificates.crt\"","  push a \"account default: gmail\""," fn quoted_printable x:str","  let path path_tmp \"qp.txt\"","  file_save path x","  let r os_execute \"python3\" \"-m\" \"quopri\" path","  fs_remove path"," fn chunk_76 x:str","  var input x","  let output arr","  while is_full input","   let s head input 76","   assign input slice input s.length","   push output s","  ret join output crlf"," fn get_boundary body:str","   let r random_str 8","   if not contain body r","    ret r"," let config_content config"," var body_content null"," if is_full paths","  assign body_content multi_part to subject body from paths:etc","  assign body_content single_part to subject body from"," let config_path path_tmp \"msmtp.txt\""," let body_path path_tmp \"body.txt\""," file_save config_path config_content"," file_save body_path body_content"," let option_file concat \"--file=\" config_path"," fs_change_mode config_path 384"," let s os_shell \"msmtp\" \"--debug\" option_file \"--read-recipients\" \"<\" body_path"," let s txt_prepend s \" > \""," trace \"msmtp\""," trace s"," fs_remove config_path"," fs_remove body_path","fn mime_type path:file"," let r os_execute \"file\" \"--mime\" \"--brief\" path"," let r strip_r r \";\"","fn mnt_clean x:str"," if is_readable x","  mnt_unmount x","  fs_remove x","fn mnt_unmount x"," ret os_execute \"fusermount\" \"-u\" x","fn password alnum","  ret password false"," fn make_password","  fornum 10","   let s random_char"," let special \"_-?\""," fn random_char","  let chars arr","   let a1 explode digit","   let a2 explode lower","   append chars a1","   append chars a2","   let a1 explode special","   let a2 explode digit","   let a3 explode lower","   let a4 explode upper","   append chars a3","   append chars a4","  let n random chars.length","  ret at chars n"," fn is_valid x","   ret is_alnum x","  var special false","  var alpha false","  var digit false","  var upper false","  var lower false","   if is_special v","    assign special true","   if is_alpha v","    assign alpha true","   if is_digit v","    assign digit true","   if is_upper v","    assign upper true","   if is_lower v","    assign lower true","  if not special","  if not alpha","  if not digit","  if not upper","  if not lower"," fn is_special x","   if not contain special v","  let r make_password","  if is_valid r","gn rsync token:str args:etc"," let timeout concat \"ssh -4 -o ConnectTimeout=\" ssh_timeout \" -o ConnectionAttempts=1\""," let timeout concat \"--rsh=\" timeout"," push a \"rsync\""," push a timeout"," push a \"--recursive\""," push a \"--perms\""," push a \"--delete\""," push a \"--compress-level=9\""," append a args"," ret run ssh_pass token a:etc","gn ssh_pass x:etc"," let args dup x"," let first shift args"," if is_str first","  ret run ssh_pass os_execute x:etc"," check is_xn first"," let token shift args"," check is_str token"," let arguments arr \"sshpass\" \"-p\" token args:etc"," ret run redact token first arguments:etc","gn ssh token:str args:etc"," let timeout concat \"ConnectTimeout=\" ssh_timeout"," push a \"ssh\""," push a \"-4\""," push a \"-o\""," push a \"ConnectionAttempts=1\""," push a \"Compression=yes\"","fn sudo_dir_make path:str"," check not is_dir path"," sudo \"mkdir\" \"--parents\" path"," sudo_path_writable path","fn sudo_dir_reset path:str"," sudo_fs_remove path"," sudo_dir_make path","fn sudo_file_append path:str data:str"," let content file_read path"," let content concat content data"," sudo_file_save path content","fn sudo_file_read path:str"," let result sudo os_run true \"cat\" path"," check same result.status 0"," check is_empty result.err"," ret result.out","fn sudo_file_save path:str data:str"," let dir path_dir path"," let base path_base path"," let tmp path_tmp base","  sudo_dir_make dir"," file_save tmp data"," sudo \"mv\" \"--force\" tmp path","fn sudo_file_write path:str data:str"," file_write tmp data","fn sudo_fs_change_mode path:str pattern:str"," check is_fs path"," sudo \"chmod\" pattern path","fn sudo_fs_remove path:str"," sudo \"rm\" \"--recursive\" \"--force\" path","fn sudo_is_dir x"," let result sudo os_run false \"stat\" \"--terse\" \"--format=%F\" x"," if same result.status 1"," ret contain result.out \"directory\"","fn sudo_is_file x"," ret contain result.out \"file\"","fn sudo_path_writable path:str","   sudo_fs_change_mode path \"a+rw\"","   sudo_fs_change_mode path \"a+rwx\"","fn sudo x y:etc"," if not is_fn x","  ret sudo os_system x y:etc"," if same x os_run","  let y dup y","  let binary shift y","  check is_bool binary","  ret x binary \"sudo\" y:etc"," ret x \"sudo\" y:etc","fn unzip x y:etc","  ret unzip os_system x y:etc"," ret x \"unzip\" y:etc","fn user_created x:obj"," var r x.created"," let home x.home"," let last_log x.last_log"," if is_str home","  let n fs_created home","  if is_null r","   assign r n","   assign r min r n"," if is_num last_log","   assign r last_log","   assign r min r last_log","fn user_list with_group"," if is_undef with_group","  ret user_list true"," check is_bool with_group"," fn last_log user:str","  let lines os_execute \"last\" \"--fulltimes\" \"-R\" user","  let lines split lines","  let line front lines","  if is_empty line","   ret null","  let line replace_rec line \"  \" \" \"","  let parts split line \" \"","  shift parts 2","  let parts slice_l parts 5","  let line join parts \" \"","  ret date_decode line"," var groups null"," fn find_group gid:uint","  forin groups","   let v get groups k","    ret v.name"," fn find_groups name:str","   if contain v.users name"," let lines file_load \"/etc/passwd\""," if with_group","  assign groups group_list","  let uid shift fields","  let uid to_uint uid","  let comment shift fields","  let home shift fields","  let shell shift fields","  let human match_l home \"/home/\"","  var created null","  let last_log last_log name","  let o obj uid gid name comment home shell human created last_log","  if with_group","   let group find_group gid","   let groups find_groups name","   unshift groups group","   let groups dedup groups","   sort groups","   assign o.groups groups","   obj_order o \"uid\" \"gid\" \"name\" \"groups\"","fn zip x y:etc","  ret zip os_system x y:etc"," ret x \"zip\" \"--recurse-paths\" \"-9\" y:etc","fn app_home app:str"," let js app_make app"," let title h_title app"," let script h_script js"," h_push body script"," ret h_render html","fn app_make app:str"," let cpl cpl_init app"," let o obj app"," log \"make\" s"," cpl_include cpl"," let r cpl_generate cpl"," let tmp concat app \"-tmp.js\""," let tmp path_tmp tmp"," file_save tmp r"," let success cpl_check_syntax cpl tmp"," check success"," cpl_deinit cpl","fn ast_assign cpl:obj args:arr children:arr source:obj"," check is_empty children"," let left front args"," check is_name left"," let right slice args 1"," let right call_expr_right cpl right:etc"," let code concat left \"=\" right"," ret obj code source","fn ast_begin cpl:obj args:arr children:arr source:obj"," check is_empty args"," let r call_ast_block cpl children source"," if cpl_is_leaf cpl children","  check is_single r","  let node front r","  assign node.code trim node.code","fn ast_brk cpl:obj args:arr children:arr source:obj"," let code \"break\"","fn ast_call cpl:obj args:arr children:arr source:obj"," check is_full args"," let code expr_call cpl args:etc","fn ast_catch cpl:obj args:arr children:arr source:obj"," let block call_ast_block_top cpl children source"," if is_empty args","  let code \"catch\"","  let node obj code source","  push r node","  append r block"," check is_single args"," let identifier front args"," check is_identifier identifier"," let code paren identifier"," let code concat \"catch\" code"," let node obj code source"," push r node"," append r block","fn ast_check cpl:obj args:arr children:arr source:obj"," let code join args \",\""," let code paren code"," let code concat \"check\" code","fn ast_cont cpl:obj args:arr children:arr source:obj"," let code \"continue\"","fn ast_else cpl:obj args:arr children:arr source:obj"," let code \"else\""," let block call_ast_block cpl children source","fn ast_elseif cpl:obj args:arr children:arr source:obj"," ret call_ast_if cpl args children source \"else if\"","fn ast_fn cpl:obj args:arr children:arr source:obj"," ret call_ast_xn cpl args children source \"function\"","fn ast_forin cpl:obj args:arr children:arr source:obj"," ret call_ast_for cpl args children source \"k in\"","fn ast_fornum cpl:obj args:arr children:arr source:obj"," let code call_expr_right cpl args:etc"," let code concat \"let i=0;i<\" code \";i++\""," let code concat \"for\" code","fn ast_forof cpl:obj args:arr children:arr source:obj"," ret call_ast_for cpl args children source \"v of\"","fn ast_gn cpl:obj args:arr children:arr source:obj"," ret call_ast_xn cpl args children source \"function*\"","fn ast_if cpl:obj args:arr children:arr source:obj"," ret call_ast_if cpl args children source \"if\"","fn ast_include cpl:obj args:arr children:arr source:obj"," let path front args"," check is_lit path"," let path unwrap path","fn ast_inline cpl:obj args:arr children:arr source:obj"," let code front args"," check is_lit code"," let code unwrap code","fn ast_let cpl:obj args:arr children:arr source:obj"," check is_many args"," ret call_ast_declare cpl args children source \"const\"","fn ast_ret cpl:obj args:arr children:arr source:obj"," var code \"\"","  assign code \"return\"","  let right call_expr_right cpl args:etc","  assign code space \"return\" right","fn ast_run cpl:obj args:arr children:arr source:obj"," let code space \"yield*\" code","fn ast_throw cpl:obj args:arr children:arr source:obj"," let code space \"throw\" code","fn ast_try cpl:obj args:arr children:arr source:obj"," let code \"try\"","fn ast_var cpl:obj args:arr children:arr source:obj"," ret call_ast_declare cpl args children source \"let\"","fn ast_while cpl:obj args:arr children:arr source:obj"," let code concat \"while\" code","fn ast_yield cpl:obj args:arr children:arr source:obj","  let code \"yield\"","  ret obj code source"," let code space \"yield\" code","fn call_ast_block_top cpl:obj children:arr source:obj"," for cpl_block cpl children","  let o copy v","  assign o.code txt_indent o.code"," let code \"{\""," let open obj code source"," let code \"}\""," let close obj code source"," unshift r open"," push r close","fn call_ast_block cpl:obj children:arr source:obj"," if not cpl_is_leaf cpl children","  let code \"{\"","  let open obj code source","  let code \"}\"","  let close obj code source","  unshift r open","  push r close","fn call_ast_declare cpl:obj args:arr children:arr source:obj keyword:str"," if is_full children","  let _args args","  let operator at args 1","  let args arr","  let node obj operator args children source","  let r cpl_cson cpl node","  let name front _args","  let code concat keyword \" \" name \"=\"","  let o obj code source","  unshift r o"," let code slice args 1"," let code call_expr_right cpl code:etc"," let code concat identifier \"=\" code"," let code space keyword code","fn call_ast_for cpl:obj args:arr children:arr source:obj keyword:str"," let code space \"const\" keyword code","fn call_ast_if cpl:obj args:arr children:arr source:obj keyword:str"," let code concat keyword code","fn call_ast_xn cpl:obj args:arr children:arr source:obj keyword:str"," fn get_argument x:str","  if is_identifier x","  if is_tuple x","   let a unwrap x","   check is_pair a","   let name front a","   let etc back a","   check is_identifier name","   check same etc \"etc\"","   ret concat \"...\" name"," let name front args"," check is_identifier name"," let args slice args 1"," let parameters map args get_argument"," for parameters","  let n count parameters v","  if same n 1","  let arg to_lit v","  let message space \"Argument\" arg \"defined\" n \"times\""," let parameters join parameters \",\""," let list paren parameters"," let code concat name list","fn cpl_block cpl:obj nodes:arr"," for nodes","  let a cpl_translate cpl v","  append r a","fn cpl_check_fn cpl:obj nodes:arr path:str"," let file path_file path"," let name to_c file"," if same name \"check_arity\"","  if same v.operator \"fn\"","  elseif same v.operator \"gn\"","  let xn front v.args","  if same xn name"," let file to_lit file"," let message space \"The file\" file \"must define a function or a generator nammed\" name","fn cpl_check_syntax cpl:obj path"," if is_undef path","  ret cpl_check_syntax cpl cpl.target"," check is_str path"," let argv node_argv"," let o os_run false argv:etc \"--check\" path"," check is_empty o.out"," if same o.status 0","  check is_empty o.err"," check cpl_log_error cpl o.err path","fn cpl_check cpl:obj nodes:arr"," fn visit nodes:arr","  for nodes","    if not is_callable v.operator","     let node dup v","     assign node.children visit node.children","     push r node","    let node instrument v","    push r node","   catch e","    unshift cpl.stack v","    throw e"," fn instrument node:obj","  let r dup node","  let name front r.args","  let parameters slice r.args 1","  let arity get_arity parameters","  if same arity.operator \"gte\"","   if same arity.count 0","    assign r.children visit r.children","  let operator \"check_arity\"","  let count to_str arity.count","  let s_operator to_lit arity.operator","  let args arr s_operator \"arguments.length\" count","  let children arr","  let source dup r.source","  unshift r.children node","  reverse parameters","  clear r.args","  for parameters","   if is_identifier v","    unshift r.args v","   check is_tuple v","   let a unwrap v","   let identifier at a 0","   let type at a 1","   if same type \"etc\"","   unshift r.args identifier","   let s_identifier to_lit identifier","   let s_type to_lit type","   let is concat \"is_\" type","   let operator \"check_arg\"","   let args arr is identifier s_identifier s_type","   let children arr","   let source dup r.source","   let node obj operator args children source","   unshift r.children node","  unshift r.args name","  assign r.children visit r.children"," fn get_arity args:arr","  var operator \"same\"","  var count 0","   if is_tuple v","    let a unwrap v","    let type at a 1","    if same type \"etc\"","     assign operator \"gte\"","   elseif is_identifier v","    assign operator \"gte\"","   assign count inc count","  ret obj operator count"," fn is_callable operator:str","  if same operator \"fn\"","  if same operator \"gn\""," ret visit nodes","fn cpl_compile cpl:obj path:str"," var nodes cpl_parse cpl path"," cpl_check_fn cpl nodes path","  assign nodes cpl_check cpl nodes","  assign nodes cpl_for cpl nodes","  assign nodes cpl_scope cpl nodes","  assign nodes cpl_block cpl nodes","  cpl_dump cpl"," ret nodes","fn cpl_concat cpl:obj"," for cpl.out","  push r v.code","fn cpl_cson cpl:obj node:obj"," check is_empty node.args"," fn compile node:obj","  let operator node.operator","  let children node.children","  let source node.source","  if is_tree operator","   if is_empty children","    var code \"\"","    if same operator \"arr\"","     assign code \"[]\"","    elseif same operator \"obj\"","     assign code \"{}\"","     stop","    let source dup source","    let o obj code source","    push r o","  if same operator \"arr\"","   let code \"[\"","   let source dup source","   let o obj code source","   push r o","   for children","    check is_empty v.args","    let operator v.operator","    if is_tree operator","     let a cpl_cson cpl v","     let a indent_nodes a","     append r a","    elseif is_data operator","     let code concat \" \" operator","     let source dup v.source","     let o obj code source","     push r o","    if not is_last children i","     let o back r","     assign o.code concat o.code \",\"","   let code \"]\"","  elseif same operator \"obj\"","   let code \"{\"","   let keys arr","    let args v.args","    check is_single args","    let key v.operator","    check is_key_str key","    var key_content key","    if is_lit key_content","     let s unwrap key_content","     if is_name s","      assign key_content s","    if contain keys key_content","     let key to_lit key_content","     let message space \"The key\" key \"is duplicated\"","     stop message","    push keys key_content","    let value front args","    if is_tree value","     let o dup v","     let s front args","     assign o.operator s","     clear o.args","     let a cpl_cson cpl o","     let code concat \" \" key \":\"","     let source dup source","    elseif is_data value","     let code concat \" \" key \":\" value","     let node obj code source","     let node back r","     assign node.code concat node.code \",\"","   let code \"}\"","   let node obj code source","   push r node"," fn indent_nodes x:arr","  for r","   assign v.code concat \" \" v.code"," fn is_key_str x","  if is_numeric x","  if is_lit x","  ret compile node","  unshift cpl.stack node","fn cpl_deinit cpl:obj"," let s json_dump cpl.cache"," file_save cpl.path s","fn cpl_dump cpl:obj"," check is_obj cpl"," fn dump_ast node:obj","  let args node.args","  let a3 arr","  push a2 node.operator","  append a2 args","  for a2","   if is_token v","    push a3 v","   elseif is_str v","    let s to_lit v","    push a3 s","  let cs space a3:etc","  var path source.path","  if not is_null path","   assign path path_compact source.path","  let ncs source.index","  let ncs inc ncs","  var o obj ncs cs","   assign o obj_unshift o \"path\" path","   let t dump_ast v","   for t","    assign v.cs txt_indent v.cs","   append r t","  if is_full children","   let cs \"end\"","   let o obj path ncs cs"," for cpl.stack","  let frame concat \"#\" n","  let title space \"compiler frame\" frame","  let s dump_ast v","  let s tbl_render s","fn cpl_escape_lisp cpl:obj nodes:arr","  let node copy v","  if is_lisp operator","   assign node.operator to_lit operator","   if is_lisp v","    at args i s","fn cpl_fold cpl:obj nodes:arr","  let parent shift nodes","  let indent parent.indent","  let descendants arr","  while is_full nodes","   let o front nodes","   if gt o.indent indent","    shift nodes","    push descendants o","  while is_full descendants","   let o visit descendants","   push children o","  let operator parent.operator","  let args parent.args","  let source parent.source","  ret obj operator args children source"," let nodes dup nodes"," while is_full nodes","  let o visit nodes","fn cpl_for cpl:obj nodes:arr","   if different v.operator \"for\"","    let node dup v","    assign node.children visit node.children","   let nodes generate v","   append r nodes"," fn generate node:obj","  let operator \"let\"","  let args arr \"_a\" args:etc","  let source dup node.source","  let node2 obj operator args children source","  push r node2","  let operator \"forin\"","  let args arr \"_a\"","  let children visit node.children","  let node3 obj operator args children source","  push r node3","  let args arr \"v\" \"at\" \"_a\" \"i\"","  let node4 obj operator args children source","  unshift node3.children node4","  let args arr \"i\" \"to_i\" \"k\"","  let node5 obj operator args children source","  unshift node3.children node5","fn cpl_generate cpl:obj"," let pool arr"," fn get_index x:str","  let r find pool x","  if gte r 0","  let r pool.length","  push pool x"," let a cpl_concat cpl"," let relatives arr"," let indices arr","  let source v.source","  let path path_compact source.path","  if not contain paths path","   push paths path","  let n get_index path","  push relatives n","  push indices source.index"," let contents obj","  let key get_index v","  let key to_str key","  let content cpl_uncomment cpl v","  let value arr","  for split content","   let index get_index v","   push value index","  put contents key value"," let app to_lit cpl.app"," let app concat \"const app=\" app"," push a app"," let compile time_get"," let compile trunc compile"," let compile concat \"const compile=\" compile"," push a compile"," let pool json_encode pool"," let pool concat \"const pool=\" pool"," push a pool"," let relatives json_encode relatives"," let relatives concat \"const relatives=\" relatives"," push a relatives"," let indices json_encode indices"," let indices concat \"const indices=\" indices"," push a indices"," let contents js_encode contents"," let contents concat \"const contents=\" contents"," push a contents"," let fns join cpl.fns \",\""," let fns brace fns"," let fns concat \"const fns=\" fns"," push a fns"," push a \"main()\"","fn cpl_include cpl:obj"," fn compile_cache path:str","  let cache cpl.cache.files","  let modified fs_modified path","  var recompile false","  if has cache path","   let entry get cache path","   if different entry.modified modified","    assign recompile true","   assign recompile true","  if not recompile","   let nodes entry.nodes","   declare_fn path nodes","   ret nodes","  let modified_ time_hn modified","  let o obj path modified_","  trace \"compile\" s","  let nodes cpl_compile cpl path","  declare_fn path nodes","  let entry obj modified nodes","  set cache path entry","  ret nodes"," fn declare_fn path:str nodes:arr","  if is_empty nodes","  let fn path_file path","  let fn to_c fn","  push cpl.fns fn"," fn get_files x:arr","   let a dir_load v"," let paths pkg_resolve include cpl.app"," let files get_files paths"," for files","  let ext path_ext v","  if different ext \"cs\"","  let nodes compile_cache v","  append cpl.out nodes","fn cpl_init app:str"," let path \"cache.txt\""," fn load_cache","   ret json_load path","  let scans obj","  let files obj","  ret obj scans files"," let asts fn_select \"ast_\""," let exprs fn_select \"expr_\""," let fns arr"," let stack arr"," let out arr"," let target concat \"out-\" app \".js\""," let cache load_cache"," ret obj app asts exprs fns files stack out target path cache","fn cpl_is_call cpl:obj token:str"," if same token \"call\""," forin cpl.asts","  if same k token","fn cpl_is_leaf cpl:obj nodes:arr"," if not is_single nodes"," let node front nodes"," let operator node.operator"," if cpl_is_call cpl operator"," let operators arr \"brk\" \"check\" \"cont\" \"inline\" \"ret\" \"run\" \"throw\" \"yield\""," ret contain operators operator","fn cpl_load_str cpl:obj str:str"," let lines cpl_uncomment_str cpl str","  let path null","  let code v","  let source obj path index","fn cpl_load cpl:obj path:str"," let lines cpl_uncomment cpl path","fn cpl_log_error cpl:obj err:str path","  ret cpl_log_error cpl err cpl.target"," fn parse_error cpl:obj path:str err:str","  let s txt_compact err","  let script shift lines","  let script split script \":\"","  let line_js pop script","  let line_js to_uint line_js","  let script join script \":\"","  shift lines 3","  flower_box message","  let line line_js","  let o obj line script","  let t to_tbl o","  if gt line_js cpl.out.length","  if not contain script path","  let index dec line_js","  let o at cpl.out index","  let source o.source","  let content cpl_uncomment cpl source.path","  let content split content","  let line_cs inc source.index","  let s dbg_origin content line_cs \"\"","  let content dbg_source path","  let s dbg_origin content line_js \"\"","  let stack arr","  let s shift lines","  push stack s","   let s shift lines","   if not match_l s \"at\"","   push stack s","  let stack join stack","  let map cpl_source_map cpl","  let report report_init stack undefined map","  report_log report","  parse_error cpl path err","fn cpl_parse cpl:obj path:str"," let nodes cpl_load cpl path"," let nodes cpl_tokenize cpl nodes"," let nodes cpl_escape_lisp cpl nodes"," let nodes cpl_fold cpl nodes","fn cpl_scan cpl:obj str:str"," fn parse_lit result:obj str:str","  let begin find str \"\\\"\"","  if lt begin 0","  let end back str","  if different end \"\\\"\"","  let right slice str begin","  if not is_lit right","  let left slice_l str begin","  assign result.tokens scan left","  push result.tokens right","  assign result.tokens reject result.tokens is_blank"," fn parse_complex result:obj str:str","  var complex false","  if contain str \"//\"","   assign complex true","  elseif contain str \"\\\"\"","  if not complex","  assign result.tokens scan str","  assign result.tokens reject result.tokens is_trivia"," fn parse_split result:obj str:str","  assign result.tokens split str \" \""," let str trim str"," let scans cpl.cache.scans"," if has scans str","  let tokens get scans str","  ret dup tokens"," var cache false"," if parse_lit result str","  assign cache true"," elseif parse_complex result str"," elseif parse_split result str"," if cache","  let tokens dup result.tokens","  put scans str tokens"," ret result.tokens","fn cpl_scope cpl:obj nodes:arr","  let nodes dup nodes","   let node shift nodes","   var a null","    assign a resolve node nodes","    unshift cpl.stack node"," fn resolve node:obj rest:arr","  let declare operator","  if is_cson operator args node.children","   let _children arr","   let name front args","   let construct at args 1","   let operator declare","   let args arr name construct","   let children dup node.children","   let node2 obj operator args children source","   push _children node2","   if is_full rest","    let operator \"begin\"","    let args arr","    let children visit rest","    let node3 obj operator args children source","    push _children node3","    clear rest","   let operator \"begin\"","   let args arr","   let children _children","  elseif is_declare operator","   let rvalue slice args 1","   check is_str name","   check is_arr rvalue","   check is_full rvalue","   let operator \"let\"","   let args arr \"_\" rvalue:etc","   push r node2","   let node3 obj operator args children source","   push r node3","   let args arr name \"_\"","   let children visit node.children","   let node4 obj operator args children source","   push node3.children node4","    let node5 obj operator args children source","    push node3.children node5","  elseif is_for operator","   let args arr \"_\" args:etc","   let args arr \"_\""," fn is_cson operator:str args:arr children:arr","  if not is_declare operator","  if different args.length 2","  let construct at args 1","  if same construct \"arr\"","  elseif same construct \"obj\"","  if is_empty children"," fn is_declare operator:str","  if same operator \"let\"","  if same operator \"var\""," fn is_for operator:str","  if same operator \"forof\"","  if same operator \"forin\"","  if same operator \"fornum\"","fn cpl_source_map cpl:obj"," let script path_real cpl.target"," forin cpl.files","  let v get cpl.files k","  let a split v","  put files k a","  let path v.source.path","  let index v.source.index","  let js v.code","fn cpl_tokenize cpl:obj nodes:arr","  let code v.code","  let source dup v.source","  let indent str_indent code","  let args cpl_scan cpl code","  let operator shift args","  if same operator \"end\"","   if is_empty args","  let node obj indent operator args children source","fn cpl_translate cpl:obj node:obj"," fn translate cpl:obj operator:str args:arr children:arr source:obj","  forin cpl.asts","   if different k operator","   let ast get cpl.asts k","   let r ast cpl args children source","   if is_arr r","   check is_obj r","   ret arr r","  let args arr operator args:etc","  let r ast_call cpl args children source","  if is_arr r","  check is_obj r","  ret arr r"," let args node.args"," let children node.children"," let source node.source","  ret translate cpl operator args children source","fn cpl_uncomment_str cpl:obj str:str"," for split str","  let tokens cpl_scan cpl v","  if is_empty tokens","  let line join tokens \" \"","fn cpl_uncomment cpl:obj path:str"," if has cpl.files path","  ret get cpl.files path"," let r cpl_uncomment_str cpl s"," put cpl.files path r","fn cson_decode cson:str path"," if is_def path","  check is_str path"," fn decode cpl:obj node:obj","   check is_empty node.args","   let operator node.operator","   let children node.children","   if same operator \"arr\"","    let r arr","    for children","     let operator v.operator","     let args v.args","     check is_empty args","     if is_tree operator","      let node decode cpl v","      push r node","     elseif is_data operator","      let value decode_value operator","      push r value","      stop","   elseif same operator \"obj\"","    let r obj","     var key v.operator","     if is_lit key","      assign key unwrap key","     var value null","     if is_empty args","      assign value \"arr\"","     elseif is_single args","      assign value front args","     if is_tree value","      let node copy v","      assign node.operator value","      clear node.args","      let t decode cpl node","      put r key t","     elseif is_data value","      let value decode_value value","      put r key value","    ret decode_value operator","   unshift cpl.stack node"," fn decode_value x:str","  if is_nullish x","  if is_boolish x","   ret json_decode x","   ret unwrap x","  if is_name x"," let cpl cpl_init \"cson\""," var nodes null"," if is_str path","  assign nodes cpl_load cpl path","  assign nodes cpl_load_str cpl cson"," check is_single nodes","  ret decode cpl node","fn cson_encode x:def"," fn stringify_key x:str","  if is_lisp x"," fn stringify_value x:def","   ret cson_encode x","  if is_value x","   ret to_json x","   ret to_lit x"," fn is_value x","  if is_bool x","  if is_num x","  if is_full x","    let s stringify_value v","   push a \"end\"","    let key stringify_key k","    let value stringify_value v","    let pair concat key \" \" value","    let pair txt_indent pair","    push a pair","  let s stringify_value x","fn cson_load path:str"," ret cson_decode s path","fn cson_save path:str x:def"," let s cson_encode x","fn call_expr_arg cpl:obj x:str","  let a unwrap x","  check is_pair a","  let name front a","  let etc back a","  check is_identifier name","  check same etc \"etc\"","  ret concat \"...\" name"," let s to_lit x"," let message space \"Invalid argument\" s","fn call_expr_right cpl:obj x y:etc","  if same x \"arr\"","  elseif same x \"obj\"","  elseif same x \"_\"","  elseif same x \"null\"","  elseif same x \"true\"","  elseif same x \"false\"","  elseif is_numeric x","  elseif is_lit x","   let condition paren x","   let condition concat \"is_fn\" condition","   let call concat x \"()\"","   ret concat condition \"?\" call \":\" x"," ret call_expr_rvalue cpl x y:etc","fn call_expr_rvalue cpl:obj x:etc","  if same first \"arr\"","   ret expr_arr cpl","  elseif same first \"obj\"","   ret expr_obj cpl","   ret first"," let args slice x 1"," if has cpl.exprs first","  let fn get cpl.exprs first","  ret fn cpl args:etc"," ret expr_call cpl x:etc","fn expr_arr cpl:obj x:etc"," let fn partial call_expr_arg cpl"," let args map x fn"," let s join args \",\""," ret bracket s","fn expr_call cpl:obj x:name y:etc"," let args map y fn"," let args join args \",\""," let list paren args"," ret concat x list","fn expr_iif cpl:obj x:arg y:arg z:arg a:etc"," check is_empty a"," ret concat x \"?\" y \":\" z","fn expr_in cpl:obj x:identifier y:identifier z:etc"," check is_empty z"," ret space y \"in\" x","fn expr_inline cpl:obj x:str"," ret unwrap x","fn expr_instanceof cpl:obj x:name y:identifier z:etc"," ret space x \"instanceof\" y","fn expr_new cpl:obj x:etc"," let rvalue call_expr_rvalue cpl x:etc"," ret space \"new\" rvalue","fn expr_not cpl:obj x:etc"," let right call_expr_right cpl x:etc"," let right paren right"," ret concat \"!\" right","fn expr_obj cpl:obj x:etc"," check every x is_identifier"," let s join x \",\""," ret brace s","fn expr_run cpl:obj x:etc"," let call expr_call cpl x:etc"," ret space \"yield*\" call","fn expr_value cpl:obj x:str y:etc"," check is_empty y","fn is_cson x","  cson_decode x","fn is_data x","fn is_name x","fn is_tree x"," if same x \"arr\""," if same x \"obj\"","fn pkg_init base"," if is_undef base","  ret pkg_init \"include.cson\""," check is_str base"," for dir_read \"src\" true","  check is_dir v","  let path path_concat v base","  if not is_file path","  let o cson_load path","  forin o","   let v get o k","   put r k v","fn pkg_resolve include:obj package:str"," fn resolve include:obj package:str","  let packages arr","  if has include package","   for get include package","    let a resolve include v","    append packages a","  push packages package","  ret dedup packages"," fn get_path package:str prefix:str","  for dir_read \"src\" true","   let base concat prefix \"-\" package","   let path path_concat v base","   if is_dir path","    ret path"," let packages resolve include package"," for dedup packages","  let path get_path v \"lib\"","  if is_str path","   push r path","  let path get_path v \"app\"","  let path get_path v \"spa\"","fn uncomment x:str"," let source path_tmp \"source.c\""," let target path_tmp \"target.c\""," file_save source x"," os_system \"gcc\" \"-E\" \"-P\" \"-fpreprocessed\" \"--language=c\" source \"-o\" target"," let r file_load target"," fs_remove source"," fs_remove target","fn config_append path:str line:str"," check is_ln line"," let content sudo_file_read path"," if not match_r content lf","  push parts lf"," let line pad_r line \" \" config_padding"," push parts line"," push parts \"#\""," push parts config_tag"," push parts lf"," let line implode parts"," let content concat content line","fn config_clean path:str"," let inputs sudo_file_read path"," let outputs arr"," for inputs","  let parts split v \"#\"","  if is_empty parts","   push outputs v","  let tag back parts","  if different tag config_tag","  trace \"config>\" v"," let content join outputs","fn init_org"," assign global.login_merlin \"mabynogy@mabynogy.org\""," assign global.org_user_path path_concat common \"users.cson\""," assign global.config_padding 128"," assign global.config_tag mabynogy","fn org_group_create_users"," fn get_humans","  let users user_list","   if not v.human","   put r v.name v"," var groups group_list"," let group \"users\""," if not has groups group","  sudo \"groupadd\" group","  let o obj group","  log \"create\" s"," let users groups.users"," let humans get_humans"," forin humans","  if contain users.users k","  sudo \"usermod\" \"--append\" \"--groups\" users.name k","  let user k","  let o obj user group","  log \"add\" s","fn org_user_install user:str"," fn install_prompt path:str","  let prompt get_prompt","  let prompt quote prompt","  let prompt concat \"PS1=\" prompt","  config_clean path","  config_append path prompt","  config_append path \"export PS1\""," fn get_prompt","  let red rgb_init 5 0 0","  let yellow rgb_init 5 5 0","  let time ps1_encode \"\\\\t\" yellow \"black\"","  var user null","  if is_root","   assign user ps1_encode \"\\\\u\" red \"default\" \"bold\"","   assign user ps1_encode \"\\\\u\" \"green\" \"default\" \"bold\"","  let host ps1_encode \"\\\\h\" \"blue\" \"default\" \"bold\"","  let login concat user \"@\" host","  let path ps1_encode \"\\\\w\" \"cyan\" \"default\" \"bold\"","  let path concat path \" $ \"","  ret space time login path"," install_prompt \"/root/.bashrc\""," let home os_home user"," let bashrc path_concat home \".bashrc\""," check sudo_is_file bashrc"," install_prompt bashrc","fn org_user_load"," let r user_list"," if is_file org_user_path","  let users cson_load org_user_path","   let user get r k","   assign user.mail v.mail","   assign user.created v.created","   assign user.created user_created user"," forin r","  let v get r k","  if not has v \"mail\"","   assign v.mail null","fn org_user_remove_unused"," let users org_user_load"," let removes obj"," forin users","  let v get users k","  let last_log v.last_log","  if not v.human","  if not is_null last_log","  let delay time_get","  let delay sub delay v.created","  if lt delay week","  org_user_remove name","  let o obj user","  log \"remove\" s","  put removes name v.mail"," if is_full removes","  mail_debug \"user-remove-unused\" removes","fn org_user_remove x:str"," check different x mabynogy"," let users user_list"," let user get users x"," let file concat x \".zip\""," let archive path_concat common \"archive\""," if not is_dir archive","  sudo_dir_make archive"," let r path_concat archive file"," let r archive_find r"," zip sudo r user.home"," let archive to_lit r"," log \"archive\" r"," let admin os_user"," let pair concat admin \":\" admin"," sudo \"chown\" pair r"," sudo \"deluser\" \"--remove-home\" x"," org_user_update","fn org_user_save x:obj"," let users obj","  let mail v.mail","  let created v.created","  check is_def mail","  check is_def created","  let user obj mail created","  put users k user"," let users cson_encode users"," sudo_file_save org_user_path users","fn org_user_uninstall user:str"," config_clean bashrc","fn org_user_update"," org_user_save users","fn ps1_encode str:str args:etc"," let open \"\\\\[\""," let close \"\\\\]\""," let r concat open ansi.escape \"[\" ansi.attr \";\" ansi.fore \";\" ansi.back \"m\" close str open ansi.escape \"[0m\" close"," let r replace r escape \"\\\\e\"","gn init x:etc"," let apps app_list"," let names obj_keys apps","  dump names"," let app shift args"," if not has apps app","  assign process.exitCode 5"," let include pkg_init \"depend.cson\""," let paths pkg_resolve include app"," drop paths"," let commands arr","  let app strip_l base \"app-\"","  let command arr \"./make\" app \"--compile\" \"--quiet\"","  push commands command"," run os_batch commands"," var run true"," if extract args \"--compile\"","  assign run false"," let code cpl_generate cpl"," file_save cpl.target code"," if not cpl_check_syntax cpl"," if not run"," let time_path silent os_execute \"which\" \"time\""," let usage_path path_tmp \"usage.txt\""," let time arr"," if is_full time_path","  let output concat \"--output=\" usage_path","  push time time_path","  push time \"--format=%M\"","  push time output"," let context node_context"," let parameters arr context:etc args:etc"," let parameters dedup parameters"," let args arr time:etc argv:etc cpl.target parameters:etc"," let o run os_capture args:etc"," assign process.exitCode o.status"," cpl_log_error cpl o.err","  let usage file_load usage_path","  fs_remove usage_path","  let usage split usage","  let usage back usage","  let usage to_uint usage","  let usage mul usage 1024","  let usage byte_size usage","  let o obj usage"]
const relatives=[0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,42,42,42,42,42,42,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,46,46,46,46,46,46,46,46,46,46,47,47,47,47,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,49,49,49,49,49,49,49,49,49,49,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,52,52,52,52,52,52,52,52,52,52,52,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,57,57,57,57,57,57,57,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,59,59,59,59,59,59,59,59,59,59,59,59,59,59,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,62,62,62,62,62,62,62,62,62,62,62,62,62,62,62,62,62,62,62,62,62,62,62,62,62,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,64,64,64,64,64,64,64,65,65,65,65,65,65,66,66,66,66,66,66,66,66,66,66,66,67,67,67,67,67,67,67,67,67,67,67,68,68,68,68,68,68,68,68,68,68,68,69,69,69,69,69,69,69,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,71,71,71,71,71,71,71,71,71,71,72,72,72,72,72,72,73,73,73,73,73,73,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,75,75,75,75,75,75,75,75,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,79,79,79,79,79,79,79,79,79,79,79,79,79,79,80,80,80,80,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,82,82,82,82,82,82,82,82,83,83,83,83,83,83,83,83,84,84,84,84,84,84,84,84,85,85,85,85,85,86,86,86,86,86,86,87,87,87,87,87,87,88,88,88,88,88,88,88,88,88,88,89,89,89,89,89,89,89,89,90,90,90,90,90,90,90,90,91,91,91,91,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,93,94,94,94,94,94,94,94,94,94,94,94,94,94,94,95,95,95,95,96,96,96,96,96,96,96,96,96,96,96,96,96,96,97,97,97,97,97,97,97,97,98,98,98,98,98,98,99,99,99,99,99,99,99,99,99,99,99,99,99,99,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,102,102,102,102,103,103,103,103,103,103,103,103,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,108,108,108,108,108,108,108,108,108,108,108,109,109,109,109,109,109,109,109,109,109,109,109,109,109,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,112,112,112,112,112,112,113,113,113,113,113,113,113,113,113,113,113,113,113,113,113,113,113,113,113,113,113,113,113,113,113,113,113,113,113,113,113,113,113,113,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,115,115,115,115,115,115,116,116,116,116,116,117,117,117,117,117,117,117,117,118,118,118,118,118,118,118,118,119,119,119,119,120,120,120,120,121,121,121,121,121,121,121,121,121,121,121,121,121,121,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,122,123,123,123,123,123,123,123,123,123,123,124,124,124,124,124,124,124,124,124,124,124,124,124,124,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,126,127,127,127,127,127,127,128,128,128,128,129,129,129,129,129,129,129,129,129,129,129,129,130,130,130,130,130,130,130,130,131,131,131,131,131,131,131,131,132,132,132,132,132,132,132,132,133,133,133,133,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,135,135,135,135,135,135,136,136,136,136,136,136,137,137,137,137,137,137,138,138,138,138,139,139,139,139,139,139,139,139,139,139,139,139,139,139,139,139,139,139,139,139,139,139,139,139,139,139,139,139,139,139,139,139,139,139,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,142,142,142,142,142,142,143,143,143,143,143,143,143,143,144,144,144,144,144,144,144,144,144,144,144,144,144,144,145,145,145,145,145,145,145,145,146,146,146,146,146,146,146,146,146,146,147,147,147,147,147,147,147,147,147,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,149,149,149,149,149,149,150,150,150,150,150,150,151,151,151,151,151,151,151,151,151,152,152,152,152,152,152,152,152,152,152,153,153,153,153,153,153,153,153,153,153,153,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,156,156,156,156,156,157,157,157,157,157,158,158,158,158,158,158,158,158,158,158,158,159,159,159,159,159,159,159,159,159,159,159,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,165,165,165,165,166,166,166,166,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,169,169,169,169,169,169,169,169,169,169,170,170,170,170,170,170,170,171,171,171,171,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,173,173,173,173,173,173,174,174,174,174,174,174,174,174,174,174,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,181,181,181,181,181,181,182,182,182,182,182,183,183,183,183,183,183,183,183,183,183,183,183,183,183,184,184,184,184,184,184,184,184,184,184,184,184,184,184,184,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,187,187,187,187,187,187,188,188,188,188,188,188,188,188,188,188,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,189,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,193,193,193,193,193,193,193,193,194,194,194,194,194,194,195,195,195,195,195,195,196,196,196,196,196,196,197,197,197,197,197,197,198,198,198,198,198,198,198,198,198,198,198,198,198,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,202,202,202,202,202,202,202,202,203,203,203,203,203,203,203,203,203,203,203,204,204,204,204,204,204,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,206,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,207,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,211,211,211,211,211,211,211,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,216,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,220,220,220,220,220,220,220,220,221,221,221,221,221,221,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,222,223,223,223,223,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,225,225,225,225,225,225,225,225,225,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,230,230,230,230,230,230,230,231,231,231,231,231,231,231,231,231,231,231,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,234,234,234,234,235,235,235,235,235,235,235,235,235,235,236,236,236,236,236,236,237,237,237,237,237,237,237,237,237,237,238,238,238,238,238,238,238,238,238,238,238,238,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,244,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,246,246,246,246,246,246,246,246,246,246,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,248,248,248,248,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,255,255,255,255,255,255,255,255,255,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,258,258,258,258,258,258,258,258,258,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,259,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,261,261,261,261,261,261,262,262,262,262,262,262,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,263,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,264,265,265,265,265,265,265,266,266,266,266,266,266,267,267,267,267,267,267,267,267,267,267,267,267,267,268,268,268,268,268,268,269,269,269,269,269,269,270,270,270,270,270,270,271,271,271,271,271,271,272,272,272,272,272,272,272,272,272,272,272,272,272,273,273,273,273,273,273,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,275,275,275,275,275,275,275,275,275,275,275,275,275,276,276,276,276,276,276,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,277,278,278,278,278,278,278,279,279,279,279,279,279,280,280,280,280,280,280,281,281,281,281,281,281,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,282,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,286,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,287,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,288,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,291,291,291,291,291,291,291,291,292,292,292,292,292,292,292,292,292,292,292,292,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,294,294,294,294,294,294,294,294,294,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,295,296,296,296,296,296,296,296,296,296,296,296,296,296,296,297,297,297,297,297,297,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,299,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,303,303,303,303,303,303,303,303,303,303,303,304,304,304,304,304,304,304,304,305,305,305,305,305,305,305,305,305,305,305,306,306,306,306,306,306,306,307,307,307,307,307,308,308,308,308,308,308,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,310,310,310,310,310,310,310,310,310,310,310,310,310,311,311,311,311,311,311,311,312,312,312,312,312,312,312,313,313,313,313,314,314,314,314,314,314,314,315,315,315,315,315,315,315,316,316,316,316,316,316,316,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,318,318,318,318,318,318,318,319,319,319,319,319,320,320,320,320,320,320,320,320,320,320,320,320,320,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,322,322,322,322,322,322,322,322,322,322,322,322,323,323,323,323,323,323,323,324,324,324,324,324,324,324,325,325,325,325,325,325,325,326,326,326,326,326,326,326,327,327,327,327,327,327,327,328,328,328,328,329,329,329,329,329,329,329,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,331,331,331,331,332,332,332,332,332,332,332,332,332,332,332,332,333,333,333,333,333,333,333,333,333,333,333,334,334,334,334,334,334,334,335,335,335,335,335,335,335,335,336,336,336,336,336,336,336,336,336,336,336,336,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,338,338,338,338,338,339,339,339,339,339,339,339,339,340,340,340,340,340,341,341,341,341,341,341,341,341,341,341,341,342,342,342,342,342,343,343,343,343,343,343,343,343,343,343,343,343,343,344,344,344,344,344,344,344,345,345,345,345,345,345,345,345,345,345,346,346,346,346,346,346,346,346,346,346,347,347,347,347,347,347,347,347,347,347,347,347,347,347,348,348,348,348,348,348,348,348,348,348,348,348,348,348,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,351,351,351,351,351,351,351,351,351,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,355,355,355,355,355,355,356,356,356,356,356,357,357,357,357,357,357,357,357,357,357,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,359,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,362,362,362,362,362,362,362,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,364,364,364,364,364,364,364,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,365,366,366,366,366,366,366,366,366,366,366,366,366,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,368,368,368,368,368,368,368,368,368,368,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,370,370,370,370,370,370,370,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,372,372,372,372,372,372,372,372,372,372,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,375,375,375,375,375,375,375,375,375,375,376,376,376,376,376,376,376,376,376,376,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,377,378,378,378,378,378,378,378,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,380,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,383,383,383,383,383,383,383,383,383,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,386,386,386,386,386,386,386,387,387,387,387,387,387,387,387,387,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,391,391,391,391,391,391,391,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,392,393,393,393,393,393,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,394,395,395,395,395,395,395,395,395,395,395,395,395,395,395,395,395,395,395,395,395,395,395,395,395,395,395,395,395,396,396,396,396,396,397,397,397,397,397,397,397,397,397,397,397,397,397,397,397,397,397,397,397,398,398,398,398,398,398,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,399,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,401,401,401,401,401,401,401,401,401,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,404,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,407,407,407,407,407,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,409,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,410,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,411,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,412,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,413,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,415,415,415,415,415,415,415,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,417,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,419,419,419,419,419,419,420,420,420,420,420,420,421,421,421,421,421,421,421,421,421,421,422,422,422,422,422,422,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,425,426,426,426,426,426,426,426,426,426,426,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,429,429,429,429,429,429,429,429,429,429,430,430,430,430,430,430,430,430,430,430,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,436,436,436,436,436,436,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,440,440,440,440,440,440,441,441,441,441,441,441,441,441,441,442,442,442,442,442,443,443,443,443,443,443,443,443,443,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,447,447,447,447,447,447,447,447,447,447,447,447,448,448,448,448,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,453,453,453,453,453,453,453,453,454,454,454,454,454,454,454,455,455,455,455,455,455,455,455,455,455,455,455,455,455,455,455,455,456,456,456,456,456,456,456,456,456,456,456,456,456,456,457,457,457,457,457,457,457,457,457,457,457,457,457,457,457,457,457,457,457,457,457,457,457,457,457,457,457,457,458,458,458,458,458,458,458,458,458,458,458,458,458,458,458,458,458,458,458,458,458,458,458,458,458,458,458,458,459,459,459,459,459,459,459,459,460,460,460,460,460,460,461,461,461,461,461,461,461,461,461,461,461,461,461,461,462,462,462,462,462,462,462,462,462,462,462,462,462,462,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,464,464,464,464,464,464,464,464,464,464,464,464,464,464,464,464,464,464,464,464,464,464,464,465,465,465,465,465,465,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,468,468,468,468,468,468,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,470,470,470,470,470,470,470,470,470,470,470,470,470,470,470,470,470,470,470,470,470,470,470,470,470,470,470,470,470,470,470,470,470,470,470,470,470,470,470,470,470,470,470,470,470,470,470,470,470,470,470,470,470,470,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,472,472,472,472,472,472,472,472,472,472,472,472,472,472,472,472,472,472,472,472,472,472,472,472,472,472,472,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,479,479,479,479,479,479,479,479,479,480,480,480,480,480,480,480,480,480,481,481,481,481,481,481,481,481,481,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,483,483,483,483,483,483,483,483,483,484,484,484,484,484,484,484,484,484,485,485,485,485,485,485,485,485,485,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,488,488,488,488,488,488,488,488,488,488,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,493,493,493,493,493,493,493,493,493,493,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,506,506,506,506,506,506,506,506,506,506,506,506,506,506,506,506,506,506,506,506,506,506,506,506,506,506,507,507,507,507,507,507,507,507,507,507,507,507,507,507,507,507,507,507,507,507,507,507,507,507,507,507,507,507,507,507,507,507,507,507,507,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,508,509,509,509,509,509,509,509,509,509,509,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,510,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,512,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,519,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,520,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,521,522,522,522,522,522,522,522,522,522,522,522,522,522,522,522,522,522,522,522,522,522,522,522,522,522,522,522,522,522,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,523,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,525,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,527,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,529,529,529,529,529,529,529,529,529,529,529,529,529,529,529,529,529,529,529,529,529,529,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,532,532,532,532,532,532,532,532,532,532,533,533,533,533,533,533,533,533,533,533,533,534,534,534,534,534,534,534,534,534,534,534,534,534,534,534,534,534,534,534,534,534,534,534,534,534,534,534,534,534,534,534,534,534,534,534,534,534,534,534,534,534,534,534,534,534,534,534,534,534,534,535,535,535,535,535,535,535,535,535,535,535,535,535,535,535,535,535,535,535,535,535,535,535,535,535,535,535,535,535,535,535,535,535,535,535,535,535,535,535,535,535,535,535,535,535,535,535,535,535,535,535,535,535,536,536,536,536,536,536,536,536,536,536,536,536,536,536,536,536,536,536,536,536,536,536,536,536,536,536,536,536,536,536,536,536,536,536,536,537,537,537,537,537,537,537,537,537,537,537,537,537,537,537,537,537,537,537,537,537,537,538,538,538,538,538,538,538,538,538,538,538,538,538,538,538,538,538,538,538,538,538,538,538,538,538,538,538,538,538,539,539,539,539,539,539,539,539,539,539,540,540,540,540,540,540,540,540,540,541,541,541,541,541,541,541,542,542,542,542,542,542,542,542,542,543,543,543,543,543,543,543,543,543,543,544,544,544,544,544,544,544,544,544,544,544,544,544,544,544,544,545,545,545,545,545,545,545,545,545,545,545,546,546,546,546,546,546,546,546,546,546,547,547,547,547,547,547,547,547,548,548,548,548,548,548,548,548,548,548,548,548,548,548,548,548,549,549,549,549,549,549,549,549,549,549,549,549,549,549,550,550,550,550,550,550,550,550,550,550,551,551,551,551,551,551,551,551,551,551,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,552,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,553,554,554,554,554,554,554,554,554,554,554,554,554,554,554,554,554,554,554,554,554,554,554,554,554,554,554,554,554,555,555,555,555,555,555,555,555,555,555,555,555,555,555,555,555,555,555,555,555,555,555,555,555,555,555,555,555,555,555,555,555,555,555,555,555,555,555,555,555,555,555,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,557,557,557,557,557,557,557,557,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,559,560,560,560,560,560,560,560,560,560,560,560,560,560,560,560,560,560,560,560,560,560,560,560,560,560,560,560,560,560,560,560,560,560,560,560,560,560,560,560,560,560,560,560,560,560,560,560,560,560,560,560,560,560,560,560,560,560,560,560,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,561,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,562,563,563,563,563,563,563,563,563,563,563,563,563,563,563,563,563,563,563,563,563,563,563,563,563,563,563,563,563,563,563,563,563,563,563,563,563,563,563,563,563,563,563,563,563,563,563,563,563,563,563,563,564,564,564,564,564,564,564,564,564,564,564,564,564,564,564,564,564,564,564,565,565,565,565,565,565,565,565,565,566,566,566,566,566,566,566,566,566,566,566,566,566,566,566,566,566,566,566,566,566,566,566,566,566,566,566,566,566,566,566,566,566,566,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567,567]
const indices=[0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,3,5,6,8,1,1,0,0,0,0,0,1,2,4,5,7,7,7,7,8,8,8,8,10,11,13,8,8,7,7,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,5,5,5,5,7,9,9,9,9,10,10,10,10,12,13,15,15,15,15,17,15,15,10,10,9,9,5,5,4,20,2,2,1,1,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,6,6,5,5,4,4,3,3,3,3,3,11,3,3,3,1,1,0,0,0,0,0,0,0,1,3,4,6,7,9,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,2,2,2,4,2,1,7,7,8,8,8,8,9,9,9,9,10,10,10,12,10,9,9,8,8,7,15,15,16,16,16,16,17,17,17,17,18,18,18,20,18,17,17,16,16,15,23,23,24,24,24,24,25,25,25,25,26,26,26,28,26,25,25,24,24,23,31,31,31,31,32,32,32,32,33,33,33,35,33,32,32,31,31,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,6,4,3,3,2,2,1,1,0,0,0,1,1,1,1,3,4,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,15,13,12,12,11,11,10,10,9,9,8,8,7,7,6,6,1,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,0,0,1,1,2,3,1,4,4,5,5,5,5,7,8,10,10,10,10,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,23,21,20,20,19,19,18,18,17,17,16,16,15,15,14,14,13,13,12,24,24,25,25,25,25,26,26,26,26,27,27,27,27,28,28,28,28,29,29,29,29,30,30,30,32,30,29,29,28,28,27,27,26,26,25,25,24,33,33,34,34,34,34,35,35,35,35,36,36,36,38,36,35,35,34,34,33,10,10,5,5,4,42,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,2,7,7,7,7,9,9,10,11,13,13,16,16,16,16,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,19,19,20,22,19,25,25,25,27,25,18,18,18,18,18,30,18,18,18,16,16,13,31,31,34,34,34,34,36,36,36,36,37,37,37,37,39,39,40,42,39,45,45,45,47,45,37,37,36,50,36,34,34,31,51,52,9,57,7,7,0,2,2,2,2,2,3,3,4,4,5,5,5,5,6,6,6,6,8,8,8,8,9,9,9,11,9,8,8,6,6,5,5,4,3,15,2,0,0,0,0,0,1,2,6,6,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,13,14,11,11,10,10,9,9,8,17,8,7,6,23,23,24,24,25,25,25,25,26,26,26,26,28,28,28,28,29,29,29,29,31,31,31,31,32,32,32,32,33,33,33,33,34,34,34,34,36,37,39,39,39,39,40,40,40,40,41,41,41,41,43,44,41,41,40,40,39,39,34,34,33,33,32,32,31,47,31,29,29,28,28,26,26,25,25,24,23,53,54,56,57,59,0,2,2,2,2,5,5,6,7,9,10,12,13,15,16,18,5,23,23,23,23,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,27,29,26,32,32,32,32,33,33,33,33,34,34,34,34,36,36,36,37,37,37,38,38,39,41,38,44,44,44,44,46,47,44,44,34,34,33,33,32,32,25,25,25,25,25,50,25,25,25,23,23,2,0,0,1,0,0,0,0,0,1,2,4,4,7,9,10,12,4,13,16,17,17,20,20,20,20,21,21,21,21,23,24,21,21,20,27,20,17,28,29,0,0,0,0,0,1,0,0,0,0,0,0,1,1,2,4,4,4,6,4,1,7,7,8,8,8,8,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,12,11,10,10,10,10,10,15,10,10,10,8,8,7,16,17,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,8,6,6,5,5,5,5,5,5,5,5,4,4,4,4,4,12,4,4,4,2,2,1,1,0,0,0,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,8,8,9,9,9,9,11,12,13,14,15,16,9,9,8,19,19,19,19,20,20,20,22,20,19,19,6,6,5,5,4,4,0,0,0,0,0,0,1,2,4,5,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,12,12,13,13,13,13,15,16,17,18,19,20,13,13,12,23,23,23,23,24,24,24,26,24,23,23,10,10,9,9,8,8,7,7,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,6,4,3,3,2,2,1,1,0,0,0,1,1,2,2,2,4,2,1,7,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,18,16,15,15,14,14,13,13,12,12,11,11,10,10,9,9,0,2,2,3,3,4,4,4,6,4,3,9,11,11,12,12,12,14,12,11,17,19,19,19,19,20,20,20,20,21,21,21,21,22,22,22,22,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,26,27,25,30,30,30,30,31,31,31,31,32,32,32,32,33,33,33,33,35,36,38,38,38,38,40,40,41,40,43,44,46,46,46,46,47,47,47,47,49,50,52,52,52,52,53,53,53,53,54,54,54,54,56,57,59,59,59,59,61,62,64,64,64,64,65,65,65,65,66,66,66,66,67,67,67,67,68,68,68,68,69,69,69,71,69,68,68,67,67,66,66,65,65,64,64,59,59,54,54,53,53,52,52,47,47,46,46,38,38,33,33,32,32,31,31,30,30,24,24,24,24,24,74,24,24,24,22,22,21,21,20,20,19,19,2,0,0,1,1,2,2,2,4,2,1,7,9,9,10,10,10,12,10,9,15,17,17,17,17,19,19,20,20,20,20,21,21,21,21,23,23,23,24,24,24,25,25,25,26,26,26,27,27,27,28,29,31,21,21,20,20,19,34,17,17,0,0,0,0,1,1,1,1,3,4,6,6,6,8,6,1,1,0,0,0,1,1,2,2,2,4,2,1,7,8,10,10,11,11,11,13,11,10,16,18,18,18,18,19,19,19,19,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,23,23,23,23,25,25,26,26,26,26,27,27,27,27,29,30,27,27,26,26,25,32,32,33,33,33,33,35,36,33,33,32,37,38,40,40,40,40,41,41,41,41,42,42,42,42,43,43,43,43,44,44,44,44,46,47,44,44,43,43,42,42,41,41,40,40,23,23,22,22,21,21,21,21,21,21,21,21,19,19,18,18,0,0,0,0,0,0,1,2,4,6,7,9,13,13,13,13,13,13,13,13,14,14,14,14,15,15,15,15,17,17,18,19,21,22,24,24,24,24,26,27,24,24,17,30,15,15,14,14,13,35,35,35,35,35,35,35,36,36,36,36,37,37,37,37,39,39,39,39,40,40,40,40,41,41,41,41,43,43,43,43,45,45,45,45,47,47,48,47,49,49,50,51,53,53,54,53,49,57,57,57,57,58,58,58,58,59,59,59,59,61,61,62,61,64,64,64,64,65,65,65,65,67,68,69,69,70,72,69,75,75,75,77,75,65,65,64,64,59,59,58,58,57,57,80,80,80,80,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,83,82,82,82,82,82,86,86,86,86,88,88,88,88,89,89,89,89,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,92,92,92,92,94,92,92,91,91,91,91,91,91,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,98,99,101,97,97,97,97,97,104,97,97,97,91,91,91,91,89,89,88,88,86,86,82,82,82,82,80,80,57,57,45,45,43,43,41,41,40,40,39,39,37,37,36,36,35,109,109,109,109,109,109,109,110,110,110,112,110,109,117,117,117,117,118,118,118,118,120,120,120,120,122,122,122,122,123,123,123,123,125,125,126,127,125,129,129,129,129,130,130,130,130,132,132,132,132,133,133,133,133,134,134,134,134,135,135,135,137,135,134,134,133,133,132,132,130,130,129,129,123,123,122,122,120,120,118,118,117,142,142,142,142,143,143,143,143,143,143,143,143,143,143,143,143,143,143,143,143,144,145,143,143,143,143,143,148,143,143,143,142,153,153,153,153,155,156,158,153,153,0,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,7,5,4,4,4,4,4,4,10,10,10,10,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,19,19,19,21,19,18,18,18,18,18,24,18,18,18,16,16,15,15,14,14,13,13,12,12,27,27,27,27,29,29,29,30,30,33,33,33,34,33,30,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,39,40,42,42,42,42,43,43,43,43,44,44,44,44,46,46,46,47,47,48,47,50,50,50,50,51,51,51,51,52,52,52,52,53,53,53,55,53,52,52,51,51,50,50,44,44,43,43,42,42,38,38,38,38,38,38,58,58,58,58,60,60,61,60,63,58,58,38,38,38,38,27,27,12,12,10,10,4,4,4,4,2,2,1,1,0,0,0,3,3,3,4,5,7,9,9,9,9,13,13,13,13,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,16,16,16,16,18,19,21,16,16,15,15,15,15,15,15,26,26,27,27,27,27,28,28,28,28,30,30,30,31,31,31,32,33,35,28,28,27,27,26,40,40,40,42,40,15,15,15,15,13,13,9,9,3,47,47,47,47,49,49,50,49,51,51,52,51,54,54,54,54,55,55,55,55,59,59,60,60,60,60,62,63,60,60,59,66,66,66,68,66,55,55,54,54,47,47,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,5,3,3,3,3,3,9,3,3,3,1,1,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,10,6,6,5,5,4,4,3,3,3,3,3,3,13,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,22,26,27,28,29,30,31,35,20,20,19,19,18,18,17,17,3,3,3,3,0,0,0,0,0,1,2,4,6,6,6,6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,11,11,12,14,11,17,17,17,17,18,18,18,18,20,20,21,22,20,23,24,18,18,17,17,9,9,8,8,8,8,8,27,8,8,8,6,6,0,0,0,0,0,1,1,1,3,1,0,0,0,1,0,0,0,0,0,0,1,3,3,3,3,5,6,8,3,3,0,0,0,0,0,1,2,4,5,7,0,0,0,1,2,4,4,4,4,6,8,8,8,8,10,10,11,11,11,13,11,10,14,15,8,8,4,4,0,0,0,0,0,1,2,3,3,4,4,4,4,6,8,4,4,3,9,10,0,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,3,1,1,1,1,1,6,1,1,1,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,3,3,3,3,7,3,3,3,1,1,0,0,0,0,0,0,1,1,1,1,2,2,2,2,4,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,8,7,9,10,6,6,6,6,6,13,6,6,6,2,2,1,1,0,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,5,4,6,6,7,6,10,10,10,10,11,11,11,11,12,12,12,12,14,16,17,19,21,21,21,21,22,22,22,22,23,23,23,25,23,22,22,21,21,12,12,11,11,10,10,2,2,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,2,4,5,6,6,7,7,7,7,8,8,8,8,10,11,8,8,7,14,7,6,15,16,0,0,0,0,0,1,1,1,1,3,4,5,1,1,0,0,0,1,1,2,2,2,2,4,6,2,2,1,9,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,19,17,16,16,15,15,14,14,13,13,12,12,11,11,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,3,3,3,3,5,6,8,8,8,10,8,3,3,2,2,1,1,1,1,1,13,1,1,1,0,0,0,0,0,1,1,1,1,3,3,3,3,4,5,7,7,7,9,7,3,12,3,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,5,5,5,6,6,6,6,7,7,7,9,7,6,6,5,12,5,3,3,2,2,1,1,0,0,0,0,0,1,3,0,0,0,1,2,4,0,0,0,0,0,0,1,2,4,5,7,0,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,2,3,4,5,6,7,1,10,0,0,0,0,0,0,0,1,2,4,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,3,3,3,6,6,6,6,7,7,7,7,9,10,14,14,15,17,14,22,7,7,6,6,3,27,27,27,28,28,28,28,32,32,32,32,34,34,34,34,35,35,35,35,37,37,37,37,38,38,38,38,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,41,42,44,40,40,40,40,40,40,40,40,38,38,37,37,50,50,50,50,51,51,51,51,55,55,55,55,56,56,56,58,56,55,55,51,51,50,50,37,37,35,35,34,34,32,32,28,28,27,65,66,67,71,72,73,74,75,79,80,81,85,85,85,85,87,87,88,87,89,90,91,92,94,98,98,98,98,100,100,100,100,101,102,104,104,105,105,105,107,105,104,100,100,113,115,115,118,122,122,123,125,122,115,127,130,135,100,100,98,98,85,85,0,0,0,0,0,0,1,3,0,0,0,1,2,4,5,7,7,7,7,9,10,12,7,7,0,0,0,1,2,4,5,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,10,10,10,11,11,11,12,12,12,13,14,7,7,7,7,7,17,7,7,7,0,0,0,1,2,4,5,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,9,9,9,10,11,7,7,7,7,7,14,7,7,7,0,0,0,1,2,4,5,7,8,10,11,13,14,16,0,0,0,1,0,0,0,1,2,4,5,7,8,10,11,13,14,16,17,19,20,22,0,0,0,1,2,4,5,7,0,0,0,1,1,1,3,1,0,0,0,1,2,4,5,7,0,0,0,0,1,0,0,0,1,2,4,0,0,0,1,2,4,0,0,0,3,4,8,9,13,14,16,0,0,0,1,2,4,5,7,0,0,0,3,4,8,9,11,0,0,0,1,0,0,0,1,2,4,5,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,9,7,7,7,7,7,12,7,7,7,0,0,0,1,2,4,5,7,7,7,7,9,10,14,14,14,14,16,17,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,23,23,23,24,25,21,21,21,21,21,28,21,21,21,14,14,7,7,0,0,0,3,4,8,8,9,9,9,11,9,8,16,0,0,0,1,0,0,0,1,1,1,1,3,4,6,7,9,1,1,0,0,0,1,2,4,5,7,0,0,0,1,2,4,0,0,0,1,1,1,1,3,4,6,7,9,1,1,0,0,0,1,2,4,5,7,7,7,7,9,9,9,10,10,10,11,12,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,16,14,14,14,14,14,19,14,14,14,7,7,0,0,0,1,2,4,5,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,9,11,11,11,11,13,14,11,11,7,7,7,7,7,17,7,7,7,0,0,0,1,0,0,0,1,2,4,5,7,0,0,0,1,2,4,4,4,4,6,7,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10,11,13,13,13,13,15,16,13,13,9,9,9,9,9,19,9,9,9,4,4,0,0,0,1,2,4,4,4,4,6,7,9,10,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,14,16,17,19,20,22,23,12,12,12,12,12,26,12,12,12,4,4,0,0,0,1,2,4,5,7,7,8,7,9,9,10,9,13,0,0,0,1,2,4,5,7,8,10,11,13,14,16,17,19,20,22,23,25,26,28,29,31,0,0,0,0,0,0,1,1,1,3,1,0,0,0,1,2,4,4,4,4,6,7,9,4,4,0,0,0,1,2,4,5,7,8,10,10,10,10,11,11,11,11,13,14,16,16,16,18,16,11,11,10,10,0,2,2,3,4,6,7,9,9,9,9,11,12,14,14,14,16,14,9,9,2,0,0,1,2,4,0,0,0,1,2,4,5,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,9,7,7,7,7,7,12,7,7,7,0,0,0,1,2,4,4,4,4,6,7,9,9,9,9,10,10,10,10,12,13,15,16,18,10,10,9,9,4,4,0,0,0,1,2,4,0,0,0,0,1,0,0,0,1,2,4,5,7,0,0,0,1,2,4,5,7,0,0,0,1,0,0,0,1,0,0,0,1,2,4,5,7,8,10,10,10,12,10,0,0,0,1,2,4,5,7,7,7,7,9,10,12,12,12,14,12,7,7,0,0,0,1,2,4,4,4,6,4,0,0,0,3,4,8,8,9,9,9,11,9,8,16,0,0,0,1,2,4,5,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,9,9,9,10,10,10,11,12,7,7,7,7,7,15,7,7,7,0,0,0,1,2,4,5,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,9,7,7,7,7,7,12,7,7,7,0,0,0,1,2,4,0,0,0,1,0,0,0,1,2,4,5,7,7,7,9,7,0,0,0,1,1,1,3,1,0,0,0,1,2,4,5,7,0,0,0,1,2,4,5,7,0,0,0,1,0,0,0,1,2,4,5,7,7,7,7,9,10,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,14,16,12,12,12,12,12,19,12,12,12,7,7,0,0,0,1,2,4,0,0,0,1,2,4,0,0,0,1,2,4,0,0,0,1,0,0,0,1,2,4,5,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,9,7,7,7,7,7,12,7,7,7,0,0,0,1,2,4,4,4,4,6,6,6,7,7,7,8,9,11,11,12,11,13,13,14,13,17,4,4,0,2,2,3,4,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10,11,9,9,9,9,9,9,9,9,8,8,8,8,8,15,8,8,8,2,0,0,1,2,4,0,0,0,1,2,4,5,7,0,0,0,1,2,4,5,7,8,10,11,13,14,16,0,0,0,1,2,4,5,7,0,0,0,1,2,4,5,7,8,10,0,0,0,0,0,1,2,4,6,0,0,0,0,0,1,4,5,8,9,12,13,16,17,17,20,20,20,20,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,25,23,22,22,22,22,22,22,28,28,28,28,29,29,29,31,29,28,28,22,22,22,22,20,20,17,32,32,35,35,35,35,37,37,37,37,38,38,38,38,42,42,42,42,44,44,44,45,45,46,45,50,50,50,50,54,54,54,56,54,50,50,42,42,38,38,37,37,59,59,59,59,60,60,60,62,60,59,59,37,37,35,35,32,63,64,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,2,4,1,7,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,1,1,3,1,0,0,0,3,3,3,3,4,4,4,4,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,9,9,10,12,9,17,17,17,19,17,6,6,6,6,6,22,6,6,6,4,4,3,29,29,29,29,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,32,32,33,33,33,33,35,37,33,33,32,40,40,40,42,40,31,31,31,31,31,31,45,45,45,45,46,46,46,46,47,47,47,47,48,48,48,48,49,49,49,49,50,50,50,50,51,51,51,51,52,52,52,52,53,53,53,53,54,54,54,54,56,56,59,59,59,61,59,56,62,62,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,66,66,66,68,66,65,65,65,65,65,65,65,65,62,74,74,74,74,75,75,75,75,77,77,78,78,78,78,80,81,83,78,78,77,88,88,88,88,89,89,89,89,91,91,92,94,91,99,99,99,99,100,100,100,100,101,101,101,101,102,102,102,102,104,105,107,107,107,107,108,108,108,110,108,107,107,102,102,101,101,100,100,99,99,89,89,88,88,75,75,74,74,54,54,53,53,52,52,51,51,50,50,49,49,48,48,47,47,46,46,45,45,31,31,31,31,29,29,0,0,0,3,3,3,3,4,4,7,7,7,7,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10,10,10,12,10,9,9,9,9,9,15,9,9,9,7,7,4,16,16,19,19,19,19,21,21,21,21,22,22,22,22,23,23,23,25,23,22,22,21,28,21,19,19,16,29,29,32,32,32,34,32,29,35,38,3,44,44,47,47,47,47,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,50,50,51,53,50,56,56,56,58,56,49,49,49,49,49,49,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,64,64,64,66,64,63,63,63,63,63,63,71,71,71,71,73,74,75,75,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,77,77,77,79,77,76,76,76,76,76,76,76,76,75,85,86,88,89,71,71,63,63,63,63,49,49,49,49,47,47,44,94,94,94,94,95,95,95,97,95,94,104,105,109,109,109,109,111,112,113,113,114,114,114,116,114,113,119,119,122,122,122,122,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,125,125,126,128,125,131,131,131,133,131,124,124,124,124,124,124,136,136,136,136,137,137,137,137,138,138,138,138,140,138,138,137,137,136,136,124,124,124,124,122,122,119,141,144,145,145,148,149,150,151,145,152,153,109,109,0,0,0,1,2,0,0,0,1,2,0,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,1,1,3,1,0,0,0,0,3,3,3,3,4,4,5,7,4,3,15,15,15,15,17,17,18,17,19,19,20,19,23,23,24,25,23,26,26,27,26,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,56,57,58,58,59,58,60,61,15,15,0,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,6,8,4,4,3,3,3,3,3,11,3,3,3,1,1,0,0,0,0,0,0,1,2,4,5,7,8,10,10,10,12,10,0,0,0,0,0,0,1,2,4,5,7,8,10,10,10,12,10,0,0,0,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,9,7,6,6,5,5,4,4,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,3,3,3,3,5,6,8,3,3,0,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,2,2,2,2,3,3,3,5,3,2,0,0,0,0,0,1,0,0,0,0,0,0,0,1,2,3,3,4,4,4,6,4,3,7,8,0,0,0,0,0,1,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,2,4,5,6,6,7,7,7,7,9,9,9,9,10,10,10,10,12,13,10,10,9,9,7,7,6,0,0,0,0,0,1,1,1,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,9,10,9,12,12,13,13,14,13,12,15,15,16,16,17,16,19,15,22,22,22,24,22,7,7,6,6,5,5,4,4,3,27,3,1,1,0,0,0,0,0,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,8,6,5,5,5,5,5,5,13,13,13,13,14,14,14,14,16,17,19,14,14,13,22,13,5,5,5,5,1,1,0,0,0,0,0,0,0,1,1,1,1,3,3,3,3,4,5,7,7,7,9,7,3,3,12,14,3,3,1,1,0,0,0,0,0,0,1,1,1,1,3,3,3,3,4,5,7,7,7,9,7,3,12,3,1,1,0,0,0,0,0,0,0,1,1,1,1,3,5,5,5,5,6,7,9,9,9,11,9,5,14,5,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,3,3,4,5,7,3,12,13,15,0,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,1,1,2,2,2,2,4,4,5,6,8,4,11,2,2,1,14,15,16,18,0,0,0,0,0,1,1,2,2,2,2,4,4,5,6,8,4,11,2,2,1,14,15,16,18,0,0,0,0,0,1,0,0,0,0,0,1,1,2,1,5,0,5,5,5,5,8,8,8,8,9,9,9,11,9,8,16,16,16,16,17,17,17,17,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,23,24,27,28,28,31,31,31,33,31,28,34,37,40,19,19,19,19,19,43,19,19,19,17,17,16,16,5,0,0,0,0,3,3,3,3,4,5,7,7,7,7,9,10,12,13,15,7,7,3,20,20,21,21,21,23,21,20,26,27,29,30,32,32,32,32,33,33,33,33,35,37,37,38,39,41,42,44,44,44,44,45,45,45,45,47,48,50,51,45,45,44,44,37,54,33,33,32,32,0,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,6,7,9,4,4,2,2,1,1,0,0,0,0,0,1,1,1,1,3,4,6,6,6,6,8,9,11,13,6,6,1,1,0,0,0,0,0,1,2,4,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,3,5,1,1,0,0,0,0,0,1,2,4,5,7,7,7,7,9,9,10,10,10,10,12,14,10,10,9,17,7,7,0,0,0,0,0,0,1,1,1,1,3,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,5,5,5,5,5,5,5,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,10,12,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,0,1,2,4,0,0,0,0,0,0,1,2,4,5,7,0,0,0,0,0,1,0,0,0,0,0,1,2,4,6,6,6,6,8,8,9,9,9,9,10,10,10,10,12,12,13,14,12,15,16,10,10,9,9,8,19,6,6,0,0,0,1,2,4,5,7,7,7,7,8,8,8,8,10,11,13,8,8,7,7,0,0,0,0,0,1,3,5,5,5,5,7,7,8,7,9,9,10,12,9,15,15,15,15,17,19,15,15,5,5,0,0,0,0,0,0,1,3,5,5,5,5,7,7,8,8,9,8,10,10,11,10,12,13,7,14,14,15,17,14,20,22,5,5,0,0,0,0,0,0,1,2,4,4,4,4,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,8,10,6,6,6,6,6,13,6,6,6,4,4,0,0,0,0,0,0,1,2,4,5,7,7,7,7,9,11,7,7,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,3,3,4,3,7,1,1,0,0,0,0,0,0,0,1,1,4,4,4,6,4,1,7,7,10,10,10,10,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,14,15,16,12,12,12,12,12,19,12,12,12,10,10,7,20,21,0,0,0,0,0,1,2,4,4,4,4,6,6,7,6,9,9,9,9,10,10,10,10,12,12,12,12,14,14,14,14,16,17,19,19,19,19,21,22,23,24,26,26,26,28,26,19,19,14,14,12,12,10,10,9,9,4,4,0,0,0,1,1,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,9,7,6,6,5,5,4,4,1,12,14,15,17,17,18,18,18,20,18,17,23,27,27,27,28,29,31,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,34,33,33,33,33,33,33,33,27,40,40,40,40,41,40,46,46,46,46,46,47,47,47,47,49,50,52,53,55,55,55,55,56,56,56,56,58,59,56,56,55,55,47,47,46,64,64,64,64,65,64,70,70,70,70,74,74,74,74,76,76,77,79,76,80,80,81,82,80,87,91,91,91,91,92,92,92,92,94,94,94,95,95,95,96,97,101,101,101,101,102,102,102,102,104,106,106,111,115,115,115,115,117,121,121,121,121,123,123,124,124,124,124,125,125,125,125,127,128,125,125,124,124,123,133,133,133,133,135,139,143,133,133,121,121,115,115,106,144,144,149,149,149,149,151,151,151,152,152,152,153,153,153,154,155,159,159,159,159,161,165,165,168,172,172,172,172,173,173,173,173,175,175,176,175,177,177,178,177,180,181,185,173,173,172,172,165,159,159,149,149,144,187,188,192,192,192,192,193,193,193,193,194,194,194,194,196,197,199,200,202,203,205,194,194,193,193,192,192,210,210,210,210,211,211,211,211,212,212,212,212,213,213,213,213,214,214,214,214,215,215,215,215,216,216,216,218,216,215,215,214,214,213,213,212,212,211,211,210,210,192,192,102,102,101,101,92,92,91,91,74,74,70,70,0,0,0,0,0,1,1,1,1,2,3,5,5,5,5,7,8,10,11,12,13,5,5,1,1,16,16,16,18,16,1,1,0,0,0,0,0,1,2,4,4,4,4,6,6,6,6,7,7,7,7,9,10,12,13,7,7,6,6,17,17,18,19,17,22,6,6,4,4,0,0,0,0,0,1,5,5,5,5,6,6,6,6,7,7,7,7,9,9,9,9,10,11,9,16,16,17,19,20,16,25,25,25,25,27,29,30,33,34,36,25,25,7,7,6,6,5,5,0,0,0,0,0,1,1,2,2,2,2,4,6,6,6,8,6,2,2,1,9,10,11,12,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,8,8,9,9,10,10,10,12,10,9,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,22,20,20,19,19,18,18,17,17,16,16,15,15,8,25,6,6,5,5,4,4,0,0,0,1,0,0,0,0,0,1,2,4,6,7,9,13,13,13,13,13,14,14,14,14,15,15,15,15,17,17,18,18,18,18,20,20,21,21,21,21,23,24,21,21,20,25,25,26,26,26,28,26,25,18,18,17,32,15,15,14,14,13,37,37,37,37,37,38,39,41,41,41,41,43,43,44,44,44,44,46,47,49,44,44,43,52,41,41,37,57,57,57,59,57,0,0,0,0,0,0,1,2,4,0,0,0,0,0,1,2,4,5,7,7,8,8,8,8,10,12,8,8,7,15,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,5,5,5,5,6,6,6,6,8,9,6,6,5,5,4,12,2,2,1,1,0,0,0,0,0,1,1,1,1,3,5,5,5,5,7,7,8,7,9,9,10,12,9,15,17,5,5,1,1,0,0,0,0,0,1,3,3,3,3,5,5,6,6,6,6,7,7,7,7,9,10,12,7,7,6,6,5,3,3,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,3,3,4,4,4,6,4,3,9,10,11,13,13,13,13,15,17,17,17,17,19,21,17,17,13,13,0,0,0,0,0,1,1,4,5,6,6,7,9,6,1,11,11,14,14,14,14,14,15,14,18,19,21,23,23,23,23,24,24,24,24,26,26,26,26,27,27,27,27,28,28,28,28,29,29,29,31,29,28,28,27,27,26,26,34,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,37,37,37,39,37,36,36,36,36,36,42,36,36,36,26,26,24,24,23,23,11,43,44,0,0,0,1,0,0,0,0,0,1,2,4,5,7,0,0,0,0,0,1,0,0,0,1,2,4,4,4,6,4,0,0,0,0,0,1,2,4,4,4,6,4,0,0,0,0,0,0,2,2,3,3,3,5,3,2,8,0,0,0,0,0,0,1,1,2,2,2,4,2,1,7,0,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,0,1,1,2,3,4,5,6,7,1,10,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,6,4,3,3,2,2,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,5,3,2,2,1,1,0,0,0,0,0,0,1,2,4,4,4,4,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,9,7,6,6,6,6,6,12,6,6,6,4,4,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,1,1,1,3,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,7,7,7,9,7,6,6,5,5,5,5,5,5,5,5,1,1,0,0,0,1,0,0,0,0,0,0,1,1,2,2,2,2,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,7,7,8,7,10,5,5,4,4,4,4,4,13,4,4,4,2,2,1,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,20,18,17,17,16,16,16,16,16,16,16,16,0,0,0,0,0,0,1,1,1,1,3,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,8,6,5,5,5,5,5,5,5,5,1,1,0,0,0,0,0,0,0,1,1,1,1,3,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,7,7,7,7,9,9,9,9,10,10,10,10,12,12,13,15,12,18,10,10,9,21,9,7,7,6,6,5,5,5,5,5,5,5,5,1,1,0,0,0,0,0,3,3,3,3,4,4,4,4,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,9,9,9,9,10,10,10,10,12,12,15,15,15,15,17,17,18,18,18,18,19,19,19,21,19,18,18,17,22,23,25,15,15,12,28,28,28,30,28,10,10,9,33,9,7,7,6,6,6,6,6,36,6,6,6,4,4,3,41,41,41,41,42,42,42,42,44,44,44,44,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,47,46,46,46,46,46,46,50,50,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,54,54,54,56,54,53,53,53,53,53,53,53,53,50,58,58,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,62,62,62,64,62,61,61,61,61,61,61,61,61,58,68,46,46,46,46,44,44,42,42,41,73,73,74,75,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,80,81,85,86,77,77,77,77,77,89,77,77,77,73,96,96,96,96,97,97,97,97,98,98,98,98,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,101,101,101,101,102,102,102,102,104,106,106,106,108,106,102,102,101,101,100,100,100,100,100,100,113,113,113,113,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,116,116,116,116,117,117,117,117,119,119,119,119,119,119,119,119,119,119,119,119,119,119,119,119,120,119,119,119,119,119,119,123,119,119,119,119,117,117,116,116,115,115,115,115,115,115,128,129,131,131,131,131,132,132,132,132,134,136,136,136,136,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,139,139,139,141,139,138,138,138,138,138,138,146,146,146,146,148,149,151,151,151,151,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,154,154,154,154,155,155,155,155,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,157,158,158,158,160,158,157,157,157,157,157,157,163,163,163,165,163,157,157,157,157,155,155,154,154,153,153,153,153,153,153,168,170,153,153,153,153,151,151,146,146,138,138,138,138,136,136,132,132,131,131,115,115,115,115,113,113,100,100,100,100,98,98,97,97,96,96,0,0,0,0,0,0,3,3,3,3,3,4,4,4,4,5,5,5,7,5,4,4,3,12,0,0,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,9,10,10,10,12,10,9,15,15,16,16,16,18,16,15,21,21,22,22,22,22,23,23,23,25,23,22,22,21,28,28,29,29,29,29,30,30,30,32,30,29,29,28,35,35,36,36,36,36,37,37,37,39,37,36,36,35,42,42,43,43,43,43,44,44,44,46,44,43,43,42,49,49,49,49,50,50,50,52,50,49,49,7,7,6,6,5,5,4,4,3,3,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,1,1,1,3,4,6,6,7,7,7,7,8,8,8,10,8,7,7,6,13,13,13,13,14,14,14,16,14,13,13,1,1,0,0,0,0,0,1,2,4,6,6,6,6,7,7,7,9,7,6,6,0,0,0,0,1,1,1,3,1,0,0,0,1,1,2,2,2,4,2,1,7,8,10,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,20,21,23,23,23,23,24,24,24,26,24,23,23,18,18,17,17,16,16,15,15,14,14,13,13,12,12,0,0,0,0,0,1,1,1,2,2,3,3,3,5,3,2,8,10,10,10,10,11,11,11,13,11,10,10,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,2,4,4,4,4,6,6,9,10,12,12,12,12,14,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,20,20,21,21,21,23,21,20,24,24,25,25,25,25,26,26,26,26,28,29,26,26,25,25,24,18,18,17,17,16,16,16,16,16,16,33,35,16,16,16,16,12,12,6,36,36,39,40,42,42,42,42,44,46,46,46,46,47,47,47,47,48,48,48,48,49,49,49,49,51,51,52,51,54,54,55,55,55,57,55,54,58,58,59,59,59,59,60,60,60,60,62,63,60,60,59,59,58,49,49,48,48,47,47,46,46,67,69,46,46,42,42,36,70,73,74,77,78,81,4,4,0,0,0,0,0,1,2,4,8,8,8,8,9,9,9,9,11,12,16,16,16,16,17,17,17,17,18,18,18,18,20,20,21,21,21,21,23,24,26,21,21,20,29,30,34,36,18,18,17,17,16,16,9,9,8,8,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,3,5,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,3,5,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,8,6,5,5,4,4,3,11,3,1,1,0,0,0,0,0,1,1,1,1,3,5,1,1,0,0,0,0,0,1,0,0,0,3,3,4,4,4,4,6,6,7,7,7,7,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,10,10,10,10,14,10,10,10,9,7,7,6,4,4,3,19,22,23,23,27,27,27,27,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,30,30,31,31,31,33,31,30,34,35,29,29,29,29,29,29,38,38,38,38,40,42,43,38,38,29,29,29,29,27,27,23,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,2,2,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,10,10,10,12,10,8,8,7,7,6,6,5,5,2,13,14,15,15,16,16,16,16,18,20,16,16,15,1,21,22,23,24,0,0,0,1,1,2,2,2,2,3,3,3,5,3,2,2,1,8,12,12,12,12,13,13,13,13,14,14,14,14,16,16,17,17,17,17,18,18,18,18,20,21,22,23,18,18,17,17,16,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,30,31,29,34,34,35,36,34,41,41,41,41,43,44,46,41,41,28,28,28,28,28,49,28,28,28,26,26,14,14,13,13,12,12,0,0,0,1,1,2,4,4,4,4,5,5,5,7,5,4,4,1,10,11,13,13,13,13,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,16,16,16,18,16,15,15,15,15,15,21,15,15,15,13,13,0,0,0,0,0,1,1,2,2,2,2,3,3,3,5,3,2,2,1,8,10,10,10,10,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,15,13,12,12,12,12,12,18,12,12,12,10,10,0,0,0,1,2,4,6,6,7,7,7,7,8,8,8,10,8,7,7,6,13,15,15,15,15,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,18,18,18,18,20,21,22,22,23,23,23,23,24,24,24,26,24,23,23,22,18,18,17,17,17,17,17,30,17,17,17,15,15,0,0,0,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,7,5,4,4,3,3,2,2,1,10,12,12,12,12,13,13,13,15,13,12,12,0,0,0,1,1,2,4,4,4,4,5,5,5,7,5,4,4,1,10,11,13,13,13,13,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,16,16,16,16,18,19,20,21,16,16,15,15,15,15,15,24,15,15,15,13,13,0,0,0,1,1,2,2,2,2,3,3,3,5,3,2,2,1,8,10,10,10,10,12,12,13,13,13,13,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,16,16,17,19,16,22,22,22,24,22,15,15,15,15,15,15,27,15,15,15,15,13,13,12,30,10,10,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,22,22,22,22,23,23,23,23,24,24,24,24,25,25,25,25,26,26,26,26,27,27,27,27,28,28,28,28,29,29,29,29,30,30,30,30,31,31,31,31,32,32,32,32,33,33,33,33,34,34,34,34,35,35,35,35,36,36,36,38,36,35,35,34,34,33,33,32,32,31,31,30,30,29,29,28,28,27,27,26,26,25,25,24,24,23,23,22,22,21,21,20,20,19,19,18,18,17,17,16,16,15,15,14,14,13,13,12,12,11,11,10,10,9,9,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,0,1,2,4,0,0,0,0,0,1,2,4,5,7,8,10,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,5,3,2,2,1,1,0,0,0,1,2,3,4,5,6,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,12,12,12,12,13,13,13,13,15,15,16,15,18,13,13,12,21,12,10,10,9,9,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1,0,2,2,3,5,5,6,5,7,7,8,10,7,13,2,0,0,0,1,2,0,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,3,3,3,3,5,5,5,5,6,6,7,7,7,9,7,6,12,14,14,15,17,14,22,24,24,24,24,25,25,25,25,27,29,25,25,24,24,5,34,34,34,34,35,36,38,40,40,40,40,44,44,44,44,45,45,45,45,46,46,46,46,48,49,53,53,53,53,54,54,54,54,55,55,55,55,57,58,62,62,62,62,63,63,63,63,64,64,64,64,66,67,64,64,63,63,62,62,55,55,54,54,53,53,46,46,45,45,44,44,40,40,34,72,72,72,72,73,72,80,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,114,115,117,118,119,120,121,122,123,125,126,127,129,131,133,135,136,137,138,140,141,142,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,248,3,3,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,6,7,8,9,4,4,3,3,3,3,3,13,3,3,3,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,7,5,4,4,3,3,2,2,1,1,0,0,0,0,0,1,1,1,1,3,3,3,3,4,4,4,4,6,4,4,3,9,3,1,1,0,0,0,1,1,1,1,3,5,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,3,5,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,2,2,2,4,2,1,7,9,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,2,2,2,2,4,5,7,2,2,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,1,2,4,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,12,10,9,9,8,8,7,7,6,6,0,0,0,0,1,1,1,1,3,5,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,3,3,3,3,4,5,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,15,15,16,17,19,20,15,23,23,24,23,26,26,27,26,29,13,13,12,12,11,11,10,10,9,9,3,34,34,34,34,35,35,35,35,36,36,36,36,38,38,39,39,39,39,41,41,42,42,42,42,44,46,42,42,41,49,49,49,49,51,53,54,56,56,57,57,57,57,59,61,62,57,57,56,49,49,39,39,38,66,36,36,35,35,34,71,71,71,71,72,72,72,74,72,71,79,79,79,79,80,80,80,82,80,79,87,87,87,87,89,90,92,92,92,92,96,96,97,97,97,97,99,99,99,99,100,100,100,100,101,101,101,103,101,100,100,99,99,106,106,106,108,106,99,99,97,97,96,113,113,113,113,115,115,115,115,116,116,116,116,117,117,117,117,118,118,118,118,119,119,119,121,119,118,118,117,117,116,116,115,115,124,124,124,124,128,128,128,128,130,131,133,133,133,133,134,134,134,134,136,136,136,136,137,137,137,137,139,139,139,139,140,140,140,140,141,141,141,141,143,143,146,148,148,148,148,149,149,149,151,149,148,148,143,152,152,155,157,157,157,157,158,158,158,158,159,159,159,159,161,162,163,159,159,158,158,157,157,152,164,164,167,168,170,164,171,171,174,174,174,174,175,175,175,175,176,176,176,176,178,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,181,181,181,181,183,181,181,180,180,180,180,180,180,188,190,180,180,180,180,176,176,175,175,174,174,171,191,191,194,194,194,194,195,195,195,195,196,196,196,198,196,195,195,194,194,191,199,199,202,204,204,204,204,205,205,205,205,206,206,206,206,208,209,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,214,214,214,214,215,215,215,215,216,216,216,218,216,215,215,214,214,213,213,213,213,213,223,213,213,213,206,206,205,205,204,204,199,226,141,141,140,140,139,139,137,137,136,136,134,134,133,133,128,128,124,124,115,115,113,113,92,92,87,87,0,0,0,1,0,0,0,0,1,1,1,1,3,5,1,1,0,0,0,1,1,1,1,3,5,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,3,5,1,1,0,0,0,0,0,3,3,3,3,5,7,7,7,7,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10,10,10,10,12,13,14,15,10,10,9,9,9,9,9,9,18,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,24,24,24,24,26,26,26,26,27,27,27,27,29,30,31,32,34,34,34,34,35,35,35,35,36,36,36,36,38,39,40,40,41,41,41,43,41,40,44,45,47,48,36,36,35,35,34,51,34,27,27,26,26,24,24,23,23,22,22,22,22,22,54,22,22,22,9,9,9,9,7,7,3,3,0,0,0,0,1,0,0,0,0,0,1,2,4,0,0,0,0,1,0,0,0,1,1,1,1,3,5,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,0,1,0,0,0,0,1,2,3,4,5,6,0,0,0,1,2,4,5,7,8,10,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,1,1,2,2,2,4,2,1,7,9,0,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,10,7,7,6,6,5,5,4,13,4,2,2,1,1,0,0,0,0,1,1,1,3,1,0,0,0,0,3,3,3,4,6,6,6,6,8,9,14,14,14,14,16,16,17,17,17,17,18,18,18,18,20,20,20,20,21,21,21,21,22,22,22,22,23,23,23,23,24,24,24,24,28,28,28,28,29,29,29,29,31,31,32,31,33,33,34,33,36,36,37,37,37,37,38,38,38,38,39,39,39,39,41,41,42,41,43,43,44,43,46,46,46,48,46,39,39,38,38,37,37,36,29,29,28,28,24,24,23,23,22,22,21,21,20,20,18,18,17,17,16,14,14,6,6,3,55,55,55,55,56,56,56,56,57,57,57,57,58,58,58,58,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,63,63,63,63,64,64,64,64,66,67,71,72,74,74,74,74,75,75,75,75,76,76,76,76,80,81,85,85,85,85,87,87,88,87,89,90,91,91,92,91,93,94,98,98,99,101,101,101,101,102,102,102,102,103,103,103,103,104,104,104,104,105,105,105,105,106,106,106,106,108,106,106,105,105,104,104,103,103,102,102,101,101,98,85,85,76,76,75,75,74,74,64,64,63,63,60,60,60,60,60,112,60,60,60,58,58,57,57,56,56,55,118,118,118,118,119,120,122,122,122,122,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,125,125,126,127,125,128,129,130,131,124,124,124,124,124,134,124,124,124,122,122,118,141,141,142,141,143,143,143,150,0,0,0,0,0,1,1,1,1,3,5,5,5,5,7,9,9,9,9,10,10,10,12,10,9,9,5,5,1,1,0,0,0,0,0,0,1,1,1,1,2,2,2,2,4,6,6,7,6,8,8,9,11,8,14,16,2,2,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,6,7,4,4,3,3,3,3,3,10,3,3,3,1,1,0,0,0,0,0,1,2,4,6,6,6,6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,12,13,13,16,17,19,19,19,21,19,13,22,22,22,24,25,8,8,8,8,8,28,8,8,8,6,6,0,0,0,0,0,1,1,1,1,2,2,2,4,2,1,1,0,0,0,0,0,1,2,4,6,6,6,6,7,7,7,7,8,8,8,8,10,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,15,16,17,17,18,19,17,20,20,20,21,22,13,13,12,12,12,12,12,26,12,12,12,8,8,7,7,6,6,0,0,0,0,0,1,2,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,6,4,4,3,3,3,3,3,9,3,3,3,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,3,3,3,3,4,4,4,6,4,3,3,0,0,0,0,0,1,2,4,4,4,6,4,0,0,0,0,0,0,3,3,4,4,4,4,6,7,4,4,3,12,12,12,12,14,15,19,19,19,21,19,12,12,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,1,1,1,3,5,5,6,5,7,7,8,10,7,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,2,2,3,3,3,3,4,4,4,4,6,8,4,4,3,3,2,1,12,12,12,12,13,13,13,13,14,14,14,16,14,13,13,12,12,0,0,0,0,0,1,1,1,3,1,0,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,5,3,3,3,3,3,8,3,3,3,2,0,0,0,0,1,1,1,1,2,2,2,2,4,4,5,5,5,5,7,9,9,9,9,11,12,14,9,9,5,5,4,17,2,2,1,1,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,5,3,2,2,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,2,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,11,11,11,11,12,12,12,12,14,15,16,17,18,19,12,12,11,24,24,24,24,25,25,25,25,26,26,26,26,28,28,29,28,31,26,26,25,25,34,34,34,34,35,35,35,35,37,38,35,35,34,34,25,25,24,43,43,43,43,44,44,44,44,46,44,44,43,51,51,51,52,51,57,57,57,57,58,57,63,63,63,63,64,64,64,64,65,65,65,65,67,69,69,70,71,73,74,76,69,79,79,80,79,82,83,85,65,65,64,64,63,63,9,9,8,8,7,7,6,6,0,0,0,0,3,3,3,3,3,4,4,5,5,5,5,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,10,8,7,7,7,7,7,7,13,15,15,15,15,17,19,20,22,15,15,7,7,7,7,5,5,4,23,23,24,23,27,29,3,34,34,34,34,35,35,36,36,36,36,38,39,41,41,41,41,42,42,42,42,44,46,47,49,42,42,41,41,36,36,35,50,50,51,50,54,56,34,61,65,66,67,68,69,70,71,72,73,74,78,79,80,81,82,83,84,85,89,89,89,89,91,95,95,95,95,96,96,96,96,98,100,104,104,104,104,106,110,111,115,115,115,115,117,117,118,117,120,120,121,120,123,123,124,123,126,126,127,126,131,131,131,131,133,135,131,131,115,115,104,104,96,96,95,95,89,89,0,0,0,1,1,2,2,2,4,2,1,7,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,22,22,22,22,23,23,23,23,24,24,24,24,25,25,25,25,26,26,26,28,26,25,25,24,24,23,23,22,22,21,21,20,20,20,20,20,31,20,20,20,16,16,15,15,14,14,13,13,12,12,11,11,10,10,9,9,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,10,11,13,14,16,17,19,19,19,19,20,20,20,20,21,21,21,21,23,24,26,21,21,20,20,19,19,8,8,7,7,6,6,5,5,3,3,2,2,1,1,0,0,0,0,1,1,1,3,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,3,1,1,1,1,1,6,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,3,1,1,1,1,1,6,1,1,1,0,0,0,0,1,2,4,0,0,0,0,1,2,4,5,7,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,4,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,4,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,8,6,5,5,4,4,0,0,0,0,1,2,4,0,0,0,1,1,4,4,4,4,6,6,7,6,8,8,9,8,12,12,12,12,14,14,15,15,15,15,17,17,18,17,19,19,20,22,19,15,15,14,26,28,12,12,4,4,1,29,29,32,32,33,32,34,34,35,34,38,29,39,40,0,0,0,0,1,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,4,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,5,4,6,6,7,9,6,12,14,2,2,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,3,4,5,6,8,9,11,12,14,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,6,6,7,7,10,10,11,12,10,17,17,17,17,19,19,20,20,20,20,21,21,21,21,23,24,25,25,26,28,25,21,21,20,20,19,32,33,37,37,38,39,41,41,41,41,42,42,42,44,42,41,41,37,17,17,7,6,47,47,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,51,50,50,50,50,54,50,50,50,47,4,4,3,3,2,2,1,1,0,2,2,2,2,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,13,13,13,13,13,14,14,14,14,15,15,15,15,17,19,20,24,24,25,27,24,30,30,30,30,32,33,34,34,35,35,35,35,36,36,36,36,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,39,39,39,39,40,40,40,40,42,42,43,43,43,45,43,42,46,47,40,40,39,39,38,38,38,38,38,38,50,50,50,52,50,38,38,38,38,36,36,35,35,34,53,54,56,30,30,15,15,14,14,13,61,61,61,61,62,62,62,62,64,65,62,62,61,70,70,70,70,71,71,71,71,72,72,72,72,74,75,72,72,71,71,70,80,80,81,81,81,82,82,82,83,84,86,87,80,92,92,92,92,93,95,92,100,100,100,100,101,101,101,101,102,102,102,102,104,106,106,106,106,107,106,112,112,112,112,114,114,114,114,115,115,115,115,116,116,116,116,117,117,117,117,119,119,119,119,120,120,120,120,122,123,124,125,127,128,133,134,136,137,139,143,143,143,143,144,144,144,144,148,149,151,144,144,143,143,120,120,119,119,117,117,116,116,115,115,114,114,112,112,102,102,101,101,100,100,11,11,10,10,9,9,8,8,7,7,6,6,5,5,2,0,0,0,1,1,1,3,1,0,0,0,0,3,3,3,3,5,5,5,5,6,6,6,6,8,8,8,8,9,9,9,9,11,11,11,11,12,12,12,12,14,12,12,11,11,17,11,11,9,9,8,8,20,20,21,23,20,28,28,28,28,29,29,29,29,31,32,34,35,39,39,39,39,40,40,40,40,41,41,41,41,42,42,42,44,42,41,41,40,40,39,39,29,29,28,28,8,8,6,6,5,5,3,3,0,0,0,0,0,3,3,3,3,4,6,3,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,17,18,22,24,15,15,14,14,13,13,12,12,11,11,0,2,2,2,2,3,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,12,12,12,12,14,14,14,15,15,16,16,17,16,15,18,19,21,21,22,21,24,24,25,24,29,30,34,34,34,34,35,35,35,35,37,37,38,38,38,40,38,37,41,41,42,42,42,42,43,43,43,43,44,44,44,44,45,45,45,47,45,44,44,43,43,42,42,41,35,35,34,34,12,12,8,8,7,7,6,6,5,5,2,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,7,8,10,11,13,13,13,15,13,5,5,4,4,3,3,2,2,1,1,0,0,0,1,1,2,2,2,4,2,1,7,9,9,9,9,11,13,9,9,0,0,0,0,1,0,0,0,0,0,0,0,3,3,3,3,5,5,6,5,7,7,8,8,9,8,7,10,11,13,13,14,13,18,19,3,3,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,11,11,11,11,12,12,12,12,13,13,13,13,15,13,13,12,12,11,20,20,20,20,21,21,21,21,22,22,22,22,24,22,22,21,21,20,29,29,30,30,30,31,31,32,31,33,34,36,37,38,40,29,45,45,45,45,46,48,45,53,55,55,55,55,56,55,61,63,63,63,63,64,64,64,64,65,65,65,65,66,66,66,66,68,68,68,68,69,69,69,69,71,72,73,74,76,69,69,68,68,66,66,65,65,64,64,63,63,7,7,6,6,5,5,4,4,3,3,2,2,1,1,0,2,2,2,2,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,13,13,13,13,13,14,14,14,14,15,15,15,15,17,19,20,24,24,25,27,24,30,30,30,30,32,32,32,32,33,33,33,33,35,37,33,33,32,32,30,30,15,15,14,14,13,42,42,42,42,43,43,43,45,43,42,50,50,50,50,51,51,51,53,51,50,58,58,59,59,59,60,60,60,61,62,64,65,58,70,70,70,70,71,73,70,78,78,78,78,80,80,80,80,81,80,86,86,86,86,88,88,88,88,89,89,89,89,90,90,90,90,91,91,91,91,93,93,93,93,94,94,94,94,96,97,98,99,101,102,107,108,110,111,113,117,118,120,94,94,93,93,91,91,90,90,89,89,88,88,86,86,78,78,11,11,10,10,9,9,8,8,7,7,6,6,5,5,2,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,9,9,9,9,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,17,15,14,14,13,13,12,12,11,11,9,9,8,8,7,7,7,7,7,20,7,7,7,3,3,2,2,1,1,0,2,2,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,8,9,9,10,9,8,13,13,13,13,15,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,22,22,22,22,23,23,23,25,23,22,22,21,21,20,20,19,19,18,18,17,28,28,29,29,29,29,30,30,30,30,31,31,31,31,32,32,32,32,33,33,33,33,34,34,34,36,34,33,33,32,32,31,31,30,30,29,29,28,13,13,6,6,5,5,4,4,3,3,2,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,8,9,13,13,13,13,15,15,15,16,16,17,19,19,20,19,22,16,23,24,28,28,28,28,30,30,30,31,31,32,34,34,35,34,37,31,38,39,43,43,43,43,47,49,43,43,28,28,13,13,4,4,3,3,2,2,1,1,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,6,4,3,3,2,2,1,1,0,0,0,0,0,1,3,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,7,8,12,12,12,12,14,16,12,12,3,3,2,2,1,1,0,0,0,0,1,1,2,2,2,2,4,6,2,2,1,9,9,9,11,9,0,2,2,2,2,3,3,3,3,5,5,6,6,7,7,7,7,9,10,11,11,12,14,11,7,7,6,5,17,17,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,20,20,20,20,24,20,20,20,17,3,3,2,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,0,0,0,1,2,4,8,8,8,8,10,12,12,12,12,13,13,13,13,14,14,14,14,16,17,19,19,19,19,20,20,20,22,20,19,19,14,14,13,13,12,12,8,8,0,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,13,13,14,13,16,16,16,16,18,19,16,16,11,11,10,10,9,9,8,8,7,5,5,4,4,3,3,2,0,0,0,0,1,1,1,1,2,2,2,2,4,4,5,5,5,5,9,10,14,14,14,14,15,15,15,15,17,17,17,17,19,19,20,20,20,20,22,22,22,23,24,20,20,19,25,25,26,26,26,26,28,28,28,29,30,26,26,25,31,32,36,17,17,15,15,14,14,5,5,4,2,2,1,1,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,3,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,11,7,7,6,6,5,5,4,4,3,16,16,16,16,18,20,16,16,0,2,2,2,2,3,3,3,3,4,4,4,4,6,6,7,7,7,7,8,8,8,8,10,10,11,10,12,12,13,13,14,16,13,19,12,22,8,8,7,7,6,4,4,3,3,2,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,1,1,3,1,0,0,0,0,1,1,1,1,3,4,5,6,7,8,10,1,1,0,0,0,0,1,1,1,1,2,2,2,2,4,5,6,7,8,9,10,11,12,13,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,22,22,22,24,22,21,21,20,20,19,19,18,18,17,17,16,16,15,15,15,15,15,27,15,15,15,2,2,1,1,0,2,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,10,10,11,12,16,16,16,16,18,18,19,20,22,18,27,27,28,28,28,28,30,31,33,28,28,27,38,38,38,38,39,39,39,39,41,41,42,41,44,44,45,44,49,49,50,50,50,50,52,53,54,56,50,50,49,61,61,61,61,62,62,62,62,64,64,65,65,65,65,66,66,66,66,68,70,70,71,73,70,66,66,65,65,64,79,79,80,80,80,80,82,83,84,85,87,80,80,79,90,91,62,62,61,61,39,39,38,38,16,16,10,94,94,94,94,95,95,95,95,96,96,96,96,100,101,103,96,96,95,95,94,94,8,8,7,7,6,6,5,5,4,4,3,3,2,0,0,1,2,4,5,7,8,12,12,12,12,13,13,14,14,14,14,16,16,16,16,17,17,17,19,17,16,16,14,14,13,20,20,21,21,21,23,21,20,24,25,12,30,30,30,30,31,31,32,32,32,32,34,34,34,34,35,35,35,37,35,34,34,32,32,31,38,38,39,39,39,41,39,38,42,43,30,48,48,49,51,51,51,53,51,48,58,58,58,58,59,59,59,59,60,60,60,62,60,59,59,58,58,0,0,0,0,0,3,3,3,3,4,4,4,4,5,5,5,7,5,4,4,3,3,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,3,3,4,3,5,5,8,5,11,11,11,11,12,12,12,12,13,13,13,15,13,12,12,11,11,1,1,0,0,0,0,0,1,1,1,1,3,4,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,11,11,11,11,12,12,12,12,14,15,17,17,17,17,19,19,20,20,20,20,21,21,21,21,22,22,22,22,24,24,25,27,24,30,22,22,21,21,20,20,19,17,17,12,12,11,11,9,9,8,8,7,7,6,6,1,1,0,0,0,0,3,3,3,3,5,5,5,5,6,6,6,6,8,8,8,8,9,9,9,9,11,12,9,9,8,15,8,6,6,5,20,20,20,20,21,21,21,21,22,22,22,22,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,26,26,26,26,27,27,27,27,28,28,28,28,29,29,29,29,30,30,30,30,31,31,31,31,33,35,35,35,35,37,39,39,39,39,41,43,43,43,45,43,39,39,35,35,31,31,30,30,29,29,28,28,27,27,26,26,25,25,24,24,24,24,24,48,24,24,24,22,22,21,21,20,20,3,3,0,0,0,0,1,2,0,0,0,0,1,1,1,3,1,0,0,0,0,1,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,1,1,1,5,5,5,5,6,6,6,6,7,7,7,7,9,10,12,12,12,12,14,15,16,18,18,18,22,18,12,12,7,7,6,6,5,5,1,1,0,0,0,0,0,0,0,1,2,6,6,6,6,6,6,6,7,7,7,7,8,8,8,8,10,10,10,10,12,14,14,14,14,16,18,18,18,18,20,21,22,23,24,25,27,18,18,14,14,10,10,8,8,7,7,6,32,32,32,32,32,32,32,33,33,33,33,34,34,34,34,35,35,35,35,36,36,36,36,37,37,37,37,41,41,41,41,43,45,45,45,45,47,49,49,49,49,51,52,54,54,54,54,55,55,55,55,57,58,62,63,64,65,66,67,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,72,72,72,72,73,73,73,73,74,74,74,74,75,75,75,75,76,76,76,76,78,80,80,80,80,82,83,85,85,85,85,86,86,86,86,88,90,90,90,90,91,91,91,91,93,95,96,91,91,90,90,86,86,85,85,80,80,76,76,75,75,74,74,73,73,72,72,71,71,71,71,71,71,99,101,71,71,71,71,55,55,54,54,49,49,45,45,41,41,37,37,36,36,35,35,34,34,33,33,32,106,106,106,107,107,107,107,108,108,108,108,110,111,112,113,114,116,116,116,116,118,120,120,120,120,122,124,124,124,124,126,128,129,130,131,133,124,124,120,120,116,116,108,108,107,107,106,138,138,138,138,139,139,139,139,141,143,143,143,143,145,147,143,143,139,139,138,152,152,152,152,153,153,153,153,154,154,154,154,156,156,157,157,157,157,159,161,157,157,156,164,154,154,153,153,152,169,169,169,169,170,170,171,171,171,171,173,174,171,171,170,169,180,180,180,180,181,181,181,181,183,183,184,183,185,185,186,185,188,188,188,188,189,189,189,189,191,192,194,194,194,194,196,198,198,198,198,199,199,199,199,201,202,204,205,199,199,198,198,194,194,189,189,188,188,181,181,180,180,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,6,4,3,3,2,2,1,1,0,0,0,0,0,1,1,2,3,1,4,5,0,0,0,1,0,0,0,1,2,4,8,8,8,9,9,9,9,11,11,11,11,12,12,12,14,12,11,17,11,9,9,8,22,22,22,22,24,24,24,25,25,25,25,27,27,28,28,28,28,29,29,29,29,31,32,29,29,28,28,27,33,33,34,34,34,34,35,35,35,35,36,36,36,36,37,37,37,37,39,40,41,42,37,37,36,36,35,35,34,34,33,45,45,45,47,45,25,25,24,52,52,53,54,56,57,59,59,59,59,60,60,60,60,61,61,61,61,62,62,62,62,63,63,63,63,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,66,66,67,66,69,69,70,69,72,72,73,72,75,75,76,75,78,78,79,78,65,65,65,65,65,65,82,83,85,86,88,89,91,92,94,95,97,65,65,65,65,63,63,62,62,61,61,60,60,59,59,52,102,102,103,104,106,107,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,110,111,109,109,109,109,109,114,109,109,109,102,119,119,120,120,120,120,122,123,120,120,119,22,22,0,0,0,0,0,1,1,1,1,3,3,3,3,4,4,4,4,6,7,8,9,10,11,12,14,4,4,3,3,1,1,0,0,0,1,1,1,1,2,2,2,2,6,7,11,13,13,13,13,15,17,17,17,19,17,13,13,2,2,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,4,5,6,7,8,9,10,11,12,14,2,2,1,1,0,0,0,0,0,1,3,4,0,0,0,0,0,1,2,0,0,0,0,0,0,1,1,1,1,2,2,2,4,2,1,1,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,6,8,10,3,3,2,2,1,1,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,6,8,9,3,3,2,2,1,1,0,0,0,0,0,0,1,3,0,0,0,0,0,1,0,0,0,1,2,4,4,4,4,6,7,9,4,4,0,0,0,1,2,4,4,4,4,6,7,9,4,4,0,0,0,0,0,1,1,1,1,3,3,4,4,4,4,8,9,13,14,15,16,17,18,22,4,4,3,1,1,0,0,0,1,2,6,6,7,7,7,7,8,8,8,8,10,12,8,8,7,7,6,17,0,0,0,1,2,4,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,5,6,6,6,6,8,8,9,8,10,10,11,10,6,6,5,14,14,15,15,16,15,17,17,18,17,14,21,3,3,2,2,1,1,0,0,0,1,2,4,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,13,14,16,16,16,16,17,17,17,17,19,21,21,21,21,22,22,22,24,22,21,21,17,17,16,16,11,11,10,10,9,9,8,29,29,29,29,31,31,31,31,32,32,32,32,33,33,33,33,35,36,33,33,32,39,32,31,44,44,44,44,45,45,45,45,47,47,47,47,48,48,48,48,50,51,48,48,47,54,47,45,45,44,59,59,59,59,60,60,60,60,61,61,61,61,63,63,64,63,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,67,67,67,67,68,68,68,68,69,69,69,69,70,70,70,70,71,71,71,71,72,72,72,72,73,73,73,73,74,74,74,74,75,75,75,75,76,76,76,76,77,77,77,77,78,78,78,78,79,79,79,79,81,83,83,83,83,85,85,86,86,86,86,87,87,87,87,89,91,91,91,91,93,95,97,91,91,87,87,86,86,85,100,83,83,79,79,78,78,77,77,76,76,75,75,74,74,73,73,72,72,71,71,70,70,69,69,68,68,67,67,66,66,66,66,66,103,66,66,66,61,61,60,60,59,59,29,29,0,0,0,1,2,4,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,9,9,9,11,12,13,14,16,9,9,7,7,6,6,5,5,4,4,2,2,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,7,9,9,9,9,10,10,10,10,11,11,11,11,13,15,15,15,15,17,19,21,23,15,15,11,11,10,10,9,9,3,3,2,2,1,1,0,0,0,0,0,0,0,0,1,3,3,3,3,5,7,7,7,7,8,8,8,8,9,9,9,11,9,8,8,7,7,3,3,0,0,0,0,0,0,0,0,1,3,3,3,3,5,5,6,8,8,8,8,10,8,8,5,13,3,3,0,0,0,0,0,0,0,0,1,2,4,4,4,6,4,0,0,0,0,0,0,0,0,1,2,4,4,4,6,4,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,14,16,16,16,16,18,20,20,20,20,21,21,21,21,22,22,22,22,24,25,27,22,22,21,21,20,20,16,16,2,2,1,1,0,0,0,0,0,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,7,5,4,4,3,3,0,0,0,0,0,0,0,0,1,2,4,4,4,6,4,0,0,0,0,0,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,4,3,3,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,10,11,13,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,2,4,4,4,4,6,8,8,8,12,8,4,4,0,0,0,0,0,0,0,0,1,2,4,4,4,4,6,8,8,8,10,8,4,4,0,0,0,0,0,0,0,0,1,3,0,0,0,0,0,0,0,0,1,3,3,3,3,5,5,6,5,7,7,8,8,8,8,10,8,8,7,13,3,3,0,0,0,0,0,0,0,0,1,2,4,4,4,4,5,5,5,7,5,4,4,0,0,0,0,0,0,0,0,1,3,3,3,3,4,4,4,6,4,3,3,0,0,0,0,0,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,4,3,3,0,0,0,0,0,0,0,0,1,3,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,0,0,0,0,1,3,3,4,4,4,6,4,3,9,9,9,9,10,10,10,12,10,9,9,0,0,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,6,8,4,4,3,3,3,3,3,3,13,13,13,13,14,14,14,14,16,16,16,16,17,17,17,17,19,20,22,17,17,16,16,14,14,13,13,3,3,3,3,1,1,0,0,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,6,8,4,4,3,3,3,3,3,3,13,13,14,14,14,14,15,15,15,15,17,17,17,17,18,18,18,18,20,21,18,18,17,17,15,15,14,14,13,24,3,3,3,3,1,1,0,0,0,0,0,0,0,0,0,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,13,13,13,13,14,14,14,14,15,15,15,15,17,19,15,15,14,14,13,13,9,9,8,8,7,7,6,6,5,5,4,24,24,24,24,26,28,28,28,28,29,29,29,29,30,30,30,30,31,31,31,33,31,30,30,29,29,28,28,24,24,0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,10,12,7,7,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,0,0,0,0,0,3,3,3,3,4,5,7,7,8,8,8,8,10,12,12,12,12,13,13,13,13,15,16,18,13,13,12,12,8,8,7,21,3,26,26,26,26,27,27,27,27,29,31,31,31,31,32,32,32,32,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,35,35,35,35,37,38,40,40,40,40,41,41,41,43,41,40,40,35,35,34,34,34,34,34,34,46,46,46,46,47,47,47,47,48,48,48,48,49,49,49,49,50,50,50,50,51,51,51,51,53,54,56,51,51,50,50,49,49,48,48,47,47,46,46,34,34,34,34,32,32,31,31,27,27,26,26,0,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,6,4,3,3,3,3,3,9,3,3,3,1,1,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,4,5,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,9,9,9,10,11,13,13,13,13,15,16,13,13,7,7,7,7,7,7,19,19,19,19,20,20,20,20,21,21,21,23,21,20,20,19,19,7,7,7,7,2,2,1,1,0,0,0,0,0,1,2,4,6,6,6,6,7,7,7,7,9,11,11,12,13,11,16,18,7,7,6,6,0,0,0,0,0,0,3,3,3,3,4,4,4,4,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,8,8,9,9,9,9,11,12,14,9,9,8,17,17,17,19,17,7,20,20,21,23,20,6,6,6,6,6,27,6,6,6,4,4,3,32,32,32,32,33,33,33,33,34,34,34,34,35,35,35,35,39,39,39,39,41,41,42,42,43,45,42,41,51,51,51,51,52,52,52,52,53,53,53,53,54,54,54,54,55,55,55,55,56,56,56,56,57,57,57,57,59,61,62,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,65,65,66,68,65,71,73,73,73,73,75,77,77,77,77,78,78,78,78,80,80,81,83,80,86,90,90,90,90,91,91,91,91,92,92,92,92,94,94,94,94,95,95,95,95,96,96,96,96,97,97,97,97,98,98,98,100,98,97,97,96,96,95,95,94,94,92,92,91,91,90,90,78,78,77,77,73,73,64,64,64,64,64,64,103,105,107,64,64,64,64,57,57,56,56,55,55,54,54,53,53,52,52,51,51,39,39,35,35,34,34,33,33,32,112,112,112,112,113,113,113,113,114,114,114,114,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,117,117,118,118,118,118,119,119,119,119,121,121,122,124,121,119,119,118,118,117,126,126,127,129,126,132,116,116,116,116,116,135,116,116,116,114,114,113,113,112,140,140,140,140,141,142,144,145,147,140,152,0,0,0,0,0,0,1,1,1,1,3,5,5,6,7,8,9,5,10,10,11,13,10,16,1,1,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,3,3,3,3,7,3,3,3,1,1,0,4,4,4,4,4,5,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,17,17,18,18,19,19,19,19,21,21,22,21,23,23,24,23,25,26,28,28,28,28,29,29,29,29,31,33,29,29,28,28,19,19,18,17,37,37,42,42,42,42,43,43,43,43,44,44,44,44,46,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,51,53,53,53,53,55,55,58,58,58,58,59,59,59,61,59,58,58,55,62,62,65,65,65,65,66,66,66,66,67,67,67,69,67,66,66,65,65,62,70,71,75,75,76,76,76,76,78,76,76,75,53,53,50,50,50,50,50,50,84,84,84,84,85,85,85,85,86,86,86,88,86,85,85,84,84,50,50,50,50,44,44,43,43,42,42,37,89,89,94,94,94,94,95,95,95,95,96,96,96,96,98,102,102,102,102,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,105,105,105,105,107,111,111,111,111,113,117,117,117,117,119,119,120,120,120,120,122,122,123,122,120,120,119,126,126,127,127,127,127,128,128,128,130,128,127,127,126,133,137,137,137,137,139,139,142,142,142,142,143,143,143,143,145,146,148,148,148,148,149,149,149,149,150,150,150,150,151,151,151,151,152,152,152,152,154,155,152,152,151,151,150,150,149,149,148,148,143,143,142,142,139,156,156,159,159,159,159,160,160,160,160,161,161,161,163,161,160,160,159,159,156,164,165,169,169,170,170,170,170,172,170,170,169,137,137,117,117,111,111,105,105,104,104,104,104,104,104,178,178,178,178,179,179,179,179,180,180,180,182,180,179,179,178,178,104,104,104,104,102,102,96,96,95,95,94,94,89,183,184,186,13,13,12,12,11,11,10,10,9,191,191,191,191,192,192,192,192,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,195,194,194,194,194,194,198,194,194,194,192,192,191,203,203,204,205,207,208,210,211,213,214,216,203,221,221,222,221,223,223,226,228,223,4,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,12,13,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,16,17,18,18,19,19,19,21,19,18,22,23,15,15,15,15,15,15,26,26,26,26,27,27,27,27,29,29,29,29,31,31,32,31,34,34,34,34,35,35,35,35,36,36,36,36,38,38,39,38,41,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,44,44,44,44,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,47,46,46,46,46,46,50,46,46,46,44,44,43,43,43,43,43,43,55,55,56,56,56,56,57,57,57,59,57,56,56,55,62,43,43,43,43,36,36,35,35,34,34,29,29,27,27,26,26,15,15,15,15,10,10,9,9,8,8,7,7,6,6,5,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,68,68,68,68,69,69,69,69,70,70,70,70,72,74,74,74,74,75,75,75,75,76,76,76,78,76,75,75,74,74,70,70,69,69,68,68,67,67,67,67,67,67,67,67,0,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,5,5,5,5,7,7,8,7,10,10,10,10,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,14,14,14,16,14,13,12,12,12,12,12,19,12,12,12,10,10,5,5,4,4,3,3,3,3,3,22,3,3,3,1,1,0,0,0,0,0,0,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,8,9,9,9,9,11,11,12,13,11,14,15,9,9,8,18,18,18,18,20,20,21,21,21,23,21,20,26,26,26,26,27,27,27,27,28,28,28,30,28,27,27,26,26,18,18,6,6,5,5,4,4,3,35,35,35,35,36,36,36,36,38,38,39,39,39,41,39,38,44,36,36,35,35,0,0,0,0,0,0,3,3,3,3,4,4,4,4,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,8,8,8,8,10,11,13,8,8,7,16,16,16,18,16,6,6,6,6,6,21,6,6,6,4,4,3,26,26,26,26,27,27,27,27,28,28,28,28,32,32,32,32,33,33,33,33,34,34,34,34,35,35,35,35,36,36,36,36,38,42,42,42,42,43,43,43,43,44,44,44,44,45,45,45,45,46,46,46,46,48,52,52,52,52,53,53,53,53,54,54,54,54,55,55,55,55,56,56,56,56,58,62,62,62,62,63,63,63,63,64,64,64,64,65,65,65,65,66,66,66,66,68,70,66,66,65,65,64,64,63,63,62,62,56,56,55,55,54,54,53,53,52,52,46,46,45,45,44,44,43,43,42,42,36,36,35,35,34,34,33,33,32,32,28,28,27,27,26,75,0,0,0,0,0,3,3,3,3,5,5,5,5,6,6,6,6,8,9,11,11,11,11,13,15,11,11,6,6,5,20,20,20,20,24,24,24,24,25,25,25,25,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,30,30,30,30,32,33,35,35,35,35,37,38,35,35,30,30,29,29,28,28,28,28,28,28,43,43,43,43,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,46,46,46,46,47,47,47,47,48,48,48,48,49,49,49,49,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,52,52,52,54,52,51,51,51,51,51,57,51,51,51,49,49,48,48,47,47,46,46,45,45,45,45,45,45,62,62,62,62,63,63,63,63,65,69,69,69,69,70,70,70,70,71,71,71,71,73,77,77,77,77,78,78,78,78,80,84,84,84,84,85,85,85,85,87,89,89,89,89,90,90,90,90,92,96,96,96,96,97,97,97,97,99,103,103,103,103,104,104,104,104,105,105,105,105,107,111,113,105,105,104,104,103,103,97,97,96,96,90,90,89,89,85,85,84,84,78,78,77,77,71,71,70,70,69,69,63,63,62,62,45,45,45,45,43,43,28,28,28,28,26,26,25,25,24,24,20,20,3,3,0,0,0,0,0,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,8,9,9,9,9,11,11,12,11,9,9,8,13,13,14,13,16,16,17,17,17,17,18,18,18,18,20,22,18,18,17,17,16,25,25,25,25,26,26,26,26,27,27,27,27,29,31,31,31,31,33,35,35,35,35,37,39,35,35,31,31,27,27,26,26,25,25,6,6,5,5,4,4,3,44,44,44,44,44,45,46,48,48,48,48,49,49,49,51,49,48,48,44,56,56,56,56,57,57,57,57,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,60,60,60,62,60,59,59,59,59,59,65,59,59,59,57,57,56,70,70,70,70,71,71,71,71,72,72,72,72,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,75,75,75,75,77,78,80,80,80,82,80,75,75,74,74,74,74,74,74,74,74,72,72,71,71,70,70,0,0,0,0,0,3,3,3,3,5,5,5,6,7,9,9,9,9,10,10,10,12,10,9,9,5,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,22,22,22,22,23,23,23,23,24,24,24,26,24,23,23,22,22,21,21,20,20,19,19,18,18,17,17,3,3,0,0,0,0,0,0,1,2,6,6,6,6,7,8,6,11,6,0,0,0,0,0,0,1,2,4,4,4,4,5,5,5,5,7,8,10,10,10,12,10,5,5,4,4,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,12,10,9,9,8,8,7,7,6,6,5,5,5,5,5,15,5,5,5,3,3,2,2,1,1,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,11,9,8,8,7,7,6,6,5,5,5,5,5,14,5,5,5,3,3,2,2,1,1,0,0,0,0,0,0,1,2,4,8,8,8,8,8,8,11,11,11,11,12,12,12,12,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,20,22,22,22,22,24,26,26,26,26,27,27,27,27,28,28,28,28,29,29,29,29,31,35,36,40,41,43,43,43,43,44,44,44,44,45,45,45,45,49,49,49,49,50,50,50,50,51,51,51,51,52,52,52,52,53,53,53,53,55,59,59,59,59,60,60,60,60,61,61,61,61,62,62,62,62,64,68,68,68,68,69,69,69,69,71,73,73,74,74,74,74,75,75,75,75,77,78,80,75,75,74,74,73,85,85,85,85,86,86,86,86,87,87,87,89,87,86,86,85,85,69,69,68,68,62,62,61,61,60,60,59,59,53,53,52,52,51,51,50,50,49,49,45,45,44,44,43,43,29,29,28,28,27,27,26,26,22,22,18,18,17,17,16,16,15,15,14,14,12,12,11,11,8,94,94,95,94,96,96,97,96,100,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,6,4,3,3,2,2,1,1,0,0,0,0,0,0,3,3,3,3,3,7,7,7,7,9,10,12,12,12,12,14,15,17,17,17,17,19,20,22,22,22,22,24,25,26,28,22,22,17,17,12,12,7,7,3,33,33,33,33,33,34,34,34,34,36,36,37,36,38,38,39,38,41,42,44,45,47,34,34,33,52,52,52,52,52,53,54,56,52,63,63,63,63,64,64,64,64,66,66,67,67,67,69,67,66,74,74,74,74,75,75,75,75,77,77,80,77,81,81,84,81,85,85,85,87,88,92,92,93,93,93,95,93,92,98,75,75,74,74,64,64,63,63,0,0,0,0,0,0,3,3,3,3,4,4,4,4,5,5,5,5,7,7,8,8,8,8,9,9,9,9,11,11,12,11,13,13,16,18,13,21,9,9,8,8,7,24,5,5,4,4,3,29,29,29,29,29,30,30,30,30,31,31,31,31,32,32,32,32,33,33,33,33,34,34,34,34,36,36,39,39,39,39,41,41,41,41,42,42,42,42,44,44,44,44,45,45,45,45,46,46,46,46,47,47,47,47,49,53,53,54,54,54,54,55,55,55,55,56,56,56,56,57,57,57,57,59,61,57,57,56,56,55,55,54,54,53,66,66,66,66,67,67,67,67,68,68,68,68,69,69,69,69,71,73,69,69,68,68,67,67,66,66,47,47,46,46,45,45,44,44,42,42,41,41,39,39,36,74,74,77,77,77,77,78,78,78,78,80,81,82,86,86,86,86,87,87,87,87,88,88,88,88,89,89,89,89,91,95,95,95,95,96,96,96,96,97,97,97,97,98,98,98,98,100,104,104,104,104,105,105,105,105,106,106,106,106,107,107,107,107,109,113,113,114,114,114,114,115,115,115,115,116,116,116,116,117,117,117,117,119,121,117,117,116,116,115,115,114,114,113,124,107,107,106,106,105,105,104,104,98,98,97,97,96,96,95,95,89,89,88,88,87,87,86,86,78,78,77,77,74,125,125,128,128,128,128,129,129,129,129,130,130,130,130,131,131,131,131,133,137,137,137,137,138,138,138,138,139,139,139,139,140,140,140,140,142,146,146,146,146,147,147,147,147,148,148,148,148,149,149,149,149,151,155,155,156,156,156,156,157,157,157,157,158,158,158,158,159,159,159,159,161,163,159,159,158,158,157,157,156,156,155,166,149,149,148,148,147,147,146,146,140,140,139,139,138,138,137,137,131,131,130,130,129,129,128,128,125,169,169,169,169,170,170,170,170,172,174,170,170,169,169,34,34,33,33,32,32,31,31,30,30,29,179,179,179,179,179,179,180,181,183,184,186,186,186,186,188,188,188,189,189,189,190,191,193,194,196,186,186,179,201,201,201,201,202,203,205,206,208,201,213,213,213,213,214,215,217,218,220,221,223,213,228,0,0,0,0,0,3,3,3,3,4,4,4,4,6,6,6,6,7,7,7,7,8,8,8,10,8,7,7,6,6,15,15,15,15,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,22,22,22,22,23,23,23,25,23,22,22,21,21,20,20,19,19,18,18,17,17,17,17,17,28,17,17,17,15,15,6,6,4,4,3,3,0,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,10,12,12,12,12,16,16,17,18,16,21,21,21,21,22,22,22,24,22,21,21,12,12,7,7,6,6,5,5,4,4,3,3,3,3,3,27,3,3,3,1,1,0,0,0,0,0,0,3,3,3,3,3,3,3,3,4,4,4,4,5,6,8,8,8,8,9,9,9,9,11,12,14,16,9,9,8,8,4,4,21,21,21,21,22,22,22,22,24,25,27,29,22,22,21,21,4,4,3,34,34,34,34,35,35,35,35,36,36,36,36,37,37,37,37,39,39,40,39,41,41,44,46,41,37,37,36,36,35,35,34,34,0,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,5,5,5,5,7,7,8,9,7,12,12,12,12,13,13,13,13,14,14,14,16,14,13,13,12,12,5,5,4,4,3,3,3,3,3,3,19,19,19,21,19,3,3,3,3,1,1,0,0,0,0,0,0,1,2,4,4,4,4,5,5,5,5,7,9,5,5,4,4,0,2,2,2,2,3,4,8,8,8,8,8,9,9,10,12,12,12,12,13,13,13,13,15,17,17,20,20,20,20,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,24,24,24,24,26,28,28,31,31,31,33,31,28,34,34,37,37,37,39,37,34,40,41,24,24,23,23,22,22,22,22,22,44,22,22,22,20,20,17,45,45,48,48,48,48,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,51,51,51,51,52,52,52,52,54,54,55,54,59,59,59,59,61,61,62,61,63,63,64,63,65,66,68,68,71,71,71,71,73,74,76,76,76,78,76,71,71,68,79,79,82,82,82,84,82,79,85,86,59,59,52,52,51,51,50,50,50,50,50,89,50,50,50,48,48,45,90,93,13,13,12,12,9,95,95,98,100,95,8,106,106,106,106,107,108,110,111,113,114,116,117,119,120,122,106,127,127,127,127,131,131,131,131,133,133,134,133,135,135,136,135,138,138,138,138,139,139,139,139,140,140,140,140,142,144,144,144,144,148,148,149,148,150,150,151,153,150,144,144,140,140,139,139,138,138,131,131,127,127,2,2,2,2,2,5,5,5,5,6,7,9,10,12,13,15,5,20,20,20,20,21,22,24,25,27,28,30,31,33,34,36,20,41,41,42,43,45,46,48,49,51,41,56,56,56,56,58,58,61,63,63,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,67,67,67,67,68,68,68,70,68,67,67,64,64,64,64,64,73,64,64,64,63,58,75,75,78,80,80,81,81,81,81,82,82,82,82,86,86,86,86,87,87,87,87,89,89,89,89,90,90,90,92,90,89,89,87,87,86,86,82,82,81,95,81,80,75,97,97,100,100,100,102,100,97,105,56,56,2,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,2,4,5,7,8,10,11,13,13,14,14,14,14,16,18,18,18,18,19,19,19,19,21,22,24,19,19,18,18,14,14,13,27,27,27,27,28,28,28,30,28,27,27,0,0,0,0,0,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,11,11,11,11,12,12,12,12,13,13,13,15,13,12,12,11,11,10,1,19,0,0,0,0,0,3,3,3,3,5,5,6,7,8,9,10,11,5,16,16,16,16,18,18,19,19,19,21,19,18,26,16,16,3,3,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,5,3,2,2,1,1,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,6,4,3,3,2,2,1,1,0,0,0,0,0,0,0,0,1,3,0,0,0,0,0,0,0,1,3,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,3,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,1,1,1,2,2,2,4,2,1,1,0,0,0,0,0,1,3,3,3,5,3,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,3,0,0,0,1,2,4,5,7,7,8,7,9,9,10,9,13,0,0,0,1,2,4,5,7,8,10,11,13,14,16,0,0,0,1,2,4,5,7,8,10,0,0,0,1,2,4,5,7,8,10,0,0,0,1,2,4,6,6,6,6,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,13,13,13,13,15,16,18,18,18,18,22,22,22,22,23,23,23,25,23,22,22,18,18,13,13,10,10,10,10,10,29,10,10,10,6,6,0,0,0,0,0,0,3,3,3,3,3,4,4,4,4,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,10,8,7,7,7,7,7,7,7,7,6,14,16,4,4,3,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,24,24,24,24,26,27,24,24,23,23,22,22,22,22,22,30,22,22,22,21,35,35,35,35,39,39,39,39,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,46,46,46,46,48,48,49,51,48,56,56,56,56,58,58,59,61,58,66,66,66,66,68,68,69,71,68,76,66,66,56,56,46,46,43,43,43,43,43,79,43,43,43,39,39,35,35,0,0,0,0,0,1,1,1,1,2,2,2,2,4,6,8,8,8,8,10,11,13,8,8,2,2,1,1,0,0,0,0,0,0,1,3,3,3,3,4,4,4,4,6,7,9,9,9,9,11,12,13,14,16,16,16,16,17,17,17,19,17,16,16,9,9,4,4,3,3,0,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,10,10,11,13,10,16,16,16,16,18,18,19,21,18,24,16,16,8,8,7,7,7,7,7,7,27,27,27,29,27,7,7,7,7,5,5,4,4,3,3,2,0,0,0,1,2,4,5,0,0,0,0,3,3,3,4,4,4,4,5,5,5,5,7,7,7,7,8,8,8,8,10,11,13,8,8,7,16,7,5,5,4,4,3,21,21,21,21,22,22,22,22,24,24,25,27,27,27,27,28,28,28,28,30,32,28,28,27,27,24,37,37,37,37,38,38,38,38,40,40,40,40,41,42,44,46,46,46,46,47,47,47,47,48,48,48,50,48,47,47,46,46,40,40,38,38,37,37,22,22,21,21,0,0,0,0,0,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,9,10,6,6,5,5,4,4,3,15,15,15,16,16,16,16,17,17,17,17,19,19,19,19,20,20,20,20,22,22,23,22,24,24,25,24,27,27,27,27,28,28,28,28,29,29,29,29,30,30,30,32,30,29,29,28,28,27,27,20,20,19,19,17,17,16,16,15,37,39,39,39,39,40,40,40,40,42,44,40,40,39,39,0,0,0,0,1,1,1,1,3,3,4,4,4,4,6,6,6,6,7,7,7,7,11,12,14,14,14,14,16,17,18,14,14,7,7,6,6,4,4,3,22,22,22,22,23,23,23,23,25,25,26,25,23,23,22,29,22,1,1,0,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,10,14,15,17,17,17,17,18,18,18,18,20,21,25,27,27,27,27,28,28,28,28,30,34,28,28,27,27,18,18,17,17,7,7,6,6,5,5,4,4,39,40,4,4,2,2,1,1,0,0,0,0,0,1,3,3,3,3,4,4,4,4,8,8,8,8,9,9,9,9,11,12,14,14,14,14,15,15,15,15,17,19,19,19,19,21,23,23,23,23,24,24,24,24,26,30,34,36,24,24,23,23,19,19,15,15,14,14,9,9,8,8,4,4,3,3,0,0,0,0,0,1,1,1,1,3,3,3,3,4,4,4,4,8,9,11,11,11,11,12,12,12,12,14,15,17,17,17,19,17,12,12,11,11,4,4,3,3,22,22,22,24,22,3,3,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,4,6,2,2,1,1,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,5,5,5,6,6,6,8,6,5,5,3,3,2,2,1,1,0,0,0,3,3,3,3,4,4,4,4,5,5,5,5,7,7,8,10,7,13,13,13,13,15,15,16,18,20,15,25,25,25,25,26,26,26,26,28,32,32,32,32,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,35,35,35,35,36,36,36,36,37,37,37,39,37,36,36,35,35,34,34,34,34,34,34,42,46,46,46,46,48,48,49,48,51,51,51,51,53,55,55,55,55,57,59,60,62,66,67,71,71,71,71,72,72,72,72,73,73,73,73,75,75,76,76,76,76,78,79,80,76,76,75,85,85,85,85,86,86,86,86,87,87,87,87,88,88,88,88,89,89,89,89,93,93,93,93,97,101,105,105,106,106,106,106,108,110,110,110,110,111,111,111,111,112,112,112,112,113,113,113,113,114,114,114,114,115,115,115,115,116,116,116,118,116,115,115,114,114,113,113,112,112,111,111,110,110,106,106,105,93,93,89,89,88,88,87,87,86,86,85,85,73,73,72,72,71,71,55,55,51,51,46,46,34,34,34,34,32,32,26,26,25,25,13,13,5,5,4,4,3,3,0]
const contents={0:[568,569,570],1:[571,572,573,574,575,573,576,570],2:[577,578,573,574,579,573,576,570],3:[580,581,570],4:[582,583,584,585,570],5:[586,587,570],6:[588,589,570],7:[590,591,573,592,573,593,594,573,595,570],8:[596,597,598,573,599,600,573,601,602,573,593,603,573,604,570],9:[605,606,607,573,608,609,573,610,573,611,612,573,613,614,573,615,573,616,585,573,576,570],10:[617,606,573,618,619,620,621,573,622,585,573,576,570],11:[623,624,573,625,626,573,627,626,573,628,570],12:[629,630,570],13:[631,632,570],14:[633,634,635,573,636,585,573,637,638,639,640,573,641,585,573,642,643,639,640,573,644,585,573,645,646,639,640,573,647,585,573,648,649,650,573,651,570],15:[652,653,573,654,570],16:[655,656,657,658,659,573,576,570],17:[660,661,573,662,663,573,664,665,666,667,668,669,670,671,573,672,570],18:[673,674,675,676,677,678,679,680,681,676,682,678,679,680,683,680,684,685],19:[686,687,688,689,690,691,573,692,689,573,693,573,694,695,696,697,698,699,700,701,702,703,573,704,705,706,707,708,709,710,703,573,704,711,709,710,703,573,704,712,585,573,713,570],20:[714,715,570],21:[716,717,570],22:[718,719,720,573,573,573,573,721,573,722,723,724,573,725,573,573,726,573,727,728,729,573,730,731,573,732,573,733,734,573,735,736,573,573,737,573,738,739,573,728,740,573,730,731,573,732,573,741,734,573,735,711,742,585,573,573,573,743,570],23:[573,573,744,745,746,747,748,573,749,750,573,751,712,585,573,752,570],24:[753,754,755,573,573,573,756,757,758,759,760,761,573,762,763,734,573,764,712,585,573,573,573,765,766,767,768,573,769,770,573,771,772,773,774,573,762,763,573,775,776,761,573,762,763,734,573,777,712,585,573,573,573,778,779,573,780,781,573,782,570],25:[573,573,783,573,573,784,785,786,573,787,786,573,788,789,573,790,789,573,626,585,573,573,573,791,573,618,792,793,573,794,712,573,795,796,797,573,798,799,711,800,573,794,712,573,801,573,802,803,585,573,804,570],26:[805,806,570],27:[807,597,808,573,745,573,573,809,573,810,786,573,811,812,573,573,811,813,573,573,814,815,573,816,817,712,573,626,818,819,570],28:[820,821,570],29:[822,745,809,573,823,573,824,812,825,573,826,816,827,712,573,828,818,819,570],30:[829,830,607,573,831,832,833,573,834,712,585,573,576,570],31:[835,836,837,573,838,839,840,573,841,842,573,843,844,845,844,711,846,585,573,847,848,573,576,570],32:[849,850,599,573,836,837,573,851,852,853,840,573,841,854,573,843,855,845,855,711,846,585,573,847,856,573,576,570],33:[857,858,859,860,861,573,576,570],34:[862,719,863,573,864,585,573,865,573,866,867,868,869,870,871,872,873,573,874,570],35:[573,573,875,876,877,573,878,585,573,879,573,880,881,573,882,585,573,883,573,884,885,886,887,573,888,889,890,891,712,573,892,893,894,895,573,896,844,573,897,573,898,899,573,900,794,573,901,902,573,903,794,573,904,905,906,573,907,794,573,908,573,909,794,573,910,911,912,913,914,915,573,916,585,573,576,570],36:[917,876,918,573,919,585,573,879,573,880,881,573,882,585,573,883,573,920,573,921,922,923,573,924,925,926,927,928,711,846,573,929,585,573,576,570],37:[930,931,573,932,933,573,934,573,935,570],38:[936,876,937,573,938,585,573,879,939,573,880,881,573,940,585,573,883,573,941,942,573,943,944,945,573,946,947,948,573,949,950,573,951,952,573,953,954,711,955,573,956,957,958,959,960,573,961,962,585,570],39:[963,964,965,573,966,573,967,968,573,969,573,573,573,970,971,972,573,973,974,975,573,976,977,573,978,573,979,975,712,573,828,585,573,573,573,980,981,982,573,983,984,985,573,986,573,987,573,988,989,990,991,976,573,992,993,712,573,994,995,996,573,997,998,573,999,1000,573,1001,1002,1003,1004,573,1002,734,573,1005,573,1006,712,573,1007,573,1008,1009,712,573,1010,573,1011,1012,573,1013,1014,573,1015,712,573,1008,1016,891,573,1017,712,573,828,585,573,573,573,1018,1019,573,1020,585,573,573,573,1021,1022,573,1023,573,1024,1025,573,1026,1027,1028,573,1029,1030,573,1031,1032,1033,1034,573,828,585,573,573,573,1035,826,1036,1037,712,573,819,585,573,573,573,1038,573,1039,1040,573,1041,570],40:[1042,1043,1044,573,1045,1046,573,1047,585,573,1048,573,1049,1050,1051,1052,1053,573,1054,1055,573,1056,712,573,1057,585,573,1058,573,1059,1060,573,573,1061,1062,712,585,573,1063,1064,794,573,1065,1066,1067,573,889,1068,1069,573,1070,1071,1072,1073,573,1074,585,573,1075,573,1059,1076,573,1077,570],41:[1078,573,573,1079,889,1080,573,1081,573,1082,573,573,573,1083,573,1084,1085,573,1086,975,573,1087,712,573,573,573,1088,1089,1090,573,1091,1092,1003,975,573,1093,712,573,573,573,1094,573,1095,585,573,573,573,606,573,719,1096,818,1097,573,1098,1099,573,573,573,841,1100,573,1101,846,585,573,1102,573,576,570],42:[1103,1104,570],43:[1105,1106,573,618,1107,1017,712,585,573,576,570],44:[1108,573,573,1109,1110,1111,1112,573,1113,573,1114,585,573,1115,573,573,573,1116,1117,1118,1119,573,1120,573,573,573,1059,1121,1060,1122,818,819,573,573,573,1123,570],45:[1124,597,1125,573,1126,573,1106,573,618,1127,573,1128,1129,573,794,712,573,1130,1131,573,1132,1133,1134,711,1129,585,573,576,570],46:[1135,1136,573,1137,570],47:[1138,1139,570],48:[1140,1141,573,1142,573,574,1143,573,576,570],49:[1144,597,1145,573,599,1146,573,1147,570],50:[1148,719,720,573,1149,573,1150,573,1151,573,745,1152,573,1153,818,1154,570],51:[1155,756,1156,813,1157,573,1158,573,828,818,819,570],52:[1159,1160,573,1161,570],53:[1162,618,1163,786,585,573,628,570],54:[1164,1106,573,618,1165,585,573,576,570],55:[1166,1167,1168,573,1169,573,831,1170,1171,711,1172,585,573,576,570],56:[1173,1174,1175,573,1176,961,1177,1178,585,573,1179,1180,1181,573,1182,573,593,663,573,1183,573,1184,1180,1185,573,1182,570],57:[1186,1187,570],58:[1188,745,809,573,1189,1190,813,814,815,573,816,1191,712,573,781,818,819,570],59:[1192,1193,573,1194,1195,1194,570],60:[1196,719,1197,573,962,573,663,585,573,850,573,1198,1199,1200,1201,1200,1202,1203,573,1204,570],61:[1205,1206,1207,1208,573,1209,794,573,1210,573,1211,585,573,1212,570],62:[1213,1214,573,1215,1216,794,573,1217,573,1218,585,573,576,570],63:[1219,1214,1220,1221,573,1215,1217,1222,573,1223,585,573,576,570],64:[1224,1225,573,1226,570],65:[1227,1228,1229,573,1230,570],66:[1231,1232,594,573,1233,1234,573,1212,570],67:[1235,1160,573,1236,570],68:[1237,1160,573,1238,570],69:[1239,1240,570],70:[1241,1242,1243,1244,1245,1246,711,955,585,573,1247,570],71:[1248,1249,1250,573,1251,570],72:[1252,1253,570],73:[1254,1255,570],74:[1256,573,573,1257,573,573,1258,1259,573,1260,1261,573,573,573,1262,1263,573,689,712,573,573,573,1264,585,573,573,573,1265,1266,573,573,573,1267,573,881,1268,573,1269,1270,573,1271,1272,730,573,1273,734,712,573,573,573,1274,1275,573,573,573,1276,1112,573,1277,585,573,573,573,573,573,1278,1279,1280,573,573,573,1281,1282,1283,1284,1285,573,573,573,1286,1287,1288,573,573,573,1289,573,1059,1290,1060,1291,818,819,573,1292,573,573,573,1293,573,1215,1294,794,573,1295,1296,573,1297,712,585,573,573,573,1298,573,1299,573,573,1300,573,573,573,1262,1263,573,689,712,1301,573,573,1302,585,573,573,573,1303,570],75:[1304,1146,573,1305,570],76:[1306,1307,626,573,1308,626,573,1309,573,1310,626,573,1311,570],77:[1312,1307,626,573,1308,626,573,618,573,573,1313,1314,1315,711,786,585,573,628,570],78:[1316,1307,626,573,1308,626,573,618,1317,1318,711,786,585,573,628,570],79:[1319,1320,1321,573,1322,837,573,1323,1321,573,1324,1321,573,1325,1321,573,1326,570],80:[1327,1328,570],81:[1329,1330,1321,573,1322,1321,573,1331,1321,573,1332,1321,573,1323,1321,573,1324,1321,573,1325,1321,573,1326,570],82:[1333,1308,1321,573,1334,1321,573,1326,570],83:[1335,1336,573,1337,570],84:[1338,1339,1321,573,1340,1321,573,1326,570],85:[1341,1342,570],86:[1343,1307,626,573,1344,570],87:[1345,1346,626,573,1347,570],88:[1348,573,573,745,1321,573,573,573,756,1321,573,573,573,765,1321,573,1326,570],89:[1349,756,1321,573,765,1321,573,1326,570],90:[1350,573,573,1351,1321,573,573,573,745,1321,573,1326,570],91:[1352,1353,570],92:[1354,1307,626,573,1308,626,573,618,1355,786,585,573,628,570],93:[1356,1307,626,573,1357,626,573,1309,573,1310,626,573,573,573,1358,573,1359,626,573,573,573,831,1360,1361,711,786,585,573,628,570],94:[1362,573,573,1189,1363,573,573,573,765,1364,573,1365,585,573,573,573,1326,570],95:[1366,1367,570],96:[1368,1336,573,1369,626,573,1370,626,573,628,570],97:[1371,1330,1321,573,1334,1321,573,1326,570],98:[1372,1373,626,573,1374,570],99:[1375,1336,573,1369,626,573,1376,626,573,628,570],100:[1377,1307,626,573,1308,626,573,1378,573,1379,1380,818,626,573,618,1381,786,585,573,628,570],101:[1382,1307,626,573,1308,626,573,1383,1384,794,573,1385,573,1386,786,585,573,628,570],102:[1387,1388,570],103:[1389,1390,1321,573,1391,1321,573,1326,570],104:[1392,1307,626,573,1309,573,1393,626,573,831,1394,786,573,1395,573,1396,786,585,573,628,570],105:[1397,1307,626,573,1398,573,1399,626,573,1400,626,573,831,1384,794,573,1381,786,573,1401,786,573,1402,786,585,573,628,570],106:[1403,1307,626,573,1308,626,573,1176,1404,1177,626,585,573,628,570],107:[1405,1228,1321,573,1406,1321,573,1351,1321,573,1330,1321,573,1322,1321,573,1331,1321,573,1323,1321,573,1407,1321,573,1324,1321,573,1325,1321,573,1326,570],108:[1408,591,573,1409,570],109:[1410,1307,626,573,1411,573,1310,626,573,1412,570],110:[1413,1307,626,573,1414,626,573,1415,626,573,1416,1417,573,1418,626,573,1419,573,1420,570],111:[573,573,1421,1307,626,573,1422,626,573,1423,573,1424,626,573,1425,573,1426,570],112:[1427,1307,626,573,1428,570],113:[1429,1307,626,573,1308,626,573,618,1430,786,585,573,628,570],114:[1431,1307,626,573,1432,573,1433,626,573,1434,1435,573,1436,626,573,1437,626,573,628,570],115:[1438,1439,626,573,1440,570],116:[1441,1442,570],117:[1443,719,1321,573,1228,1321,573,1326,570],118:[1444,1320,1321,573,1322,1321,573,1326,570],119:[1445,1446,570],120:[1447,1448,570],121:[1449,1450,626,573,1451,626,573,1452,626,573,1336,573,1453,570],122:[1454,1307,626,573,1422,626,573,1423,573,1455,626,573,1425,573,1426,570],123:[1456,1228,626,573,1336,573,1457,570],124:[1458,573,573,1189,1459,573,573,573,765,1364,573,1460,585,573,573,573,1326,570],125:[1461,1307,626,573,1308,626,573,618,1462,1463,1464,711,786,585,573,628,570],126:[1465,1307,626,573,1308,626,573,618,1466,786,585,573,628,570],127:[1467,1439,626,573,1344,570],128:[1468,1469,570],129:[1470,1307,626,573,1308,626,573,1471,573,1472,570],130:[1473,1336,573,1474,570],131:[1475,1476,1321,573,1477,1321,573,1326,570],132:[1478,1334,1321,573,1477,1321,573,1326,570],133:[1479,1480,570],134:[1481,1307,626,573,1308,626,573,1398,573,1310,626,573,831,1482,794,573,626,585,573,628,570],135:[1483,1307,1484,573,1485,570],136:[1486,1487,626,573,1488,570],137:[1489,1490,626,573,1491,570],138:[1492,1493,570],139:[1494,1307,626,573,1308,626,573,618,1495,786,585,573,628,570],140:[1496,1346,626,573,1497,573,1498,1499,818,626,573,1176,1500,1177,626,585,573,628,570],141:[573,573,1501,1307,626,573,573,573,1502,1503,1504,1505,712,585,573,628,570],142:[1506,1490,626,573,1507,570],143:[1508,745,1321,573,756,1321,573,1326,570],144:[1509,1307,626,573,1308,626,573,1510,626,573,1511,626,573,1512,626,573,628,570],145:[1513,1514,1321,573,1515,1321,573,1326,570],146:[1516,1517,626,573,1518,626,573,1519,626,573,628,570],147:[1520,597,1521,573,1522,573,1523,570],148:[1524,1228,573,573,1525,1526,573,573,1525,1527,573,573,1525,1528,573,573,1529,812,573,573,982,573,826,1530,573,1531,712,573,1532,1533,573,1534,813,573,573,982,573,814,815,573,573,573,1535,573,1536,1003,1537,573,573,573,1530,573,573,573,1538,573,1539,712,573,1532,1540,573,1534,818,819,570],149:[1541,1542,570],150:[1543,1544,570],151:[1545,719,720,573,1546,585,573,1547,570],152:[1548,1549,573,1550,570],153:[1551,1552,573,1553,570],154:[1554,573,573,1555,982,573,826,573,573,1556,1557,573,891,734,573,573,573,1558,573,1559,712,573,1560,585,573,573,573,573,573,1561,573,618,1562,1563,573,1564,573,794,712,573,1565,573,1566,585,573,1567,1568,1569,1570,1571,1572,1573,1574,1575,1576,573,1577,573,573,1578,573,1579,818,573,573,1580,1581,573,1056,712,585,573,573,573,1582,1583,573,1584,1585,573,1586,1587,573,663,585,573,573,573,1588,1589,573,1590,1591,573,663,585,573,573,573,1592,1593,1594,1595,573,1596,1597,573,1598,1583,573,1599,570],155:[1600,573,573,1601,725,573,573,726,573,727,1602,573,733,734,573,735,736,573,573,737,573,738,739,1602,573,741,734,573,735,1603,573,573,1604,573,1605,711,573,573,1244,712,585,573,573,573,1606,573,573,1607,573,826,1608,1609,573,891,734,573,1610,573,1564,712,573,573,573,1611,1612,573,1613,712,573,573,573,1614,573,1615,1616,711,1617,1618,573,1619,734,712,573,573,573,1620,689,573,1621,1622,585,573,573,573,1623,1624,573,1625,585,573,573,573,573,573,1626,663,573,573,573,1627,573,1628,1629,818,1630,573,1631,585,573,1632,573,573,982,573,1633,1608,1557,573,891,734,573,1634,573,1559,712,573,1635,1636,1637,573,1638,1639,573,573,1640,1060,573,573,1641,1642,711,1643,818,819,570],156:[1644,1645,1646,570],157:[1647,1648,1646,570],158:[1649,1160,573,1650,570],159:[1651,1160,573,1652,570],160:[1653,573,573,1654,1655,1656,573,1657,712,585,573,573,573,573,573,1658,573,1176,1659,1177,1660,585,573,1661,1662,1663,818,1664,573,573,573,1665,1666,1667,1668,1669,1670,1671,1672,1673,1674,1675,1676,1677,1678,1679,1680,1681,1682,1683,1684,1685,1686,573,573,573,1059,1687,1060,1688,818,819,570],161:[1689,1106,573,618,1690,573,1691,573,1165,585,573,576,570],162:[1692,1308,626,573,1693,626,573,1694,626,573,1695,573,1696,570],163:[1697,1308,626,573,1693,626,573,1694,626,573,1698,573,1696,570],164:[1699,850,1522,573,1700,1701,1702,1703,573,1704,570],165:[1705,1706,570],166:[1707,1708,570],167:[1709,1141,573,1710,573,574,1711,573,576,570],168:[1712,1713,573,574,1714,573,576,570],169:[573,573,1715,653,573,1716,570],170:[1717,1718,570],171:[1719,570],172:[1720,1406,1721,1722,1723,573,1724,818,819,570],173:[1725,1726,570],174:[1727,1728,573,1729,570],175:[1730,1731,1732,573,1733,1734,818,1735,573,1736,1737,573,1738,741,712,585,570],176:[1739,791,573,1740,1741,1742,1743,1744,573,1745,1746,573,1747,1748,1749,711,1748,1749,573,1750,712,573,1751,573,803,585,573,804,570],177:[1752,1214,573,573,573,1753,1754,573,1755,585,573,573,573,1740,1741,573,1756,794,573,1218,585,573,576,570],178:[1757,1214,573,1740,1758,794,573,1741,573,1218,585,573,1759,573,576,570],179:[1760,1214,573,1740,1758,794,573,1741,573,1218,585,573,576,570],180:[1761,1214,573,1759,573,1740,1758,794,573,1741,573,1218,585,573,576,570],181:[1762,1763,570],182:[1764,1765,570],183:[1766,573,573,1767,1768,689,573,1769,585,573,573,573,1770,819,573,1771,570],184:[1772,1773,573,574,1774,573,576,570],185:[1775,1776,1777,573,1778,1779,1780,573,1781,712,573,1782,585,573,850,1783,1784,573,1785,570],186:[1786,1776,1777,573,1778,1779,1787,573,1788,712,573,1789,585,573,850,1783,1784,573,1790,570],187:[1791,1792,570],188:[1793,1794,1769,585,573,1795,570],189:[573,573,573,573,573,1796,573,573,1797,1798,573,1799,585,573,573,573,791,1800,573,618,1801,573,573,793,1802,573,573,793,1803,573,573,1558,573,1559,711,573,573,793,712,573,1804,585,573,1805,570],190:[1806,573,573,1807,1808,786,573,1809,573,1810,786,573,1811,786,573,1321,585,573,573,573,1812,1813,573,1814,585,573,1815,1816,573,1817,1818,573,1819,1820,573,1821,573,841,1822,846,573,1823,846,573,1824,1825,573,1826,846,573,1827,1828,585,573,1829,570],191:[1830,1831,1832,573,1833,573,574,1834,573,576,570],192:[1835,1836,573,1418,1837,573,1838,573,1310,1534,573,1839,573,1840,570],193:[1841,1842,837,573,1843,570],194:[1844,1845,570],195:[1846,1847,570],196:[1848,1849,570],197:[1850,1849,570],198:[1851,1852,573,1853,573,1854,570],199:[1855,597,1856,573,599,1146,573,601,573,1857,1858,573,1859,573,1860,585,573,1861,570],200:[1862,1863,573,1864,573,831,1865,585,570],201:[1866,1867,1868,1869,1870,1871,1872,1118,1119,573,1873,573,576,570],202:[1874,597,808,573,1875,570],203:[1876,593,1877,573,1232,819,573,1878,570],204:[1879,1880,570],205:[1881,1882,1883,573,1884,573,791,573,1885,1886,615,573,1887,1888,1889,711,1890,585,573,1805,570],206:[1891,719,1892,573,865,1893,573,1894,1895,573,1776,1896,573,576,570],207:[1897,1898,573,1899,573,1900,573,1176,1901,1902,1903,573,1904,585,573,1905,573,1906,573,1907,570],208:[1908,1909,573,1910,573,1911,573,1176,1912,1913,1914,1915,711,955,1902,1916,573,1904,585,573,1917,573,576,570],209:[1918,1919,1126,573,1106,573,618,1920,794,573,1165,585,573,576,570],210:[1921,593,1922,573,1923,1924,573,1925,573,1926,573,1927,570],211:[1928,1929,570],212:[1930,1931,573,1932,1933,585,573,576,570],213:[1934,745,573,573,823,573,1935,812,573,573,981,573,826,816,1936,1003,733,712,573,828,818,819,570],214:[1937,1938,1939,573,1940,573,1938,1941,573,1942,1943,573,1944,573,1945,573,1946,1947,573,1948,573,1949,1950,1951,1952,573,1953,573,1954,570],215:[1955,1956,573,573,1957,1958,1959,1960,573,1961,585,573,1962,573,1963,1964,573,880,881,573,1961,585,573,883,573,573,573,1965,1966,689,573,1967,573,1968,1969,712,585,573,573,573,1970,1971,585,573,573,573,1972,1973,573,1974,689,573,1975,1976,573,1977,1978,573,1979,1980,585,573,573,573,1981,1982,585,573,573,573,1983,573,573,573,1984,573,1985,1986,573,1987,818,1988,1989,585,573,573,573,1990,573,573,573,1991,1992,573,1993,1994,818,1995,573,573,573,1996,1997,573,1998,573,1999,573,573,573,573,2000,573,573,573,2001,573,2002,573,573,573,2003,573,2004,2005,2006,573,2007,2008,712,573,573,573,2009,573,2010,573,573,573,2011,573,573,573,2012,1639,573,573,573,573,2013,573,2014,2015,2016,711,2017,573,573,573,2018,573,2019,573,573,573,2020,573,573,2021,573,573,573,2022,2023,573,2024,2025,2026,2027,573,2028,2029,573,573,573,2030,712,818,819,573,573,573,2031,2032,2033,573,1294,794,573,2034,794,573,1384,794,573,2035,585,573,573,573,2036,2037,2038,2039,2040,2041,2042,573,2043,570],216:[2044,2045,2046,794,573,2047,573,1384,794,573,2048,2049,711,2050,585,573,2051,573,2052,570],217:[2053,2054,2055,573,791,573,2045,2047,573,2056,2057,573,2058,793,712,585,573,2059,2060,2061,585,573,2062,570],218:[2063,2064,573,573,573,2065,1900,2066,573,2067,2068,2069,585,573,573,573,2070,2071,573,2072,2069,585,573,573,573,2073,573,2074,573,2075,2076,585,573,2077,2078,573,2079,570],219:[2080,745,2081,573,2082,573,2083,573,828,812,2084,818,819,570],220:[2085,2086,570],221:[2087,2088,570],222:[2089,597,2090,573,606,2091,2092,573,2093,2094,2095,573,2096,712,573,2097,2098,2099,2100,2101,615,573,616,585,573,576,570],223:[2102,2103,570],224:[2104,2105,2106,573,2107,573,2108,2109,573,2110,573,573,573,2111,981,2112,573,2113,2114,573,2115,2116,573,2117,2118,1003,2119,573,2117,734,712,573,828,585,573,573,573,2120,2121,2122,573,1735,573,2123,2124,573,2125,975,573,1133,712,573,828,585,573,573,573,2126,573,2127,570],225:[2128,593,1877,573,595,570],226:[2129,597,2130,573,599,1146,573,1857,2131,573,2132,573,1860,585,573,2133,570],227:[2134,1106,1168,573,608,2135,2136,573,2137,1165,585,573,576,570],228:[2138,2139,573,2140,573,1911,573,1176,2141,1902,2142,573,1904,585,573,2143,573,576,570],229:[2144,1893,573,2145,573,841,2146,2147,573,2148,846,573,2076,585,570],230:[2149,2150,570],231:[2151,601,573,2152,570],232:[2153,2154,573,2155,2156,573,2157,585,573,1784,2158,2154,573,2159,573,2160,573,2161,573,2162,573,576,570],233:[2163,756,573,573,2164,2165,711,2166,573,2167,712,813,573,573,2168,2169,712,573,2164,2170,573,2171,573,1157,982,573,814,2172,2173,2174,573,1006,712,573,2175,573,1008,2176,573,2177,712,573,828,818,819,570],234:[2178,2179,570],235:[2180,597,2181,573,1308,2182,573,2183,570],236:[2184,2185,570],237:[2186,719,2187,573,2188,573,2189,570],238:[2190,2191,755,573,2192,573,2193,570],239:[2194,573,2195,2196,573,2197,585,573,2198,570],240:[2199,2200,2196,573,2201,585,573,2198,570],241:[2202,2203,573,574,2204,573,576,570],242:[2205,1242,1243,1244,1245,1246,711,955,585,573,2206,570],243:[2207,1109,1110,1111,1112,573,2208,585,570],244:[2209,2210,2211,2212,573,2213,570],245:[2214,1919,1522,573,1106,573,618,2215,573,2216,585,573,576,570],246:[2217,2218,573,2219,570],247:[2220,1168,573,1169,573,831,958,2221,573,584,585,570],248:[2222,2223,570],249:[2224,593,2225,573,826,2226,573,2227,2228,573,2229,712,573,2230,585,573,618,2231,2232,573,2233,585,570],250:[2234,2235,573,1169,573,2236,2237,573,584,585,570],251:[2238,2235,573,1169,573,2236,2239,2240,573,2241,2242,573,2243,2244,573,891,734,573,2245,712,573,2246,585,570],252:[2247,573,573,2248,981,573,826,2249,573,2250,2251,573,2252,573,573,2253,573,2254,2255,2256,573,2257,2258,2257,573,730,731,573,2259,573,2260,734,573,2261,712,573,828,585,573,573,573,2262,981,573,2225,573,826,2263,712,573,2264,573,573,727,2265,573,2117,734,711,573,573,727,2266,573,2117,734,712,573,828,585,573,573,573,2267,2268,786,573,826,573,573,2269,891,573,573,573,2270,1505,712,573,1321,585,573,573,573,573,573,2271,2272,2273,573,2274,2275,2276,573,2277,573,2278,573,2279,585,573,573,573,2280,573,2281,2282,2283,573,2284,2285,712,573,2286,585,573,573,573,2287,2288,573,791,2289,573,2290,573,2291,573,2281,2292,573,2293,585,573,573,573,2294,573,2295,2290,573,2296,573,2297,2298,2299,573,2300,2301,573,2302,712,573,2303,573,803,585,573,2290,573,2062,570],253:[2304,573,573,2305,2306,2307,573,2308,585,573,573,573,2309,570],254:[2310,1893,573,2311,2312,2313,2314,2315,573,2316,2317,573,2318,585,573,2319,2320,573,2318,585,573,2321,2322,984,573,2323,585,573,2324,2325,984,573,2326,585,573,2327,2328,984,573,2329,585,573,2330,2331,984,573,2332,585,573,2333,2334,573,2335,570],255:[2336,2337,573,2338,570],256:[2339,2340,573,2341,2342,573,2343,2344,2345,573,2346,585,573,2347,2348,573,2349,570],257:[2350,597,2351,573,599,573,2352,2353,573,2354,570],258:[2355,2356,573,2357,570],259:[2358,719,863,573,2359,585,573,2360,2361,573,865,573,866,867,2362,2363,2364,871,2365,573,2366,828,573,2367,2368,573,2369,570],260:[2370,597,597,2371,573,2372,585,573,2373,573,2374,2353,573,2375,570],261:[2376,2377,570],262:[2378,2379,570],263:[2380,719,720,573,2381,573,2382,573,573,2383,2384,573,982,573,2385,573,2386,1634,2387,573,2388,2389,573,2390,1003,2391,2392,573,2393,2390,734,712,573,2394,573,2395,2396,573,573,2383,2397,573,982,573,2398,573,2399,2400,1634,1535,573,2401,1537,573,2388,2402,573,2390,1003,2403,2392,573,2393,2390,734,712,573,2394,573,2395,2404,573,573,2405,2406,573,573,2407,818,573,573,2408,585,570],264:[2409,597,2410,573,599,573,573,573,2411,2412,573,1310,1534,573,573,573,2413,2414,2415,573,2416,2417,573,2418,846,573,2419,585,573,2420,2421,573,573,573,2422,573,2423,570],265:[2424,2425,570],266:[2426,2427,570],267:[2428,2429,573,2430,573,576,570],268:[2431,2432,570],269:[2433,2434,570],270:[2435,2432,570],271:[2436,2437,570],272:[2438,2439,573,2440,573,576,570],273:[2441,2442,570],274:[2443,1106,573,1740,2444,2445,2446,573,916,585,573,576,570],275:[2447,2448,573,2449,573,576,570],276:[2450,2451,570],277:[2452,573,573,2453,2454,573,2455,2456,573,2457,2458,2459,731,573,2460,734,712,585,573,1648,573,573,2461,818,573,573,573,982,573,826,2462,2259,573,2390,1003,1557,712,573,1635,573,2463,573,2464,2465,585,570],278:[2466,2467,570],279:[2468,2469,570],280:[2470,2471,570],281:[2472,2473,570],282:[2474,1059,2475,573,573,2476,2477,2478,2479,573,2480,573,2481,2482,2483,711,2484,573,2485,573,735,1060,2486,818,819,570],283:[2487,745,2488,2489,573,2395,585,573,1919,573,573,573,2490,1180,2491,573,608,2492,2493,573,2494,844,711,846,585,573,1106,573,831,2495,1017,794,712,573,1128,1017,794,712,573,573,573,2496,573,2497,794,573,1165,585,573,576,570],284:[2498,745,2499,573,2488,2500,573,2395,585,573,1919,599,573,1106,573,618,2501,573,2216,585,573,576,570],285:[2502,745,2488,2503,573,2395,585,573,1919,573,1106,573,618,2501,573,2216,585,573,576,570],286:[2504,597,2505,573,599,573,745,2488,2506,573,2395,585,573,1919,573,1106,573,618,2507,573,2508,2509,711,2510,2511,573,2509,712,585,573,576,570],287:[2512,745,2513,2514,2515,2516,573,828,585,573,1919,573,2490,2517,573,2518,570],288:[2519,745,809,573,2488,2520,573,2395,585,573,1919,1522,573,1106,573,618,2521,573,2522,2523,711,2509,585,573,576,570],289:[2524,745,2488,2525,573,2395,585,573,1919,573,2526,573,2527,982,573,2528,2529,1557,573,891,734,573,2530,573,1559,712,573,2531,585,573,2518,570],290:[2532,2533,2534,2535,2536,2537,2538,2539,2540,2541,2542,2543,2544,2545,2546,2547,2548,2549,2550,2551,2552,2553,2554,2555,2556,2557,2558,2559,2560,2561,2562,2563,2564,2565,2566,2567,2568,573,576,570],291:[2569,597,808,573,2570,570],292:[2571,1324,2572,573,1322,2573,573,1331,2574,573,1212,570],293:[2575,2576,2577,2578,573,576,570],294:[2579,1059,2580,1060,2581,818,819,570],295:[2582,2583,2584,2585,2586,2587,2588,2589,2590,2591,2592,573,2593,2594,573,2595,2596,573,2597,585,573,2598,570],296:[573,573,2599,2600,573,1176,1646,1902,2601,573,1904,585,573,2602,570],297:[2603,841,2076,585,570],298:[2604,2605,573,574,2606,573,576,570],299:[2607,573,573,2608,573,2609,2610,2611,573,2612,712,573,2613,573,2614,2615,573,689,712,573,573,573,809,573,2616,2617,573,2618,573,2619,585,573,573,573,2620,2164,2621,573,2622,573,2617,573,573,573,2623,2624,2625,573,2626,2627,573,573,573,2628,2629,2630,573,2631,2632,573,573,573,2633,2634,2635,573,2636,2637,585,573,573,573,2638,2639,585,573,573,573,573,573,2640,573,2641,2642,2643,2644,2645,2646,2647,2648,2649,2650,2651,2652,2653,2654,2655,2656,2657,2658,2659,2660,2661,2662,2663,2664,2665,2666,2667,2668,2669,2670,2671,573,2672,2673,573,2674,2675,2676,2677,2678,2679,2680,573,2681,2682,2683,573,2684,573,2685,573,2686,573,2687,2688,2689,2690,573,2691,2692,2693,573,2694,2695,2696,2697,2698,2699,2700,2701,2702,2703,2704,2705,2706,2707,2708,573,2709,2710,2711,2712,2713,2714,2715,2716,2717,2718,2719,2720,2721,2722,2723,2724,573,2725,2726,2727,2728,2729,2730,2731,2732,2733,2734,2735,2736,2737,2738,2739,2740,2741,2742,2743,2744,2745,2746,2747,2748,2749,2750,2751,2752,573,2753,2754,2755,2756,2757,2758,2759,2760,2761,2762,2763,2764,2765,2766,2767,2768,2769,2770,2771,2772,2773,2774,2775,2776,2777,2778,2779,2780,2781,2782,2783,2784,2785,2786,2787,2788,2789,2790,2791,2792,2793,573,2079,570],300:[2794,791,573,618,2795,573,2796,793,711,2797,712,585,573,1805,570],301:[2798,2799,2800,2801,2802,2803,573,576,570],302:[2804,1931,573,2805,2806,573,2807,585,573,576,570],303:[2808,2809,573,2810,573,576,570],304:[2811,2812,570],305:[2813,2814,573,2810,573,576,570],306:[2815,2816,570],307:[2817,2818,570],308:[2819,2820,570],309:[2821,597,2822,573,2823,585,573,1522,573,2824,570],310:[2825,2826,573,2827,2810,573,576,570],311:[2828,2829,570],312:[2830,2831,570],313:[2832,2833,570],314:[2834,2835,570],315:[2836,2837,570],316:[2838,2839,570],317:[2840,2841,2842,573,2843,2844,573,576,570],318:[2845,2846,570],319:[2847,2848,570],320:[2849,2850,573,2827,2810,573,576,570],321:[2851,2852,2853,573,2854,573,2855,2856,2857,2858,2859,573,2860,570],322:[2861,2862,573,2827,573,576,570],323:[2863,2864,570],324:[2865,2866,570],325:[2867,2868,570],326:[2869,2870,570],327:[2871,2872,570],328:[2873,2874,570],329:[2875,2876,570],330:[2877,573,573,2878,1641,1244,573,573,573,2879,2880,2881,2882,2883,573,1128,2884,2885,573,2886,2885,712,573,2887,2888,573,2889,2890,573,828,585,573,573,573,2891,981,2892,573,2893,2894,573,2895,2896,573,2117,573,891,734,573,2897,573,2509,573,2898,891,573,2899,2900,573,2117,573,2901,2902,734,712,573,828,585,573,573,573,2903,2904,573,2905,585,573,573,573,2906,2904,573,2907,585,573,573,573,1576,573,2908,2909,573,2910,573,573,573,2911,2912,573,2913,2914,2915,573,2916,712,573,2917,573,2918,585,573,573,573,2919,573,2920,2921,2922,2923,2924,573,2925,585,573,2926,573,573,573,2927,573,2928,2929,573,2930,2931,573,2932,2933,573,2210,2934,2935,573,2936,573,573,2937,573,2938,2939,573,2940,2941,573,573,2937,573,2942,2943,2944,573,2945,2946,2947,2948,573,573,2949,2937,573,2945,2950,573,573,2951,2938,2952,573,2953,573,2954,2955,573,2956,712,573,573,573,2957,573,2940,2958,573,573,2938,2952,2939,573,2940,818,573,573,2945,573,2938,2959,2943,573,2960,2961,573,573,573,2954,2955,2962,2963,573,2964,712,573,573,573,2947,585,573,2965,570],331:[2966,2967,570],332:[2968,2969,573,2970,573,576,570],333:[2971,2972,573,2810,573,576,570],334:[2973,2974,570],335:[2975,2976,570],336:[2977,2978,573,2979,573,576,570],337:[2980,573,573,2981,573,2982,573,2983,573,2984,2985,573,2986,2987,2988,2989,585,573,2990,573,573,573,2991,2992,2239,573,2993,2994,573,2995,2996,711,2997,573,2241,2242,2998,573,2999,3000,3001,3002,573,3003,1003,3004,573,3005,3006,712,573,3007,585,573,3008,570],338:[3009,3010,570],339:[3011,597,3012,573,3013,570],340:[3014,3015,570],341:[3016,3017,573,2810,573,576,570],342:[3018,3019,570],343:[3020,3021,573,2827,2810,573,576,570],344:[3022,3023,570],345:[3024,3025,3026,3027,3028,3029,3030,570],346:[3031,3032,626,573,3033,626,573,3034,626,573,628,570],347:[3035,3036,573,3037,3038,573,576,570],348:[3039,3040,573,3041,3042,573,576,570],349:[3043,3044,3045,573,3046,585,573,3047,573,3048,570],350:[3049,1214,3050,573,3051,3052,3053,3054,573,3055,3056,585,573,576,570],351:[3057,3058,573,3059,570],352:[3060,573,573,3061,3062,573,3063,573,3064,3065,573,573,573,573,3066,573,3067,3068,3069,573,3070,3071,3072,3073,3074,573,573,573,3075,3076,573,3077,3078,3079,3078,573,3080,3081,3082,3083,573,3084,3085,3086,3087,573,3088,573,3089,734,712,585,573,573,573,3090,825,3091,3092,573,3093,573,573,3094,3095,573,3096,975,573,573,573,3097,891,573,3098,3099,3100,573,573,573,3101,891,573,573,573,3102,573,3103,3104,3105,3106,3107,3104,1003,3004,573,573,573,3108,3109,573,3110,3111,3112,3113,3114,3088,573,827,734,712,573,828,585,573,573,573,573,3115,3116,786,573,3117,573,3093,3118,3119,3120,3107,1505,1003,3004,712,573,1321,585,573,573,573,573,573,1176,3121,1177,573,573,585,573,573,573,3122,570],353:[3123,3124,573,3125,573,3126,573,3127,573,3128,3129,573,576,570],354:[3130,1911,3131,573,3132,573,1176,3133,1902,3134,573,1904,585,573,3135,573,576,570],355:[3136,3137,570],356:[3138,3139,570],357:[3140,3141,573,3142,570],358:[3143,1106,573,3144,3145,573,3146,1017,585,573,576,570],359:[3147,3148,3149,573,3150,573,1106,573,3151,3152,573,573,1017,3153,573,573,3154,733,573,3155,573,3156,3157,573,711,955,585,573,576,570],360:[3158,3159,3160,573,3161,570],361:[3162,3148,3163,573,3150,573,1106,3164,3165,573,3166,573,831,3167,573,3168,2509,3169,3154,2117,3170,711,955,712,585,573,576,570],362:[3171,3172,3173,570],363:[3174,830,573,3144,3175,573,3176,585,573,576,570],364:[3177,3178,570],365:[3179,850,573,3180,1098,573,576,570],366:[3181,597,3182,573,3183,573,3184,570],367:[3185,573,573,3186,3187,573,3188,689,585,573,573,573,3189,573,3190,1586,573,573,573,3191,573,3192,570],368:[3193,3194,573,3195,570],369:[3196,3197,573,3198,573,1176,3199,1902,3200,573,1904,585,570],370:[3201,3202,570],371:[3203,3186,3204,3205,3206,573,3207,573,689,712,585,573,3208,3159,3209,573,3210,570],372:[3211,3194,573,3212,570],373:[573,573,3213,3214,3215,3216,585,573,1212,570],374:[3217,3218,3219,573,3220,3221,573,3222,573,3223,573,3224,3225,573,3226,585,573,1212,570],375:[3227,3194,573,3228,570],376:[3229,3194,573,3230,570],377:[3231,3208,3159,3209,573,3232,570],378:[3233,3234,570],379:[3235,3236,3237,573,573,573,3238,3239,2066,2065,573,3240,3241,573,3242,3243,3244,3245,711,955,585,573,573,573,3246,3247,3248,573,3249,3250,573,3251,712,573,3252,3253,573,3254,3255,585,573,573,573,3256,3257,573,3258,585,573,573,573,3259,2069,585,573,573,573,3260,2072,585,573,573,573,3261,3262,3263,573,3264,573,841,3265,846,573,3266,3267,573,2076,585,573,3268,3269,573,3270,3271,573,2079,570],380:[3272,573,573,3273,3274,3275,573,3276,3277,573,3278,734,573,3279,573,3280,573,3281,573,3282,3283,573,1263,3284,3285,712,573,3286,573,3287,585,573,573,573,3288,3274,3289,573,3290,3291,573,3292,3293,573,3281,573,3282,3283,573,1263,3284,3294,712,573,3286,573,3295,585,573,573,573,3296,573,573,573,3297,3298,3299,3300,3301,3302,3303,3304,3305,3306,573,573,573,3307,3308,3309,3310,3311,3312,3313,3314,573,573,573,3315,573,3316,573,573,573,3317,3318,573,3319,573,3320,573,573,573,3321,573,3322,573,573,573,3323,3324,573,573,573,3325,573,3326,3327,573,3328,3329,573,3330,3331,573,3332,3333,573,573,573,3334,573,3135,573,576,570],381:[3335,3336,3337,573,3338,585,573,3339,573,3340,3341,3342,3343,3344,3345,3346,791,573,573,573,3347,3348,3349,3350,3351,3352,3353,573,3354,585,573,2062,570],382:[3355,3356,3357,1593,573,3358,3359,3360,3361,573,3362,3363,573,3364,3363,573,3365,3363,573,3366,3367,3368,573,3369,3363,573,576,570],383:[3370,3371,573,3372,570],384:[3373,3374,3375,3216,585,573,1212,570],385:[3376,3374,3377,3216,585,573,1212,570],386:[3378,3379,626,573,3380,570],387:[3381,3382,1321,573,3383,1321,573,1326,570],388:[3384,1307,626,573,3385,3386,3387,573,3388,626,573,3389,570],389:[3390,1307,626,573,3385,3386,3387,573,3388,626,573,3391,570],390:[3392,1307,626,573,3385,3386,3387,573,3393,570],391:[3394,3379,626,573,3395,570],392:[3396,3186,573,573,3397,573,3274,3398,3399,786,712,573,3400,573,3401,3402,573,3403,3404,3405,3406,573,1505,734,712,573,3407,573,1321,3408,573,573,3274,3409,3399,786,712,573,1321,818,626,570],393:[3410,3411,570],394:[3412,1307,626,573,3385,3386,3413,573,3388,626,573,3414,570],395:[3415,1911,3416,573,1176,2141,1902,3417,573,1904,585,573,3418,573,576,570],396:[3419,3420,570],397:[3421,1106,573,3422,3423,3424,3425,573,3426,3427,573,3428,3429,573,576,570],398:[3430,3431,570],399:[3432,3433,3434,3435,3436,573,1176,3437,573,573,3438,3439,2902,734,573,573,573,3440,573,3441,3442,3443,573,3444,3445,3086,3446,573,3447,731,734,573,3448,3449,573,573,573,3450,3451,2902,573,3452,3453,573,3454,734,712,1902,573,573,3455,3456,712,573,1904,585,570],400:[573,573,3457,573,573,3458,3459,3460,3461,3462,3463,3464,573,3465,3466,3467,573,3468,573,3469,689,573,573,573,3470,3471,573,3472,712,573,3473,573,3474,3475,3476,3477,3478,573,3479,3480,3481,573,3482,3483,573,3484,3086,3484,734,573,3485,573,3486,711,955,573,3487,585,573,573,573,3488,3489,573,3490,3491,585,573,573,573,3492,3489,3493,573,3494,3495,585,573,573,573,3496,3497,3498,711,955,573,3499,3500,585,573,573,573,3501,3502,573,2078,585,573,573,573,3503,3504,3505,573,3506,573,3507,3508,585,573,573,573,3509,573,3510,3511,3512,3263,573,3513,3514,573,3515,3516,3517,3518,573,3519,2076,585,573,573,573,3520,3521,573,3522,3523,573,3524,573,573,573,3525,3526,573,573,573,3527,3528,573,3529,570],401:[3530,3531,573,3532,570],402:[3533,573,573,3531,573,3534,3535,573,3536,3537,573,3538,3539,573,3540,712,573,3541,585,573,3542,3543,573,755,585,573,573,573,3544,3545,573,3546,3547,573,3548,3549,573,573,573,3550,3551,3552,861,573,576,570],403:[3553,573,573,3501,3502,573,2078,585,573,573,573,3554,3555,3556,3557,3263,573,3558,3559,573,573,573,3560,573,576,570],404:[573,573,3561,3562,573,3563,3564,3565,3566,573,573,573,3567,573,3568,3569,3570,3571,818,819,573,3572,3573,573,3574,3573,573,573,573,3575,3576,573,573,573,3577,3578,573,3568,3579,573,3580,3581,3582,3583,3584,3585,573,3580,585,570],405:[3586,3587,3588,3589,3590,791,573,3572,3591,573,3574,3592,573,3593,573,3594,570],406:[3595,719,3596,573,3597,585,573,850,573,3598,573,3599,573,576,570],407:[3600,3601,570],408:[3602,573,573,3567,573,3568,3573,3569,3570,3571,818,819,573,3574,3573,573,573,573,3575,3603,570],409:[3604,3458,3605,3606,3607,3608,3609,3610,573,573,573,3488,3489,3493,573,3611,585,573,573,573,3492,3489,3493,573,3612,585,573,573,573,3496,3497,3498,3613,711,955,573,3614,3615,3616,573,3617,585,573,573,573,3501,3502,573,2078,585,573,573,573,3618,573,3507,3619,585,573,573,573,3620,573,3510,3511,3512,3263,573,3621,3622,573,3515,3516,3623,3624,573,3625,570],410:[573,573,3626,573,573,3458,3459,3460,3461,3607,3608,3464,573,3465,3466,3467,573,3468,573,3469,689,573,573,573,3470,3627,573,3472,712,573,3628,573,3473,3629,573,962,573,3487,585,573,573,573,3488,3489,573,3490,585,573,573,573,3492,3489,573,3494,585,573,573,573,3496,3497,3498,711,955,573,3499,3500,585,573,573,573,3501,3502,573,2078,585,573,573,573,3630,573,3507,3508,585,573,573,573,3509,573,3510,3511,3512,3263,573,3513,3514,573,3515,3516,3517,3518,573,3519,2076,585,573,573,573,3520,3521,573,3522,3523,573,3524,573,573,573,3527,3631,573,3632,570],411:[3633,1106,3634,2491,573,3635,573,831,3636,894,573,3637,3638,3639,3640,3641,573,916,585,573,576,570],412:[573,573,3642,3643,3644,3645,3646,573,3647,3570,3648,585,573,1119,573,3649,573,3572,3650,3651,3652,3653,3654,3655,573,962,585,573,3574,3656,3657,3658,3659,3660,3655,573,962,585,570],413:[3661,3662,3663,3664,3665,573,573,573,3666,3667,573,573,573,3462,573,3668,3669,3670,573,3671,3672,573,3673,818,819,573,573,573,3463,573,3674,3675,3676,573,3671,3677,573,3678,818,819,573,573,573,3679,573,573,573,3680,573,3529,570],414:[3681,3662,3663,3664,3682,573,3683,570],415:[3684,1893,573,3685,570],416:[3686,3687,3504,3665,573,573,573,3666,3667,573,573,573,3688,573,3689,573,576,570],417:[3690,3691,3692,573,3693,573,828,585,573,3694,573,3695,570],418:[573,573,3696,3697,573,1176,3698,3699,573,3700,3701,1003,3454,573,3702,734,712,1902,573,573,3455,3456,712,573,1904,585,570],419:[3703,3704,570],420:[3705,3706,570],421:[3707,3708,573,3709,570],422:[3710,3711,570],423:[3712,719,3713,573,850,573,573,573,3714,573,3715,573,3716,3717,3718,573,3190,1586,573,3719,3720,573,3721,570],424:[573,573,3722,3189,3723,3724,573,841,3725,3726,3727,3728,573,3729,3730,573,3731,573,3732,735,585,570],425:[3733,3734,3735,573,3736,3737,573,573,573,3738,846,573,573,573,3739,3740,573,3741,573,3742,3743,573,3744,1003,3745,3746,3747,573,3748,1003,3749,711,955,573,573,573,3750,585,570],426:[3751,3752,573,3753,570],427:[3754,573,573,3755,3756,3757,3758,1112,573,3759,573,3760,585,573,573,573,3761,573,3762,573,3763,570],428:[573,573,3764,3765,3766,573,3767,3768,2283,573,3274,3769,3284,3770,3771,573,891,734,573,3772,712,573,3773,585,570],429:[3774,3765,573,3775,570],430:[3776,3777,573,3778,570],431:[3779,1214,573,3780,3781,3782,3783,3784,3785,573,576,570],432:[3786,1214,3787,573,3788,3789,3790,3791,3792,3793,3794,3795,3796,3797,573,3798,3799,3800,3801,3802,3803,3804,3805,573,3806,585,573,576,570],433:[573,573,3807,607,3808,3809,3810,3811,3812,573,608,3813,846,573,573,573,3814,573,3815,3816,3817,573,794,712,573,573,573,792,3818,573,3819,3820,573,794,712,573,573,573,3821,3822,573,3823,3824,573,792,3824,573,573,573,3825,3818,573,3819,3826,3827,573,794,712,573,573,573,3828,3829,573,2893,3830,3831,573,3832,573,3833,3834,573,975,734,712,573,573,573,3835,3818,573,3819,3826,3836,3837,573,794,712,573,3838,3839,585,573,3840,3841,3842,573,573,573,3843,3844,573,576,570],434:[3845,3846,3847,573,3848,3849,573,3850,3851,573,573,573,3852,1243,3853,573,3854,3855,573,3856,3857,3858,573,3859,711,955,585,573,573,573,3860,1243,3853,573,3854,3861,573,3856,3857,3858,573,3862,711,955,585,573,573,573,3863,3864,573,3865,573,3866,585,573,573,573,3867,3868,3869,573,3870,570],435:[3871,573,573,3872,3873,3874,573,3875,570],436:[3876,3877,570],437:[3878,3879,573,1176,3880,1177,573,573,3881,585,573,3882,3883,3884,573,576,570],438:[3885,3189,573,3190,1586,573,3723,3724,3886,3887,573,3888,3720,573,3889,1818,573,3890,573,841,3891,3892,3893,573,3742,976,573,794,712,573,1818,585,570],439:[3894,573,573,3895,573,3896,981,573,3897,3898,573,3899,3900,712,573,828,585,573,573,573,1214,3901,3902,573,3903,3904,3905,3906,3907,3908,3909,3910,573,3911,573,3912,573,3913,573,3914,573,3915,573,3916,573,3917,585,573,576,570],440:[3918,3919,3920,570],441:[3921,3922,573,3923,570],442:[3924,3925,570],443:[3926,3694,573,3927,570],444:[3928,3929,573,573,573,1942,1943,1945,573,1946,1947,573,3930,573,3931,1951,1952,573,3932,573,573,573,3933,570],445:[3934,3935,3936,573,573,573,3937,982,3938,573,3939,573,803,573,3940,573,803,573,3941,573,803,3942,3943,3944,2060,3945,573,3946,585,573,573,573,3947,982,3948,3949,3950,3938,573,573,573,3939,573,803,573,3940,573,803,573,3941,573,803,3942,573,3951,3952,573,803,2060,573,573,573,3953,3954,3944,2060,3945,2060,573,573,573,3093,3955,3956,3957,3958,3959,573,3960,573,3961,573,1559,3962,573,3963,3964,573,1559,573,3965,3966,573,1559,573,2057,3967,712,573,3968,573,3946,585,573,573,573,3969,3970,982,573,3971,3972,3973,3974,3975,573,3976,573,803,573,3977,573,803,573,3978,573,803,573,3979,3980,3981,3982,573,2395,585,573,573,573,3983,3984,573,3985,573,3986,573,3987,573,828,585,573,573,573,3988,3989,3990,573,3991,3992,573,3993,573,3994,712,573,3995,585,573,573,573,3996,3437,3997,573,3998,3999,712,585,573,573,573,4000,4001,573,4002,4003,818,4004,573,4005,4006,573,4007,4008,573,4009,573,4010,573,4011,4012,573,4013,4014,573,4015,4016,570],446:[4017,4018,3128,3129,4019,573,576,570],447:[4020,4021,4022,4023,818,4022,570],448:[4024,4025,570],449:[4026,1882,4027,573,1884,573,573,573,4028,982,573,4029,4030,573,1559,712,573,1560,585,573,573,573,4031,573,4032,4033,573,1887,4034,4035,573,4036,4037,711,4038,4039,4040,4041,573,4036,4037,4042,4043,712,573,4044,573,4045,585,573,573,573,4046,785,786,573,1887,4047,573,4048,4049,4050,4051,4052,573,826,4053,4054,573,4055,4056,573,4057,4058,573,4059,4060,573,4061,4062,712,573,4063,786,573,4064,786,573,4065,786,573,4066,786,573,4067,786,573,1321,585,573,573,573,4068,785,786,573,1641,786,573,826,4069,1505,712,573,1321,585,573,573,573,841,4070,573,4071,735,712,585,570],450:[4072,791,573,4073,4074,573,4075,4076,4077,4078,4079,4080,4081,573,4082,570],451:[4083,4084,4085,573,573,573,4086,4087,573,573,573,4088,573,4089,573,4090,573,4091,573,4092,570],452:[4093,791,4094,573,4095,4096,4097,4076,4097,4098,4097,4099,4081,573,4082,570],453:[4100,4101,573,4102,4103,570],454:[4104,4105,4106,570],455:[4107,4108,4109,573,4110,570],456:[4111,4112,573,4113,4114,573,4115,570],457:[4116,4117,4118,4119,573,3190,4120,573,4121,573,4122,570],458:[4123,4117,4118,4119,573,3190,4120,573,4124,4122,570],459:[4125,4126,573,4127,570],460:[4128,4129,570],461:[4130,1307,626,573,4131,573,4132,626,573,4133,570],462:[4134,1307,626,573,4131,573,4132,626,573,4135,570],463:[4136,3735,573,3736,3737,573,573,573,3738,846,573,573,573,3742,4137,3746,4138,711,955,573,573,573,3750,585,570],464:[4139,4140,4141,573,573,573,4142,4143,4144,573,4145,573,4146,585,573,573,573,4147,570],465:[4148,4140,4149,573,4150,570],466:[4151,4152,4153,4154,573,4155,4156,573,4157,4158,711,4159,585,573,4160,4157,4161,711,4162,585,573,576,570],467:[4163,4164,4165,573,4166,573,573,573,4167,4168,4169,4170,573,4171,4172,573,4173,4174,573,4175,573,4176,4177,573,4178,585,573,573,573,4179,573,4180,4181,4182,573,3899,4183,712,573,819,585,573,573,573,4184,981,573,4181,4182,573,4185,3900,712,573,828,585,573,573,573,1214,4186,3902,573,4187,4188,573,3903,3904,3905,3906,4189,4190,3907,3908,4191,4192,4193,4194,4195,4196,573,3911,573,4197,573,4198,4199,4200,573,4201,573,4202,573,4203,573,4204,573,4205,712,573,3917,585,573,576,570],468:[4206,4140,4207,573,4208,570],469:[4209,1576,4210,573,1942,1943,4211,1945,573,4212,573,4213,1950,1951,1952,573,4214,570],470:[4215,4216,4217,1119,573,4218,573,4219,573,4220,4221,4222,573,4223,573,4224,573,3127,573,4225,573,4226,573,576,570],471:[4227,4228,573,4229,573,4230,573,4231,4232,4233,573,4234,570],472:[4235,4236,573,4237,573,4238,4239,573,4240,573,4241,585,573,576,570],473:[4242,4236,4228,573,4243,573,4234,570],474:[4244,4245,4228,573,4246,573,4234,570],475:[4247,1106,4248,573,4249,4250,4251,573,4252,4253,573,828,585,573,4254,573,4255,573,4256,573,4257,4258,4259,573,4260,4261,573,576,570],476:[4262,4228,573,4263,4264,4265,573,4234,570],477:[4266,4236,4228,573,4267,573,4234,570],478:[4268,4236,573,1106,4269,4259,4270,573,4260,4261,573,576,570],479:[4271,4272,570],480:[4273,4274,570],481:[4275,4276,570],482:[4277,1106,4278,4264,4279,4264,4280,4259,4270,573,4260,4261,573,576,570],483:[4281,4282,570],484:[4283,4284,570],485:[4285,4286,570],486:[4287,4254,4228,573,4288,573,4289,573,4290,573,573,573,1212,570],487:[4291,4254,4228,573,4292,573,4293,573,4294,573,4234,570],488:[4295,4296,573,4297,570],489:[4298,4228,573,4299,573,4249,4300,818,4301,573,4302,585,573,4234,570],490:[4303,4245,4228,573,4246,4304,573,4234,570],491:[4305,4228,573,4278,4306,573,4234,570],492:[4307,4236,573,1106,4308,4259,4248,573,4260,4261,573,576,570],493:[4309,4296,573,4310,570],494:[4311,1106,4278,4264,4312,4259,4270,573,4260,4261,573,576,570],495:[4313,4228,573,4249,4314,573,4315,585,573,4278,4316,573,4234,570],496:[4317,1106,573,4318,4319,573,4320,573,916,585,573,573,573,4321,4322,573,4323,4324,573,4325,4326,573,576,570],497:[4327,1106,573,4318,4319,573,4320,573,916,585,573,573,573,4328,4329,4330,573,4331,4332,573,4333,4334,585,573,576,570],498:[4335,573,573,573,4336,4337,4338,4339,4340,4341,573,573,573,4342,4343,4344,573,4345,573,828,585,573,573,573,4255,573,4256,573,4346,4347,4348,4349,573,4234,570],499:[4350,1106,4278,4351,4264,4280,4259,4270,573,4260,4261,573,576,570],500:[4352,1106,4278,4264,4353,4259,4270,573,4260,4261,573,576,570],501:[4354,573,573,4355,4356,1244,573,4357,4358,573,4359,573,4360,4361,573,4362,4363,573,4364,712,573,819,585,573,573,573,1106,4365,573,4366,573,4367,4368,573,4369,4370,573,4371,794,573,4372,4373,573,3580,585,573,4374,4375,4376,4349,4259,4248,573,4260,4261,573,576,570],502:[4377,1106,573,4378,4379,573,4380,585,573,576,570],503:[4381,4382,4383,573,4384,663,573,4378,4385,4386,711,794,573,4387,573,4388,689,585,573,4389,664,4390,573,672,570],504:[4391,4392,4393,573,4394,573,4395,4396,573,4397,573,4398,4399,1321,585,573,4400,573,1326,570],505:[4401,573,573,4402,981,573,4403,3403,4404,4405,573,4406,4407,573,730,731,573,4408,573,4409,4410,4411,573,4412,734,712,573,828,585,573,573,573,4413,4414,4415,4416,573,573,573,4417,573,4418,4419,4420,573,3999,734,712,573,573,573,4421,4422,4423,4424,4425,4426,4340,573,4427,573,4428,4429,573,4430,4431,4432,573,891,734,573,4433,573,4434,573,4359,573,4435,4436,573,4437,4432,573,891,734,573,4438,573,573,573,4439,4440,4441,573,4442,4443,4444,4445,4446,573,4447,712,573,4448,573,4449,573,828,585,573,573,573,4450,4451,4452,573,1633,4453,4454,4455,573,4456,4457,573,730,731,4458,4459,573,891,734,573,4460,712,573,4461,585,573,573,573,4462,4463,789,573,4464,789,573,626,585,573,573,573,4465,570],506:[4466,4467,573,4468,573,1176,4469,4470,4471,4472,1902,4473,573,1904,585,573,4474,570],507:[4475,1106,573,4476,4477,585,573,576,570],508:[573,573,573,573,4478,4479,573,573,573,4480,981,4481,4482,4483,573,573,573,4484,4485,4486,573,4487,4488,4489,4490,3086,4491,573,4492,4493,573,4494,573,3999,734,712,573,4495,573,573,573,573,4496,4497,4498,573,4499,573,573,573,4500,4501,573,4502,573,4503,573,573,4504,4505,573,4506,4507,573,573,4508,4509,4510,573,4511,3086,4491,573,573,573,4512,4513,573,4514,731,734,573,573,573,4515,4497,4498,573,4499,4516,573,573,573,573,4517,4497,4498,573,4499,573,573,573,4518,573,4500,4519,573,4520,573,573,573,4521,573,4522,573,573,573,4523,573,4524,4525,573,4526,4527,731,573,4528,4529,4530,573,4531,731,573,4532,573,573,573,4533,573,4534,573,573,4535,4536,573,4537,4538,573,4539,4505,4540,4541,4510,573,4511,4506,4542,573,573,4543,4509,4544,573,4407,3086,4491,573,573,573,4512,4545,573,4546,731,734,573,573,573,4547,4497,4548,573,4549,711,955,573,828,585,573,573,573,4550,1735,573,4551,4552,712,573,828,585,573,573,573,4553,785,786,573,4356,789,573,4554,789,573,4555,789,573,626,585,573,573,573,1176,4556,1902,573,573,4557,573,1904,585,570],509:[4558,4559,573,4560,570],510:[4561,4562,573,573,573,4563,981,4564,4482,1007,4565,573,4566,4567,573,4568,4569,4570,4571,4572,573,4573,1003,3004,712,573,4574,4483,573,4575,573,4576,4577,573,4578,4579,4580,573,4576,4581,573,916,573,2954,4582,573,4583,4584,734,573,4585,712,573,573,573,4586,4587,4588,573,4499,712,573,828,585,573,573,573,4589,958,4590,4591,573,961,573,4592,4593,957,573,962,585,570],511:[4594,1106,573,4378,4595,4481,573,4596,4597,573,4564,573,1633,4598,4572,573,4599,712,573,4252,585,573,576,570],512:[4600,573,573,4402,4601,4602,4603,573,4604,4605,573,4606,4607,4608,1003,975,712,573,4425,573,4609,4610,573,4611,712,573,4612,4613,4614,573,4615,585,573,573,573,1106,4616,573,4617,4618,573,916,585,573,576,570],513:[4619,573,573,4402,981,573,4403,4620,4621,573,4622,4409,573,891,734,573,4623,573,4624,712,573,828,585,573,573,573,4625,981,4564,573,573,573,4626,4627,4425,4628,4629,573,4630,573,573,573,4631,4632,4633,4628,4634,573,4635,573,573,573,4626,4636,4425,4628,4637,573,4638,573,573,573,4626,4639,4425,4628,4640,573,4641,573,828,585,573,573,573,4465,570],514:[4642,573,573,4643,573,4644,4645,573,4646,735,573,4647,573,4648,573,828,585,573,573,573,4649,573,573,573,1044,4650,4651,573,4476,4652,4653,573,4654,4655,573,4656,573,4657,4658,585,573,573,573,4659,573,1063,4660,4661,4662,4663,573,4664,4665,573,4666,712,573,4667,585,573,573,573,4668,4669,573,4670,573,573,573,4671,4672,4673,573,4674,573,573,573,4675,4676,573,4677,573,573,573,4678,4679,573,4680,573,4681,4682,573,4683,573,573,573,4684,4685,573,4686,573,573,573,4687,4688,4689,573,4690,573,573,573,4691,573,2062,570],515:[4692,573,573,4693,4694,4695,4696,573,4697,4698,573,4699,4700,711,4701,573,4702,4698,4703,573,4704,573,4705,712,573,4706,4707,1112,573,4708,573,4709,573,4710,573,4711,573,4712,573,4713,585,573,573,573,4714,4715,689,573,4716,4717,573,4718,585,573,573,573,4719,981,573,826,4720,573,3156,712,573,828,585,573,573,573,3050,4721,4722,573,4723,4724,573,4725,794,573,4726,573,4727,585,570],516:[4728,573,573,4729,573,4730,3742,4731,573,4732,4733,573,4734,585,573,573,573,4735,4736,4737,1048,4738,4739,4740,4741,573,4742,570],517:[4743,4744,1321,573,573,573,4745,4746,786,585,573,628,570],518:[4747,4748,626,573,4749,4750,573,4751,1321,573,4752,573,4753,570],519:[4754,1106,4755,3902,573,3903,4756,2298,4757,4758,4344,573,916,585,573,576,570],520:[4759,1106,4760,3902,573,3903,2298,4757,4758,4344,573,916,585,573,576,570],521:[4761,4392,4762,573,4394,573,573,573,4763,573,573,4764,1083,573,4765,4766,4767,4768,4769,573,4770,573,1959,573,4771,573,4772,4773,4774,956,573,962,573,573,573,4775,689,573,573,573,4776,689,573,4777,4778,4779,573,573,573,4780,4781,4782,4783,4593,573,962,573,573,573,4784,4781,4785,4593,573,962,573,573,573,4786,4787,573,4788,573,1088,4789,1090,573,4790,975,573,4791,712,573,573,573,4792,4793,4794,573,4795,585,573,573,573,1176,4796,1902,626,585,573,628,570],522:[4797,4798,4799,4800,4801,573,4474,570],523:[4802,573,573,4803,573,573,573,4804,573,4805,786,573,4806,573,4807,786,573,4808,573,4809,786,573,4810,573,4811,4812,4813,573,1321,585,573,573,573,4814,4815,573,4816,4817,4818,4817,573,4819,786,573,4820,4821,573,1321,585,573,573,573,4822,4823,4813,573,1321,585,573,573,573,573,573,4824,4825,573,4826,4827,573,4828,585,573,573,573,2608,4829,573,4830,573,573,4831,4832,573,573,4831,4833,573,818,819,573,573,573,4834,4835,573,4836,585,573,4837,570],524:[4838,573,573,4402,981,4839,573,4604,4840,4841,573,3403,4842,4410,573,573,4843,573,4412,734,573,3156,712,573,828,585,573,573,573,4844,981,4481,4564,4483,4845,573,4846,573,573,4847,573,4848,4849,573,4850,4851,4852,4853,573,4854,573,573,573,4855,4856,4857,4858,4859,573,4860,573,4861,734,573,573,573,4862,4863,4864,4446,573,4549,573,735,4865,573,573,4848,4866,573,4867,4868,4869,573,573,573,4870,4871,4444,4853,573,4872,573,573,573,4862,4863,4444,4873,573,4874,573,573,573,4850,4875,4876,4877,573,4878,573,573,573,4855,4856,4857,4858,4879,573,4880,573,4861,734,573,735,4881,573,573,4870,4882,4444,4853,573,4872,573,573,573,4862,4863,4444,4873,573,4874,573,573,573,4850,4883,4876,4877,573,4878,573,573,573,4855,4856,4857,4858,4879,573,4880,573,4861,734,573,735,712,573,4633,4340,573,4252,573,828,585,573,573,573,4884,4885,786,573,4886,786,573,4887,573,4888,4889,711,786,573,4890,786,573,1321,585,573,573,573,4891,4892,789,573,4893,789,573,626,585,573,573,573,4894,4895,789,573,4896,789,573,4897,789,573,626,585,573,573,573,4465,570],525:[4898,573,573,4899,1048,573,4900,4901,4902,573,4903,585,573,573,573,1058,573,4476,4904,4905,4906,1071,1072,1073,573,1074,585,573,1077,570],526:[4907,1106,573,4378,4908,4909,4910,4911,573,688,794,573,4912,573,573,573,4913,4914,891,712,573,4425,4915,573,4252,585,573,576,570],527:[4916,573,573,4917,4918,4919,891,573,4920,4921,573,4922,3999,573,4923,573,4924,712,573,573,573,4925,4926,573,4927,735,573,4928,573,4929,585,573,573,573,4750,4930,4931,4932,573,1176,4933,1902,573,573,4557,573,1904,585,570],528:[4934,791,573,4935,3348,4936,573,4937,2057,794,712,573,3351,4938,3353,573,3354,585,573,3593,573,3594,570],529:[4939,4940,4941,573,1549,4942,573,4943,573,576,570],530:[573,573,4944,4945,4946,573,573,573,4947,3274,4948,573,4949,4950,573,4948,573,4951,573,573,4952,573,4953,4954,4955,573,4956,573,4957,573,573,4958,573,4959,4960,573,573,4961,573,4962,2258,4963,731,573,3999,4964,573,573,4965,573,4953,4966,4955,573,4967,4968,573,573,573,4969,573,4970,4971,4972,4973,2258,4963,573,4974,573,573,4975,573,4976,4977,573,4978,573,4979,4980,573,573,4981,573,4982,2258,4963,731,573,3999,1003,573,573,4983,734,3284,573,573,4984,573,3772,712,585,573,573,573,4985,4986,4172,573,4987,4988,573,4554,4988,573,4555,4989,573,4990,1244,573,819,585,573,573,573,4991,573,573,573,4992,573,4993,4994,818,4995,573,4799,4800,4801,573,4996,573,4749,573,573,573,1176,4997,1902,4473,573,1904,585,573,573,573,570],531:[573,573,4998,573,573,4999,4554,1244,573,4990,1244,573,5000,1244,573,1529,585,573,573,573,5001,723,5002,573,5003,5004,573,4990,1244,573,5000,1244,573,1243,5005,573,819,585,573,573,573,5006,3497,789,573,5007,789,573,5008,789,573,626,585,573,573,573,791,573,756,573,573,2385,573,5009,727,573,573,5010,2896,573,2390,734,573,5011,712,813,573,573,2398,573,5009,738,739,573,573,573,5012,5013,573,5014,5015,573,5016,734,573,5011,712,818,573,573,5017,573,803,585,573,2062,570],532:[5018,1549,573,5019,570],533:[5020,5021,573,1553,570],534:[5022,1323,837,573,1324,837,573,1320,837,573,1322,837,573,1331,5023,573,5024,573,5025,5026,573,5027,5028,573,5029,585,573,5030,5031,573,672,570],535:[5032,1693,5033,5034,5035,5036,5037,5038,5039,5040,711,5041,5042,5043,573,5044,712,585,573,5045,570],536:[5046,573,573,2218,573,2453,5047,5048,5049,5050,711,5051,585,573,573,573,5052,573,5053,5054,573,5055,585,573,573,573,5056,570],537:[5057,5058,5059,5060,573,5061,570],538:[5062,5058,5063,5064,5065,573,5066,570],539:[5067,5068,573,5069,570],540:[5070,5071,573,5072,570],541:[5073,5074,570],542:[5075,5071,573,5076,570],543:[5077,5078,573,5079,570],544:[5080,5081,5082,573,5083,570],545:[5084,5085,573,5086,573,5087,570],546:[5088,5089,573,5090,570],547:[5091,5092,573,2198,570],548:[5093,1307,626,573,1308,626,573,1176,5094,1177,626,585,573,628,570],549:[5095,1307,626,573,1320,1321,573,1322,1321,573,1323,1321,573,1324,1321,573,1326,570],550:[5096,1307,626,573,1320,1321,573,1322,1321,573,1326,570],551:[5097,1307,626,573,5098,1321,573,5099,1321,573,1326,570],552:[5100,5101,5102,573,5103,573,1214,573,573,573,5104,5105,573,5106,573,5107,794,573,5108,573,573,573,5109,5110,573,5111,712,585,573,576,570],553:[5112,573,573,5113,5114,573,5115,5116,5117,573,5118,734,712,573,5119,573,5120,585,573,573,573,5121,5122,5123,5124,573,5125,5126,712,573,3363,585,573,573,573,1106,573,573,573,5127,573,573,573,5128,573,573,5129,573,5130,5131,573,794,712,573,573,573,5132,573,5130,5131,573,794,712,573,573,573,5133,573,5130,5131,573,794,712,573,573,573,819,585,573,576,570],554:[5134,5135,5136,573,5137,573,5138,573,5139,573,5140,5141,573,576,570],555:[5142,5143,573,5144,1561,573,5145,5146,573,5147,573,5148,5149,5150,5151,573,5152,5153,573,4110,570],556:[573,573,5154,5155,1573,5156,573,5157,5158,573,5159,5160,573,794,712,573,5161,573,5162,5160,573,794,712,573,5163,585,573,5164,573,4110,570],557:[5165,5166,5167,573,5168,5169,570],558:[5170,573,573,5171,1157,5172,573,3897,3898,573,5173,891,573,5174,712,573,828,585,573,573,573,5175,5176,573,5177,5178,573,5179,1112,573,5180,573,4188,585,573,573,573,5181,5182,573,5183,5184,794,573,5185,573,5186,5187,1112,573,5188,585,570],559:[5189,573,573,5190,5191,5192,5193,573,5194,5195,5196,585,573,573,573,5197,5198,5199,573,5200,5201,573,5202,5203,711,5204,573,5205,5206,5207,5208,573,5209,585,573,573,573,5210,573,5211,5212,573,5213,573,5214,570],560:[5215,5216,573,5217,5218,573,3897,3898,573,573,573,1738,891,573,5219,573,5220,5221,5222,712,585,573,5223,5224,573,5225,5226,585,573,576,570],561:[5227,5228,5229,573,5230,5231,1110,5232,573,5233,794,573,573,573,5234,794,573,5235,5236,573,5237,794,573,573,573,5238,573,5239,1112,573,5240,573,573,573,5241,585,573,573,573,5242,5243,570],562:[5244,5245,573,5246,5247,573,573,573,5248,5249,573,5250,5251,573,5252,5253,573,5254,573,5255,573,5256,573,5257,5258,573,5259,573,573,573,5260,573,573,573,5261,573,576,570],563:[5262,5263,573,1740,1741,573,573,573,5233,794,573,5264,5265,573,5266,5267,573,5268,573,5269,585,573,5270,573,5271,570],564:[5272,5211,5212,573,5213,573,5273,570],565:[5274,5228,573,5275,570],566:[5276,3777,5277,5278,573,5279,5280,573,576,570],567:[5281,573,573,4084,5282,5283,573,4249,5284,573,663,585,573,5285,573,5286,5284,573,5287,573,663,585,573,573,573,5288,5289,573,5290,573,573,573,5291,573,1063,3145,5292,5293,573,5294,585,573,5295,573,573,573,5296,573,5297,5298,573,4216,573,4219,573,5299,573,5300,573,5301,663,573,4226,573,573,573,5302,663,573,573,573,5303,5304,5305,573,5306,5307,573,5308,5309,5310,585,573,573,573,5311,4395,5312,5313,5314,573,573,573,5315,573,573,573,5316,573,573,573,5317,573,573,573,5306,5318,573,5319,573,5320,5321,5322,5323,5324,5325,1112,573,1277,585,570]}
const fns={abs,add,and,angle,append,arr,asc,at,back,base36_decode,base36_encode,between,brace,bracket,byte_size,capture,char_escape,check_arg,check_arity,check,chr,clear,clone,cmp_i18n,cmp,collate,concat,contain,copy,count,crc,cut_l,cut_r,date_decode,date_str,dbg_backtrace,dbg_callstack,dbg_here,dbg_origin_xs,dbg_origin,dbg_source_map,dbg_source,dec,dedup,deinit_common,delimit,dequote,different,div,drop,dump,dup,eq,every,explode,extract,fallback_error,filter,find,flower_box,flower,fn_args,fn_match,fn_select,front,get_type,get,gt,gte,has,head,iif,implode,inc,init_common,insert,is_access,is_alnum,is_alpha,is_arg,is_arr,is_atom,is_blank,is_bool,is_boolish,is_browser,is_char,is_comment,is_composite,is_container,is_cool,is_def,is_digit,is_domain,is_empty,is_false,is_fn,is_fragment,is_full,is_gn,is_identifier,is_indented,is_int,is_ip,is_ip4,is_ip6,is_json,is_key,is_last,is_lisp,is_lit_char,is_lit,is_ln,is_lower,is_mail,is_many,is_node,is_none,is_noun,is_null,is_nullish,is_num,is_numeric,is_obj,is_pair,is_printable,is_punct,is_single,is_something,is_space,is_str,is_token,is_trivia,is_true,is_tuple,is_txt,is_uint,is_uint32,is_undef,is_upper,is_url,is_user,is_ushort,is_vec,is_word,is_xn,is_rgb,join,js_encode,json_decode,json_dump,json_encode,json_load,json_save,log_append,log,log2,log3,lt,lte,main,map,match_l,match_r,match,max,min,mod,mul,mute,neq,nop,not,obj_keys,obj_length,obj_merge,obj_option,obj_order,obj_push,obj_remove,obj_unshift,obj_vals,obj,on,or,pad_l,pad_r,paren,partial,patch_c1,path_compact,path_concat,path_file,path_fix,path_join,path_split,path_strip,path_unfix,path_up,pop,prepend,profile,push,put,quote,random_str,random,record,redact,reject,remove,repeat,replace_rec,replace,report_html,report_init,report_log,report_render,resolve,reverse,rgb_init,round,salt,same,scan,set,shift,shuffle,silent,sleep,slice_l,slice_r,slice,sort,space,split,squote,stop,str_indent,strip_l,strip_r,sub,tail,task_dump,task_run,tbl_column,tbl_columns,tbl_index,tbl_init,tbl_pad_l,tbl_remove_column,tbl_rename_column,tbl_render,tbl_sort,time_delay,time_get,time_hn,time_interval,time_now,time_str,time_timeout,to_base36,to_c,to_dump,to_fixed,to_hex,to_i,to_int,to_json,to_lisp,to_lit,to_lower,to_num,to_str,to_tbl,to_uint,to_upper,trace,trim_l,trim_r,trim,trunc,tty_width,txt_compact,txt_cut,txt_head,txt_indent,txt_inline,txt_prepend,txt_unindent,unaccent,unshift,unwrap,url_beautify,url_get,url_parse,volatile,wait,xor,dom_entities,dom_escape,dom_special_chars,dom_unescape,h_a,h_attr,h_b,h_back_color,h_body,h_bold,h_border,h_br,h_color,h_decoration,h_div,h_float,h_font_family,h_font_size,h_head,h_href,h_html,h_img,h_init,h_meta,h_padding_bottom,h_padding_left,h_padding_right,h_padding_top,h_padding,h_pre,h_push,h_render,h_script,h_spacer,h_span,h_src,h_style,h_table,h_tbl,h_td,h_text,h_th,h_title,h_tr,h_wbr,h_width,init_www,is_link,link_dom,link_h,link_init,app_list,beep,deinit_node,digest,dir_call,dir_change,dir_current,dir_empty,dir_find,dir_load,dir_make,dir_read,dir_reset,dir_size,file_append,file_load,file_read,file_save,file_size,file_write,fs_change_mode,fs_copy,fs_created,fs_find,fs_locate,fs_mode,fs_modified,fs_remove,fs_rename,http_get,init_node,inspect,ip_host,ip_list,ip_v4,ip_v6,is_batch,is_color,is_dir,is_file,is_fs,is_interactive,is_readable,is_ssh,is_symbolic_link,no_umask,node_argv,node_context,open,os_batch,os_capture,os_cpu_count,os_cpu_load,os_detach,os_end,os_execute,os_home,os_host,os_log,os_parallel,os_prompt,os_ps,os_report,os_run,os_shell,os_sleep,os_system,os_user,os_wait,path_base,path_dir,path_ext,path_real,path_tmp,path_unique,path_writable,report_mail,sigint,stdout_write,to_base64,ansi_encode,ansi_get_attrs,ansi_get_colors,ansi_head,ansi_init,ansi_rgb,ansi_strip,app_token,archive_find,group_list,init_shell,is_local,is_remote,is_root,mail_debug,mail,mime_type,mnt_clean,mnt_unmount,password,rsync,ssh_pass,ssh,sudo_dir_make,sudo_dir_reset,sudo_file_append,sudo_file_read,sudo_file_save,sudo_file_write,sudo_fs_change_mode,sudo_fs_remove,sudo_is_dir,sudo_is_file,sudo_path_writable,sudo,unzip,user_created,user_list,zip,app_home,app_make,ast_assign,ast_begin,ast_brk,ast_call,ast_catch,ast_check,ast_cont,ast_else,ast_elseif,ast_fn,ast_forin,ast_fornum,ast_forof,ast_gn,ast_if,ast_include,ast_inline,ast_let,ast_ret,ast_run,ast_throw,ast_try,ast_var,ast_while,ast_yield,call_ast_block_top,call_ast_block,call_ast_declare,call_ast_for,call_ast_if,call_ast_xn,cpl_block,cpl_check_fn,cpl_check_syntax,cpl_check,cpl_compile,cpl_concat,cpl_cson,cpl_deinit,cpl_dump,cpl_escape_lisp,cpl_fold,cpl_for,cpl_generate,cpl_include,cpl_init,cpl_is_call,cpl_is_leaf,cpl_load_str,cpl_load,cpl_log_error,cpl_parse,cpl_scan,cpl_scope,cpl_source_map,cpl_tokenize,cpl_translate,cpl_uncomment_str,cpl_uncomment,cson_decode,cson_encode,cson_load,cson_save,call_expr_arg,call_expr_right,call_expr_rvalue,expr_arr,expr_call,expr_iif,expr_in,expr_inline,expr_instanceof,expr_new,expr_not,expr_obj,expr_run,expr_value,is_cson,is_data,is_name,is_tree,pkg_init,pkg_resolve,uncomment,config_append,config_clean,init_org,org_group_create_users,org_user_install,org_user_load,org_user_remove_unused,org_user_remove,org_user_save,org_user_uninstall,org_user_update,ps1_encode,init}
main()