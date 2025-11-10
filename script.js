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

    // 作品集筛选功能
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有活动状态
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // 添加当前按钮的活动状态
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // 初始化作品集项
    portfolioItems.forEach(item => {
        item.style.transition = 'opacity 0.3s, transform 0.3s';
    });

    // 技能条动画
    const skillBars = document.querySelectorAll('.skill-progress');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.style.width;
                progressBar.style.width = '0';
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 100);
                observer.unobserve(progressBar);
            }
        });
    }, observerOptions);

    skillBars.forEach(bar => {
        observer.observe(bar);
    });

    // 联系表单处理
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // 这里可以添加实际的表单提交逻辑
            // 由于是静态HTML，这里只是显示提示
            alert('感谢您的消息！由于这是静态网站，消息不会实际发送。\n\n您提供的信息：\n' +
                  '姓名：' + formData.name + '\n' +
                  '邮箱：' + formData.email + '\n' +
                  '主题：' + formData.subject + '\n' +
                  '消息：' + formData.message);
            
            // 重置表单
            contactForm.reset();
        });
    }

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

    // 为卡片添加初始样式和观察
    document.querySelectorAll('.feature-card, .post-card, .portfolio-item, .timeline-item').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s, transform 0.6s';
        animateOnScroll.observe(card);
    });

    // 图片放大功能
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalClose = document.querySelector('.modal-close');
    const portfolioImages = document.querySelectorAll('.portfolio-image img');

    if (imageModal && modalImage && modalClose) {
        // 点击图片打开模态框
        portfolioImages.forEach(img => {
            img.addEventListener('click', function() {
                imageModal.classList.add('active');
                modalImage.src = this.src;
                modalImage.alt = this.alt;
                document.body.style.overflow = 'hidden'; // 防止背景滚动
            });
        });

        // 点击关闭按钮关闭模态框
        modalClose.addEventListener('click', function() {
            imageModal.classList.remove('active');
            document.body.style.overflow = ''; // 恢复滚动
        });

        // 点击模态框背景关闭
        imageModal.addEventListener('click', function(e) {
            if (e.target === imageModal) {
                imageModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // 按 ESC 键关闭模态框
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && imageModal.classList.contains('active')) {
                imageModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});




