"use strict";var btnClose=document.querySelector(".search-form__submit");(searchForm=document.querySelector(".header__form")).addEventListener("submit",(function(e){return e.preventDefault(),!1})),btnClose.addEventListener("click",(function(){searchForm.classList.contains("visible")&&searchForm.classList.remove("visible")}));var burger=document.querySelector(".burger"),serchForm=document.querySelector(".header__form"),defaultAriaLabelBurger=burger.getAttribute("aria-label"),newAriaLabelBurger="Закрыть главное меню навигации по сайту";burger.addEventListener("click",(function(){serchForm.classList.contains("visible")&&serchForm.classList.remove("visible"),this.classList.toggle("burger_close"),this.querySelector(".burger__top").classList.toggle("burger__top_close"),this.querySelector(".burger__middle").classList.toggle("burger__middle_close"),this.querySelector(".burger__bottom").classList.toggle("burger__bottom_close"),document.querySelector(".nav__menu-links").classList.toggle("visible"),document.querySelector(".nav__menu-links").classList.contains("visible")?burger.setAttribute("aria-label",newAriaLabelBurger):burger.setAttribute("aria-label",defaultAriaLabelBurger)}));var contactBlock=document.querySelector(".contacts__info"),btnCloseInfo=contactBlock.querySelector(".info-wrapper__close");btnCloseInfo.addEventListener("click",(function(){contactBlock.classList.toggle("contacts__info_move-left")}));var btnOpenSearch=document.querySelector(".header__btn-search"),searchForm=document.querySelector(".header__form"),navMenu=document.querySelector(".nav__menu-links");burger=document.querySelector(".nav__menu-control"),defaultAriaLabelBurger="Открыть главное меню навигации по сайту";btnOpenSearch.addEventListener("click",(function(){navMenu.classList.contains("visible")&&(navMenu.classList.remove("visible"),burger.classList.toggle("burger_close"),burger.querySelector(".burger__top").classList.toggle("burger__top_close"),burger.querySelector(".burger__middle").classList.toggle("burger__middle_close"),burger.querySelector(".burger__bottom").classList.toggle("burger__bottom_close"),burger.setAttribute("aria-label",defaultAriaLabelBurger)),searchForm.classList.toggle("visible")}));var validation=new JustValidate(".form-wrapper");function testWebP(e){var r=new Image;r.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA",r.onload=r.onerror=function(){2===r.height?e.classList.add("webp-true"):e.classList.add("webp-false")}}function testAvif(e){var r=new Image;r.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABwAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACRtZGF0EgAKCBgANogQEDQgMg4YQAAAUXAAAcV0bpqgHg==",r.onload=r.onerror=function(){2===r.height?e.classList.add("avif-true"):e.classList.add("avif-false")}}validation.addField("#name",[{rule:"minLength",value:3,errorMessage:"Минимум 3 символа"},{rule:"maxLength",value:30,errorMessage:"Максимум 30 символов"},{rule:"customRegexp",value:/^[A-Za-zА-Яа-яЁё," "]+$/,errorMessage:"Недопустимый формат!"},{rule:"required",errorMessage:"Обязательное поле"}]).addField("#email",[{rule:"required",errorMessage:"Обязательное поле"},{rule:"email",errorMessage:"Недопустимый формат!"}]),testWebP(document.querySelector(".main-announce")),testAvif(document.querySelector(".main-announce")),testWebP(document.querySelector(".work-1")),testAvif(document.querySelector(".work-1")),testWebP(document.querySelector(".work-2")),testAvif(document.querySelector(".work-2")),testWebP(document.querySelector(".work-3")),testAvif(document.querySelector(".work-3")),testWebP(document.querySelector(".subscription__img")),testAvif(document.querySelector(".subscription__img"));for(var i=1;i<=5;i++)testWebP(document.querySelector(".preview-article__img_".concat(i))),testAvif(document.querySelector(".preview-article__img_".concat(i)));function init(){var e=new ymaps.Map("map",{center:[55.758772,37.617933],controls:["geolocationControl"],zoom:13}),r=new ymaps.control.ZoomControl({options:{size:"small"}});e.controls.add(r);var t=new ymaps.Circle([[55.769535,37.639985],70],{balloonContent:"Радиус круга - 10 км",hintContent:"Подвинь меня"},{draggable:!0,fillColor:"#ff6e30",strokeColor:"#fff",strokeOpacity:0,strokeWidth:1});e.geoObjects.add(t),e.behaviors.disable("scrollZoom"),e.events.add("click",(function(){console.log(e.behaviors),e.behaviors.enable("scrollZoom")}))}ymaps.ready(init);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMuanMiLCJidG5DbG9zZUZvcm0uanMiLCJidXJnZXJPbmNsaWNrLmpzIiwiY29udGFjdEluZm9DbG9zZS5qcyIsInNlYXJoT25jbGljay5qcyIsInZhbGlkYXRvckZvcm0uanMiLCJ3ZWJwLmpzIiwieWFuZGV4TWFwLmpzIl0sIm5hbWVzIjpbImJ0bkNsb3NlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2VhcmNoRm9ybSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJidXJnZXIiLCJzZXJjaEZvcm0iLCJkZWZhdWx0QXJpYUxhYmVsQnVyZ2VyIiwiZ2V0QXR0cmlidXRlIiwibmV3QXJpYUxhYmVsQnVyZ2VyIiwidGhpcyIsInRvZ2dsZSIsInNldEF0dHJpYnV0ZSIsImNvbnRhY3RCbG9jayIsImJ0bkNsb3NlSW5mbyIsImJ0bk9wZW5TZWFyY2giLCJuYXZNZW51IiwidmFsaWRhdGlvbiIsIkp1c3RWYWxpZGF0ZSIsInRlc3RXZWJQIiwiZWxlbSIsIndlYlAiLCJJbWFnZSIsInNyYyIsIm9ubG9hZCIsIm9uZXJyb3IiLCJoZWlnaHQiLCJhZGQiLCJ0ZXN0QXZpZiIsImF2aWYiLCJhZGRGaWVsZCIsInJ1bGUiLCJ2YWx1ZSIsImVycm9yTWVzc2FnZSIsImkiLCJjb25jYXQiLCJpbml0IiwibXlNYXAiLCJ5bWFwcyIsIk1hcCIsImNlbnRlciIsImNvbnRyb2xzIiwiem9vbSIsInpvb21Db250cm9sIiwiY29udHJvbCIsIlpvb21Db250cm9sIiwib3B0aW9ucyIsInNpemUiLCJteUNpcmNsZSIsIkNpcmNsZSIsImJhbGxvb25Db250ZW50IiwiaGludENvbnRlbnQiLCJkcmFnZ2FibGUiLCJmaWxsQ29sb3IiLCJzdHJva2VDb2xvciIsInN0cm9rZU9wYWNpdHkiLCJzdHJva2VXaWR0aCIsImdlb09iamVjdHMiLCJiZWhhdmlvcnMiLCJkaXNhYmxl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cXVlcnlTZWxlY3RvcignLnNlYXJjaC1mb3JtX19zdWJtaXQnKSxcclxuICAgIHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19mb3JtJylcclxuXHJcbnNlYXJjaEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgIHJldHVybiBmYWxzZVxyXG59KVxyXG5idG5DbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgaWYoc2VhcmNoRm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ3Zpc2libGUnKSkge1xyXG4gICAgICAgIHNlYXJjaEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpXHJcbiAgICB9XHJcbn0pIiwibGV0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXInKSxcclxuICAgIHNlcmNoRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2Zvcm0nKSxcclxuICAgIGRlZmF1bHRBcmlhTGFiZWxCdXJnZXIgPSBidXJnZXIuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJyksXHJcbiAgICBuZXdBcmlhTGFiZWxCdXJnZXIgPSAn0JfQsNC60YDRi9GC0Ywg0LPQu9Cw0LLQvdC+0LUg0LzQtdC90Y4g0L3QsNCy0LjQs9Cw0YbQuNC4INC/0L4g0YHQsNC50YLRgydcclxuXHJcbi8vIGFkZCBvbmNsaWNrIG9uIGJ1cmdlclxyXG5idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIGlmKHNlcmNoRm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ3Zpc2libGUnKSkge1xyXG4gICAgICAgIHNlcmNoRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJylcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdidXJnZXJfY2xvc2UnKVxyXG4gICAgdGhpcy5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyX190b3AnKS5jbGFzc0xpc3QudG9nZ2xlKCdidXJnZXJfX3RvcF9jbG9zZScpXHJcbiAgICB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXJfX21pZGRsZScpLmNsYXNzTGlzdC50b2dnbGUoJ2J1cmdlcl9fbWlkZGxlX2Nsb3NlJylcclxuICAgIHRoaXMucXVlcnlTZWxlY3RvcignLmJ1cmdlcl9fYm90dG9tJykuY2xhc3NMaXN0LnRvZ2dsZSgnYnVyZ2VyX19ib3R0b21fY2xvc2UnKVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdl9fbWVudS1saW5rcycpLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc2libGUnKVxyXG4gICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdl9fbWVudS1saW5rcycpLmNsYXNzTGlzdC5jb250YWlucygndmlzaWJsZScpKSB7XHJcbiAgICAgICAgYnVyZ2VyLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIG5ld0FyaWFMYWJlbEJ1cmdlcilcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGJ1cmdlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBkZWZhdWx0QXJpYUxhYmVsQnVyZ2VyKVxyXG4gICAgfVxyXG59KVxyXG4iLCJsZXQgY29udGFjdEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3RzX19pbmZvJyksXHJcbiAgICBidG5DbG9zZUluZm8gPSBjb250YWN0QmxvY2sucXVlcnlTZWxlY3RvcignLmluZm8td3JhcHBlcl9fY2xvc2UnKVxyXG5cclxuICAgIGJ0bkNsb3NlSW5mby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb250YWN0QmxvY2suY2xhc3NMaXN0LnRvZ2dsZSgnY29udGFjdHNfX2luZm9fbW92ZS1sZWZ0JylcclxuICAgIH0pIiwibGV0IGJ0bk9wZW5TZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19idG4tc2VhcmNoJyksXHJcbiAgICBzZWFyY2hGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fZm9ybScpLFxyXG4gICAgbmF2TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX21lbnUtbGlua3MnKSxcclxuICAgIGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX21lbnUtY29udHJvbCcpLFxyXG4gICAgZGVmYXVsdEFyaWFMYWJlbEJ1cmdlciA9ICfQntGC0LrRgNGL0YLRjCDQs9C70LDQstC90L7QtSDQvNC10L3RjiDQvdCw0LLQuNCz0LDRhtC40Lgg0L/QviDRgdCw0LnRgtGDJ1xyXG5cclxuYnRuT3BlblNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmKG5hdk1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCd2aXNpYmxlJykpIHtcclxuICAgICAgICBuYXZNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKVxyXG4gICAgICAgIGJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKCdidXJnZXJfY2xvc2UnKVxyXG4gICAgICAgIGJ1cmdlci5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyX190b3AnKS5jbGFzc0xpc3QudG9nZ2xlKCdidXJnZXJfX3RvcF9jbG9zZScpXHJcbiAgICAgICAgYnVyZ2VyLnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXJfX21pZGRsZScpLmNsYXNzTGlzdC50b2dnbGUoJ2J1cmdlcl9fbWlkZGxlX2Nsb3NlJylcclxuICAgICAgICBidXJnZXIucXVlcnlTZWxlY3RvcignLmJ1cmdlcl9fYm90dG9tJykuY2xhc3NMaXN0LnRvZ2dsZSgnYnVyZ2VyX19ib3R0b21fY2xvc2UnKVxyXG4gICAgICAgIGJ1cmdlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBkZWZhdWx0QXJpYUxhYmVsQnVyZ2VyKVxyXG4gICAgfVxyXG4gICAgc2VhcmNoRm9ybS5jbGFzc0xpc3QudG9nZ2xlKCd2aXNpYmxlJylcclxufSlcclxuIiwiLy8gdmFsaWRhdGVcclxuY29uc3QgdmFsaWRhdGlvbiA9IG5ldyBKdXN0VmFsaWRhdGUoJy5mb3JtLXdyYXBwZXInKTtcclxuXHJcbnZhbGlkYXRpb25cclxuICAuYWRkRmllbGQoJyNuYW1lJywgW1xyXG4gICAge1xyXG4gICAgICBydWxlOiAnbWluTGVuZ3RoJyxcclxuICAgICAgdmFsdWU6IDMsXHJcbiAgICAgIGVycm9yTWVzc2FnZTogJ9Cc0LjQvdC40LzRg9C8IDMg0YHQuNC80LLQvtC70LAnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcnVsZTogJ21heExlbmd0aCcsXHJcbiAgICAgIHZhbHVlOiAzMCxcclxuICAgICAgZXJyb3JNZXNzYWdlOiAn0JzQsNC60YHQuNC80YPQvCAzMCDRgdC40LzQstC+0LvQvtCyJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcnVsZTogJ2N1c3RvbVJlZ2V4cCcsXHJcbiAgICAgICAgdmFsdWU6IC9eW0EtWmEtetCQLdCv0LAt0Y/QgdGRLFwiIFwiXSskLyxcclxuICAgICAgICBlcnJvck1lc3NhZ2U6ICfQndC10LTQvtC/0YPRgdGC0LjQvNGL0Lkg0YTQvtGA0LzQsNGCIScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBydWxlOiAncmVxdWlyZWQnLFxyXG4gICAgICBlcnJvck1lc3NhZ2U6ICfQntCx0Y/Qt9Cw0YLQtdC70YzQvdC+0LUg0L/QvtC70LUnLFxyXG4gICAgfSxcclxuICBdKVxyXG4gIC5hZGRGaWVsZCgnI2VtYWlsJywgW1xyXG4gICAge1xyXG4gICAgICBydWxlOiAncmVxdWlyZWQnLFxyXG4gICAgICBlcnJvck1lc3NhZ2U6ICfQntCx0Y/Qt9Cw0YLQtdC70YzQvdC+0LUg0L/QvtC70LUnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcnVsZTogJ2VtYWlsJyxcclxuICAgICAgZXJyb3JNZXNzYWdlOiAn0J3QtdC00L7Qv9GD0YHRgtC40LzRi9C5INGE0L7RgNC80LDRgiEnLFxyXG4gICAgfSxcclxuICBdKTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLW11bHRpLWFzc2lnbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBmdW5jLW5hbWVzICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC1leHByZXNzaW9ucyAqL1xyXG5mdW5jdGlvbiB0ZXN0V2ViUChlbGVtKSB7XHJcbiAgICBjb25zdCB3ZWJQID0gbmV3IEltYWdlKCk7XHJcbiAgICB3ZWJQLnNyYyA9ICdkYXRhOmltYWdlL3dlYnA7YmFzZTY0LFVrbEdSam9BQUFCWFJVSlFWbEE0SUM0QUFBQ3lBZ0NkQVNvQ0FBSUFMbWswbWswaUlpSWlJZ0JvU3lnQUJjNldXZ0FBL3ZlZmYvMFBQOGJBLy9Md1lBQUEnO1xyXG4gIFxyXG4gICAgd2ViUC5vbmxvYWQgPSB3ZWJQLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHdlYlAuaGVpZ2h0ID09PSAyID8gZWxlbS5jbGFzc0xpc3QuYWRkKCd3ZWJwLXRydWUnKSA6IGVsZW0uY2xhc3NMaXN0LmFkZCgnd2VicC1mYWxzZScpO1xyXG4gICAgfTtcclxuICB9XHJcbiAgXHJcbiAgZnVuY3Rpb24gdGVzdEF2aWYoZWxlbSkge1xyXG4gICAgY29uc3QgYXZpZiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgYXZpZi5zcmMgPSAnZGF0YTppbWFnZS9hdmlmO2Jhc2U2NCxBQUFBSUdaMGVYQmhkbWxtQUFBQUFHRjJhV1p0YVdZeGJXbGhaazFCTVVJQUFBRHliV1YwWVFBQUFBQUFBQUFvYUdSc2NnQUFBQUFBQUFBQWNHbGpkQUFBQUFBQUFBQUFBQUFBQUd4cFltRjJhV1lBQUFBQURuQnBkRzBBQUFBQUFBRUFBQUFlYVd4dll3QUFBQUJFQUFBQkFBRUFBQUFCQUFBQkdnQUFBQndBQUFBb2FXbHVaZ0FBQUFBQUFRQUFBQnBwYm1abEFnQUFBQUFCQUFCaGRqQXhRMjlzYjNJQUFBQUFhbWx3Y25BQUFBQkxhWEJqYndBQUFCUnBjM0JsQUFBQUFBQUFBQUlBQUFBQ0FBQUFFSEJwZUdrQUFBQUFBd2dJQ0FBQUFBeGhkakZEZ1FBTUFBQUFBQk5qYjJ4eWJtTnNlQUFDQUFJQUJvQUFBQUFYYVhCdFlRQUFBQUFBQUFBQkFBRUVBUUtEQkFBQUFDUnRaR0YwRWdBS0NCZ0FOb2dRRURRZ01nNFlRQUFBVVhBQUFjVjBicHFnSGc9PSc7XHJcbiAgXHJcbiAgICBhdmlmLm9ubG9hZCA9IGF2aWYub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgYXZpZi5oZWlnaHQgPT09IDIgPyBlbGVtLmNsYXNzTGlzdC5hZGQoJ2F2aWYtdHJ1ZScpIDogZWxlbS5jbGFzc0xpc3QuYWRkKCdhdmlmLWZhbHNlJyk7XHJcbiAgICB9O1xyXG4gIH1cclxuICBcclxuICB0ZXN0V2ViUChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1hbm5vdW5jZScpKTtcclxuICB0ZXN0QXZpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1hbm5vdW5jZScpKTtcclxuICB0ZXN0V2ViUChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29yay0xJykpO1xyXG4gIHRlc3RBdmlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53b3JrLTEnKSk7XHJcbiAgdGVzdFdlYlAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcmstMicpKTtcclxuICB0ZXN0QXZpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29yay0yJykpO1xyXG4gIHRlc3RXZWJQKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53b3JrLTMnKSk7XHJcbiAgdGVzdEF2aWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcmstMycpKTtcclxuICB0ZXN0V2ViUChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3Vic2NyaXB0aW9uX19pbWcnKSk7XHJcbiAgdGVzdEF2aWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1YnNjcmlwdGlvbl9faW1nJykpO1xyXG4gIGZvcihsZXQgaT0xOyBpIDw9IDU7IGkrKykge1xyXG4gICAgdGVzdFdlYlAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByZXZpZXctYXJ0aWNsZV9faW1nXyR7aX1gKSk7XHJcbiAgICB0ZXN0QXZpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucHJldmlldy1hcnRpY2xlX19pbWdfJHtpfWApKTtcclxuICB9IiwiLy8gYWRkIHlhbmRleCBtYXBcclxueW1hcHMucmVhZHkoaW5pdCk7XHJcbmZ1bmN0aW9uIGluaXQoKXtcclxuICAgIC8vINCh0L7Qt9C00LDQvdC40LUg0LrQsNGA0YLRiy5cclxuICAgIHZhciBteU1hcCA9IG5ldyB5bWFwcy5NYXAoXCJtYXBcIiwge1xyXG4gICAgICAgIC8vINCa0L7QvtGA0LTQuNC90LDRgtGLINGG0LXQvdGC0YDQsCDQutCw0YDRgtGLLlxyXG4gICAgICAgIC8vINCf0L7RgNGP0LTQvtC6INC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOOiDCq9GI0LjRgNC+0YLQsCwg0LTQvtC70LPQvtGC0LDCuy5cclxuICAgICAgICAvLyDQp9GC0L7QsdGLINC90LUg0L7Qv9GA0LXQtNC10LvRj9GC0Ywg0LrQvtC+0YDQtNC40L3QsNGC0Ysg0YbQtdC90YLRgNCwINC60LDRgNGC0Ysg0LLRgNGD0YfQvdGD0Y4sXHJcbiAgICAgICAgLy8g0LLQvtGB0L/QvtC70YzQt9GD0LnRgtC10YHRjCDQuNC90YHRgtGA0YPQvNC10L3RgtC+0Lwg0J7Qv9GA0LXQtNC10LvQtdC90LjQtSDQutC+0L7RgNC00LjQvdCw0YIuXHJcbiAgICAgICAgY2VudGVyOiBbNTUuNzU4NzcyLCAzNy42MTc5MzNdLFxyXG4gICAgICAgIC8vINGD0LHQuNGA0LDQtdC8INGN0LvQtdC80LXQvdGC0Ysg0YPQv9GA0LDQstC70LXQvdC40Y8g0LrQsNGA0YLQvtC5XHJcbiAgICAgICAgY29udHJvbHM6IFsnZ2VvbG9jYXRpb25Db250cm9sJ10sXHJcbiAgICAgICAgLy8g0KPRgNC+0LLQtdC90Ywg0LzQsNGB0YjRgtCw0LHQuNGA0L7QstCw0L3QuNGPLiDQlNC+0L/Rg9GB0YLQuNC80YvQtSDQt9C90LDRh9C10L3QuNGPOlxyXG4gICAgICAgIC8vINC+0YIgMCAo0LLQtdGB0Ywg0LzQuNGAKSDQtNC+IDE5LlxyXG4gICAgICAgIHpvb206IDEzXHJcbiAgICB9KTtcclxuICAgIC8vINGB0L7Qt9C00LDRkdC8INGN0LvQtdC80LXQvdGC0Ysg0LfRg9C80LAg0LzQsNC70LXQvdGM0LrQvtCz0L4g0YDQsNC30LzQtdGA0LBcclxuICAgIHZhciB6b29tQ29udHJvbCA9IG5ldyB5bWFwcy5jb250cm9sLlpvb21Db250cm9sKHtcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgIHNpemU6IFwic21hbGxcIlxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgbXlNYXAuY29udHJvbHMuYWRkKHpvb21Db250cm9sKTtcclxuXHJcbiAgICAvLyDQodC+0LfQtNCw0LXQvCDQutGA0YPQsy5cclxuICAgIHZhciBteUNpcmNsZSA9IG5ldyB5bWFwcy5DaXJjbGUoW1xyXG4gICAgICAvLyDQmtC+0L7RgNC00LjQvdCw0YLRiyDRhtC10L3RgtGA0LAg0LrRgNGD0LPQsC5cclxuICAgICAgWzU1Ljc2OTUzNSwgMzcuNjM5OTg1XSxcclxuICAgICAgLy8g0KDQsNC00LjRg9GBINC60YDRg9Cz0LAg0LIg0LzQtdGC0YDQsNGFLlxyXG4gICAgICA3MCxcclxuICAgIF0sIHtcclxuICAgICAgLy8g0J7Qv9C40YHRi9Cy0LDQtdC8INGB0LLQvtC50YHRgtCy0LAg0LrRgNGD0LPQsC5cclxuICAgICAgLy8g0KHQvtC00LXRgNC20LjQvNC+0LUg0LHQsNC70YPQvdCwLlxyXG4gICAgICBiYWxsb29uQ29udGVudDogXCLQoNCw0LTQuNGD0YEg0LrRgNGD0LPQsCAtIDEwINC60LxcIixcclxuICAgICAgLy8g0KHQvtC00LXRgNC20LjQvNC+0LUg0YXQuNC90YLQsC5cclxuICAgICAgaGludENvbnRlbnQ6IFwi0J/QvtC00LLQuNC90Ywg0LzQtdC90Y9cIlxyXG4gICAgfSwge1xyXG4gICAgICAvLyDQl9Cw0LTQsNC10Lwg0L7Qv9GG0LjQuCDQutGA0YPQs9CwLlxyXG4gICAgICAvLyDQktC60LvRjtGH0LDQtdC8INCy0L7Qt9C80L7QttC90L7RgdGC0Ywg0L/QtdGA0LXRgtCw0YHQutC40LLQsNC90LjRjyDQutGA0YPQs9CwLlxyXG4gICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgIC8vINCm0LLQtdGCINC30LDQu9C40LLQutC4LlxyXG4gICAgICAvLyDQn9C+0YHQu9C10LTQvdC40Lkg0LHQsNC50YIgKDc3KSDQvtC/0YDQtdC00LXQu9GP0LXRgiDQv9GA0L7Qt9GA0LDRh9C90L7RgdGC0YwuXHJcbiAgICAgIC8vINCf0YDQvtC30YDQsNGH0L3QvtGB0YLRjCDQt9Cw0LvQuNCy0LrQuCDRgtCw0LrQttC1INC80L7QttC90L4g0LfQsNC00LDRgtGMINC40YHQv9C+0LvRjNC30YPRjyDQvtC/0YbQuNGOIFwiZmlsbE9wYWNpdHlcIi5cclxuICAgICAgZmlsbENvbG9yOiBcIiNmZjZlMzBcIixcclxuICAgICAgLy8g0KbQstC10YIg0L7QsdCy0L7QtNC60LguXHJcbiAgICAgIHN0cm9rZUNvbG9yOiBcIiNmZmZcIixcclxuICAgICAgLy8g0J/RgNC+0LfRgNCw0YfQvdC+0YHRgtGMINC+0LHQstC+0LTQutC4LlxyXG4gICAgICBzdHJva2VPcGFjaXR5OiAwLFxyXG4gICAgICAvLyDQqNC40YDQuNC90LAg0L7QsdCy0L7QtNC60Lgg0LIg0L/QuNC60YHQtdC70Y/RhS5cclxuICAgICAgc3Ryb2tlV2lkdGg6IDFcclxuICAgIH0pO1xyXG5cclxuICAgIC8vINCU0L7QsdCw0LLQu9GP0LXQvCDQutGA0YPQsyDQvdCwINC60LDRgNGC0YMuXHJcbiAgICBteU1hcC5nZW9PYmplY3RzLmFkZChteUNpcmNsZSk7XHJcblxyXG4gICAgLy8g0YPQsdC40YDQsNC10Lwg0YHQutGA0YPQu9C7INC60LDRgNGC0Ysg0L/RgNC4INGB0LrRgNC+0LvQu9C1INGB0YLRgNCw0L3QuNGG0Ysg0Lgg0LTQvtCx0LDQstC70Y/QtdC8INC/0YDQuCDQutC70LjQutC1INC90LAg0LrQsNGA0YLRg1xyXG4gICAgbXlNYXAuYmVoYXZpb3JzLmRpc2FibGUoJ3Njcm9sbFpvb20nKVxyXG4gICAgbXlNYXAuZXZlbnRzLmFkZCgnY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICBjb25zb2xlLmxvZyhteU1hcC5iZWhhdmlvcnMpXHJcbiAgICAgIG15TWFwLmJlaGF2aW9ycy5lbmFibGUoJ3Njcm9sbFpvb20nKVxyXG4gICAgfSlcclxufSJdfQ==
