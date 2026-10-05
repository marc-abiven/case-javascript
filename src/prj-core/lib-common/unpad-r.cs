fn unpad_r x:str padding:str
 check is_full padding

 var r x

 while match_r r padding
  assign r strip_r r padding

 ret r
end