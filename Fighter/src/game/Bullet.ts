module fighter {
	/**
	 * 子弹类
	 */
	export class Bullet extends egret.Bitmap {

		private static cacheDict: Object = {}
		/**
		 * 生产子弹
		 */
		public static produce(textureName: string): fighter.Bullet {
			if (fighter.Bullet.cacheDict[textureName] == null) {
				fighter.Bullet.cacheDict[textureName] = []
			}
			var dict: fighter.Bullet[] = fighter.Bullet.cacheDict[textureName]
			var bullet: fighter.Bullet
			if (dict.length > 0) {
				bullet = dict.pop()
			} else {
				bullet = new fighter.Bullet(RES.getRes(textureName),textureName)
			}
			bullet.textureName = textureName
			return bullet
		}

		/**
		 * 回收
		 */
		public static reclaim(bullet: fighter.Bullet, textureName: string): void {
			if (fighter.Bullet.cacheDict[textureName] == null) {
				fighter.Bullet.cacheDict[textureName] = []
			}
			var dict:fighter.Bullet[] = fighter.Bullet.cacheDict[textureName]
			if(dict.indexOf(bullet) == -1) {
				dict.push(bullet)
			}
		}
		//子弹类型名
		public textureName: string
		public constructor(texture:egret.Texture, textureName: string) {
			super(texture)
			this.textureName = textureName
		}
	}
}