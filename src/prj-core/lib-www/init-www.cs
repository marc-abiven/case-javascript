fn init_www stm:obj
 let unit "1.3vw"
 let padding "0.3vw"
 let border "0.1vw"
 let font_family "monospace"
 let font_size unit
 let vars obj unit padding border font_family font_size

 stm_vars stm vars

 let escape chr 27
 let nbsp chr 160
 let entities dom_entities
 let mailer "mabynogy@gmail.com"
 let admin "mabynogy@freeserver.sh"
 let author "marc@abiven.eu"
 let vars obj escape nbsp entities mailer admin author

 stm_vars stm vars
end
