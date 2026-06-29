fn unpad_l x:str padding:str
 check is_full padding

 var r x

 while match_l r padding
  assign r strip_l r padding

 ret r
end