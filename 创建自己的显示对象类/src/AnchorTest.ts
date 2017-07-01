/**
 * 可修改显示对象的锚点
 */
class AnchorTest extends egret.DisplayObjectContainer {
    public constructor() {
        super()
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
    }
    private onAddToStage(event: egret.Event) {
        // var shp: egret.Shape = new egret.Shape()
        // shp.graphics.beginFill(0x00ff00)
        // shp.graphics.drawRect(0, 0, 100, 100)
        // shp.graphics.endFill()

        // shp.x = 100
        // shp.y = 100

        // shp.anchorOffsetX = 100
        // this.addChild(shp)



        //创建一个空的 DisplayObjectContainer，把它的 x 和 y 坐标都改为
        /*   var container: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
           container.x = 200;
           container.y = 200;
           this.addChild(container);
           //画一个红色的圆，添加到 container 中
           var circle: egret.Shape = new egret.Shape();
           circle.graphics.beginFill(0xff0000);
           circle.graphics.drawCircle(25, 25, 25);
           circle.graphics.endFill();
           container.addChild(circle);
           //给圆增加点击事件
           circle.touchEnabled = true;
           circle.addEventListener(egret.TouchEvent.TOUCH_TAP, onClick, this);
           function onClick(): void {
               //把舞台左上角的坐标(0,0)转换为 container 内部的坐标
               var targetPoint: egret.Point = container.globalToLocal(0, 0);
               //重新定位圆，可以看到圆形移到了屏幕的左上角
               circle.x = targetPoint.x;
               circle.y = targetPoint.y;
           }
           */

        //通过触摸移动显示对象
        //您可以通过触摸来移动显示对象，当手指按到屏幕时监听 TOUCH_MOVE 事件，然后每次手指移动时都会调用此函数，
        //使拖动的对象跳到手指所在的x,y坐标。当手指离开屏幕后取消监听，对象停止跟随。
        
        var offsetX: number;
        var offsetY: number;
        //画一个红色的圆
        var circle: egret.Shape = new egret.Shape();
        circle.graphics.beginFill(0xff0000);
        circle.graphics.drawCircle(25, 25, 25);
        circle.graphics.endFill();
        this.addChild(circle);
        //手指按到屏幕，触发 startMove 方法
        circle.touchEnabled = true;
        circle.addEventListener(egret.TouchEvent.TOUCH_BEGIN, startMove, this);
        //手指离开屏幕，触发 stopMove 方法
        circle.addEventListener(egret.TouchEvent.TOUCH_END, stopMove, this);
        function startMove(e: egret.TouchEvent): void {
            //计算手指和圆形的距离
            offsetX = e.stageX - circle.x;
            offsetY = e.stageY - circle.y;
            //手指在屏幕上移动，会触发 onMove 方法
            this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, onMove, this);
        }
        function stopMove(e: egret.TouchEvent) {
            console.log(22);
            //手指离开屏幕，移除手指移动的监听
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, onMove, this);
        }
        function onMove(e: egret.TouchEvent): void {
            //通过计算手指在屏幕上的位置，计算当前对象的坐标，达到跟随手指移动的效果
            circle.x = e.stageX - offsetX;
            circle.y = e.stageY - offsetY;
        }

    }
}