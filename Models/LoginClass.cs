using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace DSSAssets.Models
{
    public class LoginClass
    {
        [Required(ErrorMessage = "UserName Required.")]
        public string username { get; set; }
        [Required(ErrorMessage = "Password Required.")]
        public string password { get; set; }

        private string serverurl = "localhost";
        private string database = "gestaoassets";
        private string user = "admin";
        private string pass = "";

        public string LoginValidation(string username, string password)
        {
            
            string logMessage = "";
            string con = @"server=" + serverurl + ";" + "database=" + database + ";" + "uid=" + user + ";" + "pwd=" + pass + ";";
            using (MySqlConnection conMySQL = new MySqlConnection())
            {
                conMySQL.ConnectionString = con;
                try
                {
                    conMySQL.Open();
                    using (MySqlCommand command = new MySqlCommand())
                    {
                        //MD5 md5hash = MD5.Create();
                        command.Connection = conMySQL;
                        command.Parameters.AddWithValue("@username", username);
                        command.Parameters.AddWithValue("@password", password);
                        command.CommandText = "SELECT COUNT(*) FROM users WHERE user LIKE @username AND pass LIKE @password";
                        //command.ExecuteNonQuery();
                        int result = int.Parse(command.ExecuteScalar().ToString());
                        //Int32 result = (Int32)command.ExecuteScalar();
                        if (result == 1)
                        {
                            logMessage = "true";
                        }
                        else
                        {
                            logMessage = "false";
                        }
                    }
                }
                catch (MySqlException ex)
                {
                    logMessage = ex.Message;
                }
            }
            return logMessage;
        }
    }

    
}