class LevelRequire {
	/**
	 * 数据对象池, 里面的对象是当前关卡所需要的所有元素, 每个元素都有type和num两个属性,
	 * type用以标记是哪个海盗, num是需要消除的海盗的数量
	 */
	public reqElements: LevelRequireElement[];

	public constructor() {
		//对象池初始化
		this.reqElements = []
	}

	/**
	 * 获取过关条件的数量 reqElements 过关条件, 一共是有多少种元素需要消除
	 */
	public getLevelReqNum(): number {
		return this.reqElements.length;
	}

	/**
	 * 添加关卡元素 不仅需要添加类型与数据, 还需要添加一个LevelRequireElement 放入对象池中
	 */
	public addElement(type: string, num: number) {
		var ele: LevelRequireElement = new LevelRequireElement();
		ele.num = num;
		ele.type = type;
		this.reqElements.push(ele);
	}

	/**
	 * 启动关卡条件修改, 清空关卡元素, 初始化关卡
	 */
	public openChange() {
		this.reqElements = [];
	}

	/**
	 * 减少关卡中其中的元素数量, 数据类型为type的元素, 减少对应的数量
	 */
	public changeReqNum(type: string, num: number) {
		var l: number = this.getLevelReqNum();
		for (var i = 0; i < l; i++) {
			if (this.reqElements[i].type == type) {
				this.reqElements[i].num -= num;
				return;
			}
		}
	}

	/**
	 * 检测当前游戏所有关卡是否已经完成
	 */
	public isClear(): boolean {
		var l: number = this.getLevelReqNum();
		for (var i = 0; i < l; i++) {
			if (this.reqElements[i].num > 0) {
				return false;
			}
		}
		return true;
	}
}