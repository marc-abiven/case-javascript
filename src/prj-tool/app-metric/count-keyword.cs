fn count_keyword keyword:str
 var r 0

 for split source_code
  let s trim v
  let begin concat keyword " "

  if match_l s begin
   assign r inc r
 end

 ret r
end
