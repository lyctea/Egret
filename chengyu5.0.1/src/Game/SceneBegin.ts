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
    private btn_setting:eui.Button;
    public constructor() {
        super();
        SoundMenager.Shared().PlayBGM();
        this.skinName = "src/Game/SceneBeginSkin.exml";
        this.btn_begin.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_begin, this);
        //开始播放背景音乐
        
        //对设置按钮添加事件
        this.btn_setting.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_setting, this);
    }
    private onclick_begin(){
        SoundMenager.Shared().PlayClick()
        this.parent.addChild(SceneLevels.Shared());
        this.parent.removeChild(this);
    }
    private onclick_setting() {
        SoundMenager.Shared().PlayClick();
        this.addChild(GameSetting.Shared());
    }
}