module fighter {
	export class Airplane extends egret.DisplayObjectContainer {

		private static cacheDict: Object = {}
		/**
		 * 控制飞机的数量，需要为飞机加入工厂方法，和对象池机制
		 */
		public static produce(textureName: string, fireDelay: number): fighter.Airplane {
			//当对象池为null， 初始化对象池数组
			if (fighter.Airplane.cacheDict[textureName] == null) {
				fighter.Airplane.cacheDict[textureName] = []
			}
			var dict: fighter.Airplane[] = fighter.Airplane.cacheDict[textureName]
			var theFighter: fighter.Airplane
			if (dict.length > 0) {
				theFighter = dict.pop()
			} else {
				theFighter = new fighter.Airplane(RES.getRes(textureName), fireDelay)
			}
			theFighter.blood = 10
			return theFighter
		}

		/**
		 *  回收创建的飞机对象
		 */
		public static reclaim(theFighter:fighter.Airplane, textureName: string):void {
			//当对象池为null， 初始化对象池数组
			if (fighter.Airplane.cacheDict[textureName] == null) {
				fighter.Airplane.cacheDict[textureName] = []
			}
			//如果在对象池中，有该飞机，则立即将对象从对象数组中移除
			var dict:fighter.Airplane[] = fighter.Airplane.cacheDict[textureName]
			if(dict.indexOf(theFighter) == -1) {
				dict.push(theFighter)
			}
		}

		//飞机图
		private bmp: egret.Bitmap
		//创建子弹的间隔时间
		private fireDelay: number
		//定时器
		private fireTimer: egret.Timer
		//飞机生命值
		public blood: number = 10

		public constructor(texture:egret.Texture,fireDelay:number) {
			super()
			this.fireDelay = fireDelay
			this.bmp = new egret.Bitmap(texture)
			this.addChild(this.bmp)
			this.fireTimer = new egret.Timer(fireDelay)
			this.fireTimer.addEventListener(egret.TimerEvent.TIMER, this.createBullet, this)

		}

		/**
		 * 开火
		 */
		public fire(): void {
			this.fireTimer.start()
		}

		/**
		 * 停火
		 */
		public stopFire(): void {
			this.fireTimer.stop()
		}

		/**
		 * 创建子弹
		 */
		private createBullet(evt: egret.TimerEvent): void {
			this.dispatchEventWith('createBullet')
		}

	}
}