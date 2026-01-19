// ========== 全局配置（可按需调整） ==========
const config = {
    calib: { yawDir: -1, pitchDir: 1, fovScale: 1.0, yOffset: 0, xOffset: 0 },
    viewAngle: 120,
    showDebugLog: false,
    boxAlpha: 0.08,
    boxColor: "rgba(255, 0, 0, 0.2)",
    boxStroke: "#000000",
    itemTextColor: "#ffffff",
    itemTextSize: 12,
    highValueThreshold: 35000,
    // Chetui-Menu 精确配色
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
    // 拾取配置
    pickThreshold1: 100000,     // 条件1：价值大于此值
    pickThresholdMin: 40000,    // 条件2最小值
    pickThresholdMax: 60000,    // 条件2最大值
    pickThreshold2: 16800,      // 条件3：价值等于
    pickThreshold3: 12500       // 条件4：价值等于
};

// ========== 全局状态 + 菜单配置 ==========
let aimDrawEnabled = false; 
let aimDrawLoopId = null;
let enemyDrawEnabled = false;
let enemyDrawLoopId = null;
let monsterDrawEnabled = false; // 新增：怪物绘制开关
let monsterDrawLoopId = null; // 新增：怪物绘制循环ID
let boxDrawEnabled = false;
let boxDrawLoopId = null;
let autoPickSimpleEnabled = false;    // 简单模式自动拾取开关
let autoPickHardEnabled = false;      // 困难模式自动拾取开关
let autoPickCustomEnabled = false;    // 自定义价值拾取开关
let pickIntervalId = null;            // 自动拾取定时器ID
let customPickWindow = null;          // 自定义拾取悬浮窗
let showRay = false; // 射线开关
let windowAimDrawCanvas = null;
let windowAimCtx = null;
let windowEnemyDrawCanvas = null;
let windowEnemyCtx = null;
let windowMonsterDrawCanvas = null; // 新增：怪物绘制画布
let windowMonsterCtx = null; // 新增：怪物绘制上下文
let windowBoxDrawCanvas = null;
let windowBoxCtx = null;
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
const MENU_MIN_WIDTH = 180;
const MENU_MIN_HEIGHT = 240;
const MENU_MAX_WIDTH = 400;
const MENU_MAX_HEIGHT = 600;

// 记录已拾取物品，防止重复
const simplePickedRecord = new Map();
const hardPickedRecord = new Map();

// ========== 初始化画布 ==========
function initCanvas() {
    // 初始化敌人绘制画布
    if (!windowEnemyDrawCanvas) {
        const enemyCanvas = document.createElement('canvas');
        const dpr = window.devicePixelRatio || 1;
        enemyCanvas.style.cssText = "position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:9999999;background:transparent;";
        enemyCanvas.width = window.innerWidth * dpr;
        enemyCanvas.height = window.innerHeight * dpr;
        enemyCanvas.id = "enemy-draw-canvas";
        document.body.appendChild(enemyCanvas);
        windowEnemyDrawCanvas = enemyCanvas;
        windowEnemyCtx = enemyCanvas.getContext('2d');
    }
    
    // 初始化怪物绘制画布
    if (!windowMonsterDrawCanvas) {
        const monsterCanvas = document.createElement('canvas');
        const dpr = window.devicePixelRatio || 1;
        monsterCanvas.style.cssText = "position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:9999998;background:transparent;";
        monsterCanvas.width = window.innerWidth * dpr;
        monsterCanvas.height = window.innerHeight * dpr;
        monsterCanvas.id = "monster-draw-canvas";
        document.body.appendChild(monsterCanvas);
        windowMonsterDrawCanvas = monsterCanvas;
        windowMonsterCtx = monsterCanvas.getContext('2d');
    }
    
    // 初始化物资绘制画布
    if (!windowBoxDrawCanvas) {
        const boxCanvas = document.createElement('canvas');
        const dpr = window.devicePixelRatio || 1;
        boxCanvas.style.cssText = "position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:9999997;background:transparent;";
        boxCanvas.width = window.innerWidth * dpr;
        boxCanvas.height = window.innerHeight * dpr;
        boxCanvas.id = "box-draw-canvas";
        document.body.appendChild(boxCanvas);
        windowBoxDrawCanvas = boxCanvas;
        windowBoxCtx = boxCanvas.getContext('2d');
    }
}

// ========== 停止函数 ==========
function stopEnemyDraw() {
    if (enemyDrawLoopId) {
        cancelAnimationFrame(enemyDrawLoopId);
        enemyDrawLoopId = null;
    }
    if (windowEnemyCtx && windowEnemyDrawCanvas) {
        windowEnemyCtx.clearRect(0, 0, windowEnemyDrawCanvas.width, windowEnemyDrawCanvas.height);
    }
    enemyDrawEnabled = false;
}

function stopMonsterDraw() {
    if (monsterDrawLoopId) {
        cancelAnimationFrame(monsterDrawLoopId);
        monsterDrawLoopId = null;
    }
    if (windowMonsterCtx && windowMonsterDrawCanvas) {
        windowMonsterCtx.clearRect(0, 0, windowMonsterDrawCanvas.width, windowMonsterDrawCanvas.height);
    }
    monsterDrawEnabled = false;
}

function stopBoxDraw() {
    if (boxDrawLoopId) {
        cancelAnimationFrame(boxDrawLoopId);
        boxDrawLoopId = null;
    }
    if (windowBoxCtx && windowBoxDrawCanvas) {
        windowBoxCtx.clearRect(0, 0, windowBoxDrawCanvas.width, windowBoxDrawCanvas.height);
    }
    boxDrawEnabled = false;
}

function stopAutoPick() {
    if (pickIntervalId) {
        clearInterval(pickIntervalId);
        pickIntervalId = null;
    }
    autoPickSimpleEnabled = false;
    autoPickHardEnabled = false;
    // 清空拾取记录
    simplePickedRecord.clear();
    hardPickedRecord.clear();
    console.log("[自动拾取] 所有模式已停止");
}

function stopCustomPick() {
    if (customPickWindow) {
        removeCustomPickWindow();
    }
    autoPickCustomEnabled = false;
    console.log("[自定义拾取] 已停止");
}

function destroyAllResources() {
    stopEnemyDraw();
    stopMonsterDraw();
    stopBoxDraw();
    stopAutoPick();
    stopCustomPick();
    
    if (windowEnemyDrawCanvas) {
        windowEnemyDrawCanvas.remove();
        windowEnemyDrawCanvas = null;
        windowEnemyCtx = null;
    }
    if (windowMonsterDrawCanvas) {
        windowMonsterDrawCanvas.remove();
        windowMonsterDrawCanvas = null;
        windowMonsterCtx = null;
    }
    if (windowBoxDrawCanvas) {
        windowBoxDrawCanvas.remove();
        windowBoxDrawCanvas = null;
        windowBoxCtx = null;
    }
    if (menuContainer) {
        menuContainer.remove();
        menuContainer = null;
    }
    if (miniBar) {
        miniBar.remove();
        miniBar = null;
    }
    document.removeEventListener('touchstart', handleTouchStart);
    document.removeEventListener('touchmove', handleTouchMove);
    document.removeEventListener('touchend', handleTouchEnd);
    isMenuMinimized = false;
    isDragging = false;
    menuOriginalRect = null;
}

// ========== 简单模式自动拾取函数 ==========
function pickSimpleModeItems() {
    // 1. 获取箱子管理器和配置表
    const inceptionMgr = window.InceptionManager?.Inst;
    const itemConfig = window.ConfigData?.InceptionItem;
    const battleNet = window.BattleNet?.Instance;
    const spaceLevel = window.KbeMgr?.Player?.spaceLevel || 1;

    if (!inceptionMgr || !itemConfig || !battleNet) {
        console.warn("[简单拾取] 核心对象未找到");
        return;
    }

    // 2. 遍历所有箱子（包含已开箱）
    Object.values(inceptionMgr.inceptionBoxMap).forEach(box => {
        if (!box || !box.itemArr) return;

        // 3. 遍历箱内物品，筛选符合条件的
        box.itemArr.forEach(item => {
            if (item.val <= 0) return;
            const [itemId] = item.key.split("_");
            const itemCfg = itemConfig.get(itemId);
            if (!itemCfg) return;
            
            // 4. 判断价值条件：>100000 或 (40000<x<60000) 或 =16800 或 =12500
            const isQualified = itemCfg.itemValue > config.pickThreshold1 
                                || (itemCfg.itemValue > config.pickThresholdMin && itemCfg.itemValue < config.pickThresholdMax)
                                || itemCfg.itemValue === config.pickThreshold2
                                || itemCfg.itemValue === config.pickThreshold3;
            
            if (!isQualified) return;

            const recordKey = `${box.boxId}_${item.key}`;
            if (simplePickedRecord.has(recordKey)) return;

            // 5. 执行拾取（拾取全部数量 item.val）
            battleNet.cellPickItem(1, spaceLevel, box.boxId, item.key, item.val);
            simplePickedRecord.set(recordKey, true);
            console.log(`[简单拾取] 物品:${itemCfg.itemID} | 价值:${itemCfg.itemValue} | 箱子:${box.boxId} | 数量:${item.val}`);
        });
    });
}

// ========== 困难模式自动拾取函数 ==========
function pickHardModeItems() {
    // 1. 获取箱子管理器和配置表
    const inceptionMgr = window.InceptionManager?.Inst;
    const itemConfig = window.ConfigData?.InceptionItem;
    const battleNet = window.BattleNet?.Instance;
    const spaceLevel = window.KbeMgr?.Player?.spaceLevel || 1;

    if (!inceptionMgr || !itemConfig || !battleNet) {
        console.warn("[困难拾取] 核心对象未找到");
        return;
    }

    // 2. 遍历所有箱子（包含已开箱）
    Object.values(inceptionMgr.inceptionBoxMap).forEach(box => {
        if (!box || !box.itemArr) return;

        // 3. 遍历箱内物品，筛选符合条件的
        box.itemArr.forEach(item => {
            if (item.val <= 0) return;
            const [itemId] = item.key.split("_");
            const itemCfg = itemConfig.get(itemId);
            if (!itemCfg) return;
            
            // 4. 困难模式判断价值条件：只拾取 >100000 的物品
            const isQualified = itemCfg.itemValue > config.pickThreshold1;
            
            if (!isQualified) return;

            const recordKey = `${box.boxId}_${item.key}`;
            if (hardPickedRecord.has(recordKey)) return;

            // 5. 执行拾取（拾取全部数量 item.val）
            battleNet.cellPickItem(1, spaceLevel, box.boxId, item.key, item.val);
            hardPickedRecord.set(recordKey, true);
            console.log(`[困难拾取] 物品:${itemCfg.itemID} | 价值:${itemCfg.itemValue} | 箱子:${box.boxId} | 数量:${item.val}`);
        });
    });
}

// ========== 统一自动拾取调度函数 ==========
function pickAutoItems() {
    if (autoPickSimpleEnabled) {
        pickSimpleModeItems();
    }
    if (autoPickHardEnabled) {
        pickHardModeItems();
    }
}

// ========== 创建自定义价值拾取悬浮窗 ==========
function createCustomPickWindow() {
    if (customPickWindow) return;
    
    const TARGET_VALUES = [16800, 43000, 52000, 60000, 66667, 73333, 80000, 86667, 110000, 125000, 127000, 135000, 150000, 168000, 480000, 588888, 666666, 1200000, 1666666];
    const customPickedRecord = new Map();
    let isExpanded = false;
    let isHidden = false;
    let hiddenPos = { left: "20px", top: "20px", width: "40px" };
    let longPressTimer = null;
    const LONG_PRESS_DURATION = 800;
    let isLongPressTriggered = false;
    let restoreArea = null;

    // 核心拾取函数
    function pickItemsByValue(targetValue) {
        customPickedRecord.clear();
        const inceptionMgr = window.InceptionManager?.Inst;
        const itemConfig = window.ConfigData?.InceptionItem;
        const battleNet = window.BattleNet?.Instance;
        const spaceLevel = window.KbeMgr?.Player?.spaceLevel || 1;

        if (!inceptionMgr || !itemConfig || !battleNet) {
            alert("[拾取失败] 核心游戏对象未找到");
            return;
        }

        let pickCount = 0;
        Object.values(inceptionMgr.inceptionBoxMap).forEach(box => {
            if (!box || !box.itemArr) return;
            box.itemArr.forEach(item => {
                if (item.val <= 0) return;
                const [itemId] = item.key.split("_");
                const itemCfg = itemConfig.get(itemId);
                if (itemCfg && itemCfg.itemValue === targetValue) {
                    const recordKey = `${box.boxId}_${item.key}`;
                    if (customPickedRecord.has(recordKey)) return;
                    battleNet.cellPickItem(1, spaceLevel, box.boxId, item.key, item.val);
                    customPickedRecord.set(recordKey, true);
                    pickCount++;
                    console.log(`[自定义拾取] 物品:${itemCfg.itemID} | 价值:${targetValue} | 数量:${item.val}`);
                }
            });
        });

        alert(pickCount > 0 
            ? `拾取完成！共拾取 ${pickCount} 件价值 ${targetValue} 的物品` 
            : `未找到价值 ${targetValue} 的物品`);
    }

    // 折叠/展开
    function toggleExpand() {
        isExpanded = !isExpanded;
        const content = customPickWindow.querySelector(".content");
        const toggleBtn = customPickWindow.querySelector(".toggle-btn");
        if (isExpanded) {
            content.style.display = "block";
            toggleBtn.innerText = "∧";
            customPickWindow.style.width = "120px";
        } else {
            content.style.display = "none";
            toggleBtn.innerText = "∨";
            customPickWindow.style.width = "40px";
        }
    }

    // 隐藏/显示
    function toggleHidden() {
        if (!customPickWindow) return;
        isHidden = !isHidden;
        if (isHidden) {
            const rect = customPickWindow.getBoundingClientRect();
            hiddenPos = {
                left: rect.left + "px",
                top: rect.top + "px",
                width: rect.width + "px",
                height: rect.height + "px"
            };
            customPickWindow.style.opacity = "0";
            customPickWindow.style.pointerEvents = "none";
            createRestoreArea();
        } else {
            customPickWindow.style.opacity = "1";
            customPickWindow.style.pointerEvents = "auto";
            customPickWindow.style.left = hiddenPos.left;
            customPickWindow.style.top = hiddenPos.top;
            customPickWindow.style.width = hiddenPos.width;
            removeRestoreArea();
            isLongPressTriggered = false;
        }
    }

    // 创建透明恢复点击区域
    function createRestoreArea() {
        if (restoreArea) return;
        restoreArea = document.createElement("div");
        Object.assign(restoreArea.style, {
            position: "fixed",
            left: hiddenPos.left,
            top: hiddenPos.top,
            width: hiddenPos.width,
            height: hiddenPos.height,
            zIndex: "99999998",
            backgroundColor: "transparent",
            pointerEvents: "auto"
        });
        restoreArea.addEventListener("click", toggleHidden);
        restoreArea.addEventListener("touchstart", (e) => {
            e.preventDefault();
            toggleHidden();
        });
        document.body.appendChild(restoreArea);
    }

    // 移除恢复区域
    function removeRestoreArea() {
        if (restoreArea && restoreArea.parentElement) {
            restoreArea.parentElement.removeChild(restoreArea);
        }
        restoreArea = null;
    }

    // 创建悬浮窗元素
    customPickWindow = document.createElement("div");
    customPickWindow.className = "custom-pick-window";
    Object.assign(customPickWindow.style, {
        position: "fixed",
        top: "20px",
        right: "20px",
        width: "40px",
        backgroundColor: "#1e293b",
        borderRadius: "8px",
        border: "2px solid #38bdf8",
        zIndex: "99999999",
        boxShadow: "0 2px 10px rgba(0,0,0,0.5)",
        userSelect: "none",
        overflow: "hidden",
        transition: "width 0.2s ease, opacity 0.3s ease",
        touchAction: "none"
    });

    // 折叠按钮
    const toggleBtn = document.createElement("button");
    toggleBtn.className = "toggle-btn";
    toggleBtn.innerText = "∨";
    Object.assign(toggleBtn.style, {
        width: "100%",
        height: "40px",
        border: "none",
        backgroundColor: "#334155",
        color: "#38bdf8",
        cursor: "pointer",
        fontSize: "16px",
        borderRadius: "6px"
    });
    toggleBtn.onclick = toggleExpand;
    customPickWindow.appendChild(toggleBtn);

    // 内容区域
    const content = document.createElement("div");
    content.className = "content";
    Object.assign(content.style, {
        display: "none",
        padding: "10px",
        paddingTop: "5px",
        maxHeight: "300px",
        overflowY: "auto",
        overflowX: "hidden",
        scrollbarWidth: "thin",
        scrollbarColor: "#475569 #1e293b"
    });
    customPickWindow.appendChild(content);

    // 标题
    const title = document.createElement("div");
    title.innerText = "自定义价值拾取";
    Object.assign(title.style, {
        color: "#38bdf8",
        fontSize: "14px",
        textAlign: "center",
        marginBottom: "8px",
        paddingBottom: "5px",
        borderBottom: "1px solid #475569"
    });
    content.appendChild(title);

    // 价值按钮
    TARGET_VALUES.forEach(value => {
        const btn = document.createElement("button");
        btn.innerText = value;
        Object.assign(btn.style, {
            width: "100%",
            padding: "6px 0",
            margin: "4px 0",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#475569",
            color: "#e2e8f0",
            cursor: "pointer",
            fontSize: "13px"
        });
        btn.onclick = () => pickItemsByValue(value);
        btn.onmouseover = () => btn.style.backgroundColor = "#64748b";
        btn.onmouseout = () => btn.style.backgroundColor = "#475569";
        btn.ontouchstart = () => btn.style.backgroundColor = "#64748b";
        btn.ontouchend = () => btn.style.backgroundColor = "#475569";
        content.appendChild(btn);
    });

    // 关闭按钮
    const closeBtn = document.createElement("button");
    closeBtn.innerText = "关闭";
    Object.assign(closeBtn.style, {
        width: "100%",
        padding: "6px 0",
        margin: "8px 0 0 0",
        borderRadius: "4px",
        border: "none",
        backgroundColor: "#ef4444",
        color: "#fff",
        cursor: "pointer",
        fontSize: "13px"
    });
    closeBtn.onclick = () => {
        removeCustomPickWindow();
    };
    closeBtn.ontouchstart = () => closeBtn.style.backgroundColor = "#dc2626";
    closeBtn.ontouchend = () => closeBtn.style.backgroundColor = "#ef4444";
    content.appendChild(closeBtn);

    // ========== 拖动+长按逻辑 ==========
    let isDragging = false;
    let dragOffsetX = 0;
    let dragOffsetY = 0;

    // 长按监听
    toggleBtn.addEventListener("touchstart", (e) => {
        if (e.touches.length !== 1 || isHidden) return;
        longPressTimer = setTimeout(() => {
            isLongPressTriggered = true;
            toggleHidden();
        }, LONG_PRESS_DURATION);
    });
    toggleBtn.addEventListener("click", () => clearTimeout(longPressTimer));
    toggleBtn.addEventListener("touchmove", () => clearTimeout(longPressTimer));
    toggleBtn.addEventListener("touchend", () => clearTimeout(longPressTimer));
    toggleBtn.addEventListener("touchcancel", () => clearTimeout(longPressTimer));

    // 拖动监听
    customPickWindow.addEventListener("touchstart", (e) => {
        if (e.touches.length !== 1 || isHidden || isLongPressTriggered) return;
        isDragging = true;
        const touch = e.touches[0];
        const rect = customPickWindow.getBoundingClientRect();
        dragOffsetX = touch.clientX - rect.left;
        dragOffsetY = touch.clientY - rect.top;
        customPickWindow.style.cursor = "grabbing";
    });

    document.addEventListener("touchmove", (e) => {
        if (!isDragging || isHidden || isLongPressTriggered) return;
        if (e.touches.length !== 1) return;
        
        const target = e.target;
        if (target.className === "content" || target.parentElement?.className === "content") return;
        
        e.preventDefault();
        const touch = e.touches[0];
        const newLeft = touch.clientX - dragOffsetX;
        const newTop = touch.clientY - dragOffsetY;
        customPickWindow.style.transition = "none";
        customPickWindow.style.left = `${newLeft}px`;
        customPickWindow.style.top = `${newTop}px`;
        customPickWindow.style.right = "auto";
    });

    document.addEventListener("touchend", () => {
        if (!isDragging) return;
        isDragging = false;
        customPickWindow.style.cursor = "move";
        customPickWindow.style.transition = "width 0.2s ease, opacity 0.3s ease";
    });
    document.addEventListener("touchcancel", () => {
        if (!isDragging) return;
        isDragging = false;
        customPickWindow.style.cursor = "move";
    });

    document.body.appendChild(customPickWindow);
    console.log("[自定义拾取] 悬浮窗已创建");
}

function removeCustomPickWindow() {
    if (customPickWindow && customPickWindow.parentElement) {
        customPickWindow.parentElement.removeChild(customPickWindow);
    }
    customPickWindow = null;
    autoPickCustomEnabled = false;
    console.log("[自定义拾取] 悬浮窗已移除");
}

// ========== 核心绘制函数 ==========
function getCameraRealFOV(cam) {
    if (!cam || !cam.camera) return 90;
    if (typeof cam.camera.fov === "number") return cam.camera.fov;
    const projMat = cam.camera.projectionMatrix;
    if (projMat) return 2 * Math.atan(1 / projMat.m00) * 180 / Math.PI;
    return 90;
}

function normalizeAngle(angle) {
    angle = angle % (2 * Math.PI);
    if (angle > Math.PI) angle -= 2 * Math.PI;
    if (angle < -Math.PI) angle += 2 * Math.PI;
    return angle;
}

function worldToScreen(pos, cam) {
    const camPos = cam.transform?.position;
    const camYaw = cam.camYaw;
    const camPitch = cam.camPitch;
    if (!camPos || camYaw === undefined || camPitch === undefined) return null;

    const dpr = window.devicePixelRatio || 1;
    const fov = getCameraRealFOV(cam) * config.calib.fovScale;
    const fovRad = fov * Math.PI / 180;
    const screenCenterX = window.innerWidth / 2;
    const screenCenterY = window.innerHeight / 2;
    const pixelPerRadianX = screenCenterX / (fovRad / 2);
    const pixelPerRadianY = screenCenterY / (fovRad / 2);

    const dir = new Laya.Vector3();
    Laya.Vector3.subtract(pos, camPos, dir);
    Laya.Vector3.normalize(dir, dir);

    let aimYaw = Math.atan2(dir.x, dir.z) - camYaw;
    let aimPitch = Math.atan2(dir.y, Math.sqrt(dir.x ** 2 + dir.z ** 2)) - camPitch;

    aimYaw = normalizeAngle(aimYaw);
    aimPitch = normalizeAngle(aimPitch);

    aimYaw *= config.calib.yawDir;
    aimPitch *= config.calib.pitchDir;

    const drawX = (screenCenterX + aimYaw * pixelPerRadianX + config.calib.xOffset) * dpr;
    const drawY = (screenCenterY - aimPitch * pixelPerRadianY + config.calib.yOffset) * dpr;

    return { drawX, drawY };
}

function getEnemies() {
    const player = window.CharacterFactory?.Player;
    if (!player) return {};

    const isDreamMode = window.BattleDataMgr?.isInceptionMode || false;
    let enemies = {};

    if (isDreamMode) {
        enemies = BattleDataMgr.isPVEMode() 
            ? (() => {
                const pveMonsters = CharacterFactory.PveMonsters; 
                const rivalPlayers = CharacterFactory.getRivalPlayers(CharacterFactory.Player.team);
                const filteredPlayers = {};  
                for (const key in rivalPlayers) { 
                    const player = rivalPlayers[key];
                    if (!Object.values(pveMonsters).includes(player)) {
                        filteredPlayers[key] = player;  
                    }   
                } 
                return filteredPlayers;  
            })()
            : CharacterFactory.getRivalPlayers(CharacterFactory.Player.team);
        delete enemies[player.kbeAvatar?.id];
    } else {
        enemies = BattleDataMgr.isPVEMode() 
            ? (() => {
                const pveMonsters = CharacterFactory.PveMonsters; 
                const rivalPlayers = CharacterFactory.getRivalPlayers(CharacterFactory.Player.team);
                const filteredPlayers = {};  
                for (const key in rivalPlayers) { 
                    const player = rivalPlayers[key];
                    if (!Object.values(pveMonsters).includes(player)) {
                        filteredPlayers[key] = player;  
                    }   
                } 
                return filteredPlayers;  
            })()
            : CharacterFactory.getRivalPlayers(CharacterFactory.Player.team);
    }
    
    return enemies;
}

function getMonsters() {
    // 直接返回所有怪物
    return CharacterFactory.PveMonsters || {};
}

function getHighValueBoxes() {
    const InceptionMgr = window.InceptionManager?.Inst;
    if (!InceptionMgr || !InceptionMgr.inceptionBoxMap) return [];
    
    const allBoxes = Object.values(InceptionMgr.inceptionBoxMap);
    return allBoxes.filter(box => {
        const isUnopened = box.isOpen === 0;
        const hasHighValueItem = box.itemArr?.some(item => {
            const [itemId] = item.key.split("_");
            const itemCfg = window.ConfigData?.InceptionItem?.get(itemId);
            return itemCfg && itemCfg.itemValue > config.highValueThreshold;
        }) || false;
        return isUnopened && hasHighValueItem;
    });
}

// ========== 敌人绘制循环 ==========
function enemyDrawLoop() {
    if (!enemyDrawEnabled) return;
    
    const ctx = windowEnemyCtx;
    const dpr = window.devicePixelRatio || 1;
    const player = window.CharacterFactory?.Player;
    
    // 清除画布
    ctx.clearRect(0, 0, windowEnemyDrawCanvas.width, windowEnemyDrawCanvas.height);

    if (!player || !player.weaponControls) {
        enemyDrawLoopId = requestAnimationFrame(enemyDrawLoop);
        return;
    }

    const cam = window.main3DCamera;
    if (!cam) {
        enemyDrawLoopId = requestAnimationFrame(enemyDrawLoop);
        return;
    }

    const enemies = getEnemies();
    if (!enemies || Object.keys(enemies).length === 0) {
        enemyDrawLoopId = requestAnimationFrame(enemyDrawLoop);
        return;
    }

    for (const key in enemies) {
        const enemy = enemies[key];
        if (!enemy || enemy.isDead || !enemy.transform || !enemy.transform.position) continue;

        const enemyPos = enemy.transform.position.clone();
        enemyPos.y += 1.2;
        const screenPos = worldToScreen(enemyPos, cam);
        if (!screenPos) continue;

        const { drawX, drawY } = screenPos;
        const dist = Laya.Vector3.distance(cam.transform.position, enemyPos);
        const baseSize = 100 * dpr;
        const sizeFactor = Math.max(0.2, 1 - dist / 80);
        const boxSize = baseSize * sizeFactor;
        const boxHeight = boxSize * 1.8;
        const boxLeft = drawX - boxSize / 2;
        const boxTop = drawY - boxHeight / 2;
        const boxBottom = boxTop + boxHeight;

        let enemyName = "未知敌人";
        if (enemy.kbeAvatar) {
            enemyName = enemy.owner.name || enemy.kbeAvatar.nickname || enemyName;
        }
        enemyName = enemyName !== "未知敌人" ? enemyName : `${enemy.constructor.name || "敌人"}-${key}`;

        // 绘制射线（受射线开关控制）
        if (showRay) {
            ctx.beginPath();
            ctx.moveTo(window.innerWidth / 2 * dpr, 0);
            ctx.lineTo(drawX, drawY);
            let rayColor = "rgba(0, 255, 0, 0.6)";
            if (dist > 30) rayColor = "rgba(255, 255, 0, 0.6)";
            if (dist > 50) rayColor = "rgba(255, 0, 0, 0.6)";
            ctx.strokeStyle = rayColor;
            ctx.lineWidth = 2 * dpr;
            ctx.stroke();
        }

        // 绘制方框
        let fillColor;
        if (dist <= 30) fillColor = "rgba(0, 255, 0, " + config.boxAlpha + ")";
        else if (dist <= 50) fillColor = "rgba(255, 255, 0, " + config.boxAlpha + ")";
        else fillColor = "rgba(255, 0, 0, " + config.boxAlpha + ")";
        
        ctx.fillStyle = fillColor;
        ctx.fillRect(boxLeft, boxTop, boxSize, boxHeight);
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 1 * dpr;
        ctx.strokeRect(boxLeft, boxTop, boxSize, boxHeight);

        // 绘制文本
        ctx.font = (12 * dpr) + "px Arial Bold";
        ctx.textAlign = "center";
        ctx.fillStyle = "#ffffff";
        ctx.fillText(enemyName, drawX, boxTop - 5 * dpr);
        ctx.fillStyle = "#ffff00";
        ctx.fillText(Math.round(dist) + "m", drawX, boxBottom + 15 * dpr);
    }

    enemyDrawLoopId = requestAnimationFrame(enemyDrawLoop);
}

// ========== 怪物绘制循环 ==========
function monsterDrawLoop() {
    if (!monsterDrawEnabled) return;
    
    const ctx = windowMonsterCtx;
    const dpr = window.devicePixelRatio || 1;
    const player = window.CharacterFactory?.Player;
    
    // 清除画布
    ctx.clearRect(0, 0, windowMonsterDrawCanvas.width, windowMonsterDrawCanvas.height);

    if (!player || !player.weaponControls) {
        monsterDrawLoopId = requestAnimationFrame(monsterDrawLoop);
        return;
    }

    const cam = window.main3DCamera;
    if (!cam) {
        monsterDrawLoopId = requestAnimationFrame(monsterDrawLoop);
        return;
    }

    const monsters = getMonsters();
    if (!monsters || Object.keys(monsters).length === 0) {
        monsterDrawLoopId = requestAnimationFrame(monsterDrawLoop);
        return;
    }

    for (const key in monsters) {
        const monster = monsters[key];
        if (!monster || monster.isDead || !monster.transform || !monster.transform.position) continue;

        const monsterPos = monster.transform.position.clone();
        monsterPos.y += 1.2;
        const screenPos = worldToScreen(monsterPos, cam);
        if (!screenPos) continue;

        const { drawX, drawY } = screenPos;
        const dist = Laya.Vector3.distance(cam.transform.position, monsterPos);
        const baseSize = 100 * dpr;
        const sizeFactor = Math.max(0.2, 1 - dist / 80);
        const boxSize = baseSize * sizeFactor;
        const boxHeight = boxSize * 1.8;
        const boxLeft = drawX - boxSize / 2;
        const boxTop = drawY - boxHeight / 2;
        const boxBottom = boxTop + boxHeight;

        let monsterName = `怪物-${key}`;

        // 绘制射线（受射线开关控制）
        if (showRay) {
            ctx.beginPath();
            ctx.moveTo(window.innerWidth / 2 * dpr, 0);
            ctx.lineTo(drawX, drawY);
            let rayColor = "rgba(147, 51, 234, 0.6)";
            if (dist > 30) rayColor = "rgba(168, 85, 247, 0.6)";
            if (dist > 50) rayColor = "rgba(192, 132, 252, 0.6)";
            ctx.strokeStyle = rayColor;
            ctx.lineWidth = 2 * dpr;
            ctx.stroke();
        }

        // 绘制方框 - 怪物用紫色
        let fillColor;
        if (dist <= 30) fillColor = "rgba(147, 51, 234, " + config.boxAlpha + ")";
        else if (dist <= 50) fillColor = "rgba(168, 85, 247, " + config.boxAlpha + ")";
        else fillColor = "rgba(192, 132, 252, " + config.boxAlpha + ")";
        
        ctx.fillStyle = fillColor;
        ctx.fillRect(boxLeft, boxTop, boxSize, boxHeight);
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 1 * dpr;
        ctx.strokeRect(boxLeft, boxTop, boxSize, boxHeight);

        // 绘制文本
        ctx.font = (12 * dpr) + "px Arial Bold";
        ctx.textAlign = "center";
        ctx.fillStyle = "#d8b4fe"; // 怪物用紫色文字
        ctx.fillText(monsterName, drawX, boxTop - 5 * dpr);
        ctx.fillStyle = "#ffff00";
        ctx.fillText(Math.round(dist) + "m", drawX, boxBottom + 15 * dpr);
    }

    monsterDrawLoopId = requestAnimationFrame(monsterDrawLoop);
}

// ========== 物资绘制循环 ==========
function boxDrawLoop() {
    if (!boxDrawEnabled) return;
    
    const ctx = windowBoxCtx;
    const dpr = window.devicePixelRatio || 1;
    
    // 清除画布
    ctx.clearRect(0, 0, windowBoxDrawCanvas.width, windowBoxDrawCanvas.height);

    const cam = window.main3DCamera;
    if (!cam) {
        boxDrawLoopId = requestAnimationFrame(boxDrawLoop);
        return;
    }

    const highValueBoxes = getHighValueBoxes();
    if (highValueBoxes.length === 0) {
        boxDrawLoopId = requestAnimationFrame(boxDrawLoop);
        return;
    }

    highValueBoxes.forEach(box => {
        if (!box.boxPosition) return;

        const boxPos = box.boxPosition.clone();
        boxPos.y += 0.5;
        const screenPos = worldToScreen(boxPos, cam);
        if (!screenPos) return;

        const { drawX, drawY } = screenPos;
        const boxSize = 60 * dpr;
        const boxLeft = drawX - boxSize / 2;
        const boxTop = drawY - boxSize / 2;
        
        // 绘制物资箱方框
        ctx.fillStyle = config.boxColor;
        ctx.fillRect(boxLeft, boxTop, boxSize, boxSize);
        ctx.strokeStyle = config.boxStroke;
        ctx.lineWidth = 2 * dpr; 
        ctx.strokeRect(boxLeft, boxTop, boxSize, boxSize);

        // 绘制物资信息
        let itemText = "💎 高价值物资：\n";
        if (box.itemArr && box.itemArr.length > 0) {
            box.itemArr.forEach((item, idx) => {
                const [itemId] = item.key.split("_");
                const itemCfg = window.ConfigData?.InceptionItem?.get(itemId);
                if (itemCfg && itemCfg.itemValue > config.highValueThreshold) {
                    itemText += `${idx+1}. ${itemCfg.itemID}（${itemCfg.itemValue}）\n`;
                }
            });
        }

        ctx.font = `${config.itemTextSize * dpr}px Arial`;
        ctx.fillStyle = config.itemTextColor;
        ctx.textAlign = "center";
        const lines = itemText.split("\n");
        lines.forEach((line, i) => {
            ctx.fillText(line, drawX, boxTop - 10 * dpr - i * (config.itemTextSize + 2) * dpr);
        });
    });

    boxDrawLoopId = requestAnimationFrame(boxDrawLoop);
}

// ========== 梦境模式快捷操作 ==========
function handleDreamModeQuickAction(action) {
    switch(action) {
        case 'evacuate':
            if (typeof EventDispatcher !== 'undefined' && typeof EventDef !== 'undefined') {
                EventDispatcher.Fire(EventDef.EVENT_INCEPTION_START_EVACUATE, 1);
                console.log('[梦境模式] 已触发撤退指令');
            } else {
                console.log('[梦境模式] 未检测到 EventDispatcher 或 EventDef');
            }
            break;
        case 'transmit1':
            if (typeof EventDispatcher !== 'undefined' && typeof EventDef !== 'undefined') {
                EventDispatcher.Fire(EventDef.EVENT_PVE_SPECIAL_AREA_TRANSMIT, 1, !1, 1);
                console.log('[梦境模式] 已触发传送至1层指令');
            }
            break;
        case 'transmit2':
            if (typeof EventDispatcher !== 'undefined' && typeof EventDef !== 'undefined') {
                EventDispatcher.Fire(EventDef.EVENT_PVE_SPECIAL_AREA_TRANSMIT, 2, !1, 1);
                console.log('[梦境模式] 已触发传送至2层指令');
            }
            break;
        case 'transmit3':
            if (typeof EventDispatcher !== 'undefined' && typeof EventDef !== 'undefined') {
                EventDispatcher.Fire(EventDef.EVENT_PVE_SPECIAL_AREA_TRANSMIT, 3, !1, 1);
                console.log('[梦境模式] 已触发传送至3层指令');
            }
            break;
        case 'transmit4':
            if (typeof EventDispatcher !== 'undefined' && typeof EventDef !== 'undefined') {
                EventDispatcher.Fire(EventDef.EVENT_PVE_SPECIAL_AREA_TRANSMIT, 4, !1, 1);
                console.log('[梦境模式] 已触发传送至4层指令');
            }
            break;
    }
}

// ========== 事件处理函数 ==========
function handleTouchStart(e) {
    const touch = e.target;

    // 按钮元素直接放行，不阻止事件
    if (touch.classList.contains('chetui-btn') || touch.classList.contains('mini-bar-btn') || touch.classList.contains('dream-quick-btn')) {
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

function handleTouchEnd() {
    isDragging = false;
    isResizing = false;
    resizeCorner = null;
    resizeStartRect = null;
    if (menuContainer) menuContainer.style.zIndex = 99999999;
    if (miniBar) miniBar.style.zIndex = 99999999;
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
        newWidth = Math.max(MENU_MIN_WIDTH, Math.min(newWidth, MENU_MAX_WIDTH));
        newHeight = Math.max(MENU_MIN_HEIGHT, Math.min(newHeight, MENU_MAX_HEIGHT));
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
            // 关键修改：同步更新menuOriginalRect，让展开后的菜单位置跟随最小化条
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

function handleToggleSwitch(e) {
    const toggle = e.target.closest('.chetui-toggle');
    if (!toggle) return;
    
    const isOn = toggle.classList.contains('active');
    toggle.classList.toggle('active');
    const dot = toggle.querySelector('.toggle-dot');
    
    if (isOn) {
        toggle.style.backgroundColor = config.toggleOffBg;
        dot.style.left = '2px';
    } else {
        toggle.style.backgroundColor = config.toggleOnBg;
        dot.style.left = '22px';
    }
    
    // 根据ID处理不同的开关
    if (toggle.id === 'green') {
        // 怪物开关 - 与怪物绘制独立控制
        monsterDrawEnabled = !isOn;
        if (monsterDrawEnabled) {
            if (!windowMonsterDrawCanvas) initCanvas();
            monsterDrawLoop();
        } else {
            stopMonsterDraw();
        }
    }
    else if (toggle.id === 'blue') {
        // 敌人开关
        enemyDrawEnabled = !isOn;
        if (enemyDrawEnabled) {
            if (!windowEnemyDrawCanvas) initCanvas();
            enemyDrawLoop();
        } else {
            stopEnemyDraw();
        }
    }
    else if (toggle.id === 'red') {
        // 物资开关
        boxDrawEnabled = !isOn;
        if (boxDrawEnabled) {
            if (!windowBoxDrawCanvas) initCanvas();
            boxDrawLoop();
        } else {
            stopBoxDraw();
        }
    }
    else if (toggle.id === 'yellow') {
        // 简单模式自动拾取开关
        autoPickSimpleEnabled = !isOn;
        updateAutoPickInterval();
    }
    else if (toggle.id === 'hard') {
        // 困难模式自动拾取开关
        autoPickHardEnabled = !isOn;
        updateAutoPickInterval();
    }
    else if (toggle.id === 'custom') {
        // 自定义价值拾取开关
        autoPickCustomEnabled = !isOn;
        if (autoPickCustomEnabled) {
            createCustomPickWindow();
            console.log('[自定义拾取] 悬浮窗已创建');
        } else {
            stopCustomPick();
        }
    }
    else if (toggle.id === 'test') {
        // 其他模式方框开关 - 复用敌人绘制功能
        enemyDrawEnabled = !isOn;
        if (enemyDrawEnabled) {
            if (!windowEnemyDrawCanvas) initCanvas();
            enemyDrawLoop();
        } else {
            stopEnemyDraw();
        }
    }
    else if (toggle.id === 'patch') {
        // 其他模式射线开关 - 与梦境模式射线复选框双向绑定
        showRay = !isOn;
        // 更新梦境模式射线复选框状态
        const rayCheckbox = document.querySelector('#ray-checkbox');
        if (rayCheckbox) {
            rayCheckbox.checked = showRay;
        }
    }
}

// 更新自动拾取定时器
function updateAutoPickInterval() {
    const isAnyAutoPickEnabled = autoPickSimpleEnabled || autoPickHardEnabled;
    
    if (isAnyAutoPickEnabled && !pickIntervalId) {
        // 启动自动拾取，每秒执行一次
        pickIntervalId = setInterval(pickAutoItems, 1000);
        console.log(`[自动拾取] 已启动，间隔:1秒`);
    } else if (!isAnyAutoPickEnabled && pickIntervalId) {
        // 停止自动拾取
        stopAutoPick();
    }
}

// 射线复选框处理 - 与其他模式射线开关双向绑定
function handleRayCheckbox(e) {
    const checkbox = e.target;
    if (checkbox.type === 'checkbox') {
        showRay = checkbox.checked;
        // 更新其他模式射线开关状态
        const patchToggle = document.querySelector('#patch');
        if (patchToggle) {
            const isOn = patchToggle.classList.contains('active');
            if (showRay !== isOn) {
                patchToggle.classList.toggle('active');
                const dot = patchToggle.querySelector('.toggle-dot');
                if (showRay) {
                    patchToggle.style.backgroundColor = config.toggleOnBg;
                    dot.style.left = '22px';
                } else {
                    patchToggle.style.backgroundColor = config.toggleOffBg;
                    dot.style.left = '2px';
                }
            }
        }
    }
}

// 梦境模式快捷按钮处理
function handleDreamQuickBtn(e) {
    const btn = e.target.closest('.dream-quick-btn');
    if (!btn) return;
    
    const action = btn.dataset.action;
    if (action) {
        handleDreamModeQuickAction(action);
    }
}

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
    const scrollContent = menuContainer.querySelector('.scroll-content');
    if (scrollContent) {
        // 标题栏高度：标题44px + 底部按钮区域30px + 边距
        const titleHeight = 44; // 标题栏+副标题
        const footerHeight = 42; // 底部按钮区域（含margin）
        scrollContent.style.height = `calc(100% - ${titleHeight + footerHeight}px)`;
        
        // 强制重排，确保布局正确
        void scrollContent.offsetHeight;
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

    // 点击展开：移除事件冒泡拦截，确保点击生效
    bar.addEventListener('click', (e) => {
        if (!e.target.classList.contains('mini-bar-btn')) {
            handleMenuRestore();
        }
    });
    // 单独绑定关闭按钮事件
    bar.querySelector('.mini-bar-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        destroyAllResources();
    });
    // 最小化条触摸事件：移除 stopPropagation 和 preventDefault，放行点击
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

// ========== 创建菜单 ==========
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
        <div style="color:${config.titleColor}; font-weight:bold; font-size:14px;">Chetui-Menu</div>
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
    subTitle.textContent = 'Mod | Chetui';
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

    const toggles = [
        { label: '怪物', id: 'green', active: false },
        { label: '敌人', id: 'blue', active: false },
        { label: '物资', id: 'red', active: false },
        { label: '自动拾取高价值物资(简单模式)', id: 'yellow', active: false },
        { label: '自动拾取(困难模式)', id: 'hard', active: false },
        { label: '自定义价值拾取', id: 'custom', active: false }
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

    // 射线 复选框
    const sakuraRow = document.createElement('div');
    sakuraRow.style.cssText = `
        display:flex;
        justify-content:center;
        align-items:center;
        gap:4px;
        padding:6px 8px;
        border-bottom:1px solid #334155;
    `;
    sakuraRow.innerHTML = `
        <input type="checkbox" id="ray-checkbox" style="width:14px; height:14px; accent-color:#06b6d4;">
        <span style="color:${config.textColor}; font-size:12px;">射线</span>
    `;
    section1.appendChild(sakuraRow);

    // 梦境模式快捷操作按钮
    const quickActionRow = document.createElement('div');
    quickActionRow.style.cssText = `
        display:flex;
        flex-wrap:wrap;
        gap:4px;
        padding:6px 8px;
        justify-content:space-between;
    `;
    
    const quickActions = [
        { text: '撤退', action: 'evacuate' },
        { text: '传送1层', action: 'transmit1' },
        { text: '传送2层', action: 'transmit2' },
        { text: '传送3层', action: 'transmit3' },
        { text: '传送4层', action: 'transmit4' }
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

    const chetuiToggles = [
        { label: '方框', id: 'test', active: false },
        { label: '射线', id: 'patch', active: false }
    ];
    chetuiToggles.forEach(({ label, id, active }) => {
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

    const textRow = document.createElement('div');
    textRow.style.cssText = `
        color:#eab308;
        text-align:center;
        padding:6px 8px;
        font-style:italic;
        font-size:10px;
        white-space: pre-line;
    `;
    textRow.textContent = '---仅供学习交流，严禁用于商业用途。\n苍生无言，侠为其声。';
    section2.appendChild(textRow);
    scrollContent.appendChild(section2);

    container.appendChild(scrollContent);

    // 底部按钮 - 添加chetui-btn类名，用于事件识别
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

    // 四个角落调整手柄（透明可点击）
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

    // 单独绑定底部按钮事件，避免事件冲突
    footer.querySelectorAll('.chetui-btn')[0].addEventListener('click', destroyAllResources);
    footer.querySelectorAll('.chetui-btn')[1].addEventListener('click', handleMenuMinimize);

    // 绑定射线复选框事件
    const rayCheckbox = container.querySelector('#ray-checkbox');
    if (rayCheckbox) {
        rayCheckbox.addEventListener('change', handleRayCheckbox);
    }

    // 绑定梦境模式快捷按钮事件
    container.querySelectorAll('.dream-quick-btn').forEach(btn => {
        btn.addEventListener('click', handleDreamQuickBtn);
    });

    // 绑定全局事件
    titleBar.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);
    document.querySelectorAll('.chetui-toggle').forEach(toggle => {
        toggle.addEventListener('click', handleToggleSwitch);
    });
}

// ========== 启动脚本 ==========
createChetuiMenu();

// ========== 页面卸载时自动清理 ==========
window.addEventListener('beforeunload', destroyAllResources);