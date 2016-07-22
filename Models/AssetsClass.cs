using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;


namespace DSSAssets.Models
{
    public class AssetsClass
    {
        //[Required(ErrorMessage = "UserName Required.")]
        public string search { get; set; }
        public string ID { get; set; }
        public string NumeroEncomenda { get; set; }
        public string DataEncomenda { get; set; }
        public string UserAD { get; set; }
        public string Nome { get; set; }
        public string Sobrenome { get; set; }
        public string Companhia { get; set; }
        public string Local { get; set; }
        public string Ext { get; set; }
        public string Tlm { get; set; }
        public string Piso { get; set; }
        public string DeclaracaoMaquina { get; set; }
        public string TipoMaquinaNova { get; set; }
        public string ModeloPCNovo { get; set; }
        public string AssetPCNovo { get; set; }
        public string SerialPCNovo { get; set; }
        public string ChaveOffice { get; set; }
        public string ChaveWindows { get; set; }
        public string Commonitorn { get; set; }
        public string ModeloMonitorNovo { get; set; }
        public string AssetMonitorNovo { get; set; }
        public string SerialMonitorNovo { get; set; }
        public string TipoMaquinaVelha { get; set; }
        public string ModeloPCVelho { get; set; }
        public string AssetPCVelho { get; set; }
        public string SerialPCVelho { get; set; }
        public string Commonitorv { get; set; }
        public string ModeloMonitorVelho { get; set; }
        public string AssetMonitorVelho { get; set; }
        public string SerialMonitorVelho { get; set; }
        public string TecnicoResp { get; set; }
        public string Data { get; set; }
        public string CH { get; set; }
        public string NotaSAP { get; set; }
        public string Status { get; set; }
        public string Obs { get; set; }

        private List<string> _DeclaracaoMaquinaList = new List<string>();
        
        public List<string> DeclaracaoMaquinaList
        {
            get { return _DeclaracaoMaquinaList; }
            set { _DeclaracaoMaquinaList = value; }
        }

        

        //<option value="Nova Maquina">Nova Maquina</option>
        //            <option value="Substituicao de Maquina" >Substituição de Maquina</option>

        public string erro { get; set; }
        
        private string serverurl = "localhost";
        private string database = "gestaoassets";
        private string user = "admin_assets";
        private string pass = "!QAZ@WSX";

        public List<AssetsClass> SearchAsset(string search)
        {
            List<AssetsClass> logMessage = new List<AssetsClass>();
            string con = @"server=" + serverurl + ";" + "database=" + database + ";" + "uid=" + user + ";" + "pwd=" + pass + ";";
            using (MySqlConnection conMySQL = new MySqlConnection())
            {
                conMySQL.ConnectionString = con;
                try
                {
                    conMySQL.Open();
                    using (MySqlCommand command = new MySqlCommand())
                    {
                        command.Connection = conMySQL;
                        command.Parameters.AddWithValue("@pesq", search);
                        command.CommandText = "SELECT * FROM assets WHERE num_enc LIKE @pesq OR ID LIKE @pesq OR userad LIKE @pesq OR Nome LIKE @pesq OR Sobrenome LIKE @pesq " +
                        "OR ModeloPCN LIKE @pesq OR ModeloMN LIKE @pesq OR ModeloPCV LIKE @pesq OR ModeloMV LIKE @pesq " +
                        "OR AssetPCN LIKE @pesq OR SerialPCN LIKE @pesq OR AssetMN LIKE @pesq OR SerialMN LIKE @pesq " +
                        "OR AssetPCV LIKE @pesq OR SerialPCV LIKE @pesq OR SerialPCN LIKE @pesq OR AssetMV LIKE @pesq " +
                        "OR SerialMV LIKE @pesq OR CH LIKE @pesq OR NotaSAP LIKE @pesq";
                        MySqlDataReader dataReader = command.ExecuteReader();
                        if (dataReader.HasRows)
                        {
 
                            while (dataReader.Read())
                            {
                                logMessage.Add(new AssetsClass(){
                                    ID = dataReader.IsDBNull(0) ? null : dataReader.GetString(0),
                                    NumeroEncomenda = dataReader.IsDBNull(1) ? null : dataReader.GetString(1),
                                    DataEncomenda = dataReader.IsDBNull(2) ? null : dataReader.GetString(2),
                                    UserAD = dataReader.IsDBNull(3) ? null : dataReader.GetString(3),
                                    Nome = dataReader.IsDBNull(4) ? null : dataReader.GetString(4),
                                    Sobrenome = dataReader.IsDBNull(5) ? null : dataReader.GetString(5),
                                    Companhia = dataReader.IsDBNull(6) ? null : dataReader.GetString(6),
                                    Local = dataReader.IsDBNull(7) ? null : dataReader.GetString(7),
                                    Ext = dataReader.IsDBNull(8) ? null : dataReader.GetString(8),
                                    Tlm = dataReader.IsDBNull(9) ? null : dataReader.GetString(9),
                                    Piso = dataReader.IsDBNull(10) ? null : dataReader.GetString(10),
                                    DeclaracaoMaquina = dataReader.IsDBNull(11) ? null : dataReader.GetString(11),
                                    TipoMaquinaNova = dataReader.IsDBNull(12) ? null : dataReader.GetString(12),
                                    ModeloPCNovo = dataReader.IsDBNull(13) ? null : dataReader.GetString(13),
                                    AssetPCNovo = dataReader.IsDBNull(14) ? null : dataReader.GetString(14),
                                    SerialPCNovo = dataReader.IsDBNull(15) ? null : dataReader.GetString(15),
                                    ChaveOffice = dataReader.IsDBNull(16) ? null : dataReader.GetString(16),
                                    ChaveWindows = dataReader.IsDBNull(17) ? null : dataReader.GetString(17),
                                    Commonitorn = dataReader.IsDBNull(18) ? null : dataReader.GetString(18),
                                    ModeloMonitorNovo = dataReader.IsDBNull(19) ? null : dataReader.GetString(19),
                                    AssetMonitorNovo = dataReader.IsDBNull(20) ? null : dataReader.GetString(20),
                                    SerialMonitorNovo = dataReader.IsDBNull(21) ? null : dataReader.GetString(21),
                                    TipoMaquinaVelha = dataReader.IsDBNull(22) ? null : dataReader.GetString(22),
                                    ModeloPCVelho = dataReader.IsDBNull(23) ? null : dataReader.GetString(23),
                                    AssetPCVelho = dataReader.IsDBNull(24) ? null : dataReader.GetString(24),
                                    SerialPCVelho = dataReader.IsDBNull(25) ? null : dataReader.GetString(25),
                                    Commonitorv = dataReader.IsDBNull(26) ? null : dataReader.GetString(26),
                                    ModeloMonitorVelho = dataReader.IsDBNull(27) ? null : dataReader.GetString(27),
                                    AssetMonitorVelho = dataReader.IsDBNull(28) ? null : dataReader.GetString(28),
                                    SerialMonitorVelho = dataReader.IsDBNull(29) ? null : dataReader.GetString(29),
                                    TecnicoResp = dataReader.IsDBNull(30) ? null : dataReader.GetString(30),
                                    Data = dataReader.IsDBNull(31) ? null : dataReader.GetString(31),
                                    CH = dataReader.IsDBNull(32) ? null : dataReader.GetString(32),
                                    NotaSAP = dataReader.IsDBNull(33) ? null : dataReader.GetString(33),
                                    Status = dataReader.IsDBNull(34) ? null : dataReader.GetString(34),
                                    Obs = dataReader.IsDBNull(35) ? null : dataReader.GetString(35)
                     
                                });
                    
                            }
                        }
                    }
                }
                catch (MySqlException ex)
                {
                    logMessage.Add(new AssetsClass(){ erro = ex.Message});
                }
            }
            return logMessage;
        }
        public List<AssetsClass> ListarTodos()
        {
            List<AssetsClass> listar = new List<AssetsClass>();
            string con = @"server=" + serverurl + ";" + "database=" + database + ";" + "uid=" + user + ";" + "pwd=" + pass + ";";
            using (MySqlConnection conMySQL = new MySqlConnection())
            {
                conMySQL.ConnectionString = con;
                try
                {
                    conMySQL.Open();
                    using (MySqlCommand command = new MySqlCommand())
                    {
                        command.Connection = conMySQL;
                        command.CommandText = "SELECT * FROM assets";
                        MySqlDataReader dataReader = command.ExecuteReader();
                        if (dataReader.HasRows)
                        {
                            while (dataReader.Read())
                            {
                                listar.Add(new AssetsClass()
                                {
                                    ID = dataReader.IsDBNull(0) ? null : dataReader.GetString(0),
                                    NumeroEncomenda = dataReader.IsDBNull(1) ? null : dataReader.GetString(1),
                                    DataEncomenda = dataReader.IsDBNull(2) ? null : dataReader.GetString(2),
                                    UserAD = dataReader.IsDBNull(3) ? null : dataReader.GetString(3),
                                    Nome = dataReader.IsDBNull(4) ? null : dataReader.GetString(4),
                                    Sobrenome = dataReader.IsDBNull(5) ? null : dataReader.GetString(5),
                                    Companhia = dataReader.IsDBNull(6) ? null : dataReader.GetString(6),
                                    Local = dataReader.IsDBNull(7) ? null : dataReader.GetString(7),
                                    Ext = dataReader.IsDBNull(8) ? null : dataReader.GetString(8),
                                    Tlm = dataReader.IsDBNull(9) ? null : dataReader.GetString(9),
                                    Piso = dataReader.IsDBNull(10) ? null : dataReader.GetString(10),
                                    DeclaracaoMaquina = dataReader.IsDBNull(11) ? null : dataReader.GetString(11),
                                    TipoMaquinaNova = dataReader.IsDBNull(12) ? null : dataReader.GetString(12),
                                    ModeloPCNovo = dataReader.IsDBNull(13) ? null : dataReader.GetString(13),
                                    AssetPCNovo = dataReader.IsDBNull(14) ? null : dataReader.GetString(14),
                                    SerialPCNovo = dataReader.IsDBNull(15) ? null : dataReader.GetString(15),
                                    ChaveOffice = dataReader.IsDBNull(16) ? null : dataReader.GetString(16),
                                    ChaveWindows = dataReader.IsDBNull(17) ? null : dataReader.GetString(17),
                                    Commonitorn = dataReader.IsDBNull(18) ? null : dataReader.GetString(18),
                                    ModeloMonitorNovo = dataReader.IsDBNull(19) ? null : dataReader.GetString(19),
                                    AssetMonitorNovo = dataReader.IsDBNull(20) ? null : dataReader.GetString(20),
                                    SerialMonitorNovo = dataReader.IsDBNull(21) ? null : dataReader.GetString(21),
                                    TipoMaquinaVelha = dataReader.IsDBNull(22) ? null : dataReader.GetString(22),
                                    ModeloPCVelho = dataReader.IsDBNull(23) ? null : dataReader.GetString(23),
                                    AssetPCVelho = dataReader.IsDBNull(24) ? null : dataReader.GetString(24),
                                    SerialPCVelho = dataReader.IsDBNull(25) ? null : dataReader.GetString(25),
                                    Commonitorv = dataReader.IsDBNull(26) ? null : dataReader.GetString(26),
                                    ModeloMonitorVelho = dataReader.IsDBNull(27) ? null : dataReader.GetString(27),
                                    AssetMonitorVelho = dataReader.IsDBNull(28) ? null : dataReader.GetString(28),
                                    SerialMonitorVelho = dataReader.IsDBNull(29) ? null : dataReader.GetString(29),
                                    TecnicoResp = dataReader.IsDBNull(30) ? null : dataReader.GetString(30),
                                    Data = dataReader.IsDBNull(31) ? null : dataReader.GetString(31),
                                    CH = dataReader.IsDBNull(32) ? null : dataReader.GetString(32),
                                    NotaSAP = dataReader.IsDBNull(33) ? null : dataReader.GetString(33),
                                    Status = dataReader.IsDBNull(34) ? null : dataReader.GetString(34),
                                    Obs = dataReader.IsDBNull(35) ? null : dataReader.GetString(35)

                                });

                            }
                        }
                    }
                }
                catch (MySqlException ex)
                {
                    listar.Add(new AssetsClass() { erro = ex.Message });
                }
            }
            return listar;
        }
        public string GravarDados(string num_enc, string data_enc, string userad, string nome, string sobrenome, string companhia, string local, string ext, string tlm, string piso, string decMaq, string selectTipMaqV, string modelpcv, string assetpcv, string serialpcv, string comsemMonitorV, string selectMV, string assetmv, string serialmv, string selectTipMaqN, string modelpcn, string assetpcn, string serialpcn, string KeyWindows, string KeyOffice, string comsemMonitorN, string selectMN, string assetmn, string serialmn, string tecnicoresp, string data, string CH, string notasap, string status, string obs)
        {
            
            string result;
            string con = @"server=" + serverurl + ";" + "database=" + database + ";" + "uid=" + user + ";" + "pwd=" + pass + ";";
            using (MySqlConnection conMySQL = new MySqlConnection())
            {
                conMySQL.ConnectionString = con;
                try
                {
                    conMySQL.Open();
                    using (MySqlCommand command = new MySqlCommand())
                    {
                        command.Connection = conMySQL;
                        command.Parameters.AddWithValue("@num_enc", num_enc);
                        command.Parameters.AddWithValue("@data_enc", data_enc);
                        command.Parameters.AddWithValue("@userad", userad);
                        command.Parameters.AddWithValue("@nome", nome);
                        command.Parameters.AddWithValue("@sobrenome", sobrenome);
                        command.Parameters.AddWithValue("@companhia", companhia);
                        command.Parameters.AddWithValue("@local", local);
                        command.Parameters.AddWithValue("@ext", ext);
                        command.Parameters.AddWithValue("@tlm", tlm);
                        command.Parameters.AddWithValue("@piso", piso);
                        command.Parameters.AddWithValue("@decMaq", decMaq);
                        command.Parameters.AddWithValue("@selectTipMaqN", selectTipMaqN);
                        command.Parameters.AddWithValue("@modelpcn", modelpcn);
                        command.Parameters.AddWithValue("@assetpcn", assetpcn);
                        command.Parameters.AddWithValue("@serialpcn", serialpcn);
                        command.Parameters.AddWithValue("@KeyWindows", KeyWindows);
                        command.Parameters.AddWithValue("@KeyOffice", KeyOffice);
                        command.Parameters.AddWithValue("@comsemMonitorN", comsemMonitorN);
                        command.Parameters.AddWithValue("@selectMN", selectMN);
                        command.Parameters.AddWithValue("@assetmn", assetmn);
                        command.Parameters.AddWithValue("@serialmn", serialmn);
                        command.Parameters.AddWithValue("@selectTipMaqV", selectTipMaqV);
                        command.Parameters.AddWithValue("@modelpcv", modelpcv);
                        command.Parameters.AddWithValue("@assetpcv", assetpcv);
                        command.Parameters.AddWithValue("@serialpcv", serialpcv);
                        command.Parameters.AddWithValue("@comsemMonitorV", comsemMonitorV);
                        command.Parameters.AddWithValue("@selectMV", selectMV);
                        command.Parameters.AddWithValue("@assetmv", assetmv);
                        command.Parameters.AddWithValue("@serialmv", serialmv);
                        command.Parameters.AddWithValue("@tecnicoresp", tecnicoresp);
                        command.Parameters.AddWithValue("@data", data);
                        command.Parameters.AddWithValue("@CH", CH);
                        command.Parameters.AddWithValue("@notasap", notasap);
                        command.Parameters.AddWithValue("@status", status);
                        command.Parameters.AddWithValue("@obs", obs);
                        command.CommandText = "INSERT INTO assets (num_enc,data_enc,userad,Nome,Sobrenome,Companhia,Local,Ext,Tlm,Pisoori,DecMaquina,TipoComputadorN,ModeloPCN,AssetPCN,SerialPCN,KeyOffice,KeyWindows,commonitorn,ModeloMN,AssetMN,SerialMN,TipoComputadorV,ModeloPCV,AssetPCV,SerialPCV,commonitorv,ModeloMV,AssetMV,SerialMV,TecnicoResp,Data,CH,NotaSAP,Status,Obs) VALUES (@num_enc,@data_enc,@userad,@nome,@sobrenome,@companhia,@local,@ext,@tlm,@piso,@decMaq,@selectTipMaqN,@modelpcn,@assetpcn,@serialpcn,@KeyOffice,@KeyWindows,@comsemMonitorN,@selectMN,@assetmn,@serialmn,@selectTipMaqV,@modelpcv,@assetpcv,@serialpcv,@comsemMonitorV,@selectMV,@assetmv,@serialmv,@tecnicoresp,@data,@CH,@notasap,@status,@obs)";
                        command.ExecuteNonQuery();
                        command.CommandText = "INSERT INTO status_enc (Numero_encomenda,Data_da_Encomenda,Nome,Data_Entrega,CH,Status) VALUES (@num_enc,@data_enc,@nome,@data,@CH,@status)";
                        command.ExecuteNonQuery();
                        result = "true";
                            // EnviarMail(bodymail);
                       // EnviarMail(bodymail);
                    }
                }
                catch (MySqlException ex)
                {
                    result = ex.Message;
                }
            }
            return result;
        }
        public bool ApagarRegisto(string id)
        {
            bool result;
            string con = @"server=" + serverurl + ";" + "database=" + database + ";" + "uid=" + user + ";" + "pwd=" + pass + ";";
            using (MySqlConnection conMySQL = new MySqlConnection())
            {
                conMySQL.ConnectionString = con;
                try
                {
                    conMySQL.Open();
                    using (MySqlCommand command = new MySqlCommand())
                    {
                        command.Connection = conMySQL;
                        command.CommandText = "DELETE FROM assets WHERE ID = @id";
                        command.Parameters.AddWithValue("@id", id);
                        command.ExecuteNonQuery();
                        result = true;
                    }
                }
                catch (MySqlException)
                {
                    result = false;
                }
            }
            return result;
        }
        public string EditaDados(int id, string num_enc, string data_enc, string userad, string nome, string sobrenome, string companhia, string local, string ext, string tlm, string piso, string decMaq, string selectTipMaqV, string modelpcv, string assetpcv, string serialpcv, string comsemMonitorV, string selectMV, string assetmv, string serialmv, string selectTipMaqN, string modelpcn, string assetpcn, string serialpcn, string keywindows, string keyoffice, string comsemMonitorN, string selectMN, string assetmn, string serialmn, string tecnicoresp, string data, string CH, string notasap, string status, string obs)
        {

            string result;
            string con = @"server=" + serverurl + ";" + "database=" + database + ";" + "uid=" + user + ";" + "pwd=" + pass + ";";
            using (MySqlConnection conMySQL = new MySqlConnection())
            {
                conMySQL.ConnectionString = con;
                try
                {
                    conMySQL.Open();
                    using (MySqlCommand command = new MySqlCommand())
                    {
                        command.Connection = conMySQL;
                        command.Parameters.AddWithValue("@id", id);
                        command.Parameters.AddWithValue("@num_enc", num_enc);
                        command.Parameters.AddWithValue("@data_enc", data_enc);
                        command.Parameters.AddWithValue("@userad", userad);
                        command.Parameters.AddWithValue("@nome", nome);
                        command.Parameters.AddWithValue("@sobrenome", sobrenome);
                        command.Parameters.AddWithValue("@companhia", companhia);
                        command.Parameters.AddWithValue("@local", local);
                        command.Parameters.AddWithValue("@ext", ext);
                        command.Parameters.AddWithValue("@tlm", tlm);
                        command.Parameters.AddWithValue("@piso", piso);
                        command.Parameters.AddWithValue("@decMaq", decMaq);
                        command.Parameters.AddWithValue("@selectTipMaqN", selectTipMaqN);
                        command.Parameters.AddWithValue("@modelpcn", modelpcn);
                        command.Parameters.AddWithValue("@assetpcn", assetpcn);
                        command.Parameters.AddWithValue("@serialpcn", serialpcn);
                        command.Parameters.AddWithValue("@KeyWindows", keywindows);
                        command.Parameters.AddWithValue("@KeyOffice", keyoffice);
                        command.Parameters.AddWithValue("@comsemMonitorN", comsemMonitorN);
                        command.Parameters.AddWithValue("@selectMN", selectMN);
                        command.Parameters.AddWithValue("@assetmn", assetmn);
                        command.Parameters.AddWithValue("@serialmn", serialmn);
                        command.Parameters.AddWithValue("@selectTipMaqV", selectTipMaqV);
                        command.Parameters.AddWithValue("@modelpcv", modelpcv);
                        command.Parameters.AddWithValue("@assetpcv", assetpcv);
                        command.Parameters.AddWithValue("@serialpcv", serialpcv);
                        command.Parameters.AddWithValue("@comsemMonitorV", comsemMonitorV);
                        command.Parameters.AddWithValue("@selectMV", selectMV);
                        command.Parameters.AddWithValue("@assetmv", assetmv);
                        command.Parameters.AddWithValue("@serialmv", serialmv);
                        command.Parameters.AddWithValue("@tecnicoresp", tecnicoresp);
                        command.Parameters.AddWithValue("@data", data);
                        command.Parameters.AddWithValue("@CH", CH);
                        command.Parameters.AddWithValue("@notasap", notasap);
                        command.Parameters.AddWithValue("@status", status);
                        command.Parameters.AddWithValue("@obs", obs);
                        command.CommandText = "UPDATE assets SET num_enc = @num_enc,data_enc = @data_enc,userad = @userad,Nome = @nome,Sobrenome = @sobrenome,Companhia = @companhia,Local = @local,Ext = @ext,Tlm = @tlm,Pisoori = @piso,DecMaquina = @decMaq,TipoComputadorN = @selectTipMaqN,ModeloPCN = @modelpcn,AssetPCN = @assetpcn,SerialPCN = @serialpcn,KeyWindows = @KeyWindows,KeyOffice = @KeyOffice,commonitorn = @comsemMonitorN,ModeloMN = @selectMN,AssetMN = @assetmn,SerialMN = @serialmn,TipoComputadorV = @selectTipMaqV,ModeloPCV = @modelpcv,AssetPCV = @assetpcv,SerialPCV = @serialpcv,commonitorv = @comsemMonitorV,ModeloMV = @selectMV,AssetMV = @assetmv,SerialMV = @serialmv,TecnicoResp = @tecnicoresp,Data = @data,CH = @CH,NotaSAP = @notasap,Status = @status,Obs = @obs WHERE ID = @id";
                        command.ExecuteNonQuery();    
                        result = "true";
                        // EnviarMail(bodymail);
                        // EnviarMail(bodymail);
                    }
                }
                catch (MySqlException ex)
                {
                    result = ex.Message;
                }
            }
            return result;
        }
    }
}