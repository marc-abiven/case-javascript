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
   return r
  }
 }
}
function append(x,y)
{
 check(is_arr,x)
 check(is_arr,y)
 for(const v of y)
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
 check(is_str,x)
 check(is_single,x)
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
function backtrace()
{
 const _=new Error
 {
  const error=_
  {
   log(error.stack)
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
     return r
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
   for(const v of x)
   {
    const _=asc(v)
    {
     const s=_
     {
      const _=s.toString(36)
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
   return r
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
   for(const v of x)
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
function date_get(x)
{
 if(is_undef(x))
 {
  const _=time_get()
  {
   const n=_
   {
    return date_get(n)
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
     const _=o.getFullYear()
     {
      const y=_
      {
       const _=o.getMonth()
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
             const _=o.getDate()
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
function dec(x)
{
 check(is_num,x)
 return sub(x,1)
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
   return r
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
 if(is_node())
 {
  const _=util.inspect(x,false,null,true)
  {
   const s=_
   {
    log(s)
   }
  }
 }
 else if(is_browser)
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
    return r
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
 for(const v of x)
 {
  if(!y(v))
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
   for(const v of x)
   {
    push(r,v)
   }
   return r
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
     for(const v of a)
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
     return r
    }
   }
  }
 }
}
function find(x,y)
{
 check(is_arr,x)
 check(is_def,y)
 for(const k in x)
 {
  const _=to_i(k)
  {
   const i=_
   {
    const _=at(x,i)
    {
     const v=_
     {
      if(same(v,y))
      {
       return i
      }
     }
    }
   }
  }
 }
 return -1
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
function indent(x)
{
 check(is_str,x)
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
       const _=concat(" ",s)
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
   return join(a)
  }
 }
}
function is_access(x)
{
 if(!is_str(x))
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
 if(!is_str(x))
 {
  return false
 }
 if(is_empty(x))
 {
  return false
 }
 for(const v of x)
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
 if(!is_str(x))
 {
  return false
 }
 if(is_empty(x))
 {
  return false
 }
 for(const v of x)
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
function is_blank(x)
{
 if(!is_str(x))
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
function is_comment(x)
{
 if(!is_ln(x))
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
 return !is_undef(x)
}
function is_digit(x)
{
 if(!is_str(x))
 {
  return false
 }
 if(is_empty(x))
 {
  return false
 }
 for(const v of x)
 {
  if(!contain(digit,v))
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
 if(!is_str(x))
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
  return !is_empty(x)
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
 if(!is_str(x))
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
   for(const v of x)
   {
    if(!is_alnum(v))
    {
     return false
    }
   }
   return true
  }
 }
}
function is_int(x)
{
 return Number.isInteger(x)
}
function is_json(x)
{
 if(!is_str(x))
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
 if(!is_str(x))
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
 if(!is_str(x))
 {
  return false
 }
 if(!match_l(x,"'"))
 {
  return false
 }
 if(!match_r(x,"'"))
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
 if(!is_str(x))
 {
  return false
 }
 if(!is_json(x))
 {
  return false
 }
 const _=json_decode(x)
 {
  const v=_
  {
   if(!is_str(v))
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
  return !is_txt(x)
 }
 return false
}
function is_lower(x)
{
 if(!is_str(x))
 {
  return false
 }
 if(is_empty(x))
 {
  return false
 }
 for(const v of x)
 {
  if(!contain(lower,v))
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
function is_member(x)
{
 if(!is_str(x))
 {
  return false
 }
 if(is_empty(x))
 {
  return false
 }
 if(is_identifier(x))
 {
  return true
 }
 if(is_lit(x))
 {
  return true
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
 return !is_browser()
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
 if(!is_str(x))
 {
  return false
 }
 if(!is_json(x))
 {
  return false
 }
 const _=json_decode(x)
 {
  const v=_
  {
   if(!is_num(v))
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
 if(!is_vec(x))
 {
  return false
 }
 return same(x.length,2)
}
function is_punct(x)
{
 if(!is_str(x))
 {
  return false
 }
 if(is_empty(x))
 {
  return false
 }
 for(const v of x)
 {
  if(!contain(punct,v))
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
 if(!is_str(x))
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
 if(is_comment(x))
 {
  return true
 }
 return false
}
function is_trivia(x)
{
 if(!is_str(x))
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
 if(!is_str(x))
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
   for(const v of a)
   {
    if(!is_member(v))
    {
     return false
    }
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
 if(!is_str(x))
 {
  return false
 }
 if(is_empty(x))
 {
  return false
 }
 for(const v of x)
 {
  if(!contain(upper,v))
  {
   return false
  }
 }
 return true
}
function is_url(x)
{
 if(!is_ln(x))
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
 const _=[]
 {
  const parameters=_
  {
   function pump()
   {
    if(is_fn(init))
    {
     init(...parameters)
     profile()
    }
    else if(is_gn(init))
    {
     const _=init(...parameters)
     {
      const generator=_
      {
       function on_timer()
       {
        const _=generator.next()
        {
         const iterator=_
         {
          if(iterator.done)
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
    const _=time_now()
    {
     const n=_
     {
      const _=get_name()
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
   function get_name()
   {
    if(is_node())
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
    else if(is_browser())
    {
     const _=location.hostname
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
    else
    {
     stop()
    }
   }
   if(is_browser())
   {
    window.global=window
   }
   global.caught=false
   global.start=time_get()
   global.punct="!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
   global.digit="0123456789"
   global.lower="abcdefghijklmnopqrstuvwxyz"
   global.upper=to_upper(lower)
   if(is_node())
   {
    const _=slice(process.argv,2)
    {
     const a=_
     {
      append(parameters,a)
      pump()
     }
    }
   }
   else if(is_browser())
   {
    const _=false
    {
     let skip=_
     {
      function on_load()
      {
       if(skip)
       {
        return
       }
       if(same(document.readyState,"complete"))
       {
        pump()
        skip=true
       }
      }
      window.onload=on(on_load)
     }
    }
   }
   else
   {
    stop()
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
   for(const v of x)
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
   return r
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
   return r
  }
 }
}
function nop()
{
}
function obj_keys(x)
{
 check(is_obj,x)
 return Object.keys(x)
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
   function on_fn()
   {
    if(caught)
    {
     return
    }
    try
    {
     return fn()
    }
    catch(e)
    {
     caught=true
     throw e
    }
   }
   if(caught)
   {
    stop()
   }
   return on_fn
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
      return s
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
  return x
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
   for(const v of a)
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
 const _=Math.random()
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
     return r
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
   for(const v of x)
   {
    if(y(v))
    {
     continue
    }
    push(r,v)
   }
   return r
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
 const _=x
 {
  let r=_
  {
   while(contain(r,y))
   {
    r=replace(r,y,z)
   }
   return r
  }
 }
}
function replace(x,y,z)
{
 check(is_str,x)
 check(is_str,y)
 check(is_str,z)
 const _=split(x,y)
 {
  const a=_
  {
   return join(a,z)
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
       return r
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
function scan(x,y)
{
 check(is_str,x)
 if(is_undef(y))
 {
  return scan(x,is_token)
 }
 check(is_fn,y)
 function delimit(x)
 {
  check(is_str,x)
  const _=[]
  {
   const r=_
   {
    for(const v of x)
    {
     const _=v
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
    return r
   }
  }
 }
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
      return r
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
    return r
   }
  }
 }
 const _=delimit(x)
 {
  const a=_
  {
   return group(a,y)
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
    return r
   }
  }
 }
 remove(x,0,y)
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
 check(is_arr,x)
 if(is_undef(y))
 {
  x.sort()
 }
 else
 {
  x.sort(y)
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
 return x
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
 return x
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
   return r
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
function time_get()
{
 const _=Date.now()
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
 const _=time_get()
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
  return time_timeout(x,0)
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
 const _=time_get()
 {
  const n=_
  {
   return sub(n,start)
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
function to_dump(x)
{
 check(is_def,x)
 return JSON.stringify(x,null,1)
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
      return s
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
            return integer
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
   return r
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
 return x.toLowerCase()
}
function to_num(x)
{
 check(is_str,x)
 const _=json_decode(x)
 {
  const r=_
  {
   check(is_num,r)
   return r
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
   return r
  }
 }
}
function to_upper(x)
{
 check(is_str,x)
 return x.toUpperCase()
}
function trim_l(x)
{
 check(is_str,x)
 return x.trimStart()
}
function trim_r(x)
{
 check(is_str,x)
 return x.trimEnd()
}
function trim(x)
{
 check(is_str,x)
 return x.trim()
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
   return r
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
     push(lines,"<script>")
     push(lines,js)
     push(lines,"</script>")
     return join(lines)
    }
   }
  }
 }
}
function app_make(x)
{
 check(is_str,x)
 function get_js(x)
 {
  check(is_str,x)
  const _=[]
  {
   const r=_
   {
    const _=file_read(x)
    {
     const s=_
     {
      for(const v of split(s))
      {
       const _=trim_r(v)
       {
        const s=_
        {
         if(is_empty(s))
         {
          continue
         }
         push(r,s)
        }
       }
      }
      return r
     }
    }
   }
  }
 }
 function get_files(x)
 {
  check(is_arr,x)
  const _=[]
  {
   const r=_
   {
    for(const v of x)
    {
     const _=dir_load(v)
     {
      const a=_
      {
       append(r,a)
      }
     }
    }
    return r
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
    const _=concat("src/app-",x)
    {
     const app=_
     {
      const _=path_concat(app,"include.txt")
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
            push(r,app)
            return r
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
 const _=cpl_init()
 {
  const cpl=_
  {
   const _=get_includes(x)
   {
    const includes=_
    {
     const _=[]
     {
      const lines=_
      {
       for(const v of get_files(includes))
       {
        const _=path_ext(v)
        {
         const ext=_
         {
          if(same(ext,"js"))
          {
           const _=get_js(v)
           {
            const a=_
            {
             append(lines,a)
            }
           }
          }
          else if(same(ext,"cs"))
          {
           const _=file_read(v)
           {
            const s=_
            {
             const _=cpl_compile(cpl,s)
             {
              const js=_
              {
               const _=split(js)
               {
                const a=_
                {
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
       push(lines,"main()")
       return join(lines)
      }
     }
    }
   }
  }
 }
}
function ast_assign(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 check(is_empty,z)
 const _=front(y)
 {
  const left=_
  {
   check(is_name,left)
   const _=slice(y,1)
   {
    const right=_
    {
     const _=expr_rvalue(...right)
     {
      const rvalue=_
      {
       return concat(left,"=",rvalue)
      }
     }
    }
   }
  }
 }
}
function ast_begin(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 check(is_empty,y)
 return ast_block(x,z)
}
function ast_block(x,y)
{
 check(is_obj,x)
 check(is_arr,y)
 const _=cpl_block(x,y)
 {
  const s=_
  {
   const _=indent(s)
   {
    const s=_
    {
     if(is_empty(s))
     {
      return "{\n}"
     }
     return concat("{\n",s,"\n}")
    }
   }
  }
 }
}
function ast_brk(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 check(is_empty,y)
 check(is_empty,z)
 return "break"
}
function ast_call(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 check(is_full,y)
 check(is_empty,z)
 return expr_call(...y)
}
function ast_catch(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 const _=ast_block(x,z)
 {
  const block=_
  {
   if(is_empty(y))
   {
    return concat("catch\n",block)
   }
   check(is_single,y)
   const _=front(y)
   {
    const identifier=_
    {
     check(is_identifier,identifier)
     const _=paren(identifier)
     {
      const list=_
      {
       return concat("catch",list,"\n",block)
      }
     }
    }
   }
  }
 }
}
function ast_check(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 check(is_empty,z)
 const _=join(y,",")
 {
  const r=_
  {
   const _=paren(r)
   {
    const r=_
    {
     const _=concat("check",r)
     {
      const r=_
      {
       return r
      }
     }
    }
   }
  }
 }
}
function ast_cont(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 check(is_empty,y)
 check(is_empty,z)
 return "continue"
}
function ast_declare(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 check(is_empty,z)
 const _=front(y)
 {
  const left=_
  {
   const _=slice(y,1)
   {
    const right=_
    {
     const _=expr_rvalue(...right)
     {
      const right=_
      {
       return concat(left,"=",right)
      }
     }
    }
   }
  }
 }
}
function ast_else(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 check(is_empty,y)
 const _=ast_block(x,z)
 {
  const block=_
  {
   return concat("else\n",block)
  }
 }
}
function ast_elseif(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 const _=expr_rvalue(...y)
 {
  const rvalue=_
  {
   const _=paren(rvalue)
   {
    const list=_
    {
     const _=ast_block(x,z)
     {
      const block=_
      {
       return concat("else if",list,"\n",block)
      }
     }
    }
   }
  }
 }
}
function ast_fn(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 return ast_xn(x,y,z,"function")
}
function ast_forin(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 const _=expr_rvalue(...y)
 {
  const rvalue=_
  {
   const _=space("const k in",rvalue)
   {
    const rvalue=_
    {
     const _=paren(rvalue)
     {
      const list=_
      {
       const _=ast_block(x,z)
       {
        const block=_
        {
         return concat("for",list,"\n",block)
        }
       }
      }
     }
    }
   }
  }
 }
}
function ast_fornum(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 const _=expr_rvalue(...y)
 {
  const rvalue=_
  {
   const _=concat("let i=0;i<",rvalue,";i++")
   {
    const rvalue=_
    {
     const _=paren(rvalue)
     {
      const list=_
      {
       const _=ast_block(x,z)
       {
        const block=_
        {
         return concat("for",list,"\n",block)
        }
       }
      }
     }
    }
   }
  }
 }
}
function ast_forof(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 const _=expr_rvalue(...y)
 {
  const rvalue=_
  {
   const _=space("const v of",rvalue)
   {
    const rvalue=_
    {
     const _=paren(rvalue)
     {
      const list=_
      {
       const _=ast_block(x,z)
       {
        const block=_
        {
         return concat("for",list,"\n",block)
        }
       }
      }
     }
    }
   }
  }
 }
}
function ast_gn(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 return ast_xn(x,y,z,"function*")
}
function ast_if(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 const _=expr_rvalue(...y)
 {
  const rvalue=_
  {
   const _=paren(rvalue)
   {
    const list=_
    {
     const _=ast_block(x,z)
     {
      const block=_
      {
       return concat("if",list,"\n",block)
      }
     }
    }
   }
  }
 }
}
function ast_include(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 const _=y.parameters
 {
  const parameters=_
  {
   const _=y.children
   {
    const children=_
    {
     check(is_single,parameters)
     check(is_empty,children)
     const _=front(parameters)
     {
      const s=_
      {
       check(is_lit,s)
       const _=unwrap(s)
       {
        const include=_
        {
         stop()
         if(match_l(include,"/"))
         {
          return cpl_parse(x,include)
         }
         const _=path_concat(y,include)
         {
          const path=_
          {
           return cpl_parse(x,path)
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function ast_inline(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 check(is_single,y)
 check(is_empty,z)
 const _=front(y)
 {
  const first=_
  {
   check(is_lit,first)
   return unwrap(first)
  }
 }
}
function ast_let(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 check(is_many,y)
 check(is_empty,z)
 const _=ast_declare(x,y,z)
 {
  const s=_
  {
   return space("const",s)
  }
 }
}
function ast_ret(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 check(is_empty,z)
 if(is_empty(y))
 {
  return "return"
 }
 const _=expr_rvalue(...y)
 {
  const rvalue=_
  {
   return space("return",rvalue)
  }
 }
}
function ast_run(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 check(is_full,y)
 check(is_empty,z)
 const _=expr_call(...y)
 {
  const call=_
  {
   return space("yield*",call)
  }
 }
}
function ast_throw(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 check(is_empty,z)
 const _=expr_rvalue(...y)
 {
  const rvalue=_
  {
   return space("throw",rvalue)
  }
 }
}
function ast_translate(x,y)
{
 check(is_obj,x)
 check(is_obj,y)
 function translate(x,y,z,a)
 {
  check(is_obj,x)
  check(is_str,y)
  check(is_arr,z)
  check(is_arr,a)
  if(same(y,"begin"))
  {
   return ast_begin(x,z,a)
  }
  else if(same(y,"let"))
  {
   return ast_let(x,z,a)
  }
  else if(same(y,"var"))
  {
   return ast_var(x,z,a)
  }
  else if(same(y,"fn"))
  {
   return ast_fn(x,z,a)
  }
  else if(same(y,"gn"))
  {
   return ast_gn(x,z,a)
  }
  else if(same(y,"ret"))
  {
   return ast_ret(x,z,a)
  }
  else if(same(y,"if"))
  {
   return ast_if(x,z,a)
  }
  else if(same(y,"elseif"))
  {
   return ast_elseif(x,z,a)
  }
  else if(same(y,"else"))
  {
   return ast_else(x,z,a)
  }
  else if(same(y,"while"))
  {
   return ast_while(x,z,a)
  }
  else if(same(y,"brk"))
  {
   return ast_brk(x,z,a)
  }
  else if(same(y,"cont"))
  {
   return ast_cont(x,z,a)
  }
  else if(same(y,"throw"))
  {
   return ast_throw(x,z,a)
  }
  else if(same(y,"try"))
  {
   return ast_try(x,z,a)
  }
  else if(same(y,"catch"))
  {
   return ast_catch(x,z,a)
  }
  else if(same(y,"check"))
  {
   return ast_check(x,z,a)
  }
  else if(same(y,"assign"))
  {
   return ast_assign(x,z,a)
  }
  else if(same(y,"inline"))
  {
   return ast_inline(x,z,a)
  }
  else if(same(y,"forof"))
  {
   return ast_forof(x,z,a)
  }
  else if(same(y,"forin"))
  {
   return ast_forin(x,z,a)
  }
  else if(same(y,"fornum"))
  {
   return ast_fornum(x,z,a)
  }
  else if(same(y,"call"))
  {
   return ast_call(x,z,a)
  }
  else if(same(y,"yield"))
  {
   return ast_yield(x,y,z)
  }
  else if(same(y,"run"))
  {
   return ast_run(x,z,a)
  }
  else
  {
   const _=[y,...z]
   {
    const call=_
    {
     return ast_call(x,call,a)
    }
   }
  }
 }
 const _=y.operator
 {
  const operator=_
  {
   const _=y.parameters
   {
    const parameters=_
    {
     const _=y.children
     {
      const children=_
      {
       try
       {
        return translate(x,operator,parameters,children)
       }
       catch(e)
       {
        const _=to_lit(operator)
        {
         const s=_
         {
          log("operator",s)
          if(is_full(parameters))
          {
           log(" parameters",...parameters)
          }
          throw e
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function ast_try(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 check(is_empty,y)
 const _=ast_block(x,z)
 {
  const block=_
  {
   return concat("try\n",block)
  }
 }
}
function ast_var(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 check(is_many,y)
 check(is_empty,z)
 const _=ast_declare(x,y,z)
 {
  const s=_
  {
   return space("let",s)
  }
 }
}
function ast_while(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 const _=expr_rvalue(...y)
 {
  const rvalue=_
  {
   const _=paren(rvalue)
   {
    const list=_
    {
     const _=ast_block(x,z)
     {
      const block=_
      {
       return concat("while",list,"\n",block)
      }
     }
    }
   }
  }
 }
}
function ast_xn(x,y,z,a)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 check(is_str,a)
 function get_argument(x)
 {
  check(is_str,x)
  if(is_identifier(x))
  {
   return x
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
 const _=front(y)
 {
  const name=_
  {
   check(is_name,name)
   const _=slice(y,1)
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
            const call=_
            {
             const _=space(a,call)
             {
              const xn=_
              {
               const _=ast_block(x,z)
               {
                const block=_
                {
                 return concat(xn,"\n",block)
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function ast_yield(x,y,z)
{
 check(is_obj,x)
 check(is_arr,y)
 check(is_arr,z)
 check(is_empty,z)
 if(is_empty(y))
 {
  return "yield"
 }
 const _=expr_rvalue(...y)
 {
  const rvalue=_
  {
   return space("yield",rvalue)
  }
 }
}
function cpl_init()
{
 return {}
}
function cpl_block(x,y)
{
 check(is_obj,x)
 check(is_arr,y)
 const _=[]
 {
  const a=_
  {
   for(const v of y)
   {
    const _=ast_translate(x,v)
    {
     const s=_
     {
      push(a,s)
     }
    }
   }
   return join(a)
  }
 }
}
function cpl_compile(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 const _=cpl_parse(x,y)
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
       return cpl_block(x,nodes)
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
    const _=parent.indent
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
          const _=parent.operator
          {
           const operator=_
           {
            const _=parent.parameters
            {
             const parameters=_
             {
              return {operator,parameters,children}
             }
            }
           }
          }
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
    const lines=_
    {
     while(is_full(lines))
     {
      const _=visit(lines)
      {
       const o=_
       {
        push(r,o)
       }
      }
     }
     return r
    }
   }
  }
 }
}
function cpl_parse(x,y)
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
      const _=scan(v)
      {
       const parameters=_
       {
        const _=reject(parameters,is_trivia)
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
              const _={indent,operator,parameters,children}
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
   return r
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
        const _=node.operator
        {
         const operator=_
         {
          const _=node.parameters
          {
           const parameters=_
           {
            const _=operator
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
                         const _={operator,parameters,children}
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
                                 const _={operator,parameters,children}
                                 {
                                  const node3=_
                                  {
                                   push(r,node3)
                                   const _=declare
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
                                         const _={operator,parameters,children}
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
                                                 const _={operator,parameters,children}
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
                     const _={operator,parameters,children}
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
     return r
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
  return x
 }
 if(is_lit(x))
 {
  return x
 }
 if(is_identifier(x))
 {
  return x
 }
 if(is_access(x))
 {
  return x
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
 log("argument",to_lit,x)
 stop()
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
     return expr_arr()
    }
    else if(same(first,"obj"))
    {
     return expr_obj()
    }
    else
    {
     return first
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
      const _=expr_rvalue(...args)
      {
       const rvalue=_
       {
        return concat("!",rvalue)
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
const cp=require("child_process")
const fs=require("fs")
const http=require('http')
const os=require("os")
const path=require("path")
const util=require("util")
function dir_change(x)
{
 check(is_str,x)
 process.chdir(x)
}
function dir_current()
{
 return process.cwd()
}
function dir_load(x)
{
 check(is_str,x)
 const r=arr()
 for(const v of dir_read(x,true))
 {
  if(is_file(v))
   push(r,v)
  else if(is_dir(v))
  {
   const a=dir_load(v)
   append(r,a)
  }
  else
   stop()
 }
 return r
}
function dir_make(x)
{
 check(is_str,x)
 const recursive=true
 const o={recursive}
 fs.mkdirSync(x,o)
}
function dir_read(x,y)
{
 check(is_str,x)
 if(is_undef(y))
  return dir_read(x,false)
 const r=arr()
 const dir=path_real(x)
 for(const v of fs.readdirSync(dir))
 {
  const s=path_concat(dir,v)
  if(is_file(s))
  {
   push(r,s)
   continue
  }
  if(y)
  {
   if(is_dir(s))
    push(r,s)
  }
 }
 return r
}
function dir_remove(x)
{
 check(is_str,x)
 const recursive=true
 const o={recursive}
 fs.rmdirSync(x,o)
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
 let r=0
 for(const v of dir_load(x))
 {
  const n=file_size(v)
  r=add(r,n)
 }
 return r
}
function file_read(x)
{
 check(is_str,x)
 const o=fs.readFileSync(x)
 return o.toString()
}
function file_save(x,y)
{
 check(is_str,x)
 check(is_str,y)
 if(is_file(x))
 {
  const s=file_read(x)
  if(same(s,y))
   return
 }
 const dir=path_dir(x)
 if(!is_dir(dir))
  dir_make(dir)
 file_write(x,y)
}
function file_size(x)
{
 check(is_str,x)
 const v=fs.statSync(x)
 return v.size
}
function file_write(x,y)
{
 check(is_str,x)
 check(is_str,y)
 fs.writeFileSync(x,y)
}
function flower(x)
{
 check(is_str,x)
 const n=process.stdout.columns
 let s1=repeat("*",n)
 let s2=repeat("*",2)
 s2=concat(s2," ")
 s2=concat(s2,x)
 s2=concat(s2," ")
 s2=concat(s2,s1)
 s2=slice_l(s2,n)
 log(s2)
}
function fs_copy(x,y)
{
 check(is_str,x)
 check(is_str,x)
 if(is_file(x))
 {
  if(is_dir(y))
  {
   const base=path_base(x)
   const path=path_concat(y,base)
   fs_copy(x,path)
   return
  }
 }
 const force=true
 const recursive=true
 const o={force,recursive}
 fs.cpSync(x,y,o)
}
function fs_remove(x)
{
 check(is_str,x)
 const force=true
 const recursive=true
 const o={force,recursive}
 fs.rmSync(x,o)
}
function ip_list()
{
 const s=os_execute("hostname","--all-ip-addresses")
 return split(s," ")
}
function is_dir(x)
{
 if(!is_str(x))
  return false
 const throwIfNoEntry=false
 const o={throwIfNoEntry}
 const v=fs.statSync(x,o)
 if(is_undef(v))
  return false
 return v.isDirectory()
}
function is_file(x)
{
 if(!is_str(x))
  return false
 const throwIfNoEntry=false
 const o={throwIfNoEntry}
 const v=fs.statSync(x,o)
 if(is_undef(v))
  return false
 return v.isFile()
}
function is_fs(x)
{
 if(!is_str(x))
  return false
 const throwIfNoEntry=false
 const o={throwIfNoEntry}
 const v=fs.statSync(x,o)
 return is_def(v)
}
function is_readable(x)
{
 if(is_file(x))
 {
  let fd=null
  try
  {
   fd=fs.openSync(x)
  }
  catch
  {
   return false
  }
  const n=file_size(x)
  if(gt(n,0))
  {
   const buffer=Buffer.alloc(1)
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
  fs.closeSync(fd)
  return true
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
function os_detach(x,...y)
{
 check(is_str,x)
 const detached=true
 const stdio="ignore"
 const option={detached,stdio}
 const o=cp.spawn(x,y,option)
 o.unref()
}
function os_execute(x,...y)
{
 check(is_str,x)
 const maxBuffer=mul(1,1024,1024,1024)
 const encoding="utf8"
 const o={maxBuffer,encoding}
 const streams=cp.spawnSync(x,y,o)
 let out=streams.stdout.toString()
 let err=streams.stderr.toString()
 out=trim_r(out)
 err=trim_r(err)
 const a=arr()
 if(is_full(out))
  push(a,out)
 if(is_full(err))
  push(a,err)
 return join(a)
}
function os_home()
{
 return os.homedir()
}
function os_shell(...x)
{
 const result=os_execute(...x)
 let command=join(x," ")
 command=to_lit(command)
 log("shell",command)
 for(const v of split(result))
 {
  log(" >",v)
 }
}
function os_spawn(x,...y)
{
 check(is_str,x)
 const detached=true
 const stdio="ignore"
 const o={detached,stdio}
 cp.spawn(x,y,o)
}
function os_system(x,...y)
{
 check(is_str,x)
 const stdio="inherit"
 const o={stdio}
 const result=cp.spawnSync(x,y,o)
 return result.status
}
function os_user()
{
 const o=os.userInfo()
 return o.username
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
 const s=path.extname(x)
 return strip_l(s,".")
}
function path_real(x)
{
 check(is_str,x)
 return fs.realpathSync(x)
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
 const r=ssh_pass(x,...y)
 const a=split(r)
 if(is_full(a))
 {
  log(...y)
  for(const v of a)
  {
   log(" >",v)
  }
 }
 return r
}
function init(...x)
{
 function get_apps()
 {
  const r=arr()
  for(const v of dir_read("src",true))
  {
   const base=path_base(v)
   const a=split(base,"-")
   shift(a)
   const name=join(a,"-")
   push(r,name)
  }
  return r
 }
 function is_app(x)
 {
  if(!is_str(x))
   return false
  const base=concat("app-",x)
  const path=path_concat("src",base)
  return is_dir(path)
 }
 const parameters=dup(x)
 if(is_empty(parameters))
 {
  const a=get_apps()
  dump(a)
  return
 }
 const app=shift(parameters)
 if(!is_app(app))
 {
  const a=get_apps()
  dump(a)
  return
 }
 let run=true
 if(extract(parameters,"--compile"))
  run=false
 const code=app_make(app)
 const out=concat("out-",app,".js")
 const node=process.argv0
 file_save(out,code)
 if(run)
 {
  dir_reset("tmp")
  os_system(node,"--trace-uncaught",out,...parameters)
 }
}
main()