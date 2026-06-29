fn init_browser stm:obj
 //on error

 fn on_error message:str source:str line:uint column:uint error:obj
  stm_post stm "browser-error" error message source line column
 end

 //main

 //assign verbose 1
 
 let unit "1.3vw"
 let padding "0.3vw"
 let border "0.1vw"
 let font_family "monospace"
 let font_size unit
 let tty_column tty_width
 let html document.documentElement
 let body document.body
 let state obj unit padding border font_family font_size tty_column html body

 stm_state stm state

 //css variables

 let style html.style

 style.setProperty "--unit" unit
 style.setProperty "--padding" padding
 style.setProperty "--border" border

 //on error

 assign window.onerror value on_error
end
