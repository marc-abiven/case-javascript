fn verbose_on
 let r verbose //global

 if lt verbose 2
  assign verbose inc verbose

 stm_verbose_on app

 ret r
end