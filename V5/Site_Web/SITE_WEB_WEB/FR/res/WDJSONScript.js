/*! 22.0.1.0 */
/*! VersionVI: 01F260101d   */
var clWDJSONScriptMain=function(){"use strict";var n=0;return{JSONExecute:function(n,t){if(1==arguments.length){var i=clWDAJAXMain.sRequeteSynchroneTexte(!1,"",n,_PAGE_);return clWDUtil.oEvalJSON(i,{})}clWDAJAXMain.sRequeteAsynchroneTexte(!1,"",n,function(n){t(clWDUtil.oEvalJSON(n,{}))},clWDAJAXMain.ms_nAJAXExecuteJSONExterne)},JSONExecuteExterne:function(t,i,r){var f="Requete_"+n++,u=document.createElement("script");u.src=t+(t.indexOf("?")==-1?"?":"&")+i+"="+f;u.charset="UTF-8";window[f]=function(n){r(n);clWDUtil.oSupprimeElement(u);window[f]=null};u=document.body.appendChild(u)}}}();clWDJSONScriptMain.JSONScriptExecute=clWDJSONScriptMain.JSONExecuteExterne