$(document).ready(function(){
	$.ajaxSetup ({
		cache: false
	});

	var artNoticias = $("article#noticias");
	var artAdicionarAsset = $("article#adicionarAssets");
	var artPesquisarAsset = $("article#pesquisarAsset");
	var artListarAsset = $("article#listarAssets");
	var artRegistarUser = $("article#registarUser");

	artNoticias.show();
	artAdicionarAsset.hide();
	artPesquisarAsset.hide();
    artListarAsset.hide();
    artRegistarUser.hide();
    
	$("input#addasset").live("click",function(event){
		event.preventDefault();
		artNoticias.slideUp();
   		artAdicionarAsset.slideDown("slow");
   		artPesquisarAsset.slideUp();
   		artListarAsset.slideUp(); 
   		artRegistarUser.slideUp(); 
	});
	$("input#home").live("click",function(event){
		event.preventDefault();
		artNoticias.slideDown("slow");
		artAdicionarAsset.slideUp();
		artPesquisarAsset.slideUp();
		artListarAsset.slideUp(); 
		artRegistarUser.slideUp(); 
   		
	});
	$("input#pesqreg").live("click",function(event){
		event.preventDefault();
		artNoticias.slideUp();
		artAdicionarAsset.slideUp();
		artPesquisarAsset.slideDown("slow"); 		
		artListarAsset.slideUp(); 
		artRegistarUser.slideUp(); 
	});

	$("input#listreg").live("click",function(event){
		event.preventDefault();
		artNoticias.slideUp();
		artAdicionarAsset.slideUp();
		artPesquisarAsset.slideUp(); 
		artListarAsset.slideDown("slow"); 
		artRegistarUser.slideUp(); 
	});
	$("input#regUser").live("click",function(event){
		event.preventDefault();
		artNoticias.slideUp();
		artAdicionarAsset.slideUp();
		artPesquisarAsset.slideUp(); 
		artListarAsset.slideUp(); 
		artRegistarUser.slideDown("slow"); 
	});

	// PAGINA ADICIONAR
	$("#guia_transp").change(function (){
		thisVal = $(this).val();
		$("#id_GT").text(thisVal);
	});
	$("#cert").change(function (){
		thisVal = $(this).val();
		$("#id_CT").text(thisVal);
	});


	var stmn = $(".selectTipMaqN");
	var stmv = $(".selectTipMaqV");
	var mn = $("#MaquinaNova");
	var mv = $("#MaquinaVelha");
	var mm = $("#MovimentacaoEquip");
	var ea = $("#EquipAbate");

	mn.hide();
	mv.hide();
	mm.hide();
	ea.hide();

	$(".selectD").live("change",function () {
		var selValue = $("select option:selected").val();
		switch(selValue)
        {
			case "": 
				mn.slideUp();mv.slideUp();mm.slideUp();
				mn.find("*").removeAttr("required");
				mv.find("*").removeAttr("required");
				mm.find("*").removeAttr("required");
				stmn.removeAttr("required");
				stmv.removeAttr("required");
			break;
            case "Nova Maquina": 
                mn.slideDown(); mv.slideUp(); mm.slideUp();
                mv.find("*").removeAttr("required");
				mm.find("*").removeAttr("required");
				stmn.attr("required","required");
            	stmv.removeAttr("required");
            break;
            case "Substituicao de Maquina":
            	mn.slideDown();mv.slideDown();mm.slideUp();
				mm.find("*").removeAttr("required");
            	stmn.attr("required","required");
            	stmv.attr("required","required");
            break;
			//case "Movimentacao de Equipamento": 
			//	mn.slideUp();mv.slideUp();mm.slideDown();
			//	mn.find("*").removeAttr("required");
			//	mv.find("*").removeAttr("required");
			//	stmn.removeAttr("required");
			//	stmv.removeAttr("required");
			//break;
			//case "Equipamento para Abate": 
			//	mn.slideUp();mv.slideUp();mm.slideUp();
			//	mn.find("*").removeAttr("required");
			//	mv.find("*").removeAttr("required");
			//	mm.find("*").removeAttr("required");
			//	stmn.removeAttr("required");
			//	stmv.removeAttr("required");
			//break;
            default: selValue = "";
			break;
        }
	});
	
	var smvd = $("#selectModelVDesktops");
	var smvf = $("#selectModelVFutros");
	var smvp = $("#selectModelVPortateis");
	var apcv = $("#assetpcv");
	var spcv = $("#serialpcv");
	var csmv = $("#comsemMonitorV");
	var csmvl = $("#comsemMonitorVL");
	var smv = $("#selectMV");
	var amv = $("#assetmv");
	var snmv = $("#serialmv");

	smvd.hide();
	smvf.hide();
	smvp.hide();
	apcv.hide();
	spcv.hide();
	csmv.hide();
	csmvl.hide();
	smv.hide();
	amv.hide();
	snmv.hide();
	
	stmv.live("change",function () {
		var selValue = $(this).val();
		switch(selValue)
        {
			case "":
					smvd.slideUp();smvf.slideUp();smvp.slideUp();
					smvd.removeAttr("required").val(""); smvf.removeAttr("required").val(""); smvp.removeAttr("required").val("");
					apcv.slideUp();spcv.slideUp();csmv.slideUp();csmvl.slideUp();
					apcv.removeAttr("required").val(""); spcv.removeAttr("required").val(""); csmv.removeAttr("required").val(""); csmvl.removeAttr("required").val("");
					smv.slideUp();amv.slideUp();snmv.slideUp();
					smv.removeAttr("required").val(""); amv.removeAttr("required").val(""); snmv.removeAttr("required").val("");
			break;
            case "PC Completo":
            		smvd.attr("required","required");
            		apcv.attr("required","required");
            		spcv.attr("required","required");
            		smv.attr("required","required");
            		amv.attr("required","required");
            		snmv.attr("required","required");
            		smvd.slideDown();smvf.slideUp();smvp.slideUp();
            		smvf.removeAttr("required").val(""); smvp.removeAttr("required").val("");
					apcv.slideDown();spcv.slideDown();
					csmv.slideUp();csmvl.slideUp();
					csmv.removeAttr("required").val(""); csmvl.removeAttr("required").val(""); csmv.attr("checked", false);
					smv.slideDown();amv.slideDown();snmv.slideDown();
            break;
			case "Futro":
					smvf.attr("required","required");
            		apcv.attr("required","required");
            		spcv.attr("required", "required");
            		csmvl.attr("required","required");
            		//csmv.attr("required","required");
					smvf.slideDown();smvd.slideUp();smvp.slideUp();
					apcv.slideDown();spcv.slideDown();
					csmvl.slideDown(); csmv.slideDown(); csmv.attr("checked", false);
					smv.slideUp();amv.slideUp();snmv.slideUp();
					smv.removeAttr("required").val(""); amv.removeAttr("required").val(""); snmv.removeAttr("required").val("");
					csmv.click(function(){
						if ($(this).is(':checked')){
							smv.attr("required","required");
            				amv.attr("required","required");
            				snmv.attr("required","required");
							smv.slideDown();amv.slideDown();snmv.slideDown();
						}else{
							smv.slideUp();amv.slideUp();snmv.slideUp();
							smv.removeAttr("required").val("");
							amv.removeAttr("required").val("");
							snmv.removeAttr("required").val("");
						}
					});
            break;
			case "Laptop": 
					smvp.attr("required","required");
            		apcv.attr("required","required");
            		spcv.attr("required", "required");
            		csmvl.attr("required", "required");
            		smvd.slideUp(); smvf.slideUp(); smvp.slideDown(); csmvl.slideDown();
					//smvp.removeAttr("required");
					apcv.slideDown();spcv.slideDown();
					csmv.slideDown(); csmv.slideDown(); csmv.attr("checked", false);
					smv.slideUp(); amv.slideUp(); snmv.slideUp();				
					smv.removeAttr("required").val(""); amv.removeAttr("required").val(""); snmv.removeAttr("required").val(""); smvd.removeAttr("required").val("");
					csmv.click(function(){
						if ($(this).is(':checked')){
							smv.slideDown();amv.slideDown();snmv.slideDown();
							smv.attr("required","required");
            				amv.attr("required","required");
            				snmv.attr("required","required");
						}else {
							smv.slideUp();amv.slideUp();snmv.slideUp();
							smv.removeAttr("required").val("");
							amv.removeAttr("required").val("");
							snmv.removeAttr("required").val("");
						}
					});
            break;
			case "Desktop":
			    smvd.attr("required","required");
            	apcv.attr("required","required");
            	spcv.attr("required","required");
				smvd.slideDown();smvf.slideUp();smvp.slideUp();
				apcv.slideDown();spcv.slideDown();
				csmv.slideUp(); csmvl.slideUp(); csmv.attr("checked", false);
				csmv.removeAttr("required").val(""); csmvl.removeAttr("required").val("");
				smv.slideUp();amv.slideUp();snmv.slideUp();
				smv.removeAttr("required").val(""); amv.removeAttr("required").val(""); snmv.removeAttr("required").val("");
            break;
		    case "Monitor":
		        smvf.removeAttr("required").val("");
		        apcv.removeAttr("required").val("");
		        spcv.removeAttr("required").val("");
		        smvd.removeAttr("required").val("");
		        smvp.removeAttr("required").val("");
		        smvd.slideUp(); smvf.slideUp(); smvp.slideUp();
				apcv.slideUp();spcv.slideUp();
				csmvl.slideUp(); csmv.slideUp(); csmv.attr("checked", false);
				smv.slideDown();amv.slideDown();snmv.slideDown();
				smv.attr("required","required");
            	amv.attr("required","required");
            	snmv.attr("required","required");
            break;
            default: selValue = "";
			break;
        }
	});


	var smnd = $("#selectModelNDesktops");
	var smnf = $("#selectModelNFutros");
	var smnp = $("#selectModelNPortateis");
	var apcn = $("#assetpcn");
	var snpcn = $("#serialpcn");
	var keywin = $("#KeyWindows");
	var keyoffice = $("#KeyOffice");
	var csmvn = $("#comsemMonitorN");
	var csmnln = $("#comsemMonitorNL");
	var smn = $("#selectMN");
	var amn = $("#assetmn");
	var snmn = $("#serialmn");

	smnd.hide();
	smnf.hide();
	smnp.hide();
	apcn.hide();
	snpcn.hide();
	keywin.hide();
	keyoffice.hide();
	csmvn.hide();
	csmnln.hide();
	smn.hide();
	amn.hide();
	snmn.hide();
	$(".selectTipMaqN").live("change",function () {
		var selValue = $(this).val();
		switch(selValue)
        {
			case "":
					smnd.slideUp();smnf.slideUp();smnp.slideUp();
					smnd.removeAttr("required").val(""); smnf.removeAttr("required").val(""); smnp.removeAttr("required").val("");
					apcn.slideUp();snpcn.slideUp();csmvn.slideUp();csmnln.slideUp();
					apcn.removeAttr("required").val(""); snpcn.removeAttr("required").val(""); csmvn.removeAttr("required").val(""); csmnln.removeAttr("required").val("");
					smn.slideUp();amn.slideUp();snmn.slideUp();
					smn.removeAttr("required").val(""); amn.removeAttr("required").val(""); snmn.removeAttr("required").val("");
			break;
            case "PC Completo":
                    smnd.attr("required","required");
            		apcn.attr("required","required");
            		snpcn.attr("required","required");
            		smn.attr("required","required");
            		amn.attr("required","required");
            		snmn.attr("required","required");
            		smnd.slideDown();smnf.slideUp();smnp.slideUp();
            		smnf.removeAttr("required").val(""); smnp.removeAttr("required").val("");
					apcn.slideDown();snpcn.slideDown();
					csmvn.slideUp();csmnln.slideUp();
					csmvn.removeAttr("required").val(""); csmnln.removeAttr("required").val(""); csmvn.attr("checked", false);
					smn.slideDown();amn.slideDown();snmn.slideDown();
            break;
			case "Futro": 
			        smnf.attr("required","required");
            		apcn.attr("required","required");
            		snpcn.attr("required", "required");
            		smnd.removeAttr("required").val("");
					smnf.slideDown();smnd.slideUp();smnp.slideUp();
					apcn.slideDown();snpcn.slideDown();
					csmnln.slideDown(); csmvn.slideDown(); 
					smn.slideUp(); amn.slideUp(); snmn.slideUp(); csmvn.attr("checked", false);
					smn.removeAttr("required").val(""); amn.removeAttr("required").val(""); snmn.removeAttr("required").val("");
					csmvn.click(function(){
						if ($(this).is(':checked')){
							smn.attr("required","required");
							amn.attr("required","required");
            				snmn.attr("required","required");
							smn.slideDown();amn.slideDown();snmn.slideDown();
						}else{
							smn.slideUp();amn.slideUp();snmn.slideUp();
							smn.removeAttr("required").val("");
							amn.removeAttr("required").val("");
							snmn.removeAttr("required").val("");
						}
					});
            break;
			case "Laptop": 
			        smnp.attr("required","required");
            		apcn.attr("required","required");
            		snpcn.attr("required","required");
					smnd.slideUp();smnf.slideUp();smnp.slideDown();
					smnd.removeAttr("required").val(""); smnf.removeAttr("required").val("");
					apcn.slideDown();snpcn.slideDown();
					csmnln.slideDown(); csmvn.slideDown(); 
					smn.slideUp(); amn.slideUp(); snmn.slideUp(); csmvn.attr("checked", false);
					smn.removeAttr("required").val(""); amn.removeAttr("required").val(""); snmn.removeAttr("required").val("");
					if (smnp.change(function(){
                        thisVal = $(this).val();
                        if ((thisVal == "Lifebook A544") || (thisVal == "Lifebook AH552") || (thisVal == "Lifebook A532") || (thisVal == "Lifebook UH552") || (thisVal == "Lifebook AH532")) {
                            keywin.slideDown();
                            keyoffice.slideDown();
                            keywin.attr("required", "required");
                            keyoffice.attr("required", "required");
					    };
					}));
					csmvn.click(function(){
						if ($(this).is(':checked')){
							smn.slideDown();amn.slideDown();snmn.slideDown();
							smn.attr("required","required");
            				amn.attr("required","required");
            				snmn.attr("required","required");
						}else {
							smn.slideUp();amn.slideUp();snmn.slideUp();
							smn.removeAttr("required").val("");
							amn.removeAttr("required").val("");
							snmn.removeAttr("required").val("");
						}
					});
            break;
			case "Desktop": 
					smnd.attr("required","required");
            		apcn.attr("required","required");
            		snpcn.attr("required","required");
					smnd.slideDown();smnf.slideUp();smnp.slideUp();
					smnf.removeAttr("required").val(""); smnp.removeAttr("required").val("");
					apcn.slideDown();snpcn.slideDown();
					csmvn.slideUp();csmnln.slideUp();
					csmvn.removeAttr("required").val(""); csmnln.removeAttr("required").val(""); csmvn.attr("checked", false);
					smn.slideUp();amn.slideUp();snmn.slideUp();
					smn.removeAttr("required").val(""); amn.removeAttr("required").val(""); snmn.removeAttr("required").val("");
            break;
			case "Monitor": 
					smn.attr("required","required");
            		amn.attr("required","required");
            		snmn.attr("required", "required");
            		smnp.removeAttr("required").val("");
            		smnd.removeAttr("required").val("");
            		smnf.removeAttr("required").val("");
            		apcn.removeAttr("required").val("");
            		snpcn.removeAttr("required").val("");
					smnd.slideUp();smnf.slideUp();smnp.slideUp();
					apcn.slideUp();snpcn.slideUp();
					csmnln.slideUp(); csmvn.slideUp(); csmvn.attr("checked", false);
					smn.slideDown();amn.slideDown();snmn.slideDown();
            break;
            default: selValue = "";
			break;
        }
	});

	$("select").mouseover(function () {
		$(this).addClass("overInput");
	}).mouseout(function(){
		$(this).removeClass("overInput");
	});
	$("table#listagem tbody tr th").mouseover(function () {
		$(this).closest("tr").children().addClass("table");
	}).mouseout(function(){
		$(this).closest("tr").children().removeClass("table");
	});
	$("div.tooltip").remove();
	$("table#listagem tbody tr td").mouseover(function (e) {
		$(this).closest("tr").children().addClass("table");
		$('<div class="tooltip">Clique para expandir!</div>').appendTo("body");
		$('div.tooltip').css('top', e.pageY + 10 );
        $('div.tooltip').css('left', e.pageX + 20 );
        $('div.tooltip').fadeIn('500');
        $('div.tooltip').fadeTo('10',0.8);
	}).mouseout(function(){
		$(this).closest("tr").children().removeClass("table");
		$("div.tooltip").remove();
	}).mousemove(function(){
		$('div.tooltip').css('top', e.pageY + 10 );
        $('div.tooltip').css('left', e.pageX + 20 );
	});

	$("tr.toggleData").hide();


	//function handler(event) {
  	//	var _target = $(event.target);
  	//	if (_target.is("td")) {
  	//		var _toggleData = _target.closest("tr").next();
  	//		var _toggleImg = _target.parent().find("td.imgexpand");
  	//		_toggleData.toggle();
  	//		if (_toggleData.is (":visible") === true){
  	//			_toggleImg.find("img").attr("src","img/expand-up.png");
  	//		}else{
	//			_toggleImg.find("img").attr("src","img/expand-down.png");
  	//		}
  	//	}
	//}


	
	//$("table#listagem tbody tr td").live("click",handler);
})