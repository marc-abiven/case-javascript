fn init x:etc
 let cpl cpl_init "test"

 dump cpl

 let cpl limit_complexity cpl 10

 dump cpl

 let o limit_complexity global 10

 dump o
end