import zh_CN from './zh_CN'
import en from './en'
let dict = {
  zh_CN: zh_CN,
  en:en
}

export default {
  aria: true,
  classNames: {},
  classes: false,
  delay: 0,
  dictionary: dict,
  errorBagName: 'errors', // change if property conflicts
  events: 'input|blur',
  fieldsBagName: 'fields',
  i18n: null, // the vue-i18n plugin instance
  i18nRootKey: 'validations', // the nested key under which the validation messsages will be located
  inject: true,
  locale: 'zh_CN',
  strict: true,
  validity: false,
}