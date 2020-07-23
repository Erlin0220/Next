import { Context } from "@nuxt/types";
import { message } from "ant-design-vue";
export default function (context: Context) {
    // console.log("LENG: context", context)
    if (context.route.fullPath === '/') {
        return
    }
    if (context.route.fullPath === '/my') {
        message.success({ content: '请登录' })
        return context.redirect('/')
    }
}