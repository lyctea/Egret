class GridSprite extends egret.Sprite
{
    public constructor()
    {
        super();
        this.drawGrid();
    }
    private drawGrid()
    {
        //绘制一个红蓝相间的方块
    /*    this.graphics.beginFill( 0x0000ff );
        this.graphics.drawRect( 0, 0, 50,50 );
        this.graphics.endFill();
        this.graphics.beginFill( 0x0000ff );
        this.graphics.drawRect( 50, 50, 50, 50);
        this.graphics.endFill();
        this.graphics.beginFill( 0xff0000 );
        this.graphics.drawRect( 50, 0, 50,50 );
        this.graphics.endFill();
        this.graphics.beginFill( 0xff0000 );
        this.graphics.drawRect( 0, 50, 50,50 );
        this.graphics.endFill();    */

        //绘制一个绿色的矢量图
        var spr:egret.Sprite = new egret.Sprite()
        spr.graphics.beginFill(0x00ff00)
        spr.graphics.drawRect(0,0,100,100)
        spr.graphics.endFill()

        this.addChild(spr)     //添加显示对象
        //this.removeChild(spr)  删除显示对象

        if (spr.parent) {       //被删除的显示对象必须存在于容器对象当中。
            spr.parent.removeChild(spr);
        }
    }
}