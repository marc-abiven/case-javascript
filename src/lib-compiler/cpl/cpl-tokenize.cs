fn cpl_tokenize cpl:obj nodes:arr
 let r arr

 for nodes
  let code v.code
  let source dup v.source
  let indent str_indent code
  let args cpl_scan cpl code

  if is_empty args
   cont

  //end is useless

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
