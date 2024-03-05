const {div, p, a, span, pre, form, label, input, textarea, button, submit, table, thead, tbody, th, tr, td} = van.tags;

/*
 conf.select ::= "one" | "multi"
 conf.field_name ::= string
 conf.sort ::= column names
*/
function VanTable (cols, data, conf) {
  this.cols=cols;
  this.data=data;
  this.conf=conf;
}

VanTable.prototype.toDom()=function() {
  if (this.conf.select) {
    this.cols.unshift("");
    field_type=this.conf.select=="one" ? "radio" : "checkbox"
    this.rows.foreach ((row) => {
      row.unshift(input({type: field_type, name: this.conf.field_name, value:row.shift()}))
    })
  }

}
