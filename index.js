class MiniLibrary {
    constructor(object) { // Get html el
        this.object = document.querySelector(object);
    }

    /* show(block, flex, grid)/hide el */
    displayEl(showHow) {
        this.object.style.display = showHow;

        /* el.displayEl(flex); */
    }

    /* Delete el from html */
    deleteEl() {
        this.object.remove();

        /* el.deleteEl(); */
    }

    /* Create new div el with className */
    createNewEl(elTag, newElClassName, elInnerContent) {
        if (elInnerContent === undefined) {
            this.object.innerHTML += `
                <${elTag} class=${newElClassName}></${elTag}>
            `;
        } else {
            this.object.innerHTML += `
                <${elTag} class=${newElClassName}>
                    ${elInnerContent}
                </${elTag}>
        `;
        }

        /* parentEl.createNewEl('div/img/span/p', elClassName); | El with className */
        /* parentEl.createNewEl('div/img/span/p', elClassName, 'Hello / <div>content</div>'); | El with className && inner content el */
    }

    /* Set css style for el */
    setElStyle(styleProp, stylePropValue) {
        this.object.style[styleProp] = stylePropValue;

        /* el.setElStyle('border', '1px solid black'); */
    }

    /* Set custom event listener for the el */
    setEventListener(listenerType, func) {
        this.object.addEventListener([listenerType], func);

        /* el.setEventListener('click', e => {
            some function...
        }); */

        /* $text.setEventListener('click', () => {
            $text.deleteEl();
        }); */
    }

    /* Set src to img file */
    setCustomSrc(srcAttr, newSrc) {
        this.object[srcAttr] = newSrc;

        /* el.setCustomSrc('src', 'https://...); */
    }

    /* Set data-attr to el */
    setAttrData(dataAttrName, dataAttrValue = "") {
        this.object.dataset[dataAttrName] = dataAttrValue;
    
        /* el.setAttrData('DataAttrName', 'DataAttrValue') - set data attribute with value
        el.setAttrData('DataAttrName') - set data attribute without */
    }
}

/* -------------------------------------------------- */
//                  Example / How To Use
/* -------------------------------------------------- */

/* ------------------------- */
// Parent El
const $body = new MiniLibrary('body');
$body.setElStyle('background-color', '#000');
$body.createNewEl('div', 'box');
$body.createNewEl('img', 'image');

/* ------------------------- */
// Box El + displayEl + setElStyle + setAttrData + createNewEl | createNewEl+elInnerContent
const $box = new MiniLibrary('.box');
$box.displayEl('flex');
$box.setElStyle('border', '1px solid #fff');
$box.setElStyle('padding', '15px');
$box.setElStyle('background-color', '#000');
$box.setElStyle('color', '#fff');
$box.setElStyle('font-size', '24px');
$box.setElStyle('font-weight', '600');
$box.setElStyle('width', '250px');
$box.setElStyle('height', '100px');
$box.setElStyle('justify-content', 'center');
$box.setElStyle('align-items', 'center');
$box.createNewEl('p', 'text', 'Click on Me!');
$box.setAttrData('boxId', '01');
$box.setAttrData('id');

/* ------------------------- */
// Text <p>Lorem Ipsum</p> + setEventListener + deleteEl
const $text = new MiniLibrary('.text');
$text.setElStyle('color', '#fff');
$text.setElStyle('font-size', '24px');
$text.setElStyle('cursor', 'default');
$text.setEventListener('click', () => {
    $text.deleteEl();
});

/* ------------------------- */
//  Image
const $image = new MiniLibrary('.image');
$image.setCustomSrc('src', 'image.jpg');
$image.setElStyle('width', '250px');
$image.setElStyle('height', '250px');
$image.setElStyle('margin-left', '50px');

$image.setAttrData('imageId', 'ZmeRzkaZMrFVjo05IW7lQfIX5OCQfzxE');