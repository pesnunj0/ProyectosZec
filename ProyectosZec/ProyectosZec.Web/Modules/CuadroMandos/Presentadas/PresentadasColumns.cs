
namespace ProyectosZec.CuadroMandos.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("CuadroMandos.Presentadas")]
    [BasedOnRow(typeof(Entities.ProyectosRow), CheckNames = true)]
    public class PresentadasColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ProyectoId { get; set; }
        [EditLink]
        public String Denominacion { get; set; }
        public String Tecnico { get; set; }
        public String Subsector { get; set; }
        public String Isla { get; set; }
        public String Capital { get; set; }
        public String Captacion { get; set; }
        public String PrescriptorInversor { get; set; }
        public String Descripcion { get; set; }
        public String Contacto { get; set; }
        public String Telefono { get; set; }
        public String Email { get; set; }
        public String Estado { get; set; }
        public DateTime FechaInicio { get; set; }
        public DateTime FechaPresentacion { get; set; }
        public DateTime FechaInscripcion { get; set; }
        public DateTime FechaAutorizacion { get; set; }
        public DateTime FechaAmpliacion { get; set; }
        public DateTime FechaBaja { get; set; }
        public Int32 Empleos { get; set; }
        public Int32 Inversion { get; set; }
        public Int32 EmpleoReal { get; set; }
        public String Expediente { get; set; }
        public String Nace { get; set; }
        public Int32 InversionReal { get; set; }
    }
}