$(document).ready(function () {
    $(".header__buton-drop").on("click", function () {
        $(".header__submenu").toggleClass("is-active");
    });

    $(".hamburger_trigger").on("click", function () {
        $(".header__menu").addClass("is-active");
    });

    $(".header__button-close").on("click", function () {
        $(".header__menu").removeClass("is-active");
    });

    
    const basketPrice = $(".basket__input-price");
    const basketAmount = $(".basket__input-amount");
    const basketBtnPlus = $(".basket__btnplus");
    const basketBtnMinus = $(".basket__btnminus");
    const basketTotal = $(".basket__input-total");
    const basketBtnDel = $(".basket__btn-del");
    const basketClear = $(".basket__clear");
    const basketTotalResident = $(".basket__total-resident")
    const basketTotalOrder = $(".basket__total-order");

   

    function getTotalResident (e) {
        
        let summ = 0;
        let pricedelivery = parseInt($(`.basket__radio-input[checked="checked"]`).val());
        $(".basket__input-total").each(function() {
            summ += parseInt($(this).val());

            basketTotalResident.val(summ);
            basketTotalOrder.val(summ + pricedelivery);
        })         
    };
    getTotalResident();

    function changeAmount (event) {
        
        const sign = event.currentTarget.innerHTML;
        if (sign == "+") {        
            $(this).parent().siblings(".basket__input-amount").val(parseInt($(this).parent().siblings(".basket__input-amount").val()) + 1 );
            $(this).parents(".basket__product").find(basketTotal).val(parseInt($(this).parents(".basket__product").find(basketAmount).val() * $(this).parents(".basket__product").find(basketPrice).val()));
        }
         else if (sign == "-") {
             if($(this).parent().siblings(".basket__input-amount").val() <= 1) {
             }         
             else {
                $(this).parent().siblings(".basket__input-amount").val(parseInt($(this).parent().siblings(".basket__input-amount").val()) - 1);
                $(this).parents(".basket__product").find(basketTotal).val(parseInt($(this).parents(".basket__product").find(basketAmount).val() * $(this).parents(".basket__product").find(basketPrice).val()));
             }      
         }
         getTotalResident();
    }
    
    basketBtnPlus.on("click", changeAmount);
    basketBtnMinus.on("click", changeAmount);
    
    basketAmount.change(function () {
        
        if($(this).val() <= 0) {
            $(this).val(1)       
        }
        $(this).parents(".basket__product").find(basketTotal).val(parseInt($(this).val() * $(this).parents(".basket__product").find(basketPrice).val()))
        getTotalResident();       
    });

    function clearBasket () {
        $(".basket__table").remove();
        $(".basket__none").css("display", "block")
    }

    basketBtnDel.on("click", function() {
        $(this).parents(".basket__product").remove();
        
        if($(".basket__products div").hasClass("basket__product")) {
            getTotalResident();
        }
        else {
            clearBasket();
        } 
    });

    if($("div").is(".basket__table")) {
        $(".basket__none").css("display", "none");
    }

    basketClear.on("click", clearBasket);

    $(".basket__radio-input").on("click", function () {
        $(this).attr("checked", true);
        $(this).parent().siblings(".basket__radio").find($(".basket__radio-input")).attr("checked", false);
        getTotalResident();
        
    });

// страница информация о товаре


    var $easyzoom = $('.easyzoom').easyZoom();

		// Setup thumbnails example
		var api1 = $easyzoom.filter('.easyzoom--with-thumbnails').data('easyZoom');

		$('.thumbnails').on('click', 'a', function(e) {
			var $this = $(this);

			e.preventDefault();

			// Use EasyZoom's `swap` method
			api1.swap($this.data('standard'), $this.attr('href'));
		});

		// Setup toggles example
		var api2 = $easyzoom.filter('.easyzoom--with-toggle').data('easyZoom');

		$('.toggle').on('click', function() {
			var $this = $(this);

			if ($this.data("active") === true) {
				$this.text("Switch on").data("active", false);
				api2.teardown();
			} else {
				$this.text("Switch off").data("active", true);
				api2._init();
			}
        });
        
function changeCounter (event) {
    const innerHtml = event.currentTarget.innerHTML

    if(innerHtml == "+") {
        $(this).parent().siblings(".info__counter-input").val(parseInt($(this).parent().siblings(".info__counter-input").val()) + 1);
    }
    else if (innerHtml == "-") {
        if($(this).parent().siblings(".info__counter-input").val() <= 1) {

        }
        else {
            $(this).parent().siblings(".info__counter-input").val(parseInt($(this).parent().siblings(".info__counter-input").val()) - 1);
        }
    }

}

$(".info__btn").on("click", changeCounter);

$(".info__counter-input").change(function () {
    if($(this).val() <= 0) {
        $(this).val(1)       
    }     
    else {
        $(this).val($(this).val());
    } 
});

    
//-------------------------------------------------------------------------------------------


/// страница магазин store.html

$(".store__drop").on("click", function() {
    $(".store__sorting-icon").toggleClass("is-active");
    $(".store__list-ul").toggleClass("is-active");
});

$(".category__link").on("click", function(e) {
    e.preventDefault();
    $(".category__link").removeClass("is-active");
    $(this).addClass("is-active");   
});

function changeSorting (e) {
    e.preventDefault();
    const storeText = $(this).parent().siblings(".store__text"); 
    storeText.text($(this).text());

    $(".store__sorting-icon").toggleClass("is-active");
    $(".store__list-ul").toggleClass("is-active");
    $(".store__list-li").removeClass("active");
    $(this).addClass("active");
}

$(".store__list-li").click(changeSorting);




//----------------------------------------------------------------------------------------------


$(".order__pay-radio").on("click", function() { 
    
    $(this).parents(".order__pay-radios").find(".order__pay-radio").attr("checked", false);
    $(this).attr("checked", true);

    const payFree = $("#pay-free");
    const elMoney = $("#pay-elmoney");
    const cartBank =$("#pay-cart");

    if(payFree.attr("checked")) {
        $(".order__pay-free").addClass("pay-active");
        $(".order__pay-elsom").removeClass("pay-active");
        $(".order__pay-cart").removeClass("pay-active");
    }
    else if (elMoney.attr("checked")) {
        $(".order__pay-free").removeClass("pay-active");
        $(".order__pay-elsom").addClass("pay-active");
        $(".order__pay-cart").removeClass("pay-active");
    }
    else if (cartBank.attr("checked")) {
        $(".order__pay-free").removeClass("pay-active");
        $(".order__pay-elsom").removeClass("pay-active");
        $(".order__pay-cart").addClass("pay-active");
    }

    
    
});

/// блог все

$(".blogpage__link-acide").click(function (e) {
    e.preventDefault();
    $(".blogpage__link-acide").removeClass("active");
    $(this).addClass("active");
})
//---------------------------------


// форма оплаты



///--------------------------

    $(".products__slider ").owlCarousel({
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1,

            }
        }
    });


    $(".info__thumbnails").owlCarousel({
        nav: true,
        navText: ["<i class='icon-left info__icon'>","<i class='icon-right info__icon'>"],
        dots: false,
        responsive: {
            0: {
                items: 3,

            }
        }
    });

    $(".newproduct__products").owlCarousel({
        dots: false,
        nav: true,
        navText: ["<i class='icon-left product__icon'>","<i class='icon-right product__icon'>"],
        responsive: {
            0: {
                items: 1,

            },
            768: {
                items: 2,
            },
            1140: {
                items: 3,

            }
        }


    });

})