fn inspect x color
 if is_undef x
  check same arguments.length 1

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

 ret util.inspect x o
end
