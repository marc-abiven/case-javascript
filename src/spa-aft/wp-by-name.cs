fn wp_by_name x:arr y:str
 forof x
  let title wp_title v

  if same title y
   ret v
 end

 stop
end
