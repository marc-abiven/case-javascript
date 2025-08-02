const start=time_get()
let caught=false
const digit="0123456789"
const lower="abcdefghijklmnopqrstuvwxyz"
const upper=to_upper(lower)
function abs(x)
{
 check(is_num,x)
 return Math.abs(x)
}
function add(x,y,...z)
{
 check(is_num,x)
 check(is_num,y)
 const r=x+y
 if(is_full(z))
  return add(r,...z)
 return r
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
 const n=dec(x.length)
 check(between,y,0,n)
 if(is_undef(z))
  return x[y]
 x[y]=z
}
function back(x,y,z)
{
 check(is_vec,x)
 if(is_undef(y))
  return back(x,0)
 check(is_uint,y)
 let n=sub(x.length,y)
 n=dec(n)
 if(is_undef(z))
  return at(x,n)
 at(x,n,z)
}
function backtrace()
{
 const error=new Error
 log(error.stack)
}
function base36_decode(x)
{
 check(is_str,x)
 let r=""
 const a=explode(x)
 while(is_full(a))
 {
  const a2=slice_l(a,4)
  shift(a,4)
  const s=implode(a2)
  const n=Number.parseInt(s,36)
  const range=mul(256,256)
  check(is_uint,n)
  check(lte,n,range)
  const c=chr(n)
  r=concat(r,c)
 }
 return r
}
function base36_encode(x)
{
 check(is_str,x)
 let r=""
 for(const v of x)
 {
  const n=asc(v)
  let s=n.toString(36)
  s=pad_l(s,"0",4)
  r=concat(r,s)
 }
 return r
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
function check(x,...y)
{
 if(is_true(x))
 {
  if(is_empty(y))
   return
 }
 else if(is_fn(x))
 {
  const b=x(...y)
  if(is_true(b))
   return
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
 const a=arr()
 for(const v of x)
 {
  if(is_empty(a))
  {
   push(a,v)
   continue
  }
  const left1=back(a)
  const left2=back(left1)
  const right1=v
  const right2=front(right1)
  if(is_delimited(left2))
  {
  }
  else if(is_delimited(right2))
  {
  }
  else
  {
   push(a,right1)
   continue
  }
  const s=concat(left1,right1)
  drop(a)
  push(a,s)
 }
 return join(a," ")
}
function concat(...x)
{
 return implode(x)
}
function contain(x,y)
{
 check(is_vec,x)
 if(is_str(x))
  check(is_str,y)
 check(is_def,y)
 return x.includes(y)
}
function date_get(x)
{
 if(is_undef(x))
 {
  const n=time_get()
  return date_get(n)
 }
 check(is_num,x)
 const n=mul(x,1000)
 const o=new Date(n)
 const y=o.getFullYear()
 let m=o.getMonth()
 m=inc(m)
 m=pad_l(m,"0",2)
 let d=o.getDate()
 d=pad_l(d,"0",2)
 return concat(y,"/",m,"/",d)
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
 const r=x/y
 if(is_full(z))
  return div(r,...z)
 return r
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
 check(is_def,x)
 const s=to_dump(x)
 log(s)
}
function dup(x)
{
 check(is_container,x)
 if(is_arr(x))
  return slice(x,0)
 else if(is_obj(x))
 {
  const r=obj()
  merge(r,x)
  return r
 }
 else
  stop()
}
function every(x,y)
{
 check(is_arr,x)
 check(is_fn,y)
 for(const v of x)
 {
  if(!y(v))
   return false
 }
 return true
}
function explode(x)
{
 check(is_str,x)
 const r=arr()
 for(const v of x)
 {
  push(r,v)
 }
 return r
}
function extract(x,y)
{
 check(is_arr,x)
 check(is_def,y)
 let r=false
 const a=dup(x)
 clear(x)
 for(const v of a)
 {
  if(same(v,y))
   r=true
  else
   push(x,v)
 }
 return r
}
function find(x,y)
{
 check(is_arr,x)
 check(is_def,y)
 for(const k in x)
 {
  const i=to_i(k)
  const v=at(x,i)
  if(same(v,y))
   return i
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
  return dup(x)
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
function is_access(x)
{
 if(!is_str(x))
  return false
 if(is_empty(x))
  return false
 const a=split(x,".")
 if(is_single(a))
  return false
 return every(a,is_identifier)
}
function is_alnum(x)
{
 if(!is_str(x))
  return false
 if(is_empty(x))
  return false
 for(const v of x)
 {
  if(same(v,"_"))
   ;
  else if(is_alpha(v))
   ;
  else if(is_digit(v))
   ;
  else
   return false
 }
 return true
}
function is_alpha(x)
{
 if(!is_str(x))
  return false
 if(is_empty(x))
  return false
 for(const v of x)
 {
  if(is_lower(v))
   ;
  else if(is_upper(v))
   ;
  else
   return false
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
  return false
 if(is_empty(x))
  return true
 if(is_space(x))
  return true
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
 return !is_undef(x)
}
function is_digit(x)
{
 if(!is_str(x))
  return false
 if(is_empty(x))
  return false
 for(const v of x)
 {
  if(!contain(digit,v))
   return false
 }
 return true
}
function is_empty(x)
{
 if(is_vec(x))
  return same(x.length,0)
 return false
}
function is_false(x)
{
 return same(x,false)
}
function is_fn(x)
{
 const s=typeof x
 if(different(s,"function"))
  return false
 if(same(x.constructor.name,"GeneratorFunction"))
  return false
 return true
}
function is_fragment(x)
{
 if(!is_str(x))
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
  return !is_empty(x)
 return false
}
function is_gn(x)
{
 const s=typeof x
 if(different(s,"function"))
  return false
 if(different(x.constructor.name,"GeneratorFunction"))
  return false
 return true
}
function is_identifier(x)
{
 if(!is_str(x))
  return false
 if(is_empty(x))
  return false
 const s=front(x)
 if(same(s,"_"))
  ;
 else if(is_alpha(s))
  ;
 else
  return false
 for(const v of x)
 {
  if(!is_alnum(s))
   return false
 }
 return true
}
function is_int(x)
{
 return Number.isInteger(x)
}
function is_json(x)
{
 if(!is_str(x))
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
 const n=dec(x.length)
 return same(n,y)
}
function is_lisp(x)
{
 if(!is_str(x))
  return false
 const a=split(x,"-")
 return every(a,is_alnum)
}
function is_lit_char(x)
{
 if(!is_str(x))
  return false
 if(!match_l(x,"'"))
  return false
 if(!match_r(x,"'"))
  return false
 let s=strip_l(x,"'")
 s=strip_r(s1,"'")
 if(is_empty(s))
  return false
 s=concat("\"",s,"\"")
 return is_lit(s)
}
function is_lit(x)
{
 if(!is_str(x))
  return false
 if(!is_json(x))
  return false
 const v=json_decode(x)
 if(!is_str(v))
  return false
 const s=json_encode(v)
 return same(s,x)
}
function is_ln(x)
{
 if(is_str(x))
  return !is_txt(x)
 return false
}
function is_lower(x)
{
 if(!is_str(x))
  return false
 if(is_empty(x))
  return false
 for(const v of x)
 {
  if(!contain(lower,v))
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
function is_member(x)
{
 if(!is_str(x))
  return false
 if(is_empty(x))
  return false
 if(is_identifier(x))
  return true
 if(is_lit(x))
  return true
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
 return !is_browser()
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
 const s=typeof x
 return same(s,"number")
}
function is_numeric(x)
{
 if(!is_str(x))
  return false
 if(!is_json(x))
  return false
 const v=json_decode(x)
 if(!is_num(v))
  return false
 const s=json_encode(v)
 return same(s,x)
}
function is_obj(x)
{
 if(is_null(x))
  return false
 const s=typeof x
 return same(s,"object")
}
function is_punct(x)
{
 if(!is_str(x))
  return false
 if(is_empty(x))
  return false
 const s="!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
 for(const v of x)
 {
  if(!contain(s,v))
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
 if(!is_str(x))
  return false
 if(is_empty(x))
  return false
 const s=trim(x)
 return is_empty(s)
}
function is_str(x)
{
 const s=typeof x
 return same(s,"string")
}
function is_token(x)
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
 if(!is_str(x))
  return false
 if(is_empty(x))
  return false
 const a=scan(x,is_member)
 if(is_single(a))
  return false
 const s=shift(a)
 if(!is_member(s))
  return false
 while(is_full(a))
 {
  let s=shift(a)
  if(different(s,":"))
   return false
  if(is_empty(a))
   return false
  s=shift(a)
  if(!is_member(s))
   return false
 }
 return true
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
 if(!is_str(x))
  return false
 if(is_empty(x))
  return false
 for(const v of x)
 {
  if(!contain(upper,v))
   return false
 }
 return true
}
function is_url(x)
{
 if(!is_ln(x))
  return false
 if(match_l(x,"http://"))
  return true
 if(match_l(x,"https://"))
  return true
 return false
}
function is_vec(x)
{
 if(is_str(x))
  return true
 if(is_arr(x))
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
 const parameters=arr()
 function pump()
 {
  if(is_fn(init))
  {
   init(...parameters)
   profile()
  }
  else if(is_gn(init))
  {
   const generator=init(...parameters)
   function on_timer()
   {
    const iterator=generator.next()
    if(iterator.done)
    {
     profile()
     return
    }
    time_timeout(on_timer)
   }
   on_timer()
  }
 }
 function profile()
 {
  const n=time_now()
  let s=to_fixed(n)
  s=concat(s,"s")
  log("profile",s)
 }
 if(is_node())
 {
  const a=slice(process.argv,2)
  append(parameters,a)
  pump()
 }
 else if(is_browser())
 {
  let skip=false
  function on_load()
  {
   if(skip)
    return
   if(same(document.readyState,"complete"))
   {
    pump()
    skip=true
   }
  }
  window.onload=on(on_load)
 }
 else
  stop()
}
function map(x,y)
{
 check(is_arr,x)
 check(is_fn,y)
 const r=arr()
 for(const v of x)
 {
  const v2=y(v)
  check(is_def,v2)
  push(r,v2)
 }
 return r
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
 const s=slice_l(x,y.length)
 return same(s,y)
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
 const s=slice_r(x,y.length)
 return same(s,y)
}
function match(x,y)
{
 check(is_str,x)
 check(is_str,y)
 let s=replace(y,".","\\.")
 s=replace(s,"*",".*")
 s=concat("^",s,"$")
 const o=new RegExp(s)
 return o.test(x)
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
 const r=x*y
 if(is_full(z))
  return mul(r,...z)
 return r
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
 const fn=x
 function on_fn()
 {
  if(caught)
   return
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
 check(!caught)
 return on_fn
}
function pad_l(x,y,z)
{
 check(is_cool,x)
 if(is_uint(x))
 {
  const s=to_json(x)
  if(is_undef(y))
  {
   if(is_undef(z))
    return pad_l(s,"0",3)
   return pad_l(s,"0",z)
  }
  return pad_l(s,y,z)
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
  const s=to_json(x)
  if(is_undef(y))
  {
   if(is_undef(z))
    return pad_r(s,"0",3)
   return pad_r(s,"0",z)
  }
  return pad_r(s,y,z)
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
function pop(x,y)
{
 check(is_arr,x)
 if(is_undef(y))
  return pop(x,1)
 check(is_uint,y)
 const n=sub(x.length,y)
 if(same(y,1))
 {
  const r=back(x)
  remove(x,n,1)
  return r
 }
 remove(x,n,y)
}
function prepend(x,y)
{
 check(is_arr,x)
 check(is_arr,y)
 const a=dup(y)
 reverse(a)
 for(const v of a)
 {
  unshift(x,v)
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
  stop()
 set(x,y,z)
}
function random(x)
{
 if(is_undef(x))
  return random(Number.MAX_SAFE_INTEGER)
 check(is_num,x)
 check(gte,x,0)
 let r=Math.random()
 r=mul(r,x)
 if(is_uint(x))
  return trunc(r)
 return r
}
function reject(x,y)
{
 check(is_arr,x)
 check(is_fn,y)
 const r=arr()
 for(const v of x)
 {
  if(y(v))
   continue
  push(r,v)
 }
 return r
}
function remove(x,y,z)
{
 check(is_arr,x)
 check(is_uint,y)
 if(is_undef(z))
  return remove(x,y,1)
 check(is_uint,z)
 check(between,y,0,x.length)
 const n=add(y,z)
 check(between,n,0,x.length)
 x.splice(y,z)
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
 let r=x
 while(contain(r,y))
 {
  r=replace(r,y,z)
 }
 return r
}
function replace(x,y,z)
{
 check(is_str,x)
 check(is_str,y)
 check(is_str,z)
 const a=split(x,y)
 return join(a,z)
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
 let r=""
 const a1=explode(x)
 const a2=explode(y)
 while(is_full(a1))
 {
  if(is_empty(a2))
  {
   const a3=explode(y)
   append(a2,a3)
  }
  const c1=shift(a1)
  const c2=shift(a2)
  const n1=asc(c1)
  const n2=asc(c2)
  const n=n1^n2
  const c=chr(n)
  r=concat(r,c)
 }
 return r
}
function same(x,y)
{
 return x===y
}
function scan(x,y)
{
 check(is_str,x)
 if(is_undef(y))
  return scan(x,is_token)
 check(is_fn,y)
 function delimit(x)
 {
  check(is_str,x)
  const r=arr()
  for(const v of x)
  {
   const right=v
   if(is_empty(r))
   {
    push(r,right)
    continue
   }
   const left=back(r)
   const fragment=concat(left,right)
   if(is_fragment(fragment))
   {
    drop(r)
    push(r,fragment)
   }
   else
    push(r,right)
  }
  return r
 }
 function group(x,y)
 {
  check(is_arr,x)
  check(is_fn,y)
  const r=arr()
  const fragments=dup(x)
  while(is_full(fragments))
  {
   const a=reduce(fragments,y)
   if(is_full(a))
   {
    const s=implode(a)
    push(r,s)
    shift(fragments,a.length)
   }
   else
   {
    const s=shift(fragments)
    push(r,s)
   }
  }
  return r
 }
 function reduce(x)
 {
  check(is_arr,x)
  check(is_fn,y)
  check(is_full,x)
  const r=dup(x)
  while(is_full(r))
  {
   const s=implode(r)
   if(y(s))
    break
   drop(r)
  }
  return r
 }
 const a=delimit(x)
 return group(a,y)
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
  return shift(x,1)
 check(is_uint,y)
 if(same(y,1))
 {
  const r=front(x)
  remove(x,0,1)
  return r
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
 const n=sub(x.length,y)
 return slice(x,n,y)
}
function slice(x,y,z)
{
 check(is_vec,x)
 const n1=inc(x.length)
 check(between,y,0,n1)
 if(is_undef(z))
 {
  const n=sub(x.length,y)
  return slice(x,y,n)
 }
 check(between,z,0,n1)
 const n2=add(y,z)
 check(between,n2,0,n1)
 return x.slice(y,n2)
}
function sort(x,y)
{
 check(is_arr,x)
 if(is_undef(y))
  x.sort()
 else
  x.sort(y)
}
function split(x,y)
{
 check(is_str,x)
 if(is_undef(y))
  return split(x,"\n")
 if(is_empty(x))
  return arr()
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
 const s=trim_l(x)
 return sub(x.length,s.length)
}
function strip_l(x,y)
{
 check(is_str,x)
 check(is_str,y)
 if(match_l(x,y))
 {
  const n=sub(x.length,y.length)
  return slice_r(x,n)
 }
 return x
}
function strip_r(x,y)
{
 check(is_str,x)
 check(is_str,y)
 if(match_r(x,y))
 {
  const n=sub(x.length,y.length)
  return slice_l(x,n)
 }
 return x
}
function sub(x,y,...z)
{
 check(is_num,x)
 check(is_num,y)
 const r=x-y
 if(is_full(z))
  return sub(r,...z)
 return r
}
function tail(x,y)
{
 check(is_arr,x)
 check(is_uint,y)
 if(lt(x.length,y))
  return dup(x)
 return slice_r(x,y)
}
function time_get()
{
 const n=Date.now()
 return div(n,1000)
}
function time_interval(x,y)
{
 check(is_fn,x)
 if(is_undef(y))
  return time_interval(x,0)
 check(is_num,y)
 check(gte,y,0)
 const fn=x
 function on_interval()
 {
  if(caught)
   return
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
 check(!caught)
 const n=mul(y,1000)
 setInterval(on_interval,n)
}
function time_now()
{
 const n=time_get()
 return sub(n,start)
}
function time_timeout(x,y)
{
 check(is_fn,x)
 if(is_undef(y))
  return time_timeout(x,0)
 check(is_num,y)
 check(gte,y,0)
 const fn=x
 function on_timeout()
 {
  if(caught)
   return
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
 check(!caught)
 const n=mul(y,1000)
 setTimeout(on_timeout,n)
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
  return to_fixed(x,2)
 check(is_uint,y)
 const s=x.toFixed(y)
 const a=split(s,".")
 if(is_single(a))
  return s
 const integer=front(a)
 let float=back(a)
 const digits=explode(float)
 while(is_full(digits))
 {
  const c=back(digits)
  if(different(c,"0"))
   break
  drop(digits)
 }
 if(is_empty(digits))
  return integer
 float=implode(digits)
 return concat(integer,".",float)
}
function to_i(x)
{
 check(is_str,x)
 return Number.parseInt(x)
}
function to_int(x)
{
 check(is_str,x)
 const r=to_num(x)
 check(is_int,r)
 return r
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
 const r=json_decode(x)
 check(is_num,r)
 return r
}
function to_uint(x)
{
 check(is_str,x)
 const r=to_int(x)
 check(is_uint,r)
 return r
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
  return json_decode(x)
 return x
}
const cp=require("child_process")
const fs=require("fs")
const http=require('http')
const os=require("os")
const path=require("path")
function app_home(x)
{
 check(is_str,x)
 const lines=arr()
 const js=app_make(x)
 push(lines,"<!doctype html>")
 push(lines,"<script>")
 push(lines,js)
 push(lines,"</script>")
 return join(lines)
}
function app_make(x)
{
 check(is_str,x)
 function get_includes(x)
 {
  check(is_str,x)
  const r=arr()
  const app=concat("src/app-",x)
  let a=path_concat(app,"include.txt")
  a=file_read(a)
  a=trim(a)
  for(const v of split(a))
  {
   const s=path_concat("src",v)
   push(r,s)
  }
  push(r,app)
  return r
 }
 const includes=get_includes(x)
 const files=arr()
 for(const v of includes)
 {
  const a=dir_load(v)
  for(const v of a)
  {
   const ext=path_ext(v)
   if(same(ext,"js"))
    push(files,v)
  }
 }
 const lines=arr()
 for(const v of files)
 {
  const s=file_read(v)
  for(const v of split(s))
  {
   const s=trim_r(v)
   if(is_empty(s))
    continue
   push(lines,s)
  }
 }
 push(lines,"main()")
 return join(lines)
}
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
 for(const v of dir_read(x))
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
function os_execute(x,...y)
{
 check(is_str,x)
 const shell=true
 const maxBuffer=mul(1,1024,1024,1024)
 const encoding="utf8"
 const o={shell,maxBuffer,encoding}
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
function path_concat(x,y)
{
 const s1=strip_r(x,"/")
 const s2=strip_l(y,"/")
 return concat(s1,"/",s2)
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
function path_fix(x)
{
 if(match_r(x,"/"))
  return x
 return concat(x,"/")
}
function path_real(x)
{
 check(is_str,x)
 return fs.realpathSync(x)
}
function app_make(x)
{
 check(is_str,x)
 function get_includes(x)
 {
  check(is_str,x)
  const r=arr()
  const app=concat("src/app-",x)
  const a1=path_concat(app,"include.txt")
  const a2=file_read(a1)
  const a3=trim(a2)
  for(const v of split(a3))
  {
   const s=path_concat("src",v)
   push(r,s)
  }
  push(r,app)
  return r
 }
 const includes=get_includes(x)
 const files=arr()
 for(const v of includes)
 {
  const a=dir_load(v)
  for(const v of a)
  {
   const ext=path_ext(v)
   if(same(ext,"js"))
    push(files,v)
  }
 }
 const lines=arr()
 for(const v of files)
 {
  const s=file_read(v)
  for(const v of split(s))
  {
   const s=trim_r(v)
   if(is_empty(s))
    continue
   push(lines,s)
  }
 }
 push(lines,"main()")
 return join(lines)
}
function init(...x)
{
 const parameters=dup(x)
 const app=shift(parameters)
 let run=true
 if(extract(parameters,"--compile"))
  run=false
 const code=app_make(app)
 const out=concat("out-",app,".js")
 const node=process.argv0
 file_save(out,code)
 if(run)
  os_system(node,"--trace-uncaught",out,...parameters)
}
main()