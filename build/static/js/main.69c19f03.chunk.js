(this["webpackJsonpantd-demo"]=this["webpackJsonpantd-demo"]||[]).push([[0],{241:function(e,t,a){e.exports=a(464)},246:function(e,t,a){},305:function(e,t,a){},319:function(e,t,a){},458:function(e,t){},464:function(e,t,a){"use strict";a.r(t);var n,r=a(0),o=a.n(r),c=a(5),s=a.n(c),l=a(24),i=a(77),p=(a(246),a(82),a(32)),h=a(17),u=a(19),d=a(22),m=a(20),b=a(23),f=a(68),y=(a(181),a(44)),k=(a(74),a(4)),E=p.a.Sider,O=Object(l.b)("layers")(n=Object(l.c)(n=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={collapsed:!1},a.onCollapse=function(e){a.setState({collapsed:e})},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.location,a=e.layers;return o.a.createElement(E,null,o.a.createElement("div",{className:"logo"}),o.a.createElement(y.a,{theme:"dark",mode:"vertical",defaultSelectedKeys:["/"],selectedKeys:[t.pathname]},o.a.createElement(y.a.Item,{key:"/deploy"},o.a.createElement(i.b,{to:"/deploy"},o.a.createElement(k.a,{type:"download"}),"\u90e8\u7f72")),o.a.createElement(y.a.Item,{key:"/notifications"},o.a.createElement(i.b,{to:"/notifications"},o.a.createElement(k.a,{type:"dashboard"}),"\u96c6\u7fa4\u7ba1\u7406"))),o.a.createElement(y.a,{theme:"dark",mode:"vertical",selectable:!1,onClick:function(e){"hosts"===e.key&&(a.hostListVisible=!0)}},o.a.createElement(y.a.Item,{key:"hosts"},o.a.createElement(k.a,{type:"deployment-unit"}),"\u914d\u7f6e\u673a\u5668"),o.a.createElement(y.a.Item,{key:"settings"},o.a.createElement(k.a,{type:"setting"}),"\u8bbe\u7f6e"),o.a.createElement(y.a.SubMenu,{key:"language",title:o.a.createElement("span",null,o.a.createElement(k.a,{type:"global"}),"\u8bed\u8a00")},o.a.createElement(y.a.Item,{key:"zh"},"\u7b80\u4f53\u4e2d\u6587"),o.a.createElement(y.a.Item,{key:"en"},"\u82f1\u6587"))))}}]),t}(o.a.Component))||n)||n,v=Object(f.f)(O),g=(a(305),a(55)),j=a(143);function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(a,!0).forEach((function(t){Object(g.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var S,P,x,D,A=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).animeRef=o.a.createRef(),a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){if(this.animeRef.current){var e={targets:this.animeRef.current.querySelectorAll("path"),easing:"easeInOutCubic",duration:1e3,delay:function(e,t){return 250*t}};j.a.timeline().add(w({},e,{strokeDashoffset:[j.a.setDashoffset,0]})).add(w({},e,{offset:"+=500",strokeDashoffset:[0,j.a.setDashoffset],opacity:0}))}}},{key:"render",value:function(){return o.a.createElement(p.a,null,o.a.createElement("svg",{ref:this.animeRef,viewBox:"0 0 100 100",width:"400px",id:"logo"},o.a.createElement("path",{fill:"none",stroke:"#ED1A3B",d:"M51.1 11.3L13.5 30.8 13.5 69.9 51.1 89.4 88.5 69.9 88.5 30.9z"}),o.a.createElement("path",{fill:"none",stroke:"#ED1A3B",d:"M48.5 37.1L48.5 73.3 39.5 68.6 39.5 41.8 27.5 48 27.5 38.3 51 26.1 60.4 31z"}),o.a.createElement("path",{fill:"none",stroke:"#ED1A3B",d:"M67.5 66L58.5 70.7 58.5 42.2 67.5 37.5z"})))}}]),t}(o.a.Component),H=(a(230),a(140)),N=(a(196),a(70)),I=(a(161),a(67)),V=a(34),T=a.n(V),_=(a(95),a(48)),K=(a(116),a(52)),F=(a(64),a(18)),B=(a(198),a(69)),L=(a(199),a(42)),R=(a(200),a(104)),z=(a(162),a(41)),M=a(2),J=a.n(M);a(319);function q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function G(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?q(a,!0).forEach((function(t){Object(g.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):q(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Q,U,W,X=Object(l.c)(S=function(e){function t(){return Object(h.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"host-view-vis-dc"},o.a.createElement("div",{className:"host-view-vis-dc-title"},this.props.checkable?o.a.createElement(z.a,{onChange:this.props.onCheckChange,indeterminate:this.props.checkIndeterminate,checked:this.props.checked,style:{marginRight:"10px"}}):null,o.a.createElement(k.a,{type:"cloud"})," \u673a\u623f\uff1a",this.props.dcName||"\u9ed8\u8ba4"),o.a.createElement("div",{className:"host-view-vis-dc-content"},this.props.children))}}]),t}(o.a.Component))||S,Y=Object(l.c)(P=function(e){function t(){return Object(h.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement(_.a,{title:o.a.createElement(o.a.Fragment,null,this.props.checkable?o.a.createElement(z.a,{onChange:this.props.onCheckChange,indeterminate:this.props.checkIndeterminate,checked:this.props.checked,style:{marginRight:"10px"}}):null,o.a.createElement(k.a,{type:"database"})," \u673a\u67b6\uff1a",this.props.rackName||"\u9ed8\u8ba4"),bodyStyle:{padding:0}},this.props.children)}}]),t}(o.a.Component))||P,Z=Object(l.c)(x=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(){a.props.clickable&&a.props.onClick&&a.props.onClick(a.props.host)},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:J()(["host-view-vis-host",{clickable:this.props.clickable}]),key:this.props.host.id,onClick:this.handleClick},this.props.checkable?o.a.createElement(z.a,{onChange:this.props.onCheckChange,checked:this.props.checked,style:{marginRight:"10px"}}):null,o.a.createElement("div",{className:"host-view-vis-host-content"},o.a.createElement("div",null,o.a.createElement(R.a.Text,null,this.props.host.name)),o.a.createElement("div",null,o.a.createElement(R.a.Text,{disabled:!0},this.props.host.username,"@",this.props.host.host,":",this.props.host.port)),this.props.children))}}]),t}(o.a.Component))||x,$=Object(l.c)(D=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).updateCheckedHost=function(e){a.props.onCheckedHostsChange&&a.props.onCheckedHostsChange(e)},a.handleHostCheckChange=function(e,t){a.updateCheckedHost(G({},a.props.checkedHosts,Object(g.a)({},e,t)))},a.handleRackCheckChange=function(e,t,n){var r={};T()(a.props.hosts).forEach((function(a){a.dc===e&&a.rack===t&&(r[a.id]=n)})),a.updateCheckedHost(G({},a.props.checkedHosts,{},r))},a.handleDcCheckChange=function(e,t){var n={};T()(a.props.hosts).forEach((function(a){a.dc===e&&(n[a.id]=t)})),a.updateCheckedHost(G({},a.props.checkedHosts,{},n))},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;if(0===Object.keys(this.props.hosts).length)return o.a.createElement("div",{style:{padding:"50px"}},o.a.createElement(K.a,{description:"\u60a8\u8fd8\u6ca1\u6709\u914d\u7f6e\u673a\u5668"}));var t=T()(this.props.hosts).groupBy("dc").toPairs().map((function(e){return[e[0],T()(e[1]).groupBy("rack").toPairs().sortBy(0).value()]})).sortBy(0).value(),a={},n={},r={},c={};if(this.props.checkable){for(var s in T.a.forEach(this.props.hosts,(function(e){a[e.dc]||(a[e.dc]=[]),a[e.dc].push(e),n[e.dc+"|"+e.rack]||(n[e.dc+"|"+e.rack]=[]),n[e.dc+"|"+e.rack].push(e)})),a){var l=!1,i=!1;a[s].forEach((function(t){e.props.checkedHosts&&e.props.checkedHosts[t.id]?l=!0:i=!0})),l&&i?r[s]={check:!0,indeterminate:!0}:l?r[s]={check:!0,indeterminate:!1}:i&&(r[s]={check:!1,indeterminate:!1})}for(var p in n){var h=!1,u=!1;n[p].forEach((function(t){e.props.checkedHosts[t.id]?h=!0:u=!0})),h&&u?c[p]={check:!0,indeterminate:!0}:h?c[p]={check:!0,indeterminate:!1}:u&&(c[p]={check:!1,indeterminate:!1})}}return o.a.createElement(o.a.Fragment,null,t.map((function(t){return o.a.createElement(X,{dcName:t[0],key:t[0],checkable:e.props.checkable,checked:e.props.checkable&&r[t[0]].check,checkIndeterminate:e.props.checkable&&r[t[0]].indeterminate,onCheckChange:function(a){e.handleDcCheckChange(t[0],a.target.checked)}},T.a.chunk(t[1],3).map((function(a,n){return o.a.createElement(B.a,{gutter:16,key:n},a.map((function(a){return o.a.createElement(L.a,{span:8,key:a[0]},o.a.createElement(Y,{rackName:a[0],key:a[0],checkable:e.props.checkable,checked:e.props.checkable&&c[t[0]+"|"+a[0]].check,checkIndeterminate:e.props.checkable&&c[t[0]+"|"+a[0]].indeterminate,onCheckChange:function(n){e.handleRackCheckChange(t[0],a[0],n.target.checked)}},a[1].map((function(t){return o.a.createElement(Z,{host:t,key:t.id,clickable:e.props.clickable,onClick:e.props.onHostClick,checkable:e.props.checkable,checked:e.props.checkable&&e.props.checkedHosts[t.id],onCheckChange:function(a){e.handleHostCheckChange(t.id,a.target.checked)}},e.props.hostChildren?e.props.hostChildren[t.id]:null)}))))})))})))})))}}]),t}(o.a.Component))||D,ee=Object(l.b)("layers","hosts")(Q=Object(l.c)(Q=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={hostChecks:{}},a.handleCheckedHostsChange=function(e){a.setState({hostChecks:e})},a.handleSelectAll=function(){var e={};T.a.forEach(a.props.hosts.hosts,(function(t){return e[t.id]=!0})),a.setState({hostChecks:e})},a.handleDeSelectAll=function(){a.setState({hostChecks:{}})},a.handleNext=function(){var e=[];for(var t in a.state.hostChecks)a.state.hostChecks[t]&&e.push(t);0!==e.length?a.props.onNextStep&&a.props.onNextStep(e):I.a.error({title:"\u64cd\u4f5c\u5931\u8d25",content:"\u8bf7\u9009\u62e9\u81f3\u5c11\u4e00\u4e2a\u76ee\u6807\u673a\u5668\u7528\u4e8e\u90e8\u7f72 TiDB \u96c6\u7fa4"})},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.hosts.hosts).length>0;return o.a.createElement(_.a,{bordered:!1,title:"\u8bf7\u9009\u62e9\u90e8\u7f72 TiDB \u96c6\u7fa4\u7684\u76ee\u6807\u673a\u5668",bodyStyle:{padding:0},extra:o.a.createElement(F.a.Group,null,o.a.createElement(F.a,{onClick:function(){return e.props.layers.hostListVisible=!0}},"\u914d\u7f6e\u673a\u5668"),o.a.createElement(F.a,{onClick:function(){return e.props.layers.hostAddVisible=!0}},"\u521b\u5efa\u673a\u5668"),o.a.createElement(F.a,{onClick:this.handleSelectAll},"\u5168\u9009"),o.a.createElement(F.a,{onClick:this.handleDeSelectAll},"\u53d6\u6d88\u5168\u9009"))},t?o.a.createElement(o.a.Fragment,null,o.a.createElement($,{hosts:this.props.hosts.hosts,checkable:!0,onCheckedHostsChange:this.handleCheckedHostsChange,checkedHosts:this.state.hostChecks}),o.a.createElement("div",{style:{padding:"16px"}},o.a.createElement(F.a,{type:"primary",onClick:this.handleNext},"\u4fdd\u5b58\u5e76\u9009\u62e9\u7ec4\u4ef6 ",o.a.createElement(k.a,{type:"right"})))):o.a.createElement(K.a,{description:"\u60a8\u8fd8\u6ca1\u6709\u914d\u7f6e\u673a\u5668"},o.a.createElement(F.a,{type:"primary",onClick:function(){return e.props.layers.hostAddVisible=!0}},"\u6dfb\u52a0\u673a\u5668")))}}]),t}(o.a.Component))||Q)||Q,te=(a(203),a(26)),ae=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleNext=function(){a.props.form.validateFields((function(e,t){e||a.props.onNextStep&&a.props.onNextStep(t)}))},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return o.a.createElement(_.a,{bordered:!1,title:"\u8bf7\u9009\u62e9\u9700\u8981\u90e8\u7f72\u7684 TiDB \u7ec4\u4ef6"},o.a.createElement(te.a,{layout:"vertical"},o.a.createElement(te.a.Item,{extra:"PD \u7ec4\u4ef6\u8d1f\u8d23\u534f\u8c03\u4e8b\u52a1\u4e0e\u8c03\u5ea6\u6570\u636e\uff0c\u5fc5\u9009"},o.a.createElement(z.a,{disabled:!0,checked:!0},"PD")),o.a.createElement(te.a.Item,{extra:"TiKV \u7ec4\u4ef6\u8d1f\u8d23\u5b58\u50a8\u6570\u636e\uff0c\u5fc5\u9009"},o.a.createElement(z.a,{disabled:!0,checked:!0},"TiKV")),o.a.createElement(te.a.Item,{extra:"TiDB \u7ec4\u4ef6\u63d0\u4f9b SQL \u5c42\u8ba1\u7b97\u529f\u80fd\uff0c\u82e5\u4e0d\u52fe\u9009\u5219\u53ea\u90e8\u7f72 KV \u6570\u636e\u5e93"},e("tidb",{valuePropName:"checked",initialValue:!0})(o.a.createElement(z.a,null,"TiDB"))),o.a.createElement(te.a.Item,{extra:"\u6536\u96c6\u5e76\u5b58\u50a8\u6240\u6709\u7ec4\u4ef6\u53ca\u8282\u70b9\u7684\u76d1\u63a7\uff0c\u5e76\u63d0\u4f9b\u53ef\u89c6\u5316\u754c\u9762\u5c55\u793a"},e("metrics",{valuePropName:"checked",initialValue:!0})(o.a.createElement(z.a,null,"\u76d1\u63a7\uff08Prometheus\u3001Node Exporter \u53ca Grafana\uff09"))),o.a.createElement(te.a.Item,{extra:"TiSpark \u7ec4\u4ef6\u53ef\u4ee5\u8ba1\u7b97\u5927\u578b\u5206\u6790\u578b SQL\uff08OLAP\uff09"},e("tispark",{valuePropName:"checked",initialValue:!1})(o.a.createElement(z.a,null,"TiSpark"))),o.a.createElement(te.a.Item,{extra:"\u5728\u7ec4\u4ef6\u8fdb\u7a0b\u5d29\u6e83\u65f6\u57fa\u4e8e Supervise \u81ea\u52a8\u91cd\u542f\u7ec4\u4ef6\uff08\u6ce8\uff1a\u4e0d\u4f1a\u5f00\u673a\u81ea\u542f\u52a8\uff09"},e("supervise",{valuePropName:"checked",initialValue:!0})(o.a.createElement(z.a,null,"Supervise \u8fdb\u7a0b\u5b88\u62a4"))),o.a.createElement(F.a,{type:"primary",onClick:this.handleNext},"\u4fdd\u5b58\u5e76\u9884\u89c8\u90e8\u7f72\u65b9\u6848 ",o.a.createElement(k.a,{type:"right"}))))}}]),t}(o.a.Component),ne=te.a.create({name:"deploy_components"})(ae),re=(a(410),a(73)),oe="red",ce="orange",se="magenta",le="cyan",ie="blue",pe="purple",he="gold",ue={pd:o.a.createElement(re.a,{key:"pd",color:oe},"PD"),tikv:o.a.createElement(re.a,{key:"tikv",color:ce},"TiKV"),tidb:o.a.createElement(re.a,{key:"tidb",color:se},"TiDB"),prometheus:o.a.createElement(re.a,{key:"prometheus",color:le},"Prometheus"),node_exporter:o.a.createElement(re.a,{key:"node_exporter",color:ie},"NodeExporter"),grafana:o.a.createElement(re.a,{key:"grafana",color:pe},"Grafana"),tispark:o.a.createElement(re.a,{key:"tispark",color:he},"TiSpark")},de=Object(l.b)("hosts")(U=Object(l.c)(U=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleNext=function(){a.props.onNextStep&&a.props.onNextStep()},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;if(!this.props.topo)return null;var t=T()(this.props.hosts.hosts).toPairs().filter((function(t){return t[0]in e.props.topo})).fromPairs().value(),a={};for(var n in this.props.topo){var r=[];for(var c in this.props.topo[n])this.props.topo[n][c]&&r.push(ue[c]);a[n]=r}return o.a.createElement(_.a,{bordered:!1,title:"\u67e5\u770b\u5e76\u4fee\u6539\u90e8\u7f72\u65b9\u6848",bodyStyle:{padding:0}},o.a.createElement(_.a,null,o.a.createElement("div",null,o.a.createElement("p",null,"\u60a8\u53ef\u4ee5\u5728\u4e3b\u673a\u4e4b\u95f4\u62d6\u52a8\u7ec4\u4ef6\uff0c\u4ece\u800c\u4fee\u6539\u90e8\u7f72\u65b9\u6848\uff0c\u6216\u4ece\u6b64\u533a\u57df\u62d6\u52a8\u7ec4\u4ef6\u5230\u4e3b\u673a\u4e2d\u3002")),o.a.createElement("div",null,Object.values(ue))),o.a.createElement($,{hosts:t,hostChildren:a}),o.a.createElement("div",{style:{padding:"16px"}},o.a.createElement(F.a,{type:"primary",onClick:this.handleNext,loading:this.props.inProgress},"\u5f00\u59cb\u90e8\u7f72 ",o.a.createElement(k.a,{type:"right"}))))}}]),t}(o.a.Component))||U)||U,me=a(90),be=a.n(me),fe=a(237),ye=a.n(fe);function ke(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Ee(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ke(a,!0).forEach((function(t){Object(g.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ke(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Oe=function(e){function t(){return Object(h.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{style:{display:this.props.show?"block":"none"}},this.props.children)}}]),t}(o.a.Component);function ve(e,t){var a=Number.MAX_VALUE,n=null;for(var r in e)if(!e[r][t]){var o=T.a.filter(Object.values(e[r])).length;o<a&&(a=o,n=r)}n&&(e[n][t]=!0)}var ge,je,Ce,we=Object(l.b)("hosts")(W=Object(l.c)(W=Object(f.f)(W=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={tabKey:"hosts",hosts:[],topo:null,inSubmitProgress:!1},a.handleStartDeploy=function(){var e=[];for(var t in a.state.topo){var n=a.props.hosts.hosts[t],r=a.state.topo[t];r.tidb&&e.push({role:"tidb",server_ip:n.host,server_port:4e3,status_port:10080,data_dir:"/home/".concat(n.username,"/tidb")}),r.tikv&&e.push({role:"tikv",server_ip:n.host,server_port:20160,status_port:20180,data_dir:"/home/".concat(n.username,"/tikv")}),r.pd&&e.push({pd_id:be()(),role:"pd",server_ip:n.host,server_port:20160,status_port:20180,data_dir:"/home/".concat(n.username,"/tikv")})}a.setState({inSubmitProgress:!0}),ye.a.post("/submitTask",e).then((function(e){e.data&&e.data.task_id?a.props.history.push("/progress/".concat(e.data.task_id)):(a.setState({inSubmitProgress:!1}),I.a.error({title:"\u9012\u4ea4\u5931\u8d25",content:"\u672a\u77e5\u670d\u52a1\u5668\u54cd\u5e94 "+JSON.stringify(e.data)}))}))},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(p.a,null,o.a.createElement(p.a.Content,{style:{backgroundColor:"#FFF"}},o.a.createElement(H.a,{title:"\u90e8\u7f72",subTitle:"\u90e8\u7f72\u4e00\u4e2a\u65b0\u7684 TiDB / TiKV \u96c6\u7fa4",footer:o.a.createElement(N.a,{animated:!1,onChange:function(t){return e.setState({tabKey:t})},activeKey:this.state.tabKey},o.a.createElement(N.a.TabPane,{tab:"1. \u76ee\u6807\u673a\u5668",key:"hosts"}),o.a.createElement(N.a.TabPane,{tab:"2. \u7ec4\u4ef6",key:"components",disabled:0===this.state.hosts.length}),o.a.createElement(N.a.TabPane,{tab:"3. \u90e8\u7f72\u65b9\u6848",key:"view_topo",disabled:!this.state.topo}))})),o.a.createElement(p.a.Content,{style:{padding:"20px"}},o.a.createElement(Oe,{show:"hosts"===this.state.tabKey},o.a.createElement(ee,{onNextStep:function(t){e.setState({hosts:t,tabKey:"components"})}})),o.a.createElement(Oe,{show:"components"===this.state.tabKey},o.a.createElement(ne,{onNextStep:function(t){var a=function(e,t){var a=Ee({},t);if(delete a.supervise,a.metrics&&(a.prometheus=!0,a.node_exporter=!0,a.grafana=!0,delete a.metrics),0===e.length)throw new Error("\u5fc5\u987b\u9009\u62e9\u81f3\u5c11\u4e00\u4e2a\u76ee\u6807\u673a\u5668\u90e8\u7f72 TiDB \u7ec4\u4ef6");var n={};if(e.forEach((function(e){return n[e]={}})),1===e.length)return n[e[0]]=a,n;if(a.node_exporter&&(e.forEach((function(e){return n[e].node_exporter=!0})),delete a.node_exporter),2===e.length){for(var r in a)a[r]&&ve(n,r);return n}var o=Math.max(e.length,3);a.tidb&&(o=Math.max(~~(e.length/2),3));for(var c=0;c<o;c++)ve(n,"tikv");a.tikv=!1;for(var s=0;s<3;s++)ve(n,"pd");if(a.pd=!1,a.tidb){for(var l=~~(e.length/2),i=0;i<l;i++)ve(n,"tidb");a.tidb=!1}for(var p in a)a[p]&&ve(n,p);return n}(e.state.hosts,Ee({},t,{pd:!0,tikv:!0}));e.setState({tabKey:"view_topo",topo:a})}})),o.a.createElement(Oe,{show:"view_topo"===this.state.tabKey},o.a.createElement(de,{topo:this.state.topo,onNextStep:this.handleStartDeploy,inProgress:this.state.inSubmitProgress}))))}}]),t}(o.a.Component))||W)||W)||W,Se=(a(465),a(179)),Pe=a(239),xe=a(238),De=a.n(xe),Ae=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={tasks:[]},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id,a=De()();a.on("connect",(function(){a.emit("deploy",{task_id:t})})),a.on("sync",(function(t){console.log("sync",t),e.setState({tasks:t.steps})})),a.on("task",(function(t){console.log("task",t),e.state.tasks.forEach((function(a,n){a.step_id==t.step_id&&(e.state.tasks[n]=a)})),e.setState({tasks:Object(Pe.a)(e.state.tasks)})})),this.socket=a}},{key:"componentWillUnmount",value:function(){this.socket&&(this.socket.removeAllListeners(),this.socket.close(),this.socket=null)}},{key:"render",value:function(){var e={finished:o.a.createElement(k.a,{type:"check-circle",spin:!0,style:{color:"#37b24d"}}),unfinished:null,running:o.a.createElement(k.a,{type:"loading",spin:!0,style:{color:"#fa5252"}})};return o.a.createElement(p.a,null,o.a.createElement(p.a.Content,{style:{backgroundColor:"#FFF"}},o.a.createElement(H.a,{title:"\u90e8\u7f72\u8fdb\u5ea6",subTitle:"\u6b63\u5728\u90e8\u7f72\u96c6\u7fa4..."})),o.a.createElement(p.a.Content,{style:{padding:"20px"}},o.a.createElement(_.a,{bordered:!1},o.a.createElement(Se.a,{bordered:!0,dataSource:this.state.tasks,renderItem:function(t){return o.a.createElement(Se.a.Item,{style:{display:"flex",flexDirection:"row"}},o.a.createElement("div",{style:{width:"60px"}},e[t.status]),o.a.createElement("div",null,t.msg))}}))))}}]),t}(o.a.Component),He=(a(229),a(141)),Ne=Object(l.b)("layers","hosts")(ge=Object(l.c)(ge=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={hostChecks:{}},a.handleCheckedHostsChange=function(e){a.setState({hostChecks:e})},a.handleSelectAll=function(){var e={};T.a.forEach(a.props.hosts.hosts,(function(t){return e[t.id]=!0})),a.setState({hostChecks:e})},a.handleDeSelectAll=function(){a.setState({hostChecks:{}})},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(He.a,{closable:!0,title:o.a.createElement("span",null,o.a.createElement(k.a,{type:"deployment-unit"})," \u914d\u7f6e\u673a\u5668"),placement:"right",visible:this.props.layers.hostListVisible,onClose:function(){return e.props.layers.hostListVisible=!1},zIndex:500,width:"100vw",drawerStyle:{background:"#f0f2f5"},bodyStyle:{padding:0}},o.a.createElement(p.a.Content,{style:{background:"#FFF",padding:"16px"}},o.a.createElement(F.a,{type:"primary",onClick:function(){return e.props.layers.hostAddVisible=!0},style:{marginRight:"10px"}},"\u521b\u5efa\u673a\u5668"),o.a.createElement(F.a.Group,{style:{marginRight:"10px"}},o.a.createElement(F.a,{onClick:this.handleSelectAll},"\u5168\u9009"),o.a.createElement(F.a,{onClick:this.handleDeSelectAll},"\u53d6\u6d88\u5168\u9009")),o.a.createElement(F.a.Group,{style:{marginRight:"10px"}},o.a.createElement(F.a,null,"\u6279\u91cf\u7f16\u8f91"),o.a.createElement(F.a,null,"\u6279\u91cf\u5220\u9664"))),o.a.createElement($,{hosts:this.props.hosts.hosts,clickable:!0,checkable:!0,onHostClick:function(e){return console.log(e)},onCheckedHostsChange:this.handleCheckedHostsChange,checkedHosts:this.state.hostChecks}))}}]),t}(o.a.Component))||ge)||ge,Ie=(a(201),a(53)),Ve=(a(462),a(108)),Te=(a(214),a(66)),_e=a(15);function Ke(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var Fe,Be,Le,Re,ze,Me,Je,qe,Ge,Qe=Object(l.b)("hosts")(je=Object(l.c)(je=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isPubKeyAuth:!1,templateValue:void 0},a.handleChangeAuthMethod=function(e){a.setState({isPubKeyAuth:e.target.checked})},a.handleSubmit=function(){a.props.form.validateFields((function(e,t){e||a.props.onSubmit&&a.props.onSubmit(t,!0)}))},a.handleSubmitAndNew=function(){a.props.form.validateFields((function(e,t){e||a.props.onSubmit&&(a.props.onSubmit(t,!1),a.handleReset())}))},a.handleReset=function(){a.props.form.resetFields(),a.setState({templateValue:void 0})},a.handleTemplateChange=function(e){a.setState({templateValue:e});var t=Object(_e.o)(a.props.hosts.hosts[e]);a.props.form.setFieldsValue(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ke(a,!0).forEach((function(t){Object(g.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ke(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},t,{name:"",host:""}))},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return o.a.createElement(te.a,{layout:"vertical"},o.a.createElement(Ve.a,{bordered:!1,defaultActiveKey:["import","basic"]},o.a.createElement(Ve.a.Panel,{header:"\u5bfc\u5165\u6a21\u677f",key:"import"},o.a.createElement(te.a.Item,{label:"\u4ece\u73b0\u6709\u4e3b\u673a\u914d\u7f6e\u590d\u5236"},o.a.createElement(Te.a,{showSearch:!0,placeholder:"\u9009\u62e9\u4e3b\u673a",optionFilterProp:"children",filterOption:function(e,t){return(t.props.label.toLowerCase()+"|"+t.props.value.username+"@"+t.props.value.host+":"+t.props.value.port).indexOf(e.toLowerCase())>=0},optionLabelProp:"label",onChange:this.handleTemplateChange,value:this.state.templateValue},Object.values(this.props.hosts.hosts).map((function(e){return o.a.createElement(Te.a.Option,{value:e.id,label:e.name,key:e.id},o.a.createElement("div",null,e.name),o.a.createElement("div",null,o.a.createElement(R.a.Text,{disabled:!0},e.username,"@",e.host,":",e.port)))}))))),o.a.createElement(Ve.a.Panel,{header:"\u8be6\u7ec6\u914d\u7f6e",key:"basic"},o.a.createElement(te.a.Item,{label:"\u552f\u4e00\u540d\u79f0"},e("name")(o.a.createElement(Ie.a,{placeholder:"\u7559\u7a7a\u81ea\u52a8\u751f\u6210"}))),o.a.createElement(te.a.Item,{label:"\u5730\u5740"},e("host",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4e3b\u673a\u5730\u5740"}]})(o.a.createElement(Ie.a,{placeholder:"\u4e3b\u673a\u5730\u5740\uff0cIP \u6216\u57df\u540d"}))),o.a.createElement(te.a.Item,{label:"\u7aef\u53e3"},e("port",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7aef\u53e3"}],initialValue:"22"})(o.a.createElement(Ie.a,null))),o.a.createElement(te.a.Item,{label:"\u767b\u5f55\u7528\u6237\u540d"},e("username",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u767b\u5f55\u7528\u6237\u540d"}]})(o.a.createElement(Ie.a,null))),o.a.createElement(te.a.Item,null,e("isPubKeyAuth",{initialValue:!1})(o.a.createElement(z.a,{checked:this.state.isPubKeyAuth,onChange:this.handleChangeAuthMethod},"\u4f7f\u7528\u79c1\u94a5\u767b\u5f55"))),this.state.isPubKeyAuth?o.a.createElement(o.a.Fragment,null,o.a.createElement(te.a.Item,{label:"\u79c1\u94a5"},e("privateKey",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u79c1\u94a5"}]})(o.a.createElement(Ie.a.TextArea,null))),o.a.createElement(te.a.Item,{label:"\u79c1\u94a5\u5bc6\u7801"},e("privateKeyPassword")(o.a.createElement(Ie.a.Password,null)))):o.a.createElement(te.a.Item,{label:"\u5bc6\u7801"},e("password",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u767b\u5f55\u5bc6\u7801"}]})(o.a.createElement(Ie.a.Password,null)))),o.a.createElement(Ve.a.Panel,{header:"\u9ad8\u7ea7\u914d\u7f6e",key:"advanced"},o.a.createElement(te.a.Item,{label:"\u4f4d\u7f6e\u6807\u7b7e: DC"},e("dc",{initialValue:""})(o.a.createElement(Ie.a,null))),o.a.createElement(te.a.Item,{label:"\u4f4d\u7f6e\u6807\u7b7e: Rack"},e("rack",{initialValue:""})(o.a.createElement(Ie.a,null))))),o.a.createElement("div",{style:{margin:"16px"}},o.a.createElement(F.a,{type:"primary",onClick:this.handleSubmit},"\u6dfb\u52a0"),"\xa0",o.a.createElement(F.a,{onClick:this.handleSubmitAndNew},"\u4fdd\u5b58\u5e76\u6dfb\u52a0\u4e0b\u4e00\u4e2a"),"\xa0",o.a.createElement(F.a,{onClick:this.handleReset},"\u91cd\u7f6e")))}}]),t}(o.a.Component))||je)||je,Ue=te.a.create({name:"add_form"})(Qe),We=Object(l.b)("layers","hosts")(Ce=Object(l.c)(Ce=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e,t){a.props.hosts.addHost(e)&&t&&(a.props.layers.hostAddVisible=!1)},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(He.a,{closable:!0,destroyOnClose:!0,title:"\u6dfb\u52a0 SSH \u8fdc\u7a0b\u4e3b\u673a",placement:"right",visible:this.props.layers.hostAddVisible,onClose:function(){return e.props.layers.hostAddVisible=!1},zIndex:501,width:400,bodyStyle:{padding:0}},o.a.createElement(Ue,{onSubmit:this.handleSubmit}))}}]),t}(o.a.Component))||Ce)||Ce,Xe=function(e){function t(){return Object(h.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement(p.a,{style:{minHeight:"100vh"}},o.a.createElement(v,null),o.a.createElement(p.a.Content,null,o.a.createElement(f.c,null,o.a.createElement(f.a,{exact:!0,path:"/"},o.a.createElement(A,null)),o.a.createElement(f.a,{path:"/deploy"},o.a.createElement(we,null)),o.a.createElement(f.a,{path:"/progress/:id",component:Ae}))),o.a.createElement(Ne,null),o.a.createElement(We,null))}}]),t}(r.Component),Ye=a(80),Ze=a(58),$e=(a(173),new(Fe=function e(){Object(h.a)(this,e),Object(Ye.a)(this,"hostListVisible",Be,this),Object(Ye.a)(this,"hostAddVisible",Le,this)},Be=Object(Ze.a)(Fe.prototype,"hostListVisible",[_e.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Le=Object(Ze.a)(Fe.prototype,"hostAddVisible",[_e.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Fe)),et=new(Re=_e.d.bound,ze=function(){function e(){Object(h.a)(this,e),Object(Ye.a)(this,"hosts",Me,this),this.addHost({name:"uhost-ap3kilnh",host:"10.9.164.80",username:"root",password:"abc",port:22,dc:"ucloud",rack:"rack-1"}),this.addHost({name:"uhost-kesclakw",host:"10.9.136.246",username:"root",password:"abc",port:22,dc:"ucloud",rack:"rack-1"}),this.addHost({name:"uhost-ou3hu5yx",host:"10.9.158.146",username:"root",password:"abc",port:22,dc:"ucloud",rack:"rack-2"}),this.addHost({name:"uhost-x2ofoajg",host:"10.9.111.178",username:"root",password:"abc",port:22,dc:"ucloud",rack:"rack-2"}),this.addHost({name:"uhost-ahdkyu5j",host:"10.9.106.240",username:"root",password:"abc",port:22,dc:"ucloud",rack:"rack-1"}),this.addHost({name:"uhost-keoznqgf",host:"10.9.13.204",username:"root",password:"abc",port:22,dc:"ucloud",rack:"rack-2"}),this.addHost({host:"192.168.233.128",username:"tidb",password:"123456",port:22,dc:"Tongji"}),this.addHost({host:"192.168.233.129",username:"tidb",password:"123456",port:22,dc:"Tongji"}),this.addHost({host:"192.168.233.130",username:"tidb",password:"123456",port:22,dc:"Tongji"}),this.addHost({host:"192.168.233.131",username:"tidb",password:"123456",port:22,dc:"Tongji"})}return Object(u.a)(e,[{key:"addHost",value:function(e){return e.name||(e.name="".concat(e.username,"@").concat(e.host,":").concat(e.port)),e.port=parseInt(e.port),e.port?-1!==Object.values(this.hosts).map((function(e){return e.host})).indexOf(e.host)?(I.a.error({title:"\u6dfb\u52a0\u5931\u8d25",content:"\u4e3b\u673a ".concat(e.host," \u5df2\u5b58\u5728\uff0c\u4e0d\u80fd\u91cd\u590d\u6dfb\u52a0")}),!1):-1!==Object.values(this.hosts).map((function(e){return e.name})).indexOf(e.name)?(I.a.error({title:"\u6dfb\u52a0\u5931\u8d25",content:"\u552f\u4e00\u540d\u79f0 ".concat(e.name," \u5df2\u5b58\u5728\uff0c\u4e0d\u80fd\u91cd\u590d\u6dfb\u52a0")}),!1):(e.id=be()(),e.dc=e.dc||"",e.rack=e.rack||"",this.hosts[e.id]=e,!0):(I.a.error({title:"\u6dfb\u52a0\u5931\u8d25",content:"\u65e0\u6548\u7aef\u53e3"}),!1)}}]),e}(),Me=Object(Ze.a)(ze.prototype,"hosts",[_e.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),Object(Ze.a)(ze.prototype,"addHost",[Re],Object.getOwnPropertyDescriptor(ze.prototype,"addHost"),ze.prototype),ze),tt=new(Je=_e.d.bound,qe=function(){function e(){Object(h.a)(this,e),Object(Ye.a)(this,"deployments",Ge,this)}return Object(u.a)(e,[{key:"addDeployment",value:function(e,t,a){var n={id:be()(),hosts:JSON.parse(JSON.stringify(e)),config:JSON.parse(JSON.stringify(t)),topology:JSON.parse(JSON.stringify(a))};return this.deployments[n.id]=n,!0}}]),e}(),Ge=Object(Ze.a)(qe.prototype,"deployments",[_e.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),Object(Ze.a)(qe.prototype,"addDeployment",[Je],Object.getOwnPropertyDescriptor(qe.prototype,"addDeployment"),qe.prototype),qe);s.a.render(o.a.createElement(i.a,null,o.a.createElement(l.a,{hosts:et,deployments:tt,layers:$e},o.a.createElement(Xe,null))),document.getElementById("root"))}},[[241,1,2]]]);
//# sourceMappingURL=main.69c19f03.chunk.js.map