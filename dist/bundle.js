function t(e) {
    return (
        (t =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          'function' == typeof Symbol &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        t(e)
    );
}
function e(t, e) {
    if (e.length < t)
        throw new TypeError(
            t +
                ' argument' +
                (t > 1 ? 's' : '') +
                ' required, but only ' +
                e.length +
                ' present'
        );
}
function n(n) {
    e(1, arguments);
    var a = Object.prototype.toString.call(n);
    return n instanceof Date || ('object' === t(n) && '[object Date]' === a)
        ? new Date(n.getTime())
        : 'number' == typeof n || '[object Number]' === a
        ? new Date(n)
        : (('string' != typeof n && '[object String]' !== a) ||
              'undefined' == typeof console ||
              (console.warn(
                  "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"
              ),
              console.warn(new Error().stack)),
          new Date(NaN));
}
var a = {};
function r() {
    return a;
}
function o(t) {
    var e = new Date(
        Date.UTC(
            t.getFullYear(),
            t.getMonth(),
            t.getDate(),
            t.getHours(),
            t.getMinutes(),
            t.getSeconds(),
            t.getMilliseconds()
        )
    );
    return e.setUTCFullYear(t.getFullYear()), t.getTime() - e.getTime();
}
function i(t, a) {
    e(2, arguments);
    var r = n(t),
        o = n(a),
        i = r.getTime() - o.getTime();
    return i < 0 ? -1 : i > 0 ? 1 : i;
}
var u = {
        ceil: Math.ceil,
        round: Math.round,
        floor: Math.floor,
        trunc: function (t) {
            return t < 0 ? Math.ceil(t) : Math.floor(t);
        }
    },
    s = 'trunc';
function l(t) {
    e(1, arguments);
    var a = n(t);
    return (
        (function (t) {
            e(1, arguments);
            var a = n(t);
            return a.setHours(23, 59, 59, 999), a;
        })(a).getTime() ===
        (function (t) {
            e(1, arguments);
            var a = n(t),
                r = a.getMonth();
            return (
                a.setFullYear(a.getFullYear(), r + 1, 0),
                a.setHours(23, 59, 59, 999),
                a
            );
        })(a).getTime()
    );
}
function d(t, a) {
    e(2, arguments);
    var r,
        o = n(t),
        u = n(a),
        s = i(o, u),
        d = Math.abs(
            (function (t, a) {
                e(2, arguments);
                var r = n(t),
                    o = n(a);
                return (
                    12 * (r.getFullYear() - o.getFullYear()) +
                    (r.getMonth() - o.getMonth())
                );
            })(o, u)
        );
    if (d < 1) r = 0;
    else {
        1 === o.getMonth() && o.getDate() > 27 && o.setDate(30),
            o.setMonth(o.getMonth() - s * d);
        var h = i(o, u) === -s;
        l(n(t)) && 1 === d && 1 === i(t, u) && (h = !1),
            (r = s * (d - Number(h)));
    }
    return 0 === r ? 0 : r;
}
function h(t, a, r) {
    e(2, arguments);
    var o,
        i =
            (function (t, a) {
                return e(2, arguments), n(t).getTime() - n(a).getTime();
            })(t, a) / 1e3;
    return ((o = null == r ? void 0 : r.roundingMethod) ? u[o] : u[s])(i);
}
var m = {
        lessThanXSeconds: {
            one: 'less than a second',
            other: 'less than {{count}} seconds'
        },
        xSeconds: { one: '1 second', other: '{{count}} seconds' },
        halfAMinute: 'half a minute',
        lessThanXMinutes: {
            one: 'less than a minute',
            other: 'less than {{count}} minutes'
        },
        xMinutes: { one: '1 minute', other: '{{count}} minutes' },
        aboutXHours: { one: 'about 1 hour', other: 'about {{count}} hours' },
        xHours: { one: '1 hour', other: '{{count}} hours' },
        xDays: { one: '1 day', other: '{{count}} days' },
        aboutXWeeks: { one: 'about 1 week', other: 'about {{count}} weeks' },
        xWeeks: { one: '1 week', other: '{{count}} weeks' },
        aboutXMonths: { one: 'about 1 month', other: 'about {{count}} months' },
        xMonths: { one: '1 month', other: '{{count}} months' },
        aboutXYears: { one: 'about 1 year', other: 'about {{count}} years' },
        xYears: { one: '1 year', other: '{{count}} years' },
        overXYears: { one: 'over 1 year', other: 'over {{count}} years' },
        almostXYears: { one: 'almost 1 year', other: 'almost {{count}} years' }
    },
    c = function (t, e, n) {
        var a,
            r = m[t];
        return (
            (a =
                'string' == typeof r
                    ? r
                    : 1 === e
                    ? r.one
                    : r.other.replace('{{count}}', e.toString())),
            null != n && n.addSuffix
                ? n.comparison && n.comparison > 0
                    ? 'in ' + a
                    : a + ' ago'
                : a
        );
    };
function f(t) {
    return function () {
        var e =
                arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
            n = e.width ? String(e.width) : t.defaultWidth;
        return t.formats[n] || t.formats[t.defaultWidth];
    };
}
var g = {
        date: f({
            formats: {
                full: 'EEEE, MMMM do, y',
                long: 'MMMM do, y',
                medium: 'MMM d, y',
                short: 'MM/dd/yyyy'
            },
            defaultWidth: 'full'
        }),
        time: f({
            formats: {
                full: 'h:mm:ss a zzzz',
                long: 'h:mm:ss a z',
                medium: 'h:mm:ss a',
                short: 'h:mm a'
            },
            defaultWidth: 'full'
        }),
        dateTime: f({
            formats: {
                full: "{{date}} 'at' {{time}}",
                long: "{{date}} 'at' {{time}}",
                medium: '{{date}}, {{time}}',
                short: '{{date}}, {{time}}'
            },
            defaultWidth: 'full'
        })
    },
    v = {
        lastWeek: "'last' eeee 'at' p",
        yesterday: "'yesterday at' p",
        today: "'today at' p",
        tomorrow: "'tomorrow at' p",
        nextWeek: "eeee 'at' p",
        other: 'P'
    };
function y(t) {
    return function (e, n) {
        var a;
        if (
            'formatting' ===
                (null != n && n.context ? String(n.context) : 'standalone') &&
            t.formattingValues
        ) {
            var r = t.defaultFormattingWidth || t.defaultWidth,
                o = null != n && n.width ? String(n.width) : r;
            a = t.formattingValues[o] || t.formattingValues[r];
        } else {
            var i = t.defaultWidth,
                u = null != n && n.width ? String(n.width) : t.defaultWidth;
            a = t.values[u] || t.values[i];
        }
        return a[t.argumentCallback ? t.argumentCallback(e) : e];
    };
}
function b(t) {
    return function (e) {
        var n =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
            a = n.width,
            r =
                (a && t.matchPatterns[a]) ||
                t.matchPatterns[t.defaultMatchWidth],
            o = e.match(r);
        if (!o) return null;
        var i,
            u = o[0],
            s =
                (a && t.parsePatterns[a]) ||
                t.parsePatterns[t.defaultParseWidth],
            l = Array.isArray(s)
                ? (function (t, e) {
                      for (var n = 0; n < t.length; n++) if (e(t[n])) return n;
                      return;
                  })(s, function (t) {
                      return t.test(u);
                  })
                : (function (t, e) {
                      for (var n in t)
                          if (t.hasOwnProperty(n) && e(t[n])) return n;
                      return;
                  })(s, function (t) {
                      return t.test(u);
                  });
        return (
            (i = t.valueCallback ? t.valueCallback(l) : l),
            {
                value: (i = n.valueCallback ? n.valueCallback(i) : i),
                rest: e.slice(u.length)
            }
        );
    };
}
var p,
    w = {
        code: 'en-US',
        formatDistance: c,
        formatLong: g,
        formatRelative: function (t, e, n, a) {
            return v[t];
        },
        localize: {
            ordinalNumber: function (t, e) {
                var n = Number(t),
                    a = n % 100;
                if (a > 20 || a < 10)
                    switch (a % 10) {
                        case 1:
                            return n + 'st';
                        case 2:
                            return n + 'nd';
                        case 3:
                            return n + 'rd';
                    }
                return n + 'th';
            },
            era: y({
                values: {
                    narrow: ['B', 'A'],
                    abbreviated: ['BC', 'AD'],
                    wide: ['Before Christ', 'Anno Domini']
                },
                defaultWidth: 'wide'
            }),
            quarter: y({
                values: {
                    narrow: ['1', '2', '3', '4'],
                    abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
                    wide: [
                        '1st quarter',
                        '2nd quarter',
                        '3rd quarter',
                        '4th quarter'
                    ]
                },
                defaultWidth: 'wide',
                argumentCallback: function (t) {
                    return t - 1;
                }
            }),
            month: y({
                values: {
                    narrow: [
                        'J',
                        'F',
                        'M',
                        'A',
                        'M',
                        'J',
                        'J',
                        'A',
                        'S',
                        'O',
                        'N',
                        'D'
                    ],
                    abbreviated: [
                        'Jan',
                        'Feb',
                        'Mar',
                        'Apr',
                        'May',
                        'Jun',
                        'Jul',
                        'Aug',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dec'
                    ],
                    wide: [
                        'January',
                        'February',
                        'March',
                        'April',
                        'May',
                        'June',
                        'July',
                        'August',
                        'September',
                        'October',
                        'November',
                        'December'
                    ]
                },
                defaultWidth: 'wide'
            }),
            day: y({
                values: {
                    narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                    short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                    abbreviated: [
                        'Sun',
                        'Mon',
                        'Tue',
                        'Wed',
                        'Thu',
                        'Fri',
                        'Sat'
                    ],
                    wide: [
                        'Sunday',
                        'Monday',
                        'Tuesday',
                        'Wednesday',
                        'Thursday',
                        'Friday',
                        'Saturday'
                    ]
                },
                defaultWidth: 'wide'
            }),
            dayPeriod: y({
                values: {
                    narrow: {
                        am: 'a',
                        pm: 'p',
                        midnight: 'mi',
                        noon: 'n',
                        morning: 'morning',
                        afternoon: 'afternoon',
                        evening: 'evening',
                        night: 'night'
                    },
                    abbreviated: {
                        am: 'AM',
                        pm: 'PM',
                        midnight: 'midnight',
                        noon: 'noon',
                        morning: 'morning',
                        afternoon: 'afternoon',
                        evening: 'evening',
                        night: 'night'
                    },
                    wide: {
                        am: 'a.m.',
                        pm: 'p.m.',
                        midnight: 'midnight',
                        noon: 'noon',
                        morning: 'morning',
                        afternoon: 'afternoon',
                        evening: 'evening',
                        night: 'night'
                    }
                },
                defaultWidth: 'wide',
                formattingValues: {
                    narrow: {
                        am: 'a',
                        pm: 'p',
                        midnight: 'mi',
                        noon: 'n',
                        morning: 'in the morning',
                        afternoon: 'in the afternoon',
                        evening: 'in the evening',
                        night: 'at night'
                    },
                    abbreviated: {
                        am: 'AM',
                        pm: 'PM',
                        midnight: 'midnight',
                        noon: 'noon',
                        morning: 'in the morning',
                        afternoon: 'in the afternoon',
                        evening: 'in the evening',
                        night: 'at night'
                    },
                    wide: {
                        am: 'a.m.',
                        pm: 'p.m.',
                        midnight: 'midnight',
                        noon: 'noon',
                        morning: 'in the morning',
                        afternoon: 'in the afternoon',
                        evening: 'in the evening',
                        night: 'at night'
                    }
                },
                defaultFormattingWidth: 'wide'
            })
        },
        match: {
            ordinalNumber:
                ((p = {
                    matchPattern: /^(\d+)(th|st|nd|rd)?/i,
                    parsePattern: /\d+/i,
                    valueCallback: function (t) {
                        return parseInt(t, 10);
                    }
                }),
                function (t) {
                    var e =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {},
                        n = t.match(p.matchPattern);
                    if (!n) return null;
                    var a = n[0],
                        r = t.match(p.parsePattern);
                    if (!r) return null;
                    var o = p.valueCallback ? p.valueCallback(r[0]) : r[0];
                    return {
                        value: (o = e.valueCallback ? e.valueCallback(o) : o),
                        rest: t.slice(a.length)
                    };
                }),
            era: b({
                matchPatterns: {
                    narrow: /^(b|a)/i,
                    abbreviated:
                        /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
                    wide: /^(before christ|before common era|anno domini|common era)/i
                },
                defaultMatchWidth: 'wide',
                parsePatterns: { any: [/^b/i, /^(a|c)/i] },
                defaultParseWidth: 'any'
            }),
            quarter: b({
                matchPatterns: {
                    narrow: /^[1234]/i,
                    abbreviated: /^q[1234]/i,
                    wide: /^[1234](th|st|nd|rd)? quarter/i
                },
                defaultMatchWidth: 'wide',
                parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
                defaultParseWidth: 'any',
                valueCallback: function (t) {
                    return t + 1;
                }
            }),
            month: b({
                matchPatterns: {
                    narrow: /^[jfmasond]/i,
                    abbreviated:
                        /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
                    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
                },
                defaultMatchWidth: 'wide',
                parsePatterns: {
                    narrow: [
                        /^j/i,
                        /^f/i,
                        /^m/i,
                        /^a/i,
                        /^m/i,
                        /^j/i,
                        /^j/i,
                        /^a/i,
                        /^s/i,
                        /^o/i,
                        /^n/i,
                        /^d/i
                    ],
                    any: [
                        /^ja/i,
                        /^f/i,
                        /^mar/i,
                        /^ap/i,
                        /^may/i,
                        /^jun/i,
                        /^jul/i,
                        /^au/i,
                        /^s/i,
                        /^o/i,
                        /^n/i,
                        /^d/i
                    ]
                },
                defaultParseWidth: 'any'
            }),
            day: b({
                matchPatterns: {
                    narrow: /^[smtwf]/i,
                    short: /^(su|mo|tu|we|th|fr|sa)/i,
                    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
                    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
                },
                defaultMatchWidth: 'wide',
                parsePatterns: {
                    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
                    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
                },
                defaultParseWidth: 'any'
            }),
            dayPeriod: b({
                matchPatterns: {
                    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
                    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
                },
                defaultMatchWidth: 'any',
                parsePatterns: {
                    any: {
                        am: /^a/i,
                        pm: /^p/i,
                        midnight: /^mi/i,
                        noon: /^no/i,
                        morning: /morning/i,
                        afternoon: /afternoon/i,
                        evening: /evening/i,
                        night: /night/i
                    }
                },
                defaultParseWidth: 'any'
            })
        },
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 }
    };
function M(t, e) {
    if (null == t)
        throw new TypeError(
            'assign requires that input parameter not be null or undefined'
        );
    for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t;
}
var D = 1440,
    S = 2520,
    W = 43200,
    P = 86400;
function T(t, a, u) {
    var s, l;
    e(2, arguments);
    var m = r(),
        c =
            null !==
                (s =
                    null !== (l = null == u ? void 0 : u.locale) && void 0 !== l
                        ? l
                        : m.locale) && void 0 !== s
                ? s
                : w;
    if (!c.formatDistance)
        throw new RangeError('locale must contain formatDistance property');
    var f = i(t, a);
    if (isNaN(f)) throw new RangeError('Invalid time value');
    var g,
        v,
        y = M(M({}, u), {
            addSuffix: Boolean(null == u ? void 0 : u.addSuffix),
            comparison: f
        });
    f > 0 ? ((g = n(a)), (v = n(t))) : ((g = n(t)), (v = n(a)));
    var b,
        p = h(v, g),
        T = (o(v) - o(g)) / 1e3,
        k = Math.round((p - T) / 60);
    if (k < 2)
        return null != u && u.includeSeconds
            ? p < 5
                ? c.formatDistance('lessThanXSeconds', 5, y)
                : p < 10
                ? c.formatDistance('lessThanXSeconds', 10, y)
                : p < 20
                ? c.formatDistance('lessThanXSeconds', 20, y)
                : p < 40
                ? c.formatDistance('halfAMinute', 0, y)
                : p < 60
                ? c.formatDistance('lessThanXMinutes', 1, y)
                : c.formatDistance('xMinutes', 1, y)
            : 0 === k
            ? c.formatDistance('lessThanXMinutes', 1, y)
            : c.formatDistance('xMinutes', k, y);
    if (k < 45) return c.formatDistance('xMinutes', k, y);
    if (k < 90) return c.formatDistance('aboutXHours', 1, y);
    if (k < D) {
        var x = Math.round(k / 60);
        return c.formatDistance('aboutXHours', x, y);
    }
    if (k < S) return c.formatDistance('xDays', 1, y);
    if (k < W) {
        var C = Math.round(k / D);
        return c.formatDistance('xDays', C, y);
    }
    if (k < P)
        return (b = Math.round(k / W)), c.formatDistance('aboutXMonths', b, y);
    if ((b = d(v, g)) < 12) {
        var j = Math.round(k / W);
        return c.formatDistance('xMonths', j, y);
    }
    var X = b % 12,
        F = Math.floor(b / 12);
    return X < 3
        ? c.formatDistance('aboutXYears', F, y)
        : X < 9
        ? c.formatDistance('overXYears', F, y)
        : c.formatDistance('almostXYears', F + 1, y);
}
const k = (t) => {
    const n = document.querySelector('.comic-image'),
        a = document.querySelector('.comic-title'),
        r = document.querySelector('.comic-date'),
        o = document.querySelector('.comic-ago');
    if (n && a && r) {
        (n.src = t.img),
            (n.alt = t.alt),
            (a.textContent = t.safe_title),
            (r.textContent = new Date(
                t.year,
                t.month - 1,
                t.day
            ).toLocaleDateString());
        const i = new Date(t.year, t.month - 1, t.day);
        o &&
            (o.textContent =
                (function (t, n) {
                    return e(1, arguments), T(t, Date.now(), n);
                })(i) + ' ago');
    }
};
((t) =>
    fetch(`https://fwd.innopolis.app/api/hw2?email=${t}`)
        .then((t) => t.text())
        .then((t) => t)
        .catch((t) => {
            throw t;
        }))('d.prostiruk@innopolis.university')
    .then((t) =>
        ((t) =>
            fetch(`https://fwd.innopolis.university/api/comic?id=${t}`)
                .then((t) => t.json())
                .then((t) => t)
                .catch((t) => {
                    throw t;
                }))(t)
    )
    .then((t) => k(t))
    .catch((t) =>
        ((t) => {
            console.error(t);
        })(t)
    );
