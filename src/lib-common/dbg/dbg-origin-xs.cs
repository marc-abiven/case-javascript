fn dbg_origin_xs stack code_type map
 if is_undef stack
  let e new Error "origin-xs"

  ret dbg_origin_xs e.stack
 end

 check is_str stack
 check is_str code_type

 if is_undef map
  let map dbg_source_map

  ret dbg_origin_xs stack code_type map
 end

 check is_obj map

 let frames dbg_callstack stack map
 let frames head frames 5

 for frames
  var t null
  var label null

  if same code_type "cs"
   let file get map.files v.path
   let line v.ncs

   assign t dbg_origin file line
   assign label "stack"

  elseif same code_type "js"
   let line v.njs

   assign t dbg_origin map.source line "js"
   assign label "javacript"
  else
   stop

  let s tbl_render t
  let s txt_prepend s "> "
  let n inc i
  let title concat "#" n
  let title space label "frame" title "/" v.fn

  flower title
  log s
 end
end