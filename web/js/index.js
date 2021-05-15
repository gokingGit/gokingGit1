// tab转换：
// 页面加载时，选中第一个元素并为其设置 class="active" ，使第一个元素可以显示
document.querySelector('.tab ul:first-child').setAttribute('class', 'active');
// 响应事件，鼠标移动或者点击元素时的事件处理函数
const eventHandler = function(event) {
    document.querySelector('.tab .active').removeAttribute('class'); // 先将之前显示的标签隐藏
    const targetId = event.target.dataset['id']; // 取得需要显示的tab的 id
    document.querySelector(targetId).setAttribute('class', 'active'); // 显示该id的tab标签
};

const elements = document.querySelectorAll('.tab-index li'); // 选中所有需要绑定响应事件的元素
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('mouseover', eventHandler); // 绑定事件处理函数
}