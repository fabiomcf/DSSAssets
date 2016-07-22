$(document).ready(function(){
	//var sessionUser = sessionStorage.user;
	//if (sessionUser == null){
	//	redirectPage("/");
	//}else{
 	$("body").hide();
	  var sessionUser = sessionStorage.user;
    if (sessionUser == null) {
        redirectPage("/DSSAssets/");
    } else {
		if (sessionStorage.user == "user"){
			$("input#addasset").hide();
			$("input#regUser").hide();
			
		}
		console.log(sessionStorage.user);
		$("body").fadeIn("slow");	
		$("#logMessage").hide();
		$('#listagemtotal').slimScroll({
			color: '#DF0101',
			height: '700px',
			alwaysVisible: true,
			railVisible: true
		});
		//$("#listagemtotal").hide();
		$("#loading").hide();
		$("#loading2").hide();
		$("#logAsset").hide();
		$("#logAssetError").hide();
		$("#logMessageError p").hide();
		$("#dialog-confirm").hide();
		$("#dialog-message").hide();
		$("#dialog-message-error").hide();
		$("#dialog-message-asset").hide();
		$("#dialog-message-editasset").hide();
		$("#dialog-message-editerror").hide();


		$("#data_enc").datepicker({ dateFormat: 'dd-mm-yy' });
		$("#data").datepicker({ dateFormat: 'dd-mm-yy' });

		$.ajaxSetup ({
			cache: false
		});
		function redirectPage(link) {
			window.location.href = link;
		};
		$("#search").prop("type", "search").prop("id", "pesq").prop("required", "true");
		//$("#AssetPCVelho").prop("id", "assetpcv").prop("placeholder", "Asset").hide();
		//$("#SerialPCVelho").prop("id", "serialpcv").prop("placeholder", "Serial").hide();

		$("#logout").click(function(event){
			event.preventDefault();
			$(function () {
			   // $("#dialog-confirm").attr("title", "Sair?");
				$("#dialog-confirm p").text("Tem a certeza que pretende sair?");
				$("#dialog-confirm").dialog({
					title: "Sair?",
					modal: true,
					buttons: {
						Sim: function () {
							sessionStorage.clear();
							redirectPage("/DSSAssets/");
							$(this).dialog("close");
						},
						Nao: function () {
							$(this).dialog("close");
						}
					}
				});
			});
			//var box = confirm("Tem a certeza que pretende sair?");
			//if (box){
			//	sessionStorage.clear();
			//	redirectPage("/");
			//}
		});
		//$("#submitasset").live("click", function () {
		$("#formasset").live("submit", function (e) {
			e.preventDefault();
			var modelpcv = "";
			var modelpcn = "";
			var comsemMonitorV = "";
			var comsemMonitorN = "";
			var result = "";
			var mail = "Mail de teste";

			if ($("#selectModelVDesktops").val() != "") { modelpcv = $("#selectModelVDesktops").val() };
			if ($("#selectModelVFutros").val() != "") { modelpcv = $("#selectModelVFutros").val() };
			if ($("#selectModelVPortateis").val() != "") { modelpcv = $("#selectModelVPortateis").val() };

			if ($("#selectModelNDesktops").val() != "") { modelpcn = $("#selectModelNDesktops").val() };
			if ($("#selectModelNFutros").val() != "") { modelpcn = $("#selectModelNFutros").val() };
			if ($("#selectModelNPortateis").val() != "") { modelpcn = $("#selectModelNPortateis").val() };

			if ($("#comsemMonitorV").prop("checked")) { comsemMonitorV = $("#comsemMonitorV").val() };
			if ($("#comsemMonitorN").prop("checked")) { comsemMonitorN = $("#comsemMonitorN").val() };
			
			result += "<table id='listagem'>" +
						 "<tr id='caption'><th colspan='2'>Dados Pessoais</th></tr>" +
						 "<tr><th>Numero Encomenda</th><td>" + $("#num_enc").val() + "</td></tr>" +
						 "<tr><th>Data Encomenda</th><td>" + $("#data_enc").val() + "</td></tr>" +
						 "<tr><th>User AD</th><td>" + $("#userad").val() + "</td></tr>" +
						 "<tr><th>Nome</th><td>" + $("#nome").val() + "</td></tr>" +
						 "<tr><th>Sobrenome</th><td>" + $("#sobrenome").val() + "</td></tr>" +
						 "<tr><th>Companhia</th><td>" + $("#companhia").val() + "</td></tr>" +
						 "<tr><th>Local</th><td>" + $("#local").val() + "</td></tr>" +
						 "<tr><th>Ext</th><td>" + $("#ext").val() + "</td></tr>" +
						 "<tr><th>Tlm</th><td>" + $("#tlm").val() + "</td></tr>" +
						 "<tr><th>Piso</th><td>" + $("#piso").val() + "</td></tr>" +
						 "<tr id='caption'><th colspan='2'>" + $("#selectD").val() + "</th></tr>" +
						 "<tr id='pcnovo'><th>Tipo de Maquina Nova</th><td>" + $("#selectTipMaqN").val() + "</td></tr>" +
						 "<tr id='pcnovo'><th>Modelo</th><td>" + modelpcn + "</td></tr>" +
						 "<tr id='pcnovo'><th>Asset</th><td>" + $("#assetpcn").val() + "</td></tr>" +
						 "<tr id='pcnovo'><th>Serial</th><td>" + $("#serialpcn").val() + "</td></tr>" +
						 "<tr id='pcnovo'><th>Chave Office</th><td>" + $("#KeyWindows").val() + "</td></tr>" +
						 "<tr id='pcnovo'><th>Chave Windows</th><td>" + $("#KeyOffice").val() + "</td></tr>" +
						 "<tr id='pcnovo'><th>Com monitor?</th><td>" + comsemMonitorN + "</td></tr>" +
						 "<tr id='pcnovo'><th>Modelo</th><td>" + $("#selectMN").val() + "</td></tr>" +
						 "<tr id='pcnovo'><th>Asset</th><td>" + $("#assetmn").val() + "</td></tr>" +
						 "<tr id='pcnovo'><th>Serial</th><td>" + $("#serialmn").val() + "</td></tr>" +
						 "<tr id='pcvelho'><th>Tipo Maquina Velha</th><td>" + $("#selectTipMaqV").val() + "</td></tr>" +
						 "<tr id='pcvelho'><th>Modelo</th><td>" + modelpcv + "</td></tr>" +
						 "<tr id='pcvelho'><th>Asset</th><td>" + $("#assetpcv").val() + "</td></tr>" +
						 "<tr id='pcvelho'><th>Serial</th><td>" + $("#serialpcv").val() + "</td></tr>" +
						 "<tr id='pcvelho'><th>Com monitor?</th><td>" + comsemMonitorV + "</td></tr>" +
						 "<tr id='pcvelho'><th>Modelo</th><td>" + $("#selectMV").val() + "</td></tr>" +
						 "<tr id='pcvelho'><th>Asset</th><td>" + $("#assetmv").val() + "</td></tr>" +
						 "<tr id='pcvelho'><th>Serial</th><td>" + $("#serialmv").val() + "</td></tr>" +
						 "<tr id='caption'><th colspan='2'>Dados Tecnicos</th></tr>" +
						 "<tr><th>Tecnico Responsavel</th><td>" + $("#tec").val() + "</td></tr>" +
						 "<tr><th>Data</th><td>" + $("#data").val() + "</td></tr>" +
						 "<tr><th>CH</th><td>" + $("#CH").val() + "</td></tr>" +
						 "<tr><th>Nota SAP</th><td>" + $("#notasap").val() + "</td></tr>" +
						 "<tr><th>Status</th><td>" + $("#status").val() + "</td></tr>" +
						 "<tr><th>Obs</th><td>" + $("#obs").val() + "</td></tr>" +
						 "</table>";
			//$(result).each(function () {
			//    if ($(this).text().trim() == "") {
			//        $(this).parent().closest("tr").remove();
			//    }
			//});
			$.ajax({
				url: "/DSSAssets/Home/GravarAsset",
				//selectModelVDesktops: $("#selectModelVDesktops").val(),
				//selectModelVFutros: $("#selectModelVFutros").val(),
				//selectModelVPortateis: $("#selectModelVPortateis").val(),
				//selectModelNDesktops: $("#selectModelNDesktops").val(),
				//selectModelNFutros: $("#selectModelNFutros").val(),
				//selectModelNPortateis: $("#selectModelNPortateis").val(),

				data: {
					num_enc: $("#num_enc").val(),
					data_enc: $("#data_enc").val(),
					userad: $("#userad").val(),
					nome: $("#nome").val(),
					sobrenome: $("#sobrenome").val(),
					companhia: $("#companhia").val(),
					local: $("#local").val(),
					ext: $("#ext").val(),
					tlm: $("#tlm").val(),
					piso: $("#piso").val(),
					decMaq: $("#selectD").val(),
					selectTipMaqV: $("#selectTipMaqV").val(),
					modelpcv: modelpcv,
					assetpcv: $("#assetpcv").val(),
					serialpcv: $("#serialpcv").val(),
					comsemMonitorV: comsemMonitorV,
					selectMV: $("#selectMV").val(),
					assetmv: $("#assetmv").val(),
					serialmv: $("#serialmv").val(),
					selectTipMaqN: $("#selectTipMaqN").val(),
					modelpcn: modelpcn,
					assetpcn: $("#assetpcn").val(),
					serialpcn: $("#serialpcn").val(),
					KeyWindows: $("#KeyWindows").val(),
					KeyOffice: $("#KeyOffice").val(),
					comsemMonitorN: comsemMonitorN,
					selectMN: $("#selectMN").val(),
					assetmn: $("#assetmn").val(),
					serialmn: $("#serialmn").val(),
					tecnicoresp: $("#tec").val(),
					data: $("#data").val(),
					CH: $("#CH").val(),
					notasap: $("#notasap").val(),
					status: $("#status").val(),
					obs: $("#obs").val()
				},
				datatype: JSON,
				type: "POST",
				success: function(output)
				{
					if (output == "true") {
						$("#logAsset").show();
						$(function () {
							$("#dialog-message-asset").dialog({
								modal: true,
								buttons: {
									Ok: function () {
										$(this).dialog("close");
									}
								}
							});
						});
						return true;
					} else {
						$("#logAssetError").append(output);
						$("#logAssetError").show();
					}
				},
				error: function (output) {
					$("#logAssetError").show();
					console.log(output);
					console.log("false");
				}
			});
			return false;
		});   
			
		$("#btnpesqreg").live("click", function () {
			
			if ($("#pesq").val() == "") {
				$("#logMessageError p").slideDown();
			} else {
				$("#logMessageError p").hide();
				var result = "";
				$("#loading2").show();
				$.ajax({
					type: "POST",
					url: "/DSSAssets/Home/Search",
					data: {
						pesq: $("#pesq").val()
					},
					dataType: "json",
					success: function (output) {
						$.each(output, function (i, item) {
							result += "<table id='listagem'>" +
							"<tr id='icons'><th></th><td><span id='invisible'>.</span><a href='#' id='editreg'><img src='../Content/img/edit.png' alt='edit' /><a href='#' id='apagareg'><img src='../Content/img/wrong.gif' alt='delete' /></a></td></tr>" +
							"<tr id='caption'><th colspan='2'>Dados Pessoais</th></tr>" +
							"<tr id='registo'><th>Registo</th><td id='regnum'>" + item.ID + "</td></tr>" +
							"<tr><th>Numero Encomenda</th><td><input readonly type='text' id='_num_enc' value='" + item.NumeroEncomenda + "' /></td></tr>" +
							"<tr><th>Data Encomenda</th><td><input readonly type='text' id='_data_enc' value='" + item.DataEncomenda + "' /></td></tr>" +
							"<tr><th>User AD</th><td><input readonly type='text' id='_userad' value='" + item.UserAD + "' /></td></tr>" +
							"<tr><th>Nome</th><td><input readonly type='text' id='_nome' value='" + item.Nome + "' /></td></tr>" +
							"<tr><th>Sobrenome</th><td><input readonly type='text' id='_sobrenome' value='" + item.Sobrenome + "' /></td></tr>" +
							"<tr><th>Companhia</th><td><input readonly type='text' id='_companhia' value='" + item.Companhia + "' /></td></tr>" +
							"<tr><th>Local</th><td><input readonly type='text' id='_local' value='" + item.Local + "' /></td></tr>" +
							"<tr><th>Ext</th><td><input readonly type='text' id='_ext' value='" + item.Ext + "' /></td></tr>" +
							"<tr><th>Tlm</th><td><input readonly type='text' id='_tlm' value='" + item.Tlm + "' /></td></tr>" +
							"<tr><th>Piso</th><td><input readonly type='text' id='_piso' value='" + item.Piso + "' /></td></tr>" +
							"<tr id='caption'><th colspan='2'><input readonly type='text' id='_selectD' value='" + item.DeclaracaoMaquina + "' /></th></tr>" +
							"<tr id='pcnovo'><th>Tipo de Maquina Nova</th><td><input readonly type='text' id='_selectTipMaqN' value='" + item.TipoMaquinaNova + "' /></td></tr>" +
							"<tr id='pcnovo'><th>Modelo</th><td><input readonly type='text' id='_modelpcn' value='" + item.ModeloPCNovo + "' /></td></tr>" +
							"<tr id='pcnovo'><th>Asset</th><td><input readonly type='text' id='_assetpcn' value='" + item.AssetPCNovo + "' /></td></tr>" +
							"<tr id='pcnovo'><th>Serial</th><td><input readonly type='text' id='_serialpcn' value='" + item.SerialPCNovo + "' /></td></tr>" +
							"<tr id='pcnovo'><th>Chave Windows</th><td><input readonly type='text' id='_chavewin' value='" + item.ChaveWindows + "' /></td></tr>" +
							"<tr id='pcnovo'><th>Chave Office</th><td><input readonly type='text' id='_chaveoff' value='" + item.ChaveOffice + "' /></td></tr>" +
							"<tr id='pcnovo'><th>Com monitor?</th><td><input readonly type='text' id='_csmonitorn' value='" + item.comsemMonitorN + "' /></td></tr>" +
							"<tr id='pcnovo'><th>Modelo</th><td><input readonly type='text' id='_modelmn' value='" + item.ModeloMonitorNovo + "' /></td></tr>" +
							"<tr id='pcnovo'><th>Asset</th><td><input readonly type='text' id='_assetmn' value='" + item.AssetMonitorNovo + "' /></td></tr>" +
							"<tr id='pcnovo'><th>Serial</th><td><input readonly type='text' id='_serialmn' value='" + item.SerialMonitorNovo + "' /></td></tr>" +
							"<tr id='pcvelho'><th>Tipo Maquina Velha</th><td><input readonly type='text' id='_selectTipMaqV' value='" + item.TipoMaquinaVelha + "' /></td></tr>" +
							"<tr id='pcvelho'><th>Modelo</th><td><input readonly type='text' id='_modelpcv' value='" + item.ModeloPCVelho + "' /></td></tr>" +
							"<tr id='pcvelho'><th>Asset</th><td><input readonly type='text' id='_assetpcv' value='" + item.AssetPCVelho + "' /></td></tr>" +
							"<tr id='pcvelho'><th>Serial</th><td><input readonly type='text' id='_serialpcv' value='" + item.SerialPCVelho + "' /></td></tr>" +
							"<tr id='pcvelho'><th>Com monitor?</th><td><input readonly type='text' id='_csmonitorv' value='" + item.comsemMonitorV + "' ></td></tr>" +
							"<tr id='pcvelho'><th>Modelo</th><td><input readonly type='text' id='_modelmv' value='" + item.ModeloMonitorVelho + "' /></td></tr>" +
							"<tr id='pcvelho'><th>Asset</th><td><input readonly type='text' id='_assetmv' value='" + item.AssetMonitorVelho + "' /></td></tr>" +
							"<tr id='pcvelho'><th>Serial</th><td><input readonly type='text' id='_serialmv' value='" + item.SerialMonitorVelho + "' /></td></tr>" +
							"<tr id='caption'><th colspan='2'>Dados Tecnicos</th></tr>" +
							"<tr><th>Tecnico Responsavel</th><td><input readonly type='text' id='_tecresp' value='" + item.TecnicoResp + "' /></td></tr>" +
							"<tr><th>Data</th><td><input readonly type='text' id='_data' value='" + item.Data + "' /></td></tr>" +
							"<tr><th>CH</th><td><input readonly type='text' id='_ch' value='" + item.CH + "' /></td></tr>" +
							"<tr><th>Nota SAP</th><td><input readonly type='text' id='_notasap' value='" + item.NotaSAP + "' /></td></tr>" +
							"<tr><th>Status</th><td><input readonly type='text' id='_status' value='" + item.Status + "' /></td></tr>" +
							"<tr><th>Obs</th><td><input readonly type='text' id='_obs' value='" + item.Obs + "' /></td></tr>" +
							"<tr id='saveedittr'><th><input type='button' type='text' id='saveedit' class='saveedit' name='saveedit' value='GRAVAR' style='display:none' /></th></tr>" +
							"</table>";
						});
						$("#loading2").hide();
						$("#logMessageSearch").html(result);
						$("#saveedit").hide();
						$("#logMessageSearch table#listagem td").each(function () {
							var inputval = $(this).find(":input").val();
							//console.log(inputval);
							if ((inputval == "") || (inputval == "undefined") || (inputval == "null") || (inputval == "N/A")) {
						  //  if (($(this).text().trim() == "") || ($(this).text() == "undefined")) {
								$(this).parent().closest("tr").remove();
							}
						});
						if (sessionStorage.user == "user"){
							//console.log($("#logMessageSearch").find("tr#icons").html());
							$("#logMessageSearch").find("tr#icons").hide();
						}
						if (output.length == 0) {
							$("#logMessageError p").slideDown();
						};
						$("#logMessageSearch").slideDown("slow");
						//console.log(output.length);
					},
					error: function (output) {
						$("#logMessageSearch").text("ERRO:" + output.status + " " + output.statusText);
						$("#logMessageSearch").hide();
						$("#logMessageSearch").slideDown("slow");
						//console.log("ERRO:" + output.status + " " + output.statusText);
					}
			
				});
			};
			return false;
		});
		$("#editreg").live("click", function () {
			$("#logMessageSearch table#listagem td").each(function () {
				//var inputval = $(this).find(":input").val();
				$(this).find(":input").attr("readonly", false);
			//	$("#saveedit").show();
				$(".saveedit").show();

			});
			
		});
		$("#saveedit").live("click", function () {
			$.ajax({
				url: "/DSSAssets/Home/EditaAsset",
				//selectModelVDesktops: $("#selectModelVDesktops").val(),
				//selectModelVFutros: $("#selectModelVFutros").val(),
				//selectModelVPortateis: $("#selectModelVPortateis").val(),
				//selectModelNDesktops: $("#selectModelNDesktops").val(),
				//selectModelNFutros: $("#selectModelNFutros").val(),
				//selectModelNPortateis: $("#selectModelNPortateis").val(),

				data: {
					id: $(this).closest("table#listagem").find("td#regnum").text(),
					num_enc: $(this).closest("table#listagem").find("#_num_enc").val(),
					data_enc: $(this).closest("table#listagem").find("#_data_enc").val(),
					userad: $(this).closest("table#listagem").find("#_userad").val(),
					nome: $(this).closest("table#listagem").find("#_nome").val(),
					sobrenome: $(this).closest("table#listagem").find("#_sobrenome").val(),
					companhia: $(this).closest("table#listagem").find("#_companhia").val(),
					local: $(this).closest("table#listagem").find("#_local").val(),
					ext: $(this).closest("table#listagem").find("#_ext").val(),
					tlm: $(this).closest("table#listagem").find("#_tlm").val(),
					piso: $(this).closest("table#listagem").find("#_piso").val(),
					decMaq: $(this).closest("table#listagem").find("#_selectD").val(),
					selectTipMaqV: $(this).closest("table#listagem").find("#_selectTipMaqV").val(),
					modelpcv: $(this).closest("table#listagem").find("#_modelpcv").val(),
					assetpcv: $(this).closest("table#listagem").find("#_assetpcv").val(),
					serialpcv: $(this).closest("table#listagem").find("#_serialpcv").val(),
					comsemMonitorV: $(this).closest("table#listagem").find("#_csmonitorv").val(),
					selectMV: $(this).closest("table#listagem").find("#_selectMV").val(),
					assetmv: $(this).closest("table#listagem").find("#_assetmv").val(),
					serialmv: $(this).closest("table#listagem").find("#_serialmv").val(),
					selectTipMaqN: $(this).closest("table#listagem").find("#_selectTipMaqN").val(),
					modelpcn: $(this).closest("table#listagem").find("#_modelpcn").val(),
					assetpcn: $(this).closest("table#listagem").find("#_assetpcn").val(),
					serialpcn: $(this).closest("table#listagem").find("#_serialpcn").val(),
					keywindows: $(this).closest("table#listagem").find("#_chavewin").val(),
					keyoffice: $(this).closest("table#listagem").find("#_chaveoff").val(),
					comsemMonitorN: $(this).closest("table#listagem").find("#_csmonitorn").val(),
					selectMN: $(this).closest("table#listagem").find("#_selectMN").val(),
					assetmn: $(this).closest("table#listagem").find("#_assetmn").val(),
					serialmn: $(this).closest("table#listagem").find("#_serialmn").val(),
					tecnicoresp: $(this).closest("table#listagem").find("#_tecresp").val(),
					data: $(this).closest("table#listagem").find("#_data").val(),
					CH: $(this).closest("table#listagem").find("#_ch").val(),
					notasap: $(this).closest("table#listagem").find("#_notasap").val(),
					status: $(this).closest("table#listagem").find("#_status").val(),
					obs: $(this).closest("table#listagem").find("#_obs").val()
				},
				datatype: JSON,
				type: "POST",
				success: function (output) {
					console.log($("#num_enc").val());
					if (output == "true") {
						//$("#logAsset").show();
						$(function () {
							$("#dialog-message-editasset").dialog({
								modal: true,
								buttons: {
									Ok: function () {
										$(this).dialog("close");
									}
								}
							});
						});
						return true;
					} else {
						$(function () {
							$("#dialog-message-editerror p").append(output);
							$("#dialog-message-editerror").dialog({
								modal: true,
								buttons: {
									Ok: function () {
										$(this).dialog("close");
									}
								}
							});
						});
					}
				},
				error: function (output) {
					$(function () {
						$("#dialog-message-editerror p").text(output);
						$("#dialog-message-editerror").dialog({
							modal: true,
							buttons: {
								Ok: function () {
									$(this).dialog("close");
								}
							}
						});
					});
				//    $("#logAssetError").show();
					console.log(output);
					console.log("false");
				}
			});
			//console.log($(this).closest("table#listagem").find("#_data").val());
			return false;
		});
		$("#listreg").live("click", function () {
			var result = "";
			//$("#listagemtotal").empty();
			$("#loading").show();
			$("#loading").html("A CARREGAR AGUARDE...");
			$.ajax({
				type: "POST",
				url: "/DSSAssets/Home/ListagemTotal",
				dataType: "json",
				success: function (output) {
					$.each(output, function (i, item) {
						result += "<table id='listagem'>" +
						"<tr id='icons'><th></th><td><span id='invisible'>.</span><a href='#' id='apagareg'><img src='../Content/img/wrong.gif' alt='delete' /></a></td></tr>" +
						"<tr id='caption'><th colspan='2'>Dados Pessoais</th></tr>" +
						"<tr id='registo'><th>Registo</th><td id='regnum'>" + item.ID + "</td></tr>" +
						"<tr><th>Numero Encomenda</th><td>"+item.NumeroEncomenda+"</td></tr>" +
						"<tr><th>Data Encomenda</th><td>" + item.DataEncomenda + "</td></tr>" +
						"<tr><th>User AD</th><td>" + item.UserAD + "</td></tr>" +
						"<tr><th>Nome</th><td>" + item.Nome + "</td></tr>" +
						"<tr><th>Sobrenome</th><td>" + item.Sobrenome + "</td></tr>" +
						"<tr><th>Companhia</th><td>" + item.Companhia + "</td></tr>" +
						"<tr><th>Local</th><td>" + item.Local + "</td></tr>" +
						"<tr><th>Ext</th><td>" + item.Ext + "</td></tr>" +
						"<tr><th>Tlm</th><td>" + item.Tlm + "</td></tr>" +
						"<tr><th>Piso</th><td>" + item.Piso + "</td></tr>" +
						"<tr id='caption'><th colspan='2'>" + item.DeclaracaoMaquina + "</th></tr>" +
						"<tr id='pcnovo'><th>Tipo de Maquina Nova</th><td>" + item.TipoMaquinaNova + "</td></tr>" +
						"<tr id='pcnovo'><th>Modelo</th><td>" + item.ModeloPCNovo + "</td></tr>" +
						"<tr id='pcnovo'><th>Asset</th><td>" + item.AssetPCNovo + "</td></tr>" +
						"<tr id='pcnovo'><th>Serial</th><td>" + item.SerialPCNovo + "</td></tr>" +
						"<tr id='pcnovo'><th>Chave Windows</th><td>" + item.ChaveWindows + "</td></tr>" +
						"<tr id='pcnovo'><th>Chave Office</th><td>" + item.ChaveOffice + "</td></tr>" +
						"<tr id='pcnovo'><th>Com monitor?</th><td>" + item.comsemMonitorN + "</td></tr>" +
						"<tr id='pcnovo'><th>Modelo</th><td>" + item.ModeloMonitorNovo + "</td></tr>" +
						"<tr id='pcnovo'><th>Asset</th><td>" + item.AssetMonitorNovo + "</td></tr>" +
						"<tr id='pcnovo'><th>Serial</th><td>" + item.SerialMonitorNovo + "</td></tr>" +
						"<tr id='pcvelho'><th>Tipo Maquina Velha</th><td>" + item.TipoMaquinaVelha + "</td></tr>" +
						"<tr id='pcvelho'><th>Modelo</th><td>" + item.ModeloPCVelho + "</td></tr>" +
						"<tr id='pcvelho'><th>Asset</th><td>" + item.AssetPCVelho + "</td></tr>" +
						"<tr id='pcvelho'><th>Serial</th><td>" + item.SerialPCVelho + "</td></tr>" +
						"<tr id='pcvelho'><th>Com monitor?</th><td>" + item.comsemMonitorV + "</td></tr>" +
						"<tr id='pcvelho'><th>Modelo</th><td>" + item.ModeloMonitorVelho + "</td></tr>" +
						"<tr id='pcvelho'><th>Asset</th><td>" + item.AssetMonitorVelho + "</td></tr>" +
						"<tr id='pcvelho'><th>Serial</th><td>" + item.SerialMonitorVelho + "</td></tr>" +
						"<tr id='caption'><th colspan='2'>Dados Tecnicos</th></tr>" +
						"<tr><th>Tecnico Responsavel</th><td>" + item.TecnicoResp + "</td></tr>" +
						"<tr><th>Data</th><td>" + item.Data + "</td></tr>" +
						"<tr><th>CH</th><td>" + item.CH + "</td></tr>" +
						"<tr><th>Nota SAP</th><td>" + item.NotaSAP + "</td></tr>" +
						"<tr><th>Status</th><td>" + item.Status + "</td></tr>" +
						"<tr><th>Obs</th><td>" + item.Obs + "</td></tr>" +
						"</table>";
					});
					$("#listagemtotal").html(result);
					
					$("#listagemtotal table#listagem td").each(function () {
						if (($(this).text() == "") || ($(this).text() == "null") || ($(this).text() == "undefined") || ($(this).text() == "N/A")) {
							$(this).parent().closest("tr").remove();
						}
					});
					$("#loading").hide();
					$("#listagemtotal table#listagem tr#registo").nextAll("tr").hide();
					if (sessionStorage.user == "user"){
						//console.log($("#listagemtotal").find("tr#icons").html());
						$("#listagemtotal").find("tr#icons").hide();
					}
					$("#listagemtotal").slideDown("slow");
					$("#listagemtotal table#listagem tr#registo").live("click", function () {
						$(this).nextAll("tr").toggle();
					});
					//console.log(result);
				},
				error: function (output) {
						$("#listagemtoda").text("ERRO:" + output.status + " " + output.statusText);
						$("#listagemtoda").hide();
						$("#listagemtoda").slideDown("slow");
						console.log("ERRO:" + output.status + " " + output.statusText);
					}
			});
			return false;
		});

		$("#apagareg").live("click", function (e) {
			e.preventDefault();
			//var target = $(e.target);
			var regid = $(this).closest("tr").parent().find("td#regnum").text();
			console.log($(this).closest("tr").parent().find("td#regnum").text());
			$(function () {
				//$("#dialog-confirm").attr("title", "Eliminar?");
				$("#dialog-confirm").dialog({
					title: "Eliminar?",
					resizable: false,
					height: 140,
					modal: true,
					buttons: {
						"Apagar": function () {
							// $(this).dialog("close");
							$.ajax({
								type: "POST",
								url: "/DSSAssets/Home/ApagarRegisto",
								//dataType: "json",
								data: {
									id: regid
								},
								success: function (output) {
									if (output = true) {
										//$("#dialog-message p").text(output);
										$(function () {
											$("#dialog-message").dialog({
												modal: true,
												buttons: {
													Ok: function () {
														$(this).dialog("close");
													}
												}
											});
										});
										$("#listreg").click();
										$("#logMessageSearch").empty();
									} else {
										$(function () {
											$("#dialog-message-error p").text(output);
											$("#dialog-message-error").dialog({
												modal: true,
												buttons: {
													Ok: function () {
														$(this).dialog("close");
													}
												}
											});
										});
									}
									console.log(regid + " Apagado");
								},
								error: function (output) {
									$("#dialog-message-error p").text(output);
									$(function () {
										$("#dialog-message-error").dialog({
											modal: true,
											buttons: {
												Ok: function () {
													$(this).dialog("close");
												}
											}
										});
									});
									console.log("ERRO:" + output.status + " " + output.statusText);
								}
							});
							$(this).dialog("close");
						},
						"Cancelar": function () {
							$(this).dialog("close");
						}
					}
				});
			});
			return false;
		});
		

		//function handler(event) {
		//    var _target = $(event.target);
		//    if (_target.is("td")) {
		//        var _toggleData = _target.closest("tr").next();
				//var _toggleImg = _target.parent().find("td.imgexpand");
				//_toggleData.toggle();
				//if (_toggleData.is(":visible") === true) {
				//    _toggleImg.find("img").attr("src", "img/expand-up.png");
				//} else {
				//    _toggleImg.find("img").attr("src", "img/expand-down.png");
				//}
		//    }
		//}

		

		//$("div.tooltip").remove();
		//$("#listagemtotal table#listagem tr").mouseover(function (e) {
		//    $(this).closest("tr").children().addClass("table");
		//    $('<div class="tooltip">Clique para expandir!</div>').appendTo("body");
		//    $('div.tooltip').css('top', e.pageY + 10);
		//    $('div.tooltip').css('left', e.pageX + 20);
		//    $('div.tooltip').fadeIn('500');
		//    $('div.tooltip').fadeTo('10', 0.8);
		//}).mouseout(function () {
		//    $(this).closest("tr").children().removeClass("table");
		//    $("div.tooltip").remove();
		//}).mousemove(function () {
		//    $('div.tooltip').css('top', e.pageY + 10);
		//    $('div.tooltip').css('left', e.pageX + 20);
		//});

		//$("tr.toggleData").hide();
	}
})

