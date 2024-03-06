const {div, p, a, span, pre, form, label, input, textarea, button, submit, table, thead, tbody, th, tr, td} = van.tags;

/*
 conf.id ::= string
 conf.class ::= string
 conf.select ::= "one" | "multi"
 conf.field_name ::= string
 conf.sort ::= column names
*/
function VanTable (cols, data, conf) {
  this.cols=cols;
  this.data=data;
  this.conf=conf;
  if (this.conf.select){ this.selector=this.conf.select == "one" ? "radio" : "checkbox"}
}

VanTable.prototype.dom=function() {
  return table({class: this.conf.class, id: this.conf.id}, 
    thead(
      ((this.conf.select ? [""] : []).concat(this.cols)).map((col) => th(col))
    ),
    tbody(
      this.conf.select ? 
        this.data.map((row) => tr(td(input({type: this.selector, name: this.conf.field_name, value: row.shift()})), row.map((cell) => td(cell))))
      : 
        this.data.map((row) => tr({id: row.shift()}, row.map((cell) => td(cell))))
    )
  );

}
