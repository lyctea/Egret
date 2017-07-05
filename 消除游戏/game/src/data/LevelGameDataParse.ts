/**
 * 关卡数据解析 及从json配置文件中解析数据, 并且复制给GameData对象
 * 独立数据 步数
 * 过关条件
 */
class LevelGameDataParse {
	public static parseLevelGameData(val: any) {
		GameData.stepNum = val.step;
		GameData.levelStepNum = val.step;
		GameData.elementTypes = val.element;
		GameData.levelBackgroundImageName = val.levelbgimg;
		LevelGameDataParse.parseLevelReq(val.levelreq);
	}

	private static parseLevelReq(val: any) {
		//将原有的数据清空
		GameData.levelreq.openChange();
		var len: number = val.length;
		for (var i = 0; i < len; i++) {
			GameData.levelreq.addElement(val[i].type, val[i].num);
		}
	}
}