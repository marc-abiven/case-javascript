fn json_decode x
 check is_str x
 
 ret JSON.parse x
end
