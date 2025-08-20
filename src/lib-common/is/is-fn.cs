fn is_fn x
 let s typeof x

 if different s "function"
  ret false

 if same x.constructor.name "GeneratorFunction"
  ret false

 ret true
end