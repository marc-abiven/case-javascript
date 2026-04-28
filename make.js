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
          const _={profile}
          {
           const o=_
           {
            const _=obj_option(o)
            {
             const s=_
             log(app,s)
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
     global.zombie=true
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
    const _=split(source)
    {
     const sloc=_
     {
      const _=is_fn(sloc.length)?sloc.length():sloc.length
      {
       const sloc=_
       {
        const _={compile,sloc}
        {
         const o=_
         {
          const _=obj_option(o)
          {
           const s=_
           log(app,s)
          }
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
                     const _=map(inputs,head,max_line_length)
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
   global.output=null
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
function obj_merge(x,y)
{
 check_arg(is_obj,x,"x","obj")
 check_arg(is_obj,y,"y","obj")
 check_arity("same",arguments.length,2)
 Object.assign(x,y)
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
       const _=is_fn(v)?v():v
       {
        let value=_
        {
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
         const _=concat(k,"=",value)
         {
          const s=_
          push(a,s)
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
function tbl_sort(x,column,compare)
{
 check_arg(is_arr,x,"x","arr")
 check_arg(is_str,column,"column","str")
 check_arity("gte",arguments.length,2)
 if(is_undef(compare))
  return tbl_sort(x,column,cmp)
 function compare_cell(x,y)
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
     return compare(left,right)
    }
   }
  }
 }
 sort(x,compare_cell)
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
 function remove_old_files(dir)
 {
  check_arg(is_str,dir,"dir","str")
  check_arity("same",arguments.length,1)
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
                              trace("remove",s)
                             }
                            }
                           }
                          }
                         }
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
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
          remove_old_files(dir_tmp)
          remove_old_files(dir_log)
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
   global.config_mabynogy=path_concat(home,".config","mabynogy")
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
 check_arg(is_str,x,"x","str")
 check_arity("gte",arguments.length,1)
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
       const _={command,status}
       {
        const o=_
        {
         const _=obj_option(o)
         {
          const s=_
          trace(call,s)
         }
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
 const _=sudo(os_run,"cat",path)
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
 const _=sudo(os_run,"stat","--terse","--format=%F",x)
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
 const _=sudo(os_run,"stat","--terse","--format=%F",x)
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
 return x("sudo",...y)
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
 function html_inline(x)
 {
  check_arg(is_str,x,"x","str")
  check_arity("same",arguments.length,1)
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
       return is_fn(r)?r():r
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
                                const _=html_inline(text)
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
                              const _=html_inline(text)
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
                              const _=html_inline(text)
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
 global.common="/home/common"
 global.login_merlin="mabynogy@mabynogy.org"
 global.org_user_path=path_concat(common,"users.json")
 global.config_padding=128
 global.config_tag="mabynogy"
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
     if(!(has(groups,"users")))
     {
      sudo("groupadd","users")
      const _=is_fn(group)?group():group
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
    const _=file_load(org_user_path)
    {
     const users=_
     {
      const _=json_decode(users)
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
 check(different,x,"mabynogy")
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
             sudo("zip","--recurse-paths","-9",r,user.home)
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
     const _=json_dump(users)
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
       const _=chr(27)
       {
        const escape=_
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
   const _=[]
   {
    const a=_
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
            push(a,v.code)
           }
          }
         }
        }
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
              const _=is_fn(relative)?relative():relative
              {
               const path=_
               {
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
                  const _=path_concat("src",v)
                  {
                   const s=_
                   push(r,s)
                  }
                 }
                }
               }
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
                                                const _={usage}
                                                {
                                                 const o=_
                                                 {
                                                  const _=obj_option(o)
                                                  {
                                                   const s=_
                                                   log(app,s)
                                                  }
                                                 }
                                                }
                                               }
                                              }
                                             }
                                            }
                                           }
                                          }
                                         }
                                        }
                                       }
                                      }
                                     }
                                    }
                                   }
                                  }
                                 }
                                }
                               }
                              }
                             }
                            }
                           }
                          }
                         }
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
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
const compile=1760442383
const pool=["lib-common/abs.cs","lib-common/add.cs","lib-common/and.cs","lib-common/angle.cs","lib-common/append.cs","lib-common/arr.cs","lib-common/asc.cs","lib-common/at.cs","lib-common/back.cs","lib-common/base36-decode.cs","lib-common/base36-encode.cs","lib-common/between.cs","lib-common/brace.cs","lib-common/bracket.cs","lib-common/byte-size.cs","lib-common/capture.cs","lib-common/char-escape.cs","lib-common/check-arg.cs","lib-common/check-arity.cs","lib-common/check.cs","lib-common/chr.cs","lib-common/clear.cs","lib-common/clone.cs","lib-common/cmp.cs","lib-common/collate.cs","lib-common/concat.cs","lib-common/contain.cs","lib-common/count.cs","lib-common/crc.cs","lib-common/cut-l.cs","lib-common/cut-r.cs","lib-common/date-decode.cs","lib-common/date-str.cs","lib-common/dbg/dbg-backtrace.cs","lib-common/dbg/dbg-callstack.cs","lib-common/dbg/dbg-here.cs","lib-common/dbg/dbg-origin-xs.cs","lib-common/dbg/dbg-origin.cs","lib-common/dbg/dbg-source-map.cs","lib-common/dbg/dbg-source.cs","lib-common/dec.cs","lib-common/dedup.cs","lib-common/deinit-common.cs","lib-common/delimit.cs","lib-common/different.cs","lib-common/div.cs","lib-common/drop.cs","lib-common/dump.cs","lib-common/dup.cs","lib-common/eq.cs","lib-common/every.cs","lib-common/explode.cs","lib-common/extract.cs","lib-common/fallback-error.cs","lib-common/filter.cs","lib-common/find.cs","lib-common/flower-box.cs","lib-common/flower.cs","lib-common/fn-args.cs","lib-common/fn-match.cs","lib-common/fn-select.cs","lib-common/front.cs","lib-common/get-type.cs","lib-common/get.cs","lib-common/gt.cs","lib-common/gte.cs","lib-common/has.cs","lib-common/head.cs","lib-common/iif.cs","lib-common/implode.cs","lib-common/inc.cs","lib-common/init-common.cs","lib-common/insert.cs","lib-common/is/is-access.cs","lib-common/is/is-alnum.cs","lib-common/is/is-alpha.cs","lib-common/is/is-arg.cs","lib-common/is/is-arr.cs","lib-common/is/is-atom.cs","lib-common/is/is-blank.cs","lib-common/is/is-bool.cs","lib-common/is/is-browser.cs","lib-common/is/is-char.cs","lib-common/is/is-comment.cs","lib-common/is/is-composite.cs","lib-common/is/is-container.cs","lib-common/is/is-cool.cs","lib-common/is/is-def.cs","lib-common/is/is-digit.cs","lib-common/is/is-domain.cs","lib-common/is/is-empty.cs","lib-common/is/is-false.cs","lib-common/is/is-fn.cs","lib-common/is/is-fragment.cs","lib-common/is/is-full.cs","lib-common/is/is-gn.cs","lib-common/is/is-identifier.cs","lib-common/is/is-indented.cs","lib-common/is/is-int.cs","lib-common/is/is-ip.cs","lib-common/is/is-ip4.cs","lib-common/is/is-ip6.cs","lib-common/is/is-json.cs","lib-common/is/is-key.cs","lib-common/is/is-last.cs","lib-common/is/is-lisp.cs","lib-common/is/is-lit-char.cs","lib-common/is/is-lit.cs","lib-common/is/is-ln.cs","lib-common/is/is-lower.cs","lib-common/is/is-mail.cs","lib-common/is/is-many.cs","lib-common/is/is-name.cs","lib-common/is/is-node.cs","lib-common/is/is-none.cs","lib-common/is/is-noun.cs","lib-common/is/is-null.cs","lib-common/is/is-num.cs","lib-common/is/is-numeric.cs","lib-common/is/is-obj.cs","lib-common/is/is-pair.cs","lib-common/is/is-punct.cs","lib-common/is/is-single.cs","lib-common/is/is-space.cs","lib-common/is/is-str.cs","lib-common/is/is-token.cs","lib-common/is/is-trivia.cs","lib-common/is/is-true.cs","lib-common/is/is-tuple.cs","lib-common/is/is-txt.cs","lib-common/is/is-uint.cs","lib-common/is/is-undef.cs","lib-common/is/is-upper.cs","lib-common/is/is-url.cs","lib-common/is/is-user.cs","lib-common/is/is-ushort.cs","lib-common/is/is-vec.cs","lib-common/is/is-word.cs","lib-common/is/is-xn.cs","lib-common/is-rgb.cs","lib-common/join.cs","lib-common/json-decode.cs","lib-common/json-dump.cs","lib-common/json-encode.cs","lib-common/log-append.cs","lib-common/log.cs","lib-common/lt.cs","lib-common/lte.cs","lib-common/main.cs","lib-common/map.cs","lib-common/match-l.cs","lib-common/match-r.cs","lib-common/match.cs","lib-common/max.cs","lib-common/min.cs","lib-common/mod.cs","lib-common/mul.cs","lib-common/mute.cs","lib-common/neq.cs","lib-common/nop.cs","lib-common/not.cs","lib-common/obj/obj-keys.cs","lib-common/obj/obj-length.cs","lib-common/obj/obj-merge.cs","lib-common/obj/obj-option.cs","lib-common/obj/obj-order.cs","lib-common/obj/obj-push.cs","lib-common/obj/obj-remove.cs","lib-common/obj/obj-unshift.cs","lib-common/obj/obj-vals.cs","lib-common/obj.cs","lib-common/on.cs","lib-common/or.cs","lib-common/pad-l.cs","lib-common/pad-r.cs","lib-common/paren.cs","lib-common/partial.cs","lib-common/path/path-concat.cs","lib-common/path/path-file.cs","lib-common/path/path-fix.cs","lib-common/path/path-join.cs","lib-common/path/path-split.cs","lib-common/path/path-strip.cs","lib-common/path/path-unfix.cs","lib-common/path/path-up.cs","lib-common/pop.cs","lib-common/prepend.cs","lib-common/profile.cs","lib-common/push.cs","lib-common/put.cs","lib-common/quote.cs","lib-common/random-str.cs","lib-common/random.cs","lib-common/record.cs","lib-common/reject.cs","lib-common/remove.cs","lib-common/repeat.cs","lib-common/replace-rec.cs","lib-common/replace.cs","lib-common/report/report-html.cs","lib-common/report/report-init.cs","lib-common/report/report-log.cs","lib-common/report/report-render.cs","lib-common/report/report-title.cs","lib-common/resolve.cs","lib-common/reverse.cs","lib-common/rgb-init.cs","lib-common/round.cs","lib-common/salt.cs","lib-common/same.cs","lib-common/scan.cs","lib-common/set.cs","lib-common/shift.cs","lib-common/shuffle.cs","lib-common/silent.cs","lib-common/sleep.cs","lib-common/slice-l.cs","lib-common/slice-r.cs","lib-common/slice.cs","lib-common/sort.cs","lib-common/space.cs","lib-common/split.cs","lib-common/squote.cs","lib-common/stop.cs","lib-common/str-indent.cs","lib-common/strip-l.cs","lib-common/strip-r.cs","lib-common/sub.cs","lib-common/tail.cs","lib-common/task-dump.cs","lib-common/task-run.cs","lib-common/tbl/tbl-column.cs","lib-common/tbl/tbl-columns.cs","lib-common/tbl/tbl-index.cs","lib-common/tbl/tbl-init.cs","lib-common/tbl/tbl-pad-l.cs","lib-common/tbl/tbl-remove-column.cs","lib-common/tbl/tbl-rename-column.cs","lib-common/tbl/tbl-render.cs","lib-common/tbl/tbl-sort.cs","lib-common/time/time-delay.cs","lib-common/time/time-get.cs","lib-common/time/time-hn.cs","lib-common/time/time-interval.cs","lib-common/time/time-now.cs","lib-common/time/time-str.cs","lib-common/time/time-timeout.cs","lib-common/to/to-base36.cs","lib-common/to/to-dump.cs","lib-common/to/to-fixed.cs","lib-common/to/to-hex.cs","lib-common/to/to-i.cs","lib-common/to/to-int.cs","lib-common/to/to-json.cs","lib-common/to/to-lit.cs","lib-common/to/to-lower.cs","lib-common/to/to-num.cs","lib-common/to/to-str.cs","lib-common/to/to-tbl.cs","lib-common/to/to-uint.cs","lib-common/to/to-upper.cs","lib-common/trace.cs","lib-common/trim-l.cs","lib-common/trim-r.cs","lib-common/trim.cs","lib-common/trunc.cs","lib-common/tty-width.cs","lib-common/txt/txt-compact.cs","lib-common/txt/txt-cut.cs","lib-common/txt/txt-indent.cs","lib-common/txt/txt-inline.cs","lib-common/txt/txt-prepend.cs","lib-common/txt/txt-unindent.cs","lib-common/unaccent.cs","lib-common/unshift.cs","lib-common/unwrap.cs","lib-common/url-beautify.cs","lib-common/url-get.cs","lib-common/url-parse.cs","lib-common/wait.cs","lib-common/xor.cs","lib-node/app-list.cs","lib-node/beep.cs","lib-node/deinit-node.cs","lib-node/digest.cs","lib-node/dir/dir-call.cs","lib-node/dir/dir-change.cs","lib-node/dir/dir-current.cs","lib-node/dir/dir-empty.cs","lib-node/dir/dir-find.cs","lib-node/dir/dir-load.cs","lib-node/dir/dir-make.cs","lib-node/dir/dir-read.cs","lib-node/dir/dir-reset.cs","lib-node/dir/dir-size.cs","lib-node/file/file-append.cs","lib-node/file/file-load.cs","lib-node/file/file-read.cs","lib-node/file/file-save.cs","lib-node/file/file-size.cs","lib-node/file/file-write.cs","lib-node/fs/fs-change-mode.cs","lib-node/fs/fs-copy.cs","lib-node/fs/fs-created.cs","lib-node/fs/fs-mode.cs","lib-node/fs/fs-modified.cs","lib-node/fs/fs-remove.cs","lib-node/http-get.cs","lib-node/init-node.cs","lib-node/inspect.cs","lib-node/ip/ip-host.cs","lib-node/ip/ip-list.cs","lib-node/ip/ip-v4.cs","lib-node/ip/ip-v6.cs","lib-node/is/is-batch.cs","lib-node/is/is-color.cs","lib-node/is/is-dir.cs","lib-node/is/is-file.cs","lib-node/is/is-fs.cs","lib-node/is/is-interactive.cs","lib-node/is/is-readable.cs","lib-node/is/is-symbolic-link.cs","lib-node/no-umask.cs","lib-node/node-argv.cs","lib-node/node-context.cs","lib-node/open.cs","lib-node/os/os-capture.cs","lib-node/os/os-detach.cs","lib-node/os/os-execute.cs","lib-node/os/os-home.cs","lib-node/os/os-host.cs","lib-node/os/os-log.cs","lib-node/os/os-prompt.cs","lib-node/os/os-ps.cs","lib-node/os/os-run.cs","lib-node/os/os-shell.cs","lib-node/os/os-system.cs","lib-node/os/os-user.cs","lib-node/path/path-base.cs","lib-node/path/path-dir.cs","lib-node/path/path-ext.cs","lib-node/path/path-real.cs","lib-node/path/path-tmp.cs","lib-node/path-writable.cs","lib-node/report-mail.cs","lib-node/sigint.cs","lib-node/to-base64.cs","lib-shell/ansi/ansi-encode.cs","lib-shell/ansi/ansi-get-attrs.cs","lib-shell/ansi/ansi-get-colors.cs","lib-shell/ansi/ansi-head.cs","lib-shell/ansi/ansi-init.cs","lib-shell/ansi/ansi-rgb.cs","lib-shell/ansi/ansi-strip.cs","lib-shell/app-token.cs","lib-shell/archive-find.cs","lib-shell/group-list.cs","lib-shell/init-shell.cs","lib-shell/is-local.cs","lib-shell/is-remote.cs","lib-shell/is-root.cs","lib-shell/mail-debug.cs","lib-shell/mail.cs","lib-shell/mime-type.cs","lib-shell/mnt-clean.cs","lib-shell/mnt-unmount.cs","lib-shell/password.cs","lib-shell/ssh/ssh-execute.cs","lib-shell/ssh/ssh-pass.cs","lib-shell/ssh/ssh-system.cs","lib-shell/sudo/sudo-dir-make.cs","lib-shell/sudo/sudo-file-append.cs","lib-shell/sudo/sudo-file-read.cs","lib-shell/sudo/sudo-file-save.cs","lib-shell/sudo/sudo-file-write.cs","lib-shell/sudo/sudo-fs-change-mode.cs","lib-shell/sudo/sudo-fs-remove.cs","lib-shell/sudo/sudo-is-dir.cs","lib-shell/sudo/sudo-is-file.cs","lib-shell/sudo/sudo-path-writable.cs","lib-shell/sudo/sudo.cs","lib-shell/user-created.cs","lib-shell/user-list.cs","lib-www/dom/dom-entities.cs","lib-www/dom/dom-escape.cs","lib-www/dom/dom-special-chars.cs","lib-www/dom/dom-unescape.cs","lib-www/h/h-a.cs","lib-www/h/h-attr.cs","lib-www/h/h-b.cs","lib-www/h/h-back-color.cs","lib-www/h/h-body.cs","lib-www/h/h-bold.cs","lib-www/h/h-border.cs","lib-www/h/h-br.cs","lib-www/h/h-color.cs","lib-www/h/h-decoration.cs","lib-www/h/h-div.cs","lib-www/h/h-float.cs","lib-www/h/h-font-family.cs","lib-www/h/h-font-size.cs","lib-www/h/h-head.cs","lib-www/h/h-href.cs","lib-www/h/h-html.cs","lib-www/h/h-img.cs","lib-www/h/h-init.cs","lib-www/h/h-meta.cs","lib-www/h/h-padding-bottom.cs","lib-www/h/h-padding-left.cs","lib-www/h/h-padding-right.cs","lib-www/h/h-padding-top.cs","lib-www/h/h-padding.cs","lib-www/h/h-pre.cs","lib-www/h/h-push.cs","lib-www/h/h-render.cs","lib-www/h/h-script.cs","lib-www/h/h-spacer.cs","lib-www/h/h-span.cs","lib-www/h/h-src.cs","lib-www/h/h-style.cs","lib-www/h/h-table.cs","lib-www/h/h-tbl.cs","lib-www/h/h-td.cs","lib-www/h/h-text.cs","lib-www/h/h-th.cs","lib-www/h/h-title.cs","lib-www/h/h-tr.cs","lib-www/h/h-wbr.cs","lib-www/h/h-width.cs","lib-www/init-www.cs","lib-www/is-link.cs","lib-www/link-dom.cs","lib-www/link-h.cs","lib-www/link-init.cs","lib-org/config-append.cs","lib-org/config-clean.cs","lib-org/init-org.cs","lib-org/org/org-group-create-users.cs","lib-org/org/org-user-install.cs","lib-org/org/org-user-load.cs","lib-org/org/org-user-remove-unused.cs","lib-org/org/org-user-remove.cs","lib-org/org/org-user-save.cs","lib-org/org/org-user-uninstall.cs","lib-org/org/org-user-update.cs","lib-org/ps1-encode.cs","lib-compiler/app-home.cs","lib-compiler/app-make.cs","lib-compiler/ast/ast-assign.cs","lib-compiler/ast/ast-begin.cs","lib-compiler/ast/ast-brk.cs","lib-compiler/ast/ast-call.cs","lib-compiler/ast/ast-catch.cs","lib-compiler/ast/ast-check.cs","lib-compiler/ast/ast-cont.cs","lib-compiler/ast/ast-else.cs","lib-compiler/ast/ast-elseif.cs","lib-compiler/ast/ast-fn.cs","lib-compiler/ast/ast-forin.cs","lib-compiler/ast/ast-fornum.cs","lib-compiler/ast/ast-forof.cs","lib-compiler/ast/ast-gn.cs","lib-compiler/ast/ast-if.cs","lib-compiler/ast/ast-include.cs","lib-compiler/ast/ast-inline.cs","lib-compiler/ast/ast-let.cs","lib-compiler/ast/ast-ret.cs","lib-compiler/ast/ast-run.cs","lib-compiler/ast/ast-throw.cs","lib-compiler/ast/ast-try.cs","lib-compiler/ast/ast-var.cs","lib-compiler/ast/ast-while.cs","lib-compiler/ast/ast-yield.cs","lib-compiler/ast/call-ast-block-top.cs","lib-compiler/ast/call-ast-block.cs","lib-compiler/ast/call-ast-declare.cs","lib-compiler/ast/call-ast-for.cs","lib-compiler/ast/call-ast-if.cs","lib-compiler/ast/call-ast-xn.cs","lib-compiler/cpl-block.cs","lib-compiler/cpl-check-fn.cs","lib-compiler/cpl-check-syntax.cs","lib-compiler/cpl-check.cs","lib-compiler/cpl-compile.cs","lib-compiler/cpl-deinit.cs","lib-compiler/cpl-dump.cs","lib-compiler/cpl-fold.cs","lib-compiler/cpl-for.cs","lib-compiler/cpl-generate.cs","lib-compiler/cpl-include.cs","lib-compiler/cpl-init.cs","lib-compiler/cpl-is-call.cs","lib-compiler/cpl-is-leaf.cs","lib-compiler/cpl-load.cs","lib-compiler/cpl-log-error.cs","lib-compiler/cpl-scan.cs","lib-compiler/cpl-scope.cs","lib-compiler/cpl-source-map.cs","lib-compiler/cpl-tokenize.cs","lib-compiler/cpl-translate.cs","lib-compiler/cpl-uncomment.cs","lib-compiler/expr/call-expr-arg.cs","lib-compiler/expr/call-expr-right.cs","lib-compiler/expr/call-expr-rvalue.cs","lib-compiler/expr/expr-arr.cs","lib-compiler/expr/expr-call.cs","lib-compiler/expr/expr-iif.cs","lib-compiler/expr/expr-in.cs","lib-compiler/expr/expr-inline.cs","lib-compiler/expr/expr-instanceof.cs","lib-compiler/expr/expr-new.cs","lib-compiler/expr/expr-not.cs","lib-compiler/expr/expr-obj.cs","lib-compiler/expr/expr-run.cs","lib-compiler/expr/expr-value.cs","app-make/init.cs","fn abs x:num"," ret Math.abs x","end","fn add x:num y:num z:etc"," let r inline \"x+y\"",""," if is_full z","  ret add r z:etc"," ret r","fn and x:bool y:bool z:etc"," let r inline \"x&&y\"","  ret and r z:etc","fn angle x:str"," ret concat \"<\" x \">\"","fn append x:arr y:arr"," for y","  push x v"," end","fn arr x:etc"," ret inline \"[...x]\"","fn asc x:char"," ret x.charCodeAt 0","fn at x:vec y:uint z"," let n dec x.length"," check between y 0 n"," if is_undef z","  ret inline \"x[y]\""," inline \"x[y]=z\"","fn back x:vec y z"," if is_undef y","  ret back x 0"," check is_uint y"," check lt y x.length"," let n sub x.length y"," let n dec n","  ret at x n"," at x n z","fn base36_decode x:str"," var r \"\""," let a explode x"," while is_full a","  let a2 slice_l a 4","  shift a 4","  let s implode a2","  let n Number.parseInt s 36","  let range mul 256 256","  check is_uint n","  check lte n range","  let c chr n","  assign r concat r c","fn base36_encode x:str"," for x","  let s asc v","  let s to_base36 s","  let s pad_l s \"0\" 4","  assign r concat r s","fn between x:num y:num z:num"," check gte z y"," if lt x y","  ret false"," if gt x z"," ret true","fn brace x:str"," ret concat \"{\" x \"}\"","fn bracket x:str"," ret concat \"[\" x \"]\"","fn byte_size x:uint"," if lt x kb","  let s to_fixed x","  ret concat s \"b\""," if lt x mb","  let s div x kb","  let s trunc s","  let s to_fixed s","  ret concat s \"Kb\""," if lt x gb","  let s div x mb","  ret concat s \"Mb\""," if lt x tb","  let s div x gb","  ret concat s \"Gb\""," let s div x tb"," let s trunc s"," let s to_fixed s"," ret concat s \"Tb\"","fn capture x:fn y:etc"," let o record x y:etc"," ret o.output","fn char_escape x:char"," let r json_encode x"," let r strip_l r \"\\\"\""," let r strip_r r \"\\\"\"","fn check_arg is arg name type"," let test is arg"," if is_true test","  ret"," let s_name to_lit name"," let s_type to_lit type"," let s_given get_type arg"," let s_given to_lit s_given"," let s_given space s_given \"given\""," let s_given paren s_given"," let message space \"Expecting argument\" s_name \"to be of type\" s_type s_given"," let message concat message \".\""," stop message","inline \"function check_arity(operator,length,arity)\"","inline \"{\"","inline \" return\"","inline \" if(operator===\\\"same\\\")\"","inline \" {\"","inline \"  if(length===arity)\"","inline \"   return\"","inline \" }\"","inline \"\"","inline \" if(operator===\\\"gte\\\")\"","inline \"  if(length>=arity)\"","inline \" const message=\\\"Expecting \\\"+arity+\\\" argument(s) (\\\"+length+\\\" given)\\\"\"","inline \" throw new Error(message)\"","inline \"}\"","fn check is args:etc"," if is_true is","  if is_empty args","   ret"," elseif is_fn is","  let b is args:etc","  if is_true b","  let name is.name","  if match_l name \"is_\"","   let arg front args","   let name strip_l name \"is_\"","   let s_name to_lit name","   let s_given get_type arg","   let s_given to_lit s_given","   let s_given space s_given \"given\"","   let s_given paren s_given","   let message space \"Expecting a value of type\" s_name s_given","   let message concat message \".\"","   stop message","  elseif same name \"not\"","   let is front args","   let name strip_l is.name \"is_\"","   let s_name space \"not\" name","   let s_name to_lit s_name","   let message space \"Check failed calling\" s_name","  else","  end"," stop \"check\"","fn chr x:ushort"," ret String.fromCharCode x","fn clear x:arr"," x.splice 0","fn clone x"," if is_undef x","  check same arguments.length 1"," let history arr"," fn visit x","  if is_container x","   push history x","  if is_arr x","   let r arr","   for x","    if contain history v","     push r null","     cont","    end","    let v visit v","    push r v","   end","   ret r","  elseif is_obj x","   let r obj","   forin x","    let v get x k","     put r k null","    put r k v","   ret value x"," ret visit x","fn cmp x:def y:def"," if same x y","  ret 0"," if is_arr x","  if is_arr y","   fornum min x.length y.length","    let xval at x i","    let yval at y i","    let n cmp xval yval","    if different n 0","     ret n","   ret cmp x.length y.length"," if is_obj x","  if is_obj y","   let xkeys obj_keys x","   let ykeys obj_keys y","   let xvals obj_vals x","   let yvals obj_vals y","   fornum min xkeys.length ykeys.length","    let xkey at xkeys i","    let ykey at ykeys i","    let n cmp xkey ykey","    let xval at xvals i","    let yval at yvals i","   ret cmp xkeys.length ykeys.length"," if inline \"x>y\"","  ret 1"," if inline \"x<y\"","  ret -1"," ret 0","fn collate x:arr"," fn is_delimited x","  if not is_str x","   ret false","  if same x \"_\"","  if is_punct x","   ret true","  if is_space x"," let a arr","  if is_empty a","   push a v","   cont","  let left back a","  let left back left","  let right front v","  if is_delimited left","  elseif is_delimited right","   push a right","  let s concat left right","  drop a","  push a s"," ret join a \" \"","fn concat x:etc"," ret implode x","fn contain x:composite y","  check same arguments.length 2"," if is_str x","  check is_str y","  if is_empty y","  ret x.includes y"," elseif is_arr x"," elseif is_obj x","  forin x","   let v get x k","   if same v y","    ret true"," else","  stop","fn count x:arr y:def"," var r 0","  if same v y","   assign r inc r","fn crc x:str"," for a","  for s","   let n asc v","   assign r add r n","fn cut_l x:str y:uint"," if lte x.length y","  ret x"," let length sub y 3"," let s slice_r x length"," let a explode s"," while true","  let c front a","  if is_punct c","   shift a","  elseif is_space c","   brk"," let r implode a"," let r concat \"...\" r","fn cut_r x:str y:uint"," check is_str x"," let ellipsis \"...\""," let length sub y ellipsis.length"," let s slice_l x length","  let c back a","   drop a"," let r concat r ellipsis","fn date_decode x:str"," let r new Date x"," let r r.getTime"," let r div r 1000"," let r trunc r","fn date_str x","  let n time_get","  ret date_str n"," check is_num x"," let n mul x 1000"," let o new Date n"," let y o.getFullYear"," let m o.getMonth"," let m inc m"," let m pad_l m \"0\" 2"," let d o.getDate"," let d pad_l d \"0\" 2"," ret concat y \"/\" m \"/\" d","fn dbg_backtrace stack map"," if is_undef stack","  let e new Error \"backtrace\"","  ret dbg_backtrace e.stack map"," check is_str stack"," if is_undef map","  let map dbg_source_map","  ret dbg_backtrace stack map"," check is_obj map"," let r tbl_init"," let stack trim stack"," let stack split stack"," let source map.source"," for stack","  if is_node","   if not contain v map.script","    cont","  let s trim v","  let s replace s \"@\" \" \"","  let a split s \" \"","  let s front a","  if same s \"at\"","  var fn shift a","  if is_empty fn","   assign fn \"anonymous\"","  if not is_noun fn","  let a back a","  let a split a \":\"","  if not is_many a","  let njs back a 1","  let njs to_uint njs","  var index dec njs","  if gte index source.length","  let location at source index","  if is_null location","  let js trim location.js","  let cs trim location.cs","  let path location.path","  let ncs location.index","  let ncs inc location.index","  let o obj fn njs js path ncs cs","  push r o","fn dbg_callstack stack map","  let e new Error \"callstack\"","  ret dbg_callstack e.stack"," let r dbg_backtrace stack map"," while is_full r","  let frame front r","  let fn frame.fn","  if same fn \"throw\"","  elseif same fn \"stop\"","  elseif same fn \"check\"","  elseif same fn \"check_arg\"","  elseif same fn \"check_arity\"","  shift r","fn dbg_here"," let t dbg_callstack"," tbl_remove_column t \"njs\""," tbl_remove_column t \"js\""," let t tbl_render t"," log t","fn dbg_origin_xs stack code_type map","  let e new Error \"origin-xs\"","  ret dbg_origin_xs e.stack"," check is_str code_type","  ret dbg_origin_xs stack code_type map"," let frames dbg_callstack stack map"," let frames head frames 5"," for frames","  var t null","  var label null","  if same code_type \"cs\"","   let file get map.files v.path","   let line v.ncs","   assign t dbg_origin file line","   assign label \"stack\"","  elseif same code_type \"js\"","   let line v.njs","   assign t dbg_origin map.source line \"js\"","   assign label \"javacript\"","   stop","  let s tbl_render t","  let s txt_prepend s \"> \"","  let n inc i","  let title concat \"#\" n","  let title space label \"frame\" title \"/\" v.fn","  flower title","  log s","fn dbg_origin source:arr line:uint key depth"," if is_undef key","  ret dbg_origin source line \"\" depth"," check is_str key"," if is_undef depth","  ret dbg_origin source line key 15"," check is_uint depth"," fn find_origin fn:fn source:arr line:uint key:str depth:uint","  var n depth","  var r fn source line key n","  while lte n source.length","   if gte r.length depth","    brk","   assign n inc n","   assign r fn source line key n","   let end add line r.length","   if gte end source.length","  ret r"," fn origin source:arr line:uint key:str depth:uint","  let r arr","  let a arr","  let n div depth 2","  let n trunc n","  var n sub line n","  let length min source.length depth","  let nup add n length","  if lt n 1","   assign n 1","  elseif gte nup source.length","   assign n sub source.length length","   if lt n 1","    assign n 1","  fornum length","   let n add n i","   var p \" \"","   if same n line","    assign p \">\"","   let index dec n","   var code at source index","   if is_empty key","    check is_str code","   else","    assign code get code key","   let o obj n p code","   push a o","  let a2 arr","  for a","   push a2 v.code","  let s join a2","  let s txt_unindent s","  let a3 split s","  for a3","   let o at a i","   assign o.code v","   if is_empty v.code","   push r v"," fn origin_center source:arr line:uint key:str depth:uint","  let a origin source line key depth","  ret center a"," fn center x:arr","  var middle get_position x","  var range middle","  let length mul range 2","  let length inc length","  if gt length x.length","   assign range sub x.length middle","   assign range dec range","  let ybefore sub middle range","  let yafter inc middle","  let before slice x ybefore range","  let center at x middle","  let after slice x yafter range","  let r arr before:etc center after:etc"," fn get_position x:arr","  for x","   if same v.p \">\"","    ret i"," let centered find_origin origin_center source line key depth"," if same centered.length depth","  ret centered"," ret find_origin origin source line key depth","fn dbg_source_map"," let lines_js split source"," let paths arr"," for relatives","  let path at pool v","  push paths path"," let files obj"," forin contents","  let content get contents k","  let n to_uint k","  let path at pool n","  let lines arr","  for content","   let s at pool v","   push lines s","  put files path lines"," let source arr"," if is_node"," elseif is_browser","  fornum 8","   push source null"," for paths","  if gte i paths.length","  let path at paths i","  let index at indices i","  var line_js i","  elseif is_browser","   assign line_js add line_js 5","  let js at lines_js line_js","  let cs get files path","  let cs at cs index","  let o obj path index js cs","  push source o"," var script null","  assign script global.script"," ret obj script files source","fn dbg_source x"," fn get_source","   ret file_load script","  check is_browser","  let s to_str html.outerHTML","  let lines split s","  for lines","   let s trim v","   if not match_l s \"<\"","   at lines i \"\"","  while is_full lines","   let s back lines","   let s trim s","   if is_empty s","   elseif match_l s \"<\"","   drop lines","  let lines txt_unindent lines","  ret join lines","  assign r get_source","  assign r file_load x"," let r trim_r r"," let r split r","  let s pop r","  if match_l s \"const app=\""," let r join r","fn dec x:num"," ret sub x 1","fn dedup x:arr"," let r arr","  if not contain r v","fn deinit_common"," for tasks","  let name v.name","  let o obj name","  let s obj_option o","  log \"abort\" s","  v.iterator.return"," clear tasks"," if gte verbose 0","  let profile time_now","  let profile time_delay profile","  let o obj profile","  log app s","  deinit_node","  deinit_browser"," assign global.zombie true","fn delimit x:str y","  ret delimit x is_fragment"," check is_fn y","  let right v","  if is_empty r","   push r right","  let left back r","  let fragment concat left right","  if is_fragment fragment","   drop r","   push r fragment","fn different x y"," ret inline \"x!==y\"","fn div x:num y:num z:etc"," check different y 0"," let r inline \"x/y\"","  ret div r z:etc","fn drop x:arr y","  ret drop x 1"," check lte y x.length"," pop x y","fn dump x"," let name fn_args \"dump\""," check is_single name"," let name front name","  let s to_lit x","  log name s","  log name x","fn dup x:container","  ret slice x 0","  let r obj","  obj_merge r x","fn eq x:def y:def"," let n cmp x y"," ret inline \"n===0\"","fn every x:arr y:fn","  if not y v","fn explode x:str","  push r v","fn extract x:arr y:def"," var r false"," let a dup x"," clear x","   assign r true","   push x v","fn fallback_error x:str y:obj z"," var print value log"," let title space \"Fallback\" x"," try"," catch","  assign print value console.log"," let s to_str y.stack"," let s trim_r s"," let s txt_prepend s \"error-in-error> \""," print s"," check is_obj z"," let s to_str z.stack"," let s txt_prepend s \"original-error> \"","fn filter x:arr y:fn"," ret x.filter y","fn find x:composite y:def"," if is_vec x","  ret x.indexOf y","    ret k","fn flower_box x:str"," let n tty_width"," let s repeat \"*\" n"," log s"," flower x","fn flower x","  let s repeat \"*\" n"," let s1 repeat \"*\" n"," let s2 repeat \"*\" 2"," let s2 concat s2 \" \""," let s2 concat s2 x"," let s2 concat s2 s1"," let s2 slice_l s2 n"," log s2","fn fn_args x:str"," for dbg_callstack","  let a split v.cs \" \"","  let n find a x","  if lt n 0","  let index inc n","  ret slice a index"," stop","fn fn_match x:str"," let r obj"," forin fns","  if not match k x","  let v get fns k","  put r k v","fn fn_select x:str"," let pattern concat x \"*\""," let fns fn_match pattern","  let name strip_l k x","  put r name v","fn front x:vec"," check is_full x"," ret at x 0","fn get_type x"," if is_null x","  ret \"null\""," ret typeof x","fn get x:obj y:str z"," if has x y"," if is_def z","  ret z","fn gt x:def y:def"," ret inline \"n>0\"","fn gte x:def y:def"," ret inline \"n>=0\"","fn has x:obj y:str"," ret inline \"y in x\"","fn head x:vec y:uint"," if lt x.length y","  if is_str x","   ret x","  elseif is_arr x","   ret dup x"," ret slice_l x y","fn iif x:bool y:def z:def"," if x","  ret y"," ret z","fn implode x:arr"," ret join x \"\"","fn inc x:num"," ret add x 1","fn init_common"," fn on_tick","  let task shift tasks","  let result task.iterator.next","  if not result.done","   push tasks task","  if is_empty tasks","   deinit_common","  time_timeout on_tick"," fn log_compile","  let compile time_hn compile","  let sloc split source","  let sloc sloc.length","  let o obj compile sloc"," assign global.tasks arr"," assign global.unit \"1.3vw\""," assign global.padding \"0.3vw\""," assign global.border \"0.1vw\""," assign global.font_family \"monospace\""," assign global.font_size unit"," var args arr","  assign args init_node","  init_browser"," assign global.source dbg_source"," let skip arr \"init_common\" \"init_node\" \"init_browser\"","  if contain skip k","  if match k \"init_*\"","   let v get fns k","   v","  log_compile"," if is_fn init","  init args:etc"," elseif is_gn init","  task_run init args:etc"," on_tick","fn insert x:arr y:uint z:etc"," x.splice y 0 z:etc","fn is_access x"," if not is_str x"," if is_empty x"," let a split x \".\""," if is_single a"," ret every a is_identifier","fn is_alnum x","  if same v \"_\"","  elseif is_alpha v","  elseif is_digit v","fn is_alpha x","  if is_lower v","  elseif is_upper v","fn is_arg x"," if is_identifier x","  ret true"," if is_access x"," if is_numeric x"," if is_lit x"," if is_lit_char x"," ret false","fn is_arr x"," ret Array.isArray x","fn is_atom x"," if is_alnum x"," if is_tuple x","fn is_blank x"," if is_space x","fn is_bool x"," let s get_type x"," ret same s \"boolean\"","fn is_browser"," ret has_window","fn is_char x"," ret same x.length 1","fn is_comment x"," if not is_ln x"," ret match_l x \"//\"","fn is_composite x","fn is_container x","fn is_cool x"," if is_num x","fn is_def x"," ret not is_undef x","fn is_digit x","  if not contain digit v","fn is_domain x"," if not is_user x"," let tld pop a"," if not is_alnum tld","  if is_alnum v","  elseif is_lisp v","fn is_empty x","  ret same x.length 0","  let keys obj_keys x","  ret is_empty keys","fn is_false x"," ret same x false","fn is_fn x"," if different s \"function\""," if same x.constructor.name \"GeneratorFunction\"","fn is_fragment x","fn is_full x"," if not is_composite x"," ret not is_empty x","fn is_gn x"," if different x.constructor.name \"GeneratorFunction\"","fn is_identifier x"," let s front x"," if same s \"_\""," elseif is_alpha s","  if not is_alnum v","fn is_indented x"," for split x","  if is_empty v","  let c front v","  if not is_space c","fn is_int x"," ret Number.isInteger x","fn is_ip x"," if is_ip4 x"," if is_ip6 x","fn is_ip4 x"," if different a.length 4","  if not is_digit v","  let n to_uint v","  if gt n 255","fn is_ip6 x"," let a split x \":\""," if lt a.length 3"," if gt a.length 8","  if contain v \"_\"","  if gt v.length 4","fn is_json x","  json_decode x","fn is_key x"," if is_bool x"," if is_ip x","fn is_last x:vec y:uint"," ret same n y","fn is_lisp x"," let a split x \"-\""," ret every a is_alnum","fn is_lit_char x"," if not match_l x \"'\""," if not match_r x \"'\""," let s strip_l x \"'\""," let s strip_r s \"'\""," if is_empty s"," let s concat quote s"," ret is_lit s","fn is_lit x"," if not is_json x"," let v json_decode x"," if not is_str v"," let s json_encode v"," ret same s x","fn is_ln x"," ret not is_txt x","fn is_lower x","  if not contain lower v","fn is_mail x"," let a split x \"@\""," if not is_pair a"," let user shift a"," let domain shift a"," if not is_user user"," if not is_domain domain","fn is_many x"," if not is_vec x"," ret gt x.length 1","fn is_name x","fn is_node"," ret not is_browser","fn is_none x","fn is_noun x","fn is_null x"," ret same x null","fn is_num x"," if Number.isNaN x"," if same x Number.NEGATIVE_INFINITY"," if same x Number.POSITIVE_INFINITY"," ret same s \"number\"","fn is_numeric x"," if not is_num v","fn is_obj x"," ret same s \"object\"","fn is_pair x"," ret same x.length 2","fn is_punct x","  if not contain punct v","fn is_single x","fn is_space x"," let s trim x"," ret is_empty s","fn is_str x"," ret same s \"string\"","fn is_token x"," if is_atom x"," if is_comment x","fn is_trivia x","fn is_true x"," ret same x true","fn is_tuple x","  if is_identifier v","fn is_txt x","  ret fals"," ret contain x lf","fn is_uint x"," if not is_int x"," ret gte x 0","fn is_undef x"," ret same x undefined","fn is_upper x","  if not contain upper v","fn is_url x"," let s to_lower x"," if match_l s \"http://\""," elseif match_l s \"https://\"","  url_parse x","fn is_user x"," for split x \"-\"","  for split v \".\"","   if not is_alnum v","    ret false","fn is_ushort x"," if not is_uint x"," let n mul 256 256"," ret lt x n","fn is_vec x","fn is_word x"," if contain x \" \""," if contain x lf"," if contain x cr","fn is_xn x"," if is_fn x"," if is_gn x","fn is_rgb x"," if not is_uint x.r"," if not is_uint x.g"," if not is_uint x.b","fn join x:arr y","  ret join x lf"," check is_str y"," ret x.join y","fn json_decode x:str"," ret JSON.parse x","fn json_dump x:def"," ret JSON.stringify x null 1","fn json_encode x","  ret \"undefined\""," ret JSON.stringify x","fn log_append x:etc"," fn escape x:str","   if is_alnum v","    push a v","   if is_punct v","   let s char_escape v","   push a s","  ret implode a"," let parts arr","  if is_str v","   let s ansi_strip v","   push parts s","  let s inspect v false","  push parts s"," let pid pad_l process.pid \" \" 6"," let time time_get"," let date date_str time"," let time time_str time true"," let max_line_length mul 10 kb"," let inputs join parts \" \""," let inputs split inputs"," let inputs map inputs head max_line_length"," let inputs map inputs escape"," let lines arr"," if is_empty inputs","  let s space pid date time","  push lines s","  for inputs","   let s space pid date time v"," let content join lines"," let content concat content lf"," if not is_file config_log","  let dir path_dir config_log","  dir_make dir","  file_write config_log content"," let size file_size config_log"," let limit mul 16 1024 1024"," if lt size limit","  file_append config_log content"," let a file_load config_log"," let a split a"," let half div a.length 2"," let half trunc half"," shift a half"," append a lines"," let content join a"," file_write config_log content","fn log x:etc"," fn node_log x:etc","  let parts arr","   if is_str v","    push parts v","   let s inspect v","  let content join parts \" \"","  if is_empty content","   console.log \" \"","   for split content","    let n tty_width","    let line ansi_head v n","    console.log line","  if log_file","   log_append x:etc"," if is_str output","   let s to_dump v","  let s join a \" \"","  let s concat s lf","  let s concat output s","  assign global.output s","  node_log x:etc","  if is_empty x","   console.log x:etc","fn lt x:def y:def"," ret inline \"n<0\"","fn lte x:def y:def"," ret inline \"n<=0\"","fn main"," fn on_load x:obj","  if same document.readyState \"complete\"","   init_common","   assign window.onload null"," var has_window true","  inline \"window\"","  assign has_window false"," if has_window","  assign window.global window","  assign global.has_window true","  assign global.has_window false"," assign global.zombie false"," assign global.start time_get"," assign global.lf \"\\n\""," assign global.cr \"\\r\""," assign global.crlf concat cr lf"," assign global.punct \"!\\\"#$%&'()*+,-./:;<=>?@[\\\\]^`{|}~\""," assign global.digit \"0123456789\""," assign global.lower \"abcdefghijklmnopqrstuvwxyz\""," assign global.upper to_upper lower"," assign global.output null"," assign global.verbose 0"," assign global.minute 60"," assign global.hour mul 60 minute"," assign global.day mul 24 hour"," assign global.week mul 7 day"," assign global.month mul 30 day"," assign global.year mul 12 month"," assign global.kb 1024"," assign global.mb mul kb 1024"," assign global.gb mul mb 1024"," assign global.tb mul gb 1024"," assign global.traces arr","  init_common","  assign window.onload on on_load","fn map x:arr y:fn z:etc","  let v y v z:etc","  check is_def v","fn match_l x:str y:str"," if is_empty y"," if gt y.length x.length"," let s slice_l x y.length"," ret same s y","fn match_r x:str y:str"," let s slice_r x y.length","fn match x:str y:str"," let s replace y \".\" \"\\\\.\""," let s replace s \"*\" \".*\""," let s concat \"^\" s \"$\""," let s new RegExp s"," ret s.test x","fn max x:etc"," ret Math.max x:etc","fn min x:etc"," ret Math.min x:etc","fn mod x:num y:num z:etc"," let r inline \"x%y\"","  ret mod r z:etc","fn mul x:num y:num z:etc"," let r inline \"x*y\"","  ret mul r z:etc","fn mute x:fn y:etc"," ret o.result","fn neq x:def y:def"," ret not eq x y","fn nop","fn not x y:etc","  ret not x"," elseif is_fn x","  let v x y:etc","  ret not v","fn obj_keys x:obj"," ret Object.keys x","fn obj_length x:obj"," let keys obj_keys x"," ret keys.length","fn obj_merge x:obj y:obj"," Object.assign x y","fn obj_option x:obj"," forin x","  let v get x k","  var value v","  if is_key value","   if not is_str value","    assign value to_str value","   assign value to_lit value","  let s concat k \"=\" value","fn obj_order x:obj keys:etc"," for keys","  let value get x v","  put r v value","  if has r k","fn obj_push x:obj key:str val:def","  if same k key"," put r key val","fn obj_remove x:obj key:str","fn obj_unshift x:obj key:str val:def","fn obj_vals x:obj"," ret Object.values x","fn obj"," ret inline \"{}\"","fn on fn:fn args:etc"," fn on_fn x:etc","  if zombie","  ret fn args:etc x:etc"," if zombie"," ret value on_fn","fn or x:bool y:bool z:etc"," let r inline \"x||y\"","  ret or r z:etc","fn pad_l x:cool padding length"," if is_uint x","  let s to_json x","  if is_undef padding","   if is_undef length","    ret pad_l s \"0\" 3","   ret pad_l s \"0\" length","  ret pad_l s padding length"," check is_str padding"," check is_uint length"," ret x.padStart length padding","fn pad_r x:cool padding length","    ret pad_r s \"0\" 3","   ret pad_r s \"0\" length","  ret pad_r s padding length"," ret x.padEnd length padding","fn paren x:str"," ret concat \"(\" x \")\"","fn partial fn:fn args:etc"," fn result x:etc"," ret value result","fn path_concat x:str y:str z:etc"," let x strip_r x \"/\""," let y strip_l y \"/\""," let r concat x \"/\" y","  ret path_concat r z:etc","fn path_file x:str"," let s path_base x"," let a split s \".\"","  ret s"," drop a"," ret join a \".\"","fn path_fix x:str"," if match_r x \"/\""," ret concat x \"/\"","fn path_join x:arr"," ret join x \"/\"","fn path_split x:str"," ret split x \"/\"","fn path_strip x:str"," ret strip_r x \"/\"","fn path_unfix x:str","fn path_up x:str"," let a path_split x"," pop a"," ret path_join a","fn pop x:arr y","  ret pop x 1"," if same y 1","  let r back x","  remove x n 1","  ret value r"," remove x n y","fn prepend x:arr y:arr"," let a dup y"," reverse a","  unshift x v","fn profile x:fn y:etc"," let before time_now"," let r x y:etc"," let after time_now"," let profile sub after before"," let profile to_fixed profile"," let profile concat profile \"s\""," let o obj profile"," let s obj_option o"," log x.name s","fn push x:arr y"," x.push y","fn put x:obj y:str z","  check same arguments.length 3"," set x y z","fn quote x:str"," ret concat \"\\\"\" x \"\\\"\"","fn random_str x:uint alnum"," if is_undef alnum","  ret random_str x true"," check is_bool alnum"," let range mul 26 256"," while lt a.length x","  let n random range","  if alnum","   if is_alnum c","    push a c","   push a c"," ret implode a","fn random x","  ret random Number.MAX_SAFE_INTEGER"," check gte x 0"," let r Math.random"," let r mul r x","  ret trunc r","fn record x:fn y:etc"," check is_null output"," assign global.output \"\""," var result null","  assign result x y:etc"," catch e","  assign global.output null","  throw e"," let s trim_r output"," assign r.result result"," assign r.output s","fn reject x:arr y:fn"," check is_arr x","  if y v","fn remove x:arr y:uint z","  ret remove x y 1"," check is_uint z"," check between y 0 x.length"," let n add y z"," check between n 0 x.length"," x.splice y z","fn repeat x:str y:uint"," ret x.repeat y","fn replace_rec x:str y:str z:str"," var r x"," while contain r y","  assign r replace r y z","fn replace x:vec y:str z:str","  let a split x y","  ret join a z","    push r z","fn report_html report:obj length human"," if is_def length","  check is_uint length"," var txt report_render report human","  assign txt txt_cut txt length"," let html h_html"," let head h_head"," let title h_title report.title"," let body h_body"," h_font_family body font_family"," h_font_size body font_size"," let pre h_pre txt"," h_push body pre"," h_push head title"," h_push html head"," h_push html body"," let s h_render html"," ret s","fn report_init error query map"," if is_str error","  let stack error","  let lines split error","  let message front lines","  let errno null","  let error obj stack message errno","  ret report_init error query map"," check is_obj error"," if is_def query","  check is_obj query"," fn log_browser","  let location to_str location","  var referrer null","  if is_full document.referrer","   let url_referer url_parse document.referrer","   let url_location url_parse location","   if different url_referer.host url_location.host","    assign referrer document.referrer","  let browser browser_get","  let agent navigator.userAgent","  let uptime time_now","  let uptime time_delay uptime","  let o obj location referrer browser agent uptime","  let t to_tbl o"," fn log_server","  let url query.url.href","  let headers query.request.headers","  if has headers \"referrer\"","   assign referrer get headers \"referrer\"","  elseif has headers \"referer\"","   assign referrer get headers \"referer\"","  let remote query.remote","  let o obj url referrer remote uptime"," fn log_trace","  if is_empty traces","  flower \"trace\"","  for traces","   log \">\" v"," fn log_backtrace stack:str map:obj","  let backtrace dbg_backtrace stack map","  if is_empty backtrace","  tbl_remove_column backtrace \"njs\"","  tbl_remove_column backtrace \"js\"","  let backtrace tbl_render backtrace","  let backtrace txt_prepend backtrace \"> \"","  flower \"backtrace\"","  log backtrace"," let stack error.stack"," var message error.message"," let type error.constructor.name"," let type to_lower type"," var title \"\""," let tags arr"," if is_word message","  assign title \"An error has occured\"","  let message strip_r message \".\"","  assign title message"," push tags app"," if same type \"error\""," if same type \"object\"","  push tags type"," if is_browser","  push tags location.hostname"," elseif is_node","  let errno error.errno","  if is_undef errno","  elseif is_null errno","  elseif same errno 0","   let errno concat \"errno=\" errno","   push tags errno","  let host os_host","  push tags host"," var browser \"\""," var server \"\""," let cs capture dbg_origin_xs stack \"cs\" map"," let backtrace capture log_backtrace stack map"," let js capture dbg_origin_xs stack \"js\" map"," var empty true","  assign browser capture log_browser","  assign empty false"," if is_obj query","  assign server capture log_server"," if is_full trace"," if is_full cs"," if is_full backtrace"," if gt verbose 0","  if is_full js","   assign empty false"," if empty","  trace \"No error stack.\""," let trace capture log_trace"," ret obj title tags app message browser server trace cs backtrace js","fn report_log report:obj"," let title report_title report"," flower_box title"," if is_full report.browser","  log report.browser"," if is_full report.server","  log report.server"," if is_full report.trace","  log report.trace"," if is_full report.cs","  log report.cs"," if is_full report.backtrace","  log report.backtrace","  if is_full report.js","   log report.js"," let end space \"end-report\" report.app \"/\" report.message"," flower end","fn report_render report:obj human"," if is_undef human","  ret report_render report true"," fn log_title","  let title report_title report","  flower_box title"," let title capture log_title"," push a title","  push a \"\"","  push a report.browser","  push a report.server","  push a report.trace","  push a report.cs","  push a report.backtrace"," if is_full report.js","  push a report.js"," if human","  push a \"Refresh the page or go to another URL to continue.\""," ret join a","fn report_title report:obj"," fn format_tag x:str","  if is_word x","  ret to_lit x"," let tags map report.tags format_tag"," let tags join tags \" / \""," let tags paren tags"," ret space report.title tags","gn resolve x:obj"," check is_obj x"," var done false"," var error null"," fn on_then x:def","  assign result x","  assign done true"," fn on_catch x","  check is_obj x","  assign error x"," let promise x.then on_then"," promise.catch on_catch"," while not done","  yield"," if is_obj error","  throw error"," ret result","fn reverse x:vec","  let r explode x","  reverse r","  let r implode r","  x.reverse","fn rgb_init r:uint g:uint b:uint"," ret obj r g b","fn round x:num"," ret Math.round x","fn salt x:str y","  ret salt x \"azertyuiop\""," let a1 explode x"," let a2 explode y"," while is_full a1","  if is_empty a2","   let a explode y","   append a2 a","  let c1 shift a1","  let c2 shift a2","  let n1 asc c1","  let n2 asc c2","  let n xor n1 n2","fn same x y"," ret inline \"x===y\"","fn scan x:str reducer delimiter"," if is_undef reducer","  ret scan x is_token"," check is_fn reducer"," if is_undef delimiter","  ret scan x reducer is_fragment"," check is_fn delimiter"," fn group x:arr reducer:fn","  let fragments dup x","  while is_full fragments","   let a reduce fragments reducer","   if is_full a","    let s implode a","    push r s","    shift fragments a.length","    let s shift fragments"," fn reduce x:arr reducer:fn","  check is_fn reducer","  check is_full x","  let r dup x","  while is_full r","   let s implode r","   if reducer s"," let a delimit x delimiter"," ret group a reducer","fn set x:obj y:str z","fn shift x:arr y","  ret shift x 1","  let r front x","  remove x 0 1"," remove x 0 y","fn shuffle x:arr","  let n random a.length","  let v at a n","  remove a n","fn silent x:fn y:etc"," let previous verbose"," assign verbose sub verbose 2"," var r null","  assign r x y:etc","  assign verbose previous"," assign verbose previous","gn sleep x:num"," let start time_now","  let elapsed time_now","  let elapsed sub elapsed start","  if gte elapsed x","fn slice_l x:vec y:uint"," ret slice x 0 y","fn slice_r x:vec y:uint"," ret slice x n y","fn slice x:vec index:uint length"," check lte index x.length"," if is_undef length","  let n sub x.length index","  ret slice x index n"," check lte length x.length"," let n add index length"," check lte n x.length"," let r x.slice index n"," check same r.length length","fn sort x:container y","  if is_undef y","   x.sort","   check is_fn y","   x.sort y","  fn compare x:obj y:obj","   ret cmp x.key y.key","   ret sort x compare","  check is_fn y","   let key k","   let value get x k","   let o obj key value","  sort a y","   let k v.key","   put r v.key v.value","fn space x:etc"," ret join x \" \"","fn split x:str y","  ret split x lf","  ret arr"," ret x.split y","fn squote x:str"," ret concat \"'\" x \"'\"","fn stop x","  ret stop \"stop\""," throw new Error x","fn str_indent x:str"," if is_blank x"," let s trim_l x"," ret sub x.length s.length","fn strip_l x:str y:str"," if match_l x y","  let n sub x.length y.length","  ret slice_r x n"," ret x","fn strip_r x:str y:str"," if match_r x y","  ret slice_l x n","fn sub x:num y:num z:etc"," let r inline \"x-y\"","  ret sub r z:etc","fn tail x:vec y:uint"," ret slice_r x y","fn task_dump","  log \"task\" s","fn task_run x:gn y:etc"," let name x.name"," let iterator x y:etc"," let task obj name iterator"," push tasks task","fn tbl_column x:arr y:str","  let s get v y","  push r s","fn tbl_columns x:arr"," let first front x"," ret obj_keys first","fn tbl_index x:arr","  let v obj_unshift v \"#\" n","fn tbl_init x"," ret arr","fn tbl_pad_l x:arr column:str length","  var length 0","   var cell get v column","   if not is_str cell","    assign cell json_encode cell","   assign length max length cell.length","  ret tbl_pad_l x y length","  let cell get v column","  let cell pad_l cell \" \" length","  set v y cell","fn tbl_remove_column x:arr y:str"," let t dup x"," for t","  let v obj_remove v y","fn tbl_rename_column x:arr y:str z:str","  let row v","  let o obj","  forin row","   let v get row k","   if same k y","    put o z v","   put o k v","  push x o","fn tbl_render x:arr"," fn stringify_tbl x:arr","   let row dup v","   forin v","    let v get row k","    if is_str v","    let s json_encode v","    set row k s","   push r row"," fn pad_column x:arr","   assign length max length v.length","  if is_numeric_column x","    let s pad_l v \" \" length","    let s pad_r v \" \" length"," fn is_numeric_column x","  if not is_arr x","   if same i 0","   if not is_numeric v"," let tbl stringify_tbl x"," let titles tbl_columns tbl"," let columns arr"," for titles","  let title v","  let column tbl_column tbl title","  unshift column title","  let column pad_column column","  push columns column"," var length 0"," for columns","  let column v","  var n 0","  for column","   assign n max n v.length","  assign length add length n"," assign length add length columns.length"," assign length dec length"," let separator repeat \"-\" length"," push a separator"," let header arr","  let s shift v","  push header s"," let s join header \" \""," push a s"," let first front columns"," for first","  let index i","  let line arr","  for columns","   let s at v index","   push line s","  let s join line \" \"","fn tbl_sort x:arr column:str compare"," if is_undef compare","  ret tbl_sort x column cmp"," fn compare_cell x:obj y:obj","  let left get x column","  let right get y column","  ret compare left right"," sort x compare_cell","fn time_delay x:num"," let minute3 mul minute 3"," let hour3 mul hour 3"," let day3 mul day 3"," let month3 mul month 3"," let year3 mul year 3"," if lt x 10","  let n to_fixed x","  ret concat n \"s\""," if lt x minute3","  let n trunc x"," if lt x hour3","  let n div x minute","  ret concat n \"m\""," if lt x day3","  let n div x hour","  ret concat n \"h\""," if lt x month3","  let n div x day","  ret concat n \"d\""," if lt x year3","  let n div x month","  ret concat n \"mo\""," let n div x year"," let n trunc n"," ret concat n \"y\"","fn time_get"," let n Date.now"," ret div n 1000","fn time_hn x:num"," let now time_get"," if same x now","  ret \"now\""," if gt x now","  let n sub x now","  let s time_delay n","  ret concat \"in \" s"," let n sub now x"," let s time_delay n"," ret concat s \" ago\"","fn time_interval x:fn y","  ret time_interval x 0"," let fn on x"," let n mul y 1000"," setInterval fn n","fn time_now"," let n time_get"," ret sub n start","fn time_str x second","  ret time_str n second"," if is_undef second","  ret time_str x false"," let h o.getHours"," let h pad_l h \"0\" 2"," let m o.getMinutes"," let r concat h \"h\" m \"m\""," if not second"," let s o.getSeconds"," let s pad_l s \"0\" 2"," ret concat r s \"s\"","fn time_timeout x:fn y z:etc","  ret time_timeout x 0.01 z:etc"," check is_num y"," let fn on x z:etc"," setTimeout fn n","fn to_base36 x:uint"," ret x.toString 36","fn to_dump x"," let val clone x"," if is_arr val","  if is_empty val","   ret \"arr\"","  push a \"arr\"","  for val","   let sharp concat \"#\" i","   if is_ln s","    let s space \"\" sharp s","    push a s","    let s2 space \"\" sharp","    let s txt_indent s 2","    push a s2","  push a \"end\"","  ret join a"," elseif is_obj val","   ret \"obj\"","  push a \"obj\"","  forin val","   let v get val k","   var key k","   if not is_key key","    assign key to_lit key","    let s space \"\" key s","    let s2 space \"\" key"," elseif is_word val","  ret to_lit val"," elseif is_fn val","  ret space \"fn\" val.name","  ret json_encode val","fn to_fixed x:num y","  ret to_fixed x 2"," let a x.toFixed y"," let a split a \".\""," let integer front a"," var float back a"," let digits explode float"," while is_full digits","  let c back digits","  if different c \"0\"","  drop digits"," if is_empty digits","  ret integer"," assign float implode digits"," ret concat integer \".\" float","fn to_hex x:uint"," ret x.toString 16","fn to_i x:str"," ret Number.parseInt x","fn to_int x:str"," let r to_num x"," check is_int r","fn to_json x:def"," ret json_encode x","fn to_lit x:str","fn to_lower x:str"," ret x.toLowerCase","fn to_num x:str"," let r json_decode x"," check is_num r","fn to_str x:def"," ret x.toString","fn to_tbl x:obj","  let key k","  let value get x k","  let o obj key value","fn to_uint x:str"," let r to_int x"," check is_uint r","fn to_upper x:str"," ret x.toUpperCase","fn trace x:etc"," if is_single x","  let first front x","  if is_str first","   let a split first","   if is_many a","    for a","     trace v","    ret","  log \"trace>\" x:etc"," elseif same verbose 0","   if not is_str v","  push traces s","  if gt traces.length 64","   shift traces","fn trim_l x:str"," ret x.trimStart","fn trim_r x:str"," ret x.trimEnd","fn trim x:str"," ret x.trim","fn trunc x:num"," ret Math.trunc x","fn tty_width","  if is_batch","   ret 140","  let r process.stdout.columns","  check is_uint r","  ret 80","fn txt_compact x","  let a split x","  let a txt_compact a"," let s join x"," let a split s","  let first front a","  let first trim_r first","  if is_empty first","  if not is_empty v","  let last back r","  if is_empty last","fn txt_cut x y","  check is_uint y","  let a txt_cut a y","  let s head v y","fn txt_indent x y","  ret txt_indent x 1","  let a txt_indent a y","  let s trim_r v","  if is_empty s","   push r s","   let indent repeat \" \" y","   let s concat indent s","fn txt_inline x","  let r replace x \"\\n\" \" \"","  let r replace r \"\\r\" \"\"","  let r replace_rec r \"  \" \" \"","  let r trim r"," let s txt_inline s"," ret split s","fn txt_prepend x y","  let a txt_prepend a y","  let s concat y v","fn txt_unindent x","  let a txt_unindent a"," var s join x"," while is_indented s","  for split s","   if is_empty v","   let s slice v 1","  assign s join a","fn unaccent x:str"," let r replace x \"à\" \"a\""," let r replace r \"â\" \"a\""," let r replace r \"ä\" \"a\""," let r replace r \"æ\" \"ae\""," let r replace r \"ç\" \"c\""," let r replace r \"é\" \"e\""," let r replace r \"è\" \"e\""," let r replace r \"ê\" \"e\""," let r replace r \"ë\" \"e\""," let r replace r \"î\" \"i\""," let r replace r \"ï\" \"i\""," let r replace r \"ô\" \"o\""," let r replace r \"ö\" \"o\""," let r replace r \"œ\" \"oe\""," let r replace r \"ù\" \"u\""," let r replace r \"û\" \"u\""," let r replace r \"ü\" \"u\""," let r replace r \"ÿ\" \"y\""," let r replace r \"À\" \"A\""," let r replace r \"Â\" \"A\""," let r replace r \"Ä\" \"A\""," let r replace r \"Æ\" \"AE\""," let r replace r \"Ç\" \"C\""," let r replace r \"É\" \"E\""," let r replace r \"È\" \"E\""," let r replace r \"Ê\" \"E\""," let r replace r \"Ë\" \"E\""," let r replace r \"Î\" \"I\""," let r replace r \"Ï\" \"I\""," let r replace r \"Ô\" \"O\""," let r replace r \"Ö\" \"O\""," let r replace r \"Œ\" \"OE\""," let r replace r \"Ù\" \"U\""," let r replace r \"Û\" \"U\""," let r replace r \"Ü\" \"U\""," let r replace r \"Ÿ\" \"Y\"","fn unshift x:arr y"," x.unshift y","fn unwrap x:str","  ret json_decode x","  ret split x \".\"","  ret split x \":\"","fn url_beautify x:str"," let r strip_l x \"http://\""," let r strip_l r \"https://\""," let r path_unfix r","fn url_get x:etc","  ret http_get x:etc","  ret xhr_get x:etc","fn url_parse x:str"," let url new URL x"," let href url.href"," let protocol strip_r url.protocol \":\""," let user url.username"," let password url.password"," let host url.hostname"," let port url.port"," let path url.pathname"," let hash url.hash"," let args obj"," forof url.searchParams.keys","  var value url.searchParams.get v","  if is_json value","   assign value json_decode value","  put args v value"," ret obj href protocol user password host port path args hash","gn wait","fn xor x:num y:num z:etc"," let r inline \"x^y\"","  ret xor r z:etc","fn app_list"," for dir_read \"src\" true","  let base path_base v","  let a split base \"-\"","  let prefix shift a","  if different prefix \"app\"","  let name join a \"-\"","  push r name","fn beep"," let duration 0.1"," task_run os_detach \"play\" \"-n\" \"synth\" duration \"sine\" 880 \"vol\" 0.5","fn deinit_node"," fn remove_old_files dir:str","  for dir_load dir true","   let modified fs_modified v","   let now time_get","   let age sub now modified","   if lt age week","   var remove false","   if is_dir v","    if dir_empty v","     assign remove true","   elseif is_file v","    assign remove true","    stop","   if remove","    fs_remove v","    let dir dir_current","    let dir path_fix dir","    let path strip_l v dir","    let age time_delay age","    let o obj path age","    let s obj_option o","    trace \"remove\" s"," if dir_empty config_tmp","  fs_remove config_tmp"," let app path_up config_tmp"," if dir_empty app","  fs_remove app"," let n random 16"," if same n 0","  let dir_tmp path_up app","  let dir_log path_up config_log","  remove_old_files dir_tmp","  remove_old_files dir_log"," dir_change cwd","fn digest x:str"," let tmp path_tmp"," file_save tmp x"," let r os_execute \"sha256sum\" \"--binary\" tmp"," fs_remove tmp"," let r split r \" \""," let r front r","fn dir_call x:str y:fn z:etc"," let dir dir_current"," dir_change x","  assign r y z:etc","  dir_change dir"," dir_change dir","fn dir_change x:str"," process.chdir x","fn dir_current"," ret process.cwd","fn dir_empty x:str"," let paths dir_read x true"," ret is_empty paths","fn dir_find x:str y:str"," for dir_load x","  if match base y","fn dir_load x:str with_dirs"," if is_undef with_dirs","  ret dir_load x false"," check is_bool with_dirs"," for dir_read x true","  if is_file v","  elseif is_dir v","   if with_dirs","   let a dir_load v with_dirs","   append r a","fn dir_make x:str"," let recursive true"," let option obj recursive"," no_umask fs.mkdirSync x option","fn dir_read x:str with_dirs","  ret dir_read x false"," let dir path_real x"," let a fs.readdirSync dir"," sort a","  let s path_concat dir v","  if is_file s","  if with_dirs","   if is_dir s","fn dir_reset x:str"," fs_remove x"," dir_make x","fn dir_size x:str","  let n file_size v","  assign r add r n","fn file_append x:str y:str"," no_umask fs.appendFileSync x y","fn file_load x:str"," let r file_read x","fn file_read x:str y","  ret file_read x \"utf8\""," let buffer fs.readFileSync x"," ret buffer.toString y","fn file_save x:str y:str"," if is_file x","  let s file_load x","  if same s y"," let dir path_dir x"," if not is_dir dir"," let content trim_r y"," file_write x content","fn file_size x:str"," let stat fs.statSync x"," ret stat.size","fn file_write x:str y:str"," no_umask fs.writeFileSync x y","fn fs_change_mode x:str y:uint"," fs.chmodSync x y","fn fs_copy x:str y:str","  if is_dir y","   let base path_base x","   let path path_concat y base","   fs_copy x path"," let force true"," let o obj force recursive"," fs.cpSync x y o","fn fs_created x:str"," ret div stat.ctimeMs 1000","fn fs_mode x:str"," ret stat.mode","fn fs_modified x:str"," ret div stat.mtimeMs 1000","fn fs_remove x:str"," fs.rmSync x o","gn http_get url:str with_headers"," if is_undef with_headers","  ret run http_get url false"," var result \"\""," var headers obj"," fn get_module url:str","  let s to_lower url","  if match_l s \"http:\"","   ret http","  elseif match_l s \"https:\"","   ret https"," fn on_request response:obj","  forin response.headers","   var v get response.headers k","   if is_numeric v","    assign v to_num v","   put headers k v","  let on_data on on_data","  let on_end on on_end","  response.on \"data\" on_data","  response.on \"end\" on_end"," fn on_data x:obj","  let s to_str x","  assign result concat result s"," fn on_end"," fn on_error x:obj"," let module get_module url"," let request module.get url on_request"," let on_error on on_error"," request.on \"error\" on_error","  if done","  if is_obj error","   throw error"," if is_json result","  assign result json_decode result"," if with_headers","  ret obj result headers","fn init_node"," fn on_uncaught_exception error:obj message:str","  try","   let report report_init error","   if not contain report.tags message","    unshift report.tags message","   report_log report","   if is_remote","    report_mail report","  catch e","   fallback_error \"on-uncaught-exception\" e error","  assign zombie true","  process.exit 1"," assign global.cp require \"child_process\""," assign global.crypto require \"crypto\""," assign global.fs require \"fs\""," assign global.http require \"http\""," assign global.https require \"https\""," assign global.os require \"os\""," assign global.path require \"path\""," assign global.tls require \"tls\""," assign global.tty require \"tty\""," assign global.util require \"util\""," assign global.color false"," assign global.log_file true"," assign global.binary process.execPath"," assign global.cwd dir_current"," assign global.script at process.argv 1"," assign global.script path_real script"," let home os_home"," assign global.config_mabynogy path_concat home \".config\" \"mabynogy\""," let pid to_str process.pid"," let pid pad_l pid \"0\" 6"," assign global.config_tmp path_concat config_mabynogy \"tmp\" app pid"," dir_make config_tmp"," let base concat app \".txt\""," assign global.config_log path_concat config_mabynogy \"log\" base"," process.on \"uncaughtExceptionMonitor\" on_uncaught_exception"," let r slice process.argv 2"," if extract r \"--verbose\"","  assign verbose inc verbose"," if extract r \"--quiet\"","  assign verbose dec verbose"," if extract r \"--color\"","  assign color true"," if extract r \"--no-log\"","  assign log_file false"," let dir path_dir script","fn inspect x color"," if is_undef color","  let color is_color","  ret inspect x color"," check is_bool color"," let showHidden false"," let depth null"," let colors color"," let maxArrayLength null"," let maxStringLength null"," let o obj showHidden depth colors maxArrayLength maxStringLength"," let s util.inspect x o"," for split s","  let indent str_indent v","  let indent div indent 2","  let indent repeat \" \" indent","  let line trim_l v","  let line concat indent line","  push a line","fn ip_host x:ip"," let timeout 2"," let a silent os_execute \"host\" \"-W\" timeout x"," let first front a"," let first to_lower first"," let last back a"," let last to_lower last"," if contain first \"timed out\"","  ret null"," if contain last \"not found\""," if contain last \"has no ptr record\""," let r split last \" \""," let r back r"," let r strip_r r \".\""," if not is_domain r","fn ip_list"," let s os_execute \"hostname\" \"--all-ip-addresses\""," ret split s \" \"","fn ip_v4"," for ip_list","  if is_ip4 v","   ret v","fn ip_v6","  if is_ip6 v","fn is_batch"," if not is_node"," ret not is_interactive","fn is_color"," if color"," if is_interactive","fn is_dir x"," let throwIfNoEntry false"," let o obj throwIfNoEntry"," let o fs.statSync x o"," if is_undef o"," ret o.isDirectory","fn is_file x"," ret o.isFile","fn is_fs x"," ret is_def o","fn is_interactive"," ret process.stdout.isTTY","fn is_readable x","  var fd null","   assign fd fs.openSync x","  catch","  let n file_size x","  if gt n 0","   let buffer Buffer.alloc 1","   try","    fs.readSync fd buffer","   catch","    fs.closeSync fd","  fs.closeSync fd"," elseif is_dir x","   fs.readdirSync x","fn is_symbolic_link x"," let o fs.lstatSync x o"," ret o.isSymbolicLink","fn no_umask x:fn y:etc"," let mask process.umask 0","  process.umask mask"," process.umask mask","fn node_argv"," ret arr binary \"--trace-uncaught\" \"--trace-deprecation\" \"--expose-gc\"","fn node_context","  push r \"--verbose\""," elseif lt verbose 0","  push r \"--quiet\""," if is_color","  push r \"--color\""," if not log_file","  push r \"--no-log\"","fn open x:str"," os_system \"xdg-open\" x","gn os_capture x:str y:etc"," var closed false"," var status null"," var out \"\""," var err \"\""," var buffer \"\""," fn print x:str","  assign buffer concat buffer x","  if not match_r buffer lf","  let line strip_r buffer lf","  log line","  let s ansi_strip buffer","  assign out concat out s","  assign buffer \"\""," fn on_out x:obj","  print s"," fn on_err x:obj","  let s ansi_strip s","  assign err concat err s"," fn on_close x","  if is_null x","  elseif is_uint x","  assign status x","  assign closed true"," let stdio arr \"inherit\" \"pipe\" \"pipe\""," let option obj stdio"," let child cp.spawn x y option"," check is_obj child"," fn on_sigint x:str","  child.kill x"," let on_sigint sigint on_sigint"," let on_out on on_out"," let on_err on on_err"," let on_close on on_close"," let stdout child.stdout"," let stderr child.stderr"," stdout.on \"data\" on_out"," stderr.on \"data\" on_err"," child.on \"close\" on_close"," while not closed"," if is_full buffer.out","  print lf"," let out trim_r out"," let err trim_r err"," process.removeListener \"SIGINT\" on_sigint"," os_log os_capture status x y:etc"," ret obj status out err","gn os_detach x:str y:etc"," fn on_error error:obj","  flower \"on-error\""," let detached true"," let stdio \"ignore\""," let o obj detached stdio"," let r cp.spawn x y o"," r.on \"error\" on_error"," r.unref"," run sleep 0.1","fn os_execute x:etc"," let o os_run x:etc"," let status o.status"," let out o.out"," let err o.err"," var display false"," if is_full err","  if same status 0","   let a slice_l x 2","   trace a:etc","  let s txt_prepend err \" err> \"","  trace s"," if is_full out","  push a out","  push a err"," let s join a"," ret trim_r s","fn os_home x","  let user os_user","  ret os_home user"," let r path_concat \"/home\" x"," check is_dir r","fn os_host"," ret os.hostname","fn os_log call:xn status:int args:etc"," if same status 0"," var command front args"," var subcommand false"," if is_many args","  if same command \"sudo\"","   assign subcommand true","  elseif same command \"time\""," if subcommand","  let s at args 1","  assign command space command s"," let call replace call.name \"_\" \"-\""," let o obj command status"," trace call s","gn os_prompt x:str y:etc"," let out \"\""," let err \"\""," let buffer obj out err"," fn print key:str str:str","  let s get buffer key","  let s concat s str","  set buffer key s","  if not match_r s lf","  let s strip_r s lf","  let s txt_prepend s key","  set buffer key \"\"","  print \"out\" s","  print \"err\" s"," let child cp.spawn x y","  print \"out\" lf"," if is_full buffer.err","  print \"err\" lf"," os_log os_prompt status x y:etc"," ret status","fn os_ps"," let s os_execute \"ps\" \"aux\""," shift a","  let s replace_rec v \"  \" \" \"","  let pid at a 1","  let pid to_uint pid","  let path at a 10","  let args slice a 11","  let o obj pid path args","fn os_run x:str y:etc"," let maxBuffer mul 1 1024 1024 1024"," let encoding \"utf8\""," let option obj maxBuffer encoding"," let process cp.spawnSync x y option"," let out to_str process.stdout"," let err to_str process.stderr"," let status process.status"," os_log os_run status x y:etc","fn os_shell x:etc"," let command join x \" \""," ret cp.execSync command option","fn os_system x:str y:etc"," let stdio \"inherit\""," let result cp.spawnSync x y option"," let r result.status"," os_log os_system r x y:etc","fn os_user"," if is_root","  let r os_execute \"logname\"","  check is_alnum r"," let o os.userInfo"," ret o.username","fn path_base x:str"," ret path.basename x","fn path_dir x:str"," ret path.dirname x","fn path_ext x:str"," let s path.extname x"," ret strip_l s \".\"","fn path_real x:str"," ret fs.realpathSync x","fn path_tmp x","  ret path_tmp \"tmp.txt\""," let dir path_split x"," pop dir"," let dir path_join dir"," let dir path_concat config_tmp dir"," let dir path_strip dir"," let file path_file x"," let ext path_ext x","  let id random","  let id to_base36 id","  let id head id 6","  var base concat file \"-\" id","  if is_full ext","   assign base concat base \".\" ext","  let r path_concat dir base","  if not is_file r","fn path_writable x:fs"," let path path_real x"," let components path_split path"," while is_full components","  let path path_join components","  if lte path.length 2","  let a_rw 438","  let a_rwx 511","  let mode fs_mode path","  if is_file path","   let bits inline \"mode & a_rw\"","   if same bits a_rw","    fs_change_mode path a_rw","  elseif is_dir path","   let bits inline \"mode & a_rwx\"","   if same bits a_rwx","    fs_change_mode path a_rwx","  drop components","fn report_mail report:obj"," let html report_html report 65 false"," mail author report.title html","fn sigint callback:fn"," fn on_sigint x:str n:uint","  let pid concat \"pid=\" process.pid","  let signal concat \"signal=\" x","  let n concat \"n=\" n","  log app pid signal n","  callback x"," let on_sigint on on_sigint"," process.once \"SIGINT\" on_sigint"," ret value on_sigint","fn to_base64 x:str"," let buffer Buffer.from x"," let r buffer.toString \"base64\"","fn ansi_encode str:str args:etc"," let ansi ansi_init args:etc"," ret concat ansi.escape \"[\" ansi.attr \";\" ansi.fore \";\" ansi.back \"m\" str ansi.escape \"[0m\"","fn ansi_get_attrs"," assign r.normal 0"," assign r.bold 1"," assign r.dim 2"," assign r.underline 4"," assign r.blink 5"," assign r.reverse 7","fn ansi_get_colors"," let list arr"," push list \"default 39 49\""," push list \"black 30 40\""," push list \"red 31 41\""," push list \"green 32 42\""," push list \"yellow 33 43\""," push list \"blue 34 44\""," push list \"magenta 35 45\""," push list \"cyan 36 46\""," push list \"gray 37 47\""," push list \"white 97 107\""," for list","  let a split v \" \"","  let color shift a","  let fore shift a","  let fore to_uint fore","  let back shift a","  let back to_uint back","  let entry obj fore back","  put r color entry","fn ansi_head x:str length:uint"," let escape chr 27"," let at asc \"@\""," let tilde asc \"~\""," var visible 0"," var control 0","  if gte visible length","  let c1 shift a","  if different c1 escape","   assign buffer concat buffer c1","   assign visible inc visible","   let s char_escape c1","   assign buffer concat buffer s","   assign visible add visible s.length","  let c2 shift a","  var malformed false","  if different c2 \"[\"","   assign malformed true","  if malformed","   assign buffer concat buffer c2","   assign visible add visible s.length 1","  var body \"\"","  var closed false","  while is_full a","   let c3 shift a","   let n asc c3","   assign body concat body c3","   if between n at tilde","    assign closed true","  if not closed","   assign buffer concat buffer body","   assign visible add visible s.length 1 body.length","  assign buffer concat buffer c1 c2 body","  assign control add control 2 body.length"," let length min visible length"," let length add length control"," let r slice_l buffer length"," if gt control 0","  ret concat r escape \"[0m\"","fn ansi_init fore back attr"," if is_undef fore","  ret ansi_init \"black\" back attr"," if is_undef back","  ret ansi_init fore \"white\" attr"," if is_undef attr","  ret ansi_init fore back \"normal\""," fn get_fore x:def","   let colors ansi_get_colors","   let n get colors x","   let n n.fore","   ret to_str n","  elseif is_rgb x","   let n ansi_rgb x","   ret concat \"38;5;\" n"," fn get_back x:def","   let n n.back","   ret concat \"48;5;\" n"," fn get_attr x","  check is_str x","  let attrs ansi_get_attrs","  ret get attrs x"," let fore get_fore fore"," let back get_back back"," let attr get_attr attr"," ret obj escape fore back attr","fn ansi_rgb x:obj"," let r mul x.r 36"," let g mul x.g 6"," let b x.b"," ret add 16 r g b","fn ansi_strip x:str"," ret util.stripVTControlCharacters x","fn app_token x:str"," let base concat \".\" x"," let path_cwd base"," let path_home path_concat home base"," let path_common path_concat common base"," var path null"," if is_file path_cwd","  assign path path_cwd"," elseif is_file path_home","  assign path path_home"," elseif is_file path_common","  assign path path_common"," let r file_load path"," let r base36_decode r"," let r salt r","fn archive_find x:str"," let date date_str"," let date replace date \"/\" \"-\""," let base concat file \"-\" date \".\" ext"," let path path_concat dir base"," if not is_file path","  ret path"," var n 1","  let digit pad_l n","  let base concat file \"-\" date \"-\" digit \".\" ext","  let path path_concat dir base","fn group_list"," let users user_list false"," fn find_users gid:uint","  forin users","   let v get users k","   if same v.gid gid","    push r v.name"," let lines file_load \"/etc/group\""," let lines split lines"," for lines","  let fields split v \":\"","  let name shift fields","  let password shift fields","  let gid shift fields","  let gid to_uint gid","  let users shift fields","  let users split users \",\"","  check is_empty fields","  let a find_users gid","  append users a","  let users dedup users","  sort users","  let o obj gid name users","  put r name o","fn init_shell","fn is_local"," let host os_host"," ret same host \"castle\"","fn is_remote"," ret not is_local","fn is_root"," ret same o.username \"root\"","fn mail_debug subject:str data:obj"," let data to_tbl data"," let table h_tbl data"," h_push body table"," let html h_render html"," mail author subject html","fn mail to:str subject:str body:str from paths:etc"," if is_undef from","  ret mail to subject body admin paths:etc"," fn single_part to:str subject:str body:str from:str","  let body quoted_printable body","  let s concat \"from:\" from","  let s concat \"to:\" to","  let s concat \"subject:\" subject","  push a \"mime-version: 1.0\"","  push a \"content-type: text/html;charset=utf-8\"","  push a \"content-transfer-encoding: quoted-printable\"","  push a body","  ret join a crlf"," fn multi_part to:str subject:str body:str from:str paths:etc","  let boundary get_boundary body","  let dash_boundary concat \"--\" boundary","  let end_boundary concat dash_boundary \"--\"","  let s quote boundary","  let s concat \"content-type: multipart/related; boundary=\" s","  push a dash_boundary","  push a \"content-type: text/html; charset=utf-8\"","  for paths","   let base path_base v","   let file path_file v","   let mime mime_type v","   let content file_read v \"base64\"","   let content chunk_76 content","   push a dash_boundary","   let s space \"content-type:\" mime","   push a \"content-transfer-encoding: base64\"","   let s2 angle file","   let s concat \"content-id: \" s2","   let s2 quote base","   let s concat \"content-disposition: inline; filename=\" s2","   push a \"\"","   push a content","  push a end_boundary"," fn config","  let token app_token \"mabynogy\"","  push a \"account gmail\"","  push a \"host smtp.gmail.com\"","  push a \"port 587\"","  push a \"protocol smtp\"","  push a \"auth on\"","  let s space \"from\" mailer","  let s space \"user\" mailer","  let s space \"password\" token","  push a \"tls on\"","  push a \"tls_starttls on\"","  push a \"tls_trust_file /etc/ssl/certs/ca-certificates.crt\"","  push a \"account default: gmail\""," fn quoted_printable x:str","  let path path_tmp \"qp.txt\"","  file_save path x","  let r os_execute \"python3\" \"-m\" \"quopri\" path","  fs_remove path"," fn chunk_76 x:str","  var input x","  let output arr","  while is_full input","   let s head input 76","   assign input slice input s.length","   push output s","  ret join output crlf"," fn get_boundary body:str","  while true","   let r random_str 8","   if not contain body r","    ret r"," let config_content config"," var body_content null"," if is_full paths","  assign body_content multi_part to subject body from paths:etc","  assign body_content single_part to subject body from"," let config_path path_tmp \"msmtp.txt\""," let body_path path_tmp \"body.txt\""," file_save config_path config_content"," file_save body_path body_content"," let option_file concat \"--file=\" config_path"," fs_change_mode config_path 384"," let s os_shell \"msmtp\" \"--debug\" option_file \"--read-recipients\" \"<\" body_path"," let s txt_prepend s \" > \""," trace \"msmtp\""," trace s"," fs_remove config_path"," fs_remove body_path","fn mime_type path:file"," let r os_execute \"file\" \"--mime\" \"--brief\" path"," let r strip_r r \";\"","fn mnt_clean x:str"," if is_readable x","  mnt_unmount x","  fs_remove x","fn mnt_unmount x"," ret os_execute \"fusermount\" \"-u\" x","fn password alnum","  ret password false"," fn make_password","  fornum 10","   let s random_char"," let special \"_-?\""," fn random_char","  let chars arr","   let a1 explode digit","   let a2 explode lower","   append chars a1","   append chars a2","   let a1 explode special","   let a2 explode digit","   let a3 explode lower","   let a4 explode upper","   append chars a3","   append chars a4","  let n random chars.length","  ret at chars n"," fn is_valid x","   ret is_alnum x","  var special false","  var alpha false","  var digit false","  var upper false","  var lower false","   if is_special v","    assign special true","   if is_alpha v","    assign alpha true","   if is_digit v","    assign digit true","   if is_upper v","    assign upper true","   if is_lower v","    assign lower true","  if not special","  if not alpha","  if not digit","  if not upper","  if not lower"," fn is_special x","   if not contain special v","  let r make_password","  if is_valid r","gn ssh_execute x:etc"," ret run ssh_pass x:etc","gn ssh_pass x:etc"," let args dup x"," let first shift args"," if is_str first","  ret run ssh_pass os_execute x:etc"," let arguments arr \"sshpass\" \"-p\" args:etc"," if is_fn first","  ret first arguments:etc"," elseif is_gn first","  ret run first arguments:etc","gn ssh_system x:str y:etc"," let r run ssh_pass x y:etc"," let a split r"," if is_full a","  log y:etc","  let a txt_prepend a \" > \"","  let s join a","fn sudo_dir_make path:str"," check not is_dir path"," sudo \"mkdir\" \"--parents\" path"," sudo_path_writable path","fn sudo_file_append path:str data:str"," let content file_read path"," let content concat content data"," sudo_file_save path content","fn sudo_file_read path:str"," let result sudo os_run \"cat\" path"," check same result.status 0"," check is_empty result.err"," ret result.out","fn sudo_file_save path:str data:str"," let dir path_dir path"," let base path_base path"," let tmp path_tmp base","  sudo_dir_make dir"," file_save tmp data"," sudo \"mv\" \"--force\" tmp path","fn sudo_file_write path:str data:str"," file_write tmp data","fn sudo_fs_change_mode path:str pattern:str"," check is_fs path"," sudo \"chmod\" pattern path","fn sudo_fs_remove path:str"," sudo \"rm\" \"--recursive\" \"--force\" path","fn sudo_is_dir x"," let result sudo os_run \"stat\" \"--terse\" \"--format=%F\" x"," if same result.status 1"," ret contain result.out \"directory\"","fn sudo_is_file x"," ret contain result.out \"file\"","fn sudo_path_writable path:str","   sudo_fs_change_mode path \"a+rw\"","   sudo_fs_change_mode path \"a+rwx\"","fn sudo x y:etc"," if not is_fn x","  ret sudo os_system x y:etc"," ret x \"sudo\" y:etc","fn user_created x:obj"," var r x.created"," let home x.home"," let last_log x.last_log"," if is_str home","  let n fs_created home","  if is_null r","   assign r n","   assign r min r n"," if is_num last_log","   assign r last_log","   assign r min r last_log","fn user_list with_group"," if is_undef with_group","  ret user_list true"," check is_bool with_group"," fn last_log user:str","  let lines os_execute \"last\" \"--fulltimes\" \"-R\" user","  let lines split lines","  let line front lines","  if is_empty line","   ret null","  let line replace_rec line \"  \" \" \"","  let parts split line \" \"","  shift parts 2","  let parts slice_l parts 5","  let line join parts \" \"","  ret date_decode line"," var groups null"," fn find_group gid:uint","  forin groups","   let v get groups k","    ret v.name"," fn find_groups name:str","   if contain v.users name"," let lines file_load \"/etc/passwd\""," if with_group","  assign groups group_list","  let uid shift fields","  let uid to_uint uid","  let comment shift fields","  let home shift fields","  let shell shift fields","  let human match_l home \"/home/\"","  var created null","  let last_log last_log name","  let o obj uid gid name comment home shell human created last_log","  if with_group","   let group find_group gid","   let groups find_groups name","   unshift groups group","   let groups dedup groups","   sort groups","   assign o.groups groups","   obj_order o \"uid\" \"gid\" \"name\" \"groups\"","fn dom_entities"," let result obj"," fn entity x:cool y","  if is_char x","   let n asc x","   ret entity n y","  check is_ushort x","  if is_ushort y","   variant x y","  let key format y","  let c chr x","  put result key c","  variant x"," fn variant x:ushort y","   ret variant x x","  check is_ushort y","  let numeric1 pad_l y \"0\" 3","  let numeric1 concat \"#\" numeric1","  let numeric1 format numeric1","  if not has result numeric1","   put result numeric1 c","  let numeric2 pad_l y \"0\" 4","  let numeric2 concat \"#\" numeric2","  let numeric2 format numeric2","  if not has result numeric2","   put result numeric2 c","  let hex to_hex y","  let hex concat \"#x\" hex","  let hex format hex","  if not has result hex","   put result hex c"," fn format x:str","  ret concat \"&\" x \";\""," entity 33 \"excl\""," entity \"'\" \"quot\""," entity 35 \"num\""," entity 36 \"dollar\""," entity 37 \"percnt\""," entity 38 \"amp\""," entity 39 \"apos\""," entity 40 \"lparen\""," entity 41 \"rparen\""," entity 42 \"ast\""," entity 43 \"plus\""," entity 44 \"comma\""," entity 46 \"period\""," entity 47 \"sol\""," entity 58 \"colon\""," entity 59 \"semi\""," entity 60 \"lt\""," entity 61 \"equals\""," entity 62 \"gt\""," entity 63 \"quest\""," entity 64 \"commat\""," entity 91 \"lsqb\""," entity 92 \"bsol\""," entity 93 \"rsqb\""," entity 94 \"Hat\""," entity 95 \"lowbar\""," entity 96 \"grave\""," entity 123 \"lcub\""," entity 124 \"verbar\""," entity 125 \"rcub\""," entity 126 \"tilde\""," entity 8364 \"euro\""," entity \",\" \"sbquo\""," entity 131 \"fnof\""," entity \"\\\"\" \"bdquo\""," entity 133 \"hellip\""," entity 134 \"dagger\""," entity 135 \"Dagger\""," entity 136 \"circ\""," entity 137 \"permil\""," entity 138 \"Scaron\""," entity \"'\" \"lsaquo\""," entity 140 \"OElig\""," entity 142 \"Zcaron\""," entity \"'\" \"lsquo\""," entity \"'\" \"rsquo\""," entity \"\\\"\" \"ldquo\""," entity \"\\\"\" \"rdquo\""," entity 149 \"bull\""," entity 150 \"ndash\""," entity 151 \"mdash\""," entity 152 732"," entity 153 \"trade\""," entity 154 \"scaron\""," entity \"'\" \"rsaquo\""," entity 156 \"oelig\""," entity 158 \"zcaron\""," entity 159 \"Yuml\""," entity 160 \"nbsp\""," entity 161 \"iexcl\""," entity 162 \"cent\""," entity 163 \"pound\""," entity 164 \"curren\""," entity 165 \"yen\""," entity 166 \"brvbar\""," entity 167 \"sect\""," entity 168 \"uml\""," entity 169 \"copy\""," entity 170 \"ordf\""," entity \"\\\"\" \"laquo\""," entity 172 \"not\""," entity 173 \"shy\""," entity 174 \"reg\""," entity 175 \"macr\""," entity 176 \"deg\""," entity 177 \"plusmn\""," entity 178 \"sup2\""," entity 179 \"sup3\""," entity 180 \"acute\""," entity 181 \"micro\""," entity 182 \"para\""," entity 183 \"middot\""," entity 184 \"cedil\""," entity 185 \"sup1\""," entity 186 \"ordm\""," entity \"\\\"\" \"raquo\""," entity 188 \"frac14\""," entity 189 \"frac12\""," entity 190 \"frac34\""," entity 191 \"iquest\""," entity 192 \"Agrave\""," entity 193 \"Aacute\""," entity 194 \"Acirc\""," entity 195 \"Atilde\""," entity 196 \"Auml\""," entity 197 \"Aring\""," entity 198 \"AElig\""," entity 199 \"Ccedil\""," entity 200 \"Egrave\""," entity 201 \"Eacute\""," entity 202 \"Ecirc\""," entity 203 \"Euml\""," entity 204 \"Igrave\""," entity 205 \"Iacute\""," entity 206 \"Icirc\""," entity 207 \"Iuml\""," entity 208 \"ETH\""," entity 209 \"Ntilde\""," entity 210 \"Ograve\""," entity 211 \"Oacute\""," entity 212 \"Ocirc\""," entity 213 \"Otilde\""," entity 214 \"Ouml\""," entity \"x\" \"times\""," entity 216 \"Oslash\""," entity 217 \"Ugrave\""," entity 218 \"Uacute\""," entity 219 \"Ucirc\""," entity 220 \"Uuml\""," entity 221 \"Yacute\""," entity 222 \"THORN\""," entity 223 \"szlig\""," entity 224 \"agrave\""," entity 225 \"aacute\""," entity 226 \"acirc\""," entity 227 \"atilde\""," entity 228 \"auml\""," entity 229 \"aring\""," entity 230 \"aelig\""," entity 231 \"ccedil\""," entity 232 \"egrave\""," entity 233 \"eacute\""," entity 234 \"ecirc\""," entity 235 \"euml\""," entity 236 \"igrave\""," entity 237 \"iacute\""," entity 238 \"icirc\""," entity 239 \"iuml\""," entity 240 \"eth\""," entity 241 \"ntilde\""," entity 242 \"ograve\""," entity 243 \"oacute\""," entity 244 \"ocirc\""," entity 245 \"otilde\""," entity 246 \"ouml\""," entity 247 \"divide\""," entity 248 \"oslash\""," entity 249 \"ugrave\""," entity 250 \"uacute\""," entity 251 \"ucirc\""," entity 252 \"uuml\""," entity 253 \"yacute\""," entity 254 \"thorn\""," entity 255 \"yuml\"","fn dom_escape x:str","  let entity find entities v","  if same entity -1","   push a entity","fn dom_special_chars x:str"," let r replace x nbsp \"&nbsp;\""," let r replace r \"\\\"\" \"&quot;\""," let r replace r \"'\" \"&apos;\""," let r replace r \"<\" \"&lt;\""," let r replace r \">\" \"&gt;\"","fn dom_unescape x:str"," forin entities","  let v get entities k","  assign r replace r k v","fn h_a x"," let r h_init \"a\" x"," assign r.inline true","fn h_attr x:obj y:str z:cool"," put x.attr y z","fn h_b x"," let r h_init \"b\" x","fn h_back_color x:obj y:str"," h_style x \"background-color\" y","fn h_body"," ret h_init \"body\"","fn h_bold x:obj"," h_style x \"font-weight\" \"bold\"","fn h_border x:obj y","  let style space border \"solid gainsboro\"","  ret h_border x style"," h_style x \"border\" y","fn h_br"," let r h_init \"br\""," assign r.short true","fn h_color x:obj y:str"," h_style x \"color\" y","fn h_decoration x:obj y:str"," h_style x \"text-decoration\" y","fn h_div x"," ret h_init \"div\" x","fn h_float x:obj y:str"," h_style x \"float\" y","fn h_font_family x:obj y:str"," h_style x \"font-family\" y","fn h_font_size x:obj y:str"," h_style x \"font-size\" y","fn h_head"," let r h_init \"head\""," let meta h_meta"," h_attr meta \"charset\" \"utf-8\""," h_push r meta","fn h_href x:obj y:str"," h_attr x \"href\" y","fn h_html"," ret h_init \"html\"","fn h_img"," let r h_init \"img\"","fn h_init name:str text"," if is_undef text","  ret h_init name \"\""," check is_str text"," let short false"," let inline false"," let attr obj"," let style obj"," let children arr"," ret obj name short inline attr style text children","fn h_meta"," let r h_init \"meta\"","fn h_padding_bottom x:obj y:cool"," h_style x \"padding-bottom\" y","fn h_padding_left x:obj y:cool"," h_style x \"padding-left\" y","fn h_padding_right x:obj y:cool"," h_style x \"padding-right\" y","fn h_padding_top x:obj y:cool"," h_style x \"padding-top\" y","fn h_padding x:obj y:cool"," h_style x \"padding\" y","fn h_pre x"," ret h_init \"pre\" x","fn h_push x:obj y:obj"," push x.children y","fn h_render x:obj"," fn html_inline x:str"," fn indent_child x:arr","  let a dup x","   let s shift a","   if not pre_begin s","    let s txt_indent s","   let s txt_indent s","   if pre_end s","   while is_full a","    let s shift a","    if pre_end s","     brk"," fn pre_begin x:str","  let s trim x","  ret match_l s \"<pre>\""," fn pre_end x:str","  ret match_r s \"</pre>\""," if same x.name \"html\"","  push lines \"<!doctype html>\""," let attr dup x.attr"," if is_full x.style","  var style arr","  forin x.style","   let v get x.style k","   let s concat k \": \" v \";\"","   push style s","  let style join style \" \"","  put attr \"style\" style"," let attributes arr"," forin attr","  let v get attr k","  let s dom_special_chars v","  let s quote s","  let s concat k \"=\" s","  push attributes s"," let attributes join attributes \" \""," let open arr x.name"," if is_full attributes","  push open attributes"," let open join open \" \""," let open angle open"," let close concat \"/\" x.name"," let close angle close"," let text x.text"," let children x.children"," if same name \"pre\"","  check is_empty children","  let text dom_special_chars text","  let line concat open text close","  push lines line"," elseif same name \"script\"","  let text replace text \"</script>\" \"<\\\\/script>\"","  let text txt_indent text","  let text split text","  push lines open","  append lines text","  push lines close"," elseif x.short","  check is_empty text"," elseif x.inline","  var line open","  let text html_inline text","  assign line concat line text","  for children","   let s h_render v","   assign line concat line s","  assign line concat line close"," elseif is_empty children","  if is_full text","   push lines text","   let a split s","   let a indent_child a","   append lines a"," ret join lines","fn h_script x"," ret h_init \"script\" x","fn h_spacer"," let r h_div"," h_text r nbsp","fn h_span x"," let r h_init \"span\" x","fn h_src x:obj y:str"," h_attr x \"src\" y","fn h_style x:obj y:str z:cool"," put x.style y z","fn h_table"," let r h_init \"table\""," h_style r \"border-collapse\" \"collapse\"","fn h_tbl tbl:arr"," let table h_table"," h_border table"," let tr h_tr"," for tbl_columns tbl","  let th h_th","  h_text th v","  h_padding th padding","  h_border th","  h_push tr th"," h_push table tr"," for tbl","  let tr h_tr","  let even mod i 2","  let even same even 0","  if even","   h_back_color tr \"whitesmoke\"","   h_back_color tr \"white\"","   let td h_td","   if is_cool v","    h_text td v","   elseif is_link v","    let a link_h v","    h_push td a","   h_padding td padding","   h_push tr td","  h_push table tr"," ret table","fn h_td"," ret h_init \"td\"","fn h_text x:obj y","  ret x.text"," assign x.text y","fn h_th"," ret h_init \"th\"","fn h_title x"," let r h_init \"title\" x","fn h_tr"," ret h_init \"tr\"","fn h_wbr"," let r h_init \"wbr\"","fn h_width x:obj y:cool"," h_style x \"width\" y","fn init_www"," assign global.nbsp chr 160"," assign global.entities dom_entities"," assign global.mailer \"mabynogy@gmail.com\""," assign global.admin \"mabynogy@freeserver.sh\""," assign global.author \"marc@abiven.eu\"","fn is_link x"," if not is_obj x"," if not is_str x.url"," if not is_str x.title","fn link_dom x:obj"," let r dom_a"," dom_href r x.url"," dom_text r x.title","fn link_h x:obj"," let r h_a"," h_href r x.url"," h_text r x.title","fn link_init url:str title"," if is_undef title","  let title url_beautify url","  ret link_init url title"," check is_str title"," ret obj url title","fn config_append path:str line:str"," check is_ln line"," let content sudo_file_read path"," if not match_r content lf","  push parts lf"," let line pad_r line \" \" config_padding"," push parts line"," push parts \"#\""," push parts config_tag"," push parts lf"," let line implode parts"," let content concat content line","fn config_clean path:str"," let inputs sudo_file_read path"," let outputs arr"," for inputs","  let parts split v \"#\"","  if is_empty parts","   push outputs v","  let tag back parts","  if different tag config_tag","  trace \"config>\" v"," let content join outputs","fn init_org"," assign global.common \"/home/common\""," assign global.login_merlin \"mabynogy@mabynogy.org\""," assign global.org_user_path path_concat common \"users.json\""," assign global.config_padding 128"," assign global.config_tag \"mabynogy\"","fn org_group_create_users"," fn get_humans","  let users user_list","   if not v.human","   put r v.name v"," var groups group_list"," let group \"users\""," if not has groups \"users\"","  sudo \"groupadd\" \"users\"","  let o group","  log \"create\" s"," let users groups.users"," let humans get_humans"," forin humans","  if contain users.users k","  sudo \"usermod\" \"--append\" \"--groups\" users.name k","  let o obj user group","  log \"add\" s","fn org_user_install user:str"," fn install_prompt path:str","  let prompt get_prompt","  let prompt quote prompt","  let prompt concat \"PS1=\" prompt","  config_clean path","  config_append path prompt","  config_append path \"export PS1\""," fn get_prompt","  let red rgb_init 5 0 0","  let yellow rgb_init 5 5 0","  let time ps1_encode \"\\\\t\" yellow \"black\"","  var user null","  if is_root","   assign user ps1_encode \"\\\\u\" red \"default\" \"bold\"","   assign user ps1_encode \"\\\\u\" \"green\" \"default\" \"bold\"","  let host ps1_encode \"\\\\h\" \"blue\" \"default\" \"bold\"","  let login concat user \"@\" host","  let path ps1_encode \"\\\\w\" \"cyan\" \"default\" \"bold\"","  let path concat path \" $ \"","  ret space time login path"," install_prompt \"/root/.bashrc\""," let home os_home user"," let bashrc path_concat home \".bashrc\""," check sudo_is_file bashrc"," install_prompt bashrc","fn org_user_load"," let r user_list"," if is_file org_user_path","  let users file_load org_user_path","  let users json_decode users","   if not has r k","   let user get r k","   assign user.mail v.mail","   assign user.created v.created","   assign user.created user_created user"," forin r","  let v get r k","  if not has v \"mail\"","   assign v.mail null","fn org_user_remove_unused"," let users org_user_load"," let removes obj"," forin users","  let v get users k","  let last_log v.last_log","  if not v.human","  if not is_null last_log","  let delay time_get","  let delay sub delay v.created","  if lt delay week","  org_user_remove name","  let o obj user","  log \"remove\" s","  put removes name v.mail"," if is_full removes","  mail_debug \"user-remove-unused\" removes","fn org_user_remove x:str"," check different x \"mabynogy\""," let users user_list"," let user get users x"," let file concat x \".zip\""," let archive path_concat common \"archive\""," if not is_dir archive","  sudo_dir_make archive"," let r path_concat archive file"," let r archive_find r"," sudo \"zip\" \"--recurse-paths\" \"-9\" r user.home"," let archive to_lit r"," log \"archive\" r"," let admin os_user"," let pair concat admin \":\" admin"," sudo \"chown\" pair r"," sudo \"deluser\" \"--remove-home\" x"," org_user_update","fn org_user_save x:obj"," let users obj","  let mail v.mail","  let created v.created","  check is_def mail","  check is_def created","  let user obj mail created","  put users k user"," let users json_dump users"," sudo_file_save org_user_path users","fn org_user_uninstall user:str"," config_clean bashrc","fn org_user_update"," org_user_save users","fn ps1_encode str:str args:etc"," let open \"\\\\[\""," let close \"\\\\]\""," let r concat open ansi.escape \"[\" ansi.attr \";\" ansi.fore \";\" ansi.back \"m\" close str open ansi.escape \"[0m\" close"," let r replace r escape \"\\\\e\"","fn app_home app:str"," let js app_make app"," let title h_title app"," let script h_script js"," h_push body script"," ret h_render html","fn app_make app:str"," let cpl cpl_init app"," let o obj app"," log \"make\" s"," cpl_include cpl"," let r cpl_generate cpl"," let tmp concat app \"-tmp.js\""," let tmp path_tmp tmp"," file_save tmp r"," let success cpl_check_syntax cpl tmp"," check success"," cpl_deinit cpl","fn ast_assign cpl:obj args:arr children:arr source:obj"," check is_empty children"," let left front args"," check is_name left"," let right slice args 1"," let right call_expr_right cpl right:etc"," let code concat left \"=\" right"," ret obj code source","fn ast_begin cpl:obj args:arr children:arr source:obj"," check is_empty args"," let r call_ast_block cpl children source"," if cpl_is_leaf cpl children","  check is_single r","  let node front r","  assign node.code trim node.code","fn ast_brk cpl:obj args:arr children:arr source:obj"," let code \"break\"","fn ast_call cpl:obj args:arr children:arr source:obj"," check is_full args"," let code expr_call cpl args:etc","fn ast_catch cpl:obj args:arr children:arr source:obj"," let block call_ast_block_top cpl children source"," if is_empty args","  let code \"catch\"","  let node obj code source","  push r node","  append r block"," check is_single args"," let identifier front args"," check is_identifier identifier"," let code paren identifier"," let code concat \"catch\" code"," let node obj code source"," push r node"," append r block","fn ast_check cpl:obj args:arr children:arr source:obj"," let code join args \",\""," let code paren code"," let code concat \"check\" code","fn ast_cont cpl:obj args:arr children:arr source:obj"," let code \"continue\"","fn ast_else cpl:obj args:arr children:arr source:obj"," let code \"else\""," let block call_ast_block cpl children source","fn ast_elseif cpl:obj args:arr children:arr source:obj"," ret call_ast_if cpl args children source \"else if\"","fn ast_fn cpl:obj args:arr children:arr source:obj"," ret call_ast_xn cpl args children source \"function\"","fn ast_forin cpl:obj args:arr children:arr source:obj"," ret call_ast_for cpl args children source \"k in\"","fn ast_fornum cpl:obj args:arr children:arr source:obj"," let code call_expr_right cpl args:etc"," let code concat \"let i=0;i<\" code \";i++\""," let code concat \"for\" code","fn ast_forof cpl:obj args:arr children:arr source:obj"," ret call_ast_for cpl args children source \"v of\"","fn ast_gn cpl:obj args:arr children:arr source:obj"," ret call_ast_xn cpl args children source \"function*\"","fn ast_if cpl:obj args:arr children:arr source:obj"," ret call_ast_if cpl args children source \"if\"","fn ast_include cpl:obj args:arr children:arr source:obj"," let path front args"," check is_lit path"," let path unwrap path","fn ast_inline cpl:obj args:arr children:arr source:obj"," let code front args"," check is_lit code"," let code unwrap code","fn ast_let cpl:obj args:arr children:arr source:obj"," check is_many args"," ret call_ast_declare cpl args children source \"const\"","fn ast_ret cpl:obj args:arr children:arr source:obj"," var code \"\"","  assign code \"return\"","  let right call_expr_right cpl args:etc","  assign code space \"return\" right","fn ast_run cpl:obj args:arr children:arr source:obj"," let code space \"yield*\" code","fn ast_throw cpl:obj args:arr children:arr source:obj"," let code space \"throw\" code","fn ast_try cpl:obj args:arr children:arr source:obj"," let code \"try\"","fn ast_var cpl:obj args:arr children:arr source:obj"," ret call_ast_declare cpl args children source \"let\"","fn ast_while cpl:obj args:arr children:arr source:obj"," let code concat \"while\" code","fn ast_yield cpl:obj args:arr children:arr source:obj","  let code \"yield\"","  ret obj code source"," let code space \"yield\" code","fn call_ast_block_top cpl:obj children:arr source:obj"," for cpl_block cpl children","  let o dup v","  assign o.code txt_indent o.code"," let code \"{\""," let open obj code source"," let code \"}\""," let close obj code source"," unshift r open"," push r close","fn call_ast_block cpl:obj children:arr source:obj"," if not cpl_is_leaf cpl children","  let code \"{\"","  let open obj code source","  let code \"}\"","  let close obj code source","  unshift r open","  push r close","fn call_ast_declare cpl:obj args:arr children:arr source:obj keyword:str"," let code slice args 1"," let code call_expr_right cpl code:etc"," let code concat identifier \"=\" code"," let code space keyword code","fn call_ast_for cpl:obj args:arr children:arr source:obj keyword:str"," let code space \"const\" keyword code","fn call_ast_if cpl:obj args:arr children:arr source:obj keyword:str"," let code concat keyword code","fn call_ast_xn cpl:obj args:arr children:arr source:obj keyword:str"," fn get_argument x:str","  if is_identifier x","  if is_tuple x","   let a unwrap x","   check is_pair a","   let name front a","   let etc back a","   check is_identifier name","   check same etc \"etc\"","   ret concat \"...\" name"," let name front args"," check is_name name"," let args slice args 1"," let parameters map args get_argument"," for parameters","  let n count parameters v","  if same n 1","  let arg to_lit v","  let message space \"Argument\" arg \"defined\" n \"times\"","  stop message"," let parameters join parameters \",\""," let list paren parameters"," let code concat name list","fn cpl_block cpl:obj nodes:arr"," for nodes","  let a cpl_translate cpl v","  append r a","fn cpl_check_fn cpl:obj nodes:arr path:str"," let file path_file path"," let name replace file \"-\" \"_\""," if same name \"check_arity\"","  if same v.operator \"fn\"","  elseif same v.operator \"gn\"","  let xn front v.args","  if same xn name"," let s_file to_lit file"," let message space \"The file\" s_file \"must define a function or a generator nammed\" s_name","fn cpl_check_syntax cpl:obj path"," if is_undef path","  ret cpl_check_syntax cpl cpl.target"," check is_str path"," let argv node_argv"," let o os_run argv:etc \"--check\" path"," check is_empty o.out"," if same o.status 0","  check is_empty o.err"," check cpl_log_error cpl o.err path","fn cpl_check cpl:obj nodes:arr"," fn visit nodes:arr","  for nodes","   if not is_xn v.operator","    let node dup v","    assign node.children visit node.children","    push r node","   let node instrument v","   push r node"," fn instrument node:obj","  let r dup node","  let name front r.args","  let parameters slice r.args 1","  let arity get_arity parameters","  if same arity.operator \"gte\"","   if same arity.count 0","    assign r.children visit r.children","  let operator \"check_arity\"","  let count to_str arity.count","  let s_operator to_lit arity.operator","  let args arr s_operator \"arguments.length\" count","  let children arr","  let source dup r.source","  let node obj operator args children source","  unshift r.children node","  reverse parameters","  clear r.args","  for parameters","   if is_identifier v","    unshift r.args v","   check is_tuple v","   let a unwrap v","   let identifier at a 0","   let type at a 1","   if same type \"etc\"","   unshift r.args identifier","   let s_identifier to_lit identifier","   let s_type to_lit type","   let is concat \"is_\" type","   let operator \"check_arg\"","   let args arr is identifier s_identifier s_type","   let children arr","   let source dup r.source","   let node obj operator args children source","   unshift r.children node","  unshift r.args name","  assign r.children visit r.children"," fn get_arity args:arr","  var operator \"same\"","  var count 0","  for args","   if is_tuple v","    let a unwrap v","    let type at a 1","    if same type \"etc\"","     assign operator \"gte\"","   elseif is_identifier v","    assign operator \"gte\"","   assign count inc count","  ret obj operator count"," fn is_xn x","  if same x \"fn\"","  if same x \"gn\""," ret visit nodes","fn cpl_compile cpl:obj path:str"," let nodes cpl_load cpl path"," let nodes cpl_tokenize cpl nodes"," let nodes cpl_fold cpl nodes"," cpl_check_fn cpl nodes path"," let nodes cpl_check cpl nodes"," var nodes cpl_for cpl nodes","  assign nodes cpl_scope cpl nodes","  assign nodes cpl_block cpl nodes","  cpl_dump cpl"," ret nodes","fn cpl_deinit cpl:obj"," let s json_dump cpl.cache"," file_save cpl.path s","fn cpl_dump cpl:obj"," check is_obj cpl"," fn dump_ast node:obj","  let args node.args","  let children node.children","  let a3 arr","  push a2 node.operator","  append a2 args","  for a2","   if is_token v","    push a3 v","   elseif is_str v","    let s to_lit v","    push a3 s","  let cs space a3:etc","  let source node.source","  let path source.path","  let ncs source.index","  let ncs inc ncs","  let o obj path ncs cs","   let t dump_ast v","   for t","    assign v.cs txt_indent v.cs","   append r t","  if is_full children","   let cs \"end\"","   let o obj path ncs cs","   push r o"," for cpl.stack","  let frame concat \"#\" n","  let title space \"compiler frame\" frame","  let s dump_ast v","  let s tbl_render s","fn cpl_fold cpl:obj nodes:arr","  let parent shift nodes","  let indent parent.indent","  let descendants arr","  while is_full nodes","   let o front nodes","   if gt o.indent indent","    shift nodes","    push descendants o","  while is_full descendants","   let o visit descendants","   push children o","  let operator parent.operator","  let args parent.args","  let source parent.source","  ret obj operator args children source"," let nodes dup nodes"," while is_full nodes","  let o visit nodes","fn cpl_for cpl:obj nodes:arr","   if different v.operator \"for\"","   let nodes generate v","   append r nodes"," fn generate node:obj","  let operator \"let\"","  let args arr \"_a\" args:etc","  let source dup node.source","  let node2 obj operator args children source","  push r node2","  let operator \"forin\"","  let args arr \"_a\"","  let children visit node.children","  let node3 obj operator args children source","  push r node3","  let args arr \"v\" \"at\" \"_a\" \"i\"","  let node4 obj operator args children source","  unshift node3.children node4","  let args arr \"i\" \"to_i\" \"k\"","  let node5 obj operator args children source","  unshift node3.children node5","fn cpl_generate cpl:obj"," let pool arr"," fn get_index x:str","  let r find pool x","  if gte r 0","  let r pool.length","  push pool x"," for cpl.out","  push a v.code"," let relatives arr"," let indices arr","  let source v.source","  if not contain paths path","   push paths path","  let n get_index path","  push relatives n","  push indices source.index"," let contents obj","  let key get_index v","  let key to_str key","  let content cpl_uncomment cpl v","  let value arr","  for split content","   let index get_index v","   push value index","  put contents key value"," let app to_lit cpl.app"," let app concat \"const app=\" app"," push a app"," let compile time_get"," let compile trunc compile"," let compile concat \"const compile=\" compile"," push a compile"," let pool json_encode pool"," let pool concat \"const pool=\" pool"," push a pool"," let relatives json_encode relatives"," let relatives concat \"const relatives=\" relatives"," push a relatives"," let indices json_encode indices"," let indices concat \"const indices=\" indices"," push a indices"," let contents json_encode contents"," let contents concat \"const contents=\" contents"," push a contents"," let fns join cpl.fns \",\""," let fns brace fns"," let fns concat \"const fns=\" fns"," push a fns"," push a \"main()\"","fn cpl_include cpl:obj"," fn compile_cache path:str","  let relative path_real \"src\"","  let relative path_fix relative","  let relative strip_l path relative","  let cache cpl.cache.files","  let modified fs_modified path","  var recompile false","  if has cache relative","   let entry get cache relative","   if different entry.modified modified","    assign recompile true","   assign recompile true","  if not recompile","   let nodes entry.nodes","   declare_fn path nodes","   ret nodes","  let path relative","  let modified_ time_hn modified","  let o obj path modified_","  trace \"compile\" s","  let nodes cpl_compile cpl path","  declare_fn path nodes","  let entry obj modified nodes","  set cache relative entry","  ret nodes"," fn declare_fn path:str nodes:arr","  if is_empty nodes","  let fn path_file path","  let fn replace fn \"-\" \"_\"","  push cpl.fns fn"," fn get_files x:arr","   let a dir_load v"," fn get_includes x:str","  let dir get_app_dir x","  let a path_concat dir \"include.txt\"","  let a file_load a","  for split a","   let s path_concat \"src\" v","  push r dir"," fn get_app_dir x","  let r concat \"src/app-\" x","  if is_dir r","  let r concat \"src/spa-\" x"," let includes get_includes cpl.app"," let files get_files includes"," for files","  let ext path_ext v","  if different ext \"cs\"","  let nodes compile_cache v","  append cpl.out nodes","fn cpl_init app:str"," let path \"cache.txt\""," fn load_cache","   let s file_load path","   ret json_decode s","  let scans obj","  let files obj","  ret obj scans files"," let asts fn_select \"ast_\""," let exprs fn_select \"expr_\""," let fns arr"," let stack arr"," let out arr"," let target concat \"out-\" app \".js\""," let cache load_cache"," ret obj app asts exprs fns files stack out target path cache","fn cpl_is_call cpl:obj token:str"," if same token \"call\""," forin cpl.asts","  if same k token","fn cpl_is_leaf cpl:obj nodes:arr"," if not is_single nodes"," let node front nodes"," let operator node.operator"," if cpl_is_call cpl operator"," let operators arr \"brk\" \"check\" \"cont\" \"inline\" \"ret\" \"run\" \"throw\" \"yield\""," ret contain operators operator","fn cpl_load cpl:obj path:str"," let path2 dir_current"," let path2 path_concat path2 \"src\""," let path2 path_fix path2"," let path2 strip_l path path2"," let lines cpl_uncomment cpl path2","  let path path2","  let code v","  let source obj path index","  let o obj code source","fn cpl_log_error cpl:obj err:str path","  ret cpl_log_error cpl err cpl.target"," fn parse_error cpl:obj path:str err:str","  let s txt_compact err","  let line_js shift lines","  let line_js split line_js \":\"","  let line_js back line_js","  let line_js to_uint line_js","  shift lines 3","  flower message","  let line line_js","  let o obj line path","  if gt line_js cpl.out.length","  let index dec line_js","  let o at cpl.out index","  let source o.source","  let content cpl_uncomment cpl source.path","  let content split content","  let line_cs inc source.index","  let s dbg_origin content line_cs \"\"","  let content dbg_source path","  let s dbg_origin content line_js \"\"","  let stack arr","  let s shift lines","  push stack s","   let s shift lines","   if not match_l s \"at\"","   push stack s","  let stack join stack","  let map cpl_source_map cpl","  let report report_init stack undefined map","  report_log report","  parse_error cpl path err","fn cpl_scan cpl:obj str:str"," fn is_complex x","  if contain x \"//\"","  if contain x \"\\\"\""," let s trim str"," if is_complex s","  let cache cpl.cache.scans","  if has cache s","   let r get cache s","   let r dup r","  let r scan s","  let r reject r is_trivia","  let a dup r","  put cache s a"," let r split s \" \""," let r reject r is_empty","fn cpl_scope cpl:obj nodes:arr","  let nodes dup nodes","   let node shift nodes","   var a null","    assign a resolve node nodes","   catch e","    unshift cpl.stack node","    throw e"," fn resolve node:obj rest:arr","  let operator node.operator","  let declare operator","  if is_declare operator","   let name front args","   let rvalue slice args 1","   check is_str name","   check is_arr rvalue","   check is_full rvalue","   let operator \"let\"","   let args arr \"_\" rvalue:etc","   let node2 obj operator args children source","   push r node2","   let operator \"begin\"","   let args arr","   let node3 obj operator args children source","   push r node3","   let operator declare","   let args arr name \"_\"","   let node4 obj operator args children source","   push node3.children node4","   if is_full rest","    let operator \"begin\"","    let args arr","    let children visit rest","    let node5 obj operator args children source","    push node3.children node5","    clear rest","  elseif is_for operator","   let args arr \"_\" args:etc","   let args arr \"_\"","   let children visit node.children"," fn is_declare operator","  if same operator \"let\"","  if same operator \"var\""," fn is_for operator","  if same operator \"forof\"","  if same operator \"forin\"","  if same operator \"fornum\"","fn cpl_source_map cpl:obj"," let script path_real cpl.target"," forin cpl.files","  let v get cpl.files k","  let a split v","  put files k a","  let path v.source.path","  let index v.source.index","  let js v.code"," let o obj script files source"," ret dup o","fn cpl_tokenize cpl:obj nodes:arr","  let code v.code","  let source dup v.source","  let indent str_indent code","  let args cpl_scan cpl code","  let operator shift args","  if same operator \"end\"","   if is_empty args","  let node obj indent operator args children source","fn cpl_translate cpl:obj node:obj"," fn translate cpl:obj operator:str args:arr children:arr source:obj","  forin cpl.asts","   if different k operator","   let ast get cpl.asts k","   let r ast cpl args children source","   if is_arr r","   check is_obj r","   ret arr r","  let args arr operator args:etc","  let r ast_call cpl args children source","  if is_arr r","  check is_obj r","  ret arr r"," let args node.args"," let children node.children"," let source node.source","  ret translate cpl operator args children source","  unshift cpl.stack node","fn cpl_uncomment cpl:obj path:str"," if has cpl.files path","  ret get cpl.files path"," let path_real path_concat \"src\" path"," let content file_load path_real"," for split content","  let tokens cpl_scan cpl v","  if is_empty tokens","   push r \"\"","  let line join tokens \" \"","  push r line"," put cpl.files path r","fn call_expr_arg cpl:obj x:str","  let a unwrap x","  check is_pair a","  let name front a","  let etc back a","  check is_identifier name","  check same etc \"etc\"","  ret concat \"...\" name"," let s to_lit x"," let message space \"Invalid argument\" s","fn call_expr_right cpl:obj x y:etc","  if same x \"arr\"","  elseif same x \"obj\"","  elseif same x \"_\"","  elseif same x \"null\"","  elseif same x \"true\"","  elseif same x \"false\"","  elseif is_numeric x","  elseif is_lit x","   let condition paren x","   let condition concat \"is_fn\" condition","   let call concat x \"()\"","   ret concat condition \"?\" call \":\" x"," ret call_expr_rvalue cpl x y:etc","fn call_expr_rvalue cpl:obj x:etc","  if same first \"arr\"","   ret expr_arr cpl","  elseif same first \"obj\"","   ret expr_obj cpl","   ret first"," let args slice x 1"," if has cpl.exprs first","  let fn get cpl.exprs first","  ret fn cpl args:etc"," ret expr_call cpl x:etc","fn expr_arr cpl:obj x:etc"," let fn partial call_expr_arg cpl"," let args map x fn"," let s join args \",\""," ret bracket s","fn expr_call cpl:obj x:name y:etc"," let args map y fn"," let args join args \",\""," let list paren args"," ret concat x list","fn expr_iif cpl:obj x:arg y:arg z:arg a:etc"," check is_empty a"," ret concat x \"?\" y \":\" z","fn expr_in cpl:obj x:identifier y:identifier z:etc"," check is_empty z"," ret space y \"in\" x","fn expr_inline cpl:obj x:str"," ret unwrap x","fn expr_instanceof cpl:obj x:name y:identifier z:etc"," ret space x \"instanceof\" y","fn expr_new cpl:obj x:etc"," let rvalue call_expr_rvalue cpl x:etc"," ret space \"new\" rvalue","fn expr_not cpl:obj x:etc"," let right call_expr_right cpl x:etc"," let right paren right"," ret concat \"!\" right","fn expr_obj cpl:obj x:etc"," check every x is_identifier"," let s join x \",\""," ret brace s","fn expr_run cpl:obj x:etc"," let call expr_call cpl x:etc"," ret space \"yield*\" call","fn expr_value cpl:obj x:str y:etc"," check is_empty y","gn init x:etc"," fn is_app x","  let base concat \"app-\" x","  let path path_concat \"src\" base","  ret is_dir path"," let apps app_list","  dump apps"," let app shift args"," if not is_app app"," var run true"," if extract args \"--compile\"","  assign run false"," let code cpl_generate cpl"," file_save cpl.target code"," if not cpl_check_syntax cpl"," if not run"," let usage_path concat \"usage-\" process.pid \".txt\""," let usage_path path_tmp \"usage.txt\""," let output concat \"--output=\" usage_path"," let time arr \"time\" \"--format=%M\" output"," let context node_context"," let args arr time:etc argv:etc cpl.target context:etc args:etc"," let args dedup args"," let o run os_capture args:etc"," if different status 0","  let s concat \"status=\" status","  if not cpl_log_error cpl err","   let s txt_prepend err \"make-error> \"","   log s"," let usage file_load usage_path"," fs_remove usage_path","  let usage split usage","  let usage back usage","  let usage to_uint usage","  let usage mul usage 1024","  let usage byte_size usage","  let o obj usage"]
const relatives=[0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,40,40,40,40,40,40,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,44,44,44,44,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,46,46,46,46,46,46,46,46,46,46,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,49,49,49,49,49,49,49,49,49,49,49,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,54,54,54,54,54,54,54,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,61,61,61,61,61,61,61,62,62,62,62,62,62,63,63,63,63,63,63,63,63,63,63,63,64,64,64,64,64,64,64,64,64,64,64,65,65,65,65,65,65,65,65,65,65,65,66,66,66,66,66,66,66,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,68,68,68,68,68,68,68,68,68,68,69,69,69,69,69,69,70,70,70,70,70,70,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,72,72,72,72,72,72,72,72,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,76,76,76,76,76,76,76,76,76,76,76,76,76,76,77,77,77,77,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,79,79,79,79,79,79,79,79,80,80,80,80,80,80,80,80,81,81,81,81,81,82,82,82,82,82,82,83,83,83,83,83,83,84,84,84,84,84,84,84,84,84,84,85,85,85,85,85,85,85,85,86,86,86,86,86,86,86,86,87,87,87,87,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,90,90,90,90,90,90,90,90,90,90,90,90,90,90,91,91,91,91,92,92,92,92,92,92,92,92,92,92,92,92,92,92,93,93,93,93,93,93,93,93,94,94,94,94,94,94,95,95,95,95,95,95,95,95,95,95,95,95,95,95,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,98,98,98,98,99,99,99,99,99,99,99,99,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,104,104,104,104,104,104,104,104,104,104,104,105,105,105,105,105,105,105,105,105,105,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,108,108,108,108,108,108,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,111,111,111,111,111,111,112,112,112,112,112,112,112,112,112,112,113,113,113,113,113,114,114,114,114,114,114,114,114,115,115,115,115,115,115,115,115,116,116,116,116,117,117,117,117,117,117,117,117,117,117,117,117,117,117,118,118,118,118,118,118,118,118,118,118,118,118,118,118,118,118,118,118,118,118,119,119,119,119,119,119,119,119,119,119,120,120,120,120,120,120,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,122,122,122,122,122,122,123,123,123,123,123,123,123,123,123,123,123,123,124,124,124,124,124,124,124,124,125,125,125,125,125,125,125,125,126,126,126,126,126,126,126,126,127,127,127,127,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,129,129,129,129,129,129,130,130,130,130,130,130,131,131,131,131,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,135,135,135,135,135,135,135,135,135,135,136,136,136,136,136,136,136,136,137,137,137,137,137,137,137,137,137,137,137,137,137,137,138,138,138,138,138,138,138,138,139,139,139,139,139,139,139,139,139,139,140,140,140,140,140,140,140,140,140,141,141,141,141,141,141,142,142,142,142,142,142,143,143,143,143,143,143,143,143,143,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,146,146,146,146,146,146,146,146,146,146,146,147,147,147,147,147,147,147,147,147,147,147,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,153,153,153,153,154,154,154,154,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,157,157,157,157,157,157,157,157,157,157,158,158,158,158,158,158,158,159,159,159,159,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,161,161,161,161,161,161,162,162,162,162,162,162,162,162,162,162,163,163,163,163,163,163,163,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,169,169,169,169,169,169,170,170,170,170,170,171,171,171,171,171,171,171,171,171,171,171,171,171,171,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,175,175,175,175,175,175,176,176,176,176,176,176,176,176,176,176,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,179,179,179,179,179,179,179,179,180,180,180,180,180,180,181,181,181,181,181,181,182,182,182,182,182,182,183,183,183,183,183,183,184,184,184,184,184,184,184,184,184,184,184,184,184,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,188,188,188,188,188,188,188,188,189,189,189,189,189,189,189,189,189,189,189,190,190,190,190,190,190,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,196,196,196,196,196,196,196,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,206,206,206,206,206,206,206,206,207,207,207,207,207,207,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,209,209,209,209,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,211,211,211,211,211,211,211,211,211,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,216,216,216,216,216,216,216,217,217,217,217,217,217,217,217,217,217,217,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,220,220,220,220,221,221,221,221,221,221,221,221,221,221,222,222,222,222,222,222,223,223,223,223,223,223,224,224,224,224,224,224,224,224,224,224,224,224,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,232,232,232,232,232,232,232,232,232,232,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,234,234,234,234,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,241,241,241,241,241,241,241,241,241,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,244,244,244,244,244,244,244,244,244,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,247,247,247,247,247,247,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,250,250,250,250,250,250,251,251,251,251,251,251,252,252,252,252,252,252,252,252,252,252,252,252,252,253,253,253,253,253,253,254,254,254,254,254,254,255,255,255,255,255,255,256,256,256,256,256,256,256,256,256,256,256,256,256,257,257,257,257,257,257,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,259,259,259,259,259,259,259,259,259,259,259,259,259,260,260,260,260,260,260,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,262,262,262,262,262,262,263,263,263,263,263,263,264,264,264,264,264,264,265,265,265,265,265,265,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,274,274,274,274,274,274,274,274,275,275,275,275,275,275,275,275,275,275,275,275,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,277,277,277,277,277,277,277,277,277,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,279,279,279,279,279,279,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,282,282,282,282,282,282,282,282,282,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,286,286,286,286,286,286,287,287,287,287,287,288,288,288,288,288,288,288,288,288,288,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,293,293,293,293,293,293,293,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,295,295,295,295,295,295,295,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,297,297,297,297,297,297,297,297,297,297,297,297,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,299,299,299,299,299,299,299,299,299,299,300,300,300,300,300,300,300,301,301,301,301,301,301,301,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,303,303,303,303,303,303,303,303,303,303,304,304,304,304,304,304,304,304,304,304,305,305,305,305,305,305,305,305,305,305,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,311,311,311,311,311,311,311,311,311,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,314,314,314,314,314,314,314,315,315,315,315,315,315,315,315,315,316,316,316,316,316,316,316,316,316,316,316,316,316,316,316,316,316,316,316,316,316,316,316,316,316,316,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,319,319,319,319,319,319,319,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,323,323,323,323,323,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,325,325,325,325,325,325,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,330,330,330,330,330,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,338,338,338,338,338,338,339,339,339,339,339,339,340,340,340,340,340,340,340,340,340,340,341,341,341,341,341,341,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,344,344,344,344,344,344,344,344,344,344,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,345,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,347,347,347,347,347,347,347,347,347,347,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,348,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,353,353,353,353,353,353,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,357,357,357,357,358,358,358,358,358,358,358,358,358,359,359,359,359,359,360,360,360,360,360,360,360,360,360,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,361,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,364,364,364,364,364,364,364,364,364,364,364,364,365,365,365,365,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,367,367,367,367,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,368,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,370,370,370,370,370,370,370,370,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,372,372,372,372,372,372,372,372,372,372,372,372,372,372,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,374,375,375,375,375,375,375,375,375,376,376,376,376,376,376,377,377,377,377,377,377,377,377,377,377,377,377,377,377,378,378,378,378,378,378,378,378,378,378,378,378,378,378,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,379,380,380,380,380,380,380,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,382,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,387,387,387,387,387,387,387,387,387,387,387,388,388,388,388,388,388,388,388,389,389,389,389,389,389,389,389,389,389,389,390,390,390,390,390,390,390,391,391,391,391,391,392,392,392,392,392,392,393,393,393,393,393,393,393,393,393,393,393,393,393,393,393,394,394,394,394,394,394,394,394,394,394,394,394,394,395,395,395,395,395,395,395,396,396,396,396,396,396,396,397,397,397,397,398,398,398,398,398,398,398,399,399,399,399,399,399,399,400,400,400,400,400,400,400,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,401,402,402,402,402,402,402,402,403,403,403,403,403,404,404,404,404,404,404,404,404,404,404,404,404,404,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,405,406,406,406,406,406,406,406,406,406,406,406,406,407,407,407,407,407,407,407,408,408,408,408,408,408,408,409,409,409,409,409,409,409,410,410,410,410,410,410,410,411,411,411,411,411,411,411,412,412,412,412,413,413,413,413,413,413,413,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,414,415,415,415,415,416,416,416,416,416,416,416,416,416,416,416,416,417,417,417,417,417,417,417,417,417,417,417,418,418,418,418,418,418,418,419,419,419,419,419,419,419,419,420,420,420,420,420,420,420,420,420,420,420,420,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,421,422,422,422,422,422,423,423,423,423,423,423,423,423,424,424,424,424,424,425,425,425,425,425,425,425,425,425,425,425,426,426,426,426,426,427,427,427,427,427,427,427,427,427,427,427,427,427,428,428,428,428,428,428,428,429,429,429,429,429,429,429,429,429,430,430,430,430,430,430,430,430,430,430,431,431,431,431,431,431,431,431,431,431,431,431,431,431,432,432,432,432,432,432,432,432,432,432,432,432,432,432,433,433,433,433,433,433,433,433,433,433,433,433,433,433,433,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,436,436,436,436,436,436,436,436,436,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,438,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,444,444,444,444,444,444,444,444,444,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,446,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,453,453,453,453,453,453,453,453,453,453,453,453,453,453,453,453,453,453,453,453,453,453,453,453,453,453,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,455,455,455,455,455,455,455,455,455,455,455,455,455,455,455,455,455,455,455,455,455,455,455,455,455,455,455,455,455,455,455,455,455,455,455,455,456,456,456,456,456,456,456,456,456,457,457,457,457,457,457,457,457,457,458,458,458,458,458,458,458,458,458,459,459,459,459,459,459,459,459,459,459,459,459,459,459,459,459,459,459,459,459,459,459,459,459,459,459,459,459,459,459,459,459,459,459,459,459,459,459,459,459,459,459,459,459,459,459,459,459,459,459,459,459,459,459,459,459,459,459,459,460,460,460,460,460,460,460,460,460,461,461,461,461,461,461,461,461,461,462,462,462,462,462,462,462,462,462,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,464,464,464,464,464,464,464,464,464,464,464,464,464,464,464,464,464,464,464,464,464,464,465,465,465,465,465,465,465,465,465,465,465,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,467,468,468,468,468,468,468,468,468,468,468,468,468,468,468,468,468,468,468,468,468,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,470,470,470,470,470,470,470,470,470,470,470,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,472,472,472,472,472,472,472,472,472,472,472,472,472,472,472,472,472,472,472,472,472,472,472,472,472,472,472,472,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,481,481,481,481,481,481,481,481,481,481,481,481,481,481,481,481,481,481,481,481,481,481,481,481,481,481,481,481,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,484,484,484,484,484,484,484,484,484,484,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,506,506,506,506,506,506,506,506,506,506,507,507,507,507,507,507,507,507,507,508,508,508,508,508,508,508,509,509,509,509,509,509,509,509,509,510,510,510,510,510,510,510,510,510,510,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,511,512,512,512,512,512,512,512,512,512,512,512,513,513,513,513,513,513,513,513,513,513,514,514,514,514,514,514,514,514,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515,515]
const indices=[0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,3,5,6,8,1,1,0,0,0,0,0,1,2,4,5,7,7,7,7,8,8,8,8,10,11,13,8,8,7,7,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,5,5,5,5,7,9,9,9,9,10,10,10,10,11,11,11,11,13,14,16,16,16,16,18,16,16,11,11,10,10,9,9,5,5,4,21,2,2,1,1,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,6,6,5,5,4,4,3,3,3,3,3,11,3,3,3,1,1,0,0,0,0,0,0,0,1,3,4,6,7,9,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,2,2,2,4,2,1,7,7,8,8,8,8,9,9,9,9,10,10,10,12,10,9,9,8,8,7,15,15,16,16,16,16,17,17,17,17,18,18,18,20,18,17,17,16,16,15,23,23,24,24,24,24,25,25,25,25,26,26,26,28,26,25,25,24,24,23,31,31,31,31,32,32,32,32,33,33,33,35,33,32,32,31,31,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,5,3,2,2,1,1,0,0,0,1,1,1,1,3,4,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,15,13,12,12,11,11,10,10,9,9,8,8,7,7,6,6,1,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,0,0,1,1,2,3,1,4,4,5,5,5,5,7,8,10,10,10,10,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,23,21,20,20,19,19,18,18,17,17,16,16,15,15,14,14,13,13,12,24,24,25,25,25,25,26,26,26,26,27,27,27,27,28,28,28,28,29,29,29,29,30,30,30,32,30,29,29,28,28,27,27,26,26,25,25,24,33,33,34,34,34,34,35,35,35,35,36,36,36,38,36,35,35,34,34,33,10,10,5,5,4,42,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,2,6,6,6,6,8,8,9,10,12,12,13,13,13,13,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,16,16,17,19,16,22,22,22,24,22,15,15,15,15,15,27,15,15,15,13,13,12,28,28,29,29,29,29,31,31,31,31,32,32,32,32,34,34,35,37,34,40,40,40,42,40,32,32,31,45,31,29,29,28,46,47,8,52,6,6,0,0,0,0,0,0,1,2,4,4,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,11,12,9,9,8,8,7,7,6,15,6,5,4,19,19,20,20,21,21,21,21,22,22,22,22,24,24,24,24,25,25,25,25,27,27,27,27,28,28,28,28,29,29,29,29,30,30,30,30,32,33,35,35,35,35,36,36,36,36,37,37,37,37,39,40,37,37,36,36,35,35,30,30,29,29,28,28,27,43,27,25,25,24,24,22,22,21,21,20,19,47,48,50,51,53,0,0,0,0,0,3,3,4,5,7,8,10,11,13,14,16,3,21,21,21,21,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,25,27,24,30,30,30,30,31,31,31,31,32,32,32,32,34,34,34,35,35,35,36,36,37,39,36,42,42,42,42,44,45,42,42,32,32,31,31,30,30,23,23,23,23,23,48,23,23,23,21,21,0,0,0,1,0,0,0,0,0,1,2,4,4,5,7,8,10,4,11,12,13,13,14,14,14,14,15,15,15,15,17,18,15,15,14,21,14,13,22,23,0,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,5,4,3,3,3,3,3,8,3,3,3,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,8,6,6,5,5,5,5,5,5,5,5,4,4,4,4,4,12,4,4,4,2,2,1,1,0,0,0,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,8,8,9,9,9,9,11,12,13,14,15,16,9,9,8,19,19,19,19,20,20,20,22,20,19,19,6,6,5,5,4,4,0,0,0,0,0,0,1,2,4,5,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,12,12,13,13,13,13,15,16,17,18,19,20,13,13,12,23,23,23,23,24,24,24,26,24,23,23,10,10,9,9,8,8,7,7,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,6,4,3,3,2,2,1,1,0,0,0,1,1,2,2,2,4,2,1,7,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,18,16,15,15,14,14,13,13,12,12,11,11,10,10,9,9,0,0,0,1,1,2,2,2,4,2,1,7,9,9,10,10,10,12,10,9,15,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,24,25,23,28,28,28,28,29,29,29,29,30,30,30,30,31,31,31,31,33,34,36,36,36,36,38,38,39,38,41,42,44,44,44,44,45,45,45,45,47,48,50,50,50,50,51,51,51,51,52,52,52,52,54,55,57,57,57,57,59,60,62,62,62,62,63,63,63,63,64,64,64,64,65,65,65,65,66,66,66,66,67,67,67,69,67,66,66,65,65,64,64,63,63,62,62,57,57,52,52,51,51,50,50,45,45,44,44,36,36,31,31,30,30,29,29,28,28,22,22,22,22,22,72,22,22,22,20,20,19,19,18,18,17,17,0,0,0,1,1,2,2,2,4,2,1,7,9,9,10,10,10,12,10,9,15,17,17,17,17,19,19,20,20,20,20,21,21,21,21,23,23,23,24,24,24,25,25,25,26,26,26,27,27,27,28,29,31,21,21,20,20,19,34,17,17,0,0,0,0,1,1,1,1,3,4,6,6,6,8,6,1,1,0,0,0,1,1,2,2,2,4,2,1,7,8,10,10,11,11,11,13,11,10,16,18,18,18,18,19,19,19,19,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,23,23,23,23,25,25,26,26,26,26,27,27,27,27,29,30,27,27,26,26,25,32,32,33,33,33,33,35,36,33,33,32,37,38,40,40,40,40,41,41,41,41,42,42,42,42,43,43,43,43,44,44,44,44,46,47,44,44,43,43,42,42,41,41,40,40,23,23,22,22,21,21,21,21,21,21,21,21,19,19,18,18,0,0,0,0,0,0,1,2,4,6,7,9,13,13,13,13,13,13,13,13,14,14,14,14,15,15,15,15,17,17,18,19,21,22,24,24,24,24,26,27,24,24,17,30,15,15,14,14,13,35,35,35,35,35,35,35,36,36,36,36,37,37,37,37,39,39,39,39,40,40,40,40,41,41,41,41,43,43,43,43,45,45,45,45,47,47,48,47,49,49,50,51,53,53,54,53,49,57,57,57,57,58,58,58,58,59,59,59,59,61,61,62,61,64,64,64,64,65,65,65,65,67,68,69,69,70,72,69,75,75,75,77,75,65,65,64,64,59,59,58,58,57,57,80,80,80,80,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,83,82,82,82,82,82,86,86,86,86,88,88,88,88,89,89,89,89,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,92,92,92,92,94,92,92,91,91,91,91,91,91,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,98,99,101,97,97,97,97,97,104,97,97,97,91,91,91,91,89,89,88,88,86,86,82,82,82,82,80,80,57,57,45,45,43,43,41,41,40,40,39,39,37,37,36,36,35,109,109,109,109,109,109,109,110,110,110,112,110,109,117,117,117,117,118,118,118,118,120,120,120,120,122,122,122,122,123,123,123,123,125,125,126,127,125,129,129,129,129,130,130,130,130,132,132,132,132,133,133,133,133,134,134,134,134,135,135,135,137,135,134,134,133,133,132,132,130,130,129,129,123,123,122,122,120,120,118,118,117,142,142,142,142,143,143,143,143,143,143,143,143,143,143,143,143,143,143,143,143,144,145,143,143,143,143,143,148,143,143,143,142,153,153,153,153,155,156,158,153,153,0,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,7,5,4,4,4,4,4,4,10,10,10,10,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,19,19,19,21,19,18,18,18,18,18,24,18,18,18,16,16,15,15,14,14,13,13,12,12,27,27,27,27,29,29,29,30,30,31,31,31,32,31,30,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,37,38,40,40,40,40,41,41,41,41,42,42,42,42,44,44,44,45,45,46,45,48,48,48,48,49,49,49,49,50,50,50,50,51,51,51,53,51,50,50,49,49,48,48,42,42,41,41,40,40,36,36,36,36,36,36,56,56,56,56,58,58,59,58,61,56,56,36,36,36,36,27,27,12,12,10,10,4,4,4,4,2,2,1,1,0,0,0,3,3,3,4,5,8,10,10,10,10,14,14,14,14,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,17,17,17,17,19,20,22,17,17,16,16,16,16,16,16,27,27,28,28,28,28,29,29,29,29,31,31,31,32,32,32,33,34,36,29,29,28,28,27,41,41,41,43,41,16,16,16,16,14,14,10,10,3,48,48,48,48,50,50,51,50,52,52,53,52,55,55,55,55,56,56,56,56,60,60,61,61,61,61,63,64,61,61,60,67,67,67,69,67,56,56,55,55,48,48,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,5,3,3,3,3,3,9,3,3,3,1,1,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,10,6,6,5,5,4,4,3,3,3,3,3,3,13,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,23,21,20,20,19,19,18,18,17,28,29,30,31,32,33,37,3,3,3,3,0,0,0,0,0,1,2,4,6,6,6,6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,11,11,12,14,11,17,17,17,17,18,18,18,18,20,20,21,22,20,23,24,18,18,17,17,9,9,8,8,8,8,8,27,8,8,8,6,6,0,0,0,1,0,0,0,0,0,0,1,3,3,3,3,5,6,8,3,3,0,0,0,0,0,1,2,4,5,7,0,0,0,1,2,4,4,4,4,6,8,8,8,8,10,10,11,11,11,13,11,10,14,15,8,8,4,4,0,0,0,0,0,1,2,3,3,4,4,4,4,6,8,4,4,3,9,10,0,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,3,1,1,1,1,1,6,1,1,1,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,3,3,3,3,7,3,3,3,1,1,0,0,0,0,0,0,1,1,1,1,2,2,2,2,4,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,8,7,9,10,6,6,6,6,6,13,6,6,6,2,2,1,1,0,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,5,4,6,6,7,6,10,10,10,10,11,11,11,11,12,12,12,12,14,16,17,19,21,21,21,21,22,22,22,22,23,23,23,25,23,22,22,21,21,12,12,11,11,10,10,2,2,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,2,4,5,6,6,7,7,7,7,8,8,8,8,10,11,8,8,7,14,7,6,15,16,0,0,0,0,0,1,1,1,1,2,2,2,2,4,5,6,2,2,1,1,0,0,0,1,1,1,1,3,3,4,4,4,4,6,8,4,4,3,11,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,21,19,18,18,17,17,16,16,15,15,14,14,13,13,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,3,3,3,3,5,6,8,8,8,10,8,3,3,2,2,1,1,1,1,1,13,1,1,1,0,0,0,0,0,1,1,1,1,3,3,3,3,4,5,7,7,7,9,7,3,12,3,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,5,5,5,6,6,6,6,7,7,7,9,7,6,6,5,12,5,3,3,2,2,1,1,0,0,0,0,0,1,3,0,0,0,1,2,4,0,0,0,0,0,0,1,2,4,5,7,0,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,2,3,4,5,6,7,1,10,0,0,0,0,0,0,0,1,2,4,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,3,3,3,6,6,6,6,7,7,7,7,9,10,14,14,15,17,14,22,7,7,6,6,3,27,27,27,28,28,28,28,29,29,29,29,30,30,30,30,31,31,31,31,32,32,32,34,32,31,31,30,30,29,29,28,28,27,41,43,44,45,46,47,51,51,51,51,53,53,54,53,55,56,57,58,60,64,64,64,64,66,66,66,66,67,68,70,70,71,71,71,73,71,70,66,66,79,80,82,82,85,89,89,90,92,89,82,94,97,102,66,66,64,64,51,51,0,0,0,0,0,0,1,3,0,0,0,1,2,4,5,7,7,7,7,9,10,12,7,7,0,0,0,1,2,4,5,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,9,9,9,10,10,10,11,12,7,7,7,7,7,15,7,7,7,0,0,0,1,2,4,5,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,9,9,9,10,11,7,7,7,7,7,14,7,7,7,0,0,0,1,2,4,5,7,8,10,11,13,14,16,0,0,0,1,0,0,0,1,2,4,5,7,8,10,11,13,14,16,17,19,0,0,0,1,2,4,5,7,0,0,0,1,1,1,3,1,0,0,0,0,1,0,0,0,1,2,4,0,0,0,1,2,4,0,0,0,1,2,4,5,7,8,10,0,0,0,1,2,4,5,7,0,0,0,1,2,4,5,7,0,0,0,1,0,0,0,1,2,4,5,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,9,7,7,7,7,7,12,7,7,7,0,0,0,1,2,4,5,7,7,7,7,9,10,14,14,14,14,16,17,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,23,23,23,24,25,21,21,21,21,21,28,21,21,21,14,14,7,7,0,0,0,1,2,4,4,5,5,5,7,5,4,10,0,0,0,1,0,0,0,1,1,1,1,3,4,6,7,9,1,1,0,0,0,1,2,4,5,7,0,0,0,1,2,4,0,0,0,1,1,1,1,3,4,6,7,9,1,1,0,0,0,1,2,4,5,7,7,7,7,9,9,9,10,10,10,11,12,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,16,14,14,14,14,14,19,14,14,14,7,7,0,0,0,1,2,4,5,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,9,11,11,11,11,13,14,11,11,7,7,7,7,7,17,7,7,7,0,0,0,1,0,0,0,1,2,4,5,7,0,0,0,1,2,4,4,4,4,6,7,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10,11,13,13,13,13,15,16,13,13,9,9,9,9,9,19,9,9,9,4,4,0,0,0,1,2,4,4,4,4,6,7,9,10,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,14,16,17,19,20,22,23,12,12,12,12,12,26,12,12,12,4,4,0,0,0,1,2,4,5,7,7,8,7,9,9,10,9,13,0,0,0,1,2,4,5,7,8,10,11,13,14,16,17,19,20,22,23,25,26,28,0,0,0,0,0,0,1,1,1,3,1,0,0,0,1,2,4,4,4,6,4,0,0,0,1,2,4,5,7,8,10,10,10,10,11,11,11,11,13,14,16,16,16,18,16,11,11,10,10,0,0,0,1,2,4,5,7,7,7,7,9,10,12,12,12,14,12,7,7,0,0,0,1,2,4,0,0,0,1,2,4,5,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,9,7,7,7,7,7,12,7,7,7,0,0,0,1,2,4,4,4,4,6,7,9,9,9,9,10,10,10,10,12,13,15,16,18,10,10,9,9,4,4,0,0,0,1,2,4,0,0,0,1,2,4,5,7,8,10,0,0,0,0,1,0,0,0,1,2,4,5,7,0,0,0,1,2,4,5,7,0,0,0,1,0,0,0,1,2,4,5,7,8,10,10,10,12,10,0,0,0,1,2,4,5,7,7,7,7,9,10,12,12,12,14,12,7,7,0,0,0,1,2,4,4,4,6,4,0,0,0,1,2,4,0,0,0,1,2,4,5,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,9,7,7,7,7,7,12,7,7,7,0,0,0,1,2,4,0,0,0,1,2,4,5,7,7,7,9,7,0,0,0,1,1,1,3,1,0,0,0,1,2,4,5,7,0,0,0,1,2,4,5,7,0,0,0,1,0,0,0,1,2,4,5,7,7,7,7,9,10,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,14,16,12,12,12,12,12,19,12,12,12,7,7,0,0,0,1,2,4,0,0,0,1,2,4,0,0,0,1,0,0,0,1,2,4,5,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,9,7,7,7,7,7,12,7,7,7,0,0,0,1,2,4,4,4,4,6,6,6,7,7,7,8,9,11,11,12,11,13,13,14,13,17,4,4,0,0,0,1,2,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,9,7,7,7,7,7,7,7,7,6,6,6,6,6,13,6,6,6,0,0,0,1,2,4,4,4,6,4,0,0,0,1,2,4,5,7,0,0,0,1,2,4,5,7,8,10,11,13,14,16,0,0,0,1,2,4,5,7,0,0,0,1,2,4,5,7,8,10,0,0,0,0,0,1,2,4,6,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,2,4,1,7,0,0,0,3,3,3,3,4,4,4,4,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,8,10,7,13,13,14,16,13,21,21,21,23,21,6,6,6,6,6,26,6,6,6,4,4,3,33,33,33,33,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,36,36,37,37,37,37,39,41,37,37,36,44,44,44,46,44,35,35,35,35,35,35,49,49,49,49,50,50,50,50,51,51,51,51,52,52,52,52,53,53,53,53,54,54,54,54,55,55,55,55,56,56,56,56,57,57,57,57,58,58,58,58,60,60,61,61,61,63,61,60,64,64,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,66,66,66,68,66,65,65,65,65,65,65,65,65,64,74,74,74,74,75,75,75,75,77,77,78,78,78,78,80,81,83,78,78,77,86,86,86,86,87,87,87,87,89,89,90,92,89,97,97,97,97,98,98,98,98,99,99,99,99,100,100,100,100,102,103,105,105,105,105,106,106,106,108,106,105,105,100,100,99,99,98,98,97,97,87,87,86,86,75,75,74,74,58,58,57,57,56,56,55,55,54,54,53,53,52,52,51,51,50,50,49,49,35,35,35,35,33,33,0,0,0,3,3,6,6,6,6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,10,12,9,15,15,15,17,15,8,8,8,8,8,8,20,20,20,20,22,23,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,27,27,27,29,27,26,26,25,25,25,25,25,25,25,25,24,33,34,20,20,8,8,8,8,6,6,3,39,39,40,40,40,40,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,43,43,44,45,43,48,48,48,50,48,42,42,42,42,42,42,53,53,53,53,54,54,54,54,55,55,55,55,57,59,55,55,54,54,53,53,42,42,42,42,40,40,39,64,65,66,66,67,68,69,70,66,71,72,0,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,1,1,3,1,0,0,0,0,3,3,3,3,4,4,5,7,4,3,15,15,15,15,17,17,18,17,19,19,20,19,23,23,24,25,23,26,26,27,26,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,56,57,58,58,59,58,60,61,15,15,0,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,6,8,4,4,3,3,3,3,3,11,3,3,3,1,1,0,0,0,0,0,0,1,2,4,5,7,8,10,10,10,12,10,0,0,0,0,0,0,1,2,4,5,7,8,10,10,10,12,10,0,0,0,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,9,7,6,6,5,5,4,4,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,3,3,3,3,5,6,8,3,3,0,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,2,3,3,4,4,4,6,4,3,7,8,0,0,0,0,0,1,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,3,3,3,3,4,4,4,4,5,5,5,5,7,7,8,8,9,8,7,10,10,11,11,12,11,14,10,17,17,17,19,17,5,5,4,4,3,22,3,1,1,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,6,4,3,3,3,3,3,3,9,9,9,9,10,10,10,10,12,13,15,10,10,9,18,9,3,3,3,3,1,1,0,0,0,0,0,0,0,1,1,1,1,3,3,3,3,4,5,7,7,7,9,7,3,3,12,14,3,3,1,1,0,0,0,0,0,0,1,1,1,1,3,3,3,3,4,5,7,7,7,9,7,3,12,3,1,1,0,0,0,0,0,0,0,1,1,1,1,3,5,5,5,5,6,7,9,9,9,11,9,5,14,5,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,3,3,4,5,7,3,12,13,15,0,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,1,1,2,2,2,2,4,4,5,6,8,4,11,2,2,1,14,15,16,18,0,0,0,0,0,1,1,2,2,2,2,4,4,5,6,8,4,11,2,2,1,14,15,16,18,0,0,0,0,0,1,0,0,0,0,0,1,1,2,1,5,0,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,6,7,9,4,4,2,2,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,4,5,7,9,2,2,1,1,0,0,0,0,0,1,2,4,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,3,5,1,1,0,0,0,0,0,1,2,4,5,7,7,7,7,9,9,10,10,10,10,12,14,10,10,9,17,7,7,0,0,0,0,0,0,1,1,1,1,3,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,5,5,5,5,5,5,5,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,10,12,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,0,1,2,4,0,0,0,0,0,0,1,2,4,5,7,0,0,0,0,0,1,0,0,0,0,0,1,2,4,6,6,6,6,7,7,7,7,9,9,10,10,10,10,11,11,11,11,13,13,14,15,13,16,17,11,11,10,10,9,20,7,7,6,6,0,0,0,1,2,4,5,7,7,7,7,8,8,8,8,10,11,13,8,8,7,7,0,0,0,0,0,1,3,5,5,5,5,7,7,8,7,9,9,10,12,9,15,15,15,15,17,19,19,19,19,21,22,24,19,19,15,15,5,5,0,0,0,0,0,0,1,2,4,4,4,4,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,8,10,6,6,6,6,6,13,6,6,6,4,4,0,0,0,0,0,0,1,2,4,5,7,7,7,7,9,11,7,7,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,3,3,4,3,7,1,1,0,0,0,0,0,0,0,1,1,2,2,2,4,2,1,5,5,6,6,6,6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,10,11,12,8,8,8,8,8,15,8,8,8,6,6,5,16,17,0,0,0,0,0,1,2,4,4,4,4,6,6,7,6,9,9,9,9,10,10,10,10,12,12,12,12,14,14,14,14,16,17,19,19,19,19,21,22,23,24,26,26,26,28,26,19,19,14,14,12,12,10,10,9,9,4,4,0,0,0,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,8,6,5,5,4,4,3,3,2,2,1,11,13,14,16,16,17,17,17,19,17,16,22,26,26,26,27,27,27,27,28,28,28,28,30,30,31,31,31,31,32,32,32,32,34,34,35,34,32,32,31,31,30,38,38,38,38,39,39,39,39,40,40,40,40,41,41,41,41,42,42,42,42,43,43,43,43,44,44,44,46,44,43,43,42,42,41,41,40,40,39,39,38,38,28,28,27,27,26,51,51,51,52,52,52,52,53,53,53,53,54,54,54,54,56,56,57,56,58,58,59,58,61,61,61,61,62,62,62,62,63,63,63,63,64,64,64,64,65,65,65,65,66,66,66,68,66,65,65,64,64,63,63,62,62,61,61,54,54,53,53,52,52,51,73,73,73,74,75,77,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,80,79,79,79,79,79,79,79,73,86,86,86,86,86,87,87,87,87,89,90,92,93,95,95,95,95,96,96,96,96,98,99,96,96,95,95,87,87,86,104,104,104,104,105,105,105,105,106,106,106,106,107,107,107,107,108,108,108,108,109,109,109,109,111,111,112,111,113,113,114,114,114,114,116,114,114,113,119,121,121,121,122,122,122,123,124,126,127,128,128,129,129,129,129,131,131,131,132,132,132,133,133,133,134,134,135,135,135,137,135,134,140,140,140,142,140,129,129,128,143,144,146,146,146,146,147,147,147,147,148,148,148,148,149,149,149,149,150,150,150,150,152,152,152,152,154,154,155,157,154,160,160,161,163,160,166,166,167,166,169,169,170,169,172,172,173,172,175,175,176,176,177,176,175,179,180,182,182,182,184,182,152,152,150,150,149,149,148,148,147,147,146,146,109,109,108,108,107,107,106,106,105,105,104,104,0,0,0,0,0,1,1,1,1,3,5,6,8,9,11,12,14,15,17,18,20,20,21,22,20,25,25,25,27,25,1,1,0,0,0,0,0,1,2,6,6,6,7,7,7,9,7,6,14,14,14,14,15,15,15,15,17,19,19,20,21,19,24,24,25,26,24,29,29,30,31,29,34,34,35,36,34,39,39,40,41,39,44,44,45,46,44,49,49,50,51,49,54,15,15,14,14,0,0,0,0,0,3,3,3,3,4,5,7,3,12,12,12,12,13,13,13,13,14,14,14,16,14,13,13,12,12,0,0,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,5,7,7,7,7,8,9,7,12,12,13,15,16,12,19,19,19,19,21,23,24,27,28,30,19,19,5,5,4,4,3,3,0,0,0,0,0,1,1,2,2,2,2,4,6,6,6,8,6,2,2,1,9,10,11,12,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,8,8,9,9,10,10,10,12,10,9,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,22,20,20,19,19,18,18,17,17,16,16,15,15,8,25,6,6,5,5,4,4,0,0,0,1,0,0,0,0,0,1,2,4,6,7,9,13,13,13,13,13,14,14,14,14,15,15,15,15,17,17,18,18,18,18,20,20,21,21,21,21,23,24,21,21,20,25,25,26,26,26,28,26,25,18,18,17,32,15,15,14,14,13,37,37,37,37,37,38,39,41,41,41,41,43,43,44,44,44,44,46,47,49,44,44,43,52,41,41,37,57,57,57,59,57,0,0,0,0,0,0,1,2,4,0,0,0,0,0,1,2,4,5,7,7,8,8,8,8,10,12,8,8,7,15,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,5,5,5,5,6,6,6,6,8,9,6,6,5,5,4,12,2,2,1,1,0,0,0,0,0,1,1,1,1,3,5,5,5,5,7,7,8,7,9,9,10,12,9,15,17,5,5,1,1,0,0,0,0,0,1,3,3,3,3,5,5,6,6,6,6,7,7,7,7,9,10,12,7,7,6,6,5,3,3,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,3,3,4,4,4,6,4,3,9,10,11,13,13,13,13,15,17,17,17,17,19,21,17,17,13,13,0,0,0,0,0,1,1,2,3,4,4,5,7,4,1,9,9,10,10,10,10,10,11,10,14,15,17,19,19,19,19,20,20,20,20,22,22,22,22,23,23,23,23,24,24,24,24,25,25,25,27,25,24,24,23,23,22,22,30,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,33,33,33,35,33,32,32,32,32,32,38,32,32,32,22,22,20,20,19,19,9,0,0,0,1,0,0,0,0,0,1,2,4,5,7,0,0,0,0,0,1,0,0,0,1,2,4,0,0,0,0,0,1,2,4,4,4,6,4,0,0,0,0,0,0,2,2,3,3,3,5,3,2,8,0,0,0,0,0,0,1,1,2,2,2,4,2,1,7,0,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,0,1,1,2,3,4,5,6,7,1,10,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,6,4,3,3,2,2,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,5,3,2,2,1,1,0,0,0,0,0,0,1,2,4,4,4,4,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,9,7,6,6,6,6,6,12,6,6,6,4,4,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,1,1,1,3,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,7,7,7,9,7,6,6,5,5,5,5,5,5,5,5,1,1,0,0,0,1,0,0,0,0,0,0,1,1,2,2,2,2,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,7,7,8,7,10,5,5,4,4,4,4,4,13,4,4,4,2,2,1,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,20,18,17,17,16,16,16,16,16,16,16,16,0,0,0,0,0,0,1,1,1,1,3,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,8,6,5,5,5,5,5,5,5,5,1,1,0,0,0,0,0,0,0,1,1,1,1,3,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,7,7,7,7,9,9,9,9,10,10,10,10,12,12,13,14,12,17,10,10,9,20,9,7,7,6,6,5,5,5,5,5,5,5,5,1,1,0,0,0,0,0,3,3,3,3,4,4,4,4,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,9,9,9,9,10,10,10,10,12,13,15,15,15,17,15,10,10,9,20,9,7,7,6,6,6,6,6,23,6,6,6,4,4,3,28,28,28,28,29,29,29,29,31,31,31,31,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,34,33,33,33,33,33,33,37,37,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,41,41,41,43,41,40,40,40,40,40,40,40,40,37,45,45,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,49,49,49,51,49,48,48,48,48,48,48,48,48,45,55,33,33,33,33,31,31,29,29,28,60,60,61,62,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,67,68,72,73,64,64,64,64,64,76,64,64,64,60,83,83,83,83,84,84,84,84,85,85,85,85,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,88,88,88,88,89,89,89,89,91,93,93,93,95,93,89,89,88,88,87,87,87,87,87,87,100,100,100,100,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,103,103,103,103,104,104,104,104,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,107,106,106,106,106,106,106,110,106,106,106,106,104,104,103,103,102,102,102,102,102,102,115,116,118,118,118,118,119,119,119,119,121,123,123,123,123,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,126,126,126,128,126,125,125,125,125,125,125,133,133,133,133,135,136,138,138,138,138,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,141,141,141,141,142,142,142,142,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,145,145,145,147,145,144,144,144,144,144,144,150,150,150,152,150,144,144,144,144,142,142,141,141,140,140,140,140,140,140,155,157,140,140,140,140,138,138,133,133,125,125,125,125,123,123,119,119,118,118,102,102,102,102,100,100,87,87,87,87,85,85,84,84,83,83,0,0,0,0,0,0,1,2,6,6,6,6,6,7,7,7,7,8,8,8,10,8,7,7,6,15,0,0,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,9,10,10,10,12,10,9,15,15,16,16,16,18,16,15,21,21,22,22,22,22,23,23,23,25,23,22,22,21,28,28,29,29,29,29,30,30,30,32,30,29,29,28,35,35,36,36,36,36,37,37,37,39,37,36,36,35,42,42,43,43,43,43,44,44,44,46,44,43,43,42,49,49,49,49,50,50,50,52,50,49,49,7,7,6,6,5,5,4,4,3,3,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,1,1,1,3,4,6,6,7,7,7,7,8,8,8,10,8,7,7,6,13,13,13,13,14,14,14,16,14,13,13,1,1,0,0,0,0,0,1,2,4,6,6,6,6,7,7,7,9,7,6,6,0,0,0,0,1,1,1,3,1,0,0,0,1,1,2,2,2,4,2,1,7,8,10,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,20,21,23,23,23,23,24,24,24,26,24,23,23,18,18,17,17,16,16,15,15,14,14,13,13,12,12,0,0,0,0,0,1,2,4,6,6,6,6,7,7,7,9,7,6,6,0,0,0,0,0,1,0,0,0,1,2,4,4,4,4,6,6,7,8,10,10,10,10,12,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,16,16,16,16,18,18,19,19,19,21,19,18,22,22,23,23,23,23,24,24,24,24,26,27,24,24,23,23,22,16,16,15,15,14,14,14,14,14,14,31,33,14,14,14,14,10,10,6,34,34,35,36,38,38,38,38,40,42,42,42,42,43,43,43,43,44,44,44,44,45,45,45,45,47,47,48,47,50,50,51,51,51,53,51,50,54,54,55,55,55,55,56,56,56,56,58,59,56,56,55,55,54,45,45,44,44,43,43,42,42,63,65,42,42,38,38,34,66,67,68,69,70,71,4,4,0,0,0,0,0,1,2,4,6,6,6,6,7,7,7,7,9,10,12,12,12,12,13,13,13,13,14,14,14,14,16,16,17,17,17,17,19,20,22,17,17,16,25,26,28,30,14,14,13,13,12,12,7,7,6,6,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,3,5,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,3,5,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,8,6,5,5,4,4,3,11,3,1,1,0,0,0,0,0,1,1,1,1,3,5,1,1,0,0,0,0,0,1,0,0,0,1,1,2,2,2,2,4,4,5,5,5,5,7,7,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,8,8,8,8,12,8,8,8,7,5,5,4,2,2,1,17,18,19,19,20,20,20,20,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,24,24,24,26,24,23,27,28,22,22,22,22,22,22,31,31,31,31,33,35,36,31,31,22,22,22,22,20,20,19,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,2,3,5,5,5,5,7,9,5,5,1,10,11,12,13,0,0,0,1,1,2,2,2,2,3,3,3,5,3,2,2,1,8,10,10,10,10,11,11,11,11,12,12,12,12,14,14,15,15,15,15,16,16,16,16,18,19,20,21,16,16,15,15,14,24,24,24,24,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,28,29,27,32,32,33,34,32,37,37,37,37,39,40,42,37,37,26,26,26,26,26,45,26,26,26,24,24,12,12,11,11,10,10,0,0,0,1,1,2,4,4,4,4,5,5,5,7,5,4,4,1,10,11,13,13,13,13,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,16,16,16,18,16,15,15,15,15,15,21,15,15,15,13,13,0,0,0,1,2,4,6,6,7,7,7,7,8,8,8,10,8,7,7,6,13,15,15,15,15,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,18,18,18,18,20,21,22,22,23,23,23,23,24,24,24,26,24,23,23,22,18,18,17,17,17,17,17,30,17,17,17,15,15,0,0,0,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,7,5,4,4,3,3,2,2,1,10,12,12,12,12,13,13,13,15,13,12,12,0,0,0,1,1,2,4,4,4,4,5,5,5,7,5,4,4,1,10,11,13,13,13,13,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,16,16,16,18,16,15,15,15,15,15,21,15,15,15,13,13,0,0,0,1,1,2,2,2,2,3,3,3,5,3,2,2,1,8,10,10,10,10,12,12,13,13,13,13,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,16,16,17,19,16,22,22,22,24,22,15,15,15,15,15,15,27,15,15,15,15,13,13,12,30,10,10,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,22,22,22,22,23,23,23,23,24,24,24,24,25,25,25,25,26,26,26,26,27,27,27,27,28,28,28,28,29,29,29,29,30,30,30,30,31,31,31,31,32,32,32,32,33,33,33,33,34,34,34,34,35,35,35,35,36,36,36,38,36,35,35,34,34,33,33,32,32,31,31,30,30,29,29,28,28,27,27,26,26,25,25,24,24,23,23,22,22,21,21,20,20,19,19,18,18,17,17,16,16,15,15,14,14,13,13,12,12,11,11,10,10,9,9,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,0,1,2,4,0,0,0,0,0,1,2,4,5,7,8,10,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,5,3,2,2,1,1,0,0,0,1,2,3,4,5,6,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,12,12,12,12,13,13,13,13,15,15,16,15,18,13,13,12,21,12,10,10,9,9,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,1,2,0,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,11,11,13,11,6,6,5,5,4,4,3,3,3,3,3,16,3,3,3,1,1,0,0,0,0,1,1,1,3,1,0,0,0,0,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,11,12,14,14,14,14,16,16,17,17,18,17,16,19,19,20,19,21,22,24,24,25,27,27,27,27,28,28,28,28,29,29,29,29,30,30,30,30,31,31,31,31,32,32,32,34,32,31,31,30,30,29,29,28,28,27,27,24,14,14,7,7,6,6,5,5,4,4,4,4,4,4,4,4,3,41,42,44,44,44,44,46,47,51,51,51,51,53,53,54,54,54,54,55,55,55,55,57,58,55,55,54,54,53,63,51,51,44,44,0,0,0,0,0,1,1,1,1,3,5,5,5,5,7,9,9,9,9,10,10,10,12,10,9,9,5,5,1,1,0,0,0,0,0,0,1,1,1,1,2,2,2,2,4,6,6,7,6,8,8,9,11,8,14,16,2,2,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,6,7,4,4,3,3,3,3,3,10,3,3,3,1,1,0,0,0,0,0,1,2,4,6,6,6,6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,10,11,11,12,13,15,15,15,17,15,11,18,19,8,8,8,8,8,22,8,8,8,6,6,0,0,0,0,0,1,1,1,1,2,2,2,4,2,1,1,0,0,0,0,0,1,2,4,6,6,6,6,7,7,7,7,8,8,8,8,10,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,15,15,16,18,15,21,21,22,23,21,13,13,12,12,12,12,12,27,12,12,12,8,8,7,7,6,6,0,0,0,0,0,1,2,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,6,4,4,3,3,3,3,3,9,3,3,3,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,3,3,3,3,4,4,4,6,4,3,3,0,0,0,0,0,1,2,4,4,4,6,4,0,0,0,0,0,0,1,1,2,2,2,2,4,5,2,2,1,8,8,8,8,10,11,13,13,13,15,13,8,8,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,2,2,3,3,3,3,4,4,4,4,6,8,4,4,3,3,2,1,12,12,12,12,13,13,13,13,14,14,14,16,14,13,13,12,12,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,5,3,2,2,1,1,0,0,0,0,0,1,2,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,11,11,11,11,12,12,12,12,14,15,16,17,18,19,12,12,11,24,24,24,24,25,25,25,25,26,26,26,26,28,28,29,28,31,26,26,25,25,34,34,34,34,35,35,35,35,37,38,35,35,34,34,25,25,24,43,43,43,43,44,44,44,44,46,44,44,43,51,51,51,52,51,57,57,57,57,58,57,63,63,63,63,64,64,64,64,65,65,65,65,67,69,69,70,71,73,74,76,69,79,79,80,79,82,83,85,65,65,64,64,63,63,9,9,8,8,7,7,6,6,0,0,0,0,3,3,3,3,3,4,4,5,5,5,5,7,8,10,12,13,15,5,5,4,16,16,17,16,20,22,3,29,30,31,32,33,34,35,36,37,38,40,41,42,43,44,45,49,49,49,49,51,55,55,55,55,56,56,56,56,58,60,64,64,64,64,66,70,74,74,74,74,76,76,77,76,79,79,80,79,82,82,83,82,85,85,86,85,90,90,90,90,92,94,90,90,74,74,64,64,56,56,55,55,49,49,0,0,0,1,1,2,2,2,4,2,1,7,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,22,22,22,22,23,23,23,25,23,22,22,21,21,20,20,19,19,18,18,18,18,18,28,18,18,18,16,16,15,15,14,14,13,13,12,12,11,11,10,10,9,9,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,10,11,13,14,16,17,19,19,19,19,20,20,20,20,21,21,21,21,23,24,26,21,21,20,20,19,19,8,8,7,7,6,6,5,5,3,3,2,2,1,1,0,0,0,0,1,1,1,3,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,3,1,1,1,1,1,6,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,3,1,1,1,1,1,6,1,1,1,0,0,0,0,1,2,4,0,0,0,0,1,2,4,5,7,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,4,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,4,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,8,6,5,5,4,4,0,0,0,0,1,2,4,0,0,0,1,1,2,2,2,2,4,4,5,4,6,6,7,6,10,10,10,10,12,12,13,13,13,13,15,15,16,15,17,17,18,20,17,13,13,12,24,26,10,10,2,2,1,27,27,28,28,29,28,30,30,31,30,34,27,35,36,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,4,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,5,4,6,6,7,9,6,12,14,2,2,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,3,4,5,6,8,9,11,12,14,1,1,0,0,0,0,0,1,0,0,0,0,0,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,9,9,9,10,12,13,15,15,15,15,17,19,19,19,19,21,22,19,19,15,15,9,27,27,27,27,28,28,28,30,28,27,35,35,35,35,36,36,36,36,37,37,37,37,39,37,37,36,36,35,44,44,45,45,45,46,46,46,47,48,50,51,44,56,56,56,56,57,57,57,57,58,58,58,58,60,62,62,62,62,63,62,68,68,68,68,70,70,70,70,71,71,71,71,72,72,72,72,74,74,74,74,75,75,75,75,77,78,79,81,82,85,86,88,88,88,88,89,89,89,89,91,93,95,89,89,88,88,75,75,74,74,72,72,71,71,70,70,68,68,58,58,57,57,56,56,7,7,6,6,5,5,4,4,3,3,0,0,0,0,0,3,3,3,3,4,6,3,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,17,18,22,24,15,15,14,14,13,13,12,12,11,11,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,6,6,6,6,8,8,9,9,10,10,10,12,10,9,15,15,15,17,15,8,20,20,20,20,22,23,25,26,28,28,28,30,28,20,20,6,6,4,4,3,3,2,2,1,1,0,0,0,1,1,2,2,2,4,2,1,7,9,9,9,9,11,13,9,9,0,0,0,0,1,0,0,0,0,0,0,1,2,4,4,4,4,5,5,5,5,7,7,8,8,9,8,10,10,11,10,7,14,14,15,15,15,15,17,15,15,14,20,20,20,20,21,21,21,21,22,22,22,24,22,21,21,20,20,5,5,4,4,0,0,0,0,0,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,9,9,9,9,10,10,10,10,11,11,11,11,13,15,16,18,18,18,18,19,19,19,19,20,20,20,20,22,24,20,20,19,19,18,18,11,11,10,10,9,29,29,29,29,30,30,30,32,30,29,37,37,37,37,38,38,38,40,38,37,45,45,46,46,46,47,47,47,48,49,51,52,45,57,57,57,57,59,59,59,59,60,59,65,65,65,65,67,67,67,67,68,68,68,68,69,69,69,69,71,71,71,71,72,72,72,72,74,75,76,78,79,82,83,85,86,88,90,92,72,72,71,71,69,69,68,68,67,67,65,65,57,57,7,7,6,6,5,5,4,4,3,3,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,9,9,9,9,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,17,15,14,14,13,13,12,12,11,11,9,9,8,8,7,7,7,7,7,20,7,7,7,3,3,2,2,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,11,13,9,9,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,6,4,3,3,2,2,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,6,8,4,4,3,3,2,2,1,1,0,0,0,0,1,1,2,2,2,2,4,6,2,2,1,9,9,9,11,9,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,0,0,0,1,2,4,6,6,6,6,8,10,10,10,10,11,11,11,11,12,12,12,12,14,15,17,17,17,17,18,18,18,18,20,20,21,21,21,21,22,22,22,22,23,23,23,23,24,24,24,24,26,26,27,26,29,29,29,29,31,32,29,29,24,24,23,23,22,22,21,21,20,18,18,17,17,12,12,11,11,10,10,6,6,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,5,5,5,5,9,10,14,14,14,14,15,15,15,15,17,17,17,17,19,19,20,20,20,20,22,22,22,23,24,20,20,19,25,25,26,26,26,26,28,28,28,29,30,26,26,25,31,32,36,17,17,15,15,14,14,5,5,4,2,2,1,1,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,3,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,10,6,6,5,5,4,4,3,15,15,15,15,17,19,15,15,0,0,0,0,0,1,1,1,1,2,2,2,4,2,1,1,0,0,0,0,0,1,1,1,3,1,0,0,0,0,1,1,1,1,3,4,5,6,7,8,10,1,1,0,0,0,0,1,1,1,1,2,2,2,2,4,5,6,7,8,9,10,11,12,13,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,22,22,22,24,22,21,21,20,20,19,19,18,18,17,17,16,16,15,15,15,15,15,27,15,15,15,2,2,1,1,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,9,10,11,15,15,15,15,17,17,18,19,21,17,26,26,27,27,27,27,29,30,32,27,27,26,37,37,37,37,38,38,38,38,40,40,41,40,43,43,44,43,48,48,49,49,49,49,51,52,53,55,49,49,48,60,60,60,60,61,61,61,61,63,63,64,64,64,64,65,65,65,65,67,69,69,70,72,69,65,65,64,64,63,78,78,79,79,79,79,81,82,83,84,86,79,79,78,89,90,61,61,60,60,38,38,37,37,15,15,9,93,93,93,93,94,94,94,94,95,95,95,95,97,98,100,95,95,94,94,93,93,7,7,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,1,2,4,5,7,8,12,12,12,12,13,13,14,14,14,14,16,16,16,16,17,17,17,19,17,16,16,14,14,13,20,20,21,21,21,23,21,20,24,25,12,30,30,30,30,31,31,32,32,32,32,34,34,34,34,35,35,35,37,35,34,34,32,32,31,38,38,39,39,39,41,39,38,42,43,30,48,48,49,51,51,51,53,51,48,58,58,58,58,59,59,59,59,60,60,60,60,61,61,61,63,61,60,60,59,59,58,58,0,0,0,0,0,3,3,3,3,4,4,4,4,5,5,5,7,5,4,4,3,3,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,5,5,5,5,6,6,6,6,8,8,8,8,10,10,11,10,12,12,13,12,14,14,15,14,16,17,19,19,19,19,20,20,20,20,21,21,21,23,21,20,20,19,19,8,8,6,6,5,5,4,4,2,2,1,1,0,0,0,0,0,1,1,1,1,3,4,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,11,11,11,11,12,12,12,12,14,15,17,17,17,17,19,19,20,20,20,20,21,21,21,21,22,22,22,22,24,24,25,27,24,30,22,22,21,21,20,20,19,17,17,12,12,11,11,9,9,8,8,7,7,6,6,1,1,0,0,0,0,3,3,3,3,5,5,5,5,6,6,6,6,8,8,8,8,9,9,9,9,11,12,9,9,8,15,8,6,6,5,20,20,20,20,21,21,21,21,22,22,22,22,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,26,26,26,26,27,27,27,27,28,28,28,28,29,29,29,29,30,30,30,30,31,31,31,31,33,35,35,35,35,37,39,39,39,39,41,43,43,43,45,43,39,39,35,35,31,31,30,30,29,29,28,28,27,27,26,26,25,25,24,24,24,24,24,48,24,24,24,22,22,21,21,20,20,3,3,0,0,0,0,0,0,0,0,1,1,1,3,1,0,0,0,0,1,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,1,1,1,5,5,5,5,6,6,6,6,7,7,7,7,9,10,12,12,12,12,14,15,16,18,18,18,24,18,12,12,7,7,6,6,5,5,1,1,0,0,0,0,0,0,0,1,2,6,6,6,6,6,6,6,7,7,7,7,8,8,8,8,10,10,10,10,12,14,14,14,14,16,18,18,18,18,20,21,22,23,24,25,27,18,18,14,14,10,10,8,8,7,7,6,32,32,32,32,32,32,32,33,33,33,33,34,34,34,34,35,35,35,35,36,36,36,36,37,37,37,37,41,41,41,41,43,45,45,45,45,47,49,49,49,49,51,52,54,54,54,54,55,55,55,55,57,58,62,63,64,65,66,67,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,72,72,72,72,73,73,73,73,74,74,74,74,75,75,75,75,76,76,76,76,78,80,80,80,80,82,83,85,85,85,85,86,86,86,86,88,90,90,90,90,91,91,91,91,93,95,96,91,91,90,90,86,86,85,85,80,80,76,76,75,75,74,74,73,73,72,72,71,71,71,71,71,71,99,101,71,71,71,71,55,55,54,54,49,49,45,45,41,41,37,37,36,36,35,35,34,34,33,33,32,106,106,106,107,107,107,107,108,108,108,108,110,111,112,113,114,116,116,116,116,118,120,120,120,120,122,124,124,124,124,126,128,129,130,131,133,124,124,120,120,116,116,108,108,107,107,106,138,138,138,138,139,139,139,139,141,143,143,143,143,145,147,143,143,139,139,138,152,152,152,152,153,153,153,153,154,154,154,154,156,156,157,157,157,157,159,161,157,157,156,164,154,154,153,153,152,169,169,169,169,170,170,171,171,171,171,173,174,171,171,170,169,180,180,180,180,181,181,181,181,183,183,184,183,185,185,186,185,188,188,188,188,189,189,189,189,191,192,194,194,194,194,196,198,198,198,198,199,199,199,199,201,202,204,205,199,199,198,198,194,194,189,189,188,188,181,181,180,180,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,6,4,3,3,2,2,1,1,0,0,0,0,0,1,1,2,3,1,4,5,0,0,0,1,0,0,0,1,2,4,8,8,8,9,9,9,9,11,11,11,11,12,12,12,14,12,11,17,11,9,9,8,22,22,22,22,24,24,24,25,25,25,25,27,27,28,28,28,28,29,29,29,29,31,32,29,29,28,28,27,33,33,34,34,34,34,35,35,35,35,36,36,36,36,37,37,37,37,39,40,41,42,37,37,36,36,35,35,34,34,33,45,45,45,47,45,25,25,24,52,52,53,54,56,57,59,59,59,59,60,60,60,60,61,61,61,61,62,62,62,62,63,63,63,63,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,66,66,67,66,69,69,70,69,72,72,73,72,75,75,76,75,78,78,79,78,65,65,65,65,65,65,82,83,85,86,88,89,91,92,94,95,97,65,65,65,65,63,63,62,62,61,61,60,60,59,59,52,102,102,103,104,106,107,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,110,111,109,109,109,109,109,114,109,109,109,102,119,119,120,120,120,120,122,123,120,120,119,22,22,0,0,0,1,0,0,0,1,1,1,1,2,2,2,2,4,5,7,7,7,7,9,10,11,12,13,14,7,7,2,2,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,5,7,7,7,7,8,8,8,10,8,7,7,4,13,2,2,1,1,0,0,0,0,0,1,3,4,0,0,0,0,0,0,1,1,1,1,2,2,2,4,2,1,1,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,6,8,9,3,3,2,2,1,1,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,6,8,9,3,3,2,2,1,1,0,0,0,0,0,0,1,3,0,0,0,0,0,1,0,0,0,1,2,4,4,4,4,6,7,9,4,4,0,0,0,1,2,4,4,4,4,6,7,9,4,4,0,0,0,0,0,1,1,1,1,3,3,4,4,4,4,8,9,13,14,15,16,17,18,22,4,4,3,1,1,0,0,0,1,2,4,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,5,6,6,6,6,8,8,9,8,10,10,11,10,6,6,5,14,14,15,15,16,15,17,17,18,17,14,21,3,3,2,2,1,1,0,0,0,1,2,4,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,13,14,16,16,16,16,17,17,17,17,19,21,21,21,21,22,22,22,24,22,21,21,17,17,16,16,11,11,10,10,9,9,8,29,29,29,29,31,31,31,31,32,32,32,32,33,33,33,33,35,36,33,33,32,39,32,31,44,44,44,44,45,45,45,45,47,47,47,47,48,48,48,48,50,51,48,48,47,54,47,45,45,44,59,59,59,59,60,60,60,60,61,61,61,61,63,63,64,63,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,67,67,67,67,68,68,68,68,69,69,69,69,70,70,70,70,71,71,71,71,72,72,72,72,73,73,73,73,74,74,74,74,75,75,75,75,76,76,76,76,77,77,77,77,78,78,78,78,79,79,79,79,81,83,83,83,83,85,85,86,86,86,86,87,87,87,87,89,91,91,91,91,93,95,97,91,91,87,87,86,86,85,100,83,83,79,79,78,78,77,77,76,76,75,75,74,74,73,73,72,72,71,71,70,70,69,69,68,68,67,67,66,66,66,66,66,103,66,66,66,61,61,60,60,59,59,29,29,0,0,0,0,3,3,3,3,5,5,5,5,6,6,7,7,7,9,7,6,12,14,14,15,17,14,22,24,24,24,24,25,25,25,25,27,29,25,25,24,24,5,34,34,34,34,35,36,38,40,40,40,40,44,44,44,44,45,45,45,45,46,46,46,46,48,49,53,53,53,53,54,54,54,54,55,55,55,55,57,58,62,62,62,62,63,63,63,63,64,64,64,64,66,67,64,64,63,63,62,62,55,55,54,54,53,53,46,46,45,45,44,44,40,40,34,72,72,72,72,73,72,80,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,114,115,117,118,119,120,121,122,123,125,126,127,129,131,133,135,136,137,138,140,141,142,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,248,3,3,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,6,7,8,9,4,4,3,3,3,3,3,13,3,3,3,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,7,5,4,4,3,3,2,2,1,1,0,0,0,0,0,1,1,1,1,3,3,3,3,4,4,4,4,6,4,4,3,9,3,1,1,0,0,0,1,1,1,1,3,5,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,3,5,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,2,2,2,4,2,1,7,9,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,2,2,2,2,4,5,7,2,2,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,1,2,4,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,12,10,9,9,8,8,7,7,6,6,0,0,0,0,1,1,1,1,3,5,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,8,6,5,5,4,4,3,13,13,13,13,14,14,14,14,15,15,15,15,17,17,18,18,18,18,20,20,21,21,21,21,23,25,21,21,20,28,28,28,28,30,32,33,35,35,36,36,36,36,38,40,41,36,36,35,28,28,18,18,17,45,15,15,14,14,13,50,50,50,50,51,51,51,53,51,50,58,58,58,58,59,59,59,61,59,58,66,66,66,66,68,69,71,71,71,71,75,75,76,76,76,76,78,78,78,78,79,79,79,79,80,80,80,82,80,79,79,78,78,85,85,85,87,85,78,78,76,76,75,92,92,92,92,94,94,94,94,95,95,95,95,96,96,96,96,97,97,97,97,98,98,98,100,98,97,97,96,96,95,95,94,94,103,103,103,103,107,107,107,107,109,110,112,112,112,112,113,113,113,113,115,115,115,115,116,116,116,116,118,118,118,118,119,119,119,119,120,120,120,120,122,122,125,127,127,127,127,128,128,128,130,128,127,127,122,131,131,134,136,136,136,136,137,137,137,137,138,138,138,138,140,141,142,138,138,137,137,136,136,131,143,143,146,147,149,143,150,150,153,153,153,153,154,154,154,154,155,155,155,155,157,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,160,160,160,160,162,160,160,159,159,159,159,159,159,167,169,159,159,159,159,155,155,154,154,153,153,150,170,170,173,173,173,173,174,174,174,174,175,175,175,177,175,174,174,173,173,170,178,178,181,183,183,183,183,184,184,184,184,185,185,185,185,187,188,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,193,193,193,193,194,194,194,194,195,195,195,197,195,194,194,193,193,192,192,192,192,192,202,192,192,192,185,185,184,184,183,183,178,205,120,120,119,119,118,118,116,116,115,115,113,113,112,112,107,107,103,103,94,94,92,92,71,71,66,66,0,0,0,1,0,0,0,0,1,1,1,1,3,5,1,1,0,0,0,1,1,1,1,3,5,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,3,5,1,1,0,0,0,0,0,3,3,3,3,5,7,7,7,7,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10,10,10,10,12,13,14,15,10,10,9,9,9,9,9,9,18,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,24,24,24,24,26,26,26,26,27,27,27,27,29,30,31,32,34,34,34,34,35,35,35,35,36,36,36,36,38,39,40,40,41,41,41,43,41,40,44,45,47,48,36,36,35,35,34,51,34,27,27,26,26,24,24,23,23,22,22,22,22,22,54,22,22,22,9,9,9,9,7,7,3,3,0,0,0,0,1,0,0,0,0,0,1,2,4,0,0,0,0,1,0,0,0,1,1,1,1,3,5,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,0,1,0,0,0,0,1,2,3,4,5,0,0,0,1,2,4,5,7,8,10,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,1,1,2,2,2,4,2,1,7,9,0,0,0,0,0,0,1,3,3,3,3,4,4,4,4,6,7,9,9,9,9,11,12,13,14,16,16,16,16,17,17,17,19,17,16,16,9,9,4,4,3,3,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,8,8,9,11,8,14,14,14,14,16,16,17,19,16,22,14,14,6,6,5,5,5,5,5,5,25,25,25,27,25,5,5,5,5,3,3,2,2,1,1,0,0,0,0,1,2,3,5,6,0,0,0,0,3,3,3,4,4,4,4,5,5,5,5,7,7,7,7,8,8,8,8,10,11,13,8,8,7,16,7,5,5,4,4,3,21,21,21,21,22,22,22,22,24,24,25,27,27,27,27,28,28,28,28,30,32,28,28,27,27,24,37,37,37,37,38,38,38,38,40,40,40,40,41,42,44,46,46,46,46,47,47,47,49,47,46,46,40,40,38,38,37,37,22,22,21,21,0,0,0,0,0,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,9,10,6,6,5,5,4,4,3,15,15,15,16,16,16,16,17,17,17,17,19,19,19,19,20,20,20,20,22,22,23,22,24,24,25,24,27,27,27,27,28,28,28,28,29,29,29,29,30,30,30,32,30,29,29,28,28,27,27,20,20,19,19,17,17,16,16,15,37,39,39,39,39,40,40,40,40,42,44,40,40,39,39,0,0,0,0,1,1,1,1,3,3,4,4,4,4,5,5,5,5,7,7,7,7,8,8,8,8,12,13,15,15,15,15,17,18,19,15,15,8,8,7,7,5,5,4,4,3,23,23,23,23,24,24,24,24,26,26,27,26,24,24,23,30,23,1,1,0,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,10,14,15,17,17,17,17,18,18,18,18,20,21,25,27,27,27,27,28,28,28,28,30,34,28,28,27,27,18,18,17,17,7,7,6,6,5,5,4,4,39,40,4,4,2,2,1,1,0,0,0,0,0,1,3,3,3,3,4,4,4,4,8,8,8,8,9,9,9,9,11,12,14,14,14,14,15,15,15,15,17,19,19,19,19,21,23,23,23,23,24,24,24,24,26,30,34,36,24,24,23,23,19,19,15,15,14,14,9,9,8,8,4,4,3,3,0,0,0,0,0,1,1,1,1,3,3,3,3,4,4,4,4,6,7,9,9,9,9,10,10,10,10,12,13,15,15,15,17,15,10,10,9,9,4,4,3,3,20,20,20,22,20,3,3,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,4,6,2,2,1,1,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,6,6,6,6,7,7,7,9,7,6,6,4,4,3,3,2,2,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,9,9,9,11,12,13,14,16,9,9,7,7,6,6,5,5,4,4,2,2,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,7,9,9,9,9,10,10,10,10,11,11,11,11,13,15,15,15,15,17,19,21,23,15,15,11,11,10,10,9,9,3,3,2,2,1,1,0,0,0,0,0,0,0,0,1,3,3,3,3,5,7,7,7,7,8,8,8,8,9,9,9,11,9,8,8,7,7,3,3,0,0,0,0,0,0,0,0,1,3,3,3,3,5,5,6,8,8,8,8,10,8,8,5,13,3,3,0,0,0,0,0,0,0,0,1,2,4,4,4,6,4,0,0,0,0,0,0,0,0,1,2,4,4,4,6,4,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,14,16,16,16,16,18,20,20,20,20,21,21,21,21,22,22,22,22,24,25,27,22,22,21,21,20,20,16,16,2,2,1,1,0,0,0,0,0,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,7,5,4,4,3,3,0,0,0,0,0,0,0,0,1,2,4,4,4,6,4,0,0,0,0,0,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,4,3,3,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,10,11,13,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,2,4,4,4,4,6,8,8,8,10,8,4,4,0,0,0,0,0,0,0,0,1,2,4,4,4,4,6,8,8,8,10,8,4,4,0,0,0,0,0,0,0,0,1,2,4,0,0,0,0,0,0,0,0,1,3,3,3,3,5,5,6,5,7,7,8,8,8,8,10,8,8,7,13,3,3,0,0,0,0,0,0,0,0,1,2,4,4,4,4,5,5,5,7,5,4,4,0,0,0,0,0,0,0,0,1,3,3,3,3,4,4,4,6,4,3,3,0,0,0,0,0,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,4,3,3,0,0,0,0,0,0,0,0,1,2,4,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,0,0,0,0,1,3,3,4,4,4,6,4,3,9,9,9,9,10,10,10,12,10,9,9,0,0,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,6,8,4,4,3,3,3,3,3,3,11,11,11,11,12,12,12,12,14,14,14,14,15,15,15,15,17,18,20,15,15,14,14,12,12,11,11,3,3,3,3,1,1,0,0,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,6,8,4,4,3,3,3,3,3,3,11,11,12,12,12,12,13,13,13,13,15,15,15,15,16,16,16,16,18,19,16,16,15,15,13,13,12,12,11,22,3,3,3,3,1,1,0,0,0,0,0,0,0,0,0,1,3,3,3,3,5,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,12,10,9,9,8,8,7,7,3,3,0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,10,12,7,7,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,0,0,0,0,0,3,3,3,3,4,5,7,7,8,8,8,8,10,12,12,12,12,13,13,13,13,15,16,18,13,13,12,12,8,8,7,21,3,26,26,26,26,27,27,27,27,29,31,31,31,31,32,32,32,32,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,35,35,35,35,37,38,40,40,40,40,41,41,41,43,41,40,40,35,35,34,34,34,34,34,34,46,46,46,46,47,47,47,47,48,48,48,48,49,49,49,49,50,50,50,50,51,51,51,51,53,54,56,51,51,50,50,49,49,48,48,47,47,46,46,34,34,34,34,32,32,31,31,27,27,26,26,0,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,6,4,3,3,3,3,3,9,3,3,3,1,1,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,4,5,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,9,9,9,10,11,13,13,13,13,15,16,13,13,7,7,7,7,7,7,19,19,19,19,20,20,20,20,21,21,21,23,21,20,20,19,19,7,7,7,7,2,2,1,1,0,0,0,0,0,1,2,4,6,6,6,6,8,8,8,8,10,12,12,13,14,12,17,19,8,8,6,6,0,0,0,0,0,0,3,3,3,3,4,4,4,4,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,8,8,8,8,10,11,13,8,8,7,16,16,16,18,16,6,6,6,6,6,21,6,6,6,4,4,3,26,26,26,26,27,27,27,27,28,28,28,28,29,29,29,29,31,31,31,31,33,33,34,34,35,37,34,33,41,41,41,41,42,42,42,42,43,43,43,43,44,44,44,44,45,45,45,45,46,46,46,46,47,47,47,47,49,51,52,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,55,55,56,58,55,61,63,63,63,63,65,67,67,67,67,68,68,68,68,70,70,71,73,70,76,78,78,78,78,79,79,79,79,80,80,80,80,82,82,82,82,83,83,83,83,84,84,84,84,85,85,85,85,86,86,86,88,86,85,85,84,84,83,83,82,82,80,80,79,79,78,78,68,68,67,67,63,63,54,54,54,54,54,54,91,93,95,54,54,54,54,47,47,46,46,45,45,44,44,43,43,42,42,41,41,31,31,29,29,28,28,27,27,26,100,100,100,100,101,101,101,101,102,102,102,102,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,105,105,106,106,106,106,107,107,107,107,109,109,110,112,109,107,107,106,106,105,114,114,115,117,114,120,104,104,104,104,104,123,104,104,104,102,102,101,101,100,128,128,129,130,132,133,135,128,140,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,7,7,7,7,8,8,8,8,10,10,11,12,10,13,13,14,16,13,19,8,8,7,7,3,3,2,2,1,1,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,12,13,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,16,17,18,18,19,19,19,21,19,18,22,23,15,15,15,15,15,15,26,26,26,26,27,27,27,27,28,28,28,28,29,29,29,29,30,30,30,30,31,31,31,31,33,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,36,36,36,36,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,39,38,38,38,38,38,42,38,38,38,36,36,35,35,35,35,35,35,45,45,46,46,46,46,47,47,47,49,47,46,46,45,52,35,35,35,35,31,31,30,30,29,29,28,28,27,27,26,26,15,15,15,15,10,10,9,9,8,8,7,7,6,6,5,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,58,58,58,58,59,59,59,59,60,60,60,60,62,64,64,64,64,65,65,65,65,66,66,66,68,66,65,65,64,64,60,60,59,59,58,58,57,57,57,57,57,57,57,57,0,0,0,0,0,0,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,8,9,9,9,9,11,11,12,13,11,14,15,9,9,8,18,18,18,18,20,20,21,21,21,23,21,20,26,26,26,26,27,27,27,27,28,28,28,30,28,27,27,26,26,18,18,6,6,5,5,4,4,3,35,35,35,35,36,36,36,36,38,38,39,39,39,41,39,38,44,36,36,35,35,0,0,0,0,0,0,3,3,3,3,4,4,4,4,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,8,8,8,8,10,11,13,8,8,7,16,16,16,18,16,6,6,6,6,6,21,6,6,6,4,4,3,26,26,26,26,27,27,27,27,28,28,28,28,30,30,30,30,31,31,31,31,32,32,32,32,33,33,33,33,34,34,34,34,36,38,38,38,38,39,39,39,39,40,40,40,40,41,41,41,41,42,42,42,42,44,46,46,46,46,47,47,47,47,48,48,48,48,49,49,49,49,50,50,50,50,52,54,54,54,54,55,55,55,55,56,56,56,56,57,57,57,57,58,58,58,58,60,62,58,58,57,57,56,56,55,55,54,54,50,50,49,49,48,48,47,47,46,46,42,42,41,41,40,40,39,39,38,38,34,34,33,33,32,32,31,31,30,30,28,28,27,27,26,67,0,0,0,0,0,3,3,3,3,5,5,5,5,6,6,6,6,8,9,11,11,11,11,13,15,11,11,6,6,5,20,20,20,20,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,22,22,22,22,22,26,26,26,26,27,27,27,27,28,28,28,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,31,31,31,31,32,32,32,32,34,35,37,37,37,37,39,40,37,37,32,32,31,31,30,30,30,30,30,30,43,43,43,43,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,46,46,46,46,47,47,47,47,48,48,48,48,49,49,49,49,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,52,52,52,54,52,51,51,51,51,51,57,51,51,51,49,49,48,48,47,47,46,46,45,45,45,45,45,45,60,60,60,60,61,61,61,61,63,65,65,65,65,66,66,66,66,67,67,67,67,69,71,71,71,71,72,72,72,72,74,76,76,76,76,77,77,77,77,79,81,81,81,81,82,82,82,82,84,86,86,86,86,87,87,87,87,89,91,91,91,91,92,92,92,92,93,93,93,93,95,97,99,93,93,92,92,91,91,87,87,86,86,82,82,81,81,77,77,76,76,72,72,71,71,67,67,66,66,65,65,61,61,60,60,45,45,45,45,43,43,30,30,30,30,28,28,27,27,26,26,22,22,22,22,20,20,3,3,0,0,0,0,0,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,11,11,12,12,12,12,14,14,15,14,12,12,11,16,16,17,16,19,19,20,20,20,20,21,21,21,21,23,25,21,21,20,20,19,28,28,28,28,29,29,29,29,30,30,30,30,31,31,31,31,33,35,35,35,35,37,39,39,39,39,41,43,39,39,35,35,31,31,30,30,29,29,28,28,9,9,8,8,7,7,6,6,5,5,4,4,3,48,48,48,48,48,49,50,52,52,52,52,53,53,53,55,53,52,52,48,58,58,58,58,59,59,59,59,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,62,62,62,64,62,61,61,61,61,61,67,61,61,61,59,59,58,72,72,72,72,73,73,73,73,74,74,74,74,75,75,75,75,76,76,76,76,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,79,79,79,81,79,78,78,78,78,78,78,84,86,78,78,78,78,76,76,75,75,74,74,73,73,72,91,91,92,92,92,92,94,95,97,97,97,97,99,100,102,97,97,92,92,91,107,107,107,107,108,108,108,108,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,111,111,111,111,113,114,116,116,116,118,116,111,111,110,110,110,110,110,110,110,110,108,108,107,107,0,0,0,0,0,1,1,1,1,3,3,3,4,4,5,5,5,7,5,4,10,10,10,10,11,11,11,13,11,10,10,3,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,22,22,22,22,23,23,23,25,23,22,22,21,21,20,20,19,19,18,18,17,17,16,16,1,1,0,0,0,0,0,0,1,2,4,4,4,4,5,6,4,9,4,0,0,0,0,0,0,1,2,4,4,4,4,5,5,5,5,7,8,10,10,10,12,10,5,5,4,4,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,16,14,13,13,12,12,11,11,10,10,9,9,9,9,9,19,9,9,9,7,7,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,0,0,1,2,4,8,8,8,8,8,8,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,18,20,20,20,20,22,24,24,24,24,25,25,25,25,26,26,26,26,27,27,27,27,29,31,32,34,34,34,34,35,35,35,35,36,36,36,36,37,37,37,37,38,38,38,38,39,39,39,39,40,40,40,40,41,41,41,41,43,45,45,45,45,46,46,46,46,47,47,47,47,48,48,48,48,50,54,54,54,54,55,55,55,55,57,59,59,60,60,60,60,61,61,61,61,63,64,66,61,61,60,60,59,69,69,69,69,70,70,70,70,71,71,71,71,73,75,71,71,70,70,69,69,55,55,54,54,48,48,47,47,46,46,45,45,41,41,40,40,39,39,38,38,37,37,36,36,35,35,34,34,27,27,26,26,25,25,24,24,20,20,16,16,15,15,14,14,13,13,12,12,11,11,8,80,80,81,80,82,82,83,82,86,0,0,0,0,0,0,3,3,4,5,7,8,10,11,13,3,18,18,18,18,20,20,21,21,21,21,23,23,24,24,24,24,25,25,25,27,25,24,24,23,30,30,30,30,32,32,32,32,33,33,33,33,35,37,33,33,32,32,30,30,21,21,20,40,40,40,40,41,41,41,43,41,40,40,18,18,0,0,0,0,0,0,3,3,3,3,4,4,4,4,5,5,5,5,7,7,8,8,8,8,9,9,9,9,11,11,12,11,13,13,14,16,13,19,9,9,8,8,7,22,5,5,4,4,3,27,27,27,27,27,28,28,28,28,29,29,29,29,30,30,30,30,31,31,31,31,32,32,32,32,34,34,35,35,35,35,36,36,36,36,38,39,40,42,42,42,42,43,43,43,43,44,44,44,44,45,45,45,45,47,49,49,49,49,50,50,50,50,51,51,51,51,52,52,52,52,54,56,56,56,56,57,57,57,57,58,58,58,58,59,59,59,59,61,63,63,64,64,64,64,65,65,65,65,66,66,66,66,67,67,67,67,69,71,67,67,66,66,65,65,64,64,63,74,59,59,58,58,57,57,56,56,52,52,51,51,50,50,49,49,45,45,44,44,43,43,42,42,36,36,35,35,34,75,75,76,76,76,76,77,77,77,77,78,78,78,78,79,79,79,79,81,83,83,83,83,84,84,84,84,85,85,85,85,86,86,86,86,88,90,90,90,90,91,91,91,91,92,92,92,92,93,93,93,93,95,97,97,98,98,98,98,99,99,99,99,100,100,100,100,101,101,101,101,103,105,101,101,100,100,99,99,98,98,97,108,93,93,92,92,91,91,90,90,86,86,85,85,84,84,83,83,79,79,78,78,77,77,76,76,75,111,111,111,111,112,112,112,112,114,116,112,112,111,111,32,32,31,31,30,30,29,29,28,28,27,121,121,122,123,125,126,128,121,133,133,134,135,137,138,140,141,143,133,148,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,5,5,5,5,6,6,6,8,6,5,5,4,4,11,11,11,11,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,21,19,18,18,17,17,16,16,15,15,14,14,13,13,13,13,13,13,24,24,24,26,24,13,13,13,13,11,11,4,4,2,2,1,1,0,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,10,14,14,14,14,16,16,17,18,16,21,21,21,21,22,22,22,24,22,21,21,14,14,7,7,6,6,5,5,4,4,3,3,3,3,3,27,3,3,3,1,1,0,0,0,0,0,0,3,3,3,3,3,3,3,3,4,4,4,4,5,6,8,8,8,8,9,9,9,9,11,12,14,16,9,9,8,8,4,4,19,19,19,19,20,20,20,20,22,23,25,27,20,20,19,19,4,4,3,32,32,32,32,33,33,33,33,34,34,34,34,35,35,35,35,37,37,38,37,39,39,40,42,39,35,35,34,34,33,33,32,32,0,0,0,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,10,10,10,10,12,12,13,14,12,17,17,17,17,18,18,18,18,19,19,19,21,19,18,18,17,17,10,10,9,9,8,8,8,8,8,8,24,24,24,24,25,25,25,25,27,29,25,25,24,24,8,8,8,8,6,6,5,5,4,4,0,0,0,0,0,0,1,2,4,5,7,8,10,11,13,13,14,14,14,14,16,18,18,18,18,19,19,19,19,21,22,24,19,19,18,18,14,14,13,27,27,27,27,28,28,28,30,28,27,27,0,0,0,0,0,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,11,11,11,11,12,12,12,12,13,13,13,15,13,12,12,11,11,10,1,19,0,0,0,0,0,1,1,1,1,3,3,4,5,6,7,8,9,3,12,12,12,12,14,14,15,15,15,17,15,14,20,12,12,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,5,3,2,2,1,1,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,6,4,3,3,2,2,1,1,0,0,0,0,0,0,0,0,1,3,0,0,0,0,0,0,0,1,3,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,3,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,1,1,1,2,2,2,4,2,1,1,0,0,0,0,0,1,3,3,3,5,3,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,3,0,0,0,3,3,4,5,7,7,7,7,8,8,8,10,8,7,7,3,15,15,15,15,16,16,16,16,18,18,19,21,18,24,24,24,24,26,26,27,29,26,34,34,34,34,36,36,37,36,39,39,39,39,41,43,43,43,43,45,47,48,50,54,55,57,57,57,57,58,58,58,58,59,59,59,59,60,60,60,60,61,61,61,61,62,62,62,62,63,63,63,63,64,64,64,64,66,66,66,66,67,67,67,67,68,68,68,68,70,70,71,71,71,73,71,70,76,76,77,77,78,78,78,80,78,77,76,86,86,86,86,88,90,90,91,91,91,91,92,92,92,92,93,93,93,93,94,94,94,94,95,95,95,95,96,96,96,96,97,97,97,99,97,96,96,95,95,94,94,93,93,92,92,91,91,90,86,86,68,68,67,67,66,66,64,64,63,63,62,62,61,61,60,60,59,59,58,58,57,57,43,43,39,39,34,34,24,24,16,16,15,15,0]
const contents={"0":[516,517,518],"1":[519,520,521,522,523,521,524,518],"2":[525,526,521,522,527,521,524,518],"3":[528,529,518],"4":[530,531,532,533,518],"5":[534,535,518],"6":[536,537,518],"7":[538,539,521,540,521,541,542,521,543,518],"8":[544,545,546,521,547,548,521,549,550,521,541,551,521,552,518],"9":[553,554,555,521,556,557,521,558,521,559,560,561,521,562,563,521,564,521,565,533,521,524,518],"10":[566,554,521,567,568,569,570,521,571,533,521,524,518],"11":[572,573,521,574,575,521,576,575,521,577,518],"12":[578,579,518],"13":[580,581,518],"14":[582,583,584,521,585,533,521,586,587,588,589,521,590,533,521,591,592,588,589,521,593,533,521,594,595,588,589,521,596,533,521,597,598,599,521,600,518],"15":[601,602,521,603,518],"16":[604,605,606,607,521,524,518],"17":[608,609,521,610,611,521,612,613,614,615,616,617,618,619,521,620,518],"18":[621,622,623,624,625,626,627,628,629,630,625,631,627,628,629,632,629,633,634],"19":[635,636,637,638,639,640,521,641,638,521,642,521,643,644,645,646,647,648,649,650,651,652,521,653,654,655,656,657,658,659,652,521,653,660,646,659,652,521,653,661,533,521,662,521,518],"20":[663,664,518],"21":[665,666,518],"22":[667,668,669,521,521,521,670,521,671,672,673,521,674,675,521,676,677,678,521,679,680,521,681,521,682,683,521,684,685,686,521,687,688,521,677,689,521,679,680,521,681,521,690,683,521,684,660,691,533,521,521,521,692,518],"23":[693,694,695,521,696,697,698,699,700,701,521,702,703,683,521,704,661,533,521,705,706,707,708,521,709,710,521,711,712,713,714,521,702,703,521,715,716,701,521,702,703,683,521,717,661,533,521,718,719,521,720,721,521,722,518],"24":[723,521,521,724,725,726,521,727,726,521,728,729,521,730,729,521,575,533,521,521,521,731,521,567,732,733,521,734,661,521,735,736,737,521,738,739,660,740,521,734,661,521,741,521,742,743,533,521,744,518],"25":[745,746,518],"26":[747,545,748,521,749,750,521,751,726,521,752,753,752,754,755,756,521,757,758,661,521,575,759,760,518],"27":[761,762,521,567,763,764,533,521,524,518],"28":[765,762,555,521,766,767,768,521,769,661,533,521,524,518],"29":[770,771,772,521,773,774,775,521,776,777,521,778,779,780,779,660,781,533,521,782,783,521,524,518],"30":[784,785,547,521,771,772,521,786,787,788,775,521,776,789,521,778,790,780,790,660,781,533,521,782,791,521,524,518],"31":[792,793,794,795,796,521,524,518],"32":[797,668,798,521,799,533,521,800,521,801,802,803,804,805,806,807,808,521,809,518],"33":[810,811,812,521,813,533,521,814,521,815,816,521,817,533,521,818,521,819,820,821,822,521,823,824,825,826,661,521,827,828,829,830,521,831,779,521,832,521,833,834,521,835,734,521,836,837,521,838,734,521,839,840,841,521,842,734,521,843,521,844,734,521,845,846,847,848,849,850,521,851,533,521,524,518],"34":[852,811,853,521,854,533,521,814,521,815,816,521,817,533,521,818,521,855,521,856,857,858,521,859,860,861,862,863,660,781,521,864,533,521,524,518],"35":[865,866,521,867,868,521,869,521,870,518],"36":[871,811,872,521,873,533,521,814,874,521,815,816,521,875,533,521,818,521,876,877,521,878,879,880,521,881,882,883,521,884,885,521,886,887,521,888,889,660,890,521,891,892,893,894,895,521,896,897,533,518],"37":[898,899,900,521,901,521,902,903,521,904,521,521,521,905,906,907,521,908,909,910,521,911,912,521,913,521,914,910,661,521,915,533,521,521,521,916,917,918,521,919,920,921,521,922,521,923,521,924,925,926,927,911,521,928,929,661,521,930,931,932,521,933,934,521,935,936,521,937,938,939,940,521,938,683,521,941,521,942,661,521,943,521,944,945,661,521,946,521,947,948,521,949,950,521,951,661,521,944,952,826,521,953,661,521,915,533,521,521,521,954,955,521,956,533,521,521,521,957,958,521,959,521,960,961,521,962,963,964,521,965,966,521,967,968,969,970,521,915,533,521,521,521,971,972,973,974,661,521,760,533,521,521,521,975,521,976,977,521,978,518],"38":[979,980,981,521,982,983,521,984,533,521,985,521,986,987,988,989,990,521,991,992,521,993,661,521,994,533,521,995,521,996,997,998,999,661,533,521,1000,1001,734,521,1002,1003,1004,521,824,1005,1006,521,1007,1008,1009,1010,521,1011,533,521,1012,521,996,1013,521,1014,518],"39":[1015,521,521,1016,824,1017,661,521,1018,521,1019,521,521,521,1020,521,1021,1022,521,1023,910,521,1024,661,521,521,521,1025,1026,1027,521,1028,1029,939,910,521,1030,661,521,521,521,1031,521,1032,533,521,521,521,554,521,668,1033,759,1034,521,1035,1036,521,521,521,776,1037,521,1038,781,533,521,1039,521,524,518],"40":[1040,1041,518],"41":[1042,1043,521,567,1044,953,661,533,521,524,518],"42":[1045,521,521,1046,1047,1048,1049,521,1050,521,1051,533,521,1052,521,521,521,1053,1054,1055,1056,1049,521,1057,533,521,521,521,996,1058,997,1059,759,760,521,521,521,1060,518],"43":[1061,545,1062,521,1063,521,1043,521,567,1064,521,1065,1066,521,734,661,521,1067,1068,521,1069,1070,1071,660,1066,533,521,524,518],"44":[1072,1073,518],"45":[1074,1075,521,1076,521,522,1077,521,524,518],"46":[1078,545,1079,521,547,1080,521,1081,518],"47":[1082,668,669,521,1083,521,1084,521,1085,521,749,1086,521,1087,759,1088,518],"48":[1089,696,1090,754,1091,521,1092,521,915,759,760,518],"49":[1093,1094,521,1095,518],"50":[1096,567,1097,726,533,521,577,518],"51":[1098,1043,521,567,1099,533,521,524,518],"52":[1100,1101,1102,521,1103,521,766,763,1104,660,1105,533,521,524,518],"53":[1106,1107,1108,521,1109,896,1110,1111,533,521,1112,1113,1114,521,1115,521,541,611,521,1116,521,1117,1113,1118,521,1115,518],"54":[1119,1120,518],"55":[1121,749,750,521,1122,1123,754,755,756,521,757,1124,661,521,721,759,760,518],"56":[1125,1126,1127,521,1128,1129,1128,518],"57":[1130,1126,521,668,1131,521,897,521,611,533,521,785,521,1132,1133,1134,1135,1134,1136,1137,521,1138,518],"58":[1139,1140,1141,1142,521,1143,734,521,1144,521,1145,533,521,1146,518],"59":[1147,1148,521,1149,1150,734,521,1151,521,1152,533,521,524,518],"60":[1153,1148,1154,1155,521,1149,1151,1156,521,1157,533,521,524,518],"61":[1158,1159,521,1160,518],"62":[1161,1162,1163,521,1164,518],"63":[1165,1166,542,521,1167,1168,521,1146,518],"64":[1169,1094,521,1170,518],"65":[1171,1094,521,1172,518],"66":[1173,1174,518],"67":[1175,1176,1177,1178,1179,1180,660,890,533,521,1181,518],"68":[1182,1183,1184,521,1185,518],"69":[1186,1187,518],"70":[1188,1189,518],"71":[1190,521,521,1191,521,521,1192,1193,521,1194,1195,521,521,521,1196,1197,521,638,661,521,521,521,1198,533,521,521,521,1199,1200,1201,1202,1203,1049,521,1057,533,521,521,521,521,521,1204,521,1205,1206,1207,1208,1209,521,521,521,1210,521,996,1211,997,1212,759,760,521,1213,521,521,521,1214,521,1149,1215,734,521,1216,1217,521,1218,661,533,521,521,521,1053,1219,521,1220,521,521,1221,521,521,521,1196,1197,521,638,661,1222,521,521,1223,533,521,521,521,1224,518],"72":[1225,1080,521,1226,518],"73":[1227,1228,575,521,1229,575,521,1230,521,1231,575,521,1232,518],"74":[1233,1228,575,521,1229,575,521,567,1234,1235,1236,660,726,533,521,577,518],"75":[1237,1228,575,521,1229,575,521,567,1238,1239,660,726,533,521,577,518],"76":[1240,1241,1242,521,1243,772,521,1244,1242,521,1245,1242,521,1246,1242,521,1247,518],"77":[1248,1249,518],"78":[1250,1251,1242,521,1243,1242,521,1252,1242,521,1244,1242,521,1245,1242,521,1246,1242,521,1247,518],"79":[1253,1229,1242,521,1254,1242,521,1247,518],"80":[1255,1256,521,1257,518],"81":[1258,1259,518],"82":[1260,1228,575,521,1261,518],"83":[1262,1263,575,521,1264,518],"84":[1265,749,1242,521,696,1242,521,705,1242,521,1247,518],"85":[1266,696,1242,521,705,1242,521,1247,518],"86":[1267,1268,1242,521,749,1242,521,1247,518],"87":[1269,1270,518],"88":[1271,1228,575,521,1229,575,521,567,1272,726,533,521,577,518],"89":[1273,1228,575,521,1274,575,521,1230,521,1231,575,521,521,521,1275,521,1276,575,521,521,521,766,1277,1278,660,726,533,521,577,518],"90":[1279,1122,1280,521,705,1281,521,1282,533,521,1247,518],"91":[1283,1284,518],"92":[1285,1256,521,1286,575,521,1287,575,521,577,518],"93":[1288,1251,1242,521,1254,1242,521,1247,518],"94":[1289,1290,575,521,1291,518],"95":[1292,1256,521,1286,575,521,1293,575,521,577,518],"96":[1294,1228,575,521,1229,575,521,1295,521,1296,1297,759,575,521,567,1298,726,533,521,577,518],"97":[1299,1228,575,521,1229,575,521,1300,1301,734,521,1302,521,1303,726,533,521,577,518],"98":[1304,1305,518],"99":[1306,1307,1242,521,1308,1242,521,1247,518],"100":[1309,1228,575,521,1230,521,1310,575,521,766,1311,726,521,1312,521,1313,726,533,521,577,518],"101":[1314,1228,575,521,1315,521,1316,575,521,1317,575,521,766,1301,734,521,1298,726,521,1318,726,521,1319,726,533,521,577,518],"102":[1320,1228,575,521,1229,575,521,1109,1321,1110,575,533,521,577,518],"103":[1322,1323,1242,521,1268,1242,521,1251,1242,521,1243,1242,521,1252,1242,521,1244,1242,521,1324,1242,521,1245,1242,521,1246,1242,521,1247,518],"104":[1325,539,521,1326,518],"105":[1327,1228,575,521,1328,521,1329,518],"106":[1330,1228,575,521,1331,575,521,1332,575,521,1333,1334,521,1335,575,521,1336,521,1337,518],"107":[1338,1228,575,521,1339,575,521,1340,521,1341,575,521,1342,521,1343,518],"108":[1344,1228,575,521,1345,518],"109":[1346,1228,575,521,1229,575,521,567,1347,726,533,521,577,518],"110":[1348,1228,575,521,1349,521,1350,575,521,1351,1352,521,1353,575,521,1354,575,521,577,518],"111":[1355,1356,575,521,1357,518],"112":[1358,1241,1242,521,1243,1242,521,1252,1242,521,1247,518],"113":[1359,1360,518],"114":[1361,668,1242,521,1162,1242,521,1247,518],"115":[1362,1241,1242,521,1243,1242,521,1247,518],"116":[1363,1364,518],"117":[1365,1366,575,521,1367,575,521,1368,575,521,1256,521,1369,518],"118":[1370,1228,575,521,1339,575,521,1340,521,1371,575,521,1342,521,1343,518],"119":[1372,1162,575,521,1256,521,1373,518],"120":[1374,1356,575,521,1375,518],"121":[1376,1228,575,521,1229,575,521,567,1377,726,533,521,577,518],"122":[1378,1356,575,521,1261,518],"123":[1379,1228,575,521,1229,575,521,1380,521,1381,518],"124":[1382,1256,521,1383,518],"125":[1384,1385,1242,521,1386,1242,521,1247,518],"126":[1387,1254,1242,521,1386,1242,521,1247,518],"127":[1388,1389,518],"128":[1390,1228,575,521,1229,575,521,1315,521,1231,575,521,766,1391,734,521,575,533,521,577,518],"129":[1392,1228,1393,521,1394,518],"130":[1395,1396,575,521,1397,518],"131":[1398,1399,518],"132":[1400,1228,575,521,1229,575,521,567,1401,726,533,521,577,518],"133":[1402,1263,575,521,1403,521,1404,1405,759,575,521,1109,1406,1110,575,533,521,577,518],"134":[1407,1228,575,521,521,521,1408,1409,1410,1411,661,533,521,577,518],"135":[1412,1413,575,521,1414,521,1415,518],"136":[1416,749,1242,521,696,1242,521,1247,518],"137":[1417,1228,575,521,1229,575,521,1418,575,521,1419,575,521,1420,575,521,577,518],"138":[1421,1422,1242,521,1423,1242,521,1247,518],"139":[1424,1425,575,521,1426,575,521,1427,575,521,577,518],"140":[1428,545,1429,521,1430,521,1431,518],"141":[1432,1433,518],"142":[1434,1435,518],"143":[1436,668,669,521,1437,533,521,1438,518],"144":[1439,521,521,1440,918,521,972,1441,1442,521,826,683,521,1443,1442,521,826,683,521,521,521,1444,521,1445,661,521,1446,533,521,521,521,521,521,1447,521,567,1448,1449,521,1450,521,734,661,521,1451,521,1452,533,521,1453,1454,1455,1456,1457,1458,1459,1460,1461,1462,521,1463,1464,521,1465,759,1466,1467,521,993,661,533,521,521,521,1468,1469,521,1470,1471,521,1472,1473,521,611,533,521,1474,1475,521,1476,1477,521,611,533,521,521,521,1478,1479,1480,1481,521,1482,1483,521,1484,1469,521,1485,518],"145":[1486,521,521,1487,521,521,1488,521,972,1489,1490,521,826,683,521,1491,521,1450,661,521,1492,521,1493,1494,660,1495,1496,1497,521,1498,683,661,521,1499,1500,533,521,521,521,1501,918,521,972,1489,1442,826,683,521,1502,521,1445,661,521,1503,1504,1505,521,1506,521,611,533,521,521,521,996,1507,997,1508,1494,660,1509,759,760,518],"146":[1510,1094,521,1511,518],"147":[1512,1094,521,1513,518],"148":[1514,521,521,1515,1516,1517,521,1518,661,533,521,521,521,521,521,1519,521,1109,1520,1110,1521,533,521,1522,1523,1524,759,1525,521,521,521,1526,1527,1528,1529,1530,1531,1532,1533,1534,1535,1536,1537,1538,1539,1540,1541,1542,1543,1544,1545,1546,1547,521,521,521,996,1548,997,1549,759,760,518],"149":[1550,1043,521,567,1551,521,1552,521,1099,533,521,524,518],"150":[1553,1229,575,521,1554,575,521,1555,575,521,1556,521,1557,518],"151":[1558,1229,575,521,1554,575,521,1555,575,521,1559,521,1557,518],"152":[1560,785,1430,521,1561,1562,1563,1564,521,1565,518],"153":[1566,1567,518],"154":[1568,1569,518],"155":[1570,1075,521,1571,521,522,1572,521,524,518],"156":[1573,1574,521,522,1575,521,524,518],"157":[1576,602,521,1577,518],"158":[1578,1579,518],"159":[1580,518],"160":[1581,1323,1582,1583,1584,521,1585,759,760,518],"161":[1586,1587,518],"162":[1588,1589,521,1590,518],"163":[1591,1592,518],"164":[1593,731,521,1594,1595,1596,521,1597,1598,1599,660,1598,1599,521,1600,661,521,1601,521,743,533,521,744,518],"165":[1602,1148,521,1603,1604,521,1605,533,521,1594,1595,521,1606,734,521,1152,533,521,524,518],"166":[1607,1148,521,1594,1608,734,521,1595,521,1152,533,521,1609,521,524,518],"167":[1610,1148,521,1594,1608,734,521,1595,521,1152,533,521,524,518],"168":[1611,1148,521,1609,521,1594,1608,734,521,1595,521,1152,533,521,524,518],"169":[1612,1613,518],"170":[1614,1615,518],"171":[1616,521,521,1617,1618,638,521,1619,533,521,521,521,1620,760,521,1621,518],"172":[1622,1623,521,522,1624,521,524,518],"173":[1625,1626,1627,521,1628,1629,1630,521,1631,661,521,1632,533,521,785,1633,1634,521,1635,518],"174":[1636,1626,1627,521,1628,1629,1637,521,1638,661,521,1639,533,521,785,1633,1634,521,1640,518],"175":[1641,1642,518],"176":[1643,1644,1619,533,521,1645,518],"177":[1646,1647,1648,521,1649,521,522,1650,521,524,518],"178":[1651,1652,1653,521,1231,1654,521,1655,521,1656,518],"179":[1657,1658,772,521,1659,518],"180":[1660,1661,518],"181":[1662,1663,518],"182":[1664,1665,518],"183":[1666,1665,518],"184":[1667,1668,521,1669,521,1670,518],"185":[1671,545,1672,521,547,1080,521,549,521,1673,1674,521,1675,521,1676,533,521,1677,518],"186":[1678,1679,521,1680,521,766,1681,533,518],"187":[1682,1683,1684,1685,1686,1687,1688,1689,1690,521,1691,521,524,518],"188":[1692,545,748,521,1693,518],"189":[1694,541,1695,521,1166,760,521,1696,518],"190":[1697,1698,518],"191":[1699,1700,1701,521,1702,521,731,1703,521,1704,1705,564,521,1706,1707,1708,660,1709,533,521,1710,518],"192":[1711,668,1712,521,800,1713,521,1714,1715,521,1626,1716,521,524,518],"193":[1717,1718,521,1719,521,1720,521,1109,1721,1722,1723,521,1724,533,521,1725,521,1535,521,1148,521,1726,1727,521,524,518],"194":[1728,1729,1063,521,1043,521,567,1730,734,521,1099,533,521,524,518],"195":[1731,541,1732,521,1733,1734,521,1735,521,1736,521,1737,518],"196":[1738,1739,518],"197":[1740,1741,521,1742,1743,533,521,524,518],"198":[1744,749,1745,521,1746,753,917,521,972,757,1747,939,682,661,521,915,759,760,518],"199":[1748,1749,1750,521,1751,521,1749,1752,521,1753,1754,521,1755,521,1756,521,1757,1758,521,1759,521,1760,1761,1762,1763,521,1764,521,1765,518],"200":[1766,1767,1768,1769,1770,1771,1772,521,1773,533,521,1774,521,1775,1776,521,815,816,521,1773,533,521,818,521,521,521,1777,1778,1779,521,1780,1781,1782,521,1783,1784,661,521,1785,1786,1787,1788,1789,1790,891,521,897,533,521,521,521,1791,1792,1793,1779,521,1794,1795,1796,1797,521,1798,1787,1788,1799,1790,891,521,897,533,521,521,521,1800,1801,638,521,1802,521,1803,1804,661,533,521,521,521,1805,1806,521,1807,638,521,1808,1809,521,1810,1811,521,1812,1813,533,521,521,521,1814,1815,1816,1817,1818,1819,521,1820,1821,759,1822,521,1823,533,521,1824,521,1825,1826,759,1827,521,1828,1829,1830,1831,521,1832,1833,1834,660,1835,521,1836,661,521,1837,521,1838,759,760,521,1839,1840,1841,1842,1843,521,1844,521,1828,1845,521,1846,533,521,1847,1848,521,1846,533,521,1849,1846,521,1850,1846,521,1851,1846,521,1852,1853,1854,521,1855,1856,521,1857,521,1858,518],"201":[1859,1860,521,1861,521,1862,1863,521,1864,1865,521,1866,1867,521,1868,1869,521,1870,1871,521,1852,1872,1873,533,521,1874,521,1875,518],"202":[1876,1877,1878,521,521,521,1879,1880,521,1881,533,521,521,521,731,1882,521,1883,521,1862,1884,1885,533,521,1864,1884,1886,533,521,1866,1884,1887,533,521,1868,1884,1888,533,521,1870,1884,1889,533,521,1890,1884,1891,533,521,1892,1884,1893,533,521,1894,518],"203":[1895,521,521,1896,1897,1178,521,1898,533,521,521,521,1899,1900,1901,521,1902,518],"204":[1903,1904,521,1905,1720,1906,521,1907,1908,1909,533,521,1910,1911,521,1912,1909,533,521,1913,521,1914,521,1915,1916,533,521,1917,1918,521,1919,518],"205":[1920,749,1921,521,1922,521,1923,521,915,753,1924,759,760,518],"206":[1925,1926,518],"207":[1927,1928,518],"208":[1929,545,1930,521,554,1931,1932,521,1933,1934,1935,521,1936,661,521,1937,1938,1939,1940,1941,564,521,565,533,521,524,518],"209":[1942,1943,518],"210":[1944,1945,1946,521,1947,521,1948,1949,521,1950,521,521,521,1951,917,1952,521,1953,1954,521,1955,1956,521,1957,1958,939,1959,521,1957,683,661,521,915,533,521,521,521,1960,1961,1962,521,1963,521,1964,1965,521,1966,910,521,1070,661,521,915,533,521,521,521,1967,521,1968,518],"211":[1969,541,1695,521,543,518],"212":[1970,545,1971,521,547,1080,521,1673,1972,521,1973,521,1676,533,521,1974,518],"213":[1975,1043,1102,521,556,1976,1977,521,1978,1099,533,521,524,518],"214":[1979,1980,521,1981,521,1982,521,1109,1983,1722,1984,521,1724,533,521,1985,521,524,518],"215":[1986,1713,521,1987,521,776,1988,1989,521,1990,781,521,1916,533,518],"216":[1991,1992,518],"217":[1993,549,521,1994,518],"218":[1995,1996,521,1997,1998,521,1999,533,521,1634,2000,1996,521,2001,521,2002,521,2003,521,2004,521,524,518],"219":[2005,696,2006,2007,660,2008,521,2009,661,754,2010,2011,661,521,2006,2012,521,2013,521,1091,918,521,755,2014,2015,2016,521,942,661,521,2017,521,944,2018,521,2019,661,521,915,533,518],"220":[2020,2021,518],"221":[2022,545,2023,521,1229,2024,521,2025,518],"222":[2026,2027,518],"223":[2028,668,2029,521,2030,518],"224":[2031,2032,695,521,2033,521,2034,518],"225":[2035,521,2036,2037,521,2038,533,521,2039,518],"226":[2040,2041,2037,521,2042,533,521,2039,518],"227":[2043,2044,521,522,2045,521,524,518],"228":[2046,1176,1177,1178,1179,1180,660,890,533,521,2047,518],"229":[2048,1046,1047,1048,1049,521,2049,533,518],"230":[2050,2051,2052,2053,521,2054,518],"231":[2055,1729,1430,521,1043,521,567,2056,521,2057,533,521,524,518],"232":[2058,2059,521,2060,518],"233":[2061,1102,521,1103,521,766,893,2062,521,532,533,518],"234":[2063,2064,518],"235":[2065,541,2066,521,972,2067,521,2068,2069,521,2070,661,521,2071,533,521,567,2072,2073,521,2074,533,518],"236":[2075,2076,521,1103,521,2077,2078,521,532,533,518],"237":[2079,2076,521,1103,521,2077,2080,2081,521,2082,2083,521,2084,2085,826,683,521,2086,661,521,2087,533,518],"238":[2088,521,521,2089,917,521,972,2090,521,2091,2092,521,2093,679,521,2094,521,2095,683,521,2096,661,521,915,533,521,521,521,2097,917,521,2066,521,972,2098,661,521,2099,521,521,676,2100,521,1957,683,660,521,521,676,2101,521,1957,683,661,521,915,533,521,521,521,2102,2103,726,521,972,521,521,2104,826,521,521,521,2105,1411,661,521,1242,533,521,521,521,521,521,2106,2107,2108,521,2109,2110,2111,521,2112,521,2113,521,2114,533,521,521,521,2115,521,2116,2117,2118,521,2119,2120,661,521,2121,533,521,521,521,2122,2123,521,731,2124,521,2125,521,2126,521,2116,2127,521,2128,533,521,521,521,2129,521,2130,2125,521,2131,521,2132,2133,2134,521,2135,2136,521,2137,661,521,2138,521,743,533,521,2125,521,1894,518],"239":[2139,2140,2141,521,521,521,2142,2143,2144,521,2145,533,521,521,521,2146,518],"240":[2147,1713,521,2148,2149,2150,2151,2152,521,2153,2154,521,2155,533,521,2156,2157,521,2155,533,521,2158,2159,920,521,2160,533,521,2161,2162,920,521,2163,533,521,2164,2165,920,521,2166,533,521,2167,2168,920,521,2169,533,521,2170,2171,521,2172,518],"241":[2173,2174,521,2175,518],"242":[2176,2177,521,2178,2179,521,2180,2181,2182,521,2183,533,521,2184,2185,521,2186,518],"243":[2187,545,2188,521,547,521,2189,2190,521,2191,518],"244":[2192,2193,521,2194,518],"245":[2195,668,798,521,2196,533,521,2197,2198,521,800,521,801,802,2199,2200,2201,806,2202,521,2203,915,521,2204,2205,521,2206,518],"246":[2207,545,2208,521,2209,521,2210,2190,521,2211,518],"247":[2212,2213,518],"248":[2214,668,669,521,2215,521,2216,2217,2218,521,918,521,2219,521,2220,1502,2221,521,2222,2223,521,2224,939,2225,2226,521,2227,2224,683,661,521,2228,521,2229,2230,2217,2231,521,918,521,2232,521,2233,2234,1502,2235,521,2236,2237,521,2222,2238,521,2224,939,2239,2226,521,2227,2224,683,661,521,2228,521,2229,2240,2241,2242,2243,759,2244,518],"249":[2245,545,2246,521,547,521,2247,2248,521,1231,1654,521,2249,2250,2251,521,2252,2253,521,2254,781,521,2255,533,521,2256,2257,521,2258,521,2259,518],"250":[2260,2261,518],"251":[2262,2263,518],"252":[2264,2265,521,2266,521,524,518],"253":[2267,2268,518],"254":[2269,2268,518],"255":[2270,2271,518],"256":[2272,2273,521,2274,521,524,518],"257":[2275,2276,518],"258":[2277,1043,521,1594,2278,2279,2280,521,851,533,521,524,518],"259":[2281,2282,521,2283,521,524,518],"260":[2284,2285,518],"261":[2286,2287,2288,521,2289,2290,521,2291,2292,2293,680,521,2294,683,661,533,521,1852,2295,2296,918,521,972,2297,2094,521,2224,939,1442,661,521,1503,521,2298,521,2299,2300,533,518],"262":[2301,2302,518],"263":[2303,2304,518],"264":[2305,2306,518],"265":[2307,2308,518],"266":[2309,996,2310,2311,521,2312,521,2313,521,915,997,2314,759,760,518],"267":[2315,749,2316,2317,521,2229,533,521,1729,521,2318,1113,2319,521,556,2320,2321,521,2322,779,660,781,533,521,1043,521,766,2323,953,734,661,521,1065,953,734,661,521,2324,521,2325,734,521,1099,533,521,524,518],"268":[2326,749,2327,521,2316,2328,521,2229,533,521,1729,547,521,1043,521,567,2329,521,2057,533,521,524,518],"269":[2330,545,2331,521,547,521,749,2316,2332,521,2229,533,521,1729,521,1043,521,567,2333,521,2334,2335,660,2336,2337,521,2335,661,533,521,524,518],"270":[2338,749,2339,2340,2341,2342,521,915,533,521,1729,521,2318,2343,521,2344,518],"271":[2345,749,750,521,2316,2346,521,2229,533,521,1729,1430,521,1043,521,567,2347,521,2057,533,521,524,518],"272":[2348,749,2316,2349,521,2229,533,521,1729,521,2350,521,2351,918,521,2352,2353,1442,521,826,683,521,2354,521,1445,661,521,2355,533,521,2344,518],"273":[2356,2357,2358,2359,2360,2361,2362,2363,2364,2365,2366,2367,2368,2369,2370,2371,2372,2373,2374,2375,2376,2377,2378,2379,2380,2381,2382,2383,2384,2385,2386,2387,2388,2389,2390,2391,2392,521,524,518],"274":[2393,545,748,521,2394,518],"275":[2395,1245,2396,521,1243,2397,521,1252,2398,521,1146,518],"276":[2399,2400,2401,2402,521,524,518],"277":[2403,996,2404,997,2405,759,760,518],"278":[2406,2407,2408,2409,2410,2411,2412,2413,2414,2415,2416,521,2417,2418,521,2419,2420,521,2421,533,521,2422,518],"279":[2423,776,1916,533,518],"280":[2424,2425,521,522,2426,521,524,518],"281":[2427,1043,521,2428,2429,2430,2431,521,2432,734,521,2433,521,2434,533,521,524,518],"282":[2435,2436,521,2437,518],"283":[2438,521,521,2439,2440,2441,2442,2443,521,521,521,2444,826,521,2445,521,2446,2447,2448,2449,2450,939,2451,521,2452,2453,521,2454,2455,2456,2457,2458,2459,521,2460,683,661,533,521,521,521,2461,2462,521,2463,521,2464,2465,521,521,521,2466,521,2467,2468,2469,521,2470,2471,533,521,521,521,2472,518],"284":[2473,2474,521,2475,521,2476,521,2477,521,2478,2479,521,524,518],"285":[2480,1982,2481,521,2482,521,1109,2483,1722,2484,521,1724,533,521,2485,521,524,518],"286":[2486,2487,518],"287":[2488,2489,518],"288":[2490,2491,521,2492,518],"289":[2493,1043,521,2494,2429,521,2495,953,533,521,524,518],"290":[2496,2497,2498,521,2499,521,1043,521,2500,2501,953,2502,2503,682,521,2504,521,2505,660,890,533,521,524,518],"291":[2506,2507,2508,521,2509,518],"292":[2510,2497,2511,521,2499,521,1043,2512,2513,521,2514,521,766,2515,521,2516,2335,521,734,661,521,2517,2518,1957,661,533,521,524,518],"293":[2519,2520,2521,518],"294":[2522,762,521,2494,2523,521,2524,533,521,524,518],"295":[2525,2526,518],"296":[2527,785,521,2528,1035,521,524,518],"297":[2529,545,2530,521,2531,521,2532,518],"298":[2533,2534,2535,521,2536,638,533,521,2537,521,2538,1472,521,2539,521,2540,518],"299":[2541,2542,521,2543,518],"300":[2544,2545,518],"301":[2546,2547,518],"302":[2548,2534,2549,2550,2551,521,2552,521,638,661,533,521,2553,2507,2554,521,2555,518],"303":[2556,2542,521,2557,518],"304":[2558,2542,521,2559,518],"305":[2560,2542,521,2561,518],"306":[2562,2553,2507,2554,521,2563,518],"307":[2564,2565,2566,521,521,521,2567,2568,1906,1905,521,2569,2570,521,2571,2572,2573,2574,660,890,533,521,521,521,2575,2576,2577,521,2578,2579,521,2580,661,521,2581,2582,521,2583,2584,533,521,521,521,2585,2586,521,2587,533,521,521,521,2588,1909,533,521,521,521,2589,1912,533,521,521,521,2590,2591,2592,521,2593,521,776,2594,781,521,2595,2596,521,1916,533,521,2597,2598,521,2599,2600,521,1919,518],"308":[2601,521,521,2602,2603,2604,521,2605,2606,521,2607,521,2608,2609,521,1197,2610,2611,661,521,2612,521,2613,533,521,521,521,521,521,2614,2615,2616,2617,2618,2619,2620,2621,2622,2623,521,2624,2625,2626,2627,2628,2629,521,521,521,2630,521,2631,521,521,521,2632,2633,521,2634,521,2635,521,521,521,2636,521,2637,521,521,521,2638,521,521,521,2639,521,2640,2641,521,2642,2643,521,2644,2645,521,2646,2647,521,521,521,2648,521,2485,521,524,518],"309":[2649,2650,2651,521,2652,533,521,2653,521,2654,2655,2656,2657,2658,2659,2660,731,521,2661,2662,2663,2664,2665,2666,521,2667,533,521,1894,518],"310":[2668,2669,2670,1479,521,2671,2672,2673,2674,521,2675,2676,521,2677,2676,521,2678,2676,521,2679,2680,2681,521,2682,2676,521,524,518],"311":[2683,2684,521,2685,518],"312":[2686,2687,2688,2689,533,521,1146,518],"313":[2690,2687,2691,2689,533,521,1146,518],"314":[2692,2693,575,521,2694,518],"315":[2695,2696,1242,521,2697,1242,521,1247,518],"316":[2698,1228,575,521,2699,2700,2701,521,2702,575,521,2703,518],"317":[2704,1228,575,521,2699,2700,2701,521,2702,575,521,2705,518],"318":[2706,1228,575,521,2699,2700,2701,521,2707,518],"319":[2708,2693,575,521,2709,518],"320":[2710,2534,2711,521,2603,2712,2713,726,661,521,2714,521,2715,2716,521,2717,2718,2719,2720,521,1411,683,661,521,2721,521,1242,2722,2603,2723,2713,726,661,521,1242,759,575,518],"321":[2724,1228,575,521,2699,2700,2725,521,2702,575,521,2726,518],"322":[2727,1982,2728,521,1109,1983,1722,2729,521,1724,533,521,2730,521,524,518],"323":[2731,2732,518],"324":[2733,1043,521,1852,2734,2735,2736,521,2737,2738,521,2739,2740,521,524,518],"325":[2741,2742,518],"326":[2743,521,521,2744,2745,2746,2747,2748,521,2749,2750,521,2751,638,521,2752,521,2753,521,2754,521,2755,2756,533,521,521,521,2757,2586,521,2758,533,521,521,521,2759,2586,2760,521,2761,533,521,521,521,2762,2763,2764,660,890,521,2765,2766,533,521,521,521,2767,2768,2769,521,2770,521,2771,2772,533,521,521,521,2773,521,2774,2775,2776,521,2777,2778,521,2779,2780,2781,521,2782,1916,533,521,2783,2784,521,2785,2786,521,2787,521,2788,521,2789,518],"327":[2790,521,521,2791,2792,521,1918,533,521,521,521,2793,2794,2795,2796,2592,521,2797,2798,521,521,521,2799,521,524,518],"328":[2800,2801,2802,2803,2804,521,2805,521,2806,2807,2808,521,2809,661,521,2810,521,2811,533,521,731,521,2812,2813,521,2806,2814,521,2815,521,2816,518],"329":[2817,668,2818,521,2819,533,521,785,521,2820,521,2821,521,524,518],"330":[2822,2823,518],"331":[2824,2825,611,521,2826,2827,521,2828,2829,2830,2831,2830,533,521,2832,2833,521,2834,533,521,2835,2836,1690,521,2837,518],"332":[2838,521,521,2744,2745,2839,2840,2841,521,2842,2843,2844,521,2845,521,2846,638,521,2847,892,2848,521,897,521,2849,533,521,521,521,2757,2586,521,2850,533,521,521,521,2759,2586,521,2851,533,521,521,521,2762,2763,2764,660,890,521,2765,2766,533,521,521,521,2852,521,2771,2772,533,521,521,521,2773,521,2774,2775,2776,521,2777,2778,521,2779,2780,2781,521,2782,1916,533,521,2783,2853,521,2854,2855,521,2787,521,2856,521,2857,518],"333":[2858,1043,2859,2319,521,2860,521,766,2861,829,521,2862,2863,2864,2865,2866,521,851,533,521,524,518],"334":[2867,2868,2869,2870,2871,2872,2785,2873,2786,2874,521,2875,521,2789,518],"335":[2876,2868,2869,2870,2877,521,2878,518],"336":[2879,2880,2768,2881,2882,521,2883,521,524,518],"337":[2884,2885,2886,521,2887,521,915,533,521,2888,521,2889,518],"338":[2890,2891,518],"339":[2892,2893,518],"340":[2894,2895,521,2896,518],"341":[2897,2898,518],"342":[2899,668,2900,521,785,521,2901,521,2902,521,2903,2904,2905,521,2538,1472,521,2906,2907,521,776,2908,2909,2910,2911,521,2912,2913,521,2914,521,2915,684,533,518],"343":[2916,2917,2918,521,2919,2920,521,521,521,2921,781,521,521,521,2922,2923,521,2924,521,2925,2926,521,2927,939,2928,2929,2930,521,2931,939,2932,660,890,521,521,521,2933,533,518],"344":[2934,2935,521,2936,518],"345":[2937,521,521,2938,2939,2940,2941,521,2942,521,2943,533,521,521,521,2944,521,2945,521,2946,518],"346":[2947,2948,2949,521,524,518],"347":[2950,2951,521,2952,518],"348":[2953,1148,521,2954,2955,2956,2957,2958,2959,521,524,518],"349":[2960,1148,2961,521,2962,2963,2964,2965,2966,2967,2968,2969,2970,2971,521,2972,2973,2974,2975,2976,2977,2978,2979,521,2980,533,521,524,518],"350":[2981,555,2982,2983,2984,2748,2985,2986,521,556,2987,781,521,521,521,2988,521,2989,2990,2991,521,734,661,521,521,521,732,2992,521,2993,2994,521,734,661,521,521,521,2995,2996,521,2997,2998,521,732,2998,521,521,521,2999,2992,521,2993,3000,3001,521,734,661,521,521,521,3002,3003,521,3004,3005,3006,521,3007,521,3008,3009,521,910,683,661,521,521,521,3010,2992,521,2993,3000,3011,3012,521,734,661,521,3013,3014,533,521,3015,3016,3017,521,3018,3019,521,524,518],"351":[3020,3021,3022,521,3023,3024,521,3025,3026,521,521,521,3027,1177,3028,521,3029,3030,521,3031,3032,3033,521,3034,660,890,533,521,521,521,3035,1177,3028,521,3029,3036,521,3031,3032,3033,521,3037,660,890,533,521,521,521,3038,3039,521,3040,521,3041,533,521,521,521,2982,3042,3043,3044,521,3045,518],"352":[3046,521,521,3047,3048,3049,521,3050,518],"353":[3051,3052,518],"354":[3053,2630,3054,521,3055,3056,3057,521,3058,521,3059,3060,3061,3062,3063,3064,759,760,521,3065,3066,3067,521,524,518],"355":[3068,2537,521,2538,1472,521,2906,2907,3069,3070,521,3071,3072,521,3073,3074,521,3075,521,776,3076,3077,3078,521,2925,911,521,734,661,521,3074,533,518],"356":[3079,521,521,3080,521,3081,917,521,3082,3083,521,3084,3085,661,521,915,533,521,521,521,1148,3086,3087,521,3088,3089,3090,3091,3092,3093,3094,3095,521,3096,521,3097,521,3098,521,3099,521,3100,521,3101,521,3102,533,521,524,518],"357":[3103,518],"358":[3104,3105,521,3106,518],"359":[3107,3108,518],"360":[3109,2888,521,3110,518],"361":[3111,3112,521,521,521,1753,1754,1756,521,1757,1758,521,3113,521,3114,1762,1763,521,3115,521,521,521,521,521,3116,518],"362":[3117,3118,3119,521,521,521,3120,918,3121,521,3122,521,743,521,3123,521,743,521,3124,521,743,3125,3126,3127,1884,3128,521,3129,533,521,521,521,3130,918,3131,3132,3133,3121,521,521,521,3122,521,743,521,3123,521,743,521,3124,521,743,3125,521,3134,3135,521,743,1884,521,521,521,3136,3137,3127,1884,3128,1884,521,521,521,3138,3139,3140,3141,3142,3143,521,3144,521,3145,521,1445,3146,521,3147,3148,521,1445,521,3149,3150,521,1445,521,3151,3152,661,521,3153,521,3129,533,521,521,521,3154,3155,918,521,3156,3157,3158,3159,3160,521,3161,521,743,521,3162,521,743,521,3163,521,743,521,3164,3165,3166,3167,521,2229,533,521,521,521,3168,3169,521,3170,521,3171,521,3172,521,915,533,521,521,521,3173,3174,3175,521,3176,3177,521,3178,521,3179,661,521,3180,533,521,521,521,3181,3182,3183,521,3184,3185,661,533,521,521,521,3186,3187,521,3188,3189,759,3190,521,3191,3192,521,3193,3194,521,3195,521,3196,521,3197,3198,521,3199,3200,521,3201,3202,518],"363":[3203,3204,2478,2479,3205,521,524,518],"364":[3206,3207,3208,3209,759,3208,518],"365":[3210,3211,518],"366":[3212,1700,3213,521,1702,521,521,521,3214,918,521,3215,3216,521,1445,661,521,1446,533,521,521,521,3217,521,3218,3219,521,1706,3220,3221,521,3222,3223,660,3224,3225,3226,3227,521,3222,3223,3228,3229,661,521,3230,521,3231,533,521,521,521,3232,725,726,521,1706,3233,521,3234,3235,3236,3237,3238,521,972,3239,3240,521,3241,3242,521,3243,3244,521,3245,3246,521,3247,3248,661,521,3249,726,521,3250,726,521,3251,726,521,3252,726,521,3253,726,521,1242,533,521,521,521,3254,725,726,521,1508,726,521,972,3255,1411,661,521,1242,533,521,521,521,776,3256,521,3257,684,661,533,518],"367":[3258,3259,518],"368":[3260,3261,3262,521,3263,3264,521,3265,521,3266,3267,3268,3269,759,760,518],"369":[3270,3271,3272,521,3273,3274,521,3275,3276,521,897,533,521,524,518],"370":[3277,3278,521,3279,3280,518],"371":[3281,3282,3283,521,3284,518],"372":[3285,3286,521,3287,3288,521,3289,518],"373":[3290,3291,3292,3293,521,2538,3294,521,3295,3296,518],"374":[3297,3291,3292,3293,521,2538,3294,521,3298,3296,518],"375":[3299,3300,521,3301,518],"376":[3302,3303,518],"377":[3304,1228,575,521,3305,521,3306,575,521,3307,518],"378":[3308,1228,575,521,3305,521,3306,575,521,3309,518],"379":[3310,2918,521,2919,2920,521,521,521,2921,781,521,521,521,2925,3311,2929,3312,660,890,521,521,521,2933,533,518],"380":[3313,3314,3315,521,3316,518],"381":[3317,3318,3319,3320,521,3321,3322,521,3323,3324,660,3325,533,521,3326,3323,3327,660,3328,533,521,524,518],"382":[3329,3330,3331,521,3332,521,521,521,3333,3334,3335,3336,521,3337,3338,521,3339,3340,521,3341,521,3342,3343,521,3344,533,521,521,521,3345,521,3346,3347,3348,521,3084,3349,661,521,760,533,521,521,521,3350,917,521,3347,3348,521,3351,3085,661,521,915,533,521,521,521,1148,3352,3087,521,3353,3354,521,3088,3089,3090,3091,3355,3356,3092,3093,3357,3358,3359,3360,3361,3362,521,3096,521,3363,521,3364,3365,3366,521,3367,521,3368,521,3369,521,3370,521,3371,661,521,3102,533,521,524,518],"383":[3372,521,521,3373,521,3374,3375,3376,521,3377,661,521,3378,521,3379,3380,521,638,661,521,521,521,750,521,3381,3382,521,3383,521,3384,533,521,521,521,3385,2006,3386,521,3387,521,3382,521,521,521,3388,3389,3390,521,3391,3392,521,521,521,3393,3394,3395,521,3396,3397,521,521,521,3398,3399,3400,521,3401,3402,533,521,521,521,3403,3404,533,521,521,521,521,521,3405,521,3406,3407,3408,3409,3410,3411,3412,3413,3414,3415,3416,3417,3418,3419,3420,3421,3422,3423,3424,3425,3426,3427,3428,3429,3430,3431,3432,3433,3434,3435,3436,521,3437,3438,521,3439,3440,3441,3442,3443,3444,3445,521,3446,3447,3448,521,3449,521,3450,521,3451,521,3452,3453,3454,3455,521,3456,3457,3458,521,3459,3460,3461,3462,3463,3464,3465,3466,3467,3468,3469,3470,3471,3472,3473,521,3474,3475,3476,3477,3478,3479,3480,3481,3482,3483,3484,3485,3486,3487,3488,3489,521,3490,3491,3492,3493,3494,3495,3496,3497,3498,3499,3500,3501,3502,3503,3504,3505,3506,3507,3508,3509,3510,3511,3512,3513,3514,3515,3516,3517,521,3518,3519,3520,3521,3522,3523,3524,3525,3526,3527,3528,3529,3530,3531,3532,3533,3534,3535,3536,3537,3538,3539,3540,3541,3542,3543,3544,3545,3546,3547,3548,3549,3550,3551,3552,3553,3554,3555,3556,3557,3558,521,1919,518],"384":[3559,731,521,567,3560,521,3561,733,660,3562,661,533,521,1710,518],"385":[3563,3564,3565,3566,3567,3568,521,524,518],"386":[3569,1741,521,3570,3571,521,3572,533,521,524,518],"387":[3573,3574,521,3575,521,524,518],"388":[3576,3577,518],"389":[3578,3579,521,3575,521,524,518],"390":[3580,3581,518],"391":[3582,3583,518],"392":[3584,3585,518],"393":[3586,545,3587,521,3588,533,521,1430,521,3589,518],"394":[3590,3591,521,3592,3575,521,524,518],"395":[3593,3594,518],"396":[3595,3596,518],"397":[3597,3598,518],"398":[3599,3600,518],"399":[3601,3602,518],"400":[3603,3604,518],"401":[3605,3606,3607,521,3608,3609,521,524,518],"402":[3610,3611,518],"403":[3612,3613,518],"404":[3614,3615,521,3592,3575,521,524,518],"405":[3616,3617,3618,521,3619,521,3620,3621,3622,3623,3624,521,3625,518],"406":[3626,3627,521,3592,521,524,518],"407":[3628,3629,518],"408":[3630,3631,518],"409":[3632,3633,518],"410":[3634,3635,518],"411":[3636,3637,518],"412":[3638,3639,518],"413":[3640,3641,518],"414":[3642,521,521,3643,2339,2340,2341,521,915,533,521,521,521,3644,917,3645,521,3004,3646,521,3647,3648,521,1957,521,826,683,521,3649,521,2335,521,3650,826,521,3651,3652,521,1957,521,3653,3654,683,661,521,915,533,521,521,521,3655,3656,521,3657,533,521,521,521,3658,3656,521,3659,533,521,521,521,1462,521,3660,3661,521,3662,521,521,521,3663,3664,521,3665,3666,3667,521,3668,661,521,3669,521,3670,533,521,521,521,3671,521,3672,3673,3674,3675,3676,521,3677,533,521,3678,521,521,521,3679,521,3680,3681,521,3682,3683,521,3684,3685,521,2051,3686,3687,521,3688,521,521,3689,521,3690,3691,521,3692,3693,521,521,3689,521,3694,3695,3696,521,3697,3698,3699,3700,521,521,3701,3689,521,3697,3702,521,521,3703,3690,3704,521,3705,521,3706,3707,521,3708,661,521,521,521,3709,521,3692,3710,521,521,3690,3704,3691,521,3692,759,521,521,3697,521,3690,3704,3695,521,3711,3712,521,521,521,3706,3707,3713,3714,521,3715,661,521,521,521,3699,533,521,3716,518],"415":[3717,3718,518],"416":[3719,3720,521,3721,521,524,518],"417":[3722,3723,521,3575,521,524,518],"418":[3724,3725,518],"419":[3726,3727,518],"420":[3728,3729,521,3730,521,524,518],"421":[3731,521,521,3732,521,3733,521,3734,521,3735,3736,521,3737,3738,3739,3740,533,521,3741,521,521,521,3742,3743,2080,521,3744,3745,521,3746,3747,660,3748,521,2082,2083,3749,521,3750,3751,3752,3753,521,3754,939,2451,521,3755,3756,661,521,3757,533,521,3758,518],"422":[3759,3760,518],"423":[3761,545,3762,521,3763,518],"424":[3764,3765,518],"425":[3766,3767,521,3575,521,524,518],"426":[3768,3769,518],"427":[3770,3771,521,3592,3575,521,524,518],"428":[3772,3773,518],"429":[3774,3775,3776,3777,3778,3779,518],"430":[3780,3781,575,521,3782,575,521,3783,575,521,577,518],"431":[3784,3785,521,3786,3787,521,524,518],"432":[3788,3789,521,3790,3791,521,524,518],"433":[3792,3793,3794,521,3795,533,521,3796,521,3797,518],"434":[3798,3799,521,3800,1447,521,3801,3802,521,3803,521,3804,3805,3806,3807,521,3808,3809,521,3284,518],"435":[3810,3811,1459,3812,521,3813,3814,521,3815,3816,521,734,661,521,3817,521,3818,3816,521,734,661,521,3819,533,521,3820,521,3284,518],"436":[3821,3822,3823,3824,521,3825,3826,518],"437":[3827,521,521,3828,1091,3829,521,3082,3083,521,3830,826,521,3831,661,521,915,533,521,521,521,3832,3833,521,3834,3835,521,3836,1049,521,3837,521,3354,533,521,521,521,3838,3839,521,3840,3841,734,521,3842,521,3843,1049,521,3844,533,518],"438":[3845,521,521,3846,3847,3848,3849,521,3850,3851,3852,533,521,521,521,3853,3854,3855,521,3856,3857,521,3858,3859,660,3860,521,3861,3862,3863,3864,521,3865,533,521,521,521,3866,521,3867,3868,521,3869,521,3870,518],"439":[3871,3872,521,3873,3874,3875,521,3082,3083,521,521,521,3876,826,521,3877,521,3878,3879,3880,661,533,521,3881,3882,521,3883,3884,533,521,524,518],"440":[3885,3886,3887,521,3888,3889,1047,3890,521,3891,734,521,521,521,3892,734,521,3893,3894,521,3895,734,521,521,521,3896,521,3897,1049,521,3898,521,521,521,3899,533,521,521,521,3900,3901,518],"441":[3902,3903,521,3904,3905,521,521,521,3906,3907,521,3908,3909,521,3910,3911,521,3912,521,3913,521,3914,521,3915,3916,521,3917,521,521,521,3918,521,521,521,3919,521,524,518],"442":[3920,3921,521,1594,1595,521,3891,734,521,3922,3923,521,3924,3925,521,3926,521,3927,533,521,3928,521,3929,518],"443":[3930,3867,3868,521,3869,521,3931,518],"444":[3932,3886,521,3933,518],"445":[3934,2951,3935,3936,2982,521,3937,3938,521,524,518],"446":[3939,1462,3940,521,1753,1754,3941,1756,521,3942,521,3943,1761,1762,1763,521,3944,518],"447":[3945,3946,3947,1690,521,3948,521,3949,521,3950,3951,3952,521,3953,521,3954,521,2477,521,3955,521,3956,521,524,518],"448":[3957,3958,521,3959,521,3960,521,3961,3962,3963,521,3964,518],"449":[3965,3966,521,3967,521,3968,3969,521,3970,521,3971,533,521,524,518],"450":[3972,3966,3958,521,3973,521,3964,518],"451":[3974,3975,3958,521,3976,521,3964,518],"452":[3977,1043,3978,521,3979,3980,3981,521,3982,3983,521,915,533,521,3984,521,3985,521,3986,521,3987,3988,3989,521,3990,3991,521,524,518],"453":[3992,3958,521,3993,3994,3995,521,3964,518],"454":[3996,3966,3958,521,3997,521,3964,518],"455":[3998,3966,521,1043,3999,3989,4000,521,3990,3991,521,524,518],"456":[4001,4002,518],"457":[4003,4004,518],"458":[4005,4006,518],"459":[4007,1043,4008,3994,4009,3994,4010,3989,4000,521,3990,3991,521,524,518],"460":[4011,4012,518],"461":[4013,4014,518],"462":[4015,4016,518],"463":[4017,3984,3958,521,4018,521,4019,521,4020,521,1146,518],"464":[4021,3984,3958,521,4022,521,4023,521,4024,521,3964,518],"465":[4025,4026,3958,521,4027,518],"466":[4028,3958,521,4029,521,3979,4030,759,4031,521,4032,533,521,3964,518],"467":[4033,3975,3958,521,3976,4034,521,3964,518],"468":[4035,3958,521,4008,4036,521,3964,518],"469":[4037,3966,521,1043,4038,3989,3978,521,3990,3991,521,524,518],"470":[4039,4026,3958,521,4040,518],"471":[4041,1043,4008,3994,4042,3989,4000,521,3990,3991,521,524,518],"472":[4043,3958,521,3979,4044,521,4045,533,521,4008,4046,521,3964,518],"473":[4047,1043,521,4048,4049,521,4050,521,851,533,521,4051,4052,521,4053,4054,521,4055,4056,521,524,518],"474":[4057,1043,521,4048,4049,521,4050,521,851,533,521,4058,4059,4060,521,4061,4062,521,4063,4064,533,521,524,518],"475":[4065,3958,521,3985,521,3986,521,4066,4067,4068,4069,521,3964,518],"476":[4070,1043,4008,4071,3994,4010,3989,4000,521,3990,3991,521,524,518],"477":[4072,1043,4008,3994,4073,3989,4000,521,3990,3991,521,524,518],"478":[4074,521,521,4075,4076,1178,521,4077,4078,521,4079,521,4080,4081,521,4082,4083,521,4084,661,521,760,533,521,521,521,1043,4085,521,4086,521,4087,4088,521,4089,4090,521,4091,734,521,4092,4093,521,4094,533,521,4095,4096,4097,4069,3989,3978,521,3990,3991,521,524,518],"479":[4098,1043,521,4099,4100,521,4101,533,521,524,518],"480":[4102,4103,4104,521,4105,611,521,4099,4106,4107,660,734,521,4108,521,4109,638,533,521,4110,612,4111,521,620,518],"481":[4112,4113,4114,521,4115,521,4116,521,4117,521,4118,521,4119,4120,1242,533,521,4121,521,1247,518],"482":[4122,521,521,4123,917,521,4124,4125,4126,521,4127,4128,521,826,683,521,4129,521,4130,661,521,915,533,521,521,521,4131,4132,4133,4134,521,4135,521,4136,4137,4138,521,3185,683,661,521,4139,4140,4141,4142,4143,4144,4145,521,4146,521,4147,4148,521,4149,4150,4151,521,826,683,521,4152,521,4153,521,4079,521,4154,4155,521,4156,4151,521,826,683,521,4157,521,4158,4159,4160,521,4161,4162,4163,4164,4165,521,4166,661,521,4167,521,4168,521,915,533,521,521,521,4169,4170,4171,521,4172,4173,4174,4175,521,4176,4177,521,679,680,4178,4179,521,826,683,521,4180,661,521,4181,533,521,521,521,4182,4183,729,521,4184,729,521,575,533,521,521,521,4185,518],"483":[4186,4187,4188,4189,521,4190,521,4191,4192,521,1109,4193,4194,1722,4195,521,1724,533,521,4196,518],"484":[4197,4198,521,4199,518],"485":[4200,4201,521,521,521,4202,917,4203,4204,943,4205,521,4206,4207,521,4208,4209,4210,4211,4212,521,4213,939,2451,661,521,4214,4215,4216,4217,4218,4219,521,851,521,3706,4220,521,4221,4222,683,521,4223,661,521,4224,4225,4226,521,4227,661,521,915,533,521,521,521,4228,893,4229,4230,521,896,521,4231,4232,892,521,897,533,518],"486":[4233,521,521,4123,4234,4235,4236,521,4237,4238,521,4239,4240,4241,939,910,661,521,4143,521,4242,4243,521,4244,661,521,4245,4246,4247,521,4248,533,521,521,521,1043,4249,521,4250,4251,521,851,533,521,524,518],"487":[4252,521,521,4123,917,521,4124,4253,4126,521,4127,4128,521,826,683,521,4254,521,4255,661,521,915,533,521,521,521,4256,917,4203,521,4257,4258,4143,4259,4260,521,4261,521,4262,4263,4264,4259,4265,521,4266,521,4257,4267,4143,4259,4268,521,4269,521,4257,4270,4143,4259,4271,521,4272,521,915,533,521,521,521,4185,518],"488":[4273,521,521,4274,521,4275,4276,521,4277,684,521,4278,521,4279,521,915,533,521,521,521,731,521,4280,4281,533,521,981,4282,4283,521,4280,4284,4216,521,4285,4286,521,4287,521,4288,4289,533,521,4290,521,1000,4291,4292,4293,4294,521,4295,4296,521,4297,661,521,4298,533,521,4299,4300,521,4301,521,4302,4303,4304,521,4305,521,4306,4307,521,4308,521,4309,4310,521,4311,521,4312,4313,521,4314,521,4315,4316,521,4317,521,4318,4319,4320,521,4321,521,4322,521,1894,518],"489":[4323,521,521,4324,4325,4326,4327,4328,4329,4330,521,4331,4332,521,4333,4334,660,4335,521,4336,4332,4337,521,4338,521,4339,661,521,4340,4341,4342,1049,521,4343,521,4344,521,4345,521,4346,521,4347,521,4348,533,521,521,521,4349,4350,638,521,4351,4352,521,4353,533,521,4354,917,521,972,4355,521,2505,661,521,915,533,521,521,521,4356,917,4357,4358,4359,521,4360,4361,521,2335,661,521,4362,521,915,533,521,521,521,4363,4364,521,4365,684,521,4366,521,4365,684,521,760,533,521,521,521,4367,4368,521,4369,4370,521,4371,734,521,4372,521,4373,533,518],"490":[4374,4375,521,4376,2925,4377,521,4378,661,521,4379,4380,521,4381,533,521,4382,4383,4384,985,4385,4386,4387,4388,521,4389,518],"491":[4390,4391,1242,521,4392,4393,726,533,521,577,518],"492":[4394,4395,575,521,4396,4397,521,4398,1242,521,4399,521,4400,518],"493":[4401,1043,4402,4403,4404,4405,4406,3087,521,3088,4407,2133,4408,4409,4410,521,851,533,521,524,518],"494":[4411,4113,4412,521,4115,521,521,521,4413,521,521,4414,1020,4415,4416,4417,4418,521,4419,521,1770,521,4420,521,4421,4422,1790,891,521,897,521,4423,638,521,4424,4425,4426,4427,4428,4429,4430,4232,521,897,521,4431,4428,4432,4232,521,897,521,521,521,4433,4434,521,4435,521,1025,4436,1027,521,4437,910,521,4438,661,521,4439,4440,4441,521,4442,521,611,533,521,521,521,1109,4443,1722,575,533,521,577,518],"495":[4444,521,521,4445,725,726,521,4446,729,521,4447,729,521,575,533,521,521,521,4448,521,4449,4450,521,4451,4452,4453,521,684,661,521,4454,521,4455,4456,521,4457,521,915,533,521,4458,4459,521,524,518],"496":[4460,521,521,4123,917,4461,521,4237,4462,4463,521,2717,4464,4465,4466,521,4467,683,521,2505,661,521,915,533,521,521,521,4468,917,4469,4203,4215,4470,521,4471,4472,4473,521,4474,4475,4476,521,4477,4478,4163,4479,521,4480,521,4481,4482,4163,4483,521,4484,521,4485,4486,4163,4487,521,4488,521,4489,4490,4491,4492,4493,521,4494,521,4495,683,521,684,4496,4477,4497,4163,4479,521,4480,521,4481,4482,4163,4483,521,4484,521,4485,4498,4499,4487,521,4488,521,4489,4490,4491,4492,4493,521,4494,521,4495,683,521,684,661,521,4264,4145,521,3982,521,915,533,521,521,521,4500,4501,729,521,4502,729,521,575,533,521,521,521,4503,4504,729,521,4505,729,521,4506,729,521,575,533,521,521,521,4185,518],"497":[4507,4508,985,521,4509,4510,4511,521,4512,533,521,995,521,4280,4513,4514,4515,1008,1009,1010,521,1011,533,521,4516,521,4517,518],"498":[4518,1043,521,4099,4519,4520,4521,4522,521,637,734,521,521,521,4523,521,4524,4525,826,661,521,4143,4526,521,3982,533,521,524,518],"499":[4527,521,521,4528,4529,4530,826,521,4531,4532,521,4533,3185,521,4534,521,4535,661,521,4536,4537,521,4538,684,521,4539,521,4540,533,521,521,521,4397,4541,4542,4543,521,1109,4544,1722,4545,521,1724,533,518],"500":[4546,4547,4548,521,4549,4550,1043,521,4551,2662,4552,521,4553,4554,734,661,521,2664,4555,2666,521,4556,533,521,1039,1035,521,4557,521,524,518],"501":[4558,1244,772,521,1245,772,521,1241,772,521,1243,772,521,1252,4559,521,4560,521,4561,4562,521,4563,4564,521,4565,533,521,4566,4567,521,620,518],"502":[4568,1554,4569,4570,4571,4572,4573,4574,4575,4576,660,4577,4578,4579,521,4580,661,533,521,4581,518],"503":[4582,2059,521,2287,4583,4584,4585,4586,660,4587,533,521,4588,521,4589,4590,521,4591,533,521,4592,518],"504":[4593,4594,4595,4596,521,4597,518],"505":[4598,4594,4599,4600,4601,521,4602,518],"506":[4603,4604,521,4605,518],"507":[4606,4607,521,4608,518],"508":[4609,4610,518],"509":[4611,4607,521,4612,518],"510":[4613,4614,521,4615,518],"511":[4616,4617,4618,521,4619,518],"512":[4620,4621,521,4622,521,4623,518],"513":[4624,4625,521,4626,518],"514":[4627,4628,521,2039,518],"515":[4629,521,521,4630,725,726,521,4631,4632,521,4633,533,521,521,521,3261,4634,521,3979,4635,521,611,533,521,4636,521,4637,4635,521,611,533,521,521,521,4638,521,4639,4640,521,3946,521,3949,521,4641,521,4642,521,4643,611,521,3956,521,521,521,4644,611,521,4645,4646,4647,4648,4649,4116,4650,4651,521,4652,2802,2804,521,4653,4654,521,1057,533,521,2806,4655,4656,521,4657,661,533,521,521,521,4658,521,4659,521,1053,4660,4661,4662,4663,4664,4665,1049,521,1057,533,518]}
const fns={abs,add,and,angle,append,arr,asc,at,back,base36_decode,base36_encode,between,brace,bracket,byte_size,capture,char_escape,check_arg,check_arity,check,chr,clear,clone,cmp,collate,concat,contain,count,crc,cut_l,cut_r,date_decode,date_str,dbg_backtrace,dbg_callstack,dbg_here,dbg_origin_xs,dbg_origin,dbg_source_map,dbg_source,dec,dedup,deinit_common,delimit,different,div,drop,dump,dup,eq,every,explode,extract,fallback_error,filter,find,flower_box,flower,fn_args,fn_match,fn_select,front,get_type,get,gt,gte,has,head,iif,implode,inc,init_common,insert,is_access,is_alnum,is_alpha,is_arg,is_arr,is_atom,is_blank,is_bool,is_browser,is_char,is_comment,is_composite,is_container,is_cool,is_def,is_digit,is_domain,is_empty,is_false,is_fn,is_fragment,is_full,is_gn,is_identifier,is_indented,is_int,is_ip,is_ip4,is_ip6,is_json,is_key,is_last,is_lisp,is_lit_char,is_lit,is_ln,is_lower,is_mail,is_many,is_name,is_node,is_none,is_noun,is_null,is_num,is_numeric,is_obj,is_pair,is_punct,is_single,is_space,is_str,is_token,is_trivia,is_true,is_tuple,is_txt,is_uint,is_undef,is_upper,is_url,is_user,is_ushort,is_vec,is_word,is_xn,is_rgb,join,json_decode,json_dump,json_encode,log_append,log,lt,lte,main,map,match_l,match_r,match,max,min,mod,mul,mute,neq,nop,not,obj_keys,obj_length,obj_merge,obj_option,obj_order,obj_push,obj_remove,obj_unshift,obj_vals,obj,on,or,pad_l,pad_r,paren,partial,path_concat,path_file,path_fix,path_join,path_split,path_strip,path_unfix,path_up,pop,prepend,profile,push,put,quote,random_str,random,record,reject,remove,repeat,replace_rec,replace,report_html,report_init,report_log,report_render,report_title,resolve,reverse,rgb_init,round,salt,same,scan,set,shift,shuffle,silent,sleep,slice_l,slice_r,slice,sort,space,split,squote,stop,str_indent,strip_l,strip_r,sub,tail,task_dump,task_run,tbl_column,tbl_columns,tbl_index,tbl_init,tbl_pad_l,tbl_remove_column,tbl_rename_column,tbl_render,tbl_sort,time_delay,time_get,time_hn,time_interval,time_now,time_str,time_timeout,to_base36,to_dump,to_fixed,to_hex,to_i,to_int,to_json,to_lit,to_lower,to_num,to_str,to_tbl,to_uint,to_upper,trace,trim_l,trim_r,trim,trunc,tty_width,txt_compact,txt_cut,txt_indent,txt_inline,txt_prepend,txt_unindent,unaccent,unshift,unwrap,url_beautify,url_get,url_parse,wait,xor,app_list,beep,deinit_node,digest,dir_call,dir_change,dir_current,dir_empty,dir_find,dir_load,dir_make,dir_read,dir_reset,dir_size,file_append,file_load,file_read,file_save,file_size,file_write,fs_change_mode,fs_copy,fs_created,fs_mode,fs_modified,fs_remove,http_get,init_node,inspect,ip_host,ip_list,ip_v4,ip_v6,is_batch,is_color,is_dir,is_file,is_fs,is_interactive,is_readable,is_symbolic_link,no_umask,node_argv,node_context,open,os_capture,os_detach,os_execute,os_home,os_host,os_log,os_prompt,os_ps,os_run,os_shell,os_system,os_user,path_base,path_dir,path_ext,path_real,path_tmp,path_writable,report_mail,sigint,to_base64,ansi_encode,ansi_get_attrs,ansi_get_colors,ansi_head,ansi_init,ansi_rgb,ansi_strip,app_token,archive_find,group_list,init_shell,is_local,is_remote,is_root,mail_debug,mail,mime_type,mnt_clean,mnt_unmount,password,ssh_execute,ssh_pass,ssh_system,sudo_dir_make,sudo_file_append,sudo_file_read,sudo_file_save,sudo_file_write,sudo_fs_change_mode,sudo_fs_remove,sudo_is_dir,sudo_is_file,sudo_path_writable,sudo,user_created,user_list,dom_entities,dom_escape,dom_special_chars,dom_unescape,h_a,h_attr,h_b,h_back_color,h_body,h_bold,h_border,h_br,h_color,h_decoration,h_div,h_float,h_font_family,h_font_size,h_head,h_href,h_html,h_img,h_init,h_meta,h_padding_bottom,h_padding_left,h_padding_right,h_padding_top,h_padding,h_pre,h_push,h_render,h_script,h_spacer,h_span,h_src,h_style,h_table,h_tbl,h_td,h_text,h_th,h_title,h_tr,h_wbr,h_width,init_www,is_link,link_dom,link_h,link_init,config_append,config_clean,init_org,org_group_create_users,org_user_install,org_user_load,org_user_remove_unused,org_user_remove,org_user_save,org_user_uninstall,org_user_update,ps1_encode,app_home,app_make,ast_assign,ast_begin,ast_brk,ast_call,ast_catch,ast_check,ast_cont,ast_else,ast_elseif,ast_fn,ast_forin,ast_fornum,ast_forof,ast_gn,ast_if,ast_include,ast_inline,ast_let,ast_ret,ast_run,ast_throw,ast_try,ast_var,ast_while,ast_yield,call_ast_block_top,call_ast_block,call_ast_declare,call_ast_for,call_ast_if,call_ast_xn,cpl_block,cpl_check_fn,cpl_check_syntax,cpl_check,cpl_compile,cpl_deinit,cpl_dump,cpl_fold,cpl_for,cpl_generate,cpl_include,cpl_init,cpl_is_call,cpl_is_leaf,cpl_load,cpl_log_error,cpl_scan,cpl_scope,cpl_source_map,cpl_tokenize,cpl_translate,cpl_uncomment,call_expr_arg,call_expr_right,call_expr_rvalue,expr_arr,expr_call,expr_iif,expr_in,expr_inline,expr_instanceof,expr_new,expr_not,expr_obj,expr_run,expr_value,init}
main()