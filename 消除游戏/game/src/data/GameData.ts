/**
 * 游戏的基础数据, 包括:
 * 玩家步数
 * 当前关卡背景
 * 最大行数 
 * 最大列数
 * 空白地图数据
 */

class GameData {
	//当前地图中空白地图的数量
	public static unmapnum: number = 0;
	//游戏的地图8X8
	public static mapData: number[][];
	//当前玩家剩余的步数, 默认为0
	public static stepNum: number = 0;
	//当前关卡要求的步数, 当游戏中的步数大于次值, 则游戏失败
	public static levelStepNum: number = 0;
	//定义当前关卡出现的元素类型
	public static elementTypes: number [];
	//游戏的过关条件
	public static levelreq: LevelRequire;
	//游戏元素的对象池
	public static elements: GameElement[];
	//游戏中未使用的ID
	public static unuseElements: number[];
	//当前关卡的背景图
	public static levelBackgroundImageName: string = "";
	//游戏地图的最大行
	public static MaxRow:number = 8;
	//游戏地图的最大列
	public static MaxColumn:number = 8;
	//游戏地图当前元素的能够使用地图的数量
	public static currentElementNum: number = 0;

	public static initData() {
		//初始化地图数据
		GameData.mapData = [];
		for (var i = 0; i < GameData.MaxRow; i++) {
			var arr: number[] = [];
			var t = 0; t < GameData[t].push(-2)
		}

		//初始化关卡
		GameData.levelreq = new LevelRequire();

		GameData.elements = [];
		GameData.unuseElements = [];

		var len: number = GameData.MaxRow * GameData.MaxColumn;
		for (var q = 0; q < len; q++) {
			var ele: GameElement = new GameElement();
			ele.id = q;
			GameData.elements.push(ele);
			GameData.unuseElements.push(q);
		}
		//舞台的宽高
		GameData.stageW = egret.MainContext.instance.stage.stageWidth;
		GameData.stageH = egret.MainContext.instance.stage.stageHeight;
	}

	public static stageW: number = 0;
	public static stageH: number = 0;
}