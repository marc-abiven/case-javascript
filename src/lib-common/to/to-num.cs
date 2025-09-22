fn to_num x:str
 let r json_decode x

 check is_num r

 ret r
end
