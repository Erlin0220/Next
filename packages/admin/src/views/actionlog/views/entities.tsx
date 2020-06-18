﻿import Request from '@leng/public/src/utils/request';
import lodash from 'lodash';
import { CreateElement } from 'vue';
import { EntitiesItems } from 'components/pages/type';


/**
 * label  标识
 * rules   校验规则，参考下方文档  https://ant.design/components/form-cn/#components-form-demo-validate-other
 * children  表单组件
 * 验证消息 https://github.com/yiminghe/async-validator#messages
 */
export default {
    /**
     * 表单模型 
     * @param props 
     */
    editEntities(props?): EntitiesItems {
        return {
            /** 模块 */
            "Entity.ModuleName": {
                label: "模块",
                options: {
                },
                children: `<a-input v-decorator />`
            },
            /** 动作 */
            "Entity.ActionName": {
                label: "动作",
                options: {
                },
                children: `<a-input v-decorator />`
            },
            /** ITCode */
            "Entity.ITCode": {
                label: "ITCode",
                options: {
                },
                children: `<a-input v-decorator />`
            },
            /** Url */
            "Entity.ActionUrl": {
                label: "Url",
                options: {
                },
                children: `<a-input v-decorator />`
            },
            /** 操作时间 */
            "Entity.ActionTime": {
                label: "操作时间",
                options: {
                },
                children: `<a-input v-decorator />`
            },
            /** 时长 */
            "Entity.Duration": {
                label: "时长",
                options: {
                },
                children: `<a-input v-decorator />`
            },
            /** 备注 */
            "Entity.Remark": {
                label: "备注",
                options: {
                },
                children: `<a-input v-decorator />`
            },
            /** IP */
            "Entity.IP": {
                label: "IP",
                options: {
                },
                children: `<a-input v-decorator />`
            },
            /** 类型 */
            "Entity.LogType": {
                label: "类型",
                options: {
                },
                children: `<a-input v-decorator />`
            }
        }
    },
    /**
     * 搜索 模型 
     * @param props 
     */
    filterEntities(props?, h?: CreateElement): EntitiesItems {
        return {
            /** 账号 */
            "ITCode": {
                label: "ITCode",
                options: {
                },
                children: `<a-input v-decorator />`
            },
            /** Url */
            "ActionUrl": {
                label: 'Url',
                children: `<a-input v-decorator />`
            },
            /** 操作时间 */
            "ActionTime": {
                label: '操作时间',
                children: `<a-date-picker v-decorator />`
            },
            /** IP */
            "IP": {
                label: 'IP',
                children: `<a-input v-decorator />`
            },
            /** LogType */
            "LogType": {
                label: "类型",
                dataSource: [
                    { label: "普通", value: 0 },
                    { label: "异常", value: 1 },
                    { label: "调试", value: 2 }
                ],
                children: `<a-select v-decorator mode="multiple" />`
            },
        }
    },
}