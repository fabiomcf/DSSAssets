using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DSSAssets.Models;
using System.Net.Mail;
using System.Text.RegularExpressions;
using System.IO;

namespace DSSAssets.Controllers
{
    public class HomeController : Controller
    {

        //
        // GET: /Home/

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Main()
        {
            return View();
        }


        public string Login(string user, string pass)
        {
            LoginClass log = new LoginClass();
            return log.LoginValidation(user,pass);
        }

        public ActionResult Search(string pesq)
        {
            AssetsClass asset = new AssetsClass();
            return Json(asset.SearchAsset(pesq));
        }

        public ActionResult ListagemTotal()
        {
            AssetsClass asset = new AssetsClass();
            return Json(asset.ListarTodos());
        }

        public string GravarAsset(string num_enc, string data_enc, string userad, string nome, string sobrenome, string companhia, string local, string ext, string tlm, string piso, string decMaq, string selectTipMaqV, string modelpcv, string assetpcv, string serialpcv, string comsemMonitorV, string selectMV, string assetmv, string serialmv, string selectTipMaqN, string modelpcn, string assetpcn, string serialpcn, string KeyWindows, string KeyOffice, string comsemMonitorN, string selectMN, string assetmn, string serialmn, string tecnicoresp, string data, string CH, string notasap, string status, string obs)
        {
            AssetsClass asset = new AssetsClass();
            string result = asset.GravarDados(num_enc, data_enc, userad, nome, sobrenome, companhia, local, ext, tlm, piso, decMaq, selectTipMaqV, modelpcv, assetpcv, serialpcv, comsemMonitorV, selectMV, assetmv, serialmv, selectTipMaqN, modelpcn, assetpcn, serialpcn, KeyWindows, KeyOffice, comsemMonitorN, selectMN, assetmn, serialmn, tecnicoresp, data, CH, notasap, status, obs);


            string[] body = {"<table style='width:450px;margin:10px auto;padding:5px;border:1px double #000;font-size:14px;'>",
                     "<tr style='color:#088A08;'><th colspan='2'>Dados Pessoais</th></tr>",
                     "<tr><th style='padding:2px;font-variant:small-caps;width:200px;'>Numero Encomenda</th><td style='border:1px dotted #000;width:200px;'>" + num_enc + "</td></tr>",
                     "<tr><th style='padding:2px;font-variant:small-caps;width:200px;'>Data Encomenda</th><td style='border:1px dotted #000;width:200px;'>" + data_enc + "</td></tr>",
                     "<tr><th style='padding:2px;font-variant:small-caps;width:200px;'>User AD</th><td style='border:1px dotted #000;width:200px;'>" + userad + "</td></tr>",
                     "<tr><th style='padding:2px;font-variant:small-caps;width:200px;'>Nome</th><td style='border:1px dotted #000;width:200px;'>" + nome + "</td></tr>",
                     "<tr><th style='padding:2px;font-variant:small-caps;width:200px;'>Sobrenome</th><td style='border:1px dotted #000;width:200px;'>" + sobrenome + "</td></tr>",
                     "<tr><th style='padding:2px;font-variant:small-caps;width:200px;'>Companhia</th><td style='border:1px dotted #000;width:200px;'>" + companhia + "</td></tr>",
                     "<tr><th style='padding:2px;font-variant:small-caps;width:200px;'>Local</th><td style='border:1px dotted #000;width:200px;'>" + local + "</td></tr>",
                     "<tr><th style='padding:2px;font-variant:small-caps;width:200px;'>Ext</th><td style='border:1px dotted #000;width:200px;'>" + ext + "</td></tr>",
                     "<tr><th style='padding:2px;font-variant:small-caps;width:200px;'>Tlm</th><td style='border:1px dotted #000;width:200px;'>" + tlm + "</td></tr>",
                     "<tr><th style='padding:2px;font-variant:small-caps;width:200px;'>Piso</th><td style='border:1px dotted #000;width:200px;'>" + piso + "</td></tr>",
                     "<tr style='color:#088A08;'><th colspan='2'>" + decMaq + "</th></tr>",
                     "<tr style='background: rgb(201,222,150);'><th>Tipo de Maquina Nova</th><td style='border:1px dotted #000;width:200px;'>" + selectTipMaqN + "</td></tr>",
                     "<tr style='background: rgb(201,222,150);'><th>Modelo</th><td style='border:1px dotted #000;width:200px;'>" + modelpcn + "</td></tr>",
                     "<tr style='background: rgb(201,222,150);'><th>Asset</th><td style='border:1px dotted #000;width:200px;'>" + assetpcn + "</td></tr>",
                     "<tr style='background: rgb(201,222,150);'><th>Serial</th><td style='border:1px dotted #000;width:200px;'>" + serialpcn + "</td></tr>",
                     "<tr style='background: rgb(201,222,150);'><th>Chave Windows</th><td style='border:1px dotted #000;width:200px;'>" + KeyWindows + "</td></tr>",
                     "<tr style='background: rgb(201,222,150);'><th>Chave Office</th><td style='border:1px dotted #000;width:200px;'>" + KeyOffice + "</td></tr>",
                     "<tr style='background: rgb(201,222,150);'><th>Com monitor?</th><td style='border:1px dotted #000;width:200px;'>" + comsemMonitorN + "</td></tr>",
                     "<tr style='background: rgb(201,222,150);'><th>Modelo</th><td style='border:1px dotted #000;width:200px;'>" + selectMN + "</td></tr>",
                     "<tr style='background: rgb(201,222,150);'><th>Asset</th><td style='border:1px dotted #000;width:200px;'>" + assetmn + "</td></tr>",
                     "<tr style='background: rgb(201,222,150);'><th>Serial</th><td style='border:1px dotted #000;width:200px;'>" + serialmn + "</td></tr>",
                     "<tr style='background: rgb(234,185,45);'><th>Tipo Maquina Velha</th><td style='border:1px dotted #000;width:200px;'>" + selectTipMaqV + "</td></tr>",
                     "<tr style='background: rgb(234,185,45);'><th>Modelo</th><td style='border:1px dotted #000;width:200px;'>" + modelpcv + "</td></tr>",
                     "<tr style='background: rgb(234,185,45);'><th>Asset</th><td style='border:1px dotted #000;width:200px;'>" + assetpcv + "</td></tr>",
                     "<tr style='background: rgb(234,185,45);'><th>Serial</th><td style='border:1px dotted #000;width:200px;'>" + serialpcv + "</td></tr>",
                     "<tr style='background: rgb(234,185,45);'><th>Com monitor?</th><td style='border:1px dotted #000;width:200px;'>" + comsemMonitorV + "</td></tr>",
                     "<tr style='background: rgb(234,185,45);'><th>Modelo</th><td style='border:1px dotted #000;width:200px;'>" + selectMV + "</td></tr>",
                     "<tr style='background: rgb(234,185,45);''><th>Asset</th><td style='border:1px dotted #000;width:200px;'>" + assetmv + "</td></tr>",
                     "<tr style='background: rgb(234,185,45);'><th>Serial</th><td style='border:1px dotted #000;width:200px;'>" + serialmv + "</td></tr>",
                     "<tr style='color:#088A08;'><th colspan='2'>Dados Tecnicos</th></tr>",
                     "<tr><th style='padding:2px;font-variant:small-caps;width:200px;'>Tecnico Responsavel</th><td style='border:1px dotted #000;width:200px;'>" + tecnicoresp + "</td></tr>",
                     "<tr><th style='padding:2px;font-variant:small-caps;width:200px;'>Data</th><td style='border:1px dotted #000;width:200px;'>" + data + "</td></tr>",
                     "<tr><th style='padding:2px;font-variant:small-caps;width:200px;'>CH</th><td style='border:1px dotted #000;width:200px;'>" + CH + "</td></tr>",
                     "<tr><th style='padding:2px;font-variant:small-caps;width:200px;'>Nota SAP</th><td style='border:1px dotted #000;width:200px;'>" + notasap + "</td></tr>",
                     "<tr><th style='padding:2px;font-variant:small-caps;width:200px;'>Status</th><td style='border:1px dotted #000;width:200px;'>" + status + "</td></tr>",
                     "<tr><th style='padding:2px;font-variant:small-caps;width:200px;'>Obs</th><td style='border:1px dotted #000;width:200px;'>" + obs + "</td></tr>",
                     "</table>"};
            string[] body2 ={"<table style='width:450px;margin:10px auto;padding:5px;border:1px double #000;font-size:14px;'>",
                     "<tr><th style='padding:2px;font-variant:small-caps;width:200px;'>Numero Encomenda</th><td style='border:1px dotted #000;width:200px;'>" + num_enc + "</td></tr>",
                     "<tr><th style='padding:2px;font-variant:small-caps;width:200px;'>Data Encomenda</th><td style='border:1px dotted #000;width:200px;'>" + data_enc + "</td></tr>",
                     "<tr><th style='padding:2px;font-variant:small-caps;width:200px;'>Nome</th><td style='border:1px dotted #000;width:200px;'>" + nome + " " +sobrenome+"</td></tr>",
					 "<tr style='background: rgb(201,222,150);'><th>Modelo</th><td style='border:1px dotted #000;width:200px;'>" + modelpcn + "</td></tr>",
                     "<tr style='background: rgb(201,222,150);'><th>Asset</th><td style='border:1px dotted #000;width:200px;'>" + assetpcn + "</td></tr>",
                     "<tr style='background: rgb(201,222,150);'><th>Serial</th><td style='border:1px dotted #000;width:200px;'>" + serialpcn + "</td></tr>",
                     "<tr><th style='padding:2px;font-variant:small-caps;width:200px;'>Data de Entrega</th><td style='border:1px dotted #000;width:200px;'>" + data + "</td></tr>",
                     "<tr><th style='padding:2px;font-variant:small-caps;width:200px;'>CH</th><td style='border:1px dotted #000;width:200px;'>" + CH + "</td></tr>",
                     "<tr><th style='padding:2px;font-variant:small-caps;width:200px;'>Status</th><td style='border:1px dotted #000;width:200px;'>" + status + "</td></tr>",
                     "</table>"};
            string pattern = "<td style='border:1px dotted #000;width:200px;'></td>";
            Regex regexObj = new Regex(pattern);

            for (int i = 0; i < body.Length; i++)
            {
                if (regexObj.IsMatch(body[i]))
                {
                    body[i] = body[i].Replace(body[i], "");
                }
            }
            string bodymail = String.Join("", body);
            string bodymail2 = String.Join("", body2);
            var message = new System.Net.Mail.MailMessage("mail@domain.com","mail@domain.com")
            {
                Subject = "DSS - Troca de Asset JMR Campo Grande",
                IsBodyHtml = true,
                Body = bodymail
            };

            var message_status_enc = new System.Net.Mail.MailMessage("mail@domain.com","mail@domain.com")
            {
                Subject = "Enc. " + num_enc + " c/ office2013 - " + status,
                IsBodyHtml = true,
                Body = bodymail2
            };
            message_status_enc.CC.Add("mail@domain.com","mail@domain.com");
            var client = new SmtpClient();
            client.EnableSsl = false;
            client.Host = "ip from smtp host";
            client.Port = 25;
            client.UseDefaultCredentials = true;
            client.Send(message);
            if ((modelpcn == "Lifebook A544") || (modelpcn == "Lifebook AH552") || (modelpcn == "Lifebook A532") || (modelpcn == "Lifebook UH552") || (modelpcn == "Lifebook AH532"))
			{
				client.Send(message_status_enc);
			}
            
            return result;
        }
        public bool ApagarRegisto(string id)
        {
            AssetsClass asset = new AssetsClass();
            bool result = asset.ApagarRegisto(id);
            return result;
        }
        public string EditaAsset(int id, string num_enc, string data_enc, string userad, string nome, string sobrenome, string companhia, string local, string ext, string tlm, string piso, string decMaq, string selectTipMaqV, string modelpcv, string assetpcv, string serialpcv, string comsemMonitorV, string selectMV, string assetmv, string serialmv, string selectTipMaqN, string modelpcn, string assetpcn, string serialpcn, string KeyWindows, string KeyOffice, string comsemMonitorN, string selectMN, string assetmn, string serialmn, string tecnicoresp, string data, string CH, string notasap, string status, string obs)
        {
            AssetsClass asset = new AssetsClass();
            string result = asset.EditaDados(id, num_enc, data_enc, userad, nome, sobrenome, companhia, local, ext, tlm, piso, decMaq, selectTipMaqV, modelpcv, assetpcv, serialpcv, comsemMonitorV, selectMV, assetmv, serialmv, selectTipMaqN, modelpcn, assetpcn, serialpcn, KeyWindows, KeyOffice, comsemMonitorN, selectMN, assetmn, serialmn, tecnicoresp, data, CH, notasap, status, obs);


            string[] body = {"<table style='width:450px;margin:10px auto;padding:5px;border:1px double #000;font-size:14px;'>",
                     "<tr style='color:#088A08;'><th colspan='2'>Dados Pessoais</th></tr>",
                     "<tr><th style='padding:2px;font-variant:small-caps;width:200px;'>Registo</th><td style='border:1px dotted #000;width:200px;'>" + id + "</td></tr>",
                     "<tr><th style='padding:2px;font-variant:small-caps;width:200px;'>Numero Encomenda</th><td style='border:1px dotted #000;width:200px;'>" + num_enc + "</td></tr>",
                     "<tr><th style='padding:2px;font-variant:small-caps;width:200px;'>Data Encomenda</th><td style='border:1px dotted #000;width:200px;'>" + data_enc + "</td></tr>",
                     "<tr><th style='padding:2px;font-variant:small-caps;width:200px;'>User AD</th><td style='border:1px dotted #000;width:200px;'>" + userad + "</td></tr>",
                     "<tr><th style='padding:2px;font-variant:small-caps;width:200px;'>Nome</th><td style='border:1px dotted #000;width:200px;'>" + nome + "</td></tr>",
                     "<tr><th style='padding:2px;font-variant:small-caps;width:200px;'>Sobrenome</th><td style='border:1px dotted #000;width:200px;'>" + sobrenome + "</td></tr>",
                     "<tr><th style='padding:2px;font-variant:small-caps;width:200px;'>Companhia</th><td style='border:1px dotted #000;width:200px;'>" + companhia + "</td></tr>",
                     "<tr><th style='padding:2px;font-variant:small-caps;width:200px;'>Local</th><td style='border:1px dotted #000;width:200px;'>" + local + "</td></tr>",
                     "<tr><th style='padding:2px;font-variant:small-caps;width:200px;'>Ext</th><td style='border:1px dotted #000;width:200px;'>" + ext + "</td></tr>",
                     "<tr><th style='padding:2px;font-variant:small-caps;width:200px;'>Tlm</th><td style='border:1px dotted #000;width:200px;'>" + tlm + "</td></tr>",
                     "<tr><th style='padding:2px;font-variant:small-caps;width:200px;'>Piso</th><td style='border:1px dotted #000;width:200px;'>" + piso + "</td></tr>",
                     "<tr style='color:#088A08;'><th colspan='2'>" + decMaq + "</th></tr>",
                     "<tr style='background: rgb(201,222,150);'><th>Tipo de Maquina Nova</th><td style='border:1px dotted #000;width:200px;'>" + selectTipMaqN + "</td></tr>",
                     "<tr style='background: rgb(201,222,150);'><th>Modelo</th><td style='border:1px dotted #000;width:200px;'>" + modelpcn + "</td></tr>",
                     "<tr style='background: rgb(201,222,150);'><th>Asset</th><td style='border:1px dotted #000;width:200px;'>" + assetpcn + "</td></tr>",
                     "<tr style='background: rgb(201,222,150);'><th>Serial</th><td style='border:1px dotted #000;width:200px;'>" + serialpcn + "</td></tr>",
                     "<tr style='background: rgb(201,222,150);'><th>Chave Windows</th><td style='border:1px dotted #000;width:200px;'>" + KeyWindows + "</td></tr>",
                     "<tr style='background: rgb(201,222,150);'><th>Chave Office</th><td style='border:1px dotted #000;width:200px;'>" + KeyOffice + "</td></tr>",
                     "<tr style='background: rgb(201,222,150);'><th>Com monitor?</th><td style='border:1px dotted #000;width:200px;'>" + comsemMonitorN + "</td></tr>",
                     "<tr style='background: rgb(201,222,150);'><th>Modelo</th><td style='border:1px dotted #000;width:200px;'>" + selectMN + "</td></tr>",
                     "<tr style='background: rgb(201,222,150);'><th>Asset</th><td style='border:1px dotted #000;width:200px;'>" + assetmn + "</td></tr>",
                     "<tr style='background: rgb(201,222,150);'><th>Serial</th><td style='border:1px dotted #000;width:200px;'>" + serialmn + "</td></tr>",
                     "<tr style='background: rgb(234,185,45);'><th>Tipo Maquina Velha</th><td style='border:1px dotted #000;width:200px;'>" + selectTipMaqV + "</td></tr>",
                     "<tr style='background: rgb(234,185,45);'><th>Modelo</th><td style='border:1px dotted #000;width:200px;'>" + modelpcv + "</td></tr>",
                     "<tr style='background: rgb(234,185,45);'><th>Asset</th><td style='border:1px dotted #000;width:200px;'>" + assetpcv + "</td></tr>",
                     "<tr style='background: rgb(234,185,45);'><th>Serial</th><td style='border:1px dotted #000;width:200px;'>" + serialpcv + "</td></tr>",
                     "<tr style='background: rgb(234,185,45);'><th>Com monitor?</th><td style='border:1px dotted #000;width:200px;'>" + comsemMonitorV + "</td></tr>",
                     "<tr style='background: rgb(234,185,45);'><th>Modelo</th><td style='border:1px dotted #000;width:200px;'>" + selectMV + "</td></tr>",
                     "<tr style='background: rgb(234,185,45);''><th>Asset</th><td style='border:1px dotted #000;width:200px;'>" + assetmv + "</td></tr>",
                     "<tr style='background: rgb(234,185,45);'><th>Serial</th><td style='border:1px dotted #000;width:200px;'>" + serialmv + "</td></tr>",
                     "<tr style='color:#088A08;'><th colspan='2'>Dados Tecnicos</th></tr>",
                     "<tr><th style='padding:2px;font-variant:small-caps;width:200px;'>Tecnico Responsavel</th><td style='border:1px dotted #000;width:200px;'>" + tecnicoresp + "</td></tr>",
                     "<tr><th style='padding:2px;font-variant:small-caps;width:200px;'>Data</th><td style='border:1px dotted #000;width:200px;'>" + data + "</td></tr>",
                     "<tr><th style='padding:2px;font-variant:small-caps;width:200px;'>CH</th><td style='border:1px dotted #000;width:200px;'>" + CH + "</td></tr>",
                     "<tr><th style='padding:2px;font-variant:small-caps;width:200px;'>Nota SAP</th><td style='border:1px dotted #000;width:200px;'>" + notasap + "</td></tr>",
                     "<tr><th style='padding:2px;font-variant:small-caps;width:200px;'>Status</th><td style='border:1px dotted #000;width:200px;'>" + status + "</td></tr>",
                     "<tr><th style='padding:2px;font-variant:small-caps;width:200px;'>Obs</th><td style='border:1px dotted #000;width:200px;'>" + obs + "</td></tr>",
                     "</table>"};
          
            string pattern = "<td style='border:1px dotted #000;width:200px;'></td>";
            Regex regexObj = new Regex(pattern);

            for (int i = 0; i < body.Length; i++)
            {

                if (regexObj.IsMatch(body[i]))
                {
                    body[i] = body[i].Replace(body[i], "");
                }
            }
            string bodymail = String.Join("", body);
            var message = new System.Net.Mail.MailMessage("mail@domain.com","mail@domain.com")
            {
                Subject = "DSS - Alterado Registo de Asset " + id + ", Nota de Encomenda " + num_enc,
                IsBodyHtml = true,
                Body = bodymail
            };
            var client = new SmtpClient();
            client.EnableSsl = false;
            client.Host = "ip from smtp host";
            client.Port = 25;
            client.UseDefaultCredentials = true;
            client.Send(message);
            return result;
        }
    }
}
