// Smart Height grid
function matchHeight(limitElement, element) {
    jQuery(limitElement).each(function() {    
        var element = jQuery(this).find(element);
        element.css('height', 'auto');
        var widthContainer = jQuery(this).width();
        var widthElement = jQuery(this).find(element).width();
        var colsNumber = parseInt(widthContainer / widthElement);
        jQuery(this).attr('data-cols-number',colsNumber);

        var elementsTotal = element.length;
        var rowsNumber = elementsTotal/colsNumber;
        var rowNumber = 0;
        for (rowNumber = 0; rowNumber < rowsNumber; rowNumber++) {
            var elementHeight = 0;
            var rowHeight = 0;
            for (j = 0; j < colsNumber; j++) {
                elementHeight = element.filter(':eq('+((rowNumber*colsNumber)+j)+')').outerHeight();
                rowHeight = elementHeight > rowHeight ? elementHeight : rowHeight;
            }
            for (j = 0; j < colsNumber; j++) {
                element.filter(':eq('+((rowNumber*colsNumber)+j)+')').height(rowHeight);
            }
        }
    });
}

