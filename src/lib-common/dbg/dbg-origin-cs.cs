fn dbg_origin_cs x y
 if is_undef x
  let e new Error "origin-cs"
  
  ret dbg_origin_cs e.stack
 end
 
 check is_str x
 
 if is_undef y
  ret dbg_origin_cs x 3 
 
 check is_uint y

 let map dbg_source_map
 let frames dbg_callstack x
 let frames head frames y
 
 forin frames
  let i to_i k
  let v at frames i
  let file get map.files v.path
  let line v.ncs
  let t dbg_origin file line
  let s tbl_render t
  let s txt_prepend s "> "
  let n inc i
  let s2 concat "#" n
  let s2 space "stack frame" s2
  
  flower s2
  log s
 end
end
