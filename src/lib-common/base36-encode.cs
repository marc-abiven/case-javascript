fn base36_encode x:str
 var r ""

 for x
  let s asc v
  let s to_base36 s
  let s pad_l s "0" 4

  assign r concat r s
 end

 ret r
end
