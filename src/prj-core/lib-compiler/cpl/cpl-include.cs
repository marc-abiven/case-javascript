fn cpl_include cpl:obj
 //compile cache

 fn compile_cache path:str
  let cache cpl.cache.compiles
  let entry cpl_compute cpl cache "compile" path

  //compute

  if is_null entry
   let nodes cpl_compile cpl path
   let modified fs_modified path
   let entry obj modified nodes

   set cache path entry

   declare_fn path nodes

   ret copy nodes
  end

  //cache

  let nodes entry.nodes

  declare_fn path nodes

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