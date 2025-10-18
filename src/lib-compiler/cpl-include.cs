fn cpl_include cpl:obj
 //compile cache

 fn compile_cache path:str
  let relative path_real "src"
  let relative path_fix relative
  let relative strip_l path relative
  let cache cpl.cache.files
  let modified fs_modified path
  var recompile false

  if has cache relative
   let entry get cache relative

   if different entry.modified modified
    assign recompile true
  else
   assign recompile true

  if not recompile
   let entry get cache relative
   let nodes entry.nodes

   declare_fn path nodes

   ret nodes
  end

  let path relative  
  let modified_ time_hn modified
  let o obj path modified_  
  let s obj_option o

  trace "compile" s

  let nodes cpl_compile cpl path

  declare_fn path nodes

  let entry obj modified nodes

  set cache relative entry

  ret nodes
 end

 //declare fn

 fn declare_fn path:str nodes:arr
  if is_empty nodes
   ret

  let fn path_file path
  let fn replace fn "-" "_"

  push cpl.fns fn
 end

 fn get_files x:arr
  let r arr

  for x
   let a dir_load v

   append r a
  end

  ret r
 end

 //get includes

 fn get_includes x:str
  let r arr
  let dir get_app_dir x
  let a path_concat dir "include.txt"
  let a file_load a

  for split a
   let s path_concat "src" v

   push r s
  end

  push r dir

  ret r
 end

 //get app dir

 fn get_app_dir x
  let r concat "src/app-" x

  if is_dir r
   ret r

  let r concat "src/spa-" x

  if is_dir r
   ret r

  stop
 end

 //main

 let includes get_includes cpl.app
 let files get_files includes

 for files
  let ext path_ext v

  if different ext "cs"
   cont

  let nodes compile_cache v

  append cpl.out nodes
 end
end
