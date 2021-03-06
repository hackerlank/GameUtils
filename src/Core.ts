/**
 * Created by Ace.C on 2016/4/15.
 */
class Core {

    //客户端地址
    static clientUrl: string = "http://mj.h5sd.com/gm/index.html";
    //服务器地址
    // static serverUrl: string = "http://192.168.2.88:8880/CardRoomManager";
    static serverUrl: string = "http://121.42.209.249";
    //每页显示长度
    static pageLength: number = 40;
    //手机验证码重置时间
    static PhoneCodeReTime: number = 60;
    //GM登录验证
    static GmCode = "cLGGRh2b4sMeRy";
    //公告1(转账)
    static Notice01: string = "http://119.29.75.66:9001/cardroom/notice.php?t=1";
    //公告2(代理)
    static Notice02: string = "http://119.29.75.66:9001/cardroom/notice.php?t=2";

    //gm登录
    static gm: any = "";
    //登录公众号appid
    static appid: string = "wxb6349744356b5312";
    //登录公众号登录code
    static code: any = "";
    //支付公众号appid
    static appid_p: string = "wx39cf3f150220635d";
    //支付公众号支付code
    static code_p: any = "";
    //服务器分配id
    static sessionid: any;
    //语言
    static language: Language = Language.ch;
    //登录类型
    static loginType: string = "h5";
    // static loginType:string = "app";

    //游戏列表
    static gameList: string[] = [];
    //舞台
    static stage: egret.Stage;
    //游戏管理
    static gameManager: GameManager;
    //是否可以播放音乐
    static isBackgroundMusic: boolean = true;
    //是否可以播放音效
    static isSoundEffect: boolean = true;

    //初始化
    static init(stage: egret.Stage): void {
        Game.stage = stage;

        Core.stage = stage;

        Core.gameManager = GameManager.getInstance();
        Core.gameManager.initLayer();
        Core.gameManager.initManager();
    }
}