import TabMenu from './data';
Component({
  data: {
    active: 0,
    list: TabMenu,
  },

    methods: {
      /**
       * 注意：自定义tab-bar的跳转等内容，除了在自定义的地方要注册跳转外，还需要在各个路由页面接收，在onShow里进行调用
       */
      onChange(event: any) {
        this.setData({ active: event.detail.value });
        wx.switchTab({
            url: this.data.list[event.detail.value].url.startsWith('/')
              ? this.data.list[event.detail.value].url
              : `/${this.data.list[event.detail.value].url}`,
          });
    },

    init() {
        const page = getCurrentPages().pop();
        const route = page ? page.route.split('?')[0] : '';
        const active = this.data.list.findIndex(
            (item) => (item.url.startsWith('/') ? item.url.substr(1) : item.url) === `${route}`,
        );
        this.setData({ active });
    },
  },
});
