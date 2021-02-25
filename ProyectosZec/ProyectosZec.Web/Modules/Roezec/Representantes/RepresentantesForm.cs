
namespace ProyectosZec.Roezec.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Roezec.Representantes")]
    [BasedOnRow(typeof(Entities.RepresentantesRow), CheckNames = true)]
    public class RepresentantesForm
    {
        public String TipoDoc { get; set; }
        public String Doc { get; set; }
        public Int32 IdRepresentanteFisico { get; set; }
        public String Nombre { get; set; }
        public String Direccion { get; set; }
        public String Cp { get; set; }
        public String Poblacion { get; set; }
        public String Provincia { get; set; }
        public String Pais { get; set; }
        public String Email { get; set; }
        public String Telefono { get; set; }
        public String Descripcion { get; set; }
        public Int32 IdEmpresa { get; set; }
        public DateTime FechaAlta { get; set; }
        public DateTime FechaModificacion { get; set; }
        public DateTime FechaBaja { get; set; }
        public String UsrAlta { get; set; }
        public String UsrModificacion { get; set; }
        public String UsrBaja { get; set; }
        public String MotivoBaja { get; set; }
    }
}