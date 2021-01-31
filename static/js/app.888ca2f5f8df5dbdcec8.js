webpackJsonp([0],{"1Fi8":function(e,t){},"7wur":function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("7+uW"),r=s("mvHQ"),a=s.n(r),i={props:{btnText:{type:String,required:!0},onClick:{type:Function}}},o={render:function(){var e=this.$createElement;return(this._self._c||e)("button",{staticClass:"main-btn",on:{click:this.onClick}},[this._v(this._s(this.btnText))])},staticRenderFns:[]};var u=s("VU/8")(i,o,!1,function(e){s("Oced")},null,null).exports,l={props:{user:{type:Object,required:!0}}},c={render:function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("span",{staticClass:"user user--name"},[this._v(this._s(this.user.name))]),this._v(" "),t("span",{staticClass:"user user--phone"},[this._v(this._s(this.user.phoneNumber))])])},staticRenderFns:[]};var h={props:["users","shownSection"],components:{UserItem:s("VU/8")(l,c,!1,function(e){s("aQ8A")},null,null).exports,MainButton:u},data:function(){return{addBtnText:"Добавить"}},methods:{showAddSection:function(){this.shownSection.isAddBlockShown=!0},onHeaderClick:function(e){this.$emit("sort-users",e)}}},m={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"user-list"},[s("div",{directives:[{name:"show",rawName:"v-show",value:!e.users.length,expression:"!users.length"}],staticClass:"user-list__empty-list"},[s("h3",{staticClass:"user-list__empty-title"},[e._v("Добавте первого пользователя")])]),e._v(" "),s("MainButton",{staticClass:"user-list__add-btn",attrs:{btnText:e.addBtnText,onClick:e.showAddSection}}),e._v(" "),s("ul",{directives:[{name:"show",rawName:"v-show",value:e.users.length>0,expression:"users.length > 0"}],staticClass:"user-list__list"},[s("li",{staticClass:"user-list__item list__item--header"},[s("h4",{staticClass:"user-list__title user-list__title--name",on:{click:function(t){return e.onHeaderClick("name")}}},[e._v("Имя")]),e._v(" "),s("h4",{staticClass:"user-list__title user-list__title--phone",on:{click:function(t){return e.onHeaderClick("phoneNumber")}}},[e._v("Телефон")])]),e._v(" "),e._l(e.users,function(e){return s("UserItem",{key:e.id,staticClass:"user-list__item list__item--user",attrs:{user:e}})})],2)],1)},staticRenderFns:[]};var d=s("VU/8")(h,m,!1,function(e){s("7wur")},null,null).exports,p={props:{onClose:{type:Function,required:!0}}},v={render:function(){var e=this.$createElement;return(this._self._c||e)("button",{staticClass:"close-btn",on:{click:this.onClose}})},staticRenderFns:[]};var _={props:["selectOptions","shownSection","users"],components:{CloseButton:s("VU/8")(p,v,!1,function(e){s("XmjE")},null,null).exports,MainButton:u},data:function(){return{btnText:"Cохранить",userData:{name:"",phoneNumber:"","сhief":""},errorMessage:!1}},methods:{onSubmit:function(){if(this.userData.name&&this.userData.phoneNumber){var e={id:this.users.length+1,name:this.userData.name,phoneNumber:this.userData.phoneNumber,chief:this.userData.chief};this.$emit("add-user",e),this.userData.name="",this.userData.phoneNumber="",this.userData.chief="",this.errorMessage=!1}else this.errorMessage=!0},onClose:function(){this.shownSection.isAddBlockShown=!1,this.userData.name="",this.userData.phoneNumber="",this.userData.chief="",this.errorMessage=!1},formatNumber:function(){var e,t,s;this.userData.phoneNumber=(e=this.userData.phoneNumber,t=e.replace(/\D/g,"").split(/(?=.)/),(s=t.length-1)>=0&&t.unshift("+ "),s>=1&&t.splice(2,0," "),s>=4&&t.splice(6,0," "),s>=7&&t.splice(10,0,"-"),s>=9&&t.splice(13,0,"-"),t.join(""))},onClickSubmit:function(){}}},f={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"show",rawName:"v-show",value:e.shownSection.isAddBlockShown,expression:"shownSection.isAddBlockShown"}],staticClass:"add-user"},[s("header",{staticClass:"add-user__header"},[s("h4",{staticClass:"add-user__title"},[e._v("Добавление Пользователя")]),e._v(" "),s("CloseButton",{staticClass:"add-user__close-btn",attrs:{onClose:e.onClose}})],1),e._v(" "),s("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[s("ul",{staticClass:"add-user__input-list"},[s("li",[s("label",{attrs:{for:"user-name"}},[e._v("Имя")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.userData.name,expression:"userData.name"}],attrs:{type:"text",name:"name",id:"user-name"},domProps:{value:e.userData.name},on:{input:function(t){t.target.composing||e.$set(e.userData,"name",t.target.value)}}})]),e._v(" "),s("li",[s("label",{attrs:{for:"user-phone"}},[e._v("Телефон")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.userData.phoneNumber,expression:"userData.phoneNumber"}],attrs:{type:"text",name:"phone",id:"user-phone"},domProps:{value:e.userData.phoneNumber},on:{input:[function(t){t.target.composing||e.$set(e.userData,"phoneNumber",t.target.value)},e.formatNumber]}})]),e._v(" "),s("li",[s("label",{attrs:{for:"user-сhief"}},[e._v("Начальник")]),e._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:e.userData.chief,expression:"userData.chief"}],staticClass:"select",attrs:{type:"select",name:"сhief",id:"user-сhief"},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.userData,"chief",t.target.multiple?s:s[0])}}},e._l(e.selectOptions,function(t){return s("option",{key:t.id,domProps:{value:t.name}},[e._v("\n                      "+e._s(t.name)+"\n                  ")])}),0)])]),e._v(" "),s("MainButton",{staticClass:"add-user__save-btn",attrs:{btnText:e.btnText,onClick:e.onClickSubmit}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errorMessage,expression:"errorMessage"}],staticClass:"add-user__error-message"},[e._v("Поля 'Имя' и 'Телефон' должны быть заполнены")])],1)])},staticRenderFns:[]};var w={name:"App",components:{UserList:d,AddUser:s("VU/8")(_,f,!1,function(e){s("1Fi8")},null,null).exports},data:function(){return{users:[],shownSection:{isAddBlockShown:!1}}},mounted:function(){if(localStorage.getItem("users-test"))try{this.users=JSON.parse(localStorage.getItem("users-test"))}catch(e){localStorage.removeItem("users-test")}},methods:{addNewUser:function(e){this.users.push(e),localStorage.setItem("users-test",a()(this.users))},sortUsers:function(e){var t,s;t=this.users,s=e,t.sort(function(e,t){var n=e[s].toLowerCase(),r=t[s].toLowerCase();return n<r?-1:n>r?1:0})}}},b={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("UserList",{attrs:{users:e.users,shownSection:e.shownSection},on:{"sort-users":e.sortUsers}}),e._v(" "),s("AddUser",{attrs:{selectOptions:e.users,shownSection:e.shownSection,users:e.users},on:{"add-user":e.addNewUser}})],1)},staticRenderFns:[]};var C=s("VU/8")(w,b,!1,function(e){s("ykvo")},null,null).exports;n.a.config.productionTip=!1,new n.a({el:"#app",components:{App:C},template:"<App/>"})},Oced:function(e,t){},XmjE:function(e,t){},aQ8A:function(e,t){},ykvo:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.888ca2f5f8df5dbdcec8.js.map