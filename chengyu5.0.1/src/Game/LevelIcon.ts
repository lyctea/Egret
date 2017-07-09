class LevelIcon extends eui.Button{
	private lb_level:eui.Label

	public constructor() {
		super()
		this.skinName = "src/Game/LevelIconSkin.exml"
	}

	/**
	 * 拿到前期关卡等级1-100级
	 */
	public get Level():number {
		return parseInt (this.lb_level.text)
	}
	/**
	 * 设置当前关卡等级
	 */
	public set Level(value: number) {
		this.lb_level.text = value.toString()
	}
}