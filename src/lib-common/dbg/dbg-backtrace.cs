fn dbg_backtrace stack map
 if is_undef stack
  let e new Error "backtrace"

  ret dbg_backtrace e.stack map
 end

 check is_str stack

 if is_undef map
  let map dbg_source_map

  ret dbg_backtrace stack map
 end

 check is_obj map

 let r tbl_init
 let stack trim stack
 let stack split stack
 let source map.source

 for stack
  if is_node
   if not contain v map.script
    cont
  end

  let s trim v
  let s replace s "@" " "
  let a split s " "
  let s front a

  if same s "at"
   shift a

  var fn shift a

  if is_empty fn
   assign fn "anonymous"

  if not is_noun fn
   cont

  let a back a
  let a split a ":"

  if not is_many a
   cont

  let njs back a 1
  let njs to_uint njs
  var index dec njs

  if gte index source.length
   cont

  let location at source index

  if is_null location
   cont

  let js trim location.js
  let cs trim location.cs
  let path location.path
  let ncs location.index
  let ncs inc location.index
  let o obj fn njs js path ncs cs

  push r o
 end

 ret r
end