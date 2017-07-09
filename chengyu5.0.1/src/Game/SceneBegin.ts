
class SceneBegin extends eui.Component {
    //单例
    private static shared: SceneBegin;
    public static Shared() {
        if(SceneBegin.shared == null) {
            SceneBegin.shared = new SceneBegin();
        }
        return SceneBegin.shared;
    }
    private btn_begin:eui.Button;
    public constructor() {
          super();
          this.skinName = "src/Game/SceneBeginSkin.exml";
          this.btn_begin.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_begin,this);
    }
    private onclick_begin(){
        //console.log("game begin!");
        this.parent.addChild(SceneLevels.Shared());
        this.parent.removeChild(this);
    }
}