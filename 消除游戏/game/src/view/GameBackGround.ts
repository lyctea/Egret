/**
 * 游戏的背景类 继承自Sprite
 */
class GameBackGround extends egret.Sprite {
	public constructor() {
		super();
	}

	private bgImage: egret.Bitmap;
	private gird: egret.Bitmap[];

	private createBackGroundImage() {
		if (this.bgImage) {
			this.bgImage = new egret.Bitmap();
		}
		//获取背景图的网络资源
		this.bgImage.texture = RES.getRes(GameData.levelBackgroundImageName);
		//设置背景图的宽高为舞台的宽高
		this.bgImage.width = GameData.stageW;
		this.bgImage.height = GameData.stageH;

		this.addChild(this.bgImage);

		var propbg: egret.Bitmap = new egret.Bitmap();
		propbg.texture = RES.getRes("propbg_png");
		propbg.width = GameData.stageW;
		propbg.height = GameData.stageH / 5 + 20;
		propbg.y = GameData.stageH - propbg.height;

		this.addChild(propbg);
	}

	/**
	 *  创建格子图
	 */
	

}