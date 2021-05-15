{ /* <script type="text/javascript"> */ }
var box = document.getElementById("box");
var ul = document.createElement("ul");
box.appendChild(ul);
var btn = document.getElementById("btn");
var msg = document.getElementById("msg");
var n = 0;
btn.onclick = function() {
    if (msg.value === "") {
        alert("请输入内容")
    } else {
        n++;
        var li = document.createElement("li");
        li.innerHTML = msg.value + "  " + "<span>X</span>";
        var lis = document.getElementsByTagName("li");
        if (n === 1) {
            ul.appendChild(li);
            //                    如果是第一条评论则用appendChild
        } else {
            ul.insertBefore(li, lis[0]);
            //                    最新的评论总在第一条显示
        }
        msg.value = "";
        //                重置文本框
        var span = document.getElementsByTagName("span");
        for (var i = 0; i < span.length; i++) {
            span[i].onclick = function() {
                ul.removeChild(this.parentNode);
                n--;
            }
        }
    }
};

function calc() {
    alert("一共有" + n + "条评论")
}
// </script>