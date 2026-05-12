fn ansi_get_colors
 let r obj
 let list arr

 push list "default 39 49"
 push list "black 30 40"
 push list "red 31 41"
 push list "green 32 42"
 push list "yellow 33 43"
 push list "blue 34 44"
 push list "magenta 35 45"
 push list "cyan 36 46"
 push list "gray 37 47"
 push list "white 97 107"

 for list
  let a split v " "
  let color shift a
  let fore shift a
  let fore to_uint fore
  let back shift a
  let back to_uint back
  let entry obj fore back

  put r color entry
 end

 ret r
end
