!function e(t,n,r){function a(o,l){if(!n[o]){if(!t[o]){var i="function"==typeof require&&require;if(!l&&i)return i(o,!0);if(u)return u(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var s=n[o]={exports:{}};t[o][0].call(s.exports,function(e){var n=t[o][1][e];return a(n||e)},s,s.exports,e,t,n,r)}return n[o].exports}for(var u="function"==typeof require&&require,o=0;o<r.length;o++)a(r[o]);return a}({1:[function(e,t,n){$(document).ready(function(){$(function(){$(".date").datetimepicker({format:"DD-MM-YYYY",locale:"uk",allowInputToggle:!0,defaultDate:new Date,minDate:new Date,useCurrent:!0})}),window.setInterval(function(){var e=document.getElementById("checkInDisplay").value;if(null!==e){var t=e.substring(6,10),n=e.substring(3,5),r=e.substring(0,2);newDate=t+"-"+n+"-"+r,document.getElementById("checkIn").value=newDate}else{var a=(l=new Date).getDate(),u=l.getMonth()+1,o=l.getFullYear();a<10&&(a="0"+a),u<10&&(u="0"+u);var l=a+"/"+u+"/"+o;document.getElementById("DATE").value=l}},500),$(document).click(function(e){var t=$(e.target);!0!==$(".navbar-collapse").hasClass("show")||t.hasClass("navbar-toggler")||$(".navbar-toggler").click()})})},{}]},{},[1]);