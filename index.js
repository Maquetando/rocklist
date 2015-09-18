function template(locals) {
var jade_debug = [ new jade.DebugItem( 1, "index.jade" ) ];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;

jade_debug.unshift(new jade.DebugItem( 0, "index.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "index.jade" ));
buf.push("<!DOCTYPE html>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 2, "index.jade" ));
buf.push("<html lang=\"es\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 3, "index.jade" ));
buf.push("<head>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 4, "index.jade" ));
buf.push("<meta charset=\"UTF-8\">");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 5, "index.jade" ));
buf.push("<title>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 5, jade_debug[0].filename ));
buf.push("RockList");
jade_debug.shift();
jade_debug.shift();
buf.push("</title>");
jade_debug.shift();
jade_debug.shift();
buf.push("</head>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 6, "index.jade" ));
buf.push("<body>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 7, "index.jade" ));
buf.push("<header class=\"Header\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 8, "index.jade" ));
buf.push("<h1>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 8, jade_debug[0].filename ));
buf.push("Hola");
jade_debug.shift();
jade_debug.shift();
buf.push("</h1>");
jade_debug.shift();
jade_debug.shift();
buf.push("</header>");
jade_debug.shift();
jade_debug.shift();
buf.push("</body>");
jade_debug.shift();
jade_debug.shift();
buf.push("</html>");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "doctype html\nhtml(lang=\"es\")\n\thead\n\t\tmeta(charset=\"UTF-8\")\n\t\ttitle RockList\n\tbody\n\t\theader(class=\"Header\")\n\t\t\th1 Hola");
}
}