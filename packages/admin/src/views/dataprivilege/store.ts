import { EntitiesPageStore } from '@leng/public/src';
import lodash from 'lodash';
export class PageStore extends EntitiesPageStore {
    constructor() {
        super({
            // target: 'https://www.baidu.com/',
            Search: { url: '/api/_dataprivilege/Search', },
            Details: { url: '/api/_dataprivilege/get' },
            Insert: { url: '/api/_dataprivilege/Add' },
            Update: { url: '/api/_dataprivilege/Edit' },
            Delete: { url: '/api/_dataprivilege/BatchDelete' },
            Export: { url: '/api/_dataprivilege/ExportExcel' },
            ExportByIds: { url: '/api/_dataprivilege/ExportExcelByIds' },
            Template: { url: '/api/_dataprivilege/GetExcelTemplate', },
            Import: { url: '/api/_dataprivilege/Import', },
        });
        /**
         * 创建订阅事件处理 不使用  EventSubject 处理事件 直接调用函数执行。 EventSubject 只是方便集中处理 逻辑 
         * 默认只处理 内置 事件 'onSearch', 'onDetails', 'onDelete', 'onInsert', 'onUpdate', 'onImport', 'onExport'
         * @memberof PageStore
         */
        this.onCreateSubscribe();
    }
}
export default PageStore