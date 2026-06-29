fn json_encode x:def
 let r JSON.stringify x

 check is_str r

 ret r
end
