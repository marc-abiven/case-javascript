fn dbg_origin_xs x y
 if is_undef x
  let e new Error "origin-xs"

  ret dbg_origin_xs e.stack
 end

 check is_str x
 check is_str y

 let map dbg_source_map
 let frames dbg_callstack x
 let frames head frames 4

 forin frames
  let i to_i k
  let v at frames i

  var t null
  var title null

  if same y "cs"
   let file get map.files v.path
   let line v.ncs

   assign t dbg_origin file line
   assign stack "stack"
  elseif same y "js"
   let line v.njs

   assign t dbg_origin map.source line "js"
   assign stack "javacript"
  else
   stop

  let s tbl_render t
  let s txt_prepend s "> "
  let n inc i
  let s2 concat "#" n
  let s2 space "stack frame" s2

  flower s2
  log s
 end
end
