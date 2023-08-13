"use strict";
exports.__esModule = true;
exports.formatDate = exports.formatterMap = exports.formatterDateTime = exports.formatterTime = exports.formatterDate = exports.formatterMonth = exports.formatterYear = exports.formatterAxisDate = exports.formatterMMDD = exports.formatterHHMM = exports.oneDay = exports.oneHour = exports.oneMinute = void 0;
/**
 * @author lulongwen
 * Date: 2023-05-20 10:27
 * Description:
 */
var dayjs = require("dayjs");
exports.oneMinute = 60000;
exports.oneHour = 36;
exports.oneDay = 1;
exports.formatterHHMM = 'HH:mm';
exports.formatterMMDD = 'MM-DD';
// 格式化 echarts Axis 时间和日期换行 'HH:mm[\n]MM-DD'
exports.formatterAxisDate = "".concat(exports.formatterHHMM, "[\n]").concat(exports.formatterMMDD);
exports.formatterYear = 'YYYY';
exports.formatterMonth = "".concat(exports.formatterYear, "-MM"); // 'YYYY-MM';
exports.formatterDate = "".concat(exports.formatterYear, "-").concat(exports.formatterMMDD); // 'YYYY-MM-DD';
exports.formatterTime = "".concat(exports.formatterHHMM, ":ss");
exports.formatterDateTime = "".concat(exports.formatterDate, " ").concat(exports.formatterTime);
exports.formatterMap = {
    date: exports.formatterDate,
    time: exports.formatterTime,
    datetime: exports.formatterDateTime,
    year: exports.formatterYear,
    month: exports.formatterMonth
};
/**
 * 日期格式化
 * formatDate('2023-05-20T03:16:22.304Z', 'datetime')
 * formatDate('2023-05-20T03:16:22.304Z', '')
 * @param date
 * @param formatter
 */
function formatDate(date, formatter) {
    if (formatter === void 0) { formatter = 'datetime'; }
    if (!dayjs(date).isValid()) {
        throw new Error("".concat(date, " Invalid date"));
    }
    var _format = exports.formatterMap[formatter];
    return dayjs(date).format(_format);
}
exports.formatDate = formatDate;
Object.keys(exports.formatterMap).forEach(function (key) {
    formatDate[key] = exports.formatterMap[key];
});
console.log(Object.keys(exports.formatterMap));
// formatDate.datetime = formatterDateTime
// formatDate.date = formatterDate
// formatDate.time = formatterTime
// formatDate.month = formatterMonth
// formatDate.year = formatterYear
// formatDate.axisDate = formatterAxisDate
// formatDate.oneMinute = oneMinute
