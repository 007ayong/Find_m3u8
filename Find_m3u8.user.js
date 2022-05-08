// ==UserScript==
// @name         Find_m3u8
// @namespace    https://github.com/007ayong/Find_m3u8
// @version      0.1
// @description  查找并下载各大视频网站的 m3u8 链接或文件
// @author       ayong
// @updateURL    https://raw.githubusercontent.com/007ayong/Find_m3u8/Find_m3u8.user.js
// @match        https://www.iq.com/*
// @icon         none
// @grant        none
// @require      https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js
// @require      https://cdn.bootcdn.net/ajax/libs/FileSaver.js/2.0.5/FileSaver.js
// ==/UserScript==

(function () {
    'use strict';

    // Your code here...
    // 创建一个按钮
    var button = document.createElement("button");
    button.innerHTML = "下载m3u8";
    button.style = "position: fixed;top: 17px;left: 28px;width: 80px;height: 28px;background-color: #00c234;border-radius: 4px;font-size: 12px;color: #fff;z-index: 99999;";
    // 点击按钮执行下载
    button.onclick = function iq() {
        try { var info = playerObject._player._core._movieinfo.originalData.data.program.video; info.forEach(function (item, index) { if (item._selected) { var m3u8Content = ""; if (item.m3u8 == undefined) { try { if (typeof (eval(cmd5x)) == "function") { } } catch (e) { var req1 = new XMLHttpRequest(); req1.open("GET", "https://static.iqiyi.com/js/common/f6a3054843de4645b34d205a9f377d25.js", false); req1.onload = function () { var script = document.createElement("script"); script.text = req1.responseText; document.getElementsByTagName("head")[0].appendChild(script) }; req1.send(null) } var fs = item.fs; var content = "#EXTM3U\n"; fs.forEach(function (fs_i, fs_index) { var url = fs_i.l; var prefix = "https://data.video.iqiyi.com/videos"; var api = prefix + url; try { var t = playerObject._player._core._movieinfo.originalData.data.boss.data.t; api = prefix + url + "&cross-domain=1&t=" + t + "&QY00001=" + /qd_uid=(\d+)/g.exec(url)[1] + "&ib=4&ptime=0&ibt=" + cmd5x(t + /\/(\w{10,})/g.exec(url)[1]) } catch (err) { } var req = new XMLHttpRequest(); req.overrideMimeType("application/json"); req.open("GET", api, false); req.onload = function () { var jsonResponse = JSON.parse(req.responseText); content += "#EXTINF:0\n" + jsonResponse["l"] + "\n" }; req.send(null) }); content += "#EXT-X-ENDLIST"; m3u8Content = content } else { m3u8Content = item.m3u8 } var blob = new Blob([m3u8Content], { type: "text/plain" }); var url = URL.createObjectURL(blob); var title = (document.title.indexOf("-") != -1 ? document.title.substring(0, document.title.indexOf("-")) : document.title.replace(/\s/, "")) + "_" + item.scrsz + "_" + (item.code == 2 ? "H264" : "H265") + "_" + document.getElementsByClassName("iqp-time-dur")[0].innerText.replace(/:/, ".") + "_" + (item.vsize / 1024 / 1024).toFixed(2) + "MB.m3u8"; var aLink = document.createElement("a"); aLink.href = url; aLink.download = title; aLink.style.display = "none"; var event; if (window.MouseEvent) { event = new MouseEvent("click") } else { event = document.createEvent("MouseEvents"); event.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null) } aLink.dispatchEvent(event) } }) } catch (err) { var info1 = playerObject._player.package.engine.adproxy.engine.movieinfo.vidl; info1.forEach(function (item1, index1) { if (item1.responseData != undefined) { var info = item1.responseData.data.program.video; info.forEach(function (item, index) { if (item._selected) { var m3u8Content = ""; if (item.m3u8 == undefined) { try { if (typeof (eval(cmd5x)) == "function") { } } catch (e) { var req1 = new XMLHttpRequest(); req1.open("GET", "https://static.iqiyi.com/js/common/f6a3054843de4645b34d205a9f377d25.js", false); req1.onload = function () { var script = document.createElement("script"); script.text = req1.responseText; document.getElementsByTagName("head")[0].appendChild(script) }; req1.send(null) } var fs = item.fs; var content = "#EXTM3U\n"; fs.forEach(function (fs_i, fs_index) { var url = fs_i.l; var prefix = "https://data.video.iqiyi.com/videos"; var api = prefix + url; try { var t = playerObject._player.package.engine.adproxy.engine.movieinfo.current.boss.data.t; api = prefix + url + "&cross-domain=1&t=" + t + "&QY00001=" + /qd_uid=(\d+)/g.exec(url)[1] + "&ib=4&ptime=0&ibt=" + cmd5x(t + /\/(\w{10,})/g.exec(url)[1]) } catch (err) { console.error(err) } var req = new XMLHttpRequest(); req.overrideMimeType("application/json"); req.open("GET", api, false); req.onload = function () { var jsonResponse = JSON.parse(req.responseText); content += "#EXTINF:0\n" + jsonResponse["l"] + "\n" }; req.send(null) }); content += "#EXT-X-ENDLIST"; m3u8Content = content } else { m3u8Content = item.m3u8 } var blob = new Blob([m3u8Content], { type: "text/plain" }); var url = URL.createObjectURL(blob); var title = (document.title.indexOf("-") != -1 ? document.title.substring(0, document.title.indexOf("-")) : document.title.replace(/\s/, "")) + "_" + item.scrsz + "_" + (item.code == 2 ? "H264" : "H265") + "_" + document.getElementsByClassName("iqp-time-dur")[0].innerText.replace(/:/, ".") + "_" + (item.vsize / 1024 / 1024).toFixed(2) + "MB.m3u8";/*nilaoda*/var aLink = document.createElement("a"); aLink.href = url; aLink.download = title; aLink.style.display = "none"; var event; if (window.MouseEvent) { event = new MouseEvent("click") } else { event = document.createEvent("MouseEvents"); event.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null) } aLink.dispatchEvent(event) } }) } }) }
    }
    // 将按钮插入到页面
    var beasetag = document.getElementById('flashbox');
    beasetag.appendChild(button);


})();