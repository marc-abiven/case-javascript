fn inspect x
 if is_undef x
  check same arguments.length 1

 let showHidden false
 let depth null
 let colors is_color
 let maxArrayLength null
 let maxStringLength null
 let o obj showHidden depth colors maxArrayLength maxStringLength

 ret util.inspect x o
end
