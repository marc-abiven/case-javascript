fn expr_instanceof x y z:etc
 check is_name x
 check is_identifier y
 check is_empty z
 
 ret space x "instanceof" y
end
