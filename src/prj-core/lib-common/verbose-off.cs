fn verbose_off
 let r verbose //global

 if gte verbose 1
  assign verbose 0

 stm_verbose_off app

 ret r
end
