
namespace ProyectosZec.Roezec.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Roezec.Socios")]
    [BasedOnRow(typeof(Entities.SociosRow), CheckNames = true)]
    public class SociosForm
    {
        [Tab("Socio")]
        public String TipoDoc { get; set; }
        public String Doc { get; set; }
        public String TipoPersona { get; set; }
        public String Nombre { get; set; }
        public String Direccion { get; set; }
        public String Cp { get; set; }
        public String Poblacion { get; set; }
        public String Provincia { get; set; }
        public String Pais { get; set; }
        public String Email { get; set; }
        public String Telefono { get; set; }
        public String Descripcion { get; set; }
        [Tab("Empresa")]
        public Int32 IdEmpresa { get; set; }
        public Int32 Participacion { get; set; }
        [Tab("Auditoria")]
        public DateTime FechaAlta { get; set; }
        public DateTime FechaModificacion { get; set; }
        public DateTime FechaBaja { get; set; }
        public String UsrAlta { get; set; }
        public String UsrModificacion { get; set; }
        public String UsrBaja { get; set; }
        public String MotivoBaja { get; set; }
    }
}