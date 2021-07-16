
namespace ProyectosZec.Nuevo_Roezec.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Nuevo_Roezec.Empresas")]
    [BasedOnRow(typeof(Entities.EmpresasRow), CheckNames = true)]
    public class EmpresasColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 EmpresaId { get; set; }
        [EditLink,Width(150)]
        public String Razon { get; set; }
        [DisplayName("Estado"),Width(140),QuickFilter, QuickFilterOption("multiple", true)]
        public String EstadoEmpresaEstado { get; set; }
        [Width(100),QuickFilter]
        public String FormaJuridicaJuridica { get; set; }
        [Width(150),QuickFilter]
        public String TecnicoNombreTecnico { get; set; }
        public String Cif { get; set; }
        [Width(150)]
        public String Direccion { get; set; }
        [Width(150)]
        public String Poblacion { get; set; }
        [Width(100),QuickFilter]
        public String IslaNombreIsla { get; set; }
        public String TelefonoFijo { get; set; }
        public String Movil { get; set; }
        public String Email { get; set; }
        public String Proyecto { get; set; }
        public String Expediente { get; set; }
        [Hidden]
        public String MotivoExencion { get; set; }
        public String TipologiaCapitalCapital { get; set; }
        [DisplayName("Garantía Tasa"),Width(100)]
        public String TipoGarantiaTasaGarantiaTasa { get; set; }
        [DisplayName("Emp. Trasp."),Width(90)]
        public Int32 EmpleoTraspasado { get; set; }
        [DisplayName("Emp. 6 meses"), Width(90)]
        public Int32 Empleo6Meses { get; set; }
        [DisplayName("Emp. Prom."), Width(90)]
        public Int32 EmpleoPromedio { get; set; }
        [DisplayName("Emp. 2 años"), Width(90)]
        public Int32 EmpleoPromedio2Anos { get; set; }
        [DisplayName("Inv. Trasp."), Width(90)]
        public Decimal InversionTraspasada { get; set; }
        [DisplayName("Inv. 2 años"), Width(90)]
        public Decimal Inversion2Anos { get; set; }
 
        //public DateTime FechaAltaRegistro { get; set; }
        //public DateTime FechaBajaRegistro { get; set; }
        //public DateTime FechaBajaEfecto { get; set; }
        //public DateTime FechaRemisionCt { get; set; }
        //public DateTime FechaInformeCt { get; set; }
        //public DateTime FechaRemisionCr { get; set; }
        //public DateTime FechaCaducidadInscripcion { get; set; }
        //public Int16 SentidoCr { get; set; }
        //public Int16 SentidoCt { get; set; }
        //public DateTime FechaInsSolicitud { get; set; }
        //public DateTime FechaInsResolucion { get; set; }
        //public DateTime FechaInsNotificacion { get; set; }
        public String NumTasaLiquidacion { get; set; }
    }
}