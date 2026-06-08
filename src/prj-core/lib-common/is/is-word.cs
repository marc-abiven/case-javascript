fn is_word x
 if not is_str x
  ret false

 if is_empty x
  ret false

 if contain x " "
  ret false

 if contain x lf
  ret false

 if contain x cr
  ret false

 ret true
end
