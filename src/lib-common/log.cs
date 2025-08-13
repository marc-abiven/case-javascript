fn log x:etc
 if is_null output
  console.log x:etc
  ret
 end
 
 let a map x to_str
 let a implode a " "
 let a concat a "\n"
 let a concat output a
 
 assign global.output a
end
