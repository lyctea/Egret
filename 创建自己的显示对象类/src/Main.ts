class Main extends egret.DisplayObjectContainer {
    public constructor() {
        super()
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
    }
    private onAddToStage(event: egret.Event) {
        var _move: Move = new Move()
        this.addChild(_move)
    }
}