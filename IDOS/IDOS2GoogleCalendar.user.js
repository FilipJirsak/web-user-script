// ==UserScript==
// @name         Spojení z IDOSu do Google Kalendáře
// @namespace    http://idos.cz/
// @version      1.0
// @description  try to take over the world!
// @author       Filip Jirsák
// @match        http://pid.idos.cz/spojeni/*
// @connect      self
// @grant        GM_registerMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        GM_getValue
// @grant        GM_setValue
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js
// ==/UserScript==

var CALENDAR_ID = "calendar.id";

(function() {
    'use strict';

    function datumSpojeni(text) {
        return text.replace(/(\d{1,2})\.(\d{1,2})\./, '2016$2$1');
    }

    function casSpojeni(text) {
        return text.replace(/(\d{2}):(\d{2})/, '$1$2')+'00';
    }

    function kalendarniDatum(datum, casOd, casDo) {
        return datum+'T'+casOd+'/'+datum+'T'+casDo;
    }

    function title(text) {
        return 'spojení ' + text.replace('»', '→');
    }

    function parseTime(text) {
        if (text.match(/\d{2}:\d{2}/)) {
            return text;
        }
    }

    function trimDown(text) {
        if (text) {
            text = text.trim();
            if (text) {
                return text;
            }
        }
    }
    /*
    function parseLine() {
        var prostredek = $('td:eq(6)', this);
        return {
            zastavka: trimDown($('td:eq(2)', this).text()),
            prijezd: parseTime($('td:eq(3)', this).text()),
            odjezd: parseTime($('td:eq(4)', this).text()),
            prostredek: trimDown(prostredek.text()),
            typProstredku: $('> a', prostredek).attr('title')
        };
    }
*/

    function exportCalendar(icalLink) {
        GM_xmlhttpRequest({
            method: 'GET',
            url: icalLink,
            onload: function(data) {
                var lines = data.responseText.split(/\n/);
                var ical = {};
                $.each(lines, function() {
                    var cols = this.trim().match(/(.*?):(.*)/);
                    if (cols) {
                        ical[cols[1]] = cols[2];
                    }
                });
                var params = {
                    action: 'TEMPLATE',
                    text: ical.SUMMARY.replace(/>>/, '→'),
                    details: ical.DESCRIPTION.replace(/\\n/g, '\n'),
                    dates: ical.DTSTART+'/'+ical.DTEND
                };
                var calendarId = GM_getValue(CALENDAR_ID);
                if (calendarId) {
                    params.src = calendarId;
                }

                window.open('http://www.google.com/calendar/event?' + jQuery.param(params), '_blank');
            }
        });
    }

    function createCalendarLink(node, icalLink) {
        $('p.links', node)
            .append(' | ', '<a href="#">Přidat do Google Kalendáře</a>')
            .click($.proxy(exportCalendar, undefined, icalLink));
    }

    function appendLinks() {
        $('.results').each(function() {
            var icalLink = new URL($('p.links > a:eq(6)', this).attr('href'), window.location.href);
            createCalendarLink(this, icalLink);
            /*
        var spojeni = $('tr.datarow', this).map(parseLine).get();
        var details = '';

        var params = {
            action: 'TEMPLATE',
            text: title($('#main-res-inner h1').text()),
            details: details,
            dates: kalendarniDatum(
                datumSpojeni($('tr.datarow.first td.date', node).text()),
                casSpojeni($('tr.datarow.first td:eq(4)', node).text()),
                casSpojeni($('tr.datarow:last td:eq(3)', node).text())
            )
        };

        createCalendarLink(this, params)
        */
        });
    }

    function observeChanges() {
        var parent = $('#main-res-inner')[0];
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                console.log(mutation.type);
            });
        });
        observer.observe(parent, {childList: true});
    }
//    $('.results').bind("DOMSubtreeModified", appendLinks);
    appendLinks();
})();

GM_registerMenuCommand("Zvolit uživatelský kalendář", function() {
    var calendarId = GM_getValue(CALENDAR_ID);
    if (!calendarId) {
        calendarId = "@group.calendar.google.com";
    }
    calendarId = window.prompt("Zadejte ID uživatelského Google kalendáře:", calendarId);
    if (calendarId) {
        GM_setValue(CALENDAR_ID, calendarId);
    }
});
