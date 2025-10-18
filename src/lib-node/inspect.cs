fn inspect x color
 if is_undef color
  let color is_color

  ret inspect x color
 end

 check is_bool color

 let showHidden false
 let depth null
 let colors color
 let maxArrayLength null
 let maxStringLength null
 let o obj showHidden depth colors maxArrayLength maxStringLength
 let s util.inspect x o
 let a arr

 for split s
  let indent str_indent v
  let indent div indent 2
  let indent repeat " " indent
  let line trim_l v
  let line concat indent line

  push a line
 end

 ret join a
end