if (!Applycss) {
    var Applycss = {};
}

(function ($) {
    var customCssTemplate = [
        ' div#wrap {',
        '  <<global-background-color>>',
        '  <<body-text-color>>',
        '  <<body-font>>',
        '}',
        ' h1 {',
        '  <<header-text-color>>',
        '  <<header-font>>',
        '}',
        ' #site-title a {',
        '  <<title-text-color>>',
        '  <<header-font>>',
        '}',
        ' .button,  .show-advanced.button {',
        '  <<button-background-color>>',
        '  <<button-text-color>>',
        '}',
        ' a:link {',
        '  <<title-text-color>>',
        '}',
        ' a:visited {',
        '  <<link-visited-color>>',
        '}',
        ' a:hover,  a:active,  a:focus {',
        '  <<link-hover-color>>',
        '}',
        ' .top {',
        '  <<nav-background-color>>',
        '}',
        ' .top li:hover a {',
        '  <<nav-hover-color>>',
        '}',
        ' .top a:link,  .top a:visited {',
        '  <<nav-link-color>>',
        '}',
        ' .top a:focus,  .top a.open {',
        '  <<nav-hover-color>>',
        '}',
        ' .top .sub-nav {',
        '  <<button-background-color>>',
        '}',
        ' .top .sub-nav li a:link,  .top .sub-nav li a:visited {',
        '  <<title-text-color>>',
        '}',
        ' .top .sub-nav li a:active,  .top .sub-nav li a:hover,  .top .sub-nav li a:focus {',
        '  <<link-hover-color>>',
        '}',
        ' #intro {',
        '  <<header-text-color>>',
        '  <<header-font>>',
        '}',
        ' #content,',
        ' #secondary-nav .current a,',
        ' #secondary-nav a.current,',
        ' .exhibit-section-nav .current a {',
        '  <<body-background-color>>',
        '}',
        ' #advanced-form {',
        '  <<content-background-color>>',
        '  <<body-text-color>>',
        // '  border-width: 0 1px 1px 1px;',
        // '  border-style: solid;',
        '  <<content-header-border-color>>',
        '}',
        // The child selector below gets wiped out but I'm not sure
        // it has much of an effect.
        ' #home #content div {',
        '  <<content-background-color>>',
        '  <<content-border-color>>',
        '}',
        ' #home #content div .items-list .item {',
        // '  border-top: 1px solid;',
        '  <<content-header-border-color>>',
        '}',
        ' #home #content div .items-list .item:first-of-type {',
        // '  border-top: 0;',
        '}',
        ' #home #content div img,  .items.show #itemfiles a,',
        ' #home #content .item,  #home #content div .view-items-link,',
        ' .collections #content div .view-items-link {',
        '  <<content-header-border-color>>',
        '}',
        // The child selector gets wiped out
        ' #content > h1 {',
        '  <<header-text-color>>',
        '  <<header-font>>',
        '}',
        ' #content h2 {',
        '  <<content-header-border-color>>',
        '  <<header-font>>',
        '}',
        // All child selectors get wiped out.
        ' #content div,  #content #primary div,  #content #sidebar div,',
        ' #content #advanced-search-form div,  #content #exhibit-pages {',
        '  <<content-border-color>>',
        '  <<content-background-color>>',
        '}',
        // All child selectors get wiped out.
        ' #content #primary div,  #content #sidebar div,',
        ' #content .item-pagination li {',
        '  <<content-background-color>>',
        '}',
        ' #content .pagination_previous a,  #content .pagination_next a {',
        '  <<content-background-color>>',
        '}',
        ' #content .pagination_list {',
        '  <<content-background-color>>',
        '}',
        ' #content .item-img {',
        '  <<content-header-border-color>>',
        '}',
        ' #search-results th {',
        '  <<button-background-color>>',
        '  <<header-text-color>>',
        '}',
        ' #search-results td {',
        '  <<content-background-color>>',
        '}',
        ' #search-filters li,  #item-filters li {',
        '  <<button-background-color>>',
        '}',
        ' .page #content {',
        '  <<content-border-color>>',
        '}',
        ' .page #primary {',
        '  <<content-background-color>>',
        '}',
        ' .exhibit-page-nav {',
        '  <<content-background-color>>',
        '}',
        // ' .exhibit-page-nav .current,  .exhibit-child-nav .current {',
        // '  background-color: rgba(255, 255, 255, 0.1);',
        // '}',
        ' #exhibit-page-navigation a,  #exhibit-page-navigation span {',
        '  <<content-background-color>>',
        '}',
        // All the funky CSS3 stuff here gets wiped out along with
        // the child selectors, etc.
        //' .exhibits #exhibit-pages > ul > li:not(:last-of-type) {',
        ' .exhibits #exhibit-pages ul li {',
        '  <<content-header-border-color>>',
        '}',
        // ' .exhibits.show #content .exhibit-page-nav > li:nth-child(3) {',
        // '  background-color: rgba(255, 255, 255, 0.08);',
        // '}',
        //' .exhibits.tags #content p:only-of-type {',
        ' .exhibits.tags #content p {',
        '  <<content-background-color>>',
        '  <<content-border-color>>',
        '}',
        ' #content div.hTagcloud ul li {',
        '  <<content-background-color>>',
        '}',
        ' td,  th {',
        '  <<table-border-color>>',
        '}',
    ].join('\n');

    var inputIdToAttrib = {
        'title-text-color': 'color',
        'global-background-color': 'background-color',
        'header-text-color': 'color',
        'body-text-color': 'color',
        'body-background-color': 'background-color',
        'table-border-color': 'border-color',
        'content-background-color': 'background-color',
        'content-border-color': 'border-color',
        'content-header-border-color': 'border-color',
        'link-color': 'color',
        'link-hover-color': 'color',
        'link-visited-color': 'color',
        'button-background-color': 'background-color',
        'text-field-background-color': 'background-color',
        'nav-background-color': 'background-color',
        'nav-link-color': 'color',
        'nav-hover-color': 'color',
        'header-font': 'font-family',
        'body-font': 'font-family', 
        //'nav-focus-opacity': 'opacity',
        //'nav-selection-opacity': 'opacity',
    };

    function styleTag(tagId, css) {
        return '<style id="' + 
               tagId + 
               '" type="text/css">' +
               css +
               '</style>';
    }

    function wrapStyle(attrib, style, important) {
        var color = 'color';
        var end = important ? ' !important;' : ';';
        if (!style) {
            return '';
        }

        if (attrib.slice(attrib.length - color.length) === color) {
            return attrib + ': ' + '#' + style + end;
        } else {
            return attrib + ': ' + style + end;
        }
    }

    var inputIds = Object.keys(inputIdToAttrib);

    function cssRender(important) {
        var css = customCssTemplate.replace(/<<([a-z-]+)>>/g, function (match, inputId) {
            var style;
            if (!inputIdToAttrib[inputId]) {
                return '';
            }

            return wrapStyle(inputIdToAttrib[inputId], 
                             $('#' + inputId).val(), 
                             important);
        });

        return css;
    }

    function cssCallback() {
        var css = cssRender(true);
        $('#custom-style').remove();
        $('head').append(styleTag('custom-style', css));
        $('#css-container').text(css);
    }

    Applycss.colorUi = function() {
        for (var i = 0, iid; iid = inputIds[i]; i++) {
            $('input#' + iid).change(cssCallback);
        }
        cssCallback();
    };

})(jQuery);
