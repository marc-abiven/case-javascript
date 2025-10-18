fn entity_render entity:obj
 let item entity.item
 let dimension dom_mul css.unit 20

 //breadcrumb

 let table_nav dom_table
 let tr dom_tr
 let td_breadcrumb dom_td
 let td_nav dom_td
 let spacer dom_spacer
 let breadcrumb breadcrumb_render entity.breadcrumb

 dom_width table_nav "100%"

 dom_push td_breadcrumb breadcrumb
 dom_push tr td_breadcrumb
 dom_push tr td_nav
 dom_push table_nav tr

 //navigation top

 dom_id td_nav "nav-top"
 dom_right td_nav

 let a_previous dom_a
 let a_next dom_a
 let separator dom_span

 dom_text a_previous "Précédent"
 dom_href a_previous entity.previous

 dom_text a_next "Suivant"
 dom_href a_next entity.next

 dom_text separator " / "
 dom_color separator "gray"

 dom_push td_nav a_previous
 dom_push td_nav separator
 dom_push td_nav a_next

 let spacer dom_spacer

 //image

 let div_content dom_div
 var img null

 if has item "image"
  if is_str item.image
   if not contain item.content item.image
    assign img dom_img

    dom_id img "featured"
    dom_src img item.image
    dom_max_width img dimension
    dom_max_height img dimension
    dom_padding_left img css.unit
    dom_padding_bottom img css.unit
    dom_float img "right"
   end
  end
 end

 //details

 let div_detail dom_div

 dom_padding_left div_detail css.unit
 dom_padding_bottom div_detail css.unit
 dom_float div_detail "right"
 dom_width div_detail dimension

 assign div_detail.style.clear "right"

 let table_detail to_tbl entity.detail
 let table_detail dom_tbl table_detail

 dom_width table_detail dimension

 let tr dom_children table_detail
 let tr front tr

 dom_remove tr

 for dom_children table_detail
  let children dom_children v
  let td_key at children 0
  let td_value at children 1
  let width dom_mul css.unit 8
  let key dom_data_get td_key
  let value dom_data_get td_value
  let title_length 18

  dom_right td_key
  dom_width td_key width

  if not is_link value
   cont

  let link dup value
  let a dom_a

  if gt link.title.length title_length
   assign link.title cut_l link.title title_length

  dom_text a link.title
  dom_href a link.url
  dom_clear td_value
  dom_push td_value a
 end

 dom_push div_detail table_detail

 //content

 let div_content dom_div

 if has item "content"
  dom_html div_content item.content

 dom_unshift div_content div_detail

 if not is_null img
  dom_unshift div_content img

 dom_patch div_content dimension

 //navigation bottom

 let spacer_clear dom_spacer
 let div_nav dom_div

 assign spacer_clear.style.clear "both"

 dom_id div_nav "nav-bottom"
 dom_right div_nav

 for dom_children td_nav
  let node dom_clone v

  dom_push div_nav node
 end

 //result

 let r dom_div

 dom_push r table_nav
 dom_push r spacer
 dom_push r div_content
 dom_push r spacer_clear
 dom_push r div_nav

 ret r
end
