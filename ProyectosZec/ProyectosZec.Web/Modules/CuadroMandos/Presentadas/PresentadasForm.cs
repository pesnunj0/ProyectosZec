
namespace ProyectosZec.CuadroMandos.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("CuadroMandos.Presentadas")]
    [BasedOnRow(typeof(Entities.ProyectosRow), CheckNames = true)]
    public class PresentadasForm
    {
        public String Denominacion { get; set; }
        public Int32 TecnicoId { get; set; }
        public Int32 SubsectorId { get; set; }
        public Int32 IslaId { get; set; }
        public Int32 CapitalId { get; set; }
        public String Captacion { get; set; }
        public Int32 PrescriptorInversorId { get; set; }
        public String Descripcion { get; set; }
        public String Contacto { get; set; }
        public String Telefono { get; set; }
        public String Email { get; set; }
        public Int32 EstadoId { get; set; }
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