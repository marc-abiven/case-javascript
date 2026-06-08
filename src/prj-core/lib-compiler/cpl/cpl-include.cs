fn cpl_include cpl:obj
 //compile cache

 fn compile_cache path:str
  let cache cpl.cache.files
  let modified fs_modified path
  var recompile false

  if has cache path
   let entry get cache path

   if different entry.modified modified
    assign recompile true
  else
   assign recompile true

  if not recompile
   let entry get cache path
   let nodes entry.nodes

   declare_fn path nodes

   ret nodes
  end

  let modified_ time_hn modified
  let o obj path modified_
  let s obj_option o

  trace "compile" s

  let nodes cpl_compile cpl path

  declare_fn path nodes

  let entry obj modified nodes

  set cache path entry

  ret nodes
 end

 //declare fn

 fn declare_fn path:str nodes:arr
  if is_empty nodes
   ret

  let fn path_file path
  let fn to_c fn

  push cpl.fns fn
 end

 //get files

 fn get_files x:arr
  let r arr

  for x
   let a dir_load v

   append r a
  end

  ret r
 end

 //main

 let include pkg_init
 let paths pkg_resolve include cpl.app
 let files get_files paths

 for files
  let ext path_ext v

  if different ext "cs"
   cont

  let nodes compile_cache v

  append cpl.out nodes
 end
end
