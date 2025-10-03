fn expr_iif cpl:obj x:arg y:arg z:arg a:etc
 check is_empty a

 ret concat x "?" y ":" z
end
