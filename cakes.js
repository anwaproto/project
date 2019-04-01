$(function(){
    var $mask=$("#cake1-mask")
    var $divlg=$("#div-lg")
    $("#cake1-supermask").hover(
        function(){
            $mask.toggleClass("d-none")
            $divlg.toggleClass("d-none")
        }
    )
})