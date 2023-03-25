exports.prettyUrl = (title, city) =>  {
    url = '';
    try {
        url = title.replace(/[\s\f\n\t\r\v]+/g, '-');  
        url = url.toLowerCase();               
    } catch {

    }
    return url;
}