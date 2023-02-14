
import { fetchHome } from '../../services/home';

Page({
    data: {
        logs: [],
        pageLoading: true,
        searchValue: '',
        placeholderText: '',
        tabList: [],
        imgSrcs: [],
        goodsList: [],
        goodsListLoadStatus: 0,
        current: 1,
        autoplay: true,
        duration: '500',
        interval: 5000,
        navigation: { type: 'dots-bar' },
        // 没生效
        objectStyle: {
            'object-fit':'cover'
        }
    },
    onLoad() {
        this.init();
    },
    onShow() {
        this.getTabBar().init()
        // console.log('第二次')
        this.setData({
            placeholderText: 'iphone 13 火热发售中'
        })
        this.mockLoading()
    },
    // 模拟加载返回数据
    mockLoading() { 
        setTimeout(() => {
            this.setData({
                pageLoading: false
            })
        }, 5000)
        // Toast({
        //     context: this,
        //     selector: '#t-toast',
        //     message: '点击加入购物车',
        // })
    },
    // 如果正常的search会使用这种方式
    changeSearch(e: any) {
        console.log(e.detail.value)
    },
    navigateToSearch() {
        console.log('走了这里的跳转')
    },
    init() {
        this.loadHomePage()
    },
    loadHomePage() {
        wx.stopPullDownRefresh();
        this.setData({
            pageLoading: true,
        });
        fetchHome().then((res: any) => {
            console.log(res,'mock假装数据')
            this.setData({
                tabList: res.tabList,
                imgSrcs: res.swiper,
                pageLoading: false,
            });
        // this.loadGoodsList(true);
        });
    },
    navToActivityDetail() {
      console.log('跳转详细页面')  
    },
    // 切换tab下方页面
    tabChangeHandle() {

    },
})
