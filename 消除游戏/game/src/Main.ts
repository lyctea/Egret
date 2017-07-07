class Main extends egret.DisplayObjectContainer {

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(evt: egret.EventDispatcher) {
        //加载资源配置文件 
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        //加载配置资源
        RES.loadConfig("resource/default.res.json", "resource/");
    }
    /**
     * 资源加载完成后响应的函数
     */
    private onConfigComplete(evt: RES.ResourceEvent) {
        //移除时间监听, 防止内存泄露
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onResuoureLoadComplete, this);
        //加载组
        RES.loadGroup("game");
    }

    /**
     * 游戏的资源组加载完成响应方法
     */
    private onResuoureLoadComplete(evt: RES.ResourceEvent) {
        this.createGame();
    }
    /**
     * 创建游戏 开始游戏
     */
    private createGame() {

    }

}