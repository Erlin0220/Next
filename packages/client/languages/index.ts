import lodash from 'lodash';
import en from './en';
import zh from './zh';
export * from './enumLocale';
/**
 * 默认语音包
 */
export const defaultLocales = {
    'zh': lodash.merge({}, zh),
    'en': lodash.merge({}, en),
};
/**
 *  语音包扩展
 */
export default (locales?: { 'zh'?: any, 'en'?: any }) => {
    return lodash.merge(lodash.cloneDeep(defaultLocales), locales)
}