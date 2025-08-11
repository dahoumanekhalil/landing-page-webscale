function doPost(e) {
const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
const data = e.parameter;

// إضافة البيانات إلى الشيت
sheet.appendRow([
data.name,
data.email,
data.phone,
data.company,
data.role,
data.message,
new Date()
]);

// إرسال بريد تأكيد للمشارك
if (data.email) {
MailApp.sendEmail({
to: data.email,
subject: "✅ تأكيد تسجيلك في ملتقى WEBSCALE",
htmlBody: `        <p>مرحبًا ${data.name}،</p>
        <p>نشكر لك تسجيلك في ملتقى <strong>WEBSCALE</strong>.</p>
        <p>📅 سنوافيك بكافة التفاصيل قريبًا.</p>
        <p>مع تحيات فريق WEBSCALE</p>
     `
});
}

// رد على الطلب
return ContentService.createTextOutput(
JSON.stringify({ status: "success", message: "تم التسجيل بنجاح" })
).setMimeType(ContentService.MimeType.JSON);
}
