const cp=require("child_process")
const fs=require("fs")
const path=require("path")

function add(x,y)
{
 check(is_num,x)
 check(is_num,y)
 
 return x+y
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

function at(x,y)
{
 check(is_vec,x)
 check(is_uint,y)
 
 const n=dec(x.length)

 check(between,y,0,n)
 
 return x[y]
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

function clear(x)
{
 check(is_arr,x)
 
 x.splice(0)
}

function concat(...x)
{
 return implode(x)
}

function dec(x)
{
 check(is_num,x)
 
 return sub(x,1)
}

function dir_load(x)
{
 check(is_str,x)
 
 const r=arr()
 
 for(const v of dir_read(x))
 {
  if(is_dir(v))
  {
   const a=dir_load(v)
   
   append(r,a)
  }
  else if(is_file(v))
   push(r,v)
  else
   stop()
 }
 
 return r
}

function dir_read(x)
{
 check(is_str,x)
 
 const r=arr()
 const dir=path_real(x)
 
 for(const v of fs.readdirSync(dir))
 {
  const s=path_concat(dir,v)
  
  if(is_file(s))
   push(r,s)
 }
 
 return r
}

function dup(x)
{
 check(is_arr,x)
 
 return slice(x,0)
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
 
 file_write(x,y)
}

function file_write(x,y)
{
 check(is_str,x)
 check(is_str,y)
 
 fs.writeFileSync(x,y)
}

function front(x)
{
 check(is_vec,x)
 
 return at(x,0)
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

function is_arr(x)
{
 return Array.isArray(x)
}

function is_def(x)
{
 return !is_undef(x)
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

function is_empty(x)
{
 if(is_vec(x))
  return same(x.length,0)
 
 return false
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

function is_fn(x)
{
 const s=typeof x
 
 return same(s,"function")
}

function is_int(x)
{
 return Number.isInteger(x)
}

function is_num(x)
{
 if(Number.isNaN(x))
  return false
  
 const s=typeof x
 
 return same(s,"number")
}

function is_str(x)
{
 const s=typeof x
 
 return same(s,"string")
}

function is_true(x)
{
 return same(x,true)
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

function os_system(x,...y)
{
 check(is_str,x)
 
 const stdio="inherit"
 const o={stdio}
 
 cp.spawnSync(x,y,o)
}

function path_concat(x,y)
{
 check(is_str,x)
 check(is_str,y)
 
 return concat(x,"/",y)
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

function push(x,y)
{
 check(is_arr,x)
 check(is_def,y)
 
 x.push(y)
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

function same(x,y)
{
 return x===y
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

function split(x,y)
{
 check(is_str,x)
 
 if(is_undef(y))
  return split(x,"\n")
  
 return x.split(y)
}

function stop()
{
 throw 42
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

function sub(x,y)
{
 check(is_num,x)
 check(is_num,y)
 
 return x-y
}

function trim(x)
{
 check(is_str,x)
 
 return x.trim()
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

function main()
{
 const a=slice(process.argv,2)
 
 return init(...a)
}

main()
