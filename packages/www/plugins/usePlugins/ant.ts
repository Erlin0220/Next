import {Breadcrumb, Affix,Row,Col,Pagination, Avatar, BackTop, Button, Card, Descriptions, Divider, Dropdown, FormModel, Icon, Input, Layout, List, Menu, message, Modal, notification, Popconfirm, Skeleton, Spin, Tabs } from 'ant-design-vue';
import Base from 'ant-design-vue/lib/base';
import Vue from 'vue';
Vue.use(Base)
Vue.use(FormModel)
Vue.use(Affix)
Vue.use(Layout)
Vue.use(Menu)
Vue.use(Tabs)
Vue.use(Button)
Vue.use(Modal)
Vue.use(Icon)
Vue.use(Spin)
Vue.use(BackTop)
Vue.use(Divider)
Vue.use(Popconfirm)
Vue.use(Avatar)
Vue.use(Input)
Vue.use(List)
Vue.use(Dropdown)
Vue.use(Descriptions)
Vue.use(Skeleton)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Pagination)
Vue.use(Breadcrumb)

// Vue.use(Antd)
Vue.prototype.$message = message;
Vue.prototype.$notification = notification;
Vue.prototype.$info = Modal.info;
Vue.prototype.$success = Modal.success;
Vue.prototype.$error = Modal.error;
Vue.prototype.$warning = Modal.warning;
Vue.prototype.$confirm = Modal.confirm;
Vue.prototype.$destroyAll = Modal.destroyAll;