fn cpl_tokenize x:obj y:arr
 let r arr

 forof y
  let code v.code
  let source dup v.source
  let indent str_indent code
  let args cpl_scan x code

  if is_empty args
   cont

  let operator shift args

  if same operator "end"
   if is_empty args
    cont
  end

  let children arr
  let node obj indent operator args children source

  push r node
 end

 ret r
end
