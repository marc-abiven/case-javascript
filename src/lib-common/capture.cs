fn capture x y:etc
 check is_fn x
 check is_null output

 assign global.output ""

 x y:etc

 let r output
 let r trim_r r

 assign global.output null

 ret r
end
