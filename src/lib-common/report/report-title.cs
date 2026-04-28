fn report_title report:obj
 //format tag

 fn format_tag x:str
  if is_word x
   ret x

  ret to_lit x
 end

 //main

 let tags map report.tags format_tag
 let tags join tags " / "
 let tags paren tags

 ret space report.title tags
end