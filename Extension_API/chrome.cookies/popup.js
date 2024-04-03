document.addEventListener('DOMContentLoaded', () => {
    // 获取指定cookie
    const get_qt_type_element = document.querySelector(".get_qt_type")
    if (get_qt_type_element) {
        get_qt_type_element.addEventListener("click", function () {
            chrome.cookies.get({
                url: "https://www.58pic.com/",
                name: "qt_type"
            }, function (cookie) {
                console.log(cookie);
            })
        })
    }

    // 获取所有cookie
    const get_all_cookies_element = document.querySelector(".get_all_cookies")
    if (get_all_cookies_element) {
        get_all_cookies_element.addEventListener("click", function () {
            chrome.cookies.getAll({
                domain: "58pic.com"
            }, function (cookies) {
                console.log(cookies);
            })
        })
    }

    // 设置指定 cookie
    const set_cookie_element = document.querySelector(".set_cookie")
    if (set_cookie_element) {
        set_cookie_element.addEventListener("click", function () {
            chrome.cookies.set({
                url: "https://www.58pic.com/",
                name: "cookie_test_name",
                value: "我是被手动设置的cookie",
                domain: ".58pic.com",
                path: "/",
                secure: false,
                httpOnly: false,
                expirationDate: (new Date()).getTime() / 1000 + 3600
            })
        })
    }

    // 移除指定 cookie
    const remove_cookie_element = document.querySelector(".remove_cookie")
    if (remove_cookie_element) {
        remove_cookie_element.addEventListener("click", function () {
            chrome.cookies.remove({
                url: "https://www.58pic.com/",
                name: "cookie_test_name",
            })
        })
    }
})



