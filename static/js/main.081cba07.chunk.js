(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(8),s=a.n(r),o=a(2),i=a(3),l=a(5),d=a(4),b=a(6),u=a.n(b),j=a(0),h=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).feedbackPercentage=function(){var t=100*e.props.good/e.props.totalFeedback();return Math.round(t)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.totalFeedback();return Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{className:u.a.statistic_title,children:"Statistic"}),Object(j.jsxs)("table",{className:u.a.statistic,children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Good"}),Object(j.jsx)("td",{children:this.props.good})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Neutral"}),Object(j.jsx)("td",{children:this.props.neutral})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Bad"}),Object(j.jsx)("td",{children:this.props.bad})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Total"}),Object(j.jsx)("td",{children:e})]})]}),Object(j.jsxs)("p",{className:u.a.voiting_percent,children:["Positive feedback: ",this.feedbackPercentage()," %"]})]})}}]),a}(c.Component),p=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(j.jsx)("div",{className:u.a.section,children:Object(j.jsx)("h3",{children:this.props.message})})}}]),a}(c.Component);p.defaultProps={message:"No feedback given"};var O=p,v=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(j.jsx)("button",{className:u.a.button,value:this.props.value,onClick:this.props.onLeaveFeedback,children:this.props.label},this.props.key)}}]),a}(c.Component);v.defaultProps={label:"Button"};var f=v,k=[{id:1,label:"Good",value:"good"},{id:2,label:"Neutral",value:"neutral"},{id:3,label:"Bad",value:"bad"}],g=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return Object(j.jsx)("div",{className:StyleSheet.options,children:k.map((function(t){var a=t.id,c=t.label,n=t.value;return Object(j.jsx)(f,{label:c,value:n,onLeaveFeedback:e.props.onLeaveFeedback},a)}))})}}]),a}(c.Component);g.defaultProps={title:"Please leave feedback"};var x=g,_=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:u.a.section,children:[Object(j.jsx)("h2",{children:this.props.title}),Object(j.jsx)(x,{onLeaveFeedback:this.props.onLeaveFeedback})]})}}]),a}(c.Component);_.defaultProps={title:"Please leave feedback"};var m=_,F=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={good:0,neutral:0,bad:0},e.handleVoiting=function(t){console.log("click: ",t.target.value),"good"===t.target.value&&(e.setState((function(e){return{good:e.good+1}})),console.log("Feedback ~ this.setState ~ good === ",e.state.good)),"neutral"===t.target.value&&e.setState((function(e){return{neutral:e.neutral+1}})),"bad"===t.target.value&&e.setState((function(e){return{bad:e.bad+1}}))},e.countTotalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad||0},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,c=e.bad;return Object(j.jsxs)("div",{className:u.a.feedbackBlock,children:[Object(j.jsx)(m,{title:"Please leave feedback",onLeaveFeedback:this.handleVoiting}),this.countTotalFeedback()?Object(j.jsx)(h,{good:t,neutral:a,bad:c,totalFeedback:this.countTotalFeedback}):Object(j.jsx)(O,{message:"No feedback given"})]})}}]),a}(c.Component),y=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)(F,{})})}}]),a}(c.Component);a(14),a(15);s.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root"))},6:function(e,t,a){e.exports={feedbackBlock:"Feedback_feedbackBlock__1UDLj",section:"Feedback_section__13Ibw",statistic:"Feedback_statistic__2pE11",statistic_title:"Feedback_statistic_title__3MF6L",button:"Feedback_button__1E_-H",voiting_percent:"Feedback_voiting_percent__1MZHE",options:"Feedback_options__1hX7O"}}},[[16,1,2]]]);
//# sourceMappingURL=main.081cba07.chunk.js.map