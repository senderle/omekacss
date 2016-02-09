if (!Applycss) {
    var Applycss = {};
}

(function ($) {
    var customCssTemplate = [
        '<style id="<<custom-style-tag-id>>" type="text/css">',
        '    body, #content {',
        '      <<body-color>>',
        '      <<body-background-color>>',
        '    }',
        '    h1,  #site-title a {',
        '      <<title-color>>',
        '    }',
        '    input[type=submit],  button,  .button,  .show-advanced.button {',
        '      <<button-background-color>>',
        '    }',
        '     input[type=text],  input[type=password],  textarea {',
        '      <<text-field-background-color>>',
        '    }',
        '     a:link {',
        '      <<link-color>>',
        '    }',
        '     a:visited {',
        '      <<link-visited-color>>',
        '    }',
        '     a:hover,  a:active,  a:focus {',
        '      <<link-hover-color>>',
        '    }',
        '     header {',
        '      <<title-background-color>>',
        '    }',
        '     nav.top {',
        '      <<nav-background-color>>',
        '    }',
        '     nav.top li:hover a {',
        '      <<text-focus-color>>',
        '    }',
        '     nav.top a:link,  nav.top a:visited {',
        '      <<ui-link-color>>',
        '    }',
        '     nav.top a:active,  nav.top a:hover,  nav.top a:focus,  nav.top a.open {',
        '      <<text-focus-color>>',
        '    }',
        '     nav.top .sub-nav {',
        '      <<subnav-background-color>>',
        '    }',
        '     nav.top .sub-nav li > a:link,  nav.top .sub-nav li > a:visited,  nav.top .sub-nav li > a:active,  nav.top .sub-nav li > a:hover,  nav.top .sub-nav li > a:focus {',
        '      <<text-focus-color>>',
        '    }',
        '     nav.top .sub-nav li a:focus,  nav.top .sub-nav li a:hover {',
//        '      <<nav-focus-opacity>>',
        '    }',
        '     #intro {',
        '      <<text-focus-color>>',
        '    }',
        '     #secondary-nav .current a,',
        '     #secondary-nav a.current,',
        '     .secondary-nav .current a,',
        '     .secondary-nav a.current,',
        '     .exhibit-section-nav .current a {',
        '      <<content-background-color>>',
        '    }',
        '     #home #content > div {',
        '      <<content-border-color>>',
        '    }',
        '     #content > h1 {',
        '      <<text-focus-color>>',
        '    }',
        '     #content h2 {',
        '      <<content-header-border-color>>',
        '    }',
        '     #content div {',
        '      <<content-background-color>>',
        '    }',
        '     #content > div,  #content #primary > div,  #content #sidebar > div,',
        '     #content #advanced-search-form > div,  #content #exhibit-pages {',
        '      <<content-background-color>>',
        '      <<content-border-color>>',
        '    }',
        '     #content #primary > div,  #content #sidebar > div {',
        '      <<content-background-color>>',
        '    }',
        '     #content .pagination_previous a,  #content .pagination_next a {',
        '      <<button-background-color>>',
        '    }',
        '     #content .pagination {',
        '      <<text-focus-color>>',
        '    }',
        '     #content .pagination a:link,  #content .pagination a:visited {',
        '      <<ui-link-color>>',
        '    }',
        '     #content .pagination a:hover,  #content .pagination a:active {',
        '      <<text-focus-color>>',
        '    }',
        '     #content .pagination input[type=text] {',
        '      <<content-header-border-color>>',
        '      <<content-background-color>>',
        '    }',
        '     #content nav .pagination_list {',
        '      <<nav-background-color>>',
        '    }',
        '     #content .items-nav,  #content .secondary-nav,  #content #secondary-nav,  #content #outputs,  #content #exhibit-child-pages {',
        '      <<text-focus-color>>',
        '    }',
        '     #content .items-nav a:link,  #content .items-nav a:visited,  #content .secondary-nav a:link,  #content .secondary-nav a:visited,  #content #secondary-nav a:link,  #content #secondary-nav a:visited,  #content #outputs a:link,  #content #outputs a:visited,  #content #exhibit-child-pages a:link,  #content #exhibit-child-pages a:visited {',
        '      <<ui-link-color>>',
        '    }',
        '     #content .items-nav a:hover,  #content .items-nav a:active,  #content .secondary-nav a:hover,  #content .secondary-nav a:active,  #content #secondary-nav a:hover,  #content #secondary-nav a:active,  #content #outputs a:hover,  #content #outputs a:active,  #content #exhibit-child-pages a:hover,  #content #exhibit-child-pages a:active {',
        '      <<text-focus-color>>',
        '    }',
        '     #content .item-img {',
        '      <<content-header-border-color>>',
        '    }',
        '     #search-results th {',
        '      <<button-background-color>>',
        '    }',
        '     #search-filters li,  #item-filters li {',
        '      <<filter-background-color>>',
        '    }',
        '     .page #content {',
        '      <<content-border-color>>',
        '    }',
        '     footer {',
        '      <<content-background-color>>',
        '    }',
        '     footer p {',
        '      <<text-focus-color>>',
        '    }',
        '     .exhibit-page-nav {',
        '      <<button-background-color>>',
        '    }',
        '     .exhibit-page-nav .current,  .exhibit-child-nav .current {',
//        '      <<nav-selection-opacity>>',
        '    }',
        '     .exhibit-page-nav a:link,  .exhibit-page-nav a:visited {',
        '      <<ui-link-color>>',
        '    }',
        '     .exhibit-page-nav a:hover,  .exhibit-page-nav a:active {',
        '      <<text-focus-color>>',
        '    }',
        '     #exhibit-page-navigation a,  #exhibit-page-navigation span {',
        '      <<content-background-color>>',
        '    }',
        '</style>',
    ].join('\n');

    var inputIdToAttrib = {
        'body-background-color': 'background-color',
        'body-color': 'color',
        'button-background-color': 'background-color',
        'content-background-color': 'background-color',
        'content-border-color': 'border-color',
        'content-header-border-color': 'border-color',
        'filter-background-color': 'background-color',
        'link-color': 'color',
        'link-hover-color': 'color',
        'link-visited-color': 'color',
        'nav-background-color': 'background-color',

        //'nav-focus-opacity': 'opacity',
        //'nav-selection-opacity': 'opacity',
        'subnav-background-color': 'background-color',
        'text-field-background-color': 'background-color',
        'text-focus-color': 'color',
        'title-color': 'color',
        'title-background-color': 'background-color',
        'ui-link-color': 'color',
    };

    var inputIds = Object.keys(inputIdToAttrib);

    function cssRender(tagId, important) {
        var css = customCssTemplate.replace(/<<([a-z-]+)>>/g, function (match, inputId) {
            var style;
            if (inputId == 'custom-style-tag-id') {
                return tagId;
            } else if (!inputIdToAttrib[inputId]) {
                return '';
            }

            style = inputIdToAttrib[inputId] + ': ' + '#' + $('#' + inputId).val();
            if (important) {
                return style + ' !important;';
            } else {
                return style + ';';
            }
        });

        return css;
    }

    function cssCallback(inputId) {
        return function () {
            var css = cssRender('custom-style', true);
            $('#custom-style').remove();
            $('head').append(css);
            $('#css-container').text(css);
        };
    }

    Applycss.colorUi = function() {
        for (var i = 0, iid; iid = inputIds[i]; i++) {
            $('input#' + iid + '.jscolor').change(cssCallback(iid));
        }
    };

})(jQuery);
