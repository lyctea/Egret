module fighter {
	/**
	 *  主游戏容器
	 */
	export class GameContainer extends egret.DisplayObjectContainer {
		//开始按钮
		private btnStart: egret.Bitmap
		//舞台宽高
		private stageW: number
		private stageH: number
		//可滚动背景图
		private bg: fighter.BgMap
		//我的飞机
		private myFighter: fighter.Airplane
		//我的子弹
		private myBullets: fighter.Bullet[] = []
		//敌人的飞机
		private enemyFighters: fighter.Airplane[] = []
		//触发创建敌机的时间间隔
		private enemyFightersTimer: egret.Timer = new egret.Timer(1000)
		//敌人的子弹
		private enemyBullets: fighter.Bullet[] = []



		public constructor() {
			super()
			this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
		}

		/**
		 * 初始化
		 */
		private onAddToStage(event: egret.Event) {
			this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
			this.createGameScene()
		}

		/**
		 * 创建游戏场景
		 */
		private createGameScene(): void {
			this.stageW = this.stage.stageWidth
			this.stageH = this.stage.stageHeight

			//创建可滚动的背景图
			this.bg = new fighter.BgMap()
			this.addChild(this.bg)

			//开始按钮
			this.btnStart = fighter.createBitmapByName('btnStart')
			this.btnStart.x = (this.stageW - this.btnStart.width) / 2
			this.btnStart.touchEnabled = true
			this.btnStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gameStart, this)
			this.addChild(this.btnStart)

			//我的飞机
			this.myFighter = new fighter.Airplane(RES.getRes('f1'), 100)
			this.myFighter.y = this.stageH - this.myFighter.height - 50
			this.addChild(this.myFighter)
		}

		/**
		 * 游戏开始
		 */
		private gameStart(): void {
			this.bg.start()

			//我的飞机开火
			this.myFighter.fire()
			this.enemyFightersTimer.addEventListener(egret.TimerEvent.TIMER, this.createEnemyFighter, this)
			this.enemyFightersTimer.start()

			//子弹的创建是由监听‘createBullet’ 事件驱动的，为我的飞机和敌机添加事件
			this.myFighter.addEventListener('createBullet', this.createBulletHandler, this)

		}

		/**
		 * 创建敌机
		 */
		private createEnemyFighter(evt: egret.TimerEvent): void {
			var enemyFighter: fighter.Airplane = fighter.Airplane.produce('f2', 1000)
			//随机生成坐标
			enemyFighter.x = Math.random() * (this.stageW - enemyFighter.width)
			enemyFighter.y = -enemyFighter.height - Math.random() * 3000
			enemyFighter.addEventListener('createBullet', this.createBulletHandler, this)
			enemyFighter.fire()
			this.addChildAt(enemyFighter, this.numChildren - 1)
			this.enemyFighters.push(enemyFighter)
		}

		/**
		 * 创建子弹处理函数
		 */
		private createBulletHandler(evt: egret.Event): void {
			var bullet: fighter.Bullet
			if (evt.target == this.myFighter) {
				for (var i: number = 0; i < 2; i++) {
					bullet = fighter.Bullet.produce('b1')
					bullet.x = i == 0 ? (this.myFighter.x + 10) : (this.myFighter.x + this.myFighter.width - 22)
					bullet.y = this.myFighter.y + 30
					this.addChildAt(bullet, this.numChildren - 1 - this.enemyFighters.length)
					this.myBullets.push(bullet)
				}
			} else {
				var theFighter: fighter.Airplane = evt.target
				bullet = fighter.Bullet.produce('b2')
				bullet.x = theFighter.x + 28
				bullet.y = theFighter.y + 10
				this.addChildAt(bullet, this.numChildren - 1 - this.enemyFighters.length)
				this.enemyBullets.push(bullet)
			}
		}
	}
}