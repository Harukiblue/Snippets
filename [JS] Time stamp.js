function dateTimeStamp (date, fstr, utc) {
    date = (date === "" || date === null || date === undefined) ? new Date () : date;
    fstr = (fstr === "" || fstr === null || fstr === undefined) ? "%Y%m%d_%H%M%S" : fstr;
    utc = (utc === "" || utc === null || utc === undefined) ? true : utc;
    utc = utc ? 'getUTC' : 'get';
    return fstr.replace (/%[YmdHMS]/g, function (m) {
      switch (m) {
        case '%Y': return date[utc + 'FullYear'] (); // no leading zeros required
        case '%m': m = 1 + date[utc + 'Month'] (); break;
        case '%d': m = date[utc + 'Date'] (); break;
        case '%H': m = date[utc + 'Hours'] (); break;
        case '%M': m = date[utc + 'Minutes'] (); break;
        case '%S': m = date[utc + 'Seconds'] (); break;
        default: return m.slice (1); // unknown code, remove %
      }
      // add leading zero if required
      return ('0' + m).slice (-2);
    });
}
