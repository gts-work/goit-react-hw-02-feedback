(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(7),o=a.n(c),s=a(2),i=a(3),l=a(5),u=a(4),b=a(0),d=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).feedbackPercentage=function(){var t=100*e.props.good/e.props.totalFeedback;return console.log("Statistic ~ good: ",e.props.good),console.log("Statistic ~ totalFeedback: ",e.props.totalFeedback),console.log("Statistic ~ count: ",t),Math.round(t)},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h3",{children:"Statistic"}),Object(b.jsxs)("p",{children:["Good: ",this.props.good]}),Object(b.jsxs)("p",{children:["Neutral: ",this.props.neutral]}),Object(b.jsxs)("p",{children:["Bad: ",this.props.bad]}),Object(b.jsxs)("p",{children:["Total: ",this.props.totalFeedback]}),Object(b.jsxs)("p",{children:["Positive feedback: ",this.feedbackPercentage()," %"]})]})}}]),a}(n.Component),j=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h3",{children:this.props.message})})}}]),a}(n.Component);j.defaultProps={message:"No feedback given"};var p=j,h=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(b.jsx)("button",{value:this.props.value,onClick:this.props.onLeaveFeedback,children:this.props.label},this.props.key)}}]),a}(n.Component);h.defaultProps={label:"Button"};var v=h,O=[{id:1,label:"Good",value:"good"},{id:2,label:"Neutral",value:"neutral"},{id:3,label:"Bad",value:"bad"}],f=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{children:O.map((function(t){var a=t.id,n=t.label,r=t.value;return Object(b.jsx)(v,{label:n,value:r,onLeaveFeedback:e.props.onLeaveFeedback},a)}))})}}]),a}(n.Component);f.defaultProps={title:"Please leave feedback"};var k=f,g=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:this.props.title}),Object(b.jsx)(k,{onLeaveFeedback:this.props.onLeaveFeedback})]})}}]),a}(n.Component);g.defaultProps={title:"Please leave feedback"};var x=g,F=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0,totalFeedback:0},e.handleVoiting=function(t){console.log("click: ",t.target.value),"good"===t.target.value&&(e.setState((function(e){return{good:e.good+1}})),console.log("Feedback ~ this.setState ~ good === ",e.state.good)),"neutral"===t.target.value&&e.setState((function(e){return{neutral:e.neutral+1}})),"bad"===t.target.value&&e.setState((function(e){return{bad:e.bad+1}})),e.countTotalFeedback()},e.countTotalFeedback=function(){e.setState((function(e){return{totalFeedback:e.totalFeedback+1}}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad,r=e.totalFeedback;return Object(b.jsxs)("div",{children:[Object(b.jsx)(x,{title:"Please leave feedback",onLeaveFeedback:this.handleVoiting}),r?Object(b.jsx)(d,{good:t,neutral:a,bad:n,totalFeedback:r}):Object(b.jsx)(p,{message:"No feedback given"})]})}}]),a}(n.Component),y=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsx)(F,{})})}}]),a}(n.Component);a(13);o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a85b84cd.chunk.js.map