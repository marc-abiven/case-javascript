fn app_on_init_init stm:obj event:str args:etc
 //compare init

 let orders arr "common" "www" "node" "browser" "shell" "org"

 fn compare_init x:obj y:obj
  let x find orders x.key
  let y find orders y.key

  ret cmp x y
 end

 //main

 //init

 let fns fn_select "init_"
 let fns sort fns compare_init

 forin fns
  stm_log3 stm v.name

  v stm
 end

 //those functions are ready now

 assign stm.report value report

 ret "load"
end
