class Todo {
    constructor({title,type,status}){
        Object.assign(this,{title,type,status});
    };

    generateDomNode(id) {

        let domitem=document.createElement('section');
        domitem.classList.add('c-InputHolder');
        domitem.innerHTML=`
            <input class="o-hide c-Inputholder__Check" ${this.status?'checked="checked"':""} id="${id}" type="checkbox">
            <label class="o-checkbox js-button" for="${id}">
            <div class="c-Checkbox__container"><span class="c-Checkbox__Mark">L</span></div>
            <div class="c-InputHolder__input">
                <p class="c-Input__Subject ">${this.title}</p>
                <p class="c-Input__Detail ">${this.type}</p>
            </div>
            </label>
       `;
       /* domitem.querySelector(".js-button").addEventListener("click",function () {
           dataAccess.removeItem(id);
            setTimeout(function () {
                domitem.remove();
            },1000)
        });*/
        return domitem
    };
}