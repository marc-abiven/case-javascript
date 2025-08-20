fn log x:etc
 if is_null output
  console.log x:etc
  ret
 end

 let s map x to_str
 let s join s " "
 let s concat s "\n"
 let s concat output s

 assign global.output s
end
