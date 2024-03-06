import dayjs from 'dayjs';
import timezone  from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import weekday from 'dayjs/plugin/weekday';
import isBetween from 'dayjs/plugin/isBetween';
import calendar from 'dayjs/plugin/calendar';


export function setCommonJSGlobals() {
    let importedLibs: {[key: string]: any} = { dayjs, timezone, utc, weekday, isBetween, calendar };
    Object.keys(importedLibs).forEach((libName) => {
        // @ts-ignore
        window[libName] = importedLibs[libName];
    })
}