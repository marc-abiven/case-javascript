fn cpl_check_else cpl:obj nodes:arr
 //visit

 fn visit nodes:arr
  var seen_if false
  var seen_elseif false

  for nodes
   try
    let operator v.operator
    let children v.children

    //if

    if same operator "if"
     assign seen_if true
     assign seen_elseif false
     visit children

     cont
    end

    //elseif

    if same operator "elseif"
     assign seen_if false
     assign seen_elseif true
     visit children

     cont
    end

    //else

    if same operator "else"
     //seen

     if or seen_if seen_elseif
      assign seen_if false
      assign seen_elseif false
      visit children

      cont
     end

     //any

     stop "Unexpected else without an if or an elseif."
    end

    //children

    visit children
   catch e
    //set the error context

    cpl_push_error cpl v

    throw e
   end
  end
 end

 //main

 visit nodes
end
