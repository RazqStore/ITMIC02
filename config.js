// إعدادات الدخول
// الهاش = SHA-256 لنص بهذه الصيغة:  اليوزر:كلمة_السر
// الافتراضي: اليوزر admin وكلمة السر 1234  (غيّرهم!)
// لتوليد الهاش الجديد في الطرفية:
//   printf 'اليوزر:كلمة_السر' | sha256sum
// أو من كونسول المتصفح (F12) الصق:
//   crypto.subtle.digest('SHA-256', new TextEncoder().encode('اليوزر:كلمة_السر')).then(b=>console.log([...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')))
window.AUTH_HASH = "f8e68e8d44bfb5314974a97f787d017ff6ac9d0046083f28665fcf96f0cef80c";
