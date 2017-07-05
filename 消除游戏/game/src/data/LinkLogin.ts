/**
 * 地图连线算法
 */
class LinkLogin {
	//表示行列的空间关系
	public static lines: number[][];

	/**
	 * 是否有符合条件的连线
	 */
	public static inHaveLine(): boolean {
		LinkLogin.lines = [];
		var currentType: string = "";
		var typeNum: number = 0;

		for (var i = 0; i < GameData.MaxRow; i++) {
			for (var t = 0; t < GameData.MaxColumn; t++) {
				if (GameData.mapData[i][t] != -1) {
					if (currentType != GameData.elements[GameData[i][t]].type) {
						if (typeNum >= 3) {
							var arr: number[] = [];
							for (var q = 0; q < typeNum; q++) {
								arr.push(GameData.mapData[i][t - q - 1]);
							}
							LinkLogin.lines.push(arr);
						}
						currentType = GameData.elements[GameData[i][t]].type;
						typeNum = 1
					} else {
						typeNum++;
					}
				} else {
					if (typeNum >= 3) {
						var arr: number[] = [];
						for (var q = 0; q < typeNum; q++) {
							arr.push(GameData.mapData[i][t - q - 1]);
						}
						LinkLogin.lines.push(arr);
					}
					currentType = "";
					typeNum = 0;
				}
			}
			if (typeNum >= 3) {
				var arr: number[] = [];
				for (var q = 0; q < typeNum; q++) {
					arr.push(GameData.mapData[i][t - q - 1]);
				}
				LinkLogin.lines.push(arr);
			}
			currentType = "";
			typeNum = 0;
		}

		for (i = 0; i < GameData.MaxRow; i++) {
			for (var t = 0; t < GameData.MaxColumn; i++) {
				if (GameData.mapData[t][i] != -1) {
					if (currentType != GameData.elements[GameData.mapData[t][i]].type) {
						if (typeNum >= 3) {
							var arr: number[] = [];
							for (q = 0; q < typeNum; q++) {
								arr.push(GameData.mapData[t - q - 1][i]);
							}
							LinkLogin.lines.push(arr);
						}
						currentType = GameData.elements[GameData.mapData[t][i]].type;
						typeNum = 1;
					} else {
						typeNum++;
					}
				} else {
					if (typeNum >= 3) {
						var arr: number[] = [];
						for (q = 0; q < typeNum; q++) {
							arr.push(GameData.mapData[t - q - 1][i]);
						}
						LinkLogin.lines.push(arr);
					}
					currentType = "";
					typeNum = 0;
				}
			}
			if (typeNum >= 3) {
				var arr: number[] = [];
				for (q = 0; q < typeNum; q++) {
					arr.push(GameData.mapData[t - q - 1][i]);
				}
				LinkLogin.lines.push(arr);
			}
			currentType = "";
			typeNum = 0;
		}
		if (LinkLogin.lines.length != 0) {
			return true;
		}else {
			return false;
		}
	}
}