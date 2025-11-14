// 移动端菜单切换
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // 点击菜单项后关闭移动端菜单
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }

    // 导航筛选功能
    const navItems = document.querySelectorAll('.nav-item');
    const actionItems = document.querySelectorAll('.action-item');

    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 移除所有活动状态
            navItems.forEach(nav => nav.classList.remove('active'));
            // 添加当前项的活动状态
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            actionItems.forEach(action => {
                if (filterValue === 'all' || action.getAttribute('data-category') === filterValue) {
                    action.style.display = 'block';
                    setTimeout(() => {
                        action.style.opacity = '1';
                        action.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    action.style.opacity = '0';
                    action.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        action.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // 初始化快捷操作项
    actionItems.forEach(item => {
        item.style.transition = 'opacity 0.3s, transform 0.3s';
    });



    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // 页面加载动画
    const animateOnScroll = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    // 为快捷操作项添加初始样式和观察
    document.querySelectorAll('.action-item').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s, transform 0.6s';
        animateOnScroll.observe(card);
    });
});




