fn dbg_backtrace x
 if is_undef x
  let e new Error "backtrace"

  ret dbg_backtrace e.stack
 end

 check is_str x

 let r tbl_init
 let stack trim x
 let stack split stack
 let map dbg_source_map

 forin stack
  let i to_i k
  let v at stack i

  if is_node
   let script at process.argv 1

   if not contain v script
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

  if gte index map.source.length
   cont

  let location at map.source index
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
