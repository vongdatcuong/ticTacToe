(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(6),c=a.n(s),i=(a(13),a(14),a(15),a(1)),l=a(2),o=a(4),u=a(3),d=a(7);var m=function(e){return n.a.createElement("button",{className:"square",onClick:function(){return e.onClick()}},e.value)};function h(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var r=Object(d.a)(t[a],3),n=r[0],s=r[1],c=r[2];if(e[n]&&e[n]===e[s]&&e[n]===e[c])return e[n]}return null}var v=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).state={squares:Array(9).fill(null),xIsNext:!0},r}return Object(l.a)(a,[{key:"handleClick",value:function(e){var t=this.state.squares.slice();h(t)||t[e]||(t[e]=this.state.xIsNext?"X":"O",this.setState({squares:t,xIsNext:!this.state.xIsNext}))}},{key:"renderSquare",value:function(e){var t=this;return n.a.createElement(m,{value:this.state.squares[e],onClick:function(){return t.handleClick(e)}})}},{key:"render",value:function(){var e,t=h(this.state.squares);return e=t?"Winner: "+t:"Next player: "+(this.state.xIsNext?"X":"O"),n.a.createElement("div",null,n.a.createElement("div",{className:"status"},e),n.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),n.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),n.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),a}(r.Component),f=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"game"},n.a.createElement("div",{className:"game-board"},n.a.createElement(v,null)),n.a.createElement("div",{className:"game-info"},n.a.createElement("div",null),n.a.createElement("ol",null)))}}]),a}(r.Component);var E=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.d32bbcd6.chunk.js.map