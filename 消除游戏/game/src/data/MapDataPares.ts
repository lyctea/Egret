/**
 * 工具类, 负责数据解析
 * 解析关卡配置json文件
 */
class MapDataPares {
	public static createMapData(val: number[]): void {
		var len: number = val.length;
		//地图中为使用的个数
		GameData.unmapnum = len;
		var index: number = 0;
		for (var i = 0; i < len; i++) {
			//取出数组值
			index = val[i];
			//通过公式计算行列位置
			var row: number = Math.floor(index / GameData.MaxColumn);
			var col: number = index % GameData.MaxRow;
			//内容为-1 表示该地图不可用
			GameData.mapData[row][col] = -1;
		}
		//当前游戏中可用数据数量
		GameData.currentElementNum = GameData.MaxRow * GameData.MaxColumn - len;
	}
}