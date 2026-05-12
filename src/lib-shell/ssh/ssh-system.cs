gn ssh_system x:str y:etc
 let r run ssh_pass x y:etc
 let a split r

 if is_full a
  log y:etc

  let a txt_prepend a " > "
  let s join a

  log s
 end

 ret r
end
