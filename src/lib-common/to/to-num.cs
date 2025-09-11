fn to_num x:str
 //~ check is_str x

 let r json_decode x

 check is_num r

 ret r
end
