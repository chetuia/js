// ========== 全局配置 ==========
const config = {
    // Chetui-Menu 配色方案
    menuBg: "#1e293b",
    titleBg: "#1e293b",
    sectionBg: "#1e293b",
    titleColor: "#38bdf8",
    sectionTitleColor: "#ffffff",
    textColor: "#e2e8f0",
    toggleOnBg: "#ef4444",
    toggleOffBg: "#475569",
    toggleDotColor: "#ffffff",
    buttonColor: "#38bdf8",
    miniBarBg: "#1e293b",
    miniBarTextColor: "#38bdf8",
    
    // 菜单尺寸限制
    MENU_MIN_WIDTH: 180,
    MENU_MIN_HEIGHT: 240,
    MENU_MAX_WIDTH: 400,
    MENU_MAX_HEIGHT: 600
};

// ========== 全局状态变量 ==========
let menuContainer = null;
let miniBar = null;
let isMenuMinimized = false;
let isDragging = false;
let isResizing = false;
let resizeCorner = null;
let dragOffsetX = 0;
let dragOffsetY = 0;
let resizeStartRect = null;
let miniBarDragOffsetX = 0;
let miniBarDragOffsetY = 0;
let menuOriginalRect = null;

// ========== 事件处理函数 ==========
function handleTouchStart(e) {
    const touch = e.target;

    // 按钮元素直接放行
    if (touch.classList.contains('chetui-btn') || 
        touch.classList.contains('mini-bar-btn') || 
        touch.classList.contains('dream-quick-btn')) {
        return;
    }

    // 1. 优先处理调整大小（仅菜单显示时生效）
    if (!isMenuMinimized && touch.classList.contains('resize-corner')) {
        isResizing = true;
        resizeCorner = touch.dataset.corner;
        resizeStartRect = menuContainer.getBoundingClientRect();
        menuContainer.style.zIndex = 99999999 + 1;
        e.stopPropagation();
        e.preventDefault();
        return;
    }

    // 2. 处理菜单拖动（仅菜单显示时生效，排除滚动区和按钮）
    if (!isMenuMinimized && e.target.closest('.chetui-menu-container') && !e.target.closest('.scroll-content')) {
        isDragging = true;
        const rect = menuContainer.getBoundingClientRect();
        dragOffsetX = e.touches[0].clientX - rect.left;
        dragOffsetY = e.touches[0].clientY - rect.top;
        menuContainer.style.zIndex = 99999999 + 1;
        e.stopPropagation();
        e.preventDefault();
        return;
    }

    // 3. 处理最小化条拖动（仅最小化时生效，排除按钮）
    if (isMenuMinimized && e.target.closest('.mini-bar-container')) {
        isDragging = true;
        const rect = miniBar.getBoundingClientRect();
        miniBarDragOffsetX = e.touches[0].clientX - rect.left;
        miniBarDragOffsetY = e.touches[0].clientY - rect.top;
        miniBar.style.zIndex = 99999999 + 1;
    }
}

function handleTouchMove(e) {
    // 拖动/调整时才阻止默认行为
    if (!isDragging && !isResizing) return;
    
    e.preventDefault();
    const touch = e.touches[0];

    // 调整大小逻辑
    if (isResizing && resizeStartRect && menuContainer) {
        let newWidth = resizeStartRect.width;
        let newHeight = resizeStartRect.height;
        let newLeft = resizeStartRect.left;
        let newTop = resizeStartRect.top;

        switch (resizeCorner) {
            case 'top-left':
                newWidth = resizeStartRect.right - touch.clientX;
                newHeight = resizeStartRect.bottom - touch.clientY;
                newLeft = touch.clientX;
                newTop = touch.clientY;
                break;
            case 'top-right':
                newWidth = touch.clientX - resizeStartRect.left;
                newHeight = resizeStartRect.bottom - touch.clientY;
                newTop = touch.clientY;
                break;
            case 'bottom-left':
                newWidth = resizeStartRect.right - touch.clientX;
                newHeight = touch.clientY - resizeStartRect.top;
                newLeft = touch.clientX;
                break;
            case 'bottom-right':
                newWidth = touch.clientX - resizeStartRect.left;
                newHeight = touch.clientY - resizeStartRect.top;
                break;
        }
        // 限制尺寸范围
        newWidth = Math.max(config.MENU_MIN_WIDTH, Math.min(newWidth, config.MENU_MAX_WIDTH));
        newHeight = Math.max(config.MENU_MIN_HEIGHT, Math.min(newHeight, config.MENU_MAX_HEIGHT));
        // 更新菜单样式
        menuContainer.style.width = `${newWidth}px`;
        menuContainer.style.height = `${newHeight}px`;
        menuContainer.style.left = `${newLeft}px`;
        menuContainer.style.top = `${newTop}px`;
        return;
    }

    // 拖动逻辑
    if (isDragging) {
        // 拖动菜单
        if (!isMenuMinimized && menuContainer) {
            const newLeft = touch.clientX - dragOffsetX;
            const newTop = touch.clientY - dragOffsetY;
            const rect = menuContainer.getBoundingClientRect();
            const maxLeft = window.innerWidth - rect.width;
            const maxTop = window.innerHeight - rect.height;
            menuContainer.style.left = `${Math.max(0, Math.min(newLeft, maxLeft))}px`;
            menuContainer.style.top = `${Math.max(0, Math.min(newTop, maxTop))}px`;
        }
        // 拖动最小化条
        else if (isMenuMinimized && miniBar) {
            const newLeft = touch.clientX - miniBarDragOffsetX;
            const newTop = touch.clientY - miniBarDragOffsetY;
            const rect = miniBar.getBoundingClientRect();
            const maxLeft = window.innerWidth - rect.width;
            const maxTop = window.innerHeight - rect.height;
            // 更新最小化条位置
            miniBar.style.left = `${Math.max(0, Math.min(newLeft, maxLeft))}px`;
            miniBar.style.top = `${Math.max(0, Math.min(newTop, maxTop))}px`;
            // 同步更新menuOriginalRect，让展开后的菜单位置跟随最小化条
            const newBarRect = miniBar.getBoundingClientRect();
            menuOriginalRect = {
                left: newBarRect.left,
                top: newBarRect.top,
                width: menuOriginalRect.width,
                height: menuOriginalRect.height
            };
        }
    }
}

function handleTouchEnd() {
    isDragging = false;
    isResizing = false;
    resizeCorner = null;
    resizeStartRect = null;
    if (menuContainer) menuContainer.style.zIndex = 99999999;
    if (miniBar) miniBar.style.zIndex = 99999999;
}

// ========== 菜单控制函数 ==========
function handleMenuMinimize() {
    if (!menuContainer) return;
    // 记录菜单原始位置尺寸
    menuOriginalRect = menuContainer.getBoundingClientRect();
    isMenuMinimized = true;
    menuContainer.style.display = 'none';
    createMiniBar();
}

function handleMenuRestore() {
    if (!miniBar || !menuOriginalRect) return;
    isMenuMinimized = false;
    // 恢复菜单的位置和尺寸（位置已跟随最小化条更新）
    menuContainer.style.display = 'block';
    menuContainer.style.left = `${menuOriginalRect.left}px`;
    menuContainer.style.top = `${menuOriginalRect.top}px`;
    menuContainer.style.width = `${menuOriginalRect.width}px`;
    menuContainer.style.height = `${menuOriginalRect.height}px`;
    
    // 重新计算滚动区域高度
    const scrollContent = menuContainer.querySelector('.scroll-content');
    if (scrollContent) {
        const titleHeight = 44;
        const footerHeight = 42;
        scrollContent.style.height = `calc(100% - ${titleHeight + footerHeight}px)`;
        void scrollContent.offsetHeight; // 强制重排
    }

    // 移除最小化条
    miniBar.remove();
    miniBar = null;
}

function createMiniBar() {
    if (miniBar || !menuOriginalRect) return;
    const bar = document.createElement('div');
    bar.className = 'mini-bar-container';
    bar.style.cssText = `
        position:fixed;
        left:${menuOriginalRect.left}px;
        top:${menuOriginalRect.top}px;
        height:25px;
        width:${menuOriginalRect.width}px;
        background:${config.miniBarBg};
        border-radius:4px;
        display:flex;
        align-items:center;
        padding:0 12px;
        gap:8px;
        box-shadow:0 2px 8px rgba(0,0,0,0.3);
        z-index:99999999;
        touch-action:none;
        cursor:pointer;
    `;
    bar.innerHTML = `
        <span style="color:${config.miniBarTextColor}; font-weight:bold; font-size:14px;">▶ Menu</span>
        <button class="mini-bar-btn" style="width:24px; height:24px; background:transparent; border:none; color:${config.miniBarTextColor}; font-size:16px; cursor:pointer; padding:0; margin-left:auto;">×</button>
    `;
    document.body.appendChild(bar);
    miniBar = bar;

    // 点击展开
    bar.addEventListener('click', (e) => {
        if (!e.target.classList.contains('mini-bar-btn')) {
            handleMenuRestore();
        }
    });
    
    // 关闭按钮事件
    bar.querySelector('.mini-bar-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        destroyMenu();
    });
    
    // 最小化条触摸事件
    bar.addEventListener('touchstart', (e) => {
        if (isMenuMinimized && !e.target.classList.contains('mini-bar-btn')) {
            isDragging = true;
            const rect = miniBar.getBoundingClientRect();
            miniBarDragOffsetX = e.touches[0].clientX - rect.left;
            miniBarDragOffsetY = e.touches[0].clientY - rect.top;
            miniBar.style.zIndex = 99999999 + 1;
        }
    });
}

function destroyMenu() {
    if (menuContainer) {
        menuContainer.remove();
        menuContainer = null;
    }
    if (miniBar) {
        miniBar.remove();
        miniBar = null;
    }
    // 移除事件监听器
    document.removeEventListener('touchstart', handleTouchStart);
    document.removeEventListener('touchmove', handleTouchMove);
    document.removeEventListener('touchend', handleTouchEnd);
    isMenuMinimized = false;
    menuOriginalRect = null;
    console.log("[菜单模板] 菜单已销毁");
}

// ========== 菜单UI创建函数 ==========
function createChetuiMenu() {
    if (menuContainer) return;

    const container = document.createElement('div');
    container.className = 'chetui-menu-container';
    container.style.cssText = `
        position:fixed;
        left:20px;
        top:20px;
        width:320px;
        height:200px;
        background:${config.menuBg};
        border-radius:6px;
        box-shadow:0 4px 16px rgba(0,0,0,0.5);
        z-index:99999999;
        overflow:hidden;
        font-family:Arial, sans-serif;
        touch-action:none;
        display:flex;
        flex-direction:column;
    `;

    // 标题栏
    const titleBar = document.createElement('div');
    titleBar.style.cssText = `
        background:${config.titleBg};
        padding:8px 10px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        cursor:move;
        flex-shrink:0;
    `;
    titleBar.innerHTML = `
        <div style="color:${config.titleColor}; font-weight:bold; font-size:14px;">Chetui-Menu 模板</div>
        <div style="color:#ef4444; font-size:12px;">✦</div>
    `;
    const subTitle = document.createElement('div');
    subTitle.style.cssText = `
        background:${config.titleBg};
        padding:0 10px 4px 10px;
        color:#22c55e;
        font-size:10px;
        flex-shrink:0;
    `;
    subTitle.textContent = 'Mod UI模板 | Chetui';
    container.appendChild(titleBar);
    container.appendChild(subTitle);

    // 滚动内容区
    const scrollContent = document.createElement('div');
    scrollContent.className = 'scroll-content';
    scrollContent.style.cssText = `
        flex:1;
        height:calc(100% - 120px);
        overflow-y:scroll;
        padding:6px 0;
        -webkit-overflow-scrolling:touch;
    `;
    scrollContent.style.scrollbarWidth = 'thin';
    scrollContent.style.scrollbarColor = `${config.toggleOnBg} ${config.menuBg}`;

    // 梦境模式 Section
    const section1 = document.createElement('div');
    section1.style.cssText = `
        background:${config.sectionBg};
        margin:0 6px 6px 6px;
        border-radius:4px;
        overflow:hidden;
    `;
    const section1Title = document.createElement('div');
    section1Title.style.cssText = `
        background:#334155;
        color:${config.sectionTitleColor};
        text-align:center;
        padding:4px;
        font-weight:bold;
        font-size:12px;
    `;
    section1Title.textContent = '梦境模式';
    section1.appendChild(section1Title);

    // 示例开关
    const toggles = [
        { label: '怪物', id: 'toggle1', active: false },
        { label: '敌人', id: 'toggle2', active: false },
        { label: '物资', id: 'toggle3', active: false }
    ];
    
    toggles.forEach(({ label, id, active }) => {
        const row = document.createElement('div');
        row.style.cssText = `
            display:flex;
            justify-content:space-between;
            align-items:center;
            padding:6px 8px;
            border-bottom:1px solid #334155;
        `;
        row.innerHTML = `
            <span style="color:${config.textColor}; font-size:12px;">${label}</span>
            <div class="chetui-toggle ${active ? 'active' : ''}" id="${id}" style="width:32px; height:16px; background:${active ? config.toggleOnBg : config.toggleOffBg}; border-radius:8px; cursor:pointer; position:relative;">
                <div class="toggle-dot" style="position:absolute; top:1px; left:${active ? '18px' : '1px'}; width:14px; height:14px; background:${config.toggleDotColor}; border-radius:50%; transition:left 0.2s ease;"></div>
            </div>
        `;
        section1.appendChild(row);
    });

    // 复选框示例
    const checkboxRow = document.createElement('div');
    checkboxRow.style.cssText = `
        display:flex;
        justify-content:center;
        align-items:center;
        gap:4px;
        padding:6px 8px;
        border-bottom:1px solid #334155;
    `;
    checkboxRow.innerHTML = `
        <input type="checkbox" id="sample-checkbox" style="width:14px; height:14px; accent-color:#06b6d4;">
        <span style="color:${config.textColor}; font-size:12px;">射线</span>
    `;
    section1.appendChild(checkboxRow);

    // 快捷按钮示例
    const quickActionRow = document.createElement('div');
    quickActionRow.style.cssText = `
        display:flex;
        flex-wrap:wrap;
        gap:4px;
        padding:6px 8px;
        justify-content:space-between;
    `;
    
    const quickActions = [
        { text: '撤退', action: 'func1' },
        { text: '传送1层', action: 'func2' },
        { text: '传送2层', action: 'func3' },
        { text: '传送3层', action: 'func4' },
        { text: '传送4层', action: 'func5' }
    ];
    
    quickActions.forEach(action => {
        const btn = document.createElement('button');
        btn.className = 'dream-quick-btn';
        btn.dataset.action = action.action;
        btn.style.cssText = `
            flex:1;
            min-width:40px;
            padding:4px 0;
            background:#2196F3;
            border:none;
            border-radius:3px;
            color:#fff;
            font-size:10px;
            cursor:pointer;
            text-align:center;
        `;
        btn.textContent = action.text;
        quickActionRow.appendChild(btn);
    });
    
    section1.appendChild(quickActionRow);
    scrollContent.appendChild(section1);

    // 其他模式 Section
    const section2 = document.createElement('div');
    section2.style.cssText = `
        background:${config.sectionBg};
        margin:0 6px 6px 6px;
        border-radius:4px;
        overflow:hidden;
    `;
    const section2Title = document.createElement('div');
    section2Title.style.cssText = `
        background:#334155;
        color:${config.sectionTitleColor};
        text-align:center;
        padding:4px;
        font-weight:bold;
        font-size:12px;
    `;
    section2Title.textContent = '其他模式';
    section2.appendChild(section2Title);

    const toggles2 = [
        { label: '方框', id: 'toggleA', active: false },
        { label: '射线', id: 'toggleB', active: false }
    ];
    
    toggles2.forEach(({ label, id, active }) => {
        const row = document.createElement('div');
        row.style.cssText = `
            display:flex;
            justify-content:space-between;
            align-items:center;
            padding:6px 8px;
            border-bottom:1px solid #334155;
        `;
        row.innerHTML = `
            <span style="color:${config.textColor}; font-size:12px;">${label}</span>
            <div class="chetui-toggle ${active ? 'active' : ''}" id="${id}" style="width:32px; height:16px; background:${active ? config.toggleOnBg : config.toggleOffBg}; border-radius:8px; cursor:pointer; position:relative;">
                <div class="toggle-dot" style="position:absolute; top:1px; left:${active ? '18px' : '1px'}; width:14px; height:14px; background:${config.toggleDotColor}; border-radius:50%; transition:left 0.2s ease;"></div>
            </div>
        `;
        section2.appendChild(row);
    });

    // 说明文本
    const textRow = document.createElement('div');
    textRow.style.cssText = `
        color:#eab308;
        text-align:center;
        padding:6px 8px;
        font-style:italic;
        font-size:10px;
        white-space: pre-line;
    `;
    textRow.textContent = '----仅供学习交流，请勿用于商业用途。\n这是一个菜单UI模板，你可以在此基础上添加自己的功能\n苍生无言，侠为其声!';
    section2.appendChild(textRow);
    scrollContent.appendChild(section2);

    container.appendChild(scrollContent);

    // 底部按钮
    const footer = document.createElement('div');
    footer.style.cssText = `
        display:flex;
        margin:0 6px 6px 6px;
        gap:6px;
        flex-shrink:0;
        height:30px;
    `;
    footer.innerHTML = `
        <button class="chetui-btn" style="flex:1; padding:6px; background:transparent; border:none; color:${config.buttonColor}; font-size:12px; cursor:pointer;">结束</button>
        <button class="chetui-btn" style="flex:1; padding:6px; background:transparent; border:none; color:${config.buttonColor}; font-size:12px; cursor:pointer;">最小化</button>
    `;
    container.appendChild(footer);

    // 四个角落调整手柄
    const corners = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
    corners.forEach(corner => {
        const handle = document.createElement('div');
        handle.className = 'resize-corner';
        handle.dataset.corner = corner;
        handle.style.cssText = `
            position:absolute;
            width:20px;
            height:20px;
            background:transparent;
            border-radius:50%;
            z-index:15;
            cursor:se-resize;
            touch-action:none;
        `;
        if (corner.includes('top')) handle.style.top = '0px';
        if (corner.includes('bottom')) handle.style.bottom = '0px';
        if (corner.includes('left')) handle.style.left = '0px';
        if (corner.includes('right')) handle.style.right = '0px';
        handle.addEventListener('touchstart', handleTouchStart);
        container.appendChild(handle);
    });

    document.body.appendChild(container);
    menuContainer = container;

    // 绑定底部按钮事件
    footer.querySelectorAll('.chetui-btn')[0].addEventListener('click', destroyMenu);
    footer.querySelectorAll('.chetui-btn')[1].addEventListener('click', handleMenuMinimize);

    // 绑定开关点击事件
    container.querySelectorAll('.chetui-toggle').forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            const toggleEl = e.target.closest('.chetui-toggle');
            if (!toggleEl) return;
            
            const isOn = toggleEl.classList.contains('active');
            toggleEl.classList.toggle('active');
            const dot = toggleEl.querySelector('.toggle-dot');
            
            if (isOn) {
                toggleEl.style.backgroundColor = config.toggleOffBg;
                dot.style.left = '2px';
            } else {
                toggleEl.style.backgroundColor = config.toggleOnBg;
                dot.style.left = '22px';
            }
            
            const toggleId = toggleEl.id;
            console.log(`[菜单模板] 开关 ${toggleId} 状态: ${!isOn ? '开' : '关'}`);
            // 这里可以添加您的功能开关逻辑
        });
    });

    // 绑定复选框事件
    const sampleCheckbox = container.querySelector('#sample-checkbox');
    if (sampleCheckbox) {
        sampleCheckbox.addEventListener('change', (e) => {
            console.log(`[菜单模板] 复选框状态: ${e.target.checked}`);
            // 这里可以添加您的复选框逻辑
        });
    }

    // 绑定快捷按钮事件
    container.querySelectorAll('.dream-quick-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const action = e.target.dataset.action;
            console.log(`[菜单模板] 快捷按钮点击: ${action}`);
            // 这里可以添加您的快捷功能逻辑
        });
    });

    // 绑定全局事件
    titleBar.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);
}

// ========== 启动菜单 ==========
createChetuiMenu();

// ========== 页面卸载时自动清理 ==========
window.addEventListener('beforeunload', destroyMenu);