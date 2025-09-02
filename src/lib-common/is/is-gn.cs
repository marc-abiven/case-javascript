fn is_gn x
 let s typeof x

 if different s "function"
  ret false

 if different x.constructor.name "GeneratorFunction"
  ret false

 ret true
end