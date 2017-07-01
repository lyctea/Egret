class Main extends egret.DisplayObjectContainer {
    public constructor() {
        super()
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
    }
    private onAddToStage(event: egret.Event) {
        var _anchorTest: AnchorTest = new AnchorTest()
        this.addChild(_anchorTest)
    }
}