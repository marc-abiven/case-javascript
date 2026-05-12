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
              output=is_fn(s)?s():s
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
 output=""
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
    output=null
    throw is_fn(e)?e():e
   }
   const _=trim_r(output)
   {
    const s=_
    {
     output=null
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
 const _={}
 {
  const r=_
  {
   const _=is_fn(pkg_list)?pkg_list():pkg_list
   {
    const pkgs=_
    {
     const _=is_fn(pkgs)?pkgs():pkgs
     {
      for(const k in _)
      {
       const _=get(pkgs,k)
       {
        const v=_
        {
         const _=path_base(v)
         {
          const base=_
          {
           if(match_l(base,"app-"))
            put(r,k,v)
           else if(match_l(base,"spa-"))
            put(r,k,v)
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
function pkg_list(dir)
{
 if(is_undef(dir))
  return pkg_list("src")
 const _={}
 {
  const pkgs=_
  {
   const _=dir_read(dir,true)
   {
    const _a=_
    {
     const _=is_fn(_a)?_a():_a
     {
      for(const k in _)
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
             if(match_l(base,"app"))
             {
              const _=strip_l(base,"app-")
              {
               const name=_
               put(pkgs,name,v)
              }
             }
             else if(match_l(base,"spa"))
             {
              const _=strip_l(base,"spa-")
              {
               const name=_
               put(pkgs,name,v)
              }
             }
             else if(match_l(base,"lib"))
             {
              const _=strip_l(base,"lib-")
              {
               const name=_
               put(pkgs,name,v)
              }
             }
             else if(match_l(base,"prj"))
             {
              const _=pkg_list(v)
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
                   put(pkgs,k,v)
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
      return sort(pkgs)
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
 function is_callable(x)
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
 const _=pkg_include(cpl.app)
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
function pkg_include(pkg,b)
{
 check_arg(is_str,pkg,"pkg","str")
 check_arity("gte",arguments.length,1)
 function is_unique(x)
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
          const _=count(x,v)
          {
           const n=_
           {
            if(gt(n,1))
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
 const _=[]
 {
  const r=_
  {
   const _=is_fn(pkg_list)?pkg_list():pkg_list
   {
    const pkgs=_
    {
     const _=get(pkgs,pkg)
     {
      const dir=_
      {
       const _=path_concat(dir,"include.txt")
       {
        const path=_
        {
         if(is_file(path))
         {
          const _=file_load(path)
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
                      const _=strip_l(v,"lib-")
                      {
                       const name=_
                       {
                        const _=get(pkgs,name)
                        {
                         const path=_
                         {
                          const _=pkg_include(name)
                          {
                           const children=_
                           append(r,children)
                          }
                         }
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
         push(r,dir)
         check(is_unique,r)
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
 }
}
const app="make"
const compile=1777993116
const pool=["lib-common/abs.cs","lib-common/add.cs","lib-common/and.cs","lib-common/angle.cs","lib-common/append.cs","lib-common/arr.cs","lib-common/asc.cs","lib-common/at.cs","lib-common/back.cs","lib-common/base36-decode.cs","lib-common/base36-encode.cs","lib-common/between.cs","lib-common/brace.cs","lib-common/bracket.cs","lib-common/byte-size.cs","lib-common/capture.cs","lib-common/char-escape.cs","lib-common/check-arg.cs","lib-common/check-arity.cs","lib-common/check.cs","lib-common/chr.cs","lib-common/clear.cs","lib-common/clone.cs","lib-common/cmp.cs","lib-common/collate.cs","lib-common/concat.cs","lib-common/contain.cs","lib-common/count.cs","lib-common/crc.cs","lib-common/cut-l.cs","lib-common/cut-r.cs","lib-common/date-decode.cs","lib-common/date-str.cs","lib-common/dbg/dbg-backtrace.cs","lib-common/dbg/dbg-callstack.cs","lib-common/dbg/dbg-here.cs","lib-common/dbg/dbg-origin-xs.cs","lib-common/dbg/dbg-origin.cs","lib-common/dbg/dbg-source-map.cs","lib-common/dbg/dbg-source.cs","lib-common/dec.cs","lib-common/dedup.cs","lib-common/deinit-common.cs","lib-common/delimit.cs","lib-common/different.cs","lib-common/div.cs","lib-common/drop.cs","lib-common/dump.cs","lib-common/dup.cs","lib-common/eq.cs","lib-common/every.cs","lib-common/explode.cs","lib-common/extract.cs","lib-common/fallback-error.cs","lib-common/filter.cs","lib-common/find.cs","lib-common/flower-box.cs","lib-common/flower.cs","lib-common/fn-args.cs","lib-common/fn-match.cs","lib-common/fn-select.cs","lib-common/front.cs","lib-common/get-type.cs","lib-common/get.cs","lib-common/gt.cs","lib-common/gte.cs","lib-common/has.cs","lib-common/head.cs","lib-common/iif.cs","lib-common/implode.cs","lib-common/inc.cs","lib-common/init-common.cs","lib-common/insert.cs","lib-common/is/is-access.cs","lib-common/is/is-alnum.cs","lib-common/is/is-alpha.cs","lib-common/is/is-arg.cs","lib-common/is/is-arr.cs","lib-common/is/is-atom.cs","lib-common/is/is-blank.cs","lib-common/is/is-bool.cs","lib-common/is/is-browser.cs","lib-common/is/is-char.cs","lib-common/is/is-comment.cs","lib-common/is/is-composite.cs","lib-common/is/is-container.cs","lib-common/is/is-cool.cs","lib-common/is/is-def.cs","lib-common/is/is-digit.cs","lib-common/is/is-domain.cs","lib-common/is/is-empty.cs","lib-common/is/is-false.cs","lib-common/is/is-fn.cs","lib-common/is/is-fragment.cs","lib-common/is/is-full.cs","lib-common/is/is-gn.cs","lib-common/is/is-identifier.cs","lib-common/is/is-indented.cs","lib-common/is/is-int.cs","lib-common/is/is-ip.cs","lib-common/is/is-ip4.cs","lib-common/is/is-ip6.cs","lib-common/is/is-json.cs","lib-common/is/is-key.cs","lib-common/is/is-last.cs","lib-common/is/is-lisp.cs","lib-common/is/is-lit-char.cs","lib-common/is/is-lit.cs","lib-common/is/is-ln.cs","lib-common/is/is-lower.cs","lib-common/is/is-mail.cs","lib-common/is/is-many.cs","lib-common/is/is-name.cs","lib-common/is/is-node.cs","lib-common/is/is-none.cs","lib-common/is/is-noun.cs","lib-common/is/is-null.cs","lib-common/is/is-num.cs","lib-common/is/is-numeric.cs","lib-common/is/is-obj.cs","lib-common/is/is-pair.cs","lib-common/is/is-punct.cs","lib-common/is/is-single.cs","lib-common/is/is-space.cs","lib-common/is/is-str.cs","lib-common/is/is-token.cs","lib-common/is/is-trivia.cs","lib-common/is/is-true.cs","lib-common/is/is-tuple.cs","lib-common/is/is-txt.cs","lib-common/is/is-uint.cs","lib-common/is/is-undef.cs","lib-common/is/is-upper.cs","lib-common/is/is-url.cs","lib-common/is/is-user.cs","lib-common/is/is-ushort.cs","lib-common/is/is-vec.cs","lib-common/is/is-word.cs","lib-common/is/is-xn.cs","lib-common/is-rgb.cs","lib-common/join.cs","lib-common/json-decode.cs","lib-common/json-dump.cs","lib-common/json-encode.cs","lib-common/log-append.cs","lib-common/log.cs","lib-common/lt.cs","lib-common/lte.cs","lib-common/main.cs","lib-common/map.cs","lib-common/match-l.cs","lib-common/match-r.cs","lib-common/match.cs","lib-common/max.cs","lib-common/min.cs","lib-common/mod.cs","lib-common/mul.cs","lib-common/mute.cs","lib-common/neq.cs","lib-common/nop.cs","lib-common/not.cs","lib-common/obj/obj-keys.cs","lib-common/obj/obj-length.cs","lib-common/obj/obj-merge.cs","lib-common/obj/obj-option.cs","lib-common/obj/obj-order.cs","lib-common/obj/obj-push.cs","lib-common/obj/obj-remove.cs","lib-common/obj/obj-unshift.cs","lib-common/obj/obj-vals.cs","lib-common/obj.cs","lib-common/on.cs","lib-common/or.cs","lib-common/pad-l.cs","lib-common/pad-r.cs","lib-common/paren.cs","lib-common/partial.cs","lib-common/path/path-concat.cs","lib-common/path/path-file.cs","lib-common/path/path-fix.cs","lib-common/path/path-join.cs","lib-common/path/path-split.cs","lib-common/path/path-strip.cs","lib-common/path/path-unfix.cs","lib-common/path/path-up.cs","lib-common/pop.cs","lib-common/prepend.cs","lib-common/profile.cs","lib-common/push.cs","lib-common/put.cs","lib-common/quote.cs","lib-common/random-str.cs","lib-common/random.cs","lib-common/record.cs","lib-common/reject.cs","lib-common/remove.cs","lib-common/repeat.cs","lib-common/replace-rec.cs","lib-common/replace.cs","lib-common/report/report-html.cs","lib-common/report/report-init.cs","lib-common/report/report-log.cs","lib-common/report/report-render.cs","lib-common/report/report-title.cs","lib-common/resolve.cs","lib-common/reverse.cs","lib-common/rgb-init.cs","lib-common/round.cs","lib-common/salt.cs","lib-common/same.cs","lib-common/scan.cs","lib-common/set.cs","lib-common/shift.cs","lib-common/shuffle.cs","lib-common/silent.cs","lib-common/sleep.cs","lib-common/slice-l.cs","lib-common/slice-r.cs","lib-common/slice.cs","lib-common/sort.cs","lib-common/space.cs","lib-common/split.cs","lib-common/squote.cs","lib-common/stop.cs","lib-common/str-indent.cs","lib-common/strip-l.cs","lib-common/strip-r.cs","lib-common/sub.cs","lib-common/tail.cs","lib-common/task-dump.cs","lib-common/task-run.cs","lib-common/tbl/tbl-column.cs","lib-common/tbl/tbl-columns.cs","lib-common/tbl/tbl-index.cs","lib-common/tbl/tbl-init.cs","lib-common/tbl/tbl-pad-l.cs","lib-common/tbl/tbl-remove-column.cs","lib-common/tbl/tbl-rename-column.cs","lib-common/tbl/tbl-render.cs","lib-common/tbl/tbl-sort.cs","lib-common/time/time-delay.cs","lib-common/time/time-get.cs","lib-common/time/time-hn.cs","lib-common/time/time-interval.cs","lib-common/time/time-now.cs","lib-common/time/time-str.cs","lib-common/time/time-timeout.cs","lib-common/to/to-base36.cs","lib-common/to/to-dump.cs","lib-common/to/to-fixed.cs","lib-common/to/to-hex.cs","lib-common/to/to-i.cs","lib-common/to/to-int.cs","lib-common/to/to-json.cs","lib-common/to/to-lit.cs","lib-common/to/to-lower.cs","lib-common/to/to-num.cs","lib-common/to/to-str.cs","lib-common/to/to-tbl.cs","lib-common/to/to-uint.cs","lib-common/to/to-upper.cs","lib-common/trace.cs","lib-common/trim-l.cs","lib-common/trim-r.cs","lib-common/trim.cs","lib-common/trunc.cs","lib-common/tty-width.cs","lib-common/txt/txt-compact.cs","lib-common/txt/txt-cut.cs","lib-common/txt/txt-indent.cs","lib-common/txt/txt-inline.cs","lib-common/txt/txt-prepend.cs","lib-common/txt/txt-unindent.cs","lib-common/unaccent.cs","lib-common/unshift.cs","lib-common/unwrap.cs","lib-common/url-beautify.cs","lib-common/url-get.cs","lib-common/url-parse.cs","lib-common/wait.cs","lib-common/xor.cs","lib-node/app-list.cs","lib-node/beep.cs","lib-node/deinit-node.cs","lib-node/digest.cs","lib-node/dir/dir-call.cs","lib-node/dir/dir-change.cs","lib-node/dir/dir-current.cs","lib-node/dir/dir-empty.cs","lib-node/dir/dir-find.cs","lib-node/dir/dir-load.cs","lib-node/dir/dir-make.cs","lib-node/dir/dir-read.cs","lib-node/dir/dir-reset.cs","lib-node/dir/dir-size.cs","lib-node/file/file-append.cs","lib-node/file/file-load.cs","lib-node/file/file-read.cs","lib-node/file/file-save.cs","lib-node/file/file-size.cs","lib-node/file/file-write.cs","lib-node/fs/fs-change-mode.cs","lib-node/fs/fs-copy.cs","lib-node/fs/fs-created.cs","lib-node/fs/fs-mode.cs","lib-node/fs/fs-modified.cs","lib-node/fs/fs-remove.cs","lib-node/http-get.cs","lib-node/init-node.cs","lib-node/inspect.cs","lib-node/ip/ip-host.cs","lib-node/ip/ip-list.cs","lib-node/ip/ip-v4.cs","lib-node/ip/ip-v6.cs","lib-node/is/is-batch.cs","lib-node/is/is-color.cs","lib-node/is/is-dir.cs","lib-node/is/is-file.cs","lib-node/is/is-fs.cs","lib-node/is/is-interactive.cs","lib-node/is/is-readable.cs","lib-node/is/is-symbolic-link.cs","lib-node/no-umask.cs","lib-node/node-argv.cs","lib-node/node-context.cs","lib-node/open.cs","lib-node/os/os-capture.cs","lib-node/os/os-detach.cs","lib-node/os/os-execute.cs","lib-node/os/os-home.cs","lib-node/os/os-host.cs","lib-node/os/os-log.cs","lib-node/os/os-prompt.cs","lib-node/os/os-ps.cs","lib-node/os/os-run.cs","lib-node/os/os-shell.cs","lib-node/os/os-system.cs","lib-node/os/os-user.cs","lib-node/path/path-base.cs","lib-node/path/path-dir.cs","lib-node/path/path-ext.cs","lib-node/path/path-real.cs","lib-node/path/path-tmp.cs","lib-node/path-writable.cs","lib-node/pkg-list.cs","lib-node/report-mail.cs","lib-node/sigint.cs","lib-node/to-base64.cs","lib-shell/ansi/ansi-encode.cs","lib-shell/ansi/ansi-get-attrs.cs","lib-shell/ansi/ansi-get-colors.cs","lib-shell/ansi/ansi-head.cs","lib-shell/ansi/ansi-init.cs","lib-shell/ansi/ansi-rgb.cs","lib-shell/ansi/ansi-strip.cs","lib-shell/app-token.cs","lib-shell/archive-find.cs","lib-shell/group-list.cs","lib-shell/init-shell.cs","lib-shell/is-local.cs","lib-shell/is-remote.cs","lib-shell/is-root.cs","lib-shell/mail-debug.cs","lib-shell/mail.cs","lib-shell/mime-type.cs","lib-shell/mnt-clean.cs","lib-shell/mnt-unmount.cs","lib-shell/password.cs","lib-shell/ssh/ssh-execute.cs","lib-shell/ssh/ssh-pass.cs","lib-shell/ssh/ssh-system.cs","lib-shell/sudo/sudo-dir-make.cs","lib-shell/sudo/sudo-dir-reset.cs","lib-shell/sudo/sudo-file-append.cs","lib-shell/sudo/sudo-file-read.cs","lib-shell/sudo/sudo-file-save.cs","lib-shell/sudo/sudo-file-write.cs","lib-shell/sudo/sudo-fs-change-mode.cs","lib-shell/sudo/sudo-fs-remove.cs","lib-shell/sudo/sudo-is-dir.cs","lib-shell/sudo/sudo-is-file.cs","lib-shell/sudo/sudo-path-writable.cs","lib-shell/sudo/sudo.cs","lib-shell/user-created.cs","lib-shell/user-list.cs","lib-www/dom/dom-entities.cs","lib-www/dom/dom-escape.cs","lib-www/dom/dom-special-chars.cs","lib-www/dom/dom-unescape.cs","lib-www/h/h-a.cs","lib-www/h/h-attr.cs","lib-www/h/h-b.cs","lib-www/h/h-back-color.cs","lib-www/h/h-body.cs","lib-www/h/h-bold.cs","lib-www/h/h-border.cs","lib-www/h/h-br.cs","lib-www/h/h-color.cs","lib-www/h/h-decoration.cs","lib-www/h/h-div.cs","lib-www/h/h-float.cs","lib-www/h/h-font-family.cs","lib-www/h/h-font-size.cs","lib-www/h/h-head.cs","lib-www/h/h-href.cs","lib-www/h/h-html.cs","lib-www/h/h-img.cs","lib-www/h/h-init.cs","lib-www/h/h-meta.cs","lib-www/h/h-padding-bottom.cs","lib-www/h/h-padding-left.cs","lib-www/h/h-padding-right.cs","lib-www/h/h-padding-top.cs","lib-www/h/h-padding.cs","lib-www/h/h-pre.cs","lib-www/h/h-push.cs","lib-www/h/h-render.cs","lib-www/h/h-script.cs","lib-www/h/h-spacer.cs","lib-www/h/h-span.cs","lib-www/h/h-src.cs","lib-www/h/h-style.cs","lib-www/h/h-table.cs","lib-www/h/h-tbl.cs","lib-www/h/h-td.cs","lib-www/h/h-text.cs","lib-www/h/h-th.cs","lib-www/h/h-title.cs","lib-www/h/h-tr.cs","lib-www/h/h-wbr.cs","lib-www/h/h-width.cs","lib-www/init-www.cs","lib-www/is-link.cs","lib-www/link-dom.cs","lib-www/link-h.cs","lib-www/link-init.cs","lib-org/config-append.cs","lib-org/config-clean.cs","lib-org/init-org.cs","lib-org/org/org-group-create-users.cs","lib-org/org/org-user-install.cs","lib-org/org/org-user-load.cs","lib-org/org/org-user-remove-unused.cs","lib-org/org/org-user-remove.cs","lib-org/org/org-user-save.cs","lib-org/org/org-user-uninstall.cs","lib-org/org/org-user-update.cs","lib-org/ps1-encode.cs","lib-compiler/app-home.cs","lib-compiler/app-make.cs","lib-compiler/ast/ast-assign.cs","lib-compiler/ast/ast-begin.cs","lib-compiler/ast/ast-brk.cs","lib-compiler/ast/ast-call.cs","lib-compiler/ast/ast-catch.cs","lib-compiler/ast/ast-check.cs","lib-compiler/ast/ast-cont.cs","lib-compiler/ast/ast-else.cs","lib-compiler/ast/ast-elseif.cs","lib-compiler/ast/ast-fn.cs","lib-compiler/ast/ast-forin.cs","lib-compiler/ast/ast-fornum.cs","lib-compiler/ast/ast-forof.cs","lib-compiler/ast/ast-gn.cs","lib-compiler/ast/ast-if.cs","lib-compiler/ast/ast-include.cs","lib-compiler/ast/ast-inline.cs","lib-compiler/ast/ast-let.cs","lib-compiler/ast/ast-ret.cs","lib-compiler/ast/ast-run.cs","lib-compiler/ast/ast-throw.cs","lib-compiler/ast/ast-try.cs","lib-compiler/ast/ast-var.cs","lib-compiler/ast/ast-while.cs","lib-compiler/ast/ast-yield.cs","lib-compiler/ast/call-ast-block-top.cs","lib-compiler/ast/call-ast-block.cs","lib-compiler/ast/call-ast-declare.cs","lib-compiler/ast/call-ast-for.cs","lib-compiler/ast/call-ast-if.cs","lib-compiler/ast/call-ast-xn.cs","lib-compiler/cpl/cpl-block.cs","lib-compiler/cpl/cpl-check-fn.cs","lib-compiler/cpl/cpl-check-syntax.cs","lib-compiler/cpl/cpl-check.cs","lib-compiler/cpl/cpl-compile.cs","lib-compiler/cpl/cpl-deinit.cs","lib-compiler/cpl/cpl-dump.cs","lib-compiler/cpl/cpl-fold.cs","lib-compiler/cpl/cpl-for.cs","lib-compiler/cpl/cpl-generate.cs","lib-compiler/cpl/cpl-include.cs","lib-compiler/cpl/cpl-init.cs","lib-compiler/cpl/cpl-is-call.cs","lib-compiler/cpl/cpl-is-leaf.cs","lib-compiler/cpl/cpl-load.cs","lib-compiler/cpl/cpl-log-error.cs","lib-compiler/cpl/cpl-scan.cs","lib-compiler/cpl/cpl-scope.cs","lib-compiler/cpl/cpl-source-map.cs","lib-compiler/cpl/cpl-tokenize.cs","lib-compiler/cpl/cpl-translate.cs","lib-compiler/cpl/cpl-uncomment.cs","lib-compiler/expr/call-expr-arg.cs","lib-compiler/expr/call-expr-right.cs","lib-compiler/expr/call-expr-rvalue.cs","lib-compiler/expr/expr-arr.cs","lib-compiler/expr/expr-call.cs","lib-compiler/expr/expr-iif.cs","lib-compiler/expr/expr-in.cs","lib-compiler/expr/expr-inline.cs","lib-compiler/expr/expr-instanceof.cs","lib-compiler/expr/expr-new.cs","lib-compiler/expr/expr-not.cs","lib-compiler/expr/expr-obj.cs","lib-compiler/expr/expr-run.cs","lib-compiler/expr/expr-value.cs","lib-compiler/pkg-include.cs","app-make/init.cs","fn abs x:num"," ret Math.abs x","end","fn add x:num y:num z:etc"," let r inline \"x+y\"",""," if is_full z","  ret add r z:etc"," ret r","fn and x:bool y:bool z:etc"," let r inline \"x&&y\"","  ret and r z:etc","fn angle x:str"," ret concat \"<\" x \">\"","fn append x:arr y:arr"," for y","  push x v"," end","fn arr x:etc"," ret inline \"[...x]\"","fn asc x:char"," ret x.charCodeAt 0","fn at x:vec y:uint z"," let n dec x.length"," check between y 0 n"," if is_undef z","  ret inline \"x[y]\""," inline \"x[y]=z\"","fn back x:vec y z"," if is_undef y","  ret back x 0"," check is_uint y"," check lt y x.length"," let n sub x.length y"," let n dec n","  ret at x n"," at x n z","fn base36_decode x:str"," var r \"\""," let a explode x"," while is_full a","  let a2 slice_l a 4","  shift a 4","  let s implode a2","  let n Number.parseInt s 36","  let range mul 256 256","  check is_uint n","  check lte n range","  let c chr n","  assign r concat r c","fn base36_encode x:str"," for x","  let s asc v","  let s to_base36 s","  let s pad_l s \"0\" 4","  assign r concat r s","fn between x:num y:num z:num"," check gte z y"," if lt x y","  ret false"," if gt x z"," ret true","fn brace x:str"," ret concat \"{\" x \"}\"","fn bracket x:str"," ret concat \"[\" x \"]\"","fn byte_size x:uint"," if lt x kb","  let s to_fixed x","  ret concat s \"b\""," if lt x mb","  let s div x kb","  let s trunc s","  let s to_fixed s","  ret concat s \"Kb\""," if lt x gb","  let s div x mb","  ret concat s \"Mb\""," if lt x tb","  let s div x gb","  ret concat s \"Gb\""," let s div x tb"," let s trunc s"," let s to_fixed s"," ret concat s \"Tb\"","fn capture x:fn y:etc"," let o record x y:etc"," ret o.output","fn char_escape x:char"," let r json_encode x"," let r strip_l r \"\\\"\""," let r strip_r r \"\\\"\"","fn check_arg is arg name type"," let test is arg"," if is_true test","  ret"," let s_name to_lit name"," let s_type to_lit type"," let s_given get_type arg"," let s_given to_lit s_given"," let s_given space s_given \"given\""," let s_given paren s_given"," let message space \"Expecting argument\" s_name \"to be of type\" s_type s_given"," let message concat message \".\""," stop message","inline \"function check_arity(operator,length,arity)\"","inline \"{\"","inline \" if(operator===\\\"same\\\")\"","inline \" {\"","inline \"  if(length===arity)\"","inline \"   return\"","inline \" }\"","inline \"\"","inline \" if(operator===\\\"gte\\\")\"","inline \"  if(length>=arity)\"","inline \" const message=\\\"Expecting \\\"+arity+\\\" argument(s) (\\\"+length+\\\" given)\\\"\"","inline \" throw new Error(message)\"","inline \"}\"","fn check is args:etc"," if is_true is","  if is_empty args","   ret"," elseif is_fn is","  let b is args:etc","  if is_true b","  let name is.name","  if match_l name \"is_\"","   let arg front args","   let name strip_l name \"is_\"","   let s_name to_lit name","   let s_given get_type arg","   let s_given to_lit s_given","   let s_given space s_given \"given\"","   let s_given paren s_given","   let message space \"Expecting a value of type\" s_name s_given","   let message concat message \".\"","   stop message","  elseif same name \"not\"","   let is front args","   let name strip_l is.name \"is_\"","   let s_name space \"not\" name","   let s_name to_lit s_name","   let message space \"Check failed calling\" s_name","  else","  end"," stop \"check\"","fn chr x:ushort"," ret String.fromCharCode x","fn clear x:arr"," x.splice 0","fn clone x"," if is_undef x","  check same arguments.length 1"," let history arr"," fn visit x","  if is_container x","   push history x","  if is_arr x","   let r arr","   for x","    if contain history v","     push r null","     cont","    end","    let v visit v","    push r v","   end","   ret r","  elseif is_obj x","   let r obj","   forin x","    let v get x k","     put r k null","    put r k v","   ret value x"," ret visit x","fn cmp x:def y:def"," if same x y","  ret 0"," if is_arr x","  if is_arr y","   fornum min x.length y.length","    let xval at x i","    let yval at y i","    let n cmp xval yval","    if different n 0","     ret n","   ret cmp x.length y.length"," if is_obj x","  if is_obj y","   let xkeys obj_keys x","   let ykeys obj_keys y","   let xvals obj_vals x","   let yvals obj_vals y","   fornum min xkeys.length ykeys.length","    let xkey at xkeys i","    let ykey at ykeys i","    let n cmp xkey ykey","    let xval at xvals i","    let yval at yvals i","   ret cmp xkeys.length ykeys.length"," if inline \"x>y\"","  ret 1"," if inline \"x<y\"","  ret -1"," ret 0","fn collate x:arr"," fn is_delimited x","  if not is_str x","   ret false","  if same x \"_\"","  if is_punct x","   ret true","  if is_space x"," let a arr","  if is_empty a","   push a v","   cont","  let left back a","  let left back left","  let right front v","  if is_delimited left","  elseif is_delimited right","   push a right","  let s concat left right","  drop a","  push a s"," ret join a \" \"","fn concat x:etc"," ret implode x","fn contain x:composite y","  check same arguments.length 2"," if is_str x","  check is_str y","  if is_empty y","  ret x.includes y"," elseif is_arr x"," elseif is_obj x","  forin x","   let v get x k","   if same v y","    ret true"," else","  stop","fn count x:arr y:def"," var r 0","  if same v y","   assign r inc r","fn crc x:str"," for a","  for s","   let n asc v","   assign r add r n","fn cut_l x:str y:uint"," if lte x.length y","  ret x"," let length sub y 3"," let s slice_r x length"," let a explode s"," while true","  let c front a","  if is_punct c","   shift a","  elseif is_space c","   brk"," let r implode a"," let r concat \"...\" r","fn cut_r x:str y:uint"," check is_str x"," let ellipsis \"...\""," let length sub y ellipsis.length"," let s slice_l x length","  let c back a","   drop a"," let r concat r ellipsis","fn date_decode x:str"," let r new Date x"," let r r.getTime"," let r div r 1000"," let r trunc r","fn date_str x","  let n time_get","  ret date_str n"," check is_num x"," let n mul x 1000"," let o new Date n"," let y o.getFullYear"," let m o.getMonth"," let m inc m"," let m pad_l m \"0\" 2"," let d o.getDate"," let d pad_l d \"0\" 2"," ret concat y \"/\" m \"/\" d","fn dbg_backtrace stack map"," if is_undef stack","  let e new Error \"backtrace\"","  ret dbg_backtrace e.stack map"," check is_str stack"," if is_undef map","  let map dbg_source_map","  ret dbg_backtrace stack map"," check is_obj map"," let r tbl_init"," let stack trim stack"," let stack split stack"," let source map.source"," for stack","  if is_node","   if not contain v map.script","    cont","  let s trim v","  let s replace s \"@\" \" \"","  let a split s \" \"","  let s front a","  if same s \"at\"","  var fn shift a","  if is_empty fn","   assign fn \"anonymous\"","  if not is_noun fn","  let a back a","  let a split a \":\"","  if not is_many a","  let njs back a 1","  let njs to_uint njs","  var index dec njs","  if gte index source.length","  let location at source index","  if is_null location","  let js trim location.js","  let cs trim location.cs","  let path location.path","  let ncs location.index","  let ncs inc location.index","  let o obj fn njs js path ncs cs","  push r o","fn dbg_callstack stack map","  let e new Error \"callstack\"","  ret dbg_callstack e.stack"," let r dbg_backtrace stack map"," while is_full r","  let frame front r","  let fn frame.fn","  if same fn \"throw\"","  elseif same fn \"stop\"","  elseif same fn \"check\"","  elseif same fn \"check_arg\"","  elseif same fn \"check_arity\"","  shift r","fn dbg_here"," let t dbg_callstack"," tbl_remove_column t \"njs\""," tbl_remove_column t \"js\""," let t tbl_render t"," log t","fn dbg_origin_xs stack code_type map","  let e new Error \"origin-xs\"","  ret dbg_origin_xs e.stack"," check is_str code_type","  ret dbg_origin_xs stack code_type map"," let frames dbg_callstack stack map"," let frames head frames 5"," for frames","  var t null","  var label null","  if same code_type \"cs\"","   let file get map.files v.path","   let line v.ncs","   assign t dbg_origin file line","   assign label \"stack\"","  elseif same code_type \"js\"","   let line v.njs","   assign t dbg_origin map.source line \"js\"","   assign label \"javacript\"","   stop","  let s tbl_render t","  let s txt_prepend s \"> \"","  let n inc i","  let title concat \"#\" n","  let title space label \"frame\" title \"/\" v.fn","  flower title","  log s","fn dbg_origin source:arr line:uint key depth"," if is_undef key","  ret dbg_origin source line \"\" depth"," check is_str key"," if is_undef depth","  ret dbg_origin source line key 15"," check is_uint depth"," fn find_origin fn:fn source:arr line:uint key:str depth:uint","  var n depth","  var r fn source line key n","  while lte n source.length","   if gte r.length depth","    brk","   assign n inc n","   assign r fn source line key n","   let end add line r.length","   if gte end source.length","  ret r"," fn origin source:arr line:uint key:str depth:uint","  let r arr","  let a arr","  let n div depth 2","  let n trunc n","  var n sub line n","  let length min source.length depth","  let nup add n length","  if lt n 1","   assign n 1","  elseif gte nup source.length","   assign n sub source.length length","   if lt n 1","    assign n 1","  fornum length","   let n add n i","   var p \" \"","   if same n line","    assign p \">\"","   let index dec n","   var code at source index","   if is_empty key","    check is_str code","   else","    assign code get code key","   let o obj n p code","   push a o","  let a2 arr","  for a","   push a2 v.code","  let s join a2","  let s txt_unindent s","  let a3 split s","  for a3","   let o at a i","   assign o.code v","   if is_empty v.code","   push r v"," fn origin_center source:arr line:uint key:str depth:uint","  let a origin source line key depth","  ret center a"," fn center x:arr","  var middle get_position x","  var range middle","  let length mul range 2","  let length inc length","  if gt length x.length","   assign range sub x.length middle","   assign range dec range","  let ybefore sub middle range","  let yafter inc middle","  let before slice x ybefore range","  let center at x middle","  let after slice x yafter range","  let r arr before:etc center after:etc"," fn get_position x:arr","  for x","   if same v.p \">\"","    ret i"," let centered find_origin origin_center source line key depth"," if same centered.length depth","  ret centered"," ret find_origin origin source line key depth","fn dbg_source_map"," let lines_js split source"," let paths arr"," for relatives","  let path at pool v","  push paths path"," let files obj"," forin contents","  let content get contents k","  let n to_uint k","  let path at pool n","  let lines arr","  for content","   let s at pool v","   push lines s","  put files path lines"," let source arr"," if is_node"," elseif is_browser","  fornum 8","   push source null"," for paths","  if gte i paths.length","  let path at paths i","  let index at indices i","  var line_js i","  elseif is_browser","   assign line_js add line_js 5","  let js at lines_js line_js","  let cs get files path","  let cs at cs index","  let o obj path index js cs","  push source o"," var script null","  assign script global.script"," ret obj script files source","fn dbg_source x"," fn get_source","   ret file_load script","  check is_browser","  let s to_str html.outerHTML","  let lines split s","  for lines","   let s trim v","   if not match_l s \"<\"","   at lines i \"\"","  while is_full lines","   let s back lines","   let s trim s","   if is_empty s","   elseif match_l s \"<\"","   drop lines","  let lines txt_unindent lines","  ret join lines","  assign r get_source","  assign r file_load x"," let r trim_r r"," let r split r","  let s pop r","  if match_l s \"const app=\""," let r join r","fn dec x:num"," ret sub x 1","fn dedup x:arr"," let r arr","  if not contain r v","fn deinit_common"," for tasks","  let name v.name","  let o obj name","  let s obj_option o","  log \"abort\" s","  v.iterator.return"," clear tasks"," if gte verbose 0","  let profile time_now","  let profile time_delay profile","  let o obj profile","  log app s","  deinit_node","  deinit_browser"," assign global.zombie true","fn delimit x:str y","  ret delimit x is_fragment"," check is_fn y","  let right v","  if is_empty r","   push r right","  let left back r","  let fragment concat left right","  if y fragment","   drop r","   push r fragment","fn different x y"," ret inline \"x!==y\"","fn div x:num y:num z:etc"," check different y 0"," let r inline \"x/y\"","  ret div r z:etc","fn drop x:arr y","  ret drop x 1"," check lte y x.length"," pop x y","fn dump x"," let name fn_args \"dump\""," check is_single name"," let name front name","  let s to_lit x","  log name s","  log name x","fn dup x:container","  ret slice x 0","  let r obj","  obj_merge r x","fn eq x:def y:def"," let n cmp x y"," ret inline \"n===0\"","fn every x:arr y:fn","  if not y v","fn explode x:str","  push r v","fn extract x:arr y:def"," var r false"," let a dup x"," clear x","   assign r true","   push x v","fn fallback_error x:str y:obj z"," var print value log"," let title space \"Fallback\" x"," try"," catch","  assign print value console.log"," let s to_str y.stack"," let s trim_r s"," let s txt_prepend s \"error-in-error> \""," print s"," check is_obj z"," let s to_str z.stack"," let s txt_prepend s \"original-error> \"","fn filter x:arr y:fn"," ret x.filter y","fn find x:composite y:def"," if is_vec x","  ret x.indexOf y","    ret k","fn flower_box x:str"," let n tty_width"," let s repeat \"*\" n"," log s"," flower x","fn flower x","  let s repeat \"*\" n"," let s1 repeat \"*\" n"," let s2 repeat \"*\" 2"," let s2 concat s2 \" \""," let s2 concat s2 x"," let s2 concat s2 s1"," let s2 slice_l s2 n"," log s2","fn fn_args x:str"," for dbg_callstack","  let a split v.cs \" \"","  let n find a x","  if lt n 0","  let index inc n","  ret slice a index"," stop","fn fn_match x:str"," let r obj"," forin fns","  if not match k x","  let v get fns k","  put r k v","fn fn_select x:str"," let pattern concat x \"*\""," let fns fn_match pattern","  let name strip_l k x","  put r name v","fn front x:vec"," check is_full x"," ret at x 0","fn get_type x"," if is_null x","  ret \"null\""," ret typeof x","fn get x:obj y:str z"," if has x y"," if is_def z","  ret z","fn gt x:def y:def"," ret inline \"n>0\"","fn gte x:def y:def"," ret inline \"n>=0\"","fn has x:obj y:str"," ret inline \"y in x\"","fn head x:vec y:uint"," if lt x.length y","  if is_str x","   ret x","  elseif is_arr x","   ret dup x"," ret slice_l x y","fn iif x:bool y:def z:def"," if x","  ret y"," ret z","fn implode x:arr"," ret join x \"\"","fn inc x:num"," ret add x 1","fn init_common"," fn on_tick","  let task shift tasks","  let result task.iterator.next","  if not result.done","   push tasks task","  if is_empty tasks","   deinit_common","  time_timeout on_tick"," fn log_compile","  let compile time_hn compile","  let sloc split source","  let sloc sloc.length","  let o obj compile sloc"," assign global.tasks arr"," assign global.unit \"1.3vw\""," assign global.padding \"0.3vw\""," assign global.border \"0.1vw\""," assign global.font_family \"monospace\""," assign global.font_size unit"," var args arr","  assign args init_node","  init_browser"," assign global.source dbg_source"," let skip arr \"init_common\" \"init_node\" \"init_browser\"","  if contain skip k","  if match k \"init_*\"","   let v get fns k","   v","  log_compile"," if is_fn init","  init args:etc"," elseif is_gn init","  task_run init args:etc"," on_tick","fn insert x:arr y:uint z:etc"," x.splice y 0 z:etc","fn is_access x"," if not is_str x"," if is_empty x"," let a split x \".\""," if is_single a"," ret every a is_identifier","fn is_alnum x","  if same v \"_\"","  elseif is_alpha v","  elseif is_digit v","fn is_alpha x","  if is_lower v","  elseif is_upper v","fn is_arg x"," if is_identifier x","  ret true"," if is_access x"," if is_numeric x"," if is_lit x"," if is_lit_char x"," ret false","fn is_arr x"," ret Array.isArray x","fn is_atom x"," if is_alnum x"," if is_tuple x","fn is_blank x"," if is_space x","fn is_bool x"," let s get_type x"," ret same s \"boolean\"","fn is_browser"," ret has_window","fn is_char x"," ret same x.length 1","fn is_comment x"," if not is_ln x"," ret match_l x \"//\"","fn is_composite x","fn is_container x","fn is_cool x"," if is_num x","fn is_def x"," ret not is_undef x","fn is_digit x","  if not contain digit v","fn is_domain x"," if not is_user x"," let tld pop a"," if not is_alnum tld","  if is_alnum v","  elseif is_lisp v","fn is_empty x","  ret same x.length 0","  let keys obj_keys x","  ret is_empty keys","fn is_false x"," ret same x false","fn is_fn x"," if different s \"function\""," if same x.constructor.name \"GeneratorFunction\"","fn is_fragment x","fn is_full x"," if not is_composite x"," ret not is_empty x","fn is_gn x"," if different x.constructor.name \"GeneratorFunction\"","fn is_identifier x"," let s front x"," if same s \"_\""," elseif is_alpha s","  if not is_alnum v","fn is_indented x"," for split x","  if is_empty v","  let c front v","  if not is_space c","fn is_int x"," ret Number.isInteger x","fn is_ip x"," if is_ip4 x"," if is_ip6 x","fn is_ip4 x"," if different a.length 4","  if not is_digit v","  let n to_uint v","  if gt n 255","fn is_ip6 x"," let a split x \":\""," if lt a.length 3"," if gt a.length 8","  if contain v \"_\"","  if gt v.length 4","fn is_json x","  json_decode x","fn is_key x"," if is_bool x"," if is_ip x","fn is_last x:vec y:uint"," ret same n y","fn is_lisp x"," let a split x \"-\""," ret every a is_alnum","fn is_lit_char x"," if not match_l x \"'\""," if not match_r x \"'\""," let s strip_l x \"'\""," let s strip_r s \"'\""," if is_empty s"," let s concat quote s"," ret is_lit s","fn is_lit x"," if not is_json x"," let v json_decode x"," if not is_str v"," let s json_encode v"," ret same s x","fn is_ln x"," ret not is_txt x","fn is_lower x","  if not contain lower v","fn is_mail x"," let a split x \"@\""," if not is_pair a"," let user shift a"," let domain shift a"," if not is_user user"," if not is_domain domain","fn is_many x"," if not is_vec x"," ret gt x.length 1","fn is_name x","fn is_node"," ret not is_browser","fn is_none x","fn is_noun x","fn is_null x"," ret same x null","fn is_num x"," if Number.isNaN x"," if same x Number.NEGATIVE_INFINITY"," if same x Number.POSITIVE_INFINITY"," ret same s \"number\"","fn is_numeric x"," if not is_num v","fn is_obj x"," ret same s \"object\"","fn is_pair x","  ret same x.length 2","  ret same keys.length 2","fn is_punct x","  if not contain punct v","fn is_single x","fn is_space x"," let s trim x"," ret is_empty s","fn is_str x"," ret same s \"string\"","fn is_token x"," if is_atom x"," if is_comment x","fn is_trivia x","fn is_true x"," ret same x true","fn is_tuple x","  if is_identifier v","fn is_txt x","  ret fals"," ret contain x lf","fn is_uint x"," if not is_int x"," ret gte x 0","fn is_undef x"," ret same x undefined","fn is_upper x","  if not contain upper v","fn is_url x"," let s to_lower x"," if match_l s \"http://\""," elseif match_l s \"https://\"","  url_parse x","fn is_user x"," for split x \"-\"","  for split v \".\"","   if not is_alnum v","    ret false","fn is_ushort x"," if not is_uint x"," let n mul 256 256"," ret lt x n","fn is_vec x","fn is_word x"," if contain x \" \""," if contain x lf"," if contain x cr","fn is_xn x"," if is_fn x"," if is_gn x","fn is_rgb x"," if not is_uint x.r"," if not is_uint x.g"," if not is_uint x.b","fn join x:arr y","  ret join x lf"," check is_str y"," ret x.join y","fn json_decode x:str"," ret JSON.parse x","fn json_dump x:def"," ret JSON.stringify x null 1","fn json_encode x","  ret \"undefined\""," ret JSON.stringify x","fn log_append x:etc"," fn escape x:str","   if is_alnum v","    push a v","   if is_punct v","   let s char_escape v","   push a s","  ret implode a"," let parts arr","  if is_str v","   let s ansi_strip v","   push parts s","  let s inspect v false","  push parts s"," let pid pad_l process.pid \" \" 7"," let time time_get"," let date date_str time"," let time time_str time true"," let max_line_length mul 10 kb"," let inputs join parts \" \""," let inputs split inputs"," let inputs map inputs head max_line_length"," let inputs map inputs escape"," let lines arr"," if is_empty inputs","  let s space pid date time","  push lines s","  for inputs","   let s space pid date time v"," let content join lines"," let content concat content lf"," if not is_file config_log","  let dir path_dir config_log","  dir_make dir","  file_write config_log content"," let size file_size config_log"," let limit mul 16 1024 1024"," if lt size limit","  file_append config_log content"," let a file_load config_log"," let a split a"," let half div a.length 2"," let half trunc half"," shift a half"," append a lines"," let content join a"," file_write config_log content","fn log x:etc"," fn node_log x:etc","  let parts arr","   if is_str v","    push parts v","   let s inspect v","  let content join parts \" \"","  if is_empty content","   console.log \" \"","   for split content","    let n tty_width","    let line ansi_head v n","    console.log line","  if log_file","   log_append x:etc"," if is_str output","   let s to_dump v","  let s join a \" \"","  let s concat s lf","  let s concat output s","  assign output s","  node_log x:etc","  if is_empty x","   console.log x:etc","fn lt x:def y:def"," ret inline \"n<0\"","fn lte x:def y:def"," ret inline \"n<=0\"","fn main"," fn on_load x:obj","  if same document.readyState \"complete\"","   init_common","   assign window.onload null"," var has_window true","  inline \"window\"","  assign has_window false"," if has_window","  assign window.global window","  assign global.has_window true","  assign global.has_window false"," assign global.zombie false"," assign global.start time_get"," assign global.lf \"\\n\""," assign global.cr \"\\r\""," assign global.crlf concat cr lf"," assign global.punct \"!\\\"#$%&'()*+,-./:;<=>?@[\\\\]^`{|}~\""," assign global.digit \"0123456789\""," assign global.lower \"abcdefghijklmnopqrstuvwxyz\""," assign global.upper to_upper lower"," assign global.output null"," assign global.verbose 0"," assign global.minute 60"," assign global.hour mul 60 minute"," assign global.day mul 24 hour"," assign global.week mul 7 day"," assign global.month mul 30 day"," assign global.year mul 12 month"," assign global.kb 1024"," assign global.mb mul kb 1024"," assign global.gb mul mb 1024"," assign global.tb mul gb 1024"," assign global.traces arr","  init_common","  assign window.onload on on_load","fn map x:arr y:fn z:etc","  let v y v z:etc","  check is_def v","fn match_l x:str y:str"," if is_empty y"," if gt y.length x.length"," let s slice_l x y.length"," ret same s y","fn match_r x:str y:str"," let s slice_r x y.length","fn match x:str y:str"," let s replace y \".\" \"\\\\.\""," let s replace s \"*\" \".*\""," let s concat \"^\" s \"$\""," let s new RegExp s"," ret s.test x","fn max x:etc"," ret Math.max x:etc","fn min x:etc"," ret Math.min x:etc","fn mod x:num y:num z:etc"," let r inline \"x%y\"","  ret mod r z:etc","fn mul x:num y:num z:etc"," let r inline \"x*y\"","  ret mul r z:etc","fn mute x:fn y:etc"," ret o.result","fn neq x:def y:def"," ret not eq x y","fn nop","fn not x y:etc","  ret not x"," elseif is_fn x","  let v x y:etc","  ret not v","fn obj_keys x:obj"," ret Object.keys x","fn obj_length x:obj"," let keys obj_keys x"," ret keys.length","fn obj_merge x:obj y:obj overload"," if is_undef overload","  ret obj_merge x y true"," if overload","  Object.assign x y","  let r dup x","  forin y","   let v get y k","   if not has r k","fn obj_option x:obj"," forin x","  let v get x k","  let key strip_r k \"_\"","  var value v","  if is_xn value","   assign value value.name","  if is_key value","   if not is_str value","    assign value to_str value","   assign value to_lit value","  let s concat key \"=\" value","fn obj_order x:obj keys:etc"," for keys","  let value get x v","  put r v value","  if has r k","fn obj_push x:obj key:str val:def","  if same k key"," put r key val","fn obj_remove x:obj key:str","fn obj_unshift x:obj key:str val:def","fn obj_vals x:obj"," ret Object.values x","fn obj"," ret inline \"{}\"","fn on fn:fn args:etc"," fn on_fn x:etc","  if zombie","  ret fn args:etc x:etc"," if zombie"," ret value on_fn","fn or x:bool y:bool z:etc"," let r inline \"x||y\"","  ret or r z:etc","fn pad_l x:cool padding length"," if is_uint x","  let s to_json x","  if is_undef padding","   if is_undef length","    ret pad_l s \"0\" 3","   ret pad_l s \"0\" length","  ret pad_l s padding length"," check is_str padding"," check is_uint length"," ret x.padStart length padding","fn pad_r x:cool padding length","    ret pad_r s \"0\" 3","   ret pad_r s \"0\" length","  ret pad_r s padding length"," ret x.padEnd length padding","fn paren x:str"," ret concat \"(\" x \")\"","fn partial fn:fn args:etc"," fn result x:etc"," ret value result","fn path_concat x:str y:str z:etc"," let x strip_r x \"/\""," let y strip_l y \"/\""," let r concat x \"/\" y","  ret path_concat r z:etc","fn path_file x:str"," let s path_base x"," let a split s \".\"","  ret s"," drop a"," ret join a \".\"","fn path_fix x:str"," if match_r x \"/\""," ret concat x \"/\"","fn path_join x:arr"," ret join x \"/\"","fn path_split x:str"," ret split x \"/\"","fn path_strip x:str"," ret strip_r x \"/\"","fn path_unfix x:str","fn path_up x:str"," let a path_split x"," pop a"," ret path_join a","fn pop x:arr y","  ret pop x 1"," if same y 1","  let r back x","  remove x n 1","  ret value r"," remove x n y","fn prepend x:arr y:arr"," let a dup y"," reverse a","  unshift x v","fn profile x:fn y:etc"," let before time_now"," let r x y:etc"," let after time_now"," let profile sub after before"," let profile to_fixed profile"," let profile concat profile \"s\""," let o obj profile"," let s obj_option o"," log x.name s","fn push x:arr y"," x.push y","fn put x:obj y:str z","  check same arguments.length 3"," set x y z","fn quote x:str"," ret concat \"\\\"\" x \"\\\"\"","fn random_str x:uint alnum"," if is_undef alnum","  ret random_str x true"," check is_bool alnum"," let range mul 26 256"," while lt a.length x","  let n random range","  if alnum","   if is_alnum c","    push a c","   push a c"," ret implode a","fn random x","  ret random Number.MAX_SAFE_INTEGER"," check gte x 0"," let r Math.random"," let r mul r x","  ret trunc r","fn record x:fn y:etc"," check is_null output"," assign output \"\""," var result null","  assign result x y:etc"," catch e","  assign output null","  throw e"," let s trim_r output"," assign output null"," assign r.result result"," assign r.output s","fn reject x:arr y:fn"," check is_arr x","  if y v","fn remove x:arr y:uint z","  ret remove x y 1"," check is_uint z"," check between y 0 x.length"," let n add y z"," check between n 0 x.length"," x.splice y z","fn repeat x:str y:uint"," ret x.repeat y","fn replace_rec x:str y:str z:str"," var r x"," while contain r y","  assign r replace r y z","fn replace x:vec y:str z:str","  let a split x y","  ret join a z","    push r z","fn report_html report:obj length human"," if is_def length","  check is_uint length"," var txt report_render report human","  assign txt txt_cut txt length"," let html h_html"," let head h_head"," let title h_title report.title"," let body h_body"," h_font_family body font_family"," h_font_size body font_size"," let pre h_pre txt"," h_push body pre"," h_push head title"," h_push html head"," h_push html body"," let s h_render html"," ret s","fn report_init error query map"," if is_str error","  let stack error","  let lines split error","  let message front lines","  let errno null","  let error obj stack message errno","  ret report_init error query map"," check is_obj error"," if is_def query","  check is_obj query"," fn log_browser","  let location to_str location","  var referrer null","  if is_full document.referrer","   let url_referer url_parse document.referrer","   let url_location url_parse location","   if different url_referer.host url_location.host","    assign referrer document.referrer","  let browser browser_get","  let agent navigator.userAgent","  let uptime time_now","  let uptime time_delay uptime","  let o obj location referrer browser agent uptime","  let t to_tbl o"," fn log_server","  let url query.url.href","  let headers query.request.headers","  if has headers \"referrer\"","   assign referrer get headers \"referrer\"","  elseif has headers \"referer\"","   assign referrer get headers \"referer\"","  let remote query.remote","  let o obj url referrer remote uptime"," fn log_trace","  if is_empty traces","  flower \"trace\"","  for traces","   log \">\" v"," fn log_backtrace stack:str map:obj","  let backtrace dbg_backtrace stack map","  if is_empty backtrace","  tbl_remove_column backtrace \"njs\"","  tbl_remove_column backtrace \"js\"","  let backtrace tbl_render backtrace","  let backtrace txt_prepend backtrace \"> \"","  flower \"backtrace\"","  log backtrace"," let stack error.stack"," var message error.message"," let type error.constructor.name"," let type to_lower type"," var title \"\""," let tags arr"," if is_word message","  assign title \"An error has occured\"","  let message strip_r message \".\"","  assign title message"," push tags app"," if same type \"error\""," if same type \"object\"","  push tags type"," if is_browser","  push tags location.hostname"," elseif is_node","  let errno error.errno","  if is_undef errno","  elseif is_null errno","  elseif same errno 0","   let errno concat \"errno=\" errno","   push tags errno","  let host os_host","  push tags host"," var browser \"\""," var server \"\""," let cs capture dbg_origin_xs stack \"cs\" map"," let backtrace capture log_backtrace stack map"," let js capture dbg_origin_xs stack \"js\" map"," var empty true","  assign browser capture log_browser","  assign empty false"," if is_obj query","  assign server capture log_server"," if is_full trace"," if is_full cs"," if is_full backtrace"," if gt verbose 0","  if is_full js","   assign empty false"," if empty","  trace \"No error stack.\""," let trace capture log_trace"," ret obj title tags app message browser server trace cs backtrace js","fn report_log report:obj"," let title report_title report"," flower_box title"," if is_full report.browser","  log report.browser"," if is_full report.server","  log report.server"," if is_full report.trace","  log report.trace"," if is_full report.cs","  log report.cs"," if is_full report.backtrace","  log report.backtrace","  if is_full report.js","   log report.js"," let end space \"end-report\" report.app \"/\" report.message"," flower end","fn report_render report:obj human"," if is_undef human","  ret report_render report true"," fn log_title","  let title report_title report","  flower_box title"," let title capture log_title"," push a title","  push a \"\"","  push a report.browser","  push a report.server","  push a report.trace","  push a report.cs","  push a report.backtrace"," if is_full report.js","  push a report.js"," if human","  push a \"Refresh the page or go to another URL to continue.\""," ret join a","fn report_title report:obj"," fn format_tag x:str","  if is_word x","  ret to_lit x"," let tags map report.tags format_tag"," let tags join tags \" / \""," let tags paren tags"," ret space report.title tags","gn resolve x:obj"," check is_obj x"," var done false"," var error null"," fn on_then x:def","  assign result x","  assign done true"," fn on_catch x","  check is_obj x","  assign error x"," let promise x.then on_then"," promise.catch on_catch"," while not done","  yield"," if is_obj error","  throw error"," ret result","fn reverse x:vec","  let r explode x","  reverse r","  let r implode r","  x.reverse","fn rgb_init r:uint g:uint b:uint"," ret obj r g b","fn round x:num"," ret Math.round x","fn salt x:str y","  ret salt x \"azertyuiop\""," let a1 explode x"," let a2 explode y"," while is_full a1","  if is_empty a2","   let a explode y","   append a2 a","  let c1 shift a1","  let c2 shift a2","  let n1 asc c1","  let n2 asc c2","  let n xor n1 n2","fn same x y"," ret inline \"x===y\"","fn scan x:str reducer delimiter"," if is_undef reducer","  ret scan x is_token"," check is_fn reducer"," if is_undef delimiter","  ret scan x reducer is_fragment"," check is_fn delimiter"," fn group x:arr reducer:fn","  let fragments dup x","  while is_full fragments","   let a reduce fragments reducer","   if is_full a","    let s implode a","    push r s","    shift fragments a.length","    let s shift fragments"," fn reduce x:arr reducer:fn","  check is_fn reducer","  check is_full x","  while is_full r","   let s implode r","   if reducer s"," let a delimit x delimiter"," ret group a reducer","fn set x:obj y:str z","fn shift x:arr y","  ret shift x 1","  let r front x","  remove x 0 1"," remove x 0 y","fn shuffle x:arr","  let n random a.length","  let v at a n","  remove a n","fn silent x:fn y:etc"," let previous verbose"," assign verbose sub verbose 2"," var r null","  assign r x y:etc","  assign verbose previous"," assign verbose previous","gn sleep x:num"," let start time_now","  let elapsed time_now","  let elapsed sub elapsed start","  if gte elapsed x","fn slice_l x:vec y:uint"," ret slice x 0 y","fn slice_r x:vec y:uint"," ret slice x n y","fn slice x:vec index:uint length"," check lte index x.length"," if is_undef length","  let n sub x.length index","  ret slice x index n"," check lte length x.length"," let n add index length"," check lte n x.length"," let r x.slice index n"," check same r.length length","fn sort x:container y","  if is_undef y","   x.sort","   check is_fn y","   x.sort y","  fn compare x:obj y:obj","   ret cmp x.key y.key","   ret sort x compare","  check is_fn y","   let key k","   let value get x k","   let o obj key value","  sort a y","   let k v.key","   put r v.key v.value","fn space x:etc"," ret join x \" \"","fn split x:str y","  ret split x lf","  ret arr"," ret x.split y","fn squote x:str"," ret concat \"'\" x \"'\"","fn stop x","  ret stop \"stop\""," throw new Error x","fn str_indent x:str"," if is_blank x"," let s trim_l x"," ret sub x.length s.length","fn strip_l x:str y:str"," if match_l x y","  let n sub x.length y.length","  ret slice_r x n"," ret x","fn strip_r x:str y:str"," if match_r x y","  ret slice_l x n","fn sub x:num y:num z:etc"," let r inline \"x-y\"","  ret sub r z:etc","fn tail x:vec y:uint"," ret slice_r x y","fn task_dump","  log \"task\" s","fn task_run x:gn y:etc"," let name x.name"," let iterator x y:etc"," let task obj name iterator"," push tasks task","fn tbl_column x:arr y:str","  let s get v y","  push r s","fn tbl_columns x:arr"," let first front x"," ret obj_keys first","fn tbl_index x:arr","  let v obj_unshift v \"#\" n","fn tbl_init x"," ret arr","fn tbl_pad_l x:arr column:str length","  var length 0","   var cell get v column","   if not is_str cell","    assign cell json_encode cell","   assign length max length cell.length","  ret tbl_pad_l x y length","  let cell get v column","  let cell pad_l cell \" \" length","  set v y cell","fn tbl_remove_column x:arr y:str"," let t dup x"," for t","  let v obj_remove v y","fn tbl_rename_column x:arr y:str z:str","  let row v","  let o obj","  forin row","   let v get row k","   if same k y","    put o z v","   put o k v","  push x o","fn tbl_render x:arr"," fn stringify_tbl x:arr","   let row dup v","   forin v","    let v get row k","    if is_str v","    let s json_encode v","    set row k s","   push r row"," fn pad_column x:arr","   assign length max length v.length","  if is_numeric_column x","    let s pad_l v \" \" length","    let s pad_r v \" \" length"," fn is_numeric_column x","  if not is_arr x","   if same i 0","   if not is_numeric v"," let tbl stringify_tbl x"," let titles tbl_columns tbl"," let columns arr"," for titles","  let title v","  let column tbl_column tbl title","  unshift column title","  let column pad_column column","  push columns column"," var length 0"," for columns","  let column v","  var n 0","  for column","   assign n max n v.length","  assign length add length n"," assign length add length columns.length"," assign length dec length"," let separator repeat \"-\" length"," push a separator"," let header arr","  let s shift v","  push header s"," let s join header \" \""," push a s"," let first front columns"," for first","  let index i","  let line arr","  for columns","   let s at v index","   push line s","  let s join line \" \"","fn tbl_sort x:arr column:str compare"," if is_undef compare","  ret tbl_sort x column cmp"," fn compare_cell x:obj y:obj","  let left get x column","  let right get y column","  ret compare left right"," sort x compare_cell","fn time_delay x:num"," let minute3 mul minute 3"," let hour3 mul hour 3"," let day3 mul day 3"," let month3 mul month 3"," let year3 mul year 3"," if lt x 10","  let n to_fixed x","  ret concat n \"s\""," if lt x minute3","  let n trunc x"," if lt x hour3","  let n div x minute","  ret concat n \"m\""," if lt x day3","  let n div x hour","  ret concat n \"h\""," if lt x month3","  let n div x day","  ret concat n \"d\""," if lt x year3","  let n div x month","  ret concat n \"mo\""," let n div x year"," let n trunc n"," ret concat n \"y\"","fn time_get"," let n Date.now"," ret div n 1000","fn time_hn x:num"," let now time_get"," if same x now","  ret \"now\""," if gt x now","  let n sub x now","  let s time_delay n","  ret concat \"in \" s"," let n sub now x"," let s time_delay n"," ret concat s \" ago\"","fn time_interval x:fn y","  ret time_interval x 0"," let fn on x"," let n mul y 1000"," setInterval fn n","fn time_now"," let n time_get"," ret sub n start","fn time_str x second","  ret time_str n second"," if is_undef second","  ret time_str x false"," let h o.getHours"," let h pad_l h \"0\" 2"," let m o.getMinutes"," let r concat h \"h\" m \"m\""," if not second"," let s o.getSeconds"," let s pad_l s \"0\" 2"," ret concat r s \"s\"","fn time_timeout x:fn y z:etc","  ret time_timeout x 0.01 z:etc"," check is_num y"," let fn on x z:etc"," setTimeout fn n","fn to_base36 x:uint"," ret x.toString 36","fn to_dump x"," let val clone x"," if is_arr val","  if is_empty val","   ret \"arr\"","  push a \"arr\"","  for val","   let sharp concat \"#\" i","   if is_ln s","    let s space \"\" sharp s","    push a s","    let s2 space \"\" sharp","    let s txt_indent s 2","    push a s2","  push a \"end\"","  ret join a"," elseif is_obj val","   ret \"obj\"","  push a \"obj\"","  forin val","   let v get val k","   var key k","   if not is_key key","    assign key to_lit key","    let s space \"\" key s","    let s2 space \"\" key"," elseif is_word val","  ret to_lit val"," elseif is_fn val","  ret space \"fn\" val.name","  ret json_encode val","fn to_fixed x:num y","  ret to_fixed x 2"," let a x.toFixed y"," let a split a \".\""," let integer front a"," var float back a"," let digits explode float"," while is_full digits","  let c back digits","  if different c \"0\"","  drop digits"," if is_empty digits","  ret integer"," assign float implode digits"," ret concat integer \".\" float","fn to_hex x:uint"," ret x.toString 16","fn to_i x:str"," ret Number.parseInt x","fn to_int x:str"," let r to_num x"," check is_int r","fn to_json x:def"," ret json_encode x","fn to_lit x:str","fn to_lower x:str"," ret x.toLowerCase","fn to_num x:str"," let r json_decode x"," check is_num r","fn to_str x:def"," ret x.toString","fn to_tbl x:obj","  let key k","  let value get x k","  let o obj key value","fn to_uint x:str"," let r to_int x"," check is_uint r","fn to_upper x:str"," ret x.toUpperCase","fn trace x:etc"," if is_single x","  let first front x","  if is_str first","   let a split first","   if is_many a","    for a","     trace v","    ret","  log \"trace>\" x:etc"," elseif same verbose 0","   if not is_str v","  push traces s","  if gt traces.length 64","   shift traces","fn trim_l x:str"," ret x.trimStart","fn trim_r x:str"," ret x.trimEnd","fn trim x:str"," ret x.trim","fn trunc x:num"," ret Math.trunc x","fn tty_width","  if is_batch","   ret 140","  let r process.stdout.columns","  check is_uint r","  ret 80","fn txt_compact x","  let a split x","  let a txt_compact a"," let s join x"," let a split s","  let first front a","  let first trim_r first","  if is_empty first","  if not is_empty v","  let last back r","  if is_empty last","fn txt_cut x y","  check is_uint y","  let a txt_cut a y","  let s head v y","fn txt_indent x y","  ret txt_indent x 1","  let a txt_indent a y","  let s trim_r v","  if is_empty s","   push r s","   let indent repeat \" \" y","   let s concat indent s","fn txt_inline x","  let r replace x \"\\n\" \" \"","  let r replace r \"\\r\" \"\"","  let r replace_rec r \"  \" \" \"","  let r trim r"," let s txt_inline s"," ret split s","fn txt_prepend x y","  let a txt_prepend a y","  let s concat y v","fn txt_unindent x","  let a txt_unindent a"," var s join x"," while is_indented s","  for split s","   if is_empty v","   let s slice v 1","  assign s join a","fn unaccent x:str"," let r replace x \"à\" \"a\""," let r replace r \"â\" \"a\""," let r replace r \"ä\" \"a\""," let r replace r \"æ\" \"ae\""," let r replace r \"ç\" \"c\""," let r replace r \"é\" \"e\""," let r replace r \"è\" \"e\""," let r replace r \"ê\" \"e\""," let r replace r \"ë\" \"e\""," let r replace r \"î\" \"i\""," let r replace r \"ï\" \"i\""," let r replace r \"ô\" \"o\""," let r replace r \"ö\" \"o\""," let r replace r \"œ\" \"oe\""," let r replace r \"ù\" \"u\""," let r replace r \"û\" \"u\""," let r replace r \"ü\" \"u\""," let r replace r \"ÿ\" \"y\""," let r replace r \"À\" \"A\""," let r replace r \"Â\" \"A\""," let r replace r \"Ä\" \"A\""," let r replace r \"Æ\" \"AE\""," let r replace r \"Ç\" \"C\""," let r replace r \"É\" \"E\""," let r replace r \"È\" \"E\""," let r replace r \"Ê\" \"E\""," let r replace r \"Ë\" \"E\""," let r replace r \"Î\" \"I\""," let r replace r \"Ï\" \"I\""," let r replace r \"Ô\" \"O\""," let r replace r \"Ö\" \"O\""," let r replace r \"Œ\" \"OE\""," let r replace r \"Ù\" \"U\""," let r replace r \"Û\" \"U\""," let r replace r \"Ü\" \"U\""," let r replace r \"Ÿ\" \"Y\"","fn unshift x:arr y"," x.unshift y","fn unwrap x:str","  ret json_decode x","  ret split x \".\"","  ret split x \":\"","fn url_beautify x:str"," let r strip_l x \"http://\""," let r strip_l r \"https://\""," let r path_unfix r","fn url_get x:etc","  ret http_get x:etc","  ret xhr_get x:etc","fn url_parse x:str"," let url new URL x"," let href url.href"," let protocol strip_r url.protocol \":\""," let user url.username"," let password url.password"," let host url.hostname"," let port url.port"," let path url.pathname"," let hash url.hash"," let args obj"," forof url.searchParams.keys","  var value url.searchParams.get v","  if is_json value","   assign value json_decode value","  put args v value"," ret obj href protocol user password host port path args hash","gn wait","fn xor x:num y:num z:etc"," let r inline \"x^y\"","  ret xor r z:etc","fn app_list"," let pkgs pkg_list"," forin pkgs","  let v get pkgs k","  let base path_base v","  if match_l base \"app-\"","   put r k v","  elseif match_l base \"spa-\"","fn beep"," let duration 0.1"," task_run os_detach \"play\" \"-n\" \"synth\" duration \"sine\" 880 \"vol\" 0.5","fn deinit_node"," fn remove_old_files dir:str","  for dir_load dir true","   if not is_fs v","   let modified fs_modified v","   let now time_get","   let age sub now modified","   if lt age week","   var remove false","   if is_skeleton v","    assign remove true","   elseif is_dir v","    nop","   elseif is_file v","    stop","   if remove","    fs_remove v","    let dir dir_current","    let dir path_fix dir","    let path strip_l v dir","    let age time_delay age","    let o obj path age","    let s obj_option o","    trace \"remove\" s"," fn is_skeleton x:str","  if is_file x","  let paths dir_load x true","  for paths","   if is_dir v","    if not is_skeleton v","     ret false"," if dir_empty config_tmp","  fs_remove config_tmp"," let app path_up config_tmp"," if dir_empty app","  fs_remove app"," let n random 16"," if same n 0","  let dir_tmp path_up app","  let dir_log path_up config_log","  remove_old_files dir_tmp","  remove_old_files dir_log"," dir_change cwd","fn digest x:str"," let tmp path_tmp"," file_save tmp x"," let r os_execute \"sha256sum\" \"--binary\" tmp"," fs_remove tmp"," let r split r \" \""," let r front r","fn dir_call x:str y:fn z:etc"," let dir dir_current"," dir_change x","  assign r y z:etc","  dir_change dir"," dir_change dir","fn dir_change x:str"," process.chdir x","fn dir_current"," ret process.cwd","fn dir_empty x:str"," let paths dir_read x true"," ret is_empty paths","fn dir_find x:str y:str"," for dir_load x","  if match base y","fn dir_load x:str with_dirs"," if is_undef with_dirs","  ret dir_load x false"," check is_bool with_dirs"," for dir_read x true","  if is_file v","  elseif is_dir v","   if with_dirs","   let a dir_load v with_dirs","   append r a","fn dir_make x:str"," let recursive true"," let option obj recursive"," no_umask fs.mkdirSync x option","fn dir_read x:str with_dirs","  ret dir_read x false"," let dir path_real x"," let a fs.readdirSync dir"," sort a","  let s path_concat dir v","  if is_file s","  if with_dirs","   if is_dir s","fn dir_reset x:str"," fs_remove x"," dir_make x","fn dir_size x:str","  let n file_size v","  assign r add r n","fn file_append x:str y:str"," no_umask fs.appendFileSync x y","fn file_load x:str"," let r file_read x","fn file_read x:str y","  ret file_read x \"utf8\""," let buffer fs.readFileSync x"," ret buffer.toString y","fn file_save x:str y:str"," if is_file x","  let s file_load x","  if same s y"," let dir path_dir x"," if not is_dir dir"," let content trim_r y"," file_write x content","fn file_size x:str"," let stat fs.statSync x"," ret stat.size","fn file_write x:str y:str"," no_umask fs.writeFileSync x y","fn fs_change_mode x:str y:uint"," fs.chmodSync x y","fn fs_copy x:str y:str","  if is_dir y","   let base path_base x","   let path path_concat y base","   fs_copy x path"," let force true"," let o obj force recursive"," fs.cpSync x y o","fn fs_created x:str"," ret div stat.ctimeMs 1000","fn fs_mode x:str"," ret stat.mode","fn fs_modified x:str"," ret div stat.mtimeMs 1000","fn fs_remove x:str"," fs.rmSync x o","gn http_get url:str with_headers"," if is_undef with_headers","  ret run http_get url false"," var result \"\""," var headers obj"," fn get_module url:str","  let s to_lower url","  if match_l s \"http:\"","   ret http","  elseif match_l s \"https:\"","   ret https"," fn on_request response:obj","  forin response.headers","   var v get response.headers k","   if is_numeric v","    assign v to_num v","   put headers k v","  let on_data on on_data","  let on_end on on_end","  response.on \"data\" on_data","  response.on \"end\" on_end"," fn on_data x:obj","  let s to_str x","  assign result concat result s"," fn on_end"," fn on_error x:obj"," let module get_module url"," let request module.get url on_request"," let on_error on on_error"," request.on \"error\" on_error","  if done","  if is_obj error","   throw error"," if is_json result","  assign result json_decode result"," if with_headers","  ret obj result headers","fn init_node"," fn on_uncaught_exception error:obj message:str","  try","   let report report_init error","   if not contain report.tags message","    unshift report.tags message","   report_log report","   if is_remote","    report_mail report","  catch e","   fallback_error \"on-uncaught-exception\" e error","  assign zombie true","  process.exit 1"," assign global.cp require \"child_process\""," assign global.crypto require \"crypto\""," assign global.fs require \"fs\""," assign global.http require \"http\""," assign global.https require \"https\""," assign global.os require \"os\""," assign global.path require \"path\""," assign global.tls require \"tls\""," assign global.tty require \"tty\""," assign global.util require \"util\""," assign global.color false"," assign global.log_file true"," assign global.binary process.execPath"," assign global.cwd dir_current"," assign global.script at process.argv 1"," assign global.script path_real script"," let home os_home"," assign global.config_mabynogy path_concat home \".config\" \"mabynogy\""," let pid to_str process.pid"," let pid pad_l pid \"0\" 6"," assign global.config_tmp path_concat config_mabynogy \"tmp\" app pid"," dir_make config_tmp"," let base concat app \".txt\""," assign global.config_log path_concat config_mabynogy \"log\" base"," process.on \"uncaughtExceptionMonitor\" on_uncaught_exception"," let r slice process.argv 2"," if extract r \"--verbose\"","  assign verbose inc verbose"," if extract r \"--quiet\"","  assign verbose dec verbose"," if extract r \"--color\"","  assign color true"," if extract r \"--no-log\"","  assign log_file false"," let dir path_dir script","fn inspect x color"," if is_undef color","  let color is_color","  ret inspect x color"," check is_bool color"," let showHidden false"," let depth null"," let colors color"," let maxArrayLength null"," let maxStringLength null"," let o obj showHidden depth colors maxArrayLength maxStringLength"," let s util.inspect x o"," for split s","  let indent str_indent v","  let indent div indent 2","  let indent repeat \" \" indent","  let line trim_l v","  let line concat indent line","  push a line","fn ip_host x:ip"," let timeout 2"," let a silent os_execute \"host\" \"-W\" timeout x"," let first front a"," let first to_lower first"," let last back a"," let last to_lower last"," if contain first \"timed out\"","  ret null"," if contain last \"not found\""," if contain last \"has no ptr record\""," let r split last \" \""," let r back r"," let r strip_r r \".\""," if not is_domain r","fn ip_list"," let s os_execute \"hostname\" \"--all-ip-addresses\""," ret split s \" \"","fn ip_v4"," for ip_list","  if is_ip4 v","   ret v","fn ip_v6","  if is_ip6 v","fn is_batch"," if not is_node"," ret not is_interactive","fn is_color"," if color"," if is_interactive","fn is_dir x"," let throwIfNoEntry false"," let o obj throwIfNoEntry"," let o fs.statSync x o"," if is_undef o"," ret o.isDirectory","fn is_file x"," ret o.isFile","fn is_fs x"," ret is_def o","fn is_interactive"," ret process.stdout.isTTY","fn is_readable x","  var fd null","   assign fd fs.openSync x","  catch","  let n file_size x","  if gt n 0","   let buffer Buffer.alloc 1","   try","    fs.readSync fd buffer","   catch","    fs.closeSync fd","  fs.closeSync fd"," elseif is_dir x","   fs.readdirSync x","fn is_symbolic_link x"," let o fs.lstatSync x o"," ret o.isSymbolicLink","fn no_umask x:fn y:etc"," let mask process.umask 0","  process.umask mask"," process.umask mask","fn node_argv"," ret arr binary \"--trace-uncaught\" \"--trace-deprecation\" \"--expose-gc\"","fn node_context","  push r \"--verbose\""," elseif lt verbose 0","  push r \"--quiet\""," if is_color","  push r \"--color\""," if not log_file","  push r \"--no-log\"","fn open x:str"," os_system \"xdg-open\" x","gn os_capture x:str y:etc"," var closed false"," var status null"," var out \"\""," var err \"\""," var buffer \"\""," fn print x:str","  assign buffer concat buffer x","  if not match_r buffer lf","  let line strip_r buffer lf","  log line","  let s ansi_strip buffer","  assign out concat out s","  assign buffer \"\""," fn on_out x:obj","  print s"," fn on_err x:obj","  let s ansi_strip s","  assign err concat err s"," fn on_close x","  if is_null x","  elseif is_uint x","  assign status x","  assign closed true"," let stdio arr \"inherit\" \"pipe\" \"pipe\""," let option obj stdio"," let child cp.spawn x y option"," check is_obj child"," fn on_sigint x:str","  child.kill x"," let on_sigint sigint on_sigint"," let on_out on on_out"," let on_err on on_err"," let on_close on on_close"," let stdout child.stdout"," let stderr child.stderr"," stdout.on \"data\" on_out"," stderr.on \"data\" on_err"," child.on \"close\" on_close"," while not closed"," if is_full buffer.out","  print lf"," let out trim_r out"," let err trim_r err"," process.removeListener \"SIGINT\" on_sigint"," os_log os_capture status x y:etc"," ret obj status out err","gn os_detach x:str y:etc"," fn on_error error:obj","  flower \"on-error\""," let detached true"," let stdio \"ignore\""," let o obj detached stdio"," let r cp.spawn x y o"," r.on \"error\" on_error"," r.unref"," run sleep 0.1","fn os_execute x:etc"," let o os_run x:etc"," let status o.status"," let out o.out"," let err o.err"," var display false"," if is_full err","  if same status 0","   let a slice_l x 2","   trace a:etc","  let s txt_prepend err \" err> \"","  trace s"," if is_full out","  push a out","  push a err"," let s join a"," ret trim_r s","fn os_home x","  let user os_user","  ret os_home user"," let r path_concat \"/home\" x"," check is_dir r","fn os_host"," ret os.hostname","fn os_log call:xn status:int args:etc"," if same status 0"," var command front args"," var subcommand false"," if is_many args","  if same command \"sudo\"","   assign subcommand true","  elseif same command \"time\""," if subcommand","  let s at args 1","  assign command space command s"," let call replace call.name \"_\" \"-\""," let o obj command status"," trace call s","gn os_prompt x:str y:etc"," let out \"\""," let err \"\""," let buffer obj out err"," fn print key:str str:str","  let s get buffer key","  let s concat s str","  set buffer key s","  if not match_r s lf","  let s strip_r s lf","  let s txt_prepend s key","  set buffer key \"\"","  print \"out\" s","  print \"err\" s"," let child cp.spawn x y","  print \"out\" lf"," if is_full buffer.err","  print \"err\" lf"," os_log os_prompt status x y:etc"," ret status","fn os_ps"," let s os_execute \"ps\" \"aux\""," shift a","  let s replace_rec v \"  \" \" \"","  let pid at a 1","  let pid to_uint pid","  let path at a 10","  let args slice a 11","  let o obj pid path args","fn os_run x:str y:etc"," let maxBuffer mul 1 1024 1024 1024"," let encoding \"utf8\""," let option obj maxBuffer encoding"," let process cp.spawnSync x y option"," let out to_str process.stdout"," let err to_str process.stderr"," let status process.status"," os_log os_run status x y:etc","fn os_shell x:etc"," let command join x \" \""," ret cp.execSync command option","fn os_system x:str y:etc"," let stdio \"inherit\""," let result cp.spawnSync x y option"," let r result.status"," os_log os_system r x y:etc","fn os_user"," if is_root","  let r os_execute \"logname\"","  check is_alnum r"," let o os.userInfo"," ret o.username","fn path_base x:str"," ret path.basename x","fn path_dir x:str"," ret path.dirname x","fn path_ext x:str"," let s path.extname x"," ret strip_l s \".\"","fn path_real x:str"," ret fs.realpathSync x","fn path_tmp x","  ret path_tmp \"tmp.txt\""," let dir path_split x"," pop dir"," let dir path_join dir"," let dir path_concat config_tmp dir"," let dir path_strip dir"," let file path_file x"," let ext path_ext x","  let id random","  let id to_base36 id","  let id head id 7","  var base concat file \"-\" id","  if is_full ext","   assign base concat base \".\" ext","  let r path_concat dir base","  if not is_file r","fn path_writable x:fs"," let path path_real x"," let components path_split path"," while is_full components","  let path path_join components","  if lte path.length 2","  let a_rw 438","  let a_rwx 511","  let mode fs_mode path","  if is_file path","   let bits inline \"mode & a_rw\"","   if same bits a_rw","    fs_change_mode path a_rw","  elseif is_dir path","   let bits inline \"mode & a_rwx\"","   if same bits a_rwx","    fs_change_mode path a_rwx","  drop components","fn pkg_list dir"," if is_undef dir","  ret pkg_list \"src\""," let pkgs obj"," for dir_read dir true","  if match_l base \"app\"","   let name strip_l base \"app-\"","   put pkgs name v","  elseif match_l base \"spa\"","   let name strip_l base \"spa-\"","  elseif match_l base \"lib\"","   let name strip_l base \"lib-\"","  elseif match_l base \"prj\"","   let o pkg_list v","   forin o","    let v get o k","    put pkgs k v"," ret sort pkgs","fn report_mail report:obj"," let html report_html report 65 false"," mail author report.title html","fn sigint callback:fn"," fn on_sigint x:str n:uint","  let pid concat \"pid=\" process.pid","  let signal concat \"signal=\" x","  let n concat \"n=\" n","  log app pid signal n","  callback x"," let on_sigint on on_sigint"," process.once \"SIGINT\" on_sigint"," ret value on_sigint","fn to_base64 x:str"," let buffer Buffer.from x"," let r buffer.toString \"base64\"","fn ansi_encode str:str args:etc"," let ansi ansi_init args:etc"," ret concat ansi.escape \"[\" ansi.attr \";\" ansi.fore \";\" ansi.back \"m\" str ansi.escape \"[0m\"","fn ansi_get_attrs"," assign r.normal 0"," assign r.bold 1"," assign r.dim 2"," assign r.underline 4"," assign r.blink 5"," assign r.reverse 7","fn ansi_get_colors"," let list arr"," push list \"default 39 49\""," push list \"black 30 40\""," push list \"red 31 41\""," push list \"green 32 42\""," push list \"yellow 33 43\""," push list \"blue 34 44\""," push list \"magenta 35 45\""," push list \"cyan 36 46\""," push list \"gray 37 47\""," push list \"white 97 107\""," for list","  let a split v \" \"","  let color shift a","  let fore shift a","  let fore to_uint fore","  let back shift a","  let back to_uint back","  let entry obj fore back","  put r color entry","fn ansi_head x:str length:uint"," let escape chr 27"," let at asc \"@\""," let tilde asc \"~\""," var visible 0"," var control 0","  if gte visible length","  let c1 shift a","  if different c1 escape","   assign buffer concat buffer c1","   assign visible inc visible","   let s char_escape c1","   assign buffer concat buffer s","   assign visible add visible s.length","  let c2 shift a","  var malformed false","  if different c2 \"[\"","   assign malformed true","  if malformed","   assign buffer concat buffer c2","   assign visible add visible s.length 1","  var body \"\"","  var closed false","  while is_full a","   let c3 shift a","   let n asc c3","   assign body concat body c3","   if between n at tilde","    assign closed true","  if not closed","   assign buffer concat buffer body","   assign visible add visible s.length 1 body.length","  assign buffer concat buffer c1 c2 body","  assign control add control 2 body.length"," let length min visible length"," let length add length control"," let r slice_l buffer length"," if gt control 0","  ret concat r escape \"[0m\"","fn ansi_init fore back attr"," if is_undef fore","  ret ansi_init \"black\" back attr"," if is_undef back","  ret ansi_init fore \"white\" attr"," if is_undef attr","  ret ansi_init fore back \"normal\""," fn get_fore x:def","   let colors ansi_get_colors","   let n get colors x","   let n n.fore","   ret to_str n","  elseif is_rgb x","   let n ansi_rgb x","   ret concat \"38;5;\" n"," fn get_back x:def","   let n n.back","   ret concat \"48;5;\" n"," fn get_attr x","  check is_str x","  let attrs ansi_get_attrs","  ret get attrs x"," let fore get_fore fore"," let back get_back back"," let attr get_attr attr"," ret obj escape fore back attr","fn ansi_rgb x:obj"," let r mul x.r 36"," let g mul x.g 6"," let b x.b"," ret add 16 r g b","fn ansi_strip x:str"," ret util.stripVTControlCharacters x","fn app_token x:str"," let base concat \".\" x"," let path_cwd base"," let path_home path_concat home base"," let path_common path_concat common base"," var path null"," if is_file path_cwd","  assign path path_cwd"," elseif is_file path_home","  assign path path_home"," elseif is_file path_common","  assign path path_common"," let r file_load path"," let r base36_decode r"," let r salt r","fn archive_find x:str"," let date date_str"," let date replace date \"/\" \"-\""," let base concat file \"-\" date \".\" ext"," let path path_concat dir base"," if not is_file path","  ret path"," var n 1","  let digit pad_l n","  let base concat file \"-\" date \"-\" digit \".\" ext","  let path path_concat dir base","fn group_list"," let users user_list false"," fn find_users gid:uint","  forin users","   let v get users k","   if same v.gid gid","    push r v.name"," let lines file_load \"/etc/group\""," let lines split lines"," for lines","  let fields split v \":\"","  let name shift fields","  let password shift fields","  let gid shift fields","  let gid to_uint gid","  let users shift fields","  let users split users \",\"","  check is_empty fields","  let a find_users gid","  append users a","  let users dedup users","  sort users","  let o obj gid name users","  put r name o","fn init_shell","fn is_local"," let host os_host"," ret same host \"castle\"","fn is_remote"," ret not is_local","fn is_root"," ret same o.username \"root\"","fn mail_debug subject:str data:obj"," let data to_tbl data"," let table h_tbl data"," h_push body table"," let html h_render html"," mail author subject html","fn mail to:str subject:str body:str from paths:etc"," if is_undef from","  ret mail to subject body admin paths:etc"," fn single_part to:str subject:str body:str from:str","  let body quoted_printable body","  let s concat \"from:\" from","  let s concat \"to:\" to","  let s concat \"subject:\" subject","  push a \"mime-version: 1.0\"","  push a \"content-type: text/html;charset=utf-8\"","  push a \"content-transfer-encoding: quoted-printable\"","  push a body","  ret join a crlf"," fn multi_part to:str subject:str body:str from:str paths:etc","  let boundary get_boundary body","  let dash_boundary concat \"--\" boundary","  let end_boundary concat dash_boundary \"--\"","  let s quote boundary","  let s concat \"content-type: multipart/related; boundary=\" s","  push a dash_boundary","  push a \"content-type: text/html; charset=utf-8\"","   let base path_base v","   let file path_file v","   let mime mime_type v","   let content file_read v \"base64\"","   let content chunk_76 content","   push a dash_boundary","   let s space \"content-type:\" mime","   push a \"content-transfer-encoding: base64\"","   let s2 angle file","   let s concat \"content-id: \" s2","   let s2 quote base","   let s concat \"content-disposition: inline; filename=\" s2","   push a \"\"","   push a content","  push a end_boundary"," fn config","  let token app_token \"mabynogy\"","  push a \"account gmail\"","  push a \"host smtp.gmail.com\"","  push a \"port 587\"","  push a \"protocol smtp\"","  push a \"auth on\"","  let s space \"from\" mailer","  let s space \"user\" mailer","  let s space \"password\" token","  push a \"tls on\"","  push a \"tls_starttls on\"","  push a \"tls_trust_file /etc/ssl/certs/ca-certificates.crt\"","  push a \"account default: gmail\""," fn quoted_printable x:str","  let path path_tmp \"qp.txt\"","  file_save path x","  let r os_execute \"python3\" \"-m\" \"quopri\" path","  fs_remove path"," fn chunk_76 x:str","  var input x","  let output arr","  while is_full input","   let s head input 76","   assign input slice input s.length","   push output s","  ret join output crlf"," fn get_boundary body:str","  while true","   let r random_str 8","   if not contain body r","    ret r"," let config_content config"," var body_content null"," if is_full paths","  assign body_content multi_part to subject body from paths:etc","  assign body_content single_part to subject body from"," let config_path path_tmp \"msmtp.txt\""," let body_path path_tmp \"body.txt\""," file_save config_path config_content"," file_save body_path body_content"," let option_file concat \"--file=\" config_path"," fs_change_mode config_path 384"," let s os_shell \"msmtp\" \"--debug\" option_file \"--read-recipients\" \"<\" body_path"," let s txt_prepend s \" > \""," trace \"msmtp\""," trace s"," fs_remove config_path"," fs_remove body_path","fn mime_type path:file"," let r os_execute \"file\" \"--mime\" \"--brief\" path"," let r strip_r r \";\"","fn mnt_clean x:str"," if is_readable x","  mnt_unmount x","  fs_remove x","fn mnt_unmount x"," ret os_execute \"fusermount\" \"-u\" x","fn password alnum","  ret password false"," fn make_password","  fornum 10","   let s random_char"," let special \"_-?\""," fn random_char","  let chars arr","   let a1 explode digit","   let a2 explode lower","   append chars a1","   append chars a2","   let a1 explode special","   let a2 explode digit","   let a3 explode lower","   let a4 explode upper","   append chars a3","   append chars a4","  let n random chars.length","  ret at chars n"," fn is_valid x","   ret is_alnum x","  var special false","  var alpha false","  var digit false","  var upper false","  var lower false","   if is_special v","    assign special true","   if is_alpha v","    assign alpha true","   if is_digit v","    assign digit true","   if is_upper v","    assign upper true","   if is_lower v","    assign lower true","  if not special","  if not alpha","  if not digit","  if not upper","  if not lower"," fn is_special x","   if not contain special v","  let r make_password","  if is_valid r","gn ssh_execute x:etc"," ret run ssh_pass x:etc","gn ssh_pass x:etc"," let args dup x"," let first shift args"," if is_str first","  ret run ssh_pass os_execute x:etc"," let arguments arr \"sshpass\" \"-p\" args:etc"," if is_fn first","  ret first arguments:etc"," elseif is_gn first","  ret run first arguments:etc","gn ssh_system x:str y:etc"," let r run ssh_pass x y:etc"," let a split r"," if is_full a","  log y:etc","  let a txt_prepend a \" > \"","  let s join a","fn sudo_dir_make path:str"," check not is_dir path"," sudo \"mkdir\" \"--parents\" path"," sudo_path_writable path","fn sudo_dir_reset path:str"," sudo_fs_remove path"," sudo_dir_make path","fn sudo_file_append path:str data:str"," let content file_read path"," let content concat content data"," sudo_file_save path content","fn sudo_file_read path:str"," let result sudo os_run \"cat\" path"," check same result.status 0"," check is_empty result.err"," ret result.out","fn sudo_file_save path:str data:str"," let dir path_dir path"," let base path_base path"," let tmp path_tmp base","  sudo_dir_make dir"," file_save tmp data"," sudo \"mv\" \"--force\" tmp path","fn sudo_file_write path:str data:str"," file_write tmp data","fn sudo_fs_change_mode path:str pattern:str"," check is_fs path"," sudo \"chmod\" pattern path","fn sudo_fs_remove path:str"," sudo \"rm\" \"--recursive\" \"--force\" path","fn sudo_is_dir x"," let result sudo os_run \"stat\" \"--terse\" \"--format=%F\" x"," if same result.status 1"," ret contain result.out \"directory\"","fn sudo_is_file x"," ret contain result.out \"file\"","fn sudo_path_writable path:str","   sudo_fs_change_mode path \"a+rw\"","   sudo_fs_change_mode path \"a+rwx\"","fn sudo x y:etc"," if not is_fn x","  ret sudo os_system x y:etc"," ret x \"sudo\" y:etc","fn user_created x:obj"," var r x.created"," let home x.home"," let last_log x.last_log"," if is_str home","  let n fs_created home","  if is_null r","   assign r n","   assign r min r n"," if is_num last_log","   assign r last_log","   assign r min r last_log","fn user_list with_group"," if is_undef with_group","  ret user_list true"," check is_bool with_group"," fn last_log user:str","  let lines os_execute \"last\" \"--fulltimes\" \"-R\" user","  let lines split lines","  let line front lines","  if is_empty line","   ret null","  let line replace_rec line \"  \" \" \"","  let parts split line \" \"","  shift parts 2","  let parts slice_l parts 5","  let line join parts \" \"","  ret date_decode line"," var groups null"," fn find_group gid:uint","  forin groups","   let v get groups k","    ret v.name"," fn find_groups name:str","   if contain v.users name"," let lines file_load \"/etc/passwd\""," if with_group","  assign groups group_list","  let uid shift fields","  let uid to_uint uid","  let comment shift fields","  let home shift fields","  let shell shift fields","  let human match_l home \"/home/\"","  var created null","  let last_log last_log name","  let o obj uid gid name comment home shell human created last_log","  if with_group","   let group find_group gid","   let groups find_groups name","   unshift groups group","   let groups dedup groups","   sort groups","   assign o.groups groups","   obj_order o \"uid\" \"gid\" \"name\" \"groups\"","fn dom_entities"," let result obj"," fn entity x:cool y","  if is_char x","   let n asc x","   ret entity n y","  check is_ushort x","  if is_ushort y","   variant x y","  let key format y","  let c chr x","  put result key c","  variant x"," fn variant x:ushort y","   ret variant x x","  check is_ushort y","  let numeric1 pad_l y \"0\" 3","  let numeric1 concat \"#\" numeric1","  let numeric1 format numeric1","  if not has result numeric1","   put result numeric1 c","  let numeric2 pad_l y \"0\" 4","  let numeric2 concat \"#\" numeric2","  let numeric2 format numeric2","  if not has result numeric2","   put result numeric2 c","  let hex to_hex y","  let hex concat \"#x\" hex","  let hex format hex","  if not has result hex","   put result hex c"," fn format x:str","  ret concat \"&\" x \";\""," entity 33 \"excl\""," entity \"'\" \"quot\""," entity 35 \"num\""," entity 36 \"dollar\""," entity 37 \"percnt\""," entity 38 \"amp\""," entity 39 \"apos\""," entity 40 \"lparen\""," entity 41 \"rparen\""," entity 42 \"ast\""," entity 43 \"plus\""," entity 44 \"comma\""," entity 46 \"period\""," entity 47 \"sol\""," entity 58 \"colon\""," entity 59 \"semi\""," entity 60 \"lt\""," entity 61 \"equals\""," entity 62 \"gt\""," entity 63 \"quest\""," entity 64 \"commat\""," entity 91 \"lsqb\""," entity 92 \"bsol\""," entity 93 \"rsqb\""," entity 94 \"Hat\""," entity 95 \"lowbar\""," entity 96 \"grave\""," entity 123 \"lcub\""," entity 124 \"verbar\""," entity 125 \"rcub\""," entity 126 \"tilde\""," entity 8364 \"euro\""," entity \",\" \"sbquo\""," entity 131 \"fnof\""," entity \"\\\"\" \"bdquo\""," entity 133 \"hellip\""," entity 134 \"dagger\""," entity 135 \"Dagger\""," entity 136 \"circ\""," entity 137 \"permil\""," entity 138 \"Scaron\""," entity \"'\" \"lsaquo\""," entity 140 \"OElig\""," entity 142 \"Zcaron\""," entity \"'\" \"lsquo\""," entity \"'\" \"rsquo\""," entity \"\\\"\" \"ldquo\""," entity \"\\\"\" \"rdquo\""," entity 149 \"bull\""," entity 150 \"ndash\""," entity 151 \"mdash\""," entity 152 732"," entity 153 \"trade\""," entity 154 \"scaron\""," entity \"'\" \"rsaquo\""," entity 156 \"oelig\""," entity 158 \"zcaron\""," entity 159 \"Yuml\""," entity 160 \"nbsp\""," entity 161 \"iexcl\""," entity 162 \"cent\""," entity 163 \"pound\""," entity 164 \"curren\""," entity 165 \"yen\""," entity 166 \"brvbar\""," entity 167 \"sect\""," entity 168 \"uml\""," entity 169 \"copy\""," entity 170 \"ordf\""," entity \"\\\"\" \"laquo\""," entity 172 \"not\""," entity 173 \"shy\""," entity 174 \"reg\""," entity 175 \"macr\""," entity 176 \"deg\""," entity 177 \"plusmn\""," entity 178 \"sup2\""," entity 179 \"sup3\""," entity 180 \"acute\""," entity 181 \"micro\""," entity 182 \"para\""," entity 183 \"middot\""," entity 184 \"cedil\""," entity 185 \"sup1\""," entity 186 \"ordm\""," entity \"\\\"\" \"raquo\""," entity 188 \"frac14\""," entity 189 \"frac12\""," entity 190 \"frac34\""," entity 191 \"iquest\""," entity 192 \"Agrave\""," entity 193 \"Aacute\""," entity 194 \"Acirc\""," entity 195 \"Atilde\""," entity 196 \"Auml\""," entity 197 \"Aring\""," entity 198 \"AElig\""," entity 199 \"Ccedil\""," entity 200 \"Egrave\""," entity 201 \"Eacute\""," entity 202 \"Ecirc\""," entity 203 \"Euml\""," entity 204 \"Igrave\""," entity 205 \"Iacute\""," entity 206 \"Icirc\""," entity 207 \"Iuml\""," entity 208 \"ETH\""," entity 209 \"Ntilde\""," entity 210 \"Ograve\""," entity 211 \"Oacute\""," entity 212 \"Ocirc\""," entity 213 \"Otilde\""," entity 214 \"Ouml\""," entity \"x\" \"times\""," entity 216 \"Oslash\""," entity 217 \"Ugrave\""," entity 218 \"Uacute\""," entity 219 \"Ucirc\""," entity 220 \"Uuml\""," entity 221 \"Yacute\""," entity 222 \"THORN\""," entity 223 \"szlig\""," entity 224 \"agrave\""," entity 225 \"aacute\""," entity 226 \"acirc\""," entity 227 \"atilde\""," entity 228 \"auml\""," entity 229 \"aring\""," entity 230 \"aelig\""," entity 231 \"ccedil\""," entity 232 \"egrave\""," entity 233 \"eacute\""," entity 234 \"ecirc\""," entity 235 \"euml\""," entity 236 \"igrave\""," entity 237 \"iacute\""," entity 238 \"icirc\""," entity 239 \"iuml\""," entity 240 \"eth\""," entity 241 \"ntilde\""," entity 242 \"ograve\""," entity 243 \"oacute\""," entity 244 \"ocirc\""," entity 245 \"otilde\""," entity 246 \"ouml\""," entity 247 \"divide\""," entity 248 \"oslash\""," entity 249 \"ugrave\""," entity 250 \"uacute\""," entity 251 \"ucirc\""," entity 252 \"uuml\""," entity 253 \"yacute\""," entity 254 \"thorn\""," entity 255 \"yuml\"","fn dom_escape x:str","  let entity find entities v","  if same entity -1","   push a entity","fn dom_special_chars x:str"," let r replace x nbsp \"&nbsp;\""," let r replace r \"\\\"\" \"&quot;\""," let r replace r \"'\" \"&apos;\""," let r replace r \"<\" \"&lt;\""," let r replace r \">\" \"&gt;\"","fn dom_unescape x:str"," forin entities","  let v get entities k","  assign r replace r k v","fn h_a x"," let r h_init \"a\" x"," assign r.inline true","fn h_attr x:obj y:str z:cool"," put x.attr y z","fn h_b x"," let r h_init \"b\" x","fn h_back_color x:obj y:str"," h_style x \"background-color\" y","fn h_body"," ret h_init \"body\"","fn h_bold x:obj"," h_style x \"font-weight\" \"bold\"","fn h_border x:obj y","  let style space border \"solid gainsboro\"","  ret h_border x style"," h_style x \"border\" y","fn h_br"," let r h_init \"br\""," assign r.short true","fn h_color x:obj y:str"," h_style x \"color\" y","fn h_decoration x:obj y:str"," h_style x \"text-decoration\" y","fn h_div x"," ret h_init \"div\" x","fn h_float x:obj y:str"," h_style x \"float\" y","fn h_font_family x:obj y:str"," h_style x \"font-family\" y","fn h_font_size x:obj y:str"," h_style x \"font-size\" y","fn h_head"," let r h_init \"head\""," let meta h_meta"," h_attr meta \"charset\" \"utf-8\""," h_push r meta","fn h_href x:obj y:str"," h_attr x \"href\" y","fn h_html"," ret h_init \"html\"","fn h_img"," let r h_init \"img\"","fn h_init name:str text"," if is_undef text","  ret h_init name \"\""," check is_str text"," let short false"," let inline false"," let attr obj"," let style obj"," let children arr"," ret obj name short inline attr style text children","fn h_meta"," let r h_init \"meta\"","fn h_padding_bottom x:obj y:cool"," h_style x \"padding-bottom\" y","fn h_padding_left x:obj y:cool"," h_style x \"padding-left\" y","fn h_padding_right x:obj y:cool"," h_style x \"padding-right\" y","fn h_padding_top x:obj y:cool"," h_style x \"padding-top\" y","fn h_padding x:obj y:cool"," h_style x \"padding\" y","fn h_pre x"," ret h_init \"pre\" x","fn h_push x:obj y:obj"," push x.children y","fn h_render x:obj"," fn html_inline x:str"," fn indent_child x:arr","  let a dup x","   let s shift a","   if not pre_begin s","    let s txt_indent s","   let s txt_indent s","   if pre_end s","   while is_full a","    let s shift a","    if pre_end s","     brk"," fn pre_begin x:str","  let s trim x","  ret match_l s \"<pre>\""," fn pre_end x:str","  ret match_r s \"</pre>\""," if same x.name \"html\"","  push lines \"<!doctype html>\""," let attr dup x.attr"," if is_full x.style","  var style arr","  forin x.style","   let v get x.style k","   let s concat k \": \" v \";\"","   push style s","  let style join style \" \"","  put attr \"style\" style"," let attributes arr"," forin attr","  let v get attr k","  let s dom_special_chars v","  let s quote s","  let s concat k \"=\" s","  push attributes s"," let attributes join attributes \" \""," let open arr x.name"," if is_full attributes","  push open attributes"," let open join open \" \""," let open angle open"," let close concat \"/\" x.name"," let close angle close"," let text x.text"," let children x.children"," if same name \"pre\"","  check is_empty children","  let text dom_special_chars text","  let line concat open text close","  push lines line"," elseif same name \"script\"","  let text replace text \"</script>\" \"<\\\\/script>\"","  let text txt_indent text","  let text split text","  push lines open","  append lines text","  push lines close"," elseif x.short","  check is_empty text"," elseif x.inline","  var line open","  let text html_inline text","  assign line concat line text","  for children","   let s h_render v","   assign line concat line s","  assign line concat line close"," elseif is_empty children","  if is_full text","   push lines text","   let a split s","   let a indent_child a","   append lines a"," ret join lines","fn h_script x"," ret h_init \"script\" x","fn h_spacer"," let r h_div"," h_text r nbsp","fn h_span x"," let r h_init \"span\" x","fn h_src x:obj y:str"," h_attr x \"src\" y","fn h_style x:obj y:str z:cool"," put x.style y z","fn h_table"," let r h_init \"table\""," h_style r \"border-collapse\" \"collapse\"","fn h_tbl tbl:arr"," let table h_table"," h_border table"," let tr h_tr"," for tbl_columns tbl","  let th h_th","  h_text th v","  h_padding th padding","  h_border th","  h_push tr th"," h_push table tr"," for tbl","  let tr h_tr","  let even mod i 2","  let even same even 0","  if even","   h_back_color tr \"whitesmoke\"","   h_back_color tr \"white\"","   let td h_td","   if is_cool v","    h_text td v","   elseif is_link v","    let a link_h v","    h_push td a","   h_padding td padding","   h_push tr td","  h_push table tr"," ret table","fn h_td"," ret h_init \"td\"","fn h_text x:obj y","  ret x.text"," assign x.text y","fn h_th"," ret h_init \"th\"","fn h_title x"," let r h_init \"title\" x","fn h_tr"," ret h_init \"tr\"","fn h_wbr"," let r h_init \"wbr\"","fn h_width x:obj y:cool"," h_style x \"width\" y","fn init_www"," assign global.nbsp chr 160"," assign global.entities dom_entities"," assign global.mailer \"mabynogy@gmail.com\""," assign global.admin \"mabynogy@freeserver.sh\""," assign global.author \"marc@abiven.eu\"","fn is_link x"," if not is_obj x"," if not is_str x.url"," if not is_str x.title","fn link_dom x:obj"," let r dom_a"," dom_href r x.url"," dom_text r x.title","fn link_h x:obj"," let r h_a"," h_href r x.url"," h_text r x.title","fn link_init url:str title"," if is_undef title","  let title url_beautify url","  ret link_init url title"," check is_str title"," ret obj url title","fn config_append path:str line:str"," check is_ln line"," let content sudo_file_read path"," if not match_r content lf","  push parts lf"," let line pad_r line \" \" config_padding"," push parts line"," push parts \"#\""," push parts config_tag"," push parts lf"," let line implode parts"," let content concat content line","fn config_clean path:str"," let inputs sudo_file_read path"," let outputs arr"," for inputs","  let parts split v \"#\"","  if is_empty parts","   push outputs v","  let tag back parts","  if different tag config_tag","  trace \"config>\" v"," let content join outputs","fn init_org"," assign global.common \"/home/common\""," assign global.login_merlin \"mabynogy@mabynogy.org\""," assign global.org_user_path path_concat common \"users.json\""," assign global.config_padding 128"," assign global.config_tag \"mabynogy\"","fn org_group_create_users"," fn get_humans","  let users user_list","   if not v.human","   put r v.name v"," var groups group_list"," let group \"users\""," if not has groups \"users\"","  sudo \"groupadd\" \"users\"","  let o group","  log \"create\" s"," let users groups.users"," let humans get_humans"," forin humans","  if contain users.users k","  sudo \"usermod\" \"--append\" \"--groups\" users.name k","  let o obj user group","  log \"add\" s","fn org_user_install user:str"," fn install_prompt path:str","  let prompt get_prompt","  let prompt quote prompt","  let prompt concat \"PS1=\" prompt","  config_clean path","  config_append path prompt","  config_append path \"export PS1\""," fn get_prompt","  let red rgb_init 5 0 0","  let yellow rgb_init 5 5 0","  let time ps1_encode \"\\\\t\" yellow \"black\"","  var user null","  if is_root","   assign user ps1_encode \"\\\\u\" red \"default\" \"bold\"","   assign user ps1_encode \"\\\\u\" \"green\" \"default\" \"bold\"","  let host ps1_encode \"\\\\h\" \"blue\" \"default\" \"bold\"","  let login concat user \"@\" host","  let path ps1_encode \"\\\\w\" \"cyan\" \"default\" \"bold\"","  let path concat path \" $ \"","  ret space time login path"," install_prompt \"/root/.bashrc\""," let home os_home user"," let bashrc path_concat home \".bashrc\""," check sudo_is_file bashrc"," install_prompt bashrc","fn org_user_load"," let r user_list"," if is_file org_user_path","  let users file_load org_user_path","  let users json_decode users","   let user get r k","   assign user.mail v.mail","   assign user.created v.created","   assign user.created user_created user"," forin r","  let v get r k","  if not has v \"mail\"","   assign v.mail null","fn org_user_remove_unused"," let users org_user_load"," let removes obj"," forin users","  let v get users k","  let last_log v.last_log","  if not v.human","  if not is_null last_log","  let delay time_get","  let delay sub delay v.created","  if lt delay week","  org_user_remove name","  let o obj user","  log \"remove\" s","  put removes name v.mail"," if is_full removes","  mail_debug \"user-remove-unused\" removes","fn org_user_remove x:str"," check different x \"mabynogy\""," let users user_list"," let user get users x"," let file concat x \".zip\""," let archive path_concat common \"archive\""," if not is_dir archive","  sudo_dir_make archive"," let r path_concat archive file"," let r archive_find r"," sudo \"zip\" \"--recurse-paths\" \"-9\" r user.home"," let archive to_lit r"," log \"archive\" r"," let admin os_user"," let pair concat admin \":\" admin"," sudo \"chown\" pair r"," sudo \"deluser\" \"--remove-home\" x"," org_user_update","fn org_user_save x:obj"," let users obj","  let mail v.mail","  let created v.created","  check is_def mail","  check is_def created","  let user obj mail created","  put users k user"," let users json_dump users"," sudo_file_save org_user_path users","fn org_user_uninstall user:str"," config_clean bashrc","fn org_user_update"," org_user_save users","fn ps1_encode str:str args:etc"," let open \"\\\\[\""," let close \"\\\\]\""," let r concat open ansi.escape \"[\" ansi.attr \";\" ansi.fore \";\" ansi.back \"m\" close str open ansi.escape \"[0m\" close"," let r replace r escape \"\\\\e\"","fn app_home app:str"," let js app_make app"," let title h_title app"," let script h_script js"," h_push body script"," ret h_render html","fn app_make app:str"," let cpl cpl_init app"," let o obj app"," log \"make\" s"," cpl_include cpl"," let r cpl_generate cpl"," let tmp concat app \"-tmp.js\""," let tmp path_tmp tmp"," file_save tmp r"," let success cpl_check_syntax cpl tmp"," check success"," cpl_deinit cpl","fn ast_assign cpl:obj args:arr children:arr source:obj"," check is_empty children"," let left front args"," check is_name left"," let right slice args 1"," let right call_expr_right cpl right:etc"," let code concat left \"=\" right"," ret obj code source","fn ast_begin cpl:obj args:arr children:arr source:obj"," check is_empty args"," let r call_ast_block cpl children source"," if cpl_is_leaf cpl children","  check is_single r","  let node front r","  assign node.code trim node.code","fn ast_brk cpl:obj args:arr children:arr source:obj"," let code \"break\"","fn ast_call cpl:obj args:arr children:arr source:obj"," check is_full args"," let code expr_call cpl args:etc","fn ast_catch cpl:obj args:arr children:arr source:obj"," let block call_ast_block_top cpl children source"," if is_empty args","  let code \"catch\"","  let node obj code source","  push r node","  append r block"," check is_single args"," let identifier front args"," check is_identifier identifier"," let code paren identifier"," let code concat \"catch\" code"," let node obj code source"," push r node"," append r block","fn ast_check cpl:obj args:arr children:arr source:obj"," let code join args \",\""," let code paren code"," let code concat \"check\" code","fn ast_cont cpl:obj args:arr children:arr source:obj"," let code \"continue\"","fn ast_else cpl:obj args:arr children:arr source:obj"," let code \"else\""," let block call_ast_block cpl children source","fn ast_elseif cpl:obj args:arr children:arr source:obj"," ret call_ast_if cpl args children source \"else if\"","fn ast_fn cpl:obj args:arr children:arr source:obj"," ret call_ast_xn cpl args children source \"function\"","fn ast_forin cpl:obj args:arr children:arr source:obj"," ret call_ast_for cpl args children source \"k in\"","fn ast_fornum cpl:obj args:arr children:arr source:obj"," let code call_expr_right cpl args:etc"," let code concat \"let i=0;i<\" code \";i++\""," let code concat \"for\" code","fn ast_forof cpl:obj args:arr children:arr source:obj"," ret call_ast_for cpl args children source \"v of\"","fn ast_gn cpl:obj args:arr children:arr source:obj"," ret call_ast_xn cpl args children source \"function*\"","fn ast_if cpl:obj args:arr children:arr source:obj"," ret call_ast_if cpl args children source \"if\"","fn ast_include cpl:obj args:arr children:arr source:obj"," let path front args"," check is_lit path"," let path unwrap path","fn ast_inline cpl:obj args:arr children:arr source:obj"," let code front args"," check is_lit code"," let code unwrap code","fn ast_let cpl:obj args:arr children:arr source:obj"," check is_many args"," ret call_ast_declare cpl args children source \"const\"","fn ast_ret cpl:obj args:arr children:arr source:obj"," var code \"\"","  assign code \"return\"","  let right call_expr_right cpl args:etc","  assign code space \"return\" right","fn ast_run cpl:obj args:arr children:arr source:obj"," let code space \"yield*\" code","fn ast_throw cpl:obj args:arr children:arr source:obj"," let code space \"throw\" code","fn ast_try cpl:obj args:arr children:arr source:obj"," let code \"try\"","fn ast_var cpl:obj args:arr children:arr source:obj"," ret call_ast_declare cpl args children source \"let\"","fn ast_while cpl:obj args:arr children:arr source:obj"," let code concat \"while\" code","fn ast_yield cpl:obj args:arr children:arr source:obj","  let code \"yield\"","  ret obj code source"," let code space \"yield\" code","fn call_ast_block_top cpl:obj children:arr source:obj"," for cpl_block cpl children","  let o dup v","  assign o.code txt_indent o.code"," let code \"{\""," let open obj code source"," let code \"}\""," let close obj code source"," unshift r open"," push r close","fn call_ast_block cpl:obj children:arr source:obj"," if not cpl_is_leaf cpl children","  let code \"{\"","  let open obj code source","  let code \"}\"","  let close obj code source","  unshift r open","  push r close","fn call_ast_declare cpl:obj args:arr children:arr source:obj keyword:str"," let code slice args 1"," let code call_expr_right cpl code:etc"," let code concat identifier \"=\" code"," let code space keyword code","fn call_ast_for cpl:obj args:arr children:arr source:obj keyword:str"," let code space \"const\" keyword code","fn call_ast_if cpl:obj args:arr children:arr source:obj keyword:str"," let code concat keyword code","fn call_ast_xn cpl:obj args:arr children:arr source:obj keyword:str"," fn get_argument x:str","  if is_identifier x","  if is_tuple x","   let a unwrap x","   check is_pair a","   let name front a","   let etc back a","   check is_identifier name","   check same etc \"etc\"","   ret concat \"...\" name"," let name front args"," check is_name name"," let args slice args 1"," let parameters map args get_argument"," for parameters","  let n count parameters v","  if same n 1","  let arg to_lit v","  let message space \"Argument\" arg \"defined\" n \"times\"","  stop message"," let parameters join parameters \",\""," let list paren parameters"," let code concat name list","fn cpl_block cpl:obj nodes:arr"," for nodes","  let a cpl_translate cpl v","  append r a","fn cpl_check_fn cpl:obj nodes:arr path:str"," let file path_file path"," let name replace file \"-\" \"_\""," if same name \"check_arity\"","  if same v.operator \"fn\"","  elseif same v.operator \"gn\"","  let xn front v.args","  if same xn name"," let s_file to_lit file"," let message space \"The file\" s_file \"must define a function or a generator nammed\" s_name","fn cpl_check_syntax cpl:obj path"," if is_undef path","  ret cpl_check_syntax cpl cpl.target"," check is_str path"," let argv node_argv"," let o os_run argv:etc \"--check\" path"," check is_empty o.out"," if same o.status 0","  check is_empty o.err"," check cpl_log_error cpl o.err path","fn cpl_check cpl:obj nodes:arr"," fn visit nodes:arr","  for nodes","   if not is_callable v.operator","    let node dup v","    assign node.children visit node.children","    push r node","   let node instrument v","   push r node"," fn instrument node:obj","  let r dup node","  let name front r.args","  let parameters slice r.args 1","  let arity get_arity parameters","  if same arity.operator \"gte\"","   if same arity.count 0","    assign r.children visit r.children","  let operator \"check_arity\"","  let count to_str arity.count","  let s_operator to_lit arity.operator","  let args arr s_operator \"arguments.length\" count","  let children arr","  let source dup r.source","  let node obj operator args children source","  unshift r.children node","  reverse parameters","  clear r.args","  for parameters","   if is_identifier v","    unshift r.args v","   check is_tuple v","   let a unwrap v","   let identifier at a 0","   let type at a 1","   if same type \"etc\"","   unshift r.args identifier","   let s_identifier to_lit identifier","   let s_type to_lit type","   let is concat \"is_\" type","   let operator \"check_arg\"","   let args arr is identifier s_identifier s_type","   let children arr","   let source dup r.source","   let node obj operator args children source","   unshift r.children node","  unshift r.args name","  assign r.children visit r.children"," fn get_arity args:arr","  var operator \"same\"","  var count 0","  for args","   if is_tuple v","    let a unwrap v","    let type at a 1","    if same type \"etc\"","     assign operator \"gte\"","   elseif is_identifier v","    assign operator \"gte\"","   assign count inc count","  ret obj operator count"," fn is_callable x","  if same x \"fn\"","  if same x \"gn\""," ret visit nodes","fn cpl_compile cpl:obj path:str"," let nodes cpl_load cpl path"," let nodes cpl_tokenize cpl nodes"," let nodes cpl_fold cpl nodes"," cpl_check_fn cpl nodes path"," let nodes cpl_check cpl nodes"," var nodes cpl_for cpl nodes","  assign nodes cpl_scope cpl nodes","  assign nodes cpl_block cpl nodes","  cpl_dump cpl"," ret nodes","fn cpl_deinit cpl:obj"," let s json_dump cpl.cache"," file_save cpl.path s","fn cpl_dump cpl:obj"," check is_obj cpl"," fn dump_ast node:obj","  let args node.args","  let children node.children","  let a3 arr","  push a2 node.operator","  append a2 args","  for a2","   if is_token v","    push a3 v","   elseif is_str v","    let s to_lit v","    push a3 s","  let cs space a3:etc","  let source node.source","  let path source.path","  let ncs source.index","  let ncs inc ncs","  let o obj path ncs cs","   let t dump_ast v","   for t","    assign v.cs txt_indent v.cs","   append r t","  if is_full children","   let cs \"end\"","   let o obj path ncs cs","   push r o"," for cpl.stack","  let frame concat \"#\" n","  let title space \"compiler frame\" frame","  let s dump_ast v","  let s tbl_render s","fn cpl_fold cpl:obj nodes:arr","  let parent shift nodes","  let indent parent.indent","  let descendants arr","  while is_full nodes","   let o front nodes","   if gt o.indent indent","    shift nodes","    push descendants o","  while is_full descendants","   let o visit descendants","   push children o","  let operator parent.operator","  let args parent.args","  let source parent.source","  ret obj operator args children source"," let nodes dup nodes"," while is_full nodes","  let o visit nodes","fn cpl_for cpl:obj nodes:arr","   if different v.operator \"for\"","   let nodes generate v","   append r nodes"," fn generate node:obj","  let operator \"let\"","  let args arr \"_a\" args:etc","  let source dup node.source","  let node2 obj operator args children source","  push r node2","  let operator \"forin\"","  let args arr \"_a\"","  let children visit node.children","  let node3 obj operator args children source","  push r node3","  let args arr \"v\" \"at\" \"_a\" \"i\"","  let node4 obj operator args children source","  unshift node3.children node4","  let args arr \"i\" \"to_i\" \"k\"","  let node5 obj operator args children source","  unshift node3.children node5","fn cpl_generate cpl:obj"," let pool arr"," fn get_index x:str","  let r find pool x","  if gte r 0","  let r pool.length","  push pool x"," for cpl.out","  push a v.code"," let relatives arr"," let indices arr","  let source v.source","  if not contain paths path","   push paths path","  let n get_index path","  push relatives n","  push indices source.index"," let contents obj","  let key get_index v","  let key to_str key","  let content cpl_uncomment cpl v","  let value arr","  for split content","   let index get_index v","   push value index","  put contents key value"," let app to_lit cpl.app"," let app concat \"const app=\" app"," push a app"," let compile time_get"," let compile trunc compile"," let compile concat \"const compile=\" compile"," push a compile"," let pool json_encode pool"," let pool concat \"const pool=\" pool"," push a pool"," let relatives json_encode relatives"," let relatives concat \"const relatives=\" relatives"," push a relatives"," let indices json_encode indices"," let indices concat \"const indices=\" indices"," push a indices"," let contents json_encode contents"," let contents concat \"const contents=\" contents"," push a contents"," let fns join cpl.fns \",\""," let fns brace fns"," let fns concat \"const fns=\" fns"," push a fns"," push a \"main()\"","fn cpl_include cpl:obj"," fn compile_cache path:str","  let relative path_real \"src\"","  let relative path_fix relative","  let relative strip_l path relative","  let cache cpl.cache.files","  let modified fs_modified path","  var recompile false","  if has cache relative","   let entry get cache relative","   if different entry.modified modified","    assign recompile true","   assign recompile true","  if not recompile","   let nodes entry.nodes","   declare_fn path nodes","   ret nodes","  let path relative","  let modified_ time_hn modified","  let o obj path modified_","  trace \"compile\" s","  let nodes cpl_compile cpl path","  declare_fn path nodes","  let entry obj modified nodes","  set cache relative entry","  ret nodes"," fn declare_fn path:str nodes:arr","  if is_empty nodes","  let fn path_file path","  let fn replace fn \"-\" \"_\"","  push cpl.fns fn"," fn get_files x:arr","   let a dir_load v"," let includes pkg_include cpl.app"," let files get_files includes"," for files","  let ext path_ext v","  if different ext \"cs\"","  let nodes compile_cache v","  append cpl.out nodes","fn cpl_init app:str"," let path \"cache.txt\""," fn load_cache","   let s file_load path","   ret json_decode s","  let scans obj","  let files obj","  ret obj scans files"," let asts fn_select \"ast_\""," let exprs fn_select \"expr_\""," let fns arr"," let stack arr"," let out arr"," let target concat \"out-\" app \".js\""," let cache load_cache"," ret obj app asts exprs fns files stack out target path cache","fn cpl_is_call cpl:obj token:str"," if same token \"call\""," forin cpl.asts","  if same k token","fn cpl_is_leaf cpl:obj nodes:arr"," if not is_single nodes"," let node front nodes"," let operator node.operator"," if cpl_is_call cpl operator"," let operators arr \"brk\" \"check\" \"cont\" \"inline\" \"ret\" \"run\" \"throw\" \"yield\""," ret contain operators operator","fn cpl_load cpl:obj path:str"," let path2 dir_current"," let path2 path_concat path2 \"src\""," let path2 path_fix path2"," let path2 strip_l path path2"," let lines cpl_uncomment cpl path2","  let path path2","  let code v","  let source obj path index","  let o obj code source","fn cpl_log_error cpl:obj err:str path","  ret cpl_log_error cpl err cpl.target"," fn parse_error cpl:obj path:str err:str","  let s txt_compact err","  let line_js shift lines","  let line_js split line_js \":\"","  let line_js back line_js","  let line_js to_uint line_js","  shift lines 3","  flower message","  let line line_js","  let o obj line path","  if gt line_js cpl.out.length","  let index dec line_js","  let o at cpl.out index","  let source o.source","  let content cpl_uncomment cpl source.path","  let content split content","  let line_cs inc source.index","  let s dbg_origin content line_cs \"\"","  let content dbg_source path","  let s dbg_origin content line_js \"\"","  let stack arr","  let s shift lines","  push stack s","   let s shift lines","   if not match_l s \"at\"","   push stack s","  let stack join stack","  let map cpl_source_map cpl","  let report report_init stack undefined map","  report_log report","  parse_error cpl path err","fn cpl_scan cpl:obj str:str"," fn is_complex x","  if contain x \"//\"","  if contain x \"\\\"\""," let s trim str"," if is_complex s","  let cache cpl.cache.scans","  if has cache s","   let r get cache s","   let r dup r","  let r scan s","  let r reject r is_trivia","  let a dup r","  put cache s a"," let r split s \" \""," let r reject r is_empty","fn cpl_scope cpl:obj nodes:arr","  let nodes dup nodes","   let node shift nodes","   var a null","    assign a resolve node nodes","   catch e","    unshift cpl.stack node","    throw e"," fn resolve node:obj rest:arr","  let operator node.operator","  let declare operator","  if is_declare operator","   let name front args","   let rvalue slice args 1","   check is_str name","   check is_arr rvalue","   check is_full rvalue","   let operator \"let\"","   let args arr \"_\" rvalue:etc","   let node2 obj operator args children source","   push r node2","   let operator \"begin\"","   let args arr","   let node3 obj operator args children source","   push r node3","   let operator declare","   let args arr name \"_\"","   let children visit node.children","   let node4 obj operator args children source","   push node3.children node4","   if is_full rest","    let operator \"begin\"","    let args arr","    let children visit rest","    let node5 obj operator args children source","    push node3.children node5","    clear rest","  elseif is_for operator","   let args arr \"_\" args:etc","   let args arr \"_\""," fn is_declare operator","  if same operator \"let\"","  if same operator \"var\""," fn is_for operator","  if same operator \"forof\"","  if same operator \"forin\"","  if same operator \"fornum\"","fn cpl_source_map cpl:obj"," let script path_real cpl.target"," forin cpl.files","  let v get cpl.files k","  let a split v","  put files k a","  let path v.source.path","  let index v.source.index","  let js v.code"," let o obj script files source"," ret dup o","fn cpl_tokenize cpl:obj nodes:arr","  let code v.code","  let source dup v.source","  let indent str_indent code","  let args cpl_scan cpl code","  let operator shift args","  if same operator \"end\"","   if is_empty args","  let node obj indent operator args children source","fn cpl_translate cpl:obj node:obj"," fn translate cpl:obj operator:str args:arr children:arr source:obj","  forin cpl.asts","   if different k operator","   let ast get cpl.asts k","   let r ast cpl args children source","   if is_arr r","   check is_obj r","   ret arr r","  let args arr operator args:etc","  let r ast_call cpl args children source","  if is_arr r","  check is_obj r","  ret arr r"," let args node.args"," let children node.children"," let source node.source","  ret translate cpl operator args children source","  unshift cpl.stack node","fn cpl_uncomment cpl:obj path:str"," if has cpl.files path","  ret get cpl.files path"," let path_real path_concat \"src\" path"," let content file_load path_real"," for split content","  let tokens cpl_scan cpl v","  if is_empty tokens","   push r \"\"","  let line join tokens \" \"","  push r line"," put cpl.files path r","fn call_expr_arg cpl:obj x:str","  let a unwrap x","  check is_pair a","  let name front a","  let etc back a","  check is_identifier name","  check same etc \"etc\"","  ret concat \"...\" name"," let s to_lit x"," let message space \"Invalid argument\" s","fn call_expr_right cpl:obj x y:etc","  if same x \"arr\"","  elseif same x \"obj\"","  elseif same x \"_\"","  elseif same x \"null\"","  elseif same x \"true\"","  elseif same x \"false\"","  elseif is_numeric x","  elseif is_lit x","   let condition paren x","   let condition concat \"is_fn\" condition","   let call concat x \"()\"","   ret concat condition \"?\" call \":\" x"," ret call_expr_rvalue cpl x y:etc","fn call_expr_rvalue cpl:obj x:etc","  if same first \"arr\"","   ret expr_arr cpl","  elseif same first \"obj\"","   ret expr_obj cpl","   ret first"," let args slice x 1"," if has cpl.exprs first","  let fn get cpl.exprs first","  ret fn cpl args:etc"," ret expr_call cpl x:etc","fn expr_arr cpl:obj x:etc"," let fn partial call_expr_arg cpl"," let args map x fn"," let s join args \",\""," ret bracket s","fn expr_call cpl:obj x:name y:etc"," let args map y fn"," let args join args \",\""," let list paren args"," ret concat x list","fn expr_iif cpl:obj x:arg y:arg z:arg a:etc"," check is_empty a"," ret concat x \"?\" y \":\" z","fn expr_in cpl:obj x:identifier y:identifier z:etc"," check is_empty z"," ret space y \"in\" x","fn expr_inline cpl:obj x:str"," ret unwrap x","fn expr_instanceof cpl:obj x:name y:identifier z:etc"," ret space x \"instanceof\" y","fn expr_new cpl:obj x:etc"," let rvalue call_expr_rvalue cpl x:etc"," ret space \"new\" rvalue","fn expr_not cpl:obj x:etc"," let right call_expr_right cpl x:etc"," let right paren right"," ret concat \"!\" right","fn expr_obj cpl:obj x:etc"," check every x is_identifier"," let s join x \",\""," ret brace s","fn expr_run cpl:obj x:etc"," let call expr_call cpl x:etc"," ret space \"yield*\" call","fn expr_value cpl:obj x:str y:etc"," check is_empty y","fn pkg_include pkg:str b"," fn is_unique x:arr","   let n count x v","   if gt n 1"," let dir get pkgs pkg"," let path path_concat dir \"include.txt\""," if is_file path","  let lines file_load path","   let name strip_l v \"lib-\"","   let path get pkgs name","   let children pkg_include name","   append r children"," push r dir"," check is_unique r","gn init x:etc"," let apps app_list"," let names obj_keys apps","  dump names"," let app shift args"," if not has apps app"," var run true"," if extract args \"--compile\"","  assign run false"," let code cpl_generate cpl"," file_save cpl.target code"," if not cpl_check_syntax cpl"," if not run"," let usage_path concat \"usage-\" process.pid \".txt\""," let usage_path path_tmp \"usage.txt\""," let output concat \"--output=\" usage_path"," let time arr \"time\" \"--format=%M\" output"," let context node_context"," let args arr time:etc argv:etc cpl.target context:etc args:etc"," let args dedup args"," let o run os_capture args:etc"," if different status 0","  let s concat \"status=\" status","  if not cpl_log_error cpl err","   let s txt_prepend err \"make-error> \"","   log s"," let usage file_load usage_path"," fs_remove usage_path","  let usage split usage","  let usage back usage","  let usage to_uint usage","  let usage mul usage 1024","  let usage byte_size usage","  let o obj usage"]
const relatives=[0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,40,40,40,40,40,40,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,44,44,44,44,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,46,46,46,46,46,46,46,46,46,46,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,49,49,49,49,49,49,49,49,49,49,49,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,54,54,54,54,54,54,54,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,61,61,61,61,61,61,61,62,62,62,62,62,62,63,63,63,63,63,63,63,63,63,63,63,64,64,64,64,64,64,64,64,64,64,64,65,65,65,65,65,65,65,65,65,65,65,66,66,66,66,66,66,66,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,68,68,68,68,68,68,68,68,68,68,69,69,69,69,69,69,70,70,70,70,70,70,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,72,72,72,72,72,72,72,72,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,76,76,76,76,76,76,76,76,76,76,76,76,76,76,77,77,77,77,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,79,79,79,79,79,79,79,79,80,80,80,80,80,80,80,80,81,81,81,81,81,82,82,82,82,82,82,83,83,83,83,83,83,84,84,84,84,84,84,84,84,84,84,85,85,85,85,85,85,85,85,86,86,86,86,86,86,86,86,87,87,87,87,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,90,90,90,90,90,90,90,90,90,90,90,90,90,90,91,91,91,91,92,92,92,92,92,92,92,92,92,92,92,92,92,92,93,93,93,93,93,93,93,93,94,94,94,94,94,94,95,95,95,95,95,95,95,95,95,95,95,95,95,95,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,98,98,98,98,99,99,99,99,99,99,99,99,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,104,104,104,104,104,104,104,104,104,104,104,105,105,105,105,105,105,105,105,105,105,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,108,108,108,108,108,108,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,111,111,111,111,111,111,112,112,112,112,112,112,112,112,112,112,113,113,113,113,113,114,114,114,114,114,114,114,114,115,115,115,115,115,115,115,115,116,116,116,116,117,117,117,117,117,117,117,117,117,117,117,117,117,117,118,118,118,118,118,118,118,118,118,118,118,118,118,118,118,118,118,118,118,118,119,119,119,119,119,119,119,119,119,119,120,120,120,120,120,120,120,120,120,120,120,120,120,120,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,122,122,122,122,122,122,123,123,123,123,123,123,123,123,123,123,123,123,124,124,124,124,124,124,124,124,125,125,125,125,125,125,125,125,126,126,126,126,126,126,126,126,127,127,127,127,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,129,129,129,129,129,129,130,130,130,130,130,130,131,131,131,131,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,135,135,135,135,135,135,135,135,135,135,136,136,136,136,136,136,136,136,137,137,137,137,137,137,137,137,137,137,137,137,137,137,138,138,138,138,138,138,138,138,139,139,139,139,139,139,139,139,139,139,140,140,140,140,140,140,140,140,140,141,141,141,141,141,141,142,142,142,142,142,142,143,143,143,143,143,143,143,143,143,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,146,146,146,146,146,146,146,146,146,146,146,147,147,147,147,147,147,147,147,147,147,147,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,153,153,153,153,154,154,154,154,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,157,157,157,157,157,157,157,157,157,157,158,158,158,158,158,158,158,159,159,159,159,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,161,161,161,161,161,161,162,162,162,162,162,162,162,162,162,162,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,163,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,165,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,167,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,169,169,169,169,169,169,170,170,170,170,170,171,171,171,171,171,171,171,171,171,171,171,171,171,171,172,172,172,172,172,172,172,172,172,172,172,172,172,172,172,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,174,175,175,175,175,175,175,176,176,176,176,176,176,176,176,176,176,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,179,179,179,179,179,179,179,179,180,180,180,180,180,180,181,181,181,181,181,181,182,182,182,182,182,182,183,183,183,183,183,183,184,184,184,184,184,184,184,184,184,184,184,184,184,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,185,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,188,188,188,188,188,188,188,188,189,189,189,189,189,189,189,189,189,189,189,190,190,190,190,190,190,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,191,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,196,196,196,196,196,196,196,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,197,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,206,206,206,206,206,206,206,206,207,207,207,207,207,207,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,209,209,209,209,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,211,211,211,211,211,211,211,211,211,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,216,216,216,216,216,216,216,217,217,217,217,217,217,217,217,217,217,217,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,219,220,220,220,220,221,221,221,221,221,221,221,221,221,221,222,222,222,222,222,222,223,223,223,223,223,223,224,224,224,224,224,224,224,224,224,224,224,224,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,227,227,227,227,227,227,227,227,227,227,227,227,227,227,227,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,229,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,231,232,232,232,232,232,232,232,232,232,232,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,233,234,234,234,234,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,241,241,241,241,241,241,241,241,241,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,244,244,244,244,244,244,244,244,244,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,246,247,247,247,247,247,247,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,248,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,249,250,250,250,250,250,250,251,251,251,251,251,251,252,252,252,252,252,252,252,252,252,252,252,252,252,253,253,253,253,253,253,254,254,254,254,254,254,255,255,255,255,255,255,256,256,256,256,256,256,256,256,256,256,256,256,256,257,257,257,257,257,257,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,259,259,259,259,259,259,259,259,259,259,259,259,259,260,260,260,260,260,260,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,261,262,262,262,262,262,262,263,263,263,263,263,263,264,264,264,264,264,264,265,265,265,265,265,265,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,267,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,268,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,269,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,271,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,272,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,273,274,274,274,274,274,274,274,274,275,275,275,275,275,275,275,275,275,275,275,275,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,277,277,277,277,277,277,277,277,277,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,278,279,279,279,279,279,279,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,281,282,282,282,282,282,282,282,282,282,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,284,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,285,286,286,286,286,286,286,287,287,287,287,287,288,288,288,288,288,288,288,288,288,288,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,291,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,292,293,293,293,293,293,293,293,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,294,295,295,295,295,295,295,295,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,297,297,297,297,297,297,297,297,297,297,297,297,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,299,299,299,299,299,299,299,299,299,299,300,300,300,300,300,300,300,301,301,301,301,301,301,301,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,303,303,303,303,303,303,303,303,303,303,304,304,304,304,304,304,304,304,304,304,305,305,305,305,305,305,305,305,305,305,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,307,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,308,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,309,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,311,311,311,311,311,311,311,311,311,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,312,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,313,314,314,314,314,314,314,314,315,315,315,315,315,315,315,315,315,316,316,316,316,316,316,316,316,316,316,316,316,316,316,316,316,316,316,316,316,316,316,316,316,316,316,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,317,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,318,319,319,319,319,319,319,319,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,321,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,323,323,323,323,323,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,325,325,325,325,325,325,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,327,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,329,330,330,330,330,330,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,331,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,332,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,333,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,336,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,337,338,338,338,338,338,338,339,339,339,339,339,339,340,340,340,340,340,340,340,340,340,340,341,341,341,341,341,341,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,343,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,344,345,345,345,345,345,345,345,345,345,345,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,346,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,347,348,348,348,348,348,348,348,348,348,348,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,349,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,351,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,352,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,353,354,354,354,354,354,354,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,355,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,356,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,357,358,358,358,358,359,359,359,359,359,359,359,359,359,360,360,360,360,360,361,361,361,361,361,361,361,361,361,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,363,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,364,365,365,365,365,365,365,365,365,365,365,365,365,366,366,366,366,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,367,368,368,368,368,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,369,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,371,371,371,371,371,371,371,371,372,372,372,372,372,372,372,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,373,374,374,374,374,374,374,374,374,374,374,374,374,374,374,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,376,377,377,377,377,377,377,377,377,378,378,378,378,378,378,379,379,379,379,379,379,379,379,379,379,379,379,379,379,380,380,380,380,380,380,380,380,380,380,380,380,380,380,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,381,382,382,382,382,382,382,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,383,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,385,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,387,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,388,389,389,389,389,389,389,389,389,389,389,389,390,390,390,390,390,390,390,390,391,391,391,391,391,391,391,391,391,391,391,392,392,392,392,392,392,392,393,393,393,393,393,394,394,394,394,394,394,395,395,395,395,395,395,395,395,395,395,395,395,395,395,395,396,396,396,396,396,396,396,396,396,396,396,396,396,397,397,397,397,397,397,397,398,398,398,398,398,398,398,399,399,399,399,400,400,400,400,400,400,400,401,401,401,401,401,401,401,402,402,402,402,402,402,402,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,403,404,404,404,404,404,404,404,405,405,405,405,405,406,406,406,406,406,406,406,406,406,406,406,406,406,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,407,408,408,408,408,408,408,408,408,408,408,408,408,409,409,409,409,409,409,409,410,410,410,410,410,410,410,411,411,411,411,411,411,411,412,412,412,412,412,412,412,413,413,413,413,413,413,413,414,414,414,414,415,415,415,415,415,415,415,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,416,417,417,417,417,418,418,418,418,418,418,418,418,418,418,418,418,419,419,419,419,419,419,419,419,419,419,419,420,420,420,420,420,420,420,421,421,421,421,421,421,421,421,422,422,422,422,422,422,422,422,422,422,422,422,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,424,424,424,424,424,425,425,425,425,425,425,425,425,426,426,426,426,426,427,427,427,427,427,427,427,427,427,427,427,428,428,428,428,428,429,429,429,429,429,429,429,429,429,429,429,429,429,430,430,430,430,430,430,430,431,431,431,431,431,431,431,431,431,432,432,432,432,432,432,432,432,432,432,433,433,433,433,433,433,433,433,433,433,433,433,433,433,434,434,434,434,434,434,434,434,434,434,434,434,434,434,435,435,435,435,435,435,435,435,435,435,435,435,435,435,435,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,438,438,438,438,438,438,438,438,438,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,439,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,440,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,441,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,442,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,443,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,446,446,446,446,446,446,446,446,446,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,447,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,448,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,449,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,452,452,452,452,452,452,452,452,452,452,452,452,452,452,452,453,453,453,453,453,453,453,453,453,453,453,453,453,453,453,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,454,455,455,455,455,455,455,455,455,455,455,455,455,455,455,455,455,455,455,455,455,455,455,455,455,455,455,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,457,457,457,457,457,457,457,457,457,457,457,457,457,457,457,457,457,457,457,457,457,457,457,457,457,457,457,457,457,457,457,457,457,457,457,457,458,458,458,458,458,458,458,458,458,459,459,459,459,459,459,459,459,459,460,460,460,460,460,460,460,460,460,461,461,461,461,461,461,461,461,461,461,461,461,461,461,461,461,461,461,461,461,461,461,461,461,461,461,461,461,461,461,461,461,461,461,461,461,461,461,461,461,461,461,461,461,461,461,461,461,461,461,461,461,461,461,461,461,461,461,461,462,462,462,462,462,462,462,462,462,463,463,463,463,463,463,463,463,463,464,464,464,464,464,464,464,464,464,465,465,465,465,465,465,465,465,465,465,465,465,465,465,465,465,465,465,465,465,465,465,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,467,467,467,467,467,467,467,467,467,467,467,468,468,468,468,468,468,468,468,468,468,468,468,468,468,468,468,468,468,468,468,468,468,468,468,468,468,468,468,468,468,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,469,470,470,470,470,470,470,470,470,470,470,470,470,470,470,470,470,470,470,470,470,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,471,472,472,472,472,472,472,472,472,472,472,472,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,473,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,475,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,477,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,478,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,479,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,481,481,481,481,481,481,481,481,481,481,481,481,481,481,481,481,481,481,481,481,481,481,481,481,481,481,481,481,481,481,481,481,481,481,481,481,481,481,481,481,481,481,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,482,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,483,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,485,486,486,486,486,486,486,486,486,486,486,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,487,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,488,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,491,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,493,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,494,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,495,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,497,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,498,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,499,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,501,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,502,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,503,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,504,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,506,506,506,506,506,506,506,506,506,506,506,506,506,506,506,506,506,506,506,506,506,506,507,507,507,507,507,507,507,507,507,507,507,507,507,507,507,507,507,507,507,507,507,507,507,507,507,507,507,507,507,508,508,508,508,508,508,508,508,508,508,509,509,509,509,509,509,509,509,509,510,510,510,510,510,510,510,511,511,511,511,511,511,511,511,511,512,512,512,512,512,512,512,512,512,512,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,513,514,514,514,514,514,514,514,514,514,514,514,515,515,515,515,515,515,515,515,515,515,516,516,516,516,516,516,516,516,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,517,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518,518]
const indices=[0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,3,5,6,8,1,1,0,0,0,0,0,1,2,4,5,7,7,7,7,8,8,8,8,10,11,13,8,8,7,7,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,5,5,5,5,7,9,9,9,9,10,10,10,10,11,11,11,11,13,14,16,16,16,16,18,16,16,11,11,10,10,9,9,5,5,4,21,2,2,1,1,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,6,6,5,5,4,4,3,3,3,3,3,11,3,3,3,1,1,0,0,0,0,0,0,0,1,3,4,6,7,9,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,2,2,2,4,2,1,7,7,8,8,8,8,9,9,9,9,10,10,10,12,10,9,9,8,8,7,15,15,16,16,16,16,17,17,17,17,18,18,18,20,18,17,17,16,16,15,23,23,24,24,24,24,25,25,25,25,26,26,26,28,26,25,25,24,24,23,31,31,31,31,32,32,32,32,33,33,33,35,33,32,32,31,31,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,5,3,2,2,1,1,0,0,0,1,1,1,1,3,4,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,15,13,12,12,11,11,10,10,9,9,8,8,7,7,6,6,1,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,0,0,1,1,2,3,1,4,4,5,5,5,5,7,8,10,10,10,10,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,23,21,20,20,19,19,18,18,17,17,16,16,15,15,14,14,13,13,12,24,24,25,25,25,25,26,26,26,26,27,27,27,27,28,28,28,28,29,29,29,29,30,30,30,32,30,29,29,28,28,27,27,26,26,25,25,24,33,33,34,34,34,34,35,35,35,35,36,36,36,38,36,35,35,34,34,33,10,10,5,5,4,42,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,2,6,6,6,6,8,8,9,10,12,12,13,13,13,13,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,16,16,17,19,16,22,22,22,24,22,15,15,15,15,15,27,15,15,15,13,13,12,28,28,29,29,29,29,31,31,31,31,32,32,32,32,34,34,35,37,34,40,40,40,42,40,32,32,31,45,31,29,29,28,46,47,8,52,6,6,0,0,0,0,0,0,1,2,6,6,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,13,14,11,11,10,10,9,9,8,17,8,7,6,23,23,24,24,25,25,25,25,26,26,26,26,28,28,28,28,29,29,29,29,31,31,31,31,32,32,32,32,33,33,33,33,34,34,34,34,36,37,39,39,39,39,40,40,40,40,41,41,41,41,43,44,41,41,40,40,39,39,34,34,33,33,32,32,31,47,31,29,29,28,28,26,26,25,25,24,23,53,54,56,57,59,0,2,2,2,2,5,5,6,7,9,10,12,13,15,16,18,5,23,23,23,23,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,27,29,26,32,32,32,32,33,33,33,33,34,34,34,34,36,36,36,37,37,37,38,38,39,41,38,44,44,44,44,46,47,44,44,34,34,33,33,32,32,25,25,25,25,25,50,25,25,25,23,23,2,0,0,1,0,0,0,0,0,1,2,4,4,5,7,8,10,4,11,12,13,13,14,14,14,14,15,15,15,15,17,18,15,15,14,21,14,13,22,23,0,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,5,4,3,3,3,3,3,8,3,3,3,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,8,6,6,5,5,5,5,5,5,5,5,4,4,4,4,4,12,4,4,4,2,2,1,1,0,0,0,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,8,8,9,9,9,9,11,12,13,14,15,16,9,9,8,19,19,19,19,20,20,20,22,20,19,19,6,6,5,5,4,4,0,0,0,0,0,0,1,2,4,5,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,12,12,13,13,13,13,15,16,17,18,19,20,13,13,12,23,23,23,23,24,24,24,26,24,23,23,10,10,9,9,8,8,7,7,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,6,4,3,3,2,2,1,1,0,0,0,1,1,2,2,2,4,2,1,7,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,18,16,15,15,14,14,13,13,12,12,11,11,10,10,9,9,0,0,0,1,1,2,2,2,4,2,1,7,9,9,10,10,10,12,10,9,15,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,24,25,23,28,28,28,28,29,29,29,29,30,30,30,30,31,31,31,31,33,34,36,36,36,36,38,38,39,38,41,42,44,44,44,44,45,45,45,45,47,48,50,50,50,50,51,51,51,51,52,52,52,52,54,55,57,57,57,57,59,60,62,62,62,62,63,63,63,63,64,64,64,64,65,65,65,65,66,66,66,66,67,67,67,69,67,66,66,65,65,64,64,63,63,62,62,57,57,52,52,51,51,50,50,45,45,44,44,36,36,31,31,30,30,29,29,28,28,22,22,22,22,22,72,22,22,22,20,20,19,19,18,18,17,17,0,0,0,1,1,2,2,2,4,2,1,7,9,9,10,10,10,12,10,9,15,17,17,17,17,19,19,20,20,20,20,21,21,21,21,23,23,23,24,24,24,25,25,25,26,26,26,27,27,27,28,29,31,21,21,20,20,19,34,17,17,0,0,0,0,1,1,1,1,3,4,6,6,6,8,6,1,1,0,0,0,1,1,2,2,2,4,2,1,7,8,10,10,11,11,11,13,11,10,16,18,18,18,18,19,19,19,19,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,23,23,23,23,25,25,26,26,26,26,27,27,27,27,29,30,27,27,26,26,25,32,32,33,33,33,33,35,36,33,33,32,37,38,40,40,40,40,41,41,41,41,42,42,42,42,43,43,43,43,44,44,44,44,46,47,44,44,43,43,42,42,41,41,40,40,23,23,22,22,21,21,21,21,21,21,21,21,19,19,18,18,0,0,0,0,0,0,1,2,4,6,7,9,13,13,13,13,13,13,13,13,14,14,14,14,15,15,15,15,17,17,18,19,21,22,24,24,24,24,26,27,24,24,17,30,15,15,14,14,13,35,35,35,35,35,35,35,36,36,36,36,37,37,37,37,39,39,39,39,40,40,40,40,41,41,41,41,43,43,43,43,45,45,45,45,47,47,48,47,49,49,50,51,53,53,54,53,49,57,57,57,57,58,58,58,58,59,59,59,59,61,61,62,61,64,64,64,64,65,65,65,65,67,68,69,69,70,72,69,75,75,75,77,75,65,65,64,64,59,59,58,58,57,57,80,80,80,80,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,83,82,82,82,82,82,86,86,86,86,88,88,88,88,89,89,89,89,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,92,92,92,92,94,92,92,91,91,91,91,91,91,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,97,98,99,101,97,97,97,97,97,104,97,97,97,91,91,91,91,89,89,88,88,86,86,82,82,82,82,80,80,57,57,45,45,43,43,41,41,40,40,39,39,37,37,36,36,35,109,109,109,109,109,109,109,110,110,110,112,110,109,117,117,117,117,118,118,118,118,120,120,120,120,122,122,122,122,123,123,123,123,125,125,126,127,125,129,129,129,129,130,130,130,130,132,132,132,132,133,133,133,133,134,134,134,134,135,135,135,137,135,134,134,133,133,132,132,130,130,129,129,123,123,122,122,120,120,118,118,117,142,142,142,142,143,143,143,143,143,143,143,143,143,143,143,143,143,143,143,143,144,145,143,143,143,143,143,148,143,143,143,142,153,153,153,153,155,156,158,153,153,0,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,7,5,4,4,4,4,4,4,10,10,10,10,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,19,19,19,21,19,18,18,18,18,18,24,18,18,18,16,16,15,15,14,14,13,13,12,12,27,27,27,27,29,29,29,30,30,33,33,33,34,33,30,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,39,40,42,42,42,42,43,43,43,43,44,44,44,44,46,46,46,47,47,48,47,50,50,50,50,51,51,51,51,52,52,52,52,53,53,53,55,53,52,52,51,51,50,50,44,44,43,43,42,42,38,38,38,38,38,38,58,58,58,58,60,60,61,60,63,58,58,38,38,38,38,27,27,12,12,10,10,4,4,4,4,2,2,1,1,0,0,0,3,3,3,4,5,8,10,10,10,10,14,14,14,14,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,17,17,17,17,19,20,22,17,17,16,16,16,16,16,16,27,27,28,28,28,28,29,29,29,29,31,31,31,32,32,32,33,34,36,29,29,28,28,27,41,41,41,43,41,16,16,16,16,14,14,10,10,3,48,48,48,48,50,50,51,50,52,52,53,52,55,55,55,55,56,56,56,56,60,60,61,61,61,61,63,64,61,61,60,67,67,67,69,67,56,56,55,55,48,48,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,5,3,3,3,3,3,9,3,3,3,1,1,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,10,6,6,5,5,4,4,3,3,3,3,3,3,13,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,23,21,20,20,19,19,18,18,17,28,29,30,31,32,33,37,3,3,3,3,0,0,0,0,0,1,2,4,6,6,6,6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,11,11,12,14,11,17,17,17,17,18,18,18,18,20,20,21,22,20,23,24,18,18,17,17,9,9,8,8,8,8,8,27,8,8,8,6,6,0,0,0,1,0,0,0,0,0,0,1,3,3,3,3,5,6,8,3,3,0,0,0,0,0,1,2,4,5,7,0,0,0,1,2,4,4,4,4,6,8,8,8,8,10,10,11,11,11,13,11,10,14,15,8,8,4,4,0,0,0,0,0,1,2,3,3,4,4,4,4,6,8,4,4,3,9,10,0,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,3,1,1,1,1,1,6,1,1,1,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,3,3,3,3,7,3,3,3,1,1,0,0,0,0,0,0,1,1,1,1,2,2,2,2,4,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,8,7,9,10,6,6,6,6,6,13,6,6,6,2,2,1,1,0,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,5,4,6,6,7,6,10,10,10,10,11,11,11,11,12,12,12,12,14,16,17,19,21,21,21,21,22,22,22,22,23,23,23,25,23,22,22,21,21,12,12,11,11,10,10,2,2,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,2,4,5,6,6,7,7,7,7,8,8,8,8,10,11,8,8,7,14,7,6,15,16,0,0,0,0,0,1,1,1,1,2,2,2,2,4,5,6,2,2,1,1,0,0,0,1,1,1,1,3,3,4,4,4,4,6,8,4,4,3,11,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,21,19,18,18,17,17,16,16,15,15,14,14,13,13,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,3,3,3,3,5,6,8,8,8,10,8,3,3,2,2,1,1,1,1,1,13,1,1,1,0,0,0,0,0,1,1,1,1,3,3,3,3,4,5,7,7,7,9,7,3,12,3,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,5,5,5,6,6,6,6,7,7,7,9,7,6,6,5,12,5,3,3,2,2,1,1,0,0,0,0,0,1,3,0,0,0,1,2,4,0,0,0,0,0,0,1,2,4,5,7,0,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,2,3,4,5,6,7,1,10,0,0,0,0,0,0,0,1,2,4,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,3,3,3,6,6,6,6,7,7,7,7,9,10,14,14,15,17,14,22,7,7,6,6,3,27,27,27,28,28,28,28,29,29,29,29,30,30,30,30,31,31,31,31,32,32,32,34,32,31,31,30,30,29,29,28,28,27,41,43,44,45,46,47,51,51,51,51,53,53,54,53,55,56,57,58,60,64,64,64,64,66,66,66,66,67,68,70,70,71,71,71,73,71,70,66,66,79,80,82,82,85,89,89,90,92,89,82,94,97,102,66,66,64,64,51,51,0,0,0,0,0,0,1,3,0,0,0,1,2,4,5,7,7,7,7,9,10,12,7,7,0,0,0,1,2,4,5,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,10,10,10,11,11,11,12,12,12,13,14,7,7,7,7,7,17,7,7,7,0,0,0,1,2,4,5,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,9,9,9,10,11,7,7,7,7,7,14,7,7,7,0,0,0,1,2,4,5,7,8,10,11,13,14,16,0,0,0,1,0,0,0,1,2,4,5,7,8,10,11,13,14,16,17,19,0,0,0,1,2,4,5,7,0,0,0,1,1,1,3,1,0,0,0,0,1,0,0,0,1,2,4,0,0,0,1,2,4,0,0,0,1,2,4,5,7,8,10,0,0,0,1,2,4,5,7,0,0,0,1,2,4,5,7,0,0,0,1,0,0,0,1,2,4,5,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,9,7,7,7,7,7,12,7,7,7,0,0,0,1,2,4,5,7,7,7,7,9,10,14,14,14,14,16,17,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,23,23,23,24,25,21,21,21,21,21,28,21,21,21,14,14,7,7,0,0,0,3,4,8,8,9,9,9,11,9,8,16,0,0,0,1,0,0,0,1,1,1,1,3,4,6,7,9,1,1,0,0,0,1,2,4,5,7,0,0,0,1,2,4,0,0,0,1,1,1,1,3,4,6,7,9,1,1,0,0,0,1,2,4,5,7,7,7,7,9,9,9,10,10,10,11,12,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,16,14,14,14,14,14,19,14,14,14,7,7,0,0,0,1,2,4,5,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,9,11,11,11,11,13,14,11,11,7,7,7,7,7,17,7,7,7,0,0,0,1,0,0,0,1,2,4,5,7,0,0,0,1,2,4,4,4,4,6,7,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10,11,13,13,13,13,15,16,13,13,9,9,9,9,9,19,9,9,9,4,4,0,0,0,1,2,4,4,4,4,6,7,9,10,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,14,16,17,19,20,22,23,12,12,12,12,12,26,12,12,12,4,4,0,0,0,1,2,4,5,7,7,8,7,9,9,10,9,13,0,0,0,1,2,4,5,7,8,10,11,13,14,16,17,19,20,22,23,25,26,28,0,0,0,0,0,0,1,1,1,3,1,0,0,0,1,2,4,4,4,6,4,0,0,0,1,2,4,5,7,8,10,10,10,10,11,11,11,11,13,14,16,16,16,18,16,11,11,10,10,0,0,0,1,2,4,5,7,7,7,7,9,10,12,12,12,14,12,7,7,0,0,0,1,2,4,0,0,0,1,2,4,5,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,9,7,7,7,7,7,12,7,7,7,0,0,0,1,2,4,4,4,4,6,7,9,9,9,9,10,10,10,10,12,13,15,16,18,10,10,9,9,4,4,0,0,0,1,2,4,0,0,0,1,2,4,5,7,8,10,0,0,0,0,1,0,0,0,1,2,4,5,7,0,0,0,1,2,4,5,7,0,0,0,1,0,0,0,1,2,4,5,7,8,10,10,10,12,10,0,0,0,1,2,4,5,7,7,7,7,9,10,12,12,12,14,12,7,7,0,0,0,1,2,4,4,4,6,4,0,0,0,3,4,8,8,9,9,9,11,9,8,16,0,0,0,1,2,4,5,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,9,7,7,7,7,7,12,7,7,7,0,0,0,1,2,4,0,0,0,1,2,4,5,7,7,7,9,7,0,0,0,1,1,1,3,1,0,0,0,1,2,4,5,7,0,0,0,1,2,4,5,7,0,0,0,1,0,0,0,1,2,4,5,7,7,7,7,9,10,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,14,16,12,12,12,12,12,19,12,12,12,7,7,0,0,0,1,2,4,0,0,0,1,2,4,0,0,0,1,0,0,0,1,2,4,5,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,9,7,7,7,7,7,12,7,7,7,0,0,0,1,2,4,4,4,4,6,6,6,7,7,7,8,9,11,11,12,11,13,13,14,13,17,4,4,0,0,0,1,2,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,9,7,7,7,7,7,7,7,7,6,6,6,6,6,13,6,6,6,0,0,0,1,2,4,4,4,6,4,0,0,0,1,2,4,5,7,0,0,0,1,2,4,5,7,8,10,11,13,14,16,0,0,0,1,2,4,5,7,0,0,0,1,2,4,5,7,8,10,0,0,0,0,0,1,2,4,6,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,2,4,1,7,0,0,0,3,3,3,3,4,4,4,4,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,8,10,7,13,13,14,16,13,21,21,21,23,21,6,6,6,6,6,26,6,6,6,4,4,3,33,33,33,33,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,36,36,37,37,37,37,39,41,37,37,36,44,44,44,46,44,35,35,35,35,35,35,49,49,49,49,50,50,50,50,51,51,51,51,52,52,52,52,53,53,53,53,54,54,54,54,55,55,55,55,56,56,56,56,57,57,57,57,58,58,58,58,60,60,61,61,61,63,61,60,64,64,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,66,66,66,68,66,65,65,65,65,65,65,65,65,64,74,74,74,74,75,75,75,75,77,77,78,78,78,78,80,81,83,78,78,77,86,86,86,86,87,87,87,87,89,89,90,92,89,97,97,97,97,98,98,98,98,99,99,99,99,100,100,100,100,102,103,105,105,105,105,106,106,106,108,106,105,105,100,100,99,99,98,98,97,97,87,87,86,86,75,75,74,74,58,58,57,57,56,56,55,55,54,54,53,53,52,52,51,51,50,50,49,49,35,35,35,35,33,33,0,0,0,3,3,6,6,6,6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,10,12,9,15,15,15,17,15,8,8,8,8,8,8,20,20,20,20,22,23,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,27,27,27,29,27,26,26,25,25,25,25,25,25,25,25,24,33,34,20,20,8,8,8,8,6,6,3,40,40,41,41,41,41,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,44,44,45,46,44,49,49,49,51,49,43,43,43,43,43,43,54,54,54,54,55,55,55,55,56,56,56,56,58,60,56,56,55,55,54,54,43,43,43,43,41,41,40,65,66,67,67,68,69,70,71,67,72,73,0,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,1,1,3,1,0,0,0,0,3,3,3,3,4,4,5,7,4,3,15,15,15,15,17,17,18,17,19,19,20,19,23,23,24,25,23,26,26,27,26,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,56,57,58,58,59,58,60,61,15,15,0,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,6,8,4,4,3,3,3,3,3,11,3,3,3,1,1,0,0,0,0,0,0,1,2,4,5,7,8,10,10,10,12,10,0,0,0,0,0,0,1,2,4,5,7,8,10,10,10,12,10,0,0,0,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,9,7,6,6,5,5,4,4,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,3,3,3,3,5,6,8,3,3,0,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,2,3,3,4,4,4,6,4,3,7,8,0,0,0,0,0,1,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,2,4,5,6,6,7,7,7,7,9,9,9,9,10,10,10,10,12,13,10,10,9,9,7,7,6,0,0,0,0,0,1,1,1,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,8,9,8,11,11,12,12,13,12,11,14,14,15,15,16,15,18,14,21,21,21,23,21,6,6,5,5,4,4,3,26,3,1,1,0,0,0,0,0,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,8,6,5,5,5,5,5,5,13,13,13,13,14,14,14,14,16,17,19,14,14,13,22,13,5,5,5,5,1,1,0,0,0,0,0,0,0,1,1,1,1,3,3,3,3,4,5,7,7,7,9,7,3,3,12,14,3,3,1,1,0,0,0,0,0,0,1,1,1,1,3,3,3,3,4,5,7,7,7,9,7,3,12,3,1,1,0,0,0,0,0,0,0,1,1,1,1,3,5,5,5,5,6,7,9,9,9,11,9,5,14,5,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,3,3,4,5,7,3,12,13,15,0,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,1,1,2,2,2,2,4,4,5,6,8,4,11,2,2,1,14,15,16,18,0,0,0,0,0,1,1,2,2,2,2,4,4,5,6,8,4,11,2,2,1,14,15,16,18,0,0,0,0,0,1,0,0,0,0,0,1,1,2,1,5,0,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,6,7,9,4,4,2,2,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,4,5,7,9,2,2,1,1,0,0,0,0,0,1,2,4,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,3,5,1,1,0,0,0,0,0,1,2,4,5,7,7,7,7,9,9,10,10,10,10,12,14,10,10,9,17,7,7,0,0,0,0,0,0,1,1,1,1,3,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,5,5,5,5,5,5,5,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,10,12,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,0,1,2,4,0,0,0,0,0,0,1,2,4,5,7,0,0,0,0,0,1,0,0,0,0,0,1,2,4,6,6,6,6,7,7,7,7,9,9,10,10,10,10,11,11,11,11,13,13,14,15,13,16,17,11,11,10,10,9,20,7,7,6,6,0,0,0,1,2,4,5,7,7,7,7,8,8,8,8,10,11,13,8,8,7,7,0,0,0,0,0,1,5,7,7,7,7,9,9,10,9,11,11,12,14,11,17,17,17,17,19,21,21,21,21,23,24,26,21,21,17,17,7,7,0,0,0,0,0,0,1,2,4,4,4,4,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,8,10,6,6,6,6,6,13,6,6,6,4,4,0,0,0,0,0,0,1,2,4,5,7,7,7,7,9,11,7,7,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,3,3,4,3,7,1,1,0,0,0,0,0,0,0,1,1,2,2,2,4,2,1,5,5,6,6,6,6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,10,11,12,8,8,8,8,8,15,8,8,8,6,6,5,16,17,0,0,0,0,0,1,2,4,4,4,4,6,6,7,6,9,9,9,9,10,10,10,10,12,12,12,12,14,14,14,14,16,17,19,19,19,19,21,22,23,24,26,26,26,28,26,19,19,14,14,12,12,10,10,9,9,4,4,0,0,0,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,8,6,5,5,4,4,3,3,2,2,1,11,13,14,16,16,17,17,17,19,17,16,22,26,26,26,27,27,27,27,28,28,28,28,30,30,31,31,31,31,32,32,32,32,34,34,35,34,32,32,31,31,30,38,38,38,38,39,39,39,39,40,40,40,40,41,41,41,41,42,42,42,42,43,43,43,43,44,44,44,46,44,43,43,42,42,41,41,40,40,39,39,38,38,28,28,27,27,26,51,51,51,52,52,52,52,53,53,53,53,54,54,54,54,56,56,57,56,58,58,59,58,61,61,61,61,62,62,62,62,63,63,63,63,64,64,64,64,65,65,65,65,66,66,66,68,66,65,65,64,64,63,63,62,62,61,61,54,54,53,53,52,52,51,73,73,73,74,75,77,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,80,79,79,79,79,79,79,79,73,86,86,86,86,86,87,87,87,87,89,90,92,93,95,95,95,95,96,96,96,96,98,99,96,96,95,95,87,87,86,104,104,104,104,105,105,105,105,106,106,106,106,107,107,107,107,108,108,108,108,109,109,109,109,111,111,112,111,113,113,114,114,114,114,116,114,114,113,119,121,121,121,122,122,122,123,124,126,127,128,128,129,129,129,129,131,131,131,132,132,132,133,133,133,134,134,135,135,135,137,135,134,140,140,140,142,140,129,129,128,143,144,146,146,146,146,147,147,147,147,148,148,148,148,149,149,149,149,150,150,150,150,152,152,152,152,154,154,155,157,154,160,160,161,163,160,166,166,167,166,169,169,170,169,172,172,173,172,175,175,176,176,177,176,175,179,180,182,182,182,184,182,152,152,150,150,149,149,148,148,147,147,146,146,109,109,108,108,107,107,106,106,105,105,104,104,0,0,0,0,0,1,1,1,1,3,5,6,8,9,11,12,14,15,17,18,20,20,21,22,20,25,25,25,27,25,1,1,0,0,0,0,0,1,2,6,6,6,7,7,7,9,7,6,14,14,14,14,15,15,15,15,17,19,19,20,21,19,24,24,25,26,24,29,29,30,31,29,34,34,35,36,34,39,39,40,41,39,44,44,45,46,44,49,49,50,51,49,54,15,15,14,14,0,0,0,0,0,3,3,3,3,4,5,7,3,12,12,12,12,13,13,13,13,14,14,14,16,14,13,13,12,12,0,0,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,5,7,7,7,7,8,9,7,12,12,13,15,16,12,19,19,19,19,21,23,24,27,28,30,19,19,5,5,4,4,3,3,0,0,0,0,0,1,1,2,2,2,2,4,6,6,6,8,6,2,2,1,9,10,11,12,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,8,8,9,9,10,10,10,12,10,9,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,22,20,20,19,19,18,18,17,17,16,16,15,15,8,25,6,6,5,5,4,4,0,0,0,1,0,0,0,0,0,1,2,4,6,7,9,13,13,13,13,13,14,14,14,14,15,15,15,15,17,17,18,18,18,18,20,20,21,21,21,21,23,24,21,21,20,25,25,26,26,26,28,26,25,18,18,17,32,15,15,14,14,13,37,37,37,37,37,38,39,41,41,41,41,43,43,44,44,44,44,46,47,49,44,44,43,52,41,41,37,57,57,57,59,57,0,0,0,0,0,0,1,2,4,0,0,0,0,0,1,2,4,5,7,7,8,8,8,8,10,12,8,8,7,15,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,5,5,5,5,6,6,6,6,8,9,6,6,5,5,4,12,2,2,1,1,0,0,0,0,0,1,1,1,1,3,5,5,5,5,7,7,8,7,9,9,10,12,9,15,17,5,5,1,1,0,0,0,0,0,1,3,3,3,3,5,5,6,6,6,6,7,7,7,7,9,10,12,7,7,6,6,5,3,3,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,3,3,4,4,4,6,4,3,9,10,11,13,13,13,13,15,17,17,17,17,19,21,17,17,13,13,0,0,0,0,0,1,1,4,5,6,6,7,9,6,1,11,11,14,14,14,14,14,15,14,18,19,21,23,23,23,23,24,24,24,24,26,26,26,26,27,27,27,27,28,28,28,28,29,29,29,31,29,28,28,27,27,26,26,34,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,37,37,37,39,37,36,36,36,36,36,42,36,36,36,26,26,24,24,23,23,11,43,44,0,0,0,1,0,0,0,0,0,1,2,4,5,7,0,0,0,0,0,1,0,0,0,1,2,4,0,0,0,0,0,1,2,4,4,4,6,4,0,0,0,0,0,0,2,2,3,3,3,5,3,2,8,0,0,0,0,0,0,1,1,2,2,2,4,2,1,7,0,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,0,1,1,2,3,4,5,6,7,1,10,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,6,4,3,3,2,2,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,5,3,2,2,1,1,0,0,0,0,0,0,1,2,4,4,4,4,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,9,7,6,6,6,6,6,12,6,6,6,4,4,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,1,1,1,3,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,7,7,7,9,7,6,6,5,5,5,5,5,5,5,5,1,1,0,0,0,1,0,0,0,0,0,0,1,1,2,2,2,2,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,7,7,8,7,10,5,5,4,4,4,4,4,13,4,4,4,2,2,1,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,20,18,17,17,16,16,16,16,16,16,16,16,0,0,0,0,0,0,1,1,1,1,3,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,8,6,5,5,5,5,5,5,5,5,1,1,0,0,0,0,0,0,0,1,1,1,1,3,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,7,7,7,7,9,9,9,9,10,10,10,10,12,12,13,14,12,17,10,10,9,20,9,7,7,6,6,5,5,5,5,5,5,5,5,1,1,0,0,0,0,0,3,3,3,3,4,4,4,4,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,9,9,9,9,10,10,10,10,12,13,15,15,15,17,15,10,10,9,20,9,7,7,6,6,6,6,6,23,6,6,6,4,4,3,28,28,28,28,29,29,29,29,31,31,31,31,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,34,33,33,33,33,33,33,37,37,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,41,41,41,43,41,40,40,40,40,40,40,40,40,37,45,45,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,49,49,49,51,49,48,48,48,48,48,48,48,48,45,55,33,33,33,33,31,31,29,29,28,60,60,61,62,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,67,68,72,73,64,64,64,64,64,76,64,64,64,60,83,83,83,83,84,84,84,84,85,85,85,85,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,88,88,88,88,89,89,89,89,91,93,93,93,95,93,89,89,88,88,87,87,87,87,87,87,100,100,100,100,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,102,103,103,103,103,104,104,104,104,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,107,106,106,106,106,106,106,110,106,106,106,106,104,104,103,103,102,102,102,102,102,102,115,116,118,118,118,118,119,119,119,119,121,123,123,123,123,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,126,126,126,128,126,125,125,125,125,125,125,133,133,133,133,135,136,138,138,138,138,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,141,141,141,141,142,142,142,142,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,144,145,145,145,147,145,144,144,144,144,144,144,150,150,150,152,150,144,144,144,144,142,142,141,141,140,140,140,140,140,140,155,157,140,140,140,140,138,138,133,133,125,125,125,125,123,123,119,119,118,118,102,102,102,102,100,100,87,87,87,87,85,85,84,84,83,83,0,0,0,0,0,0,1,2,6,6,6,6,6,7,7,7,7,8,8,8,10,8,7,7,6,15,0,0,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,9,10,10,10,12,10,9,15,15,16,16,16,18,16,15,21,21,22,22,22,22,23,23,23,25,23,22,22,21,28,28,29,29,29,29,30,30,30,32,30,29,29,28,35,35,36,36,36,36,37,37,37,39,37,36,36,35,42,42,43,43,43,43,44,44,44,46,44,43,43,42,49,49,49,49,50,50,50,52,50,49,49,7,7,6,6,5,5,4,4,3,3,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,1,1,1,3,4,6,6,7,7,7,7,8,8,8,10,8,7,7,6,13,13,13,13,14,14,14,16,14,13,13,1,1,0,0,0,0,0,1,2,4,6,6,6,6,7,7,7,9,7,6,6,0,0,0,0,1,1,1,3,1,0,0,0,1,1,2,2,2,4,2,1,7,8,10,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,20,21,23,23,23,23,24,24,24,26,24,23,23,18,18,17,17,16,16,15,15,14,14,13,13,12,12,0,0,0,0,0,1,2,4,6,6,6,6,7,7,7,9,7,6,6,0,0,0,0,0,1,0,0,0,1,2,4,4,4,4,6,6,7,8,10,10,10,10,12,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,16,16,16,16,18,18,19,19,19,21,19,18,22,22,23,23,23,23,24,24,24,24,26,27,24,24,23,23,22,16,16,15,15,14,14,14,14,14,14,31,33,14,14,14,14,10,10,6,34,34,35,36,38,38,38,38,40,42,42,42,42,43,43,43,43,44,44,44,44,45,45,45,45,47,47,48,47,50,50,51,51,51,53,51,50,54,54,55,55,55,55,56,56,56,56,58,59,56,56,55,55,54,45,45,44,44,43,43,42,42,63,65,42,42,38,38,34,66,67,68,69,70,71,4,4,0,0,0,0,0,1,2,4,8,8,8,8,9,9,9,9,11,12,16,16,16,16,17,17,17,17,18,18,18,18,20,20,21,21,21,21,23,24,26,21,21,20,29,30,34,36,18,18,17,17,16,16,9,9,8,8,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,3,5,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,3,5,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,8,6,5,5,4,4,3,11,3,1,1,0,0,0,0,0,1,1,1,1,3,5,1,1,0,0,0,0,0,1,0,0,0,1,1,2,2,2,2,4,4,5,5,5,5,7,7,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,8,8,8,8,12,8,8,8,7,5,5,4,2,2,1,17,18,19,19,20,20,20,20,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,24,24,24,26,24,23,27,28,22,22,22,22,22,22,31,31,31,31,33,35,36,31,31,22,22,22,22,20,20,19,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,2,3,5,5,5,5,7,9,5,5,1,10,11,12,13,0,0,0,1,1,2,2,2,2,3,3,3,5,3,2,2,1,8,12,12,12,12,13,13,13,13,14,14,14,14,16,16,17,17,17,17,18,18,18,18,20,21,22,23,18,18,17,17,16,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,30,31,29,34,34,35,36,34,41,41,41,41,43,44,46,41,41,28,28,28,28,28,49,28,28,28,26,26,14,14,13,13,12,12,0,0,0,1,1,2,4,4,4,4,5,5,5,7,5,4,4,1,10,11,13,13,13,13,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,16,16,16,18,16,15,15,15,15,15,21,15,15,15,13,13,0,0,0,1,2,4,6,6,7,7,7,7,8,8,8,10,8,7,7,6,13,15,15,15,15,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,18,18,18,18,20,21,22,22,23,23,23,23,24,24,24,26,24,23,23,22,18,18,17,17,17,17,17,30,17,17,17,15,15,0,0,0,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,7,5,4,4,3,3,2,2,1,10,12,12,12,12,13,13,13,15,13,12,12,0,0,0,1,1,2,4,4,4,4,5,5,5,7,5,4,4,1,10,11,13,13,13,13,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,16,16,16,18,16,15,15,15,15,15,21,15,15,15,13,13,0,0,0,1,1,2,2,2,2,3,3,3,5,3,2,2,1,8,10,10,10,10,12,12,13,13,13,13,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,16,16,17,19,16,22,22,22,24,22,15,15,15,15,15,15,27,15,15,15,15,13,13,12,30,10,10,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,22,22,22,22,23,23,23,23,24,24,24,24,25,25,25,25,26,26,26,26,27,27,27,27,28,28,28,28,29,29,29,29,30,30,30,30,31,31,31,31,32,32,32,32,33,33,33,33,34,34,34,34,35,35,35,35,36,36,36,38,36,35,35,34,34,33,33,32,32,31,31,30,30,29,29,28,28,27,27,26,26,25,25,24,24,23,23,22,22,21,21,20,20,19,19,18,18,17,17,16,16,15,15,14,14,13,13,12,12,11,11,10,10,9,9,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,0,1,2,4,0,0,0,0,0,1,2,4,5,7,8,10,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,5,3,2,2,1,1,0,0,0,1,2,3,4,5,6,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,12,12,12,12,13,13,13,13,15,15,16,15,18,13,13,12,21,12,10,10,9,9,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,1,2,0,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,5,5,5,5,6,6,6,6,8,9,10,11,6,6,5,5,4,14,4,2,2,1,1,0,0,0,0,1,1,1,3,1,0,0,0,0,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,7,8,10,10,10,10,11,11,11,11,12,12,12,12,16,17,21,21,21,21,23,23,24,23,25,26,27,27,28,27,29,30,34,34,35,37,37,37,37,38,38,38,38,39,39,39,39,40,40,40,40,41,41,41,41,42,42,42,44,42,41,41,40,40,39,39,38,38,37,37,34,21,21,12,12,11,11,10,10,4,4,4,4,4,4,4,4,3,52,52,52,52,53,54,56,56,56,56,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,59,59,60,61,59,62,63,64,65,58,58,58,58,58,68,58,58,58,56,56,52,73,74,76,76,76,76,78,79,83,83,83,83,85,85,86,86,86,86,87,87,87,87,89,90,87,87,86,86,85,95,83,83,76,76,0,0,0,0,0,1,1,1,1,3,5,5,5,5,7,9,9,9,9,10,10,10,12,10,9,9,5,5,1,1,0,0,0,0,0,0,1,1,1,1,2,2,2,2,4,6,6,7,6,8,8,9,11,8,14,16,2,2,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,6,7,4,4,3,3,3,3,3,10,3,3,3,1,1,0,0,0,0,0,1,2,4,6,6,6,6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,10,11,11,12,13,15,15,15,17,15,11,18,19,8,8,8,8,8,22,8,8,8,6,6,0,0,0,0,0,1,1,1,1,2,2,2,4,2,1,1,0,0,0,0,0,1,2,4,6,6,6,6,7,7,7,7,8,8,8,8,10,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,15,15,16,18,15,21,21,22,23,21,13,13,12,12,12,12,12,27,12,12,12,8,8,7,7,6,6,0,0,0,0,0,1,2,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,6,4,4,3,3,3,3,3,9,3,3,3,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,3,3,3,3,4,4,4,6,4,3,3,0,0,0,0,0,1,2,4,4,4,6,4,0,0,0,0,0,0,3,3,4,4,4,4,6,7,4,4,3,12,12,12,12,14,15,19,19,19,21,19,12,12,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,2,2,3,3,3,3,4,4,4,4,6,8,4,4,3,3,2,1,12,12,12,12,13,13,13,13,14,14,14,16,14,13,13,12,12,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,5,3,2,2,1,1,0,0,0,0,0,1,2,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,11,11,11,11,12,12,12,12,14,15,16,17,18,19,12,12,11,24,24,24,24,25,25,25,25,26,26,26,26,28,28,29,28,31,26,26,25,25,34,34,34,34,35,35,35,35,37,38,35,35,34,34,25,25,24,43,43,43,43,44,44,44,44,46,44,44,43,51,51,51,52,51,57,57,57,57,58,57,63,63,63,63,64,64,64,64,65,65,65,65,67,69,69,70,71,73,74,76,69,79,79,80,79,82,83,85,65,65,64,64,63,63,9,9,8,8,7,7,6,6,0,0,0,0,3,3,3,3,3,4,4,5,5,5,5,7,8,10,12,13,15,5,5,4,16,16,17,16,20,22,3,29,30,31,32,33,34,35,36,37,38,42,43,44,45,46,47,51,51,51,51,53,57,57,57,57,58,58,58,58,60,62,66,66,66,66,68,72,76,76,76,76,78,78,79,78,81,81,82,81,84,84,85,84,87,87,88,87,92,92,92,92,94,96,92,92,76,76,66,66,58,58,57,57,51,51,0,0,0,1,1,2,2,2,4,2,1,7,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,22,22,22,22,23,23,23,25,23,22,22,21,21,20,20,19,19,18,18,18,18,18,28,18,18,18,16,16,15,15,14,14,13,13,12,12,11,11,10,10,9,9,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,10,11,13,14,16,17,19,19,19,19,20,20,20,20,21,21,21,21,23,24,26,21,21,20,20,19,19,8,8,7,7,6,6,5,5,3,3,2,2,1,1,0,0,0,0,1,1,1,3,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,3,1,1,1,1,1,6,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,3,1,1,1,1,1,6,1,1,1,0,0,0,0,1,2,4,0,0,0,0,1,2,4,5,7,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,4,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,4,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,8,6,5,5,4,4,0,0,0,0,1,2,4,0,0,0,1,1,2,2,2,2,4,4,5,4,6,6,7,6,10,10,10,10,12,12,13,13,13,13,15,15,16,15,17,17,18,20,17,13,13,12,24,26,10,10,2,2,1,27,27,28,28,29,28,30,30,31,30,34,27,35,36,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,4,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,5,4,6,6,7,9,6,12,14,2,2,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,3,4,5,6,8,9,11,12,14,1,1,0,0,0,0,0,1,0,0,0,0,0,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,9,9,9,10,12,13,15,15,15,15,17,19,19,19,19,21,22,19,19,15,15,9,27,27,27,27,28,28,28,30,28,27,35,35,35,35,36,36,36,36,37,37,37,37,39,37,37,36,36,35,44,44,45,45,45,46,46,46,47,48,50,51,44,56,56,56,56,57,57,57,57,58,58,58,58,60,62,62,62,62,63,62,68,68,68,68,70,70,70,70,71,71,71,71,72,72,72,72,74,74,74,74,75,75,75,75,77,78,79,81,82,85,86,88,88,88,88,89,89,89,89,91,93,95,89,89,88,88,75,75,74,74,72,72,71,71,70,70,68,68,58,58,57,57,56,56,7,7,6,6,5,5,4,4,3,3,0,0,0,0,0,3,3,3,3,4,6,3,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,17,18,22,24,15,15,14,14,13,13,12,12,11,11,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,6,6,6,6,8,8,9,9,10,10,10,12,10,9,15,15,15,17,15,8,20,20,20,20,22,23,25,26,28,28,28,30,28,20,20,6,6,4,4,3,3,2,2,1,1,0,0,0,1,1,2,2,2,4,2,1,7,9,9,9,9,11,13,9,9,0,0,0,0,1,0,0,0,0,0,0,3,4,6,6,6,6,7,7,7,7,9,9,10,10,11,10,12,12,13,12,9,16,16,17,17,17,17,19,17,17,16,22,22,22,22,23,23,23,23,24,24,24,26,24,23,23,22,22,7,7,6,6,0,0,0,0,0,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,9,9,9,9,10,10,10,10,11,11,11,11,13,15,16,18,18,18,18,19,19,19,19,20,20,20,20,22,24,20,20,19,19,18,18,11,11,10,10,9,29,29,29,29,30,30,30,32,30,29,37,37,37,37,38,38,38,40,38,37,45,45,46,46,46,47,47,47,48,49,51,52,45,57,57,57,57,59,59,59,59,60,59,65,65,65,65,67,67,67,67,68,68,68,68,69,69,69,69,71,71,71,71,72,72,72,72,74,75,76,78,79,82,83,85,86,88,90,92,72,72,71,71,69,69,68,68,67,67,65,65,57,57,7,7,6,6,5,5,4,4,3,3,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,9,9,9,9,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,17,15,14,14,13,13,12,12,11,11,9,9,8,8,7,7,7,7,7,20,7,7,7,3,3,2,2,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,11,13,9,9,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,6,4,3,3,2,2,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,6,8,4,4,3,3,2,2,1,1,0,0,0,0,1,1,2,2,2,2,4,6,2,2,1,9,9,9,11,9,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,0,0,0,1,2,4,8,8,8,8,10,12,12,12,12,13,13,13,13,14,14,14,14,16,17,19,19,19,19,20,20,20,20,24,24,25,25,25,25,26,26,26,26,27,27,27,27,28,28,28,28,30,30,31,30,33,33,33,33,35,36,33,33,28,28,27,27,26,26,25,25,24,20,20,19,19,14,14,13,13,12,12,8,8,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,5,5,5,5,9,10,14,14,14,14,15,15,15,15,17,17,17,17,19,19,20,20,20,20,22,22,22,23,24,20,20,19,25,25,26,26,26,26,28,28,28,29,30,26,26,25,31,32,36,17,17,15,15,14,14,5,5,4,2,2,1,1,0,0,0,1,2,4,4,4,4,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,9,9,9,9,11,11,12,12,12,14,12,11,15,15,16,16,16,18,16,15,19,19,20,20,20,22,20,19,23,23,26,26,26,26,28,28,28,28,29,29,29,33,29,28,28,26,26,23,9,9,6,6,6,6,6,38,6,6,6,4,4,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,3,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,10,6,6,5,5,4,4,3,15,15,15,15,17,19,15,15,0,0,0,0,0,1,1,1,1,2,2,2,4,2,1,1,0,0,0,0,0,1,1,1,3,1,0,0,0,0,1,1,1,1,3,4,5,6,7,8,10,1,1,0,0,0,0,1,1,1,1,2,2,2,2,4,5,6,7,8,9,10,11,12,13,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,22,22,22,24,22,21,21,20,20,19,19,18,18,17,17,16,16,15,15,15,15,15,27,15,15,15,2,2,1,1,0,2,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,11,11,12,13,17,17,17,17,19,19,20,21,23,19,28,28,29,29,29,29,31,32,34,29,29,28,39,39,39,39,40,40,40,40,42,42,43,42,45,45,46,45,50,50,51,51,51,51,53,54,55,57,51,51,50,62,62,62,62,63,63,63,63,65,65,66,66,66,66,67,67,67,67,69,71,71,72,74,71,67,67,66,66,65,80,80,81,81,81,81,83,84,85,86,88,81,81,80,91,92,63,63,62,62,40,40,39,39,17,17,11,95,95,95,95,96,96,96,96,97,97,97,97,101,102,104,97,97,96,96,95,95,9,9,8,8,7,7,6,6,5,5,4,4,3,3,2,0,0,1,2,4,5,7,8,12,12,12,12,13,13,14,14,14,14,16,16,16,16,17,17,17,19,17,16,16,14,14,13,20,20,21,21,21,23,21,20,24,25,12,30,30,30,30,31,31,32,32,32,32,34,34,34,34,35,35,35,37,35,34,34,32,32,31,38,38,39,39,39,41,39,38,42,43,30,48,48,49,51,51,51,53,51,48,58,58,58,58,59,59,59,59,60,60,60,60,61,61,61,63,61,60,60,59,59,58,58,0,0,0,0,0,3,3,3,3,4,4,4,4,5,5,5,7,5,4,4,3,3,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,5,5,5,5,6,6,6,6,8,8,8,8,10,10,11,10,12,12,13,12,14,14,15,14,16,17,19,19,19,19,20,20,20,20,21,21,21,23,21,20,20,19,19,8,8,6,6,5,5,4,4,2,2,1,1,0,0,0,0,0,1,1,1,1,3,4,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,11,11,11,11,12,12,12,12,14,15,17,17,17,17,19,19,20,20,20,20,21,21,21,21,22,22,22,22,24,24,25,27,24,30,22,22,21,21,20,20,19,17,17,12,12,11,11,9,9,8,8,7,7,6,6,1,1,0,0,0,0,3,3,3,3,5,5,5,5,6,6,6,6,8,8,8,8,9,9,9,9,11,12,9,9,8,15,8,6,6,5,20,20,20,20,21,21,21,21,22,22,22,22,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,26,26,26,26,27,27,27,27,28,28,28,28,29,29,29,29,30,30,30,30,31,31,31,31,33,35,35,35,35,37,39,39,39,39,41,43,43,43,45,43,39,39,35,35,31,31,30,30,29,29,28,28,27,27,26,26,25,25,24,24,24,24,24,48,24,24,24,22,22,21,21,20,20,3,3,0,0,0,0,0,0,0,0,1,1,1,3,1,0,0,0,0,1,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,1,1,1,5,5,5,5,6,6,6,6,7,7,7,7,9,10,12,12,12,12,14,15,16,18,18,18,24,18,12,12,7,7,6,6,5,5,1,1,0,0,0,0,0,0,0,1,2,6,6,6,6,6,6,6,7,7,7,7,8,8,8,8,10,10,10,10,12,14,14,14,14,16,18,18,18,18,20,21,22,23,24,25,27,18,18,14,14,10,10,8,8,7,7,6,32,32,32,32,32,32,32,33,33,33,33,34,34,34,34,35,35,35,35,36,36,36,36,37,37,37,37,41,41,41,41,43,45,45,45,45,47,49,49,49,49,51,52,54,54,54,54,55,55,55,55,57,58,62,63,64,65,66,67,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,72,72,72,72,73,73,73,73,74,74,74,74,75,75,75,75,76,76,76,76,78,80,80,80,80,82,83,85,85,85,85,86,86,86,86,88,90,90,90,90,91,91,91,91,93,95,96,91,91,90,90,86,86,85,85,80,80,76,76,75,75,74,74,73,73,72,72,71,71,71,71,71,71,99,101,71,71,71,71,55,55,54,54,49,49,45,45,41,41,37,37,36,36,35,35,34,34,33,33,32,106,106,106,107,107,107,107,108,108,108,108,110,111,112,113,114,116,116,116,116,118,120,120,120,120,122,124,124,124,124,126,128,129,130,131,133,124,124,120,120,116,116,108,108,107,107,106,138,138,138,138,139,139,139,139,141,143,143,143,143,145,147,143,143,139,139,138,152,152,152,152,153,153,153,153,154,154,154,154,156,156,157,157,157,157,159,161,157,157,156,164,154,154,153,153,152,169,169,169,169,170,170,171,171,171,171,173,174,171,171,170,169,180,180,180,180,181,181,181,181,183,183,184,183,185,185,186,185,188,188,188,188,189,189,189,189,191,192,194,194,194,194,196,198,198,198,198,199,199,199,199,201,202,204,205,199,199,198,198,194,194,189,189,188,188,181,181,180,180,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,6,4,3,3,2,2,1,1,0,0,0,0,0,1,1,2,3,1,4,5,0,0,0,1,0,0,0,1,2,4,8,8,8,9,9,9,9,11,11,11,11,12,12,12,14,12,11,17,11,9,9,8,22,22,22,22,24,24,24,25,25,25,25,27,27,28,28,28,28,29,29,29,29,31,32,29,29,28,28,27,33,33,34,34,34,34,35,35,35,35,36,36,36,36,37,37,37,37,39,40,41,42,37,37,36,36,35,35,34,34,33,45,45,45,47,45,25,25,24,52,52,53,54,56,57,59,59,59,59,60,60,60,60,61,61,61,61,62,62,62,62,63,63,63,63,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,66,66,67,66,69,69,70,69,72,72,73,72,75,75,76,75,78,78,79,78,65,65,65,65,65,65,82,83,85,86,88,89,91,92,94,95,97,65,65,65,65,63,63,62,62,61,61,60,60,59,59,52,102,102,103,104,106,107,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,110,111,109,109,109,109,109,114,109,109,109,102,119,119,120,120,120,120,122,123,120,120,119,22,22,0,0,0,1,0,0,0,1,1,1,1,2,2,2,2,4,5,7,7,7,7,9,10,11,12,13,14,7,7,2,2,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,5,7,7,7,7,8,8,8,10,8,7,7,4,13,2,2,1,1,0,0,0,0,0,1,3,4,0,0,0,0,0,1,2,0,0,0,0,0,0,1,1,1,1,2,2,2,4,2,1,1,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,6,8,9,3,3,2,2,1,1,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,6,8,9,3,3,2,2,1,1,0,0,0,0,0,0,1,3,0,0,0,0,0,1,0,0,0,1,2,4,4,4,4,6,7,9,4,4,0,0,0,1,2,4,4,4,4,6,7,9,4,4,0,0,0,0,0,1,1,1,1,3,3,4,4,4,4,8,9,13,14,15,16,17,18,22,4,4,3,1,1,0,0,0,1,2,4,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,5,6,6,6,6,8,8,9,8,10,10,11,10,6,6,5,14,14,15,15,16,15,17,17,18,17,14,21,3,3,2,2,1,1,0,0,0,1,2,4,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,13,14,16,16,16,16,17,17,17,17,19,21,21,21,21,22,22,22,24,22,21,21,17,17,16,16,11,11,10,10,9,9,8,29,29,29,29,31,31,31,31,32,32,32,32,33,33,33,33,35,36,33,33,32,39,32,31,44,44,44,44,45,45,45,45,47,47,47,47,48,48,48,48,50,51,48,48,47,54,47,45,45,44,59,59,59,59,60,60,60,60,61,61,61,61,63,63,64,63,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,67,67,67,67,68,68,68,68,69,69,69,69,70,70,70,70,71,71,71,71,72,72,72,72,73,73,73,73,74,74,74,74,75,75,75,75,76,76,76,76,77,77,77,77,78,78,78,78,79,79,79,79,81,83,83,83,83,85,85,86,86,86,86,87,87,87,87,89,91,91,91,91,93,95,97,91,91,87,87,86,86,85,100,83,83,79,79,78,78,77,77,76,76,75,75,74,74,73,73,72,72,71,71,70,70,69,69,68,68,67,67,66,66,66,66,66,103,66,66,66,61,61,60,60,59,59,29,29,0,0,0,0,3,3,3,3,5,5,5,5,6,6,7,7,7,9,7,6,12,14,14,15,17,14,22,24,24,24,24,25,25,25,25,27,29,25,25,24,24,5,34,34,34,34,35,36,38,40,40,40,40,44,44,44,44,45,45,45,45,46,46,46,46,48,49,53,53,53,53,54,54,54,54,55,55,55,55,57,58,62,62,62,62,63,63,63,63,64,64,64,64,66,67,64,64,63,63,62,62,55,55,54,54,53,53,46,46,45,45,44,44,40,40,34,72,72,72,72,73,72,80,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,114,115,117,118,119,120,121,122,123,125,126,127,129,131,133,135,136,137,138,140,141,142,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,248,3,3,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,6,7,8,9,4,4,3,3,3,3,3,13,3,3,3,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,7,5,4,4,3,3,2,2,1,1,0,0,0,0,0,1,1,1,1,3,3,3,3,4,4,4,4,6,4,4,3,9,3,1,1,0,0,0,1,1,1,1,3,5,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,3,5,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,2,2,2,4,2,1,7,9,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,2,2,2,2,4,5,7,2,2,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,1,2,4,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,12,10,9,9,8,8,7,7,6,6,0,0,0,0,1,1,1,1,3,5,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,8,6,5,5,4,4,3,13,13,13,13,14,14,14,14,15,15,15,15,17,17,18,18,18,18,20,20,21,21,21,21,23,25,21,21,20,28,28,28,28,30,32,33,35,35,36,36,36,36,38,40,41,36,36,35,28,28,18,18,17,45,15,15,14,14,13,50,50,50,50,51,51,51,53,51,50,58,58,58,58,59,59,59,61,59,58,66,66,66,66,68,69,71,71,71,71,75,75,76,76,76,76,78,78,78,78,79,79,79,79,80,80,80,82,80,79,79,78,78,85,85,85,87,85,78,78,76,76,75,92,92,92,92,94,94,94,94,95,95,95,95,96,96,96,96,97,97,97,97,98,98,98,100,98,97,97,96,96,95,95,94,94,103,103,103,103,107,107,107,107,109,110,112,112,112,112,113,113,113,113,115,115,115,115,116,116,116,116,118,118,118,118,119,119,119,119,120,120,120,120,122,122,125,127,127,127,127,128,128,128,130,128,127,127,122,131,131,134,136,136,136,136,137,137,137,137,138,138,138,138,140,141,142,138,138,137,137,136,136,131,143,143,146,147,149,143,150,150,153,153,153,153,154,154,154,154,155,155,155,155,157,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,160,160,160,160,162,160,160,159,159,159,159,159,159,167,169,159,159,159,159,155,155,154,154,153,153,150,170,170,173,173,173,173,174,174,174,174,175,175,175,177,175,174,174,173,173,170,178,178,181,183,183,183,183,184,184,184,184,185,185,185,185,187,188,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,193,193,193,193,194,194,194,194,195,195,195,197,195,194,194,193,193,192,192,192,192,192,202,192,192,192,185,185,184,184,183,183,178,205,120,120,119,119,118,118,116,116,115,115,113,113,112,112,107,107,103,103,94,94,92,92,71,71,66,66,0,0,0,1,0,0,0,0,1,1,1,1,3,5,1,1,0,0,0,1,1,1,1,3,5,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,3,5,1,1,0,0,0,0,0,3,3,3,3,5,7,7,7,7,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10,10,10,10,12,13,14,15,10,10,9,9,9,9,9,9,18,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,24,24,24,24,26,26,26,26,27,27,27,27,29,30,31,32,34,34,34,34,35,35,35,35,36,36,36,36,38,39,40,40,41,41,41,43,41,40,44,45,47,48,36,36,35,35,34,51,34,27,27,26,26,24,24,23,23,22,22,22,22,22,54,22,22,22,9,9,9,9,7,7,3,3,0,0,0,0,1,0,0,0,0,0,1,2,4,0,0,0,0,1,0,0,0,1,1,1,1,3,5,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,0,1,0,0,0,0,1,2,3,4,5,0,0,0,1,2,4,5,7,8,10,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,1,1,1,1,3,4,6,1,1,0,0,0,0,0,1,1,2,2,2,4,2,1,7,9,0,0,0,0,0,0,1,3,3,3,3,4,4,4,4,6,7,9,9,9,9,11,12,13,14,16,16,16,16,17,17,17,19,17,16,16,9,9,4,4,3,3,0,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,10,10,11,13,10,16,16,16,16,18,18,19,21,18,24,16,16,8,8,7,7,7,7,7,7,27,27,27,29,27,7,7,7,7,5,5,4,4,3,3,2,0,0,0,1,2,3,5,6,0,0,0,0,3,3,3,4,4,4,4,5,5,5,5,7,7,7,7,8,8,8,8,10,11,13,8,8,7,16,7,5,5,4,4,3,21,21,21,21,22,22,22,22,24,24,25,27,27,27,27,28,28,28,28,30,32,28,28,27,27,24,37,37,37,37,38,38,38,38,40,40,40,40,41,42,44,46,46,46,46,47,47,47,49,47,46,46,40,40,38,38,37,37,22,22,21,21,0,0,0,0,0,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,9,10,6,6,5,5,4,4,3,15,15,15,16,16,16,16,17,17,17,17,19,19,19,19,20,20,20,20,22,22,23,22,24,24,25,24,27,27,27,27,28,28,28,28,29,29,29,29,30,30,30,32,30,29,29,28,28,27,27,20,20,19,19,17,17,16,16,15,37,39,39,39,39,40,40,40,40,42,44,40,40,39,39,0,0,0,0,1,1,1,1,3,3,4,4,4,4,5,5,5,5,7,7,7,7,8,8,8,8,12,13,15,15,15,15,17,18,19,15,15,8,8,7,7,5,5,4,4,3,23,23,23,23,24,24,24,24,26,26,27,26,24,24,23,30,23,1,1,0,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,10,14,15,17,17,17,17,18,18,18,18,20,21,25,27,27,27,27,28,28,28,28,30,34,28,28,27,27,18,18,17,17,7,7,6,6,5,5,4,4,39,40,4,4,2,2,1,1,0,0,0,0,0,1,3,3,3,3,4,4,4,4,8,8,8,8,9,9,9,9,11,12,14,14,14,14,15,15,15,15,17,19,19,19,19,21,23,23,23,23,24,24,24,24,26,30,34,36,24,24,23,23,19,19,15,15,14,14,9,9,8,8,4,4,3,3,0,0,0,0,0,1,1,1,1,3,3,3,3,4,4,4,4,8,9,11,11,11,11,12,12,12,12,14,15,17,17,17,19,17,12,12,11,11,4,4,3,3,22,22,22,24,22,3,3,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,4,6,2,2,1,1,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,6,6,6,6,7,7,7,9,7,6,6,4,4,3,3,2,2,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,9,9,9,11,12,13,14,16,9,9,7,7,6,6,5,5,4,4,2,2,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,7,9,9,9,9,10,10,10,10,11,11,11,11,13,15,15,15,15,17,19,21,23,15,15,11,11,10,10,9,9,3,3,2,2,1,1,0,0,0,0,0,0,0,0,1,3,3,3,3,5,7,7,7,7,8,8,8,8,9,9,9,11,9,8,8,7,7,3,3,0,0,0,0,0,0,0,0,1,3,3,3,3,5,5,6,8,8,8,8,10,8,8,5,13,3,3,0,0,0,0,0,0,0,0,1,2,4,4,4,6,4,0,0,0,0,0,0,0,0,1,2,4,4,4,6,4,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,14,16,16,16,16,18,20,20,20,20,21,21,21,21,22,22,22,22,24,25,27,22,22,21,21,20,20,16,16,2,2,1,1,0,0,0,0,0,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,7,5,4,4,3,3,0,0,0,0,0,0,0,0,1,2,4,4,4,6,4,0,0,0,0,0,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,4,3,3,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,10,11,13,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,2,4,4,4,4,6,8,8,8,12,8,4,4,0,0,0,0,0,0,0,0,1,2,4,4,4,4,6,8,8,8,10,8,4,4,0,0,0,0,0,0,0,0,1,2,4,0,0,0,0,0,0,0,0,1,3,3,3,3,5,5,6,5,7,7,8,8,8,8,10,8,8,7,13,3,3,0,0,0,0,0,0,0,0,1,2,4,4,4,4,5,5,5,7,5,4,4,0,0,0,0,0,0,0,0,1,3,3,3,3,4,4,4,6,4,3,3,0,0,0,0,0,0,0,0,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,4,3,3,0,0,0,0,0,0,0,0,1,2,4,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,0,0,0,0,1,3,3,4,4,4,6,4,3,9,9,9,9,10,10,10,12,10,9,9,0,0,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,6,8,4,4,3,3,3,3,3,3,13,13,13,13,14,14,14,14,16,16,16,16,17,17,17,17,19,20,22,17,17,16,16,14,14,13,13,3,3,3,3,1,1,0,0,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,6,8,4,4,3,3,3,3,3,3,13,13,14,14,14,14,15,15,15,15,17,17,17,17,18,18,18,18,20,21,18,18,17,17,15,15,14,14,13,24,3,3,3,3,1,1,0,0,0,0,0,0,0,0,0,1,3,3,3,3,5,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,12,10,9,9,8,8,7,7,3,3,0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,10,12,7,7,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,9,11,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,0,0,0,0,0,3,3,3,3,4,5,7,7,8,8,8,8,10,12,12,12,12,13,13,13,13,15,16,18,13,13,12,12,8,8,7,21,3,26,26,26,26,27,27,27,27,29,31,31,31,31,32,32,32,32,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,35,35,35,35,37,38,40,40,40,40,41,41,41,43,41,40,40,35,35,34,34,34,34,34,34,46,46,46,46,47,47,47,47,48,48,48,48,49,49,49,49,50,50,50,50,51,51,51,51,53,54,56,51,51,50,50,49,49,48,48,47,47,46,46,34,34,34,34,32,32,31,31,27,27,26,26,0,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,6,4,3,3,3,3,3,9,3,3,3,1,1,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,4,5,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,9,9,9,10,11,13,13,13,13,15,16,13,13,7,7,7,7,7,7,19,19,19,19,20,20,20,20,21,21,21,23,21,20,20,19,19,7,7,7,7,2,2,1,1,0,0,0,0,0,1,2,4,6,6,6,6,8,8,8,8,10,12,12,13,14,12,17,19,8,8,6,6,0,0,0,0,0,0,3,3,3,3,4,4,4,4,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,8,8,8,8,10,11,13,8,8,7,16,16,16,18,16,6,6,6,6,6,21,6,6,6,4,4,3,26,26,26,26,27,27,27,27,28,28,28,28,29,29,29,29,31,31,31,31,33,33,34,34,35,37,34,33,41,41,41,41,42,42,42,42,43,43,43,43,44,44,44,44,45,45,45,45,46,46,46,46,47,47,47,47,49,51,52,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,55,55,56,58,55,61,63,63,63,63,65,67,67,67,67,68,68,68,68,70,70,71,73,70,76,78,78,78,78,79,79,79,79,80,80,80,80,82,82,82,82,83,83,83,83,84,84,84,84,85,85,85,85,86,86,86,88,86,85,85,84,84,83,83,82,82,80,80,79,79,78,78,68,68,67,67,63,63,54,54,54,54,54,54,91,93,95,54,54,54,54,47,47,46,46,45,45,44,44,43,43,42,42,41,41,31,31,29,29,28,28,27,27,26,100,100,100,100,101,101,101,101,102,102,102,102,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,105,105,106,106,106,106,107,107,107,107,109,109,110,112,109,107,107,106,106,105,114,114,115,117,114,120,104,104,104,104,104,123,104,104,104,102,102,101,101,100,128,128,129,130,132,133,135,128,140,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,7,7,7,7,8,8,8,8,10,10,11,12,10,13,13,14,16,13,19,8,8,7,7,3,3,2,2,1,1,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,12,13,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,16,17,18,18,19,19,19,21,19,18,22,23,15,15,15,15,15,15,26,26,26,26,27,27,27,27,28,28,28,28,29,29,29,29,30,30,30,30,31,31,31,31,33,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,36,36,36,36,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,39,38,38,38,38,38,42,38,38,38,36,36,35,35,35,35,35,35,45,45,46,46,46,46,47,47,47,49,47,46,46,45,52,35,35,35,35,31,31,30,30,29,29,28,28,27,27,26,26,15,15,15,15,10,10,9,9,8,8,7,7,6,6,5,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,58,58,58,58,59,59,59,59,60,60,60,60,62,64,64,64,64,65,65,65,65,66,66,66,68,66,65,65,64,64,60,60,59,59,58,58,57,57,57,57,57,57,57,57,0,0,0,0,0,0,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,8,8,9,9,9,9,11,11,12,13,11,14,15,9,9,8,18,18,18,18,20,20,21,21,21,23,21,20,26,26,26,26,27,27,27,27,28,28,28,30,28,27,27,26,26,18,18,6,6,5,5,4,4,3,35,35,35,35,36,36,36,36,38,38,39,39,39,41,39,38,44,36,36,35,35,0,0,0,0,0,0,3,3,3,3,4,4,4,4,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,8,8,8,8,10,11,13,8,8,7,16,16,16,18,16,6,6,6,6,6,21,6,6,6,4,4,3,26,26,26,26,27,27,27,27,28,28,28,28,30,30,30,30,31,31,31,31,32,32,32,32,33,33,33,33,34,34,34,34,36,38,38,38,38,39,39,39,39,40,40,40,40,41,41,41,41,42,42,42,42,44,46,46,46,46,47,47,47,47,48,48,48,48,49,49,49,49,50,50,50,50,52,54,54,54,54,55,55,55,55,56,56,56,56,57,57,57,57,58,58,58,58,60,62,58,58,57,57,56,56,55,55,54,54,50,50,49,49,48,48,47,47,46,46,42,42,41,41,40,40,39,39,38,38,34,34,33,33,32,32,31,31,30,30,28,28,27,27,26,67,0,0,0,0,0,3,3,3,3,5,5,5,5,6,6,6,6,8,9,11,11,11,11,13,15,11,11,6,6,5,22,22,22,22,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,24,24,24,24,24,28,28,28,28,29,29,29,29,30,30,30,30,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,33,33,33,33,34,34,34,34,36,37,39,39,39,39,41,42,39,39,34,34,33,33,32,32,32,32,32,32,45,45,45,45,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,47,48,48,48,48,49,49,49,49,50,50,50,50,51,51,51,51,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,54,54,54,56,54,53,53,53,53,53,59,53,53,53,51,51,50,50,49,49,48,48,47,47,47,47,47,47,64,64,64,64,65,65,65,65,67,71,71,71,71,72,72,72,72,73,73,73,73,75,79,79,79,79,80,80,80,80,82,86,86,86,86,87,87,87,87,89,91,91,91,91,92,92,92,92,94,98,98,98,98,99,99,99,99,101,105,105,105,105,106,106,106,106,107,107,107,107,109,113,115,107,107,106,106,105,105,99,99,98,98,92,92,91,91,87,87,86,86,80,80,79,79,73,73,72,72,71,71,65,65,64,64,47,47,47,47,45,45,32,32,32,32,30,30,29,29,28,28,24,24,24,24,22,22,3,3,0,0,0,0,0,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,11,11,12,12,12,12,14,14,15,14,12,12,11,16,16,17,16,19,19,20,20,20,20,21,21,21,21,23,25,21,21,20,20,19,28,28,28,28,29,29,29,29,30,30,30,30,31,31,31,31,33,35,35,35,35,37,39,39,39,39,41,43,39,39,35,35,31,31,30,30,29,29,28,28,9,9,8,8,7,7,6,6,5,5,4,4,3,48,48,48,48,48,49,50,52,52,52,52,53,53,53,55,53,52,52,48,60,60,60,60,61,61,61,61,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,64,64,64,66,64,63,63,63,63,63,69,63,63,63,61,61,60,74,74,74,74,75,75,75,75,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,77,78,78,78,78,80,81,83,83,83,85,83,78,78,77,77,77,77,77,77,77,77,75,75,74,74,0,0,0,0,0,3,3,3,3,5,5,5,6,6,7,7,7,9,7,6,12,12,12,12,13,13,13,15,13,12,12,5,20,20,20,20,21,21,21,21,22,22,22,22,23,23,23,23,24,24,24,24,25,25,25,25,26,26,26,26,27,27,27,29,27,26,26,25,25,24,24,23,23,22,22,21,21,20,20,3,3,0,0,0,0,0,0,1,2,6,6,6,6,7,8,6,11,6,0,0,0,0,0,0,1,2,4,4,4,4,5,5,5,5,7,8,10,10,10,12,10,5,5,4,4,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,16,14,13,13,12,12,11,11,10,10,9,9,9,9,9,19,9,9,9,7,7,6,6,5,5,4,4,3,3,2,2,1,1,0,0,0,0,0,0,1,2,4,8,8,8,8,8,8,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,18,20,20,20,20,22,24,24,24,24,25,25,25,25,26,26,26,26,27,27,27,27,29,31,32,34,34,34,34,35,35,35,35,36,36,36,36,37,37,37,37,38,38,38,38,39,39,39,39,40,40,40,40,41,41,41,41,43,45,45,45,45,46,46,46,46,47,47,47,47,48,48,48,48,50,54,54,54,54,55,55,55,55,57,59,59,60,60,60,60,61,61,61,61,63,64,66,61,61,60,60,59,69,69,69,69,70,70,70,70,71,71,71,71,73,75,71,71,70,70,69,69,55,55,54,54,48,48,47,47,46,46,45,45,41,41,40,40,39,39,38,38,37,37,36,36,35,35,34,34,27,27,26,26,25,25,24,24,20,20,16,16,15,15,14,14,13,13,12,12,11,11,8,80,80,81,80,82,82,83,82,86,0,0,0,0,0,0,3,3,4,5,7,8,10,11,13,3,18,18,18,18,20,20,21,21,21,21,23,23,24,24,24,24,25,25,25,27,25,24,24,23,30,30,30,30,32,32,32,32,33,33,33,33,35,37,33,33,32,32,30,30,21,21,20,40,40,40,40,41,41,41,43,41,40,40,18,18,0,0,0,0,0,0,3,3,3,3,4,4,4,4,5,5,5,5,7,7,8,8,8,8,9,9,9,9,11,11,12,11,13,13,14,16,13,19,9,9,8,8,7,22,5,5,4,4,3,27,27,27,27,27,28,28,28,28,29,29,29,29,30,30,30,30,31,31,31,31,32,32,32,32,34,34,35,35,35,35,36,36,36,36,38,39,40,42,42,42,42,43,43,43,43,44,44,44,44,45,45,45,45,47,49,49,49,49,50,50,50,50,51,51,51,51,52,52,52,52,54,56,56,56,56,57,57,57,57,58,58,58,58,59,59,59,59,61,63,63,64,64,64,64,65,65,65,65,66,66,66,66,67,67,67,67,69,71,67,67,66,66,65,65,64,64,63,74,59,59,58,58,57,57,56,56,52,52,51,51,50,50,49,49,45,45,44,44,43,43,42,42,36,36,35,35,34,75,75,76,76,76,76,77,77,77,77,78,78,78,78,79,79,79,79,81,83,83,83,83,84,84,84,84,85,85,85,85,86,86,86,86,88,90,90,90,90,91,91,91,91,92,92,92,92,93,93,93,93,95,97,97,98,98,98,98,99,99,99,99,100,100,100,100,101,101,101,101,103,105,101,101,100,100,99,99,98,98,97,108,93,93,92,92,91,91,90,90,86,86,85,85,84,84,83,83,79,79,78,78,77,77,76,76,75,111,111,111,111,112,112,112,112,114,116,112,112,111,111,32,32,31,31,30,30,29,29,28,28,27,121,121,122,123,125,126,128,121,133,133,134,135,137,138,140,141,143,133,148,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,5,5,5,5,6,6,6,8,6,5,5,4,4,11,11,11,11,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,21,19,18,18,17,17,16,16,15,15,14,14,13,13,13,13,13,13,24,24,24,26,24,13,13,13,13,11,11,4,4,2,2,1,1,0,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,9,10,14,14,14,14,16,16,17,18,16,21,21,21,21,22,22,22,24,22,21,21,14,14,7,7,6,6,5,5,4,4,3,3,3,3,3,27,3,3,3,1,1,0,0,0,0,0,0,3,3,3,3,3,3,3,3,4,4,4,4,5,6,8,8,8,8,9,9,9,9,11,12,14,16,9,9,8,8,4,4,19,19,19,19,20,20,20,20,22,23,25,27,20,20,19,19,4,4,3,32,32,32,32,33,33,33,33,34,34,34,34,35,35,35,35,37,37,38,37,39,39,40,42,39,35,35,34,34,33,33,32,32,0,0,0,0,0,0,1,2,4,4,4,4,5,5,5,5,6,6,6,6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,10,10,10,10,12,12,13,14,12,17,17,17,17,18,18,18,18,19,19,19,21,19,18,18,17,17,10,10,9,9,8,8,8,8,8,8,24,24,24,24,25,25,25,25,27,29,25,25,24,24,8,8,8,8,6,6,5,5,4,4,0,0,0,0,0,0,1,2,4,5,7,8,10,11,13,13,14,14,14,14,16,18,18,18,18,19,19,19,19,21,22,24,19,19,18,18,14,14,13,27,27,27,27,28,28,28,30,28,27,27,0,0,0,0,0,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,11,11,11,11,12,12,12,12,13,13,13,15,13,12,12,11,11,10,1,19,0,0,0,0,0,1,1,1,1,3,3,4,5,6,7,8,9,3,12,12,12,12,14,14,15,15,15,17,15,14,20,12,12,1,1,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,5,3,2,2,1,1,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,6,4,3,3,2,2,1,1,0,0,0,0,0,0,0,0,1,3,0,0,0,0,0,0,0,1,3,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,3,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,1,1,1,1,2,2,2,4,2,1,1,0,0,0,0,0,1,3,3,3,5,3,0,0,0,0,0,1,1,1,3,1,0,0,0,0,0,0,1,3,0,0,0,0,0,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,7,8,5,5,4,4,4,4,4,11,4,4,4,3,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,21,21,22,22,22,22,23,23,23,23,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,27,27,27,27,28,28,28,30,28,27,27,26,26,25,25,25,25,25,25,25,25,23,23,22,22,21,34,36,38,19,19,18,18,17,17,16,16,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,5,5,6,8,5,11,11,11,11,13,13,14,16,13,21,21,21,21,23,23,24,23,26,26,26,26,28,30,30,30,30,32,34,35,37,41,42,44,44,44,44,45,45,45,45,46,46,46,46,47,47,47,47,48,48,48,48,49,49,49,49,50,50,50,50,51,51,51,51,53,53,53,53,54,54,54,54,55,55,55,55,57,57,58,58,58,60,58,57,63,63,64,64,65,65,65,67,65,64,63,73,73,73,73,75,77,77,78,78,78,78,79,79,79,79,80,80,80,80,81,81,81,81,82,82,82,82,83,83,83,83,84,84,84,86,84,83,83,82,82,81,81,80,80,79,79,78,78,77,73,73,55,55,54,54,53,53,51,51,50,50,49,49,48,48,47,47,46,46,45,45,44,44,30,30,26,26,21,21,11,11,3,3,2,2,1,1,0]
const contents={"0":[519,520,521],"1":[522,523,524,525,526,524,527,521],"2":[528,529,524,525,530,524,527,521],"3":[531,532,521],"4":[533,534,535,536,521],"5":[537,538,521],"6":[539,540,521],"7":[541,542,524,543,524,544,545,524,546,521],"8":[547,548,549,524,550,551,524,552,553,524,544,554,524,555,521],"9":[556,557,558,524,559,560,524,561,524,562,563,564,524,565,566,524,567,524,568,536,524,527,521],"10":[569,557,524,570,571,572,573,524,574,536,524,527,521],"11":[575,576,524,577,578,524,579,578,524,580,521],"12":[581,582,521],"13":[583,584,521],"14":[585,586,587,524,588,536,524,589,590,591,592,524,593,536,524,594,595,591,592,524,596,536,524,597,598,591,592,524,599,536,524,600,601,602,524,603,521],"15":[604,605,524,606,521],"16":[607,608,609,610,524,527,521],"17":[611,612,524,613,614,524,615,616,617,618,619,620,621,622,524,623,521],"18":[624,625,626,627,628,629,630,631,632,627,633,629,630,631,634,631,635,636],"19":[637,638,639,640,641,642,524,643,640,524,644,524,645,646,647,648,649,650,651,652,653,654,524,655,656,657,658,659,660,661,654,524,655,662,648,661,654,524,655,663,536,524,664,524,521],"20":[665,666,521],"21":[667,668,521],"22":[669,670,671,524,524,524,672,524,673,674,675,524,676,677,524,678,679,680,524,681,682,524,683,524,684,685,524,686,687,688,524,689,690,524,679,691,524,681,682,524,683,524,692,685,524,686,662,693,536,524,524,524,694,521],"23":[695,696,697,524,524,524,698,699,700,701,702,703,524,704,705,685,524,706,663,536,524,524,524,707,708,709,710,524,711,712,524,713,714,715,716,524,704,705,524,717,718,703,524,704,705,685,524,719,663,536,524,524,524,720,721,524,722,723,524,724,521],"24":[524,524,725,524,524,726,727,728,524,729,728,524,730,731,524,732,731,524,578,536,524,524,524,733,524,570,734,735,524,736,663,524,737,738,739,524,740,741,662,742,524,736,663,524,743,524,744,745,536,524,746,521],"25":[747,748,521],"26":[749,548,750,524,751,752,524,753,728,524,754,755,754,756,757,758,524,759,760,663,524,578,761,762,521],"27":[763,764,524,570,765,766,536,524,527,521],"28":[767,764,558,524,768,769,770,524,771,663,536,524,527,521],"29":[772,773,774,524,775,776,777,524,778,779,524,780,781,782,781,662,783,536,524,784,785,524,527,521],"30":[786,787,550,524,773,774,524,788,789,790,777,524,778,791,524,780,792,782,792,662,783,536,524,784,793,524,527,521],"31":[794,795,796,797,798,524,527,521],"32":[799,670,800,524,801,536,524,802,524,803,804,805,806,807,808,809,810,524,811,521],"33":[812,813,814,524,815,536,524,816,524,817,818,524,819,536,524,820,524,821,822,823,824,524,825,826,827,828,663,524,829,830,831,832,524,833,781,524,834,524,835,836,524,837,736,524,838,839,524,840,736,524,841,842,843,524,844,736,524,845,524,846,736,524,847,848,849,850,851,852,524,853,536,524,527,521],"34":[854,813,855,524,856,536,524,816,524,817,818,524,819,536,524,820,524,857,524,858,859,860,524,861,862,863,864,865,662,783,524,866,536,524,527,521],"35":[867,868,524,869,870,524,871,524,872,521],"36":[873,813,874,524,875,536,524,816,876,524,817,818,524,877,536,524,820,524,878,879,524,880,881,882,524,883,884,885,524,886,887,524,888,889,524,890,891,662,892,524,893,894,895,896,897,524,898,899,536,521],"37":[900,901,902,524,903,524,904,905,524,906,524,524,524,907,908,909,524,910,911,912,524,913,914,524,915,524,916,912,663,524,917,536,524,524,524,918,919,920,524,921,922,923,524,924,524,925,524,926,927,928,929,913,524,930,931,663,524,932,933,934,524,935,936,524,937,938,524,939,940,941,942,524,940,685,524,943,524,944,663,524,945,524,946,947,663,524,948,524,949,950,524,951,952,524,953,663,524,946,954,828,524,955,663,524,917,536,524,524,524,956,957,524,958,536,524,524,524,959,960,524,961,524,962,963,524,964,965,966,524,967,968,524,969,970,971,972,524,917,536,524,524,524,973,974,975,976,663,524,762,536,524,524,524,977,524,978,979,524,980,521],"38":[981,982,983,524,984,985,524,986,536,524,987,524,988,989,990,991,992,524,993,994,524,995,663,524,996,536,524,997,524,998,999,524,524,1000,1001,663,536,524,1002,1003,736,524,1004,1005,1006,524,826,1007,1008,524,1009,1010,1011,1012,524,1013,536,524,1014,524,998,1015,524,1016,521],"39":[1017,524,524,1018,826,1019,663,524,1020,524,1021,524,524,524,1022,524,1023,1024,524,1025,912,524,1026,663,524,524,524,1027,1028,1029,524,1030,1031,941,912,524,1032,663,524,524,524,1033,524,1034,536,524,524,524,557,524,670,1035,761,1036,524,1037,1038,524,524,524,778,1039,524,1040,783,536,524,1041,524,527,521],"40":[1042,1043,521],"41":[1044,1045,524,570,1046,955,663,536,524,527,521],"42":[1047,524,524,1048,1049,1050,1051,524,1052,524,1053,536,524,1054,524,524,524,1055,1056,1057,1058,1051,524,1059,536,524,524,524,998,1060,999,1061,761,762,524,524,524,1062,521],"43":[1063,548,1064,524,1065,524,1045,524,570,1066,524,1067,1068,524,736,663,524,1069,1070,524,1071,1072,1073,662,1068,536,524,527,521],"44":[1074,1075,521],"45":[1076,1077,524,1078,524,525,1079,524,527,521],"46":[1080,548,1081,524,550,1082,524,1083,521],"47":[1084,670,671,524,1085,524,1086,524,1087,524,751,1088,524,1089,761,1090,521],"48":[1091,698,1092,756,1093,524,1094,524,917,761,762,521],"49":[1095,1096,524,1097,521],"50":[1098,570,1099,728,536,524,580,521],"51":[1100,1045,524,570,1101,536,524,527,521],"52":[1102,1103,1104,524,1105,524,768,765,1106,662,1107,536,524,527,521],"53":[1108,1109,1110,524,1111,898,1112,1113,536,524,1114,1115,1116,524,1117,524,544,614,524,1118,524,1119,1115,1120,524,1117,521],"54":[1121,1122,521],"55":[1123,751,752,524,1124,1125,756,757,758,524,759,1126,663,524,723,761,762,521],"56":[1127,1128,1129,524,1130,1131,1130,521],"57":[1132,1128,524,670,1133,524,899,524,614,536,524,787,524,1134,1135,1136,1137,1136,1138,1139,524,1140,521],"58":[1141,1142,1143,1144,524,1145,736,524,1146,524,1147,536,524,1148,521],"59":[1149,1150,524,1151,1152,736,524,1153,524,1154,536,524,527,521],"60":[1155,1150,1156,1157,524,1151,1153,1158,524,1159,536,524,527,521],"61":[1160,1161,524,1162,521],"62":[1163,1164,1165,524,1166,521],"63":[1167,1168,545,524,1169,1170,524,1148,521],"64":[1171,1096,524,1172,521],"65":[1173,1096,524,1174,521],"66":[1175,1176,521],"67":[1177,1178,1179,1180,1181,1182,662,892,536,524,1183,521],"68":[1184,1185,1186,524,1187,521],"69":[1188,1189,521],"70":[1190,1191,521],"71":[1192,524,524,1193,524,524,1194,1195,524,1196,1197,524,524,524,1198,1199,524,640,663,524,524,524,1200,536,524,524,524,1201,1202,1203,1204,1205,1051,524,1059,536,524,524,524,524,524,1206,524,1207,1208,1209,1210,1211,524,524,524,1212,524,998,1213,999,1214,761,762,524,1215,524,524,524,1216,524,1151,1217,736,524,1218,1219,524,1220,663,536,524,524,524,1055,1221,524,1222,524,524,1223,524,524,524,1198,1199,524,640,663,1224,524,524,1225,536,524,524,524,1226,521],"72":[1227,1082,524,1228,521],"73":[1229,1230,578,524,1231,578,524,1232,524,1233,578,524,1234,521],"74":[1235,1230,578,524,1231,578,524,570,524,524,1236,1237,1238,662,728,536,524,580,521],"75":[1239,1230,578,524,1231,578,524,570,1240,1241,662,728,536,524,580,521],"76":[1242,1243,1244,524,1245,774,524,1246,1244,524,1247,1244,524,1248,1244,524,1249,521],"77":[1250,1251,521],"78":[1252,1253,1244,524,1245,1244,524,1254,1244,524,1246,1244,524,1247,1244,524,1248,1244,524,1249,521],"79":[1255,1231,1244,524,1256,1244,524,1249,521],"80":[1257,1258,524,1259,521],"81":[1260,1261,521],"82":[1262,1230,578,524,1263,521],"83":[1264,1265,578,524,1266,521],"84":[1267,751,1244,524,698,1244,524,707,1244,524,1249,521],"85":[1268,698,1244,524,707,1244,524,1249,521],"86":[1269,1270,1244,524,751,1244,524,1249,521],"87":[1271,1272,521],"88":[1273,1230,578,524,1231,578,524,570,1274,728,536,524,580,521],"89":[1275,1230,578,524,1276,578,524,1232,524,1233,578,524,524,524,1277,524,1278,578,524,524,524,768,1279,1280,662,728,536,524,580,521],"90":[1281,524,524,1124,1282,524,524,524,707,1283,524,1284,536,524,524,524,1249,521],"91":[1285,1286,521],"92":[1287,1258,524,1288,578,524,1289,578,524,580,521],"93":[1290,1253,1244,524,1256,1244,524,1249,521],"94":[1291,1292,578,524,1293,521],"95":[1294,1258,524,1288,578,524,1295,578,524,580,521],"96":[1296,1230,578,524,1231,578,524,1297,524,1298,1299,761,578,524,570,1300,728,536,524,580,521],"97":[1301,1230,578,524,1231,578,524,1302,1303,736,524,1304,524,1305,728,536,524,580,521],"98":[1306,1307,521],"99":[1308,1309,1244,524,1310,1244,524,1249,521],"100":[1311,1230,578,524,1232,524,1312,578,524,768,1313,728,524,1314,524,1315,728,536,524,580,521],"101":[1316,1230,578,524,1317,524,1318,578,524,1319,578,524,768,1303,736,524,1300,728,524,1320,728,524,1321,728,536,524,580,521],"102":[1322,1230,578,524,1231,578,524,1111,1323,1112,578,536,524,580,521],"103":[1324,1325,1244,524,1270,1244,524,1253,1244,524,1245,1244,524,1254,1244,524,1246,1244,524,1326,1244,524,1247,1244,524,1248,1244,524,1249,521],"104":[1327,542,524,1328,521],"105":[1329,1230,578,524,1330,524,1331,521],"106":[1332,1230,578,524,1333,578,524,1334,578,524,1335,1336,524,1337,578,524,1338,524,1339,521],"107":[1340,1230,578,524,1341,578,524,1342,524,1343,578,524,1344,524,1345,521],"108":[1346,1230,578,524,1347,521],"109":[1348,1230,578,524,1231,578,524,570,1349,728,536,524,580,521],"110":[1350,1230,578,524,1351,524,1352,578,524,1353,1354,524,1355,578,524,1356,578,524,580,521],"111":[1357,1358,578,524,1359,521],"112":[1360,1243,1244,524,1245,1244,524,1254,1244,524,1249,521],"113":[1361,1362,521],"114":[1363,670,1244,524,1164,1244,524,1249,521],"115":[1364,1243,1244,524,1245,1244,524,1249,521],"116":[1365,1366,521],"117":[1367,1368,578,524,1369,578,524,1370,578,524,1258,524,1371,521],"118":[1372,1230,578,524,1341,578,524,1342,524,1373,578,524,1344,524,1345,521],"119":[1374,1164,578,524,1258,524,1375,521],"120":[1376,524,524,1124,1377,524,524,524,707,1283,524,1378,536,524,524,524,1249,521],"121":[1379,1230,578,524,1231,578,524,570,1380,728,536,524,580,521],"122":[1381,1358,578,524,1263,521],"123":[1382,1230,578,524,1231,578,524,1383,524,1384,521],"124":[1385,1258,524,1386,521],"125":[1387,1388,1244,524,1389,1244,524,1249,521],"126":[1390,1256,1244,524,1389,1244,524,1249,521],"127":[1391,1392,521],"128":[1393,1230,578,524,1231,578,524,1317,524,1233,578,524,768,1394,736,524,578,536,524,580,521],"129":[1395,1230,1396,524,1397,521],"130":[1398,1399,578,524,1400,521],"131":[1401,1402,521],"132":[1403,1230,578,524,1231,578,524,570,1404,728,536,524,580,521],"133":[1405,1265,578,524,1406,524,1407,1408,761,578,524,1111,1409,1112,578,536,524,580,521],"134":[1410,1230,578,524,524,524,1411,1412,1413,1414,663,536,524,580,521],"135":[1415,1416,578,524,1417,524,1418,521],"136":[1419,751,1244,524,698,1244,524,1249,521],"137":[1420,1230,578,524,1231,578,524,1421,578,524,1422,578,524,1423,578,524,580,521],"138":[1424,1425,1244,524,1426,1244,524,1249,521],"139":[1427,1428,578,524,1429,578,524,1430,578,524,580,521],"140":[1431,548,1432,524,1433,524,1434,521],"141":[1435,1436,521],"142":[1437,1438,521],"143":[1439,670,671,524,1440,536,524,1441,521],"144":[1442,524,524,1443,920,524,974,1444,1445,524,828,685,524,1446,1445,524,828,685,524,524,524,1447,524,1448,663,524,1449,536,524,524,524,524,524,1450,524,570,1451,1452,524,1453,524,736,663,524,1454,524,1455,536,524,1456,1457,1458,1459,1460,1461,1462,1463,1464,1465,524,1466,1467,524,1468,761,1469,1470,524,995,663,536,524,524,524,1471,1472,524,1473,1474,524,1475,1476,524,614,536,524,1477,1478,524,1479,1480,524,614,536,524,524,524,1481,1482,1483,1484,524,1485,1486,524,1487,1472,524,1488,521],"145":[1489,524,524,1490,524,524,1491,524,974,1492,1493,524,828,685,524,1494,524,1453,663,524,1495,524,1496,1497,662,1498,1499,1500,524,1501,685,663,524,1502,1503,536,524,524,524,524,1504,920,524,974,1492,1445,828,685,524,1505,524,1448,663,524,1506,1507,1508,524,1509,524,614,536,524,524,524,998,1510,999,1511,1497,662,1512,761,762,521],"146":[1513,1096,524,1514,521],"147":[1515,1096,524,1516,521],"148":[1517,524,524,1518,1519,1520,524,1521,663,536,524,524,524,524,524,1522,524,1111,1523,1112,1524,536,524,1525,1526,1527,761,1528,524,524,524,1529,1530,1531,1532,1533,1534,1535,1536,1537,1538,1539,1540,1541,1542,1543,1544,1545,1546,1547,1548,1549,1550,524,524,524,998,1551,999,1552,761,762,521],"149":[1553,1045,524,570,1554,524,1555,524,1101,536,524,527,521],"150":[1556,1231,578,524,1557,578,524,1558,578,524,1559,524,1560,521],"151":[1561,1231,578,524,1557,578,524,1558,578,524,1562,524,1560,521],"152":[1563,787,1433,524,1564,1565,1566,1567,524,1568,521],"153":[1569,1570,521],"154":[1571,1572,521],"155":[1573,1077,524,1574,524,525,1575,524,527,521],"156":[1576,1577,524,525,1578,524,527,521],"157":[1579,605,524,1580,521],"158":[1581,1582,521],"159":[1583,521],"160":[1584,1325,1585,1586,1587,524,1588,761,762,521],"161":[1589,1590,521],"162":[1591,1592,524,1593,521],"163":[1594,1595,1596,524,1597,1598,761,1599,524,1600,1601,524,1602,692,663,536,521],"164":[1603,733,524,1604,1605,1606,1607,524,1608,1609,524,1610,1611,1612,662,1611,1612,524,1613,663,524,1614,524,745,536,524,746,521],"165":[1615,1150,524,524,524,1616,1617,524,1618,536,524,524,524,1604,1605,524,1619,736,524,1154,536,524,527,521],"166":[1620,1150,524,1604,1621,736,524,1605,524,1154,536,524,1622,524,527,521],"167":[1623,1150,524,1604,1621,736,524,1605,524,1154,536,524,527,521],"168":[1624,1150,524,1622,524,1604,1621,736,524,1605,524,1154,536,524,527,521],"169":[1625,1626,521],"170":[1627,1628,521],"171":[1629,524,524,1630,1631,640,524,1632,536,524,524,524,1633,762,524,1634,521],"172":[1635,1636,524,525,1637,524,527,521],"173":[1638,1639,1640,524,1641,1642,1643,524,1644,663,524,1645,536,524,787,1646,1647,524,1648,521],"174":[1649,1639,1640,524,1641,1642,1650,524,1651,663,524,1652,536,524,787,1646,1647,524,1653,521],"175":[1654,1655,521],"176":[1656,1657,1632,536,524,1658,521],"177":[1659,1660,1661,524,1662,524,525,1663,524,527,521],"178":[1664,1665,1666,524,1233,1667,524,1668,524,1669,521],"179":[1670,1671,774,524,1672,521],"180":[1673,1674,521],"181":[1675,1676,521],"182":[1677,1678,521],"183":[1679,1678,521],"184":[1680,1681,524,1682,524,1683,521],"185":[1684,548,1685,524,550,1082,524,552,524,1686,1687,524,1688,524,1689,536,524,1690,521],"186":[1691,1692,524,1693,524,768,1694,536,521],"187":[1695,1696,1697,1698,1699,1700,1701,1702,1703,524,1704,524,527,521],"188":[1705,548,750,524,1706,521],"189":[1707,544,1708,524,1168,762,524,1709,521],"190":[1710,1711,521],"191":[1712,1713,1714,524,1715,524,733,1716,524,1717,1718,567,524,1719,1720,1721,662,1722,536,524,1723,521],"192":[1724,670,1725,524,802,1726,524,1727,1728,524,1639,1729,524,527,521],"193":[1730,1731,524,524,524,1732,524,1733,524,1111,1734,1735,1736,524,1737,536,524,1738,524,1739,524,1150,524,1740,1741,524,527,521],"194":[1742,1743,1065,524,1045,524,570,1744,736,524,1101,536,524,527,521],"195":[1745,544,1746,524,1747,1748,524,1749,524,1750,524,1751,521],"196":[1752,1753,521],"197":[1754,1755,524,1756,1757,536,524,527,521],"198":[1758,751,1759,524,1760,755,919,524,974,759,1761,941,684,663,524,917,761,762,521],"199":[1762,1763,1764,524,1765,524,1763,1766,524,1767,1768,524,1769,524,1770,524,1771,1772,524,1773,524,1774,1775,1776,1777,524,1778,524,1779,521],"200":[1780,1781,1782,1783,1784,1785,1786,524,1787,536,524,1788,524,1789,1790,524,817,818,524,1787,536,524,820,524,524,524,1791,1792,1793,524,1794,1795,1796,524,1797,1798,663,524,1799,1800,1801,1802,1803,1804,893,524,899,536,524,524,524,1805,1806,1807,1793,524,1808,1809,1810,1811,524,1812,1801,1802,1813,1804,893,524,899,536,524,524,524,1814,1815,640,524,1816,524,1817,1818,663,536,524,524,524,1819,1820,524,1821,640,524,1822,1823,524,1824,1825,524,1826,1827,536,524,524,524,1828,1829,1830,1831,1832,1833,524,1834,1835,761,1836,524,1837,536,524,1838,524,1839,1840,761,1841,524,1842,1843,1844,1845,524,1846,1847,1848,662,1849,524,1850,663,524,1851,524,1852,761,762,524,1853,1854,1855,1856,1857,524,1858,524,1842,1859,524,1860,536,524,1861,1862,524,1860,536,524,1863,1860,524,1864,1860,524,1865,1860,524,1866,1867,1868,524,1869,1870,524,1871,524,1872,521],"201":[1873,1874,524,1875,524,1876,1877,524,1878,1879,524,1880,1881,524,1882,1883,524,1884,1885,524,1866,1886,1887,536,524,1888,524,1889,521],"202":[1890,1891,1892,524,524,524,1893,1894,524,1895,536,524,524,524,733,1896,524,1897,524,1876,1898,1899,536,524,1878,1898,1900,536,524,1880,1898,1901,536,524,1882,1898,1902,536,524,1884,1898,1903,536,524,1904,1898,1905,536,524,1906,1898,1907,536,524,1908,521],"203":[1909,524,524,1910,1911,1180,524,1912,536,524,524,524,1913,1914,1915,524,1916,521],"204":[1917,1918,524,1919,1733,1920,524,1921,1922,1923,536,524,1924,1925,524,1926,1923,536,524,1927,524,1928,524,1929,1930,536,524,1931,1932,524,1933,521],"205":[1934,751,1935,524,1936,524,1937,524,917,755,1938,761,762,521],"206":[1939,1940,521],"207":[1941,1942,521],"208":[1943,548,1944,524,557,1945,1946,524,1947,1948,1949,524,1950,663,524,1951,1952,1953,1954,1955,567,524,568,536,524,527,521],"209":[1956,1957,521],"210":[1958,1959,1960,524,1961,524,1962,1963,524,1964,524,524,524,1965,919,1966,524,1967,1968,524,1969,1970,524,1971,1972,941,1973,524,1971,685,663,524,917,536,524,524,524,1974,1975,1976,524,1599,524,1977,1978,524,1979,912,524,1072,663,524,917,536,524,524,524,1980,524,1981,521],"211":[1982,544,1708,524,546,521],"212":[1983,548,1984,524,550,1082,524,1686,1985,524,1986,524,1689,536,524,1987,521],"213":[1988,1045,1104,524,559,1989,1990,524,1991,1101,536,524,527,521],"214":[1992,1993,524,1994,524,1995,524,1111,1996,1735,1997,524,1737,536,524,1998,524,527,521],"215":[1999,1726,524,2000,524,778,2001,2002,524,2003,783,524,1930,536,521],"216":[2004,2005,521],"217":[2006,552,524,2007,521],"218":[2008,2009,524,2010,2011,524,2012,536,524,1647,2013,2009,524,2014,524,2015,524,2016,524,2017,524,527,521],"219":[2018,698,524,524,2019,2020,662,2021,524,2022,663,756,524,524,2023,2024,663,524,2019,2025,524,2026,524,1093,920,524,757,2027,2028,2029,524,944,663,524,2030,524,946,2031,524,2032,663,524,917,761,762,521],"220":[2033,2034,521],"221":[2035,548,2036,524,1231,2037,524,2038,521],"222":[2039,2040,521],"223":[2041,670,2042,524,2043,521],"224":[2044,2045,697,524,2046,524,2047,521],"225":[2048,524,2049,2050,524,2051,536,524,2052,521],"226":[2053,2054,2050,524,2055,536,524,2052,521],"227":[2056,2057,524,525,2058,524,527,521],"228":[2059,1178,1179,1180,1181,1182,662,892,536,524,2060,521],"229":[2061,1048,1049,1050,1051,524,2062,536,521],"230":[2063,2064,2065,2066,524,2067,521],"231":[2068,1743,1433,524,1045,524,570,2069,524,2070,536,524,527,521],"232":[2071,2072,524,2073,521],"233":[2074,1104,524,1105,524,768,895,2075,524,535,536,521],"234":[2076,2077,521],"235":[2078,544,2079,524,974,2080,524,2081,2082,524,2083,663,524,2084,536,524,570,2085,2086,524,2087,536,521],"236":[2088,2089,524,1105,524,2090,2091,524,535,536,521],"237":[2092,2089,524,1105,524,2090,2093,2094,524,2095,2096,524,2097,2098,828,685,524,2099,663,524,2100,536,521],"238":[2101,524,524,2102,919,524,974,2103,524,2104,2105,524,2106,681,524,2107,524,2108,685,524,2109,663,524,917,536,524,524,524,2110,919,524,2079,524,974,2111,663,524,2112,524,524,678,2113,524,1971,685,662,524,524,678,2114,524,1971,685,663,524,917,536,524,524,524,2115,2116,728,524,974,524,524,2117,828,524,524,524,2118,1414,663,524,1244,536,524,524,524,524,524,2119,2120,2121,524,2122,2123,2124,524,2125,524,2126,524,2127,536,524,524,524,2128,524,2129,2130,2131,524,2132,2133,663,524,2134,536,524,524,524,2135,2136,524,733,2137,524,2138,524,2139,524,2129,2140,524,2141,536,524,524,524,2142,524,2143,2138,524,2144,524,2145,2146,2147,524,2148,2149,524,2150,663,524,2151,524,745,536,524,2138,524,1908,521],"239":[2152,2153,2154,524,524,524,2155,2156,2157,524,2158,536,524,524,524,2159,521],"240":[2160,1726,524,2161,2162,2163,2164,2165,524,2166,2167,524,2168,536,524,2169,2170,524,2168,536,524,2171,2172,922,524,2173,536,524,2174,2175,922,524,2176,536,524,2177,2178,922,524,2179,536,524,2180,2181,922,524,2182,536,524,2183,2184,524,2185,521],"241":[2186,2187,524,2188,521],"242":[2189,2190,524,2191,2192,524,2193,2194,2195,524,2196,536,524,2197,2198,524,2199,521],"243":[2200,548,2201,524,550,524,2202,2203,524,2204,521],"244":[2205,2206,524,2207,521],"245":[2208,670,800,524,2209,536,524,2210,2211,524,802,524,803,804,2212,2213,2214,808,2215,524,2216,917,524,2217,2218,524,2219,521],"246":[2220,548,2221,524,2222,524,2223,2203,524,2224,521],"247":[2225,2226,521],"248":[2227,670,671,524,2228,524,2229,2230,2231,524,920,524,2232,524,2233,1505,2234,524,2235,2236,524,2237,941,2238,2239,524,2240,2237,685,663,524,2241,524,2242,2243,2230,2244,524,920,524,2245,524,2246,2247,1505,2248,524,2249,2250,524,2235,2251,524,2237,941,2252,2239,524,2240,2237,685,663,524,2241,524,2242,2253,2254,2255,2256,761,2257,521],"249":[2258,548,2259,524,550,524,524,524,2260,2261,524,1233,1667,524,524,524,2262,2263,2264,524,2265,2266,524,2267,783,524,2268,536,524,2269,2270,524,524,524,2271,524,2272,521],"250":[2273,2274,521],"251":[2275,2276,521],"252":[2277,2278,524,2279,524,527,521],"253":[2280,2281,521],"254":[2282,2281,521],"255":[2283,2284,521],"256":[2285,2286,524,2287,524,527,521],"257":[2288,2289,521],"258":[2290,1045,524,1604,2291,2292,2293,524,853,536,524,527,521],"259":[2294,2295,524,2296,524,527,521],"260":[2297,2298,521],"261":[2299,2300,2301,524,2302,2303,524,2304,2305,2306,682,524,2307,685,663,536,524,1866,2308,2309,920,524,974,2310,2107,524,2237,941,1445,663,524,1506,524,2311,524,2312,2313,536,521],"262":[2314,2315,521],"263":[2316,2317,521],"264":[2318,2319,521],"265":[2320,2321,521],"266":[2322,998,2323,2324,524,2325,524,2326,524,917,999,2327,761,762,521],"267":[2328,751,2329,2330,524,2242,536,524,1743,524,524,524,2331,1115,2332,524,559,2333,2334,524,2335,781,662,783,536,524,1045,524,768,2336,955,736,663,524,1067,955,736,663,524,524,524,2337,524,2338,736,524,1101,536,524,527,521],"268":[2339,751,2340,524,2329,2341,524,2242,536,524,1743,550,524,1045,524,570,2342,524,2070,536,524,527,521],"269":[2343,548,2344,524,550,524,751,2329,2345,524,2242,536,524,1743,524,1045,524,570,2346,524,2347,2348,662,2349,2350,524,2348,663,536,524,527,521],"270":[2351,751,2352,2353,2354,2355,524,917,536,524,1743,524,2331,2356,524,2357,521],"271":[2358,751,752,524,2329,2359,524,2242,536,524,1743,1433,524,1045,524,570,2360,524,2070,536,524,527,521],"272":[2361,751,2329,2362,524,2242,536,524,1743,524,2363,524,2364,920,524,2365,2366,1445,524,828,685,524,2367,524,1448,663,524,2368,536,524,2357,521],"273":[2369,2370,2371,2372,2373,2374,2375,2376,2377,2378,2379,2380,2381,2382,2383,2384,2385,2386,2387,2388,2389,2390,2391,2392,2393,2394,2395,2396,2397,2398,2399,2400,2401,2402,2403,2404,2405,524,527,521],"274":[2406,548,750,524,2407,521],"275":[2408,1247,2409,524,1245,2410,524,1254,2411,524,1148,521],"276":[2412,2413,2414,2415,524,527,521],"277":[2416,998,2417,999,2418,761,762,521],"278":[2419,2420,2421,2422,2423,2424,2425,2426,2427,2428,2429,524,2430,2431,524,2432,2433,524,2434,536,524,2435,521],"279":[2436,778,1930,536,521],"280":[2437,2438,524,525,2439,524,527,521],"281":[2440,1150,2441,524,2442,2443,2444,524,2445,2446,2447,2446,536,524,527,521],"282":[2448,2449,524,2450,521],"283":[2451,524,524,2452,2453,524,524,2454,828,524,2455,2456,2457,524,524,524,2458,828,524,524,524,2459,524,2460,2461,2462,2463,2464,2461,941,2465,524,524,524,2466,2467,524,2468,2469,2470,2471,2472,2473,524,2474,685,663,536,524,524,524,524,2475,2476,728,524,2477,524,2478,2479,2480,2481,2464,1414,941,2465,663,524,1244,536,524,524,524,2482,2483,524,2484,524,2485,2486,524,524,524,2487,524,2488,2489,2490,524,2491,2492,536,524,524,524,2493,521],"284":[2494,2495,524,2496,524,2497,524,2498,524,2499,2500,524,527,521],"285":[2501,1995,2502,524,2503,524,1111,2504,1735,2505,524,1737,536,524,2506,524,527,521],"286":[2507,2508,521],"287":[2509,2510,521],"288":[2511,2512,524,2513,521],"289":[2514,1045,524,2515,2444,524,2516,955,536,524,527,521],"290":[2517,2518,2519,524,2520,524,1045,524,2521,2522,955,2523,2524,684,524,2525,524,2526,662,892,536,524,527,521],"291":[2527,2528,2529,524,2530,521],"292":[2531,2518,2532,524,2520,524,1045,2533,2534,524,2535,524,768,2536,524,2537,2348,524,736,663,524,2538,2539,1971,663,536,524,527,521],"293":[2540,2541,2542,521],"294":[2543,764,524,2515,2544,524,2545,536,524,527,521],"295":[2546,2547,521],"296":[2548,787,524,2549,1037,524,527,521],"297":[2550,548,2551,524,2552,524,2553,521],"298":[2554,524,524,2555,2556,524,2557,640,536,524,524,524,2558,524,2559,1475,524,524,524,2560,524,2561,521],"299":[2562,2563,524,2564,521],"300":[2565,2566,521],"301":[2567,2568,521],"302":[2569,2555,2570,2571,2572,524,2573,524,640,663,536,524,2574,2528,2575,524,2576,521],"303":[2577,2563,524,2578,521],"304":[2579,2563,524,2580,521],"305":[2581,2563,524,2582,521],"306":[2583,2574,2528,2575,524,2584,521],"307":[2585,2586,2587,524,524,524,2588,2589,1920,1919,524,2590,2591,524,2592,2593,2594,2595,662,892,536,524,524,524,2596,2597,2598,524,2599,2600,524,2601,663,524,2602,2603,524,2604,2605,536,524,524,524,2606,2607,524,2608,536,524,524,524,2609,1923,536,524,524,524,2610,1926,536,524,524,524,2611,2612,2613,524,2614,524,778,2615,783,524,2616,2617,524,1930,536,524,2618,2619,524,2620,2621,524,1933,521],"308":[2622,524,524,2623,2624,2625,524,2626,2627,524,2628,524,2629,2630,524,1199,2631,2632,663,524,2633,524,2634,536,524,524,524,524,524,2635,2636,2637,2638,2639,2640,2641,2642,2643,2644,524,524,524,2645,2646,2647,2648,2649,2650,524,524,524,2651,524,2652,524,524,524,2653,2654,524,2655,524,2656,524,524,524,2657,524,2658,524,524,524,2659,524,524,524,2660,524,2661,2662,524,2663,2664,524,2665,2666,524,2667,2668,524,524,524,2669,524,2506,524,527,521],"309":[2670,2671,2672,524,2673,536,524,2674,524,2675,2676,2677,2678,2679,2680,2681,733,524,2682,2683,2684,2685,2686,2687,524,2688,536,524,1908,521],"310":[2689,2690,2691,1482,524,2692,2693,2694,2695,524,2696,2697,524,2698,2697,524,2699,2697,524,2700,2701,2702,524,2703,2697,524,527,521],"311":[2704,2705,524,2706,521],"312":[2707,2708,2709,2710,536,524,1148,521],"313":[2711,2708,2712,2710,536,524,1148,521],"314":[2713,2714,578,524,2715,521],"315":[2716,2717,1244,524,2718,1244,524,1249,521],"316":[2719,1230,578,524,2720,2721,2722,524,2723,578,524,2724,521],"317":[2725,1230,578,524,2720,2721,2722,524,2723,578,524,2726,521],"318":[2727,1230,578,524,2720,2721,2722,524,2728,521],"319":[2729,2714,578,524,2730,521],"320":[2731,2555,2732,524,2624,2733,2734,728,663,524,2735,524,2736,2737,524,2738,2739,2740,2741,524,1414,685,663,524,2742,524,1244,2743,2624,2744,2734,728,663,524,1244,761,578,521],"321":[2745,1230,578,524,2720,2721,2746,524,2723,578,524,2747,521],"322":[2748,1995,2749,524,1111,1996,1735,2750,524,1737,536,524,2751,524,527,521],"323":[2752,2753,521],"324":[2754,1045,524,1866,2755,2756,2757,524,2758,2759,524,2760,2761,524,527,521],"325":[2762,2763,521],"326":[2764,524,524,2765,2766,2767,2768,2769,524,2770,2771,524,2772,640,524,2773,524,2774,524,2775,524,2776,2777,536,524,524,524,2778,2607,524,2779,536,524,524,524,2780,2607,2781,524,2782,536,524,524,524,2783,2784,2785,662,892,524,2786,2787,536,524,524,524,2788,2789,2790,524,2791,524,2792,2793,536,524,524,524,2794,524,2795,2796,2797,524,2798,2799,524,2800,2801,2802,524,2803,1930,536,524,2804,2805,524,2806,2807,524,2808,524,2809,524,2810,521],"327":[2811,524,524,2812,2813,524,1932,536,524,524,524,2814,2815,2816,2817,2613,524,2818,2819,524,524,524,2820,524,527,521],"328":[2821,2822,2823,2824,2825,524,2826,524,2827,2828,2829,524,2830,663,524,2831,524,2832,536,524,733,524,2833,2834,524,2827,2835,524,2836,524,2837,521],"329":[2838,670,2839,524,2840,536,524,787,524,2841,524,2842,524,527,521],"330":[2843,2844,521],"331":[2845,524,524,2846,614,524,2847,2848,524,2849,2850,2851,2852,2851,536,524,2853,2854,524,2855,536,524,2856,2857,1703,524,2858,521],"332":[2859,524,524,2765,2766,2860,2861,2862,524,2863,2864,2865,524,2866,524,2867,640,524,2868,894,2869,524,899,524,2870,536,524,524,524,2778,2607,524,2871,536,524,524,524,2780,2607,524,2872,536,524,524,524,2783,2784,2785,662,892,524,2786,2787,536,524,524,524,2873,524,2792,2793,536,524,524,524,2794,524,2795,2796,2797,524,2798,2799,524,2800,2801,2802,524,2803,1930,536,524,2804,2874,524,2875,2876,524,2808,524,2877,524,2878,521],"333":[2879,1045,2880,2332,524,2881,524,768,2882,831,524,2883,2884,2885,2886,2887,524,853,536,524,527,521],"334":[2888,2889,2890,2891,2892,2893,2806,2894,2807,2895,524,2896,524,2810,521],"335":[2897,2889,2890,2891,2898,524,2899,521],"336":[2900,2901,2789,2902,2903,524,2904,524,527,521],"337":[2905,2906,2907,524,2908,524,917,536,524,2909,524,2910,521],"338":[2911,2912,521],"339":[2913,2914,521],"340":[2915,2916,524,2917,521],"341":[2918,2919,521],"342":[2920,670,2921,524,787,524,524,524,2922,524,2923,524,2924,2925,2926,524,2559,1475,524,2927,2928,524,524,524,778,2929,2930,2931,2932,524,2933,2934,524,2935,524,2936,686,536,521],"343":[2937,2938,2939,524,2940,2941,524,524,524,2942,783,524,524,524,2943,2944,524,2945,524,2946,2947,524,2948,941,2949,2950,2951,524,2952,941,2953,662,892,524,524,524,2954,536,521],"344":[2955,2956,2957,524,2958,524,2959,524,524,2444,524,2960,2961,524,2962,2963,2964,524,2962,2965,2966,524,2962,2967,524,524,2968,524,2969,2970,524,524,524,2971,685,663,536,524,2972,521],"345":[2973,2974,524,2975,521],"346":[2976,524,524,2977,2978,2979,2980,524,2981,524,2982,536,524,524,524,2983,524,2984,524,2985,521],"347":[2986,2987,2988,524,527,521],"348":[2989,2990,524,2991,521],"349":[2992,1150,524,2993,2994,2995,2996,2997,2998,524,527,521],"350":[2999,1150,3000,524,3001,3002,3003,3004,3005,3006,3007,3008,3009,3010,524,3011,3012,3013,3014,3015,3016,3017,3018,524,3019,536,524,527,521],"351":[524,524,3020,558,3021,3022,3023,2769,3024,3025,524,559,3026,783,524,524,524,3027,524,3028,3029,3030,524,736,663,524,524,524,734,3031,524,3032,3033,524,736,663,524,524,524,3034,3035,524,3036,3037,524,734,3037,524,524,524,3038,3031,524,3032,3039,3040,524,736,663,524,524,524,3041,3042,524,3043,3044,3045,524,3046,524,3047,3048,524,912,685,663,524,524,524,3049,3031,524,3032,3039,3050,3051,524,736,663,524,3052,3053,536,524,3054,3055,3056,524,524,524,3057,3058,524,527,521],"352":[3059,3060,3061,524,3062,3063,524,3064,3065,524,524,524,3066,1179,3067,524,3068,3069,524,3070,3071,3072,524,3073,662,892,536,524,524,524,3074,1179,3067,524,3068,3075,524,3070,3071,3072,524,3076,662,892,536,524,524,524,3077,3078,524,3079,524,3080,536,524,524,524,3021,3081,3082,3083,524,3084,521],"353":[3085,524,524,3086,3087,3088,524,3089,521],"354":[3090,3091,521],"355":[3092,2651,3093,524,3094,3095,3096,524,3097,524,3098,3099,3100,3101,3102,3103,761,762,524,3104,3105,3106,524,527,521],"356":[3107,2558,524,2559,1475,524,2927,2928,3108,3109,524,3110,3111,524,3112,3113,524,3114,524,778,3115,3116,3117,524,2946,913,524,736,663,524,3113,536,521],"357":[3118,524,524,3119,524,3120,919,524,3121,3122,524,3123,3124,663,524,917,536,524,524,524,1150,3125,3126,524,3127,3128,3129,3130,3131,3132,3133,3134,524,3135,524,3136,524,3137,524,3138,524,3139,524,3140,524,3141,536,524,527,521],"358":[3142,521],"359":[3143,3144,524,3145,521],"360":[3146,3147,521],"361":[3148,2909,524,3149,521],"362":[3150,3151,524,524,524,1767,1768,1770,524,1771,1772,524,3152,524,3153,1776,1777,524,3154,524,524,524,524,524,3155,521],"363":[3156,3157,3158,524,524,524,3159,920,3160,524,3161,524,745,524,3162,524,745,524,3163,524,745,3164,3165,3166,1898,3167,524,3168,536,524,524,524,3169,920,3170,3171,3172,3160,524,524,524,3161,524,745,524,3162,524,745,524,3163,524,745,3164,524,3173,3174,524,745,1898,524,524,524,3175,3176,3166,1898,3167,1898,524,524,524,2478,3177,3178,3179,3180,3181,524,3182,524,3183,524,1448,3184,524,3185,3186,524,1448,524,3187,3188,524,1448,524,3189,3190,663,524,3191,524,3168,536,524,524,524,3192,3193,920,524,3194,3195,3196,3197,3198,524,3199,524,745,524,3200,524,745,524,3201,524,745,524,3202,3203,3204,3205,524,2242,536,524,524,524,3206,3207,524,3208,524,3209,524,3210,524,917,536,524,524,524,3211,3212,3213,524,3214,3215,524,3216,524,3217,663,524,3218,536,524,524,524,3219,3220,3221,524,3222,3223,663,536,524,524,524,3224,3225,524,3226,3227,761,3228,524,3229,3230,524,3231,3232,524,3233,524,3234,524,3235,3236,524,3237,3238,524,3239,3240,521],"364":[3241,3242,2499,2500,3243,524,527,521],"365":[3244,3245,3246,3247,761,3246,521],"366":[3248,3249,521],"367":[3250,1713,3251,524,1715,524,524,524,3252,920,524,3253,3254,524,1448,663,524,1449,536,524,524,524,3255,524,3256,3257,524,1719,3258,3259,524,3260,3261,662,3262,3263,3264,3265,524,3260,3261,3266,3267,663,524,3268,524,3269,536,524,524,524,3270,727,728,524,1719,3271,524,3272,3273,3274,3275,3276,524,974,3277,3278,524,3279,3280,524,3281,3282,524,3283,3284,524,3285,3286,663,524,3287,728,524,3288,728,524,3289,728,524,3290,728,524,3291,728,524,1244,536,524,524,524,3292,727,728,524,1511,728,524,974,3293,1414,663,524,1244,536,524,524,524,778,3294,524,3295,686,663,536,521],"368":[3296,3297,521],"369":[3298,3299,3300,524,3301,3302,524,3303,524,3304,3305,3306,3307,761,762,521],"370":[3308,3309,3310,524,3311,3312,524,3313,3314,524,899,536,524,527,521],"371":[3315,3316,524,3317,3318,521],"372":[3319,3320,3321,521],"373":[3322,3323,3324,524,3325,521],"374":[3326,3327,524,3328,3329,524,3330,521],"375":[3331,3332,3333,3334,524,2559,3335,524,3336,3337,521],"376":[3338,3332,3333,3334,524,2559,3335,524,3339,3337,521],"377":[3340,3341,524,3342,521],"378":[3343,3344,521],"379":[3345,1230,578,524,3346,524,3347,578,524,3348,521],"380":[3349,1230,578,524,3346,524,3347,578,524,3350,521],"381":[3351,2939,524,2940,2941,524,524,524,2942,783,524,524,524,2946,3352,2950,3353,662,892,524,524,524,2954,536,521],"382":[3354,3355,3356,524,3357,521],"383":[3358,3359,3360,3361,524,3362,3363,524,3364,3365,662,3366,536,524,3367,3364,3368,662,3369,536,524,527,521],"384":[3370,3371,3372,524,3373,524,524,524,3374,3375,3376,3377,524,3378,3379,524,3380,3381,524,3382,524,3383,3384,524,3385,536,524,524,524,3386,524,3387,3388,3389,524,3123,3390,663,524,762,536,524,524,524,3391,919,524,3388,3389,524,3392,3124,663,524,917,536,524,524,524,1150,3393,3126,524,3394,3395,524,3127,3128,3129,3130,3396,3397,3131,3132,3398,3399,3400,3401,3402,3403,524,3135,524,3404,524,3405,3406,3407,524,3408,524,3409,524,3410,524,3411,524,3412,663,524,3141,536,524,527,521],"385":[3413,524,524,3414,524,3415,3416,3417,524,3418,663,524,3419,524,3420,3421,524,640,663,524,524,524,752,524,3422,3423,524,3424,524,3425,536,524,524,524,3426,2019,3427,524,3428,524,3423,524,524,524,3429,3430,3431,524,3432,3433,524,524,524,3434,3435,3436,524,3437,3438,524,524,524,3439,3440,3441,524,3442,3443,536,524,524,524,3444,3445,536,524,524,524,524,524,3446,524,3447,3448,3449,3450,3451,3452,3453,3454,3455,3456,3457,3458,3459,3460,3461,3462,3463,3464,3465,3466,3467,3468,3469,3470,3471,3472,3473,3474,3475,3476,3477,524,3478,3479,524,3480,3481,3482,3483,3484,3485,3486,524,3487,3488,3489,524,3490,524,3491,524,3492,524,3493,3494,3495,3496,524,3497,3498,3499,524,3500,3501,3502,3503,3504,3505,3506,3507,3508,3509,3510,3511,3512,3513,3514,524,3515,3516,3517,3518,3519,3520,3521,3522,3523,3524,3525,3526,3527,3528,3529,3530,524,3531,3532,3533,3534,3535,3536,3537,3538,3539,3540,3541,3542,3543,3544,3545,3546,3547,3548,3549,3550,3551,3552,3553,3554,3555,3556,3557,3558,524,3559,3560,3561,3562,3563,3564,3565,3566,3567,3568,3569,3570,3571,3572,3573,3574,3575,3576,3577,3578,3579,3580,3581,3582,3583,3584,3585,3586,3587,3588,3589,3590,3591,3592,3593,3594,3595,3596,3597,3598,3599,524,1933,521],"386":[3600,733,524,570,3601,524,3602,735,662,3603,663,536,524,1723,521],"387":[3604,3605,3606,3607,3608,3609,524,527,521],"388":[3610,1755,524,3611,3612,524,3613,536,524,527,521],"389":[3614,3615,524,3616,524,527,521],"390":[3617,3618,521],"391":[3619,3620,524,3616,524,527,521],"392":[3621,3622,521],"393":[3623,3624,521],"394":[3625,3626,521],"395":[3627,548,3628,524,3629,536,524,1433,524,3630,521],"396":[3631,3632,524,3633,3616,524,527,521],"397":[3634,3635,521],"398":[3636,3637,521],"399":[3638,3639,521],"400":[3640,3641,521],"401":[3642,3643,521],"402":[3644,3645,521],"403":[3646,3647,3648,524,3649,3650,524,527,521],"404":[3651,3652,521],"405":[3653,3654,521],"406":[3655,3656,524,3633,3616,524,527,521],"407":[3657,3658,3659,524,3660,524,3661,3662,3663,3664,3665,524,3666,521],"408":[3667,3668,524,3633,524,527,521],"409":[3669,3670,521],"410":[3671,3672,521],"411":[3673,3674,521],"412":[3675,3676,521],"413":[3677,3678,521],"414":[3679,3680,521],"415":[3681,3682,521],"416":[3683,524,524,3684,2352,2353,2354,524,917,536,524,524,524,3685,919,3686,524,3043,3687,524,3688,3689,524,1971,524,828,685,524,3690,524,2348,524,3691,828,524,3692,3693,524,1971,524,3694,3695,685,663,524,917,536,524,524,524,3696,3697,524,3698,536,524,524,524,3699,3697,524,3700,536,524,524,524,1465,524,3701,3702,524,3703,524,524,524,3704,3705,524,3706,3707,3708,524,3709,663,524,3710,524,3711,536,524,524,524,3712,524,3713,3714,3715,3716,3717,524,3718,536,524,3719,524,524,524,3720,524,3721,3722,524,3723,3724,524,3725,3726,524,2064,3727,3728,524,3729,524,524,3730,524,3731,3732,524,3733,3734,524,524,3730,524,3735,3736,3737,524,3738,3739,3740,3741,524,524,3742,3730,524,3738,3743,524,524,3744,3731,3745,524,3746,524,3747,3748,524,3749,663,524,524,524,3750,524,3733,3751,524,524,3731,3745,3732,524,3733,761,524,524,3738,524,3731,3745,3736,524,3752,3753,524,524,524,3747,3748,3754,3755,524,3756,663,524,524,524,3740,536,524,3757,521],"417":[3758,3759,521],"418":[3760,3761,524,3762,524,527,521],"419":[3763,3764,524,3616,524,527,521],"420":[3765,3766,521],"421":[3767,3768,521],"422":[3769,3770,524,3771,524,527,521],"423":[3772,524,524,3773,524,3774,524,3775,524,3776,3777,524,3778,3779,3780,3781,536,524,3782,524,524,524,3783,3784,2093,524,3785,3786,524,3787,3788,662,3789,524,2095,2096,3790,524,3791,3792,3793,3794,524,3795,941,2465,524,3796,3797,663,524,3798,536,524,3799,521],"424":[3800,3801,521],"425":[3802,548,3803,524,3804,521],"426":[3805,3806,521],"427":[3807,3808,524,3616,524,527,521],"428":[3809,3810,521],"429":[3811,3812,524,3633,3616,524,527,521],"430":[3813,3814,521],"431":[3815,3816,3817,3818,3819,3820,521],"432":[3821,3822,578,524,3823,578,524,3824,578,524,580,521],"433":[3825,3826,524,3827,3828,524,527,521],"434":[3829,3830,524,3831,3832,524,527,521],"435":[3833,3834,3835,524,3836,536,524,3837,524,3838,521],"436":[3839,3840,524,3841,1450,524,3842,3843,524,3844,524,3845,3846,3847,3848,524,3849,3850,524,3325,521],"437":[524,524,3851,3852,1462,3853,524,3854,3855,524,3856,3857,524,736,663,524,3858,524,3859,3857,524,736,663,524,3860,536,524,3861,524,3325,521],"438":[3862,3863,3864,3865,524,3866,3867,521],"439":[3868,524,524,3869,1093,3870,524,3121,3122,524,3871,828,524,3872,663,524,917,536,524,524,524,3873,3874,524,3875,3876,524,3877,1051,524,3878,524,3395,536,524,524,524,3879,3880,524,3881,3882,736,524,3883,524,3884,1051,524,3885,536,521],"440":[3886,524,524,3887,3888,3889,3890,524,3891,3892,3893,536,524,524,524,3894,3895,3896,524,3897,3898,524,3899,3900,662,3901,524,3902,3903,3904,3905,524,3906,536,524,524,524,3907,524,3908,3909,524,3910,524,3911,521],"441":[3912,3913,524,3914,3915,3916,524,3121,3122,524,524,524,1602,828,524,3917,524,3918,3919,3920,663,536,524,3921,3922,524,3923,3924,536,524,527,521],"442":[3925,3926,3927,524,3928,3929,1049,3930,524,3931,736,524,524,524,3932,736,524,3933,3934,524,3935,736,524,524,524,3936,524,3937,1051,524,3938,524,524,524,3939,536,524,524,524,3940,3941,521],"443":[3942,3943,524,3944,3945,524,524,524,3946,3947,524,3948,3949,524,3950,3951,524,3952,524,3953,524,3954,524,3955,3956,524,3957,524,524,524,3958,524,524,524,3959,524,527,521],"444":[3960,3961,524,1604,1605,524,524,524,3931,736,524,3962,3963,524,3964,3965,524,3966,524,3967,536,524,3968,524,3969,521],"445":[3970,3908,3909,524,3910,524,3971,521],"446":[3972,3926,524,3973,521],"447":[3974,2990,3975,3976,3021,524,3977,3978,524,527,521],"448":[3979,1465,3980,524,1767,1768,3981,1770,524,3982,524,3983,1775,1776,1777,524,3984,521],"449":[3985,3986,3987,1703,524,3988,524,3989,524,3990,3991,3992,524,3993,524,3994,524,2498,524,3995,524,3996,524,527,521],"450":[3997,3998,524,3999,524,4000,524,4001,4002,4003,524,4004,521],"451":[4005,4006,524,4007,524,4008,4009,524,4010,524,4011,536,524,527,521],"452":[4012,4006,3998,524,4013,524,4004,521],"453":[4014,4015,3998,524,4016,524,4004,521],"454":[4017,1045,4018,524,4019,4020,4021,524,4022,4023,524,917,536,524,4024,524,4025,524,4026,524,4027,4028,4029,524,4030,4031,524,527,521],"455":[4032,3998,524,4033,4034,4035,524,4004,521],"456":[4036,4006,3998,524,4037,524,4004,521],"457":[4038,4006,524,1045,4039,4029,4040,524,4030,4031,524,527,521],"458":[4041,4042,521],"459":[4043,4044,521],"460":[4045,4046,521],"461":[4047,1045,4048,4034,4049,4034,4050,4029,4040,524,4030,4031,524,527,521],"462":[4051,4052,521],"463":[4053,4054,521],"464":[4055,4056,521],"465":[4057,4024,3998,524,4058,524,4059,524,4060,524,524,524,1148,521],"466":[4061,4024,3998,524,4062,524,4063,524,4064,524,4004,521],"467":[4065,4066,3998,524,4067,521],"468":[4068,3998,524,4069,524,4019,4070,761,4071,524,4072,536,524,4004,521],"469":[4073,4015,3998,524,4016,4074,524,4004,521],"470":[4075,3998,524,4048,4076,524,4004,521],"471":[4077,4006,524,1045,4078,4029,4018,524,4030,4031,524,527,521],"472":[4079,4066,3998,524,4080,521],"473":[4081,1045,4048,4034,4082,4029,4040,524,4030,4031,524,527,521],"474":[4083,3998,524,4019,4084,524,4085,536,524,4048,4086,524,4004,521],"475":[4087,1045,524,4088,4089,524,4090,524,853,536,524,524,524,4091,4092,524,4093,4094,524,4095,4096,524,527,521],"476":[4097,1045,524,4088,4089,524,4090,524,853,536,524,524,524,4098,4099,4100,524,4101,4102,524,4103,4104,536,524,527,521],"477":[4105,3998,524,4025,524,4026,524,4106,4107,4108,4109,524,4004,521],"478":[4110,1045,4048,4111,4034,4050,4029,4040,524,4030,4031,524,527,521],"479":[4112,1045,4048,4034,4113,4029,4040,524,4030,4031,524,527,521],"480":[4114,524,524,4115,4116,1180,524,4117,4118,524,4119,524,4120,4121,524,4122,4123,524,4124,663,524,762,536,524,524,524,1045,4125,524,4126,524,4127,4128,524,4129,4130,524,4131,736,524,4132,4133,524,4134,536,524,4135,4136,4137,4109,4029,4018,524,4030,4031,524,527,521],"481":[4138,1045,524,4139,4140,524,4141,536,524,527,521],"482":[4142,4143,4144,524,4145,614,524,4139,4146,4147,662,736,524,4148,524,4149,640,536,524,4150,615,4151,524,623,521],"483":[4152,4153,4154,524,4155,524,4156,524,4157,524,4158,524,4159,4160,1244,536,524,4161,524,1249,521],"484":[4162,524,524,4163,919,524,4164,4165,4166,524,4167,4168,524,828,685,524,4169,524,4170,663,524,917,536,524,524,524,4171,4172,4173,4174,524,4175,524,4176,4177,4178,524,3223,685,663,524,4179,4180,4181,4182,4183,4184,4185,524,4186,524,4187,4188,524,4189,4190,4191,524,828,685,524,4192,524,4193,524,4119,524,4194,4195,524,4196,4191,524,828,685,524,4197,524,4198,4199,4200,524,4201,4202,4203,4204,4205,524,4206,663,524,4207,524,4208,524,917,536,524,524,524,4209,4210,4211,524,4212,4213,4214,4215,524,4216,4217,524,681,682,4218,4219,524,828,685,524,4220,663,524,4221,536,524,524,524,4222,4223,731,524,4224,731,524,578,536,524,524,524,4225,521],"485":[4226,4227,4228,4229,524,4230,524,4231,4232,524,1111,4233,4234,1735,4235,524,1737,536,524,4236,521],"486":[4237,4238,524,4239,521],"487":[4240,4241,524,524,524,4242,919,4243,4244,945,4245,524,4246,4247,524,4248,4249,4250,4251,4252,524,4253,941,2465,663,524,4254,4255,4256,4257,4258,4259,524,853,524,3747,4260,524,4261,4262,685,524,4263,663,524,4264,4265,4266,524,4267,663,524,917,536,524,524,524,4268,895,4269,4270,524,898,524,4271,4272,894,524,899,536,521],"488":[4273,524,524,4163,4274,4275,4276,524,4277,4278,524,4279,4280,4281,941,912,663,524,4183,524,4282,4283,524,4284,663,524,4285,4286,4287,524,4288,536,524,524,524,1045,4289,524,4290,4291,524,853,536,524,527,521],"489":[4292,524,524,4163,919,524,4164,4293,4166,524,4167,4168,524,828,685,524,4294,524,4295,663,524,917,536,524,524,524,4296,919,4243,524,4297,4298,4183,4299,4300,524,4301,524,4302,4303,4304,4299,4305,524,4306,524,4297,4307,4183,4299,4308,524,4309,524,4297,4310,4183,4299,4311,524,4312,524,917,536,524,524,524,4225,521],"490":[4313,524,524,4314,524,4315,4316,524,4317,686,524,4318,524,4319,524,917,536,524,524,524,524,524,733,524,4320,4321,536,524,983,4322,4323,524,4320,4324,4256,524,4325,4326,524,4327,524,4328,4329,536,524,4330,524,1002,4331,4332,4333,4334,524,4335,4336,524,4337,663,524,4338,536,524,524,524,4339,4340,524,4341,524,524,524,4342,4343,4344,524,4345,524,524,524,4346,4347,524,4348,524,524,524,4349,4350,524,4351,524,4352,4353,524,4354,524,524,524,4355,4356,524,4357,524,524,524,4358,4359,4360,524,4361,524,524,524,4362,524,1908,521],"491":[4363,524,524,4364,4365,4366,4367,4368,4369,4370,524,4371,4372,524,4373,4374,662,4375,524,4376,4372,4377,524,4378,524,4379,663,524,4380,4381,4382,1051,524,4383,524,4384,524,4385,524,4386,524,4387,524,4388,536,524,524,524,4389,4390,640,524,4391,4392,524,4393,536,524,524,524,4394,919,524,974,4395,524,2526,663,524,917,536,524,524,524,4396,4397,524,4398,4399,524,4400,736,524,4401,524,4402,536,521],"492":[4403,524,524,4404,524,4405,2946,4406,524,4407,663,524,4408,4409,524,4410,536,524,524,524,4411,4412,4413,987,4414,4415,4416,4417,524,4418,521],"493":[4419,4420,1244,524,524,524,4421,4422,728,536,524,580,521],"494":[4423,4424,578,524,4425,4426,524,4427,1244,524,4428,524,4429,521],"495":[4430,1045,4431,4432,4433,4434,4435,3126,524,3127,4436,2146,4437,4438,4439,524,853,536,524,527,521],"496":[4440,4153,4441,524,4155,524,524,524,4442,524,524,4443,1022,4444,4445,4446,4447,524,4448,524,1784,524,4449,524,4450,4451,1804,893,524,899,524,4452,640,524,4453,4454,4455,4456,4457,4458,4459,4272,524,899,524,4460,4457,4461,4272,524,899,524,524,524,4462,4463,524,4464,524,1027,4465,1029,524,4466,912,524,4467,663,524,4468,4469,4470,524,4471,524,614,536,524,524,524,1111,4472,1735,578,536,524,580,521],"497":[4473,524,524,4474,727,728,524,4475,731,524,4476,731,524,578,536,524,524,524,4477,524,4478,4479,524,4480,4481,4482,524,686,663,524,4483,524,4484,4485,524,4486,524,917,536,524,4487,4488,524,527,521],"498":[4489,524,524,4163,919,4490,524,4277,4491,4492,524,2738,4493,4494,4495,524,4496,685,524,2526,663,524,917,536,524,524,524,4497,919,4498,4243,4255,4499,524,4500,4501,4502,524,4503,4504,4505,524,4506,4507,4203,4508,524,4509,524,4510,4511,4203,4512,524,4513,524,4514,4515,4516,4517,524,4518,524,4519,4520,4521,4522,4523,524,4524,524,4525,685,524,686,4526,4506,4527,4203,4508,524,4509,524,4510,4511,4203,4512,524,4513,524,4514,4528,4516,4517,524,4518,524,4519,4520,4521,4522,4523,524,4524,524,4525,685,524,686,663,524,4304,4185,524,4022,524,917,536,524,524,524,4529,4530,731,524,4531,731,524,578,536,524,524,524,4532,4533,731,524,4534,731,524,4535,731,524,578,536,524,524,524,4225,521],"499":[4536,4537,987,524,4538,4539,4540,524,4541,536,524,997,524,4320,4542,4543,4544,1010,1011,1012,524,1013,536,524,4545,524,4546,521],"500":[4547,1045,524,4139,4548,4549,4550,4551,524,639,736,524,524,524,4552,524,4553,4554,828,663,524,4183,4555,524,4022,536,524,527,521],"501":[4556,524,524,4557,4558,4559,828,524,4560,4561,524,4562,3223,524,4563,524,4564,663,524,4565,4566,524,4567,686,524,4568,524,4569,536,524,524,524,4426,4570,4571,4572,524,1111,4573,1735,4574,524,1737,536,521],"502":[4575,4576,4577,524,4578,4579,1045,524,4580,2683,4581,524,4582,4583,736,663,524,2685,4584,2687,524,4585,536,524,1041,1037,524,4586,524,527,521],"503":[4587,1246,774,524,1247,774,524,1243,774,524,1245,774,524,1254,4588,524,4589,524,4590,4591,524,4592,4593,524,4594,536,524,4595,4596,524,623,521],"504":[4597,1557,4598,4599,4600,4601,4602,4603,4604,4605,662,4606,4607,4608,524,4609,663,536,524,4610,521],"505":[4611,2072,524,2300,4612,4613,4614,4615,662,4616,536,524,4617,524,4618,4619,524,4620,536,524,4621,521],"506":[4622,4623,4624,4625,524,4626,521],"507":[4627,4623,4628,4629,4630,524,4631,521],"508":[4632,4633,524,4634,521],"509":[4635,4636,524,4637,521],"510":[4638,4639,521],"511":[4640,4636,524,4641,521],"512":[4642,4643,524,4644,521],"513":[4645,4646,4647,524,4648,521],"514":[4649,4650,524,4651,524,4652,521],"515":[4653,4654,524,4655,521],"516":[4656,4657,524,2052,521],"517":[4658,524,524,4659,974,4660,524,4661,1414,663,524,1244,536,524,524,524,1045,2441,4662,4663,524,4664,4665,3376,524,1023,4666,4667,4668,524,4669,663,536,524,4670,524,4671,524,527,521],"518":[4672,3299,4673,4674,524,4019,4675,524,614,536,524,4676,524,4677,4675,524,614,536,524,524,524,4678,524,4679,4680,524,3986,524,3989,524,4681,524,4682,524,4683,614,524,3996,524,524,524,4684,614,524,4685,4686,4687,4688,4689,4156,4690,4691,524,4692,2823,2825,524,4693,4694,524,1059,536,524,2827,4695,4696,524,4697,663,536,524,524,524,4698,524,4699,524,1055,4700,4701,4702,4703,4704,4705,1051,524,1059,536,521]}
const fns={abs,add,and,angle,append,arr,asc,at,back,base36_decode,base36_encode,between,brace,bracket,byte_size,capture,char_escape,check_arg,check_arity,check,chr,clear,clone,cmp,collate,concat,contain,count,crc,cut_l,cut_r,date_decode,date_str,dbg_backtrace,dbg_callstack,dbg_here,dbg_origin_xs,dbg_origin,dbg_source_map,dbg_source,dec,dedup,deinit_common,delimit,different,div,drop,dump,dup,eq,every,explode,extract,fallback_error,filter,find,flower_box,flower,fn_args,fn_match,fn_select,front,get_type,get,gt,gte,has,head,iif,implode,inc,init_common,insert,is_access,is_alnum,is_alpha,is_arg,is_arr,is_atom,is_blank,is_bool,is_browser,is_char,is_comment,is_composite,is_container,is_cool,is_def,is_digit,is_domain,is_empty,is_false,is_fn,is_fragment,is_full,is_gn,is_identifier,is_indented,is_int,is_ip,is_ip4,is_ip6,is_json,is_key,is_last,is_lisp,is_lit_char,is_lit,is_ln,is_lower,is_mail,is_many,is_name,is_node,is_none,is_noun,is_null,is_num,is_numeric,is_obj,is_pair,is_punct,is_single,is_space,is_str,is_token,is_trivia,is_true,is_tuple,is_txt,is_uint,is_undef,is_upper,is_url,is_user,is_ushort,is_vec,is_word,is_xn,is_rgb,join,json_decode,json_dump,json_encode,log_append,log,lt,lte,main,map,match_l,match_r,match,max,min,mod,mul,mute,neq,nop,not,obj_keys,obj_length,obj_merge,obj_option,obj_order,obj_push,obj_remove,obj_unshift,obj_vals,obj,on,or,pad_l,pad_r,paren,partial,path_concat,path_file,path_fix,path_join,path_split,path_strip,path_unfix,path_up,pop,prepend,profile,push,put,quote,random_str,random,record,reject,remove,repeat,replace_rec,replace,report_html,report_init,report_log,report_render,report_title,resolve,reverse,rgb_init,round,salt,same,scan,set,shift,shuffle,silent,sleep,slice_l,slice_r,slice,sort,space,split,squote,stop,str_indent,strip_l,strip_r,sub,tail,task_dump,task_run,tbl_column,tbl_columns,tbl_index,tbl_init,tbl_pad_l,tbl_remove_column,tbl_rename_column,tbl_render,tbl_sort,time_delay,time_get,time_hn,time_interval,time_now,time_str,time_timeout,to_base36,to_dump,to_fixed,to_hex,to_i,to_int,to_json,to_lit,to_lower,to_num,to_str,to_tbl,to_uint,to_upper,trace,trim_l,trim_r,trim,trunc,tty_width,txt_compact,txt_cut,txt_indent,txt_inline,txt_prepend,txt_unindent,unaccent,unshift,unwrap,url_beautify,url_get,url_parse,wait,xor,app_list,beep,deinit_node,digest,dir_call,dir_change,dir_current,dir_empty,dir_find,dir_load,dir_make,dir_read,dir_reset,dir_size,file_append,file_load,file_read,file_save,file_size,file_write,fs_change_mode,fs_copy,fs_created,fs_mode,fs_modified,fs_remove,http_get,init_node,inspect,ip_host,ip_list,ip_v4,ip_v6,is_batch,is_color,is_dir,is_file,is_fs,is_interactive,is_readable,is_symbolic_link,no_umask,node_argv,node_context,open,os_capture,os_detach,os_execute,os_home,os_host,os_log,os_prompt,os_ps,os_run,os_shell,os_system,os_user,path_base,path_dir,path_ext,path_real,path_tmp,path_writable,pkg_list,report_mail,sigint,to_base64,ansi_encode,ansi_get_attrs,ansi_get_colors,ansi_head,ansi_init,ansi_rgb,ansi_strip,app_token,archive_find,group_list,init_shell,is_local,is_remote,is_root,mail_debug,mail,mime_type,mnt_clean,mnt_unmount,password,ssh_execute,ssh_pass,ssh_system,sudo_dir_make,sudo_dir_reset,sudo_file_append,sudo_file_read,sudo_file_save,sudo_file_write,sudo_fs_change_mode,sudo_fs_remove,sudo_is_dir,sudo_is_file,sudo_path_writable,sudo,user_created,user_list,dom_entities,dom_escape,dom_special_chars,dom_unescape,h_a,h_attr,h_b,h_back_color,h_body,h_bold,h_border,h_br,h_color,h_decoration,h_div,h_float,h_font_family,h_font_size,h_head,h_href,h_html,h_img,h_init,h_meta,h_padding_bottom,h_padding_left,h_padding_right,h_padding_top,h_padding,h_pre,h_push,h_render,h_script,h_spacer,h_span,h_src,h_style,h_table,h_tbl,h_td,h_text,h_th,h_title,h_tr,h_wbr,h_width,init_www,is_link,link_dom,link_h,link_init,config_append,config_clean,init_org,org_group_create_users,org_user_install,org_user_load,org_user_remove_unused,org_user_remove,org_user_save,org_user_uninstall,org_user_update,ps1_encode,app_home,app_make,ast_assign,ast_begin,ast_brk,ast_call,ast_catch,ast_check,ast_cont,ast_else,ast_elseif,ast_fn,ast_forin,ast_fornum,ast_forof,ast_gn,ast_if,ast_include,ast_inline,ast_let,ast_ret,ast_run,ast_throw,ast_try,ast_var,ast_while,ast_yield,call_ast_block_top,call_ast_block,call_ast_declare,call_ast_for,call_ast_if,call_ast_xn,cpl_block,cpl_check_fn,cpl_check_syntax,cpl_check,cpl_compile,cpl_deinit,cpl_dump,cpl_fold,cpl_for,cpl_generate,cpl_include,cpl_init,cpl_is_call,cpl_is_leaf,cpl_load,cpl_log_error,cpl_scan,cpl_scope,cpl_source_map,cpl_tokenize,cpl_translate,cpl_uncomment,call_expr_arg,call_expr_right,call_expr_rvalue,expr_arr,expr_call,expr_iif,expr_in,expr_inline,expr_instanceof,expr_new,expr_not,expr_obj,expr_run,expr_value,pkg_include,init}
main()