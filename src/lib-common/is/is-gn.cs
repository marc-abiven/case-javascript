fn is_gn x
 let s get_type x

 if different s "function"
  ret false

 if different x.constructor.name "GeneratorFunction"
  ret false

 ret true
end
