fn init_browser stm:obj
 //on error

 fn on_error message:str source:str line:uint column:uint error:obj
  let context obj message source line column

  stm_post stm "error" error context

  ret true //the error isn't displayed in the console
 end

 //main

 let html document.documentElement
 let body document.body
 let vars obj html body

 stm_vars stm vars

 //source

 let source dbg_source
 let vars obj source

 stm_vars stm vars

 //css variables

 let style html.style

 style.setProperty "--unit" unit
 style.setProperty "--padding" padding
 style.setProperty "--border" border

 //on error

 let on_error on on_error

 assign window.onerror value on_error
end